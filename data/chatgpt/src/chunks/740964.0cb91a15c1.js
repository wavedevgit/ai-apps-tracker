export const __rspack_esm_ids = [740964];
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
            g: () => m,
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
            m = a.object({
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
            m = n("DVOM"),
            p = n("OWtl"),
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
            let t, n, l, c, d, u, m, v, y, k, R, G, L, B, z, F, D, H, W, q, U, K, V = (0, r.c)(70),
                {
                    account: Q,
                    accountId: Y,
                    userId: Z,
                    onClose: $,
                    onSwitchToWork: J
                } = e,
                X = (0, s.y)(p.a),
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
            V[10] !== $ ? (d = () => {
                $(), (0, E.f)({
                    href: new URL("/codex/cloud", T.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, V[10] = $, V[11] = d) : d = V[11];
            let eu = d;
            V[12] !== Q.account.subscription_seat_pools_enabled || V[13] !== Y || V[14] !== eu || V[15] !== el || V[16] !== et || V[17] !== ee || V[18] !== es || V[19] !== ed || V[20] !== $ || V[21] !== J || V[22] !== en || V[23] !== X || V[24] !== Z ? (u = async () => {
                if ("requesting" !== en) {
                    if (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), es && !el) {
                        let e = new URL("/admin/members", T.h);
                        e.searchParams.set("account_id", Y), et && e.searchParams.set("search", et);
                        let t = e.toString(),
                            n = (0, P.c)(X, t, Y),
                            a = null == n ? null : await n;
                        $(), (0, E.f)({
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
                                            user_id: Z
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
                                            user_id: Z
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
                            })]), er.current && $()
                        } else {
                            if ((0, b.b)(X, Y), await w.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: Y
                                        }
                                    }
                                }), !er.current) return;
                            J ? ($(), J()) : eu(), X.get(A.f).success(ee.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted",
                                description: "Success toast shown after requesting ChatGPT access from the modal"
                            }))
                        }
                    } catch (e) {
                        er.current && ea(N(e) ?? "error")
                    }
                }
            }, V[12] = Q.account.subscription_seat_pools_enabled, V[13] = Y, V[14] = eu, V[15] = el, V[16] = et, V[17] = ee, V[18] = es, V[19] = ed, V[20] = $, V[21] = J, V[22] = en, V[23] = X, V[24] = Z, V[25] = u) : u = V[25];
            let eh = u;
            V[26] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.title",
                defaultMessage: "You don’t have access to Chat on this plan",
                description: "Title of the seat access explanation on the Chat surface. Chat is a product name."
            }), V[26] = m) : m = V[26];
            let em = m;
            V[27] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.message",
                defaultMessage: "You are assigned Work access only. Reach out to your admin to request access to ChatGPT.",
                description: "Explanation for workspace members who need admin approval for ChatGPT access"
            }), V[27] = v) : v = V[27];
            let ep = v;
            if (ec) {
                let e;
                V[28] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.ownerMessage",
                    defaultMessage: "Your current seat is Work-only. Update your seat type in Workspace settings to start using ChatGPT.",
                    description: "Explanation for workspace owners and paid admins who can update their seat to get ChatGPT access"
                }), V[28] = e) : e = V[28], ep = e
            } else if (eo) {
                let e;
                V[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.adminMessage",
                    defaultMessage: "You are assigned Work access only. Ask your workspace owner to buy ChatGPT seats, then update your seat type in Workspace settings.",
                    description: "Explanation for unpaid workspace admins who need an owner to buy ChatGPT seats"
                }), V[29] = e) : e = V[29], ep = e
            }
            V[30] !== ed || V[31] !== $ ? (y = e => {
                e || (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED"), $())
            }, V[30] = ed, V[31] = $, V[32] = y) : y = V[32], V[33] !== eh ? (k = e => {
                e.preventDefault(), eh()
            }, V[33] = eh, V[34] = k) : k = V[34], V[35] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, a.jsx)(S.e, {
                className: "heading-lg font-semibold",
                children: em
            }), V[35] = R) : R = V[35], V[36] !== ep ? (G = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [R, (0, a.jsx)(S.d, {
                    className: "text-lg leading-6 text-secondary",
                    children: ep
                })]
            }), V[36] = ep, V[37] = G) : G = V[37];
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
            }), V[40] = eg, V[41] = ef, V[42] = L, V[43] = B) : B = V[43], V[44] !== eu || V[45] !== ed || V[46] !== $ || V[47] !== J ? (z = () => {
                J ? ($(), J()) : (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), eu())
            }, V[44] = eu, V[45] = ed, V[46] = $, V[47] = J, V[48] = z) : z = V[48], V[49] !== J ? (F = J ? (0, a.jsx)(i.a, {
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
            }), V[51] = z, V[52] = F, V[53] = D) : D = V[53], V[54] !== B || V[55] !== D ? (H = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [B, D]
            }), V[54] = B, V[55] = D, V[56] = H) : H = V[56], V[57] !== ee || V[58] !== en ? (W = null != en && "requesting" !== en ? (0, a.jsx)("p", {
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
            }) : null, V[57] = ee, V[58] = en, V[59] = W) : W = V[59], V[60] !== G || V[61] !== H || V[62] !== W ? (q = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-8 p-10 text-center",
                children: [G, H, W]
            }), V[60] = G, V[61] = H, V[62] = W, V[63] = q) : q = V[63], V[64] !== q || V[65] !== k ? (U = (0, a.jsx)(j.b, {
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
                h = (0, s.y)(p.a),
                m = (0, s.z)(G.a),
                g = (0, s.z)(d.t),
                f = (0, l.Z)();
            if ("restricted" !== m.status) return null;
            let v = `${m.accountId}:${m.userId}`;
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
                    modeToggle: p,
                    onSwitchToWork: g
                } = e,
                f = (0, s.z)(G.a),
                [v, y] = (0, o.useState)(!1);
            return "restricted" !== f.status ? null : (u[0] !== p ? (t = null == p ? null : (0, a.jsx)(m.c, {
                children: p
            }), u[0] = p, u[1] = t) : t = u[1], u[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)("h1", {
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
                    m = void 0 === c ? "floating" : c,
                    p = (0, s.y)(i.a),
                    g = (0, s.z)("home" === p.value.routeKind && l.a),
                    f = g ? "floating" : m,
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
                        name: m,
                        ready: p,
                        failed: g
                    } = e,
                    f = void 0 !== g && g,
                    v = (0, s.useRef)(!1),
                    y = (0, s.useRef)(null);
                h[0] !== m ? (t = () => ({
                    name: m,
                    key: crypto.randomUUID(),
                    startedAtMs: performance.timeOrigin + performance.now()
                }), h[0] = m, h[1] = t) : t = h[1];
                let [b] = (0, s.useState)(t);
                return h[2] !== b ? (n = () => (v.current = !0, y.current = y.current ?? o.a.start(b.name, {}, b), y.current.mark("route_entered"), () => {
                    v.current = !1, queueMicrotask(() => {
                        v.current || y.current?.abort("navigation_away")
                    })
                }), l = [b], h[2] = b, h[3] = n, h[4] = l) : (n = h[3], l = h[4]), (0, s.useEffect)(n, l), h[5] !== f || h[6] !== p ? (c = () => {
                    !p && f && y.current?.fail("load_failed")
                }, d = [p, f], h[5] = f, h[6] = p, h[7] = c, h[8] = d) : (c = h[7], d = h[8]), (0, s.useEffect)(c, d), h[9] !== p ? (u = p ? (0, a.jsx)(i.a, {
                    requireVisibleAtPaint: !0,
                    onPaint: () => {
                        y.current?.mark("content_visible"), y.current?.end()
                    }
                }) : null, h[9] = p, h[10] = u) : u = h[10], u
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
            m = (0, s.d)(i.a, (e, t) => {
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
            c: m,
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
            m = n("ygO2"),
            p = n("JNtf"),
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
                [h, m] = (0, c.useState)(!1);
            if (h) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(S, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(S, {}), i[1] = t) : t = i[1], i[2] !== d || i[3] !== u ? (n = d && !0 === u ? (0, a.jsx)(w, {
                onError: () => m(!0)
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
                m = h.businessName ?? null,
                p = h.logoUrl ?? null;
            return l[0] !== m || l[1] !== p ? (t = (0, a.jsx)(u.a, {
                alt: "",
                name: m,
                size: "md",
                src: p
            }), l[0] = m, l[1] = p, l[2] = t) : t = l[2], l[3] !== h.businessName ? (n = (0, a.jsx)("span", {
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
                    p = i.businessName ?? null,
                    g = i.logoUrl ?? null;
                n[7] !== p || n[8] !== g ? (e = (0, a.jsx)(u.a, {
                    alt: "",
                    name: p,
                    size: "lg",
                    src: g
                }), n[7] = p, n[8] = g, n[9] = e) : e = n[9], n[10] !== i.businessName ? (r = (0, a.jsx)("h1", {
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
                        children: c.map(e => (0, a.jsx)(m.a, {
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
            }, P[6] = R, P[7] = o) : o = P[7], P[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(I, {}), P[8] = i) : i = P[8], P[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(p.e, {
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
                children: [l, (0, a.jsx)(p.d, {
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
                children: (0, a.jsx)(m.a, {
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
            }), P[21] = T, P[22] = o, P[23] = S) : S = P[23], P[24] !== N || P[25] !== S || P[26] !== n || P[27] !== s ? (A = (0, a.jsx)(p.b, {
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
                m = (0, s.z)(l.b),
                p = m?.conversationId === u && m.ready;
            return p || !0 === d.showDisclosureModal ? (c[0] !== p || c[1] !== d || c[2] !== m ? (t = p ? {
                ...d,
                showDisclosureModal: !m.presented
            } : d, c[0] = p, c[1] = d, c[2] = m, c[3] = t) : t = c[3], c[4] !== p || c[5] !== u || c[6] !== h ? (n = p ? () => (0, l.a)(h, u) : void 0, c[4] = p, c[5] = u, c[6] = h, c[7] = n) : n = c[7], c[8] !== t || c[9] !== n ? (i = (0, a.jsx)(M, {
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
        let m = new WeakSet;

        function p(e) {
            let t, n, a = (0, r.c)(5),
                {
                    error: s,
                    onShown: i
                } = e,
                l = (0, o.useEffectEvent)(i);
            return a[0] !== s || a[1] !== l ? (t = () => {
                if (null != s) {
                    if ((0, u.e)(s)) {
                        if (m.has(s)) return;
                        m.add(s)
                    }
                    l()
                }
            }, a[0] = s, a[1] = l, a[2] = t) : t = a[2], a[3] !== s ? (n = [s], a[3] = s, a[4] = n) : n = a[4], (0, o.useEffect)(t, n), null
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, m, g, f, v, y, b = (0, r.c)(24),
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
                b[4] !== w || b[5] !== _ || b[6] !== j ? (n = () => j(_, w), b[4] = w, b[5] = _, b[6] = j, b[7] = n) : n = b[7], b[8] !== _ || b[9] !== n ? (o = (0, a.jsx)(p, {
                    error: _,
                    onShown: n
                }), b[8] = _, b[9] = n, b[10] = o) : o = b[10], b[11] !== T || b[12] !== o ? (m = (0, a.jsxs)(a.Fragment, {
                    children: [o, T]
                }), b[11] = T, b[12] = o, b[13] = m) : m = b[13];
                let E = m;
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
            m = n("dQRk"),
            p = n("vVgo"),
            g = n("gyrn"),
            f = n("LOqV"),
            v = n("QmkR");

        function y(e, t) {
            let n = e.query.getData(h.chatGptConversationQueryById$, t) ?? (0, f.g)(e.queryClient, t);
            if (null != n) return n;
            let a = e.get(m.k).find(n => e.get(m.j, n) === t);
            if (!(null == a || e.get(m.A, a))) return {
                id: t,
                conversation_origin: e.get(m.x, a),
                gizmo_id: e.get(m.R, a),
                is_starred: !1,
                title: e.get(m.cb, a)
            }
        }

        function b(e, t) {
            let n = e.get(m.j, t);
            return null == n ? null : e.query.snapshot(h.chatGptConversationQueryById$, n).getData() ?? null
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n = b(e, t);
                null != n && (0, l.a)(e, n.conversation_id)
            },
            b: y,
            c: function(e, t) {
                let n = e.get(m.j, t);
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
                let s = e.get(m.D, t) ? e.get(m.cb, t) : a.title,
                    o = (0, p.a)(a.context_scopes) ? a.gizmo_id : void 0,
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
                let t, n, m, p, g, f, v, y = (0, a.c)(16),
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
                }, y[0] = b, y[1] = C, y[2] = x, y[3] = t) : t = y[3], (0, o.a)("markThreadUnread", t), y[4] !== b || y[5] !== x ? (n = () => void(0, d.renameActiveChatGptConversation)(x, b), m = [b, x], y[4] = b, y[5] = x, y[6] = n, y[7] = m) : (n = y[6], m = y[7]), (0, l.d)("rename-thread", n, m), y[8] !== b || y[9] !== x ? (p = () => (0, d.c)(x, b), g = [b, x], y[8] = b, y[9] = x, y[10] = p, y[11] = g) : (p = y[10], g = y[11]), (0, l.d)("toggle-thread-pin", p, g), y[12] !== b || y[13] !== x ? (f = () => (0, d.a)(x, b), v = [b, x], y[12] = b, y[13] = x, y[14] = f, y[15] = v) : (f = y[14], v = y[15]), (0, l.d)("archive-thread", f, v), null
            }
        })
    }),
    XFIu: (function(e, t, n) {
        n.d(t, {
            a: () => oQ,
            ChatGptConversationPage: () => oK,
            ChatGptSharedConversationPage: () => oV
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
            m = n("iTtm"),
            p = n("bg18"),
            g = n("AuIy"),
            f = n("iqEK"),
            v = n("NRIv"),
            y = n("zd8w"),
            b = n("v7qY"),
            x = n("Wf1j"),
            C = n("jqIZ"),
            _ = n("bn59"),
            w = n("OY84"),
            I = n("Yxds"),
            T = n("StMt"),
            S = n("E8Sp"),
            j = n("z0li"),
            E = n("QcFS"),
            A = n("I7bK"),
            P = n("ZU27"),
            M = n("Pyg2"),
            k = n("ZIh4"),
            R = n("O0M0"),
            O = n("Cslg"),
            N = n("OFP1"),
            G = n("ItIk"),
            L = (n("AZW7"), n("jov5")),
            B = n("dQRk"),
            z = n("tSEg"),
            F = n("Ro2M"),
            D = n("bN4H"),
            H = n("TS05");

        function W(e) {
            let t, n, s, o, i = (0, r.c)(12),
                {
                    conversationId: l,
                    entries: c,
                    turnListApi: d
                } = e,
                {
                    key: u,
                    search: h,
                    state: p
                } = (0, C.X)();
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "automations.cloud.scheduled-tasks"
            }, i[0] = t) : t = i[0];
            let {
                isCapable: g
            } = (0, m.x)(T.a, t);
            if (i[1] !== g || i[2] !== p?.sidebarArea || i[3] !== h) {
                let e = new URLSearchParams(h);
                n = e.get("automationId"), s = p?.sidebarArea === "scheduled" || !g || !n || "finalAgentTurnStart" !== e.get("messageId"), i[1] = g, i[2] = p?.sidebarArea, i[3] = h, i[4] = n, i[5] = s
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
                u = (0, m.y)(z.a),
                h = (0, C.X)(),
                p = (0, m.z)(O.f),
                g = (0, m.x)(B.j, l),
                {
                    data: f
                } = (0, m.x)(F.e, i),
                v = (0, m.z)(L.a),
                b = (0, y.useRef)(null),
                x = (0, y.useRef)(null);
            o[0] !== c ? (t = c.findLast(V), o[0] = c, o[1] = t) : t = o[1];
            let _ = t;
            o[2] !== p || o[3] !== i || o[4] !== v || o[5] !== _ || o[6] !== f || o[7] !== h || o[8] !== u || o[9] !== d ? (n = () => {
                null == f || null == p || (v || b.current === p || (b.current = p, (0, D.openAutomationSidePanelTab)({
                    scope: u,
                    automationId: i,
                    title: f.automation.title
                })), null != d && null != _ && x.current !== p && (x.current = p, d.scrollToKey(_.turnKey, U, {
                    align: "top"
                }).then(() => {
                    u.set(H.a, {
                        locationKey: h.key,
                        accountId: p
                    }, !0)
                })))
            }, o[2] = p, o[3] = i, o[4] = v, o[5] = _, o[6] = f, o[7] = h, o[8] = u, o[9] = d, o[10] = n) : n = o[10];
            let w = (0, y.useEffectEvent)(n);
            o[11] !== p || o[12] !== l || o[13] !== f?.automation.conversation_id || o[14] !== w || o[15] !== g ? (a = () => {
                null != p && f?.automation.conversation_id === (g ?? l) && w()
            }, o[11] = p, o[12] = l, o[13] = f?.automation.conversation_id, o[14] = w, o[15] = g, o[16] = a) : a = o[16];
            let I = _?.turnKey,
                T = f?.automation.conversation_id;
            return o[17] !== p || o[18] !== v || o[19] !== l || o[20] !== g || o[21] !== I || o[22] !== T || o[23] !== d ? (s = [p, l, I, T, g, v, d], o[17] = p, o[18] = v, o[19] = l, o[20] = g, o[21] = I, o[22] = T, o[23] = d, o[24] = s) : s = o[24], (0, y.useEffect)(a, s), null
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
            return t.items.some(Q)
        }

        function Q(e) {
            return "user-message" !== e.type
        }
        var Y = n("uxPT"),
            Z = n("nKJ6"),
            $ = n("GMTh"),
            J = n("zpMv"),
            X = n("PFzG"),
            ee = n("KvJW"),
            et = n("oyxz"),
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
        let eh = (0, m.u)(eo.a, null);

        function em(e, t) {
            if (!e.get(eu.c).isChatgptBrowserReplacement || t.repeat || ((0, ed.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(eh)) return;
            let n = eg("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(eh, n), ef(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function ep(e, t, n, a) {
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
            let t, n, s, o, l, c, d, u, h, m, p, g, f = (0, r.c)(22),
                {
                    children: v,
                    title: y
                } = e,
                b = (0, x.a)(),
                {
                    getExperiment: C
                } = (0, ei.j)();
            if (!C("448755449").get("enabled", !1)) {
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
                children: (0, a.jsx)(et.a, {
                    id: "chatgpt.print.downloadApp.title",
                    defaultMessage: "Take your curiosity further",
                    description: "Headline in the footer of a printed or PDF-saved ChatGPT conversation, inviting the reader to download the mobile app. Keep it short and encouraging."
                })
            }), f[11] = d) : d = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsxs)("div", {
                className: "min-w-0 flex-1 text-sm",
                children: [d, (0, a.jsx)("p", {
                    className: "mt-1 text-secondary",
                    children: (0, a.jsx)(et.a, {
                        id: "chatgpt.print.downloadApp.description",
                        defaultMessage: "Scan to get the ChatGPT app",
                        description: "Instruction beside the QR code in the footer of a printed or PDF-saved conversation. Scanning the code opens the ChatGPT app download page. Keep it short."
                    })
                })]
            }), f[12] = u) : u = f[12], f[13] !== b ? (h = b.formatMessage({
                id: "chatgpt.print.downloadApp.qrCode",
                defaultMessage: "Download the ChatGPT app",
                description: "Accessible label for a QR code and link in a printed or PDF-saved conversation. The code and link open the ChatGPT app download page."
            }), f[13] = b, f[14] = h) : h = f[14], f[15] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, a.jsx)(et.a, {
                id: "chatgpt.print.downloadApp.fallback",
                defaultMessage: "Get the app",
                description: "Link to the ChatGPT app download page when its QR code cannot be generated in a printed conversation"
            }), f[15] = m) : m = f[15], f[16] !== h ? (p = (0, a.jsxs)("footer", {
                className: l,
                children: [c, u, (0, a.jsx)("a", {
                    className: "shrink-0",
                    href: `${eM}&utm_content=pdf_link`,
                    children: (0, a.jsx)(ej.a, {
                        value: `${eM}&utm_content=qr`,
                        size: "inline",
                        ariaLabel: h,
                        fallback: m
                    })
                })]
            }), f[16] = h, f[17] = p) : p = f[17], f[18] !== p || f[19] !== s || f[20] !== o ? (g = (0, a.jsxs)("div", {
                className: t,
                "data-conversation-print": "",
                "data-print-formatting": "",
                "data-theme": "light",
                children: [s, o, p]
            }), f[18] = p, f[19] = s, f[20] = o, f[21] = g) : g = f[21], g
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
                o = (0, m.z)(en.a);
            return s[0] !== o || s[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([o, e.entries[0]?.conversationId]), s[0] = o, s[1] = e.entries[0]?.conversationId, s[2] = t) : t = s[2], s[3] !== e || s[4] !== t ? (n = (0, a.jsx)(eD, {
                ...e
            }, t), s[3] = e, s[4] = t, s[5] = n) : n = s[5], n
        }

        function eD(e) {
            let t, n, s, o, i, l, c = (0, r.c)(16),
                d = (0, m.y)(z.a),
                u = (0, m.z)(ea.a),
                [h, p] = (0, y.useState)(!1),
                g = (0, y.useRef)(null);
            c[0] !== d ? (t = (e, t) => {
                if (em(d, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void g.current?.onKeyDown(e, t);
                let n = ez.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, b.flushSync)(() => p(!0));
                let a = n ?? g.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => ez.get(e)).finally(() => {
                    t.aborted || p(!1)
                })
            }, c[0] = d, c[1] = t) : t = c[1];
            let f = (0, y.useEffectEvent)(t);
            c[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                (0, b.flushSync)(() => p(!0)), g.current?.onBeforePrint()
            }, c[2] = n) : n = c[2];
            let v = (0, y.useEffectEvent)(n);
            c[3] !== d ? (s = () => {
                d.set(eO.a, null), p(!1)
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
                    ref: p
                } = e,
                g = (0, m.y)(z.a),
                f = (0, y.useContext)(R.a),
                v = (0, y.useContext)(es.a),
                {
                    getExperiment: x
                } = (0, ei.j)(),
                C = x("448755449", {
                    disableExposureLog: !0
                }).get("enabled", !1);
            l[0] !== c[0]?.conversationId ? (t = c[0]?.conversationId ?? (0, eN.d)(""), l[0] = c[0]?.conversationId, l[1] = t) : t = l[1], l[2] !== f || l[3] !== t ? (n = {
                auth: f,
                conversationId: t
            }, l[2] = f, l[3] = t, l[4] = n) : n = l[4];
            let _ = (0, m.x)(null != c[0] && eS.g, n),
                w = (0, m.x)(null == c[0] ? null : eT.d, c[0]?.conversationId ?? "") ?? !0,
                I = (0, y.useRef)(null),
                T = function(e, t, n) {
                    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                        s = arguments.length > 5 ? arguments[5] : void 0,
                        o = [],
                        i = [],
                        l = new Map;
                    for (let n of t) {
                        let t = l.get(n.conversationId);
                        if (null == t) {
                            let a = e.get(B.j, n.conversationId);
                            t = {
                                serverId: a,
                                userResolver: (0, ew.c)(void 0, void 0, void 0, e.get(B.R, n.conversationId) ?? void 0),
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
                            return ep(e, "CHATGPT_CONVERSATION_PRINT_PREPARATION_IMAGES", i, async () => {
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
                }(g, c, h, C, "restricted" === v || !_ && w, f),
                {
                    data: S,
                    isSuccess: j,
                    isError: E,
                    refetch: A
                } = (0, o.a)(T);
            return l[5] !== T || l[6] !== S || l[7] !== C || l[8] !== j || l[9] !== A || l[10] !== g ? (s = () => ({
                onKeyDown(e, t) {
                    if (!e.defaultPrevented && (!j || !S.complete) && (e.preventDefault(), !e.repeat && I.current !== t)) return I.current = t, A({
                        cancelRefetch: !1
                    }).then(() => {
                        t.aborted || window.print()
                    }).finally(() => {
                        I.current === t && (I.current = null)
                    })
                },
                onBeforePrint() {
                    if (C) {
                        let e = g.queryClient.getQueryData(T.queryKey),
                            t = {
                                ...eI(),
                                ...e?.imageSources
                            };
                        (0, b.flushSync)(() => g.set(eO.a, t))
                    }
                }
            }), l[5] = T, l[6] = S, l[7] = C, l[8] = j, l[9] = A, l[10] = g, l[11] = s) : s = l[11], (0, y.useImperativeHandle)(p, s), l[12] !== u || l[13] !== c || l[14] !== E || l[15] !== j || l[16] !== h || l[17] !== d ? (i = h ? (0, b.createPortal)((0, a.jsx)(ek, {
                title: d,
                children: (0, a.jsx)(el.a, {
                    value: null,
                    children: (0, a.jsx)(eB.a, {
                        value: null,
                        children: j ? c.map(e => {
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
                            children: E ? (0, a.jsx)(et.a, {
                                id: "chatgpt.printAssets.error",
                                defaultMessage: "Some images could not be loaded. Close print and try again.",
                                description: "Printed instead of a partial conversation when its images failed to load"
                            }) : (0, a.jsx)(et.a, {
                                id: "chatgpt.printAssets.loading",
                                defaultMessage: "Images are still loading. Close print and try again.",
                                description: "Printed instead of an incomplete conversation when its images are still loading"
                            })
                        })
                    })
                })
            }), document.body) : null, l[12] = u, l[13] = c, l[14] = E, l[15] = j, l[16] = h, l[17] = d, l[18] = i) : i = l[18], i
        }

        function eW(e) {
            let t, n, a, s, i, l, c = (0, r.c)(22),
                {
                    conversationId: d
                } = e,
                u = (0, m.y)(eo.a),
                h = (0, x.a)(),
                p = (0, y.useRef)(null),
                g = (0, m.z)(en.a),
                f = (0, m.x)(B.j, d),
                v = (0, m.z)(eL.b);
            c[0] !== g || c[1] !== f ? (t = ["chatgpt-print-history", g, f], c[0] = g, c[1] = f, c[2] = t) : t = c[2], c[3] !== u || c[4] !== f ? (n = e => {
                let {
                    signal: t
                } = e;
                return ep(u, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != f && await (0, eG.a)(u, f, t), !0))
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
                if (em(u, e), e.defaultPrevented || null == f || 0 === v || u.get(eL.c, f)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (p.current?.signal === t) return void ez.set(e, p.current.preparation);
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
                    p.current?.signal === t && (p.current = null)
                });
                p.current = {
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

        function eZ(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var e$ = n("MrzV");

        function eJ() {
            let e, t = (0, r.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                children: (0, a.jsx)(et.a, {
                    id: "chatgptConversations.emptyConversation",
                    defaultMessage: "No renderable ChatGPT messages were found in this conversation",
                    description: "Empty state when a ChatGPT conversation has no user or assistant text messages"
                })
            }), t[0] = e) : e = t[0], e
        }
        var eX = n("ygO2"),
            e0 = n("gbRX");

        function e1(e) {
            let t, n, s = (0, r.c)(4),
                {
                    isFetching: o,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, m.z)(!i && e0.a) || o;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(et.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again",
                description: "Retry loading a ChatGPT conversation after its history could not be loaded"
            }), s[0] = t) : t = s[0], s[1] !== l || s[2] !== c ? (n = (0, a.jsx)(eX.a, {
                color: "ghost",
                disabled: c,
                onClick: l,
                children: t
            }), s[1] = l, s[2] = c, s[3] = n) : n = s[3], n
        }

        function e2(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(et.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation",
                description: "Error state when a ChatGPT conversation fetch fails"
            }), o[0] = t) : t = o[0], o[1] !== i || o[2] !== l || o[3] !== c ? (n = null != c ? (0, a.jsx)(e1, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, o[1] = i, o[2] = l, o[3] = c, o[4] = n) : n = o[4], o[5] !== n ? (s = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), o[5] = n, o[6] = s) : s = o[6], s
        }
        var e3 = n("FfNP"),
            e4 = n("Bbed"),
            e6 = n("WVag");
        let e5 = (0, e4.a)(e3.loadEpicChartIndicator);

        function e8(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, m.x)(e6.a, s),
                [i, l] = (0, y.useState)(!1);
            return i || null == o || l(!0), n[0] !== s || n[1] !== i ? (t = i ? (0, a.jsx)(e5, {
                conversationId: s
            }) : null, n[0] = s, n[1] = i, n[2] = t) : t = n[2], t
        }
        var e7 = n("AoaR"),
            e9 = n("Ow2S"),
            te = n("fDfx"),
            tt = n("u4MG"),
            tn = n("Xslx"),
            ta = n("EEop"),
            tr = n("bxvp"),
            ts = n("VBQS"),
            to = n("hsIu");
        let ti = (0, m.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(tr.c) || null == n(O.f) || null == n(O.k)) return null;
            let {
                data: a,
                isError: r
            } = n(to.b);
            if (r || a?.project_id !== e) return null;
            let {
                data: s,
                isError: o
            } = n(ta.k, (0, ts.a)());
            return o ? null : (0, ts.b)(s)
        });
        var tl = n("DWXw"),
            tc = n("FmJi"),
            td = n("TSib"),
            tu = n("sIex"),
            th = n("jEN2"),
            tm = n("kphc"),
            tp = n("YWcr"),
            tg = n("RGWz"),
            tf = n("QxH2"),
            tv = n("mwa5"),
            ty = n("UuVq"),
            tb = n("TwSq"),
            tx = n("l0fK"),
            tC = n("hkBU"),
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
            tL = n("QSwz"),
            tB = n("ze43"),
            tz = n("KXCj"),
            tF = n("e1xH"),
            tD = n("pAFY");
        n("kErH");
        var tH = n("dJBt"),
            tW = n("FR8U"),
            tq = n("xqnZ"),
            tU = n("UMxD"),
            tK = n("VV6Z"),
            tV = n("JhDO"),
            tQ = n("Mbqw"),
            tY = n("kl6F"),
            tZ = n("kfGJ"),
            t$ = n("khOd"),
            tJ = n("RZBv"),
            tX = n("yzQ9"),
            t0 = n("OMIV"),
            t1 = n("JCJj"),
            t2 = n("KkZX"),
            t3 = n("Gjet"),
            t4 = n("ftSl"),
            t6 = n("BdYu"),
            t5 = n("Nyub"),
            t8 = n("jZDY"),
            t7 = n("HgLj"),
            t9 = n("Bc5r"),
            ne = n("bIvi"),
            nt = n("Elta"),
            nn = n("eW0T"),
            na = n("hOYb"),
            nr = n("eShZ"),
            ns = n("qqut"),
            no = n("CsbC"),
            ni = n("tCyZ"),
            nl = n("JPvk"),
            nc = n("GgLN"),
            nd = n("KdfG"),
            nu = n("AOHi"),
            nh = n("iRMi"),
            nm = n("U2UX"),
            np = n("gbrq"),
            ng = n("K33Q"),
            nf = n("mv4d"),
            nv = n("w7Qu"),
            ny = n("dt5v"),
            nb = n("bWX0"),
            nx = n("smHt"),
            nC = n("aoTb"),
            n_ = n("pqpL"),
            nw = n("TsvN"),
            nI = n("XcRr"),
            nT = n("dk3M"),
            nS = n("WFY2"),
            nj = n("vldH"),
            nE = n("ISgP"),
            nA = n("t2JB"),
            nP = n("DIH2"),
            nM = n("aFoA"),
            nk = n("H8lk"),
            nR = n("f2PP"),
            nO = n("S95W");
        let nN = (0, m.v)(eo.a, e => null);
        var nG = n("DM5G"),
            nL = n("gJe8"),
            nB = n("d2rV"),
            nz = n("Vg3R"),
            nF = n("aLqR"),
            nD = n("VlIB"),
            nH = n("ASxG"),
            nW = n("wD9O"),
            nq = n("lsfk"),
            nU = n("IObw"),
            nK = n("BOYb"),
            nV = n("kQNh"),
            nQ = n.n(nV),
            nY = n("NkEl"),
            nZ = n("FW69"),
            n$ = "highlight-x7OnzP",
            nJ = "safari-wcvuzB",
            nX = "block-t7sxyD";
        let n0 = "chatgpt-search-result",
            n1 = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* n2(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(n1) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let s = RegExp(t.split(/\n+/u).map(nQ()).join("\\n*"), "g");
            for (let n = s.exec(r); null != n && n.index < r.length; n = s.exec(r)) {
                let r = n.index;
                s.lastIndex = r + 1;
                let o = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < o);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, o - l.start), n3(c) && ((0, nZ.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function n3(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let n4 = nH.object({
            chatGptSearchNavigation: nH.object({
                key: nH.string(),
                messageId: nH.string()
            })
        });

        function n6(e) {
            let t, n, a, s, o, i, l, c, d, u, h, p, g = (0, r.c)(48),
                {
                    conversationId: f,
                    entries: v,
                    isConversationFetching: b,
                    turnListApi: x
                } = e,
                _ = (0, m.y)(eo.a),
                w = (0, m.x)(B.r, f),
                I = (0, nq.b)(),
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
                        m = (0, nW.b)(o.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - m, "instant", "user")
                }(e, I, T)
            }, g[0] = I, g[1] = T, g[2] = t) : t = g[2];
            let S = (0, y.useEffectEvent)(t),
                j = (0, C.X)(),
                E = (0, C.Z)(),
                A = new URLSearchParams(j.search),
                P = A.get("messageId") ?? A.get("message"),
                M = n4.safeParse(j.state).data?.chatGptSearchNavigation,
                k = P ?? M?.messageId,
                R = A.get("selectedTextQuery") ?? "",
                O = (0, m.x)(B.L, f),
                N = !R || null != k && null != O && (O[k]?.message != null || Object.values(O).some(e => e.message?.id === k)),
                G = R || A.get("historySearchQuery") || "",
                L = JSON.stringify([f, null != P ? j.key : M?.key ?? j.key, k]);
            g[3] !== L ? (n = {
                key: L,
                handled: !1,
                positioned: !1
            }, g[3] = L, g[4] = n) : n = g[4];
            let z = (0, y.useRef)(n),
                F = (0, y.useEffectEvent)(e => {
                    z.current.positioned = !0;
                    let t = G.trim().length > 0 ? function(e, t, n) {
                        let a, r, s, o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            m = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === m.length) return () => {};
                        let p = new RegExp(null == c ? m.toSorted((e, t) => t.length - e.length).map(nQ()).join("|") : nQ()(c), null == c ? "giu" : "gu"),
                            g = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(_);

                        function C() {
                            for (let t of (g = !0, x.disconnect(), clearTimeout(r), null != s && cancelAnimationFrame(s), null != a && CSS.highlights.get(n0) === a && CSS.highlights.delete(n0), e.classList.remove(n$, nJ), b)) t.classList.remove(n$, nX)
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
                            let u = (0, nY.a)(e);
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
                                    return null != (n.text ?? t.textContent ?? "").normalize("NFC").match(p)
                                }),
                                m = !1;
                            for (let {
                                    element: e,
                                    target: t
                                }
                                of u) null != t.reveal && !y.has(e) && h.some(t => e.contains(t.element)) && (y.add(e), t.reveal(), m = !0);
                            if (m) {
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
                                for (let e of n2(t, c))
                                    if (!(n++ < l)) {
                                        I.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(n1) != null || u.some(t => {
                                        let {
                                            element: n,
                                            target: a
                                        } = t;
                                        return "block" === a.highlight && n.contains(e)
                                    }) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                                });
                                for (let n = t.nextNode(); null != n; n = t.nextNode())
                                    for (let t of (n.textContent ?? "").matchAll(p)) {
                                        let a = e.ownerDocument.createRange();
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), n3(a) && I.push(a)
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
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...I), CSS.highlights.set(n0, a)) : I.length > 0 && T.push(e), e.classList.add(n$), (0, nK.e)() && e.classList.add(nJ), T)) t.classList.add(n$, nX), b.add(t);
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
            g[5] !== f || g[6] !== b || g[7] !== k || g[8] !== L || g[9] !== _ || g[10] !== N ? (a = () => {
                if (z.current.key !== L && (z.current = {
                        key: L,
                        handled: !1,
                        positioned: !1
                    }), null != k && !b && N) return _.watch(e => {
                    !z.current.handled && (0, B.Ob)(e, f, k) && (z.current.handled = !0)
                })
            }, s = [f, b, k, L, _, N], g[5] = f, g[6] = b, g[7] = k, g[8] = L, g[9] = _, g[10] = N, g[11] = a, g[12] = s) : (a = g[11], s = g[12]), (0, y.useLayoutEffect)(a, s), g[13] !== v || g[14] !== k ? (o = null == k ? void 0 : v.find(e => {
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
            let H = (0, y.useEffectEvent)(i);
            if (g[21] !== H || g[22] !== w || g[23] !== b || g[24] !== D ? (l = () => {
                    !z.current.positioned || null != D || b || w || H()
                }, g[21] = H, g[22] = w, g[23] = b, g[24] = D, g[25] = l) : l = g[25], g[26] !== w || g[27] !== b || g[28] !== D ? (c = [w, b, D], g[26] = w, g[27] = b, g[28] = D, g[29] = c) : c = g[29], (0, y.useLayoutEffect)(l, c), g[30] !== k || g[31] !== D?.id || g[32] !== D?.turn.items || g[33] !== D?.turnKey) {
                let e = D?.turn.items.findIndex(e => "messageId" in e && e.messageId === k || "assistant-message" === e.type && null != k && e.sourceMessageIds?.includes(k)) ?? -1,
                    t = D?.turn.items[e],
                    n = D?.id;
                u = D?.turnKey, d = null == t || null == n ? void 0 : (0, nU.b)(t, e, n), g[30] = k, g[31] = D?.id, g[32] = D?.turn.items, g[33] = D?.turnKey, g[34] = d, g[35] = u
            } else d = g[34], u = g[35];
            let W = d;
            return g[36] !== F || g[37] !== k || g[38] !== u || g[39] !== x || g[40] !== W ? (h = () => {
                let e;
                if (null == u || null == x) return;
                let t = new AbortController,
                    n = null;
                return x.scrollToKey(u, e => n = (null == k ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(k)}"]`)) ?? (null == W ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(W)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = F(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, g[36] = F, g[37] = k, g[38] = u, g[39] = x, g[40] = W, g[41] = h) : h = g[41], g[42] !== k || g[43] !== L || g[44] !== u || g[45] !== x || g[46] !== W ? (p = [L, k, u, x, W], g[42] = k, g[43] = L, g[44] = u, g[45] = x, g[46] = W, g[47] = p) : p = g[47], (0, y.useLayoutEffect)(h, p), null
        }
        var n5 = n("UlzY"),
            n8 = n("SZi8"),
            n7 = n("lBzi"),
            n9 = n("Ga6O"),
            ae = n("ESlL"),
            at = n("vknh"),
            an = n("Ppno"),
            aa = n("hXcw"),
            ar = n("lA5q"),
            as = n("wDWo"),
            ao = n("IgxH"),
            ai = n("iaTG"),
            al = n("c3f5"),
            ac = n("XpUB"),
            ad = n("xAIC"),
            au = n("slpy"),
            ah = n("bf6R"),
            am = n("O666"),
            ap = n("OtLV"),
            ag = n("tNq4"),
            af = n("Skaw"),
            av = n("PYCG");

        function ay(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g = (0, r.c)(50),
                {
                    conversationId: f,
                    projectId: v,
                    sharedProjectConversation: y,
                    isReady: b,
                    isRestricted: C,
                    isStreaming: _
                } = e,
                w = void 0 === v ? null : v,
                I = (0, m.y)(eo.a),
                T = (0, x.a)(),
                S = (0, m.z)(O.e),
                j = (0, m.z)(null == w ? null : af.a),
                E = (0, m.x)(B.j, f),
                {
                    data: A
                } = (0, m.x)(n7.chatGptConversationQueryById$, null == w ? null : E),
                P = (0, m.x)(nM.a, null == w ? null : E),
                M = (0, m.x)(B.A, P);
            g[0] !== P || g[1] !== A || g[2] !== M || g[3] !== w || g[4] !== E ? (t = null == A && null != P && null != E ? {
                id: E,
                gizmo_id: w,
                is_temporary_chat: M
            } : void 0, g[0] = P, g[1] = A, g[2] = M, g[3] = w, g[4] = E, g[5] = t) : t = g[5];
            let k = t,
                {
                    data: R
                } = (0, m.x)(eQ.b, w),
                N = null == w ? null : (0, af.b)(j ?? null, y ?? A ?? k, R),
                G = (0, m.x)(ag.b, f);
            g[6] !== T ? (n = T.formatMessage(ap.a.headerShare), g[6] = T, g[7] = n) : n = g[7];
            let L = n,
                z = (0, m.x)(null == y ? ag.a : null, f),
                F = null != y || null != z,
                D = null;
            if (C || N?.type === "unavailable") {
                let e;
                g[8] !== T ? (e = T.formatMessage(ap.a.shareDisabledRestricted), g[8] = T, g[9] = e) : e = g[9], D = e
            } else if (_ && !F) {
                let e;
                g[10] !== T ? (e = T.formatMessage(ap.a.shareDisabledStreaming), g[10] = T, g[11] = e) : e = g[11], D = e
            } else if (!b || !F) {
                let e;
                g[12] !== T ? (e = T.formatMessage(ap.a.shareDisabledNotReady), g[12] = T, g[13] = e) : e = g[13], D = e
            }
            let H = null != D || G;
            g[14] !== H ? (s = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: H
            }, g[14] = H, g[15] = s) : s = g[15];
            let W = (0, m.x)(am.b, s),
                q = "loaded" === S.status && "personal" === S.structure && (null == N || "snapshot" === N.type),
                U = null != D || G;
            g[16] !== U ? (o = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: U
            }, g[16] = U, g[17] = o) : o = g[17];
            let K = (0, m.x)(q ? am.b : null, o);
            g[18] !== f || g[19] !== k || g[20] !== w || g[21] !== I || g[22] !== y ? (i = () => {
                let e = null == y ? I.get(ag.c, f) : {
                    serverConversationId: y.conversation_id,
                    title: y.title,
                    currentNodeId: y.current_node ?? void 0
                };
                null != e && (0, av.shareChatGptProjectConversation)(I, e.serverConversationId, e.title ?? "", w, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", y ?? k)
            }, g[18] = f, g[19] = k, g[20] = w, g[21] = I, g[22] = y, g[23] = i) : i = g[23];
            let V = i,
                Q = L;
            if ("loaded" === S.status && (null == N || "snapshot" === N.type)) {
                let e;
                g[24] !== S.structure || g[25] !== T ? (e = T.formatMessage("workspace" === S.structure ? ap.a.shareWorkspaceTooltip : ap.a.sharePublicTooltip), g[24] = S.structure, g[25] = T, g[26] = e) : e = g[26], Q = e
            }
            let Y = null == D && !G && !0 === K,
                Z = D ?? Q,
                $ = null != D || G;
            return g[27] !== G || g[28] !== W ? (l = !G && (W ? (0, a.jsx)(ah.M, {}) : (0, a.jsx)(ah.L, {})), g[27] = G, g[28] = W, g[29] = l) : l = g[29], g[30] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(et.a, {
                ...ap.a.headerShare
            }), g[30] = c) : c = g[30], g[31] !== V || g[32] !== G || g[33] !== L || g[34] !== $ || g[35] !== l ? (d = (0, a.jsxs)(eX.a, {
                "aria-label": L,
                color: "toolbar",
                disabled: $,
                loading: G,
                radius: "large",
                size: "toolbar",
                onClick: V,
                children: [l, c]
            }), g[31] = V, g[32] = G, g[33] = L, g[34] = $, g[35] = l, g[36] = d) : d = g[36], g[37] !== Z || g[38] !== d || g[39] !== Y ? (u = (0, a.jsx)(au.a, {
                disabled: Y,
                content: Z,
                children: d
            }), g[37] = Z, g[38] = d, g[39] = Y, g[40] = u) : u = g[40], g[41] !== f || g[42] !== G || g[43] !== w || g[44] !== D || g[45] !== y ? (h = !1, g[41] = f, g[42] = G, g[43] = w, g[44] = D, g[45] = y, g[46] = h) : h = g[46], g[47] !== u || g[48] !== h ? (p = (0, a.jsxs)(a.Fragment, {
                children: [u, h]
            }), g[47] = u, g[48] = h, g[49] = p) : p = g[49], p
        }(0, e4.a)(async () => () => null);
        var ab = n("B0Wx"),
            ax = n("if6d"),
            aC = n("r2mP"),
            a_ = n("O1PY"),
            aw = n("KALm"),
            aI = n("ZhoB"),
            aT = n("RADZ"),
            aS = n("rZzh"),
            aj = n("IZ3j");

        function aE(e) {
            let t, n, s, o, i, l, c, d, u = (0, r.c)(50),
                {
                    entry: h,
                    renderMcpApps: p,
                    trackShownImpressions: g
                } = e,
                f = void 0 === p || p,
                v = void 0 === g || g,
                y = (0, m.y)(eo.a);
            u[0] !== h.conversationId ? (t = (0, tY.o)({
                routeKind: "chatgpt-thread",
                conversationId: h.conversationId
            }), u[0] = h.conversationId, u[1] = t) : t = u[1];
            let b = (0, m.x)(v ? tG.c : null, t),
                x = v && null == b,
                C = (0, m.x)(h.isMostRecentTurn ? aS.d : null, h.conversationId);
            u[2] !== h.timestampSeparatorAtMs ? (n = null == h.timestampSeparatorAtMs ? null : (0, a.jsx)(aC.b, {
                sentAtMs: h.timestampSeparatorAtMs
            }), u[2] = h.timestampSeparatorAtMs, u[3] = n) : n = u[3];
            let _ = null != h.paragen;
            return u[4] !== h.branchingMessageId || u[5] !== h.browserConversationId || u[6] !== h.conversationId || u[7] !== h.enableCloudBrowserActivity || u[8] !== h.feedbackEnabled || u[9] !== h.hasLaterSitesPreview || u[10] !== h.id || u[11] !== h.isMostRecentTurn || u[12] !== h.isReadOnly || u[13] !== h.isTemporaryChat || u[14] !== h.isWorkConversation || u[15] !== h.onEditUserMessage || u[16] !== h.onFork || u[17] !== h.onRegenerateResponse || u[18] !== h.pendingSubmissionAttachments || u[19] !== h.readAloudEnabled || u[20] !== h.referenceImageSuggestionActionInput || u[21] !== h.safetyReview || u[22] !== h.shareEnabled || u[23] !== h.turn || u[24] !== f || u[25] !== x || u[26] !== _ ? (s = (0, a.jsx)(aw.a, {
                browserConversationId: h.browserConversationId,
                conversationId: h.conversationId,
                enableCloudBrowserActivity: h.enableCloudBrowserActivity,
                branchingMessageId: h.branchingMessageId,
                hasLaterSitesPreview: h.hasLaterSitesPreview,
                hostId: tZ.a,
                isMostRecentTurn: h.isMostRecentTurn,
                isReadOnly: h.isReadOnly,
                isTemporaryChat: h.isTemporaryChat,
                isParagen: _,
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
            }), u[4] = h.branchingMessageId, u[5] = h.browserConversationId, u[6] = h.conversationId, u[7] = h.enableCloudBrowserActivity, u[8] = h.feedbackEnabled, u[9] = h.hasLaterSitesPreview, u[10] = h.id, u[11] = h.isMostRecentTurn, u[12] = h.isReadOnly, u[13] = h.isTemporaryChat, u[14] = h.isWorkConversation, u[15] = h.onEditUserMessage, u[16] = h.onFork, u[17] = h.onRegenerateResponse, u[18] = h.pendingSubmissionAttachments, u[19] = h.readAloudEnabled, u[20] = h.referenceImageSuggestionActionInput, u[21] = h.safetyReview, u[22] = h.shareEnabled, u[23] = h.turn, u[24] = f, u[25] = x, u[26] = _, u[27] = s) : s = u[27], u[28] !== h.conversationId || u[29] !== h.isTemporaryChat || u[30] !== h.isWorkConversation || u[31] !== h.paragen || u[32] !== x ? (o = null == h.paragen ? null : (0, a.jsx)(aT.a, {
                comparison: h.paragen,
                conversationId: h.conversationId,
                hostId: tZ.a,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                trackTaskViews: x
            }, h.paragen.promptMessageId), u[28] = h.conversationId, u[29] = h.isTemporaryChat, u[30] = h.isWorkConversation, u[31] = h.paragen, u[32] = x, u[33] = o) : o = u[33], u[34] !== h.showSharedConversationPrivateDisclaimer ? (i = h.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(t_.a, {
                    className: "shrink-0",
                    legacyIcon: a_.a,
                    asset16: aj.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(et.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you",
                    description: "Privacy disclaimer shown between the original shared ChatGPT conversation and the reader's new private messages after they continue the shared conversation in Codex Desktop"
                })]
            }) : null, u[34] = h.showSharedConversationPrivateDisclaimer, u[35] = i) : i = u[35], u[36] !== h || u[37] !== C || u[38] !== y || u[39] !== x ? (l = h.isMostRecentTurn ? (0, a.jsx)(ae.a, {
                conversationId: h.conversationId,
                errorMessage: h.errorMessage,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                onRetry: null == h.onRegenerateResponse || null == C ? void 0 : async e => {
                    let t = y.get(aS.d, h.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = y.get(B.T, h.conversationId)?.metadata?.errorCode;
                    (0, aI.d)(y.get(eu.c).logProductEvent, {
                        conversationId: y.get(B.j, h.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await h.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, aS.e)(t.message, y.get(e9.t, h.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                showPendingLoadingMessage: h.showPendingLoadingMessage,
                showRequestUserInputStatus: h.showRequestUserInputStatus,
                trackShownImpressions: x,
                useDefaultModel: C?.useDefaultModel,
                isRetryDisabled: C?.isRetryDisabled
            }) : null, u[36] = h, u[37] = C, u[38] = y, u[39] = x, u[40] = l) : l = u[40], u[41] !== s || u[42] !== o || u[43] !== i || u[44] !== l ? (c = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [s, o, i, l]
            }), u[41] = s, u[42] = o, u[43] = i, u[44] = l, u[45] = c) : c = u[45], u[46] !== h.id || u[47] !== c || u[48] !== n ? (d = (0, a.jsxs)("div", {
                "data-content-search-turn-key": h.id,
                children: [n, c]
            }), u[46] = h.id, u[47] = c, u[48] = n, u[49] = d) : d = u[49], d
        }

        function aA(e) {
            let t, n, s, o = (0, r.c)(8),
                {
                    entries: i,
                    historyLoader: l,
                    isVisible: c
                } = e,
                d = c ? l : null;
            return o[0] !== i ? (t = (0, a.jsx)(ax.a, {
                entries: i,
                preserveMeasuredTurnViewport: !0,
                RowComponent: aP
            }), o[0] = i, o[1] = t) : t = o[1], o[2] !== d || o[3] !== t ? (n = (0, a.jsx)(el.a, {
                value: null,
                children: (0, a.jsxs)(eB.a, {
                    value: null,
                    children: [d, t]
                })
            }), o[2] = d, o[3] = t, o[4] = n) : n = o[4], o[5] !== c || o[6] !== n ? (s = (0, a.jsx)(t3.a, {
                active: c,
                presentation: "panel",
                children: n
            }), o[5] = c, o[6] = n, o[7] = s) : s = o[7], s
        }

        function aP(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(aE, {
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
        var aM = n("TRQ3"),
            ak = n("SZCv"),
            aR = n.n(ak),
            aO = n("ALWK"),
            aN = n("PC5z"),
            aG = n("lZ4W"),
            aL = n("ihvi"),
            aB = n("aRto"),
            az = n("WWSI"),
            aF = n("U3Gy"),
            aD = n("mKTJ");
        let aH = (0, m.c)(tY.a, e => {
                let {
                    get: t
                } = e;
                return t(aO.m)
            }, {
                isEqual: aR()
            }),
            aW = (0, m.c)(tY.a, e => {
                let {
                    get: t
                } = e;
                return t(aN.i)
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
                    sharedConversationId: p
                } = (0, C.bb)(),
                g = (0, m.z)(null == p ? null : aH),
                f = (0, m.z)(aW);
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
                b = (0, y.useContext)(aB.a),
                x = c.at(-1);
            if (b?.aboveComposer != null && null != x && v.push(x.turnKey), null != p && g?.size)
                for (let e of c) e.turn.items.flatMap(aV).some(e => "chatgpt-hosted-widget" === e.type && (0, aD.h)(e) && g.has((0, aD.e)(p, e.messageId))) && v.push(e.turnKey);
            let _ = c.findLast(aU);
            h?.voiceAutoScrollEnabled && null != _ && v.push(_.turnKey);
            let w = (0, m.x)(aL.b, l),
                I = null == w ? void 0 : c.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes(w)
                }),
                T = null == I ? void 0 : (0, aL.a)(I.turn.items);
            (0, m.x)(aG.a, null == T ? null : {
                conversationId: l,
                userMessageId: T,
                steeredPromptId: I === x ? w : void 0
            }) && null != I && v.push(I.turnKey);
            let S = (0, m.x)(aF.b, l);
            i[2] !== l || i[3] !== c || i[4] !== S ? (n = (0, az.a)(c, S, l), i[2] = l, i[3] = c, i[4] = S, i[5] = n) : n = i[5];
            let j = h?.getHeightPx,
                E = h?.voiceAutoScrollEnabled ? _?.turnKey : void 0,
                A = h?.onTurnLayoutReady;
            return i[6] !== h ? (s = e => {
                let {
                    heightDeltaPx: t
                } = e;
                h?.consumeGrowth(t ?? 0)
            }, i[6] = h, i[7] = s) : s = i[7], i[8] !== d || i[9] !== u || i[10] !== v || i[11] !== n || i[12] !== j || i[13] !== E || i[14] !== A || i[15] !== s ? (o = (0, a.jsx)(ax.a, {
                entries: n,
                getBottomScrollPaddingPx: j,
                layoutReadyTurnKey: E,
                onTurnLayoutReady: A,
                onLatestTurnHeightChange: s,
                onApiChange: d,
                onVisibleContentReady: u,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: v,
                RowComponent: aE
            }), i[8] = d, i[9] = u, i[10] = v, i[11] = n, i[12] = j, i[13] = E, i[14] = A, i[15] = s, i[16] = o) : o = i[16], o
        }

        function aU(e) {
            let {
                turn: t
            } = e;
            return t.items.some(aK)
        }

        function aK(e) {
            return "user-message" === e.type
        }

        function aV(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var aQ = n("XAP6"),
            aY = n("bzoy"),
            aZ = n("LYS1"),
            a$ = n("aZoZ"),
            aJ = n("Gv8v"),
            aX = n("EGpF"),
            a0 = n("mTPq"),
            a1 = n("Vcrm"),
            a2 = n("t0mU");
        let a3 = (0, m.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(B._, e);
            if (!(0, B.zb)(a)) return !0;
            let r = n(B.L, e),
                s = n(B.B, e);
            if (null == r || null == s) return !1;
            let o = r[s]?.message;
            if (null == o || aZ.a.has(o.author.role)) return !1;
            let i = n(B.x, e),
                l = (0, a0.c)({
                    mapping: r,
                    current_node: s
                }, n(B.Q, e)),
                c = n(B.bb, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(B.j, e) && !(0, aY.e)(n(B.o, e)) && null != c && !n(aQ.e).has(c) && null != a4(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function a4(e, t) {
            let n = e(aX.a, t),
                a = e(B.j, t);
            return null == n.request.current && null != a ? e(aX.a, a) : n
        }
        var a6 = n("xtkq"),
            a5 = n("PG5R"),
            a8 = n("aEnb"),
            a7 = n("iLYI"),
            a9 = n("Ipgw"),
            re = n("wVX4");

        function rt(e) {
            let t, n, s, o, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, m.y)(eo.a),
                d = (0, x.a)(),
                u = (0, t8.a)(),
                h = (0, m.x)(B._, l),
                p = (0, m.x)(B.bb, l),
                g = (0, m.x)(B.v, l),
                f = (0, m.x)(B.ab, l),
                v = (0, y.useRef)(null),
                C = (0, y.useRef)(null);
            i[0] !== g || i[1] !== l || i[2] !== d || i[3] !== p || i[4] !== c || i[5] !== h || i[6] !== f ? (t = () => {
                let e = v.current;
                if (null == e) return;
                let t = C.current;
                if ((0, B.zb)(h)) {
                    e.textContent = "", C.current = {
                        conversationId: l,
                        requestId: p ?? ("active-async-turn" === h || "active-tpp-turn" === h ? g?.requestId : null) ?? (t?.conversationId === l ? t.requestId : null)
                    };
                    return
                }
                f || (C.current = null, t?.conversationId === l && "idle" === h && g?.result === "completed" && g.requestId === t.requestId && null == c.get(B.C, l) && (e.textContent = d.formatMessage({
                    id: "chatgptConversations.responseComplete",
                    defaultMessage: "Response complete",
                    description: "Polite screen-reader announcement after the ChatGPT response the user was waiting for finishes successfully"
                })))
            }, i[0] = g, i[1] = l, i[2] = d, i[3] = p, i[4] = c, i[5] = h, i[6] = f, i[7] = t) : t = i[7];
            let _ = (0, y.useEffectEvent)(t);
            return (i[8] !== _ ? (n = () => {
                _()
            }, i[8] = _, i[9] = n) : n = i[9], i[10] !== g || i[11] !== l || i[12] !== u || i[13] !== p || i[14] !== h || i[15] !== f ? (s = [l, h, p, g, f, u], i[10] = g, i[11] = l, i[12] = u, i[13] = p, i[14] = h, i[15] = f, i[16] = s) : s = i[16], (0, y.useEffect)(n, s), u) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, b.createPortal)((0, a.jsx)("span", {
                ref: v,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = o) : o = i[17], o) : null
        }
        var rn = n("n5iL"),
            ra = n("EFj1"),
            rr = n("iS3k"),
            rs = n("pDUk"),
            ro = n("GaCK"),
            ri = n("Dofq");
        let rl = (0, e4.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(33944)]).then(n.bind(n, "p8Fu"))).ChatGptThreadSummaryPanelBody, {
            fallback: (0, a.jsx)(rr.a.Content, {
                children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-0.5 px-5",
                    children: (0, a.jsx)("span", {
                        className: "select-none",
                        role: "status",
                        children: (0, a.jsx)(et.a, {
                            id: "chatgptConversations.summaryPanel.loading",
                            defaultMessage: "Loading summary…",
                            description: "Status shown in the Work task summary panel while its interface downloads"
                        })
                    })
                })
            }),
            errorFallback: (0, a.jsx)(rr.a.Content, {
                children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-0.5 px-5",
                    children: (0, a.jsx)("span", {
                        className: "select-none",
                        role: "status",
                        children: (0, a.jsx)(et.a, {
                            id: "chatgptConversations.summaryPanel.loadError",
                            defaultMessage: "Summary could not load. Reload the app to try again",
                            description: "Recovery instructions in the Work task summary panel after its interface fails to download; closing the panel does not retry"
                        })
                    })
                })
            })
        });

        function rc(e) {
            let t, n, s, o = (0, r.c)(6);
            o[0] !== e ? ({
                readData: n,
                ...t
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]);
            let i = (0, rr.b)(),
                [l, c] = (0, y.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), o[3] !== l || o[4] !== t ? (s = null == l ? null : (0, a.jsx)(rl, {
                ...t,
                data: l.data
            }), o[3] = l, o[4] = t, o[5] = s) : s = o[5], s
        }

        function rd(e) {
            let t, n, s, o = (0, r.c)(15),
                {
                    conversationId: i,
                    composerActions: l,
                    readData: c,
                    display: d,
                    shouldBlockExternalEgress: u,
                    showSources: h
                } = e,
                p = void 0 === h || h,
                g = (0, m.y)(z.a),
                f = (0, ei.h)("2903661647"),
                v = f ? "dynamic-isle" : "summary";
            return o[0] !== g || o[1] !== v ? (t = {
                scope: g,
                layout: v
            }, o[0] = g, o[1] = v, o[2] = t) : t = o[2], o[3] !== l || o[4] !== i || o[5] !== f || o[6] !== c || o[7] !== u || o[8] !== p ? (n = (0, a.jsx)(rc, {
                conversationId: i,
                composerActions: l,
                readData: c,
                isUnifiedDynamicIsleEnabled: f,
                showSources: p,
                shouldBlockExternalEgress: u
            }, i), o[3] = l, o[4] = i, o[5] = f, o[6] = c, o[7] = u, o[8] = p, o[9] = n) : n = o[9], o[10] !== d.shouldHideInlineImmediately || o[11] !== d.shouldShow || o[12] !== t || o[13] !== n ? (s = (0, a.jsx)(rr.a.Root, {
                analytics: t,
                shouldHideInlineImmediately: d.shouldHideInlineImmediately,
                shouldShow: d.shouldShow,
                children: n
            }), o[10] = d.shouldHideInlineImmediately, o[11] = d.shouldShow, o[12] = t, o[13] = n, o[14] = s) : s = o[14], s
        }

        function ru(e) {
            let t, n, s, o, i, l = (0, r.c)(28),
                {
                    allowsThreadContentOverlap: c,
                    conversationId: d,
                    composerActions: u,
                    controlledState: h,
                    readData: p,
                    shouldBlockExternalEgress: g,
                    showSources: f
                } = e,
                v = void 0 === f || f,
                b = (0, m.y)(z.a),
                C = (0, y.useContext)(el.a),
                _ = (0, x.a)(),
                w = (0, ei.h)("2903661647"),
                I = (0, m.z)(null == h ? np.N : null);
            l[0] !== h?.isOpen || l[1] !== I ? (t = h?.isOpen ?? (0, np.z)(I, !0), l[0] = h?.isOpen, l[1] = I, l[2] = t) : t = l[2];
            let T = t,
                S = (0, m.z)(ro.b),
                j = h?.isOpen ?? S.isPopoverOpen,
                A = (0, m.x)(rn.f, "togglePinnedSummary");
            (0, t6.b)(b), l[3] !== h || l[4] !== b ? (n = () => {
                null != h ? h.onOpenChange(!h.isOpen) : (0, ri.b)(b)
            }, l[3] = h, l[4] = b, l[5] = n) : n = l[5];
            let P = n;
            (0, ra.a)("togglePinnedSummary", P);
            let M = c ? "browser:rounded-lg browser:bg-surface" : void 0;
            return l[6] !== u || l[7] !== C || l[8] !== h || l[9] !== d || l[10] !== _ || l[11] !== T || l[12] !== j || l[13] !== w || l[14] !== S.displayMode || l[15] !== p || l[16] !== b || l[17] !== A || l[18] !== g || l[19] !== v || l[20] !== P ? (s = "overlay" === S.displayMode ? (0, a.jsx)(rs.a, {
                isOpen: j,
                shouldPreventAutoFocus: h?.shouldPreventAutoFocus,
                onOpenChange: e => {
                    null != h ? h.onOpenChange(e) : b.set(ro.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                        ...t,
                        isPopoverOpen: e
                    })
                },
                trigger: (0, a.jsx)(rr.a.HeaderButton, {
                    analytics: {
                        scope: b
                    },
                    label: _.formatMessage({
                        id: "chatgptConversations.summaryPanel.toggle",
                        defaultMessage: "Toggle summary",
                        description: "Button label for toggling the ChatGPT summary panel"
                    }),
                    pressed: j,
                    shortcut: A
                }),
                children: null != p ? (0, a.jsx)(el.a, {
                    value: C,
                    children: (0, a.jsx)(rr.a.PopoverContent, {
                        analytics: {
                            scope: b,
                            layout: w ? "dynamic-isle" : "summary"
                        },
                        children: (0, a.jsx)(rc, {
                            conversationId: d,
                            composerActions: u,
                            readData: p,
                            isUnifiedDynamicIsleEnabled: w,
                            showSources: v,
                            shouldBlockExternalEgress: g
                        }, d)
                    })
                }) : null
            }) : (0, a.jsx)(rr.a.HeaderButton, {
                analytics: {
                    scope: b
                },
                label: _.formatMessage({
                    id: "chatgptConversations.summaryPanel.togglePinned",
                    defaultMessage: "Toggle pinned summary",
                    description: "Button label for toggling whether the ChatGPT summary panel reserves layout space"
                }),
                pressed: T,
                shortcut: A,
                onClick: P
            }), l[6] = u, l[7] = C, l[8] = h, l[9] = d, l[10] = _, l[11] = T, l[12] = j, l[13] = w, l[14] = S.displayMode, l[15] = p, l[16] = b, l[17] = A, l[18] = g, l[19] = v, l[20] = P, l[21] = s) : s = l[21], l[22] !== M || l[23] !== s ? (o = (0, a.jsx)("div", {
                className: M,
                children: s
            }), l[22] = M, l[23] = s, l[24] = o) : o = l[24], l[25] !== c || l[26] !== o ? (i = (0, a.jsx)(E.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                allowsThreadContentOverlap: c,
                order: 250,
                children: o
            }), l[25] = c, l[26] = o, l[27] = i) : i = l[27], i
        }
        var rh = n("JjRy"),
            rm = n.n(rh),
            rp = n("G4E3"),
            rg = n("KaH3"),
            rf = n("Yz3b"),
            rv = n("ghNX"),
            ry = n("KvVi"),
            rb = n("m250"),
            rx = n("Ng4B"),
            rC = n("bTKb"),
            r_ = n("dGDB"),
            rw = n("lIsV");

        function rI(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        var rT = n("JlMc"),
            rS = n("TUMj"),
            rj = n("f6KK"),
            rE = n("JPXZ"),
            rA = n("zWHk");

        function rP(e) {
            let t, n, a, s, o, i, l, c = (0, r.c)(34),
                {
                    composerController: d,
                    enabled: u
                } = e,
                h = (0, C.X)(),
                m = (0, C.Z)();
            if (c[0] !== h.search) {
                let e = new URLSearchParams(h.search);
                t = e.get("prompt"), n = e.get("promptSource"), c[0] = h.search, c[1] = t, c[2] = n
            } else t = c[1], n = c[2];
            let p = n,
                g = h.key,
                f = (0, y.useRef)(null);
            c[3] !== h.hash || c[4] !== h.pathname || c[5] !== h.search || c[6] !== h.state || c[7] !== g || c[8] !== m ? (a = () => {
                let e = new URLSearchParams(h.search);
                e.delete("prompt"), e.delete("promptSource"), m({
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
            }, c[3] = h.hash, c[4] = h.pathname, c[5] = h.search, c[6] = h.state, c[7] = g, c[8] = m, c[9] = a) : a = c[9];
            let v = (0, y.useEffectEvent)(a);
            return c[10] !== v || c[11] !== d || c[12] !== u || c[13] !== g || c[14] !== t ? (s = () => {
                if (!u && t && f.current !== g) return (0, rA.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(g) && v()
                })
            }, c[10] = v, c[11] = d, c[12] = u, c[13] = g, c[14] = t, c[15] = s) : s = c[15], c[16] !== d || c[17] !== u || c[18] !== g || c[19] !== t ? (o = [d, u, g, t], c[16] = d, c[17] = u, c[18] = g, c[19] = t, c[20] = o) : o = c[20], (0, y.useLayoutEffect)(s, o), c[21] !== v || c[22] !== d || c[23] !== u || c[24] !== g || c[25] !== t || c[26] !== p ? (i = () => {
                if (!u || !t || f.current === g || (f.current = g, v(), !d.consumeLocationPromptPrefill(g))) return;
                let {
                    view: e
                } = d, n = t.replace(/\r\n/g, "\n"), a = "codex-app" === p ? (0, rE.f)({
                    schema: e.state.schema,
                    text: n,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, rE.e)({
                    schema: e.state.schema,
                    text: n
                }), r = e.state.tr.replaceWith(0, e.state.doc.content.size, a.content);
                r.setSelection(rj.h.atEnd(r.doc)), e.dispatch(r)
            }, c[21] = v, c[22] = d, c[23] = u, c[24] = g, c[25] = t, c[26] = p, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== g || c[31] !== t || c[32] !== p ? (l = [d, u, g, t, p], c[28] = d, c[29] = u, c[30] = g, c[31] = t, c[32] = p, c[33] = l) : l = c[33], (0, y.useLayoutEffect)(i, l), null
        }
        var rM = n("zKCW");

        function rk(e) {
            let t, n, s, o, i, l = (0, r.c)(11),
                {
                    canConvert: c,
                    isChatInstantAvailable: d,
                    isConverting: u,
                    onConvert: h
                } = e;
            l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(et.a, {
                id: "chatgptConversations.workOnlyConversion.title",
                defaultMessage: "Continue in Work",
                description: "Banner title shown in a disabled historical Chat conversation for a Work-only member in Codex Desktop"
            }), l[0] = t) : t = l[0], l[1] !== d ? (n = d ? (0, a.jsx)(et.a, {
                id: "chatgptConversations.workOnlyConversion.instantDescription",
                defaultMessage: "Move this chat to Work to use agentic tools and take on more complex tasks. You can still use chat instant for quick questions",
                description: "Banner description shown for a Chat Instant conversation when a Work-only member can continue using Chat Instant in Codex Desktop"
            }) : (0, a.jsx)(et.a, {
                id: "chatgptConversations.workOnlyConversion.description",
                defaultMessage: "Move this chat to Work to use agentic tools and take on more complex tasks",
                description: "Banner description shown when a Work-only member cannot continue a historical Chat conversation in Codex Desktop"
            }), l[1] = d, l[2] = n) : n = l[2];
            let m = !c;
            return l[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(et.a, {
                id: "chatgptConversations.workOnlyConversion.action",
                defaultMessage: "Convert to Work",
                description: "Button that converts a disabled historical Chat conversation to Work in Codex Desktop"
            }), l[3] = s) : s = l[3], l[4] !== u || l[5] !== h || l[6] !== m ? (o = (0, a.jsx)(eX.a, {
                color: "primary",
                disabled: m,
                loading: u,
                onClick: h,
                children: s
            }), l[4] = u, l[5] = h, l[6] = m, l[7] = o) : o = l[7], l[8] !== n || l[9] !== o ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(rM.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: o
                })
            }), l[8] = n, l[9] = o, l[10] = i) : i = l[10], i
        }
        var rR = n("pgeU");
        let rO = (0, e4.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function rN(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, m.y)(eo.a),
                c = (0, m.x)(rR.a, i);
            return o[0] !== i || o[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(rR.a, i);
                        null != e && (0, rR.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], o[0] = i, o[1] = l, o[2] = t, o[3] = n) : (t = o[2], n = o[3]), (0, y.useEffect)(t, n), o[4] !== i || o[5] !== c ? (s = null == c ? null : (0, a.jsx)(rO, {
                conversationId: i,
                effect: c
            }, c.id), o[4] = i, o[5] = c, o[6] = s) : s = o[6], s
        }
        var rG = n("fr5e"),
            rL = n("LEgg");
        let rB = (0, e4.a)(async () => (await n.e(432800).then(n.bind(n, "T7hR"))).AutomationPlanHeaderShortcut);

        function rz(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, ei.h)("2840857813");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(rB, {
                conversationId: s
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        var rF = n("T33u");
        let rD = (0, e4.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function rH(e) {
            let t, n, s, o = (0, r.c)(10),
                {
                    conversationId: i,
                    scheduledAutomationId: l
                } = e,
                c = (0, m.x)(rF.a, i),
                d = (0, ei.h)("3901104270");
            return o[0] !== i || o[1] !== c ? (t = null == c ? (0, a.jsx)(rz, {
                conversationId: i
            }) : null, o[0] = i, o[1] = c, o[2] = t) : t = o[2], o[3] !== i || o[4] !== d || o[5] !== l ? (n = d && null != l ? (0, a.jsx)(rD, {
                conversationId: i,
                automationId: l
            }) : null, o[3] = i, o[4] = d, o[5] = l, o[6] = n) : n = o[6], o[7] !== t || o[8] !== n ? (s = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), o[7] = t, o[8] = n, o[9] = s) : s = o[9], s
        }
        var rW = n("Qgfj"),
            rq = n("rmk3"),
            rU = n("f38C"),
            rK = n("MRlq"),
            rV = n("fQbA"),
            rQ = n("dDDU"),
            rY = n("soaw"),
            rZ = n("ZrYB"),
            r$ = n("X6Vn"),
            rJ = n("Kwur"),
            rX = n("eKlv"),
            r0 = n("MYlA"),
            r1 = n("sfmI"),
            r2 = n("JCtZ"),
            r3 = n("g2p6"),
            r4 = n("oaTv"),
            r6 = n("PME0"),
            r5 = n("lgcP"),
            r8 = n("AcSY"),
            r7 = n("w7E5"),
            r9 = n("QmkR"),
            se = n("xEXG"),
            st = n("J6LI"),
            sn = n("lUUH"),
            sa = n("ftAl");

        function sr(e) {
            let t, n, s, o = (0, r.c)(17),
                {
                    children: i,
                    conversationId: l,
                    getBaseItems: c,
                    menuTriggerRef: d,
                    navigate: u,
                    onBeforeOpen: h,
                    onOpenChange: p
                } = e,
                g = (0, m.y)(eo.a),
                {
                    data: f
                } = (0, r8.m)(),
                v = (0, se.b)();
            return o[0] !== f || o[1] !== l || o[2] !== c || o[3] !== d || o[4] !== u || o[5] !== v || o[6] !== g ? (t = () => {
                let e = g.get(sa.a, l, {
                        enabled: !1
                    }),
                    t = (0, tt.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
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
                    } = e, c = (0, tt.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(r7.a), u = t.get(r9.m), {
                        data: h
                    } = d, m = h?.pages.flatMap(e => e.items).length ?? 0, p = (a?.conversation_origin === "tpp" || a?.conversation_origin === "flora") && ("allowed" === o || h?.pages.some(e => null != e.cursor) === !0), g = t.get(r9.h, n);
                    return null == s || null == a || t.get(r9.g, n) || (0, st.c)(a, r).sourceUnavailable || null == (0, st.b)(t, a, g, !1) || null != c && null == r || null == h || 0 === m && !p ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: sl.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, sn.b)({
                        scope: t,
                        conversation: a,
                        project: r,
                        showDestinationFetchState: !1,
                        showMoveToProject: null == c || m > 1 || p,
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
                    let e = g.get(n7.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await g.query.getOrFetch(n7.chatGptConversationQueryById$, l).catch(si), null == g.query.getData(n7.chatGptConversationQueryById$, l) && await g.query.getOrFetch(r9.j, [l]).catch(so)
                })(), h?.()]);
                let e = g.get(sa.a, l, {
                    enabled: !1
                });
                (0, tt.a)(e?.gizmo_id) && e?.gizmo_id != null && await g.query.getOrFetch(eQ.b, e.gizmo_id).catch(ss)
            }, o[8] = l, o[9] = h, o[10] = g, o[11] = n) : n = o[11], o[12] !== i || o[13] !== p || o[14] !== t || o[15] !== n ? (s = (0, a.jsx)(rq.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                onOpenChange: p,
                renderItem: rV.b,
                trigger: "click",
                children: i
            }), o[12] = i, o[13] = p, o[14] = t, o[15] = n, o[16] = s) : s = o[16], s
        }

        function ss() {}

        function so() {}

        function si() {}
        let sl = (0, rW.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}",
                description: "Name of a ChatGPT project offered as a destination for moving a conversation or Work task"
            }
        });

        function sc(e) {
            let t, s, o, i, l, c, d, u, h, p, g, f, v, b, _, w, I, j, E, A = (0, r.c)(70),
                {
                    conversationOrigin: P,
                    conversationId: M,
                    title: k,
                    isHandoffPending: R,
                    isArchived: N,
                    isChatConversation: G,
                    onHandoff: L,
                    onOpenMessage: B,
                    projectId: F,
                    projectName: D,
                    serverConversationId: H
                } = e,
                W = (0, m.y)(z.a),
                q = (0, m.y)(eo.a),
                U = (0, rY.a)(),
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
                data: Z
            } = (0, m.z)(r3.p, o), $ = Y && Z?.fileLibraryEnabledForRegistrationCountry !== !1, J = (0, x.a)(), X = (0, C.Z)(), [ee, et] = (0, y.useState)(null), [en, ea] = (0, y.useState)(!1), es = (0, y.useRef)(null), el = (0, y.useRef)(null);
            A[6] === Symbol.for("react.memo_cache_sentinel") ? (i = [], A[6] = i) : i = A[6];
            let ec = (0, y.useRef)(i);
            A[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                name: "chatgpt"
            }, A[7] = l) : l = A[7];
            let {
                isCapable: ed
            } = (0, m.x)(T.a, l), eu = (0, m.x)(r9.g, H);
            A[8] === Symbol.for("react.memo_cache_sentinel") ? (c = () => et("shortcut"), A[8] = c) : c = A[8];
            let eh = G && !eu;
            A[9] !== W || A[10] !== H ? (d = () => (0, r1.a)(W.query.getData(n7.chatGptConversationQueryById$, H), W.get(O.h), W.get(O.g)), A[9] = W, A[10] = H, A[11] = d) : d = A[11], A[12] !== eh || A[13] !== d ? (u = {
                enabled: eh,
                isActive: d
            }, A[12] = eh, A[13] = d, A[14] = u) : u = A[14], (0, ra.a)("deleteChat", c, u), A[15] !== q || A[16] !== eu || A[17] !== X || A[18] !== W || A[19] !== H ? (h = e => {
                !eu && (0, r1.a)(W.query.getData(n7.chatGptConversationQueryById$, H), W.get(O.h), W.get(O.g)) && (et(null), (0, r5.a)(q, H, e), X("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, A[15] = q, A[16] = eu, A[17] = X, A[18] = W, A[19] = H, A[20] = h) : h = A[20];
            let em = h;
            A[21] !== J ? (p = J.formatMessage(sm.chatActions), A[21] = J, A[22] = p) : p = A[22];
            let ep = p;
            A[23] !== W || A[24] !== H ? (g = async () => {
                let e = [];
                ec.current = e, e.push(...await async function(e, t) {
                    let a = await rJ.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        }
                    }).catch(() => null);
                    return a?.can_share && 0 !== a.av_sessions.length ? [{
                        id: "share-live-session",
                        icon: ah.Yi,
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
                }(W, H))
            }, A[23] = W, A[24] = H, A[25] = g) : g = A[25];
            let eg = g;
            A[26] !== M || A[27] !== P || A[28] !== $ || A[29] !== J || A[30] !== eu || A[31] !== N || A[32] !== R || A[33] !== U || A[34] !== X || A[35] !== L || A[36] !== B || A[37] !== F || A[38] !== D || A[39] !== W || A[40] !== H || A[41] !== K || A[42] !== k ? (f = e => {
                let t = W.get(O.f),
                    a = W.get(O.k),
                    r = (0, r1.a)(W.query.getData(n7.chatGptConversationQueryById$, H), W.get(O.h), W.get(O.g)),
                    s = (0, rX.b)(W, H),
                    o = !eu && (0, r1.a)(s, W.get(O.h), W.get(O.g)),
                    i = W.get(S.b).pathname,
                    l = () => U() && i === W.get(S.b).pathname && t === W.get(O.f) && a === W.get(O.k),
                    c = (0, r4.a)(W, M, P, () => (0, r6.a)(X)),
                    d = [];
                return K.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && d.push({
                    id: "chatgpt-audio-summary",
                    message: (0, rW.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary",
                        description: "Opens the dialog for generating and listening to an audio summary of the current chat"
                    }),
                    icon: ah.mg,
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
                }), $ && d.unshift({
                    id: "chatgpt-conversation-files",
                    message: (0, rW.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat",
                        description: "Opens the side panel listing files referenced in the active saved ChatGPT conversation, even when the list is empty"
                    }),
                    icon: ah.rb,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(963775).then(n.bind(n, "fUWe"))).openConversationFiles
                        })().then(e => {
                            l() && e(W, {
                                conversationId: M,
                                serverConversationId: H,
                                onOpenMessage: B
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
                }), d.push(...(0, rQ.a)(W)), (0, r2.a)(W, {
                    organizationItems: (0, rV.a)([]),
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
                    canHandoff: null != L,
                    onHandoff: L,
                    projectId: F,
                    projectName: D,
                    onRename: !r || eu || N ? void 0 : () => void(0, rX.renameActiveChatGptConversation)(W, M),
                    isPinned: W.get(r9.h, H) ?? s?.is_starred === !0,
                    onTogglePin: o ? () => {
                        let e = (0, rX.b)(W, H);
                        !(null == e || W.get(r9.g, H)) && (0, r1.a)(e, W.get(O.h), W.get(O.g)) && (0, r9.V)({
                            scope: W,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(sd)
                    } : void 0,
                    onArchive: !r || eu || N ? void 0 : () => (0, rZ.a)(W, H),
                    onUnarchive: r && !eu && N ? () => {
                        (0, r9.W)({
                            scope: W,
                            conversationId: H
                        }).then(() => {
                            W.get(er.f).success(J.formatMessage(rK.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            W.get(er.f).danger(J.formatMessage(ap.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !r || eu ? void 0 : () => et("menu")
                })
            }, A[26] = M, A[27] = P, A[28] = $, A[29] = J, A[30] = eu, A[31] = N, A[32] = R, A[33] = U, A[34] = X, A[35] = L, A[36] = B, A[37] = F, A[38] = D, A[39] = W, A[40] = H, A[41] = K, A[42] = k, A[43] = f) : f = A[43];
            let ef = f;
            A[44] !== ep ? (v = (0, a.jsx)(rU.a, {
                ref: es,
                className: "no-drag",
                color: "primary",
                label: ep,
                size: "toolbar"
            }), A[44] = ep, A[45] = v) : v = A[45], A[46] !== en || A[47] !== ep || A[48] !== v ? (b = (0, a.jsx)(au.a, {
                content: ep,
                disabled: en,
                children: v
            }), A[46] = en, A[47] = ep, A[48] = v, A[49] = b) : b = A[49];
            let ev = b;
            A[50] !== ef || A[51] !== ev || A[52] !== X || A[53] !== ed || A[54] !== eg || A[55] !== H ? (_ = ed ? (0, a.jsx)(sr, {
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
                renderItem: rV.b,
                trigger: "click",
                children: ev
            }), A[50] = ef, A[51] = ev, A[52] = X, A[53] = ed, A[54] = eg, A[55] = H, A[56] = _) : _ = A[56];
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
            }, A[59] = I) : I = A[59], A[60] !== em || A[61] !== eu || A[62] !== ey || A[63] !== eb || A[64] !== w || A[65] !== k ? (j = (0, a.jsx)(r0.a, {
                allowArtifactDeletion: !0,
                autoFocusConfirm: ey,
                open: eb,
                onOpenChange: w,
                onCloseAutoFocus: I,
                isDeleting: eu,
                onConfirm: em,
                title: k
            }), A[60] = em, A[61] = eu, A[62] = ey, A[63] = eb, A[64] = w, A[65] = k, A[66] = j) : j = A[66], A[67] !== _ || A[68] !== j ? (E = (0, a.jsxs)(a.Fragment, {
                children: [_, j]
            }), A[67] = _, A[68] = j, A[69] = E) : E = A[69], E
        }

        function sd() {}

        function su() {
            let e, t, n, s = (0, r.c)(8),
                o = (0, x.a)(),
                [i, l] = (0, y.useState)(!1);
            s[0] !== o ? (e = o.formatMessage(sm.more), s[0] = o, s[1] = e) : e = s[1];
            let c = e;
            return s[2] !== c ? (t = (0, a.jsx)(rU.a, {
                className: "no-drag",
                color: "primary",
                label: c,
                size: "toolbar"
            }), s[2] = c, s[3] = t) : t = s[3], s[4] !== i || s[5] !== c || s[6] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rq.a, {
                    preserveBrowserContextMenu: !0,
                    getItems: sh,
                    onOpenChange: l,
                    renderItem: rV.b,
                    trigger: "click",
                    children: (0, a.jsx)(au.a, {
                        content: c,
                        disabled: i,
                        children: t
                    })
                })
            }), s[4] = i, s[5] = c, s[6] = t, s[7] = n) : n = s[7], n
        }

        function sh() {
            return (0, rV.a)([])
        }
        let sm = (0, rW.f)({
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
        var sp = n("BecY"),
            sg = n("WLgA");

        function sf(e) {
            let t, n, s, o = (0, r.c)(10),
                {
                    allowsThreadContentOverlap: l,
                    project: c
                } = e,
                d = void 0 !== l && l,
                u = (0, x.a)(),
                h = null == c ? "gap-2 ps-2" : "gap-0.5",
                m = d && "rounded-lg bg-surface";
            o[0] !== h || o[1] !== m ? (t = (0, i.b)("me-2 flex min-w-0 flex-1 items-center text-base select-none", h, m), o[0] = h, o[1] = m, o[2] = t) : t = o[2];
            let p = !!d || void 0;
            return o[3] !== u || o[4] !== c ? (n = null != c ? (0, a.jsx)("nav", {
                "aria-label": u.formatMessage({
                    id: "chatgptConversations.header.projectBreadcrumb",
                    defaultMessage: "Breadcrumb",
                    description: "Accessible label for project conversation breadcrumb navigation"
                }),
                className: "flex min-w-0 items-center gap-1 overflow-hidden whitespace-nowrap",
                children: (0, a.jsx)(C.g, {
                    className: "flex h-9 max-w-full min-w-8 shrink cursor-interaction items-center overflow-hidden rounded-lg px-2 text-start text-base text-secondary transition-colors hover:bg-surface-tertiary hover:text-default",
                    to: (0, sg.c)(c.gizmo.id),
                    children: (0, a.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-1.5",
                        children: [(0, a.jsx)(tW.a, {
                            className: "size-5",
                            color: c.gizmo.display.theme,
                            defaultColor: "secondary",
                            fallbackIcon: (0, a.jsx)(ah.vd, {}),
                            icon: c.gizmo.display.emoji,
                            sharedIcon: "shared" === (0, re.b)(c) ? (0, a.jsx)(sp.a, {}) : void 0
                        }), (0, a.jsx)("span", {
                            className: "min-w-0 truncate text-default",
                            children: c.gizmo.display.name
                        })]
                    })
                })
            }) : null, o[3] = u, o[4] = c, o[5] = n) : n = o[5], o[6] !== t || o[7] !== p || o[8] !== n ? (s = (0, a.jsx)(E.a.HeaderToolbar, {
                inset: !1,
                children: (0, a.jsx)("div", {
                    className: t,
                    "data-app-shell-thread-content-overlap": p,
                    children: n
                })
            }), o[6] = t, o[7] = p, o[8] = n, o[9] = s) : s = o[9], s
        }
        var sv = n("dLcZ"),
            sy = n("W5pg"),
            sb = n("QcW8"),
            sx = n("yC2B");

        function sC(e) {
            let t, n, s, o, c, d, u, h, p, g, f = (0, r.c)(32),
                {
                    header: v,
                    courseShortcut: y,
                    progress: b
                } = e,
                {
                    titleBarLeftInset: C,
                    rightPanelAnimatedWidth: _,
                    isContentFullWidth: w
                } = (0, A.g)(),
                I = (0, m.z)(sb.$),
                T = (0, m.z)(sb.cb),
                S = (0, x.a)();
            f[0] !== S.locale ? (t = (0, sx.a)(S.locale), f[0] = S.locale, f[1] = t) : t = f[1];
            let j = t,
                P = I?.mode === "split" && "left" === T != ("rtl" === j);
            f[2] !== P || f[3] !== w ? (n = e => P && !w ? e : 0, f[2] = P, f[3] = w, f[4] = n) : n = f[4];
            let M = (0, sy.a)(_, n);
            f[5] !== M || f[6] !== C ? (s = [C, M], f[5] = M, f[6] = C, f[7] = s) : s = f[7];
            let k = (0, sy.a)(s, s_);
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
                }), f[20] = b, f[21] = t) : t = f[21], f[22] !== t || f[23] !== e ? (n = (0, a.jsx)(E.a.HeaderAction, {
                    actionId: "sectioned-conversation-navigation",
                    align: "center",
                    children: (0, a.jsxs)("div", {
                        className: "flex min-w-0 items-center gap-toolbar-action",
                        children: [e, t]
                    })
                }), f[22] = t, f[23] = e, f[24] = n) : n = f[24], n
            }
            return f[25] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, i.b)("relative flex max-w-[min(var(--learning-progress-max-width),max(0px,calc(100cqw-2*(var(--app-shell-header-end-actions-width)+var(--spacing)*3))))] min-w-0 items-center", "[--learning-progress-max-width:var(--thread-content-max-width)]", "@max-thread-expanded/home-mode-toggle:[--learning-progress-max-width:var(--thread-content-compact-max-width,var(--thread-content-max-width))]"), f[25] = h) : h = f[25], f[26] !== O ? (p = (0, a.jsx)("div", {
                className: "absolute inset-y-0 end-full me-toolbar-action flex w-[max(0px,calc((100cqw-100%)/2-var(--spacing-toolbar-action)-var(--spacing)*2-var(--learning-header-left-inset)))] min-w-0 items-center overflow-hidden",
                "data-app-shell-header-obstacle": !0,
                children: O
            }), f[26] = O, f[27] = p) : p = f[27], f[28] !== b || f[29] !== R || f[30] !== p ? (g = (0, a.jsx)(E.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                children: (0, a.jsxs)(l.a.div, {
                    className: h,
                    style: R,
                    children: [p, b]
                })
            }), f[28] = b, f[29] = R, f[30] = p, f[31] = g) : g = f[31], g
        }

        function s_(e) {
            let [t, n] = e;
            return `${Math.max(0,t-n)}px`
        }
        var sw = n("X0li");
        let sI = (0, e4.a)(sw.d),
            sT = (0, e4.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            sS = (0, e4.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var sj = n("lX86");
        n("i1of");
        var sE = n("a4V1"),
            sA = n("alJ6"),
            sP = n("u9iS"),
            sM = n("KidQ");
        let sk = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function sR(e) {
            let t, n, s, o, i, l = (0, r.c)(15),
                {
                    children: c,
                    draftKey: d,
                    enableInlineSystemHints: u
                } = e,
                h = (0, m.y)(eo.a),
                p = (0, y.useContext)(tu.a),
                g = u ? "chatgpt" : void 0;
            return l[0] !== u || l[1] !== g ? (t = {
                enableInlineSystemHints: u,
                variant: g
            }, l[0] = u, l[1] = g, l[2] = t) : t = l[2], l[3] !== d || l[4] !== h ? (n = () => ({
                defaultText: h.get(e9.s, d),
                defaultTextKind: "prompt"
            }), l[3] = d, l[4] = h, l[5] = n) : n = l[5], l[6] !== p ? (s = () => {
                let e = p?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == p ? null : {
                    element: e,
                    locationKey: p.locationKey
                }
            }, l[6] = p, l[7] = s) : s = l[7], l[8] !== c ? (o = e => null == e ? null : c(e), l[8] = c, l[9] = o) : o = l[9], l[10] !== t || l[11] !== n || l[12] !== s || l[13] !== o ? (i = (0, a.jsx)(sM.a, {
                controllerOptions: sk,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: s,
                children: o
            }), l[10] = t, l[11] = n, l[12] = s, l[13] = o, l[14] = i) : i = l[14], i
        }
        var sO = n("ygKd"),
            sN = n("KSir"),
            sG = n("vVgo");
        let sL = (0, e4.a)(async () => (await n.e(642007).then(n.bind(n, "KhUL"))).CourseHeaderShortcut);

        function sB(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, ei.h)("4035922817");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(sL, {
                    conversationId: s
                })
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        var sz = n("QPeR"),
            sF = n("MgyE"),
            sD = n("gyrn"),
            sH = n("wnpN"),
            sW = n("M3Kf");

        function sq(e) {
            let t, n, s, i, l, c, d = (0, r.c)(21),
                {
                    conversationId: u
                } = e,
                h = (0, m.y)(eo.a),
                p = (0, m.x)(B.j, u),
                g = (0, m.z)(eL.b),
                {
                    search: f
                } = (0, C.X)();
            if (d[0] !== f) {
                let e = new URLSearchParams(f);
                t = e.get("messageId") ?? e.get("message"), n = e.has("selectedTextQuery"), d[0] = f, d[1] = t, d[2] = n
            } else t = d[1], n = d[2];
            let v = n;
            d[3] !== v || d[4] !== t || d[5] !== p ? (s = ["chatgpt-message-target", p, t, v], d[3] = v, d[4] = t, d[5] = p, d[6] = s) : s = d[6];
            let y = null != p && null != t && g > 0,
                b = v ? 0 : 1 / 0;
            d[7] !== u || d[8] !== v || d[9] !== t || d[10] !== h || d[11] !== p ? (i = async e => {
                let {
                    signal: n
                } = e;
                if (null != p) {
                    if (null != t && v) {
                        let e = h.get(B.L, u),
                            n = e?.[t] ?? (null == e ? void 0 : Object.values(e).find(e => e.message?.id === t));
                        if (n?.message != null) return !0
                    }
                    await (0, eG.a)(h, p, n)
                }
                return !0
            }, d[7] = u, d[8] = v, d[9] = t, d[10] = h, d[11] = p, d[12] = i) : i = d[12], d[13] !== s || d[14] !== y || d[15] !== b || d[16] !== i ? (l = {
                queryKey: s,
                enabled: y,
                staleTime: b,
                retry: !1,
                queryFn: i
            }, d[13] = s, d[14] = y, d[15] = b, d[16] = i, d[17] = l) : l = d[17];
            let {
                isError: x,
                refetch: _
            } = (0, o.a)(l);
            return d[18] !== x || d[19] !== _ ? (c = x ? (0, a.jsx)(eX.a, {
                color: "secondary",
                onClick: () => void _(),
                children: (0, a.jsx)(et.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message",
                    description: "Button to retry loading the full conversation for a link to an older message"
                })
            }) : null, d[18] = x, d[19] = _, d[20] = c) : c = d[20], c
        }
        var sU = n("ckwE");

        function sK(e) {
            let t, n = (0, r.c)(3),
                {
                    children: s
                } = e,
                [o] = (0, y.useState)(sV);
            return n[0] !== o || n[1] !== s ? (t = (0, a.jsx)(eB.a, {
                value: o,
                children: s
            }), n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }

        function sV() {
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

        function sQ(e) {
            let t, n = (0, r.c)(2),
                {
                    children: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(sU.a, {
                children: (0, a.jsx)(sK, {
                    children: s
                })
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var sY = n("MDmT"),
            sZ = n("K45w"),
            s$ = n("jCHb"),
            sJ = n("V8uZ");

        function sX(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var s0 = n("NqfB"),
            s1 = n("JEFL"),
            s2 = n("moBM");
        let s3 = '[data-markdown-text-style="assistant-message"]',
            s4 = (0, m.d)(eo.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(B.L, n)?.[a]?.message ?? null
            });

        function s6(e) {
            let t, n, s = (0, r.c)(5),
                o = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return s[0] !== e ? (t = t => (0, a.jsx)(s5, {
                ...e,
                selection: t
            }), s[0] = e, s[1] = t) : t = s[1], s[2] !== o || s[3] !== t ? (n = (0, a.jsx)(s0.a, {
                align: "start",
                targetSelector: o,
                children: t
            }), s[2] = o, s[3] = t, s[4] = n) : n = s[4], n
        }

        function s5(e) {
            let t, s, o, i, l, c, d, u = (0, r.c)(30),
                {
                    conversationId: h,
                    moreDetailsEnabled: p,
                    onAddSelectedText: g,
                    selection: f
                } = e,
                v = (0, m.y)(z.a),
                y = (0, x.a)(),
                b = (0, ei.h)("4290238484"),
                C = (0, ei.h)("473637331"),
                _ = (0, m.z)(s2.a),
                w = (0, m.x)(B.x, h);
            u[0] !== w || u[1] !== _ || u[2] !== v ? (t = _ && "tpp" === w && "chatgpt-thread" === v.value.routeKind && null == v.value.workSideChat && !0, u[0] = w, u[1] = _, u[2] = v, u[3] = t) : t = u[3];
            let I = t;
            u[4] !== h || u[5] !== f.selectionRange ? (s = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, s = a?.closest(s3);
                if (n.collapsed || null == s || !s.isConnected || s !== r?.closest(s3)) return null;
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
            let j = (0, m.x)(s4, o),
                E = (0, m.x)(B.j, h),
                A = b && p && null != E && null != T && j?.author.role === "assistant";
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
                    for (let r of n2(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(T.markdownElement, f.selectionRange, e))
            } : void 0, u[13] = A, u[14] = C, u[15] = g, u[16] = f.selectionRange, u[17] = T, u[18] = l) : l = u[18], u[19] !== A || u[20] !== h || u[21] !== y || u[22] !== v || u[23] !== T ? (c = A ? e => {
                Promise.all([n.e(753405), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(829706), n.e(62441), n.e(242986), n.e(331845), n.e(873856), n.e(717483)]).then(n.bind(n, "zRlR")).then(t => {
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
            } : void 0, u[19] = A, u[20] = h, u[21] = y, u[22] = v, u[23] = T, u[24] = c) : c = u[24], u[25] !== f.selectedText || u[26] !== i || u[27] !== l || u[28] !== c ? (d = (0, a.jsx)(s1.a, {
                conversationTerminology: "chat",
                selectedText: f.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), u[25] = f.selectedText, u[26] = i, u[27] = l, u[28] = c, u[29] = d) : d = u[29], d
        }
        var s8 = n("Fjze");

        function s7(e) {
            let t, n, a, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = e,
                i = (0, m.y)(eo.a),
                l = null != o;
            s[0] !== i || s[1] !== o ? (t = () => {
                null != o && (rJ.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: o
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(s9), (0, eu.a)(i, s8.a, {
                    sharedConversationId: o
                }))
            }, s[0] = i, s[1] = o, s[2] = t) : t = s[2];
            let c = (0, y.useEffectEvent)(t);
            return s[3] !== c ? (n = () => {
                c()
            }, s[3] = c, s[4] = n) : n = s[4], s[5] !== l ? (a = [l], s[5] = l, s[6] = a) : a = s[6], (0, y.useEffect)(n, a), null
        }

        function s9() {}
        var oe = n("GigQ"),
            ot = n("JKdL"),
            on = n("HOLv"),
            oa = n("FGv0"),
            or = n("r9i9"),
            os = n("tdfh"),
            oo = n("SEBt"),
            oi = n("uQqo"),
            ol = n("Ohm5");

        function oc(e) {
            let t, s, o, i, l, c = (0, r.c)(12),
                {
                    data: d
                } = e,
                u = (0, m.y)(eo.a),
                h = (0, x.a)();
            c[0] !== h ? (t = h.formatMessage(ap.a.headerShare), c[0] = h, c[1] = t) : t = c[1];
            let p = t,
                [g, f] = (0, y.useState)(!1);
            return c[2] !== d || c[3] !== g || c[4] !== u ? (s = () => {
                g || (f(!0), (async function(e, t) {
                    let a = t.sharedPost,
                        r = a?.attachments[0]?.kind === "media_generation" ? (0, oi.a)(a, (0, oi.b)(a))[0] : null,
                        s = crypto.randomUUID();
                    (0, oo.b)(e, {
                        attachmentType: t.attachmentType,
                        contentType: t.contentType,
                        shareId: t.shareId,
                        shareSessionId: s
                    });
                    let o = t.dialogProps.receiverShareLink;
                    if (o?.contentType === "conversation") {
                        let a = (0, oo.a)(e, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                shareId: t.shareId,
                                shareSessionId: s,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                                usedExistingLink: !0,
                                omitSheetType: !0
                            }),
                            r = await (0, oa.a)(Promise.resolve(o.shareLinkUrl));
                        if (a({
                                result: r ? "link-copied" : "copy-failed",
                                shareId: t.shareId
                            }), r) {
                            let {
                                showConversationShareCopiedToast: t
                            } = await n.e(555532).then(n.bind(n, "euaP"));
                            t(e, null, !0 === o.isWorkspaceOnly)
                        } else(0, r$.f)(e, os.a, {
                            ...t.dialogProps,
                            recoveryShareLink: o,
                            shareSessionId: s
                        });
                        return
                    }(0, r$.f)(e, os.a, {
                        ...t.dialogProps,
                        image: r?.src == null ? void 0 : {
                            alt: t.dialogProps.title ?? "",
                            item: r,
                            previewSrc: r.src
                        },
                        previewTurns: null != r ? void 0 : (0, or.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId),
                        privacyNotices: (0, or.k)({
                            conversation: t.conversation,
                            projectId: null
                        }),
                        shareSessionId: s
                    })
                })(u, d).finally(() => f(!1)))
            }, c[2] = d, c[3] = g, c[4] = u, c[5] = s) : s = c[5], c[6] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(on.a, {
                asset: ol.a
            }), i = (0, a.jsx)(et.a, {
                ...ap.a.headerShare
            }), c[6] = o, c[7] = i) : (o = c[6], i = c[7]), c[8] !== g || c[9] !== p || c[10] !== s ? (l = (0, a.jsxs)(eX.a, {
                "aria-label": p,
                color: "ghostActive",
                loading: g,
                size: "toolbar",
                onClick: s,
                children: [o, i]
            }), c[8] = g, c[9] = p, c[10] = s, c[11] = l) : l = c[11], l
        }
        var od = n("JUxu");
        let ou = (0, y.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function oh(e) {
            let t, n, s, o, i = (0, r.c)(8),
                {
                    sharedConversationId: l
                } = e,
                c = (0, m.y)(eo.a);
            if (null != (0, m.x)(eS.e, (0, y.useContext)(R.a))) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(od.a, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("div", {
                className: "text-secondary",
                children: (0, a.jsx)(et.a, {
                    id: "chatgptConversations.sharedConversation.copyDisclaimer",
                    defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory.",
                    description: "Informational notice above a shared ChatGPT chat explaining that the copy will not be added to the viewer's memory"
                })
            }), i[1] = t) : t = i[1], i[2] !== c || i[3] !== l ? (n = e => {
                if (null == l) return;
                let t = e.currentTarget;
                (0, r$.f)(c, ou, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, oo.c)(c, l)
            }, i[2] = c, i[3] = l, i[4] = n) : n = i[4], i[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(et.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation",
                description: "Button above a shared ChatGPT conversation in Codex Desktop that opens ChatGPT's report modal for reporting another person's shared conversation"
            }), i[5] = s) : s = i[5], i[6] !== n ? (o = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(eX.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: s
                })]
            }), i[6] = n, i[7] = o) : o = i[7], o
        }
        var om = n("zbjM"),
            op = n("MVHH"),
            og = n("xSOA"),
            of = n("rhKI"),
            ov = n("PP3M"),
            oy = n("jAnS"),
            ob = n("CFOe"),
            ox = n("JNtf"),
            oC = n("mUDD");

        function o_(e) {
            let t, n, s, o, i, l, c, d, u, h, m, p, g, f = (0, r.c)(31),
                {
                    canSave: v,
                    isPending: y,
                    onCancel: b,
                    onClose: x,
                    onSave: C
                } = e;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(et.a, {
                id: "chatgptConversations.temporaryChat.save.close",
                defaultMessage: "Close",
                description: "Accessible label for the close button in the temporary chat save confirmation dialog."
            }), f[0] = t) : t = f[0], f[1] !== y || f[2] !== x ? (n = e => {
                e || y || x()
            }, f[1] = y, f[2] = x, f[3] = n) : n = f[3];
            let _ = !y;
            f[4] !== v || f[5] !== C ? (s = e => {
                e.preventDefault(), v && C()
            }, f[4] = v, f[5] = C, f[6] = s) : s = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(ox.e, {
                children: (0, a.jsx)(et.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?",
                    description: "Title of the confirmation dialog for converting a temporary ChatGPT conversation into a regular saved chat."
                })
            }), f[7] = o) : o = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(oC.e, {
                children: (0, a.jsx)(oC.d, {
                    className: "select-none",
                    title: o,
                    subtitle: (0, a.jsx)(ox.d, {
                        children: (0, a.jsx)(et.a, {
                            id: "chatgptConversations.temporaryChat.save.description.regularChatSettings",
                            defaultMessage: "This chat will now be included in your history. It will follow your memory and model training settings used for regular chats.",
                            description: "Body of the confirmation dialog shown when a user saves a temporary ChatGPT conversation. Explains before they confirm that the chat will appear in history and follow the memory and model training settings already configured for regular chats."
                        })
                    })
                })
            }), f[8] = i) : i = f[8], f[9] !== b || f[10] !== x ? (l = () => {
                b?.(), x()
            }, f[9] = b, f[10] = x, f[11] = l) : l = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(et.a, {
                id: "chatgptConversations.temporaryChat.save.cancel",
                defaultMessage: "Cancel",
                description: "Secondary button that closes the save confirmation dialog and leaves the ChatGPT conversation temporary."
            }), f[12] = c) : c = f[12], f[13] !== y || f[14] !== l ? (d = (0, a.jsx)(eX.a, {
                color: "secondary",
                disabled: y,
                onClick: l,
                children: c
            }), f[13] = y, f[14] = l, f[15] = d) : d = f[15];
            let w = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(et.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save",
                description: "Primary button that saves a temporary ChatGPT conversation to regular chat history."
            }), f[16] = u) : u = f[16], f[17] !== y || f[18] !== w ? (h = (0, a.jsx)(eX.a, {
                color: "primary",
                disabled: w,
                loading: y,
                type: "submit",
                children: u
            }), f[17] = y, f[18] = w, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (m = (0, a.jsx)(oC.e, {
                children: (0, a.jsxs)(oC.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = m) : m = f[22], f[23] !== m || f[24] !== s ? (p = (0, a.jsxs)(oC.b, {
                as: "form",
                onSubmit: s,
                children: [i, m]
            }), f[23] = m, f[24] = s, f[25] = p) : p = f[25], f[26] !== y || f[27] !== p || f[28] !== n || f[29] !== _ ? (g = (0, a.jsx)(ox.b, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: _,
                size: "narrow",
                children: p
            }), f[26] = y, f[27] = p, f[28] = n, f[29] = _, f[30] = g) : g = f[30], g
        }

        function ow(e) {
            (0, n7.e)(e).catch(() => {
                nS.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function oI(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(oT, {
                        conversationId: s
                    })
                })]
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function oT(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return (0, m.z)(ov.e) ? (n[0] !== s ? (t = (0, a.jsx)(oS, {
                conversationId: s
            }), n[0] = s, n[1] = t) : t = n[1], t) : null
        }

        function oS(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g, f, v = (0, r.c)(49),
                {
                    conversationId: b
                } = e,
                _ = (0, m.y)(eo.a),
                w = (0, x.a)(),
                I = (0, C.Z)(),
                [T, S] = (0, y.useState)(!1),
                [j, E] = (0, y.useState)(!1),
                [A, P] = (0, y.useState)(!1),
                [M, k] = (0, y.useState)(!1),
                R = (0, y.useRef)(!1),
                O = (0, m.z)(r3.p).data,
                N = (0, m.x)(B.j, b),
                G = (0, m.x)(B.W, b),
                L = (0, m.x)(B.H, b),
                z = (0, m.x)(e9.i, b);
            v[0] !== b || v[1] !== _ ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (_.get(B.H, b) || _.get(e9.i, b) || t !== _.get(B.j, b) || n !== _.get(B.W, b)) throw Error("Cannot save an unavailable temporary chat message");
                    return rJ.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: oM
                    }).then(oP)
                },
                retry: oA
            }, v[0] = b, v[1] = _, v[2] = t) : t = v[2];
            let {
                mutateAsync: F,
                isPending: D
            } = (0, og.a)(t), H = null != N && null != G && !L && !z && !D && !j;
            v[3] !== w ? (n = w.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat",
                description: "Tooltip and accessible label for the bookmark button in a temporary ChatGPT conversation. Opens a confirmation dialog to save it to regular history."
            }), v[3] = w, v[4] = n) : n = v[4];
            let W = n;
            v[5] !== O?.eligibleAnnouncements ? (s = O?.eligibleAnnouncements?.includes(r3.h), v[5] = O?.eligibleAnnouncements, v[6] = s) : s = v[6];
            let q = !0 === s,
                U = !M && (A || q && H);
            v[7] !== b || v[8] !== A || v[9] !== _ || v[10] !== U ? (o = () => {
                if (!U || A || R.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || R.current || (R.current = !0, (0, eu.a)(_, op.Ab, {
                        personalizationMode: (0, of.a)((0, ov.k)(_, b))
                    }), P(!0), ow(_))
                }), () => {
                    e = !0
                }
            }, i = [b, A, _, U], v[7] = b, v[8] = A, v[9] = _, v[10] = U, v[11] = o, v[12] = i) : (o = v[11], i = v[12]), (0, y.useEffect)(o, i), v[13] !== _ ? (l = () => {
                k(!0), R.current || (R.current = !0, ow(_))
            }, v[13] = _, v[14] = l) : l = v[14];
            let K = l;
            v[15] !== H || v[16] !== b || v[17] !== w || v[18] !== I || v[19] !== F || v[20] !== _ || v[21] !== G || v[22] !== N ? (c = async function() {
                let e;
                if (!H || null == N || null == G) return;
                let t = (0, of.a)((0, ov.k)(_, b));
                (0, eu.a)(_, op.Bb, {
                    personalizationMode: t
                });
                try {
                    e = (await F({
                        sourceConversationId: N,
                        selectedLeafId: G
                    })).conversation_id
                } catch (e) {
                    (0, eu.a)(_, op.Cb, {
                        personalizationMode: t,
                        failureCategory: (0, of.b)(e)
                    }), _.get(er.f).danger(w.formatMessage({
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
                E(!0), S(!1), (0, r9.H)(_), (0, r9.K)(_, N, "remove"), (0, r9.K)(_, e, "refresh"), I((0, oy.c)(e), {
                    replace: !0
                }), _.get(er.f).success(w.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history.",
                    description: "Success toast confirming that a formerly temporary ChatGPT conversation is now saved in regular history."
                })), rJ.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: G
                    }
                }).then(oE).then(t => {
                    (0, B.$b)({
                        scope: _,
                        conversationId: e,
                        title: t
                    }), _.query.setData(n7.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, r9.H)(_), (0, r9.K)(_, e, "refresh")
                }).catch(oj)
            }, v[15] = H, v[16] = b, v[17] = w, v[18] = I, v[19] = F, v[20] = _, v[21] = G, v[22] = N, v[23] = c) : c = v[23];
            let V = c,
                Q = !H;
            v[24] !== b || v[25] !== _ || v[26] !== U ? (d = () => {
                (0, eu.a)(_, op.Eb, {
                    personalizationMode: (0, of.a)((0, ov.k)(_, b)),
                    coachMarkVisible: U
                }), S(!0)
            }, v[24] = b, v[25] = _, v[26] = U, v[27] = d) : d = v[27], v[28] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(t_.b, {
                icon: {
                    16: ah.pb,
                    20: ah.qb
                }
            }), v[28] = u) : u = v[28], v[29] !== W || v[30] !== Q || v[31] !== d ? (h = (0, a.jsx)(eX.a, {
                "aria-label": W,
                color: "toolbar",
                disabled: Q,
                size: "toolbar",
                uniform: !0,
                onClick: d,
                children: u
            }), v[29] = W, v[30] = Q, v[31] = d, v[32] = h) : h = v[32];
            let Y = h;
            return v[33] !== K || v[34] !== w || v[35] !== W || v[36] !== Y || v[37] !== U ? (p = U ? (0, a.jsx)(ob.a, {
                align: "end",
                description: (0, a.jsx)(et.a, {
                    id: "chatgptConversations.temporaryChat.save.coachmark.description",
                    defaultMessage: "Want to keep this chat? You can now save it to your history.",
                    description: "Body of a one-time onboarding coachmark anchored to the Save chat button after a user creates an eligible temporary chat."
                }),
                dismissLabel: w.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.coachmark.dismiss",
                    defaultMessage: "Close tooltip",
                    description: "Accessible label for dismissing the temporary chat save coachmark."
                }),
                onDismiss: K,
                open: !0,
                side: "bottom",
                sideOffset: 10,
                title: (0, a.jsx)(et.a, {
                    id: "chatgptConversations.temporaryChat.save.button",
                    defaultMessage: "Save chat",
                    description: "Title of a one-time onboarding coachmark anchored to the Save chat button in a temporary ChatGPT conversation."
                }),
                tooltipClassName: "w-60",
                children: Y
            }) : (0, a.jsx)(au.a, {
                content: W,
                children: Y
            }), v[33] = K, v[34] = w, v[35] = W, v[36] = Y, v[37] = U, v[38] = p) : p = v[38], v[39] !== H || v[40] !== b || v[41] !== V || v[42] !== T || v[43] !== D || v[44] !== _ ? (g = T ? (0, a.jsx)(o_, {
                canSave: H,
                isPending: D,
                onCancel: () => {
                    (0, eu.a)(_, op.zb, {
                        personalizationMode: (0, of.a)((0, ov.k)(_, b))
                    })
                },
                onClose: () => S(!1),
                onSave: () => void V()
            }) : null, v[39] = H, v[40] = b, v[41] = V, v[42] = T, v[43] = D, v[44] = _, v[45] = g) : g = v[45], v[46] !== p || v[47] !== g ? (f = (0, a.jsxs)(a.Fragment, {
                children: [p, g]
            }), v[46] = p, v[47] = g, v[48] = f) : f = v[48], f
        }

        function oj() {}

        function oE(e) {
            return nH.object({
                title: nH.string()
            }).parse(e).title
        }

        function oA(e, t) {
            return e < 1 && t instanceof nr.a && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function oP(e) {
            return nH.object({
                conversation_id: nH.string().min(1)
            }).parse(e)
        }

        function oM(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var ok = n("Sd4O");
        let oR = (0, m.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(ok.a, e);
            return null != a && n(F.e, a).data?.automation.plan_type === "language_learning"
        });
        var oO = n("AORd"),
            oN = n("J8FU"),
            oG = n("vpdG"),
            oL = n("OiCI"),
            oB = n("Sd8U"),
            oz = n("FNgK"),
            oF = n("nD1x");

        function oD(e) {
            let t, n, a = (0, r.c)(6),
                {
                    conversationId: s,
                    shouldBlockExternalEgress: o,
                    widgets: i
                } = e,
                l = (0, m.y)(oB.a);
            return a[0] !== s || a[1] !== l || a[2] !== o || a[3] !== i ? (t = () => {
                let e = new Map(i.map(e => [(0, aD.e)(s, e.messageId), e]));
                return l.watch(t => {
                    let {
                        get: n
                    } = t, a = n(oL.b), r = n(O.k);
                    for (let t of n(aO.j).keys()) {
                        let i = e.get(t);
                        if (null == i) continue;
                        let c = !0 === i.metadata.is_widget_closed || n(oF.a, {
                                accountId: a,
                                userId: r,
                                conversationId: s,
                                messageId: i.messageId
                            }),
                            d = "hidden" === i.sessionPresentation,
                            u = "tombstone" === i.sessionPresentation,
                            h = i.replacementMessageId;
                        if (o || c || !d && !u || null == h || n(oF.a, {
                                accountId: a,
                                userId: r,
                                conversationId: s,
                                messageId: h
                            }) || (0, oz.b)(l, t, (0, aD.e)(s, h)), c || d) {
                            (0, aO.y)(l, t);
                            continue
                        }
                        let m = l.get(aO.j).get(t),
                            p = m?.content.mcpAppHostAdapter;
                        null != m && null != p && (p.isTombstone !== u && (0, aO.x)(l, {
                            mcpAppId: t,
                            hostedInThreadScrollLayout: m.hostedInThreadScrollLayout,
                            ...m.content,
                            mcpAppHostAdapter: {
                                ...p,
                                isTombstone: u
                            }
                        }), u && null != m.sessionId && (0, aO.C)(l, m.sessionId, {
                            displayMode: "inline"
                        }))
                    }
                })
            }, n = [s, l, o, i], a[0] = s, a[1] = l, a[2] = o, a[3] = i, a[4] = t, a[5] = n) : (t = a[4], n = a[5]), (0, y.useLayoutEffect)(t, n), null
        }
        var oH = n("JVSG"),
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
            oq = n("nFye");
        let oU = (0, m.v)(eo.a, e => null);

        function oK() {
            let e, t, n, s, o, i, l, c, d, u, h, p, g, f, v, b = (0, r.c)(40),
                x = (0, C.Z)(),
                _ = (0, y.useContext)(tN.a);
            b[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, b[0] = e) : e = b[0];
            let I = (0, m.x)(T.a, e),
                S = (0, m.z)(G.a),
                j = (0, C.ab)() ?? 0,
                {
                    conversationId: E
                } = (0, C.bb)(),
                {
                    search: A,
                    state: P
                } = (0, C.X)(),
                M = (0, m.x)(nM.a, E ?? null),
                k = (0, m.x)(null == E || eT.d, M ?? E ?? ""),
                R = P?.archivedConversationPreview === !0;
            b[1] !== A ? (t = (0, oy.h)(A), b[1] = A, b[2] = t) : t = b[2];
            let O = t;
            b[3] !== R || b[4] !== O || b[5] !== E ? (n = null == E || (0, eN.e)(E) || O || R ? null : E, b[3] = R, b[4] = O, b[5] = E, b[6] = n) : n = b[6];
            let {
                data: N
            } = (0, m.x)(n7.chatGptConversationQueryById$, n);
            if (null == E) {
                let e;
                return b[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(C.l, {
                    to: "/",
                    replace: !0
                }), b[7] = e) : e = b[7], e
            }
            b[8] !== M || b[9] !== E ? (s = M ?? (0, eN.d)(E), b[8] = M, b[9] = E, b[10] = s) : s = b[10];
            let L = s,
                B = I.isCapable && !S && !k && null != N;
            b[11] !== x ? (o = e => (x((0, oy.c)(e)), !0), b[11] = x, b[12] = o) : o = b[12];
            let z = o;
            b[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(w.a, {}), l = (0, a.jsx)(tv.a.Surface, {}), b[13] = i, b[14] = l) : (i = b[13], l = b[14]), b[15] !== R ? (c = null, b[15] = R, b[16] = c) : c = b[16], b[17] !== L || b[18] !== R || b[19] !== O ? (d = O || R ? null : (0, a.jsx)(nF.a, {
                conversationId: L
            }), b[17] = L, b[18] = R, b[19] = O, b[20] = d) : d = b[20];
            let F = _ ?? (B ? z : null),
                D = `${L}:${O}`;
            b[21] === Symbol.for("react.memo_cache_sentinel") ? (u = void 0, b[21] = u) : u = b[21], b[22] !== L || b[23] !== R || b[24] !== O || b[25] !== D || b[26] !== j ? (h = (0, a.jsx)(oQ, {
                conversationId: L,
                viewActivation: j,
                isArchivedPreview: R,
                isReadOnlyPreview: !1,
                banner: u,
                isTemporaryChat: O,
                sharedConversationId: null
            }, D), b[22] = L, b[23] = R, b[24] = O, b[25] = D, b[26] = j, b[27] = h) : h = b[27], b[28] !== h || b[29] !== F ? (p = (0, a.jsx)(tN.a, {
                value: F,
                children: h
            }), b[28] = h, b[29] = F, b[30] = p) : p = b[30], b[31] !== p || b[32] !== c || b[33] !== d ? (g = (0, a.jsxs)(a.Fragment, {
                children: [i, l, c, d, p]
            }), b[31] = p, b[32] = c, b[33] = d, b[34] = g) : g = b[34];
            let H = g;
            return b[35] !== H ? (f = H, b[35] = H, b[36] = f) : f = b[36], b[37] !== L || b[38] !== f ? (v = (0, a.jsx)(aM.a, {
                conversationId: L,
                children: f
            }), b[37] = L, b[38] = f, b[39] = v) : v = b[39], v
        }

        function oV() {
            let e, t, n, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = (0, C.bb)();
            if (null == o) {
                let e;
                return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(C.l, {
                    to: "/",
                    replace: !0
                }), s[0] = e) : e = s[0], e
            }
            s[1] !== o ? (e = (0, eN.d)(o), s[1] = o, s[2] = e) : e = s[2];
            let i = e;
            return s[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(tv.a.Surface, {}), s[3] = t) : t = s[3], s[4] !== i || s[5] !== o ? (n = (0, a.jsxs)(a.Fragment, {
                children: [t, (0, a.jsx)(oQ, {
                    conversationId: i,
                    isTemporaryChat: !1,
                    sharedConversationId: o
                }, o)]
            }), s[4] = i, s[5] = o, s[6] = n) : n = s[6], n
        }

        function oQ(e) {
            let t, n, i, l, c, d, u, b, w, T, M, k, L, F, D, H, W, q, U, K, V, Q, Z, et, en, ea, es, eo, el, ec, ed, eh, em, ep, eg, ef, ev, ey, eb, ex, eC, ew, eI, ej, eE, eA, eP, eM, ek, eR, eO, eG, eL, eB, ez, eF, eD, eH, eW, eq, eU, eK, eJ, eX, e0, e1, e2, e3, e4, e6, e5, e8, e7, te, ta, tr, ts, to, ti, tl, tc, tu, tg, tf, tv, ty, tb, tx, tC = (0, r.c)(688),
                {
                    conversationId: tT,
                    viewActivation: tA,
                    isArchivedPreview: tP,
                    isInlinePreview: tM,
                    hideModelPicker: tk,
                    disableAutoFocus: tR,
                    hideInitialUserMessage: tN,
                    transcriptPresentation: tK,
                    scrollOrigin: tQ,
                    isReadOnlyPreview: tX,
                    onSubmitAccepted: t3,
                    isTemporaryChat: t7,
                    sharedConversationId: nL,
                    sharedPostContinuation: nz,
                    requiredSystemHints: nF,
                    routePattern: nH,
                    composerLeadingContent: nW,
                    header: nq,
                    banner: nU,
                    onRetryMissingConversation: nK,
                    sharedProjectConversation: nV,
                    workspace: nQ
                } = e,
                nY = void 0 === tA ? 0 : tA,
                nZ = void 0 !== tP && tP,
                n$ = void 0 !== tM && tM,
                nJ = (0, m.y)(z.a),
                nX = (0, y.useContext)(R.a),
                n0 = (0, m.x)(eS.e, nX),
                n1 = (0, m.z)(!!(void 0 !== nz && nz && null != n0 && (0, eS.b)(n0) && (n0.web_image_attachments?.length ?? 0) > 0) && G.a);
            tC[0] !== nX || tC[1] !== tT ? (t = {
                auth: nX,
                conversationId: tT
            }, tC[0] = nX, tC[1] = tT, tC[2] = t) : t = tC[2];
            let n2 = (0, m.x)(null != nX && !nX.isLoading && null === nX.authMethod && eS.g, t),
                {
                    conversationId: n3
                } = (0, C.bb)();
            tC[3] !== tT || tC[4] !== n$ || tC[5] !== n3 || tC[6] !== nJ || tC[7] !== nQ ? (n = () => (0, eN.e)(n$ || null != nQ || null == nJ.get(B.j, tT) ? tT : n3 ?? ""), tC[3] = tT, tC[4] = n$, tC[5] = n3, tC[6] = nJ, tC[7] = nQ, tC[8] = n) : n = tC[8];
            let [n4, n6] = (0, y.useState)(n);
            tC[9] !== n4 || tC[10] !== tT ? (i = () => n4 ? tT : null, tC[9] = n4, tC[10] = tT, tC[11] = i) : i = tC[11];
            let [ae] = (0, y.useState)(i), an = null != nL || null != n0 && !n1;
            tC[12] !== tT || tC[13] !== nZ || tC[14] !== n$ || tC[15] !== an || tC[16] !== nJ ? (c = () => {
                if (!an && !nZ && !n$) return function(e, t) {
                    let n = e.get(nM.a, t) ?? t,
                        a = e.get(X.b, t),
                        r = e.get(nN, n),
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
                            if (!o.initialCreationMessageIds.has(n.messageId) && (0, nw.openSpacePageSidePanelTab)(e, n.pageId, {
                                    title: n.title
                                }).opened) {
                                o.openedCreatedPage = !0;
                                break
                            }
                    }
                    let u = e.watch(n => {
                        let {
                            get: a
                        } = n, r = a(B._, t), s = a(np.i), u = a(B.ab, t);
                        if ((0, B.zb)(r)) {
                            l = !1;
                            let e = a(X.b, t),
                                n = a(B.bb, t),
                                r = !o.observedTurn || o.attemptId !== e;
                            if (o.attemptId = e, r) {
                                let e = c;
                                c = null, e?.abort(), o.observedTurn = !0, o.activeRequestId = n, o.dismissed = u, o.openedCreatedPage = !1
                            } else o.activeRequestId = n ?? o.activeRequestId, o.dismissed = o.dismissed || u || i && !s;
                            i = s;
                            let h = !u && !o.dismissed && !s && !o.openedCreatedPage && !a(z.j) && !a(B.C, t) && !a(eT.d, t),
                                m = [];
                            if ((r || h) && (m = a(B.P, t) ?? []), r) {
                                o.initialCreationMessageIds = new Set(m.map(e => e.messageId));
                                return
                            }
                            h && d(m);
                            return
                        }
                        if (!o.observedTurn) return;
                        let h = a(B.v, t);
                        if ("idle" !== r || u || null != h && "completed" !== h.result || null != e.get(B.C, t) || e.get(z.j) || e.get(eT.d, t)) {
                            o.observedTurn = !1;
                            return
                        }
                        if (l) {
                            if (o.dismissed || s || o.openedCreatedPage || a(X.b, t) !== o.attemptId) {
                                o.observedTurn = !1;
                                return
                            }
                            if (h?.result !== "completed") return;
                            d(a(B.P, t) ?? []), o.observedTurn = !o.openedCreatedPage;
                            return
                        }
                        if (o.observedTurn = !1, h?.result !== "completed" || h.requestId !== o.activeRequestId) return;
                        let m = e.get(B.L, t);
                        if (null == m) return;
                        let p = (0, g.b)({
                                mapping: m,
                                current_node: e.get(B.B, t)
                            }),
                            f = p.findLast(nO.b);
                        if (f?.status !== "finished_successfully") return;
                        let v = [...(0, nk.e)(p).outputs, ...p.flatMap(e => (0, nk.c)(e).map(e => e.file))],
                            y = e.get(nE.a, t)?.at(-1);
                        if (y?.turn.status !== "complete") return;
                        let b = [...(0, nf.b)(p), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, ng.a)(e, b, !o.dismissed) || !o.dismissed && !o.openedCreatedPage && (0, nI.a)(e, b)) && !o.dismissed && !s && !o.openedCreatedPage) {
                            for (let t of (0, n_.c)((0, g.e)(f)).toReversed())
                                if ((0, nw.openSpacePageSidePanelTab)(e, t.id, {
                                        blockId: t.blockId
                                    }).opened) return;
                            if ((0, nR.canOpenChatGptFilePreview)({
                                    browserPreview: !0
                                })) {
                                for (let n of y.turn.items)
                                    if ("assistant-message" === n.type && n.completed)
                                        for (let [a, r] of n.contentReferences.entries()) {
                                            let s = (0, nA.a)(r),
                                                o = null == s ? null : (0, nv.a)(s),
                                                i = v.find(e => null != e.fileId && e.fileId === (r.file_id ?? r.id) || null != e.libraryFileId && e.libraryFileId === r.library_file_id);
                                            if ("file" !== r.type || !(0, nm.a)(r) || null == s || null == o || !(0, nv.f)(o) || null == i && null == (0, nP.b)(r.sandbox_path) && !(0, nP.b)(r.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > nx.a) continue;
                                            let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                d = (0, nj.b)(r, {
                                                    fileName: s,
                                                    messageId: l
                                                });
                                            if (null == d) continue;
                                            if (e.get(t0.f)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let u = e.get(B.j, t) ?? t,
                                                h = `${l??"message"}:${String(a)}:${s}`,
                                                m = `chatgpt-file:${u}:${h}`,
                                                g = {
                                                    turnId: y.id,
                                                    inputMessageId: p.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: l ?? null
                                                },
                                                f = new AbortController,
                                                b = (0, nR.openChatGptFile)(e, {
                                                    conversationId: u,
                                                    fileName: s,
                                                    gizmoId: e.get(B.R, t),
                                                    sharedConversationId: e.get(B.Y, t),
                                                    target: d,
                                                    tabKey: h,
                                                    browserPreview: !0,
                                                    isAccessBlocked: e => e.get(eT.d, t),
                                                    downloadFallback: !1,
                                                    openSource: "auto_open",
                                                    originatingTurn: g,
                                                    signal: f.signal,
                                                    onOpened: () => {
                                                        let t = e.get(P.j.activeTab$);
                                                        f.signal.aborted || t?.tabId !== m || t.tabType.kind !== ny.a || ((0, eu.a)(e, nh.CodexFileOpened, {
                                                            threadId: u,
                                                            turnId: g.turnId,
                                                            inputMessageId: g.inputMessageId ?? void 0,
                                                            messageId: g.messageId ?? void 0,
                                                            fileExtension: (0, nb.c)(s) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, eu.a)(e, nh.CodexWorkspaceFilePreviewAttempted, (0, nC.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: g,
                                                            path: s,
                                                            threadId: u,
                                                            windowType: "browser"
                                                        })), (0, nT.b)(e, m, "auto_open"))
                                                    },
                                                    onClose: () => f.abort()
                                                });
                                            c = f;
                                            let x = e.watch(e => {
                                                let {
                                                    get: n
                                                } = e;
                                                (n(np.i) && n(P.j.activeTab$)?.tabId !== m || n(eT.d, t)) && f.abort()
                                            });
                                            b.catch(e => {
                                                f.signal.aborted || nS.a.debug("Automatic ChatGPT artifact preview could not open", {
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
                        u(), c?.abort(), null != o.attemptId && e.set(nN, n, {
                            ...o,
                            attemptId: o.attemptId
                        })
                    }
                }(nJ, tT)
            }, l = [tT, nZ, n$, an, nJ], tC[12] = tT, tC[13] = nZ, tC[14] = n$, tC[15] = an, tC[16] = nJ, tC[17] = l, tC[18] = c) : (l = tC[17], c = tC[18]), (0, y.useEffect)(c, l);
            let aa = (0, m.x)(a1.a, tT),
                ar = an ? null : aa;
            tC[19] !== nL ? (d = () => null == nL ? null : (0, eN.b)(), tC[19] = nL, tC[20] = d) : d = tC[20];
            let [as] = (0, y.useState)(d), ao = as ?? tT;
            tC[21] !== ao ? (u = (0, tY.o)({
                routeKind: "chatgpt-thread",
                conversationId: ao
            }), tC[21] = ao, tC[22] = u) : u = tC[22];
            let ai = null != (0, m.x)(tG.c, u);
            tC[23] !== ao || tC[24] !== nF || tC[25] !== nJ ? (b = () => {
                if (null != nF && 0 !== nF.length) return (0, tn.b)(nJ, ao, nF)
            }, w = [ao, nF, nJ], tC[23] = ao, tC[24] = nF, tC[25] = nJ, tC[26] = b, tC[27] = w) : (b = tC[26], w = tC[27]), (0, y.useEffect)(b, w);
            let al = (0, y.useRef)(null),
                [ac, ad] = (0, y.useState)(null),
                [au, ah] = (0, y.useState)(null),
                [am, ap] = (0, y.useState)(null),
                af = au?.activation === nY ? au.messageId : null,
                av = am === nY,
                ax = (0, y.useRef)(null);
            tC[28] === Symbol.for("react.memo_cache_sentinel") ? (T = () => {
                let e = new AbortController;
                return ax.current = e, () => e.abort()
            }, tC[28] = T) : T = tC[28], tC[29] !== nY ? (M = [nY], tC[29] = nY, tC[30] = M) : M = tC[30], (0, y.useLayoutEffect)(T, M);
            let aC = (0, x.a)(),
                a_ = (0, C.Z)(),
                aw = (0, t9.c)(),
                aT = (0, m.x)(B.j, tT);
            tC[31] !== nJ ? (k = e => {
                (0, nG.c)(nJ, e)
            }, tC[31] = nJ, tC[32] = k) : k = tC[32];
            let aj = (0, y.useEffectEvent)(k);
            tC[33] !== aT || tC[34] !== aj ? (L = () => () => {
                null != aT && aj(aT)
            }, tC[33] = aT, tC[34] = aj, tC[35] = L) : L = tC[35], tC[36] !== aT ? (F = [aT], tC[36] = aT, tC[37] = F) : F = tC[37], (0, y.useEffect)(L, F);
            let aE = (0, m.x)(om.b, tT),
                aA = (0, m.x)(B.L, tT),
                aP = (0, m.x)(n7.chatGptConversationQueryById$, an || t7 && null != aA ? null : aT);
            (0, m.x)(an ? null : at.a, aT);
            let aM = (0, m.x)(!n2 && !n1 && eT.d, tT),
                ak = aT ?? tT,
                aO = (0, m.x)(B.B, tT),
                aN = (0, m.x)(B.x, tT),
                aG = (0, m.x)(B.R, tT),
                aL = (0, m.x)(B.C, tT),
                aB = (0, m.x)(B.M, tT),
                az = (0, m.x)(B._, tT),
                aF = (0, m.x)(B.V, tT),
                aH = (0, m.x)(B.X, tT),
                aW = (0, m.x)(ab.a, tT),
                aq = (0, m.x)(B.D, tT),
                aU = (0, m.x)(B.cb, tT),
                aK = (0, m.x)(B.db, tT),
                aV = (0, m.x)(n7.n, nL),
                aQ = (0, y.useRef)(null),
                aY = aV.isSuccess && null != aV.data ? nL : null;
            tC[38] !== nJ ? (D = e => {
                (0, eu.a)(nJ, s.h, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, tC[38] = nJ, tC[39] = D) : D = tC[39];
            let aZ = (0, y.useEffectEvent)(D);
            tC[40] !== aY || tC[41] !== aZ ? (H = () => {
                null != aY && aQ.current !== aY && (aQ.current = aY, aZ(aY))
            }, tC[40] = aY, tC[41] = aZ, tC[42] = H) : H = tC[42], tC[43] !== aY ? (W = [aY], tC[43] = aY, tC[44] = W) : W = tC[44], (0, y.useEffect)(H, W);
            let aX = (0, m.x)(e9.o, tT),
                a0 = (0, m.x)(e9.p, tT),
                a9 = (0, m.x)(e9.m, tT),
                rt = (0, m.x)(e9.q, tT),
                rn = (0, m.x)(e9.n, tT),
                ra = (0, m.x)(e9.i, tT),
                rr = (0, m.x)(B.ab, tT),
                rs = (0, m.x)(e9.z, tT);
            tC[45] !== az ? (q = (0, B.zb)(az), tC[45] = az, tC[46] = q) : q = tC[46];
            let ro = q,
                ri = (0, m.x)(a3, tT),
                rl = (0, m.z)(N.t),
                rc = (0, m.z)(N.q),
                rh = (0, m.z)(N.s),
                rT = (0, m.z)(N.l),
                rS = (0, m.z)(N.m),
                rj = (0, m.z)(tF.pagesEnabled$);
            tC[47] === Symbol.for("react.memo_cache_sentinel") ? (U = (0, tO.a)(), tC[47] = U) : U = tC[47];
            let rE = (0, ei.h)(U);
            tC[48] === Symbol.for("react.memo_cache_sentinel") ? (K = (0, tO.b)(), tC[48] = K) : K = tC[48];
            let rA = (0, ei.h)(K),
                rP = null != aA,
                rM = (0, m.z)(sD.f),
                rR = an ? aV : aP;
            n4 && null != rR.data && n6(!1);
            let rO = n4 && rP && null == rR.data,
                rN = rR.isLoading || !rO && rR.isError;
            tC[49] !== ac || tC[50] !== ao || tC[51] !== rN || tC[52] !== an || tC[53] !== t7 || tC[54] !== nJ ? (V = (e, t, n, a) => {
                !(e || nJ.get(tV.a)) && ((0, e9.b)(nJ, ao, t, void 0, n, a), ac?.focus(), an || rN || (0, n8.f)(nJ, ao, {
                    isTemporaryChat: t7
                }))
            }, tC[49] = ac, tC[50] = ao, tC[51] = rN, tC[52] = an, tC[53] = t7, tC[54] = nJ, tC[55] = V) : V = tC[55];
            let rB = V,
                rz = null == n0 ? null : (0, oe.a)(n0, tT),
                rD = null == rz ? void 0 : (0, sj.a)(rz),
                rW = rz ?? rR.data,
                rq = aq ? aU : rW?.title,
                rU = (0, m.z)(O.h),
                rK = (0, m.z)(O.g),
                rV = "chatgpt-thread" === nJ.value.routeKind && nJ.value.workSideChat?.conversationId === tT,
                rQ = rW?.conversation_origin ?? aN ?? (null != nQ || rV ? "tpp" : null),
                rY = "tpp" === rQ,
                rZ = rY && "denied" === rl.status && "go-plan" === rl.reason,
                r$ = (0, m.z)(t1.d),
                rJ = (0, C.X)(),
                rX = rJ.state;
            (0, m.z)(t$.b);
            let r0 = (0, m.x)(t0.d, "3901104270") && rX?.openGoalPlan === !0,
                r1 = (0, y.useContext)(A.c),
                r2 = (0, t8.a)(),
                r3 = r1?.hasPageSurface === !0,
                r4 = "tpp" === rQ || "flora" === rQ,
                r6 = (0, ei.h)("2871250183"),
                r5 = (0, m.z)(!!r4 && N.u),
                r8 = void 0 !== tX && tX || r5,
                r7 = null == r$ || r$.isFullWidth ? void 0 : r$.width ?? 420,
                se = !0 === (0, m.z)(r4 ? null : no.d),
                st = (0, m.z)(r4 ? tU.b : tU.a),
                sn = !r4 && st,
                sa = !rA || rS && !r4,
                sr = !an && rS && !r4,
                ss = sr && rT,
                so = an && rW?.is_read_only === !0 || nV?.is_read_only === !0;
            tC[56] !== tT || tC[57] !== an || tC[58] !== nJ ? (Q = () => null, tC[56] = tT, tC[57] = an, tC[58] = nJ, tC[59] = Q) : Q = tC[59];
            let [si] = (0, y.useState)(Q), sl = rW?.gizmo_id ?? aG ?? si?.gizmoId ?? null, sd = an || null == sl || (0, tt.a)(sl) ? null : sl, sh = (0, m.x)(oU, ao), sm = (0, ag.d)({
                conversation: rW,
                conversationId: tT,
                conversationTitle: aW,
                pathname: rJ.pathname,
                sharedConversationId: nL,
                sharedPost: n0
            }), sp = !rh && null == rW && null == si, sy = null != aT && !aM && !sp && (rh || rc), sb = null;
            an || (sb = null != rW ? (0, r9.B)(rW) : (0, tt.a)(aG) ? aG : si?.projectId ?? null);
            let sx = (0, m.x)(nc.c, an ? null : tT),
                s_ = an || r4 || null != sb || sx || null == sh ? sd : sh.id,
                sw = (0, m.x)(sP.d, {
                    gizmoId: s_,
                    conversationId: ao,
                    visitKey: rJ.pathname
                }),
                sE = r3 || r4 || null != sb || null != sd || sx || t7,
                {
                    data: sM
                } = (0, o.a)({
                    enabled: null != sb,
                    queryFn: () => {
                        if (null == sb) throw Error("Expected a ChatGPT project id");
                        return (0, eQ.c)(sb)
                    },
                    queryKey: (0, r9.E)(sb ?? ""),
                    staleTime: e_.b.ONE_MINUTE
                }),
                sk = null != sb && (sM?.gizmo.share_recipient !== "private" || (sM?.gizmo.sharing?.subjects?.length ?? 0) > 0),
                sR = rW?.context_scopes?.includes("HEALTH") === !0 || sM?.gizmo.gizmo_snorlax_type === "potion",
                sO = (0, sG.a)(rW?.context_scopes, {
                    projectType: sM?.gizmo.gizmo_snorlax_type,
                    projectId: sb,
                    lockedProjectId: rM?.projectId
                }),
                sN = aM || sk || sR || sO;
            tC[60] !== sM?.gizmo.display.name ? (Z = sM?.gizmo.display.name.trim() || null, tC[60] = sM?.gizmo.display.name, tC[61] = Z) : Z = tC[61];
            let sL = Z,
                sz = sM?.gizmo.display.theme,
                sH = sM?.gizmo.display.emoji;
            tC[62] !== sM ? (et = "shared" === (0, re.b)(sM) ? (0, a.jsx)(t_.b, {
                icon: {
                    assets: {
                        16: oW,
                        20: oq.a
                    }
                }
            }) : void 0, tC[62] = sM, tC[63] = et) : et = tC[63], tC[64] !== sz || tC[65] !== sH || tC[66] !== et ? (en = (0, a.jsx)(tW.a, {
                className: "icon-leading",
                size: "leading",
                color: sz,
                icon: sH,
                sharedIcon: et
            }), tC[64] = sz, tC[65] = sH, tC[66] = et, tC[67] = en) : en = tC[67];
            let sW = en,
                sq = (0, m.x)(B.i, tT),
                sU = sq?.metadata ?? rW?.context_truncation_continuation,
                sK = an || t7 || null != nV || null == rU || rW?.owner?.user_id == null || null == sb || rW.owner.user_id === (rK ? rU.split("__")[0] : rU) ? null : (0, sg.d)(sb, rW.conversation_id, rW.owner.user_id),
                sV = (0, m.x)(an || nZ || r8 ? null : sY.c, tT),
                sZ = sV?.isReviewing === !0,
                s$ = null == sV ? aA : sV.conversation.mapping,
                sJ = null == sV ? aO : sV.conversation.current_node,
                sX = null == aA ? rW : null,
                s0 = (0, ei.k)();
            tC[68] !== s0 ? (ea = () => (0, ei.f)(s0, "2347981323").get("enabled", !1), tC[68] = s0, tC[69] = ea) : ea = tC[69];
            let s1 = ea,
                s2 = (0, m.z)(na.h),
                s3 = (0, m.z)(nn.a),
                s4 = (0, m.x)(nt.a, tT);
            tC[70] === Symbol.for("react.memo_cache_sentinel") ? (es = (0, n9.a)(), tC[70] = es) : es = tC[70];
            let s6 = es;
            tC[71] === Symbol.for("react.memo_cache_sentinel") ? (eo = new WeakMap, tC[71] = eo) : eo = tC[71];
            let s5 = eo;
            tC[72] !== st || tC[73] !== sn || tC[74] !== sU || tC[75] !== rQ || tC[76] !== sJ || tC[77] !== s$ || tC[78] !== r6 || tC[79] !== s1 || tC[80] !== sX || tC[81] !== nZ || tC[82] !== an || tC[83] !== ro || tC[84] !== s4 || tC[85] !== r4 || tC[86] !== aB || tC[87] !== a9 || tC[88] !== rn || tC[89] !== aX || tC[90] !== a0 || tC[91] !== rt || tC[92] !== sZ || tC[93] !== nJ.get || tC[94] !== sV?.isEntering || tC[95] !== aE || tC[96] !== az || tC[97] !== s3 || tC[98] !== s2 ? (el = () => s6({
                conversation: sX,
                contextContinuation: sU,
                clinicalSearchEnabled: sn,
                clinicalCitationsEnabled: st,
                enableCloudBrowserActivity: r6,
                conversationOrigin: rQ,
                enableVoiceImageLoadingFix: s1,
                voiceImageSessionId: s2,
                voiceImageGenerationSpawnIds: !s4 || an || nZ || sZ ? void 0 : s3,
                enableImageGenerationLoadingState: !an && !nZ && !sZ && "error" !== az,
                getRenderTelemetry: e => (0, oN.c)(nJ.get, e),
                isWorkConversation: r4,
                isStreaming: !an && !nZ && !sZ && ro,
                mode: "conversation",
                mcpResponseCache: s5,
                moderationDisclaimersByMessageId: aB,
                streamingOrders: aE,
                pendingSubmission: null == aX || an || sZ || sV?.isEntering ? null : {
                    attachments: a9,
                    commentAttachments: rn,
                    prompt: aX,
                    renderMarkdown: a0,
                    selectedTextAttachments: rt
                },
                threadCurrentNode: sJ,
                threadMapping: s$
            }), tC[72] = st, tC[73] = sn, tC[74] = sU, tC[75] = rQ, tC[76] = sJ, tC[77] = s$, tC[78] = r6, tC[79] = s1, tC[80] = sX, tC[81] = nZ, tC[82] = an, tC[83] = ro, tC[84] = s4, tC[85] = r4, tC[86] = aB, tC[87] = a9, tC[88] = rn, tC[89] = aX, tC[90] = a0, tC[91] = rt, tC[92] = sZ, tC[93] = nJ.get, tC[94] = sV?.isEntering, tC[95] = aE, tC[96] = az, tC[97] = s3, tC[98] = s2, tC[99] = el) : el = tC[99], sV?.isEntering, tC[100] !== el ? (ec = el(), tC[100] = el, tC[101] = ec) : ec = tC[101];
            let {
                isConversationEmpty: s8,
                renderedConversation: s9,
                renderedTurns: on,
                showPendingLoadingMessage: oa
            } = ec;
            tC[102] !== n$ || tC[103] !== r4 || tC[104] !== s9 || tC[105] !== nJ ? (ed = () => {
                if (!n$ && r4) return nJ.set(oH.b, s9), () => {
                    nJ.get(oH.b) === s9 && nJ.set(oH.b, null)
                }
            }, eh = [n$, r4, s9, nJ], tC[102] = n$, tC[103] = r4, tC[104] = s9, tC[105] = nJ, tC[106] = ed, tC[107] = eh) : (ed = tC[106], eh = tC[107]), (0, y.useEffect)(ed, eh);
            let or = (0, m.x)(nd.g, tT),
                os = oa && null == or,
                oo = !r4 && !an && !n$ && !nZ,
                oi = (0, m.x)(sn || n$ || an ? null : J.a, tT),
                ol = (oi?.length ?? 0) > 0,
                od = (0, m.x)(oo ? X.b : null, tT),
                ou = JSON.stringify([tT, nY]),
                oh = (0, m.x)(an || n$ ? null : oR, tT),
                [op, og] = (0, y.useState)(null),
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
                        m = i ? null : d.findLast(eZ)?.id ?? null,
                        p = !u && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != h && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== h),
                        f = new Set(u ? [] : e.observedSummaryRequestIds),
                        v = !u && !p && e.hasConsumedSummaryRequest,
                        y = !v && !u && null != e.conversation && (o || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != m && !f.has(m);
                    if (null != n && (u || null == e.conversation || !o))
                        for (let e of Object.values(n.mapping)) e?.message?.id != null && eZ(e.message) && f.add(e.message.id);
                    else null != m && f.add(m);
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
                        hasConsumedSummaryRequest: v || null != m,
                        isOpen: s ? !u && e.suppressAutoOpen && e.isOpen : r && (l && (u || !e.hasGoal) || y) || !u && (!p || l) && (!e.hasGoal || l) && e.isOpen,
                        shouldPreventAutoFocus: u || p || l && !e.hasGoal || y && !e.isOpen || e.shouldPreventAutoFocus
                    }
                }(op, {
                    completionAttemptId: od,
                    allowAutoOpen: !(0, tE.a)("(width < 768px)"),
                    suppressAutoOpen: (oh ?? !1) || r0,
                    conversation: oo && (rO || !rN) ? s9 : null,
                    isTurnActive: ro,
                    hasGoal: ol,
                    isPendingUserTurn: ra && null != aX && !ro,
                    visitKey: ou
                });
            of !== op && og(of);
            let ov = null == nQ && !oh && !sn && !n$ && !an && (rY || oo) && !nZ,
                ob = ov && s9?.mapping === aA && s9?.current_node === aO,
                ox = (0, m.x)(ob ? B.p : null, tT),
                oC = s9?.mapping,
                o_ = s9?.current_node;
            tC[108] !== oC || tC[109] !== o_ ? (em = h()(() => {
                let e = null == oC ? [] : (0, g.a)({
                    mapping: oC,
                    current_node: o_
                });
                return {
                    messages: e,
                    resources: (0, nk.e)(e)
                }
            }), tC[108] = oC, tC[109] = o_, tC[110] = em) : em = tC[110];
            let ow = em;
            tC[111] !== oo || tC[112] !== ra || tC[113] !== ov || tC[114] !== ro || tC[115] !== rj || tC[116] !== a9 || tC[117] !== ow || tC[118] !== on || tC[119] !== ox ? (ep = ov ? h()(() => (function(e) {
                var t;
                let n, a, {
                        automationReferences: r,
                        includePages: s = !1,
                        includeSources: o = !0,
                        messages: i,
                        pendingAttachments: l = [],
                        resources: c = (0, nk.e)(i),
                        turns: d,
                        isTurnActive: u = d.at(-1)?.turn.status === "in_progress"
                    } = e,
                    h = [...c.inputs],
                    m = o ? (0, rx.a)(i, d) : [],
                    p = new Map,
                    f = new Map,
                    v = (t = i, -1 !== (n = rm()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, rw.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
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
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, rb.j)(t.metadata) && y.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, rb.c)(t.metadata)
                            })
                        }
                    for (let n of rI(t.items)) {
                        if (s && "mcp-tool-call" === n.type) {
                            let e = (0, rv.b)(n);
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
                            for (let e of (0, n_.c)(n.content)) f.has(e.id) || f.set(e.id, {
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
                            p.set(e, {
                                image: n,
                                key: e,
                                kind: "generated-image"
                            })
                        }
                    }
                }
                let _ = (0, rg.b)(d.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return rI(t.items).filter(e => "mcp-tool-call" === e.type)
                })).at(-1);
                return a = null == _ ? [...c.outputs, ...f.values(), ...p.values()] : [{
                    ..._,
                    key: `site:${_.projectId}`,
                    kind: "site"
                }, ...c.outputs.filter(e => null == _.archivePath || ! function(e, t) {
                    if (null != e.sandboxPath) return e.sandboxPath === t;
                    let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != n && e.name.toLowerCase() === n
                }(e, _.archivePath)), ...f.values(), ...p.values()], {
                    automationIds: (0, ry.b)(i, r ?? void 0),
                    browserScreenshots: (0, rC.c)(i),
                    inputs: h,
                    sourceTurns: y,
                    outputs: a,
                    progressSteps: C,
                    isPlanSummaryUpdating: u && i.slice(x + 1).some(e => "assistant" === e.author.role && ry.a.test(e.recipient ?? "") || "tool" === e.author.role && ry.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${d.at(-1)?.id??""}:${u}`,
                    sources: o ? [...Array.from(new Map(i.filter(e => "user" === e.author.role).flatMap(e => (0, rf.a)((0, g.e)(e))).map(e => [e.projectId, e])).values(), e => ({
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
                    subagents: (0, r_.a)(i, {
                        isTurnLive: d.at(-1)?.turn.status === "in_progress"
                    })?.subagents ?? []
                }
            })({
                automationReferences: ox,
                includePages: rj,
                includeSources: !oo,
                isTurnActive: ro || ra,
                ...ow(),
                pendingAttachments: ra ? a9 : [],
                turns: on
            })) : null, eg = oo ? ep?.() : null, tC[111] = oo, tC[112] = ra, tC[113] = ov, tC[114] = ro, tC[115] = rj, tC[116] = a9, tC[117] = ow, tC[118] = on, tC[119] = ox, tC[120] = ep, tC[121] = eg) : (ep = tC[120], eg = tC[121]);
            let oT = eg,
                oS = ol || null != oT && (oT.outputs.length > 0 || oT.progressSteps.length > 0 || oT.automationIds.length > 0 || oT.subagents.length > 0 || !aM && oT.browserScreenshots.length > 0),
                oj = ov && (!oo || oS),
                oE = oj && null == r$,
                oA = JSON.stringify([ou, null != r$]),
                oP = oo ? of.isOpen : void 0,
                oM = oj && !r$?.isFullWidth;
            tC[122] !== r7 || tC[123] !== oA || tC[124] !== oP || tC[125] !== oM ? (ef = {
                contentShiftResetKey: oA,
                controlledIsOpen: oP,
                isEnabled: oM,
                floatingPanelWidth: r7
            }, tC[122] = r7, tC[123] = oA, tC[124] = oP, tC[125] = oM, tC[126] = ef) : ef = tC[126];
            let ok = (0, t6.a)(ef),
                oO = aT ?? tT,
                oG = rY && null == aK,
                oL = aL ?? rs,
                oB = rR.isLoading && !rP,
                oz = rR.isError && !rO;
            tC[127] !== rR.error || tC[128] !== n$ ? (ev = n$ || (0, nr.e)(rR.error) || !(rR.error instanceof nr.a && [401, 403, 404].includes(rR.error.status)), tC[127] = rR.error, tC[128] = n$, tC[129] = ev) : ev = tC[129];
            let oF = ev;
            tC[130] !== rR.error || tC[131] !== tT || tC[132] !== oz || tC[133] !== n$ || tC[134] !== nJ || tC[135] !== nL ? (ey = () => {
                oz && !n$ && tD.a.loadFailed(nJ, tT, nL, rR.error)
            }, eb = [rR.error, tT, oz, n$, nJ, nL], tC[130] = rR.error, tC[131] = tT, tC[132] = oz, tC[133] = n$, tC[134] = nJ, tC[135] = nL, tC[136] = ey, tC[137] = eb) : (ey = tC[136], eb = tC[137]), (0, y.useEffect)(ey, eb), tC[138] !== tT || tC[139] !== an || tC[140] !== aT ? (ex = null, an || (ex = aT ?? ((0, eN.e)(tT) ? null : tT)), tC[138] = tT, tC[139] = an, tC[140] = aT, tC[141] = ex) : ex = tC[141], tC[142] !== af || tC[143] !== rW || tC[144] !== rQ || tC[145] !== aC || tC[146] !== t7 || tC[147] !== r4 || tC[148] !== rZ || tC[149] !== a_ || tC[150] !== ex || tC[151] !== nH || tC[152] !== nJ || tC[153] !== nY ? (eC = (e, t) => {
                let n = void 0 !== t && t;
                if (null == ex || null != af || rZ) return;
                let a = ax.current?.signal;
                null == a || a.aborted || (ah({
                    messageId: e,
                    activation: nY
                }), (0, B.h)(nJ, {
                    conversationId: ex,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, ni.a)(nJ, "opened"), a_(null == nH ? (0, oy.c)(t, {
                        isTemporaryChat: t7
                    }) : (0, C.C)(nH, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, ni.a)(nJ, "failed"), ah(null), nJ.get(er.f).danger(aC.formatMessage({
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
                                surface: (0, aI.b)(null == rQ && null == rW ? null : r4),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, tC[142] = af, tC[143] = rW, tC[144] = rQ, tC[145] = aC, tC[146] = t7, tC[147] = r4, tC[148] = rZ, tC[149] = a_, tC[150] = ex, tC[151] = nH, tC[152] = nJ, tC[153] = nY, tC[154] = eC) : eC = tC[154];
            let oK = (0, ne.a)(eC);
            tC[155] !== rW || tC[156] !== tT || tC[157] !== rQ || tC[158] !== aC || tC[159] !== se || tC[160] !== t7 || tC[161] !== r4 || tC[162] !== nJ || tC[163] !== aT ? (ew = async (e, t, n, a) => {
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
                        if (e.get(e9.i, n)) throw new aJ.a("edit_message_busy", "The chat is busy.");
                        let l = e.get(B.x, n);
                        if ("tpp" === l) throw new aJ.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                        if (!e.get(a3, n)) throw new aJ.a("edit_message_busy", "The chat is busy.");
                        let c = e.get(a$.b, {
                            conversationId: n,
                            messageId: r
                        });
                        if (null == c) throw new aJ.a("edit_message_target_unavailable", "The user message could not be edited.");
                        let {
                            selectedModel: d
                        } = c, u = s.trim(), h = (0, a$.c)(c.message, e.get, i), m = (0, a2.c)({
                            message: c.message,
                            prompt: u,
                            renderFormat: o,
                            systemHints: h,
                            inlineSystemHints: i
                        }), p = (0, f.f)(m.message.metadata), g = m.message.content, v = "multimodal_text" === g.content_type && g.parts.some(e => "string" != typeof e);
                        if (0 === u.length && 0 === p.length && !v) throw new aJ.a("edit_message_empty", "The edited message cannot be empty.");
                        if (e.get(t0.d, "3574573347")) {
                            let t = e.get(a$.a, n);
                            t?.messageId === r && t.prompt === s && aR()((0, a$.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(a$.a, n, {
                                messageId: r,
                                prompt: s,
                                isTemporaryChat: a,
                                inlineSystemHints: i
                            }), (0, n8.f)(e, n, {
                                isTemporaryChat: a
                            }))
                        }
                        let y = a4(e.get, n),
                            b = y.request.current,
                            x = () => a4(e.get, n).request.current === b && aR()(e.get(a$.b, {
                                conversationId: n,
                                messageId: r
                            }), c) && !(0, B.zb)(e.get(B._, n));
                        e.set(e9.i, n, !0);
                        try {
                            if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(a1.a, n) && (await b.stop(), await b.closed), !x()) throw new aJ.a("edit_message_target_unavailable", "The edited message or active response changed.");
                            await (0, a2.submitChatGPTCompletion)(e, {
                                isSubmissionCurrent: x,
                                isRequestCurrent: () => e.get(B.B, n) === m.message.id,
                                attachments: p,
                                conversationId: n,
                                isTemporaryChat: a,
                                model: d.slug,
                                parentMessageId: c.parentMessageId,
                                prompt: u,
                                systemHints: h,
                                thinkingEffort: d.thinkingEffort,
                                userCompletionMessages: m
                            })
                        } finally {
                            e.set(e9.i, n, !1)
                        }
                    }(nJ, {
                        conversationId: tT,
                        isTemporaryChat: t7,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, aI.c)(t);
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
                            conversationId: aT ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, aI.b)(null == rQ && null == rW ? null : r4),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, tC[155] = rW, tC[156] = tT, tC[157] = rQ, tC[158] = aC, tC[159] = se, tC[160] = t7, tC[161] = r4, tC[162] = nJ, tC[163] = aT, tC[164] = ew) : ew = tC[164];
            let oV = (0, ne.a)(ew);
            tC[165] !== ao || tC[166] !== rW || tC[167] !== tT || tC[168] !== rQ || tC[169] !== aC || tC[170] !== se || tC[171] !== t7 || tC[172] !== r4 || tC[173] !== rZ || tC[174] !== a_ || tC[175] !== nK || tC[176] !== nJ || tC[177] !== aT ? (eI = async (e, t) => {
                if (!se && !rZ) try {
                    let n = nJ.get(aS.d, tT);
                    if (n?.startsNewWorkConversation || null == nJ.get(B.j, tT) || (0, nu.h)(nJ.get(B.T, tT)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, g.e)(n.prompt),
                            r = (0, eV.i)(n.prompt.metadata, a, (0, f.e)(n.prompt.metadata), (0, v.w)(a)),
                            s = (0, e$.a)(n.prompt, a, r),
                            o = nJ.get(e9.s, ao),
                            i = "markdown" === s.renderFormat ? s.message : a,
                            l = o.length > 0 ? o : i,
                            c = o.length > 0 ? void 0 : s.renderFormat ?? "plain";
                        if (null != nK) return void await nK(l, c);
                        if (null == nJ.get(B.j, tT) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, tq.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${tT}`;
                            (0, th.E)(t, (t, n) => n ? t : e) || (0, e9.T)(nJ, tT, e), (0, th.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, g.i)((0, g.r)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, v.w)(a);
                            (0, tm.m)(nJ, "work"), await a_("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: o.length > 0 ? o : t,
                                    prefillPromptFormat: o.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (r4 && !t7 && (0, td.fb)(nJ, (0, tI.b)({
                                entrypoint: "home"
                            }))) return void await a_("/");
                        let d = (0, g.k)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, a7.g)(nJ, d);
                        (0, e9.U)(nJ, u, t.model);
                        let h = nJ.get(B.R, tT);
                        (0, tm.m)(nJ, r4 ? "work" : "chat"), await a_({
                            pathname: "/",
                            search: (0, oy.e)("", t7)
                        }, {
                            state: {
                                initialChatGptConversationId: u,
                                project: null,
                                chatGptProjectId: (0, tt.a)(h) ? h : null,
                                chatGptCustomGptId: (0, tt.a)(h) ? null : h,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: r4
                            }
                        });
                        return
                    }
                    await (0, aS.g)(nJ, {
                        conversationId: tT,
                        isTemporaryChat: t7,
                        messageId: e,
                        retry: r4 && "error_retry" === t.source && null == t.model.thinkingEffort ? {
                            ...t,
                            model: nJ.get(e9.t, tT)
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
                            conversationId: aT ?? void 0,
                            userFacingError: {
                                surface: (0, aI.b)(null == rQ && null == rW ? null : r4),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, tC[165] = ao, tC[166] = rW, tC[167] = tT, tC[168] = rQ, tC[169] = aC, tC[170] = se, tC[171] = t7, tC[172] = r4, tC[173] = rZ, tC[174] = a_, tC[175] = nK, tC[176] = nJ, tC[177] = aT, tC[178] = eI) : eI = tC[178];
            let oQ = (0, ne.a)(eI);
            tC[179] !== rW || tC[180] !== tT || tC[181] !== aW || tC[182] !== aC || tC[183] !== av || tC[184] !== t7 || tC[185] !== a_ || tC[186] !== aw || tC[187] !== sb || tC[188] !== nJ || tC[189] !== aT || tC[190] !== si || tC[191] !== nY ? (ej = () => {
                if (av || null == aT) return;
                let e = nJ.get(N.s);
                if (!e && !nJ.get(N.q) || !e && null == rW && null == si) return;
                let t = ax.current?.signal;
                null == t || t.aborted || (ap(nY), (e ? (0, nB.f)(nJ, {
                    chatGptThreadId: tT,
                    conversationTitle: aW
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, j.a)(nJ, e);
                    if ("created" === e.status) return null == n || t.aborted || nJ.get(er.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, j.a)(nJ, e)
                }) : (0, I.a)({
                    scope: nJ,
                    projectId: sb ?? void 0,
                    prompt: `Continuing from ${(0,tp.f)({conversationId:aT,title:aW?.trim()||"ChatGPT thread"})}`
                }).then(o0)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? aw(n) : a_((0, oy.c)(n, {
                            isTemporaryChat: t7
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (ap(null), nJ.get(er.f).danger(aC.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot hand off a conversation to a task"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, tC[179] = rW, tC[180] = tT, tC[181] = aW, tC[182] = aC, tC[183] = av, tC[184] = t7, tC[185] = a_, tC[186] = aw, tC[187] = sb, tC[188] = nJ, tC[189] = aT, tC[190] = si, tC[191] = nY, tC[192] = ej) : ej = tC[192];
            let o2 = ej;
            tC[193] !== tT || tC[194] !== a_ || tC[195] !== nJ || tC[196] !== as || tC[197] !== nL || tC[198] !== n0 ? (eE = () => {
                if (null != n0) {
                    if ((0, eN.e)(tT)) {
                        let e = (0, eS.a)(nJ, n0, tT);
                        null != e && a_((0, oy.c)(e))
                    }
                    return
                }
                let e = nJ.query.getData(n7.n, nL);
                null != e && null != nL && null != as && ((0, B.mb)(nJ, {
                    conversation: e,
                    conversationId: as,
                    sharedConversationId: nL
                }), a_((0, oy.c)(as)))
            }, tC[193] = tT, tC[194] = a_, tC[195] = nJ, tC[196] = as, tC[197] = nL, tC[198] = n0, tC[199] = eE) : eE = tC[199];
            let o3 = (0, ne.a)(eE);
            tC[200] !== nQ ? (eA = nQ?.mcpAppContext == null ? null : {
                hostId: tZ.a,
                server: "codex_apps",
                connectorId: nQ.mcpAppContext.id
            }, tC[200] = nQ, tC[201] = eA) : eA = tC[201];
            let o4 = (0, m.x)(tz.b, eA),
                o6 = nQ?.fullscreenContent != null ? "content" : "workspace",
                o5 = (0, $.a)(n$ ? "embedded" : o6),
                o8 = !o4 && (rO || !rR.isError) && !nZ && !r8 && (null == n0 || nX?.authMethod === "chatgpt" || n1) && (!an || null != rW),
                o7 = r8 || so || ss || rZ,
                o9 = o7 || sZ || sV?.needsEntry === !0;
            if (sZ) {
                let e;
                tC[202] !== aC ? (e = aC.formatMessage(sY.d.readOnlyPlaceholder), tC[202] = aC, tC[203] = e) : e = tC[203], eP = e
            } else !o7 && sV?.needsEntry && (eP = !1);
            let ie = o8 && !o7 && !an && !rN && !se && !ro && !ra && !rr && !sw,
                it = !o8 || an || o9 || rN ? null : ac;
            if (tC[204] !== sw || tC[205] !== af || tC[206] !== st || tC[207] !== sn || tC[208] !== rW?.current_node || tC[209] !== tT || tC[210] !== sd || tC[211] !== r6 || tC[212] !== oL || tC[213] !== oK || tC[214] !== oV || tC[215] !== oQ || tC[216] !== tN || tC[217] !== nZ || tC[218] !== o9 || tC[219] !== rN || tC[220] !== sN || tC[221] !== r8 || tC[222] !== an || tC[223] !== ra || tC[224] !== t7 || tC[225] !== rY || tC[226] !== ro || tC[227] !== r4 || tC[228] !== ss || tC[229] !== rZ || tC[230] !== ar || tC[231] !== a9 || tC[232] !== ex || tC[233] !== s9 || tC[234] !== on || tC[235] !== sZ || tC[236] !== aF || tC[237] !== nJ.get || tC[238] !== aH || tC[239] !== rz?.current_node || tC[240] !== nV || tC[241] !== o8 || tC[242] !== os || tC[243] !== aE || tC[244] !== ri) {
                let e = (0, n9.c)({
                    paragen: ar,
                    hideInitialUserMessage: tN,
                    browserConversationId: void 0,
                    conversationId: tT,
                    enableCloudBrowserActivity: r6,
                    errorMessage: oL,
                    branchingMessageId: af,
                    isReadOnly: nZ || r8 || an || null != nV,
                    isTemporaryChat: t7,
                    isWorkConversation: rY,
                    onRegenerateResponse: sw || an || null != nV || nZ || r8 || ss || rZ || ro || ra ? void 0 : oQ,
                    onEditUserMessage: sw || null == ex || rY || nZ || r8 || ss || !ri || ra ? void 0 : oV,
                    onFork: null == ex || t7 || ss || rZ || nZ || r8 ? void 0 : oK,
                    pendingSubmissionAttachments: a9,
                    shareEnabled: null == sd && !t7 && !an && !nZ && !r8 && !sN,
                    readAloudEnabled: !an && !r8,
                    feedbackEnabled: !an && !r8 && null == nV,
                    renderedTurns: sZ || null == ar || null == s9 ? on : (0, n5.a)({
                        ...s9,
                        current_node: ar.promptMessageId
                    }, {
                        clinicalSearchEnabled: sn,
                        clinicalCitationsEnabled: st,
                        enableCloudBrowserActivity: r6,
                        streamingOrders: aE,
                        isWorkConversation: r4,
                        getRenderTelemetry: e => (0, oN.c)(nJ.get, e)
                    }),
                    safetyReview: aF,
                    sharedConversationLastMessageId: rz?.current_node ?? aH ?? (an ? rW?.current_node : null),
                    showPendingLoadingMessage: os,
                    showRequestUserInputStatus: o8 && !o9 && !rN
                });
                eM = sZ ? (0, sY.a)(e) : e, tC[204] = sw, tC[205] = af, tC[206] = st, tC[207] = sn, tC[208] = rW?.current_node, tC[209] = tT, tC[210] = sd, tC[211] = r6, tC[212] = oL, tC[213] = oK, tC[214] = oV, tC[215] = oQ, tC[216] = tN, tC[217] = nZ, tC[218] = o9, tC[219] = rN, tC[220] = sN, tC[221] = r8, tC[222] = an, tC[223] = ra, tC[224] = t7, tC[225] = rY, tC[226] = ro, tC[227] = r4, tC[228] = ss, tC[229] = rZ, tC[230] = ar, tC[231] = a9, tC[232] = ex, tC[233] = s9, tC[234] = on, tC[235] = sZ, tC[236] = aF, tC[237] = nJ.get, tC[238] = aH, tC[239] = rz?.current_node, tC[240] = nV, tC[241] = o8, tC[242] = os, tC[243] = aE, tC[244] = ri, tC[245] = eM
            } else eM = tC[245];
            let ia = eM;
            tC[246] !== aC ? (ek = aC.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation",
                description: "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop"
            }), tC[246] = aC, tC[247] = ek) : ek = tC[247];
            let ir = ek;
            tC[248] !== nZ || tC[249] !== an || tC[250] !== rq || tC[251] !== nJ || tC[252] !== aT ? (eR = an || nZ || null == aT ? void 0 : e => {
                (0, r9.R)({
                    scope: nJ,
                    conversationId: aT,
                    previousTitle: rq,
                    title: e
                })
            }, tC[248] = nZ, tC[249] = an, tC[250] = rq, tC[251] = nJ, tC[252] = aT, tC[253] = eR) : eR = tC[253];
            let is = aq || null != rW ? rq ?? "" : null;
            tC[254] !== aW || tC[255] !== eR || tC[256] !== is ? (eO = (0, a.jsx)(t4.a, {
                className: "max-w-[320px]",
                variant: "flush-start",
                onRename: eR,
                title: aW,
                titleValue: is
            }), tC[254] = aW, tC[255] = eR, tC[256] = is, tC[257] = eO) : eO = tC[257];
            let io = eO,
                ii = r4 || r3 ? io : null;
            if (null != sd) {
                let e;
                tC[258] !== tT || tC[259] !== sd ? (e = (0, a.jsx)(a8.ChatGptGizmoHeader, {
                    conversationId: tT,
                    gizmoId: sd
                }), tC[258] = tT, tC[259] = sd, tC[260] = e) : e = tC[260], ii = e
            } else null != rW || null != si || rP || (ii = null);
            tC[261] !== nZ || tC[262] !== an || tC[263] !== rY ? (eG = !rY || an || nZ ? null : (0, a.jsx)(tS.a, {
                hostId: tZ.a
            }), tC[261] = nZ, tC[262] = an, tC[263] = rY, tC[264] = eG) : eG = tC[264];
            let il = eG;
            tC[265] !== r4 || tC[266] !== sM || tC[267] !== sb ? (eL = null == sb || r4 ? null : (0, a.jsx)(sf, {
                allowsThreadContentOverlap: !0,
                project: sM
            }), tC[265] = r4, tC[266] = sM, tC[267] = sb, tC[268] = eL) : eL = tC[268];
            let ic = eL;
            tC[269] !== ic || tC[270] !== ii || tC[271] !== tT || tC[272] !== nq || tC[273] !== nZ || tC[274] !== oG || tC[275] !== an || tC[276] !== t7 || tC[277] !== il || tC[278] !== sW || tC[279] !== sb || tC[280] !== sL || tC[281] !== sE ? (eB = sE ? (0, a.jsx)(sv.a, {
                isTemporaryChat: t7,
                isCloudTask: oG && !an && !nZ,
                breadcrumbHeader: nq ?? ic,
                project: null == sb ? void 0 : {
                    icon: sW,
                    name: sL
                },
                start: nq ?? (an ? ii : (0, a.jsx)(nl.BusinessAgentConversationHeader, {
                    conversationId: tT,
                    fallback: ii
                })),
                startActions: il
            }) : null, tC[269] = ic, tC[270] = ii, tC[271] = tT, tC[272] = nq, tC[273] = nZ, tC[274] = oG, tC[275] = an, tC[276] = t7, tC[277] = il, tC[278] = sW, tC[279] = sb, tC[280] = sL, tC[281] = sE, tC[282] = eB) : eB = tC[282];
            let id = eB,
                iu = !an && null == nV && !nZ && !t7 && !aM,
                ih = (0, m.x)(iu ? rF.a : null, tT);
            tC[283] !== tT || tC[284] !== ih ? (ez = null != ih ? (0, a.jsx)(sB, {
                conversationId: tT
            }) : null, tC[283] = tT, tC[284] = ih, tC[285] = ez) : ez = tC[285];
            let im = ez;
            tC[286] !== ie || tC[287] !== tT || tC[288] !== se || tC[289] !== sV ? (eF = null != sV ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: se,
                children: (0, a.jsx)(sS, {
                    conversationId: tT,
                    placement: "progress",
                    canStartSection: ie
                })
            }) : null, tC[286] = ie, tC[287] = tT, tC[288] = se, tC[289] = sV, tC[290] = eF) : eF = tC[290];
            let ip = eF;
            if (tC[291] !== rR || tC[292] !== nX?.authMethod || tC[293] !== sw || tC[294] !== nU || tC[295] !== sa || tC[296] !== sy || tC[297] !== oF || tC[298] !== ie || tC[299] !== ao || tC[300] !== s_ || tC[301] !== nW || tC[302] !== rW || tC[303] !== id || tC[304] !== tT || tC[305] !== ir || tC[306] !== rQ || tC[307] !== aW || tC[308] !== im || tC[309] !== of || tC[310] !== tR || tC[311] !== oL || tC[312] !== r$ || tC[313] !== r7 || tC[314] !== ep || tC[315] !== sl || tC[316] !== rB || tC[317] !== o2 || tC[318] !== o3 || tC[319] !== oz || tC[320] !== rP || tC[321] !== tk || tC[322] !== ae || tC[323] !== nZ || tC[324] !== oo || tC[325] !== o9 || tC[326] !== s8 || tC[327] !== rN || tC[328] !== oB || tC[329] !== ai || tC[330] !== av || tC[331] !== sR || tC[332] !== n$ || tC[333] !== sO || tC[334] !== o4 || tC[335] !== rE || tC[336] !== se || tC[337] !== r8 || tC[338] !== r2 || !1 !== tC[339] || tC[340] !== an || tC[341] !== so || tC[342] !== rr || tC[343] !== ra || tC[344] !== t7 || tC[345] !== rY || tC[346] !== ro || tC[347] !== r4 || tC[348] !== sr || tC[349] !== rT || tC[350] !== ss || tC[351] !== rZ || tC[352] !== rV || tC[353] !== rJ.pathname || tC[354] !== rM || tC[355] !== rX?.sidebarAutomationId || tC[356] !== t3 || tC[357] !== r0 || tC[358] !== sM || tC[359] !== sW || tC[360] !== sb || tC[361] !== sL || tC[362] !== eP || tC[363] !== sm || tC[364] !== s9 || tC[365] !== on || tC[366] !== nF || tC[367] !== sZ || tC[368] !== o5 || tC[369] !== rq || tC[370] !== nJ || tC[371] !== tQ || tC[372] !== ak || tC[373] !== sV || tC[374] !== ip || tC[375] !== aT || tC[376] !== og || tC[377] !== nL || tC[378] !== n0 || tC[379] !== rD || tC[380] !== nV || tC[381] !== sK || tC[382] !== aM || tC[383] !== iu || tC[384] !== oE || tC[385] !== o8 || tC[386] !== os || tC[387] !== it || tC[388] !== oO || tC[389] !== ok || tC[390] !== aO || tC[391] !== tK || tC[392] !== ia || tC[393] !== nQ) {
                tc = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, n, r, s, o, i, l, c, d, u, h, m, f = on.flatMap(oX).flatMap(oJ),
                        v = f.flatMap(o$);
                    if (!an && (rR.error instanceof nr.a && 423 === rR.error.status || sO && null == rM)) {
                        let e;
                        tC[419] !== rR || tC[420] !== tT || tC[421] !== nJ ? (e = (0, a.jsx)(sF.a, {
                            onUnlocked: () => {
                                (0, sD.g)(nJ.get(sD.f)?.projectId, [tT]), rR.refetch()
                            }
                        }), tC[419] = rR, tC[420] = tT, tC[421] = nJ, tC[422] = e) : e = tC[422], tc = e;
                        break e
                    }
                    if (null != sK) {
                        let e;
                        tC[423] !== sK ? (e = (0, a.jsx)(C.l, {
                            replace: !0,
                            to: sK
                        }), tC[423] = sK, tC[424] = e) : e = tC[424], tc = e;
                        break e
                    }
                    eW = sQ,
                    tC[425] !== rW || tC[426] !== rP || tC[427] !== nZ || tC[428] !== oB || tC[429] !== n$ || tC[430] !== r8 || tC[431] !== an || tC[432] !== r4 ? (e5 = r4 || an || n$ || r8 || nZ || oB || null == rW && !rP ? null : (0, a.jsx)(Y.a, {}), tC[425] = rW, tC[426] = rP, tC[427] = nZ, tC[428] = oB, tC[429] = n$, tC[430] = r8, tC[431] = an, tC[432] = r4, tC[433] = e5) : e5 = tC[433],
                    tC[434] !== rR.fetchStatus || tC[435] !== rW || tC[436] !== oz || tC[437] !== rP || tC[438] !== oB || tC[439] !== n$ ? (e8 = !1, tC[434] = rR.fetchStatus, tC[435] = rW, tC[436] = oz, tC[437] = rP, tC[438] = oB, tC[439] = n$, tC[440] = e8) : e8 = tC[440],
                    tC[441] !== rR.data || tC[442] !== rR.fetchStatus || tC[443] !== rW || tC[444] !== tT || tC[445] !== oz || tC[446] !== rP || tC[447] !== s8 || tC[448] !== oB || !1 !== tC[449] || tC[450] !== on.length ? (e7 = null, tC[441] = rR.data, tC[442] = rR.fetchStatus, tC[443] = rW, tC[444] = tT, tC[445] = oz, tC[446] = rP, tC[447] = s8, tC[448] = oB, tC[449] = !1, tC[450] = on.length, tC[451] = e7) : e7 = tC[451],
                    te = !an && !r8 && (0, tO.c)() ? (0, a.jsx)(tB.b, {
                        callIds: v,
                        hostId: tZ.a,
                        conversationId: (0, p.Oe)(`chatgpt:${tT}`)
                    }) : null,
                    tC[452] !== aW || tC[453] !== n$ || tC[454] !== n0 || tC[455] !== nQ?.documentTitle ? (ta = n$ ? null : (0, a.jsx)(tw.a, {
                        title: null == n0 ? nQ?.documentTitle ?? aW : null
                    }), tC[452] = aW, tC[453] = n$, tC[454] = n0, tC[455] = nQ?.documentTitle, tC[456] = ta) : ta = tC[456],
                    tC[457] !== tT || tC[458] !== n$ || tC[459] !== se || tC[460] !== an || tC[461] !== t7 || tC[462] !== r4 || tC[463] !== ia ? (tr = n$ || r4 ? null : (0, a.jsx)(rG.a, {
                        conversationId: tT,
                        canCopy: !se,
                        paragenEnabled: !an,
                        turns: ia,
                        loadHistory: !t7 && !an
                    }), tC[457] = tT, tC[458] = n$, tC[459] = se, tC[460] = an, tC[461] = t7, tC[462] = r4, tC[463] = ia, tC[464] = tr) : tr = tC[464];
                    let b = null != rW || rP;tC[465] !== oz || tC[466] !== r4 || tC[467] !== b ? (ts = (0, a.jsx)(ns.a, {
                        isWorkConversation: r4,
                        hasConversationContent: b,
                        hasLoadError: oz
                    }), tC[465] = oz, tC[466] = r4, tC[467] = b, tC[468] = ts) : ts = tC[468],
                    tC[469] !== rW || tC[470] !== tT || tC[471] !== oz || tC[472] !== rP || tC[473] !== oB || tC[474] !== n$ || tC[475] !== rJ.pathname || tC[476] !== nJ || tC[477] !== nL ? (to = n$ || oB || oz || null == rW && !rP ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s7, {
                            sharedConversationId: nL
                        }), (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(tH.a, {
                                onCommit: () => tD.a.contentCommitted(nJ, tT, nL, rJ.pathname),
                                onPaint: () => tD.a.contentVisible(nJ, tT, nL)
                            }, nL ?? tT)
                        })]
                    }), tC[469] = rW, tC[470] = tT, tC[471] = oz, tC[472] = rP, tC[473] = oB, tC[474] = n$, tC[475] = rJ.pathname, tC[476] = nJ, tC[477] = nL, tC[478] = to) : to = tC[478],
                    tC[479] !== nX?.authMethod || tC[480] !== sy || tC[481] !== s_ || tC[482] !== rW || tC[483] !== id || tC[484] !== tT || tC[485] !== rQ || tC[486] !== aW || tC[487] !== im || tC[488] !== of || tC[489] !== ep || tC[490] !== sl || tC[491] !== o2 || tC[492] !== nZ || tC[493] !== oo || tC[494] !== av || tC[495] !== sR || tC[496] !== n$ || tC[497] !== sO || tC[498] !== r8 || tC[499] !== an || tC[500] !== t7 || tC[501] !== rY || tC[502] !== ro || tC[503] !== r4 || tC[504] !== rX?.sidebarAutomationId || tC[505] !== r0 || tC[506] !== sW || tC[507] !== sb || tC[508] !== sL || tC[509] !== sm || tC[510] !== s9 || tC[511] !== on.length || tC[512] !== nJ || tC[513] !== ip || tC[514] !== aT || tC[515] !== og || tC[516] !== nV || tC[517] !== aM || tC[518] !== iu || tC[519] !== oE || tC[520] !== it || tC[521] !== oO || tC[522] !== aO || tC[523] !== nQ ? (ti = n$ || null != nQ ? null : (0, a.jsxs)(rL.a, {
                        chatIcon: null == sb ? void 0 : sW,
                        conversationId: rY && !an ? tT : null,
                        header: null != im || null != ip ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(sC, {
                                    header: id,
                                    courseShortcut: im,
                                    progress: ip
                                })
                            }), null]
                        }) : id,
                        title: aW,
                        isArchivedPreview: nZ,
                        children: [null, null, nX?.authMethod === "chatgpt" ? (0, a.jsx)(tj.r, {
                            productExperience: r4 ? "work" : "chat"
                        }) : null, an ? (0, a.jsx)(ot.a, {
                            children: null == sm ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(oc, {
                                    data: sm
                                })
                            })
                        }) : null, iu ? (0, a.jsx)(rH, {
                            conversationId: tT,
                            scheduledAutomationId: r0 ? rX?.sidebarAutomationId : void 0
                        }, tT) : null, oE ? (0, a.jsx)(ru, {
                            allowsThreadContentOverlap: !r4,
                            composerActions: it,
                            conversationId: oO,
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
                            readData: !oo || of.isOpen ? ep : null,
                            showSources: !oo,
                            shouldBlockExternalEgress: aM
                        }) : null, t7 && !an && !nZ && null == sl && null == s_ && null == sb && !sR && null != s9 && (0, g.a)(s9).some(oZ) ? (0, a.jsx)(E.a.HeaderAction, {
                            actionId: "chatgpt-conversation-save",
                            align: "end",
                            order: 100,
                            children: (0, a.jsx)(oI, {
                                conversationId: tT
                            })
                        }) : null, t7 || nZ || r8 ? null : (0, a.jsx)(sv.b, {
                            allowsThreadContentOverlap: !r4,
                            menu: an || null == aT ? (0, a.jsx)(su, {}) : (0, a.jsx)(sc, {
                                conversationId: tT,
                                title: aW,
                                isHandoffPending: av,
                                isArchived: rW?.is_archived === !0,
                                isChatConversation: null != rW && !r4,
                                onHandoff: sy ? o2 : void 0,
                                onOpenMessage: async e => {
                                    ax.current?.signal.aborted === !1 && nJ.get(S.b)?.pathname === nJ.value.pathname && await al.current?.scrollToMessage(e)
                                },
                                projectId: sb,
                                projectName: sL,
                                serverConversationId: aT,
                                conversationOrigin: rQ
                            }),
                            children: an || sO ? null : (0, a.jsx)(ay, {
                                conversationId: tT,
                                projectId: sb,
                                sharedProjectConversation: nV,
                                isReady: (null != aT || null != nV) && on.length > 0 && (aO ?? rW?.current_node) != null,
                                isRestricted: aM || sR,
                                isStreaming: ro
                            })
                        })]
                    }), tC[479] = nX?.authMethod, tC[480] = sy, tC[481] = s_, tC[482] = rW, tC[483] = id, tC[484] = tT, tC[485] = rQ, tC[486] = aW, tC[487] = im, tC[488] = of, tC[489] = ep, tC[490] = sl, tC[491] = o2, tC[492] = nZ, tC[493] = oo, tC[494] = av, tC[495] = sR, tC[496] = n$, tC[497] = sO, tC[498] = r8, tC[499] = an, tC[500] = t7, tC[501] = rY, tC[502] = ro, tC[503] = r4, tC[504] = rX?.sidebarAutomationId, tC[505] = r0, tC[506] = sW, tC[507] = sb, tC[508] = sL, tC[509] = sm, tC[510] = s9, tC[511] = on.length, tC[512] = nJ, tC[513] = ip, tC[514] = aT, tC[515] = og, tC[516] = nV, tC[517] = aM, tC[518] = iu, tC[519] = oE, tC[520] = it, tC[521] = oO, tC[522] = aO, tC[523] = nQ, tC[524] = ti) : ti = tC[524],
                    tl = null,
                    eH = a5.a,
                    e0 = ao,
                    e1 = rQ,
                    e2 = !o8 || o5.isHidden || o9 || sw || se || rN || nZ || r8 || so || ss || rZ || rr || ra,
                    e3 = t7,
                    e4 = sb,
                    e6 = null != s_,
                    eD = t2.c,
                    eq = r7,
                    tC[525] !== n$ || tC[526] !== r2 || tC[527] !== r4 || tC[528] !== ip || tC[529] !== nQ ? (eU = n$ || null != nQ ? ip : r2 && (0, t5.a)() && !r4 && (0, a.jsx)("div", {
                        className: "h-px",
                        "aria-hidden": !0
                    }), tC[525] = n$, tC[526] = r2, tC[527] = r4, tC[528] = ip, tC[529] = nQ, tC[530] = eU) : eU = tC[530],
                    eK = nU;
                    let x = null == sV ? "flex h-full min-h-0 flex-col" : "h-full",
                        _ = rq ?? aW,
                        w = !se,
                        I = !ai && !n$ && !an && !o4 && !o5.isHidden,
                        T = aM || sa,
                        j = r$?.isFullWidth === !0,
                        A = null == r$ ? ok.contentShift : void 0,
                        P = sV?.selectedIndex;tC[531] !== ie || tC[532] !== tT || tC[533] !== sV ? (e = null != sV ? (0, a.jsx)(sS, {
                        conversationId: tT,
                        placement: "composer",
                        canStartSection: ie
                    }) : void 0, tC[531] = ie, tC[532] = tT, tC[533] = sV, tC[534] = e) : e = tC[534],
                    tC[535] !== tT || tC[536] !== sV ? (t = null != sV ? (0, a.jsx)(sT, {
                        conversationId: tT
                    }) : void 0, tC[535] = tT, tC[536] = sV, tC[537] = t) : t = tC[537];
                    let M = !r4,
                        k = sZ ? null : oL;tC[538] !== rR || tC[539] !== oF ? (n = oF ? () => {
                        rR.refetch({
                            cancelRefetch: !1
                        })
                    } : void 0, tC[538] = rR, tC[539] = oF, tC[540] = n) : n = tC[540];
                    let R = on.length > 0,
                        O = eP,
                        N = !sR && (null == sb || null != sM),
                        G = null == sV && !rV,
                        L = rR.isFetching,
                        B = !sZ && ro;tC[541] !== rW?.is_archived || tC[542] !== tT || tC[543] !== nZ || tC[544] !== n$ || tC[545] !== an || tC[546] !== t7 || tC[547] !== ro || tC[548] !== r4 ? (r = n$ || !r4 || an || nZ || rW?.is_archived === !0 || t7 ? null : (0, a.jsx)(y.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(sI, {
                            conversationId: tT,
                            isTurnActive: ro
                        })
                    }), tC[541] = rW?.is_archived, tC[542] = tT, tC[543] = nZ, tC[544] = n$, tC[545] = an, tC[546] = t7, tC[547] = ro, tC[548] = r4, tC[549] = r) : r = tC[549],
                    tC[550] !== tT || tC[551] !== nZ || tC[552] !== aT ? (s = nZ ? (0, a.jsx)(tJ.a, {
                        conversationId: aT ?? tT,
                        kind: "chatgpt"
                    }, aT ?? tT) : void 0, tC[550] = tT, tC[551] = nZ, tC[552] = aT, tC[553] = s) : s = tC[553];
                    let z = !sZ && os;tC[554] !== s_ ? (o = null != s_ ? (0, a.jsx)(sA.GptPluginMigrationBanner, {
                        gizmoId: s_
                    }) : null, tC[554] = s_, tC[555] = o) : o = tC[555],
                    tC[556] !== sy || tC[557] !== o2 || tC[558] !== av || tC[559] !== t7 || tC[560] !== sr || tC[561] !== rT ? (i = sr && !t7 ? (0, a.jsx)(rk, {
                        canConvert: sy,
                        isChatInstantAvailable: !rT,
                        isConverting: av,
                        onConvert: o2
                    }) : null, tC[556] = sy, tC[557] = o2, tC[558] = av, tC[559] = t7, tC[560] = sr, tC[561] = rT, tC[562] = i) : i = tC[562],
                    tC[563] !== rB || tC[564] !== r8 ? (l = rB.bind(null, r8), tC[563] = rB, tC[564] = r8, tC[565] = l) : l = tC[565],
                    tC[566] !== o3 || tC[567] !== an || tC[568] !== t3 ? (c = e => {
                        t3?.(e), an && o3()
                    }, tC[566] = o3, tC[567] = an, tC[568] = t3, tC[569] = c) : c = tC[569],
                    tC[570] !== rR.isFetching || tC[571] !== sw || tC[572] !== ao || tC[573] !== s_ || tC[574] !== nW || tC[575] !== tT || tC[576] !== ir || tC[577] !== tR || tC[578] !== oz || tC[579] !== tk || tC[580] !== ae || tC[581] !== o9 || tC[582] !== s8 || tC[583] !== rN || tC[584] !== oB || tC[585] !== ai || tC[586] !== n$ || tC[587] !== an || tC[588] !== t7 || tC[589] !== rY || tC[590] !== eP || tC[591] !== nF || tC[592] !== tQ || tC[593] !== ak || tC[594] !== nL || tC[595] !== rD || tC[596] !== o8 || tC[597] !== n || tC[598] !== R || tC[599] !== N || tC[600] !== G || tC[601] !== B || tC[602] !== r || tC[603] !== s || tC[604] !== z || tC[605] !== o || tC[606] !== i || tC[607] !== l || tC[608] !== c || tC[609] !== _ || tC[610] !== w || tC[611] !== I || tC[612] !== T || tC[613] !== j || tC[614] !== A || tC[615] !== P || tC[616] !== e || tC[617] !== t || tC[618] !== M || tC[619] !== k || tC[620] !== tK || tC[621] !== ia || tC[622] !== nQ ? (d = (0, a.jsx)(o1, {
                        ref: al,
                        printTitle: _,
                        trackShownImpressions: w,
                        trackReadState: I,
                        workspace: nQ,
                        shouldBlockMcpApps: T,
                        isCoveredByFloatingPanel: j,
                        isFormOnly: ai,
                        isInlinePreview: n$,
                        hideModelPicker: tk,
                        disableAutoFocus: tR,
                        transcriptPresentation: tK,
                        scrollOrigin: tQ,
                        composerRef: ad,
                        contentX: A,
                        conversationId: tT,
                        composerConversationId: ao,
                        sectionIndex: P,
                        composerLeadingContent: nW,
                        aboveComposerContent: e,
                        historyLoadingContent: t,
                        requiredSystemHints: nF,
                        isChatConversation: M,
                        customGptId: s_,
                        conversationLoadingLabel: ir,
                        entries: ia,
                        errorMessage: k,
                        hasLoadError: oz,
                        onRetryLoad: n,
                        hasRenderableTurns: R,
                        isComposerDisabled: o9,
                        readOnlyPlaceholder: O,
                        moreDetailsEnabled: N,
                        isConversationEmpty: s8,
                        showEmptyState: G,
                        isConversationFetching: L,
                        isConversationLoading: oB,
                        isSharedConversation: an,
                        isSubmitDisabled: rN,
                        isTemporaryChat: t7,
                        isTurnActive: B,
                        isWorkConversation: rY,
                        onboardingPrelude: r,
                        scrollStateConversationId: ak,
                        initialResponsePlacementKey: ae,
                        sharedConversationId: nL,
                        sharedPostRegulatedConnectorKind: rD,
                        showComposer: o8,
                        archivedPreviewFooter: s,
                        showPendingLoadingMessage: z,
                        gptPluginMigrationBanner: o,
                        awaitingGptContinuation: sw,
                        workOnlyConversionBanner: i,
                        onAddSelectedText: l,
                        onSubmitAccepted: c
                    }), tC[570] = rR.isFetching, tC[571] = sw, tC[572] = ao, tC[573] = s_, tC[574] = nW, tC[575] = tT, tC[576] = ir, tC[577] = tR, tC[578] = oz, tC[579] = tk, tC[580] = ae, tC[581] = o9, tC[582] = s8, tC[583] = rN, tC[584] = oB, tC[585] = ai, tC[586] = n$, tC[587] = an, tC[588] = t7, tC[589] = rY, tC[590] = eP, tC[591] = nF, tC[592] = tQ, tC[593] = ak, tC[594] = nL, tC[595] = rD, tC[596] = o8, tC[597] = n, tC[598] = R, tC[599] = N, tC[600] = G, tC[601] = B, tC[602] = r, tC[603] = s, tC[604] = z, tC[605] = o, tC[606] = i, tC[607] = l, tC[608] = c, tC[609] = _, tC[610] = w, tC[611] = I, tC[612] = T, tC[613] = j, tC[614] = A, tC[615] = P, tC[616] = e, tC[617] = t, tC[618] = M, tC[619] = k, tC[620] = tK, tC[621] = ia, tC[622] = nQ, tC[623] = d) : d = tC[623],
                    tC[624] !== of || tC[625] !== ep || tC[626] !== oo || tC[627] !== aM || tC[628] !== oE || tC[629] !== it || tC[630] !== oO || tC[631] !== ok ? (u = oE && null != ep && (!oo || of.isOpen) ? (0, a.jsx)(rd, {
                        composerActions: it,
                        conversationId: oO,
                        readData: ep,
                        showSources: !oo,
                        display: ok,
                        shouldBlockExternalEgress: aM
                    }) : null, tC[624] = of, tC[625] = ep, tC[626] = oo, tC[627] = aM, tC[628] = oE, tC[629] = it, tC[630] = oO, tC[631] = ok, tC[632] = u) : u = tC[632],
                    tC[633] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(a6.a, {}), tC[633] = h) : h = tC[633],
                    tC[634] !== n$ ? (m = null, tC[634] = n$, tC[635] = m) : m = tC[635],
                    tC[636] !== se || tC[637] !== d || tC[638] !== u || tC[639] !== m || tC[640] !== x ? (eJ = (0, a.jsxs)("div", {
                        className: x,
                        inert: se,
                        children: [d, u, h, m]
                    }), tC[636] = se, tC[637] = d, tC[638] = u, tC[639] = m, tC[640] = x, tC[641] = eJ) : eJ = tC[641],
                    eX = !an && !r8 && (0, tO.c)() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(oD, {
                            conversationId: tT,
                            shouldBlockExternalEgress: aM || sa,
                            widgets: f.filter(oY)
                        }), (0, a.jsx)(tL.a, {
                            blockedWidgetSource: rE ? void 0 : "descriptor",
                            transcriptMcpAppIds: new Set(f.flatMap(e => "mcp-tool-call" === e.type ? rE ? e.callId : [] : "chatgpt-hosted-widget" === e.type ? (0, aD.e)(tT, e.messageId) : [])),
                            shouldBlockExternalEgress: aM || sa
                        })]
                    }) : null
                }
                tC[291] = rR, tC[292] = nX?.authMethod, tC[293] = sw, tC[294] = nU, tC[295] = sa, tC[296] = sy, tC[297] = oF, tC[298] = ie, tC[299] = ao, tC[300] = s_, tC[301] = nW, tC[302] = rW, tC[303] = id, tC[304] = tT, tC[305] = ir, tC[306] = rQ, tC[307] = aW, tC[308] = im, tC[309] = of, tC[310] = tR, tC[311] = oL, tC[312] = r$, tC[313] = r7, tC[314] = ep, tC[315] = sl, tC[316] = rB, tC[317] = o2, tC[318] = o3, tC[319] = oz, tC[320] = rP, tC[321] = tk, tC[322] = ae, tC[323] = nZ, tC[324] = oo, tC[325] = o9, tC[326] = s8, tC[327] = rN, tC[328] = oB, tC[329] = ai, tC[330] = av, tC[331] = sR, tC[332] = n$, tC[333] = sO, tC[334] = o4, tC[335] = rE, tC[336] = se, tC[337] = r8, tC[338] = r2, tC[339] = !1, tC[340] = an, tC[341] = so, tC[342] = rr, tC[343] = ra, tC[344] = t7, tC[345] = rY, tC[346] = ro, tC[347] = r4, tC[348] = sr, tC[349] = rT, tC[350] = ss, tC[351] = rZ, tC[352] = rV, tC[353] = rJ.pathname, tC[354] = rM, tC[355] = rX?.sidebarAutomationId, tC[356] = t3, tC[357] = r0, tC[358] = sM, tC[359] = sW, tC[360] = sb, tC[361] = sL, tC[362] = eP, tC[363] = sm, tC[364] = s9, tC[365] = on, tC[366] = nF, tC[367] = sZ, tC[368] = o5, tC[369] = rq, tC[370] = nJ, tC[371] = tQ, tC[372] = ak, tC[373] = sV, tC[374] = ip, tC[375] = aT, tC[376] = og, tC[377] = nL, tC[378] = n0, tC[379] = rD, tC[380] = nV, tC[381] = sK, tC[382] = aM, tC[383] = iu, tC[384] = oE, tC[385] = o8, tC[386] = os, tC[387] = it, tC[388] = oO, tC[389] = ok, tC[390] = aO, tC[391] = tK, tC[392] = ia, tC[393] = nQ, tC[394] = eD, tC[395] = eH, tC[396] = eW, tC[397] = eq, tC[398] = eU, tC[399] = eK, tC[400] = eJ, tC[401] = eX, tC[402] = e0, tC[403] = e1, tC[404] = e2, tC[405] = e3, tC[406] = e4, tC[407] = e6, tC[408] = e5, tC[409] = e8, tC[410] = e7, tC[411] = te, tC[412] = ta, tC[413] = tr, tC[414] = ts, tC[415] = to, tC[416] = ti, tC[417] = tl, tC[418] = tc
            } else eD = tC[394], eH = tC[395], eW = tC[396], eq = tC[397], eU = tC[398], eK = tC[399], eJ = tC[400], eX = tC[401], e0 = tC[402], e1 = tC[403], e2 = tC[404], e3 = tC[405], e4 = tC[406], e6 = tC[407], e5 = tC[408], e8 = tC[409], e7 = tC[410], te = tC[411], ta = tC[412], tr = tC[413], ts = tC[414], to = tC[415], ti = tC[416], tl = tC[417], tc = tC[418];
            if (tc !== Symbol.for("react.early_return_sentinel")) return tc;
            tC[642] !== eD || tC[643] !== eq || tC[644] !== eU || tC[645] !== eK || tC[646] !== eJ || tC[647] !== eX ? (tu = (0, a.jsxs)(eD, {
                floatingPanelWidth: eq,
                header: eU,
                banner: eK,
                children: [eJ, eX]
            }), tC[642] = eD, tC[643] = eq, tC[644] = eU, tC[645] = eK, tC[646] = eJ, tC[647] = eX, tC[648] = tu) : tu = tC[648], tC[649] !== eH || tC[650] !== e0 || tC[651] !== e1 || tC[652] !== e2 || tC[653] !== e3 || tC[654] !== e4 || tC[655] !== e6 || tC[656] !== tu ? (tg = (0, a.jsx)(eH, {
                conversationId: e0,
                conversationOrigin: e1,
                disabled: e2,
                isTemporaryChat: e3,
                projectId: e4,
                requiresGizmoId: e6,
                children: tu
            }), tC[649] = eH, tC[650] = e0, tC[651] = e1, tC[652] = e2, tC[653] = e3, tC[654] = e4, tC[655] = e6, tC[656] = tu, tC[657] = tg) : tg = tC[657], tC[658] !== eW || tC[659] !== e5 || tC[660] !== e8 || tC[661] !== e7 || tC[662] !== te || tC[663] !== ta || tC[664] !== tr || tC[665] !== ts || tC[666] !== to || tC[667] !== ti || tC[668] !== tl || tC[669] !== tg ? (tf = (0, a.jsxs)(eW, {
                children: [e5, e8, e7, te, ta, tr, ts, to, ti, tl, tg]
            }), tC[658] = eW, tC[659] = e5, tC[660] = e8, tC[661] = e7, tC[662] = te, tC[663] = ta, tC[664] = tr, tC[665] = ts, tC[666] = to, tC[667] = ti, tC[668] = tl, tC[669] = tg, tC[670] = tf) : tf = tC[670];
            let ig = tf,
                iv = an || !rR.isFetchedAfterMount || rR.isFetching || rO ? null : rR.error,
                iy = oz ? rR.error : null,
                ib = null == rQ && null == rW ? null : r4,
                ix = !r4 && !oB;
            return tC[671] !== ac || tC[672] !== ao || tC[673] !== nL ? (tv = {
                conversationId: ao,
                composer: ac,
                sharedConversationId: nL
            }, tC[671] = ac, tC[672] = ao, tC[673] = nL, tC[674] = tv) : tv = tC[674], tC[675] !== ig || tC[676] !== tv ? (ty = (0, a.jsx)(nD.a, {
                value: tv,
                children: ig
            }), tC[675] = ig, tC[676] = tv, tC[677] = ty) : ty = tC[677], tC[678] !== ix || tC[679] !== ty ? (tb = (0, a.jsx)(_.a, {
                enabled: ix,
                children: ty
            }), tC[678] = ix, tC[679] = ty, tC[680] = tb) : tb = tC[680], tC[681] !== oF || tC[682] !== aT || tC[683] !== iv || tC[684] !== iy || tC[685] !== ib || tC[686] !== tb ? (tx = (0, a.jsx)(ee.a, {
                conversationId: aT,
                error: iv,
                loadError: iy,
                canRetry: oF,
                isWorkConversation: ib,
                children: tb
            }), tC[681] = oF, tC[682] = aT, tC[683] = iv, tC[684] = iy, tC[685] = ib, tC[686] = tb, tC[687] = tx) : tx = tC[687], tx
        }

        function oY(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function oZ(e) {
            return "user" === e.author.role
        }

        function o$(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function oJ(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function oX(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function o0(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }

        function o1(e) {
            let t, n, s, o, c, u, h, p, g, f, v, x, C, _, w, I, T, S, j, E, A, P, M, k, O, N, G, L, F, D, H = (0, r.c)(231),
                {
                    ref: q,
                    printTitle: U,
                    trackReadState: K,
                    trackShownImpressions: V,
                    composerRef: Q,
                    workspace: Y,
                    shouldBlockMcpApps: Z,
                    contentX: J,
                    conversationId: X,
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
                    disableAutoFocus: ed,
                    transcriptPresentation: eu,
                    scrollOrigin: eh,
                    isChatConversation: em,
                    customGptId: ep,
                    conversationLoadingLabel: eg,
                    entries: ef,
                    errorMessage: ev,
                    hasLoadError: ey,
                    onRetryLoad: ex,
                    hasRenderableTurns: eC,
                    isComposerDisabled: e_,
                    readOnlyPlaceholder: ew,
                    moreDetailsEnabled: eI,
                    isConversationEmpty: eT,
                    showEmptyState: ej,
                    isConversationFetching: eE,
                    isConversationLoading: eA,
                    isSharedConversation: eP,
                    isSubmitDisabled: eM,
                    isTemporaryChat: ek,
                    isTurnActive: eR,
                    isWorkConversation: eO,
                    onboardingPrelude: eN,
                    scrollStateConversationId: eB,
                    initialResponsePlacementKey: ez,
                    sharedConversationId: eD,
                    sharedPostRegulatedConnectorKind: eH,
                    showComposer: eq,
                    archivedPreviewFooter: eU,
                    showPendingLoadingMessage: eK,
                    gptPluginMigrationBanner: eV,
                    awaitingGptContinuation: eQ,
                    workOnlyConversionBanner: eY,
                    onAddSelectedText: eZ,
                    onSubmitAccepted: e$
                } = e,
                eX = void 0 === ej || ej,
                e0 = (0, m.y)(z.a),
                e1 = (0, m.z)(null),
                e3 = (0, m.x)(eS.e, (0, y.useContext)(R.a)),
                e4 = (0, m.z)(tV.a),
                e6 = (0, m.x)(nt.a, X),
                e5 = Y?.fullscreenContent != null ? "content" : "workspace",
                e7 = (0, $.a)(el ? "embedded" : e5),
                e9 = (0, m.z)(sz.a),
                te = eq && e9?.source.turnContext.conversationId !== et,
                tt = "floating" === e7.placement,
                tn = (0, m.z)(sO.h),
                ta = em && null == eD && null == e3 && null == eU,
                tr = !eA && !eR && !ey && eT && !eC,
                ts = (0, m.x)(B.i, X),
                to = eX && ta && tr && null == ts && !e6 && !tt,
                ti = null == ep ? "centered-home" : "home",
                tc = eX && !e6 && (!ta || !eT),
                td = (0, y.useRef)(null),
                [tu, th] = (0, y.useState)(null),
                [tm, tp] = (0, y.useState)(!1);
            H[0] !== ef || H[1] !== tu ? (t = () => ({
                async scrollToMessage(e) {
                    let t = ef.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != tu && await tu.scrollToKey(t.turnKey, void 0, {
                        align: "top"
                    })
                }
            }), n = [ef, tu], H[0] = ef, H[1] = tu, H[2] = t, H[3] = n) : (t = H[2], n = H[3]), (0, y.useImperativeHandle)(q, t, n), H[4] !== ef ? (s = () => ef, H[4] = ef, H[5] = s) : s = H[5];
            let tv = (0, ne.a)(s);
            H[6] !== ef || H[7] !== tu ? (o = async e => {
                let t = d()(ef, o4);
                if (null == t || e.aborted) return null;
                let n = null;
                return await tu?.scrollToKey(t.turnKey, e => {
                    let t = e.querySelectorAll('[data-conversation-role="assistant"]');
                    return n = t.item(t.length - 1)
                }, {
                    align: "top",
                    signal: e
                }), n
            }, H[6] = ef, H[7] = tu, H[8] = o) : o = H[8];
            let t_ = o,
                [tw, tI] = (0, y.useState)(null);
            H[9] !== el || H[10] !== e0 || H[11] !== eB ? (c = () => el ? 0 : e0.get(aa.a, eB), H[9] = el, H[10] = e0, H[11] = eB, H[12] = c) : c = H[12];
            let [tT, tS] = (0, y.useState)(c);
            H[13] !== el || H[14] !== tw || H[15] !== e0 || H[16] !== eB ? (u = e => {
                el || e0.set(aa.a, eB, Math.max(0, e - (tw?.getHeightPx() ?? 0)))
            }, H[13] = el, H[14] = tw, H[15] = e0, H[16] = eB, H[17] = u) : u = H[17];
            let tj = (0, ne.a)(u);
            H[18] !== ef || H[19] !== tu ? (h = async (e, t) => {
                if (t?.signal?.aborted) return;
                if (null == tu) throw Error("ChatGPT conversation search scroll requested before VirtualizedTurnList API was ready");
                let n = ef.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                });
                null == n || (await tu.scrollToKey(n.turnKey), t?.signal?.aborted || await (0, tf.b)())
            }, H[18] = ef, H[19] = tu, H[20] = h) : h = H[20];
            let tE = (0, ne.a)(h);
            H[21] === Symbol.for("react.memo_cache_sentinel") ? (p = e => td.current?.querySelector(`[data-content-search-turn-key="${e}"]`) ?? null, H[21] = p) : p = H[21];
            let tP = (0, ne.a)(p);
            H[22] !== X || H[23] !== ef || H[24] !== tu ? (g = async e => {
                let t = ef.find(t => {
                    let {
                        turn: n
                    } = t;
                    return n.messageIds.includes(e)
                });
                null != t && null != tu && await tu.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${X}-${e}`)}"]`), {
                    align: "center"
                })
            }, H[22] = X, H[23] = ef, H[24] = tu, H[25] = g) : g = H[25];
            let tM = (0, ne.a)(g);
            H[26] !== tP || H[27] !== tE ? (f = {
                scrollToTurn: tE,
                getTurnContainer: tP
            }, H[26] = tP, H[27] = tE, H[28] = f) : f = H[28];
            let tk = f,
                tO = `chatgpt:${X}`;
            H[29] !== X || H[30] !== ek || H[31] !== e0 || H[32] !== eD || H[33] !== e3 ? (v = async e => {
                let t = e0.get(B.j, X);
                !ek && null == eD && null == e3 && null != t && e0.get(eL.b) > 0 && await (0, eG.a)(e0, t, e)
            }, H[29] = X, H[30] = ek, H[31] = e0, H[32] = eD, H[33] = e3, H[34] = v) : v = H[34], H[35] !== tk || H[36] !== tv || H[37] !== tO || H[38] !== v ? (x = function(e) {
                let {
                    getTurns: t,
                    routeContextId: n,
                    scrollAdapter: a,
                    ensureHistory: r
                } = e, s = (0, ai.a)({
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
                                        unitId: (0, nU.a)("user", t),
                                        text: n
                                    }]
                                }
                                if ("assistant-message" === e.type) {
                                    let n = (0, ac.a)(e.content, eb.b),
                                        a = [],
                                        r = "";
                                    for (; e.content.includes(r);) r += "";
                                    let s = (0, ao.a)(function e(t, n, a, r) {
                                            let s = "",
                                                o = 0;
                                            for (let i of t) {
                                                let t = n.indexOf(i.raw, o); - 1 !== t && (s += n.slice(o, t), s += function(t, n, a) {
                                                    var r, s;
                                                    if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                    if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                        if (e.name === eb.a) {
                                                            let n = (0, ad.a)(e.attributes),
                                                                a = (0, ad.b)(e.attributes),
                                                                r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, eb.l)(e) === a);
                                                            if (null == r) return "";
                                                            let s = (0, eb.i)(r);
                                                            return "hidden" === s || "block" === s ? "" : (0, eb.j)(r) ?? ""
                                                        }
                                                        return e.name === as.a ? (0, al.a)(e.attributes, "label") ?? "" : e.name === as.b || e.name === as.c ? "" : e.name === ar.a ? e.text ?? "" : null
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
                                        unitId: (0, nU.a)("assistant", t),
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
                getTurns: tv,
                routeContextId: tO,
                scrollAdapter: tk,
                ensureHistory: v
            }), H[35] = tk, H[36] = tv, H[37] = tO, H[38] = v, H[39] = x) : x = H[39];
            let tN = x;
            H[40] !== tN.contextId ? (C = {
                containerRef: td,
                contextId: tN.contextId
            }, H[40] = tN.contextId, H[41] = C) : C = H[41], (0, tx.a)(C);
            let tG = te && null == eU,
                tL = e4 && tG && !tt,
                tB = (0, tA.a)();
            H[42] !== X || H[43] !== eC || H[44] !== eo || H[45] !== ee || H[46] !== tB ? (_ = {
                conversationId: X,
                sectionIndex: ee,
                hasRenderableTurns: eC,
                isCoveredByFloatingPanel: eo,
                shouldReduceMotion: tB,
                containerRef: td
            }, H[42] = X, H[43] = eC, H[44] = eo, H[45] = ee, H[46] = tB, H[47] = _) : _ = H[47];
            let tz = function(e) {
                    let t, n, a, s = (0, r.c)(12),
                        {
                            conversationId: o,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, sZ.a)(0);
                    s[0] !== o || s[1] !== i ? (t = {
                        conversationId: o,
                        sectionIndex: i
                    }, s[0] = o, s[1] = i, s[2] = t) : t = s[2];
                    let m = (0, y.useRef)(t);
                    return s[3] !== u || s[4] !== o || s[5] !== l || s[6] !== c || s[7] !== i || s[8] !== h || s[9] !== d ? (n = () => {
                        let e;
                        if (!l) return;
                        let t = m.current;
                        m.current = {
                            conversationId: o,
                            sectionIndex: i
                        };
                        let n = u.current;
                        if (null == n || d || c || t.conversationId !== o || null == t.sectionIndex || null == i || t.sectionIndex === i) return;
                        let a = Math.sign(i - t.sectionIndex),
                            r = () => {
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(sX) && 0 !== n.clientWidth && (s.disconnect(), h.set(a * n.clientWidth), e = (0, s$.a)(h, 0, {
                                    duration: .3,
                                    ease: sJ.d
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
                }(_),
                tF = tG && tt,
                [tD, tH] = (0, y.useState)(null),
                [tW, tq] = (0, y.useState)(null),
                [tU, tY] = (0, y.useState)(null),
                tZ = eP && tG && !e_ && !tt && !e4,
                [t$, tJ] = (0, y.useState)(null);
            H[48] !== eQ || H[49] !== X || H[50] !== eC || H[51] !== ek || H[52] !== eH || H[53] !== eq ? (w = eq && !eQ ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(tl.BrowserComposerDisclaimer, {
                    conversationId: X,
                    hasUserMessage: eC,
                    isTemporaryChat: ek,
                    regulatedConnectorKindOverride: eH
                })
            }) : void 0, H[48] = eQ, H[49] = X, H[50] = eC, H[51] = ek, H[52] = eH, H[53] = eq, H[54] = w) : w = H[54];
            let t0 = w;
            H[55] !== X || H[56] !== ev || H[57] !== eC || H[58] !== e_ || H[59] !== eM || H[60] !== ek || H[61] !== eO || H[62] !== eq || H[63] !== eK ? (I = eC ? null : (0, a.jsx)(ae.a, {
                conversationId: X,
                errorMessage: ev,
                isTemporaryChat: ek,
                isWorkConversation: eO,
                showPendingLoadingMessage: eK,
                showRequestUserInputStatus: eq && !e_ && !eM
            }), H[55] = X, H[56] = ev, H[57] = eC, H[58] = e_, H[59] = eM, H[60] = ek, H[61] = eO, H[62] = eq, H[63] = eK, H[64] = I) : I = H[64];
            let t1 = I;
            H[65] !== X || H[66] !== eO || H[67] !== eD || H[68] !== e3 ? (T = eO && null == eD && null == e3 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(e8, {
                    conversationId: X
                }, X)
            }) : null, H[65] = X, H[66] = eO, H[67] = eD, H[68] = e3, H[69] = T) : T = H[69];
            let t4 = T;
            H[70] !== eU || H[71] !== t4 ? (S = null != eU ? (0, a.jsxs)(a.Fragment, {
                children: [t4, eU]
            }) : null, H[70] = eU, H[71] = t4, H[72] = S) : S = H[72];
            let t6 = S;
            H[73] !== ea || H[74] !== t6 || H[75] !== eQ || H[76] !== et || H[77] !== en || H[78] !== Q || H[79] !== X || H[80] !== ed || H[81] !== t0 || H[82] !== t1 || H[83] !== ef || H[84] !== t4 || H[85] !== tD || H[86] !== eV || H[87] !== ey || H[88] !== eC || H[89] !== ec || H[90] !== e4 || H[91] !== e_ || H[92] !== eA || H[93] !== eo || H[94] !== ei || H[95] !== tt || H[96] !== tn || H[97] !== el || H[98] !== eP || H[99] !== eM || H[100] !== ek || H[101] !== eO || H[102] !== e$ || H[103] !== ew || H[104] !== tZ || H[105] !== es || H[106] !== tw || H[107] !== t_ || H[108] !== e7.isHidden || H[109] !== eD || H[110] !== e3 || H[111] !== te || H[112] !== tF || H[113] !== tL || H[114] !== K || H[115] !== V || H[116] !== eY || H[117] !== Y ? (j = t6 ?? (te ? (0, a.jsxs)(rS.a.Provider, {
                value: ef.at(-1) ?? null,
                children: [ei || tt ? null : (0, a.jsx)(tC.a, {
                    onNavigate: t_
                }, X), tt ? null : en, (0, a.jsx)(o5, {
                    requiredSystemHints: es,
                    composerRef: Q,
                    workspace: Y,
                    isInlinePreview: el,
                    hideModelPicker: ec,
                    disableAutoFocus: ed,
                    conversationId: et,
                    isImageEditComposer: tn,
                    disabled: e_,
                    readOnlyPlaceholder: ew,
                    awaitingGptContinuation: eQ,
                    headerContent: t4,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tZ ? (0, a.jsx)("div", {
                            ref: tY,
                            className: "empty:hidden"
                        }) : null, ea, !eA && !ey && eC && !eQ && eY, e4 ? null : eV, tF && t1]
                    }),
                    isFullscreenComposer: tt,
                    isHidden: e7.isHidden,
                    trackReadState: K && !eo,
                    trackShownImpressions: V && !eo,
                    isSharedConversation: eP,
                    isSubmitDisabled: eM,
                    followupPortalTarget: tD,
                    takeoverDisclaimerRef: tJ,
                    showConversationFollowups: null == eD && null == e3 && !ek && !eO && !tt,
                    isTemporaryChat: ek,
                    isWorkConversation: eO,
                    responseSpacerState: tw,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(aA, {
                            entries: ef,
                            historyLoader: ek || null != eD || null != e3 ? null : (0, a.jsx)(sW.a, {
                                conversationId: X
                            }),
                            isVisible: t
                        })
                    },
                    showVoiceStage: !tL,
                    voiceDisclaimer: e4 && !tL ? t0 : void 0,
                    onSubmitAccepted: e => {
                        tS(0), e$?.(e)
                    }
                }, `${et}:${tn?"image-edit":"chat"}`)]
            }) : t4), H[73] = ea, H[74] = t6, H[75] = eQ, H[76] = et, H[77] = en, H[78] = Q, H[79] = X, H[80] = ed, H[81] = t0, H[82] = t1, H[83] = ef, H[84] = t4, H[85] = tD, H[86] = eV, H[87] = ey, H[88] = eC, H[89] = ec, H[90] = e4, H[91] = e_, H[92] = eA, H[93] = eo, H[94] = ei, H[95] = tt, H[96] = tn, H[97] = el, H[98] = eP, H[99] = eM, H[100] = ek, H[101] = eO, H[102] = e$, H[103] = ew, H[104] = tZ, H[105] = es, H[106] = tw, H[107] = t_, H[108] = e7.isHidden, H[109] = eD, H[110] = e3, H[111] = te, H[112] = tF, H[113] = tL, H[114] = K, H[115] = V, H[116] = eY, H[117] = Y, H[118] = j) : j = H[118];
            let t5 = j;
            H[119] !== X || H[120] !== eo || H[121] !== el || H[122] !== e1 || H[123] !== eD || H[124] !== e3 ? (E = void 0, H[119] = X, H[120] = eo, H[121] = el, H[122] = e1, H[123] = eD, H[124] = e3, H[125] = E) : E = H[125];
            let t8 = E,
                t7 = eo || void 0;
            H[126] === Symbol.for("react.memo_cache_sentinel") ? (A = null, H[126] = A) : A = H[126], H[127] !== X || H[128] !== eo || H[129] !== tt || H[130] !== K ? (P = !K || tt || eo ? null : (0, a.jsx)(rT.a, {
                conversationId: X
            }), H[127] = X, H[128] = eo, H[129] = tt, H[130] = K, H[131] = P) : P = H[131], H[132] !== eU || H[133] !== X || H[134] !== el || H[135] !== eD || H[136] !== e3 ? (M = el || null != eD || null != e3 || null != eU ? null : (0, a.jsx)(rt, {
                conversationId: X
            }, X), H[132] = eU, H[133] = X, H[134] = el, H[135] = eD, H[136] = e3, H[137] = M) : M = H[137], H[138] !== X || H[139] !== eA || H[140] !== ek || H[141] !== eD || H[142] !== e3 ? (k = eA || ek || null != eD || null != e3 ? null : (0, a.jsx)(sq, {
                conversationId: X
            }), H[138] = X, H[139] = eA, H[140] = ek, H[141] = eD, H[142] = e3, H[143] = k) : k = H[143], H[144] !== X || H[145] !== ef || H[146] !== tm || H[147] !== eE || H[148] !== eA || H[149] !== el || H[150] !== t_ || H[151] !== eD || H[152] !== e3 || H[153] !== tu ? (O = el || eA || null != eD || null != e3 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(W, {
                    conversationId: X,
                    entries: ef,
                    turnListApi: tu
                }), (0, a.jsx)(tX.a, {
                    ready: !eE && tm && null != tu && ef.length > 0,
                    onNavigate: t_
                })]
            }), H[144] = X, H[145] = ef, H[146] = tm, H[147] = eE, H[148] = eA, H[149] = el, H[150] = t_, H[151] = eD, H[152] = e3, H[153] = tu, H[154] = O) : O = H[154], H[155] !== eU || H[156] !== to || H[157] !== et || H[158] !== J || H[159] !== ts || H[160] !== X || H[161] !== eg || H[162] !== tN || H[163] !== t0 || H[164] !== t1 || H[165] !== ef || H[166] !== t5 || H[167] !== tj || H[168] !== ey || H[169] !== eC || H[170] !== er || H[171] !== ti || H[172] !== ez || H[173] !== tT || H[174] !== e4 || H[175] !== e6 || H[176] !== e_ || H[177] !== eE || H[178] !== eA || H[179] !== eo || H[180] !== ei || H[181] !== tt || H[182] !== el || H[183] !== eP || H[184] !== ek || H[185] !== eR || H[186] !== eO || H[187] !== eI || H[188] !== t8 || H[189] !== eZ || H[190] !== ex || H[191] !== eN || H[192] !== U || H[193] !== tZ || H[194] !== tw || H[195] !== e7.isChatPaneHidden || H[196] !== e0 || H[197] !== eh || H[198] !== tM || H[199] !== tz || H[200] !== eD || H[201] !== e3 || H[202] !== Z || H[203] !== tB || H[204] !== eq || H[205] !== te || H[206] !== tc || H[207] !== tF || H[208] !== tL || H[209] !== t$ || H[210] !== eu || H[211] !== tu || H[212] !== Y ? (N = Y?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!Z && Y.fullscreenContent, t5]
            }) : (0, a.jsxs)(t3.a, {
                viewportOverlay: ei || el || eO || null != eD || null != e3 || null != eU || eo || tt ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(rN, {
                        conversationId: X
                    }, X)
                }),
                hideTranscript: ei,
                active: !eA && (!eC || null != tu),
                presentation: eu ?? (el ? "compact" : "default"),
                contentX: J,
                composerFade: !1,
                footerPlacement: to ? ti : "bottom",
                initialOffset: tT,
                scrollOrigin: eh,
                onScroll: tj,
                responseSpacer: tw,
                scrollToBottomButton: !te || tt || tL ? void 0 : {
                    isWorking: eR
                },
                threadEndContent: e4 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tH,
                        className: t2.a
                    }), null == t$ ? t0 : (0, b.createPortal)(t0, t$)]
                }),
                footerLeadingContent: tL ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: t2.a,
                            children: (0, a.jsx)(tK.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: t0
                    })]
                }) : t8,
                footer: t5,
                children: [el || eA || null != eD ? null : (0, a.jsx)(n6, {
                    conversationId: X,
                    entries: ef,
                    isConversationFetching: eE,
                    turnListApi: tu
                }), (0, a.jsxs)(l.a.div, {
                    ref: td,
                    style: {
                        x: tz
                    },
                    "data-chatgpt-conversation-selection-target": X,
                    className: (0, i.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", el && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, tb.K)(e0, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, tb.K)(e0, "conversation")
                    },
                    children: [(0, a.jsxs)(y.Suspense, {
                        fallback: (0, a.jsx)(tR.LoadingPage, {
                            debugName: "ChatGptConversationPage",
                            fillParent: !0
                        }),
                        children: [el || eA ? null : (0, a.jsx)(ty.a, {
                            conversationSource: tN
                        }), eo || e7.isChatPaneHidden || ek || null != eD || null != e3 ? null : er ?? (0, a.jsx)(sW.a, {
                            conversationId: X
                        }), (0, a.jsx)(oO.b, {
                            conversationId: X
                        }), (null != eD || null != e3) && eC ? (0, a.jsx)(oh, {
                            sharedConversationId: eD
                        }) : null, null == eN ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: t2.a,
                                children: eN
                            })
                        }), null == ts || eA ? null : (0, a.jsx)(nL.a, {
                            conversationId: X,
                            branchSource: {
                                conversationId: ts.metadata.source_conversation_id,
                                title: ts.metadata.source_conversation_title,
                                gizmoId: ts.metadata.source_conversation_gizmo_id,
                                ownerId: ts.metadata.source_conversation_owner_id
                            }
                        }), ey ? (0, a.jsx)(e2, {
                            isFetching: eE,
                            isSharedConversation: eP,
                            onRetry: ex
                        }) : eA ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": eg,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(tR.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : eC ? (0, a.jsxs)(sN.a, {
                            value: tM,
                            children: [el || eo ? null : (0, a.jsxs)(a.Fragment, {
                                children: [ek || null != eD || null != e3 ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(eW, {
                                        conversationId: X
                                    })
                                }), (0, a.jsx)(eF, {
                                    entries: ef,
                                    title: U,
                                    TurnRowComponent: aE
                                })]
                            }), (0, a.jsx)(aq, {
                                conversationId: X,
                                entries: ef,
                                onApiChange: th,
                                onVisibleContentReady: () => tp(!0),
                                responseSpacerState: tw
                            }), tZ ? (0, a.jsx)("div", {
                                ref: tq,
                                className: "empty:hidden"
                            }) : null]
                        }) : tc && null == ts && (0, a.jsx)(eJ, {}), !tF && t1, (0, a.jsx)(a9.a, {
                            conversationId: et,
                            isWorkConversation: eO
                        }), eq && !e_ ? (0, a.jsx)(s6, {
                            conversationId: X,
                            moreDetailsEnabled: eI,
                            onAddSelectedText: eZ
                        }) : null]
                    }), el ? null : (0, a.jsx)(an.a, {
                        initialPlacementKey: ez,
                        isActiveVoiceConversation: e4 && e6,
                        isLoadingHistory: eA,
                        latestUserTurnKey: ef.findLast(o2)?.turnKey,
                        onResponseSpacerStateChange: tI
                    }), tL ? (0, a.jsx)(l.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tB ? tQ.c : tQ.b
                    }) : null]
                })]
            }), H[155] = eU, H[156] = to, H[157] = et, H[158] = J, H[159] = ts, H[160] = X, H[161] = eg, H[162] = tN, H[163] = t0, H[164] = t1, H[165] = ef, H[166] = t5, H[167] = tj, H[168] = ey, H[169] = eC, H[170] = er, H[171] = ti, H[172] = ez, H[173] = tT, H[174] = e4, H[175] = e6, H[176] = e_, H[177] = eE, H[178] = eA, H[179] = eo, H[180] = ei, H[181] = tt, H[182] = el, H[183] = eP, H[184] = ek, H[185] = eR, H[186] = eO, H[187] = eI, H[188] = t8, H[189] = eZ, H[190] = ex, H[191] = eN, H[192] = U, H[193] = tZ, H[194] = tw, H[195] = e7.isChatPaneHidden, H[196] = e0, H[197] = eh, H[198] = tM, H[199] = tz, H[200] = eD, H[201] = e3, H[202] = Z, H[203] = tB, H[204] = eq, H[205] = te, H[206] = tc, H[207] = tF, H[208] = tL, H[209] = t$, H[210] = eu, H[211] = tu, H[212] = Y, H[213] = N) : N = H[213], H[214] !== eo || H[215] !== t7 || H[216] !== P || H[217] !== M || H[218] !== k || H[219] !== O || H[220] !== N ? (G = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": t7,
                inert: eo,
                children: [A, P, M, k, O, N]
            }), H[214] = eo, H[215] = t7, H[216] = P, H[217] = M, H[218] = k, H[219] = O, H[220] = N, H[221] = G) : G = H[221];
            let t9 = G;
            return H[222] !== tU || H[223] !== tW || H[224] !== tZ ? (L = tZ ? {
                aboveComposer: tU,
                belowMessage: tW
            } : null, H[222] = tU, H[223] = tW, H[224] = tZ, H[225] = L) : L = H[225], H[226] !== t9 ? (F = (0, a.jsx)(tg.a, {
                children: t9
            }), H[226] = t9, H[227] = F) : F = H[227], H[228] !== L || H[229] !== F ? (D = (0, a.jsx)(aB.a, {
                value: L,
                children: F
            }), H[228] = L, H[229] = F, H[230] = D) : D = H[230], D
        }

        function o2(e) {
            let {
                turn: t
            } = e;
            return t.items.some(o3)
        }

        function o3(e) {
            return "user-message" === e.type
        }

        function o4(e) {
            let {
                turn: t
            } = e;
            return t.items.some(o6)
        }

        function o6(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function o5(e) {
            let t, n, s, o = (0, r.c)(11),
                i = (0, y.useContext)(tu.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return o[0] !== e ? (t = (0, a.jsx)(o8, {
                    ...e
                }), o[0] = e, o[1] = t) : t = o[1], t
            }
            o[2] !== e.conversationId || o[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, o[2] = e.conversationId, o[3] = e.isImageEditComposer, o[4] = t) : t = o[4];
            let l = !e.isWorkConversation;
            return o[5] !== e ? (n = t => (0, a.jsx)(o8, {
                ...e,
                initialController: t
            }), o[5] = e, o[6] = n) : n = o[6], o[7] !== t || o[8] !== l || o[9] !== n ? (s = (0, a.jsx)(sR, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), o[7] = t, o[8] = l, o[9] = n, o[10] = s) : s = o[10], s
        }

        function o8(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g, f, v, b, _, w, I, T, S = (0, r.c)(81),
                {
                    composerRef: j,
                    initialController: E,
                    ...A
                } = e,
                R = (0, m.y)(z.a),
                O = (0, m.x)(k.d, A.isTemporaryChat),
                {
                    isFullscreenComposer: N
                } = A,
                G = (0, x.a)(),
                {
                    state: L
                } = (0, C.X)(),
                F = (0, m.x)(oU, A.conversationId),
                D = (0, m.x)(B.R, A.conversationId),
                H = !(!A.disabled && !A.isSharedConversation && !A.isWorkConversation && !A.isTemporaryChat && !A.isImageEditComposer && (0, tt.a)(D)) ? null : D,
                W = (0, m.x)(null == A.requiredSystemHints ? ti : null, H);
            S[0] !== W || S[1] !== A.requiredSystemHints ? (t = A.requiredSystemHints ?? (null == W ? void 0 : [W]), S[0] = W, S[1] = A.requiredSystemHints, S[2] = t) : t = S[2];
            let q = t;
            S[3] !== W || S[4] !== A.conversationId || S[5] !== R ? (n = () => {
                if (null != W) {
                    var e;
                    let t, n;
                    return e = A.conversationId, t = (0, tn.b)(R, e, [W]), n = (0, te.h)(R, {
                        draftKey: e,
                        isTemporaryChat: !1
                    }), () => {
                        if (t(), R.get(tn.a, e).includes(W)) return;
                        let a = R.get(e9.v, e).filter(e => e !== W && e !== `plugin:${e7.d}`);
                        (0, e9.S)(R, e, a, n)
                    }
                }
            }, s = [R, A.conversationId, W], S[3] = W, S[4] = A.conversationId, S[5] = R, S[6] = n, S[7] = s) : (n = S[6], s = S[7]), (0, y.useEffect)(n, s);
            let U = (0, m.x)(nc.c, A.conversationId);
            S[8] !== U || S[9] !== A.isSharedConversation || S[10] !== A.isWorkConversation || S[11] !== D ? (o = !A.isSharedConversation && !A.isWorkConversation && !(0, tt.a)(D) && !U, S[8] = U, S[9] = A.isSharedConversation, S[10] = A.isWorkConversation, S[11] = D, S[12] = o) : o = S[12];
            let K = o,
                V = K && !A.disabled && !A.isSubmitDisabled && !A.isImageEditComposer,
                Q = K ? F : void 0;
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
            let $ = (0, oG.a)(l),
                J = (0, y.useContext)(tu.a),
                X = (0, y.useRef)(!1);
            S[20] !== Y || S[21] !== J || S[22] !== E || S[23] !== A.isTemporaryChat || S[24] !== R ? (c = e => {
                null == e || null == E || X.current || (X.current = !0, (0, e9.T)(R, Y, E.getPersistedText(), {
                    isTemporaryChat: A.isTemporaryChat
                }), J?.onAdopt())
            }, S[20] = Y, S[21] = J, S[22] = E, S[23] = A.isTemporaryChat, S[24] = R, S[25] = c) : c = S[25];
            let ee = (0, ne.a)(c);
            S[26] !== ee || S[27] !== j ? (d = (0, t7.a)(j, ee), S[26] = ee, S[27] = j, S[28] = d) : d = S[28];
            let et = d,
                en = (0, y.useContext)(rS.a),
                ea = (0, m.w)(sE.a, A.conversationId),
                er = (0, m.x)(B.cb, A.conversationId),
                es = (0, m.x)(B._, A.conversationId),
                eo = (0, m.x)(e9.i, A.conversationId);
            S[29] !== es ? (u = (0, B.zb)(es), S[29] = es, S[30] = u) : u = S[30];
            let ei = u,
                el = (0, m.z)(P.j.activeTab$);
            if (S[31] !== el || S[32] !== N || S[33] !== ei || S[34] !== en) {
                let e = en?.turn.items.flatMap(it);
                h = N && el?.tabType.kind === tM.a && "generatedImages" in el.props && null != el.props.generatedImages && !ei && null != en && "in_progress" !== en.turn.status && !en.turn.hasPendingAssistantReply && !en.showPendingLoadingMessage && !e?.some(ie) && (null != en.errorMessage || e?.some(o9)) ? en.turn.messageIds.at(-1) ?? en.turnKey : null, S[31] = el, S[32] = N, S[33] = ei, S[34] = en, S[35] = h
            } else h = S[35];
            let ec = h,
                ed = (0, y.useRef)(null);
            S[36] !== ec || S[37] !== R ? (p = () => {
                null != ec && ec !== ed.current && (ed.current = ec, R.set(tT.a, "expanded"))
            }, g = [ec, R], S[36] = ec, S[37] = R, S[38] = p, S[39] = g) : (p = S[38], g = S[39]), (0, y.useEffect)(p, g);
            let eu = (0, m.w)(sH.a, N ? A.conversationId : null);
            S[40] !== W || S[41] !== H || S[42] !== $ || S[43] !== V || S[44] !== Y || S[45] !== G || S[46] !== N || S[47] !== et || S[48] !== O || S[49] !== A || S[50] !== q || S[51] !== R || S[52] !== Q || S[53] !== L?.libraryFileCreation || S[54] !== D ? (f = e => (0, a.jsxs)(tP.a, {
                children: [N && A.trackReadState && !e?.isHidden ? (0, a.jsx)(rT.a, {
                    conversationId: A.conversationId,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, A.aboveComposerContent, (0, a.jsx)(tc.a, {
                    children: (0, a.jsx)(nz.a, {
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
                        browserConversationId: (0, Z.getThreadBrowserConversationId)(R) ?? A.conversationId,
                        composerController: $,
                        conversationId: A.conversationId,
                        requiredSystemHints: q,
                        hideSystemHints: null != A.requiredSystemHints,
                        getSubmissionGuard: null != W ? () => () => R.get(B.R, A.conversationId) === D && R.get(ti, H) === W : void 0,
                        draftKey: Y,
                        onPromptChange: O,
                        selectedCustomGpt: Q,
                        targetGizmoId: Q?.id,
                        onCustomGptChange: V ? e => {
                            R.set(oU, A.conversationId, e)
                        } : void 0,
                        onCustomAgentSelected: V ? () => {
                            R.set(oU, A.conversationId, null)
                        } : void 0,
                        disableDraftPrepare: A.isSubmitDisabled || A.isSharedConversation,
                        disableSubmit: A.disabled || A.isSubmitDisabled,
                        voiceInputDisabled: A.disabled,
                        aboveComposerHeaderContent: A.voiceDisclaimer,
                        getExtraDeveloperInstructions: !A.isInlinePreview && L?.libraryFileCreation && !A.isTemporaryChat ? o7 : void 0,
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
            }), S[40] = W, S[41] = H, S[42] = $, S[43] = V, S[44] = Y, S[45] = G, S[46] = N, S[47] = et, S[48] = O, S[49] = A, S[50] = q, S[51] = R, S[52] = Q, S[53] = L?.libraryFileCreation, S[54] = D, S[55] = f) : f = S[55];
            let eh = f;
            S[56] !== R ? (v = () => {
                (0, tb.K)(R, "conversation")
            }, b = () => {
                (0, tb.K)(R, "conversation")
            }, S[56] = R, S[57] = v, S[58] = b) : (v = S[57], b = S[58]);
            let em = !A.isInlinePreview && !A.disabled && !A.isSubmitDisabled;
            S[59] !== $ || S[60] !== em ? (_ = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rP, {
                    composerController: $,
                    enabled: em
                })
            }), S[59] = $, S[60] = em, S[61] = _) : _ = S[61];
            let ep = N ? "floating" : "pane",
                eg = A.disabled || A.awaitingGptContinuation,
                ef = null == en && !ei,
                ev = eo || ei ? "loading" : "idle";
            return S[62] !== ev ? (w = {
                type: ev,
                unread: !1
            }, S[62] = ev, S[63] = w) : w = S[63], S[64] !== eu || S[65] !== A.isHidden || S[66] !== A.renderTranscript || S[67] !== eh || S[68] !== ea || S[69] !== ep || S[70] !== eg || S[71] !== ef || S[72] !== w || S[73] !== er ? (I = (0, a.jsx)(M.a, {
                notifications: eu,
                isHidden: A.isHidden,
                placement: ep,
                responsePreview: ea,
                forceExpanded: eg,
                composerOnly: ef,
                title: er,
                statusState: w,
                renderTranscript: A.renderTranscript,
                children: eh
            }), S[64] = eu, S[65] = A.isHidden, S[66] = A.renderTranscript, S[67] = eh, S[68] = ea, S[69] = ep, S[70] = eg, S[71] = ef, S[72] = w, S[73] = er, S[74] = I) : I = S[74], S[75] !== A.conversationId || S[76] !== v || S[77] !== b || S[78] !== _ || S[79] !== I ? (T = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": A.conversationId,
                onMouseDownCapture: v,
                onFocusCapture: b,
                children: [_, I]
            }), S[75] = A.conversationId, S[76] = v, S[77] = b, S[78] = _, S[79] = I, S[80] = T) : T = S[80], T
        }
        async function o7() {
            return [tk.a]
        }

        function o9(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function ie(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function it(e) {
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
                let t, n, u, h, m, p, g, f, v, y, b, x, C, _ = (0, r.c)(45),
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
                    prepareThreadEndContent: H
                } = L, {
                    addScrollListener: W,
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
                _[9] === Symbol.for("react.memo_cache_sentinel") ? (m = e => {
                    N.current = e;
                    let t = O.current;
                    return null != t && e(t.turnKey, t.element), () => {
                        N.current = null
                    }
                }, _[9] = m) : m = _[9];
                let V = (0, d.a)(m);
                _[10] !== q || _[11] !== S || _[12] !== D || _[13] !== M ? (p = () => {
                    let e = q();
                    if (null == e || 0 === e.clientHeight) return !1;
                    if (M && null != S) {
                        var t, n;
                        let a, r = (t = e, n = S, a = t.querySelector(`[data-turn-key="${CSS.escape(n)}"]`), a?.querySelector("[data-user-message-bubble]") ?? a);
                        if (null == r) return !1;
                        D(r)
                    } else D();
                    return !0
                }, _[10] = q, _[11] = S, _[12] = D, _[13] = M, _[14] = p) : p = _[14];
                let Q = (0, s.useEffectEvent)(p);
                return _[15] !== B || _[16] !== z || _[17] !== F || _[18] !== j || _[19] !== K || _[20] !== D || _[21] !== H || _[22] !== U || _[23] !== M ? (f = () => (j({
                    voiceAutoScrollEnabled: M,
                    clear: B,
                    consumeGrowth: z,
                    getHeightPx: F,
                    onTurnLayoutReady: K,
                    place: D,
                    prepareThreadEndContent: H,
                    scrollToBottom: U
                }), () => {
                    j(null)
                }), g = [B, z, F, j, K, D, H, U, M], _[15] = B, _[16] = z, _[17] = F, _[18] = j, _[19] = K, _[20] = D, _[21] = H, _[22] = U, _[23] = M, _[24] = g, _[25] = f) : (g = _[24], f = _[25]), (0, s.useLayoutEffect)(f, g), _[26] !== q || _[27] !== A || _[28] !== S || _[29] !== D || _[30] !== V || _[31] !== M ? (v = () => {
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
                }, y = [q, A, S, D, V, M], _[26] = q, _[27] = A, _[28] = S, _[29] = D, _[30] = V, _[31] = M, _[32] = v, _[33] = y) : (v = _[32], y = _[33]), (0, s.useLayoutEffect)(v, y), _[34] !== W || _[35] !== q || _[36] !== w || _[37] !== Q ? (b = () => {
                    if (null == w) return;
                    let e = !1;
                    return W(() => {
                        e || null == q() || (e = !0, e = Q())
                    })
                }, _[34] = W, _[35] = q, _[36] = w, _[37] = Q, _[38] = b) : b = _[38], _[39] !== W || _[40] !== q || _[41] !== w ? (x = [W, q, w], _[39] = W, _[40] = q, _[41] = w, _[42] = x) : x = _[42], (0, s.useLayoutEffect)(b, x), _[43] !== L ? (C = (0, a.jsx)(i.a, {
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
            m = n("jAnS");
        let p = (0, s.d)(i.a, (e, t) => {
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
                    } = (0, o.X)(),
                    {
                        gizmoId: M
                    } = (0, o.bb)(),
                    k = (0, s.x)(p, C),
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
                if (null === k || (0, m.h)(A) && null != k && !R) {
                    let e;
                    return b[6] !== I || b[7] !== A ? (e = (0, a.jsx)(o.l, {
                        replace: !0,
                        to: {
                            pathname: I,
                            search: A
                        }
                    }), b[6] = I, b[7] = A, b[8] = e) : e = b[8], e
                }
                b[9] !== C || b[10] !== L?.gizmo || b[11] !== N || b[12] !== G?.gizmo || b[13] !== k || b[14] !== _ ? (f = null != _ ? (0, o.C)(_, {
                    conversationId: k ?? C
                }) : (0, m.c)(k ?? C, {
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
                    v = E !== B || t ? (0, a.jsx)(o.l, {
                        replace: !0,
                        state: "tpp" === n || "flora" === n ? {
                            ...r,
                            workTurnVisit: (0, m.f)(T, j, P?.workTurnVisit)
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
                    m = (0, s.y)(l.a),
                    p = (0, s.z)(c.d),
                    g = (0, o.useContext)(i.a);
                return h[0] !== m ? (e = () => (m.set(c.e, !0), () => {
                    m.set(c.e, !1), (0, c.a)(m)
                }), t = [m], h[0] = m, h[1] = e, h[2] = t) : (e = h[1], t = h[2]), (0, o.useLayoutEffect)(e, t), h[3] !== g || h[4] !== p ? (n = null == p ? null : (0, a.jsx)(a.Fragment, {
                    children: [p.parent, p, p.overlay].filter(u).map(e => (0, a.jsx)(d.a.Root, {
                        animateOnMount: e.animateOnMount ?? !0,
                        fillHeight: !0,
                        fullWidth: e.isFullWidth,
                        fullWidthTransition: e.fullWidthTransition,
                        isPIPObstacle: !1,
                        portalContainer: g,
                        reserveToolbarSpace: e.reserveToolbarSpace ?? !0,
                        shouldHideInlineImmediately: e === p.parent,
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
                }), h[3] = g, h[4] = p, h[5] = n) : n = h[5], n
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
            o = n("slpy"),
            i = n("iTtm"),
            l = n("zd8w"),
            c = n("Wf1j"),
            d = n("oyxz"),
            u = n("jqIZ"),
            h = n("Cslg"),
            m = n("kphc"),
            p = n("ygO2"),
            g = n("bqtn"),
            f = n("Ot7V"),
            v = n("bf6R"),
            y = n("Bbed"),
            b = n("X6Vn"),
            x = n("SGsN"),
            C = n("bbi2"),
            _ = n("MerI"),
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
            O = n("PzQe"),
            N = n("BdXv");
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
            let m = n;
            return c[5] !== m ? (s = m ? (0, a.jsx)("span", {
                className: "truncate",
                children: m
            }) : null, c[5] = m, c[6] = s) : s = c[6], c[7] !== h ? (o = (0, a.jsx)(B, {
                gizmo: h
            }), c[7] = h, c[8] = o) : o = c[8], c[9] !== s || c[10] !== o ? (l = (0, a.jsxs)("div", {
                className: "flex min-w-0 items-center gap-1 select-none",
                children: [s, o]
            }), c[9] = s, c[10] = o, c[11] = l) : l = c[11], l
        }

        function B(e) {
            let t, n, y, L, B, z, F, D, H, W, q, U, K, V, Q, Y, Z, $, J, X, ee, et = (0, r.c)(60),
                {
                    gizmo: en
                } = e,
                ea = (0, i.y)(S.a),
                er = (0, c.a)(),
                {
                    search: es
                } = (0, u.X)(),
                eo = (0, u.Z)(),
                [ei, el] = (0, l.useState)(!1),
                ec = (0, j.h)("2160578039"),
                ed = (0, i.x)(E.a, "2513446768"),
                eu = ec && "gpt" === en.gizmo.gizmo_type && null != en.gizmo.migrated_plugin_id;
            et[0] !== ed ? (t = ed?.get("disable_gpt_updates", !1), et[0] = ed, et[1] = t) : t = et[1];
            let eh = t,
                em = en.gizmo.current_user_permission?.can_write && !eu && !eh,
                {
                    data: ep
                } = (0, i.z)(A.c);
            et[2] !== en.gizmo.id || et[3] !== ep ? (n = ep?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === en.gizmo.id
            }), et[2] = en.gizmo.id, et[3] = ep, et[4] = n) : n = et[4];
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
            }), et[15] = D) : D = et[15], et[16] !== ey ? (H = (0, a.jsx)(p.a, {
                "aria-label": ey,
                color: "ghost",
                size: "icon",
                children: D
            }), et[16] = ey, et[17] = H) : H = et[17], et[18] !== ey || et[19] !== ei || et[20] !== H ? (W = (0, a.jsx)(o.a, {
                content: ey,
                disabled: ei,
                children: H
            }), et[18] = ey, et[19] = ei, et[20] = H, et[21] = W) : W = et[21], et[22] !== en.gizmo.gizmo_type || et[23] !== en.gizmo.id || et[24] !== eo || et[25] !== ev || et[26] !== ea ? (q = "gpt" === en.gizmo.gizmo_type ? (0, a.jsxs)(g.c.Item, {
                href: ev,
                onClick: e => {
                    e.defaultPrevented || ((0, I.a)(ea, s.pc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: en.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), el(!1), (0, T.c)(ea, null), (0, m.m)(ea, "chat"), eo(ev, {
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
            }, et[35] = en, et[36] = er, et[37] = eg, et[38] = ea, et[39] = Y) : Y = et[39], et[40] !== eg ? (Z = eg ? (0, a.jsx)(d.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT",
                description: "Compact overflow-menu action that removes the current custom GPT from the user's pinned sidebar items in Codex Desktop"
            }) : (0, a.jsx)(d.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT",
                description: "Compact overflow-menu action that adds the current custom GPT to the user's pinned sidebar items in Codex Desktop"
            }), et[40] = eg, et[41] = Z) : Z = et[41], et[42] !== eb || et[43] !== Y || et[44] !== Z ? ($ = (0, a.jsx)(g.c.Item, {
                LeftIcon: eb,
                onSelect: Y,
                children: Z
            }), et[42] = eb, et[43] = Y, et[44] = Z, et[45] = $) : $ = et[45], et[46] !== em || et[47] !== ef || et[48] !== en.gizmo.current_user_permission?.can_view_config ? (J = em || en.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(g.c.Item, {
                href: ef,
                leftIconAsset: em ? N.a : O.a,
                onClick: e => {
                    (0, f.e)({
                        event: e,
                        href: ef,
                        initiator: "open_in_browser_bridge",
                        openTarget: em ? "external-browser" : void 0
                    })
                },
                children: em ? (0, a.jsx)(d.a, {
                    id: "chatgptConversations.customGpt.edit",
                    defaultMessage: "Edit GPT",
                    description: "Compact overflow-menu action that opens the current custom GPT in its ChatGPT web editor from Codex Desktop"
                }) : (0, a.jsx)(d.a, {
                    id: "chatgptConversations.customGpt.view",
                    defaultMessage: "View",
                    description: "Short action in the custom GPT overflow menu for users who can view its configuration but cannot edit it, including after migration to a plugin. Opens the read-only GPT configuration page in ChatGPT."
                })
            }) : null, et[46] = em, et[47] = ef, et[48] = en.gizmo.current_user_permission?.can_view_config, et[49] = J) : J = et[49], et[50] !== en ? (X = (0, a.jsx)(M.a, {
                resource: en
            }), et[50] = en, et[51] = X) : X = et[51], et[52] !== ei || et[53] !== W || et[54] !== q || et[55] !== Q || et[56] !== $ || et[57] !== J || et[58] !== X ? (ee = (0, a.jsxs)(g.a, {
                align: "start",
                contentWidth: "menu",
                open: ei,
                onOpenChange: el,
                triggerButton: W,
                children: [q, Q, $, J, X]
            }), et[52] = ei, et[53] = W, et[54] = q, et[55] = Q, et[56] = $, et[57] = J, et[58] = X, et[59] = ee) : ee = et[59], ee
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
                } = t, m = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_UNSPECIFIED";
                "positive" === d ? m = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE" : "negative" === d ? m = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE" : Object.is(d, null) && (m = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_CLEARED");
                let p = null == l ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_TURN_SOURCES_BUTTON" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_SOURCES_SIDEBAR_ACTION_MENU";
                "explainer" === h && (p = "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON"), (0, i.a)(e, r.W, {
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
                    feedback: m,
                    selectedFeedback: null == u ? void 0 : ({
                        positive: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE",
                        negative: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE"
                    })[u],
                    entrypoint: p,
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
            m = n("UWHW");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, g, f = (0, a.c)(11),
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
                return f[0] !== v || f[1] !== C || f[2] !== x ? (t = () => (x.set(m.b, e => new Map(e).set(C, v)), x.get(m.a)?.dismissCurrent(), () => {
                    x.set(m.b, e => {
                        let t = new Map(e);
                        return t.delete(C), t
                    })
                }), n = [v, C, x], f[0] = v, f[1] = C, f[2] = x, f[3] = t, f[4] = n) : (t = f[3], n = f[4]), (0, s.useEffect)(t, n), f[5] !== v || f[6] !== b || f[7] !== _ || f[8] !== x ? (p = () => {
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
                }, g = [v, b, _, x], f[5] = v, f[6] = b, f[7] = _, f[8] = x, f[9] = p, f[10] = g) : (p = f[9], g = f[10]), (0, s.useEffect)(p, g), null
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
            m = n("EFj1"),
            p = n("SGsN"),
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
                    turns: H,
                    loadHistory: W,
                    renderMode: q,
                    paragenEnabled: U,
                    enabled: K,
                    canCopy: V,
                    priority: Q
                } = e,
                Y = void 0 === q ? "conversation" : q,
                Z = void 0 !== U && U,
                $ = void 0 === K || K,
                J = void 0 === V || V,
                X = void 0 === Q ? "fallback" : Q,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            F[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), F[0] = t) : t = F[0], F[1] !== J || F[2] !== D || F[3] !== $ || F[4] !== W || F[5] !== Z || F[6] !== Y ? (n = [D, $, J, W, Y, Z], F[1] = J, F[2] = D, F[3] = $, F[4] = W, F[5] = Z, F[6] = Y, F[7] = n) : n = F[7], (0, c.useEffect)(t, n), F[8] !== J || F[9] !== D || F[10] !== Z || F[11] !== Y || F[12] !== ee || F[13] !== H ? (A = () => {
                let e = ee.get(C.j, D),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(C.x, D);
                if (!J || "tpp" === n || "flora" === n) return null;
                let a = ee.get(C.L, D),
                    r = Z && "conversation" === Y ? ee.get(I.a, D)?.promptMessageId : void 0,
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
            }, F[8] = J, F[9] = D, F[10] = Z, F[11] = Y, F[12] = ee, F[13] = H, F[14] = A) : A = F[14];
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
                    e && !t?.aborted && ee.get(p.f).success((0, a.jsx)(d.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard",
                        description: "Success toast after the user copies the last assistant code block using the keyboard shortcut or command menu in Chat mode"
                    }))
                })
            }, F[15] = ee, F[16] = G) : G = F[16];
            let ea = G;
            return F[17] !== D || F[18] !== en || F[19] !== W || F[20] !== Z || F[21] !== Y || F[22] !== ee || F[23] !== ea ? (B = () => {
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
                    s = ee.get(C.B, D),
                    o = ee.get(h.f).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(C.B, D) !== s || Z && "conversation" === Y && t(I.a, D)?.promptMessageId !== n || t(h.f).copyLastCodeBlock !== o) && a.abort()
                    });
                ea((async () => {
                    await (0, _.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, F[17] = D, F[18] = en, F[19] = W, F[20] = Z, F[21] = Y, F[22] = ee, F[23] = ea, F[24] = B) : B = F[24], F[25] !== $ || F[26] !== X ? (z = {
                enabled: $,
                priority: X
            }, F[25] = $, F[26] = X, F[27] = z) : z = F[27], (0, m.a)("copyLastCodeBlock", B, z), null
        }

        function L() {}
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
            m = n("bg18"),
            p = n("zd8w"),
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
                    if (null != r) return (0, f.a)(a, (0, m.Oe)(`chatgpt:${r}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, p.useLayoutEffect)(e, t), null
        }
        n("n5iL"), n("q3HK"), n("bf6R");
        var b = n("rBfn"),
            x = n("enMl"),
            C = n("PCEr");

        function _(e) {
            let t, n, s, o, l, c, d = (0, r.c)(16),
                {
                    chatIcon: m,
                    header: p,
                    title: g,
                    isArchivedPreview: f,
                    children: v
                } = e;
            return d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(i.a.MainContentLayout, {
                layout: (0, h.a)() ? "default" : "thread-edge-scroll"
            }), d[0] = t) : t = d[0], d[1] !== f ? (n = f ? null : (0, a.jsx)(u.SitePreviewBridge, {}), d[1] = f, d[2] = n) : n = d[2], d[3] !== p ? (s = null == p ? null : (0, a.jsx)(i.a.Header, {
                desktopPlacement: "titlebar",
                divider: !1,
                children: p
            }), d[3] = p, d[4] = s) : s = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(i.a.RightPanelOutlet, {
                children: (0, a.jsx)(i.a.RightPanelTabs, {})
            }), d[5] = o) : o = d[5], d[6] !== m || d[7] !== p || d[8] !== f || d[9] !== g ? (l = f ? null : (0, a.jsx)(w, {
                chatIcon: m,
                mainToolbar: p,
                title: g
            }), d[6] = m, d[7] = p, d[8] = f, d[9] = g, d[10] = l) : l = d[10], d[11] !== v || d[12] !== n || d[13] !== s || d[14] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, s, v, o, l]
            }), d[11] = v, d[12] = n, d[13] = s, d[14] = l, d[15] = c) : c = d[15], c
        }

        function w(e) {
            let t, n, i, u, m, p, f = (0, r.c)(13),
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
            }), f[5] = T, f[6] = u) : u = f[6], f[7] !== I.value.routeKind ? (m = "other" === I.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(b.b, {
                showLauncherButton: !1
            }), f[7] = I.value.routeKind, f[8] = m) : m = f[8], f[9] !== i || f[10] !== u || f[11] !== m ? (p = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i, u, m, null, null]
            }), f[9] = i, f[10] = u, f[11] = m, f[12] = p) : p = f[12], p
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
                let m = d;
                if (null != t) {
                    let e;
                    return h[12] !== t ? (e = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(a.Fragment, {
                            children: t
                        }), null]
                    }), h[12] = t, h[13] = e) : e = h[13], e
                }
                return h[14] !== m ? (u = (0, a.jsx)(a.Fragment, {
                    children: m
                }), h[14] = m, h[15] = u) : u = h[15], u
            },
            b: function(e) {
                let t, n, i, l, c = (0, r.c)(10),
                    {
                        allowsThreadContentOverlap: d,
                        children: u,
                        menu: h
                    } = e,
                    m = void 0 !== d && d;
                return c[0] !== u ? (t = {
                    actionId: "chatgpt-conversation-actions",
                    order: 100,
                    content: u
                }, c[0] = u, c[1] = t) : t = c[1], c[2] !== h ? (n = {
                    actionId: "chatgpt-conversation-overflow",
                    order: 0,
                    content: h
                }, c[2] = h, c[3] = n) : n = c[3], c[4] !== t || c[5] !== n ? (i = [t, n], c[4] = t, c[5] = n, c[6] = i) : i = c[6], c[7] !== m || c[8] !== i ? (l = (0, a.jsx)(a.Fragment, {
                    children: i.map(e => {
                        let {
                            actionId: t,
                            order: n,
                            content: r
                        } = e;
                        return null == r ? null : (0, a.jsx)(o.a.HeaderAction, {
                            actionId: t,
                            align: "end",
                            allowsThreadContentOverlap: m,
                            order: n,
                            children: (0, a.jsx)("div", {
                                className: (0, s.b)("flex items-center gap-toolbar-action", m && "browser:rounded-lg browser:bg-surface"),
                                children: r
                            })
                        }, t)
                    })
                }), c[7] = m, c[8] = i, c[9] = l) : l = c[9], l
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
        let m = (0, d.a)(async () => (await n.e(306529).then(n.bind(n, "GkN4"))).GptReportDialog);
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, p, g = (0, r.c)(9),
                    {
                        resource: f,
                        onSelect: v
                    } = e,
                    y = (0, s.y)(h.a),
                    b = (0, s.z)(i.f);
                return null == b || f.gizmo.tags?.includes("first_party") || "marketplace" !== f.gizmo.share_recipient && "link" !== f.gizmo.share_recipient ? null : (g[0] !== b || g[1] !== v || g[2] !== f || g[3] !== y ? (t = () => {
                    v?.(), (0, u.f)(y, m, {
                        accountId: b,
                        resource: f
                    })
                }, g[0] = b, g[1] = v, g[2] = f, g[3] = y, g[4] = t) : t = g[4], g[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(l.c.ItemIcon, {
                    children: (0, a.jsx)(c.qd, {})
                }), d = (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.report.action",
                    defaultMessage: "Report GPT",
                    description: "Menu action to report a publicly shared third-party GPT"
                }), g[5] = n, g[6] = d) : (n = g[5], d = g[6]), g[7] !== t ? (p = (0, a.jsxs)(l.c.Item, {
                    onSelect: t,
                    children: [n, d]
                }), g[7] = t, g[8] = p) : p = g[8], p)
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
            m = n("u9iS");
        let p = (0, l.a)(async () => (await n.e(901042).then(n.bind(n, "ut8h"))).GptPluginMigrationBannerContent, {
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
            return n[0] !== i || n[1] !== s ? (t = i ? (0, a.jsx)(p, {
                gizmoId: s
            }, s) : null, n[0] = i, n[1] = s, n[2] = t) : t = n[2], t
        }

        function f(e) {
            let t, n, s = (0, r.c)(10),
                {
                    gizmoId: l
                } = e,
                d = (0, o.y)(c.a),
                p = (0, i.X)(),
                g = (0, i.Z)(),
                {
                    data: f
                } = (0, o.x)(u.b, l);
            s[0] !== l || s[1] !== p.pathname ? (t = {
                gizmoId: l,
                visitKey: p.pathname
            }, s[0] = l, s[1] = p.pathname, s[2] = t) : t = s[2];
            let v = (0, o.x)(m.c, t);
            return s[3] !== v || s[4] !== l || s[5] !== p.pathname || s[6] !== g || s[7] !== f || s[8] !== d ? (n = v && f?.gizmo.migrated_plugin_id ? (0, a.jsx)(h.a, {
                gptName: f.gizmo.display.name,
                accessState: "error",
                onUsePlugin: () => void g("/plugins"),
                onKeepUsingGpt: () => (0, m.a)(d, {
                    gizmoId: l,
                    visitKey: p.pathname
                })
            }) : null, s[3] = v, s[4] = l, s[5] = p.pathname, s[6] = g, s[7] = f, s[8] = d, s[9] = n) : n = s[9], n
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
                let t, n, m, p, g, f, v, y, b, x = (0, r.c)(34),
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
                    }), x[7] = E, x[8] = e) : e = x[8], m = e
                } else if ("error" === _) {
                    let e;
                    x[9] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessError",
                        defaultMessage: "We couldn’t check your access to the plugin. Try again, or keep using this GPT until {deadline}.",
                        description: "Migrated GPT notice after a failed plugin-access check; deadline is the localized retirement date",
                        values: {
                            deadline: E
                        }
                    }), x[9] = E, x[10] = e) : e = x[10], m = e
                } else if ("denied" === _) {
                    let e;
                    x[11] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessDenied",
                        defaultMessage: "This plugin isn’t available to you. You can keep using this GPT until {deadline}.",
                        description: "Migrated GPT notice when the destination plugin is inaccessible; deadline is the localized retirement date",
                        values: {
                            deadline: E
                        }
                    }), x[11] = E, x[12] = e) : e = x[12], m = e
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
                    }), x[13] = E, x[14] = C, x[15] = e) : e = x[15], m = e
                } else {
                    let e;
                    x[16] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceBody",
                        defaultMessage: "This GPT is now available as a plugin. You can keep using this GPT until {deadline}.",
                        description: "Explains the migrated GPT choice when the GPT has no display name; deadline is a localized month and day.",
                        values: {
                            deadline: E
                        }
                    }), x[16] = E, x[17] = e) : e = x[17], m = e
                }
                x[18] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(c.a, {
                    asset: h.a,
                    className: "text-secondary"
                }), x[18] = p) : p = x[18], x[19] !== C ? (g = C.trim() ? (0, a.jsx)(o.a, {
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
                }), x[27] = f, x[28] = v, x[29] = y) : y = x[29], x[30] !== m || x[31] !== g || x[32] !== y ? (b = (0, a.jsx)("div", {
                    className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                    children: (0, a.jsx)(i.a, {
                        variant: "announcement",
                        icon: p,
                        stackOnNarrow: !0,
                        wrapCtas: !0,
                        title: g,
                        content: m,
                        customCtas: y
                    })
                }), x[30] = m, x[31] = g, x[32] = y, x[33] = b) : b = x[33], b
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
            m = (0, r.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(h, e)?.course_id ?? null
            });
        n.d(t, {}, {
            a: m,
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
            m = n("jfiJ"),
            p = n("FGJH");

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
                    I = (0, s.x)(p.c, w ?? x),
                    T = (0, u.b)(),
                    S = (0, o.useRef)(null);
                b[0] !== C || b[1] !== w ? (t = () => {
                    null != w && (0, m.b)(C, w, i.flushSync)
                }, b[0] = C, b[1] = w, b[2] = t) : t = b[2];
                let j = t;
                b[3] !== x || b[4] !== j || b[5] !== C || b[6] !== w ? (n = () => {
                    let e = C.get(p.c, w ?? x);
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
            m = n("nlNF"),
            p = n("OcxA"),
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
                    r = t.get(m.d);
                t.set(j, a), (0, C.T)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(n => {
                    n && t.get(j) === a && t.get(m.d) === r && f((0, S.c)(e.gizmo.id))
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
                    nativeIcon: (0, p.b)(e.gizmo.display.emoji),
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
                        showMoveToProject: m
                    } = e,
                    p = void 0 === m || m,
                    g = (0, s.y)(f.a),
                    v = (0, l.Z)(),
                    b = (0, s.z)(y.a),
                    x = (0, s.z)(C.m),
                    w = (0, _.b)();
                if (i[0] !== d || i[1] !== v || i[2] !== u || i[3] !== x || i[4] !== h || i[5] !== w || i[6] !== b || i[7] !== g || i[8] !== p) {
                    let e = E({
                            scope: g,
                            conversation: d,
                            project: h,
                            projectListQuery: b,
                            pinnedProjectsQuery: x,
                            showMoveToProject: p,
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
                    t = e.map(n), i[0] = d, i[1] = v, i[2] = u, i[3] = x, i[4] = h, i[5] = w, i[6] = b, i[7] = g, i[8] = p, i[9] = t
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
                m = e => {
                    if (null == e) return;
                    let t = [e.start_message_id, ...r[e.id] ?? []].flatMap(e => {
                        let t = null == e ? void 0 : h.get(e);
                        return null == t ? [] : [t]
                    });
                    return 0 === t.length ? void 0 : Math.min(...t)
                },
                p = o[i + 1],
                g = m(l),
                f = m(p),
                v = l?.start_message_id != null && null == g || p?.start_message_id != null && null == f,
                y = s?.status === "sending" && (s.sectionId === l?.id || s.sectionId === p?.id),
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
            m = n("gsAl");
        let p = (0, o.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function g(e) {
            let t, n, o, l = (0, r.c)(9),
                {
                    imageOnly: u
                } = e,
                p = (0, s.y)(h.a),
                g = (0, s.x)(m.e, (0, c.a)());
            return null == g ? null : (l[0] !== u || l[1] !== p || l[2] !== g.id ? (t = () => f(p, g.id, u), l[0] = u, l[1] = p, l[2] = g.id, l[3] = t) : t = l[3], l[4] !== u ? (n = u ? (0, a.jsx)(i.a, {
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
            (0, u.f)(e, p, {
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
                    children: m
                } = e,
                p = (0, c.a)(),
                g = (0, s.z)(i.l),
                f = (0, s.z)(l.l);
            h[0] !== p.authMethod || h[1] !== g.status || h[2] !== f ? (t = function(e) {
                let {
                    authMethod: t,
                    chatGptAccessStatus: n,
                    isWorkOnlyChatDisabled: a
                } = e;
                return "chatgpt" === t && "allowed" === n && !a
            }({
                authMethod: p.authMethod,
                chatGptAccessStatus: g.status,
                isWorkOnlyChatDisabled: f
            }), h[0] = p.authMethod, h[1] = g.status, h[2] = f, h[3] = t) : t = h[3];
            let v = t;
            return v || null != m ? (h[4] !== v ? (n = v ? (0, a.jsx)(d.a, {}) : null, h[4] = v, h[5] = n) : n = h[5], h[6] !== m || h[7] !== n ? (u = (0, a.jsx)(o.a.HeaderAction, {
                actionId: "chatgpt-shared-post-actions",
                align: "end",
                allowsThreadContentOverlap: !0,
                order: 100,
                children: (0, a.jsxs)("div", {
                    className: "flex items-center gap-2 browser:rounded-lg browser:bg-surface",
                    children: [m, n]
                })
            }), h[6] = m, h[7] = n, h[8] = u) : u = h[8], u) : null
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
            m = n("Ow2S"),
            p = n("fDfx"),
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
                        t = (0, d.e)(w ?? (null == T ? "" : S.get(m.s, T)), {
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
                    return null == w && null != C && "string" == typeof T && null != (0, p.j)(S, T) && "tpp" !== e && "flora" !== e && (0, m.O)(S, C, t.getChatGptPrompt().systemHints), t
                }), b[2] = C, b[3] = T, b[4] = w, b[5] = I, b[6] = S, b[7] = n) : n = b[7];
                let [j] = (0, l.useState)(n);
                b[8] !== j || b[9] !== x ? (r = x ?? j(), b[8] = j, b[9] = x, b[10] = r) : r = b[10];
                let E = r,
                    A = (0, l.useRef)(null);
                b[11] !== E || b[12] !== T || b[13] !== S ? (f = () => {
                    if (null == T) return;
                    let e = S.get(m.s, T);
                    return null != A.current && A.current !== e && E.restoreDraft(e), () => {
                        A.current = S.get(m.s, T)
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
                let t, n, u, h, m = (0, a.c)(12),
                    p = (0, s.y)(l.a),
                    g = (0, o.a)();
                return m[0] !== e || m[1] !== p ? (t = t => (0, d.u)({
                    scope: p,
                    conversationId: e,
                    deleteArtifacts: t
                }), m[0] = e, m[1] = p, m[2] = t) : t = m[2], m[3] !== p ? (n = () => p.queryClient.invalidateQueries({
                    queryKey: [d.a]
                }), m[3] = p, m[4] = n) : n = m[4], m[5] !== g || m[6] !== p ? (u = () => {
                    p.get(i.f).danger(g.formatMessage(c.a.deleteError), {
                        errorAnalytics: {
                            toastId: "archived_conversations_modal_delete_failed"
                        }
                    })
                }, m[5] = g, m[6] = p, m[7] = u) : u = m[7], m[8] !== t || m[9] !== n || m[10] !== u ? (h = {
                    mutationFn: t,
                    onSuccess: n,
                    onError: u
                }, m[8] = t, m[9] = n, m[10] = u, m[11] = h) : h = m[11], (0, r.a)(h)
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
                        homePath: m,
                        onUnavailable: p,
                        children: g
                    } = e,
                    f = (0, r.y)(l.a),
                    v = (0, o.Z)(),
                    y = (0, s.useRef)(!1);
                d[0] !== m || d[1] !== h || d[2] !== v || d[3] !== p || d[4] !== f ? (t = () => {
                    p?.(), f.get(i.f).info(h, {
                        id: "conversation-inaccessible",
                        duration: 5
                    }), v(m, {
                        replace: !0
                    })
                }, d[0] = m, d[1] = h, d[2] = v, d[3] = p, d[4] = f, d[5] = t) : t = d[5];
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
                [C] = (0, o.useState)(m);
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
                p(v);
                let t = document.title;
                return () => {
                    document.title === t && p(e)
                }
            }, h = [v], f[10] = v, f[11] = d, f[12] = h) : (d = f[11], h = f[12]), (0, o.useEffect)(d, h), null
        }

        function m() {
            return Symbol()
        }

        function p(e) {
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
                return n(u)[m(e)] ?? null
            });

        function m(e) {
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
                        [m(t)]: null == n ? null : {
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
            m = n("OtLV"),
            p = n("sfmI"),
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
                let t, n, E, A, P, M, k, R, O, N, G, L, B, z, F = (0, r.c)(59),
                    {
                        conversationId: D,
                        kind: H
                    } = e,
                    W = (0, o.y)(C.a),
                    q = (0, l.a)(),
                    U = (0, d.X)(),
                    K = (0, d.Z)(),
                    V = (0, o.z)(T.h),
                    Q = (0, o.z)(u.h),
                    Y = (0, o.z)(u.g);
                F[0] !== Q || F[1] !== D || F[2] !== Y || F[3] !== H || F[4] !== V ? (t = "chatgpt" === H && V?.kind === "chatgpt" && V.conversation.id === D && (0, p.a)(V.conversation, Q, Y) ? V.conversation : null, F[0] = Q, F[1] = D, F[2] = Y, F[3] = H, F[4] = V, F[5] = t) : t = F[5];
                let Z = t,
                    [$, J] = (0, i.useState)(!1),
                    {
                        mutate: X,
                        isPending: ee
                    } = (0, f.a)(D);
                F[6] !== U.hash || F[7] !== U.pathname || F[8] !== U.search || F[9] !== K || F[10] !== W ? (n = () => {
                    (0, T.e)(W), K({
                        pathname: U.pathname,
                        search: U.search,
                        hash: U.hash
                    }, {
                        replace: !0,
                        state: null
                    })
                }, F[6] = U.hash, F[7] = U.pathname, F[8] = U.search, F[9] = K, F[10] = W, F[11] = n) : n = F[11];
                let et = n,
                    en = (0, o.z)(T.g);
                F[12] !== D || F[13] !== en ? (E = en?.find(e => (0, S.a)(e.task) === `hosted:${D}`), F[12] = D, F[13] = en, F[14] = E) : E = F[14];
                let ea = E;
                F[15] !== D || F[16] !== W ? (A = () => {
                    let e = W.get(T.h);
                    return null != e && (0, S.a)(e) === `hosted:${D}` ? (0, T.d)(W, e) : void 0
                }, F[15] = D, F[16] = W, F[17] = A) : A = F[17], F[18] !== D || F[19] !== H || F[20] !== W ? (P = async () => {
                    if ("cloud" === H) {
                        await w.a.safePost("/wham/tasks/{task_id}/recover", {
                            parameters: {
                                path: {
                                    task_id: D
                                }
                            }
                        }), (0, x.c)(W, D, !1);
                        return
                    }
                    await (0, g.W)({
                        scope: W,
                        conversationId: D
                    })
                }, F[18] = D, F[19] = H, F[20] = W, F[21] = P) : P = F[21], F[22] !== D || F[23] !== et || F[24] !== H || F[25] !== W ? (M = (e, t, n) => {
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
                        id: `unarchive-thread-${H}:${D}`
                    })
                }, F[22] = D, F[23] = et, F[24] = H, F[25] = W, F[26] = M) : M = F[26], F[27] !== q || F[28] !== W ? (k = (e, t, n) => {
                    n?.(null), W.get(y.f).danger(q.formatMessage(_.a.unarchiveError), {
                        errorAnalytics: {
                            toastId: "previewFooter.onError.unarchiveError"
                        }
                    })
                }, F[27] = q, F[28] = W, F[29] = k) : k = F[29], F[30] !== A || F[31] !== P || F[32] !== M || F[33] !== k ? (R = {
                    onMutate: A,
                    mutationFn: P,
                    onSuccess: M,
                    onError: k
                }, F[30] = A, F[31] = P, F[32] = M, F[33] = k, F[34] = R) : R = F[34];
                let {
                    mutate: er,
                    isPending: es,
                    isSuccess: eo
                } = (0, s.a)(R);
                F[35] !== X || F[36] !== K || F[37] !== W ? (O = e => {
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
                }, F[35] = X, F[36] = K, F[37] = W, F[38] = O) : O = F[38];
                let ei = O;
                F[39] !== Z ? (N = null == Z ? void 0 : () => J(!0), F[39] = Z, F[40] = N) : N = F[40];
                let el = eo || ea?.status === "restored",
                    ec = es || ea?.status === "restoring";
                return F[41] !== er ? (G = () => er(), F[41] = er, F[42] = G) : G = F[42], F[43] !== et || F[44] !== ee || F[45] !== N || F[46] !== el || F[47] !== ec || F[48] !== G ? (L = (0, a.jsx)(I.a, {
                    deleting: ee,
                    onDelete: N,
                    restored: el,
                    restoring: ec,
                    onUnarchive: G,
                    onDone: et
                }), F[43] = et, F[44] = ee, F[45] = N, F[46] = el, F[47] = ec, F[48] = G, F[49] = L) : L = F[49], F[50] !== Z || F[51] !== ei || F[52] !== q || F[53] !== $ || F[54] !== ee ? (B = null != Z && (0, a.jsx)(h.a, {
                    allowArtifactDeletion: !0,
                    title: Z.title?.trim() || q.formatMessage(m.a.newChat),
                    open: $,
                    isDeleting: ee,
                    onOpenChange: J,
                    onConfirm: ei
                }), F[50] = Z, F[51] = ei, F[52] = q, F[53] = $, F[54] = ee, F[55] = B) : B = F[55], F[56] !== L || F[57] !== B ? (z = (0, a.jsxs)(a.Fragment, {
                    children: [L, B]
                }), F[56] = L, F[57] = B, F[58] = z) : z = F[58], z
            }
        })
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