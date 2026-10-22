export const __rspack_esm_id = 334056;
export const __rspack_esm_ids = [334056];
export const __webpack_modules__ = {
    bn5: (function(e, t, n) {
        n.d(t, {
            a: () => z,
            ChatSeatAccessScreen: () => F
        });
        var a = n("A"),
            r = n("Qo"),
            s = n("Xnl"),
            o = n("zd"),
            i = n("oy"),
            l = n("HZ"),
            c = n("hz"),
            d = n("OF"),
            u = n("kph"),
            h = n("ygO"),
            p = n("DVO"),
            g = n("OW"),
            m = n("wtC"),
            f = n("Wf"),
            v = n("AS"),
            b = n("fDv"),
            y = n("Iet"),
            x = n("CL"),
            C = n("EO"),
            w = n("Kwu"),
            _ = n("ud"),
            I = n("aT"),
            j = n("JN"),
            S = n("mU"),
            T = n("Ot7"),
            A = n("SGs"),
            P = n("DAA"),
            M = n("yG"),
            E = n("GD");

        function k(e) {
            let t, n, l, c, d, u, p, v, b, E, k, N, F, G, z, L, D, B, W, H, q, U, K = (0, r.c)(70),
                {
                    account: $,
                    accountId: X,
                    userId: V,
                    onClose: Q,
                    onSwitchToWork: Z
                } = e,
                Y = (0, s.z)(g.a),
                J = (0, f.a)(),
                {
                    email: ee
                } = (0, C.a)(),
                [et, en] = (0, o.useState)(),
                ea = (0, o.useRef)(!0);
            K[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => (ea.current = !0, () => {
                ea.current = !1
            }), n = [], K[0] = t, K[1] = n) : (t = K[0], n = K[1]), (0, o.useEffect)(t, n);
            let er = "account-owner" === $.account.account_user_role,
                es = "account-admin" === $.account.account_user_role,
                eo = !0 === $.entitlement.has_active_subscription,
                ei = (er || es) && eo,
                el = er || ei;
            K[2] !== ei || K[3] !== er ? (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE", ei ? l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY" : er && (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE"), K[2] = ei, K[3] = er, K[4] = l) : l = K[4], K[5] !== $.account.account_user_role || K[6] !== l || K[7] !== eo || K[8] !== Y ? (c = (e, t) => {
                (0, M.a)(Y, m.md, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: $.account.account_user_role ?? void 0,
                    hasPaidSubscription: eo
                })
            }, K[5] = $.account.account_user_role, K[6] = l, K[7] = eo, K[8] = Y, K[9] = c) : c = K[9];
            let ec = c;
            K[10] !== Q ? (d = () => {
                Q(), (0, T.f)({
                    href: new URL("/codex/cloud", I.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, K[10] = Q, K[11] = d) : d = K[11];
            let ed = d;
            K[12] !== $.account.subscription_seat_pools_enabled || K[13] !== X || K[14] !== ed || K[15] !== ei || K[16] !== ee || K[17] !== J || K[18] !== er || K[19] !== ec || K[20] !== Q || K[21] !== Z || K[22] !== et || K[23] !== Y || K[24] !== V ? (u = async () => {
                if ("requesting" !== et) {
                    if (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), er && !ei) {
                        let e = new URL("/admin/members", I.h);
                        e.searchParams.set("account_id", X), ee && e.searchParams.set("search", ee);
                        let t = e.toString(),
                            n = (0, P.c)(Y, t, X),
                            a = null == n ? null : await n;
                        Q(), (0, T.f)({
                            href: a ?? t,
                            initiator: "open_in_browser_bridge",
                            openTarget: null == a ? void 0 : "external-browser"
                        });
                        return
                    }
                    en("requesting");
                    try {
                        if (ei) {
                            if ($.account.subscription_seat_pools_enabled ? await w.Request.safePost("/accounts/{account_id}/users/{user_id}/seat/update", {
                                    parameters: {
                                        path: {
                                            account_id: X,
                                            user_id: V
                                        }
                                    },
                                    requestBody: {
                                        operation: "switch",
                                        seat_type: "default"
                                    },
                                    isExpectedError: R
                                }) : await w.Request.safePatch("/accounts/{account_id}/users/{user_id}", {
                                    parameters: {
                                        path: {
                                            account_id: X,
                                            user_id: V
                                        }
                                    },
                                    additionalHeaders: {
                                        "X-OpenAI-Account-User-Update-Source": "web_usage_based_workspace_access_modal"
                                    },
                                    requestBody: {
                                        seat_type: "default"
                                    }
                                }), !ea.current) return;
                            (0, _.e)(Y), await (0, y.g)("accounts-check"), await Promise.all([Y.query.invalidate(x.b, X), Y.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), ea.current && Q()
                        } else {
                            if (await w.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: X
                                        }
                                    }
                                }), !ea.current) return;
                            Z ? (Q(), Z()) : ed(), Y.get(A.h).success(J.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted",
                                description: "Success toast shown after requesting ChatGPT access from the modal"
                            }))
                        }
                    } catch (e) {
                        ea.current && en(O(e) ?? "error")
                    }
                }
            }, K[12] = $.account.subscription_seat_pools_enabled, K[13] = X, K[14] = ed, K[15] = ei, K[16] = ee, K[17] = J, K[18] = er, K[19] = ec, K[20] = Q, K[21] = Z, K[22] = et, K[23] = Y, K[24] = V, K[25] = u) : u = K[25];
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
            K[30] !== ec || K[31] !== Q ? (b = e => {
                e || (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED"), Q())
            }, K[30] = ec, K[31] = Q, K[32] = b) : b = K[32], K[33] !== eu ? (E = e => {
                e.preventDefault(), eu()
            }, K[33] = eu, K[34] = E) : E = K[34], K[35] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, a.jsx)(j.e, {
                className: "heading-lg font-semibold",
                children: eh
            }), K[35] = k) : k = K[35], K[36] !== ep ? (N = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [k, (0, a.jsx)(j.d, {
                    className: "text-lg leading-6 text-secondary",
                    children: ep
                })]
            }), K[36] = ep, K[37] = N) : N = K[37];
            let eg = "requesting" === et,
                em = "requesting" === et;
            return K[38] !== el ? (F = el ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.updateSeatButton",
                defaultMessage: "Update seat",
                description: "Updates the current user's seat to include ChatGPT"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access",
                description: "Requests ChatGPT access from a workspace administrator"
            }), K[38] = el, K[39] = F) : F = K[39], K[40] !== eg || K[41] !== em || K[42] !== F ? (G = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: eg,
                disabled: em,
                children: F
            }), K[40] = eg, K[41] = em, K[42] = F, K[43] = G) : G = K[43], K[44] !== ed || K[45] !== ec || K[46] !== Q || K[47] !== Z ? (z = () => {
                Z ? (Q(), Z()) : (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), ed())
            }, K[44] = ed, K[45] = ec, K[46] = Q, K[47] = Z, K[48] = z) : z = K[48], K[49] !== Z ? (L = Z ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work",
                description: "Switches from the Chat access explanation to the available Work surface"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex",
                description: "Returns to Codex from the Chat access explanation"
            }), K[49] = Z, K[50] = L) : L = K[50], K[51] !== z || K[52] !== L ? (D = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: z,
                children: L
            }), K[51] = z, K[52] = L, K[53] = D) : D = K[53], K[54] !== G || K[55] !== D ? (B = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [G, D]
            }), K[54] = G, K[55] = D, K[56] = B) : B = K[56], K[57] !== J || K[58] !== et ? (W = null != et && "requesting" !== et ? (0, a.jsx)("p", {
                className: "text-sm text-secondary",
                role: "alert",
                children: "error" !== et ? (0, a.jsx)(i.a, {
                    id: "businessSeatRenewal.wait",
                    defaultMessage: "Seat changes are temporarily unavailable. Please try again after {time}.",
                    description: "Error during a Business seat change when billing has not caught up. time is the suggested retry date and time in the user's locale and time zone, not a guaranteed completion time.",
                    values: {
                        time: J.formatDate(et.retry_at, {
                            dateStyle: "medium",
                            timeStyle: "short"
                        })
                    }
                }) : (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.errorMessage",
                    defaultMessage: "Could not request access. Please contact your workspace administrator to grant ChatGPT access.",
                    description: "Error after a seat update or access request fails. The primary action can be retried."
                })
            }) : null, K[57] = J, K[58] = et, K[59] = W) : W = K[59], K[60] !== N || K[61] !== B || K[62] !== W ? (H = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-8 p-10 text-center",
                children: [N, B, W]
            }), K[60] = N, K[61] = B, K[62] = W, K[63] = H) : H = K[63], K[64] !== H || K[65] !== E ? (q = (0, a.jsx)(S.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: E,
                children: H
            }), K[64] = H, K[65] = E, K[66] = q) : q = K[66], K[67] !== q || K[68] !== b ? (U = (0, a.jsx)(j.b, {
                open: !0,
                size: "wide",
                variant: "chatgpt",
                onOpenChange: b,
                children: q
            }), K[67] = q, K[68] = b, K[69] = U) : U = K[69], U
        }

        function R(e) {
            return null != O(e)
        }

        function O(e) {
            if (e instanceof E.a && 409 === e.status) try {
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
        var N = n("pB");

        function F(e) {
            let t, n, o = (0, r.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, s.z)(g.a),
                p = (0, s.A)(N.a),
                m = (0, s.A)(d.t),
                f = (0, l.Z)();
            if ("restricted" !== p.status) return null;
            let v = `${p.accountId}:${p.userId}`;
            return o[0] !== f || o[1] !== c || o[2] !== h || o[3] !== m.status ? (t = "allowed" === m.status ? c ?? (() => {
                (0, u.l)(h, "work"), f("/")
            }) : void 0, o[0] = f, o[1] = c, o[2] = h, o[3] = m.status, o[4] = t) : t = o[4], o[5] !== i || o[6] !== v || o[7] !== t ? (n = (0, a.jsx)(G, {
                modeToggle: i,
                onSwitchToWork: t
            }, v), o[5] = i, o[6] = v, o[7] = t, o[8] = n) : n = o[8], n
        }

        function G(e) {
            let t, n, l, c, d, u = (0, r.c)(13),
                {
                    modeToggle: g,
                    onSwitchToWork: m
                } = e,
                f = (0, s.A)(N.a),
                [v, b] = (0, o.useState)(!1);
            return "restricted" !== f.status ? null : (u[0] !== g ? (t = null == g ? null : (0, a.jsx)(p.c, {
                children: g
            }), u[0] = g, u[1] = t) : t = u[1], u[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)("h1", {
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
                        onClick: () => b(!1),
                        children: (0, a.jsx)(i.a, {
                            id: "chatSeatAccess.reviewAccess",
                            defaultMessage: "Review access options",
                            description: "Reopens the Chat seat access dialog after dismissal"
                        })
                    })]
                })
            }), u[3] = l) : l = u[3], u[4] !== v || u[5] !== m || u[6] !== f.account || u[7] !== f.accountId || u[8] !== f.userId ? (c = v ? null : (0, a.jsx)(k, {
                account: f.account,
                accountId: f.accountId,
                userId: f.userId,
                onClose: () => b(!0),
                onSwitchToWork: m
            }), u[4] = v, u[5] = m, u[6] = f.account, u[7] = f.accountId, u[8] = f.userId, u[9] = c) : c = u[9], u[10] !== t || u[11] !== c ? (d = (0, a.jsxs)(a.Fragment, {
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
            return l ? d.isLoading ? null : (o[1] !== d.isCapable || o[2] !== i ? (n = d.isCapable ? (0, a.jsx)(F, {}) : i, o[1] = d.isCapable, o[2] = i, o[3] = n) : n = o[3], n) : i
        }
    }),
    Pyg: (function(e, t, n) {
        var a = n("A"),
            r = n("Qo"),
            s = n("Xnl"),
            o = n("rjv"),
            i = n("ZIh");

        function l(e) {
            let t, n, l, c, d = (0, r.c)(10);
            d[0] !== e ? ({
                composerOnly: n,
                placement: l,
                ...t
            } = e, d[0] = e, d[1] = t, d[2] = n, d[3] = l) : (t = d[1], n = d[2], l = d[3]);
            let u = void 0 === n || n,
                h = void 0 === l ? "floating" : l,
                p = (0, s.A)(i.a),
                g = p ? "floating" : h,
                m = !p && t.reserveContent,
                f = !!p || t.showHeader;
            return d[4] !== u || d[5] !== t || d[6] !== g || d[7] !== m || d[8] !== f ? (c = (0, a.jsx)(o.a, {
                ...t,
                composerOnly: u,
                placement: g,
                reserveContent: m,
                showHeader: f
            }), d[4] = u, d[5] = t, d[6] = g, d[7] = m, d[8] = f, d[9] = c) : c = d[9], c
        }
        n.d(t, {
            a: () => l
        })
    }),
    AZW: (function(e, t, n) {
        var a = n("A"),
            r = n("Qo"),
            s = n("zd"),
            o = n("kj"),
            i = n("dJ");

        function l(e) {
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
        n.d(t, {
            a: () => l
        })
    }),
    lZ4: (function(e, t, n) {
        var a = n("Xnl"),
            r = n("OW"),
            s = n("Mr"),
            o = n("PsN"),
            i = n("Jt");
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
    zpM: (function(e, t, n) {
        var a = n("SZ"),
            r = n.n(a),
            s = n("Xnl"),
            o = n("Ro"),
            i = n("OW"),
            l = n("OM"),
            c = n("Mr"),
            d = n("QkV");
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
                return 0 === r.length ? [] : (n(o.e, n(o.a)), r.flatMap(e => {
                    let {
                        automationId: t,
                        messageId: a
                    } = e, r = n(o.b, t).data?.automation;
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
        let g = (0, s.d)(i.a, (e, t) => {
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
            c: g
        })
    }),
    Sd4: (function(e, t, n) {
        var a = n("Xnl"),
            r = n("Ro"),
            s = n("OW"),
            o = n("OM"),
            i = n("Mr");
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
                return null != a && n(r.b, a).data?.automation.plan_type === "language_learning" ? a : null
            }),
            d = (0, a.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(c, e);
                return null == a ? null : n(r.b, a).data?.automation.title.trim() || null
            });
        n.d(t, {}, {
            a: l,
            b: c,
            c: d
        })
    }),
    ckw: (function(e, t, n) {
        var a = n("A"),
            r = n("Qo"),
            s = n("zd"),
            o = n("VnE");

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
    c6k: (function(e, t, n) {
        n.d(t, {
            BusinessAgentConversationHeader: () => R,
            BusinessAgentHomeHero: () => O
        });
        var a = n("A"),
            r = n("Qo"),
            s = n("Xnl"),
            o = n("OW"),
            i = n("Mr"),
            l = n("nUD"),
            c = n("zd"),
            d = n("oy"),
            u = n("L6"),
            h = n("zKC"),
            p = n("ygO"),
            g = n("JN"),
            m = n("mU"),
            f = n("PA"),
            v = n("HOL"),
            b = n("xKa"),
            y = n("RU"),
            x = n("UI"),
            C = n("Bb"),
            w = n("T1");
        let _ = (0, C.a)(async () => {
            let [{
                SvgLottie: e
            }, {
                strFromU8: t,
                unzipSync: r
            }, {
                z: s
            }, o] = await Promise.all([Promise.all([n.e(747352), n.e(766175)]).then(n.bind(n, "lAR")), Promise.resolve().then(n.bind(n, "yCW")), Promise.all([n.e(190782), n.e(58670)]).then(n.bind(n, "PkU")), fetch("https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-animation-1754caf3cef014e7.lottie", {
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
                s = (0, w.a)();
            return n[0] !== s ? (t = (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden",
                children: s ? (0, a.jsx)(S, {}) : (0, a.jsx)(j, {})
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function j(e) {
            let t, n, o, i = (0, r.c)(7),
                l = (0, c.useRef)(null),
                d = (0, b.a)(l),
                u = (0, s.A)(y.a),
                [h, p] = (0, c.useState)(!1);
            if (h) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(S, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(S, {}), i[1] = t) : t = i[1], i[2] !== d || i[3] !== u ? (n = d && !0 === u ? (0, a.jsx)(_, {
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
        var T = n("ZGS"),
            A = n("xvS");

        function P(e) {
            let t, n, s, o, i, l = (0, r.c)(11),
                {
                    state: c
                } = e,
                h = "ready" === c.status ? c.context : c,
                p = h.businessName ?? null,
                g = h.logoUrl ?? null;
            return l[0] !== p || l[1] !== g ? (t = (0, a.jsx)(u.a, {
                alt: "",
                name: p,
                size: "md",
                src: g
            }), l[0] = p, l[1] = g, l[2] = t) : t = l[2], l[3] !== h.businessName ? (n = (0, a.jsx)("span", {
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

        function M(e) {
            let t, n = (0, r.c)(14),
                {
                    state: s,
                    onStarterPromptSelect: o
                } = e,
                i = "ready" === s.status ? s.context : s;
            if (n[0] !== i.businessName || n[1] !== i.logoUrl || n[2] !== i.showConversationStarters || n[3] !== o || n[4] !== s.context || n[5] !== s.status) {
                let e, r, l, c = "ready" === s.status && i.showConversationStarters ? s.context.conversationStarters?.slice(0, 4) : void 0,
                    g = i.businessName ?? null,
                    m = i.logoUrl ?? null;
                n[7] !== g || n[8] !== m ? (e = (0, a.jsx)(u.a, {
                    alt: "",
                    name: g,
                    size: "lg",
                    src: m
                }), n[7] = g, n[8] = m, n[9] = e) : e = n[9], n[10] !== i.businessName ? (r = (0, a.jsx)("h1", {
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

        function E(e) {
            let t, n, s, o, i, l, u, h, b, y, x, C, w, _, j, S, P, M = (0, r.c)(29),
                {
                    context: E,
                    onPresented: k,
                    onContinue: R,
                    onDismiss: O
                } = e,
                [N, F] = (0, c.useState)(!0 === E.showDisclosureModal);
            M[0] !== E.privacyPolicyUrl ? (t = function(e) {
                if (null == e) return null;
                try {
                    let t = new URL(e);
                    return ("https:" === t.protocol || "http:" === t.protocol) && t.hostname ? t.href : null
                } catch {
                    return null
                }
            }(E.privacyPolicyUrl), M[0] = E.privacyPolicyUrl, M[1] = t) : t = M[1];
            let G = t;
            return M[2] !== O ? (n = e => {
                F(e), e || O?.()
            }, M[2] = O, M[3] = n) : n = M[3], M[4] !== k ? (s = {
                "data-theme": "light",
                onOpenAutoFocus: k
            }, M[4] = k, M[5] = s) : s = M[5], M[6] !== R ? (o = e => {
                e.preventDefault(), F(!1), R?.()
            }, M[6] = R, M[7] = o) : o = M[7], M[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(I, {}), M[8] = i) : i = M[8], M[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(g.e, {
                className: "heading-lg text-center leading-7 font-semibold",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.disclosureTitle",
                    defaultMessage: "About chatting with businesses",
                    description: "Title of the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It introduces what business AI chats offer and how chat privacy works. Keep it neutral and concise; there are no placeholders."
                })
            }), M[9] = l) : l = M[9], M[10] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(v.a, {
                className: "shrink-0",
                asset: T.a
            }), M[10] = u) : u = M[10], M[11] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.disclosureQuestionsTitle",
                    defaultMessage: "Ask questions and compare options",
                    description: "Short heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It explains that they can ask about the business and compare options before deciding. Keep the tone informative; there are no placeholders."
                })
            }), M[11] = h) : h = M[11], M[12] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, a.jsxs)("div", {
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
            }), M[12] = b) : b = M[12], M[13] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, a.jsx)(v.a, {
                className: "shrink-0",
                asset: A.a
            }), M[13] = y) : y = M[13], M[14] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.disclosureUsageTrendsTitle",
                    defaultMessage: "Your chats remain private",
                    description: "Short privacy heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. Reassure the person that their conversations with business AI agents remain private from the businesses. There are no placeholders."
                })
            }), M[14] = x) : x = M[14], M[15] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [l, (0, a.jsx)(g.d, {
                    asChild: !0,
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [b, (0, a.jsxs)("div", {
                            className: "flex items-start gap-3",
                            children: [y, (0, a.jsxs)("div", {
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
            }), M[15] = C) : C = M[15], M[16] !== G ? (w = null == G ? null : (0, a.jsx)(f.a, {
                href: G,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy",
                    description: "Link to the business-provided privacy policy in the introductory Business Agent dialog. Opens separately without accepting or dismissing the dialog. Keep the label short."
                })
            }), M[16] = G, M[17] = w) : w = M[17], M[18] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, a.jsx)("div", {
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
            }), M[18] = _) : _ = M[18], M[19] !== w ? (j = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [C, w, _]
                })]
            }), M[19] = w, M[20] = j) : j = M[20], M[21] !== j || M[22] !== o ? (S = (0, a.jsx)(m.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: o,
                children: j
            }), M[21] = j, M[22] = o, M[23] = S) : S = M[23], M[24] !== N || M[25] !== S || M[26] !== n || M[27] !== s ? (P = (0, a.jsx)(g.b, {
                open: N,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: s,
                children: S
            }), M[24] = N, M[25] = S, M[26] = n, M[27] = s, M[28] = P) : P = M[28], P
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

        function O(e) {
            let t, n, o, l = (0, r.c)(11),
                {
                    conversationId: c,
                    fallback: d,
                    onStarterPromptSelect: u
                } = e,
                h = (0, s.x)(i.t, c);
            return null == h ? d : (l[0] !== d || l[1] !== u || l[2] !== h ? (t = "ready" !== h.status || h.context.showConversationStarters ? (0, a.jsx)(M, {
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
                h = (0, s.z)(o.a),
                p = (0, s.A)(l.b),
                g = p?.conversationId === u && p.ready;
            return g || !0 === d.showDisclosureModal ? (c[0] !== g || c[1] !== d || c[2] !== p ? (t = g ? {
                ...d,
                showDisclosureModal: !p.presented
            } : d, c[0] = g, c[1] = d, c[2] = p, c[3] = t) : t = c[3], c[4] !== g || c[5] !== u || c[6] !== h ? (n = g ? () => (0, l.a)(h, u) : void 0, c[4] = g, c[5] = u, c[6] = h, c[7] = n) : n = c[7], c[8] !== t || c[9] !== n ? (i = (0, a.jsx)(E, {
                context: t,
                onPresented: n
            }), c[8] = t, c[9] = n, c[10] = i) : i = c[10], i) : null
        }
    }),
    nUD: (function(e, t, n) {
        var a = n("Xnl"),
            r = n("aM"),
            s = n("Csl"),
            o = n("nlN"),
            i = n("OW"),
            l = n("Kwu"),
            c = n("g2");
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
                let h = i(s.j) !== t.userId || i(s.e) !== t.accountId || i(c.n) !== t.accountId || u?.key !== a && u?.key !== n || null != n && u?.key !== n;
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

        function g(e, t) {
            e.get(d)?.conversationId === t && e.set(d, null)
        }

        function m(e, t) {
            let n = e.get(d);
            n?.conversationId !== t || !n.ready || n.presented || e.get(s.j) !== n.userId || e.get(s.e) !== n.accountId || e.get(c.n) !== n.accountId || (e.set(d, {
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
                    advertiser_id: n.disclosure.advertiser_id,
                    version: n.disclosure.version
                }
            }).catch(() => {}))
        }
        n.d(t, {
            a: () => m,
            c: () => g,
            d: () => h,
            e: () => p
        }, {
            b: d
        })
    }),
    KvJ: (function(e, t, n) {
        var a = n("A"),
            r = n("Qo"),
            s = n("Xnl"),
            o = n("zd"),
            i = n("oy"),
            l = n("WQc"),
            c = n("yG"),
            d = n("OW"),
            u = n("eS"),
            h = n("Zho");
        let p = new WeakSet;

        function g(e) {
            let t, n, o, p, g, f, v, b, y = (0, r.c)(24),
                {
                    conversationId: x,
                    error: C,
                    loadError: w,
                    canRetry: _,
                    isWorkConversation: I,
                    children: j
                } = e,
                S = (0, s.z)(d.a);
            y[0] !== x || y[1] !== I || y[2] !== S ? (t = (e, t) => {
                (0, h.e)(S.get(c.c).logProductEvent, {
                    conversationId: x,
                    error: e,
                    isWorkConversation: I,
                    canRetry: t
                })
            }, y[0] = x, y[1] = I, y[2] = S, y[3] = t) : t = y[3];
            let T = t;
            y[4] !== _ || y[5] !== w || y[6] !== T ? (n = () => T(w, _), y[4] = _, y[5] = w, y[6] = T, y[7] = n) : n = y[7], y[8] !== w || y[9] !== n ? (o = (0, a.jsx)(m, {
                error: w,
                onShown: n
            }), y[8] = w, y[9] = n, y[10] = o) : o = y[10], y[11] !== j || y[12] !== o ? (p = (0, a.jsxs)(a.Fragment, {
                children: [o, j]
            }), y[11] = j, y[12] = o, y[13] = p) : p = y[13];
            let A = p;
            return y[14] !== C ? (g = C instanceof u.a && !(0, u.e)(C) && (403 === C.status || 404 === C.status), y[14] = C, y[15] = g) : g = y[15], y[16] !== C || y[17] !== T ? (f = () => T(C, !1), y[16] = C, y[17] = T, y[18] = f) : f = y[18], y[19] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                id: "chatgptConversations.conversationInaccessible",
                defaultMessage: "You don’t have access to this conversation. Make sure you’re logged in to the right account, or ask the conversation owner to send you a share link.",
                description: "Info toast shown when a user opens a ChatGPT conversation that does not exist or that they cannot access. The user is returned to Home and can switch accounts or ask the owner for a share link."
            }), y[19] = v) : v = y[19], y[20] !== A || y[21] !== g || y[22] !== f ? (b = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(l.a, {
                        isUnavailable: g,
                        homePath: "/",
                        onUnavailable: f,
                        message: v,
                        children: A
                    })
                })]
            }), y[20] = A, y[21] = g, y[22] = f, y[23] = b) : b = y[23], b
        }

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
        n.d(t, {
            a: () => g
        })
    }),
    eKl: (function(e, t, n) {
        var a = n("Csl"),
            r = n("X6V"),
            s = n("SGs"),
            o = n("svj"),
            i = n("hSZ"),
            l = n("ZrY"),
            c = n("AOH"),
            d = n("OtL"),
            u = n("sfm"),
            h = n("lBz"),
            p = n("Mr"),
            g = n("vVg"),
            m = n("LO"),
            f = n("Qmk");

        function v(e, t) {
            let n = C(e, t);
            if (null == n || !(0, f.d)(e, n.conversation_id)) return;
            let a = e.get(p.C, t) ? e.get(p.$, t) : n.title;
            (0, r.f)(e, i.SidebarRenameDialog, {
                initialValue: a ?? "",
                metadataThreadId: n.conversation_id,
                protectedProjectId: (0, g.a)(n.context_scopes) ? n.gizmo_id : void 0,
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

        function b(e, t) {
            let n = e.get(p.j, t);
            if (null == n) return;
            let r = y(e, n);
            null != r && (0, f.d)(e, n) && (0, u.a)(r, e.get(a.g), e.get(a.f)) && (0, f.V)({
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
                e.get(s.h).danger(n || e.get(o.a).formatMessage(d.a.pinError), {
                    errorAnalytics: {
                        toastId: "chatgptConversations.activeChat.pinError"
                    }
                })
            })
        }

        function y(e, t) {
            let n = e.query.getData(h.chatGptConversationQueryById$, t) ?? (0, m.g)(e.queryClient, t);
            if (null != n) return n;
            let a = e.get(p.k).find(n => e.get(p.j, n) === t);
            if (!(null == a || e.get(p.z, a))) return {
                id: t,
                conversation_origin: e.get(p.x, a),
                gizmo_id: e.get(p.O, a),
                is_starred: !1,
                title: e.get(p.$, a)
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
            b: () => y,
            c: () => v,
            d: () => b
        })
    }),
    VlI: (function(e, t, n) {
        let a = (0, n("zd").createContext)(null);
        n.d(t, {}, {
            a: a
        })
    }),
    amY: (function(e, t, n) {
        n.d(t, {
            a: () => ov,
            ChatGptConversationPage: () => om,
            ChatGptSharedConversationPage: () => of
        });
        var a = n("A"),
            r = n("Qo"),
            s = n("X0l"),
            o = n("hKY"),
            i = n("T0"),
            l = n("on"),
            c = n("IP"),
            d = n("xC"),
            u = n.n(d),
            h = n("HV"),
            p = n.n(h),
            g = n("Xnl"),
            m = n("aM"),
            f = n("Au"),
            v = n("Wc4"),
            b = n("iq"),
            y = n("NR"),
            x = n("zd"),
            C = n("v7"),
            w = n("Wf"),
            _ = n("oy"),
            I = n("HZ"),
            j = n("bn5"),
            S = n("OY8"),
            T = n("Yxd"),
            A = n("E8"),
            P = n("z0l"),
            M = n("bj"),
            E = n("I7b"),
            k = n("ZU2"),
            R = n("Pyg"),
            O = n("ZIh"),
            N = n("O0M"),
            F = n("Csl"),
            G = n("OF"),
            z = (n("AZW"), n("hz")),
            L = n("jov"),
            D = n("Mr"),
            B = n("tSE"),
            W = n("Ro"),
            H = n("bN4"),
            q = n("TS0");

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
                    state: p
                } = (0, I.X)();
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "automations.cloud.scheduled-tasks"
            }, i[0] = t) : t = i[0];
            let {
                isCapable: m
            } = (0, g.x)(z.a, t);
            if (i[1] !== m || i[2] !== p?.sidebarArea || i[3] !== h) {
                let e = new URLSearchParams(h);
                n = e.get("automationId"), s = p?.sidebarArea === "scheduled" || !m || !n || "finalAgentTurnStart" !== e.get("messageId"), i[1] = m, i[2] = p?.sidebarArea, i[3] = h, i[4] = n, i[5] = s
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
                u = (0, g.z)(B.a),
                h = (0, I.X)(),
                p = (0, g.A)(F.e),
                m = (0, g.x)(D.j, l),
                {
                    data: f
                } = (0, g.x)(W.b, i),
                v = (0, g.A)(L.a),
                b = (0, x.useRef)(null),
                y = (0, x.useRef)(null);
            o[0] !== c ? (t = c.findLast(V), o[0] = c, o[1] = t) : t = o[1];
            let C = t;
            o[2] !== p || o[3] !== i || o[4] !== v || o[5] !== C || o[6] !== f || o[7] !== h || o[8] !== u || o[9] !== d ? (n = () => {
                null == f || null == p || (v || b.current === p || (b.current = p, (0, H.openAutomationSidePanelTab)({
                    scope: u,
                    automationId: i,
                    title: f.automation.title
                })), null != d && null != C && y.current !== p && (y.current = p, d.scrollToKey(C.turnKey, $, {
                    align: "top"
                }).then(() => {
                    u.set(q.a, {
                        locationKey: h.key,
                        accountId: p
                    }, !0)
                })))
            }, o[2] = p, o[3] = i, o[4] = v, o[5] = C, o[6] = f, o[7] = h, o[8] = u, o[9] = d, o[10] = n) : n = o[10];
            let w = (0, x.useEffectEvent)(n);
            o[11] !== p || o[12] !== l || o[13] !== f?.automation.conversation_id || o[14] !== w || o[15] !== m ? (a = () => {
                null != p && f?.automation.conversation_id === (m ?? l) && w()
            }, o[11] = p, o[12] = l, o[13] = f?.automation.conversation_id, o[14] = w, o[15] = m, o[16] = a) : a = o[16];
            let _ = C?.turnKey,
                j = f?.automation.conversation_id;
            return o[17] !== p || o[18] !== v || o[19] !== l || o[20] !== m || o[21] !== _ || o[22] !== j || o[23] !== d ? (s = [p, l, _, j, m, v, d], o[17] = p, o[18] = v, o[19] = l, o[20] = m, o[21] = _, o[22] = j, o[23] = d, o[24] = s) : s = o[24], (0, x.useEffect)(a, s), null
        }

        function $(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: X
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function X(e) {
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
        var Z = n("nKJ"),
            Y = n("RN8"),
            J = n("GMT"),
            ee = n("zpM"),
            et = n("PFz"),
            en = n("KvJ"),
            ea = n("TD"),
            er = n("Mal"),
            es = n("SGs"),
            eo = n("OW"),
            ei = n("VnE"),
            el = n("Cps"),
            ec = n.n(el),
            ed = n("rK"),
            eu = n("zH"),
            eh = n("rv"),
            ep = n("taW");

        function eg(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var em = n("jfi"),
            ef = n("FG"),
            ev = n("nmN");

        function eb(e) {
            let t, n, s, o, c, d = (0, r.c)(15),
                {
                    entries: u,
                    TurnRowComponent: h
                } = e,
                p = (0, g.z)(B.a),
                m = (0, g.A)(ea.a),
                f = (0, g.A)(er.a),
                v = (0, x.useRef)(null);
            d[0] !== u || d[1] !== f || d[2] !== p ? (t = function(e, t, n) {
                let a = [];
                for (let n of t) {
                    let t = e.get(D.j, n.conversationId),
                        r = (0, ep.c)(void 0, void 0, void 0, e.get(D.O, n.conversationId) ?? void 0),
                        s = (0, ep.c)(t ?? void 0);
                    for (let o of n.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]))
                        if ("user-message" === o.type) a.push(...o.images.map(e => ({
                            src: e,
                            resolver: r
                        }))), null != o.imageEditOperation && a.push({
                            src: `sediment://${o.imageEditOperation.original_file_id}`,
                            resolver: s
                        });
                        else if ("generated-image" === o.type) {
                        let t = e.get(ep.a, n.conversationId);
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
                    })) : "assistant-message" === o.type && null != t && a.push(...o.contentReferences.flatMap((e, t) => (0, ed.u)(e, t).map(e => {
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
                    return null != t && (0, eu.f)(t) ? [{
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
                    staleTime: eh.b.FIVE_MINUTES,
                    refetchOnWindowFocus: !1,
                    retry: !1,
                    queryFn: async e => {
                        let {
                            client: t,
                            signal: n
                        } = e;
                        for (let e of ec()(r, 6)) n.throwIfAborted(), await Promise.all(e.map(async e => {
                            let {
                                src: a,
                                resolver: r
                            } = e, s = await (0, eu.a)(t, a, r);
                            if (n.throwIfAborted(), null != s) {
                                let e = new Image;
                                e.referrerPolicy = "no-referrer", e.src = s, await e.decode()
                            }
                        }));
                        return !0
                    }
                }
            }(p, u, f), d[0] = u, d[1] = f, d[2] = p, d[3] = t) : t = d[3];
            let b = (0, i.a)(t);
            d[4] !== b ? (n = (e, t) => {
                e.defaultPrevented || b.isSuccess || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat || v.current === t || (v.current = t, b.refetch({
                    cancelRefetch: !1
                }).then(() => {
                    t.aborted || window.print()
                }).finally(() => {
                    v.current === t && (v.current = null)
                })))
            }, d[4] = b, d[5] = n) : n = d[5];
            let y = (0, x.useEffectEvent)(n);
            return d[6] !== y ? (s = () => {
                let e = new AbortController,
                    t = t => y(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, d[6] = y, d[7] = s) : s = d[7], d[8] !== m ? (o = [m], d[8] = m, d[9] = o) : o = d[9], (0, x.useEffect)(s, o), d[10] !== h || d[11] !== b || d[12] !== u || d[13] !== f ? (c = f ? (0, C.createPortal)((0, a.jsx)("div", {
                className: (0, l.b)("printDocument-v_w5Ax", "hidden w-full space-y-1.5 bg-surface text-default print:block"),
                "data-conversation-print": "",
                "data-theme": "light",
                children: (0, a.jsx)(ei.a, {
                    value: null,
                    children: (0, a.jsx)(ev.a, {
                        value: null,
                        children: b.isSuccess ? u.map(e => {
                            var t;
                            return (0, a.jsx)(h, {
                                entry: {
                                    ...e,
                                    timestampSeparatorAtMs: null,
                                    turn: {
                                        ...t = e.turn,
                                        suppressTurnActions: !0,
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? eg(e) : {
                                            ...e,
                                            items: e.items.map(eg),
                                            activeReasoning: null == e.activeReasoning ? void 0 : eg(e.activeReasoning)
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
                            children: b.isError ? (0, a.jsx)(_.a, {
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
            }), document.body) : null, d[10] = h, d[11] = b, d[12] = u, d[13] = f, d[14] = c) : c = d[14], c
        }

        function ey(e) {
            let t, n, a, s, o, l, c = (0, r.c)(22),
                {
                    conversationId: d
                } = e,
                u = (0, g.z)(eo.a),
                h = (0, w.a)(),
                p = (0, x.useRef)(null),
                m = (0, g.A)(ea.a),
                f = (0, g.x)(D.j, d),
                v = (0, g.A)(ef.b);
            c[0] !== m || c[1] !== f ? (t = ["chatgpt-print-history", m, f], c[0] = m, c[1] = f, c[2] = t) : t = c[2], c[3] !== u || c[4] !== f ? (n = async e => {
                let {
                    signal: t
                } = e;
                return null != f && await (0, em.a)(u, f, t), !0
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
            } = (0, i.a)(a);
            c[9] !== m || c[10] !== d || c[11] !== h || c[12] !== v || c[13] !== b || c[14] !== u || c[15] !== f ? (s = (e, t) => {
                e.defaultPrevented || null == f || 0 === v || u.get(ef.c, f)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat || p.current === t || (p.current = t, b({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && u.get(ea.a) === m) {
                        if (e.isError) return void u.get(es.h).danger(h.formatMessage({
                            id: "chatgpt.printHistory.error",
                            defaultMessage: "Couldn't load the full conversation to print",
                            description: "Error toast after printing a conversation fails because its older messages could not be loaded; the user can retry printing"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgpt.printHistory.error"
                            }
                        });
                        await Promise.all(u.queryClient.getQueryCache().findAll({
                            queryKey: ["chatgpt-print-assets", m, d],
                            predicate: ew
                        }).map(ex)), t.aborted || u.get(ea.a) !== m || window.print()
                    }
                }).finally(() => {
                    p.current === t && (p.current = null)
                })))
            }, c[9] = m, c[10] = d, c[11] = h, c[12] = v, c[13] = b, c[14] = u, c[15] = f, c[16] = s) : s = c[16];
            let y = (0, x.useEffectEvent)(s);
            return c[17] !== y ? (o = () => {
                let e = new AbortController,
                    t = t => y(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, c[17] = y, c[18] = o) : o = c[18], c[19] !== m || c[20] !== f ? (l = [m, f], c[19] = m, c[20] = f, c[21] = l) : l = c[21], (0, x.useEffect)(o, l), null
        }

        function ex(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(eC)
        }

        function eC() {}

        function ew(e) {
            return e.getObserversCount() > 0
        }
        var e_ = n("Dr"),
            eI = n("x4u"),
            ej = n("hx");

        function eS(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var eT = n("Mrz"),
            eA = n("ygO"),
            eP = n("gbR");

        function eM(e) {
            let t, n, s = (0, r.c)(4),
                {
                    isFetching: o,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, g.A)(!i && eP.a) || o;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(_.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again",
                description: "Retry loading a ChatGPT conversation after its history could not be loaded"
            }), s[0] = t) : t = s[0], s[1] !== l || s[2] !== c ? (n = (0, a.jsx)(eA.a, {
                color: "ghost",
                disabled: c,
                onClick: l,
                children: t
            }), s[1] = l, s[2] = c, s[3] = n) : n = s[3], n
        }

        function eE(e) {
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
            }), o[0] = t) : t = o[0], o[1] !== i || o[2] !== l || o[3] !== c ? (n = null != c ? (0, a.jsx)(eM, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, o[1] = i, o[2] = l, o[3] = c, o[4] = n) : n = o[4], o[5] !== n ? (s = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), o[5] = n, o[6] = s) : s = o[6], s
        }
        var ek = n("FfN"),
            eR = n("Bb"),
            eO = n("WVa");
        let eN = (0, eR.a)(ek.loadEpicChartIndicator);

        function eF(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, g.x)(eO.a, s),
                [i, l] = (0, x.useState)(!1);
            return i || null == o || l(!0), n[0] !== s || n[1] !== i ? (t = i ? (0, a.jsx)(eN, {
                conversationId: s
            }) : null, n[0] = s, n[1] = i, n[2] = t) : t = n[2], t
        }
        var eG = n("Xhc"),
            ez = n("FmJ"),
            eL = n("TS"),
            eD = n("sI"),
            eB = n("jEN"),
            eW = n("kph"),
            eH = n("YW"),
            eq = n("RGW"),
            eU = n("QxH"),
            eK = n("mwa5"),
            e$ = n("UuV"),
            eX = n("TwS"),
            eV = n("l0f"),
            eQ = n("hkB"),
            eZ = n("SZi"),
            eY = n("OOa"),
            eJ = n("GaA"),
            e0 = n("WF"),
            e1 = n("j3e");

        function e2(e) {
            let t, n, a, s, o, i = (0, r.c)(40),
                {
                    conversation: l,
                    conversationSelection: c,
                    conversationId: d,
                    diagnosticsConversationId: u,
                    isSharedConversation: h,
                    isTemporaryChat: p,
                    isTppConversation: m,
                    overrideConversationId: f
                } = e,
                v = (0, g.z)(eo.a),
                b = (0, I.Z)(),
                y = (0, x.useId)();
            i[0] !== d ? (t = (0, eY.d)(d), i[0] = d, i[1] = t) : t = i[1];
            let C = (0, g.x)(ep.b, t),
                w = l?.current_node,
                _ = (0, g.x)(null, f ?? d),
                j = (0, g.x)(null, u ?? f ?? d),
                S = (0, g.x)(null, f ?? d),
                T = (0, g.x)(null, f ?? d),
                A = l?.mapping,
                P = (0, g.x)(null, f ?? d);
            return i[2] !== d || i[3] !== c || i[4] !== w || i[5] !== j || i[6] !== S || i[7] !== C || i[8] !== h || i[9] !== p || i[10] !== m || i[11] !== A || i[12] !== T || i[13] !== b || i[14] !== f || i[15] !== y || i[16] !== v ? (n = () => {
                e1.a.setConversation(y, {
                    scope: v,
                    conversationSelection: c,
                    conversation: null == A ? null : {
                        current_node: w,
                        mapping: A
                    },
                    conversationId: d,
                    imageAssetConversationId: C,
                    isSharedConversation: h,
                    isTemporaryChat: p,
                    isTppConversation: m,
                    modelAgePolicyDebug: void 0,
                    icebreakerDebug: void 0,
                    floraDebug: void 0,
                    retrySuggestedAutomation: void 0
                })
            }, i[2] = d, i[3] = c, i[4] = w, i[5] = j, i[6] = S, i[7] = C, i[8] = h, i[9] = p, i[10] = m, i[11] = A, i[12] = T, i[13] = b, i[14] = f, i[15] = y, i[16] = v, i[17] = n) : n = i[17], i[18] !== l || i[19] !== d || i[20] !== c || i[21] !== w || i[22] !== j || i[23] !== S || i[24] !== C || i[25] !== h || i[26] !== p || i[27] !== m || i[28] !== A || i[29] !== T || i[30] !== b || i[31] !== f || i[32] !== y || i[33] !== P || i[34] !== v || i[35] !== _ ? (a = [c, d, j, S, w, C, h, p, m, A, b, y, f, P, l, v, _, T], i[18] = l, i[19] = d, i[20] = c, i[21] = w, i[22] = j, i[23] = S, i[24] = C, i[25] = h, i[26] = p, i[27] = m, i[28] = A, i[29] = T, i[30] = b, i[31] = f, i[32] = y, i[33] = P, i[34] = v, i[35] = _, i[36] = a) : a = i[36], (0, x.useEffect)(n, a), i[37] !== y ? (s = () => {
                let e = !0,
                    t = null,
                    n = eJ.appServices?.debug;
                return null != n && n.registerChatGptConversationSource(e1.a).then(n => {
                    e ? t = n : n?.[Symbol.dispose]()
                }, e3), () => {
                    e = !1, e1.a.clearConversation(y), t?.[Symbol.dispose]()
                }
            }, o = [y], i[37] = y, i[38] = s, i[39] = o) : (s = i[38], o = i[39]), (0, x.useEffect)(s, o), null
        }

        function e3(e) {
            e0.a.warning("Failed to register conversation debug source", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        var e4 = n("bf"),
            e5 = n("UxN"),
            e6 = n("Cq"),
            e7 = n("GKs"),
            e8 = n("yW"),
            e9 = n("SkI"),
            te = n("aNq"),
            tt = n("ib"),
            tn = n("T1"),
            ta = n("Fj"),
            tr = n("VP"),
            ts = n("PW"),
            to = n("zOE"),
            ti = n("Fm9"),
            tl = n("HnT"),
            tc = n("QSw"),
            td = n("ze4"),
            tu = n("KXC"),
            th = n("e1x"),
            tp = n("pAF"),
            tg = n("dJ"),
            tm = n("yG"),
            tf = n("FR8"),
            tv = n("xq"),
            tb = n("UM"),
            ty = n("VV6"),
            tx = n("JhD"),
            tC = n("Mb"),
            tw = n("kl"),
            t_ = n("kf"),
            tI = n("kh"),
            tj = n("RZB"),
            tS = n("yzQ"),
            tT = n("hZa"),
            tA = n("OM"),
            tP = n("O6"),
            tM = n("tdP"),
            tE = n("JC"),
            tk = n("Kk"),
            tR = n("vj"),
            tO = n("ftS"),
            tN = n("BdY"),
            tF = n("Nyu"),
            tG = n("jZD"),
            tz = n("HgL"),
            tL = n("Bc5"),
            tD = n("bI"),
            tB = n("Elt"),
            tW = n("eS"),
            tH = n("qqu"),
            tq = n("Csb"),
            tU = n("tCy"),
            tK = n("c6k"),
            t$ = n("GgL"),
            tX = n("Kdf"),
            tV = n("AOH"),
            tQ = n("TP"),
            tZ = n("U2U"),
            tY = n("gbr"),
            tJ = n("K33"),
            t0 = n("mv4"),
            t1 = n("w7Q"),
            t2 = n("dt5"),
            t3 = n("bW"),
            t4 = n("sm"),
            t5 = n("ao"),
            t6 = n("pq"),
            t7 = n("f5"),
            t8 = n("XcR"),
            t9 = n("dk3"),
            ne = n("vl"),
            nt = n("ISg"),
            nn = n("t2"),
            na = n("DIH"),
            nr = n("aFo"),
            ns = n("H8"),
            no = n("rxj"),
            ni = n("Xk"),
            nl = n("S95");
        let nc = (0, g.v)(eo.a, e => null);
        var nd = n("DM5"),
            nu = n("gJe"),
            nh = n("d2r"),
            np = n("Zaf"),
            ng = n("EF"),
            nm = n("TL"),
            nf = n("eKl"),
            nv = n("OtL"),
            nb = n("XtQP");

        function ny(e) {
            let t, n, a, s, o, i, l, c = (0, r.c)(16),
                {
                    conversationId: d
                } = e,
                u = (0, g.z)(eo.a),
                h = (0, w.a)();
            return c[0] !== d || c[1] !== h || c[2] !== u ? (t = () => {
                (0, nb.c)(u, d).catch(() => {
                    u.get(es.h).danger(h.formatMessage(nv.a.markUnreadError), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.sidebar.markUnreadError"
                        }
                    })
                })
            }, c[0] = d, c[1] = h, c[2] = u, c[3] = t) : t = c[3], (0, ng.a)("markThreadUnread", t), c[4] !== d || c[5] !== u ? (n = () => (0, nf.c)(u, d), a = [d, u], c[4] = d, c[5] = u, c[6] = n, c[7] = a) : (n = c[6], a = c[7]), (0, nm.d)("rename-thread", n, a), c[8] !== d || c[9] !== u ? (s = () => (0, nf.d)(u, d), o = [d, u], c[8] = d, c[9] = u, c[10] = s, c[11] = o) : (s = c[10], o = c[11]), (0, nm.d)("toggle-thread-pin", s, o), c[12] !== d || c[13] !== u ? (i = () => (0, nf.a)(u, d), l = [d, u], c[12] = d, c[13] = u, c[14] = i, c[15] = l) : (i = c[14], l = c[15]), (0, nm.d)("archive-thread", i, l), null
        }
        var nx = n("VlI"),
            nC = n("Ow"),
            nw = n("AS"),
            n_ = n("wD9"),
            nI = n("lsf"),
            nj = n("IOb"),
            nS = n("BO"),
            nT = n("kQ"),
            nA = n.n(nT),
            nP = n("NkE"),
            nM = n("FW6"),
            nE = "highlight-x7OnzP",
            nk = "safari-wcvuzB",
            nR = "block-t7sxyD";
        let nO = "chatgpt-search-result",
            nN = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* nF(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(nN) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let s = RegExp(t.split(/\n+/u).map(nA()).join("\\n*"), "g");
            for (let n = s.exec(r); null != n && n.index < r.length; n = s.exec(r)) {
                let r = n.index;
                s.lastIndex = r + 1;
                let o = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < o);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, o - l.start), nG(c) && ((0, nM.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function nG(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let nz = nw.object({
            chatGptSearchNavigation: nw.object({
                key: nw.string(),
                messageId: nw.string()
            })
        });

        function nL(e) {
            let t, n, a, s, o, i, l, c, d, u, h, p, m = (0, r.c)(48),
                {
                    conversationId: f,
                    entries: v,
                    isConversationFetching: b,
                    turnListApi: y
                } = e,
                C = (0, g.z)(eo.a),
                w = (0, g.x)(D.r, f),
                _ = (0, nI.b)(),
                j = (0, n_.c)();
            m[0] !== _ || m[1] !== j ? (t = e => {
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
                            left: (0, n_.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                        h = (0, n_.b)(o.height, n),
                        p = (0, n_.b)(o.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, _, j)
            }, m[0] = _, m[1] = j, m[2] = t) : t = m[2];
            let S = (0, x.useEffectEvent)(t),
                T = (0, I.X)(),
                A = (0, I.Z)(),
                P = new URLSearchParams(T.search),
                M = P.get("messageId") ?? P.get("message"),
                E = nz.safeParse(T.state).data?.chatGptSearchNavigation,
                k = M ?? E?.messageId,
                R = P.get("selectedTextQuery") ?? "",
                O = (0, g.x)(D.J, f),
                N = !R || null != k && null != O && (O[k]?.message != null || Object.values(O).some(e => e.message?.id === k)),
                F = R || P.get("historySearchQuery") || "",
                G = JSON.stringify([f, null != M ? T.key : E?.key ?? T.key, k]);
            m[3] !== G ? (n = {
                key: G,
                handled: !1,
                positioned: !1
            }, m[3] = G, m[4] = n) : n = m[4];
            let z = (0, x.useRef)(n),
                L = (0, x.useEffectEvent)(e => {
                    z.current.positioned = !0;
                    let t = F.trim().length > 0 ? function(e, t, n) {
                        let a, r, s, o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            p = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === p.length) return () => {};
                        let g = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(nA()).join("|") : nA()(c), null == c ? "giu" : "gu"),
                            m = !1,
                            f = performance.now(),
                            v = !1,
                            b = new WeakSet,
                            y = new Set,
                            x = new MutationObserver(w);

                        function C() {
                            for (let t of (m = !0, x.disconnect(), clearTimeout(r), null != s && cancelAnimationFrame(s), null != a && CSS.highlights.get(nO) === a && CSS.highlights.delete(nO), e.classList.remove(nE, nk), y)) t.classList.remove(nE, nR)
                        }

                        function w() {
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
                            if (d < 4e3 && null != e.querySelector("[data-search-result-pending]")) return void w();
                            let u = (0, nP.a)(e);
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
                                    acceptNode: e => e.parentElement?.closest(nN) != null || u.some(t => {
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), nG(a) && I.push(a)
                                    }
                            }
                            let j = h.flatMap(e => {
                                let {
                                    element: t,
                                    target: n
                                } = e, a = t.getBoundingClientRect(), r = I.some(e => t.contains(e.startContainer));
                                return "terms" === i && a.width > 0 && a.height > 0 && ("block" === n.highlight || "auto" === n.highlight && !r) ? [t] : []
                            });
                            if (0 === I.length && 0 === j.length) {
                                if (d < 800) return void w();
                                j.push(e)
                            }
                            let S = 0,
                                T = 0;
                            for (let e of [...I, ...j]) {
                                let n = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect(),
                                    a = n?.top ?? 0,
                                    r = n?.left ?? 0;
                                (null == t || 0 > (a - S || r - T)) && (t = e, S = a, T = r)
                            }
                            t = t ?? e, v && n?.(t);
                            let A = t instanceof Range ? t.getClientRects()[0] : t.getBoundingClientRect(),
                                P = [A?.top, A?.left, A?.width, A?.height, e.scrollHeight].join(":");
                            if (d < 4e3 && P !== o) {
                                o = P, w();
                                return
                            }
                            if (!v) {
                                v = !0, o = void 0, n?.(t), w();
                                return
                            }
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...I), CSS.highlights.set(nO, a)) : I.length > 0 && j.push(e), e.classList.add(nE), (0, nS.e)() && e.classList.add(nk), j)) t.classList.add(nE, nR), y.add(t);
                            r = setTimeout(C, 3600)
                        }
                        return x.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), _(), C
                    }(e, F, S, R ? "phrase" : "terms", Number(P.get("selectedTextOccurrence"))) : void 0;
                    return null != M && (P.delete("messageId"), P.delete("message"), P.delete("historySearchQuery"), P.delete("selectedTextQuery"), P.delete("selectedTextOccurrence"), A({
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
                                messageId: M
                            }
                        }
                    })), t
                });
            m[5] !== f || m[6] !== b || m[7] !== k || m[8] !== G || m[9] !== C || m[10] !== N ? (a = () => {
                if (z.current.key !== G && (z.current = {
                        key: G,
                        handled: !1,
                        positioned: !1
                    }), null != k && !b && N) return C.watch(e => {
                    !z.current.handled && (0, D.Kb)(e, f, k) && (z.current.handled = !0)
                })
            }, s = [f, b, k, G, C, N], m[5] = f, m[6] = b, m[7] = k, m[8] = G, m[9] = C, m[10] = N, m[11] = a, m[12] = s) : (a = m[11], s = m[12]), (0, x.useLayoutEffect)(a, s), m[13] !== v || m[14] !== k ? (o = null == k ? void 0 : v.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(k)
            }), m[13] = v, m[14] = k, m[15] = o) : o = m[15];
            let B = o;
            m[16] !== T || m[17] !== A || m[18] !== M || m[19] !== E ? (i = () => {
                null == M && null != E && A(T, {
                    replace: !0,
                    preventScrollReset: !0,
                    state: {
                        ...T.state,
                        chatGptSearchNavigation: void 0
                    }
                })
            }, m[16] = T, m[17] = A, m[18] = M, m[19] = E, m[20] = i) : i = m[20];
            let W = (0, x.useEffectEvent)(i);
            if (m[21] !== W || m[22] !== w || m[23] !== b || m[24] !== B ? (l = () => {
                    !z.current.positioned || null != B || b || w || W()
                }, m[21] = W, m[22] = w, m[23] = b, m[24] = B, m[25] = l) : l = m[25], m[26] !== w || m[27] !== b || m[28] !== B ? (c = [w, b, B], m[26] = w, m[27] = b, m[28] = B, m[29] = c) : c = m[29], (0, x.useLayoutEffect)(l, c), m[30] !== k || m[31] !== B?.id || m[32] !== B?.turn.items || m[33] !== B?.turnKey) {
                let e = B?.turn.items.findIndex(e => "messageId" in e && e.messageId === k || "assistant-message" === e.type && null != k && e.sourceMessageIds?.includes(k)) ?? -1,
                    t = B?.turn.items[e],
                    n = B?.id;
                u = B?.turnKey, d = null == t || null == n ? void 0 : (0, nj.b)(t, e, n), m[30] = k, m[31] = B?.id, m[32] = B?.turn.items, m[33] = B?.turnKey, m[34] = d, m[35] = u
            } else d = m[34], u = m[35];
            let H = d;
            return m[36] !== L || m[37] !== k || m[38] !== u || m[39] !== y || m[40] !== H ? (h = () => {
                let e;
                if (null == u || null == y) return;
                let t = new AbortController,
                    n = null;
                return y.scrollToKey(u, e => n = (null == k ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(k)}"]`)) ?? (null == H ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(H)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = L(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, m[36] = L, m[37] = k, m[38] = u, m[39] = y, m[40] = H, m[41] = h) : h = m[41], m[42] !== k || m[43] !== G || m[44] !== u || m[45] !== y || m[46] !== H ? (p = [G, k, u, y, H], m[42] = k, m[43] = G, m[44] = u, m[45] = y, m[46] = H, m[47] = p) : p = m[47], (0, x.useLayoutEffect)(h, p), null
        }
        var nD = n("u6z"),
            nB = n("lBz"),
            nW = n("Ga6"),
            nH = n("Mik"),
            nq = n("vkn"),
            nU = n("Ppn"),
            nK = n("hXc"),
            n$ = n("ybW"),
            nX = n("wDW"),
            nV = n("Igx"),
            nQ = n("ia"),
            nZ = n("c3"),
            nY = n("iXT"),
            nJ = n("xAI"),
            n0 = n("tNq"),
            n1 = n("B0Wx"),
            n2 = n("if6"),
            n3 = n("r2m"),
            n4 = n("UT"),
            n5 = n("Jj1"),
            n6 = n("Zho"),
            n7 = n("RAD"),
            n8 = n("rZ"),
            n9 = n("FW");

        function ae(e) {
            let t, n, s, o, i, l, c, d, u = (0, r.c)(49),
                {
                    entry: h,
                    renderMcpApps: p,
                    trackShownImpressions: m
                } = e,
                f = void 0 === p || p,
                v = void 0 === m || m,
                b = (0, g.z)(eo.a);
            u[0] !== h.conversationId ? (t = (0, tw.n)({
                routeKind: "chatgpt-thread",
                conversationId: h.conversationId
            }), u[0] = h.conversationId, u[1] = t) : t = u[1];
            let y = (0, g.x)(v ? tl.c : null, t),
                x = v && null == y,
                C = (0, g.x)(h.isMostRecentTurn ? n8.d : null, h.conversationId);
            u[2] !== h.timestampSeparatorAtMs ? (n = null == h.timestampSeparatorAtMs ? null : (0, a.jsx)(n3.b, {
                sentAtMs: h.timestampSeparatorAtMs
            }), u[2] = h.timestampSeparatorAtMs, u[3] = n) : n = u[3];
            let w = null != h.paragen;
            return u[4] !== h.branchingMessageId || u[5] !== h.browserConversationId || u[6] !== h.conversationId || u[7] !== h.feedbackEnabled || u[8] !== h.hasLaterSitesPreview || u[9] !== h.id || u[10] !== h.isMostRecentTurn || u[11] !== h.isReadOnly || u[12] !== h.isTemporaryChat || u[13] !== h.isWorkConversation || u[14] !== h.onEditUserMessage || u[15] !== h.onFork || u[16] !== h.onRegenerateResponse || u[17] !== h.pendingSubmissionAttachments || u[18] !== h.readAloudEnabled || u[19] !== h.referenceImageSuggestionActionInput || u[20] !== h.safetyReview || u[21] !== h.shareEnabled || u[22] !== h.turn || u[23] !== f || u[24] !== x || u[25] !== w ? (s = (0, a.jsx)(n5.a, {
                browserConversationId: h.browserConversationId,
                conversationId: h.conversationId,
                branchingMessageId: h.branchingMessageId,
                hasLaterSitesPreview: h.hasLaterSitesPreview,
                hostId: t_.a,
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
            }), u[4] = h.branchingMessageId, u[5] = h.browserConversationId, u[6] = h.conversationId, u[7] = h.feedbackEnabled, u[8] = h.hasLaterSitesPreview, u[9] = h.id, u[10] = h.isMostRecentTurn, u[11] = h.isReadOnly, u[12] = h.isTemporaryChat, u[13] = h.isWorkConversation, u[14] = h.onEditUserMessage, u[15] = h.onFork, u[16] = h.onRegenerateResponse, u[17] = h.pendingSubmissionAttachments, u[18] = h.readAloudEnabled, u[19] = h.referenceImageSuggestionActionInput, u[20] = h.safetyReview, u[21] = h.shareEnabled, u[22] = h.turn, u[23] = f, u[24] = x, u[25] = w, u[26] = s) : s = u[26], u[27] !== h.conversationId || u[28] !== h.isTemporaryChat || u[29] !== h.isWorkConversation || u[30] !== h.paragen || u[31] !== x ? (o = null == h.paragen ? null : (0, a.jsx)(n7.a, {
                comparison: h.paragen,
                conversationId: h.conversationId,
                hostId: t_.a,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                trackTaskViews: x
            }, h.paragen.promptMessageId), u[27] = h.conversationId, u[28] = h.isTemporaryChat, u[29] = h.isWorkConversation, u[30] = h.paragen, u[31] = x, u[32] = o) : o = u[32], u[33] !== h.showSharedConversationPrivateDisclaimer ? (i = h.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(e5.a, {
                    className: "shrink-0",
                    legacyIcon: n4.a,
                    asset16: n9.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(_.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you",
                    description: "Privacy disclaimer shown between the original shared ChatGPT conversation and the reader's new private messages after they continue the shared conversation in Codex Desktop"
                })]
            }) : null, u[33] = h.showSharedConversationPrivateDisclaimer, u[34] = i) : i = u[34], u[35] !== h || u[36] !== C || u[37] !== b || u[38] !== x ? (l = h.isMostRecentTurn ? (0, a.jsx)(nH.a, {
                conversationId: h.conversationId,
                errorMessage: h.errorMessage,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                onRetry: null == h.onRegenerateResponse || null == C ? void 0 : async e => {
                    let t = b.get(n8.d, h.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = b.get(D.Q, h.conversationId)?.metadata?.errorCode;
                    (0, n6.d)(b.get(tm.c).logProductEvent, {
                        conversationId: b.get(D.j, h.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await h.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, n8.e)(t.message, b.get(nC.s, h.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                showPendingLoadingMessage: h.showPendingLoadingMessage,
                showRequestUserInputStatus: h.showRequestUserInputStatus,
                trackShownImpressions: x,
                useDefaultModel: C?.useDefaultModel,
                isRetryDisabled: C?.isRetryDisabled
            }) : null, u[35] = h, u[36] = C, u[37] = b, u[38] = x, u[39] = l) : l = u[39], u[40] !== s || u[41] !== o || u[42] !== i || u[43] !== l ? (c = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [s, o, i, l]
            }), u[40] = s, u[41] = o, u[42] = i, u[43] = l, u[44] = c) : c = u[44], u[45] !== h.id || u[46] !== c || u[47] !== n ? (d = (0, a.jsxs)("div", {
                "data-content-search-turn-key": h.id,
                children: [n, c]
            }), u[45] = h.id, u[46] = c, u[47] = n, u[48] = d) : d = u[48], d
        }

        function at(e) {
            let t, n, s, o = (0, r.c)(8),
                {
                    entries: i,
                    historyLoader: l,
                    isVisible: c
                } = e,
                d = c ? l : null;
            return o[0] !== i ? (t = (0, a.jsx)(n2.a, {
                entries: i,
                preserveMeasuredTurnViewport: !0,
                RowComponent: an
            }), o[0] = i, o[1] = t) : t = o[1], o[2] !== d || o[3] !== t ? (n = (0, a.jsx)(ei.a, {
                value: null,
                children: (0, a.jsxs)(ev.a, {
                    value: null,
                    children: [d, t]
                })
            }), o[2] = d, o[3] = t, o[4] = n) : n = o[4], o[5] !== c || o[6] !== n ? (s = (0, a.jsx)(tR.a, {
                active: c,
                presentation: "panel",
                children: n
            }), o[5] = c, o[6] = n, o[7] = s) : s = o[7], s
        }

        function an(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(ae, {
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
        var aa = n("wwv"),
            ar = n("u4M"),
            as = n("jA");
        let ao = (0, g.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(D.j, e);
            return null != a ? a : n(D.C, e) || n(nC.h, e) || null != n(nC.w, e) ? void 0 : null
        });

        function ai(e) {
            let t, n, s, o, i, l, c, d = (0, r.c)(30),
                {
                    children: u,
                    conversationId: h,
                    routePattern: p,
                    homePath: m
                } = e,
                f = void 0 === m ? "/" : m,
                {
                    hash: v,
                    pathname: b,
                    search: y,
                    state: x
                } = (0, I.X)(),
                {
                    gizmoId: C
                } = (0, I.bb)(),
                w = (0, g.x)(ao, h),
                _ = (0, g.x)(D.C, h),
                j = (0, g.x)(D.O, h),
                S = _ ? j : C;
            d[0] !== S ? (t = null != S && (0, ar.a)(S) ? S : null, d[0] = S, d[1] = t) : t = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                enabled: !1
            }, d[2] = n) : n = d[2];
            let {
                data: T
            } = (0, g.x)(eI.b, t, n);
            d[3] !== S ? (s = null == S || (0, ar.a)(S) ? null : S, d[3] = S, d[4] = s) : s = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (o = {
                enabled: !1
            }, d[5] = o) : o = d[5];
            let {
                data: A
            } = (0, g.x)(aa.b, s, o);
            if (null === w || (0, as.e)(y) && null != w && !_) {
                let e;
                return d[6] !== f || d[7] !== y ? (e = (0, a.jsx)(I.l, {
                    replace: !0,
                    to: {
                        pathname: f,
                        search: y
                    }
                }), d[6] = f, d[7] = y, d[8] = e) : e = d[8], e
            }
            d[9] !== h || d[10] !== A?.gizmo || d[11] !== S || d[12] !== T?.gizmo || d[13] !== w || d[14] !== p ? (i = null != p ? (0, I.C)(p, {
                conversationId: w ?? h
            }) : (0, as.c)(w ?? h, {
                gizmoId: T?.gizmo.short_url ?? A?.gizmo.short_url ?? S
            }), d[9] = h, d[10] = A?.gizmo, d[11] = S, d[12] = T?.gizmo, d[13] = w, d[14] = p, d[15] = i) : i = d[15];
            let P = i;
            if (d[16] !== P || d[17] !== v || d[18] !== b || d[19] !== w || d[20] !== y || d[21] !== x) {
                let e = new URLSearchParams(y),
                    t = null != w && e.has("mfr"),
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
                l = b !== P || t ? (0, a.jsx)(I.l, {
                    replace: !0,
                    state: n,
                    to: {
                        hash: t ? "" : v,
                        pathname: P,
                        search: t ? e.toString() : y
                    }
                }) : null, d[16] = P, d[17] = v, d[18] = b, d[19] = w, d[20] = y, d[21] = x, d[22] = l
            } else l = d[22];
            return d[27] !== u || d[28] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [l, u]
            }), d[27] = u, d[28] = l, d[29] = c) : c = d[29], c
        }
        var al = n("PC5"),
            ac = n("lZ4"),
            ad = n("WWS"),
            au = n("U3G");
        let ah = (0, g.c)(tw.a, e => {
            let {
                get: t
            } = e;
            return t(al.i)
        }, {
            isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
        });

        function ap(e) {
            let t, n, s, o, i = (0, r.c)(19),
                {
                    conversationId: l,
                    entries: c,
                    onApiChange: d,
                    onVisibleContentReady: u,
                    responseSpacerState: h
                } = e,
                p = (0, g.A)(ah);
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
            let m = p.flatMap(t),
                f = c.findLast(am);
            h?.voiceAutoScrollEnabled && null != f && m.push(f.turnKey);
            let v = (0, g.x)(ac.a, l);
            if (null != v) {
                let e;
                i[2] !== v ? (e = e => e.turn.items.flatMap(ag).some(e => "user-message" === e.type && e.messageId === v), i[2] = v, i[3] = e) : e = i[3];
                let t = c.find(e);
                null != t && m.push(t.turnKey)
            }
            let b = (0, g.x)(au.b, l);
            i[4] !== l || i[5] !== c || i[6] !== b ? (n = (0, ad.a)(c, b, l), i[4] = l, i[5] = c, i[6] = b, i[7] = n) : n = i[7];
            let y = h?.getHeightPx,
                x = h?.voiceAutoScrollEnabled ? f?.turnKey : void 0,
                C = h?.onTurnLayoutReady;
            return i[8] !== h ? (s = e => {
                let {
                    heightDeltaPx: t
                } = e;
                h?.consumeGrowth(t ?? 0)
            }, i[8] = h, i[9] = s) : s = i[9], i[10] !== d || i[11] !== u || i[12] !== m || i[13] !== n || i[14] !== y || i[15] !== x || i[16] !== C || i[17] !== s ? (o = (0, a.jsx)(n2.a, {
                entries: n,
                getBottomScrollPaddingPx: y,
                layoutReadyTurnKey: x,
                onTurnLayoutReady: C,
                onLatestTurnHeightChange: s,
                onApiChange: d,
                onVisibleContentReady: u,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: m,
                RowComponent: ae
            }), i[10] = d, i[11] = u, i[12] = m, i[13] = n, i[14] = y, i[15] = x, i[16] = C, i[17] = s, i[18] = o) : o = i[18], o
        }

        function ag(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function am(e) {
            let {
                turn: t
            } = e;
            return t.items.some(af)
        }

        function af(e) {
            return "user-message" === e.type
        }
        var av = n("SZ"),
            ab = n.n(av),
            ay = n("XA"),
            ax = n("bz"),
            aC = n("LYS"),
            aw = n("aZo"),
            a_ = n("Gv"),
            aI = n("EGp"),
            aj = n("mT"),
            aS = n("Vc"),
            aT = n("Mx");
        let aA = (0, g.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(D.X, e);
            if (!(0, D.wb)(a)) return !0;
            let r = n(D.J, e),
                s = n(D.A, e);
            if (null == r || null == s) return !1;
            let o = r[s]?.message;
            if (null == o || aC.a.has(o.author.role)) return !1;
            let i = n(D.x, e),
                l = (0, aj.c)({
                    mapping: r,
                    current_node: s
                }, n(D.N, e)),
                c = n(D._, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(D.j, e) && !(0, ax.e)(n(D.o, e)) && null != c && !n(ay.b).has(c) && null != aM(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });
        async function aP(e, t) {
            let {
                conversationId: n,
                isTemporaryChat: a = !1,
                messageId: r,
                prompt: s,
                renderFormat: o,
                inlineSystemHints: i
            } = t;
            if (e.get(nC.h, n)) throw new a_.a("edit_message_busy", "The chat is busy.");
            let l = e.get(D.x, n);
            if ("tpp" === l) throw new a_.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
            if (!e.get(aA, n)) throw new a_.a("edit_message_busy", "The chat is busy.");
            let c = e.get(aw.b, {
                conversationId: n,
                messageId: r
            });
            if (null == c) throw new a_.a("edit_message_target_unavailable", "The user message could not be edited.");
            let {
                selectedModel: d
            } = c, u = s.trim(), h = (0, aw.c)(c.message, e.get, i), p = (0, aT.c)({
                message: c.message,
                prompt: u,
                renderFormat: o,
                systemHints: h,
                inlineSystemHints: i
            }), g = (0, b.e)(p.message.metadata), m = p.message.content, f = "multimodal_text" === m.content_type && m.parts.some(e => "string" != typeof e);
            if (0 === u.length && 0 === g.length && !f) throw new a_.a("edit_message_empty", "The edited message cannot be empty.");
            if (e.get(tA.c, "3574573347")) {
                let t = e.get(aw.a, n);
                t?.messageId === r && t.prompt === s && ab()((0, aw.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(aw.a, n, {
                    messageId: r,
                    prompt: s,
                    isTemporaryChat: a,
                    inlineSystemHints: i
                }), (0, eZ.f)(e, n, {
                    isTemporaryChat: a
                }))
            }
            let v = aM(e.get, n),
                y = v.request.current,
                x = () => aM(e.get, n).request.current === y && ab()(e.get(aw.b, {
                    conversationId: n,
                    messageId: r
                }), c) && !(0, D.wb)(e.get(D.X, n));
            e.set(nC.h, n, !0);
            try {
                if ("flora" !== l && null != y && null == e.get(v.session$) && null == e.get(aS.a, n) && (await y.stop(), await y.closed), !x()) throw new a_.a("edit_message_target_unavailable", "The edited message or active response changed.");
                await (0, aT.submitChatGPTCompletion)(e, {
                    isSubmissionCurrent: x,
                    isRequestCurrent: () => e.get(D.A, n) === p.message.id,
                    attachments: g,
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
                e.set(nC.h, n, !1)
            }
        }

        function aM(e, t) {
            let n = e(aI.a, t),
                a = e(D.j, t);
            return null == n.request.current && null != a ? e(aI.a, a) : n
        }
        var aE = n("xtk"),
            ak = n("V0P"),
            aR = n("PG"),
            aO = n("aEn"),
            aN = n("iLY"),
            aF = n("wVX");

        function aG(e) {
            let t, n, s, o, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, g.z)(eo.a),
                d = (0, w.a)(),
                u = (0, tG.a)(),
                h = (0, g.x)(D.X, l),
                p = (0, g.x)(D._, l),
                m = (0, g.x)(D.v, l),
                f = (0, g.x)(D.Z, l),
                v = (0, x.useRef)(null),
                b = (0, x.useRef)(null);
            i[0] !== m || i[1] !== l || i[2] !== d || i[3] !== p || i[4] !== c || i[5] !== h || i[6] !== f ? (t = () => {
                let e = v.current;
                if (null == e) return;
                let t = b.current;
                if ((0, D.wb)(h)) {
                    e.textContent = "", b.current = {
                        conversationId: l,
                        requestId: p ?? ("active-async-turn" === h || "active-tpp-turn" === h ? m?.requestId : null) ?? (t?.conversationId === l ? t.requestId : null)
                    };
                    return
                }
                f || (b.current = null, t?.conversationId === l && "idle" === h && m?.result === "completed" && m.requestId === t.requestId && null == c.get(D.B, l) && (e.textContent = d.formatMessage({
                    id: "chatgptConversations.responseComplete",
                    defaultMessage: "Response complete",
                    description: "Polite screen-reader announcement after the ChatGPT response the user was waiting for finishes successfully"
                })))
            }, i[0] = m, i[1] = l, i[2] = d, i[3] = p, i[4] = c, i[5] = h, i[6] = f, i[7] = t) : t = i[7];
            let y = (0, x.useEffectEvent)(t);
            return (i[8] !== y ? (n = () => {
                y()
            }, i[8] = y, i[9] = n) : n = i[9], i[10] !== m || i[11] !== l || i[12] !== u || i[13] !== p || i[14] !== h || i[15] !== f ? (s = [l, h, p, m, f, u], i[10] = m, i[11] = l, i[12] = u, i[13] = p, i[14] = h, i[15] = f, i[16] = s) : s = i[16], (0, x.useEffect)(n, s), u) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, C.createPortal)((0, a.jsx)("span", {
                ref: v,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = o) : o = i[17], o) : null
        }
        var az = n("n5i"),
            aL = n("q54"),
            aD = n("pDU"),
            aB = n("GaC"),
            aW = n("Dof");
        let aH = (0, eR.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(212949)]).then(n.bind(n, "E50"))).ChatGptThreadSummaryPanelBody, {
            fallback: (0, a.jsx)(aL.a.Content, {
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
            errorFallback: (0, a.jsx)(aL.a.Content, {
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

        function aq(e) {
            let t, n, s, o = (0, r.c)(6);
            o[0] !== e ? ({
                readData: n,
                ...t
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]);
            let i = (0, aL.b)(),
                [l, c] = (0, x.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), o[3] !== l || o[4] !== t ? (s = null == l ? null : (0, a.jsx)(aH, {
                ...t,
                data: l.data
            }), o[3] = l, o[4] = t, o[5] = s) : s = o[5], s
        }

        function aU(e) {
            let t, n, s = (0, r.c)(11),
                {
                    conversationId: o,
                    composerActions: i,
                    readData: l,
                    display: c,
                    shouldBlockExternalEgress: d,
                    showSources: u
                } = e,
                h = void 0 === u || u,
                p = (0, tT.h)("2903661647");
            return s[0] !== i || s[1] !== o || s[2] !== p || s[3] !== l || s[4] !== d || s[5] !== h ? (t = (0, a.jsx)(aq, {
                conversationId: o,
                composerActions: i,
                readData: l,
                isUnifiedDynamicIsleEnabled: p,
                showSources: h,
                shouldBlockExternalEgress: d
            }, o), s[0] = i, s[1] = o, s[2] = p, s[3] = l, s[4] = d, s[5] = h, s[6] = t) : t = s[6], s[7] !== c.shouldHideInlineImmediately || s[8] !== c.shouldShow || s[9] !== t ? (n = (0, a.jsx)(aL.a.Root, {
                shouldHideInlineImmediately: c.shouldHideInlineImmediately,
                shouldShow: c.shouldShow,
                children: t
            }), s[7] = c.shouldHideInlineImmediately, s[8] = c.shouldShow, s[9] = t, s[10] = n) : n = s[10], n
        }

        function aK(e) {
            let t, n, s, o, i, l = (0, r.c)(28),
                {
                    allowsThreadContentOverlap: c,
                    conversationId: d,
                    composerActions: u,
                    controlledState: h,
                    readData: p,
                    shouldBlockExternalEgress: m,
                    showSources: f
                } = e,
                v = void 0 === f || f,
                b = (0, g.z)(B.a),
                y = (0, x.useContext)(ei.a),
                C = (0, w.a)(),
                _ = (0, tT.h)("2903661647"),
                I = (0, g.A)(null == h ? tY.N : null);
            l[0] !== h?.isOpen || l[1] !== I ? (t = h?.isOpen ?? (0, tY.z)(I, !0), l[0] = h?.isOpen, l[1] = I, l[2] = t) : t = l[2];
            let j = t,
                S = (0, g.A)(aB.b),
                T = h?.isOpen ?? S.isPopoverOpen,
                A = (0, g.x)(az.f, "togglePinnedSummary");
            (0, tN.b)(b), l[3] !== h || l[4] !== b ? (n = () => {
                null != h ? h.onOpenChange(!h.isOpen) : (0, aW.b)(b)
            }, l[3] = h, l[4] = b, l[5] = n) : n = l[5];
            let P = n;
            (0, ng.a)("togglePinnedSummary", P);
            let E = c ? "browser:rounded-lg browser:bg-surface" : void 0;
            return l[6] !== u || l[7] !== y || l[8] !== h || l[9] !== d || l[10] !== C || l[11] !== j || l[12] !== T || l[13] !== _ || l[14] !== S.displayMode || l[15] !== p || l[16] !== b || l[17] !== A || l[18] !== m || l[19] !== v || l[20] !== P ? (s = "overlay" === S.displayMode ? (0, a.jsx)(aD.a, {
                isOpen: T,
                shouldPreventAutoFocus: h?.shouldPreventAutoFocus,
                onOpenChange: e => {
                    null != h ? h.onOpenChange(e) : b.set(aB.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                        ...t,
                        isPopoverOpen: e
                    })
                },
                trigger: (0, a.jsx)(aL.a.HeaderButton, {
                    label: C.formatMessage({
                        id: "chatgptConversations.summaryPanel.toggle",
                        defaultMessage: "Toggle summary",
                        description: "Button label for toggling the ChatGPT summary panel"
                    }),
                    pressed: T,
                    shortcut: A
                }),
                children: null != p ? (0, a.jsx)(ei.a, {
                    value: y,
                    children: (0, a.jsx)(aL.a.PopoverContent, {
                        children: (0, a.jsx)(aq, {
                            conversationId: d,
                            composerActions: u,
                            readData: p,
                            isUnifiedDynamicIsleEnabled: _,
                            showSources: v,
                            shouldBlockExternalEgress: m
                        }, d)
                    })
                }) : null
            }) : (0, a.jsx)(aL.a.HeaderButton, {
                label: C.formatMessage({
                    id: "chatgptConversations.summaryPanel.togglePinned",
                    defaultMessage: "Toggle pinned summary",
                    description: "Button label for toggling whether the ChatGPT summary panel reserves layout space"
                }),
                pressed: j,
                shortcut: A,
                onClick: P
            }), l[6] = u, l[7] = y, l[8] = h, l[9] = d, l[10] = C, l[11] = j, l[12] = T, l[13] = _, l[14] = S.displayMode, l[15] = p, l[16] = b, l[17] = A, l[18] = m, l[19] = v, l[20] = P, l[21] = s) : s = l[21], l[22] !== E || l[23] !== s ? (o = (0, a.jsx)("div", {
                className: E,
                children: s
            }), l[22] = E, l[23] = s, l[24] = o) : o = l[24], l[25] !== c || l[26] !== o ? (i = (0, a.jsx)(M.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                allowsThreadContentOverlap: c,
                order: 250,
                children: o
            }), l[25] = c, l[26] = o, l[27] = i) : i = l[27], i
        }
        var a$ = n("Jj"),
            aX = n.n(a$),
            aV = n("G4"),
            aQ = n("KaH"),
            aZ = n("Yz3"),
            aY = n("ghN"),
            aJ = n("Kv"),
            a0 = n("m2"),
            a1 = n("Ng4"),
            a2 = n("bTK"),
            a3 = n("dG"),
            a4 = n("lI");

        function a5(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        var a6 = n("JlM"),
            a7 = n("TUM"),
            a8 = n("f6K"),
            a9 = n("JPX"),
            re = n("zWH");

        function rt(e) {
            let t, n, a, s, o, i, l, c = (0, r.c)(34),
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
            let g = n,
                m = h.key,
                f = (0, x.useRef)(null);
            c[3] !== h.hash || c[4] !== h.pathname || c[5] !== h.search || c[6] !== h.state || c[7] !== m || c[8] !== p ? (a = () => {
                let e = new URLSearchParams(h.search);
                e.delete("prompt"), e.delete("promptSource"), p({
                    pathname: h.pathname,
                    search: e.toString(),
                    hash: h.hash
                }, {
                    replace: !0,
                    state: {
                        ...h.state,
                        consumedUrlPromptKey: m
                    }
                })
            }, c[3] = h.hash, c[4] = h.pathname, c[5] = h.search, c[6] = h.state, c[7] = m, c[8] = p, c[9] = a) : a = c[9];
            let v = (0, x.useEffectEvent)(a);
            return c[10] !== v || c[11] !== d || c[12] !== u || c[13] !== m || c[14] !== t ? (s = () => {
                if (!u && t && f.current !== m) return (0, re.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(m) && v()
                })
            }, c[10] = v, c[11] = d, c[12] = u, c[13] = m, c[14] = t, c[15] = s) : s = c[15], c[16] !== d || c[17] !== u || c[18] !== m || c[19] !== t ? (o = [d, u, m, t], c[16] = d, c[17] = u, c[18] = m, c[19] = t, c[20] = o) : o = c[20], (0, x.useLayoutEffect)(s, o), c[21] !== v || c[22] !== d || c[23] !== u || c[24] !== m || c[25] !== t || c[26] !== g ? (i = () => {
                if (!u || !t || f.current === m || (f.current = m, v(), !d.consumeLocationPromptPrefill(m))) return;
                let {
                    view: e
                } = d, n = t.replace(/\r\n/g, "\n"), a = "codex-app" === g ? (0, a9.f)({
                    schema: e.state.schema,
                    text: n,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, a9.e)({
                    schema: e.state.schema,
                    text: n
                }), r = e.state.tr.replaceWith(0, e.state.doc.content.size, a.content);
                r.setSelection(a8.h.atEnd(r.doc)), e.dispatch(r)
            }, c[21] = v, c[22] = d, c[23] = u, c[24] = m, c[25] = t, c[26] = g, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== m || c[31] !== t || c[32] !== g ? (l = [d, u, m, t, g], c[28] = d, c[29] = u, c[30] = m, c[31] = t, c[32] = g, c[33] = l) : l = c[33], (0, x.useLayoutEffect)(i, l), null
        }
        var rn = n("zKC");

        function ra(e) {
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
            }), l[3] = s) : s = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (o = (0, a.jsx)(eA.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: s
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = o) : o = l[7], l[8] !== n || l[9] !== o ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(rn.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: o
                })
            }), l[8] = n, l[9] = o, l[10] = i) : i = l[10], i
        }
        var rr = n("fr5"),
            rs = n("LEg");
        let ro = (0, eR.a)(async () => (await n.e(432800).then(n.bind(n, "T7h"))).AutomationPlanHeaderShortcut);

        function ri(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, tT.h)("2840857813");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(ro, {
                conversationId: s
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        let rl = (0, eR.a)(async () => (await n.e(14958).then(n.bind(n, "mOb"))).CourseHeaderShortcut);

        function rc(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, tT.h)("4035922817");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(rl, {
                conversationId: s
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        var rd = n("wvB");
        let ru = (0, eR.a)(() => n.e(766350).then(n.bind(n, "wWA")).then(e => e.ScheduledGoalNavigationBridge));

        function rh(e) {
            let t, n, s, o = (0, r.c)(10),
                {
                    conversationId: i,
                    scheduledAutomationId: l
                } = e,
                c = (0, g.x)(rd.a, i),
                d = (0, tT.h)("3901104270");
            return o[0] !== i || o[1] !== c ? (t = null != c ? (0, a.jsx)(rc, {
                conversationId: i
            }) : (0, a.jsx)(ri, {
                conversationId: i
            }), o[0] = i, o[1] = c, o[2] = t) : t = o[2], o[3] !== i || o[4] !== d || o[5] !== l ? (n = d && null != l ? (0, a.jsx)(ru, {
                conversationId: i,
                automationId: l
            }) : null, o[3] = i, o[4] = d, o[5] = l, o[6] = n) : n = o[6], o[7] !== t || o[8] !== n ? (s = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), o[7] = t, o[8] = n, o[9] = s) : s = o[9], s
        }
        async function rp() {
            return (await n.e(600460).then(n.bind(n, "EEP"))).openAudioSummaryDialog
        }
        async function rg() {
            return (await n.e(963775).then(n.bind(n, "fUW"))).openConversationFiles
        }
        var rm = n("Qg"),
            rf = n("rm"),
            rv = n("f38"),
            rb = n("MRl"),
            ry = n("fQb"),
            rx = n("dDD"),
            rC = n("soa"),
            rw = n("ZrY"),
            r_ = n("X6V"),
            rI = n("Kwu");
        async function rj(e, t) {
            let a = await rI.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                parameters: {
                    path: {
                        conversation_id: t
                    }
                }
            }).catch(() => null);
            return a?.can_share && 0 !== a.av_sessions.length ? [{
                id: "share-live-session",
                icon: e4.Ri,
                message: (0, rm.e)({
                    id: "chatgptConversations.liveSessionSharing.action",
                    defaultMessage: "Share Live session",
                    description: "Conversation menu action that lets an eligible user create a GPT-Live session viewer link for one of their previous voice calls"
                }),
                selectAfterClose: !0,
                onSelect: () => {
                    n.e(571376).then(n.bind(n, "ATr")).then(n => {
                        let {
                            BidiSessionSharingDialog: r
                        } = n;
                        (0, r_.f)(e, r, {
                            conversationId: t,
                            sessions: a.av_sessions
                        })
                    })
                }
            }] : []
        }
        var rS = n("MYl"),
            rT = n("sfm"),
            rA = n("JCt"),
            rP = n("g2"),
            rM = n("oa"),
            rE = n("PME"),
            rk = n("lgc"),
            rR = n("Ac"),
            rO = n("w7E"),
            rN = n("Qmk"),
            rF = n("xEX"),
            rG = n("J6L"),
            rz = n("lUU"),
            rL = n("ftA");

        function rD(e) {
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
                m = (0, g.z)(eo.a),
                {
                    data: f
                } = (0, rR.m)(),
                v = (0, rF.b)();
            return o[0] !== f || o[1] !== l || o[2] !== c || o[3] !== d || o[4] !== u || o[5] !== v || o[6] !== m ? (t = () => {
                let e = m.get(rL.a, l, {
                        enabled: !1
                    }),
                    t = (0, ar.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : m.query.getData(eI.b, t);
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
                    } = e, c = (0, ar.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(rO.a), u = t.get(rN.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, g = (a?.conversation_origin === "tpp" || a?.conversation_origin === "flora") && ("allowed" === o || h?.pages.some(e => null != e.cursor) === !0), m = t.get(rN.h, n);
                    return null == s || null == a || t.get(rN.g, n) || (0, rG.c)(a, r).sourceUnavailable || null == (0, rG.b)(t, a, m, !1) || null != c && null == r || null == h || 0 === p && !g ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: rq.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, rz.b)({
                        scope: t,
                        conversation: a,
                        project: r,
                        showDestinationFetchState: !1,
                        showMoveToProject: null == c || p > 1 || g,
                        projectCrudStatus: o,
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
                    navigate: u,
                    onCreateProjectDialogCloseAutoFocus: e => {
                        e.preventDefault(), d.current?.focus({
                            preventScroll: !0
                        })
                    }
                }))
            }, o[0] = f, o[1] = l, o[2] = c, o[3] = d, o[4] = u, o[5] = v, o[6] = m, o[7] = t) : t = o[7], o[8] !== l || o[9] !== h || o[10] !== m ? (n = async () => {
                await Promise.all([(async () => {
                    let e = m.get(nB.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await m.query.getOrFetch(nB.chatGptConversationQueryById$, l).catch(rH), null == m.query.getData(nB.chatGptConversationQueryById$, l) && await m.query.getOrFetch(rN.j, [l]).catch(rW)
                })(), h?.()]);
                let e = m.get(rL.a, l, {
                    enabled: !1
                });
                (0, ar.a)(e?.gizmo_id) && e?.gizmo_id != null && await m.query.getOrFetch(eI.b, e.gizmo_id).catch(rB)
            }, o[8] = l, o[9] = h, o[10] = m, o[11] = n) : n = o[11], o[12] !== i || o[13] !== p || o[14] !== t || o[15] !== n ? (s = (0, a.jsx)(rf.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                onOpenChange: p,
                renderItem: ry.b,
                trigger: "click",
                children: i
            }), o[12] = i, o[13] = p, o[14] = t, o[15] = n, o[16] = s) : s = o[16], s
        }

        function rB() {}

        function rW() {}

        function rH() {}
        let rq = (0, rm.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}",
                description: "Name of a ChatGPT project offered as a destination for moving a conversation or Work task"
            }
        });

        function rU(e) {
            let t, n, s, o, i, l, c, d, u, h, p, m, f, v, b, y, C, _, j, S = (0, r.c)(70),
                {
                    conversationOrigin: T,
                    conversationId: P,
                    title: M,
                    isHandoffPending: E,
                    isArchived: k,
                    isChatConversation: R,
                    onHandoff: O,
                    onOpenMessage: N,
                    projectId: G,
                    projectName: L,
                    serverConversationId: D
                } = e,
                W = (0, g.z)(B.a),
                H = (0, g.z)(eo.a),
                q = (0, rC.a)(),
                U = (0, tT.k)();
            S[0] !== U ? (t = U.checkGate("224248639"), S[0] = U, S[1] = t) : t = S[1];
            let K = t;
            S[2] !== U ? (n = U.getLayer("3017902351").get("web_file_library_enabled", !1), S[2] = U, S[3] = n) : n = S[3];
            let $ = n,
                X = K || $;
            S[4] !== X ? (s = {
                enabled: X
            }, S[4] = X, S[5] = s) : s = S[5];
            let {
                data: V
            } = (0, g.A)(rP.p, s), Q = X && V?.fileLibraryEnabledForRegistrationCountry !== !1, Z = (0, w.a)(), Y = (0, I.Z)(), [J, ee] = (0, x.useState)(null), [et, en] = (0, x.useState)(!1), ea = (0, x.useRef)(null), er = (0, x.useRef)(null);
            S[6] === Symbol.for("react.memo_cache_sentinel") ? (o = [], S[6] = o) : o = S[6];
            let ei = (0, x.useRef)(o);
            S[7] === Symbol.for("react.memo_cache_sentinel") ? (i = {
                name: "chatgpt"
            }, S[7] = i) : i = S[7];
            let {
                isCapable: el
            } = (0, g.x)(z.a, i), ec = (0, g.x)(rN.g, D);
            S[8] === Symbol.for("react.memo_cache_sentinel") ? (l = () => ee("shortcut"), S[8] = l) : l = S[8];
            let ed = R && !ec;
            S[9] !== W || S[10] !== D ? (c = () => (0, rT.a)(W.query.getData(nB.chatGptConversationQueryById$, D), W.get(F.g), W.get(F.f)), S[9] = W, S[10] = D, S[11] = c) : c = S[11], S[12] !== ed || S[13] !== c ? (d = {
                enabled: ed,
                isActive: c
            }, S[12] = ed, S[13] = c, S[14] = d) : d = S[14], (0, ng.a)("deleteChat", l, d), S[15] !== H || S[16] !== ec || S[17] !== Y || S[18] !== W || S[19] !== D ? (u = () => {
                !ec && (0, rT.a)(W.query.getData(nB.chatGptConversationQueryById$, D), W.get(F.g), W.get(F.f)) && (ee(null), (0, rk.a)(H, D), Y("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, S[15] = H, S[16] = ec, S[17] = Y, S[18] = W, S[19] = D, S[20] = u) : u = S[20];
            let eu = u;
            S[21] !== Z ? (h = Z.formatMessage(rV.more), S[21] = Z, S[22] = h) : h = S[22];
            let eh = h;
            S[23] !== W || S[24] !== D ? (p = async () => {
                let e = [];
                ei.current = e, e.push(...await rj(W, D))
            }, S[23] = W, S[24] = D, S[25] = p) : p = S[25];
            let ep = p;
            S[26] !== P || S[27] !== T || S[28] !== Q || S[29] !== Z || S[30] !== ec || S[31] !== k || S[32] !== E || S[33] !== q || S[34] !== Y || S[35] !== O || S[36] !== N || S[37] !== G || S[38] !== L || S[39] !== W || S[40] !== D || S[41] !== U || S[42] !== M ? (m = e => {
                let t = W.get(F.e),
                    n = W.get(F.j),
                    a = (0, rT.a)(W.query.getData(nB.chatGptConversationQueryById$, D), W.get(F.g), W.get(F.f)),
                    r = (0, nf.b)(W, D),
                    s = !ec && (0, rT.a)(r, W.get(F.g), W.get(F.f)),
                    o = W.get(A.a).pathname,
                    i = () => q() && o === W.get(A.a).pathname && t === W.get(F.e) && n === W.get(F.j),
                    l = (0, rM.a)(W, P, T, () => (0, rE.a)(Y)),
                    c = [];
                return U.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && c.push({
                    id: "chatgpt-audio-summary",
                    message: (0, rm.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary",
                        description: "Opens the dialog for generating and listening to an audio summary of the current chat"
                    }),
                    icon: e4.jg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        rp().then(e => {
                            i() && e(W, D)
                        }).catch(() => {
                            i() && (ea.current?.focus({
                                preventScroll: !0
                            }), W.get(es.h).danger(Z.formatMessage({
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
                }), Q && c.unshift({
                    id: "chatgpt-conversation-files",
                    message: (0, rm.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat",
                        description: "Opens the side panel listing files referenced in the active saved ChatGPT conversation, even when the list is empty"
                    }),
                    icon: e4.rb,
                    onSelect: () => {
                        rg().then(e => {
                            i() && e(W, {
                                conversationId: P,
                                serverConversationId: D,
                                onOpenMessage: N
                            })
                        }).catch(() => {
                            i() && W.get(es.h).danger(Z.formatMessage({
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
                }), c.push(...(0, rx.a)(W)), (0, rA.a)(W, {
                    organizationItems: (0, ry.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: ei.current,
                    viewItems: c,
                    preferenceItems: null == l ? [] : [l],
                    surface: "header",
                    conversationId: D,
                    stateConversationId: P,
                    conversationOrigin: T,
                    title: M,
                    isHandoffPending: E,
                    canHandoff: null != O,
                    onHandoff: O,
                    projectId: G,
                    projectName: L,
                    onRename: !a || ec || k ? void 0 : () => (0, nf.c)(W, P),
                    isPinned: W.get(rN.h, D) ?? r?.is_starred === !0,
                    onTogglePin: s ? () => {
                        let e = (0, nf.b)(W, D);
                        !(null == e || W.get(rN.g, D)) && (0, rT.a)(e, W.get(F.g), W.get(F.f)) && (0, rN.V)({
                            scope: W,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(rK)
                    } : void 0,
                    onArchive: !a || ec || k ? void 0 : () => (0, rw.a)(W, D),
                    onUnarchive: a && !ec && k ? () => {
                        (0, rN.W)({
                            scope: W,
                            conversationId: D
                        }).then(() => {
                            W.get(es.h).success(Z.formatMessage(rb.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            W.get(es.h).danger(Z.formatMessage(nv.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !a || ec ? void 0 : () => ee("menu")
                })
            }, S[26] = P, S[27] = T, S[28] = Q, S[29] = Z, S[30] = ec, S[31] = k, S[32] = E, S[33] = q, S[34] = Y, S[35] = O, S[36] = N, S[37] = G, S[38] = L, S[39] = W, S[40] = D, S[41] = U, S[42] = M, S[43] = m) : m = S[43];
            let eg = m;
            S[44] !== eh ? (f = (0, a.jsx)(rv.a, {
                ref: ea,
                className: "no-drag",
                color: "primary",
                label: eh,
                size: "toolbar"
            }), S[44] = eh, S[45] = f) : f = S[45], S[46] !== et || S[47] !== eh || S[48] !== f ? (v = (0, a.jsx)(e6.a, {
                cloneCustomTrigger: !0,
                tooltipContent: eh,
                triggerPopupOpen: et,
                children: f
            }), S[46] = et, S[47] = eh, S[48] = f, S[49] = v) : v = S[49];
            let em = v;
            S[50] !== eg || S[51] !== em || S[52] !== Y || S[53] !== el || S[54] !== ep || S[55] !== D ? (b = el ? (0, a.jsx)(rD, {
                conversationId: D,
                getBaseItems: eg,
                menuTriggerRef: ea,
                navigate: Y,
                onBeforeOpen: ep,
                onOpenChange: en,
                children: em
            }) : (0, a.jsx)(rf.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => eg(),
                onBeforeOpen: ep,
                onOpenChange: en,
                renderItem: ry.b,
                trigger: "click",
                children: em
            }), S[50] = eg, S[51] = em, S[52] = Y, S[53] = el, S[54] = ep, S[55] = D, S[56] = b) : b = S[56];
            let ef = "shortcut" === J,
                ev = null != J;
            return S[57] !== J ? (y = () => {
                er.current = "menu" === J ? ea.current : null, ee(null)
            }, S[57] = J, S[58] = y) : y = S[58], S[59] === Symbol.for("react.memo_cache_sentinel") ? (C = e => {
                let t = er.current;
                if (er.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, S[59] = C) : C = S[59], S[60] !== eu || S[61] !== ec || S[62] !== ef || S[63] !== ev || S[64] !== y || S[65] !== M ? (_ = (0, a.jsx)(rS.a, {
                autoFocusConfirm: ef,
                open: ev,
                onOpenChange: y,
                onCloseAutoFocus: C,
                isDeleting: ec,
                onConfirm: eu,
                title: M
            }), S[60] = eu, S[61] = ec, S[62] = ef, S[63] = ev, S[64] = y, S[65] = M, S[66] = _) : _ = S[66], S[67] !== b || S[68] !== _ ? (j = (0, a.jsxs)(a.Fragment, {
                children: [b, _]
            }), S[67] = b, S[68] = _, S[69] = j) : j = S[69], j
        }

        function rK() {}

        function r$() {
            let e, t, n, s = (0, r.c)(8),
                o = (0, w.a)(),
                [i, l] = (0, x.useState)(!1);
            s[0] !== o ? (e = o.formatMessage(rV.more), s[0] = o, s[1] = e) : e = s[1];
            let c = e;
            return s[2] !== c ? (t = (0, a.jsx)(rv.a, {
                className: "no-drag",
                color: "primary",
                label: c,
                size: "toolbar"
            }), s[2] = c, s[3] = t) : t = s[3], s[4] !== i || s[5] !== c || s[6] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rf.a, {
                    preserveBrowserContextMenu: !0,
                    getItems: rX,
                    onOpenChange: l,
                    renderItem: ry.b,
                    trigger: "click",
                    children: (0, a.jsx)(e6.a, {
                        cloneCustomTrigger: !0,
                        tooltipContent: c,
                        triggerPopupOpen: i,
                        children: t
                    })
                })
            }), s[4] = i, s[5] = c, s[6] = t, s[7] = n) : n = s[7], n
        }

        function rX() {
            return (0, ry.a)([])
        }
        let rV = (0, rm.f)({
            more: {
                id: "chatgpt.conversation.header.control.more.label",
                defaultMessage: "More",
                description: "Short tooltip and accessible label for the icon-only overflow control in the active ChatGPT conversation header. It opens additional actions for the current chat. Sibling header controls include Share. Keep this single word concise and do not add punctuation. No placeholders."
            }
        });
        var rQ = n("Dcf"),
            rZ = n("WL");

        function rY(e) {
            let t, n, s, o = (0, r.c)(10),
                {
                    allowsThreadContentOverlap: i,
                    project: c
                } = e,
                d = void 0 !== i && i,
                u = (0, w.a)(),
                h = null == c ? "gap-2 ps-2" : "gap-0.5",
                p = d && "rounded-lg bg-surface";
            o[0] !== h || o[1] !== p ? (t = (0, l.b)("me-2 flex min-w-0 flex-1 items-center text-base select-none", h, p), o[0] = h, o[1] = p, o[2] = t) : t = o[2];
            let g = !!d || void 0;
            return o[3] !== u || o[4] !== c ? (n = null != c ? (0, a.jsx)("nav", {
                "aria-label": u.formatMessage({
                    id: "chatgptConversations.header.projectBreadcrumb",
                    defaultMessage: "Breadcrumb",
                    description: "Accessible label for project conversation breadcrumb navigation"
                }),
                className: "flex min-w-0 items-center gap-1 overflow-hidden whitespace-nowrap",
                children: (0, a.jsx)(I.g, {
                    className: "flex h-9 max-w-full min-w-8 shrink cursor-interaction items-center overflow-hidden rounded-lg px-2 text-start text-base text-secondary transition-colors hover:bg-surface-tertiary hover:text-default",
                    to: (0, rZ.c)(c.gizmo.id),
                    children: (0, a.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-1.5",
                        children: [(0, a.jsx)(tf.a, {
                            className: "size-5",
                            color: c.gizmo.display.theme,
                            defaultColor: "secondary",
                            fallbackIcon: (0, a.jsx)(e4.ud, {}),
                            icon: c.gizmo.display.emoji,
                            sharedIcon: "shared" === (0, aF.b)(c) ? (0, a.jsx)(rQ.a, {}) : void 0
                        }), (0, a.jsx)("span", {
                            className: "min-w-0 truncate text-default",
                            children: c.gizmo.display.name
                        })]
                    })
                })
            }) : null, o[3] = u, o[4] = c, o[5] = n) : n = o[5], o[6] !== t || o[7] !== g || o[8] !== n ? (s = (0, a.jsx)(M.a.HeaderToolbar, {
                inset: !1,
                children: (0, a.jsx)("div", {
                    className: t,
                    "data-app-shell-thread-content-overlap": g,
                    children: n
                })
            }), o[6] = t, o[7] = g, o[8] = n, o[9] = s) : s = o[9], s
        }
        var rJ = n("dLc"),
            r0 = n("lX8");
        n("i1o");
        var r1 = n("alJ"),
            r2 = n("u9"),
            r3 = n("Kid");
        let r4 = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function r5(e) {
            let t, n, s, o, i, l = (0, r.c)(15),
                {
                    children: c,
                    draftKey: d,
                    enableInlineSystemHints: u
                } = e,
                h = (0, g.z)(eo.a),
                p = (0, x.useContext)(eD.a),
                m = u ? "chatgpt" : void 0;
            return l[0] !== u || l[1] !== m ? (t = {
                enableInlineSystemHints: u,
                variant: m
            }, l[0] = u, l[1] = m, l[2] = t) : t = l[2], l[3] !== d || l[4] !== h ? (n = () => ({
                defaultText: h.get(nC.r, d),
                defaultTextKind: "prompt"
            }), l[3] = d, l[4] = h, l[5] = n) : n = l[5], l[6] !== p ? (s = () => {
                let e = p?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == p ? null : {
                    element: e,
                    locationKey: p.locationKey
                }
            }, l[6] = p, l[7] = s) : s = l[7], l[8] !== c ? (o = e => null == e ? null : c(e), l[8] = c, l[9] = o) : o = l[9], l[10] !== t || l[11] !== n || l[12] !== s || l[13] !== o ? (i = (0, a.jsx)(r3.a, {
                controllerOptions: r4,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: s,
                children: o
            }), l[10] = t, l[11] = n, l[12] = s, l[13] = o, l[14] = i) : i = l[14], i
        }
        var r6 = n("ygK"),
            r7 = n("KSi"),
            r8 = n("vVg"),
            r9 = n("QPe"),
            se = n("Mgy"),
            st = n("gy"),
            sn = n("wnp"),
            sa = n("M3K");

        function sr(e) {
            let t, n, s, o, l, c, d = (0, r.c)(21),
                {
                    conversationId: u
                } = e,
                h = (0, g.z)(eo.a),
                p = (0, g.x)(D.j, u),
                m = (0, g.A)(ef.b),
                {
                    search: f
                } = (0, I.X)();
            if (d[0] !== f) {
                let e = new URLSearchParams(f);
                t = e.get("messageId") ?? e.get("message"), n = e.has("selectedTextQuery"), d[0] = f, d[1] = t, d[2] = n
            } else t = d[1], n = d[2];
            let v = n;
            d[3] !== v || d[4] !== t || d[5] !== p ? (s = ["chatgpt-message-target", p, t, v], d[3] = v, d[4] = t, d[5] = p, d[6] = s) : s = d[6];
            let b = null != p && null != t && m > 0,
                y = v ? 0 : 1 / 0;
            d[7] !== u || d[8] !== v || d[9] !== t || d[10] !== h || d[11] !== p ? (o = async e => {
                let {
                    signal: n
                } = e;
                if (null != p) {
                    if (null != t && v) {
                        let e = h.get(D.J, u),
                            n = e?.[t] ?? (null == e ? void 0 : Object.values(e).find(e => e.message?.id === t));
                        if (n?.message != null) return !0
                    }
                    await (0, em.a)(h, p, n)
                }
                return !0
            }, d[7] = u, d[8] = v, d[9] = t, d[10] = h, d[11] = p, d[12] = o) : o = d[12], d[13] !== s || d[14] !== b || d[15] !== y || d[16] !== o ? (l = {
                queryKey: s,
                enabled: b,
                staleTime: y,
                retry: !1,
                queryFn: o
            }, d[13] = s, d[14] = b, d[15] = y, d[16] = o, d[17] = l) : l = d[17];
            let {
                isError: x,
                refetch: C
            } = (0, i.a)(l);
            return d[18] !== x || d[19] !== C ? (c = x ? (0, a.jsx)(eA.a, {
                color: "secondary",
                onClick: () => void C(),
                children: (0, a.jsx)(_.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message",
                    description: "Button to retry loading the full conversation for a link to an older message"
                })
            }) : null, d[18] = x, d[19] = C, d[20] = c) : c = d[20], c
        }
        var ss = n("ckw");

        function so(e) {
            let t, n = (0, r.c)(3),
                {
                    children: s
                } = e,
                [o] = (0, x.useState)(si);
            return n[0] !== o || n[1] !== s ? (t = (0, a.jsx)(ev.a, {
                value: o,
                children: s
            }), n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }

        function si() {
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

        function sl(e) {
            let t, n = (0, r.c)(2),
                {
                    children: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(ss.a, {
                children: (0, a.jsx)(so, {
                    children: s
                })
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var sc = n("Ska"),
            sd = n("PY"),
            su = n("MDm"),
            sh = n("K4"),
            sp = n("jC"),
            sg = n("V8");

        function sm(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CS");
        var sf = n("Nqf"),
            sv = n("JEF"),
            sb = n("moB");
        let sy = '[data-markdown-text-style="assistant-message"]',
            sx = (0, g.d)(eo.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(D.J, n)?.[a]?.message ?? null
            });

        function sC(e) {
            let t, n, s = (0, r.c)(5),
                o = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return s[0] !== e ? (t = t => (0, a.jsx)(sw, {
                ...e,
                selection: t
            }), s[0] = e, s[1] = t) : t = s[1], s[2] !== o || s[3] !== t ? (n = (0, a.jsx)(sf.a, {
                align: "start",
                targetSelector: o,
                children: t
            }), s[2] = o, s[3] = t, s[4] = n) : n = s[4], n
        }

        function sw(e) {
            let t, s, o, i, l, c, d, u = (0, r.c)(30),
                {
                    conversationId: h,
                    moreDetailsEnabled: p,
                    onAddSelectedText: m,
                    selection: f
                } = e,
                v = (0, g.z)(B.a),
                b = (0, w.a)(),
                y = (0, tT.h)("4290238484"),
                x = (0, tT.h)("473637331"),
                C = (0, g.A)(sb.a),
                _ = (0, g.x)(D.x, h);
            u[0] !== _ || u[1] !== C || u[2] !== v ? (t = C && "tpp" === _ && "chatgpt-thread" === v.value.routeKind && null == v.value.workSideChat && !0, u[0] = _, u[1] = C, u[2] = v, u[3] = t) : t = u[3];
            let I = t;
            u[4] !== h || u[5] !== f.selectionRange ? (s = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, s = a?.closest(sy);
                if (n.collapsed || null == s || !s.isConnected || s !== r?.closest(sy)) return null;
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
            let j = s,
                S = j?.messageId ?? null;
            u[7] !== h || u[8] !== S ? (o = {
                conversationId: h,
                messageId: S
            }, u[7] = h, u[8] = S, u[9] = o) : o = u[9];
            let T = (0, g.x)(sx, o),
                A = (0, g.x)(D.j, h),
                P = y && p && null != A && null != j && T?.author.role === "assistant";
            return u[10] !== I || u[11] !== v ? (i = I ? e => {
                n.e(971224).then(n.bind(n, "f8o")).then(t => {
                    let {
                        createAndOpenWorkSideChat: n
                    } = t;
                    return n(v, {
                        target: "right",
                        selectedText: e
                    })
                })
            } : void 0, u[10] = I, u[11] = v, u[12] = i) : i = u[12], u[13] !== P || u[14] !== x || u[15] !== m || u[16] !== f.selectionRange || u[17] !== j ? (l = !P || x ? e => {
                m(e, j?.messageId, null == j ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of nF(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(j.markdownElement, f.selectionRange, e))
            } : void 0, u[13] = P, u[14] = x, u[15] = m, u[16] = f.selectionRange, u[17] = j, u[18] = l) : l = u[18], u[19] !== P || u[20] !== h || u[21] !== b || u[22] !== v || u[23] !== j ? (c = P ? e => {
                Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(753405), n.e(585419), n.e(877700), n.e(636463), n.e(669998), n.e(859973), n.e(909395), n.e(146419), n.e(729227), n.e(528919)]).then(n.bind(n, "zRl")).then(t => {
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
                        locale: b.locale,
                        messageId: j.messageId,
                        query: b.formatMessage({
                            id: "chatgpt.selection.moreDetailsTitle",
                            defaultMessage: "More details",
                            description: "Title of the side panel explaining selected text from an assistant response"
                        }),
                        shouldBlockExternalEgress: v.get(no.d, h),
                        sourceConversationId: h
                    })
                })
            } : void 0, u[19] = P, u[20] = h, u[21] = b, u[22] = v, u[23] = j, u[24] = c) : c = u[24], u[25] !== f.selectedText || u[26] !== i || u[27] !== l || u[28] !== c ? (d = (0, a.jsx)(sv.a, {
                conversationTerminology: "chat",
                selectedText: f.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), u[25] = f.selectedText, u[26] = i, u[27] = l, u[28] = c, u[29] = d) : d = u[29], d
        }
        var s_ = n("wqm");

        function sI(e) {
            let t, n, a, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = e,
                i = (0, g.z)(eo.a),
                l = null != o;
            s[0] !== i || s[1] !== o ? (t = () => {
                null != o && (rI.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: o
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(sj), (0, tm.a)(i, s_.a, {
                    sharedConversationId: o
                }))
            }, s[0] = i, s[1] = o, s[2] = t) : t = s[2];
            let c = (0, x.useEffectEvent)(t);
            return s[3] !== c ? (n = () => {
                c()
            }, s[3] = c, s[4] = n) : n = s[4], s[5] !== l ? (a = [l], s[5] = l, s[6] = a) : a = s[6], (0, x.useEffect)(n, a), null
        }

        function sj() {}
        var sS = n("Gig"),
            sT = n("JKd"),
            sA = n("gsA"),
            sP = n("HOL"),
            sM = n("FGv"),
            sE = n("r9i"),
            sk = n("vlt"),
            sR = n("SEB"),
            sO = n("uQ"),
            sN = n("VM");

        function sF(e) {
            let t, n, s, o, i, l = (0, r.c)(12),
                {
                    data: c
                } = e,
                d = (0, g.z)(eo.a),
                u = (0, w.a)();
            l[0] !== u ? (t = u.formatMessage(nv.a.headerShare), l[0] = u, l[1] = t) : t = l[1];
            let h = t,
                [p, m] = (0, x.useState)(!1);
            return l[2] !== c || l[3] !== p || l[4] !== d ? (n = () => {
                p || (m(!0), sG(d, c).finally(() => m(!1)))
            }, l[2] = c, l[3] = p, l[4] = d, l[5] = n) : n = l[5], l[6] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(sP.a, {
                asset: sN.a
            }), o = (0, a.jsx)(_.a, {
                ...nv.a.headerShare
            }), l[6] = s, l[7] = o) : (s = l[6], o = l[7]), l[8] !== p || l[9] !== h || l[10] !== n ? (i = (0, a.jsxs)(eA.a, {
                "aria-label": h,
                color: "ghostActive",
                loading: p,
                size: "toolbar",
                onClick: n,
                children: [s, o]
            }), l[8] = p, l[9] = h, l[10] = n, l[11] = i) : i = l[11], i
        }
        async function sG(e, t) {
            let a = t.sharedPost,
                r = a?.attachments[0]?.kind === "media_generation" ? (0, sO.a)(a, (0, sO.b)(a))[0] : null,
                s = crypto.randomUUID();
            (0, sR.b)(e, {
                attachmentType: t.attachmentType,
                contentType: t.contentType,
                shareId: t.shareId,
                shareSessionId: s
            });
            let o = t.dialogProps.receiverShareLink;
            if (o?.contentType === "conversation") {
                let a = (0, sR.a)(e, {
                        actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                        shareId: t.shareId,
                        shareSessionId: s,
                        source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                        usedExistingLink: !0,
                        omitSheetType: !0
                    }),
                    r = await (0, sM.a)(Promise.resolve(o.shareLinkUrl));
                if (a({
                        result: r ? "link-copied" : "copy-failed",
                        shareId: t.shareId
                    }), r) {
                    let {
                        showConversationShareCopiedToast: t
                    } = await n.e(555532).then(n.bind(n, "eua"));
                    t(e, null, !0 === o.isWorkspaceOnly)
                } else(0, r_.f)(e, sk.a, {
                    ...t.dialogProps,
                    recoveryShareLink: o,
                    shareSessionId: s
                });
                return
            }(0, r_.f)(e, sk.a, {
                ...t.dialogProps,
                image: r?.src == null ? void 0 : {
                    alt: t.dialogProps.title ?? "",
                    item: r,
                    previewSrc: r.src
                },
                previewTurns: null != r ? void 0 : (0, sE.i)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId),
                privacyNotices: (0, sE.j)({
                    conversation: t.conversation,
                    projectId: null
                }),
                shareSessionId: s
            })
        }
        var sz = n("JUx");
        let sL = (0, x.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taa"))).CodexThreadReportDialog
        }));

        function sD(e) {
            let t, n, s, o, i = (0, r.c)(8),
                {
                    sharedConversationId: l
                } = e,
                c = (0, g.z)(eo.a);
            if (null != (0, g.x)(sA.c, (0, x.useContext)(N.a))) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(sz.a, {}), i[0] = e) : e = i[0], e
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
                (0, r_.f)(c, sL, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, sR.c)(c, l)
            }, i[2] = c, i[3] = l, i[4] = n) : n = i[4], i[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(_.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation",
                description: "Button above a shared ChatGPT conversation in Codex Desktop that opens ChatGPT's report modal for reporting another person's shared conversation"
            }), i[5] = s) : s = i[5], i[6] !== n ? (o = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(eA.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: s
                })]
            }), i[6] = n, i[7] = o) : o = i[7], o
        }
        var sB = n("zbj"),
            sW = n("Xsl"),
            sH = n("FoK"),
            sq = n("xSO"),
            sU = n("rhK"),
            sK = n("PP3"),
            s$ = n("CF"),
            sX = n("JN"),
            sV = n("mU");

        function sQ(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g, m, f = (0, r.c)(31),
                {
                    canSave: v,
                    isPending: b,
                    onCancel: y,
                    onClose: x,
                    onSave: C
                } = e;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(_.a, {
                id: "chatgptConversations.temporaryChat.save.close",
                defaultMessage: "Close",
                description: "Accessible label for the close button in the temporary chat save confirmation dialog."
            }), f[0] = t) : t = f[0], f[1] !== b || f[2] !== x ? (n = e => {
                e || b || x()
            }, f[1] = b, f[2] = x, f[3] = n) : n = f[3];
            let w = !b;
            f[4] !== v || f[5] !== C ? (s = e => {
                e.preventDefault(), v && C()
            }, f[4] = v, f[5] = C, f[6] = s) : s = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(sX.e, {
                children: (0, a.jsx)(_.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?",
                    description: "Title of the confirmation dialog for converting a temporary ChatGPT conversation into a regular saved chat."
                })
            }), f[7] = o) : o = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(sV.e, {
                children: (0, a.jsx)(sV.d, {
                    className: "select-none",
                    title: o,
                    subtitle: (0, a.jsx)(sX.d, {
                        children: (0, a.jsx)(_.a, {
                            id: "chatgptConversations.temporaryChat.save.description.regularChatSettings",
                            defaultMessage: "This chat will now be included in your history. It will follow your memory and model training settings used for regular chats.",
                            description: "Body of the confirmation dialog shown when a user saves a temporary ChatGPT conversation. Explains before they confirm that the chat will appear in history and follow the memory and model training settings already configured for regular chats."
                        })
                    })
                })
            }), f[8] = i) : i = f[8], f[9] !== y || f[10] !== x ? (l = () => {
                y?.(), x()
            }, f[9] = y, f[10] = x, f[11] = l) : l = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(_.a, {
                id: "chatgptConversations.temporaryChat.save.cancel",
                defaultMessage: "Cancel",
                description: "Secondary button that closes the save confirmation dialog and leaves the ChatGPT conversation temporary."
            }), f[12] = c) : c = f[12], f[13] !== b || f[14] !== l ? (d = (0, a.jsx)(eA.a, {
                color: "secondary",
                disabled: b,
                onClick: l,
                children: c
            }), f[13] = b, f[14] = l, f[15] = d) : d = f[15];
            let I = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(_.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save",
                description: "Primary button that saves a temporary ChatGPT conversation to regular chat history."
            }), f[16] = u) : u = f[16], f[17] !== b || f[18] !== I ? (h = (0, a.jsx)(eA.a, {
                color: "primary",
                disabled: I,
                loading: b,
                type: "submit",
                children: u
            }), f[17] = b, f[18] = I, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(sV.e, {
                children: (0, a.jsxs)(sV.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== s ? (g = (0, a.jsxs)(sV.b, {
                as: "form",
                onSubmit: s,
                children: [i, p]
            }), f[23] = p, f[24] = s, f[25] = g) : g = f[25], f[26] !== b || f[27] !== g || f[28] !== n || f[29] !== w ? (m = (0, a.jsx)(sX.b, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: b,
                showDialogClose: w,
                size: "narrow",
                children: g
            }), f[26] = b, f[27] = g, f[28] = n, f[29] = w, f[30] = m) : m = f[30], m
        }

        function sZ(e) {
            (0, nB.e)(e).catch(() => {
                e0.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function sY(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(sJ, {
                        conversationId: s
                    })
                })]
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function sJ(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return (0, g.A)(sK.e) ? (n[0] !== s ? (t = (0, a.jsx)(s0, {
                conversationId: s
            }), n[0] = s, n[1] = t) : t = n[1], t) : null
        }

        function s0(e) {
            let t, n, s, o, i, l, c, d, u, h, p, m, f, v = (0, r.c)(49),
                {
                    conversationId: b
                } = e,
                y = (0, g.z)(eo.a),
                C = (0, w.a)(),
                j = (0, I.Z)(),
                [S, T] = (0, x.useState)(!1),
                [A, P] = (0, x.useState)(!1),
                [M, E] = (0, x.useState)(!1),
                [k, R] = (0, x.useState)(!1),
                O = (0, x.useRef)(!1),
                N = (0, g.A)(rP.p).data,
                F = (0, g.x)(D.j, b),
                G = (0, g.x)(D.T, b),
                z = (0, g.x)(D.G, b),
                L = (0, g.x)(nC.h, b);
            v[0] !== b || v[1] !== y ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (y.get(D.G, b) || y.get(nC.h, b) || t !== y.get(D.j, b) || n !== y.get(D.T, b)) throw Error("Cannot save an unavailable temporary chat message");
                    return rI.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: s5
                    }).then(s4)
                },
                retry: s3
            }, v[0] = b, v[1] = y, v[2] = t) : t = v[2];
            let {
                mutateAsync: B,
                isPending: W
            } = (0, sq.a)(t), H = null != F && null != G && !z && !L && !W && !A;
            v[3] !== C ? (n = C.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat",
                description: "Tooltip and accessible label for the bookmark button in a temporary ChatGPT conversation. Opens a confirmation dialog to save it to regular history."
            }), v[3] = C, v[4] = n) : n = v[4];
            let q = n;
            v[5] !== N?.eligibleAnnouncements ? (s = N?.eligibleAnnouncements?.includes(rP.h), v[5] = N?.eligibleAnnouncements, v[6] = s) : s = v[6];
            let U = !0 === s,
                K = !k && (M || U && H);
            v[7] !== b || v[8] !== M || v[9] !== y || v[10] !== K ? (o = () => {
                if (!K || M || O.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || O.current || (O.current = !0, (0, tm.a)(y, sH.ub, {
                        personalizationMode: (0, sU.a)((0, sK.k)(y, b))
                    }), E(!0), sZ(y))
                }), () => {
                    e = !0
                }
            }, i = [b, M, y, K], v[7] = b, v[8] = M, v[9] = y, v[10] = K, v[11] = o, v[12] = i) : (o = v[11], i = v[12]), (0, x.useEffect)(o, i), v[13] !== y ? (l = () => {
                R(!0), O.current || (O.current = !0, sZ(y))
            }, v[13] = y, v[14] = l) : l = v[14];
            let $ = l;
            v[15] !== H || v[16] !== b || v[17] !== C || v[18] !== j || v[19] !== B || v[20] !== y || v[21] !== G || v[22] !== F ? (c = async function() {
                let e;
                if (!H || null == F || null == G) return;
                let t = (0, sU.a)((0, sK.k)(y, b));
                (0, tm.a)(y, sH.vb, {
                    personalizationMode: t
                });
                try {
                    e = (await B({
                        sourceConversationId: F,
                        selectedLeafId: G
                    })).conversation_id
                } catch (e) {
                    (0, tm.a)(y, sH.wb, {
                        personalizationMode: t,
                        failureCategory: (0, sU.b)(e)
                    }), y.get(es.h).danger(C.formatMessage({
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
                P(!0), T(!1), (0, rN.H)(y), (0, rN.K)(y, F, "remove"), (0, rN.K)(y, e, "refresh"), j((0, as.c)(e), {
                    replace: !0
                }), y.get(es.h).success(C.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history.",
                    description: "Success toast confirming that a formerly temporary ChatGPT conversation is now saved in regular history."
                })), rI.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: G
                    }
                }).then(s2).then(t => {
                    (0, D.Xb)({
                        scope: y,
                        conversationId: e,
                        title: t
                    }), y.query.setData(nB.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, rN.H)(y), (0, rN.K)(y, e, "refresh")
                }).catch(s1)
            }, v[15] = H, v[16] = b, v[17] = C, v[18] = j, v[19] = B, v[20] = y, v[21] = G, v[22] = F, v[23] = c) : c = v[23];
            let X = c,
                V = !H;
            v[24] !== b || v[25] !== y || v[26] !== K ? (d = () => {
                (0, tm.a)(y, sH.yb, {
                    personalizationMode: (0, sU.a)((0, sK.k)(y, b)),
                    coachMarkVisible: K
                }), T(!0)
            }, v[24] = b, v[25] = y, v[26] = K, v[27] = d) : d = v[27], v[28] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(e5.b, {
                icon: {
                    16: e4.pb,
                    20: e4.qb
                }
            }), v[28] = u) : u = v[28], v[29] !== q || v[30] !== V || v[31] !== d ? (h = (0, a.jsx)(eA.a, {
                "aria-label": q,
                color: "toolbar",
                disabled: V,
                size: "toolbar",
                uniform: !0,
                onClick: d,
                children: u
            }), v[29] = q, v[30] = V, v[31] = d, v[32] = h) : h = v[32];
            let Q = h;
            return v[33] !== $ || v[34] !== C || v[35] !== q || v[36] !== Q || v[37] !== K ? (p = K ? (0, a.jsx)(s$.a, {
                align: "end",
                description: (0, a.jsx)(_.a, {
                    id: "chatgptConversations.temporaryChat.save.coachmark.description",
                    defaultMessage: "Want to keep this chat? You can now save it to your history.",
                    description: "Body of a one-time onboarding coachmark anchored to the Save chat button after a user creates an eligible temporary chat."
                }),
                dismissLabel: C.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.coachmark.dismiss",
                    defaultMessage: "Close tooltip",
                    description: "Accessible label for dismissing the temporary chat save coachmark."
                }),
                onDismiss: $,
                open: !0,
                side: "bottom",
                sideOffset: 10,
                title: (0, a.jsx)(_.a, {
                    id: "chatgptConversations.temporaryChat.save.button",
                    defaultMessage: "Save chat",
                    description: "Title of a one-time onboarding coachmark anchored to the Save chat button in a temporary ChatGPT conversation."
                }),
                tooltipClassName: "w-60",
                children: Q
            }) : (0, a.jsx)(e6.a, {
                tooltipContent: q,
                children: Q
            }), v[33] = $, v[34] = C, v[35] = q, v[36] = Q, v[37] = K, v[38] = p) : p = v[38], v[39] !== H || v[40] !== b || v[41] !== X || v[42] !== S || v[43] !== W || v[44] !== y ? (m = S ? (0, a.jsx)(sQ, {
                canSave: H,
                isPending: W,
                onCancel: () => {
                    (0, tm.a)(y, sH.tb, {
                        personalizationMode: (0, sU.a)((0, sK.k)(y, b))
                    })
                },
                onClose: () => T(!1),
                onSave: () => void X()
            }) : null, v[39] = H, v[40] = b, v[41] = X, v[42] = S, v[43] = W, v[44] = y, v[45] = m) : m = v[45], v[46] !== p || v[47] !== m ? (f = (0, a.jsxs)(a.Fragment, {
                children: [p, m]
            }), v[46] = p, v[47] = m, v[48] = f) : f = v[48], f
        }

        function s1() {}

        function s2(e) {
            return nw.object({
                title: nw.string()
            }).parse(e).title
        }

        function s3(e, t) {
            return e < 1 && t instanceof tW.a && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function s4(e) {
            return nw.object({
                conversation_id: nw.string().min(1)
            }).parse(e)
        }

        function s5(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var s6 = n("Sd4");
        let s7 = (0, g.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(s6.a, e);
            return null != a && n(W.b, a).data?.automation.plan_type === "language_learning"
        });
        var s8 = n("mK"),
            s9 = n("Nhf"),
            oe = n("J8F"),
            ot = n("vpd"),
            on = n("OiC"),
            oa = n("ALW"),
            or = n("Sd"),
            os = n("FNg"),
            oo = n("nD");

        function oi(e) {
            let t, n, a = (0, r.c)(6),
                {
                    conversationId: s,
                    shouldBlockExternalEgress: o,
                    widgets: i
                } = e,
                l = (0, g.z)(or.a);
            return a[0] !== s || a[1] !== l || a[2] !== o || a[3] !== i ? (t = () => {
                let e = new Map(i.map(e => [(0, s8.e)(s, e.messageId), e]));
                return l.watch(t => {
                    let {
                        get: n
                    } = t, a = n(on.b), r = n(F.j);
                    for (let t of n(oa.k).keys()) {
                        let i = e.get(t);
                        if (null == i) continue;
                        let c = !0 === i.metadata.is_widget_closed || n(oo.a, {
                                accountId: a,
                                userId: r,
                                conversationId: s,
                                messageId: i.messageId
                            }),
                            d = "hidden" === i.sessionPresentation,
                            u = "tombstone" === i.sessionPresentation,
                            h = i.replacementMessageId;
                        if (o || c || !d && !u || null == h || n(oo.a, {
                                accountId: a,
                                userId: r,
                                conversationId: s,
                                messageId: h
                            }) || (0, os.b)(l, t, (0, s8.e)(s, h)), c || d) {
                            (0, oa.z)(l, t);
                            continue
                        }
                        let p = l.get(oa.k).get(t),
                            g = p?.content.mcpAppHostAdapter;
                        null != p && null != g && (g.isTombstone !== u && (0, oa.y)(l, {
                            mcpAppId: t,
                            hostedInThreadScrollLayout: p.hostedInThreadScrollLayout,
                            inlineFrameContainer: p.inlineFrameContainer,
                            ...p.content,
                            mcpAppHostAdapter: {
                                ...g,
                                isTombstone: u
                            }
                        }), u && null != p.sessionId && (0, oa.D)(l, p.sessionId, {
                            displayMode: "inline"
                        }))
                    }
                })
            }, n = [s, l, o, i], a[0] = s, a[1] = l, a[2] = o, a[3] = i, a[4] = t, a[5] = n) : (t = a[4], n = a[5]), (0, x.useLayoutEffect)(t, n), null
        }
        var ol = n("JVS"),
            oc = n("Y0p"),
            od = n("lM");
        let ou = (0, g.v)(eo.a, e => null);
        (0, ak.b)(async () => {
            let {
                ChatGptEntitySidePanelTab: e
            } = await Promise.all([n.e(753405), n.e(585419), n.e(877700), n.e(636463), n.e(669998), n.e(859973), n.e(909395), n.e(146419), n.e(729227), n.e(590590)]).then(n.bind(n, "dPC"));
            return e
        }), (0, eR.a)(async () => () => null);
        let oh = (0, eR.a)(s.c),
            op = (0, eR.a)(async () => (await n.e(328371).then(n.bind(n, "uPM"))).SectionHistory),
            og = (0, eR.a)(async () => (await n.e(286760).then(n.bind(n, "R4D"))).SectionNavigation);

        function om() {
            let e, t, n, s, o, i, l, c, d, u, h, p = (0, r.c)(30),
                m = (0, I.ab)() ?? 0,
                {
                    conversationId: f
                } = (0, I.bb)(),
                {
                    search: v,
                    state: b
                } = (0, I.X)(),
                y = (0, g.x)(nr.a, f ?? null),
                x = b?.archivedConversationPreview === !0;
            if (null == f) {
                let e;
                return p[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(I.l, {
                    to: "/",
                    replace: !0
                }), p[0] = e) : e = p[0], e
            }
            p[1] !== y || p[2] !== f ? (e = y ?? (0, eY.d)(f), p[1] = y, p[2] = f, p[3] = e) : e = p[3];
            let C = e;
            p[4] !== v ? (t = (0, as.e)(v), p[4] = v, p[5] = t) : t = p[5];
            let w = t;
            p[6] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(S.a, {}), s = (0, a.jsx)(eK.a.Surface, {}), p[6] = n, p[7] = s) : (n = p[6], s = p[7]), p[8] !== x ? (o = null, p[8] = x, p[9] = o) : o = p[9], p[10] !== C || p[11] !== x || p[12] !== w ? (i = w || x ? null : (0, a.jsx)(ny, {
                conversationId: C
            }), p[10] = C, p[11] = x, p[12] = w, p[13] = i) : i = p[13];
            let _ = `${C}:${w}`;
            p[14] === Symbol.for("react.memo_cache_sentinel") ? (l = void 0, p[14] = l) : l = p[14], p[15] !== C || p[16] !== x || p[17] !== w || p[18] !== _ || p[19] !== m ? (c = (0, a.jsx)(ov, {
                conversationId: C,
                viewActivation: m,
                isArchivedPreview: x,
                isReadOnlyPreview: !1,
                banner: l,
                isTemporaryChat: w,
                sharedConversationId: null
            }, _), p[15] = C, p[16] = x, p[17] = w, p[18] = _, p[19] = m, p[20] = c) : c = p[20], p[21] !== o || p[22] !== i || p[23] !== c ? (d = (0, a.jsxs)(a.Fragment, {
                children: [n, s, o, i, c]
            }), p[21] = o, p[22] = i, p[23] = c, p[24] = d) : d = p[24];
            let j = d;
            return p[25] !== j ? (u = j, p[25] = j, p[26] = u) : u = p[26], p[27] !== C || p[28] !== u ? (h = (0, a.jsx)(ai, {
                conversationId: C,
                children: u
            }), p[27] = C, p[28] = u, p[29] = h) : h = p[29], h
        }

        function of() {
            let e, t, n, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = (0, I.bb)();
            if (null == o) {
                let e;
                return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(I.l, {
                    to: "/",
                    replace: !0
                }), s[0] = e) : e = s[0], e
            }
            s[1] !== o ? (e = (0, eY.d)(o), s[1] = o, s[2] = e) : e = s[2];
            let i = e;
            return s[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(eK.a.Surface, {}), s[3] = t) : t = s[3], s[4] !== i || s[5] !== o ? (n = (0, a.jsxs)(a.Fragment, {
                children: [t, (0, a.jsx)(ov, {
                    conversationId: i,
                    isTemporaryChat: !1,
                    sharedConversationId: o
                }, o)]
            }), s[4] = i, s[5] = o, s[6] = n) : n = s[6], n
        }

        function ov(e) {
            let t, n, s, l, c, d, u, h, C, _, S, R, O, z, L, W, H, q, U, K, $, X, V, Q, Z, Y, ea, er, eo, ei, el, ec, ed, eu, ep, eg, em, ef, ev, eb, ey, ex, eC, ew, eA, eP, eM, eE, ek, eR, eO, eN, eF, eG, ez, eD, eq, eU, eK, e$, eX, eV, eQ, eJ, e1, e3, e4, e6, tn, ta, tr, ts, to, ty, tC, tS, tP, tR, tz, tB, nu, np, ng, nm, nf, nv, nb, ny = (0, r.c)(672),
                {
                    conversationId: nw,
                    viewActivation: n_,
                    isArchivedPreview: nI,
                    isInlinePreview: nj,
                    hideModelPicker: nS,
                    disableAutoFocus: nT,
                    hideInitialUserMessage: nA,
                    transcriptPresentation: nP,
                    scrollOrigin: nM,
                    isReadOnlyPreview: nE,
                    onBackgroundSubmitAccepted: nk,
                    onSubmitAccepted: nR,
                    previewLifecycle: nO,
                    isTemporaryChat: nN,
                    sharedConversationId: nF,
                    requiredSystemHints: nG,
                    routePattern: nz,
                    composerLeadingContent: nL,
                    header: nH,
                    banner: nU,
                    onRetryMissingConversation: nK,
                    sharedProjectConversation: n$,
                    workspace: nX
                } = e,
                nV = void 0 === n_ ? 0 : n_,
                nQ = void 0 !== nI && nI,
                nZ = void 0 !== nj && nj,
                nY = (0, g.z)(B.a),
                nJ = (0, x.useContext)(N.a),
                n2 = (0, g.x)(sA.c, nJ);
            ny[0] !== nJ || ny[1] !== nw ? (t = {
                auth: nJ,
                conversationId: nw
            }, ny[0] = nJ, ny[1] = nw, ny[2] = t) : t = ny[2];
            let n3 = (0, g.x)(null != nJ && !nJ.isLoading && null === nJ.authMethod && sA.e, t),
                {
                    conversationId: n4
                } = (0, I.bb)();
            ny[3] !== nw || ny[4] !== nZ || ny[5] !== n4 || ny[6] !== nY || ny[7] !== nX ? (n = () => (0, eY.e)(nZ || null != nX || null == nY.get(D.j, nw) ? nw : n4 ?? ""), ny[3] = nw, ny[4] = nZ, ny[5] = n4, ny[6] = nY, ny[7] = nX, ny[8] = n) : n = ny[8];
            let [n5, n7] = (0, x.useState)(n);
            ny[9] !== n5 || ny[10] !== nw ? (s = () => n5 ? nw : null, ny[9] = n5, ny[10] = nw, ny[11] = s) : s = ny[11];
            let [n9] = (0, x.useState)(s), ae = null != nF || null != n2;
            ny[12] !== nw || ny[13] !== nQ || ny[14] !== nZ || ny[15] !== ae || ny[16] !== nY ? (l = () => {
                if (!ae && !nQ && !nZ) return function(e, t) {
                    let n = e.get(nr.a, t) ?? t,
                        a = e.get(et.b, t),
                        r = e.get(nc, n),
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
                        i = e.get(tY.i),
                        l = o.observedTurn,
                        c = null;

                    function d(t) {
                        for (let n of t.toReversed())
                            if (!o.initialCreationMessageIds.has(n.messageId) && (0, t7.openSpacePageSidePanelTab)(e, n.pageId, {
                                    title: n.title
                                }).opened) {
                                o.openedCreatedPage = !0;
                                break
                            }
                    }
                    let u = e.watch(n => {
                        let {
                            get: a
                        } = n, r = a(D.X, t), s = a(tY.i), u = a(D.Z, t);
                        if ((0, D.wb)(r)) {
                            l = !1;
                            let e = a(et.b, t),
                                n = a(D._, t),
                                r = !o.observedTurn || o.attemptId !== e;
                            if (o.attemptId = e, r) {
                                let e = c;
                                c = null, e?.abort(), o.observedTurn = !0, o.activeRequestId = n, o.dismissed = u, o.openedCreatedPage = !1
                            } else o.activeRequestId = n ?? o.activeRequestId, o.dismissed = o.dismissed || u || i && !s;
                            i = s;
                            let h = !u && !o.dismissed && !s && !o.openedCreatedPage && !a(B.h) && !a(D.B, t) && !a(no.d, t),
                                p = [];
                            if ((r || h) && (p = a(D.M, t) ?? []), r) {
                                o.initialCreationMessageIds = new Set(p.map(e => e.messageId));
                                return
                            }
                            h && d(p);
                            return
                        }
                        if (!o.observedTurn) return;
                        let h = a(D.v, t);
                        if ("idle" !== r || u || null != h && "completed" !== h.result || null != e.get(D.B, t) || e.get(B.h) || e.get(no.d, t)) {
                            o.observedTurn = !1;
                            return
                        }
                        if (l) {
                            if (o.dismissed || s || o.openedCreatedPage || a(et.b, t) !== o.attemptId) {
                                o.observedTurn = !1;
                                return
                            }
                            if (h?.result !== "completed") return;
                            d(a(D.M, t) ?? []), o.observedTurn = !o.openedCreatedPage;
                            return
                        }
                        if (o.observedTurn = !1, h?.result !== "completed" || h.requestId !== o.activeRequestId) return;
                        let p = e.get(D.J, t);
                        if (null == p) return;
                        let g = (0, f.b)({
                                mapping: p,
                                current_node: e.get(D.A, t)
                            }),
                            m = g.findLast(nl.b);
                        if (m?.status !== "finished_successfully") return;
                        let v = [...(0, ns.e)(g).outputs, ...g.flatMap(e => (0, ns.c)(e).map(e => e.file))],
                            b = e.get(nt.a, t)?.at(-1);
                        if (b?.turn.status !== "complete") return;
                        let y = [...(0, t0.a)(g), ...b.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, tJ.a)(e, y, !o.dismissed) || !o.dismissed && !o.openedCreatedPage && (0, t8.a)(e, y)) && !o.dismissed && !s && !o.openedCreatedPage) {
                            for (let t of (0, t6.c)((0, f.d)(m)).toReversed())
                                if ((0, t7.openSpacePageSidePanelTab)(e, t.id, {
                                        blockId: t.blockId
                                    }).opened) return;
                            if ((0, ni.canOpenChatGptFilePreview)({
                                    browserPreview: !0
                                })) {
                                for (let n of b.turn.items)
                                    if ("assistant-message" === n.type && n.completed)
                                        for (let [a, r] of n.contentReferences.entries()) {
                                            let s = (0, nn.a)(r),
                                                o = null == s ? null : (0, t1.a)(s),
                                                i = v.find(e => null != e.fileId && e.fileId === (r.file_id ?? r.id) || null != e.libraryFileId && e.libraryFileId === r.library_file_id);
                                            if ("file" !== r.type || !(0, tZ.a)(r) || null == s || null == o || !(0, t1.e)(o) || null == i && null == (0, na.b)(r.sandbox_path) && !(0, na.b)(r.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > t4.a) continue;
                                            let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                d = (0, ne.b)(r, {
                                                    fileName: s,
                                                    messageId: l
                                                });
                                            if (null == d) continue;
                                            if (e.get(tA.e)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let u = e.get(D.j, t) ?? t,
                                                h = `${l??"message"}:${String(a)}:${s}`,
                                                p = `chatgpt-file:${u}:${h}`,
                                                m = {
                                                    turnId: b.id,
                                                    inputMessageId: g.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: l ?? null
                                                },
                                                f = new AbortController,
                                                y = (0, ni.openChatGptFile)(e, {
                                                    conversationId: u,
                                                    fileName: s,
                                                    gizmoId: e.get(D.O, t),
                                                    sharedConversationId: e.get(D.V, t),
                                                    target: d,
                                                    tabKey: h,
                                                    browserPreview: !0,
                                                    isAccessBlocked: e => e.get(no.d, t),
                                                    downloadFallback: !1,
                                                    openSource: "auto_open",
                                                    originatingTurn: m,
                                                    signal: f.signal,
                                                    onOpened: () => {
                                                        let t = e.get(k.j.activeTab$);
                                                        f.signal.aborted || t?.tabId !== p || t.tabType.kind !== t2.a || ((0, tm.a)(e, tQ.CodexFileOpened, {
                                                            threadId: u,
                                                            turnId: m.turnId,
                                                            inputMessageId: m.inputMessageId ?? void 0,
                                                            messageId: m.messageId ?? void 0,
                                                            fileExtension: (0, t3.c)(s) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, tm.a)(e, tQ.CodexWorkspaceFilePreviewAttempted, (0, t5.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: m,
                                                            path: s,
                                                            threadId: u,
                                                            windowType: "browser"
                                                        })), (0, t9.b)(e, p, "auto_open"))
                                                    },
                                                    onClose: () => f.abort()
                                                });
                                            c = f;
                                            let x = e.watch(e => {
                                                let {
                                                    get: n
                                                } = e;
                                                (n(tY.i) && n(k.j.activeTab$)?.tabId !== p || n(no.d, t)) && f.abort()
                                            });
                                            y.catch(e => {
                                                f.signal.aborted || e0.a.debug("Automatic ChatGPT artifact preview could not open", {
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
                        u(), c?.abort(), null != o.attemptId && e.set(nc, n, {
                            ...o,
                            attemptId: o.attemptId
                        })
                    }
                }(nY, nw)
            }, c = [nw, nQ, nZ, ae, nY], ny[12] = nw, ny[13] = nQ, ny[14] = nZ, ny[15] = ae, ny[16] = nY, ny[17] = l, ny[18] = c) : (l = ny[17], c = ny[18]), (0, x.useEffect)(l, c);
            let at = (0, g.x)(aS.a, nw),
                an = ae ? null : at;
            ny[19] !== nF ? (d = () => null == nF ? null : (0, eY.b)(), ny[19] = nF, ny[20] = d) : d = ny[20];
            let [aa] = (0, x.useState)(d), ao = aa ?? nw;
            ny[21] !== ao ? (u = (0, tw.n)({
                routeKind: "chatgpt-thread",
                conversationId: ao
            }), ny[21] = ao, ny[22] = u) : u = ny[22];
            let ai = null != (0, g.x)(tl.c, u);
            ny[23] !== ao || ny[24] !== nG || ny[25] !== nY ? (h = () => {
                if (null != nG && 0 !== nG.length) return (0, sW.b)(nY, ao, nG)
            }, C = [ao, nG, nY], ny[23] = ao, ny[24] = nG, ny[25] = nY, ny[26] = h, ny[27] = C) : (h = ny[26], C = ny[27]), (0, x.useEffect)(h, C);
            let al = (0, x.useRef)(null),
                [ac, ad] = (0, x.useState)(null),
                [au, ah] = (0, x.useState)(null),
                [ap, ag] = (0, x.useState)(null),
                am = au?.activation === nV ? au.messageId : null,
                af = ap === nV,
                av = (0, x.useRef)(null);
            ny[28] === Symbol.for("react.memo_cache_sentinel") ? (_ = () => {
                let e = new AbortController;
                return av.current = e, () => e.abort()
            }, ny[28] = _) : _ = ny[28], ny[29] !== nV ? (S = [nV], ny[29] = nV, ny[30] = S) : S = ny[30], (0, x.useLayoutEffect)(_, S);
            let ab = (0, w.a)(),
                ay = (0, I.Z)(),
                ax = (0, tL.b)(),
                aC = (0, g.x)(D.j, nw);
            ny[31] !== nY ? (R = e => {
                (0, nd.c)(nY, e)
            }, ny[31] = nY, ny[32] = R) : R = ny[32];
            let aw = (0, x.useEffectEvent)(R);
            ny[33] !== aC || ny[34] !== aw ? (O = () => () => {
                null != aC && aw(aC)
            }, ny[33] = aC, ny[34] = aw, ny[35] = O) : O = ny[35], ny[36] !== aC ? (z = [aC], ny[36] = aC, ny[37] = z) : z = ny[37], (0, x.useEffect)(O, z);
            let a_ = (0, g.x)(sB.b, nw),
                aI = (0, g.x)(D.J, nw),
                aj = (0, g.x)(nB.chatGptConversationQueryById$, ae || nN && null != aI ? null : aC);
            (0, g.x)(ae ? null : nq.a, aC);
            let aT = (0, g.x)(!n3 && no.d, nw),
                aM = aC ?? nw,
                ak = (0, g.x)(D.A, nw),
                aG = (0, g.x)(D.x, nw),
                az = (0, g.x)(D.O, nw),
                aL = (0, g.x)(D.B, nw),
                aD = (0, g.x)(D.K, nw),
                aB = (0, g.x)(D.X, nw),
                aW = (0, g.x)(D.S, nw),
                aH = (0, g.x)(D.U, nw),
                aq = (0, g.x)(n1.a, nw),
                a$ = (0, g.x)(D.C, nw),
                a6 = (0, g.x)(D.$, nw),
                a7 = (0, g.x)(D.ab, nw),
                a8 = (0, g.x)(nB.n, nF),
                a9 = (0, x.useRef)(null),
                re = a8.isSuccess && null != a8.data ? nF : null;
            ny[38] !== nY ? (L = e => {
                (0, tm.a)(nY, o.h, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, ny[38] = nY, ny[39] = L) : L = ny[39];
            let rt = (0, x.useEffectEvent)(L);
            ny[40] !== re || ny[41] !== rt ? (W = () => {
                null != re && a9.current !== re && (a9.current = re, rt(re))
            }, ny[40] = re, ny[41] = rt, ny[42] = W) : W = ny[42], ny[43] !== re ? (H = [re], ny[43] = re, ny[44] = H) : H = ny[44], (0, x.useEffect)(W, H);
            let rn = (0, g.x)(nC.n, nw),
                ro = (0, g.x)(nC.o, nw),
                ri = (0, g.x)(nC.l, nw),
                rl = (0, g.x)(nC.p, nw),
                rc = (0, g.x)(nC.m, nw),
                rd = (0, g.x)(nC.h, nw),
                ru = (0, g.x)(D.Z, nw),
                rp = (0, g.x)(nC.x, nw);
            ny[45] !== aB ? (q = (0, D.wb)(aB), ny[45] = aB, ny[46] = q) : q = ny[46];
            let rg = q,
                rm = (0, g.x)(aA, nw),
                rf = (0, g.A)(G.t),
                rv = (0, g.A)(G.q),
                rb = (0, g.A)(G.s),
                ry = (0, g.A)(G.l),
                rx = (0, g.A)(G.m),
                rC = (0, g.A)(th.pagesEnabled$);
            ny[47] === Symbol.for("react.memo_cache_sentinel") ? (U = (0, ti.a)(), ny[47] = U) : U = ny[47];
            let rw = (0, tT.h)(U);
            ny[48] === Symbol.for("react.memo_cache_sentinel") ? (K = (0, ti.b)(), ny[48] = K) : K = ny[48];
            let r_ = (0, tT.h)(K),
                rI = null != aI,
                rj = (0, g.A)(st.f),
                rS = ae ? a8 : aj;
            n5 && null != rS.data && n7(!1);
            let rT = n5 && rI && null == rS.data,
                rA = rS.isLoading || !rT && rS.isError;
            ny[49] !== ac || ny[50] !== ao || ny[51] !== rA || ny[52] !== ae || ny[53] !== nN || ny[54] !== nY ? ($ = (e, t, n, a) => {
                !(e || nY.get(tx.a)) && ((0, nC.b)(nY, ao, t, void 0, n, a), ac?.focus(), ae || rA || (0, eZ.f)(nY, ao, {
                    isTemporaryChat: nN
                }))
            }, ny[49] = ac, ny[50] = ao, ny[51] = rA, ny[52] = ae, ny[53] = nN, ny[54] = nY, ny[55] = $) : $ = ny[55];
            let rP = $,
                rM = null == n2 ? null : (0, sS.a)(n2, nw),
                rE = null == rM ? void 0 : (0, r0.a)(rM),
                rk = rM ?? rS.data,
                rR = a$ ? a6 : rk?.title,
                rO = (0, g.A)(F.g),
                rF = (0, g.A)(F.f),
                rG = "chatgpt-thread" === nY.value.routeKind && nY.value.workSideChat?.conversationId === nw,
                rz = rk?.conversation_origin ?? aG ?? (null != nX || rG ? "tpp" : null),
                rL = "tpp" === rz,
                rD = rL && "denied" === rf.status && "go-plan" === rf.reason,
                rB = (0, g.A)(tE.d),
                rW = (0, I.X)(),
                rH = rW.state;
            (0, g.A)(tI.b);
            let rq = (0, g.x)(tA.c, "3901104270") && rH?.openGoalPlan === !0,
                rK = (0, x.useContext)(E.c),
                rX = (0, tG.a)(),
                rV = rK?.hasPageSurface === !0,
                rQ = "tpp" === rz || "flora" === rz,
                r3 = (0, g.A)(!!rQ && G.u),
                r4 = void 0 !== nE && nE || r3,
                r5 = null == rB || rB.isFullWidth ? void 0 : rB.width ?? 420,
                r6 = !0 === (0, g.A)(rQ ? null : tq.d),
                r7 = (0, g.A)(rQ ? tb.b : tb.a),
                r9 = !rQ && r7,
                sn = !r_ || rx && !rQ,
                sa = !ae && rx && !rQ,
                sr = sa && ry,
                ss = ae && rk?.is_read_only === !0 || n$?.is_read_only === !0;
            ny[56] !== nw || ny[57] !== ae || ny[58] !== nY ? (X = () => null, ny[56] = nw, ny[57] = ae, ny[58] = nY, ny[59] = X) : X = ny[59];
            let [so] = (0, x.useState)(X), si = rk?.gizmo_id ?? az ?? so?.gizmoId ?? null, sc = ae || null == si || (0, ar.a)(si) ? null : si, sd = (0, g.x)(ou, ao), sh = (0, n0.d)({
                conversation: rk,
                conversationId: nw,
                conversationTitle: aq,
                pathname: rW.pathname,
                sharedConversationId: nF,
                sharedPost: n2
            }), sp = !rb && null == rk && null == so, sg = null != aC && !aT && !sp && (rb || rv), sm = null;
            ae || (sm = null != rk ? (0, rN.B)(rk) : (0, ar.a)(az) ? az : so?.projectId ?? null);
            let sf = (0, g.x)(t$.c, ae ? null : nw),
                sv = ae || rQ || null != sm || sf || null == sd ? sc : sd.id,
                sb = (0, g.x)(r2.d, {
                    gizmoId: sv,
                    conversationId: ao,
                    visitKey: rW.pathname
                }),
                sy = rV || rQ || null != sm || null != sc || sf || nN,
                {
                    data: sx
                } = (0, i.a)({
                    enabled: null != sm,
                    queryFn: () => {
                        if (null == sm) throw Error("Expected a ChatGPT project id");
                        return (0, eI.c)(sm)
                    },
                    queryKey: (0, rN.E)(sm ?? ""),
                    staleTime: eh.b.ONE_MINUTE
                }),
                sC = null != sm && (sx?.gizmo.share_recipient !== "private" || (sx?.gizmo.sharing?.subjects?.length ?? 0) > 0),
                sw = rk?.context_scopes?.includes("HEALTH") === !0 || sx?.gizmo.gizmo_snorlax_type === "potion",
                s_ = (0, r8.a)(rk?.context_scopes, {
                    projectType: sx?.gizmo.gizmo_snorlax_type,
                    projectId: sm,
                    lockedProjectId: rj?.projectId
                }),
                sj = aT || sC || sw || s_;
            ny[60] !== sx?.gizmo.display.name ? (V = sx?.gizmo.display.name.trim() || null, ny[60] = sx?.gizmo.display.name, ny[61] = V) : V = ny[61];
            let sP = V,
                sM = sx?.gizmo.display.theme,
                sE = sx?.gizmo.display.emoji;
            ny[62] !== sx ? (Q = "shared" === (0, aF.b)(sx) ? (0, a.jsx)(e5.b, {
                icon: {
                    assets: {
                        16: oc.a,
                        20: od.a
                    }
                }
            }) : void 0, ny[62] = sx, ny[63] = Q) : Q = ny[63], ny[64] !== sM || ny[65] !== sE || ny[66] !== Q ? (Z = (0, a.jsx)(tf.a, {
                className: "icon-leading",
                size: "leading",
                color: sM,
                icon: sE,
                sharedIcon: Q
            }), ny[64] = sM, ny[65] = sE, ny[66] = Q, ny[67] = Z) : Z = ny[67];
            let sk = Z,
                sR = (0, g.x)(D.i, nw),
                sO = sR?.metadata ?? rk?.context_truncation_continuation,
                sN = ae || nN || null != n$ || null == rO || rk?.owner?.user_id == null || null == sm || rk.owner.user_id === (rF ? rO.split("__")[0] : rO) ? null : (0, rZ.d)(sm, rk.conversation_id, rk.owner.user_id),
                sG = (0, g.x)(ae || nQ || r4 ? null : su.b, nw),
                sz = sG?.isReviewing === !0,
                sL = null == sG ? aI : sG.conversation.mapping,
                sD = null == sG ? ak : sG.conversation.current_node,
                sH = null == aI ? rk : null;
            ny[68] === Symbol.for("react.memo_cache_sentinel") ? (Y = (0, nW.a)(), ny[68] = Y) : Y = ny[68];
            let sq = Y;
            ny[69] === Symbol.for("react.memo_cache_sentinel") ? (ea = new WeakMap, ny[69] = ea) : ea = ny[69];
            let sU = ea;
            ny[70] !== r7 || ny[71] !== r9 || ny[72] !== sO || ny[73] !== rz || ny[74] !== sD || ny[75] !== sL || ny[76] !== sH || ny[77] !== nQ || ny[78] !== ae || ny[79] !== rg || ny[80] !== rQ || ny[81] !== aD || ny[82] !== ri || ny[83] !== rc || ny[84] !== rn || ny[85] !== ro || ny[86] !== rl || ny[87] !== sz || ny[88] !== nY.get || ny[89] !== sG?.isEntering || ny[90] !== a_ || ny[91] !== aB ? (er = () => sq({
                conversation: sH,
                contextContinuation: sO,
                clinicalSearchEnabled: r9,
                clinicalCitationsEnabled: r7,
                conversationOrigin: rz,
                enableImageGenerationLoadingState: !ae && !nQ && !sz && "error" !== aB,
                getRenderTelemetry: e => (0, oe.c)(nY.get, e),
                isStreaming: !ae && !nQ && !sz && rg,
                isWorkConversation: rQ,
                mode: "conversation",
                mcpResponseCache: sU,
                moderationDisclaimersByMessageId: aD,
                streamingOrders: a_,
                pendingSubmission: null == rn || ae || sz || sG?.isEntering ? null : {
                    attachments: ri,
                    commentAttachments: rc,
                    prompt: rn,
                    renderMarkdown: ro,
                    selectedTextAttachments: rl
                },
                threadCurrentNode: sD,
                threadMapping: sL
            }), ny[70] = r7, ny[71] = r9, ny[72] = sO, ny[73] = rz, ny[74] = sD, ny[75] = sL, ny[76] = sH, ny[77] = nQ, ny[78] = ae, ny[79] = rg, ny[80] = rQ, ny[81] = aD, ny[82] = ri, ny[83] = rc, ny[84] = rn, ny[85] = ro, ny[86] = rl, ny[87] = sz, ny[88] = nY.get, ny[89] = sG?.isEntering, ny[90] = a_, ny[91] = aB, ny[92] = er) : er = ny[92], sG?.isEntering, ny[93] !== er ? (eo = er(), ny[93] = er, ny[94] = eo) : eo = ny[94];
            let {
                isConversationEmpty: sK,
                renderedConversation: s$,
                renderedTurns: sX,
                showPendingLoadingMessage: sV
            } = eo;
            ny[95] !== nZ || ny[96] !== rQ || ny[97] !== s$ || ny[98] !== nY ? (ei = () => {
                if (!nZ && rQ) return nY.set(ol.b, s$), () => {
                    nY.get(ol.b) === s$ && nY.set(ol.b, null)
                }
            }, el = [nZ, rQ, s$, nY], ny[95] = nZ, ny[96] = rQ, ny[97] = s$, ny[98] = nY, ny[99] = ei, ny[100] = el) : (ei = ny[99], el = ny[100]), (0, x.useEffect)(ei, el);
            let sQ = (0, g.x)(tX.g, nw),
                sZ = sV && null == sQ,
                sJ = !rQ && !ae && !nZ && !nQ,
                s0 = (0, g.x)(r9 || nZ || ae ? null : ee.a, nw),
                s1 = (s0?.length ?? 0) > 0,
                s2 = (0, g.x)(sJ ? et.b : null, nw),
                s3 = JSON.stringify([nw, nV]),
                s4 = (0, g.x)(ae || nZ ? null : s7, nw),
                [s5, s6] = (0, x.useState)(null),
                s9 = function(e, t) {
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
                    let d = null == n ? [] : (0, f.b)(n, ej.g),
                        u = null == e || e.visitKey !== c,
                        h = d.find(ej.g)?.id ?? (u || i ? null : e.userMessageId),
                        p = i ? null : d.findLast(eS)?.id ?? null,
                        g = !u && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != h && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== h),
                        m = new Set(u ? [] : e.observedSummaryRequestIds),
                        v = !u && !g && e.hasConsumedSummaryRequest,
                        b = !v && !u && null != e.conversation && (o || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != p && !m.has(p);
                    if (null != n && (u || null == e.conversation || !o))
                        for (let e of Object.values(n.mapping)) e?.message?.id != null && eS(e.message) && m.add(e.message.id);
                    else null != p && m.add(p);
                    return {
                        visitKey: c,
                        conversation: n,
                        completionAttemptId: a,
                        allowAutoOpen: r,
                        suppressAutoOpen: s,
                        isTurnActive: o,
                        isPendingUserTurn: i,
                        hasGoal: l,
                        observedSummaryRequestIds: m,
                        userMessageId: h,
                        hasConsumedSummaryRequest: v || null != p,
                        isOpen: s ? !u && e.suppressAutoOpen && e.isOpen : r && (l && (u || !e.hasGoal) || b) || !u && (!g || l) && (!e.hasGoal || l) && e.isOpen,
                        shouldPreventAutoFocus: u || g || l && !e.hasGoal || b && !e.isOpen || e.shouldPreventAutoFocus
                    }
                }(s5, {
                    completionAttemptId: s2,
                    allowAutoOpen: !(0, tt.a)("(width < 768px)"),
                    suppressAutoOpen: (s4 ?? !1) || rq,
                    conversation: sJ && (rT || !rA) ? s$ : null,
                    isTurnActive: rg,
                    hasGoal: s1,
                    isPendingUserTurn: rd && null != rn && !rg,
                    visitKey: s3
                });
            s9 !== s5 && s6(s9);
            let ot = null == nX && !s4 && !r9 && !nZ && !ae && (rL || sJ) && !nQ,
                on = ot && s$?.mapping === aI && s$?.current_node === ak,
                oa = (0, g.x)(on ? D.p : null, nw);
            ny[101] !== sJ || ny[102] !== rd || ny[103] !== ot || ny[104] !== rg || ny[105] !== rC || ny[106] !== ri || ny[107] !== s$ || ny[108] !== sX || ny[109] !== oa ? (ec = ot ? p()(() => (function(e) {
                var t;
                let n, a, {
                        automationReferences: r,
                        includePages: s = !1,
                        includeSources: o = !0,
                        messages: i,
                        pendingAttachments: l = [],
                        turns: c,
                        isTurnActive: d = c.at(-1)?.turn.status === "in_progress"
                    } = e,
                    u = (0, ns.e)(i),
                    h = [...u.inputs],
                    p = o ? (0, a1.a)(i, c) : [],
                    g = new Map,
                    m = new Map,
                    v = (t = i, -1 !== (n = aX()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, a4.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    b = [],
                    y = new Map(i.map(e => [(0, f.f)(e), e])),
                    x = aX()(i, e => "user" === e.author.role),
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
                    of c) {
                    if (o && "complete" === t.status)
                        for (let n of t.messageIds) {
                            let t = y.get(n);
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, a0.j)(t.metadata) && b.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, a0.c)(t.metadata)
                            })
                        }
                    for (let n of a5(t.items)) {
                        if (s && "mcp-tool-call" === n.type) {
                            let e = (0, aY.b)(n);
                            if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                let t = (0, aV.d)(e.url);
                                if (t?.kind === "page") {
                                    let n = m.get(t.id);
                                    m.set(t.id, {
                                        key: `page:${t.id}`,
                                        kind: "page",
                                        pageId: t.id,
                                        title: e.title ?? n?.title ?? null
                                    })
                                }
                            }
                        }
                        if (s && "assistant-message" === n.type && n.completed)
                            for (let e of (0, t6.c)(n.content)) m.has(e.id) || m.set(e.id, {
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
                let w = (0, aQ.c)(c.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return a5(t.items).filter(e => "mcp-tool-call" === e.type)
                })).at(-1);
                return a = null == w ? [...u.outputs, ...m.values(), ...g.values()] : [{
                    ...w,
                    key: `site:${w.projectId}`,
                    kind: "site"
                }, ...u.outputs.filter(e => null == w.archivePath || ! function(e, t) {
                    if (null != e.sandboxPath) return e.sandboxPath === t;
                    let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != n && e.name.toLowerCase() === n
                }(e, w.archivePath)), ...m.values(), ...g.values()], {
                    automationIds: (0, aJ.b)(i, r ?? void 0),
                    browserScreenshots: (0, a2.c)(i),
                    inputs: h,
                    sourceTurns: b,
                    outputs: a,
                    progressSteps: C,
                    isPlanSummaryUpdating: d && i.slice(x + 1).some(e => "assistant" === e.author.role && aJ.a.test(e.recipient ?? "") || "tool" === e.author.role && aJ.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${c.at(-1)?.id??""}:${d}`,
                    sources: o ? [...Array.from(new Map(i.filter(e => "user" === e.author.role).flatMap(e => (0, aZ.a)((0, f.d)(e))).map(e => [e.projectId, e])).values(), e => ({
                        kind: "site",
                        key: `site:${e.projectId}`,
                        projectId: e.projectId,
                        label: e.title
                    })), ...p.filter(e => "memory" === e.kind), ...new Map(c.flatMap(e => {
                        let {
                            turn: t
                        } = e;
                        return (t.skillSources ?? []).map(e => [e.key, e])
                    })).values(), ...u.pluginSources, ...p.filter(e => "web" === e.kind && "apps" === e.category), ...p.filter(e => "file-source" === e.kind), ...p.filter(e => "web" === e.kind && "apps" !== e.category)] : [],
                    subagents: (0, a3.a)(i, {
                        isTurnLive: c.at(-1)?.turn.status === "in_progress"
                    })?.subagents ?? []
                }
            })({
                automationReferences: oa,
                includePages: rC,
                includeSources: !sJ,
                isTurnActive: rg || rd,
                messages: null == s$ ? [] : (0, f.a)(s$),
                pendingAttachments: rd ? ri : [],
                turns: sX
            })) : null, ed = sJ ? ec?.() : null, ny[101] = sJ, ny[102] = rd, ny[103] = ot, ny[104] = rg, ny[105] = rC, ny[106] = ri, ny[107] = s$, ny[108] = sX, ny[109] = oa, ny[110] = ec, ny[111] = ed) : (ec = ny[110], ed = ny[111]);
            let or = ed,
                os = s1 || null != or && (or.outputs.length > 0 || or.progressSteps.length > 0 || or.automationIds.length > 0 || or.subagents.length > 0 || !aT && or.browserScreenshots.length > 0),
                oo = ot && (!sJ || os),
                om = oo && null == rB,
                of = JSON.stringify([s3, null != rB]),
                ov = sJ ? s9.isOpen : void 0,
                oj = oo && !rB?.isFullWidth;
            ny[112] !== r5 || ny[113] !== of || ny[114] !== ov || ny[115] !== oj ? (eu = {
                contentShiftResetKey: of,
                controlledIsOpen: ov,
                isEnabled: oj,
                floatingPanelWidth: r5
            }, ny[112] = r5, ny[113] = of, ny[114] = ov, ny[115] = oj, ny[116] = eu) : eu = ny[116];
            let oS = (0, tN.a)(eu),
                oT = aC ?? nw,
                oA = rL && null == a7,
                oP = aL ?? rp,
                oM = rS.isLoading && !rI,
                oE = rS.isError && !rT;
            ny[117] !== rS.error || ny[118] !== nZ ? (ep = nZ || (0, tW.e)(rS.error) || !(rS.error instanceof tW.a && [401, 403, 404].includes(rS.error.status)), ny[117] = rS.error, ny[118] = nZ, ny[119] = ep) : ep = ny[119];
            let ok = ep;
            ny[120] !== rS.error || ny[121] !== nw || ny[122] !== oE || ny[123] !== nZ || ny[124] !== nY || ny[125] !== nF ? (eg = () => {
                oE && !nZ && tp.a.loadFailed(nY, nw, nF, rS.error)
            }, em = [rS.error, nw, oE, nZ, nY, nF], ny[120] = rS.error, ny[121] = nw, ny[122] = oE, ny[123] = nZ, ny[124] = nY, ny[125] = nF, ny[126] = eg, ny[127] = em) : (eg = ny[126], em = ny[127]), (0, x.useEffect)(eg, em), ny[128] !== nw || ny[129] !== ae || ny[130] !== aC ? (ef = null, ae || (ef = aC ?? ((0, eY.e)(nw) ? null : nw)), ny[128] = nw, ny[129] = ae, ny[130] = aC, ny[131] = ef) : ef = ny[131], ny[132] !== am || ny[133] !== rk || ny[134] !== rz || ny[135] !== ab || ny[136] !== nN || ny[137] !== rQ || ny[138] !== rD || ny[139] !== ay || ny[140] !== ef || ny[141] !== nz || ny[142] !== nY || ny[143] !== nV ? (ev = (e, t) => {
                let n = void 0 !== t && t;
                if (null == ef || null != am || rD) return;
                let a = av.current?.signal;
                null == a || a.aborted || (ah({
                    messageId: e,
                    activation: nV
                }), (0, D.h)(nY, {
                    conversationId: ef,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, tU.a)(nY, "opened"), ay(null == nz ? (0, as.c)(t, {
                        isTemporaryChat: nN
                    }) : (0, I.C)(nz, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, tU.a)(nY, "failed"), ah(null), nY.get(es.h).danger(ab.formatMessage({
                        id: "chatgptConversations.branchFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot continue a conversation in a new chat"
                    }), {
                        errorAnalytics: {
                            toastId: "branch_conversation_failed",
                            operation: "branch_conversation",
                            errorCategory: "conversation",
                            conversationId: ef ?? void 0,
                            retryable: !0,
                            userFacingError: {
                                surface: (0, n6.b)(null == rz && null == rk ? null : rQ),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, ny[132] = am, ny[133] = rk, ny[134] = rz, ny[135] = ab, ny[136] = nN, ny[137] = rQ, ny[138] = rD, ny[139] = ay, ny[140] = ef, ny[141] = nz, ny[142] = nY, ny[143] = nV, ny[144] = ev) : ev = ny[144];
            let oR = (0, tD.a)(ev);
            ny[145] !== rk || ny[146] !== nw || ny[147] !== rz || ny[148] !== ab || ny[149] !== r6 || ny[150] !== nN || ny[151] !== rQ || ny[152] !== nY || ny[153] !== aC ? (eb = async (e, t, n, a) => {
                if (!r6) try {
                    await aP(nY, {
                        conversationId: nw,
                        isTemporaryChat: nN,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, n6.c)(t);
                    throw nY.get(es.h).danger(ab.formatMessage({
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
                            conversationId: aC ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, n6.b)(null == rz && null == rk ? null : rQ),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, ny[145] = rk, ny[146] = nw, ny[147] = rz, ny[148] = ab, ny[149] = r6, ny[150] = nN, ny[151] = rQ, ny[152] = nY, ny[153] = aC, ny[154] = eb) : eb = ny[154];
            let oO = (0, tD.a)(eb);
            ny[155] !== ao || ny[156] !== rk || ny[157] !== nw || ny[158] !== rz || ny[159] !== ab || ny[160] !== r6 || ny[161] !== nN || ny[162] !== rQ || ny[163] !== rD || ny[164] !== ay || ny[165] !== nK || ny[166] !== nY || ny[167] !== aC ? (ey = async (e, t) => {
                if (!r6 && !rD) try {
                    let n = nY.get(n8.d, nw);
                    if (n?.startsNewWorkConversation || null == nY.get(D.j, nw) || (0, tV.h)(nY.get(D.Q, nw)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, f.d)(n.prompt),
                            r = (0, e_.i)(n.prompt.metadata, a, (0, b.d)(n.prompt.metadata), (0, y.w)(a)),
                            s = (0, eT.a)(n.prompt, a, r),
                            o = nY.get(nC.r, ao),
                            i = "markdown" === s.renderFormat ? s.message : a,
                            l = o.length > 0 ? o : i,
                            c = o.length > 0 ? void 0 : s.renderFormat ?? "plain";
                        if (null != nK) return void await nK(l, c);
                        if (null == nY.get(D.j, nw) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, tv.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${nw}`;
                            (0, eB.E)(t, (t, n) => n ? t : e) || (0, nC.P)(nY, nw, e), (0, eB.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, v.a)((0, f.o)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, y.w)(a);
                            (0, eW.m)(nY, "work"), await ay("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: o.length > 0 ? o : t,
                                    prefillPromptFormat: o.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (rQ && !nN && (0, eL.$)(nY, (0, e8.a)({
                                entrypoint: "home"
                            }))) return void await ay("/");
                        let d = (0, f.i)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, aN.g)(nY, d);
                        (0, nC.Q)(nY, u, t.model);
                        let h = nY.get(D.O, nw);
                        (0, eW.m)(nY, rQ ? "work" : "chat"), await ay({
                            pathname: "/",
                            search: (0, as.d)("", nN)
                        }, {
                            state: {
                                initialChatGptConversationId: u,
                                project: null,
                                chatGptProjectId: (0, ar.a)(h) ? h : null,
                                chatGptCustomGptId: (0, ar.a)(h) ? null : h,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: rQ
                            }
                        });
                        return
                    }
                    await (0, n8.g)(nY, {
                        conversationId: nw,
                        isTemporaryChat: nN,
                        messageId: e,
                        retry: t
                    })
                } catch {
                    nY.get(es.h).danger(ab.formatMessage({
                        id: "chatgptConversations.regenerate.failed",
                        defaultMessage: "Failed to regenerate response",
                        description: "Error toast shown when generating another version of a ChatGPT response fails"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.regenerate.failed",
                            operation: "regenerate_response",
                            errorCategory: "conversation",
                            conversationId: aC ?? void 0,
                            userFacingError: {
                                surface: (0, n6.b)(null == rz && null == rk ? null : rQ),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, ny[155] = ao, ny[156] = rk, ny[157] = nw, ny[158] = rz, ny[159] = ab, ny[160] = r6, ny[161] = nN, ny[162] = rQ, ny[163] = rD, ny[164] = ay, ny[165] = nK, ny[166] = nY, ny[167] = aC, ny[168] = ey) : ey = ny[168];
            let oF = (0, tD.a)(ey);
            ny[169] !== rk || ny[170] !== nw || ny[171] !== aq || ny[172] !== ab || ny[173] !== af || ny[174] !== nN || ny[175] !== ay || ny[176] !== ax || ny[177] !== sm || ny[178] !== nY || ny[179] !== aC || ny[180] !== so || ny[181] !== nV ? (ex = () => {
                if (af || null == aC) return;
                let e = nY.get(G.s);
                if (!e && !nY.get(G.q) || !e && null == rk && null == so) return;
                let t = av.current?.signal;
                null == t || t.aborted || (ag(nV), (e ? (0, nh.f)(nY, {
                    chatGptThreadId: nw,
                    conversationTitle: aq
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, P.a)(nY, e);
                    if ("created" === e.status) return null == n || t.aborted || nY.get(es.h).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, P.a)(nY, e)
                }) : (0, T.a)({
                    scope: nY,
                    projectId: sm ?? void 0,
                    prompt: `Continuing from ${(0,eH.f)({conversationId:aC,title:aq?.trim()||"ChatGPT thread"})}`
                }).then(o_)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? ax(n) : ay((0, as.c)(n, {
                            isTemporaryChat: nN
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (ag(null), nY.get(es.h).danger(ab.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot hand off a conversation to a task"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, ny[169] = rk, ny[170] = nw, ny[171] = aq, ny[172] = ab, ny[173] = af, ny[174] = nN, ny[175] = ay, ny[176] = ax, ny[177] = sm, ny[178] = nY, ny[179] = aC, ny[180] = so, ny[181] = nV, ny[182] = ex) : ex = ny[182];
            let oG = ex;
            ny[183] !== nw || ny[184] !== ay || ny[185] !== nY || ny[186] !== aa || ny[187] !== nF || ny[188] !== n2 ? (eC = () => {
                if (null != n2) {
                    if ((0, eY.e)(nw)) {
                        let e = (0, sA.a)(nY, n2, nw);
                        null != e && ay((0, as.c)(e))
                    }
                    return
                }
                let e = nY.query.getData(nB.n, nF);
                null != e && null != nF && null != aa && ((0, D.jb)(nY, {
                    conversation: e,
                    conversationId: aa,
                    sharedConversationId: nF
                }), ay((0, as.c)(aa)))
            }, ny[183] = nw, ny[184] = ay, ny[185] = nY, ny[186] = aa, ny[187] = nF, ny[188] = n2, ny[189] = eC) : eC = ny[189];
            let oz = (0, tD.a)(eC);
            ny[190] !== nX ? (ew = nX?.mcpAppContext == null ? null : {
                hostId: t_.a,
                server: "codex_apps",
                connectorId: nX.mcpAppContext.id
            }, ny[190] = nX, ny[191] = ew) : ew = ny[191];
            let oL = (0, g.x)(tu.b, ew),
                oD = nX?.fullscreenContent != null ? "content" : "workspace",
                oB = (0, J.a)(nZ ? "embedded" : oD),
                oW = !oL && (rT || !rS.isError) && !nQ && !r4 && (null == n2 || nJ?.authMethod === "chatgpt") && (!ae || null != rk),
                oH = r4 || ss || sr || rD,
                oq = oH || sz || sG?.needsEntry === !0,
                oU = oW && !oH && !ae && !rA && !r6 && !rg && !rd && !ru && !sb,
                oK = !oW || ae || oq || rA ? null : ac;
            if (ny[192] !== sb || ny[193] !== am || ny[194] !== r7 || ny[195] !== r9 || ny[196] !== rk?.current_node || ny[197] !== nw || ny[198] !== sc || ny[199] !== oP || ny[200] !== oR || ny[201] !== oO || ny[202] !== oF || ny[203] !== nA || ny[204] !== nQ || ny[205] !== oq || ny[206] !== rA || ny[207] !== sj || ny[208] !== r4 || ny[209] !== ae || ny[210] !== rd || ny[211] !== nN || ny[212] !== rL || ny[213] !== rg || ny[214] !== rQ || ny[215] !== sr || ny[216] !== rD || ny[217] !== an || ny[218] !== ri || ny[219] !== ef || ny[220] !== s$ || ny[221] !== sX || ny[222] !== sz || ny[223] !== aW || ny[224] !== nY.get || ny[225] !== aH || ny[226] !== rM?.current_node || ny[227] !== n$ || ny[228] !== oW || ny[229] !== sZ || ny[230] !== a_ || ny[231] !== rm) {
                let e = (0, nW.c)({
                    paragen: an,
                    hideInitialUserMessage: nA,
                    browserConversationId: void 0,
                    conversationId: nw,
                    errorMessage: oP,
                    branchingMessageId: am,
                    isReadOnly: nQ || r4 || ae || null != n$,
                    isTemporaryChat: nN,
                    isWorkConversation: rL,
                    onRegenerateResponse: sb || ae || null != n$ || nQ || r4 || sr || rD || rg || rd ? void 0 : oF,
                    onEditUserMessage: sb || null == ef || rL || nQ || r4 || sr || !rm || rd ? void 0 : oO,
                    onFork: null == ef || nN || sr || rD || nQ || r4 ? void 0 : oR,
                    pendingSubmissionAttachments: ri,
                    shareEnabled: null == sc && !nN && !ae && !nQ && !r4 && !sj,
                    readAloudEnabled: !ae && !r4,
                    feedbackEnabled: !ae && !r4 && null == n$,
                    renderedTurns: sz || null == an || null == s$ ? sX : (0, nD.a)({
                        ...s$,
                        current_node: an.promptMessageId
                    }, {
                        clinicalSearchEnabled: r9,
                        clinicalCitationsEnabled: r7,
                        streamingOrders: a_,
                        isWorkConversation: rQ,
                        getRenderTelemetry: e => (0, oe.c)(nY.get, e)
                    }),
                    safetyReview: aW,
                    sharedConversationLastMessageId: rM?.current_node ?? aH ?? (ae ? rk?.current_node : null),
                    showPendingLoadingMessage: sZ,
                    showRequestUserInputStatus: oW && !oq && !rA
                });
                eA = sz ? (0, su.a)(e) : e, ny[192] = sb, ny[193] = am, ny[194] = r7, ny[195] = r9, ny[196] = rk?.current_node, ny[197] = nw, ny[198] = sc, ny[199] = oP, ny[200] = oR, ny[201] = oO, ny[202] = oF, ny[203] = nA, ny[204] = nQ, ny[205] = oq, ny[206] = rA, ny[207] = sj, ny[208] = r4, ny[209] = ae, ny[210] = rd, ny[211] = nN, ny[212] = rL, ny[213] = rg, ny[214] = rQ, ny[215] = sr, ny[216] = rD, ny[217] = an, ny[218] = ri, ny[219] = ef, ny[220] = s$, ny[221] = sX, ny[222] = sz, ny[223] = aW, ny[224] = nY.get, ny[225] = aH, ny[226] = rM?.current_node, ny[227] = n$, ny[228] = oW, ny[229] = sZ, ny[230] = a_, ny[231] = rm, ny[232] = eA
            } else eA = ny[232];
            let o$ = eA;
            ny[233] !== ab ? (eP = ab.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation",
                description: "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop"
            }), ny[233] = ab, ny[234] = eP) : eP = ny[234];
            let oX = eP;
            ny[235] !== aC ? (eM = (0, a.jsx)(tM.a, {
                threadId: aC
            }), ny[235] = aC, ny[236] = eM) : eM = ny[236], ny[237] !== nQ || ny[238] !== ae || ny[239] !== rR || ny[240] !== nY || ny[241] !== aC ? (eE = ae || nQ || null == aC ? void 0 : e => {
                (0, rN.R)({
                    scope: nY,
                    conversationId: aC,
                    previousTitle: rR,
                    title: e
                })
            }, ny[237] = nQ, ny[238] = ae, ny[239] = rR, ny[240] = nY, ny[241] = aC, ny[242] = eE) : eE = ny[242];
            let oV = a$ || null != rk ? rR ?? "" : null;
            ny[243] !== aq || ny[244] !== eE || ny[245] !== oV ? (ek = (0, a.jsx)(tO.a, {
                className: "max-w-[320px]",
                variant: "flush-start",
                onRename: eE,
                title: aq,
                titleValue: oV
            }), ny[243] = aq, ny[244] = eE, ny[245] = oV, ny[246] = ek) : ek = ny[246], ny[247] !== eM || ny[248] !== ek ? (eR = (0, a.jsxs)("span", {
                className: "flex min-w-0 items-center gap-1",
                children: [eM, ek]
            }), ny[247] = eM, ny[248] = ek, ny[249] = eR) : eR = ny[249];
            let oQ = eR,
                oZ = rQ || rV ? oQ : null;
            if (null != sc) {
                let e;
                ny[250] !== nw || ny[251] !== sc ? (e = (0, a.jsx)(aO.ChatGptGizmoHeader, {
                    conversationId: nw,
                    gizmoId: sc
                }), ny[250] = nw, ny[251] = sc, ny[252] = e) : e = ny[252], oZ = e
            } else null != rk || null != so || rI || (oZ = null);
            ny[253] !== nQ || ny[254] !== ae || ny[255] !== rL ? (eO = !rL || ae || nQ ? null : (0, a.jsx)(e9.a, {
                hostId: t_.a
            }), ny[253] = nQ, ny[254] = ae, ny[255] = rL, ny[256] = eO) : eO = ny[256];
            let oY = eO;
            ny[257] !== rQ || ny[258] !== sx || ny[259] !== sm ? (eN = null == sm || rQ ? null : (0, a.jsx)(rY, {
                allowsThreadContentOverlap: !0,
                project: sx
            }), ny[257] = rQ, ny[258] = sx, ny[259] = sm, ny[260] = eN) : eN = ny[260];
            let oJ = eN;
            ny[261] !== oJ || ny[262] !== oZ || ny[263] !== nw || ny[264] !== nH || ny[265] !== nQ || ny[266] !== oA || ny[267] !== ae || ny[268] !== nN || ny[269] !== oY || ny[270] !== sk || ny[271] !== sm || ny[272] !== sP || ny[273] !== sy ? (eF = sy ? (0, a.jsx)(rJ.a, {
                isTemporaryChat: nN,
                isCloudTask: oA && !ae && !nQ,
                breadcrumbHeader: nH ?? oJ,
                project: null == sm ? void 0 : {
                    icon: sk,
                    name: sP
                },
                start: nH ?? (ae ? oZ : (0, a.jsx)(tK.BusinessAgentConversationHeader, {
                    conversationId: nw,
                    fallback: oZ
                })),
                startActions: oY
            }) : null, ny[261] = oJ, ny[262] = oZ, ny[263] = nw, ny[264] = nH, ny[265] = nQ, ny[266] = oA, ny[267] = ae, ny[268] = nN, ny[269] = oY, ny[270] = sk, ny[271] = sm, ny[272] = sP, ny[273] = sy, ny[274] = eF) : eF = ny[274];
            let o0 = eF,
                o1 = sX.length > 0;
            ny[275] !== oU || ny[276] !== nw || ny[277] !== r6 || ny[278] !== sG ? (eG = null != sG ? (0, a.jsx)("div", {
                inert: r6,
                children: (0, a.jsx)(og, {
                    conversationId: nw,
                    placement: "progress",
                    canStartSection: oU
                })
            }) : null, ny[275] = oU, ny[276] = nw, ny[277] = r6, ny[278] = sG, ny[279] = eG) : eG = ny[279];
            let o2 = eG;
            ny[280] !== oE || ny[281] !== o1 || ny[282] !== nO ? (ez = () => {
                o1 ? nO?.("CHATGPT_LIGHTHOUSE_LIFECYCLE_STEP_PREVIEW_CONTENT_READY") : oE && nO?.("CHATGPT_LIGHTHOUSE_LIFECYCLE_STEP_PREVIEW_FAILED")
            }, ny[280] = oE, ny[281] = o1, ny[282] = nO, ny[283] = ez) : ez = ny[283];
            let o3 = (0, x.useEffectEvent)(ez);
            if (ny[284] !== o3 ? (eD = () => {
                    o3()
                }, ny[284] = o3, ny[285] = eD) : eD = ny[285], ny[286] !== oE || ny[287] !== o1 ? (eq = [o1, oE], ny[286] = oE, ny[287] = o1, ny[288] = eq) : eq = ny[288], (0, x.useEffect)(eD, eq), ny[289] !== rS || ny[290] !== nJ?.authMethod || ny[291] !== sb || ny[292] !== nU || ny[293] !== sn || ny[294] !== sg || ny[295] !== ok || ny[296] !== oU || ny[297] !== ao || ny[298] !== sv || ny[299] !== nL || ny[300] !== rk || ny[301] !== o0 || ny[302] !== nw || ny[303] !== oX || ny[304] !== rz || ny[305] !== aq || ny[306] !== s9 || ny[307] !== nT || ny[308] !== oP || ny[309] !== rB || ny[310] !== r5 || ny[311] !== ec || ny[312] !== si || ny[313] !== rP || ny[314] !== oG || ny[315] !== oz || ny[316] !== oE || ny[317] !== rI || ny[318] !== nS || ny[319] !== n9 || ny[320] !== ab || ny[321] !== nQ || ny[322] !== sJ || ny[323] !== oq || ny[324] !== sK || ny[325] !== rA || ny[326] !== oM || ny[327] !== ai || ny[328] !== af || ny[329] !== sw || ny[330] !== nZ || ny[331] !== s_ || ny[332] !== oL || ny[333] !== rw || ny[334] !== r6 || ny[335] !== r4 || ny[336] !== rX || !1 !== ny[337] || ny[338] !== ae || ny[339] !== ss || ny[340] !== ru || ny[341] !== rd || ny[342] !== nN || ny[343] !== rL || ny[344] !== rg || ny[345] !== rQ || ny[346] !== sa || ny[347] !== ry || ny[348] !== sr || ny[349] !== rD || ny[350] !== rG || ny[351] !== rW.pathname || ny[352] !== rj || ny[353] !== rH?.sidebarAutomationId || ny[354] !== nk || ny[355] !== nR || ny[356] !== rq || ny[357] !== nO || ny[358] !== sx || ny[359] !== sk || ny[360] !== sm || ny[361] !== sP || ny[362] !== sh || ny[363] !== s$ || ny[364] !== sX || ny[365] !== nG || ny[366] !== sz || ny[367] !== oB || ny[368] !== nY || ny[369] !== nM || ny[370] !== aM || ny[371] !== sG || ny[372] !== o2 || ny[373] !== aC || ny[374] !== s6 || ny[375] !== nF || ny[376] !== n2 || ny[377] !== rE || ny[378] !== n$ || ny[379] !== sN || ny[380] !== aT || ny[381] !== om || ny[382] !== oW || ny[383] !== sZ || ny[384] !== oK || ny[385] !== oT || ny[386] !== oS || ny[387] !== ak || ny[388] !== nP || ny[389] !== o$ || ny[390] !== nX) {
                tB = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, n, r, s, o, i, l, c, d, u, h, p, g, v = sX.flatMap(ow).flatMap(oC),
                        b = v.flatMap(ox);
                    if (!ae && (rS.error instanceof tW.a && 423 === rS.error.status || s_ && null == rj)) {
                        let e;
                        ny[414] !== rS || ny[415] !== nw || ny[416] !== nY ? (e = (0, a.jsx)(se.a, {
                            onUnlocked: () => {
                                (0, st.g)(nY.get(st.f)?.projectId, [nw]), rS.refetch()
                            }
                        }), ny[414] = rS, ny[415] = nw, ny[416] = nY, ny[417] = e) : e = ny[417], tB = e;
                        break e
                    }
                    if (null != sN) {
                        let e;
                        ny[418] !== sN ? (e = (0, a.jsx)(I.l, {
                            replace: !0,
                            to: sN
                        }), ny[418] = sN, ny[419] = e) : e = ny[419], tB = e;
                        break e
                    }
                    e$ = sl,
                    ny[420] !== rS.data || ny[421] !== rS.fetchStatus || ny[422] !== rk || ny[423] !== nw || ny[424] !== oE || ny[425] !== rI || ny[426] !== sK || ny[427] !== oM || !1 !== ny[428] || ny[429] !== sX.length ? (ts = null, ny[420] = rS.data, ny[421] = rS.fetchStatus, ny[422] = rk, ny[423] = nw, ny[424] = oE, ny[425] = rI, ny[426] = sK, ny[427] = oM, ny[428] = !1, ny[429] = sX.length, ny[430] = ts) : ts = ny[430],
                    to = !ae && !r4 && (0, ti.c)() ? (0, a.jsx)(td.b, {
                        callIds: b,
                        hostId: t_.a,
                        conversationId: (0, m.Me)(`chatgpt:${nw}`)
                    }) : null,
                    ny[431] !== aq || ny[432] !== nZ || ny[433] !== n2 || ny[434] !== nX?.documentTitle ? (ty = nZ ? null : (0, a.jsx)(e7.a, {
                        title: null == n2 ? nX?.documentTitle ?? aq : null
                    }), ny[431] = aq, ny[432] = nZ, ny[433] = n2, ny[434] = nX?.documentTitle, ny[435] = ty) : ty = ny[435],
                    ny[436] !== nw || ny[437] !== nZ || ny[438] !== r6 || ny[439] !== ae || ny[440] !== nN || ny[441] !== rQ || ny[442] !== o$ ? (tC = nZ || rQ ? null : (0, a.jsx)(rr.a, {
                        conversationId: nw,
                        canCopy: !r6,
                        paragenEnabled: !ae,
                        turns: o$,
                        loadHistory: !nN && !ae
                    }), ny[436] = nw, ny[437] = nZ, ny[438] = r6, ny[439] = ae, ny[440] = nN, ny[441] = rQ, ny[442] = o$, ny[443] = tC) : tC = ny[443];
                    let y = null != rk || rI;ny[444] !== oE || ny[445] !== rQ || ny[446] !== y ? (tS = (0, a.jsx)(tH.a, {
                        isWorkConversation: rQ,
                        hasConversationContent: y,
                        hasLoadError: oE
                    }), ny[444] = oE, ny[445] = rQ, ny[446] = y, ny[447] = tS) : tS = ny[447],
                    ny[448] !== rk || ny[449] !== nw || ny[450] !== oE || ny[451] !== rI || ny[452] !== oM || ny[453] !== nZ || ny[454] !== rW.pathname || ny[455] !== nY || ny[456] !== nF ? (tP = nZ || oM || oE || null == rk && !rI ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(sI, {
                            sharedConversationId: nF
                        }), (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(tg.a, {
                                onCommit: () => tp.a.contentCommitted(nY, nw, nF, rW.pathname),
                                onPaint: () => tp.a.contentVisible(nY, nw, nF)
                            }, nF ?? nw)
                        })]
                    }), ny[448] = rk, ny[449] = nw, ny[450] = oE, ny[451] = rI, ny[452] = oM, ny[453] = nZ, ny[454] = rW.pathname, ny[455] = nY, ny[456] = nF, ny[457] = tP) : tP = ny[457],
                    ny[458] !== nJ?.authMethod || ny[459] !== sg || ny[460] !== sv || ny[461] !== rk || ny[462] !== o0 || ny[463] !== nw || ny[464] !== rz || ny[465] !== aq || ny[466] !== s9 || ny[467] !== ec || ny[468] !== si || ny[469] !== oG || ny[470] !== nQ || ny[471] !== sJ || ny[472] !== af || ny[473] !== sw || ny[474] !== nZ || ny[475] !== s_ || ny[476] !== r4 || ny[477] !== ae || ny[478] !== nN || ny[479] !== rL || ny[480] !== rg || ny[481] !== rQ || ny[482] !== rH?.sidebarAutomationId || ny[483] !== rq || ny[484] !== sk || ny[485] !== sm || ny[486] !== sP || ny[487] !== sh || ny[488] !== s$ || ny[489] !== sX.length || ny[490] !== nY || ny[491] !== o2 || ny[492] !== aC || ny[493] !== s6 || ny[494] !== n$ || ny[495] !== aT || ny[496] !== om || ny[497] !== oK || ny[498] !== oT || ny[499] !== ak || ny[500] !== nX ? (tR = nZ || null != nX ? null : (0, a.jsxs)(rs.a, {
                        chatIcon: null == sm ? void 0 : sk,
                        conversationId: rL && !ae ? nw : null,
                        header: o0,
                        title: aq,
                        isArchivedPreview: nQ,
                        children: [null != o2 ? (0, a.jsx)(M.a.HeaderAction, {
                            actionId: "sectioned-conversation-navigation",
                            align: "center",
                            children: o2
                        }) : null, nJ?.authMethod === "chatgpt" ? (0, a.jsx)(te.s, {
                            productExperience: rQ ? "work" : "chat"
                        }) : null, ae ? (0, a.jsx)(sT.a, {
                            children: null == sh ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(sF, {
                                    data: sh
                                })
                            })
                        }) : null, ae || null != n$ || nQ || nN || aT ? null : (0, a.jsx)(rh, {
                            conversationId: nw,
                            scheduledAutomationId: rq ? rH?.sidebarAutomationId : void 0
                        }, nw), om ? (0, a.jsx)(aK, {
                            allowsThreadContentOverlap: !rQ,
                            composerActions: oK,
                            conversationId: oT,
                            controlledState: sJ ? {
                                isOpen: s9.isOpen,
                                shouldPreventAutoFocus: s9.shouldPreventAutoFocus,
                                onOpenChange: e => {
                                    s6({
                                        ...s9,
                                        isOpen: e,
                                        shouldPreventAutoFocus: !e && s9.shouldPreventAutoFocus
                                    })
                                }
                            } : void 0,
                            readData: !sJ || s9.isOpen ? ec : null,
                            showSources: !sJ,
                            shouldBlockExternalEgress: aT
                        }) : null, nN && !ae && !nQ && null == si && null == sv && null == sm && !sw && null != s$ && (0, f.a)(s$).some(oy) ? (0, a.jsx)(M.a.HeaderAction, {
                            actionId: "chatgpt-conversation-save",
                            align: "end",
                            order: 100,
                            children: (0, a.jsx)(sY, {
                                conversationId: nw
                            })
                        }) : null, nN || nQ || r4 ? null : (0, a.jsx)(rJ.b, {
                            allowsThreadContentOverlap: !rQ,
                            menu: ae || null == aC ? (0, a.jsx)(r$, {}) : (0, a.jsx)(rU, {
                                conversationId: nw,
                                title: aq,
                                isHandoffPending: af,
                                isArchived: rk?.is_archived === !0,
                                isChatConversation: null != rk && !rQ,
                                onHandoff: sg ? oG : void 0,
                                onOpenMessage: async e => {
                                    av.current?.signal.aborted === !1 && nY.get(A.a)?.pathname === nY.value.pathname && await al.current?.scrollToMessage(e)
                                },
                                projectId: sm,
                                projectName: sP,
                                serverConversationId: aC,
                                conversationOrigin: rz
                            }),
                            children: ae || s_ ? null : (0, a.jsx)(oN, {
                                conversationId: nw,
                                projectId: sm,
                                sharedProjectConversation: n$,
                                isReady: (null != aC || null != n$) && sX.length > 0 && (ak ?? rk?.current_node) != null,
                                isRestricted: aT || sw,
                                isStreaming: rg
                            })
                        })]
                    }), ny[458] = nJ?.authMethod, ny[459] = sg, ny[460] = sv, ny[461] = rk, ny[462] = o0, ny[463] = nw, ny[464] = rz, ny[465] = aq, ny[466] = s9, ny[467] = ec, ny[468] = si, ny[469] = oG, ny[470] = nQ, ny[471] = sJ, ny[472] = af, ny[473] = sw, ny[474] = nZ, ny[475] = s_, ny[476] = r4, ny[477] = ae, ny[478] = nN, ny[479] = rL, ny[480] = rg, ny[481] = rQ, ny[482] = rH?.sidebarAutomationId, ny[483] = rq, ny[484] = sk, ny[485] = sm, ny[486] = sP, ny[487] = sh, ny[488] = s$, ny[489] = sX.length, ny[490] = nY, ny[491] = o2, ny[492] = aC, ny[493] = s6, ny[494] = n$, ny[495] = aT, ny[496] = om, ny[497] = oK, ny[498] = oT, ny[499] = ak, ny[500] = nX, ny[501] = tR) : tR = ny[501],
                    tz = null,
                    eK = aR.a,
                    e3 = ao,
                    e4 = rz,
                    e6 = !oW || oB.isHidden || oq || sb || r6 || rA || nQ || r4 || ss || sr || rD || ru || rd,
                    tn = nN,
                    ta = sm,
                    tr = null != sv,
                    eU = tk.c,
                    eX = r5,
                    ny[502] !== nZ || ny[503] !== rX || ny[504] !== rQ || ny[505] !== o2 || ny[506] !== nX ? (eV = nZ || null != nX ? o2 : rX && (0, tF.a)() && !rQ && (0, a.jsx)("div", {
                        className: "h-px",
                        "aria-hidden": !0
                    }), ny[502] = nZ, ny[503] = rX, ny[504] = rQ, ny[505] = o2, ny[506] = nX, ny[507] = eV) : eV = ny[507],
                    eQ = nU;
                    let C = null == sG ? "flex h-full min-h-0 flex-col" : "h-full",
                        w = !ai && !nZ && !ae && !oL && !oB.isHidden,
                        _ = aT || sn,
                        j = rB?.isFullWidth === !0,
                        S = null == rB ? oS.contentShift : void 0,
                        T = sG?.selectedIndex;ny[508] !== oU || ny[509] !== nw || ny[510] !== sG ? (e = null != sG ? (0, a.jsx)(og, {
                        conversationId: nw,
                        placement: "composer",
                        canStartSection: oU
                    }) : void 0, ny[508] = oU, ny[509] = nw, ny[510] = sG, ny[511] = e) : e = ny[511],
                    ny[512] !== nw || ny[513] !== sG ? (t = null != sG ? (0, a.jsx)(op, {
                        conversationId: nw
                    }) : void 0, ny[512] = nw, ny[513] = sG, ny[514] = t) : t = ny[514];
                    let P = !rQ,
                        E = sz ? null : oP;ny[515] !== rS || ny[516] !== ok ? (n = ok ? () => {
                        rS.refetch({
                            cancelRefetch: !1
                        })
                    } : void 0, ny[515] = rS, ny[516] = ok, ny[517] = n) : n = ny[517];
                    let k = sX.length > 0;ny[518] !== ab || ny[519] !== sz ? (r = sz ? ab.formatMessage(su.c.readOnlyPlaceholder) : void 0, ny[518] = ab, ny[519] = sz, ny[520] = r) : r = ny[520];
                    let R = !sw && (null == sm || null != sx),
                        O = null == sG && !rG,
                        N = rS.isFetching,
                        F = !sz && rg;ny[521] !== rk?.is_archived || ny[522] !== nw || ny[523] !== nQ || ny[524] !== nZ || ny[525] !== ae || ny[526] !== nN || ny[527] !== rg || ny[528] !== rQ ? (s = nZ || !rQ || ae || nQ || rk?.is_archived === !0 || nN ? null : (0, a.jsx)(x.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(oh, {
                            conversationId: nw,
                            isTurnActive: rg
                        })
                    }), ny[521] = rk?.is_archived, ny[522] = nw, ny[523] = nQ, ny[524] = nZ, ny[525] = ae, ny[526] = nN, ny[527] = rg, ny[528] = rQ, ny[529] = s) : s = ny[529],
                    ny[530] !== nw || ny[531] !== nQ || ny[532] !== aC ? (o = nQ ? (0, a.jsx)(tj.a, {
                        conversationId: aC ?? nw,
                        kind: "chatgpt"
                    }, aC ?? nw) : void 0, ny[530] = nw, ny[531] = nQ, ny[532] = aC, ny[533] = o) : o = ny[533];
                    let G = !sz && sZ;ny[534] !== sv ? (i = null != sv ? (0, a.jsx)(r1.GptPluginMigrationBanner, {
                        gizmoId: sv
                    }) : null, ny[534] = sv, ny[535] = i) : i = ny[535],
                    ny[536] !== sg || ny[537] !== oG || ny[538] !== af || ny[539] !== sa || ny[540] !== ry ? (l = sa ? (0, a.jsx)(ra, {
                        canConvert: sg,
                        isChatInstantAvailable: !ry,
                        isConverting: af,
                        onConvert: oG
                    }) : null, ny[536] = sg, ny[537] = oG, ny[538] = af, ny[539] = sa, ny[540] = ry, ny[541] = l) : l = ny[541],
                    ny[542] !== rP || ny[543] !== r4 ? (c = rP.bind(null, r4), ny[542] = rP, ny[543] = r4, ny[544] = c) : c = ny[544],
                    ny[545] !== oz || ny[546] !== ae || ny[547] !== nR ? (d = e => {
                        nR?.(e), ae && oz()
                    }, ny[545] = oz, ny[546] = ae, ny[547] = nR, ny[548] = d) : d = ny[548],
                    ny[549] !== rS.isFetching || ny[550] !== sb || ny[551] !== ao || ny[552] !== nL || ny[553] !== nw || ny[554] !== oX || ny[555] !== nT || ny[556] !== oE || ny[557] !== nS || ny[558] !== n9 || ny[559] !== oq || ny[560] !== sK || ny[561] !== rA || ny[562] !== oM || ny[563] !== ai || ny[564] !== nZ || ny[565] !== ae || ny[566] !== nN || ny[567] !== rL || ny[568] !== nk || ny[569] !== nO || ny[570] !== nG || ny[571] !== nM || ny[572] !== aM || ny[573] !== nF || ny[574] !== rE || ny[575] !== oW || ny[576] !== R || ny[577] !== O || ny[578] !== F || ny[579] !== s || ny[580] !== o || ny[581] !== G || ny[582] !== i || ny[583] !== l || ny[584] !== c || ny[585] !== d || ny[586] !== w || ny[587] !== _ || ny[588] !== j || ny[589] !== S || ny[590] !== T || ny[591] !== e || ny[592] !== t || ny[593] !== P || ny[594] !== E || ny[595] !== n || ny[596] !== k || ny[597] !== r || ny[598] !== nP || ny[599] !== o$ || ny[600] !== nX ? (u = (0, a.jsx)(oI, {
                        ref: al,
                        trackReadState: w,
                        workspace: nX,
                        shouldBlockMcpApps: _,
                        isCoveredByFloatingPanel: j,
                        isFormOnly: ai,
                        isInlinePreview: nZ,
                        hideModelPicker: nS,
                        disableAutoFocus: nT,
                        transcriptPresentation: nP,
                        scrollOrigin: nM,
                        onBackgroundSubmitAccepted: nk,
                        previewLifecycle: nO,
                        composerRef: ad,
                        contentX: S,
                        conversationId: nw,
                        composerConversationId: ao,
                        sectionIndex: T,
                        composerLeadingContent: nL,
                        aboveComposerContent: e,
                        historyLoadingContent: t,
                        requiredSystemHints: nG,
                        isChatConversation: P,
                        conversationLoadingLabel: oX,
                        entries: o$,
                        errorMessage: E,
                        hasLoadError: oE,
                        onRetryLoad: n,
                        hasRenderableTurns: k,
                        isComposerDisabled: oq,
                        readOnlyPlaceholder: r,
                        moreDetailsEnabled: R,
                        isConversationEmpty: sK,
                        showEmptyState: O,
                        isConversationFetching: N,
                        isConversationLoading: oM,
                        isSharedConversation: ae,
                        isSubmitDisabled: rA,
                        isTemporaryChat: nN,
                        isTurnActive: F,
                        isWorkConversation: rL,
                        onboardingPrelude: s,
                        scrollStateConversationId: aM,
                        initialResponsePlacementKey: n9,
                        sharedConversationId: nF,
                        sharedPostRegulatedConnectorKind: rE,
                        showComposer: oW,
                        archivedPreviewFooter: o,
                        showPendingLoadingMessage: G,
                        gptPluginMigrationBanner: i,
                        awaitingGptContinuation: sb,
                        workOnlyConversionBanner: l,
                        onAddSelectedText: c,
                        onSubmitAccepted: d
                    }), ny[549] = rS.isFetching, ny[550] = sb, ny[551] = ao, ny[552] = nL, ny[553] = nw, ny[554] = oX, ny[555] = nT, ny[556] = oE, ny[557] = nS, ny[558] = n9, ny[559] = oq, ny[560] = sK, ny[561] = rA, ny[562] = oM, ny[563] = ai, ny[564] = nZ, ny[565] = ae, ny[566] = nN, ny[567] = rL, ny[568] = nk, ny[569] = nO, ny[570] = nG, ny[571] = nM, ny[572] = aM, ny[573] = nF, ny[574] = rE, ny[575] = oW, ny[576] = R, ny[577] = O, ny[578] = F, ny[579] = s, ny[580] = o, ny[581] = G, ny[582] = i, ny[583] = l, ny[584] = c, ny[585] = d, ny[586] = w, ny[587] = _, ny[588] = j, ny[589] = S, ny[590] = T, ny[591] = e, ny[592] = t, ny[593] = P, ny[594] = E, ny[595] = n, ny[596] = k, ny[597] = r, ny[598] = nP, ny[599] = o$, ny[600] = nX, ny[601] = u) : u = ny[601],
                    ny[602] !== s9 || ny[603] !== ec || ny[604] !== sJ || ny[605] !== aT || ny[606] !== om || ny[607] !== oK || ny[608] !== oT || ny[609] !== oS ? (h = om && null != ec && (!sJ || s9.isOpen) ? (0, a.jsx)(aU, {
                        composerActions: oK,
                        conversationId: oT,
                        readData: ec,
                        showSources: !sJ,
                        display: oS,
                        shouldBlockExternalEgress: aT
                    }) : null, ny[602] = s9, ny[603] = ec, ny[604] = sJ, ny[605] = aT, ny[606] = om, ny[607] = oK, ny[608] = oT, ny[609] = oS, ny[610] = h) : h = ny[610],
                    ny[611] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(aE.a, {}), ny[611] = p) : p = ny[611],
                    ny[612] !== nw || ny[613] !== nQ || ny[614] !== nZ || ny[615] !== r4 || ny[616] !== ae || ny[617] !== nN || ny[618] !== rL || ny[619] !== s$ || ny[620] !== aC ? (g = !nZ && m.lb.allowDebugMenu("prod") ? (0, a.jsx)(e2, {
                        conversation: s$,
                        conversationId: aC ?? nw,
                        diagnosticsConversationId: nw,
                        isSharedConversation: ae,
                        isTemporaryChat: nN,
                        isTppConversation: rL,
                        overrideConversationId: void 0
                    }, nw) : null, ny[612] = nw, ny[613] = nQ, ny[614] = nZ, ny[615] = r4, ny[616] = ae, ny[617] = nN, ny[618] = rL, ny[619] = s$, ny[620] = aC, ny[621] = g) : g = ny[621],
                    ny[622] !== r6 || ny[623] !== u || ny[624] !== h || ny[625] !== g || ny[626] !== C ? (eJ = (0, a.jsxs)("div", {
                        className: C,
                        inert: r6,
                        children: [u, h, p, g]
                    }), ny[622] = r6, ny[623] = u, ny[624] = h, ny[625] = g, ny[626] = C, ny[627] = eJ) : eJ = ny[627],
                    e1 = !ae && !r4 && (0, ti.c)() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(oi, {
                            conversationId: nw,
                            shouldBlockExternalEgress: aT || sn,
                            widgets: v.filter(ob)
                        }), (0, a.jsx)(tc.a, {
                            blockedWidgetSource: rw ? void 0 : "descriptor",
                            transcriptMcpAppIds: new Set(v.flatMap(e => "mcp-tool-call" === e.type ? rw ? e.callId : [] : "chatgpt-hosted-widget" === e.type ? (0, s8.e)(nw, e.messageId) : [])),
                            shouldBlockExternalEgress: aT || sn
                        })]
                    }) : null
                }
                ny[289] = rS, ny[290] = nJ?.authMethod, ny[291] = sb, ny[292] = nU, ny[293] = sn, ny[294] = sg, ny[295] = ok, ny[296] = oU, ny[297] = ao, ny[298] = sv, ny[299] = nL, ny[300] = rk, ny[301] = o0, ny[302] = nw, ny[303] = oX, ny[304] = rz, ny[305] = aq, ny[306] = s9, ny[307] = nT, ny[308] = oP, ny[309] = rB, ny[310] = r5, ny[311] = ec, ny[312] = si, ny[313] = rP, ny[314] = oG, ny[315] = oz, ny[316] = oE, ny[317] = rI, ny[318] = nS, ny[319] = n9, ny[320] = ab, ny[321] = nQ, ny[322] = sJ, ny[323] = oq, ny[324] = sK, ny[325] = rA, ny[326] = oM, ny[327] = ai, ny[328] = af, ny[329] = sw, ny[330] = nZ, ny[331] = s_, ny[332] = oL, ny[333] = rw, ny[334] = r6, ny[335] = r4, ny[336] = rX, ny[337] = !1, ny[338] = ae, ny[339] = ss, ny[340] = ru, ny[341] = rd, ny[342] = nN, ny[343] = rL, ny[344] = rg, ny[345] = rQ, ny[346] = sa, ny[347] = ry, ny[348] = sr, ny[349] = rD, ny[350] = rG, ny[351] = rW.pathname, ny[352] = rj, ny[353] = rH?.sidebarAutomationId, ny[354] = nk, ny[355] = nR, ny[356] = rq, ny[357] = nO, ny[358] = sx, ny[359] = sk, ny[360] = sm, ny[361] = sP, ny[362] = sh, ny[363] = s$, ny[364] = sX, ny[365] = nG, ny[366] = sz, ny[367] = oB, ny[368] = nY, ny[369] = nM, ny[370] = aM, ny[371] = sG, ny[372] = o2, ny[373] = aC, ny[374] = s6, ny[375] = nF, ny[376] = n2, ny[377] = rE, ny[378] = n$, ny[379] = sN, ny[380] = aT, ny[381] = om, ny[382] = oW, ny[383] = sZ, ny[384] = oK, ny[385] = oT, ny[386] = oS, ny[387] = ak, ny[388] = nP, ny[389] = o$, ny[390] = nX, ny[391] = eU, ny[392] = eK, ny[393] = e$, ny[394] = eX, ny[395] = eV, ny[396] = eQ, ny[397] = eJ, ny[398] = e1, ny[399] = e3, ny[400] = e4, ny[401] = e6, ny[402] = tn, ny[403] = ta, ny[404] = tr, ny[405] = ts, ny[406] = to, ny[407] = ty, ny[408] = tC, ny[409] = tS, ny[410] = tP, ny[411] = tR, ny[412] = tz, ny[413] = tB
            } else eU = ny[391], eK = ny[392], e$ = ny[393], eX = ny[394], eV = ny[395], eQ = ny[396], eJ = ny[397], e1 = ny[398], e3 = ny[399], e4 = ny[400], e6 = ny[401], tn = ny[402], ta = ny[403], tr = ny[404], ts = ny[405], to = ny[406], ty = ny[407], tC = ny[408], tS = ny[409], tP = ny[410], tR = ny[411], tz = ny[412], tB = ny[413];
            if (tB !== Symbol.for("react.early_return_sentinel")) return tB;
            ny[628] !== eU || ny[629] !== eX || ny[630] !== eV || ny[631] !== eQ || ny[632] !== eJ || ny[633] !== e1 ? (nu = (0, a.jsxs)(eU, {
                floatingPanelWidth: eX,
                header: eV,
                banner: eQ,
                children: [eJ, e1]
            }), ny[628] = eU, ny[629] = eX, ny[630] = eV, ny[631] = eQ, ny[632] = eJ, ny[633] = e1, ny[634] = nu) : nu = ny[634], ny[635] !== eK || ny[636] !== e3 || ny[637] !== e4 || ny[638] !== e6 || ny[639] !== tn || ny[640] !== ta || ny[641] !== tr || ny[642] !== nu ? (np = (0, a.jsx)(eK, {
                conversationId: e3,
                conversationOrigin: e4,
                disabled: e6,
                isTemporaryChat: tn,
                projectId: ta,
                requiresGizmoId: tr,
                children: nu
            }), ny[635] = eK, ny[636] = e3, ny[637] = e4, ny[638] = e6, ny[639] = tn, ny[640] = ta, ny[641] = tr, ny[642] = nu, ny[643] = np) : np = ny[643], ny[644] !== e$ || ny[645] !== ts || ny[646] !== to || ny[647] !== ty || ny[648] !== tC || ny[649] !== tS || ny[650] !== tP || ny[651] !== tR || ny[652] !== tz || ny[653] !== np ? (ng = (0, a.jsxs)(e$, {
                children: [ts, to, ty, tC, tS, tP, tR, tz, np]
            }), ny[644] = e$, ny[645] = ts, ny[646] = to, ny[647] = ty, ny[648] = tC, ny[649] = tS, ny[650] = tP, ny[651] = tR, ny[652] = tz, ny[653] = np, ny[654] = ng) : ng = ny[654];
            let o4 = ng,
                o5 = ae || !rS.isFetchedAfterMount || rS.isFetching || rT ? null : rS.error,
                o6 = oE ? rS.error : null,
                o7 = null == rz && null == rk ? null : rQ,
                o8 = !rQ && !oM;
            return ny[655] !== ac || ny[656] !== ao || ny[657] !== nF ? (nm = {
                conversationId: ao,
                composer: ac,
                sharedConversationId: nF
            }, ny[655] = ac, ny[656] = ao, ny[657] = nF, ny[658] = nm) : nm = ny[658], ny[659] !== o4 || ny[660] !== nm ? (nf = (0, a.jsx)(nx.a, {
                value: nm,
                children: o4
            }), ny[659] = o4, ny[660] = nm, ny[661] = nf) : nf = ny[661], ny[662] !== o8 || ny[663] !== nf ? (nv = (0, a.jsx)(j.a, {
                enabled: o8,
                children: nf
            }), ny[662] = o8, ny[663] = nf, ny[664] = nv) : nv = ny[664], ny[665] !== ok || ny[666] !== aC || ny[667] !== o5 || ny[668] !== o6 || ny[669] !== o7 || ny[670] !== nv ? (nb = (0, a.jsx)(en.a, {
                conversationId: aC,
                error: o5,
                loadError: o6,
                canRetry: ok,
                isWorkConversation: o7,
                children: nv
            }), ny[665] = ok, ny[666] = aC, ny[667] = o5, ny[668] = o6, ny[669] = o7, ny[670] = nv, ny[671] = nb) : nb = ny[671], nb
        }

        function ob(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function oy(e) {
            return "user" === e.author.role
        }

        function ox(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function oC(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function ow(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function o_(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }

        function oI(e) {
            let t, n, s, o, i, d, h, p, m, f, v, b, y, w, I, j, S, T, A, P, M, E, k, R, O, F = (0, r.c)(206),
                {
                    ref: G,
                    trackReadState: z,
                    composerRef: L,
                    workspace: W,
                    shouldBlockMcpApps: H,
                    contentX: q,
                    conversationId: K,
                    sectionIndex: $,
                    composerConversationId: X,
                    composerLeadingContent: V,
                    aboveComposerContent: Q,
                    historyLoadingContent: Z,
                    requiredSystemHints: Y,
                    isCoveredByFloatingPanel: ee,
                    isFormOnly: et,
                    isInlinePreview: en,
                    hideModelPicker: ea,
                    disableAutoFocus: er,
                    transcriptPresentation: es,
                    scrollOrigin: eo,
                    onBackgroundSubmitAccepted: ei,
                    previewLifecycle: el,
                    isChatConversation: ec,
                    conversationLoadingLabel: eu,
                    entries: eh,
                    errorMessage: ep,
                    hasLoadError: eg,
                    onRetryLoad: ev,
                    hasRenderableTurns: ex,
                    isComposerDisabled: eC,
                    readOnlyPlaceholder: ew,
                    moreDetailsEnabled: e_,
                    isConversationEmpty: eI,
                    showEmptyState: ej,
                    isConversationFetching: eS,
                    isConversationLoading: eT,
                    isSharedConversation: eA,
                    isSubmitDisabled: eP,
                    isTemporaryChat: eM,
                    isTurnActive: ek,
                    isWorkConversation: eR,
                    onboardingPrelude: eO,
                    scrollStateConversationId: eN,
                    initialResponsePlacementKey: ez,
                    sharedConversationId: eL,
                    sharedPostRegulatedConnectorKind: eD,
                    showComposer: eB,
                    archivedPreviewFooter: eW,
                    showPendingLoadingMessage: eH,
                    gptPluginMigrationBanner: eK,
                    awaitingGptContinuation: eZ,
                    workOnlyConversionBanner: eY,
                    onAddSelectedText: eJ,
                    onSubmitAccepted: e0
                } = e,
                e1 = void 0 === ej || ej,
                e2 = (0, g.z)(B.a),
                e3 = (0, g.x)(sA.c, (0, x.useContext)(N.a)),
                e4 = (0, g.A)(tx.a),
                e5 = (0, g.x)(tB.a, K),
                e6 = W?.fullscreenContent != null ? "content" : "workspace",
                e7 = (0, J.a)(en ? "embedded" : e6),
                e8 = (0, g.A)(r9.a),
                e9 = eB && e8?.source.turnContext.conversationId !== X,
                te = "floating" === e7.placement,
                tt = (0, g.A)(r6.h),
                ta = ec && null == eL && null == e3 && null == eW,
                tr = !eT && !ek && !eg && eI && !ex,
                ts = (0, g.x)(D.i, K),
                ti = e1 && ta && tr && null == ts && !e5 && !te,
                tl = e1 && !e5 && (!ta || !eI),
                tc = (0, x.useRef)(null),
                [td, tu] = (0, x.useState)(null),
                [th, tp] = (0, x.useState)(!1);
            F[0] !== eh || F[1] !== td ? (t = () => ({
                async scrollToMessage(e) {
                    let t = eh.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != td && await td.scrollToKey(t.turnKey, void 0, {
                        align: "top"
                    })
                }
            }), n = [eh, td], F[0] = eh, F[1] = td, F[2] = t, F[3] = n) : (t = F[2], n = F[3]), (0, x.useImperativeHandle)(G, t, n), F[4] !== eh ? (s = () => eh, F[4] = eh, F[5] = s) : s = F[5];
            let tg = (0, tD.a)(s);
            F[6] !== eh || F[7] !== td ? (o = async e => {
                let t = u()(eh, oT);
                if (null == t || e.aborted) return null;
                let n = null;
                return await td?.scrollToKey(t.turnKey, e => {
                    let t = e.querySelectorAll('[data-conversation-role="assistant"]');
                    return n = t.item(t.length - 1)
                }, {
                    align: "top",
                    signal: e
                }), n
            }, F[6] = eh, F[7] = td, F[8] = o) : o = F[8];
            let tm = o,
                [tf, tv] = (0, x.useState)(null);
            F[9] !== en || F[10] !== e2 || F[11] !== eN ? (i = () => en ? 0 : e2.get(nK.a, eN), F[9] = en, F[10] = e2, F[11] = eN, F[12] = i) : i = F[12];
            let [tb, tw] = (0, x.useState)(i);
            F[13] !== en || F[14] !== tf || F[15] !== e2 || F[16] !== eN ? (d = e => {
                en || e2.set(nK.a, eN, Math.max(0, e - (tf?.getHeightPx() ?? 0)))
            }, F[13] = en, F[14] = tf, F[15] = e2, F[16] = eN, F[17] = d) : d = F[17];
            let t_ = (0, tD.a)(d);
            F[18] !== eh || F[19] !== td ? (h = async (e, t) => {
                if (t?.signal?.aborted) return;
                if (null == td) throw Error("ChatGPT conversation search scroll requested before VirtualizedTurnList API was ready");
                let n = eh.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                });
                null == n || (await td.scrollToKey(n.turnKey), t?.signal?.aborted || await (0, eU.b)())
            }, F[18] = eh, F[19] = td, F[20] = h) : h = F[20];
            let tI = (0, tD.a)(h);
            F[21] === Symbol.for("react.memo_cache_sentinel") ? (p = e => tc.current?.querySelector(`[data-content-search-turn-key="${e}"]`) ?? null, F[21] = p) : p = F[21];
            let tj = (0, tD.a)(p);
            F[22] !== K || F[23] !== eh || F[24] !== td ? (m = async e => {
                let t = eh.find(t => {
                    let {
                        turn: n
                    } = t;
                    return n.messageIds.includes(e)
                });
                null != t && null != td && await td.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${K}-${e}`)}"]`), {
                    align: "center"
                })
            }, F[22] = K, F[23] = eh, F[24] = td, F[25] = m) : m = F[25];
            let tT = (0, tD.a)(m);
            F[26] !== tj || F[27] !== tI ? (f = {
                scrollToTurn: tI,
                getTurnContainer: tj
            }, F[26] = tj, F[27] = tI, F[28] = f) : f = F[28];
            let tA = f,
                tP = `chatgpt:${K}`;
            F[29] !== K || F[30] !== eM || F[31] !== e2 || F[32] !== eL || F[33] !== e3 ? (v = async e => {
                let t = e2.get(D.j, K);
                !eM && null == eL && null == e3 && null != t && e2.get(ef.b) > 0 && await (0, em.a)(e2, t, e)
            }, F[29] = K, F[30] = eM, F[31] = e2, F[32] = eL, F[33] = e3, F[34] = v) : v = F[34], F[35] !== tA || F[36] !== tg || F[37] !== tP || F[38] !== v ? (b = function(e) {
                let {
                    getTurns: t,
                    routeContextId: n,
                    scrollAdapter: a,
                    ensureHistory: r
                } = e, s = (0, nQ.a)({
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
                                        unitId: (0, nj.a)("user", t),
                                        text: n
                                    }]
                                }
                                if ("assistant-message" === e.type) {
                                    let n = (0, nY.a)(e.content, ed.b),
                                        a = [],
                                        r = "";
                                    for (; e.content.includes(r);) r += "";
                                    let s = (0, nV.a)(function e(t, n, a, r) {
                                            let s = "",
                                                o = 0;
                                            for (let i of t) {
                                                let t = n.indexOf(i.raw, o); - 1 !== t && (s += n.slice(o, t), s += function(t, n, a) {
                                                    var r, s;
                                                    if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                    if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                        if (e.name === ed.a) {
                                                            let n = (0, nJ.a)(e.attributes),
                                                                a = (0, nJ.b)(e.attributes),
                                                                r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, ed.l)(e) === a);
                                                            if (null == r) return "";
                                                            let s = (0, ed.i)(r);
                                                            return "hidden" === s || "block" === s ? "" : (0, ed.j)(r) ?? ""
                                                        }
                                                        return e.name === nX.a ? (0, nZ.a)(e.attributes, "label") ?? "" : e.name === nX.b || e.name === nX.c ? "" : e.name === n$.a ? e.text ?? "" : null
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
                                        unitId: (0, nj.a)("assistant", t),
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
                getTurns: tg,
                routeContextId: tP,
                scrollAdapter: tA,
                ensureHistory: v
            }), F[35] = tA, F[36] = tg, F[37] = tP, F[38] = v, F[39] = b) : b = F[39];
            let tM = b;
            F[40] !== tM.contextId ? (y = {
                containerRef: tc,
                contextId: tM.contextId
            }, F[40] = tM.contextId, F[41] = y) : y = F[41], (0, eV.a)(y);
            let tE = e9 && null == eW,
                tO = e4 && tE && !te,
                tN = (0, tn.a)();
            F[42] !== K || F[43] !== ex || F[44] !== ee || F[45] !== $ || F[46] !== tN ? (w = {
                conversationId: K,
                sectionIndex: $,
                hasRenderableTurns: ex,
                isCoveredByFloatingPanel: ee,
                shouldReduceMotion: tN,
                containerRef: tc
            }, F[42] = K, F[43] = ex, F[44] = ee, F[45] = $, F[46] = tN, F[47] = w) : w = F[47];
            let tF = function(e) {
                    let t, n, a, s = (0, r.c)(12),
                        {
                            conversationId: o,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, sh.a)(0);
                    s[0] !== o || s[1] !== i ? (t = {
                        conversationId: o,
                        sectionIndex: i
                    }, s[0] = o, s[1] = i, s[2] = t) : t = s[2];
                    let p = (0, x.useRef)(t);
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
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(sm) && 0 !== n.clientWidth && (s.disconnect(), h.set(a * n.clientWidth), e = (0, sp.a)(h, 0, {
                                    duration: .3,
                                    ease: sg.d
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
                    }, a = [o, i, l, d, c, h, u], s[3] = u, s[4] = o, s[5] = l, s[6] = c, s[7] = i, s[8] = h, s[9] = d, s[10] = n, s[11] = a) : (n = s[10], a = s[11]), (0, x.useLayoutEffect)(n, a), h
                }(w),
                tG = tE && te,
                [tz, tL] = (0, x.useState)(null),
                [tW, tH] = (0, x.useState)(null);
            F[48] !== eZ || F[49] !== K || F[50] !== ex || F[51] !== eM || F[52] !== eD || F[53] !== eB ? (I = eB && !eZ ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(eG.BrowserComposerDisclaimer, {
                    conversationId: K,
                    hasUserMessage: ex,
                    isTemporaryChat: eM,
                    regulatedConnectorKindOverride: eD
                })
            }) : void 0, F[48] = eZ, F[49] = K, F[50] = ex, F[51] = eM, F[52] = eD, F[53] = eB, F[54] = I) : I = F[54];
            let tq = I;
            F[55] !== K || F[56] !== ep || F[57] !== ex || F[58] !== eC || F[59] !== eP || F[60] !== eM || F[61] !== eR || F[62] !== eB || F[63] !== eH ? (j = ex ? null : (0, a.jsx)(nH.a, {
                conversationId: K,
                errorMessage: ep,
                isTemporaryChat: eM,
                isWorkConversation: eR,
                showPendingLoadingMessage: eH,
                showRequestUserInputStatus: eB && !eC && !eP
            }), F[55] = K, F[56] = ep, F[57] = ex, F[58] = eC, F[59] = eP, F[60] = eM, F[61] = eR, F[62] = eB, F[63] = eH, F[64] = j) : j = F[64];
            let tU = j;
            F[65] !== K || F[66] !== eR || F[67] !== eL || F[68] !== e3 ? (S = eR && null == eL && null == e3 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(eF, {
                    conversationId: K
                }, K)
            }) : null, F[65] = K, F[66] = eR, F[67] = eL, F[68] = e3, F[69] = S) : S = F[69];
            let tK = S;
            F[70] !== eW || F[71] !== tK ? (T = null != eW ? (0, a.jsxs)(a.Fragment, {
                children: [tK, eW]
            }) : null, F[70] = eW, F[71] = tK, F[72] = T) : T = F[72];
            let t$ = T;
            F[73] !== Q || F[74] !== t$ || F[75] !== eZ || F[76] !== X || F[77] !== V || F[78] !== L || F[79] !== K || F[80] !== er || F[81] !== tq || F[82] !== tU || F[83] !== eh || F[84] !== tK || F[85] !== tz || F[86] !== eK || F[87] !== eg || F[88] !== ex || F[89] !== ea || F[90] !== e4 || F[91] !== eC || F[92] !== eT || F[93] !== ee || F[94] !== et || F[95] !== te || F[96] !== tt || F[97] !== en || F[98] !== eA || F[99] !== eP || F[100] !== eM || F[101] !== eR || F[102] !== ei || F[103] !== e0 || F[104] !== el || F[105] !== ew || F[106] !== Y || F[107] !== tf || F[108] !== tm || F[109] !== e7.isHidden || F[110] !== eL || F[111] !== e3 || F[112] !== e9 || F[113] !== tG || F[114] !== tO || F[115] !== z || F[116] !== eY || F[117] !== W ? (A = t$ ?? (e9 ? (0, a.jsxs)(a7.a.Provider, {
                value: eh.at(-1) ?? null,
                children: [et || te ? null : (0, a.jsx)(eQ.a, {
                    onNavigate: tm
                }, K), te ? null : V, (0, a.jsx)(oP, {
                    requiredSystemHints: Y,
                    composerRef: L,
                    workspace: W,
                    isInlinePreview: en,
                    hideModelPicker: ea,
                    disableAutoFocus: er,
                    onBackgroundSubmitAccepted: ei,
                    previewLifecycle: el,
                    conversationId: X,
                    isImageEditComposer: tt,
                    disabled: eC,
                    readOnlyPlaceholder: ew,
                    awaitingGptContinuation: eZ,
                    headerContent: tK,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [Q, !eT && !eg && ex && !eZ && eY, e4 ? null : eK, tG && tU]
                    }),
                    isFullscreenComposer: te,
                    isHidden: e7.isHidden,
                    trackReadState: z && !ee,
                    isSharedConversation: eA,
                    isSubmitDisabled: eP,
                    followupPortalTarget: tz,
                    takeoverDisclaimerRef: tH,
                    showConversationFollowups: null == eL && null == e3 && !eM && !eR && !te,
                    isTemporaryChat: eM,
                    isWorkConversation: eR,
                    responseSpacerState: tf,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(at, {
                            entries: eh,
                            historyLoader: eM || null != eL || null != e3 ? null : (0, a.jsx)(sa.a, {
                                conversationId: K
                            }),
                            isVisible: t
                        })
                    },
                    showVoiceStage: !tO,
                    voiceDisclaimer: e4 && !tO ? tq : void 0,
                    onSubmitAccepted: e => {
                        tw(0), e0?.(e)
                    }
                }, `${X}:${tt?"image-edit":"chat"}`)]
            }) : tK), F[73] = Q, F[74] = t$, F[75] = eZ, F[76] = X, F[77] = V, F[78] = L, F[79] = K, F[80] = er, F[81] = tq, F[82] = tU, F[83] = eh, F[84] = tK, F[85] = tz, F[86] = eK, F[87] = eg, F[88] = ex, F[89] = ea, F[90] = e4, F[91] = eC, F[92] = eT, F[93] = ee, F[94] = et, F[95] = te, F[96] = tt, F[97] = en, F[98] = eA, F[99] = eP, F[100] = eM, F[101] = eR, F[102] = ei, F[103] = e0, F[104] = el, F[105] = ew, F[106] = Y, F[107] = tf, F[108] = tm, F[109] = e7.isHidden, F[110] = eL, F[111] = e3, F[112] = e9, F[113] = tG, F[114] = tO, F[115] = z, F[116] = eY, F[117] = W, F[118] = A) : A = F[118];
            let tX = A,
                tV = ee || void 0;
            if (F[119] !== K || F[120] !== ee || F[121] !== te || F[122] !== z ? (P = !z || te || ee ? null : (0, a.jsx)(a6.a, {
                    conversationId: K
                }), F[119] = K, F[120] = ee, F[121] = te, F[122] = z, F[123] = P) : P = F[123], F[124] !== eW || F[125] !== K || F[126] !== en || F[127] !== eL || F[128] !== e3 ? (M = en || null != eL || null != e3 || null != eW ? null : (0, a.jsx)(aG, {
                    conversationId: K
                }, K), F[124] = eW, F[125] = K, F[126] = en, F[127] = eL, F[128] = e3, F[129] = M) : M = F[129], F[130] !== K || F[131] !== eT || F[132] !== eM || F[133] !== eL || F[134] !== e3 ? (E = eT || eM || null != eL || null != e3 ? null : (0, a.jsx)(sr, {
                    conversationId: K
                }), F[130] = K, F[131] = eT, F[132] = eM, F[133] = eL, F[134] = e3, F[135] = E) : E = F[135], F[136] !== K || F[137] !== eh || F[138] !== th || F[139] !== eS || F[140] !== eT || F[141] !== en || F[142] !== tm || F[143] !== eL || F[144] !== e3 || F[145] !== td ? (k = en || eT || null != eL || null != e3 ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(U, {
                        conversationId: K,
                        entries: eh,
                        turnListApi: td
                    }), (0, a.jsx)(tS.a, {
                        ready: !eS && th && null != td && eh.length > 0,
                        onNavigate: tm
                    })]
                }), F[136] = K, F[137] = eh, F[138] = th, F[139] = eS, F[140] = eT, F[141] = en, F[142] = tm, F[143] = eL, F[144] = e3, F[145] = td, F[146] = k) : k = F[146], F[147] !== ti || F[148] !== q || F[149] !== ts || F[150] !== K || F[151] !== eu || F[152] !== tM || F[153] !== tq || F[154] !== tU || F[155] !== eh || F[156] !== tX || F[157] !== t_ || F[158] !== eg || F[159] !== ex || F[160] !== Z || F[161] !== ez || F[162] !== tb || F[163] !== e4 || F[164] !== e5 || F[165] !== eC || F[166] !== eS || F[167] !== eT || F[168] !== ee || F[169] !== et || F[170] !== te || F[171] !== en || F[172] !== eA || F[173] !== eM || F[174] !== ek || F[175] !== e_ || F[176] !== eJ || F[177] !== ev || F[178] !== eO || F[179] !== tf || F[180] !== e2 || F[181] !== eo || F[182] !== tT || F[183] !== tF || F[184] !== eL || F[185] !== e3 || F[186] !== H || F[187] !== tN || F[188] !== eB || F[189] !== e9 || F[190] !== tl || F[191] !== tG || F[192] !== tO || F[193] !== tW || F[194] !== es || F[195] !== td || F[196] !== W ? (R = W?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                    children: [!H && W.fullscreenContent, tX]
                }) : (0, a.jsxs)(tR.a, {
                    hideTranscript: et,
                    active: !eT && (!ex || null != td),
                    presentation: es ?? (en ? "compact" : "default"),
                    contentX: q,
                    composerFade: !1,
                    footerPlacement: ti ? "home" : "bottom",
                    initialOffset: tb,
                    scrollOrigin: eo,
                    onScroll: t_,
                    responseSpacer: tf,
                    scrollToBottomButton: !e9 || te || tO ? void 0 : {
                        isWorking: ek
                    },
                    threadEndContent: e4 ? void 0 : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            ref: tL,
                            className: tk.a
                        }), null == tW ? tq : (0, C.createPortal)(tq, tW)]
                    }),
                    footerLeadingContent: tO ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: tk.a,
                                children: (0, a.jsx)(ty.a, {})
                            })
                        }), (0, a.jsx)("div", {
                            className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                            children: tq
                        })]
                    }) : void 0,
                    footer: tX,
                    children: [en || eT || null != eL ? null : (0, a.jsx)(nL, {
                        conversationId: K,
                        entries: eh,
                        isConversationFetching: eS,
                        turnListApi: td
                    }), (0, a.jsxs)(c.a.div, {
                        ref: tc,
                        style: {
                            x: tF
                        },
                        "data-chatgpt-conversation-selection-target": K,
                        className: (0, l.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", en && "pt-5"),
                        "data-thread-find-target": "conversation",
                        onFocusCapture: () => {
                            (0, eX.K)(e2, "conversation")
                        },
                        onMouseDownCapture: () => {
                            (0, eX.K)(e2, "conversation")
                        },
                        children: [(0, a.jsxs)(x.Suspense, {
                            fallback: (0, a.jsx)(to.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            }),
                            children: [en || eT ? null : (0, a.jsx)(e$.a, {
                                conversationSource: tM
                            }), eM || null != eL || null != e3 ? null : Z ?? (0, a.jsx)(sa.a, {
                                conversationId: K
                            }), (0, a.jsx)(s9.b, {
                                conversationId: K
                            }), (null != eL || null != e3) && ex ? (0, a.jsx)(sD, {
                                sharedConversationId: eL
                            }) : null, null == eO ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)("div", {
                                    className: tk.a,
                                    children: eO
                                })
                            }), null == ts || eT ? null : (0, a.jsx)(nu.a, {
                                conversationId: K,
                                branchSource: {
                                    conversationId: ts.metadata.source_conversation_id,
                                    title: ts.metadata.source_conversation_title,
                                    gizmoId: ts.metadata.source_conversation_gizmo_id,
                                    ownerId: ts.metadata.source_conversation_owner_id
                                }
                            }), eg ? (0, a.jsx)(eE, {
                                isFetching: eS,
                                isSharedConversation: eA,
                                onRetry: ev
                            }) : eT ? (0, a.jsx)("div", {
                                "aria-busy": "true",
                                "aria-label": eu,
                                className: "relative min-h-0 flex-1",
                                role: "status",
                                children: (0, a.jsx)(to.LoadingPage, {
                                    debugName: "ChatGptConversationPage",
                                    fillParent: !0
                                })
                            }) : ex ? (0, a.jsxs)(r7.a, {
                                value: tT,
                                children: [en || ee ? null : (0, a.jsxs)(a.Fragment, {
                                    children: [eM || null != eL || null != e3 ? null : (0, a.jsx)(a.Fragment, {
                                        children: (0, a.jsx)(ey, {
                                            conversationId: K
                                        })
                                    }), (0, a.jsx)(eb, {
                                        entries: eh,
                                        TurnRowComponent: ae
                                    })]
                                }), (0, a.jsx)(ap, {
                                    conversationId: K,
                                    entries: eh,
                                    onApiChange: tu,
                                    onVisibleContentReady: () => tp(!0),
                                    responseSpacerState: tf
                                })]
                            }) : tl && null == ts && (0, a.jsx)("div", {
                                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                                children: (0, a.jsx)(_.a, {
                                    id: "chatgptConversations.emptyConversation",
                                    defaultMessage: "No renderable ChatGPT messages were found in this conversation",
                                    description: "Empty state when a ChatGPT conversation has no user or assistant text messages"
                                })
                            }), !tG && tU, eB && !eC ? (0, a.jsx)(sC, {
                                conversationId: K,
                                moreDetailsEnabled: e_,
                                onAddSelectedText: eJ
                            }) : null]
                        }), en ? null : (0, a.jsx)(nU.a, {
                            initialPlacementKey: ez,
                            isActiveVoiceConversation: e4 && e5,
                            isLoadingHistory: eT,
                            latestUserTurnKey: eh.findLast(oj)?.turnKey,
                            onResponseSpacerStateChange: tv
                        }), tO ? (0, a.jsx)(c.a.div, {
                            className: "pointer-events-none shrink-0",
                            "aria-hidden": !0,
                            initial: {
                                height: 0
                            },
                            animate: {
                                height: 112
                            },
                            transition: tN ? tC.c : tC.b
                        }) : null]
                    })]
                }), F[147] = ti, F[148] = q, F[149] = ts, F[150] = K, F[151] = eu, F[152] = tM, F[153] = tq, F[154] = tU, F[155] = eh, F[156] = tX, F[157] = t_, F[158] = eg, F[159] = ex, F[160] = Z, F[161] = ez, F[162] = tb, F[163] = e4, F[164] = e5, F[165] = eC, F[166] = eS, F[167] = eT, F[168] = ee, F[169] = et, F[170] = te, F[171] = en, F[172] = eA, F[173] = eM, F[174] = ek, F[175] = e_, F[176] = eJ, F[177] = ev, F[178] = eO, F[179] = tf, F[180] = e2, F[181] = eo, F[182] = tT, F[183] = tF, F[184] = eL, F[185] = e3, F[186] = H, F[187] = tN, F[188] = eB, F[189] = e9, F[190] = tl, F[191] = tG, F[192] = tO, F[193] = tW, F[194] = es, F[195] = td, F[196] = W, F[197] = R) : R = F[197], F[198] !== ee || F[199] !== tV || F[200] !== P || F[201] !== M || F[202] !== E || F[203] !== k || F[204] !== R) {
                let e = (0, a.jsxs)("div", {
                    className: "contents",
                    "aria-hidden": tV,
                    inert: ee,
                    children: [P, M, E, k, R]
                });
                O = (0, a.jsx)(eq.a, {
                    children: e
                }), F[198] = ee, F[199] = tV, F[200] = P, F[201] = M, F[202] = E, F[203] = k, F[204] = R, F[205] = O
            } else O = F[205];
            return O
        }

        function oj(e) {
            let {
                turn: t
            } = e;
            return t.items.some(oS)
        }

        function oS(e) {
            return "user-message" === e.type
        }

        function oT(e) {
            let {
                turn: t
            } = e;
            return t.items.some(oA)
        }

        function oA(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function oP(e) {
            let t, n, s, o = (0, r.c)(11),
                i = (0, x.useContext)(eD.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return o[0] !== e ? (t = (0, a.jsx)(oM, {
                    ...e
                }), o[0] = e, o[1] = t) : t = o[1], t
            }
            o[2] !== e.conversationId || o[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, o[2] = e.conversationId, o[3] = e.isImageEditComposer, o[4] = t) : t = o[4];
            let l = !e.isWorkConversation;
            return o[5] !== e ? (n = t => (0, a.jsx)(oM, {
                ...e,
                initialController: t
            }), o[5] = e, o[6] = n) : n = o[6], o[7] !== t || o[8] !== l || o[9] !== n ? (s = (0, a.jsx)(r5, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), o[7] = t, o[8] = l, o[9] = n, o[10] = s) : s = o[10], s
        }

        function oM(e) {
            let t, n, s, o, i, l, c, d, u, h, p, m, f, v, b, y, C, _, j, S = (0, r.c)(72);
            S[0] !== e ? ({
                composerRef: t,
                initialController: n,
                ...s
            } = e, S[0] = e, S[1] = t, S[2] = n, S[3] = s) : (t = S[1], n = S[2], s = S[3]);
            let T = (0, g.z)(B.a),
                A = (0, g.x)(O.b, s.isTemporaryChat),
                {
                    isFullscreenComposer: P
                } = s,
                M = (0, w.a)(),
                {
                    state: E
                } = (0, I.X)(),
                N = (0, g.x)(ou, s.conversationId),
                F = (0, g.x)(D.O, s.conversationId),
                G = (0, g.x)(t$.c, s.conversationId);
            S[4] !== G || S[5] !== s.isSharedConversation || S[6] !== s.isWorkConversation || S[7] !== F ? (o = !s.isSharedConversation && !s.isWorkConversation && !(0, ar.a)(F) && !G, S[4] = G, S[5] = s.isSharedConversation, S[6] = s.isWorkConversation, S[7] = F, S[8] = o) : o = S[8];
            let z = o,
                L = z && !s.disabled && !s.isSubmitDisabled && !s.isImageEditComposer,
                W = z ? N : void 0;
            S[9] !== s.conversationId || S[10] !== s.isImageEditComposer ? (i = s.isImageEditComposer ? {
                conversationId: s.conversationId,
                surface: "image-edit"
            } : s.conversationId, S[9] = s.conversationId, S[10] = s.isImageEditComposer, S[11] = i) : i = S[11];
            let H = i;
            S[12] !== H || S[13] !== n || S[14] !== s.conversationId ? (l = {
                composerController: n,
                conversationId: s.conversationId,
                draftKey: H
            }, S[12] = H, S[13] = n, S[14] = s.conversationId, S[15] = l) : l = S[15];
            let q = (0, ot.a)(l),
                U = (0, x.useContext)(eD.a),
                K = (0, x.useRef)(!1);
            S[16] !== H || S[17] !== U || S[18] !== n || S[19] !== s.isTemporaryChat || S[20] !== T ? (c = e => {
                null == e || null == n || K.current || (K.current = !0, (0, nC.P)(T, H, n.getPersistedText(), {
                    isTemporaryChat: s.isTemporaryChat
                }), U?.onAdopt())
            }, S[16] = H, S[17] = U, S[18] = n, S[19] = s.isTemporaryChat, S[20] = T, S[21] = c) : c = S[21];
            let $ = (0, tD.a)(c);
            S[22] !== $ || S[23] !== t ? (d = (0, tz.a)(t, $), S[22] = $, S[23] = t, S[24] = d) : d = S[24];
            let X = d,
                V = (0, x.useContext)(a7.a),
                Q = (0, g.x)(D.$, s.conversationId),
                J = (0, g.x)(D.X, s.conversationId),
                ee = (0, g.x)(nC.h, s.conversationId);
            S[25] !== J ? (u = (0, D.wb)(J), S[25] = J, S[26] = u) : u = S[26];
            let et = u,
                en = (0, g.A)(k.j.activeTab$);
            if (S[27] !== en || S[28] !== P || S[29] !== et || S[30] !== V) {
                let e = V?.turn.items.flatMap(oO);
                h = P && en?.tabType.kind === tr.a && "generatedImages" in en.props && null != en.props.generatedImages && !et && null != V && "in_progress" !== V.turn.status && !V.turn.hasPendingAssistantReply && !V.showPendingLoadingMessage && !e?.some(oR) && (null != V.errorMessage || e?.some(ok)) ? V.turn.messageIds.at(-1) ?? V.turnKey : null, S[27] = en, S[28] = P, S[29] = et, S[30] = V, S[31] = h
            } else h = S[31];
            let ea = h,
                er = (0, x.useRef)(null);
            S[32] !== ea || S[33] !== T ? (p = () => {
                null != ea && ea !== er.current && (er.current = ea, T.set(Y.a, "expanded"))
            }, m = [ea, T], S[32] = ea, S[33] = T, S[34] = p, S[35] = m) : (p = S[34], m = S[35]), (0, x.useEffect)(p, m);
            let es = (0, g.w)(sn.a, P ? s.conversationId : null);
            S[36] !== q || S[37] !== L || S[38] !== H || S[39] !== M || S[40] !== P || S[41] !== X || S[42] !== A || S[43] !== s || S[44] !== T || S[45] !== W || S[46] !== E?.libraryFileCreation ? (f = e => (0, a.jsxs)(ta.a, {
                children: [P && s.trackReadState && !e?.isHidden ? (0, a.jsx)(a6.a, {
                    conversationId: s.conversationId,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, s.aboveComposerContent, (0, a.jsx)(ez.a, {
                    children: (0, a.jsx)(np.a, {
                        ref: X,
                        headerContent: s.headerContent,
                        allowBackgroundSubmit: s.isInlinePreview,
                        disableAutoFocus: s.disableAutoFocus,
                        previewLifecycle: s.previewLifecycle,
                        conversationOrigin: null == s.workspace ? void 0 : "tpp",
                        mcpAppContext: s.workspace?.mcpAppContext,
                        onServerThreadIdChange: s.workspace?.onServerThreadIdChange,
                        followupPortalTarget: s.followupPortalTarget,
                        takeoverDisclaimerRef: s.takeoverDisclaimerRef,
                        showConversationFollowups: s.showConversationFollowups,
                        autoPrepare: !s.isSubmitDisabled && !s.isSharedConversation,
                        browserConversationId: (0, Z.getThreadBrowserConversationId)(T) ?? s.conversationId,
                        composerController: q,
                        conversationId: s.conversationId,
                        requiredSystemHints: s.requiredSystemHints,
                        hideSystemHints: null != s.requiredSystemHints,
                        draftKey: H,
                        onPromptChange: A,
                        selectedCustomGpt: W,
                        targetGizmoId: W?.id,
                        onCustomGptChange: L ? e => {
                            T.set(ou, s.conversationId, e)
                        } : void 0,
                        onCustomAgentSelected: L ? () => {
                            T.set(ou, s.conversationId, null)
                        } : void 0,
                        disableDraftPrepare: s.isSubmitDisabled || s.isSharedConversation,
                        disableSubmit: s.disabled || s.isSubmitDisabled,
                        voiceInputDisabled: s.disabled,
                        aboveComposerHeaderContent: s.voiceDisclaimer,
                        getExtraDeveloperInstructions: !s.isInlinePreview && E?.libraryFileCreation && !s.isTemporaryChat ? oE : void 0,
                        isTemporaryChat: s.isTemporaryChat,
                        placeholder: s.disabled ? s.readOnlyPlaceholder ?? M.formatMessage({
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
                        onSubmitAccepted: (t, n) => {
                            n?.navigation === "background" && s.onBackgroundSubmitAccepted?.(), e?.onSubmitStart(), s.responseSpacerState?.place(), s.onSubmitAccepted?.(t)
                        },
                        onSubmitError: s.responseSpacerState?.clear
                    })
                })]
            }), S[36] = q, S[37] = L, S[38] = H, S[39] = M, S[40] = P, S[41] = X, S[42] = A, S[43] = s, S[44] = T, S[45] = W, S[46] = E?.libraryFileCreation, S[47] = f) : f = S[47];
            let eo = f;
            S[48] !== T ? (v = () => {
                (0, eX.K)(T, "conversation")
            }, b = () => {
                (0, eX.K)(T, "conversation")
            }, S[48] = T, S[49] = v, S[50] = b) : (v = S[49], b = S[50]);
            let ei = !s.isInlinePreview && !s.disabled && !s.isSubmitDisabled;
            S[51] !== q || S[52] !== ei ? (y = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rt, {
                    composerController: q,
                    enabled: ei
                })
            }), S[51] = q, S[52] = ei, S[53] = y) : y = S[53];
            let el = P ? "floating" : "pane",
                ec = s.disabled || s.awaitingGptContinuation,
                ed = null == V && !et,
                eu = ee || et ? "loading" : "idle";
            return S[54] !== eu ? (C = {
                type: eu,
                unread: !1
            }, S[54] = eu, S[55] = C) : C = S[55], S[56] !== es || S[57] !== s.isHidden || S[58] !== s.renderTranscript || S[59] !== eo || S[60] !== el || S[61] !== ec || S[62] !== ed || S[63] !== C || S[64] !== Q ? (_ = (0, a.jsx)(R.a, {
                notifications: es,
                isHidden: s.isHidden,
                placement: el,
                forceExpanded: ec,
                composerOnly: ed,
                title: Q,
                statusState: C,
                renderTranscript: s.renderTranscript,
                children: eo
            }), S[56] = es, S[57] = s.isHidden, S[58] = s.renderTranscript, S[59] = eo, S[60] = el, S[61] = ec, S[62] = ed, S[63] = C, S[64] = Q, S[65] = _) : _ = S[65], S[66] !== s.conversationId || S[67] !== v || S[68] !== b || S[69] !== y || S[70] !== _ ? (j = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": s.conversationId,
                onMouseDownCapture: v,
                onFocusCapture: b,
                children: [y, _]
            }), S[66] = s.conversationId, S[67] = v, S[68] = b, S[69] = y, S[70] = _, S[71] = j) : j = S[71], j
        }
        async function oE() {
            return [ts.a]
        }

        function ok(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function oR(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function oO(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function oN(e) {
            let t, n, s, o, i, l, c, d, u, h, p, m = (0, r.c)(50),
                {
                    conversationId: f,
                    projectId: v,
                    sharedProjectConversation: b,
                    isReady: y,
                    isRestricted: x,
                    isStreaming: C
                } = e,
                I = void 0 === v ? null : v,
                j = (0, g.z)(eo.a),
                S = (0, w.a)(),
                T = (0, g.A)(F.d),
                A = (0, g.A)(null == I ? null : sc.a),
                P = (0, g.x)(D.j, f),
                {
                    data: M
                } = (0, g.x)(nB.chatGptConversationQueryById$, null == I ? null : P),
                E = (0, g.x)(nr.a, null == I ? null : P),
                k = (0, g.x)(D.z, E);
            m[0] !== E || m[1] !== M || m[2] !== k || m[3] !== I || m[4] !== P ? (t = null == M && null != E && null != P ? {
                id: P,
                gizmo_id: I,
                is_temporary_chat: k
            } : void 0, m[0] = E, m[1] = M, m[2] = k, m[3] = I, m[4] = P, m[5] = t) : t = m[5];
            let R = t,
                {
                    data: O
                } = (0, g.x)(eI.b, I),
                N = null == I ? null : (0, sc.b)(A ?? null, b ?? M ?? R, O),
                G = (0, g.x)(n0.b, f);
            m[6] !== S ? (n = S.formatMessage(nv.a.headerShare), m[6] = S, m[7] = n) : n = m[7];
            let z = n,
                L = (0, g.x)(null == b ? n0.a : null, f),
                B = null != b || null != L,
                W = null;
            if (x || N?.type === "unavailable") {
                let e;
                m[8] !== S ? (e = S.formatMessage(nv.a.shareDisabledRestricted), m[8] = S, m[9] = e) : e = m[9], W = e
            } else if (C && !B) {
                let e;
                m[10] !== S ? (e = S.formatMessage(nv.a.shareDisabledStreaming), m[10] = S, m[11] = e) : e = m[11], W = e
            } else if (!y || !B) {
                let e;
                m[12] !== S ? (e = S.formatMessage(nv.a.shareDisabledNotReady), m[12] = S, m[13] = e) : e = m[13], W = e
            }
            let H = null != W || G;
            m[14] !== H ? (s = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: H
            }, m[14] = H, m[15] = s) : s = m[15];
            let q = (0, g.x)(tP.b, s),
                U = "loaded" === T.status && "personal" === T.structure && (null == N || "snapshot" === N.type),
                K = null != W || G;
            m[16] !== K ? (o = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: K
            }, m[16] = K, m[17] = o) : o = m[17];
            let $ = (0, g.x)(U ? tP.b : null, o);
            m[18] !== f || m[19] !== R || m[20] !== I || m[21] !== j || m[22] !== b ? (i = () => {
                let e = null == b ? j.get(n0.c, f) : {
                    serverConversationId: b.conversation_id,
                    title: b.title,
                    currentNodeId: b.current_node ?? void 0
                };
                null != e && (0, sd.shareChatGptProjectConversation)(j, e.serverConversationId, e.title ?? "", I, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", b ?? R)
            }, m[18] = f, m[19] = R, m[20] = I, m[21] = j, m[22] = b, m[23] = i) : i = m[23];
            let X = i,
                V = z;
            if ("loaded" === T.status && (null == N || "snapshot" === N.type)) {
                let e;
                m[24] !== T.structure || m[25] !== S ? (e = S.formatMessage("workspace" === T.structure ? nv.a.shareWorkspaceTooltip : nv.a.sharePublicTooltip), m[24] = T.structure, m[25] = S, m[26] = e) : e = m[26], V = e
            }
            let Q = null == W && !G && !0 === $,
                Z = W ?? V,
                Y = null != W || G;
            return m[27] !== G || m[28] !== q ? (l = !G && (q ? (0, a.jsx)(e4.M, {}) : (0, a.jsx)(e4.L, {})), m[27] = G, m[28] = q, m[29] = l) : l = m[29], m[30] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(_.a, {
                ...nv.a.headerShare
            }), m[30] = c) : c = m[30], m[31] !== X || m[32] !== G || m[33] !== z || m[34] !== Y || m[35] !== l ? (d = (0, a.jsxs)(eA.a, {
                "aria-label": z,
                color: "toolbar",
                disabled: Y,
                loading: G,
                radius: "large",
                size: "toolbar",
                onClick: X,
                children: [l, c]
            }), m[31] = X, m[32] = G, m[33] = z, m[34] = Y, m[35] = l, m[36] = d) : d = m[36], m[37] !== Z || m[38] !== d || m[39] !== Q ? (u = (0, a.jsx)(e6.a, {
                cloneCustomTrigger: !0,
                disabled: Q,
                tooltipContent: Z,
                children: d
            }), m[37] = Z, m[38] = d, m[39] = Q, m[40] = u) : u = m[40], m[41] !== f || m[42] !== G || m[43] !== I || m[44] !== W || m[45] !== b ? (h = !1, m[41] = f, m[42] = G, m[43] = I, m[44] = W, m[45] = b, m[46] = h) : h = m[46], m[47] !== u || m[48] !== h ? (p = (0, a.jsxs)(a.Fragment, {
                children: [u, h]
            }), m[47] = u, m[48] = h, m[49] = p) : p = m[49], p
        }
    }),
    Ppn: (function(e, t, n) {
        var a = n("A"),
            r = n("Qo"),
            s = n("zd"),
            o = n("hZa"),
            i = n("Ho4"),
            l = n("KFm"),
            c = n("lsf"),
            d = n("bI");

        function u(e) {
            let t, n, u, h, p, g, m, f, v, b, y, x, C, w = (0, r.c)(45),
                {
                    initialPlacementKey: _,
                    isActiveVoiceConversation: I,
                    isLoadingHistory: j,
                    latestUserTurnKey: S,
                    onResponseSpacerStateChange: T
                } = e,
                A = void 0 !== I && I,
                P = void 0 !== j && j,
                M = (0, o.k)();
            w[0] !== A || w[1] !== M ? (t = A && (0, o.f)(M, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), w[0] = A, w[1] = M, w[2] = t) : t = w[2];
            let E = t,
                k = (0, s.useRef)(S),
                R = (0, s.useRef)(P),
                O = (0, s.useRef)(null),
                N = (0, s.useRef)(null),
                F = (0, c.b)();
            w[3] !== F ? (n = () => new l.a(F), w[3] = F, w[4] = n) : n = w[4];
            let [G] = (0, s.useState)(n), {
                clear: z,
                consumeGrowth: L,
                getHeightPx: D,
                place: B,
                prepareThreadEndContent: W
            } = G, {
                addScrollListener: H,
                getScrollElement: q
            } = F;
            w[5] !== z || w[6] !== F ? (u = () => {
                z(), F.scrollToBottom()
            }, w[5] = z, w[6] = F, w[7] = u) : u = w[7];
            let U = (0, d.a)(u);
            w[8] === Symbol.for("react.memo_cache_sentinel") ? (h = (e, t) => {
                O.current = {
                    turnKey: e,
                    element: t
                }, N.current?.(e, t)
            }, w[8] = h) : h = w[8];
            let K = (0, d.a)(h);
            w[9] === Symbol.for("react.memo_cache_sentinel") ? (p = e => {
                N.current = e;
                let t = O.current;
                return null != t && e(t.turnKey, t.element), () => {
                    N.current = null
                }
            }, w[9] = p) : p = w[9];
            let $ = (0, d.a)(p);
            w[10] !== q || w[11] !== S || w[12] !== B || w[13] !== E ? (g = () => {
                let e = q();
                if (null == e || 0 === e.clientHeight) return !1;
                if (E && null != S) {
                    var t, n;
                    let a, r = (t = e, n = S, a = t.querySelector(`[data-turn-key="${CSS.escape(n)}"]`), a?.querySelector("[data-user-message-bubble]") ?? a);
                    if (null == r) return !1;
                    B(r)
                } else B();
                return !0
            }, w[10] = q, w[11] = S, w[12] = B, w[13] = E, w[14] = g) : g = w[14];
            let X = (0, s.useEffectEvent)(g);
            return w[15] !== z || w[16] !== L || w[17] !== D || w[18] !== T || w[19] !== K || w[20] !== B || w[21] !== W || w[22] !== U || w[23] !== E ? (f = () => (T({
                voiceAutoScrollEnabled: E,
                clear: z,
                consumeGrowth: L,
                getHeightPx: D,
                onTurnLayoutReady: K,
                place: B,
                prepareThreadEndContent: W,
                scrollToBottom: U
            }), () => {
                T(null)
            }), m = [z, L, D, T, K, B, W, U, E], w[15] = z, w[16] = L, w[17] = D, w[18] = T, w[19] = K, w[20] = B, w[21] = W, w[22] = U, w[23] = E, w[24] = m, w[25] = f) : (m = w[24], f = w[25]), (0, s.useLayoutEffect)(f, m), w[26] !== q || w[27] !== P || w[28] !== S || w[29] !== B || w[30] !== $ || w[31] !== E ? (v = () => {
                let e = k.current,
                    t = R.current;
                if (k.current = S, R.current = P, E && !P && !t && null != S && S !== e) return function(e, t, n, a) {
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
                }(S, q, B, $)
            }, b = [q, P, S, B, $, E], w[26] = q, w[27] = P, w[28] = S, w[29] = B, w[30] = $, w[31] = E, w[32] = v, w[33] = b) : (v = w[32], b = w[33]), (0, s.useLayoutEffect)(v, b), w[34] !== H || w[35] !== q || w[36] !== _ || w[37] !== X ? (y = () => {
                if (null == _) return;
                let e = !1;
                return H(() => {
                    e || null == q() || (e = !0, e = X())
                })
            }, w[34] = H, w[35] = q, w[36] = _, w[37] = X, w[38] = y) : y = w[38], w[39] !== H || w[40] !== q || w[41] !== _ ? (x = [H, q, _], w[39] = H, w[40] = q, w[41] = _, w[42] = x) : x = w[42], (0, s.useLayoutEffect)(y, x), w[43] !== G ? (C = (0, a.jsx)(i.a, {
                controller: G
            }), w[43] = G, w[44] = C) : C = w[44], C
        }
        n.d(t, {
            a: () => u
        })
    }),
    xtk: (function(e, t, n) {
        var a = n("A"),
            r = n("Qo"),
            s = n("Xnl"),
            o = n("zd"),
            i = n("Q2"),
            l = n("tSE"),
            c = n("JC"),
            d = n("q54");

        function u() {
            let e, t, n, u = (0, r.c)(6),
                h = (0, s.z)(l.a),
                p = (0, s.A)(c.d),
                g = (0, o.useContext)(i.a);
            return u[0] !== h ? (e = () => (h.set(c.e, !0), () => {
                h.set(c.e, !1), (0, c.a)(h)
            }), t = [h], u[0] = h, u[1] = e, u[2] = t) : (e = u[1], t = u[2]), (0, o.useLayoutEffect)(e, t), u[3] !== g || u[4] !== p ? (n = null == p ? null : (0, a.jsx)(a.Fragment, {
                children: [p, ...null == p.overlay ? [] : [p.overlay]].map(e => (0, a.jsx)(d.a.Root, {
                    animateOnMount: e.animateOnMount ?? !0,
                    fillHeight: !0,
                    fullWidth: e.isFullWidth,
                    fullWidthTransition: e.fullWidthTransition,
                    isPIPObstacle: !1,
                    portalContainer: g,
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
            }), u[3] = g, u[4] = p, u[5] = n) : n = u[5], n
        }
        n.d(t, {
            a: () => u
        })
    }),
    V0P: (function(e, t, n) {
        let a = null;

        function r(e) {
            a = e
        }

        function s() {
            if (null == a) throw Error("ChatGPT entity side panel tab was not registered");
            return a()
        }
        n.d(t, {
            a: () => s,
            b: () => r
        })
    }),
    aEn: (function(e, t, n) {
        n.d(t, {
            ChatGptGizmoHeader: () => F
        });
        var a = n("A"),
            r = n("Qo"),
            s = n("wtC"),
            o = n("Xnl"),
            i = n("zd"),
            l = n("Wf"),
            c = n("oy"),
            d = n("HZ"),
            u = n("Csl"),
            h = n("kph"),
            p = n("ygO"),
            g = n("bq"),
            m = n("Ot7"),
            f = n("bf"),
            v = n("Bb"),
            b = n("X6V"),
            y = n("SGs"),
            x = n("Cq"),
            C = n("H9"),
            w = n("dkU"),
            _ = e => (0, a.jsxs)("svg", {
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
            I = n("yG"),
            j = n("gB"),
            S = n("OW"),
            T = n("hZa"),
            A = n("JY"),
            P = n("wwv"),
            M = n("H7N"),
            E = n("vz"),
            k = n("jA"),
            R = n("vH"),
            O = n("fex");
        let N = (0, v.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(480171), n.e(716164), n.e(345986)]).then(n.bind(n, "eZl"))).GptHeaderAboutDialog);

        function F(e) {
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
            } = (0, o.x)(P.b, t);
            if (null == h) return null;
            c[3] !== h.gizmo.display.name ? (n = h.gizmo.display.name.trim(), c[3] = h.gizmo.display.name, c[4] = n) : n = c[4];
            let p = n;
            return c[5] !== p ? (s = p ? (0, a.jsx)("span", {
                className: "truncate",
                children: p
            }) : null, c[5] = p, c[6] = s) : s = c[6], c[7] !== h ? (i = (0, a.jsx)(G, {
                gizmo: h
            }), c[7] = h, c[8] = i) : i = c[8], c[9] !== s || c[10] !== i ? (l = (0, a.jsxs)("div", {
                className: "flex min-w-0 items-center gap-1 select-none",
                children: [s, i]
            }), c[9] = s, c[10] = i, c[11] = l) : l = c[11], l
        }

        function G(e) {
            let t, n, v, F, G, z, L, D, B, W, H, q, U, K, $, X, V, Q, Z, Y, J = (0, r.c)(59),
                {
                    gizmo: ee
                } = e,
                et = (0, o.z)(S.a),
                en = (0, l.a)(),
                {
                    search: ea
                } = (0, d.X)(),
                er = (0, d.Z)(),
                [es, eo] = (0, i.useState)(!1),
                ei = (0, T.h)("2160578039"),
                el = (0, o.x)(A.a, "2513446768"),
                ec = ei && "gpt" === ee.gizmo.gizmo_type && null != ee.gizmo.migrated_plugin_id;
            J[0] !== el ? (t = el?.get("disable_gpt_updates", !1), J[0] = el, J[1] = t) : t = J[1];
            let ed = t,
                eu = ee.gizmo.current_user_permission?.can_write && !ec && !ed,
                {
                    data: eh
                } = (0, o.A)(P.c);
            J[2] !== ee.gizmo.id || J[3] !== eh ? (n = eh?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === ee.gizmo.id
            }), J[2] = ee.gizmo.id, J[3] = eh, J[4] = n) : n = J[4];
            let ep = n,
                eg = eu || ec || ed ? `https://chatgpt.com/gpts/editor/${encodeURIComponent(ee.gizmo.id)}` : `https://chatgpt.com/g/${encodeURIComponent(ee.gizmo.id)}/view`;
            J[5] !== ee.gizmo.id || J[6] !== ee.gizmo.short_url ? (v = ee.gizmo.short_url?.trim() || ee.gizmo.id, J[5] = ee.gizmo.id, J[6] = ee.gizmo.short_url, J[7] = v) : v = J[7], J[8] !== v ? (F = (0, E.c)(v), J[8] = v, J[9] = F) : F = J[9], J[10] !== ea ? (G = (0, k.d)("", (0, k.e)(ea)), J[10] = ea, J[11] = G) : G = J[11];
            let em = `${F}${G}`;
            J[12] !== en ? (z = en.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions",
                description: "Accessible label for the compact overflow menu containing actions for the current custom GPT in Codex Desktop"
            }), J[12] = en, J[13] = z) : z = J[13];
            let ef = z;
            J[14] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, a.jsx)(w.a, {
                className: "icon-sm"
            }), J[14] = L) : L = J[14], J[15] !== ef ? (D = (0, a.jsx)(p.a, {
                "aria-label": ef,
                color: "ghost",
                size: "icon",
                children: L
            }), J[15] = ef, J[16] = D) : D = J[16], J[17] !== ef || J[18] !== es || J[19] !== D ? (B = (0, a.jsx)(x.a, {
                cloneCustomTrigger: !0,
                tooltipContent: ef,
                triggerPopupOpen: es,
                children: D
            }), J[17] = ef, J[18] = es, J[19] = D, J[20] = B) : B = J[20], J[21] !== ee.gizmo.gizmo_type || J[22] !== ee.gizmo.id || J[23] !== er || J[24] !== em || J[25] !== et ? (W = "gpt" === ee.gizmo.gizmo_type ? (0, a.jsxs)(g.c.Item, {
                href: em,
                onClick: e => {
                    e.defaultPrevented || ((0, I.a)(et, s.mc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: ee.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), eo(!1), (0, j.c)(et, null), (0, h.m)(et, "chat"), er(em, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(g.c.ItemIcon, {
                    children: (0, a.jsx)(f.Fh, {})
                }), (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat",
                    description: "Short GPT actions menu label that opens a new conversation with the same custom GPT, rather than switching to general ChatGPT"
                })]
            }) : null, J[21] = ee.gizmo.gizmo_type, J[22] = ee.gizmo.id, J[23] = er, J[24] = em, J[25] = et, J[26] = W) : W = J[26], J[27] !== ee || J[28] !== et ? (H = () => (0, b.f)(et, N, {
                accountId: et.get(u.e),
                resource: ee
            }), J[27] = ee, J[28] = et, J[29] = H) : H = J[29], J[30] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, a.jsx)(g.c.ItemIcon, {
                children: (0, a.jsx)(f.de, {})
            }), U = (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About",
                description: "GPT menu action that opens its details over the current conversation or landing page"
            }), J[30] = q, J[31] = U) : (q = J[30], U = J[31]), J[32] !== H ? (K = (0, a.jsxs)(g.c.Item, {
                onSelect: H,
                children: [q, U]
            }), J[32] = H, J[33] = K) : K = J[33];
            let ev = ep ? _ : C.a;
            return J[34] !== ee || J[35] !== en || J[36] !== ep || J[37] !== et ? ($ = () => {
                (0, P.e)(et, ee, !ep).catch(() => {
                    et.get(y.h).danger(en.formatMessage({
                        id: "chatgptConversations.customGpt.pinFailed",
                        defaultMessage: "Couldn't update pinned GPT",
                        description: "Error toast shown when adding or removing a custom GPT from the user's pinned sidebar items fails in Codex Desktop"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.customGpt.pinFailed"
                        }
                    })
                })
            }, J[34] = ee, J[35] = en, J[36] = ep, J[37] = et, J[38] = $) : $ = J[38], J[39] !== ep ? (X = ep ? (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT",
                description: "Compact overflow-menu action that removes the current custom GPT from the user's pinned sidebar items in Codex Desktop"
            }) : (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT",
                description: "Compact overflow-menu action that adds the current custom GPT to the user's pinned sidebar items in Codex Desktop"
            }), J[39] = ep, J[40] = X) : X = J[40], J[41] !== ev || J[42] !== $ || J[43] !== X ? (V = (0, a.jsx)(g.c.Item, {
                LeftIcon: ev,
                onSelect: $,
                children: X
            }), J[41] = ev, J[42] = $, J[43] = X, J[44] = V) : V = J[44], J[45] !== eu || J[46] !== eg || J[47] !== ee.gizmo.current_user_permission?.can_view_config ? (Q = eu || ee.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(g.c.Item, {
                href: eg,
                leftIconAsset: eu ? O.a : R.a,
                onClick: e => {
                    (0, m.e)({
                        event: e,
                        href: eg,
                        initiator: "open_in_browser_bridge",
                        openTarget: eu ? "external-browser" : void 0
                    })
                },
                children: eu ? (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.edit",
                    defaultMessage: "Edit GPT",
                    description: "Compact overflow-menu action that opens the current custom GPT in its ChatGPT web editor from Codex Desktop"
                }) : (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.view",
                    defaultMessage: "View",
                    description: "Short action in the custom GPT overflow menu for users who can view its configuration but cannot edit it, including after migration to a plugin. Opens the read-only GPT configuration page in ChatGPT."
                })
            }) : null, J[45] = eu, J[46] = eg, J[47] = ee.gizmo.current_user_permission?.can_view_config, J[48] = Q) : Q = J[48], J[49] !== ee ? (Z = (0, a.jsx)(M.a, {
                resource: ee
            }), J[49] = ee, J[50] = Z) : Z = J[50], J[51] !== es || J[52] !== W || J[53] !== K || J[54] !== V || J[55] !== Q || J[56] !== Z || J[57] !== B ? (Y = (0, a.jsxs)(g.a, {
                align: "start",
                contentWidth: "menu",
                open: es,
                onOpenChange: eo,
                triggerButton: B,
                children: [W, K, V, Q, Z]
            }), J[51] = es, J[52] = W, J[53] = K, J[54] = V, J[55] = Q, J[56] = Z, J[57] = B, J[58] = Y) : Y = J[58], Y
        }
    }),
    JlM: (function(e, t, n) {
        var a = n("Qo"),
            r = n("Xnl"),
            s = n("zd"),
            o = n("RU"),
            i = n("Ac"),
            l = n("OW"),
            c = n("RFD"),
            d = n("auX"),
            u = n("d6");
        n("lBz"), n("XtQP");
        var h = n("Mr"),
            p = n("UWH");

        function g(e) {
            let t, n, g, m, f = (0, a.c)(11),
                {
                    conversationId: v,
                    isTranscriptVisible: b
                } = e,
                y = void 0 === b || b,
                x = (0, r.z)(l.a),
                C = (0, s.useId)(),
                {
                    mutate: w
                } = (0, i.p)();
            return f[0] !== v || f[1] !== C || f[2] !== x ? (t = () => (x.set(p.b, e => new Map(e).set(C, v)), x.get(p.a)?.dismissCurrent(), () => {
                x.set(p.b, e => {
                    let t = new Map(e);
                    return t.delete(C), t
                })
            }), n = [v, C, x], f[0] = v, f[1] = C, f[2] = x, f[3] = t, f[4] = n) : (t = f[3], n = f[4]), (0, s.useEffect)(t, n), f[5] !== v || f[6] !== y || f[7] !== w || f[8] !== x ? (g = () => {
                if (!y) return;
                let e = x.watch(e => {
                        let {
                            get: t
                        } = e
                    }),
                    t = x.watch(e => {
                        let {
                            get: t
                        } = e, n = !0 === t(o.a);
                        if ((0, h.Yb)(x, v, n), !n) return;
                        let a = t(h.j, v);
                        if (null == a || !0 !== t(d.p, a)) return;
                        let r = (0, u.b)(a);
                        (0, c.j)(x, r, x.get(d.w, r)), w(a)
                    });
                return () => {
                    e(), t(), (0, h.Yb)(x, v, !1)
                }
            }, m = [v, y, w, x], f[5] = v, f[6] = y, f[7] = w, f[8] = x, f[9] = g, f[10] = m) : (g = f[9], m = f[10]), (0, s.useEffect)(g, m), null
        }
        n.d(t, {
            a: () => g
        })
    }),
    fr5: (function(e, t, n) {
        n.d(t, {
            a: () => F
        });
        var a = n("A"),
            r = n("Qo"),
            s = n("TP"),
            o = n("fyE"),
            i = n("qm"),
            l = n("Xnl"),
            c = n("zd"),
            d = n("oy"),
            u = n("TD"),
            h = n("YxW"),
            p = n("EF"),
            g = n("SGs"),
            m = n("yG"),
            f = n("OW"),
            v = n("ae"),
            b = n("bI"),
            y = n("lBz"),
            x = n("Ga6"),
            C = n("Mr"),
            w = n("jfi"),
            _ = n("FG"),
            I = n("Vc"),
            j = n("OCK"),
            S = n("dhx"),
            T = n("i6"),
            A = n("rK"),
            P = n("AS"),
            M = n("rn0"),
            E = n("iXT"),
            k = n("G6"),
            R = n("VB5"),
            O = n("VTN");
        let N = P.record(P.string(), P.union([P.string(), P.literal(!0)]));

        function F(e) {
            let t, n, P, F, z, L, D = (0, r.c)(28),
                {
                    conversationId: B,
                    turns: W,
                    loadHistory: H,
                    renderMode: q,
                    paragenEnabled: U,
                    enabled: K,
                    canCopy: $,
                    priority: X
                } = e,
                V = void 0 === q ? "conversation" : q,
                Q = void 0 !== U && U,
                Z = void 0 === K || K,
                Y = void 0 === $ || $,
                J = void 0 === X ? "fallback" : X,
                ee = (0, l.z)(f.a),
                et = (0, c.useRef)(null);
            D[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), D[0] = t) : t = D[0], D[1] !== Y || D[2] !== B || D[3] !== Z || D[4] !== H || D[5] !== Q || D[6] !== V ? (n = [B, Z, Y, H, V, Q], D[1] = Y, D[2] = B, D[3] = Z, D[4] = H, D[5] = Q, D[6] = V, D[7] = n) : n = D[7], (0, c.useEffect)(t, n), D[8] !== Y || D[9] !== B || D[10] !== Q || D[11] !== V || D[12] !== ee || D[13] !== W ? (P = () => {
                let e = ee.get(C.j, B),
                    t = ee.query.getData(y.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(C.x, B);
                if (!Y || "tpp" === n || "flora" === n) return null;
                let a = ee.get(C.J, B),
                    r = Q && "conversation" === V ? ee.get(I.a, B)?.promptMessageId : void 0,
                    s = function(e) {
                        for (let {
                                turn: t
                            }
                            of e.toReversed())
                            for (let e of t.items.toReversed()) {
                                if ("assistant-message" !== e.type) continue;
                                let t = null,
                                    n = 0;
                                if ((0, T.h)((0, E.a)(e.content, A.b), a => {
                                        if ("codexDirective" === a.type && a.name === A.a) {
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
                                        "code" !== a.type || (null == ("indented" === a.codeBlockStyle ? null : a.raw.split("\n").reduce(M.a, null)) && (t = {
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
                        threadCurrentNode: r ?? ee.get(C.A, B),
                        conversationOrigin: n,
                        isStreaming: (0, C.wb)(ee.get(C.X, B)),
                        mode: V,
                        moderationDisclaimersByMessageId: ee.get(C.K, B),
                        pendingSubmission: null
                    }).renderedTurns);
                if (s?.messageId == null) return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: s?.content
                };
                let o = {
                        conversationId: B,
                        messageId: s.messageId,
                        codeBlockIndex: s.codeBlockIndex
                    },
                    i = (0, S.a)(a?.[s.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(j.b, o) ?? i?.[String(s.codeBlockIndex)]?.content ?? s.content
                }
            }, D[8] = Y, D[9] = B, D[10] = Q, D[11] = V, D[12] = ee, D[13] = W, D[14] = P) : P = D[14];
            let en = (0, b.a)(P);
            D[15] !== ee ? (F = (e, t) => {
                let n = e => {
                    (0, m.a)(ee, o.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: s.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
                    })
                };
                return (0, v.a)(e, void 0, () => {
                    "string" == typeof e ? n(e) : e.then(n, G)
                }).then(e => {
                    e && !t?.aborted && ee.get(g.h).success((0, a.jsx)(d.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard",
                        description: "Success toast after the user copies the last assistant code block using the keyboard shortcut or command menu in Chat mode"
                    }))
                })
            }, D[15] = ee, D[16] = F) : F = D[16];
            let ea = F;
            return D[17] !== B || D[18] !== en || D[19] !== H || D[20] !== Q || D[21] !== V || D[22] !== ee || D[23] !== ea ? (z = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!H || ee.get(C.z, B) || null == t || ee.get(_.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let r = ee.get(u.a),
                    s = ee.get(C.A, B),
                    o = ee.get(h.f).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(C.A, B) !== s || Q && "conversation" === V && t(I.a, B)?.promptMessageId !== n || t(h.f).copyLastCodeBlock !== o) && a.abort()
                    });
                ea((async () => {
                    await (0, w.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, D[17] = B, D[18] = en, D[19] = H, D[20] = Q, D[21] = V, D[22] = ee, D[23] = ea, D[24] = z) : z = D[24], D[25] !== Z || D[26] !== J ? (L = {
                enabled: Z,
                priority: J
            }, D[25] = Z, D[26] = J, D[27] = L) : L = D[27], (0, p.a)("copyLastCodeBlock", z, L), null
        }

        function G() {}
    }),
    LEg: (function(e, t, n) {
        n.d(t, {
            a: () => w
        });
        var a = n("A"),
            r = n("Qo"),
            s = n("Xnl"),
            o = n("Wf"),
            i = n("bj"),
            l = n("TdH"),
            c = n("Qc");
        n("ZU2"), n("TpE");
        var d = n("gbr"),
            u = n("fBo"),
            h = n("ipG"),
            p = n("aM"),
            g = n("zd"),
            m = n("tSE"),
            f = n("YnF"),
            v = n("Mr");

        function b() {
            let e, t, n = (0, r.c)(3),
                a = (0, s.z)(m.a);
            return n[0] !== a ? (e = () => {
                if ("chatgpt-thread" !== a.value.routeKind) return;
                let e = a.value.conversationId;
                return a.watch(t => {
                    let {
                        get: n
                    } = t, r = n(v.j, e);
                    if (null != r) return (0, f.a)(a, (0, p.Me)(`chatgpt:${r}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, g.useLayoutEffect)(e, t), null
        }
        n("n5i"), n("q3"), n("bf"), n("Cq");
        var y = n("rBf"),
            x = n("enM"),
            C = n("PCE");

        function w(e) {
            let t, n, s, o, l, c, d = (0, r.c)(16),
                {
                    chatIcon: p,
                    header: g,
                    title: m,
                    isArchivedPreview: f,
                    children: v
                } = e;
            return d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(i.a.MainContentLayout, {
                layout: (0, h.a)() ? "default" : "thread-edge-scroll"
            }), d[0] = t) : t = d[0], d[1] !== f ? (n = f ? null : (0, a.jsx)(u.SitePreviewBridge, {}), d[1] = f, d[2] = n) : n = d[2], d[3] !== g ? (s = null == g ? null : (0, a.jsx)(i.a.Header, {
                desktopPlacement: "titlebar",
                divider: !1,
                children: g
            }), d[3] = g, d[4] = s) : s = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(i.a.RightPanelOutlet, {
                children: (0, a.jsx)(i.a.RightPanelTabs, {})
            }), d[5] = o) : o = d[5], d[6] !== p || d[7] !== g || d[8] !== f || d[9] !== m ? (l = f ? null : (0, a.jsx)(_, {
                chatIcon: p,
                mainToolbar: g,
                title: m
            }), d[6] = p, d[7] = g, d[8] = f, d[9] = m, d[10] = l) : l = d[10], d[11] !== v || d[12] !== n || d[13] !== s || d[14] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, s, v, o, l]
            }), d[11] = v, d[12] = n, d[13] = s, d[14] = l, d[15] = c) : c = d[15], c
        }

        function _(e) {
            let t, n, i, u, p, g, f = (0, r.c)(13),
                {
                    chatIcon: v,
                    mainToolbar: w,
                    title: _
                } = e,
                I = (0, s.z)(m.a);
            (0, o.a)(), (0, s.A)(d.i), (0, s.A)(c.s), f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(b, {}), f[0] = t, f[1] = n) : (t = f[0], n = f[1]), f[2] !== v || f[3] !== _ ? (i = (0, a.jsx)(x.a, {
                title: _,
                icon: v
            }), f[2] = v, f[3] = _, f[4] = i) : i = f[4];
            let j = w ?? void 0;
            return f[5] !== j ? (u = (0, a.jsx)(C.a, {
                mainToolbar: j
            }), f[5] = j, f[6] = u) : u = f[6], f[7] !== I.value.routeKind ? (p = "other" === I.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(y.b, {
                showLauncherButton: !1
            }), f[7] = I.value.routeKind, f[8] = p) : p = f[8], f[9] !== i || f[10] !== u || f[11] !== p ? (g = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i, u, p, null, null]
            }), f[9] = i, f[10] = u, f[11] = p, f[12] = g) : g = f[12], g
        }
    }),
    dLc: (function(e, t, n) {
        var a = n("A"),
            r = n("Qo"),
            s = n("on"),
            o = n("bj"),
            i = n("NVR");

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
    WVa: (function(e, t, n) {
        var a = n("Lw"),
            r = n("Xnl"),
            s = n("AS"),
            o = n("fDv"),
            i = n("OW"),
            l = n("Mr");
        let c = s.object({
                epic_patient_label: s.string(),
                epic_patient_name: s.string().nullable().optional(),
                epic_patient_birth_date: o.date().nullable().optional(),
                epic_encounter_label: s.string().nullable().optional()
            }),
            d = (0, r.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(l.J, e);
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
    H7N: (function(e, t, n) {
        var a = n("A"),
            r = n("Qo"),
            s = n("Xnl"),
            o = n("oy"),
            i = n("Csl"),
            l = n("bq"),
            c = n("bf"),
            d = n("Bb"),
            u = n("X6V"),
            h = n("OW");
        let p = (0, d.a)(async () => (await n.e(306529).then(n.bind(n, "GkN"))).GptReportDialog);

        function g(e) {
            let t, n, d, g, m = (0, r.c)(9),
                {
                    resource: f,
                    onSelect: v
                } = e,
                b = (0, s.z)(h.a),
                y = (0, s.A)(i.e);
            return null == y || f.gizmo.tags?.includes("first_party") || "marketplace" !== f.gizmo.share_recipient && "link" !== f.gizmo.share_recipient ? null : (m[0] !== y || m[1] !== v || m[2] !== f || m[3] !== b ? (t = () => {
                v?.(), (0, u.f)(b, p, {
                    accountId: y,
                    resource: f
                })
            }, m[0] = y, m[1] = v, m[2] = f, m[3] = b, m[4] = t) : t = m[4], m[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(l.c.ItemIcon, {
                children: (0, a.jsx)(c.pd, {})
            }), d = (0, a.jsx)(o.a, {
                id: "chatgptConversations.gpts.report.action",
                defaultMessage: "Report GPT",
                description: "Menu action to report a publicly shared third-party GPT"
            }), m[5] = n, m[6] = d) : (n = m[5], d = m[6]), m[7] !== t ? (g = (0, a.jsxs)(l.c.Item, {
                onSelect: t,
                children: [n, d]
            }), m[7] = t, m[8] = g) : g = m[8], g)
        }
        n.d(t, {
            a: () => g
        })
    }),
    alJ: (function(e, t, n) {
        var a = n("A"),
            r = n("Qo"),
            s = n("on"),
            o = n("Xnl"),
            i = n("HZ"),
            l = n("Bb"),
            c = n("OW"),
            d = n("OM"),
            u = n("wwv"),
            h = n("tV8"),
            p = n("u9");
        let g = (0, l.a)(async () => (await n.e(901042).then(n.bind(n, "ut8"))).GptPluginMigrationBannerContent, {
            errorFallback: e => (0, a.jsx)(v, {
                ...e
            })
        });

        function m(e) {
            let t, n = (0, r.c)(3),
                {
                    gizmoId: s
                } = e,
                i = (0, o.x)(d.c, "2160578039");
            return n[0] !== i || n[1] !== s ? (t = i ? (0, a.jsx)(g, {
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
            return i[0] !== d ? (t = (0, s.b)("empty:hidden", d), i[0] = d, i[1] = t) : t = i[1], i[2] !== c ? (n = (0, a.jsx)(m, {
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
                d = (0, o.z)(c.a),
                g = (0, i.X)(),
                m = (0, i.Z)(),
                {
                    data: f
                } = (0, o.x)(u.b, l);
            s[0] !== l || s[1] !== g.pathname ? (t = {
                gizmoId: l,
                visitKey: g.pathname
            }, s[0] = l, s[1] = g.pathname, s[2] = t) : t = s[2];
            let v = (0, o.x)(p.c, t);
            return s[3] !== v || s[4] !== l || s[5] !== g.pathname || s[6] !== m || s[7] !== f || s[8] !== d ? (n = v && f?.gizmo.migrated_plugin_id ? (0, a.jsx)(h.a, {
                gptName: f.gizmo.display.name,
                accessState: "error",
                onUsePlugin: () => void m("/plugins"),
                onKeepUsingGpt: () => (0, p.a)(d, {
                    gizmoId: l,
                    visitKey: g.pathname
                })
            }) : null, s[3] = v, s[4] = l, s[5] = g.pathname, s[6] = m, s[7] = f, s[8] = d, s[9] = n) : n = s[9], n
        }
        n.d(t, {
            GptPluginMigrationBanner: () => m,
            GptPluginMigrationHomeBanner: () => f
        })
    }),
    tV8: (function(e, t, n) {
        var a = n("A"),
            r = n("Qo"),
            s = n("Wf"),
            o = n("oy"),
            i = n("zKC"),
            l = n("ygO"),
            c = n("HOL"),
            d = n("hZa"),
            u = n("slB"),
            h = n("b5a");

        function p(e) {
            let t, n, p, g, m, f, v, b, y, x = (0, r.c)(34),
                {
                    gptName: C,
                    accessState: w,
                    onUsePlugin: _,
                    onKeepUsingGpt: I,
                    onRetry: j
                } = e,
                S = (0, s.a)(),
                T = (0, d.g)("2513446768");
            x[0] !== T || x[1] !== S ? (t = S.formatDate((0, u.a)(T.get("retirement_date", "")), {
                month: "long",
                day: "numeric",
                timeZone: "UTC"
            }), x[0] = T, x[1] = S, x[2] = t) : t = x[2];
            let A = t;
            if ("error" === w && null != j) {
                let e;
                x[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceRetry",
                    defaultMessage: "Try again",
                    description: "Retry checking access to the migrated plugin"
                }), x[3] = e) : e = x[3], n = e
            } else if ("admin" === w) {
                let e;
                x[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.viewPlugin",
                    defaultMessage: "View Plugin",
                    description: "Button that opens a migrated plugin in workspace admin settings for an administrator who cannot open its ordinary plugin details; does not start a chat"
                }), x[4] = e) : e = x[4], n = e
            } else if ("allowed" === w || "pending" === w) {
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
            if ("error" === w && null == j) {
                let e;
                x[7] !== A ? (e = (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceAccessUnconfirmed",
                    defaultMessage: "We couldn’t check your access to the plugin. You can keep using this GPT until {deadline}.",
                    description: "Fallback when the migration banner cannot load. Access is unknown; the user can explore plugins or continue using the GPT.",
                    values: {
                        deadline: A
                    }
                }), x[7] = A, x[8] = e) : e = x[8], p = e
            } else if ("error" === w) {
                let e;
                x[9] !== A ? (e = (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceAccessError",
                    defaultMessage: "We couldn’t check your access to the plugin. Try again, or keep using this GPT until {deadline}.",
                    description: "Migrated GPT notice after a failed plugin-access check; deadline is the localized retirement date",
                    values: {
                        deadline: A
                    }
                }), x[9] = A, x[10] = e) : e = x[10], p = e
            } else if ("denied" === w) {
                let e;
                x[11] !== A ? (e = (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceAccessDenied",
                    defaultMessage: "This plugin isn’t available to you. You can keep using this GPT until {deadline}.",
                    description: "Migrated GPT notice when the destination plugin is inaccessible; deadline is the localized retirement date",
                    values: {
                        deadline: A
                    }
                }), x[11] = A, x[12] = e) : e = x[12], p = e
            } else if (C.trim()) {
                let e;
                x[13] !== A || x[14] !== C ? (e = (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceNamedBody",
                    defaultMessage: "{gptName} is now available as a plugin. You can keep using this GPT until {deadline}.",
                    description: "Explains the migrated GPT choice before the composer. gptName is the GPT display name and deadline is a localized month and day.",
                    values: {
                        gptName: C,
                        deadline: A
                    }
                }), x[13] = A, x[14] = C, x[15] = e) : e = x[15], p = e
            } else {
                let e;
                x[16] !== A ? (e = (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceBody",
                    defaultMessage: "This GPT is now available as a plugin. You can keep using this GPT until {deadline}.",
                    description: "Explains the migrated GPT choice when the GPT has no display name; deadline is a localized month and day.",
                    values: {
                        deadline: A
                    }
                }), x[16] = A, x[17] = e) : e = x[17], p = e
            }
            x[18] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsx)(c.a, {
                asset: h.a,
                className: "text-secondary"
            }), x[18] = g) : g = x[18], x[19] !== C ? (m = C.trim() ? (0, a.jsx)(o.a, {
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
            }), x[19] = C, x[20] = m) : m = x[20];
            let P = "pending" === w,
                M = "error" === w && null != j ? j : _;
            return x[21] !== n || x[22] !== P || x[23] !== M ? (f = (0, a.jsx)(l.a, {
                color: "primary",
                loading: P,
                size: "dialog",
                type: "button",
                onClick: M,
                children: n
            }), x[21] = n, x[22] = P, x[23] = M, x[24] = f) : f = x[24], x[25] !== I ? (v = null == I ? null : (0, a.jsx)(l.a, {
                color: "outline",
                size: "dialog",
                type: "button",
                onClick: I,
                children: (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceKeepUsing",
                    defaultMessage: "Keep using GPT",
                    description: "Reveals the existing GPT chat composer for this visit only, keeping its draft. The choice is shown again when the GPT is reopened."
                })
            }), x[25] = I, x[26] = v) : v = x[26], x[27] !== f || x[28] !== v ? (b = (0, a.jsxs)("div", {
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
        n.d(t, {
            a: () => p
        })
    }),
    slB: (function(e, t, n) {
        var a = n("rH");
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
    wvB: (function(e, t, n) {
        n.d(t, {
            a: () => p,
            b: () => h
        });
        var a = n("Xnl"),
            r = n("OW"),
            s = n("OM"),
            o = n("czp"),
            i = n("AS"),
            l = n("b6f");
        let c = i.object({
                course_id: i.string().trim().min(1),
                title: i.string().trim().nullish().catch(null),
                icon_url_or_emoji: i.url({
                    protocol: /^https$/
                }).or(i.emoji()).nullish().catch(null)
            }),
            d = i.object({
                course_info: c.nullish()
            }),
            u = (0, a.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t, a = d.safeParse(n(l.g, e)?.view);
                return a.success ? a.data.course_info ?? null : null
            }, {
                isEqual: o.isEqual
            }),
            h = (0, a.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(s.c, "4035922817") ? n(u, e) : null
            }),
            p = (0, a.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(h, e)?.course_id ?? null
            })
    }),
    wnp: (function(e, t, n) {
        var a = n("FC5"),
            r = n("XtQP"),
            s = n("Mr"),
            o = n("Zn");
        let i = (0, a.a)({
            conversationIds: (e, t) => [t],
            status: (e, t) => {
                let {
                    get: n
                } = e, a = n(s.v, t);
                return {
                    pending: (0, s.wb)(n(s.X, t)),
                    completed: null == a || "completed" === a.result,
                    unread: n(s.H, t)
                }
            },
            preview: (e, t) => {
                let {
                    get: n
                } = e, a = n(s.J, t);
                return null == a ? null : (0, o.a)({
                    mapping: a,
                    current_node: n(s.A, t)
                })?.text ?? null
            },
            title: (e, t) => {
                let {
                    get: n
                } = e;
                return n(s.$, t) || null
            },
            dismiss: (e, t) => {
                (0, s.Rb)(e, t, !1), (0, r.b)(e, t).catch(() => {})
            }
        });
        n.d(t, {}, {
            a: i
        })
    }),
    M3K: (function(e, t, n) {
        var a = n("A"),
            r = n("Qo"),
            s = n("Xnl"),
            o = n("zd"),
            i = n("v7"),
            l = n("OW"),
            c = n("yLz"),
            d = n("lsf"),
            u = n("Mr"),
            h = n("jfi"),
            p = n("FG");

        function g(e) {
            let t, n, g, f, v, b = (0, r.c)(18),
                {
                    conversationId: y
                } = e,
                x = (0, s.z)(l.a),
                C = (0, s.x)(u.j, y),
                w = (0, s.x)(p.c, C ?? y),
                _ = (0, d.b)(),
                I = (0, o.useRef)(null);
            b[0] !== x || b[1] !== C ? (t = () => {
                null != C && (0, h.b)(x, C, i.flushSync)
            }, b[0] = x, b[1] = C, b[2] = t) : t = b[2];
            let j = t;
            b[3] !== y || b[4] !== j || b[5] !== x || b[6] !== C ? (n = () => {
                let e = x.get(p.c, C ?? y);
                e?.hasError || j()
            }, b[3] = y, b[4] = j, b[5] = x, b[6] = C, b[7] = n) : n = b[7];
            let S = (0, o.useEffectEvent)(n);
            b[8] !== _ || b[9] !== S ? (g = () => {
                let e = I.current,
                    t = _.getScrollElement();
                if (null == e || null == t) return;
                let n = new IntersectionObserver(e => {
                    e.some(m) && S()
                }, {
                    root: t,
                    rootMargin: "80px 0px 0px 0px"
                });
                return n.observe(e), () => n.disconnect()
            }, b[8] = _, b[9] = S, b[10] = g) : g = b[10];
            let T = w?.cursor,
                A = w?.hasError;
            if (b[11] !== _ || b[12] !== C || b[13] !== T || b[14] !== A ? (f = [_, C, T, A], b[11] = _, b[12] = C, b[13] = T, b[14] = A, b[15] = f) : f = b[15], (0, o.useEffect)(g, f), null == w || w.complete || null == w.cursor) return null;
            let P = w.hasError ? j : null;
            return b[16] !== P ? (v = (0, a.jsx)(c.a, {
                ref: I,
                onRetry: P
            }), b[16] = P, b[17] = v) : v = b[17], v
        }

        function m(e) {
            return e.isIntersecting
        }
        n.d(t, {
            a: () => g
        })
    }),
    lUU: (function(e, t, n) {
        var a = n("A"),
            r = n("Qo"),
            s = n("Xnl"),
            o = n("oy"),
            i = n("Qg"),
            l = n("HZ"),
            c = n("bq"),
            d = n("bf"),
            u = n("SGs"),
            h = n("svj"),
            p = n("gA"),
            g = n("FR8"),
            m = n("OW"),
            f = n("OtL"),
            v = n("w7E"),
            b = n("wVX"),
            y = n("W1N"),
            x = n("Qmk"),
            C = n("xEX"),
            w = n("KMq"),
            _ = n("J6L"),
            I = n("FgU"),
            j = n("WL");

        function S(e) {
            let t, n, i = (0, r.c)(12),
                {
                    conversation: d,
                    onCreateProjectDialogCloseAutoFocus: u,
                    project: h,
                    showMoveToProject: p
                } = e,
                g = void 0 === p || p,
                f = (0, s.z)(m.a),
                b = (0, l.Z)(),
                y = (0, s.A)(v.a),
                w = (0, s.A)(x.m),
                _ = (0, C.b)();
            if (i[0] !== d || i[1] !== b || i[2] !== u || i[3] !== w || i[4] !== h || i[5] !== _ || i[6] !== y || i[7] !== f || i[8] !== g) {
                let e = T({
                        scope: f,
                        conversation: d,
                        project: h,
                        projectListQuery: y,
                        pinnedProjectsQuery: w,
                        showMoveToProject: g,
                        projectCrudStatus: _,
                        navigate: b,
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
                t = e.map(n), i[0] = d, i[1] = b, i[2] = u, i[3] = w, i[4] = h, i[5] = _, i[6] = y, i[7] = f, i[8] = g, i[9] = t
            } else t = i[9];
            return i[10] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), i[10] = t, i[11] = n) : n = i[11], n
        }

        function T(e) {
            let {
                scope: t,
                conversation: n,
                project: r,
                projectListQuery: s,
                pinnedProjectsQuery: o,
                showMoveToProject: i = !0,
                showDestinationFetchState: l = !0,
                projectCrudStatus: c,
                navigate: m,
                onCreateProjectDialogCloseAutoFocus: C
            } = e, {
                isWorkConversation: S,
                sourceMemoryBlocked: T
            } = (0, _.c)(n, r), P = T ? f.a.projectOnlyMoveUnavailable : void 0, {
                data: M,
                isPending: E,
                isError: k
            } = s, {
                data: R,
                isPending: O,
                isError: N
            } = o, F = (0, I.a)(R, M, r?.gizmo.id), G = "allowed" === c, z = (e, a) => {
                (0, x.T)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(a).catch(() => {
                    t.get(u.h).danger(t.get(h.a).formatMessage(A.moveFailed), {
                        errorAnalytics: {
                            toastId: "move_conversation_to_snorlax_error"
                        }
                    })
                })
            }, L = [];
            for (let e of (G && (L.push({
                    id: "new-chatgpt-project",
                    icon: d.rg,
                    message: A.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (0, y.a)(t, e => {
                            z(e, () => {
                                m((0, j.c)(e.gizmo.id))
                            })
                        }, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: S,
                            onCloseAutoFocus: C
                        })
                    }
                }), F.length > 0 && L.push({
                    id: "new-project-separator",
                    type: "separator"
                })), F)) {
                let {
                    targetMemoryBlocked: t
                } = (0, _.c)(n, void 0, e), r = t ? (0, w.a)((0, b.c)(e)) : void 0;
                L.push({
                    id: `move-to-project:${e.gizmo.id}`,
                    icon: (0, a.jsx)(g.a, {
                        className: "icon-xs",
                        size: 16,
                        color: e.gizmo.display.theme,
                        fallbackIcon: (0, a.jsx)(d.td, {}),
                        icon: e.gizmo.display.emoji
                    }),
                    nativeIcon: (0, p.b)(e.gizmo.display.emoji),
                    message: A.projectName,
                    messageValues: {
                        projectName: e.gizmo.display.name
                    },
                    enabled: null == r,
                    tooltipMessage: r,
                    onSelect: () => {
                        z(e), m((0, j.c)(e.gizmo.id))
                    }
                })
            }
            return l && (k || N) ? L.push({
                id: "retry-project-destinations",
                message: A.destinationsFailed,
                closeOnSelect: !1,
                onSelect: () => {
                    Promise.all([t.query.invalidate(v.a), t.query.invalidate(x.m)])
                }
            }) : l && (E || O) ? L.push({
                id: "loading-project-destinations",
                message: A.loading,
                tooltipMessage: A.reopen,
                enabled: !1
            }) : k || N || E || O || 0 !== F.length || G || L.push({
                id: "no-project-destinations",
                message: A.noDestinations,
                enabled: !1
            }), [...i && L.length > 0 ? [{
                id: "move-to-project",
                icon: d.td,
                message: A.moveToProject,
                enabled: !T,
                tooltipMessage: P,
                submenu: L
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                icon: d.Bd,
                message: A.removeFromProject,
                enabled: !T,
                tooltipMessage: P,
                onSelect: () => {
                    (0, x.T)({
                        scope: t,
                        conversationId: n.id,
                        projectId: null
                    }).catch(() => {
                        t.get(u.h).danger(t.get(h.a).formatMessage(A.removeFailed), {
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
            a: () => S,
            b: () => T
        })
    }),
    MDm: (function(e, t, n) {
        var a = n("Xnl"),
            r = n("Qg"),
            s = n("OW"),
            o = n("Mr"),
            i = n("b6f");
        let l = (0, a.d)(s.a, (e, t) => {
            let {
                get: n
            } = t, a = n(i.g, e);
            if (null == a) return null;
            let r = n(o.J, e);
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
            }({
                ...a,
                conversation: {
                    mapping: r,
                    current_node: n(o.A, e),
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
    JUx: (function(e, t, n) {
        var a = n("A"),
            r = n("Qo"),
            s = n("Xnl"),
            o = n("zd"),
            i = n("oy"),
            l = n("bj"),
            c = n("EO"),
            d = n("ygO"),
            u = n("X6V"),
            h = n("OW"),
            p = n("gsA");
        let g = (0, o.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taa"))).CodexThreadReportDialog
        }));

        function m(e) {
            let t, n = (0, r.c)(3),
                {
                    postId: o
                } = e,
                c = (0, s.z)(h.a);
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
                                onClick: () => b(c, o),
                                children: e
                            }, "report")
                        }
                    })
                })
            }), n[0] = o, n[1] = c, n[2] = t) : t = n[2], t
        }

        function f() {
            let e, t = (0, r.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [(0, a.jsx)("div", {
                    className: "text-secondary",
                    children: (0, a.jsx)(i.a, {
                        id: "chatgptConversations.sharedConversation.copyDisclaimer",
                        defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory.",
                        description: "Informational notice above a shared ChatGPT chat explaining that the copy will not be added to the viewer's memory"
                    })
                }), (0, a.jsx)(v, {})]
            }), t[0] = e) : e = t[0], e
        }

        function v() {
            let e, t, n, o = (0, r.c)(6),
                l = (0, s.z)(h.a),
                u = (0, s.x)(p.c, (0, c.a)());
            return null == u ? null : (o[0] !== l || o[1] !== u.id ? (e = () => b(l, u.id), o[0] = l, o[1] = u.id, o[2] = e) : e = o[2], o[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(i.a, {
                id: "chatgptConversations.sharedPost.reportButton",
                defaultMessage: "Report conversation",
                description: "Button below the shared-chat disclosure that opens safety reporting for the shared ChatGPT image post shown in the conversation."
            }), o[3] = t) : t = o[3], o[4] !== e ? (n = (0, a.jsx)(d.a, {
                className: "font-semibold",
                color: "ghostActive",
                type: "button",
                onClick: e,
                children: t
            }), o[4] = e, o[5] = n) : n = o[5], n)
        }

        function b(e, t) {
            (0, u.f)(e, g, {
                reportEntityType: "post",
                productArea: "chatgpt_post",
                threadId: t,
                title: (0, a.jsx)(i.a, {
                    id: "chatgptConversations.sharedPost.reportTitle",
                    defaultMessage: "Report a conversation",
                    description: "Title of the existing safety report dialog when it is opened for a shared ChatGPT image conversation."
                })
            })
        }
        n.d(t, {
            a: () => f,
            b: () => m
        })
    }),
    JKd: (function(e, t, n) {
        n.d(t, {
            a: () => u
        });
        var a = n("A"),
            r = n("Qo"),
            s = n("Xnl"),
            o = n("bj"),
            i = n("Csl"),
            l = n("OF"),
            c = n("EO"),
            d = n("MMl");

        function u(e) {
            let t, n, u, h = (0, r.c)(9),
                {
                    children: p
                } = e,
                g = (0, c.a)(),
                m = (0, s.A)(i.k),
                f = (0, s.A)(l.l);
            h[0] !== g.authMethod || h[1] !== m.status || h[2] !== f ? (t = function(e) {
                let {
                    authMethod: t,
                    chatGptAccessStatus: n,
                    isWorkOnlyChatDisabled: a
                } = e;
                return "chatgpt" === t && "allowed" === n && !a
            }({
                authMethod: g.authMethod,
                chatGptAccessStatus: m.status,
                isWorkOnlyChatDisabled: f
            }), h[0] = g.authMethod, h[1] = m.status, h[2] = f, h[3] = t) : t = h[3];
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
    vpd: (function(e, t, n) {
        var a = n("Qo"),
            r = n("HV"),
            s = n.n(r),
            o = n("Xnl"),
            i = n("aM"),
            l = n("zd"),
            c = n("Gd"),
            d = n("xq"),
            u = n("OW"),
            h = n("AD"),
            p = n("Ow"),
            g = n("fDf"),
            m = n("Mr");

        function f(e) {
            let t, n, r, f, v, b, y = (0, a.c)(19);
            y[0] !== e ? (t = void 0 === e ? {} : e, y[0] = e, y[1] = t) : t = y[1];
            let {
                composerController: x,
                conversationId: C,
                draftKey: w,
                initialPrompt: _,
                initialPromptKind: I
            } = t, j = void 0 === w ? C : w, S = (0, o.z)(u.a);
            y[2] !== C || y[3] !== j || y[4] !== _ || y[5] !== I || y[6] !== S ? (n = () => s()(() => {
                let e = null == C ? null : S.get(m.x, C),
                    t = (0, d.e)(_ ?? (null == j ? "" : S.get(p.r, j)), {
                        addInitialContentToHistory: null == _ && null != j,
                        defaultTextKind: I ?? (null == _ && null != j || (0, c.b)(_ ?? "").length > 0 ? "prompt" : "plain"),
                        enableFileMentions: !0,
                        enableRichText: !0,
                        enableSkillMentions: !1,
                        enableSlashCommands: {
                            triggers: ["/"]
                        },
                        plainTextMode: (0, h.b)(S.get, i.of.composerPlainTextMode),
                        suggestionOptions: {
                            enableInlineSystemHints: "tpp" !== e && "flora" !== e,
                            variant: "tpp" !== e && "flora" !== e ? "chatgpt" : void 0
                        }
                    });
                return null == _ && null != C && "string" == typeof j && null != (0, g.j)(S, j) && "tpp" !== e && "flora" !== e && (0, p.K)(S, C, t.getChatGptPrompt().systemHints), t
            }), y[2] = C, y[3] = j, y[4] = _, y[5] = I, y[6] = S, y[7] = n) : n = y[7];
            let [T] = (0, l.useState)(n);
            y[8] !== T || y[9] !== x ? (r = x ?? T(), y[8] = T, y[9] = x, y[10] = r) : r = y[10];
            let A = r,
                P = (0, l.useRef)(null);
            y[11] !== A || y[12] !== j || y[13] !== S ? (f = () => {
                if (null == j) return;
                let e = S.get(p.r, j);
                return null != P.current && P.current !== e && A.restoreDraft(e), () => {
                    P.current = S.get(p.r, j)
                }
            }, v = [A, j, S], y[11] = A, y[12] = j, y[13] = S, y[14] = f, y[15] = v) : (f = y[14], v = y[15]), (0, l.useLayoutEffect)(f, v), y[16] !== A || y[17] !== x ? (b = () => {
                null != x || A.view.isDestroyed || A.destroy()
            }, y[16] = A, y[17] = x, y[18] = b) : b = y[18];
            let M = b;
            return (0, d.f)(M, A), A
        }
        n.d(t, {
            a: () => f
        })
    }),
    FNg: (function(e, t, n) {
        var a = n("ZU2");

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
    WQc: (function(e, t, n) {
        var a = n("Qo"),
            r = n("Xnl"),
            s = n("zd"),
            o = n("HZ"),
            i = n("SGs"),
            l = n("OW");

        function c(e) {
            let t, n, c, d = (0, a.c)(11),
                {
                    isUnavailable: u,
                    message: h,
                    homePath: p,
                    onUnavailable: g,
                    children: m
                } = e,
                f = (0, r.z)(l.a),
                v = (0, o.Z)(),
                b = (0, s.useRef)(!1);
            d[0] !== p || d[1] !== h || d[2] !== v || d[3] !== g || d[4] !== f ? (t = () => {
                g?.(), f.get(i.h).info(h, {
                    id: "conversation-inaccessible",
                    duration: 5
                }), v(p, {
                    replace: !0
                })
            }, d[0] = p, d[1] = h, d[2] = v, d[3] = g, d[4] = f, d[5] = t) : t = d[5];
            let y = (0, s.useEffectEvent)(t);
            return d[6] !== u || d[7] !== y ? (n = () => {
                u && !b.current && (b.current = !0, y())
            }, d[6] = u, d[7] = y, d[8] = n) : n = d[8], d[9] !== u ? (c = [u], d[9] = u, d[10] = c) : c = d[10], (0, s.useEffect)(n, c), u ? null : m
        }
        n.d(t, {
            a: () => c
        })
    }),
    GKs: (function(e, t, n) {
        var a = n("A"),
            r = n("Qo"),
            s = n("Xnl"),
            o = n("zd"),
            i = n("GaA"),
            l = n("OW"),
            c = n("tSE"),
            d = n("n5o");
        let u = (0, s.u)(l.a, () => []);

        function h(e) {
            let t, n = (0, r.c)(2),
                {
                    title: o
                } = e,
                i = (0, s.z)(c.a),
                l = (0, s.x)(d.a, `${i.value.pathname}${i.value.search??""}`),
                u = o ?? l;
            return n[0] !== u ? (t = (0, a.jsx)(p, {
                title: u
            }), n[0] = u, n[1] = t) : t = n[1], t
        }

        function p(e) {
            let t, n, a, c, d, h, p = (0, r.c)(13),
                {
                    title: v,
                    nativeTitle: b
                } = e,
                y = void 0 === b ? v : b,
                x = (0, s.z)(l.a),
                [C] = (0, o.useState)(g);
            return p[0] !== y || p[1] !== C || p[2] !== x || p[3] !== v ? (t = () => {
                if (i.appServices?.windowTitle == null) return;
                let e = {
                    owner: C,
                    title: null == v ? void 0 : y ?? null
                };
                x.set(u, t => t.some(e => e.owner === C) ? t.map(t => t.owner === C ? e : t) : [...t, e]), f(x)
            }, n = [x, C, v, y], p[0] = y, p[1] = C, p[2] = x, p[3] = v, p[4] = t, p[5] = n) : (t = p[4], n = p[5]), (0, o.useEffect)(t, n), p[6] !== C || p[7] !== x ? (a = () => () => {
                i.appServices?.windowTitle != null && (x.set(u, e => e.filter(e => e.owner !== C)), f(x))
            }, c = [x, C], p[6] = C, p[7] = x, p[8] = a, p[9] = c) : (a = p[8], c = p[9]), (0, o.useEffect)(a, c), p[10] !== v ? (d = () => {
                if (null == v) return;
                let e = document.title;
                m(v);
                let t = document.title;
                return () => {
                    document.title === t && m(e)
                }
            }, h = [v], p[10] = v, p[11] = d, p[12] = h) : (d = p[11], h = p[12]), (0, o.useEffect)(d, h), null
        }

        function g() {
            return Symbol()
        }

        function m(e) {
            let t = document.head.querySelector("title")?.firstChild;
            t instanceof Text && null == t.nextSibling ? t.data = e : document.title = e
        }

        function f(e) {
            i.appServices.windowTitle?.setTitle(e.get(u).findLast(e => void 0 !== e.title)?.title ?? null)
        }
        n.d(t, {
            a: () => p,
            b: () => h
        })
    }),
    RZB: (function(e, t, n) {
        var a = n("A"),
            r = n("Qo"),
            s = n("xSO"),
            o = n("Xnl"),
            i = n("Wf"),
            l = n("oy"),
            c = n("HZ"),
            d = n("Qmk"),
            u = n("HOL"),
            h = n("SGs"),
            p = n("iGe"),
            g = n("OW"),
            m = n("MRl"),
            f = n("HF"),
            v = n("vNL"),
            b = n("PCx"),
            y = n("aZ"),
            x = n("sn");

        function C(e) {
            let t, n, C, w, _, I, j, S, T, A = (0, r.c)(36),
                {
                    conversationId: P,
                    kind: M
                } = e,
                E = (0, o.z)(g.a),
                k = (0, i.a)(),
                R = (0, c.X)(),
                O = (0, c.Z)();
            A[0] !== R.hash || A[1] !== R.pathname || A[2] !== R.search || A[3] !== O || A[4] !== E ? (t = () => {
                (0, b.e)(E), O({
                    pathname: R.pathname,
                    search: R.search,
                    hash: R.hash
                }, {
                    replace: !0,
                    state: null
                })
            }, A[0] = R.hash, A[1] = R.pathname, A[2] = R.search, A[3] = O, A[4] = E, A[5] = t) : t = A[5];
            let N = t,
                F = (0, o.A)(b.g);
            A[6] !== P || A[7] !== F ? (n = F?.find(e => (0, y.a)(e.task) === `hosted:${P}`), A[6] = P, A[7] = F, A[8] = n) : n = A[8];
            let G = n;
            A[9] !== P || A[10] !== E ? (C = () => {
                let e = E.get(b.h);
                return null != e && (0, y.a)(e) === `hosted:${P}` ? (0, b.d)(E, e) : void 0
            }, A[9] = P, A[10] = E, A[11] = C) : C = A[11], A[12] !== P || A[13] !== M || A[14] !== E ? (w = async () => {
                if ("cloud" === M) {
                    await f.a.safePost("/wham/tasks/{task_id}/recover", {
                        parameters: {
                            path: {
                                task_id: P
                            }
                        }
                    }), (0, p.c)(E, P, !1);
                    return
                }
                await (0, d.W)({
                    scope: E,
                    conversationId: P
                })
            }, A[12] = P, A[13] = M, A[14] = E, A[15] = w) : w = A[15], A[16] !== P || A[17] !== N || A[18] !== M || A[19] !== E ? (_ = (e, t, n) => {
                n?.("restored");
                let r = E.get(h.h).info((0, a.jsx)(l.a, {
                    ...m.a.unarchiveSuccessPlain
                }), {
                    leading: (0, a.jsx)(u.a, {
                        "aria-hidden": !1,
                        asset: x.a
                    }),
                    primaryAction: {
                        label: (0, a.jsx)(l.a, {
                            ...m.a.viewNow
                        }),
                        onClick: () => {
                            r.close(), N()
                        }
                    },
                    id: `unarchive-thread-${M}:${P}`
                })
            }, A[16] = P, A[17] = N, A[18] = M, A[19] = E, A[20] = _) : _ = A[20], A[21] !== k || A[22] !== E ? (I = (e, t, n) => {
                n?.(null), E.get(h.h).danger(k.formatMessage(m.a.unarchiveError), {
                    errorAnalytics: {
                        toastId: "previewFooter.onError.unarchiveError"
                    }
                })
            }, A[21] = k, A[22] = E, A[23] = I) : I = A[23], A[24] !== C || A[25] !== w || A[26] !== _ || A[27] !== I ? (j = {
                onMutate: C,
                mutationFn: w,
                onSuccess: _,
                onError: I
            }, A[24] = C, A[25] = w, A[26] = _, A[27] = I, A[28] = j) : j = A[28];
            let {
                mutate: z,
                isPending: L,
                isSuccess: D
            } = (0, s.a)(j), B = D || G?.status === "restored", W = L || G?.status === "restoring";
            return A[29] !== z ? (S = () => z(), A[29] = z, A[30] = S) : S = A[30], A[31] !== N || A[32] !== S || A[33] !== B || A[34] !== W ? (T = (0, a.jsx)(v.a, {
                restored: B,
                restoring: W,
                onUnarchive: S,
                onDone: N
            }), A[31] = N, A[32] = S, A[33] = B, A[34] = W, A[35] = T) : T = A[35], T
        }
        n.d(t, {
            a: () => C
        })
    })
};