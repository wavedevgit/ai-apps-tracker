export const __rspack_esm_id = 20094;
export const __rspack_esm_ids = [20094];
export const __webpack_modules__ = {
    bn59: (function(e, t, n) {
        n.d(t, {
            a: () => z,
            ChatSeatAccessScreen: () => G
        });
        var a = n("ABep"),
            s = n("QosV"),
            r = n("iTtm"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("jqIZ"),
            c = n("hzGf"),
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
            I = n("udGC"),
            w = n("aTcy"),
            T = n("JNtf"),
            j = n("mUDD"),
            S = n("Ot7V"),
            E = n("SGsN"),
            P = n("DAA7"),
            A = n("yGJW"),
            M = n("GDNt");

        function k(e) {
            let t, n, l, c, d, u, p, v, y, M, k, O, G, B, z, L, F, D, H, W, U, q, K = (0, s.c)(70),
                {
                    account: V,
                    accountId: Y,
                    userId: Z,
                    onClose: $,
                    onSwitchToWork: Q
                } = e,
                J = (0, r.y)(m.a),
                X = (0, f.a)(),
                {
                    email: ee
                } = (0, C.a)(),
                [et, en] = (0, o.useState)(),
                ea = (0, o.useRef)(!0);
            K[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => (ea.current = !0, () => {
                ea.current = !1
            }), n = [], K[0] = t, K[1] = n) : (t = K[0], n = K[1]), (0, o.useEffect)(t, n);
            let es = "account-owner" === V.account.account_user_role,
                er = "account-admin" === V.account.account_user_role,
                eo = !0 === V.entitlement.has_active_subscription,
                ei = (es || er) && eo,
                el = es || ei;
            K[2] !== ei || K[3] !== es ? (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE", ei ? l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY" : es && (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE"), K[2] = ei, K[3] = es, K[4] = l) : l = K[4], K[5] !== V.account.account_user_role || K[6] !== l || K[7] !== eo || K[8] !== J ? (c = (e, t) => {
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
                    href: new URL("/codex/cloud", w.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, K[10] = $, K[11] = d) : d = K[11];
            let ed = d;
            K[12] !== V.account.subscription_seat_pools_enabled || K[13] !== Y || K[14] !== ed || K[15] !== ei || K[16] !== ee || K[17] !== X || K[18] !== es || K[19] !== ec || K[20] !== $ || K[21] !== Q || K[22] !== et || K[23] !== J || K[24] !== Z ? (u = async () => {
                if ("requesting" !== et) {
                    if (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), es && !ei) {
                        let e = new URL("/admin/members", w.h);
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
                                            user_id: Z
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
                                            user_id: Z
                                        }
                                    },
                                    additionalHeaders: {
                                        "X-OpenAI-Account-User-Update-Source": "web_usage_based_workspace_access_modal"
                                    },
                                    requestBody: {
                                        seat_type: "default"
                                    }
                                }), !ea.current) return;
                            (0, I.e)(J), await (0, b.g)("accounts-check"), await Promise.all([J.query.invalidate(x.b, Y), J.queryClient.invalidateQueries({
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
                            Q ? ($(), Q()) : ed(), J.get(E.f).success(X.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted",
                                description: "Success toast shown after requesting ChatGPT access from the modal"
                            }))
                        }
                    } catch (e) {
                        ea.current && en(N(e) ?? "error")
                    }
                }
            }, K[12] = V.account.subscription_seat_pools_enabled, K[13] = Y, K[14] = ed, K[15] = ei, K[16] = ee, K[17] = X, K[18] = es, K[19] = ec, K[20] = $, K[21] = Q, K[22] = et, K[23] = J, K[24] = Z, K[25] = u) : u = K[25];
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
            } else if (er) {
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
            }), K[38] = el, K[39] = G) : G = K[39], K[40] !== em || K[41] !== eg || K[42] !== G ? (B = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: em,
                disabled: eg,
                children: G
            }), K[40] = em, K[41] = eg, K[42] = G, K[43] = B) : B = K[43], K[44] !== ed || K[45] !== ec || K[46] !== $ || K[47] !== Q ? (z = () => {
                Q ? ($(), Q()) : (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), ed())
            }, K[44] = ed, K[45] = ec, K[46] = $, K[47] = Q, K[48] = z) : z = K[48], K[49] !== Q ? (L = Q ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work",
                description: "Switches from the Chat access explanation to the available Work surface"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex",
                description: "Returns to Codex from the Chat access explanation"
            }), K[49] = Q, K[50] = L) : L = K[50], K[51] !== z || K[52] !== L ? (F = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: z,
                children: L
            }), K[51] = z, K[52] = L, K[53] = F) : F = K[53], K[54] !== B || K[55] !== F ? (D = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [B, F]
            }), K[54] = B, K[55] = F, K[56] = D) : D = K[56], K[57] !== X || K[58] !== et ? (H = null != et && "requesting" !== et ? (0, a.jsx)("p", {
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
            }), K[60] = O, K[61] = D, K[62] = H, K[63] = W) : W = K[63], K[64] !== W || K[65] !== M ? (U = (0, a.jsx)(j.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: M,
                children: W
            }), K[64] = W, K[65] = M, K[66] = U) : U = K[66], K[67] !== U || K[68] !== y ? (q = (0, a.jsx)(T.b, {
                open: !0,
                size: "wide",
                variant: "chatgpt",
                onOpenChange: y,
                children: U
            }), K[67] = U, K[68] = y, K[69] = q) : q = K[69], q
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
            let t, n, o = (0, s.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, r.y)(m.a),
                p = (0, r.z)(O.a),
                g = (0, r.z)(d.t),
                f = (0, l.Z)();
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
            let t, n, l, c, d, u = (0, s.c)(13),
                {
                    modeToggle: m,
                    onSwitchToWork: g
                } = e,
                f = (0, r.z)(O.a),
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

        function z(e) {
            let t, n, o = (0, s.c)(4),
                {
                    children: i,
                    enabled: l
                } = e;
            o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "chatgpt.seat-access"
            }, o[0] = t) : t = o[0];
            let d = (0, r.x)(c.a, t);
            return l ? d.isLoading ? null : (o[1] !== d.isCapable || o[2] !== i ? (n = d.isCapable ? (0, a.jsx)(G, {}) : i, o[1] = d.isCapable, o[2] = i, o[3] = n) : n = o[3], n) : i
        }
    }),
    Pyg2: (function(e, t, n) {
        var a = n("ABep"),
            s = n("QosV"),
            r = n("iTtm"),
            o = n("rjva"),
            i = n("ZIh4");

        function l(e) {
            let t, n, l, c, d = (0, s.c)(10);
            d[0] !== e ? ({
                composerOnly: n,
                placement: l,
                ...t
            } = e, d[0] = e, d[1] = t, d[2] = n, d[3] = l) : (t = d[1], n = d[2], l = d[3]);
            let u = void 0 === n || n,
                h = void 0 === l ? "floating" : l,
                p = (0, r.z)(i.a),
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
            s = n("QosV"),
            r = n("zd8w"),
            o = n("kjQz"),
            i = n("dJBt");

        function l(e) {
            let t, n, l, c, d, u, h = (0, s.c)(11),
                {
                    name: p,
                    ready: m,
                    failed: g
                } = e,
                f = void 0 !== g && g,
                v = (0, r.useRef)(!1),
                y = (0, r.useRef)(null);
            h[0] !== p ? (t = () => ({
                name: p,
                key: crypto.randomUUID(),
                startedAtMs: performance.timeOrigin + performance.now()
            }), h[0] = p, h[1] = t) : t = h[1];
            let [b] = (0, r.useState)(t);
            return h[2] !== b ? (n = () => (v.current = !0, y.current = y.current ?? o.a.start(b.name, {}, b), y.current.mark("route_entered"), () => {
                v.current = !1, queueMicrotask(() => {
                    v.current || y.current?.abort("navigation_away")
                })
            }), l = [b], h[2] = b, h[3] = n, h[4] = l) : (n = h[3], l = h[4]), (0, r.useEffect)(n, l), h[5] !== f || h[6] !== m ? (c = () => {
                !m && f && y.current?.fail("load_failed")
            }, d = [m, f], h[5] = f, h[6] = m, h[7] = c, h[8] = d) : (c = h[7], d = h[8]), (0, r.useEffect)(c, d), h[9] !== m ? (u = m ? (0, a.jsx)(i.a, {
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
    lZ4W: (function(e, t, n) {
        var a = n("iTtm"),
            s = n("OWtl"),
            r = n("MrGp"),
            o = n("PsNT"),
            i = n("JtOe");
        let l = (0, a.d)(s.a, (e, t) => {
            let {
                get: n
            } = t, a = n(r.s, e)?.at(-1);
            if (null == a) return null;
            let s = {
                conversationId: e,
                userMessageId: a
            };
            if (n(i.f, s)) return null;
            let l = n(i.g, s);
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
            s = n.n(a),
            r = n("iTtm"),
            o = n("Ro2M"),
            i = n("OWtl"),
            l = n("OMIV"),
            c = n("MrGp"),
            d = n("QkVh");
        let u = (0, r.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (!n(l.c, "3901104270")) return [];
                let a = n(c.p, e),
                    s = a?.filter(e => {
                        let {
                            source: t
                        } = e;
                        return "list" !== t
                    }) ?? [];
                return 0 === s.length ? [] : (n(o.f, n(o.a)), s.flatMap(e => {
                    let {
                        automationId: t,
                        messageId: a
                    } = e, s = n(o.c, t).data?.automation;
                    if (null == s) return [];
                    let r = /^file-inline-(libfile[_-][^~]+)(?:~.*)?$/.exec(s.plan_file_id ?? "")?.[1];
                    return null == r ? [] : [{
                        automationId: t,
                        planType: s.plan_type ?? null,
                        messageId: a,
                        libraryFileId: r,
                        query: n(d.a, r)
                    }]
                }))
            }, {
                isEqual: s()
            }),
            h = (0, r.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = new Map;
                for (let {
                        automationId: t,
                        planType: s,
                        messageId: r,
                        libraryFileId: o,
                        query: i
                    }
                    of n(u, e)) {
                    if (a.has(o)) continue;
                    let e = i.data;
                    e?.mime_type === "text/markdown" && "owned" === e.access_kind && a.set(o, {
                        automationId: t,
                        planType: s,
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
                isEqual: s()
            });

        function p(e, t) {
            return null != e && t.includes(e.replace(/^file-inline-/, "").split("~")[0])
        }
        let m = (0, r.d)(i.a, (e, t) => {
            let {
                get: n
            } = t, a = n(h, e).filter(e => "language_learning" !== e.planType), s = n(c.p, e), r = s?.filter(e => "list" !== e.source && a.some(t => t.automationId === e.automationId)), o = r?.at(-1)?.messageId;
            if (null == o) return null;
            let i = new Set(r?.filter(e => e.messageId === o).map(e => e.automationId));
            return 1 === i.size ? a.find(e => i.has(e.automationId)) ?? null : null
        }, {
            isEqual: s()
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
            s = n("Ro2M"),
            r = n("OWtl"),
            o = n("OMIV"),
            i = n("MrGp");
        let l = (0, a.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(i.p, e), s = a?.at(-1)?.messageId;
                if (null == s) return null;
                let r = new Set(a?.filter(e => {
                    let {
                        messageId: t
                    } = e;
                    return t === s
                }).map(e => {
                    let {
                        automationId: t
                    } = e;
                    return t
                }));
                return 1 === r.size ? [...r][0] ?? null : null
            }),
            c = (0, a.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (!n(o.c, "2840857813")) return null;
                let a = n(l, e);
                return null != a && n(s.c, a).data?.automation.plan_type === "language_learning" ? a : null
            }),
            d = (0, a.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(c, e);
                return null == a ? null : n(s.c, a).data?.automation.title.trim() || null
            });
        n.d(t, {}, {
            a: l,
            b: c,
            c: d
        })
    }),
    ckwE: (function(e, t, n) {
        var a = n("ABep"),
            s = n("QosV"),
            r = n("zd8w"),
            o = n("VnEZ");

        function i(e) {
            let t, n = (0, s.c)(3),
                {
                    children: i
                } = e,
                [c] = (0, r.useState)(l);
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
            s = n("QosV"),
            r = n("iTtm"),
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
            y = n("xKaq"),
            b = n("RU3e"),
            x = n("UIU6"),
            C = n("Bbed"),
            _ = n("T1PX");
        let I = (0, C.a)(async () => {
            let [{
                SvgLottie: e
            }, {
                strFromU8: t,
                unzipSync: s
            }, {
                z: r
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
                l = s(new Uint8Array(o), {
                    filter: e => {
                        let {
                            name: t
                        } = e;
                        return t === i
                    }
                })[i];
            if (null == l) throw Error("Business Agent disclosure animation is missing");
            let d = r.looseObject({
                layers: r.array(r.looseObject({
                    nm: r.string().optional(),
                    refId: r.string().optional(),
                    masksProperties: r.array(r.looseObject({
                        nm: r.string().optional()
                    })).optional()
                }))
            }).parse(JSON.parse(t(l)));
            return function(t) {
                let {
                    onError: n
                } = t, [s, r] = (0, c.useState)(!1), [o] = (0, c.useState)(() => {
                    let e = structuredClone(d);
                    for (let t of e.layers) "🖼️ Image (replace img. layer)" === t.nm && "art_0" === t.refId && (t.masksProperties = t.masksProperties?.filter(e => "Sheet top corners" !== e.nm));
                    return e
                });
                return (0, a.jsx)("div", {
                    className: s ? "size-full" : "invisible size-full",
                    children: (0, a.jsx)(e, {
                        className: "size-full",
                        animationData: o,
                        autoplay: !0,
                        loop: !0,
                        onDataFailed: n,
                        onDOMLoaded: () => r(!0)
                    })
                })
            }
        }, {
            errorFallback: (0, a.jsx)(j, {})
        });

        function w(e) {
            let t, n = (0, s.c)(2),
                r = (0, _.a)();
            return n[0] !== r ? (t = (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden",
                children: r ? (0, a.jsx)(j, {}) : (0, a.jsx)(T, {})
            }), n[0] = r, n[1] = t) : t = n[1], t
        }

        function T(e) {
            let t, n, o, i = (0, s.c)(7),
                l = (0, c.useRef)(null),
                d = (0, y.a)(l),
                u = (0, r.z)(b.a),
                [h, p] = (0, c.useState)(!1);
            if (h) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(j, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(j, {}), i[1] = t) : t = i[1], i[2] !== d || i[3] !== u ? (n = d && !0 === u ? (0, a.jsx)(I, {
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
            let t, n = (0, s.c)(1);
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
            let t, n, r, o, i, l = (0, s.c)(11),
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
            }), l[3] = h.businessName, l[4] = n) : n = l[4], l[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, a.jsx)("span", {
                className: "truncate text-xs font-normal text-secondary",
                children: (0, a.jsx)(d.a, {
                    id: "chatgpt.ads.business_agent.thread_header.subtitle",
                    defaultMessage: "Business chat",
                    description: "Short subtitle beneath the business name in the header of a Business Agent conversation. It tells an end user that the custom GPT chat represents a business. Keep this compact enough to fit on one line; there are no placeholders or formatting."
                })
            }), l[5] = r) : r = l[5], l[6] !== n ? (o = (0, a.jsxs)("div", {
                className: "flex min-w-0 flex-col text-start",
                children: [n, r]
            }), l[6] = n, l[7] = o) : o = l[7], l[8] !== t || l[9] !== o ? (i = (0, a.jsxs)("div", {
                className: "flex min-w-0 items-center gap-2 select-none",
                children: [t, o]
            }), l[8] = t, l[9] = o, l[10] = i) : i = l[10], i
        }

        function A(e) {
            let t, n = (0, s.c)(14),
                {
                    state: r,
                    onStarterPromptSelect: o
                } = e,
                i = "ready" === r.status ? r.context : r;
            if (n[0] !== i.businessName || n[1] !== i.logoUrl || n[2] !== i.showConversationStarters || n[3] !== o || n[4] !== r.context || n[5] !== r.status) {
                let e, s, l, c = "ready" === r.status && i.showConversationStarters ? r.context.conversationStarters?.slice(0, 4) : void 0,
                    m = i.businessName ?? null,
                    g = i.logoUrl ?? null;
                n[7] !== m || n[8] !== g ? (e = (0, a.jsx)(u.a, {
                    alt: "",
                    name: m,
                    size: "lg",
                    src: g
                }), n[7] = m, n[8] = g, n[9] = e) : e = n[9], n[10] !== i.businessName ? (s = (0, a.jsx)("h1", {
                    className: "heading-xl font-normal text-default select-none",
                    children: (0, a.jsx)(k, {
                        businessName: i.businessName
                    })
                }), n[10] = i.businessName, n[11] = s) : s = n[11], n[12] !== r.status ? (l = "ready" !== r.status ? (0, a.jsx)(h.a, {
                    ariaLive: "polite",
                    role: "failed" === r.status ? "alert" : "status",
                    type: "failed" === r.status ? "error" : "normal",
                    content: "failed" === r.status ? (0, a.jsx)(d.a, {
                        id: "chatgptConversations.businessAgent.unavailable",
                        defaultMessage: "This Business Agent is unavailable. Please return to the ad and try again",
                        description: "Error on a Business Agent chat destination when creating its interaction fails; sending is unavailable and the user can retry from the original ad"
                    }) : (0, a.jsx)(d.a, {
                        id: "chatgptConversations.businessAgent.loading",
                        defaultMessage: "Opening Business Agent…",
                        description: "Loading status on a Business Agent chat destination while its interaction is being created"
                    })
                }) : null, n[12] = r.status, n[13] = l) : l = n[13], t = (0, a.jsxs)("div", {
                    className: "mx-auto flex w-[min(100%,var(--thread-content-max-width))] min-w-0 flex-col items-center gap-3 px-panel text-center",
                    children: [e, s, l, null != c && (c.length > 1 || 1 === c.length && "ready" === r.status && !0 === r.context.disablePrefill) ? (0, a.jsx)("div", {
                        className: "mt-3 flex flex-wrap justify-center gap-2 select-none",
                        children: c.map(e => (0, a.jsx)(p.a, {
                            color: "secondary",
                            size: "medium",
                            disabled: null == o,
                            onClick: () => o?.(e),
                            children: e
                        }, e))
                    }) : null]
                }), n[0] = i.businessName, n[1] = i.logoUrl, n[2] = i.showConversationStarters, n[3] = o, n[4] = r.context, n[5] = r.status, n[6] = t
            } else t = n[6];
            return t
        }

        function M(e) {
            let t, n, r, o, i, l, u, h, y, b, x, C, _, I, T, j, P, A = (0, s.c)(29),
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
            let B = t;
            return A[2] !== N ? (n = e => {
                G(e), e || N?.()
            }, A[2] = N, A[3] = n) : n = A[3], A[4] !== k ? (r = {
                "data-theme": "light",
                onOpenAutoFocus: k
            }, A[4] = k, A[5] = r) : r = A[5], A[6] !== R ? (o = e => {
                e.preventDefault(), G(!1), R?.()
            }, A[6] = R, A[7] = o) : o = A[7], A[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(w, {}), A[8] = i) : i = A[8], A[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(m.e, {
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
            }), A[15] = C) : C = A[15], A[16] !== B ? (_ = null == B ? null : (0, a.jsx)(f.a, {
                href: B,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy",
                    description: "Link to the business-provided privacy policy in the introductory Business Agent dialog. Opens separately without accepting or dismissing the dialog. Keep the label short."
                })
            }), A[16] = B, A[17] = _) : _ = A[17], A[18] === Symbol.for("react.memo_cache_sentinel") ? (I = (0, a.jsx)("div", {
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
            }), A[18] = I) : I = A[18], A[19] !== _ ? (T = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [C, _, I]
                })]
            }), A[19] = _, A[20] = T) : T = A[20], A[21] !== T || A[22] !== o ? (j = (0, a.jsx)(g.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: o,
                children: T
            }), A[21] = T, A[22] = o, A[23] = j) : j = A[23], A[24] !== O || A[25] !== j || A[26] !== n || A[27] !== r ? (P = (0, a.jsx)(m.b, {
                open: O,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: r,
                children: j
            }), A[24] = O, A[25] = j, A[26] = n, A[27] = r, A[28] = P) : P = A[28], P
        }

        function k(e) {
            let t, n = (0, s.c)(2),
                {
                    businessName: r
                } = e;
            return n[0] !== r ? (t = r?.trim() ? (0, a.jsx)(a.Fragment, {
                children: r
            }) : (0, a.jsx)(d.a, {
                id: "chatgpt.ads.business_agent.disclosure.fallback_name",
                defaultMessage: "Business Agent",
                description: "Fallback heading in the compact data-sharing disclosure shown at the top of every organic or sponsored Business Agent conversation. Use a short neutral title that fits on one line. This appears when the business has not supplied a display name."
            }), n[0] = r, n[1] = t) : t = n[1], t
        }

        function R(e) {
            let t, n = (0, s.c)(3),
                {
                    conversationId: o,
                    fallback: l
                } = e,
                c = (0, r.x)(i.t, o);
            return n[0] !== l || n[1] !== c ? (t = null == c ? l : (0, a.jsx)(P, {
                state: c
            }), n[0] = l, n[1] = c, n[2] = t) : t = n[2], t
        }

        function N(e) {
            let t, n, o, l = (0, s.c)(11),
                {
                    conversationId: c,
                    fallback: d,
                    onStarterPromptSelect: u
                } = e,
                h = (0, r.x)(i.t, c);
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
            let t, n, i, c = (0, s.c)(11),
                {
                    context: d,
                    conversationId: u
                } = e,
                h = (0, r.y)(o.a),
                p = (0, r.z)(l.b),
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
            s = n("M7HN"),
            r = n("Cslg"),
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
            e.when(s => {
                let {
                    get: i
                } = s, l = i(d), u = i(o.c);
                if (null == n && u?.state?.initialChatGptConversationId === t.conversationId && (n = u.key), l?.conversationId !== t.conversationId) return !0;
                let h = i(r.j) !== t.userId || i(r.e) !== t.accountId || i(c.n) !== t.accountId || u?.key !== a && u?.key !== n || null != n && u?.key !== n;
                return h && e.set(d, null), h
            })
        }

        function p(e, t, n, a) {
            let s = e.get(d);
            if (s?.conversationId !== t) return;
            let r = {
                    ...s,
                    disclosure: n?.version === 1 ? n : void 0,
                    ready: !0
                },
                o = Math.max(e.get(u, r.userId), n?.global_impression_count ?? 0);
            e.set(u, r.userId, o), e.set(d, o < a ? r : null)
        }

        function m(e, t) {
            e.get(d)?.conversationId === t && e.set(d, null)
        }

        function g(e, t) {
            let n = e.get(d);
            n?.conversationId !== t || !n.ready || n.presented || e.get(r.j) !== n.userId || e.get(r.e) !== n.accountId || e.get(c.n) !== n.accountId || (e.set(d, {
                ...n,
                presented: !0
            }), e.set(u, n.userId, e => e + 1), null != n.disclosure && l.Request.safePost("/gizmos/business-agents/disclosures/viewed", {
                expectedIdentity: {
                    accountId: n.accountId,
                    userId: n.userId
                },
                additionalHeaders: {
                    "ChatGPT-Account-ID": n.accountId,
                    [s.Zb]: n.accountId
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
            s = n("QosV"),
            r = n("iTtm"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("WQca"),
            c = n("yGJW"),
            d = n("OWtl"),
            u = n("eShZ"),
            h = n("ZhoB");
        let p = new WeakSet;

        function m(e) {
            let t, n, o, p, m, f, v, y, b = (0, s.c)(24),
                {
                    conversationId: x,
                    error: C,
                    loadError: _,
                    canRetry: I,
                    isWorkConversation: w,
                    children: T
                } = e,
                j = (0, r.y)(d.a);
            b[0] !== x || b[1] !== w || b[2] !== j ? (t = (e, t) => {
                (0, h.e)(j.get(c.c).logProductEvent, {
                    conversationId: x,
                    error: e,
                    isWorkConversation: w,
                    canRetry: t
                })
            }, b[0] = x, b[1] = w, b[2] = j, b[3] = t) : t = b[3];
            let S = t;
            b[4] !== I || b[5] !== _ || b[6] !== S ? (n = () => S(_, I), b[4] = I, b[5] = _, b[6] = S, b[7] = n) : n = b[7], b[8] !== _ || b[9] !== n ? (o = (0, a.jsx)(g, {
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
            let t, n, a = (0, s.c)(5),
                {
                    error: r,
                    onShown: i
                } = e,
                l = (0, o.useEffectEvent)(i);
            return a[0] !== r || a[1] !== l ? (t = () => {
                if (null != r) {
                    if ((0, u.e)(r)) {
                        if (p.has(r)) return;
                        p.add(r)
                    }
                    l()
                }
            }, a[0] = r, a[1] = l, a[2] = t) : t = a[2], a[3] !== r ? (n = [r], a[3] = r, a[4] = n) : n = a[4], (0, o.useEffect)(t, n), null
        }
        n.d(t, {
            a: () => m
        })
    }),
    eKlv: (function(e, t, n) {
        var a = n("Cslg"),
            s = n("X6Vn"),
            r = n("SGsN"),
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
            (0, s.f)(e, i.SidebarRenameDialog, {
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
            let s = b(e, n);
            null != s && (0, f.d)(e, n) && (0, u.a)(s, e.get(a.g), e.get(a.f)) && (0, f.V)({
                scope: e,
                conversation: "conversation_id" in s ? {
                    gizmo_id: s.gizmo_id,
                    id: s.conversation_id,
                    is_archived: s.is_archived,
                    is_starred: s.is_starred,
                    title: s.title,
                    context_scopes: s.context_scopes
                } : s
            }).catch(t => {
                let n = t instanceof Error ? (0, c.e)(t)?.trim() : null;
                e.get(r.f).danger(n || e.get(o.a).formatMessage(d.a.pinError), {
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
    JwR4: (function(e, t, n) {
        n.d(t, {
            a: () => ok,
            ChatGptConversationPage: () => oA,
            ChatGptSharedConversationPage: () => oM
        });
        var a = n("ABep"),
            s = n("QosV"),
            r = n("FS1B"),
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
            I = n("jqIZ"),
            w = n("bn59"),
            T = n("OY84"),
            j = n("Yxds"),
            S = n("E8Sp"),
            E = n("z0li"),
            P = n("bjsR"),
            A = n("I7bK"),
            M = n("ZU27"),
            k = n("Pyg2"),
            R = n("ZIh4"),
            N = n("O0M0"),
            O = n("Cslg"),
            G = n("OFP1"),
            B = n("ItIk"),
            z = (n("AZW7"), n("hzGf")),
            L = n("jov5"),
            F = n("MrGp"),
            D = n("tSEg"),
            H = n("Ro2M"),
            W = n("bN4H"),
            U = n("TS05");

        function q(e) {
            let t, n, r, o, i = (0, s.c)(12),
                {
                    conversationId: l,
                    entries: c,
                    turnListApi: d
                } = e,
                {
                    key: u,
                    search: h,
                    state: m
                } = (0, I.X)();
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "automations.cloud.scheduled-tasks"
            }, i[0] = t) : t = i[0];
            let {
                isCapable: g
            } = (0, p.x)(z.a, t);
            if (i[1] !== g || i[2] !== m?.sidebarArea || i[3] !== h) {
                let e = new URLSearchParams(h);
                n = e.get("automationId"), r = m?.sidebarArea === "scheduled" || !g || !n || "finalAgentTurnStart" !== e.get("messageId"), i[1] = g, i[2] = m?.sidebarArea, i[3] = h, i[4] = n, i[5] = r
            } else n = i[4], r = i[5];
            return r ? null : (i[6] !== n || i[7] !== l || i[8] !== c || i[9] !== u || i[10] !== d ? (o = (0, a.jsx)(K, {
                automationId: n,
                conversationId: l,
                entries: c,
                turnListApi: d
            }, u), i[6] = n, i[7] = l, i[8] = c, i[9] = u, i[10] = d, i[11] = o) : o = i[11], o)
        }

        function K(e) {
            let t, n, a, r, o = (0, s.c)(25),
                {
                    automationId: i,
                    conversationId: l,
                    entries: c,
                    turnListApi: d
                } = e,
                u = (0, p.y)(D.a),
                h = (0, I.X)(),
                m = (0, p.z)(O.e),
                g = (0, p.x)(F.j, l),
                {
                    data: f
                } = (0, p.x)(H.c, i),
                v = (0, p.z)(L.a),
                y = (0, b.useRef)(null),
                x = (0, b.useRef)(null);
            o[0] !== c ? (t = c.findLast(Z), o[0] = c, o[1] = t) : t = o[1];
            let C = t;
            o[2] !== m || o[3] !== i || o[4] !== v || o[5] !== C || o[6] !== f || o[7] !== h || o[8] !== u || o[9] !== d ? (n = () => {
                null == f || null == m || (v || y.current === m || (y.current = m, (0, W.openAutomationSidePanelTab)({
                    scope: u,
                    automationId: i,
                    title: f.automation.title
                })), null != d && null != C && x.current !== m && (x.current = m, d.scrollToKey(C.turnKey, V, {
                    align: "top"
                }).then(() => {
                    u.set(U.a, {
                        locationKey: h.key,
                        accountId: m
                    }, !0)
                })))
            }, o[2] = m, o[3] = i, o[4] = v, o[5] = C, o[6] = f, o[7] = h, o[8] = u, o[9] = d, o[10] = n) : n = o[10];
            let _ = (0, b.useEffectEvent)(n);
            o[11] !== m || o[12] !== l || o[13] !== f?.automation.conversation_id || o[14] !== _ || o[15] !== g ? (a = () => {
                null != m && f?.automation.conversation_id === (g ?? l) && _()
            }, o[11] = m, o[12] = l, o[13] = f?.automation.conversation_id, o[14] = _, o[15] = g, o[16] = a) : a = o[16];
            let w = C?.turnKey,
                T = f?.automation.conversation_id;
            return o[17] !== m || o[18] !== v || o[19] !== l || o[20] !== g || o[21] !== w || o[22] !== T || o[23] !== d ? (r = [m, l, w, T, g, v, d], o[17] = m, o[18] = v, o[19] = l, o[20] = g, o[21] = w, o[22] = T, o[23] = d, o[24] = r) : r = o[24], (0, b.useEffect)(a, r), null
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

        function Z(e) {
            let {
                turn: t
            } = e;
            return t.items.some($)
        }

        function $(e) {
            return "user-message" !== e.type
        }
        var Q = n("nKJ6"),
            J = n("RN8F"),
            X = n("GMTh"),
            ee = n("zpMv"),
            et = n("PFzG"),
            en = n("KvJW"),
            ea = n("TDcV"),
            es = n("Mali"),
            er = n("SGsN"),
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
            let s = e.get(eu);
            if (!e.get(ed.c).isChatgptBrowserReplacement || null == s) return a();
            let r = n => {
                eg(e, s, n, t)
            };
            r("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || r("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || r("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(eu)?.id !== s.id || e.get(eu)?.printing || e.set(eu, null), a
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
            eC = n("taWv");

        function e_(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var eI = n("jfiJ"),
            ew = n("FGJH"),
            eT = n("nmN6");

        function ej(e) {
            let t, n, r, l, c, d = (0, s.c)(18),
                {
                    entries: u,
                    TurnRowComponent: h
                } = e,
                m = (0, p.y)(D.a),
                g = (0, p.z)(ea.a),
                f = (0, p.z)(es.a),
                v = (0, b.useRef)(null);
            d[0] !== u || d[1] !== f || d[2] !== m ? (t = function(e, t, n) {
                let a = [];
                for (let n of t) {
                    let t = e.get(F.j, n.conversationId),
                        s = (0, eC.c)(void 0, void 0, void 0, e.get(F.R, n.conversationId) ?? void 0),
                        r = (0, eC.c)(t ?? void 0);
                    for (let o of n.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]))
                        if ("user-message" === o.type) a.push(...o.images.map(e => ({
                            src: e,
                            resolver: s
                        }))), null != o.imageEditOperation && a.push({
                            src: `sediment://${o.imageEditOperation.original_file_id}`,
                            resolver: r
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
                            resolver: r
                        }
                    })) : "assistant-message" === o.type && null != t && a.push(...o.contentReferences.flatMap((e, t) => (0, ey.u)(e, t).map(e => {
                        let {
                            src: t
                        } = e;
                        return {
                            src: t,
                            resolver: r
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
                                resolver: r
                            }
                        })
                    }))
                }
                let s = a.flatMap(e => {
                    let {
                        src: t,
                        resolver: n
                    } = e;
                    return null != t && (0, eb.g)(t) ? [{
                        src: t,
                        resolver: n
                    }] : []
                });
                return {
                    queryKey: ["chatgpt-print-assets", e.get(ea.a), t[0]?.conversationId, s.map(e => {
                        let {
                            src: t,
                            resolver: n
                        } = e;
                        return [t, ...n.cacheKey, n.validationSessionId]
                    })],
                    initialData: 0 === s.length || void 0,
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
                            for (let e of ev()(s, 6)) a.throwIfAborted(), await Promise.all(e.map(async e => {
                                let {
                                    src: t,
                                    resolver: s
                                } = e, r = await (0, eb.a)(n, t, s);
                                if (a.throwIfAborted(), null != r) {
                                    let e = new Image;
                                    e.referrerPolicy = "no-referrer", e.src = r, await e.decode()
                                }
                            }));
                            return !0
                        })
                    }
                }
            }(m, u, f), d[0] = u, d[1] = f, d[2] = m, d[3] = t) : t = d[3];
            let y = (0, o.a)(t);
            d[4] !== y || d[5] !== m ? (n = (e, t) => {
                eh(m, e), e.defaultPrevented || y.isSuccess || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat || v.current === t || (v.current = t, y.refetch({
                    cancelRefetch: !1
                }).then(() => {
                    t.aborted || window.print()
                }).finally(() => {
                    v.current === t && (v.current = null)
                })))
            }, d[4] = y, d[5] = m, d[6] = n) : n = d[6];
            let C = (0, b.useEffectEvent)(n);
            return d[7] !== C || d[8] !== m ? (r = () => {
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
                    s = e => C(e, n.signal);
                return window.addEventListener("keydown", s, !0), () => {
                    n.abort(), window.removeEventListener("keydown", s, !0), a()
                }
            }, d[7] = C, d[8] = m, d[9] = r) : r = d[9], d[10] !== g || d[11] !== m ? (l = [g, m], d[10] = g, d[11] = m, d[12] = l) : l = d[12], (0, b.useEffect)(r, l), d[13] !== h || d[14] !== y || d[15] !== u || d[16] !== f ? (c = f ? (0, x.createPortal)((0, a.jsx)("div", {
                className: (0, i.b)("printDocument-v_w5Ax", "hidden w-full space-y-1.5 bg-surface text-default print:block"),
                "data-conversation-print": "",
                "data-theme": "light",
                children: (0, a.jsx)(ei.a, {
                    value: null,
                    children: (0, a.jsx)(eT.a, {
                        value: null,
                        children: y.isSuccess ? u.map(e => {
                            var t;
                            return (0, a.jsx)(h, {
                                entry: {
                                    ...e,
                                    timestampSeparatorAtMs: null,
                                    turn: {
                                        ...t = e.turn,
                                        suppressTurnActions: !0,
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? e_(e) : {
                                            ...e,
                                            items: e.items.map(e_),
                                            activeReasoning: null == e.activeReasoning ? void 0 : e_(e.activeReasoning)
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
            }), document.body) : null, d[13] = h, d[14] = y, d[15] = u, d[16] = f, d[17] = c) : c = d[17], c
        }

        function eS(e) {
            let t, n, a, r, i, l, c = (0, s.c)(22),
                {
                    conversationId: d
                } = e,
                u = (0, p.y)(eo.a),
                h = (0, C.a)(),
                m = (0, b.useRef)(null),
                g = (0, p.z)(ea.a),
                f = (0, p.x)(F.j, d),
                v = (0, p.z)(ew.b);
            c[0] !== g || c[1] !== f ? (t = ["chatgpt-print-history", g, f], c[0] = g, c[1] = f, c[2] = t) : t = c[2], c[3] !== u || c[4] !== f ? (n = e => {
                let {
                    signal: t
                } = e;
                return ep(u, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != f && await (0, eI.a)(u, f, t), !0))
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
            c[9] !== g || c[10] !== d || c[11] !== h || c[12] !== v || c[13] !== y || c[14] !== u || c[15] !== f ? (r = (e, t) => {
                eh(u, e), e.defaultPrevented || null == f || 0 === v || u.get(ew.c, f)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat || m.current === t || (m.current = t, y({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && u.get(ea.a) === g) {
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
                            predicate: eA
                        }).map(eE)), t.aborted || u.get(ea.a) !== g || window.print()
                    }
                }).finally(() => {
                    m.current === t && (m.current = null)
                })))
            }, c[9] = g, c[10] = d, c[11] = h, c[12] = v, c[13] = y, c[14] = u, c[15] = f, c[16] = r) : r = c[16];
            let x = (0, b.useEffectEvent)(r);
            return c[17] !== x ? (i = () => {
                let e = new AbortController,
                    t = t => x(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, c[17] = x, c[18] = i) : i = c[18], c[19] !== g || c[20] !== f ? (l = [g, f], c[19] = g, c[20] = f, c[21] = l) : l = c[21], (0, b.useEffect)(i, l), null
        }

        function eE(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(eP)
        }

        function eP() {}

        function eA(e) {
            return e.getObserversCount() > 0
        }
        var eM = n("DrWu"),
            ek = n("x4uR"),
            eR = n("hx97");

        function eN(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var eO = n("MrzV"),
            eG = n("ygO2"),
            eB = n("gbRX");

        function ez(e) {
            let t, n, r = (0, s.c)(4),
                {
                    isFetching: o,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, p.z)(!i && eB.a) || o;
            return r[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(_.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again",
                description: "Retry loading a ChatGPT conversation after its history could not be loaded"
            }), r[0] = t) : t = r[0], r[1] !== l || r[2] !== c ? (n = (0, a.jsx)(eG.a, {
                color: "ghost",
                disabled: c,
                onClick: l,
                children: t
            }), r[1] = l, r[2] = c, r[3] = n) : n = r[3], n
        }

        function eL(e) {
            let t, n, r, o = (0, s.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(_.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation",
                description: "Error state when a ChatGPT conversation fetch fails"
            }), o[0] = t) : t = o[0], o[1] !== i || o[2] !== l || o[3] !== c ? (n = null != c ? (0, a.jsx)(ez, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, o[1] = i, o[2] = l, o[3] = c, o[4] = n) : n = o[4], o[5] !== n ? (r = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), o[5] = n, o[6] = r) : r = o[6], r
        }
        var eF = n("FfNP"),
            eD = n("Bbed"),
            eH = n("WVag");
        let eW = (0, eD.a)(eF.loadEpicChartIndicator);

        function eU(e) {
            let t, n = (0, s.c)(3),
                {
                    conversationId: r
                } = e,
                o = (0, p.x)(eH.a, r),
                [i, l] = (0, b.useState)(!1);
            return i || null == o || l(!0), n[0] !== r || n[1] !== i ? (t = i ? (0, a.jsx)(eW, {
                conversationId: r
            }) : null, n[0] = r, n[1] = i, n[2] = t) : t = n[2], t
        }
        var eq = n("DWXw"),
            eK = n("FmJi"),
            eV = n("TSib"),
            eY = n("sIex"),
            eZ = n("jEN2"),
            e$ = n("kphc"),
            eQ = n("YWcr"),
            eJ = n("RGWz"),
            eX = n("QxH2"),
            e0 = n("mwa5"),
            e1 = n("UuVq"),
            e2 = n("TwSq"),
            e3 = n("l0fK"),
            e4 = n("hkBU"),
            e6 = n("UxN3"),
            e5 = n("GKsW"),
            e8 = n("yWTM"),
            e7 = n("SkIz"),
            e9 = n("aNqv"),
            te = n("ibLK"),
            tt = n("T1PX"),
            tn = n("Fjd0"),
            ta = n("VPBa"),
            ts = n("PWXi"),
            tr = n("zOE4"),
            to = n("Fm9E"),
            ti = n("HnT3"),
            tl = n("QSwz"),
            tc = n("ze43"),
            td = n("KXCj"),
            tu = n("e1xH"),
            th = n("pAFY");
        n("kErH");
        var tp = n("dJBt"),
            tm = n("FR8U"),
            tg = n("xqnZ"),
            tf = n("UMxD"),
            tv = n("VV6Z"),
            ty = n("JhDO"),
            tb = n("Mbqw"),
            tx = n("kl6F"),
            tC = n("kfGJ"),
            t_ = n("khOd"),
            tI = n("RZBv"),
            tw = n("yzQ9"),
            tT = n("hZax"),
            tj = n("OMIV"),
            tS = n("JCJj"),
            tE = n("KkZX"),
            tP = n("Gjet"),
            tA = n("ftSl"),
            tM = n("BdYu"),
            tk = n("Nyub"),
            tR = n("jZDY"),
            tN = n("HgLj"),
            tO = n("Bc5r"),
            tG = n("bIvi"),
            tB = n("Elta"),
            tz = n("eShZ"),
            tL = n("qqut"),
            tF = n("CsbC"),
            tD = n("tCyZ"),
            tH = n("JPvk"),
            tW = n("GgLN"),
            tU = n("KdfG"),
            tq = n("AOHi"),
            tK = n("iRMi"),
            tV = n("U2UX"),
            tY = n("gbrq"),
            tZ = n("K33Q"),
            t$ = n("mv4d"),
            tQ = n("w7Qu"),
            tJ = n("dt5v"),
            tX = n("bWX0"),
            t0 = n("smHt"),
            t1 = n("aoTb"),
            t2 = n("pqpL"),
            t3 = n("riqo"),
            t4 = n("XcRr"),
            t6 = n("dk3M"),
            t5 = n("WFY2"),
            t8 = n("vldH"),
            t7 = n("ISgP"),
            t9 = n("t2JB"),
            ne = n("DIH2"),
            nt = n("aFoA"),
            nn = n("H8lk"),
            na = n("rxj0"),
            ns = n("XkLc"),
            nr = n("S95W");
        let no = (0, p.v)(eo.a, e => null);
        var ni = n("DM5G"),
            nl = n("gJe8"),
            nc = n("d2rV"),
            nd = n("zOrD"),
            nu = n("EFj1"),
            nh = n("TL6G"),
            np = n("eKlv"),
            nm = n("OtLV"),
            ng = n("XtQP");

        function nf(e) {
            let t, n, a, r, o, i, l, c = (0, s.c)(16),
                {
                    conversationId: d
                } = e,
                u = (0, p.y)(eo.a),
                h = (0, C.a)();
            return c[0] !== d || c[1] !== h || c[2] !== u ? (t = () => {
                (0, ng.c)(u, d).catch(() => {
                    u.get(er.f).danger(h.formatMessage(nm.a.markUnreadError), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.sidebar.markUnreadError"
                        }
                    })
                })
            }, c[0] = d, c[1] = h, c[2] = u, c[3] = t) : t = c[3], (0, nu.a)("markThreadUnread", t), c[4] !== d || c[5] !== u ? (n = () => (0, np.c)(u, d), a = [d, u], c[4] = d, c[5] = u, c[6] = n, c[7] = a) : (n = c[6], a = c[7]), (0, nh.d)("rename-thread", n, a), c[8] !== d || c[9] !== u ? (r = () => (0, np.d)(u, d), o = [d, u], c[8] = d, c[9] = u, c[10] = r, c[11] = o) : (r = c[10], o = c[11]), (0, nh.d)("toggle-thread-pin", r, o), c[12] !== d || c[13] !== u ? (i = () => (0, np.a)(u, d), l = [d, u], c[12] = d, c[13] = u, c[14] = i, c[15] = l) : (i = c[14], l = c[15]), (0, nh.d)("archive-thread", i, l), null
        }
        var nv = n("VlIB"),
            ny = n("Ow2S"),
            nb = n("ASxG"),
            nx = n("wD9O"),
            nC = n("lsfk"),
            n_ = n("IObw"),
            nI = n("BOYb"),
            nw = n("kQNh"),
            nT = n.n(nw),
            nj = n("NkEl"),
            nS = n("FW69"),
            nE = "highlight-x7OnzP",
            nP = "safari-wcvuzB",
            nA = "block-t7sxyD";
        let nM = "chatgpt-search-result",
            nk = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* nR(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(nk) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                }),
                a = [],
                s = "";
            for (let e = n.nextNode(); null != e; e = n.nextNode()) {
                let t = s.length;
                s += e.textContent ?? "", a.push({
                    node: e,
                    start: t,
                    end: s.length
                })
            }
            let r = RegExp(t.split(/\n+/u).map(nT()).join("\\n*"), "g");
            for (let n = r.exec(s); null != n && n.index < s.length; n = r.exec(s)) {
                let s = n.index;
                r.lastIndex = s + 1;
                let o = s + n[0].length,
                    i = a.find(e => e.end > s),
                    l = a.findLast(e => e.start < o);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, s - i.start), c.setEnd(l.node, o - l.start), nN(c) && ((0, nS.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function nN(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let nO = nb.object({
            chatGptSearchNavigation: nb.object({
                key: nb.string(),
                messageId: nb.string()
            })
        });

        function nG(e) {
            let t, n, a, r, o, i, l, c, d, u, h, m, g = (0, s.c)(48),
                {
                    conversationId: f,
                    entries: v,
                    isConversationFetching: y,
                    turnListApi: x
                } = e,
                C = (0, p.y)(eo.a),
                _ = (0, p.x)(F.r, f),
                w = (0, nC.b)(),
                T = (0, nx.c)();
            g[0] !== w || g[1] !== T ? (t = e => {
                ! function(e, t, n) {
                    let a = t.getScrollElement();
                    if (null == a) return;
                    let s = e instanceof Range ? e.startContainer : e,
                        r = s instanceof HTMLElement ? s : s.parentElement;
                    for (let t = e instanceof Range ? r : r?.parentElement; null != t && t !== a; t = t.parentElement) {
                        if (t.scrollWidth <= t.clientWidth || !/^(auto|scroll)$/.test(getComputedStyle(t).overflowX)) continue;
                        let a = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect();
                        if (null == a) continue;
                        let s = t.getBoundingClientRect();
                        (a.left < s.left || a.right > s.right) && t.scrollBy({
                            left: (0, nx.b)(a.left + a.width / 2 - s.left - s.width / 2, n),
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
                        h = (0, nx.b)(o.height, n),
                        p = (0, nx.b)(o.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, w, T)
            }, g[0] = w, g[1] = T, g[2] = t) : t = g[2];
            let j = (0, b.useEffectEvent)(t),
                S = (0, I.X)(),
                E = (0, I.Z)(),
                P = new URLSearchParams(S.search),
                A = P.get("messageId") ?? P.get("message"),
                M = nO.safeParse(S.state).data?.chatGptSearchNavigation,
                k = A ?? M?.messageId,
                R = P.get("selectedTextQuery") ?? "",
                N = (0, p.x)(F.L, f),
                O = !R || null != k && null != N && (N[k]?.message != null || Object.values(N).some(e => e.message?.id === k)),
                G = R || P.get("historySearchQuery") || "",
                B = JSON.stringify([f, null != A ? S.key : M?.key ?? S.key, k]);
            g[3] !== B ? (n = {
                key: B,
                handled: !1,
                positioned: !1
            }, g[3] = B, g[4] = n) : n = g[4];
            let z = (0, b.useRef)(n),
                L = (0, b.useEffectEvent)(e => {
                    z.current.positioned = !0;
                    let t = G.trim().length > 0 ? function(e, t, n) {
                        let a, s, r, o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            p = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === p.length) return () => {};
                        let m = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(nT()).join("|") : nT()(c), null == c ? "giu" : "gu"),
                            g = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(_);

                        function C() {
                            for (let t of (g = !0, x.disconnect(), clearTimeout(s), null != r && cancelAnimationFrame(r), null != a && CSS.highlights.get(nM) === a && CSS.highlights.delete(nM), e.classList.remove(nE, nP), b)) t.classList.remove(nE, nA)
                        }

                        function _() {
                            g || null != s || null != r || (s = setTimeout(() => {
                                s = void 0, r = requestAnimationFrame(() => {
                                    r = void 0, I()
                                })
                            }, 50))
                        }

                        function I() {
                            let t;
                            if (g || !e.isConnected || null != r) return;
                            let d = performance.now() - f;
                            if (d < 4e3 && null != e.querySelector("[data-search-result-pending]")) return void _();
                            let u = (0, nj.a)(e);
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
                                r = requestAnimationFrame(() => {
                                    r = requestAnimationFrame(() => {
                                        r = void 0, I()
                                    })
                                });
                                return
                            }
                            let w = [];
                            if (null != c) {
                                let t = e.querySelector('[data-markdown-text-style="assistant-message"]') ?? e,
                                    n = 0;
                                for (let e of nR(t, c))
                                    if (!(n++ < l)) {
                                        w.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(nk) != null || u.some(t => {
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), nN(a) && w.push(a)
                                    }
                            }
                            let T = h.flatMap(e => {
                                let {
                                    element: t,
                                    target: n
                                } = e, a = t.getBoundingClientRect(), s = w.some(e => t.contains(e.startContainer));
                                return "terms" === i && a.width > 0 && a.height > 0 && ("block" === n.highlight || "auto" === n.highlight && !s) ? [t] : []
                            });
                            if (0 === w.length && 0 === T.length) {
                                if (d < 800) return void _();
                                T.push(e)
                            }
                            let j = 0,
                                S = 0;
                            for (let e of [...w, ...T]) {
                                let n = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect(),
                                    a = n?.top ?? 0,
                                    s = n?.left ?? 0;
                                (null == t || 0 > (a - j || s - S)) && (t = e, j = a, S = s)
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
                            for (let t of (x.disconnect(), clearTimeout(s), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...w), CSS.highlights.set(nM, a)) : w.length > 0 && T.push(e), e.classList.add(nE), (0, nI.e)() && e.classList.add(nP), T)) t.classList.add(nE, nA), b.add(t);
                            s = setTimeout(C, 3600)
                        }
                        return x.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), I(), C
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
            g[5] !== f || g[6] !== y || g[7] !== k || g[8] !== B || g[9] !== C || g[10] !== O ? (a = () => {
                if (z.current.key !== B && (z.current = {
                        key: B,
                        handled: !1,
                        positioned: !1
                    }), null != k && !y && O) return C.watch(e => {
                    !z.current.handled && (0, F.Nb)(e, f, k) && (z.current.handled = !0)
                })
            }, r = [f, y, k, B, C, O], g[5] = f, g[6] = y, g[7] = k, g[8] = B, g[9] = C, g[10] = O, g[11] = a, g[12] = r) : (a = g[11], r = g[12]), (0, b.useLayoutEffect)(a, r), g[13] !== v || g[14] !== k ? (o = null == k ? void 0 : v.find(e => {
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
                    !z.current.positioned || null != D || y || _ || H()
                }, g[21] = H, g[22] = _, g[23] = y, g[24] = D, g[25] = l) : l = g[25], g[26] !== _ || g[27] !== y || g[28] !== D ? (c = [_, y, D], g[26] = _, g[27] = y, g[28] = D, g[29] = c) : c = g[29], (0, b.useLayoutEffect)(l, c), g[30] !== k || g[31] !== D?.id || g[32] !== D?.turn.items || g[33] !== D?.turnKey) {
                let e = D?.turn.items.findIndex(e => "messageId" in e && e.messageId === k || "assistant-message" === e.type && null != k && e.sourceMessageIds?.includes(k)) ?? -1,
                    t = D?.turn.items[e],
                    n = D?.id;
                u = D?.turnKey, d = null == t || null == n ? void 0 : (0, n_.b)(t, e, n), g[30] = k, g[31] = D?.id, g[32] = D?.turn.items, g[33] = D?.turnKey, g[34] = d, g[35] = u
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
            }, g[36] = L, g[37] = k, g[38] = u, g[39] = x, g[40] = W, g[41] = h) : h = g[41], g[42] !== k || g[43] !== B || g[44] !== u || g[45] !== x || g[46] !== W ? (m = [B, k, u, x, W], g[42] = k, g[43] = B, g[44] = u, g[45] = x, g[46] = W, g[47] = m) : m = g[47], (0, b.useLayoutEffect)(h, m), null
        }
        var nB = n("dBPX"),
            nz = n("SZi8"),
            nL = n("lBzi"),
            nF = n("Ga6O"),
            nD = n("MikY"),
            nH = n("vknh"),
            nW = n("Ppno"),
            nU = n("hXcw"),
            nq = n("fhcC"),
            nK = n("wDWo"),
            nV = n("IgxH"),
            nY = n("iaTG"),
            nZ = n("c3f5"),
            n$ = n("iXTs"),
            nQ = n("xAIC"),
            nJ = n("h6NE"),
            nX = n("bf6R"),
            n0 = n("O666"),
            n1 = n("tNq4"),
            n2 = n("Skaw"),
            n3 = n("PYCG");

        function n4(e) {
            let t, n, r, o, i, l, c, d, u, h, m, g = (0, s.c)(50),
                {
                    conversationId: f,
                    projectId: v,
                    sharedProjectConversation: y,
                    isReady: b,
                    isRestricted: x,
                    isStreaming: I
                } = e,
                w = void 0 === v ? null : v,
                T = (0, p.y)(eo.a),
                j = (0, C.a)(),
                S = (0, p.z)(O.d),
                E = (0, p.z)(null == w ? null : n2.a),
                P = (0, p.x)(F.j, f),
                {
                    data: A
                } = (0, p.x)(nL.chatGptConversationQueryById$, null == w ? null : P),
                M = (0, p.x)(nt.a, null == w ? null : P),
                k = (0, p.x)(F.A, M);
            g[0] !== M || g[1] !== A || g[2] !== k || g[3] !== w || g[4] !== P ? (t = null == A && null != M && null != P ? {
                id: P,
                gizmo_id: w,
                is_temporary_chat: k
            } : void 0, g[0] = M, g[1] = A, g[2] = k, g[3] = w, g[4] = P, g[5] = t) : t = g[5];
            let R = t,
                {
                    data: N
                } = (0, p.x)(ek.b, w),
                G = null == w ? null : (0, n2.b)(E ?? null, y ?? A ?? R, N),
                B = (0, p.x)(n1.b, f);
            g[6] !== j ? (n = j.formatMessage(nm.a.headerShare), g[6] = j, g[7] = n) : n = g[7];
            let z = n,
                L = (0, p.x)(null == y ? n1.a : null, f),
                D = null != y || null != L,
                H = null;
            if (x || G?.type === "unavailable") {
                let e;
                g[8] !== j ? (e = j.formatMessage(nm.a.shareDisabledRestricted), g[8] = j, g[9] = e) : e = g[9], H = e
            } else if (I && !D) {
                let e;
                g[10] !== j ? (e = j.formatMessage(nm.a.shareDisabledStreaming), g[10] = j, g[11] = e) : e = g[11], H = e
            } else if (!b || !D) {
                let e;
                g[12] !== j ? (e = j.formatMessage(nm.a.shareDisabledNotReady), g[12] = j, g[13] = e) : e = g[13], H = e
            }
            let W = null != H || B;
            g[14] !== W ? (r = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: W
            }, g[14] = W, g[15] = r) : r = g[15];
            let U = (0, p.x)(n0.b, r),
                q = "loaded" === S.status && "personal" === S.structure && (null == G || "snapshot" === G.type),
                K = null != H || B;
            g[16] !== K ? (o = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: K
            }, g[16] = K, g[17] = o) : o = g[17];
            let V = (0, p.x)(q ? n0.b : null, o);
            g[18] !== f || g[19] !== R || g[20] !== w || g[21] !== T || g[22] !== y ? (i = () => {
                let e = null == y ? T.get(n1.c, f) : {
                    serverConversationId: y.conversation_id,
                    title: y.title,
                    currentNodeId: y.current_node ?? void 0
                };
                null != e && (0, n3.shareChatGptProjectConversation)(T, e.serverConversationId, e.title ?? "", w, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", y ?? R)
            }, g[18] = f, g[19] = R, g[20] = w, g[21] = T, g[22] = y, g[23] = i) : i = g[23];
            let Y = i,
                Z = z;
            if ("loaded" === S.status && (null == G || "snapshot" === G.type)) {
                let e;
                g[24] !== S.structure || g[25] !== j ? (e = j.formatMessage("workspace" === S.structure ? nm.a.shareWorkspaceTooltip : nm.a.sharePublicTooltip), g[24] = S.structure, g[25] = j, g[26] = e) : e = g[26], Z = e
            }
            let $ = null == H && !B && !0 === V,
                Q = H ?? Z,
                J = null != H || B;
            return g[27] !== B || g[28] !== U ? (l = !B && (U ? (0, a.jsx)(nX.M, {}) : (0, a.jsx)(nX.L, {})), g[27] = B, g[28] = U, g[29] = l) : l = g[29], g[30] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(_.a, {
                ...nm.a.headerShare
            }), g[30] = c) : c = g[30], g[31] !== Y || g[32] !== B || g[33] !== z || g[34] !== J || g[35] !== l ? (d = (0, a.jsxs)(eG.a, {
                "aria-label": z,
                color: "toolbar",
                disabled: J,
                loading: B,
                radius: "large",
                size: "toolbar",
                onClick: Y,
                children: [l, c]
            }), g[31] = Y, g[32] = B, g[33] = z, g[34] = J, g[35] = l, g[36] = d) : d = g[36], g[37] !== Q || g[38] !== d || g[39] !== $ ? (u = (0, a.jsx)(nJ.a, {
                disabled: $,
                content: Q,
                children: d
            }), g[37] = Q, g[38] = d, g[39] = $, g[40] = u) : u = g[40], g[41] !== f || g[42] !== B || g[43] !== w || g[44] !== H || g[45] !== y ? (h = !1, g[41] = f, g[42] = B, g[43] = w, g[44] = H, g[45] = y, g[46] = h) : h = g[46], g[47] !== u || g[48] !== h ? (m = (0, a.jsxs)(a.Fragment, {
                children: [u, h]
            }), g[47] = u, g[48] = h, g[49] = m) : m = g[49], m
        }(0, eD.a)(async () => () => null);
        var n6 = n("B0Wx"),
            n5 = n("if6d"),
            n8 = n("r2mP"),
            n7 = n("bLPN"),
            n9 = n("dZc6"),
            ae = n("ZhoB"),
            at = n("RADZ"),
            an = n("rZzh"),
            aa = n("N9qt");

        function as(e) {
            let t, n, r, o, i, l, c, d, u = (0, s.c)(49),
                {
                    entry: h,
                    renderMcpApps: m,
                    trackShownImpressions: g
                } = e,
                f = void 0 === m || m,
                v = void 0 === g || g,
                y = (0, p.y)(eo.a);
            u[0] !== h.conversationId ? (t = (0, tx.n)({
                routeKind: "chatgpt-thread",
                conversationId: h.conversationId
            }), u[0] = h.conversationId, u[1] = t) : t = u[1];
            let b = (0, p.x)(v ? ti.c : null, t),
                x = v && null == b,
                C = (0, p.x)(h.isMostRecentTurn ? an.d : null, h.conversationId);
            u[2] !== h.timestampSeparatorAtMs ? (n = null == h.timestampSeparatorAtMs ? null : (0, a.jsx)(n8.b, {
                sentAtMs: h.timestampSeparatorAtMs
            }), u[2] = h.timestampSeparatorAtMs, u[3] = n) : n = u[3];
            let I = null != h.paragen;
            return u[4] !== h.branchingMessageId || u[5] !== h.browserConversationId || u[6] !== h.conversationId || u[7] !== h.feedbackEnabled || u[8] !== h.hasLaterSitesPreview || u[9] !== h.id || u[10] !== h.isMostRecentTurn || u[11] !== h.isReadOnly || u[12] !== h.isTemporaryChat || u[13] !== h.isWorkConversation || u[14] !== h.onEditUserMessage || u[15] !== h.onFork || u[16] !== h.onRegenerateResponse || u[17] !== h.pendingSubmissionAttachments || u[18] !== h.readAloudEnabled || u[19] !== h.referenceImageSuggestionActionInput || u[20] !== h.safetyReview || u[21] !== h.shareEnabled || u[22] !== h.turn || u[23] !== f || u[24] !== x || u[25] !== I ? (r = (0, a.jsx)(n9.a, {
                browserConversationId: h.browserConversationId,
                conversationId: h.conversationId,
                branchingMessageId: h.branchingMessageId,
                hasLaterSitesPreview: h.hasLaterSitesPreview,
                hostId: tC.a,
                isMostRecentTurn: h.isMostRecentTurn,
                isReadOnly: h.isReadOnly,
                isTemporaryChat: h.isTemporaryChat,
                isParagen: I,
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
            }), u[4] = h.branchingMessageId, u[5] = h.browserConversationId, u[6] = h.conversationId, u[7] = h.feedbackEnabled, u[8] = h.hasLaterSitesPreview, u[9] = h.id, u[10] = h.isMostRecentTurn, u[11] = h.isReadOnly, u[12] = h.isTemporaryChat, u[13] = h.isWorkConversation, u[14] = h.onEditUserMessage, u[15] = h.onFork, u[16] = h.onRegenerateResponse, u[17] = h.pendingSubmissionAttachments, u[18] = h.readAloudEnabled, u[19] = h.referenceImageSuggestionActionInput, u[20] = h.safetyReview, u[21] = h.shareEnabled, u[22] = h.turn, u[23] = f, u[24] = x, u[25] = I, u[26] = r) : r = u[26], u[27] !== h.conversationId || u[28] !== h.isTemporaryChat || u[29] !== h.isWorkConversation || u[30] !== h.paragen || u[31] !== x ? (o = null == h.paragen ? null : (0, a.jsx)(at.a, {
                comparison: h.paragen,
                conversationId: h.conversationId,
                hostId: tC.a,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                trackTaskViews: x
            }, h.paragen.promptMessageId), u[27] = h.conversationId, u[28] = h.isTemporaryChat, u[29] = h.isWorkConversation, u[30] = h.paragen, u[31] = x, u[32] = o) : o = u[32], u[33] !== h.showSharedConversationPrivateDisclaimer ? (i = h.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(e6.a, {
                    className: "shrink-0",
                    legacyIcon: n7.a,
                    asset16: aa.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(_.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you",
                    description: "Privacy disclaimer shown between the original shared ChatGPT conversation and the reader's new private messages after they continue the shared conversation in Codex Desktop"
                })]
            }) : null, u[33] = h.showSharedConversationPrivateDisclaimer, u[34] = i) : i = u[34], u[35] !== h || u[36] !== C || u[37] !== y || u[38] !== x ? (l = h.isMostRecentTurn ? (0, a.jsx)(nD.a, {
                conversationId: h.conversationId,
                errorMessage: h.errorMessage,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                onRetry: null == h.onRegenerateResponse || null == C ? void 0 : async e => {
                    let t = y.get(an.d, h.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = y.get(F.T, h.conversationId)?.metadata?.errorCode;
                    (0, ae.d)(y.get(ed.c).logProductEvent, {
                        conversationId: y.get(F.j, h.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await h.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, an.e)(t.message, y.get(ny.t, h.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                showPendingLoadingMessage: h.showPendingLoadingMessage,
                showRequestUserInputStatus: h.showRequestUserInputStatus,
                trackShownImpressions: x,
                useDefaultModel: C?.useDefaultModel,
                isRetryDisabled: C?.isRetryDisabled
            }) : null, u[35] = h, u[36] = C, u[37] = y, u[38] = x, u[39] = l) : l = u[39], u[40] !== r || u[41] !== o || u[42] !== i || u[43] !== l ? (c = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [r, o, i, l]
            }), u[40] = r, u[41] = o, u[42] = i, u[43] = l, u[44] = c) : c = u[44], u[45] !== h.id || u[46] !== c || u[47] !== n ? (d = (0, a.jsxs)("div", {
                "data-content-search-turn-key": h.id,
                children: [n, c]
            }), u[45] = h.id, u[46] = c, u[47] = n, u[48] = d) : d = u[48], d
        }

        function ar(e) {
            let t, n, r, o = (0, s.c)(8),
                {
                    entries: i,
                    historyLoader: l,
                    isVisible: c
                } = e,
                d = c ? l : null;
            return o[0] !== i ? (t = (0, a.jsx)(n5.a, {
                entries: i,
                preserveMeasuredTurnViewport: !0,
                RowComponent: ao
            }), o[0] = i, o[1] = t) : t = o[1], o[2] !== d || o[3] !== t ? (n = (0, a.jsx)(ei.a, {
                value: null,
                children: (0, a.jsxs)(eT.a, {
                    value: null,
                    children: [d, t]
                })
            }), o[2] = d, o[3] = t, o[4] = n) : n = o[4], o[5] !== c || o[6] !== n ? (r = (0, a.jsx)(tP.a, {
                active: c,
                presentation: "panel",
                children: n
            }), o[5] = c, o[6] = n, o[7] = r) : r = o[7], r
        }

        function ao(e) {
            let t, n = (0, s.c)(2),
                {
                    entry: r
                } = e;
            return n[0] !== r ? (t = (0, a.jsx)(as, {
                entry: {
                    ...r,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    readAloudEnabled: !1
                },
                renderMcpApps: !1,
                trackShownImpressions: !1
            }), n[0] = r, n[1] = t) : t = n[1], t
        }
        var ai = n("wwvo"),
            al = n("u4MG"),
            ac = n("jAnS");
        let ad = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(F.j, e);
            return null != a ? a : n(F.D, e) || n(ny.i, e) || null != n(ny.y, e) ? void 0 : null
        });

        function au(e) {
            let t, n, r, o, i, l, c, d = (0, s.c)(30),
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
                } = (0, I.X)(),
                {
                    gizmoId: C
                } = (0, I.bb)(),
                _ = (0, p.x)(ad, h),
                w = (0, p.x)(F.D, h),
                T = (0, p.x)(F.R, h),
                j = w ? T : C;
            d[0] !== j ? (t = null != j && (0, al.a)(j) ? j : null, d[0] = j, d[1] = t) : t = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                enabled: !1
            }, d[2] = n) : n = d[2];
            let {
                data: S
            } = (0, p.x)(ek.b, t, n);
            d[3] !== j ? (r = null == j || (0, al.a)(j) ? null : j, d[3] = j, d[4] = r) : r = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (o = {
                enabled: !1
            }, d[5] = o) : o = d[5];
            let {
                data: E
            } = (0, p.x)(ai.b, r, o);
            if (null === _ || (0, ac.f)(b) && null != _ && !w) {
                let e;
                return d[6] !== f || d[7] !== b ? (e = (0, a.jsx)(I.l, {
                    replace: !0,
                    to: {
                        pathname: f,
                        search: b
                    }
                }), d[6] = f, d[7] = b, d[8] = e) : e = d[8], e
            }
            d[9] !== h || d[10] !== E?.gizmo || d[11] !== j || d[12] !== S?.gizmo || d[13] !== _ || d[14] !== m ? (i = null != m ? (0, I.C)(m, {
                conversationId: _ ?? h
            }) : (0, ac.c)(_ ?? h, {
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
                            ...s
                        } = t;
                        a = s, d[25] = t, d[26] = a
                    } else a = d[26];
                    n = a
                }
                l = y !== P || t ? (0, a.jsx)(I.l, {
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
        var ah = n("SZCv"),
            ap = n.n(ah),
            am = n("ALWK"),
            ag = n("PC5z"),
            af = n("lZ4W"),
            av = n("aRto"),
            ay = n("WWSI"),
            ab = n("U3Gy"),
            ax = n("mKTJ");
        let aC = (0, p.c)(tx.a, e => {
                let {
                    get: t
                } = e;
                return t(am.n)
            }, {
                isEqual: ap()
            }),
            a_ = (0, p.c)(tx.a, e => {
                let {
                    get: t
                } = e;
                return t(ag.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function aI(e) {
            let t, n, r, o, i = (0, s.c)(19),
                {
                    conversationId: l,
                    entries: c,
                    onApiChange: d,
                    onVisibleContentReady: u,
                    responseSpacerState: h
                } = e,
                {
                    sharedConversationId: m
                } = (0, I.bb)(),
                g = (0, p.z)(null == m ? null : aC),
                f = (0, p.z)(a_);
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
                y = (0, b.useContext)(av.a),
                x = c.at(-1);
            if (y?.aboveComposer != null && null != x && v.push(x.turnKey), null != m && g?.size)
                for (let e of c) e.turn.items.flatMap(aS).some(e => "chatgpt-hosted-widget" === e.type && (0, ax.f)(e) && g.has((0, ax.e)(m, e.messageId))) && v.push(e.turnKey);
            let C = c.findLast(aT);
            h?.voiceAutoScrollEnabled && null != C && v.push(C.turnKey);
            let _ = (0, p.x)(af.a, l);
            if (null != _) {
                let e;
                i[2] !== _ ? (e = e => e.turn.items.flatMap(aw).some(e => "user-message" === e.type && e.messageId === _), i[2] = _, i[3] = e) : e = i[3];
                let t = c.find(e);
                null != t && v.push(t.turnKey)
            }
            let w = (0, p.x)(ab.b, l);
            i[4] !== l || i[5] !== c || i[6] !== w ? (n = (0, ay.a)(c, w, l), i[4] = l, i[5] = c, i[6] = w, i[7] = n) : n = i[7];
            let T = h?.getHeightPx,
                j = h?.voiceAutoScrollEnabled ? C?.turnKey : void 0,
                S = h?.onTurnLayoutReady;
            return i[8] !== h ? (r = e => {
                let {
                    heightDeltaPx: t
                } = e;
                h?.consumeGrowth(t ?? 0)
            }, i[8] = h, i[9] = r) : r = i[9], i[10] !== d || i[11] !== u || i[12] !== v || i[13] !== n || i[14] !== T || i[15] !== j || i[16] !== S || i[17] !== r ? (o = (0, a.jsx)(n5.a, {
                entries: n,
                getBottomScrollPaddingPx: T,
                layoutReadyTurnKey: j,
                onTurnLayoutReady: S,
                onLatestTurnHeightChange: r,
                onApiChange: d,
                onVisibleContentReady: u,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: v,
                RowComponent: as
            }), i[10] = d, i[11] = u, i[12] = v, i[13] = n, i[14] = T, i[15] = j, i[16] = S, i[17] = r, i[18] = o) : o = i[18], o
        }

        function aw(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function aT(e) {
            let {
                turn: t
            } = e;
            return t.items.some(aj)
        }

        function aj(e) {
            return "user-message" === e.type
        }

        function aS(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var aE = n("XAP6"),
            aP = n("bzoy"),
            aA = n("LYS1"),
            aM = n("aZoZ"),
            ak = n("Gv8v"),
            aR = n("EGpF"),
            aN = n("mTPq"),
            aO = n("Vcrm"),
            aG = n("MxKj");
        let aB = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(F._, e);
            if (!(0, F.zb)(a)) return !0;
            let s = n(F.L, e),
                r = n(F.B, e);
            if (null == s || null == r) return !1;
            let o = s[r]?.message;
            if (null == o || aA.a.has(o.author.role)) return !1;
            let i = n(F.x, e),
                l = (0, aN.c)({
                    mapping: s,
                    current_node: r
                }, n(F.Q, e)),
                c = n(F.bb, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(F.j, e) && !(0, aP.e)(n(F.o, e)) && null != c && !n(aE.b).has(c) && null != aL(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });
        async function az(e, t) {
            let {
                conversationId: n,
                isTemporaryChat: a = !1,
                messageId: s,
                prompt: r,
                renderFormat: o,
                inlineSystemHints: i
            } = t;
            if (e.get(ny.i, n)) throw new ak.a("edit_message_busy", "The chat is busy.");
            let l = e.get(F.x, n);
            if ("tpp" === l) throw new ak.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
            if (!e.get(aB, n)) throw new ak.a("edit_message_busy", "The chat is busy.");
            let c = e.get(aM.b, {
                conversationId: n,
                messageId: s
            });
            if (null == c) throw new ak.a("edit_message_target_unavailable", "The user message could not be edited.");
            let {
                selectedModel: d
            } = c, u = r.trim(), h = (0, aM.c)(c.message, e.get, i), p = (0, aG.c)({
                message: c.message,
                prompt: u,
                renderFormat: o,
                systemHints: h,
                inlineSystemHints: i
            }), m = (0, v.f)(p.message.metadata), g = p.message.content, f = "multimodal_text" === g.content_type && g.parts.some(e => "string" != typeof e);
            if (0 === u.length && 0 === m.length && !f) throw new ak.a("edit_message_empty", "The edited message cannot be empty.");
            if (e.get(tj.c, "3574573347")) {
                let t = e.get(aM.a, n);
                t?.messageId === s && t.prompt === r && ap()((0, aM.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(aM.a, n, {
                    messageId: s,
                    prompt: r,
                    isTemporaryChat: a,
                    inlineSystemHints: i
                }), (0, nz.f)(e, n, {
                    isTemporaryChat: a
                }))
            }
            let y = aL(e.get, n),
                b = y.request.current,
                x = () => aL(e.get, n).request.current === b && ap()(e.get(aM.b, {
                    conversationId: n,
                    messageId: s
                }), c) && !(0, F.zb)(e.get(F._, n));
            e.set(ny.i, n, !0);
            try {
                if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(aO.a, n) && (await b.stop(), await b.closed), !x()) throw new ak.a("edit_message_target_unavailable", "The edited message or active response changed.");
                await (0, aG.submitChatGPTCompletion)(e, {
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
                e.set(ny.i, n, !1)
            }
        }

        function aL(e, t) {
            let n = e(aR.a, t),
                a = e(F.j, t);
            return null == n.request.current && null != a ? e(aR.a, a) : n
        }
        var aF = n("xtkq"),
            aD = n("PG5R"),
            aH = n("aEnb"),
            aW = n("iLYI"),
            aU = n("Ipgw"),
            aq = n("wVX4");

        function aK(e) {
            let t, n, r, o, i = (0, s.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, p.y)(eo.a),
                d = (0, C.a)(),
                u = (0, tR.a)(),
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
            }, i[8] = _, i[9] = n) : n = i[9], i[10] !== g || i[11] !== l || i[12] !== u || i[13] !== m || i[14] !== h || i[15] !== f ? (r = [l, h, m, g, f, u], i[10] = g, i[11] = l, i[12] = u, i[13] = m, i[14] = h, i[15] = f, i[16] = r) : r = i[16], (0, b.useEffect)(n, r), u) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, x.createPortal)((0, a.jsx)("span", {
                ref: v,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = o) : o = i[17], o) : null
        }
        var aV = n("OOaz"),
            aY = n("n5iL"),
            aZ = n("q542"),
            a$ = n("pDUk"),
            aQ = n("GaCK"),
            aJ = n("Dofq");
        let aX = (0, eD.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(33944)]).then(n.bind(n, "p8Fu"))).ChatGptThreadSummaryPanelBody, {
            fallback: (0, a.jsx)(aZ.a.Content, {
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
            errorFallback: (0, a.jsx)(aZ.a.Content, {
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

        function a0(e) {
            let t, n, r, o = (0, s.c)(6);
            o[0] !== e ? ({
                readData: n,
                ...t
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]);
            let i = (0, aZ.b)(),
                [l, c] = (0, b.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), o[3] !== l || o[4] !== t ? (r = null == l ? null : (0, a.jsx)(aX, {
                ...t,
                data: l.data
            }), o[3] = l, o[4] = t, o[5] = r) : r = o[5], r
        }

        function a1(e) {
            let t, n, r, o = (0, s.c)(15),
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
                f = (0, tT.h)("2903661647"),
                v = f ? "dynamic-isle" : "summary";
            return o[0] !== g || o[1] !== v ? (t = {
                scope: g,
                layout: v
            }, o[0] = g, o[1] = v, o[2] = t) : t = o[2], o[3] !== l || o[4] !== i || o[5] !== f || o[6] !== c || o[7] !== u || o[8] !== m ? (n = (0, a.jsx)(a0, {
                conversationId: i,
                composerActions: l,
                readData: c,
                isUnifiedDynamicIsleEnabled: f,
                showSources: m,
                shouldBlockExternalEgress: u
            }, i), o[3] = l, o[4] = i, o[5] = f, o[6] = c, o[7] = u, o[8] = m, o[9] = n) : n = o[9], o[10] !== d.shouldHideInlineImmediately || o[11] !== d.shouldShow || o[12] !== t || o[13] !== n ? (r = (0, a.jsx)(aZ.a.Root, {
                analytics: t,
                shouldHideInlineImmediately: d.shouldHideInlineImmediately,
                shouldShow: d.shouldShow,
                children: n
            }), o[10] = d.shouldHideInlineImmediately, o[11] = d.shouldShow, o[12] = t, o[13] = n, o[14] = r) : r = o[14], r
        }

        function a2(e) {
            let t, n, r, o, i, l = (0, s.c)(28),
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
                I = (0, tT.h)("2903661647"),
                w = (0, p.z)(null == h ? tY.N : null);
            l[0] !== h?.isOpen || l[1] !== w ? (t = h?.isOpen ?? (0, tY.z)(w, !0), l[0] = h?.isOpen, l[1] = w, l[2] = t) : t = l[2];
            let T = t,
                j = (0, p.z)(aQ.b),
                S = h?.isOpen ?? j.isPopoverOpen,
                E = (0, p.x)(aY.f, "togglePinnedSummary");
            (0, tM.b)(y), l[3] !== h || l[4] !== y ? (n = () => {
                null != h ? h.onOpenChange(!h.isOpen) : (0, aJ.b)(y)
            }, l[3] = h, l[4] = y, l[5] = n) : n = l[5];
            let A = n;
            (0, nu.a)("togglePinnedSummary", A);
            let M = c ? "browser:rounded-lg browser:bg-surface" : void 0;
            return l[6] !== u || l[7] !== x || l[8] !== h || l[9] !== d || l[10] !== _ || l[11] !== T || l[12] !== S || l[13] !== I || l[14] !== j.displayMode || l[15] !== m || l[16] !== y || l[17] !== E || l[18] !== g || l[19] !== v || l[20] !== A ? (r = "overlay" === j.displayMode ? (0, a.jsx)(a$.a, {
                isOpen: S,
                shouldPreventAutoFocus: h?.shouldPreventAutoFocus,
                onOpenChange: e => {
                    null != h ? h.onOpenChange(e) : y.set(aQ.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                        ...t,
                        isPopoverOpen: e
                    })
                },
                trigger: (0, a.jsx)(aZ.a.HeaderButton, {
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
                    children: (0, a.jsx)(aZ.a.PopoverContent, {
                        analytics: {
                            scope: y,
                            layout: I ? "dynamic-isle" : "summary"
                        },
                        children: (0, a.jsx)(a0, {
                            conversationId: d,
                            composerActions: u,
                            readData: m,
                            isUnifiedDynamicIsleEnabled: I,
                            showSources: v,
                            shouldBlockExternalEgress: g
                        }, d)
                    })
                }) : null
            }) : (0, a.jsx)(aZ.a.HeaderButton, {
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
                onClick: A
            }), l[6] = u, l[7] = x, l[8] = h, l[9] = d, l[10] = _, l[11] = T, l[12] = S, l[13] = I, l[14] = j.displayMode, l[15] = m, l[16] = y, l[17] = E, l[18] = g, l[19] = v, l[20] = A, l[21] = r) : r = l[21], l[22] !== M || l[23] !== r ? (o = (0, a.jsx)("div", {
                className: M,
                children: r
            }), l[22] = M, l[23] = r, l[24] = o) : o = l[24], l[25] !== c || l[26] !== o ? (i = (0, a.jsx)(P.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                allowsThreadContentOverlap: c,
                order: 250,
                children: o
            }), l[25] = c, l[26] = o, l[27] = i) : i = l[27], i
        }
        var a3 = n("JjRy"),
            a4 = n.n(a3),
            a6 = n("G4E3"),
            a5 = n("KaH3"),
            a8 = n("Yz3b"),
            a7 = n("ghNX"),
            a9 = n("KvVi"),
            se = n("m250"),
            st = n("Ng4B"),
            sn = n("bTKb"),
            sa = n("dGDB"),
            ss = n("lIsV");

        function sr(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        var so = n("JlMc"),
            si = n("TUMj"),
            sl = n("f6KK"),
            sc = n("JPXZ"),
            sd = n("zWHk");

        function su(e) {
            let t, n, a, r, o, i, l, c = (0, s.c)(34),
                {
                    composerController: d,
                    enabled: u
                } = e,
                h = (0, I.X)(),
                p = (0, I.Z)();
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
            return c[10] !== v || c[11] !== d || c[12] !== u || c[13] !== g || c[14] !== t ? (r = () => {
                if (!u && t && f.current !== g) return (0, sd.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(g) && v()
                })
            }, c[10] = v, c[11] = d, c[12] = u, c[13] = g, c[14] = t, c[15] = r) : r = c[15], c[16] !== d || c[17] !== u || c[18] !== g || c[19] !== t ? (o = [d, u, g, t], c[16] = d, c[17] = u, c[18] = g, c[19] = t, c[20] = o) : o = c[20], (0, b.useLayoutEffect)(r, o), c[21] !== v || c[22] !== d || c[23] !== u || c[24] !== g || c[25] !== t || c[26] !== m ? (i = () => {
                if (!u || !t || f.current === g || (f.current = g, v(), !d.consumeLocationPromptPrefill(g))) return;
                let {
                    view: e
                } = d, n = t.replace(/\r\n/g, "\n"), a = "codex-app" === m ? (0, sc.f)({
                    schema: e.state.schema,
                    text: n,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, sc.e)({
                    schema: e.state.schema,
                    text: n
                }), s = e.state.tr.replaceWith(0, e.state.doc.content.size, a.content);
                s.setSelection(sl.h.atEnd(s.doc)), e.dispatch(s)
            }, c[21] = v, c[22] = d, c[23] = u, c[24] = g, c[25] = t, c[26] = m, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== g || c[31] !== t || c[32] !== m ? (l = [d, u, g, t, m], c[28] = d, c[29] = u, c[30] = g, c[31] = t, c[32] = m, c[33] = l) : l = c[33], (0, b.useLayoutEffect)(i, l), null
        }
        var sh = n("zKCW");

        function sp(e) {
            let t, n, r, o, i, l = (0, s.c)(11),
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
            return l[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, a.jsx)(_.a, {
                id: "chatgptConversations.workOnlyConversion.action",
                defaultMessage: "Convert to Work",
                description: "Button that converts a disabled historical Chat conversation to Work in Codex Desktop"
            }), l[3] = r) : r = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (o = (0, a.jsx)(eG.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: r
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = o) : o = l[7], l[8] !== n || l[9] !== o ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(sh.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: o
                })
            }), l[8] = n, l[9] = o, l[10] = i) : i = l[10], i
        }
        var sm = n("pgeU");
        let sg = (0, eD.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function sf(e) {
            let t, n, r, o = (0, s.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, p.y)(eo.a),
                c = (0, p.x)(sm.a, i);
            return o[0] !== i || o[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(sm.a, i);
                        null != e && (0, sm.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], o[0] = i, o[1] = l, o[2] = t, o[3] = n) : (t = o[2], n = o[3]), (0, b.useEffect)(t, n), o[4] !== i || o[5] !== c ? (r = null == c ? null : (0, a.jsx)(sg, {
                conversationId: i,
                effect: c
            }, c.id), o[4] = i, o[5] = c, o[6] = r) : r = o[6], r
        }
        var sv = n("fr5e"),
            sy = n("LEgg");
        let sb = (0, eD.a)(async () => (await n.e(432800).then(n.bind(n, "T7hR"))).AutomationPlanHeaderShortcut);

        function sx(e) {
            let t, n = (0, s.c)(3),
                {
                    conversationId: r
                } = e,
                o = (0, tT.h)("2840857813");
            return n[0] !== r || n[1] !== o ? (t = o ? (0, a.jsx)(sb, {
                conversationId: r
            }) : null, n[0] = r, n[1] = o, n[2] = t) : t = n[2], t
        }
        var sC = n("T33u");
        let s_ = (0, eD.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function sI(e) {
            let t, n, r, o = (0, s.c)(10),
                {
                    conversationId: i,
                    scheduledAutomationId: l
                } = e,
                c = (0, p.x)(sC.a, i),
                d = (0, tT.h)("3901104270");
            return o[0] !== i || o[1] !== c ? (t = null == c ? (0, a.jsx)(sx, {
                conversationId: i
            }) : null, o[0] = i, o[1] = c, o[2] = t) : t = o[2], o[3] !== i || o[4] !== d || o[5] !== l ? (n = d && null != l ? (0, a.jsx)(s_, {
                conversationId: i,
                automationId: l
            }) : null, o[3] = i, o[4] = d, o[5] = l, o[6] = n) : n = o[6], o[7] !== t || o[8] !== n ? (r = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), o[7] = t, o[8] = n, o[9] = r) : r = o[9], r
        }
        async function sw() {
            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
        }
        async function sT() {
            return (await n.e(963775).then(n.bind(n, "fUWe"))).openConversationFiles
        }
        var sj = n("Qgfj"),
            sS = n("rmk3"),
            sE = n("f38C"),
            sP = n("MRlq"),
            sA = n("fQbA"),
            sM = n("dDDU"),
            sk = n("soaw"),
            sR = n("ZrYB"),
            sN = n("X6Vn"),
            sO = n("Kwur");
        async function sG(e, t) {
            let a = await sO.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                parameters: {
                    path: {
                        conversation_id: t
                    }
                }
            }).catch(() => null);
            return a?.can_share && 0 !== a.av_sessions.length ? [{
                id: "share-live-session",
                icon: nX.Ui,
                message: (0, sj.e)({
                    id: "chatgptConversations.liveSessionSharing.action",
                    defaultMessage: "Share Live session",
                    description: "Conversation menu action that lets an eligible user create a GPT-Live session viewer link for one of their previous voice calls"
                }),
                selectAfterClose: !0,
                onSelect: () => {
                    n.e(571376).then(n.bind(n, "ATrx")).then(n => {
                        let {
                            BidiSessionSharingDialog: s
                        } = n;
                        (0, sN.f)(e, s, {
                            conversationId: t,
                            sessions: a.av_sessions
                        })
                    })
                }
            }] : []
        }
        var sB = n("MYlA"),
            sz = n("sfmI"),
            sL = n("JCtZ"),
            sF = n("g2p6"),
            sD = n("oaTv"),
            sH = n("PME0"),
            sW = n("lgcP"),
            sU = n("AcSY"),
            sq = n("w7E5"),
            sK = n("QmkR"),
            sV = n("xEXG"),
            sY = n("J6LI"),
            sZ = n("lUUH"),
            s$ = n("ftAl");

        function sQ(e) {
            let t, n, r, o = (0, s.c)(17),
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
                } = (0, sU.m)(),
                v = (0, sV.b)();
            return o[0] !== f || o[1] !== l || o[2] !== c || o[3] !== d || o[4] !== u || o[5] !== v || o[6] !== g ? (t = () => {
                let e = g.get(s$.a, l, {
                        enabled: !1
                    }),
                    t = (0, al.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : g.query.getData(ek.b, t);
                return c(function(e) {
                    let {
                        scope: t,
                        conversationId: n,
                        conversation: a,
                        project: s,
                        account: r,
                        projectCrudStatus: o,
                        navigate: i,
                        onCreateProjectDialogCloseAutoFocus: l
                    } = e, c = (0, al.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(sq.a), u = t.get(sK.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, m = (a?.conversation_origin === "tpp" || a?.conversation_origin === "flora") && ("allowed" === o || h?.pages.some(e => null != e.cursor) === !0), g = t.get(sK.h, n);
                    return null == r || null == a || t.get(sK.g, n) || (0, sY.c)(a, s).sourceUnavailable || null == (0, sY.b)(t, a, g, !1) || null != c && null == s || null == h || 0 === p && !m ? [] : [...null == s ? [] : [{
                        id: "current-project-name",
                        message: s1.projectName,
                        messageValues: {
                            projectName: s.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, sZ.b)({
                        scope: t,
                        conversation: a,
                        project: s,
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
                    let e = g.get(nL.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await g.query.getOrFetch(nL.chatGptConversationQueryById$, l).catch(s0), null == g.query.getData(nL.chatGptConversationQueryById$, l) && await g.query.getOrFetch(sK.j, [l]).catch(sX)
                })(), h?.()]);
                let e = g.get(s$.a, l, {
                    enabled: !1
                });
                (0, al.a)(e?.gizmo_id) && e?.gizmo_id != null && await g.query.getOrFetch(ek.b, e.gizmo_id).catch(sJ)
            }, o[8] = l, o[9] = h, o[10] = g, o[11] = n) : n = o[11], o[12] !== i || o[13] !== m || o[14] !== t || o[15] !== n ? (r = (0, a.jsx)(sS.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                onOpenChange: m,
                renderItem: sA.b,
                trigger: "click",
                children: i
            }), o[12] = i, o[13] = m, o[14] = t, o[15] = n, o[16] = r) : r = o[16], r
        }

        function sJ() {}

        function sX() {}

        function s0() {}
        let s1 = (0, sj.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}",
                description: "Name of a ChatGPT project offered as a destination for moving a conversation or Work task"
            }
        });

        function s2(e) {
            let t, n, r, o, i, l, c, d, u, h, m, g, f, v, y, x, _, w, T, j = (0, s.c)(70),
                {
                    conversationOrigin: E,
                    conversationId: P,
                    title: A,
                    isHandoffPending: M,
                    isArchived: k,
                    isChatConversation: R,
                    onHandoff: N,
                    onOpenMessage: G,
                    projectId: B,
                    projectName: L,
                    serverConversationId: F
                } = e,
                H = (0, p.y)(D.a),
                W = (0, p.y)(eo.a),
                U = (0, sk.a)(),
                q = (0, tT.k)();
            j[0] !== q ? (t = q.checkGate("224248639"), j[0] = q, j[1] = t) : t = j[1];
            let K = t;
            j[2] !== q ? (n = q.getLayer("3017902351").get("web_file_library_enabled", !1), j[2] = q, j[3] = n) : n = j[3];
            let V = n,
                Y = K || V;
            j[4] !== Y ? (r = {
                enabled: Y
            }, j[4] = Y, j[5] = r) : r = j[5];
            let {
                data: Z
            } = (0, p.z)(sF.p, r), $ = Y && Z?.fileLibraryEnabledForRegistrationCountry !== !1, Q = (0, C.a)(), J = (0, I.Z)(), [X, ee] = (0, b.useState)(null), [et, en] = (0, b.useState)(!1), ea = (0, b.useRef)(null), es = (0, b.useRef)(null);
            j[6] === Symbol.for("react.memo_cache_sentinel") ? (o = [], j[6] = o) : o = j[6];
            let ei = (0, b.useRef)(o);
            j[7] === Symbol.for("react.memo_cache_sentinel") ? (i = {
                name: "chatgpt"
            }, j[7] = i) : i = j[7];
            let {
                isCapable: el
            } = (0, p.x)(z.a, i), ec = (0, p.x)(sK.g, F);
            j[8] === Symbol.for("react.memo_cache_sentinel") ? (l = () => ee("shortcut"), j[8] = l) : l = j[8];
            let ed = R && !ec;
            j[9] !== H || j[10] !== F ? (c = () => (0, sz.a)(H.query.getData(nL.chatGptConversationQueryById$, F), H.get(O.g), H.get(O.f)), j[9] = H, j[10] = F, j[11] = c) : c = j[11], j[12] !== ed || j[13] !== c ? (d = {
                enabled: ed,
                isActive: c
            }, j[12] = ed, j[13] = c, j[14] = d) : d = j[14], (0, nu.a)("deleteChat", l, d), j[15] !== W || j[16] !== ec || j[17] !== J || j[18] !== H || j[19] !== F ? (u = () => {
                !ec && (0, sz.a)(H.query.getData(nL.chatGptConversationQueryById$, F), H.get(O.g), H.get(O.f)) && (ee(null), (0, sW.a)(W, F), J("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, j[15] = W, j[16] = ec, j[17] = J, j[18] = H, j[19] = F, j[20] = u) : u = j[20];
            let eu = u;
            j[21] !== Q ? (h = Q.formatMessage(s5.chatActions), j[21] = Q, j[22] = h) : h = j[22];
            let eh = h;
            j[23] !== H || j[24] !== F ? (m = async () => {
                let e = [];
                ei.current = e, e.push(...await sG(H, F))
            }, j[23] = H, j[24] = F, j[25] = m) : m = j[25];
            let ep = m;
            j[26] !== P || j[27] !== E || j[28] !== $ || j[29] !== Q || j[30] !== ec || j[31] !== k || j[32] !== M || j[33] !== U || j[34] !== J || j[35] !== N || j[36] !== G || j[37] !== B || j[38] !== L || j[39] !== H || j[40] !== F || j[41] !== q || j[42] !== A ? (g = e => {
                let t = H.get(O.e),
                    n = H.get(O.j),
                    a = (0, sz.a)(H.query.getData(nL.chatGptConversationQueryById$, F), H.get(O.g), H.get(O.f)),
                    s = (0, np.b)(H, F),
                    r = !ec && (0, sz.a)(s, H.get(O.g), H.get(O.f)),
                    o = H.get(S.a).pathname,
                    i = () => U() && o === H.get(S.a).pathname && t === H.get(O.e) && n === H.get(O.j),
                    l = (0, sD.a)(H, P, E, () => (0, sH.a)(J)),
                    c = [];
                return q.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && c.push({
                    id: "chatgpt-audio-summary",
                    message: (0, sj.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary",
                        description: "Opens the dialog for generating and listening to an audio summary of the current chat"
                    }),
                    icon: nX.kg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        sw().then(e => {
                            i() && e(H, F)
                        }).catch(() => {
                            i() && (ea.current?.focus({
                                preventScroll: !0
                            }), H.get(er.f).danger(Q.formatMessage({
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
                    message: (0, sj.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat",
                        description: "Opens the side panel listing files referenced in the active saved ChatGPT conversation, even when the list is empty"
                    }),
                    icon: nX.rb,
                    onSelect: () => {
                        sT().then(e => {
                            i() && e(H, {
                                conversationId: P,
                                serverConversationId: F,
                                onOpenMessage: G
                            })
                        }).catch(() => {
                            i() && H.get(er.f).danger(Q.formatMessage({
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
                }), c.push(...(0, sM.a)(H)), (0, sL.a)(H, {
                    organizationItems: (0, sA.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: ei.current,
                    viewItems: c,
                    preferenceItems: null == l ? [] : [l],
                    surface: "header",
                    conversationId: F,
                    stateConversationId: P,
                    conversationOrigin: E,
                    title: A,
                    isHandoffPending: M,
                    canHandoff: null != N,
                    onHandoff: N,
                    projectId: B,
                    projectName: L,
                    onRename: !a || ec || k ? void 0 : () => (0, np.c)(H, P),
                    isPinned: H.get(sK.h, F) ?? s?.is_starred === !0,
                    onTogglePin: r ? () => {
                        let e = (0, np.b)(H, F);
                        !(null == e || H.get(sK.g, F)) && (0, sz.a)(e, H.get(O.g), H.get(O.f)) && (0, sK.V)({
                            scope: H,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(s3)
                    } : void 0,
                    onArchive: !a || ec || k ? void 0 : () => (0, sR.a)(H, F),
                    onUnarchive: a && !ec && k ? () => {
                        (0, sK.W)({
                            scope: H,
                            conversationId: F
                        }).then(() => {
                            H.get(er.f).success(Q.formatMessage(sP.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            H.get(er.f).danger(Q.formatMessage(nm.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !a || ec ? void 0 : () => ee("menu")
                })
            }, j[26] = P, j[27] = E, j[28] = $, j[29] = Q, j[30] = ec, j[31] = k, j[32] = M, j[33] = U, j[34] = J, j[35] = N, j[36] = G, j[37] = B, j[38] = L, j[39] = H, j[40] = F, j[41] = q, j[42] = A, j[43] = g) : g = j[43];
            let em = g;
            j[44] !== eh ? (f = (0, a.jsx)(sE.a, {
                ref: ea,
                className: "no-drag",
                color: "primary",
                label: eh,
                size: "toolbar"
            }), j[44] = eh, j[45] = f) : f = j[45], j[46] !== et || j[47] !== eh || j[48] !== f ? (v = (0, a.jsx)(nJ.a, {
                content: eh,
                disabled: et,
                children: f
            }), j[46] = et, j[47] = eh, j[48] = f, j[49] = v) : v = j[49];
            let eg = v;
            j[50] !== em || j[51] !== eg || j[52] !== J || j[53] !== el || j[54] !== ep || j[55] !== F ? (y = el ? (0, a.jsx)(sQ, {
                conversationId: F,
                getBaseItems: em,
                menuTriggerRef: ea,
                navigate: J,
                onBeforeOpen: ep,
                onOpenChange: en,
                children: eg
            }) : (0, a.jsx)(sS.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => em(),
                onBeforeOpen: ep,
                onOpenChange: en,
                renderItem: sA.b,
                trigger: "click",
                children: eg
            }), j[50] = em, j[51] = eg, j[52] = J, j[53] = el, j[54] = ep, j[55] = F, j[56] = y) : y = j[56];
            let ef = "shortcut" === X,
                ev = null != X;
            return j[57] !== X ? (x = () => {
                es.current = "menu" === X ? ea.current : null, ee(null)
            }, j[57] = X, j[58] = x) : x = j[58], j[59] === Symbol.for("react.memo_cache_sentinel") ? (_ = e => {
                let t = es.current;
                if (es.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, j[59] = _) : _ = j[59], j[60] !== eu || j[61] !== ec || j[62] !== ef || j[63] !== ev || j[64] !== x || j[65] !== A ? (w = (0, a.jsx)(sB.a, {
                autoFocusConfirm: ef,
                open: ev,
                onOpenChange: x,
                onCloseAutoFocus: _,
                isDeleting: ec,
                onConfirm: eu,
                title: A
            }), j[60] = eu, j[61] = ec, j[62] = ef, j[63] = ev, j[64] = x, j[65] = A, j[66] = w) : w = j[66], j[67] !== y || j[68] !== w ? (T = (0, a.jsxs)(a.Fragment, {
                children: [y, w]
            }), j[67] = y, j[68] = w, j[69] = T) : T = j[69], T
        }

        function s3() {}

        function s4() {
            let e, t, n, r = (0, s.c)(8),
                o = (0, C.a)(),
                [i, l] = (0, b.useState)(!1);
            r[0] !== o ? (e = o.formatMessage(s5.more), r[0] = o, r[1] = e) : e = r[1];
            let c = e;
            return r[2] !== c ? (t = (0, a.jsx)(sE.a, {
                className: "no-drag",
                color: "primary",
                label: c,
                size: "toolbar"
            }), r[2] = c, r[3] = t) : t = r[3], r[4] !== i || r[5] !== c || r[6] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(sS.a, {
                    preserveBrowserContextMenu: !0,
                    getItems: s6,
                    onOpenChange: l,
                    renderItem: sA.b,
                    trigger: "click",
                    children: (0, a.jsx)(nJ.a, {
                        content: c,
                        disabled: i,
                        children: t
                    })
                })
            }), r[4] = i, r[5] = c, r[6] = t, r[7] = n) : n = r[7], n
        }

        function s6() {
            return (0, sA.a)([])
        }
        let s5 = (0, sj.f)({
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
        var s8 = n("mYLJ"),
            s7 = n("WLgA");

        function s9(e) {
            let t, n, r, o = (0, s.c)(10),
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
                children: (0, a.jsx)(I.g, {
                    className: "flex h-9 max-w-full min-w-8 shrink cursor-interaction items-center overflow-hidden rounded-lg px-2 text-start text-base text-secondary transition-colors hover:bg-surface-tertiary hover:text-default",
                    to: (0, s7.c)(c.gizmo.id),
                    children: (0, a.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-1.5",
                        children: [(0, a.jsx)(tm.a, {
                            className: "size-5",
                            color: c.gizmo.display.theme,
                            defaultColor: "secondary",
                            fallbackIcon: (0, a.jsx)(nX.ud, {}),
                            icon: c.gizmo.display.emoji,
                            sharedIcon: "shared" === (0, aq.b)(c) ? (0, a.jsx)(s8.a, {}) : void 0
                        }), (0, a.jsx)("span", {
                            className: "min-w-0 truncate text-default",
                            children: c.gizmo.display.name
                        })]
                    })
                })
            }) : null, o[3] = u, o[4] = c, o[5] = n) : n = o[5], o[6] !== t || o[7] !== m || o[8] !== n ? (r = (0, a.jsx)(P.a.HeaderToolbar, {
                inset: !1,
                children: (0, a.jsx)("div", {
                    className: t,
                    "data-app-shell-thread-content-overlap": m,
                    children: n
                })
            }), o[6] = t, o[7] = m, o[8] = n, o[9] = r) : r = o[9], r
        }
        var re = n("dLcZ"),
            rt = n("W5pg"),
            rn = n("QcW8"),
            ra = n("yC2B");

        function rs(e) {
            let t, n, r, o, i, c, d, u, h, m = (0, s.c)(31),
                {
                    header: g,
                    courseShortcut: f,
                    progress: v
                } = e,
                {
                    titleBarLeftInset: y,
                    rightPanelAnimatedWidth: b,
                    isContentFullWidth: x
                } = (0, A.g)(),
                _ = (0, p.z)(rn.Z),
                I = (0, p.z)(rn.ab),
                w = (0, C.a)();
            m[0] !== w.locale ? (t = (0, ra.a)(w.locale), m[0] = w.locale, m[1] = t) : t = m[1];
            let T = t,
                j = _?.mode === "split" && "left" === I != ("rtl" === T);
            m[2] !== j || m[3] !== x ? (n = e => j && !x ? e : 0, m[2] = j, m[3] = x, m[4] = n) : n = m[4];
            let S = (0, rt.a)(b, n);
            m[5] !== S || m[6] !== y ? (r = [y, S], m[5] = S, m[6] = y, m[7] = r) : r = m[7];
            let E = (0, rt.a)(r, rr);
            m[8] !== E || m[9] !== S ? (o = {
                "--learning-header-left-inset": E,
                insetInlineStart: S
            }, m[8] = E, m[9] = S, m[10] = o) : o = m[10];
            let M = o;
            m[11] !== g ? (i = null == g ? null : (0, a.jsx)("div", {
                className: "min-w-0 flex-1",
                children: g
            }), m[11] = g, m[12] = i) : i = m[12], m[13] !== f ? (c = null == f ? null : (0, a.jsx)("div", {
                className: "flex min-w-0 flex-1",
                children: f
            }), m[13] = f, m[14] = c) : c = m[14], m[15] !== i || m[16] !== c ? (d = (0, a.jsxs)("div", {
                className: "flex w-full min-w-0 items-center gap-toolbar-action",
                children: [i, c]
            }), m[15] = i, m[16] = c, m[17] = d) : d = m[17];
            let k = d;
            if (null == v) return k;
            if (_?.isVisible && "full" === _.mode) {
                let e, t, n;
                return m[18] !== f ? (e = null == f ? null : (0, a.jsx)("div", {
                    className: "flex min-w-0 flex-1",
                    children: f
                }), m[18] = f, m[19] = e) : e = m[19], m[20] !== v ? (t = (0, a.jsx)("div", {
                    className: "min-w-0 flex-1",
                    children: v
                }), m[20] = v, m[21] = t) : t = m[21], m[22] !== t || m[23] !== e ? (n = (0, a.jsx)(P.a.HeaderAction, {
                    actionId: "sectioned-conversation-navigation",
                    align: "center",
                    children: (0, a.jsxs)("div", {
                        className: "flex min-w-0 items-center gap-toolbar-action",
                        children: [e, t]
                    })
                }), m[22] = t, m[23] = e, m[24] = n) : n = m[24], n
            }
            return m[25] !== k ? (u = (0, a.jsx)("div", {
                className: "absolute inset-y-0 end-full me-toolbar-action flex w-[max(0px,calc((100cqw-100%)/2-var(--spacing-toolbar-action)-var(--spacing)*2-var(--learning-header-left-inset)))] min-w-0 items-center overflow-hidden",
                "data-app-shell-header-obstacle": !0,
                children: k
            }), m[25] = k, m[26] = u) : u = m[26], m[27] !== v || m[28] !== M || m[29] !== u ? (h = (0, a.jsx)(P.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                children: (0, a.jsxs)(l.a.div, {
                    className: "relative flex max-w-[min(50cqw,max(0px,calc(100cqw-2*(var(--app-shell-header-end-actions-width)+var(--spacing)*3))))] min-w-0 items-center",
                    style: M,
                    children: [u, v]
                })
            }), m[27] = v, m[28] = M, m[29] = u, m[30] = h) : h = m[30], h
        }

        function rr(e) {
            let [t, n] = e;
            return `${Math.max(0,t-n)}px`
        }
        var ro = n("X0li");
        let ri = (0, eD.a)(ro.c),
            rl = (0, eD.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            rc = (0, eD.a)(async () => (await n.e(286760).then(n.bind(n, "R4DB"))).SectionNavigation);
        var rd = n("lX86");
        n("i1of");
        var ru = n("alJ6"),
            rh = n("u9iS"),
            rp = n("KidQ");
        let rm = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function rg(e) {
            let t, n, r, o, i, l = (0, s.c)(15),
                {
                    children: c,
                    draftKey: d,
                    enableInlineSystemHints: u
                } = e,
                h = (0, p.y)(eo.a),
                m = (0, b.useContext)(eY.a),
                g = u ? "chatgpt" : void 0;
            return l[0] !== u || l[1] !== g ? (t = {
                enableInlineSystemHints: u,
                variant: g
            }, l[0] = u, l[1] = g, l[2] = t) : t = l[2], l[3] !== d || l[4] !== h ? (n = () => ({
                defaultText: h.get(ny.s, d),
                defaultTextKind: "prompt"
            }), l[3] = d, l[4] = h, l[5] = n) : n = l[5], l[6] !== m ? (r = () => {
                let e = m?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == m ? null : {
                    element: e,
                    locationKey: m.locationKey
                }
            }, l[6] = m, l[7] = r) : r = l[7], l[8] !== c ? (o = e => null == e ? null : c(e), l[8] = c, l[9] = o) : o = l[9], l[10] !== t || l[11] !== n || l[12] !== r || l[13] !== o ? (i = (0, a.jsx)(rp.a, {
                controllerOptions: rm,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: r,
                children: o
            }), l[10] = t, l[11] = n, l[12] = r, l[13] = o, l[14] = i) : i = l[14], i
        }
        var rf = n("ygKd"),
            rv = n("KSir"),
            ry = n("vVgo");
        let rb = (0, eD.a)(async () => (await n.e(642007).then(n.bind(n, "KhUL"))).CourseHeaderShortcut);

        function rx(e) {
            let t, n = (0, s.c)(3),
                {
                    conversationId: r
                } = e,
                o = (0, tT.h)("4035922817");
            return n[0] !== r || n[1] !== o ? (t = o ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rb, {
                    conversationId: r
                })
            }) : null, n[0] = r, n[1] = o, n[2] = t) : t = n[2], t
        }
        var rC = n("QPeR"),
            r_ = n("MgyE"),
            rI = n("gyrn"),
            rw = n("wnpN"),
            rT = n("M3Kf");

        function rj(e) {
            let t, n, r, i, l, c, d = (0, s.c)(21),
                {
                    conversationId: u
                } = e,
                h = (0, p.y)(eo.a),
                m = (0, p.x)(F.j, u),
                g = (0, p.z)(ew.b),
                {
                    search: f
                } = (0, I.X)();
            if (d[0] !== f) {
                let e = new URLSearchParams(f);
                t = e.get("messageId") ?? e.get("message"), n = e.has("selectedTextQuery"), d[0] = f, d[1] = t, d[2] = n
            } else t = d[1], n = d[2];
            let v = n;
            d[3] !== v || d[4] !== t || d[5] !== m ? (r = ["chatgpt-message-target", m, t, v], d[3] = v, d[4] = t, d[5] = m, d[6] = r) : r = d[6];
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
                    await (0, eI.a)(h, m, n)
                }
                return !0
            }, d[7] = u, d[8] = v, d[9] = t, d[10] = h, d[11] = m, d[12] = i) : i = d[12], d[13] !== r || d[14] !== y || d[15] !== b || d[16] !== i ? (l = {
                queryKey: r,
                enabled: y,
                staleTime: b,
                retry: !1,
                queryFn: i
            }, d[13] = r, d[14] = y, d[15] = b, d[16] = i, d[17] = l) : l = d[17];
            let {
                isError: x,
                refetch: C
            } = (0, o.a)(l);
            return d[18] !== x || d[19] !== C ? (c = x ? (0, a.jsx)(eG.a, {
                color: "secondary",
                onClick: () => void C(),
                children: (0, a.jsx)(_.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message",
                    description: "Button to retry loading the full conversation for a link to an older message"
                })
            }) : null, d[18] = x, d[19] = C, d[20] = c) : c = d[20], c
        }
        var rS = n("ckwE");

        function rE(e) {
            let t, n = (0, s.c)(3),
                {
                    children: r
                } = e,
                [o] = (0, b.useState)(rP);
            return n[0] !== o || n[1] !== r ? (t = (0, a.jsx)(eT.a, {
                value: o,
                children: r
            }), n[0] = o, n[1] = r, n[2] = t) : t = n[2], t
        }

        function rP() {
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

        function rA(e) {
            let t, n = (0, s.c)(2),
                {
                    children: r
                } = e;
            return n[0] !== r ? (t = (0, a.jsx)(rS.a, {
                children: (0, a.jsx)(rE, {
                    children: r
                })
            }), n[0] = r, n[1] = t) : t = n[1], t
        }
        var rM = n("MDmT"),
            rk = n("K45w"),
            rR = n("jCHb"),
            rN = n("V8uZ");

        function rO(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var rG = n("NqfB"),
            rB = n("JEFL"),
            rz = n("moBM");
        let rL = '[data-markdown-text-style="assistant-message"]',
            rF = (0, p.d)(eo.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: s
                } = t;
                return null == a ? null : s(F.L, n)?.[a]?.message ?? null
            });

        function rD(e) {
            let t, n, r = (0, s.c)(5),
                o = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return r[0] !== e ? (t = t => (0, a.jsx)(rH, {
                ...e,
                selection: t
            }), r[0] = e, r[1] = t) : t = r[1], r[2] !== o || r[3] !== t ? (n = (0, a.jsx)(rG.a, {
                align: "start",
                targetSelector: o,
                children: t
            }), r[2] = o, r[3] = t, r[4] = n) : n = r[4], n
        }

        function rH(e) {
            let t, r, o, i, l, c, d, u = (0, s.c)(30),
                {
                    conversationId: h,
                    moreDetailsEnabled: m,
                    onAddSelectedText: g,
                    selection: f
                } = e,
                v = (0, p.y)(D.a),
                y = (0, C.a)(),
                b = (0, tT.h)("4290238484"),
                x = (0, tT.h)("473637331"),
                _ = (0, p.z)(rz.a),
                I = (0, p.x)(F.x, h);
            u[0] !== I || u[1] !== _ || u[2] !== v ? (t = _ && "tpp" === I && "chatgpt-thread" === v.value.routeKind && null == v.value.workSideChat && !0, u[0] = I, u[1] = _, u[2] = v, u[3] = t) : t = u[3];
            let w = t;
            u[4] !== h || u[5] !== f.selectionRange ? (r = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, s = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, r = a?.closest(rL);
                if (n.collapsed || null == r || !r.isConnected || r !== s?.closest(rL)) return null;
                let o = r.parentElement,
                    i = o?.getAttribute("data-chatgpt-selection-message-id");
                return !i || o?.getAttribute("data-chatgpt-selection-conversation-id") !== t || [...r.querySelectorAll('[data-writing-block-variant], [data-conversation-component="learning"], [contenteditable="true"], [data-markdown-copy="exclude"]')].some(e => n.intersectsNode(e)) ? null : {
                    markdownElement: r,
                    messageId: i
                }
            }({
                conversationId: h,
                range: f.selectionRange
            }), u[4] = h, u[5] = f.selectionRange, u[6] = r) : r = u[6];
            let T = r,
                j = T?.messageId ?? null;
            u[7] !== h || u[8] !== j ? (o = {
                conversationId: h,
                messageId: j
            }, u[7] = h, u[8] = j, u[9] = o) : o = u[9];
            let S = (0, p.x)(rF, o),
                E = (0, p.x)(F.j, h),
                P = b && m && null != E && null != T && S?.author.role === "assistant";
            return u[10] !== w || u[11] !== v ? (i = w ? e => {
                n.e(971224).then(n.bind(n, "f8of")).then(t => {
                    let {
                        createAndOpenWorkSideChat: n
                    } = t;
                    return n(v, {
                        target: "right",
                        selectedText: e
                    })
                })
            } : void 0, u[10] = w, u[11] = v, u[12] = i) : i = u[12], u[13] !== P || u[14] !== x || u[15] !== g || u[16] !== f.selectionRange || u[17] !== T ? (l = !P || x ? e => {
                g(e, T?.messageId, null == T ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let s of nR(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, s)) break;
                        a++
                    }
                    return a
                }(T.markdownElement, f.selectionRange, e))
            } : void 0, u[13] = P, u[14] = x, u[15] = g, u[16] = f.selectionRange, u[17] = T, u[18] = l) : l = u[18], u[19] !== P || u[20] !== h || u[21] !== y || u[22] !== v || u[23] !== T ? (c = P ? e => {
                Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(753405), n.e(585419), n.e(877700), n.e(636463), n.e(81461), n.e(42239), n.e(62441), n.e(242986), n.e(741325), n.e(16212), n.e(741494), n.e(496135)]).then(n.bind(n, "zRlR")).then(t => {
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
                        shouldBlockExternalEgress: v.get(na.d, h),
                        sourceConversationId: h
                    })
                })
            } : void 0, u[19] = P, u[20] = h, u[21] = y, u[22] = v, u[23] = T, u[24] = c) : c = u[24], u[25] !== f.selectedText || u[26] !== i || u[27] !== l || u[28] !== c ? (d = (0, a.jsx)(rB.a, {
                conversationTerminology: "chat",
                selectedText: f.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), u[25] = f.selectedText, u[26] = i, u[27] = l, u[28] = c, u[29] = d) : d = u[29], d
        }
        var rW = n("Fjze");

        function rU(e) {
            let t, n, a, r = (0, s.c)(7),
                {
                    sharedConversationId: o
                } = e,
                i = (0, p.y)(eo.a),
                l = null != o;
            r[0] !== i || r[1] !== o ? (t = () => {
                null != o && (sO.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: o
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(rq), (0, ed.a)(i, rW.a, {
                    sharedConversationId: o
                }))
            }, r[0] = i, r[1] = o, r[2] = t) : t = r[2];
            let c = (0, b.useEffectEvent)(t);
            return r[3] !== c ? (n = () => {
                c()
            }, r[3] = c, r[4] = n) : n = r[4], r[5] !== l ? (a = [l], r[5] = l, r[6] = a) : a = r[6], (0, b.useEffect)(n, a), null
        }

        function rq() {}
        var rK = n("GigQ"),
            rV = n("JKdL"),
            rY = n("gsAl"),
            rZ = n("HOLv"),
            r$ = n("FGv0"),
            rQ = n("r9i9"),
            rJ = n("vlt6"),
            rX = n("SEBt"),
            r0 = n("uQqo"),
            r1 = n("vpB7");

        function r2(e) {
            let t, n, r, o, i, l = (0, s.c)(12),
                {
                    data: c
                } = e,
                d = (0, p.y)(eo.a),
                u = (0, C.a)();
            l[0] !== u ? (t = u.formatMessage(nm.a.headerShare), l[0] = u, l[1] = t) : t = l[1];
            let h = t,
                [m, g] = (0, b.useState)(!1);
            return l[2] !== c || l[3] !== m || l[4] !== d ? (n = () => {
                m || (g(!0), r3(d, c).finally(() => g(!1)))
            }, l[2] = c, l[3] = m, l[4] = d, l[5] = n) : n = l[5], l[6] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, a.jsx)(rZ.a, {
                asset: r1.a
            }), o = (0, a.jsx)(_.a, {
                ...nm.a.headerShare
            }), l[6] = r, l[7] = o) : (r = l[6], o = l[7]), l[8] !== m || l[9] !== h || l[10] !== n ? (i = (0, a.jsxs)(eG.a, {
                "aria-label": h,
                color: "ghostActive",
                loading: m,
                size: "toolbar",
                onClick: n,
                children: [r, o]
            }), l[8] = m, l[9] = h, l[10] = n, l[11] = i) : i = l[11], i
        }
        async function r3(e, t) {
            let a = t.sharedPost,
                s = a?.attachments[0]?.kind === "media_generation" ? (0, r0.a)(a, (0, r0.b)(a))[0] : null,
                r = crypto.randomUUID();
            (0, rX.b)(e, {
                attachmentType: t.attachmentType,
                contentType: t.contentType,
                shareId: t.shareId,
                shareSessionId: r
            });
            let o = t.dialogProps.receiverShareLink;
            if (o?.contentType === "conversation") {
                let a = (0, rX.a)(e, {
                        actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                        shareId: t.shareId,
                        shareSessionId: r,
                        source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                        usedExistingLink: !0,
                        omitSheetType: !0
                    }),
                    s = await (0, r$.a)(Promise.resolve(o.shareLinkUrl));
                if (a({
                        result: s ? "link-copied" : "copy-failed",
                        shareId: t.shareId
                    }), s) {
                    let {
                        showConversationShareCopiedToast: t
                    } = await n.e(555532).then(n.bind(n, "euaP"));
                    t(e, null, !0 === o.isWorkspaceOnly)
                } else(0, sN.f)(e, rJ.a, {
                    ...t.dialogProps,
                    recoveryShareLink: o,
                    shareSessionId: r
                });
                return
            }(0, sN.f)(e, rJ.a, {
                ...t.dialogProps,
                image: s?.src == null ? void 0 : {
                    alt: t.dialogProps.title ?? "",
                    item: s,
                    previewSrc: s.src
                },
                previewTurns: null != s ? void 0 : (0, rQ.i)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId),
                privacyNotices: (0, rQ.j)({
                    conversation: t.conversation,
                    projectId: null
                }),
                shareSessionId: r
            })
        }
        var r4 = n("JUxu");
        let r6 = (0, b.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function r5(e) {
            let t, n, r, o, i = (0, s.c)(8),
                {
                    sharedConversationId: l
                } = e,
                c = (0, p.y)(eo.a);
            if (null != (0, p.x)(rY.d, (0, b.useContext)(N.a))) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(r4.a, {}), i[0] = e) : e = i[0], e
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
                (0, sN.f)(c, r6, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, rX.c)(c, l)
            }, i[2] = c, i[3] = l, i[4] = n) : n = i[4], i[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, a.jsx)(_.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation",
                description: "Button above a shared ChatGPT conversation in Codex Desktop that opens ChatGPT's report modal for reporting another person's shared conversation"
            }), i[5] = r) : r = i[5], i[6] !== n ? (o = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(eG.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: r
                })]
            }), i[6] = n, i[7] = o) : o = i[7], o
        }
        var r8 = n("zbjM"),
            r7 = n("Xslx"),
            r9 = n("MVHH"),
            oe = n("xSOA"),
            ot = n("rhKI"),
            on = n("PP3M"),
            oa = n("CFOe"),
            os = n("JNtf"),
            or = n("mUDD");

        function oo(e) {
            let t, n, r, o, i, l, c, d, u, h, p, m, g, f = (0, s.c)(31),
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
            let I = !y;
            f[4] !== v || f[5] !== C ? (r = e => {
                e.preventDefault(), v && C()
            }, f[4] = v, f[5] = C, f[6] = r) : r = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(os.e, {
                children: (0, a.jsx)(_.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?",
                    description: "Title of the confirmation dialog for converting a temporary ChatGPT conversation into a regular saved chat."
                })
            }), f[7] = o) : o = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(or.e, {
                children: (0, a.jsx)(or.d, {
                    className: "select-none",
                    title: o,
                    subtitle: (0, a.jsx)(os.d, {
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
            }), f[12] = c) : c = f[12], f[13] !== y || f[14] !== l ? (d = (0, a.jsx)(eG.a, {
                color: "secondary",
                disabled: y,
                onClick: l,
                children: c
            }), f[13] = y, f[14] = l, f[15] = d) : d = f[15];
            let w = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(_.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save",
                description: "Primary button that saves a temporary ChatGPT conversation to regular chat history."
            }), f[16] = u) : u = f[16], f[17] !== y || f[18] !== w ? (h = (0, a.jsx)(eG.a, {
                color: "primary",
                disabled: w,
                loading: y,
                type: "submit",
                children: u
            }), f[17] = y, f[18] = w, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(or.e, {
                children: (0, a.jsxs)(or.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== r ? (m = (0, a.jsxs)(or.b, {
                as: "form",
                onSubmit: r,
                children: [i, p]
            }), f[23] = p, f[24] = r, f[25] = m) : m = f[25], f[26] !== y || f[27] !== m || f[28] !== n || f[29] !== I ? (g = (0, a.jsx)(os.b, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: I,
                size: "narrow",
                children: m
            }), f[26] = y, f[27] = m, f[28] = n, f[29] = I, f[30] = g) : g = f[30], g
        }

        function oi(e) {
            (0, nL.e)(e).catch(() => {
                t5.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function ol(e) {
            let t, n = (0, s.c)(2),
                {
                    conversationId: r
                } = e;
            return n[0] !== r ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(oc, {
                        conversationId: r
                    })
                })]
            }), n[0] = r, n[1] = t) : t = n[1], t
        }

        function oc(e) {
            let t, n = (0, s.c)(2),
                {
                    conversationId: r
                } = e;
            return (0, p.z)(on.e) ? (n[0] !== r ? (t = (0, a.jsx)(od, {
                conversationId: r
            }), n[0] = r, n[1] = t) : t = n[1], t) : null
        }

        function od(e) {
            let t, n, r, o, i, l, c, d, u, h, m, g, f, v = (0, s.c)(49),
                {
                    conversationId: y
                } = e,
                x = (0, p.y)(eo.a),
                w = (0, C.a)(),
                T = (0, I.Z)(),
                [j, S] = (0, b.useState)(!1),
                [E, P] = (0, b.useState)(!1),
                [A, M] = (0, b.useState)(!1),
                [k, R] = (0, b.useState)(!1),
                N = (0, b.useRef)(!1),
                O = (0, p.z)(sF.p).data,
                G = (0, p.x)(F.j, y),
                B = (0, p.x)(F.W, y),
                z = (0, p.x)(F.H, y),
                L = (0, p.x)(ny.i, y);
            v[0] !== y || v[1] !== x ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (x.get(F.H, y) || x.get(ny.i, y) || t !== x.get(F.j, y) || n !== x.get(F.W, y)) throw Error("Cannot save an unavailable temporary chat message");
                    return sO.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: og
                    }).then(om)
                },
                retry: op
            }, v[0] = y, v[1] = x, v[2] = t) : t = v[2];
            let {
                mutateAsync: D,
                isPending: H
            } = (0, oe.a)(t), W = null != G && null != B && !z && !L && !H && !E;
            v[3] !== w ? (n = w.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat",
                description: "Tooltip and accessible label for the bookmark button in a temporary ChatGPT conversation. Opens a confirmation dialog to save it to regular history."
            }), v[3] = w, v[4] = n) : n = v[4];
            let U = n;
            v[5] !== O?.eligibleAnnouncements ? (r = O?.eligibleAnnouncements?.includes(sF.h), v[5] = O?.eligibleAnnouncements, v[6] = r) : r = v[6];
            let q = !0 === r,
                K = !k && (A || q && W);
            v[7] !== y || v[8] !== A || v[9] !== x || v[10] !== K ? (o = () => {
                if (!K || A || N.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || N.current || (N.current = !0, (0, ed.a)(x, r9.ub, {
                        personalizationMode: (0, ot.a)((0, on.k)(x, y))
                    }), M(!0), oi(x))
                }), () => {
                    e = !0
                }
            }, i = [y, A, x, K], v[7] = y, v[8] = A, v[9] = x, v[10] = K, v[11] = o, v[12] = i) : (o = v[11], i = v[12]), (0, b.useEffect)(o, i), v[13] !== x ? (l = () => {
                R(!0), N.current || (N.current = !0, oi(x))
            }, v[13] = x, v[14] = l) : l = v[14];
            let V = l;
            v[15] !== W || v[16] !== y || v[17] !== w || v[18] !== T || v[19] !== D || v[20] !== x || v[21] !== B || v[22] !== G ? (c = async function() {
                let e;
                if (!W || null == G || null == B) return;
                let t = (0, ot.a)((0, on.k)(x, y));
                (0, ed.a)(x, r9.vb, {
                    personalizationMode: t
                });
                try {
                    e = (await D({
                        sourceConversationId: G,
                        selectedLeafId: B
                    })).conversation_id
                } catch (e) {
                    (0, ed.a)(x, r9.wb, {
                        personalizationMode: t,
                        failureCategory: (0, ot.b)(e)
                    }), x.get(er.f).danger(w.formatMessage({
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
                P(!0), S(!1), (0, sK.H)(x), (0, sK.K)(x, G, "remove"), (0, sK.K)(x, e, "refresh"), T((0, ac.c)(e), {
                    replace: !0
                }), x.get(er.f).success(w.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history.",
                    description: "Success toast confirming that a formerly temporary ChatGPT conversation is now saved in regular history."
                })), sO.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: B
                    }
                }).then(oh).then(t => {
                    (0, F._b)({
                        scope: x,
                        conversationId: e,
                        title: t
                    }), x.query.setData(nL.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, sK.H)(x), (0, sK.K)(x, e, "refresh")
                }).catch(ou)
            }, v[15] = W, v[16] = y, v[17] = w, v[18] = T, v[19] = D, v[20] = x, v[21] = B, v[22] = G, v[23] = c) : c = v[23];
            let Y = c,
                Z = !W;
            v[24] !== y || v[25] !== x || v[26] !== K ? (d = () => {
                (0, ed.a)(x, r9.yb, {
                    personalizationMode: (0, ot.a)((0, on.k)(x, y)),
                    coachMarkVisible: K
                }), S(!0)
            }, v[24] = y, v[25] = x, v[26] = K, v[27] = d) : d = v[27], v[28] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(e6.b, {
                icon: {
                    16: nX.pb,
                    20: nX.qb
                }
            }), v[28] = u) : u = v[28], v[29] !== U || v[30] !== Z || v[31] !== d ? (h = (0, a.jsx)(eG.a, {
                "aria-label": U,
                color: "toolbar",
                disabled: Z,
                size: "toolbar",
                uniform: !0,
                onClick: d,
                children: u
            }), v[29] = U, v[30] = Z, v[31] = d, v[32] = h) : h = v[32];
            let $ = h;
            return v[33] !== V || v[34] !== w || v[35] !== U || v[36] !== $ || v[37] !== K ? (m = K ? (0, a.jsx)(oa.a, {
                align: "end",
                description: (0, a.jsx)(_.a, {
                    id: "chatgptConversations.temporaryChat.save.coachmark.description",
                    defaultMessage: "Want to keep this chat? You can now save it to your history.",
                    description: "Body of a one-time onboarding coachmark anchored to the Save chat button after a user creates an eligible temporary chat."
                }),
                dismissLabel: w.formatMessage({
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
            }) : (0, a.jsx)(nJ.a, {
                content: U,
                children: $
            }), v[33] = V, v[34] = w, v[35] = U, v[36] = $, v[37] = K, v[38] = m) : m = v[38], v[39] !== W || v[40] !== y || v[41] !== Y || v[42] !== j || v[43] !== H || v[44] !== x ? (g = j ? (0, a.jsx)(oo, {
                canSave: W,
                isPending: H,
                onCancel: () => {
                    (0, ed.a)(x, r9.tb, {
                        personalizationMode: (0, ot.a)((0, on.k)(x, y))
                    })
                },
                onClose: () => S(!1),
                onSave: () => void Y()
            }) : null, v[39] = W, v[40] = y, v[41] = Y, v[42] = j, v[43] = H, v[44] = x, v[45] = g) : g = v[45], v[46] !== m || v[47] !== g ? (f = (0, a.jsxs)(a.Fragment, {
                children: [m, g]
            }), v[46] = m, v[47] = g, v[48] = f) : f = v[48], f
        }

        function ou() {}

        function oh(e) {
            return nb.object({
                title: nb.string()
            }).parse(e).title
        }

        function op(e, t) {
            return e < 1 && t instanceof tz.a && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function om(e) {
            return nb.object({
                conversation_id: nb.string().min(1)
            }).parse(e)
        }

        function og(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var of = n("Sd4O");
        let ov = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(of.a, e);
            return null != a && n(H.c, a).data?.automation.plan_type === "language_learning"
        });
        var oy = n("AORd"),
            ob = n("J8FU"),
            ox = n("vpdG"),
            oC = n("OiCI"),
            o_ = n("Sd8U"),
            oI = n("FNgK"),
            ow = n("nD1x");

        function oT(e) {
            let t, n, a = (0, s.c)(6),
                {
                    conversationId: r,
                    shouldBlockExternalEgress: o,
                    widgets: i
                } = e,
                l = (0, p.y)(o_.a);
            return a[0] !== r || a[1] !== l || a[2] !== o || a[3] !== i ? (t = () => {
                let e = new Map(i.map(e => [(0, ax.e)(r, e.messageId), e]));
                return l.watch(t => {
                    let {
                        get: n
                    } = t, a = n(oC.b), s = n(O.j);
                    for (let t of n(am.k).keys()) {
                        let i = e.get(t);
                        if (null == i) continue;
                        let c = !0 === i.metadata.is_widget_closed || n(ow.a, {
                                accountId: a,
                                userId: s,
                                conversationId: r,
                                messageId: i.messageId
                            }),
                            d = "hidden" === i.sessionPresentation,
                            u = "tombstone" === i.sessionPresentation,
                            h = i.replacementMessageId;
                        if (o || c || !d && !u || null == h || n(ow.a, {
                                accountId: a,
                                userId: s,
                                conversationId: r,
                                messageId: h
                            }) || (0, oI.b)(l, t, (0, ax.e)(r, h)), c || d) {
                            (0, am.z)(l, t);
                            continue
                        }
                        let p = l.get(am.k).get(t),
                            m = p?.content.mcpAppHostAdapter;
                        null != p && null != m && (m.isTombstone !== u && (0, am.y)(l, {
                            mcpAppId: t,
                            hostedInThreadScrollLayout: p.hostedInThreadScrollLayout,
                            inlineFrameContainer: p.inlineFrameContainer,
                            ...p.content,
                            mcpAppHostAdapter: {
                                ...m,
                                isTombstone: u
                            }
                        }), u && null != p.sessionId && (0, am.D)(l, p.sessionId, {
                            displayMode: "inline"
                        }))
                    }
                })
            }, n = [r, l, o, i], a[0] = r, a[1] = l, a[2] = o, a[3] = i, a[4] = t, a[5] = n) : (t = a[4], n = a[5]), (0, b.useLayoutEffect)(t, n), null
        }
        var oj = n("JVSG"),
            oS = {
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
            oE = n("dNAN");
        let oP = (0, p.v)(eo.a, e => null);

        function oA() {
            let e, t, n, r, o, i, l, c, d, u, h, m = (0, s.c)(30),
                g = (0, I.ab)() ?? 0,
                {
                    conversationId: f
                } = (0, I.bb)(),
                {
                    search: v,
                    state: y
                } = (0, I.X)(),
                b = (0, p.x)(nt.a, f ?? null),
                x = y?.archivedConversationPreview === !0;
            if (null == f) {
                let e;
                return m[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(I.l, {
                    to: "/",
                    replace: !0
                }), m[0] = e) : e = m[0], e
            }
            m[1] !== b || m[2] !== f ? (e = b ?? (0, aV.d)(f), m[1] = b, m[2] = f, m[3] = e) : e = m[3];
            let C = e;
            m[4] !== v ? (t = (0, ac.f)(v), m[4] = v, m[5] = t) : t = m[5];
            let _ = t;
            m[6] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(T.a, {}), r = (0, a.jsx)(e0.a.Surface, {}), m[6] = n, m[7] = r) : (n = m[6], r = m[7]), m[8] !== x ? (o = null, m[8] = x, m[9] = o) : o = m[9], m[10] !== C || m[11] !== x || m[12] !== _ ? (i = _ || x ? null : (0, a.jsx)(nf, {
                conversationId: C
            }), m[10] = C, m[11] = x, m[12] = _, m[13] = i) : i = m[13];
            let w = `${C}:${_}`;
            m[14] === Symbol.for("react.memo_cache_sentinel") ? (l = void 0, m[14] = l) : l = m[14], m[15] !== C || m[16] !== x || m[17] !== _ || m[18] !== w || m[19] !== g ? (c = (0, a.jsx)(ok, {
                conversationId: C,
                viewActivation: g,
                isArchivedPreview: x,
                isReadOnlyPreview: !1,
                banner: l,
                isTemporaryChat: _,
                sharedConversationId: null
            }, w), m[15] = C, m[16] = x, m[17] = _, m[18] = w, m[19] = g, m[20] = c) : c = m[20], m[21] !== o || m[22] !== i || m[23] !== c ? (d = (0, a.jsxs)(a.Fragment, {
                children: [n, r, o, i, c]
            }), m[21] = o, m[22] = i, m[23] = c, m[24] = d) : d = m[24];
            let j = d;
            return m[25] !== j ? (u = j, m[25] = j, m[26] = u) : u = m[26], m[27] !== C || m[28] !== u ? (h = (0, a.jsx)(au, {
                conversationId: C,
                children: u
            }), m[27] = C, m[28] = u, m[29] = h) : h = m[29], h
        }

        function oM() {
            let e, t, n, r = (0, s.c)(7),
                {
                    sharedConversationId: o
                } = (0, I.bb)();
            if (null == o) {
                let e;
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(I.l, {
                    to: "/",
                    replace: !0
                }), r[0] = e) : e = r[0], e
            }
            r[1] !== o ? (e = (0, aV.d)(o), r[1] = o, r[2] = e) : e = r[2];
            let i = e;
            return r[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(e0.a.Surface, {}), r[3] = t) : t = r[3], r[4] !== i || r[5] !== o ? (n = (0, a.jsxs)(a.Fragment, {
                children: [t, (0, a.jsx)(ok, {
                    conversationId: i,
                    isTemporaryChat: !1,
                    sharedConversationId: o
                }, o)]
            }), r[4] = i, r[5] = o, r[6] = n) : n = r[6], n
        }

        function ok(e) {
            let t, n, i, l, c, d, u, x, _, T, k, R, z, L, H, W, U, q, K, V, Y, Z, $, Q, J, ea, es, eo, ei, el, ec, eu, eh, ep, em, eg, ef, ev, ey, eb, eC, e_, eI, ew, eT, ej, eS, eE, eP, eA, eG, eB, ez, eL, eF, eD, eH, eW, eU, eq, eK, eY, eJ, eX, e0, e1, e2, e3, e4, tt, tn, ta, ts, tr, tv, tb, tw, tP, tN, tB, nl, nd, nu, nh, np, nm = (0, s.c)(666),
                {
                    conversationId: ng,
                    viewActivation: nf,
                    isArchivedPreview: nb,
                    isInlinePreview: nx,
                    hideModelPicker: nC,
                    disableAutoFocus: n_,
                    hideInitialUserMessage: nI,
                    transcriptPresentation: nw,
                    scrollOrigin: nT,
                    isReadOnlyPreview: nj,
                    onSubmitAccepted: nS,
                    isTemporaryChat: nE,
                    sharedConversationId: nP,
                    sharedPostContinuation: nA,
                    requiredSystemHints: nM,
                    routePattern: nk,
                    composerLeadingContent: nR,
                    header: nN,
                    banner: nO,
                    onRetryMissingConversation: nG,
                    sharedProjectConversation: nD,
                    workspace: nW
                } = e,
                nU = void 0 === nf ? 0 : nf,
                nq = void 0 !== nb && nb,
                nK = void 0 !== nx && nx,
                nV = (0, p.y)(D.a),
                nY = (0, b.useContext)(N.a),
                nZ = (0, p.x)(rY.d, nY),
                n$ = (0, p.z)(!!(void 0 !== nA && nA && null != nZ && (0, rY.b)(nZ) && (nZ.web_image_attachments?.length ?? 0) > 0) && B.a);
            nm[0] !== nY || nm[1] !== ng ? (t = {
                auth: nY,
                conversationId: ng
            }, nm[0] = nY, nm[1] = ng, nm[2] = t) : t = nm[2];
            let nQ = (0, p.x)(null != nY && !nY.isLoading && null === nY.authMethod && rY.f, t),
                {
                    conversationId: nJ
                } = (0, I.bb)();
            nm[3] !== ng || nm[4] !== nK || nm[5] !== nJ || nm[6] !== nV || nm[7] !== nW ? (n = () => (0, aV.e)(nK || null != nW || null == nV.get(F.j, ng) ? ng : nJ ?? ""), nm[3] = ng, nm[4] = nK, nm[5] = nJ, nm[6] = nV, nm[7] = nW, nm[8] = n) : n = nm[8];
            let [nX, n0] = (0, b.useState)(n);
            nm[9] !== nX || nm[10] !== ng ? (i = () => nX ? ng : null, nm[9] = nX, nm[10] = ng, nm[11] = i) : i = nm[11];
            let [n2] = (0, b.useState)(i), n3 = null != nP || null != nZ && !n$;
            nm[12] !== ng || nm[13] !== nq || nm[14] !== nK || nm[15] !== n3 || nm[16] !== nV ? (c = () => {
                if (!n3 && !nq && !nK) return function(e, t) {
                    let n = e.get(nt.a, t) ?? t,
                        a = e.get(et.b, t),
                        s = e.get(no, n),
                        r = null;
                    null != a && s?.attemptId === a && (r = s);
                    let o = {
                            attemptId: a,
                            observedTurn: r?.observedTurn ?? !1,
                            activeRequestId: r?.activeRequestId ?? null,
                            dismissed: r?.dismissed ?? !1,
                            initialCreationMessageIds: r?.initialCreationMessageIds ?? new Set,
                            openedCreatedPage: r?.openedCreatedPage ?? !1
                        },
                        i = e.get(tY.i),
                        l = o.observedTurn,
                        c = null;

                    function d(t) {
                        for (let n of t.toReversed())
                            if (!o.initialCreationMessageIds.has(n.messageId) && (0, t3.openSpacePageSidePanelTab)(e, n.pageId, {
                                    title: n.title
                                }).opened) {
                                o.openedCreatedPage = !0;
                                break
                            }
                    }
                    let u = e.watch(n => {
                        let {
                            get: a
                        } = n, s = a(F._, t), r = a(tY.i), u = a(F.ab, t);
                        if ((0, F.zb)(s)) {
                            l = !1;
                            let e = a(et.b, t),
                                n = a(F.bb, t),
                                s = !o.observedTurn || o.attemptId !== e;
                            if (o.attemptId = e, s) {
                                let e = c;
                                c = null, e?.abort(), o.observedTurn = !0, o.activeRequestId = n, o.dismissed = u, o.openedCreatedPage = !1
                            } else o.activeRequestId = n ?? o.activeRequestId, o.dismissed = o.dismissed || u || i && !r;
                            i = r;
                            let h = !u && !o.dismissed && !r && !o.openedCreatedPage && !a(D.h) && !a(F.C, t) && !a(na.d, t),
                                p = [];
                            if ((s || h) && (p = a(F.P, t) ?? []), s) {
                                o.initialCreationMessageIds = new Set(p.map(e => e.messageId));
                                return
                            }
                            h && d(p);
                            return
                        }
                        if (!o.observedTurn) return;
                        let h = a(F.v, t);
                        if ("idle" !== s || u || null != h && "completed" !== h.result || null != e.get(F.C, t) || e.get(D.h) || e.get(na.d, t)) {
                            o.observedTurn = !1;
                            return
                        }
                        if (l) {
                            if (o.dismissed || r || o.openedCreatedPage || a(et.b, t) !== o.attemptId) {
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
                            f = m.findLast(nr.b);
                        if (f?.status !== "finished_successfully") return;
                        let v = [...(0, nn.e)(m).outputs, ...m.flatMap(e => (0, nn.c)(e).map(e => e.file))],
                            y = e.get(t7.a, t)?.at(-1);
                        if (y?.turn.status !== "complete") return;
                        let b = [...(0, t$.a)(m), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, tZ.a)(e, b, !o.dismissed) || !o.dismissed && !o.openedCreatedPage && (0, t4.a)(e, b)) && !o.dismissed && !r && !o.openedCreatedPage) {
                            for (let t of (0, t2.c)((0, g.d)(f)).toReversed())
                                if ((0, t3.openSpacePageSidePanelTab)(e, t.id, {
                                        blockId: t.blockId
                                    }).opened) return;
                            if ((0, ns.canOpenChatGptFilePreview)({
                                    browserPreview: !0
                                })) {
                                for (let n of y.turn.items)
                                    if ("assistant-message" === n.type && n.completed)
                                        for (let [a, s] of n.contentReferences.entries()) {
                                            let r = (0, t9.a)(s),
                                                o = null == r ? null : (0, tQ.a)(r),
                                                i = v.find(e => null != e.fileId && e.fileId === (s.file_id ?? s.id) || null != e.libraryFileId && e.libraryFileId === s.library_file_id);
                                            if ("file" !== s.type || !(0, tV.a)(s) || null == r || null == o || !(0, tQ.e)(o) || null == i && null == (0, ne.b)(s.sandbox_path) && !(0, ne.b)(s.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > t0.a) continue;
                                            let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                d = (0, t8.b)(s, {
                                                    fileName: r,
                                                    messageId: l
                                                });
                                            if (null == d) continue;
                                            if (e.get(tj.e)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let u = e.get(F.j, t) ?? t,
                                                h = `${l??"message"}:${String(a)}:${r}`,
                                                p = `chatgpt-file:${u}:${h}`,
                                                g = {
                                                    turnId: y.id,
                                                    inputMessageId: m.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: l ?? null
                                                },
                                                f = new AbortController,
                                                b = (0, ns.openChatGptFile)(e, {
                                                    conversationId: u,
                                                    fileName: r,
                                                    gizmoId: e.get(F.R, t),
                                                    sharedConversationId: e.get(F.Y, t),
                                                    target: d,
                                                    tabKey: h,
                                                    browserPreview: !0,
                                                    isAccessBlocked: e => e.get(na.d, t),
                                                    downloadFallback: !1,
                                                    openSource: "auto_open",
                                                    originatingTurn: g,
                                                    signal: f.signal,
                                                    onOpened: () => {
                                                        let t = e.get(M.j.activeTab$);
                                                        f.signal.aborted || t?.tabId !== p || t.tabType.kind !== tJ.a || ((0, ed.a)(e, tK.CodexFileOpened, {
                                                            threadId: u,
                                                            turnId: g.turnId,
                                                            inputMessageId: g.inputMessageId ?? void 0,
                                                            messageId: g.messageId ?? void 0,
                                                            fileExtension: (0, tX.c)(r) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, ed.a)(e, tK.CodexWorkspaceFilePreviewAttempted, (0, t1.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: g,
                                                            path: r,
                                                            threadId: u,
                                                            windowType: "browser"
                                                        })), (0, t6.b)(e, p, "auto_open"))
                                                    },
                                                    onClose: () => f.abort()
                                                });
                                            c = f;
                                            let x = e.watch(e => {
                                                let {
                                                    get: n
                                                } = e;
                                                (n(tY.i) && n(M.j.activeTab$)?.tabId !== p || n(na.d, t)) && f.abort()
                                            });
                                            b.catch(e => {
                                                f.signal.aborted || t5.a.debug("Automatic ChatGPT artifact preview could not open", {
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
                        u(), c?.abort(), null != o.attemptId && e.set(no, n, {
                            ...o,
                            attemptId: o.attemptId
                        })
                    }
                }(nV, ng)
            }, l = [ng, nq, nK, n3, nV], nm[12] = ng, nm[13] = nq, nm[14] = nK, nm[15] = n3, nm[16] = nV, nm[17] = l, nm[18] = c) : (l = nm[17], c = nm[18]), (0, b.useEffect)(c, l);
            let n5 = (0, p.x)(aO.a, ng),
                n8 = n3 ? null : n5;
            nm[19] !== nP ? (d = () => null == nP ? null : (0, aV.b)(), nm[19] = nP, nm[20] = d) : d = nm[20];
            let [n7] = (0, b.useState)(d), n9 = n7 ?? ng;
            nm[21] !== n9 ? (u = (0, tx.n)({
                routeKind: "chatgpt-thread",
                conversationId: n9
            }), nm[21] = n9, nm[22] = u) : u = nm[22];
            let at = null != (0, p.x)(ti.c, u);
            nm[23] !== n9 || nm[24] !== nM || nm[25] !== nV ? (x = () => {
                if (null != nM && 0 !== nM.length) return (0, r7.b)(nV, n9, nM)
            }, _ = [n9, nM, nV], nm[23] = n9, nm[24] = nM, nm[25] = nV, nm[26] = x, nm[27] = _) : (x = nm[26], _ = nm[27]), (0, b.useEffect)(x, _);
            let aa = (0, b.useRef)(null),
                [as, ar] = (0, b.useState)(null),
                [ao, ai] = (0, b.useState)(null),
                [ad, au] = (0, b.useState)(null),
                ah = ao?.activation === nU ? ao.messageId : null,
                ap = ad === nU,
                am = (0, b.useRef)(null);
            nm[28] === Symbol.for("react.memo_cache_sentinel") ? (T = () => {
                let e = new AbortController;
                return am.current = e, () => e.abort()
            }, nm[28] = T) : T = nm[28], nm[29] !== nU ? (k = [nU], nm[29] = nU, nm[30] = k) : k = nm[30], (0, b.useLayoutEffect)(T, k);
            let ag = (0, C.a)(),
                af = (0, I.Z)(),
                av = (0, tO.b)(),
                ay = (0, p.x)(F.j, ng);
            nm[31] !== nV ? (R = e => {
                (0, ni.c)(nV, e)
            }, nm[31] = nV, nm[32] = R) : R = nm[32];
            let ab = (0, b.useEffectEvent)(R);
            nm[33] !== ay || nm[34] !== ab ? (z = () => () => {
                null != ay && ab(ay)
            }, nm[33] = ay, nm[34] = ab, nm[35] = z) : z = nm[35], nm[36] !== ay ? (L = [ay], nm[36] = ay, nm[37] = L) : L = nm[37], (0, b.useEffect)(z, L);
            let aC = (0, p.x)(r8.b, ng),
                a_ = (0, p.x)(F.L, ng),
                aI = (0, p.x)(nL.chatGptConversationQueryById$, n3 || nE && null != a_ ? null : ay);
            (0, p.x)(n3 ? null : nH.a, ay);
            let aw = (0, p.x)(!nQ && !n$ && na.d, ng),
                aT = ay ?? ng,
                aj = (0, p.x)(F.B, ng),
                aS = (0, p.x)(F.x, ng),
                aE = (0, p.x)(F.R, ng),
                aP = (0, p.x)(F.C, ng),
                aA = (0, p.x)(F.M, ng),
                aM = (0, p.x)(F._, ng),
                ak = (0, p.x)(F.V, ng),
                aR = (0, p.x)(F.X, ng),
                aN = (0, p.x)(n6.a, ng),
                aG = (0, p.x)(F.D, ng),
                aL = (0, p.x)(F.cb, ng),
                aU = (0, p.x)(F.db, ng),
                aK = (0, p.x)(nL.n, nP),
                aY = (0, b.useRef)(null),
                aZ = aK.isSuccess && null != aK.data ? nP : null;
            nm[38] !== nV ? (H = e => {
                (0, ed.a)(nV, r.h, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, nm[38] = nV, nm[39] = H) : H = nm[39];
            let a$ = (0, b.useEffectEvent)(H);
            nm[40] !== aZ || nm[41] !== a$ ? (W = () => {
                null != aZ && aY.current !== aZ && (aY.current = aZ, a$(aZ))
            }, nm[40] = aZ, nm[41] = a$, nm[42] = W) : W = nm[42], nm[43] !== aZ ? (U = [aZ], nm[43] = aZ, nm[44] = U) : U = nm[44], (0, b.useEffect)(W, U);
            let aQ = (0, p.x)(ny.o, ng),
                aJ = (0, p.x)(ny.p, ng),
                aX = (0, p.x)(ny.m, ng),
                a0 = (0, p.x)(ny.q, ng),
                a3 = (0, p.x)(ny.n, ng),
                so = (0, p.x)(ny.i, ng),
                si = (0, p.x)(F.ab, ng),
                sl = (0, p.x)(ny.z, ng);
            nm[45] !== aM ? (q = (0, F.zb)(aM), nm[45] = aM, nm[46] = q) : q = nm[46];
            let sc = q,
                sd = (0, p.x)(aB, ng),
                su = (0, p.z)(G.t),
                sh = (0, p.z)(G.q),
                sm = (0, p.z)(G.s),
                sg = (0, p.z)(G.l),
                sf = (0, p.z)(G.m),
                sb = (0, p.z)(tu.pagesEnabled$);
            nm[47] === Symbol.for("react.memo_cache_sentinel") ? (K = (0, to.a)(), nm[47] = K) : K = nm[47];
            let sx = (0, tT.h)(K);
            nm[48] === Symbol.for("react.memo_cache_sentinel") ? (V = (0, to.b)(), nm[48] = V) : V = nm[48];
            let s_ = (0, tT.h)(V),
                sw = null != a_,
                sT = (0, p.z)(rI.f),
                sj = n3 ? aK : aI;
            nX && null != sj.data && n0(!1);
            let sS = nX && sw && null == sj.data,
                sE = sj.isLoading || !sS && sj.isError;
            nm[49] !== as || nm[50] !== n9 || nm[51] !== sE || nm[52] !== n3 || nm[53] !== nE || nm[54] !== nV ? (Y = (e, t, n, a) => {
                !(e || nV.get(ty.a)) && ((0, ny.b)(nV, n9, t, void 0, n, a), as?.focus(), n3 || sE || (0, nz.f)(nV, n9, {
                    isTemporaryChat: nE
                }))
            }, nm[49] = as, nm[50] = n9, nm[51] = sE, nm[52] = n3, nm[53] = nE, nm[54] = nV, nm[55] = Y) : Y = nm[55];
            let sP = Y,
                sA = null == nZ ? null : (0, rK.a)(nZ, ng),
                sM = null == sA ? void 0 : (0, rd.a)(sA),
                sk = sA ?? sj.data,
                sR = aG ? aL : sk?.title,
                sN = (0, p.z)(O.g),
                sO = (0, p.z)(O.f),
                sG = "chatgpt-thread" === nV.value.routeKind && nV.value.workSideChat?.conversationId === ng,
                sB = sk?.conversation_origin ?? aS ?? (null != nW || sG ? "tpp" : null),
                sz = "tpp" === sB,
                sL = sz && "denied" === su.status && "go-plan" === su.reason,
                sF = (0, p.z)(tS.d),
                sD = (0, I.X)(),
                sH = sD.state;
            (0, p.z)(t_.b);
            let sW = (0, p.x)(tj.c, "3901104270") && sH?.openGoalPlan === !0,
                sU = (0, b.useContext)(A.c),
                sq = (0, tR.a)(),
                sV = sU?.hasPageSurface === !0,
                sY = "tpp" === sB || "flora" === sB,
                sZ = (0, p.z)(!!sY && G.u),
                s$ = void 0 !== nj && nj || sZ,
                sQ = null == sF || sF.isFullWidth ? void 0 : sF.width ?? 420,
                sJ = !0 === (0, p.z)(sY ? null : tF.d),
                sX = (0, p.z)(sY ? tf.b : tf.a),
                s0 = !sY && sX,
                s1 = !s_ || sf && !sY,
                s3 = !n3 && sf && !sY,
                s6 = s3 && sg,
                s5 = n3 && sk?.is_read_only === !0 || nD?.is_read_only === !0;
            nm[56] !== ng || nm[57] !== n3 || nm[58] !== nV ? (Z = () => null, nm[56] = ng, nm[57] = n3, nm[58] = nV, nm[59] = Z) : Z = nm[59];
            let [s8] = (0, b.useState)(Z), rt = sk?.gizmo_id ?? aE ?? s8?.gizmoId ?? null, rn = n3 || null == rt || (0, al.a)(rt) ? null : rt, ra = (0, p.x)(oP, n9), rr = (0, n1.d)({
                conversation: sk,
                conversationId: ng,
                conversationTitle: aN,
                pathname: sD.pathname,
                sharedConversationId: nP,
                sharedPost: nZ
            }), ro = !sm && null == sk && null == s8, rp = null != ay && !aw && !ro && (sm || sh), rm = null;
            n3 || (rm = null != sk ? (0, sK.B)(sk) : (0, al.a)(aE) ? aE : s8?.projectId ?? null);
            let rg = (0, p.x)(tW.c, n3 ? null : ng),
                rf = n3 || sY || null != rm || rg || null == ra ? rn : ra.id,
                rv = (0, p.x)(rh.d, {
                    gizmoId: rf,
                    conversationId: n9,
                    visitKey: sD.pathname
                }),
                rb = sV || sY || null != rm || null != rn || rg || nE,
                {
                    data: rC
                } = (0, o.a)({
                    enabled: null != rm,
                    queryFn: () => {
                        if (null == rm) throw Error("Expected a ChatGPT project id");
                        return (0, ek.c)(rm)
                    },
                    queryKey: (0, sK.E)(rm ?? ""),
                    staleTime: ex.b.ONE_MINUTE
                }),
                rw = null != rm && (rC?.gizmo.share_recipient !== "private" || (rC?.gizmo.sharing?.subjects?.length ?? 0) > 0),
                rT = sk?.context_scopes?.includes("HEALTH") === !0 || rC?.gizmo.gizmo_snorlax_type === "potion",
                rj = (0, ry.a)(sk?.context_scopes, {
                    projectType: rC?.gizmo.gizmo_snorlax_type,
                    projectId: rm,
                    lockedProjectId: sT?.projectId
                }),
                rS = aw || rw || rT || rj;
            nm[60] !== rC?.gizmo.display.name ? ($ = rC?.gizmo.display.name.trim() || null, nm[60] = rC?.gizmo.display.name, nm[61] = $) : $ = nm[61];
            let rE = $,
                rP = rC?.gizmo.display.theme,
                rk = rC?.gizmo.display.emoji;
            nm[62] !== rC ? (Q = "shared" === (0, aq.b)(rC) ? (0, a.jsx)(e6.b, {
                icon: {
                    assets: {
                        16: oS,
                        20: oE.a
                    }
                }
            }) : void 0, nm[62] = rC, nm[63] = Q) : Q = nm[63], nm[64] !== rP || nm[65] !== rk || nm[66] !== Q ? (J = (0, a.jsx)(tm.a, {
                className: "icon-leading",
                size: "leading",
                color: rP,
                icon: rk,
                sharedIcon: Q
            }), nm[64] = rP, nm[65] = rk, nm[66] = Q, nm[67] = J) : J = nm[67];
            let rR = J,
                rN = (0, p.x)(F.i, ng),
                rO = rN?.metadata ?? sk?.context_truncation_continuation,
                rG = n3 || nE || null != nD || null == sN || sk?.owner?.user_id == null || null == rm || [REDACTED_MAPBOX_ACCESS_TOKEN] === (sO ? sN.split("__")[0] : sN) ? null : (0, s7.d)(rm, sk.conversation_id, [REDACTED_MAPBOX_ACCESS_TOKEN]),
                rB = (0, p.x)(n3 || nq || s$ ? null : rM.b, ng),
                rz = rB?.isReviewing === !0,
                rL = null == rB ? a_ : rB.conversation.mapping,
                rF = null == rB ? aj : rB.conversation.current_node,
                rD = null == a_ ? sk : null;
            nm[68] === Symbol.for("react.memo_cache_sentinel") ? (ea = (0, nF.a)(), nm[68] = ea) : ea = nm[68];
            let rH = ea;
            nm[69] === Symbol.for("react.memo_cache_sentinel") ? (es = new WeakMap, nm[69] = es) : es = nm[69];
            let rW = es;
            nm[70] !== sX || nm[71] !== s0 || nm[72] !== rO || nm[73] !== sB || nm[74] !== rF || nm[75] !== rL || nm[76] !== rD || nm[77] !== nq || nm[78] !== n3 || nm[79] !== sc || nm[80] !== sY || nm[81] !== aA || nm[82] !== aX || nm[83] !== a3 || nm[84] !== aQ || nm[85] !== aJ || nm[86] !== a0 || nm[87] !== rz || nm[88] !== nV.get || nm[89] !== rB?.isEntering || nm[90] !== aC || nm[91] !== aM ? (eo = () => rH({
                conversation: rD,
                contextContinuation: rO,
                clinicalSearchEnabled: s0,
                clinicalCitationsEnabled: sX,
                conversationOrigin: sB,
                enableImageGenerationLoadingState: !n3 && !nq && !rz && "error" !== aM,
                getRenderTelemetry: e => (0, ob.c)(nV.get, e),
                isStreaming: !n3 && !nq && !rz && sc,
                isWorkConversation: sY,
                mode: "conversation",
                mcpResponseCache: rW,
                moderationDisclaimersByMessageId: aA,
                streamingOrders: aC,
                pendingSubmission: null == aQ || n3 || rz || rB?.isEntering ? null : {
                    attachments: aX,
                    commentAttachments: a3,
                    prompt: aQ,
                    renderMarkdown: aJ,
                    selectedTextAttachments: a0
                },
                threadCurrentNode: rF,
                threadMapping: rL
            }), nm[70] = sX, nm[71] = s0, nm[72] = rO, nm[73] = sB, nm[74] = rF, nm[75] = rL, nm[76] = rD, nm[77] = nq, nm[78] = n3, nm[79] = sc, nm[80] = sY, nm[81] = aA, nm[82] = aX, nm[83] = a3, nm[84] = aQ, nm[85] = aJ, nm[86] = a0, nm[87] = rz, nm[88] = nV.get, nm[89] = rB?.isEntering, nm[90] = aC, nm[91] = aM, nm[92] = eo) : eo = nm[92], rB?.isEntering, nm[93] !== eo ? (ei = eo(), nm[93] = eo, nm[94] = ei) : ei = nm[94];
            let {
                isConversationEmpty: rq,
                renderedConversation: rZ,
                renderedTurns: r$,
                showPendingLoadingMessage: rQ
            } = ei;
            nm[95] !== nK || nm[96] !== sY || nm[97] !== rZ || nm[98] !== nV ? (el = () => {
                if (!nK && sY) return nV.set(oj.b, rZ), () => {
                    nV.get(oj.b) === rZ && nV.set(oj.b, null)
                }
            }, ec = [nK, sY, rZ, nV], nm[95] = nK, nm[96] = sY, nm[97] = rZ, nm[98] = nV, nm[99] = el, nm[100] = ec) : (el = nm[99], ec = nm[100]), (0, b.useEffect)(el, ec);
            let rJ = (0, p.x)(tU.g, ng),
                rX = rQ && null == rJ,
                r0 = !sY && !n3 && !nK && !nq,
                r1 = (0, p.x)(s0 || nK || n3 ? null : ee.a, ng),
                r3 = (r1?.length ?? 0) > 0,
                r4 = (0, p.x)(r0 ? et.b : null, ng),
                r6 = JSON.stringify([ng, nU]),
                r5 = (0, p.x)(n3 || nK ? null : ov, ng),
                [r9, oe] = (0, b.useState)(null),
                ot = function(e, t) {
                    let {
                        conversation: n,
                        completionAttemptId: a,
                        allowAutoOpen: s = !0,
                        suppressAutoOpen: r = !1,
                        isTurnActive: o,
                        isPendingUserTurn: i,
                        hasGoal: l = !1,
                        visitKey: c
                    } = t;
                    if (e?.visitKey === c && e.conversation === n && e.completionAttemptId === a && e.allowAutoOpen === s && e.suppressAutoOpen === r && e.isTurnActive === o && e.isPendingUserTurn === i && e.hasGoal === l) return e;
                    let d = null == n ? [] : (0, g.b)(n, eR.k),
                        u = null == e || e.visitKey !== c,
                        h = d.find(eR.k)?.id ?? (u || i ? null : e.userMessageId),
                        p = i ? null : d.findLast(eN)?.id ?? null,
                        m = !u && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != h && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== h),
                        f = new Set(u ? [] : e.observedSummaryRequestIds),
                        v = !u && !m && e.hasConsumedSummaryRequest,
                        y = !v && !u && null != e.conversation && (o || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != p && !f.has(p);
                    if (null != n && (u || null == e.conversation || !o))
                        for (let e of Object.values(n.mapping)) e?.message?.id != null && eN(e.message) && f.add(e.message.id);
                    else null != p && f.add(p);
                    return {
                        visitKey: c,
                        conversation: n,
                        completionAttemptId: a,
                        allowAutoOpen: s,
                        suppressAutoOpen: r,
                        isTurnActive: o,
                        isPendingUserTurn: i,
                        hasGoal: l,
                        observedSummaryRequestIds: f,
                        userMessageId: h,
                        hasConsumedSummaryRequest: v || null != p,
                        isOpen: r ? !u && e.suppressAutoOpen && e.isOpen : s && (l && (u || !e.hasGoal) || y) || !u && (!m || l) && (!e.hasGoal || l) && e.isOpen,
                        shouldPreventAutoFocus: u || m || l && !e.hasGoal || y && !e.isOpen || e.shouldPreventAutoFocus
                    }
                }(r9, {
                    completionAttemptId: r4,
                    allowAutoOpen: !(0, te.a)("(width < 768px)"),
                    suppressAutoOpen: (r5 ?? !1) || sW,
                    conversation: r0 && (sS || !sE) ? rZ : null,
                    isTurnActive: sc,
                    hasGoal: r3,
                    isPendingUserTurn: so && null != aQ && !sc,
                    visitKey: r6
                });
            ot !== r9 && oe(ot);
            let on = null == nW && !r5 && !s0 && !nK && !n3 && (sz || r0) && !nq,
                oa = on && rZ?.mapping === a_ && rZ?.current_node === aj,
                os = (0, p.x)(oa ? F.p : null, ng),
                or = rZ?.mapping,
                oo = rZ?.current_node;
            nm[101] !== or || nm[102] !== oo ? (eu = h()(() => {
                let e = null == or ? [] : (0, g.a)({
                    mapping: or,
                    current_node: oo
                });
                return {
                    messages: e,
                    resources: (0, nn.e)(e)
                }
            }), nm[101] = or, nm[102] = oo, nm[103] = eu) : eu = nm[103];
            let oi = eu;
            nm[104] !== r0 || nm[105] !== so || nm[106] !== on || nm[107] !== sc || nm[108] !== sb || nm[109] !== aX || nm[110] !== oi || nm[111] !== r$ || nm[112] !== os ? (eh = on ? h()(() => (function(e) {
                var t;
                let n, a, {
                        automationReferences: s,
                        includePages: r = !1,
                        includeSources: o = !0,
                        messages: i,
                        pendingAttachments: l = [],
                        resources: c = (0, nn.e)(i),
                        turns: d,
                        isTurnActive: u = d.at(-1)?.turn.status === "in_progress"
                    } = e,
                    h = [...c.inputs],
                    p = o ? (0, st.a)(i, d) : [],
                    m = new Map,
                    f = new Map,
                    v = (t = i, -1 !== (n = a4()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, ss.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    y = [],
                    b = new Map(i.map(e => [(0, g.f)(e), e])),
                    x = a4()(i, e => "user" === e.author.role),
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
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, se.j)(t.metadata) && y.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, se.c)(t.metadata)
                            })
                        }
                    for (let n of sr(t.items)) {
                        if (r && "mcp-tool-call" === n.type) {
                            let e = (0, a7.b)(n);
                            if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                let t = (0, a6.d)(e.url);
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
                        if (r && "assistant-message" === n.type && n.completed)
                            for (let e of (0, t2.c)(n.content)) f.has(e.id) || f.set(e.id, {
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
                let _ = (0, a5.c)(d.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return sr(t.items).filter(e => "mcp-tool-call" === e.type)
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
                    automationIds: (0, a9.b)(i, s ?? void 0),
                    browserScreenshots: (0, sn.c)(i),
                    inputs: h,
                    sourceTurns: y,
                    outputs: a,
                    progressSteps: C,
                    isPlanSummaryUpdating: u && i.slice(x + 1).some(e => "assistant" === e.author.role && a9.a.test(e.recipient ?? "") || "tool" === e.author.role && a9.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${d.at(-1)?.id??""}:${u}`,
                    sources: o ? [...Array.from(new Map(i.filter(e => "user" === e.author.role).flatMap(e => (0, a8.a)((0, g.d)(e))).map(e => [e.projectId, e])).values(), e => ({
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
                    subagents: (0, sa.a)(i, {
                        isTurnLive: d.at(-1)?.turn.status === "in_progress"
                    })?.subagents ?? []
                }
            })({
                automationReferences: os,
                includePages: sb,
                includeSources: !r0,
                isTurnActive: sc || so,
                ...oi(),
                pendingAttachments: so ? aX : [],
                turns: r$
            })) : null, ep = r0 ? eh?.() : null, nm[104] = r0, nm[105] = so, nm[106] = on, nm[107] = sc, nm[108] = sb, nm[109] = aX, nm[110] = oi, nm[111] = r$, nm[112] = os, nm[113] = eh, nm[114] = ep) : (eh = nm[113], ep = nm[114]);
            let oc = ep,
                od = r3 || null != oc && (oc.outputs.length > 0 || oc.progressSteps.length > 0 || oc.automationIds.length > 0 || oc.subagents.length > 0 || !aw && oc.browserScreenshots.length > 0),
                ou = on && (!r0 || od),
                oh = ou && null == sF,
                op = JSON.stringify([r6, null != sF]),
                om = r0 ? ot.isOpen : void 0,
                og = ou && !sF?.isFullWidth;
            nm[115] !== sQ || nm[116] !== op || nm[117] !== om || nm[118] !== og ? (em = {
                contentShiftResetKey: op,
                controlledIsOpen: om,
                isEnabled: og,
                floatingPanelWidth: sQ
            }, nm[115] = sQ, nm[116] = op, nm[117] = om, nm[118] = og, nm[119] = em) : em = nm[119];
            let of = (0, tM.a)(em), oy = ay ?? ng, ox = sz && null == aU, oC = aP ?? sl, o_ = sj.isLoading && !sw, oI = sj.isError && !sS;
            nm[120] !== sj.error || nm[121] !== nK ? (eg = nK || (0, tz.e)(sj.error) || !(sj.error instanceof tz.a && [401, 403, 404].includes(sj.error.status)), nm[120] = sj.error, nm[121] = nK, nm[122] = eg) : eg = nm[122];
            let ow = eg;
            nm[123] !== sj.error || nm[124] !== ng || nm[125] !== oI || nm[126] !== nK || nm[127] !== nV || nm[128] !== nP ? (ef = () => {
                oI && !nK && th.a.loadFailed(nV, ng, nP, sj.error)
            }, ev = [sj.error, ng, oI, nK, nV, nP], nm[123] = sj.error, nm[124] = ng, nm[125] = oI, nm[126] = nK, nm[127] = nV, nm[128] = nP, nm[129] = ef, nm[130] = ev) : (ef = nm[129], ev = nm[130]), (0, b.useEffect)(ef, ev), nm[131] !== ng || nm[132] !== n3 || nm[133] !== ay ? (ey = null, n3 || (ey = ay ?? ((0, aV.e)(ng) ? null : ng)), nm[131] = ng, nm[132] = n3, nm[133] = ay, nm[134] = ey) : ey = nm[134], nm[135] !== ah || nm[136] !== sk || nm[137] !== sB || nm[138] !== ag || nm[139] !== nE || nm[140] !== sY || nm[141] !== sL || nm[142] !== af || nm[143] !== ey || nm[144] !== nk || nm[145] !== nV || nm[146] !== nU ? (eb = (e, t) => {
                let n = void 0 !== t && t;
                if (null == ey || null != ah || sL) return;
                let a = am.current?.signal;
                null == a || a.aborted || (ai({
                    messageId: e,
                    activation: nU
                }), (0, F.h)(nV, {
                    conversationId: ey,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, tD.a)(nV, "opened"), af(null == nk ? (0, ac.c)(t, {
                        isTemporaryChat: nE
                    }) : (0, I.C)(nk, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, tD.a)(nV, "failed"), ai(null), nV.get(er.f).danger(ag.formatMessage({
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
                                surface: (0, ae.b)(null == sB && null == sk ? null : sY),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, nm[135] = ah, nm[136] = sk, nm[137] = sB, nm[138] = ag, nm[139] = nE, nm[140] = sY, nm[141] = sL, nm[142] = af, nm[143] = ey, nm[144] = nk, nm[145] = nV, nm[146] = nU, nm[147] = eb) : eb = nm[147];
            let oA = (0, tG.a)(eb);
            nm[148] !== sk || nm[149] !== ng || nm[150] !== sB || nm[151] !== ag || nm[152] !== sJ || nm[153] !== nE || nm[154] !== sY || nm[155] !== nV || nm[156] !== ay ? (eC = async (e, t, n, a) => {
                if (!sJ) try {
                    await az(nV, {
                        conversationId: ng,
                        isTemporaryChat: nE,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, ae.c)(t);
                    throw nV.get(er.f).danger(ag.formatMessage({
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
                            conversationId: ay ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, ae.b)(null == sB && null == sk ? null : sY),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, nm[148] = sk, nm[149] = ng, nm[150] = sB, nm[151] = ag, nm[152] = sJ, nm[153] = nE, nm[154] = sY, nm[155] = nV, nm[156] = ay, nm[157] = eC) : eC = nm[157];
            let oM = (0, tG.a)(eC);
            nm[158] !== n9 || nm[159] !== sk || nm[160] !== ng || nm[161] !== sB || nm[162] !== ag || nm[163] !== sJ || nm[164] !== nE || nm[165] !== sY || nm[166] !== sL || nm[167] !== af || nm[168] !== nG || nm[169] !== nV || nm[170] !== ay ? (e_ = async (e, t) => {
                if (!sJ && !sL) try {
                    let n = nV.get(an.d, ng);
                    if (n?.startsNewWorkConversation || null == nV.get(F.j, ng) || (0, tq.h)(nV.get(F.T, ng)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, g.d)(n.prompt),
                            s = (0, eM.i)(n.prompt.metadata, a, (0, v.e)(n.prompt.metadata), (0, y.w)(a)),
                            r = (0, eO.a)(n.prompt, a, s),
                            o = nV.get(ny.s, n9),
                            i = "markdown" === r.renderFormat ? r.message : a,
                            l = o.length > 0 ? o : i,
                            c = o.length > 0 ? void 0 : r.renderFormat ?? "plain";
                        if (null != nG) return void await nG(l, c);
                        if (null == nV.get(F.j, ng) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, tg.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${ng}`;
                            (0, eZ.E)(t, (t, n) => n ? t : e) || (0, ny.T)(nV, ng, e), (0, eZ.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, f.a)((0, g.o)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, y.w)(a);
                            (0, e$.m)(nV, "work"), await af("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: o.length > 0 ? o : t,
                                    prefillPromptFormat: o.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (sY && !nE && (0, eV.$)(nV, (0, e8.b)({
                                entrypoint: "home"
                            }))) return void await af("/");
                        let d = (0, g.i)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, aW.f)(nV, d);
                        (0, ny.U)(nV, u, t.model);
                        let h = nV.get(F.R, ng);
                        (0, e$.m)(nV, sY ? "work" : "chat"), await af({
                            pathname: "/",
                            search: (0, ac.d)("", nE)
                        }, {
                            state: {
                                initialChatGptConversationId: u,
                                project: null,
                                chatGptProjectId: (0, al.a)(h) ? h : null,
                                chatGptCustomGptId: (0, al.a)(h) ? null : h,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: sY
                            }
                        });
                        return
                    }
                    await (0, an.g)(nV, {
                        conversationId: ng,
                        isTemporaryChat: nE,
                        messageId: e,
                        retry: t
                    })
                } catch {
                    nV.get(er.f).danger(ag.formatMessage({
                        id: "chatgptConversations.regenerate.failed",
                        defaultMessage: "Failed to regenerate response",
                        description: "Error toast shown when generating another version of a ChatGPT response fails"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.regenerate.failed",
                            operation: "regenerate_response",
                            errorCategory: "conversation",
                            conversationId: ay ?? void 0,
                            userFacingError: {
                                surface: (0, ae.b)(null == sB && null == sk ? null : sY),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, nm[158] = n9, nm[159] = sk, nm[160] = ng, nm[161] = sB, nm[162] = ag, nm[163] = sJ, nm[164] = nE, nm[165] = sY, nm[166] = sL, nm[167] = af, nm[168] = nG, nm[169] = nV, nm[170] = ay, nm[171] = e_) : e_ = nm[171];
            let ok = (0, tG.a)(e_);
            nm[172] !== sk || nm[173] !== ng || nm[174] !== aN || nm[175] !== ag || nm[176] !== ap || nm[177] !== nE || nm[178] !== af || nm[179] !== av || nm[180] !== rm || nm[181] !== nV || nm[182] !== ay || nm[183] !== s8 || nm[184] !== nU ? (eI = () => {
                if (ap || null == ay) return;
                let e = nV.get(G.s);
                if (!e && !nV.get(G.q) || !e && null == sk && null == s8) return;
                let t = am.current?.signal;
                null == t || t.aborted || (au(nU), (e ? (0, nc.f)(nV, {
                    chatGptThreadId: ng,
                    conversationTitle: aN
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, E.a)(nV, e);
                    if ("created" === e.status) return null == n || t.aborted || nV.get(er.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, E.a)(nV, e)
                }) : (0, j.a)({
                    scope: nV,
                    projectId: rm ?? void 0,
                    prompt: `Continuing from ${(0,eQ.f)({conversationId:ay,title:aN?.trim()||"ChatGPT thread"})}`
                }).then(oz)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? av(n) : af((0, ac.c)(n, {
                            isTemporaryChat: nE
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (au(null), nV.get(er.f).danger(ag.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot hand off a conversation to a task"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, nm[172] = sk, nm[173] = ng, nm[174] = aN, nm[175] = ag, nm[176] = ap, nm[177] = nE, nm[178] = af, nm[179] = av, nm[180] = rm, nm[181] = nV, nm[182] = ay, nm[183] = s8, nm[184] = nU, nm[185] = eI) : eI = nm[185];
            let oF = eI;
            nm[186] !== ng || nm[187] !== af || nm[188] !== nV || nm[189] !== n7 || nm[190] !== nP || nm[191] !== nZ ? (ew = () => {
                if (null != nZ) {
                    if ((0, aV.e)(ng)) {
                        let e = (0, rY.a)(nV, nZ, ng);
                        null != e && af((0, ac.c)(e))
                    }
                    return
                }
                let e = nV.query.getData(nL.n, nP);
                null != e && null != nP && null != n7 && ((0, F.mb)(nV, {
                    conversation: e,
                    conversationId: n7,
                    sharedConversationId: nP
                }), af((0, ac.c)(n7)))
            }, nm[186] = ng, nm[187] = af, nm[188] = nV, nm[189] = n7, nm[190] = nP, nm[191] = nZ, nm[192] = ew) : ew = nm[192];
            let oD = (0, tG.a)(ew);
            nm[193] !== nW ? (eT = nW?.mcpAppContext == null ? null : {
                hostId: tC.a,
                server: "codex_apps",
                connectorId: nW.mcpAppContext.id
            }, nm[193] = nW, nm[194] = eT) : eT = nm[194];
            let oH = (0, p.x)(td.b, eT),
                oW = nW?.fullscreenContent != null ? "content" : "workspace",
                oU = (0, X.a)(nK ? "embedded" : oW),
                oq = !oH && (sS || !sj.isError) && !nq && !s$ && (null == nZ || nY?.authMethod === "chatgpt" || n$) && (!n3 || null != sk),
                oK = s$ || s5 || s6 || sL,
                oV = oK || rz || rB?.needsEntry === !0,
                oY = oq && !oK && !n3 && !sE && !sJ && !sc && !so && !si && !rv,
                oZ = !oq || n3 || oV || sE ? null : as;
            if (nm[195] !== rv || nm[196] !== ah || nm[197] !== sX || nm[198] !== s0 || nm[199] !== sk?.current_node || nm[200] !== ng || nm[201] !== rn || nm[202] !== oC || nm[203] !== oA || nm[204] !== oM || nm[205] !== ok || nm[206] !== nI || nm[207] !== nq || nm[208] !== oV || nm[209] !== sE || nm[210] !== rS || nm[211] !== s$ || nm[212] !== n3 || nm[213] !== so || nm[214] !== nE || nm[215] !== sz || nm[216] !== sc || nm[217] !== sY || nm[218] !== s6 || nm[219] !== sL || nm[220] !== n8 || nm[221] !== aX || nm[222] !== ey || nm[223] !== rZ || nm[224] !== r$ || nm[225] !== rz || nm[226] !== ak || nm[227] !== nV.get || nm[228] !== aR || nm[229] !== sA?.current_node || nm[230] !== nD || nm[231] !== oq || nm[232] !== rX || nm[233] !== aC || nm[234] !== sd) {
                let e = (0, nF.c)({
                    paragen: n8,
                    hideInitialUserMessage: nI,
                    browserConversationId: void 0,
                    conversationId: ng,
                    errorMessage: oC,
                    branchingMessageId: ah,
                    isReadOnly: nq || s$ || n3 || null != nD,
                    isTemporaryChat: nE,
                    isWorkConversation: sz,
                    onRegenerateResponse: rv || n3 || null != nD || nq || s$ || s6 || sL || sc || so ? void 0 : ok,
                    onEditUserMessage: rv || null == ey || sz || nq || s$ || s6 || !sd || so ? void 0 : oM,
                    onFork: null == ey || nE || s6 || sL || nq || s$ ? void 0 : oA,
                    pendingSubmissionAttachments: aX,
                    shareEnabled: null == rn && !nE && !n3 && !nq && !s$ && !rS,
                    readAloudEnabled: !n3 && !s$,
                    feedbackEnabled: !n3 && !s$ && null == nD,
                    renderedTurns: rz || null == n8 || null == rZ ? r$ : (0, nB.a)({
                        ...rZ,
                        current_node: n8.promptMessageId
                    }, {
                        clinicalSearchEnabled: s0,
                        clinicalCitationsEnabled: sX,
                        streamingOrders: aC,
                        isWorkConversation: sY,
                        getRenderTelemetry: e => (0, ob.c)(nV.get, e)
                    }),
                    safetyReview: ak,
                    sharedConversationLastMessageId: sA?.current_node ?? aR ?? (n3 ? sk?.current_node : null),
                    showPendingLoadingMessage: rX,
                    showRequestUserInputStatus: oq && !oV && !sE
                });
                ej = rz ? (0, rM.a)(e) : e, nm[195] = rv, nm[196] = ah, nm[197] = sX, nm[198] = s0, nm[199] = sk?.current_node, nm[200] = ng, nm[201] = rn, nm[202] = oC, nm[203] = oA, nm[204] = oM, nm[205] = ok, nm[206] = nI, nm[207] = nq, nm[208] = oV, nm[209] = sE, nm[210] = rS, nm[211] = s$, nm[212] = n3, nm[213] = so, nm[214] = nE, nm[215] = sz, nm[216] = sc, nm[217] = sY, nm[218] = s6, nm[219] = sL, nm[220] = n8, nm[221] = aX, nm[222] = ey, nm[223] = rZ, nm[224] = r$, nm[225] = rz, nm[226] = ak, nm[227] = nV.get, nm[228] = aR, nm[229] = sA?.current_node, nm[230] = nD, nm[231] = oq, nm[232] = rX, nm[233] = aC, nm[234] = sd, nm[235] = ej
            } else ej = nm[235];
            let o$ = ej;
            nm[236] !== ag ? (eS = ag.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation",
                description: "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop"
            }), nm[236] = ag, nm[237] = eS) : eS = nm[237];
            let oQ = eS;
            nm[238] !== nq || nm[239] !== n3 || nm[240] !== sR || nm[241] !== nV || nm[242] !== ay ? (eE = n3 || nq || null == ay ? void 0 : e => {
                (0, sK.R)({
                    scope: nV,
                    conversationId: ay,
                    previousTitle: sR,
                    title: e
                })
            }, nm[238] = nq, nm[239] = n3, nm[240] = sR, nm[241] = nV, nm[242] = ay, nm[243] = eE) : eE = nm[243];
            let oJ = aG || null != sk ? sR ?? "" : null;
            nm[244] !== aN || nm[245] !== eE || nm[246] !== oJ ? (eP = (0, a.jsx)(tA.a, {
                className: "max-w-[320px]",
                variant: "flush-start",
                onRename: eE,
                title: aN,
                titleValue: oJ
            }), nm[244] = aN, nm[245] = eE, nm[246] = oJ, nm[247] = eP) : eP = nm[247];
            let oX = eP,
                o0 = sY || sV ? oX : null;
            if (null != rn) {
                let e;
                nm[248] !== ng || nm[249] !== rn ? (e = (0, a.jsx)(aH.ChatGptGizmoHeader, {
                    conversationId: ng,
                    gizmoId: rn
                }), nm[248] = ng, nm[249] = rn, nm[250] = e) : e = nm[250], o0 = e
            } else null != sk || null != s8 || sw || (o0 = null);
            nm[251] !== nq || nm[252] !== n3 || nm[253] !== sz ? (eA = !sz || n3 || nq ? null : (0, a.jsx)(e7.a, {
                hostId: tC.a
            }), nm[251] = nq, nm[252] = n3, nm[253] = sz, nm[254] = eA) : eA = nm[254];
            let o1 = eA;
            nm[255] !== sY || nm[256] !== rC || nm[257] !== rm ? (eG = null == rm || sY ? null : (0, a.jsx)(s9, {
                allowsThreadContentOverlap: !0,
                project: rC
            }), nm[255] = sY, nm[256] = rC, nm[257] = rm, nm[258] = eG) : eG = nm[258];
            let o2 = eG;
            nm[259] !== o2 || nm[260] !== o0 || nm[261] !== ng || nm[262] !== nN || nm[263] !== nq || nm[264] !== ox || nm[265] !== n3 || nm[266] !== nE || nm[267] !== o1 || nm[268] !== rR || nm[269] !== rm || nm[270] !== rE || nm[271] !== rb ? (eB = rb ? (0, a.jsx)(re.a, {
                isTemporaryChat: nE,
                isCloudTask: ox && !n3 && !nq,
                breadcrumbHeader: nN ?? o2,
                project: null == rm ? void 0 : {
                    icon: rR,
                    name: rE
                },
                start: nN ?? (n3 ? o0 : (0, a.jsx)(tH.BusinessAgentConversationHeader, {
                    conversationId: ng,
                    fallback: o0
                })),
                startActions: o1
            }) : null, nm[259] = o2, nm[260] = o0, nm[261] = ng, nm[262] = nN, nm[263] = nq, nm[264] = ox, nm[265] = n3, nm[266] = nE, nm[267] = o1, nm[268] = rR, nm[269] = rm, nm[270] = rE, nm[271] = rb, nm[272] = eB) : eB = nm[272];
            let o3 = eB,
                o4 = !n3 && null == nD && !nq && !nE && !aw,
                o6 = (0, p.x)(o4 ? sC.a : null, ng);
            nm[273] !== ng || nm[274] !== o6 ? (ez = null != o6 ? (0, a.jsx)(rx, {
                conversationId: ng
            }) : null, nm[273] = ng, nm[274] = o6, nm[275] = ez) : ez = nm[275];
            let o5 = ez;
            nm[276] !== oY || nm[277] !== ng || nm[278] !== sJ || nm[279] !== rB ? (eL = null != rB ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: sJ,
                children: (0, a.jsx)(rc, {
                    conversationId: ng,
                    placement: "progress",
                    canStartSection: oY
                })
            }) : null, nm[276] = oY, nm[277] = ng, nm[278] = sJ, nm[279] = rB, nm[280] = eL) : eL = nm[280];
            let o8 = eL;
            if (nm[281] !== sj || nm[282] !== nY?.authMethod || nm[283] !== rv || nm[284] !== nO || nm[285] !== s1 || nm[286] !== rp || nm[287] !== ow || nm[288] !== oY || nm[289] !== n9 || nm[290] !== rf || nm[291] !== nR || nm[292] !== sk || nm[293] !== o3 || nm[294] !== ng || nm[295] !== oQ || nm[296] !== sB || nm[297] !== aN || nm[298] !== o5 || nm[299] !== ot || nm[300] !== n_ || nm[301] !== oC || nm[302] !== sF || nm[303] !== sQ || nm[304] !== eh || nm[305] !== rt || nm[306] !== sP || nm[307] !== oF || nm[308] !== oD || nm[309] !== oI || nm[310] !== sw || nm[311] !== nC || nm[312] !== n2 || nm[313] !== ag || nm[314] !== nq || nm[315] !== r0 || nm[316] !== oV || nm[317] !== rq || nm[318] !== sE || nm[319] !== o_ || nm[320] !== at || nm[321] !== ap || nm[322] !== rT || nm[323] !== nK || nm[324] !== rj || nm[325] !== oH || nm[326] !== sx || nm[327] !== sJ || nm[328] !== s$ || nm[329] !== sq || !1 !== nm[330] || nm[331] !== n3 || nm[332] !== s5 || nm[333] !== si || nm[334] !== so || nm[335] !== nE || nm[336] !== sz || nm[337] !== sc || nm[338] !== sY || nm[339] !== s3 || nm[340] !== sg || nm[341] !== s6 || nm[342] !== sL || nm[343] !== sG || nm[344] !== sD.pathname || nm[345] !== sT || nm[346] !== sH?.sidebarAutomationId || nm[347] !== nS || nm[348] !== sW || nm[349] !== rC || nm[350] !== rR || nm[351] !== rm || nm[352] !== rE || nm[353] !== rr || nm[354] !== rZ || nm[355] !== r$ || nm[356] !== nM || nm[357] !== rz || nm[358] !== oU || nm[359] !== nV || nm[360] !== nT || nm[361] !== aT || nm[362] !== rB || nm[363] !== o8 || nm[364] !== ay || nm[365] !== oe || nm[366] !== nP || nm[367] !== nZ || nm[368] !== sM || nm[369] !== nD || nm[370] !== rG || nm[371] !== aw || nm[372] !== o4 || nm[373] !== oh || nm[374] !== oq || nm[375] !== rX || nm[376] !== oZ || nm[377] !== oy || nm[378] !== of || nm[379] !== aj || nm[380] !== nw || nm[381] !== o$ || nm[382] !== nW) {
                tP = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, n, s, r, o, i, l, c, d, u, h, p, f, v = r$.flatMap(oB).flatMap(oG),
                        y = v.flatMap(oO);
                    if (!n3 && (sj.error instanceof tz.a && 423 === sj.error.status || rj && null == sT)) {
                        let e;
                        nm[407] !== sj || nm[408] !== ng || nm[409] !== nV ? (e = (0, a.jsx)(r_.a, {
                            onUnlocked: () => {
                                (0, rI.g)(nV.get(rI.f)?.projectId, [ng]), sj.refetch()
                            }
                        }), nm[407] = sj, nm[408] = ng, nm[409] = nV, nm[410] = e) : e = nm[410], tP = e;
                        break e
                    }
                    if (null != rG) {
                        let e;
                        nm[411] !== rG ? (e = (0, a.jsx)(I.l, {
                            replace: !0,
                            to: rG
                        }), nm[411] = rG, nm[412] = e) : e = nm[412], tP = e;
                        break e
                    }
                    eH = rA,
                    nm[413] !== sj.fetchStatus || nm[414] !== sk || nm[415] !== oI || nm[416] !== sw || nm[417] !== o_ || nm[418] !== nK ? (e4 = !1, nm[413] = sj.fetchStatus, nm[414] = sk, nm[415] = oI, nm[416] = sw, nm[417] = o_, nm[418] = nK, nm[419] = e4) : e4 = nm[419],
                    nm[420] !== sj.data || nm[421] !== sj.fetchStatus || nm[422] !== sk || nm[423] !== ng || nm[424] !== oI || nm[425] !== sw || nm[426] !== rq || nm[427] !== o_ || !1 !== nm[428] || nm[429] !== r$.length ? (tt = null, nm[420] = sj.data, nm[421] = sj.fetchStatus, nm[422] = sk, nm[423] = ng, nm[424] = oI, nm[425] = sw, nm[426] = rq, nm[427] = o_, nm[428] = !1, nm[429] = r$.length, nm[430] = tt) : tt = nm[430],
                    tn = !n3 && !s$ && (0, to.c)() ? (0, a.jsx)(tc.b, {
                        callIds: y,
                        hostId: tC.a,
                        conversationId: (0, m.Le)(`chatgpt:${ng}`)
                    }) : null,
                    nm[431] !== aN || nm[432] !== nK || nm[433] !== nZ || nm[434] !== nW?.documentTitle ? (ta = nK ? null : (0, a.jsx)(e5.a, {
                        title: null == nZ ? nW?.documentTitle ?? aN : null
                    }), nm[431] = aN, nm[432] = nK, nm[433] = nZ, nm[434] = nW?.documentTitle, nm[435] = ta) : ta = nm[435],
                    nm[436] !== ng || nm[437] !== nK || nm[438] !== sJ || nm[439] !== n3 || nm[440] !== nE || nm[441] !== sY || nm[442] !== o$ ? (ts = nK || sY ? null : (0, a.jsx)(sv.a, {
                        conversationId: ng,
                        canCopy: !sJ,
                        paragenEnabled: !n3,
                        turns: o$,
                        loadHistory: !nE && !n3
                    }), nm[436] = ng, nm[437] = nK, nm[438] = sJ, nm[439] = n3, nm[440] = nE, nm[441] = sY, nm[442] = o$, nm[443] = ts) : ts = nm[443];
                    let x = null != sk || sw;nm[444] !== oI || nm[445] !== sY || nm[446] !== x ? (tr = (0, a.jsx)(tL.a, {
                        isWorkConversation: sY,
                        hasConversationContent: x,
                        hasLoadError: oI
                    }), nm[444] = oI, nm[445] = sY, nm[446] = x, nm[447] = tr) : tr = nm[447],
                    nm[448] !== sk || nm[449] !== ng || nm[450] !== oI || nm[451] !== sw || nm[452] !== o_ || nm[453] !== nK || nm[454] !== sD.pathname || nm[455] !== nV || nm[456] !== nP ? (tv = nK || o_ || oI || null == sk && !sw ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(rU, {
                            sharedConversationId: nP
                        }), (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(tp.a, {
                                onCommit: () => th.a.contentCommitted(nV, ng, nP, sD.pathname),
                                onPaint: () => th.a.contentVisible(nV, ng, nP)
                            }, nP ?? ng)
                        })]
                    }), nm[448] = sk, nm[449] = ng, nm[450] = oI, nm[451] = sw, nm[452] = o_, nm[453] = nK, nm[454] = sD.pathname, nm[455] = nV, nm[456] = nP, nm[457] = tv) : tv = nm[457],
                    nm[458] !== nY?.authMethod || nm[459] !== rp || nm[460] !== rf || nm[461] !== sk || nm[462] !== o3 || nm[463] !== ng || nm[464] !== sB || nm[465] !== aN || nm[466] !== o5 || nm[467] !== ot || nm[468] !== eh || nm[469] !== rt || nm[470] !== oF || nm[471] !== nq || nm[472] !== r0 || nm[473] !== ap || nm[474] !== rT || nm[475] !== nK || nm[476] !== rj || nm[477] !== s$ || nm[478] !== n3 || nm[479] !== nE || nm[480] !== sz || nm[481] !== sc || nm[482] !== sY || nm[483] !== sH?.sidebarAutomationId || nm[484] !== sW || nm[485] !== rR || nm[486] !== rm || nm[487] !== rE || nm[488] !== rr || nm[489] !== rZ || nm[490] !== r$.length || nm[491] !== nV || nm[492] !== o8 || nm[493] !== ay || nm[494] !== oe || nm[495] !== nD || nm[496] !== aw || nm[497] !== o4 || nm[498] !== oh || nm[499] !== oZ || nm[500] !== oy || nm[501] !== aj || nm[502] !== nW ? (tb = nK || null != nW ? null : (0, a.jsxs)(sy.a, {
                        chatIcon: null == rm ? void 0 : rR,
                        conversationId: sz && !n3 ? ng : null,
                        header: null != o5 || null != o8 ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(rs, {
                                    header: o3,
                                    courseShortcut: o5,
                                    progress: o8
                                })
                            }), null]
                        }) : o3,
                        title: aN,
                        isArchivedPreview: nq,
                        children: [null, null, nY?.authMethod === "chatgpt" ? (0, a.jsx)(e9.s, {
                            productExperience: sY ? "work" : "chat"
                        }) : null, n3 ? (0, a.jsx)(rV.a, {
                            children: null == rr ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(r2, {
                                    data: rr
                                })
                            })
                        }) : null, o4 ? (0, a.jsx)(sI, {
                            conversationId: ng,
                            scheduledAutomationId: sW ? sH?.sidebarAutomationId : void 0
                        }, ng) : null, oh ? (0, a.jsx)(a2, {
                            allowsThreadContentOverlap: !sY,
                            composerActions: oZ,
                            conversationId: oy,
                            controlledState: r0 ? {
                                isOpen: ot.isOpen,
                                shouldPreventAutoFocus: ot.shouldPreventAutoFocus,
                                onOpenChange: e => {
                                    oe({
                                        ...ot,
                                        isOpen: e,
                                        shouldPreventAutoFocus: !e && ot.shouldPreventAutoFocus
                                    })
                                }
                            } : void 0,
                            readData: !r0 || ot.isOpen ? eh : null,
                            showSources: !r0,
                            shouldBlockExternalEgress: aw
                        }) : null, nE && !n3 && !nq && null == rt && null == rf && null == rm && !rT && null != rZ && (0, g.a)(rZ).some(oN) ? (0, a.jsx)(P.a.HeaderAction, {
                            actionId: "chatgpt-conversation-save",
                            align: "end",
                            order: 100,
                            children: (0, a.jsx)(ol, {
                                conversationId: ng
                            })
                        }) : null, nE || nq || s$ ? null : (0, a.jsx)(re.b, {
                            allowsThreadContentOverlap: !sY,
                            menu: n3 || null == ay ? (0, a.jsx)(s4, {}) : (0, a.jsx)(s2, {
                                conversationId: ng,
                                title: aN,
                                isHandoffPending: ap,
                                isArchived: sk?.is_archived === !0,
                                isChatConversation: null != sk && !sY,
                                onHandoff: rp ? oF : void 0,
                                onOpenMessage: async e => {
                                    am.current?.signal.aborted === !1 && nV.get(S.a)?.pathname === nV.value.pathname && await aa.current?.scrollToMessage(e)
                                },
                                projectId: rm,
                                projectName: rE,
                                serverConversationId: ay,
                                conversationOrigin: sB
                            }),
                            children: n3 || rj ? null : (0, a.jsx)(n4, {
                                conversationId: ng,
                                projectId: rm,
                                sharedProjectConversation: nD,
                                isReady: (null != ay || null != nD) && r$.length > 0 && (aj ?? sk?.current_node) != null,
                                isRestricted: aw || rT,
                                isStreaming: sc
                            })
                        })]
                    }), nm[458] = nY?.authMethod, nm[459] = rp, nm[460] = rf, nm[461] = sk, nm[462] = o3, nm[463] = ng, nm[464] = sB, nm[465] = aN, nm[466] = o5, nm[467] = ot, nm[468] = eh, nm[469] = rt, nm[470] = oF, nm[471] = nq, nm[472] = r0, nm[473] = ap, nm[474] = rT, nm[475] = nK, nm[476] = rj, nm[477] = s$, nm[478] = n3, nm[479] = nE, nm[480] = sz, nm[481] = sc, nm[482] = sY, nm[483] = sH?.sidebarAutomationId, nm[484] = sW, nm[485] = rR, nm[486] = rm, nm[487] = rE, nm[488] = rr, nm[489] = rZ, nm[490] = r$.length, nm[491] = nV, nm[492] = o8, nm[493] = ay, nm[494] = oe, nm[495] = nD, nm[496] = aw, nm[497] = o4, nm[498] = oh, nm[499] = oZ, nm[500] = oy, nm[501] = aj, nm[502] = nW, nm[503] = tb) : tb = nm[503],
                    tw = null,
                    eD = aD.a,
                    eJ = n9,
                    eX = sB,
                    e0 = !oq || oU.isHidden || oV || rv || sJ || sE || nq || s$ || s5 || s6 || sL || si || so,
                    e1 = nE,
                    e2 = rm,
                    e3 = null != rf,
                    eF = tE.c,
                    eW = sQ,
                    nm[504] !== nK || nm[505] !== sq || nm[506] !== sY || nm[507] !== o8 || nm[508] !== nW ? (eU = nK || null != nW ? o8 : sq && (0, tk.a)() && !sY && (0, a.jsx)("div", {
                        className: "h-px",
                        "aria-hidden": !0
                    }), nm[504] = nK, nm[505] = sq, nm[506] = sY, nm[507] = o8, nm[508] = nW, nm[509] = eU) : eU = nm[509],
                    eq = nO;
                    let C = null == rB ? "flex h-full min-h-0 flex-col" : "h-full",
                        _ = !at && !nK && !n3 && !oH && !oU.isHidden,
                        w = aw || s1,
                        T = sF?.isFullWidth === !0,
                        j = null == sF ? of.contentShift : void 0,
                        E = rB?.selectedIndex;nm[510] !== oY || nm[511] !== ng || nm[512] !== rB ? (e = null != rB ? (0, a.jsx)(rc, {
                        conversationId: ng,
                        placement: "composer",
                        canStartSection: oY
                    }) : void 0, nm[510] = oY, nm[511] = ng, nm[512] = rB, nm[513] = e) : e = nm[513],
                    nm[514] !== ng || nm[515] !== rB ? (t = null != rB ? (0, a.jsx)(rl, {
                        conversationId: ng
                    }) : void 0, nm[514] = ng, nm[515] = rB, nm[516] = t) : t = nm[516];
                    let A = !sY,
                        M = rz ? null : oC;nm[517] !== sj || nm[518] !== ow ? (n = ow ? () => {
                        sj.refetch({
                            cancelRefetch: !1
                        })
                    } : void 0, nm[517] = sj, nm[518] = ow, nm[519] = n) : n = nm[519];
                    let k = r$.length > 0;nm[520] !== ag || nm[521] !== rz ? (s = rz ? ag.formatMessage(rM.c.readOnlyPlaceholder) : void 0, nm[520] = ag, nm[521] = rz, nm[522] = s) : s = nm[522];
                    let R = !rT && (null == rm || null != rC),
                        N = null == rB && !sG,
                        O = sj.isFetching,
                        G = !rz && sc;nm[523] !== sk?.is_archived || nm[524] !== ng || nm[525] !== nq || nm[526] !== nK || nm[527] !== n3 || nm[528] !== nE || nm[529] !== sc || nm[530] !== sY ? (r = nK || !sY || n3 || nq || sk?.is_archived === !0 || nE ? null : (0, a.jsx)(b.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(ri, {
                            conversationId: ng,
                            isTurnActive: sc
                        })
                    }), nm[523] = sk?.is_archived, nm[524] = ng, nm[525] = nq, nm[526] = nK, nm[527] = n3, nm[528] = nE, nm[529] = sc, nm[530] = sY, nm[531] = r) : r = nm[531],
                    nm[532] !== ng || nm[533] !== nq || nm[534] !== ay ? (o = nq ? (0, a.jsx)(tI.a, {
                        conversationId: ay ?? ng,
                        kind: "chatgpt"
                    }, ay ?? ng) : void 0, nm[532] = ng, nm[533] = nq, nm[534] = ay, nm[535] = o) : o = nm[535];
                    let B = !rz && rX;nm[536] !== rf ? (i = null != rf ? (0, a.jsx)(ru.GptPluginMigrationBanner, {
                        gizmoId: rf
                    }) : null, nm[536] = rf, nm[537] = i) : i = nm[537],
                    nm[538] !== rp || nm[539] !== oF || nm[540] !== ap || nm[541] !== nE || nm[542] !== s3 || nm[543] !== sg ? (l = s3 && !nE ? (0, a.jsx)(sp, {
                        canConvert: rp,
                        isChatInstantAvailable: !sg,
                        isConverting: ap,
                        onConvert: oF
                    }) : null, nm[538] = rp, nm[539] = oF, nm[540] = ap, nm[541] = nE, nm[542] = s3, nm[543] = sg, nm[544] = l) : l = nm[544],
                    nm[545] !== sP || nm[546] !== s$ ? (c = sP.bind(null, s$), nm[545] = sP, nm[546] = s$, nm[547] = c) : c = nm[547],
                    nm[548] !== oD || nm[549] !== n3 || nm[550] !== nS ? (d = e => {
                        nS?.(e), n3 && oD()
                    }, nm[548] = oD, nm[549] = n3, nm[550] = nS, nm[551] = d) : d = nm[551],
                    nm[552] !== sj.isFetching || nm[553] !== rv || nm[554] !== n9 || nm[555] !== nR || nm[556] !== ng || nm[557] !== oQ || nm[558] !== n_ || nm[559] !== oI || nm[560] !== nC || nm[561] !== n2 || nm[562] !== oV || nm[563] !== rq || nm[564] !== sE || nm[565] !== o_ || nm[566] !== at || nm[567] !== nK || nm[568] !== n3 || nm[569] !== nE || nm[570] !== sz || nm[571] !== nM || nm[572] !== nT || nm[573] !== aT || nm[574] !== nP || nm[575] !== sM || nm[576] !== oq || nm[577] !== N || nm[578] !== G || nm[579] !== r || nm[580] !== o || nm[581] !== B || nm[582] !== i || nm[583] !== l || nm[584] !== c || nm[585] !== d || nm[586] !== _ || nm[587] !== w || nm[588] !== T || nm[589] !== j || nm[590] !== E || nm[591] !== e || nm[592] !== t || nm[593] !== A || nm[594] !== M || nm[595] !== n || nm[596] !== k || nm[597] !== s || nm[598] !== R || nm[599] !== nw || nm[600] !== o$ || nm[601] !== nW ? (u = (0, a.jsx)(oL, {
                        ref: aa,
                        trackReadState: _,
                        workspace: nW,
                        shouldBlockMcpApps: w,
                        isCoveredByFloatingPanel: T,
                        isFormOnly: at,
                        isInlinePreview: nK,
                        hideModelPicker: nC,
                        disableAutoFocus: n_,
                        transcriptPresentation: nw,
                        scrollOrigin: nT,
                        composerRef: ar,
                        contentX: j,
                        conversationId: ng,
                        composerConversationId: n9,
                        sectionIndex: E,
                        composerLeadingContent: nR,
                        aboveComposerContent: e,
                        historyLoadingContent: t,
                        requiredSystemHints: nM,
                        isChatConversation: A,
                        conversationLoadingLabel: oQ,
                        entries: o$,
                        errorMessage: M,
                        hasLoadError: oI,
                        onRetryLoad: n,
                        hasRenderableTurns: k,
                        isComposerDisabled: oV,
                        readOnlyPlaceholder: s,
                        moreDetailsEnabled: R,
                        isConversationEmpty: rq,
                        showEmptyState: N,
                        isConversationFetching: O,
                        isConversationLoading: o_,
                        isSharedConversation: n3,
                        isSubmitDisabled: sE,
                        isTemporaryChat: nE,
                        isTurnActive: G,
                        isWorkConversation: sz,
                        onboardingPrelude: r,
                        scrollStateConversationId: aT,
                        initialResponsePlacementKey: n2,
                        sharedConversationId: nP,
                        sharedPostRegulatedConnectorKind: sM,
                        showComposer: oq,
                        archivedPreviewFooter: o,
                        showPendingLoadingMessage: B,
                        gptPluginMigrationBanner: i,
                        awaitingGptContinuation: rv,
                        workOnlyConversionBanner: l,
                        onAddSelectedText: c,
                        onSubmitAccepted: d
                    }), nm[552] = sj.isFetching, nm[553] = rv, nm[554] = n9, nm[555] = nR, nm[556] = ng, nm[557] = oQ, nm[558] = n_, nm[559] = oI, nm[560] = nC, nm[561] = n2, nm[562] = oV, nm[563] = rq, nm[564] = sE, nm[565] = o_, nm[566] = at, nm[567] = nK, nm[568] = n3, nm[569] = nE, nm[570] = sz, nm[571] = nM, nm[572] = nT, nm[573] = aT, nm[574] = nP, nm[575] = sM, nm[576] = oq, nm[577] = N, nm[578] = G, nm[579] = r, nm[580] = o, nm[581] = B, nm[582] = i, nm[583] = l, nm[584] = c, nm[585] = d, nm[586] = _, nm[587] = w, nm[588] = T, nm[589] = j, nm[590] = E, nm[591] = e, nm[592] = t, nm[593] = A, nm[594] = M, nm[595] = n, nm[596] = k, nm[597] = s, nm[598] = R, nm[599] = nw, nm[600] = o$, nm[601] = nW, nm[602] = u) : u = nm[602],
                    nm[603] !== ot || nm[604] !== eh || nm[605] !== r0 || nm[606] !== aw || nm[607] !== oh || nm[608] !== oZ || nm[609] !== oy || nm[610] !== of ? (h = oh && null != eh && (!r0 || ot.isOpen) ? (0, a.jsx)(a1, {
                        composerActions: oZ,
                        conversationId: oy,
                        readData: eh,
                        showSources: !r0,
                        display: of,
                        shouldBlockExternalEgress: aw
                    }) : null, nm[603] = ot, nm[604] = eh, nm[605] = r0, nm[606] = aw, nm[607] = oh, nm[608] = oZ, nm[609] = oy, nm[610] = of, nm[611] = h) : h = nm[611],
                    nm[612] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(aF.a, {}), nm[612] = p) : p = nm[612],
                    nm[613] !== nK ? (f = null, nm[613] = nK, nm[614] = f) : f = nm[614],
                    nm[615] !== sJ || nm[616] !== u || nm[617] !== h || nm[618] !== f || nm[619] !== C ? (eK = (0, a.jsxs)("div", {
                        className: C,
                        inert: sJ,
                        children: [u, h, p, f]
                    }), nm[615] = sJ, nm[616] = u, nm[617] = h, nm[618] = f, nm[619] = C, nm[620] = eK) : eK = nm[620],
                    eY = !n3 && !s$ && (0, to.c)() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(oT, {
                            conversationId: ng,
                            shouldBlockExternalEgress: aw || s1,
                            widgets: v.filter(oR)
                        }), (0, a.jsx)(tl.a, {
                            blockedWidgetSource: sx ? void 0 : "descriptor",
                            transcriptMcpAppIds: new Set(v.flatMap(e => "mcp-tool-call" === e.type ? sx ? e.callId : [] : "chatgpt-hosted-widget" === e.type ? (0, ax.e)(ng, e.messageId) : [])),
                            shouldBlockExternalEgress: aw || s1
                        })]
                    }) : null
                }
                nm[281] = sj, nm[282] = nY?.authMethod, nm[283] = rv, nm[284] = nO, nm[285] = s1, nm[286] = rp, nm[287] = ow, nm[288] = oY, nm[289] = n9, nm[290] = rf, nm[291] = nR, nm[292] = sk, nm[293] = o3, nm[294] = ng, nm[295] = oQ, nm[296] = sB, nm[297] = aN, nm[298] = o5, nm[299] = ot, nm[300] = n_, nm[301] = oC, nm[302] = sF, nm[303] = sQ, nm[304] = eh, nm[305] = rt, nm[306] = sP, nm[307] = oF, nm[308] = oD, nm[309] = oI, nm[310] = sw, nm[311] = nC, nm[312] = n2, nm[313] = ag, nm[314] = nq, nm[315] = r0, nm[316] = oV, nm[317] = rq, nm[318] = sE, nm[319] = o_, nm[320] = at, nm[321] = ap, nm[322] = rT, nm[323] = nK, nm[324] = rj, nm[325] = oH, nm[326] = sx, nm[327] = sJ, nm[328] = s$, nm[329] = sq, nm[330] = !1, nm[331] = n3, nm[332] = s5, nm[333] = si, nm[334] = so, nm[335] = nE, nm[336] = sz, nm[337] = sc, nm[338] = sY, nm[339] = s3, nm[340] = sg, nm[341] = s6, nm[342] = sL, nm[343] = sG, nm[344] = sD.pathname, nm[345] = sT, nm[346] = sH?.sidebarAutomationId, nm[347] = nS, nm[348] = sW, nm[349] = rC, nm[350] = rR, nm[351] = rm, nm[352] = rE, nm[353] = rr, nm[354] = rZ, nm[355] = r$, nm[356] = nM, nm[357] = rz, nm[358] = oU, nm[359] = nV, nm[360] = nT, nm[361] = aT, nm[362] = rB, nm[363] = o8, nm[364] = ay, nm[365] = oe, nm[366] = nP, nm[367] = nZ, nm[368] = sM, nm[369] = nD, nm[370] = rG, nm[371] = aw, nm[372] = o4, nm[373] = oh, nm[374] = oq, nm[375] = rX, nm[376] = oZ, nm[377] = oy, nm[378] = of, nm[379] = aj, nm[380] = nw, nm[381] = o$, nm[382] = nW, nm[383] = eF, nm[384] = eD, nm[385] = eH, nm[386] = eW, nm[387] = eU, nm[388] = eq, nm[389] = eK, nm[390] = eY, nm[391] = eJ, nm[392] = eX, nm[393] = e0, nm[394] = e1, nm[395] = e2, nm[396] = e3, nm[397] = e4, nm[398] = tt, nm[399] = tn, nm[400] = ta, nm[401] = ts, nm[402] = tr, nm[403] = tv, nm[404] = tb, nm[405] = tw, nm[406] = tP
            } else eF = nm[383], eD = nm[384], eH = nm[385], eW = nm[386], eU = nm[387], eq = nm[388], eK = nm[389], eY = nm[390], eJ = nm[391], eX = nm[392], e0 = nm[393], e1 = nm[394], e2 = nm[395], e3 = nm[396], e4 = nm[397], tt = nm[398], tn = nm[399], ta = nm[400], ts = nm[401], tr = nm[402], tv = nm[403], tb = nm[404], tw = nm[405], tP = nm[406];
            if (tP !== Symbol.for("react.early_return_sentinel")) return tP;
            nm[621] !== eF || nm[622] !== eW || nm[623] !== eU || nm[624] !== eq || nm[625] !== eK || nm[626] !== eY ? (tN = (0, a.jsxs)(eF, {
                floatingPanelWidth: eW,
                header: eU,
                banner: eq,
                children: [eK, eY]
            }), nm[621] = eF, nm[622] = eW, nm[623] = eU, nm[624] = eq, nm[625] = eK, nm[626] = eY, nm[627] = tN) : tN = nm[627], nm[628] !== eD || nm[629] !== eJ || nm[630] !== eX || nm[631] !== e0 || nm[632] !== e1 || nm[633] !== e2 || nm[634] !== e3 || nm[635] !== tN ? (tB = (0, a.jsx)(eD, {
                conversationId: eJ,
                conversationOrigin: eX,
                disabled: e0,
                isTemporaryChat: e1,
                projectId: e2,
                requiresGizmoId: e3,
                children: tN
            }), nm[628] = eD, nm[629] = eJ, nm[630] = eX, nm[631] = e0, nm[632] = e1, nm[633] = e2, nm[634] = e3, nm[635] = tN, nm[636] = tB) : tB = nm[636], nm[637] !== eH || nm[638] !== e4 || nm[639] !== tt || nm[640] !== tn || nm[641] !== ta || nm[642] !== ts || nm[643] !== tr || nm[644] !== tv || nm[645] !== tb || nm[646] !== tw || nm[647] !== tB ? (nl = (0, a.jsxs)(eH, {
                children: [e4, tt, tn, ta, ts, tr, tv, tb, tw, tB]
            }), nm[637] = eH, nm[638] = e4, nm[639] = tt, nm[640] = tn, nm[641] = ta, nm[642] = ts, nm[643] = tr, nm[644] = tv, nm[645] = tb, nm[646] = tw, nm[647] = tB, nm[648] = nl) : nl = nm[648];
            let o7 = nl,
                o9 = n3 || !sj.isFetchedAfterMount || sj.isFetching || sS ? null : sj.error,
                ie = oI ? sj.error : null,
                it = null == sB && null == sk ? null : sY,
                ia = !sY && !o_;
            return nm[649] !== as || nm[650] !== n9 || nm[651] !== nP ? (nd = {
                conversationId: n9,
                composer: as,
                sharedConversationId: nP
            }, nm[649] = as, nm[650] = n9, nm[651] = nP, nm[652] = nd) : nd = nm[652], nm[653] !== o7 || nm[654] !== nd ? (nu = (0, a.jsx)(nv.a, {
                value: nd,
                children: o7
            }), nm[653] = o7, nm[654] = nd, nm[655] = nu) : nu = nm[655], nm[656] !== ia || nm[657] !== nu ? (nh = (0, a.jsx)(w.a, {
                enabled: ia,
                children: nu
            }), nm[656] = ia, nm[657] = nu, nm[658] = nh) : nh = nm[658], nm[659] !== ow || nm[660] !== ay || nm[661] !== o9 || nm[662] !== ie || nm[663] !== it || nm[664] !== nh ? (np = (0, a.jsx)(en.a, {
                conversationId: ay,
                error: o9,
                loadError: ie,
                canRetry: ow,
                isWorkConversation: it,
                children: nh
            }), nm[659] = ow, nm[660] = ay, nm[661] = o9, nm[662] = ie, nm[663] = it, nm[664] = nh, nm[665] = np) : np = nm[665], np
        }

        function oR(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function oN(e) {
            return "user" === e.author.role
        }

        function oO(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function oG(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function oB(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function oz(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }

        function oL(e) {
            let t, n, r, o, c, u, h, m, g, f, v, y, C, I, w, T, j, S, E, P, A, M, k, R, O, G, B, z, L = (0, s.c)(218),
                {
                    ref: H,
                    trackReadState: W,
                    composerRef: U,
                    workspace: K,
                    shouldBlockMcpApps: V,
                    contentX: Y,
                    conversationId: Z,
                    sectionIndex: $,
                    composerConversationId: Q,
                    composerLeadingContent: J,
                    aboveComposerContent: ee,
                    historyLoadingContent: et,
                    requiredSystemHints: en,
                    isCoveredByFloatingPanel: ea,
                    isFormOnly: es,
                    isInlinePreview: er,
                    hideModelPicker: eo,
                    disableAutoFocus: ei,
                    transcriptPresentation: el,
                    scrollOrigin: ec,
                    isChatConversation: ed,
                    conversationLoadingLabel: eu,
                    entries: eh,
                    errorMessage: ep,
                    hasLoadError: em,
                    onRetryLoad: eg,
                    hasRenderableTurns: ef,
                    isComposerDisabled: ev,
                    readOnlyPlaceholder: eb,
                    moreDetailsEnabled: ex,
                    isConversationEmpty: eC,
                    showEmptyState: e_,
                    isConversationFetching: eT,
                    isConversationLoading: eE,
                    isSharedConversation: eP,
                    isSubmitDisabled: eA,
                    isTemporaryChat: eM,
                    isTurnActive: ek,
                    isWorkConversation: eR,
                    onboardingPrelude: eN,
                    scrollStateConversationId: eO,
                    initialResponsePlacementKey: eG,
                    sharedConversationId: eB,
                    sharedPostRegulatedConnectorKind: ez,
                    showComposer: eF,
                    archivedPreviewFooter: eD,
                    showPendingLoadingMessage: eH,
                    gptPluginMigrationBanner: eW,
                    awaitingGptContinuation: eK,
                    workOnlyConversionBanner: eV,
                    onAddSelectedText: eY,
                    onSubmitAccepted: eZ
                } = e,
                e$ = void 0 === e_ || e_,
                eQ = (0, p.y)(D.a),
                e0 = (0, p.x)(rY.d, (0, b.useContext)(N.a)),
                e6 = (0, p.z)(ty.a),
                e5 = (0, p.x)(tB.a, Z),
                e8 = K?.fullscreenContent != null ? "content" : "workspace",
                e7 = (0, X.a)(er ? "embedded" : e8),
                e9 = (0, p.z)(rC.a),
                te = eF && e9?.source.turnContext.conversationId !== Q,
                tn = "floating" === e7.placement,
                ta = (0, p.z)(rf.h),
                ts = ed && null == eB && null == e0 && null == eD,
                to = !eE && !ek && !em && eC && !ef,
                ti = (0, p.x)(F.i, Z),
                tl = e$ && ts && to && null == ti && !e5 && !tn,
                tc = e$ && !e5 && (!ts || !eC),
                td = (0, b.useRef)(null),
                [tu, th] = (0, b.useState)(null),
                [tp, tm] = (0, b.useState)(!1);
            L[0] !== eh || L[1] !== tu ? (t = () => ({
                async scrollToMessage(e) {
                    let t = eh.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != tu && await tu.scrollToKey(t.turnKey, void 0, {
                        align: "top"
                    })
                }
            }), n = [eh, tu], L[0] = eh, L[1] = tu, L[2] = t, L[3] = n) : (t = L[2], n = L[3]), (0, b.useImperativeHandle)(H, t, n), L[4] !== eh ? (r = () => eh, L[4] = eh, L[5] = r) : r = L[5];
            let tg = (0, tG.a)(r);
            L[6] !== eh || L[7] !== tu ? (o = async e => {
                let t = d()(eh, oH);
                if (null == t || e.aborted) return null;
                let n = null;
                return await tu?.scrollToKey(t.turnKey, e => {
                    let t = e.querySelectorAll('[data-conversation-role="assistant"]');
                    return n = t.item(t.length - 1)
                }, {
                    align: "top",
                    signal: e
                }), n
            }, L[6] = eh, L[7] = tu, L[8] = o) : o = L[8];
            let tf = o,
                [tx, tC] = (0, b.useState)(null);
            L[9] !== er || L[10] !== eQ || L[11] !== eO ? (c = () => er ? 0 : eQ.get(nU.a, eO), L[9] = er, L[10] = eQ, L[11] = eO, L[12] = c) : c = L[12];
            let [t_, tI] = (0, b.useState)(c);
            L[13] !== er || L[14] !== tx || L[15] !== eQ || L[16] !== eO ? (u = e => {
                er || eQ.set(nU.a, eO, Math.max(0, e - (tx?.getHeightPx() ?? 0)))
            }, L[13] = er, L[14] = tx, L[15] = eQ, L[16] = eO, L[17] = u) : u = L[17];
            let tT = (0, tG.a)(u);
            L[18] !== eh || L[19] !== tu ? (h = async (e, t) => {
                if (t?.signal?.aborted) return;
                if (null == tu) throw Error("ChatGPT conversation search scroll requested before VirtualizedTurnList API was ready");
                let n = eh.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                });
                null == n || (await tu.scrollToKey(n.turnKey), t?.signal?.aborted || await (0, eX.b)())
            }, L[18] = eh, L[19] = tu, L[20] = h) : h = L[20];
            let tj = (0, tG.a)(h);
            L[21] === Symbol.for("react.memo_cache_sentinel") ? (m = e => td.current?.querySelector(`[data-content-search-turn-key="${e}"]`) ?? null, L[21] = m) : m = L[21];
            let tS = (0, tG.a)(m);
            L[22] !== Z || L[23] !== eh || L[24] !== tu ? (g = async e => {
                let t = eh.find(t => {
                    let {
                        turn: n
                    } = t;
                    return n.messageIds.includes(e)
                });
                null != t && null != tu && await tu.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${Z}-${e}`)}"]`), {
                    align: "center"
                })
            }, L[22] = Z, L[23] = eh, L[24] = tu, L[25] = g) : g = L[25];
            let tA = (0, tG.a)(g);
            L[26] !== tS || L[27] !== tj ? (f = {
                scrollToTurn: tj,
                getTurnContainer: tS
            }, L[26] = tS, L[27] = tj, L[28] = f) : f = L[28];
            let tM = f,
                tk = `chatgpt:${Z}`;
            L[29] !== Z || L[30] !== eM || L[31] !== eQ || L[32] !== eB || L[33] !== e0 ? (v = async e => {
                let t = eQ.get(F.j, Z);
                !eM && null == eB && null == e0 && null != t && eQ.get(ew.b) > 0 && await (0, eI.a)(eQ, t, e)
            }, L[29] = Z, L[30] = eM, L[31] = eQ, L[32] = eB, L[33] = e0, L[34] = v) : v = L[34], L[35] !== tM || L[36] !== tg || L[37] !== tk || L[38] !== v ? (y = function(e) {
                let {
                    getTurns: t,
                    routeContextId: n,
                    scrollAdapter: a,
                    ensureHistory: s
                } = e, r = (0, nY.a)({
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
                                        unitId: (0, n_.a)("user", t),
                                        text: n
                                    }]
                                }
                                if ("assistant-message" === e.type) {
                                    let n = (0, n$.a)(e.content, ey.b),
                                        a = [],
                                        s = "";
                                    for (; e.content.includes(s);) s += "";
                                    let r = (0, nV.a)(function e(t, n, a, s) {
                                            let r = "",
                                                o = 0;
                                            for (let i of t) {
                                                let t = n.indexOf(i.raw, o); - 1 !== t && (r += n.slice(o, t), r += function(t, n, a) {
                                                    var s, r;
                                                    if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                    if ("codexDirective" === (s = t).type && "name" in s && "string" == typeof s.name && "attributes" in s && null != s.attributes && "object" == typeof s.attributes) return function(e, t) {
                                                        if (e.name === ey.a) {
                                                            let n = (0, nQ.a)(e.attributes),
                                                                a = (0, nQ.b)(e.attributes),
                                                                s = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, ey.l)(e) === a);
                                                            if (null == s) return "";
                                                            let r = (0, ey.i)(s);
                                                            return "hidden" === r || "block" === r ? "" : (0, ey.j)(s) ?? ""
                                                        }
                                                        return e.name === nK.a ? (0, nZ.a)(e.attributes, "label") ?? "" : e.name === nK.b || e.name === nK.c ? "" : e.name === nq.a ? e.text ?? "" : null
                                                    }(t, n) ?? t.raw;
                                                    if ("tokens" in t && Array.isArray(t.tokens)) return e(t.tokens, t.raw, n, a);
                                                    if ("table" === t.type) return e([...t.header, ...t.rows.flat()].flatMap(e => e.tokens), t.raw, n, a);
                                                    if (!("list" === (r = t).type && "items" in r && Array.isArray(r.items))) return t.raw;
                                                    let o = "",
                                                        i = 0;
                                                    for (let s of t.items) {
                                                        let r = t.raw.indexOf(s.raw, i); - 1 !== r && (o += t.raw.slice(i, r), o += e(s.tokens, s.raw, n, a), i = r + s.raw.length)
                                                    }
                                                    return o + t.raw.slice(i)
                                                }(i, a, s), o = t + i.raw.length)
                                            }
                                            return r + n.slice(o)
                                        }(n, e.content, e.contentReferences, e => (a.push(e), s))),
                                        o = 0 === a.length ? void 0 : r.split(s);
                                    return 0 === r.length && 0 === a.length ? [] : [{
                                        unitId: (0, n_.a)("assistant", t),
                                        text: o?.join(" ") ?? r,
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
                    ...r,
                    search: async (e, t) => (await s?.(t?.signal), t?.signal?.throwIfAborted(), r.search(e, t))
                }
            }({
                getTurns: tg,
                routeContextId: tk,
                scrollAdapter: tM,
                ensureHistory: v
            }), L[35] = tM, L[36] = tg, L[37] = tk, L[38] = v, L[39] = y) : y = L[39];
            let tR = y;
            L[40] !== tR.contextId ? (C = {
                containerRef: td,
                contextId: tR.contextId
            }, L[40] = tR.contextId, L[41] = C) : C = L[41], (0, e3.a)(C);
            let tN = te && null == eD,
                tO = e6 && tN && !tn,
                tz = (0, tt.a)();
            L[42] !== Z || L[43] !== ef || L[44] !== ea || L[45] !== $ || L[46] !== tz ? (I = {
                conversationId: Z,
                sectionIndex: $,
                hasRenderableTurns: ef,
                isCoveredByFloatingPanel: ea,
                shouldReduceMotion: tz,
                containerRef: td
            }, L[42] = Z, L[43] = ef, L[44] = ea, L[45] = $, L[46] = tz, L[47] = I) : I = L[47];
            let tL = function(e) {
                    let t, n, a, r = (0, s.c)(12),
                        {
                            conversationId: o,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, rk.a)(0);
                    r[0] !== o || r[1] !== i ? (t = {
                        conversationId: o,
                        sectionIndex: i
                    }, r[0] = o, r[1] = i, r[2] = t) : t = r[2];
                    let p = (0, b.useRef)(t);
                    return r[3] !== u || r[4] !== o || r[5] !== l || r[6] !== c || r[7] !== i || r[8] !== h || r[9] !== d ? (n = () => {
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
                            s = () => {
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(rO) && 0 !== n.clientWidth && (r.disconnect(), h.set(a * n.clientWidth), e = (0, rR.a)(h, 0, {
                                    duration: .3,
                                    ease: rN.d
                                }))
                            },
                            r = new MutationObserver(s);
                        return r.observe(n, {
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }), s(), () => {
                            r.disconnect(), e?.stop(), h.set(0)
                        }
                    }, a = [o, i, l, d, c, h, u], r[3] = u, r[4] = o, r[5] = l, r[6] = c, r[7] = i, r[8] = h, r[9] = d, r[10] = n, r[11] = a) : (n = r[10], a = r[11]), (0, b.useLayoutEffect)(n, a), h
                }(I),
                tF = tN && tn,
                [tD, tH] = (0, b.useState)(null),
                [tW, tU] = (0, b.useState)(null),
                [tq, tK] = (0, b.useState)(null),
                tV = eP && tN && !ev && !tn && !e6,
                [tY, tZ] = (0, b.useState)(null);
            L[48] !== eK || L[49] !== Z || L[50] !== ef || L[51] !== eM || L[52] !== ez || L[53] !== eF ? (w = eF && !eK ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(eq.BrowserComposerDisclaimer, {
                    conversationId: Z,
                    hasUserMessage: ef,
                    isTemporaryChat: eM,
                    regulatedConnectorKindOverride: ez
                })
            }) : void 0, L[48] = eK, L[49] = Z, L[50] = ef, L[51] = eM, L[52] = ez, L[53] = eF, L[54] = w) : w = L[54];
            let t$ = w;
            L[55] !== Z || L[56] !== ep || L[57] !== ef || L[58] !== ev || L[59] !== eA || L[60] !== eM || L[61] !== eR || L[62] !== eF || L[63] !== eH ? (T = ef ? null : (0, a.jsx)(nD.a, {
                conversationId: Z,
                errorMessage: ep,
                isTemporaryChat: eM,
                isWorkConversation: eR,
                showPendingLoadingMessage: eH,
                showRequestUserInputStatus: eF && !ev && !eA
            }), L[55] = Z, L[56] = ep, L[57] = ef, L[58] = ev, L[59] = eA, L[60] = eM, L[61] = eR, L[62] = eF, L[63] = eH, L[64] = T) : T = L[64];
            let tQ = T;
            L[65] !== Z || L[66] !== eR || L[67] !== eB || L[68] !== e0 ? (j = eR && null == eB && null == e0 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(eU, {
                    conversationId: Z
                }, Z)
            }) : null, L[65] = Z, L[66] = eR, L[67] = eB, L[68] = e0, L[69] = j) : j = L[69];
            let tJ = j;
            L[70] !== eD || L[71] !== tJ ? (S = null != eD ? (0, a.jsxs)(a.Fragment, {
                children: [tJ, eD]
            }) : null, L[70] = eD, L[71] = tJ, L[72] = S) : S = L[72];
            let tX = S;
            L[73] !== ee || L[74] !== tX || L[75] !== eK || L[76] !== Q || L[77] !== J || L[78] !== U || L[79] !== Z || L[80] !== ei || L[81] !== t$ || L[82] !== tQ || L[83] !== eh || L[84] !== tJ || L[85] !== tD || L[86] !== eW || L[87] !== em || L[88] !== ef || L[89] !== eo || L[90] !== e6 || L[91] !== ev || L[92] !== eE || L[93] !== ea || L[94] !== es || L[95] !== tn || L[96] !== ta || L[97] !== er || L[98] !== eP || L[99] !== eA || L[100] !== eM || L[101] !== eR || L[102] !== eZ || L[103] !== eb || L[104] !== tV || L[105] !== en || L[106] !== tx || L[107] !== tf || L[108] !== e7.isHidden || L[109] !== eB || L[110] !== e0 || L[111] !== te || L[112] !== tF || L[113] !== tO || L[114] !== W || L[115] !== eV || L[116] !== K ? (E = tX ?? (te ? (0, a.jsxs)(si.a.Provider, {
                value: eh.at(-1) ?? null,
                children: [es || tn ? null : (0, a.jsx)(e4.a, {
                    onNavigate: tf
                }, Z), tn ? null : J, (0, a.jsx)(oU, {
                    requiredSystemHints: en,
                    composerRef: U,
                    workspace: K,
                    isInlinePreview: er,
                    hideModelPicker: eo,
                    disableAutoFocus: ei,
                    conversationId: Q,
                    isImageEditComposer: ta,
                    disabled: ev,
                    readOnlyPlaceholder: eb,
                    awaitingGptContinuation: eK,
                    headerContent: tJ,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tV ? (0, a.jsx)("div", {
                            ref: tK,
                            className: "empty:hidden"
                        }) : null, ee, !eE && !em && ef && !eK && eV, e6 ? null : eW, tF && tQ]
                    }),
                    isFullscreenComposer: tn,
                    isHidden: e7.isHidden,
                    trackReadState: W && !ea,
                    isSharedConversation: eP,
                    isSubmitDisabled: eA,
                    followupPortalTarget: tD,
                    takeoverDisclaimerRef: tZ,
                    showConversationFollowups: null == eB && null == e0 && !eM && !eR && !tn,
                    isTemporaryChat: eM,
                    isWorkConversation: eR,
                    responseSpacerState: tx,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(ar, {
                            entries: eh,
                            historyLoader: eM || null != eB || null != e0 ? null : (0, a.jsx)(rT.a, {
                                conversationId: Z
                            }),
                            isVisible: t
                        })
                    },
                    showVoiceStage: !tO,
                    voiceDisclaimer: e6 && !tO ? t$ : void 0,
                    onSubmitAccepted: e => {
                        tI(0), eZ?.(e)
                    }
                }, `${Q}:${ta?"image-edit":"chat"}`)]
            }) : tJ), L[73] = ee, L[74] = tX, L[75] = eK, L[76] = Q, L[77] = J, L[78] = U, L[79] = Z, L[80] = ei, L[81] = t$, L[82] = tQ, L[83] = eh, L[84] = tJ, L[85] = tD, L[86] = eW, L[87] = em, L[88] = ef, L[89] = eo, L[90] = e6, L[91] = ev, L[92] = eE, L[93] = ea, L[94] = es, L[95] = tn, L[96] = ta, L[97] = er, L[98] = eP, L[99] = eA, L[100] = eM, L[101] = eR, L[102] = eZ, L[103] = eb, L[104] = tV, L[105] = en, L[106] = tx, L[107] = tf, L[108] = e7.isHidden, L[109] = eB, L[110] = e0, L[111] = te, L[112] = tF, L[113] = tO, L[114] = W, L[115] = eV, L[116] = K, L[117] = E) : E = L[117];
            let t0 = E,
                t1 = ea || void 0;
            L[118] !== Z || L[119] !== ea || L[120] !== tn || L[121] !== W ? (P = !W || tn || ea ? null : (0, a.jsx)(so.a, {
                conversationId: Z
            }), L[118] = Z, L[119] = ea, L[120] = tn, L[121] = W, L[122] = P) : P = L[122], L[123] !== eD || L[124] !== Z || L[125] !== er || L[126] !== eB || L[127] !== e0 ? (A = er || null != eB || null != e0 || null != eD ? null : (0, a.jsx)(aK, {
                conversationId: Z
            }, Z), L[123] = eD, L[124] = Z, L[125] = er, L[126] = eB, L[127] = e0, L[128] = A) : A = L[128], L[129] !== Z || L[130] !== eE || L[131] !== eM || L[132] !== eB || L[133] !== e0 ? (M = eE || eM || null != eB || null != e0 ? null : (0, a.jsx)(rj, {
                conversationId: Z
            }), L[129] = Z, L[130] = eE, L[131] = eM, L[132] = eB, L[133] = e0, L[134] = M) : M = L[134], L[135] !== Z || L[136] !== eh || L[137] !== tp || L[138] !== eT || L[139] !== eE || L[140] !== er || L[141] !== tf || L[142] !== eB || L[143] !== e0 || L[144] !== tu ? (k = er || eE || null != eB || null != e0 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(q, {
                    conversationId: Z,
                    entries: eh,
                    turnListApi: tu
                }), (0, a.jsx)(tw.a, {
                    ready: !eT && tp && null != tu && eh.length > 0,
                    onNavigate: tf
                })]
            }), L[135] = Z, L[136] = eh, L[137] = tp, L[138] = eT, L[139] = eE, L[140] = er, L[141] = tf, L[142] = eB, L[143] = e0, L[144] = tu, L[145] = k) : k = L[145], L[146] !== eD || L[147] !== tl || L[148] !== Q || L[149] !== Y || L[150] !== ti || L[151] !== Z || L[152] !== eu || L[153] !== tR || L[154] !== t$ || L[155] !== tQ || L[156] !== eh || L[157] !== t0 || L[158] !== tT || L[159] !== em || L[160] !== ef || L[161] !== et || L[162] !== eG || L[163] !== t_ || L[164] !== e6 || L[165] !== e5 || L[166] !== ev || L[167] !== eT || L[168] !== eE || L[169] !== ea || L[170] !== es || L[171] !== tn || L[172] !== er || L[173] !== eP || L[174] !== eM || L[175] !== ek || L[176] !== eR || L[177] !== ex || L[178] !== eY || L[179] !== eg || L[180] !== eN || L[181] !== tV || L[182] !== tx || L[183] !== eQ || L[184] !== ec || L[185] !== tA || L[186] !== tL || L[187] !== eB || L[188] !== e0 || L[189] !== V || L[190] !== tz || L[191] !== eF || L[192] !== te || L[193] !== tc || L[194] !== tF || L[195] !== tO || L[196] !== tY || L[197] !== el || L[198] !== tu || L[199] !== K ? (R = K?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!V && K.fullscreenContent, t0]
            }) : (0, a.jsxs)(tP.a, {
                viewportOverlay: es || er || eR || null != eB || null != e0 || null != eD || ea || tn ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(sf, {
                        conversationId: Z
                    }, Z)
                }),
                hideTranscript: es,
                active: !eE && (!ef || null != tu),
                presentation: el ?? (er ? "compact" : "default"),
                contentX: Y,
                composerFade: !1,
                footerPlacement: tl ? "home" : "bottom",
                initialOffset: t_,
                scrollOrigin: ec,
                onScroll: tT,
                responseSpacer: tx,
                scrollToBottomButton: !te || tn || tO ? void 0 : {
                    isWorking: ek
                },
                threadEndContent: e6 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tH,
                        className: tE.a
                    }), null == tY ? t$ : (0, x.createPortal)(t$, tY)]
                }),
                footerLeadingContent: tO ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: tE.a,
                            children: (0, a.jsx)(tv.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: t$
                    })]
                }) : void 0,
                footer: t0,
                children: [er || eE || null != eB ? null : (0, a.jsx)(nG, {
                    conversationId: Z,
                    entries: eh,
                    isConversationFetching: eT,
                    turnListApi: tu
                }), (0, a.jsxs)(l.a.div, {
                    ref: td,
                    style: {
                        x: tL
                    },
                    "data-chatgpt-conversation-selection-target": Z,
                    className: (0, i.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", er && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, e2.K)(eQ, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, e2.K)(eQ, "conversation")
                    },
                    children: [(0, a.jsxs)(b.Suspense, {
                        fallback: (0, a.jsx)(tr.LoadingPage, {
                            debugName: "ChatGptConversationPage",
                            fillParent: !0
                        }),
                        children: [er || eE ? null : (0, a.jsx)(e1.a, {
                            conversationSource: tR
                        }), eM || null != eB || null != e0 ? null : et ?? (0, a.jsx)(rT.a, {
                            conversationId: Z
                        }), (0, a.jsx)(oy.b, {
                            conversationId: Z
                        }), (null != eB || null != e0) && ef ? (0, a.jsx)(r5, {
                            sharedConversationId: eB
                        }) : null, null == eN ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: tE.a,
                                children: eN
                            })
                        }), null == ti || eE ? null : (0, a.jsx)(nl.a, {
                            conversationId: Z,
                            branchSource: {
                                conversationId: ti.metadata.source_conversation_id,
                                title: ti.metadata.source_conversation_title,
                                gizmoId: ti.metadata.source_conversation_gizmo_id,
                                ownerId: ti.metadata.source_conversation_owner_id
                            }
                        }), em ? (0, a.jsx)(eL, {
                            isFetching: eT,
                            isSharedConversation: eP,
                            onRetry: eg
                        }) : eE ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": eu,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(tr.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : ef ? (0, a.jsxs)(rv.a, {
                            value: tA,
                            children: [er || ea ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eM || null != eB || null != e0 ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(eS, {
                                        conversationId: Z
                                    })
                                }), (0, a.jsx)(ej, {
                                    entries: eh,
                                    TurnRowComponent: as
                                })]
                            }), (0, a.jsx)(aI, {
                                conversationId: Z,
                                entries: eh,
                                onApiChange: th,
                                onVisibleContentReady: () => tm(!0),
                                responseSpacerState: tx
                            }), tV ? (0, a.jsx)("div", {
                                ref: tU,
                                className: "empty:hidden"
                            }) : null]
                        }) : tc && null == ti && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            children: (0, a.jsx)(_.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation",
                                description: "Empty state when a ChatGPT conversation has no user or assistant text messages"
                            })
                        }), !tF && tQ, (0, a.jsx)(aU.a, {
                            conversationId: Q,
                            isWorkConversation: eR
                        }), eF && !ev ? (0, a.jsx)(rD, {
                            conversationId: Z,
                            moreDetailsEnabled: ex,
                            onAddSelectedText: eY
                        }) : null]
                    }), er ? null : (0, a.jsx)(nW.a, {
                        initialPlacementKey: eG,
                        isActiveVoiceConversation: e6 && e5,
                        isLoadingHistory: eE,
                        latestUserTurnKey: eh.findLast(oF)?.turnKey,
                        onResponseSpacerStateChange: tC
                    }), tO ? (0, a.jsx)(l.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tz ? tb.c : tb.b
                    }) : null]
                })]
            }), L[146] = eD, L[147] = tl, L[148] = Q, L[149] = Y, L[150] = ti, L[151] = Z, L[152] = eu, L[153] = tR, L[154] = t$, L[155] = tQ, L[156] = eh, L[157] = t0, L[158] = tT, L[159] = em, L[160] = ef, L[161] = et, L[162] = eG, L[163] = t_, L[164] = e6, L[165] = e5, L[166] = ev, L[167] = eT, L[168] = eE, L[169] = ea, L[170] = es, L[171] = tn, L[172] = er, L[173] = eP, L[174] = eM, L[175] = ek, L[176] = eR, L[177] = ex, L[178] = eY, L[179] = eg, L[180] = eN, L[181] = tV, L[182] = tx, L[183] = eQ, L[184] = ec, L[185] = tA, L[186] = tL, L[187] = eB, L[188] = e0, L[189] = V, L[190] = tz, L[191] = eF, L[192] = te, L[193] = tc, L[194] = tF, L[195] = tO, L[196] = tY, L[197] = el, L[198] = tu, L[199] = K, L[200] = R) : R = L[200], L[201] !== ea || L[202] !== t1 || L[203] !== P || L[204] !== A || L[205] !== M || L[206] !== k || L[207] !== R ? (O = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": t1,
                inert: ea,
                children: [P, A, M, k, R]
            }), L[201] = ea, L[202] = t1, L[203] = P, L[204] = A, L[205] = M, L[206] = k, L[207] = R, L[208] = O) : O = L[208];
            let t2 = O;
            return L[209] !== tq || L[210] !== tW || L[211] !== tV ? (G = tV ? {
                aboveComposer: tq,
                belowMessage: tW
            } : null, L[209] = tq, L[210] = tW, L[211] = tV, L[212] = G) : G = L[212], L[213] !== t2 ? (B = (0, a.jsx)(eJ.a, {
                children: t2
            }), L[213] = t2, L[214] = B) : B = L[214], L[215] !== G || L[216] !== B ? (z = (0, a.jsx)(av.a, {
                value: G,
                children: B
            }), L[215] = G, L[216] = B, L[217] = z) : z = L[217], z
        }

        function oF(e) {
            let {
                turn: t
            } = e;
            return t.items.some(oD)
        }

        function oD(e) {
            return "user-message" === e.type
        }

        function oH(e) {
            let {
                turn: t
            } = e;
            return t.items.some(oW)
        }

        function oW(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function oU(e) {
            let t, n, r, o = (0, s.c)(11),
                i = (0, b.useContext)(eY.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return o[0] !== e ? (t = (0, a.jsx)(oq, {
                    ...e
                }), o[0] = e, o[1] = t) : t = o[1], t
            }
            o[2] !== e.conversationId || o[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, o[2] = e.conversationId, o[3] = e.isImageEditComposer, o[4] = t) : t = o[4];
            let l = !e.isWorkConversation;
            return o[5] !== e ? (n = t => (0, a.jsx)(oq, {
                ...e,
                initialController: t
            }), o[5] = e, o[6] = n) : n = o[6], o[7] !== t || o[8] !== l || o[9] !== n ? (r = (0, a.jsx)(rg, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), o[7] = t, o[8] = l, o[9] = n, o[10] = r) : r = o[10], r
        }

        function oq(e) {
            let t, n, r, o, i, l, c, d, u, h, m, g, f, v, y, x, _, w, T, j = (0, s.c)(72);
            j[0] !== e ? ({
                composerRef: t,
                initialController: n,
                ...r
            } = e, j[0] = e, j[1] = t, j[2] = n, j[3] = r) : (t = j[1], n = j[2], r = j[3]);
            let S = (0, p.y)(D.a),
                E = (0, p.x)(R.b, r.isTemporaryChat),
                {
                    isFullscreenComposer: P
                } = r,
                A = (0, C.a)(),
                {
                    state: N
                } = (0, I.X)(),
                O = (0, p.x)(oP, r.conversationId),
                G = (0, p.x)(F.R, r.conversationId),
                B = (0, p.x)(tW.c, r.conversationId);
            j[4] !== B || j[5] !== r.isSharedConversation || j[6] !== r.isWorkConversation || j[7] !== G ? (o = !r.isSharedConversation && !r.isWorkConversation && !(0, al.a)(G) && !B, j[4] = B, j[5] = r.isSharedConversation, j[6] = r.isWorkConversation, j[7] = G, j[8] = o) : o = j[8];
            let z = o,
                L = z && !r.disabled && !r.isSubmitDisabled && !r.isImageEditComposer,
                H = z ? O : void 0;
            j[9] !== r.conversationId || j[10] !== r.isImageEditComposer ? (i = r.isImageEditComposer ? {
                conversationId: r.conversationId,
                surface: "image-edit"
            } : r.conversationId, j[9] = r.conversationId, j[10] = r.isImageEditComposer, j[11] = i) : i = j[11];
            let W = i;
            j[12] !== W || j[13] !== n || j[14] !== r.conversationId ? (l = {
                composerController: n,
                conversationId: r.conversationId,
                draftKey: W
            }, j[12] = W, j[13] = n, j[14] = r.conversationId, j[15] = l) : l = j[15];
            let U = (0, ox.a)(l),
                q = (0, b.useContext)(eY.a),
                K = (0, b.useRef)(!1);
            j[16] !== W || j[17] !== q || j[18] !== n || j[19] !== r.isTemporaryChat || j[20] !== S ? (c = e => {
                null == e || null == n || K.current || (K.current = !0, (0, ny.T)(S, W, n.getPersistedText(), {
                    isTemporaryChat: r.isTemporaryChat
                }), q?.onAdopt())
            }, j[16] = W, j[17] = q, j[18] = n, j[19] = r.isTemporaryChat, j[20] = S, j[21] = c) : c = j[21];
            let V = (0, tG.a)(c);
            j[22] !== V || j[23] !== t ? (d = (0, tN.a)(t, V), j[22] = V, j[23] = t, j[24] = d) : d = j[24];
            let Y = d,
                Z = (0, b.useContext)(si.a),
                $ = (0, p.x)(F.cb, r.conversationId),
                X = (0, p.x)(F._, r.conversationId),
                ee = (0, p.x)(ny.i, r.conversationId);
            j[25] !== X ? (u = (0, F.zb)(X), j[25] = X, j[26] = u) : u = j[26];
            let et = u,
                en = (0, p.z)(M.j.activeTab$);
            if (j[27] !== en || j[28] !== P || j[29] !== et || j[30] !== Z) {
                let e = Z?.turn.items.flatMap(oZ);
                h = P && en?.tabType.kind === ta.a && "generatedImages" in en.props && null != en.props.generatedImages && !et && null != Z && "in_progress" !== Z.turn.status && !Z.turn.hasPendingAssistantReply && !Z.showPendingLoadingMessage && !e?.some(oY) && (null != Z.errorMessage || e?.some(oV)) ? Z.turn.messageIds.at(-1) ?? Z.turnKey : null, j[27] = en, j[28] = P, j[29] = et, j[30] = Z, j[31] = h
            } else h = j[31];
            let ea = h,
                es = (0, b.useRef)(null);
            j[32] !== ea || j[33] !== S ? (m = () => {
                null != ea && ea !== es.current && (es.current = ea, S.set(J.a, "expanded"))
            }, g = [ea, S], j[32] = ea, j[33] = S, j[34] = m, j[35] = g) : (m = j[34], g = j[35]), (0, b.useEffect)(m, g);
            let er = (0, p.w)(rw.a, P ? r.conversationId : null);
            j[36] !== U || j[37] !== L || j[38] !== W || j[39] !== A || j[40] !== P || j[41] !== Y || j[42] !== E || j[43] !== r || j[44] !== S || j[45] !== H || j[46] !== N?.libraryFileCreation ? (f = e => (0, a.jsxs)(tn.a, {
                children: [P && r.trackReadState && !e?.isHidden ? (0, a.jsx)(so.a, {
                    conversationId: r.conversationId,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, r.aboveComposerContent, (0, a.jsx)(eK.a, {
                    children: (0, a.jsx)(nd.a, {
                        ref: Y,
                        headerContent: r.headerContent,
                        allowBackgroundSubmit: r.isInlinePreview,
                        disableAutoFocus: r.disableAutoFocus,
                        conversationOrigin: null == r.workspace ? void 0 : "tpp",
                        mcpAppContext: r.workspace?.mcpAppContext,
                        onServerThreadIdChange: r.workspace?.onServerThreadIdChange,
                        followupPortalTarget: r.followupPortalTarget,
                        takeoverDisclaimerRef: r.takeoverDisclaimerRef,
                        showConversationFollowups: r.showConversationFollowups,
                        autoPrepare: !r.isSubmitDisabled && !r.isSharedConversation,
                        browserConversationId: (0, Q.getThreadBrowserConversationId)(S) ?? r.conversationId,
                        composerController: U,
                        conversationId: r.conversationId,
                        requiredSystemHints: r.requiredSystemHints,
                        hideSystemHints: null != r.requiredSystemHints,
                        draftKey: W,
                        onPromptChange: E,
                        selectedCustomGpt: H,
                        targetGizmoId: H?.id,
                        onCustomGptChange: L ? e => {
                            S.set(oP, r.conversationId, e)
                        } : void 0,
                        onCustomAgentSelected: L ? () => {
                            S.set(oP, r.conversationId, null)
                        } : void 0,
                        disableDraftPrepare: r.isSubmitDisabled || r.isSharedConversation,
                        disableSubmit: r.disabled || r.isSubmitDisabled,
                        voiceInputDisabled: r.disabled,
                        aboveComposerHeaderContent: r.voiceDisclaimer,
                        getExtraDeveloperInstructions: !r.isInlinePreview && N?.libraryFileCreation && !r.isTemporaryChat ? oK : void 0,
                        isTemporaryChat: r.isTemporaryChat,
                        placeholder: r.disabled ? r.readOnlyPlaceholder ?? A.formatMessage({
                            id: "chatgptConversations.sharedConversation.readOnlyPlaceholder",
                            defaultMessage: "This conversation is read-only.",
                            description: "Placeholder inside the disabled message composer when someone views a shared ChatGPT Work conversation that cannot be continued in Codex Desktop"
                        }) : void 0,
                        readOnly: r.disabled,
                        hideModelPicker: r.hideModelPicker,
                        modelPickerPending: r.isSubmitDisabled,
                        showFilePicker: !r.disabled && !r.isSubmitDisabled,
                        showPendingFilePicker: !r.disabled && r.isSubmitDisabled,
                        showVoiceStage: r.showVoiceStage,
                        onSubmitAccepted: t => {
                            e?.onSubmitStart(), r.responseSpacerState?.place(), r.onSubmitAccepted?.(t)
                        },
                        onSubmitError: r.responseSpacerState?.clear
                    })
                })]
            }), j[36] = U, j[37] = L, j[38] = W, j[39] = A, j[40] = P, j[41] = Y, j[42] = E, j[43] = r, j[44] = S, j[45] = H, j[46] = N?.libraryFileCreation, j[47] = f) : f = j[47];
            let eo = f;
            j[48] !== S ? (v = () => {
                (0, e2.K)(S, "conversation")
            }, y = () => {
                (0, e2.K)(S, "conversation")
            }, j[48] = S, j[49] = v, j[50] = y) : (v = j[49], y = j[50]);
            let ei = !r.isInlinePreview && !r.disabled && !r.isSubmitDisabled;
            j[51] !== U || j[52] !== ei ? (x = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(su, {
                    composerController: U,
                    enabled: ei
                })
            }), j[51] = U, j[52] = ei, j[53] = x) : x = j[53];
            let el = P ? "floating" : "pane",
                ec = r.disabled || r.awaitingGptContinuation,
                ed = null == Z && !et,
                eu = ee || et ? "loading" : "idle";
            return j[54] !== eu ? (_ = {
                type: eu,
                unread: !1
            }, j[54] = eu, j[55] = _) : _ = j[55], j[56] !== er || j[57] !== r.isHidden || j[58] !== r.renderTranscript || j[59] !== eo || j[60] !== el || j[61] !== ec || j[62] !== ed || j[63] !== _ || j[64] !== $ ? (w = (0, a.jsx)(k.a, {
                notifications: er,
                isHidden: r.isHidden,
                placement: el,
                forceExpanded: ec,
                composerOnly: ed,
                title: $,
                statusState: _,
                renderTranscript: r.renderTranscript,
                children: eo
            }), j[56] = er, j[57] = r.isHidden, j[58] = r.renderTranscript, j[59] = eo, j[60] = el, j[61] = ec, j[62] = ed, j[63] = _, j[64] = $, j[65] = w) : w = j[65], j[66] !== r.conversationId || j[67] !== v || j[68] !== y || j[69] !== x || j[70] !== w ? (T = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": r.conversationId,
                onMouseDownCapture: v,
                onFocusCapture: y,
                children: [x, w]
            }), j[66] = r.conversationId, j[67] = v, j[68] = y, j[69] = x, j[70] = w, j[71] = T) : T = j[71], T
        }
        async function oK() {
            return [ts.a]
        }

        function oV(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function oY(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function oZ(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
    }),
    Ppno: (function(e, t, n) {
        var a = n("ABep"),
            s = n("QosV"),
            r = n("zd8w"),
            o = n("hZax"),
            i = n("Ho4C"),
            l = n("KFm7"),
            c = n("lsfk"),
            d = n("bIvi");

        function u(e) {
            let t, n, u, h, p, m, g, f, v, y, b, x, C, _ = (0, s.c)(45),
                {
                    initialPlacementKey: I,
                    isActiveVoiceConversation: w,
                    isLoadingHistory: T,
                    latestUserTurnKey: j,
                    onResponseSpacerStateChange: S
                } = e,
                E = void 0 !== w && w,
                P = void 0 !== T && T,
                A = (0, o.k)();
            _[0] !== E || _[1] !== A ? (t = E && (0, o.f)(A, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), _[0] = E, _[1] = A, _[2] = t) : t = _[2];
            let M = t,
                k = (0, r.useRef)(j),
                R = (0, r.useRef)(P),
                N = (0, r.useRef)(null),
                O = (0, r.useRef)(null),
                G = (0, c.b)();
            _[3] !== G ? (n = () => new l.a(G), _[3] = G, _[4] = n) : n = _[4];
            let [B] = (0, r.useState)(n), {
                clear: z,
                consumeGrowth: L,
                getHeightPx: F,
                place: D,
                prepareThreadEndContent: H
            } = B, {
                addScrollListener: W,
                getScrollElement: U
            } = G;
            _[5] !== z || _[6] !== G ? (u = () => {
                z(), G.scrollToBottom()
            }, _[5] = z, _[6] = G, _[7] = u) : u = _[7];
            let q = (0, d.a)(u);
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
            _[10] !== U || _[11] !== j || _[12] !== D || _[13] !== M ? (m = () => {
                let e = U();
                if (null == e || 0 === e.clientHeight) return !1;
                if (M && null != j) {
                    var t, n;
                    let a, s = (t = e, n = j, a = t.querySelector(`[data-turn-key="${CSS.escape(n)}"]`), a?.querySelector("[data-user-message-bubble]") ?? a);
                    if (null == s) return !1;
                    D(s)
                } else D();
                return !0
            }, _[10] = U, _[11] = j, _[12] = D, _[13] = M, _[14] = m) : m = _[14];
            let Y = (0, r.useEffectEvent)(m);
            return _[15] !== z || _[16] !== L || _[17] !== F || _[18] !== S || _[19] !== K || _[20] !== D || _[21] !== H || _[22] !== q || _[23] !== M ? (f = () => (S({
                voiceAutoScrollEnabled: M,
                clear: z,
                consumeGrowth: L,
                getHeightPx: F,
                onTurnLayoutReady: K,
                place: D,
                prepareThreadEndContent: H,
                scrollToBottom: q
            }), () => {
                S(null)
            }), g = [z, L, F, S, K, D, H, q, M], _[15] = z, _[16] = L, _[17] = F, _[18] = S, _[19] = K, _[20] = D, _[21] = H, _[22] = q, _[23] = M, _[24] = g, _[25] = f) : (g = _[24], f = _[25]), (0, r.useLayoutEffect)(f, g), _[26] !== U || _[27] !== P || _[28] !== j || _[29] !== D || _[30] !== V || _[31] !== M ? (v = () => {
                let e = k.current,
                    t = R.current;
                if (k.current = j, R.current = P, M && !P && !t && null != j && j !== e) return function(e, t, n, a) {
                    let s, r = new AbortController,
                        o = null,
                        i = null,
                        l = !1,
                        c = () => {
                            l = !0, null != o && (cancelAnimationFrame(o), o = null), r.abort(), s?.()
                        },
                        d = t();
                    for (let e of ["wheel", "touchstart", "pointerdown", "keydown"]) d?.addEventListener(e, c, {
                        capture: !0,
                        passive: !0,
                        signal: r.signal
                    });
                    return s = a((a, s) => {
                        l || a !== e || (i = s, null == o && (o = requestAnimationFrame(() => {
                            o = null;
                            let e = t(),
                                a = i?.querySelector("[data-user-message-bubble]") ?? i;
                            null != e && 0 !== e.clientHeight && null != a && e.contains(a) && !(a.getBoundingClientRect().height <= 0) && (c(), n(a))
                        })))
                    }), c
                }(j, U, D, V)
            }, y = [U, P, j, D, V, M], _[26] = U, _[27] = P, _[28] = j, _[29] = D, _[30] = V, _[31] = M, _[32] = v, _[33] = y) : (v = _[32], y = _[33]), (0, r.useLayoutEffect)(v, y), _[34] !== W || _[35] !== U || _[36] !== I || _[37] !== Y ? (b = () => {
                if (null == I) return;
                let e = !1;
                return W(() => {
                    e || null == U() || (e = !0, e = Y())
                })
            }, _[34] = W, _[35] = U, _[36] = I, _[37] = Y, _[38] = b) : b = _[38], _[39] !== W || _[40] !== U || _[41] !== I ? (x = [W, U, I], _[39] = W, _[40] = U, _[41] = I, _[42] = x) : x = _[42], (0, r.useLayoutEffect)(b, x), _[43] !== B ? (C = (0, a.jsx)(i.a, {
                controller: B
            }), _[43] = B, _[44] = C) : C = _[44], C
        }
        n.d(t, {
            a: () => u
        })
    }),
    xtkq: (function(e, t, n) {
        var a = n("ABep"),
            s = n("QosV"),
            r = n("iTtm"),
            o = n("zd8w"),
            i = n("Q2Qp"),
            l = n("tSEg"),
            c = n("JCJj"),
            d = n("q542");

        function u() {
            let e, t, n, u = (0, s.c)(6),
                h = (0, r.y)(l.a),
                p = (0, r.z)(c.d),
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
            s = n("QosV"),
            r = n("mBJV"),
            o = n("h6NE"),
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
            I = e => (0, a.jsxs)("svg", {
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
            w = n("yGJW"),
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
        let O = (0, y.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function G(e) {
            let t, n, r, o, l, c = (0, s.c)(12),
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
            return c[5] !== p ? (r = p ? (0, a.jsx)("span", {
                className: "truncate",
                children: p
            }) : null, c[5] = p, c[6] = r) : r = c[6], c[7] !== h ? (o = (0, a.jsx)(B, {
                gizmo: h
            }), c[7] = h, c[8] = o) : o = c[8], c[9] !== r || c[10] !== o ? (l = (0, a.jsxs)("div", {
                className: "flex min-w-0 items-center gap-1 select-none",
                children: [r, o]
            }), c[9] = r, c[10] = o, c[11] = l) : l = c[11], l
        }

        function B(e) {
            let t, n, y, G, B, z, L, F, D, H, W, U, q, K, V, Y, Z, $, Q, J, X = (0, s.c)(59),
                {
                    gizmo: ee
                } = e,
                et = (0, i.y)(j.a),
                en = (0, c.a)(),
                {
                    search: ea
                } = (0, u.X)(),
                es = (0, u.Z)(),
                [er, eo] = (0, l.useState)(!1),
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
            X[5] !== ee.gizmo.id || X[6] !== ee.gizmo.short_url ? (y = ee.gizmo.short_url?.trim() || ee.gizmo.id, X[5] = ee.gizmo.id, X[6] = ee.gizmo.short_url, X[7] = y) : y = X[7], X[8] !== y ? (G = (0, M.c)(y), X[8] = y, X[9] = G) : G = X[9], X[10] !== ea ? (B = (0, k.d)("", (0, k.f)(ea)), X[10] = ea, X[11] = B) : B = X[11];
            let eg = `${G}${B}`;
            X[12] !== en ? (z = en.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions",
                description: "Accessible label for the compact overflow menu containing actions for the current custom GPT in Codex Desktop"
            }), X[12] = en, X[13] = z) : z = X[13];
            let ef = z;
            X[14] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, a.jsx)(_.a, {
                className: "icon-sm"
            }), X[14] = L) : L = X[14], X[15] !== ef ? (F = (0, a.jsx)(m.a, {
                "aria-label": ef,
                color: "ghost",
                size: "icon",
                children: L
            }), X[15] = ef, X[16] = F) : F = X[16], X[17] !== ef || X[18] !== er || X[19] !== F ? (D = (0, a.jsx)(o.a, {
                content: ef,
                disabled: er,
                children: F
            }), X[17] = ef, X[18] = er, X[19] = F, X[20] = D) : D = X[20], X[21] !== ee.gizmo.gizmo_type || X[22] !== ee.gizmo.id || X[23] !== es || X[24] !== eg || X[25] !== et ? (H = "gpt" === ee.gizmo.gizmo_type ? (0, a.jsxs)(g.c.Item, {
                href: eg,
                onClick: e => {
                    e.defaultPrevented || ((0, w.a)(et, r.kc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: ee.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), eo(!1), (0, T.c)(et, null), (0, p.m)(et, "chat"), es(eg, {
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
            }) : null, X[21] = ee.gizmo.gizmo_type, X[22] = ee.gizmo.id, X[23] = es, X[24] = eg, X[25] = et, X[26] = H) : H = X[26], X[27] !== ee || X[28] !== et ? (W = () => (0, b.f)(et, O, {
                accountId: et.get(h.e),
                resource: ee
            }), X[27] = ee, X[28] = et, X[29] = W) : W = X[29], X[30] === Symbol.for("react.memo_cache_sentinel") ? (U = (0, a.jsx)(g.c.ItemIcon, {
                children: (0, a.jsx)(v.ee, {})
            }), q = (0, a.jsx)(d.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About",
                description: "GPT menu action that opens its details over the current conversation or landing page"
            }), X[30] = U, X[31] = q) : (U = X[30], q = X[31]), X[32] !== W ? (K = (0, a.jsxs)(g.c.Item, {
                onSelect: W,
                children: [U, q]
            }), X[32] = W, X[33] = K) : K = X[33];
            let ev = ep ? I : C.a;
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
            }), X[39] = ep, X[40] = Y) : Y = X[40], X[41] !== ev || X[42] !== V || X[43] !== Y ? (Z = (0, a.jsx)(g.c.Item, {
                LeftIcon: ev,
                onSelect: V,
                children: Y
            }), X[41] = ev, X[42] = V, X[43] = Y, X[44] = Z) : Z = X[44], X[45] !== eu || X[46] !== em || X[47] !== ee.gizmo.current_user_permission?.can_view_config ? ($ = eu || ee.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(g.c.Item, {
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
            }) : null, X[45] = eu, X[46] = em, X[47] = ee.gizmo.current_user_permission?.can_view_config, X[48] = $) : $ = X[48], X[49] !== ee ? (Q = (0, a.jsx)(A.a, {
                resource: ee
            }), X[49] = ee, X[50] = Q) : Q = X[50], X[51] !== er || X[52] !== H || X[53] !== K || X[54] !== Z || X[55] !== $ || X[56] !== Q || X[57] !== D ? (J = (0, a.jsxs)(g.a, {
                align: "start",
                contentWidth: "menu",
                open: er,
                onOpenChange: eo,
                triggerButton: D,
                children: [H, K, Z, $, Q]
            }), X[51] = er, X[52] = H, X[53] = K, X[54] = Z, X[55] = $, X[56] = Q, X[57] = D, X[58] = J) : J = X[58], J
        }
    }),
    C6kc: (function(e, t, n) {
        var a = n("mBJV"),
            s = n("MVHH"),
            r = n("D99L"),
            o = n("fVOX"),
            i = n("yGJW"),
            l = n("g2p6");

        function c(e, t) {
            let {
                actionType: n,
                conversationId: a,
                experiment: r,
                messageId: o,
                source: l,
                feedback: c,
                selectedFeedback: u,
                surface: h = "sources"
            } = t, p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_UNSPECIFIED";
            "positive" === c ? p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE" : "negative" === c ? p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE" : Object.is(c, null) && (p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_CLEARED");
            let m = null == l ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_TURN_SOURCES_BUTTON" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_SOURCES_SIDEBAR_ACTION_MENU";
            "explainer" === h && (m = "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON"), (0, i.a)(e, s.T, {
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
                memoryCitationExperiment: r
            }), "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_OPENED" === n && d(e, "chatgpt_memory_citations_sidebar_open_clicked", r)
        }

        function d(e, t, n) {
            "memory_footnote_shown" === t && (0, i.a)(e, r.CodexChatgptInteractionMemoryFootnoteShown, {
                memoryCitationExperiment: n
            }), e.get(o.a).count("default", t, {
                entrypoint: "turn_sources_button",
                memory_citation_experiment: n,
                target: "search_sources_sidebar"
            })
        }

        function u(e, t) {
            "dismissed" === t && (0, i.a)(e, r.CodexChatgptInteractionMemoryIntroductionDismissed, {
                announcementKey: l.c
            }), "shown" === t && (0, i.a)(e, a.kd, {
                eventId: `${l.c}_tooltip_shown`,
                type: "UPSELL_OR_MODAL_TYPE_NUX_TOOLTIP"
            })
        }
        n.d(t, {
            a: () => s.U,
            b: () => c,
            c: () => u,
            d: () => d
        })
    }),
    JlMc: (function(e, t, n) {
        var a = n("QosV"),
            s = n("iTtm"),
            r = n("zd8w"),
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
                x = (0, s.y)(l.a),
                C = (0, r.useId)(),
                {
                    mutate: _
                } = (0, i.p)();
            return f[0] !== v || f[1] !== C || f[2] !== x ? (t = () => (x.set(p.b, e => new Map(e).set(C, v)), x.get(p.a)?.dismissCurrent(), () => {
                x.set(p.b, e => {
                    let t = new Map(e);
                    return t.delete(C), t
                })
            }), n = [v, C, x], f[0] = v, f[1] = C, f[2] = x, f[3] = t, f[4] = n) : (t = f[3], n = f[4]), (0, r.useEffect)(t, n), f[5] !== v || f[6] !== b || f[7] !== _ || f[8] !== x ? (m = () => {
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
                        let s = (0, u.b)(a);
                        (0, c.j)(x, s, x.get(d.x, s)), _(a)
                    });
                return () => {
                    e(), t(), (0, h.$b)(x, v, !1)
                }
            }, g = [v, b, _, x], f[5] = v, f[6] = b, f[7] = _, f[8] = x, f[9] = m, f[10] = g) : (m = f[9], g = f[10]), (0, r.useEffect)(m, g), null
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
            s = n("QosV"),
            r = n("iRMi"),
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
            I = n("FGJH"),
            w = n("Vcrm"),
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
            let t, n, P, G, z, L, F = (0, s.c)(28),
                {
                    conversationId: D,
                    turns: H,
                    loadHistory: W,
                    renderMode: U,
                    paragenEnabled: q,
                    enabled: K,
                    canCopy: V,
                    priority: Y
                } = e,
                Z = void 0 === U ? "conversation" : U,
                $ = void 0 !== q && q,
                Q = void 0 === K || K,
                J = void 0 === V || V,
                X = void 0 === Y ? "fallback" : Y,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            F[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), F[0] = t) : t = F[0], F[1] !== J || F[2] !== D || F[3] !== Q || F[4] !== W || F[5] !== $ || F[6] !== Z ? (n = [D, Q, J, W, Z, $], F[1] = J, F[2] = D, F[3] = Q, F[4] = W, F[5] = $, F[6] = Z, F[7] = n) : n = F[7], (0, c.useEffect)(t, n), F[8] !== J || F[9] !== D || F[10] !== $ || F[11] !== Z || F[12] !== ee || F[13] !== H ? (P = () => {
                let e = ee.get(C.j, D),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(C.x, D);
                if (!J || "tpp" === n || "flora" === n) return null;
                let a = ee.get(C.L, D),
                    s = $ && "conversation" === Z ? ee.get(w.a, D)?.promptMessageId : void 0,
                    r = function(e) {
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
                                            let s = (0, k.a)(n.data, e.contentReferences),
                                                r = N.d.safeParse(s?.reference);
                                            if (null == s || !r.success || (null == n.data.is_streaming ? !e.completed && (e.contentReferenceMessageStatuses?.[s.index] ?? "in_progress") === "in_progress" : "true" === n.data.is_streaming)) return;
                                            let o = e.contentReferenceMessageIds?.[s.index];
                                            t = {
                                                content: (0, R.a)(r.data.data),
                                                messageId: o ?? e.messageId,
                                                codeBlockIndex: null == o ? s.index : e.contentReferenceMessageIds?.slice(0, s.index).filter(e => e === o).length ?? 0
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
                        threadCurrentNode: s ?? ee.get(C.B, D),
                        conversationOrigin: n,
                        isStreaming: (0, C.zb)(ee.get(C._, D)),
                        mode: Z,
                        moderationDisclaimersByMessageId: ee.get(C.M, D),
                        pendingSubmission: null
                    }).renderedTurns);
                if (r?.messageId == null) return {
                    serverId: e,
                    comparisonPromptMessageId: s,
                    content: r?.content
                };
                let o = {
                        conversationId: D,
                        messageId: r.messageId,
                        codeBlockIndex: r.codeBlockIndex
                    },
                    i = (0, j.a)(a?.[r.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: s,
                    content: ee.get(T.b, o) ?? i?.[String(r.codeBlockIndex)]?.content ?? r.content
                }
            }, F[8] = J, F[9] = D, F[10] = $, F[11] = Z, F[12] = ee, F[13] = H, F[14] = P) : P = F[14];
            let en = (0, y.a)(P);
            F[15] !== ee ? (G = (e, t) => {
                let n = e => {
                    (0, g.a)(ee, o.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: r.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
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
            }, F[15] = ee, F[16] = G) : G = F[16];
            let ea = G;
            return F[17] !== D || F[18] !== en || F[19] !== W || F[20] !== $ || F[21] !== Z || F[22] !== ee || F[23] !== ea ? (z = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!W || ee.get(C.A, D) || null == t || ee.get(I.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let s = ee.get(u.a),
                    r = ee.get(C.B, D),
                    o = ee.get(h.f).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== s || t(C.B, D) !== r || $ && "conversation" === Z && t(w.a, D)?.promptMessageId !== n || t(h.f).copyLastCodeBlock !== o) && a.abort()
                    });
                ea((async () => {
                    await (0, _.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, F[17] = D, F[18] = en, F[19] = W, F[20] = $, F[21] = Z, F[22] = ee, F[23] = ea, F[24] = z) : z = F[24], F[25] !== Q || F[26] !== X ? (L = {
                enabled: Q,
                priority: X
            }, F[25] = Q, F[26] = X, F[27] = L) : L = F[27], (0, p.a)("copyLastCodeBlock", z, L), null
        }

        function B() {}
    }),
    WVag: (function(e, t, n) {
        var a = n("LwKP"),
            s = n("iTtm"),
            r = n("ASxG"),
            o = n("fDv2"),
            i = n("OWtl"),
            l = n("MrGp");
        let c = r.object({
                epic_patient_label: r.string(),
                epic_patient_name: r.string().nullable().optional(),
                epic_patient_birth_date: o.date().nullable().optional(),
                epic_encounter_label: r.string().nullable().optional()
            }),
            d = (0, s.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(l.L, e);
                return null == a ? null : Object.values(a).map(e => e.message)
            }, {
                autoDispose: !0,
                isEqual: (e, t) => e === t || null != e && null != t && e.length === t.length && e.every((e, n) => e?.id === t[n]?.id && e?.metadata === t[n]?.metadata)
            }),
            u = (0, s.i)(i.a, e => null, (e, t) => {
                let {
                    scope: n,
                    set: s
                } = t;
                if (null == e) return;
                let r = null,
                    o = () => {
                        s(h(e, r, null))
                    };
                window.addEventListener(a.b, o);
                let i = n.watch(t => {
                    let {
                        get: n
                    } = t;
                    r = n(d, e), o()
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
                s = c.safeParse(a?.metadata),
                r = "u" < typeof window ? void 0 : window.__oaiEpicNativeLaunch,
                o = (null == e ? n : null) ?? (t?.some(e => e?.id != null && r?.ownsMessage(e.id)) ? r?.get() ?? null : null);
            return s.success || null != o ? {
                labels: s.success ? s.data : null,
                snapshot: o,
                destination: null == o ? void 0 : r?.destination()
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
            s = n("QosV"),
            r = n("iTtm"),
            o = n("oyxz"),
            i = n("Cslg"),
            l = n("bqtn"),
            c = n("bf6R"),
            d = n("Bbed"),
            u = n("X6Vn"),
            h = n("OWtl");
        let p = (0, d.a)(async () => (await n.e(306529).then(n.bind(n, "GkN4"))).GptReportDialog);

        function m(e) {
            let t, n, d, m, g = (0, s.c)(9),
                {
                    resource: f,
                    onSelect: v
                } = e,
                y = (0, r.y)(h.a),
                b = (0, r.z)(i.e);
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
            s = n("QosV"),
            r = n("on57"),
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
            let t, n = (0, s.c)(3),
                {
                    gizmoId: r
                } = e,
                i = (0, o.x)(d.c, "2160578039");
            return n[0] !== i || n[1] !== r ? (t = i ? (0, a.jsx)(m, {
                gizmoId: r
            }, r) : null, n[0] = i, n[1] = r, n[2] = t) : t = n[2], t
        }

        function f(e) {
            let t, n, o, i = (0, s.c)(7),
                {
                    entryPoint: l,
                    gizmoId: c
                } = e,
                d = "codex" === l && "electron:mx-[var(--home-composer-inline-inset)]";
            return i[0] !== d ? (t = (0, r.b)("empty:hidden", d), i[0] = d, i[1] = t) : t = i[1], i[2] !== c ? (n = (0, a.jsx)(g, {
                gizmoId: c
            }), i[2] = c, i[3] = n) : n = i[3], i[4] !== t || i[5] !== n ? (o = (0, a.jsx)("div", {
                className: t,
                children: n
            }), i[4] = t, i[5] = n, i[6] = o) : o = i[6], o
        }

        function v(e) {
            let t, n, r = (0, s.c)(10),
                {
                    gizmoId: l
                } = e,
                d = (0, o.y)(c.a),
                m = (0, i.X)(),
                g = (0, i.Z)(),
                {
                    data: f
                } = (0, o.x)(u.b, l);
            r[0] !== l || r[1] !== m.pathname ? (t = {
                gizmoId: l,
                visitKey: m.pathname
            }, r[0] = l, r[1] = m.pathname, r[2] = t) : t = r[2];
            let v = (0, o.x)(p.c, t);
            return r[3] !== v || r[4] !== l || r[5] !== m.pathname || r[6] !== g || r[7] !== f || r[8] !== d ? (n = v && f?.gizmo.migrated_plugin_id ? (0, a.jsx)(h.a, {
                gptName: f.gizmo.display.name,
                accessState: "error",
                onUsePlugin: () => void g("/plugins"),
                onKeepUsingGpt: () => (0, p.a)(d, {
                    gizmoId: l,
                    visitKey: m.pathname
                })
            }) : null, r[3] = v, r[4] = l, r[5] = m.pathname, r[6] = g, r[7] = f, r[8] = d, r[9] = n) : n = r[9], n
        }
        n.d(t, {
            GptPluginMigrationBanner: () => g,
            GptPluginMigrationHomeBanner: () => f
        })
    }),
    tV8b: (function(e, t, n) {
        var a = n("ABep"),
            s = n("QosV"),
            r = n("Wf1j"),
            o = n("oyxz"),
            i = n("zKCW"),
            l = n("ygO2"),
            c = n("HOLv"),
            d = n("hZax"),
            u = n("slBk"),
            h = n("UnLw");

        function p(e) {
            let t, n, p, m, g, f, v, y, b, x = (0, s.c)(34),
                {
                    gptName: C,
                    accessState: _,
                    onUsePlugin: I,
                    onKeepUsingGpt: w,
                    onRetry: T
                } = e,
                j = (0, r.a)(),
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
                A = "error" === _ && null != T ? T : I;
            return x[21] !== n || x[22] !== P || x[23] !== A ? (f = (0, a.jsx)(l.a, {
                color: "primary",
                loading: P,
                size: "dialog",
                type: "button",
                onClick: A,
                children: n
            }), x[21] = n, x[22] = P, x[23] = A, x[24] = f) : f = x[24], x[25] !== w ? (v = null == w ? null : (0, a.jsx)(l.a, {
                color: "outline",
                size: "dialog",
                type: "button",
                onClick: w,
                children: (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceKeepUsing",
                    defaultMessage: "Keep using GPT",
                    description: "Reveals the existing GPT chat composer for this visit only, keeping its draft. The choice is shown again when the GPT is reopened."
                })
            }), x[25] = w, x[26] = v) : v = x[26], x[27] !== f || x[28] !== v ? (y = (0, a.jsxs)("div", {
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
        let s = Date.UTC(2026, 11, 11);

        function r(e) {
            if (!/^\d{4}-\d{2}-\d{2}$/.test(e)) return s;
            let t = Date.parse(`${e}T00:00:00.000Z`);
            return Number.isFinite(t) && new Date(t).toISOString().slice(0, 10) === e ? t : s
        }

        function o(e, t) {
            let n = ((0, a.a)(e)?.locale ?? "en-US").toLowerCase(),
                s = "en-us" === n ? "en" : n,
                r = `https://help.openai.com/${s}/articles/20001519-custom-gpt-retirement-and-migration-faq`;
            try {
                let e = new URL(t.replaceAll("{lang}", s));
                return "https:" === e.protocol ? e.href : r
            } catch {
                return r
            }
        }
        n.d(t, {
            a: () => r,
            b: () => o
        })
    }),
    T33u: (function(e, t, n) {
        var a = n("czpb"),
            s = n("iTtm"),
            r = n("ASxG"),
            o = n("OWtl"),
            i = n("OMIV"),
            l = n("b6fw");
        let c = r.object({
                course_id: r.string().trim().min(1),
                title: r.string().trim().nullish().catch(null),
                icon_url_or_emoji: r.url({
                    protocol: /^https$/
                }).or(r.emoji()).nullish().catch(null)
            }),
            d = r.object({
                course_info: c.nullish()
            }),
            u = (0, s.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t, a = d.safeParse(n(l.g, e)?.view);
                return a.success ? a.data.course_info ?? null : null
            }, {
                isEqual: a.isEqual
            }),
            h = (0, s.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(i.c, "4035922817") ? n(u, e) : null
            }),
            p = (0, s.d)(o.a, (e, t) => {
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
            s = n("XtQP"),
            r = n("MrGp"),
            o = n("ZniH");
        let i = (0, a.a)({
            conversationIds: (e, t) => [t],
            status: (e, t) => {
                let {
                    get: n
                } = e, a = n(r.v, t);
                return {
                    pending: (0, r.zb)(n(r._, t)),
                    completed: null == a || "completed" === a.result,
                    unread: n(r.I, t)
                }
            },
            preview: (e, t) => {
                let {
                    get: n
                } = e, a = n(r.L, t);
                return null == a ? null : (0, o.a)({
                    mapping: a,
                    current_node: n(r.B, t)
                })?.text ?? null
            },
            title: (e, t) => {
                let {
                    get: n
                } = e;
                return n(r.cb, t) || null
            },
            dismiss: (e, t) => {
                (0, r.Ub)(e, t, !1), (0, s.b)(e, t).catch(() => {})
            }
        });
        n.d(t, {}, {
            a: i
        })
    }),
    M3Kf: (function(e, t, n) {
        var a = n("ABep"),
            s = n("QosV"),
            r = n("iTtm"),
            o = n("zd8w"),
            i = n("v7qY"),
            l = n("OWtl"),
            c = n("yLzP"),
            d = n("lsfk"),
            u = n("MrGp"),
            h = n("jfiJ"),
            p = n("FGJH");

        function m(e) {
            let t, n, m, f, v, y = (0, s.c)(18),
                {
                    conversationId: b
                } = e,
                x = (0, r.y)(l.a),
                C = (0, r.x)(u.j, b),
                _ = (0, r.x)(p.c, C ?? b),
                I = (0, d.b)(),
                w = (0, o.useRef)(null);
            y[0] !== x || y[1] !== C ? (t = () => {
                null != C && (0, h.b)(x, C, i.flushSync)
            }, y[0] = x, y[1] = C, y[2] = t) : t = y[2];
            let T = t;
            y[3] !== b || y[4] !== T || y[5] !== x || y[6] !== C ? (n = () => {
                let e = x.get(p.c, C ?? b);
                e?.hasError || T()
            }, y[3] = b, y[4] = T, y[5] = x, y[6] = C, y[7] = n) : n = y[7];
            let j = (0, o.useEffectEvent)(n);
            y[8] !== I || y[9] !== j ? (m = () => {
                let e = w.current,
                    t = I.getScrollElement();
                if (null == e || null == t) return;
                let n = new IntersectionObserver(e => {
                    e.some(g) && j()
                }, {
                    root: t,
                    rootMargin: "80px 0px 0px 0px"
                });
                return n.observe(e), () => n.disconnect()
            }, y[8] = I, y[9] = j, y[10] = m) : m = y[10];
            let S = _?.cursor,
                E = _?.hasError;
            if (y[11] !== I || y[12] !== C || y[13] !== S || y[14] !== E ? (f = [I, C, S, E], y[11] = I, y[12] = C, y[13] = S, y[14] = E, y[15] = f) : f = y[15], (0, o.useEffect)(m, f), null == _ || _.complete || null == _.cursor) return null;
            let P = _.hasError ? T : null;
            return y[16] !== P ? (v = (0, a.jsx)(c.a, {
                ref: w,
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
            s = n("QosV"),
            r = n("iTtm"),
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
            I = n("KMqT"),
            w = n("J6LI"),
            T = n("FgUr"),
            j = n("WLgA");
        let S = (0, r.u)(f.a, 0);

        function E(e) {
            let t, n, i = (0, s.c)(12),
                {
                    conversation: d,
                    onCreateProjectDialogCloseAutoFocus: u,
                    project: h,
                    showMoveToProject: p
                } = e,
                m = void 0 === p || p,
                g = (0, r.y)(f.a),
                v = (0, l.Z)(),
                b = (0, r.z)(y.a),
                x = (0, r.z)(C.m),
                I = (0, _.b)();
            if (i[0] !== d || i[1] !== v || i[2] !== u || i[3] !== x || i[4] !== h || i[5] !== I || i[6] !== b || i[7] !== g || i[8] !== m) {
                let e = P({
                        scope: g,
                        conversation: d,
                        project: h,
                        projectListQuery: b,
                        pinnedProjectsQuery: x,
                        showMoveToProject: m,
                        projectCrudStatus: I,
                        navigate: v,
                        onCreateProjectDialogCloseAutoFocus: u
                    }),
                    n = e => {
                        if ("separator" === e.type) return (0, a.jsx)(c.c.Separator, {}, e.id);
                        let t = e.message ? (0, a.jsx)(o.a, {
                                ...e.message,
                                values: e.messageValues
                            }) : e.id,
                            s = e.tooltipMessage ? (0, a.jsx)(o.a, {
                                ...e.tooltipMessage,
                                values: e.tooltipMessageValues
                            }) : void 0;
                        return null != e.submenu ? (0, a.jsx)(c.c.FlyoutSubmenuItem, {
                            LeftIcon: "function" == typeof e.icon ? e.icon : void 0,
                            disabled: !1 === e.enabled,
                            tooltipSide: "bottom",
                            tooltipSideOffset: 8,
                            label: t,
                            tooltipText: s,
                            children: e.submenu.map(n)
                        }, e.id) : (0, a.jsx)(c.c.Item, {
                            LeftIcon: "function" == typeof e.icon ? e.icon : void 0,
                            leftIcon: "object" == typeof e.icon ? e.icon : void 0,
                            disabled: !1 === e.enabled,
                            tooltipSide: "bottom",
                            tooltipSideOffset: 8,
                            tooltipText: s,
                            onSelect: t => {
                                !1 === e.closeOnSelect && t.preventDefault(), e.onSelect?.()
                            },
                            children: t
                        }, e.id)
                    };
                t = e.map(n), i[0] = d, i[1] = v, i[2] = u, i[3] = x, i[4] = h, i[5] = I, i[6] = b, i[7] = g, i[8] = m, i[9] = t
            } else t = i[9];
            return i[10] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), i[10] = t, i[11] = n) : n = i[11], n
        }

        function P(e) {
            let {
                scope: t,
                conversation: n,
                project: s,
                projectListQuery: r,
                pinnedProjectsQuery: o,
                showMoveToProject: i = !0,
                showDestinationFetchState: l = !0,
                projectCrudStatus: c,
                navigate: f,
                onCreateProjectDialogCloseAutoFocus: _
            } = e, {
                isWorkConversation: E,
                sourceMemoryBlocked: P
            } = (0, w.c)(n, s), M = P ? v.a.projectOnlyMoveUnavailable : void 0, {
                data: k,
                isPending: R,
                isError: N
            } = r, {
                data: O,
                isPending: G,
                isError: B
            } = o, z = (0, T.a)(O, k, s?.gizmo.id), L = "allowed" === c, F = e => {
                let a = t.get(S) + 1,
                    s = t.get(p.d);
                t.set(S, a), (0, C.T)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(n => {
                    n && t.get(S) === a && t.get(p.d) === s && f((0, j.c)(e.gizmo.id))
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
                }), z.length > 0 && D.push({
                    id: "new-project-separator",
                    type: "separator"
                })), z)) {
                let {
                    targetMemoryBlocked: t
                } = (0, w.c)(n, void 0, e), s = t ? (0, I.a)((0, b.c)(e)) : void 0;
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
                    enabled: null == s,
                    tooltipMessage: s,
                    onSelect: () => F(e)
                })
            }
            return l && (N || B) ? D.push({
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
            }) : N || B || R || G || 0 !== z.length || L || D.push({
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
            }] : [], ...null == s ? [] : [{
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
            s = n("Qgfj"),
            r = n("OWtl"),
            o = n("MrGp"),
            i = n("b6fw");
        let l = (0, a.d)(r.a, (e, t) => {
            let {
                get: n
            } = t, a = n(i.g, e);
            if (null == a) return null;
            let s = n(o.L, e);
            return null == s ? null : function(e) {
                let {
                    conversation: t,
                    view: n,
                    selectedSectionId: a,
                    entryMessageIds: s,
                    entry: r
                } = e, o = n.definition.sections, i = o.findIndex(e => e.id === a), l = o[i], c = [], d = new Set, u = t.current_node ?? null;
                for (; null != u && !d.has(u);) c.push(u), d.add(u), u = t.mapping[u]?.parent ?? null;
                c.reverse();
                let h = new Map(c.map((e, t) => [e, t])),
                    p = e => {
                        if (null == e) return;
                        let t = [e.start_message_id, ...s[e.id] ?? []].flatMap(e => {
                            let t = null == e ? void 0 : h.get(e);
                            return null == t ? [] : [t]
                        });
                        return 0 === t.length ? void 0 : Math.min(...t)
                    },
                    m = o[i + 1],
                    g = p(l),
                    f = p(m),
                    v = l?.start_message_id != null && null == g || m?.start_message_id != null && null == f,
                    y = r?.status === "sending" && (r.sectionId === l?.id || r.sectionId === m?.id),
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
                    isReviewing: a !== n.current_section_id && r?.sectionId !== a,
                    needsEntry: l?.start_message_id == null,
                    isEntering: r?.status === "sending"
                }
            }({
                ...a,
                conversation: {
                    mapping: s,
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
        let d = (0, s.f)({
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
            s = n("QosV"),
            r = n("iTtm"),
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
            let t, n = (0, s.c)(3),
                {
                    postId: o
                } = e,
                c = (0, r.y)(h.a);
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
            let t, n = (0, s.c)(2),
                {
                    imageOnly: r
                } = e,
                o = void 0 !== r && r;
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
            let t, n, o, l = (0, s.c)(9),
                {
                    imageOnly: u
                } = e,
                m = (0, r.y)(h.a),
                g = (0, r.x)(p.d, (0, c.a)());
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
            s = n("QosV"),
            r = n("iTtm"),
            o = n("bjsR"),
            i = n("Cslg"),
            l = n("OFP1"),
            c = n("EOo5"),
            d = n("MMlk");

        function u(e) {
            let t, n, u, h = (0, s.c)(9),
                {
                    children: p
                } = e,
                m = (0, c.a)(),
                g = (0, r.z)(i.k),
                f = (0, r.z)(l.l);
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
            s = n("HVBu"),
            r = n.n(s),
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
            let t, n, s, f, v, y, b = (0, a.c)(19);
            b[0] !== e ? (t = void 0 === e ? {} : e, b[0] = e, b[1] = t) : t = b[1];
            let {
                composerController: x,
                conversationId: C,
                draftKey: _,
                initialPrompt: I,
                initialPromptKind: w
            } = t, T = void 0 === _ ? C : _, j = (0, o.y)(u.a);
            b[2] !== C || b[3] !== T || b[4] !== I || b[5] !== w || b[6] !== j ? (n = () => r()(() => {
                let e = null == C ? null : j.get(g.x, C),
                    t = (0, d.e)(I ?? (null == T ? "" : j.get(p.s, T)), {
                        addInitialContentToHistory: null == I && null != T,
                        defaultTextKind: w ?? (null == I && null != T || (0, c.b)(I ?? "").length > 0 ? "prompt" : "plain"),
                        enableFileMentions: !0,
                        enableRichText: !0,
                        enableSkillMentions: !1,
                        enableSlashCommands: {
                            triggers: ["/"]
                        },
                        plainTextMode: (0, h.b)(j.get, i.of.composerPlainTextMode),
                        suggestionOptions: {
                            enableInlineSystemHints: "tpp" !== e && "flora" !== e,
                            variant: "tpp" !== e && "flora" !== e ? "chatgpt" : void 0
                        }
                    });
                return null == I && null != C && "string" == typeof T && null != (0, m.j)(j, T) && "tpp" !== e && "flora" !== e && (0, p.O)(j, C, t.getChatGptPrompt().systemHints), t
            }), b[2] = C, b[3] = T, b[4] = I, b[5] = w, b[6] = j, b[7] = n) : n = b[7];
            let [S] = (0, l.useState)(n);
            b[8] !== S || b[9] !== x ? (s = x ?? S(), b[8] = S, b[9] = x, b[10] = s) : s = b[10];
            let E = s,
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

        function s(e, t, n) {
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

        function r(e) {
            return e?.tabType.kind === "ecosystem-focused-object"
        }
        n.d(t, {
            a: () => r,
            b: () => s
        })
    }),
    WQca: (function(e, t, n) {
        var a = n("QosV"),
            s = n("iTtm"),
            r = n("zd8w"),
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
                f = (0, s.y)(l.a),
                v = (0, o.Z)(),
                y = (0, r.useRef)(!1);
            d[0] !== p || d[1] !== h || d[2] !== v || d[3] !== m || d[4] !== f ? (t = () => {
                m?.(), f.get(i.f).info(h, {
                    id: "conversation-inaccessible",
                    duration: 5
                }), v(p, {
                    replace: !0
                })
            }, d[0] = p, d[1] = h, d[2] = v, d[3] = m, d[4] = f, d[5] = t) : t = d[5];
            let b = (0, r.useEffectEvent)(t);
            return d[6] !== u || d[7] !== b ? (n = () => {
                u && !y.current && (y.current = !0, b())
            }, d[6] = u, d[7] = b, d[8] = n) : n = d[8], d[9] !== u ? (c = [u], d[9] = u, d[10] = c) : c = d[10], (0, r.useEffect)(n, c), u ? null : g
        }
        n.d(t, {
            a: () => c
        })
    }),
    IxWh: (function(e, t, n) {
        var a = n("Vzyk"),
            s = n.n(a);

        function r(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ltr",
                n = Math.max(0, e.scrollWidth - e.clientWidth);
            if ("rtl" === t) return {
                maximum: 0,
                minimum: -n
            };
            let a = e.firstElementChild,
                s = Math.min(n, a instanceof HTMLElement ? Math.max(0, i(e, a, t)) : 0);
            return {
                maximum: n,
                minimum: s
            }
        }

        function o(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr",
                {
                    maximum: a,
                    minimum: o
                } = r(e, n),
                c = "rtl" === n ? -t : t,
                d = s()(e.scrollLeft + c * (e.clientWidth - l(e, n)), o, a),
                u = e.children;
            for (let r = 1 === t ? 0 : u.length - 1; r >= 0 && r < u.length; r += t) {
                let t = u.item(r);
                if (!(t instanceof HTMLElement)) continue;
                let l = s()(i(e, t, n), o, a);
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
            a: () => r,
            b: () => o
        })
    }),
    RZBv: (function(e, t, n) {
        var a = n("ABep"),
            s = n("QosV"),
            r = n("xSOA"),
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
            let t, n, C, _, I, w, T, j, S, E = (0, s.c)(36),
                {
                    conversationId: P,
                    kind: A
                } = e,
                M = (0, o.y)(m.a),
                k = (0, i.a)(),
                R = (0, c.X)(),
                N = (0, c.Z)();
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
            let B = n;
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
            }, E[12] = P, E[13] = A, E[14] = M, E[15] = _) : _ = E[15], E[16] !== P || E[17] !== O || E[18] !== A || E[19] !== M ? (I = (e, t, n) => {
                n?.("restored");
                let s = M.get(h.f).info((0, a.jsx)(l.a, {
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
                            s.close(), O()
                        }
                    },
                    id: `unarchive-thread-${A}:${P}`
                })
            }, E[16] = P, E[17] = O, E[18] = A, E[19] = M, E[20] = I) : I = E[20], E[21] !== k || E[22] !== M ? (w = (e, t, n) => {
                n?.(null), M.get(h.f).danger(k.formatMessage(g.a.unarchiveError), {
                    errorAnalytics: {
                        toastId: "previewFooter.onError.unarchiveError"
                    }
                })
            }, E[21] = k, E[22] = M, E[23] = w) : w = E[23], E[24] !== C || E[25] !== _ || E[26] !== I || E[27] !== w ? (T = {
                onMutate: C,
                mutationFn: _,
                onSuccess: I,
                onError: w
            }, E[24] = C, E[25] = _, E[26] = I, E[27] = w, E[28] = T) : T = E[28];
            let {
                mutate: z,
                isPending: L,
                isSuccess: F
            } = (0, r.a)(T), D = F || B?.status === "restored", H = L || B?.status === "restoring";
            return E[29] !== z ? (j = () => z(), E[29] = z, E[30] = j) : j = E[30], E[31] !== O || E[32] !== j || E[33] !== D || E[34] !== H ? (S = (0, a.jsx)(v.a, {
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
    w2yL: (function(e, t, n) {
        function a(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300,
                n = (e - 736) / 2,
                a = t - 300;
            return n < 180 + a / 2 ? "overlay" : n < 400 + a ? "shift" : "gutter"
        }

        function s(e) {
            let {
                displayMode: t,
                isPinned: n,
                isPopoverOpen: a
            } = e, s = n && "overlay" !== t, r = null;
            return s ? r = "inline" : "overlay" === t && a && (r = "popover"), {
                displayMode: t,
                shouldHideInlineImmediately: "overlay" === t && a,
                shouldShow: s,
                visibleSurface: r
            }
        }

        function r(e) {
            let {
                displayMode: t,
                isPinned: n,
                panelWidth: a = 300
            } = e;
            return n && "shift" === t ? -(308 + a - 300) / 2 : 0
        }
        n.d(t, {
            a: () => s,
            b: () => r,
            c: () => a
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