export const __rspack_esm_id = 670844;
export const __rspack_esm_ids = [670844];
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
            l = n("HZfM"),
            c = n("hzGf"),
            d = n("OFP1"),
            u = n("kphc"),
            h = n("ygO2"),
            p = n("DVOM"),
            m = n("OWtl"),
            g = n("wtCf"),
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
            let t, n, l, c, d, u, p, v, y, M, R, N, G, F, z, L, B, D, H, W, U, K, q = (0, s.c)(70),
                {
                    account: V,
                    accountId: Y,
                    userId: Q,
                    onClose: $,
                    onSwitchToWork: Z
                } = e,
                J = (0, r.y)(m.a),
                X = (0, f.a)(),
                {
                    email: ee
                } = (0, C.a)(),
                [et, en] = (0, o.useState)(),
                ea = (0, o.useRef)(!0);
            q[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => (ea.current = !0, () => {
                ea.current = !1
            }), n = [], q[0] = t, q[1] = n) : (t = q[0], n = q[1]), (0, o.useEffect)(t, n);
            let es = "account-owner" === V.account.account_user_role,
                er = "account-admin" === V.account.account_user_role,
                eo = !0 === V.entitlement.has_active_subscription,
                ei = (es || er) && eo,
                el = es || ei;
            q[2] !== ei || q[3] !== es ? (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE", ei ? l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY" : es && (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE"), q[2] = ei, q[3] = es, q[4] = l) : l = q[4], q[5] !== V.account.account_user_role || q[6] !== l || q[7] !== eo || q[8] !== J ? (c = (e, t) => {
                (0, P.a)(J, g.nd, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: V.account.account_user_role ?? void 0,
                    hasPaidSubscription: eo
                })
            }, q[5] = V.account.account_user_role, q[6] = l, q[7] = eo, q[8] = J, q[9] = c) : c = q[9];
            let ec = c;
            q[10] !== $ ? (d = () => {
                $(), (0, S.f)({
                    href: new URL("/codex/cloud", w.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, q[10] = $, q[11] = d) : d = q[11];
            let ed = d;
            q[12] !== V.account.subscription_seat_pools_enabled || q[13] !== Y || q[14] !== ed || q[15] !== ei || q[16] !== ee || q[17] !== X || q[18] !== es || q[19] !== ec || q[20] !== $ || q[21] !== Z || q[22] !== et || q[23] !== J || q[24] !== Q ? (u = async () => {
                if ("requesting" !== et) {
                    if (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), es && !ei) {
                        let e = new URL("/admin/members", w.h);
                        e.searchParams.set("account_id", Y), ee && e.searchParams.set("search", ee);
                        let t = e.toString(),
                            n = (0, A.c)(J, t, Y),
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
                            Z ? ($(), Z()) : ed(), J.get(E.f).success(X.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted",
                                description: "Success toast shown after requesting ChatGPT access from the modal"
                            }))
                        }
                    } catch (e) {
                        ea.current && en(O(e) ?? "error")
                    }
                }
            }, q[12] = V.account.subscription_seat_pools_enabled, q[13] = Y, q[14] = ed, q[15] = ei, q[16] = ee, q[17] = X, q[18] = es, q[19] = ec, q[20] = $, q[21] = Z, q[22] = et, q[23] = J, q[24] = Q, q[25] = u) : u = q[25];
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
            } else if (er) {
                let e;
                q[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.adminMessage",
                    defaultMessage: "You are assigned Work access only. Ask your workspace owner to buy ChatGPT seats, then update your seat type in Workspace settings.",
                    description: "Explanation for unpaid workspace admins who need an owner to buy ChatGPT seats"
                }), q[29] = e) : e = q[29], ep = e
            }
            q[30] !== ec || q[31] !== $ ? (y = e => {
                e || (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED"), $())
            }, q[30] = ec, q[31] = $, q[32] = y) : y = q[32], q[33] !== eu ? (M = e => {
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
            let em = "requesting" === et,
                eg = "requesting" === et;
            return q[38] !== el ? (G = el ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.updateSeatButton",
                defaultMessage: "Update seat",
                description: "Updates the current user's seat to include ChatGPT"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access",
                description: "Requests ChatGPT access from a workspace administrator"
            }), q[38] = el, q[39] = G) : G = q[39], q[40] !== em || q[41] !== eg || q[42] !== G ? (F = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: em,
                disabled: eg,
                children: G
            }), q[40] = em, q[41] = eg, q[42] = G, q[43] = F) : F = q[43], q[44] !== ed || q[45] !== ec || q[46] !== $ || q[47] !== Z ? (z = () => {
                Z ? ($(), Z()) : (ec("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), ed())
            }, q[44] = ed, q[45] = ec, q[46] = $, q[47] = Z, q[48] = z) : z = q[48], q[49] !== Z ? (L = Z ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work",
                description: "Switches from the Chat access explanation to the available Work surface"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex",
                description: "Returns to Codex from the Chat access explanation"
            }), q[49] = Z, q[50] = L) : L = q[50], q[51] !== z || q[52] !== L ? (B = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: z,
                children: L
            }), q[51] = z, q[52] = L, q[53] = B) : B = q[53], q[54] !== F || q[55] !== B ? (D = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [F, B]
            }), q[54] = F, q[55] = B, q[56] = D) : D = q[56], q[57] !== X || q[58] !== et ? (H = null != et && "requesting" !== et ? (0, a.jsx)("p", {
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
            }) : null, q[57] = X, q[58] = et, q[59] = H) : H = q[59], q[60] !== N || q[61] !== D || q[62] !== H ? (W = (0, a.jsxs)("div", {
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
            let t, n, o = (0, s.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, r.y)(m.a),
                p = (0, r.z)(N.a),
                g = (0, r.z)(d.t),
                f = (0, l.Z)();
            if ("restricted" !== p.status) return null;
            let v = `${p.accountId}:${p.userId}`;
            return o[0] !== f || o[1] !== c || o[2] !== h || o[3] !== g.status ? (t = "allowed" === g.status ? c ?? (() => {
                (0, u.l)(h, "work"), f("/")
            }) : void 0, o[0] = f, o[1] = c, o[2] = h, o[3] = g.status, o[4] = t) : t = o[4], o[5] !== i || o[6] !== v || o[7] !== t ? (n = (0, a.jsx)(F, {
                modeToggle: i,
                onSwitchToWork: t
            }, v), o[5] = i, o[6] = v, o[7] = t, o[8] = n) : n = o[8], n
        }

        function F(e) {
            let t, n, l, c, d, u = (0, s.c)(13),
                {
                    modeToggle: m,
                    onSwitchToWork: g
                } = e,
                f = (0, r.z)(N.a),
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
                return 0 === s.length ? [] : (n(o.e, n(o.a)), s.flatMap(e => {
                    let {
                        automationId: t,
                        messageId: a
                    } = e, s = n(o.b, t).data?.automation;
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
                return null != a && n(s.b, a).data?.automation.plan_type === "language_learning" ? a : null
            }),
            d = (0, a.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(c, e);
                return null == a ? null : n(s.b, a).data?.automation.title.trim() || null
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
    c6kO: (function(e, t, n) {
        n.d(t, {
            BusinessAgentConversationHeader: () => k,
            BusinessAgentHomeHero: () => O
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
        var S = n("ZGSy"),
            E = n("xvSo");

        function A(e) {
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
                children: (0, a.jsx)(R, {
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

        function P(e) {
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
                    children: (0, a.jsx)(R, {
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
            let t, n, r, o, i, l, u, h, y, b, x, C, _, I, T, j, A, P = (0, s.c)(29),
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
            }, P[2] = O, P[3] = n) : n = P[3], P[4] !== R ? (r = {
                "data-theme": "light",
                onOpenAutoFocus: R
            }, P[4] = R, P[5] = r) : r = P[5], P[6] !== k ? (o = e => {
                e.preventDefault(), G(!1), k?.()
            }, P[6] = k, P[7] = o) : o = P[7], P[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(w, {}), P[8] = i) : i = P[8], P[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(m.e, {
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
            }), P[19] = _, P[20] = T) : T = P[20], P[21] !== T || P[22] !== o ? (j = (0, a.jsx)(g.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: o,
                children: T
            }), P[21] = T, P[22] = o, P[23] = j) : j = P[23], P[24] !== N || P[25] !== j || P[26] !== n || P[27] !== r ? (A = (0, a.jsx)(m.b, {
                open: N,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: r,
                children: j
            }), P[24] = N, P[25] = j, P[26] = n, P[27] = r, P[28] = A) : A = P[28], A
        }

        function R(e) {
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

        function k(e) {
            let t, n = (0, s.c)(3),
                {
                    conversationId: o,
                    fallback: l
                } = e,
                c = (0, r.x)(i.t, o);
            return n[0] !== l || n[1] !== c ? (t = null == c ? l : (0, a.jsx)(A, {
                state: c
            }), n[0] = l, n[1] = c, n[2] = t) : t = n[2], t
        }

        function O(e) {
            let t, n, o, l = (0, s.c)(11),
                {
                    conversationId: c,
                    fallback: d,
                    onStarterPromptSelect: u
                } = e,
                h = (0, r.x)(i.t, c);
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
            s = n("o0PZ"),
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
                    advertiser_id: n.disclosure.advertiser_id,
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
            i = n("hSZm"),
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
            let a = e.get(p.C, t) ? e.get(p.ab, t) : n.title;
            (0, s.f)(e, i.SidebarRenameDialog, {
                initialValue: a ?? "",
                metadataThreadId: n.conversation_id,
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
    cv9w: (function(e, t, n) {
        n.d(t, {
            a: () => oR,
            ChatGptConversationPage: () => oP,
            ChatGptSharedConversationPage: () => oM
        });
        var a = n("ABep"),
            s = n("QosV"),
            r = n("hKYX"),
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
            L = n("jov5"),
            B = n("MrGp"),
            D = n("tSEg"),
            H = n("Ro2M"),
            W = n("bN4H"),
            U = n("TS05");

        function K(e) {
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
            return r ? null : (i[6] !== n || i[7] !== l || i[8] !== c || i[9] !== u || i[10] !== d ? (o = (0, a.jsx)(q, {
                automationId: n,
                conversationId: l,
                entries: c,
                turnListApi: d
            }, u), i[6] = n, i[7] = l, i[8] = c, i[9] = u, i[10] = d, i[11] = o) : o = i[11], o)
        }

        function q(e) {
            let t, n, a, r, o = (0, s.c)(25),
                {
                    automationId: i,
                    conversationId: l,
                    entries: c,
                    turnListApi: d
                } = e,
                u = (0, p.y)(D.a),
                h = (0, I.X)(),
                m = (0, p.z)(N.e),
                g = (0, p.x)(B.j, l),
                {
                    data: f
                } = (0, p.x)(H.b, i),
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
            es = n("Mali"),
            er = n("SGsN"),
            eo = n("OWtl"),
            ei = n("VnEZ"),
            el = n("mpQG"),
            ec = n("jDEJ"),
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
                    let t = e.get(B.j, n.conversationId),
                        s = (0, eC.c)(void 0, void 0, void 0, e.get(B.P, n.conversationId) ?? void 0),
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
                f = (0, p.x)(B.j, d),
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
                            predicate: eP
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
            let t, n, r = (0, s.c)(4),
                {
                    isFetching: o,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, p.z)(!i && eF.a) || o;
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
        var eB = n("FfNP"),
            eD = n("Bbed"),
            eH = n("WVag");
        let eW = (0, eD.a)(eB.loadEpicChartIndicator);

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
        var eK = n("DWXw"),
            eq = n("FmJi"),
            eV = n("TSib"),
            eY = n("sIex"),
            eQ = n("jEN2"),
            e$ = n("kphc"),
            eZ = n("YWcr"),
            eJ = n("RGWz"),
            eX = n("QxH2"),
            e0 = n("mwa5"),
            e1 = n("UuVq"),
            e2 = n("TwSq"),
            e3 = n("l0fK"),
            e4 = n("hkBU"),
            e5 = n("UxN3"),
            e6 = n("GKsW"),
            e7 = n("yWTM"),
            e8 = n("SkIz"),
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
            tS = n("tdP6"),
            tE = n("JCJj"),
            tA = n("KkZX"),
            tP = n("vjO1"),
            tM = n("ftSl"),
            tR = n("BdYu"),
            tk = n("Nyub"),
            tO = n("jZDY"),
            tN = n("HgLj"),
            tG = n("Bc5r"),
            tF = n("bIvi"),
            tz = n("Elta"),
            tL = n("eShZ"),
            tB = n("qqut"),
            tD = n("CsbC"),
            tH = n("tCyZ"),
            tW = n("c6kO"),
            tU = n("GgLN"),
            tK = n("KdfG"),
            tq = n("AOHi"),
            tV = n("TPAN"),
            tY = n("U2UX"),
            tQ = n("gbrq"),
            t$ = n("K33Q"),
            tZ = n("mv4d"),
            tJ = n("w7Qu"),
            tX = n("dt5v"),
            t0 = n("bWX0"),
            t1 = n("smHt"),
            t2 = n("aoTb"),
            t3 = n("pqpL"),
            t4 = n("riqo"),
            t5 = n("XcRr"),
            t6 = n("dk3M"),
            t7 = n("WFY2"),
            t8 = n("vldH"),
            t9 = n("ISgP"),
            ne = n("t2JB"),
            nt = n("DIH2"),
            nn = n("aFoA"),
            na = n("H8lk"),
            ns = n("rxj0"),
            nr = n("XkLc"),
            no = n("S95W");
        let ni = (0, p.v)(eo.a, e => null);
        var nl = n("DM5G"),
            nc = n("gJe8"),
            nd = n("d2rV"),
            nu = n("wyDz"),
            nh = n("EFj1"),
            np = n("TL6G"),
            nm = n("eKlv"),
            ng = n("OtLV"),
            nf = n("XtQP");

        function nv(e) {
            let t, n, a, r, o, i, l, c = (0, s.c)(16),
                {
                    conversationId: d
                } = e,
                u = (0, p.y)(eo.a),
                h = (0, C.a)();
            return c[0] !== d || c[1] !== h || c[2] !== u ? (t = () => {
                (0, nf.c)(u, d).catch(() => {
                    u.get(er.f).danger(h.formatMessage(ng.a.markUnreadError), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.sidebar.markUnreadError"
                        }
                    })
                })
            }, c[0] = d, c[1] = h, c[2] = u, c[3] = t) : t = c[3], (0, nh.a)("markThreadUnread", t), c[4] !== d || c[5] !== u ? (n = () => (0, nm.c)(u, d), a = [d, u], c[4] = d, c[5] = u, c[6] = n, c[7] = a) : (n = c[6], a = c[7]), (0, np.d)("rename-thread", n, a), c[8] !== d || c[9] !== u ? (r = () => (0, nm.d)(u, d), o = [d, u], c[8] = d, c[9] = u, c[10] = r, c[11] = o) : (r = c[10], o = c[11]), (0, np.d)("toggle-thread-pin", r, o), c[12] !== d || c[13] !== u ? (i = () => (0, nm.a)(u, d), l = [d, u], c[12] = d, c[13] = u, c[14] = i, c[15] = l) : (i = c[14], l = c[15]), (0, np.d)("archive-thread", i, l), null
        }
        var ny = n("VlIB"),
            nb = n("Ow2S"),
            nx = n("ASxG"),
            nC = n("wD9O"),
            n_ = n("lsfk"),
            nI = n("IObw"),
            nw = n("BOYb"),
            nT = n("kQNh"),
            nj = n.n(nT),
            nS = n("NkEl"),
            nE = n("FW69"),
            nA = "highlight-x7OnzP",
            nP = "safari-wcvuzB",
            nM = "block-t7sxyD";
        let nR = "chatgpt-search-result",
            nk = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* nO(e, t) {
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
            let r = RegExp(t.split(/\n+/u).map(nj()).join("\\n*"), "g");
            for (let n = r.exec(s); null != n && n.index < s.length; n = r.exec(s)) {
                let s = n.index;
                r.lastIndex = s + 1;
                let o = s + n[0].length,
                    i = a.find(e => e.end > s),
                    l = a.findLast(e => e.start < o);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, s - i.start), c.setEnd(l.node, o - l.start), nN(c) && ((0, nE.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function nN(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let nG = nx.object({
            chatGptSearchNavigation: nx.object({
                key: nx.string(),
                messageId: nx.string()
            })
        });

        function nF(e) {
            let t, n, a, r, o, i, l, c, d, u, h, m, g = (0, s.c)(48),
                {
                    conversationId: f,
                    entries: v,
                    isConversationFetching: y,
                    turnListApi: x
                } = e,
                C = (0, p.y)(eo.a),
                _ = (0, p.x)(B.r, f),
                w = (0, n_.b)(),
                T = (0, nC.c)();
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
                            left: (0, nC.b)(a.left + a.width / 2 - s.left - s.width / 2, n),
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
                        h = (0, nC.b)(o.height, n),
                        p = (0, nC.b)(o.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, w, T)
            }, g[0] = w, g[1] = T, g[2] = t) : t = g[2];
            let j = (0, b.useEffectEvent)(t),
                S = (0, I.X)(),
                E = (0, I.Z)(),
                A = new URLSearchParams(S.search),
                P = A.get("messageId") ?? A.get("message"),
                M = nG.safeParse(S.state).data?.chatGptSearchNavigation,
                R = P ?? M?.messageId,
                k = A.get("selectedTextQuery") ?? "",
                O = (0, p.x)(B.K, f),
                N = !k || null != R && null != O && (O[R]?.message != null || Object.values(O).some(e => e.message?.id === R)),
                G = k || A.get("historySearchQuery") || "",
                F = JSON.stringify([f, null != P ? S.key : M?.key ?? S.key, R]);
            g[3] !== F ? (n = {
                key: F,
                handled: !1,
                positioned: !1
            }, g[3] = F, g[4] = n) : n = g[4];
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
                        let m = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(nj()).join("|") : nj()(c), null == c ? "giu" : "gu"),
                            g = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(_);

                        function C() {
                            for (let t of (g = !0, x.disconnect(), clearTimeout(s), null != r && cancelAnimationFrame(r), null != a && CSS.highlights.get(nR) === a && CSS.highlights.delete(nR), e.classList.remove(nA, nP), b)) t.classList.remove(nA, nM)
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
                            let u = (0, nS.a)(e);
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
                                for (let e of nO(t, c))
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
                                A = [E?.top, E?.left, E?.width, E?.height, e.scrollHeight].join(":");
                            if (d < 4e3 && A !== o) {
                                o = A, _();
                                return
                            }
                            if (!v) {
                                v = !0, o = void 0, n?.(t), _();
                                return
                            }
                            for (let t of (x.disconnect(), clearTimeout(s), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...w), CSS.highlights.set(nR, a)) : w.length > 0 && T.push(e), e.classList.add(nA), (0, nw.e)() && e.classList.add(nP), T)) t.classList.add(nA, nM), b.add(t);
                            s = setTimeout(C, 3600)
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
            g[5] !== f || g[6] !== y || g[7] !== R || g[8] !== F || g[9] !== C || g[10] !== N ? (a = () => {
                if (z.current.key !== F && (z.current = {
                        key: F,
                        handled: !1,
                        positioned: !1
                    }), null != R && !y && N) return C.watch(e => {
                    !z.current.handled && (0, B.Lb)(e, f, R) && (z.current.handled = !0)
                })
            }, r = [f, y, R, F, C, N], g[5] = f, g[6] = y, g[7] = R, g[8] = F, g[9] = C, g[10] = N, g[11] = a, g[12] = r) : (a = g[11], r = g[12]), (0, b.useLayoutEffect)(a, r), g[13] !== v || g[14] !== R ? (o = null == R ? void 0 : v.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(R)
            }), g[13] = v, g[14] = R, g[15] = o) : o = g[15];
            let D = o;
            g[16] !== S || g[17] !== E || g[18] !== P || g[19] !== M ? (i = () => {
                null == P && null != M && E(S, {
                    replace: !0,
                    preventScrollReset: !0,
                    state: {
                        ...S.state,
                        chatGptSearchNavigation: void 0
                    }
                })
            }, g[16] = S, g[17] = E, g[18] = P, g[19] = M, g[20] = i) : i = g[20];
            let H = (0, b.useEffectEvent)(i);
            if (g[21] !== H || g[22] !== _ || g[23] !== y || g[24] !== D ? (l = () => {
                    !z.current.positioned || null != D || y || _ || H()
                }, g[21] = H, g[22] = _, g[23] = y, g[24] = D, g[25] = l) : l = g[25], g[26] !== _ || g[27] !== y || g[28] !== D ? (c = [_, y, D], g[26] = _, g[27] = y, g[28] = D, g[29] = c) : c = g[29], (0, b.useLayoutEffect)(l, c), g[30] !== R || g[31] !== D?.id || g[32] !== D?.turn.items || g[33] !== D?.turnKey) {
                let e = D?.turn.items.findIndex(e => "messageId" in e && e.messageId === R || "assistant-message" === e.type && null != R && e.sourceMessageIds?.includes(R)) ?? -1,
                    t = D?.turn.items[e],
                    n = D?.id;
                u = D?.turnKey, d = null == t || null == n ? void 0 : (0, nI.b)(t, e, n), g[30] = R, g[31] = D?.id, g[32] = D?.turn.items, g[33] = D?.turnKey, g[34] = d, g[35] = u
            } else d = g[34], u = g[35];
            let W = d;
            return g[36] !== L || g[37] !== R || g[38] !== u || g[39] !== x || g[40] !== W ? (h = () => {
                let e;
                if (null == u || null == x) return;
                let t = new AbortController,
                    n = null;
                return x.scrollToKey(u, e => n = (null == R ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(R)}"]`)) ?? (null == W ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(W)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = L(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, g[36] = L, g[37] = R, g[38] = u, g[39] = x, g[40] = W, g[41] = h) : h = g[41], g[42] !== R || g[43] !== F || g[44] !== u || g[45] !== x || g[46] !== W ? (m = [F, R, u, x, W], g[42] = R, g[43] = F, g[44] = u, g[45] = x, g[46] = W, g[47] = m) : m = g[47], (0, b.useLayoutEffect)(h, m), null
        }
        var nz = n("u6zN"),
            nL = n("SZi8"),
            nB = n("lBzi"),
            nD = n("Ga6O"),
            nH = n("MikY"),
            nW = n("vknh"),
            nU = n("Ppno"),
            nK = n("hXcw"),
            nq = n("ybWE"),
            nV = n("wDWo"),
            nY = n("IgxH"),
            nQ = n("iaTG"),
            n$ = n("c3f5"),
            nZ = n("iXTs"),
            nJ = n("xAIC"),
            nX = n("bf6R"),
            n0 = n("CqQF"),
            n1 = n("O666"),
            n2 = n("tNq4"),
            n3 = n("Skaw"),
            n4 = n("PYCG");

        function n5(e) {
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
                S = (0, p.z)(N.d),
                E = (0, p.z)(null == w ? null : n3.a),
                A = (0, p.x)(B.j, f),
                {
                    data: P
                } = (0, p.x)(nB.chatGptConversationQueryById$, null == w ? null : A),
                M = (0, p.x)(nn.a, null == w ? null : A),
                R = (0, p.x)(B.z, M);
            g[0] !== M || g[1] !== P || g[2] !== R || g[3] !== w || g[4] !== A ? (t = null == P && null != M && null != A ? {
                id: A,
                gizmo_id: w,
                is_temporary_chat: R
            } : void 0, g[0] = M, g[1] = P, g[2] = R, g[3] = w, g[4] = A, g[5] = t) : t = g[5];
            let k = t,
                {
                    data: O
                } = (0, p.x)(eR.b, w),
                G = null == w ? null : (0, n3.b)(E ?? null, y ?? P ?? k, O),
                F = (0, p.x)(n2.b, f);
            g[6] !== j ? (n = j.formatMessage(ng.a.headerShare), g[6] = j, g[7] = n) : n = g[7];
            let z = n,
                L = (0, p.x)(null == y ? n2.a : null, f),
                D = null != y || null != L,
                H = null;
            if (x || G?.type === "unavailable") {
                let e;
                g[8] !== j ? (e = j.formatMessage(ng.a.shareDisabledRestricted), g[8] = j, g[9] = e) : e = g[9], H = e
            } else if (I && !D) {
                let e;
                g[10] !== j ? (e = j.formatMessage(ng.a.shareDisabledStreaming), g[10] = j, g[11] = e) : e = g[11], H = e
            } else if (!b || !D) {
                let e;
                g[12] !== j ? (e = j.formatMessage(ng.a.shareDisabledNotReady), g[12] = j, g[13] = e) : e = g[13], H = e
            }
            let W = null != H || F;
            g[14] !== W ? (r = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: W
            }, g[14] = W, g[15] = r) : r = g[15];
            let U = (0, p.x)(n1.b, r),
                K = "loaded" === S.status && "personal" === S.structure && (null == G || "snapshot" === G.type),
                q = null != H || F;
            g[16] !== q ? (o = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: q
            }, g[16] = q, g[17] = o) : o = g[17];
            let V = (0, p.x)(K ? n1.b : null, o);
            g[18] !== f || g[19] !== k || g[20] !== w || g[21] !== T || g[22] !== y ? (i = () => {
                let e = null == y ? T.get(n2.c, f) : {
                    serverConversationId: y.conversation_id,
                    title: y.title,
                    currentNodeId: y.current_node ?? void 0
                };
                null != e && (0, n4.shareChatGptProjectConversation)(T, e.serverConversationId, e.title ?? "", w, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", y ?? k)
            }, g[18] = f, g[19] = k, g[20] = w, g[21] = T, g[22] = y, g[23] = i) : i = g[23];
            let Y = i,
                Q = z;
            if ("loaded" === S.status && (null == G || "snapshot" === G.type)) {
                let e;
                g[24] !== S.structure || g[25] !== j ? (e = j.formatMessage("workspace" === S.structure ? ng.a.shareWorkspaceTooltip : ng.a.sharePublicTooltip), g[24] = S.structure, g[25] = j, g[26] = e) : e = g[26], Q = e
            }
            let $ = null == H && !F && !0 === V,
                Z = H ?? Q,
                J = null != H || F;
            return g[27] !== F || g[28] !== U ? (l = !F && (U ? (0, a.jsx)(nX.M, {}) : (0, a.jsx)(nX.L, {})), g[27] = F, g[28] = U, g[29] = l) : l = g[29], g[30] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(_.a, {
                ...ng.a.headerShare
            }), g[30] = c) : c = g[30], g[31] !== Y || g[32] !== F || g[33] !== z || g[34] !== J || g[35] !== l ? (d = (0, a.jsxs)(eG.a, {
                "aria-label": z,
                color: "toolbar",
                disabled: J,
                loading: F,
                radius: "large",
                size: "toolbar",
                onClick: Y,
                children: [l, c]
            }), g[31] = Y, g[32] = F, g[33] = z, g[34] = J, g[35] = l, g[36] = d) : d = g[36], g[37] !== Z || g[38] !== d || g[39] !== $ ? (u = (0, a.jsx)(n0.a, {
                cloneCustomTrigger: !0,
                disabled: $,
                tooltipContent: Z,
                children: d
            }), g[37] = Z, g[38] = d, g[39] = $, g[40] = u) : u = g[40], g[41] !== f || g[42] !== F || g[43] !== w || g[44] !== H || g[45] !== y ? (h = !1, g[41] = f, g[42] = F, g[43] = w, g[44] = H, g[45] = y, g[46] = h) : h = g[46], g[47] !== u || g[48] !== h ? (m = (0, a.jsxs)(a.Fragment, {
                children: [u, h]
            }), g[47] = u, g[48] = h, g[49] = m) : m = g[49], m
        }(0, eD.a)(async () => () => null);
        var n6 = n("B0Wx"),
            n7 = n("if6d"),
            n8 = n("r2mP"),
            n9 = n("UTM4"),
            ae = n("Jj1R"),
            at = n("ZhoB"),
            an = n("RADZ"),
            aa = n("rZzh"),
            as = n("FWlV");

        function ar(e) {
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
                C = (0, p.x)(h.isMostRecentTurn ? aa.d : null, h.conversationId);
            u[2] !== h.timestampSeparatorAtMs ? (n = null == h.timestampSeparatorAtMs ? null : (0, a.jsx)(n8.b, {
                sentAtMs: h.timestampSeparatorAtMs
            }), u[2] = h.timestampSeparatorAtMs, u[3] = n) : n = u[3];
            let I = null != h.paragen;
            return u[4] !== h.branchingMessageId || u[5] !== h.browserConversationId || u[6] !== h.conversationId || u[7] !== h.feedbackEnabled || u[8] !== h.hasLaterSitesPreview || u[9] !== h.id || u[10] !== h.isMostRecentTurn || u[11] !== h.isReadOnly || u[12] !== h.isTemporaryChat || u[13] !== h.isWorkConversation || u[14] !== h.onEditUserMessage || u[15] !== h.onFork || u[16] !== h.onRegenerateResponse || u[17] !== h.pendingSubmissionAttachments || u[18] !== h.readAloudEnabled || u[19] !== h.referenceImageSuggestionActionInput || u[20] !== h.safetyReview || u[21] !== h.shareEnabled || u[22] !== h.turn || u[23] !== f || u[24] !== x || u[25] !== I ? (r = (0, a.jsx)(ae.a, {
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
            }), u[4] = h.branchingMessageId, u[5] = h.browserConversationId, u[6] = h.conversationId, u[7] = h.feedbackEnabled, u[8] = h.hasLaterSitesPreview, u[9] = h.id, u[10] = h.isMostRecentTurn, u[11] = h.isReadOnly, u[12] = h.isTemporaryChat, u[13] = h.isWorkConversation, u[14] = h.onEditUserMessage, u[15] = h.onFork, u[16] = h.onRegenerateResponse, u[17] = h.pendingSubmissionAttachments, u[18] = h.readAloudEnabled, u[19] = h.referenceImageSuggestionActionInput, u[20] = h.safetyReview, u[21] = h.shareEnabled, u[22] = h.turn, u[23] = f, u[24] = x, u[25] = I, u[26] = r) : r = u[26], u[27] !== h.conversationId || u[28] !== h.isTemporaryChat || u[29] !== h.isWorkConversation || u[30] !== h.paragen || u[31] !== x ? (o = null == h.paragen ? null : (0, a.jsx)(an.a, {
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
                    legacyIcon: n9.a,
                    asset16: as.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(_.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you",
                    description: "Privacy disclaimer shown between the original shared ChatGPT conversation and the reader's new private messages after they continue the shared conversation in Codex Desktop"
                })]
            }) : null, u[33] = h.showSharedConversationPrivateDisclaimer, u[34] = i) : i = u[34], u[35] !== h || u[36] !== C || u[37] !== y || u[38] !== x ? (l = h.isMostRecentTurn ? (0, a.jsx)(nH.a, {
                conversationId: h.conversationId,
                errorMessage: h.errorMessage,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                onRetry: null == h.onRegenerateResponse || null == C ? void 0 : async e => {
                    let t = y.get(aa.d, h.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = y.get(B.R, h.conversationId)?.metadata?.errorCode;
                    (0, at.d)(y.get(ed.c).logProductEvent, {
                        conversationId: y.get(B.j, h.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await h.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, aa.e)(t.message, y.get(nb.t, h.conversationId)),
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

        function ao(e) {
            let t, n, r, o = (0, s.c)(8),
                {
                    entries: i,
                    historyLoader: l,
                    isVisible: c
                } = e,
                d = c ? l : null;
            return o[0] !== i ? (t = (0, a.jsx)(n7.a, {
                entries: i,
                preserveMeasuredTurnViewport: !0,
                RowComponent: ai
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

        function ai(e) {
            let t, n = (0, s.c)(2),
                {
                    entry: r
                } = e;
            return n[0] !== r ? (t = (0, a.jsx)(ar, {
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
        var al = n("wwvo"),
            ac = n("u4MG"),
            ad = n("jAnS");
        let au = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(B.j, e);
            return null != a ? a : n(B.C, e) || n(nb.h, e) || null != n(nb.x, e) ? void 0 : null
        });

        function ah(e) {
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
                _ = (0, p.x)(au, h),
                w = (0, p.x)(B.C, h),
                T = (0, p.x)(B.P, h),
                j = w ? T : C;
            d[0] !== j ? (t = null != j && (0, ac.a)(j) ? j : null, d[0] = j, d[1] = t) : t = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                enabled: !1
            }, d[2] = n) : n = d[2];
            let {
                data: S
            } = (0, p.x)(eR.b, t, n);
            d[3] !== j ? (r = null == j || (0, ac.a)(j) ? null : j, d[3] = j, d[4] = r) : r = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (o = {
                enabled: !1
            }, d[5] = o) : o = d[5];
            let {
                data: E
            } = (0, p.x)(al.b, r, o);
            if (null === _ || (0, ad.e)(b) && null != _ && !w) {
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
            }) : (0, ad.c)(_ ?? h, {
                gizmoId: S?.gizmo.short_url ?? E?.gizmo.short_url ?? j
            }), d[9] = h, d[10] = E?.gizmo, d[11] = j, d[12] = S?.gizmo, d[13] = _, d[14] = m, d[15] = i) : i = d[15];
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
                            ...s
                        } = t;
                        a = s, d[25] = t, d[26] = a
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
        var ap = n("SZCv"),
            am = n.n(ap),
            ag = n("ALWK"),
            af = n("PC5z"),
            av = n("lZ4W"),
            ay = n("aRto"),
            ab = n("WWSI"),
            ax = n("U3Gy"),
            aC = n("mKTJ");
        let a_ = (0, p.c)(tx.a, e => {
                let {
                    get: t
                } = e;
                return t(ag.n)
            }, {
                isEqual: am()
            }),
            aI = (0, p.c)(tx.a, e => {
                let {
                    get: t
                } = e;
                return t(af.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function aw(e) {
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
                g = (0, p.z)(null == m ? null : a_),
                f = (0, p.z)(aI);
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
                y = (0, b.useContext)(ay.a),
                x = c.at(-1);
            if (y?.aboveComposer != null && null != x && v.push(x.turnKey), null != m && g?.size)
                for (let e of c) e.turn.items.flatMap(aE).some(e => "chatgpt-hosted-widget" === e.type && (0, aC.f)(e) && g.has((0, aC.e)(m, e.messageId))) && v.push(e.turnKey);
            let C = c.findLast(aj);
            h?.voiceAutoScrollEnabled && null != C && v.push(C.turnKey);
            let _ = (0, p.x)(av.a, l);
            if (null != _) {
                let e;
                i[2] !== _ ? (e = e => e.turn.items.flatMap(aT).some(e => "user-message" === e.type && e.messageId === _), i[2] = _, i[3] = e) : e = i[3];
                let t = c.find(e);
                null != t && v.push(t.turnKey)
            }
            let w = (0, p.x)(ax.b, l);
            i[4] !== l || i[5] !== c || i[6] !== w ? (n = (0, ab.a)(c, w, l), i[4] = l, i[5] = c, i[6] = w, i[7] = n) : n = i[7];
            let T = h?.getHeightPx,
                j = h?.voiceAutoScrollEnabled ? C?.turnKey : void 0,
                S = h?.onTurnLayoutReady;
            return i[8] !== h ? (r = e => {
                let {
                    heightDeltaPx: t
                } = e;
                h?.consumeGrowth(t ?? 0)
            }, i[8] = h, i[9] = r) : r = i[9], i[10] !== d || i[11] !== u || i[12] !== v || i[13] !== n || i[14] !== T || i[15] !== j || i[16] !== S || i[17] !== r ? (o = (0, a.jsx)(n7.a, {
                entries: n,
                getBottomScrollPaddingPx: T,
                layoutReadyTurnKey: j,
                onTurnLayoutReady: S,
                onLatestTurnHeightChange: r,
                onApiChange: d,
                onVisibleContentReady: u,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: v,
                RowComponent: ar
            }), i[10] = d, i[11] = u, i[12] = v, i[13] = n, i[14] = T, i[15] = j, i[16] = S, i[17] = r, i[18] = o) : o = i[18], o
        }

        function aT(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function aj(e) {
            let {
                turn: t
            } = e;
            return t.items.some(aS)
        }

        function aS(e) {
            return "user-message" === e.type
        }

        function aE(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var aA = n("XAP6"),
            aP = n("bzoy"),
            aM = n("LYS1"),
            aR = n("aZoZ"),
            ak = n("Gv8v"),
            aO = n("EGpF"),
            aN = n("mTPq"),
            aG = n("Vcrm"),
            aF = n("MxKj");
        let az = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(B.Y, e);
            if (!(0, B.xb)(a)) return !0;
            let s = n(B.K, e),
                r = n(B.A, e);
            if (null == s || null == r) return !1;
            let o = s[r]?.message;
            if (null == o || aM.a.has(o.author.role)) return !1;
            let i = n(B.x, e),
                l = (0, aN.c)({
                    mapping: s,
                    current_node: r
                }, n(B.O, e)),
                c = n(B.$, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(B.j, e) && !(0, aP.e)(n(B.o, e)) && null != c && !n(aA.b).has(c) && null != aB(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });
        async function aL(e, t) {
            let {
                conversationId: n,
                isTemporaryChat: a = !1,
                messageId: s,
                prompt: r,
                renderFormat: o,
                inlineSystemHints: i
            } = t;
            if (e.get(nb.h, n)) throw new ak.a("edit_message_busy", "The chat is busy.");
            let l = e.get(B.x, n);
            if ("tpp" === l) throw new ak.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
            if (!e.get(az, n)) throw new ak.a("edit_message_busy", "The chat is busy.");
            let c = e.get(aR.b, {
                conversationId: n,
                messageId: s
            });
            if (null == c) throw new ak.a("edit_message_target_unavailable", "The user message could not be edited.");
            let {
                selectedModel: d
            } = c, u = r.trim(), h = (0, aR.c)(c.message, e.get, i), p = (0, aF.c)({
                message: c.message,
                prompt: u,
                renderFormat: o,
                systemHints: h,
                inlineSystemHints: i
            }), m = (0, v.f)(p.message.metadata), g = p.message.content, f = "multimodal_text" === g.content_type && g.parts.some(e => "string" != typeof e);
            if (0 === u.length && 0 === m.length && !f) throw new ak.a("edit_message_empty", "The edited message cannot be empty.");
            if (e.get(tj.c, "3574573347")) {
                let t = e.get(aR.a, n);
                t?.messageId === s && t.prompt === r && am()((0, aR.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(aR.a, n, {
                    messageId: s,
                    prompt: r,
                    isTemporaryChat: a,
                    inlineSystemHints: i
                }), (0, nL.f)(e, n, {
                    isTemporaryChat: a
                }))
            }
            let y = aB(e.get, n),
                b = y.request.current,
                x = () => aB(e.get, n).request.current === b && am()(e.get(aR.b, {
                    conversationId: n,
                    messageId: s
                }), c) && !(0, B.xb)(e.get(B.Y, n));
            e.set(nb.h, n, !0);
            try {
                if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(aG.a, n) && (await b.stop(), await b.closed), !x()) throw new ak.a("edit_message_target_unavailable", "The edited message or active response changed.");
                await (0, aF.submitChatGPTCompletion)(e, {
                    isSubmissionCurrent: x,
                    isRequestCurrent: () => e.get(B.A, n) === p.message.id,
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
                e.set(nb.h, n, !1)
            }
        }

        function aB(e, t) {
            let n = e(aO.a, t),
                a = e(B.j, t);
            return null == n.request.current && null != a ? e(aO.a, a) : n
        }
        var aD = n("xtkq"),
            aH = n("PG5R"),
            aW = n("aEnb"),
            aU = n("iLYI"),
            aK = n("wVX4");

        function aq(e) {
            let t, n, r, o, i = (0, s.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, p.y)(eo.a),
                d = (0, C.a)(),
                u = (0, tO.a)(),
                h = (0, p.x)(B.Y, l),
                m = (0, p.x)(B.$, l),
                g = (0, p.x)(B.v, l),
                f = (0, p.x)(B._, l),
                v = (0, b.useRef)(null),
                y = (0, b.useRef)(null);
            i[0] !== g || i[1] !== l || i[2] !== d || i[3] !== m || i[4] !== c || i[5] !== h || i[6] !== f ? (t = () => {
                let e = v.current;
                if (null == e) return;
                let t = y.current;
                if ((0, B.xb)(h)) {
                    e.textContent = "", y.current = {
                        conversationId: l,
                        requestId: m ?? ("active-async-turn" === h || "active-tpp-turn" === h ? g?.requestId : null) ?? (t?.conversationId === l ? t.requestId : null)
                    };
                    return
                }
                f || (y.current = null, t?.conversationId === l && "idle" === h && g?.result === "completed" && g.requestId === t.requestId && null == c.get(B.B, l) && (e.textContent = d.formatMessage({
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
            aQ = n("q542"),
            a$ = n("pDUk"),
            aZ = n("GaCK"),
            aJ = n("Dofq");
        let aX = (0, eD.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(33944)]).then(n.bind(n, "p8Fu"))).ChatGptThreadSummaryPanelBody, {
            fallback: (0, a.jsx)(aQ.a.Content, {
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
            errorFallback: (0, a.jsx)(aQ.a.Content, {
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
            let i = (0, aQ.b)(),
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
            }, i), o[3] = l, o[4] = i, o[5] = f, o[6] = c, o[7] = u, o[8] = m, o[9] = n) : n = o[9], o[10] !== d.shouldHideInlineImmediately || o[11] !== d.shouldShow || o[12] !== t || o[13] !== n ? (r = (0, a.jsx)(aQ.a.Root, {
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
                w = (0, p.z)(null == h ? tQ.N : null);
            l[0] !== h?.isOpen || l[1] !== w ? (t = h?.isOpen ?? (0, tQ.z)(w, !0), l[0] = h?.isOpen, l[1] = w, l[2] = t) : t = l[2];
            let T = t,
                j = (0, p.z)(aZ.b),
                S = h?.isOpen ?? j.isPopoverOpen,
                E = (0, p.x)(aY.f, "togglePinnedSummary");
            (0, tR.b)(y), l[3] !== h || l[4] !== y ? (n = () => {
                null != h ? h.onOpenChange(!h.isOpen) : (0, aJ.b)(y)
            }, l[3] = h, l[4] = y, l[5] = n) : n = l[5];
            let P = n;
            (0, nh.a)("togglePinnedSummary", P);
            let M = c ? "browser:rounded-lg browser:bg-surface" : void 0;
            return l[6] !== u || l[7] !== x || l[8] !== h || l[9] !== d || l[10] !== _ || l[11] !== T || l[12] !== S || l[13] !== I || l[14] !== j.displayMode || l[15] !== m || l[16] !== y || l[17] !== E || l[18] !== g || l[19] !== v || l[20] !== P ? (r = "overlay" === j.displayMode ? (0, a.jsx)(a$.a, {
                isOpen: S,
                shouldPreventAutoFocus: h?.shouldPreventAutoFocus,
                onOpenChange: e => {
                    null != h ? h.onOpenChange(e) : y.set(aZ.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                        ...t,
                        isPopoverOpen: e
                    })
                },
                trigger: (0, a.jsx)(aQ.a.HeaderButton, {
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
                    children: (0, a.jsx)(aQ.a.PopoverContent, {
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
            }) : (0, a.jsx)(aQ.a.HeaderButton, {
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
            }), l[6] = u, l[7] = x, l[8] = h, l[9] = d, l[10] = _, l[11] = T, l[12] = S, l[13] = I, l[14] = j.displayMode, l[15] = m, l[16] = y, l[17] = E, l[18] = g, l[19] = v, l[20] = P, l[21] = r) : r = l[21], l[22] !== M || l[23] !== r ? (o = (0, a.jsx)("div", {
                className: M,
                children: r
            }), l[22] = M, l[23] = r, l[24] = o) : o = l[24], l[25] !== c || l[26] !== o ? (i = (0, a.jsx)(A.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                allowsThreadContentOverlap: c,
                order: 250,
                children: o
            }), l[25] = c, l[26] = o, l[27] = i) : i = l[27], i
        }
        var a3 = n("JjRy"),
            a4 = n.n(a3),
            a5 = n("G4E3"),
            a6 = n("KaH3"),
            a7 = n("Yz3b"),
            a8 = n("ghNX"),
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
            sA = n("MRlq"),
            sP = n("fQbA"),
            sM = n("dDDU"),
            sR = n("soaw"),
            sk = n("ZrYB"),
            sO = n("X6Vn"),
            sN = n("Kwur");
        async function sG(e, t) {
            let a = await sN.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                parameters: {
                    path: {
                        conversation_id: t
                    }
                }
            }).catch(() => null);
            return a?.can_share && 0 !== a.av_sessions.length ? [{
                id: "share-live-session",
                icon: nX.Ri,
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
                        (0, sO.f)(e, s, {
                            conversationId: t,
                            sessions: a.av_sessions
                        })
                    })
                }
            }] : []
        }
        var sF = n("MYlA"),
            sz = n("sfmI"),
            sL = n("JCtZ"),
            sB = n("g2p6"),
            sD = n("oaTv"),
            sH = n("PME0"),
            sW = n("lgcP"),
            sU = n("AcSY"),
            sK = n("w7E5"),
            sq = n("QmkR"),
            sV = n("xEXG"),
            sY = n("J6LI"),
            sQ = n("lUUH"),
            s$ = n("ftAl");

        function sZ(e) {
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
                    t = (0, ac.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : g.query.getData(eR.b, t);
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
                    } = e, c = (0, ac.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(sK.a), u = t.get(sq.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, m = (a?.conversation_origin === "tpp" || a?.conversation_origin === "flora") && ("allowed" === o || h?.pages.some(e => null != e.cursor) === !0), g = t.get(sq.h, n);
                    return null == r || null == a || t.get(sq.g, n) || (0, sY.c)(a, s).sourceUnavailable || null == (0, sY.b)(t, a, g, !1) || null != c && null == s || null == h || 0 === p && !m ? [] : [...null == s ? [] : [{
                        id: "current-project-name",
                        message: s1.projectName,
                        messageValues: {
                            projectName: s.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, sQ.b)({
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
                    let e = g.get(nB.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await g.query.getOrFetch(nB.chatGptConversationQueryById$, l).catch(s0), null == g.query.getData(nB.chatGptConversationQueryById$, l) && await g.query.getOrFetch(sq.j, [l]).catch(sX)
                })(), h?.()]);
                let e = g.get(s$.a, l, {
                    enabled: !1
                });
                (0, ac.a)(e?.gizmo_id) && e?.gizmo_id != null && await g.query.getOrFetch(eR.b, e.gizmo_id).catch(sJ)
            }, o[8] = l, o[9] = h, o[10] = g, o[11] = n) : n = o[11], o[12] !== i || o[13] !== m || o[14] !== t || o[15] !== n ? (r = (0, a.jsx)(sS.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                onOpenChange: m,
                renderItem: sP.b,
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
                    conversationId: A,
                    title: P,
                    isHandoffPending: M,
                    isArchived: R,
                    isChatConversation: k,
                    onHandoff: O,
                    onOpenMessage: G,
                    projectId: F,
                    projectName: L,
                    serverConversationId: B
                } = e,
                H = (0, p.y)(D.a),
                W = (0, p.y)(eo.a),
                U = (0, sR.a)(),
                K = (0, tT.k)();
            j[0] !== K ? (t = K.checkGate("224248639"), j[0] = K, j[1] = t) : t = j[1];
            let q = t;
            j[2] !== K ? (n = K.getLayer("3017902351").get("web_file_library_enabled", !1), j[2] = K, j[3] = n) : n = j[3];
            let V = n,
                Y = q || V;
            j[4] !== Y ? (r = {
                enabled: Y
            }, j[4] = Y, j[5] = r) : r = j[5];
            let {
                data: Q
            } = (0, p.z)(sB.p, r), $ = Y && Q?.fileLibraryEnabledForRegistrationCountry !== !1, Z = (0, C.a)(), J = (0, I.Z)(), [X, ee] = (0, b.useState)(null), [et, en] = (0, b.useState)(!1), ea = (0, b.useRef)(null), es = (0, b.useRef)(null);
            j[6] === Symbol.for("react.memo_cache_sentinel") ? (o = [], j[6] = o) : o = j[6];
            let ei = (0, b.useRef)(o);
            j[7] === Symbol.for("react.memo_cache_sentinel") ? (i = {
                name: "chatgpt"
            }, j[7] = i) : i = j[7];
            let {
                isCapable: el
            } = (0, p.x)(z.a, i), ec = (0, p.x)(sq.g, B);
            j[8] === Symbol.for("react.memo_cache_sentinel") ? (l = () => ee("shortcut"), j[8] = l) : l = j[8];
            let ed = k && !ec;
            j[9] !== H || j[10] !== B ? (c = () => (0, sz.a)(H.query.getData(nB.chatGptConversationQueryById$, B), H.get(N.g), H.get(N.f)), j[9] = H, j[10] = B, j[11] = c) : c = j[11], j[12] !== ed || j[13] !== c ? (d = {
                enabled: ed,
                isActive: c
            }, j[12] = ed, j[13] = c, j[14] = d) : d = j[14], (0, nh.a)("deleteChat", l, d), j[15] !== W || j[16] !== ec || j[17] !== J || j[18] !== H || j[19] !== B ? (u = () => {
                !ec && (0, sz.a)(H.query.getData(nB.chatGptConversationQueryById$, B), H.get(N.g), H.get(N.f)) && (ee(null), (0, sW.a)(W, B), J("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, j[15] = W, j[16] = ec, j[17] = J, j[18] = H, j[19] = B, j[20] = u) : u = j[20];
            let eu = u;
            j[21] !== Z ? (h = Z.formatMessage(s6.more), j[21] = Z, j[22] = h) : h = j[22];
            let eh = h;
            j[23] !== H || j[24] !== B ? (m = async () => {
                let e = [];
                ei.current = e, e.push(...await sG(H, B))
            }, j[23] = H, j[24] = B, j[25] = m) : m = j[25];
            let ep = m;
            j[26] !== A || j[27] !== E || j[28] !== $ || j[29] !== Z || j[30] !== ec || j[31] !== R || j[32] !== M || j[33] !== U || j[34] !== J || j[35] !== O || j[36] !== G || j[37] !== F || j[38] !== L || j[39] !== H || j[40] !== B || j[41] !== K || j[42] !== P ? (g = e => {
                let t = H.get(N.e),
                    n = H.get(N.j),
                    a = (0, sz.a)(H.query.getData(nB.chatGptConversationQueryById$, B), H.get(N.g), H.get(N.f)),
                    s = (0, nm.b)(H, B),
                    r = !ec && (0, sz.a)(s, H.get(N.g), H.get(N.f)),
                    o = H.get(S.a).pathname,
                    i = () => U() && o === H.get(S.a).pathname && t === H.get(N.e) && n === H.get(N.j),
                    l = (0, sD.a)(H, A, E, () => (0, sH.a)(J)),
                    c = [];
                return K.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && c.push({
                    id: "chatgpt-audio-summary",
                    message: (0, sj.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary",
                        description: "Opens the dialog for generating and listening to an audio summary of the current chat"
                    }),
                    icon: nX.jg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        sw().then(e => {
                            i() && e(H, B)
                        }).catch(() => {
                            i() && (ea.current?.focus({
                                preventScroll: !0
                            }), H.get(er.f).danger(Z.formatMessage({
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
                                conversationId: A,
                                serverConversationId: B,
                                onOpenMessage: G
                            })
                        }).catch(() => {
                            i() && H.get(er.f).danger(Z.formatMessage({
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
                    organizationItems: (0, sP.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: ei.current,
                    viewItems: c,
                    preferenceItems: null == l ? [] : [l],
                    surface: "header",
                    conversationId: B,
                    stateConversationId: A,
                    conversationOrigin: E,
                    title: P,
                    isHandoffPending: M,
                    canHandoff: null != O,
                    onHandoff: O,
                    projectId: F,
                    projectName: L,
                    onRename: !a || ec || R ? void 0 : () => (0, nm.c)(H, A),
                    isPinned: H.get(sq.h, B) ?? s?.is_starred === !0,
                    onTogglePin: r ? () => {
                        let e = (0, nm.b)(H, B);
                        !(null == e || H.get(sq.g, B)) && (0, sz.a)(e, H.get(N.g), H.get(N.f)) && (0, sq.V)({
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
                    onArchive: !a || ec || R ? void 0 : () => (0, sk.a)(H, B),
                    onUnarchive: a && !ec && R ? () => {
                        (0, sq.W)({
                            scope: H,
                            conversationId: B
                        }).then(() => {
                            H.get(er.f).success(Z.formatMessage(sA.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            H.get(er.f).danger(Z.formatMessage(ng.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !a || ec ? void 0 : () => ee("menu")
                })
            }, j[26] = A, j[27] = E, j[28] = $, j[29] = Z, j[30] = ec, j[31] = R, j[32] = M, j[33] = U, j[34] = J, j[35] = O, j[36] = G, j[37] = F, j[38] = L, j[39] = H, j[40] = B, j[41] = K, j[42] = P, j[43] = g) : g = j[43];
            let em = g;
            j[44] !== eh ? (f = (0, a.jsx)(sE.a, {
                ref: ea,
                className: "no-drag",
                color: "primary",
                label: eh,
                size: "toolbar"
            }), j[44] = eh, j[45] = f) : f = j[45], j[46] !== et || j[47] !== eh || j[48] !== f ? (v = (0, a.jsx)(n0.a, {
                cloneCustomTrigger: !0,
                tooltipContent: eh,
                triggerPopupOpen: et,
                children: f
            }), j[46] = et, j[47] = eh, j[48] = f, j[49] = v) : v = j[49];
            let eg = v;
            j[50] !== em || j[51] !== eg || j[52] !== J || j[53] !== el || j[54] !== ep || j[55] !== B ? (y = el ? (0, a.jsx)(sZ, {
                conversationId: B,
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
                renderItem: sP.b,
                trigger: "click",
                children: eg
            }), j[50] = em, j[51] = eg, j[52] = J, j[53] = el, j[54] = ep, j[55] = B, j[56] = y) : y = j[56];
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
            }, j[59] = _) : _ = j[59], j[60] !== eu || j[61] !== ec || j[62] !== ef || j[63] !== ev || j[64] !== x || j[65] !== P ? (w = (0, a.jsx)(sF.a, {
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

        function s3() {}

        function s4() {
            let e, t, n, r = (0, s.c)(8),
                o = (0, C.a)(),
                [i, l] = (0, b.useState)(!1);
            r[0] !== o ? (e = o.formatMessage(s6.more), r[0] = o, r[1] = e) : e = r[1];
            let c = e;
            return r[2] !== c ? (t = (0, a.jsx)(sE.a, {
                className: "no-drag",
                color: "primary",
                label: c,
                size: "toolbar"
            }), r[2] = c, r[3] = t) : t = r[3], r[4] !== i || r[5] !== c || r[6] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(sS.a, {
                    preserveBrowserContextMenu: !0,
                    getItems: s5,
                    onOpenChange: l,
                    renderItem: sP.b,
                    trigger: "click",
                    children: (0, a.jsx)(n0.a, {
                        cloneCustomTrigger: !0,
                        tooltipContent: c,
                        triggerPopupOpen: i,
                        children: t
                    })
                })
            }), r[4] = i, r[5] = c, r[6] = t, r[7] = n) : n = r[7], n
        }

        function s5() {
            return (0, sP.a)([])
        }
        let s6 = (0, sj.f)({
            more: {
                id: "chatgpt.conversation.header.control.more.label",
                defaultMessage: "More",
                description: "Short tooltip and accessible label for the icon-only overflow control in the active ChatGPT conversation header. It opens additional actions for the current chat. Sibling header controls include Share. Keep this single word concise and do not add punctuation. No placeholders."
            }
        });
        var s7 = n("DcfK"),
            s8 = n("WLgA");

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
                    to: (0, s8.c)(c.gizmo.id),
                    children: (0, a.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-1.5",
                        children: [(0, a.jsx)(tm.a, {
                            className: "size-5",
                            color: c.gizmo.display.theme,
                            defaultColor: "secondary",
                            fallbackIcon: (0, a.jsx)(nX.ud, {}),
                            icon: c.gizmo.display.emoji,
                            sharedIcon: "shared" === (0, aK.b)(c) ? (0, a.jsx)(s7.a, {}) : void 0
                        }), (0, a.jsx)("span", {
                            className: "min-w-0 truncate text-default",
                            children: c.gizmo.display.name
                        })]
                    })
                })
            }) : null, o[3] = u, o[4] = c, o[5] = n) : n = o[5], o[6] !== t || o[7] !== m || o[8] !== n ? (r = (0, a.jsx)(A.a.HeaderToolbar, {
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
                } = (0, P.g)(),
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
            let R = d;
            if (null == v) return R;
            if (_?.isVisible && "full" === _.mode) {
                let e, t, n;
                return m[18] !== f ? (e = null == f ? null : (0, a.jsx)("div", {
                    className: "flex max-w-[20vw] min-w-0",
                    children: f
                }), m[18] = f, m[19] = e) : e = m[19], m[20] !== v ? (t = (0, a.jsx)("div", {
                    className: "max-w-[30vw] min-w-0",
                    children: v
                }), m[20] = v, m[21] = t) : t = m[21], m[22] !== t || m[23] !== e ? (n = (0, a.jsx)(A.a.HeaderAction, {
                    actionId: "sectioned-conversation-navigation",
                    align: "center",
                    children: (0, a.jsxs)("div", {
                        className: "flex max-w-[30vw] min-w-0 items-center gap-toolbar-action",
                        children: [e, t]
                    })
                }), m[22] = t, m[23] = e, m[24] = n) : n = m[24], n
            }
            return m[25] !== R ? (u = (0, a.jsx)("div", {
                className: "absolute inset-y-0 end-full me-toolbar-action flex w-[max(0px,calc((100cqw-100%)/2-var(--spacing-toolbar-action)-var(--spacing)*2-var(--learning-header-left-inset)))] min-w-0 items-center overflow-hidden",
                "data-app-shell-header-obstacle": !0,
                children: R
            }), m[25] = R, m[26] = u) : u = m[26], m[27] !== v || m[28] !== M || m[29] !== u ? (h = (0, a.jsx)(A.a.HeaderAction, {
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
                defaultText: h.get(nb.s, d),
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
                m = (0, p.x)(B.j, u),
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
                        let e = h.get(B.K, u),
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
                [o] = (0, b.useState)(rA);
            return n[0] !== o || n[1] !== r ? (t = (0, a.jsx)(eT.a, {
                value: o,
                children: r
            }), n[0] = o, n[1] = r, n[2] = t) : t = n[2], t
        }

        function rA() {
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

        function rP(e) {
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
            rR = n("K45w"),
            rk = n("jCHb"),
            rO = n("V8uZ");

        function rN(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var rG = n("NqfB"),
            rF = n("JEFL"),
            rz = n("moBM");
        let rL = '[data-markdown-text-style="assistant-message"]',
            rB = (0, p.d)(eo.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: s
                } = t;
                return null == a ? null : s(B.K, n)?.[a]?.message ?? null
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
                I = (0, p.x)(B.x, h);
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
            let S = (0, p.x)(rB, o),
                E = (0, p.x)(B.j, h),
                A = b && m && null != E && null != T && S?.author.role === "assistant";
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
            } : void 0, u[10] = w, u[11] = v, u[12] = i) : i = u[12], u[13] !== A || u[14] !== x || u[15] !== g || u[16] !== f.selectionRange || u[17] !== T ? (l = !A || x ? e => {
                g(e, T?.messageId, null == T ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let s of nO(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, s)) break;
                        a++
                    }
                    return a
                }(T.markdownElement, f.selectionRange, e))
            } : void 0, u[13] = A, u[14] = x, u[15] = g, u[16] = f.selectionRange, u[17] = T, u[18] = l) : l = u[18], u[19] !== A || u[20] !== h || u[21] !== y || u[22] !== v || u[23] !== T ? (c = A ? e => {
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
                        shouldBlockExternalEgress: v.get(ns.d, h),
                        sourceConversationId: h
                    })
                })
            } : void 0, u[19] = A, u[20] = h, u[21] = y, u[22] = v, u[23] = T, u[24] = c) : c = u[24], u[25] !== f.selectedText || u[26] !== i || u[27] !== l || u[28] !== c ? (d = (0, a.jsx)(rF.a, {
                conversationTerminology: "chat",
                selectedText: f.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), u[25] = f.selectedText, u[26] = i, u[27] = l, u[28] = c, u[29] = d) : d = u[29], d
        }
        var rW = n("wqmp");

        function rU(e) {
            let t, n, a, r = (0, s.c)(7),
                {
                    sharedConversationId: o
                } = e,
                i = (0, p.y)(eo.a),
                l = null != o;
            r[0] !== i || r[1] !== o ? (t = () => {
                null != o && (sN.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: o
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(rK), (0, ed.a)(i, rW.a, {
                    sharedConversationId: o
                }))
            }, r[0] = i, r[1] = o, r[2] = t) : t = r[2];
            let c = (0, b.useEffectEvent)(t);
            return r[3] !== c ? (n = () => {
                c()
            }, r[3] = c, r[4] = n) : n = r[4], r[5] !== l ? (a = [l], r[5] = l, r[6] = a) : a = r[6], (0, b.useEffect)(n, a), null
        }

        function rK() {}
        var rq = n("GigQ"),
            rV = n("JKdL"),
            rY = n("gsAl"),
            rQ = n("HOLv"),
            r$ = n("FGv0"),
            rZ = n("r9i9"),
            rJ = n("vlt6"),
            rX = n("SEBt"),
            r0 = n("uQqo"),
            r1 = n("VMtI");

        function r2(e) {
            let t, n, r, o, i, l = (0, s.c)(12),
                {
                    data: c
                } = e,
                d = (0, p.y)(eo.a),
                u = (0, C.a)();
            l[0] !== u ? (t = u.formatMessage(ng.a.headerShare), l[0] = u, l[1] = t) : t = l[1];
            let h = t,
                [m, g] = (0, b.useState)(!1);
            return l[2] !== c || l[3] !== m || l[4] !== d ? (n = () => {
                m || (g(!0), r3(d, c).finally(() => g(!1)))
            }, l[2] = c, l[3] = m, l[4] = d, l[5] = n) : n = l[5], l[6] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, a.jsx)(rQ.a, {
                asset: r1.a
            }), o = (0, a.jsx)(_.a, {
                ...ng.a.headerShare
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
                } else(0, sO.f)(e, rJ.a, {
                    ...t.dialogProps,
                    recoveryShareLink: o,
                    shareSessionId: r
                });
                return
            }(0, sO.f)(e, rJ.a, {
                ...t.dialogProps,
                image: s?.src == null ? void 0 : {
                    alt: t.dialogProps.title ?? "",
                    item: s,
                    previewSrc: s.src
                },
                previewTurns: null != s ? void 0 : (0, rZ.i)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId),
                privacyNotices: (0, rZ.j)({
                    conversation: t.conversation,
                    projectId: null
                }),
                shareSessionId: r
            })
        }
        var r4 = n("JUxu");
        let r5 = (0, b.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function r6(e) {
            let t, n, r, o, i = (0, s.c)(8),
                {
                    sharedConversationId: l
                } = e,
                c = (0, p.y)(eo.a);
            if (null != (0, p.x)(rY.d, (0, b.useContext)(O.a))) {
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
                (0, sO.f)(c, r5, {
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
        var r7 = n("zbjM"),
            r8 = n("Xslx"),
            r9 = n("FoKl"),
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
            (0, nB.e)(e).catch(() => {
                t7.a.warning("Failed to acknowledge temporary chat save coachmark")
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
                [E, A] = (0, b.useState)(!1),
                [P, M] = (0, b.useState)(!1),
                [R, k] = (0, b.useState)(!1),
                O = (0, b.useRef)(!1),
                N = (0, p.z)(sB.p).data,
                G = (0, p.x)(B.j, y),
                F = (0, p.x)(B.U, y),
                z = (0, p.x)(B.G, y),
                L = (0, p.x)(nb.h, y);
            v[0] !== y || v[1] !== x ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (x.get(B.G, y) || x.get(nb.h, y) || t !== x.get(B.j, y) || n !== x.get(B.U, y)) throw Error("Cannot save an unavailable temporary chat message");
                    return sN.Request.safePost("/conversation/{conversation_id}/save", {
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
            } = (0, oe.a)(t), W = null != G && null != F && !z && !L && !H && !E;
            v[3] !== w ? (n = w.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat",
                description: "Tooltip and accessible label for the bookmark button in a temporary ChatGPT conversation. Opens a confirmation dialog to save it to regular history."
            }), v[3] = w, v[4] = n) : n = v[4];
            let U = n;
            v[5] !== N?.eligibleAnnouncements ? (r = N?.eligibleAnnouncements?.includes(sB.h), v[5] = N?.eligibleAnnouncements, v[6] = r) : r = v[6];
            let K = !0 === r,
                q = !R && (P || K && W);
            v[7] !== y || v[8] !== P || v[9] !== x || v[10] !== q ? (o = () => {
                if (!q || P || O.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || O.current || (O.current = !0, (0, ed.a)(x, r9.ub, {
                        personalizationMode: (0, ot.a)((0, on.k)(x, y))
                    }), M(!0), oi(x))
                }), () => {
                    e = !0
                }
            }, i = [y, P, x, q], v[7] = y, v[8] = P, v[9] = x, v[10] = q, v[11] = o, v[12] = i) : (o = v[11], i = v[12]), (0, b.useEffect)(o, i), v[13] !== x ? (l = () => {
                k(!0), O.current || (O.current = !0, oi(x))
            }, v[13] = x, v[14] = l) : l = v[14];
            let V = l;
            v[15] !== W || v[16] !== y || v[17] !== w || v[18] !== T || v[19] !== D || v[20] !== x || v[21] !== F || v[22] !== G ? (c = async function() {
                let e;
                if (!W || null == G || null == F) return;
                let t = (0, ot.a)((0, on.k)(x, y));
                (0, ed.a)(x, r9.vb, {
                    personalizationMode: t
                });
                try {
                    e = (await D({
                        sourceConversationId: G,
                        selectedLeafId: F
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
                A(!0), S(!1), (0, sq.H)(x), (0, sq.K)(x, G, "remove"), (0, sq.K)(x, e, "refresh"), T((0, ad.c)(e), {
                    replace: !0
                }), x.get(er.f).success(w.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history.",
                    description: "Success toast confirming that a formerly temporary ChatGPT conversation is now saved in regular history."
                })), sN.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: F
                    }
                }).then(oh).then(t => {
                    (0, B.Yb)({
                        scope: x,
                        conversationId: e,
                        title: t
                    }), x.query.setData(nB.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, sq.H)(x), (0, sq.K)(x, e, "refresh")
                }).catch(ou)
            }, v[15] = W, v[16] = y, v[17] = w, v[18] = T, v[19] = D, v[20] = x, v[21] = F, v[22] = G, v[23] = c) : c = v[23];
            let Y = c,
                Q = !W;
            v[24] !== y || v[25] !== x || v[26] !== q ? (d = () => {
                (0, ed.a)(x, r9.yb, {
                    personalizationMode: (0, ot.a)((0, on.k)(x, y)),
                    coachMarkVisible: q
                }), S(!0)
            }, v[24] = y, v[25] = x, v[26] = q, v[27] = d) : d = v[27], v[28] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(e5.b, {
                icon: {
                    16: nX.pb,
                    20: nX.qb
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
            let $ = h;
            return v[33] !== V || v[34] !== w || v[35] !== U || v[36] !== $ || v[37] !== q ? (m = q ? (0, a.jsx)(oa.a, {
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
            }) : (0, a.jsx)(n0.a, {
                tooltipContent: U,
                children: $
            }), v[33] = V, v[34] = w, v[35] = U, v[36] = $, v[37] = q, v[38] = m) : m = v[38], v[39] !== W || v[40] !== y || v[41] !== Y || v[42] !== j || v[43] !== H || v[44] !== x ? (g = j ? (0, a.jsx)(oo, {
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
            return nx.object({
                title: nx.string()
            }).parse(e).title
        }

        function op(e, t) {
            return e < 1 && t instanceof tL.a && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function om(e) {
            return nx.object({
                conversation_id: nx.string().min(1)
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
            return null != a && n(H.b, a).data?.automation.plan_type === "language_learning"
        });
        var oy = n("Nhfz"),
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
                let e = new Map(i.map(e => [(0, aC.e)(r, e.messageId), e]));
                return l.watch(t => {
                    let {
                        get: n
                    } = t, a = n(oC.b), s = n(N.j);
                    for (let t of n(ag.k).keys()) {
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
                            }) || (0, oI.b)(l, t, (0, aC.e)(r, h)), c || d) {
                            (0, ag.z)(l, t);
                            continue
                        }
                        let p = l.get(ag.k).get(t),
                            m = p?.content.mcpAppHostAdapter;
                        null != p && null != m && (m.isTombstone !== u && (0, ag.y)(l, {
                            mcpAppId: t,
                            hostedInThreadScrollLayout: p.hostedInThreadScrollLayout,
                            inlineFrameContainer: p.inlineFrameContainer,
                            ...p.content,
                            mcpAppHostAdapter: {
                                ...m,
                                isTombstone: u
                            }
                        }), u && null != p.sessionId && (0, ag.D)(l, p.sessionId, {
                            displayMode: "inline"
                        }))
                    }
                })
            }, n = [r, l, o, i], a[0] = r, a[1] = l, a[2] = o, a[3] = i, a[4] = t, a[5] = n) : (t = a[4], n = a[5]), (0, b.useLayoutEffect)(t, n), null
        }
        var oj = n("JVSG"),
            oS = n("Y0pQ"),
            oE = n("lMjI");
        let oA = (0, p.v)(eo.a, e => null);

        function oP() {
            let e, t, n, r, o, i, l, c, d, u, h, m = (0, s.c)(30),
                g = (0, I.ab)() ?? 0,
                {
                    conversationId: f
                } = (0, I.bb)(),
                {
                    search: v,
                    state: y
                } = (0, I.X)(),
                b = (0, p.x)(nn.a, f ?? null),
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
            m[4] !== v ? (t = (0, ad.e)(v), m[4] = v, m[5] = t) : t = m[5];
            let _ = t;
            m[6] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(T.a, {}), r = (0, a.jsx)(e0.a.Surface, {}), m[6] = n, m[7] = r) : (n = m[6], r = m[7]), m[8] !== x ? (o = null, m[8] = x, m[9] = o) : o = m[9], m[10] !== C || m[11] !== x || m[12] !== _ ? (i = _ || x ? null : (0, a.jsx)(nv, {
                conversationId: C
            }), m[10] = C, m[11] = x, m[12] = _, m[13] = i) : i = m[13];
            let w = `${C}:${_}`;
            m[14] === Symbol.for("react.memo_cache_sentinel") ? (l = void 0, m[14] = l) : l = m[14], m[15] !== C || m[16] !== x || m[17] !== _ || m[18] !== w || m[19] !== g ? (c = (0, a.jsx)(oR, {
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
            return m[25] !== j ? (u = j, m[25] = j, m[26] = u) : u = m[26], m[27] !== C || m[28] !== u ? (h = (0, a.jsx)(ah, {
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
                children: [t, (0, a.jsx)(oR, {
                    conversationId: i,
                    isTemporaryChat: !1,
                    sharedConversationId: o
                }, o)]
            }), r[4] = i, r[5] = o, r[6] = n) : n = r[6], n
        }

        function oR(e) {
            let t, n, i, l, c, d, u, x, _, T, R, k, z, L, H, W, U, K, q, V, Y, Q, $, Z, J, ea, es, eo, ei, el, ec, eu, eh, ep, em, eg, ef, ev, ey, eb, eC, e_, eI, ew, eT, ej, eS, eE, eA, eP, eG, eF, ez, eL, eB, eD, eH, eW, eU, eK, eq, eY, eJ, eX, e0, e1, e2, e3, e4, tt, tn, ta, ts, tr, tv, tb, tw, tP, tN, tz, nc, nu, nh, np, nm, ng, nf, nv, nx = (0, s.c)(641),
                {
                    conversationId: nC,
                    viewActivation: n_,
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
                    routePattern: nH,
                    composerLeadingContent: nU,
                    header: nK,
                    banner: nq,
                    onRetryMissingConversation: nV,
                    sharedProjectConversation: nY,
                    workspace: nQ
                } = e,
                n$ = void 0 === n_ ? 0 : n_,
                nZ = void 0 !== nI && nI,
                nJ = void 0 !== nw && nw,
                nX = (0, p.y)(D.a),
                n0 = (0, b.useContext)(O.a),
                n1 = (0, p.x)(rY.d, n0),
                n3 = (0, p.z)(F.a),
                n4 = void 0 !== nG && nG && n3 && null != n1 && (0, rY.b)(n1) && (n1.web_image_attachments?.length ?? 0) > 0;
            nx[0] !== n0 || nx[1] !== nC ? (t = {
                auth: n0,
                conversationId: nC
            }, nx[0] = n0, nx[1] = nC, nx[2] = t) : t = nx[2];
            let n7 = (0, p.x)(null != n0 && !n0.isLoading && null === n0.authMethod && rY.f, t),
                {
                    conversationId: n8
                } = (0, I.bb)();
            nx[3] !== nC || nx[4] !== nJ || nx[5] !== n8 || nx[6] !== nX || nx[7] !== nQ ? (n = () => (0, aV.e)(nJ || null != nQ || null == nX.get(B.j, nC) ? nC : n8 ?? ""), nx[3] = nC, nx[4] = nJ, nx[5] = n8, nx[6] = nX, nx[7] = nQ, nx[8] = n) : n = nx[8];
            let [n9, ae] = (0, b.useState)(n);
            nx[9] !== n9 || nx[10] !== nC ? (i = () => n9 ? nC : null, nx[9] = n9, nx[10] = nC, nx[11] = i) : i = nx[11];
            let [an] = (0, b.useState)(i), as = null != nN || null != n1 && !n4;
            nx[12] !== nC || nx[13] !== nZ || nx[14] !== nJ || nx[15] !== as || nx[16] !== nX ? (c = () => {
                if (!as && !nZ && !nJ) return function(e, t) {
                    let n = e.get(nn.a, t) ?? t,
                        a = e.get(et.b, t),
                        s = e.get(ni, n),
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
                        i = e.get(tQ.i),
                        l = o.observedTurn,
                        c = null;

                    function d(t) {
                        for (let n of t.toReversed())
                            if (!o.initialCreationMessageIds.has(n.messageId) && (0, t4.openSpacePageSidePanelTab)(e, n.pageId, {
                                    title: n.title
                                }).opened) {
                                o.openedCreatedPage = !0;
                                break
                            }
                    }
                    let u = e.watch(n => {
                        let {
                            get: a
                        } = n, s = a(B.Y, t), r = a(tQ.i), u = a(B._, t);
                        if ((0, B.xb)(s)) {
                            l = !1;
                            let e = a(et.b, t),
                                n = a(B.$, t),
                                s = !o.observedTurn || o.attemptId !== e;
                            if (o.attemptId = e, s) {
                                let e = c;
                                c = null, e?.abort(), o.observedTurn = !0, o.activeRequestId = n, o.dismissed = u, o.openedCreatedPage = !1
                            } else o.activeRequestId = n ?? o.activeRequestId, o.dismissed = o.dismissed || u || i && !r;
                            i = r;
                            let h = !u && !o.dismissed && !r && !o.openedCreatedPage && !a(D.h) && !a(B.B, t) && !a(ns.d, t),
                                p = [];
                            if ((s || h) && (p = a(B.N, t) ?? []), s) {
                                o.initialCreationMessageIds = new Set(p.map(e => e.messageId));
                                return
                            }
                            h && d(p);
                            return
                        }
                        if (!o.observedTurn) return;
                        let h = a(B.v, t);
                        if ("idle" !== s || u || null != h && "completed" !== h.result || null != e.get(B.B, t) || e.get(D.h) || e.get(ns.d, t)) {
                            o.observedTurn = !1;
                            return
                        }
                        if (l) {
                            if (o.dismissed || r || o.openedCreatedPage || a(et.b, t) !== o.attemptId) {
                                o.observedTurn = !1;
                                return
                            }
                            if (h?.result !== "completed") return;
                            d(a(B.N, t) ?? []), o.observedTurn = !o.openedCreatedPage;
                            return
                        }
                        if (o.observedTurn = !1, h?.result !== "completed" || h.requestId !== o.activeRequestId) return;
                        let p = e.get(B.K, t);
                        if (null == p) return;
                        let m = (0, g.b)({
                                mapping: p,
                                current_node: e.get(B.A, t)
                            }),
                            f = m.findLast(no.b);
                        if (f?.status !== "finished_successfully") return;
                        let v = [...(0, na.e)(m).outputs, ...m.flatMap(e => (0, na.c)(e).map(e => e.file))],
                            y = e.get(t9.a, t)?.at(-1);
                        if (y?.turn.status !== "complete") return;
                        let b = [...(0, tZ.a)(m), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, t$.a)(e, b, !o.dismissed) || !o.dismissed && !o.openedCreatedPage && (0, t5.a)(e, b)) && !o.dismissed && !r && !o.openedCreatedPage) {
                            for (let t of (0, t3.c)((0, g.d)(f)).toReversed())
                                if ((0, t4.openSpacePageSidePanelTab)(e, t.id, {
                                        blockId: t.blockId
                                    }).opened) return;
                            if ((0, nr.canOpenChatGptFilePreview)({
                                    browserPreview: !0
                                })) {
                                for (let n of y.turn.items)
                                    if ("assistant-message" === n.type && n.completed)
                                        for (let [a, s] of n.contentReferences.entries()) {
                                            let r = (0, ne.a)(s),
                                                o = null == r ? null : (0, tJ.a)(r),
                                                i = v.find(e => null != e.fileId && e.fileId === (s.file_id ?? s.id) || null != e.libraryFileId && e.libraryFileId === s.library_file_id);
                                            if ("file" !== s.type || !(0, tY.a)(s) || null == r || null == o || !(0, tJ.e)(o) || null == i && null == (0, nt.b)(s.sandbox_path) && !(0, nt.b)(s.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > t1.a) continue;
                                            let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                d = (0, t8.b)(s, {
                                                    fileName: r,
                                                    messageId: l
                                                });
                                            if (null == d) continue;
                                            if (e.get(tj.e)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let u = e.get(B.j, t) ?? t,
                                                h = `${l??"message"}:${String(a)}:${r}`,
                                                p = `chatgpt-file:${u}:${h}`,
                                                g = {
                                                    turnId: y.id,
                                                    inputMessageId: m.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: l ?? null
                                                },
                                                f = new AbortController,
                                                b = (0, nr.openChatGptFile)(e, {
                                                    conversationId: u,
                                                    fileName: r,
                                                    gizmoId: e.get(B.P, t),
                                                    sharedConversationId: e.get(B.W, t),
                                                    target: d,
                                                    tabKey: h,
                                                    browserPreview: !0,
                                                    isAccessBlocked: e => e.get(ns.d, t),
                                                    downloadFallback: !1,
                                                    openSource: "auto_open",
                                                    originatingTurn: g,
                                                    signal: f.signal,
                                                    onOpened: () => {
                                                        let t = e.get(M.j.activeTab$);
                                                        f.signal.aborted || t?.tabId !== p || t.tabType.kind !== tX.a || ((0, ed.a)(e, tV.CodexFileOpened, {
                                                            threadId: u,
                                                            turnId: g.turnId,
                                                            inputMessageId: g.inputMessageId ?? void 0,
                                                            messageId: g.messageId ?? void 0,
                                                            fileExtension: (0, t0.c)(r) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, ed.a)(e, tV.CodexWorkspaceFilePreviewAttempted, (0, t2.a)({
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
                                                (n(tQ.i) && n(M.j.activeTab$)?.tabId !== p || n(ns.d, t)) && f.abort()
                                            });
                                            b.catch(e => {
                                                f.signal.aborted || t7.a.debug("Automatic ChatGPT artifact preview could not open", {
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
                        u(), c?.abort(), null != o.attemptId && e.set(ni, n, {
                            ...o,
                            attemptId: o.attemptId
                        })
                    }
                }(nX, nC)
            }, l = [nC, nZ, nJ, as, nX], nx[12] = nC, nx[13] = nZ, nx[14] = nJ, nx[15] = as, nx[16] = nX, nx[17] = l, nx[18] = c) : (l = nx[17], c = nx[18]), (0, b.useEffect)(c, l);
            let ar = (0, p.x)(aG.a, nC),
                ao = as ? null : ar;
            nx[19] !== nN ? (d = () => null == nN ? null : (0, aV.b)(), nx[19] = nN, nx[20] = d) : d = nx[20];
            let [ai] = (0, b.useState)(d), al = ai ?? nC;
            nx[21] !== al ? (u = (0, tx.n)({
                routeKind: "chatgpt-thread",
                conversationId: al
            }), nx[21] = al, nx[22] = u) : u = nx[22];
            let au = null != (0, p.x)(ti.c, u);
            nx[23] !== al || nx[24] !== nF || nx[25] !== nX ? (x = () => {
                if (null != nF && 0 !== nF.length) return (0, r8.b)(nX, al, nF)
            }, _ = [al, nF, nX], nx[23] = al, nx[24] = nF, nx[25] = nX, nx[26] = x, nx[27] = _) : (x = nx[26], _ = nx[27]), (0, b.useEffect)(x, _);
            let ah = (0, b.useRef)(null),
                [ap, am] = (0, b.useState)(null),
                [ag, af] = (0, b.useState)(null),
                [av, ay] = (0, b.useState)(null),
                ab = ag?.activation === n$ ? ag.messageId : null,
                ax = av === n$,
                a_ = (0, b.useRef)(null);
            nx[28] === Symbol.for("react.memo_cache_sentinel") ? (T = () => {
                let e = new AbortController;
                return a_.current = e, () => e.abort()
            }, nx[28] = T) : T = nx[28], nx[29] !== n$ ? (R = [n$], nx[29] = n$, nx[30] = R) : R = nx[30], (0, b.useLayoutEffect)(T, R);
            let aI = (0, C.a)(),
                aw = (0, I.Z)(),
                aT = (0, tG.b)(),
                aj = (0, p.x)(B.j, nC);
            nx[31] !== nX ? (k = e => {
                (0, nl.c)(nX, e)
            }, nx[31] = nX, nx[32] = k) : k = nx[32];
            let aS = (0, b.useEffectEvent)(k);
            nx[33] !== aj || nx[34] !== aS ? (z = () => () => {
                null != aj && aS(aj)
            }, nx[33] = aj, nx[34] = aS, nx[35] = z) : z = nx[35], nx[36] !== aj ? (L = [aj], nx[36] = aj, nx[37] = L) : L = nx[37], (0, b.useEffect)(z, L);
            let aE = (0, p.x)(r7.b, nC),
                aA = (0, p.x)(B.K, nC),
                aP = (0, p.x)(nB.chatGptConversationQueryById$, as || nO && null != aA ? null : aj);
            (0, p.x)(as ? null : nW.a, aj);
            let aM = (0, p.x)(!n7 && !n4 && ns.d, nC),
                aR = aj ?? nC,
                ak = (0, p.x)(B.A, nC),
                aO = (0, p.x)(B.x, nC),
                aN = (0, p.x)(B.P, nC),
                aF = (0, p.x)(B.B, nC),
                aB = (0, p.x)(B.L, nC),
                aq = (0, p.x)(B.Y, nC),
                aY = (0, p.x)(B.T, nC),
                aQ = (0, p.x)(B.V, nC),
                a$ = (0, p.x)(n6.a, nC),
                aZ = (0, p.x)(B.C, nC),
                aJ = (0, p.x)(B.ab, nC),
                aX = (0, p.x)(B.bb, nC),
                a0 = (0, p.x)(nB.n, nN),
                a3 = (0, b.useRef)(null),
                so = a0.isSuccess && null != a0.data ? nN : null;
            nx[38] !== nX ? (H = e => {
                (0, ed.a)(nX, r.h, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, nx[38] = nX, nx[39] = H) : H = nx[39];
            let si = (0, b.useEffectEvent)(H);
            nx[40] !== so || nx[41] !== si ? (W = () => {
                null != so && a3.current !== so && (a3.current = so, si(so))
            }, nx[40] = so, nx[41] = si, nx[42] = W) : W = nx[42], nx[43] !== so ? (U = [so], nx[43] = so, nx[44] = U) : U = nx[44], (0, b.useEffect)(W, U);
            let sl = (0, p.x)(nb.o, nC),
                sc = (0, p.x)(nb.p, nC),
                sd = (0, p.x)(nb.m, nC),
                su = (0, p.x)(nb.q, nC),
                sh = (0, p.x)(nb.n, nC),
                sm = (0, p.x)(nb.h, nC),
                sg = (0, p.x)(B._, nC),
                sf = (0, p.x)(nb.y, nC);
            nx[45] !== aq ? (K = (0, B.xb)(aq), nx[45] = aq, nx[46] = K) : K = nx[46];
            let sb = K,
                sx = (0, p.x)(az, nC),
                s_ = (0, p.z)(G.t),
                sw = (0, p.z)(G.q),
                sT = (0, p.z)(G.s),
                sj = (0, p.z)(G.l),
                sS = (0, p.z)(G.m),
                sE = (0, p.z)(tu.pagesEnabled$);
            nx[47] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, to.a)(), nx[47] = q) : q = nx[47];
            let sA = (0, tT.h)(q);
            nx[48] === Symbol.for("react.memo_cache_sentinel") ? (V = (0, to.b)(), nx[48] = V) : V = nx[48];
            let sP = (0, tT.h)(V),
                sM = null != aA,
                sR = (0, p.z)(rI.f),
                sk = as ? a0 : aP;
            n9 && null != sk.data && ae(!1);
            let sO = n9 && sM && null == sk.data,
                sN = sk.isLoading || !sO && sk.isError;
            nx[49] !== ap || nx[50] !== al || nx[51] !== sN || nx[52] !== as || nx[53] !== nO || nx[54] !== nX ? (Y = (e, t, n, a) => {
                !(e || nX.get(ty.a)) && ((0, nb.b)(nX, al, t, void 0, n, a), ap?.focus(), as || sN || (0, nL.f)(nX, al, {
                    isTemporaryChat: nO
                }))
            }, nx[49] = ap, nx[50] = al, nx[51] = sN, nx[52] = as, nx[53] = nO, nx[54] = nX, nx[55] = Y) : Y = nx[55];
            let sG = Y,
                sF = null == n1 ? null : (0, rq.a)(n1, nC),
                sz = null == sF ? void 0 : (0, rd.a)(sF),
                sL = sF ?? sk.data,
                sB = aZ ? aJ : sL?.title,
                sD = (0, p.z)(N.g),
                sH = (0, p.z)(N.f),
                sW = "chatgpt-thread" === nX.value.routeKind && nX.value.workSideChat?.conversationId === nC,
                sU = sL?.conversation_origin ?? aO ?? (null != nQ || sW ? "tpp" : null),
                sK = "tpp" === sU,
                sV = sK && "denied" === s_.status && "go-plan" === s_.reason,
                sY = (0, p.z)(tE.d),
                sQ = (0, I.X)(),
                s$ = sQ.state;
            (0, p.z)(t_.b);
            let sZ = (0, p.x)(tj.c, "3901104270") && s$?.openGoalPlan === !0,
                sJ = (0, b.useContext)(P.c),
                sX = (0, tO.a)(),
                s0 = sJ?.hasPageSurface === !0,
                s1 = "tpp" === sU || "flora" === sU,
                s3 = (0, p.z)(!!s1 && G.u),
                s5 = void 0 !== nP && nP || s3,
                s6 = null == sY || sY.isFullWidth ? void 0 : sY.width ?? 420,
                s7 = !0 === (0, p.z)(s1 ? null : tD.d),
                rt = (0, p.z)(s1 ? tf.b : tf.a),
                rn = !s1 && rt,
                ra = !sP || sS && !s1,
                rr = !as && sS && !s1,
                ro = rr && sj,
                rp = as && sL?.is_read_only === !0 || nY?.is_read_only === !0;
            nx[56] !== nC || nx[57] !== as || nx[58] !== nX ? (Q = () => null, nx[56] = nC, nx[57] = as, nx[58] = nX, nx[59] = Q) : Q = nx[59];
            let [rm] = (0, b.useState)(Q), rg = sL?.gizmo_id ?? aN ?? rm?.gizmoId ?? null, rf = as || null == rg || (0, ac.a)(rg) ? null : rg, rv = (0, p.x)(oA, al), rb = (0, n2.d)({
                conversation: sL,
                conversationId: nC,
                conversationTitle: a$,
                pathname: sQ.pathname,
                sharedConversationId: nN,
                sharedPost: n1
            }), rC = !sT && null == sL && null == rm, rw = null != aj && !aM && !rC && (sT || sw), rT = null;
            as || (rT = null != sL ? (0, sq.B)(sL) : (0, ac.a)(aN) ? aN : rm?.projectId ?? null);
            let rj = (0, p.x)(tU.c, as ? null : nC),
                rS = as || s1 || null != rT || rj || null == rv ? rf : rv.id,
                rE = (0, p.x)(rh.d, {
                    gizmoId: rS,
                    conversationId: al,
                    visitKey: sQ.pathname
                }),
                rA = s0 || s1 || null != rT || null != rf || rj || nO,
                {
                    data: rR
                } = (0, o.a)({
                    enabled: null != rT,
                    queryFn: () => {
                        if (null == rT) throw Error("Expected a ChatGPT project id");
                        return (0, eR.c)(rT)
                    },
                    queryKey: (0, sq.E)(rT ?? ""),
                    staleTime: ex.b.ONE_MINUTE
                }),
                rk = null != rT && (rR?.gizmo.share_recipient !== "private" || (rR?.gizmo.sharing?.subjects?.length ?? 0) > 0),
                rO = sL?.context_scopes?.includes("HEALTH") === !0 || rR?.gizmo.gizmo_snorlax_type === "potion",
                rN = (0, ry.a)(sL?.context_scopes, {
                    projectType: rR?.gizmo.gizmo_snorlax_type,
                    projectId: rT,
                    lockedProjectId: sR?.projectId
                }),
                rG = aM || rk || rO || rN;
            nx[60] !== rR?.gizmo.display.name ? ($ = rR?.gizmo.display.name.trim() || null, nx[60] = rR?.gizmo.display.name, nx[61] = $) : $ = nx[61];
            let rF = $,
                rz = rR?.gizmo.display.theme,
                rL = rR?.gizmo.display.emoji;
            nx[62] !== rR ? (Z = "shared" === (0, aK.b)(rR) ? (0, a.jsx)(e5.b, {
                icon: {
                    assets: {
                        16: oS.a,
                        20: oE.a
                    }
                }
            }) : void 0, nx[62] = rR, nx[63] = Z) : Z = nx[63], nx[64] !== rz || nx[65] !== rL || nx[66] !== Z ? (J = (0, a.jsx)(tm.a, {
                className: "icon-leading",
                size: "leading",
                color: rz,
                icon: rL,
                sharedIcon: Z
            }), nx[64] = rz, nx[65] = rL, nx[66] = Z, nx[67] = J) : J = nx[67];
            let rB = J,
                rD = (0, p.x)(B.i, nC),
                rH = rD?.metadata ?? sL?.context_truncation_continuation,
                rW = as || nO || null != nY || null == sD || sL?.owner?.user_id == null || null == rT || sL.owner.user_id === (sH ? sD.split("__")[0] : sD) ? null : (0, s8.d)(rT, sL.conversation_id, sL.owner.user_id),
                rK = (0, p.x)(as || nZ || s5 ? null : rM.b, nC),
                rQ = rK?.isReviewing === !0,
                r$ = null == rK ? aA : rK.conversation.mapping,
                rZ = null == rK ? ak : rK.conversation.current_node,
                rJ = null == aA ? sL : null;
            nx[68] === Symbol.for("react.memo_cache_sentinel") ? (ea = (0, nD.a)(), nx[68] = ea) : ea = nx[68];
            let rX = ea;
            nx[69] === Symbol.for("react.memo_cache_sentinel") ? (es = new WeakMap, nx[69] = es) : es = nx[69];
            let r0 = es;
            nx[70] !== rt || nx[71] !== rn || nx[72] !== rH || nx[73] !== sU || nx[74] !== rZ || nx[75] !== r$ || nx[76] !== rJ || nx[77] !== nZ || nx[78] !== as || nx[79] !== sb || nx[80] !== s1 || nx[81] !== aB || nx[82] !== sd || nx[83] !== sh || nx[84] !== sl || nx[85] !== sc || nx[86] !== su || nx[87] !== rQ || nx[88] !== nX.get || nx[89] !== rK?.isEntering || nx[90] !== aE || nx[91] !== aq ? (eo = () => rX({
                conversation: rJ,
                contextContinuation: rH,
                clinicalSearchEnabled: rn,
                clinicalCitationsEnabled: rt,
                conversationOrigin: sU,
                enableImageGenerationLoadingState: !as && !nZ && !rQ && "error" !== aq,
                getRenderTelemetry: e => (0, ob.c)(nX.get, e),
                isStreaming: !as && !nZ && !rQ && sb,
                isWorkConversation: s1,
                mode: "conversation",
                mcpResponseCache: r0,
                moderationDisclaimersByMessageId: aB,
                streamingOrders: aE,
                pendingSubmission: null == sl || as || rQ || rK?.isEntering ? null : {
                    attachments: sd,
                    commentAttachments: sh,
                    prompt: sl,
                    renderMarkdown: sc,
                    selectedTextAttachments: su
                },
                threadCurrentNode: rZ,
                threadMapping: r$
            }), nx[70] = rt, nx[71] = rn, nx[72] = rH, nx[73] = sU, nx[74] = rZ, nx[75] = r$, nx[76] = rJ, nx[77] = nZ, nx[78] = as, nx[79] = sb, nx[80] = s1, nx[81] = aB, nx[82] = sd, nx[83] = sh, nx[84] = sl, nx[85] = sc, nx[86] = su, nx[87] = rQ, nx[88] = nX.get, nx[89] = rK?.isEntering, nx[90] = aE, nx[91] = aq, nx[92] = eo) : eo = nx[92], rK?.isEntering, nx[93] !== eo ? (ei = eo(), nx[93] = eo, nx[94] = ei) : ei = nx[94];
            let {
                isConversationEmpty: r1,
                renderedConversation: r3,
                renderedTurns: r4,
                showPendingLoadingMessage: r5
            } = ei;
            nx[95] !== nJ || nx[96] !== s1 || nx[97] !== r3 || nx[98] !== nX ? (el = () => {
                if (!nJ && s1) return nX.set(oj.b, r3), () => {
                    nX.get(oj.b) === r3 && nX.set(oj.b, null)
                }
            }, ec = [nJ, s1, r3, nX], nx[95] = nJ, nx[96] = s1, nx[97] = r3, nx[98] = nX, nx[99] = el, nx[100] = ec) : (el = nx[99], ec = nx[100]), (0, b.useEffect)(el, ec);
            let r6 = (0, p.x)(tK.g, nC),
                r9 = r5 && null == r6,
                oe = !s1 && !as && !nJ && !nZ,
                ot = (0, p.x)(rn || nJ || as ? null : ee.a, nC),
                on = (ot?.length ?? 0) > 0,
                oa = (0, p.x)(oe ? et.b : null, nC),
                os = JSON.stringify([nC, n$]),
                or = (0, p.x)(as || nJ ? null : ov, nC),
                [oo, oi] = (0, b.useState)(null),
                oc = function(e, t) {
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
                    let d = null == n ? [] : (0, g.b)(n, ek.g),
                        u = null == e || e.visitKey !== c,
                        h = d.find(ek.g)?.id ?? (u || i ? null : e.userMessageId),
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
                }(oo, {
                    completionAttemptId: oa,
                    allowAutoOpen: !(0, te.a)("(width < 768px)"),
                    suppressAutoOpen: (or ?? !1) || sZ,
                    conversation: oe && (sO || !sN) ? r3 : null,
                    isTurnActive: sb,
                    hasGoal: on,
                    isPendingUserTurn: sm && null != sl && !sb,
                    visitKey: os
                });
            oc !== oo && oi(oc);
            let od = null == nQ && !or && !rn && !nJ && !as && (sK || oe) && !nZ,
                ou = od && r3?.mapping === aA && r3?.current_node === ak,
                oh = (0, p.x)(ou ? B.p : null, nC);
            nx[101] !== oe || nx[102] !== sm || nx[103] !== od || nx[104] !== sb || nx[105] !== sE || nx[106] !== sd || nx[107] !== r3 || nx[108] !== r4 || nx[109] !== oh ? (eu = od ? h()(() => (function(e) {
                var t;
                let n, a, {
                        automationReferences: s,
                        includePages: r = !1,
                        includeSources: o = !0,
                        messages: i,
                        pendingAttachments: l = [],
                        turns: c,
                        isTurnActive: d = c.at(-1)?.turn.status === "in_progress"
                    } = e,
                    u = (0, na.e)(i),
                    h = [...u.inputs],
                    p = o ? (0, st.a)(i, c) : [],
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
                    of c) {
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
                            let e = (0, a8.b)(n);
                            if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                let t = (0, a5.d)(e.url);
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
                            for (let e of (0, t3.c)(n.content)) f.has(e.id) || f.set(e.id, {
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
                let _ = (0, a6.c)(c.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return sr(t.items).filter(e => "mcp-tool-call" === e.type)
                })).at(-1);
                return a = null == _ ? [...u.outputs, ...f.values(), ...m.values()] : [{
                    ..._,
                    key: `site:${_.projectId}`,
                    kind: "site"
                }, ...u.outputs.filter(e => null == _.archivePath || ! function(e, t) {
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
                    isPlanSummaryUpdating: d && i.slice(x + 1).some(e => "assistant" === e.author.role && a9.a.test(e.recipient ?? "") || "tool" === e.author.role && a9.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${c.at(-1)?.id??""}:${d}`,
                    sources: o ? [...Array.from(new Map(i.filter(e => "user" === e.author.role).flatMap(e => (0, a7.a)((0, g.d)(e))).map(e => [e.projectId, e])).values(), e => ({
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
                    subagents: (0, sa.a)(i, {
                        isTurnLive: c.at(-1)?.turn.status === "in_progress"
                    })?.subagents ?? []
                }
            })({
                automationReferences: oh,
                includePages: sE,
                includeSources: !oe,
                isTurnActive: sb || sm,
                messages: null == r3 ? [] : (0, g.a)(r3),
                pendingAttachments: sm ? sd : [],
                turns: r4
            })) : null, eh = oe ? eu?.() : null, nx[101] = oe, nx[102] = sm, nx[103] = od, nx[104] = sb, nx[105] = sE, nx[106] = sd, nx[107] = r3, nx[108] = r4, nx[109] = oh, nx[110] = eu, nx[111] = eh) : (eu = nx[110], eh = nx[111]);
            let op = eh,
                om = on || null != op && (op.outputs.length > 0 || op.progressSteps.length > 0 || op.automationIds.length > 0 || op.subagents.length > 0 || !aM && op.browserScreenshots.length > 0),
                og = od && (!oe || om),
                of = og && null == sY,
                oy = JSON.stringify([os, null != sY]),
                ox = oe ? oc.isOpen : void 0,
                oC = og && !sY?.isFullWidth;
            nx[112] !== s6 || nx[113] !== oy || nx[114] !== ox || nx[115] !== oC ? (ep = {
                contentShiftResetKey: oy,
                controlledIsOpen: ox,
                isEnabled: oC,
                floatingPanelWidth: s6
            }, nx[112] = s6, nx[113] = oy, nx[114] = ox, nx[115] = oC, nx[116] = ep) : ep = nx[116];
            let o_ = (0, tR.a)(ep),
                oI = aj ?? nC,
                ow = sK && null == aX,
                oP = aF ?? sf,
                oM = sk.isLoading && !sM,
                oR = sk.isError && !sO;
            nx[117] !== sk.error || nx[118] !== nJ ? (em = nJ || (0, tL.e)(sk.error) || !(sk.error instanceof tL.a && [401, 403, 404].includes([REDACTED_MAPBOX_ACCESS_TOKEN])), nx[117] = sk.error, nx[118] = nJ, nx[119] = em) : em = nx[119];
            let oB = em;
            nx[120] !== sk.error || nx[121] !== nC || nx[122] !== oR || nx[123] !== nJ || nx[124] !== nX || nx[125] !== nN ? (eg = () => {
                oR && !nJ && th.a.loadFailed(nX, nC, nN, sk.error)
            }, ef = [sk.error, nC, oR, nJ, nX, nN], nx[120] = sk.error, nx[121] = nC, nx[122] = oR, nx[123] = nJ, nx[124] = nX, nx[125] = nN, nx[126] = eg, nx[127] = ef) : (eg = nx[126], ef = nx[127]), (0, b.useEffect)(eg, ef), nx[128] !== nC || nx[129] !== as || nx[130] !== aj ? (ev = null, as || (ev = aj ?? ((0, aV.e)(nC) ? null : nC)), nx[128] = nC, nx[129] = as, nx[130] = aj, nx[131] = ev) : ev = nx[131], nx[132] !== ab || nx[133] !== sL || nx[134] !== sU || nx[135] !== aI || nx[136] !== nO || nx[137] !== s1 || nx[138] !== sV || nx[139] !== aw || nx[140] !== ev || nx[141] !== nH || nx[142] !== nX || nx[143] !== n$ ? (ey = (e, t) => {
                let n = void 0 !== t && t;
                if (null == ev || null != ab || sV) return;
                let a = a_.current?.signal;
                null == a || a.aborted || (af({
                    messageId: e,
                    activation: n$
                }), (0, B.h)(nX, {
                    conversationId: ev,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, tH.a)(nX, "opened"), aw(null == nH ? (0, ad.c)(t, {
                        isTemporaryChat: nO
                    }) : (0, I.C)(nH, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, tH.a)(nX, "failed"), af(null), nX.get(er.f).danger(aI.formatMessage({
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
                                surface: (0, at.b)(null == sU && null == sL ? null : s1),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, nx[132] = ab, nx[133] = sL, nx[134] = sU, nx[135] = aI, nx[136] = nO, nx[137] = s1, nx[138] = sV, nx[139] = aw, nx[140] = ev, nx[141] = nH, nx[142] = nX, nx[143] = n$, nx[144] = ey) : ey = nx[144];
            let oD = (0, tF.a)(ey);
            nx[145] !== sL || nx[146] !== nC || nx[147] !== sU || nx[148] !== aI || nx[149] !== s7 || nx[150] !== nO || nx[151] !== s1 || nx[152] !== nX || nx[153] !== aj ? (eb = async (e, t, n, a) => {
                if (!s7) try {
                    await aL(nX, {
                        conversationId: nC,
                        isTemporaryChat: nO,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, at.c)(t);
                    throw nX.get(er.f).danger(aI.formatMessage({
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
                            conversationId: aj ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, at.b)(null == sU && null == sL ? null : s1),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, nx[145] = sL, nx[146] = nC, nx[147] = sU, nx[148] = aI, nx[149] = s7, nx[150] = nO, nx[151] = s1, nx[152] = nX, nx[153] = aj, nx[154] = eb) : eb = nx[154];
            let oH = (0, tF.a)(eb);
            nx[155] !== al || nx[156] !== sL || nx[157] !== nC || nx[158] !== sU || nx[159] !== aI || nx[160] !== s7 || nx[161] !== nO || nx[162] !== s1 || nx[163] !== sV || nx[164] !== aw || nx[165] !== nV || nx[166] !== nX || nx[167] !== aj ? (eC = async (e, t) => {
                if (!s7 && !sV) try {
                    let n = nX.get(aa.d, nC);
                    if (n?.startsNewWorkConversation || null == nX.get(B.j, nC) || (0, tq.h)(nX.get(B.R, nC)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, g.d)(n.prompt),
                            s = (0, eM.i)(n.prompt.metadata, a, (0, v.e)(n.prompt.metadata), (0, y.w)(a)),
                            r = (0, eN.a)(n.prompt, a, s),
                            o = nX.get(nb.s, al),
                            i = "markdown" === r.renderFormat ? r.message : a,
                            l = o.length > 0 ? o : i,
                            c = o.length > 0 ? void 0 : r.renderFormat ?? "plain";
                        if (null != nV) return void await nV(l, c);
                        if (null == nX.get(B.j, nC) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, tg.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${nC}`;
                            (0, eQ.E)(t, (t, n) => n ? t : e) || (0, nb.Q)(nX, nC, e), (0, eQ.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, f.a)((0, g.o)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, y.w)(a);
                            (0, e$.m)(nX, "work"), await aw("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: o.length > 0 ? o : t,
                                    prefillPromptFormat: o.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (s1 && !nO && (0, eV.$)(nX, (0, e7.a)({
                                entrypoint: "home"
                            }))) return void await aw("/");
                        let d = (0, g.i)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, aU.f)(nX, d);
                        (0, nb.R)(nX, u, t.model);
                        let h = nX.get(B.P, nC);
                        (0, e$.m)(nX, s1 ? "work" : "chat"), await aw({
                            pathname: "/",
                            search: (0, ad.d)("", nO)
                        }, {
                            state: {
                                initialChatGptConversationId: u,
                                project: null,
                                chatGptProjectId: (0, ac.a)(h) ? h : null,
                                chatGptCustomGptId: (0, ac.a)(h) ? null : h,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: s1
                            }
                        });
                        return
                    }
                    await (0, aa.g)(nX, {
                        conversationId: nC,
                        isTemporaryChat: nO,
                        messageId: e,
                        retry: t
                    })
                } catch {
                    nX.get(er.f).danger(aI.formatMessage({
                        id: "chatgptConversations.regenerate.failed",
                        defaultMessage: "Failed to regenerate response",
                        description: "Error toast shown when generating another version of a ChatGPT response fails"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.regenerate.failed",
                            operation: "regenerate_response",
                            errorCategory: "conversation",
                            conversationId: aj ?? void 0,
                            userFacingError: {
                                surface: (0, at.b)(null == sU && null == sL ? null : s1),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, nx[155] = al, nx[156] = sL, nx[157] = nC, nx[158] = sU, nx[159] = aI, nx[160] = s7, nx[161] = nO, nx[162] = s1, nx[163] = sV, nx[164] = aw, nx[165] = nV, nx[166] = nX, nx[167] = aj, nx[168] = eC) : eC = nx[168];
            let oW = (0, tF.a)(eC);
            nx[169] !== sL || nx[170] !== nC || nx[171] !== a$ || nx[172] !== aI || nx[173] !== ax || nx[174] !== nO || nx[175] !== aw || nx[176] !== aT || nx[177] !== rT || nx[178] !== nX || nx[179] !== aj || nx[180] !== rm || nx[181] !== n$ ? (e_ = () => {
                if (ax || null == aj) return;
                let e = nX.get(G.s);
                if (!e && !nX.get(G.q) || !e && null == sL && null == rm) return;
                let t = a_.current?.signal;
                null == t || t.aborted || (ay(n$), (e ? (0, nd.f)(nX, {
                    chatGptThreadId: nC,
                    conversationTitle: a$
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, E.a)(nX, e);
                    if ("created" === e.status) return null == n || t.aborted || nX.get(er.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, E.a)(nX, e)
                }) : (0, j.a)({
                    scope: nX,
                    projectId: rT ?? void 0,
                    prompt: `Continuing from ${(0,eZ.f)({conversationId:aj,title:a$?.trim()||"ChatGPT thread"})}`
                }).then(oz)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? aT(n) : aw((0, ad.c)(n, {
                            isTemporaryChat: nO
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (ay(null), nX.get(er.f).danger(aI.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot hand off a conversation to a task"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, nx[169] = sL, nx[170] = nC, nx[171] = a$, nx[172] = aI, nx[173] = ax, nx[174] = nO, nx[175] = aw, nx[176] = aT, nx[177] = rT, nx[178] = nX, nx[179] = aj, nx[180] = rm, nx[181] = n$, nx[182] = e_) : e_ = nx[182];
            let oU = e_;
            nx[183] !== nC || nx[184] !== aw || nx[185] !== nX || nx[186] !== ai || nx[187] !== nN || nx[188] !== n1 ? (eI = () => {
                if (null != n1) {
                    if ((0, aV.e)(nC)) {
                        let e = (0, rY.a)(nX, n1, nC);
                        null != e && aw((0, ad.c)(e))
                    }
                    return
                }
                let e = nX.query.getData(nB.n, nN);
                null != e && null != nN && null != ai && ((0, B.kb)(nX, {
                    conversation: e,
                    conversationId: ai,
                    sharedConversationId: nN
                }), aw((0, ad.c)(ai)))
            }, nx[183] = nC, nx[184] = aw, nx[185] = nX, nx[186] = ai, nx[187] = nN, nx[188] = n1, nx[189] = eI) : eI = nx[189];
            let oK = (0, tF.a)(eI);
            nx[190] !== nQ ? (ew = nQ?.mcpAppContext == null ? null : {
                hostId: tC.a,
                server: "codex_apps",
                connectorId: nQ.mcpAppContext.id
            }, nx[190] = nQ, nx[191] = ew) : ew = nx[191];
            let oq = (0, p.x)(td.b, ew),
                oV = nQ?.fullscreenContent != null ? "content" : "workspace",
                oY = (0, X.a)(nJ ? "embedded" : oV),
                oQ = !oq && (sO || !sk.isError) && !nZ && !s5 && (null == n1 || n0?.authMethod === "chatgpt" || n4) && (!as || null != sL),
                o$ = s5 || rp || ro || sV,
                oZ = o$ || rQ || rK?.needsEntry === !0,
                oJ = oQ && !o$ && !as && !sN && !s7 && !sb && !sm && !sg && !rE,
                oX = !oQ || as || oZ || sN ? null : ap,
                o0 = (0, nD.c)({
                    paragen: ao,
                    hideInitialUserMessage: nS,
                    browserConversationId: void 0,
                    conversationId: nC,
                    errorMessage: oP,
                    branchingMessageId: ab,
                    isReadOnly: nZ || s5 || as || null != nY,
                    isTemporaryChat: nO,
                    isWorkConversation: sK,
                    onRegenerateResponse: rE || as || null != nY || nZ || s5 || ro || sV || sb || sm ? void 0 : oW,
                    onEditUserMessage: rE || null == ev || sK || nZ || s5 || ro || !sx || sm ? void 0 : oH,
                    onFork: null == ev || nO || ro || sV || nZ || s5 ? void 0 : oD,
                    pendingSubmissionAttachments: sd,
                    shareEnabled: null == rf && !nO && !as && !nZ && !s5 && !rG,
                    readAloudEnabled: !as && !s5,
                    feedbackEnabled: !as && !s5 && null == nY,
                    renderedTurns: rQ || null == ao || null == r3 ? r4 : (0, nz.a)({
                        ...r3,
                        current_node: ao.promptMessageId
                    }, {
                        clinicalSearchEnabled: rn,
                        clinicalCitationsEnabled: rt,
                        streamingOrders: aE,
                        isWorkConversation: s1,
                        getRenderTelemetry: e => (0, ob.c)(nX.get, e)
                    }),
                    safetyReview: aY,
                    sharedConversationLastMessageId: sF?.current_node ?? aQ ?? (as ? sL?.current_node : null),
                    showPendingLoadingMessage: r9,
                    showRequestUserInputStatus: oQ && !oZ && !sN
                }),
                o1 = rQ ? (0, rM.a)(o0) : o0;
            nx[192] !== aI ? (eT = aI.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation",
                description: "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop"
            }), nx[192] = aI, nx[193] = eT) : eT = nx[193];
            let o2 = eT;
            nx[194] !== aj ? (ej = (0, a.jsx)(tS.a, {
                threadId: aj
            }), nx[194] = aj, nx[195] = ej) : ej = nx[195], nx[196] !== nZ || nx[197] !== as || nx[198] !== sB || nx[199] !== nX || nx[200] !== aj ? (eS = as || nZ || null == aj ? void 0 : e => {
                (0, sq.R)({
                    scope: nX,
                    conversationId: aj,
                    previousTitle: sB,
                    title: e
                })
            }, nx[196] = nZ, nx[197] = as, nx[198] = sB, nx[199] = nX, nx[200] = aj, nx[201] = eS) : eS = nx[201];
            let o3 = aZ || null != sL ? sB ?? "" : null;
            nx[202] !== a$ || nx[203] !== eS || nx[204] !== o3 ? (eE = (0, a.jsx)(tM.a, {
                className: "max-w-[320px]",
                variant: "flush-start",
                onRename: eS,
                title: a$,
                titleValue: o3
            }), nx[202] = a$, nx[203] = eS, nx[204] = o3, nx[205] = eE) : eE = nx[205], nx[206] !== ej || nx[207] !== eE ? (eA = (0, a.jsxs)("span", {
                className: "flex min-w-0 items-center gap-1",
                children: [ej, eE]
            }), nx[206] = ej, nx[207] = eE, nx[208] = eA) : eA = nx[208];
            let o4 = eA,
                o5 = s1 || s0 ? o4 : null;
            if (null != rf) {
                let e;
                nx[209] !== nC || nx[210] !== rf ? (e = (0, a.jsx)(aW.ChatGptGizmoHeader, {
                    conversationId: nC,
                    gizmoId: rf
                }), nx[209] = nC, nx[210] = rf, nx[211] = e) : e = nx[211], o5 = e
            } else null != sL || null != rm || sM || (o5 = null);
            nx[212] !== nZ || nx[213] !== as || nx[214] !== sK ? (eP = !sK || as || nZ ? null : (0, a.jsx)(e8.a, {
                hostId: tC.a
            }), nx[212] = nZ, nx[213] = as, nx[214] = sK, nx[215] = eP) : eP = nx[215];
            let o6 = eP;
            nx[216] !== s1 || nx[217] !== rR || nx[218] !== rT ? (eG = null == rT || s1 ? null : (0, a.jsx)(s9, {
                allowsThreadContentOverlap: !0,
                project: rR
            }), nx[216] = s1, nx[217] = rR, nx[218] = rT, nx[219] = eG) : eG = nx[219];
            let o7 = eG;
            nx[220] !== o7 || nx[221] !== o5 || nx[222] !== nC || nx[223] !== nK || nx[224] !== nZ || nx[225] !== ow || nx[226] !== as || nx[227] !== nO || nx[228] !== o6 || nx[229] !== rB || nx[230] !== rT || nx[231] !== rF || nx[232] !== rA ? (eF = rA ? (0, a.jsx)(re.a, {
                isTemporaryChat: nO,
                isCloudTask: ow && !as && !nZ,
                breadcrumbHeader: nK ?? o7,
                project: null == rT ? void 0 : {
                    icon: rB,
                    name: rF
                },
                start: nK ?? (as ? o5 : (0, a.jsx)(tW.BusinessAgentConversationHeader, {
                    conversationId: nC,
                    fallback: o5
                })),
                startActions: o6
            }) : null, nx[220] = o7, nx[221] = o5, nx[222] = nC, nx[223] = nK, nx[224] = nZ, nx[225] = ow, nx[226] = as, nx[227] = nO, nx[228] = o6, nx[229] = rB, nx[230] = rT, nx[231] = rF, nx[232] = rA, nx[233] = eF) : eF = nx[233];
            let o8 = eF,
                o9 = r4.length > 0,
                ie = !as && null == nY && !nZ && !nO && !aM,
                it = (0, p.x)(ie ? sC.a : null, nC);
            nx[234] !== nC || nx[235] !== it ? (ez = null != it ? (0, a.jsx)(rx, {
                conversationId: nC
            }) : null, nx[234] = nC, nx[235] = it, nx[236] = ez) : ez = nx[236];
            let ia = ez;
            nx[237] !== oJ || nx[238] !== nC || nx[239] !== s7 || nx[240] !== rK ? (eL = null != rK ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: s7,
                children: (0, a.jsx)(rc, {
                    conversationId: nC,
                    placement: "progress",
                    canStartSection: oJ
                })
            }) : null, nx[237] = oJ, nx[238] = nC, nx[239] = s7, nx[240] = rK, nx[241] = eL) : eL = nx[241];
            let is = eL;
            nx[242] !== oR || nx[243] !== o9 || nx[244] !== nk ? (eB = () => {
                o9 ? nk?.("CHATGPT_LIGHTHOUSE_LIFECYCLE_STEP_PREVIEW_CONTENT_READY") : oR && nk?.("CHATGPT_LIGHTHOUSE_LIFECYCLE_STEP_PREVIEW_FAILED")
            }, nx[242] = oR, nx[243] = o9, nx[244] = nk, nx[245] = eB) : eB = nx[245];
            let ir = (0, b.useEffectEvent)(eB);
            if (nx[246] !== ir ? (eD = () => {
                    ir()
                }, nx[246] = ir, nx[247] = eD) : eD = nx[247], nx[248] !== oR || nx[249] !== o9 ? (eH = [o9, oR], nx[248] = oR, nx[249] = o9, nx[250] = eH) : eH = nx[250], (0, b.useEffect)(eD, eH), nx[251] !== sk || nx[252] !== n0?.authMethod || nx[253] !== rE || nx[254] !== nq || nx[255] !== ra || nx[256] !== rw || nx[257] !== oB || nx[258] !== oJ || nx[259] !== al || nx[260] !== rS || nx[261] !== nU || nx[262] !== sL || nx[263] !== o8 || nx[264] !== nC || nx[265] !== o2 || nx[266] !== sU || nx[267] !== a$ || nx[268] !== ia || nx[269] !== oc || nx[270] !== nj || nx[271] !== oP || nx[272] !== sY || nx[273] !== s6 || nx[274] !== eu || nx[275] !== rg || nx[276] !== sG || nx[277] !== oU || nx[278] !== oK || nx[279] !== oR || nx[280] !== sM || nx[281] !== nT || nx[282] !== an || nx[283] !== aI || nx[284] !== nZ || nx[285] !== oe || nx[286] !== oZ || nx[287] !== r1 || nx[288] !== sN || nx[289] !== oM || nx[290] !== au || nx[291] !== ax || nx[292] !== rO || nx[293] !== nJ || nx[294] !== rN || nx[295] !== oq || nx[296] !== sA || nx[297] !== s7 || nx[298] !== s5 || nx[299] !== sX || !1 !== nx[300] || nx[301] !== as || nx[302] !== rp || nx[303] !== sg || nx[304] !== sm || nx[305] !== nO || nx[306] !== sK || nx[307] !== sb || nx[308] !== s1 || nx[309] !== rr || nx[310] !== sj || nx[311] !== ro || nx[312] !== sV || nx[313] !== sW || nx[314] !== sQ.pathname || nx[315] !== sR || nx[316] !== s$?.sidebarAutomationId || nx[317] !== nM || nx[318] !== nR || nx[319] !== sZ || nx[320] !== nk || nx[321] !== rR || nx[322] !== rB || nx[323] !== rT || nx[324] !== rF || nx[325] !== rb || nx[326] !== r3 || nx[327] !== r4 || nx[328] !== nF || nx[329] !== rQ || nx[330] !== oY || nx[331] !== nX || nx[332] !== nA || nx[333] !== aR || nx[334] !== rK || nx[335] !== is || nx[336] !== aj || nx[337] !== am || nx[338] !== oi || nx[339] !== nN || nx[340] !== n1 || nx[341] !== sz || nx[342] !== nY || nx[343] !== rW || nx[344] !== aM || nx[345] !== ie || nx[346] !== of || nx[347] !== oQ || nx[348] !== r9 || nx[349] !== oX || nx[350] !== oI || nx[351] !== o_ || nx[352] !== ak || nx[353] !== nE || nx[354] !== o1 || nx[355] !== nQ) {
                nc = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, n, s, r, o, i, l, c, d, u, h, p, f, v = r4.flatMap(oF).flatMap(oG),
                        y = v.flatMap(oN);
                    if (!as && (sk.error instanceof tL.a && 423 === [REDACTED_MAPBOX_ACCESS_TOKEN] || rN && null == sR)) {
                        let e;
                        nx[380] !== sk || nx[381] !== nC || nx[382] !== nX ? (e = (0, a.jsx)(r_.a, {
                            onUnlocked: () => {
                                (0, rI.g)(nX.get(rI.f)?.projectId, [nC]), sk.refetch()
                            }
                        }), nx[380] = sk, nx[381] = nC, nx[382] = nX, nx[383] = e) : e = nx[383], nc = e;
                        break e
                    }
                    if (null != rW) {
                        let e;
                        nx[384] !== rW ? (e = (0, a.jsx)(I.l, {
                            replace: !0,
                            to: rW
                        }), nx[384] = rW, nx[385] = e) : e = nx[385], nc = e;
                        break e
                    }
                    eK = rP,
                    nx[386] !== sk.fetchStatus || nx[387] !== sL || nx[388] !== oR || nx[389] !== sM || nx[390] !== oM || nx[391] !== nJ ? (ta = !1, nx[386] = sk.fetchStatus, nx[387] = sL, nx[388] = oR, nx[389] = sM, nx[390] = oM, nx[391] = nJ, nx[392] = ta) : ta = nx[392],
                    nx[393] !== sk.data || nx[394] !== sk.fetchStatus || nx[395] !== sL || nx[396] !== nC || nx[397] !== oR || nx[398] !== sM || nx[399] !== r1 || nx[400] !== oM || !1 !== nx[401] || nx[402] !== r4.length ? (ts = null, nx[393] = sk.data, nx[394] = sk.fetchStatus, nx[395] = sL, nx[396] = nC, nx[397] = oR, nx[398] = sM, nx[399] = r1, nx[400] = oM, nx[401] = !1, nx[402] = r4.length, nx[403] = ts) : ts = nx[403],
                    tr = !as && !s5 && (0, to.c)() ? (0, a.jsx)(tc.b, {
                        callIds: y,
                        hostId: tC.a,
                        conversationId: (0, m.Le)(`chatgpt:${nC}`)
                    }) : null,
                    nx[404] !== a$ || nx[405] !== nJ || nx[406] !== n1 || nx[407] !== nQ?.documentTitle ? (tv = nJ ? null : (0, a.jsx)(e6.a, {
                        title: null == n1 ? nQ?.documentTitle ?? a$ : null
                    }), nx[404] = a$, nx[405] = nJ, nx[406] = n1, nx[407] = nQ?.documentTitle, nx[408] = tv) : tv = nx[408],
                    nx[409] !== nC || nx[410] !== nJ || nx[411] !== s7 || nx[412] !== as || nx[413] !== nO || nx[414] !== s1 || nx[415] !== o1 ? (tb = nJ || s1 ? null : (0, a.jsx)(sv.a, {
                        conversationId: nC,
                        canCopy: !s7,
                        paragenEnabled: !as,
                        turns: o1,
                        loadHistory: !nO && !as
                    }), nx[409] = nC, nx[410] = nJ, nx[411] = s7, nx[412] = as, nx[413] = nO, nx[414] = s1, nx[415] = o1, nx[416] = tb) : tb = nx[416];
                    let x = null != sL || sM;nx[417] !== oR || nx[418] !== s1 || nx[419] !== x ? (tw = (0, a.jsx)(tB.a, {
                        isWorkConversation: s1,
                        hasConversationContent: x,
                        hasLoadError: oR
                    }), nx[417] = oR, nx[418] = s1, nx[419] = x, nx[420] = tw) : tw = nx[420],
                    nx[421] !== sL || nx[422] !== nC || nx[423] !== oR || nx[424] !== sM || nx[425] !== oM || nx[426] !== nJ || nx[427] !== sQ.pathname || nx[428] !== nX || nx[429] !== nN ? (tP = nJ || oM || oR || null == sL && !sM ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(rU, {
                            sharedConversationId: nN
                        }), (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(tp.a, {
                                onCommit: () => th.a.contentCommitted(nX, nC, nN, sQ.pathname),
                                onPaint: () => th.a.contentVisible(nX, nC, nN)
                            }, nN ?? nC)
                        })]
                    }), nx[421] = sL, nx[422] = nC, nx[423] = oR, nx[424] = sM, nx[425] = oM, nx[426] = nJ, nx[427] = sQ.pathname, nx[428] = nX, nx[429] = nN, nx[430] = tP) : tP = nx[430],
                    nx[431] !== n0?.authMethod || nx[432] !== rw || nx[433] !== rS || nx[434] !== sL || nx[435] !== o8 || nx[436] !== nC || nx[437] !== sU || nx[438] !== a$ || nx[439] !== ia || nx[440] !== oc || nx[441] !== eu || nx[442] !== rg || nx[443] !== oU || nx[444] !== nZ || nx[445] !== oe || nx[446] !== ax || nx[447] !== rO || nx[448] !== nJ || nx[449] !== rN || nx[450] !== s5 || nx[451] !== as || nx[452] !== nO || nx[453] !== sK || nx[454] !== sb || nx[455] !== s1 || nx[456] !== s$?.sidebarAutomationId || nx[457] !== sZ || nx[458] !== rB || nx[459] !== rT || nx[460] !== rF || nx[461] !== rb || nx[462] !== r3 || nx[463] !== r4.length || nx[464] !== nX || nx[465] !== is || nx[466] !== aj || nx[467] !== oi || nx[468] !== nY || nx[469] !== aM || nx[470] !== ie || nx[471] !== of || nx[472] !== oX || nx[473] !== oI || nx[474] !== ak || nx[475] !== nQ ? (tN = nJ || null != nQ ? null : (0, a.jsxs)(sy.a, {
                        chatIcon: null == rT ? void 0 : rB,
                        conversationId: sK && !as ? nC : null,
                        header: null != ia || null != is ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(rs, {
                                    header: o8,
                                    courseShortcut: ia,
                                    progress: is
                                })
                            }), null]
                        }) : o8,
                        title: a$,
                        isArchivedPreview: nZ,
                        children: [null, null, n0?.authMethod === "chatgpt" ? (0, a.jsx)(e9.s, {
                            productExperience: s1 ? "work" : "chat"
                        }) : null, as ? (0, a.jsx)(rV.a, {
                            children: null == rb ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(r2, {
                                    data: rb
                                })
                            })
                        }) : null, ie ? (0, a.jsx)(sI, {
                            conversationId: nC,
                            scheduledAutomationId: sZ ? s$?.sidebarAutomationId : void 0
                        }, nC) : null, of ? (0, a.jsx)(a2, {
                            allowsThreadContentOverlap: !s1,
                            composerActions: oX,
                            conversationId: oI,
                            controlledState: oe ? {
                                isOpen: oc.isOpen,
                                shouldPreventAutoFocus: oc.shouldPreventAutoFocus,
                                onOpenChange: e => {
                                    oi({
                                        ...oc,
                                        isOpen: e,
                                        shouldPreventAutoFocus: !e && oc.shouldPreventAutoFocus
                                    })
                                }
                            } : void 0,
                            readData: !oe || oc.isOpen ? eu : null,
                            showSources: !oe,
                            shouldBlockExternalEgress: aM
                        }) : null, nO && !as && !nZ && null == rg && null == rS && null == rT && !rO && null != r3 && (0, g.a)(r3).some(oO) ? (0, a.jsx)(A.a.HeaderAction, {
                            actionId: "chatgpt-conversation-save",
                            align: "end",
                            order: 100,
                            children: (0, a.jsx)(ol, {
                                conversationId: nC
                            })
                        }) : null, nO || nZ || s5 ? null : (0, a.jsx)(re.b, {
                            allowsThreadContentOverlap: !s1,
                            menu: as || null == aj ? (0, a.jsx)(s4, {}) : (0, a.jsx)(s2, {
                                conversationId: nC,
                                title: a$,
                                isHandoffPending: ax,
                                isArchived: sL?.is_archived === !0,
                                isChatConversation: null != sL && !s1,
                                onHandoff: rw ? oU : void 0,
                                onOpenMessage: async e => {
                                    a_.current?.signal.aborted === !1 && nX.get(S.a)?.pathname === nX.value.pathname && await ah.current?.scrollToMessage(e)
                                },
                                projectId: rT,
                                projectName: rF,
                                serverConversationId: aj,
                                conversationOrigin: sU
                            }),
                            children: as || rN ? null : (0, a.jsx)(n5, {
                                conversationId: nC,
                                projectId: rT,
                                sharedProjectConversation: nY,
                                isReady: (null != aj || null != nY) && r4.length > 0 && (ak ?? sL?.current_node) != null,
                                isRestricted: aM || rO,
                                isStreaming: sb
                            })
                        })]
                    }), nx[431] = n0?.authMethod, nx[432] = rw, nx[433] = rS, nx[434] = sL, nx[435] = o8, nx[436] = nC, nx[437] = sU, nx[438] = a$, nx[439] = ia, nx[440] = oc, nx[441] = eu, nx[442] = rg, nx[443] = oU, nx[444] = nZ, nx[445] = oe, nx[446] = ax, nx[447] = rO, nx[448] = nJ, nx[449] = rN, nx[450] = s5, nx[451] = as, nx[452] = nO, nx[453] = sK, nx[454] = sb, nx[455] = s1, nx[456] = s$?.sidebarAutomationId, nx[457] = sZ, nx[458] = rB, nx[459] = rT, nx[460] = rF, nx[461] = rb, nx[462] = r3, nx[463] = r4.length, nx[464] = nX, nx[465] = is, nx[466] = aj, nx[467] = oi, nx[468] = nY, nx[469] = aM, nx[470] = ie, nx[471] = of, nx[472] = oX, nx[473] = oI, nx[474] = ak, nx[475] = nQ, nx[476] = tN) : tN = nx[476],
                    tz = null,
                    eU = aH.a,
                    e1 = al,
                    e2 = sU,
                    e3 = !oQ || oY.isHidden || oZ || rE || s7 || sN || nZ || s5 || rp || ro || sV || sg || sm,
                    e4 = nO,
                    tt = rT,
                    tn = null != rS,
                    eW = tA.c,
                    eq = s6,
                    nx[477] !== nJ || nx[478] !== sX || nx[479] !== s1 || nx[480] !== is || nx[481] !== nQ ? (eY = nJ || null != nQ ? is : sX && (0, tk.a)() && !s1 && (0, a.jsx)("div", {
                        className: "h-px",
                        "aria-hidden": !0
                    }), nx[477] = nJ, nx[478] = sX, nx[479] = s1, nx[480] = is, nx[481] = nQ, nx[482] = eY) : eY = nx[482],
                    eJ = nq;
                    let C = null == rK ? "flex h-full min-h-0 flex-col" : "h-full",
                        _ = !au && !nJ && !as && !oq && !oY.isHidden,
                        w = aM || ra,
                        T = sY?.isFullWidth === !0,
                        j = null == sY ? o_.contentShift : void 0,
                        E = rK?.selectedIndex;nx[483] !== oJ || nx[484] !== nC || nx[485] !== rK ? (e = null != rK ? (0, a.jsx)(rc, {
                        conversationId: nC,
                        placement: "composer",
                        canStartSection: oJ
                    }) : void 0, nx[483] = oJ, nx[484] = nC, nx[485] = rK, nx[486] = e) : e = nx[486],
                    nx[487] !== nC || nx[488] !== rK ? (t = null != rK ? (0, a.jsx)(rl, {
                        conversationId: nC
                    }) : void 0, nx[487] = nC, nx[488] = rK, nx[489] = t) : t = nx[489];
                    let P = !s1,
                        M = rQ ? null : oP;nx[490] !== sk || nx[491] !== oB ? (n = oB ? () => {
                        sk.refetch({
                            cancelRefetch: !1
                        })
                    } : void 0, nx[490] = sk, nx[491] = oB, nx[492] = n) : n = nx[492];
                    let R = r4.length > 0;nx[493] !== aI || nx[494] !== rQ ? (s = rQ ? aI.formatMessage(rM.c.readOnlyPlaceholder) : void 0, nx[493] = aI, nx[494] = rQ, nx[495] = s) : s = nx[495];
                    let k = !rO && (null == rT || null != rR),
                        O = null == rK && !sW,
                        N = sk.isFetching,
                        G = !rQ && sb;nx[496] !== sL?.is_archived || nx[497] !== nC || nx[498] !== nZ || nx[499] !== nJ || nx[500] !== as || nx[501] !== nO || nx[502] !== sb || nx[503] !== s1 ? (r = nJ || !s1 || as || nZ || sL?.is_archived === !0 || nO ? null : (0, a.jsx)(b.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(ri, {
                            conversationId: nC,
                            isTurnActive: sb
                        })
                    }), nx[496] = sL?.is_archived, nx[497] = nC, nx[498] = nZ, nx[499] = nJ, nx[500] = as, nx[501] = nO, nx[502] = sb, nx[503] = s1, nx[504] = r) : r = nx[504],
                    nx[505] !== nC || nx[506] !== nZ || nx[507] !== aj ? (o = nZ ? (0, a.jsx)(tI.a, {
                        conversationId: aj ?? nC,
                        kind: "chatgpt"
                    }, aj ?? nC) : void 0, nx[505] = nC, nx[506] = nZ, nx[507] = aj, nx[508] = o) : o = nx[508];
                    let F = !rQ && r9;nx[509] !== rS ? (i = null != rS ? (0, a.jsx)(ru.GptPluginMigrationBanner, {
                        gizmoId: rS
                    }) : null, nx[509] = rS, nx[510] = i) : i = nx[510],
                    nx[511] !== rw || nx[512] !== oU || nx[513] !== ax || nx[514] !== rr || nx[515] !== sj ? (l = rr ? (0, a.jsx)(sp, {
                        canConvert: rw,
                        isChatInstantAvailable: !sj,
                        isConverting: ax,
                        onConvert: oU
                    }) : null, nx[511] = rw, nx[512] = oU, nx[513] = ax, nx[514] = rr, nx[515] = sj, nx[516] = l) : l = nx[516],
                    nx[517] !== sG || nx[518] !== s5 ? (c = sG.bind(null, s5), nx[517] = sG, nx[518] = s5, nx[519] = c) : c = nx[519],
                    nx[520] !== oK || nx[521] !== as || nx[522] !== nR ? (d = e => {
                        nR?.(e), as && oK()
                    }, nx[520] = oK, nx[521] = as, nx[522] = nR, nx[523] = d) : d = nx[523],
                    nx[524] !== sk.isFetching || nx[525] !== rE || nx[526] !== al || nx[527] !== nU || nx[528] !== nC || nx[529] !== o2 || nx[530] !== nj || nx[531] !== oR || nx[532] !== nT || nx[533] !== an || nx[534] !== oZ || nx[535] !== r1 || nx[536] !== sN || nx[537] !== oM || nx[538] !== au || nx[539] !== nJ || nx[540] !== as || nx[541] !== nO || nx[542] !== sK || nx[543] !== nM || nx[544] !== nk || nx[545] !== nF || nx[546] !== nA || nx[547] !== aR || nx[548] !== am || nx[549] !== nN || nx[550] !== sz || nx[551] !== oQ || nx[552] !== R || nx[553] !== s || nx[554] !== k || nx[555] !== O || nx[556] !== G || nx[557] !== r || nx[558] !== o || nx[559] !== F || nx[560] !== i || nx[561] !== l || nx[562] !== c || nx[563] !== d || nx[564] !== _ || nx[565] !== w || nx[566] !== T || nx[567] !== j || nx[568] !== E || nx[569] !== e || nx[570] !== t || nx[571] !== P || nx[572] !== M || nx[573] !== n || nx[574] !== nE || nx[575] !== o1 || nx[576] !== nQ ? (u = (0, a.jsx)(oL, {
                        ref: ah,
                        trackReadState: _,
                        workspace: nQ,
                        shouldBlockMcpApps: w,
                        isCoveredByFloatingPanel: T,
                        isFormOnly: au,
                        isInlinePreview: nJ,
                        hideModelPicker: nT,
                        disableAutoFocus: nj,
                        transcriptPresentation: nE,
                        scrollOrigin: nA,
                        onBackgroundSubmitAccepted: nM,
                        previewLifecycle: nk,
                        composerRef: am,
                        contentX: j,
                        conversationId: nC,
                        composerConversationId: al,
                        sectionIndex: E,
                        composerLeadingContent: nU,
                        aboveComposerContent: e,
                        historyLoadingContent: t,
                        requiredSystemHints: nF,
                        isChatConversation: P,
                        conversationLoadingLabel: o2,
                        entries: o1,
                        errorMessage: M,
                        hasLoadError: oR,
                        onRetryLoad: n,
                        hasRenderableTurns: R,
                        isComposerDisabled: oZ,
                        readOnlyPlaceholder: s,
                        moreDetailsEnabled: k,
                        isConversationEmpty: r1,
                        showEmptyState: O,
                        isConversationFetching: N,
                        isConversationLoading: oM,
                        isSharedConversation: as,
                        isSubmitDisabled: sN,
                        isTemporaryChat: nO,
                        isTurnActive: G,
                        isWorkConversation: sK,
                        onboardingPrelude: r,
                        scrollStateConversationId: aR,
                        initialResponsePlacementKey: an,
                        sharedConversationId: nN,
                        sharedPostRegulatedConnectorKind: sz,
                        showComposer: oQ,
                        archivedPreviewFooter: o,
                        showPendingLoadingMessage: F,
                        gptPluginMigrationBanner: i,
                        awaitingGptContinuation: rE,
                        workOnlyConversionBanner: l,
                        onAddSelectedText: c,
                        onSubmitAccepted: d
                    }), nx[524] = sk.isFetching, nx[525] = rE, nx[526] = al, nx[527] = nU, nx[528] = nC, nx[529] = o2, nx[530] = nj, nx[531] = oR, nx[532] = nT, nx[533] = an, nx[534] = oZ, nx[535] = r1, nx[536] = sN, nx[537] = oM, nx[538] = au, nx[539] = nJ, nx[540] = as, nx[541] = nO, nx[542] = sK, nx[543] = nM, nx[544] = nk, nx[545] = nF, nx[546] = nA, nx[547] = aR, nx[548] = am, nx[549] = nN, nx[550] = sz, nx[551] = oQ, nx[552] = R, nx[553] = s, nx[554] = k, nx[555] = O, nx[556] = G, nx[557] = r, nx[558] = o, nx[559] = F, nx[560] = i, nx[561] = l, nx[562] = c, nx[563] = d, nx[564] = _, nx[565] = w, nx[566] = T, nx[567] = j, nx[568] = E, nx[569] = e, nx[570] = t, nx[571] = P, nx[572] = M, nx[573] = n, nx[574] = nE, nx[575] = o1, nx[576] = nQ, nx[577] = u) : u = nx[577],
                    nx[578] !== oc || nx[579] !== eu || nx[580] !== oe || nx[581] !== aM || nx[582] !== of || nx[583] !== oX || nx[584] !== oI || nx[585] !== o_ ? (h = of && null != eu && (!oe || oc.isOpen) ? (0, a.jsx)(a1, {
                        composerActions: oX,
                        conversationId: oI,
                        readData: eu,
                        showSources: !oe,
                        display: o_,
                        shouldBlockExternalEgress: aM
                    }) : null, nx[578] = oc, nx[579] = eu, nx[580] = oe, nx[581] = aM, nx[582] = of, nx[583] = oX, nx[584] = oI, nx[585] = o_, nx[586] = h) : h = nx[586],
                    nx[587] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(aD.a, {}), nx[587] = p) : p = nx[587],
                    nx[588] !== nJ ? (f = null, nx[588] = nJ, nx[589] = f) : f = nx[589],
                    nx[590] !== s7 || nx[591] !== u || nx[592] !== h || nx[593] !== f || nx[594] !== C ? (eX = (0, a.jsxs)("div", {
                        className: C,
                        inert: s7,
                        children: [u, h, p, f]
                    }), nx[590] = s7, nx[591] = u, nx[592] = h, nx[593] = f, nx[594] = C, nx[595] = eX) : eX = nx[595],
                    e0 = !as && !s5 && (0, to.c)() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(oT, {
                            conversationId: nC,
                            shouldBlockExternalEgress: aM || ra,
                            widgets: v.filter(ok)
                        }), (0, a.jsx)(tl.a, {
                            blockedWidgetSource: sA ? void 0 : "descriptor",
                            transcriptMcpAppIds: new Set(v.flatMap(e => "mcp-tool-call" === e.type ? sA ? e.callId : [] : "chatgpt-hosted-widget" === e.type ? (0, aC.e)(nC, e.messageId) : [])),
                            shouldBlockExternalEgress: aM || ra
                        })]
                    }) : null
                }
                nx[251] = sk, nx[252] = n0?.authMethod, nx[253] = rE, nx[254] = nq, nx[255] = ra, nx[256] = rw, nx[257] = oB, nx[258] = oJ, nx[259] = al, nx[260] = rS, nx[261] = nU, nx[262] = sL, nx[263] = o8, nx[264] = nC, nx[265] = o2, nx[266] = sU, nx[267] = a$, nx[268] = ia, nx[269] = oc, nx[270] = nj, nx[271] = oP, nx[272] = sY, nx[273] = s6, nx[274] = eu, nx[275] = rg, nx[276] = sG, nx[277] = oU, nx[278] = oK, nx[279] = oR, nx[280] = sM, nx[281] = nT, nx[282] = an, nx[283] = aI, nx[284] = nZ, nx[285] = oe, nx[286] = oZ, nx[287] = r1, nx[288] = sN, nx[289] = oM, nx[290] = au, nx[291] = ax, nx[292] = rO, nx[293] = nJ, nx[294] = rN, nx[295] = oq, nx[296] = sA, nx[297] = s7, nx[298] = s5, nx[299] = sX, nx[300] = !1, nx[301] = as, nx[302] = rp, nx[303] = sg, nx[304] = sm, nx[305] = nO, nx[306] = sK, nx[307] = sb, nx[308] = s1, nx[309] = rr, nx[310] = sj, nx[311] = ro, nx[312] = sV, nx[313] = sW, nx[314] = sQ.pathname, nx[315] = sR, nx[316] = s$?.sidebarAutomationId, nx[317] = nM, nx[318] = nR, nx[319] = sZ, nx[320] = nk, nx[321] = rR, nx[322] = rB, nx[323] = rT, nx[324] = rF, nx[325] = rb, nx[326] = r3, nx[327] = r4, nx[328] = nF, nx[329] = rQ, nx[330] = oY, nx[331] = nX, nx[332] = nA, nx[333] = aR, nx[334] = rK, nx[335] = is, nx[336] = aj, nx[337] = am, nx[338] = oi, nx[339] = nN, nx[340] = n1, nx[341] = sz, nx[342] = nY, nx[343] = rW, nx[344] = aM, nx[345] = ie, nx[346] = of, nx[347] = oQ, nx[348] = r9, nx[349] = oX, nx[350] = oI, nx[351] = o_, nx[352] = ak, nx[353] = nE, nx[354] = o1, nx[355] = nQ, nx[356] = eW, nx[357] = eU, nx[358] = eK, nx[359] = eq, nx[360] = eY, nx[361] = eJ, nx[362] = eX, nx[363] = e0, nx[364] = e1, nx[365] = e2, nx[366] = e3, nx[367] = e4, nx[368] = tt, nx[369] = tn, nx[370] = ta, nx[371] = ts, nx[372] = tr, nx[373] = tv, nx[374] = tb, nx[375] = tw, nx[376] = tP, nx[377] = tN, nx[378] = tz, nx[379] = nc
            } else eW = nx[356], eU = nx[357], eK = nx[358], eq = nx[359], eY = nx[360], eJ = nx[361], eX = nx[362], e0 = nx[363], e1 = nx[364], e2 = nx[365], e3 = nx[366], e4 = nx[367], tt = nx[368], tn = nx[369], ta = nx[370], ts = nx[371], tr = nx[372], tv = nx[373], tb = nx[374], tw = nx[375], tP = nx[376], tN = nx[377], tz = nx[378], nc = nx[379];
            if (nc !== Symbol.for("react.early_return_sentinel")) return nc;
            nx[596] !== eW || nx[597] !== eq || nx[598] !== eY || nx[599] !== eJ || nx[600] !== eX || nx[601] !== e0 ? (nu = (0, a.jsxs)(eW, {
                floatingPanelWidth: eq,
                header: eY,
                banner: eJ,
                children: [eX, e0]
            }), nx[596] = eW, nx[597] = eq, nx[598] = eY, nx[599] = eJ, nx[600] = eX, nx[601] = e0, nx[602] = nu) : nu = nx[602], nx[603] !== eU || nx[604] !== e1 || nx[605] !== e2 || nx[606] !== e3 || nx[607] !== e4 || nx[608] !== tt || nx[609] !== tn || nx[610] !== nu ? (nh = (0, a.jsx)(eU, {
                conversationId: e1,
                conversationOrigin: e2,
                disabled: e3,
                isTemporaryChat: e4,
                projectId: tt,
                requiresGizmoId: tn,
                children: nu
            }), nx[603] = eU, nx[604] = e1, nx[605] = e2, nx[606] = e3, nx[607] = e4, nx[608] = tt, nx[609] = tn, nx[610] = nu, nx[611] = nh) : nh = nx[611], nx[612] !== eK || nx[613] !== ta || nx[614] !== ts || nx[615] !== tr || nx[616] !== tv || nx[617] !== tb || nx[618] !== tw || nx[619] !== tP || nx[620] !== tN || nx[621] !== tz || nx[622] !== nh ? (np = (0, a.jsxs)(eK, {
                children: [ta, ts, tr, tv, tb, tw, tP, tN, tz, nh]
            }), nx[612] = eK, nx[613] = ta, nx[614] = ts, nx[615] = tr, nx[616] = tv, nx[617] = tb, nx[618] = tw, nx[619] = tP, nx[620] = tN, nx[621] = tz, nx[622] = nh, nx[623] = np) : np = nx[623];
            let io = np,
                ii = as || !sk.isFetchedAfterMount || sk.isFetching || sO ? null : sk.error,
                il = oR ? sk.error : null,
                ic = null == sU && null == sL ? null : s1,
                id = !s1 && !oM;
            return nx[624] !== ap || nx[625] !== al || nx[626] !== nN ? (nm = {
                conversationId: al,
                composer: ap,
                sharedConversationId: nN
            }, nx[624] = ap, nx[625] = al, nx[626] = nN, nx[627] = nm) : nm = nx[627], nx[628] !== io || nx[629] !== nm ? (ng = (0, a.jsx)(ny.a, {
                value: nm,
                children: io
            }), nx[628] = io, nx[629] = nm, nx[630] = ng) : ng = nx[630], nx[631] !== id || nx[632] !== ng ? (nf = (0, a.jsx)(w.a, {
                enabled: id,
                children: ng
            }), nx[631] = id, nx[632] = ng, nx[633] = nf) : nf = nx[633], nx[634] !== oB || nx[635] !== aj || nx[636] !== ii || nx[637] !== il || nx[638] !== ic || nx[639] !== nf ? (nv = (0, a.jsx)(en.a, {
                conversationId: aj,
                error: ii,
                loadError: il,
                canRetry: oB,
                isWorkConversation: ic,
                children: nf
            }), nx[634] = oB, nx[635] = aj, nx[636] = ii, nx[637] = il, nx[638] = ic, nx[639] = nf, nx[640] = nv) : nv = nx[640], nv
        }

        function ok(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function oO(e) {
            return "user" === e.author.role
        }

        function oN(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function oG(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function oF(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function oz(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }

        function oL(e) {
            let t, n, r, o, c, u, h, m, g, f, v, y, C, I, w, T, j, S, E, A, P, M, R, k, N, G, F, z, L = (0, s.c)(219),
                {
                    ref: H,
                    trackReadState: W,
                    composerRef: U,
                    workspace: q,
                    shouldBlockMcpApps: V,
                    contentX: Y,
                    conversationId: Q,
                    sectionIndex: $,
                    composerConversationId: Z,
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
                    onBackgroundSubmitAccepted: ed,
                    previewLifecycle: eu,
                    isChatConversation: eh,
                    conversationLoadingLabel: ep,
                    entries: em,
                    errorMessage: eg,
                    hasLoadError: ef,
                    onRetryLoad: ev,
                    hasRenderableTurns: eb,
                    isComposerDisabled: ex,
                    readOnlyPlaceholder: eC,
                    moreDetailsEnabled: e_,
                    isConversationEmpty: eT,
                    showEmptyState: eE,
                    isConversationFetching: eA,
                    isConversationLoading: eP,
                    isSharedConversation: eM,
                    isSubmitDisabled: eR,
                    isTemporaryChat: ek,
                    isTurnActive: eO,
                    isWorkConversation: eN,
                    onboardingPrelude: eG,
                    scrollStateConversationId: eF,
                    initialResponsePlacementKey: ez,
                    sharedConversationId: eB,
                    sharedPostRegulatedConnectorKind: eD,
                    showComposer: eH,
                    archivedPreviewFooter: eW,
                    showPendingLoadingMessage: eq,
                    gptPluginMigrationBanner: eV,
                    awaitingGptContinuation: eY,
                    workOnlyConversionBanner: eQ,
                    onAddSelectedText: e$,
                    onSubmitAccepted: eZ
                } = e,
                e0 = void 0 === eE || eE,
                e5 = (0, p.y)(D.a),
                e6 = (0, p.x)(rY.d, (0, b.useContext)(O.a)),
                e7 = (0, p.z)(ty.a),
                e8 = (0, p.x)(tz.a, Q),
                e9 = q?.fullscreenContent != null ? "content" : "workspace",
                te = (0, X.a)(er ? "embedded" : e9),
                tn = (0, p.z)(rC.a),
                ta = eH && tn?.source.turnContext.conversationId !== Z,
                ts = "floating" === te.placement,
                to = (0, p.z)(rf.h),
                ti = eh && null == eB && null == e6 && null == eW,
                tl = !eP && !eO && !ef && eT && !eb,
                tc = (0, p.x)(B.i, Q),
                td = e0 && ti && tl && null == tc && !e8 && !ts,
                tu = e0 && !e8 && (!ti || !eT),
                th = (0, b.useRef)(null),
                [tp, tm] = (0, b.useState)(null),
                [tg, tf] = (0, b.useState)(!1);
            L[0] !== em || L[1] !== tp ? (t = () => ({
                async scrollToMessage(e) {
                    let t = em.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != tp && await tp.scrollToKey(t.turnKey, void 0, {
                        align: "top"
                    })
                }
            }), n = [em, tp], L[0] = em, L[1] = tp, L[2] = t, L[3] = n) : (t = L[2], n = L[3]), (0, b.useImperativeHandle)(H, t, n), L[4] !== em ? (r = () => em, L[4] = em, L[5] = r) : r = L[5];
            let tx = (0, tF.a)(r);
            L[6] !== em || L[7] !== tp ? (o = async e => {
                let t = d()(em, oH);
                if (null == t || e.aborted) return null;
                let n = null;
                return await tp?.scrollToKey(t.turnKey, e => {
                    let t = e.querySelectorAll('[data-conversation-role="assistant"]');
                    return n = t.item(t.length - 1)
                }, {
                    align: "top",
                    signal: e
                }), n
            }, L[6] = em, L[7] = tp, L[8] = o) : o = L[8];
            let tC = o,
                [t_, tI] = (0, b.useState)(null);
            L[9] !== er || L[10] !== e5 || L[11] !== eF ? (c = () => er ? 0 : e5.get(nK.a, eF), L[9] = er, L[10] = e5, L[11] = eF, L[12] = c) : c = L[12];
            let [tT, tj] = (0, b.useState)(c);
            L[13] !== er || L[14] !== t_ || L[15] !== e5 || L[16] !== eF ? (u = e => {
                er || e5.set(nK.a, eF, Math.max(0, e - (t_?.getHeightPx() ?? 0)))
            }, L[13] = er, L[14] = t_, L[15] = e5, L[16] = eF, L[17] = u) : u = L[17];
            let tS = (0, tF.a)(u);
            L[18] !== em || L[19] !== tp ? (h = async (e, t) => {
                if (t?.signal?.aborted) return;
                if (null == tp) throw Error("ChatGPT conversation search scroll requested before VirtualizedTurnList API was ready");
                let n = em.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                });
                null == n || (await tp.scrollToKey(n.turnKey), t?.signal?.aborted || await (0, eX.b)())
            }, L[18] = em, L[19] = tp, L[20] = h) : h = L[20];
            let tE = (0, tF.a)(h);
            L[21] === Symbol.for("react.memo_cache_sentinel") ? (m = e => th.current?.querySelector(`[data-content-search-turn-key="${e}"]`) ?? null, L[21] = m) : m = L[21];
            let tM = (0, tF.a)(m);
            L[22] !== Q || L[23] !== em || L[24] !== tp ? (g = async e => {
                let t = em.find(t => {
                    let {
                        turn: n
                    } = t;
                    return n.messageIds.includes(e)
                });
                null != t && null != tp && await tp.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${Q}-${e}`)}"]`), {
                    align: "center"
                })
            }, L[22] = Q, L[23] = em, L[24] = tp, L[25] = g) : g = L[25];
            let tR = (0, tF.a)(g);
            L[26] !== tM || L[27] !== tE ? (f = {
                scrollToTurn: tE,
                getTurnContainer: tM
            }, L[26] = tM, L[27] = tE, L[28] = f) : f = L[28];
            let tk = f,
                tO = `chatgpt:${Q}`;
            L[29] !== Q || L[30] !== ek || L[31] !== e5 || L[32] !== eB || L[33] !== e6 ? (v = async e => {
                let t = e5.get(B.j, Q);
                !ek && null == eB && null == e6 && null != t && e5.get(ew.b) > 0 && await (0, eI.a)(e5, t, e)
            }, L[29] = Q, L[30] = ek, L[31] = e5, L[32] = eB, L[33] = e6, L[34] = v) : v = L[34], L[35] !== tk || L[36] !== tx || L[37] !== tO || L[38] !== v ? (y = function(e) {
                let {
                    getTurns: t,
                    routeContextId: n,
                    scrollAdapter: a,
                    ensureHistory: s
                } = e, r = (0, nQ.a)({
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
                                        unitId: (0, nI.a)("user", t),
                                        text: n
                                    }]
                                }
                                if ("assistant-message" === e.type) {
                                    let n = (0, nZ.a)(e.content, ey.b),
                                        a = [],
                                        s = "";
                                    for (; e.content.includes(s);) s += "";
                                    let r = (0, nY.a)(function e(t, n, a, s) {
                                            let r = "",
                                                o = 0;
                                            for (let i of t) {
                                                let t = n.indexOf(i.raw, o); - 1 !== t && (r += n.slice(o, t), r += function(t, n, a) {
                                                    var s, r;
                                                    if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                    if ("codexDirective" === (s = t).type && "name" in s && "string" == typeof s.name && "attributes" in s && null != s.attributes && "object" == typeof s.attributes) return function(e, t) {
                                                        if (e.name === ey.a) {
                                                            let n = (0, nJ.a)(e.attributes),
                                                                a = (0, nJ.b)(e.attributes),
                                                                s = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, ey.l)(e) === a);
                                                            if (null == s) return "";
                                                            let r = (0, ey.i)(s);
                                                            return "hidden" === r || "block" === r ? "" : (0, ey.j)(s) ?? ""
                                                        }
                                                        return e.name === nV.a ? (0, n$.a)(e.attributes, "label") ?? "" : e.name === nV.b || e.name === nV.c ? "" : e.name === nq.a ? e.text ?? "" : null
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
                                        unitId: (0, nI.a)("assistant", t),
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
                getTurns: tx,
                routeContextId: tO,
                scrollAdapter: tk,
                ensureHistory: v
            }), L[35] = tk, L[36] = tx, L[37] = tO, L[38] = v, L[39] = y) : y = L[39];
            let tN = y;
            L[40] !== tN.contextId ? (C = {
                containerRef: th,
                contextId: tN.contextId
            }, L[40] = tN.contextId, L[41] = C) : C = L[41], (0, e3.a)(C);
            let tG = ta && null == eW,
                tL = e7 && tG && !ts,
                tB = (0, tt.a)();
            L[42] !== Q || L[43] !== eb || L[44] !== ea || L[45] !== $ || L[46] !== tB ? (I = {
                conversationId: Q,
                sectionIndex: $,
                hasRenderableTurns: eb,
                isCoveredByFloatingPanel: ea,
                shouldReduceMotion: tB,
                containerRef: th
            }, L[42] = Q, L[43] = eb, L[44] = ea, L[45] = $, L[46] = tB, L[47] = I) : I = L[47];
            let tD = function(e) {
                    let t, n, a, r = (0, s.c)(12),
                        {
                            conversationId: o,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, rR.a)(0);
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
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(rN) && 0 !== n.clientWidth && (r.disconnect(), h.set(a * n.clientWidth), e = (0, rk.a)(h, 0, {
                                    duration: .3,
                                    ease: rO.d
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
                tH = tG && ts,
                [tW, tU] = (0, b.useState)(null),
                [tK, tq] = (0, b.useState)(null),
                [tV, tY] = (0, b.useState)(null),
                tQ = eM && tG && !ex && !ts && !e7,
                [t$, tZ] = (0, b.useState)(null);
            L[48] !== eY || L[49] !== Q || L[50] !== eb || L[51] !== ek || L[52] !== eD || L[53] !== eH ? (w = eH && !eY ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(eK.BrowserComposerDisclaimer, {
                    conversationId: Q,
                    hasUserMessage: eb,
                    isTemporaryChat: ek,
                    regulatedConnectorKindOverride: eD
                })
            }) : void 0, L[48] = eY, L[49] = Q, L[50] = eb, L[51] = ek, L[52] = eD, L[53] = eH, L[54] = w) : w = L[54];
            let tJ = w;
            L[55] !== Q || L[56] !== eg || L[57] !== eb || L[58] !== ex || L[59] !== eR || L[60] !== ek || L[61] !== eN || L[62] !== eH || L[63] !== eq ? (T = eb ? null : (0, a.jsx)(nH.a, {
                conversationId: Q,
                errorMessage: eg,
                isTemporaryChat: ek,
                isWorkConversation: eN,
                showPendingLoadingMessage: eq,
                showRequestUserInputStatus: eH && !ex && !eR
            }), L[55] = Q, L[56] = eg, L[57] = eb, L[58] = ex, L[59] = eR, L[60] = ek, L[61] = eN, L[62] = eH, L[63] = eq, L[64] = T) : T = L[64];
            let tX = T;
            L[65] !== Q || L[66] !== eN || L[67] !== eB || L[68] !== e6 ? (j = eN && null == eB && null == e6 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(eU, {
                    conversationId: Q
                }, Q)
            }) : null, L[65] = Q, L[66] = eN, L[67] = eB, L[68] = e6, L[69] = j) : j = L[69];
            let t0 = j;
            L[70] !== eW || L[71] !== t0 ? (S = null != eW ? (0, a.jsxs)(a.Fragment, {
                children: [t0, eW]
            }) : null, L[70] = eW, L[71] = t0, L[72] = S) : S = L[72];
            let t1 = S;
            L[73] !== ee || L[74] !== t1 || L[75] !== eY || L[76] !== Z || L[77] !== J || L[78] !== U || L[79] !== Q || L[80] !== ei || L[81] !== tJ || L[82] !== tX || L[83] !== em || L[84] !== t0 || L[85] !== tW || L[86] !== eV || L[87] !== ef || L[88] !== eb || L[89] !== eo || L[90] !== e7 || L[91] !== ex || L[92] !== eP || L[93] !== ea || L[94] !== es || L[95] !== ts || L[96] !== to || L[97] !== er || L[98] !== eM || L[99] !== eR || L[100] !== ek || L[101] !== eN || L[102] !== ed || L[103] !== eZ || L[104] !== eu || L[105] !== eC || L[106] !== tQ || L[107] !== en || L[108] !== t_ || L[109] !== tC || L[110] !== te.isHidden || L[111] !== eB || L[112] !== e6 || L[113] !== ta || L[114] !== tH || L[115] !== tL || L[116] !== W || L[117] !== eQ || L[118] !== q ? (E = t1 ?? (ta ? (0, a.jsxs)(si.a.Provider, {
                value: em.at(-1) ?? null,
                children: [es || ts ? null : (0, a.jsx)(e4.a, {
                    onNavigate: tC
                }, Q), ts ? null : J, (0, a.jsx)(oU, {
                    requiredSystemHints: en,
                    composerRef: U,
                    workspace: q,
                    isInlinePreview: er,
                    hideModelPicker: eo,
                    disableAutoFocus: ei,
                    onBackgroundSubmitAccepted: ed,
                    previewLifecycle: eu,
                    conversationId: Z,
                    isImageEditComposer: to,
                    disabled: ex,
                    readOnlyPlaceholder: eC,
                    awaitingGptContinuation: eY,
                    headerContent: t0,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tQ ? (0, a.jsx)("div", {
                            ref: tY,
                            className: "empty:hidden"
                        }) : null, ee, !eP && !ef && eb && !eY && eQ, e7 ? null : eV, tH && tX]
                    }),
                    isFullscreenComposer: ts,
                    isHidden: te.isHidden,
                    trackReadState: W && !ea,
                    isSharedConversation: eM,
                    isSubmitDisabled: eR,
                    followupPortalTarget: tW,
                    takeoverDisclaimerRef: tZ,
                    showConversationFollowups: null == eB && null == e6 && !ek && !eN && !ts,
                    isTemporaryChat: ek,
                    isWorkConversation: eN,
                    responseSpacerState: t_,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(ao, {
                            entries: em,
                            historyLoader: ek || null != eB || null != e6 ? null : (0, a.jsx)(rT.a, {
                                conversationId: Q
                            }),
                            isVisible: t
                        })
                    },
                    showVoiceStage: !tL,
                    voiceDisclaimer: e7 && !tL ? tJ : void 0,
                    onSubmitAccepted: e => {
                        tj(0), eZ?.(e)
                    }
                }, `${Z}:${to?"image-edit":"chat"}`)]
            }) : t0), L[73] = ee, L[74] = t1, L[75] = eY, L[76] = Z, L[77] = J, L[78] = U, L[79] = Q, L[80] = ei, L[81] = tJ, L[82] = tX, L[83] = em, L[84] = t0, L[85] = tW, L[86] = eV, L[87] = ef, L[88] = eb, L[89] = eo, L[90] = e7, L[91] = ex, L[92] = eP, L[93] = ea, L[94] = es, L[95] = ts, L[96] = to, L[97] = er, L[98] = eM, L[99] = eR, L[100] = ek, L[101] = eN, L[102] = ed, L[103] = eZ, L[104] = eu, L[105] = eC, L[106] = tQ, L[107] = en, L[108] = t_, L[109] = tC, L[110] = te.isHidden, L[111] = eB, L[112] = e6, L[113] = ta, L[114] = tH, L[115] = tL, L[116] = W, L[117] = eQ, L[118] = q, L[119] = E) : E = L[119];
            let t2 = E,
                t3 = ea || void 0;
            L[120] !== Q || L[121] !== ea || L[122] !== ts || L[123] !== W ? (A = !W || ts || ea ? null : (0, a.jsx)(so.a, {
                conversationId: Q
            }), L[120] = Q, L[121] = ea, L[122] = ts, L[123] = W, L[124] = A) : A = L[124], L[125] !== eW || L[126] !== Q || L[127] !== er || L[128] !== eB || L[129] !== e6 ? (P = er || null != eB || null != e6 || null != eW ? null : (0, a.jsx)(aq, {
                conversationId: Q
            }, Q), L[125] = eW, L[126] = Q, L[127] = er, L[128] = eB, L[129] = e6, L[130] = P) : P = L[130], L[131] !== Q || L[132] !== eP || L[133] !== ek || L[134] !== eB || L[135] !== e6 ? (M = eP || ek || null != eB || null != e6 ? null : (0, a.jsx)(rj, {
                conversationId: Q
            }), L[131] = Q, L[132] = eP, L[133] = ek, L[134] = eB, L[135] = e6, L[136] = M) : M = L[136], L[137] !== Q || L[138] !== em || L[139] !== tg || L[140] !== eA || L[141] !== eP || L[142] !== er || L[143] !== tC || L[144] !== eB || L[145] !== e6 || L[146] !== tp ? (R = er || eP || null != eB || null != e6 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(K, {
                    conversationId: Q,
                    entries: em,
                    turnListApi: tp
                }), (0, a.jsx)(tw.a, {
                    ready: !eA && tg && null != tp && em.length > 0,
                    onNavigate: tC
                })]
            }), L[137] = Q, L[138] = em, L[139] = tg, L[140] = eA, L[141] = eP, L[142] = er, L[143] = tC, L[144] = eB, L[145] = e6, L[146] = tp, L[147] = R) : R = L[147], L[148] !== eW || L[149] !== td || L[150] !== Y || L[151] !== tc || L[152] !== Q || L[153] !== ep || L[154] !== tN || L[155] !== tJ || L[156] !== tX || L[157] !== em || L[158] !== t2 || L[159] !== tS || L[160] !== ef || L[161] !== eb || L[162] !== et || L[163] !== ez || L[164] !== tT || L[165] !== e7 || L[166] !== e8 || L[167] !== ex || L[168] !== eA || L[169] !== eP || L[170] !== ea || L[171] !== es || L[172] !== ts || L[173] !== er || L[174] !== eM || L[175] !== ek || L[176] !== eO || L[177] !== eN || L[178] !== e_ || L[179] !== e$ || L[180] !== ev || L[181] !== eG || L[182] !== tQ || L[183] !== t_ || L[184] !== e5 || L[185] !== ec || L[186] !== tR || L[187] !== tD || L[188] !== eB || L[189] !== e6 || L[190] !== V || L[191] !== tB || L[192] !== eH || L[193] !== ta || L[194] !== tu || L[195] !== tH || L[196] !== tL || L[197] !== t$ || L[198] !== el || L[199] !== tp || L[200] !== q ? (k = q?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!V && q.fullscreenContent, t2]
            }) : (0, a.jsxs)(tP.a, {
                viewportOverlay: es || er || eN || null != eB || null != e6 || null != eW || ea || ts ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(sf, {
                        conversationId: Q
                    }, Q)
                }),
                hideTranscript: es,
                active: !eP && (!eb || null != tp),
                presentation: el ?? (er ? "compact" : "default"),
                contentX: Y,
                composerFade: !1,
                footerPlacement: td ? "home" : "bottom",
                initialOffset: tT,
                scrollOrigin: ec,
                onScroll: tS,
                responseSpacer: t_,
                scrollToBottomButton: !ta || ts || tL ? void 0 : {
                    isWorking: eO
                },
                threadEndContent: e7 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tU,
                        className: tA.a
                    }), null == t$ ? tJ : (0, x.createPortal)(tJ, t$)]
                }),
                footerLeadingContent: tL ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: tA.a,
                            children: (0, a.jsx)(tv.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: tJ
                    })]
                }) : void 0,
                footer: t2,
                children: [er || eP || null != eB ? null : (0, a.jsx)(nF, {
                    conversationId: Q,
                    entries: em,
                    isConversationFetching: eA,
                    turnListApi: tp
                }), (0, a.jsxs)(l.a.div, {
                    ref: th,
                    style: {
                        x: tD
                    },
                    "data-chatgpt-conversation-selection-target": Q,
                    className: (0, i.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", er && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, e2.K)(e5, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, e2.K)(e5, "conversation")
                    },
                    children: [(0, a.jsxs)(b.Suspense, {
                        fallback: (0, a.jsx)(tr.LoadingPage, {
                            debugName: "ChatGptConversationPage",
                            fillParent: !0
                        }),
                        children: [er || eP ? null : (0, a.jsx)(e1.a, {
                            conversationSource: tN
                        }), ek || null != eB || null != e6 ? null : et ?? (0, a.jsx)(rT.a, {
                            conversationId: Q
                        }), (0, a.jsx)(oy.b, {
                            conversationId: Q
                        }), (null != eB || null != e6) && eb ? (0, a.jsx)(r6, {
                            sharedConversationId: eB
                        }) : null, null == eG ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: tA.a,
                                children: eG
                            })
                        }), null == tc || eP ? null : (0, a.jsx)(nc.a, {
                            conversationId: Q,
                            branchSource: {
                                conversationId: tc.metadata.source_conversation_id,
                                title: tc.metadata.source_conversation_title,
                                gizmoId: tc.metadata.source_conversation_gizmo_id,
                                ownerId: tc.metadata.source_conversation_owner_id
                            }
                        }), ef ? (0, a.jsx)(eL, {
                            isFetching: eA,
                            isSharedConversation: eM,
                            onRetry: ev
                        }) : eP ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": ep,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(tr.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : eb ? (0, a.jsxs)(rv.a, {
                            value: tR,
                            children: [er || ea ? null : (0, a.jsxs)(a.Fragment, {
                                children: [ek || null != eB || null != e6 ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(eS, {
                                        conversationId: Q
                                    })
                                }), (0, a.jsx)(ej, {
                                    entries: em,
                                    TurnRowComponent: ar
                                })]
                            }), (0, a.jsx)(aw, {
                                conversationId: Q,
                                entries: em,
                                onApiChange: tm,
                                onVisibleContentReady: () => tf(!0),
                                responseSpacerState: t_
                            }), tQ ? (0, a.jsx)("div", {
                                ref: tq,
                                className: "empty:hidden"
                            }) : null]
                        }) : tu && null == tc && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            children: (0, a.jsx)(_.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation",
                                description: "Empty state when a ChatGPT conversation has no user or assistant text messages"
                            })
                        }), !tH && tX, eH && !ex ? (0, a.jsx)(rD, {
                            conversationId: Q,
                            moreDetailsEnabled: e_,
                            onAddSelectedText: e$
                        }) : null]
                    }), er ? null : (0, a.jsx)(nU.a, {
                        initialPlacementKey: ez,
                        isActiveVoiceConversation: e7 && e8,
                        isLoadingHistory: eP,
                        latestUserTurnKey: em.findLast(oB)?.turnKey,
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
                        transition: tB ? tb.c : tb.b
                    }) : null]
                })]
            }), L[148] = eW, L[149] = td, L[150] = Y, L[151] = tc, L[152] = Q, L[153] = ep, L[154] = tN, L[155] = tJ, L[156] = tX, L[157] = em, L[158] = t2, L[159] = tS, L[160] = ef, L[161] = eb, L[162] = et, L[163] = ez, L[164] = tT, L[165] = e7, L[166] = e8, L[167] = ex, L[168] = eA, L[169] = eP, L[170] = ea, L[171] = es, L[172] = ts, L[173] = er, L[174] = eM, L[175] = ek, L[176] = eO, L[177] = eN, L[178] = e_, L[179] = e$, L[180] = ev, L[181] = eG, L[182] = tQ, L[183] = t_, L[184] = e5, L[185] = ec, L[186] = tR, L[187] = tD, L[188] = eB, L[189] = e6, L[190] = V, L[191] = tB, L[192] = eH, L[193] = ta, L[194] = tu, L[195] = tH, L[196] = tL, L[197] = t$, L[198] = el, L[199] = tp, L[200] = q, L[201] = k) : k = L[201], L[202] !== ea || L[203] !== t3 || L[204] !== A || L[205] !== P || L[206] !== M || L[207] !== R || L[208] !== k ? (N = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": t3,
                inert: ea,
                children: [A, P, M, R, k]
            }), L[202] = ea, L[203] = t3, L[204] = A, L[205] = P, L[206] = M, L[207] = R, L[208] = k, L[209] = N) : N = L[209];
            let t4 = N;
            return L[210] !== tV || L[211] !== tK || L[212] !== tQ ? (G = tQ ? {
                aboveComposer: tV,
                belowMessage: tK
            } : null, L[210] = tV, L[211] = tK, L[212] = tQ, L[213] = G) : G = L[213], L[214] !== t4 ? (F = (0, a.jsx)(eJ.a, {
                children: t4
            }), L[214] = t4, L[215] = F) : F = L[215], L[216] !== G || L[217] !== F ? (z = (0, a.jsx)(ay.a, {
                value: G,
                children: F
            }), L[216] = G, L[217] = F, L[218] = z) : z = L[218], z
        }

        function oB(e) {
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
                return o[0] !== e ? (t = (0, a.jsx)(oK, {
                    ...e
                }), o[0] = e, o[1] = t) : t = o[1], t
            }
            o[2] !== e.conversationId || o[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, o[2] = e.conversationId, o[3] = e.isImageEditComposer, o[4] = t) : t = o[4];
            let l = !e.isWorkConversation;
            return o[5] !== e ? (n = t => (0, a.jsx)(oK, {
                ...e,
                initialController: t
            }), o[5] = e, o[6] = n) : n = o[6], o[7] !== t || o[8] !== l || o[9] !== n ? (r = (0, a.jsx)(rg, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), o[7] = t, o[8] = l, o[9] = n, o[10] = r) : r = o[10], r
        }

        function oK(e) {
            let t, n, r, o, i, l, c, d, u, h, m, g, f, v, y, x, _, w, T, j = (0, s.c)(72);
            j[0] !== e ? ({
                composerRef: t,
                initialController: n,
                ...r
            } = e, j[0] = e, j[1] = t, j[2] = n, j[3] = r) : (t = j[1], n = j[2], r = j[3]);
            let S = (0, p.y)(D.a),
                E = (0, p.x)(k.b, r.isTemporaryChat),
                {
                    isFullscreenComposer: A
                } = r,
                P = (0, C.a)(),
                {
                    state: O
                } = (0, I.X)(),
                N = (0, p.x)(oA, r.conversationId),
                G = (0, p.x)(B.P, r.conversationId),
                F = (0, p.x)(tU.c, r.conversationId);
            j[4] !== F || j[5] !== r.isSharedConversation || j[6] !== r.isWorkConversation || j[7] !== G ? (o = !r.isSharedConversation && !r.isWorkConversation && !(0, ac.a)(G) && !F, j[4] = F, j[5] = r.isSharedConversation, j[6] = r.isWorkConversation, j[7] = G, j[8] = o) : o = j[8];
            let z = o,
                L = z && !r.disabled && !r.isSubmitDisabled && !r.isImageEditComposer,
                H = z ? N : void 0;
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
                K = (0, b.useContext)(eY.a),
                q = (0, b.useRef)(!1);
            j[16] !== W || j[17] !== K || j[18] !== n || j[19] !== r.isTemporaryChat || j[20] !== S ? (c = e => {
                null == e || null == n || q.current || (q.current = !0, (0, nb.Q)(S, W, n.getPersistedText(), {
                    isTemporaryChat: r.isTemporaryChat
                }), K?.onAdopt())
            }, j[16] = W, j[17] = K, j[18] = n, j[19] = r.isTemporaryChat, j[20] = S, j[21] = c) : c = j[21];
            let V = (0, tF.a)(c);
            j[22] !== V || j[23] !== t ? (d = (0, tN.a)(t, V), j[22] = V, j[23] = t, j[24] = d) : d = j[24];
            let Y = d,
                Q = (0, b.useContext)(si.a),
                $ = (0, p.x)(B.ab, r.conversationId),
                X = (0, p.x)(B.Y, r.conversationId),
                ee = (0, p.x)(nb.h, r.conversationId);
            j[25] !== X ? (u = (0, B.xb)(X), j[25] = X, j[26] = u) : u = j[26];
            let et = u,
                en = (0, p.z)(M.j.activeTab$);
            if (j[27] !== en || j[28] !== A || j[29] !== et || j[30] !== Q) {
                let e = Q?.turn.items.flatMap(oQ);
                h = A && en?.tabType.kind === ta.a && "generatedImages" in en.props && null != en.props.generatedImages && !et && null != Q && "in_progress" !== Q.turn.status && !Q.turn.hasPendingAssistantReply && !Q.showPendingLoadingMessage && !e?.some(oY) && (null != Q.errorMessage || e?.some(oV)) ? Q.turn.messageIds.at(-1) ?? Q.turnKey : null, j[27] = en, j[28] = A, j[29] = et, j[30] = Q, j[31] = h
            } else h = j[31];
            let ea = h,
                es = (0, b.useRef)(null);
            j[32] !== ea || j[33] !== S ? (m = () => {
                null != ea && ea !== es.current && (es.current = ea, S.set(J.a, "expanded"))
            }, g = [ea, S], j[32] = ea, j[33] = S, j[34] = m, j[35] = g) : (m = j[34], g = j[35]), (0, b.useEffect)(m, g);
            let er = (0, p.w)(rw.a, A ? r.conversationId : null);
            j[36] !== U || j[37] !== L || j[38] !== W || j[39] !== P || j[40] !== A || j[41] !== Y || j[42] !== E || j[43] !== r || j[44] !== S || j[45] !== H || j[46] !== O?.libraryFileCreation ? (f = e => (0, a.jsxs)(tn.a, {
                children: [A && r.trackReadState && !e?.isHidden ? (0, a.jsx)(so.a, {
                    conversationId: r.conversationId,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, r.aboveComposerContent, (0, a.jsx)(eq.a, {
                    children: (0, a.jsx)(nu.a, {
                        ref: Y,
                        headerContent: r.headerContent,
                        allowBackgroundSubmit: r.isInlinePreview,
                        disableAutoFocus: r.disableAutoFocus,
                        previewLifecycle: r.previewLifecycle,
                        conversationOrigin: null == r.workspace ? void 0 : "tpp",
                        mcpAppContext: r.workspace?.mcpAppContext,
                        onServerThreadIdChange: r.workspace?.onServerThreadIdChange,
                        followupPortalTarget: r.followupPortalTarget,
                        takeoverDisclaimerRef: r.takeoverDisclaimerRef,
                        showConversationFollowups: r.showConversationFollowups,
                        autoPrepare: !r.isSubmitDisabled && !r.isSharedConversation,
                        browserConversationId: (0, Z.getThreadBrowserConversationId)(S) ?? r.conversationId,
                        composerController: U,
                        conversationId: r.conversationId,
                        requiredSystemHints: r.requiredSystemHints,
                        hideSystemHints: null != r.requiredSystemHints,
                        draftKey: W,
                        onPromptChange: E,
                        selectedCustomGpt: H,
                        targetGizmoId: H?.id,
                        onCustomGptChange: L ? e => {
                            S.set(oA, r.conversationId, e)
                        } : void 0,
                        onCustomAgentSelected: L ? () => {
                            S.set(oA, r.conversationId, null)
                        } : void 0,
                        disableDraftPrepare: r.isSubmitDisabled || r.isSharedConversation,
                        disableSubmit: r.disabled || r.isSubmitDisabled,
                        voiceInputDisabled: r.disabled,
                        aboveComposerHeaderContent: r.voiceDisclaimer,
                        getExtraDeveloperInstructions: !r.isInlinePreview && O?.libraryFileCreation && !r.isTemporaryChat ? oq : void 0,
                        isTemporaryChat: r.isTemporaryChat,
                        placeholder: r.disabled ? r.readOnlyPlaceholder ?? P.formatMessage({
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
                        onSubmitAccepted: (t, n) => {
                            n?.navigation === "background" && r.onBackgroundSubmitAccepted?.(), e?.onSubmitStart(), r.responseSpacerState?.place(), r.onSubmitAccepted?.(t)
                        },
                        onSubmitError: r.responseSpacerState?.clear
                    })
                })]
            }), j[36] = U, j[37] = L, j[38] = W, j[39] = P, j[40] = A, j[41] = Y, j[42] = E, j[43] = r, j[44] = S, j[45] = H, j[46] = O?.libraryFileCreation, j[47] = f) : f = j[47];
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
            let el = A ? "floating" : "pane",
                ec = r.disabled || r.awaitingGptContinuation,
                ed = null == Q && !et,
                eu = ee || et ? "loading" : "idle";
            return j[54] !== eu ? (_ = {
                type: eu,
                unread: !1
            }, j[54] = eu, j[55] = _) : _ = j[55], j[56] !== er || j[57] !== r.isHidden || j[58] !== r.renderTranscript || j[59] !== eo || j[60] !== el || j[61] !== ec || j[62] !== ed || j[63] !== _ || j[64] !== $ ? (w = (0, a.jsx)(R.a, {
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
        async function oq() {
            return [ts.a]
        }

        function oV(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function oY(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function oQ(e) {
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
                A = void 0 !== T && T,
                P = (0, o.k)();
            _[0] !== E || _[1] !== P ? (t = E && (0, o.f)(P, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), _[0] = E, _[1] = P, _[2] = t) : t = _[2];
            let M = t,
                R = (0, r.useRef)(j),
                k = (0, r.useRef)(A),
                O = (0, r.useRef)(null),
                N = (0, r.useRef)(null),
                G = (0, c.b)();
            _[3] !== G ? (n = () => new l.a(G), _[3] = G, _[4] = n) : n = _[4];
            let [F] = (0, r.useState)(n), {
                clear: z,
                consumeGrowth: L,
                getHeightPx: B,
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
            return _[15] !== z || _[16] !== L || _[17] !== B || _[18] !== S || _[19] !== q || _[20] !== D || _[21] !== H || _[22] !== K || _[23] !== M ? (f = () => (S({
                voiceAutoScrollEnabled: M,
                clear: z,
                consumeGrowth: L,
                getHeightPx: B,
                onTurnLayoutReady: q,
                place: D,
                prepareThreadEndContent: H,
                scrollToBottom: K
            }), () => {
                S(null)
            }), g = [z, L, B, S, q, D, H, K, M], _[15] = z, _[16] = L, _[17] = B, _[18] = S, _[19] = q, _[20] = D, _[21] = H, _[22] = K, _[23] = M, _[24] = g, _[25] = f) : (g = _[24], f = _[25]), (0, r.useLayoutEffect)(f, g), _[26] !== U || _[27] !== A || _[28] !== j || _[29] !== D || _[30] !== V || _[31] !== M ? (v = () => {
                let e = R.current,
                    t = k.current;
                if (R.current = j, k.current = A, M && !A && !t && null != j && j !== e) return function(e, t, n, a) {
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
            }, y = [U, A, j, D, V, M], _[26] = U, _[27] = A, _[28] = j, _[29] = D, _[30] = V, _[31] = M, _[32] = v, _[33] = y) : (v = _[32], y = _[33]), (0, r.useLayoutEffect)(v, y), _[34] !== W || _[35] !== U || _[36] !== I || _[37] !== Y ? (b = () => {
                if (null == I) return;
                let e = !1;
                return W(() => {
                    e || null == U() || (e = !0, e = Y())
                })
            }, _[34] = W, _[35] = U, _[36] = I, _[37] = Y, _[38] = b) : b = _[38], _[39] !== W || _[40] !== U || _[41] !== I ? (x = [W, U, I], _[39] = W, _[40] = U, _[41] = I, _[42] = x) : x = _[42], (0, r.useLayoutEffect)(b, x), _[43] !== F ? (C = (0, a.jsx)(i.a, {
                controller: F
            }), _[43] = F, _[44] = C) : C = _[44], C
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
            r = n("wtCf"),
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
            A = n("wwvo"),
            P = n("H7Nt"),
            M = n("vzxm"),
            R = n("jAnS"),
            k = n("vHvp"),
            O = n("fexf");
        let N = (0, v.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function G(e) {
            let t, n, r, i, l, c = (0, s.c)(12),
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
            return c[5] !== p ? (r = p ? (0, a.jsx)("span", {
                className: "truncate",
                children: p
            }) : null, c[5] = p, c[6] = r) : r = c[6], c[7] !== h ? (i = (0, a.jsx)(F, {
                gizmo: h
            }), c[7] = h, c[8] = i) : i = c[8], c[9] !== r || c[10] !== i ? (l = (0, a.jsxs)("div", {
                className: "flex min-w-0 items-center gap-1 select-none",
                children: [r, i]
            }), c[9] = r, c[10] = i, c[11] = l) : l = c[11], l
        }

        function F(e) {
            let t, n, v, G, F, z, L, B, D, H, W, U, K, q, V, Y, Q, $, Z, J, X = (0, s.c)(59),
                {
                    gizmo: ee
                } = e,
                et = (0, o.y)(j.a),
                en = (0, l.a)(),
                {
                    search: ea
                } = (0, d.X)(),
                es = (0, d.Z)(),
                [er, eo] = (0, i.useState)(!1),
                ei = (0, S.h)("2160578039"),
                el = (0, o.x)(E.a, "2513446768"),
                ec = ei && "gpt" === ee.gizmo.gizmo_type && null != ee.gizmo.migrated_plugin_id;
            X[0] !== el ? (t = el?.get("disable_gpt_updates", !1), X[0] = el, X[1] = t) : t = X[1];
            let ed = t,
                eu = ee.gizmo.current_user_permission?.can_write && !ec && !ed,
                {
                    data: eh
                } = (0, o.z)(A.c);
            X[2] !== ee.gizmo.id || X[3] !== eh ? (n = eh?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === ee.gizmo.id
            }), X[2] = ee.gizmo.id, X[3] = eh, X[4] = n) : n = X[4];
            let ep = n,
                em = eu || ec || ed ? `https://chatgpt.com/gpts/editor/${encodeURIComponent(ee.gizmo.id)}` : `https://chatgpt.com/g/${encodeURIComponent(ee.gizmo.id)}/view`;
            X[5] !== ee.gizmo.id || X[6] !== ee.gizmo.short_url ? (v = ee.gizmo.short_url?.trim() || ee.gizmo.id, X[5] = ee.gizmo.id, X[6] = ee.gizmo.short_url, X[7] = v) : v = X[7], X[8] !== v ? (G = (0, M.c)(v), X[8] = v, X[9] = G) : G = X[9], X[10] !== ea ? (F = (0, R.d)("", (0, R.e)(ea)), X[10] = ea, X[11] = F) : F = X[11];
            let eg = `${G}${F}`;
            X[12] !== en ? (z = en.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions",
                description: "Accessible label for the compact overflow menu containing actions for the current custom GPT in Codex Desktop"
            }), X[12] = en, X[13] = z) : z = X[13];
            let ef = z;
            X[14] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, a.jsx)(_.a, {
                className: "icon-sm"
            }), X[14] = L) : L = X[14], X[15] !== ef ? (B = (0, a.jsx)(p.a, {
                "aria-label": ef,
                color: "ghost",
                size: "icon",
                children: L
            }), X[15] = ef, X[16] = B) : B = X[16], X[17] !== ef || X[18] !== er || X[19] !== B ? (D = (0, a.jsx)(x.a, {
                cloneCustomTrigger: !0,
                tooltipContent: ef,
                triggerPopupOpen: er,
                children: B
            }), X[17] = ef, X[18] = er, X[19] = B, X[20] = D) : D = X[20], X[21] !== ee.gizmo.gizmo_type || X[22] !== ee.gizmo.id || X[23] !== es || X[24] !== eg || X[25] !== et ? (H = "gpt" === ee.gizmo.gizmo_type ? (0, a.jsxs)(m.c.Item, {
                href: eg,
                onClick: e => {
                    e.defaultPrevented || ((0, w.a)(et, r.mc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: ee.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), eo(!1), (0, T.c)(et, null), (0, h.m)(et, "chat"), es(eg, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(m.c.ItemIcon, {
                    children: (0, a.jsx)(f.Fh, {})
                }), (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat",
                    description: "Short GPT actions menu label that opens a new conversation with the same custom GPT, rather than switching to general ChatGPT"
                })]
            }) : null, X[21] = ee.gizmo.gizmo_type, X[22] = ee.gizmo.id, X[23] = es, X[24] = eg, X[25] = et, X[26] = H) : H = X[26], X[27] !== ee || X[28] !== et ? (W = () => (0, y.f)(et, N, {
                accountId: et.get(u.e),
                resource: ee
            }), X[27] = ee, X[28] = et, X[29] = W) : W = X[29], X[30] === Symbol.for("react.memo_cache_sentinel") ? (U = (0, a.jsx)(m.c.ItemIcon, {
                children: (0, a.jsx)(f.ee, {})
            }), K = (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About",
                description: "GPT menu action that opens its details over the current conversation or landing page"
            }), X[30] = U, X[31] = K) : (U = X[30], K = X[31]), X[32] !== W ? (q = (0, a.jsxs)(m.c.Item, {
                onSelect: W,
                children: [U, K]
            }), X[32] = W, X[33] = q) : q = X[33];
            let ev = ep ? I : C.a;
            return X[34] !== ee || X[35] !== en || X[36] !== ep || X[37] !== et ? (V = () => {
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
            }, X[34] = ee, X[35] = en, X[36] = ep, X[37] = et, X[38] = V) : V = X[38], X[39] !== ep ? (Y = ep ? (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT",
                description: "Compact overflow-menu action that removes the current custom GPT from the user's pinned sidebar items in Codex Desktop"
            }) : (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT",
                description: "Compact overflow-menu action that adds the current custom GPT to the user's pinned sidebar items in Codex Desktop"
            }), X[39] = ep, X[40] = Y) : Y = X[40], X[41] !== ev || X[42] !== V || X[43] !== Y ? (Q = (0, a.jsx)(m.c.Item, {
                LeftIcon: ev,
                onSelect: V,
                children: Y
            }), X[41] = ev, X[42] = V, X[43] = Y, X[44] = Q) : Q = X[44], X[45] !== eu || X[46] !== em || X[47] !== ee.gizmo.current_user_permission?.can_view_config ? ($ = eu || ee.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(m.c.Item, {
                href: em,
                leftIconAsset: eu ? O.a : k.a,
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
            }) : null, X[45] = eu, X[46] = em, X[47] = ee.gizmo.current_user_permission?.can_view_config, X[48] = $) : $ = X[48], X[49] !== ee ? (Z = (0, a.jsx)(P.a, {
                resource: ee
            }), X[49] = ee, X[50] = Z) : Z = X[50], X[51] !== er || X[52] !== H || X[53] !== q || X[54] !== Q || X[55] !== $ || X[56] !== Z || X[57] !== D ? (J = (0, a.jsxs)(m.a, {
                align: "start",
                contentWidth: "menu",
                open: er,
                onOpenChange: eo,
                triggerButton: D,
                children: [H, q, Q, $, Z]
            }), X[51] = er, X[52] = H, X[53] = q, X[54] = Q, X[55] = $, X[56] = Z, X[57] = D, X[58] = J) : J = X[58], J
        }
    }),
    C6kc: (function(e, t, n) {
        var a = n("wtCf"),
            s = n("FoKl"),
            r = n("fyEg"),
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
            }), "shown" === t && (0, i.a)(e, a.md, {
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
                        if ((0, h.Zb)(x, v, n), !n) return;
                        let a = t(h.j, v);
                        if (null == a || !0 !== t(d.q, a)) return;
                        let s = (0, u.b)(a);
                        (0, c.j)(x, s, x.get(d.x, s)), _(a)
                    });
                return () => {
                    e(), t(), (0, h.Zb)(x, v, !1)
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
            r = n("TPAN"),
            o = n("fyEg"),
            i = n("qmuW"),
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
            A = n("ASxG"),
            P = n("rn0J"),
            M = n("iXTs"),
            R = n("G6mJ"),
            k = n("VB5Q"),
            O = n("VTN2");
        let N = A.record(A.string(), A.union([A.string(), A.literal(!0)]));

        function G(e) {
            let t, n, A, G, z, L, B = (0, s.c)(28),
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
                $ = void 0 !== K && K,
                Z = void 0 === q || q,
                J = void 0 === V || V,
                X = void 0 === Y ? "fallback" : Y,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            B[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), B[0] = t) : t = B[0], B[1] !== J || B[2] !== D || B[3] !== Z || B[4] !== W || B[5] !== $ || B[6] !== Q ? (n = [D, Z, J, W, Q, $], B[1] = J, B[2] = D, B[3] = Z, B[4] = W, B[5] = $, B[6] = Q, B[7] = n) : n = B[7], (0, c.useEffect)(t, n), B[8] !== J || B[9] !== D || B[10] !== $ || B[11] !== Q || B[12] !== ee || B[13] !== H ? (A = () => {
                let e = ee.get(C.j, D),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(C.x, D);
                if (!J || "tpp" === n || "flora" === n) return null;
                let a = ee.get(C.K, D),
                    s = $ && "conversation" === Q ? ee.get(w.a, D)?.promptMessageId : void 0,
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
                                            let n = N.safeParse(a.attributes);
                                            if (!n.success) return;
                                            let s = (0, R.a)(n.data, e.contentReferences),
                                                r = O.d.safeParse(s?.reference);
                                            if (null == s || !r.success || (null == n.data.is_streaming ? !e.completed && (e.contentReferenceMessageStatuses?.[s.index] ?? "in_progress") === "in_progress" : "true" === n.data.is_streaming)) return;
                                            let o = e.contentReferenceMessageIds?.[s.index];
                                            t = {
                                                content: (0, k.a)(r.data.data),
                                                messageId: o ?? e.messageId,
                                                codeBlockIndex: null == o ? s.index : e.contentReferenceMessageIds?.slice(0, s.index).filter(e => e === o).length ?? 0
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
                        threadCurrentNode: s ?? ee.get(C.A, D),
                        conversationOrigin: n,
                        isStreaming: (0, C.xb)(ee.get(C.Y, D)),
                        mode: Q,
                        moderationDisclaimersByMessageId: ee.get(C.L, D),
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
            }, B[8] = J, B[9] = D, B[10] = $, B[11] = Q, B[12] = ee, B[13] = H, B[14] = A) : A = B[14];
            let en = (0, y.a)(A);
            B[15] !== ee ? (G = (e, t) => {
                let n = e => {
                    (0, g.a)(ee, o.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: r.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
                    })
                };
                return (0, v.a)(e, void 0, () => {
                    "string" == typeof e ? n(e) : e.then(n, F)
                }).then(e => {
                    e && !t?.aborted && ee.get(m.f).success((0, a.jsx)(d.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard",
                        description: "Success toast after the user copies the last assistant code block using the keyboard shortcut or command menu in Chat mode"
                    }))
                })
            }, B[15] = ee, B[16] = G) : G = B[16];
            let ea = G;
            return B[17] !== D || B[18] !== en || B[19] !== W || B[20] !== $ || B[21] !== Q || B[22] !== ee || B[23] !== ea ? (z = () => {
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
                let s = ee.get(u.a),
                    r = ee.get(C.A, D),
                    o = ee.get(h.f).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== s || t(C.A, D) !== r || $ && "conversation" === Q && t(w.a, D)?.promptMessageId !== n || t(h.f).copyLastCodeBlock !== o) && a.abort()
                    });
                ea((async () => {
                    await (0, _.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, B[17] = D, B[18] = en, B[19] = W, B[20] = $, B[21] = Q, B[22] = ee, B[23] = ea, B[24] = z) : z = B[24], B[25] !== Z || B[26] !== X ? (L = {
                enabled: Z,
                priority: X
            }, B[25] = Z, B[26] = X, B[27] = L) : L = B[27], (0, p.a)("copyLastCodeBlock", z, L), null
        }

        function F() {}
    }),
    LEgg: (function(e, t, n) {
        n.d(t, {
            a: () => _
        });
        var a = n("ABep"),
            s = n("QosV"),
            r = n("iTtm"),
            o = n("Wf1j"),
            i = n("bjsR"),
            l = n("TdH6"),
            c = n("QcW8");
        n("ZU27"), n("TpEm");
        var d = n("gbrq"),
            u = n("fBor"),
            h = n("ipGa"),
            p = n("o0PZ"),
            m = n("zd8w"),
            g = n("tSEg"),
            f = n("YnF4"),
            v = n("MrGp");

        function y() {
            let e, t, n = (0, s.c)(3),
                a = (0, r.y)(g.a);
            return n[0] !== a ? (e = () => {
                if ("chatgpt-thread" !== a.value.routeKind) return;
                let e = a.value.conversationId;
                return a.watch(t => {
                    let {
                        get: n
                    } = t, s = n(v.j, e);
                    if (null != s) return (0, f.a)(a, (0, p.Le)(`chatgpt:${s}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, m.useLayoutEffect)(e, t), null
        }
        n("n5iL"), n("q3HK"), n("bf6R"), n("CqQF");
        var b = n("rBfn"),
            x = n("enMl"),
            C = n("PCEr");

        function _(e) {
            let t, n, r, o, l, c, d = (0, s.c)(16),
                {
                    chatIcon: p,
                    header: m,
                    title: g,
                    isArchivedPreview: f,
                    children: v
                } = e;
            return d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(i.a.MainContentLayout, {
                layout: (0, h.a)() ? "default" : "thread-edge-scroll"
            }), d[0] = t) : t = d[0], d[1] !== f ? (n = f ? null : (0, a.jsx)(u.SitePreviewBridge, {}), d[1] = f, d[2] = n) : n = d[2], d[3] !== m ? (r = null == m ? null : (0, a.jsx)(i.a.Header, {
                desktopPlacement: "titlebar",
                divider: !1,
                children: m
            }), d[3] = m, d[4] = r) : r = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(i.a.RightPanelOutlet, {
                children: (0, a.jsx)(i.a.RightPanelTabs, {})
            }), d[5] = o) : o = d[5], d[6] !== p || d[7] !== m || d[8] !== f || d[9] !== g ? (l = f ? null : (0, a.jsx)(I, {
                chatIcon: p,
                mainToolbar: m,
                title: g
            }), d[6] = p, d[7] = m, d[8] = f, d[9] = g, d[10] = l) : l = d[10], d[11] !== v || d[12] !== n || d[13] !== r || d[14] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, r, v, o, l]
            }), d[11] = v, d[12] = n, d[13] = r, d[14] = l, d[15] = c) : c = d[15], c
        }

        function I(e) {
            let t, n, i, u, p, m, f = (0, s.c)(13),
                {
                    chatIcon: v,
                    mainToolbar: _,
                    title: I
                } = e,
                w = (0, r.y)(g.a);
            (0, o.a)(), (0, r.z)(d.i), (0, r.z)(c.s), f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(y, {}), f[0] = t, f[1] = n) : (t = f[0], n = f[1]), f[2] !== v || f[3] !== I ? (i = (0, a.jsx)(x.a, {
                title: I,
                icon: v
            }), f[2] = v, f[3] = I, f[4] = i) : i = f[4];
            let T = _ ?? void 0;
            return f[5] !== T ? (u = (0, a.jsx)(C.a, {
                mainToolbar: T
            }), f[5] = T, f[6] = u) : u = f[6], f[7] !== w.value.routeKind ? (p = "other" === w.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(b.b, {
                showLauncherButton: !1
            }), f[7] = w.value.routeKind, f[8] = p) : p = f[8], f[9] !== i || f[10] !== u || f[11] !== p ? (m = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i, u, p, null, null]
            }), f[9] = i, f[10] = u, f[11] = p, f[12] = m) : m = f[12], m
        }
    }),
    dLcZ: (function(e, t, n) {
        var a = n("ABep"),
            s = n("QosV"),
            r = n("on57"),
            o = n("bjsR"),
            i = n("NVRI");

        function l(e) {
            let t, n, r, o, l, c, d, u, h = (0, s.c)(16);
            if (h[0] !== e ? ({
                    isTemporaryChat: l,
                    isCloudTask: n,
                    breadcrumbHeader: t,
                    startActions: o,
                    ...r
                } = e, h[0] = e, h[1] = t, h[2] = n, h[3] = r, h[4] = o, h[5] = l) : (t = h[1], n = h[2], r = h[3], o = h[4], l = h[5]), void 0 !== l && l) return null;
            h[6] !== n || h[7] !== o ? (c = null != o || n ? (0, a.jsxs)(a.Fragment, {
                children: [o, null]
            }) : null, h[6] = n, h[7] = o, h[8] = c) : c = h[8], h[9] !== r || h[10] !== c ? (d = (0, a.jsx)(i.a, {
                ...r,
                inset: "tab-strip-flush-start",
                startActions: c
            }), h[9] = r, h[10] = c, h[11] = d) : d = h[11];
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
            let t, n, i, l, c = (0, s.c)(10),
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
                        content: s
                    } = e;
                    return null == s ? null : (0, a.jsx)(o.a.HeaderAction, {
                        actionId: t,
                        align: "end",
                        allowsThreadContentOverlap: p,
                        order: n,
                        children: (0, a.jsx)("div", {
                            className: (0, r.b)("flex items-center gap-toolbar-action", p && "browser:rounded-lg browser:bg-surface"),
                            children: s
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
                } = t, a = n(l.K, e);
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
            h = n("b5a9");

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
                    pending: (0, r.xb)(n(r.Y, t)),
                    completed: null == a || "completed" === a.result,
                    unread: n(r.H, t)
                }
            },
            preview: (e, t) => {
                let {
                    get: n
                } = e, a = n(r.K, t);
                return null == a ? null : (0, o.a)({
                    mapping: a,
                    current_node: n(r.A, t)
                })?.text ?? null
            },
            title: (e, t) => {
                let {
                    get: n
                } = e;
                return n(r.ab, t) || null
            },
            dismiss: (e, t) => {
                (0, r.Sb)(e, t, !1), (0, s.b)(e, t).catch(() => {})
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
            let A = _.hasError ? T : null;
            return y[16] !== A ? (v = (0, a.jsx)(c.a, {
                ref: w,
                onRetry: A
            }), y[16] = A, y[17] = v) : v = y[17], v
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
            l = n("HZfM"),
            c = n("bqtn"),
            d = n("bf6R"),
            u = n("SGsN"),
            h = n("svjy"),
            p = n("OcxA"),
            m = n("FR8U"),
            g = n("OWtl"),
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
            let t, n, i = (0, s.c)(12),
                {
                    conversation: d,
                    onCreateProjectDialogCloseAutoFocus: u,
                    project: h,
                    showMoveToProject: p
                } = e,
                m = void 0 === p || p,
                f = (0, r.y)(g.a),
                y = (0, l.Z)(),
                b = (0, r.z)(v.a),
                _ = (0, r.z)(x.m),
                I = (0, C.b)();
            if (i[0] !== d || i[1] !== y || i[2] !== u || i[3] !== _ || i[4] !== h || i[5] !== I || i[6] !== b || i[7] !== f || i[8] !== m) {
                let e = S({
                        scope: f,
                        conversation: d,
                        project: h,
                        projectListQuery: b,
                        pinnedProjectsQuery: _,
                        showMoveToProject: m,
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
                t = e.map(n), i[0] = d, i[1] = y, i[2] = u, i[3] = _, i[4] = h, i[5] = I, i[6] = b, i[7] = f, i[8] = m, i[9] = t
            } else t = i[9];
            return i[10] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), i[10] = t, i[11] = n) : n = i[11], n
        }

        function S(e) {
            let {
                scope: t,
                conversation: n,
                project: s,
                projectListQuery: r,
                pinnedProjectsQuery: o,
                showMoveToProject: i = !0,
                showDestinationFetchState: l = !0,
                projectCrudStatus: c,
                navigate: g,
                onCreateProjectDialogCloseAutoFocus: C
            } = e, {
                isWorkConversation: j,
                sourceMemoryBlocked: S
            } = (0, I.c)(n, s), A = S ? f.a.projectOnlyMoveUnavailable : void 0, {
                data: P,
                isPending: M,
                isError: R
            } = r, {
                data: k,
                isPending: O,
                isError: N
            } = o, G = (0, w.a)(k, P, s?.gizmo.id), F = "allowed" === c, z = (e, a) => {
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
            }, L = [];
            for (let e of (F && (L.push({
                    id: "new-chatgpt-project",
                    icon: d.rg,
                    message: E.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (0, b.a)(t, e => {
                            z(e, () => {
                                g((0, T.c)(e.gizmo.id))
                            })
                        }, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: j,
                            onCloseAutoFocus: C
                        })
                    }
                }), G.length > 0 && L.push({
                    id: "new-project-separator",
                    type: "separator"
                })), G)) {
                let {
                    targetMemoryBlocked: t
                } = (0, I.c)(n, void 0, e), s = t ? (0, _.a)((0, y.c)(e)) : void 0;
                L.push({
                    id: `move-to-project:${e.gizmo.id}`,
                    icon: (0, a.jsx)(m.a, {
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
                    enabled: null == s,
                    tooltipMessage: s,
                    onSelect: () => {
                        z(e), g((0, T.c)(e.gizmo.id))
                    }
                })
            }
            return l && (R || N) ? L.push({
                id: "retry-project-destinations",
                message: E.destinationsFailed,
                closeOnSelect: !1,
                onSelect: () => {
                    Promise.all([t.query.invalidate(v.a), t.query.invalidate(x.m)])
                }
            }) : l && (M || O) ? L.push({
                id: "loading-project-destinations",
                message: E.loading,
                tooltipMessage: E.reopen,
                enabled: !1
            }) : R || N || M || O || 0 !== G.length || F || L.push({
                id: "no-project-destinations",
                message: E.noDestinations,
                enabled: !1
            }), [...i && L.length > 0 ? [{
                id: "move-to-project",
                icon: d.td,
                message: E.moveToProject,
                enabled: !S,
                tooltipMessage: A,
                submenu: L
            }] : [], ...null == s ? [] : [{
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
            let s = n(o.K, e);
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
                return null == I && null != C && "string" == typeof T && null != (0, m.j)(j, T) && "tpp" !== e && "flora" !== e && (0, p.L)(j, C, t.getChatGptPrompt().systemHints), t
            }), b[2] = C, b[3] = T, b[4] = I, b[5] = w, b[6] = j, b[7] = n) : n = b[7];
            let [S] = (0, l.useState)(n);
            b[8] !== S || b[9] !== x ? (s = x ?? S(), b[8] = S, b[9] = x, b[10] = s) : s = b[10];
            let E = s,
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
    GKsW: (function(e, t, n) {
        var a = n("ABep"),
            s = n("QosV"),
            r = n("iTtm"),
            o = n("zd8w"),
            i = n("GaA7"),
            l = n("OWtl"),
            c = n("tSEg"),
            d = n("n5oN");
        let u = (0, r.u)(l.a, () => []);

        function h(e) {
            let t, n = (0, s.c)(2),
                {
                    title: o
                } = e,
                i = (0, r.y)(c.a),
                l = (0, r.x)(d.a, `${i.value.pathname}${i.value.search??""}`),
                u = o ?? l;
            return n[0] !== u ? (t = (0, a.jsx)(p, {
                title: u
            }), n[0] = u, n[1] = t) : t = n[1], t
        }

        function p(e) {
            let t, n, a, c, d, h, p = (0, s.c)(13),
                {
                    title: v,
                    nativeTitle: y
                } = e,
                b = void 0 === y ? v : y,
                x = (0, r.y)(l.a),
                [C] = (0, o.useState)(m);
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
                g(v);
                let t = document.title;
                return () => {
                    document.title === t && g(e)
                }
            }, h = [v], p[10] = v, p[11] = d, p[12] = h) : (d = p[11], h = p[12]), (0, o.useEffect)(d, h), null
        }

        function m() {
            return Symbol()
        }

        function g(e) {
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
        var a = n("iTtm"),
            s = n("ASxG"),
            r = n("hOO0"),
            o = n("OWtl"),
            i = n("kpIY"),
            l = n("Nwp9");
        let c = "selected-plugin-links-v1",
            d = s.record(s.string(), s.string().nullable().catch(null)).catch({}),
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

        function m(e, t) {
            let n = (0, r.a)(t);
            return e.filter(e => (0, r.a)(e.connector_id) === n && "HIDDEN" !== e.visibility && !e.id.startsWith("implicit_link::"))
        }

        function g(e, t, n) {
            return e.some(e => (0, r.c)(e, t) && "OAUTH" === e.auth_type && "DISABLED_BY_ADMIN" !== e.connector_status && null == e.unavailable_reason && e.owners.some(e => "USER" === e.type && e.id === n))
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
            a: () => m,
            b: () => g,
            d: () => p
        }, {
            c: h
        })
    }),
    RZBv: (function(e, t, n) {
        var a = n("ABep"),
            s = n("QosV"),
            r = n("xSOA"),
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
            let t, n, C, _, I, w, T, j, S, E = (0, s.c)(36),
                {
                    conversationId: A,
                    kind: P
                } = e,
                M = (0, o.y)(m.a),
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
                            s.close(), N()
                        }
                    },
                    id: `unarchive-thread-${P}:${A}`
                })
            }, E[16] = A, E[17] = N, E[18] = P, E[19] = M, E[20] = I) : I = E[20], E[21] !== R || E[22] !== M ? (w = (e, t, n) => {
                n?.(null), M.get(h.f).danger(R.formatMessage(g.a.unarchiveError), {
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
                isPending: L,
                isSuccess: B
            } = (0, r.a)(T), D = B || F?.status === "restored", H = L || F?.status === "restoring";
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