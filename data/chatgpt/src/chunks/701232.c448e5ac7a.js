export const __rspack_esm_id = 701232;
export const __rspack_esm_ids = [701232];
export const __webpack_modules__ = {
    bn59: (function(e, t, n) {
        n.d(t, {
            a: () => z,
            ChatSeatAccessScreen: () => G
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("XnlH"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("HZfM"),
            c = n("hzGf"),
            d = n("OFP1"),
            u = n("kphc"),
            h = n("ygO2"),
            p = n("DVOM"),
            g = n("OWtl"),
            m = n("wtCf"),
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
            A = n("DAA7"),
            P = n("yGJW"),
            M = n("GDNt");

        function R(e) {
            let t, n, l, c, d, u, p, v, y, M, R, N, G, F, z, B, L, D, H, W, U, K, q = (0, r.c)(70),
                {
                    account: V,
                    accountId: Y,
                    userId: Q,
                    onClose: X,
                    onSwitchToWork: $
                } = e,
                Z = (0, s.y)(g.a),
                J = (0, f.a)(),
                {
                    email: ee
                } = (0, C.a)(),
                [et, en] = (0, o.useState)(),
                ea = (0, o.useRef)(!0);
            q[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => (ea.current = !0, () => {
                ea.current = !1
            }), n = [], q[0] = t, q[1] = n) : (t = q[0], n = q[1]), (0, o.useEffect)(t, n);
            let er = "account-owner" === V.account.account_user_role,
                es = "account-admin" === V.account.account_user_role,
                eo = !0 === V.entitlement.has_active_subscription,
                ei = (er || es) && eo,
                el = er || ei;
            q[2] !== ei || q[3] !== er ? (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE", ei ? l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY" : er && (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE"), q[2] = ei, q[3] = er, q[4] = l) : l = q[4], q[5] !== V.account.account_user_role || q[6] !== l || q[7] !== eo || q[8] !== Z ? (c = (e, t) => {
                (0, P.a)(Z, m.nd, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: V.account.account_user_role ?? void 0,
                    hasPaidSubscription: eo
                })
            }, q[5] = V.account.account_user_role, q[6] = l, q[7] = eo, q[8] = Z, q[9] = c) : c = q[9];
            let ec = c;
            q[10] !== X ? (d = () => {
                X(), (0, S.f)({
                    href: new URL("/codex/cloud", w.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, q[10] = X, q[11] = d) : d = q[11];
            let ed = d;
            q[12] !== V.account.subscription_seat_pools_enabled || q[13] !== Y || q[14] !== ed || q[15] !== ei || q[16] !== ee || q[17] !== J || q[18] !== er || q[19] !== ec || q[20] !== X || q[21] !== $ || q[22] !== et || q[23] !== Z || q[24] !== Q ? (u = async () => {
                if ("requesting" !== et) {
                    if (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), er && !ei) {
                        let e = new URL("/admin/members", w.h);
                        e.searchParams.set("account_id", Y), ee && e.searchParams.set("search", ee);
                        let t = e.toString(),
                            n = (0, A.c)(Z, t, Y),
                            a = null == n ? null : await n;
                        X(), (0, S.f)({
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
                                    isExpectedError: k
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
                            (0, I.e)(Z), await (0, b.g)("accounts-check"), await Promise.all([Z.query.invalidate(x.b, Y), Z.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), ea.current && X()
                        } else {
                            if (await _.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: Y
                                        }
                                    }
                                }), !ea.current) return;
                            $ ? (X(), $()) : ed(), Z.get(E.f).success(J.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted",
                                description: "Success toast shown after requesting ChatGPT access from the modal"
                            }))
                        }
                    } catch (e) {
                        ea.current && en(O(e) ?? "error")
                    }
                }
            }, q[12] = V.account.subscription_seat_pools_enabled, q[13] = Y, q[14] = ed, q[15] = ei, q[16] = ee, q[17] = J, q[18] = er, q[19] = ec, q[20] = X, q[21] = $, q[22] = et, q[23] = Z, q[24] = Q, q[25] = u) : u = q[25];
            let eu = u;
            q[26] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.title",
                defaultMessage: "You don’t have access to Chat on this plan",
                description: "Title of the seat access explanation on the Chat surface. Chat is a product name."
            }), q[26] = p) : p = q[26];
            let eh = p;
            q[27] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.message",
                defaultMessage: "You are assigned Work access only. Reach out to your admin to request access to ChatGPT.",
                description: "Explanation for workspace members who need admin approval for ChatGPT access"
            }), q[27] = v) : v = q[27];
            let ep = v;
            if (el) {
                let e;
                q[28] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.ownerMessage",
                    defaultMessage: "Your current seat is Work-only. Update your seat type in Workspace settings to start using ChatGPT.",
                    description: "Explanation for workspace owners and paid admins who can update their seat to get ChatGPT access"
                }), q[28] = e) : e = q[28], ep = e
            } else if (es) {
                let e;
                q[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.adminMessage",
                    defaultMessage: "You are assigned Work access only. Ask your workspace owner to buy ChatGPT seats, then update your seat type in Workspace settings.",
                    description: "Explanation for unpaid workspace admins who need an owner to buy ChatGPT seats"
                }), q[29] = e) : e = q[29], ep = e
            }
            q[30] !== ec || q[31] !== X ? (y = e => {
                e || (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED"), X())
            }, q[30] = ec, q[31] = X, q[32] = y) : y = q[32], q[33] !== eu ? (M = e => {
                e.preventDefault(), eu()
            }, q[33] = eu, q[34] = M) : M = q[34], q[35] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, a.jsx)(T.e, {
                className: "heading-lg font-semibold",
                children: eh
            }), q[35] = R) : R = q[35], q[36] !== ep ? (N = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [R, (0, a.jsx)(T.d, {
                    className: "text-lg leading-6 text-secondary",
                    children: ep
                })]
            }), q[36] = ep, q[37] = N) : N = q[37];
            let eg = "requesting" === et,
                em = "requesting" === et;
            return q[38] !== el ? (G = el ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.updateSeatButton",
                defaultMessage: "Update seat",
                description: "Updates the current user's seat to include ChatGPT"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access",
                description: "Requests ChatGPT access from a workspace administrator"
            }), q[38] = el, q[39] = G) : G = q[39], q[40] !== eg || q[41] !== em || q[42] !== G ? (F = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: eg,
                disabled: em,
                children: G
            }), q[40] = eg, q[41] = em, q[42] = G, q[43] = F) : F = q[43], q[44] !== ed || q[45] !== ec || q[46] !== X || q[47] !== $ ? (z = () => {
                $ ? (X(), $()) : (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), ed())
            }, q[44] = ed, q[45] = ec, q[46] = X, q[47] = $, q[48] = z) : z = q[48], q[49] !== $ ? (B = $ ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work",
                description: "Switches from the Chat access explanation to the available Work surface"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex",
                description: "Returns to Codex from the Chat access explanation"
            }), q[49] = $, q[50] = B) : B = q[50], q[51] !== z || q[52] !== B ? (L = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: z,
                children: B
            }), q[51] = z, q[52] = B, q[53] = L) : L = q[53], q[54] !== F || q[55] !== L ? (D = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [F, L]
            }), q[54] = F, q[55] = L, q[56] = D) : D = q[56], q[57] !== J || q[58] !== et ? (H = null != et && "requesting" !== et ? (0, a.jsx)("p", {
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
            }) : null, q[57] = J, q[58] = et, q[59] = H) : H = q[59], q[60] !== N || q[61] !== D || q[62] !== H ? (W = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-8 p-10 text-center",
                children: [N, D, H]
            }), q[60] = N, q[61] = D, q[62] = H, q[63] = W) : W = q[63], q[64] !== W || q[65] !== M ? (U = (0, a.jsx)(j.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: M,
                children: W
            }), q[64] = W, q[65] = M, q[66] = U) : U = q[66], q[67] !== U || q[68] !== y ? (K = (0, a.jsx)(T.b, {
                open: !0,
                size: "wide",
                variant: "chatgpt",
                onOpenChange: y,
                children: U
            }), q[67] = U, q[68] = y, q[69] = K) : K = q[69], K
        }

        function k(e) {
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
                h = (0, s.y)(g.a),
                p = (0, s.z)(N.a),
                m = (0, s.z)(d.t),
                f = (0, l.Z)();
            if ("restricted" !== p.status) return null;
            let v = `${p.accountId}:${p.userId}`;
            return o[0] !== f || o[1] !== c || o[2] !== h || o[3] !== m.status ? (t = "allowed" === m.status ? c ?? (() => {
                (0, u.l)(h, "work"), f("/")
            }) : void 0, o[0] = f, o[1] = c, o[2] = h, o[3] = m.status, o[4] = t) : t = o[4], o[5] !== i || o[6] !== v || o[7] !== t ? (n = (0, a.jsx)(F, {
                modeToggle: i,
                onSwitchToWork: t
            }, v), o[5] = i, o[6] = v, o[7] = t, o[8] = n) : n = o[8], n
        }

        function F(e) {
            let t, n, l, c, d, u = (0, r.c)(13),
                {
                    modeToggle: g,
                    onSwitchToWork: m
                } = e,
                f = (0, s.z)(N.a),
                [v, y] = (0, o.useState)(!1);
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
                        onClick: () => y(!1),
                        children: (0, a.jsx)(i.a, {
                            id: "chatSeatAccess.reviewAccess",
                            defaultMessage: "Review access options",
                            description: "Reopens the Chat seat access dialog after dismissal"
                        })
                    })]
                })
            }), u[3] = l) : l = u[3], u[4] !== v || u[5] !== m || u[6] !== f.account || u[7] !== f.accountId || u[8] !== f.userId ? (c = v ? null : (0, a.jsx)(R, {
                account: f.account,
                accountId: f.accountId,
                userId: f.userId,
                onClose: () => y(!0),
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
            return l ? d.isLoading ? null : (o[1] !== d.isCapable || o[2] !== i ? (n = d.isCapable ? (0, a.jsx)(G, {}) : i, o[1] = d.isCapable, o[2] = i, o[3] = n) : n = o[3], n) : i
        }
    }),
    Pyg2: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("XnlH"),
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
                    ready: g,
                    failed: m
                } = e,
                f = void 0 !== m && m,
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
            }), l = [b], h[2] = b, h[3] = n, h[4] = l) : (n = h[3], l = h[4]), (0, s.useEffect)(n, l), h[5] !== f || h[6] !== g ? (c = () => {
                !g && f && y.current?.fail("load_failed")
            }, d = [g, f], h[5] = f, h[6] = g, h[7] = c, h[8] = d) : (c = h[7], d = h[8]), (0, s.useEffect)(c, d), h[9] !== g ? (u = g ? (0, a.jsx)(i.a, {
                requireVisibleAtPaint: !0,
                onPaint: () => {
                    y.current?.mark("content_visible"), y.current?.end()
                }
            }) : null, h[9] = g, h[10] = u) : u = h[10], u
        }
        n.d(t, {
            a: () => l
        })
    }),
    lZ4W: (function(e, t, n) {
        var a = n("XnlH"),
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
            s = n("XnlH"),
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
    Sd4O: (function(e, t, n) {
        var a = n("XnlH"),
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
    c6kO: (function(e, t, n) {
        n.d(t, {
            BusinessAgentConversationHeader: () => k,
            BusinessAgentHomeHero: () => O
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("XnlH"),
            o = n("OWtl"),
            i = n("MrGp"),
            l = n("nUDt"),
            c = n("zd8w"),
            d = n("oyxz"),
            u = n("L6H2"),
            h = n("zKCW"),
            p = n("ygO2"),
            g = n("JNtf"),
            m = n("mUDD"),
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
        var S = n("ZGSy"),
            E = n("xvSo");

        function A(e) {
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
                children: (0, a.jsx)(R, {
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
                    g = i.businessName ?? null,
                    m = i.logoUrl ?? null;
                n[7] !== g || n[8] !== m ? (e = (0, a.jsx)(u.a, {
                    alt: "",
                    name: g,
                    size: "lg",
                    src: m
                }), n[7] = g, n[8] = m, n[9] = e) : e = n[9], n[10] !== i.businessName ? (r = (0, a.jsx)("h1", {
                    className: "heading-xl font-normal text-default select-none",
                    children: (0, a.jsx)(R, {
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
            let t, n, s, o, i, l, u, h, y, b, x, C, _, I, T, j, A, P = (0, r.c)(29),
                {
                    context: M,
                    onPresented: R,
                    onContinue: k,
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
            let F = t;
            return P[2] !== O ? (n = e => {
                G(e), e || O?.()
            }, P[2] = O, P[3] = n) : n = P[3], P[4] !== R ? (s = {
                "data-theme": "light",
                onOpenAutoFocus: R
            }, P[4] = R, P[5] = s) : s = P[5], P[6] !== k ? (o = e => {
                e.preventDefault(), G(!1), k?.()
            }, P[6] = k, P[7] = o) : o = P[7], P[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(w, {}), P[8] = i) : i = P[8], P[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(g.e, {
                className: "heading-lg text-center leading-7 font-semibold",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.disclosureTitle",
                    defaultMessage: "About chatting with businesses",
                    description: "Title of the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It introduces what business AI chats offer and how chat privacy works. Keep it neutral and concise; there are no placeholders."
                })
            }), P[9] = l) : l = P[9], P[10] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(v.a, {
                className: "shrink-0",
                asset: S.a
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
                asset: E.a
            }), P[13] = b) : b = P[13], P[14] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.disclosureUsageTrendsTitle",
                    defaultMessage: "Your chats remain private",
                    description: "Short privacy heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. Reassure the person that their conversations with business AI agents remain private from the businesses. There are no placeholders."
                })
            }), P[14] = x) : x = P[14], P[15] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [l, (0, a.jsx)(g.d, {
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
            }), P[15] = C) : C = P[15], P[16] !== F ? (_ = null == F ? null : (0, a.jsx)(f.a, {
                href: F,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy",
                    description: "Link to the business-provided privacy policy in the introductory Business Agent dialog. Opens separately without accepting or dismissing the dialog. Keep the label short."
                })
            }), P[16] = F, P[17] = _) : _ = P[17], P[18] === Symbol.for("react.memo_cache_sentinel") ? (I = (0, a.jsx)("div", {
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
            }), P[18] = I) : I = P[18], P[19] !== _ ? (T = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [C, _, I]
                })]
            }), P[19] = _, P[20] = T) : T = P[20], P[21] !== T || P[22] !== o ? (j = (0, a.jsx)(m.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: o,
                children: T
            }), P[21] = T, P[22] = o, P[23] = j) : j = P[23], P[24] !== N || P[25] !== j || P[26] !== n || P[27] !== s ? (A = (0, a.jsx)(g.b, {
                open: N,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: s,
                children: j
            }), P[24] = N, P[25] = j, P[26] = n, P[27] = s, P[28] = A) : A = P[28], A
        }

        function R(e) {
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

        function k(e) {
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
                g = p?.conversationId === u && p.ready;
            return g || !0 === d.showDisclosureModal ? (c[0] !== g || c[1] !== d || c[2] !== p ? (t = g ? {
                ...d,
                showDisclosureModal: !p.presented
            } : d, c[0] = g, c[1] = d, c[2] = p, c[3] = t) : t = c[3], c[4] !== g || c[5] !== u || c[6] !== h ? (n = g ? () => (0, l.a)(h, u) : void 0, c[4] = g, c[5] = u, c[6] = h, c[7] = n) : n = c[7], c[8] !== t || c[9] !== n ? (i = (0, a.jsx)(M, {
                context: t,
                onPresented: n
            }), c[8] = t, c[9] = n, c[10] = i) : i = c[10], i) : null
        }
    }),
    nUDt: (function(e, t, n) {
        var a = n("XnlH"),
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
                    [r.Zb]: n.accountId
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
    KvJW: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("XnlH"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("WQca"),
            c = n("yGJW"),
            d = n("OWtl"),
            u = n("eShZ"),
            h = n("ZhoB");
        let p = new WeakSet;

        function g(e) {
            let t, n, o, p, g, f, v, y, b = (0, r.c)(24),
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
            b[4] !== I || b[5] !== _ || b[6] !== S ? (n = () => S(_, I), b[4] = I, b[5] = _, b[6] = S, b[7] = n) : n = b[7], b[8] !== _ || b[9] !== n ? (o = (0, a.jsx)(m, {
                error: _,
                onShown: n
            }), b[8] = _, b[9] = n, b[10] = o) : o = b[10], b[11] !== T || b[12] !== o ? (p = (0, a.jsxs)(a.Fragment, {
                children: [o, T]
            }), b[11] = T, b[12] = o, b[13] = p) : p = b[13];
            let E = p;
            return b[14] !== C ? (g = C instanceof u.a && !(0, u.e)(C) && (403 === C.status || 404 === C.status), b[14] = C, b[15] = g) : g = b[15], b[16] !== C || b[17] !== S ? (f = () => S(C, !1), b[16] = C, b[17] = S, b[18] = f) : f = b[18], b[19] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
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
    eKlv: (function(e, t, n) {
        var a = n("Cslg"),
            r = n("X6Vn"),
            s = n("SGsN"),
            o = n("svjy"),
            i = n("hSZm"),
            l = n("ZrYB"),
            c = n("AOHi"),
            d = n("OtLV"),
            u = n("sfmI"),
            h = n("lBzi"),
            p = n("MrGp"),
            g = n("vVgo"),
            m = n("LOqV"),
            f = n("QmkR");

        function v(e, t) {
            let n = C(e, t);
            if (null == n || !(0, f.d)(e, n.conversation_id)) return;
            let a = e.get(p.C, t) ? e.get(p.ab, t) : n.title;
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
            let n = e.query.getData(h.chatGptConversationQueryById$, t) ?? (0, m.g)(e.queryClient, t);
            if (null != n) return n;
            let a = e.get(p.k).find(n => e.get(p.j, n) === t);
            if (!(null == a || e.get(p.z, a))) return {
                id: t,
                conversation_origin: e.get(p.x, a),
                gizmo_id: e.get(p.P, a),
                is_starred: !1,
                title: e.get(p.ab, a)
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
    VlIB: (function(e, t, n) {
        let a = (0, n("zd8w").createContext)(null);
        n.d(t, {}, {
            a: a
        })
    }),
    ZuqD: (function(e, t, n) {
        n.d(t, {
            a: () => oP,
            ChatGptConversationPage: () => oE,
            ChatGptSharedConversationPage: () => oA
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("hKYX"),
            o = n("T0Rc"),
            i = n("on57"),
            l = n("IPUh"),
            c = n("xCr9"),
            d = n.n(c),
            u = n("HVBu"),
            h = n.n(u),
            p = n("XnlH"),
            g = n("o0PZ"),
            m = n("AuIy"),
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
            A = n("bjsR"),
            P = n("I7bK"),
            M = n("ZU27"),
            R = n("Pyg2"),
            k = n("ZIh4"),
            O = n("O0M0"),
            N = n("Cslg"),
            G = n("OFP1"),
            F = n("ItIk"),
            z = (n("AZW7"), n("hzGf")),
            B = n("jov5"),
            L = n("MrGp"),
            D = n("tSEg"),
            H = n("Ro2M"),
            W = n("bN4H"),
            U = n("TS05");

        function K(e) {
            let t, n, s, o, i = (0, r.c)(12),
                {
                    conversationId: l,
                    entries: c,
                    turnListApi: d
                } = e,
                {
                    key: u,
                    search: h,
                    state: g
                } = (0, I.X)();
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "automations.cloud.scheduled-tasks"
            }, i[0] = t) : t = i[0];
            let {
                isCapable: m
            } = (0, p.x)(z.a, t);
            if (i[1] !== m || i[2] !== g?.sidebarArea || i[3] !== h) {
                let e = new URLSearchParams(h);
                n = e.get("automationId"), s = g?.sidebarArea === "scheduled" || !m || !n || "finalAgentTurnStart" !== e.get("messageId"), i[1] = m, i[2] = g?.sidebarArea, i[3] = h, i[4] = n, i[5] = s
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
                h = (0, I.X)(),
                g = (0, p.z)(N.e),
                m = (0, p.x)(L.j, l),
                {
                    data: f
                } = (0, p.x)(H.b, i),
                v = (0, p.z)(B.a),
                y = (0, b.useRef)(null),
                x = (0, b.useRef)(null);
            o[0] !== c ? (t = c.findLast(Q), o[0] = c, o[1] = t) : t = o[1];
            let C = t;
            o[2] !== g || o[3] !== i || o[4] !== v || o[5] !== C || o[6] !== f || o[7] !== h || o[8] !== u || o[9] !== d ? (n = () => {
                null == f || null == g || (v || y.current === g || (y.current = g, (0, W.openAutomationSidePanelTab)({
                    scope: u,
                    automationId: i,
                    title: f.automation.title
                })), null != d && null != C && x.current !== g && (x.current = g, d.scrollToKey(C.turnKey, V, {
                    align: "top"
                }).then(() => {
                    u.set(U.a, {
                        locationKey: h.key,
                        accountId: g
                    }, !0)
                })))
            }, o[2] = g, o[3] = i, o[4] = v, o[5] = C, o[6] = f, o[7] = h, o[8] = u, o[9] = d, o[10] = n) : n = o[10];
            let _ = (0, b.useEffectEvent)(n);
            o[11] !== g || o[12] !== l || o[13] !== f?.automation.conversation_id || o[14] !== _ || o[15] !== m ? (a = () => {
                null != g && f?.automation.conversation_id === (m ?? l) && _()
            }, o[11] = g, o[12] = l, o[13] = f?.automation.conversation_id, o[14] = _, o[15] = m, o[16] = a) : a = o[16];
            let w = C?.turnKey,
                T = f?.automation.conversation_id;
            return o[17] !== g || o[18] !== v || o[19] !== l || o[20] !== m || o[21] !== w || o[22] !== T || o[23] !== d ? (s = [g, l, w, T, m, v, d], o[17] = g, o[18] = v, o[19] = l, o[20] = m, o[21] = w, o[22] = T, o[23] = d, o[24] = s) : s = o[24], (0, b.useEffect)(a, s), null
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
            return t.items.some(X)
        }

        function X(e) {
            return "user-message" !== e.type
        }
        var $ = n("nKJ6"),
            Z = n("RN8F"),
            J = n("GMTh"),
            ee = n("zpMv"),
            et = n("PFzG"),
            en = n("KvJW"),
            ea = n("TDcV"),
            er = n("Mali"),
            es = n("SGsN"),
            eo = n("OWtl"),
            ei = n("VnEZ"),
            el = n("mpQG"),
            ec = n("jDEJ"),
            ed = n("yGJW");
        let eu = (0, p.u)(eo.a, null);

        function eh(e, t) {
            if (!e.get(ed.c).isChatgptBrowserReplacement || t.repeat || ((0, ec.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(eu)) return;
            let n = eg("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(eu, n), em(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function ep(e, t, n, a) {
            let r = e.get(eu);
            if (!e.get(ed.c).isChatgptBrowserReplacement || null == r) return a();
            let s = n => {
                em(e, r, n, t)
            };
            s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(eu)?.id !== r.id || e.get(eu)?.printing || e.set(eu, null), a
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

        function em(e, t, n, a) {
            (0, ed.a)(e, el.b, {
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
                g = (0, p.y)(D.a),
                m = (0, p.z)(ea.a),
                f = (0, p.z)(er.a),
                v = (0, b.useRef)(null);
            d[0] !== u || d[1] !== f || d[2] !== g ? (t = function(e, t, n) {
                let a = [];
                for (let n of t) {
                    let t = e.get(L.j, n.conversationId),
                        r = (0, eC.c)(void 0, void 0, void 0, e.get(L.P, n.conversationId) ?? void 0),
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
                    return null != t && (0, eb.f)(t) ? [{
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
            }(g, u, f), d[0] = u, d[1] = f, d[2] = g, d[3] = t) : t = d[3];
            let y = (0, o.a)(t);
            d[4] !== y || d[5] !== g ? (n = (e, t) => {
                eh(g, e), e.defaultPrevented || y.isSuccess || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat || v.current === t || (v.current = t, y.refetch({
                    cancelRefetch: !1
                }).then(() => {
                    t.aborted || window.print()
                }).finally(() => {
                    v.current === t && (v.current = null)
                })))
            }, d[4] = y, d[5] = g, d[6] = n) : n = d[6];
            let C = (0, b.useEffectEvent)(n);
            return d[7] !== C || d[8] !== g ? (s = () => {
                let e, t, n = new AbortController,
                    a = (e = () => {
                        if (!g.get(ed.c).isChatgptBrowserReplacement) return;
                        let e = g.get(eu);
                        if (e?.printing) return;
                        let t = {
                            ...e ?? eg("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_UNOBSERVED"),
                            printing: !0
                        };
                        g.set(eu, t), em(g, t, "CHATGPT_CONVERSATION_PRINT_STAGE_BEFORE_PRINT")
                    }, t = () => {
                        let e = g.get(eu);
                        g.get(ed.c).isChatgptBrowserReplacement && e?.printing && (em(g, e, "CHATGPT_CONVERSATION_PRINT_STAGE_AFTER_PRINT"), g.set(eu, null))
                    }, window.addEventListener("beforeprint", e, !0), window.addEventListener("afterprint", t), () => {
                        window.removeEventListener("beforeprint", e, !0), window.removeEventListener("afterprint", t), g.set(eu, null)
                    }),
                    r = e => C(e, n.signal);
                return window.addEventListener("keydown", r, !0), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), a()
                }
            }, d[7] = C, d[8] = g, d[9] = s) : s = d[9], d[10] !== m || d[11] !== g ? (l = [m, g], d[10] = m, d[11] = g, d[12] = l) : l = d[12], (0, b.useEffect)(s, l), d[13] !== h || d[14] !== y || d[15] !== u || d[16] !== f ? (c = f ? (0, x.createPortal)((0, a.jsx)("div", {
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
                g = (0, b.useRef)(null),
                m = (0, p.z)(ea.a),
                f = (0, p.x)(L.j, d),
                v = (0, p.z)(ew.b);
            c[0] !== m || c[1] !== f ? (t = ["chatgpt-print-history", m, f], c[0] = m, c[1] = f, c[2] = t) : t = c[2], c[3] !== u || c[4] !== f ? (n = e => {
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
            c[9] !== m || c[10] !== d || c[11] !== h || c[12] !== v || c[13] !== y || c[14] !== u || c[15] !== f ? (s = (e, t) => {
                eh(u, e), e.defaultPrevented || null == f || 0 === v || u.get(ew.c, f)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat || g.current === t || (g.current = t, y({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && u.get(ea.a) === m) {
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
                            queryKey: ["chatgpt-print-assets", m, d],
                            predicate: eP
                        }).map(eE)), t.aborted || u.get(ea.a) !== m || window.print()
                    }
                }).finally(() => {
                    g.current === t && (g.current = null)
                })))
            }, c[9] = m, c[10] = d, c[11] = h, c[12] = v, c[13] = y, c[14] = u, c[15] = f, c[16] = s) : s = c[16];
            let x = (0, b.useEffectEvent)(s);
            return c[17] !== x ? (i = () => {
                let e = new AbortController,
                    t = t => x(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, c[17] = x, c[18] = i) : i = c[18], c[19] !== m || c[20] !== f ? (l = [m, f], c[19] = m, c[20] = f, c[21] = l) : l = c[21], (0, b.useEffect)(i, l), null
        }

        function eE(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(eA)
        }

        function eA() {}

        function eP(e) {
            return e.getObserversCount() > 0
        }
        var eM = n("DrWu"),
            eR = n("x4uR"),
            ek = n("hx97");

        function eO(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var eN = n("MrzV"),
            eG = n("ygO2"),
            eF = n("gbRX");

        function ez(e) {
            let t, n, s = (0, r.c)(4),
                {
                    isFetching: o,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, p.z)(!i && eF.a) || o;
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

        function eB(e) {
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
        var eL = n("FfNP"),
            eD = n("Bbed"),
            eH = n("WVag");
        let eW = (0, eD.a)(eL.loadEpicChartIndicator);

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
        var eK = n("DWXw"),
            eq = n("FmJi"),
            eV = n("TSib"),
            eY = n("sIex"),
            eQ = n("jEN2"),
            eX = n("kphc"),
            e$ = n("YWcr"),
            eZ = n("RGWz"),
            eJ = n("QxH2"),
            e0 = n("mwa5"),
            e1 = n("UuVq"),
            e2 = n("TwSq"),
            e3 = n("l0fK"),
            e4 = n("hkBU"),
            e5 = n("bf6R"),
            e6 = n("UxN3"),
            e7 = n("CqQF"),
            e8 = n("GKsW"),
            e9 = n("yWTM"),
            te = n("SkIz"),
            tt = n("aNqv"),
            tn = n("ibLK"),
            ta = n("T1PX"),
            tr = n("Fjd0"),
            ts = n("VPBa"),
            to = n("PWXi"),
            ti = n("zOE4"),
            tl = n("Fm9E"),
            tc = n("HnT3"),
            td = n("QSwz"),
            tu = n("ze43"),
            th = n("KXCj"),
            tp = n("e1xH"),
            tg = n("pAFY");
        n("kErH");
        var tm = n("dJBt"),
            tf = n("FR8U"),
            tv = n("xqnZ"),
            ty = n("UMxD"),
            tb = n("VV6Z"),
            tx = n("JhDO"),
            tC = n("Mbqw"),
            t_ = n("kl6F"),
            tI = n("kfGJ"),
            tw = n("khOd"),
            tT = n("RZBv"),
            tj = n("yzQ9"),
            tS = n("hZax"),
            tE = n("OMIV"),
            tA = n("O666"),
            tP = n("tdP6"),
            tM = n("JCJj"),
            tR = n("KkZX"),
            tk = n("vjO1"),
            tO = n("ftSl"),
            tN = n("BdYu"),
            tG = n("Nyub"),
            tF = n("jZDY"),
            tz = n("HgLj"),
            tB = n("Bc5r"),
            tL = n("bIvi"),
            tD = n("Elta"),
            tH = n("eShZ"),
            tW = n("qqut"),
            tU = n("CsbC"),
            tK = n("tCyZ"),
            tq = n("c6kO"),
            tV = n("GgLN"),
            tY = n("KdfG"),
            tQ = n("AOHi"),
            tX = n("TPAN"),
            t$ = n("U2UX"),
            tZ = n("gbrq"),
            tJ = n("K33Q"),
            t0 = n("mv4d"),
            t1 = n("w7Qu"),
            t2 = n("dt5v"),
            t3 = n("bWX0"),
            t4 = n("smHt"),
            t5 = n("aoTb"),
            t6 = n("pqpL"),
            t7 = n("riqo"),
            t8 = n("XcRr"),
            t9 = n("dk3M"),
            ne = n("WFY2"),
            nt = n("vldH"),
            nn = n("ISgP"),
            na = n("t2JB"),
            nr = n("DIH2"),
            ns = n("aFoA"),
            no = n("H8lk"),
            ni = n("rxj0"),
            nl = n("XkLc"),
            nc = n("S95W");
        let nd = (0, p.v)(eo.a, e => null);
        var nu = n("DM5G"),
            nh = n("gJe8"),
            np = n("d2rV"),
            ng = n("Zaf2"),
            nm = n("EFj1"),
            nf = n("TL6G"),
            nv = n("eKlv"),
            ny = n("OtLV"),
            nb = n("XtQP");

        function nx(e) {
            let t, n, a, s, o, i, l, c = (0, r.c)(16),
                {
                    conversationId: d
                } = e,
                u = (0, p.y)(eo.a),
                h = (0, C.a)();
            return c[0] !== d || c[1] !== h || c[2] !== u ? (t = () => {
                (0, nb.c)(u, d).catch(() => {
                    u.get(es.f).danger(h.formatMessage(ny.a.markUnreadError), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.sidebar.markUnreadError"
                        }
                    })
                })
            }, c[0] = d, c[1] = h, c[2] = u, c[3] = t) : t = c[3], (0, nm.a)("markThreadUnread", t), c[4] !== d || c[5] !== u ? (n = () => (0, nv.c)(u, d), a = [d, u], c[4] = d, c[5] = u, c[6] = n, c[7] = a) : (n = c[6], a = c[7]), (0, nf.d)("rename-thread", n, a), c[8] !== d || c[9] !== u ? (s = () => (0, nv.d)(u, d), o = [d, u], c[8] = d, c[9] = u, c[10] = s, c[11] = o) : (s = c[10], o = c[11]), (0, nf.d)("toggle-thread-pin", s, o), c[12] !== d || c[13] !== u ? (i = () => (0, nv.a)(u, d), l = [d, u], c[12] = d, c[13] = u, c[14] = i, c[15] = l) : (i = c[14], l = c[15]), (0, nf.d)("archive-thread", i, l), null
        }
        var nC = n("VlIB"),
            n_ = n("Ow2S"),
            nI = n("ASxG"),
            nw = n("wD9O"),
            nT = n("lsfk"),
            nj = n("IObw"),
            nS = n("BOYb"),
            nE = n("kQNh"),
            nA = n.n(nE),
            nP = n("NkEl"),
            nM = n("FW69"),
            nR = "highlight-x7OnzP",
            nk = "safari-wcvuzB",
            nO = "block-t7sxyD";
        let nN = "chatgpt-search-result",
            nG = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* nF(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(nG) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
                c.setStart(i.node, r - i.start), c.setEnd(l.node, o - l.start), nz(c) && ((0, nM.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function nz(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let nB = nI.object({
            chatGptSearchNavigation: nI.object({
                key: nI.string(),
                messageId: nI.string()
            })
        });

        function nL(e) {
            let t, n, a, s, o, i, l, c, d, u, h, g, m = (0, r.c)(48),
                {
                    conversationId: f,
                    entries: v,
                    isConversationFetching: y,
                    turnListApi: x
                } = e,
                C = (0, p.y)(eo.a),
                _ = (0, p.x)(L.r, f),
                w = (0, nT.b)(),
                T = (0, nw.c)();
            m[0] !== w || m[1] !== T ? (t = e => {
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
                            left: (0, nw.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                        h = (0, nw.b)(o.height, n),
                        p = (0, nw.b)(o.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, w, T)
            }, m[0] = w, m[1] = T, m[2] = t) : t = m[2];
            let j = (0, b.useEffectEvent)(t),
                S = (0, I.X)(),
                E = (0, I.Z)(),
                A = new URLSearchParams(S.search),
                P = A.get("messageId") ?? A.get("message"),
                M = nB.safeParse(S.state).data?.chatGptSearchNavigation,
                R = P ?? M?.messageId,
                k = A.get("selectedTextQuery") ?? "",
                O = (0, p.x)(L.K, f),
                N = !k || null != R && null != O && (O[R]?.message != null || Object.values(O).some(e => e.message?.id === R)),
                G = k || A.get("historySearchQuery") || "",
                F = JSON.stringify([f, null != P ? S.key : M?.key ?? S.key, R]);
            m[3] !== F ? (n = {
                key: F,
                handled: !1,
                positioned: !1
            }, m[3] = F, m[4] = n) : n = m[4];
            let z = (0, b.useRef)(n),
                B = (0, b.useEffectEvent)(e => {
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
                        let g = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(nA()).join("|") : nA()(c), null == c ? "giu" : "gu"),
                            m = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(_);

                        function C() {
                            for (let t of (m = !0, x.disconnect(), clearTimeout(r), null != s && cancelAnimationFrame(s), null != a && CSS.highlights.get(nN) === a && CSS.highlights.delete(nN), e.classList.remove(nR, nk), b)) t.classList.remove(nR, nO)
                        }

                        function _() {
                            m || null != r || null != s || (r = setTimeout(() => {
                                r = void 0, s = requestAnimationFrame(() => {
                                    s = void 0, I()
                                })
                            }, 50))
                        }

                        function I() {
                            let t;
                            if (m || !e.isConnected || null != s) return;
                            let d = performance.now() - f;
                            if (d < 4e3 && null != e.querySelector("[data-search-result-pending]")) return void _();
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
                                for (let e of nF(t, c))
                                    if (!(n++ < l)) {
                                        w.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(nG) != null || u.some(t => {
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), nz(a) && w.push(a)
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
                                A = [E?.top, E?.left, E?.width, E?.height, e.scrollHeight].join(":");
                            if (d < 4e3 && A !== o) {
                                o = A, _();
                                return
                            }
                            if (!v) {
                                v = !0, o = void 0, n?.(t), _();
                                return
                            }
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...w), CSS.highlights.set(nN, a)) : w.length > 0 && T.push(e), e.classList.add(nR), (0, nS.e)() && e.classList.add(nk), T)) t.classList.add(nR, nO), b.add(t);
                            r = setTimeout(C, 3600)
                        }
                        return x.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), I(), C
                    }(e, G, j, k ? "phrase" : "terms", Number(A.get("selectedTextOccurrence"))) : void 0;
                    return null != P && (A.delete("messageId"), A.delete("message"), A.delete("historySearchQuery"), A.delete("selectedTextQuery"), A.delete("selectedTextOccurrence"), E({
                        pathname: S.pathname,
                        search: A.toString(),
                        hash: S.hash
                    }, {
                        replace: !0,
                        preventScrollReset: !0,
                        state: {
                            ...S.state,
                            chatGptSearchNavigation: {
                                key: S.key,
                                messageId: P
                            }
                        }
                    })), t
                });
            m[5] !== f || m[6] !== y || m[7] !== R || m[8] !== F || m[9] !== C || m[10] !== N ? (a = () => {
                if (z.current.key !== F && (z.current = {
                        key: F,
                        handled: !1,
                        positioned: !1
                    }), null != R && !y && N) return C.watch(e => {
                    !z.current.handled && (0, L.Lb)(e, f, R) && (z.current.handled = !0)
                })
            }, s = [f, y, R, F, C, N], m[5] = f, m[6] = y, m[7] = R, m[8] = F, m[9] = C, m[10] = N, m[11] = a, m[12] = s) : (a = m[11], s = m[12]), (0, b.useLayoutEffect)(a, s), m[13] !== v || m[14] !== R ? (o = null == R ? void 0 : v.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(R)
            }), m[13] = v, m[14] = R, m[15] = o) : o = m[15];
            let D = o;
            m[16] !== S || m[17] !== E || m[18] !== P || m[19] !== M ? (i = () => {
                null == P && null != M && E(S, {
                    replace: !0,
                    preventScrollReset: !0,
                    state: {
                        ...S.state,
                        chatGptSearchNavigation: void 0
                    }
                })
            }, m[16] = S, m[17] = E, m[18] = P, m[19] = M, m[20] = i) : i = m[20];
            let H = (0, b.useEffectEvent)(i);
            if (m[21] !== H || m[22] !== _ || m[23] !== y || m[24] !== D ? (l = () => {
                    !z.current.positioned || null != D || y || _ || H()
                }, m[21] = H, m[22] = _, m[23] = y, m[24] = D, m[25] = l) : l = m[25], m[26] !== _ || m[27] !== y || m[28] !== D ? (c = [_, y, D], m[26] = _, m[27] = y, m[28] = D, m[29] = c) : c = m[29], (0, b.useLayoutEffect)(l, c), m[30] !== R || m[31] !== D?.id || m[32] !== D?.turn.items || m[33] !== D?.turnKey) {
                let e = D?.turn.items.findIndex(e => "messageId" in e && e.messageId === R || "assistant-message" === e.type && null != R && e.sourceMessageIds?.includes(R)) ?? -1,
                    t = D?.turn.items[e],
                    n = D?.id;
                u = D?.turnKey, d = null == t || null == n ? void 0 : (0, nj.b)(t, e, n), m[30] = R, m[31] = D?.id, m[32] = D?.turn.items, m[33] = D?.turnKey, m[34] = d, m[35] = u
            } else d = m[34], u = m[35];
            let W = d;
            return m[36] !== B || m[37] !== R || m[38] !== u || m[39] !== x || m[40] !== W ? (h = () => {
                let e;
                if (null == u || null == x) return;
                let t = new AbortController,
                    n = null;
                return x.scrollToKey(u, e => n = (null == R ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(R)}"]`)) ?? (null == W ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(W)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = B(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, m[36] = B, m[37] = R, m[38] = u, m[39] = x, m[40] = W, m[41] = h) : h = m[41], m[42] !== R || m[43] !== F || m[44] !== u || m[45] !== x || m[46] !== W ? (g = [F, R, u, x, W], m[42] = R, m[43] = F, m[44] = u, m[45] = x, m[46] = W, m[47] = g) : g = m[47], (0, b.useLayoutEffect)(h, g), null
        }
        var nD = n("u6zN"),
            nH = n("SZi8"),
            nW = n("lBzi"),
            nU = n("Ga6O"),
            nK = n("MikY"),
            nq = n("vknh"),
            nV = n("Ppno"),
            nY = n("hXcw"),
            nQ = n("ybWE"),
            nX = n("wDWo"),
            n$ = n("IgxH"),
            nZ = n("iaTG"),
            nJ = n("c3f5"),
            n0 = n("iXTs"),
            n1 = n("xAIC"),
            n2 = n("tNq4"),
            n3 = n("B0Wx"),
            n4 = n("if6d"),
            n5 = n("r2mP"),
            n6 = n("UTM4"),
            n7 = n("Jj1R"),
            n8 = n("ZhoB"),
            n9 = n("RADZ"),
            ae = n("rZzh"),
            at = n("FWlV");

        function an(e) {
            let t, n, s, o, i, l, c, d, u = (0, r.c)(49),
                {
                    entry: h,
                    renderMcpApps: g,
                    trackShownImpressions: m
                } = e,
                f = void 0 === g || g,
                v = void 0 === m || m,
                y = (0, p.y)(eo.a);
            u[0] !== h.conversationId ? (t = (0, t_.n)({
                routeKind: "chatgpt-thread",
                conversationId: h.conversationId
            }), u[0] = h.conversationId, u[1] = t) : t = u[1];
            let b = (0, p.x)(v ? tc.c : null, t),
                x = v && null == b,
                C = (0, p.x)(h.isMostRecentTurn ? ae.d : null, h.conversationId);
            u[2] !== h.timestampSeparatorAtMs ? (n = null == h.timestampSeparatorAtMs ? null : (0, a.jsx)(n5.b, {
                sentAtMs: h.timestampSeparatorAtMs
            }), u[2] = h.timestampSeparatorAtMs, u[3] = n) : n = u[3];
            let I = null != h.paragen;
            return u[4] !== h.branchingMessageId || u[5] !== h.browserConversationId || u[6] !== h.conversationId || u[7] !== h.feedbackEnabled || u[8] !== h.hasLaterSitesPreview || u[9] !== h.id || u[10] !== h.isMostRecentTurn || u[11] !== h.isReadOnly || u[12] !== h.isTemporaryChat || u[13] !== h.isWorkConversation || u[14] !== h.onEditUserMessage || u[15] !== h.onFork || u[16] !== h.onRegenerateResponse || u[17] !== h.pendingSubmissionAttachments || u[18] !== h.readAloudEnabled || u[19] !== h.referenceImageSuggestionActionInput || u[20] !== h.safetyReview || u[21] !== h.shareEnabled || u[22] !== h.turn || u[23] !== f || u[24] !== x || u[25] !== I ? (s = (0, a.jsx)(n7.a, {
                browserConversationId: h.browserConversationId,
                conversationId: h.conversationId,
                branchingMessageId: h.branchingMessageId,
                hasLaterSitesPreview: h.hasLaterSitesPreview,
                hostId: tI.a,
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
            }), u[4] = h.branchingMessageId, u[5] = h.browserConversationId, u[6] = h.conversationId, u[7] = h.feedbackEnabled, u[8] = h.hasLaterSitesPreview, u[9] = h.id, u[10] = h.isMostRecentTurn, u[11] = h.isReadOnly, u[12] = h.isTemporaryChat, u[13] = h.isWorkConversation, u[14] = h.onEditUserMessage, u[15] = h.onFork, u[16] = h.onRegenerateResponse, u[17] = h.pendingSubmissionAttachments, u[18] = h.readAloudEnabled, u[19] = h.referenceImageSuggestionActionInput, u[20] = h.safetyReview, u[21] = h.shareEnabled, u[22] = h.turn, u[23] = f, u[24] = x, u[25] = I, u[26] = s) : s = u[26], u[27] !== h.conversationId || u[28] !== h.isTemporaryChat || u[29] !== h.isWorkConversation || u[30] !== h.paragen || u[31] !== x ? (o = null == h.paragen ? null : (0, a.jsx)(n9.a, {
                comparison: h.paragen,
                conversationId: h.conversationId,
                hostId: tI.a,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                trackTaskViews: x
            }, h.paragen.promptMessageId), u[27] = h.conversationId, u[28] = h.isTemporaryChat, u[29] = h.isWorkConversation, u[30] = h.paragen, u[31] = x, u[32] = o) : o = u[32], u[33] !== h.showSharedConversationPrivateDisclaimer ? (i = h.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(e6.a, {
                    className: "shrink-0",
                    legacyIcon: n6.a,
                    asset16: at.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(_.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you",
                    description: "Privacy disclaimer shown between the original shared ChatGPT conversation and the reader's new private messages after they continue the shared conversation in Codex Desktop"
                })]
            }) : null, u[33] = h.showSharedConversationPrivateDisclaimer, u[34] = i) : i = u[34], u[35] !== h || u[36] !== C || u[37] !== y || u[38] !== x ? (l = h.isMostRecentTurn ? (0, a.jsx)(nK.a, {
                conversationId: h.conversationId,
                errorMessage: h.errorMessage,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                onRetry: null == h.onRegenerateResponse || null == C ? void 0 : async e => {
                    let t = y.get(ae.d, h.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = y.get(L.R, h.conversationId)?.metadata?.errorCode;
                    (0, n8.d)(y.get(ed.c).logProductEvent, {
                        conversationId: y.get(L.j, h.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await h.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, ae.e)(t.message, y.get(n_.t, h.conversationId)),
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

        function aa(e) {
            let t, n, s, o = (0, r.c)(8),
                {
                    entries: i,
                    historyLoader: l,
                    isVisible: c
                } = e,
                d = c ? l : null;
            return o[0] !== i ? (t = (0, a.jsx)(n4.a, {
                entries: i,
                preserveMeasuredTurnViewport: !0,
                RowComponent: ar
            }), o[0] = i, o[1] = t) : t = o[1], o[2] !== d || o[3] !== t ? (n = (0, a.jsx)(ei.a, {
                value: null,
                children: (0, a.jsxs)(eT.a, {
                    value: null,
                    children: [d, t]
                })
            }), o[2] = d, o[3] = t, o[4] = n) : n = o[4], o[5] !== c || o[6] !== n ? (s = (0, a.jsx)(tk.a, {
                active: c,
                presentation: "panel",
                children: n
            }), o[5] = c, o[6] = n, o[7] = s) : s = o[7], s
        }

        function ar(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(an, {
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
        var as = n("wwvo"),
            ao = n("u4MG"),
            ai = n("jAnS");
        let al = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(L.j, e);
            return null != a ? a : n(L.C, e) || n(n_.h, e) || null != n(n_.x, e) ? void 0 : null
        });

        function ac(e) {
            let t, n, s, o, i, l, c, d = (0, r.c)(30),
                {
                    children: u,
                    conversationId: h,
                    routePattern: g,
                    homePath: m
                } = e,
                f = void 0 === m ? "/" : m,
                {
                    hash: v,
                    pathname: y,
                    search: b,
                    state: x
                } = (0, I.X)(),
                {
                    gizmoId: C
                } = (0, I.bb)(),
                _ = (0, p.x)(al, h),
                w = (0, p.x)(L.C, h),
                T = (0, p.x)(L.P, h),
                j = w ? T : C;
            d[0] !== j ? (t = null != j && (0, ao.a)(j) ? j : null, d[0] = j, d[1] = t) : t = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                enabled: !1
            }, d[2] = n) : n = d[2];
            let {
                data: S
            } = (0, p.x)(eR.b, t, n);
            d[3] !== j ? (s = null == j || (0, ao.a)(j) ? null : j, d[3] = j, d[4] = s) : s = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (o = {
                enabled: !1
            }, d[5] = o) : o = d[5];
            let {
                data: E
            } = (0, p.x)(as.b, s, o);
            if (null === _ || (0, ai.e)(b) && null != _ && !w) {
                let e;
                return d[6] !== f || d[7] !== b ? (e = (0, a.jsx)(I.l, {
                    replace: !0,
                    to: {
                        pathname: f,
                        search: b
                    }
                }), d[6] = f, d[7] = b, d[8] = e) : e = d[8], e
            }
            d[9] !== h || d[10] !== E?.gizmo || d[11] !== j || d[12] !== S?.gizmo || d[13] !== _ || d[14] !== g ? (i = null != g ? (0, I.C)(g, {
                conversationId: _ ?? h
            }) : (0, ai.c)(_ ?? h, {
                gizmoId: S?.gizmo.short_url ?? E?.gizmo.short_url ?? j
            }), d[9] = h, d[10] = E?.gizmo, d[11] = j, d[12] = S?.gizmo, d[13] = _, d[14] = g, d[15] = i) : i = d[15];
            let A = i;
            if (d[16] !== A || d[17] !== v || d[18] !== y || d[19] !== _ || d[20] !== b || d[21] !== x) {
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
                l = y !== A || t ? (0, a.jsx)(I.l, {
                    replace: !0,
                    state: n,
                    to: {
                        hash: t ? "" : v,
                        pathname: A,
                        search: t ? e.toString() : b
                    }
                }) : null, d[16] = A, d[17] = v, d[18] = y, d[19] = _, d[20] = b, d[21] = x, d[22] = l
            } else l = d[22];
            return d[27] !== u || d[28] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [l, u]
            }), d[27] = u, d[28] = l, d[29] = c) : c = d[29], c
        }
        var ad = n("SZCv"),
            au = n.n(ad),
            ah = n("ALWK"),
            ap = n("PC5z"),
            ag = n("lZ4W"),
            am = n("WWSI"),
            af = n("U3Gy"),
            av = n("mKTJ");
        let ay = (0, p.c)(t_.a, e => {
                let {
                    get: t
                } = e;
                return t(ah.n)
            }, {
                isEqual: au()
            }),
            ab = (0, p.c)(t_.a, e => {
                let {
                    get: t
                } = e;
                return t(ap.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function ax(e) {
            let t, n, s, o, i = (0, r.c)(19),
                {
                    conversationId: l,
                    entries: c,
                    onApiChange: d,
                    onVisibleContentReady: u,
                    responseSpacerState: h
                } = e,
                {
                    sharedConversationId: g
                } = (0, I.bb)(),
                m = (0, p.z)(null == g ? null : ay),
                f = (0, p.z)(ab);
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
            let v = f.flatMap(t);
            if (null != g && m?.size)
                for (let e of c) e.turn.items.flatMap(aw).some(e => "chatgpt-hosted-widget" === e.type && (0, av.f)(e) && m.has((0, av.e)(g, e.messageId))) && v.push(e.turnKey);
            let y = c.findLast(a_);
            h?.voiceAutoScrollEnabled && null != y && v.push(y.turnKey);
            let b = (0, p.x)(ag.a, l);
            if (null != b) {
                let e;
                i[2] !== b ? (e = e => e.turn.items.flatMap(aC).some(e => "user-message" === e.type && e.messageId === b), i[2] = b, i[3] = e) : e = i[3];
                let t = c.find(e);
                null != t && v.push(t.turnKey)
            }
            let x = (0, p.x)(af.b, l);
            i[4] !== l || i[5] !== c || i[6] !== x ? (n = (0, am.a)(c, x, l), i[4] = l, i[5] = c, i[6] = x, i[7] = n) : n = i[7];
            let C = h?.getHeightPx,
                _ = h?.voiceAutoScrollEnabled ? y?.turnKey : void 0,
                w = h?.onTurnLayoutReady;
            return i[8] !== h ? (s = e => {
                let {
                    heightDeltaPx: t
                } = e;
                h?.consumeGrowth(t ?? 0)
            }, i[8] = h, i[9] = s) : s = i[9], i[10] !== d || i[11] !== u || i[12] !== v || i[13] !== n || i[14] !== C || i[15] !== _ || i[16] !== w || i[17] !== s ? (o = (0, a.jsx)(n4.a, {
                entries: n,
                getBottomScrollPaddingPx: C,
                layoutReadyTurnKey: _,
                onTurnLayoutReady: w,
                onLatestTurnHeightChange: s,
                onApiChange: d,
                onVisibleContentReady: u,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: v,
                RowComponent: an
            }), i[10] = d, i[11] = u, i[12] = v, i[13] = n, i[14] = C, i[15] = _, i[16] = w, i[17] = s, i[18] = o) : o = i[18], o
        }

        function aC(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function a_(e) {
            let {
                turn: t
            } = e;
            return t.items.some(aI)
        }

        function aI(e) {
            return "user-message" === e.type
        }

        function aw(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var aT = n("XAP6"),
            aj = n("bzoy"),
            aS = n("LYS1"),
            aE = n("aZoZ"),
            aA = n("Gv8v"),
            aP = n("EGpF"),
            aM = n("mTPq"),
            aR = n("Vcrm"),
            ak = n("MxKj");
        let aO = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(L.Y, e);
            if (!(0, L.xb)(a)) return !0;
            let r = n(L.K, e),
                s = n(L.A, e);
            if (null == r || null == s) return !1;
            let o = r[s]?.message;
            if (null == o || aS.a.has(o.author.role)) return !1;
            let i = n(L.x, e),
                l = (0, aM.c)({
                    mapping: r,
                    current_node: s
                }, n(L.O, e)),
                c = n(L.$, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(L.j, e) && !(0, aj.e)(n(L.o, e)) && null != c && !n(aT.b).has(c) && null != aG(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });
        async function aN(e, t) {
            let {
                conversationId: n,
                isTemporaryChat: a = !1,
                messageId: r,
                prompt: s,
                renderFormat: o,
                inlineSystemHints: i
            } = t;
            if (e.get(n_.h, n)) throw new aA.a("edit_message_busy", "The chat is busy.");
            let l = e.get(L.x, n);
            if ("tpp" === l) throw new aA.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
            if (!e.get(aO, n)) throw new aA.a("edit_message_busy", "The chat is busy.");
            let c = e.get(aE.b, {
                conversationId: n,
                messageId: r
            });
            if (null == c) throw new aA.a("edit_message_target_unavailable", "The user message could not be edited.");
            let {
                selectedModel: d
            } = c, u = s.trim(), h = (0, aE.c)(c.message, e.get, i), p = (0, ak.c)({
                message: c.message,
                prompt: u,
                renderFormat: o,
                systemHints: h,
                inlineSystemHints: i
            }), g = (0, v.f)(p.message.metadata), m = p.message.content, f = "multimodal_text" === m.content_type && m.parts.some(e => "string" != typeof e);
            if (0 === u.length && 0 === g.length && !f) throw new aA.a("edit_message_empty", "The edited message cannot be empty.");
            if (e.get(tE.c, "3574573347")) {
                let t = e.get(aE.a, n);
                t?.messageId === r && t.prompt === s && au()((0, aE.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(aE.a, n, {
                    messageId: r,
                    prompt: s,
                    isTemporaryChat: a,
                    inlineSystemHints: i
                }), (0, nH.f)(e, n, {
                    isTemporaryChat: a
                }))
            }
            let y = aG(e.get, n),
                b = y.request.current,
                x = () => aG(e.get, n).request.current === b && au()(e.get(aE.b, {
                    conversationId: n,
                    messageId: r
                }), c) && !(0, L.xb)(e.get(L.Y, n));
            e.set(n_.h, n, !0);
            try {
                if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(aR.a, n) && (await b.stop(), await b.closed), !x()) throw new aA.a("edit_message_target_unavailable", "The edited message or active response changed.");
                await (0, ak.submitChatGPTCompletion)(e, {
                    isSubmissionCurrent: x,
                    isRequestCurrent: () => e.get(L.A, n) === p.message.id,
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
                e.set(n_.h, n, !1)
            }
        }

        function aG(e, t) {
            let n = e(aP.a, t),
                a = e(L.j, t);
            return null == n.request.current && null != a ? e(aP.a, a) : n
        }
        var aF = n("xtkq"),
            az = n("PG5R"),
            aB = n("aEnb"),
            aL = n("iLYI"),
            aD = n("wVX4");

        function aH(e) {
            let t, n, s, o, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, p.y)(eo.a),
                d = (0, C.a)(),
                u = (0, tF.a)(),
                h = (0, p.x)(L.Y, l),
                g = (0, p.x)(L.$, l),
                m = (0, p.x)(L.v, l),
                f = (0, p.x)(L._, l),
                v = (0, b.useRef)(null),
                y = (0, b.useRef)(null);
            i[0] !== m || i[1] !== l || i[2] !== d || i[3] !== g || i[4] !== c || i[5] !== h || i[6] !== f ? (t = () => {
                let e = v.current;
                if (null == e) return;
                let t = y.current;
                if ((0, L.xb)(h)) {
                    e.textContent = "", y.current = {
                        conversationId: l,
                        requestId: g ?? ("active-async-turn" === h || "active-tpp-turn" === h ? m?.requestId : null) ?? (t?.conversationId === l ? t.requestId : null)
                    };
                    return
                }
                f || (y.current = null, t?.conversationId === l && "idle" === h && m?.result === "completed" && m.requestId === t.requestId && null == c.get(L.B, l) && (e.textContent = d.formatMessage({
                    id: "chatgptConversations.responseComplete",
                    defaultMessage: "Response complete",
                    description: "Polite screen-reader announcement after the ChatGPT response the user was waiting for finishes successfully"
                })))
            }, i[0] = m, i[1] = l, i[2] = d, i[3] = g, i[4] = c, i[5] = h, i[6] = f, i[7] = t) : t = i[7];
            let _ = (0, b.useEffectEvent)(t);
            return (i[8] !== _ ? (n = () => {
                _()
            }, i[8] = _, i[9] = n) : n = i[9], i[10] !== m || i[11] !== l || i[12] !== u || i[13] !== g || i[14] !== h || i[15] !== f ? (s = [l, h, g, m, f, u], i[10] = m, i[11] = l, i[12] = u, i[13] = g, i[14] = h, i[15] = f, i[16] = s) : s = i[16], (0, b.useEffect)(n, s), u) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, x.createPortal)((0, a.jsx)("span", {
                ref: v,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = o) : o = i[17], o) : null
        }
        var aW = n("OOaz"),
            aU = n("n5iL"),
            aK = n("q542"),
            aq = n("pDUk"),
            aV = n("GaCK"),
            aY = n("Dofq");
        let aQ = (0, eD.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(33944)]).then(n.bind(n, "p8Fu"))).ChatGptThreadSummaryPanelBody, {
            fallback: (0, a.jsx)(aK.a.Content, {
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
            errorFallback: (0, a.jsx)(aK.a.Content, {
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
            let i = (0, aK.b)(),
                [l, c] = (0, b.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), o[3] !== l || o[4] !== t ? (s = null == l ? null : (0, a.jsx)(aQ, {
                ...t,
                data: l.data
            }), o[3] = l, o[4] = t, o[5] = s) : s = o[5], s
        }

        function a$(e) {
            let t, n, s, o = (0, r.c)(15),
                {
                    conversationId: i,
                    composerActions: l,
                    readData: c,
                    display: d,
                    shouldBlockExternalEgress: u,
                    showSources: h
                } = e,
                g = void 0 === h || h,
                m = (0, p.y)(D.a),
                f = (0, tS.h)("2903661647"),
                v = f ? "dynamic-isle" : "summary";
            return o[0] !== m || o[1] !== v ? (t = {
                scope: m,
                layout: v
            }, o[0] = m, o[1] = v, o[2] = t) : t = o[2], o[3] !== l || o[4] !== i || o[5] !== f || o[6] !== c || o[7] !== u || o[8] !== g ? (n = (0, a.jsx)(aX, {
                conversationId: i,
                composerActions: l,
                readData: c,
                isUnifiedDynamicIsleEnabled: f,
                showSources: g,
                shouldBlockExternalEgress: u
            }, i), o[3] = l, o[4] = i, o[5] = f, o[6] = c, o[7] = u, o[8] = g, o[9] = n) : n = o[9], o[10] !== d.shouldHideInlineImmediately || o[11] !== d.shouldShow || o[12] !== t || o[13] !== n ? (s = (0, a.jsx)(aK.a.Root, {
                analytics: t,
                shouldHideInlineImmediately: d.shouldHideInlineImmediately,
                shouldShow: d.shouldShow,
                children: n
            }), o[10] = d.shouldHideInlineImmediately, o[11] = d.shouldShow, o[12] = t, o[13] = n, o[14] = s) : s = o[14], s
        }

        function aZ(e) {
            let t, n, s, o, i, l = (0, r.c)(28),
                {
                    allowsThreadContentOverlap: c,
                    conversationId: d,
                    composerActions: u,
                    controlledState: h,
                    readData: g,
                    shouldBlockExternalEgress: m,
                    showSources: f
                } = e,
                v = void 0 === f || f,
                y = (0, p.y)(D.a),
                x = (0, b.useContext)(ei.a),
                _ = (0, C.a)(),
                I = (0, tS.h)("2903661647"),
                w = (0, p.z)(null == h ? tZ.N : null);
            l[0] !== h?.isOpen || l[1] !== w ? (t = h?.isOpen ?? (0, tZ.z)(w, !0), l[0] = h?.isOpen, l[1] = w, l[2] = t) : t = l[2];
            let T = t,
                j = (0, p.z)(aV.b),
                S = h?.isOpen ?? j.isPopoverOpen,
                E = (0, p.x)(aU.f, "togglePinnedSummary");
            (0, tN.b)(y), l[3] !== h || l[4] !== y ? (n = () => {
                null != h ? h.onOpenChange(!h.isOpen) : (0, aY.b)(y)
            }, l[3] = h, l[4] = y, l[5] = n) : n = l[5];
            let P = n;
            (0, nm.a)("togglePinnedSummary", P);
            let M = c ? "browser:rounded-lg browser:bg-surface" : void 0;
            return l[6] !== u || l[7] !== x || l[8] !== h || l[9] !== d || l[10] !== _ || l[11] !== T || l[12] !== S || l[13] !== I || l[14] !== j.displayMode || l[15] !== g || l[16] !== y || l[17] !== E || l[18] !== m || l[19] !== v || l[20] !== P ? (s = "overlay" === j.displayMode ? (0, a.jsx)(aq.a, {
                isOpen: S,
                shouldPreventAutoFocus: h?.shouldPreventAutoFocus,
                onOpenChange: e => {
                    null != h ? h.onOpenChange(e) : y.set(aV.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                        ...t,
                        isPopoverOpen: e
                    })
                },
                trigger: (0, a.jsx)(aK.a.HeaderButton, {
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
                children: null != g ? (0, a.jsx)(ei.a, {
                    value: x,
                    children: (0, a.jsx)(aK.a.PopoverContent, {
                        analytics: {
                            scope: y,
                            layout: I ? "dynamic-isle" : "summary"
                        },
                        children: (0, a.jsx)(aX, {
                            conversationId: d,
                            composerActions: u,
                            readData: g,
                            isUnifiedDynamicIsleEnabled: I,
                            showSources: v,
                            shouldBlockExternalEgress: m
                        }, d)
                    })
                }) : null
            }) : (0, a.jsx)(aK.a.HeaderButton, {
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
            }), l[6] = u, l[7] = x, l[8] = h, l[9] = d, l[10] = _, l[11] = T, l[12] = S, l[13] = I, l[14] = j.displayMode, l[15] = g, l[16] = y, l[17] = E, l[18] = m, l[19] = v, l[20] = P, l[21] = s) : s = l[21], l[22] !== M || l[23] !== s ? (o = (0, a.jsx)("div", {
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
        var aJ = n("JjRy"),
            a0 = n.n(aJ),
            a1 = n("G4E3"),
            a2 = n("KaH3"),
            a3 = n("Yz3b"),
            a4 = n("ghNX"),
            a5 = n("KvVi"),
            a6 = n("m250"),
            a7 = n("Ng4B"),
            a8 = n("bTKb"),
            a9 = n("dGDB"),
            re = n("lIsV");

        function rt(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        var rn = n("JlMc"),
            ra = n("TUMj"),
            rr = n("f6KK"),
            rs = n("JPXZ"),
            ro = n("zWHk");

        function ri(e) {
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
                f = (0, b.useRef)(null);
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
            let v = (0, b.useEffectEvent)(a);
            return c[10] !== v || c[11] !== d || c[12] !== u || c[13] !== m || c[14] !== t ? (s = () => {
                if (!u && t && f.current !== m) return (0, ro.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(m) && v()
                })
            }, c[10] = v, c[11] = d, c[12] = u, c[13] = m, c[14] = t, c[15] = s) : s = c[15], c[16] !== d || c[17] !== u || c[18] !== m || c[19] !== t ? (o = [d, u, m, t], c[16] = d, c[17] = u, c[18] = m, c[19] = t, c[20] = o) : o = c[20], (0, b.useLayoutEffect)(s, o), c[21] !== v || c[22] !== d || c[23] !== u || c[24] !== m || c[25] !== t || c[26] !== g ? (i = () => {
                if (!u || !t || f.current === m || (f.current = m, v(), !d.consumeLocationPromptPrefill(m))) return;
                let {
                    view: e
                } = d, n = t.replace(/\r\n/g, "\n"), a = "codex-app" === g ? (0, rs.f)({
                    schema: e.state.schema,
                    text: n,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, rs.e)({
                    schema: e.state.schema,
                    text: n
                }), r = e.state.tr.replaceWith(0, e.state.doc.content.size, a.content);
                r.setSelection(rr.h.atEnd(r.doc)), e.dispatch(r)
            }, c[21] = v, c[22] = d, c[23] = u, c[24] = m, c[25] = t, c[26] = g, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== m || c[31] !== t || c[32] !== g ? (l = [d, u, m, t, g], c[28] = d, c[29] = u, c[30] = m, c[31] = t, c[32] = g, c[33] = l) : l = c[33], (0, b.useLayoutEffect)(i, l), null
        }
        var rl = n("zKCW");

        function rc(e) {
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
                children: (0, a.jsx)(rl.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: o
                })
            }), l[8] = n, l[9] = o, l[10] = i) : i = l[10], i
        }
        var rd = n("pgeU");
        let ru = (0, eD.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function rh(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, p.y)(eo.a),
                c = (0, p.x)(rd.a, i);
            return o[0] !== i || o[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(rd.a, i);
                        null != e && (0, rd.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], o[0] = i, o[1] = l, o[2] = t, o[3] = n) : (t = o[2], n = o[3]), (0, b.useEffect)(t, n), o[4] !== i || o[5] !== c ? (s = null == c ? null : (0, a.jsx)(ru, {
                conversationId: i,
                effect: c
            }, c.id), o[4] = i, o[5] = c, o[6] = s) : s = o[6], s
        }
        var rp = n("fr5e"),
            rg = n("LEgg");
        let rm = (0, eD.a)(async () => (await n.e(432800).then(n.bind(n, "T7hR"))).AutomationPlanHeaderShortcut);

        function rf(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, tS.h)("2840857813");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(rm, {
                conversationId: s
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        var rv = n("T33u");
        let ry = (0, eD.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function rb(e) {
            let t, n, s, o = (0, r.c)(10),
                {
                    conversationId: i,
                    scheduledAutomationId: l
                } = e,
                c = (0, p.x)(rv.a, i),
                d = (0, tS.h)("3901104270");
            return o[0] !== i || o[1] !== c ? (t = null == c ? (0, a.jsx)(rf, {
                conversationId: i
            }) : null, o[0] = i, o[1] = c, o[2] = t) : t = o[2], o[3] !== i || o[4] !== d || o[5] !== l ? (n = d && null != l ? (0, a.jsx)(ry, {
                conversationId: i,
                automationId: l
            }) : null, o[3] = i, o[4] = d, o[5] = l, o[6] = n) : n = o[6], o[7] !== t || o[8] !== n ? (s = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), o[7] = t, o[8] = n, o[9] = s) : s = o[9], s
        }
        async function rx() {
            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
        }
        async function rC() {
            return (await n.e(963775).then(n.bind(n, "fUWe"))).openConversationFiles
        }
        var r_ = n("Qgfj"),
            rI = n("rmk3"),
            rw = n("f38C"),
            rT = n("MRlq"),
            rj = n("fQbA"),
            rS = n("dDDU"),
            rE = n("soaw"),
            rA = n("ZrYB"),
            rP = n("X6Vn"),
            rM = n("Kwur");
        async function rR(e, t) {
            let a = await rM.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                parameters: {
                    path: {
                        conversation_id: t
                    }
                }
            }).catch(() => null);
            return a?.can_share && 0 !== a.av_sessions.length ? [{
                id: "share-live-session",
                icon: e5.Qi,
                message: (0, r_.e)({
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
                        (0, rP.f)(e, r, {
                            conversationId: t,
                            sessions: a.av_sessions
                        })
                    })
                }
            }] : []
        }
        var rk = n("MYlA"),
            rO = n("sfmI"),
            rN = n("JCtZ"),
            rG = n("g2p6"),
            rF = n("oaTv"),
            rz = n("PME0"),
            rB = n("lgcP"),
            rL = n("AcSY"),
            rD = n("w7E5"),
            rH = n("QmkR"),
            rW = n("xEXG"),
            rU = n("J6LI"),
            rK = n("lUUH"),
            rq = n("ftAl");

        function rV(e) {
            let t, n, s, o = (0, r.c)(17),
                {
                    children: i,
                    conversationId: l,
                    getBaseItems: c,
                    menuTriggerRef: d,
                    navigate: u,
                    onBeforeOpen: h,
                    onOpenChange: g
                } = e,
                m = (0, p.y)(eo.a),
                {
                    data: f
                } = (0, rL.m)(),
                v = (0, rW.b)();
            return o[0] !== f || o[1] !== l || o[2] !== c || o[3] !== d || o[4] !== u || o[5] !== v || o[6] !== m ? (t = () => {
                let e = m.get(rq.a, l, {
                        enabled: !1
                    }),
                    t = (0, ao.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : m.query.getData(eR.b, t);
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
                    } = e, c = (0, ao.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(rD.a), u = t.get(rH.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, g = (a?.conversation_origin === "tpp" || a?.conversation_origin === "flora") && ("allowed" === o || h?.pages.some(e => null != e.cursor) === !0), m = t.get(rH.h, n);
                    return null == s || null == a || t.get(rH.g, n) || (0, rU.c)(a, r).sourceUnavailable || null == (0, rU.b)(t, a, m, !1) || null != c && null == r || null == h || 0 === p && !g ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: r$.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, rK.b)({
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
                    let e = m.get(nW.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await m.query.getOrFetch(nW.chatGptConversationQueryById$, l).catch(rX), null == m.query.getData(nW.chatGptConversationQueryById$, l) && await m.query.getOrFetch(rH.j, [l]).catch(rQ)
                })(), h?.()]);
                let e = m.get(rq.a, l, {
                    enabled: !1
                });
                (0, ao.a)(e?.gizmo_id) && e?.gizmo_id != null && await m.query.getOrFetch(eR.b, e.gizmo_id).catch(rY)
            }, o[8] = l, o[9] = h, o[10] = m, o[11] = n) : n = o[11], o[12] !== i || o[13] !== g || o[14] !== t || o[15] !== n ? (s = (0, a.jsx)(rI.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                onOpenChange: g,
                renderItem: rj.b,
                trigger: "click",
                children: i
            }), o[12] = i, o[13] = g, o[14] = t, o[15] = n, o[16] = s) : s = o[16], s
        }

        function rY() {}

        function rQ() {}

        function rX() {}
        let r$ = (0, r_.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}",
                description: "Name of a ChatGPT project offered as a destination for moving a conversation or Work task"
            }
        });

        function rZ(e) {
            let t, n, s, o, i, l, c, d, u, h, g, m, f, v, y, x, _, w, T, j = (0, r.c)(70),
                {
                    conversationOrigin: E,
                    conversationId: A,
                    title: P,
                    isHandoffPending: M,
                    isArchived: R,
                    isChatConversation: k,
                    onHandoff: O,
                    onOpenMessage: G,
                    projectId: F,
                    projectName: B,
                    serverConversationId: L
                } = e,
                H = (0, p.y)(D.a),
                W = (0, p.y)(eo.a),
                U = (0, rE.a)(),
                K = (0, tS.k)();
            j[0] !== K ? (t = K.checkGate("224248639"), j[0] = K, j[1] = t) : t = j[1];
            let q = t;
            j[2] !== K ? (n = K.getLayer("3017902351").get("web_file_library_enabled", !1), j[2] = K, j[3] = n) : n = j[3];
            let V = n,
                Y = q || V;
            j[4] !== Y ? (s = {
                enabled: Y
            }, j[4] = Y, j[5] = s) : s = j[5];
            let {
                data: Q
            } = (0, p.z)(rG.p, s), X = Y && Q?.fileLibraryEnabledForRegistrationCountry !== !1, $ = (0, C.a)(), Z = (0, I.Z)(), [J, ee] = (0, b.useState)(null), [et, en] = (0, b.useState)(!1), ea = (0, b.useRef)(null), er = (0, b.useRef)(null);
            j[6] === Symbol.for("react.memo_cache_sentinel") ? (o = [], j[6] = o) : o = j[6];
            let ei = (0, b.useRef)(o);
            j[7] === Symbol.for("react.memo_cache_sentinel") ? (i = {
                name: "chatgpt"
            }, j[7] = i) : i = j[7];
            let {
                isCapable: el
            } = (0, p.x)(z.a, i), ec = (0, p.x)(rH.g, L);
            j[8] === Symbol.for("react.memo_cache_sentinel") ? (l = () => ee("shortcut"), j[8] = l) : l = j[8];
            let ed = k && !ec;
            j[9] !== H || j[10] !== L ? (c = () => (0, rO.a)(H.query.getData(nW.chatGptConversationQueryById$, L), H.get(N.g), H.get(N.f)), j[9] = H, j[10] = L, j[11] = c) : c = j[11], j[12] !== ed || j[13] !== c ? (d = {
                enabled: ed,
                isActive: c
            }, j[12] = ed, j[13] = c, j[14] = d) : d = j[14], (0, nm.a)("deleteChat", l, d), j[15] !== W || j[16] !== ec || j[17] !== Z || j[18] !== H || j[19] !== L ? (u = () => {
                !ec && (0, rO.a)(H.query.getData(nW.chatGptConversationQueryById$, L), H.get(N.g), H.get(N.f)) && (ee(null), (0, rB.a)(W, L), Z("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, j[15] = W, j[16] = ec, j[17] = Z, j[18] = H, j[19] = L, j[20] = u) : u = j[20];
            let eu = u;
            j[21] !== $ ? (h = $.formatMessage(r2.more), j[21] = $, j[22] = h) : h = j[22];
            let eh = h;
            j[23] !== H || j[24] !== L ? (g = async () => {
                let e = [];
                ei.current = e, e.push(...await rR(H, L))
            }, j[23] = H, j[24] = L, j[25] = g) : g = j[25];
            let ep = g;
            j[26] !== A || j[27] !== E || j[28] !== X || j[29] !== $ || j[30] !== ec || j[31] !== R || j[32] !== M || j[33] !== U || j[34] !== Z || j[35] !== O || j[36] !== G || j[37] !== F || j[38] !== B || j[39] !== H || j[40] !== L || j[41] !== K || j[42] !== P ? (m = e => {
                let t = H.get(N.e),
                    n = H.get(N.j),
                    a = (0, rO.a)(H.query.getData(nW.chatGptConversationQueryById$, L), H.get(N.g), H.get(N.f)),
                    r = (0, nv.b)(H, L),
                    s = !ec && (0, rO.a)(r, H.get(N.g), H.get(N.f)),
                    o = H.get(S.a).pathname,
                    i = () => U() && o === H.get(S.a).pathname && t === H.get(N.e) && n === H.get(N.j),
                    l = (0, rF.a)(H, A, E, () => (0, rz.a)(Z)),
                    c = [];
                return K.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && c.push({
                    id: "chatgpt-audio-summary",
                    message: (0, r_.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary",
                        description: "Opens the dialog for generating and listening to an audio summary of the current chat"
                    }),
                    icon: e5.ig,
                    selectAfterClose: !0,
                    onSelect: () => {
                        rx().then(e => {
                            i() && e(H, L)
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
                }), X && c.unshift({
                    id: "chatgpt-conversation-files",
                    message: (0, r_.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat",
                        description: "Opens the side panel listing files referenced in the active saved ChatGPT conversation, even when the list is empty"
                    }),
                    icon: e5.rb,
                    onSelect: () => {
                        rC().then(e => {
                            i() && e(H, {
                                conversationId: A,
                                serverConversationId: L,
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
                }), c.push(...(0, rS.a)(H)), (0, rN.a)(H, {
                    organizationItems: (0, rj.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: ei.current,
                    viewItems: c,
                    preferenceItems: null == l ? [] : [l],
                    surface: "header",
                    conversationId: L,
                    stateConversationId: A,
                    conversationOrigin: E,
                    title: P,
                    isHandoffPending: M,
                    canHandoff: null != O,
                    onHandoff: O,
                    projectId: F,
                    projectName: B,
                    onRename: !a || ec || R ? void 0 : () => (0, nv.c)(H, A),
                    isPinned: H.get(rH.h, L) ?? r?.is_starred === !0,
                    onTogglePin: s ? () => {
                        let e = (0, nv.b)(H, L);
                        !(null == e || H.get(rH.g, L)) && (0, rO.a)(e, H.get(N.g), H.get(N.f)) && (0, rH.V)({
                            scope: H,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(rJ)
                    } : void 0,
                    onArchive: !a || ec || R ? void 0 : () => (0, rA.a)(H, L),
                    onUnarchive: a && !ec && R ? () => {
                        (0, rH.W)({
                            scope: H,
                            conversationId: L
                        }).then(() => {
                            H.get(es.f).success($.formatMessage(rT.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            H.get(es.f).danger($.formatMessage(ny.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !a || ec ? void 0 : () => ee("menu")
                })
            }, j[26] = A, j[27] = E, j[28] = X, j[29] = $, j[30] = ec, j[31] = R, j[32] = M, j[33] = U, j[34] = Z, j[35] = O, j[36] = G, j[37] = F, j[38] = B, j[39] = H, j[40] = L, j[41] = K, j[42] = P, j[43] = m) : m = j[43];
            let eg = m;
            j[44] !== eh ? (f = (0, a.jsx)(rw.a, {
                ref: ea,
                className: "no-drag",
                color: "primary",
                label: eh,
                size: "toolbar"
            }), j[44] = eh, j[45] = f) : f = j[45], j[46] !== et || j[47] !== eh || j[48] !== f ? (v = (0, a.jsx)(e7.a, {
                cloneCustomTrigger: !0,
                tooltipContent: eh,
                triggerPopupOpen: et,
                children: f
            }), j[46] = et, j[47] = eh, j[48] = f, j[49] = v) : v = j[49];
            let em = v;
            j[50] !== eg || j[51] !== em || j[52] !== Z || j[53] !== el || j[54] !== ep || j[55] !== L ? (y = el ? (0, a.jsx)(rV, {
                conversationId: L,
                getBaseItems: eg,
                menuTriggerRef: ea,
                navigate: Z,
                onBeforeOpen: ep,
                onOpenChange: en,
                children: em
            }) : (0, a.jsx)(rI.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => eg(),
                onBeforeOpen: ep,
                onOpenChange: en,
                renderItem: rj.b,
                trigger: "click",
                children: em
            }), j[50] = eg, j[51] = em, j[52] = Z, j[53] = el, j[54] = ep, j[55] = L, j[56] = y) : y = j[56];
            let ef = "shortcut" === J,
                ev = null != J;
            return j[57] !== J ? (x = () => {
                er.current = "menu" === J ? ea.current : null, ee(null)
            }, j[57] = J, j[58] = x) : x = j[58], j[59] === Symbol.for("react.memo_cache_sentinel") ? (_ = e => {
                let t = er.current;
                if (er.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, j[59] = _) : _ = j[59], j[60] !== eu || j[61] !== ec || j[62] !== ef || j[63] !== ev || j[64] !== x || j[65] !== P ? (w = (0, a.jsx)(rk.a, {
                autoFocusConfirm: ef,
                open: ev,
                onOpenChange: x,
                onCloseAutoFocus: _,
                isDeleting: ec,
                onConfirm: eu,
                title: P
            }), j[60] = eu, j[61] = ec, j[62] = ef, j[63] = ev, j[64] = x, j[65] = P, j[66] = w) : w = j[66], j[67] !== y || j[68] !== w ? (T = (0, a.jsxs)(a.Fragment, {
                children: [y, w]
            }), j[67] = y, j[68] = w, j[69] = T) : T = j[69], T
        }

        function rJ() {}

        function r0() {
            let e, t, n, s = (0, r.c)(8),
                o = (0, C.a)(),
                [i, l] = (0, b.useState)(!1);
            s[0] !== o ? (e = o.formatMessage(r2.more), s[0] = o, s[1] = e) : e = s[1];
            let c = e;
            return s[2] !== c ? (t = (0, a.jsx)(rw.a, {
                className: "no-drag",
                color: "primary",
                label: c,
                size: "toolbar"
            }), s[2] = c, s[3] = t) : t = s[3], s[4] !== i || s[5] !== c || s[6] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rI.a, {
                    preserveBrowserContextMenu: !0,
                    getItems: r1,
                    onOpenChange: l,
                    renderItem: rj.b,
                    trigger: "click",
                    children: (0, a.jsx)(e7.a, {
                        cloneCustomTrigger: !0,
                        tooltipContent: c,
                        triggerPopupOpen: i,
                        children: t
                    })
                })
            }), s[4] = i, s[5] = c, s[6] = t, s[7] = n) : n = s[7], n
        }

        function r1() {
            return (0, rj.a)([])
        }
        let r2 = (0, r_.f)({
            more: {
                id: "chatgpt.conversation.header.control.more.label",
                defaultMessage: "More",
                description: "Short tooltip and accessible label for the icon-only overflow control in the active ChatGPT conversation header. It opens additional actions for the current chat. Sibling header controls include Share. Keep this single word concise and do not add punctuation. No placeholders."
            }
        });
        var r3 = n("DcfK"),
            r4 = n("WLgA");

        function r5(e) {
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
                    to: (0, r4.c)(c.gizmo.id),
                    children: (0, a.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-1.5",
                        children: [(0, a.jsx)(tf.a, {
                            className: "size-5",
                            color: c.gizmo.display.theme,
                            defaultColor: "secondary",
                            fallbackIcon: (0, a.jsx)(e5.ud, {}),
                            icon: c.gizmo.display.emoji,
                            sharedIcon: "shared" === (0, aD.b)(c) ? (0, a.jsx)(r3.a, {}) : void 0
                        }), (0, a.jsx)("span", {
                            className: "min-w-0 truncate text-default",
                            children: c.gizmo.display.name
                        })]
                    })
                })
            }) : null, o[3] = u, o[4] = c, o[5] = n) : n = o[5], o[6] !== t || o[7] !== g || o[8] !== n ? (s = (0, a.jsx)(A.a.HeaderToolbar, {
                inset: !1,
                children: (0, a.jsx)("div", {
                    className: t,
                    "data-app-shell-thread-content-overlap": g,
                    children: n
                })
            }), o[6] = t, o[7] = g, o[8] = n, o[9] = s) : s = o[9], s
        }
        var r6 = n("dLcZ"),
            r7 = n("W5pg"),
            r8 = n("QcW8"),
            r9 = n("yC2B");

        function se(e) {
            let t, n, s, o, i, c, d, u, h, g = (0, r.c)(31),
                {
                    header: m,
                    courseShortcut: f,
                    progress: v
                } = e,
                {
                    titleBarLeftInset: y,
                    rightPanelAnimatedWidth: b,
                    isContentFullWidth: x
                } = (0, P.g)(),
                _ = (0, p.z)(r8.Z),
                I = (0, p.z)(r8.ab),
                w = (0, C.a)();
            g[0] !== w.locale ? (t = (0, r9.a)(w.locale), g[0] = w.locale, g[1] = t) : t = g[1];
            let T = t,
                j = _?.mode === "split" && "left" === I != ("rtl" === T);
            g[2] !== j || g[3] !== x ? (n = e => j && !x ? e : 0, g[2] = j, g[3] = x, g[4] = n) : n = g[4];
            let S = (0, r7.a)(b, n);
            g[5] !== S || g[6] !== y ? (s = [y, S], g[5] = S, g[6] = y, g[7] = s) : s = g[7];
            let E = (0, r7.a)(s, st);
            g[8] !== E || g[9] !== S ? (o = {
                "--learning-header-left-inset": E,
                insetInlineStart: S
            }, g[8] = E, g[9] = S, g[10] = o) : o = g[10];
            let M = o;
            g[11] !== m ? (i = null == m ? null : (0, a.jsx)("div", {
                className: "min-w-0 flex-1",
                children: m
            }), g[11] = m, g[12] = i) : i = g[12], g[13] !== f ? (c = null == f ? null : (0, a.jsx)("div", {
                className: "flex min-w-0 flex-1",
                children: f
            }), g[13] = f, g[14] = c) : c = g[14], g[15] !== i || g[16] !== c ? (d = (0, a.jsxs)("div", {
                className: "flex w-full min-w-0 items-center gap-toolbar-action",
                children: [i, c]
            }), g[15] = i, g[16] = c, g[17] = d) : d = g[17];
            let R = d;
            if (null == v) return R;
            if (_?.isVisible && "full" === _.mode) {
                let e, t, n;
                return g[18] !== f ? (e = null == f ? null : (0, a.jsx)("div", {
                    className: "flex max-w-[20vw] min-w-0",
                    children: f
                }), g[18] = f, g[19] = e) : e = g[19], g[20] !== v ? (t = (0, a.jsx)("div", {
                    className: "max-w-[30vw] min-w-0",
                    children: v
                }), g[20] = v, g[21] = t) : t = g[21], g[22] !== t || g[23] !== e ? (n = (0, a.jsx)(A.a.HeaderAction, {
                    actionId: "sectioned-conversation-navigation",
                    align: "center",
                    children: (0, a.jsxs)("div", {
                        className: "flex max-w-[30vw] min-w-0 items-center gap-toolbar-action",
                        children: [e, t]
                    })
                }), g[22] = t, g[23] = e, g[24] = n) : n = g[24], n
            }
            return g[25] !== R ? (u = (0, a.jsx)("div", {
                className: "absolute inset-y-0 end-full me-toolbar-action flex w-[max(0px,calc((100cqw-100%)/2-var(--spacing-toolbar-action)-var(--spacing)*2-var(--learning-header-left-inset)))] min-w-0 items-center overflow-hidden",
                "data-app-shell-header-obstacle": !0,
                children: R
            }), g[25] = R, g[26] = u) : u = g[26], g[27] !== v || g[28] !== M || g[29] !== u ? (h = (0, a.jsx)(A.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                children: (0, a.jsxs)(l.a.div, {
                    className: "relative flex max-w-[min(50cqw,max(0px,calc(100cqw-2*(var(--app-shell-header-end-actions-width)+var(--spacing)*3))))] min-w-0 items-center",
                    style: M,
                    children: [u, v]
                })
            }), g[27] = v, g[28] = M, g[29] = u, g[30] = h) : h = g[30], h
        }

        function st(e) {
            let [t, n] = e;
            return `${Math.max(0,t-n)}px`
        }
        var sn = n("X0li");
        let sa = (0, eD.a)(sn.c),
            sr = (0, eD.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            ss = (0, eD.a)(async () => (await n.e(286760).then(n.bind(n, "R4DB"))).SectionNavigation);
        var so = n("lX86");
        n("i1of");
        var si = n("alJ6"),
            sl = n("u9iS"),
            sc = n("KidQ");
        let sd = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function su(e) {
            let t, n, s, o, i, l = (0, r.c)(15),
                {
                    children: c,
                    draftKey: d,
                    enableInlineSystemHints: u
                } = e,
                h = (0, p.y)(eo.a),
                g = (0, b.useContext)(eY.a),
                m = u ? "chatgpt" : void 0;
            return l[0] !== u || l[1] !== m ? (t = {
                enableInlineSystemHints: u,
                variant: m
            }, l[0] = u, l[1] = m, l[2] = t) : t = l[2], l[3] !== d || l[4] !== h ? (n = () => ({
                defaultText: h.get(n_.s, d),
                defaultTextKind: "prompt"
            }), l[3] = d, l[4] = h, l[5] = n) : n = l[5], l[6] !== g ? (s = () => {
                let e = g?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == g ? null : {
                    element: e,
                    locationKey: g.locationKey
                }
            }, l[6] = g, l[7] = s) : s = l[7], l[8] !== c ? (o = e => null == e ? null : c(e), l[8] = c, l[9] = o) : o = l[9], l[10] !== t || l[11] !== n || l[12] !== s || l[13] !== o ? (i = (0, a.jsx)(sc.a, {
                controllerOptions: sd,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: s,
                children: o
            }), l[10] = t, l[11] = n, l[12] = s, l[13] = o, l[14] = i) : i = l[14], i
        }
        var sh = n("ygKd"),
            sp = n("KSir"),
            sg = n("vVgo");
        let sm = (0, eD.a)(async () => (await n.e(642007).then(n.bind(n, "KhUL"))).CourseHeaderShortcut);

        function sf(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, tS.h)("4035922817");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(sm, {
                    conversationId: s
                })
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        var sv = n("QPeR"),
            sy = n("MgyE"),
            sb = n("gyrn"),
            sx = n("wnpN"),
            sC = n("M3Kf");

        function s_(e) {
            let t, n, s, i, l, c, d = (0, r.c)(21),
                {
                    conversationId: u
                } = e,
                h = (0, p.y)(eo.a),
                g = (0, p.x)(L.j, u),
                m = (0, p.z)(ew.b),
                {
                    search: f
                } = (0, I.X)();
            if (d[0] !== f) {
                let e = new URLSearchParams(f);
                t = e.get("messageId") ?? e.get("message"), n = e.has("selectedTextQuery"), d[0] = f, d[1] = t, d[2] = n
            } else t = d[1], n = d[2];
            let v = n;
            d[3] !== v || d[4] !== t || d[5] !== g ? (s = ["chatgpt-message-target", g, t, v], d[3] = v, d[4] = t, d[5] = g, d[6] = s) : s = d[6];
            let y = null != g && null != t && m > 0,
                b = v ? 0 : 1 / 0;
            d[7] !== u || d[8] !== v || d[9] !== t || d[10] !== h || d[11] !== g ? (i = async e => {
                let {
                    signal: n
                } = e;
                if (null != g) {
                    if (null != t && v) {
                        let e = h.get(L.K, u),
                            n = e?.[t] ?? (null == e ? void 0 : Object.values(e).find(e => e.message?.id === t));
                        if (n?.message != null) return !0
                    }
                    await (0, eI.a)(h, g, n)
                }
                return !0
            }, d[7] = u, d[8] = v, d[9] = t, d[10] = h, d[11] = g, d[12] = i) : i = d[12], d[13] !== s || d[14] !== y || d[15] !== b || d[16] !== i ? (l = {
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
        var sI = n("ckwE");

        function sw(e) {
            let t, n = (0, r.c)(3),
                {
                    children: s
                } = e,
                [o] = (0, b.useState)(sT);
            return n[0] !== o || n[1] !== s ? (t = (0, a.jsx)(eT.a, {
                value: o,
                children: s
            }), n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }

        function sT() {
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

        function sj(e) {
            let t, n = (0, r.c)(2),
                {
                    children: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(sI.a, {
                children: (0, a.jsx)(sw, {
                    children: s
                })
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var sS = n("Skaw"),
            sE = n("PYCG"),
            sA = n("MDmT"),
            sP = n("K45w"),
            sM = n("jCHb"),
            sR = n("V8uZ");

        function sk(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var sO = n("NqfB"),
            sN = n("JEFL"),
            sG = n("moBM");
        let sF = '[data-markdown-text-style="assistant-message"]',
            sz = (0, p.d)(eo.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(L.K, n)?.[a]?.message ?? null
            });

        function sB(e) {
            let t, n, s = (0, r.c)(5),
                o = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return s[0] !== e ? (t = t => (0, a.jsx)(sL, {
                ...e,
                selection: t
            }), s[0] = e, s[1] = t) : t = s[1], s[2] !== o || s[3] !== t ? (n = (0, a.jsx)(sO.a, {
                align: "start",
                targetSelector: o,
                children: t
            }), s[2] = o, s[3] = t, s[4] = n) : n = s[4], n
        }

        function sL(e) {
            let t, s, o, i, l, c, d, u = (0, r.c)(30),
                {
                    conversationId: h,
                    moreDetailsEnabled: g,
                    onAddSelectedText: m,
                    selection: f
                } = e,
                v = (0, p.y)(D.a),
                y = (0, C.a)(),
                b = (0, tS.h)("4290238484"),
                x = (0, tS.h)("473637331"),
                _ = (0, p.z)(sG.a),
                I = (0, p.x)(L.x, h);
            u[0] !== I || u[1] !== _ || u[2] !== v ? (t = _ && "tpp" === I && "chatgpt-thread" === v.value.routeKind && null == v.value.workSideChat && !0, u[0] = I, u[1] = _, u[2] = v, u[3] = t) : t = u[3];
            let w = t;
            u[4] !== h || u[5] !== f.selectionRange ? (s = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, s = a?.closest(sF);
                if (n.collapsed || null == s || !s.isConnected || s !== r?.closest(sF)) return null;
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
            let S = (0, p.x)(sz, o),
                E = (0, p.x)(L.j, h),
                A = b && g && null != E && null != T && S?.author.role === "assistant";
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
            } : void 0, u[10] = w, u[11] = v, u[12] = i) : i = u[12], u[13] !== A || u[14] !== x || u[15] !== m || u[16] !== f.selectionRange || u[17] !== T ? (l = !A || x ? e => {
                m(e, T?.messageId, null == T ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of nF(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(T.markdownElement, f.selectionRange, e))
            } : void 0, u[13] = A, u[14] = x, u[15] = m, u[16] = f.selectionRange, u[17] = T, u[18] = l) : l = u[18], u[19] !== A || u[20] !== h || u[21] !== y || u[22] !== v || u[23] !== T ? (c = A ? e => {
                Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(753405), n.e(585419), n.e(877700), n.e(636463), n.e(669998), n.e(477144), n.e(909395), n.e(899923), n.e(24689), n.e(729227), n.e(528919)]).then(n.bind(n, "zRlR")).then(t => {
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
                        shouldBlockExternalEgress: v.get(ni.d, h),
                        sourceConversationId: h
                    })
                })
            } : void 0, u[19] = A, u[20] = h, u[21] = y, u[22] = v, u[23] = T, u[24] = c) : c = u[24], u[25] !== f.selectedText || u[26] !== i || u[27] !== l || u[28] !== c ? (d = (0, a.jsx)(sN.a, {
                conversationTerminology: "chat",
                selectedText: f.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), u[25] = f.selectedText, u[26] = i, u[27] = l, u[28] = c, u[29] = d) : d = u[29], d
        }
        var sD = n("wqmp");

        function sH(e) {
            let t, n, a, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = e,
                i = (0, p.y)(eo.a),
                l = null != o;
            s[0] !== i || s[1] !== o ? (t = () => {
                null != o && (rM.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: o
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(sW), (0, ed.a)(i, sD.a, {
                    sharedConversationId: o
                }))
            }, s[0] = i, s[1] = o, s[2] = t) : t = s[2];
            let c = (0, b.useEffectEvent)(t);
            return s[3] !== c ? (n = () => {
                c()
            }, s[3] = c, s[4] = n) : n = s[4], s[5] !== l ? (a = [l], s[5] = l, s[6] = a) : a = s[6], (0, b.useEffect)(n, a), null
        }

        function sW() {}
        var sU = n("GigQ"),
            sK = n("JKdL"),
            sq = n("gsAl"),
            sV = n("HOLv"),
            sY = n("FGv0"),
            sQ = n("r9i9"),
            sX = n("vlt6"),
            s$ = n("SEBt"),
            sZ = n("uQqo"),
            sJ = n("VMtI");

        function s0(e) {
            let t, n, s, o, i, l = (0, r.c)(12),
                {
                    data: c
                } = e,
                d = (0, p.y)(eo.a),
                u = (0, C.a)();
            l[0] !== u ? (t = u.formatMessage(ny.a.headerShare), l[0] = u, l[1] = t) : t = l[1];
            let h = t,
                [g, m] = (0, b.useState)(!1);
            return l[2] !== c || l[3] !== g || l[4] !== d ? (n = () => {
                g || (m(!0), s1(d, c).finally(() => m(!1)))
            }, l[2] = c, l[3] = g, l[4] = d, l[5] = n) : n = l[5], l[6] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(sV.a, {
                asset: sJ.a
            }), o = (0, a.jsx)(_.a, {
                ...ny.a.headerShare
            }), l[6] = s, l[7] = o) : (s = l[6], o = l[7]), l[8] !== g || l[9] !== h || l[10] !== n ? (i = (0, a.jsxs)(eG.a, {
                "aria-label": h,
                color: "ghostActive",
                loading: g,
                size: "toolbar",
                onClick: n,
                children: [s, o]
            }), l[8] = g, l[9] = h, l[10] = n, l[11] = i) : i = l[11], i
        }
        async function s1(e, t) {
            let a = t.sharedPost,
                r = a?.attachments[0]?.kind === "media_generation" ? (0, sZ.a)(a, (0, sZ.b)(a))[0] : null,
                s = crypto.randomUUID();
            (0, s$.b)(e, {
                attachmentType: t.attachmentType,
                contentType: t.contentType,
                shareId: t.shareId,
                shareSessionId: s
            });
            let o = t.dialogProps.receiverShareLink;
            if (o?.contentType === "conversation") {
                let a = (0, s$.a)(e, {
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
                } else(0, rP.f)(e, sX.a, {
                    ...t.dialogProps,
                    recoveryShareLink: o,
                    shareSessionId: s
                });
                return
            }(0, rP.f)(e, sX.a, {
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
        var s2 = n("JUxu");
        let s3 = (0, b.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function s4(e) {
            let t, n, s, o, i = (0, r.c)(8),
                {
                    sharedConversationId: l
                } = e,
                c = (0, p.y)(eo.a);
            if (null != (0, p.x)(sq.d, (0, b.useContext)(O.a))) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s2.a, {}), i[0] = e) : e = i[0], e
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
                (0, rP.f)(c, s3, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, s$.c)(c, l)
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
        var s5 = n("zbjM"),
            s6 = n("Xslx"),
            s7 = n("FoKl"),
            s8 = n("xSOA"),
            s9 = n("rhKI"),
            oe = n("PP3M"),
            ot = n("CFOe"),
            on = n("JNtf"),
            oa = n("mUDD");

        function or(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g, m, f = (0, r.c)(31),
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
            }, f[4] = v, f[5] = C, f[6] = s) : s = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(on.e, {
                children: (0, a.jsx)(_.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?",
                    description: "Title of the confirmation dialog for converting a temporary ChatGPT conversation into a regular saved chat."
                })
            }), f[7] = o) : o = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(oa.e, {
                children: (0, a.jsx)(oa.d, {
                    className: "select-none",
                    title: o,
                    subtitle: (0, a.jsx)(on.d, {
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
            }), f[17] = y, f[18] = w, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(oa.e, {
                children: (0, a.jsxs)(oa.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== s ? (g = (0, a.jsxs)(oa.b, {
                as: "form",
                onSubmit: s,
                children: [i, p]
            }), f[23] = p, f[24] = s, f[25] = g) : g = f[25], f[26] !== y || f[27] !== g || f[28] !== n || f[29] !== I ? (m = (0, a.jsx)(on.b, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: I,
                size: "narrow",
                children: g
            }), f[26] = y, f[27] = g, f[28] = n, f[29] = I, f[30] = m) : m = f[30], m
        }

        function os(e) {
            (0, nW.e)(e).catch(() => {
                ne.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function oo(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(oi, {
                        conversationId: s
                    })
                })]
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function oi(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return (0, p.z)(oe.e) ? (n[0] !== s ? (t = (0, a.jsx)(ol, {
                conversationId: s
            }), n[0] = s, n[1] = t) : t = n[1], t) : null
        }

        function ol(e) {
            let t, n, s, o, i, l, c, d, u, h, g, m, f, v = (0, r.c)(49),
                {
                    conversationId: y
                } = e,
                x = (0, p.y)(eo.a),
                w = (0, C.a)(),
                T = (0, I.Z)(),
                [j, S] = (0, b.useState)(!1),
                [E, A] = (0, b.useState)(!1),
                [P, M] = (0, b.useState)(!1),
                [R, k] = (0, b.useState)(!1),
                O = (0, b.useRef)(!1),
                N = (0, p.z)(rG.p).data,
                G = (0, p.x)(L.j, y),
                F = (0, p.x)(L.U, y),
                z = (0, p.x)(L.G, y),
                B = (0, p.x)(n_.h, y);
            v[0] !== y || v[1] !== x ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (x.get(L.G, y) || x.get(n_.h, y) || t !== x.get(L.j, y) || n !== x.get(L.U, y)) throw Error("Cannot save an unavailable temporary chat message");
                    return rM.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: op
                    }).then(oh)
                },
                retry: ou
            }, v[0] = y, v[1] = x, v[2] = t) : t = v[2];
            let {
                mutateAsync: D,
                isPending: H
            } = (0, s8.a)(t), W = null != G && null != F && !z && !B && !H && !E;
            v[3] !== w ? (n = w.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat",
                description: "Tooltip and accessible label for the bookmark button in a temporary ChatGPT conversation. Opens a confirmation dialog to save it to regular history."
            }), v[3] = w, v[4] = n) : n = v[4];
            let U = n;
            v[5] !== N?.eligibleAnnouncements ? (s = N?.eligibleAnnouncements?.includes(rG.h), v[5] = N?.eligibleAnnouncements, v[6] = s) : s = v[6];
            let K = !0 === s,
                q = !R && (P || K && W);
            v[7] !== y || v[8] !== P || v[9] !== x || v[10] !== q ? (o = () => {
                if (!q || P || O.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || O.current || (O.current = !0, (0, ed.a)(x, s7.ub, {
                        personalizationMode: (0, s9.a)((0, oe.k)(x, y))
                    }), M(!0), os(x))
                }), () => {
                    e = !0
                }
            }, i = [y, P, x, q], v[7] = y, v[8] = P, v[9] = x, v[10] = q, v[11] = o, v[12] = i) : (o = v[11], i = v[12]), (0, b.useEffect)(o, i), v[13] !== x ? (l = () => {
                k(!0), O.current || (O.current = !0, os(x))
            }, v[13] = x, v[14] = l) : l = v[14];
            let V = l;
            v[15] !== W || v[16] !== y || v[17] !== w || v[18] !== T || v[19] !== D || v[20] !== x || v[21] !== F || v[22] !== G ? (c = async function() {
                let e;
                if (!W || null == G || null == F) return;
                let t = (0, s9.a)((0, oe.k)(x, y));
                (0, ed.a)(x, s7.vb, {
                    personalizationMode: t
                });
                try {
                    e = (await D({
                        sourceConversationId: G,
                        selectedLeafId: F
                    })).conversation_id
                } catch (e) {
                    (0, ed.a)(x, s7.wb, {
                        personalizationMode: t,
                        failureCategory: (0, s9.b)(e)
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
                A(!0), S(!1), (0, rH.H)(x), (0, rH.K)(x, G, "remove"), (0, rH.K)(x, e, "refresh"), T((0, ai.c)(e), {
                    replace: !0
                }), x.get(es.f).success(w.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history.",
                    description: "Success toast confirming that a formerly temporary ChatGPT conversation is now saved in regular history."
                })), rM.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: F
                    }
                }).then(od).then(t => {
                    (0, L.Yb)({
                        scope: x,
                        conversationId: e,
                        title: t
                    }), x.query.setData(nW.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, rH.H)(x), (0, rH.K)(x, e, "refresh")
                }).catch(oc)
            }, v[15] = W, v[16] = y, v[17] = w, v[18] = T, v[19] = D, v[20] = x, v[21] = F, v[22] = G, v[23] = c) : c = v[23];
            let Y = c,
                Q = !W;
            v[24] !== y || v[25] !== x || v[26] !== q ? (d = () => {
                (0, ed.a)(x, s7.yb, {
                    personalizationMode: (0, s9.a)((0, oe.k)(x, y)),
                    coachMarkVisible: q
                }), S(!0)
            }, v[24] = y, v[25] = x, v[26] = q, v[27] = d) : d = v[27], v[28] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(e6.b, {
                icon: {
                    16: e5.pb,
                    20: e5.qb
                }
            }), v[28] = u) : u = v[28], v[29] !== U || v[30] !== Q || v[31] !== d ? (h = (0, a.jsx)(eG.a, {
                "aria-label": U,
                color: "toolbar",
                disabled: Q,
                size: "toolbar",
                uniform: !0,
                onClick: d,
                children: u
            }), v[29] = U, v[30] = Q, v[31] = d, v[32] = h) : h = v[32];
            let X = h;
            return v[33] !== V || v[34] !== w || v[35] !== U || v[36] !== X || v[37] !== q ? (g = q ? (0, a.jsx)(ot.a, {
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
                children: X
            }) : (0, a.jsx)(e7.a, {
                tooltipContent: U,
                children: X
            }), v[33] = V, v[34] = w, v[35] = U, v[36] = X, v[37] = q, v[38] = g) : g = v[38], v[39] !== W || v[40] !== y || v[41] !== Y || v[42] !== j || v[43] !== H || v[44] !== x ? (m = j ? (0, a.jsx)(or, {
                canSave: W,
                isPending: H,
                onCancel: () => {
                    (0, ed.a)(x, s7.tb, {
                        personalizationMode: (0, s9.a)((0, oe.k)(x, y))
                    })
                },
                onClose: () => S(!1),
                onSave: () => void Y()
            }) : null, v[39] = W, v[40] = y, v[41] = Y, v[42] = j, v[43] = H, v[44] = x, v[45] = m) : m = v[45], v[46] !== g || v[47] !== m ? (f = (0, a.jsxs)(a.Fragment, {
                children: [g, m]
            }), v[46] = g, v[47] = m, v[48] = f) : f = v[48], f
        }

        function oc() {}

        function od(e) {
            return nI.object({
                title: nI.string()
            }).parse(e).title
        }

        function ou(e, t) {
            return e < 1 && t instanceof tH.a && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function oh(e) {
            return nI.object({
                conversation_id: nI.string().min(1)
            }).parse(e)
        }

        function op(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var og = n("Sd4O");
        let om = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(og.a, e);
            return null != a && n(H.b, a).data?.automation.plan_type === "language_learning"
        });
        var of = n("Nhfz"), ov = n("J8FU"), oy = n("vpdG"), ob = n("OiCI"), ox = n("Sd8U"), oC = n("FNgK"), o_ = n("nD1x");

        function oI(e) {
            let t, n, a = (0, r.c)(6),
                {
                    conversationId: s,
                    shouldBlockExternalEgress: o,
                    widgets: i
                } = e,
                l = (0, p.y)(ox.a);
            return a[0] !== s || a[1] !== l || a[2] !== o || a[3] !== i ? (t = () => {
                let e = new Map(i.map(e => [(0, av.e)(s, e.messageId), e]));
                return l.watch(t => {
                    let {
                        get: n
                    } = t, a = n(ob.b), r = n(N.j);
                    for (let t of n(ah.k).keys()) {
                        let i = e.get(t);
                        if (null == i) continue;
                        let c = !0 === i.metadata.is_widget_closed || n(o_.a, {
                                accountId: a,
                                userId: r,
                                conversationId: s,
                                messageId: i.messageId
                            }),
                            d = "hidden" === i.sessionPresentation,
                            u = "tombstone" === i.sessionPresentation,
                            h = i.replacementMessageId;
                        if (o || c || !d && !u || null == h || n(o_.a, {
                                accountId: a,
                                userId: r,
                                conversationId: s,
                                messageId: h
                            }) || (0, oC.b)(l, t, (0, av.e)(s, h)), c || d) {
                            (0, ah.z)(l, t);
                            continue
                        }
                        let p = l.get(ah.k).get(t),
                            g = p?.content.mcpAppHostAdapter;
                        null != p && null != g && (g.isTombstone !== u && (0, ah.y)(l, {
                            mcpAppId: t,
                            hostedInThreadScrollLayout: p.hostedInThreadScrollLayout,
                            inlineFrameContainer: p.inlineFrameContainer,
                            ...p.content,
                            mcpAppHostAdapter: {
                                ...g,
                                isTombstone: u
                            }
                        }), u && null != p.sessionId && (0, ah.D)(l, p.sessionId, {
                            displayMode: "inline"
                        }))
                    }
                })
            }, n = [s, l, o, i], a[0] = s, a[1] = l, a[2] = o, a[3] = i, a[4] = t, a[5] = n) : (t = a[4], n = a[5]), (0, b.useLayoutEffect)(t, n), null
        }
        var ow = n("JVSG"),
            oT = n("Y0pQ"),
            oj = n("lMjI");
        let oS = (0, p.v)(eo.a, e => null);

        function oE() {
            let e, t, n, s, o, i, l, c, d, u, h, g = (0, r.c)(30),
                m = (0, I.ab)() ?? 0,
                {
                    conversationId: f
                } = (0, I.bb)(),
                {
                    search: v,
                    state: y
                } = (0, I.X)(),
                b = (0, p.x)(ns.a, f ?? null),
                x = y?.archivedConversationPreview === !0;
            if (null == f) {
                let e;
                return g[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(I.l, {
                    to: "/",
                    replace: !0
                }), g[0] = e) : e = g[0], e
            }
            g[1] !== b || g[2] !== f ? (e = b ?? (0, aW.d)(f), g[1] = b, g[2] = f, g[3] = e) : e = g[3];
            let C = e;
            g[4] !== v ? (t = (0, ai.e)(v), g[4] = v, g[5] = t) : t = g[5];
            let _ = t;
            g[6] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(T.a, {}), s = (0, a.jsx)(e0.a.Surface, {}), g[6] = n, g[7] = s) : (n = g[6], s = g[7]), g[8] !== x ? (o = null, g[8] = x, g[9] = o) : o = g[9], g[10] !== C || g[11] !== x || g[12] !== _ ? (i = _ || x ? null : (0, a.jsx)(nx, {
                conversationId: C
            }), g[10] = C, g[11] = x, g[12] = _, g[13] = i) : i = g[13];
            let w = `${C}:${_}`;
            g[14] === Symbol.for("react.memo_cache_sentinel") ? (l = void 0, g[14] = l) : l = g[14], g[15] !== C || g[16] !== x || g[17] !== _ || g[18] !== w || g[19] !== m ? (c = (0, a.jsx)(oP, {
                conversationId: C,
                viewActivation: m,
                isArchivedPreview: x,
                isReadOnlyPreview: !1,
                banner: l,
                isTemporaryChat: _,
                sharedConversationId: null
            }, w), g[15] = C, g[16] = x, g[17] = _, g[18] = w, g[19] = m, g[20] = c) : c = g[20], g[21] !== o || g[22] !== i || g[23] !== c ? (d = (0, a.jsxs)(a.Fragment, {
                children: [n, s, o, i, c]
            }), g[21] = o, g[22] = i, g[23] = c, g[24] = d) : d = g[24];
            let j = d;
            return g[25] !== j ? (u = j, g[25] = j, g[26] = u) : u = g[26], g[27] !== C || g[28] !== u ? (h = (0, a.jsx)(ac, {
                conversationId: C,
                children: u
            }), g[27] = C, g[28] = u, g[29] = h) : h = g[29], h
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
            s[1] !== o ? (e = (0, aW.d)(o), s[1] = o, s[2] = e) : e = s[2];
            let i = e;
            return s[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(e0.a.Surface, {}), s[3] = t) : t = s[3], s[4] !== i || s[5] !== o ? (n = (0, a.jsxs)(a.Fragment, {
                children: [t, (0, a.jsx)(oP, {
                    conversationId: i,
                    isTemporaryChat: !1,
                    sharedConversationId: o
                }, o)]
            }), s[4] = i, s[5] = o, s[6] = n) : n = s[6], n
        }

        function oP(e) {
            let t, n, i, l, c, d, u, x, _, T, R, k, z, B, H, W, U, K, q, V, Y, Q, X, $, Z, ea, er, eo, ei, el, ec, eu, eh, ep, eg, em, ef, ev, ey, eb, eC, e_, eI, ew, eT, ej, eS, eE, eA, eP, eG, eF, ez, eB, eL, eD, eH, eW, eU, eK, eq, eY, eZ, eJ, e0, e1, e2, e3, e4, e5, e7, ta, tr, ts, to, ti, tb, tC, tj, tA, tk, tz, tD, nh, ng, nm, nf, nv, ny = (0, r.c)(641),
                {
                    conversationId: nb,
                    viewActivation: nx,
                    isArchivedPreview: nI,
                    isInlinePreview: nw,
                    hideModelPicker: nT,
                    disableAutoFocus: nj,
                    hideInitialUserMessage: nS,
                    transcriptPresentation: nE,
                    scrollOrigin: nA,
                    isReadOnlyPreview: nP,
                    onBackgroundSubmitAccepted: nM,
                    onSubmitAccepted: nR,
                    previewLifecycle: nk,
                    isTemporaryChat: nO,
                    sharedConversationId: nN,
                    sharedPostContinuation: nG,
                    requiredSystemHints: nF,
                    routePattern: nz,
                    composerLeadingContent: nB,
                    header: nL,
                    banner: nK,
                    onRetryMissingConversation: nV,
                    sharedProjectConversation: nY,
                    workspace: nQ
                } = e,
                nX = void 0 === nx ? 0 : nx,
                n$ = void 0 !== nI && nI,
                nZ = void 0 !== nw && nw,
                nJ = (0, p.y)(D.a),
                n0 = (0, b.useContext)(O.a),
                n1 = (0, p.x)(sq.d, n0),
                n4 = (0, p.z)(F.a),
                n5 = void 0 !== nG && nG && n4 && null != n1 && (0, sq.b)(n1) && (n1.web_image_attachments?.length ?? 0) > 0;
            ny[0] !== n0 || ny[1] !== nb ? (t = {
                auth: n0,
                conversationId: nb
            }, ny[0] = n0, ny[1] = nb, ny[2] = t) : t = ny[2];
            let n6 = (0, p.x)(null != n0 && !n0.isLoading && null === n0.authMethod && sq.f, t),
                {
                    conversationId: n7
                } = (0, I.bb)();
            ny[3] !== nb || ny[4] !== nZ || ny[5] !== n7 || ny[6] !== nJ || ny[7] !== nQ ? (n = () => (0, aW.e)(nZ || null != nQ || null == nJ.get(L.j, nb) ? nb : n7 ?? ""), ny[3] = nb, ny[4] = nZ, ny[5] = n7, ny[6] = nJ, ny[7] = nQ, ny[8] = n) : n = ny[8];
            let [n9, at] = (0, b.useState)(n);
            ny[9] !== n9 || ny[10] !== nb ? (i = () => n9 ? nb : null, ny[9] = n9, ny[10] = nb, ny[11] = i) : i = ny[11];
            let [an] = (0, b.useState)(i), aa = null != nN || null != n1 && !n5;
            ny[12] !== nb || ny[13] !== n$ || ny[14] !== nZ || ny[15] !== aa || ny[16] !== nJ ? (c = () => {
                if (!aa && !n$ && !nZ) return function(e, t) {
                    let n = e.get(ns.a, t) ?? t,
                        a = e.get(et.b, t),
                        r = e.get(nd, n),
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
                        } = n, r = a(L.Y, t), s = a(tZ.i), u = a(L._, t);
                        if ((0, L.xb)(r)) {
                            l = !1;
                            let e = a(et.b, t),
                                n = a(L.$, t),
                                r = !o.observedTurn || o.attemptId !== e;
                            if (o.attemptId = e, r) {
                                let e = c;
                                c = null, e?.abort(), o.observedTurn = !0, o.activeRequestId = n, o.dismissed = u, o.openedCreatedPage = !1
                            } else o.activeRequestId = n ?? o.activeRequestId, o.dismissed = o.dismissed || u || i && !s;
                            i = s;
                            let h = !u && !o.dismissed && !s && !o.openedCreatedPage && !a(D.h) && !a(L.B, t) && !a(ni.d, t),
                                p = [];
                            if ((r || h) && (p = a(L.N, t) ?? []), r) {
                                o.initialCreationMessageIds = new Set(p.map(e => e.messageId));
                                return
                            }
                            h && d(p);
                            return
                        }
                        if (!o.observedTurn) return;
                        let h = a(L.v, t);
                        if ("idle" !== r || u || null != h && "completed" !== h.result || null != e.get(L.B, t) || e.get(D.h) || e.get(ni.d, t)) {
                            o.observedTurn = !1;
                            return
                        }
                        if (l) {
                            if (o.dismissed || s || o.openedCreatedPage || a(et.b, t) !== o.attemptId) {
                                o.observedTurn = !1;
                                return
                            }
                            if (h?.result !== "completed") return;
                            d(a(L.N, t) ?? []), o.observedTurn = !o.openedCreatedPage;
                            return
                        }
                        if (o.observedTurn = !1, h?.result !== "completed" || h.requestId !== o.activeRequestId) return;
                        let p = e.get(L.K, t);
                        if (null == p) return;
                        let g = (0, m.b)({
                                mapping: p,
                                current_node: e.get(L.A, t)
                            }),
                            f = g.findLast(nc.b);
                        if (f?.status !== "finished_successfully") return;
                        let v = [...(0, no.e)(g).outputs, ...g.flatMap(e => (0, no.c)(e).map(e => e.file))],
                            y = e.get(nn.a, t)?.at(-1);
                        if (y?.turn.status !== "complete") return;
                        let b = [...(0, t0.a)(g), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, tJ.a)(e, b, !o.dismissed) || !o.dismissed && !o.openedCreatedPage && (0, t8.a)(e, b)) && !o.dismissed && !s && !o.openedCreatedPage) {
                            for (let t of (0, t6.c)((0, m.d)(f)).toReversed())
                                if ((0, t7.openSpacePageSidePanelTab)(e, t.id, {
                                        blockId: t.blockId
                                    }).opened) return;
                            if ((0, nl.canOpenChatGptFilePreview)({
                                    browserPreview: !0
                                })) {
                                for (let n of y.turn.items)
                                    if ("assistant-message" === n.type && n.completed)
                                        for (let [a, r] of n.contentReferences.entries()) {
                                            let s = (0, na.a)(r),
                                                o = null == s ? null : (0, t1.a)(s),
                                                i = v.find(e => null != e.fileId && e.fileId === (r.file_id ?? r.id) || null != e.libraryFileId && e.libraryFileId === r.library_file_id);
                                            if ("file" !== r.type || !(0, t$.a)(r) || null == s || null == o || !(0, t1.e)(o) || null == i && null == (0, nr.b)(r.sandbox_path) && !(0, nr.b)(r.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > t4.a) continue;
                                            let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                d = (0, nt.b)(r, {
                                                    fileName: s,
                                                    messageId: l
                                                });
                                            if (null == d) continue;
                                            if (e.get(tE.e)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let u = e.get(L.j, t) ?? t,
                                                h = `${l??"message"}:${String(a)}:${s}`,
                                                p = `chatgpt-file:${u}:${h}`,
                                                m = {
                                                    turnId: y.id,
                                                    inputMessageId: g.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: l ?? null
                                                },
                                                f = new AbortController,
                                                b = (0, nl.openChatGptFile)(e, {
                                                    conversationId: u,
                                                    fileName: s,
                                                    gizmoId: e.get(L.P, t),
                                                    sharedConversationId: e.get(L.W, t),
                                                    target: d,
                                                    tabKey: h,
                                                    browserPreview: !0,
                                                    isAccessBlocked: e => e.get(ni.d, t),
                                                    downloadFallback: !1,
                                                    openSource: "auto_open",
                                                    originatingTurn: m,
                                                    signal: f.signal,
                                                    onOpened: () => {
                                                        let t = e.get(M.j.activeTab$);
                                                        f.signal.aborted || t?.tabId !== p || t.tabType.kind !== t2.a || ((0, ed.a)(e, tX.CodexFileOpened, {
                                                            threadId: u,
                                                            turnId: m.turnId,
                                                            inputMessageId: m.inputMessageId ?? void 0,
                                                            messageId: m.messageId ?? void 0,
                                                            fileExtension: (0, t3.c)(s) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, ed.a)(e, tX.CodexWorkspaceFilePreviewAttempted, (0, t5.a)({
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
                                                (n(tZ.i) && n(M.j.activeTab$)?.tabId !== p || n(ni.d, t)) && f.abort()
                                            });
                                            b.catch(e => {
                                                f.signal.aborted || ne.a.debug("Automatic ChatGPT artifact preview could not open", {
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
                        u(), c?.abort(), null != o.attemptId && e.set(nd, n, {
                            ...o,
                            attemptId: o.attemptId
                        })
                    }
                }(nJ, nb)
            }, l = [nb, n$, nZ, aa, nJ], ny[12] = nb, ny[13] = n$, ny[14] = nZ, ny[15] = aa, ny[16] = nJ, ny[17] = l, ny[18] = c) : (l = ny[17], c = ny[18]), (0, b.useEffect)(c, l);
            let ar = (0, p.x)(aR.a, nb),
                as = aa ? null : ar;
            ny[19] !== nN ? (d = () => null == nN ? null : (0, aW.b)(), ny[19] = nN, ny[20] = d) : d = ny[20];
            let [al] = (0, b.useState)(d), ac = al ?? nb;
            ny[21] !== ac ? (u = (0, t_.n)({
                routeKind: "chatgpt-thread",
                conversationId: ac
            }), ny[21] = ac, ny[22] = u) : u = ny[22];
            let ad = null != (0, p.x)(tc.c, u);
            ny[23] !== ac || ny[24] !== nF || ny[25] !== nJ ? (x = () => {
                if (null != nF && 0 !== nF.length) return (0, s6.b)(nJ, ac, nF)
            }, _ = [ac, nF, nJ], ny[23] = ac, ny[24] = nF, ny[25] = nJ, ny[26] = x, ny[27] = _) : (x = ny[26], _ = ny[27]), (0, b.useEffect)(x, _);
            let au = (0, b.useRef)(null),
                [ah, ap] = (0, b.useState)(null),
                [ag, am] = (0, b.useState)(null),
                [af, ay] = (0, b.useState)(null),
                ab = ag?.activation === nX ? ag.messageId : null,
                ax = af === nX,
                aC = (0, b.useRef)(null);
            ny[28] === Symbol.for("react.memo_cache_sentinel") ? (T = () => {
                let e = new AbortController;
                return aC.current = e, () => e.abort()
            }, ny[28] = T) : T = ny[28], ny[29] !== nX ? (R = [nX], ny[29] = nX, ny[30] = R) : R = ny[30], (0, b.useLayoutEffect)(T, R);
            let a_ = (0, C.a)(),
                aI = (0, I.Z)(),
                aw = (0, tB.b)(),
                aT = (0, p.x)(L.j, nb);
            ny[31] !== nJ ? (k = e => {
                (0, nu.c)(nJ, e)
            }, ny[31] = nJ, ny[32] = k) : k = ny[32];
            let aj = (0, b.useEffectEvent)(k);
            ny[33] !== aT || ny[34] !== aj ? (z = () => () => {
                null != aT && aj(aT)
            }, ny[33] = aT, ny[34] = aj, ny[35] = z) : z = ny[35], ny[36] !== aT ? (B = [aT], ny[36] = aT, ny[37] = B) : B = ny[37], (0, b.useEffect)(z, B);
            let aS = (0, p.x)(s5.b, nb),
                aE = (0, p.x)(L.K, nb),
                aA = (0, p.x)(nW.chatGptConversationQueryById$, aa || nO && null != aE ? null : aT);
            (0, p.x)(aa ? null : nq.a, aT);
            let aP = (0, p.x)(!n6 && !n5 && ni.d, nb),
                aM = aT ?? nb,
                ak = (0, p.x)(L.A, nb),
                aG = (0, p.x)(L.x, nb),
                aH = (0, p.x)(L.P, nb),
                aU = (0, p.x)(L.B, nb),
                aK = (0, p.x)(L.L, nb),
                aq = (0, p.x)(L.Y, nb),
                aV = (0, p.x)(L.T, nb),
                aY = (0, p.x)(L.V, nb),
                aQ = (0, p.x)(n3.a, nb),
                aX = (0, p.x)(L.C, nb),
                aJ = (0, p.x)(L.ab, nb),
                rn = (0, p.x)(L.bb, nb),
                ra = (0, p.x)(nW.n, nN),
                rr = (0, b.useRef)(null),
                rs = ra.isSuccess && null != ra.data ? nN : null;
            ny[38] !== nJ ? (H = e => {
                (0, ed.a)(nJ, s.h, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, ny[38] = nJ, ny[39] = H) : H = ny[39];
            let ro = (0, b.useEffectEvent)(H);
            ny[40] !== rs || ny[41] !== ro ? (W = () => {
                null != rs && rr.current !== rs && (rr.current = rs, ro(rs))
            }, ny[40] = rs, ny[41] = ro, ny[42] = W) : W = ny[42], ny[43] !== rs ? (U = [rs], ny[43] = rs, ny[44] = U) : U = ny[44], (0, b.useEffect)(W, U);
            let ri = (0, p.x)(n_.o, nb),
                rl = (0, p.x)(n_.p, nb),
                rd = (0, p.x)(n_.m, nb),
                ru = (0, p.x)(n_.q, nb),
                rh = (0, p.x)(n_.n, nb),
                rm = (0, p.x)(n_.h, nb),
                rf = (0, p.x)(L._, nb),
                ry = (0, p.x)(n_.y, nb);
            ny[45] !== aq ? (K = (0, L.xb)(aq), ny[45] = aq, ny[46] = K) : K = ny[46];
            let rx = K,
                rC = (0, p.x)(aO, nb),
                r_ = (0, p.z)(G.t),
                rI = (0, p.z)(G.q),
                rw = (0, p.z)(G.s),
                rT = (0, p.z)(G.l),
                rj = (0, p.z)(G.m),
                rS = (0, p.z)(tp.pagesEnabled$);
            ny[47] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, tl.a)(), ny[47] = q) : q = ny[47];
            let rE = (0, tS.h)(q);
            ny[48] === Symbol.for("react.memo_cache_sentinel") ? (V = (0, tl.b)(), ny[48] = V) : V = ny[48];
            let rA = (0, tS.h)(V),
                rP = null != aE,
                rM = (0, p.z)(sb.f),
                rR = aa ? ra : aA;
            n9 && null != rR.data && at(!1);
            let rk = n9 && rP && null == rR.data,
                rO = rR.isLoading || !rk && rR.isError;
            ny[49] !== ah || ny[50] !== ac || ny[51] !== rO || ny[52] !== aa || ny[53] !== nO || ny[54] !== nJ ? (Y = (e, t, n, a) => {
                !(e || nJ.get(tx.a)) && ((0, n_.b)(nJ, ac, t, void 0, n, a), ah?.focus(), aa || rO || (0, nH.f)(nJ, ac, {
                    isTemporaryChat: nO
                }))
            }, ny[49] = ah, ny[50] = ac, ny[51] = rO, ny[52] = aa, ny[53] = nO, ny[54] = nJ, ny[55] = Y) : Y = ny[55];
            let rN = Y,
                rG = null == n1 ? null : (0, sU.a)(n1, nb),
                rF = null == rG ? void 0 : (0, so.a)(rG),
                rz = rG ?? rR.data,
                rB = aX ? aJ : rz?.title,
                rL = (0, p.z)(N.g),
                rD = (0, p.z)(N.f),
                rW = "chatgpt-thread" === nJ.value.routeKind && nJ.value.workSideChat?.conversationId === nb,
                rU = rz?.conversation_origin ?? aG ?? (null != nQ || rW ? "tpp" : null),
                rK = "tpp" === rU,
                rq = rK && "denied" === r_.status && "go-plan" === r_.reason,
                rV = (0, p.z)(tM.d),
                rY = (0, I.X)(),
                rQ = rY.state;
            (0, p.z)(tw.b);
            let rX = (0, p.x)(tE.c, "3901104270") && rQ?.openGoalPlan === !0,
                r$ = (0, b.useContext)(P.c),
                rJ = (0, tF.a)(),
                r1 = r$?.hasPageSurface === !0,
                r2 = "tpp" === rU || "flora" === rU,
                r3 = (0, p.z)(!!r2 && G.u),
                r7 = void 0 !== nP && nP || r3,
                r8 = null == rV || rV.isFullWidth ? void 0 : rV.width ?? 420,
                r9 = !0 === (0, p.z)(r2 ? null : tU.d),
                st = (0, p.z)(r2 ? ty.b : ty.a),
                sn = !r2 && st,
                sc = !rA || rj && !r2,
                sd = !aa && rj && !r2,
                su = sd && rT,
                sh = aa && rz?.is_read_only === !0 || nY?.is_read_only === !0;
            ny[56] !== nb || ny[57] !== aa || ny[58] !== nJ ? (Q = () => null, ny[56] = nb, ny[57] = aa, ny[58] = nJ, ny[59] = Q) : Q = ny[59];
            let [sp] = (0, b.useState)(Q), sm = rz?.gizmo_id ?? aH ?? sp?.gizmoId ?? null, sv = aa || null == sm || (0, ao.a)(sm) ? null : sm, sx = (0, p.x)(oS, ac), sC = (0, n2.d)({
                conversation: rz,
                conversationId: nb,
                conversationTitle: aQ,
                pathname: rY.pathname,
                sharedConversationId: nN,
                sharedPost: n1
            }), s_ = !rw && null == rz && null == sp, sI = null != aT && !aP && !s_ && (rw || rI), sw = null;
            aa || (sw = null != rz ? (0, rH.B)(rz) : (0, ao.a)(aH) ? aH : sp?.projectId ?? null);
            let sT = (0, p.x)(tV.c, aa ? null : nb),
                sS = aa || r2 || null != sw || sT || null == sx ? sv : sx.id,
                sE = (0, p.x)(sl.d, {
                    gizmoId: sS,
                    conversationId: ac,
                    visitKey: rY.pathname
                }),
                sP = r1 || r2 || null != sw || null != sv || sT || nO,
                {
                    data: sM
                } = (0, o.a)({
                    enabled: null != sw,
                    queryFn: () => {
                        if (null == sw) throw Error("Expected a ChatGPT project id");
                        return (0, eR.c)(sw)
                    },
                    queryKey: (0, rH.E)(sw ?? ""),
                    staleTime: ex.b.ONE_MINUTE
                }),
                sR = null != sw && (sM?.gizmo.share_recipient !== "private" || (sM?.gizmo.sharing?.subjects?.length ?? 0) > 0),
                sk = rz?.context_scopes?.includes("HEALTH") === !0 || sM?.gizmo.gizmo_snorlax_type === "potion",
                sO = (0, sg.a)(rz?.context_scopes, {
                    projectType: sM?.gizmo.gizmo_snorlax_type,
                    projectId: sw,
                    lockedProjectId: rM?.projectId
                }),
                sN = aP || sR || sk || sO;
            ny[60] !== sM?.gizmo.display.name ? (X = sM?.gizmo.display.name.trim() || null, ny[60] = sM?.gizmo.display.name, ny[61] = X) : X = ny[61];
            let sG = X,
                sF = sM?.gizmo.display.theme,
                sz = sM?.gizmo.display.emoji;
            ny[62] !== sM ? ($ = "shared" === (0, aD.b)(sM) ? (0, a.jsx)(e6.b, {
                icon: {
                    assets: {
                        16: oT.a,
                        20: oj.a
                    }
                }
            }) : void 0, ny[62] = sM, ny[63] = $) : $ = ny[63], ny[64] !== sF || ny[65] !== sz || ny[66] !== $ ? (Z = (0, a.jsx)(tf.a, {
                className: "icon-leading",
                size: "leading",
                color: sF,
                icon: sz,
                sharedIcon: $
            }), ny[64] = sF, ny[65] = sz, ny[66] = $, ny[67] = Z) : Z = ny[67];
            let sB = Z,
                sL = (0, p.x)(L.i, nb),
                sD = sL?.metadata ?? rz?.context_truncation_continuation,
                sW = aa || nO || null != nY || null == rL || rz?.owner?.user_id == null || null == sw || rz.owner.user_id === (rD ? rL.split("__")[0] : rL) ? null : (0, r4.d)(sw, rz.conversation_id, rz.owner.user_id),
                sV = (0, p.x)(aa || n$ || r7 ? null : sA.b, nb),
                sY = sV?.isReviewing === !0,
                sQ = null == sV ? aE : sV.conversation.mapping,
                sX = null == sV ? ak : sV.conversation.current_node,
                s$ = null == aE ? rz : null;
            ny[68] === Symbol.for("react.memo_cache_sentinel") ? (ea = (0, nU.a)(), ny[68] = ea) : ea = ny[68];
            let sZ = ea;
            ny[69] === Symbol.for("react.memo_cache_sentinel") ? (er = new WeakMap, ny[69] = er) : er = ny[69];
            let sJ = er;
            ny[70] !== st || ny[71] !== sn || ny[72] !== sD || ny[73] !== rU || ny[74] !== sX || ny[75] !== sQ || ny[76] !== s$ || ny[77] !== n$ || ny[78] !== aa || ny[79] !== rx || ny[80] !== r2 || ny[81] !== aK || ny[82] !== rd || ny[83] !== rh || ny[84] !== ri || ny[85] !== rl || ny[86] !== ru || ny[87] !== sY || ny[88] !== nJ.get || ny[89] !== sV?.isEntering || ny[90] !== aS || ny[91] !== aq ? (eo = () => sZ({
                conversation: s$,
                contextContinuation: sD,
                clinicalSearchEnabled: sn,
                clinicalCitationsEnabled: st,
                conversationOrigin: rU,
                enableImageGenerationLoadingState: !aa && !n$ && !sY && "error" !== aq,
                getRenderTelemetry: e => (0, ov.c)(nJ.get, e),
                isStreaming: !aa && !n$ && !sY && rx,
                isWorkConversation: r2,
                mode: "conversation",
                mcpResponseCache: sJ,
                moderationDisclaimersByMessageId: aK,
                streamingOrders: aS,
                pendingSubmission: null == ri || aa || sY || sV?.isEntering ? null : {
                    attachments: rd,
                    commentAttachments: rh,
                    prompt: ri,
                    renderMarkdown: rl,
                    selectedTextAttachments: ru
                },
                threadCurrentNode: sX,
                threadMapping: sQ
            }), ny[70] = st, ny[71] = sn, ny[72] = sD, ny[73] = rU, ny[74] = sX, ny[75] = sQ, ny[76] = s$, ny[77] = n$, ny[78] = aa, ny[79] = rx, ny[80] = r2, ny[81] = aK, ny[82] = rd, ny[83] = rh, ny[84] = ri, ny[85] = rl, ny[86] = ru, ny[87] = sY, ny[88] = nJ.get, ny[89] = sV?.isEntering, ny[90] = aS, ny[91] = aq, ny[92] = eo) : eo = ny[92], sV?.isEntering, ny[93] !== eo ? (ei = eo(), ny[93] = eo, ny[94] = ei) : ei = ny[94];
            let {
                isConversationEmpty: s1,
                renderedConversation: s2,
                renderedTurns: s3,
                showPendingLoadingMessage: s4
            } = ei;
            ny[95] !== nZ || ny[96] !== r2 || ny[97] !== s2 || ny[98] !== nJ ? (el = () => {
                if (!nZ && r2) return nJ.set(ow.b, s2), () => {
                    nJ.get(ow.b) === s2 && nJ.set(ow.b, null)
                }
            }, ec = [nZ, r2, s2, nJ], ny[95] = nZ, ny[96] = r2, ny[97] = s2, ny[98] = nJ, ny[99] = el, ny[100] = ec) : (el = ny[99], ec = ny[100]), (0, b.useEffect)(el, ec);
            let s7 = (0, p.x)(tY.g, nb),
                s8 = s4 && null == s7,
                s9 = !r2 && !aa && !nZ && !n$,
                oe = (0, p.x)(sn || nZ || aa ? null : ee.a, nb),
                ot = (oe?.length ?? 0) > 0,
                on = (0, p.x)(s9 ? et.b : null, nb),
                oa = JSON.stringify([nb, nX]),
                or = (0, p.x)(aa || nZ ? null : om, nb),
                [os, oi] = (0, b.useState)(null),
                ol = function(e, t) {
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
                    let d = null == n ? [] : (0, m.b)(n, ek.g),
                        u = null == e || e.visitKey !== c,
                        h = d.find(ek.g)?.id ?? (u || i ? null : e.userMessageId),
                        p = i ? null : d.findLast(eO)?.id ?? null,
                        g = !u && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != h && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== h),
                        f = new Set(u ? [] : e.observedSummaryRequestIds),
                        v = !u && !g && e.hasConsumedSummaryRequest,
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
                        isOpen: s ? !u && e.suppressAutoOpen && e.isOpen : r && (l && (u || !e.hasGoal) || y) || !u && (!g || l) && (!e.hasGoal || l) && e.isOpen,
                        shouldPreventAutoFocus: u || g || l && !e.hasGoal || y && !e.isOpen || e.shouldPreventAutoFocus
                    }
                }(os, {
                    completionAttemptId: on,
                    allowAutoOpen: !(0, tn.a)("(width < 768px)"),
                    suppressAutoOpen: (or ?? !1) || rX,
                    conversation: s9 && (rk || !rO) ? s2 : null,
                    isTurnActive: rx,
                    hasGoal: ot,
                    isPendingUserTurn: rm && null != ri && !rx,
                    visitKey: oa
                });
            ol !== os && oi(ol);
            let oc = null == nQ && !or && !sn && !nZ && !aa && (rK || s9) && !n$,
                od = oc && s2?.mapping === aE && s2?.current_node === ak,
                ou = (0, p.x)(od ? L.p : null, nb);
            ny[101] !== s9 || ny[102] !== rm || ny[103] !== oc || ny[104] !== rx || ny[105] !== rS || ny[106] !== rd || ny[107] !== s2 || ny[108] !== s3 || ny[109] !== ou ? (eu = oc ? h()(() => (function(e) {
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
                    u = (0, no.e)(i),
                    h = [...u.inputs],
                    p = o ? (0, a7.a)(i, c) : [],
                    g = new Map,
                    f = new Map,
                    v = (t = i, -1 !== (n = a0()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, re.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    y = [],
                    b = new Map(i.map(e => [(0, m.f)(e), e])),
                    x = a0()(i, e => "user" === e.author.role),
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
                            let t = b.get(n);
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, a6.j)(t.metadata) && y.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, a6.c)(t.metadata)
                            })
                        }
                    for (let n of rt(t.items)) {
                        if (s && "mcp-tool-call" === n.type) {
                            let e = (0, a4.b)(n);
                            if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                let t = (0, a1.d)(e.url);
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
                            for (let e of (0, t6.c)(n.content)) f.has(e.id) || f.set(e.id, {
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
                let _ = (0, a2.c)(c.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return rt(t.items).filter(e => "mcp-tool-call" === e.type)
                })).at(-1);
                return a = null == _ ? [...u.outputs, ...f.values(), ...g.values()] : [{
                    ..._,
                    key: `site:${_.projectId}`,
                    kind: "site"
                }, ...u.outputs.filter(e => null == _.archivePath || ! function(e, t) {
                    if (null != e.sandboxPath) return e.sandboxPath === t;
                    let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != n && e.name.toLowerCase() === n
                }(e, _.archivePath)), ...f.values(), ...g.values()], {
                    automationIds: (0, a5.b)(i, r ?? void 0),
                    browserScreenshots: (0, a8.c)(i),
                    inputs: h,
                    sourceTurns: y,
                    outputs: a,
                    progressSteps: C,
                    isPlanSummaryUpdating: d && i.slice(x + 1).some(e => "assistant" === e.author.role && a5.a.test(e.recipient ?? "") || "tool" === e.author.role && a5.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${c.at(-1)?.id??""}:${d}`,
                    sources: o ? [...Array.from(new Map(i.filter(e => "user" === e.author.role).flatMap(e => (0, a3.a)((0, m.d)(e))).map(e => [e.projectId, e])).values(), e => ({
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
                    subagents: (0, a9.a)(i, {
                        isTurnLive: c.at(-1)?.turn.status === "in_progress"
                    })?.subagents ?? []
                }
            })({
                automationReferences: ou,
                includePages: rS,
                includeSources: !s9,
                isTurnActive: rx || rm,
                messages: null == s2 ? [] : (0, m.a)(s2),
                pendingAttachments: rm ? rd : [],
                turns: s3
            })) : null, eh = s9 ? eu?.() : null, ny[101] = s9, ny[102] = rm, ny[103] = oc, ny[104] = rx, ny[105] = rS, ny[106] = rd, ny[107] = s2, ny[108] = s3, ny[109] = ou, ny[110] = eu, ny[111] = eh) : (eu = ny[110], eh = ny[111]);
            let oh = eh,
                op = ot || null != oh && (oh.outputs.length > 0 || oh.progressSteps.length > 0 || oh.automationIds.length > 0 || oh.subagents.length > 0 || !aP && oh.browserScreenshots.length > 0),
                og = oc && (!s9 || op),
                of = og && null == rV,
                oy = JSON.stringify([oa, null != rV]),
                ob = s9 ? ol.isOpen : void 0,
                ox = og && !rV?.isFullWidth;
            ny[112] !== r8 || ny[113] !== oy || ny[114] !== ob || ny[115] !== ox ? (ep = {
                contentShiftResetKey: oy,
                controlledIsOpen: ob,
                isEnabled: ox,
                floatingPanelWidth: r8
            }, ny[112] = r8, ny[113] = oy, ny[114] = ob, ny[115] = ox, ny[116] = ep) : ep = ny[116];
            let oC = (0, tN.a)(ep),
                o_ = aT ?? nb,
                oE = rK && null == rn,
                oA = aU ?? ry,
                oP = rR.isLoading && !rP,
                oz = rR.isError && !rk;
            ny[117] !== rR.error || ny[118] !== nZ ? (eg = nZ || (0, tH.e)(rR.error) || !(rR.error instanceof tH.a && [401, 403, 404].includes(rR.error.status)), ny[117] = rR.error, ny[118] = nZ, ny[119] = eg) : eg = ny[119];
            let oB = eg;
            ny[120] !== rR.error || ny[121] !== nb || ny[122] !== oz || ny[123] !== nZ || ny[124] !== nJ || ny[125] !== nN ? (em = () => {
                oz && !nZ && tg.a.loadFailed(nJ, nb, nN, rR.error)
            }, ef = [rR.error, nb, oz, nZ, nJ, nN], ny[120] = rR.error, ny[121] = nb, ny[122] = oz, ny[123] = nZ, ny[124] = nJ, ny[125] = nN, ny[126] = em, ny[127] = ef) : (em = ny[126], ef = ny[127]), (0, b.useEffect)(em, ef), ny[128] !== nb || ny[129] !== aa || ny[130] !== aT ? (ev = null, aa || (ev = aT ?? ((0, aW.e)(nb) ? null : nb)), ny[128] = nb, ny[129] = aa, ny[130] = aT, ny[131] = ev) : ev = ny[131], ny[132] !== ab || ny[133] !== rz || ny[134] !== rU || ny[135] !== a_ || ny[136] !== nO || ny[137] !== r2 || ny[138] !== rq || ny[139] !== aI || ny[140] !== ev || ny[141] !== nz || ny[142] !== nJ || ny[143] !== nX ? (ey = (e, t) => {
                let n = void 0 !== t && t;
                if (null == ev || null != ab || rq) return;
                let a = aC.current?.signal;
                null == a || a.aborted || (am({
                    messageId: e,
                    activation: nX
                }), (0, L.h)(nJ, {
                    conversationId: ev,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, tK.a)(nJ, "opened"), aI(null == nz ? (0, ai.c)(t, {
                        isTemporaryChat: nO
                    }) : (0, I.C)(nz, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, tK.a)(nJ, "failed"), am(null), nJ.get(es.f).danger(a_.formatMessage({
                        id: "chatgptConversations.branchFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot continue a conversation in a new chat"
                    }), {
                        errorAnalytics: {
                            toastId: "branch_conversation_failed",
                            operation: "branch_conversation",
                            errorCategory: "conversation",
                            conversationId: ev ?? void 0,
                            retryable: !0,
                            userFacingError: {
                                surface: (0, n8.b)(null == rU && null == rz ? null : r2),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, ny[132] = ab, ny[133] = rz, ny[134] = rU, ny[135] = a_, ny[136] = nO, ny[137] = r2, ny[138] = rq, ny[139] = aI, ny[140] = ev, ny[141] = nz, ny[142] = nJ, ny[143] = nX, ny[144] = ey) : ey = ny[144];
            let oL = (0, tL.a)(ey);
            ny[145] !== rz || ny[146] !== nb || ny[147] !== rU || ny[148] !== a_ || ny[149] !== r9 || ny[150] !== nO || ny[151] !== r2 || ny[152] !== nJ || ny[153] !== aT ? (eb = async (e, t, n, a) => {
                if (!r9) try {
                    await aN(nJ, {
                        conversationId: nb,
                        isTemporaryChat: nO,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, n8.c)(t);
                    throw nJ.get(es.f).danger(a_.formatMessage({
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
                                surface: (0, n8.b)(null == rU && null == rz ? null : r2),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, ny[145] = rz, ny[146] = nb, ny[147] = rU, ny[148] = a_, ny[149] = r9, ny[150] = nO, ny[151] = r2, ny[152] = nJ, ny[153] = aT, ny[154] = eb) : eb = ny[154];
            let oD = (0, tL.a)(eb);
            ny[155] !== ac || ny[156] !== rz || ny[157] !== nb || ny[158] !== rU || ny[159] !== a_ || ny[160] !== r9 || ny[161] !== nO || ny[162] !== r2 || ny[163] !== rq || ny[164] !== aI || ny[165] !== nV || ny[166] !== nJ || ny[167] !== aT ? (eC = async (e, t) => {
                if (!r9 && !rq) try {
                    let n = nJ.get(ae.d, nb);
                    if (n?.startsNewWorkConversation || null == nJ.get(L.j, nb) || (0, tQ.h)(nJ.get(L.R, nb)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, m.d)(n.prompt),
                            r = (0, eM.i)(n.prompt.metadata, a, (0, v.e)(n.prompt.metadata), (0, y.w)(a)),
                            s = (0, eN.a)(n.prompt, a, r),
                            o = nJ.get(n_.s, ac),
                            i = "markdown" === s.renderFormat ? s.message : a,
                            l = o.length > 0 ? o : i,
                            c = o.length > 0 ? void 0 : s.renderFormat ?? "plain";
                        if (null != nV) return void await nV(l, c);
                        if (null == nJ.get(L.j, nb) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, tv.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${nb}`;
                            (0, eQ.E)(t, (t, n) => n ? t : e) || (0, n_.Q)(nJ, nb, e), (0, eQ.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, f.a)((0, m.o)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, y.w)(a);
                            (0, eX.m)(nJ, "work"), await aI("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: o.length > 0 ? o : t,
                                    prefillPromptFormat: o.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (r2 && !nO && (0, eV.$)(nJ, (0, e9.a)({
                                entrypoint: "home"
                            }))) return void await aI("/");
                        let d = (0, m.i)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, aL.f)(nJ, d);
                        (0, n_.R)(nJ, u, t.model);
                        let h = nJ.get(L.P, nb);
                        (0, eX.m)(nJ, r2 ? "work" : "chat"), await aI({
                            pathname: "/",
                            search: (0, ai.d)("", nO)
                        }, {
                            state: {
                                initialChatGptConversationId: u,
                                project: null,
                                chatGptProjectId: (0, ao.a)(h) ? h : null,
                                chatGptCustomGptId: (0, ao.a)(h) ? null : h,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: r2
                            }
                        });
                        return
                    }
                    await (0, ae.g)(nJ, {
                        conversationId: nb,
                        isTemporaryChat: nO,
                        messageId: e,
                        retry: t
                    })
                } catch {
                    nJ.get(es.f).danger(a_.formatMessage({
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
                                surface: (0, n8.b)(null == rU && null == rz ? null : r2),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, ny[155] = ac, ny[156] = rz, ny[157] = nb, ny[158] = rU, ny[159] = a_, ny[160] = r9, ny[161] = nO, ny[162] = r2, ny[163] = rq, ny[164] = aI, ny[165] = nV, ny[166] = nJ, ny[167] = aT, ny[168] = eC) : eC = ny[168];
            let oH = (0, tL.a)(eC);
            ny[169] !== rz || ny[170] !== nb || ny[171] !== aQ || ny[172] !== a_ || ny[173] !== ax || ny[174] !== nO || ny[175] !== aI || ny[176] !== aw || ny[177] !== sw || ny[178] !== nJ || ny[179] !== aT || ny[180] !== sp || ny[181] !== nX ? (e_ = () => {
                if (ax || null == aT) return;
                let e = nJ.get(G.s);
                if (!e && !nJ.get(G.q) || !e && null == rz && null == sp) return;
                let t = aC.current?.signal;
                null == t || t.aborted || (ay(nX), (e ? (0, np.f)(nJ, {
                    chatGptThreadId: nb,
                    conversationTitle: aQ
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, E.a)(nJ, e);
                    if ("created" === e.status) return null == n || t.aborted || nJ.get(es.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, E.a)(nJ, e)
                }) : (0, j.a)({
                    scope: nJ,
                    projectId: sw ?? void 0,
                    prompt: `Continuing from ${(0,e$.f)({conversationId:aT,title:aQ?.trim()||"ChatGPT thread"})}`
                }).then(oG)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? aw(n) : aI((0, ai.c)(n, {
                            isTemporaryChat: nO
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (ay(null), nJ.get(es.f).danger(a_.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot hand off a conversation to a task"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, ny[169] = rz, ny[170] = nb, ny[171] = aQ, ny[172] = a_, ny[173] = ax, ny[174] = nO, ny[175] = aI, ny[176] = aw, ny[177] = sw, ny[178] = nJ, ny[179] = aT, ny[180] = sp, ny[181] = nX, ny[182] = e_) : e_ = ny[182];
            let oW = e_;
            ny[183] !== nb || ny[184] !== aI || ny[185] !== nJ || ny[186] !== al || ny[187] !== nN || ny[188] !== n1 ? (eI = () => {
                if (null != n1) {
                    if ((0, aW.e)(nb)) {
                        let e = (0, sq.a)(nJ, n1, nb);
                        null != e && aI((0, ai.c)(e))
                    }
                    return
                }
                let e = nJ.query.getData(nW.n, nN);
                null != e && null != nN && null != al && ((0, L.kb)(nJ, {
                    conversation: e,
                    conversationId: al,
                    sharedConversationId: nN
                }), aI((0, ai.c)(al)))
            }, ny[183] = nb, ny[184] = aI, ny[185] = nJ, ny[186] = al, ny[187] = nN, ny[188] = n1, ny[189] = eI) : eI = ny[189];
            let oU = (0, tL.a)(eI);
            ny[190] !== nQ ? (ew = nQ?.mcpAppContext == null ? null : {
                hostId: tI.a,
                server: "codex_apps",
                connectorId: nQ.mcpAppContext.id
            }, ny[190] = nQ, ny[191] = ew) : ew = ny[191];
            let oK = (0, p.x)(th.b, ew),
                oq = nQ?.fullscreenContent != null ? "content" : "workspace",
                oV = (0, J.a)(nZ ? "embedded" : oq),
                oQ = !oK && (rk || !rR.isError) && !n$ && !r7 && (null == n1 || n0?.authMethod === "chatgpt" || n5) && (!aa || null != rz),
                oX = r7 || sh || su || rq,
                o$ = oX || sY || sV?.needsEntry === !0,
                oZ = oQ && !oX && !aa && !rO && !r9 && !rx && !rm && !rf && !sE,
                oJ = !oQ || aa || o$ || rO ? null : ah,
                o0 = (0, nU.c)({
                    paragen: as,
                    hideInitialUserMessage: nS,
                    browserConversationId: void 0,
                    conversationId: nb,
                    errorMessage: oA,
                    branchingMessageId: ab,
                    isReadOnly: n$ || r7 || aa || null != nY,
                    isTemporaryChat: nO,
                    isWorkConversation: rK,
                    onRegenerateResponse: sE || aa || null != nY || n$ || r7 || su || rq || rx || rm ? void 0 : oH,
                    onEditUserMessage: sE || null == ev || rK || n$ || r7 || su || !rC || rm ? void 0 : oD,
                    onFork: null == ev || nO || su || rq || n$ || r7 ? void 0 : oL,
                    pendingSubmissionAttachments: rd,
                    shareEnabled: null == sv && !nO && !aa && !n$ && !r7 && !sN,
                    readAloudEnabled: !aa && !r7,
                    feedbackEnabled: !aa && !r7 && null == nY,
                    renderedTurns: sY || null == as || null == s2 ? s3 : (0, nD.a)({
                        ...s2,
                        current_node: as.promptMessageId
                    }, {
                        clinicalSearchEnabled: sn,
                        clinicalCitationsEnabled: st,
                        streamingOrders: aS,
                        isWorkConversation: r2,
                        getRenderTelemetry: e => (0, ov.c)(nJ.get, e)
                    }),
                    safetyReview: aV,
                    sharedConversationLastMessageId: rG?.current_node ?? aY ?? (aa ? rz?.current_node : null),
                    showPendingLoadingMessage: s8,
                    showRequestUserInputStatus: oQ && !o$ && !rO
                }),
                o1 = sY ? (0, sA.a)(o0) : o0;
            ny[192] !== a_ ? (eT = a_.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation",
                description: "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop"
            }), ny[192] = a_, ny[193] = eT) : eT = ny[193];
            let o2 = eT;
            ny[194] !== aT ? (ej = (0, a.jsx)(tP.a, {
                threadId: aT
            }), ny[194] = aT, ny[195] = ej) : ej = ny[195], ny[196] !== n$ || ny[197] !== aa || ny[198] !== rB || ny[199] !== nJ || ny[200] !== aT ? (eS = aa || n$ || null == aT ? void 0 : e => {
                (0, rH.R)({
                    scope: nJ,
                    conversationId: aT,
                    previousTitle: rB,
                    title: e
                })
            }, ny[196] = n$, ny[197] = aa, ny[198] = rB, ny[199] = nJ, ny[200] = aT, ny[201] = eS) : eS = ny[201];
            let o3 = aX || null != rz ? rB ?? "" : null;
            ny[202] !== aQ || ny[203] !== eS || ny[204] !== o3 ? (eE = (0, a.jsx)(tO.a, {
                className: "max-w-[320px]",
                variant: "flush-start",
                onRename: eS,
                title: aQ,
                titleValue: o3
            }), ny[202] = aQ, ny[203] = eS, ny[204] = o3, ny[205] = eE) : eE = ny[205], ny[206] !== ej || ny[207] !== eE ? (eA = (0, a.jsxs)("span", {
                className: "flex min-w-0 items-center gap-1",
                children: [ej, eE]
            }), ny[206] = ej, ny[207] = eE, ny[208] = eA) : eA = ny[208];
            let o4 = eA,
                o5 = r2 || r1 ? o4 : null;
            if (null != sv) {
                let e;
                ny[209] !== nb || ny[210] !== sv ? (e = (0, a.jsx)(aB.ChatGptGizmoHeader, {
                    conversationId: nb,
                    gizmoId: sv
                }), ny[209] = nb, ny[210] = sv, ny[211] = e) : e = ny[211], o5 = e
            } else null != rz || null != sp || rP || (o5 = null);
            ny[212] !== n$ || ny[213] !== aa || ny[214] !== rK ? (eP = !rK || aa || n$ ? null : (0, a.jsx)(te.a, {
                hostId: tI.a
            }), ny[212] = n$, ny[213] = aa, ny[214] = rK, ny[215] = eP) : eP = ny[215];
            let o6 = eP;
            ny[216] !== r2 || ny[217] !== sM || ny[218] !== sw ? (eG = null == sw || r2 ? null : (0, a.jsx)(r5, {
                allowsThreadContentOverlap: !0,
                project: sM
            }), ny[216] = r2, ny[217] = sM, ny[218] = sw, ny[219] = eG) : eG = ny[219];
            let o7 = eG;
            ny[220] !== o7 || ny[221] !== o5 || ny[222] !== nb || ny[223] !== nL || ny[224] !== n$ || ny[225] !== oE || ny[226] !== aa || ny[227] !== nO || ny[228] !== o6 || ny[229] !== sB || ny[230] !== sw || ny[231] !== sG || ny[232] !== sP ? (eF = sP ? (0, a.jsx)(r6.a, {
                isTemporaryChat: nO,
                isCloudTask: oE && !aa && !n$,
                breadcrumbHeader: nL ?? o7,
                project: null == sw ? void 0 : {
                    icon: sB,
                    name: sG
                },
                start: nL ?? (aa ? o5 : (0, a.jsx)(tq.BusinessAgentConversationHeader, {
                    conversationId: nb,
                    fallback: o5
                })),
                startActions: o6
            }) : null, ny[220] = o7, ny[221] = o5, ny[222] = nb, ny[223] = nL, ny[224] = n$, ny[225] = oE, ny[226] = aa, ny[227] = nO, ny[228] = o6, ny[229] = sB, ny[230] = sw, ny[231] = sG, ny[232] = sP, ny[233] = eF) : eF = ny[233];
            let o8 = eF,
                o9 = s3.length > 0,
                ie = !aa && null == nY && !n$ && !nO && !aP,
                it = (0, p.x)(ie ? rv.a : null, nb);
            ny[234] !== nb || ny[235] !== it ? (ez = null != it ? (0, a.jsx)(sf, {
                conversationId: nb
            }) : null, ny[234] = nb, ny[235] = it, ny[236] = ez) : ez = ny[236];
            let ia = ez;
            ny[237] !== oZ || ny[238] !== nb || ny[239] !== r9 || ny[240] !== sV ? (eB = null != sV ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: r9,
                children: (0, a.jsx)(ss, {
                    conversationId: nb,
                    placement: "progress",
                    canStartSection: oZ
                })
            }) : null, ny[237] = oZ, ny[238] = nb, ny[239] = r9, ny[240] = sV, ny[241] = eB) : eB = ny[241];
            let ir = eB;
            ny[242] !== oz || ny[243] !== o9 || ny[244] !== nk ? (eL = () => {
                o9 ? nk?.("CHATGPT_LIGHTHOUSE_LIFECYCLE_STEP_PREVIEW_CONTENT_READY") : oz && nk?.("CHATGPT_LIGHTHOUSE_LIFECYCLE_STEP_PREVIEW_FAILED")
            }, ny[242] = oz, ny[243] = o9, ny[244] = nk, ny[245] = eL) : eL = ny[245];
            let is = (0, b.useEffectEvent)(eL);
            if (ny[246] !== is ? (eD = () => {
                    is()
                }, ny[246] = is, ny[247] = eD) : eD = ny[247], ny[248] !== oz || ny[249] !== o9 ? (eH = [o9, oz], ny[248] = oz, ny[249] = o9, ny[250] = eH) : eH = ny[250], (0, b.useEffect)(eD, eH), ny[251] !== rR || ny[252] !== n0?.authMethod || ny[253] !== sE || ny[254] !== nK || ny[255] !== sc || ny[256] !== sI || ny[257] !== oB || ny[258] !== oZ || ny[259] !== ac || ny[260] !== sS || ny[261] !== nB || ny[262] !== rz || ny[263] !== o8 || ny[264] !== nb || ny[265] !== o2 || ny[266] !== rU || ny[267] !== aQ || ny[268] !== ia || ny[269] !== ol || ny[270] !== nj || ny[271] !== oA || ny[272] !== rV || ny[273] !== r8 || ny[274] !== eu || ny[275] !== sm || ny[276] !== rN || ny[277] !== oW || ny[278] !== oU || ny[279] !== oz || ny[280] !== rP || ny[281] !== nT || ny[282] !== an || ny[283] !== a_ || ny[284] !== n$ || ny[285] !== s9 || ny[286] !== o$ || ny[287] !== s1 || ny[288] !== rO || ny[289] !== oP || ny[290] !== ad || ny[291] !== ax || ny[292] !== sk || ny[293] !== nZ || ny[294] !== sO || ny[295] !== oK || ny[296] !== rE || ny[297] !== r9 || ny[298] !== r7 || ny[299] !== rJ || !1 !== ny[300] || ny[301] !== aa || ny[302] !== sh || ny[303] !== rf || ny[304] !== rm || ny[305] !== nO || ny[306] !== rK || ny[307] !== rx || ny[308] !== r2 || ny[309] !== sd || ny[310] !== rT || ny[311] !== su || ny[312] !== rq || ny[313] !== rW || ny[314] !== rY.pathname || ny[315] !== rM || ny[316] !== rQ?.sidebarAutomationId || ny[317] !== nM || ny[318] !== nR || ny[319] !== rX || ny[320] !== nk || ny[321] !== sM || ny[322] !== sB || ny[323] !== sw || ny[324] !== sG || ny[325] !== sC || ny[326] !== s2 || ny[327] !== s3 || ny[328] !== nF || ny[329] !== sY || ny[330] !== oV || ny[331] !== nJ || ny[332] !== nA || ny[333] !== aM || ny[334] !== sV || ny[335] !== ir || ny[336] !== aT || ny[337] !== ap || ny[338] !== oi || ny[339] !== nN || ny[340] !== n1 || ny[341] !== rF || ny[342] !== nY || ny[343] !== sW || ny[344] !== aP || ny[345] !== ie || ny[346] !== of || ny[347] !== oQ || ny[348] !== s8 || ny[349] !== oJ || ny[350] !== o_ || ny[351] !== oC || ny[352] !== ak || ny[353] !== nE || ny[354] !== o1 || ny[355] !== nQ) {
                tk = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, n, r, s, o, i, l, c, d, u, h, p, f, v = s3.flatMap(oN).flatMap(oO),
                        y = v.flatMap(ok);
                    if (!aa && (rR.error instanceof tH.a && 423 === rR.error.status || sO && null == rM)) {
                        let e;
                        ny[380] !== rR || ny[381] !== nb || ny[382] !== nJ ? (e = (0, a.jsx)(sy.a, {
                            onUnlocked: () => {
                                (0, sb.g)(nJ.get(sb.f)?.projectId, [nb]), rR.refetch()
                            }
                        }), ny[380] = rR, ny[381] = nb, ny[382] = nJ, ny[383] = e) : e = ny[383], tk = e;
                        break e
                    }
                    if (null != sW) {
                        let e;
                        ny[384] !== sW ? (e = (0, a.jsx)(I.l, {
                            replace: !0,
                            to: sW
                        }), ny[384] = sW, ny[385] = e) : e = ny[385], tk = e;
                        break e
                    }
                    eK = sj,
                    ny[386] !== rR.fetchStatus || ny[387] !== rz || ny[388] !== oz || ny[389] !== rP || ny[390] !== oP || ny[391] !== nZ ? (ta = !1, ny[386] = rR.fetchStatus, ny[387] = rz, ny[388] = oz, ny[389] = rP, ny[390] = oP, ny[391] = nZ, ny[392] = ta) : ta = ny[392],
                    ny[393] !== rR.data || ny[394] !== rR.fetchStatus || ny[395] !== rz || ny[396] !== nb || ny[397] !== oz || ny[398] !== rP || ny[399] !== s1 || ny[400] !== oP || !1 !== ny[401] || ny[402] !== s3.length ? (tr = null, ny[393] = rR.data, ny[394] = rR.fetchStatus, ny[395] = rz, ny[396] = nb, ny[397] = oz, ny[398] = rP, ny[399] = s1, ny[400] = oP, ny[401] = !1, ny[402] = s3.length, ny[403] = tr) : tr = ny[403],
                    ts = !aa && !r7 && (0, tl.c)() ? (0, a.jsx)(tu.b, {
                        callIds: y,
                        hostId: tI.a,
                        conversationId: (0, g.Le)(`chatgpt:${nb}`)
                    }) : null,
                    ny[404] !== aQ || ny[405] !== nZ || ny[406] !== n1 || ny[407] !== nQ?.documentTitle ? (to = nZ ? null : (0, a.jsx)(e8.a, {
                        title: null == n1 ? nQ?.documentTitle ?? aQ : null
                    }), ny[404] = aQ, ny[405] = nZ, ny[406] = n1, ny[407] = nQ?.documentTitle, ny[408] = to) : to = ny[408],
                    ny[409] !== nb || ny[410] !== nZ || ny[411] !== r9 || ny[412] !== aa || ny[413] !== nO || ny[414] !== r2 || ny[415] !== o1 ? (ti = nZ || r2 ? null : (0, a.jsx)(rp.a, {
                        conversationId: nb,
                        canCopy: !r9,
                        paragenEnabled: !aa,
                        turns: o1,
                        loadHistory: !nO && !aa
                    }), ny[409] = nb, ny[410] = nZ, ny[411] = r9, ny[412] = aa, ny[413] = nO, ny[414] = r2, ny[415] = o1, ny[416] = ti) : ti = ny[416];
                    let x = null != rz || rP;ny[417] !== oz || ny[418] !== r2 || ny[419] !== x ? (tb = (0, a.jsx)(tW.a, {
                        isWorkConversation: r2,
                        hasConversationContent: x,
                        hasLoadError: oz
                    }), ny[417] = oz, ny[418] = r2, ny[419] = x, ny[420] = tb) : tb = ny[420],
                    ny[421] !== rz || ny[422] !== nb || ny[423] !== oz || ny[424] !== rP || ny[425] !== oP || ny[426] !== nZ || ny[427] !== rY.pathname || ny[428] !== nJ || ny[429] !== nN ? (tC = nZ || oP || oz || null == rz && !rP ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(sH, {
                            sharedConversationId: nN
                        }), (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(tm.a, {
                                onCommit: () => tg.a.contentCommitted(nJ, nb, nN, rY.pathname),
                                onPaint: () => tg.a.contentVisible(nJ, nb, nN)
                            }, nN ?? nb)
                        })]
                    }), ny[421] = rz, ny[422] = nb, ny[423] = oz, ny[424] = rP, ny[425] = oP, ny[426] = nZ, ny[427] = rY.pathname, ny[428] = nJ, ny[429] = nN, ny[430] = tC) : tC = ny[430],
                    ny[431] !== n0?.authMethod || ny[432] !== sI || ny[433] !== sS || ny[434] !== rz || ny[435] !== o8 || ny[436] !== nb || ny[437] !== rU || ny[438] !== aQ || ny[439] !== ia || ny[440] !== ol || ny[441] !== eu || ny[442] !== sm || ny[443] !== oW || ny[444] !== n$ || ny[445] !== s9 || ny[446] !== ax || ny[447] !== sk || ny[448] !== nZ || ny[449] !== sO || ny[450] !== r7 || ny[451] !== aa || ny[452] !== nO || ny[453] !== rK || ny[454] !== rx || ny[455] !== r2 || ny[456] !== rQ?.sidebarAutomationId || ny[457] !== rX || ny[458] !== sB || ny[459] !== sw || ny[460] !== sG || ny[461] !== sC || ny[462] !== s2 || ny[463] !== s3.length || ny[464] !== nJ || ny[465] !== ir || ny[466] !== aT || ny[467] !== oi || ny[468] !== nY || ny[469] !== aP || ny[470] !== ie || ny[471] !== of || ny[472] !== oJ || ny[473] !== o_ || ny[474] !== ak || ny[475] !== nQ ? (tj = nZ || null != nQ ? null : (0, a.jsxs)(rg.a, {
                        chatIcon: null == sw ? void 0 : sB,
                        conversationId: rK && !aa ? nb : null,
                        header: null != ia || null != ir ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(se, {
                                    header: o8,
                                    courseShortcut: ia,
                                    progress: ir
                                })
                            }), null]
                        }) : o8,
                        title: aQ,
                        isArchivedPreview: n$,
                        children: [null, null, n0?.authMethod === "chatgpt" ? (0, a.jsx)(tt.s, {
                            productExperience: r2 ? "work" : "chat"
                        }) : null, aa ? (0, a.jsx)(sK.a, {
                            children: null == sC ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(s0, {
                                    data: sC
                                })
                            })
                        }) : null, ie ? (0, a.jsx)(rb, {
                            conversationId: nb,
                            scheduledAutomationId: rX ? rQ?.sidebarAutomationId : void 0
                        }, nb) : null, of ? (0, a.jsx)(aZ, {
                            allowsThreadContentOverlap: !r2,
                            composerActions: oJ,
                            conversationId: o_,
                            controlledState: s9 ? {
                                isOpen: ol.isOpen,
                                shouldPreventAutoFocus: ol.shouldPreventAutoFocus,
                                onOpenChange: e => {
                                    oi({
                                        ...ol,
                                        isOpen: e,
                                        shouldPreventAutoFocus: !e && ol.shouldPreventAutoFocus
                                    })
                                }
                            } : void 0,
                            readData: !s9 || ol.isOpen ? eu : null,
                            showSources: !s9,
                            shouldBlockExternalEgress: aP
                        }) : null, nO && !aa && !n$ && null == sm && null == sS && null == sw && !sk && null != s2 && (0, m.a)(s2).some(oR) ? (0, a.jsx)(A.a.HeaderAction, {
                            actionId: "chatgpt-conversation-save",
                            align: "end",
                            order: 100,
                            children: (0, a.jsx)(oo, {
                                conversationId: nb
                            })
                        }) : null, nO || n$ || r7 ? null : (0, a.jsx)(r6.b, {
                            allowsThreadContentOverlap: !r2,
                            menu: aa || null == aT ? (0, a.jsx)(r0, {}) : (0, a.jsx)(rZ, {
                                conversationId: nb,
                                title: aQ,
                                isHandoffPending: ax,
                                isArchived: rz?.is_archived === !0,
                                isChatConversation: null != rz && !r2,
                                onHandoff: sI ? oW : void 0,
                                onOpenMessage: async e => {
                                    aC.current?.signal.aborted === !1 && nJ.get(S.a)?.pathname === nJ.value.pathname && await au.current?.scrollToMessage(e)
                                },
                                projectId: sw,
                                projectName: sG,
                                serverConversationId: aT,
                                conversationOrigin: rU
                            }),
                            children: aa || sO ? null : (0, a.jsx)(oY, {
                                conversationId: nb,
                                projectId: sw,
                                sharedProjectConversation: nY,
                                isReady: (null != aT || null != nY) && s3.length > 0 && (ak ?? rz?.current_node) != null,
                                isRestricted: aP || sk,
                                isStreaming: rx
                            })
                        })]
                    }), ny[431] = n0?.authMethod, ny[432] = sI, ny[433] = sS, ny[434] = rz, ny[435] = o8, ny[436] = nb, ny[437] = rU, ny[438] = aQ, ny[439] = ia, ny[440] = ol, ny[441] = eu, ny[442] = sm, ny[443] = oW, ny[444] = n$, ny[445] = s9, ny[446] = ax, ny[447] = sk, ny[448] = nZ, ny[449] = sO, ny[450] = r7, ny[451] = aa, ny[452] = nO, ny[453] = rK, ny[454] = rx, ny[455] = r2, ny[456] = rQ?.sidebarAutomationId, ny[457] = rX, ny[458] = sB, ny[459] = sw, ny[460] = sG, ny[461] = sC, ny[462] = s2, ny[463] = s3.length, ny[464] = nJ, ny[465] = ir, ny[466] = aT, ny[467] = oi, ny[468] = nY, ny[469] = aP, ny[470] = ie, ny[471] = of, ny[472] = oJ, ny[473] = o_, ny[474] = ak, ny[475] = nQ, ny[476] = tj) : tj = ny[476],
                    tA = null,
                    eU = az.a,
                    e1 = ac,
                    e2 = rU,
                    e3 = !oQ || oV.isHidden || o$ || sE || r9 || rO || n$ || r7 || sh || su || rq || rf || rm,
                    e4 = nO,
                    e5 = sw,
                    e7 = null != sS,
                    eW = tR.c,
                    eq = r8,
                    ny[477] !== nZ || ny[478] !== rJ || ny[479] !== r2 || ny[480] !== ir || ny[481] !== nQ ? (eY = nZ || null != nQ ? ir : rJ && (0, tG.a)() && !r2 && (0, a.jsx)("div", {
                        className: "h-px",
                        "aria-hidden": !0
                    }), ny[477] = nZ, ny[478] = rJ, ny[479] = r2, ny[480] = ir, ny[481] = nQ, ny[482] = eY) : eY = ny[482],
                    eZ = nK;
                    let C = null == sV ? "flex h-full min-h-0 flex-col" : "h-full",
                        _ = !ad && !nZ && !aa && !oK && !oV.isHidden,
                        w = aP || sc,
                        T = rV?.isFullWidth === !0,
                        j = null == rV ? oC.contentShift : void 0,
                        E = sV?.selectedIndex;ny[483] !== oZ || ny[484] !== nb || ny[485] !== sV ? (e = null != sV ? (0, a.jsx)(ss, {
                        conversationId: nb,
                        placement: "composer",
                        canStartSection: oZ
                    }) : void 0, ny[483] = oZ, ny[484] = nb, ny[485] = sV, ny[486] = e) : e = ny[486],
                    ny[487] !== nb || ny[488] !== sV ? (t = null != sV ? (0, a.jsx)(sr, {
                        conversationId: nb
                    }) : void 0, ny[487] = nb, ny[488] = sV, ny[489] = t) : t = ny[489];
                    let P = !r2,
                        M = sY ? null : oA;ny[490] !== rR || ny[491] !== oB ? (n = oB ? () => {
                        rR.refetch({
                            cancelRefetch: !1
                        })
                    } : void 0, ny[490] = rR, ny[491] = oB, ny[492] = n) : n = ny[492];
                    let R = s3.length > 0;ny[493] !== a_ || ny[494] !== sY ? (r = sY ? a_.formatMessage(sA.c.readOnlyPlaceholder) : void 0, ny[493] = a_, ny[494] = sY, ny[495] = r) : r = ny[495];
                    let k = !sk && (null == sw || null != sM),
                        O = null == sV && !rW,
                        N = rR.isFetching,
                        G = !sY && rx;ny[496] !== rz?.is_archived || ny[497] !== nb || ny[498] !== n$ || ny[499] !== nZ || ny[500] !== aa || ny[501] !== nO || ny[502] !== rx || ny[503] !== r2 ? (s = nZ || !r2 || aa || n$ || rz?.is_archived === !0 || nO ? null : (0, a.jsx)(b.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(sa, {
                            conversationId: nb,
                            isTurnActive: rx
                        })
                    }), ny[496] = rz?.is_archived, ny[497] = nb, ny[498] = n$, ny[499] = nZ, ny[500] = aa, ny[501] = nO, ny[502] = rx, ny[503] = r2, ny[504] = s) : s = ny[504],
                    ny[505] !== nb || ny[506] !== n$ || ny[507] !== aT ? (o = n$ ? (0, a.jsx)(tT.a, {
                        conversationId: aT ?? nb,
                        kind: "chatgpt"
                    }, aT ?? nb) : void 0, ny[505] = nb, ny[506] = n$, ny[507] = aT, ny[508] = o) : o = ny[508];
                    let F = !sY && s8;ny[509] !== sS ? (i = null != sS ? (0, a.jsx)(si.GptPluginMigrationBanner, {
                        gizmoId: sS
                    }) : null, ny[509] = sS, ny[510] = i) : i = ny[510],
                    ny[511] !== sI || ny[512] !== oW || ny[513] !== ax || ny[514] !== sd || ny[515] !== rT ? (l = sd ? (0, a.jsx)(rc, {
                        canConvert: sI,
                        isChatInstantAvailable: !rT,
                        isConverting: ax,
                        onConvert: oW
                    }) : null, ny[511] = sI, ny[512] = oW, ny[513] = ax, ny[514] = sd, ny[515] = rT, ny[516] = l) : l = ny[516],
                    ny[517] !== rN || ny[518] !== r7 ? (c = rN.bind(null, r7), ny[517] = rN, ny[518] = r7, ny[519] = c) : c = ny[519],
                    ny[520] !== oU || ny[521] !== aa || ny[522] !== nR ? (d = e => {
                        nR?.(e), aa && oU()
                    }, ny[520] = oU, ny[521] = aa, ny[522] = nR, ny[523] = d) : d = ny[523],
                    ny[524] !== rR.isFetching || ny[525] !== sE || ny[526] !== ac || ny[527] !== nB || ny[528] !== nb || ny[529] !== o2 || ny[530] !== nj || ny[531] !== oz || ny[532] !== nT || ny[533] !== an || ny[534] !== o$ || ny[535] !== s1 || ny[536] !== rO || ny[537] !== oP || ny[538] !== ad || ny[539] !== nZ || ny[540] !== aa || ny[541] !== nO || ny[542] !== rK || ny[543] !== nM || ny[544] !== nk || ny[545] !== nF || ny[546] !== nA || ny[547] !== aM || ny[548] !== ap || ny[549] !== nN || ny[550] !== rF || ny[551] !== oQ || ny[552] !== R || ny[553] !== r || ny[554] !== k || ny[555] !== O || ny[556] !== G || ny[557] !== s || ny[558] !== o || ny[559] !== F || ny[560] !== i || ny[561] !== l || ny[562] !== c || ny[563] !== d || ny[564] !== _ || ny[565] !== w || ny[566] !== T || ny[567] !== j || ny[568] !== E || ny[569] !== e || ny[570] !== t || ny[571] !== P || ny[572] !== M || ny[573] !== n || ny[574] !== nE || ny[575] !== o1 || ny[576] !== nQ ? (u = (0, a.jsx)(oF, {
                        ref: au,
                        trackReadState: _,
                        workspace: nQ,
                        shouldBlockMcpApps: w,
                        isCoveredByFloatingPanel: T,
                        isFormOnly: ad,
                        isInlinePreview: nZ,
                        hideModelPicker: nT,
                        disableAutoFocus: nj,
                        transcriptPresentation: nE,
                        scrollOrigin: nA,
                        onBackgroundSubmitAccepted: nM,
                        previewLifecycle: nk,
                        composerRef: ap,
                        contentX: j,
                        conversationId: nb,
                        composerConversationId: ac,
                        sectionIndex: E,
                        composerLeadingContent: nB,
                        aboveComposerContent: e,
                        historyLoadingContent: t,
                        requiredSystemHints: nF,
                        isChatConversation: P,
                        conversationLoadingLabel: o2,
                        entries: o1,
                        errorMessage: M,
                        hasLoadError: oz,
                        onRetryLoad: n,
                        hasRenderableTurns: R,
                        isComposerDisabled: o$,
                        readOnlyPlaceholder: r,
                        moreDetailsEnabled: k,
                        isConversationEmpty: s1,
                        showEmptyState: O,
                        isConversationFetching: N,
                        isConversationLoading: oP,
                        isSharedConversation: aa,
                        isSubmitDisabled: rO,
                        isTemporaryChat: nO,
                        isTurnActive: G,
                        isWorkConversation: rK,
                        onboardingPrelude: s,
                        scrollStateConversationId: aM,
                        initialResponsePlacementKey: an,
                        sharedConversationId: nN,
                        sharedPostRegulatedConnectorKind: rF,
                        showComposer: oQ,
                        archivedPreviewFooter: o,
                        showPendingLoadingMessage: F,
                        gptPluginMigrationBanner: i,
                        awaitingGptContinuation: sE,
                        workOnlyConversionBanner: l,
                        onAddSelectedText: c,
                        onSubmitAccepted: d
                    }), ny[524] = rR.isFetching, ny[525] = sE, ny[526] = ac, ny[527] = nB, ny[528] = nb, ny[529] = o2, ny[530] = nj, ny[531] = oz, ny[532] = nT, ny[533] = an, ny[534] = o$, ny[535] = s1, ny[536] = rO, ny[537] = oP, ny[538] = ad, ny[539] = nZ, ny[540] = aa, ny[541] = nO, ny[542] = rK, ny[543] = nM, ny[544] = nk, ny[545] = nF, ny[546] = nA, ny[547] = aM, ny[548] = ap, ny[549] = nN, ny[550] = rF, ny[551] = oQ, ny[552] = R, ny[553] = r, ny[554] = k, ny[555] = O, ny[556] = G, ny[557] = s, ny[558] = o, ny[559] = F, ny[560] = i, ny[561] = l, ny[562] = c, ny[563] = d, ny[564] = _, ny[565] = w, ny[566] = T, ny[567] = j, ny[568] = E, ny[569] = e, ny[570] = t, ny[571] = P, ny[572] = M, ny[573] = n, ny[574] = nE, ny[575] = o1, ny[576] = nQ, ny[577] = u) : u = ny[577],
                    ny[578] !== ol || ny[579] !== eu || ny[580] !== s9 || ny[581] !== aP || ny[582] !== of || ny[583] !== oJ || ny[584] !== o_ || ny[585] !== oC ? (h = of && null != eu && (!s9 || ol.isOpen) ? (0, a.jsx)(a$, {
                        composerActions: oJ,
                        conversationId: o_,
                        readData: eu,
                        showSources: !s9,
                        display: oC,
                        shouldBlockExternalEgress: aP
                    }) : null, ny[578] = ol, ny[579] = eu, ny[580] = s9, ny[581] = aP, ny[582] = of, ny[583] = oJ, ny[584] = o_, ny[585] = oC, ny[586] = h) : h = ny[586],
                    ny[587] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(aF.a, {}), ny[587] = p) : p = ny[587],
                    ny[588] !== nZ ? (f = null, ny[588] = nZ, ny[589] = f) : f = ny[589],
                    ny[590] !== r9 || ny[591] !== u || ny[592] !== h || ny[593] !== f || ny[594] !== C ? (eJ = (0, a.jsxs)("div", {
                        className: C,
                        inert: r9,
                        children: [u, h, p, f]
                    }), ny[590] = r9, ny[591] = u, ny[592] = h, ny[593] = f, ny[594] = C, ny[595] = eJ) : eJ = ny[595],
                    e0 = !aa && !r7 && (0, tl.c)() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(oI, {
                            conversationId: nb,
                            shouldBlockExternalEgress: aP || sc,
                            widgets: v.filter(oM)
                        }), (0, a.jsx)(td.a, {
                            blockedWidgetSource: rE ? void 0 : "descriptor",
                            transcriptMcpAppIds: new Set(v.flatMap(e => "mcp-tool-call" === e.type ? rE ? e.callId : [] : "chatgpt-hosted-widget" === e.type ? (0, av.e)(nb, e.messageId) : [])),
                            shouldBlockExternalEgress: aP || sc
                        })]
                    }) : null
                }
                ny[251] = rR, ny[252] = n0?.authMethod, ny[253] = sE, ny[254] = nK, ny[255] = sc, ny[256] = sI, ny[257] = oB, ny[258] = oZ, ny[259] = ac, ny[260] = sS, ny[261] = nB, ny[262] = rz, ny[263] = o8, ny[264] = nb, ny[265] = o2, ny[266] = rU, ny[267] = aQ, ny[268] = ia, ny[269] = ol, ny[270] = nj, ny[271] = oA, ny[272] = rV, ny[273] = r8, ny[274] = eu, ny[275] = sm, ny[276] = rN, ny[277] = oW, ny[278] = oU, ny[279] = oz, ny[280] = rP, ny[281] = nT, ny[282] = an, ny[283] = a_, ny[284] = n$, ny[285] = s9, ny[286] = o$, ny[287] = s1, ny[288] = rO, ny[289] = oP, ny[290] = ad, ny[291] = ax, ny[292] = sk, ny[293] = nZ, ny[294] = sO, ny[295] = oK, ny[296] = rE, ny[297] = r9, ny[298] = r7, ny[299] = rJ, ny[300] = !1, ny[301] = aa, ny[302] = sh, ny[303] = rf, ny[304] = rm, ny[305] = nO, ny[306] = rK, ny[307] = rx, ny[308] = r2, ny[309] = sd, ny[310] = rT, ny[311] = su, ny[312] = rq, ny[313] = rW, ny[314] = rY.pathname, ny[315] = rM, ny[316] = rQ?.sidebarAutomationId, ny[317] = nM, ny[318] = nR, ny[319] = rX, ny[320] = nk, ny[321] = sM, ny[322] = sB, ny[323] = sw, ny[324] = sG, ny[325] = sC, ny[326] = s2, ny[327] = s3, ny[328] = nF, ny[329] = sY, ny[330] = oV, ny[331] = nJ, ny[332] = nA, ny[333] = aM, ny[334] = sV, ny[335] = ir, ny[336] = aT, ny[337] = ap, ny[338] = oi, ny[339] = nN, ny[340] = n1, ny[341] = rF, ny[342] = nY, ny[343] = sW, ny[344] = aP, ny[345] = ie, ny[346] = of, ny[347] = oQ, ny[348] = s8, ny[349] = oJ, ny[350] = o_, ny[351] = oC, ny[352] = ak, ny[353] = nE, ny[354] = o1, ny[355] = nQ, ny[356] = eW, ny[357] = eU, ny[358] = eK, ny[359] = eq, ny[360] = eY, ny[361] = eZ, ny[362] = eJ, ny[363] = e0, ny[364] = e1, ny[365] = e2, ny[366] = e3, ny[367] = e4, ny[368] = e5, ny[369] = e7, ny[370] = ta, ny[371] = tr, ny[372] = ts, ny[373] = to, ny[374] = ti, ny[375] = tb, ny[376] = tC, ny[377] = tj, ny[378] = tA, ny[379] = tk
            } else eW = ny[356], eU = ny[357], eK = ny[358], eq = ny[359], eY = ny[360], eZ = ny[361], eJ = ny[362], e0 = ny[363], e1 = ny[364], e2 = ny[365], e3 = ny[366], e4 = ny[367], e5 = ny[368], e7 = ny[369], ta = ny[370], tr = ny[371], ts = ny[372], to = ny[373], ti = ny[374], tb = ny[375], tC = ny[376], tj = ny[377], tA = ny[378], tk = ny[379];
            if (tk !== Symbol.for("react.early_return_sentinel")) return tk;
            ny[596] !== eW || ny[597] !== eq || ny[598] !== eY || ny[599] !== eZ || ny[600] !== eJ || ny[601] !== e0 ? (tz = (0, a.jsxs)(eW, {
                floatingPanelWidth: eq,
                header: eY,
                banner: eZ,
                children: [eJ, e0]
            }), ny[596] = eW, ny[597] = eq, ny[598] = eY, ny[599] = eZ, ny[600] = eJ, ny[601] = e0, ny[602] = tz) : tz = ny[602], ny[603] !== eU || ny[604] !== e1 || ny[605] !== e2 || ny[606] !== e3 || ny[607] !== e4 || ny[608] !== e5 || ny[609] !== e7 || ny[610] !== tz ? (tD = (0, a.jsx)(eU, {
                conversationId: e1,
                conversationOrigin: e2,
                disabled: e3,
                isTemporaryChat: e4,
                projectId: e5,
                requiresGizmoId: e7,
                children: tz
            }), ny[603] = eU, ny[604] = e1, ny[605] = e2, ny[606] = e3, ny[607] = e4, ny[608] = e5, ny[609] = e7, ny[610] = tz, ny[611] = tD) : tD = ny[611], ny[612] !== eK || ny[613] !== ta || ny[614] !== tr || ny[615] !== ts || ny[616] !== to || ny[617] !== ti || ny[618] !== tb || ny[619] !== tC || ny[620] !== tj || ny[621] !== tA || ny[622] !== tD ? (nh = (0, a.jsxs)(eK, {
                children: [ta, tr, ts, to, ti, tb, tC, tj, tA, tD]
            }), ny[612] = eK, ny[613] = ta, ny[614] = tr, ny[615] = ts, ny[616] = to, ny[617] = ti, ny[618] = tb, ny[619] = tC, ny[620] = tj, ny[621] = tA, ny[622] = tD, ny[623] = nh) : nh = ny[623];
            let io = nh,
                ii = aa || !rR.isFetchedAfterMount || rR.isFetching || rk ? null : rR.error,
                il = oz ? rR.error : null,
                ic = null == rU && null == rz ? null : r2,
                id = !r2 && !oP;
            return ny[624] !== ah || ny[625] !== ac || ny[626] !== nN ? (ng = {
                conversationId: ac,
                composer: ah,
                sharedConversationId: nN
            }, ny[624] = ah, ny[625] = ac, ny[626] = nN, ny[627] = ng) : ng = ny[627], ny[628] !== io || ny[629] !== ng ? (nm = (0, a.jsx)(nC.a, {
                value: ng,
                children: io
            }), ny[628] = io, ny[629] = ng, ny[630] = nm) : nm = ny[630], ny[631] !== id || ny[632] !== nm ? (nf = (0, a.jsx)(w.a, {
                enabled: id,
                children: nm
            }), ny[631] = id, ny[632] = nm, ny[633] = nf) : nf = ny[633], ny[634] !== oB || ny[635] !== aT || ny[636] !== ii || ny[637] !== il || ny[638] !== ic || ny[639] !== nf ? (nv = (0, a.jsx)(en.a, {
                conversationId: aT,
                error: ii,
                loadError: il,
                canRetry: oB,
                isWorkConversation: ic,
                children: nf
            }), ny[634] = oB, ny[635] = aT, ny[636] = ii, ny[637] = il, ny[638] = ic, ny[639] = nf, ny[640] = nv) : nv = ny[640], nv
        }

        function oM(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function oR(e) {
            return "user" === e.author.role
        }

        function ok(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function oO(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function oN(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function oG(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }

        function oF(e) {
            let t, n, s, o, c, u, h, g, m, f, v, y, C, I, w, T, j, S, E, A, P, M, R, k, N, G = (0, r.c)(208),
                {
                    ref: F,
                    trackReadState: z,
                    composerRef: B,
                    workspace: H,
                    shouldBlockMcpApps: W,
                    contentX: U,
                    conversationId: q,
                    sectionIndex: V,
                    composerConversationId: Y,
                    composerLeadingContent: Q,
                    aboveComposerContent: X,
                    historyLoadingContent: $,
                    requiredSystemHints: Z,
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
                    conversationLoadingLabel: ed,
                    entries: eu,
                    errorMessage: eh,
                    hasLoadError: ep,
                    onRetryLoad: eg,
                    hasRenderableTurns: em,
                    isComposerDisabled: ef,
                    readOnlyPlaceholder: ev,
                    moreDetailsEnabled: eb,
                    isConversationEmpty: ex,
                    showEmptyState: eC,
                    isConversationFetching: e_,
                    isConversationLoading: eT,
                    isSharedConversation: eE,
                    isSubmitDisabled: eA,
                    isTemporaryChat: eP,
                    isTurnActive: eM,
                    isWorkConversation: eR,
                    onboardingPrelude: ek,
                    scrollStateConversationId: eO,
                    initialResponsePlacementKey: eN,
                    sharedConversationId: eG,
                    sharedPostRegulatedConnectorKind: eF,
                    showComposer: ez,
                    archivedPreviewFooter: eL,
                    showPendingLoadingMessage: eD,
                    gptPluginMigrationBanner: eH,
                    awaitingGptContinuation: eW,
                    workOnlyConversionBanner: eq,
                    onAddSelectedText: eV,
                    onSubmitAccepted: eY
                } = e,
                eQ = void 0 === eC || eC,
                eX = (0, p.y)(D.a),
                e$ = (0, p.x)(sq.d, (0, b.useContext)(O.a)),
                e0 = (0, p.z)(tx.a),
                e5 = (0, p.x)(tD.a, q),
                e6 = H?.fullscreenContent != null ? "content" : "workspace",
                e7 = (0, J.a)(en ? "embedded" : e6),
                e8 = (0, p.z)(sv.a),
                e9 = ez && e8?.source.turnContext.conversationId !== Y,
                te = "floating" === e7.placement,
                tt = (0, p.z)(sh.h),
                tn = ec && null == eG && null == e$ && null == eL,
                tr = !eT && !eM && !ep && ex && !em,
                ts = (0, p.x)(L.i, q),
                to = eQ && tn && tr && null == ts && !e5 && !te,
                tl = eQ && !e5 && (!tn || !ex),
                tc = (0, b.useRef)(null),
                [td, tu] = (0, b.useState)(null),
                [th, tp] = (0, b.useState)(!1);
            G[0] !== eu || G[1] !== td ? (t = () => ({
                async scrollToMessage(e) {
                    let t = eu.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != td && await td.scrollToKey(t.turnKey, void 0, {
                        align: "top"
                    })
                }
            }), n = [eu, td], G[0] = eu, G[1] = td, G[2] = t, G[3] = n) : (t = G[2], n = G[3]), (0, b.useImperativeHandle)(F, t, n), G[4] !== eu ? (s = () => eu, G[4] = eu, G[5] = s) : s = G[5];
            let tg = (0, tL.a)(s);
            G[6] !== eu || G[7] !== td ? (o = async e => {
                let t = d()(eu, oL);
                if (null == t || e.aborted) return null;
                let n = null;
                return await td?.scrollToKey(t.turnKey, e => {
                    let t = e.querySelectorAll('[data-conversation-role="assistant"]');
                    return n = t.item(t.length - 1)
                }, {
                    align: "top",
                    signal: e
                }), n
            }, G[6] = eu, G[7] = td, G[8] = o) : o = G[8];
            let tm = o,
                [tf, tv] = (0, b.useState)(null);
            G[9] !== en || G[10] !== eX || G[11] !== eO ? (c = () => en ? 0 : eX.get(nY.a, eO), G[9] = en, G[10] = eX, G[11] = eO, G[12] = c) : c = G[12];
            let [ty, t_] = (0, b.useState)(c);
            G[13] !== en || G[14] !== tf || G[15] !== eX || G[16] !== eO ? (u = e => {
                en || eX.set(nY.a, eO, Math.max(0, e - (tf?.getHeightPx() ?? 0)))
            }, G[13] = en, G[14] = tf, G[15] = eX, G[16] = eO, G[17] = u) : u = G[17];
            let tI = (0, tL.a)(u);
            G[18] !== eu || G[19] !== td ? (h = async (e, t) => {
                if (t?.signal?.aborted) return;
                if (null == td) throw Error("ChatGPT conversation search scroll requested before VirtualizedTurnList API was ready");
                let n = eu.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                });
                null == n || (await td.scrollToKey(n.turnKey), t?.signal?.aborted || await (0, eJ.b)())
            }, G[18] = eu, G[19] = td, G[20] = h) : h = G[20];
            let tw = (0, tL.a)(h);
            G[21] === Symbol.for("react.memo_cache_sentinel") ? (g = e => tc.current?.querySelector(`[data-content-search-turn-key="${e}"]`) ?? null, G[21] = g) : g = G[21];
            let tT = (0, tL.a)(g);
            G[22] !== q || G[23] !== eu || G[24] !== td ? (m = async e => {
                let t = eu.find(t => {
                    let {
                        turn: n
                    } = t;
                    return n.messageIds.includes(e)
                });
                null != t && null != td && await td.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${q}-${e}`)}"]`), {
                    align: "center"
                })
            }, G[22] = q, G[23] = eu, G[24] = td, G[25] = m) : m = G[25];
            let tS = (0, tL.a)(m);
            G[26] !== tT || G[27] !== tw ? (f = {
                scrollToTurn: tw,
                getTurnContainer: tT
            }, G[26] = tT, G[27] = tw, G[28] = f) : f = G[28];
            let tE = f,
                tA = `chatgpt:${q}`;
            G[29] !== q || G[30] !== eP || G[31] !== eX || G[32] !== eG || G[33] !== e$ ? (v = async e => {
                let t = eX.get(L.j, q);
                !eP && null == eG && null == e$ && null != t && eX.get(ew.b) > 0 && await (0, eI.a)(eX, t, e)
            }, G[29] = q, G[30] = eP, G[31] = eX, G[32] = eG, G[33] = e$, G[34] = v) : v = G[34], G[35] !== tE || G[36] !== tg || G[37] !== tA || G[38] !== v ? (y = function(e) {
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
                                        unitId: (0, nj.a)("user", t),
                                        text: n
                                    }]
                                }
                                if ("assistant-message" === e.type) {
                                    let n = (0, n0.a)(e.content, ey.b),
                                        a = [],
                                        r = "";
                                    for (; e.content.includes(r);) r += "";
                                    let s = (0, n$.a)(function e(t, n, a, r) {
                                            let s = "",
                                                o = 0;
                                            for (let i of t) {
                                                let t = n.indexOf(i.raw, o); - 1 !== t && (s += n.slice(o, t), s += function(t, n, a) {
                                                    var r, s;
                                                    if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                    if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                        if (e.name === ey.a) {
                                                            let n = (0, n1.a)(e.attributes),
                                                                a = (0, n1.b)(e.attributes),
                                                                r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, ey.l)(e) === a);
                                                            if (null == r) return "";
                                                            let s = (0, ey.i)(r);
                                                            return "hidden" === s || "block" === s ? "" : (0, ey.j)(r) ?? ""
                                                        }
                                                        return e.name === nX.a ? (0, nJ.a)(e.attributes, "label") ?? "" : e.name === nX.b || e.name === nX.c ? "" : e.name === nQ.a ? e.text ?? "" : null
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
                routeContextId: tA,
                scrollAdapter: tE,
                ensureHistory: v
            }), G[35] = tE, G[36] = tg, G[37] = tA, G[38] = v, G[39] = y) : y = G[39];
            let tP = y;
            G[40] !== tP.contextId ? (C = {
                containerRef: tc,
                contextId: tP.contextId
            }, G[40] = tP.contextId, G[41] = C) : C = G[41], (0, e3.a)(C);
            let tM = e9 && null == eL,
                tO = e0 && tM && !te,
                tN = (0, ta.a)();
            G[42] !== q || G[43] !== em || G[44] !== ee || G[45] !== V || G[46] !== tN ? (I = {
                conversationId: q,
                sectionIndex: V,
                hasRenderableTurns: em,
                isCoveredByFloatingPanel: ee,
                shouldReduceMotion: tN,
                containerRef: tc
            }, G[42] = q, G[43] = em, G[44] = ee, G[45] = V, G[46] = tN, G[47] = I) : I = G[47];
            let tG = function(e) {
                    let t, n, a, s = (0, r.c)(12),
                        {
                            conversationId: o,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, sP.a)(0);
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
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(sk) && 0 !== n.clientWidth && (s.disconnect(), h.set(a * n.clientWidth), e = (0, sM.a)(h, 0, {
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
                tF = tM && te,
                [tz, tB] = (0, b.useState)(null),
                [tH, tW] = (0, b.useState)(null);
            G[48] !== eW || G[49] !== q || G[50] !== em || G[51] !== eP || G[52] !== eF || G[53] !== ez ? (w = ez && !eW ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(eK.BrowserComposerDisclaimer, {
                    conversationId: q,
                    hasUserMessage: em,
                    isTemporaryChat: eP,
                    regulatedConnectorKindOverride: eF
                })
            }) : void 0, G[48] = eW, G[49] = q, G[50] = em, G[51] = eP, G[52] = eF, G[53] = ez, G[54] = w) : w = G[54];
            let tU = w;
            G[55] !== q || G[56] !== eh || G[57] !== em || G[58] !== ef || G[59] !== eA || G[60] !== eP || G[61] !== eR || G[62] !== ez || G[63] !== eD ? (T = em ? null : (0, a.jsx)(nK.a, {
                conversationId: q,
                errorMessage: eh,
                isTemporaryChat: eP,
                isWorkConversation: eR,
                showPendingLoadingMessage: eD,
                showRequestUserInputStatus: ez && !ef && !eA
            }), G[55] = q, G[56] = eh, G[57] = em, G[58] = ef, G[59] = eA, G[60] = eP, G[61] = eR, G[62] = ez, G[63] = eD, G[64] = T) : T = G[64];
            let tK = T;
            G[65] !== q || G[66] !== eR || G[67] !== eG || G[68] !== e$ ? (j = eR && null == eG && null == e$ ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(eU, {
                    conversationId: q
                }, q)
            }) : null, G[65] = q, G[66] = eR, G[67] = eG, G[68] = e$, G[69] = j) : j = G[69];
            let tq = j;
            G[70] !== eL || G[71] !== tq ? (S = null != eL ? (0, a.jsxs)(a.Fragment, {
                children: [tq, eL]
            }) : null, G[70] = eL, G[71] = tq, G[72] = S) : S = G[72];
            let tV = S;
            G[73] !== X || G[74] !== tV || G[75] !== eW || G[76] !== Y || G[77] !== Q || G[78] !== B || G[79] !== q || G[80] !== er || G[81] !== tU || G[82] !== tK || G[83] !== eu || G[84] !== tq || G[85] !== tz || G[86] !== eH || G[87] !== ep || G[88] !== em || G[89] !== ea || G[90] !== e0 || G[91] !== ef || G[92] !== eT || G[93] !== ee || G[94] !== et || G[95] !== te || G[96] !== tt || G[97] !== en || G[98] !== eE || G[99] !== eA || G[100] !== eP || G[101] !== eR || G[102] !== ei || G[103] !== eY || G[104] !== el || G[105] !== ev || G[106] !== Z || G[107] !== tf || G[108] !== tm || G[109] !== e7.isHidden || G[110] !== eG || G[111] !== e$ || G[112] !== e9 || G[113] !== tF || G[114] !== tO || G[115] !== z || G[116] !== eq || G[117] !== H ? (E = tV ?? (e9 ? (0, a.jsxs)(ra.a.Provider, {
                value: eu.at(-1) ?? null,
                children: [et || te ? null : (0, a.jsx)(e4.a, {
                    onNavigate: tm
                }, q), te ? null : Q, (0, a.jsx)(oH, {
                    requiredSystemHints: Z,
                    composerRef: B,
                    workspace: H,
                    isInlinePreview: en,
                    hideModelPicker: ea,
                    disableAutoFocus: er,
                    onBackgroundSubmitAccepted: ei,
                    previewLifecycle: el,
                    conversationId: Y,
                    isImageEditComposer: tt,
                    disabled: ef,
                    readOnlyPlaceholder: ev,
                    awaitingGptContinuation: eW,
                    headerContent: tq,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [X, !eT && !ep && em && !eW && eq, e0 ? null : eH, tF && tK]
                    }),
                    isFullscreenComposer: te,
                    isHidden: e7.isHidden,
                    trackReadState: z && !ee,
                    isSharedConversation: eE,
                    isSubmitDisabled: eA,
                    followupPortalTarget: tz,
                    takeoverDisclaimerRef: tW,
                    showConversationFollowups: null == eG && null == e$ && !eP && !eR && !te,
                    isTemporaryChat: eP,
                    isWorkConversation: eR,
                    responseSpacerState: tf,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(aa, {
                            entries: eu,
                            historyLoader: eP || null != eG || null != e$ ? null : (0, a.jsx)(sC.a, {
                                conversationId: q
                            }),
                            isVisible: t
                        })
                    },
                    showVoiceStage: !tO,
                    voiceDisclaimer: e0 && !tO ? tU : void 0,
                    onSubmitAccepted: e => {
                        t_(0), eY?.(e)
                    }
                }, `${Y}:${tt?"image-edit":"chat"}`)]
            }) : tq), G[73] = X, G[74] = tV, G[75] = eW, G[76] = Y, G[77] = Q, G[78] = B, G[79] = q, G[80] = er, G[81] = tU, G[82] = tK, G[83] = eu, G[84] = tq, G[85] = tz, G[86] = eH, G[87] = ep, G[88] = em, G[89] = ea, G[90] = e0, G[91] = ef, G[92] = eT, G[93] = ee, G[94] = et, G[95] = te, G[96] = tt, G[97] = en, G[98] = eE, G[99] = eA, G[100] = eP, G[101] = eR, G[102] = ei, G[103] = eY, G[104] = el, G[105] = ev, G[106] = Z, G[107] = tf, G[108] = tm, G[109] = e7.isHidden, G[110] = eG, G[111] = e$, G[112] = e9, G[113] = tF, G[114] = tO, G[115] = z, G[116] = eq, G[117] = H, G[118] = E) : E = G[118];
            let tY = E,
                tQ = ee || void 0;
            if (G[119] !== q || G[120] !== ee || G[121] !== te || G[122] !== z ? (A = !z || te || ee ? null : (0, a.jsx)(rn.a, {
                    conversationId: q
                }), G[119] = q, G[120] = ee, G[121] = te, G[122] = z, G[123] = A) : A = G[123], G[124] !== eL || G[125] !== q || G[126] !== en || G[127] !== eG || G[128] !== e$ ? (P = en || null != eG || null != e$ || null != eL ? null : (0, a.jsx)(aH, {
                    conversationId: q
                }, q), G[124] = eL, G[125] = q, G[126] = en, G[127] = eG, G[128] = e$, G[129] = P) : P = G[129], G[130] !== q || G[131] !== eT || G[132] !== eP || G[133] !== eG || G[134] !== e$ ? (M = eT || eP || null != eG || null != e$ ? null : (0, a.jsx)(s_, {
                    conversationId: q
                }), G[130] = q, G[131] = eT, G[132] = eP, G[133] = eG, G[134] = e$, G[135] = M) : M = G[135], G[136] !== q || G[137] !== eu || G[138] !== th || G[139] !== e_ || G[140] !== eT || G[141] !== en || G[142] !== tm || G[143] !== eG || G[144] !== e$ || G[145] !== td ? (R = en || eT || null != eG || null != e$ ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(K, {
                        conversationId: q,
                        entries: eu,
                        turnListApi: td
                    }), (0, a.jsx)(tj.a, {
                        ready: !e_ && th && null != td && eu.length > 0,
                        onNavigate: tm
                    })]
                }), G[136] = q, G[137] = eu, G[138] = th, G[139] = e_, G[140] = eT, G[141] = en, G[142] = tm, G[143] = eG, G[144] = e$, G[145] = td, G[146] = R) : R = G[146], G[147] !== eL || G[148] !== to || G[149] !== U || G[150] !== ts || G[151] !== q || G[152] !== ed || G[153] !== tP || G[154] !== tU || G[155] !== tK || G[156] !== eu || G[157] !== tY || G[158] !== tI || G[159] !== ep || G[160] !== em || G[161] !== $ || G[162] !== eN || G[163] !== ty || G[164] !== e0 || G[165] !== e5 || G[166] !== ef || G[167] !== e_ || G[168] !== eT || G[169] !== ee || G[170] !== et || G[171] !== te || G[172] !== en || G[173] !== eE || G[174] !== eP || G[175] !== eM || G[176] !== eR || G[177] !== eb || G[178] !== eV || G[179] !== eg || G[180] !== ek || G[181] !== tf || G[182] !== eX || G[183] !== eo || G[184] !== tS || G[185] !== tG || G[186] !== eG || G[187] !== e$ || G[188] !== W || G[189] !== tN || G[190] !== ez || G[191] !== e9 || G[192] !== tl || G[193] !== tF || G[194] !== tO || G[195] !== tH || G[196] !== es || G[197] !== td || G[198] !== H ? (k = H?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                    children: [!W && H.fullscreenContent, tY]
                }) : (0, a.jsxs)(tk.a, {
                    viewportOverlay: et || en || eR || null != eG || null != e$ || null != eL || ee || te ? null : (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(rh, {
                            conversationId: q
                        }, q)
                    }),
                    hideTranscript: et,
                    active: !eT && (!em || null != td),
                    presentation: es ?? (en ? "compact" : "default"),
                    contentX: U,
                    composerFade: !1,
                    footerPlacement: to ? "home" : "bottom",
                    initialOffset: ty,
                    scrollOrigin: eo,
                    onScroll: tI,
                    responseSpacer: tf,
                    scrollToBottomButton: !e9 || te || tO ? void 0 : {
                        isWorking: eM
                    },
                    threadEndContent: e0 ? void 0 : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            ref: tB,
                            className: tR.a
                        }), null == tH ? tU : (0, x.createPortal)(tU, tH)]
                    }),
                    footerLeadingContent: tO ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: tR.a,
                                children: (0, a.jsx)(tb.a, {})
                            })
                        }), (0, a.jsx)("div", {
                            className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                            children: tU
                        })]
                    }) : void 0,
                    footer: tY,
                    children: [en || eT || null != eG ? null : (0, a.jsx)(nL, {
                        conversationId: q,
                        entries: eu,
                        isConversationFetching: e_,
                        turnListApi: td
                    }), (0, a.jsxs)(l.a.div, {
                        ref: tc,
                        style: {
                            x: tG
                        },
                        "data-chatgpt-conversation-selection-target": q,
                        className: (0, i.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", en && "pt-5"),
                        "data-thread-find-target": "conversation",
                        onFocusCapture: () => {
                            (0, e2.K)(eX, "conversation")
                        },
                        onMouseDownCapture: () => {
                            (0, e2.K)(eX, "conversation")
                        },
                        children: [(0, a.jsxs)(b.Suspense, {
                            fallback: (0, a.jsx)(ti.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            }),
                            children: [en || eT ? null : (0, a.jsx)(e1.a, {
                                conversationSource: tP
                            }), eP || null != eG || null != e$ ? null : $ ?? (0, a.jsx)(sC.a, {
                                conversationId: q
                            }), (0, a.jsx)(of.b, {
                                conversationId: q
                            }), (null != eG || null != e$) && em ? (0, a.jsx)(s4, {
                                sharedConversationId: eG
                            }) : null, null == ek ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)("div", {
                                    className: tR.a,
                                    children: ek
                                })
                            }), null == ts || eT ? null : (0, a.jsx)(nh.a, {
                                conversationId: q,
                                branchSource: {
                                    conversationId: ts.metadata.source_conversation_id,
                                    title: ts.metadata.source_conversation_title,
                                    gizmoId: ts.metadata.source_conversation_gizmo_id,
                                    ownerId: ts.metadata.source_conversation_owner_id
                                }
                            }), ep ? (0, a.jsx)(eB, {
                                isFetching: e_,
                                isSharedConversation: eE,
                                onRetry: eg
                            }) : eT ? (0, a.jsx)("div", {
                                "aria-busy": "true",
                                "aria-label": ed,
                                className: "relative min-h-0 flex-1",
                                role: "status",
                                children: (0, a.jsx)(ti.LoadingPage, {
                                    debugName: "ChatGptConversationPage",
                                    fillParent: !0
                                })
                            }) : em ? (0, a.jsxs)(sp.a, {
                                value: tS,
                                children: [en || ee ? null : (0, a.jsxs)(a.Fragment, {
                                    children: [eP || null != eG || null != e$ ? null : (0, a.jsx)(a.Fragment, {
                                        children: (0, a.jsx)(eS, {
                                            conversationId: q
                                        })
                                    }), (0, a.jsx)(ej, {
                                        entries: eu,
                                        TurnRowComponent: an
                                    })]
                                }), (0, a.jsx)(ax, {
                                    conversationId: q,
                                    entries: eu,
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
                            }), !tF && tK, ez && !ef ? (0, a.jsx)(sB, {
                                conversationId: q,
                                moreDetailsEnabled: eb,
                                onAddSelectedText: eV
                            }) : null]
                        }), en ? null : (0, a.jsx)(nV.a, {
                            initialPlacementKey: eN,
                            isActiveVoiceConversation: e0 && e5,
                            isLoadingHistory: eT,
                            latestUserTurnKey: eu.findLast(oz)?.turnKey,
                            onResponseSpacerStateChange: tv
                        }), tO ? (0, a.jsx)(l.a.div, {
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
                }), G[147] = eL, G[148] = to, G[149] = U, G[150] = ts, G[151] = q, G[152] = ed, G[153] = tP, G[154] = tU, G[155] = tK, G[156] = eu, G[157] = tY, G[158] = tI, G[159] = ep, G[160] = em, G[161] = $, G[162] = eN, G[163] = ty, G[164] = e0, G[165] = e5, G[166] = ef, G[167] = e_, G[168] = eT, G[169] = ee, G[170] = et, G[171] = te, G[172] = en, G[173] = eE, G[174] = eP, G[175] = eM, G[176] = eR, G[177] = eb, G[178] = eV, G[179] = eg, G[180] = ek, G[181] = tf, G[182] = eX, G[183] = eo, G[184] = tS, G[185] = tG, G[186] = eG, G[187] = e$, G[188] = W, G[189] = tN, G[190] = ez, G[191] = e9, G[192] = tl, G[193] = tF, G[194] = tO, G[195] = tH, G[196] = es, G[197] = td, G[198] = H, G[199] = k) : k = G[199], G[200] !== ee || G[201] !== tQ || G[202] !== A || G[203] !== P || G[204] !== M || G[205] !== R || G[206] !== k) {
                let e = (0, a.jsxs)("div", {
                    className: "contents",
                    "aria-hidden": tQ,
                    inert: ee,
                    children: [A, P, M, R, k]
                });
                N = (0, a.jsx)(eZ.a, {
                    children: e
                }), G[200] = ee, G[201] = tQ, G[202] = A, G[203] = P, G[204] = M, G[205] = R, G[206] = k, G[207] = N
            } else N = G[207];
            return N
        }

        function oz(e) {
            let {
                turn: t
            } = e;
            return t.items.some(oB)
        }

        function oB(e) {
            return "user-message" === e.type
        }

        function oL(e) {
            let {
                turn: t
            } = e;
            return t.items.some(oD)
        }

        function oD(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function oH(e) {
            let t, n, s, o = (0, r.c)(11),
                i = (0, b.useContext)(eY.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return o[0] !== e ? (t = (0, a.jsx)(oW, {
                    ...e
                }), o[0] = e, o[1] = t) : t = o[1], t
            }
            o[2] !== e.conversationId || o[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, o[2] = e.conversationId, o[3] = e.isImageEditComposer, o[4] = t) : t = o[4];
            let l = !e.isWorkConversation;
            return o[5] !== e ? (n = t => (0, a.jsx)(oW, {
                ...e,
                initialController: t
            }), o[5] = e, o[6] = n) : n = o[6], o[7] !== t || o[8] !== l || o[9] !== n ? (s = (0, a.jsx)(su, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), o[7] = t, o[8] = l, o[9] = n, o[10] = s) : s = o[10], s
        }

        function oW(e) {
            let t, n, s, o, i, l, c, d, u, h, g, m, f, v, y, x, _, w, T, j = (0, r.c)(72);
            j[0] !== e ? ({
                composerRef: t,
                initialController: n,
                ...s
            } = e, j[0] = e, j[1] = t, j[2] = n, j[3] = s) : (t = j[1], n = j[2], s = j[3]);
            let S = (0, p.y)(D.a),
                E = (0, p.x)(k.b, s.isTemporaryChat),
                {
                    isFullscreenComposer: A
                } = s,
                P = (0, C.a)(),
                {
                    state: O
                } = (0, I.X)(),
                N = (0, p.x)(oS, s.conversationId),
                G = (0, p.x)(L.P, s.conversationId),
                F = (0, p.x)(tV.c, s.conversationId);
            j[4] !== F || j[5] !== s.isSharedConversation || j[6] !== s.isWorkConversation || j[7] !== G ? (o = !s.isSharedConversation && !s.isWorkConversation && !(0, ao.a)(G) && !F, j[4] = F, j[5] = s.isSharedConversation, j[6] = s.isWorkConversation, j[7] = G, j[8] = o) : o = j[8];
            let z = o,
                B = z && !s.disabled && !s.isSubmitDisabled && !s.isImageEditComposer,
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
            let U = (0, oy.a)(l),
                K = (0, b.useContext)(eY.a),
                q = (0, b.useRef)(!1);
            j[16] !== W || j[17] !== K || j[18] !== n || j[19] !== s.isTemporaryChat || j[20] !== S ? (c = e => {
                null == e || null == n || q.current || (q.current = !0, (0, n_.Q)(S, W, n.getPersistedText(), {
                    isTemporaryChat: s.isTemporaryChat
                }), K?.onAdopt())
            }, j[16] = W, j[17] = K, j[18] = n, j[19] = s.isTemporaryChat, j[20] = S, j[21] = c) : c = j[21];
            let V = (0, tL.a)(c);
            j[22] !== V || j[23] !== t ? (d = (0, tz.a)(t, V), j[22] = V, j[23] = t, j[24] = d) : d = j[24];
            let Y = d,
                Q = (0, b.useContext)(ra.a),
                X = (0, p.x)(L.ab, s.conversationId),
                J = (0, p.x)(L.Y, s.conversationId),
                ee = (0, p.x)(n_.h, s.conversationId);
            j[25] !== J ? (u = (0, L.xb)(J), j[25] = J, j[26] = u) : u = j[26];
            let et = u,
                en = (0, p.z)(M.j.activeTab$);
            if (j[27] !== en || j[28] !== A || j[29] !== et || j[30] !== Q) {
                let e = Q?.turn.items.flatMap(oV);
                h = A && en?.tabType.kind === ts.a && "generatedImages" in en.props && null != en.props.generatedImages && !et && null != Q && "in_progress" !== Q.turn.status && !Q.turn.hasPendingAssistantReply && !Q.showPendingLoadingMessage && !e?.some(oq) && (null != Q.errorMessage || e?.some(oK)) ? Q.turn.messageIds.at(-1) ?? Q.turnKey : null, j[27] = en, j[28] = A, j[29] = et, j[30] = Q, j[31] = h
            } else h = j[31];
            let ea = h,
                er = (0, b.useRef)(null);
            j[32] !== ea || j[33] !== S ? (g = () => {
                null != ea && ea !== er.current && (er.current = ea, S.set(Z.a, "expanded"))
            }, m = [ea, S], j[32] = ea, j[33] = S, j[34] = g, j[35] = m) : (g = j[34], m = j[35]), (0, b.useEffect)(g, m);
            let es = (0, p.w)(sx.a, A ? s.conversationId : null);
            j[36] !== U || j[37] !== B || j[38] !== W || j[39] !== P || j[40] !== A || j[41] !== Y || j[42] !== E || j[43] !== s || j[44] !== S || j[45] !== H || j[46] !== O?.libraryFileCreation ? (f = e => (0, a.jsxs)(tr.a, {
                children: [A && s.trackReadState && !e?.isHidden ? (0, a.jsx)(rn.a, {
                    conversationId: s.conversationId,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, s.aboveComposerContent, (0, a.jsx)(eq.a, {
                    children: (0, a.jsx)(ng.a, {
                        ref: Y,
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
                        browserConversationId: (0, $.getThreadBrowserConversationId)(S) ?? s.conversationId,
                        composerController: U,
                        conversationId: s.conversationId,
                        requiredSystemHints: s.requiredSystemHints,
                        hideSystemHints: null != s.requiredSystemHints,
                        draftKey: W,
                        onPromptChange: E,
                        selectedCustomGpt: H,
                        targetGizmoId: H?.id,
                        onCustomGptChange: B ? e => {
                            S.set(oS, s.conversationId, e)
                        } : void 0,
                        onCustomAgentSelected: B ? () => {
                            S.set(oS, s.conversationId, null)
                        } : void 0,
                        disableDraftPrepare: s.isSubmitDisabled || s.isSharedConversation,
                        disableSubmit: s.disabled || s.isSubmitDisabled,
                        voiceInputDisabled: s.disabled,
                        aboveComposerHeaderContent: s.voiceDisclaimer,
                        getExtraDeveloperInstructions: !s.isInlinePreview && O?.libraryFileCreation && !s.isTemporaryChat ? oU : void 0,
                        isTemporaryChat: s.isTemporaryChat,
                        placeholder: s.disabled ? s.readOnlyPlaceholder ?? P.formatMessage({
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
            }), j[36] = U, j[37] = B, j[38] = W, j[39] = P, j[40] = A, j[41] = Y, j[42] = E, j[43] = s, j[44] = S, j[45] = H, j[46] = O?.libraryFileCreation, j[47] = f) : f = j[47];
            let eo = f;
            j[48] !== S ? (v = () => {
                (0, e2.K)(S, "conversation")
            }, y = () => {
                (0, e2.K)(S, "conversation")
            }, j[48] = S, j[49] = v, j[50] = y) : (v = j[49], y = j[50]);
            let ei = !s.isInlinePreview && !s.disabled && !s.isSubmitDisabled;
            j[51] !== U || j[52] !== ei ? (x = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(ri, {
                    composerController: U,
                    enabled: ei
                })
            }), j[51] = U, j[52] = ei, j[53] = x) : x = j[53];
            let el = A ? "floating" : "pane",
                ec = s.disabled || s.awaitingGptContinuation,
                ed = null == Q && !et,
                eu = ee || et ? "loading" : "idle";
            return j[54] !== eu ? (_ = {
                type: eu,
                unread: !1
            }, j[54] = eu, j[55] = _) : _ = j[55], j[56] !== es || j[57] !== s.isHidden || j[58] !== s.renderTranscript || j[59] !== eo || j[60] !== el || j[61] !== ec || j[62] !== ed || j[63] !== _ || j[64] !== X ? (w = (0, a.jsx)(R.a, {
                notifications: es,
                isHidden: s.isHidden,
                placement: el,
                forceExpanded: ec,
                composerOnly: ed,
                title: X,
                statusState: _,
                renderTranscript: s.renderTranscript,
                children: eo
            }), j[56] = es, j[57] = s.isHidden, j[58] = s.renderTranscript, j[59] = eo, j[60] = el, j[61] = ec, j[62] = ed, j[63] = _, j[64] = X, j[65] = w) : w = j[65], j[66] !== s.conversationId || j[67] !== v || j[68] !== y || j[69] !== x || j[70] !== w ? (T = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": s.conversationId,
                onMouseDownCapture: v,
                onFocusCapture: y,
                children: [x, w]
            }), j[66] = s.conversationId, j[67] = v, j[68] = y, j[69] = x, j[70] = w, j[71] = T) : T = j[71], T
        }
        async function oU() {
            return [to.a]
        }

        function oK(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function oq(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function oV(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function oY(e) {
            let t, n, s, o, i, l, c, d, u, h, g, m = (0, r.c)(50),
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
                E = (0, p.z)(null == w ? null : sS.a),
                A = (0, p.x)(L.j, f),
                {
                    data: P
                } = (0, p.x)(nW.chatGptConversationQueryById$, null == w ? null : A),
                M = (0, p.x)(ns.a, null == w ? null : A),
                R = (0, p.x)(L.z, M);
            m[0] !== M || m[1] !== P || m[2] !== R || m[3] !== w || m[4] !== A ? (t = null == P && null != M && null != A ? {
                id: A,
                gizmo_id: w,
                is_temporary_chat: R
            } : void 0, m[0] = M, m[1] = P, m[2] = R, m[3] = w, m[4] = A, m[5] = t) : t = m[5];
            let k = t,
                {
                    data: O
                } = (0, p.x)(eR.b, w),
                G = null == w ? null : (0, sS.b)(E ?? null, y ?? P ?? k, O),
                F = (0, p.x)(n2.b, f);
            m[6] !== j ? (n = j.formatMessage(ny.a.headerShare), m[6] = j, m[7] = n) : n = m[7];
            let z = n,
                B = (0, p.x)(null == y ? n2.a : null, f),
                D = null != y || null != B,
                H = null;
            if (x || G?.type === "unavailable") {
                let e;
                m[8] !== j ? (e = j.formatMessage(ny.a.shareDisabledRestricted), m[8] = j, m[9] = e) : e = m[9], H = e
            } else if (I && !D) {
                let e;
                m[10] !== j ? (e = j.formatMessage(ny.a.shareDisabledStreaming), m[10] = j, m[11] = e) : e = m[11], H = e
            } else if (!b || !D) {
                let e;
                m[12] !== j ? (e = j.formatMessage(ny.a.shareDisabledNotReady), m[12] = j, m[13] = e) : e = m[13], H = e
            }
            let W = null != H || F;
            m[14] !== W ? (s = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: W
            }, m[14] = W, m[15] = s) : s = m[15];
            let U = (0, p.x)(tA.b, s),
                K = "loaded" === S.status && "personal" === S.structure && (null == G || "snapshot" === G.type),
                q = null != H || F;
            m[16] !== q ? (o = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: q
            }, m[16] = q, m[17] = o) : o = m[17];
            let V = (0, p.x)(K ? tA.b : null, o);
            m[18] !== f || m[19] !== k || m[20] !== w || m[21] !== T || m[22] !== y ? (i = () => {
                let e = null == y ? T.get(n2.c, f) : {
                    serverConversationId: y.conversation_id,
                    title: y.title,
                    currentNodeId: y.current_node ?? void 0
                };
                null != e && (0, sE.shareChatGptProjectConversation)(T, e.serverConversationId, e.title ?? "", w, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", y ?? k)
            }, m[18] = f, m[19] = k, m[20] = w, m[21] = T, m[22] = y, m[23] = i) : i = m[23];
            let Y = i,
                Q = z;
            if ("loaded" === S.status && (null == G || "snapshot" === G.type)) {
                let e;
                m[24] !== S.structure || m[25] !== j ? (e = j.formatMessage("workspace" === S.structure ? ny.a.shareWorkspaceTooltip : ny.a.sharePublicTooltip), m[24] = S.structure, m[25] = j, m[26] = e) : e = m[26], Q = e
            }
            let X = null == H && !F && !0 === V,
                $ = H ?? Q,
                Z = null != H || F;
            return m[27] !== F || m[28] !== U ? (l = !F && (U ? (0, a.jsx)(e5.M, {}) : (0, a.jsx)(e5.L, {})), m[27] = F, m[28] = U, m[29] = l) : l = m[29], m[30] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(_.a, {
                ...ny.a.headerShare
            }), m[30] = c) : c = m[30], m[31] !== Y || m[32] !== F || m[33] !== z || m[34] !== Z || m[35] !== l ? (d = (0, a.jsxs)(eG.a, {
                "aria-label": z,
                color: "toolbar",
                disabled: Z,
                loading: F,
                radius: "large",
                size: "toolbar",
                onClick: Y,
                children: [l, c]
            }), m[31] = Y, m[32] = F, m[33] = z, m[34] = Z, m[35] = l, m[36] = d) : d = m[36], m[37] !== $ || m[38] !== d || m[39] !== X ? (u = (0, a.jsx)(e7.a, {
                cloneCustomTrigger: !0,
                disabled: X,
                tooltipContent: $,
                children: d
            }), m[37] = $, m[38] = d, m[39] = X, m[40] = u) : u = m[40], m[41] !== f || m[42] !== F || m[43] !== w || m[44] !== H || m[45] !== y ? (h = !1, m[41] = f, m[42] = F, m[43] = w, m[44] = H, m[45] = y, m[46] = h) : h = m[46], m[47] !== u || m[48] !== h ? (g = (0, a.jsxs)(a.Fragment, {
                children: [u, h]
            }), m[47] = u, m[48] = h, m[49] = g) : g = m[49], g
        }(0, eD.a)(async () => () => null)
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
            let t, n, u, h, p, g, m, f, v, y, b, x, C, _ = (0, r.c)(45),
                {
                    initialPlacementKey: I,
                    isActiveVoiceConversation: w,
                    isLoadingHistory: T,
                    latestUserTurnKey: j,
                    onResponseSpacerStateChange: S
                } = e,
                E = void 0 !== w && w,
                A = void 0 !== T && T,
                P = (0, o.k)();
            _[0] !== E || _[1] !== P ? (t = E && (0, o.f)(P, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), _[0] = E, _[1] = P, _[2] = t) : t = _[2];
            let M = t,
                R = (0, s.useRef)(j),
                k = (0, s.useRef)(A),
                O = (0, s.useRef)(null),
                N = (0, s.useRef)(null),
                G = (0, c.b)();
            _[3] !== G ? (n = () => new l.a(G), _[3] = G, _[4] = n) : n = _[4];
            let [F] = (0, s.useState)(n), {
                clear: z,
                consumeGrowth: B,
                getHeightPx: L,
                place: D,
                prepareThreadEndContent: H
            } = F, {
                addScrollListener: W,
                getScrollElement: U
            } = G;
            _[5] !== z || _[6] !== G ? (u = () => {
                z(), G.scrollToBottom()
            }, _[5] = z, _[6] = G, _[7] = u) : u = _[7];
            let K = (0, d.a)(u);
            _[8] === Symbol.for("react.memo_cache_sentinel") ? (h = (e, t) => {
                O.current = {
                    turnKey: e,
                    element: t
                }, N.current?.(e, t)
            }, _[8] = h) : h = _[8];
            let q = (0, d.a)(h);
            _[9] === Symbol.for("react.memo_cache_sentinel") ? (p = e => {
                N.current = e;
                let t = O.current;
                return null != t && e(t.turnKey, t.element), () => {
                    N.current = null
                }
            }, _[9] = p) : p = _[9];
            let V = (0, d.a)(p);
            _[10] !== U || _[11] !== j || _[12] !== D || _[13] !== M ? (g = () => {
                let e = U();
                if (null == e || 0 === e.clientHeight) return !1;
                if (M && null != j) {
                    var t, n;
                    let a, r = (t = e, n = j, a = t.querySelector(`[data-turn-key="${CSS.escape(n)}"]`), a?.querySelector("[data-user-message-bubble]") ?? a);
                    if (null == r) return !1;
                    D(r)
                } else D();
                return !0
            }, _[10] = U, _[11] = j, _[12] = D, _[13] = M, _[14] = g) : g = _[14];
            let Y = (0, s.useEffectEvent)(g);
            return _[15] !== z || _[16] !== B || _[17] !== L || _[18] !== S || _[19] !== q || _[20] !== D || _[21] !== H || _[22] !== K || _[23] !== M ? (f = () => (S({
                voiceAutoScrollEnabled: M,
                clear: z,
                consumeGrowth: B,
                getHeightPx: L,
                onTurnLayoutReady: q,
                place: D,
                prepareThreadEndContent: H,
                scrollToBottom: K
            }), () => {
                S(null)
            }), m = [z, B, L, S, q, D, H, K, M], _[15] = z, _[16] = B, _[17] = L, _[18] = S, _[19] = q, _[20] = D, _[21] = H, _[22] = K, _[23] = M, _[24] = m, _[25] = f) : (m = _[24], f = _[25]), (0, s.useLayoutEffect)(f, m), _[26] !== U || _[27] !== A || _[28] !== j || _[29] !== D || _[30] !== V || _[31] !== M ? (v = () => {
                let e = R.current,
                    t = k.current;
                if (R.current = j, k.current = A, M && !A && !t && null != j && j !== e) return function(e, t, n, a) {
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
            }, y = [U, A, j, D, V, M], _[26] = U, _[27] = A, _[28] = j, _[29] = D, _[30] = V, _[31] = M, _[32] = v, _[33] = y) : (v = _[32], y = _[33]), (0, s.useLayoutEffect)(v, y), _[34] !== W || _[35] !== U || _[36] !== I || _[37] !== Y ? (b = () => {
                if (null == I) return;
                let e = !1;
                return W(() => {
                    e || null == U() || (e = !0, e = Y())
                })
            }, _[34] = W, _[35] = U, _[36] = I, _[37] = Y, _[38] = b) : b = _[38], _[39] !== W || _[40] !== U || _[41] !== I ? (x = [W, U, I], _[39] = W, _[40] = U, _[41] = I, _[42] = x) : x = _[42], (0, s.useLayoutEffect)(b, x), _[43] !== F ? (C = (0, a.jsx)(i.a, {
                controller: F
            }), _[43] = F, _[44] = C) : C = _[44], C
        }
        n.d(t, {
            a: () => u
        })
    }),
    xtkq: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("XnlH"),
            o = n("zd8w"),
            i = n("Q2Qp"),
            l = n("tSEg"),
            c = n("JCJj"),
            d = n("q542");

        function u() {
            let e, t, n, u = (0, r.c)(6),
                h = (0, s.y)(l.a),
                p = (0, s.z)(c.d),
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
    aEnb: (function(e, t, n) {
        n.d(t, {
            ChatGptGizmoHeader: () => G
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("wtCf"),
            o = n("XnlH"),
            i = n("zd8w"),
            l = n("Wf1j"),
            c = n("oyxz"),
            d = n("HZfM"),
            u = n("Cslg"),
            h = n("kphc"),
            p = n("ygO2"),
            g = n("bqtn"),
            m = n("Ot7V"),
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
            A = n("wwvo"),
            P = n("H7Nt"),
            M = n("vzxm"),
            R = n("jAnS"),
            k = n("vHvp"),
            O = n("fexf");
        let N = (0, v.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

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
            } = (0, o.x)(A.b, t);
            if (null == h) return null;
            c[3] !== h.gizmo.display.name ? (n = h.gizmo.display.name.trim(), c[3] = h.gizmo.display.name, c[4] = n) : n = c[4];
            let p = n;
            return c[5] !== p ? (s = p ? (0, a.jsx)("span", {
                className: "truncate",
                children: p
            }) : null, c[5] = p, c[6] = s) : s = c[6], c[7] !== h ? (i = (0, a.jsx)(F, {
                gizmo: h
            }), c[7] = h, c[8] = i) : i = c[8], c[9] !== s || c[10] !== i ? (l = (0, a.jsxs)("div", {
                className: "flex min-w-0 items-center gap-1 select-none",
                children: [s, i]
            }), c[9] = s, c[10] = i, c[11] = l) : l = c[11], l
        }

        function F(e) {
            let t, n, v, G, F, z, B, L, D, H, W, U, K, q, V, Y, Q, X, $, Z, J = (0, r.c)(59),
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
            J[0] !== el ? (t = el?.get("disable_gpt_updates", !1), J[0] = el, J[1] = t) : t = J[1];
            let ed = t,
                eu = ee.gizmo.current_user_permission?.can_write && !ec && !ed,
                {
                    data: eh
                } = (0, o.z)(A.c);
            J[2] !== ee.gizmo.id || J[3] !== eh ? (n = eh?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === ee.gizmo.id
            }), J[2] = ee.gizmo.id, J[3] = eh, J[4] = n) : n = J[4];
            let ep = n,
                eg = eu || ec || ed ? `https://chatgpt.com/gpts/editor/${encodeURIComponent(ee.gizmo.id)}` : `https://chatgpt.com/g/${encodeURIComponent(ee.gizmo.id)}/view`;
            J[5] !== ee.gizmo.id || J[6] !== ee.gizmo.short_url ? (v = ee.gizmo.short_url?.trim() || ee.gizmo.id, J[5] = ee.gizmo.id, J[6] = ee.gizmo.short_url, J[7] = v) : v = J[7], J[8] !== v ? (G = (0, M.c)(v), J[8] = v, J[9] = G) : G = J[9], J[10] !== ea ? (F = (0, R.d)("", (0, R.e)(ea)), J[10] = ea, J[11] = F) : F = J[11];
            let em = `${G}${F}`;
            J[12] !== en ? (z = en.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions",
                description: "Accessible label for the compact overflow menu containing actions for the current custom GPT in Codex Desktop"
            }), J[12] = en, J[13] = z) : z = J[13];
            let ef = z;
            J[14] === Symbol.for("react.memo_cache_sentinel") ? (B = (0, a.jsx)(_.a, {
                className: "icon-sm"
            }), J[14] = B) : B = J[14], J[15] !== ef ? (L = (0, a.jsx)(p.a, {
                "aria-label": ef,
                color: "ghost",
                size: "icon",
                children: B
            }), J[15] = ef, J[16] = L) : L = J[16], J[17] !== ef || J[18] !== es || J[19] !== L ? (D = (0, a.jsx)(x.a, {
                cloneCustomTrigger: !0,
                tooltipContent: ef,
                triggerPopupOpen: es,
                children: L
            }), J[17] = ef, J[18] = es, J[19] = L, J[20] = D) : D = J[20], J[21] !== ee.gizmo.gizmo_type || J[22] !== ee.gizmo.id || J[23] !== er || J[24] !== em || J[25] !== et ? (H = "gpt" === ee.gizmo.gizmo_type ? (0, a.jsxs)(g.c.Item, {
                href: em,
                onClick: e => {
                    e.defaultPrevented || ((0, w.a)(et, s.mc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: ee.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), eo(!1), (0, T.c)(et, null), (0, h.m)(et, "chat"), er(em, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(g.c.ItemIcon, {
                    children: (0, a.jsx)(f.Eh, {})
                }), (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat",
                    description: "Short GPT actions menu label that opens a new conversation with the same custom GPT, rather than switching to general ChatGPT"
                })]
            }) : null, J[21] = ee.gizmo.gizmo_type, J[22] = ee.gizmo.id, J[23] = er, J[24] = em, J[25] = et, J[26] = H) : H = J[26], J[27] !== ee || J[28] !== et ? (W = () => (0, y.f)(et, N, {
                accountId: et.get(u.e),
                resource: ee
            }), J[27] = ee, J[28] = et, J[29] = W) : W = J[29], J[30] === Symbol.for("react.memo_cache_sentinel") ? (U = (0, a.jsx)(g.c.ItemIcon, {
                children: (0, a.jsx)(f.de, {})
            }), K = (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About",
                description: "GPT menu action that opens its details over the current conversation or landing page"
            }), J[30] = U, J[31] = K) : (U = J[30], K = J[31]), J[32] !== W ? (q = (0, a.jsxs)(g.c.Item, {
                onSelect: W,
                children: [U, K]
            }), J[32] = W, J[33] = q) : q = J[33];
            let ev = ep ? I : C.a;
            return J[34] !== ee || J[35] !== en || J[36] !== ep || J[37] !== et ? (V = () => {
                (0, A.e)(et, ee, !ep).catch(() => {
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
            }, J[34] = ee, J[35] = en, J[36] = ep, J[37] = et, J[38] = V) : V = J[38], J[39] !== ep ? (Y = ep ? (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT",
                description: "Compact overflow-menu action that removes the current custom GPT from the user's pinned sidebar items in Codex Desktop"
            }) : (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT",
                description: "Compact overflow-menu action that adds the current custom GPT to the user's pinned sidebar items in Codex Desktop"
            }), J[39] = ep, J[40] = Y) : Y = J[40], J[41] !== ev || J[42] !== V || J[43] !== Y ? (Q = (0, a.jsx)(g.c.Item, {
                LeftIcon: ev,
                onSelect: V,
                children: Y
            }), J[41] = ev, J[42] = V, J[43] = Y, J[44] = Q) : Q = J[44], J[45] !== eu || J[46] !== eg || J[47] !== ee.gizmo.current_user_permission?.can_view_config ? (X = eu || ee.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(g.c.Item, {
                href: eg,
                leftIconAsset: eu ? O.a : k.a,
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
            }) : null, J[45] = eu, J[46] = eg, J[47] = ee.gizmo.current_user_permission?.can_view_config, J[48] = X) : X = J[48], J[49] !== ee ? ($ = (0, a.jsx)(P.a, {
                resource: ee
            }), J[49] = ee, J[50] = $) : $ = J[50], J[51] !== es || J[52] !== H || J[53] !== q || J[54] !== Q || J[55] !== X || J[56] !== $ || J[57] !== D ? (Z = (0, a.jsxs)(g.a, {
                align: "start",
                contentWidth: "menu",
                open: es,
                onOpenChange: eo,
                triggerButton: D,
                children: [H, q, Q, X, $]
            }), J[51] = es, J[52] = H, J[53] = q, J[54] = Q, J[55] = X, J[56] = $, J[57] = D, J[58] = Z) : Z = J[58], Z
        }
    }),
    C6kc: (function(e, t, n) {
        var a = n("wtCf"),
            r = n("FoKl"),
            s = n("fyEg"),
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
            let g = null == l ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_TURN_SOURCES_BUTTON" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_SOURCES_SIDEBAR_ACTION_MENU";
            "explainer" === h && (g = "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON"), (0, i.a)(e, r.T, {
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
                entrypoint: g,
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
            }), "shown" === t && (0, i.a)(e, a.md, {
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
            r = n("XnlH"),
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

        function g(e) {
            let t, n, g, m, f = (0, a.c)(11),
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
            }), n = [v, C, x], f[0] = v, f[1] = C, f[2] = x, f[3] = t, f[4] = n) : (t = f[3], n = f[4]), (0, s.useEffect)(t, n), f[5] !== v || f[6] !== b || f[7] !== _ || f[8] !== x ? (g = () => {
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
                        if ((0, h.Zb)(x, v, n), !n) return;
                        let a = t(h.j, v);
                        if (null == a || !0 !== t(d.q, a)) return;
                        let r = (0, u.b)(a);
                        (0, c.j)(x, r, x.get(d.x, r)), _(a)
                    });
                return () => {
                    e(), t(), (0, h.Zb)(x, v, !1)
                }
            }, m = [v, b, _, x], f[5] = v, f[6] = b, f[7] = _, f[8] = x, f[9] = g, f[10] = m) : (g = f[9], m = f[10]), (0, s.useEffect)(g, m), null
        }
        n.d(t, {
            a: () => g
        })
    }),
    fr5e: (function(e, t, n) {
        n.d(t, {
            a: () => G
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("TPAN"),
            o = n("fyEg"),
            i = n("qmuW"),
            l = n("XnlH"),
            c = n("zd8w"),
            d = n("oyxz"),
            u = n("TDcV"),
            h = n("YxWD"),
            p = n("EFj1"),
            g = n("SGsN"),
            m = n("yGJW"),
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
            A = n("ASxG"),
            P = n("rn0J"),
            M = n("iXTs"),
            R = n("G6mJ"),
            k = n("VB5Q"),
            O = n("VTN2");
        let N = A.record(A.string(), A.union([A.string(), A.literal(!0)]));

        function G(e) {
            let t, n, A, G, z, B, L = (0, r.c)(28),
                {
                    conversationId: D,
                    turns: H,
                    loadHistory: W,
                    renderMode: U,
                    paragenEnabled: K,
                    enabled: q,
                    canCopy: V,
                    priority: Y
                } = e,
                Q = void 0 === U ? "conversation" : U,
                X = void 0 !== K && K,
                $ = void 0 === q || q,
                Z = void 0 === V || V,
                J = void 0 === Y ? "fallback" : Y,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            L[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), L[0] = t) : t = L[0], L[1] !== Z || L[2] !== D || L[3] !== $ || L[4] !== W || L[5] !== X || L[6] !== Q ? (n = [D, $, Z, W, Q, X], L[1] = Z, L[2] = D, L[3] = $, L[4] = W, L[5] = X, L[6] = Q, L[7] = n) : n = L[7], (0, c.useEffect)(t, n), L[8] !== Z || L[9] !== D || L[10] !== X || L[11] !== Q || L[12] !== ee || L[13] !== H ? (A = () => {
                let e = ee.get(C.j, D),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(C.x, D);
                if (!Z || "tpp" === n || "flora" === n) return null;
                let a = ee.get(C.K, D),
                    r = X && "conversation" === Q ? ee.get(w.a, D)?.promptMessageId : void 0,
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
                                            let r = (0, R.a)(n.data, e.contentReferences),
                                                s = O.d.safeParse(r?.reference);
                                            if (null == r || !s.success || (null == n.data.is_streaming ? !e.completed && (e.contentReferenceMessageStatuses?.[r.index] ?? "in_progress") === "in_progress" : "true" === n.data.is_streaming)) return;
                                            let o = e.contentReferenceMessageIds?.[r.index];
                                            t = {
                                                content: (0, k.a)(s.data.data),
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
                        threadCurrentNode: r ?? ee.get(C.A, D),
                        conversationOrigin: n,
                        isStreaming: (0, C.xb)(ee.get(C.Y, D)),
                        mode: Q,
                        moderationDisclaimersByMessageId: ee.get(C.L, D),
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
            }, L[8] = Z, L[9] = D, L[10] = X, L[11] = Q, L[12] = ee, L[13] = H, L[14] = A) : A = L[14];
            let en = (0, y.a)(A);
            L[15] !== ee ? (G = (e, t) => {
                let n = e => {
                    (0, m.a)(ee, o.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: s.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
                    })
                };
                return (0, v.a)(e, void 0, () => {
                    "string" == typeof e ? n(e) : e.then(n, F)
                }).then(e => {
                    e && !t?.aborted && ee.get(g.f).success((0, a.jsx)(d.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard",
                        description: "Success toast after the user copies the last assistant code block using the keyboard shortcut or command menu in Chat mode"
                    }))
                })
            }, L[15] = ee, L[16] = G) : G = L[16];
            let ea = G;
            return L[17] !== D || L[18] !== en || L[19] !== W || L[20] !== X || L[21] !== Q || L[22] !== ee || L[23] !== ea ? (z = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!W || ee.get(C.z, D) || null == t || ee.get(I.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let r = ee.get(u.a),
                    s = ee.get(C.A, D),
                    o = ee.get(h.f).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(C.A, D) !== s || X && "conversation" === Q && t(w.a, D)?.promptMessageId !== n || t(h.f).copyLastCodeBlock !== o) && a.abort()
                    });
                ea((async () => {
                    await (0, _.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, L[17] = D, L[18] = en, L[19] = W, L[20] = X, L[21] = Q, L[22] = ee, L[23] = ea, L[24] = z) : z = L[24], L[25] !== $ || L[26] !== J ? (B = {
                enabled: $,
                priority: J
            }, L[25] = $, L[26] = J, L[27] = B) : B = L[27], (0, p.a)("copyLastCodeBlock", z, B), null
        }

        function F() {}
    }),
    LEgg: (function(e, t, n) {
        n.d(t, {
            a: () => _
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("XnlH"),
            o = n("Wf1j"),
            i = n("bjsR"),
            l = n("TdH6"),
            c = n("QcW8");
        n("ZU27"), n("TpEm");
        var d = n("gbrq"),
            u = n("fBor"),
            h = n("ipGa"),
            p = n("o0PZ"),
            g = n("zd8w"),
            m = n("tSEg"),
            f = n("YnF4"),
            v = n("MrGp");

        function y() {
            let e, t, n = (0, r.c)(3),
                a = (0, s.y)(m.a);
            return n[0] !== a ? (e = () => {
                if ("chatgpt-thread" !== a.value.routeKind) return;
                let e = a.value.conversationId;
                return a.watch(t => {
                    let {
                        get: n
                    } = t, r = n(v.j, e);
                    if (null != r) return (0, f.a)(a, (0, p.Le)(`chatgpt:${r}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, g.useLayoutEffect)(e, t), null
        }
        n("n5iL"), n("q3HK"), n("bf6R"), n("CqQF");
        var b = n("rBfn"),
            x = n("enMl"),
            C = n("PCEr");

        function _(e) {
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
            }), d[5] = o) : o = d[5], d[6] !== p || d[7] !== g || d[8] !== f || d[9] !== m ? (l = f ? null : (0, a.jsx)(I, {
                chatIcon: p,
                mainToolbar: g,
                title: m
            }), d[6] = p, d[7] = g, d[8] = f, d[9] = m, d[10] = l) : l = d[10], d[11] !== v || d[12] !== n || d[13] !== s || d[14] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, s, v, o, l]
            }), d[11] = v, d[12] = n, d[13] = s, d[14] = l, d[15] = c) : c = d[15], c
        }

        function I(e) {
            let t, n, i, u, p, g, f = (0, r.c)(13),
                {
                    chatIcon: v,
                    mainToolbar: _,
                    title: I
                } = e,
                w = (0, s.y)(m.a);
            (0, o.a)(), (0, s.z)(d.i), (0, s.z)(c.s), f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(y, {}), f[0] = t, f[1] = n) : (t = f[0], n = f[1]), f[2] !== v || f[3] !== I ? (i = (0, a.jsx)(x.a, {
                title: I,
                icon: v
            }), f[2] = v, f[3] = I, f[4] = i) : i = f[4];
            let T = _ ?? void 0;
            return f[5] !== T ? (u = (0, a.jsx)(C.a, {
                mainToolbar: T
            }), f[5] = T, f[6] = u) : u = f[6], f[7] !== w.value.routeKind ? (p = "other" === w.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(b.b, {
                showLauncherButton: !1
            }), f[7] = w.value.routeKind, f[8] = p) : p = f[8], f[9] !== i || f[10] !== u || f[11] !== p ? (g = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i, u, p, null, null]
            }), f[9] = i, f[10] = u, f[11] = p, f[12] = g) : g = f[12], g
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
            r = n("XnlH"),
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
                } = t, a = n(l.K, e);
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
            s = n("XnlH"),
            o = n("oyxz"),
            i = n("Cslg"),
            l = n("bqtn"),
            c = n("bf6R"),
            d = n("Bbed"),
            u = n("X6Vn"),
            h = n("OWtl");
        let p = (0, d.a)(async () => (await n.e(306529).then(n.bind(n, "GkN4"))).GptReportDialog);

        function g(e) {
            let t, n, d, g, m = (0, r.c)(9),
                {
                    resource: f,
                    onSelect: v
                } = e,
                y = (0, s.y)(h.a),
                b = (0, s.z)(i.e);
            return null == b || f.gizmo.tags?.includes("first_party") || "marketplace" !== f.gizmo.share_recipient && "link" !== f.gizmo.share_recipient ? null : (m[0] !== b || m[1] !== v || m[2] !== f || m[3] !== y ? (t = () => {
                v?.(), (0, u.f)(y, p, {
                    accountId: b,
                    resource: f
                })
            }, m[0] = b, m[1] = v, m[2] = f, m[3] = y, m[4] = t) : t = m[4], m[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(l.c.ItemIcon, {
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
    alJ6: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("on57"),
            o = n("XnlH"),
            i = n("HZfM"),
            l = n("Bbed"),
            c = n("OWtl"),
            d = n("OMIV"),
            u = n("wwvo"),
            h = n("tV8b"),
            p = n("u9iS");
        let g = (0, l.a)(async () => (await n.e(901042).then(n.bind(n, "ut8h"))).GptPluginMigrationBannerContent, {
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
                d = (0, o.y)(c.a),
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
            let t, n, p, g, m, f, v, y, b, x = (0, r.c)(34),
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
            let A = "pending" === _,
                P = "error" === _ && null != T ? T : I;
            return x[21] !== n || x[22] !== A || x[23] !== P ? (f = (0, a.jsx)(l.a, {
                color: "primary",
                loading: A,
                size: "dialog",
                type: "button",
                onClick: P,
                children: n
            }), x[21] = n, x[22] = A, x[23] = P, x[24] = f) : f = x[24], x[25] !== w ? (v = null == w ? null : (0, a.jsx)(l.a, {
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
            }), x[27] = f, x[28] = v, x[29] = y) : y = x[29], x[30] !== p || x[31] !== m || x[32] !== y ? (b = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(i.a, {
                    variant: "announcement",
                    icon: g,
                    stackOnNarrow: !0,
                    wrapCtas: !0,
                    title: m,
                    content: p,
                    customCtas: y
                })
            }), x[30] = p, x[31] = m, x[32] = y, x[33] = b) : b = x[33], b
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
            r = n("XnlH"),
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
                    pending: (0, s.xb)(n(s.Y, t)),
                    completed: null == a || "completed" === a.result,
                    unread: n(s.H, t)
                }
            },
            preview: (e, t) => {
                let {
                    get: n
                } = e, a = n(s.K, t);
                return null == a ? null : (0, o.a)({
                    mapping: a,
                    current_node: n(s.A, t)
                })?.text ?? null
            },
            title: (e, t) => {
                let {
                    get: n
                } = e;
                return n(s.ab, t) || null
            },
            dismiss: (e, t) => {
                (0, s.Sb)(e, t, !1), (0, r.b)(e, t).catch(() => {})
            }
        });
        n.d(t, {}, {
            a: i
        })
    }),
    M3Kf: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("XnlH"),
            o = n("zd8w"),
            i = n("v7qY"),
            l = n("OWtl"),
            c = n("yLzP"),
            d = n("lsfk"),
            u = n("MrGp"),
            h = n("jfiJ"),
            p = n("FGJH");

        function g(e) {
            let t, n, g, f, v, y = (0, r.c)(18),
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
            y[8] !== I || y[9] !== j ? (g = () => {
                let e = w.current,
                    t = I.getScrollElement();
                if (null == e || null == t) return;
                let n = new IntersectionObserver(e => {
                    e.some(m) && j()
                }, {
                    root: t,
                    rootMargin: "80px 0px 0px 0px"
                });
                return n.observe(e), () => n.disconnect()
            }, y[8] = I, y[9] = j, y[10] = g) : g = y[10];
            let S = _?.cursor,
                E = _?.hasError;
            if (y[11] !== I || y[12] !== C || y[13] !== S || y[14] !== E ? (f = [I, C, S, E], y[11] = I, y[12] = C, y[13] = S, y[14] = E, y[15] = f) : f = y[15], (0, o.useEffect)(g, f), null == _ || _.complete || null == _.cursor) return null;
            let A = _.hasError ? T : null;
            return y[16] !== A ? (v = (0, a.jsx)(c.a, {
                ref: w,
                onRetry: A
            }), y[16] = A, y[17] = v) : v = y[17], v
        }

        function m(e) {
            return e.isIntersecting
        }
        n.d(t, {
            a: () => g
        })
    }),
    lUUH: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("XnlH"),
            o = n("oyxz"),
            i = n("Qgfj"),
            l = n("HZfM"),
            c = n("bqtn"),
            d = n("bf6R"),
            u = n("SGsN"),
            h = n("svjy"),
            p = n("OcxA"),
            g = n("FR8U"),
            m = n("OWtl"),
            f = n("OtLV"),
            v = n("w7E5"),
            y = n("wVX4"),
            b = n("W1Np"),
            x = n("QmkR"),
            C = n("xEXG"),
            _ = n("KMqT"),
            I = n("J6LI"),
            w = n("FgUr"),
            T = n("WLgA");

        function j(e) {
            let t, n, i = (0, r.c)(12),
                {
                    conversation: d,
                    onCreateProjectDialogCloseAutoFocus: u,
                    project: h,
                    showMoveToProject: p
                } = e,
                g = void 0 === p || p,
                f = (0, s.y)(m.a),
                y = (0, l.Z)(),
                b = (0, s.z)(v.a),
                _ = (0, s.z)(x.m),
                I = (0, C.b)();
            if (i[0] !== d || i[1] !== y || i[2] !== u || i[3] !== _ || i[4] !== h || i[5] !== I || i[6] !== b || i[7] !== f || i[8] !== g) {
                let e = S({
                        scope: f,
                        conversation: d,
                        project: h,
                        projectListQuery: b,
                        pinnedProjectsQuery: _,
                        showMoveToProject: g,
                        projectCrudStatus: I,
                        navigate: y,
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
                t = e.map(n), i[0] = d, i[1] = y, i[2] = u, i[3] = _, i[4] = h, i[5] = I, i[6] = b, i[7] = f, i[8] = g, i[9] = t
            } else t = i[9];
            return i[10] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), i[10] = t, i[11] = n) : n = i[11], n
        }

        function S(e) {
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
                isWorkConversation: j,
                sourceMemoryBlocked: S
            } = (0, I.c)(n, r), A = S ? f.a.projectOnlyMoveUnavailable : void 0, {
                data: P,
                isPending: M,
                isError: R
            } = s, {
                data: k,
                isPending: O,
                isError: N
            } = o, G = (0, w.a)(k, P, r?.gizmo.id), F = "allowed" === c, z = (e, a) => {
                (0, x.T)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(a).catch(() => {
                    t.get(u.f).danger(t.get(h.a).formatMessage(E.moveFailed), {
                        errorAnalytics: {
                            toastId: "move_conversation_to_snorlax_error"
                        }
                    })
                })
            }, B = [];
            for (let e of (F && (B.push({
                    id: "new-chatgpt-project",
                    icon: d.qg,
                    message: E.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (0, b.a)(t, e => {
                            z(e, () => {
                                m((0, T.c)(e.gizmo.id))
                            })
                        }, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: j,
                            onCloseAutoFocus: C
                        })
                    }
                }), G.length > 0 && B.push({
                    id: "new-project-separator",
                    type: "separator"
                })), G)) {
                let {
                    targetMemoryBlocked: t
                } = (0, I.c)(n, void 0, e), r = t ? (0, _.a)((0, y.c)(e)) : void 0;
                B.push({
                    id: `move-to-project:${e.gizmo.id}`,
                    icon: (0, a.jsx)(g.a, {
                        className: "icon-xs",
                        size: 16,
                        color: e.gizmo.display.theme,
                        fallbackIcon: (0, a.jsx)(d.td, {}),
                        icon: e.gizmo.display.emoji
                    }),
                    nativeIcon: (0, p.b)(e.gizmo.display.emoji),
                    message: E.projectName,
                    messageValues: {
                        projectName: e.gizmo.display.name
                    },
                    enabled: null == r,
                    tooltipMessage: r,
                    onSelect: () => {
                        z(e), m((0, T.c)(e.gizmo.id))
                    }
                })
            }
            return l && (R || N) ? B.push({
                id: "retry-project-destinations",
                message: E.destinationsFailed,
                closeOnSelect: !1,
                onSelect: () => {
                    Promise.all([t.query.invalidate(v.a), t.query.invalidate(x.m)])
                }
            }) : l && (M || O) ? B.push({
                id: "loading-project-destinations",
                message: E.loading,
                tooltipMessage: E.reopen,
                enabled: !1
            }) : R || N || M || O || 0 !== G.length || F || B.push({
                id: "no-project-destinations",
                message: E.noDestinations,
                enabled: !1
            }), [...i && B.length > 0 ? [{
                id: "move-to-project",
                icon: d.td,
                message: E.moveToProject,
                enabled: !S,
                tooltipMessage: A,
                submenu: B
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                icon: d.Bd,
                message: E.removeFromProject,
                enabled: !S,
                tooltipMessage: A,
                onSelect: () => {
                    (0, x.T)({
                        scope: t,
                        conversationId: n.id,
                        projectId: null
                    }).catch(() => {
                        t.get(u.f).danger(t.get(h.a).formatMessage(E.removeFailed), {
                            errorAnalytics: {
                                toastId: "move_conversation_to_snorlax_error"
                            }
                        })
                    })
                }
            }]]
        }
        let E = (0, i.f)({
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
            a: () => j,
            b: () => S
        })
    }),
    MDmT: (function(e, t, n) {
        var a = n("XnlH"),
            r = n("Qgfj"),
            s = n("OWtl"),
            o = n("MrGp"),
            i = n("b6fw");
        let l = (0, a.d)(s.a, (e, t) => {
            let {
                get: n
            } = t, a = n(i.g, e);
            if (null == a) return null;
            let r = n(o.K, e);
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
                    y = s?.status === "sending" && (s.sectionId === l?.id || s.sectionId === g?.id),
                    b = null == m || v ? [] : c.slice(m, f ?? c.length),
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
    JUxu: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("XnlH"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("bjsR"),
            c = n("EOo5"),
            d = n("ygO2"),
            u = n("X6Vn"),
            h = n("OWtl"),
            p = n("gsAl");
        let g = (0, o.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function m(e) {
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
                g = (0, s.y)(h.a),
                m = (0, s.x)(p.d, (0, c.a)());
            return null == m ? null : (l[0] !== u || l[1] !== g || l[2] !== m.id ? (t = () => y(g, m.id, u), l[0] = u, l[1] = g, l[2] = m.id, l[3] = t) : t = l[3], l[4] !== u ? (n = u ? (0, a.jsx)(i.a, {
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
            (0, u.f)(e, g, {
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
            b: () => m
        })
    }),
    JKdL: (function(e, t, n) {
        n.d(t, {
            a: () => u
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("XnlH"),
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
                g = (0, c.a)(),
                m = (0, s.z)(i.k),
                f = (0, s.z)(l.l);
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
    vpdG: (function(e, t, n) {
        var a = n("QosV"),
            r = n("HVBu"),
            s = n.n(r),
            o = n("XnlH"),
            i = n("o0PZ"),
            l = n("zd8w"),
            c = n("Gdjn"),
            d = n("xqnZ"),
            u = n("OWtl"),
            h = n("ADAj"),
            p = n("Ow2S"),
            g = n("fDfx"),
            m = n("MrGp");

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
                let e = null == C ? null : j.get(m.x, C),
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
                return null == I && null != C && "string" == typeof T && null != (0, g.j)(j, T) && "tpp" !== e && "flora" !== e && (0, p.L)(j, C, t.getChatGptPrompt().systemHints), t
            }), b[2] = C, b[3] = T, b[4] = I, b[5] = w, b[6] = j, b[7] = n) : n = b[7];
            let [S] = (0, l.useState)(n);
            b[8] !== S || b[9] !== x ? (r = x ?? S(), b[8] = S, b[9] = x, b[10] = r) : r = b[10];
            let E = r,
                A = (0, l.useRef)(null);
            b[11] !== E || b[12] !== T || b[13] !== j ? (f = () => {
                if (null == T) return;
                let e = j.get(p.s, T);
                return null != A.current && A.current !== e && E.restoreDraft(e), () => {
                    A.current = j.get(p.s, T)
                }
            }, v = [E, T, j], b[11] = E, b[12] = T, b[13] = j, b[14] = f, b[15] = v) : (f = b[14], v = b[15]), (0, l.useLayoutEffect)(f, v), b[16] !== E || b[17] !== x ? (y = () => {
                null != x || E.view.isDestroyed || E.destroy()
            }, b[16] = E, b[17] = x, b[18] = y) : y = b[18];
            let P = y;
            return (0, d.f)(P, E), E
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
            r = n("XnlH"),
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
                    onUnavailable: g,
                    children: m
                } = e,
                f = (0, r.y)(l.a),
                v = (0, o.Z)(),
                y = (0, s.useRef)(!1);
            d[0] !== p || d[1] !== h || d[2] !== v || d[3] !== g || d[4] !== f ? (t = () => {
                g?.(), f.get(i.f).info(h, {
                    id: "conversation-inaccessible",
                    duration: 5
                }), v(p, {
                    replace: !0
                })
            }, d[0] = p, d[1] = h, d[2] = v, d[3] = g, d[4] = f, d[5] = t) : t = d[5];
            let b = (0, s.useEffectEvent)(t);
            return d[6] !== u || d[7] !== b ? (n = () => {
                u && !y.current && (y.current = !0, b())
            }, d[6] = u, d[7] = b, d[8] = n) : n = d[8], d[9] !== u ? (c = [u], d[9] = u, d[10] = c) : c = d[10], (0, s.useEffect)(n, c), u ? null : m
        }
        n.d(t, {
            a: () => c
        })
    }),
    GKsW: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("XnlH"),
            o = n("zd8w"),
            i = n("GaA7"),
            l = n("OWtl"),
            c = n("tSEg"),
            d = n("n5oN");
        let u = (0, s.u)(l.a, () => []);

        function h(e) {
            let t, n = (0, r.c)(2),
                {
                    title: o
                } = e,
                i = (0, s.y)(c.a),
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
                    nativeTitle: y
                } = e,
                b = void 0 === y ? v : y,
                x = (0, s.y)(l.a),
                [C] = (0, o.useState)(g);
            return p[0] !== b || p[1] !== C || p[2] !== x || p[3] !== v ? (t = () => {
                if (i.appServices?.windowTitle == null) return;
                let e = {
                    owner: C,
                    title: null == v ? void 0 : b ?? null
                };
                x.set(u, t => t.some(e => e.owner === C) ? t.map(t => t.owner === C ? e : t) : [...t, e]), f(x)
            }, n = [x, C, v, b], p[0] = b, p[1] = C, p[2] = x, p[3] = v, p[4] = t, p[5] = n) : (t = p[4], n = p[5]), (0, o.useEffect)(t, n), p[6] !== C || p[7] !== x ? (a = () => () => {
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
    MX3C: (function(e, t, n) {
        var a = n("XnlH"),
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
                return n(u)[f(e)] ?? null
            });

        function p(e, t, n) {
            (0, i.t)(c, {
                entries: {
                    [f(t)]: null == n ? null : {
                        value: n
                    }
                },
                maxEntries: 100
            }), e.set(u, (0, i.k)(c, {}))
        }

        function g(e, t) {
            let n = (0, s.a)(t);
            return e.filter(e => (0, s.a)(e.connector_id) === n && "HIDDEN" !== e.visibility && !e.id.startsWith("implicit_link::"))
        }

        function m(e, t, n) {
            return e.some(e => (0, s.c)(e, t) && "OAUTH" === e.auth_type && "DISABLED_BY_ADMIN" !== e.connector_status && null == e.unavailable_reason && e.owners.some(e => "USER" === e.type && e.id === n))
        }

        function f(e) {
            let {
                accountId: t,
                userId: n,
                appId: a
            } = e;
            return JSON.stringify([t, n, a])
        }
        n.d(t, {
            a: () => g,
            b: () => m,
            d: () => p
        }, {
            c: h
        })
    }),
    RZBv: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("xSOA"),
            o = n("XnlH"),
            i = n("Wf1j"),
            l = n("oyxz"),
            c = n("HZfM"),
            d = n("QmkR"),
            u = n("HOLv"),
            h = n("SGsN"),
            p = n("iGet"),
            g = n("OWtl"),
            m = n("MRlq"),
            f = n("HFSu"),
            v = n("vNLk"),
            y = n("PCxL"),
            b = n("aZgH"),
            x = n("snEh");

        function C(e) {
            let t, n, C, _, I, w, T, j, S, E = (0, r.c)(36),
                {
                    conversationId: A,
                    kind: P
                } = e,
                M = (0, o.y)(g.a),
                R = (0, i.a)(),
                k = (0, c.X)(),
                O = (0, c.Z)();
            E[0] !== k.hash || E[1] !== k.pathname || E[2] !== k.search || E[3] !== O || E[4] !== M ? (t = () => {
                (0, y.e)(M), O({
                    pathname: k.pathname,
                    search: k.search,
                    hash: k.hash
                }, {
                    replace: !0,
                    state: null
                })
            }, E[0] = k.hash, E[1] = k.pathname, E[2] = k.search, E[3] = O, E[4] = M, E[5] = t) : t = E[5];
            let N = t,
                G = (0, o.z)(y.g);
            E[6] !== A || E[7] !== G ? (n = G?.find(e => (0, b.a)(e.task) === `hosted:${A}`), E[6] = A, E[7] = G, E[8] = n) : n = E[8];
            let F = n;
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
            }, E[12] = A, E[13] = P, E[14] = M, E[15] = _) : _ = E[15], E[16] !== A || E[17] !== N || E[18] !== P || E[19] !== M ? (I = (e, t, n) => {
                n?.("restored");
                let r = M.get(h.f).info((0, a.jsx)(l.a, {
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
                    id: `unarchive-thread-${P}:${A}`
                })
            }, E[16] = A, E[17] = N, E[18] = P, E[19] = M, E[20] = I) : I = E[20], E[21] !== R || E[22] !== M ? (w = (e, t, n) => {
                n?.(null), M.get(h.f).danger(R.formatMessage(m.a.unarchiveError), {
                    errorAnalytics: {
                        toastId: "previewFooter.onError.unarchiveError"
                    }
                })
            }, E[21] = R, E[22] = M, E[23] = w) : w = E[23], E[24] !== C || E[25] !== _ || E[26] !== I || E[27] !== w ? (T = {
                onMutate: C,
                mutationFn: _,
                onSuccess: I,
                onError: w
            }, E[24] = C, E[25] = _, E[26] = I, E[27] = w, E[28] = T) : T = E[28];
            let {
                mutate: z,
                isPending: B,
                isSuccess: L
            } = (0, s.a)(T), D = L || F?.status === "restored", H = B || F?.status === "restoring";
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
    ylLY: (function(e, t, n) {
        let a = (0, n("zd8w").createContext)(null);
        n.d(t, {}, {
            a: a
        })
    })
};