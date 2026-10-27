export const __rspack_esm_id = 342541;
export const __rspack_esm_ids = [342541];
export const __webpack_modules__ = {
    bn59: (function(e, t, n) {
        n.d(t, {
            a: () => B,
            ChatSeatAccessScreen: () => G
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
            b = n("Ietk"),
            x = n("twmu"),
            C = n("EOo5"),
            _ = n("Kwur"),
            w = n("udGC"),
            I = n("aTcy"),
            T = n("JNtf"),
            j = n("mUDD"),
            S = n("Ot7V"),
            E = n("SGsN"),
            P = n("DAA7"),
            A = n("yGJW"),
            M = n("GDNt");

        function k(e) {
            let t, n, l, c, d, u, p, v, y, M, k, O, G, z, B, L, F, D, H, W, q, U, K = (0, r.c)(70),
                {
                    account: V,
                    accountId: Y,
                    userId: Q,
                    onClose: $,
                    onSwitchToWork: Z
                } = e,
                J = (0, s.y)(m.a),
                X = (0, f.a)(),
                {
                    email: ee
                } = (0, C.a)(),
                [et, en] = (0, o.useState)(),
                ea = (0, o.useRef)(!0);
            K[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => (ea.current = !0, () => {
                ea.current = !1
            }), n = [], K[0] = t, K[1] = n) : (t = K[0], n = K[1]), (0, o.useEffect)(t, n);
            let er = "account-owner" === V.account.account_user_role,
                es = "account-admin" === V.account.account_user_role,
                eo = !0 === V.entitlement.has_active_subscription,
                ei = (er || es) && eo,
                el = er || ei;
            K[2] !== ei || K[3] !== er ? (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE", ei ? l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY" : er && (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE"), K[2] = ei, K[3] = er, K[4] = l) : l = K[4], K[5] !== V.account.account_user_role || K[6] !== l || K[7] !== eo || K[8] !== J ? (c = (e, t) => {
                (0, A.a)(J, g.ld, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: V.account.account_user_role ?? void 0,
                    hasPaidSubscription: eo
                })
            }, K[5] = V.account.account_user_role, K[6] = l, K[7] = eo, K[8] = J, K[9] = c) : c = K[9];
            let ec = c;
            K[10] !== $ ? (d = () => {
                $(), (0, S.f)({
                    href: new URL("/codex/cloud", I.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, K[10] = $, K[11] = d) : d = K[11];
            let ed = d;
            K[12] !== V.account.subscription_seat_pools_enabled || K[13] !== Y || K[14] !== ed || K[15] !== ei || K[16] !== ee || K[17] !== X || K[18] !== er || K[19] !== ec || K[20] !== $ || K[21] !== Z || K[22] !== et || K[23] !== J || K[24] !== Q ? (u = async () => {
                if ("requesting" !== et) {
                    if (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), er && !ei) {
                        let e = new URL("/admin/members", I.h);
                        e.searchParams.set("account_id", Y), ee && e.searchParams.set("search", ee);
                        let t = e.toString(),
                            n = (0, P.c)(J, t, Y),
                            a = null == n ? null : await n;
                        $(), (0, S.f)({
                            href: a ?? t,
                            initiator: "open_in_browser_bridge",
                            openTarget: null == a ? void 0 : "external-browser"
                        });
                        return
                    }
                    en("requesting");
                    try {
                        if (ei) {
                            if (V.account.subscription_seat_pools_enabled ? await _.Request.safePost("/accounts/{account_id}/users/{user_id}/seat/update", {
                                    parameters: {
                                        path: {
                                            account_id: Y,
                                            user_id: Q
                                        }
                                    },
                                    requestBody: {
                                        operation: "switch",
                                        seat_type: "default"
                                    },
                                    isExpectedError: R
                                }) : await _.Request.safePatch("/accounts/{account_id}/users/{user_id}", {
                                    parameters: {
                                        path: {
                                            account_id: Y,
                                            user_id: Q
                                        }
                                    },
                                    additionalHeaders: {
                                        "X-OpenAI-Account-User-Update-Source": "web_usage_based_workspace_access_modal"
                                    },
                                    requestBody: {
                                        seat_type: "default"
                                    }
                                }), !ea.current) return;
                            (0, w.e)(J), await (0, b.g)("accounts-check"), await Promise.all([J.query.invalidate(x.b, Y), J.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), ea.current && $()
                        } else {
                            if (await _.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: Y
                                        }
                                    }
                                }), !ea.current) return;
                            Z ? ($(), Z()) : ed(), J.get(E.f).success(X.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted",
                                description: "Success toast shown after requesting ChatGPT access from the modal"
                            }))
                        }
                    } catch (e) {
                        ea.current && en(N(e) ?? "error")
                    }
                }
            }, K[12] = V.account.subscription_seat_pools_enabled, K[13] = Y, K[14] = ed, K[15] = ei, K[16] = ee, K[17] = X, K[18] = er, K[19] = ec, K[20] = $, K[21] = Z, K[22] = et, K[23] = J, K[24] = Q, K[25] = u) : u = K[25];
            let eu = u;
            K[26] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.title",
                defaultMessage: "You don’t have access to Chat on this plan",
                description: "Title of the seat access explanation on the Chat surface. Chat is a product name."
            }), K[26] = p) : p = K[26];
            let eh = p;
            K[27] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.message",
                defaultMessage: "You are assigned Work access only. Reach out to your admin to request access to ChatGPT.",
                description: "Explanation for workspace members who need admin approval for ChatGPT access"
            }), K[27] = v) : v = K[27];
            let ep = v;
            if (el) {
                let e;
                K[28] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.ownerMessage",
                    defaultMessage: "Your current seat is Work-only. Update your seat type in Workspace settings to start using ChatGPT.",
                    description: "Explanation for workspace owners and paid admins who can update their seat to get ChatGPT access"
                }), K[28] = e) : e = K[28], ep = e
            } else if (es) {
                let e;
                K[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.adminMessage",
                    defaultMessage: "You are assigned Work access only. Ask your workspace owner to buy ChatGPT seats, then update your seat type in Workspace settings.",
                    description: "Explanation for unpaid workspace admins who need an owner to buy ChatGPT seats"
                }), K[29] = e) : e = K[29], ep = e
            }
            K[30] !== ec || K[31] !== $ ? (y = e => {
                e || (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED"), $())
            }, K[30] = ec, K[31] = $, K[32] = y) : y = K[32], K[33] !== eu ? (M = e => {
                e.preventDefault(), eu()
            }, K[33] = eu, K[34] = M) : M = K[34], K[35] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, a.jsx)(T.e, {
                className: "heading-lg font-semibold",
                children: eh
            }), K[35] = k) : k = K[35], K[36] !== ep ? (O = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [k, (0, a.jsx)(T.d, {
                    className: "text-lg leading-6 text-secondary",
                    children: ep
                })]
            }), K[36] = ep, K[37] = O) : O = K[37];
            let em = "requesting" === et,
                eg = "requesting" === et;
            return K[38] !== el ? (G = el ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.updateSeatButton",
                defaultMessage: "Update seat",
                description: "Updates the current user's seat to include ChatGPT"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access",
                description: "Requests ChatGPT access from a workspace administrator"
            }), K[38] = el, K[39] = G) : G = K[39], K[40] !== em || K[41] !== eg || K[42] !== G ? (z = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: em,
                disabled: eg,
                children: G
            }), K[40] = em, K[41] = eg, K[42] = G, K[43] = z) : z = K[43], K[44] !== ed || K[45] !== ec || K[46] !== $ || K[47] !== Z ? (B = () => {
                Z ? ($(), Z()) : (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), ed())
            }, K[44] = ed, K[45] = ec, K[46] = $, K[47] = Z, K[48] = B) : B = K[48], K[49] !== Z ? (L = Z ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work",
                description: "Switches from the Chat access explanation to the available Work surface"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex",
                description: "Returns to Codex from the Chat access explanation"
            }), K[49] = Z, K[50] = L) : L = K[50], K[51] !== B || K[52] !== L ? (F = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: B,
                children: L
            }), K[51] = B, K[52] = L, K[53] = F) : F = K[53], K[54] !== z || K[55] !== F ? (D = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [z, F]
            }), K[54] = z, K[55] = F, K[56] = D) : D = K[56], K[57] !== X || K[58] !== et ? (H = null != et && "requesting" !== et ? (0, a.jsx)("p", {
                className: "text-sm text-secondary",
                role: "alert",
                children: "error" !== et ? (0, a.jsx)(i.a, {
                    id: "businessSeatRenewal.wait",
                    defaultMessage: "Seat changes are temporarily unavailable. Please try again after {time}.",
                    description: "Error during a Business seat change when billing has not caught up. time is the suggested retry date and time in the user's locale and time zone, not a guaranteed completion time.",
                    values: {
                        time: X.formatDate(et.retry_at, {
                            dateStyle: "medium",
                            timeStyle: "short"
                        })
                    }
                }) : (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.errorMessage",
                    defaultMessage: "Could not request access. Please contact your workspace administrator to grant ChatGPT access.",
                    description: "Error after a seat update or access request fails. The primary action can be retried."
                })
            }) : null, K[57] = X, K[58] = et, K[59] = H) : H = K[59], K[60] !== O || K[61] !== D || K[62] !== H ? (W = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-8 p-10 text-center",
                children: [O, D, H]
            }), K[60] = O, K[61] = D, K[62] = H, K[63] = W) : W = K[63], K[64] !== W || K[65] !== M ? (q = (0, a.jsx)(j.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: M,
                children: W
            }), K[64] = W, K[65] = M, K[66] = q) : q = K[66], K[67] !== q || K[68] !== y ? (U = (0, a.jsx)(T.b, {
                open: !0,
                size: "wide",
                variant: "chatgpt",
                onOpenChange: y,
                children: q
            }), K[67] = q, K[68] = y, K[69] = U) : U = K[69], U
        }

        function R(e) {
            return null != N(e)
        }

        function N(e) {
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
        var O = n("pBDs");

        function G(e) {
            let t, n, o = (0, r.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, s.y)(m.a),
                p = (0, s.z)(O.a),
                g = (0, s.z)(d.t),
                f = (0, l.Y)();
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
                f = (0, s.z)(O.a),
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
            }), u[3] = l) : l = u[3], u[4] !== v || u[5] !== g || u[6] !== f.account || u[7] !== f.accountId || u[8] !== f.userId ? (c = v ? null : (0, a.jsx)(k, {
                account: f.account,
                accountId: f.accountId,
                userId: f.userId,
                onClose: () => y(!0),
                onSwitchToWork: g
            }), u[4] = v, u[5] = g, u[6] = f.account, u[7] = f.accountId, u[8] = f.userId, u[9] = c) : c = u[9], u[10] !== t || u[11] !== c ? (d = (0, a.jsxs)(a.Fragment, {
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
            return l ? d.isLoading ? null : (o[1] !== d.isCapable || o[2] !== i ? (n = d.isCapable ? (0, a.jsx)(G, {}) : i, o[1] = d.isCapable, o[2] = i, o[3] = n) : n = o[3], n) : i
        }
    }),
    Pyg2: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("rjva"),
            i = n("ZIh4");

        function l(e) {
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
        n.d(t, {
            a: () => l
        })
    }),
    AZW7: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("zd8w"),
            o = n("kjQz"),
            i = n("dJBt");

        function l(e) {
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
        n.d(t, {
            a: () => l
        })
    }),
    kmKV: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("Qgfj"),
            i = n("Wf1j"),
            l = n("oyxz"),
            c = n("QcW8"),
            d = n("ZU27"),
            u = n("ygO2"),
            h = n("rmk3"),
            p = n("bf6R"),
            m = n("CqQF"),
            g = n("tSEg"),
            f = n("dt6g"),
            v = n("WwnD"),
            y = n("erBs");
        let b = (0, s.c)(g.a, e => {
            let {
                get: t
            } = e;
            return null == t(c.Z) ? "hidden" : null != t(d.j.activeTab$) ? "split" : "tab"
        });

        function x(e) {
            let t, n, i = (0, r.c)(6),
                l = (0, s.y)(g.a),
                c = (0, s.z)(b);
            i[0] !== c || i[1] !== l ? (t = "hidden" === c ? [] : [{
                id: "full-view",
                icon: p.N,
                message: (0, o.e)({
                    id: "quickChat.dock.openTab",
                    defaultMessage: "Open in full view",
                    description: "Opens the existing Chat in a tab that fills the workspace"
                }),
                onSelect: () => {
                    (0, f.a)(l, "context_menu", () => (0, v.c)(l, l.get(y.b).chat, {
                        mode: "full"
                    }))
                }
            }, {
                id: "left",
                icon: p.w,
                enabled: "split" === c,
                message: (0, o.e)({
                    id: "quickChat.dock.left",
                    defaultMessage: "Move to left pane",
                    description: "Moves the floating Chat into the left split pane beside the current content"
                }),
                onSelect: () => {
                    (0, f.a)(l, "context_menu", () => (0, v.b)(l, l.get(y.b).chat, "left"))
                }
            }, {
                id: "right",
                icon: p.y,
                enabled: "split" === c,
                message: (0, o.e)({
                    id: "quickChat.dock.right",
                    defaultMessage: "Move to right pane",
                    description: "Moves the floating Chat into the right split pane beside the current content"
                }),
                onSelect: () => {
                    (0, f.a)(l, "context_menu", () => (0, v.b)(l, l.get(y.b).chat, "right"))
                }
            }], i[0] = c, i[1] = l, i[2] = t) : t = i[2];
            let d = t;
            return i[3] !== d || i[4] !== e ? (n = (0, a.jsx)(C, {
                ...e,
                items: d
            }), i[3] = d, i[4] = e, i[5] = n) : n = i[5], n
        }

        function C(e) {
            let t, n, s, c, d, g, f, v, y, b, x = (0, r.c)(32),
                {
                    contextMenuTrigger: C,
                    isCompact: w,
                    isDragging: I,
                    items: T,
                    open: j,
                    onMinimize: S,
                    onOpenChange: E
                } = e,
                P = (0, i.a)();
            x[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.e)({
                id: "quickChat.dock.minimizeComposer",
                defaultMessage: "Minimize composer",
                description: "Minimizes the floating composer to its compact minimized button"
            }), x[0] = t) : t = x[0], x[1] !== S ? (n = {
                id: "minimize",
                icon: p.Qe,
                message: t,
                onSelect: S,
                selectAfterClose: !0
            }, x[1] = S, x[2] = n) : n = x[2], x[3] !== T || x[4] !== n ? (s = [...T, n], x[3] = T, x[4] = n, x[5] = s) : s = x[5];
            let A = s;
            if (null != C) {
                let e, t;
                return x[6] !== C ? (e = (0, a.jsx)("div", {
                    className: "contents",
                    children: C
                }), x[6] = C, x[7] = e) : e = x[7], x[8] !== A || x[9] !== e ? (t = (0, a.jsx)(h.a, {
                    disableNative: !0,
                    items: A,
                    children: e
                }), x[8] = A, x[9] = e, x[10] = t) : t = x[10], t
            }
            let M = !I && void 0,
                k = j || I;
            x[11] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(l.a, {
                id: "quickChat.dock.dragHint",
                defaultMessage: "Drag to move · Click for options",
                description: "Tooltip for the floating Chat grip that can be dragged to move the Chat or clicked to open docking options"
            }), x[11] = c) : c = x[11], x[12] !== P ? (d = P.formatMessage({
                id: "quickChat.dock.menu",
                defaultMessage: "Dock Chat",
                description: "Opens a menu to place Chat in a tab or a left or right split pane"
            }), x[12] = P, x[13] = d) : d = x[13];
            let R = w ? "composer" : "toolbar";
            return x[14] !== E || x[15] !== j ? (g = e => {
                0 !== e.button || e.ctrlKey || !(e.detail > 0) || e.defaultPrevented || E?.(!j)
            }, x[14] = E, x[15] = j, x[16] = g) : g = x[16], x[17] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, a.jsx)(p.Tc, {}), x[17] = f) : f = x[17], x[18] !== d || x[19] !== R || x[20] !== g ? (v = (0, a.jsx)(u.a, {
                className: "cursor-grab touch-none active:cursor-grabbing",
                "aria-label": d,
                color: "ghostSecondary",
                "data-quick-chat-drag-handle": !0,
                size: R,
                uniform: !0,
                onPointerDown: _,
                onClick: g,
                children: f
            }), x[18] = d, x[19] = R, x[20] = g, x[21] = v) : v = x[21], x[22] !== A || x[23] !== E || x[24] !== j || x[25] !== v ? (y = (0, a.jsx)(h.a, {
                disableNative: !0,
                trigger: "click",
                align: "end",
                open: j,
                onOpenChange: E,
                items: A,
                children: v
            }), x[22] = A, x[23] = E, x[24] = j, x[25] = v, x[26] = y) : y = x[26], x[27] !== j || x[28] !== y || x[29] !== M || x[30] !== k ? (b = (0, a.jsx)(m.a, {
                open: M,
                triggerPopupOpen: j,
                disableHoverOpen: k,
                closeOnTriggerClick: !0,
                tooltipContent: c,
                children: y
            }), x[27] = j, x[28] = y, x[29] = M, x[30] = k, x[31] = b) : b = x[31], b
        }

        function _(e) {
            0 !== e.button || e.ctrlKey || e.preventDefault()
        }
        n.d(t, {
            a: () => x,
            b: () => C
        })
    }),
    lZ4W: (function(e, t, n) {
        var a = n("iTtm"),
            r = n("OWtl"),
            s = n("MrGp"),
            o = n("PsNT"),
            i = n("JtOe");
        let l = (0, a.d)(r.a, (e, t) => {
            let {
                get: n
            } = t, a = n(s.s, e)?.at(-1);
            if (null == a) return null;
            let r = {
                conversationId: e,
                userMessageId: a
            };
            if (n(i.f, r)) return null;
            let l = n(i.g, r);
            return l?.response.visibility.status === "allowed" && (0, o.b)(l.response.content) && c(l.response.content) ? a : null
        });

        function c(e) {
            return e?.type === "single_advertiser_ad_unit" && "composer_pinned" === e.presentation && e.ad_cards?.length === 1 && "image_card_v2" === e.ad_cards[0].format
        }
        n.d(t, {
            b: () => c
        }, {
            a: l
        })
    }),
    zpMv: (function(e, t, n) {
        var a = n("SZCv"),
            r = n.n(a),
            s = n("iTtm"),
            o = n("Ro2M"),
            i = n("OWtl"),
            l = n("OMIV"),
            c = n("MrGp"),
            d = n("QkVh");
        let u = (0, s.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (!n(l.c, "3901104270")) return [];
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
            });

        function p(e, t) {
            return null != e && t.includes(e.replace(/^file-inline-/, "").split("~")[0])
        }
        let m = (0, s.d)(i.a, (e, t) => {
            let {
                get: n
            } = t, a = n(h, e).filter(e => "language_learning" !== e.planType), r = n(c.p, e), s = r?.filter(e => "list" !== e.source && a.some(t => t.automationId === e.automationId)), o = s?.at(-1)?.messageId;
            if (null == o) return null;
            let i = new Set(s?.filter(e => e.messageId === o).map(e => e.automationId));
            return 1 === i.size ? a.find(e => i.has(e.automationId)) ?? null : null
        }, {
            isEqual: r()
        });
        n.d(t, {
            d: () => p
        }, {
            a: h,
            b: u,
            c: m
        })
    }),
    Sd4O: (function(e, t, n) {
        var a = n("iTtm"),
            r = n("Ro2M"),
            s = n("OWtl"),
            o = n("OMIV"),
            i = n("MrGp");
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
                if (!n(o.c, "2840857813")) return null;
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

        function i(e) {
            let t, n = (0, r.c)(3),
                {
                    children: i
                } = e,
                [c] = (0, s.useState)(l);
            return n[0] !== c || n[1] !== i ? (t = (0, a.jsx)(o.a, {
                value: c,
                children: i
            }), n[0] = c, n[1] = i, n[2] = t) : t = n[2], t
        }

        function l() {
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
        n.d(t, {
            a: () => i
        })
    }),
    JPvk: (function(e, t, n) {
        n.d(t, {
            BusinessAgentConversationHeader: () => R,
            BusinessAgentHomeHero: () => N
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("OWtl"),
            i = n("MrGp"),
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
                return (0, a.jsx)(j, {})
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
            errorFallback: (0, a.jsx)(j, {})
        });

        function I(e) {
            let t, n = (0, r.c)(2),
                s = (0, _.a)();
            return n[0] !== s ? (t = (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden",
                children: s ? (0, a.jsx)(j, {}) : (0, a.jsx)(T, {})
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
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(j, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(j, {}), i[1] = t) : t = i[1], i[2] !== d || i[3] !== u ? (n = d && !0 === u ? (0, a.jsx)(w, {
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

        function j(e) {
            let t, n = (0, r.c)(1);
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("img", {
                className: "absolute inset-0 size-full object-cover",
                alt: "",
                draggable: !1,
                referrerPolicy: "no-referrer",
                src: "https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-static-ade5a622504d70d9.png"
            }), n[0] = t) : t = n[0], t
        }
        var S = {
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

        function P(e) {
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

        function A(e) {
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
            let t, n, s, o, i, l, u, h, y, b, x, C, _, w, T, j, P, A = (0, r.c)(29),
                {
                    context: M,
                    onPresented: k,
                    onContinue: R,
                    onDismiss: N
                } = e,
                [O, G] = (0, c.useState)(!0 === M.showDisclosureModal);
            A[0] !== M.privacyPolicyUrl ? (t = function(e) {
                if (null == e) return null;
                try {
                    let t = new URL(e);
                    return ("https:" === t.protocol || "http:" === t.protocol) && t.hostname ? t.href : null
                } catch {
                    return null
                }
            }(M.privacyPolicyUrl), A[0] = M.privacyPolicyUrl, A[1] = t) : t = A[1];
            let z = t;
            return A[2] !== N ? (n = e => {
                G(e), e || N?.()
            }, A[2] = N, A[3] = n) : n = A[3], A[4] !== k ? (s = {
                "data-theme": "light",
                onOpenAutoFocus: k
            }, A[4] = k, A[5] = s) : s = A[5], A[6] !== R ? (o = e => {
                e.preventDefault(), G(!1), R?.()
            }, A[6] = R, A[7] = o) : o = A[7], A[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(I, {}), A[8] = i) : i = A[8], A[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(m.e, {
                className: "heading-lg text-center leading-7 font-semibold",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.disclosureTitle",
                    defaultMessage: "About chatting with businesses",
                    description: "Title of the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It introduces what business AI chats offer and how chat privacy works. Keep it neutral and concise; there are no placeholders."
                })
            }), A[9] = l) : l = A[9], A[10] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(v.a, {
                className: "shrink-0",
                asset: S
            }), A[10] = u) : u = A[10], A[11] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.disclosureQuestionsTitle",
                    defaultMessage: "Ask questions and compare options",
                    description: "Short heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It explains that they can ask about the business and compare options before deciding. Keep the tone informative; there are no placeholders."
                })
            }), A[11] = h) : h = A[11], A[12] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, a.jsxs)("div", {
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
            }), A[12] = y) : y = A[12], A[13] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, a.jsx)(v.a, {
                className: "shrink-0",
                asset: E
            }), A[13] = b) : b = A[13], A[14] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.disclosureUsageTrendsTitle",
                    defaultMessage: "Your chats remain private",
                    description: "Short privacy heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. Reassure the person that their conversations with business AI agents remain private from the businesses. There are no placeholders."
                })
            }), A[14] = x) : x = A[14], A[15] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, a.jsxs)("div", {
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
            }), A[15] = C) : C = A[15], A[16] !== z ? (_ = null == z ? null : (0, a.jsx)(f.a, {
                href: z,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy",
                    description: "Link to the business-provided privacy policy in the introductory Business Agent dialog. Opens separately without accepting or dismissing the dialog. Keep the label short."
                })
            }), A[16] = z, A[17] = _) : _ = A[17], A[18] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, a.jsx)("div", {
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
            }), A[18] = w) : w = A[18], A[19] !== _ ? (T = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [C, _, w]
                })]
            }), A[19] = _, A[20] = T) : T = A[20], A[21] !== T || A[22] !== o ? (j = (0, a.jsx)(g.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: o,
                children: T
            }), A[21] = T, A[22] = o, A[23] = j) : j = A[23], A[24] !== O || A[25] !== j || A[26] !== n || A[27] !== s ? (P = (0, a.jsx)(m.b, {
                open: O,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: s,
                children: j
            }), A[24] = O, A[25] = j, A[26] = n, A[27] = s, A[28] = P) : P = A[28], P
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
            return n[0] !== l || n[1] !== c ? (t = null == c ? l : (0, a.jsx)(P, {
                state: c
            }), n[0] = l, n[1] = c, n[2] = t) : t = n[2], t
        }

        function N(e) {
            let t, n, o, l = (0, r.c)(11),
                {
                    conversationId: c,
                    fallback: d,
                    onStarterPromptSelect: u
                } = e,
                h = (0, s.x)(i.t, c);
            return null == h ? d : (l[0] !== d || l[1] !== u || l[2] !== h ? (t = "ready" !== h.status || h.context.showConversationStarters ? (0, a.jsx)(A, {
                state: h,
                onStarterPromptSelect: u
            }) : d, l[0] = d, l[1] = u, l[2] = h, l[3] = t) : t = l[3], l[4] !== c || l[5] !== h.context || l[6] !== h.status ? (n = "ready" === h.status ? (0, a.jsx)(O, {
                context: h.context,
                conversationId: c
            }, h.context.interactionId) : null, l[4] = c, l[5] = h.context, l[6] = h.status, l[7] = n) : n = l[7], l[8] !== t || l[9] !== n ? (o = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), l[8] = t, l[9] = n, l[10] = o) : o = l[10], o)
        }

        function O(e) {
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
            r = n("M7HN"),
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

        function h(e, t) {
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
        }

        function p(e, t, n, a) {
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

        function m(e, t) {
            e.get(d)?.conversationId === t && e.set(d, null)
        }

        function g(e, t) {
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
                    [r.Zb]: n.accountId
                },
                requestBody: {
                    ..."advertiser_id" in n.disclosure ? {
                        advertiser_id: n.disclosure.advertiser_id
                    } : {},
                    version: n.disclosure.version
                }
            }).catch(() => {}))
        }
        n.d(t, {
            a: () => g,
            c: () => m,
            d: () => h,
            e: () => p
        }, {
            b: d
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
            let t, n, o, p, m, f, v, y, b = (0, r.c)(24),
                {
                    conversationId: x,
                    error: C,
                    loadError: _,
                    canRetry: w,
                    isWorkConversation: I,
                    children: T
                } = e,
                j = (0, s.y)(d.a);
            b[0] !== x || b[1] !== I || b[2] !== j ? (t = (e, t) => {
                (0, h.e)(j.get(c.c).logProductEvent, {
                    conversationId: x,
                    error: e,
                    isWorkConversation: I,
                    canRetry: t
                })
            }, b[0] = x, b[1] = I, b[2] = j, b[3] = t) : t = b[3];
            let S = t;
            b[4] !== w || b[5] !== _ || b[6] !== S ? (n = () => S(_, w), b[4] = w, b[5] = _, b[6] = S, b[7] = n) : n = b[7], b[8] !== _ || b[9] !== n ? (o = (0, a.jsx)(g, {
                error: _,
                onShown: n
            }), b[8] = _, b[9] = n, b[10] = o) : o = b[10], b[11] !== T || b[12] !== o ? (p = (0, a.jsxs)(a.Fragment, {
                children: [o, T]
            }), b[11] = T, b[12] = o, b[13] = p) : p = b[13];
            let E = p;
            return b[14] !== C ? (m = C instanceof u.a && !(0, u.e)(C) && (403 === C.status || 404 === C.status), b[14] = C, b[15] = m) : m = b[15], b[16] !== C || b[17] !== S ? (f = () => S(C, !1), b[16] = C, b[17] = S, b[18] = f) : f = b[18], b[19] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                id: "chatgptConversations.conversationInaccessible",
                defaultMessage: "You don’t have access to this conversation. Make sure you’re logged in to the right account, or ask the conversation owner to send you a share link.",
                description: "Info toast shown when a user opens a ChatGPT conversation that does not exist or that they cannot access. The user is returned to Home and can switch accounts or ask the owner for a share link."
            }), b[19] = v) : v = b[19], b[20] !== E || b[21] !== m || b[22] !== f ? (y = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(l.a, {
                        isUnavailable: m,
                        homePath: "/",
                        onUnavailable: f,
                        message: v,
                        children: E
                    })
                })]
            }), b[20] = E, b[21] = m, b[22] = f, b[23] = y) : y = b[23], y
        }

        function g(e) {
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
        n.d(t, {
            a: () => m
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
            p = n("MrGp"),
            m = n("vVgo"),
            g = n("LOqV"),
            f = n("QmkR");

        function v(e, t) {
            let n = C(e, t);
            if (null == n || !(0, f.d)(e, n.conversation_id)) return;
            let a = e.get(p.D, t) ? e.get(p.cb, t) : n.title;
            (0, r.f)(e, i.SidebarRenameDialog, {
                initialValue: a ?? "",
                draftKey: n.conversation_id,
                protectedProjectId: (0, m.a)(n.context_scopes) ? n.gizmo_id : void 0,
                onSave: t => (0, f.R)({
                    scope: e,
                    conversationId: n.conversation_id,
                    previousTitle: a,
                    title: t
                }),
                requireNonEmpty: !0,
                trimOnSave: !0
            })
        }

        function y(e, t) {
            let n = e.get(p.j, t);
            if (null == n) return;
            let r = b(e, n);
            null != r && (0, f.d)(e, n) && (0, u.a)(r, e.get(a.h), e.get(a.g)) && (0, f.V)({
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
        }

        function b(e, t) {
            let n = e.query.getData(h.chatGptConversationQueryById$, t) ?? (0, g.g)(e.queryClient, t);
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
            let n = C(e, t);
            null != n && (0, l.a)(e, n.conversation_id)
        }

        function C(e, t) {
            let n = e.get(p.j, t);
            return null == n ? null : e.query.snapshot(h.chatGptConversationQueryById$, n).getData() ?? null
        }
        n.d(t, {
            a: () => x,
            b: () => b,
            c: () => v,
            d: () => y
        })
    }),
    wx5d: (function(e, t, n) {
        n.d(t, {
            a: () => oL,
            ChatGptConversationPage: () => oz,
            ChatGptSharedConversationPage: () => oB
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
            m = n("M7HN"),
            g = n("AuIy"),
            f = n("Wc42"),
            v = n("iqEK"),
            y = n("NRIv"),
            b = n("zd8w"),
            x = n("v7qY"),
            C = n("Wf1j"),
            _ = n("oyxz"),
            w = n("jqIZ"),
            I = n("bn59"),
            T = n("OY84"),
            j = n("Yxds"),
            S = n("StMt"),
            E = n("E8Sp"),
            P = n("z0li"),
            A = n("bjsR"),
            M = n("I7bK"),
            k = n("ZU27"),
            R = n("Pyg2"),
            N = n("ZIh4"),
            O = n("O0M0"),
            G = n("Cslg"),
            z = n("OFP1"),
            B = n("ItIk"),
            L = (n("AZW7"), n("jov5")),
            F = n("MrGp"),
            D = n("tSEg"),
            H = n("Ro2M"),
            W = n("bN4H"),
            q = n("TS05");

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
                } = (0, w.W)();
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
            return s ? null : (i[6] !== n || i[7] !== l || i[8] !== c || i[9] !== u || i[10] !== d ? (o = (0, a.jsx)(K, {
                automationId: n,
                conversationId: l,
                entries: c,
                turnListApi: d
            }, u), i[6] = n, i[7] = l, i[8] = c, i[9] = u, i[10] = d, i[11] = o) : o = i[11], o)
        }

        function K(e) {
            let t, n, a, s, o = (0, r.c)(25),
                {
                    automationId: i,
                    conversationId: l,
                    entries: c,
                    turnListApi: d
                } = e,
                u = (0, p.y)(D.a),
                h = (0, w.W)(),
                m = (0, p.z)(G.f),
                g = (0, p.x)(F.j, l),
                {
                    data: f
                } = (0, p.x)(H.e, i),
                v = (0, p.z)(L.a),
                y = (0, b.useRef)(null),
                x = (0, b.useRef)(null);
            o[0] !== c ? (t = c.findLast(Q), o[0] = c, o[1] = t) : t = o[1];
            let C = t;
            o[2] !== m || o[3] !== i || o[4] !== v || o[5] !== C || o[6] !== f || o[7] !== h || o[8] !== u || o[9] !== d ? (n = () => {
                null == f || null == m || (v || y.current === m || (y.current = m, (0, W.openAutomationSidePanelTab)({
                    scope: u,
                    automationId: i,
                    title: f.automation.title
                })), null != d && null != C && x.current !== m && (x.current = m, d.scrollToKey(C.turnKey, V, {
                    align: "top"
                }).then(() => {
                    u.set(q.a, {
                        locationKey: h.key,
                        accountId: m
                    }, !0)
                })))
            }, o[2] = m, o[3] = i, o[4] = v, o[5] = C, o[6] = f, o[7] = h, o[8] = u, o[9] = d, o[10] = n) : n = o[10];
            let _ = (0, b.useEffectEvent)(n);
            o[11] !== m || o[12] !== l || o[13] !== f?.automation.conversation_id || o[14] !== _ || o[15] !== g ? (a = () => {
                null != m && f?.automation.conversation_id === (g ?? l) && _()
            }, o[11] = m, o[12] = l, o[13] = f?.automation.conversation_id, o[14] = _, o[15] = g, o[16] = a) : a = o[16];
            let I = C?.turnKey,
                T = f?.automation.conversation_id;
            return o[17] !== m || o[18] !== v || o[19] !== l || o[20] !== g || o[21] !== I || o[22] !== T || o[23] !== d ? (s = [m, l, I, T, g, v, d], o[17] = m, o[18] = v, o[19] = l, o[20] = g, o[21] = I, o[22] = T, o[23] = d, o[24] = s) : s = o[24], (0, b.useEffect)(a, s), null
        }

        function V(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: Y
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function Y(e) {
            return e instanceof HTMLElement && e.getClientRects().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }

        function Q(e) {
            let {
                turn: t
            } = e;
            return t.items.some($)
        }

        function $(e) {
            return "user-message" !== e.type
        }
        var Z = n("nKJ6"),
            J = n("RN8F"),
            X = n("GMTh"),
            ee = n("zpMv"),
            et = n("PFzG"),
            en = n("KvJW"),
            ea = n("TDcV"),
            er = n("Mali"),
            es = n("SGsN"),
            eo = n("OWtl"),
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
            let s = n => {
                eg(e, r, n, t)
            };
            s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(eu)?.id !== r.id || e.get(eu)?.printing || e.set(eu, null), a
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
            eb = n("zHp1"),
            ex = n("rvFo"),
            eC = n("taWv"),
            e_ = n("AO3k"),
            ew = n("p2H0"),
            eI = n("TPxy"),
            eT = n("hZax"),
            ej = "printDocument-v_w5Ax";
        let eS = "https://chatgpt.com/download/?utm_source=chatgpt_web&utm_medium=print&utm_campaign=app_install";

        function eE(e) {
            let t, n, s, o, l, c, d, u, h, p, m, g, f = (0, r.c)(22),
                {
                    children: v,
                    title: y
                } = e,
                b = (0, C.a)(),
                {
                    getExperiment: x
                } = (0, eT.j)();
            if (!x("448755449").get("enabled", !1)) {
                let e, t;
                return f[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.b)(ej, "hidden w-full space-y-1.5 bg-surface text-default print:block"), f[0] = e) : e = f[0], f[1] !== v ? (t = (0, a.jsx)("div", {
                    className: e,
                    "data-conversation-print": "",
                    "data-theme": "light",
                    children: v
                }), f[1] = v, f[2] = t) : t = f[2], t
            }
            return f[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.b)(ej, "formattedPrintDocument-tP74Wl", "group/conversation-print hidden w-full bg-surface text-default print:block"), f[3] = t) : t = f[3], f[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(ew.a, {
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
                children: (0, a.jsx)(eI.a, {
                    className: "size-7",
                    "aria-hidden": "true"
                })
            }), f[10] = c) : c = f[10], f[11] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsx)("p", {
                className: "font-semibold",
                children: (0, a.jsx)(_.a, {
                    id: "chatgpt.print.downloadApp.title",
                    defaultMessage: "Take your curiosity further",
                    description: "Headline in the footer of a printed or PDF-saved ChatGPT conversation, inviting the reader to download the mobile app. Keep it short and encouraging."
                })
            }), f[11] = d) : d = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsxs)("div", {
                className: "min-w-0 flex-1 text-sm",
                children: [d, (0, a.jsx)("p", {
                    className: "mt-1 text-secondary",
                    children: (0, a.jsx)(_.a, {
                        id: "chatgpt.print.downloadApp.description",
                        defaultMessage: "Scan to get the ChatGPT app",
                        description: "Instruction beside the QR code in the footer of a printed or PDF-saved conversation. Scanning the code opens the ChatGPT app download page. Keep it short."
                    })
                })]
            }), f[12] = u) : u = f[12], f[13] !== b ? (h = b.formatMessage({
                id: "chatgpt.print.downloadApp.qrCode",
                defaultMessage: "Download the ChatGPT app",
                description: "Accessible label for a QR code and link in a printed or PDF-saved conversation. The code and link open the ChatGPT app download page."
            }), f[13] = b, f[14] = h) : h = f[14], f[15] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(_.a, {
                id: "chatgpt.print.downloadApp.fallback",
                defaultMessage: "Get the app",
                description: "Link to the ChatGPT app download page when its QR code cannot be generated in a printed conversation"
            }), f[15] = p) : p = f[15], f[16] !== h ? (m = (0, a.jsxs)("footer", {
                className: l,
                children: [c, u, (0, a.jsx)("a", {
                    className: "shrink-0",
                    href: `${eS}&utm_content=pdf_link`,
                    children: (0, a.jsx)(e_.a, {
                        value: `${eS}&utm_content=qr`,
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

        function eP(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var eA = n("jfiJ"),
            eM = n("FGJH"),
            ek = n("nmN6");

        function eR(e) {
            let t, n, s, i, l, c = (0, r.c)(19),
                {
                    entries: d,
                    title: u,
                    TurnRowComponent: h
                } = e,
                m = (0, p.y)(D.a),
                g = (0, p.z)(ea.a),
                f = (0, p.z)(er.a),
                v = (0, b.useRef)(null);
            c[0] !== d || c[1] !== f || c[2] !== m ? (t = function(e, t, n) {
                let a = [];
                for (let n of t) {
                    let t = e.get(F.j, n.conversationId),
                        r = (0, eC.c)(void 0, void 0, void 0, e.get(F.R, n.conversationId) ?? void 0),
                        s = (0, eC.c)(t ?? void 0);
                    for (let o of n.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]))
                        if ("user-message" === o.type) a.push(...o.images.map(e => ({
                            src: e,
                            resolver: r
                        }))), null != o.imageEditOperation && a.push({
                            src: `sediment://${o.imageEditOperation.original_file_id}`,
                            resolver: s
                        });
                        else if ("generated-image" === o.type) {
                        let t = e.get(eC.a, n.conversationId);
                        null != t && a.push({
                            src: o.src,
                            resolver: t
                        })
                    } else "chatgpt-python-execution" === o.type && null != t ? a.push(...o.images.map(e => {
                        let {
                            src: t
                        } = e;
                        return {
                            src: t,
                            resolver: s
                        }
                    })) : "assistant-message" === o.type && null != t && a.push(...o.contentReferences.flatMap((e, t) => (0, ey.u)(e, t).map(e => {
                        let {
                            src: t
                        } = e;
                        return {
                            src: t,
                            resolver: s
                        }
                    })), ...(o.pythonExecutions ?? []).flatMap(e => {
                        let {
                            images: t
                        } = e;
                        return t.map(e => {
                            let {
                                src: t
                            } = e;
                            return {
                                src: t,
                                resolver: s
                            }
                        })
                    }))
                }
                let r = a.flatMap(e => {
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
                    queryKey: ["chatgpt-print-assets", e.get(ea.a), t[0]?.conversationId, r.map(e => {
                        let {
                            src: t,
                            resolver: n
                        } = e;
                        return [t, ...n.cacheKey, n.validationSessionId]
                    })],
                    initialData: 0 === r.length || void 0,
                    enabled: n,
                    staleTime: ex.b.FIVE_MINUTES,
                    refetchOnWindowFocus: !1,
                    retry: !1,
                    queryFn: t => {
                        let {
                            client: n,
                            signal: a
                        } = t;
                        return ep(e, "CHATGPT_CONVERSATION_PRINT_PREPARATION_IMAGES", a, async () => {
                            for (let e of ev()(r, 6)) a.throwIfAborted(), await Promise.all(e.map(async e => {
                                let {
                                    src: t,
                                    resolver: r
                                } = e, s = await (0, eb.a)(n, t, r);
                                if (a.throwIfAborted(), null != s) {
                                    let e = new Image;
                                    e.referrerPolicy = "no-referrer", e.src = s, await e.decode()
                                }
                            }));
                            return !0
                        })
                    }
                }
            }(m, d, f), c[0] = d, c[1] = f, c[2] = m, c[3] = t) : t = c[3];
            let y = (0, o.a)(t);
            c[4] !== y || c[5] !== m ? (n = (e, t) => {
                eh(m, e), e.defaultPrevented || y.isSuccess || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat || v.current === t || (v.current = t, y.refetch({
                    cancelRefetch: !1
                }).then(() => {
                    t.aborted || window.print()
                }).finally(() => {
                    v.current === t && (v.current = null)
                })))
            }, c[4] = y, c[5] = m, c[6] = n) : n = c[6];
            let C = (0, b.useEffectEvent)(n);
            return c[7] !== C || c[8] !== m ? (s = () => {
                let e, t, n = new AbortController,
                    a = (e = () => {
                        if (!m.get(ed.c).isChatgptBrowserReplacement) return;
                        let e = m.get(eu);
                        if (e?.printing) return;
                        let t = {
                            ...e ?? em("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_UNOBSERVED"),
                            printing: !0
                        };
                        m.set(eu, t), eg(m, t, "CHATGPT_CONVERSATION_PRINT_STAGE_BEFORE_PRINT")
                    }, t = () => {
                        let e = m.get(eu);
                        m.get(ed.c).isChatgptBrowserReplacement && e?.printing && (eg(m, e, "CHATGPT_CONVERSATION_PRINT_STAGE_AFTER_PRINT"), m.set(eu, null))
                    }, window.addEventListener("beforeprint", e, !0), window.addEventListener("afterprint", t), () => {
                        window.removeEventListener("beforeprint", e, !0), window.removeEventListener("afterprint", t), m.set(eu, null)
                    }),
                    r = e => C(e, n.signal);
                return window.addEventListener("keydown", r, !0), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), a()
                }
            }, c[7] = C, c[8] = m, c[9] = s) : s = c[9], c[10] !== g || c[11] !== m ? (i = [g, m], c[10] = g, c[11] = m, c[12] = i) : i = c[12], (0, b.useEffect)(s, i), c[13] !== h || c[14] !== y || c[15] !== d || c[16] !== f || c[17] !== u ? (l = f ? (0, x.createPortal)((0, a.jsx)(eE, {
                title: u,
                children: (0, a.jsx)(ei.a, {
                    value: null,
                    children: (0, a.jsx)(ek.a, {
                        value: null,
                        children: y.isSuccess ? d.map(e => {
                            var t;
                            return (0, a.jsx)(h, {
                                entry: {
                                    ...e,
                                    timestampSeparatorAtMs: null,
                                    turn: {
                                        ...t = e.turn,
                                        suppressTurnActions: !0,
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? eP(e) : {
                                            ...e,
                                            items: e.items.map(eP),
                                            activeReasoning: null == e.activeReasoning ? void 0 : eP(e.activeReasoning)
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
                            children: y.isError ? (0, a.jsx)(_.a, {
                                id: "chatgpt.printAssets.error",
                                defaultMessage: "Some images could not be loaded. Close print and try again.",
                                description: "Printed instead of a partial conversation when its images failed to load"
                            }) : (0, a.jsx)(_.a, {
                                id: "chatgpt.printAssets.loading",
                                defaultMessage: "Images are still loading. Close print and try again.",
                                description: "Printed instead of an incomplete conversation when its images are still loading"
                            })
                        })
                    })
                })
            }), document.body) : null, c[13] = h, c[14] = y, c[15] = d, c[16] = f, c[17] = u, c[18] = l) : l = c[18], l
        }

        function eN(e) {
            let t, n, a, s, i, l, c = (0, r.c)(22),
                {
                    conversationId: d
                } = e,
                u = (0, p.y)(eo.a),
                h = (0, C.a)(),
                m = (0, b.useRef)(null),
                g = (0, p.z)(ea.a),
                f = (0, p.x)(F.j, d),
                v = (0, p.z)(eM.b);
            c[0] !== g || c[1] !== f ? (t = ["chatgpt-print-history", g, f], c[0] = g, c[1] = f, c[2] = t) : t = c[2], c[3] !== u || c[4] !== f ? (n = e => {
                let {
                    signal: t
                } = e;
                return ep(u, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != f && await (0, eA.a)(u, f, t), !0))
            }, c[3] = u, c[4] = f, c[5] = n) : n = c[5], c[6] !== t || c[7] !== n ? (a = {
                queryKey: t,
                enabled: !1,
                staleTime: 0,
                retry: !1,
                refetchOnWindowFocus: !1,
                queryFn: n
            }, c[6] = t, c[7] = n, c[8] = a) : a = c[8];
            let {
                refetch: y
            } = (0, o.a)(a);
            c[9] !== g || c[10] !== d || c[11] !== h || c[12] !== v || c[13] !== y || c[14] !== u || c[15] !== f ? (s = (e, t) => {
                eh(u, e), e.defaultPrevented || null == f || 0 === v || u.get(eM.c, f)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat || m.current === t || (m.current = t, y({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && u.get(ea.a) === g) {
                        if (e.isError) return void u.get(es.f).danger(h.formatMessage({
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
                            predicate: ez
                        }).map(eO)), t.aborted || u.get(ea.a) !== g || window.print()
                    }
                }).finally(() => {
                    m.current === t && (m.current = null)
                })))
            }, c[9] = g, c[10] = d, c[11] = h, c[12] = v, c[13] = y, c[14] = u, c[15] = f, c[16] = s) : s = c[16];
            let x = (0, b.useEffectEvent)(s);
            return c[17] !== x ? (i = () => {
                let e = new AbortController,
                    t = t => x(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, c[17] = x, c[18] = i) : i = c[18], c[19] !== g || c[20] !== f ? (l = [g, f], c[19] = g, c[20] = f, c[21] = l) : l = c[21], (0, b.useEffect)(i, l), null
        }

        function eO(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(eG)
        }

        function eG() {}

        function ez(e) {
            return e.getObserversCount() > 0
        }
        var eB = n("DrWu"),
            eL = n("x4uR"),
            eF = n("hx97");

        function eD(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var eH = n("MrzV"),
            eW = n("ygO2"),
            eq = n("gbRX");

        function eU(e) {
            let t, n, s = (0, r.c)(4),
                {
                    isFetching: o,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, p.z)(!i && eq.a) || o;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(_.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again",
                description: "Retry loading a ChatGPT conversation after its history could not be loaded"
            }), s[0] = t) : t = s[0], s[1] !== l || s[2] !== c ? (n = (0, a.jsx)(eW.a, {
                color: "ghost",
                disabled: c,
                onClick: l,
                children: t
            }), s[1] = l, s[2] = c, s[3] = n) : n = s[3], n
        }

        function eK(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(_.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation",
                description: "Error state when a ChatGPT conversation fetch fails"
            }), o[0] = t) : t = o[0], o[1] !== i || o[2] !== l || o[3] !== c ? (n = null != c ? (0, a.jsx)(eU, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, o[1] = i, o[2] = l, o[3] = c, o[4] = n) : n = o[4], o[5] !== n ? (s = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), o[5] = n, o[6] = s) : s = o[6], s
        }
        var eV = n("FfNP"),
            eY = n("Bbed"),
            eQ = n("WVag");
        let e$ = (0, eY.a)(eV.loadEpicChartIndicator);

        function eZ(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, p.x)(eQ.a, s),
                [i, l] = (0, b.useState)(!1);
            return i || null == o || l(!0), n[0] !== s || n[1] !== i ? (t = i ? (0, a.jsx)(e$, {
                conversationId: s
            }) : null, n[0] = s, n[1] = i, n[2] = t) : t = n[2], t
        }
        var eJ = n("DWXw"),
            eX = n("FmJi"),
            e0 = n("TSib"),
            e1 = n("sIex"),
            e2 = n("jEN2"),
            e3 = n("kphc"),
            e4 = n("YWcr"),
            e6 = n("RGWz"),
            e5 = n("QxH2"),
            e8 = n("mwa5"),
            e7 = n("UuVq"),
            e9 = n("TwSq"),
            te = n("l0fK"),
            tt = n("hkBU"),
            tn = n("UxN3"),
            ta = n("GKsW"),
            tr = n("yWTM"),
            ts = n("SkIz"),
            to = n("aNqv"),
            ti = n("ibLK"),
            tl = n("T1PX"),
            tc = n("Fjd0"),
            td = n("VPBa"),
            tu = n("PWXi"),
            th = n("zOE4"),
            tp = n("Fm9E"),
            tm = n("Xc94"),
            tg = n("HnT3"),
            tf = n("QSwz"),
            tv = n("ze43"),
            ty = n("KXCj"),
            tb = n("e1xH"),
            tx = n("pAFY");
        n("kErH");
        var tC = n("dJBt"),
            t_ = n("FR8U"),
            tw = n("xqnZ"),
            tI = n("UMxD"),
            tT = n("VV6Z"),
            tj = n("JhDO"),
            tS = n("Mbqw"),
            tE = n("kl6F"),
            tP = n("kfGJ"),
            tA = n("khOd"),
            tM = n("RZBv"),
            tk = n("yzQ9"),
            tR = n("OMIV"),
            tN = n("JCJj"),
            tO = n("KkZX"),
            tG = n("Gjet"),
            tz = n("ftSl"),
            tB = n("BdYu"),
            tL = n("Nyub"),
            tF = n("jZDY"),
            tD = n("HgLj"),
            tH = n("Bc5r"),
            tW = n("bIvi"),
            tq = n("Elta"),
            tU = n("eShZ"),
            tK = n("qqut"),
            tV = n("CsbC"),
            tY = n("tCyZ"),
            tQ = n("JPvk"),
            t$ = n("GgLN"),
            tZ = n("KdfG"),
            tJ = n("AOHi"),
            tX = n("iRMi"),
            t0 = n("U2UX"),
            t1 = n("gbrq"),
            t2 = n("K33Q"),
            t3 = n("mv4d"),
            t4 = n("w7Qu"),
            t6 = n("dt5v"),
            t5 = n("bWX0"),
            t8 = n("smHt"),
            t7 = n("aoTb"),
            t9 = n("pqpL"),
            ne = n("PqBD"),
            nt = n("XcRr"),
            nn = n("dk3M"),
            na = n("WFY2"),
            nr = n("vldH"),
            ns = n("ISgP"),
            no = n("t2JB"),
            ni = n("DIH2"),
            nl = n("aFoA"),
            nc = n("H8lk"),
            nd = n("rxj0"),
            nu = n("XkLc"),
            nh = n("S95W");
        let np = (0, p.v)(eo.a, e => null);
        var nm = n("DM5G"),
            ng = n("gJe8"),
            nf = n("d2rV"),
            nv = n("zOrD"),
            ny = n("EFj1"),
            nb = n("TL6G"),
            nx = n("eKlv"),
            nC = n("OtLV"),
            n_ = n("XtQP");

        function nw(e) {
            let t, n, a, s, o, i, l, c = (0, r.c)(16),
                {
                    conversationId: d
                } = e,
                u = (0, p.y)(eo.a),
                h = (0, C.a)();
            return c[0] !== d || c[1] !== h || c[2] !== u ? (t = () => {
                (0, n_.c)(u, d).catch(() => {
                    u.get(es.f).danger(h.formatMessage(nC.a.markUnreadError), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.sidebar.markUnreadError"
                        }
                    })
                })
            }, c[0] = d, c[1] = h, c[2] = u, c[3] = t) : t = c[3], (0, ny.a)("markThreadUnread", t), c[4] !== d || c[5] !== u ? (n = () => (0, nx.c)(u, d), a = [d, u], c[4] = d, c[5] = u, c[6] = n, c[7] = a) : (n = c[6], a = c[7]), (0, nb.d)("rename-thread", n, a), c[8] !== d || c[9] !== u ? (s = () => (0, nx.d)(u, d), o = [d, u], c[8] = d, c[9] = u, c[10] = s, c[11] = o) : (s = c[10], o = c[11]), (0, nb.d)("toggle-thread-pin", s, o), c[12] !== d || c[13] !== u ? (i = () => (0, nx.a)(u, d), l = [d, u], c[12] = d, c[13] = u, c[14] = i, c[15] = l) : (i = c[14], l = c[15]), (0, nb.d)("archive-thread", i, l), null
        }
        var nI = n("VlIB"),
            nT = n("Ow2S"),
            nj = n("ASxG"),
            nS = n("wD9O"),
            nE = n("lsfk"),
            nP = n("IObw"),
            nA = n("BOYb"),
            nM = n("kQNh"),
            nk = n.n(nM),
            nR = n("NkEl"),
            nN = n("FW69"),
            nO = "highlight-x7OnzP",
            nG = "safari-wcvuzB",
            nz = "block-t7sxyD";
        let nB = "chatgpt-search-result",
            nL = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* nF(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(nL) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let s = RegExp(t.split(/\n+/u).map(nk()).join("\\n*"), "g");
            for (let n = s.exec(r); null != n && n.index < r.length; n = s.exec(r)) {
                let r = n.index;
                s.lastIndex = r + 1;
                let o = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < o);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, o - l.start), nD(c) && ((0, nN.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function nD(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let nH = nj.object({
            chatGptSearchNavigation: nj.object({
                key: nj.string(),
                messageId: nj.string()
            })
        });

        function nW(e) {
            let t, n, a, s, o, i, l, c, d, u, h, m, g = (0, r.c)(48),
                {
                    conversationId: f,
                    entries: v,
                    isConversationFetching: y,
                    turnListApi: x
                } = e,
                C = (0, p.y)(eo.a),
                _ = (0, p.x)(F.r, f),
                I = (0, nE.b)(),
                T = (0, nS.c)();
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
                            left: (0, nS.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                        h = (0, nS.b)(o.height, n),
                        p = (0, nS.b)(o.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, I, T)
            }, g[0] = I, g[1] = T, g[2] = t) : t = g[2];
            let j = (0, b.useEffectEvent)(t),
                S = (0, w.W)(),
                E = (0, w.Y)(),
                P = new URLSearchParams(S.search),
                A = P.get("messageId") ?? P.get("message"),
                M = nH.safeParse(S.state).data?.chatGptSearchNavigation,
                k = A ?? M?.messageId,
                R = P.get("selectedTextQuery") ?? "",
                N = (0, p.x)(F.L, f),
                O = !R || null != k && null != N && (N[k]?.message != null || Object.values(N).some(e => e.message?.id === k)),
                G = R || P.get("historySearchQuery") || "",
                z = JSON.stringify([f, null != A ? S.key : M?.key ?? S.key, k]);
            g[3] !== z ? (n = {
                key: z,
                handled: !1,
                positioned: !1
            }, g[3] = z, g[4] = n) : n = g[4];
            let B = (0, b.useRef)(n),
                L = (0, b.useEffectEvent)(e => {
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
                        let m = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(nk()).join("|") : nk()(c), null == c ? "giu" : "gu"),
                            g = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(_);

                        function C() {
                            for (let t of (g = !0, x.disconnect(), clearTimeout(r), null != s && cancelAnimationFrame(s), null != a && CSS.highlights.get(nB) === a && CSS.highlights.delete(nB), e.classList.remove(nO, nG), b)) t.classList.remove(nO, nz)
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
                            let u = (0, nR.a)(e);
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
                                for (let e of nF(t, c))
                                    if (!(n++ < l)) {
                                        I.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(nL) != null || u.some(t => {
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), nD(a) && I.push(a)
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
                            let j = 0,
                                S = 0;
                            for (let e of [...I, ...T]) {
                                let n = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect(),
                                    a = n?.top ?? 0,
                                    r = n?.left ?? 0;
                                (null == t || 0 > (a - j || r - S)) && (t = e, j = a, S = r)
                            }
                            t = t ?? e, v && n?.(t);
                            let E = t instanceof Range ? t.getClientRects()[0] : t.getBoundingClientRect(),
                                P = [E?.top, E?.left, E?.width, E?.height, e.scrollHeight].join(":");
                            if (d < 4e3 && P !== o) {
                                o = P, _();
                                return
                            }
                            if (!v) {
                                v = !0, o = void 0, n?.(t), _();
                                return
                            }
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...I), CSS.highlights.set(nB, a)) : I.length > 0 && T.push(e), e.classList.add(nO), (0, nA.e)() && e.classList.add(nG), T)) t.classList.add(nO, nz), b.add(t);
                            r = setTimeout(C, 3600)
                        }
                        return x.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), w(), C
                    }(e, G, j, R ? "phrase" : "terms", Number(P.get("selectedTextOccurrence"))) : void 0;
                    return null != A && (P.delete("messageId"), P.delete("message"), P.delete("historySearchQuery"), P.delete("selectedTextQuery"), P.delete("selectedTextOccurrence"), E({
                        pathname: S.pathname,
                        search: P.toString(),
                        hash: S.hash
                    }, {
                        replace: !0,
                        preventScrollReset: !0,
                        state: {
                            ...S.state,
                            chatGptSearchNavigation: {
                                key: S.key,
                                messageId: A
                            }
                        }
                    })), t
                });
            g[5] !== f || g[6] !== y || g[7] !== k || g[8] !== z || g[9] !== C || g[10] !== O ? (a = () => {
                if (B.current.key !== z && (B.current = {
                        key: z,
                        handled: !1,
                        positioned: !1
                    }), null != k && !y && O) return C.watch(e => {
                    !B.current.handled && (0, F.Nb)(e, f, k) && (B.current.handled = !0)
                })
            }, s = [f, y, k, z, C, O], g[5] = f, g[6] = y, g[7] = k, g[8] = z, g[9] = C, g[10] = O, g[11] = a, g[12] = s) : (a = g[11], s = g[12]), (0, b.useLayoutEffect)(a, s), g[13] !== v || g[14] !== k ? (o = null == k ? void 0 : v.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(k)
            }), g[13] = v, g[14] = k, g[15] = o) : o = g[15];
            let D = o;
            g[16] !== S || g[17] !== E || g[18] !== A || g[19] !== M ? (i = () => {
                null == A && null != M && E(S, {
                    replace: !0,
                    preventScrollReset: !0,
                    state: {
                        ...S.state,
                        chatGptSearchNavigation: void 0
                    }
                })
            }, g[16] = S, g[17] = E, g[18] = A, g[19] = M, g[20] = i) : i = g[20];
            let H = (0, b.useEffectEvent)(i);
            if (g[21] !== H || g[22] !== _ || g[23] !== y || g[24] !== D ? (l = () => {
                    !B.current.positioned || null != D || y || _ || H()
                }, g[21] = H, g[22] = _, g[23] = y, g[24] = D, g[25] = l) : l = g[25], g[26] !== _ || g[27] !== y || g[28] !== D ? (c = [_, y, D], g[26] = _, g[27] = y, g[28] = D, g[29] = c) : c = g[29], (0, b.useLayoutEffect)(l, c), g[30] !== k || g[31] !== D?.id || g[32] !== D?.turn.items || g[33] !== D?.turnKey) {
                let e = D?.turn.items.findIndex(e => "messageId" in e && e.messageId === k || "assistant-message" === e.type && null != k && e.sourceMessageIds?.includes(k)) ?? -1,
                    t = D?.turn.items[e],
                    n = D?.id;
                u = D?.turnKey, d = null == t || null == n ? void 0 : (0, nP.b)(t, e, n), g[30] = k, g[31] = D?.id, g[32] = D?.turn.items, g[33] = D?.turnKey, g[34] = d, g[35] = u
            } else d = g[34], u = g[35];
            let W = d;
            return g[36] !== L || g[37] !== k || g[38] !== u || g[39] !== x || g[40] !== W ? (h = () => {
                let e;
                if (null == u || null == x) return;
                let t = new AbortController,
                    n = null;
                return x.scrollToKey(u, e => n = (null == k ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(k)}"]`)) ?? (null == W ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(W)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = L(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, g[36] = L, g[37] = k, g[38] = u, g[39] = x, g[40] = W, g[41] = h) : h = g[41], g[42] !== k || g[43] !== z || g[44] !== u || g[45] !== x || g[46] !== W ? (m = [z, k, u, x, W], g[42] = k, g[43] = z, g[44] = u, g[45] = x, g[46] = W, g[47] = m) : m = g[47], (0, b.useLayoutEffect)(h, m), null
        }
        var nq = n("dBPX"),
            nU = n("SZi8"),
            nK = n("lBzi"),
            nV = n("Ga6O"),
            nY = n("MikY"),
            nQ = n("vknh"),
            n$ = n("Ppno"),
            nZ = n("hXcw"),
            nJ = n("xU0T"),
            nX = n("wDWo"),
            n0 = n("IgxH"),
            n1 = n("iaTG"),
            n2 = n("c3f5"),
            n3 = n("iXTs"),
            n4 = n("xAIC"),
            n6 = n("lUoP"),
            n5 = n("bf6R"),
            n8 = n("O666"),
            n7 = n("tNq4"),
            n9 = n("Skaw"),
            ae = n("PYCG");

        function at(e) {
            let t, n, s, o, i, l, c, d, u, h, m, g = (0, r.c)(50),
                {
                    conversationId: f,
                    projectId: v,
                    sharedProjectConversation: y,
                    isReady: b,
                    isRestricted: x,
                    isStreaming: w
                } = e,
                I = void 0 === v ? null : v,
                T = (0, p.y)(eo.a),
                j = (0, C.a)(),
                S = (0, p.z)(G.e),
                E = (0, p.z)(null == I ? null : n9.a),
                P = (0, p.x)(F.j, f),
                {
                    data: A
                } = (0, p.x)(nK.chatGptConversationQueryById$, null == I ? null : P),
                M = (0, p.x)(nl.a, null == I ? null : P),
                k = (0, p.x)(F.A, M);
            g[0] !== M || g[1] !== A || g[2] !== k || g[3] !== I || g[4] !== P ? (t = null == A && null != M && null != P ? {
                id: P,
                gizmo_id: I,
                is_temporary_chat: k
            } : void 0, g[0] = M, g[1] = A, g[2] = k, g[3] = I, g[4] = P, g[5] = t) : t = g[5];
            let R = t,
                {
                    data: N
                } = (0, p.x)(eL.b, I),
                O = null == I ? null : (0, n9.b)(E ?? null, y ?? A ?? R, N),
                z = (0, p.x)(n7.b, f);
            g[6] !== j ? (n = j.formatMessage(nC.a.headerShare), g[6] = j, g[7] = n) : n = g[7];
            let B = n,
                L = (0, p.x)(null == y ? n7.a : null, f),
                D = null != y || null != L,
                H = null;
            if (x || O?.type === "unavailable") {
                let e;
                g[8] !== j ? (e = j.formatMessage(nC.a.shareDisabledRestricted), g[8] = j, g[9] = e) : e = g[9], H = e
            } else if (w && !D) {
                let e;
                g[10] !== j ? (e = j.formatMessage(nC.a.shareDisabledStreaming), g[10] = j, g[11] = e) : e = g[11], H = e
            } else if (!b || !D) {
                let e;
                g[12] !== j ? (e = j.formatMessage(nC.a.shareDisabledNotReady), g[12] = j, g[13] = e) : e = g[13], H = e
            }
            let W = null != H || z;
            g[14] !== W ? (s = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: W
            }, g[14] = W, g[15] = s) : s = g[15];
            let q = (0, p.x)(n8.b, s),
                U = "loaded" === S.status && "personal" === S.structure && (null == O || "snapshot" === O.type),
                K = null != H || z;
            g[16] !== K ? (o = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: K
            }, g[16] = K, g[17] = o) : o = g[17];
            let V = (0, p.x)(U ? n8.b : null, o);
            g[18] !== f || g[19] !== R || g[20] !== I || g[21] !== T || g[22] !== y ? (i = () => {
                let e = null == y ? T.get(n7.c, f) : {
                    serverConversationId: y.conversation_id,
                    title: y.title,
                    currentNodeId: y.current_node ?? void 0
                };
                null != e && (0, ae.shareChatGptProjectConversation)(T, e.serverConversationId, e.title ?? "", I, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", y ?? R)
            }, g[18] = f, g[19] = R, g[20] = I, g[21] = T, g[22] = y, g[23] = i) : i = g[23];
            let Y = i,
                Q = B;
            if ("loaded" === S.status && (null == O || "snapshot" === O.type)) {
                let e;
                g[24] !== S.structure || g[25] !== j ? (e = j.formatMessage("workspace" === S.structure ? nC.a.shareWorkspaceTooltip : nC.a.sharePublicTooltip), g[24] = S.structure, g[25] = j, g[26] = e) : e = g[26], Q = e
            }
            let $ = null == H && !z && !0 === V,
                Z = H ?? Q,
                J = null != H || z;
            return g[27] !== z || g[28] !== q ? (l = !z && (q ? (0, a.jsx)(n5.M, {}) : (0, a.jsx)(n5.L, {})), g[27] = z, g[28] = q, g[29] = l) : l = g[29], g[30] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(_.a, {
                ...nC.a.headerShare
            }), g[30] = c) : c = g[30], g[31] !== Y || g[32] !== z || g[33] !== B || g[34] !== J || g[35] !== l ? (d = (0, a.jsxs)(eW.a, {
                "aria-label": B,
                color: "toolbar",
                disabled: J,
                loading: z,
                radius: "large",
                size: "toolbar",
                onClick: Y,
                children: [l, c]
            }), g[31] = Y, g[32] = z, g[33] = B, g[34] = J, g[35] = l, g[36] = d) : d = g[36], g[37] !== Z || g[38] !== d || g[39] !== $ ? (u = (0, a.jsx)(n6.a, {
                disabled: $,
                content: Z,
                children: d
            }), g[37] = Z, g[38] = d, g[39] = $, g[40] = u) : u = g[40], g[41] !== f || g[42] !== z || g[43] !== I || g[44] !== H || g[45] !== y ? (h = !1, g[41] = f, g[42] = z, g[43] = I, g[44] = H, g[45] = y, g[46] = h) : h = g[46], g[47] !== u || g[48] !== h ? (m = (0, a.jsxs)(a.Fragment, {
                children: [u, h]
            }), g[47] = u, g[48] = h, g[49] = m) : m = g[49], m
        }(0, eY.a)(async () => () => null);
        var an = n("B0Wx"),
            aa = n("if6d"),
            ar = n("r2mP"),
            as = n("bLPN"),
            ao = n("Zc0K"),
            ai = n("ZhoB"),
            al = n("RADZ"),
            ac = n("rZzh"),
            ad = n("N9qt");

        function au(e) {
            let t, n, s, o, i, l, c, d, u = (0, r.c)(49),
                {
                    entry: h,
                    renderMcpApps: m,
                    trackShownImpressions: g
                } = e,
                f = void 0 === m || m,
                v = void 0 === g || g,
                y = (0, p.y)(eo.a);
            u[0] !== h.conversationId ? (t = (0, tE.n)({
                routeKind: "chatgpt-thread",
                conversationId: h.conversationId
            }), u[0] = h.conversationId, u[1] = t) : t = u[1];
            let b = (0, p.x)(v ? tg.c : null, t),
                x = v && null == b,
                C = (0, p.x)(h.isMostRecentTurn ? ac.d : null, h.conversationId);
            u[2] !== h.timestampSeparatorAtMs ? (n = null == h.timestampSeparatorAtMs ? null : (0, a.jsx)(ar.b, {
                sentAtMs: h.timestampSeparatorAtMs
            }), u[2] = h.timestampSeparatorAtMs, u[3] = n) : n = u[3];
            let w = null != h.paragen;
            return u[4] !== h.branchingMessageId || u[5] !== h.browserConversationId || u[6] !== h.conversationId || u[7] !== h.feedbackEnabled || u[8] !== h.hasLaterSitesPreview || u[9] !== h.id || u[10] !== h.isMostRecentTurn || u[11] !== h.isReadOnly || u[12] !== h.isTemporaryChat || u[13] !== h.isWorkConversation || u[14] !== h.onEditUserMessage || u[15] !== h.onFork || u[16] !== h.onRegenerateResponse || u[17] !== h.pendingSubmissionAttachments || u[18] !== h.readAloudEnabled || u[19] !== h.referenceImageSuggestionActionInput || u[20] !== h.safetyReview || u[21] !== h.shareEnabled || u[22] !== h.turn || u[23] !== f || u[24] !== x || u[25] !== w ? (s = (0, a.jsx)(ao.a, {
                browserConversationId: h.browserConversationId,
                conversationId: h.conversationId,
                branchingMessageId: h.branchingMessageId,
                hasLaterSitesPreview: h.hasLaterSitesPreview,
                hostId: tP.a,
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
            }), u[4] = h.branchingMessageId, u[5] = h.browserConversationId, u[6] = h.conversationId, u[7] = h.feedbackEnabled, u[8] = h.hasLaterSitesPreview, u[9] = h.id, u[10] = h.isMostRecentTurn, u[11] = h.isReadOnly, u[12] = h.isTemporaryChat, u[13] = h.isWorkConversation, u[14] = h.onEditUserMessage, u[15] = h.onFork, u[16] = h.onRegenerateResponse, u[17] = h.pendingSubmissionAttachments, u[18] = h.readAloudEnabled, u[19] = h.referenceImageSuggestionActionInput, u[20] = h.safetyReview, u[21] = h.shareEnabled, u[22] = h.turn, u[23] = f, u[24] = x, u[25] = w, u[26] = s) : s = u[26], u[27] !== h.conversationId || u[28] !== h.isTemporaryChat || u[29] !== h.isWorkConversation || u[30] !== h.paragen || u[31] !== x ? (o = null == h.paragen ? null : (0, a.jsx)(al.a, {
                comparison: h.paragen,
                conversationId: h.conversationId,
                hostId: tP.a,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                trackTaskViews: x
            }, h.paragen.promptMessageId), u[27] = h.conversationId, u[28] = h.isTemporaryChat, u[29] = h.isWorkConversation, u[30] = h.paragen, u[31] = x, u[32] = o) : o = u[32], u[33] !== h.showSharedConversationPrivateDisclaimer ? (i = h.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(tn.a, {
                    className: "shrink-0",
                    legacyIcon: as.a,
                    asset16: ad.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(_.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you",
                    description: "Privacy disclaimer shown between the original shared ChatGPT conversation and the reader's new private messages after they continue the shared conversation in Codex Desktop"
                })]
            }) : null, u[33] = h.showSharedConversationPrivateDisclaimer, u[34] = i) : i = u[34], u[35] !== h || u[36] !== C || u[37] !== y || u[38] !== x ? (l = h.isMostRecentTurn ? (0, a.jsx)(nY.a, {
                conversationId: h.conversationId,
                errorMessage: h.errorMessage,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                onRetry: null == h.onRegenerateResponse || null == C ? void 0 : async e => {
                    let t = y.get(ac.d, h.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = y.get(F.T, h.conversationId)?.metadata?.errorCode;
                    (0, ai.d)(y.get(ed.c).logProductEvent, {
                        conversationId: y.get(F.j, h.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await h.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, ac.e)(t.message, y.get(nT.t, h.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                showPendingLoadingMessage: h.showPendingLoadingMessage,
                showRequestUserInputStatus: h.showRequestUserInputStatus,
                trackShownImpressions: x,
                useDefaultModel: C?.useDefaultModel,
                isRetryDisabled: C?.isRetryDisabled
            }) : null, u[35] = h, u[36] = C, u[37] = y, u[38] = x, u[39] = l) : l = u[39], u[40] !== s || u[41] !== o || u[42] !== i || u[43] !== l ? (c = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [s, o, i, l]
            }), u[40] = s, u[41] = o, u[42] = i, u[43] = l, u[44] = c) : c = u[44], u[45] !== h.id || u[46] !== c || u[47] !== n ? (d = (0, a.jsxs)("div", {
                "data-content-search-turn-key": h.id,
                children: [n, c]
            }), u[45] = h.id, u[46] = c, u[47] = n, u[48] = d) : d = u[48], d
        }

        function ah(e) {
            let t, n, s, o = (0, r.c)(8),
                {
                    entries: i,
                    historyLoader: l,
                    isVisible: c
                } = e,
                d = c ? l : null;
            return o[0] !== i ? (t = (0, a.jsx)(aa.a, {
                entries: i,
                preserveMeasuredTurnViewport: !0,
                RowComponent: ap
            }), o[0] = i, o[1] = t) : t = o[1], o[2] !== d || o[3] !== t ? (n = (0, a.jsx)(ei.a, {
                value: null,
                children: (0, a.jsxs)(ek.a, {
                    value: null,
                    children: [d, t]
                })
            }), o[2] = d, o[3] = t, o[4] = n) : n = o[4], o[5] !== c || o[6] !== n ? (s = (0, a.jsx)(tG.a, {
                active: c,
                presentation: "panel",
                children: n
            }), o[5] = c, o[6] = n, o[7] = s) : s = o[7], s
        }

        function ap(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(au, {
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
        var am = n("wwvo"),
            ag = n("u4MG"),
            af = n("jAnS");
        let av = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(F.j, e);
            return null != a ? a : n(F.D, e) || n(nT.i, e) || null != n(nT.y, e) ? void 0 : null
        });

        function ay(e) {
            let t, n, s, o, i, l, c, d = (0, r.c)(30),
                {
                    children: u,
                    conversationId: h,
                    routePattern: m,
                    homePath: g
                } = e,
                f = void 0 === g ? "/" : g,
                {
                    hash: v,
                    pathname: y,
                    search: b,
                    state: x
                } = (0, w.W)(),
                {
                    gizmoId: C
                } = (0, w.ab)(),
                _ = (0, p.x)(av, h),
                I = (0, p.x)(F.D, h),
                T = (0, p.x)(F.R, h),
                j = I ? T : C;
            d[0] !== j ? (t = null != j && (0, ag.a)(j) ? j : null, d[0] = j, d[1] = t) : t = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                enabled: !1
            }, d[2] = n) : n = d[2];
            let {
                data: S
            } = (0, p.x)(eL.b, t, n);
            d[3] !== j ? (s = null == j || (0, ag.a)(j) ? null : j, d[3] = j, d[4] = s) : s = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (o = {
                enabled: !1
            }, d[5] = o) : o = d[5];
            let {
                data: E
            } = (0, p.x)(am.b, s, o);
            if (null === _ || (0, af.f)(b) && null != _ && !I) {
                let e;
                return d[6] !== f || d[7] !== b ? (e = (0, a.jsx)(w.k, {
                    replace: !0,
                    to: {
                        pathname: f,
                        search: b
                    }
                }), d[6] = f, d[7] = b, d[8] = e) : e = d[8], e
            }
            d[9] !== h || d[10] !== E?.gizmo || d[11] !== j || d[12] !== S?.gizmo || d[13] !== _ || d[14] !== m ? (i = null != m ? (0, w.B)(m, {
                conversationId: _ ?? h
            }) : (0, af.c)(_ ?? h, {
                gizmoId: S?.gizmo.short_url ?? E?.gizmo.short_url ?? j
            }), d[9] = h, d[10] = E?.gizmo, d[11] = j, d[12] = S?.gizmo, d[13] = _, d[14] = m, d[15] = i) : i = d[15];
            let P = i;
            if (d[16] !== P || d[17] !== v || d[18] !== y || d[19] !== _ || d[20] !== b || d[21] !== x) {
                let e = new URLSearchParams(b),
                    t = null != _ && e.has("mfr"),
                    n = x;
                if (t) {
                    let t, a;
                    if (e.delete("mfr"), d[23] !== x ? (t = x ?? {}, d[23] = x, d[24] = t) : t = d[24], d[25] !== t) {
                        let {
                            modelFirstLanding: e,
                            modelFirstFallback: n,
                            ...r
                        } = t;
                        a = r, d[25] = t, d[26] = a
                    } else a = d[26];
                    n = a
                }
                l = y !== P || t ? (0, a.jsx)(w.k, {
                    replace: !0,
                    state: n,
                    to: {
                        hash: t ? "" : v,
                        pathname: P,
                        search: t ? e.toString() : b
                    }
                }) : null, d[16] = P, d[17] = v, d[18] = y, d[19] = _, d[20] = b, d[21] = x, d[22] = l
            } else l = d[22];
            return d[27] !== u || d[28] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [l, u]
            }), d[27] = u, d[28] = l, d[29] = c) : c = d[29], c
        }
        var ab = n("SZCv"),
            ax = n.n(ab),
            aC = n("ALWK"),
            a_ = n("PC5z"),
            aw = n("lZ4W"),
            aI = n("aRto"),
            aT = n("WWSI"),
            aj = n("U3Gy"),
            aS = n("mKTJ");
        let aE = (0, p.c)(tE.a, e => {
                let {
                    get: t
                } = e;
                return t(aC.n)
            }, {
                isEqual: ax()
            }),
            aP = (0, p.c)(tE.a, e => {
                let {
                    get: t
                } = e;
                return t(a_.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function aA(e) {
            let t, n, s, o, i = (0, r.c)(19),
                {
                    conversationId: l,
                    entries: c,
                    onApiChange: d,
                    onVisibleContentReady: u,
                    responseSpacerState: h
                } = e,
                {
                    sharedConversationId: m
                } = (0, w.ab)(),
                g = (0, p.z)(null == m ? null : aE),
                f = (0, p.z)(aP);
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
                y = (0, b.useContext)(aI.a),
                x = c.at(-1);
            if (y?.aboveComposer != null && null != x && v.push(x.turnKey), null != m && g?.size)
                for (let e of c) e.turn.items.flatMap(aN).some(e => "chatgpt-hosted-widget" === e.type && (0, aS.f)(e) && g.has((0, aS.e)(m, e.messageId))) && v.push(e.turnKey);
            let C = c.findLast(ak);
            h?.voiceAutoScrollEnabled && null != C && v.push(C.turnKey);
            let _ = (0, p.x)(aw.a, l);
            if (null != _) {
                let e;
                i[2] !== _ ? (e = e => e.turn.items.flatMap(aM).some(e => "user-message" === e.type && e.messageId === _), i[2] = _, i[3] = e) : e = i[3];
                let t = c.find(e);
                null != t && v.push(t.turnKey)
            }
            let I = (0, p.x)(aj.b, l);
            i[4] !== l || i[5] !== c || i[6] !== I ? (n = (0, aT.a)(c, I, l), i[4] = l, i[5] = c, i[6] = I, i[7] = n) : n = i[7];
            let T = h?.getHeightPx,
                j = h?.voiceAutoScrollEnabled ? C?.turnKey : void 0,
                S = h?.onTurnLayoutReady;
            return i[8] !== h ? (s = e => {
                let {
                    heightDeltaPx: t
                } = e;
                h?.consumeGrowth(t ?? 0)
            }, i[8] = h, i[9] = s) : s = i[9], i[10] !== d || i[11] !== u || i[12] !== v || i[13] !== n || i[14] !== T || i[15] !== j || i[16] !== S || i[17] !== s ? (o = (0, a.jsx)(aa.a, {
                entries: n,
                getBottomScrollPaddingPx: T,
                layoutReadyTurnKey: j,
                onTurnLayoutReady: S,
                onLatestTurnHeightChange: s,
                onApiChange: d,
                onVisibleContentReady: u,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: v,
                RowComponent: au
            }), i[10] = d, i[11] = u, i[12] = v, i[13] = n, i[14] = T, i[15] = j, i[16] = S, i[17] = s, i[18] = o) : o = i[18], o
        }

        function aM(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function ak(e) {
            let {
                turn: t
            } = e;
            return t.items.some(aR)
        }

        function aR(e) {
            return "user-message" === e.type
        }

        function aN(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var aO = n("XAP6"),
            aG = n("bzoy"),
            az = n("LYS1"),
            aB = n("aZoZ"),
            aL = n("Gv8v"),
            aF = n("EGpF"),
            aD = n("mTPq"),
            aH = n("Vcrm"),
            aW = n("MxKj");
        let aq = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(F._, e);
            if (!(0, F.zb)(a)) return !0;
            let r = n(F.L, e),
                s = n(F.B, e);
            if (null == r || null == s) return !1;
            let o = r[s]?.message;
            if (null == o || az.a.has(o.author.role)) return !1;
            let i = n(F.x, e),
                l = (0, aD.c)({
                    mapping: r,
                    current_node: s
                }, n(F.Q, e)),
                c = n(F.bb, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(F.j, e) && !(0, aG.e)(n(F.o, e)) && null != c && !n(aO.b).has(c) && null != aK(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });
        async function aU(e, t) {
            let {
                conversationId: n,
                isTemporaryChat: a = !1,
                messageId: r,
                prompt: s,
                renderFormat: o,
                inlineSystemHints: i
            } = t;
            if (e.get(nT.i, n)) throw new aL.a("edit_message_busy", "The chat is busy.");
            let l = e.get(F.x, n);
            if ("tpp" === l) throw new aL.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
            if (!e.get(aq, n)) throw new aL.a("edit_message_busy", "The chat is busy.");
            let c = e.get(aB.b, {
                conversationId: n,
                messageId: r
            });
            if (null == c) throw new aL.a("edit_message_target_unavailable", "The user message could not be edited.");
            let {
                selectedModel: d
            } = c, u = s.trim(), h = (0, aB.c)(c.message, e.get, i), p = (0, aW.c)({
                message: c.message,
                prompt: u,
                renderFormat: o,
                systemHints: h,
                inlineSystemHints: i
            }), m = (0, v.f)(p.message.metadata), g = p.message.content, f = "multimodal_text" === g.content_type && g.parts.some(e => "string" != typeof e);
            if (0 === u.length && 0 === m.length && !f) throw new aL.a("edit_message_empty", "The edited message cannot be empty.");
            if (e.get(tR.c, "3574573347")) {
                let t = e.get(aB.a, n);
                t?.messageId === r && t.prompt === s && ax()((0, aB.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(aB.a, n, {
                    messageId: r,
                    prompt: s,
                    isTemporaryChat: a,
                    inlineSystemHints: i
                }), (0, nU.f)(e, n, {
                    isTemporaryChat: a
                }))
            }
            let y = aK(e.get, n),
                b = y.request.current,
                x = () => aK(e.get, n).request.current === b && ax()(e.get(aB.b, {
                    conversationId: n,
                    messageId: r
                }), c) && !(0, F.zb)(e.get(F._, n));
            e.set(nT.i, n, !0);
            try {
                if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(aH.a, n) && (await b.stop(), await b.closed), !x()) throw new aL.a("edit_message_target_unavailable", "The edited message or active response changed.");
                await (0, aW.submitChatGPTCompletion)(e, {
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
                e.set(nT.i, n, !1)
            }
        }

        function aK(e, t) {
            let n = e(aF.a, t),
                a = e(F.j, t);
            return null == n.request.current && null != a ? e(aF.a, a) : n
        }
        var aV = n("xtkq"),
            aY = n("PG5R"),
            aQ = n("aEnb"),
            a$ = n("iLYI"),
            aZ = n("Ipgw"),
            aJ = n("wVX4");

        function aX(e) {
            let t, n, s, o, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, p.y)(eo.a),
                d = (0, C.a)(),
                u = (0, tF.a)(),
                h = (0, p.x)(F._, l),
                m = (0, p.x)(F.bb, l),
                g = (0, p.x)(F.v, l),
                f = (0, p.x)(F.ab, l),
                v = (0, b.useRef)(null),
                y = (0, b.useRef)(null);
            i[0] !== g || i[1] !== l || i[2] !== d || i[3] !== m || i[4] !== c || i[5] !== h || i[6] !== f ? (t = () => {
                let e = v.current;
                if (null == e) return;
                let t = y.current;
                if ((0, F.zb)(h)) {
                    e.textContent = "", y.current = {
                        conversationId: l,
                        requestId: m ?? ("active-async-turn" === h || "active-tpp-turn" === h ? g?.requestId : null) ?? (t?.conversationId === l ? t.requestId : null)
                    };
                    return
                }
                f || (y.current = null, t?.conversationId === l && "idle" === h && g?.result === "completed" && g.requestId === t.requestId && null == c.get(F.C, l) && (e.textContent = d.formatMessage({
                    id: "chatgptConversations.responseComplete",
                    defaultMessage: "Response complete",
                    description: "Polite screen-reader announcement after the ChatGPT response the user was waiting for finishes successfully"
                })))
            }, i[0] = g, i[1] = l, i[2] = d, i[3] = m, i[4] = c, i[5] = h, i[6] = f, i[7] = t) : t = i[7];
            let _ = (0, b.useEffectEvent)(t);
            return (i[8] !== _ ? (n = () => {
                _()
            }, i[8] = _, i[9] = n) : n = i[9], i[10] !== g || i[11] !== l || i[12] !== u || i[13] !== m || i[14] !== h || i[15] !== f ? (s = [l, h, m, g, f, u], i[10] = g, i[11] = l, i[12] = u, i[13] = m, i[14] = h, i[15] = f, i[16] = s) : s = i[16], (0, b.useEffect)(n, s), u) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, x.createPortal)((0, a.jsx)("span", {
                ref: v,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = o) : o = i[17], o) : null
        }
        var a0 = n("OOaz"),
            a1 = n("n5iL"),
            a2 = n("q542"),
            a3 = n("pDUk"),
            a4 = n("GaCK"),
            a6 = n("Dofq");
        let a5 = (0, eY.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(33944)]).then(n.bind(n, "p8Fu"))).ChatGptThreadSummaryPanelBody, {
            fallback: (0, a.jsx)(a2.a.Content, {
                children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-0.5 px-5",
                    children: (0, a.jsx)("span", {
                        className: "select-none",
                        role: "status",
                        children: (0, a.jsx)(_.a, {
                            id: "chatgptConversations.summaryPanel.loading",
                            defaultMessage: "Loading summary…",
                            description: "Status shown in the Work task summary panel while its interface downloads"
                        })
                    })
                })
            }),
            errorFallback: (0, a.jsx)(a2.a.Content, {
                children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-0.5 px-5",
                    children: (0, a.jsx)("span", {
                        className: "select-none",
                        role: "status",
                        children: (0, a.jsx)(_.a, {
                            id: "chatgptConversations.summaryPanel.loadError",
                            defaultMessage: "Summary could not load. Reload the app to try again",
                            description: "Recovery instructions in the Work task summary panel after its interface fails to download; closing the panel does not retry"
                        })
                    })
                })
            })
        });

        function a8(e) {
            let t, n, s, o = (0, r.c)(6);
            o[0] !== e ? ({
                readData: n,
                ...t
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]);
            let i = (0, a2.b)(),
                [l, c] = (0, b.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), o[3] !== l || o[4] !== t ? (s = null == l ? null : (0, a.jsx)(a5, {
                ...t,
                data: l.data
            }), o[3] = l, o[4] = t, o[5] = s) : s = o[5], s
        }

        function a7(e) {
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
                f = (0, eT.h)("2903661647"),
                v = f ? "dynamic-isle" : "summary";
            return o[0] !== g || o[1] !== v ? (t = {
                scope: g,
                layout: v
            }, o[0] = g, o[1] = v, o[2] = t) : t = o[2], o[3] !== l || o[4] !== i || o[5] !== f || o[6] !== c || o[7] !== u || o[8] !== m ? (n = (0, a.jsx)(a8, {
                conversationId: i,
                composerActions: l,
                readData: c,
                isUnifiedDynamicIsleEnabled: f,
                showSources: m,
                shouldBlockExternalEgress: u
            }, i), o[3] = l, o[4] = i, o[5] = f, o[6] = c, o[7] = u, o[8] = m, o[9] = n) : n = o[9], o[10] !== d.shouldHideInlineImmediately || o[11] !== d.shouldShow || o[12] !== t || o[13] !== n ? (s = (0, a.jsx)(a2.a.Root, {
                analytics: t,
                shouldHideInlineImmediately: d.shouldHideInlineImmediately,
                shouldShow: d.shouldShow,
                children: n
            }), o[10] = d.shouldHideInlineImmediately, o[11] = d.shouldShow, o[12] = t, o[13] = n, o[14] = s) : s = o[14], s
        }

        function a9(e) {
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
                y = (0, p.y)(D.a),
                x = (0, b.useContext)(ei.a),
                _ = (0, C.a)(),
                w = (0, eT.h)("2903661647"),
                I = (0, p.z)(null == h ? t1.N : null);
            l[0] !== h?.isOpen || l[1] !== I ? (t = h?.isOpen ?? (0, t1.z)(I, !0), l[0] = h?.isOpen, l[1] = I, l[2] = t) : t = l[2];
            let T = t,
                j = (0, p.z)(a4.b),
                S = h?.isOpen ?? j.isPopoverOpen,
                E = (0, p.x)(a1.f, "togglePinnedSummary");
            (0, tB.b)(y), l[3] !== h || l[4] !== y ? (n = () => {
                null != h ? h.onOpenChange(!h.isOpen) : (0, a6.b)(y)
            }, l[3] = h, l[4] = y, l[5] = n) : n = l[5];
            let P = n;
            (0, ny.a)("togglePinnedSummary", P);
            let M = c ? "browser:rounded-lg browser:bg-surface" : void 0;
            return l[6] !== u || l[7] !== x || l[8] !== h || l[9] !== d || l[10] !== _ || l[11] !== T || l[12] !== S || l[13] !== w || l[14] !== j.displayMode || l[15] !== m || l[16] !== y || l[17] !== E || l[18] !== g || l[19] !== v || l[20] !== P ? (s = "overlay" === j.displayMode ? (0, a.jsx)(a3.a, {
                isOpen: S,
                shouldPreventAutoFocus: h?.shouldPreventAutoFocus,
                onOpenChange: e => {
                    null != h ? h.onOpenChange(e) : y.set(a4.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                        ...t,
                        isPopoverOpen: e
                    })
                },
                trigger: (0, a.jsx)(a2.a.HeaderButton, {
                    analytics: {
                        scope: y
                    },
                    label: _.formatMessage({
                        id: "chatgptConversations.summaryPanel.toggle",
                        defaultMessage: "Toggle summary",
                        description: "Button label for toggling the ChatGPT summary panel"
                    }),
                    pressed: S,
                    shortcut: E
                }),
                children: null != m ? (0, a.jsx)(ei.a, {
                    value: x,
                    children: (0, a.jsx)(a2.a.PopoverContent, {
                        analytics: {
                            scope: y,
                            layout: w ? "dynamic-isle" : "summary"
                        },
                        children: (0, a.jsx)(a8, {
                            conversationId: d,
                            composerActions: u,
                            readData: m,
                            isUnifiedDynamicIsleEnabled: w,
                            showSources: v,
                            shouldBlockExternalEgress: g
                        }, d)
                    })
                }) : null
            }) : (0, a.jsx)(a2.a.HeaderButton, {
                analytics: {
                    scope: y
                },
                label: _.formatMessage({
                    id: "chatgptConversations.summaryPanel.togglePinned",
                    defaultMessage: "Toggle pinned summary",
                    description: "Button label for toggling whether the ChatGPT summary panel reserves layout space"
                }),
                pressed: T,
                shortcut: E,
                onClick: P
            }), l[6] = u, l[7] = x, l[8] = h, l[9] = d, l[10] = _, l[11] = T, l[12] = S, l[13] = w, l[14] = j.displayMode, l[15] = m, l[16] = y, l[17] = E, l[18] = g, l[19] = v, l[20] = P, l[21] = s) : s = l[21], l[22] !== M || l[23] !== s ? (o = (0, a.jsx)("div", {
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
        var re = n("JjRy"),
            rt = n.n(re),
            rn = n("G4E3"),
            ra = n("KaH3"),
            rr = n("Yz3b"),
            rs = n("ghNX"),
            ro = n("KvVi"),
            ri = n("m250"),
            rl = n("Ng4B"),
            rc = n("bTKb"),
            rd = n("dGDB"),
            ru = n("lIsV");

        function rh(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        var rp = n("JlMc"),
            rm = n("TUMj"),
            rg = n("f6KK"),
            rf = n("JPXZ"),
            rv = n("zWHk");

        function ry(e) {
            let t, n, a, s, o, i, l, c = (0, r.c)(34),
                {
                    composerController: d,
                    enabled: u
                } = e,
                h = (0, w.W)(),
                p = (0, w.Y)();
            if (c[0] !== h.search) {
                let e = new URLSearchParams(h.search);
                t = e.get("prompt"), n = e.get("promptSource"), c[0] = h.search, c[1] = t, c[2] = n
            } else t = c[1], n = c[2];
            let m = n,
                g = h.key,
                f = (0, b.useRef)(null);
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
            let v = (0, b.useEffectEvent)(a);
            return c[10] !== v || c[11] !== d || c[12] !== u || c[13] !== g || c[14] !== t ? (s = () => {
                if (!u && t && f.current !== g) return (0, rv.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(g) && v()
                })
            }, c[10] = v, c[11] = d, c[12] = u, c[13] = g, c[14] = t, c[15] = s) : s = c[15], c[16] !== d || c[17] !== u || c[18] !== g || c[19] !== t ? (o = [d, u, g, t], c[16] = d, c[17] = u, c[18] = g, c[19] = t, c[20] = o) : o = c[20], (0, b.useLayoutEffect)(s, o), c[21] !== v || c[22] !== d || c[23] !== u || c[24] !== g || c[25] !== t || c[26] !== m ? (i = () => {
                if (!u || !t || f.current === g || (f.current = g, v(), !d.consumeLocationPromptPrefill(g))) return;
                let {
                    view: e
                } = d, n = t.replace(/\r\n/g, "\n"), a = "codex-app" === m ? (0, rf.f)({
                    schema: e.state.schema,
                    text: n,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, rf.e)({
                    schema: e.state.schema,
                    text: n
                }), r = e.state.tr.replaceWith(0, e.state.doc.content.size, a.content);
                r.setSelection(rg.h.atEnd(r.doc)), e.dispatch(r)
            }, c[21] = v, c[22] = d, c[23] = u, c[24] = g, c[25] = t, c[26] = m, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== g || c[31] !== t || c[32] !== m ? (l = [d, u, g, t, m], c[28] = d, c[29] = u, c[30] = g, c[31] = t, c[32] = m, c[33] = l) : l = c[33], (0, b.useLayoutEffect)(i, l), null
        }
        var rb = n("zKCW");

        function rx(e) {
            let t, n, s, o, i, l = (0, r.c)(11),
                {
                    canConvert: c,
                    isChatInstantAvailable: d,
                    isConverting: u,
                    onConvert: h
                } = e;
            l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(_.a, {
                id: "chatgptConversations.workOnlyConversion.title",
                defaultMessage: "Continue in Work",
                description: "Banner title shown in a disabled historical Chat conversation for a Work-only member in Codex Desktop"
            }), l[0] = t) : t = l[0], l[1] !== d ? (n = d ? (0, a.jsx)(_.a, {
                id: "chatgptConversations.workOnlyConversion.instantDescription",
                defaultMessage: "Move this chat to Work to use agentic tools and take on more complex tasks. You can still use chat instant for quick questions",
                description: "Banner description shown for a Chat Instant conversation when a Work-only member can continue using Chat Instant in Codex Desktop"
            }) : (0, a.jsx)(_.a, {
                id: "chatgptConversations.workOnlyConversion.description",
                defaultMessage: "Move this chat to Work to use agentic tools and take on more complex tasks",
                description: "Banner description shown when a Work-only member cannot continue a historical Chat conversation in Codex Desktop"
            }), l[1] = d, l[2] = n) : n = l[2];
            let p = !c;
            return l[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(_.a, {
                id: "chatgptConversations.workOnlyConversion.action",
                defaultMessage: "Convert to Work",
                description: "Button that converts a disabled historical Chat conversation to Work in Codex Desktop"
            }), l[3] = s) : s = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (o = (0, a.jsx)(eW.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: s
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = o) : o = l[7], l[8] !== n || l[9] !== o ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(rb.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: o
                })
            }), l[8] = n, l[9] = o, l[10] = i) : i = l[10], i
        }
        var rC = n("pgeU");
        let r_ = (0, eY.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function rw(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, p.y)(eo.a),
                c = (0, p.x)(rC.a, i);
            return o[0] !== i || o[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(rC.a, i);
                        null != e && (0, rC.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], o[0] = i, o[1] = l, o[2] = t, o[3] = n) : (t = o[2], n = o[3]), (0, b.useEffect)(t, n), o[4] !== i || o[5] !== c ? (s = null == c ? null : (0, a.jsx)(r_, {
                conversationId: i,
                effect: c
            }, c.id), o[4] = i, o[5] = c, o[6] = s) : s = o[6], s
        }
        var rI = n("fr5e"),
            rT = n("LEgg");
        let rj = (0, eY.a)(async () => (await n.e(432800).then(n.bind(n, "T7hR"))).AutomationPlanHeaderShortcut);

        function rS(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, eT.h)("2840857813");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(rj, {
                conversationId: s
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        var rE = n("T33u");
        let rP = (0, eY.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function rA(e) {
            let t, n, s, o = (0, r.c)(10),
                {
                    conversationId: i,
                    scheduledAutomationId: l
                } = e,
                c = (0, p.x)(rE.a, i),
                d = (0, eT.h)("3901104270");
            return o[0] !== i || o[1] !== c ? (t = null == c ? (0, a.jsx)(rS, {
                conversationId: i
            }) : null, o[0] = i, o[1] = c, o[2] = t) : t = o[2], o[3] !== i || o[4] !== d || o[5] !== l ? (n = d && null != l ? (0, a.jsx)(rP, {
                conversationId: i,
                automationId: l
            }) : null, o[3] = i, o[4] = d, o[5] = l, o[6] = n) : n = o[6], o[7] !== t || o[8] !== n ? (s = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), o[7] = t, o[8] = n, o[9] = s) : s = o[9], s
        }
        async function rM() {
            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
        }
        async function rk() {
            return (await n.e(963775).then(n.bind(n, "fUWe"))).openConversationFiles
        }
        var rR = n("Qgfj"),
            rN = n("rmk3"),
            rO = n("f38C"),
            rG = n("MRlq"),
            rz = n("fQbA"),
            rB = n("dDDU"),
            rL = n("soaw"),
            rF = n("ZrYB"),
            rD = n("X6Vn"),
            rH = n("Kwur");
        async function rW(e, t) {
            let a = await rH.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                parameters: {
                    path: {
                        conversation_id: t
                    }
                }
            }).catch(() => null);
            return a?.can_share && 0 !== a.av_sessions.length ? [{
                id: "share-live-session",
                icon: n5.Vi,
                message: (0, rR.e)({
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
                        (0, rD.f)(e, r, {
                            conversationId: t,
                            sessions: a.av_sessions
                        })
                    })
                }
            }] : []
        }
        var rq = n("MYlA"),
            rU = n("sfmI"),
            rK = n("JCtZ"),
            rV = n("g2p6"),
            rY = n("oaTv"),
            rQ = n("PME0"),
            r$ = n("lgcP"),
            rZ = n("AcSY"),
            rJ = n("w7E5"),
            rX = n("QmkR"),
            r0 = n("xEXG"),
            r1 = n("J6LI"),
            r2 = n("lUUH"),
            r3 = n("ftAl");

        function r4(e) {
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
                } = (0, rZ.m)(),
                v = (0, r0.b)();
            return o[0] !== f || o[1] !== l || o[2] !== c || o[3] !== d || o[4] !== u || o[5] !== v || o[6] !== g ? (t = () => {
                let e = g.get(r3.a, l, {
                        enabled: !1
                    }),
                    t = (0, ag.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : g.query.getData(eL.b, t);
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
                    } = e, c = (0, ag.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(rJ.a), u = t.get(rX.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, m = (a?.conversation_origin === "tpp" || a?.conversation_origin === "flora") && ("allowed" === o || h?.pages.some(e => null != e.cursor) === !0), g = t.get(rX.h, n);
                    return null == s || null == a || t.get(rX.g, n) || (0, r1.c)(a, r).sourceUnavailable || null == (0, r1.b)(t, a, g, !1) || null != c && null == r || null == h || 0 === p && !m ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: r7.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, r2.b)({
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
                    let e = g.get(nK.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await g.query.getOrFetch(nK.chatGptConversationQueryById$, l).catch(r8), null == g.query.getData(nK.chatGptConversationQueryById$, l) && await g.query.getOrFetch(rX.j, [l]).catch(r5)
                })(), h?.()]);
                let e = g.get(r3.a, l, {
                    enabled: !1
                });
                (0, ag.a)(e?.gizmo_id) && e?.gizmo_id != null && await g.query.getOrFetch(eL.b, e.gizmo_id).catch(r6)
            }, o[8] = l, o[9] = h, o[10] = g, o[11] = n) : n = o[11], o[12] !== i || o[13] !== m || o[14] !== t || o[15] !== n ? (s = (0, a.jsx)(rN.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                onOpenChange: m,
                renderItem: rz.b,
                trigger: "click",
                children: i
            }), o[12] = i, o[13] = m, o[14] = t, o[15] = n, o[16] = s) : s = o[16], s
        }

        function r6() {}

        function r5() {}

        function r8() {}
        let r7 = (0, rR.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}",
                description: "Name of a ChatGPT project offered as a destination for moving a conversation or Work task"
            }
        });

        function r9(e) {
            let t, n, s, o, i, l, c, d, u, h, m, g, f, v, y, x, _, I, T, j = (0, r.c)(70),
                {
                    conversationOrigin: P,
                    conversationId: A,
                    title: M,
                    isHandoffPending: k,
                    isArchived: R,
                    isChatConversation: N,
                    onHandoff: O,
                    onOpenMessage: z,
                    projectId: B,
                    projectName: L,
                    serverConversationId: F
                } = e,
                H = (0, p.y)(D.a),
                W = (0, p.y)(eo.a),
                q = (0, rL.a)(),
                U = (0, eT.k)();
            j[0] !== U ? (t = U.checkGate("224248639"), j[0] = U, j[1] = t) : t = j[1];
            let K = t;
            j[2] !== U ? (n = U.getLayer("3017902351").get("web_file_library_enabled", !1), j[2] = U, j[3] = n) : n = j[3];
            let V = n,
                Y = K || V;
            j[4] !== Y ? (s = {
                enabled: Y
            }, j[4] = Y, j[5] = s) : s = j[5];
            let {
                data: Q
            } = (0, p.z)(rV.p, s), $ = Y && Q?.fileLibraryEnabledForRegistrationCountry !== !1, Z = (0, C.a)(), J = (0, w.Y)(), [X, ee] = (0, b.useState)(null), [et, en] = (0, b.useState)(!1), ea = (0, b.useRef)(null), er = (0, b.useRef)(null);
            j[6] === Symbol.for("react.memo_cache_sentinel") ? (o = [], j[6] = o) : o = j[6];
            let ei = (0, b.useRef)(o);
            j[7] === Symbol.for("react.memo_cache_sentinel") ? (i = {
                name: "chatgpt"
            }, j[7] = i) : i = j[7];
            let {
                isCapable: el
            } = (0, p.x)(S.a, i), ec = (0, p.x)(rX.g, F);
            j[8] === Symbol.for("react.memo_cache_sentinel") ? (l = () => ee("shortcut"), j[8] = l) : l = j[8];
            let ed = N && !ec;
            j[9] !== H || j[10] !== F ? (c = () => (0, rU.a)(H.query.getData(nK.chatGptConversationQueryById$, F), H.get(G.h), H.get(G.g)), j[9] = H, j[10] = F, j[11] = c) : c = j[11], j[12] !== ed || j[13] !== c ? (d = {
                enabled: ed,
                isActive: c
            }, j[12] = ed, j[13] = c, j[14] = d) : d = j[14], (0, ny.a)("deleteChat", l, d), j[15] !== W || j[16] !== ec || j[17] !== J || j[18] !== H || j[19] !== F ? (u = () => {
                !ec && (0, rU.a)(H.query.getData(nK.chatGptConversationQueryById$, F), H.get(G.h), H.get(G.g)) && (ee(null), (0, r$.a)(W, F), J("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, j[15] = W, j[16] = ec, j[17] = J, j[18] = H, j[19] = F, j[20] = u) : u = j[20];
            let eu = u;
            j[21] !== Z ? (h = Z.formatMessage(sa.chatActions), j[21] = Z, j[22] = h) : h = j[22];
            let eh = h;
            j[23] !== H || j[24] !== F ? (m = async () => {
                let e = [];
                ei.current = e, e.push(...await rW(H, F))
            }, j[23] = H, j[24] = F, j[25] = m) : m = j[25];
            let ep = m;
            j[26] !== A || j[27] !== P || j[28] !== $ || j[29] !== Z || j[30] !== ec || j[31] !== R || j[32] !== k || j[33] !== q || j[34] !== J || j[35] !== O || j[36] !== z || j[37] !== B || j[38] !== L || j[39] !== H || j[40] !== F || j[41] !== U || j[42] !== M ? (g = e => {
                let t = H.get(G.f),
                    n = H.get(G.k),
                    a = (0, rU.a)(H.query.getData(nK.chatGptConversationQueryById$, F), H.get(G.h), H.get(G.g)),
                    r = (0, nx.b)(H, F),
                    s = !ec && (0, rU.a)(r, H.get(G.h), H.get(G.g)),
                    o = H.get(E.a).pathname,
                    i = () => q() && o === H.get(E.a).pathname && t === H.get(G.f) && n === H.get(G.k),
                    l = (0, rY.a)(H, A, P, () => (0, rQ.a)(J)),
                    c = [];
                return U.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && c.push({
                    id: "chatgpt-audio-summary",
                    message: (0, rR.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary",
                        description: "Opens the dialog for generating and listening to an audio summary of the current chat"
                    }),
                    icon: n5.kg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        rM().then(e => {
                            i() && e(H, F)
                        }).catch(() => {
                            i() && (ea.current?.focus({
                                preventScroll: !0
                            }), H.get(es.f).danger(Z.formatMessage({
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
                }), $ && c.unshift({
                    id: "chatgpt-conversation-files",
                    message: (0, rR.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat",
                        description: "Opens the side panel listing files referenced in the active saved ChatGPT conversation, even when the list is empty"
                    }),
                    icon: n5.rb,
                    onSelect: () => {
                        rk().then(e => {
                            i() && e(H, {
                                conversationId: A,
                                serverConversationId: F,
                                onOpenMessage: z
                            })
                        }).catch(() => {
                            i() && H.get(es.f).danger(Z.formatMessage({
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
                }), c.push(...(0, rB.a)(H)), (0, rK.a)(H, {
                    organizationItems: (0, rz.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: ei.current,
                    viewItems: c,
                    preferenceItems: null == l ? [] : [l],
                    surface: "header",
                    conversationId: F,
                    stateConversationId: A,
                    conversationOrigin: P,
                    title: M,
                    isHandoffPending: k,
                    canHandoff: null != O,
                    onHandoff: O,
                    projectId: B,
                    projectName: L,
                    onRename: !a || ec || R ? void 0 : () => (0, nx.c)(H, A),
                    isPinned: H.get(rX.h, F) ?? r?.is_starred === !0,
                    onTogglePin: s ? () => {
                        let e = (0, nx.b)(H, F);
                        !(null == e || H.get(rX.g, F)) && (0, rU.a)(e, H.get(G.h), H.get(G.g)) && (0, rX.V)({
                            scope: H,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(se)
                    } : void 0,
                    onArchive: !a || ec || R ? void 0 : () => (0, rF.a)(H, F),
                    onUnarchive: a && !ec && R ? () => {
                        (0, rX.W)({
                            scope: H,
                            conversationId: F
                        }).then(() => {
                            H.get(es.f).success(Z.formatMessage(rG.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            H.get(es.f).danger(Z.formatMessage(nC.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !a || ec ? void 0 : () => ee("menu")
                })
            }, j[26] = A, j[27] = P, j[28] = $, j[29] = Z, j[30] = ec, j[31] = R, j[32] = k, j[33] = q, j[34] = J, j[35] = O, j[36] = z, j[37] = B, j[38] = L, j[39] = H, j[40] = F, j[41] = U, j[42] = M, j[43] = g) : g = j[43];
            let em = g;
            j[44] !== eh ? (f = (0, a.jsx)(rO.a, {
                ref: ea,
                className: "no-drag",
                color: "primary",
                label: eh,
                size: "toolbar"
            }), j[44] = eh, j[45] = f) : f = j[45], j[46] !== et || j[47] !== eh || j[48] !== f ? (v = (0, a.jsx)(n6.a, {
                content: eh,
                disabled: et,
                children: f
            }), j[46] = et, j[47] = eh, j[48] = f, j[49] = v) : v = j[49];
            let eg = v;
            j[50] !== em || j[51] !== eg || j[52] !== J || j[53] !== el || j[54] !== ep || j[55] !== F ? (y = el ? (0, a.jsx)(r4, {
                conversationId: F,
                getBaseItems: em,
                menuTriggerRef: ea,
                navigate: J,
                onBeforeOpen: ep,
                onOpenChange: en,
                children: eg
            }) : (0, a.jsx)(rN.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => em(),
                onBeforeOpen: ep,
                onOpenChange: en,
                renderItem: rz.b,
                trigger: "click",
                children: eg
            }), j[50] = em, j[51] = eg, j[52] = J, j[53] = el, j[54] = ep, j[55] = F, j[56] = y) : y = j[56];
            let ef = "shortcut" === X,
                ev = null != X;
            return j[57] !== X ? (x = () => {
                er.current = "menu" === X ? ea.current : null, ee(null)
            }, j[57] = X, j[58] = x) : x = j[58], j[59] === Symbol.for("react.memo_cache_sentinel") ? (_ = e => {
                let t = er.current;
                if (er.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, j[59] = _) : _ = j[59], j[60] !== eu || j[61] !== ec || j[62] !== ef || j[63] !== ev || j[64] !== x || j[65] !== M ? (I = (0, a.jsx)(rq.a, {
                autoFocusConfirm: ef,
                open: ev,
                onOpenChange: x,
                onCloseAutoFocus: _,
                isDeleting: ec,
                onConfirm: eu,
                title: M
            }), j[60] = eu, j[61] = ec, j[62] = ef, j[63] = ev, j[64] = x, j[65] = M, j[66] = I) : I = j[66], j[67] !== y || j[68] !== I ? (T = (0, a.jsxs)(a.Fragment, {
                children: [y, I]
            }), j[67] = y, j[68] = I, j[69] = T) : T = j[69], T
        }

        function se() {}

        function st() {
            let e, t, n, s = (0, r.c)(8),
                o = (0, C.a)(),
                [i, l] = (0, b.useState)(!1);
            s[0] !== o ? (e = o.formatMessage(sa.more), s[0] = o, s[1] = e) : e = s[1];
            let c = e;
            return s[2] !== c ? (t = (0, a.jsx)(rO.a, {
                className: "no-drag",
                color: "primary",
                label: c,
                size: "toolbar"
            }), s[2] = c, s[3] = t) : t = s[3], s[4] !== i || s[5] !== c || s[6] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rN.a, {
                    preserveBrowserContextMenu: !0,
                    getItems: sn,
                    onOpenChange: l,
                    renderItem: rz.b,
                    trigger: "click",
                    children: (0, a.jsx)(n6.a, {
                        content: c,
                        disabled: i,
                        children: t
                    })
                })
            }), s[4] = i, s[5] = c, s[6] = t, s[7] = n) : n = s[7], n
        }

        function sn() {
            return (0, rz.a)([])
        }
        let sa = (0, rR.f)({
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
        var sr = n("mYLJ"),
            ss = n("WLgA");

        function so(e) {
            let t, n, s, o = (0, r.c)(10),
                {
                    allowsThreadContentOverlap: l,
                    project: c
                } = e,
                d = void 0 !== l && l,
                u = (0, C.a)(),
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
                children: (0, a.jsx)(w.f, {
                    className: "flex h-9 max-w-full min-w-8 shrink cursor-interaction items-center overflow-hidden rounded-lg px-2 text-start text-base text-secondary transition-colors hover:bg-surface-tertiary hover:text-default",
                    to: (0, ss.c)(c.gizmo.id),
                    children: (0, a.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-1.5",
                        children: [(0, a.jsx)(t_.a, {
                            className: "size-5",
                            color: c.gizmo.display.theme,
                            defaultColor: "secondary",
                            fallbackIcon: (0, a.jsx)(n5.ud, {}),
                            icon: c.gizmo.display.emoji,
                            sharedIcon: "shared" === (0, aJ.b)(c) ? (0, a.jsx)(sr.a, {}) : void 0
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
        var si = n("dLcZ"),
            sl = n("W5pg"),
            sc = n("QcW8"),
            sd = n("yC2B");

        function su(e) {
            let t, n, s, o, c, d, u, h, m, g, f = (0, r.c)(32),
                {
                    header: v,
                    courseShortcut: y,
                    progress: b
                } = e,
                {
                    titleBarLeftInset: x,
                    rightPanelAnimatedWidth: _,
                    isContentFullWidth: w
                } = (0, M.g)(),
                I = (0, p.z)(sc.Z),
                T = (0, p.z)(sc.ab),
                j = (0, C.a)();
            f[0] !== j.locale ? (t = (0, sd.a)(j.locale), f[0] = j.locale, f[1] = t) : t = f[1];
            let S = t,
                E = I?.mode === "split" && "left" === T != ("rtl" === S);
            f[2] !== E || f[3] !== w ? (n = e => E && !w ? e : 0, f[2] = E, f[3] = w, f[4] = n) : n = f[4];
            let P = (0, sl.a)(_, n);
            f[5] !== P || f[6] !== x ? (s = [x, P], f[5] = P, f[6] = x, f[7] = s) : s = f[7];
            let k = (0, sl.a)(s, sh);
            f[8] !== k || f[9] !== P ? (o = {
                "--learning-header-left-inset": k,
                insetInlineStart: P
            }, f[8] = k, f[9] = P, f[10] = o) : o = f[10];
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
            let N = u;
            if (null == b) return N;
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
            return f[25] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, i.b)("relative flex max-w-[min(var(--learning-progress-max-width),max(0px,calc(100cqw-2*(var(--app-shell-header-end-actions-width)+var(--spacing)*3))))] min-w-0 items-center", "[--learning-progress-max-width:var(--thread-content-max-width)]", "@max-thread-expanded/home-mode-toggle:[--learning-progress-max-width:var(--thread-content-compact-max-width,var(--thread-content-max-width))]"), f[25] = h) : h = f[25], f[26] !== N ? (m = (0, a.jsx)("div", {
                className: "absolute inset-y-0 end-full me-toolbar-action flex w-[max(0px,calc((100cqw-100%)/2-var(--spacing-toolbar-action)-var(--spacing)*2-var(--learning-header-left-inset)))] min-w-0 items-center overflow-hidden",
                "data-app-shell-header-obstacle": !0,
                children: N
            }), f[26] = N, f[27] = m) : m = f[27], f[28] !== b || f[29] !== R || f[30] !== m ? (g = (0, a.jsx)(A.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                children: (0, a.jsxs)(l.a.div, {
                    className: h,
                    style: R,
                    children: [m, b]
                })
            }), f[28] = b, f[29] = R, f[30] = m, f[31] = g) : g = f[31], g
        }

        function sh(e) {
            let [t, n] = e;
            return `${Math.max(0,t-n)}px`
        }
        var sp = n("X0li");
        let sm = (0, eY.a)(sp.c),
            sg = (0, eY.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            sf = (0, eY.a)(async () => (await n.e(286760).then(n.bind(n, "R4DB"))).SectionNavigation);
        var sv = n("lX86");
        n("i1of");
        var sy = n("alJ6"),
            sb = n("u9iS"),
            sx = n("KidQ");
        let sC = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function s_(e) {
            let t, n, s, o, i, l = (0, r.c)(15),
                {
                    children: c,
                    draftKey: d,
                    enableInlineSystemHints: u
                } = e,
                h = (0, p.y)(eo.a),
                m = (0, b.useContext)(e1.a),
                g = u ? "chatgpt" : void 0;
            return l[0] !== u || l[1] !== g ? (t = {
                enableInlineSystemHints: u,
                variant: g
            }, l[0] = u, l[1] = g, l[2] = t) : t = l[2], l[3] !== d || l[4] !== h ? (n = () => ({
                defaultText: h.get(nT.s, d),
                defaultTextKind: "prompt"
            }), l[3] = d, l[4] = h, l[5] = n) : n = l[5], l[6] !== m ? (s = () => {
                let e = m?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == m ? null : {
                    element: e,
                    locationKey: m.locationKey
                }
            }, l[6] = m, l[7] = s) : s = l[7], l[8] !== c ? (o = e => null == e ? null : c(e), l[8] = c, l[9] = o) : o = l[9], l[10] !== t || l[11] !== n || l[12] !== s || l[13] !== o ? (i = (0, a.jsx)(sx.a, {
                controllerOptions: sC,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: s,
                children: o
            }), l[10] = t, l[11] = n, l[12] = s, l[13] = o, l[14] = i) : i = l[14], i
        }
        var sw = n("ygKd"),
            sI = n("KSir"),
            sT = n("vVgo");
        let sj = (0, eY.a)(async () => (await n.e(642007).then(n.bind(n, "KhUL"))).CourseHeaderShortcut);

        function sS(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, eT.h)("4035922817");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(sj, {
                    conversationId: s
                })
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        var sE = n("QPeR"),
            sP = n("MgyE"),
            sA = n("gyrn"),
            sM = n("wnpN"),
            sk = n("M3Kf");

        function sR(e) {
            let t, n, s, i, l, c, d = (0, r.c)(21),
                {
                    conversationId: u
                } = e,
                h = (0, p.y)(eo.a),
                m = (0, p.x)(F.j, u),
                g = (0, p.z)(eM.b),
                {
                    search: f
                } = (0, w.W)();
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
                    await (0, eA.a)(h, m, n)
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
                refetch: C
            } = (0, o.a)(l);
            return d[18] !== x || d[19] !== C ? (c = x ? (0, a.jsx)(eW.a, {
                color: "secondary",
                onClick: () => void C(),
                children: (0, a.jsx)(_.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message",
                    description: "Button to retry loading the full conversation for a link to an older message"
                })
            }) : null, d[18] = x, d[19] = C, d[20] = c) : c = d[20], c
        }
        var sN = n("ckwE");

        function sO(e) {
            let t, n = (0, r.c)(3),
                {
                    children: s
                } = e,
                [o] = (0, b.useState)(sG);
            return n[0] !== o || n[1] !== s ? (t = (0, a.jsx)(ek.a, {
                value: o,
                children: s
            }), n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }

        function sG() {
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

        function sz(e) {
            let t, n = (0, r.c)(2),
                {
                    children: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(sN.a, {
                children: (0, a.jsx)(sO, {
                    children: s
                })
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var sB = n("MDmT"),
            sL = n("K45w"),
            sF = n("jCHb"),
            sD = n("V8uZ");

        function sH(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var sW = n("NqfB"),
            sq = n("JEFL"),
            sU = n("moBM");
        let sK = '[data-markdown-text-style="assistant-message"]',
            sV = (0, p.d)(eo.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(F.L, n)?.[a]?.message ?? null
            });

        function sY(e) {
            let t, n, s = (0, r.c)(5),
                o = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return s[0] !== e ? (t = t => (0, a.jsx)(sQ, {
                ...e,
                selection: t
            }), s[0] = e, s[1] = t) : t = s[1], s[2] !== o || s[3] !== t ? (n = (0, a.jsx)(sW.a, {
                align: "start",
                targetSelector: o,
                children: t
            }), s[2] = o, s[3] = t, s[4] = n) : n = s[4], n
        }

        function sQ(e) {
            let t, s, o, i, l, c, d, u = (0, r.c)(30),
                {
                    conversationId: h,
                    moreDetailsEnabled: m,
                    onAddSelectedText: g,
                    selection: f
                } = e,
                v = (0, p.y)(D.a),
                y = (0, C.a)(),
                b = (0, eT.h)("4290238484"),
                x = (0, eT.h)("473637331"),
                _ = (0, p.z)(sU.a),
                w = (0, p.x)(F.x, h);
            u[0] !== w || u[1] !== _ || u[2] !== v ? (t = _ && "tpp" === w && "chatgpt-thread" === v.value.routeKind && null == v.value.workSideChat && !0, u[0] = w, u[1] = _, u[2] = v, u[3] = t) : t = u[3];
            let I = t;
            u[4] !== h || u[5] !== f.selectionRange ? (s = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, s = a?.closest(sK);
                if (n.collapsed || null == s || !s.isConnected || s !== r?.closest(sK)) return null;
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
                j = T?.messageId ?? null;
            u[7] !== h || u[8] !== j ? (o = {
                conversationId: h,
                messageId: j
            }, u[7] = h, u[8] = j, u[9] = o) : o = u[9];
            let S = (0, p.x)(sV, o),
                E = (0, p.x)(F.j, h),
                P = b && m && null != E && null != T && S?.author.role === "assistant";
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
            } : void 0, u[10] = I, u[11] = v, u[12] = i) : i = u[12], u[13] !== P || u[14] !== x || u[15] !== g || u[16] !== f.selectionRange || u[17] !== T ? (l = !P || x ? e => {
                g(e, T?.messageId, null == T ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of nF(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(T.markdownElement, f.selectionRange, e))
            } : void 0, u[13] = P, u[14] = x, u[15] = g, u[16] = f.selectionRange, u[17] = T, u[18] = l) : l = u[18], u[19] !== P || u[20] !== h || u[21] !== y || u[22] !== v || u[23] !== T ? (c = P ? e => {
                Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(753405), n.e(585419), n.e(877700), n.e(636463), n.e(81461), n.e(42239), n.e(62441), n.e(242986), n.e(741325), n.e(16212), n.e(741494), n.e(496135)]).then(n.bind(n, "zRlR")).then(t => {
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
                        shouldBlockExternalEgress: v.get(nd.d, h),
                        sourceConversationId: h
                    })
                })
            } : void 0, u[19] = P, u[20] = h, u[21] = y, u[22] = v, u[23] = T, u[24] = c) : c = u[24], u[25] !== f.selectedText || u[26] !== i || u[27] !== l || u[28] !== c ? (d = (0, a.jsx)(sq.a, {
                conversationTerminology: "chat",
                selectedText: f.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), u[25] = f.selectedText, u[26] = i, u[27] = l, u[28] = c, u[29] = d) : d = u[29], d
        }
        var s$ = n("Fjze");

        function sZ(e) {
            let t, n, a, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = e,
                i = (0, p.y)(eo.a),
                l = null != o;
            s[0] !== i || s[1] !== o ? (t = () => {
                null != o && (rH.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: o
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(sJ), (0, ed.a)(i, s$.a, {
                    sharedConversationId: o
                }))
            }, s[0] = i, s[1] = o, s[2] = t) : t = s[2];
            let c = (0, b.useEffectEvent)(t);
            return s[3] !== c ? (n = () => {
                c()
            }, s[3] = c, s[4] = n) : n = s[4], s[5] !== l ? (a = [l], s[5] = l, s[6] = a) : a = s[6], (0, b.useEffect)(n, a), null
        }

        function sJ() {}
        var sX = n("GigQ"),
            s0 = n("JKdL"),
            s1 = n("gsAl"),
            s2 = n("HOLv"),
            s3 = n("FGv0"),
            s4 = n("r9i9"),
            s6 = n("tdfh"),
            s5 = n("SEBt"),
            s8 = n("uQqo"),
            s7 = n("vpB7");

        function s9(e) {
            let t, n, s, o, i, l = (0, r.c)(12),
                {
                    data: c
                } = e,
                d = (0, p.y)(eo.a),
                u = (0, C.a)();
            l[0] !== u ? (t = u.formatMessage(nC.a.headerShare), l[0] = u, l[1] = t) : t = l[1];
            let h = t,
                [m, g] = (0, b.useState)(!1);
            return l[2] !== c || l[3] !== m || l[4] !== d ? (n = () => {
                m || (g(!0), oe(d, c).finally(() => g(!1)))
            }, l[2] = c, l[3] = m, l[4] = d, l[5] = n) : n = l[5], l[6] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(s2.a, {
                asset: s7.a
            }), o = (0, a.jsx)(_.a, {
                ...nC.a.headerShare
            }), l[6] = s, l[7] = o) : (s = l[6], o = l[7]), l[8] !== m || l[9] !== h || l[10] !== n ? (i = (0, a.jsxs)(eW.a, {
                "aria-label": h,
                color: "ghostActive",
                loading: m,
                size: "toolbar",
                onClick: n,
                children: [s, o]
            }), l[8] = m, l[9] = h, l[10] = n, l[11] = i) : i = l[11], i
        }
        async function oe(e, t) {
            let a = t.sharedPost,
                r = a?.attachments[0]?.kind === "media_generation" ? (0, s8.a)(a, (0, s8.b)(a))[0] : null,
                s = crypto.randomUUID();
            (0, s5.b)(e, {
                attachmentType: t.attachmentType,
                contentType: t.contentType,
                shareId: t.shareId,
                shareSessionId: s
            });
            let o = t.dialogProps.receiverShareLink;
            if (o?.contentType === "conversation") {
                let a = (0, s5.a)(e, {
                        actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                        shareId: t.shareId,
                        shareSessionId: s,
                        source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                        usedExistingLink: !0,
                        omitSheetType: !0
                    }),
                    r = await (0, s3.a)(Promise.resolve(o.shareLinkUrl));
                if (a({
                        result: r ? "link-copied" : "copy-failed",
                        shareId: t.shareId
                    }), r) {
                    let {
                        showConversationShareCopiedToast: t
                    } = await n.e(555532).then(n.bind(n, "euaP"));
                    t(e, null, !0 === o.isWorkspaceOnly)
                } else(0, rD.f)(e, s6.a, {
                    ...t.dialogProps,
                    recoveryShareLink: o,
                    shareSessionId: s
                });
                return
            }(0, rD.f)(e, s6.a, {
                ...t.dialogProps,
                image: r?.src == null ? void 0 : {
                    alt: t.dialogProps.title ?? "",
                    item: r,
                    previewSrc: r.src
                },
                previewTurns: null != r ? void 0 : (0, s4.i)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId),
                privacyNotices: (0, s4.j)({
                    conversation: t.conversation,
                    projectId: null
                }),
                shareSessionId: s
            })
        }
        var ot = n("JUxu");
        let on = (0, b.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function oa(e) {
            let t, n, s, o, i = (0, r.c)(8),
                {
                    sharedConversationId: l
                } = e,
                c = (0, p.y)(eo.a);
            if (null != (0, p.x)(s1.e, (0, b.useContext)(O.a))) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(ot.a, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("div", {
                className: "text-secondary",
                children: (0, a.jsx)(_.a, {
                    id: "chatgptConversations.sharedConversation.copyDisclaimer",
                    defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory.",
                    description: "Informational notice above a shared ChatGPT chat explaining that the copy will not be added to the viewer's memory"
                })
            }), i[1] = t) : t = i[1], i[2] !== c || i[3] !== l ? (n = e => {
                if (null == l) return;
                let t = e.currentTarget;
                (0, rD.f)(c, on, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, s5.c)(c, l)
            }, i[2] = c, i[3] = l, i[4] = n) : n = i[4], i[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(_.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation",
                description: "Button above a shared ChatGPT conversation in Codex Desktop that opens ChatGPT's report modal for reporting another person's shared conversation"
            }), i[5] = s) : s = i[5], i[6] !== n ? (o = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(eW.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: s
                })]
            }), i[6] = n, i[7] = o) : o = i[7], o
        }
        var or = n("zbjM"),
            os = n("Xslx"),
            oo = n("MVHH"),
            oi = n("xSOA"),
            ol = n("rhKI"),
            oc = n("PP3M"),
            od = n("CFOe"),
            ou = n("JNtf"),
            oh = n("mUDD");

        function op(e) {
            let t, n, s, o, i, l, c, d, u, h, p, m, g, f = (0, r.c)(31),
                {
                    canSave: v,
                    isPending: y,
                    onCancel: b,
                    onClose: x,
                    onSave: C
                } = e;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(_.a, {
                id: "chatgptConversations.temporaryChat.save.close",
                defaultMessage: "Close",
                description: "Accessible label for the close button in the temporary chat save confirmation dialog."
            }), f[0] = t) : t = f[0], f[1] !== y || f[2] !== x ? (n = e => {
                e || y || x()
            }, f[1] = y, f[2] = x, f[3] = n) : n = f[3];
            let w = !y;
            f[4] !== v || f[5] !== C ? (s = e => {
                e.preventDefault(), v && C()
            }, f[4] = v, f[5] = C, f[6] = s) : s = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(ou.e, {
                children: (0, a.jsx)(_.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?",
                    description: "Title of the confirmation dialog for converting a temporary ChatGPT conversation into a regular saved chat."
                })
            }), f[7] = o) : o = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(oh.e, {
                children: (0, a.jsx)(oh.d, {
                    className: "select-none",
                    title: o,
                    subtitle: (0, a.jsx)(ou.d, {
                        children: (0, a.jsx)(_.a, {
                            id: "chatgptConversations.temporaryChat.save.description.regularChatSettings",
                            defaultMessage: "This chat will now be included in your history. It will follow your memory and model training settings used for regular chats.",
                            description: "Body of the confirmation dialog shown when a user saves a temporary ChatGPT conversation. Explains before they confirm that the chat will appear in history and follow the memory and model training settings already configured for regular chats."
                        })
                    })
                })
            }), f[8] = i) : i = f[8], f[9] !== b || f[10] !== x ? (l = () => {
                b?.(), x()
            }, f[9] = b, f[10] = x, f[11] = l) : l = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(_.a, {
                id: "chatgptConversations.temporaryChat.save.cancel",
                defaultMessage: "Cancel",
                description: "Secondary button that closes the save confirmation dialog and leaves the ChatGPT conversation temporary."
            }), f[12] = c) : c = f[12], f[13] !== y || f[14] !== l ? (d = (0, a.jsx)(eW.a, {
                color: "secondary",
                disabled: y,
                onClick: l,
                children: c
            }), f[13] = y, f[14] = l, f[15] = d) : d = f[15];
            let I = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(_.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save",
                description: "Primary button that saves a temporary ChatGPT conversation to regular chat history."
            }), f[16] = u) : u = f[16], f[17] !== y || f[18] !== I ? (h = (0, a.jsx)(eW.a, {
                color: "primary",
                disabled: I,
                loading: y,
                type: "submit",
                children: u
            }), f[17] = y, f[18] = I, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(oh.e, {
                children: (0, a.jsxs)(oh.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== s ? (m = (0, a.jsxs)(oh.b, {
                as: "form",
                onSubmit: s,
                children: [i, p]
            }), f[23] = p, f[24] = s, f[25] = m) : m = f[25], f[26] !== y || f[27] !== m || f[28] !== n || f[29] !== w ? (g = (0, a.jsx)(ou.b, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: w,
                size: "narrow",
                children: m
            }), f[26] = y, f[27] = m, f[28] = n, f[29] = w, f[30] = g) : g = f[30], g
        }

        function om(e) {
            (0, nK.e)(e).catch(() => {
                na.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function og(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(of, {
                        conversationId: s
                    })
                })]
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function of(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return (0, p.z)(oc.e) ? (n[0] !== s ? (t = (0, a.jsx)(ov, {
                conversationId: s
            }), n[0] = s, n[1] = t) : t = n[1], t) : null
        }

        function ov(e) {
            let t, n, s, o, i, l, c, d, u, h, m, g, f, v = (0, r.c)(49),
                {
                    conversationId: y
                } = e,
                x = (0, p.y)(eo.a),
                I = (0, C.a)(),
                T = (0, w.Y)(),
                [j, S] = (0, b.useState)(!1),
                [E, P] = (0, b.useState)(!1),
                [A, M] = (0, b.useState)(!1),
                [k, R] = (0, b.useState)(!1),
                N = (0, b.useRef)(!1),
                O = (0, p.z)(rV.p).data,
                G = (0, p.x)(F.j, y),
                z = (0, p.x)(F.W, y),
                B = (0, p.x)(F.H, y),
                L = (0, p.x)(nT.i, y);
            v[0] !== y || v[1] !== x ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (x.get(F.H, y) || x.get(nT.i, y) || t !== x.get(F.j, y) || n !== x.get(F.W, y)) throw Error("Cannot save an unavailable temporary chat message");
                    return rH.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: o_
                    }).then(oC)
                },
                retry: ox
            }, v[0] = y, v[1] = x, v[2] = t) : t = v[2];
            let {
                mutateAsync: D,
                isPending: H
            } = (0, oi.a)(t), W = null != G && null != z && !B && !L && !H && !E;
            v[3] !== I ? (n = I.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat",
                description: "Tooltip and accessible label for the bookmark button in a temporary ChatGPT conversation. Opens a confirmation dialog to save it to regular history."
            }), v[3] = I, v[4] = n) : n = v[4];
            let q = n;
            v[5] !== O?.eligibleAnnouncements ? (s = O?.eligibleAnnouncements?.includes(rV.h), v[5] = O?.eligibleAnnouncements, v[6] = s) : s = v[6];
            let U = !0 === s,
                K = !k && (A || U && W);
            v[7] !== y || v[8] !== A || v[9] !== x || v[10] !== K ? (o = () => {
                if (!K || A || N.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || N.current || (N.current = !0, (0, ed.a)(x, oo.wb, {
                        personalizationMode: (0, ol.a)((0, oc.k)(x, y))
                    }), M(!0), om(x))
                }), () => {
                    e = !0
                }
            }, i = [y, A, x, K], v[7] = y, v[8] = A, v[9] = x, v[10] = K, v[11] = o, v[12] = i) : (o = v[11], i = v[12]), (0, b.useEffect)(o, i), v[13] !== x ? (l = () => {
                R(!0), N.current || (N.current = !0, om(x))
            }, v[13] = x, v[14] = l) : l = v[14];
            let V = l;
            v[15] !== W || v[16] !== y || v[17] !== I || v[18] !== T || v[19] !== D || v[20] !== x || v[21] !== z || v[22] !== G ? (c = async function() {
                let e;
                if (!W || null == G || null == z) return;
                let t = (0, ol.a)((0, oc.k)(x, y));
                (0, ed.a)(x, oo.xb, {
                    personalizationMode: t
                });
                try {
                    e = (await D({
                        sourceConversationId: G,
                        selectedLeafId: z
                    })).conversation_id
                } catch (e) {
                    (0, ed.a)(x, oo.yb, {
                        personalizationMode: t,
                        failureCategory: (0, ol.b)(e)
                    }), x.get(es.f).danger(I.formatMessage({
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
                P(!0), S(!1), (0, rX.H)(x), (0, rX.K)(x, G, "remove"), (0, rX.K)(x, e, "refresh"), T((0, af.c)(e), {
                    replace: !0
                }), x.get(es.f).success(I.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history.",
                    description: "Success toast confirming that a formerly temporary ChatGPT conversation is now saved in regular history."
                })), rH.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: z
                    }
                }).then(ob).then(t => {
                    (0, F._b)({
                        scope: x,
                        conversationId: e,
                        title: t
                    }), x.query.setData(nK.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, rX.H)(x), (0, rX.K)(x, e, "refresh")
                }).catch(oy)
            }, v[15] = W, v[16] = y, v[17] = I, v[18] = T, v[19] = D, v[20] = x, v[21] = z, v[22] = G, v[23] = c) : c = v[23];
            let Y = c,
                Q = !W;
            v[24] !== y || v[25] !== x || v[26] !== K ? (d = () => {
                (0, ed.a)(x, oo.Ab, {
                    personalizationMode: (0, ol.a)((0, oc.k)(x, y)),
                    coachMarkVisible: K
                }), S(!0)
            }, v[24] = y, v[25] = x, v[26] = K, v[27] = d) : d = v[27], v[28] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(tn.b, {
                icon: {
                    16: n5.pb,
                    20: n5.qb
                }
            }), v[28] = u) : u = v[28], v[29] !== q || v[30] !== Q || v[31] !== d ? (h = (0, a.jsx)(eW.a, {
                "aria-label": q,
                color: "toolbar",
                disabled: Q,
                size: "toolbar",
                uniform: !0,
                onClick: d,
                children: u
            }), v[29] = q, v[30] = Q, v[31] = d, v[32] = h) : h = v[32];
            let $ = h;
            return v[33] !== V || v[34] !== I || v[35] !== q || v[36] !== $ || v[37] !== K ? (m = K ? (0, a.jsx)(od.a, {
                align: "end",
                description: (0, a.jsx)(_.a, {
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
                title: (0, a.jsx)(_.a, {
                    id: "chatgptConversations.temporaryChat.save.button",
                    defaultMessage: "Save chat",
                    description: "Title of a one-time onboarding coachmark anchored to the Save chat button in a temporary ChatGPT conversation."
                }),
                tooltipClassName: "w-60",
                children: $
            }) : (0, a.jsx)(n6.a, {
                content: q,
                children: $
            }), v[33] = V, v[34] = I, v[35] = q, v[36] = $, v[37] = K, v[38] = m) : m = v[38], v[39] !== W || v[40] !== y || v[41] !== Y || v[42] !== j || v[43] !== H || v[44] !== x ? (g = j ? (0, a.jsx)(op, {
                canSave: W,
                isPending: H,
                onCancel: () => {
                    (0, ed.a)(x, oo.vb, {
                        personalizationMode: (0, ol.a)((0, oc.k)(x, y))
                    })
                },
                onClose: () => S(!1),
                onSave: () => void Y()
            }) : null, v[39] = W, v[40] = y, v[41] = Y, v[42] = j, v[43] = H, v[44] = x, v[45] = g) : g = v[45], v[46] !== m || v[47] !== g ? (f = (0, a.jsxs)(a.Fragment, {
                children: [m, g]
            }), v[46] = m, v[47] = g, v[48] = f) : f = v[48], f
        }

        function oy() {}

        function ob(e) {
            return nj.object({
                title: nj.string()
            }).parse(e).title
        }

        function ox(e, t) {
            return e < 1 && t instanceof tU.a && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function oC(e) {
            return nj.object({
                conversation_id: nj.string().min(1)
            }).parse(e)
        }

        function o_(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var ow = n("Sd4O");
        let oI = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(ow.a, e);
            return null != a && n(H.e, a).data?.automation.plan_type === "language_learning"
        });
        var oT = n("AORd"),
            oj = n("J8FU"),
            oS = n("vpdG"),
            oE = n("OiCI"),
            oP = n("Sd8U"),
            oA = n("FNgK"),
            oM = n("nD1x");

        function ok(e) {
            let t, n, a = (0, r.c)(6),
                {
                    conversationId: s,
                    shouldBlockExternalEgress: o,
                    widgets: i
                } = e,
                l = (0, p.y)(oP.a);
            return a[0] !== s || a[1] !== l || a[2] !== o || a[3] !== i ? (t = () => {
                let e = new Map(i.map(e => [(0, aS.e)(s, e.messageId), e]));
                return l.watch(t => {
                    let {
                        get: n
                    } = t, a = n(oE.b), r = n(G.k);
                    for (let t of n(aC.k).keys()) {
                        let i = e.get(t);
                        if (null == i) continue;
                        let c = !0 === i.metadata.is_widget_closed || n(oM.a, {
                                accountId: a,
                                userId: r,
                                conversationId: s,
                                messageId: i.messageId
                            }),
                            d = "hidden" === i.sessionPresentation,
                            u = "tombstone" === i.sessionPresentation,
                            h = i.replacementMessageId;
                        if (o || c || !d && !u || null == h || n(oM.a, {
                                accountId: a,
                                userId: r,
                                conversationId: s,
                                messageId: h
                            }) || (0, oA.b)(l, t, (0, aS.e)(s, h)), c || d) {
                            (0, aC.z)(l, t);
                            continue
                        }
                        let p = l.get(aC.k).get(t),
                            m = p?.content.mcpAppHostAdapter;
                        null != p && null != m && (m.isTombstone !== u && (0, aC.y)(l, {
                            mcpAppId: t,
                            hostedInThreadScrollLayout: p.hostedInThreadScrollLayout,
                            inlineFrameContainer: p.inlineFrameContainer,
                            ...p.content,
                            mcpAppHostAdapter: {
                                ...m,
                                isTombstone: u
                            }
                        }), u && null != p.sessionId && (0, aC.D)(l, p.sessionId, {
                            displayMode: "inline"
                        }))
                    }
                })
            }, n = [s, l, o, i], a[0] = s, a[1] = l, a[2] = o, a[3] = i, a[4] = t, a[5] = n) : (t = a[4], n = a[5]), (0, b.useLayoutEffect)(t, n), null
        }
        var oR = n("JVSG"),
            oN = {
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
            oO = n("dNAN");
        let oG = (0, p.v)(eo.a, e => null);

        function oz() {
            let e, t, n, s, o, i, l, c, d, u, h, m, g, f, v, y = (0, r.c)(40),
                x = (0, w.Y)(),
                C = (0, b.useContext)(tm.a);
            y[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, y[0] = e) : e = y[0];
            let _ = (0, p.x)(S.a, e),
                I = (0, p.z)(B.a),
                j = (0, w.$)() ?? 0,
                {
                    conversationId: E
                } = (0, w.ab)(),
                {
                    search: P,
                    state: A
                } = (0, w.W)(),
                M = (0, p.x)(nl.a, E ?? null),
                k = (0, p.x)(null == E || nd.d, M ?? E ?? ""),
                R = A?.archivedConversationPreview === !0;
            y[1] !== P ? (t = (0, af.f)(P), y[1] = P, y[2] = t) : t = y[2];
            let N = t;
            y[3] !== R || y[4] !== N || y[5] !== E ? (n = null == E || (0, a0.e)(E) || N || R ? null : E, y[3] = R, y[4] = N, y[5] = E, y[6] = n) : n = y[6];
            let {
                data: O
            } = (0, p.x)(nK.chatGptConversationQueryById$, n);
            if (null == E) {
                let e;
                return y[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(w.k, {
                    to: "/",
                    replace: !0
                }), y[7] = e) : e = y[7], e
            }
            y[8] !== M || y[9] !== E ? (s = M ?? (0, a0.d)(E), y[8] = M, y[9] = E, y[10] = s) : s = y[10];
            let G = s,
                z = _.isCapable && !I && !k && (O?.conversation_origin === "tpp" || O?.conversation_origin === "flora");
            y[11] !== x ? (o = e => (x((0, af.c)(e)), !0), y[11] = x, y[12] = o) : o = y[12];
            let L = o;
            y[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(T.a, {}), l = (0, a.jsx)(e8.a.Surface, {}), y[13] = i, y[14] = l) : (i = y[13], l = y[14]), y[15] !== R ? (c = null, y[15] = R, y[16] = c) : c = y[16], y[17] !== G || y[18] !== R || y[19] !== N ? (d = N || R ? null : (0, a.jsx)(nw, {
                conversationId: G
            }), y[17] = G, y[18] = R, y[19] = N, y[20] = d) : d = y[20];
            let F = C ?? (z ? L : null),
                D = `${G}:${N}`;
            y[21] === Symbol.for("react.memo_cache_sentinel") ? (u = void 0, y[21] = u) : u = y[21], y[22] !== G || y[23] !== R || y[24] !== N || y[25] !== D || y[26] !== j ? (h = (0, a.jsx)(oL, {
                conversationId: G,
                viewActivation: j,
                isArchivedPreview: R,
                isReadOnlyPreview: !1,
                banner: u,
                isTemporaryChat: N,
                sharedConversationId: null
            }, D), y[22] = G, y[23] = R, y[24] = N, y[25] = D, y[26] = j, y[27] = h) : h = y[27], y[28] !== h || y[29] !== F ? (m = (0, a.jsx)(tm.a, {
                value: F,
                children: h
            }), y[28] = h, y[29] = F, y[30] = m) : m = y[30], y[31] !== m || y[32] !== c || y[33] !== d ? (g = (0, a.jsxs)(a.Fragment, {
                children: [i, l, c, d, m]
            }), y[31] = m, y[32] = c, y[33] = d, y[34] = g) : g = y[34];
            let H = g;
            return y[35] !== H ? (f = H, y[35] = H, y[36] = f) : f = y[36], y[37] !== G || y[38] !== f ? (v = (0, a.jsx)(ay, {
                conversationId: G,
                children: f
            }), y[37] = G, y[38] = f, y[39] = v) : v = y[39], v
        }

        function oB() {
            let e, t, n, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = (0, w.ab)();
            if (null == o) {
                let e;
                return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(w.k, {
                    to: "/",
                    replace: !0
                }), s[0] = e) : e = s[0], e
            }
            s[1] !== o ? (e = (0, a0.d)(o), s[1] = o, s[2] = e) : e = s[2];
            let i = e;
            return s[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(e8.a.Surface, {}), s[3] = t) : t = s[3], s[4] !== i || s[5] !== o ? (n = (0, a.jsxs)(a.Fragment, {
                children: [t, (0, a.jsx)(oL, {
                    conversationId: i,
                    isTemporaryChat: !1,
                    sharedConversationId: o
                }, o)]
            }), s[4] = i, s[5] = o, s[6] = n) : n = s[6], n
        }

        function oL(e) {
            let t, n, i, l, c, d, u, x, _, T, S, R, N, L, H, W, q, U, K, V, Y, Q, $, Z, J, ea, er, eo, ei, el, ec, eu, eh, ep, em, eg, ef, ev, ey, eb, eC, e_, ew, eI, ej, eS, eE, eP, eA, eM, ek, eR, eN, eO, eG, ez, eW, eq, eU, eK, eV, eY, eQ, e$, eZ, eJ, eX, e1, e6, e5, e8, e7, e9, te, tt, tl, tc, td, tu, th, tm, tT, tS, tk, tG, tD, tq = (0, r.c)(667),
                {
                    conversationId: ng,
                    viewActivation: nv,
                    isArchivedPreview: ny,
                    isInlinePreview: nb,
                    hideModelPicker: nx,
                    disableAutoFocus: nC,
                    hideInitialUserMessage: n_,
                    transcriptPresentation: nw,
                    scrollOrigin: nj,
                    isReadOnlyPreview: nS,
                    onSubmitAccepted: nE,
                    isTemporaryChat: nP,
                    sharedConversationId: nA,
                    sharedPostContinuation: nM,
                    requiredSystemHints: nk,
                    routePattern: nR,
                    composerLeadingContent: nN,
                    header: nO,
                    banner: nG,
                    onRetryMissingConversation: nz,
                    sharedProjectConversation: nB,
                    workspace: nL
                } = e,
                nF = void 0 === nv ? 0 : nv,
                nD = void 0 !== ny && ny,
                nH = void 0 !== nb && nb,
                nW = (0, p.y)(D.a),
                nY = (0, b.useContext)(O.a),
                n$ = (0, p.x)(s1.e, nY),
                nZ = (0, p.z)(!!(void 0 !== nM && nM && null != n$ && (0, s1.b)(n$) && (n$.web_image_attachments?.length ?? 0) > 0) && B.a);
            tq[0] !== nY || tq[1] !== ng ? (t = {
                auth: nY,
                conversationId: ng
            }, tq[0] = nY, tq[1] = ng, tq[2] = t) : t = tq[2];
            let nJ = (0, p.x)(null != nY && !nY.isLoading && null === nY.authMethod && s1.g, t),
                {
                    conversationId: nX
                } = (0, w.ab)();
            tq[3] !== ng || tq[4] !== nH || tq[5] !== nX || tq[6] !== nW || tq[7] !== nL ? (n = () => (0, a0.e)(nH || null != nL || null == nW.get(F.j, ng) ? ng : nX ?? ""), tq[3] = ng, tq[4] = nH, tq[5] = nX, tq[6] = nW, tq[7] = nL, tq[8] = n) : n = tq[8];
            let [n0, n1] = (0, b.useState)(n);
            tq[9] !== n0 || tq[10] !== ng ? (i = () => n0 ? ng : null, tq[9] = n0, tq[10] = ng, tq[11] = i) : i = tq[11];
            let [n2] = (0, b.useState)(i), n3 = null != nA || null != n$ && !nZ;
            tq[12] !== ng || tq[13] !== nD || tq[14] !== nH || tq[15] !== n3 || tq[16] !== nW ? (c = () => {
                if (!n3 && !nD && !nH) return function(e, t) {
                    let n = e.get(nl.a, t) ?? t,
                        a = e.get(et.b, t),
                        r = e.get(np, n),
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
                        i = e.get(t1.i),
                        l = o.observedTurn,
                        c = null;

                    function d(t) {
                        for (let n of t.toReversed())
                            if (!o.initialCreationMessageIds.has(n.messageId) && (0, ne.openSpacePageSidePanelTab)(e, n.pageId, {
                                    title: n.title
                                }).opened) {
                                o.openedCreatedPage = !0;
                                break
                            }
                    }
                    let u = e.watch(n => {
                        let {
                            get: a
                        } = n, r = a(F._, t), s = a(t1.i), u = a(F.ab, t);
                        if ((0, F.zb)(r)) {
                            l = !1;
                            let e = a(et.b, t),
                                n = a(F.bb, t),
                                r = !o.observedTurn || o.attemptId !== e;
                            if (o.attemptId = e, r) {
                                let e = c;
                                c = null, e?.abort(), o.observedTurn = !0, o.activeRequestId = n, o.dismissed = u, o.openedCreatedPage = !1
                            } else o.activeRequestId = n ?? o.activeRequestId, o.dismissed = o.dismissed || u || i && !s;
                            i = s;
                            let h = !u && !o.dismissed && !s && !o.openedCreatedPage && !a(D.h) && !a(F.C, t) && !a(nd.d, t),
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
                        if ("idle" !== r || u || null != h && "completed" !== h.result || null != e.get(F.C, t) || e.get(D.h) || e.get(nd.d, t)) {
                            o.observedTurn = !1;
                            return
                        }
                        if (l) {
                            if (o.dismissed || s || o.openedCreatedPage || a(et.b, t) !== o.attemptId) {
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
                            f = m.findLast(nh.b);
                        if (f?.status !== "finished_successfully") return;
                        let v = [...(0, nc.e)(m).outputs, ...m.flatMap(e => (0, nc.c)(e).map(e => e.file))],
                            y = e.get(ns.a, t)?.at(-1);
                        if (y?.turn.status !== "complete") return;
                        let b = [...(0, t3.a)(m), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, t2.a)(e, b, !o.dismissed) || !o.dismissed && !o.openedCreatedPage && (0, nt.a)(e, b)) && !o.dismissed && !s && !o.openedCreatedPage) {
                            for (let t of (0, t9.c)((0, g.d)(f)).toReversed())
                                if ((0, ne.openSpacePageSidePanelTab)(e, t.id, {
                                        blockId: t.blockId
                                    }).opened) return;
                            if ((0, nu.canOpenChatGptFilePreview)({
                                    browserPreview: !0
                                })) {
                                for (let n of y.turn.items)
                                    if ("assistant-message" === n.type && n.completed)
                                        for (let [a, r] of n.contentReferences.entries()) {
                                            let s = (0, no.a)(r),
                                                o = null == s ? null : (0, t4.a)(s),
                                                i = v.find(e => null != e.fileId && e.fileId === (r.file_id ?? r.id) || null != e.libraryFileId && e.libraryFileId === r.library_file_id);
                                            if ("file" !== r.type || !(0, t0.a)(r) || null == s || null == o || !(0, t4.e)(o) || null == i && null == (0, ni.b)(r.sandbox_path) && !(0, ni.b)(r.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > t8.a) continue;
                                            let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                d = (0, nr.b)(r, {
                                                    fileName: s,
                                                    messageId: l
                                                });
                                            if (null == d) continue;
                                            if (e.get(tR.e)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let u = e.get(F.j, t) ?? t,
                                                h = `${l??"message"}:${String(a)}:${s}`,
                                                p = `chatgpt-file:${u}:${h}`,
                                                g = {
                                                    turnId: y.id,
                                                    inputMessageId: m.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: l ?? null
                                                },
                                                f = new AbortController,
                                                b = (0, nu.openChatGptFile)(e, {
                                                    conversationId: u,
                                                    fileName: s,
                                                    gizmoId: e.get(F.R, t),
                                                    sharedConversationId: e.get(F.Y, t),
                                                    target: d,
                                                    tabKey: h,
                                                    browserPreview: !0,
                                                    isAccessBlocked: e => e.get(nd.d, t),
                                                    downloadFallback: !1,
                                                    openSource: "auto_open",
                                                    originatingTurn: g,
                                                    signal: f.signal,
                                                    onOpened: () => {
                                                        let t = e.get(k.j.activeTab$);
                                                        f.signal.aborted || t?.tabId !== p || t.tabType.kind !== t6.a || ((0, ed.a)(e, tX.CodexFileOpened, {
                                                            threadId: u,
                                                            turnId: g.turnId,
                                                            inputMessageId: g.inputMessageId ?? void 0,
                                                            messageId: g.messageId ?? void 0,
                                                            fileExtension: (0, t5.c)(s) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, ed.a)(e, tX.CodexWorkspaceFilePreviewAttempted, (0, t7.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: g,
                                                            path: s,
                                                            threadId: u,
                                                            windowType: "browser"
                                                        })), (0, nn.b)(e, p, "auto_open"))
                                                    },
                                                    onClose: () => f.abort()
                                                });
                                            c = f;
                                            let x = e.watch(e => {
                                                let {
                                                    get: n
                                                } = e;
                                                (n(t1.i) && n(k.j.activeTab$)?.tabId !== p || n(nd.d, t)) && f.abort()
                                            });
                                            b.catch(e => {
                                                f.signal.aborted || na.a.debug("Automatic ChatGPT artifact preview could not open", {
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
                        u(), c?.abort(), null != o.attemptId && e.set(np, n, {
                            ...o,
                            attemptId: o.attemptId
                        })
                    }
                }(nW, ng)
            }, l = [ng, nD, nH, n3, nW], tq[12] = ng, tq[13] = nD, tq[14] = nH, tq[15] = n3, tq[16] = nW, tq[17] = l, tq[18] = c) : (l = tq[17], c = tq[18]), (0, b.useEffect)(c, l);
            let n4 = (0, p.x)(aH.a, ng),
                n6 = n3 ? null : n4;
            tq[19] !== nA ? (d = () => null == nA ? null : (0, a0.b)(), tq[19] = nA, tq[20] = d) : d = tq[20];
            let [n5] = (0, b.useState)(d), n8 = n5 ?? ng;
            tq[21] !== n8 ? (u = (0, tE.n)({
                routeKind: "chatgpt-thread",
                conversationId: n8
            }), tq[21] = n8, tq[22] = u) : u = tq[22];
            let n9 = null != (0, p.x)(tg.c, u);
            tq[23] !== n8 || tq[24] !== nk || tq[25] !== nW ? (x = () => {
                if (null != nk && 0 !== nk.length) return (0, os.b)(nW, n8, nk)
            }, _ = [n8, nk, nW], tq[23] = n8, tq[24] = nk, tq[25] = nW, tq[26] = x, tq[27] = _) : (x = tq[26], _ = tq[27]), (0, b.useEffect)(x, _);
            let ae = (0, b.useRef)(null),
                [aa, ar] = (0, b.useState)(null),
                [as, ao] = (0, b.useState)(null),
                [al, ad] = (0, b.useState)(null),
                au = as?.activation === nF ? as.messageId : null,
                ah = al === nF,
                ap = (0, b.useRef)(null);
            tq[28] === Symbol.for("react.memo_cache_sentinel") ? (T = () => {
                let e = new AbortController;
                return ap.current = e, () => e.abort()
            }, tq[28] = T) : T = tq[28], tq[29] !== nF ? (S = [nF], tq[29] = nF, tq[30] = S) : S = tq[30], (0, b.useLayoutEffect)(T, S);
            let am = (0, C.a)(),
                av = (0, w.Y)(),
                ay = (0, tH.b)(),
                ab = (0, p.x)(F.j, ng);
            tq[31] !== nW ? (R = e => {
                (0, nm.c)(nW, e)
            }, tq[31] = nW, tq[32] = R) : R = tq[32];
            let ax = (0, b.useEffectEvent)(R);
            tq[33] !== ab || tq[34] !== ax ? (N = () => () => {
                null != ab && ax(ab)
            }, tq[33] = ab, tq[34] = ax, tq[35] = N) : N = tq[35], tq[36] !== ab ? (L = [ab], tq[36] = ab, tq[37] = L) : L = tq[37], (0, b.useEffect)(N, L);
            let aC = (0, p.x)(or.b, ng),
                a_ = (0, p.x)(F.L, ng),
                aw = (0, p.x)(nK.chatGptConversationQueryById$, n3 || nP && null != a_ ? null : ab);
            (0, p.x)(n3 ? null : nQ.a, ab);
            let aI = (0, p.x)(!nJ && !nZ && nd.d, ng),
                aT = ab ?? ng,
                aj = (0, p.x)(F.B, ng),
                aE = (0, p.x)(F.x, ng),
                aP = (0, p.x)(F.R, ng),
                aA = (0, p.x)(F.C, ng),
                aM = (0, p.x)(F.M, ng),
                ak = (0, p.x)(F._, ng),
                aR = (0, p.x)(F.V, ng),
                aN = (0, p.x)(F.X, ng),
                aO = (0, p.x)(an.a, ng),
                aG = (0, p.x)(F.D, ng),
                az = (0, p.x)(F.cb, ng),
                aB = (0, p.x)(F.db, ng),
                aL = (0, p.x)(nK.n, nA),
                aF = (0, b.useRef)(null),
                aD = aL.isSuccess && null != aL.data ? nA : null;
            tq[38] !== nW ? (H = e => {
                (0, ed.a)(nW, s.h, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, tq[38] = nW, tq[39] = H) : H = tq[39];
            let aW = (0, b.useEffectEvent)(H);
            tq[40] !== aD || tq[41] !== aW ? (W = () => {
                null != aD && aF.current !== aD && (aF.current = aD, aW(aD))
            }, tq[40] = aD, tq[41] = aW, tq[42] = W) : W = tq[42], tq[43] !== aD ? (q = [aD], tq[43] = aD, tq[44] = q) : q = tq[44], (0, b.useEffect)(W, q);
            let aK = (0, p.x)(nT.o, ng),
                aZ = (0, p.x)(nT.p, ng),
                aX = (0, p.x)(nT.m, ng),
                a1 = (0, p.x)(nT.q, ng),
                a2 = (0, p.x)(nT.n, ng),
                a3 = (0, p.x)(nT.i, ng),
                a4 = (0, p.x)(F.ab, ng),
                a6 = (0, p.x)(nT.z, ng);
            tq[45] !== ak ? (U = (0, F.zb)(ak), tq[45] = ak, tq[46] = U) : U = tq[46];
            let a5 = U,
                a8 = (0, p.x)(aq, ng),
                re = (0, p.z)(z.t),
                rp = (0, p.z)(z.q),
                rm = (0, p.z)(z.s),
                rg = (0, p.z)(z.l),
                rf = (0, p.z)(z.m),
                rv = (0, p.z)(tb.pagesEnabled$);
            tq[47] === Symbol.for("react.memo_cache_sentinel") ? (K = (0, tp.a)(), tq[47] = K) : K = tq[47];
            let ry = (0, eT.h)(K);
            tq[48] === Symbol.for("react.memo_cache_sentinel") ? (V = (0, tp.b)(), tq[48] = V) : V = tq[48];
            let rb = (0, eT.h)(V),
                rC = null != a_,
                r_ = (0, p.z)(sA.f),
                rw = n3 ? aL : aw;
            n0 && null != rw.data && n1(!1);
            let rj = n0 && rC && null == rw.data,
                rS = rw.isLoading || !rj && rw.isError;
            tq[49] !== aa || tq[50] !== n8 || tq[51] !== rS || tq[52] !== n3 || tq[53] !== nP || tq[54] !== nW ? (Y = (e, t, n, a) => {
                !(e || nW.get(tj.a)) && ((0, nT.b)(nW, n8, t, void 0, n, a), aa?.focus(), n3 || rS || (0, nU.f)(nW, n8, {
                    isTemporaryChat: nP
                }))
            }, tq[49] = aa, tq[50] = n8, tq[51] = rS, tq[52] = n3, tq[53] = nP, tq[54] = nW, tq[55] = Y) : Y = tq[55];
            let rP = Y,
                rM = null == n$ ? null : (0, sX.a)(n$, ng),
                rk = null == rM ? void 0 : (0, sv.a)(rM),
                rR = rM ?? rw.data,
                rN = aG ? az : rR?.title,
                rO = (0, p.z)(G.h),
                rG = (0, p.z)(G.g),
                rz = "chatgpt-thread" === nW.value.routeKind && nW.value.workSideChat?.conversationId === ng,
                rB = rR?.conversation_origin ?? aE ?? (null != nL || rz ? "tpp" : null),
                rL = "tpp" === rB,
                rF = rL && "denied" === re.status && "go-plan" === re.reason,
                rD = (0, p.z)(tN.d),
                rH = (0, w.W)(),
                rW = rH.state;
            (0, p.z)(tA.b);
            let rq = (0, p.x)(tR.c, "3901104270") && rW?.openGoalPlan === !0,
                rU = (0, b.useContext)(M.c),
                rK = (0, tF.a)(),
                rV = rU?.hasPageSurface === !0,
                rY = "tpp" === rB || "flora" === rB,
                rQ = (0, p.z)(!!rY && z.u),
                r$ = void 0 !== nS && nS || rQ,
                rZ = null == rD || rD.isFullWidth ? void 0 : rD.width ?? 420,
                rJ = !0 === (0, p.z)(rY ? null : tV.d),
                r0 = (0, p.z)(rY ? tI.b : tI.a),
                r1 = !rY && r0,
                r2 = !rb || rf && !rY,
                r3 = !n3 && rf && !rY,
                r4 = r3 && rg,
                r6 = n3 && rR?.is_read_only === !0 || nB?.is_read_only === !0;
            tq[56] !== ng || tq[57] !== n3 || tq[58] !== nW ? (Q = () => null, tq[56] = ng, tq[57] = n3, tq[58] = nW, tq[59] = Q) : Q = tq[59];
            let [r5] = (0, b.useState)(Q), r8 = rR?.gizmo_id ?? aP ?? r5?.gizmoId ?? null, r7 = n3 || null == r8 || (0, ag.a)(r8) ? null : r8, se = (0, p.x)(oG, n8), sn = (0, n7.d)({
                conversation: rR,
                conversationId: ng,
                conversationTitle: aO,
                pathname: rH.pathname,
                sharedConversationId: nA,
                sharedPost: n$
            }), sa = !rm && null == rR && null == r5, sr = null != ab && !aI && !sa && (rm || rp), sl = null;
            n3 || (sl = null != rR ? (0, rX.B)(rR) : (0, ag.a)(aP) ? aP : r5?.projectId ?? null);
            let sc = (0, p.x)(t$.c, n3 ? null : ng),
                sd = n3 || rY || null != sl || sc || null == se ? r7 : se.id,
                sh = (0, p.x)(sb.d, {
                    gizmoId: sd,
                    conversationId: n8,
                    visitKey: rH.pathname
                }),
                sp = rV || rY || null != sl || null != r7 || sc || nP,
                {
                    data: sx
                } = (0, o.a)({
                    enabled: null != sl,
                    queryFn: () => {
                        if (null == sl) throw Error("Expected a ChatGPT project id");
                        return (0, eL.c)(sl)
                    },
                    queryKey: (0, rX.E)(sl ?? ""),
                    staleTime: ex.b.ONE_MINUTE
                }),
                sC = null != sl && (sx?.gizmo.share_recipient !== "private" || (sx?.gizmo.sharing?.subjects?.length ?? 0) > 0),
                s_ = rR?.context_scopes?.includes("HEALTH") === !0 || sx?.gizmo.gizmo_snorlax_type === "potion",
                sw = (0, sT.a)(rR?.context_scopes, {
                    projectType: sx?.gizmo.gizmo_snorlax_type,
                    projectId: sl,
                    lockedProjectId: r_?.projectId
                }),
                sI = aI || sC || s_ || sw;
            tq[60] !== sx?.gizmo.display.name ? ($ = sx?.gizmo.display.name.trim() || null, tq[60] = sx?.gizmo.display.name, tq[61] = $) : $ = tq[61];
            let sj = $,
                sE = sx?.gizmo.display.theme,
                sM = sx?.gizmo.display.emoji;
            tq[62] !== sx ? (Z = "shared" === (0, aJ.b)(sx) ? (0, a.jsx)(tn.b, {
                icon: {
                    assets: {
                        16: oN,
                        20: oO.a
                    }
                }
            }) : void 0, tq[62] = sx, tq[63] = Z) : Z = tq[63], tq[64] !== sE || tq[65] !== sM || tq[66] !== Z ? (J = (0, a.jsx)(t_.a, {
                className: "icon-leading",
                size: "leading",
                color: sE,
                icon: sM,
                sharedIcon: Z
            }), tq[64] = sE, tq[65] = sM, tq[66] = Z, tq[67] = J) : J = tq[67];
            let sk = J,
                sR = (0, p.x)(F.i, ng),
                sN = sR?.metadata ?? rR?.context_truncation_continuation,
                sO = n3 || nP || null != nB || null == rO || rR?.owner?.user_id == null || null == sl || rR.owner.user_id === (rG ? rO.split("__")[0] : rO) ? null : (0, ss.d)(sl, rR.conversation_id, rR.owner.user_id),
                sG = (0, p.x)(n3 || nD || r$ ? null : sB.b, ng),
                sL = sG?.isReviewing === !0,
                sF = null == sG ? a_ : sG.conversation.mapping,
                sD = null == sG ? aj : sG.conversation.current_node,
                sH = null == a_ ? rR : null;
            tq[68] === Symbol.for("react.memo_cache_sentinel") ? (ea = (0, nV.a)(), tq[68] = ea) : ea = tq[68];
            let sW = ea;
            tq[69] === Symbol.for("react.memo_cache_sentinel") ? (er = new WeakMap, tq[69] = er) : er = tq[69];
            let sq = er;
            tq[70] !== r0 || tq[71] !== r1 || tq[72] !== sN || tq[73] !== rB || tq[74] !== sD || tq[75] !== sF || tq[76] !== sH || tq[77] !== nD || tq[78] !== n3 || tq[79] !== a5 || tq[80] !== rY || tq[81] !== aM || tq[82] !== aX || tq[83] !== a2 || tq[84] !== aK || tq[85] !== aZ || tq[86] !== a1 || tq[87] !== sL || tq[88] !== nW.get || tq[89] !== sG?.isEntering || tq[90] !== aC || tq[91] !== ak ? (eo = () => sW({
                conversation: sH,
                contextContinuation: sN,
                clinicalSearchEnabled: r1,
                clinicalCitationsEnabled: r0,
                conversationOrigin: rB,
                enableImageGenerationLoadingState: !n3 && !nD && !sL && "error" !== ak,
                getRenderTelemetry: e => (0, oj.c)(nW.get, e),
                isStreaming: !n3 && !nD && !sL && a5,
                isWorkConversation: rY,
                mode: "conversation",
                mcpResponseCache: sq,
                moderationDisclaimersByMessageId: aM,
                streamingOrders: aC,
                pendingSubmission: null == aK || n3 || sL || sG?.isEntering ? null : {
                    attachments: aX,
                    commentAttachments: a2,
                    prompt: aK,
                    renderMarkdown: aZ,
                    selectedTextAttachments: a1
                },
                threadCurrentNode: sD,
                threadMapping: sF
            }), tq[70] = r0, tq[71] = r1, tq[72] = sN, tq[73] = rB, tq[74] = sD, tq[75] = sF, tq[76] = sH, tq[77] = nD, tq[78] = n3, tq[79] = a5, tq[80] = rY, tq[81] = aM, tq[82] = aX, tq[83] = a2, tq[84] = aK, tq[85] = aZ, tq[86] = a1, tq[87] = sL, tq[88] = nW.get, tq[89] = sG?.isEntering, tq[90] = aC, tq[91] = ak, tq[92] = eo) : eo = tq[92], sG?.isEntering, tq[93] !== eo ? (ei = eo(), tq[93] = eo, tq[94] = ei) : ei = tq[94];
            let {
                isConversationEmpty: sU,
                renderedConversation: sK,
                renderedTurns: sV,
                showPendingLoadingMessage: sY
            } = ei;
            tq[95] !== nH || tq[96] !== rY || tq[97] !== sK || tq[98] !== nW ? (el = () => {
                if (!nH && rY) return nW.set(oR.b, sK), () => {
                    nW.get(oR.b) === sK && nW.set(oR.b, null)
                }
            }, ec = [nH, rY, sK, nW], tq[95] = nH, tq[96] = rY, tq[97] = sK, tq[98] = nW, tq[99] = el, tq[100] = ec) : (el = tq[99], ec = tq[100]), (0, b.useEffect)(el, ec);
            let sQ = (0, p.x)(tZ.g, ng),
                s$ = sY && null == sQ,
                sJ = !rY && !n3 && !nH && !nD,
                s2 = (0, p.x)(r1 || nH || n3 ? null : ee.a, ng),
                s3 = (s2?.length ?? 0) > 0,
                s4 = (0, p.x)(sJ ? et.b : null, ng),
                s6 = JSON.stringify([ng, nF]),
                s5 = (0, p.x)(n3 || nH ? null : oI, ng),
                [s8, s7] = (0, b.useState)(null),
                oe = function(e, t) {
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
                    let d = null == n ? [] : (0, g.b)(n, eF.k),
                        u = null == e || e.visitKey !== c,
                        h = d.find(eF.k)?.id ?? (u || i ? null : e.userMessageId),
                        p = i ? null : d.findLast(eD)?.id ?? null,
                        m = !u && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != h && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== h),
                        f = new Set(u ? [] : e.observedSummaryRequestIds),
                        v = !u && !m && e.hasConsumedSummaryRequest,
                        y = !v && !u && null != e.conversation && (o || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != p && !f.has(p);
                    if (null != n && (u || null == e.conversation || !o))
                        for (let e of Object.values(n.mapping)) e?.message?.id != null && eD(e.message) && f.add(e.message.id);
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
                }(s8, {
                    completionAttemptId: s4,
                    allowAutoOpen: !(0, ti.a)("(width < 768px)"),
                    suppressAutoOpen: (s5 ?? !1) || rq,
                    conversation: sJ && (rj || !rS) ? sK : null,
                    isTurnActive: a5,
                    hasGoal: s3,
                    isPendingUserTurn: a3 && null != aK && !a5,
                    visitKey: s6
                });
            oe !== s8 && s7(oe);
            let ot = null == nL && !s5 && !r1 && !nH && !n3 && (rL || sJ) && !nD,
                on = ot && sK?.mapping === a_ && sK?.current_node === aj,
                oa = (0, p.x)(on ? F.p : null, ng),
                oo = sK?.mapping,
                oi = sK?.current_node;
            tq[101] !== oo || tq[102] !== oi ? (eu = h()(() => {
                let e = null == oo ? [] : (0, g.a)({
                    mapping: oo,
                    current_node: oi
                });
                return {
                    messages: e,
                    resources: (0, nc.e)(e)
                }
            }), tq[101] = oo, tq[102] = oi, tq[103] = eu) : eu = tq[103];
            let ol = eu;
            tq[104] !== sJ || tq[105] !== a3 || tq[106] !== ot || tq[107] !== a5 || tq[108] !== rv || tq[109] !== aX || tq[110] !== ol || tq[111] !== sV || tq[112] !== oa ? (eh = ot ? h()(() => (function(e) {
                var t;
                let n, a, {
                        automationReferences: r,
                        includePages: s = !1,
                        includeSources: o = !0,
                        messages: i,
                        pendingAttachments: l = [],
                        resources: c = (0, nc.e)(i),
                        turns: d,
                        isTurnActive: u = d.at(-1)?.turn.status === "in_progress"
                    } = e,
                    h = [...c.inputs],
                    p = o ? (0, rl.a)(i, d) : [],
                    m = new Map,
                    f = new Map,
                    v = (t = i, -1 !== (n = rt()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, ru.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    y = [],
                    b = new Map(i.map(e => [(0, g.f)(e), e])),
                    x = rt()(i, e => "user" === e.author.role),
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
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, ri.j)(t.metadata) && y.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, ri.c)(t.metadata)
                            })
                        }
                    for (let n of rh(t.items)) {
                        if (s && "mcp-tool-call" === n.type) {
                            let e = (0, rs.b)(n);
                            if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                let t = (0, rn.d)(e.url);
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
                            for (let e of (0, t9.c)(n.content)) f.has(e.id) || f.set(e.id, {
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
                let _ = (0, ra.c)(d.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return rh(t.items).filter(e => "mcp-tool-call" === e.type)
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
                    automationIds: (0, ro.b)(i, r ?? void 0),
                    browserScreenshots: (0, rc.c)(i),
                    inputs: h,
                    sourceTurns: y,
                    outputs: a,
                    progressSteps: C,
                    isPlanSummaryUpdating: u && i.slice(x + 1).some(e => "assistant" === e.author.role && ro.a.test(e.recipient ?? "") || "tool" === e.author.role && ro.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${d.at(-1)?.id??""}:${u}`,
                    sources: o ? [...Array.from(new Map(i.filter(e => "user" === e.author.role).flatMap(e => (0, rr.a)((0, g.d)(e))).map(e => [e.projectId, e])).values(), e => ({
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
                    subagents: (0, rd.a)(i, {
                        isTurnLive: d.at(-1)?.turn.status === "in_progress"
                    })?.subagents ?? []
                }
            })({
                automationReferences: oa,
                includePages: rv,
                includeSources: !sJ,
                isTurnActive: a5 || a3,
                ...ol(),
                pendingAttachments: a3 ? aX : [],
                turns: sV
            })) : null, ep = sJ ? eh?.() : null, tq[104] = sJ, tq[105] = a3, tq[106] = ot, tq[107] = a5, tq[108] = rv, tq[109] = aX, tq[110] = ol, tq[111] = sV, tq[112] = oa, tq[113] = eh, tq[114] = ep) : (eh = tq[113], ep = tq[114]);
            let oc = ep,
                od = s3 || null != oc && (oc.outputs.length > 0 || oc.progressSteps.length > 0 || oc.automationIds.length > 0 || oc.subagents.length > 0 || !aI && oc.browserScreenshots.length > 0),
                ou = ot && (!sJ || od),
                oh = ou && null == rD,
                op = JSON.stringify([s6, null != rD]),
                om = sJ ? oe.isOpen : void 0,
                of = ou && !rD?.isFullWidth;
            tq[115] !== rZ || tq[116] !== op || tq[117] !== om || tq[118] !== of ? (em = {
                contentShiftResetKey: op,
                controlledIsOpen: om,
                isEnabled: of,
                floatingPanelWidth: rZ
            }, tq[115] = rZ, tq[116] = op, tq[117] = om, tq[118] = of, tq[119] = em) : em = tq[119];
            let ov = (0, tB.a)(em),
                oy = ab ?? ng,
                ob = rL && null == aB,
                ox = aA ?? a6,
                oC = rw.isLoading && !rC,
                o_ = rw.isError && !rj;
            tq[120] !== rw.error || tq[121] !== nH ? (eg = nH || (0, tU.e)(rw.error) || !(rw.error instanceof tU.a && [401, 403, 404].includes(rw.error.status)), tq[120] = rw.error, tq[121] = nH, tq[122] = eg) : eg = tq[122];
            let ow = eg;
            tq[123] !== rw.error || tq[124] !== ng || tq[125] !== o_ || tq[126] !== nH || tq[127] !== nW || tq[128] !== nA ? (ef = () => {
                o_ && !nH && tx.a.loadFailed(nW, ng, nA, rw.error)
            }, ev = [rw.error, ng, o_, nH, nW, nA], tq[123] = rw.error, tq[124] = ng, tq[125] = o_, tq[126] = nH, tq[127] = nW, tq[128] = nA, tq[129] = ef, tq[130] = ev) : (ef = tq[129], ev = tq[130]), (0, b.useEffect)(ef, ev), tq[131] !== ng || tq[132] !== n3 || tq[133] !== ab ? (ey = null, n3 || (ey = ab ?? ((0, a0.e)(ng) ? null : ng)), tq[131] = ng, tq[132] = n3, tq[133] = ab, tq[134] = ey) : ey = tq[134], tq[135] !== au || tq[136] !== rR || tq[137] !== rB || tq[138] !== am || tq[139] !== nP || tq[140] !== rY || tq[141] !== rF || tq[142] !== av || tq[143] !== ey || tq[144] !== nR || tq[145] !== nW || tq[146] !== nF ? (eb = (e, t) => {
                let n = void 0 !== t && t;
                if (null == ey || null != au || rF) return;
                let a = ap.current?.signal;
                null == a || a.aborted || (ao({
                    messageId: e,
                    activation: nF
                }), (0, F.h)(nW, {
                    conversationId: ey,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, tY.a)(nW, "opened"), av(null == nR ? (0, af.c)(t, {
                        isTemporaryChat: nP
                    }) : (0, w.B)(nR, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, tY.a)(nW, "failed"), ao(null), nW.get(es.f).danger(am.formatMessage({
                        id: "chatgptConversations.branchFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot continue a conversation in a new chat"
                    }), {
                        errorAnalytics: {
                            toastId: "branch_conversation_failed",
                            operation: "branch_conversation",
                            errorCategory: "conversation",
                            conversationId: ey ?? void 0,
                            retryable: !0,
                            userFacingError: {
                                surface: (0, ai.b)(null == rB && null == rR ? null : rY),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, tq[135] = au, tq[136] = rR, tq[137] = rB, tq[138] = am, tq[139] = nP, tq[140] = rY, tq[141] = rF, tq[142] = av, tq[143] = ey, tq[144] = nR, tq[145] = nW, tq[146] = nF, tq[147] = eb) : eb = tq[147];
            let oT = (0, tW.a)(eb);
            tq[148] !== rR || tq[149] !== ng || tq[150] !== rB || tq[151] !== am || tq[152] !== rJ || tq[153] !== nP || tq[154] !== rY || tq[155] !== nW || tq[156] !== ab ? (eC = async (e, t, n, a) => {
                if (!rJ) try {
                    await aU(nW, {
                        conversationId: ng,
                        isTemporaryChat: nP,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, ai.c)(t);
                    throw nW.get(es.f).danger(am.formatMessage({
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
                            conversationId: ab ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, ai.b)(null == rB && null == rR ? null : rY),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, tq[148] = rR, tq[149] = ng, tq[150] = rB, tq[151] = am, tq[152] = rJ, tq[153] = nP, tq[154] = rY, tq[155] = nW, tq[156] = ab, tq[157] = eC) : eC = tq[157];
            let oS = (0, tW.a)(eC);
            tq[158] !== n8 || tq[159] !== rR || tq[160] !== ng || tq[161] !== rB || tq[162] !== am || tq[163] !== rJ || tq[164] !== nP || tq[165] !== rY || tq[166] !== rF || tq[167] !== av || tq[168] !== nz || tq[169] !== nW || tq[170] !== ab ? (e_ = async (e, t) => {
                if (!rJ && !rF) try {
                    let n = nW.get(ac.d, ng);
                    if (n?.startsNewWorkConversation || null == nW.get(F.j, ng) || (0, tJ.h)(nW.get(F.T, ng)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, g.d)(n.prompt),
                            r = (0, eB.i)(n.prompt.metadata, a, (0, v.e)(n.prompt.metadata), (0, y.w)(a)),
                            s = (0, eH.a)(n.prompt, a, r),
                            o = nW.get(nT.s, n8),
                            i = "markdown" === s.renderFormat ? s.message : a,
                            l = o.length > 0 ? o : i,
                            c = o.length > 0 ? void 0 : s.renderFormat ?? "plain";
                        if (null != nz) return void await nz(l, c);
                        if (null == nW.get(F.j, ng) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, tw.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${ng}`;
                            (0, e2.E)(t, (t, n) => n ? t : e) || (0, nT.T)(nW, ng, e), (0, e2.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, f.a)((0, g.o)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, y.w)(a);
                            (0, e3.m)(nW, "work"), await av("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: o.length > 0 ? o : t,
                                    prefillPromptFormat: o.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (rY && !nP && (0, e0.$)(nW, (0, tr.b)({
                                entrypoint: "home"
                            }))) return void await av("/");
                        let d = (0, g.i)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, a$.f)(nW, d);
                        (0, nT.U)(nW, u, t.model);
                        let h = nW.get(F.R, ng);
                        (0, e3.m)(nW, rY ? "work" : "chat"), await av({
                            pathname: "/",
                            search: (0, af.d)("", nP)
                        }, {
                            state: {
                                initialChatGptConversationId: u,
                                project: null,
                                chatGptProjectId: (0, ag.a)(h) ? h : null,
                                chatGptCustomGptId: (0, ag.a)(h) ? null : h,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: rY
                            }
                        });
                        return
                    }
                    await (0, ac.g)(nW, {
                        conversationId: ng,
                        isTemporaryChat: nP,
                        messageId: e,
                        retry: t
                    })
                } catch {
                    nW.get(es.f).danger(am.formatMessage({
                        id: "chatgptConversations.regenerate.failed",
                        defaultMessage: "Failed to regenerate response",
                        description: "Error toast shown when generating another version of a ChatGPT response fails"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.regenerate.failed",
                            operation: "regenerate_response",
                            errorCategory: "conversation",
                            conversationId: ab ?? void 0,
                            userFacingError: {
                                surface: (0, ai.b)(null == rB && null == rR ? null : rY),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, tq[158] = n8, tq[159] = rR, tq[160] = ng, tq[161] = rB, tq[162] = am, tq[163] = rJ, tq[164] = nP, tq[165] = rY, tq[166] = rF, tq[167] = av, tq[168] = nz, tq[169] = nW, tq[170] = ab, tq[171] = e_) : e_ = tq[171];
            let oE = (0, tW.a)(e_);
            tq[172] !== rR || tq[173] !== ng || tq[174] !== aO || tq[175] !== am || tq[176] !== ah || tq[177] !== nP || tq[178] !== av || tq[179] !== ay || tq[180] !== sl || tq[181] !== nW || tq[182] !== ab || tq[183] !== r5 || tq[184] !== nF ? (ew = () => {
                if (ah || null == ab) return;
                let e = nW.get(z.s);
                if (!e && !nW.get(z.q) || !e && null == rR && null == r5) return;
                let t = ap.current?.signal;
                null == t || t.aborted || (ad(nF), (e ? (0, nf.f)(nW, {
                    chatGptThreadId: ng,
                    conversationTitle: aO
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, P.a)(nW, e);
                    if ("created" === e.status) return null == n || t.aborted || nW.get(es.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, P.a)(nW, e)
                }) : (0, j.a)({
                    scope: nW,
                    projectId: sl ?? void 0,
                    prompt: `Continuing from ${(0,e4.f)({conversationId:ab,title:aO?.trim()||"ChatGPT thread"})}`
                }).then(oU)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? ay(n) : av((0, af.c)(n, {
                            isTemporaryChat: nP
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (ad(null), nW.get(es.f).danger(am.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot hand off a conversation to a task"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, tq[172] = rR, tq[173] = ng, tq[174] = aO, tq[175] = am, tq[176] = ah, tq[177] = nP, tq[178] = av, tq[179] = ay, tq[180] = sl, tq[181] = nW, tq[182] = ab, tq[183] = r5, tq[184] = nF, tq[185] = ew) : ew = tq[185];
            let oP = ew;
            tq[186] !== ng || tq[187] !== av || tq[188] !== nW || tq[189] !== n5 || tq[190] !== nA || tq[191] !== n$ ? (eI = () => {
                if (null != n$) {
                    if ((0, a0.e)(ng)) {
                        let e = (0, s1.a)(nW, n$, ng);
                        null != e && av((0, af.c)(e))
                    }
                    return
                }
                let e = nW.query.getData(nK.n, nA);
                null != e && null != nA && null != n5 && ((0, F.mb)(nW, {
                    conversation: e,
                    conversationId: n5,
                    sharedConversationId: nA
                }), av((0, af.c)(n5)))
            }, tq[186] = ng, tq[187] = av, tq[188] = nW, tq[189] = n5, tq[190] = nA, tq[191] = n$, tq[192] = eI) : eI = tq[192];
            let oA = (0, tW.a)(eI);
            tq[193] !== nL ? (ej = nL?.mcpAppContext == null ? null : {
                hostId: tP.a,
                server: "codex_apps",
                connectorId: nL.mcpAppContext.id
            }, tq[193] = nL, tq[194] = ej) : ej = tq[194];
            let oM = (0, p.x)(ty.b, ej),
                oz = nL?.fullscreenContent != null ? "content" : "workspace",
                oB = (0, X.a)(nH ? "embedded" : oz),
                oL = !oM && (rj || !rw.isError) && !nD && !r$ && (null == n$ || nY?.authMethod === "chatgpt" || nZ) && (!n3 || null != rR),
                oV = r$ || r6 || r4 || rF,
                oY = oV || sL || sG?.needsEntry === !0;
            if (sL) {
                let e;
                tq[195] !== am ? (e = am.formatMessage(sB.c.readOnlyPlaceholder), tq[195] = am, tq[196] = e) : e = tq[196], eS = e
            } else !oV && sG?.needsEntry && (eS = !1);
            let oQ = oL && !oV && !n3 && !rS && !rJ && !a5 && !a3 && !a4 && !sh,
                o$ = !oL || n3 || oY || rS ? null : aa;
            if (tq[197] !== sh || tq[198] !== au || tq[199] !== r0 || tq[200] !== r1 || tq[201] !== rR?.current_node || tq[202] !== ng || tq[203] !== r7 || tq[204] !== ox || tq[205] !== oT || tq[206] !== oS || tq[207] !== oE || tq[208] !== n_ || tq[209] !== nD || tq[210] !== oY || tq[211] !== rS || tq[212] !== sI || tq[213] !== r$ || tq[214] !== n3 || tq[215] !== a3 || tq[216] !== nP || tq[217] !== rL || tq[218] !== a5 || tq[219] !== rY || tq[220] !== r4 || tq[221] !== rF || tq[222] !== n6 || tq[223] !== aX || tq[224] !== ey || tq[225] !== sK || tq[226] !== sV || tq[227] !== sL || tq[228] !== aR || tq[229] !== nW.get || tq[230] !== aN || tq[231] !== rM?.current_node || tq[232] !== nB || tq[233] !== oL || tq[234] !== s$ || tq[235] !== aC || tq[236] !== a8) {
                let e = (0, nV.c)({
                    paragen: n6,
                    hideInitialUserMessage: n_,
                    browserConversationId: void 0,
                    conversationId: ng,
                    errorMessage: ox,
                    branchingMessageId: au,
                    isReadOnly: nD || r$ || n3 || null != nB,
                    isTemporaryChat: nP,
                    isWorkConversation: rL,
                    onRegenerateResponse: sh || n3 || null != nB || nD || r$ || r4 || rF || a5 || a3 ? void 0 : oE,
                    onEditUserMessage: sh || null == ey || rL || nD || r$ || r4 || !a8 || a3 ? void 0 : oS,
                    onFork: null == ey || nP || r4 || rF || nD || r$ ? void 0 : oT,
                    pendingSubmissionAttachments: aX,
                    shareEnabled: null == r7 && !nP && !n3 && !nD && !r$ && !sI,
                    readAloudEnabled: !n3 && !r$,
                    feedbackEnabled: !n3 && !r$ && null == nB,
                    renderedTurns: sL || null == n6 || null == sK ? sV : (0, nq.a)({
                        ...sK,
                        current_node: n6.promptMessageId
                    }, {
                        clinicalSearchEnabled: r1,
                        clinicalCitationsEnabled: r0,
                        streamingOrders: aC,
                        isWorkConversation: rY,
                        getRenderTelemetry: e => (0, oj.c)(nW.get, e)
                    }),
                    safetyReview: aR,
                    sharedConversationLastMessageId: rM?.current_node ?? aN ?? (n3 ? rR?.current_node : null),
                    showPendingLoadingMessage: s$,
                    showRequestUserInputStatus: oL && !oY && !rS
                });
                eE = sL ? (0, sB.a)(e) : e, tq[197] = sh, tq[198] = au, tq[199] = r0, tq[200] = r1, tq[201] = rR?.current_node, tq[202] = ng, tq[203] = r7, tq[204] = ox, tq[205] = oT, tq[206] = oS, tq[207] = oE, tq[208] = n_, tq[209] = nD, tq[210] = oY, tq[211] = rS, tq[212] = sI, tq[213] = r$, tq[214] = n3, tq[215] = a3, tq[216] = nP, tq[217] = rL, tq[218] = a5, tq[219] = rY, tq[220] = r4, tq[221] = rF, tq[222] = n6, tq[223] = aX, tq[224] = ey, tq[225] = sK, tq[226] = sV, tq[227] = sL, tq[228] = aR, tq[229] = nW.get, tq[230] = aN, tq[231] = rM?.current_node, tq[232] = nB, tq[233] = oL, tq[234] = s$, tq[235] = aC, tq[236] = a8, tq[237] = eE
            } else eE = tq[237];
            let oZ = eE;
            tq[238] !== am ? (eP = am.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation",
                description: "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop"
            }), tq[238] = am, tq[239] = eP) : eP = tq[239];
            let oJ = eP;
            tq[240] !== nD || tq[241] !== n3 || tq[242] !== rN || tq[243] !== nW || tq[244] !== ab ? (eA = n3 || nD || null == ab ? void 0 : e => {
                (0, rX.R)({
                    scope: nW,
                    conversationId: ab,
                    previousTitle: rN,
                    title: e
                })
            }, tq[240] = nD, tq[241] = n3, tq[242] = rN, tq[243] = nW, tq[244] = ab, tq[245] = eA) : eA = tq[245];
            let oX = aG || null != rR ? rN ?? "" : null;
            tq[246] !== aO || tq[247] !== eA || tq[248] !== oX ? (eM = (0, a.jsx)(tz.a, {
                className: "max-w-[320px]",
                variant: "flush-start",
                onRename: eA,
                title: aO,
                titleValue: oX
            }), tq[246] = aO, tq[247] = eA, tq[248] = oX, tq[249] = eM) : eM = tq[249];
            let o0 = eM,
                o1 = rY || rV ? o0 : null;
            if (null != r7) {
                let e;
                tq[250] !== ng || tq[251] !== r7 ? (e = (0, a.jsx)(aQ.ChatGptGizmoHeader, {
                    conversationId: ng,
                    gizmoId: r7
                }), tq[250] = ng, tq[251] = r7, tq[252] = e) : e = tq[252], o1 = e
            } else null != rR || null != r5 || rC || (o1 = null);
            tq[253] !== nD || tq[254] !== n3 || tq[255] !== rL ? (ek = !rL || n3 || nD ? null : (0, a.jsx)(ts.a, {
                hostId: tP.a
            }), tq[253] = nD, tq[254] = n3, tq[255] = rL, tq[256] = ek) : ek = tq[256];
            let o2 = ek;
            tq[257] !== rY || tq[258] !== sx || tq[259] !== sl ? (eR = null == sl || rY ? null : (0, a.jsx)(so, {
                allowsThreadContentOverlap: !0,
                project: sx
            }), tq[257] = rY, tq[258] = sx, tq[259] = sl, tq[260] = eR) : eR = tq[260];
            let o3 = eR;
            tq[261] !== o3 || tq[262] !== o1 || tq[263] !== ng || tq[264] !== nO || tq[265] !== nD || tq[266] !== ob || tq[267] !== n3 || tq[268] !== nP || tq[269] !== o2 || tq[270] !== sk || tq[271] !== sl || tq[272] !== sj || tq[273] !== sp ? (eN = sp ? (0, a.jsx)(si.a, {
                isTemporaryChat: nP,
                isCloudTask: ob && !n3 && !nD,
                breadcrumbHeader: nO ?? o3,
                project: null == sl ? void 0 : {
                    icon: sk,
                    name: sj
                },
                start: nO ?? (n3 ? o1 : (0, a.jsx)(tQ.BusinessAgentConversationHeader, {
                    conversationId: ng,
                    fallback: o1
                })),
                startActions: o2
            }) : null, tq[261] = o3, tq[262] = o1, tq[263] = ng, tq[264] = nO, tq[265] = nD, tq[266] = ob, tq[267] = n3, tq[268] = nP, tq[269] = o2, tq[270] = sk, tq[271] = sl, tq[272] = sj, tq[273] = sp, tq[274] = eN) : eN = tq[274];
            let o4 = eN,
                o6 = !n3 && null == nB && !nD && !nP && !aI,
                o5 = (0, p.x)(o6 ? rE.a : null, ng);
            tq[275] !== ng || tq[276] !== o5 ? (eO = null != o5 ? (0, a.jsx)(sS, {
                conversationId: ng
            }) : null, tq[275] = ng, tq[276] = o5, tq[277] = eO) : eO = tq[277];
            let o8 = eO;
            tq[278] !== oQ || tq[279] !== ng || tq[280] !== rJ || tq[281] !== sG ? (eG = null != sG ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: rJ,
                children: (0, a.jsx)(sf, {
                    conversationId: ng,
                    placement: "progress",
                    canStartSection: oQ
                })
            }) : null, tq[278] = oQ, tq[279] = ng, tq[280] = rJ, tq[281] = sG, tq[282] = eG) : eG = tq[282];
            let o7 = eG;
            if (tq[283] !== rw || tq[284] !== nY?.authMethod || tq[285] !== sh || tq[286] !== nG || tq[287] !== r2 || tq[288] !== sr || tq[289] !== ow || tq[290] !== oQ || tq[291] !== n8 || tq[292] !== sd || tq[293] !== nN || tq[294] !== rR || tq[295] !== o4 || tq[296] !== ng || tq[297] !== oJ || tq[298] !== rB || tq[299] !== aO || tq[300] !== o8 || tq[301] !== oe || tq[302] !== nC || tq[303] !== ox || tq[304] !== rD || tq[305] !== rZ || tq[306] !== eh || tq[307] !== r8 || tq[308] !== rP || tq[309] !== oP || tq[310] !== oA || tq[311] !== o_ || tq[312] !== rC || tq[313] !== nx || tq[314] !== n2 || tq[315] !== nD || tq[316] !== sJ || tq[317] !== oY || tq[318] !== sU || tq[319] !== rS || tq[320] !== oC || tq[321] !== n9 || tq[322] !== ah || tq[323] !== s_ || tq[324] !== nH || tq[325] !== sw || tq[326] !== oM || tq[327] !== ry || tq[328] !== rJ || tq[329] !== r$ || tq[330] !== rK || !1 !== tq[331] || tq[332] !== n3 || tq[333] !== r6 || tq[334] !== a4 || tq[335] !== a3 || tq[336] !== nP || tq[337] !== rL || tq[338] !== a5 || tq[339] !== rY || tq[340] !== r3 || tq[341] !== rg || tq[342] !== r4 || tq[343] !== rF || tq[344] !== rz || tq[345] !== rH.pathname || tq[346] !== r_ || tq[347] !== rW?.sidebarAutomationId || tq[348] !== nE || tq[349] !== rq || tq[350] !== sx || tq[351] !== sk || tq[352] !== sl || tq[353] !== sj || tq[354] !== eS || tq[355] !== sn || tq[356] !== sK || tq[357] !== sV || tq[358] !== nk || tq[359] !== sL || tq[360] !== oB || tq[361] !== rN || tq[362] !== nW || tq[363] !== nj || tq[364] !== aT || tq[365] !== sG || tq[366] !== o7 || tq[367] !== ab || tq[368] !== s7 || tq[369] !== nA || tq[370] !== n$ || tq[371] !== rk || tq[372] !== nB || tq[373] !== sO || tq[374] !== aI || tq[375] !== o6 || tq[376] !== oh || tq[377] !== oL || tq[378] !== s$ || tq[379] !== o$ || tq[380] !== oy || tq[381] !== ov || tq[382] !== aj || tq[383] !== nw || tq[384] !== oZ || tq[385] !== nL) {
                tu = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, n, r, s, o, i, l, c, d, u, h, p, f = sV.flatMap(oq).flatMap(oW),
                        v = f.flatMap(oH);
                    if (!n3 && (rw.error instanceof tU.a && 423 === rw.error.status || sw && null == r_)) {
                        let e;
                        tq[410] !== rw || tq[411] !== ng || tq[412] !== nW ? (e = (0, a.jsx)(sP.a, {
                            onUnlocked: () => {
                                (0, sA.g)(nW.get(sA.f)?.projectId, [ng]), rw.refetch()
                            }
                        }), tq[410] = rw, tq[411] = ng, tq[412] = nW, tq[413] = e) : e = tq[413], tu = e;
                        break e
                    }
                    if (null != sO) {
                        let e;
                        tq[414] !== sO ? (e = (0, a.jsx)(w.k, {
                            replace: !0,
                            to: sO
                        }), tq[414] = sO, tq[415] = e) : e = tq[415], tu = e;
                        break e
                    }
                    eq = sz,
                    tq[416] !== rw.fetchStatus || tq[417] !== rR || tq[418] !== o_ || tq[419] !== rC || tq[420] !== oC || tq[421] !== nH ? (e5 = !1, tq[416] = rw.fetchStatus, tq[417] = rR, tq[418] = o_, tq[419] = rC, tq[420] = oC, tq[421] = nH, tq[422] = e5) : e5 = tq[422],
                    tq[423] !== rw.data || tq[424] !== rw.fetchStatus || tq[425] !== rR || tq[426] !== ng || tq[427] !== o_ || tq[428] !== rC || tq[429] !== sU || tq[430] !== oC || !1 !== tq[431] || tq[432] !== sV.length ? (e8 = null, tq[423] = rw.data, tq[424] = rw.fetchStatus, tq[425] = rR, tq[426] = ng, tq[427] = o_, tq[428] = rC, tq[429] = sU, tq[430] = oC, tq[431] = !1, tq[432] = sV.length, tq[433] = e8) : e8 = tq[433],
                    e7 = !n3 && !r$ && (0, tp.c)() ? (0, a.jsx)(tv.b, {
                        callIds: v,
                        hostId: tP.a,
                        conversationId: (0, m.Ne)(`chatgpt:${ng}`)
                    }) : null,
                    tq[434] !== aO || tq[435] !== nH || tq[436] !== n$ || tq[437] !== nL?.documentTitle ? (e9 = nH ? null : (0, a.jsx)(ta.a, {
                        title: null == n$ ? nL?.documentTitle ?? aO : null
                    }), tq[434] = aO, tq[435] = nH, tq[436] = n$, tq[437] = nL?.documentTitle, tq[438] = e9) : e9 = tq[438],
                    tq[439] !== ng || tq[440] !== nH || tq[441] !== rJ || tq[442] !== n3 || tq[443] !== nP || tq[444] !== rY || tq[445] !== oZ ? (te = nH || rY ? null : (0, a.jsx)(rI.a, {
                        conversationId: ng,
                        canCopy: !rJ,
                        paragenEnabled: !n3,
                        turns: oZ,
                        loadHistory: !nP && !n3
                    }), tq[439] = ng, tq[440] = nH, tq[441] = rJ, tq[442] = n3, tq[443] = nP, tq[444] = rY, tq[445] = oZ, tq[446] = te) : te = tq[446];
                    let y = null != rR || rC;tq[447] !== o_ || tq[448] !== rY || tq[449] !== y ? (tt = (0, a.jsx)(tK.a, {
                        isWorkConversation: rY,
                        hasConversationContent: y,
                        hasLoadError: o_
                    }), tq[447] = o_, tq[448] = rY, tq[449] = y, tq[450] = tt) : tt = tq[450],
                    tq[451] !== rR || tq[452] !== ng || tq[453] !== o_ || tq[454] !== rC || tq[455] !== oC || tq[456] !== nH || tq[457] !== rH.pathname || tq[458] !== nW || tq[459] !== nA ? (tl = nH || oC || o_ || null == rR && !rC ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(sZ, {
                            sharedConversationId: nA
                        }), (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(tC.a, {
                                onCommit: () => tx.a.contentCommitted(nW, ng, nA, rH.pathname),
                                onPaint: () => tx.a.contentVisible(nW, ng, nA)
                            }, nA ?? ng)
                        })]
                    }), tq[451] = rR, tq[452] = ng, tq[453] = o_, tq[454] = rC, tq[455] = oC, tq[456] = nH, tq[457] = rH.pathname, tq[458] = nW, tq[459] = nA, tq[460] = tl) : tl = tq[460],
                    tq[461] !== nY?.authMethod || tq[462] !== sr || tq[463] !== sd || tq[464] !== rR || tq[465] !== o4 || tq[466] !== ng || tq[467] !== rB || tq[468] !== aO || tq[469] !== o8 || tq[470] !== oe || tq[471] !== eh || tq[472] !== r8 || tq[473] !== oP || tq[474] !== nD || tq[475] !== sJ || tq[476] !== ah || tq[477] !== s_ || tq[478] !== nH || tq[479] !== sw || tq[480] !== r$ || tq[481] !== n3 || tq[482] !== nP || tq[483] !== rL || tq[484] !== a5 || tq[485] !== rY || tq[486] !== rW?.sidebarAutomationId || tq[487] !== rq || tq[488] !== sk || tq[489] !== sl || tq[490] !== sj || tq[491] !== sn || tq[492] !== sK || tq[493] !== sV.length || tq[494] !== nW || tq[495] !== o7 || tq[496] !== ab || tq[497] !== s7 || tq[498] !== nB || tq[499] !== aI || tq[500] !== o6 || tq[501] !== oh || tq[502] !== o$ || tq[503] !== oy || tq[504] !== aj || tq[505] !== nL ? (tc = nH || null != nL ? null : (0, a.jsxs)(rT.a, {
                        chatIcon: null == sl ? void 0 : sk,
                        conversationId: rL && !n3 ? ng : null,
                        header: null != o8 || null != o7 ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(su, {
                                    header: o4,
                                    courseShortcut: o8,
                                    progress: o7
                                })
                            }), null]
                        }) : o4,
                        title: aO,
                        isArchivedPreview: nD,
                        children: [null, null, nY?.authMethod === "chatgpt" ? (0, a.jsx)(to.t, {
                            productExperience: rY ? "work" : "chat"
                        }) : null, n3 ? (0, a.jsx)(s0.a, {
                            children: null == sn ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(s9, {
                                    data: sn
                                })
                            })
                        }) : null, o6 ? (0, a.jsx)(rA, {
                            conversationId: ng,
                            scheduledAutomationId: rq ? rW?.sidebarAutomationId : void 0
                        }, ng) : null, oh ? (0, a.jsx)(a9, {
                            allowsThreadContentOverlap: !rY,
                            composerActions: o$,
                            conversationId: oy,
                            controlledState: sJ ? {
                                isOpen: oe.isOpen,
                                shouldPreventAutoFocus: oe.shouldPreventAutoFocus,
                                onOpenChange: e => {
                                    s7({
                                        ...oe,
                                        isOpen: e,
                                        shouldPreventAutoFocus: !e && oe.shouldPreventAutoFocus
                                    })
                                }
                            } : void 0,
                            readData: !sJ || oe.isOpen ? eh : null,
                            showSources: !sJ,
                            shouldBlockExternalEgress: aI
                        }) : null, nP && !n3 && !nD && null == r8 && null == sd && null == sl && !s_ && null != sK && (0, g.a)(sK).some(oD) ? (0, a.jsx)(A.a.HeaderAction, {
                            actionId: "chatgpt-conversation-save",
                            align: "end",
                            order: 100,
                            children: (0, a.jsx)(og, {
                                conversationId: ng
                            })
                        }) : null, nP || nD || r$ ? null : (0, a.jsx)(si.b, {
                            allowsThreadContentOverlap: !rY,
                            menu: n3 || null == ab ? (0, a.jsx)(st, {}) : (0, a.jsx)(r9, {
                                conversationId: ng,
                                title: aO,
                                isHandoffPending: ah,
                                isArchived: rR?.is_archived === !0,
                                isChatConversation: null != rR && !rY,
                                onHandoff: sr ? oP : void 0,
                                onOpenMessage: async e => {
                                    ap.current?.signal.aborted === !1 && nW.get(E.a)?.pathname === nW.value.pathname && await ae.current?.scrollToMessage(e)
                                },
                                projectId: sl,
                                projectName: sj,
                                serverConversationId: ab,
                                conversationOrigin: rB
                            }),
                            children: n3 || sw ? null : (0, a.jsx)(at, {
                                conversationId: ng,
                                projectId: sl,
                                sharedProjectConversation: nB,
                                isReady: (null != ab || null != nB) && sV.length > 0 && (aj ?? rR?.current_node) != null,
                                isRestricted: aI || s_,
                                isStreaming: a5
                            })
                        })]
                    }), tq[461] = nY?.authMethod, tq[462] = sr, tq[463] = sd, tq[464] = rR, tq[465] = o4, tq[466] = ng, tq[467] = rB, tq[468] = aO, tq[469] = o8, tq[470] = oe, tq[471] = eh, tq[472] = r8, tq[473] = oP, tq[474] = nD, tq[475] = sJ, tq[476] = ah, tq[477] = s_, tq[478] = nH, tq[479] = sw, tq[480] = r$, tq[481] = n3, tq[482] = nP, tq[483] = rL, tq[484] = a5, tq[485] = rY, tq[486] = rW?.sidebarAutomationId, tq[487] = rq, tq[488] = sk, tq[489] = sl, tq[490] = sj, tq[491] = sn, tq[492] = sK, tq[493] = sV.length, tq[494] = nW, tq[495] = o7, tq[496] = ab, tq[497] = s7, tq[498] = nB, tq[499] = aI, tq[500] = o6, tq[501] = oh, tq[502] = o$, tq[503] = oy, tq[504] = aj, tq[505] = nL, tq[506] = tc) : tc = tq[506],
                    td = null,
                    eW = aY.a,
                    e$ = n8,
                    eZ = rB,
                    eJ = !oL || oB.isHidden || oY || sh || rJ || rS || nD || r$ || r6 || r4 || rF || a4 || a3,
                    eX = nP,
                    e1 = sl,
                    e6 = null != sd,
                    ez = tO.c,
                    eU = rZ,
                    tq[507] !== nH || tq[508] !== rK || tq[509] !== rY || tq[510] !== o7 || tq[511] !== nL ? (eK = nH || null != nL ? o7 : rK && (0, tL.a)() && !rY && (0, a.jsx)("div", {
                        className: "h-px",
                        "aria-hidden": !0
                    }), tq[507] = nH, tq[508] = rK, tq[509] = rY, tq[510] = o7, tq[511] = nL, tq[512] = eK) : eK = tq[512],
                    eV = nG;
                    let x = null == sG ? "flex h-full min-h-0 flex-col" : "h-full",
                        C = rN ?? aO,
                        _ = !n9 && !nH && !n3 && !oM && !oB.isHidden,
                        I = aI || r2,
                        T = rD?.isFullWidth === !0,
                        j = null == rD ? ov.contentShift : void 0,
                        S = sG?.selectedIndex;tq[513] !== oQ || tq[514] !== ng || tq[515] !== sG ? (e = null != sG ? (0, a.jsx)(sf, {
                        conversationId: ng,
                        placement: "composer",
                        canStartSection: oQ
                    }) : void 0, tq[513] = oQ, tq[514] = ng, tq[515] = sG, tq[516] = e) : e = tq[516],
                    tq[517] !== ng || tq[518] !== sG ? (t = null != sG ? (0, a.jsx)(sg, {
                        conversationId: ng
                    }) : void 0, tq[517] = ng, tq[518] = sG, tq[519] = t) : t = tq[519];
                    let P = !rY,
                        M = sL ? null : ox;tq[520] !== rw || tq[521] !== ow ? (n = ow ? () => {
                        rw.refetch({
                            cancelRefetch: !1
                        })
                    } : void 0, tq[520] = rw, tq[521] = ow, tq[522] = n) : n = tq[522];
                    let k = sV.length > 0,
                        R = eS,
                        N = !s_ && (null == sl || null != sx),
                        O = null == sG && !rz,
                        G = rw.isFetching,
                        z = !sL && a5;tq[523] !== rR?.is_archived || tq[524] !== ng || tq[525] !== nD || tq[526] !== nH || tq[527] !== n3 || tq[528] !== nP || tq[529] !== a5 || tq[530] !== rY ? (r = nH || !rY || n3 || nD || rR?.is_archived === !0 || nP ? null : (0, a.jsx)(b.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(sm, {
                            conversationId: ng,
                            isTurnActive: a5
                        })
                    }), tq[523] = rR?.is_archived, tq[524] = ng, tq[525] = nD, tq[526] = nH, tq[527] = n3, tq[528] = nP, tq[529] = a5, tq[530] = rY, tq[531] = r) : r = tq[531],
                    tq[532] !== ng || tq[533] !== nD || tq[534] !== ab ? (s = nD ? (0, a.jsx)(tM.a, {
                        conversationId: ab ?? ng,
                        kind: "chatgpt"
                    }, ab ?? ng) : void 0, tq[532] = ng, tq[533] = nD, tq[534] = ab, tq[535] = s) : s = tq[535];
                    let B = !sL && s$;tq[536] !== sd ? (o = null != sd ? (0, a.jsx)(sy.GptPluginMigrationBanner, {
                        gizmoId: sd
                    }) : null, tq[536] = sd, tq[537] = o) : o = tq[537],
                    tq[538] !== sr || tq[539] !== oP || tq[540] !== ah || tq[541] !== nP || tq[542] !== r3 || tq[543] !== rg ? (i = r3 && !nP ? (0, a.jsx)(rx, {
                        canConvert: sr,
                        isChatInstantAvailable: !rg,
                        isConverting: ah,
                        onConvert: oP
                    }) : null, tq[538] = sr, tq[539] = oP, tq[540] = ah, tq[541] = nP, tq[542] = r3, tq[543] = rg, tq[544] = i) : i = tq[544],
                    tq[545] !== rP || tq[546] !== r$ ? (l = rP.bind(null, r$), tq[545] = rP, tq[546] = r$, tq[547] = l) : l = tq[547],
                    tq[548] !== oA || tq[549] !== n3 || tq[550] !== nE ? (c = e => {
                        nE?.(e), n3 && oA()
                    }, tq[548] = oA, tq[549] = n3, tq[550] = nE, tq[551] = c) : c = tq[551],
                    tq[552] !== rw.isFetching || tq[553] !== sh || tq[554] !== n8 || tq[555] !== nN || tq[556] !== ng || tq[557] !== oJ || tq[558] !== nC || tq[559] !== o_ || tq[560] !== nx || tq[561] !== n2 || tq[562] !== oY || tq[563] !== sU || tq[564] !== rS || tq[565] !== oC || tq[566] !== n9 || tq[567] !== nH || tq[568] !== n3 || tq[569] !== nP || tq[570] !== rL || tq[571] !== eS || tq[572] !== nk || tq[573] !== nj || tq[574] !== aT || tq[575] !== nA || tq[576] !== rk || tq[577] !== oL || tq[578] !== N || tq[579] !== O || tq[580] !== z || tq[581] !== r || tq[582] !== s || tq[583] !== B || tq[584] !== o || tq[585] !== i || tq[586] !== l || tq[587] !== c || tq[588] !== C || tq[589] !== _ || tq[590] !== I || tq[591] !== T || tq[592] !== j || tq[593] !== S || tq[594] !== e || tq[595] !== t || tq[596] !== P || tq[597] !== M || tq[598] !== n || tq[599] !== k || tq[600] !== nw || tq[601] !== oZ || tq[602] !== nL ? (d = (0, a.jsx)(oK, {
                        ref: ae,
                        printTitle: C,
                        trackReadState: _,
                        workspace: nL,
                        shouldBlockMcpApps: I,
                        isCoveredByFloatingPanel: T,
                        isFormOnly: n9,
                        isInlinePreview: nH,
                        hideModelPicker: nx,
                        disableAutoFocus: nC,
                        transcriptPresentation: nw,
                        scrollOrigin: nj,
                        composerRef: ar,
                        contentX: j,
                        conversationId: ng,
                        composerConversationId: n8,
                        sectionIndex: S,
                        composerLeadingContent: nN,
                        aboveComposerContent: e,
                        historyLoadingContent: t,
                        requiredSystemHints: nk,
                        isChatConversation: P,
                        conversationLoadingLabel: oJ,
                        entries: oZ,
                        errorMessage: M,
                        hasLoadError: o_,
                        onRetryLoad: n,
                        hasRenderableTurns: k,
                        isComposerDisabled: oY,
                        readOnlyPlaceholder: R,
                        moreDetailsEnabled: N,
                        isConversationEmpty: sU,
                        showEmptyState: O,
                        isConversationFetching: G,
                        isConversationLoading: oC,
                        isSharedConversation: n3,
                        isSubmitDisabled: rS,
                        isTemporaryChat: nP,
                        isTurnActive: z,
                        isWorkConversation: rL,
                        onboardingPrelude: r,
                        scrollStateConversationId: aT,
                        initialResponsePlacementKey: n2,
                        sharedConversationId: nA,
                        sharedPostRegulatedConnectorKind: rk,
                        showComposer: oL,
                        archivedPreviewFooter: s,
                        showPendingLoadingMessage: B,
                        gptPluginMigrationBanner: o,
                        awaitingGptContinuation: sh,
                        workOnlyConversionBanner: i,
                        onAddSelectedText: l,
                        onSubmitAccepted: c
                    }), tq[552] = rw.isFetching, tq[553] = sh, tq[554] = n8, tq[555] = nN, tq[556] = ng, tq[557] = oJ, tq[558] = nC, tq[559] = o_, tq[560] = nx, tq[561] = n2, tq[562] = oY, tq[563] = sU, tq[564] = rS, tq[565] = oC, tq[566] = n9, tq[567] = nH, tq[568] = n3, tq[569] = nP, tq[570] = rL, tq[571] = eS, tq[572] = nk, tq[573] = nj, tq[574] = aT, tq[575] = nA, tq[576] = rk, tq[577] = oL, tq[578] = N, tq[579] = O, tq[580] = z, tq[581] = r, tq[582] = s, tq[583] = B, tq[584] = o, tq[585] = i, tq[586] = l, tq[587] = c, tq[588] = C, tq[589] = _, tq[590] = I, tq[591] = T, tq[592] = j, tq[593] = S, tq[594] = e, tq[595] = t, tq[596] = P, tq[597] = M, tq[598] = n, tq[599] = k, tq[600] = nw, tq[601] = oZ, tq[602] = nL, tq[603] = d) : d = tq[603],
                    tq[604] !== oe || tq[605] !== eh || tq[606] !== sJ || tq[607] !== aI || tq[608] !== oh || tq[609] !== o$ || tq[610] !== oy || tq[611] !== ov ? (u = oh && null != eh && (!sJ || oe.isOpen) ? (0, a.jsx)(a7, {
                        composerActions: o$,
                        conversationId: oy,
                        readData: eh,
                        showSources: !sJ,
                        display: ov,
                        shouldBlockExternalEgress: aI
                    }) : null, tq[604] = oe, tq[605] = eh, tq[606] = sJ, tq[607] = aI, tq[608] = oh, tq[609] = o$, tq[610] = oy, tq[611] = ov, tq[612] = u) : u = tq[612],
                    tq[613] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(aV.a, {}), tq[613] = h) : h = tq[613],
                    tq[614] !== nH ? (p = null, tq[614] = nH, tq[615] = p) : p = tq[615],
                    tq[616] !== rJ || tq[617] !== d || tq[618] !== u || tq[619] !== p || tq[620] !== x ? (eY = (0, a.jsxs)("div", {
                        className: x,
                        inert: rJ,
                        children: [d, u, h, p]
                    }), tq[616] = rJ, tq[617] = d, tq[618] = u, tq[619] = p, tq[620] = x, tq[621] = eY) : eY = tq[621],
                    eQ = !n3 && !r$ && (0, tp.c)() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(ok, {
                            conversationId: ng,
                            shouldBlockExternalEgress: aI || r2,
                            widgets: f.filter(oF)
                        }), (0, a.jsx)(tf.a, {
                            blockedWidgetSource: ry ? void 0 : "descriptor",
                            transcriptMcpAppIds: new Set(f.flatMap(e => "mcp-tool-call" === e.type ? ry ? e.callId : [] : "chatgpt-hosted-widget" === e.type ? (0, aS.e)(ng, e.messageId) : [])),
                            shouldBlockExternalEgress: aI || r2
                        })]
                    }) : null
                }
                tq[283] = rw, tq[284] = nY?.authMethod, tq[285] = sh, tq[286] = nG, tq[287] = r2, tq[288] = sr, tq[289] = ow, tq[290] = oQ, tq[291] = n8, tq[292] = sd, tq[293] = nN, tq[294] = rR, tq[295] = o4, tq[296] = ng, tq[297] = oJ, tq[298] = rB, tq[299] = aO, tq[300] = o8, tq[301] = oe, tq[302] = nC, tq[303] = ox, tq[304] = rD, tq[305] = rZ, tq[306] = eh, tq[307] = r8, tq[308] = rP, tq[309] = oP, tq[310] = oA, tq[311] = o_, tq[312] = rC, tq[313] = nx, tq[314] = n2, tq[315] = nD, tq[316] = sJ, tq[317] = oY, tq[318] = sU, tq[319] = rS, tq[320] = oC, tq[321] = n9, tq[322] = ah, tq[323] = s_, tq[324] = nH, tq[325] = sw, tq[326] = oM, tq[327] = ry, tq[328] = rJ, tq[329] = r$, tq[330] = rK, tq[331] = !1, tq[332] = n3, tq[333] = r6, tq[334] = a4, tq[335] = a3, tq[336] = nP, tq[337] = rL, tq[338] = a5, tq[339] = rY, tq[340] = r3, tq[341] = rg, tq[342] = r4, tq[343] = rF, tq[344] = rz, tq[345] = rH.pathname, tq[346] = r_, tq[347] = rW?.sidebarAutomationId, tq[348] = nE, tq[349] = rq, tq[350] = sx, tq[351] = sk, tq[352] = sl, tq[353] = sj, tq[354] = eS, tq[355] = sn, tq[356] = sK, tq[357] = sV, tq[358] = nk, tq[359] = sL, tq[360] = oB, tq[361] = rN, tq[362] = nW, tq[363] = nj, tq[364] = aT, tq[365] = sG, tq[366] = o7, tq[367] = ab, tq[368] = s7, tq[369] = nA, tq[370] = n$, tq[371] = rk, tq[372] = nB, tq[373] = sO, tq[374] = aI, tq[375] = o6, tq[376] = oh, tq[377] = oL, tq[378] = s$, tq[379] = o$, tq[380] = oy, tq[381] = ov, tq[382] = aj, tq[383] = nw, tq[384] = oZ, tq[385] = nL, tq[386] = ez, tq[387] = eW, tq[388] = eq, tq[389] = eU, tq[390] = eK, tq[391] = eV, tq[392] = eY, tq[393] = eQ, tq[394] = e$, tq[395] = eZ, tq[396] = eJ, tq[397] = eX, tq[398] = e1, tq[399] = e6, tq[400] = e5, tq[401] = e8, tq[402] = e7, tq[403] = e9, tq[404] = te, tq[405] = tt, tq[406] = tl, tq[407] = tc, tq[408] = td, tq[409] = tu
            } else ez = tq[386], eW = tq[387], eq = tq[388], eU = tq[389], eK = tq[390], eV = tq[391], eY = tq[392], eQ = tq[393], e$ = tq[394], eZ = tq[395], eJ = tq[396], eX = tq[397], e1 = tq[398], e6 = tq[399], e5 = tq[400], e8 = tq[401], e7 = tq[402], e9 = tq[403], te = tq[404], tt = tq[405], tl = tq[406], tc = tq[407], td = tq[408], tu = tq[409];
            if (tu !== Symbol.for("react.early_return_sentinel")) return tu;
            tq[622] !== ez || tq[623] !== eU || tq[624] !== eK || tq[625] !== eV || tq[626] !== eY || tq[627] !== eQ ? (th = (0, a.jsxs)(ez, {
                floatingPanelWidth: eU,
                header: eK,
                banner: eV,
                children: [eY, eQ]
            }), tq[622] = ez, tq[623] = eU, tq[624] = eK, tq[625] = eV, tq[626] = eY, tq[627] = eQ, tq[628] = th) : th = tq[628], tq[629] !== eW || tq[630] !== e$ || tq[631] !== eZ || tq[632] !== eJ || tq[633] !== eX || tq[634] !== e1 || tq[635] !== e6 || tq[636] !== th ? (tm = (0, a.jsx)(eW, {
                conversationId: e$,
                conversationOrigin: eZ,
                disabled: eJ,
                isTemporaryChat: eX,
                projectId: e1,
                requiresGizmoId: e6,
                children: th
            }), tq[629] = eW, tq[630] = e$, tq[631] = eZ, tq[632] = eJ, tq[633] = eX, tq[634] = e1, tq[635] = e6, tq[636] = th, tq[637] = tm) : tm = tq[637], tq[638] !== eq || tq[639] !== e5 || tq[640] !== e8 || tq[641] !== e7 || tq[642] !== e9 || tq[643] !== te || tq[644] !== tt || tq[645] !== tl || tq[646] !== tc || tq[647] !== td || tq[648] !== tm ? (tT = (0, a.jsxs)(eq, {
                children: [e5, e8, e7, e9, te, tt, tl, tc, td, tm]
            }), tq[638] = eq, tq[639] = e5, tq[640] = e8, tq[641] = e7, tq[642] = e9, tq[643] = te, tq[644] = tt, tq[645] = tl, tq[646] = tc, tq[647] = td, tq[648] = tm, tq[649] = tT) : tT = tq[649];
            let o9 = tT,
                ie = n3 || !rw.isFetchedAfterMount || rw.isFetching || rj ? null : rw.error,
                it = o_ ? rw.error : null,
                ia = null == rB && null == rR ? null : rY,
                ir = !rY && !oC;
            return tq[650] !== aa || tq[651] !== n8 || tq[652] !== nA ? (tS = {
                conversationId: n8,
                composer: aa,
                sharedConversationId: nA
            }, tq[650] = aa, tq[651] = n8, tq[652] = nA, tq[653] = tS) : tS = tq[653], tq[654] !== o9 || tq[655] !== tS ? (tk = (0, a.jsx)(nI.a, {
                value: tS,
                children: o9
            }), tq[654] = o9, tq[655] = tS, tq[656] = tk) : tk = tq[656], tq[657] !== ir || tq[658] !== tk ? (tG = (0, a.jsx)(I.a, {
                enabled: ir,
                children: tk
            }), tq[657] = ir, tq[658] = tk, tq[659] = tG) : tG = tq[659], tq[660] !== ow || tq[661] !== ab || tq[662] !== ie || tq[663] !== it || tq[664] !== ia || tq[665] !== tG ? (tD = (0, a.jsx)(en.a, {
                conversationId: ab,
                error: ie,
                loadError: it,
                canRetry: ow,
                isWorkConversation: ia,
                children: tG
            }), tq[660] = ow, tq[661] = ab, tq[662] = ie, tq[663] = it, tq[664] = ia, tq[665] = tG, tq[666] = tD) : tD = tq[666], tD
        }

        function oF(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function oD(e) {
            return "user" === e.author.role
        }

        function oH(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function oW(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function oq(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function oU(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }

        function oK(e) {
            let t, n, s, o, c, u, h, m, g, f, v, y, C, w, I, T, j, S, E, P, A, M, k, R, N, G, z, B, L = (0, r.c)(219),
                {
                    ref: H,
                    printTitle: W,
                    trackReadState: q,
                    composerRef: K,
                    workspace: V,
                    shouldBlockMcpApps: Y,
                    contentX: Q,
                    conversationId: $,
                    sectionIndex: Z,
                    composerConversationId: J,
                    composerLeadingContent: ee,
                    aboveComposerContent: et,
                    historyLoadingContent: en,
                    requiredSystemHints: ea,
                    isCoveredByFloatingPanel: er,
                    isFormOnly: es,
                    isInlinePreview: eo,
                    hideModelPicker: ei,
                    disableAutoFocus: el,
                    transcriptPresentation: ec,
                    scrollOrigin: ed,
                    isChatConversation: eu,
                    conversationLoadingLabel: eh,
                    entries: ep,
                    errorMessage: em,
                    hasLoadError: eg,
                    onRetryLoad: ef,
                    hasRenderableTurns: ev,
                    isComposerDisabled: eb,
                    readOnlyPlaceholder: ex,
                    moreDetailsEnabled: eC,
                    isConversationEmpty: e_,
                    showEmptyState: ew,
                    isConversationFetching: eI,
                    isConversationLoading: eT,
                    isSharedConversation: ej,
                    isSubmitDisabled: eS,
                    isTemporaryChat: eE,
                    isTurnActive: eP,
                    isWorkConversation: ek,
                    onboardingPrelude: eO,
                    scrollStateConversationId: eG,
                    initialResponsePlacementKey: ez,
                    sharedConversationId: eB,
                    sharedPostRegulatedConnectorKind: eL,
                    showComposer: eF,
                    archivedPreviewFooter: eD,
                    showPendingLoadingMessage: eH,
                    gptPluginMigrationBanner: eW,
                    awaitingGptContinuation: eq,
                    workOnlyConversionBanner: eU,
                    onAddSelectedText: eV,
                    onSubmitAccepted: eY
                } = e,
                eQ = void 0 === ew || ew,
                e$ = (0, p.y)(D.a),
                eX = (0, p.x)(s1.e, (0, b.useContext)(O.a)),
                e0 = (0, p.z)(tj.a),
                e1 = (0, p.x)(tq.a, $),
                e2 = V?.fullscreenContent != null ? "content" : "workspace",
                e3 = (0, X.a)(eo ? "embedded" : e2),
                e4 = (0, p.z)(sE.a),
                e8 = eF && e4?.source.turnContext.conversationId !== J,
                tn = "floating" === e3.placement,
                ta = (0, p.z)(sw.h),
                tr = eu && null == eB && null == eX && null == eD,
                ts = !eT && !eP && !eg && e_ && !ev,
                to = (0, p.x)(F.i, $),
                ti = eQ && tr && ts && null == to && !e1 && !tn,
                tc = eQ && !e1 && (!tr || !e_),
                td = (0, b.useRef)(null),
                [tu, tp] = (0, b.useState)(null),
                [tm, tg] = (0, b.useState)(!1);
            L[0] !== ep || L[1] !== tu ? (t = () => ({
                async scrollToMessage(e) {
                    let t = ep.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != tu && await tu.scrollToKey(t.turnKey, void 0, {
                        align: "top"
                    })
                }
            }), n = [ep, tu], L[0] = ep, L[1] = tu, L[2] = t, L[3] = n) : (t = L[2], n = L[3]), (0, b.useImperativeHandle)(H, t, n), L[4] !== ep ? (s = () => ep, L[4] = ep, L[5] = s) : s = L[5];
            let tf = (0, tW.a)(s);
            L[6] !== ep || L[7] !== tu ? (o = async e => {
                let t = d()(ep, oQ);
                if (null == t || e.aborted) return null;
                let n = null;
                return await tu?.scrollToKey(t.turnKey, e => {
                    let t = e.querySelectorAll('[data-conversation-role="assistant"]');
                    return n = t.item(t.length - 1)
                }, {
                    align: "top",
                    signal: e
                }), n
            }, L[6] = ep, L[7] = tu, L[8] = o) : o = L[8];
            let tv = o,
                [ty, tb] = (0, b.useState)(null);
            L[9] !== eo || L[10] !== e$ || L[11] !== eG ? (c = () => eo ? 0 : e$.get(nZ.a, eG), L[9] = eo, L[10] = e$, L[11] = eG, L[12] = c) : c = L[12];
            let [tx, tC] = (0, b.useState)(c);
            L[13] !== eo || L[14] !== ty || L[15] !== e$ || L[16] !== eG ? (u = e => {
                eo || e$.set(nZ.a, eG, Math.max(0, e - (ty?.getHeightPx() ?? 0)))
            }, L[13] = eo, L[14] = ty, L[15] = e$, L[16] = eG, L[17] = u) : u = L[17];
            let t_ = (0, tW.a)(u);
            L[18] !== ep || L[19] !== tu ? (h = async (e, t) => {
                if (t?.signal?.aborted) return;
                if (null == tu) throw Error("ChatGPT conversation search scroll requested before VirtualizedTurnList API was ready");
                let n = ep.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                });
                null == n || (await tu.scrollToKey(n.turnKey), t?.signal?.aborted || await (0, e5.b)())
            }, L[18] = ep, L[19] = tu, L[20] = h) : h = L[20];
            let tw = (0, tW.a)(h);
            L[21] === Symbol.for("react.memo_cache_sentinel") ? (m = e => td.current?.querySelector(`[data-content-search-turn-key="${e}"]`) ?? null, L[21] = m) : m = L[21];
            let tI = (0, tW.a)(m);
            L[22] !== $ || L[23] !== ep || L[24] !== tu ? (g = async e => {
                let t = ep.find(t => {
                    let {
                        turn: n
                    } = t;
                    return n.messageIds.includes(e)
                });
                null != t && null != tu && await tu.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${$}-${e}`)}"]`), {
                    align: "center"
                })
            }, L[22] = $, L[23] = ep, L[24] = tu, L[25] = g) : g = L[25];
            let tE = (0, tW.a)(g);
            L[26] !== tI || L[27] !== tw ? (f = {
                scrollToTurn: tw,
                getTurnContainer: tI
            }, L[26] = tI, L[27] = tw, L[28] = f) : f = L[28];
            let tP = f,
                tA = `chatgpt:${$}`;
            L[29] !== $ || L[30] !== eE || L[31] !== e$ || L[32] !== eB || L[33] !== eX ? (v = async e => {
                let t = e$.get(F.j, $);
                !eE && null == eB && null == eX && null != t && e$.get(eM.b) > 0 && await (0, eA.a)(e$, t, e)
            }, L[29] = $, L[30] = eE, L[31] = e$, L[32] = eB, L[33] = eX, L[34] = v) : v = L[34], L[35] !== tP || L[36] !== tf || L[37] !== tA || L[38] !== v ? (y = function(e) {
                let {
                    getTurns: t,
                    routeContextId: n,
                    scrollAdapter: a,
                    ensureHistory: r
                } = e, s = (0, n1.a)({
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
                                        unitId: (0, nP.a)("user", t),
                                        text: n
                                    }]
                                }
                                if ("assistant-message" === e.type) {
                                    let n = (0, n3.a)(e.content, ey.b),
                                        a = [],
                                        r = "";
                                    for (; e.content.includes(r);) r += "";
                                    let s = (0, n0.a)(function e(t, n, a, r) {
                                            let s = "",
                                                o = 0;
                                            for (let i of t) {
                                                let t = n.indexOf(i.raw, o); - 1 !== t && (s += n.slice(o, t), s += function(t, n, a) {
                                                    var r, s;
                                                    if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                    if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                        if (e.name === ey.a) {
                                                            let n = (0, n4.a)(e.attributes),
                                                                a = (0, n4.b)(e.attributes),
                                                                r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, ey.l)(e) === a);
                                                            if (null == r) return "";
                                                            let s = (0, ey.i)(r);
                                                            return "hidden" === s || "block" === s ? "" : (0, ey.j)(r) ?? ""
                                                        }
                                                        return e.name === nX.a ? (0, n2.a)(e.attributes, "label") ?? "" : e.name === nX.b || e.name === nX.c ? "" : e.name === nJ.a ? e.text ?? "" : null
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
                                        unitId: (0, nP.a)("assistant", t),
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
                getTurns: tf,
                routeContextId: tA,
                scrollAdapter: tP,
                ensureHistory: v
            }), L[35] = tP, L[36] = tf, L[37] = tA, L[38] = v, L[39] = y) : y = L[39];
            let tM = y;
            L[40] !== tM.contextId ? (C = {
                containerRef: td,
                contextId: tM.contextId
            }, L[40] = tM.contextId, L[41] = C) : C = L[41], (0, te.a)(C);
            let tR = e8 && null == eD,
                tN = e0 && tR && !tn,
                tz = (0, tl.a)();
            L[42] !== $ || L[43] !== ev || L[44] !== er || L[45] !== Z || L[46] !== tz ? (w = {
                conversationId: $,
                sectionIndex: Z,
                hasRenderableTurns: ev,
                isCoveredByFloatingPanel: er,
                shouldReduceMotion: tz,
                containerRef: td
            }, L[42] = $, L[43] = ev, L[44] = er, L[45] = Z, L[46] = tz, L[47] = w) : w = L[47];
            let tB = function(e) {
                    let t, n, a, s = (0, r.c)(12),
                        {
                            conversationId: o,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, sL.a)(0);
                    s[0] !== o || s[1] !== i ? (t = {
                        conversationId: o,
                        sectionIndex: i
                    }, s[0] = o, s[1] = i, s[2] = t) : t = s[2];
                    let p = (0, b.useRef)(t);
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
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(sH) && 0 !== n.clientWidth && (s.disconnect(), h.set(a * n.clientWidth), e = (0, sF.a)(h, 0, {
                                    duration: .3,
                                    ease: sD.d
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
                    }, a = [o, i, l, d, c, h, u], s[3] = u, s[4] = o, s[5] = l, s[6] = c, s[7] = i, s[8] = h, s[9] = d, s[10] = n, s[11] = a) : (n = s[10], a = s[11]), (0, b.useLayoutEffect)(n, a), h
                }(w),
                tL = tR && tn,
                [tF, tD] = (0, b.useState)(null),
                [tH, tU] = (0, b.useState)(null),
                [tK, tV] = (0, b.useState)(null),
                tY = ej && tR && !eb && !tn && !e0,
                [tQ, t$] = (0, b.useState)(null);
            L[48] !== eq || L[49] !== $ || L[50] !== ev || L[51] !== eE || L[52] !== eL || L[53] !== eF ? (I = eF && !eq ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(eJ.BrowserComposerDisclaimer, {
                    conversationId: $,
                    hasUserMessage: ev,
                    isTemporaryChat: eE,
                    regulatedConnectorKindOverride: eL
                })
            }) : void 0, L[48] = eq, L[49] = $, L[50] = ev, L[51] = eE, L[52] = eL, L[53] = eF, L[54] = I) : I = L[54];
            let tZ = I;
            L[55] !== $ || L[56] !== em || L[57] !== ev || L[58] !== eb || L[59] !== eS || L[60] !== eE || L[61] !== ek || L[62] !== eF || L[63] !== eH ? (T = ev ? null : (0, a.jsx)(nY.a, {
                conversationId: $,
                errorMessage: em,
                isTemporaryChat: eE,
                isWorkConversation: ek,
                showPendingLoadingMessage: eH,
                showRequestUserInputStatus: eF && !eb && !eS
            }), L[55] = $, L[56] = em, L[57] = ev, L[58] = eb, L[59] = eS, L[60] = eE, L[61] = ek, L[62] = eF, L[63] = eH, L[64] = T) : T = L[64];
            let tJ = T;
            L[65] !== $ || L[66] !== ek || L[67] !== eB || L[68] !== eX ? (j = ek && null == eB && null == eX ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(eZ, {
                    conversationId: $
                }, $)
            }) : null, L[65] = $, L[66] = ek, L[67] = eB, L[68] = eX, L[69] = j) : j = L[69];
            let tX = j;
            L[70] !== eD || L[71] !== tX ? (S = null != eD ? (0, a.jsxs)(a.Fragment, {
                children: [tX, eD]
            }) : null, L[70] = eD, L[71] = tX, L[72] = S) : S = L[72];
            let t0 = S;
            L[73] !== et || L[74] !== t0 || L[75] !== eq || L[76] !== J || L[77] !== ee || L[78] !== K || L[79] !== $ || L[80] !== el || L[81] !== tZ || L[82] !== tJ || L[83] !== ep || L[84] !== tX || L[85] !== tF || L[86] !== eW || L[87] !== eg || L[88] !== ev || L[89] !== ei || L[90] !== e0 || L[91] !== eb || L[92] !== eT || L[93] !== er || L[94] !== es || L[95] !== tn || L[96] !== ta || L[97] !== eo || L[98] !== ej || L[99] !== eS || L[100] !== eE || L[101] !== ek || L[102] !== eY || L[103] !== ex || L[104] !== tY || L[105] !== ea || L[106] !== ty || L[107] !== tv || L[108] !== e3.isHidden || L[109] !== eB || L[110] !== eX || L[111] !== e8 || L[112] !== tL || L[113] !== tN || L[114] !== q || L[115] !== eU || L[116] !== V ? (E = t0 ?? (e8 ? (0, a.jsxs)(rm.a.Provider, {
                value: ep.at(-1) ?? null,
                children: [es || tn ? null : (0, a.jsx)(tt.a, {
                    onNavigate: tv
                }, $), tn ? null : ee, (0, a.jsx)(oZ, {
                    requiredSystemHints: ea,
                    composerRef: K,
                    workspace: V,
                    isInlinePreview: eo,
                    hideModelPicker: ei,
                    disableAutoFocus: el,
                    conversationId: J,
                    isImageEditComposer: ta,
                    disabled: eb,
                    readOnlyPlaceholder: ex,
                    awaitingGptContinuation: eq,
                    headerContent: tX,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tY ? (0, a.jsx)("div", {
                            ref: tV,
                            className: "empty:hidden"
                        }) : null, et, !eT && !eg && ev && !eq && eU, e0 ? null : eW, tL && tJ]
                    }),
                    isFullscreenComposer: tn,
                    isHidden: e3.isHidden,
                    trackReadState: q && !er,
                    isSharedConversation: ej,
                    isSubmitDisabled: eS,
                    followupPortalTarget: tF,
                    takeoverDisclaimerRef: t$,
                    showConversationFollowups: null == eB && null == eX && !eE && !ek && !tn,
                    isTemporaryChat: eE,
                    isWorkConversation: ek,
                    responseSpacerState: ty,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(ah, {
                            entries: ep,
                            historyLoader: eE || null != eB || null != eX ? null : (0, a.jsx)(sk.a, {
                                conversationId: $
                            }),
                            isVisible: t
                        })
                    },
                    showVoiceStage: !tN,
                    voiceDisclaimer: e0 && !tN ? tZ : void 0,
                    onSubmitAccepted: e => {
                        tC(0), eY?.(e)
                    }
                }, `${J}:${ta?"image-edit":"chat"}`)]
            }) : tX), L[73] = et, L[74] = t0, L[75] = eq, L[76] = J, L[77] = ee, L[78] = K, L[79] = $, L[80] = el, L[81] = tZ, L[82] = tJ, L[83] = ep, L[84] = tX, L[85] = tF, L[86] = eW, L[87] = eg, L[88] = ev, L[89] = ei, L[90] = e0, L[91] = eb, L[92] = eT, L[93] = er, L[94] = es, L[95] = tn, L[96] = ta, L[97] = eo, L[98] = ej, L[99] = eS, L[100] = eE, L[101] = ek, L[102] = eY, L[103] = ex, L[104] = tY, L[105] = ea, L[106] = ty, L[107] = tv, L[108] = e3.isHidden, L[109] = eB, L[110] = eX, L[111] = e8, L[112] = tL, L[113] = tN, L[114] = q, L[115] = eU, L[116] = V, L[117] = E) : E = L[117];
            let t1 = E,
                t2 = er || void 0;
            L[118] !== $ || L[119] !== er || L[120] !== tn || L[121] !== q ? (P = !q || tn || er ? null : (0, a.jsx)(rp.a, {
                conversationId: $
            }), L[118] = $, L[119] = er, L[120] = tn, L[121] = q, L[122] = P) : P = L[122], L[123] !== eD || L[124] !== $ || L[125] !== eo || L[126] !== eB || L[127] !== eX ? (A = eo || null != eB || null != eX || null != eD ? null : (0, a.jsx)(aX, {
                conversationId: $
            }, $), L[123] = eD, L[124] = $, L[125] = eo, L[126] = eB, L[127] = eX, L[128] = A) : A = L[128], L[129] !== $ || L[130] !== eT || L[131] !== eE || L[132] !== eB || L[133] !== eX ? (M = eT || eE || null != eB || null != eX ? null : (0, a.jsx)(sR, {
                conversationId: $
            }), L[129] = $, L[130] = eT, L[131] = eE, L[132] = eB, L[133] = eX, L[134] = M) : M = L[134], L[135] !== $ || L[136] !== ep || L[137] !== tm || L[138] !== eI || L[139] !== eT || L[140] !== eo || L[141] !== tv || L[142] !== eB || L[143] !== eX || L[144] !== tu ? (k = eo || eT || null != eB || null != eX ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(U, {
                    conversationId: $,
                    entries: ep,
                    turnListApi: tu
                }), (0, a.jsx)(tk.a, {
                    ready: !eI && tm && null != tu && ep.length > 0,
                    onNavigate: tv
                })]
            }), L[135] = $, L[136] = ep, L[137] = tm, L[138] = eI, L[139] = eT, L[140] = eo, L[141] = tv, L[142] = eB, L[143] = eX, L[144] = tu, L[145] = k) : k = L[145], L[146] !== eD || L[147] !== ti || L[148] !== J || L[149] !== Q || L[150] !== to || L[151] !== $ || L[152] !== eh || L[153] !== tM || L[154] !== tZ || L[155] !== tJ || L[156] !== ep || L[157] !== t1 || L[158] !== t_ || L[159] !== eg || L[160] !== ev || L[161] !== en || L[162] !== ez || L[163] !== tx || L[164] !== e0 || L[165] !== e1 || L[166] !== eb || L[167] !== eI || L[168] !== eT || L[169] !== er || L[170] !== es || L[171] !== tn || L[172] !== eo || L[173] !== ej || L[174] !== eE || L[175] !== eP || L[176] !== ek || L[177] !== eC || L[178] !== eV || L[179] !== ef || L[180] !== eO || L[181] !== W || L[182] !== tY || L[183] !== ty || L[184] !== e$ || L[185] !== ed || L[186] !== tE || L[187] !== tB || L[188] !== eB || L[189] !== eX || L[190] !== Y || L[191] !== tz || L[192] !== eF || L[193] !== e8 || L[194] !== tc || L[195] !== tL || L[196] !== tN || L[197] !== tQ || L[198] !== ec || L[199] !== tu || L[200] !== V ? (R = V?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!Y && V.fullscreenContent, t1]
            }) : (0, a.jsxs)(tG.a, {
                viewportOverlay: es || eo || ek || null != eB || null != eX || null != eD || er || tn ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(rw, {
                        conversationId: $
                    }, $)
                }),
                hideTranscript: es,
                active: !eT && (!ev || null != tu),
                presentation: ec ?? (eo ? "compact" : "default"),
                contentX: Q,
                composerFade: !1,
                footerPlacement: ti ? "home" : "bottom",
                initialOffset: tx,
                scrollOrigin: ed,
                onScroll: t_,
                responseSpacer: ty,
                scrollToBottomButton: !e8 || tn || tN ? void 0 : {
                    isWorking: eP
                },
                threadEndContent: e0 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tD,
                        className: tO.a
                    }), null == tQ ? tZ : (0, x.createPortal)(tZ, tQ)]
                }),
                footerLeadingContent: tN ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: tO.a,
                            children: (0, a.jsx)(tT.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: tZ
                    })]
                }) : void 0,
                footer: t1,
                children: [eo || eT || null != eB ? null : (0, a.jsx)(nW, {
                    conversationId: $,
                    entries: ep,
                    isConversationFetching: eI,
                    turnListApi: tu
                }), (0, a.jsxs)(l.a.div, {
                    ref: td,
                    style: {
                        x: tB
                    },
                    "data-chatgpt-conversation-selection-target": $,
                    className: (0, i.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", eo && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, e9.K)(e$, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, e9.K)(e$, "conversation")
                    },
                    children: [(0, a.jsxs)(b.Suspense, {
                        fallback: (0, a.jsx)(th.LoadingPage, {
                            debugName: "ChatGptConversationPage",
                            fillParent: !0
                        }),
                        children: [eo || eT ? null : (0, a.jsx)(e7.a, {
                            conversationSource: tM
                        }), eE || null != eB || null != eX ? null : en ?? (0, a.jsx)(sk.a, {
                            conversationId: $
                        }), (0, a.jsx)(oT.b, {
                            conversationId: $
                        }), (null != eB || null != eX) && ev ? (0, a.jsx)(oa, {
                            sharedConversationId: eB
                        }) : null, null == eO ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: tO.a,
                                children: eO
                            })
                        }), null == to || eT ? null : (0, a.jsx)(ng.a, {
                            conversationId: $,
                            branchSource: {
                                conversationId: to.metadata.source_conversation_id,
                                title: to.metadata.source_conversation_title,
                                gizmoId: to.metadata.source_conversation_gizmo_id,
                                ownerId: to.metadata.source_conversation_owner_id
                            }
                        }), eg ? (0, a.jsx)(eK, {
                            isFetching: eI,
                            isSharedConversation: ej,
                            onRetry: ef
                        }) : eT ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": eh,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(th.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : ev ? (0, a.jsxs)(sI.a, {
                            value: tE,
                            children: [eo || er ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eE || null != eB || null != eX ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(eN, {
                                        conversationId: $
                                    })
                                }), (0, a.jsx)(eR, {
                                    entries: ep,
                                    title: W,
                                    TurnRowComponent: au
                                })]
                            }), (0, a.jsx)(aA, {
                                conversationId: $,
                                entries: ep,
                                onApiChange: tp,
                                onVisibleContentReady: () => tg(!0),
                                responseSpacerState: ty
                            }), tY ? (0, a.jsx)("div", {
                                ref: tU,
                                className: "empty:hidden"
                            }) : null]
                        }) : tc && null == to && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            children: (0, a.jsx)(_.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation",
                                description: "Empty state when a ChatGPT conversation has no user or assistant text messages"
                            })
                        }), !tL && tJ, (0, a.jsx)(aZ.a, {
                            conversationId: J,
                            isWorkConversation: ek
                        }), eF && !eb ? (0, a.jsx)(sY, {
                            conversationId: $,
                            moreDetailsEnabled: eC,
                            onAddSelectedText: eV
                        }) : null]
                    }), eo ? null : (0, a.jsx)(n$.a, {
                        initialPlacementKey: ez,
                        isActiveVoiceConversation: e0 && e1,
                        isLoadingHistory: eT,
                        latestUserTurnKey: ep.findLast(oV)?.turnKey,
                        onResponseSpacerStateChange: tb
                    }), tN ? (0, a.jsx)(l.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tz ? tS.c : tS.b
                    }) : null]
                })]
            }), L[146] = eD, L[147] = ti, L[148] = J, L[149] = Q, L[150] = to, L[151] = $, L[152] = eh, L[153] = tM, L[154] = tZ, L[155] = tJ, L[156] = ep, L[157] = t1, L[158] = t_, L[159] = eg, L[160] = ev, L[161] = en, L[162] = ez, L[163] = tx, L[164] = e0, L[165] = e1, L[166] = eb, L[167] = eI, L[168] = eT, L[169] = er, L[170] = es, L[171] = tn, L[172] = eo, L[173] = ej, L[174] = eE, L[175] = eP, L[176] = ek, L[177] = eC, L[178] = eV, L[179] = ef, L[180] = eO, L[181] = W, L[182] = tY, L[183] = ty, L[184] = e$, L[185] = ed, L[186] = tE, L[187] = tB, L[188] = eB, L[189] = eX, L[190] = Y, L[191] = tz, L[192] = eF, L[193] = e8, L[194] = tc, L[195] = tL, L[196] = tN, L[197] = tQ, L[198] = ec, L[199] = tu, L[200] = V, L[201] = R) : R = L[201], L[202] !== er || L[203] !== t2 || L[204] !== P || L[205] !== A || L[206] !== M || L[207] !== k || L[208] !== R ? (N = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": t2,
                inert: er,
                children: [P, A, M, k, R]
            }), L[202] = er, L[203] = t2, L[204] = P, L[205] = A, L[206] = M, L[207] = k, L[208] = R, L[209] = N) : N = L[209];
            let t3 = N;
            return L[210] !== tK || L[211] !== tH || L[212] !== tY ? (G = tY ? {
                aboveComposer: tK,
                belowMessage: tH
            } : null, L[210] = tK, L[211] = tH, L[212] = tY, L[213] = G) : G = L[213], L[214] !== t3 ? (z = (0, a.jsx)(e6.a, {
                children: t3
            }), L[214] = t3, L[215] = z) : z = L[215], L[216] !== G || L[217] !== z ? (B = (0, a.jsx)(aI.a, {
                value: G,
                children: z
            }), L[216] = G, L[217] = z, L[218] = B) : B = L[218], B
        }

        function oV(e) {
            let {
                turn: t
            } = e;
            return t.items.some(oY)
        }

        function oY(e) {
            return "user-message" === e.type
        }

        function oQ(e) {
            let {
                turn: t
            } = e;
            return t.items.some(o$)
        }

        function o$(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function oZ(e) {
            let t, n, s, o = (0, r.c)(11),
                i = (0, b.useContext)(e1.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return o[0] !== e ? (t = (0, a.jsx)(oJ, {
                    ...e
                }), o[0] = e, o[1] = t) : t = o[1], t
            }
            o[2] !== e.conversationId || o[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, o[2] = e.conversationId, o[3] = e.isImageEditComposer, o[4] = t) : t = o[4];
            let l = !e.isWorkConversation;
            return o[5] !== e ? (n = t => (0, a.jsx)(oJ, {
                ...e,
                initialController: t
            }), o[5] = e, o[6] = n) : n = o[6], o[7] !== t || o[8] !== l || o[9] !== n ? (s = (0, a.jsx)(s_, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), o[7] = t, o[8] = l, o[9] = n, o[10] = s) : s = o[10], s
        }

        function oJ(e) {
            let t, n, s, o, i, l, c, d, u, h, m, g, f, v, y, x, _, I, T, j = (0, r.c)(72);
            j[0] !== e ? ({
                composerRef: t,
                initialController: n,
                ...s
            } = e, j[0] = e, j[1] = t, j[2] = n, j[3] = s) : (t = j[1], n = j[2], s = j[3]);
            let S = (0, p.y)(D.a),
                E = (0, p.x)(N.b, s.isTemporaryChat),
                {
                    isFullscreenComposer: P
                } = s,
                A = (0, C.a)(),
                {
                    state: M
                } = (0, w.W)(),
                O = (0, p.x)(oG, s.conversationId),
                G = (0, p.x)(F.R, s.conversationId),
                z = (0, p.x)(t$.c, s.conversationId);
            j[4] !== z || j[5] !== s.isSharedConversation || j[6] !== s.isWorkConversation || j[7] !== G ? (o = !s.isSharedConversation && !s.isWorkConversation && !(0, ag.a)(G) && !z, j[4] = z, j[5] = s.isSharedConversation, j[6] = s.isWorkConversation, j[7] = G, j[8] = o) : o = j[8];
            let B = o,
                L = B && !s.disabled && !s.isSubmitDisabled && !s.isImageEditComposer,
                H = B ? O : void 0;
            j[9] !== s.conversationId || j[10] !== s.isImageEditComposer ? (i = s.isImageEditComposer ? {
                conversationId: s.conversationId,
                surface: "image-edit"
            } : s.conversationId, j[9] = s.conversationId, j[10] = s.isImageEditComposer, j[11] = i) : i = j[11];
            let W = i;
            j[12] !== W || j[13] !== n || j[14] !== s.conversationId ? (l = {
                composerController: n,
                conversationId: s.conversationId,
                draftKey: W
            }, j[12] = W, j[13] = n, j[14] = s.conversationId, j[15] = l) : l = j[15];
            let q = (0, oS.a)(l),
                U = (0, b.useContext)(e1.a),
                K = (0, b.useRef)(!1);
            j[16] !== W || j[17] !== U || j[18] !== n || j[19] !== s.isTemporaryChat || j[20] !== S ? (c = e => {
                null == e || null == n || K.current || (K.current = !0, (0, nT.T)(S, W, n.getPersistedText(), {
                    isTemporaryChat: s.isTemporaryChat
                }), U?.onAdopt())
            }, j[16] = W, j[17] = U, j[18] = n, j[19] = s.isTemporaryChat, j[20] = S, j[21] = c) : c = j[21];
            let V = (0, tW.a)(c);
            j[22] !== V || j[23] !== t ? (d = (0, tD.a)(t, V), j[22] = V, j[23] = t, j[24] = d) : d = j[24];
            let Y = d,
                Q = (0, b.useContext)(rm.a),
                $ = (0, p.x)(F.cb, s.conversationId),
                X = (0, p.x)(F._, s.conversationId),
                ee = (0, p.x)(nT.i, s.conversationId);
            j[25] !== X ? (u = (0, F.zb)(X), j[25] = X, j[26] = u) : u = j[26];
            let et = u,
                en = (0, p.z)(k.j.activeTab$);
            if (j[27] !== en || j[28] !== P || j[29] !== et || j[30] !== Q) {
                let e = Q?.turn.items.flatMap(o2);
                h = P && en?.tabType.kind === td.a && "generatedImages" in en.props && null != en.props.generatedImages && !et && null != Q && "in_progress" !== Q.turn.status && !Q.turn.hasPendingAssistantReply && !Q.showPendingLoadingMessage && !e?.some(o1) && (null != Q.errorMessage || e?.some(o0)) ? Q.turn.messageIds.at(-1) ?? Q.turnKey : null, j[27] = en, j[28] = P, j[29] = et, j[30] = Q, j[31] = h
            } else h = j[31];
            let ea = h,
                er = (0, b.useRef)(null);
            j[32] !== ea || j[33] !== S ? (m = () => {
                null != ea && ea !== er.current && (er.current = ea, S.set(J.a, "expanded"))
            }, g = [ea, S], j[32] = ea, j[33] = S, j[34] = m, j[35] = g) : (m = j[34], g = j[35]), (0, b.useEffect)(m, g);
            let es = (0, p.w)(sM.a, P ? s.conversationId : null);
            j[36] !== q || j[37] !== L || j[38] !== W || j[39] !== A || j[40] !== P || j[41] !== Y || j[42] !== E || j[43] !== s || j[44] !== S || j[45] !== H || j[46] !== M?.libraryFileCreation ? (f = e => (0, a.jsxs)(tc.a, {
                children: [P && s.trackReadState && !e?.isHidden ? (0, a.jsx)(rp.a, {
                    conversationId: s.conversationId,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, s.aboveComposerContent, (0, a.jsx)(eX.a, {
                    children: (0, a.jsx)(nv.a, {
                        ref: Y,
                        headerContent: s.headerContent,
                        allowBackgroundSubmit: s.isInlinePreview,
                        disableAutoFocus: s.disableAutoFocus,
                        conversationOrigin: null == s.workspace ? void 0 : "tpp",
                        mcpAppContext: s.workspace?.mcpAppContext,
                        onServerThreadIdChange: s.workspace?.onServerThreadIdChange,
                        followupPortalTarget: s.followupPortalTarget,
                        takeoverDisclaimerRef: s.takeoverDisclaimerRef,
                        showConversationFollowups: s.showConversationFollowups,
                        autoPrepare: !s.isSubmitDisabled && !s.isSharedConversation,
                        browserConversationId: (0, Z.getThreadBrowserConversationId)(S) ?? s.conversationId,
                        composerController: q,
                        conversationId: s.conversationId,
                        requiredSystemHints: s.requiredSystemHints,
                        hideSystemHints: null != s.requiredSystemHints,
                        draftKey: W,
                        onPromptChange: E,
                        selectedCustomGpt: H,
                        targetGizmoId: H?.id,
                        onCustomGptChange: L ? e => {
                            S.set(oG, s.conversationId, e)
                        } : void 0,
                        onCustomAgentSelected: L ? () => {
                            S.set(oG, s.conversationId, null)
                        } : void 0,
                        disableDraftPrepare: s.isSubmitDisabled || s.isSharedConversation,
                        disableSubmit: s.disabled || s.isSubmitDisabled,
                        voiceInputDisabled: s.disabled,
                        aboveComposerHeaderContent: s.voiceDisclaimer,
                        getExtraDeveloperInstructions: !s.isInlinePreview && M?.libraryFileCreation && !s.isTemporaryChat ? oX : void 0,
                        isTemporaryChat: s.isTemporaryChat,
                        placeholder: s.disabled && !1 !== s.readOnlyPlaceholder ? s.readOnlyPlaceholder ?? A.formatMessage({
                            id: "chatgptConversations.sharedConversation.readOnlyPlaceholder",
                            defaultMessage: "This conversation is read-only.",
                            description: "Placeholder inside the disabled message composer when someone views a shared ChatGPT Work conversation that cannot be continued in Codex Desktop"
                        }) : void 0,
                        readOnly: s.disabled,
                        hideModelPicker: s.hideModelPicker,
                        modelPickerPending: s.isSubmitDisabled,
                        showFilePicker: !s.disabled && !s.isSubmitDisabled,
                        showPendingFilePicker: !s.disabled && s.isSubmitDisabled,
                        showVoiceStage: s.showVoiceStage,
                        onSubmitAccepted: t => {
                            e?.onSubmitStart(), s.responseSpacerState?.place(), s.onSubmitAccepted?.(t)
                        },
                        onSubmitError: s.responseSpacerState?.clear
                    })
                })]
            }), j[36] = q, j[37] = L, j[38] = W, j[39] = A, j[40] = P, j[41] = Y, j[42] = E, j[43] = s, j[44] = S, j[45] = H, j[46] = M?.libraryFileCreation, j[47] = f) : f = j[47];
            let eo = f;
            j[48] !== S ? (v = () => {
                (0, e9.K)(S, "conversation")
            }, y = () => {
                (0, e9.K)(S, "conversation")
            }, j[48] = S, j[49] = v, j[50] = y) : (v = j[49], y = j[50]);
            let ei = !s.isInlinePreview && !s.disabled && !s.isSubmitDisabled;
            j[51] !== q || j[52] !== ei ? (x = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(ry, {
                    composerController: q,
                    enabled: ei
                })
            }), j[51] = q, j[52] = ei, j[53] = x) : x = j[53];
            let el = P ? "floating" : "pane",
                ec = s.disabled || s.awaitingGptContinuation,
                ed = null == Q && !et,
                eu = ee || et ? "loading" : "idle";
            return j[54] !== eu ? (_ = {
                type: eu,
                unread: !1
            }, j[54] = eu, j[55] = _) : _ = j[55], j[56] !== es || j[57] !== s.isHidden || j[58] !== s.renderTranscript || j[59] !== eo || j[60] !== el || j[61] !== ec || j[62] !== ed || j[63] !== _ || j[64] !== $ ? (I = (0, a.jsx)(R.a, {
                notifications: es,
                isHidden: s.isHidden,
                placement: el,
                forceExpanded: ec,
                composerOnly: ed,
                title: $,
                statusState: _,
                renderTranscript: s.renderTranscript,
                children: eo
            }), j[56] = es, j[57] = s.isHidden, j[58] = s.renderTranscript, j[59] = eo, j[60] = el, j[61] = ec, j[62] = ed, j[63] = _, j[64] = $, j[65] = I) : I = j[65], j[66] !== s.conversationId || j[67] !== v || j[68] !== y || j[69] !== x || j[70] !== I ? (T = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": s.conversationId,
                onMouseDownCapture: v,
                onFocusCapture: y,
                children: [x, I]
            }), j[66] = s.conversationId, j[67] = v, j[68] = y, j[69] = x, j[70] = I, j[71] = T) : T = j[71], T
        }
        async function oX() {
            return [tu.a]
        }

        function o0(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function o1(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function o2(e) {
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

        function u(e) {
            let t, n, u, h, p, m, g, f, v, y, b, x, C, _ = (0, r.c)(45),
                {
                    initialPlacementKey: w,
                    isActiveVoiceConversation: I,
                    isLoadingHistory: T,
                    latestUserTurnKey: j,
                    onResponseSpacerStateChange: S
                } = e,
                E = void 0 !== I && I,
                P = void 0 !== T && T,
                A = (0, o.k)();
            _[0] !== E || _[1] !== A ? (t = E && (0, o.f)(A, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), _[0] = E, _[1] = A, _[2] = t) : t = _[2];
            let M = t,
                k = (0, s.useRef)(j),
                R = (0, s.useRef)(P),
                N = (0, s.useRef)(null),
                O = (0, s.useRef)(null),
                G = (0, c.b)();
            _[3] !== G ? (n = () => new l.a(G), _[3] = G, _[4] = n) : n = _[4];
            let [z] = (0, s.useState)(n), {
                clear: B,
                consumeGrowth: L,
                getHeightPx: F,
                place: D,
                prepareThreadEndContent: H
            } = z, {
                addScrollListener: W,
                getScrollElement: q
            } = G;
            _[5] !== B || _[6] !== G ? (u = () => {
                B(), G.scrollToBottom()
            }, _[5] = B, _[6] = G, _[7] = u) : u = _[7];
            let U = (0, d.a)(u);
            _[8] === Symbol.for("react.memo_cache_sentinel") ? (h = (e, t) => {
                N.current = {
                    turnKey: e,
                    element: t
                }, O.current?.(e, t)
            }, _[8] = h) : h = _[8];
            let K = (0, d.a)(h);
            _[9] === Symbol.for("react.memo_cache_sentinel") ? (p = e => {
                O.current = e;
                let t = N.current;
                return null != t && e(t.turnKey, t.element), () => {
                    O.current = null
                }
            }, _[9] = p) : p = _[9];
            let V = (0, d.a)(p);
            _[10] !== q || _[11] !== j || _[12] !== D || _[13] !== M ? (m = () => {
                let e = q();
                if (null == e || 0 === e.clientHeight) return !1;
                if (M && null != j) {
                    var t, n;
                    let a, r = (t = e, n = j, a = t.querySelector(`[data-turn-key="${CSS.escape(n)}"]`), a?.querySelector("[data-user-message-bubble]") ?? a);
                    if (null == r) return !1;
                    D(r)
                } else D();
                return !0
            }, _[10] = q, _[11] = j, _[12] = D, _[13] = M, _[14] = m) : m = _[14];
            let Y = (0, s.useEffectEvent)(m);
            return _[15] !== B || _[16] !== L || _[17] !== F || _[18] !== S || _[19] !== K || _[20] !== D || _[21] !== H || _[22] !== U || _[23] !== M ? (f = () => (S({
                voiceAutoScrollEnabled: M,
                clear: B,
                consumeGrowth: L,
                getHeightPx: F,
                onTurnLayoutReady: K,
                place: D,
                prepareThreadEndContent: H,
                scrollToBottom: U
            }), () => {
                S(null)
            }), g = [B, L, F, S, K, D, H, U, M], _[15] = B, _[16] = L, _[17] = F, _[18] = S, _[19] = K, _[20] = D, _[21] = H, _[22] = U, _[23] = M, _[24] = g, _[25] = f) : (g = _[24], f = _[25]), (0, s.useLayoutEffect)(f, g), _[26] !== q || _[27] !== P || _[28] !== j || _[29] !== D || _[30] !== V || _[31] !== M ? (v = () => {
                let e = k.current,
                    t = R.current;
                if (k.current = j, R.current = P, M && !P && !t && null != j && j !== e) return function(e, t, n, a) {
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
                }(j, q, D, V)
            }, y = [q, P, j, D, V, M], _[26] = q, _[27] = P, _[28] = j, _[29] = D, _[30] = V, _[31] = M, _[32] = v, _[33] = y) : (v = _[32], y = _[33]), (0, s.useLayoutEffect)(v, y), _[34] !== W || _[35] !== q || _[36] !== w || _[37] !== Y ? (b = () => {
                if (null == w) return;
                let e = !1;
                return W(() => {
                    e || null == q() || (e = !0, e = Y())
                })
            }, _[34] = W, _[35] = q, _[36] = w, _[37] = Y, _[38] = b) : b = _[38], _[39] !== W || _[40] !== q || _[41] !== w ? (x = [W, q, w], _[39] = W, _[40] = q, _[41] = w, _[42] = x) : x = _[42], (0, s.useLayoutEffect)(b, x), _[43] !== z ? (C = (0, a.jsx)(i.a, {
                controller: z
            }), _[43] = z, _[44] = C) : C = _[44], C
        }
        n.d(t, {
            a: () => u
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
            d = n("q542");

        function u() {
            let e, t, n, u = (0, r.c)(6),
                h = (0, s.y)(l.a),
                p = (0, s.z)(c.d),
                m = (0, o.useContext)(i.a);
            return u[0] !== h ? (e = () => (h.set(c.e, !0), () => {
                h.set(c.e, !1), (0, c.a)(h)
            }), t = [h], u[0] = h, u[1] = e, u[2] = t) : (e = u[1], t = u[2]), (0, o.useLayoutEffect)(e, t), u[3] !== m || u[4] !== p ? (n = null == p ? null : (0, a.jsx)(a.Fragment, {
                children: [p, ...null == p.overlay ? [] : [p.overlay]].map(e => (0, a.jsx)(d.a.Root, {
                    animateOnMount: e.animateOnMount ?? !0,
                    fillHeight: !0,
                    fullWidth: e.isFullWidth,
                    fullWidthTransition: e.fullWidthTransition,
                    isPIPObstacle: !1,
                    portalContainer: m,
                    reserveToolbarSpace: e.reserveToolbarSpace ?? !0,
                    shouldHideInlineImmediately: !1,
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
            }), u[3] = m, u[4] = p, u[5] = n) : n = u[5], n
        }
        n.d(t, {
            a: () => u
        })
    }),
    aEnb: (function(e, t, n) {
        n.d(t, {
            ChatGptGizmoHeader: () => G
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("mBJV"),
            o = n("lUoP"),
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
            C = n("sUmv"),
            _ = n("L7MT"),
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
            j = n("OWtl"),
            S = n("hZax"),
            E = n("JYRT"),
            P = n("wwvo"),
            A = n("H7Nt"),
            M = n("vzxm"),
            k = n("jAnS"),
            R = n("fmMy"),
            N = n("dVzo");
        let O = (0, y.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function G(e) {
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
            } = (0, i.x)(P.b, t);
            if (null == h) return null;
            c[3] !== h.gizmo.display.name ? (n = h.gizmo.display.name.trim(), c[3] = h.gizmo.display.name, c[4] = n) : n = c[4];
            let p = n;
            return c[5] !== p ? (s = p ? (0, a.jsx)("span", {
                className: "truncate",
                children: p
            }) : null, c[5] = p, c[6] = s) : s = c[6], c[7] !== h ? (o = (0, a.jsx)(z, {
                gizmo: h
            }), c[7] = h, c[8] = o) : o = c[8], c[9] !== s || c[10] !== o ? (l = (0, a.jsxs)("div", {
                className: "flex min-w-0 items-center gap-1 select-none",
                children: [s, o]
            }), c[9] = s, c[10] = o, c[11] = l) : l = c[11], l
        }

        function z(e) {
            let t, n, y, G, z, B, L, F, D, H, W, q, U, K, V, Y, Q, $, Z, J, X = (0, r.c)(59),
                {
                    gizmo: ee
                } = e,
                et = (0, i.y)(j.a),
                en = (0, c.a)(),
                {
                    search: ea
                } = (0, u.W)(),
                er = (0, u.Y)(),
                [es, eo] = (0, l.useState)(!1),
                ei = (0, S.h)("2160578039"),
                el = (0, i.x)(E.a, "2513446768"),
                ec = ei && "gpt" === ee.gizmo.gizmo_type && null != ee.gizmo.migrated_plugin_id;
            X[0] !== el ? (t = el?.get("disable_gpt_updates", !1), X[0] = el, X[1] = t) : t = X[1];
            let ed = t,
                eu = ee.gizmo.current_user_permission?.can_write && !ec && !ed,
                {
                    data: eh
                } = (0, i.z)(P.c);
            X[2] !== ee.gizmo.id || X[3] !== eh ? (n = eh?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === ee.gizmo.id
            }), X[2] = ee.gizmo.id, X[3] = eh, X[4] = n) : n = X[4];
            let ep = n,
                em = eu || ec || ed ? `https://chatgpt.com/gpts/editor/${encodeURIComponent(ee.gizmo.id)}` : `https://chatgpt.com/g/${encodeURIComponent(ee.gizmo.id)}/view`;
            X[5] !== ee.gizmo.id || X[6] !== ee.gizmo.short_url ? (y = ee.gizmo.short_url?.trim() || ee.gizmo.id, X[5] = ee.gizmo.id, X[6] = ee.gizmo.short_url, X[7] = y) : y = X[7], X[8] !== y ? (G = (0, M.c)(y), X[8] = y, X[9] = G) : G = X[9], X[10] !== ea ? (z = (0, k.d)("", (0, k.f)(ea)), X[10] = ea, X[11] = z) : z = X[11];
            let eg = `${G}${z}`;
            X[12] !== en ? (B = en.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions",
                description: "Accessible label for the compact overflow menu containing actions for the current custom GPT in Codex Desktop"
            }), X[12] = en, X[13] = B) : B = X[13];
            let ef = B;
            X[14] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, a.jsx)(_.a, {
                className: "icon-sm"
            }), X[14] = L) : L = X[14], X[15] !== ef ? (F = (0, a.jsx)(m.a, {
                "aria-label": ef,
                color: "ghost",
                size: "icon",
                children: L
            }), X[15] = ef, X[16] = F) : F = X[16], X[17] !== ef || X[18] !== es || X[19] !== F ? (D = (0, a.jsx)(o.a, {
                content: ef,
                disabled: es,
                children: F
            }), X[17] = ef, X[18] = es, X[19] = F, X[20] = D) : D = X[20], X[21] !== ee.gizmo.gizmo_type || X[22] !== ee.gizmo.id || X[23] !== er || X[24] !== eg || X[25] !== et ? (H = "gpt" === ee.gizmo.gizmo_type ? (0, a.jsxs)(g.c.Item, {
                href: eg,
                onClick: e => {
                    e.defaultPrevented || ((0, I.a)(et, s.kc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: ee.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), eo(!1), (0, T.c)(et, null), (0, p.m)(et, "chat"), er(eg, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(g.c.ItemIcon, {
                    children: (0, a.jsx)(v.Gh, {})
                }), (0, a.jsx)(d.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat",
                    description: "Short GPT actions menu label that opens a new conversation with the same custom GPT, rather than switching to general ChatGPT"
                })]
            }) : null, X[21] = ee.gizmo.gizmo_type, X[22] = ee.gizmo.id, X[23] = er, X[24] = eg, X[25] = et, X[26] = H) : H = X[26], X[27] !== ee || X[28] !== et ? (W = () => (0, b.f)(et, O, {
                accountId: et.get(h.f),
                resource: ee
            }), X[27] = ee, X[28] = et, X[29] = W) : W = X[29], X[30] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, a.jsx)(g.c.ItemIcon, {
                children: (0, a.jsx)(v.ee, {})
            }), U = (0, a.jsx)(d.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About",
                description: "GPT menu action that opens its details over the current conversation or landing page"
            }), X[30] = q, X[31] = U) : (q = X[30], U = X[31]), X[32] !== W ? (K = (0, a.jsxs)(g.c.Item, {
                onSelect: W,
                children: [q, U]
            }), X[32] = W, X[33] = K) : K = X[33];
            let ev = ep ? w : C.a;
            return X[34] !== ee || X[35] !== en || X[36] !== ep || X[37] !== et ? (V = () => {
                (0, P.e)(et, ee, !ep).catch(() => {
                    et.get(x.f).danger(en.formatMessage({
                        id: "chatgptConversations.customGpt.pinFailed",
                        defaultMessage: "Couldn't update pinned GPT",
                        description: "Error toast shown when adding or removing a custom GPT from the user's pinned sidebar items fails in Codex Desktop"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.customGpt.pinFailed"
                        }
                    })
                })
            }, X[34] = ee, X[35] = en, X[36] = ep, X[37] = et, X[38] = V) : V = X[38], X[39] !== ep ? (Y = ep ? (0, a.jsx)(d.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT",
                description: "Compact overflow-menu action that removes the current custom GPT from the user's pinned sidebar items in Codex Desktop"
            }) : (0, a.jsx)(d.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT",
                description: "Compact overflow-menu action that adds the current custom GPT to the user's pinned sidebar items in Codex Desktop"
            }), X[39] = ep, X[40] = Y) : Y = X[40], X[41] !== ev || X[42] !== V || X[43] !== Y ? (Q = (0, a.jsx)(g.c.Item, {
                LeftIcon: ev,
                onSelect: V,
                children: Y
            }), X[41] = ev, X[42] = V, X[43] = Y, X[44] = Q) : Q = X[44], X[45] !== eu || X[46] !== em || X[47] !== ee.gizmo.current_user_permission?.can_view_config ? ($ = eu || ee.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(g.c.Item, {
                href: em,
                leftIconAsset: eu ? N.a : R.a,
                onClick: e => {
                    (0, f.e)({
                        event: e,
                        href: em,
                        initiator: "open_in_browser_bridge",
                        openTarget: eu ? "external-browser" : void 0
                    })
                },
                children: eu ? (0, a.jsx)(d.a, {
                    id: "chatgptConversations.customGpt.edit",
                    defaultMessage: "Edit GPT",
                    description: "Compact overflow-menu action that opens the current custom GPT in its ChatGPT web editor from Codex Desktop"
                }) : (0, a.jsx)(d.a, {
                    id: "chatgptConversations.customGpt.view",
                    defaultMessage: "View",
                    description: "Short action in the custom GPT overflow menu for users who can view its configuration but cannot edit it, including after migration to a plugin. Opens the read-only GPT configuration page in ChatGPT."
                })
            }) : null, X[45] = eu, X[46] = em, X[47] = ee.gizmo.current_user_permission?.can_view_config, X[48] = $) : $ = X[48], X[49] !== ee ? (Z = (0, a.jsx)(A.a, {
                resource: ee
            }), X[49] = ee, X[50] = Z) : Z = X[50], X[51] !== es || X[52] !== H || X[53] !== K || X[54] !== Q || X[55] !== $ || X[56] !== Z || X[57] !== D ? (J = (0, a.jsxs)(g.a, {
                align: "start",
                contentWidth: "menu",
                open: es,
                onOpenChange: eo,
                triggerButton: D,
                children: [H, K, Q, $, Z]
            }), X[51] = es, X[52] = H, X[53] = K, X[54] = Q, X[55] = $, X[56] = Z, X[57] = D, X[58] = J) : J = X[58], J
        }
    }),
    C6kc: (function(e, t, n) {
        var a = n("mBJV"),
            r = n("MVHH"),
            s = n("D99L"),
            o = n("fVOX"),
            i = n("yGJW"),
            l = n("g2p6");

        function c(e, t) {
            let {
                actionType: n,
                conversationId: a,
                experiment: s,
                messageId: o,
                source: l,
                feedback: c,
                selectedFeedback: u,
                surface: h = "sources"
            } = t, p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_UNSPECIFIED";
            "positive" === c ? p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE" : "negative" === c ? p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE" : Object.is(c, null) && (p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_CLEARED");
            let m = null == l ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_TURN_SOURCES_BUTTON" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_SOURCES_SIDEBAR_ACTION_MENU";
            "explainer" === h && (m = "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON"), (0, i.a)(e, r.V, {
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
            }), "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_OPENED" === n && d(e, "chatgpt_memory_citations_sidebar_open_clicked", s)
        }

        function d(e, t, n) {
            "memory_footnote_shown" === t && (0, i.a)(e, s.CodexChatgptInteractionMemoryFootnoteShown, {
                memoryCitationExperiment: n
            }), e.get(o.a).count("default", t, {
                entrypoint: "turn_sources_button",
                memory_citation_experiment: n,
                target: "search_sources_sidebar"
            })
        }

        function u(e, t) {
            "dismissed" === t && (0, i.a)(e, s.CodexChatgptInteractionMemoryIntroductionDismissed, {
                announcementKey: l.c
            }), "shown" === t && (0, i.a)(e, a.kd, {
                eventId: `${l.c}_tooltip_shown`,
                type: "UPSELL_OR_MODAL_TYPE_NUX_TOOLTIP"
            })
        }
        n.d(t, {
            a: () => r.W,
            b: () => c,
            c: () => u,
            d: () => d
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
        var h = n("MrGp"),
            p = n("UWHW");

        function m(e) {
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
                        if ((0, h.$b)(x, v, n), !n) return;
                        let a = t(h.j, v);
                        if (null == a || !0 !== t(d.q, a)) return;
                        let r = (0, u.b)(a);
                        (0, c.j)(x, r, x.get(d.x, r)), _(a)
                    });
                return () => {
                    e(), t(), (0, h.$b)(x, v, !1)
                }
            }, g = [v, b, _, x], f[5] = v, f[6] = b, f[7] = _, f[8] = x, f[9] = m, f[10] = g) : (m = f[9], g = f[10]), (0, s.useEffect)(m, g), null
        }
        n.d(t, {
            a: () => m
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
            C = n("MrGp"),
            _ = n("jfiJ"),
            w = n("FGJH"),
            I = n("Vcrm"),
            T = n("OCK3"),
            j = n("dhxJ"),
            S = n("i6Xw"),
            E = n("rKAs"),
            P = n("ASxG"),
            A = n("rn0J"),
            M = n("iXTs"),
            k = n("G6mJ"),
            R = n("VB5Q"),
            N = n("VTN2");
        let O = P.record(P.string(), P.union([P.string(), P.literal(!0)]));

        function G(e) {
            let t, n, P, G, B, L, F = (0, r.c)(28),
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
                Z = void 0 === K || K,
                J = void 0 === V || V,
                X = void 0 === Y ? "fallback" : Y,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            F[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), F[0] = t) : t = F[0], F[1] !== J || F[2] !== D || F[3] !== Z || F[4] !== W || F[5] !== $ || F[6] !== Q ? (n = [D, Z, J, W, Q, $], F[1] = J, F[2] = D, F[3] = Z, F[4] = W, F[5] = $, F[6] = Q, F[7] = n) : n = F[7], (0, c.useEffect)(t, n), F[8] !== J || F[9] !== D || F[10] !== $ || F[11] !== Q || F[12] !== ee || F[13] !== H ? (P = () => {
                let e = ee.get(C.j, D),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(C.x, D);
                if (!J || "tpp" === n || "flora" === n) return null;
                let a = ee.get(C.L, D),
                    r = $ && "conversation" === Q ? ee.get(I.a, D)?.promptMessageId : void 0,
                    s = function(e) {
                        for (let {
                                turn: t
                            }
                            of e.toReversed())
                            for (let e of t.items.toReversed()) {
                                if ("assistant-message" !== e.type) continue;
                                let t = null,
                                    n = 0;
                                if ((0, S.h)((0, M.a)(e.content, E.b), a => {
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
                        threadCurrentNode: r ?? ee.get(C.B, D),
                        conversationOrigin: n,
                        isStreaming: (0, C.zb)(ee.get(C._, D)),
                        mode: Q,
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
                    i = (0, j.a)(a?.[s.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(T.b, o) ?? i?.[String(s.codeBlockIndex)]?.content ?? s.content
                }
            }, F[8] = J, F[9] = D, F[10] = $, F[11] = Q, F[12] = ee, F[13] = H, F[14] = P) : P = F[14];
            let en = (0, y.a)(P);
            F[15] !== ee ? (G = (e, t) => {
                let n = e => {
                    (0, g.a)(ee, o.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: s.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
                    })
                };
                return (0, v.b)(e, void 0, () => {
                    "string" == typeof e ? n(e) : e.then(n, z)
                }).then(e => {
                    e && !t?.aborted && ee.get(m.f).success((0, a.jsx)(d.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard",
                        description: "Success toast after the user copies the last assistant code block using the keyboard shortcut or command menu in Chat mode"
                    }))
                })
            }, F[15] = ee, F[16] = G) : G = F[16];
            let ea = G;
            return F[17] !== D || F[18] !== en || F[19] !== W || F[20] !== $ || F[21] !== Q || F[22] !== ee || F[23] !== ea ? (B = () => {
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
                        (t(u.a) !== r || t(C.B, D) !== s || $ && "conversation" === Q && t(I.a, D)?.promptMessageId !== n || t(h.f).copyLastCodeBlock !== o) && a.abort()
                    });
                ea((async () => {
                    await (0, _.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, F[17] = D, F[18] = en, F[19] = W, F[20] = $, F[21] = Q, F[22] = ee, F[23] = ea, F[24] = B) : B = F[24], F[25] !== Z || F[26] !== X ? (L = {
                enabled: Z,
                priority: X
            }, F[25] = Z, F[26] = X, F[27] = L) : L = F[27], (0, p.a)("copyLastCodeBlock", B, L), null
        }

        function z() {}
    }),
    LEgg: (function(e, t, n) {
        n.d(t, {
            a: () => _
        });
        var a = n("ABep"),
            r = n("QosV");
        n("lUoP");
        var s = n("iTtm"),
            o = n("Wf1j"),
            i = n("bjsR"),
            l = n("TdH6"),
            c = n("QcW8");
        n("ZU27"), n("TpEm");
        var d = n("gbrq"),
            u = n("fBor"),
            h = n("ipGa"),
            p = n("M7HN"),
            m = n("zd8w"),
            g = n("tSEg"),
            f = n("YnF4"),
            v = n("MrGp");

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
                    if (null != r) return (0, f.a)(a, (0, p.Ne)(`chatgpt:${r}`))
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
            o = n("bjsR"),
            i = n("NVRI");

        function l(e) {
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
        }

        function c(e) {
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
        n.d(t, {
            a: () => l,
            b: () => c
        })
    }),
    WVag: (function(e, t, n) {
        var a = n("LwKP"),
            r = n("iTtm"),
            s = n("ASxG"),
            o = n("fDv2"),
            i = n("OWtl"),
            l = n("MrGp");
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
        n.d(t, {
            b: () => h
        }, {
            a: u
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

        function m(e) {
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
                children: (0, a.jsx)(c.pd, {})
            }), d = (0, a.jsx)(o.a, {
                id: "chatgptConversations.gpts.report.action",
                defaultMessage: "Report GPT",
                description: "Menu action to report a publicly shared third-party GPT"
            }), g[5] = n, g[6] = d) : (n = g[5], d = g[6]), g[7] !== t ? (m = (0, a.jsxs)(l.c.Item, {
                onSelect: t,
                children: [n, d]
            }), g[7] = t, g[8] = m) : m = g[8], m)
        }
        n.d(t, {
            a: () => m
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
            errorFallback: e => (0, a.jsx)(v, {
                ...e
            })
        });

        function g(e) {
            let t, n = (0, r.c)(3),
                {
                    gizmoId: s
                } = e,
                i = (0, o.x)(d.c, "2160578039");
            return n[0] !== i || n[1] !== s ? (t = i ? (0, a.jsx)(m, {
                gizmoId: s
            }, s) : null, n[0] = i, n[1] = s, n[2] = t) : t = n[2], t
        }

        function f(e) {
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

        function v(e) {
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
        n.d(t, {
            GptPluginMigrationBanner: () => g,
            GptPluginMigrationHomeBanner: () => f
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

        function p(e) {
            let t, n, p, m, g, f, v, y, b, x = (0, r.c)(34),
                {
                    gptName: C,
                    accessState: _,
                    onUsePlugin: w,
                    onKeepUsingGpt: I,
                    onRetry: T
                } = e,
                j = (0, s.a)(),
                S = (0, d.g)("2513446768");
            x[0] !== S || x[1] !== j ? (t = j.formatDate((0, u.a)(S.get("retirement_date", "")), {
                month: "long",
                day: "numeric",
                timeZone: "UTC"
            }), x[0] = S, x[1] = j, x[2] = t) : t = x[2];
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
            let P = "pending" === _,
                A = "error" === _ && null != T ? T : w;
            return x[21] !== n || x[22] !== P || x[23] !== A ? (f = (0, a.jsx)(l.a, {
                color: "primary",
                loading: P,
                size: "dialog",
                type: "button",
                onClick: A,
                children: n
            }), x[21] = n, x[22] = P, x[23] = A, x[24] = f) : f = x[24], x[25] !== I ? (v = null == I ? null : (0, a.jsx)(l.a, {
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
        n.d(t, {
            a: () => p
        })
    }),
    slBk: (function(e, t, n) {
        var a = n("rHrT");
        let r = Date.UTC(2026, 11, 11);

        function s(e) {
            if (!/^\d{4}-\d{2}-\d{2}$/.test(e)) return r;
            let t = Date.parse(`${e}T00:00:00.000Z`);
            return Number.isFinite(t) && new Date(t).toISOString().slice(0, 10) === e ? t : r
        }

        function o(e, t) {
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
        n.d(t, {
            a: () => s,
            b: () => o
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
                return n(i.c, "4035922817") ? n(u, e) : null
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
            r = n("XtQP"),
            s = n("MrGp"),
            o = n("ZniH");
        let i = (0, a.a)({
            conversationIds: (e, t) => [t],
            status: (e, t) => {
                let {
                    get: n
                } = e, a = n(s.v, t);
                return {
                    pending: (0, s.zb)(n(s._, t)),
                    completed: null == a || "completed" === a.result,
                    unread: n(s.I, t)
                }
            },
            preview: (e, t) => {
                let {
                    get: n
                } = e, a = n(s.L, t);
                return null == a ? null : (0, o.a)({
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
                (0, s.Ub)(e, t, !1), (0, r.b)(e, t).catch(() => {})
            }
        });
        n.d(t, {}, {
            a: i
        })
    }),
    M3Kf: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("zd8w"),
            i = n("v7qY"),
            l = n("OWtl"),
            c = n("yLzP"),
            d = n("lsfk"),
            u = n("MrGp"),
            h = n("jfiJ"),
            p = n("FGJH");

        function m(e) {
            let t, n, m, f, v, y = (0, r.c)(18),
                {
                    conversationId: b
                } = e,
                x = (0, s.y)(l.a),
                C = (0, s.x)(u.j, b),
                _ = (0, s.x)(p.c, C ?? b),
                w = (0, d.b)(),
                I = (0, o.useRef)(null);
            y[0] !== x || y[1] !== C ? (t = () => {
                null != C && (0, h.b)(x, C, i.flushSync)
            }, y[0] = x, y[1] = C, y[2] = t) : t = y[2];
            let T = t;
            y[3] !== b || y[4] !== T || y[5] !== x || y[6] !== C ? (n = () => {
                let e = x.get(p.c, C ?? b);
                e?.hasError || T()
            }, y[3] = b, y[4] = T, y[5] = x, y[6] = C, y[7] = n) : n = y[7];
            let j = (0, o.useEffectEvent)(n);
            y[8] !== w || y[9] !== j ? (m = () => {
                let e = I.current,
                    t = w.getScrollElement();
                if (null == e || null == t) return;
                let n = new IntersectionObserver(e => {
                    e.some(g) && j()
                }, {
                    root: t,
                    rootMargin: "80px 0px 0px 0px"
                });
                return n.observe(e), () => n.disconnect()
            }, y[8] = w, y[9] = j, y[10] = m) : m = y[10];
            let S = _?.cursor,
                E = _?.hasError;
            if (y[11] !== w || y[12] !== C || y[13] !== S || y[14] !== E ? (f = [w, C, S, E], y[11] = w, y[12] = C, y[13] = S, y[14] = E, y[15] = f) : f = y[15], (0, o.useEffect)(m, f), null == _ || _.complete || null == _.cursor) return null;
            let P = _.hasError ? T : null;
            return y[16] !== P ? (v = (0, a.jsx)(c.a, {
                ref: I,
                onRetry: P
            }), y[16] = P, y[17] = v) : v = y[17], v
        }

        function g(e) {
            return e.isIntersecting
        }
        n.d(t, {
            a: () => m
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
            x = n("W1Np"),
            C = n("QmkR"),
            _ = n("xEXG"),
            w = n("KMqT"),
            I = n("J6LI"),
            T = n("FgUr"),
            j = n("WLgA");
        let S = (0, s.u)(f.a, 0);

        function E(e) {
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
                let e = P({
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
        }

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
                navigate: f,
                onCreateProjectDialogCloseAutoFocus: _
            } = e, {
                isWorkConversation: E,
                sourceMemoryBlocked: P
            } = (0, I.c)(n, r), M = P ? v.a.projectOnlyMoveUnavailable : void 0, {
                data: k,
                isPending: R,
                isError: N
            } = s, {
                data: O,
                isPending: G,
                isError: z
            } = o, B = (0, T.a)(O, k, r?.gizmo.id), L = "allowed" === c, F = e => {
                let a = t.get(S) + 1,
                    r = t.get(p.d);
                t.set(S, a), (0, C.T)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(n => {
                    n && t.get(S) === a && t.get(p.d) === r && f((0, j.c)(e.gizmo.id))
                }).catch(() => {
                    t.get(u.f).danger(t.get(h.a).formatMessage(A.moveFailed), {
                        errorAnalytics: {
                            toastId: "move_conversation_to_snorlax_error"
                        }
                    })
                })
            }, D = [];
            for (let e of (L && (D.push({
                    id: "new-chatgpt-project",
                    icon: d.sg,
                    message: A.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        t.set(S, e => e + 1), (0, x.a)(t, F, {
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
                        fallbackIcon: (0, a.jsx)(d.td, {}),
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
            return l && (N || z) ? D.push({
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
            }) : N || z || R || G || 0 !== B.length || L || D.push({
                id: "no-project-destinations",
                message: A.noDestinations,
                enabled: !1
            }), [...i && D.length > 0 ? [{
                id: "move-to-project",
                icon: d.td,
                message: A.moveToProject,
                enabled: !P,
                tooltipMessage: M,
                submenu: D
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                icon: d.Bd,
                message: A.removeFromProject,
                enabled: !P,
                tooltipMessage: M,
                onSelect: () => {
                    t.set(S, e => e + 1), (0, C.T)({
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
        n.d(t, {
            a: () => E,
            b: () => P
        })
    }),
    MDmT: (function(e, t, n) {
        var a = n("iTtm"),
            r = n("Qgfj"),
            s = n("OWtl"),
            o = n("MrGp"),
            i = n("b6fw");
        let l = (0, a.d)(s.a, (e, t) => {
            let {
                get: n
            } = t, a = n(i.g, e);
            if (null == a) return null;
            let r = n(o.L, e);
            return null == r ? null : function(e) {
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
            }({
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
        }
        let d = (0, r.f)({
            readOnlyPlaceholder: {
                id: "sectionedConversation.readOnlyPlaceholder",
                defaultMessage: "This section is read-only",
                description: "Placeholder in the disabled message composer while reviewing an earlier section of a guided conversation. Users can return to the current section to send messages."
            }
        });
        n.d(t, {
            a: () => c
        }, {
            b: l,
            c: d
        })
    }),
    JUxu: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("bjsR"),
            c = n("EOo5"),
            d = n("ygO2"),
            u = n("X6Vn"),
            h = n("OWtl"),
            p = n("gsAl");
        let m = (0, o.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function g(e) {
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
                                onClick: () => y(c, o),
                                children: e
                            }, "report")
                        }
                    })
                })
            }), n[0] = o, n[1] = c, n[2] = t) : t = n[2], t
        }

        function f(e) {
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
                }), (0, a.jsx)(v, {
                    imageOnly: o
                })]
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function v(e) {
            let t, n, o, l = (0, r.c)(9),
                {
                    imageOnly: u
                } = e,
                m = (0, s.y)(h.a),
                g = (0, s.x)(p.e, (0, c.a)());
            return null == g ? null : (l[0] !== u || l[1] !== m || l[2] !== g.id ? (t = () => y(m, g.id, u), l[0] = u, l[1] = m, l[2] = g.id, l[3] = t) : t = l[3], l[4] !== u ? (n = u ? (0, a.jsx)(i.a, {
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

        function y(e, t) {
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
        n.d(t, {
            a: () => f,
            b: () => g
        })
    }),
    JKdL: (function(e, t, n) {
        n.d(t, {
            a: () => u
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("bjsR"),
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
            i = n("M7HN"),
            l = n("zd8w"),
            c = n("Gdjn"),
            d = n("xqnZ"),
            u = n("OWtl"),
            h = n("ADAj"),
            p = n("Ow2S"),
            m = n("fDfx"),
            g = n("MrGp");

        function f(e) {
            let t, n, r, f, v, y, b = (0, a.c)(19);
            b[0] !== e ? (t = void 0 === e ? {} : e, b[0] = e, b[1] = t) : t = b[1];
            let {
                composerController: x,
                conversationId: C,
                draftKey: _,
                initialPrompt: w,
                initialPromptKind: I
            } = t, T = void 0 === _ ? C : _, j = (0, o.y)(u.a);
            b[2] !== C || b[3] !== T || b[4] !== w || b[5] !== I || b[6] !== j ? (n = () => s()(() => {
                let e = null == C ? null : j.get(g.x, C),
                    t = (0, d.e)(w ?? (null == T ? "" : j.get(p.s, T)), {
                        addInitialContentToHistory: null == w && null != T,
                        defaultTextKind: I ?? (null == w && null != T || (0, c.b)(w ?? "").length > 0 ? "prompt" : "plain"),
                        enableFileMentions: !0,
                        enableRichText: !0,
                        enableSkillMentions: !1,
                        enableSlashCommands: {
                            triggers: ["/"]
                        },
                        plainTextMode: (0, h.b)(j.get, i.qf.composerPlainTextMode),
                        suggestionOptions: {
                            enableInlineSystemHints: "tpp" !== e && "flora" !== e,
                            variant: "tpp" !== e && "flora" !== e ? "chatgpt" : void 0
                        }
                    });
                return null == w && null != C && "string" == typeof T && null != (0, m.j)(j, T) && "tpp" !== e && "flora" !== e && (0, p.O)(j, C, t.getChatGptPrompt().systemHints), t
            }), b[2] = C, b[3] = T, b[4] = w, b[5] = I, b[6] = j, b[7] = n) : n = b[7];
            let [S] = (0, l.useState)(n);
            b[8] !== S || b[9] !== x ? (r = x ?? S(), b[8] = S, b[9] = x, b[10] = r) : r = b[10];
            let E = r,
                P = (0, l.useRef)(null);
            b[11] !== E || b[12] !== T || b[13] !== j ? (f = () => {
                if (null == T) return;
                let e = j.get(p.s, T);
                return null != P.current && P.current !== e && E.restoreDraft(e), () => {
                    P.current = j.get(p.s, T)
                }
            }, v = [E, T, j], b[11] = E, b[12] = T, b[13] = j, b[14] = f, b[15] = v) : (f = b[14], v = b[15]), (0, l.useLayoutEffect)(f, v), b[16] !== E || b[17] !== x ? (y = () => {
                null != x || E.view.isDestroyed || E.destroy()
            }, b[16] = E, b[17] = x, b[18] = y) : y = b[18];
            let A = y;
            return (0, d.f)(A, E), E
        }
        n.d(t, {
            a: () => f
        })
    }),
    FNgK: (function(e, t, n) {
        var a = n("ZU27");

        function r(e, t, n) {
            let r = e.get(a.j.tabById$, `ecosystem-focused:${t}`);
            s(r) && (0, a.f)(e, r.tabType, {
                id: `ecosystem-focused:${n}`,
                replaceTabId: r.tabId,
                title: r.title,
                revealAndFocus: !1,
                props: {
                    ...r.props,
                    pendingSourceId: n
                }
            })
        }

        function s(e) {
            return e?.tabType.kind === "ecosystem-focused-object"
        }
        n.d(t, {
            a: () => s,
            b: () => r
        })
    }),
    WQca: (function(e, t, n) {
        var a = n("QosV"),
            r = n("iTtm"),
            s = n("zd8w"),
            o = n("jqIZ"),
            i = n("SGsN"),
            l = n("OWtl");

        function c(e) {
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
        n.d(t, {
            a: () => c
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
                r = Math.min(n, a instanceof HTMLElement ? Math.max(0, i(e, a, t)) : 0);
            return {
                maximum: n,
                minimum: r
            }
        }

        function o(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr",
                {
                    maximum: a,
                    minimum: o
                } = s(e, n),
                c = "rtl" === n ? -t : t,
                d = r()(e.scrollLeft + c * (e.clientWidth - l(e, n)), o, a),
                u = e.children;
            for (let s = 1 === t ? 0 : u.length - 1; s >= 0 && s < u.length; s += t) {
                let t = u.item(s);
                if (!(t instanceof HTMLElement)) continue;
                let l = r()(i(e, t, n), o, a);
                if (1 === c && l >= d - 1 || -1 === c && l <= d + 1) return l
            }
            return 1 === c ? a : o
        }

        function i(e, t, n) {
            return "rtl" === n ? t.offsetLeft - e.offsetLeft + t.offsetWidth - e.clientWidth + l(e, n) : t.offsetLeft - e.offsetLeft - l(e, n)
        }

        function l(e, t) {
            let n = Number.parseFloat("rtl" === t ? getComputedStyle(e).scrollPaddingRight : getComputedStyle(e).scrollPaddingLeft);
            return Number.isNaN(n) ? 0 : n
        }
        n.d(t, {
            a: () => s,
            b: () => o
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

        function C(e) {
            let t, n, C, _, w, I, T, j, S, E = (0, r.c)(36),
                {
                    conversationId: P,
                    kind: A
                } = e,
                M = (0, o.y)(m.a),
                k = (0, i.a)(),
                R = (0, c.W)(),
                N = (0, c.Y)();
            E[0] !== R.hash || E[1] !== R.pathname || E[2] !== R.search || E[3] !== N || E[4] !== M ? (t = () => {
                (0, y.e)(M), N({
                    pathname: R.pathname,
                    search: R.search,
                    hash: R.hash
                }, {
                    replace: !0,
                    state: null
                })
            }, E[0] = R.hash, E[1] = R.pathname, E[2] = R.search, E[3] = N, E[4] = M, E[5] = t) : t = E[5];
            let O = t,
                G = (0, o.z)(y.g);
            E[6] !== P || E[7] !== G ? (n = G?.find(e => (0, b.a)(e.task) === `hosted:${P}`), E[6] = P, E[7] = G, E[8] = n) : n = E[8];
            let z = n;
            E[9] !== P || E[10] !== M ? (C = () => {
                let e = M.get(y.h);
                return null != e && (0, b.a)(e) === `hosted:${P}` ? (0, y.d)(M, e) : void 0
            }, E[9] = P, E[10] = M, E[11] = C) : C = E[11], E[12] !== P || E[13] !== A || E[14] !== M ? (_ = async () => {
                if ("cloud" === A) {
                    await f.a.safePost("/wham/tasks/{task_id}/recover", {
                        parameters: {
                            path: {
                                task_id: P
                            }
                        }
                    }), (0, p.c)(M, P, !1);
                    return
                }
                await (0, d.W)({
                    scope: M,
                    conversationId: P
                })
            }, E[12] = P, E[13] = A, E[14] = M, E[15] = _) : _ = E[15], E[16] !== P || E[17] !== O || E[18] !== A || E[19] !== M ? (w = (e, t, n) => {
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
                            r.close(), O()
                        }
                    },
                    id: `unarchive-thread-${A}:${P}`
                })
            }, E[16] = P, E[17] = O, E[18] = A, E[19] = M, E[20] = w) : w = E[20], E[21] !== k || E[22] !== M ? (I = (e, t, n) => {
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
                isPending: L,
                isSuccess: F
            } = (0, s.a)(T), D = F || z?.status === "restored", H = L || z?.status === "restoring";
            return E[29] !== B ? (j = () => B(), E[29] = B, E[30] = j) : j = E[30], E[31] !== O || E[32] !== j || E[33] !== D || E[34] !== H ? (S = (0, a.jsx)(v.a, {
                restored: D,
                restoring: H,
                onUnarchive: j,
                onDone: O
            }), E[31] = O, E[32] = j, E[33] = D, E[34] = H, E[35] = S) : S = E[35], S
        }
        n.d(t, {
            a: () => C
        })
    }),
    ylLY: (function(e, t, n) {
        let a = (0, n("zd8w").createContext)(null);
        n.d(t, {}, {
            a: a
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