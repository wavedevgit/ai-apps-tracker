export const __rspack_esm_id = 544846;
export const __rspack_esm_ids = [544846];
export const __webpack_modules__ = {
    bn59: (function(e, t, n) {
        n.d(t, {
            a: () => z,
            ChatSeatAccessScreen: () => G
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("HZfM"),
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
            let t, n, l, c, d, u, p, v, y, M, k, N, G, B, z, L, F, D, H, W, U, q, K = (0, r.c)(70),
                {
                    account: V,
                    accountId: Z,
                    userId: Y,
                    onClose: Q,
                    onSwitchToWork: $
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
                (0, A.a)(J, g.kd, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: V.account.account_user_role ?? void 0,
                    hasPaidSubscription: eo
                })
            }, K[5] = V.account.account_user_role, K[6] = l, K[7] = eo, K[8] = J, K[9] = c) : c = K[9];
            let ec = c;
            K[10] !== Q ? (d = () => {
                Q(), (0, S.f)({
                    href: new URL("/codex/cloud", w.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, K[10] = Q, K[11] = d) : d = K[11];
            let ed = d;
            K[12] !== V.account.subscription_seat_pools_enabled || K[13] !== Z || K[14] !== ed || K[15] !== ei || K[16] !== ee || K[17] !== X || K[18] !== er || K[19] !== ec || K[20] !== Q || K[21] !== $ || K[22] !== et || K[23] !== J || K[24] !== Y ? (u = async () => {
                if ("requesting" !== et) {
                    if (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), er && !ei) {
                        let e = new URL("/admin/members", w.h);
                        e.searchParams.set("account_id", Z), ee && e.searchParams.set("search", ee);
                        let t = e.toString(),
                            n = (0, P.c)(J, t, Z),
                            a = null == n ? null : await n;
                        Q(), (0, S.f)({
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
                                            account_id: Z,
                                            user_id: Y
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
                                            account_id: Z,
                                            user_id: Y
                                        }
                                    },
                                    additionalHeaders: {
                                        "X-OpenAI-Account-User-Update-Source": "web_usage_based_workspace_access_modal"
                                    },
                                    requestBody: {
                                        seat_type: "default"
                                    }
                                }), !ea.current) return;
                            (0, I.e)(J), await (0, b.g)("accounts-check"), await Promise.all([J.query.invalidate(x.b, Z), J.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), ea.current && Q()
                        } else {
                            if (await _.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: Z
                                        }
                                    }
                                }), !ea.current) return;
                            $ ? (Q(), $()) : ed(), J.get(E.f).success(X.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted",
                                description: "Success toast shown after requesting ChatGPT access from the modal"
                            }))
                        }
                    } catch (e) {
                        ea.current && en(O(e) ?? "error")
                    }
                }
            }, K[12] = V.account.subscription_seat_pools_enabled, K[13] = Z, K[14] = ed, K[15] = ei, K[16] = ee, K[17] = X, K[18] = er, K[19] = ec, K[20] = Q, K[21] = $, K[22] = et, K[23] = J, K[24] = Y, K[25] = u) : u = K[25];
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
            K[30] !== ec || K[31] !== Q ? (y = e => {
                e || (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED"), Q())
            }, K[30] = ec, K[31] = Q, K[32] = y) : y = K[32], K[33] !== eu ? (M = e => {
                e.preventDefault(), eu()
            }, K[33] = eu, K[34] = M) : M = K[34], K[35] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, a.jsx)(T.e, {
                className: "heading-lg font-semibold",
                children: eh
            }), K[35] = k) : k = K[35], K[36] !== ep ? (N = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [k, (0, a.jsx)(T.d, {
                    className: "text-lg leading-6 text-secondary",
                    children: ep
                })]
            }), K[36] = ep, K[37] = N) : N = K[37];
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
            }), K[40] = em, K[41] = eg, K[42] = G, K[43] = B) : B = K[43], K[44] !== ed || K[45] !== ec || K[46] !== Q || K[47] !== $ ? (z = () => {
                $ ? (Q(), $()) : (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), ed())
            }, K[44] = ed, K[45] = ec, K[46] = Q, K[47] = $, K[48] = z) : z = K[48], K[49] !== $ ? (L = $ ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work",
                description: "Switches from the Chat access explanation to the available Work surface"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex",
                description: "Returns to Codex from the Chat access explanation"
            }), K[49] = $, K[50] = L) : L = K[50], K[51] !== z || K[52] !== L ? (F = (0, a.jsx)(h.a, {
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
            }) : null, K[57] = X, K[58] = et, K[59] = H) : H = K[59], K[60] !== N || K[61] !== D || K[62] !== H ? (W = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-8 p-10 text-center",
                children: [N, D, H]
            }), K[60] = N, K[61] = D, K[62] = H, K[63] = W) : W = K[63], K[64] !== W || K[65] !== M ? (U = (0, a.jsx)(j.b, {
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
        var N = n("pBDs");

        function G(e) {
            let t, n, o = (0, r.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, s.y)(m.a),
                p = (0, s.z)(N.a),
                g = (0, s.z)(d.t),
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
            let t, n, l, c, d, u = (0, r.c)(13),
                {
                    modeToggle: m,
                    onSwitchToWork: g
                } = e,
                f = (0, s.z)(N.a),
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
            BusinessAgentHomeHero: () => O
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

        function w(e) {
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
            let t, n, s, o, i, l, u, h, y, b, x, C, _, I, T, j, P, A = (0, r.c)(29),
                {
                    context: M,
                    onPresented: k,
                    onContinue: R,
                    onDismiss: O
                } = e,
                [N, G] = (0, c.useState)(!0 === M.showDisclosureModal);
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
            return A[2] !== O ? (n = e => {
                G(e), e || O?.()
            }, A[2] = O, A[3] = n) : n = A[3], A[4] !== k ? (s = {
                "data-theme": "light",
                onOpenAutoFocus: k
            }, A[4] = k, A[5] = s) : s = A[5], A[6] !== R ? (o = e => {
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
            }), A[21] = T, A[22] = o, A[23] = j) : j = A[23], A[24] !== N || A[25] !== j || A[26] !== n || A[27] !== s ? (P = (0, a.jsx)(m.b, {
                open: N,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: s,
                children: j
            }), A[24] = N, A[25] = j, A[26] = n, A[27] = s, A[28] = P) : P = A[28], P
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
            return null == h ? d : (l[0] !== d || l[1] !== u || l[2] !== h ? (t = "ready" !== h.status || h.context.showConversationStarters ? (0, a.jsx)(A, {
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
            r = n("o0PZ"),
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

        function m(e, t) {
            e.get(d)?.conversationId === t && e.set(d, null)
        }

        function g(e, t) {
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
                    canRetry: I,
                    isWorkConversation: w,
                    children: T
                } = e,
                j = (0, s.y)(d.a);
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
            let a = e.get(p.D, t) ? e.get(p.bb, t) : n.title;
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
                gizmo_id: e.get(p.Q, a),
                is_starred: !1,
                title: e.get(p.bb, a)
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
            a: () => oM,
            ChatGptConversationPage: () => oP,
            ChatGptSharedConversationPage: () => oA
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
            m = n("o0PZ"),
            g = n("AuIy"),
            f = n("Wc42"),
            v = n("iqEK"),
            y = n("NRIv"),
            b = n("zd8w"),
            x = n("v7qY"),
            C = n("Wf1j"),
            _ = n("oyxz"),
            I = n("HZfM"),
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
            O = n("O0M0"),
            N = n("Cslg"),
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
                } = (0, I.X)();
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "automations.cloud.scheduled-tasks"
            }, i[0] = t) : t = i[0];
            let {
                isCapable: g
            } = (0, p.x)(z.a, t);
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
                h = (0, I.X)(),
                m = (0, p.z)(N.e),
                g = (0, p.x)(F.j, l),
                {
                    data: f
                } = (0, p.x)(H.b, i),
                v = (0, p.z)(L.a),
                y = (0, b.useRef)(null),
                x = (0, b.useRef)(null);
            o[0] !== c ? (t = c.findLast(Y), o[0] = c, o[1] = t) : t = o[1];
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
            return o[17] !== m || o[18] !== v || o[19] !== l || o[20] !== g || o[21] !== w || o[22] !== T || o[23] !== d ? (s = [m, l, w, T, g, v, d], o[17] = m, o[18] = v, o[19] = l, o[20] = g, o[21] = w, o[22] = T, o[23] = d, o[24] = s) : s = o[24], (0, b.useEffect)(a, s), null
        }

        function V(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: Z
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function Z(e) {
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
        var $ = n("nKJ6"),
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
            let t, n, s, l, c, d = (0, r.c)(18),
                {
                    entries: u,
                    TurnRowComponent: h
                } = e,
                m = (0, p.y)(D.a),
                g = (0, p.z)(ea.a),
                f = (0, p.z)(er.a),
                v = (0, b.useRef)(null);
            d[0] !== u || d[1] !== f || d[2] !== m ? (t = function(e, t, n) {
                let a = [];
                for (let n of t) {
                    let t = e.get(F.j, n.conversationId),
                        r = (0, eC.c)(void 0, void 0, void 0, e.get(F.Q, n.conversationId) ?? void 0),
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
                    return null != t && (0, eb.g)(t) ? [{
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
            return d[7] !== C || d[8] !== m ? (s = () => {
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
            }, d[7] = C, d[8] = m, d[9] = s) : s = d[9], d[10] !== g || d[11] !== m ? (l = [g, m], d[10] = g, d[11] = m, d[12] = l) : l = d[12], (0, b.useEffect)(s, l), d[13] !== h || d[14] !== y || d[15] !== u || d[16] !== f ? (c = f ? (0, x.createPortal)((0, a.jsx)("div", {
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
            let t, n, a, s, i, l, c = (0, r.c)(22),
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
            c[9] !== g || c[10] !== d || c[11] !== h || c[12] !== v || c[13] !== y || c[14] !== u || c[15] !== f ? (s = (e, t) => {
                eh(u, e), e.defaultPrevented || null == f || 0 === v || u.get(ew.c, f)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat || m.current === t || (m.current = t, y({
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
                            predicate: eA
                        }).map(eE)), t.aborted || u.get(ea.a) !== g || window.print()
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

        function eO(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var eN = n("MrzV"),
            eG = n("ygO2"),
            eB = n("gbRX");

        function ez(e) {
            let t, n, s = (0, r.c)(4),
                {
                    isFetching: o,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, p.z)(!i && eB.a) || o;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(_.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again",
                description: "Retry loading a ChatGPT conversation after its history could not be loaded"
            }), s[0] = t) : t = s[0], s[1] !== l || s[2] !== c ? (n = (0, a.jsx)(eG.a, {
                color: "ghost",
                disabled: c,
                onClick: l,
                children: t
            }), s[1] = l, s[2] = c, s[3] = n) : n = s[3], n
        }

        function eL(e) {
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
            }), o[0] = t) : t = o[0], o[1] !== i || o[2] !== l || o[3] !== c ? (n = null != c ? (0, a.jsx)(ez, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, o[1] = i, o[2] = l, o[3] = c, o[4] = n) : n = o[4], o[5] !== n ? (s = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), o[5] = n, o[6] = s) : s = o[6], s
        }
        var eF = n("FfNP"),
            eD = n("Bbed"),
            eH = n("WVag");
        let eW = (0, eD.a)(eF.loadEpicChartIndicator);

        function eU(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, p.x)(eH.a, s),
                [i, l] = (0, b.useState)(!1);
            return i || null == o || l(!0), n[0] !== s || n[1] !== i ? (t = i ? (0, a.jsx)(eW, {
                conversationId: s
            }) : null, n[0] = s, n[1] = i, n[2] = t) : t = n[2], t
        }
        var eq = n("DWXw"),
            eK = n("FmJi"),
            eV = n("TSib"),
            eZ = n("sIex"),
            eY = n("jEN2"),
            eQ = n("kphc"),
            e$ = n("YWcr"),
            eJ = n("RGWz"),
            eX = n("QxH2"),
            e0 = n("mwa5"),
            e1 = n("UuVq"),
            e2 = n("TwSq"),
            e3 = n("l0fK"),
            e4 = n("hkBU"),
            e5 = n("UxN3"),
            e6 = n("GKsW"),
            e8 = n("yWTM"),
            e7 = n("SkIz"),
            e9 = n("aNqv"),
            te = n("ibLK"),
            tt = n("T1PX"),
            tn = n("Fjd0"),
            ta = n("VPBa"),
            tr = n("PWXi"),
            ts = n("zOE4"),
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
            tP = n("vjO1"),
            tA = n("ftSl"),
            tM = n("BdYu"),
            tk = n("Nyub"),
            tR = n("jZDY"),
            tO = n("HgLj"),
            tN = n("Bc5r"),
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
            tZ = n("gbrq"),
            tY = n("K33Q"),
            tQ = n("mv4d"),
            t$ = n("w7Qu"),
            tJ = n("dt5v"),
            tX = n("bWX0"),
            t0 = n("smHt"),
            t1 = n("aoTb"),
            t2 = n("pqpL"),
            t3 = n("riqo"),
            t4 = n("XcRr"),
            t5 = n("dk3M"),
            t6 = n("WFY2"),
            t8 = n("vldH"),
            t7 = n("ISgP"),
            t9 = n("t2JB"),
            ne = n("DIH2"),
            nt = n("aFoA"),
            nn = n("H8lk"),
            na = n("rxj0"),
            nr = n("XkLc"),
            ns = n("S95W");
        let no = (0, p.v)(eo.a, e => null);
        var ni = n("DM5G"),
            nl = n("gJe8"),
            nc = n("d2rV"),
            nd = n("hpog"),
            nu = n("EFj1"),
            nh = n("TL6G"),
            np = n("eKlv"),
            nm = n("OtLV"),
            ng = n("XtQP");

        function nf(e) {
            let t, n, a, s, o, i, l, c = (0, r.c)(16),
                {
                    conversationId: d
                } = e,
                u = (0, p.y)(eo.a),
                h = (0, C.a)();
            return c[0] !== d || c[1] !== h || c[2] !== u ? (t = () => {
                (0, ng.c)(u, d).catch(() => {
                    u.get(es.f).danger(h.formatMessage(nm.a.markUnreadError), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.sidebar.markUnreadError"
                        }
                    })
                })
            }, c[0] = d, c[1] = h, c[2] = u, c[3] = t) : t = c[3], (0, nu.a)("markThreadUnread", t), c[4] !== d || c[5] !== u ? (n = () => (0, np.c)(u, d), a = [d, u], c[4] = d, c[5] = u, c[6] = n, c[7] = a) : (n = c[6], a = c[7]), (0, nh.d)("rename-thread", n, a), c[8] !== d || c[9] !== u ? (s = () => (0, np.d)(u, d), o = [d, u], c[8] = d, c[9] = u, c[10] = s, c[11] = o) : (s = c[10], o = c[11]), (0, nh.d)("toggle-thread-pin", s, o), c[12] !== d || c[13] !== u ? (i = () => (0, np.a)(u, d), l = [d, u], c[12] = d, c[13] = u, c[14] = i, c[15] = l) : (i = c[14], l = c[15]), (0, nh.d)("archive-thread", i, l), null
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
                r = "";
            for (let e = n.nextNode(); null != e; e = n.nextNode()) {
                let t = r.length;
                r += e.textContent ?? "", a.push({
                    node: e,
                    start: t,
                    end: r.length
                })
            }
            let s = RegExp(t.split(/\n+/u).map(nT()).join("\\n*"), "g");
            for (let n = s.exec(r); null != n && n.index < r.length; n = s.exec(r)) {
                let r = n.index;
                s.lastIndex = r + 1;
                let o = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < o);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, o - l.start), nO(c) && ((0, nS.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function nO(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let nN = nb.object({
            chatGptSearchNavigation: nb.object({
                key: nb.string(),
                messageId: nb.string()
            })
        });

        function nG(e) {
            let t, n, a, s, o, i, l, c, d, u, h, m, g = (0, r.c)(48),
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
                    let r = e instanceof Range ? e.startContainer : e,
                        s = r instanceof HTMLElement ? r : r.parentElement;
                    for (let t = e instanceof Range ? s : s?.parentElement; null != t && t !== a; t = t.parentElement) {
                        if (t.scrollWidth <= t.clientWidth || !/^(auto|scroll)$/.test(getComputedStyle(t).overflowX)) continue;
                        let a = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect();
                        if (null == a) continue;
                        let r = t.getBoundingClientRect();
                        (a.left < r.left || a.right > r.right) && t.scrollBy({
                            left: (0, nx.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                M = nN.safeParse(S.state).data?.chatGptSearchNavigation,
                k = A ?? M?.messageId,
                R = P.get("selectedTextQuery") ?? "",
                O = (0, p.x)(F.L, f),
                N = !R || null != k && null != O && (O[k]?.message != null || Object.values(O).some(e => e.message?.id === k)),
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
                        let a, r, s, o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
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
                            for (let t of (g = !0, x.disconnect(), clearTimeout(r), null != s && cancelAnimationFrame(s), null != a && CSS.highlights.get(nM) === a && CSS.highlights.delete(nM), e.classList.remove(nE, nP), b)) t.classList.remove(nE, nA)
                        }

                        function _() {
                            g || null != r || null != s || (r = setTimeout(() => {
                                r = void 0, s = requestAnimationFrame(() => {
                                    s = void 0, I()
                                })
                            }, 50))
                        }

                        function I() {
                            let t;
                            if (g || !e.isConnected || null != s) return;
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
                                s = requestAnimationFrame(() => {
                                    s = requestAnimationFrame(() => {
                                        s = void 0, I()
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), nO(a) && w.push(a)
                                    }
                            }
                            let T = h.flatMap(e => {
                                let {
                                    element: t,
                                    target: n
                                } = e, a = t.getBoundingClientRect(), r = w.some(e => t.contains(e.startContainer));
                                return "terms" === i && a.width > 0 && a.height > 0 && ("block" === n.highlight || "auto" === n.highlight && !r) ? [t] : []
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
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...w), CSS.highlights.set(nM, a)) : w.length > 0 && T.push(e), e.classList.add(nE), (0, nI.e)() && e.classList.add(nP), T)) t.classList.add(nE, nA), b.add(t);
                            r = setTimeout(C, 3600)
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
            g[5] !== f || g[6] !== y || g[7] !== k || g[8] !== B || g[9] !== C || g[10] !== N ? (a = () => {
                if (z.current.key !== B && (z.current = {
                        key: B,
                        handled: !1,
                        positioned: !1
                    }), null != k && !y && N) return C.watch(e => {
                    !z.current.handled && (0, F.Mb)(e, f, k) && (z.current.handled = !0)
                })
            }, s = [f, y, k, B, C, N], g[5] = f, g[6] = y, g[7] = k, g[8] = B, g[9] = C, g[10] = N, g[11] = a, g[12] = s) : (a = g[11], s = g[12]), (0, b.useLayoutEffect)(a, s), g[13] !== v || g[14] !== k ? (o = null == k ? void 0 : v.find(e => {
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
        var nB = n("u6zN"),
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
            nZ = n("iaTG"),
            nY = n("c3f5"),
            nQ = n("iXTs"),
            n$ = n("xAIC"),
            nJ = n("bf6R"),
            nX = n("CqQF"),
            n0 = n("O666"),
            n1 = n("tNq4"),
            n2 = n("Skaw"),
            n3 = n("PYCG");

        function n4(e) {
            let t, n, s, o, i, l, c, d, u, h, m, g = (0, r.c)(50),
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
                S = (0, p.z)(N.d),
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
                    data: O
                } = (0, p.x)(ek.b, w),
                G = null == w ? null : (0, n2.b)(E ?? null, y ?? A ?? R, O),
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
            g[14] !== W ? (s = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: W
            }, g[14] = W, g[15] = s) : s = g[15];
            let U = (0, p.x)(n0.b, s),
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
            let Z = i,
                Y = z;
            if ("loaded" === S.status && (null == G || "snapshot" === G.type)) {
                let e;
                g[24] !== S.structure || g[25] !== j ? (e = j.formatMessage("workspace" === S.structure ? nm.a.shareWorkspaceTooltip : nm.a.sharePublicTooltip), g[24] = S.structure, g[25] = j, g[26] = e) : e = g[26], Y = e
            }
            let Q = null == H && !B && !0 === V,
                $ = H ?? Y,
                J = null != H || B;
            return g[27] !== B || g[28] !== U ? (l = !B && (U ? (0, a.jsx)(nJ.M, {}) : (0, a.jsx)(nJ.L, {})), g[27] = B, g[28] = U, g[29] = l) : l = g[29], g[30] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(_.a, {
                ...nm.a.headerShare
            }), g[30] = c) : c = g[30], g[31] !== Z || g[32] !== B || g[33] !== z || g[34] !== J || g[35] !== l ? (d = (0, a.jsxs)(eG.a, {
                "aria-label": z,
                color: "toolbar",
                disabled: J,
                loading: B,
                radius: "large",
                size: "toolbar",
                onClick: Z,
                children: [l, c]
            }), g[31] = Z, g[32] = B, g[33] = z, g[34] = J, g[35] = l, g[36] = d) : d = g[36], g[37] !== $ || g[38] !== d || g[39] !== Q ? (u = (0, a.jsx)(nX.a, {
                cloneCustomTrigger: !0,
                disabled: Q,
                tooltipContent: $,
                children: d
            }), g[37] = $, g[38] = d, g[39] = Q, g[40] = u) : u = g[40], g[41] !== f || g[42] !== B || g[43] !== w || g[44] !== H || g[45] !== y ? (h = !1, g[41] = f, g[42] = B, g[43] = w, g[44] = H, g[45] = y, g[46] = h) : h = g[46], g[47] !== u || g[48] !== h ? (m = (0, a.jsxs)(a.Fragment, {
                children: [u, h]
            }), g[47] = u, g[48] = h, g[49] = m) : m = g[49], m
        }(0, eD.a)(async () => () => null);
        var n5 = n("B0Wx"),
            n6 = n("if6d"),
            n8 = n("r2mP"),
            n7 = n("UTM4"),
            n9 = n("dZc6"),
            ae = n("ZhoB"),
            at = n("RADZ"),
            an = n("rZzh"),
            aa = n("FWlV");

        function ar(e) {
            let t, n, s, o, i, l, c, d, u = (0, r.c)(49),
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
            return u[4] !== h.branchingMessageId || u[5] !== h.browserConversationId || u[6] !== h.conversationId || u[7] !== h.feedbackEnabled || u[8] !== h.hasLaterSitesPreview || u[9] !== h.id || u[10] !== h.isMostRecentTurn || u[11] !== h.isReadOnly || u[12] !== h.isTemporaryChat || u[13] !== h.isWorkConversation || u[14] !== h.onEditUserMessage || u[15] !== h.onFork || u[16] !== h.onRegenerateResponse || u[17] !== h.pendingSubmissionAttachments || u[18] !== h.readAloudEnabled || u[19] !== h.referenceImageSuggestionActionInput || u[20] !== h.safetyReview || u[21] !== h.shareEnabled || u[22] !== h.turn || u[23] !== f || u[24] !== x || u[25] !== I ? (s = (0, a.jsx)(n9.a, {
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
            }), u[4] = h.branchingMessageId, u[5] = h.browserConversationId, u[6] = h.conversationId, u[7] = h.feedbackEnabled, u[8] = h.hasLaterSitesPreview, u[9] = h.id, u[10] = h.isMostRecentTurn, u[11] = h.isReadOnly, u[12] = h.isTemporaryChat, u[13] = h.isWorkConversation, u[14] = h.onEditUserMessage, u[15] = h.onFork, u[16] = h.onRegenerateResponse, u[17] = h.pendingSubmissionAttachments, u[18] = h.readAloudEnabled, u[19] = h.referenceImageSuggestionActionInput, u[20] = h.safetyReview, u[21] = h.shareEnabled, u[22] = h.turn, u[23] = f, u[24] = x, u[25] = I, u[26] = s) : s = u[26], u[27] !== h.conversationId || u[28] !== h.isTemporaryChat || u[29] !== h.isWorkConversation || u[30] !== h.paragen || u[31] !== x ? (o = null == h.paragen ? null : (0, a.jsx)(at.a, {
                comparison: h.paragen,
                conversationId: h.conversationId,
                hostId: tC.a,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                trackTaskViews: x
            }, h.paragen.promptMessageId), u[27] = h.conversationId, u[28] = h.isTemporaryChat, u[29] = h.isWorkConversation, u[30] = h.paragen, u[31] = x, u[32] = o) : o = u[32], u[33] !== h.showSharedConversationPrivateDisclaimer ? (i = h.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(e5.a, {
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
                    let n = y.get(F.S, h.conversationId)?.metadata?.errorCode;
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
            }) : null, u[35] = h, u[36] = C, u[37] = y, u[38] = x, u[39] = l) : l = u[39], u[40] !== s || u[41] !== o || u[42] !== i || u[43] !== l ? (c = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [s, o, i, l]
            }), u[40] = s, u[41] = o, u[42] = i, u[43] = l, u[44] = c) : c = u[44], u[45] !== h.id || u[46] !== c || u[47] !== n ? (d = (0, a.jsxs)("div", {
                "data-content-search-turn-key": h.id,
                children: [n, c]
            }), u[45] = h.id, u[46] = c, u[47] = n, u[48] = d) : d = u[48], d
        }

        function as(e) {
            let t, n, s, o = (0, r.c)(8),
                {
                    entries: i,
                    historyLoader: l,
                    isVisible: c
                } = e,
                d = c ? l : null;
            return o[0] !== i ? (t = (0, a.jsx)(n6.a, {
                entries: i,
                preserveMeasuredTurnViewport: !0,
                RowComponent: ao
            }), o[0] = i, o[1] = t) : t = o[1], o[2] !== d || o[3] !== t ? (n = (0, a.jsx)(ei.a, {
                value: null,
                children: (0, a.jsxs)(eT.a, {
                    value: null,
                    children: [d, t]
                })
            }), o[2] = d, o[3] = t, o[4] = n) : n = o[4], o[5] !== c || o[6] !== n ? (s = (0, a.jsx)(tP.a, {
                active: c,
                presentation: "panel",
                children: n
            }), o[5] = c, o[6] = n, o[7] = s) : s = o[7], s
        }

        function ao(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(ar, {
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
                } = (0, I.X)(),
                {
                    gizmoId: C
                } = (0, I.bb)(),
                _ = (0, p.x)(ad, h),
                w = (0, p.x)(F.D, h),
                T = (0, p.x)(F.Q, h),
                j = w ? T : C;
            d[0] !== j ? (t = null != j && (0, al.a)(j) ? j : null, d[0] = j, d[1] = t) : t = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                enabled: !1
            }, d[2] = n) : n = d[2];
            let {
                data: S
            } = (0, p.x)(ek.b, t, n);
            d[3] !== j ? (s = null == j || (0, al.a)(j) ? null : j, d[3] = j, d[4] = s) : s = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (o = {
                enabled: !1
            }, d[5] = o) : o = d[5];
            let {
                data: E
            } = (0, p.x)(ai.b, s, o);
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
                            ...r
                        } = t;
                        a = r, d[25] = t, d[26] = a
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
            return i[8] !== h ? (s = e => {
                let {
                    heightDeltaPx: t
                } = e;
                h?.consumeGrowth(t ?? 0)
            }, i[8] = h, i[9] = s) : s = i[9], i[10] !== d || i[11] !== u || i[12] !== v || i[13] !== n || i[14] !== T || i[15] !== j || i[16] !== S || i[17] !== s ? (o = (0, a.jsx)(n6.a, {
                entries: n,
                getBottomScrollPaddingPx: T,
                layoutReadyTurnKey: j,
                onTurnLayoutReady: S,
                onLatestTurnHeightChange: s,
                onApiChange: d,
                onVisibleContentReady: u,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: v,
                RowComponent: ar
            }), i[10] = d, i[11] = u, i[12] = v, i[13] = n, i[14] = T, i[15] = j, i[16] = S, i[17] = s, i[18] = o) : o = i[18], o
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
            aO = n("mTPq"),
            aN = n("Vcrm"),
            aG = n("MxKj");
        let aB = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(F.Z, e);
            if (!(0, F.yb)(a)) return !0;
            let r = n(F.L, e),
                s = n(F.B, e);
            if (null == r || null == s) return !1;
            let o = r[s]?.message;
            if (null == o || aA.a.has(o.author.role)) return !1;
            let i = n(F.x, e),
                l = (0, aO.c)({
                    mapping: r,
                    current_node: s
                }, n(F.P, e)),
                c = n(F.ab, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(F.j, e) && !(0, aP.e)(n(F.o, e)) && null != c && !n(aE.b).has(c) && null != aL(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });
        async function az(e, t) {
            let {
                conversationId: n,
                isTemporaryChat: a = !1,
                messageId: r,
                prompt: s,
                renderFormat: o,
                inlineSystemHints: i
            } = t;
            if (e.get(ny.i, n)) throw new ak.a("edit_message_busy", "The chat is busy.");
            let l = e.get(F.x, n);
            if ("tpp" === l) throw new ak.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
            if (!e.get(aB, n)) throw new ak.a("edit_message_busy", "The chat is busy.");
            let c = e.get(aM.b, {
                conversationId: n,
                messageId: r
            });
            if (null == c) throw new ak.a("edit_message_target_unavailable", "The user message could not be edited.");
            let {
                selectedModel: d
            } = c, u = s.trim(), h = (0, aM.c)(c.message, e.get, i), p = (0, aG.c)({
                message: c.message,
                prompt: u,
                renderFormat: o,
                systemHints: h,
                inlineSystemHints: i
            }), m = (0, v.f)(p.message.metadata), g = p.message.content, f = "multimodal_text" === g.content_type && g.parts.some(e => "string" != typeof e);
            if (0 === u.length && 0 === m.length && !f) throw new ak.a("edit_message_empty", "The edited message cannot be empty.");
            if (e.get(tj.c, "3574573347")) {
                let t = e.get(aM.a, n);
                t?.messageId === r && t.prompt === s && ap()((0, aM.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(aM.a, n, {
                    messageId: r,
                    prompt: s,
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
                    messageId: r
                }), c) && !(0, F.yb)(e.get(F.Z, n));
            e.set(ny.i, n, !0);
            try {
                if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(aN.a, n) && (await b.stop(), await b.closed), !x()) throw new ak.a("edit_message_target_unavailable", "The edited message or active response changed.");
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
            aU = n("wVX4");

        function aq(e) {
            let t, n, s, o, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, p.y)(eo.a),
                d = (0, C.a)(),
                u = (0, tR.a)(),
                h = (0, p.x)(F.Z, l),
                m = (0, p.x)(F.ab, l),
                g = (0, p.x)(F.v, l),
                f = (0, p.x)(F.$, l),
                v = (0, b.useRef)(null),
                y = (0, b.useRef)(null);
            i[0] !== g || i[1] !== l || i[2] !== d || i[3] !== m || i[4] !== c || i[5] !== h || i[6] !== f ? (t = () => {
                let e = v.current;
                if (null == e) return;
                let t = y.current;
                if ((0, F.yb)(h)) {
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
        var aK = n("OOaz"),
            aV = n("n5iL"),
            aZ = n("q542"),
            aY = n("pDUk"),
            aQ = n("GaCK"),
            a$ = n("Dofq");
        let aJ = (0, eD.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(33944)]).then(n.bind(n, "p8Fu"))).ChatGptThreadSummaryPanelBody, {
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

        function aX(e) {
            let t, n, s, o = (0, r.c)(6);
            o[0] !== e ? ({
                readData: n,
                ...t
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]);
            let i = (0, aZ.b)(),
                [l, c] = (0, b.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), o[3] !== l || o[4] !== t ? (s = null == l ? null : (0, a.jsx)(aJ, {
                ...t,
                data: l.data
            }), o[3] = l, o[4] = t, o[5] = s) : s = o[5], s
        }

        function a0(e) {
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
                f = (0, tT.h)("2903661647"),
                v = f ? "dynamic-isle" : "summary";
            return o[0] !== g || o[1] !== v ? (t = {
                scope: g,
                layout: v
            }, o[0] = g, o[1] = v, o[2] = t) : t = o[2], o[3] !== l || o[4] !== i || o[5] !== f || o[6] !== c || o[7] !== u || o[8] !== m ? (n = (0, a.jsx)(aX, {
                conversationId: i,
                composerActions: l,
                readData: c,
                isUnifiedDynamicIsleEnabled: f,
                showSources: m,
                shouldBlockExternalEgress: u
            }, i), o[3] = l, o[4] = i, o[5] = f, o[6] = c, o[7] = u, o[8] = m, o[9] = n) : n = o[9], o[10] !== d.shouldHideInlineImmediately || o[11] !== d.shouldShow || o[12] !== t || o[13] !== n ? (s = (0, a.jsx)(aZ.a.Root, {
                analytics: t,
                shouldHideInlineImmediately: d.shouldHideInlineImmediately,
                shouldShow: d.shouldShow,
                children: n
            }), o[10] = d.shouldHideInlineImmediately, o[11] = d.shouldShow, o[12] = t, o[13] = n, o[14] = s) : s = o[14], s
        }

        function a1(e) {
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
                I = (0, tT.h)("2903661647"),
                w = (0, p.z)(null == h ? tZ.N : null);
            l[0] !== h?.isOpen || l[1] !== w ? (t = h?.isOpen ?? (0, tZ.z)(w, !0), l[0] = h?.isOpen, l[1] = w, l[2] = t) : t = l[2];
            let T = t,
                j = (0, p.z)(aQ.b),
                S = h?.isOpen ?? j.isPopoverOpen,
                E = (0, p.x)(aV.f, "togglePinnedSummary");
            (0, tM.b)(y), l[3] !== h || l[4] !== y ? (n = () => {
                null != h ? h.onOpenChange(!h.isOpen) : (0, a$.b)(y)
            }, l[3] = h, l[4] = y, l[5] = n) : n = l[5];
            let A = n;
            (0, nu.a)("togglePinnedSummary", A);
            let M = c ? "browser:rounded-lg browser:bg-surface" : void 0;
            return l[6] !== u || l[7] !== x || l[8] !== h || l[9] !== d || l[10] !== _ || l[11] !== T || l[12] !== S || l[13] !== I || l[14] !== j.displayMode || l[15] !== m || l[16] !== y || l[17] !== E || l[18] !== g || l[19] !== v || l[20] !== A ? (s = "overlay" === j.displayMode ? (0, a.jsx)(aY.a, {
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
                        children: (0, a.jsx)(aX, {
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
            }), l[6] = u, l[7] = x, l[8] = h, l[9] = d, l[10] = _, l[11] = T, l[12] = S, l[13] = I, l[14] = j.displayMode, l[15] = m, l[16] = y, l[17] = E, l[18] = g, l[19] = v, l[20] = A, l[21] = s) : s = l[21], l[22] !== M || l[23] !== s ? (o = (0, a.jsx)("div", {
                className: M,
                children: s
            }), l[22] = M, l[23] = s, l[24] = o) : o = l[24], l[25] !== c || l[26] !== o ? (i = (0, a.jsx)(P.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                allowsThreadContentOverlap: c,
                order: 250,
                children: o
            }), l[25] = c, l[26] = o, l[27] = i) : i = l[27], i
        }
        var a2 = n("JjRy"),
            a3 = n.n(a2),
            a4 = n("G4E3"),
            a5 = n("KaH3"),
            a6 = n("Yz3b"),
            a8 = n("ghNX"),
            a7 = n("KvVi"),
            a9 = n("m250"),
            re = n("Ng4B"),
            rt = n("bTKb"),
            rn = n("dGDB"),
            ra = n("lIsV");

        function rr(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        var rs = n("JlMc"),
            ro = n("TUMj"),
            ri = n("f6KK"),
            rl = n("JPXZ"),
            rc = n("zWHk");

        function rd(e) {
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
                if (!u && t && f.current !== g) return (0, rc.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(g) && v()
                })
            }, c[10] = v, c[11] = d, c[12] = u, c[13] = g, c[14] = t, c[15] = s) : s = c[15], c[16] !== d || c[17] !== u || c[18] !== g || c[19] !== t ? (o = [d, u, g, t], c[16] = d, c[17] = u, c[18] = g, c[19] = t, c[20] = o) : o = c[20], (0, b.useLayoutEffect)(s, o), c[21] !== v || c[22] !== d || c[23] !== u || c[24] !== g || c[25] !== t || c[26] !== m ? (i = () => {
                if (!u || !t || f.current === g || (f.current = g, v(), !d.consumeLocationPromptPrefill(g))) return;
                let {
                    view: e
                } = d, n = t.replace(/\r\n/g, "\n"), a = "codex-app" === m ? (0, rl.f)({
                    schema: e.state.schema,
                    text: n,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, rl.e)({
                    schema: e.state.schema,
                    text: n
                }), r = e.state.tr.replaceWith(0, e.state.doc.content.size, a.content);
                r.setSelection(ri.h.atEnd(r.doc)), e.dispatch(r)
            }, c[21] = v, c[22] = d, c[23] = u, c[24] = g, c[25] = t, c[26] = m, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== g || c[31] !== t || c[32] !== m ? (l = [d, u, g, t, m], c[28] = d, c[29] = u, c[30] = g, c[31] = t, c[32] = m, c[33] = l) : l = c[33], (0, b.useLayoutEffect)(i, l), null
        }
        var ru = n("zKCW");

        function rh(e) {
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
            }), l[3] = s) : s = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (o = (0, a.jsx)(eG.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: s
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = o) : o = l[7], l[8] !== n || l[9] !== o ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(ru.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: o
                })
            }), l[8] = n, l[9] = o, l[10] = i) : i = l[10], i
        }
        var rp = n("pgeU");
        let rm = (0, eD.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function rg(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, p.y)(eo.a),
                c = (0, p.x)(rp.a, i);
            return o[0] !== i || o[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(rp.a, i);
                        null != e && (0, rp.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], o[0] = i, o[1] = l, o[2] = t, o[3] = n) : (t = o[2], n = o[3]), (0, b.useEffect)(t, n), o[4] !== i || o[5] !== c ? (s = null == c ? null : (0, a.jsx)(rm, {
                conversationId: i,
                effect: c
            }, c.id), o[4] = i, o[5] = c, o[6] = s) : s = o[6], s
        }
        var rf = n("fr5e"),
            rv = n("LEgg");
        let ry = (0, eD.a)(async () => (await n.e(432800).then(n.bind(n, "T7hR"))).AutomationPlanHeaderShortcut);

        function rb(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, tT.h)("2840857813");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(ry, {
                conversationId: s
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        var rx = n("T33u");
        let rC = (0, eD.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function r_(e) {
            let t, n, s, o = (0, r.c)(10),
                {
                    conversationId: i,
                    scheduledAutomationId: l
                } = e,
                c = (0, p.x)(rx.a, i),
                d = (0, tT.h)("3901104270");
            return o[0] !== i || o[1] !== c ? (t = null == c ? (0, a.jsx)(rb, {
                conversationId: i
            }) : null, o[0] = i, o[1] = c, o[2] = t) : t = o[2], o[3] !== i || o[4] !== d || o[5] !== l ? (n = d && null != l ? (0, a.jsx)(rC, {
                conversationId: i,
                automationId: l
            }) : null, o[3] = i, o[4] = d, o[5] = l, o[6] = n) : n = o[6], o[7] !== t || o[8] !== n ? (s = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), o[7] = t, o[8] = n, o[9] = s) : s = o[9], s
        }
        async function rI() {
            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
        }
        async function rw() {
            return (await n.e(963775).then(n.bind(n, "fUWe"))).openConversationFiles
        }
        var rT = n("Qgfj"),
            rj = n("rmk3"),
            rS = n("f38C"),
            rE = n("MRlq"),
            rP = n("fQbA"),
            rA = n("dDDU"),
            rM = n("soaw"),
            rk = n("ZrYB"),
            rR = n("X6Vn"),
            rO = n("Kwur");
        async function rN(e, t) {
            let a = await rO.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                parameters: {
                    path: {
                        conversation_id: t
                    }
                }
            }).catch(() => null);
            return a?.can_share && 0 !== a.av_sessions.length ? [{
                id: "share-live-session",
                icon: nJ.Ui,
                message: (0, rT.e)({
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
                        (0, rR.f)(e, r, {
                            conversationId: t,
                            sessions: a.av_sessions
                        })
                    })
                }
            }] : []
        }
        var rG = n("MYlA"),
            rB = n("sfmI"),
            rz = n("JCtZ"),
            rL = n("g2p6"),
            rF = n("oaTv"),
            rD = n("PME0"),
            rH = n("lgcP"),
            rW = n("AcSY"),
            rU = n("w7E5"),
            rq = n("QmkR"),
            rK = n("xEXG"),
            rV = n("J6LI"),
            rZ = n("lUUH"),
            rY = n("ftAl");

        function rQ(e) {
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
                } = (0, rW.m)(),
                v = (0, rK.b)();
            return o[0] !== f || o[1] !== l || o[2] !== c || o[3] !== d || o[4] !== u || o[5] !== v || o[6] !== g ? (t = () => {
                let e = g.get(rY.a, l, {
                        enabled: !1
                    }),
                    t = (0, al.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : g.query.getData(ek.b, t);
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
                    } = e, c = (0, al.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(rU.a), u = t.get(rq.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, m = (a?.conversation_origin === "tpp" || a?.conversation_origin === "flora") && ("allowed" === o || h?.pages.some(e => null != e.cursor) === !0), g = t.get(rq.h, n);
                    return null == s || null == a || t.get(rq.g, n) || (0, rV.c)(a, r).sourceUnavailable || null == (0, rV.b)(t, a, g, !1) || null != c && null == r || null == h || 0 === p && !m ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: r0.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, rZ.b)({
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
                    let e = g.get(nL.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await g.query.getOrFetch(nL.chatGptConversationQueryById$, l).catch(rX), null == g.query.getData(nL.chatGptConversationQueryById$, l) && await g.query.getOrFetch(rq.j, [l]).catch(rJ)
                })(), h?.()]);
                let e = g.get(rY.a, l, {
                    enabled: !1
                });
                (0, al.a)(e?.gizmo_id) && e?.gizmo_id != null && await g.query.getOrFetch(ek.b, e.gizmo_id).catch(r$)
            }, o[8] = l, o[9] = h, o[10] = g, o[11] = n) : n = o[11], o[12] !== i || o[13] !== m || o[14] !== t || o[15] !== n ? (s = (0, a.jsx)(rj.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                onOpenChange: m,
                renderItem: rP.b,
                trigger: "click",
                children: i
            }), o[12] = i, o[13] = m, o[14] = t, o[15] = n, o[16] = s) : s = o[16], s
        }

        function r$() {}

        function rJ() {}

        function rX() {}
        let r0 = (0, rT.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}",
                description: "Name of a ChatGPT project offered as a destination for moving a conversation or Work task"
            }
        });

        function r1(e) {
            let t, n, s, o, i, l, c, d, u, h, m, g, f, v, y, x, _, w, T, j = (0, r.c)(70),
                {
                    conversationOrigin: E,
                    conversationId: P,
                    title: A,
                    isHandoffPending: M,
                    isArchived: k,
                    isChatConversation: R,
                    onHandoff: O,
                    onOpenMessage: G,
                    projectId: B,
                    projectName: L,
                    serverConversationId: F
                } = e,
                H = (0, p.y)(D.a),
                W = (0, p.y)(eo.a),
                U = (0, rM.a)(),
                q = (0, tT.k)();
            j[0] !== q ? (t = q.checkGate("224248639"), j[0] = q, j[1] = t) : t = j[1];
            let K = t;
            j[2] !== q ? (n = q.getLayer("3017902351").get("web_file_library_enabled", !1), j[2] = q, j[3] = n) : n = j[3];
            let V = n,
                Z = K || V;
            j[4] !== Z ? (s = {
                enabled: Z
            }, j[4] = Z, j[5] = s) : s = j[5];
            let {
                data: Y
            } = (0, p.z)(rL.p, s), Q = Z && Y?.fileLibraryEnabledForRegistrationCountry !== !1, $ = (0, C.a)(), J = (0, I.Z)(), [X, ee] = (0, b.useState)(null), [et, en] = (0, b.useState)(!1), ea = (0, b.useRef)(null), er = (0, b.useRef)(null);
            j[6] === Symbol.for("react.memo_cache_sentinel") ? (o = [], j[6] = o) : o = j[6];
            let ei = (0, b.useRef)(o);
            j[7] === Symbol.for("react.memo_cache_sentinel") ? (i = {
                name: "chatgpt"
            }, j[7] = i) : i = j[7];
            let {
                isCapable: el
            } = (0, p.x)(z.a, i), ec = (0, p.x)(rq.g, F);
            j[8] === Symbol.for("react.memo_cache_sentinel") ? (l = () => ee("shortcut"), j[8] = l) : l = j[8];
            let ed = R && !ec;
            j[9] !== H || j[10] !== F ? (c = () => (0, rB.a)(H.query.getData(nL.chatGptConversationQueryById$, F), H.get(N.g), H.get(N.f)), j[9] = H, j[10] = F, j[11] = c) : c = j[11], j[12] !== ed || j[13] !== c ? (d = {
                enabled: ed,
                isActive: c
            }, j[12] = ed, j[13] = c, j[14] = d) : d = j[14], (0, nu.a)("deleteChat", l, d), j[15] !== W || j[16] !== ec || j[17] !== J || j[18] !== H || j[19] !== F ? (u = () => {
                !ec && (0, rB.a)(H.query.getData(nL.chatGptConversationQueryById$, F), H.get(N.g), H.get(N.f)) && (ee(null), (0, rH.a)(W, F), J("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, j[15] = W, j[16] = ec, j[17] = J, j[18] = H, j[19] = F, j[20] = u) : u = j[20];
            let eu = u;
            j[21] !== $ ? (h = $.formatMessage(r5.more), j[21] = $, j[22] = h) : h = j[22];
            let eh = h;
            j[23] !== H || j[24] !== F ? (m = async () => {
                let e = [];
                ei.current = e, e.push(...await rN(H, F))
            }, j[23] = H, j[24] = F, j[25] = m) : m = j[25];
            let ep = m;
            j[26] !== P || j[27] !== E || j[28] !== Q || j[29] !== $ || j[30] !== ec || j[31] !== k || j[32] !== M || j[33] !== U || j[34] !== J || j[35] !== O || j[36] !== G || j[37] !== B || j[38] !== L || j[39] !== H || j[40] !== F || j[41] !== q || j[42] !== A ? (g = e => {
                let t = H.get(N.e),
                    n = H.get(N.j),
                    a = (0, rB.a)(H.query.getData(nL.chatGptConversationQueryById$, F), H.get(N.g), H.get(N.f)),
                    r = (0, np.b)(H, F),
                    s = !ec && (0, rB.a)(r, H.get(N.g), H.get(N.f)),
                    o = H.get(S.a).pathname,
                    i = () => U() && o === H.get(S.a).pathname && t === H.get(N.e) && n === H.get(N.j),
                    l = (0, rF.a)(H, P, E, () => (0, rD.a)(J)),
                    c = [];
                return q.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && c.push({
                    id: "chatgpt-audio-summary",
                    message: (0, rT.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary",
                        description: "Opens the dialog for generating and listening to an audio summary of the current chat"
                    }),
                    icon: nJ.kg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        rI().then(e => {
                            i() && e(H, F)
                        }).catch(() => {
                            i() && (ea.current?.focus({
                                preventScroll: !0
                            }), H.get(es.f).danger($.formatMessage({
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
                    message: (0, rT.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat",
                        description: "Opens the side panel listing files referenced in the active saved ChatGPT conversation, even when the list is empty"
                    }),
                    icon: nJ.rb,
                    onSelect: () => {
                        rw().then(e => {
                            i() && e(H, {
                                conversationId: P,
                                serverConversationId: F,
                                onOpenMessage: G
                            })
                        }).catch(() => {
                            i() && H.get(es.f).danger($.formatMessage({
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
                }), c.push(...(0, rA.a)(H)), (0, rz.a)(H, {
                    organizationItems: (0, rP.a)([]),
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
                    canHandoff: null != O,
                    onHandoff: O,
                    projectId: B,
                    projectName: L,
                    onRename: !a || ec || k ? void 0 : () => (0, np.c)(H, P),
                    isPinned: H.get(rq.h, F) ?? r?.is_starred === !0,
                    onTogglePin: s ? () => {
                        let e = (0, np.b)(H, F);
                        !(null == e || H.get(rq.g, F)) && (0, rB.a)(e, H.get(N.g), H.get(N.f)) && (0, rq.V)({
                            scope: H,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(r2)
                    } : void 0,
                    onArchive: !a || ec || k ? void 0 : () => (0, rk.a)(H, F),
                    onUnarchive: a && !ec && k ? () => {
                        (0, rq.W)({
                            scope: H,
                            conversationId: F
                        }).then(() => {
                            H.get(es.f).success($.formatMessage(rE.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            H.get(es.f).danger($.formatMessage(nm.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !a || ec ? void 0 : () => ee("menu")
                })
            }, j[26] = P, j[27] = E, j[28] = Q, j[29] = $, j[30] = ec, j[31] = k, j[32] = M, j[33] = U, j[34] = J, j[35] = O, j[36] = G, j[37] = B, j[38] = L, j[39] = H, j[40] = F, j[41] = q, j[42] = A, j[43] = g) : g = j[43];
            let em = g;
            j[44] !== eh ? (f = (0, a.jsx)(rS.a, {
                ref: ea,
                className: "no-drag",
                color: "primary",
                label: eh,
                size: "toolbar"
            }), j[44] = eh, j[45] = f) : f = j[45], j[46] !== et || j[47] !== eh || j[48] !== f ? (v = (0, a.jsx)(nX.a, {
                cloneCustomTrigger: !0,
                tooltipContent: eh,
                triggerPopupOpen: et,
                children: f
            }), j[46] = et, j[47] = eh, j[48] = f, j[49] = v) : v = j[49];
            let eg = v;
            j[50] !== em || j[51] !== eg || j[52] !== J || j[53] !== el || j[54] !== ep || j[55] !== F ? (y = el ? (0, a.jsx)(rQ, {
                conversationId: F,
                getBaseItems: em,
                menuTriggerRef: ea,
                navigate: J,
                onBeforeOpen: ep,
                onOpenChange: en,
                children: eg
            }) : (0, a.jsx)(rj.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => em(),
                onBeforeOpen: ep,
                onOpenChange: en,
                renderItem: rP.b,
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
            }, j[59] = _) : _ = j[59], j[60] !== eu || j[61] !== ec || j[62] !== ef || j[63] !== ev || j[64] !== x || j[65] !== A ? (w = (0, a.jsx)(rG.a, {
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

        function r2() {}

        function r3() {
            let e, t, n, s = (0, r.c)(8),
                o = (0, C.a)(),
                [i, l] = (0, b.useState)(!1);
            s[0] !== o ? (e = o.formatMessage(r5.more), s[0] = o, s[1] = e) : e = s[1];
            let c = e;
            return s[2] !== c ? (t = (0, a.jsx)(rS.a, {
                className: "no-drag",
                color: "primary",
                label: c,
                size: "toolbar"
            }), s[2] = c, s[3] = t) : t = s[3], s[4] !== i || s[5] !== c || s[6] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rj.a, {
                    preserveBrowserContextMenu: !0,
                    getItems: r4,
                    onOpenChange: l,
                    renderItem: rP.b,
                    trigger: "click",
                    children: (0, a.jsx)(nX.a, {
                        cloneCustomTrigger: !0,
                        tooltipContent: c,
                        triggerPopupOpen: i,
                        children: t
                    })
                })
            }), s[4] = i, s[5] = c, s[6] = t, s[7] = n) : n = s[7], n
        }

        function r4() {
            return (0, rP.a)([])
        }
        let r5 = (0, rT.f)({
            more: {
                id: "chatgpt.conversation.header.control.more.label",
                defaultMessage: "More",
                description: "Short tooltip and accessible label for the icon-only overflow control in the active ChatGPT conversation header. It opens additional actions for the current chat. Sibling header controls include Share. Keep this single word concise and do not add punctuation. No placeholders."
            }
        });
        var r6 = n("DcfK"),
            r8 = n("WLgA");

        function r7(e) {
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
                children: (0, a.jsx)(I.g, {
                    className: "flex h-9 max-w-full min-w-8 shrink cursor-interaction items-center overflow-hidden rounded-lg px-2 text-start text-base text-secondary transition-colors hover:bg-surface-tertiary hover:text-default",
                    to: (0, r8.c)(c.gizmo.id),
                    children: (0, a.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-1.5",
                        children: [(0, a.jsx)(tm.a, {
                            className: "size-5",
                            color: c.gizmo.display.theme,
                            defaultColor: "secondary",
                            fallbackIcon: (0, a.jsx)(nJ.ud, {}),
                            icon: c.gizmo.display.emoji,
                            sharedIcon: "shared" === (0, aU.b)(c) ? (0, a.jsx)(r6.a, {}) : void 0
                        }), (0, a.jsx)("span", {
                            className: "min-w-0 truncate text-default",
                            children: c.gizmo.display.name
                        })]
                    })
                })
            }) : null, o[3] = u, o[4] = c, o[5] = n) : n = o[5], o[6] !== t || o[7] !== m || o[8] !== n ? (s = (0, a.jsx)(P.a.HeaderToolbar, {
                inset: !1,
                children: (0, a.jsx)("div", {
                    className: t,
                    "data-app-shell-thread-content-overlap": m,
                    children: n
                })
            }), o[6] = t, o[7] = m, o[8] = n, o[9] = s) : s = o[9], s
        }
        var r9 = n("dLcZ"),
            se = n("W5pg"),
            st = n("QcW8"),
            sn = n("yC2B");

        function sa(e) {
            let t, n, s, o, i, c, d, u, h, m = (0, r.c)(31),
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
                _ = (0, p.z)(st.Z),
                I = (0, p.z)(st.ab),
                w = (0, C.a)();
            m[0] !== w.locale ? (t = (0, sn.a)(w.locale), m[0] = w.locale, m[1] = t) : t = m[1];
            let T = t,
                j = _?.mode === "split" && "left" === I != ("rtl" === T);
            m[2] !== j || m[3] !== x ? (n = e => j && !x ? e : 0, m[2] = j, m[3] = x, m[4] = n) : n = m[4];
            let S = (0, se.a)(b, n);
            m[5] !== S || m[6] !== y ? (s = [y, S], m[5] = S, m[6] = y, m[7] = s) : s = m[7];
            let E = (0, se.a)(s, sr);
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

        function sr(e) {
            let [t, n] = e;
            return `${Math.max(0,t-n)}px`
        }
        var ss = n("X0li");
        let so = (0, eD.a)(ss.c),
            si = (0, eD.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            sl = (0, eD.a)(async () => (await n.e(286760).then(n.bind(n, "R4DB"))).SectionNavigation);
        var sc = n("lX86");
        n("i1of");
        var sd = n("alJ6"),
            su = n("u9iS"),
            sh = n("KidQ");
        let sp = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function sm(e) {
            let t, n, s, o, i, l = (0, r.c)(15),
                {
                    children: c,
                    draftKey: d,
                    enableInlineSystemHints: u
                } = e,
                h = (0, p.y)(eo.a),
                m = (0, b.useContext)(eZ.a),
                g = u ? "chatgpt" : void 0;
            return l[0] !== u || l[1] !== g ? (t = {
                enableInlineSystemHints: u,
                variant: g
            }, l[0] = u, l[1] = g, l[2] = t) : t = l[2], l[3] !== d || l[4] !== h ? (n = () => ({
                defaultText: h.get(ny.s, d),
                defaultTextKind: "prompt"
            }), l[3] = d, l[4] = h, l[5] = n) : n = l[5], l[6] !== m ? (s = () => {
                let e = m?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == m ? null : {
                    element: e,
                    locationKey: m.locationKey
                }
            }, l[6] = m, l[7] = s) : s = l[7], l[8] !== c ? (o = e => null == e ? null : c(e), l[8] = c, l[9] = o) : o = l[9], l[10] !== t || l[11] !== n || l[12] !== s || l[13] !== o ? (i = (0, a.jsx)(sh.a, {
                controllerOptions: sp,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: s,
                children: o
            }), l[10] = t, l[11] = n, l[12] = s, l[13] = o, l[14] = i) : i = l[14], i
        }
        var sg = n("ygKd"),
            sf = n("KSir"),
            sv = n("vVgo");
        let sy = (0, eD.a)(async () => (await n.e(642007).then(n.bind(n, "KhUL"))).CourseHeaderShortcut);

        function sb(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, tT.h)("4035922817");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(sy, {
                    conversationId: s
                })
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        var sx = n("QPeR"),
            sC = n("MgyE"),
            s_ = n("gyrn"),
            sI = n("wnpN"),
            sw = n("M3Kf");

        function sT(e) {
            let t, n, s, i, l, c, d = (0, r.c)(21),
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
                    await (0, eI.a)(h, m, n)
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
        var sj = n("ckwE");

        function sS(e) {
            let t, n = (0, r.c)(3),
                {
                    children: s
                } = e,
                [o] = (0, b.useState)(sE);
            return n[0] !== o || n[1] !== s ? (t = (0, a.jsx)(eT.a, {
                value: o,
                children: s
            }), n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }

        function sE() {
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

        function sP(e) {
            let t, n = (0, r.c)(2),
                {
                    children: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(sj.a, {
                children: (0, a.jsx)(sS, {
                    children: s
                })
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var sA = n("MDmT"),
            sM = n("K45w"),
            sk = n("jCHb"),
            sR = n("V8uZ");

        function sO(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var sN = n("NqfB"),
            sG = n("JEFL"),
            sB = n("moBM");
        let sz = '[data-markdown-text-style="assistant-message"]',
            sL = (0, p.d)(eo.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(F.L, n)?.[a]?.message ?? null
            });

        function sF(e) {
            let t, n, s = (0, r.c)(5),
                o = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return s[0] !== e ? (t = t => (0, a.jsx)(sD, {
                ...e,
                selection: t
            }), s[0] = e, s[1] = t) : t = s[1], s[2] !== o || s[3] !== t ? (n = (0, a.jsx)(sN.a, {
                align: "start",
                targetSelector: o,
                children: t
            }), s[2] = o, s[3] = t, s[4] = n) : n = s[4], n
        }

        function sD(e) {
            let t, s, o, i, l, c, d, u = (0, r.c)(30),
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
                _ = (0, p.z)(sB.a),
                I = (0, p.x)(F.x, h);
            u[0] !== I || u[1] !== _ || u[2] !== v ? (t = _ && "tpp" === I && "chatgpt-thread" === v.value.routeKind && null == v.value.workSideChat && !0, u[0] = I, u[1] = _, u[2] = v, u[3] = t) : t = u[3];
            let w = t;
            u[4] !== h || u[5] !== f.selectionRange ? (s = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, s = a?.closest(sz);
                if (n.collapsed || null == s || !s.isConnected || s !== r?.closest(sz)) return null;
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
            let S = (0, p.x)(sL, o),
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
                    for (let r of nR(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(T.markdownElement, f.selectionRange, e))
            } : void 0, u[13] = P, u[14] = x, u[15] = g, u[16] = f.selectionRange, u[17] = T, u[18] = l) : l = u[18], u[19] !== P || u[20] !== h || u[21] !== y || u[22] !== v || u[23] !== T ? (c = P ? e => {
                Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(753405), n.e(585419), n.e(877700), n.e(636463), n.e(669998), n.e(565013), n.e(62441), n.e(242986), n.e(886364), n.e(16212), n.e(741494), n.e(664118)]).then(n.bind(n, "zRlR")).then(t => {
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
            } : void 0, u[19] = P, u[20] = h, u[21] = y, u[22] = v, u[23] = T, u[24] = c) : c = u[24], u[25] !== f.selectedText || u[26] !== i || u[27] !== l || u[28] !== c ? (d = (0, a.jsx)(sG.a, {
                conversationTerminology: "chat",
                selectedText: f.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), u[25] = f.selectedText, u[26] = i, u[27] = l, u[28] = c, u[29] = d) : d = u[29], d
        }
        var sH = n("Fjze");

        function sW(e) {
            let t, n, a, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = e,
                i = (0, p.y)(eo.a),
                l = null != o;
            s[0] !== i || s[1] !== o ? (t = () => {
                null != o && (rO.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: o
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(sU), (0, ed.a)(i, sH.a, {
                    sharedConversationId: o
                }))
            }, s[0] = i, s[1] = o, s[2] = t) : t = s[2];
            let c = (0, b.useEffectEvent)(t);
            return s[3] !== c ? (n = () => {
                c()
            }, s[3] = c, s[4] = n) : n = s[4], s[5] !== l ? (a = [l], s[5] = l, s[6] = a) : a = s[6], (0, b.useEffect)(n, a), null
        }

        function sU() {}
        var sq = n("GigQ"),
            sK = n("JKdL"),
            sV = n("gsAl"),
            sZ = n("HOLv"),
            sY = n("FGv0"),
            sQ = n("r9i9"),
            s$ = n("vlt6"),
            sJ = n("SEBt"),
            sX = n("uQqo"),
            s0 = n("VMtI");

        function s1(e) {
            let t, n, s, o, i, l = (0, r.c)(12),
                {
                    data: c
                } = e,
                d = (0, p.y)(eo.a),
                u = (0, C.a)();
            l[0] !== u ? (t = u.formatMessage(nm.a.headerShare), l[0] = u, l[1] = t) : t = l[1];
            let h = t,
                [m, g] = (0, b.useState)(!1);
            return l[2] !== c || l[3] !== m || l[4] !== d ? (n = () => {
                m || (g(!0), s2(d, c).finally(() => g(!1)))
            }, l[2] = c, l[3] = m, l[4] = d, l[5] = n) : n = l[5], l[6] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(sZ.a, {
                asset: s0.a
            }), o = (0, a.jsx)(_.a, {
                ...nm.a.headerShare
            }), l[6] = s, l[7] = o) : (s = l[6], o = l[7]), l[8] !== m || l[9] !== h || l[10] !== n ? (i = (0, a.jsxs)(eG.a, {
                "aria-label": h,
                color: "ghostActive",
                loading: m,
                size: "toolbar",
                onClick: n,
                children: [s, o]
            }), l[8] = m, l[9] = h, l[10] = n, l[11] = i) : i = l[11], i
        }
        async function s2(e, t) {
            let a = t.sharedPost,
                r = a?.attachments[0]?.kind === "media_generation" ? (0, sX.a)(a, (0, sX.b)(a))[0] : null,
                s = crypto.randomUUID();
            (0, sJ.b)(e, {
                attachmentType: t.attachmentType,
                contentType: t.contentType,
                shareId: t.shareId,
                shareSessionId: s
            });
            let o = t.dialogProps.receiverShareLink;
            if (o?.contentType === "conversation") {
                let a = (0, sJ.a)(e, {
                        actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                        shareId: t.shareId,
                        shareSessionId: s,
                        source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                        usedExistingLink: !0,
                        omitSheetType: !0
                    }),
                    r = await (0, sY.a)(Promise.resolve(o.shareLinkUrl));
                if (a({
                        result: r ? "link-copied" : "copy-failed",
                        shareId: t.shareId
                    }), r) {
                    let {
                        showConversationShareCopiedToast: t
                    } = await n.e(555532).then(n.bind(n, "euaP"));
                    t(e, null, !0 === o.isWorkspaceOnly)
                } else(0, rR.f)(e, s$.a, {
                    ...t.dialogProps,
                    recoveryShareLink: o,
                    shareSessionId: s
                });
                return
            }(0, rR.f)(e, s$.a, {
                ...t.dialogProps,
                image: r?.src == null ? void 0 : {
                    alt: t.dialogProps.title ?? "",
                    item: r,
                    previewSrc: r.src
                },
                previewTurns: null != r ? void 0 : (0, sQ.i)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId),
                privacyNotices: (0, sQ.j)({
                    conversation: t.conversation,
                    projectId: null
                }),
                shareSessionId: s
            })
        }
        var s3 = n("JUxu");
        let s4 = (0, b.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function s5(e) {
            let t, n, s, o, i = (0, r.c)(8),
                {
                    sharedConversationId: l
                } = e,
                c = (0, p.y)(eo.a);
            if (null != (0, p.x)(sV.d, (0, b.useContext)(O.a))) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s3.a, {}), i[0] = e) : e = i[0], e
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
                (0, rR.f)(c, s4, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, sJ.c)(c, l)
            }, i[2] = c, i[3] = l, i[4] = n) : n = i[4], i[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(_.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation",
                description: "Button above a shared ChatGPT conversation in Codex Desktop that opens ChatGPT's report modal for reporting another person's shared conversation"
            }), i[5] = s) : s = i[5], i[6] !== n ? (o = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(eG.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: s
                })]
            }), i[6] = n, i[7] = o) : o = i[7], o
        }
        var s6 = n("zbjM"),
            s8 = n("Xslx"),
            s7 = n("MVHH"),
            s9 = n("xSOA"),
            oe = n("rhKI"),
            ot = n("PP3M"),
            on = n("CFOe"),
            oa = n("JNtf"),
            or = n("mUDD");

        function os(e) {
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
            let I = !y;
            f[4] !== v || f[5] !== C ? (s = e => {
                e.preventDefault(), v && C()
            }, f[4] = v, f[5] = C, f[6] = s) : s = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(oa.e, {
                children: (0, a.jsx)(_.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?",
                    description: "Title of the confirmation dialog for converting a temporary ChatGPT conversation into a regular saved chat."
                })
            }), f[7] = o) : o = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(or.e, {
                children: (0, a.jsx)(or.d, {
                    className: "select-none",
                    title: o,
                    subtitle: (0, a.jsx)(oa.d, {
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
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== s ? (m = (0, a.jsxs)(or.b, {
                as: "form",
                onSubmit: s,
                children: [i, p]
            }), f[23] = p, f[24] = s, f[25] = m) : m = f[25], f[26] !== y || f[27] !== m || f[28] !== n || f[29] !== I ? (g = (0, a.jsx)(oa.b, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: I,
                size: "narrow",
                children: m
            }), f[26] = y, f[27] = m, f[28] = n, f[29] = I, f[30] = g) : g = f[30], g
        }

        function oo(e) {
            (0, nL.e)(e).catch(() => {
                t6.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function oi(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(ol, {
                        conversationId: s
                    })
                })]
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function ol(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return (0, p.z)(ot.e) ? (n[0] !== s ? (t = (0, a.jsx)(oc, {
                conversationId: s
            }), n[0] = s, n[1] = t) : t = n[1], t) : null
        }

        function oc(e) {
            let t, n, s, o, i, l, c, d, u, h, m, g, f, v = (0, r.c)(49),
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
                O = (0, b.useRef)(!1),
                N = (0, p.z)(rL.p).data,
                G = (0, p.x)(F.j, y),
                B = (0, p.x)(F.V, y),
                z = (0, p.x)(F.H, y),
                L = (0, p.x)(ny.i, y);
            v[0] !== y || v[1] !== x ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (x.get(F.H, y) || x.get(ny.i, y) || t !== x.get(F.j, y) || n !== x.get(F.V, y)) throw Error("Cannot save an unavailable temporary chat message");
                    return rO.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: om
                    }).then(op)
                },
                retry: oh
            }, v[0] = y, v[1] = x, v[2] = t) : t = v[2];
            let {
                mutateAsync: D,
                isPending: H
            } = (0, s9.a)(t), W = null != G && null != B && !z && !L && !H && !E;
            v[3] !== w ? (n = w.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat",
                description: "Tooltip and accessible label for the bookmark button in a temporary ChatGPT conversation. Opens a confirmation dialog to save it to regular history."
            }), v[3] = w, v[4] = n) : n = v[4];
            let U = n;
            v[5] !== N?.eligibleAnnouncements ? (s = N?.eligibleAnnouncements?.includes(rL.h), v[5] = N?.eligibleAnnouncements, v[6] = s) : s = v[6];
            let q = !0 === s,
                K = !k && (A || q && W);
            v[7] !== y || v[8] !== A || v[9] !== x || v[10] !== K ? (o = () => {
                if (!K || A || O.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || O.current || (O.current = !0, (0, ed.a)(x, s7.ub, {
                        personalizationMode: (0, oe.a)((0, ot.k)(x, y))
                    }), M(!0), oo(x))
                }), () => {
                    e = !0
                }
            }, i = [y, A, x, K], v[7] = y, v[8] = A, v[9] = x, v[10] = K, v[11] = o, v[12] = i) : (o = v[11], i = v[12]), (0, b.useEffect)(o, i), v[13] !== x ? (l = () => {
                R(!0), O.current || (O.current = !0, oo(x))
            }, v[13] = x, v[14] = l) : l = v[14];
            let V = l;
            v[15] !== W || v[16] !== y || v[17] !== w || v[18] !== T || v[19] !== D || v[20] !== x || v[21] !== B || v[22] !== G ? (c = async function() {
                let e;
                if (!W || null == G || null == B) return;
                let t = (0, oe.a)((0, ot.k)(x, y));
                (0, ed.a)(x, s7.vb, {
                    personalizationMode: t
                });
                try {
                    e = (await D({
                        sourceConversationId: G,
                        selectedLeafId: B
                    })).conversation_id
                } catch (e) {
                    (0, ed.a)(x, s7.wb, {
                        personalizationMode: t,
                        failureCategory: (0, oe.b)(e)
                    }), x.get(es.f).danger(w.formatMessage({
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
                P(!0), S(!1), (0, rq.H)(x), (0, rq.K)(x, G, "remove"), (0, rq.K)(x, e, "refresh"), T((0, ac.c)(e), {
                    replace: !0
                }), x.get(es.f).success(w.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history.",
                    description: "Success toast confirming that a formerly temporary ChatGPT conversation is now saved in regular history."
                })), rO.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: B
                    }
                }).then(ou).then(t => {
                    (0, F.Zb)({
                        scope: x,
                        conversationId: e,
                        title: t
                    }), x.query.setData(nL.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, rq.H)(x), (0, rq.K)(x, e, "refresh")
                }).catch(od)
            }, v[15] = W, v[16] = y, v[17] = w, v[18] = T, v[19] = D, v[20] = x, v[21] = B, v[22] = G, v[23] = c) : c = v[23];
            let Z = c,
                Y = !W;
            v[24] !== y || v[25] !== x || v[26] !== K ? (d = () => {
                (0, ed.a)(x, s7.yb, {
                    personalizationMode: (0, oe.a)((0, ot.k)(x, y)),
                    coachMarkVisible: K
                }), S(!0)
            }, v[24] = y, v[25] = x, v[26] = K, v[27] = d) : d = v[27], v[28] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(e5.b, {
                icon: {
                    16: nJ.pb,
                    20: nJ.qb
                }
            }), v[28] = u) : u = v[28], v[29] !== U || v[30] !== Y || v[31] !== d ? (h = (0, a.jsx)(eG.a, {
                "aria-label": U,
                color: "toolbar",
                disabled: Y,
                size: "toolbar",
                uniform: !0,
                onClick: d,
                children: u
            }), v[29] = U, v[30] = Y, v[31] = d, v[32] = h) : h = v[32];
            let Q = h;
            return v[33] !== V || v[34] !== w || v[35] !== U || v[36] !== Q || v[37] !== K ? (m = K ? (0, a.jsx)(on.a, {
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
                children: Q
            }) : (0, a.jsx)(nX.a, {
                tooltipContent: U,
                children: Q
            }), v[33] = V, v[34] = w, v[35] = U, v[36] = Q, v[37] = K, v[38] = m) : m = v[38], v[39] !== W || v[40] !== y || v[41] !== Z || v[42] !== j || v[43] !== H || v[44] !== x ? (g = j ? (0, a.jsx)(os, {
                canSave: W,
                isPending: H,
                onCancel: () => {
                    (0, ed.a)(x, s7.tb, {
                        personalizationMode: (0, oe.a)((0, ot.k)(x, y))
                    })
                },
                onClose: () => S(!1),
                onSave: () => void Z()
            }) : null, v[39] = W, v[40] = y, v[41] = Z, v[42] = j, v[43] = H, v[44] = x, v[45] = g) : g = v[45], v[46] !== m || v[47] !== g ? (f = (0, a.jsxs)(a.Fragment, {
                children: [m, g]
            }), v[46] = m, v[47] = g, v[48] = f) : f = v[48], f
        }

        function od() {}

        function ou(e) {
            return nb.object({
                title: nb.string()
            }).parse(e).title
        }

        function oh(e, t) {
            return e < 1 && t instanceof tz.a && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function op(e) {
            return nb.object({
                conversation_id: nb.string().min(1)
            }).parse(e)
        }

        function om(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var og = n("Sd4O");
        let of = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(og.a, e);
            return null != a && n(H.b, a).data?.automation.plan_type === "language_learning"
        });
        var ov = n("Nhfz"),
            oy = n("J8FU"),
            ob = n("vpdG"),
            ox = n("OiCI"),
            oC = n("Sd8U"),
            o_ = n("FNgK"),
            oI = n("nD1x");

        function ow(e) {
            let t, n, a = (0, r.c)(6),
                {
                    conversationId: s,
                    shouldBlockExternalEgress: o,
                    widgets: i
                } = e,
                l = (0, p.y)(oC.a);
            return a[0] !== s || a[1] !== l || a[2] !== o || a[3] !== i ? (t = () => {
                let e = new Map(i.map(e => [(0, ax.e)(s, e.messageId), e]));
                return l.watch(t => {
                    let {
                        get: n
                    } = t, a = n(ox.b), r = n(N.j);
                    for (let t of n(am.k).keys()) {
                        let i = e.get(t);
                        if (null == i) continue;
                        let c = !0 === i.metadata.is_widget_closed || n(oI.a, {
                                accountId: a,
                                userId: r,
                                conversationId: s,
                                messageId: i.messageId
                            }),
                            d = "hidden" === i.sessionPresentation,
                            u = "tombstone" === i.sessionPresentation,
                            h = i.replacementMessageId;
                        if (o || c || !d && !u || null == h || n(oI.a, {
                                accountId: a,
                                userId: r,
                                conversationId: s,
                                messageId: h
                            }) || (0, o_.b)(l, t, (0, ax.e)(s, h)), c || d) {
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
            }, n = [s, l, o, i], a[0] = s, a[1] = l, a[2] = o, a[3] = i, a[4] = t, a[5] = n) : (t = a[4], n = a[5]), (0, b.useLayoutEffect)(t, n), null
        }
        var oT = n("JVSG"),
            oj = {
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
            oS = n("lMjI");
        let oE = (0, p.v)(eo.a, e => null);

        function oP() {
            let e, t, n, s, o, i, l, c, d, u, h, m = (0, r.c)(30),
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
            m[1] !== b || m[2] !== f ? (e = b ?? (0, aK.d)(f), m[1] = b, m[2] = f, m[3] = e) : e = m[3];
            let C = e;
            m[4] !== v ? (t = (0, ac.f)(v), m[4] = v, m[5] = t) : t = m[5];
            let _ = t;
            m[6] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(T.a, {}), s = (0, a.jsx)(e0.a.Surface, {}), m[6] = n, m[7] = s) : (n = m[6], s = m[7]), m[8] !== x ? (o = null, m[8] = x, m[9] = o) : o = m[9], m[10] !== C || m[11] !== x || m[12] !== _ ? (i = _ || x ? null : (0, a.jsx)(nf, {
                conversationId: C
            }), m[10] = C, m[11] = x, m[12] = _, m[13] = i) : i = m[13];
            let w = `${C}:${_}`;
            m[14] === Symbol.for("react.memo_cache_sentinel") ? (l = void 0, m[14] = l) : l = m[14], m[15] !== C || m[16] !== x || m[17] !== _ || m[18] !== w || m[19] !== g ? (c = (0, a.jsx)(oM, {
                conversationId: C,
                viewActivation: g,
                isArchivedPreview: x,
                isReadOnlyPreview: !1,
                banner: l,
                isTemporaryChat: _,
                sharedConversationId: null
            }, w), m[15] = C, m[16] = x, m[17] = _, m[18] = w, m[19] = g, m[20] = c) : c = m[20], m[21] !== o || m[22] !== i || m[23] !== c ? (d = (0, a.jsxs)(a.Fragment, {
                children: [n, s, o, i, c]
            }), m[21] = o, m[22] = i, m[23] = c, m[24] = d) : d = m[24];
            let j = d;
            return m[25] !== j ? (u = j, m[25] = j, m[26] = u) : u = m[26], m[27] !== C || m[28] !== u ? (h = (0, a.jsx)(au, {
                conversationId: C,
                children: u
            }), m[27] = C, m[28] = u, m[29] = h) : h = m[29], h
        }

        function oA() {
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
            s[1] !== o ? (e = (0, aK.d)(o), s[1] = o, s[2] = e) : e = s[2];
            let i = e;
            return s[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(e0.a.Surface, {}), s[3] = t) : t = s[3], s[4] !== i || s[5] !== o ? (n = (0, a.jsxs)(a.Fragment, {
                children: [t, (0, a.jsx)(oM, {
                    conversationId: i,
                    isTemporaryChat: !1,
                    sharedConversationId: o
                }, o)]
            }), s[4] = i, s[5] = o, s[6] = n) : n = s[6], n
        }

        function oM(e) {
            let t, n, i, l, c, d, u, x, _, T, k, R, z, L, H, W, U, q, K, V, Z, Y, Q, $, J, ea, er, eo, ei, el, ec, eu, eh, ep, em, eg, ef, ev, ey, eb, eC, e_, eI, ew, eT, ej, eS, eE, eP, eA, eG, eB, ez, eL, eF, eD, eH, eW, eU, eq, eK, eZ, eJ, eX, e0, e1, e2, e3, e4, tt, tn, ta, tr, ts, tv, tb, tw, tP, tO, tB, nl, nd, nu, nh, np = (0, r.c)(627),
                {
                    conversationId: nm,
                    viewActivation: ng,
                    isArchivedPreview: nf,
                    isInlinePreview: nb,
                    hideModelPicker: nx,
                    disableAutoFocus: nC,
                    hideInitialUserMessage: n_,
                    transcriptPresentation: nI,
                    scrollOrigin: nw,
                    isReadOnlyPreview: nT,
                    onSubmitAccepted: nj,
                    isTemporaryChat: nS,
                    sharedConversationId: nE,
                    sharedPostContinuation: nP,
                    requiredSystemHints: nA,
                    routePattern: nM,
                    composerLeadingContent: nk,
                    header: nR,
                    banner: nO,
                    onRetryMissingConversation: nN,
                    sharedProjectConversation: nG,
                    workspace: nD
                } = e,
                nW = void 0 === ng ? 0 : ng,
                nU = void 0 !== nf && nf,
                nq = void 0 !== nb && nb,
                nK = (0, p.y)(D.a),
                nV = (0, b.useContext)(O.a),
                nZ = (0, p.x)(sV.d, nV),
                nY = (0, p.z)(B.a),
                nQ = void 0 !== nP && nP && nY && null != nZ && (0, sV.b)(nZ) && (nZ.web_image_attachments?.length ?? 0) > 0;
            np[0] !== nV || np[1] !== nm ? (t = {
                auth: nV,
                conversationId: nm
            }, np[0] = nV, np[1] = nm, np[2] = t) : t = np[2];
            let n$ = (0, p.x)(null != nV && !nV.isLoading && null === nV.authMethod && sV.f, t),
                {
                    conversationId: nJ
                } = (0, I.bb)();
            np[3] !== nm || np[4] !== nq || np[5] !== nJ || np[6] !== nK || np[7] !== nD ? (n = () => (0, aK.e)(nq || null != nD || null == nK.get(F.j, nm) ? nm : nJ ?? ""), np[3] = nm, np[4] = nq, np[5] = nJ, np[6] = nK, np[7] = nD, np[8] = n) : n = np[8];
            let [nX, n0] = (0, b.useState)(n);
            np[9] !== nX || np[10] !== nm ? (i = () => nX ? nm : null, np[9] = nX, np[10] = nm, np[11] = i) : i = np[11];
            let [n2] = (0, b.useState)(i), n3 = null != nE || null != nZ && !nQ;
            np[12] !== nm || np[13] !== nU || np[14] !== nq || np[15] !== n3 || np[16] !== nK ? (c = () => {
                if (!n3 && !nU && !nq) return function(e, t) {
                    let n = e.get(nt.a, t) ?? t,
                        a = e.get(et.b, t),
                        r = e.get(no, n),
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
                        i = e.get(tZ.i),
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
                        } = n, r = a(F.Z, t), s = a(tZ.i), u = a(F.$, t);
                        if ((0, F.yb)(r)) {
                            l = !1;
                            let e = a(et.b, t),
                                n = a(F.ab, t),
                                r = !o.observedTurn || o.attemptId !== e;
                            if (o.attemptId = e, r) {
                                let e = c;
                                c = null, e?.abort(), o.observedTurn = !0, o.activeRequestId = n, o.dismissed = u, o.openedCreatedPage = !1
                            } else o.activeRequestId = n ?? o.activeRequestId, o.dismissed = o.dismissed || u || i && !s;
                            i = s;
                            let h = !u && !o.dismissed && !s && !o.openedCreatedPage && !a(D.h) && !a(F.C, t) && !a(na.d, t),
                                p = [];
                            if ((r || h) && (p = a(F.O, t) ?? []), r) {
                                o.initialCreationMessageIds = new Set(p.map(e => e.messageId));
                                return
                            }
                            h && d(p);
                            return
                        }
                        if (!o.observedTurn) return;
                        let h = a(F.v, t);
                        if ("idle" !== r || u || null != h && "completed" !== h.result || null != e.get(F.C, t) || e.get(D.h) || e.get(na.d, t)) {
                            o.observedTurn = !1;
                            return
                        }
                        if (l) {
                            if (o.dismissed || s || o.openedCreatedPage || a(et.b, t) !== o.attemptId) {
                                o.observedTurn = !1;
                                return
                            }
                            if (h?.result !== "completed") return;
                            d(a(F.O, t) ?? []), o.observedTurn = !o.openedCreatedPage;
                            return
                        }
                        if (o.observedTurn = !1, h?.result !== "completed" || h.requestId !== o.activeRequestId) return;
                        let p = e.get(F.L, t);
                        if (null == p) return;
                        let m = (0, g.b)({
                                mapping: p,
                                current_node: e.get(F.B, t)
                            }),
                            f = m.findLast(ns.b);
                        if (f?.status !== "finished_successfully") return;
                        let v = [...(0, nn.e)(m).outputs, ...m.flatMap(e => (0, nn.c)(e).map(e => e.file))],
                            y = e.get(t7.a, t)?.at(-1);
                        if (y?.turn.status !== "complete") return;
                        let b = [...(0, tQ.a)(m), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, tY.a)(e, b, !o.dismissed) || !o.dismissed && !o.openedCreatedPage && (0, t4.a)(e, b)) && !o.dismissed && !s && !o.openedCreatedPage) {
                            for (let t of (0, t2.c)((0, g.d)(f)).toReversed())
                                if ((0, t3.openSpacePageSidePanelTab)(e, t.id, {
                                        blockId: t.blockId
                                    }).opened) return;
                            if ((0, nr.canOpenChatGptFilePreview)({
                                    browserPreview: !0
                                })) {
                                for (let n of y.turn.items)
                                    if ("assistant-message" === n.type && n.completed)
                                        for (let [a, r] of n.contentReferences.entries()) {
                                            let s = (0, t9.a)(r),
                                                o = null == s ? null : (0, t$.a)(s),
                                                i = v.find(e => null != e.fileId && e.fileId === (r.file_id ?? r.id) || null != e.libraryFileId && e.libraryFileId === r.library_file_id);
                                            if ("file" !== r.type || !(0, tV.a)(r) || null == s || null == o || !(0, t$.e)(o) || null == i && null == (0, ne.b)(r.sandbox_path) && !(0, ne.b)(r.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > t0.a) continue;
                                            let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                d = (0, t8.b)(r, {
                                                    fileName: s,
                                                    messageId: l
                                                });
                                            if (null == d) continue;
                                            if (e.get(tj.e)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let u = e.get(F.j, t) ?? t,
                                                h = `${l??"message"}:${String(a)}:${s}`,
                                                p = `chatgpt-file:${u}:${h}`,
                                                g = {
                                                    turnId: y.id,
                                                    inputMessageId: m.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: l ?? null
                                                },
                                                f = new AbortController,
                                                b = (0, nr.openChatGptFile)(e, {
                                                    conversationId: u,
                                                    fileName: s,
                                                    gizmoId: e.get(F.Q, t),
                                                    sharedConversationId: e.get(F.X, t),
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
                                                            fileExtension: (0, tX.c)(s) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, ed.a)(e, tK.CodexWorkspaceFilePreviewAttempted, (0, t1.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: g,
                                                            path: s,
                                                            threadId: u,
                                                            windowType: "browser"
                                                        })), (0, t5.b)(e, p, "auto_open"))
                                                    },
                                                    onClose: () => f.abort()
                                                });
                                            c = f;
                                            let x = e.watch(e => {
                                                let {
                                                    get: n
                                                } = e;
                                                (n(tZ.i) && n(M.j.activeTab$)?.tabId !== p || n(na.d, t)) && f.abort()
                                            });
                                            b.catch(e => {
                                                f.signal.aborted || t6.a.debug("Automatic ChatGPT artifact preview could not open", {
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
                }(nK, nm)
            }, l = [nm, nU, nq, n3, nK], np[12] = nm, np[13] = nU, np[14] = nq, np[15] = n3, np[16] = nK, np[17] = l, np[18] = c) : (l = np[17], c = np[18]), (0, b.useEffect)(c, l);
            let n6 = (0, p.x)(aN.a, nm),
                n8 = n3 ? null : n6;
            np[19] !== nE ? (d = () => null == nE ? null : (0, aK.b)(), np[19] = nE, np[20] = d) : d = np[20];
            let [n7] = (0, b.useState)(d), n9 = n7 ?? nm;
            np[21] !== n9 ? (u = (0, tx.n)({
                routeKind: "chatgpt-thread",
                conversationId: n9
            }), np[21] = n9, np[22] = u) : u = np[22];
            let at = null != (0, p.x)(ti.c, u);
            np[23] !== n9 || np[24] !== nA || np[25] !== nK ? (x = () => {
                if (null != nA && 0 !== nA.length) return (0, s8.b)(nK, n9, nA)
            }, _ = [n9, nA, nK], np[23] = n9, np[24] = nA, np[25] = nK, np[26] = x, np[27] = _) : (x = np[26], _ = np[27]), (0, b.useEffect)(x, _);
            let aa = (0, b.useRef)(null),
                [ar, as] = (0, b.useState)(null),
                [ao, ai] = (0, b.useState)(null),
                [ad, au] = (0, b.useState)(null),
                ah = ao?.activation === nW ? ao.messageId : null,
                ap = ad === nW,
                am = (0, b.useRef)(null);
            np[28] === Symbol.for("react.memo_cache_sentinel") ? (T = () => {
                let e = new AbortController;
                return am.current = e, () => e.abort()
            }, np[28] = T) : T = np[28], np[29] !== nW ? (k = [nW], np[29] = nW, np[30] = k) : k = np[30], (0, b.useLayoutEffect)(T, k);
            let ag = (0, C.a)(),
                af = (0, I.Z)(),
                av = (0, tN.b)(),
                ay = (0, p.x)(F.j, nm);
            np[31] !== nK ? (R = e => {
                (0, ni.c)(nK, e)
            }, np[31] = nK, np[32] = R) : R = np[32];
            let ab = (0, b.useEffectEvent)(R);
            np[33] !== ay || np[34] !== ab ? (z = () => () => {
                null != ay && ab(ay)
            }, np[33] = ay, np[34] = ab, np[35] = z) : z = np[35], np[36] !== ay ? (L = [ay], np[36] = ay, np[37] = L) : L = np[37], (0, b.useEffect)(z, L);
            let aC = (0, p.x)(s6.b, nm),
                a_ = (0, p.x)(F.L, nm),
                aI = (0, p.x)(nL.chatGptConversationQueryById$, n3 || nS && null != a_ ? null : ay);
            (0, p.x)(n3 ? null : nH.a, ay);
            let aw = (0, p.x)(!n$ && !nQ && na.d, nm),
                aT = ay ?? nm,
                aj = (0, p.x)(F.B, nm),
                aS = (0, p.x)(F.x, nm),
                aE = (0, p.x)(F.Q, nm),
                aP = (0, p.x)(F.C, nm),
                aA = (0, p.x)(F.M, nm),
                aM = (0, p.x)(F.Z, nm),
                ak = (0, p.x)(F.U, nm),
                aR = (0, p.x)(F.W, nm),
                aO = (0, p.x)(n5.a, nm),
                aG = (0, p.x)(F.D, nm),
                aL = (0, p.x)(F.bb, nm),
                aq = (0, p.x)(F.cb, nm),
                aV = (0, p.x)(nL.n, nE),
                aZ = (0, b.useRef)(null),
                aY = aV.isSuccess && null != aV.data ? nE : null;
            np[38] !== nK ? (H = e => {
                (0, ed.a)(nK, s.h, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, np[38] = nK, np[39] = H) : H = np[39];
            let aQ = (0, b.useEffectEvent)(H);
            np[40] !== aY || np[41] !== aQ ? (W = () => {
                null != aY && aZ.current !== aY && (aZ.current = aY, aQ(aY))
            }, np[40] = aY, np[41] = aQ, np[42] = W) : W = np[42], np[43] !== aY ? (U = [aY], np[43] = aY, np[44] = U) : U = np[44], (0, b.useEffect)(W, U);
            let a$ = (0, p.x)(ny.o, nm),
                aJ = (0, p.x)(ny.p, nm),
                aX = (0, p.x)(ny.m, nm),
                a2 = (0, p.x)(ny.q, nm),
                rs = (0, p.x)(ny.n, nm),
                ro = (0, p.x)(ny.i, nm),
                ri = (0, p.x)(F.$, nm),
                rl = (0, p.x)(ny.z, nm);
            np[45] !== aM ? (q = (0, F.yb)(aM), np[45] = aM, np[46] = q) : q = np[46];
            let rc = q,
                rd = (0, p.x)(aB, nm),
                ru = (0, p.z)(G.t),
                rp = (0, p.z)(G.q),
                rm = (0, p.z)(G.s),
                rg = (0, p.z)(G.l),
                ry = (0, p.z)(G.m),
                rb = (0, p.z)(tu.pagesEnabled$);
            np[47] === Symbol.for("react.memo_cache_sentinel") ? (K = (0, to.a)(), np[47] = K) : K = np[47];
            let rC = (0, tT.h)(K);
            np[48] === Symbol.for("react.memo_cache_sentinel") ? (V = (0, to.b)(), np[48] = V) : V = np[48];
            let rI = (0, tT.h)(V),
                rw = null != a_,
                rT = (0, p.z)(s_.f),
                rj = n3 ? aV : aI;
            nX && null != rj.data && n0(!1);
            let rS = nX && rw && null == rj.data,
                rE = rj.isLoading || !rS && rj.isError;
            np[49] !== ar || np[50] !== n9 || np[51] !== rE || np[52] !== n3 || np[53] !== nS || np[54] !== nK ? (Z = (e, t, n, a) => {
                !(e || nK.get(ty.a)) && ((0, ny.b)(nK, n9, t, void 0, n, a), ar?.focus(), n3 || rE || (0, nz.f)(nK, n9, {
                    isTemporaryChat: nS
                }))
            }, np[49] = ar, np[50] = n9, np[51] = rE, np[52] = n3, np[53] = nS, np[54] = nK, np[55] = Z) : Z = np[55];
            let rP = Z,
                rA = null == nZ ? null : (0, sq.a)(nZ, nm),
                rM = null == rA ? void 0 : (0, sc.a)(rA),
                rk = rA ?? rj.data,
                rR = aG ? aL : rk?.title,
                rO = (0, p.z)(N.g),
                rN = (0, p.z)(N.f),
                rG = "chatgpt-thread" === nK.value.routeKind && nK.value.workSideChat?.conversationId === nm,
                rB = rk?.conversation_origin ?? aS ?? (null != nD || rG ? "tpp" : null),
                rz = "tpp" === rB,
                rL = rz && "denied" === ru.status && "go-plan" === ru.reason,
                rF = (0, p.z)(tS.d),
                rD = (0, I.X)(),
                rH = rD.state;
            (0, p.z)(t_.b);
            let rW = (0, p.x)(tj.c, "3901104270") && rH?.openGoalPlan === !0,
                rU = (0, b.useContext)(A.c),
                rK = (0, tR.a)(),
                rV = rU?.hasPageSurface === !0,
                rZ = "tpp" === rB || "flora" === rB,
                rY = (0, p.z)(!!rZ && G.u),
                rQ = void 0 !== nT && nT || rY,
                r$ = null == rF || rF.isFullWidth ? void 0 : rF.width ?? 420,
                rJ = !0 === (0, p.z)(rZ ? null : tF.d),
                rX = (0, p.z)(rZ ? tf.b : tf.a),
                r0 = !rZ && rX,
                r2 = !rI || ry && !rZ,
                r4 = !n3 && ry && !rZ,
                r5 = r4 && rg,
                r6 = n3 && rk?.is_read_only === !0 || nG?.is_read_only === !0;
            np[56] !== nm || np[57] !== n3 || np[58] !== nK ? (Y = () => null, np[56] = nm, np[57] = n3, np[58] = nK, np[59] = Y) : Y = np[59];
            let [se] = (0, b.useState)(Y), st = rk?.gizmo_id ?? aE ?? se?.gizmoId ?? null, sn = n3 || null == st || (0, al.a)(st) ? null : st, sr = (0, p.x)(oE, n9), ss = (0, n1.d)({
                conversation: rk,
                conversationId: nm,
                conversationTitle: aO,
                pathname: rD.pathname,
                sharedConversationId: nE,
                sharedPost: nZ
            }), sh = !rm && null == rk && null == se, sp = null != ay && !aw && !sh && (rm || rp), sm = null;
            n3 || (sm = null != rk ? (0, rq.B)(rk) : (0, al.a)(aE) ? aE : se?.projectId ?? null);
            let sg = (0, p.x)(tW.c, n3 ? null : nm),
                sf = n3 || rZ || null != sm || sg || null == sr ? sn : sr.id,
                sy = (0, p.x)(su.d, {
                    gizmoId: sf,
                    conversationId: n9,
                    visitKey: rD.pathname
                }),
                sx = rV || rZ || null != sm || null != sn || sg || nS,
                {
                    data: sI
                } = (0, o.a)({
                    enabled: null != sm,
                    queryFn: () => {
                        if (null == sm) throw Error("Expected a ChatGPT project id");
                        return (0, ek.c)(sm)
                    },
                    queryKey: (0, rq.E)(sm ?? ""),
                    staleTime: ex.b.ONE_MINUTE
                }),
                sw = null != sm && (sI?.gizmo.share_recipient !== "private" || (sI?.gizmo.sharing?.subjects?.length ?? 0) > 0),
                sT = rk?.context_scopes?.includes("HEALTH") === !0 || sI?.gizmo.gizmo_snorlax_type === "potion",
                sj = (0, sv.a)(rk?.context_scopes, {
                    projectType: sI?.gizmo.gizmo_snorlax_type,
                    projectId: sm,
                    lockedProjectId: rT?.projectId
                }),
                sS = aw || sw || sT || sj;
            np[60] !== sI?.gizmo.display.name ? (Q = sI?.gizmo.display.name.trim() || null, np[60] = sI?.gizmo.display.name, np[61] = Q) : Q = np[61];
            let sE = Q,
                sM = sI?.gizmo.display.theme,
                sk = sI?.gizmo.display.emoji;
            np[62] !== sI ? ($ = "shared" === (0, aU.b)(sI) ? (0, a.jsx)(e5.b, {
                icon: {
                    assets: {
                        16: oj,
                        20: oS.a
                    }
                }
            }) : void 0, np[62] = sI, np[63] = $) : $ = np[63], np[64] !== sM || np[65] !== sk || np[66] !== $ ? (J = (0, a.jsx)(tm.a, {
                className: "icon-leading",
                size: "leading",
                color: sM,
                icon: sk,
                sharedIcon: $
            }), np[64] = sM, np[65] = sk, np[66] = $, np[67] = J) : J = np[67];
            let sR = J,
                sO = (0, p.x)(F.i, nm),
                sN = sO?.metadata ?? rk?.context_truncation_continuation,
                sG = n3 || nS || null != nG || null == rO || rk?.owner?.user_id == null || null == sm || rk.owner.user_id === (rN ? rO.split("__")[0] : rO) ? null : (0, r8.d)(sm, rk.conversation_id, rk.owner.user_id),
                sB = (0, p.x)(n3 || nU || rQ ? null : sA.b, nm),
                sz = sB?.isReviewing === !0,
                sL = null == sB ? a_ : sB.conversation.mapping,
                sF = null == sB ? aj : sB.conversation.current_node,
                sD = null == a_ ? rk : null;
            np[68] === Symbol.for("react.memo_cache_sentinel") ? (ea = (0, nF.a)(), np[68] = ea) : ea = np[68];
            let sH = ea;
            np[69] === Symbol.for("react.memo_cache_sentinel") ? (er = new WeakMap, np[69] = er) : er = np[69];
            let sU = er;
            np[70] !== rX || np[71] !== r0 || np[72] !== sN || np[73] !== rB || np[74] !== sF || np[75] !== sL || np[76] !== sD || np[77] !== nU || np[78] !== n3 || np[79] !== rc || np[80] !== rZ || np[81] !== aA || np[82] !== aX || np[83] !== rs || np[84] !== a$ || np[85] !== aJ || np[86] !== a2 || np[87] !== sz || np[88] !== nK.get || np[89] !== sB?.isEntering || np[90] !== aC || np[91] !== aM ? (eo = () => sH({
                conversation: sD,
                contextContinuation: sN,
                clinicalSearchEnabled: r0,
                clinicalCitationsEnabled: rX,
                conversationOrigin: rB,
                enableImageGenerationLoadingState: !n3 && !nU && !sz && "error" !== aM,
                getRenderTelemetry: e => (0, oy.c)(nK.get, e),
                isStreaming: !n3 && !nU && !sz && rc,
                isWorkConversation: rZ,
                mode: "conversation",
                mcpResponseCache: sU,
                moderationDisclaimersByMessageId: aA,
                streamingOrders: aC,
                pendingSubmission: null == a$ || n3 || sz || sB?.isEntering ? null : {
                    attachments: aX,
                    commentAttachments: rs,
                    prompt: a$,
                    renderMarkdown: aJ,
                    selectedTextAttachments: a2
                },
                threadCurrentNode: sF,
                threadMapping: sL
            }), np[70] = rX, np[71] = r0, np[72] = sN, np[73] = rB, np[74] = sF, np[75] = sL, np[76] = sD, np[77] = nU, np[78] = n3, np[79] = rc, np[80] = rZ, np[81] = aA, np[82] = aX, np[83] = rs, np[84] = a$, np[85] = aJ, np[86] = a2, np[87] = sz, np[88] = nK.get, np[89] = sB?.isEntering, np[90] = aC, np[91] = aM, np[92] = eo) : eo = np[92], sB?.isEntering, np[93] !== eo ? (ei = eo(), np[93] = eo, np[94] = ei) : ei = np[94];
            let {
                isConversationEmpty: sZ,
                renderedConversation: sY,
                renderedTurns: sQ,
                showPendingLoadingMessage: s$
            } = ei;
            np[95] !== nq || np[96] !== rZ || np[97] !== sY || np[98] !== nK ? (el = () => {
                if (!nq && rZ) return nK.set(oT.b, sY), () => {
                    nK.get(oT.b) === sY && nK.set(oT.b, null)
                }
            }, ec = [nq, rZ, sY, nK], np[95] = nq, np[96] = rZ, np[97] = sY, np[98] = nK, np[99] = el, np[100] = ec) : (el = np[99], ec = np[100]), (0, b.useEffect)(el, ec);
            let sJ = (0, p.x)(tU.g, nm),
                sX = s$ && null == sJ,
                s0 = !rZ && !n3 && !nq && !nU,
                s2 = (0, p.x)(r0 || nq || n3 ? null : ee.a, nm),
                s3 = (s2?.length ?? 0) > 0,
                s4 = (0, p.x)(s0 ? et.b : null, nm),
                s5 = JSON.stringify([nm, nW]),
                s7 = (0, p.x)(n3 || nq ? null : of, nm),
                [s9, oe] = (0, b.useState)(null),
                ot = function(e, t) {
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
                    let d = null == n ? [] : (0, g.b)(n, eR.g),
                        u = null == e || e.visitKey !== c,
                        h = d.find(eR.g)?.id ?? (u || i ? null : e.userMessageId),
                        p = i ? null : d.findLast(eO)?.id ?? null,
                        m = !u && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != h && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== h),
                        f = new Set(u ? [] : e.observedSummaryRequestIds),
                        v = !u && !m && e.hasConsumedSummaryRequest,
                        y = !v && !u && null != e.conversation && (o || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != p && !f.has(p);
                    if (null != n && (u || null == e.conversation || !o))
                        for (let e of Object.values(n.mapping)) e?.message?.id != null && eO(e.message) && f.add(e.message.id);
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
                }(s9, {
                    completionAttemptId: s4,
                    allowAutoOpen: !(0, te.a)("(width < 768px)"),
                    suppressAutoOpen: (s7 ?? !1) || rW,
                    conversation: s0 && (rS || !rE) ? sY : null,
                    isTurnActive: rc,
                    hasGoal: s3,
                    isPendingUserTurn: ro && null != a$ && !rc,
                    visitKey: s5
                });
            ot !== s9 && oe(ot);
            let on = null == nD && !s7 && !r0 && !nq && !n3 && (rz || s0) && !nU,
                oa = on && sY?.mapping === a_ && sY?.current_node === aj,
                or = (0, p.x)(oa ? F.p : null, nm),
                os = sY?.mapping,
                oo = sY?.current_node;
            np[101] !== os || np[102] !== oo ? (eu = h()(() => {
                let e = null == os ? [] : (0, g.a)({
                    mapping: os,
                    current_node: oo
                });
                return {
                    messages: e,
                    resources: (0, nn.e)(e)
                }
            }), np[101] = os, np[102] = oo, np[103] = eu) : eu = np[103];
            let ol = eu;
            np[104] !== s0 || np[105] !== ro || np[106] !== on || np[107] !== rc || np[108] !== rb || np[109] !== aX || np[110] !== ol || np[111] !== sQ || np[112] !== or ? (eh = on ? h()(() => (function(e) {
                var t;
                let n, a, {
                        automationReferences: r,
                        includePages: s = !1,
                        includeSources: o = !0,
                        messages: i,
                        pendingAttachments: l = [],
                        resources: c = (0, nn.e)(i),
                        turns: d,
                        isTurnActive: u = d.at(-1)?.turn.status === "in_progress"
                    } = e,
                    h = [...c.inputs],
                    p = o ? (0, re.a)(i, d) : [],
                    m = new Map,
                    f = new Map,
                    v = (t = i, -1 !== (n = a3()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, ra.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    y = [],
                    b = new Map(i.map(e => [(0, g.f)(e), e])),
                    x = a3()(i, e => "user" === e.author.role),
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
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, a9.j)(t.metadata) && y.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, a9.c)(t.metadata)
                            })
                        }
                    for (let n of rr(t.items)) {
                        if (s && "mcp-tool-call" === n.type) {
                            let e = (0, a8.b)(n);
                            if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                let t = (0, a4.d)(e.url);
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
                    return rr(t.items).filter(e => "mcp-tool-call" === e.type)
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
                    automationIds: (0, a7.b)(i, r ?? void 0),
                    browserScreenshots: (0, rt.c)(i),
                    inputs: h,
                    sourceTurns: y,
                    outputs: a,
                    progressSteps: C,
                    isPlanSummaryUpdating: u && i.slice(x + 1).some(e => "assistant" === e.author.role && a7.a.test(e.recipient ?? "") || "tool" === e.author.role && a7.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${d.at(-1)?.id??""}:${u}`,
                    sources: o ? [...Array.from(new Map(i.filter(e => "user" === e.author.role).flatMap(e => (0, a6.a)((0, g.d)(e))).map(e => [e.projectId, e])).values(), e => ({
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
                    subagents: (0, rn.a)(i, {
                        isTurnLive: d.at(-1)?.turn.status === "in_progress"
                    })?.subagents ?? []
                }
            })({
                automationReferences: or,
                includePages: rb,
                includeSources: !s0,
                isTurnActive: rc || ro,
                ...ol(),
                pendingAttachments: ro ? aX : [],
                turns: sQ
            })) : null, ep = s0 ? eh?.() : null, np[104] = s0, np[105] = ro, np[106] = on, np[107] = rc, np[108] = rb, np[109] = aX, np[110] = ol, np[111] = sQ, np[112] = or, np[113] = eh, np[114] = ep) : (eh = np[113], ep = np[114]);
            let oc = ep,
                od = s3 || null != oc && (oc.outputs.length > 0 || oc.progressSteps.length > 0 || oc.automationIds.length > 0 || oc.subagents.length > 0 || !aw && oc.browserScreenshots.length > 0),
                ou = on && (!s0 || od),
                oh = ou && null == rF,
                op = JSON.stringify([s5, null != rF]),
                om = s0 ? ot.isOpen : void 0,
                og = ou && !rF?.isFullWidth;
            np[115] !== r$ || np[116] !== op || np[117] !== om || np[118] !== og ? (em = {
                contentShiftResetKey: op,
                controlledIsOpen: om,
                isEnabled: og,
                floatingPanelWidth: r$
            }, np[115] = r$, np[116] = op, np[117] = om, np[118] = og, np[119] = em) : em = np[119];
            let ov = (0, tM.a)(em),
                ob = ay ?? nm,
                ox = rz && null == aq,
                oC = aP ?? rl,
                o_ = rj.isLoading && !rw,
                oI = rj.isError && !rS;
            np[120] !== rj.error || np[121] !== nq ? (eg = nq || (0, tz.e)(rj.error) || !(rj.error instanceof tz.a && [401, 403, 404].includes(rj.error.status)), np[120] = rj.error, np[121] = nq, np[122] = eg) : eg = np[122];
            let oP = eg;
            np[123] !== rj.error || np[124] !== nm || np[125] !== oI || np[126] !== nq || np[127] !== nK || np[128] !== nE ? (ef = () => {
                oI && !nq && th.a.loadFailed(nK, nm, nE, rj.error)
            }, ev = [rj.error, nm, oI, nq, nK, nE], np[123] = rj.error, np[124] = nm, np[125] = oI, np[126] = nq, np[127] = nK, np[128] = nE, np[129] = ef, np[130] = ev) : (ef = np[129], ev = np[130]), (0, b.useEffect)(ef, ev), np[131] !== nm || np[132] !== n3 || np[133] !== ay ? (ey = null, n3 || (ey = ay ?? ((0, aK.e)(nm) ? null : nm)), np[131] = nm, np[132] = n3, np[133] = ay, np[134] = ey) : ey = np[134], np[135] !== ah || np[136] !== rk || np[137] !== rB || np[138] !== ag || np[139] !== nS || np[140] !== rZ || np[141] !== rL || np[142] !== af || np[143] !== ey || np[144] !== nM || np[145] !== nK || np[146] !== nW ? (eb = (e, t) => {
                let n = void 0 !== t && t;
                if (null == ey || null != ah || rL) return;
                let a = am.current?.signal;
                null == a || a.aborted || (ai({
                    messageId: e,
                    activation: nW
                }), (0, F.h)(nK, {
                    conversationId: ey,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, tD.a)(nK, "opened"), af(null == nM ? (0, ac.c)(t, {
                        isTemporaryChat: nS
                    }) : (0, I.C)(nM, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, tD.a)(nK, "failed"), ai(null), nK.get(es.f).danger(ag.formatMessage({
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
                                surface: (0, ae.b)(null == rB && null == rk ? null : rZ),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, np[135] = ah, np[136] = rk, np[137] = rB, np[138] = ag, np[139] = nS, np[140] = rZ, np[141] = rL, np[142] = af, np[143] = ey, np[144] = nM, np[145] = nK, np[146] = nW, np[147] = eb) : eb = np[147];
            let oA = (0, tG.a)(eb);
            np[148] !== rk || np[149] !== nm || np[150] !== rB || np[151] !== ag || np[152] !== rJ || np[153] !== nS || np[154] !== rZ || np[155] !== nK || np[156] !== ay ? (eC = async (e, t, n, a) => {
                if (!rJ) try {
                    await az(nK, {
                        conversationId: nm,
                        isTemporaryChat: nS,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, ae.c)(t);
                    throw nK.get(es.f).danger(ag.formatMessage({
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
                                surface: (0, ae.b)(null == rB && null == rk ? null : rZ),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, np[148] = rk, np[149] = nm, np[150] = rB, np[151] = ag, np[152] = rJ, np[153] = nS, np[154] = rZ, np[155] = nK, np[156] = ay, np[157] = eC) : eC = np[157];
            let oM = (0, tG.a)(eC);
            np[158] !== n9 || np[159] !== rk || np[160] !== nm || np[161] !== rB || np[162] !== ag || np[163] !== rJ || np[164] !== nS || np[165] !== rZ || np[166] !== rL || np[167] !== af || np[168] !== nN || np[169] !== nK || np[170] !== ay ? (e_ = async (e, t) => {
                if (!rJ && !rL) try {
                    let n = nK.get(an.d, nm);
                    if (n?.startsNewWorkConversation || null == nK.get(F.j, nm) || (0, tq.h)(nK.get(F.S, nm)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, g.d)(n.prompt),
                            r = (0, eM.i)(n.prompt.metadata, a, (0, v.e)(n.prompt.metadata), (0, y.w)(a)),
                            s = (0, eN.a)(n.prompt, a, r),
                            o = nK.get(ny.s, n9),
                            i = "markdown" === s.renderFormat ? s.message : a,
                            l = o.length > 0 ? o : i,
                            c = o.length > 0 ? void 0 : s.renderFormat ?? "plain";
                        if (null != nN) return void await nN(l, c);
                        if (null == nK.get(F.j, nm) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, tg.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${nm}`;
                            (0, eY.E)(t, (t, n) => n ? t : e) || (0, ny.T)(nK, nm, e), (0, eY.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, f.a)((0, g.o)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, y.w)(a);
                            (0, eQ.m)(nK, "work"), await af("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: o.length > 0 ? o : t,
                                    prefillPromptFormat: o.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (rZ && !nS && (0, eV.$)(nK, (0, e8.b)({
                                entrypoint: "home"
                            }))) return void await af("/");
                        let d = (0, g.i)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, aW.f)(nK, d);
                        (0, ny.U)(nK, u, t.model);
                        let h = nK.get(F.Q, nm);
                        (0, eQ.m)(nK, rZ ? "work" : "chat"), await af({
                            pathname: "/",
                            search: (0, ac.d)("", nS)
                        }, {
                            state: {
                                initialChatGptConversationId: u,
                                project: null,
                                chatGptProjectId: (0, al.a)(h) ? h : null,
                                chatGptCustomGptId: (0, al.a)(h) ? null : h,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: rZ
                            }
                        });
                        return
                    }
                    await (0, an.g)(nK, {
                        conversationId: nm,
                        isTemporaryChat: nS,
                        messageId: e,
                        retry: t
                    })
                } catch {
                    nK.get(es.f).danger(ag.formatMessage({
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
                                surface: (0, ae.b)(null == rB && null == rk ? null : rZ),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, np[158] = n9, np[159] = rk, np[160] = nm, np[161] = rB, np[162] = ag, np[163] = rJ, np[164] = nS, np[165] = rZ, np[166] = rL, np[167] = af, np[168] = nN, np[169] = nK, np[170] = ay, np[171] = e_) : e_ = np[171];
            let oL = (0, tG.a)(e_);
            np[172] !== rk || np[173] !== nm || np[174] !== aO || np[175] !== ag || np[176] !== ap || np[177] !== nS || np[178] !== af || np[179] !== av || np[180] !== sm || np[181] !== nK || np[182] !== ay || np[183] !== se || np[184] !== nW ? (eI = () => {
                if (ap || null == ay) return;
                let e = nK.get(G.s);
                if (!e && !nK.get(G.q) || !e && null == rk && null == se) return;
                let t = am.current?.signal;
                null == t || t.aborted || (au(nW), (e ? (0, nc.f)(nK, {
                    chatGptThreadId: nm,
                    conversationTitle: aO
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, E.a)(nK, e);
                    if ("created" === e.status) return null == n || t.aborted || nK.get(es.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, E.a)(nK, e)
                }) : (0, j.a)({
                    scope: nK,
                    projectId: sm ?? void 0,
                    prompt: `Continuing from ${(0,e$.f)({conversationId:ay,title:aO?.trim()||"ChatGPT thread"})}`
                }).then(oB)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? av(n) : af((0, ac.c)(n, {
                            isTemporaryChat: nS
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (au(null), nK.get(es.f).danger(ag.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot hand off a conversation to a task"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, np[172] = rk, np[173] = nm, np[174] = aO, np[175] = ag, np[176] = ap, np[177] = nS, np[178] = af, np[179] = av, np[180] = sm, np[181] = nK, np[182] = ay, np[183] = se, np[184] = nW, np[185] = eI) : eI = np[185];
            let oF = eI;
            np[186] !== nm || np[187] !== af || np[188] !== nK || np[189] !== n7 || np[190] !== nE || np[191] !== nZ ? (ew = () => {
                if (null != nZ) {
                    if ((0, aK.e)(nm)) {
                        let e = (0, sV.a)(nK, nZ, nm);
                        null != e && af((0, ac.c)(e))
                    }
                    return
                }
                let e = nK.query.getData(nL.n, nE);
                null != e && null != nE && null != n7 && ((0, F.lb)(nK, {
                    conversation: e,
                    conversationId: n7,
                    sharedConversationId: nE
                }), af((0, ac.c)(n7)))
            }, np[186] = nm, np[187] = af, np[188] = nK, np[189] = n7, np[190] = nE, np[191] = nZ, np[192] = ew) : ew = np[192];
            let oD = (0, tG.a)(ew);
            np[193] !== nD ? (eT = nD?.mcpAppContext == null ? null : {
                hostId: tC.a,
                server: "codex_apps",
                connectorId: nD.mcpAppContext.id
            }, np[193] = nD, np[194] = eT) : eT = np[194];
            let oH = (0, p.x)(td.b, eT),
                oW = nD?.fullscreenContent != null ? "content" : "workspace",
                oU = (0, X.a)(nq ? "embedded" : oW),
                oq = !oH && (rS || !rj.isError) && !nU && !rQ && (null == nZ || nV?.authMethod === "chatgpt" || nQ) && (!n3 || null != rk),
                oK = rQ || r6 || r5 || rL,
                oV = oK || sz || sB?.needsEntry === !0,
                oZ = oq && !oK && !n3 && !rE && !rJ && !rc && !ro && !ri && !sy,
                oY = !oq || n3 || oV || rE ? null : ar,
                oQ = (0, nF.c)({
                    paragen: n8,
                    hideInitialUserMessage: n_,
                    browserConversationId: void 0,
                    conversationId: nm,
                    errorMessage: oC,
                    branchingMessageId: ah,
                    isReadOnly: nU || rQ || n3 || null != nG,
                    isTemporaryChat: nS,
                    isWorkConversation: rz,
                    onRegenerateResponse: sy || n3 || null != nG || nU || rQ || r5 || rL || rc || ro ? void 0 : oL,
                    onEditUserMessage: sy || null == ey || rz || nU || rQ || r5 || !rd || ro ? void 0 : oM,
                    onFork: null == ey || nS || r5 || rL || nU || rQ ? void 0 : oA,
                    pendingSubmissionAttachments: aX,
                    shareEnabled: null == sn && !nS && !n3 && !nU && !rQ && !sS,
                    readAloudEnabled: !n3 && !rQ,
                    feedbackEnabled: !n3 && !rQ && null == nG,
                    renderedTurns: sz || null == n8 || null == sY ? sQ : (0, nB.a)({
                        ...sY,
                        current_node: n8.promptMessageId
                    }, {
                        clinicalSearchEnabled: r0,
                        clinicalCitationsEnabled: rX,
                        streamingOrders: aC,
                        isWorkConversation: rZ,
                        getRenderTelemetry: e => (0, oy.c)(nK.get, e)
                    }),
                    safetyReview: ak,
                    sharedConversationLastMessageId: rA?.current_node ?? aR ?? (n3 ? rk?.current_node : null),
                    showPendingLoadingMessage: sX,
                    showRequestUserInputStatus: oq && !oV && !rE
                }),
                o$ = sz ? (0, sA.a)(oQ) : oQ;
            np[195] !== ag ? (ej = ag.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation",
                description: "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop"
            }), np[195] = ag, np[196] = ej) : ej = np[196];
            let oJ = ej;
            np[197] !== nU || np[198] !== n3 || np[199] !== rR || np[200] !== nK || np[201] !== ay ? (eS = n3 || nU || null == ay ? void 0 : e => {
                (0, rq.R)({
                    scope: nK,
                    conversationId: ay,
                    previousTitle: rR,
                    title: e
                })
            }, np[197] = nU, np[198] = n3, np[199] = rR, np[200] = nK, np[201] = ay, np[202] = eS) : eS = np[202];
            let oX = aG || null != rk ? rR ?? "" : null;
            np[203] !== aO || np[204] !== eS || np[205] !== oX ? (eE = (0, a.jsx)(tA.a, {
                className: "max-w-[320px]",
                variant: "flush-start",
                onRename: eS,
                title: aO,
                titleValue: oX
            }), np[203] = aO, np[204] = eS, np[205] = oX, np[206] = eE) : eE = np[206];
            let o0 = eE,
                o1 = rZ || rV ? o0 : null;
            if (null != sn) {
                let e;
                np[207] !== nm || np[208] !== sn ? (e = (0, a.jsx)(aH.ChatGptGizmoHeader, {
                    conversationId: nm,
                    gizmoId: sn
                }), np[207] = nm, np[208] = sn, np[209] = e) : e = np[209], o1 = e
            } else null != rk || null != se || rw || (o1 = null);
            np[210] !== nU || np[211] !== n3 || np[212] !== rz ? (eP = !rz || n3 || nU ? null : (0, a.jsx)(e7.a, {
                hostId: tC.a
            }), np[210] = nU, np[211] = n3, np[212] = rz, np[213] = eP) : eP = np[213];
            let o2 = eP;
            np[214] !== rZ || np[215] !== sI || np[216] !== sm ? (eA = null == sm || rZ ? null : (0, a.jsx)(r7, {
                allowsThreadContentOverlap: !0,
                project: sI
            }), np[214] = rZ, np[215] = sI, np[216] = sm, np[217] = eA) : eA = np[217];
            let o3 = eA;
            np[218] !== o3 || np[219] !== o1 || np[220] !== nm || np[221] !== nR || np[222] !== nU || np[223] !== ox || np[224] !== n3 || np[225] !== nS || np[226] !== o2 || np[227] !== sR || np[228] !== sm || np[229] !== sE || np[230] !== sx ? (eG = sx ? (0, a.jsx)(r9.a, {
                isTemporaryChat: nS,
                isCloudTask: ox && !n3 && !nU,
                breadcrumbHeader: nR ?? o3,
                project: null == sm ? void 0 : {
                    icon: sR,
                    name: sE
                },
                start: nR ?? (n3 ? o1 : (0, a.jsx)(tH.BusinessAgentConversationHeader, {
                    conversationId: nm,
                    fallback: o1
                })),
                startActions: o2
            }) : null, np[218] = o3, np[219] = o1, np[220] = nm, np[221] = nR, np[222] = nU, np[223] = ox, np[224] = n3, np[225] = nS, np[226] = o2, np[227] = sR, np[228] = sm, np[229] = sE, np[230] = sx, np[231] = eG) : eG = np[231];
            let o4 = eG,
                o5 = !n3 && null == nG && !nU && !nS && !aw,
                o6 = (0, p.x)(o5 ? rx.a : null, nm);
            np[232] !== nm || np[233] !== o6 ? (eB = null != o6 ? (0, a.jsx)(sb, {
                conversationId: nm
            }) : null, np[232] = nm, np[233] = o6, np[234] = eB) : eB = np[234];
            let o8 = eB;
            np[235] !== oZ || np[236] !== nm || np[237] !== rJ || np[238] !== sB ? (ez = null != sB ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: rJ,
                children: (0, a.jsx)(sl, {
                    conversationId: nm,
                    placement: "progress",
                    canStartSection: oZ
                })
            }) : null, np[235] = oZ, np[236] = nm, np[237] = rJ, np[238] = sB, np[239] = ez) : ez = np[239];
            let o7 = ez;
            if (np[240] !== rj || np[241] !== nV?.authMethod || np[242] !== sy || np[243] !== nO || np[244] !== r2 || np[245] !== sp || np[246] !== oP || np[247] !== oZ || np[248] !== n9 || np[249] !== sf || np[250] !== nk || np[251] !== rk || np[252] !== o4 || np[253] !== nm || np[254] !== oJ || np[255] !== rB || np[256] !== aO || np[257] !== o8 || np[258] !== ot || np[259] !== nC || np[260] !== oC || np[261] !== rF || np[262] !== r$ || np[263] !== eh || np[264] !== st || np[265] !== rP || np[266] !== oF || np[267] !== oD || np[268] !== oI || np[269] !== rw || np[270] !== nx || np[271] !== n2 || np[272] !== ag || np[273] !== nU || np[274] !== s0 || np[275] !== oV || np[276] !== sZ || np[277] !== rE || np[278] !== o_ || np[279] !== at || np[280] !== ap || np[281] !== sT || np[282] !== nq || np[283] !== sj || np[284] !== oH || np[285] !== rC || np[286] !== rJ || np[287] !== rQ || np[288] !== rK || !1 !== np[289] || np[290] !== n3 || np[291] !== r6 || np[292] !== ri || np[293] !== ro || np[294] !== nS || np[295] !== rz || np[296] !== rc || np[297] !== rZ || np[298] !== r4 || np[299] !== rg || np[300] !== r5 || np[301] !== rL || np[302] !== rG || np[303] !== rD.pathname || np[304] !== rT || np[305] !== rH?.sidebarAutomationId || np[306] !== nj || np[307] !== rW || np[308] !== sI || np[309] !== sR || np[310] !== sm || np[311] !== sE || np[312] !== ss || np[313] !== sY || np[314] !== sQ || np[315] !== nA || np[316] !== sz || np[317] !== oU || np[318] !== nK || np[319] !== nw || np[320] !== aT || np[321] !== sB || np[322] !== o7 || np[323] !== ay || np[324] !== as || np[325] !== oe || np[326] !== nE || np[327] !== nZ || np[328] !== rM || np[329] !== nG || np[330] !== sG || np[331] !== aw || np[332] !== o5 || np[333] !== oh || np[334] !== oq || np[335] !== sX || np[336] !== oY || np[337] !== ob || np[338] !== ov || np[339] !== aj || np[340] !== nI || np[341] !== o$ || np[342] !== nD) {
                tw = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, n, r, s, o, i, l, c, d, u, h, p, f, v = sQ.flatMap(oG).flatMap(oN),
                        y = v.flatMap(oO);
                    if (!n3 && (rj.error instanceof tz.a && 423 === rj.error.status || sj && null == rT)) {
                        let e;
                        np[367] !== rj || np[368] !== nm || np[369] !== nK ? (e = (0, a.jsx)(sC.a, {
                            onUnlocked: () => {
                                (0, s_.g)(nK.get(s_.f)?.projectId, [nm]), rj.refetch()
                            }
                        }), np[367] = rj, np[368] = nm, np[369] = nK, np[370] = e) : e = np[370], tw = e;
                        break e
                    }
                    if (null != sG) {
                        let e;
                        np[371] !== sG ? (e = (0, a.jsx)(I.l, {
                            replace: !0,
                            to: sG
                        }), np[371] = sG, np[372] = e) : e = np[372], tw = e;
                        break e
                    }
                    eD = sP,
                    np[373] !== rj.fetchStatus || np[374] !== rk || np[375] !== oI || np[376] !== rw || np[377] !== o_ || np[378] !== nq ? (e3 = !1, np[373] = rj.fetchStatus, np[374] = rk, np[375] = oI, np[376] = rw, np[377] = o_, np[378] = nq, np[379] = e3) : e3 = np[379],
                    np[380] !== rj.data || np[381] !== rj.fetchStatus || np[382] !== rk || np[383] !== nm || np[384] !== oI || np[385] !== rw || np[386] !== sZ || np[387] !== o_ || !1 !== np[388] || np[389] !== sQ.length ? (e4 = null, np[380] = rj.data, np[381] = rj.fetchStatus, np[382] = rk, np[383] = nm, np[384] = oI, np[385] = rw, np[386] = sZ, np[387] = o_, np[388] = !1, np[389] = sQ.length, np[390] = e4) : e4 = np[390],
                    tt = !n3 && !rQ && (0, to.c)() ? (0, a.jsx)(tc.b, {
                        callIds: y,
                        hostId: tC.a,
                        conversationId: (0, m.Le)(`chatgpt:${nm}`)
                    }) : null,
                    np[391] !== aO || np[392] !== nq || np[393] !== nZ || np[394] !== nD?.documentTitle ? (tn = nq ? null : (0, a.jsx)(e6.a, {
                        title: null == nZ ? nD?.documentTitle ?? aO : null
                    }), np[391] = aO, np[392] = nq, np[393] = nZ, np[394] = nD?.documentTitle, np[395] = tn) : tn = np[395],
                    np[396] !== nm || np[397] !== nq || np[398] !== rJ || np[399] !== n3 || np[400] !== nS || np[401] !== rZ || np[402] !== o$ ? (ta = nq || rZ ? null : (0, a.jsx)(rf.a, {
                        conversationId: nm,
                        canCopy: !rJ,
                        paragenEnabled: !n3,
                        turns: o$,
                        loadHistory: !nS && !n3
                    }), np[396] = nm, np[397] = nq, np[398] = rJ, np[399] = n3, np[400] = nS, np[401] = rZ, np[402] = o$, np[403] = ta) : ta = np[403];
                    let x = null != rk || rw;np[404] !== oI || np[405] !== rZ || np[406] !== x ? (tr = (0, a.jsx)(tL.a, {
                        isWorkConversation: rZ,
                        hasConversationContent: x,
                        hasLoadError: oI
                    }), np[404] = oI, np[405] = rZ, np[406] = x, np[407] = tr) : tr = np[407],
                    np[408] !== rk || np[409] !== nm || np[410] !== oI || np[411] !== rw || np[412] !== o_ || np[413] !== nq || np[414] !== rD.pathname || np[415] !== nK || np[416] !== nE ? (ts = nq || o_ || oI || null == rk && !rw ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(sW, {
                            sharedConversationId: nE
                        }), (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(tp.a, {
                                onCommit: () => th.a.contentCommitted(nK, nm, nE, rD.pathname),
                                onPaint: () => th.a.contentVisible(nK, nm, nE)
                            }, nE ?? nm)
                        })]
                    }), np[408] = rk, np[409] = nm, np[410] = oI, np[411] = rw, np[412] = o_, np[413] = nq, np[414] = rD.pathname, np[415] = nK, np[416] = nE, np[417] = ts) : ts = np[417],
                    np[418] !== nV?.authMethod || np[419] !== sp || np[420] !== sf || np[421] !== rk || np[422] !== o4 || np[423] !== nm || np[424] !== rB || np[425] !== aO || np[426] !== o8 || np[427] !== ot || np[428] !== eh || np[429] !== st || np[430] !== oF || np[431] !== nU || np[432] !== s0 || np[433] !== ap || np[434] !== sT || np[435] !== nq || np[436] !== sj || np[437] !== rQ || np[438] !== n3 || np[439] !== nS || np[440] !== rz || np[441] !== rc || np[442] !== rZ || np[443] !== rH?.sidebarAutomationId || np[444] !== rW || np[445] !== sR || np[446] !== sm || np[447] !== sE || np[448] !== ss || np[449] !== sY || np[450] !== sQ.length || np[451] !== nK || np[452] !== o7 || np[453] !== ay || np[454] !== oe || np[455] !== nG || np[456] !== aw || np[457] !== o5 || np[458] !== oh || np[459] !== oY || np[460] !== ob || np[461] !== aj || np[462] !== nD ? (tv = nq || null != nD ? null : (0, a.jsxs)(rv.a, {
                        chatIcon: null == sm ? void 0 : sR,
                        conversationId: rz && !n3 ? nm : null,
                        header: null != o8 || null != o7 ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(sa, {
                                    header: o4,
                                    courseShortcut: o8,
                                    progress: o7
                                })
                            }), null]
                        }) : o4,
                        title: aO,
                        isArchivedPreview: nU,
                        children: [null, null, nV?.authMethod === "chatgpt" ? (0, a.jsx)(e9.r, {
                            productExperience: rZ ? "work" : "chat"
                        }) : null, n3 ? (0, a.jsx)(sK.a, {
                            children: null == ss ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(s1, {
                                    data: ss
                                })
                            })
                        }) : null, o5 ? (0, a.jsx)(r_, {
                            conversationId: nm,
                            scheduledAutomationId: rW ? rH?.sidebarAutomationId : void 0
                        }, nm) : null, oh ? (0, a.jsx)(a1, {
                            allowsThreadContentOverlap: !rZ,
                            composerActions: oY,
                            conversationId: ob,
                            controlledState: s0 ? {
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
                            readData: !s0 || ot.isOpen ? eh : null,
                            showSources: !s0,
                            shouldBlockExternalEgress: aw
                        }) : null, nS && !n3 && !nU && null == st && null == sf && null == sm && !sT && null != sY && (0, g.a)(sY).some(oR) ? (0, a.jsx)(P.a.HeaderAction, {
                            actionId: "chatgpt-conversation-save",
                            align: "end",
                            order: 100,
                            children: (0, a.jsx)(oi, {
                                conversationId: nm
                            })
                        }) : null, nS || nU || rQ ? null : (0, a.jsx)(r9.b, {
                            allowsThreadContentOverlap: !rZ,
                            menu: n3 || null == ay ? (0, a.jsx)(r3, {}) : (0, a.jsx)(r1, {
                                conversationId: nm,
                                title: aO,
                                isHandoffPending: ap,
                                isArchived: rk?.is_archived === !0,
                                isChatConversation: null != rk && !rZ,
                                onHandoff: sp ? oF : void 0,
                                onOpenMessage: async e => {
                                    am.current?.signal.aborted === !1 && nK.get(S.a)?.pathname === nK.value.pathname && await aa.current?.scrollToMessage(e)
                                },
                                projectId: sm,
                                projectName: sE,
                                serverConversationId: ay,
                                conversationOrigin: rB
                            }),
                            children: n3 || sj ? null : (0, a.jsx)(n4, {
                                conversationId: nm,
                                projectId: sm,
                                sharedProjectConversation: nG,
                                isReady: (null != ay || null != nG) && sQ.length > 0 && (aj ?? rk?.current_node) != null,
                                isRestricted: aw || sT,
                                isStreaming: rc
                            })
                        })]
                    }), np[418] = nV?.authMethod, np[419] = sp, np[420] = sf, np[421] = rk, np[422] = o4, np[423] = nm, np[424] = rB, np[425] = aO, np[426] = o8, np[427] = ot, np[428] = eh, np[429] = st, np[430] = oF, np[431] = nU, np[432] = s0, np[433] = ap, np[434] = sT, np[435] = nq, np[436] = sj, np[437] = rQ, np[438] = n3, np[439] = nS, np[440] = rz, np[441] = rc, np[442] = rZ, np[443] = rH?.sidebarAutomationId, np[444] = rW, np[445] = sR, np[446] = sm, np[447] = sE, np[448] = ss, np[449] = sY, np[450] = sQ.length, np[451] = nK, np[452] = o7, np[453] = ay, np[454] = oe, np[455] = nG, np[456] = aw, np[457] = o5, np[458] = oh, np[459] = oY, np[460] = ob, np[461] = aj, np[462] = nD, np[463] = tv) : tv = np[463],
                    tb = null,
                    eF = aD.a,
                    eZ = n9,
                    eJ = rB,
                    eX = !oq || oU.isHidden || oV || sy || rJ || rE || nU || rQ || r6 || r5 || rL || ri || ro,
                    e0 = nS,
                    e1 = sm,
                    e2 = null != sf,
                    eL = tE.c,
                    eH = r$,
                    np[464] !== nq || np[465] !== rK || np[466] !== rZ || np[467] !== o7 || np[468] !== nD ? (eW = nq || null != nD ? o7 : rK && (0, tk.a)() && !rZ && (0, a.jsx)("div", {
                        className: "h-px",
                        "aria-hidden": !0
                    }), np[464] = nq, np[465] = rK, np[466] = rZ, np[467] = o7, np[468] = nD, np[469] = eW) : eW = np[469],
                    eU = nO;
                    let C = null == sB ? "flex h-full min-h-0 flex-col" : "h-full",
                        _ = !at && !nq && !n3 && !oH && !oU.isHidden,
                        w = aw || r2,
                        T = rF?.isFullWidth === !0,
                        j = null == rF ? ov.contentShift : void 0,
                        E = sB?.selectedIndex;np[470] !== oZ || np[471] !== nm || np[472] !== sB ? (e = null != sB ? (0, a.jsx)(sl, {
                        conversationId: nm,
                        placement: "composer",
                        canStartSection: oZ
                    }) : void 0, np[470] = oZ, np[471] = nm, np[472] = sB, np[473] = e) : e = np[473],
                    np[474] !== nm || np[475] !== sB ? (t = null != sB ? (0, a.jsx)(si, {
                        conversationId: nm
                    }) : void 0, np[474] = nm, np[475] = sB, np[476] = t) : t = np[476];
                    let A = !rZ,
                        M = sz ? null : oC;np[477] !== rj || np[478] !== oP ? (n = oP ? () => {
                        rj.refetch({
                            cancelRefetch: !1
                        })
                    } : void 0, np[477] = rj, np[478] = oP, np[479] = n) : n = np[479];
                    let k = sQ.length > 0;np[480] !== ag || np[481] !== sz ? (r = sz ? ag.formatMessage(sA.c.readOnlyPlaceholder) : void 0, np[480] = ag, np[481] = sz, np[482] = r) : r = np[482];
                    let R = !sT && (null == sm || null != sI),
                        O = null == sB && !rG,
                        N = rj.isFetching,
                        G = !sz && rc;np[483] !== rk?.is_archived || np[484] !== nm || np[485] !== nU || np[486] !== nq || np[487] !== n3 || np[488] !== nS || np[489] !== rc || np[490] !== rZ ? (s = nq || !rZ || n3 || nU || rk?.is_archived === !0 || nS ? null : (0, a.jsx)(b.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(so, {
                            conversationId: nm,
                            isTurnActive: rc
                        })
                    }), np[483] = rk?.is_archived, np[484] = nm, np[485] = nU, np[486] = nq, np[487] = n3, np[488] = nS, np[489] = rc, np[490] = rZ, np[491] = s) : s = np[491],
                    np[492] !== nm || np[493] !== nU || np[494] !== ay ? (o = nU ? (0, a.jsx)(tI.a, {
                        conversationId: ay ?? nm,
                        kind: "chatgpt"
                    }, ay ?? nm) : void 0, np[492] = nm, np[493] = nU, np[494] = ay, np[495] = o) : o = np[495];
                    let B = !sz && sX;np[496] !== sf ? (i = null != sf ? (0, a.jsx)(sd.GptPluginMigrationBanner, {
                        gizmoId: sf
                    }) : null, np[496] = sf, np[497] = i) : i = np[497],
                    np[498] !== sp || np[499] !== oF || np[500] !== ap || np[501] !== nS || np[502] !== r4 || np[503] !== rg ? (l = r4 && !nS ? (0, a.jsx)(rh, {
                        canConvert: sp,
                        isChatInstantAvailable: !rg,
                        isConverting: ap,
                        onConvert: oF
                    }) : null, np[498] = sp, np[499] = oF, np[500] = ap, np[501] = nS, np[502] = r4, np[503] = rg, np[504] = l) : l = np[504],
                    np[505] !== rP || np[506] !== rQ ? (c = rP.bind(null, rQ), np[505] = rP, np[506] = rQ, np[507] = c) : c = np[507],
                    np[508] !== oD || np[509] !== n3 || np[510] !== nj ? (d = e => {
                        nj?.(e), n3 && oD()
                    }, np[508] = oD, np[509] = n3, np[510] = nj, np[511] = d) : d = np[511],
                    np[512] !== rj.isFetching || np[513] !== sy || np[514] !== n9 || np[515] !== nk || np[516] !== nm || np[517] !== oJ || np[518] !== nC || np[519] !== oI || np[520] !== nx || np[521] !== n2 || np[522] !== oV || np[523] !== sZ || np[524] !== rE || np[525] !== o_ || np[526] !== at || np[527] !== nq || np[528] !== n3 || np[529] !== nS || np[530] !== rz || np[531] !== nA || np[532] !== nw || np[533] !== aT || np[534] !== as || np[535] !== nE || np[536] !== rM || np[537] !== oq || np[538] !== G || np[539] !== s || np[540] !== o || np[541] !== B || np[542] !== i || np[543] !== l || np[544] !== c || np[545] !== d || np[546] !== _ || np[547] !== w || np[548] !== T || np[549] !== j || np[550] !== E || np[551] !== e || np[552] !== t || np[553] !== A || np[554] !== M || np[555] !== n || np[556] !== k || np[557] !== r || np[558] !== R || np[559] !== O || np[560] !== nI || np[561] !== o$ || np[562] !== nD ? (u = (0, a.jsx)(oz, {
                        ref: aa,
                        trackReadState: _,
                        workspace: nD,
                        shouldBlockMcpApps: w,
                        isCoveredByFloatingPanel: T,
                        isFormOnly: at,
                        isInlinePreview: nq,
                        hideModelPicker: nx,
                        disableAutoFocus: nC,
                        transcriptPresentation: nI,
                        scrollOrigin: nw,
                        composerRef: as,
                        contentX: j,
                        conversationId: nm,
                        composerConversationId: n9,
                        sectionIndex: E,
                        composerLeadingContent: nk,
                        aboveComposerContent: e,
                        historyLoadingContent: t,
                        requiredSystemHints: nA,
                        isChatConversation: A,
                        conversationLoadingLabel: oJ,
                        entries: o$,
                        errorMessage: M,
                        hasLoadError: oI,
                        onRetryLoad: n,
                        hasRenderableTurns: k,
                        isComposerDisabled: oV,
                        readOnlyPlaceholder: r,
                        moreDetailsEnabled: R,
                        isConversationEmpty: sZ,
                        showEmptyState: O,
                        isConversationFetching: N,
                        isConversationLoading: o_,
                        isSharedConversation: n3,
                        isSubmitDisabled: rE,
                        isTemporaryChat: nS,
                        isTurnActive: G,
                        isWorkConversation: rz,
                        onboardingPrelude: s,
                        scrollStateConversationId: aT,
                        initialResponsePlacementKey: n2,
                        sharedConversationId: nE,
                        sharedPostRegulatedConnectorKind: rM,
                        showComposer: oq,
                        archivedPreviewFooter: o,
                        showPendingLoadingMessage: B,
                        gptPluginMigrationBanner: i,
                        awaitingGptContinuation: sy,
                        workOnlyConversionBanner: l,
                        onAddSelectedText: c,
                        onSubmitAccepted: d
                    }), np[512] = rj.isFetching, np[513] = sy, np[514] = n9, np[515] = nk, np[516] = nm, np[517] = oJ, np[518] = nC, np[519] = oI, np[520] = nx, np[521] = n2, np[522] = oV, np[523] = sZ, np[524] = rE, np[525] = o_, np[526] = at, np[527] = nq, np[528] = n3, np[529] = nS, np[530] = rz, np[531] = nA, np[532] = nw, np[533] = aT, np[534] = as, np[535] = nE, np[536] = rM, np[537] = oq, np[538] = G, np[539] = s, np[540] = o, np[541] = B, np[542] = i, np[543] = l, np[544] = c, np[545] = d, np[546] = _, np[547] = w, np[548] = T, np[549] = j, np[550] = E, np[551] = e, np[552] = t, np[553] = A, np[554] = M, np[555] = n, np[556] = k, np[557] = r, np[558] = R, np[559] = O, np[560] = nI, np[561] = o$, np[562] = nD, np[563] = u) : u = np[563],
                    np[564] !== ot || np[565] !== eh || np[566] !== s0 || np[567] !== aw || np[568] !== oh || np[569] !== oY || np[570] !== ob || np[571] !== ov ? (h = oh && null != eh && (!s0 || ot.isOpen) ? (0, a.jsx)(a0, {
                        composerActions: oY,
                        conversationId: ob,
                        readData: eh,
                        showSources: !s0,
                        display: ov,
                        shouldBlockExternalEgress: aw
                    }) : null, np[564] = ot, np[565] = eh, np[566] = s0, np[567] = aw, np[568] = oh, np[569] = oY, np[570] = ob, np[571] = ov, np[572] = h) : h = np[572],
                    np[573] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(aF.a, {}), np[573] = p) : p = np[573],
                    np[574] !== nq ? (f = null, np[574] = nq, np[575] = f) : f = np[575],
                    np[576] !== rJ || np[577] !== u || np[578] !== h || np[579] !== f || np[580] !== C ? (eq = (0, a.jsxs)("div", {
                        className: C,
                        inert: rJ,
                        children: [u, h, p, f]
                    }), np[576] = rJ, np[577] = u, np[578] = h, np[579] = f, np[580] = C, np[581] = eq) : eq = np[581],
                    eK = !n3 && !rQ && (0, to.c)() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(ow, {
                            conversationId: nm,
                            shouldBlockExternalEgress: aw || r2,
                            widgets: v.filter(ok)
                        }), (0, a.jsx)(tl.a, {
                            blockedWidgetSource: rC ? void 0 : "descriptor",
                            transcriptMcpAppIds: new Set(v.flatMap(e => "mcp-tool-call" === e.type ? rC ? e.callId : [] : "chatgpt-hosted-widget" === e.type ? (0, ax.e)(nm, e.messageId) : [])),
                            shouldBlockExternalEgress: aw || r2
                        })]
                    }) : null
                }
                np[240] = rj, np[241] = nV?.authMethod, np[242] = sy, np[243] = nO, np[244] = r2, np[245] = sp, np[246] = oP, np[247] = oZ, np[248] = n9, np[249] = sf, np[250] = nk, np[251] = rk, np[252] = o4, np[253] = nm, np[254] = oJ, np[255] = rB, np[256] = aO, np[257] = o8, np[258] = ot, np[259] = nC, np[260] = oC, np[261] = rF, np[262] = r$, np[263] = eh, np[264] = st, np[265] = rP, np[266] = oF, np[267] = oD, np[268] = oI, np[269] = rw, np[270] = nx, np[271] = n2, np[272] = ag, np[273] = nU, np[274] = s0, np[275] = oV, np[276] = sZ, np[277] = rE, np[278] = o_, np[279] = at, np[280] = ap, np[281] = sT, np[282] = nq, np[283] = sj, np[284] = oH, np[285] = rC, np[286] = rJ, np[287] = rQ, np[288] = rK, np[289] = !1, np[290] = n3, np[291] = r6, np[292] = ri, np[293] = ro, np[294] = nS, np[295] = rz, np[296] = rc, np[297] = rZ, np[298] = r4, np[299] = rg, np[300] = r5, np[301] = rL, np[302] = rG, np[303] = rD.pathname, np[304] = rT, np[305] = rH?.sidebarAutomationId, np[306] = nj, np[307] = rW, np[308] = sI, np[309] = sR, np[310] = sm, np[311] = sE, np[312] = ss, np[313] = sY, np[314] = sQ, np[315] = nA, np[316] = sz, np[317] = oU, np[318] = nK, np[319] = nw, np[320] = aT, np[321] = sB, np[322] = o7, np[323] = ay, np[324] = as, np[325] = oe, np[326] = nE, np[327] = nZ, np[328] = rM, np[329] = nG, np[330] = sG, np[331] = aw, np[332] = o5, np[333] = oh, np[334] = oq, np[335] = sX, np[336] = oY, np[337] = ob, np[338] = ov, np[339] = aj, np[340] = nI, np[341] = o$, np[342] = nD, np[343] = eL, np[344] = eF, np[345] = eD, np[346] = eH, np[347] = eW, np[348] = eU, np[349] = eq, np[350] = eK, np[351] = eZ, np[352] = eJ, np[353] = eX, np[354] = e0, np[355] = e1, np[356] = e2, np[357] = e3, np[358] = e4, np[359] = tt, np[360] = tn, np[361] = ta, np[362] = tr, np[363] = ts, np[364] = tv, np[365] = tb, np[366] = tw
            } else eL = np[343], eF = np[344], eD = np[345], eH = np[346], eW = np[347], eU = np[348], eq = np[349], eK = np[350], eZ = np[351], eJ = np[352], eX = np[353], e0 = np[354], e1 = np[355], e2 = np[356], e3 = np[357], e4 = np[358], tt = np[359], tn = np[360], ta = np[361], tr = np[362], ts = np[363], tv = np[364], tb = np[365], tw = np[366];
            if (tw !== Symbol.for("react.early_return_sentinel")) return tw;
            np[582] !== eL || np[583] !== eH || np[584] !== eW || np[585] !== eU || np[586] !== eq || np[587] !== eK ? (tP = (0, a.jsxs)(eL, {
                floatingPanelWidth: eH,
                header: eW,
                banner: eU,
                children: [eq, eK]
            }), np[582] = eL, np[583] = eH, np[584] = eW, np[585] = eU, np[586] = eq, np[587] = eK, np[588] = tP) : tP = np[588], np[589] !== eF || np[590] !== eZ || np[591] !== eJ || np[592] !== eX || np[593] !== e0 || np[594] !== e1 || np[595] !== e2 || np[596] !== tP ? (tO = (0, a.jsx)(eF, {
                conversationId: eZ,
                conversationOrigin: eJ,
                disabled: eX,
                isTemporaryChat: e0,
                projectId: e1,
                requiresGizmoId: e2,
                children: tP
            }), np[589] = eF, np[590] = eZ, np[591] = eJ, np[592] = eX, np[593] = e0, np[594] = e1, np[595] = e2, np[596] = tP, np[597] = tO) : tO = np[597], np[598] !== eD || np[599] !== e3 || np[600] !== e4 || np[601] !== tt || np[602] !== tn || np[603] !== ta || np[604] !== tr || np[605] !== ts || np[606] !== tv || np[607] !== tb || np[608] !== tO ? (tB = (0, a.jsxs)(eD, {
                children: [e3, e4, tt, tn, ta, tr, ts, tv, tb, tO]
            }), np[598] = eD, np[599] = e3, np[600] = e4, np[601] = tt, np[602] = tn, np[603] = ta, np[604] = tr, np[605] = ts, np[606] = tv, np[607] = tb, np[608] = tO, np[609] = tB) : tB = np[609];
            let o9 = tB,
                ie = n3 || !rj.isFetchedAfterMount || rj.isFetching || rS ? null : rj.error,
                it = oI ? rj.error : null,
                ia = null == rB && null == rk ? null : rZ,
                ir = !rZ && !o_;
            return np[610] !== ar || np[611] !== n9 || np[612] !== nE ? (nl = {
                conversationId: n9,
                composer: ar,
                sharedConversationId: nE
            }, np[610] = ar, np[611] = n9, np[612] = nE, np[613] = nl) : nl = np[613], np[614] !== o9 || np[615] !== nl ? (nd = (0, a.jsx)(nv.a, {
                value: nl,
                children: o9
            }), np[614] = o9, np[615] = nl, np[616] = nd) : nd = np[616], np[617] !== ir || np[618] !== nd ? (nu = (0, a.jsx)(w.a, {
                enabled: ir,
                children: nd
            }), np[617] = ir, np[618] = nd, np[619] = nu) : nu = np[619], np[620] !== oP || np[621] !== ay || np[622] !== ie || np[623] !== it || np[624] !== ia || np[625] !== nu ? (nh = (0, a.jsx)(en.a, {
                conversationId: ay,
                error: ie,
                loadError: it,
                canRetry: oP,
                isWorkConversation: ia,
                children: nu
            }), np[620] = oP, np[621] = ay, np[622] = ie, np[623] = it, np[624] = ia, np[625] = nu, np[626] = nh) : nh = np[626], nh
        }

        function ok(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function oR(e) {
            return "user" === e.author.role
        }

        function oO(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function oN(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function oG(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function oB(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }

        function oz(e) {
            let t, n, s, o, c, u, h, m, g, f, v, y, C, I, w, T, j, S, E, P, A, M, k, R, N, G, B, z, L = (0, r.c)(217),
                {
                    ref: H,
                    trackReadState: W,
                    composerRef: U,
                    workspace: K,
                    shouldBlockMcpApps: V,
                    contentX: Z,
                    conversationId: Y,
                    sectionIndex: Q,
                    composerConversationId: $,
                    composerLeadingContent: J,
                    aboveComposerContent: ee,
                    historyLoadingContent: et,
                    requiredSystemHints: en,
                    isCoveredByFloatingPanel: ea,
                    isFormOnly: er,
                    isInlinePreview: es,
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
                    onboardingPrelude: eO,
                    scrollStateConversationId: eN,
                    initialResponsePlacementKey: eG,
                    sharedConversationId: eB,
                    sharedPostRegulatedConnectorKind: ez,
                    showComposer: eF,
                    archivedPreviewFooter: eD,
                    showPendingLoadingMessage: eH,
                    gptPluginMigrationBanner: eW,
                    awaitingGptContinuation: eK,
                    workOnlyConversionBanner: eV,
                    onAddSelectedText: eZ,
                    onSubmitAccepted: eY
                } = e,
                eQ = void 0 === e_ || e_,
                e$ = (0, p.y)(D.a),
                e0 = (0, p.x)(sV.d, (0, b.useContext)(O.a)),
                e5 = (0, p.z)(ty.a),
                e6 = (0, p.x)(tB.a, Y),
                e8 = K?.fullscreenContent != null ? "content" : "workspace",
                e7 = (0, X.a)(es ? "embedded" : e8),
                e9 = (0, p.z)(sx.a),
                te = eF && e9?.source.turnContext.conversationId !== $,
                tn = "floating" === e7.placement,
                ta = (0, p.z)(sg.h),
                tr = ed && null == eB && null == e0 && null == eD,
                to = !eE && !ek && !em && eC && !ef,
                ti = (0, p.x)(F.i, Y),
                tl = eQ && tr && to && null == ti && !e6 && !tn,
                tc = eQ && !e6 && (!tr || !eC),
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
            }), n = [eh, tu], L[0] = eh, L[1] = tu, L[2] = t, L[3] = n) : (t = L[2], n = L[3]), (0, b.useImperativeHandle)(H, t, n), L[4] !== eh ? (s = () => eh, L[4] = eh, L[5] = s) : s = L[5];
            let tg = (0, tG.a)(s);
            L[6] !== eh || L[7] !== tu ? (o = async e => {
                let t = d()(eh, oD);
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
            L[9] !== es || L[10] !== e$ || L[11] !== eN ? (c = () => es ? 0 : e$.get(nU.a, eN), L[9] = es, L[10] = e$, L[11] = eN, L[12] = c) : c = L[12];
            let [t_, tI] = (0, b.useState)(c);
            L[13] !== es || L[14] !== tx || L[15] !== e$ || L[16] !== eN ? (u = e => {
                es || e$.set(nU.a, eN, Math.max(0, e - (tx?.getHeightPx() ?? 0)))
            }, L[13] = es, L[14] = tx, L[15] = e$, L[16] = eN, L[17] = u) : u = L[17];
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
            L[22] !== Y || L[23] !== eh || L[24] !== tu ? (g = async e => {
                let t = eh.find(t => {
                    let {
                        turn: n
                    } = t;
                    return n.messageIds.includes(e)
                });
                null != t && null != tu && await tu.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${Y}-${e}`)}"]`), {
                    align: "center"
                })
            }, L[22] = Y, L[23] = eh, L[24] = tu, L[25] = g) : g = L[25];
            let tA = (0, tG.a)(g);
            L[26] !== tS || L[27] !== tj ? (f = {
                scrollToTurn: tj,
                getTurnContainer: tS
            }, L[26] = tS, L[27] = tj, L[28] = f) : f = L[28];
            let tM = f,
                tk = `chatgpt:${Y}`;
            L[29] !== Y || L[30] !== eM || L[31] !== e$ || L[32] !== eB || L[33] !== e0 ? (v = async e => {
                let t = e$.get(F.j, Y);
                !eM && null == eB && null == e0 && null != t && e$.get(ew.b) > 0 && await (0, eI.a)(e$, t, e)
            }, L[29] = Y, L[30] = eM, L[31] = e$, L[32] = eB, L[33] = e0, L[34] = v) : v = L[34], L[35] !== tM || L[36] !== tg || L[37] !== tk || L[38] !== v ? (y = function(e) {
                let {
                    getTurns: t,
                    routeContextId: n,
                    scrollAdapter: a,
                    ensureHistory: r
                } = e, s = (0, nZ.a)({
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
                                    let n = (0, nQ.a)(e.content, ey.b),
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
                                                        if (e.name === ey.a) {
                                                            let n = (0, n$.a)(e.attributes),
                                                                a = (0, n$.b)(e.attributes),
                                                                r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, ey.l)(e) === a);
                                                            if (null == r) return "";
                                                            let s = (0, ey.i)(r);
                                                            return "hidden" === s || "block" === s ? "" : (0, ey.j)(r) ?? ""
                                                        }
                                                        return e.name === nK.a ? (0, nY.a)(e.attributes, "label") ?? "" : e.name === nK.b || e.name === nK.c ? "" : e.name === nq.a ? e.text ?? "" : null
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
                                        unitId: (0, n_.a)("assistant", t),
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
                routeContextId: tk,
                scrollAdapter: tM,
                ensureHistory: v
            }), L[35] = tM, L[36] = tg, L[37] = tk, L[38] = v, L[39] = y) : y = L[39];
            let tR = y;
            L[40] !== tR.contextId ? (C = {
                containerRef: td,
                contextId: tR.contextId
            }, L[40] = tR.contextId, L[41] = C) : C = L[41], (0, e3.a)(C);
            let tO = te && null == eD,
                tN = e5 && tO && !tn,
                tz = (0, tt.a)();
            L[42] !== Y || L[43] !== ef || L[44] !== ea || L[45] !== Q || L[46] !== tz ? (I = {
                conversationId: Y,
                sectionIndex: Q,
                hasRenderableTurns: ef,
                isCoveredByFloatingPanel: ea,
                shouldReduceMotion: tz,
                containerRef: td
            }, L[42] = Y, L[43] = ef, L[44] = ea, L[45] = Q, L[46] = tz, L[47] = I) : I = L[47];
            let tL = function(e) {
                    let t, n, a, s = (0, r.c)(12),
                        {
                            conversationId: o,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, sM.a)(0);
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
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(sO) && 0 !== n.clientWidth && (s.disconnect(), h.set(a * n.clientWidth), e = (0, sk.a)(h, 0, {
                                    duration: .3,
                                    ease: sR.d
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
                }(I),
                tF = tO && tn,
                [tD, tH] = (0, b.useState)(null),
                [tW, tU] = (0, b.useState)(null),
                [tq, tK] = (0, b.useState)(null),
                tV = eP && tO && !ev && !tn && !e5,
                [tZ, tY] = (0, b.useState)(null);
            L[48] !== eK || L[49] !== Y || L[50] !== ef || L[51] !== eM || L[52] !== ez || L[53] !== eF ? (w = eF && !eK ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(eq.BrowserComposerDisclaimer, {
                    conversationId: Y,
                    hasUserMessage: ef,
                    isTemporaryChat: eM,
                    regulatedConnectorKindOverride: ez
                })
            }) : void 0, L[48] = eK, L[49] = Y, L[50] = ef, L[51] = eM, L[52] = ez, L[53] = eF, L[54] = w) : w = L[54];
            let tQ = w;
            L[55] !== Y || L[56] !== ep || L[57] !== ef || L[58] !== ev || L[59] !== eA || L[60] !== eM || L[61] !== eR || L[62] !== eF || L[63] !== eH ? (T = ef ? null : (0, a.jsx)(nD.a, {
                conversationId: Y,
                errorMessage: ep,
                isTemporaryChat: eM,
                isWorkConversation: eR,
                showPendingLoadingMessage: eH,
                showRequestUserInputStatus: eF && !ev && !eA
            }), L[55] = Y, L[56] = ep, L[57] = ef, L[58] = ev, L[59] = eA, L[60] = eM, L[61] = eR, L[62] = eF, L[63] = eH, L[64] = T) : T = L[64];
            let t$ = T;
            L[65] !== Y || L[66] !== eR || L[67] !== eB || L[68] !== e0 ? (j = eR && null == eB && null == e0 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(eU, {
                    conversationId: Y
                }, Y)
            }) : null, L[65] = Y, L[66] = eR, L[67] = eB, L[68] = e0, L[69] = j) : j = L[69];
            let tJ = j;
            L[70] !== eD || L[71] !== tJ ? (S = null != eD ? (0, a.jsxs)(a.Fragment, {
                children: [tJ, eD]
            }) : null, L[70] = eD, L[71] = tJ, L[72] = S) : S = L[72];
            let tX = S;
            L[73] !== ee || L[74] !== tX || L[75] !== eK || L[76] !== $ || L[77] !== J || L[78] !== U || L[79] !== Y || L[80] !== ei || L[81] !== tQ || L[82] !== t$ || L[83] !== eh || L[84] !== tJ || L[85] !== tD || L[86] !== eW || L[87] !== em || L[88] !== ef || L[89] !== eo || L[90] !== e5 || L[91] !== ev || L[92] !== eE || L[93] !== ea || L[94] !== er || L[95] !== tn || L[96] !== ta || L[97] !== es || L[98] !== eP || L[99] !== eA || L[100] !== eM || L[101] !== eR || L[102] !== eY || L[103] !== eb || L[104] !== tV || L[105] !== en || L[106] !== tx || L[107] !== tf || L[108] !== e7.isHidden || L[109] !== eB || L[110] !== e0 || L[111] !== te || L[112] !== tF || L[113] !== tN || L[114] !== W || L[115] !== eV || L[116] !== K ? (E = tX ?? (te ? (0, a.jsxs)(ro.a.Provider, {
                value: eh.at(-1) ?? null,
                children: [er || tn ? null : (0, a.jsx)(e4.a, {
                    onNavigate: tf
                }, Y), tn ? null : J, (0, a.jsx)(oW, {
                    requiredSystemHints: en,
                    composerRef: U,
                    workspace: K,
                    isInlinePreview: es,
                    hideModelPicker: eo,
                    disableAutoFocus: ei,
                    conversationId: $,
                    isImageEditComposer: ta,
                    disabled: ev,
                    readOnlyPlaceholder: eb,
                    awaitingGptContinuation: eK,
                    headerContent: tJ,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tV ? (0, a.jsx)("div", {
                            ref: tK,
                            className: "empty:hidden"
                        }) : null, ee, !eE && !em && ef && !eK && eV, e5 ? null : eW, tF && t$]
                    }),
                    isFullscreenComposer: tn,
                    isHidden: e7.isHidden,
                    trackReadState: W && !ea,
                    isSharedConversation: eP,
                    isSubmitDisabled: eA,
                    followupPortalTarget: tD,
                    takeoverDisclaimerRef: tY,
                    showConversationFollowups: null == eB && null == e0 && !eM && !eR && !tn,
                    isTemporaryChat: eM,
                    isWorkConversation: eR,
                    responseSpacerState: tx,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(as, {
                            entries: eh,
                            historyLoader: eM || null != eB || null != e0 ? null : (0, a.jsx)(sw.a, {
                                conversationId: Y
                            }),
                            isVisible: t
                        })
                    },
                    showVoiceStage: !tN,
                    voiceDisclaimer: e5 && !tN ? tQ : void 0,
                    onSubmitAccepted: e => {
                        tI(0), eY?.(e)
                    }
                }, `${$}:${ta?"image-edit":"chat"}`)]
            }) : tJ), L[73] = ee, L[74] = tX, L[75] = eK, L[76] = $, L[77] = J, L[78] = U, L[79] = Y, L[80] = ei, L[81] = tQ, L[82] = t$, L[83] = eh, L[84] = tJ, L[85] = tD, L[86] = eW, L[87] = em, L[88] = ef, L[89] = eo, L[90] = e5, L[91] = ev, L[92] = eE, L[93] = ea, L[94] = er, L[95] = tn, L[96] = ta, L[97] = es, L[98] = eP, L[99] = eA, L[100] = eM, L[101] = eR, L[102] = eY, L[103] = eb, L[104] = tV, L[105] = en, L[106] = tx, L[107] = tf, L[108] = e7.isHidden, L[109] = eB, L[110] = e0, L[111] = te, L[112] = tF, L[113] = tN, L[114] = W, L[115] = eV, L[116] = K, L[117] = E) : E = L[117];
            let t0 = E,
                t1 = ea || void 0;
            L[118] !== Y || L[119] !== ea || L[120] !== tn || L[121] !== W ? (P = !W || tn || ea ? null : (0, a.jsx)(rs.a, {
                conversationId: Y
            }), L[118] = Y, L[119] = ea, L[120] = tn, L[121] = W, L[122] = P) : P = L[122], L[123] !== eD || L[124] !== Y || L[125] !== es || L[126] !== eB || L[127] !== e0 ? (A = es || null != eB || null != e0 || null != eD ? null : (0, a.jsx)(aq, {
                conversationId: Y
            }, Y), L[123] = eD, L[124] = Y, L[125] = es, L[126] = eB, L[127] = e0, L[128] = A) : A = L[128], L[129] !== Y || L[130] !== eE || L[131] !== eM || L[132] !== eB || L[133] !== e0 ? (M = eE || eM || null != eB || null != e0 ? null : (0, a.jsx)(sT, {
                conversationId: Y
            }), L[129] = Y, L[130] = eE, L[131] = eM, L[132] = eB, L[133] = e0, L[134] = M) : M = L[134], L[135] !== Y || L[136] !== eh || L[137] !== tp || L[138] !== eT || L[139] !== eE || L[140] !== es || L[141] !== tf || L[142] !== eB || L[143] !== e0 || L[144] !== tu ? (k = es || eE || null != eB || null != e0 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(q, {
                    conversationId: Y,
                    entries: eh,
                    turnListApi: tu
                }), (0, a.jsx)(tw.a, {
                    ready: !eT && tp && null != tu && eh.length > 0,
                    onNavigate: tf
                })]
            }), L[135] = Y, L[136] = eh, L[137] = tp, L[138] = eT, L[139] = eE, L[140] = es, L[141] = tf, L[142] = eB, L[143] = e0, L[144] = tu, L[145] = k) : k = L[145], L[146] !== eD || L[147] !== tl || L[148] !== Z || L[149] !== ti || L[150] !== Y || L[151] !== eu || L[152] !== tR || L[153] !== tQ || L[154] !== t$ || L[155] !== eh || L[156] !== t0 || L[157] !== tT || L[158] !== em || L[159] !== ef || L[160] !== et || L[161] !== eG || L[162] !== t_ || L[163] !== e5 || L[164] !== e6 || L[165] !== ev || L[166] !== eT || L[167] !== eE || L[168] !== ea || L[169] !== er || L[170] !== tn || L[171] !== es || L[172] !== eP || L[173] !== eM || L[174] !== ek || L[175] !== eR || L[176] !== ex || L[177] !== eZ || L[178] !== eg || L[179] !== eO || L[180] !== tV || L[181] !== tx || L[182] !== e$ || L[183] !== ec || L[184] !== tA || L[185] !== tL || L[186] !== eB || L[187] !== e0 || L[188] !== V || L[189] !== tz || L[190] !== eF || L[191] !== te || L[192] !== tc || L[193] !== tF || L[194] !== tN || L[195] !== tZ || L[196] !== el || L[197] !== tu || L[198] !== K ? (R = K?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!V && K.fullscreenContent, t0]
            }) : (0, a.jsxs)(tP.a, {
                viewportOverlay: er || es || eR || null != eB || null != e0 || null != eD || ea || tn ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(rg, {
                        conversationId: Y
                    }, Y)
                }),
                hideTranscript: er,
                active: !eE && (!ef || null != tu),
                presentation: el ?? (es ? "compact" : "default"),
                contentX: Z,
                composerFade: !1,
                footerPlacement: tl ? "home" : "bottom",
                initialOffset: t_,
                scrollOrigin: ec,
                onScroll: tT,
                responseSpacer: tx,
                scrollToBottomButton: !te || tn || tN ? void 0 : {
                    isWorking: ek
                },
                threadEndContent: e5 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tH,
                        className: tE.a
                    }), null == tZ ? tQ : (0, x.createPortal)(tQ, tZ)]
                }),
                footerLeadingContent: tN ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: tE.a,
                            children: (0, a.jsx)(tv.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: tQ
                    })]
                }) : void 0,
                footer: t0,
                children: [es || eE || null != eB ? null : (0, a.jsx)(nG, {
                    conversationId: Y,
                    entries: eh,
                    isConversationFetching: eT,
                    turnListApi: tu
                }), (0, a.jsxs)(l.a.div, {
                    ref: td,
                    style: {
                        x: tL
                    },
                    "data-chatgpt-conversation-selection-target": Y,
                    className: (0, i.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", es && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, e2.K)(e$, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, e2.K)(e$, "conversation")
                    },
                    children: [(0, a.jsxs)(b.Suspense, {
                        fallback: (0, a.jsx)(ts.LoadingPage, {
                            debugName: "ChatGptConversationPage",
                            fillParent: !0
                        }),
                        children: [es || eE ? null : (0, a.jsx)(e1.a, {
                            conversationSource: tR
                        }), eM || null != eB || null != e0 ? null : et ?? (0, a.jsx)(sw.a, {
                            conversationId: Y
                        }), (0, a.jsx)(ov.b, {
                            conversationId: Y
                        }), (null != eB || null != e0) && ef ? (0, a.jsx)(s5, {
                            sharedConversationId: eB
                        }) : null, null == eO ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: tE.a,
                                children: eO
                            })
                        }), null == ti || eE ? null : (0, a.jsx)(nl.a, {
                            conversationId: Y,
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
                            children: (0, a.jsx)(ts.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : ef ? (0, a.jsxs)(sf.a, {
                            value: tA,
                            children: [es || ea ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eM || null != eB || null != e0 ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(eS, {
                                        conversationId: Y
                                    })
                                }), (0, a.jsx)(ej, {
                                    entries: eh,
                                    TurnRowComponent: ar
                                })]
                            }), (0, a.jsx)(aI, {
                                conversationId: Y,
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
                        }), !tF && t$, eF && !ev ? (0, a.jsx)(sF, {
                            conversationId: Y,
                            moreDetailsEnabled: ex,
                            onAddSelectedText: eZ
                        }) : null]
                    }), es ? null : (0, a.jsx)(nW.a, {
                        initialPlacementKey: eG,
                        isActiveVoiceConversation: e5 && e6,
                        isLoadingHistory: eE,
                        latestUserTurnKey: eh.findLast(oL)?.turnKey,
                        onResponseSpacerStateChange: tC
                    }), tN ? (0, a.jsx)(l.a.div, {
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
            }), L[146] = eD, L[147] = tl, L[148] = Z, L[149] = ti, L[150] = Y, L[151] = eu, L[152] = tR, L[153] = tQ, L[154] = t$, L[155] = eh, L[156] = t0, L[157] = tT, L[158] = em, L[159] = ef, L[160] = et, L[161] = eG, L[162] = t_, L[163] = e5, L[164] = e6, L[165] = ev, L[166] = eT, L[167] = eE, L[168] = ea, L[169] = er, L[170] = tn, L[171] = es, L[172] = eP, L[173] = eM, L[174] = ek, L[175] = eR, L[176] = ex, L[177] = eZ, L[178] = eg, L[179] = eO, L[180] = tV, L[181] = tx, L[182] = e$, L[183] = ec, L[184] = tA, L[185] = tL, L[186] = eB, L[187] = e0, L[188] = V, L[189] = tz, L[190] = eF, L[191] = te, L[192] = tc, L[193] = tF, L[194] = tN, L[195] = tZ, L[196] = el, L[197] = tu, L[198] = K, L[199] = R) : R = L[199], L[200] !== ea || L[201] !== t1 || L[202] !== P || L[203] !== A || L[204] !== M || L[205] !== k || L[206] !== R ? (N = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": t1,
                inert: ea,
                children: [P, A, M, k, R]
            }), L[200] = ea, L[201] = t1, L[202] = P, L[203] = A, L[204] = M, L[205] = k, L[206] = R, L[207] = N) : N = L[207];
            let t2 = N;
            return L[208] !== tq || L[209] !== tW || L[210] !== tV ? (G = tV ? {
                aboveComposer: tq,
                belowMessage: tW
            } : null, L[208] = tq, L[209] = tW, L[210] = tV, L[211] = G) : G = L[211], L[212] !== t2 ? (B = (0, a.jsx)(eJ.a, {
                children: t2
            }), L[212] = t2, L[213] = B) : B = L[213], L[214] !== G || L[215] !== B ? (z = (0, a.jsx)(av.a, {
                value: G,
                children: B
            }), L[214] = G, L[215] = B, L[216] = z) : z = L[216], z
        }

        function oL(e) {
            let {
                turn: t
            } = e;
            return t.items.some(oF)
        }

        function oF(e) {
            return "user-message" === e.type
        }

        function oD(e) {
            let {
                turn: t
            } = e;
            return t.items.some(oH)
        }

        function oH(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function oW(e) {
            let t, n, s, o = (0, r.c)(11),
                i = (0, b.useContext)(eZ.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return o[0] !== e ? (t = (0, a.jsx)(oU, {
                    ...e
                }), o[0] = e, o[1] = t) : t = o[1], t
            }
            o[2] !== e.conversationId || o[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, o[2] = e.conversationId, o[3] = e.isImageEditComposer, o[4] = t) : t = o[4];
            let l = !e.isWorkConversation;
            return o[5] !== e ? (n = t => (0, a.jsx)(oU, {
                ...e,
                initialController: t
            }), o[5] = e, o[6] = n) : n = o[6], o[7] !== t || o[8] !== l || o[9] !== n ? (s = (0, a.jsx)(sm, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), o[7] = t, o[8] = l, o[9] = n, o[10] = s) : s = o[10], s
        }

        function oU(e) {
            let t, n, s, o, i, l, c, d, u, h, m, g, f, v, y, x, _, w, T, j = (0, r.c)(72);
            j[0] !== e ? ({
                composerRef: t,
                initialController: n,
                ...s
            } = e, j[0] = e, j[1] = t, j[2] = n, j[3] = s) : (t = j[1], n = j[2], s = j[3]);
            let S = (0, p.y)(D.a),
                E = (0, p.x)(R.b, s.isTemporaryChat),
                {
                    isFullscreenComposer: P
                } = s,
                A = (0, C.a)(),
                {
                    state: O
                } = (0, I.X)(),
                N = (0, p.x)(oE, s.conversationId),
                G = (0, p.x)(F.Q, s.conversationId),
                B = (0, p.x)(tW.c, s.conversationId);
            j[4] !== B || j[5] !== s.isSharedConversation || j[6] !== s.isWorkConversation || j[7] !== G ? (o = !s.isSharedConversation && !s.isWorkConversation && !(0, al.a)(G) && !B, j[4] = B, j[5] = s.isSharedConversation, j[6] = s.isWorkConversation, j[7] = G, j[8] = o) : o = j[8];
            let z = o,
                L = z && !s.disabled && !s.isSubmitDisabled && !s.isImageEditComposer,
                H = z ? N : void 0;
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
            let U = (0, ob.a)(l),
                q = (0, b.useContext)(eZ.a),
                K = (0, b.useRef)(!1);
            j[16] !== W || j[17] !== q || j[18] !== n || j[19] !== s.isTemporaryChat || j[20] !== S ? (c = e => {
                null == e || null == n || K.current || (K.current = !0, (0, ny.T)(S, W, n.getPersistedText(), {
                    isTemporaryChat: s.isTemporaryChat
                }), q?.onAdopt())
            }, j[16] = W, j[17] = q, j[18] = n, j[19] = s.isTemporaryChat, j[20] = S, j[21] = c) : c = j[21];
            let V = (0, tG.a)(c);
            j[22] !== V || j[23] !== t ? (d = (0, tO.a)(t, V), j[22] = V, j[23] = t, j[24] = d) : d = j[24];
            let Z = d,
                Y = (0, b.useContext)(ro.a),
                Q = (0, p.x)(F.bb, s.conversationId),
                X = (0, p.x)(F.Z, s.conversationId),
                ee = (0, p.x)(ny.i, s.conversationId);
            j[25] !== X ? (u = (0, F.yb)(X), j[25] = X, j[26] = u) : u = j[26];
            let et = u,
                en = (0, p.z)(M.j.activeTab$);
            if (j[27] !== en || j[28] !== P || j[29] !== et || j[30] !== Y) {
                let e = Y?.turn.items.flatMap(oZ);
                h = P && en?.tabType.kind === ta.a && "generatedImages" in en.props && null != en.props.generatedImages && !et && null != Y && "in_progress" !== Y.turn.status && !Y.turn.hasPendingAssistantReply && !Y.showPendingLoadingMessage && !e?.some(oV) && (null != Y.errorMessage || e?.some(oK)) ? Y.turn.messageIds.at(-1) ?? Y.turnKey : null, j[27] = en, j[28] = P, j[29] = et, j[30] = Y, j[31] = h
            } else h = j[31];
            let ea = h,
                er = (0, b.useRef)(null);
            j[32] !== ea || j[33] !== S ? (m = () => {
                null != ea && ea !== er.current && (er.current = ea, S.set(J.a, "expanded"))
            }, g = [ea, S], j[32] = ea, j[33] = S, j[34] = m, j[35] = g) : (m = j[34], g = j[35]), (0, b.useEffect)(m, g);
            let es = (0, p.w)(sI.a, P ? s.conversationId : null);
            j[36] !== U || j[37] !== L || j[38] !== W || j[39] !== A || j[40] !== P || j[41] !== Z || j[42] !== E || j[43] !== s || j[44] !== S || j[45] !== H || j[46] !== O?.libraryFileCreation ? (f = e => (0, a.jsxs)(tn.a, {
                children: [P && s.trackReadState && !e?.isHidden ? (0, a.jsx)(rs.a, {
                    conversationId: s.conversationId,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, s.aboveComposerContent, (0, a.jsx)(eK.a, {
                    children: (0, a.jsx)(nd.a, {
                        ref: Z,
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
                        browserConversationId: (0, $.getThreadBrowserConversationId)(S) ?? s.conversationId,
                        composerController: U,
                        conversationId: s.conversationId,
                        requiredSystemHints: s.requiredSystemHints,
                        hideSystemHints: null != s.requiredSystemHints,
                        draftKey: W,
                        onPromptChange: E,
                        selectedCustomGpt: H,
                        targetGizmoId: H?.id,
                        onCustomGptChange: L ? e => {
                            S.set(oE, s.conversationId, e)
                        } : void 0,
                        onCustomAgentSelected: L ? () => {
                            S.set(oE, s.conversationId, null)
                        } : void 0,
                        disableDraftPrepare: s.isSubmitDisabled || s.isSharedConversation,
                        disableSubmit: s.disabled || s.isSubmitDisabled,
                        voiceInputDisabled: s.disabled,
                        aboveComposerHeaderContent: s.voiceDisclaimer,
                        getExtraDeveloperInstructions: !s.isInlinePreview && O?.libraryFileCreation && !s.isTemporaryChat ? oq : void 0,
                        isTemporaryChat: s.isTemporaryChat,
                        placeholder: s.disabled ? s.readOnlyPlaceholder ?? A.formatMessage({
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
            }), j[36] = U, j[37] = L, j[38] = W, j[39] = A, j[40] = P, j[41] = Z, j[42] = E, j[43] = s, j[44] = S, j[45] = H, j[46] = O?.libraryFileCreation, j[47] = f) : f = j[47];
            let eo = f;
            j[48] !== S ? (v = () => {
                (0, e2.K)(S, "conversation")
            }, y = () => {
                (0, e2.K)(S, "conversation")
            }, j[48] = S, j[49] = v, j[50] = y) : (v = j[49], y = j[50]);
            let ei = !s.isInlinePreview && !s.disabled && !s.isSubmitDisabled;
            j[51] !== U || j[52] !== ei ? (x = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rd, {
                    composerController: U,
                    enabled: ei
                })
            }), j[51] = U, j[52] = ei, j[53] = x) : x = j[53];
            let el = P ? "floating" : "pane",
                ec = s.disabled || s.awaitingGptContinuation,
                ed = null == Y && !et,
                eu = ee || et ? "loading" : "idle";
            return j[54] !== eu ? (_ = {
                type: eu,
                unread: !1
            }, j[54] = eu, j[55] = _) : _ = j[55], j[56] !== es || j[57] !== s.isHidden || j[58] !== s.renderTranscript || j[59] !== eo || j[60] !== el || j[61] !== ec || j[62] !== ed || j[63] !== _ || j[64] !== Q ? (w = (0, a.jsx)(k.a, {
                notifications: es,
                isHidden: s.isHidden,
                placement: el,
                forceExpanded: ec,
                composerOnly: ed,
                title: Q,
                statusState: _,
                renderTranscript: s.renderTranscript,
                children: eo
            }), j[56] = es, j[57] = s.isHidden, j[58] = s.renderTranscript, j[59] = eo, j[60] = el, j[61] = ec, j[62] = ed, j[63] = _, j[64] = Q, j[65] = w) : w = j[65], j[66] !== s.conversationId || j[67] !== v || j[68] !== y || j[69] !== x || j[70] !== w ? (T = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": s.conversationId,
                onMouseDownCapture: v,
                onFocusCapture: y,
                children: [x, w]
            }), j[66] = s.conversationId, j[67] = v, j[68] = y, j[69] = x, j[70] = w, j[71] = T) : T = j[71], T
        }
        async function oq() {
            return [tr.a]
        }

        function oK(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function oV(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function oZ(e) {
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
                k = (0, s.useRef)(j),
                R = (0, s.useRef)(P),
                O = (0, s.useRef)(null),
                N = (0, s.useRef)(null),
                G = (0, c.b)();
            _[3] !== G ? (n = () => new l.a(G), _[3] = G, _[4] = n) : n = _[4];
            let [B] = (0, s.useState)(n), {
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
            _[10] !== U || _[11] !== j || _[12] !== D || _[13] !== M ? (m = () => {
                let e = U();
                if (null == e || 0 === e.clientHeight) return !1;
                if (M && null != j) {
                    var t, n;
                    let a, r = (t = e, n = j, a = t.querySelector(`[data-turn-key="${CSS.escape(n)}"]`), a?.querySelector("[data-user-message-bubble]") ?? a);
                    if (null == r) return !1;
                    D(r)
                } else D();
                return !0
            }, _[10] = U, _[11] = j, _[12] = D, _[13] = M, _[14] = m) : m = _[14];
            let Z = (0, s.useEffectEvent)(m);
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
            }), g = [z, L, F, S, K, D, H, q, M], _[15] = z, _[16] = L, _[17] = F, _[18] = S, _[19] = K, _[20] = D, _[21] = H, _[22] = q, _[23] = M, _[24] = g, _[25] = f) : (g = _[24], f = _[25]), (0, s.useLayoutEffect)(f, g), _[26] !== U || _[27] !== P || _[28] !== j || _[29] !== D || _[30] !== V || _[31] !== M ? (v = () => {
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
                }(j, U, D, V)
            }, y = [U, P, j, D, V, M], _[26] = U, _[27] = P, _[28] = j, _[29] = D, _[30] = V, _[31] = M, _[32] = v, _[33] = y) : (v = _[32], y = _[33]), (0, s.useLayoutEffect)(v, y), _[34] !== W || _[35] !== U || _[36] !== I || _[37] !== Z ? (b = () => {
                if (null == I) return;
                let e = !1;
                return W(() => {
                    e || null == U() || (e = !0, e = Z())
                })
            }, _[34] = W, _[35] = U, _[36] = I, _[37] = Z, _[38] = b) : b = _[38], _[39] !== W || _[40] !== U || _[41] !== I ? (x = [W, U, I], _[39] = W, _[40] = U, _[41] = I, _[42] = x) : x = _[42], (0, s.useLayoutEffect)(b, x), _[43] !== B ? (C = (0, a.jsx)(i.a, {
                controller: B
            }), _[43] = B, _[44] = C) : C = _[44], C
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
            o = n("iTtm"),
            i = n("zd8w"),
            l = n("Wf1j"),
            c = n("oyxz"),
            d = n("HZfM"),
            u = n("Cslg"),
            h = n("kphc"),
            p = n("ygO2"),
            m = n("bqtn"),
            g = n("Ot7V"),
            f = n("bf6R"),
            v = n("Bbed"),
            y = n("X6Vn"),
            b = n("SGsN"),
            x = n("CqQF"),
            C = n("H911"),
            _ = n("dkU8"),
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
            R = n("vHvp"),
            O = n("fexf");
        let N = (0, v.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function G(e) {
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
            }) : null, c[5] = p, c[6] = s) : s = c[6], c[7] !== h ? (i = (0, a.jsx)(B, {
                gizmo: h
            }), c[7] = h, c[8] = i) : i = c[8], c[9] !== s || c[10] !== i ? (l = (0, a.jsxs)("div", {
                className: "flex min-w-0 items-center gap-1 select-none",
                children: [s, i]
            }), c[9] = s, c[10] = i, c[11] = l) : l = c[11], l
        }

        function B(e) {
            let t, n, v, G, B, z, L, F, D, H, W, U, q, K, V, Z, Y, Q, $, J, X = (0, r.c)(59),
                {
                    gizmo: ee
                } = e,
                et = (0, o.y)(j.a),
                en = (0, l.a)(),
                {
                    search: ea
                } = (0, d.X)(),
                er = (0, d.Z)(),
                [es, eo] = (0, i.useState)(!1),
                ei = (0, S.h)("2160578039"),
                el = (0, o.x)(E.a, "2513446768"),
                ec = ei && "gpt" === ee.gizmo.gizmo_type && null != ee.gizmo.migrated_plugin_id;
            X[0] !== el ? (t = el?.get("disable_gpt_updates", !1), X[0] = el, X[1] = t) : t = X[1];
            let ed = t,
                eu = ee.gizmo.current_user_permission?.can_write && !ec && !ed,
                {
                    data: eh
                } = (0, o.z)(P.c);
            X[2] !== ee.gizmo.id || X[3] !== eh ? (n = eh?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === ee.gizmo.id
            }), X[2] = ee.gizmo.id, X[3] = eh, X[4] = n) : n = X[4];
            let ep = n,
                em = eu || ec || ed ? `https://chatgpt.com/gpts/editor/${encodeURIComponent(ee.gizmo.id)}` : `https://chatgpt.com/g/${encodeURIComponent(ee.gizmo.id)}/view`;
            X[5] !== ee.gizmo.id || X[6] !== ee.gizmo.short_url ? (v = ee.gizmo.short_url?.trim() || ee.gizmo.id, X[5] = ee.gizmo.id, X[6] = ee.gizmo.short_url, X[7] = v) : v = X[7], X[8] !== v ? (G = (0, M.c)(v), X[8] = v, X[9] = G) : G = X[9], X[10] !== ea ? (B = (0, k.d)("", (0, k.f)(ea)), X[10] = ea, X[11] = B) : B = X[11];
            let eg = `${G}${B}`;
            X[12] !== en ? (z = en.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions",
                description: "Accessible label for the compact overflow menu containing actions for the current custom GPT in Codex Desktop"
            }), X[12] = en, X[13] = z) : z = X[13];
            let ef = z;
            X[14] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, a.jsx)(_.a, {
                className: "icon-sm"
            }), X[14] = L) : L = X[14], X[15] !== ef ? (F = (0, a.jsx)(p.a, {
                "aria-label": ef,
                color: "ghost",
                size: "icon",
                children: L
            }), X[15] = ef, X[16] = F) : F = X[16], X[17] !== ef || X[18] !== es || X[19] !== F ? (D = (0, a.jsx)(x.a, {
                cloneCustomTrigger: !0,
                tooltipContent: ef,
                triggerPopupOpen: es,
                children: F
            }), X[17] = ef, X[18] = es, X[19] = F, X[20] = D) : D = X[20], X[21] !== ee.gizmo.gizmo_type || X[22] !== ee.gizmo.id || X[23] !== er || X[24] !== eg || X[25] !== et ? (H = "gpt" === ee.gizmo.gizmo_type ? (0, a.jsxs)(m.c.Item, {
                href: eg,
                onClick: e => {
                    e.defaultPrevented || ((0, w.a)(et, s.jc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: ee.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), eo(!1), (0, T.c)(et, null), (0, h.m)(et, "chat"), er(eg, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(m.c.ItemIcon, {
                    children: (0, a.jsx)(f.Gh, {})
                }), (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat",
                    description: "Short GPT actions menu label that opens a new conversation with the same custom GPT, rather than switching to general ChatGPT"
                })]
            }) : null, X[21] = ee.gizmo.gizmo_type, X[22] = ee.gizmo.id, X[23] = er, X[24] = eg, X[25] = et, X[26] = H) : H = X[26], X[27] !== ee || X[28] !== et ? (W = () => (0, y.f)(et, N, {
                accountId: et.get(u.e),
                resource: ee
            }), X[27] = ee, X[28] = et, X[29] = W) : W = X[29], X[30] === Symbol.for("react.memo_cache_sentinel") ? (U = (0, a.jsx)(m.c.ItemIcon, {
                children: (0, a.jsx)(f.ee, {})
            }), q = (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About",
                description: "GPT menu action that opens its details over the current conversation or landing page"
            }), X[30] = U, X[31] = q) : (U = X[30], q = X[31]), X[32] !== W ? (K = (0, a.jsxs)(m.c.Item, {
                onSelect: W,
                children: [U, q]
            }), X[32] = W, X[33] = K) : K = X[33];
            let ev = ep ? I : C.a;
            return X[34] !== ee || X[35] !== en || X[36] !== ep || X[37] !== et ? (V = () => {
                (0, P.e)(et, ee, !ep).catch(() => {
                    et.get(b.f).danger(en.formatMessage({
                        id: "chatgptConversations.customGpt.pinFailed",
                        defaultMessage: "Couldn't update pinned GPT",
                        description: "Error toast shown when adding or removing a custom GPT from the user's pinned sidebar items fails in Codex Desktop"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.customGpt.pinFailed"
                        }
                    })
                })
            }, X[34] = ee, X[35] = en, X[36] = ep, X[37] = et, X[38] = V) : V = X[38], X[39] !== ep ? (Z = ep ? (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT",
                description: "Compact overflow-menu action that removes the current custom GPT from the user's pinned sidebar items in Codex Desktop"
            }) : (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT",
                description: "Compact overflow-menu action that adds the current custom GPT to the user's pinned sidebar items in Codex Desktop"
            }), X[39] = ep, X[40] = Z) : Z = X[40], X[41] !== ev || X[42] !== V || X[43] !== Z ? (Y = (0, a.jsx)(m.c.Item, {
                LeftIcon: ev,
                onSelect: V,
                children: Z
            }), X[41] = ev, X[42] = V, X[43] = Z, X[44] = Y) : Y = X[44], X[45] !== eu || X[46] !== em || X[47] !== ee.gizmo.current_user_permission?.can_view_config ? (Q = eu || ee.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(m.c.Item, {
                href: em,
                leftIconAsset: eu ? O.a : R.a,
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
                    defaultMessage: "Edit GPT",
                    description: "Compact overflow-menu action that opens the current custom GPT in its ChatGPT web editor from Codex Desktop"
                }) : (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.view",
                    defaultMessage: "View",
                    description: "Short action in the custom GPT overflow menu for users who can view its configuration but cannot edit it, including after migration to a plugin. Opens the read-only GPT configuration page in ChatGPT."
                })
            }) : null, X[45] = eu, X[46] = em, X[47] = ee.gizmo.current_user_permission?.can_view_config, X[48] = Q) : Q = X[48], X[49] !== ee ? ($ = (0, a.jsx)(A.a, {
                resource: ee
            }), X[49] = ee, X[50] = $) : $ = X[50], X[51] !== es || X[52] !== H || X[53] !== K || X[54] !== Y || X[55] !== Q || X[56] !== $ || X[57] !== D ? (J = (0, a.jsxs)(m.a, {
                align: "start",
                contentWidth: "menu",
                open: es,
                onOpenChange: eo,
                triggerButton: D,
                children: [H, K, Y, Q, $]
            }), X[51] = es, X[52] = H, X[53] = K, X[54] = Y, X[55] = Q, X[56] = $, X[57] = D, X[58] = J) : J = X[58], J
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
            "explainer" === h && (m = "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON"), (0, i.a)(e, r.T, {
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
            }), "shown" === t && (0, i.a)(e, a.jd, {
                eventId: `${l.c}_tooltip_shown`,
                type: "UPSELL_OR_MODAL_TYPE_NUX_TOOLTIP"
            })
        }
        n.d(t, {
            a: () => r.U,
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
                        if ((0, h._b)(x, v, n), !n) return;
                        let a = t(h.j, v);
                        if (null == a || !0 !== t(d.q, a)) return;
                        let r = (0, u.b)(a);
                        (0, c.j)(x, r, x.get(d.x, r)), _(a)
                    });
                return () => {
                    e(), t(), (0, h._b)(x, v, !1)
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
            O = n("VTN2");
        let N = P.record(P.string(), P.union([P.string(), P.literal(!0)]));

        function G(e) {
            let t, n, P, G, z, L, F = (0, r.c)(28),
                {
                    conversationId: D,
                    turns: H,
                    loadHistory: W,
                    renderMode: U,
                    paragenEnabled: q,
                    enabled: K,
                    canCopy: V,
                    priority: Z
                } = e,
                Y = void 0 === U ? "conversation" : U,
                Q = void 0 !== q && q,
                $ = void 0 === K || K,
                J = void 0 === V || V,
                X = void 0 === Z ? "fallback" : Z,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            F[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), F[0] = t) : t = F[0], F[1] !== J || F[2] !== D || F[3] !== $ || F[4] !== W || F[5] !== Q || F[6] !== Y ? (n = [D, $, J, W, Y, Q], F[1] = J, F[2] = D, F[3] = $, F[4] = W, F[5] = Q, F[6] = Y, F[7] = n) : n = F[7], (0, c.useEffect)(t, n), F[8] !== J || F[9] !== D || F[10] !== Q || F[11] !== Y || F[12] !== ee || F[13] !== H ? (P = () => {
                let e = ee.get(C.j, D),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(C.x, D);
                if (!J || "tpp" === n || "flora" === n) return null;
                let a = ee.get(C.L, D),
                    r = Q && "conversation" === Y ? ee.get(w.a, D)?.promptMessageId : void 0,
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
                        isStreaming: (0, C.yb)(ee.get(C.Z, D)),
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
                    i = (0, j.a)(a?.[s.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(T.b, o) ?? i?.[String(s.codeBlockIndex)]?.content ?? s.content
                }
            }, F[8] = J, F[9] = D, F[10] = Q, F[11] = Y, F[12] = ee, F[13] = H, F[14] = P) : P = F[14];
            let en = (0, y.a)(P);
            F[15] !== ee ? (G = (e, t) => {
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
            }, F[15] = ee, F[16] = G) : G = F[16];
            let ea = G;
            return F[17] !== D || F[18] !== en || F[19] !== W || F[20] !== Q || F[21] !== Y || F[22] !== ee || F[23] !== ea ? (z = () => {
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
                let r = ee.get(u.a),
                    s = ee.get(C.B, D),
                    o = ee.get(h.f).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(C.B, D) !== s || Q && "conversation" === Y && t(w.a, D)?.promptMessageId !== n || t(h.f).copyLastCodeBlock !== o) && a.abort()
                    });
                ea((async () => {
                    await (0, _.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, F[17] = D, F[18] = en, F[19] = W, F[20] = Q, F[21] = Y, F[22] = ee, F[23] = ea, F[24] = z) : z = F[24], F[25] !== $ || F[26] !== X ? (L = {
                enabled: $,
                priority: X
            }, F[25] = $, F[26] = X, F[27] = L) : L = F[27], (0, p.a)("copyLastCodeBlock", z, L), null
        }

        function B() {}
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
                b = (0, s.z)(i.e);
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
            i = n("HZfM"),
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
                m = (0, i.X)(),
                g = (0, i.Z)(),
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
            h = n("b5a9");

        function p(e) {
            let t, n, p, m, g, f, v, y, b, x = (0, r.c)(34),
                {
                    gptName: C,
                    accessState: _,
                    onUsePlugin: I,
                    onKeepUsingGpt: w,
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
                    pending: (0, s.yb)(n(s.Z, t)),
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
                return n(s.bb, t) || null
            },
            dismiss: (e, t) => {
                (0, s.Tb)(e, t, !1), (0, r.b)(e, t).catch(() => {})
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
            r = n("QosV"),
            s = n("iTtm"),
            o = n("oyxz"),
            i = n("Qgfj"),
            l = n("HZfM"),
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
                v = (0, l.Z)(),
                b = (0, s.z)(y.a),
                x = (0, s.z)(C.m),
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
            } = (0, w.c)(n, r), M = P ? v.a.projectOnlyMoveUnavailable : void 0, {
                data: k,
                isPending: R,
                isError: O
            } = s, {
                data: N,
                isPending: G,
                isError: B
            } = o, z = (0, T.a)(N, k, r?.gizmo.id), L = "allowed" === c, F = e => {
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
                }), z.length > 0 && D.push({
                    id: "new-project-separator",
                    type: "separator"
                })), z)) {
                let {
                    targetMemoryBlocked: t
                } = (0, w.c)(n, void 0, e), r = t ? (0, I.a)((0, b.c)(e)) : void 0;
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
            return l && (O || B) ? D.push({
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
            }) : O || B || R || G || 0 !== z.length || L || D.push({
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
                g = (0, s.x)(p.d, (0, c.a)());
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
                g = (0, s.z)(i.k),
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
            i = n("o0PZ"),
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
                initialPrompt: I,
                initialPromptKind: w
            } = t, T = void 0 === _ ? C : _, j = (0, o.y)(u.a);
            b[2] !== C || b[3] !== T || b[4] !== I || b[5] !== w || b[6] !== j ? (n = () => s()(() => {
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
            o = n("HZfM"),
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
                v = (0, o.Z)(),
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
            c = n("HZfM"),
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
            x = n("snEh");

        function C(e) {
            let t, n, C, _, I, w, T, j, S, E = (0, r.c)(36),
                {
                    conversationId: P,
                    kind: A
                } = e,
                M = (0, o.y)(m.a),
                k = (0, i.a)(),
                R = (0, c.X)(),
                O = (0, c.Z)();
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
            }, E[12] = P, E[13] = A, E[14] = M, E[15] = _) : _ = E[15], E[16] !== P || E[17] !== N || E[18] !== A || E[19] !== M ? (I = (e, t, n) => {
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
                    id: `unarchive-thread-${A}:${P}`
                })
            }, E[16] = P, E[17] = N, E[18] = A, E[19] = M, E[20] = I) : I = E[20], E[21] !== k || E[22] !== M ? (w = (e, t, n) => {
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
            } = (0, s.a)(T), D = F || B?.status === "restored", H = L || B?.status === "restoring";
            return E[29] !== z ? (j = () => z(), E[29] = z, E[30] = j) : j = E[30], E[31] !== N || E[32] !== j || E[33] !== D || E[34] !== H ? (S = (0, a.jsx)(v.a, {
                restored: D,
                restoring: H,
                onUnarchive: j,
                onDone: N
            }), E[31] = N, E[32] = j, E[33] = D, E[34] = H, E[35] = S) : S = E[35], S
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

        function r(e) {
            let {
                displayMode: t,
                isPinned: n,
                isPopoverOpen: a
            } = e, r = n && "overlay" !== t, s = null;
            return r ? s = "inline" : "overlay" === t && a && (s = "popover"), {
                displayMode: t,
                shouldHideInlineImmediately: "overlay" === t && a,
                shouldShow: r,
                visibleSurface: s
            }
        }

        function s(e) {
            let {
                displayMode: t,
                isPinned: n,
                panelWidth: a = 300
            } = e;
            return n && "shift" === t ? -(308 + a - 300) / 2 : 0
        }
        n.d(t, {
            a: () => r,
            b: () => s,
            c: () => a
        })
    }),
    ylLY: (function(e, t, n) {
        let a = (0, n("zd8w").createContext)(null);
        n.d(t, {}, {
            a: a
        })
    }),
    Hzz5: (function(e, t) {
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