export const __rspack_esm_ids = [782912];
export const __webpack_modules__ = {
    ylLY: (function(e, t, n) {
        let a = (0, n("zd8w").createContext)(null);
        n.d(t, {}, {
            a: a
        })
    }),
    bn59: (function(e, t, n) {
        n.d(t, {
            a: () => G,
            ChatSeatAccessScreen: () => F
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("BolX"),
            o = n("zd8w"),
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
            b = n("rLEB"),
            x = n("Ietk"),
            w = n("twmu"),
            C = n("EOo5"),
            _ = n("Kwur"),
            j = n("udGC"),
            S = n("aTcy"),
            I = n("JNtf"),
            T = n("mUDD"),
            E = n("Ot7V"),
            P = n("SGsN"),
            A = n("DAA7"),
            M = n("yGJW"),
            k = n("GDNt");

        function R(e) {
            let t, n, l, c, d, u, p, v, y, k, R, B, F, z, G, L, D, H, W, q, U, K, V = (0, r.c)(70),
                {
                    account: Q,
                    accountId: $,
                    userId: Y,
                    onClose: X,
                    onSwitchToWork: J
                } = e,
                Z = (0, s.y)(m.a),
                ee = (0, f.a)(),
                {
                    email: et
                } = (0, C.a)(),
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
            V[2] !== el || V[3] !== es ? (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE", el ? l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY" : es && (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE"), V[2] = el, V[3] = es, V[4] = l) : l = V[4], V[5] !== Q.account.account_user_role || V[6] !== l || V[7] !== ei || V[8] !== Z ? (c = (e, t) => {
                (0, M.a)(Z, g.ud, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: Q.account.account_user_role ?? void 0,
                    hasPaidSubscription: ei
                })
            }, V[5] = Q.account.account_user_role, V[6] = l, V[7] = ei, V[8] = Z, V[9] = c) : c = V[9];
            let ed = c;
            V[10] !== X ? (d = () => {
                X(), (0, E.f)({
                    href: new URL("/codex/cloud", S.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, V[10] = X, V[11] = d) : d = V[11];
            let eu = d;
            V[12] !== Q.account.subscription_seat_pools_enabled || V[13] !== $ || V[14] !== eu || V[15] !== el || V[16] !== et || V[17] !== ee || V[18] !== es || V[19] !== ed || V[20] !== X || V[21] !== J || V[22] !== en || V[23] !== Z || V[24] !== Y ? (u = async () => {
                if ("requesting" !== en) {
                    if (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), es && !el) {
                        let e = new URL("/admin/members", S.h);
                        e.searchParams.set("account_id", $), et && e.searchParams.set("search", et);
                        let t = e.toString(),
                            n = (0, A.c)(Z, t, $),
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
                            if (Q.account.subscription_seat_pools_enabled ? await _.Request.safePost("/accounts/{account_id}/users/{user_id}/seat/update", {
                                    parameters: {
                                        path: {
                                            account_id: $,
                                            user_id: Y
                                        }
                                    },
                                    requestBody: {
                                        operation: "switch",
                                        seat_type: "default"
                                    },
                                    isExpectedError: N
                                }) : await _.Request.safePatch("/accounts/{account_id}/users/{user_id}", {
                                    parameters: {
                                        path: {
                                            account_id: $,
                                            user_id: Y
                                        }
                                    },
                                    additionalHeaders: {
                                        "X-OpenAI-Account-User-Update-Source": "web_usage_based_workspace_access_modal"
                                    },
                                    requestBody: {
                                        seat_type: "default"
                                    }
                                }), !er.current) return;
                            (0, j.e)(Z), await (0, x.g)("accounts-check"), await Promise.all([Z.query.invalidate(w.b, $), Z.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), er.current && X()
                        } else {
                            if ((0, b.c)(Z, $), await _.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: $
                                        }
                                    }
                                }), !er.current) return;
                            J ? (X(), J()) : eu(), Z.get(P.f).success(ee.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted",
                                description: "Success toast shown after requesting ChatGPT access from the modal"
                            }))
                        }
                    } catch (e) {
                        er.current && ea(O(e) ?? "error")
                    }
                }
            }, V[12] = Q.account.subscription_seat_pools_enabled, V[13] = $, V[14] = eu, V[15] = el, V[16] = et, V[17] = ee, V[18] = es, V[19] = ed, V[20] = X, V[21] = J, V[22] = en, V[23] = Z, V[24] = Y, V[25] = u) : u = V[25];
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
            V[30] !== ed || V[31] !== X ? (y = e => {
                e || (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED"), X())
            }, V[30] = ed, V[31] = X, V[32] = y) : y = V[32], V[33] !== eh ? (k = e => {
                e.preventDefault(), eh()
            }, V[33] = eh, V[34] = k) : k = V[34], V[35] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, a.jsx)(I.e, {
                className: "heading-lg font-semibold",
                children: ep
            }), V[35] = R) : R = V[35], V[36] !== em ? (B = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [R, (0, a.jsx)(I.d, {
                    className: "text-lg leading-6 text-secondary",
                    children: em
                })]
            }), V[36] = em, V[37] = B) : B = V[37];
            let eg = "requesting" === en,
                ef = "requesting" === en;
            return V[38] !== ec ? (F = ec ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.updateSeatButton",
                defaultMessage: "Update seat",
                description: "Updates the current user's seat to include ChatGPT"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access",
                description: "Requests ChatGPT access from a workspace administrator"
            }), V[38] = ec, V[39] = F) : F = V[39], V[40] !== eg || V[41] !== ef || V[42] !== F ? (z = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: eg,
                disabled: ef,
                children: F
            }), V[40] = eg, V[41] = ef, V[42] = F, V[43] = z) : z = V[43], V[44] !== eu || V[45] !== ed || V[46] !== X || V[47] !== J ? (G = () => {
                J ? (X(), J()) : (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), eu())
            }, V[44] = eu, V[45] = ed, V[46] = X, V[47] = J, V[48] = G) : G = V[48], V[49] !== J ? (L = J ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work",
                description: "Switches from the Chat access explanation to the available Work surface"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex",
                description: "Returns to Codex from the Chat access explanation"
            }), V[49] = J, V[50] = L) : L = V[50], V[51] !== G || V[52] !== L ? (D = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: G,
                children: L
            }), V[51] = G, V[52] = L, V[53] = D) : D = V[53], V[54] !== z || V[55] !== D ? (H = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [z, D]
            }), V[54] = z, V[55] = D, V[56] = H) : H = V[56], V[57] !== ee || V[58] !== en ? (W = null != en && "requesting" !== en ? (0, a.jsx)("p", {
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
            }), V[60] = B, V[61] = H, V[62] = W, V[63] = q) : q = V[63], V[64] !== q || V[65] !== k ? (U = (0, a.jsx)(T.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: k,
                children: q
            }), V[64] = q, V[65] = k, V[66] = U) : U = V[66], V[67] !== U || V[68] !== y ? (K = (0, a.jsx)(I.a, {
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
        var B = n("pBDs");

        function F(e) {
            let t, n, o = (0, r.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, s.y)(m.a),
                p = (0, s.z)(B.a),
                g = (0, s.z)(d.u),
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
                f = (0, s.z)(B.a),
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

        function G(e) {
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
    Pyg2: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("BolX"),
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
            o = n("kjQz"),
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
        var a = n("BolX"),
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
            let d = n(s.t, r.conversationId),
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
            s = n("BolX"),
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
                let a = n(c.q, e),
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
                        messageId: r,
                        libraryFileId: s,
                        query: o
                    }
                    of n(u, e)) {
                    if (a.has(s)) continue;
                    let e = o.data;
                    e?.mime_type === "text/markdown" && "owned" === e.access_kind && a.set(s, {
                        automationId: t,
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
                isEqual: r()
            }),
            p = (0, s.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(h, e), r = n(c.q, e), s = r?.filter(e => "list" !== e.source && a.some(t => t.automationId === e.automationId)), o = s?.at(-1)?.messageId;
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
    S0ko: (function(e, t, n) {
        n.d(t, {
            BusinessAgentConversationHeader: () => F,
            BusinessAgentHomeHero: () => z
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("BolX"),
            o = n("nlNF"),
            i = n("OWtl"),
            l = n("OOaz"),
            c = n("dQRk"),
            d = n("nUDt"),
            u = n("grx7"),
            h = n("zd8w"),
            p = n("oyxz"),
            m = n("L6H2"),
            g = n("MM0V"),
            f = n("Sm6l"),
            v = n("JNtf"),
            y = n("mUDD"),
            b = n("ZtSy"),
            x = n("HOLv"),
            w = n("mEbU"),
            C = n("RU3e"),
            _ = n("UIU6"),
            j = n("Bbed"),
            S = n("T1PX");
        let I = (0, j.a)(async () => {
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
                return (0, a.jsx)(P, {})
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
            let c = s.looseObject({
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
                } = t, [r, s] = (0, h.useState)(!1), [o] = (0, h.useState)(() => {
                    let e = structuredClone(c);
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
            errorFallback: (0, a.jsx)(P, {})
        });

        function T(e) {
            let t, n = (0, r.c)(2),
                s = (0, S.a)();
            return n[0] !== s ? (t = (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden",
                children: s ? (0, a.jsx)(P, {}) : (0, a.jsx)(E, {})
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function E(e) {
            let t, n, o, i = (0, r.c)(7),
                l = (0, h.useRef)(null),
                c = (0, w.a)(l),
                d = (0, s.z)(C.b),
                [u, p] = (0, h.useState)(!1);
            if (u) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(P, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(P, {}), i[1] = t) : t = i[1], i[2] !== c || i[3] !== d ? (n = c && !0 === d ? (0, a.jsx)(I, {
                onError: () => p(!0)
            }) : null, i[2] = c, i[3] = d, i[4] = n) : n = i[4], i[5] !== n ? (o = (0, a.jsx)(_.a, {
                name: "BusinessAgentDisclosureHero",
                fallback: t,
                children: (0, a.jsx)("div", {
                    ref: l,
                    className: "absolute inset-0",
                    children: n
                })
            }), i[5] = n, i[6] = o) : o = i[6], o
        }

        function P(e) {
            let t, n = (0, r.c)(1);
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("img", {
                className: "absolute inset-0 size-full object-cover",
                alt: "",
                draggable: !1,
                referrerPolicy: "no-referrer",
                src: "https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-static-ade5a622504d70d9.png"
            }), n[0] = t) : t = n[0], t
        }
        var A = {
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
            M = {
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

        function k(e) {
            let t, n, s, o, i, l = (0, r.c)(11),
                {
                    state: c
                } = e,
                d = "ready" === c.status ? c.context : c,
                u = d.businessName ?? null,
                h = d.logoUrl ?? null;
            return l[0] !== u || l[1] !== h ? (t = (0, a.jsx)(m.a, {
                alt: "",
                name: u,
                size: "md",
                src: h
            }), l[0] = u, l[1] = h, l[2] = t) : t = l[2], l[3] !== d.businessName ? (n = (0, a.jsx)("span", {
                className: "truncate text-sm font-semibold",
                children: (0, a.jsx)(O, {
                    businessName: d.businessName
                })
            }), l[3] = d.businessName, l[4] = n) : n = l[4], l[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)("span", {
                className: "truncate text-xs font-normal text-secondary",
                children: (0, a.jsx)(p.a, {
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

        function R(e) {
            let t, n = (0, r.c)(14),
                {
                    state: s,
                    onStarterPromptSelect: o
                } = e,
                i = "ready" === s.status ? s.context : s;
            if (n[0] !== i.businessName || n[1] !== i.logoUrl || n[2] !== i.showConversationStarters || n[3] !== o || n[4] !== s.context || n[5] !== s.status) {
                let e, r, l, c = "ready" === s.status && i.showConversationStarters ? s.context.conversationStarters?.slice(0, 4) : void 0,
                    d = i.businessName ?? null,
                    u = i.logoUrl ?? null;
                n[7] !== d || n[8] !== u ? (e = (0, a.jsx)(m.a, {
                    alt: "",
                    name: d,
                    size: "lg",
                    src: u
                }), n[7] = d, n[8] = u, n[9] = e) : e = n[9], n[10] !== i.businessName ? (r = (0, a.jsx)("h1", {
                    className: "heading-xl font-normal text-default select-none",
                    children: (0, a.jsx)(O, {
                        businessName: i.businessName
                    })
                }), n[10] = i.businessName, n[11] = r) : r = n[11], n[12] !== s.status ? (l = "ready" !== s.status ? (0, a.jsx)(g.a, {
                    ariaLive: "polite",
                    role: "failed" === s.status ? "alert" : "status",
                    type: "failed" === s.status ? "error" : "normal",
                    content: "failed" === s.status ? (0, a.jsx)(p.a, {
                        id: "chatgptConversations.businessAgent.unavailable",
                        defaultMessage: "This Business Agent is unavailable. Please return to the ad and try again",
                        description: "Error on a Business Agent chat destination when creating its interaction fails; sending is unavailable and the user can retry from the original ad"
                    }) : (0, a.jsx)(p.a, {
                        id: "chatgptConversations.businessAgent.loading",
                        defaultMessage: "Opening Business Agent…",
                        description: "Loading status on a Business Agent chat destination while its interaction is being created"
                    })
                }) : null, n[12] = s.status, n[13] = l) : l = n[13], t = (0, a.jsxs)("div", {
                    className: "mx-auto flex w-[min(100%,var(--thread-content-max-width))] min-w-0 flex-col items-center gap-3 px-panel text-center",
                    children: [e, r, l, null != c && (c.length > 1 || 1 === c.length && "ready" === s.status && !0 === s.context.disablePrefill) ? (0, a.jsx)("div", {
                        className: "mt-3 flex flex-wrap justify-center gap-2 select-none",
                        children: c.map(e => (0, a.jsx)(f.a, {
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

        function N(e) {
            let t, n, s, o, i, l, c, d, u, m, g, w, C, _, j, S, I, E = (0, r.c)(29),
                {
                    context: P,
                    onPresented: k,
                    onContinue: R,
                    onDismiss: N
                } = e,
                [O, B] = (0, h.useState)(!0 === P.showDisclosureModal);
            E[0] !== P.privacyPolicyUrl ? (t = function(e) {
                if (null == e) return null;
                try {
                    let t = new URL(e);
                    return ("https:" === t.protocol || "http:" === t.protocol) && t.hostname ? t.href : null
                } catch {
                    return null
                }
            }(P.privacyPolicyUrl), E[0] = P.privacyPolicyUrl, E[1] = t) : t = E[1];
            let F = t;
            return E[2] !== N ? (n = e => {
                B(e), e || N?.()
            }, E[2] = N, E[3] = n) : n = E[3], E[4] !== k ? (s = {
                "data-theme": "light",
                onOpenAutoFocus: k
            }, E[4] = k, E[5] = s) : s = E[5], E[6] !== R ? (o = e => {
                e.preventDefault(), B(!1), R?.()
            }, E[6] = R, E[7] = o) : o = E[7], E[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(T, {}), E[8] = i) : i = E[8], E[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(v.e, {
                className: "heading-lg text-center leading-7 font-semibold",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.disclosureTitle",
                    defaultMessage: "About chatting with businesses",
                    description: "Title of the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It introduces what business AI chats offer and how chat privacy works. Keep it neutral and concise; there are no placeholders."
                })
            }), E[9] = l) : l = E[9], E[10] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(x.a, {
                className: "shrink-0",
                asset: A
            }), E[10] = c) : c = E[10], E[11] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.disclosureQuestionsTitle",
                    defaultMessage: "Ask questions and compare options",
                    description: "Short heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It explains that they can ask about the business and compare options before deciding. Keep the tone informative; there are no placeholders."
                })
            }), E[11] = d) : d = E[11], E[12] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [c, (0, a.jsxs)("div", {
                    className: "flex min-w-0 flex-col gap-0.5",
                    children: [d, (0, a.jsx)("p", {
                        className: "text-base leading-snug tracking-tight text-secondary",
                        children: (0, a.jsx)(p.a, {
                            id: "chatgptConversations.businessAgent.disclosureQuestionsBody",
                            defaultMessage: "Learn what the business offers and ask detailed follow-ups as you decide.",
                            description: "Body beneath the questions-and-comparison heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It explains that they can learn about the business and ask further questions while deciding. Use a neutral tone; there are no placeholders."
                        })
                    })]
                })]
            }), E[12] = u) : u = E[12], E[13] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, a.jsx)(x.a, {
                className: "shrink-0",
                asset: M
            }), E[13] = m) : m = E[13], E[14] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.disclosureUsageTrendsTitle",
                    defaultMessage: "Your chats remain private",
                    description: "Short privacy heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. Reassure the person that their conversations with business AI agents remain private from the businesses. There are no placeholders."
                })
            }), E[14] = g) : g = E[14], E[15] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [l, (0, a.jsx)(v.d, {
                    asChild: !0,
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [u, (0, a.jsxs)("div", {
                            className: "flex items-start gap-3",
                            children: [m, (0, a.jsxs)("div", {
                                className: "flex min-w-0 flex-col gap-0.5",
                                children: [g, (0, a.jsx)("p", {
                                    className: "text-base leading-snug tracking-tight text-secondary",
                                    children: (0, a.jsx)(p.a, {
                                        id: "chatgptConversations.businessAgent.disclosureUsageTrendsBody",
                                        defaultMessage: "Businesses can’t see your chats or your personal info — just overall usage trends to help improve their AI agent.",
                                        description: "Privacy explanation in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. The business cannot see the chat or personal information and only receives overall usage trends to improve its AI agent. Use a clear neutral tone; there are no placeholders or links."
                                    })
                                })]
                            })]
                        })]
                    })
                })]
            }), E[15] = w) : w = E[15], E[16] !== F ? (C = null == F ? null : (0, a.jsx)(b.a, {
                href: F,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy",
                    description: "Link to the business-provided privacy policy in the introductory Business Agent dialog. Opens separately without accepting or dismissing the dialog. Keep the label short."
                })
            }), E[16] = F, E[17] = C) : C = E[17], E[18] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, a.jsx)("div", {
                className: "flex justify-center",
                children: (0, a.jsx)(f.a, {
                    color: "primary",
                    size: "dialogAction",
                    type: "submit",
                    children: (0, a.jsx)(p.a, {
                        id: "chatgptConversations.businessAgent.disclosureStartChat",
                        defaultMessage: "Start chatting",
                        description: "Short button label in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. Dismisses the information dialog so they can start chatting. It does not send a message or change a privacy setting; there are no placeholders."
                    })
                })
            }), E[18] = _) : _ = E[18], E[19] !== C ? (j = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [w, C, _]
                })]
            }), E[19] = C, E[20] = j) : j = E[20], E[21] !== j || E[22] !== o ? (S = (0, a.jsx)(y.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: o,
                children: j
            }), E[21] = j, E[22] = o, E[23] = S) : S = E[23], E[24] !== O || E[25] !== S || E[26] !== n || E[27] !== s ? (I = (0, a.jsx)(v.a, {
                open: O,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: s,
                children: S
            }), E[24] = O, E[25] = S, E[26] = n, E[27] = s, E[28] = I) : I = E[28], I
        }

        function O(e) {
            let t, n = (0, r.c)(2),
                {
                    businessName: s
                } = e;
            return n[0] !== s ? (t = s?.trim() ? (0, a.jsx)(a.Fragment, {
                children: s
            }) : (0, a.jsx)(p.a, {
                id: "chatgpt.ads.business_agent.disclosure.fallback_name",
                defaultMessage: "Business Agent",
                description: "Fallback heading in the compact data-sharing disclosure shown at the top of every organic or sponsored Business Agent conversation. Use a short neutral title that fits on one line. This appears when the business has not supplied a display name."
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var B = n("zHQF");

        function F(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: o,
                    fallback: i
                } = e,
                l = (0, s.x)(c.u, o);
            return n[0] !== i || n[1] !== l ? (t = null == l ? i : (0, a.jsx)(k, {
                state: l
            }), n[0] = i, n[1] = l, n[2] = t) : t = n[2], t
        }

        function z(e) {
            let t, n, d, h = (0, r.c)(18),
                {
                    conversationId: p,
                    fallback: m,
                    onStarterPromptSelect: g
                } = e,
                f = (0, s.y)(i.a),
                v = (0, s.x)(c.u, p),
                y = (0, s.z)(v?.status === "failed" ? o.c : null),
                b = y?.state?.businessProfileChat;
            if (v?.status === "failed" && b && y?.state?.initialChatGptConversationId === p && y.state.initialChatGptBusinessAgentGizmoId === b.gizmoId && (0, l.e)(p)) {
                let e;
                if (v.accountId !== b.accountId || null != v.userId && v.userId !== b.userId) {
                    let e;
                    return h[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(B.b, {}), h[0] = e) : e = h[0], e
                }
                return h[1] !== p || h[2] !== b || h[3] !== f || h[4] !== v.businessName || h[5] !== v.logoUrl ? (e = (0, a.jsx)(B.a, {
                    retry: () => void(0, u.a)(f, p, b, {
                        businessName: v.businessName,
                        logoUrl: v.logoUrl
                    })
                }), h[1] = p, h[2] = b, h[3] = f, h[4] = v.businessName, h[5] = v.logoUrl, h[6] = e) : e = h[6], e
            }
            return null == v ? m : (h[7] !== m || h[8] !== g || h[9] !== v ? (t = "ready" !== v.status || v.context.showConversationStarters ? (0, a.jsx)(R, {
                state: v,
                onStarterPromptSelect: g
            }) : m, h[7] = m, h[8] = g, h[9] = v, h[10] = t) : t = h[10], h[11] !== p || h[12] !== v.context || h[13] !== v.status ? (n = "ready" === v.status ? (0, a.jsx)(G, {
                context: v.context,
                conversationId: p
            }, v.context.interactionId) : null, h[11] = p, h[12] = v.context, h[13] = v.status, h[14] = n) : n = h[14], h[15] !== t || h[16] !== n ? (d = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), h[15] = t, h[16] = n, h[17] = d) : d = h[17], d)
        }

        function G(e) {
            let t, n, o, l = (0, r.c)(11),
                {
                    context: c,
                    conversationId: u
                } = e,
                h = (0, s.y)(i.a),
                p = (0, s.z)(d.b),
                m = p?.conversationId === u && p.ready;
            return m || !0 === c.showDisclosureModal ? (l[0] !== m || l[1] !== c || l[2] !== p ? (t = m ? {
                ...c,
                showDisclosureModal: !p.presented
            } : c, l[0] = m, l[1] = c, l[2] = p, l[3] = t) : t = l[3], l[4] !== m || l[5] !== u || l[6] !== h ? (n = m ? () => (0, d.a)(h, u) : void 0, l[4] = m, l[5] = u, l[6] = h, l[7] = n) : n = l[7], l[8] !== t || l[9] !== n ? (o = (0, a.jsx)(N, {
                context: t,
                onPresented: n
            }), l[8] = t, l[9] = n, l[10] = o) : o = l[10], o) : null
        }
    }),
    YiPf: (function(e, t, n) {
        n.d(t, {
            a: () => v
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("BolX"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("jqIZ"),
            c = n("SGsN"),
            d = n("OWtl");

        function u(e) {
            let t, n, a, i = (0, r.c)(11),
                {
                    isUnavailable: u,
                    message: h,
                    homePath: p,
                    onUnavailable: m,
                    children: g
                } = e,
                f = (0, s.y)(d.a),
                v = (0, l._)(),
                y = (0, o.useRef)(!1);
            i[0] !== p || i[1] !== h || i[2] !== v || i[3] !== m || i[4] !== f ? (t = () => {
                m?.(), f.get(c.f).info(h, {
                    id: "conversation-inaccessible",
                    duration: 5
                }), v(p, {
                    replace: !0
                })
            }, i[0] = p, i[1] = h, i[2] = v, i[3] = m, i[4] = f, i[5] = t) : t = i[5];
            let b = (0, o.useEffectEvent)(t);
            return i[6] !== u || i[7] !== b ? (n = () => {
                u && !y.current && (y.current = !0, b())
            }, i[6] = u, i[7] = b, i[8] = n) : n = i[8], i[9] !== u ? (a = [u], i[9] = u, i[10] = a) : a = i[10], (0, o.useEffect)(n, a), u ? null : g
        }
        var h = n("IxgT"),
            p = n("yGJW"),
            m = n("eShZ"),
            g = n("ZhoB");
        let f = new WeakSet;

        function v(e) {
            let t, n, o, l, c, f, v, b, x = (0, r.c)(24),
                {
                    conversationId: w,
                    error: C,
                    loadError: _,
                    canRetry: j,
                    isWorkConversation: S,
                    showChatFallback: I,
                    children: T
                } = e,
                E = (0, s.y)(d.a),
                P = (0, s.z)(void 0 !== I && I && !1 === S ? h.b : null);
            if (null != P) return P;
            x[0] !== w || x[1] !== S || x[2] !== E ? (t = (e, t) => {
                (0, g.e)(E.get(p.c).logProductEvent, {
                    conversationId: w,
                    error: e,
                    isWorkConversation: S,
                    canRetry: t
                })
            }, x[0] = w, x[1] = S, x[2] = E, x[3] = t) : t = x[3];
            let A = t;
            x[4] !== j || x[5] !== _ || x[6] !== A ? (n = () => A(_, j), x[4] = j, x[5] = _, x[6] = A, x[7] = n) : n = x[7], x[8] !== _ || x[9] !== n ? (o = (0, a.jsx)(y, {
                error: _,
                onShown: n
            }), x[8] = _, x[9] = n, x[10] = o) : o = x[10], x[11] !== T || x[12] !== o ? (l = (0, a.jsxs)(a.Fragment, {
                children: [o, T]
            }), x[11] = T, x[12] = o, x[13] = l) : l = x[13];
            let M = l;
            return x[14] !== C ? (c = C instanceof m.FetchError && !(0, m.d)(C) && (403 === C.status || 404 === C.status), x[14] = C, x[15] = c) : c = x[15], x[16] !== C || x[17] !== A ? (f = () => A(C, !1), x[16] = C, x[17] = A, x[18] = f) : f = x[18], x[19] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                id: "chatgptConversations.conversationInaccessible",
                defaultMessage: "You don’t have access to this conversation. Make sure you’re logged in to the right account, or ask the conversation owner to send you a share link.",
                description: "Info toast shown when a user opens a ChatGPT conversation that does not exist or that they cannot access. The user is returned to Home and can switch accounts or ask the owner for a share link."
            }), x[19] = v) : v = x[19], x[20] !== M || x[21] !== c || x[22] !== f ? (b = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(u, {
                        isUnavailable: c,
                        homePath: "/",
                        onUnavailable: f,
                        message: v,
                        children: M
                    })
                })]
            }), x[20] = M, x[21] = c, x[22] = f, x[23] = b) : b = x[23], b
        }

        function y(e) {
            let t, n, a = (0, r.c)(5),
                {
                    error: s,
                    onShown: i
                } = e,
                l = (0, o.useEffectEvent)(i);
            return a[0] !== s || a[1] !== l ? (t = () => {
                if (null != s) {
                    if ((0, m.d)(s)) {
                        if (f.has(s)) return;
                        f.add(s)
                    }
                    l()
                }
            }, a[0] = s, a[1] = l, a[2] = t) : t = a[2], a[3] !== s ? (n = [s], a[3] = s, a[4] = n) : n = a[4], (0, o.useEffect)(t, n), null
        }
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
            let a = e.get(p.l).find(n => e.get(p.j, n) === t);
            if (!(null == a || e.get(p.B, a))) return {
                id: t,
                conversation_origin: e.get(p.y, a),
                gizmo_id: e.get(p.S, a),
                is_starred: !1,
                title: e.get(p.db, a)
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
                null != r && (0, v.d)(e, n) && (0, u.a)(r, e.get(a.h), e.get(a.g)) && (0, v.U)({
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
                let s = b(e, t);
                if (null == s || !(0, u.b)(s, e.get(a.h), e.get(a.g), e.get(v.g, s.conversation_id))) {
                    if (null != n) throw Error("Chat is unavailable for renaming.");
                    return
                }
                let o = e.get(p.E, t) ? e.get(p.db, t) : s.title,
                    l = (0, m.a)(s.context_scopes) ? s.gizmo_id : void 0,
                    c = t => (0, v.Q)({
                        scope: e,
                        conversationId: s.conversation_id,
                        previousTitle: o,
                        title: t
                    });
                if (null != n) {
                    if (null != l && e.get(g.f)?.projectId !== l) throw Error("Chat is locked.");
                    return c(n)
                }(0, r.f)(e, i.SidebarRenameDialog, {
                    initialValue: o ?? "",
                    draftKey: s.conversation_id,
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
                    w = (0, s.a)();
                return y[0] !== b || y[1] !== w || y[2] !== x ? (t = () => {
                    (0, h.c)(x, b).catch(() => {
                        x.get(i.f).danger(w.formatMessage(u.a.markUnreadError), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.sidebar.markUnreadError"
                            }
                        })
                    })
                }, y[0] = b, y[1] = w, y[2] = x, y[3] = t) : t = y[3], (0, o.a)("markThreadUnread", t), y[4] !== b || y[5] !== x ? (n = () => void(0, d.renameActiveChatGptConversation)(x, b), p = [b, x], y[4] = b, y[5] = x, y[6] = n, y[7] = p) : (n = y[6], p = y[7]), (0, l.d)("rename-thread", n, p), y[8] !== b || y[9] !== x ? (m = () => (0, d.c)(x, b), g = [b, x], y[8] = b, y[9] = x, y[10] = m, y[11] = g) : (m = y[10], g = y[11]), (0, l.d)("toggle-thread-pin", m, g), y[12] !== b || y[13] !== x ? (f = () => (0, d.a)(x, b), v = [b, x], y[12] = b, y[13] = x, y[14] = f, y[15] = v) : (f = y[14], v = y[15]), (0, l.d)("archive-thread", f, v), null
            }
        })
    }),
    nYu4: (function(e, t, n) {
        n.d(t, {
            a: () => iw,
            ChatGptConversationPage: () => ix
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("T0Rc"),
            o = n("BolX"),
            i = n("hV9T"),
            l = n("AuIy"),
            c = n("zd8w"),
            d = n("Wf1j"),
            u = n("jqIZ"),
            h = n("bn59"),
            p = n("OY84"),
            m = n("StMt"),
            g = n("E8Sp"),
            f = n("OpyH"),
            v = n("O0M0"),
            y = n("Cslg"),
            b = n("OFP1"),
            x = n("ItIk"),
            w = (n("AZW7"), n("uxPT")),
            C = n("GMTh"),
            _ = n("YiPf"),
            j = n("x4uR"),
            S = n("YTsa"),
            I = n("DWXw"),
            T = n("mwa5"),
            E = n("UxN3"),
            P = n("XcNx"),
            A = n("GKsW"),
            M = n("SkIz"),
            k = n("hsSf"),
            R = n("Xc94"),
            N = n("Sgih"),
            O = n("HwRo"),
            B = n("qwxA"),
            F = n("gOnr"),
            z = n("KXCj"),
            G = n("pAFY");
        n("kErH");
        var L = n("dJBt"),
            D = n("FR8U"),
            H = n("UMxD"),
            W = n("JhDO"),
            q = n("tSEg"),
            U = n("kl6F"),
            K = n("kfGJ"),
            V = n("khOd"),
            Q = n("xSOA"),
            $ = n("oyxz"),
            Y = n("MYlA"),
            X = n("OtLV"),
            J = n("sfmI"),
            Z = n("QmkR"),
            ee = n("Yrvy"),
            et = n("HOLv"),
            en = n("SGsN"),
            ea = n("nlNF"),
            er = n("OWtl"),
            es = n("MRlq"),
            eo = n("vNLk"),
            ei = n("PCxL"),
            el = n("aZgH"),
            ec = n("CzoK");

        function ed(e) {
            let t, n, s, i, l, h, p, m, g, f, v, b, x, w, C = (0, r.c)(56),
                {
                    conversationId: _,
                    kind: j
                } = e,
                S = (0, o.y)(er.a),
                I = (0, d.a)(),
                T = (0, u.Y)(),
                E = (0, u._)(),
                P = (0, o.z)(ei.h),
                A = (0, o.z)(y.h),
                M = (0, o.z)(y.g);
            C[0] !== A || C[1] !== _ || C[2] !== M || C[3] !== j || C[4] !== P ? (t = "chatgpt" === j && P?.kind === "chatgpt" && P.conversation.id === _ && (0, J.a)(P.conversation, A, M) ? P.conversation : null, C[0] = A, C[1] = _, C[2] = M, C[3] = j, C[4] = P, C[5] = t) : t = C[5];
            let k = t,
                [R, N] = (0, c.useState)(!1),
                {
                    mutate: O,
                    isPending: B
                } = (0, ee.a)(_);
            C[6] !== T.hash || C[7] !== T.pathname || C[8] !== T.search || C[9] !== E || C[10] !== S ? (n = () => {
                (0, ei.e)(S), E({
                    pathname: T.pathname,
                    search: T.search,
                    hash: T.hash
                }, {
                    replace: !0,
                    state: null
                })
            }, C[6] = T.hash, C[7] = T.pathname, C[8] = T.search, C[9] = E, C[10] = S, C[11] = n) : n = C[11];
            let F = n,
                z = (0, o.z)(ei.g);
            C[12] !== _ || C[13] !== z ? (s = z?.find(e => (0, el.a)(e.task) === `hosted:${_}`), C[12] = _, C[13] = z, C[14] = s) : s = C[14];
            let G = s;
            C[15] !== _ || C[16] !== S ? (i = () => {
                let e = S.get(ei.h);
                return null != e && (0, el.a)(e) === `hosted:${_}` ? (0, ei.d)(S, e) : void 0
            }, l = async () => {
                await (0, Z.V)({
                    scope: S,
                    conversationId: _
                })
            }, C[15] = _, C[16] = S, C[17] = i, C[18] = l) : (i = C[17], l = C[18]), C[19] !== _ || C[20] !== F || C[21] !== j || C[22] !== S ? (h = (e, t, n) => {
                n?.("restored");
                let r = S.get(en.f).info((0, a.jsx)($.a, {
                    ...es.a.unarchiveSuccessPlain
                }), {
                    leading: (0, a.jsx)(et.a, {
                        "aria-hidden": !1,
                        asset: ec.a
                    }),
                    primaryAction: {
                        label: (0, a.jsx)($.a, {
                            ...es.a.viewNow
                        }),
                        onClick: () => {
                            r.close(), F()
                        }
                    },
                    id: `unarchive-thread-${j}:${_}`
                })
            }, C[19] = _, C[20] = F, C[21] = j, C[22] = S, C[23] = h) : h = C[23], C[24] !== I || C[25] !== S ? (p = (e, t, n) => {
                n?.(null), S.get(en.f).danger(I.formatMessage(es.a.unarchiveError), {
                    errorAnalytics: {
                        toastId: "previewFooter.onError.unarchiveError"
                    }
                })
            }, C[24] = I, C[25] = S, C[26] = p) : p = C[26], C[27] !== i || C[28] !== l || C[29] !== h || C[30] !== p ? (m = {
                onMutate: i,
                mutationFn: l,
                onSuccess: h,
                onError: p
            }, C[27] = i, C[28] = l, C[29] = h, C[30] = p, C[31] = m) : m = C[31];
            let {
                mutate: L,
                isPending: D,
                isSuccess: H
            } = (0, Q.a)(m);
            C[32] !== O || C[33] !== E || C[34] !== S ? (g = e => {
                let t = S.get(ei.c),
                    n = S.get(ea.c),
                    a = S.get(y.f);
                O(e, {
                    onSuccess: () => {
                        if (N(!1), t !== S.get(ei.c) || n !== S.get(ea.c) || a !== S.get(y.f)) return;
                        S.set(ei.h, null);
                        let e = t?.pathname === ei.a ? t : null;
                        E(e ?? "/", {
                            replace: !0,
                            state: e?.state ?? null
                        })
                    }
                })
            }, C[32] = O, C[33] = E, C[34] = S, C[35] = g) : g = C[35];
            let W = g;
            C[36] !== k ? (f = null == k ? void 0 : () => N(!0), C[36] = k, C[37] = f) : f = C[37];
            let q = H || G?.status === "restored",
                U = D || G?.status === "restoring";
            return C[38] !== L ? (v = () => L(), C[38] = L, C[39] = v) : v = C[39], C[40] !== F || C[41] !== B || C[42] !== f || C[43] !== q || C[44] !== U || C[45] !== v ? (b = (0, a.jsx)(eo.a, {
                deleting: B,
                onDelete: f,
                restored: q,
                restoring: U,
                onUnarchive: v,
                onDone: F
            }), C[40] = F, C[41] = B, C[42] = f, C[43] = q, C[44] = U, C[45] = v, C[46] = b) : b = C[46], C[47] !== k || C[48] !== W || C[49] !== I || C[50] !== R || C[51] !== B ? (x = null != k && (0, a.jsx)(Y.a, {
                allowArtifactDeletion: !0,
                title: k.title?.trim() || I.formatMessage(X.a.newChat),
                open: R,
                isDeleting: B,
                onOpenChange: N,
                onConfirm: W
            }), C[47] = k, C[48] = W, C[49] = I, C[50] = R, C[51] = B, C[52] = x) : x = C[52], C[53] !== b || C[54] !== x ? (w = (0, a.jsxs)(a.Fragment, {
                children: [b, x]
            }), C[53] = b, C[54] = x, C[55] = w) : w = C[55], w
        }
        var eu = n("hZax"),
            eh = n("OMIV"),
            ep = n("JCJj"),
            em = n("KkZX"),
            eg = n("Nyub"),
            ef = n("rvFo"),
            ev = n("jZDY"),
            ey = n("Elta"),
            eb = n("eW0T"),
            ex = n("hOYb"),
            ew = n("eShZ"),
            eC = n("qqut"),
            e_ = n("CsbC"),
            ej = n("bIvi"),
            eS = n("ZhoB"),
            eI = n("dQRk"),
            eT = n("jAnS"),
            eE = n("tCyZ"),
            eP = n("S0ko"),
            eA = n("GgLN"),
            eM = n("KdfG"),
            ek = n("Yxds"),
            eR = n("z0li"),
            eN = n("YWcr"),
            eO = n("Bc5r"),
            eB = n("d2rV");

        function eF(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }
        var ez = n("iRMi"),
            eG = n("U2UX"),
            eL = n("ZU27"),
            eD = n("gbrq"),
            eH = n("K33Q"),
            eW = n("mv4d"),
            eq = n("w7Qu"),
            eU = n("dt5v"),
            eK = n("bWX0"),
            eV = n("smHt"),
            eQ = n("aoTb"),
            e$ = n("pqpL"),
            eY = n("uqg3"),
            eX = n("XcRr"),
            eJ = n("yGJW"),
            eZ = n("dk3M"),
            e0 = n("WFY2"),
            e1 = n("PFzG"),
            e2 = n("vldH"),
            e3 = n("ISgP"),
            e4 = n("t2JB"),
            e5 = n("DIH2"),
            e6 = n("aFoA"),
            e7 = n("H8lk"),
            e8 = n("rxj0"),
            e9 = n("f2PP"),
            te = n("S95W");
        let tt = (0, o.v)(er.a, e => null);
        var tn = n("DM5G"),
            ta = n("aLqR"),
            tr = n("VlIB"),
            ts = n("Ow2S"),
            to = n("mpie");
        let ti = (0, o.v)(er.a, e => null);
        var tl = n("SZi8"),
            tc = n("lBzi"),
            td = n("Ga6O"),
            tu = n("ESlL"),
            th = n("slpy"),
            tp = n("Sm6l"),
            tm = n("bf6R"),
            tg = n("Bbed"),
            tf = n("O666"),
            tv = n("tNq4"),
            ty = n("Skaw"),
            tb = n("PYCG");

        function tx(e) {
            let t, n, s, i, l, c, u, h, p, m, g = (0, r.c)(48),
                {
                    conversationId: f,
                    projectId: v,
                    sharedProjectConversation: b,
                    isReady: x,
                    isRestricted: w,
                    isStreaming: C
                } = e,
                _ = void 0 === v ? null : v,
                S = (0, o.y)(er.a),
                I = (0, d.a)(),
                T = (0, o.z)(y.e),
                E = (0, o.z)(null == _ ? null : ty.a),
                P = (0, o.x)(eI.j, f),
                {
                    data: A
                } = (0, o.x)(tc.chatGptConversationQueryById$, null == _ ? null : P),
                M = (0, o.x)(e6.a, null == _ ? null : P),
                k = (0, o.x)(eI.B, M);
            g[0] !== M || g[1] !== A || g[2] !== k || g[3] !== _ || g[4] !== P ? (t = null == A && null != M && null != P ? {
                id: P,
                gizmo_id: _,
                is_temporary_chat: k
            } : void 0, g[0] = M, g[1] = A, g[2] = k, g[3] = _, g[4] = P, g[5] = t) : t = g[5];
            let R = t,
                {
                    data: N
                } = (0, o.x)(j.b, _),
                O = null == _ ? null : (0, ty.b)(E ?? null, b ?? A ?? R, N),
                B = (0, o.x)(tv.b, f);
            g[6] !== I ? (n = I.formatMessage(X.a.headerShare), g[6] = I, g[7] = n) : n = g[7];
            let F = n,
                z = (0, o.x)(null == b ? tv.a : null, f),
                G = null != b || null != z,
                L = null;
            if (w || O?.type === "unavailable") {
                let e;
                g[8] !== I ? (e = I.formatMessage(X.a.shareDisabledRestricted), g[8] = I, g[9] = e) : e = g[9], L = e
            } else if (C && !G) {
                let e;
                g[10] !== I ? (e = I.formatMessage(X.a.shareDisabledStreaming), g[10] = I, g[11] = e) : e = g[11], L = e
            } else if (!x || !G) {
                let e;
                g[12] !== I ? (e = I.formatMessage(X.a.shareDisabledNotReady), g[12] = I, g[13] = e) : e = g[13], L = e
            }
            let D = null != L || B;
            g[14] !== D ? (s = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: D
            }, g[14] = D, g[15] = s) : s = g[15];
            let H = (0, o.x)(tf.b, s),
                W = "loaded" === T.status && "personal" === T.structure && (null == O || "snapshot" === O.type),
                q = null != L || B;
            g[16] !== q ? (i = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: q
            }, g[16] = q, g[17] = i) : i = g[17];
            let U = (0, o.x)(W ? tf.b : null, i);
            g[18] !== f || g[19] !== R || g[20] !== _ || g[21] !== S || g[22] !== b ? (l = () => {
                let e = null == b ? S.get(tv.c, f) : {
                    serverConversationId: b.conversation_id,
                    title: b.title,
                    currentNodeId: b.current_node ?? void 0
                };
                null != e && (0, tb.shareChatGptProjectConversation)(S, e.serverConversationId, e.title ?? "", _, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", b ?? R)
            }, g[18] = f, g[19] = R, g[20] = _, g[21] = S, g[22] = b, g[23] = l) : l = g[23];
            let K = l,
                V = F;
            if (!U && "loaded" === T.status && (null == O || "snapshot" === O.type)) {
                let e;
                g[24] !== T.structure || g[25] !== I ? (e = I.formatMessage("workspace" === T.structure ? X.a.shareWorkspaceTooltip : X.a.sharePublicTooltip), g[24] = T.structure, g[25] = I, g[26] = e) : e = g[26], V = e
            }
            let Q = L ?? V,
                $ = null != L || void 0,
                Y = null == L ? K : void 0;
            return g[27] !== B || g[28] !== H ? (c = !B && (H ? (0, a.jsx)(tm.M, {}) : (0, a.jsx)(tm.L, {})), g[27] = B, g[28] = H, g[29] = c) : c = g[29], g[30] !== B || g[31] !== F || g[32] !== $ || g[33] !== Y || g[34] !== c ? (u = (0, a.jsx)(tp.a, {
                "aria-disabled": $,
                "aria-label": F,
                color: "ghostActive",
                loading: B,
                className: "browser:[&_[data-loading-indicator]>svg]:size-6",
                radius: "large",
                size: "toolbar",
                uniform: !0,
                onClick: Y,
                children: c
            }), g[30] = B, g[31] = F, g[32] = $, g[33] = Y, g[34] = c, g[35] = u) : u = g[35], g[36] !== u || g[37] !== Q ? (h = (0, a.jsx)(th.a, {
                content: Q,
                children: u
            }), g[36] = u, g[37] = Q, g[38] = h) : h = g[38], g[39] !== f || g[40] !== B || g[41] !== _ || g[42] !== L || g[43] !== b ? (p = !1, g[39] = f, g[40] = B, g[41] = _, g[42] = L, g[43] = b, g[44] = p) : p = g[44], g[45] !== h || g[46] !== p ? (m = (0, a.jsxs)(a.Fragment, {
                children: [h, p]
            }), g[45] = h, g[46] = p, g[47] = m) : m = g[47], m
        }(0, tg.a)(async () => () => null);
        var tw = n("TRQ3"),
            tC = n("SZCv"),
            t_ = n.n(tC),
            tj = n("iqEK"),
            tS = n("XAP6"),
            tI = n("bzoy"),
            tT = n("LYS1"),
            tE = n("aZoZ"),
            tP = n("Gv8v"),
            tA = n("EGpF"),
            tM = n("mTPq"),
            tk = n("Vcrm"),
            tR = n("DF0c");
        let tN = (0, o.d)(er.a, (e, t) => {
            let {
                get: n
            } = t, a = n(eI.$, e);
            if (!(0, eI.Ab)(a)) return !0;
            let r = n(eI.M, e),
                s = n(eI.C, e);
            if (null == r || null == s) return !1;
            let o = r[s]?.message;
            if (null == o || tT.a.has(o.author.role)) return !1;
            let i = n(eI.y, e),
                l = (0, tM.c)({
                    mapping: r,
                    current_node: s
                }, n(eI.R, e)),
                c = n(eI.cb, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(eI.j, e) && !(0, tI.e)(n(eI.p, e)) && null != c && !n(tS.e).has(c) && null != tO(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function tO(e, t) {
            let n = e(tA.a, t),
                a = e(eI.j, t);
            return null == n.request.current && null != a ? e(tA.a, a) : n
        }
        var tB = n("xtkq"),
            tF = n("PG5R"),
            tz = n("zrki"),
            tG = n("u4MG"),
            tL = n("wVX4"),
            tD = n("OOaz"),
            tH = n("MM0V");

        function tW(e) {
            let t, n, s, o, i, l = (0, r.c)(11),
                {
                    canConvert: c,
                    isChatInstantAvailable: d,
                    isConverting: u,
                    onConvert: h
                } = e;
            l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)($.a, {
                id: "chatgptConversations.workOnlyConversion.title",
                defaultMessage: "Continue in Work",
                description: "Banner title shown in a disabled historical Chat conversation for a Work-only member in Codex Desktop"
            }), l[0] = t) : t = l[0], l[1] !== d ? (n = d ? (0, a.jsx)($.a, {
                id: "chatgptConversations.workOnlyConversion.instantDescription",
                defaultMessage: "Move this chat to Work to use agentic tools and take on more complex tasks. You can still use chat instant for quick questions",
                description: "Banner description shown for a Chat Instant conversation when a Work-only member can continue using Chat Instant in Codex Desktop"
            }) : (0, a.jsx)($.a, {
                id: "chatgptConversations.workOnlyConversion.description",
                defaultMessage: "Move this chat to Work to use agentic tools and take on more complex tasks",
                description: "Banner description shown when a Work-only member cannot continue a historical Chat conversation in Codex Desktop"
            }), l[1] = d, l[2] = n) : n = l[2];
            let p = !c;
            return l[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)($.a, {
                id: "chatgptConversations.workOnlyConversion.action",
                defaultMessage: "Convert to Work",
                description: "Button that converts a disabled historical Chat conversation to Work in Codex Desktop"
            }), l[3] = s) : s = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (o = (0, a.jsx)(tp.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: s
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = o) : o = l[7], l[8] !== n || l[9] !== o ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(tH.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: o
                })
            }), l[8] = n, l[9] = o, l[10] = i) : i = l[10], i
        }
        var tq = n("fr5e"),
            tU = n("ZIh4"),
            tK = n("nKJ6"),
            tV = n("AoaR"),
            tQ = n("fDfx"),
            t$ = n("Xslx"),
            tY = n("EEop"),
            tX = n("bxvp"),
            tJ = n("VBQS"),
            tZ = n("hsIu");
        let t0 = (0, o.d)(er.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(tX.c) || null == n(y.f) || null == n(y.k)) return null;
            let {
                data: a,
                isError: r
            } = n(tZ.b);
            if (r || a?.project_id !== e) return null;
            let {
                data: s,
                isError: o
            } = n(tY.l, (0, tJ.a)());
            return o ? null : (0, tJ.b)(s)
        });
        var t1 = n("FmJi"),
            t2 = n("sIex"),
            t3 = n("TwSq"),
            t4 = n("Fjd0"),
            t5 = n("PWXi"),
            t6 = n("HgLj"),
            t7 = n("n6zj"),
            t8 = n("JlMc"),
            t9 = n("f6KK"),
            ne = n("JPXZ"),
            nt = n("zWHk");

        function nn(e) {
            let t, n, a, s, o, i, l, d = (0, r.c)(34),
                {
                    composerController: h,
                    enabled: p
                } = e,
                m = (0, u.Y)(),
                g = (0, u._)();
            if (d[0] !== m.search) {
                let e = new URLSearchParams(m.search);
                t = e.get("prompt"), n = e.get("promptSource"), d[0] = m.search, d[1] = t, d[2] = n
            } else t = d[1], n = d[2];
            let f = n,
                v = m.key,
                y = (0, c.useRef)(null);
            d[3] !== m.hash || d[4] !== m.pathname || d[5] !== m.search || d[6] !== m.state || d[7] !== v || d[8] !== g ? (a = e => {
                let t = new URLSearchParams(m.search);
                t.delete("prompt"), t.delete("promptSource"), g({
                    pathname: m.pathname,
                    search: t.toString(),
                    hash: m.hash
                }, {
                    replace: !0,
                    state: {
                        ...m.state,
                        consumedUrlPromptKey: v,
                        ...e && "widget" === t.get("site_edit_source") ? {
                            siteEditSource: "widget"
                        } : void 0
                    }
                })
            }, d[3] = m.hash, d[4] = m.pathname, d[5] = m.search, d[6] = m.state, d[7] = v, d[8] = g, d[9] = a) : a = d[9];
            let b = (0, c.useEffectEvent)(a);
            return d[10] !== b || d[11] !== h || d[12] !== p || d[13] !== v || d[14] !== t ? (s = () => {
                if (!p && t && y.current !== v) return (0, nt.b)(h.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && h.consumeLocationPromptPrefill(v) && b(!1)
                })
            }, d[10] = b, d[11] = h, d[12] = p, d[13] = v, d[14] = t, d[15] = s) : s = d[15], d[16] !== h || d[17] !== p || d[18] !== v || d[19] !== t ? (o = [h, p, v, t], d[16] = h, d[17] = p, d[18] = v, d[19] = t, d[20] = o) : o = d[20], (0, c.useLayoutEffect)(s, o), d[21] !== b || d[22] !== h || d[23] !== p || d[24] !== v || d[25] !== t || d[26] !== f ? (i = () => {
                if (!p || !t || y.current === v) return;
                y.current = v;
                let e = h.consumeLocationPromptPrefill(v);
                if (b(e), !e) return;
                let {
                    view: n
                } = h, a = t.replace(/\r\n/g, "\n"), r = "codex-app" === f ? (0, ne.f)({
                    schema: n.state.schema,
                    text: a,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, ne.e)({
                    schema: n.state.schema,
                    text: a
                }), s = n.state.tr.replaceWith(0, n.state.doc.content.size, r.content);
                s.setSelection(t9.h.atEnd(s.doc)), n.dispatch(s)
            }, d[21] = b, d[22] = h, d[23] = p, d[24] = v, d[25] = t, d[26] = f, d[27] = i) : i = d[27], d[28] !== h || d[29] !== p || d[30] !== v || d[31] !== t || d[32] !== f ? (l = [h, p, v, t, f], d[28] = h, d[29] = p, d[30] = v, d[31] = t, d[32] = f, d[33] = l) : l = d[33], (0, c.useLayoutEffect)(i, l), null
        }
        var na = n("KidQ");
        let nr = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function ns(e) {
            let t, n, s, i, l, d = (0, r.c)(15),
                {
                    children: u,
                    draftKey: h,
                    enableInlineSystemHints: p
                } = e,
                m = (0, o.y)(er.a),
                g = (0, c.useContext)(t2.a),
                f = p ? "chatgpt" : void 0;
            return d[0] !== p || d[1] !== f ? (t = {
                enableInlineSystemHints: p,
                variant: f
            }, d[0] = p, d[1] = f, d[2] = t) : t = d[2], d[3] !== h || d[4] !== m ? (n = () => ({
                defaultText: m.get(ts.t, h),
                defaultTextKind: "prompt"
            }), d[3] = h, d[4] = m, d[5] = n) : n = d[5], d[6] !== g ? (s = () => {
                let e = g?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == g ? null : {
                    element: e,
                    locationKey: g.locationKey
                }
            }, d[6] = g, d[7] = s) : s = d[7], d[8] !== u ? (i = e => null == e ? null : u(e), d[8] = u, d[9] = i) : i = d[9], d[10] !== t || d[11] !== n || d[12] !== s || d[13] !== i ? (l = (0, a.jsx)(na.a, {
                controllerOptions: nr,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: s,
                children: i
            }), d[10] = t, d[11] = n, d[12] = s, d[13] = i, d[14] = l) : l = d[14], l
        }
        var no = n("ygKd"),
            ni = n("rcFj"),
            nl = n("vpdG"),
            nc = n("Pyg2"),
            nd = n("Z2JT"),
            nu = n("VPBa"),
            nh = n("TUMj"),
            np = n("a4V1"),
            nm = n("wnpN");

        function ng(e) {
            let t, n, s, i, l, d, u, h, p, m = (0, r.c)(25);
            m[0] !== e ? ({
                conversationId: t,
                isFullscreenComposer: n,
                ...s
            } = e, m[0] = e, m[1] = t, m[2] = n, m[3] = s) : (t = m[1], n = m[2], s = m[3]);
            let g = (0, o.y)(q.a),
                f = (0, c.useContext)(nh.a),
                v = (0, o.w)(np.a, t),
                y = (0, o.x)(eI.db, t),
                b = (0, o.x)(eI.$, t),
                x = (0, o.x)(ts.j, t);
            m[4] !== b ? (i = (0, eI.Ab)(b), m[4] = b, m[5] = i) : i = m[5];
            let w = i,
                C = (0, o.z)(eL.l.activeTab$);
            if (m[6] !== C || m[7] !== n || m[8] !== w || m[9] !== f) {
                let e = f?.turn.items.flatMap(ny);
                l = n && C?.tabType.kind === nu.a && "generatedImages" in C.props && null != C.props.generatedImages && !w && null != f && "in_progress" !== f.turn.status && !f.turn.hasPendingAssistantReply && !f.showPendingLoadingMessage && !e?.some(nv) && (null != f.errorMessage || e?.some(nf)) ? f.turn.messageIds.at(-1) ?? f.turnKey : null, m[6] = C, m[7] = n, m[8] = w, m[9] = f, m[10] = l
            } else l = m[10];
            let _ = l,
                j = (0, c.useRef)(null);
            m[11] !== _ || m[12] !== g ? (d = () => {
                null != _ && _ !== j.current && (j.current = _, g.set(nd.a, "expanded"))
            }, u = [_, g], m[11] = _, m[12] = g, m[13] = d, m[14] = u) : (d = m[13], u = m[14]), (0, c.useEffect)(d, u);
            let S = (0, o.w)(nm.a, n ? t : null),
                I = n ? "floating" : "pane",
                T = null == f && !w,
                E = x || w ? "loading" : "idle";
            return m[15] !== E ? (h = {
                type: E,
                unread: !1
            }, m[15] = E, m[16] = h) : h = m[16], m[17] !== S || m[18] !== s || m[19] !== v || m[20] !== I || m[21] !== T || m[22] !== h || m[23] !== y ? (p = (0, a.jsx)(nc.a, {
                ...s,
                notifications: S,
                placement: I,
                responsePreview: v,
                composerOnly: T,
                title: y,
                statusState: h
            }), m[17] = S, m[18] = s, m[19] = v, m[20] = I, m[21] = T, m[22] = h, m[23] = y, m[24] = p) : p = m[24], p
        }

        function nf(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function nv(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function ny(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var nb = n("V8xe");

        function nx(e) {
            let t, n, s, i = (0, r.c)(14),
                l = (0, c.useContext)(t2.a),
                d = (0, o.z)(no.h),
                u = `${e.conversationId}:${d?"image-edit":"chat"}`;
            i[0] !== u || i[1] !== d || i[2] !== e ? (t = t => (0, a.jsx)(nw, {
                ...e,
                initialController: t,
                isImageEditComposer: d,
                retainLiveModelPicker: e.retainLiveModelPicker && !d
            }, u), i[0] = u, i[1] = d, i[2] = e, i[3] = t) : t = i[3];
            let h = t;
            if (null == l || l.conversationId !== e.conversationId) {
                let e;
                return i[4] !== h ? (e = h(), i[4] = h, i[5] = e) : e = i[5], e
            }
            i[6] !== d || i[7] !== e.conversationId ? (n = d ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, i[6] = d, i[7] = e.conversationId, i[8] = n) : n = i[8];
            let p = !e.isWorkConversation;
            return i[9] !== u || i[10] !== h || i[11] !== n || i[12] !== p ? (s = (0, a.jsx)(ns, {
                draftKey: n,
                enableInlineSystemHints: p,
                children: h
            }, u), i[9] = u, i[10] = h, i[11] = n, i[12] = p, i[13] = s) : s = i[13], s
        }

        function nw(e) {
            let t, n, s, i, l, h, p, m, g, f, v, y, b, x, w = (0, r.c)(69),
                {
                    composerRef: C,
                    initialController: _,
                    placement: j,
                    ...S
                } = e,
                I = (0, o.y)(q.a),
                T = (0, o.x)(tU.d, S.isTemporaryChat),
                {
                    conversationId: E,
                    routePresentation: P
                } = S,
                A = "floating" === P.placement,
                M = (0, d.a)(),
                {
                    state: k
                } = (0, u.Y)(),
                R = (0, o.x)(ti, E),
                N = (0, o.x)(eI.S, E),
                O = !(!S.disabled && !S.isSharedConversation && !S.isWorkConversation && !S.isTemporaryChat && !S.isImageEditComposer && (0, tG.a)(N)) ? null : N,
                B = (0, o.x)(null == S.requiredSystemHints ? t0 : null, O);
            w[0] !== B || w[1] !== S.requiredSystemHints ? (t = S.requiredSystemHints ?? (null == B ? void 0 : [B]), w[0] = B, w[1] = S.requiredSystemHints, w[2] = t) : t = w[2];
            let F = t;
            w[3] !== B || w[4] !== E || w[5] !== I ? (n = () => {
                if (null != B) {
                    let e, t;
                    return e = (0, t$.b)(I, E, [B]), t = (0, tQ.i)(I, {
                        draftKey: E,
                        isTemporaryChat: !1
                    }), () => {
                        if (e(), I.get(t$.a, E).includes(B)) return;
                        let n = I.get(ts.w, E).filter(e => e !== B && e !== `plugin:${tV.d}`);
                        (0, ts.W)(I, E, n, t)
                    }
                }
            }, s = [I, E, B], w[3] = B, w[4] = E, w[5] = I, w[6] = n, w[7] = s) : (n = w[6], s = w[7]), (0, c.useEffect)(n, s);
            let z = (0, o.x)(eA.c, E);
            w[8] !== z || w[9] !== S.isSharedConversation || w[10] !== S.isWorkConversation || w[11] !== N ? (i = !S.isSharedConversation && !S.isWorkConversation && !(0, tG.a)(N) && !z, w[8] = z, w[9] = S.isSharedConversation, w[10] = S.isWorkConversation, w[11] = N, w[12] = i) : i = w[12];
            let G = i,
                L = G && !S.disabled && !S.isSubmitDisabled && !S.isImageEditComposer,
                D = G ? R : void 0;
            w[13] !== E || w[14] !== S.isImageEditComposer ? (l = S.isImageEditComposer ? {
                conversationId: E,
                surface: "image-edit"
            } : E, w[13] = E, w[14] = S.isImageEditComposer, w[15] = l) : l = w[15];
            let H = l;
            w[16] !== E || w[17] !== H || w[18] !== _ ? (h = {
                composerController: _,
                conversationId: E,
                draftKey: H
            }, w[16] = E, w[17] = H, w[18] = _, w[19] = h) : h = w[19];
            let W = (0, nl.a)(h),
                U = (0, ni.a)(W, E, !S.isInlinePreview && !S.disabled, S.workspace && "tpp", D?.id ?? N),
                K = (0, c.useContext)(t2.a),
                V = (0, c.useRef)(!1);
            w[20] !== H || w[21] !== K || w[22] !== _ || w[23] !== S.isTemporaryChat || w[24] !== I ? (p = e => {
                null == e || null == _ || V.current || (V.current = !0, (0, ts.X)(I, H, _.getPersistedText(), {
                    isTemporaryChat: S.isTemporaryChat
                }), K?.onAdopt())
            }, w[20] = H, w[21] = K, w[22] = _, w[23] = S.isTemporaryChat, w[24] = I, w[25] = p) : p = w[25];
            let Q = (0, ej.a)(p);
            w[26] !== Q || w[27] !== C ? (m = (0, t6.a)(C, Q), w[26] = Q, w[27] = C, w[28] = m) : m = w[28];
            let $ = m;
            w[29] !== B || w[30] !== O || w[31] !== W || w[32] !== E || w[33] !== L || w[34] !== H || w[35] !== U || w[36] !== M || w[37] !== A || w[38] !== $ || w[39] !== T || w[40] !== j || w[41] !== S || w[42] !== F || w[43] !== P.isHidden || w[44] !== I || w[45] !== D || w[46] !== k?.libraryFileCreation || w[47] !== N ? (g = e => (0, a.jsxs)(t4.a, {
                children: [A && S.trackReadState && !e?.isHidden ? (0, a.jsx)(t8.a, {
                    conversationId: E,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, j.aboveComposerContent, (0, a.jsx)(t1.a, {
                    children: (0, a.jsx)(t7.a, {
                        ref: $,
                        trackShownImpressions: S.trackShownImpressions && !P.isHidden && !e?.isHidden && !e?.isMinimized,
                        headerContent: j.headerContent,
                        legacyImageSuggestionsEnabled: !S.disabled && !S.isSharedConversation && !S.isImageEditComposer,
                        allowBackgroundSubmit: S.isInlinePreview,
                        ...U,
                        disableAutoFocus: S.disableAutoFocus,
                        conversationOrigin: null == S.workspace ? void 0 : "tpp",
                        mcpAppContext: S.workspace?.mcpAppContext,
                        onServerThreadIdChange: S.workspace?.onServerThreadIdChange,
                        followupPortalTarget: j.followupPortalTarget,
                        takeoverDisclaimerRef: j.takeoverDisclaimerRef,
                        showConversationFollowups: S.showConversationFollowups,
                        autoPrepare: !S.isSubmitDisabled && !S.isSharedConversation,
                        browserConversationId: (0, tK.getThreadBrowserConversationId)(I) ?? E,
                        composerController: W,
                        conversationId: E,
                        requiredSystemHints: F,
                        hideSystemHints: null != S.requiredSystemHints,
                        getSubmissionGuard: null != B ? () => () => I.get(eI.S, E) === N && I.get(t0, O) === B : void 0,
                        draftKey: H,
                        onPromptChange: T,
                        selectedCustomGpt: D,
                        targetGizmoId: D?.id,
                        onCustomGptChange: L ? e => {
                            I.set(ti, E, e)
                        } : void 0,
                        onCustomAgentSelected: L ? () => {
                            I.set(ti, E, null)
                        } : void 0,
                        disableDraftPrepare: S.isSubmitDisabled || S.isSharedConversation,
                        disableSubmit: S.disabled || S.isSubmitDisabled,
                        voiceInputDisabled: S.disabled,
                        aboveComposerHeaderContent: j.voiceDisclaimer,
                        getExtraDeveloperInstructions: !S.isInlinePreview && k?.libraryFileCreation && !S.isTemporaryChat ? nC : void 0,
                        isTemporaryChat: S.isTemporaryChat,
                        placeholder: S.disabled && !1 !== S.readOnlyPlaceholder ? S.readOnlyPlaceholder ?? M.formatMessage(nb.a.readOnlyConversationPlaceholder) : void 0,
                        readOnly: S.disabled,
                        hideModelPicker: S.hideModelPicker,
                        ...(0, ts.K)(S),
                        showVoiceStage: j.showVoiceStage,
                        onSubmitAccepted: t => {
                            e?.onSubmitStart(), j.onSubmit(), S.onSubmitAccepted?.(t)
                        },
                        onSubmitError: j.onSubmitError
                    })
                })]
            }), w[29] = B, w[30] = O, w[31] = W, w[32] = E, w[33] = L, w[34] = H, w[35] = U, w[36] = M, w[37] = A, w[38] = $, w[39] = T, w[40] = j, w[41] = S, w[42] = F, w[43] = P.isHidden, w[44] = I, w[45] = D, w[46] = k?.libraryFileCreation, w[47] = N, w[48] = g) : g = w[48];
            let Y = g;
            w[49] !== I ? (f = () => {
                (0, t3.K)(I, "conversation")
            }, v = () => {
                (0, t3.K)(I, "conversation")
            }, w[49] = I, w[50] = f, w[51] = v) : (f = w[50], v = w[51]);
            let X = !S.isInlinePreview && !S.disabled && !S.isSubmitDisabled;
            w[52] !== W || w[53] !== X ? (y = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(nn, {
                    composerController: W,
                    enabled: X
                })
            }), w[52] = W, w[53] = X, w[54] = y) : y = w[54];
            let J = S.disabled || S.awaitingGptContinuation,
                Z = !S.isInlinePreview && null == S.workspace;
            return w[55] !== E || w[56] !== A || w[57] !== j.renderTranscript || w[58] !== Y || w[59] !== P.isHidden || w[60] !== J || w[61] !== Z ? (b = (0, a.jsx)(ng, {
                conversationId: E,
                isFullscreenComposer: A,
                isHidden: P.isHidden,
                forceExpanded: J,
                showConversationTitleMenu: Z,
                renderTranscript: j.renderTranscript,
                children: Y
            }), w[55] = E, w[56] = A, w[57] = j.renderTranscript, w[58] = Y, w[59] = P.isHidden, w[60] = J, w[61] = Z, w[62] = b) : b = w[62], w[63] !== E || w[64] !== f || w[65] !== v || w[66] !== y || w[67] !== b ? (x = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": E,
                onMouseDownCapture: f,
                onFocusCapture: v,
                children: [y, b]
            }), w[63] = E, w[64] = f, w[65] = v, w[66] = y, w[67] = b, w[68] = x) : x = w[68], x
        }

        function nC() {
            return [t5.a]
        }
        var n_ = n("LEgg");
        let nj = (0, tg.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function nS(e) {
            let t, n, s = (0, r.c)(6),
                {
                    conversationId: o,
                    scheduledAutomationId: i
                } = e,
                l = (0, eu.f)("3901104270");
            return s[0] !== o || s[1] !== l || s[2] !== i ? (t = l && null != i ? (0, a.jsx)(nj, {
                conversationId: o,
                automationId: i
            }) : null, s[0] = o, s[1] = l, s[2] = i, s[3] = t) : t = s[3], s[4] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), s[4] = t, s[5] = n) : n = s[5], n
        }
        var nI = n("Bs4i"),
            nT = n("Qgfj"),
            nE = n("EFj1"),
            nP = n("rmk3"),
            nA = n("sqqv"),
            nM = n("fQbA"),
            nk = n("dDDU"),
            nR = n("soaw"),
            nN = n("ZrYB"),
            nO = n("X6Vn"),
            nB = n("Kwur"),
            nF = n("eKlv"),
            nz = n("JCtZ"),
            nG = n("g2p6"),
            nL = n("oaTv"),
            nD = n("PME0"),
            nH = n("lgcP"),
            nW = n("AcSY"),
            nq = n("w7E5"),
            nU = n("xEXG"),
            nK = n("J6LI"),
            nV = n("lUUH"),
            nQ = n("ftAl");

        function n$(e) {
            let t, n, s, i = (0, r.c)(17),
                {
                    children: l,
                    conversationId: c,
                    getBaseItems: d,
                    menuTriggerRef: u,
                    navigate: h,
                    onBeforeOpen: p,
                    renderDropdown: m
                } = e,
                g = (0, o.y)(er.a),
                {
                    data: f
                } = (0, nW.e)(),
                v = (0, nU.b)();
            return i[0] !== f || i[1] !== c || i[2] !== d || i[3] !== u || i[4] !== h || i[5] !== v || i[6] !== g ? (t = () => {
                let e = g.get(nQ.a, c, {
                        enabled: !1
                    }),
                    t = (0, tG.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : g.query.getData(j.b, t);
                return d(function(e) {
                    let {
                        scope: t,
                        conversationId: n,
                        conversation: a,
                        project: r,
                        account: s,
                        projectCrudStatus: o,
                        navigate: i,
                        onCreateProjectDialogCloseAutoFocus: l
                    } = e, c = (0, tG.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(nq.a), u = t.get(Z.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, m = a?.conversation_origin === "tpp" || a?.conversation_origin === "flora", g = "allowed" === o || m && h?.pages.some(e => null != e.cursor) === !0, f = t.get(Z.h, n);
                    return null == s || null == a || t.get(Z.g, n) || (0, nK.c)(a, r).sourceUnavailable || null == (0, nK.b)(t, a, f, !1) || null != c && null == r || null == h || 0 === p && !g ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: nZ.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, nV.b)({
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
                    scope: g,
                    conversationId: c,
                    conversation: e,
                    project: n,
                    account: f,
                    projectCrudStatus: v,
                    navigate: h,
                    onCreateProjectDialogCloseAutoFocus: e => {
                        e.preventDefault(), u.current?.focus({
                            preventScroll: !0
                        })
                    }
                }))
            }, i[0] = f, i[1] = c, i[2] = d, i[3] = u, i[4] = h, i[5] = v, i[6] = g, i[7] = t) : t = i[7], i[8] !== c || i[9] !== p || i[10] !== g ? (n = async () => {
                await Promise.all([(async () => {
                    let e = g.get(tc.chatGptConversationQueryById$, c, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await g.query.getOrFetch(tc.chatGptConversationQueryById$, c).catch(nJ), null == g.query.getData(tc.chatGptConversationQueryById$, c) && await g.query.getOrFetch(Z.j, [c]).catch(nX)
                })(), p?.()]);
                let e = g.get(nQ.a, c, {
                    enabled: !1
                });
                (0, tG.a)(e?.gizmo_id) && e?.gizmo_id != null && await g.query.getOrFetch(j.b, e.gizmo_id).catch(nY)
            }, i[8] = c, i[9] = p, i[10] = g, i[11] = n) : n = i[11], i[12] !== l || i[13] !== m || i[14] !== t || i[15] !== n ? (s = (0, a.jsx)(nP.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                renderItem: nM.b,
                renderDropdown: m,
                trigger: "click",
                children: l
            }), i[12] = l, i[13] = m, i[14] = t, i[15] = n, i[16] = s) : s = i[16], s
        }

        function nY() {}

        function nX() {}

        function nJ() {}
        let nZ = (0, nT.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}",
                description: "Name of a ChatGPT project offered as a destination for moving a conversation or Work task"
            }
        });

        function n0(e) {
            let t, s, i, l, h, p, f, v, b, x, w, C, _, j, S, I, T, E = (0, r.c)(67),
                {
                    showMenu: P,
                    triggerButton: A,
                    renderDropdown: M,
                    conversationOrigin: k,
                    conversationId: R,
                    title: N,
                    isHandoffPending: O,
                    isArchived: B,
                    isChatConversation: F,
                    onHandoff: z,
                    onOpenMessage: G,
                    projectId: L,
                    projectName: D,
                    serverConversationId: H
                } = e,
                W = (0, o.y)(q.a),
                U = (0, o.y)(er.a),
                K = (0, nR.a)(),
                V = (0, eu.i)();
            E[0] !== V ? (t = V.checkGate("224248639"), E[0] = V, E[1] = t) : t = E[1];
            let Q = t;
            E[2] !== V ? (s = V.getLayer("3017902351").get("web_file_library_enabled", !1), E[2] = V, E[3] = s) : s = E[3];
            let $ = s,
                ee = Q || $;
            E[4] !== ee ? (i = {
                enabled: ee
            }, E[4] = ee, E[5] = i) : i = E[5];
            let {
                data: et
            } = (0, o.z)(nG.p, i), ea = ee && et?.fileLibraryEnabledForRegistrationCountry !== !1, eo = (0, d.a)(), ei = (0, u._)(), [el, ec] = (0, c.useState)(null), ed = (0, c.useRef)(null), eh = (0, c.useRef)(null);
            E[6] === Symbol.for("react.memo_cache_sentinel") ? (l = [], E[6] = l) : l = E[6];
            let ep = (0, c.useRef)(l);
            E[7] === Symbol.for("react.memo_cache_sentinel") ? (h = {
                name: "chatgpt"
            }, E[7] = h) : h = E[7];
            let {
                isCapable: em
            } = (0, o.x)(m.a, h), eg = (0, o.x)(Z.g, H);
            E[8] === Symbol.for("react.memo_cache_sentinel") ? (p = () => ec("shortcut"), E[8] = p) : p = E[8];
            let ef = F && !eg;
            E[9] !== W || E[10] !== H ? (f = () => (0, J.a)(W.query.getData(tc.chatGptConversationQueryById$, H), W.get(y.h), W.get(y.g)), E[9] = W, E[10] = H, E[11] = f) : f = E[11], E[12] !== ef || E[13] !== f ? (v = {
                enabled: ef,
                isActive: f
            }, E[12] = ef, E[13] = f, E[14] = v) : v = E[14], (0, nE.a)("deleteChat", p, v), E[15] !== U || E[16] !== eg || E[17] !== ei || E[18] !== W || E[19] !== H ? (b = e => {
                !eg && (0, J.a)(W.query.getData(tc.chatGptConversationQueryById$, H), W.get(y.h), W.get(y.g)) && (ec(null), (0, nH.a)(U, H, e), ei("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, E[15] = U, E[16] = eg, E[17] = ei, E[18] = W, E[19] = H, E[20] = b) : b = E[20];
            let ev = b;
            E[21] !== W || E[22] !== H ? (x = async () => {
                let e = [];
                ep.current = e, e.push(...await async function(e, t) {
                    let a = await nB.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        }
                    }).catch(() => null);
                    return a?.can_share && 0 !== a.av_sessions.length ? [{
                        id: "share-live-session",
                        icon: tm.cj,
                        message: (0, nT.e)({
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
                                (0, nO.f)(e, r, {
                                    conversationId: t,
                                    sessions: a.av_sessions
                                })
                            })
                        }
                    }] : []
                }(W, H))
            }, E[21] = W, E[22] = H, E[23] = x) : x = E[23];
            let ey = x;
            E[24] !== R || E[25] !== k || E[26] !== ea || E[27] !== eo || E[28] !== eg || E[29] !== B || E[30] !== O || E[31] !== K || E[32] !== ei || E[33] !== z || E[34] !== G || E[35] !== L || E[36] !== D || E[37] !== W || E[38] !== H || E[39] !== V || E[40] !== N ? (w = e => {
                let t = W.get(y.f),
                    a = W.get(y.k),
                    r = W.query.getData(tc.chatGptConversationQueryById$, H),
                    s = W.get(y.h),
                    o = W.get(y.g),
                    i = (0, J.a)(r, s, o),
                    l = (0, nF.b)(W, H),
                    c = !eg && (0, J.a)(l, s, o),
                    d = W.get(g.b).pathname,
                    u = () => K() && d === W.get(g.b).pathname && t === W.get(y.f) && a === W.get(y.k),
                    h = (0, nL.a)(W, R, k, () => (0, nD.a)(ei)),
                    p = [];
                return V.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && p.push({
                    id: "chatgpt-audio-summary",
                    message: (0, nT.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary",
                        description: "Opens the dialog for generating and listening to an audio summary of the current chat"
                    }),
                    icon: tm.sg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
                        })().then(e => {
                            u() && e(W, H)
                        }).catch(() => {
                            u() && (ed.current?.focus({
                                preventScroll: !0
                            }), W.get(en.f).danger(eo.formatMessage({
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
                }), ea && p.unshift({
                    id: "chatgpt-conversation-files",
                    message: (0, nT.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat",
                        description: "Opens the side panel listing files referenced in the active saved ChatGPT conversation, even when the list is empty"
                    }),
                    icon: tm.sb,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(368308).then(n.bind(n, "LFUX"))).openConversationFiles
                        })().then(e => {
                            u() && e(W, {
                                conversationId: R,
                                serverConversationId: H,
                                onOpenMessage: G
                            })
                        }).catch(() => {
                            u() && W.get(en.f).danger(eo.formatMessage({
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
                }), p.push(...(0, nk.a)(W)), (0, nz.a)(W, {
                    organizationItems: (0, nM.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: ep.current,
                    viewItems: p,
                    feedbackItems: [],
                    preferenceItems: null == h ? [] : [h],
                    surface: "header",
                    isTitleMenu: !0,
                    conversationId: H,
                    stateConversationId: R,
                    conversationOrigin: k,
                    title: N,
                    isHandoffPending: O,
                    canHandoff: null != z,
                    onHandoff: z,
                    projectId: L,
                    projectName: D,
                    onRename: (0, J.b)(r, s, o, eg) ? () => void(0, nF.renameActiveChatGptConversation)(W, R) : void 0,
                    isPinned: W.get(Z.h, H) ?? l?.is_starred === !0,
                    onTogglePin: c ? () => {
                        let e = (0, nF.b)(W, H);
                        !(null == e || W.get(Z.g, H)) && (0, J.a)(e, W.get(y.h), W.get(y.g)) && (0, Z.U)({
                            scope: W,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(n1)
                    } : void 0,
                    onArchive: !i || eg || B ? void 0 : () => (0, nN.a)(W, H),
                    onUnarchive: i && !eg && B ? () => {
                        (0, Z.V)({
                            scope: W,
                            conversationId: H
                        }).then(() => {
                            W.get(en.f).success(eo.formatMessage(es.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            W.get(en.f).danger(eo.formatMessage(X.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !i || eg ? void 0 : () => ec("menu")
                })
            }, E[24] = R, E[25] = k, E[26] = ea, E[27] = eo, E[28] = eg, E[29] = B, E[30] = O, E[31] = K, E[32] = ei, E[33] = z, E[34] = G, E[35] = L, E[36] = D, E[37] = W, E[38] = H, E[39] = V, E[40] = N, E[41] = w) : w = E[41];
            let eb = w;
            E[42] !== N || E[43] !== A ? (C = null == A ? (0, a.jsx)(nA.a, {
                ref: ed,
                title: N
            }) : (0, a.jsx)(nI.b, {
                ref: ed,
                children: A
            }), E[42] = N, E[43] = A, E[44] = C) : C = E[44];
            let ex = C;
            E[45] !== eb || E[46] !== ex || E[47] !== ei || E[48] !== em || E[49] !== ey || E[50] !== M || E[51] !== H || E[52] !== P ? (_ = P && (em ? (0, a.jsx)(n$, {
                conversationId: H,
                getBaseItems: eb,
                menuTriggerRef: ed,
                navigate: ei,
                onBeforeOpen: ey,
                renderDropdown: M,
                children: ex
            }) : (0, a.jsx)(nP.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => eb(),
                onBeforeOpen: ey,
                renderItem: nM.b,
                renderDropdown: M,
                trigger: "click",
                children: ex
            })), E[45] = eb, E[46] = ex, E[47] = ei, E[48] = em, E[49] = ey, E[50] = M, E[51] = H, E[52] = P, E[53] = _) : _ = E[53];
            let ew = "shortcut" === el,
                eC = null != el;
            return E[54] !== el ? (j = () => {
                eh.current = "menu" === el ? ed.current : null, ec(null)
            }, E[54] = el, E[55] = j) : j = E[55], E[56] === Symbol.for("react.memo_cache_sentinel") ? (S = e => {
                let t = eh.current;
                if (eh.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, E[56] = S) : S = E[56], E[57] !== ev || E[58] !== eg || E[59] !== ew || E[60] !== eC || E[61] !== j || E[62] !== N ? (I = (0, a.jsx)(Y.a, {
                allowArtifactDeletion: !0,
                autoFocusConfirm: ew,
                open: eC,
                onOpenChange: j,
                onCloseAutoFocus: S,
                isDeleting: eg,
                onConfirm: ev,
                title: N
            }), E[57] = ev, E[58] = eg, E[59] = ew, E[60] = eC, E[61] = j, E[62] = N, E[63] = I) : I = E[63], E[64] !== _ || E[65] !== I ? (T = (0, a.jsxs)(a.Fragment, {
                children: [_, I]
            }), E[64] = _, E[65] = I, E[66] = T) : T = E[66], T
        }

        function n1() {}

        function n2(e) {
            let t, n, s, i = (0, r.c)(12),
                {
                    title: l,
                    includePlugins: c,
                    lockdownConversationId: d,
                    triggerButton: h,
                    renderDropdown: p
                } = e,
                m = (0, o.y)(q.a),
                g = (0, u._)();
            return i[0] !== c || i[1] !== d || i[2] !== g || i[3] !== m ? (t = () => {
                let e = null == d ? null : (0, nL.a)(m, d, null, () => (0, nD.a)(g)),
                    t = null == e ? [] : [e];
                return c ? (0, nM.a)(t) : t
            }, i[0] = c, i[1] = d, i[2] = g, i[3] = m, i[4] = t) : t = i[4], i[5] !== l || i[6] !== h ? (n = h ?? (0, a.jsx)(nA.a, {
                title: l
            }), i[5] = l, i[6] = h, i[7] = n) : n = i[7], i[8] !== p || i[9] !== t || i[10] !== n ? (s = (0, a.jsx)(nP.a, {
                preserveBrowserContextMenu: !0,
                getItems: t,
                renderItem: nM.b,
                renderDropdown: p,
                trigger: "click",
                children: n
            }), i[8] = p, i[9] = t, i[10] = n, i[11] = s) : s = i[11], s
        }
        var n3 = n("dLcZ"),
            n4 = n("on57"),
            n5 = n("W5pg"),
            n6 = n("IPUh"),
            n7 = n("I7bK"),
            n8 = n("QcW8"),
            n9 = n("yC2B");

        function ae(e) {
            let t, n, s, i, l, c, u, h, p, m = (0, r.c)(30),
                {
                    header: g,
                    courseShortcut: v,
                    progress: y
                } = e,
                {
                    titleBarLeftInset: b,
                    rightPanelAnimatedWidth: x,
                    isContentFullWidth: w
                } = (0, n7.g)(),
                C = (0, o.z)(n8.ab),
                _ = (0, o.z)(n8.cb),
                j = (0, d.a)();
            m[0] !== j.locale ? (t = (0, n9.a)(j.locale), m[0] = j.locale, m[1] = t) : t = m[1];
            let S = t,
                I = C?.mode === "split" && "left" === _ != ("rtl" === S);
            m[2] !== I || m[3] !== w ? (n = e => I && !w ? e : 0, m[2] = I, m[3] = w, m[4] = n) : n = m[4];
            let T = (0, n5.a)(x, n);
            m[5] !== T || m[6] !== b ? (s = [b, T], m[5] = T, m[6] = b, m[7] = s) : s = m[7];
            let E = (0, n5.a)(s, at);
            m[8] !== E || m[9] !== T ? (i = {
                "--learning-header-left-inset": E,
                insetInlineStart: T
            }, m[8] = E, m[9] = T, m[10] = i) : i = m[10];
            let P = i,
                A = null;
            m[11] !== v ? (l = null == v ? null : (0, a.jsx)("div", {
                className: "flex min-w-0 flex-1",
                children: v
            }), m[11] = v, m[12] = l) : l = m[12], m[13] !== A || m[14] !== l ? (c = (0, a.jsxs)("div", {
                className: "flex w-full min-w-0 items-center gap-toolbar-action",
                children: [A, l]
            }), m[13] = A, m[14] = l, m[15] = c) : c = m[15];
            let M = c;
            if (null == y) return M;
            if (C?.isVisible && "full" === C.mode) {
                let e, t, n;
                return m[16] !== v ? (e = null == v ? null : (0, a.jsx)("div", {
                    className: "flex min-w-0 flex-1",
                    children: v
                }), m[16] = v, m[17] = e) : e = m[17], m[18] !== y ? (t = (0, a.jsx)("div", {
                    className: "min-w-0 flex-1",
                    children: y
                }), m[18] = y, m[19] = t) : t = m[19], m[20] !== t || m[21] !== e ? (n = (0, a.jsx)(f.a.HeaderAction, {
                    actionId: "sectioned-conversation-navigation",
                    align: "center",
                    children: (0, a.jsxs)("div", {
                        className: "flex min-w-0 items-center gap-toolbar-action",
                        children: [e, t]
                    })
                }), m[20] = t, m[21] = e, m[22] = n) : n = m[22], n
            }
            return m[23] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, n4.b)("relative flex max-w-[min(var(--learning-progress-max-width),max(0px,calc(100cqw-2*(var(--app-shell-header-end-actions-width)+var(--spacing)*3))))] min-w-0 items-center", "[--learning-progress-max-width:var(--thread-content-max-width)]", "@max-thread-expanded/home-mode-toggle:[--learning-progress-max-width:var(--thread-content-compact-max-width,var(--thread-content-max-width))]"), m[23] = u) : u = m[23], m[24] !== M ? (h = (0, a.jsx)("div", {
                className: "absolute inset-y-0 end-full me-toolbar-action flex w-[max(0px,calc((100cqw-100%)/2-var(--spacing-toolbar-action)-var(--spacing)*2-var(--learning-header-left-inset)))] min-w-0 items-center overflow-hidden",
                "data-app-shell-header-obstacle": !0,
                children: M
            }), m[24] = M, m[25] = h) : h = m[25], m[26] !== y || m[27] !== P || m[28] !== h ? (p = (0, a.jsx)(f.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                children: (0, a.jsxs)(n6.a.div, {
                    className: u,
                    style: P,
                    children: [h, y]
                })
            }), m[26] = y, m[27] = P, m[28] = h, m[29] = p) : p = m[29], p
        }

        function at(e) {
            let [t, n] = e;
            return `${Math.max(0,t-n)}px`
        }
        var an = n("NVRI"),
            aa = n("WLgA");

        function ar(e) {
            let t, n, s = (0, r.c)(9),
                {
                    icon: o,
                    name: i,
                    projectId: l,
                    linkToProject: c
                } = e;
            s[0] !== o || s[1] !== c || s[2] !== i || s[3] !== l ? (t = c && null != i ? (0, a.jsx)(tp.b, {
                "aria-label": i,
                color: "ghostActive",
                size: "toolbar",
                to: (0, aa.c)(l),
                uniform: !0,
                children: o
            }) : null, s[0] = o, s[1] = c, s[2] = i, s[3] = l, s[4] = t) : t = s[4];
            let d = t,
                u = d ?? o,
                h = null != d;
            return s[5] !== i || s[6] !== u || s[7] !== h ? (n = (0, a.jsx)(an.b, {
                project: {
                    icon: u,
                    iconInteractive: h,
                    name: i
                }
            }), s[5] = i, s[6] = u, s[7] = h, s[8] = n) : n = s[8], n
        }
        var as = n("ftSl"),
            ao = n("u9Jt"),
            ai = n("Xoyl");

        function al(e) {
            let t, n = (0, r.c)(6),
                {
                    hasTitleMenu: s,
                    project: o,
                    title: i
                } = e;
            if (null == i) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(ai.a, {}), n[0] = e) : e = n[0], e
            }
            if (s) {
                let e;
                return n[1] !== o || n[2] !== i ? (e = (0, a.jsx)(ao.a, {
                    triggerButton: (0, a.jsx)(nA.a, {
                        project: o,
                        title: i
                    })
                }), n[1] = o, n[2] = i, n[3] = e) : e = n[3], e
            }
            return n[4] !== i ? (t = (0, a.jsx)(as.a, {
                className: "max-w-full",
                variant: "flush-start",
                title: i
            }), n[4] = i, n[5] = t) : t = n[5], t
        }
        var ac = n("B5Qz"),
            ad = n("E7pP"),
            au = n("oU3c"),
            ah = n("B0Wx");
        let ap = (0, o.d)(er.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(ah.b, e);
                if (null != a) return a;
                let r = n(eI.j, e);
                if (null == r) return null;
                let s = n(Z.j, [r], {
                        enabled: !1
                    }).data?.[0],
                    o = (0, au.a)(s?.title, s?.mapping);
                if (null != o) return o;
                let i = n(ad.a),
                    l = null == i ? null : n(ac.e, {
                        hostId: i,
                        threadId: r
                    });
                return l?.sourceKind === "chatgpt" ? (0, au.c)(l.displayTitle) : null
            }),
            am = (0, o.c)(q.a, e => {
                let {
                    get: t
                } = e, n = t(n8.ab);
                return !(n?.isVisible && "full" === n.mode)
            });
        var ag = n("X0li");
        let af = (0, tg.a)(ag.d),
            av = (0, tg.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            ay = (0, tg.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var ab = n("lX86"),
            ax = n("v7qY"),
            aw = n("jov5"),
            aC = n("Ro2M"),
            a_ = n("bN4H"),
            aj = n("TS05");

        function aS(e) {
            let t, n, s, i, l = (0, r.c)(12),
                {
                    conversationId: c,
                    entries: d,
                    turnListApi: h
                } = e,
                {
                    key: p,
                    search: g,
                    state: f
                } = (0, u.Y)();
            l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "automations.cloud.scheduled-tasks"
            }, l[0] = t) : t = l[0];
            let {
                isCapable: v
            } = (0, o.x)(m.a, t);
            if (l[1] !== v || l[2] !== f?.sidebarArea || l[3] !== g) {
                let e = new URLSearchParams(g);
                n = e.get("automationId"), s = f?.sidebarArea === "scheduled" || !v || !n || "finalAgentTurnStart" !== e.get("messageId"), l[1] = v, l[2] = f?.sidebarArea, l[3] = g, l[4] = n, l[5] = s
            } else n = l[4], s = l[5];
            return s ? null : (l[6] !== n || l[7] !== c || l[8] !== d || l[9] !== p || l[10] !== h ? (i = (0, a.jsx)(aI, {
                automationId: n,
                conversationId: c,
                entries: d,
                turnListApi: h
            }, p), l[6] = n, l[7] = c, l[8] = d, l[9] = p, l[10] = h, l[11] = i) : i = l[11], i)
        }

        function aI(e) {
            let t, n, a, s, i = (0, r.c)(25),
                {
                    automationId: l,
                    conversationId: d,
                    entries: h,
                    turnListApi: p
                } = e,
                m = (0, o.y)(q.a),
                g = (0, u.Y)(),
                f = (0, o.z)(y.f),
                v = (0, o.x)(eI.j, d),
                {
                    data: b
                } = (0, o.x)(aC.e, l),
                x = (0, o.z)(aw.a),
                w = (0, c.useRef)(null),
                C = (0, c.useRef)(null);
            i[0] !== h ? (t = h.findLast(aP), i[0] = h, i[1] = t) : t = i[1];
            let _ = t;
            i[2] !== f || i[3] !== l || i[4] !== x || i[5] !== _ || i[6] !== b || i[7] !== g || i[8] !== m || i[9] !== p ? (n = () => {
                null == b || null == f || (x || w.current === f || (w.current = f, (0, a_.openAutomationSidePanelTab)({
                    scope: m,
                    automationId: l,
                    title: b.automation.title
                })), null != p && null != _ && C.current !== f && (C.current = f, p.scrollToKey(_.turnKey, aT, {
                    align: "top"
                }).then(() => {
                    m.set(aj.a, {
                        locationKey: g.key,
                        accountId: f
                    }, !0)
                })))
            }, i[2] = f, i[3] = l, i[4] = x, i[5] = _, i[6] = b, i[7] = g, i[8] = m, i[9] = p, i[10] = n) : n = i[10];
            let j = (0, c.useEffectEvent)(n);
            i[11] !== f || i[12] !== d || i[13] !== b?.automation.conversation_id || i[14] !== j || i[15] !== v ? (a = () => {
                null != f && b?.automation.conversation_id === (v ?? d) && j()
            }, i[11] = f, i[12] = d, i[13] = b?.automation.conversation_id, i[14] = j, i[15] = v, i[16] = a) : a = i[16];
            let S = _?.turnKey,
                I = b?.automation.conversation_id;
            return i[17] !== f || i[18] !== x || i[19] !== d || i[20] !== v || i[21] !== S || i[22] !== I || i[23] !== p ? (s = [f, d, S, I, v, x, p], i[17] = f, i[18] = x, i[19] = d, i[20] = v, i[21] = S, i[22] = I, i[23] = p, i[24] = s) : s = i[24], (0, c.useEffect)(a, s), null
        }

        function aT(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: aE
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function aE(e) {
            return e instanceof HTMLElement && e.getClientRects().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }

        function aP(e) {
            let {
                turn: t
            } = e;
            return t.items.some(aA)
        }

        function aA(e) {
            return "user-message" !== e.type
        }
        var aM = n("TDcV"),
            ak = n("Xvoy"),
            aR = n("WAdu"),
            aN = n("VnEZ");
        let aO = {
            $type: "protobuf_analytics_events.v1.ChatgptConversationPrintLifecycle"
        };
        var aB = n("jDEJ");
        let aF = (0, o.u)(er.a, null);

        function az(e, t) {
            if (!e.get(eJ.c).isChatgptBrowserReplacement || t.repeat || ((0, aB.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(aF)) return;
            let n = aL("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(aF, n), aD(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function aG(e, t, n, a) {
            let r = e.get(aF);
            if (!e.get(eJ.c).isChatgptBrowserReplacement || null == r) return a();
            let s = n => {
                aD(e, r, n, t)
            };
            s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(aF)?.id !== r.id || e.get(aF)?.printing || e.set(aF, null), a
            }
        }

        function aL(e) {
            let t = performance.now();
            return {
                id: crypto.randomUUID(),
                entryPoint: e,
                startedAt: t,
                printing: !1
            }
        }

        function aD(e, t, n, a) {
            (0, eJ.a)(e, aO, {
                attemptId: t.id,
                stage: n,
                entryPoint: t.entryPoint,
                elapsedMs: Math.max(0, performance.now() - t.startedAt),
                preparation: a
            })
        }
        var aH = n("CpsU"),
            aW = n.n(aH),
            aq = n("rKAs"),
            aU = n("SqqO"),
            aK = n("zHp1"),
            aV = n("taWv");

        function aQ() {
            return Object.fromEntries(Array.from(document.images).flatMap(e => {
                if (!e.complete || 0 === e.naturalWidth) return [];
                let t = e.currentSrc || e.src;
                return [e.getAttribute("src"), e.src, t].flatMap(e => e ? [
                    [e, t]
                ] : [])
            }))
        }
        var a$ = n("gsAl"),
            aY = n("AO3k"),
            aX = n("aS84"),
            aJ = n("Qtjq"),
            aZ = "printDocument-v_w5Ax";
        let a0 = "https://chatgpt.com/download/?utm_source=chatgpt_web&utm_medium=print&utm_campaign=app_install";

        function a1(e) {
            let t, n, s, o, i, l, c, u, h, p, m, g, f = (0, r.c)(22),
                {
                    children: v,
                    title: y
                } = e,
                b = (0, d.a)(),
                {
                    getExperiment: x
                } = (0, eu.h)();
            if (!x("448755449").get("enabled", !1)) {
                let e, t;
                return f[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n4.b)(aZ, "hidden w-full space-y-1.5 bg-surface text-default print:block"), f[0] = e) : e = f[0], f[1] !== v ? (t = (0, a.jsx)("div", {
                    className: e,
                    "data-conversation-print": "",
                    "data-theme": "light",
                    children: v
                }), f[1] = v, f[2] = t) : t = f[2], t
            }
            return f[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n4.b)(aZ, "formattedPrintDocument-tP74Wl", "group/conversation-print hidden w-full bg-surface text-default print:block"), f[3] = t) : t = f[3], f[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(aX.a, {
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
            }), f[7] = v, f[8] = o) : o = f[8], f[9] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n4.b)("footer-QEzLbn", "flex items-center gap-3 rounded-2xl border border-default bg-surface-secondary p-2 text-default"), f[9] = i) : i = f[9], f[10] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)("div", {
                className: "flex size-10 shrink-0 items-center justify-center rounded-xl border border-default bg-surface",
                children: (0, a.jsx)(aJ.a, {
                    className: "size-7",
                    "aria-hidden": "true"
                })
            }), f[10] = l) : l = f[10], f[11] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)("p", {
                className: "font-semibold",
                children: (0, a.jsx)($.a, {
                    id: "chatgpt.print.downloadApp.title",
                    defaultMessage: "Take your curiosity further",
                    description: "Headline in the footer of a printed or PDF-saved ChatGPT conversation, inviting the reader to download the mobile app. Keep it short and encouraging."
                })
            }), f[11] = c) : c = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsxs)("div", {
                className: "min-w-0 flex-1 text-sm",
                children: [c, (0, a.jsx)("p", {
                    className: "mt-1 text-secondary",
                    children: (0, a.jsx)($.a, {
                        id: "chatgpt.print.downloadApp.description",
                        defaultMessage: "Scan to get the ChatGPT app",
                        description: "Instruction beside the QR code in the footer of a printed or PDF-saved conversation. Scanning the code opens the ChatGPT app download page. Keep it short."
                    })
                })]
            }), f[12] = u) : u = f[12], f[13] !== b ? (h = b.formatMessage({
                id: "chatgpt.print.downloadApp.qrCode",
                defaultMessage: "Download the ChatGPT app",
                description: "Accessible label for a QR code and link in a printed or PDF-saved conversation. The code and link open the ChatGPT app download page."
            }), f[13] = b, f[14] = h) : h = f[14], f[15] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)($.a, {
                id: "chatgpt.print.downloadApp.fallback",
                defaultMessage: "Get the app",
                description: "Link to the ChatGPT app download page when its QR code cannot be generated in a printed conversation"
            }), f[15] = p) : p = f[15], f[16] !== h ? (m = (0, a.jsxs)("footer", {
                className: i,
                children: [l, u, (0, a.jsx)("a", {
                    className: "shrink-0",
                    href: `${a0}&utm_content=pdf_link`,
                    children: (0, a.jsx)(aY.a, {
                        value: `${a0}&utm_content=qr`,
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

        function a2(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var a3 = n("zn0A"),
            a4 = n("jfiJ"),
            a5 = n("FGJH"),
            a6 = n("nmN6");
        let a7 = new WeakMap;

        function a8(e) {
            let t, n, s = (0, r.c)(6),
                i = (0, o.z)(aM.a);
            return s[0] !== i || s[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([i, e.entries[0]?.conversationId]), s[0] = i, s[1] = e.entries[0]?.conversationId, s[2] = t) : t = s[2], s[3] !== e || s[4] !== t ? (n = (0, a.jsx)(a9, {
                ...e
            }, t), s[3] = e, s[4] = t, s[5] = n) : n = s[5], n
        }

        function a9(e) {
            let t, n, s, i, l, d, u = (0, r.c)(16),
                h = (0, o.y)(q.a),
                p = (0, o.z)(ak.a),
                [m, g] = (0, c.useState)(!1),
                f = (0, c.useRef)(null);
            u[0] !== h ? (t = (e, t) => {
                if (az(h, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void f.current?.onKeyDown(e, t);
                let n = a7.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, ax.flushSync)(() => g(!0));
                let a = n ?? f.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => a7.get(e)).finally(() => {
                    t.aborted || g(!1)
                })
            }, u[0] = h, u[1] = t) : t = u[1];
            let v = (0, c.useEffectEvent)(t);
            u[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                (0, ax.flushSync)(() => g(!0)), f.current?.onBeforePrint()
            }, u[2] = n) : n = u[2];
            let y = (0, c.useEffectEvent)(n);
            u[3] !== h ? (s = () => {
                h.set(a3.a, null), g(!1)
            }, u[3] = h, u[4] = s) : s = u[4];
            let b = (0, c.useEffectEvent)(s);
            return u[5] !== b || u[6] !== y || u[7] !== v || u[8] !== h ? (i = () => {
                let e, t, n = new AbortController,
                    a = (e = () => {
                        if (!h.get(eJ.c).isChatgptBrowserReplacement) return;
                        let e = h.get(aF);
                        if (e?.printing) return;
                        let t = {
                            ...e ?? aL("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_UNOBSERVED"),
                            printing: !0
                        };
                        h.set(aF, t), aD(h, t, "CHATGPT_CONVERSATION_PRINT_STAGE_BEFORE_PRINT")
                    }, t = () => {
                        let e = h.get(aF);
                        h.get(eJ.c).isChatgptBrowserReplacement && e?.printing && (aD(h, e, "CHATGPT_CONVERSATION_PRINT_STAGE_AFTER_PRINT"), h.set(aF, null))
                    }, window.addEventListener("beforeprint", e, !0), window.addEventListener("afterprint", t), () => {
                        window.removeEventListener("beforeprint", e, !0), window.removeEventListener("afterprint", t), h.set(aF, null)
                    }),
                    r = e => v(e, n.signal);
                return window.addEventListener("keydown", r, !0), window.addEventListener("beforeprint", y, !0), window.addEventListener("afterprint", b), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), window.removeEventListener("beforeprint", y, !0), window.removeEventListener("afterprint", b), h.set(a3.a, null), a()
                }
            }, u[5] = b, u[6] = y, u[7] = v, u[8] = h, u[9] = i) : i = u[9], u[10] !== h ? (l = [h], u[10] = h, u[11] = l) : l = u[11], (0, c.useEffect)(i, l), u[12] !== p || u[13] !== e || u[14] !== m ? (d = m || p ? (0, a.jsx)(re, {
                ...e,
                ref: f,
                printing: p
            }) : null, u[12] = p, u[13] = e, u[14] = m, u[15] = d) : d = u[15], d
        }

        function re(e) {
            let t, n, i, l, d = (0, r.c)(19),
                {
                    entries: u,
                    title: h,
                    TurnRowComponent: p,
                    printing: m,
                    ref: g
                } = e,
                f = (0, o.y)(q.a),
                y = (0, c.useContext)(v.a),
                b = (0, c.useContext)(aR.a),
                {
                    getExperiment: x
                } = (0, eu.h)(),
                w = x("448755449", {
                    disableExposureLog: !0
                }).get("enabled", !1);
            d[0] !== u[0]?.conversationId ? (t = u[0]?.conversationId ?? (0, tD.d)(""), d[0] = u[0]?.conversationId, d[1] = t) : t = d[1], d[2] !== y || d[3] !== t ? (n = {
                auth: y,
                conversationId: t
            }, d[2] = y, d[3] = t, d[4] = n) : n = d[4];
            let C = (0, o.x)(null != u[0] && a$.h, n),
                _ = (0, o.x)(null == u[0] ? null : e8.e, u[0]?.conversationId ?? "") ?? !0,
                j = (0, c.useRef)(null),
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
                            let a = e.get(eI.j, n.conversationId);
                            t = {
                                serverId: a,
                                userResolver: (0, aV.c)(void 0, void 0, void 0, e.get(eI.S, n.conversationId) ?? void 0),
                                scopedResolver: (0, aV.c)(a ?? void 0)
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
                            void 0 === t.generatedResolver && (t.generatedResolver = e.get(aV.a, n.conversationId));
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
                                        for (let a of (0, aq.u)(t, e)) {
                                            if (r && (0, aU.d)(a.src)) continue;
                                            let e = a.searchResult?.isProxied && (a.previewSrc === a.searchResult.contentSrc || a.previewSrc === a.searchResult.originalSrc) ? a.src : a.previewSrc;
                                            o.push({
                                                conversationId: n.conversationId,
                                                src: a.src,
                                                previewSrc: null != e && r && (0, aU.d)(e) ? a.src : e
                                            })
                                        }
                            }
                            if (null == s) continue;
                            i.push(...l.contentReferences.flatMap((e, t) => (0, aq.u)(e, t).map(e => {
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
                        return null != t && (0, aK.h)(t) ? [{
                            src: t,
                            resolver: n
                        }] : []
                    });
                    return {
                        queryKey: ["chatgpt-print-assets", e.get(aM.a), t[0]?.conversationId, a, r, o, c.map(e => {
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
                        staleTime: ef.b.FIVE_MINUTES,
                        refetchOnWindowFocus: !1,
                        retry: !1,
                        queryFn: t => {
                            let {
                                client: a,
                                signal: i,
                                queryKey: l
                            } = t;
                            return aG(e, "CHATGPT_CONVERSATION_PRINT_PREPARATION_IMAGES", i, async () => {
                                let t = {
                                    ...a.getQueryData(l)?.imageSources
                                };
                                for (let e of aW()(c, 6)) i.throwIfAborted(), await Promise.all(e.map(async e => {
                                    let {
                                        src: n,
                                        resolver: r
                                    } = e, s = await (0, aK.a)(a, n, r);
                                    if (i.throwIfAborted(), null != s) {
                                        let e = new Image;
                                        e.referrerPolicy = "no-referrer", e.src = s, await e.decode(), t[n] = s
                                    }
                                }));
                                let d = new Map,
                                    u = o.flatMap(t => {
                                        let n = d.get(t.conversationId);
                                        return (null == n && (n = r || !e.get(a$.h, {
                                            auth: s,
                                            conversationId: t.conversationId
                                        }) && e.get(e8.e, t.conversationId), d.set(t.conversationId, n)), n && (0, aU.d)(t.src)) ? [] : [{
                                            ...t,
                                            previewSrc: n && null != t.previewSrc && (0, aU.d)(t.previewSrc) ? t.src : t.previewSrc
                                        }]
                                    }),
                                    h = n ? t : await async function(e, t, n) {
                                        if (0 === e.length) return t;
                                        let a = aQ(),
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
                }(f, u, m, w, "restricted" === b || !C && _, y),
                {
                    data: I,
                    isSuccess: T,
                    isError: E,
                    refetch: P
                } = (0, s.a)(S);
            return d[5] !== S || d[6] !== I || d[7] !== w || d[8] !== T || d[9] !== P || d[10] !== f ? (i = () => ({
                onKeyDown(e, t) {
                    if (!e.defaultPrevented && (!T || !I.complete) && (e.preventDefault(), !e.repeat && j.current !== t)) return j.current = t, P({
                        cancelRefetch: !1
                    }).then(() => {
                        t.aborted || window.print()
                    }).finally(() => {
                        j.current === t && (j.current = null)
                    })
                },
                onBeforePrint() {
                    if (w) {
                        let e = f.queryClient.getQueryData(S.queryKey),
                            t = {
                                ...aQ(),
                                ...e?.imageSources
                            };
                        (0, ax.flushSync)(() => f.set(a3.a, t))
                    }
                }
            }), d[5] = S, d[6] = I, d[7] = w, d[8] = T, d[9] = P, d[10] = f, d[11] = i) : i = d[11], (0, c.useImperativeHandle)(g, i), d[12] !== p || d[13] !== u || d[14] !== E || d[15] !== T || d[16] !== m || d[17] !== h ? (l = m ? (0, ax.createPortal)((0, a.jsx)(a1, {
                title: h,
                children: (0, a.jsx)(aN.a, {
                    value: null,
                    children: (0, a.jsx)(a6.a, {
                        value: null,
                        children: T ? u.map(e => {
                            var t;
                            return (0, a.jsx)(p, {
                                entry: {
                                    ...e,
                                    timestampSeparatorAtMs: null,
                                    turn: {
                                        ...t = e.turn,
                                        suppressTurnActions: !0,
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? a2(e) : {
                                            ...e,
                                            items: e.items.map(a2),
                                            activeReasoning: null == e.activeReasoning ? void 0 : a2(e.activeReasoning)
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
                            children: E ? (0, a.jsx)($.a, {
                                id: "chatgpt.printAssets.error",
                                defaultMessage: "Some images could not be loaded. Close print and try again.",
                                description: "Printed instead of a partial conversation when its images failed to load"
                            }) : (0, a.jsx)($.a, {
                                id: "chatgpt.printAssets.loading",
                                defaultMessage: "Images are still loading. Close print and try again.",
                                description: "Printed instead of an incomplete conversation when its images are still loading"
                            })
                        })
                    })
                })
            }), document.body) : null, d[12] = p, d[13] = u, d[14] = E, d[15] = T, d[16] = m, d[17] = h, d[18] = l) : l = d[18], l
        }

        function rt(e) {
            let t, n, a, i, l, u, h = (0, r.c)(22),
                {
                    conversationId: p
                } = e,
                m = (0, o.y)(er.a),
                g = (0, d.a)(),
                f = (0, c.useRef)(null),
                v = (0, o.z)(aM.a),
                y = (0, o.x)(eI.j, p),
                b = (0, o.z)(a5.b);
            h[0] !== v || h[1] !== y ? (t = ["chatgpt-print-history", v, y], h[0] = v, h[1] = y, h[2] = t) : t = h[2], h[3] !== m || h[4] !== y ? (n = e => {
                let {
                    signal: t
                } = e;
                return aG(m, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != y && await (0, a4.a)(m, y, t), !0))
            }, h[3] = m, h[4] = y, h[5] = n) : n = h[5], h[6] !== t || h[7] !== n ? (a = {
                queryKey: t,
                enabled: !1,
                staleTime: 0,
                retry: !1,
                refetchOnWindowFocus: !1,
                queryFn: n
            }, h[6] = t, h[7] = n, h[8] = a) : a = h[8];
            let {
                refetch: x
            } = (0, s.a)(a);
            h[9] !== v || h[10] !== p || h[11] !== g || h[12] !== b || h[13] !== x || h[14] !== m || h[15] !== y ? (i = (e, t) => {
                if (az(m, e), e.defaultPrevented || null == y || 0 === b || m.get(a5.c, y)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (f.current?.signal === t) return void a7.set(e, f.current.preparation);
                let n = x({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && m.get(aM.a) === v) {
                        if (e.isError) return void m.get(en.f).danger(g.formatMessage({
                            id: "chatgpt.printHistory.error",
                            defaultMessage: "Couldn't load the full conversation to print",
                            description: "Error toast after printing a conversation fails because its older messages could not be loaded; the user can retry printing"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgpt.printHistory.error"
                            }
                        });
                        await Promise.all(m.queryClient.getQueryCache().findAll({
                            queryKey: ["chatgpt-print-assets", v, p],
                            predicate: rr
                        }).map(rn)), t.aborted || m.get(aM.a) !== v || window.print()
                    }
                }).finally(() => {
                    f.current?.signal === t && (f.current = null)
                });
                f.current = {
                    signal: t,
                    preparation: n
                }, a7.set(e, n)
            }, h[9] = v, h[10] = p, h[11] = g, h[12] = b, h[13] = x, h[14] = m, h[15] = y, h[16] = i) : i = h[16];
            let w = (0, c.useEffectEvent)(i);
            return h[17] !== w ? (l = () => {
                let e = new AbortController,
                    t = t => w(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, h[17] = w, h[18] = l) : l = h[18], h[19] !== v || h[20] !== y ? (u = [v, y], h[19] = v, h[20] = y, h[21] = u) : u = h[21], (0, c.useEffect)(l, u), null
        }

        function rn(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(ra)
        }

        function ra() {}

        function rr(e) {
            return e.getObserversCount() > 0
        }
        var rs = n("gbRX");

        function ro(e) {
            let t, n, s = (0, r.c)(4),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e,
                d = (0, o.z)(!l && rs.a) || i;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)($.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again",
                description: "Retry loading a ChatGPT conversation after its history could not be loaded"
            }), s[0] = t) : t = s[0], s[1] !== c || s[2] !== d ? (n = (0, a.jsx)(tp.a, {
                color: "ghost",
                disabled: d,
                onClick: c,
                children: t
            }), s[1] = c, s[2] = d, s[3] = n) : n = s[3], n
        }

        function ri(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)($.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation",
                description: "Error state when a ChatGPT conversation fetch fails"
            }), o[0] = t) : t = o[0], o[1] !== i || o[2] !== l || o[3] !== c ? (n = null != c ? (0, a.jsx)(ro, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, o[1] = i, o[2] = l, o[3] = c, o[4] = n) : n = o[4], o[5] !== n ? (s = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), o[5] = n, o[6] = s) : s = o[6], s
        }
        var rl = n("FfNP"),
            rc = n("WVag");
        let rd = (0, tg.a)(rl.loadEpicChartIndicator);

        function ru(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                i = (0, o.x)(rc.a, s),
                [l, d] = (0, c.useState)(!1);
            return l || null == i || d(!0), n[0] !== s || n[1] !== l ? (t = l ? (0, a.jsx)(rd, {
                conversationId: s
            }) : null, n[0] = s, n[1] = l, n[2] = t) : t = n[2], t
        }
        var rh = n("RGWz"),
            rp = n("QxH2"),
            rm = n("UuVq"),
            rg = n("l0fK"),
            rf = n("hkBU"),
            rv = n("T1PX"),
            ry = n("zOE4"),
            rb = n("guID"),
            rx = n("Mbqw"),
            rw = n("yzQ9"),
            rC = n("uYx2"),
            r_ = n("Gjet"),
            rj = n("SBcL"),
            rS = n("gJe8"),
            rI = n("ASxG"),
            rT = n("wD9O"),
            rE = n("lsfk"),
            rP = n("IObw"),
            rA = n("BOYb"),
            rM = n("kQNh"),
            rk = n.n(rM),
            rR = n("NkEl"),
            rN = n("FW69"),
            rO = "highlight-x7OnzP",
            rB = "safari-wcvuzB",
            rF = "block-t7sxyD";
        let rz = "chatgpt-search-result",
            rG = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* rL(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(rG) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let s = RegExp(t.split(/\n+/u).map(rk()).join("\\n*"), "g");
            for (let n = s.exec(r); null != n && n.index < r.length; n = s.exec(r)) {
                let r = n.index;
                s.lastIndex = r + 1;
                let o = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < o);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, o - l.start), rD(c) && ((0, rN.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function rD(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let rH = rI.object({
            chatGptSearchNavigation: rI.object({
                key: rI.string(),
                messageId: rI.string()
            })
        });

        function rW(e) {
            let t, n, a, s, i, l, d, h, p, m, g, f, v = (0, r.c)(50),
                {
                    conversationId: y,
                    entries: b,
                    isConversationFetching: x,
                    turnListApi: w
                } = e,
                C = (0, o.y)(er.a),
                _ = (0, o.x)(eI.s, y),
                j = (0, rE.b)(),
                S = (0, rT.c)();
            v[0] !== j || v[1] !== S ? (t = e => {
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
                            left: (0, rT.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                        h = (0, rT.b)(o.height, n),
                        p = (0, rT.b)(o.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, j, S)
            }, v[0] = j, v[1] = S, v[2] = t) : t = v[2];
            let I = (0, c.useEffectEvent)(t),
                T = (0, u.Y)(),
                E = (0, u._)(),
                P = new URLSearchParams(T.search),
                A = P.get("messageId") ?? P.get("message"),
                M = rH.safeParse(T.state).data?.chatGptSearchNavigation,
                k = A ?? M?.messageId,
                R = P.get("selectedTextQuery") ?? "",
                N = (0, o.x)(eI.M, y),
                O = !R || null != k && null != N && (N[k]?.message != null || Object.values(N).some(e => e.message?.id === k)),
                B = R || P.get("historySearchQuery") || "",
                F = JSON.stringify([y, null != A ? T.key : M?.key ?? T.key, k]);
            v[3] !== F ? (n = {
                key: F,
                handled: !1,
                positioned: !1
            }, v[3] = F, v[4] = n) : n = v[4];
            let z = (0, c.useRef)(n),
                G = (0, c.useEffectEvent)(e => {
                    z.current.positioned = !0;
                    let t = B.trim().length > 0 ? function(e, t, n) {
                        let a, r, s, o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            p = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === p.length) return () => {};
                        let m = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(rk()).join("|") : rk()(c), null == c ? "giu" : "gu"),
                            g = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(C);

                        function w() {
                            for (let t of (g = !0, x.disconnect(), clearTimeout(r), null != s && cancelAnimationFrame(s), null != a && CSS.highlights.get(rz) === a && CSS.highlights.delete(rz), e.classList.remove(rO, rB), b)) t.classList.remove(rO, rF)
                        }

                        function C() {
                            g || null != r || null != s || (r = setTimeout(() => {
                                r = void 0, s = requestAnimationFrame(() => {
                                    s = void 0, _()
                                })
                            }, 50))
                        }

                        function _() {
                            let t;
                            if (g || !e.isConnected || null != s) return;
                            let d = performance.now() - f;
                            if (d < 4e3 && null != e.querySelector("[data-search-result-pending]")) return void C();
                            let u = (0, rR.a)(e);
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
                                        s = void 0, _()
                                    })
                                });
                                return
                            }
                            let j = [];
                            if (null != c) {
                                let t = e.querySelector('[data-markdown-text-style="assistant-message"]') ?? e,
                                    n = 0;
                                for (let e of rL(t, c))
                                    if (!(n++ < l)) {
                                        j.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(rG) != null || u.some(t => {
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), rD(a) && j.push(a)
                                    }
                            }
                            let S = h.flatMap(e => {
                                let {
                                    element: t,
                                    target: n
                                } = e, a = t.getBoundingClientRect(), r = j.some(e => t.contains(e.startContainer));
                                return "terms" === i && a.width > 0 && a.height > 0 && ("block" === n.highlight || "auto" === n.highlight && !r) ? [t] : []
                            });
                            if (0 === j.length && 0 === S.length) {
                                if (d < 800) return void C();
                                S.push(e)
                            }
                            let I = 0,
                                T = 0;
                            for (let e of [...j, ...S]) {
                                let n = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect(),
                                    a = n?.top ?? 0,
                                    r = n?.left ?? 0;
                                (null == t || 0 > (a - I || r - T)) && (t = e, I = a, T = r)
                            }
                            t = t ?? e, v && n?.(t);
                            let E = t instanceof Range ? t.getClientRects()[0] : t.getBoundingClientRect(),
                                P = [E?.top, E?.left, E?.width, E?.height, e.scrollHeight].join(":");
                            if (d < 4e3 && P !== o) {
                                o = P, C();
                                return
                            }
                            if (!v) {
                                v = !0, o = void 0, n?.(t), C();
                                return
                            }
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...j), CSS.highlights.set(rz, a)) : j.length > 0 && S.push(e), e.classList.add(rO), (0, rA.e)() && e.classList.add(rB), S)) t.classList.add(rO, rF), b.add(t);
                            r = setTimeout(w, 3600)
                        }
                        return x.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), _(), w
                    }(e, B, I, R ? "phrase" : "terms", Number(P.get("selectedTextOccurrence"))) : void 0;
                    return null != A && (P.delete("messageId"), P.delete("message"), P.delete("historySearchQuery"), P.delete("selectedTextQuery"), P.delete("selectedTextOccurrence"), E({
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
                                messageId: A
                            }
                        }
                    })), t
                });
            v[5] !== y || v[6] !== x || v[7] !== k || v[8] !== F || v[9] !== C || v[10] !== O ? (a = () => {
                if (z.current.key !== F && (z.current = {
                        key: F,
                        handled: !1,
                        positioned: !1
                    }), null != k && !x && O) return C.watch(e => {
                    !z.current.handled && (0, eI.Pb)(e, y, k) && (z.current.handled = !0)
                })
            }, s = [y, x, k, F, C, O], v[5] = y, v[6] = x, v[7] = k, v[8] = F, v[9] = C, v[10] = O, v[11] = a, v[12] = s) : (a = v[11], s = v[12]), (0, c.useLayoutEffect)(a, s), v[13] !== b || v[14] !== k ? (i = null == k ? void 0 : b.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(k)
            }), v[13] = b, v[14] = k, v[15] = i) : i = v[15];
            let L = i;
            v[16] !== T || v[17] !== E || v[18] !== A || v[19] !== M ? (l = () => {
                null == A && null != M && E(T, {
                    replace: !0,
                    preventScrollReset: !0,
                    state: {
                        ...T.state,
                        chatGptSearchNavigation: void 0
                    }
                })
            }, v[16] = T, v[17] = E, v[18] = A, v[19] = M, v[20] = l) : l = v[20];
            let D = (0, c.useEffectEvent)(l);
            if (v[21] !== D || v[22] !== _ || v[23] !== x || v[24] !== L ? (d = () => {
                    !z.current.positioned || null != L || x || _ || D()
                }, v[21] = D, v[22] = _, v[23] = x, v[24] = L, v[25] = d) : d = v[25], v[26] !== _ || v[27] !== x || v[28] !== L ? (h = [_, x, L], v[26] = _, v[27] = x, v[28] = L, v[29] = h) : h = v[29], (0, c.useLayoutEffect)(d, h), v[30] !== k || v[31] !== L?.id || v[32] !== L?.turn || v[33] !== L?.turn.items || v[34] !== L?.turn.items.findIndex || v[35] !== L?.turnKey) {
                let e = L?.turn.items.findIndex(e => "messageId" in e && e.messageId === k || "assistant-message" === e.type && null != k && e.sourceMessageIds?.includes(k)) ?? -1,
                    t = L?.turn.items[e],
                    n = L?.id;
                m = L?.turnKey, p = null == t || null == n ? void 0 : (0, rP.b)(t, e, n), v[30] = k, v[31] = L?.id, v[32] = L?.turn, v[33] = L?.turn.items, v[34] = L?.turn.items.findIndex, v[35] = L?.turnKey, v[36] = p, v[37] = m
            } else p = v[36], m = v[37];
            let H = p;
            return v[38] !== G || v[39] !== k || v[40] !== m || v[41] !== w || v[42] !== H ? (g = () => {
                let e;
                if (null == m || null == w) return;
                let t = new AbortController,
                    n = null;
                return w.scrollToKey(m, e => n = (null == k ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(k)}"]`)) ?? (null == H ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(H)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = G(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, v[38] = G, v[39] = k, v[40] = m, v[41] = w, v[42] = H, v[43] = g) : g = v[43], v[44] !== k || v[45] !== F || v[46] !== m || v[47] !== w || v[48] !== H ? (f = [F, k, m, w, H], v[44] = k, v[45] = F, v[46] = m, v[47] = w, v[48] = H, v[49] = f) : f = v[49], (0, c.useLayoutEffect)(g, f), null
        }
        var rq = n("Ppno"),
            rU = n("lA5q"),
            rK = n("wDWo"),
            rV = n("IgxH"),
            rQ = n("iaTG"),
            r$ = n("c3f5"),
            rY = n("XpUB"),
            rX = n("xAIC"),
            rJ = n("wltt"),
            rZ = n("Sd8U");
        let r0 = (0, o.t)("ChatGptTranscriptScope", {
            parent: rZ.a,
            key: e => e.presentation
        });
        var r1 = n("r2mP"),
            r2 = n("ag0v"),
            r3 = n("HE5u"),
            r4 = n("RADZ"),
            r5 = n("rZzh"),
            r6 = n("hZRx");

        function r7(e) {
            let t, n, s, i, l, c, d, u, h, p, m = (0, r.c)(57),
                {
                    entry: g,
                    renderMcpApps: f,
                    trackShownImpressions: v
                } = e,
                y = void 0 === f || f,
                b = void 0 === v || v,
                x = (0, o.y)(er.a);
            m[0] !== g.conversationId ? (t = (0, U.o)({
                routeKind: "chatgpt-thread",
                conversationId: g.conversationId
            }), m[0] = g.conversationId, m[1] = t) : t = m[1];
            let w = (0, o.x)(b ? N.c : null, t),
                C = b && null == w,
                _ = (0, o.x)(g.isMostRecentTurn ? r5.e : null, g.conversationId);
            m[2] !== g.timestampSeparatorAtMs ? (n = null == g.timestampSeparatorAtMs ? null : (0, a.jsx)(r1.b, {
                sentAtMs: g.timestampSeparatorAtMs
            }), m[2] = g.timestampSeparatorAtMs, m[3] = n) : n = m[3];
            let j = null != g.paragen;
            m[4] !== g.branchingMessageId || m[5] !== g.browserConversationId || m[6] !== g.conversationId || m[7] !== g.dilEditDisclosure || m[8] !== g.enableCloudBrowserActivity || m[9] !== g.feedbackEnabled || m[10] !== g.hasLaterSitesPreview || m[11] !== g.id || m[12] !== g.isMostRecentTurn || m[13] !== g.isReadOnly || m[14] !== g.isTemporaryChat || m[15] !== g.isWorkConversation || m[16] !== g.onEditUserMessage || m[17] !== g.onFork || m[18] !== g.onRegenerateResponse || m[19] !== g.pendingSubmissionAttachments || m[20] !== g.readAloudEnabled || m[21] !== g.referenceImageSuggestionActionInput || m[22] !== g.safetyReview || m[23] !== g.shareEnabled || m[24] !== g.turn || m[25] !== y || m[26] !== C || m[27] !== j ? (s = (0, a.jsx)(r3.a, {
                dilEditDisclosure: g.dilEditDisclosure,
                browserConversationId: g.browserConversationId,
                conversationId: g.conversationId,
                enableCloudBrowserActivity: g.enableCloudBrowserActivity,
                branchingMessageId: g.branchingMessageId,
                hasLaterSitesPreview: g.hasLaterSitesPreview,
                hostId: K.a,
                isMostRecentTurn: g.isMostRecentTurn,
                isReadOnly: g.isReadOnly,
                isTemporaryChat: g.isTemporaryChat,
                isParagen: j,
                isWorkConversation: g.isWorkConversation,
                readAloudEnabled: g.readAloudEnabled,
                renderMcpApps: y,
                feedbackEnabled: g.feedbackEnabled,
                onEditUserMessage: g.onEditUserMessage,
                onFork: g.onFork,
                onRegenerateResponse: g.onRegenerateResponse,
                pendingSubmissionAttachments: g.pendingSubmissionAttachments,
                referenceImageSuggestionActionInput: g.referenceImageSuggestionActionInput,
                shareEnabled: g.shareEnabled,
                safetyReview: g.safetyReview,
                trackShownImpressions: C,
                turn: g.turn,
                turnId: g.id
            }), m[4] = g.branchingMessageId, m[5] = g.browserConversationId, m[6] = g.conversationId, m[7] = g.dilEditDisclosure, m[8] = g.enableCloudBrowserActivity, m[9] = g.feedbackEnabled, m[10] = g.hasLaterSitesPreview, m[11] = g.id, m[12] = g.isMostRecentTurn, m[13] = g.isReadOnly, m[14] = g.isTemporaryChat, m[15] = g.isWorkConversation, m[16] = g.onEditUserMessage, m[17] = g.onFork, m[18] = g.onRegenerateResponse, m[19] = g.pendingSubmissionAttachments, m[20] = g.readAloudEnabled, m[21] = g.referenceImageSuggestionActionInput, m[22] = g.safetyReview, m[23] = g.shareEnabled, m[24] = g.turn, m[25] = y, m[26] = C, m[27] = j, m[28] = s) : s = m[28], m[29] !== g.conversationId || m[30] !== g.isTemporaryChat || m[31] !== g.isWorkConversation || m[32] !== g.paragen || m[33] !== y || m[34] !== C ? (i = null == g.paragen ? null : (0, a.jsx)(r4.a, {
                renderMcpApps: y,
                comparison: g.paragen,
                conversationId: g.conversationId,
                hostId: K.a,
                isTemporaryChat: g.isTemporaryChat,
                isWorkConversation: g.isWorkConversation,
                trackTaskViews: C
            }, g.paragen.promptMessageId), m[29] = g.conversationId, m[30] = g.isTemporaryChat, m[31] = g.isWorkConversation, m[32] = g.paragen, m[33] = y, m[34] = C, m[35] = i) : i = m[35], m[36] !== g.showSharedConversationPrivateDisclaimer ? (l = g.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(E.a, {
                    className: "shrink-0",
                    legacyIcon: r2.a,
                    asset16: r6.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)($.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you",
                    description: "Privacy disclaimer shown between the original shared ChatGPT conversation and the reader's new private messages after they continue the shared conversation in Codex Desktop"
                })]
            }) : null, m[36] = g.showSharedConversationPrivateDisclaimer, m[37] = l) : l = m[37], m[38] !== g || m[39] !== _ || m[40] !== x || m[41] !== C ? (c = g.isMostRecentTurn ? (0, a.jsx)(tu.a, {
                conversationId: g.conversationId,
                errorMessage: g.errorMessage,
                isWorkConversation: g.isWorkConversation,
                onRetry: null == g.onRegenerateResponse || null == _ ? void 0 : async e => {
                    let t = x.get(r5.e, g.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = x.get(eI.U, g.conversationId)?.metadata?.errorCode;
                    (0, eS.d)(x.get(eJ.c).logProductEvent, {
                        conversationId: x.get(eI.j, g.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await g.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, r5.f)(t.message, x.get(ts.u, g.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                showPendingLoadingMessage: g.showPendingLoadingMessage,
                showRequestUserInputStatus: g.showRequestUserInputStatus,
                trackShownImpressions: C,
                useDefaultModel: _?.useDefaultModel,
                isRetryDisabled: _?.isRetryDisabled
            }) : null, m[38] = g, m[39] = _, m[40] = x, m[41] = C, m[42] = c) : c = m[42], m[43] !== s || m[44] !== i || m[45] !== l || m[46] !== c ? (d = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [s, i, l, c]
            }), m[43] = s, m[44] = i, m[45] = l, m[46] = c, m[47] = d) : d = m[47], m[48] !== g.id || m[49] !== d || m[50] !== n ? (u = (0, a.jsxs)("div", {
                "data-content-search-turn-key": g.id,
                children: [n, d]
            }), m[48] = g.id, m[49] = d, m[50] = n, m[51] = u) : u = m[51];
            let S = u;
            return m[52] !== g.dilVisualSlotId ? (h = null != g.dilVisualSlotId && (0, a.jsx)("div", {
                "data-dil-anchor-spacer": "",
                "aria-hidden": "true"
            }), m[52] = g.dilVisualSlotId, m[53] = h) : h = m[53], m[54] !== S || m[55] !== h ? (p = (0, a.jsxs)(a.Fragment, {
                children: [h, S]
            }), m[54] = S, m[55] = h, m[56] = p) : p = m[56], p
        }

        function r8(e) {
            let t, n, s, i = (0, r.c)(6);
            i[0] !== e ? ({
                renderMcpApps: n,
                ...t
            } = e, i[0] = e, i[1] = t, i[2] = n) : (t = i[1], n = i[2]);
            let l = void 0 === n || n,
                c = (0, o.y)(r0),
                d = l && c.value.rendersWidgets;
            return i[3] !== t || i[4] !== d ? (s = (0, a.jsx)(r7, {
                ...t,
                renderMcpApps: d
            }), i[3] = t, i[4] = d, i[5] = s) : s = i[5], s
        }

        function r9(e) {
            let t, n, s, i, l, d, u, h = (0, r.c)(17),
                {
                    entries: p,
                    historyLoader: m,
                    isVisible: g,
                    rendersWidgets: f,
                    onVisibilityChange: v
                } = e;
            h[0] !== g || h[1] !== v ? (t = () => (v(g), () => v(!1)), n = [g, v], h[0] = g, h[1] = v, h[2] = t, h[3] = n) : (t = h[2], n = h[3]), (0, c.useLayoutEffect)(t, n), h[4] !== f ? (s = {
                presentation: "floating",
                rendersWidgets: f
            }, h[4] = f, h[5] = s) : s = h[5];
            let y = g ? m : null;
            return h[6] !== p ? (i = (0, a.jsx)(rJ.a, {
                entries: p,
                preserveMeasuredTurnViewport: !0,
                RowComponent: se
            }), h[6] = p, h[7] = i) : i = h[7], h[8] !== y || h[9] !== i ? (l = (0, a.jsx)(aN.a, {
                value: null,
                children: (0, a.jsxs)(a6.a, {
                    value: null,
                    children: [y, i]
                })
            }), h[8] = y, h[9] = i, h[10] = l) : l = h[10], h[11] !== g || h[12] !== l ? (d = (0, a.jsx)(r_.a, {
                active: g,
                presentation: "panel",
                children: l
            }), h[11] = g, h[12] = l, h[13] = d) : d = h[13], h[14] !== s || h[15] !== d ? (u = (0, a.jsx)(o.b, {
                scope: r0,
                value: s,
                children: d
            }), h[14] = s, h[15] = d, h[16] = u) : u = h[16], u
        }

        function se(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(r8, {
                entry: {
                    ...s,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    readAloudEnabled: !1
                },
                trackShownImpressions: !1
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var st = n("qZWE"),
            sn = n("PC5z"),
            sa = n("lZ4W"),
            sr = n("ihvi"),
            ss = n("nMdB");
        let so = "[data-d-component]:not([data-d-text-flow])";
        class si extends c.Component {
            static contextType = rT.a;
            held = null;
            presented = this.props;
            userMotion;
            resumePlacement;
            stopLayoutCorrection;
            textObserver;
            unsubscribe;
            releaseHold = () => {
                this.held = null, this.textObserver?.disconnect(), this.textObserver = void 0, this.userMotion?.cancel(), this.userMotion = void 0, this.resumePlacement = void 0, this.stopLayoutCorrection?.(), this.stopLayoutCorrection = void 0
            };
            componentDidMount() {
                this.unsubscribe = this.props.scrollController.addUserScrollListener(() => {
                    let e = null != this.userMotion;
                    this.releaseHold(), e && (this.presented = this.props, this.forceUpdate())
                })
            }
            componentWillUnmount() {
                this.releaseHold(), this.unsubscribe?.()
            }
            holdForResponse = e => (!this.held && this.props.active && (this.held = this.capture()), !!this.held && (this.resumePlacement = e, this.props.scrollController.holdViewport(), !0));
            releaseForHistoryToggle = () => {
                this.releaseHold()
            };
            capture() {
                let {
                    visualId: e,
                    scrollController: t
                } = this.props;
                if (!e) return null;
                let n = t.getScrollElement(),
                    a = n?.querySelector(`[data-dil-visual-slot="${CSS.escape(e)}"]`);
                if (!n || !a) return null;
                let r = a.querySelector(so) ?? a,
                    s = r.getBoundingClientRect(),
                    o = n.getBoundingClientRect();
                return s.bottom <= o.top || s.top >= o.bottom ? null : {
                    top: s.top,
                    body: r,
                    element: a,
                    scrollElement: n
                }
            }
            requestingBubble(e) {
                let t = this.props.exchangeKey;
                return null == t ? null : e.scrollElement.querySelector(`[data-turn-key="${CSS.escape(t)}"] [data-user-message-bubble]`)
            }
            getSnapshotBeforeUpdate(e) {
                let t = e.visualId !== this.props.visualId,
                    n = !this.props.active && (this.props.hasStreamingFinalText || e.replyPending && !this.props.replyPending);
                if (t || n) {
                    let e = this.resumePlacement;
                    return this.releaseHold(), n || this.props.active && null != this.props.visualId ? e ?? null : null
                }
                return e.active && e.exchangeKey !== this.props.exchangeKey && (this.stopLayoutCorrection?.(), this.userMotion?.cancel(), this.held = this.held ?? this.capture(), this.held || (this.resumePlacement = void 0)), this.held
            }
            observeStreamingDilText() {
                let {
                    streamingDilFinalId: e,
                    exchangeKey: t
                } = this.props, n = this.held?.scrollElement;
                if (this.textObserver || !n || !e || !t) return;
                let a = n.querySelector(`[data-turn-key="${CSS.escape(t)}"]`);
                if (!a) return;
                let r = `[data-dil-source-message-id="${CSS.escape(e)}"] [data-d-component]`,
                    s = () => {
                        let e = a.querySelector(r);
                        if (e?.dataset.dComponent !== "text" || !e.textContent?.trim() || !e.getClientRects().length) return;
                        let n = this.resumePlacement;
                        this.releaseHold(), n?.(t)
                    };
                this.textObserver = new MutationObserver(s), this.textObserver.observe(a, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                }), s()
            }
            componentDidUpdate(e, t, n) {
                if ((e.streamingDilFinalId !== this.props.streamingDilFinalId || e.exchangeKey !== this.props.exchangeKey) && (this.textObserver?.disconnect(), this.textObserver = void 0), "function" == typeof n ? null != this.props.exchangeKey && n(this.props.exchangeKey) : this.restore(n), this.props.active || this.observeStreamingDilText(), this.props.active && e.visualOwnerId !== this.props.visualOwnerId && (this.resumePlacement = void 0), this.held && this.shouldAnimateFold()) {
                    if (!this.userMotion) {
                        let e = this.requestingBubble(this.held);
                        e ? (this.userMotion = e.animate([{
                            translate: "0 0",
                            opacity: 1
                        }, {
                            translate: "0 -36px",
                            opacity: 0
                        }], {
                            duration: 245,
                            easing: "cubic-bezier(.25,.55,.35,1)",
                            fill: "forwards"
                        }), this.userMotion.onfinish = this.showAcceptedEdit) : this.showAcceptedEdit()
                    }
                    return
                }
                this.presented = this.props, this.userMotion?.cancel(), this.userMotion = void 0
            }
            shouldAnimateFold() {
                return null != this.held && !this.props.reducedMotion && this.props.active && this.presented.visualId === this.props.visualId && this.presented.exchangeKey === this.props.exchangeKey && this.presented.visualOwnerId !== this.props.visualOwnerId
            }
            showAcceptedEdit = () => {
                this.presented = this.props, this.forceUpdate()
            };
            restoreAfterMeasurement = () => {
                this.restore(this.held)
            };
            restore(e) {
                if (!e?.element.isConnected) return;
                let {
                    scrollController: t
                } = this.props;
                e.body.isConnected || (e.body = e.element.querySelector(so) ?? e.element);
                let n = () => (0, rT.b)(e.body.getBoundingClientRect().top - e.top, this.context),
                    a = n();
                if (!(1 > Math.abs(a))) {
                    if (this.held) {
                        let t = e.element.closest("[data-turn-key]")?.querySelector("[data-dil-anchor-spacer]");
                        if (t) {
                            let r = parseFloat(t.style.height) || 0,
                                s = r + Math.max(0, -a - e.scrollElement.scrollTop) - Math.min(r, Math.max(0, a));
                            s !== r && (t.style.height = `${s}px`, a = n())
                        }
                    }
                    this.held && a > 0 && this.props.ensureScrollRoomForAnchor?.(a), t.holdViewport(), t.compensateScrollToDistanceFromBottomPx(Math.max(0, (0, rC.b)(e.scrollElement) - a)), this.stopLayoutCorrection?.(), this.stopLayoutCorrection = (0, ss.a)(e.body, this.context)
                }
            }
            render() {
                return this.shouldAnimateFold() ? this.presented.children : this.props.children
            }
        }
        var sl = n("aRto"),
            sc = n("WWSI"),
            sd = n("U3Gy"),
            su = n("mKTJ");
        let sh = (0, o.c)(U.a, e => {
                let {
                    get: t
                } = e;
                return t(st.l)
            }, {
                isEqual: t_()
            }),
            sp = (0, o.c)(U.a, e => {
                let {
                    get: t
                } = e;
                return t(sn.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function sm(e) {
            let t, n, s, i, l, d, h, p, m = (0, r.c)(38),
                {
                    conversationId: g,
                    entries: f,
                    viewportRef: v,
                    isTurnActive: y,
                    onApiChange: b,
                    onVisibleContentReady: x,
                    responseSpacerState: w
                } = e,
                {
                    sharedConversationId: C
                } = (0, u.cb)(),
                _ = (0, o.z)(null != C && "u" > typeof Element && "function" != typeof Element.prototype.moveBefore ? sh : null),
                j = (0, o.z)(sp),
                S = (0, rE.b)(),
                [I, T] = (0, c.useState)(sv);
            m[0] !== v ? (t = (e, t) => {
                v.current?.releaseForHistoryToggle(), T(n => {
                    let a = new Map(n);
                    return a.get(e) === t ? a.delete(e) : a.set(e, t), a
                })
            }, m[0] = v, m[1] = t) : t = m[1];
            let E = function(e, t, n) {
                    if (!e.some(e => null != e.dilEditRequests)) return e;
                    let a = new Set;
                    return e.flatMap(e => {
                        let r, s = e.dilEditRequests;
                        if (!s || e.dilVisualSlotId) return [e];
                        let o = e.turn.items.filter(e => {
                            if ("user-message" !== e.type || !e.messageId) return !0;
                            let o = s.get(e.messageId);
                            if (!o) return !0;
                            let i = t.get(o.slotId) === o.editCount;
                            return e.messageId !== o.originalRequestId ? i || !a.has(o.slotId) : (a.add(o.slotId), r = {
                                slotId: o.slotId,
                                requestId: e.messageId,
                                count: o.editCount,
                                expanded: i,
                                onToggle: () => n(o.slotId, o.editCount)
                            }, !0)
                        });
                        return o.length === e.turn.items.length ? [r ? {
                            ...e,
                            dilEditDisclosure: r
                        } : e] : o.length ? [{
                            ...e,
                            turn: {
                                ...e.turn,
                                items: o
                            },
                            dilEditDisclosure: r
                        }] : []
                    })
                }(f, I, (0, ej.a)(t)),
                P = f.findLastIndex(sf),
                A = f[P]?.dilVisualSlotId,
                M = (0, rv.a)(null != A),
                k = f[P]?.turn.items[0];
            m[2] !== f || m[3] !== w?.voiceAutoScrollEnabled || m[4] !== A ? (n = null != A || w?.voiceAutoScrollEnabled ? f.findLastIndex(sy) : -1, m[2] = f, m[3] = w?.voiceAutoScrollEnabled, m[4] = A, m[5] = n) : n = m[5];
            let R = n,
                N = f[R],
                O = P > R;
            m[6] !== f ? (s = e => {
                let t = f.find(t => t.turn.items.some(t => "chatgpt-writing-block-patch" === t.type && t.messageId === e.messageId)),
                    n = t?.turnKey ?? f.find(t => {
                        let {
                            id: n
                        } = t;
                        return n === e.turnId
                    })?.turnKey;
                return null == n ? [] : [n]
            }, m[6] = f, m[7] = s) : s = m[7];
            let B = j.flatMap(s),
                F = (0, c.useContext)(sl.a),
                z = f.at(-1),
                G = y || z?.turn.status === "in_progress";
            if (F?.aboveComposer != null && null != z && B.push(z.turnKey), null != C && _?.size)
                for (let e of f) e.turn.items.flatMap(sg).some(e => "chatgpt-hosted-widget" === e.type && (0, su.h)(e) && _.has((0, su.e)(C, e.messageId))) && B.push(e.turnKey);
            let L = null == A ? void 0 : E.find(e => e.dilEditDisclosure?.slotId === A);
            L && B.push(L.turnKey, f[P].turnKey);
            let D = O ? L : void 0;
            w?.voiceAutoScrollEnabled && null != N && B.push(N.turnKey);
            let H = (0, o.x)(sr.b, g),
                W = null == H ? void 0 : f.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes(H)
                }),
                q = null == W ? void 0 : (0, sr.a)(W.turn.items);
            (0, o.x)(sa.a, null == q ? null : {
                conversationId: g,
                userMessageId: q,
                steeredPromptId: W === z ? H : void 0
            }) && null != W && B.push(W.turnKey);
            let U = (0, o.x)(sd.b, g);
            m[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (e, t, n) => "adjacent-user-prompts" === (0, td.d)(n[t - 1], e) ? {
                ...e,
                gapBeforePx: 4
            } : e, m[8] = i) : i = m[8];
            let K = (0, sc.a)(E, U, g).map(i),
                V = N?.turnKey,
                Q = k?.type === "assistant-message" ? k.messageId : void 0,
                $ = w?.ensureScrollRoomForAnchor,
                Y = z?.hasStreamingFinalText === !0,
                X = z?.streamingDilFinalId,
                J = w?.getHeightPx,
                Z = D?.turnKey,
                ee = D?.dilEditDisclosure?.count,
                et = D?.turnKey ?? (null != A || w?.voiceAutoScrollEnabled ? N?.turnKey : void 0);
            return m[9] !== w || m[10] !== v ? (l = (e, t) => {
                w?.onTurnLayoutReady(e, t), v.current?.restoreAfterMeasurement()
            }, m[9] = w, m[10] = v, m[11] = l) : l = m[11], m[12] !== w ? (d = e => {
                let {
                    heightDeltaPx: t
                } = e;
                w?.consumeGrowth(t ?? 0)
            }, m[12] = w, m[13] = d) : d = m[13], m[14] !== b || m[15] !== x || m[16] !== B || m[17] !== J || m[18] !== Z || m[19] !== ee || m[20] !== et || m[21] !== l || m[22] !== d || m[23] !== K ? (h = (0, a.jsx)(rJ.a, {
                entries: K,
                getBottomScrollPaddingPx: J,
                synchronousMeasurementTurnKey: Z,
                latestTurnSynchronousMeasurementKey: ee,
                layoutReadyTurnKey: et,
                onTurnLayoutReady: l,
                onLatestTurnHeightChange: d,
                onApiChange: b,
                onVisibleContentReady: x,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: B,
                RowComponent: r8
            }), m[14] = b, m[15] = x, m[16] = B, m[17] = J, m[18] = Z, m[19] = ee, m[20] = et, m[21] = l, m[22] = d, m[23] = K, m[24] = h) : h = m[24], m[25] !== O || m[26] !== M || m[27] !== G || m[28] !== S || m[29] !== X || m[30] !== h || m[31] !== V || m[32] !== Q || m[33] !== $ || m[34] !== Y || m[35] !== v || m[36] !== A ? (p = (0, a.jsx)(si, {
                ref: v,
                exchangeKey: V,
                visualId: A,
                visualOwnerId: Q,
                active: O,
                ensureScrollRoomForAnchor: $,
                hasStreamingFinalText: Y,
                streamingDilFinalId: X,
                replyPending: G,
                reducedMotion: M,
                scrollController: S,
                children: h
            }), m[25] = O, m[26] = M, m[27] = G, m[28] = S, m[29] = X, m[30] = h, m[31] = V, m[32] = Q, m[33] = $, m[34] = Y, m[35] = v, m[36] = A, m[37] = p) : p = m[37], p
        }

        function sg(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function sf(e) {
            return null != e.dilVisualSlotId
        }

        function sv() {
            return new Map
        }

        function sy(e) {
            return e.turn.items.some(e => "user-message" === e.type)
        }
        var sb = n("Ipgw");

        function sx(e) {
            let t, n, s, i, l = (0, r.c)(18),
                {
                    conversationId: u
                } = e,
                h = (0, o.y)(er.a),
                p = (0, d.a)(),
                m = (0, ev.a)(),
                g = (0, o.x)(eI.$, u),
                f = (0, o.x)(eI.cb, u),
                v = (0, o.x)(eI.w, u),
                y = (0, o.x)(eI.bb, u),
                b = (0, c.useRef)(null),
                x = (0, c.useRef)(null);
            l[0] !== v || l[1] !== u || l[2] !== p || l[3] !== f || l[4] !== h || l[5] !== g || l[6] !== y ? (t = () => {
                let e = b.current;
                if (null == e) return;
                let t = x.current;
                if ((0, eI.Ab)(g)) {
                    e.textContent = "", x.current = {
                        conversationId: u,
                        requestId: f ?? ("active-async-turn" === g || "active-tpp-turn" === g ? v?.requestId : null) ?? (t?.conversationId === u ? t.requestId : null)
                    };
                    return
                }
                y || (x.current = null, t?.conversationId === u && "idle" === g && v?.result === "completed" && v.requestId === t.requestId && null == h.get(eI.D, u) && (e.textContent = p.formatMessage({
                    id: "chatgptConversations.responseComplete",
                    defaultMessage: "Response complete",
                    description: "Polite screen-reader announcement after the ChatGPT response the user was waiting for finishes successfully"
                })))
            }, l[0] = v, l[1] = u, l[2] = p, l[3] = f, l[4] = h, l[5] = g, l[6] = y, l[7] = t) : t = l[7];
            let w = (0, c.useEffectEvent)(t);
            return (l[8] !== w ? (n = () => {
                w()
            }, l[8] = w, l[9] = n) : n = l[9], l[10] !== v || l[11] !== u || l[12] !== m || l[13] !== f || l[14] !== g || l[15] !== y ? (s = [u, g, f, v, y, m], l[10] = v, l[11] = u, l[12] = m, l[13] = f, l[14] = g, l[15] = y, l[16] = s) : s = l[16], (0, c.useEffect)(n, s), m) ? (l[17] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, ax.createPortal)((0, a.jsx)("span", {
                ref: b,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), l[17] = i) : i = l[17], i) : null
        }
        var sw = n("pgeU");
        let sC = (0, tg.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function s_(e) {
            let t, n, s, i = (0, r.c)(7),
                {
                    conversationId: l
                } = e,
                d = (0, o.y)(er.a),
                u = (0, o.x)(sw.a, l);
            return i[0] !== l || i[1] !== d ? (t = () => {
                let e = () => {
                        let e = d.get(sw.a, l);
                        null != e && (0, sw.b)(d, l, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [l, d], i[0] = l, i[1] = d, i[2] = t, i[3] = n) : (t = i[2], n = i[3]), (0, c.useEffect)(t, n), i[4] !== l || i[5] !== u ? (s = null == u ? null : (0, a.jsx)(sC, {
                conversationId: l,
                effect: u
            }, u.id), i[4] = l, i[5] = u, i[6] = s) : s = i[6], s
        }
        var sj = n("alJ6"),
            sS = n("KSir"),
            sI = n("QPeR"),
            sT = n("M3Kf");

        function sE(e) {
            let t, n, i, l, c, d, h = (0, r.c)(21),
                {
                    conversationId: p
                } = e,
                m = (0, o.y)(er.a),
                g = (0, o.x)(eI.j, p),
                f = (0, o.z)(a5.b),
                {
                    search: v
                } = (0, u.Y)();
            if (h[0] !== v) {
                let e = new URLSearchParams(v);
                t = e.get("messageId") ?? e.get("message"), n = e.has("selectedTextQuery"), h[0] = v, h[1] = t, h[2] = n
            } else t = h[1], n = h[2];
            let y = n;
            h[3] !== y || h[4] !== t || h[5] !== g ? (i = ["chatgpt-message-target", g, t, y], h[3] = y, h[4] = t, h[5] = g, h[6] = i) : i = h[6];
            let b = null != g && null != t && f > 0,
                x = y ? 0 : 1 / 0;
            h[7] !== p || h[8] !== y || h[9] !== t || h[10] !== m || h[11] !== g ? (l = async e => {
                let {
                    signal: n
                } = e;
                if (null != g) {
                    if (null != t && y) {
                        let e = m.get(eI.M, p),
                            n = e?.[t] ?? (null == e ? void 0 : Object.values(e).find(e => e.message?.id === t));
                        if (n?.message != null) return !0
                    }
                    await (0, a4.a)(m, g, n)
                }
                return !0
            }, h[7] = p, h[8] = y, h[9] = t, h[10] = m, h[11] = g, h[12] = l) : l = h[12], h[13] !== i || h[14] !== b || h[15] !== x || h[16] !== l ? (c = {
                queryKey: i,
                enabled: b,
                staleTime: x,
                retry: !1,
                queryFn: l
            }, h[13] = i, h[14] = b, h[15] = x, h[16] = l, h[17] = c) : c = h[17];
            let {
                isError: w,
                refetch: C
            } = (0, s.a)(c);
            return h[18] !== w || h[19] !== C ? (d = w ? (0, a.jsx)(tp.a, {
                color: "secondary",
                onClick: () => void C(),
                children: (0, a.jsx)($.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message",
                    description: "Button to retry loading the full conversation for a link to an older message"
                })
            }) : null, h[18] = w, h[19] = C, h[20] = d) : d = h[20], d
        }
        var sP = n("TmaW"),
            sA = n("K45w"),
            sM = n("jCHb"),
            sk = n("V8uZ");

        function sR(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        var sN = n("SEBt"),
            sO = n("JUxu");
        let sB = (0, c.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function sF(e) {
            let t, n, s, i, l = (0, r.c)(11),
                {
                    sharedConversationId: d
                } = e,
                u = (0, o.y)(er.a),
                h = (0, o.x)(a$.f, (0, c.useContext)(v.a));
            if (null != h) {
                let e, t;
                return l[0] !== h ? (e = (0, a$.b)(h), l[0] = h, l[1] = e) : e = l[1], l[2] !== e ? (t = (0, a.jsx)(sO.a, {
                    imageOnly: e
                }), l[2] = e, l[3] = t) : t = l[3], t
            }
            return l[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("div", {
                className: "text-secondary",
                children: (0, a.jsx)($.a, {
                    id: "chatgptConversations.sharedConversation.copyDisclaimer",
                    defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory.",
                    description: "Informational notice above a shared ChatGPT chat explaining that the copy will not be added to the viewer's memory"
                })
            }), l[4] = t) : t = l[4], l[5] !== u || l[6] !== d ? (n = e => {
                if (null == d) return;
                let t = e.currentTarget;
                (0, nO.f)(u, sB, {
                    reportEntityType: "share_link",
                    threadId: d,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, sN.c)(u, d)
            }, l[5] = u, l[6] = d, l[7] = n) : n = l[7], l[8] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)($.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation",
                description: "Button above a shared ChatGPT conversation in Codex Desktop that opens ChatGPT's report modal for reporting another person's shared conversation"
            }), l[8] = s) : s = l[8], l[9] !== n ? (i = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(tp.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: s
                })]
            }), l[9] = n, l[10] = i) : i = l[10], i
        }
        var sz = n("AORd"),
            sG = n("cP1f");

        function sL(e) {
            let {
                turn: t
            } = e;
            return t.items.some(sD)
        }

        function sD(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function sH(e) {
            let t, n, s, i, l, u, h, p, m, g, f, v, y, b, x, w, C, _, j, S, I, T, E, P, A, M, k, R, N = (0, r.c)(181),
                {
                    ref: O,
                    printTitle: B,
                    trackReadState: F,
                    workspace: z,
                    shouldBlockMcpApps: G,
                    contentX: L,
                    conversationId: D,
                    section: H,
                    history: U,
                    composerConversationId: K,
                    composerLeadingContent: V,
                    aboveComposerContent: Q,
                    isCoveredByFloatingPanel: Y,
                    isFormOnly: X,
                    isInlinePreview: J,
                    transcriptPresentation: Z,
                    scrollOrigin: ee,
                    isChatConversation: et,
                    customGptId: en,
                    entries: ea,
                    renderState: er,
                    isComposerDisabled: es,
                    hasSharedHistory: eo,
                    showEmptyState: ei,
                    isSharedConversation: el,
                    isTemporaryChat: ec,
                    isTurnActive: ed,
                    isWorkConversation: eu,
                    onboardingPrelude: eh,
                    sharedConversationId: ep,
                    showComposer: eg,
                    archivedPreviewFooter: ef,
                    routeComposerPresentation: ev,
                    emptyThreadStatus: eb,
                    disclaimer: ex,
                    renderComposer: ew,
                    selectedTextActions: eC
                } = e,
                e_ = (0, o.y)(q.a),
                {
                    activeConversationQuery: eS,
                    hasConversationLoadError: eT,
                    isConversationLoading: eE,
                    initialResponsePlacementKey: eP
                } = U,
                {
                    isConversationEmpty: eA
                } = er,
                eM = er.renderedTurns.length > 0,
                ek = eS.isFetching,
                eR = U.serverConversationId ?? D,
                eN = (0, d.a)();
            N[0] !== eN ? (t = eN.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation",
                description: "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop"
            }), N[0] = eN, N[1] = t) : t = N[1];
            let eO = t,
                eB = (0, o.z)(null),
                eF = (0, o.z)(W.a),
                ez = (0, o.x)(ey.a, D),
                eG = (0, o.z)(sI.a),
                eL = eg && eG?.source.turnContext.conversationId !== K,
                eD = "floating" === ev.placement,
                [eH, eW] = (0, c.useState)(!1),
                eq = z?.fullscreenContent != null || eD && eH && !ev.isHidden && !X ? "floating" : "main",
                eU = et && !eo && null == ef,
                eK = !eE && !ed && !eT && eA && !eM,
                eV = (0, o.x)(eI.i, D),
                eQ = null == H && ei && eU && eK && null == eV && !ez && !eD,
                e$ = null == en ? "centered-home" : "home",
                eY = null == H && ei && !ez && (!eU || !eA),
                eX = (0, c.useRef)(null),
                eJ = (0, c.useRef)(null),
                [eZ, e0] = (0, c.useState)(null),
                [e1, e2] = (0, c.useState)(!1),
                e3 = ((R = (0, r.c)(7))[0] !== eZ || R[1] !== ea ? (A = () => ({
                    async scrollToMessage(e) {
                        let t = ea.find(t => {
                            let {
                                turn: n
                            } = t;
                            return n.messageIds.includes(e)
                        });
                        null != t && null != eZ && await eZ.scrollToKey(t.turnKey, void 0, {
                            align: "top"
                        })
                    }
                }), M = [ea, eZ], R[0] = eZ, R[1] = ea, R[2] = A, R[3] = M) : (A = R[2], M = R[3]), (0, c.useImperativeHandle)(O, A, M), R[4] !== eZ?.scrollToKey || R[5] !== ea ? (k = e => {
                    let t = ea.findLast(sL);
                    return (0, sG.a)(eZ?.scrollToKey, t?.turnKey, e)
                }, R[4] = eZ?.scrollToKey, R[5] = ea, R[6] = k) : k = R[6], k);
            N[2] !== ea ? (n = () => ea, N[2] = ea, N[3] = n) : n = N[3];
            let e4 = (0, ej.a)(n),
                [e5, e6] = (0, c.useState)(null);
            N[4] !== J || N[5] !== e_ || N[6] !== eR ? (s = () => J ? 0 : e_.get(rj.a, eR), N[4] = J, N[5] = e_, N[6] = eR, N[7] = s) : s = N[7];
            let [e7, e8] = (0, c.useState)(s);
            N[8] !== J || N[9] !== e5 || N[10] !== e_ || N[11] !== eR ? (i = e => {
                J || e_.set(rj.a, eR, (0, rC.a)(e, e5?.getHeightPx() ?? 0))
            }, N[8] = J, N[9] = e5, N[10] = e_, N[11] = eR, N[12] = i) : i = N[12];
            let e9 = (0, ej.a)(i);
            N[13] !== ea || N[14] !== eZ ? (l = (e, t) => (0, rp.c)(eZ, ea.find(t => {
                let {
                    id: n
                } = t;
                return n === e
            })?.turnKey, t), N[13] = ea, N[14] = eZ, N[15] = l) : l = N[15];
            let te = (0, ej.a)(l);
            N[16] !== D || N[17] !== ea || N[18] !== eZ ? (u = async e => {
                let t = ea.find(t => {
                    let {
                        turn: n
                    } = t;
                    return n.messageIds.includes(e)
                });
                null != t && null != eZ && await eZ.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${D}-${e}`)}"]`), {
                    align: "center"
                })
            }, N[16] = D, N[17] = ea, N[18] = eZ, N[19] = u) : u = N[19];
            let tt = (0, ej.a)(u);
            N[20] === Symbol.for("react.memo_cache_sentinel") ? (h = e => (0, rp.a)(eJ.current, e), N[20] = h) : h = N[20];
            let tn = (0, ej.a)(h),
                ta = `chatgpt:${D}`;
            if (N[21] !== D || N[22] !== e4 || N[23] !== tn || N[24] !== eo || N[25] !== ec || N[26] !== e_ || N[27] !== te || N[28] !== ta) {
                let e;
                N[30] !== D || N[31] !== eo || N[32] !== ec || N[33] !== e_ ? (e = async e => {
                    let t = e_.get(eI.j, D);
                    !ec && !eo && null != t && e_.get(a5.b) > 0 && await (0, a4.a)(e_, t, e)
                }, N[30] = D, N[31] = eo, N[32] = ec, N[33] = e_, N[34] = e) : e = N[34], p = function(e) {
                    let {
                        getTurns: t,
                        routeContextId: n,
                        scrollAdapter: a,
                        ensureHistory: r
                    } = e, s = (0, rQ.a)({
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
                                            unitId: (0, rP.a)("user", t),
                                            text: n
                                        }]
                                    }
                                    if ("assistant-message" === e.type) {
                                        let n = (0, rY.a)(e.content, aq.b),
                                            a = [],
                                            r = "";
                                        for (; e.content.includes(r);) r += "";
                                        let s = (0, rV.a)(function e(t, n, a, r) {
                                                let s = "",
                                                    o = 0;
                                                for (let i of t) {
                                                    let t = n.indexOf(i.raw, o); - 1 !== t && (s += n.slice(o, t), s += function(t, n, a) {
                                                        var r, s;
                                                        if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                        if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                            if (e.name === aq.a) {
                                                                let n = (0, rX.a)(e.attributes),
                                                                    a = (0, rX.b)(e.attributes),
                                                                    r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, aq.l)(e) === a);
                                                                if (null == r) return "";
                                                                let s = (0, aq.i)(r);
                                                                return "hidden" === s || "block" === s ? "" : (0, aq.j)(r) ?? ""
                                                            }
                                                            return e.name === rK.a ? (0, r$.a)(e.attributes, "label") ?? "" : e.name === rK.b || e.name === rK.c ? "" : e.name === rU.a ? e.text ?? "" : null
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
                                            unitId: (0, rP.a)("assistant", t),
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
                    getTurns: e4,
                    routeContextId: ta,
                    scrollAdapter: {
                        scrollToTurn: te,
                        getTurnContainer: tn
                    },
                    ensureHistory: e
                }), N[21] = D, N[22] = e4, N[23] = tn, N[24] = eo, N[25] = ec, N[26] = e_, N[27] = te, N[28] = ta, N[29] = p
            } else p = N[29];
            let tr = p;
            N[35] !== tr.contextId ? (m = {
                containerRef: eJ,
                contextId: tr.contextId
            }, N[35] = tr.contextId, N[36] = m) : m = N[36], (0, rg.a)(m);
            let ts = eL && null == ef,
                to = eF && ts && !eD,
                ti = (0, rv.a)(),
                tl = H?.index;
            N[37] !== D || N[38] !== eM || N[39] !== Y || N[40] !== ti || N[41] !== tl ? (g = {
                conversationId: D,
                sectionIndex: tl,
                hasRenderableTurns: eM,
                isCoveredByFloatingPanel: Y,
                shouldReduceMotion: ti,
                containerRef: eJ
            }, N[37] = D, N[38] = eM, N[39] = Y, N[40] = ti, N[41] = tl, N[42] = g) : g = N[42];
            let tc = function(e) {
                    let t, n, a, s = (0, r.c)(12),
                        {
                            conversationId: o,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: d,
                            shouldReduceMotion: u,
                            containerRef: h
                        } = e,
                        p = (0, sA.a)(0);
                    s[0] !== o || s[1] !== i ? (t = {
                        conversationId: o,
                        sectionIndex: i
                    }, s[0] = o, s[1] = i, s[2] = t) : t = s[2];
                    let m = (0, c.useRef)(t);
                    return s[3] !== h || s[4] !== o || s[5] !== l || s[6] !== d || s[7] !== i || s[8] !== p || s[9] !== u ? (n = () => {
                        let e;
                        if (!l) return;
                        let t = m.current;
                        m.current = {
                            conversationId: o,
                            sectionIndex: i
                        };
                        let n = h.current;
                        if (null == n || u || d || t.conversationId !== o || null == t.sectionIndex || null == i || t.sectionIndex === i) return;
                        let a = Math.sign(i - t.sectionIndex),
                            r = () => {
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(sR) && 0 !== n.clientWidth && (s.disconnect(), p.set(a * n.clientWidth), e = (0, sM.a)(p, 0, {
                                    duration: .3,
                                    ease: sk.d
                                }))
                            },
                            s = new MutationObserver(r);
                        return s.observe(n, {
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }), r(), () => {
                            s.disconnect(), e?.stop(), p.set(0)
                        }
                    }, a = [o, i, l, u, d, p, h], s[3] = h, s[4] = o, s[5] = l, s[6] = d, s[7] = i, s[8] = p, s[9] = u, s[10] = n, s[11] = a) : (n = s[10], a = s[11]), (0, c.useLayoutEffect)(n, a), p
                }(g),
                td = ts && eD,
                [tu, th] = (0, c.useState)(null),
                [tp, tm] = (0, c.useState)(null),
                [tg, tf] = (0, c.useState)(null),
                tv = el && ts && !es && !eD && !eF,
                [ty, tb] = (0, c.useState)(null);
            N[43] !== D || N[44] !== eo || N[45] !== eu ? (f = eu && !eo ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(ru, {
                    conversationId: D
                }, D)
            }) : null, N[43] = D, N[44] = eo, N[45] = eu, N[46] = f) : f = N[46];
            let tx = f;
            N[47] !== ef || N[48] !== tx ? (v = null != ef ? (0, a.jsxs)(a.Fragment, {
                children: [tx, ef]
            }) : null, N[47] = ef, N[48] = tx, N[49] = v) : v = N[49];
            let tw = v;
            N[50] !== Q || N[51] !== tw || N[52] !== V || N[53] !== D || N[54] !== en || N[55] !== ex || N[56] !== eb || N[57] !== ea || N[58] !== tx || N[59] !== tu || N[60] !== eo || N[61] !== eF || N[62] !== X || N[63] !== eD || N[64] !== ec || N[65] !== tv || N[66] !== ew || N[67] !== e5 || N[68] !== e3 || N[69] !== H || N[70] !== eL || N[71] !== td || N[72] !== to || N[73] !== eq ? (y = tw ?? (eL ? (0, a.jsxs)(nh.a.Provider, {
                value: ea.at(-1) ?? null,
                children: [X || eD ? null : (0, a.jsx)(rf.a, {
                    onNavigate: e3
                }, D), eD ? null : V, ew({
                    headerContent: tx,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tv ? (0, a.jsx)("div", {
                            ref: tf,
                            className: "empty:hidden"
                        }) : null, null != H ? (0, a.jsx)(ay, {
                            conversationId: D,
                            placement: "composer",
                            canStartSection: H.canStart
                        }) : null, Q, eF || null == en ? null : (0, a.jsx)(sj.GptPluginMigrationBanner, {
                            gizmoId: en
                        }), td && eb]
                    }),
                    followupPortalTarget: tu,
                    takeoverDisclaimerRef: tb,
                    showVoiceStage: !to,
                    voiceDisclaimer: eF && !to ? ex : void 0,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(r9, {
                            entries: ea,
                            historyLoader: ec || eo ? null : (0, a.jsx)(sT.a, {
                                conversationId: D
                            }),
                            isVisible: t,
                            rendersWidgets: "floating" === eq,
                            onVisibilityChange: eW
                        }, D)
                    },
                    onSubmit: () => {
                        e5?.place(), e8(0)
                    },
                    onSubmitError: e5?.clear
                })]
            }) : tx), N[50] = Q, N[51] = tw, N[52] = V, N[53] = D, N[54] = en, N[55] = ex, N[56] = eb, N[57] = ea, N[58] = tx, N[59] = tu, N[60] = eo, N[61] = eF, N[62] = X, N[63] = eD, N[64] = ec, N[65] = tv, N[66] = ew, N[67] = e5, N[68] = e3, N[69] = H, N[70] = eL, N[71] = td, N[72] = to, N[73] = eq, N[74] = y) : y = N[74];
            let tC = y;
            N[75] !== D || N[76] !== eo || N[77] !== Y || N[78] !== J || N[79] !== eB ? (b = void 0, N[75] = D, N[76] = eo, N[77] = Y, N[78] = J, N[79] = eB, N[80] = b) : b = N[80];
            let t_ = b,
                tj = null == H ? sT.a : av,
                tS = Y || void 0;
            N[81] === Symbol.for("react.memo_cache_sentinel") ? (x = null, N[81] = x) : x = N[81], N[82] !== D || N[83] !== eD || N[84] !== F ? (w = F && !eD ? (0, a.jsx)(t8.a, {
                conversationId: D
            }) : null, N[82] = D, N[83] = eD, N[84] = F, N[85] = w) : w = N[85], N[86] !== ef || N[87] !== D || N[88] !== eo || N[89] !== J ? (C = J || eo || null != ef ? null : (0, a.jsx)(sx, {
                conversationId: D
            }, D), N[86] = ef, N[87] = D, N[88] = eo, N[89] = J, N[90] = C) : C = N[90], N[91] !== D || N[92] !== eo || N[93] !== eE || N[94] !== ec ? (_ = eE || ec || eo ? null : (0, a.jsx)(sE, {
                conversationId: D
            }), N[91] = D, N[92] = eo, N[93] = eE, N[94] = ec, N[95] = _) : _ = N[95], N[96] !== D || N[97] !== ea || N[98] !== eo || N[99] !== e1 || N[100] !== ek || N[101] !== eE || N[102] !== J || N[103] !== e3 || N[104] !== eZ ? (j = J || eE || eo ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(aS, {
                    conversationId: D,
                    entries: ea,
                    turnListApi: eZ
                }), (0, a.jsx)(rw.a, {
                    ready: !ek && e1 && null != eZ && ea.length > 0,
                    onNavigate: e3
                })]
            }), N[96] = D, N[97] = ea, N[98] = eo, N[99] = e1, N[100] = ek, N[101] = eE, N[102] = J, N[103] = e3, N[104] = eZ, N[105] = j) : j = N[105], N[106] !== tj || N[107] !== eS || N[108] !== ef || N[109] !== eQ || N[110] !== K || N[111] !== L || N[112] !== eV || N[113] !== D || N[114] !== eO || N[115] !== tr || N[116] !== ex || N[117] !== eb || N[118] !== ea || N[119] !== tC || N[120] !== e9 || N[121] !== eT || N[122] !== eM || N[123] !== eo || N[124] !== U.canRetryConversationLoad || N[125] !== e$ || N[126] !== eP || N[127] !== e7 || N[128] !== eF || N[129] !== ez || N[130] !== ek || N[131] !== eE || N[132] !== Y || N[133] !== X || N[134] !== eD || N[135] !== J || N[136] !== el || N[137] !== ec || N[138] !== ed || N[139] !== eu || N[140] !== t_ || N[141] !== eh || N[142] !== B || N[143] !== tg || N[144] !== tp || N[145] !== tv || N[146] !== e5 || N[147] !== ev.isChatPaneHidden || N[148] !== e_ || N[149] !== ee || N[150] !== tt || N[151] !== tc || N[152] !== eC || N[153] !== ep || N[154] !== G || N[155] !== ti || N[156] !== eL || N[157] !== eY || N[158] !== ts || N[159] !== td || N[160] !== to || N[161] !== ty || N[162] !== Z || N[163] !== eZ || N[164] !== z ? (S = z?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!G && z.fullscreenContent, tC]
            }) : (0, a.jsxs)(r_.a, {
                viewportOverlay: X || J || eu || eo || null != ef || Y || eD ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(s_, {
                        conversationId: D
                    }, D)
                }),
                hideTranscript: X,
                active: !eE && (!eM || null != eZ),
                presentation: Z ?? (J ? "compact" : "default"),
                contentX: L,
                composerFade: !1,
                supportsComposerExpansion: ts && !eD && null == z,
                footerPlacement: eQ ? e$ : "bottom",
                initialOffset: e7,
                scrollOrigin: ee,
                onScroll: e9,
                scrollToBottomButton: !eL || eD || to ? void 0 : {
                    isWorking: ed
                },
                threadEndContent: eF ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: th,
                        className: em.a
                    }), null == ty ? ex : (0, ax.createPortal)(ex, ty)]
                }),
                footerLeadingContent: to ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: em.a,
                            children: (0, a.jsx)(rb.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: ex
                    })]
                }) : t_,
                footer: tC,
                children: [J || eE || null != ep ? null : (0, a.jsx)(rW, {
                    conversationId: D,
                    entries: ea,
                    isConversationFetching: ek,
                    turnListApi: eZ
                }), (0, a.jsxs)(n6.a.div, {
                    ref: eJ,
                    style: {
                        x: tc
                    },
                    "data-chatgpt-conversation-selection-target": D,
                    className: (0, n4.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", J && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, t3.K)(e_, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, t3.K)(e_, "conversation")
                    },
                    children: [(0, a.jsxs)(c.Suspense, {
                        fallback: (0, a.jsx)(ry.LoadingPage, {
                            debugName: "ChatGptConversationPage",
                            fillParent: !0
                        }),
                        children: [J || eE ? null : (0, a.jsx)(rm.a, {
                            conversationSource: tr
                        }), Y || ev.isChatPaneHidden || ec || eo ? null : (0, a.jsx)(tj, {
                            conversationId: D
                        }), (0, a.jsx)(sz.b, {
                            conversationId: D
                        }), eo && eM ? (0, a.jsx)(sF, {
                            sharedConversationId: ep
                        }) : null, null == eh ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: em.a,
                                children: eh
                            })
                        }), null == eV || eE ? null : (0, a.jsx)(rS.a, {
                            conversationId: D,
                            branchSource: {
                                conversationId: eV.metadata.source_conversation_id,
                                title: eV.metadata.source_conversation_title,
                                gizmoId: eV.metadata.source_conversation_gizmo_id,
                                ownerId: eV.metadata.source_conversation_owner_id
                            }
                        }), eT ? (0, a.jsx)(ri, {
                            isFetching: ek,
                            isSharedConversation: el,
                            onRetry: U.canRetryConversationLoad ? () => {
                                eS.refetch({
                                    cancelRefetch: !1
                                })
                            } : void 0
                        }) : eE ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": eO,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(ry.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : eM ? (0, a.jsxs)(sS.a, {
                            value: tt,
                            children: [J || Y ? null : (0, a.jsxs)(a.Fragment, {
                                children: [ec || eo ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(rt, {
                                        conversationId: D
                                    })
                                }), (0, a.jsx)(a8, {
                                    entries: ea,
                                    title: B,
                                    TurnRowComponent: r8
                                })]
                            }), (0, a.jsx)(sP.a, {
                                enabled: tv,
                                aboveComposer: tg,
                                belowMessage: tp,
                                children: (0, a.jsx)(sm, {
                                    viewportRef: eX,
                                    isTurnActive: ed,
                                    conversationId: D,
                                    entries: ea,
                                    onApiChange: e0,
                                    onVisibleContentReady: () => e2(!0),
                                    responseSpacerState: e5
                                })
                            }), tv ? (0, a.jsx)("div", {
                                ref: tm,
                                className: "empty:hidden"
                            }) : null]
                        }) : eY && null == eV && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            children: (0, a.jsx)($.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation",
                                description: "Empty state when a ChatGPT conversation has no user or assistant text messages"
                            })
                        }), !td && eb, (0, a.jsx)(sb.a, {
                            conversationId: K,
                            isWorkConversation: eu
                        }), eC]
                    }), J ? null : (0, a.jsx)(rq.a, {
                        preserveResponseViewport: e => eX.current?.holdForResponse(e) ?? !1,
                        conversationId: D,
                        initialPlacementKey: eP,
                        isActiveVoiceConversation: eF && ez,
                        isLoadingHistory: eE,
                        latestUserTurnKey: ea.findLast(sW)?.turnKey,
                        onResponseSpacerStateChange: e6
                    }), to ? (0, a.jsx)(n6.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: ti ? rx.c : rx.b
                    }) : null]
                })]
            }), N[106] = tj, N[107] = eS, N[108] = ef, N[109] = eQ, N[110] = K, N[111] = L, N[112] = eV, N[113] = D, N[114] = eO, N[115] = tr, N[116] = ex, N[117] = eb, N[118] = ea, N[119] = tC, N[120] = e9, N[121] = eT, N[122] = eM, N[123] = eo, N[124] = U.canRetryConversationLoad, N[125] = e$, N[126] = eP, N[127] = e7, N[128] = eF, N[129] = ez, N[130] = ek, N[131] = eE, N[132] = Y, N[133] = X, N[134] = eD, N[135] = J, N[136] = el, N[137] = ec, N[138] = ed, N[139] = eu, N[140] = t_, N[141] = eh, N[142] = B, N[143] = tg, N[144] = tp, N[145] = tv, N[146] = e5, N[147] = ev.isChatPaneHidden, N[148] = e_, N[149] = ee, N[150] = tt, N[151] = tc, N[152] = eC, N[153] = ep, N[154] = G, N[155] = ti, N[156] = eL, N[157] = eY, N[158] = ts, N[159] = td, N[160] = to, N[161] = ty, N[162] = Z, N[163] = eZ, N[164] = z, N[165] = S) : S = N[165], N[166] !== Y || N[167] !== tS || N[168] !== w || N[169] !== C || N[170] !== _ || N[171] !== j || N[172] !== S ? (I = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": tS,
                inert: Y,
                children: [x, w, C, _, j, S]
            }), N[166] = Y, N[167] = tS, N[168] = w, N[169] = C, N[170] = _, N[171] = j, N[172] = S, N[173] = I) : I = N[173];
            let tI = I,
                tT = "main" === eq;
            return N[174] !== tT ? (T = {
                presentation: "main",
                rendersWidgets: tT
            }, N[174] = tT, N[175] = T) : T = N[175], N[176] !== tI ? (E = (0, a.jsx)(rh.a, {
                children: tI
            }), N[176] = tI, N[177] = E) : E = N[177], N[178] !== T || N[179] !== E ? (P = (0, a.jsx)(o.b, {
                scope: r0,
                value: T,
                children: E
            }), N[178] = T, N[179] = E, N[180] = P) : P = N[180], P
        }

        function sW(e) {
            let {
                turn: t
            } = e;
            return t.items.some(sq)
        }

        function sq(e) {
            return "user-message" === e.type
        }
        var sU = n("NRIv"),
            sK = n("DrWu"),
            sV = n("MrzV"),
            sQ = n("TSib"),
            s$ = n("jEN2"),
            sY = n("kphc"),
            sX = n("yWTM"),
            sJ = n("xqnZ"),
            sZ = n("AOHi"),
            s0 = n("iLYI");
        n("i1of");
        var s1 = n("u9iS"),
            s2 = n("FS1B"),
            s3 = n("vknh"),
            s4 = n("gCr7"),
            s5 = n("fNPc"),
            s6 = n("vVgo");
        let s7 = (0, tg.a)(async () => (await n.e(777791).then(n.bind(n, "DGJb"))).CourseHeaderShortcut);

        function s8(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, eu.f)("4035922817");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(s7, {
                    conversationId: s
                })
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        var s9 = n("T33u"),
            oe = n("MgyE"),
            ot = n("gyrn"),
            on = n("ckwE");

        function oa(e) {
            let t, n = (0, r.c)(3),
                {
                    children: s
                } = e,
                [o] = (0, c.useState)(or);
            return n[0] !== o || n[1] !== s ? (t = (0, a.jsx)(a6.a, {
                value: o,
                children: s
            }), n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }

        function or() {
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

        function os(e) {
            let t, n = (0, r.c)(2),
                {
                    children: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(on.a, {
                children: (0, a.jsx)(oa, {
                    children: s
                })
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var oo = n("MDmT"),
            oi = n("b6fw");
        n("CSxw");
        var ol = n("NqfB"),
            oc = n("JEFL"),
            od = n("moBM");
        let ou = '[data-markdown-text-style="assistant-message"]',
            oh = (0, o.d)(er.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(eI.M, n)?.[a]?.message ?? null
            });

        function op(e) {
            let t, n, s = (0, r.c)(5),
                o = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return s[0] !== e ? (t = t => (0, a.jsx)(om, {
                ...e,
                selection: t
            }), s[0] = e, s[1] = t) : t = s[1], s[2] !== o || s[3] !== t ? (n = (0, a.jsx)(ol.a, {
                align: "start",
                targetSelector: o,
                children: t
            }), s[2] = o, s[3] = t, s[4] = n) : n = s[4], n
        }

        function om(e) {
            let t, s, i, l, c, u, h, p = (0, r.c)(30),
                {
                    conversationId: m,
                    moreDetailsEnabled: g,
                    onAddSelectedText: f,
                    selection: v
                } = e,
                y = (0, o.y)(q.a),
                b = (0, d.a)(),
                x = (0, eu.f)("4290238484"),
                w = (0, eu.f)("473637331"),
                C = (0, o.z)(od.b),
                _ = (0, o.x)(eI.y, m);
            p[0] !== _ || p[1] !== C || p[2] !== y ? (t = C && "tpp" === _ && "chatgpt-thread" === y.value.routeKind && null == y.value.workSideChat && !0, p[0] = _, p[1] = C, p[2] = y, p[3] = t) : t = p[3];
            let j = t;
            p[4] !== m || p[5] !== v.selectionRange ? (s = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, s = a?.closest(ou);
                if (n.collapsed || null == s || !s.isConnected || s !== r?.closest(ou)) return null;
                let o = s.parentElement,
                    i = o?.getAttribute("data-chatgpt-selection-message-id");
                return !i || o?.getAttribute("data-chatgpt-selection-conversation-id") !== t || [...s.querySelectorAll('[data-writing-block-variant], [data-conversation-component="learning"], [contenteditable="true"], [data-markdown-copy="exclude"]')].some(e => n.intersectsNode(e)) ? null : {
                    markdownElement: s,
                    messageId: i
                }
            }({
                conversationId: m,
                range: v.selectionRange
            }), p[4] = m, p[5] = v.selectionRange, p[6] = s) : s = p[6];
            let S = s,
                I = S?.messageId ?? null;
            p[7] !== m || p[8] !== I ? (i = {
                conversationId: m,
                messageId: I
            }, p[7] = m, p[8] = I, p[9] = i) : i = p[9];
            let T = (0, o.x)(oh, i),
                E = (0, o.x)(eI.j, m),
                P = x && g && null != E && null != S && T?.author.role === "assistant";
            return p[10] !== j || p[11] !== y ? (l = j ? e => {
                n.e(971224).then(n.bind(n, "f8of")).then(t => {
                    let {
                        createAndOpenWorkSideChat: n
                    } = t;
                    return n(y, {
                        target: "right",
                        selectedText: e
                    })
                })
            } : void 0, p[10] = j, p[11] = y, p[12] = l) : l = p[12], p[13] !== P || p[14] !== w || p[15] !== f || p[16] !== v.selectionRange || p[17] !== S ? (c = !P || w ? e => {
                f(e, S?.messageId, null == S ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of rL(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(S.markdownElement, v.selectionRange, e))
            } : void 0, p[13] = P, p[14] = w, p[15] = f, p[16] = v.selectionRange, p[17] = S, p[18] = c) : c = p[18], p[19] !== P || p[20] !== m || p[21] !== b || p[22] !== y || p[23] !== S ? (u = P ? e => {
                Promise.all([n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(882456), n.e(145049), n.e(744644), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(509282), n.e(523433), n.e(37774), n.e(282285)]).then(n.bind(n, "zRlR")).then(t => {
                    let {
                        openChatGptEntitySidePanel: n
                    } = t;
                    return n(y, {
                        askSidebarParams: {
                            query: e
                        },
                        category: "ask_sidebar",
                        contentReferenceStartIndex: 0,
                        extraParams: null,
                        locale: b.locale,
                        messageId: S.messageId,
                        query: b.formatMessage({
                            id: "chatgpt.selection.moreDetailsTitle",
                            defaultMessage: "More details",
                            description: "Title of the side panel explaining selected text from an assistant response"
                        }),
                        shouldBlockExternalEgress: y.get(e8.e, m),
                        sourceConversationId: m
                    })
                })
            } : void 0, p[19] = P, p[20] = m, p[21] = b, p[22] = y, p[23] = S, p[24] = u) : u = p[24], p[25] !== v.selectedText || p[26] !== l || p[27] !== c || p[28] !== u ? (h = (0, a.jsx)(oc.a, {
                conversationTerminology: "chat",
                selectedText: v.selectedText,
                onOpenSideChat: l,
                onAddSelectedText: c,
                onMoreDetails: u
            }), p[25] = v.selectedText, p[26] = l, p[27] = c, p[28] = u, p[29] = h) : h = p[29], h
        }
        var og = n("Fjze");

        function of(e) {
            let t, n, a, s = (0, r.c)(7),
                {
                    sharedConversationId: i
                } = e,
                l = (0, o.y)(er.a),
                d = null != i;
            s[0] !== l || s[1] !== i ? (t = () => {
                null != i && (nB.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: i
                    }
                }).then(() => l.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(ov), (0, eJ.a)(l, og.a, {
                    sharedConversationId: i
                }))
            }, s[0] = l, s[1] = i, s[2] = t) : t = s[2];
            let u = (0, c.useEffectEvent)(t);
            return s[3] !== u ? (n = () => {
                u()
            }, s[3] = u, s[4] = n) : n = s[4], s[5] !== d ? (a = [d], s[5] = d, s[6] = a) : a = s[6], (0, c.useEffect)(n, a), null
        }

        function ov() {}
        var oy = n("GigQ"),
            ob = n("JKdL"),
            ox = n("FGv0"),
            ow = n("r9i9"),
            oC = n("tdfh"),
            o_ = n("uQqo"),
            oj = n("yi1v"),
            oS = n("hMfc");

        function oI(e) {
            let t, s, i, l, u, h = (0, r.c)(16),
                {
                    data: p
                } = e,
                m = (0, o.y)(er.a),
                g = (0, d.a)();
            h[0] !== g ? (t = g.formatMessage(X.a.headerShare), h[0] = g, h[1] = t) : t = h[1];
            let f = t,
                [v, y] = (0, c.useState)(!1);
            return h[2] !== p || h[3] !== v || h[4] !== m ? (s = () => {
                v || (y(!0), (async function(e, t) {
                    let a = t.sharedPost,
                        [r, ...s] = a?.attachments[0]?.kind === "media_generation" ? (0, o_.a)(a, (0, o_.b)(a)) : [],
                        o = crypto.randomUUID();
                    (0, sN.b)(e, {
                        attachmentType: t.attachmentType,
                        contentType: t.contentType,
                        shareId: t.shareId,
                        shareSessionId: o
                    });
                    let i = t.dialogProps.receiverShareLink;
                    if ((0, oj.a)() && null != i && ("conversation" === i.contentType || "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE" === t.attachmentType)) {
                        if ("unsupported" !== await (0, oj.b)(e, {
                                url: i.shareLinkUrl,
                                title: t.dialogProps.title ?? void 0
                            }, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                attachmentType: t.attachmentType,
                                contentType: t.contentType,
                                shareId: t.shareId,
                                shareSessionId: o,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER"
                            })) return;
                        if ("conversation" === i.contentType) return void(0, nO.f)(e, oC.a, {
                            ...t.dialogProps,
                            shareSessionId: o
                        })
                    }
                    if (i?.contentType === "conversation") {
                        let a = (0, sN.a)(e, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                shareId: t.shareId,
                                shareSessionId: o,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                                usedExistingLink: !0,
                                omitSheetType: !0
                            }),
                            r = await (0, ox.a)(Promise.resolve(i.shareLinkUrl));
                        if (a({
                                result: r ? "link-copied" : "copy-failed",
                                shareId: t.shareId
                            }), r) {
                            let {
                                showConversationShareCopiedToast: t
                            } = await n.e(555532).then(n.bind(n, "euaP"));
                            t(e, null, !0 === i.isWorkspaceOnly)
                        } else(0, nO.f)(e, oC.a, {
                            ...t.dialogProps,
                            previewTurns: (0, ow.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId, 1 / 0),
                            recoveryShareLink: i,
                            shareSessionId: o
                        });
                        return
                    }(0, nO.f)(e, oC.a, {
                        ...t.dialogProps,
                        image: r?.src == null ? void 0 : {
                            alt: t.dialogProps.title ?? "",
                            item: r,
                            previewSrc: r.src,
                            additionalPublishedPreviewUrls: s.flatMap(e => null == e.src ? [] : [e.src])
                        },
                        previewTurns: null != r ? void 0 : (0, ow.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId, 1 / 0),
                        privacyNotices: (0, ow.k)({
                            conversation: t.conversation,
                            projectId: null
                        }),
                        shareSessionId: o
                    })
                })(m, p).finally(() => y(!1)))
            }, h[2] = p, h[3] = v, h[4] = m, h[5] = s) : s = h[5], h[6] !== v ? (i = v ? null : (0, a.jsx)(et.a, {
                asset: oS.a
            }), h[6] = v, h[7] = i) : i = h[7], h[8] !== v || h[9] !== f || h[10] !== s || h[11] !== i ? (l = (0, a.jsx)(tp.a, {
                "aria-label": f,
                color: "ghostActive",
                loading: v,
                size: "toolbar",
                uniform: !0,
                onClick: s,
                children: i
            }), h[8] = v, h[9] = f, h[10] = s, h[11] = i, h[12] = l) : l = h[12], h[13] !== f || h[14] !== l ? (u = (0, a.jsx)(th.a, {
                content: f,
                children: l
            }), h[13] = f, h[14] = l, h[15] = u) : u = h[15], u
        }
        var oT = n("d107"),
            oE = n("zbjM"),
            oP = n("MVHH"),
            oA = n("rhKI"),
            oM = n("PP3M"),
            ok = n("CFOe"),
            oR = n("JNtf"),
            oN = n("mUDD");

        function oO(e) {
            let t, n, s, o, i, l, c, d, u, h, p, m, g, f = (0, r.c)(31),
                {
                    canSave: v,
                    isPending: y,
                    onCancel: b,
                    onClose: x,
                    onSave: w
                } = e;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)($.a, {
                id: "chatgptConversations.temporaryChat.save.close",
                defaultMessage: "Close",
                description: "Accessible label for the close button in the temporary chat save confirmation dialog."
            }), f[0] = t) : t = f[0], f[1] !== y || f[2] !== x ? (n = e => {
                e || y || x()
            }, f[1] = y, f[2] = x, f[3] = n) : n = f[3];
            let C = !y;
            f[4] !== v || f[5] !== w ? (s = e => {
                e.preventDefault(), v && w()
            }, f[4] = v, f[5] = w, f[6] = s) : s = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(oR.e, {
                children: (0, a.jsx)($.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?",
                    description: "Title of the confirmation dialog for converting a temporary ChatGPT conversation into a regular saved chat."
                })
            }), f[7] = o) : o = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(oN.e, {
                children: (0, a.jsx)(oN.d, {
                    className: "select-none",
                    title: o,
                    subtitle: (0, a.jsx)(oR.d, {
                        children: (0, a.jsx)($.a, {
                            id: "chatgptConversations.temporaryChat.save.description.regularChatSettings",
                            defaultMessage: "This chat will now be included in your history. It will follow your memory and model training settings used for regular chats.",
                            description: "Body of the confirmation dialog shown when a user saves a temporary ChatGPT conversation. Explains before they confirm that the chat will appear in history and follow the memory and model training settings already configured for regular chats."
                        })
                    })
                })
            }), f[8] = i) : i = f[8], f[9] !== b || f[10] !== x ? (l = () => {
                b?.(), x()
            }, f[9] = b, f[10] = x, f[11] = l) : l = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)($.a, {
                id: "chatgptConversations.temporaryChat.save.cancel",
                defaultMessage: "Cancel",
                description: "Secondary button that closes the save confirmation dialog and leaves the ChatGPT conversation temporary."
            }), f[12] = c) : c = f[12], f[13] !== y || f[14] !== l ? (d = (0, a.jsx)(tp.a, {
                color: "secondary",
                disabled: y,
                onClick: l,
                children: c
            }), f[13] = y, f[14] = l, f[15] = d) : d = f[15];
            let _ = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)($.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save",
                description: "Primary button that saves a temporary ChatGPT conversation to regular chat history."
            }), f[16] = u) : u = f[16], f[17] !== y || f[18] !== _ ? (h = (0, a.jsx)(tp.a, {
                color: "primary",
                disabled: _,
                loading: y,
                type: "submit",
                children: u
            }), f[17] = y, f[18] = _, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(oN.e, {
                children: (0, a.jsxs)(oN.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== s ? (m = (0, a.jsxs)(oN.b, {
                as: "form",
                onSubmit: s,
                children: [i, p]
            }), f[23] = p, f[24] = s, f[25] = m) : m = f[25], f[26] !== y || f[27] !== m || f[28] !== n || f[29] !== C ? (g = (0, a.jsx)(oR.a, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: C,
                size: "narrow",
                children: m
            }), f[26] = y, f[27] = m, f[28] = n, f[29] = C, f[30] = g) : g = f[30], g
        }

        function oB(e) {
            (0, tc.e)(e).catch(() => {
                e0.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function oF(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(oz, {
                        conversationId: s
                    })
                })]
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function oz(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return (0, o.z)(oM.e) ? (n[0] !== s ? (t = (0, a.jsx)(oG, {
                conversationId: s
            }), n[0] = s, n[1] = t) : t = n[1], t) : null
        }

        function oG(e) {
            let t, n, s, i, l, h, p, m, g, f, v, y, b, x = (0, r.c)(49),
                {
                    conversationId: w
                } = e,
                C = (0, o.y)(er.a),
                _ = (0, d.a)(),
                j = (0, u._)(),
                [S, I] = (0, c.useState)(!1),
                [T, P] = (0, c.useState)(!1),
                [A, M] = (0, c.useState)(!1),
                [k, R] = (0, c.useState)(!1),
                N = (0, c.useRef)(!1),
                O = (0, o.z)(nG.p).data,
                B = (0, o.x)(eI.j, w),
                F = (0, o.x)(eI.X, w),
                z = (0, o.x)(eI.I, w),
                G = (0, o.x)(ts.j, w);
            x[0] !== w || x[1] !== C ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (C.get(eI.I, w) || C.get(ts.j, w) || t !== C.get(eI.j, w) || n !== C.get(eI.X, w)) throw Error("Cannot save an unavailable temporary chat message");
                    return nB.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: oq
                    }).then(oW)
                },
                retry: oH
            }, x[0] = w, x[1] = C, x[2] = t) : t = x[2];
            let {
                mutateAsync: L,
                isPending: D
            } = (0, Q.a)(t), H = null != B && null != F && !z && !G && !D && !T;
            x[3] !== _ ? (n = _.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat",
                description: "Tooltip and accessible label for the bookmark button in a temporary ChatGPT conversation. Opens a confirmation dialog to save it to regular history."
            }), x[3] = _, x[4] = n) : n = x[4];
            let W = n;
            x[5] !== O?.eligibleAnnouncements ? (s = O?.eligibleAnnouncements?.includes(nG.h), x[5] = O?.eligibleAnnouncements, x[6] = s) : s = x[6];
            let q = !0 === s,
                U = !k && (A || q && H);
            x[7] !== w || x[8] !== A || x[9] !== C || x[10] !== U ? (i = () => {
                if (!U || A || N.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || N.current || (N.current = !0, (0, eJ.a)(C, oP.Bb, {
                        personalizationMode: (0, oA.a)((0, oM.k)(C, w))
                    }), M(!0), oB(C))
                }), () => {
                    e = !0
                }
            }, l = [w, A, C, U], x[7] = w, x[8] = A, x[9] = C, x[10] = U, x[11] = i, x[12] = l) : (i = x[11], l = x[12]), (0, c.useEffect)(i, l), x[13] !== C ? (h = () => {
                R(!0), N.current || (N.current = !0, oB(C))
            }, x[13] = C, x[14] = h) : h = x[14];
            let K = h;
            x[15] !== H || x[16] !== w || x[17] !== _ || x[18] !== j || x[19] !== L || x[20] !== C || x[21] !== F || x[22] !== B ? (p = async function() {
                let e;
                if (!H || null == B || null == F) return;
                let t = (0, oA.a)((0, oM.k)(C, w));
                (0, eJ.a)(C, oP.Cb, {
                    personalizationMode: t
                });
                try {
                    e = (await L({
                        sourceConversationId: B,
                        selectedLeafId: F
                    })).conversation_id
                } catch (e) {
                    (0, eJ.a)(C, oP.Db, {
                        personalizationMode: t,
                        failureCategory: (0, oA.b)(e)
                    }), C.get(en.f).danger(_.formatMessage({
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
                P(!0), I(!1), (0, Z.G)(C), (0, Z.J)(C, B, "remove"), (0, Z.J)(C, e, "refresh"), j((0, eT.c)(e), {
                    replace: !0
                }), C.get(en.f).success(_.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history.",
                    description: "Success toast confirming that a formerly temporary ChatGPT conversation is now saved in regular history."
                })), nB.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: F
                    }
                }).then(oD).then(t => {
                    (0, eI.ac)({
                        scope: C,
                        conversationId: e,
                        title: t
                    }), C.query.setData(tc.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, Z.G)(C), (0, Z.J)(C, e, "refresh")
                }).catch(oL)
            }, x[15] = H, x[16] = w, x[17] = _, x[18] = j, x[19] = L, x[20] = C, x[21] = F, x[22] = B, x[23] = p) : p = x[23];
            let V = p,
                Y = !H;
            x[24] !== w || x[25] !== C || x[26] !== U ? (m = () => {
                (0, eJ.a)(C, oP.Fb, {
                    personalizationMode: (0, oA.a)((0, oM.k)(C, w)),
                    coachMarkVisible: U
                }), I(!0)
            }, x[24] = w, x[25] = C, x[26] = U, x[27] = m) : m = x[27], x[28] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsx)(E.b, {
                icon: {
                    16: tm.qb,
                    20: tm.rb
                }
            }), x[28] = g) : g = x[28], x[29] !== W || x[30] !== Y || x[31] !== m ? (f = (0, a.jsx)(tp.a, {
                "aria-label": W,
                color: "toolbar",
                disabled: Y,
                size: "toolbar",
                uniform: !0,
                onClick: m,
                children: g
            }), x[29] = W, x[30] = Y, x[31] = m, x[32] = f) : f = x[32];
            let X = f;
            return x[33] !== K || x[34] !== _ || x[35] !== W || x[36] !== X || x[37] !== U ? (v = U ? (0, a.jsx)(ok.a, {
                align: "end",
                description: (0, a.jsx)($.a, {
                    id: "chatgptConversations.temporaryChat.save.coachmark.description",
                    defaultMessage: "Want to keep this chat? You can now save it to your history.",
                    description: "Body of a one-time onboarding coachmark anchored to the Save chat button after a user creates an eligible temporary chat."
                }),
                dismissLabel: _.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.coachmark.dismiss",
                    defaultMessage: "Close tooltip",
                    description: "Accessible label for dismissing the temporary chat save coachmark."
                }),
                onDismiss: K,
                open: !0,
                side: "bottom",
                sideOffset: 10,
                title: (0, a.jsx)($.a, {
                    id: "chatgptConversations.temporaryChat.save.button",
                    defaultMessage: "Save chat",
                    description: "Title of a one-time onboarding coachmark anchored to the Save chat button in a temporary ChatGPT conversation."
                }),
                tooltipClassName: "w-60",
                children: X
            }) : (0, a.jsx)(th.a, {
                content: W,
                children: X
            }), x[33] = K, x[34] = _, x[35] = W, x[36] = X, x[37] = U, x[38] = v) : v = x[38], x[39] !== H || x[40] !== w || x[41] !== V || x[42] !== S || x[43] !== D || x[44] !== C ? (y = S ? (0, a.jsx)(oO, {
                canSave: H,
                isPending: D,
                onCancel: () => {
                    (0, eJ.a)(C, oP.Ab, {
                        personalizationMode: (0, oA.a)((0, oM.k)(C, w))
                    })
                },
                onClose: () => I(!1),
                onSave: () => void V()
            }) : null, x[39] = H, x[40] = w, x[41] = V, x[42] = S, x[43] = D, x[44] = C, x[45] = y) : y = x[45], x[46] !== v || x[47] !== y ? (b = (0, a.jsxs)(a.Fragment, {
                children: [v, y]
            }), x[46] = v, x[47] = y, x[48] = b) : b = x[48], b
        }

        function oL() {}

        function oD(e) {
            return rI.object({
                title: rI.string()
            }).parse(e).title
        }

        function oH(e, t) {
            return e < 1 && t instanceof ew.FetchError && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function oW(e) {
            return rI.object({
                conversation_id: rI.string().min(1)
            }).parse(e)
        }

        function oq(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var oU = n("HVBu"),
            oK = n.n(oU),
            oV = n("ibLK"),
            oQ = n("e1xH"),
            o$ = n("BdYu"),
            oY = n("zpMv"),
            oX = n("hx97");

        function oJ(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var oZ = n("n5iL"),
            o0 = n("iS3k"),
            o1 = n("pDUk"),
            o2 = n("GaCK"),
            o3 = n("Dofq");
        let o4 = (0, tg.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(186197)]).then(n.bind(n, "BhAA"))).ChatGptThreadSummaryPanelBody, {
            fallback: (0, a.jsx)(o0.a.Content, {
                children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-0.5 px-5",
                    children: (0, a.jsx)("span", {
                        className: "select-none",
                        role: "status",
                        children: (0, a.jsx)($.a, {
                            id: "chatgptConversations.summaryPanel.loading",
                            defaultMessage: "Loading summary…",
                            description: "Status shown in the Work task summary panel while its interface downloads"
                        })
                    })
                })
            }),
            errorFallback: (0, a.jsx)(o0.a.Content, {
                children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-0.5 px-5",
                    children: (0, a.jsx)("span", {
                        className: "select-none",
                        role: "status",
                        children: (0, a.jsx)($.a, {
                            id: "chatgptConversations.summaryPanel.loadError",
                            defaultMessage: "Summary could not load. Reload the app to try again",
                            description: "Recovery instructions in the Work task summary panel after its interface fails to download; closing the panel does not retry"
                        })
                    })
                })
            })
        });

        function o5(e) {
            let t, n, s, o = (0, r.c)(6);
            o[0] !== e ? ({
                readData: n,
                ...t
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]);
            let i = (0, o0.b)(),
                [l, d] = (0, c.useState)(null);
            return i && l?.readData !== n && d({
                readData: n,
                data: n()
            }), o[3] !== l || o[4] !== t ? (s = null == l ? null : (0, a.jsx)(o4, {
                ...t,
                data: l.data
            }), o[3] = l, o[4] = t, o[5] = s) : s = o[5], s
        }

        function o6(e) {
            let t, n, s, i = (0, r.c)(15),
                {
                    conversationId: l,
                    composerActions: c,
                    readData: d,
                    display: u,
                    shouldBlockExternalEgress: h,
                    showSources: p
                } = e,
                m = void 0 === p || p,
                g = (0, o.y)(q.a),
                f = (0, eu.f)("2903661647"),
                v = f ? "dynamic-isle" : "summary";
            return i[0] !== g || i[1] !== v ? (t = {
                scope: g,
                layout: v
            }, i[0] = g, i[1] = v, i[2] = t) : t = i[2], i[3] !== c || i[4] !== l || i[5] !== f || i[6] !== d || i[7] !== h || i[8] !== m ? (n = (0, a.jsx)(o5, {
                conversationId: l,
                composerActions: c,
                readData: d,
                isUnifiedDynamicIsleEnabled: f,
                showSources: m,
                shouldBlockExternalEgress: h
            }, l), i[3] = c, i[4] = l, i[5] = f, i[6] = d, i[7] = h, i[8] = m, i[9] = n) : n = i[9], i[10] !== u.shouldHideInlineImmediately || i[11] !== u.shouldShow || i[12] !== t || i[13] !== n ? (s = (0, a.jsx)(o0.a.Root, {
                analytics: t,
                shouldHideInlineImmediately: u.shouldHideInlineImmediately,
                shouldShow: u.shouldShow,
                children: n
            }), i[10] = u.shouldHideInlineImmediately, i[11] = u.shouldShow, i[12] = t, i[13] = n, i[14] = s) : s = i[14], s
        }

        function o7(e) {
            let t, n, s, i = (0, r.c)(22),
                {
                    conversationId: l,
                    composerActions: u,
                    controlledState: h,
                    readData: p,
                    shouldBlockExternalEgress: m,
                    showSources: g
                } = e,
                v = void 0 === g || g,
                y = (0, o.y)(q.a),
                b = (0, c.useContext)(aN.a),
                x = (0, d.a)(),
                w = (0, eu.f)("2903661647"),
                C = (0, o.z)(null == h ? eD.N : null);
            i[0] !== h?.isOpen || i[1] !== C ? (t = h?.isOpen ?? (0, eD.z)(C, !0), i[0] = h?.isOpen, i[1] = C, i[2] = t) : t = i[2];
            let _ = t,
                j = (0, o.z)(o2.b),
                S = h?.isOpen ?? j.isPopoverOpen,
                I = (0, o.x)(oZ.f, "togglePinnedSummary");
            (0, o$.b)(y), i[3] !== h || i[4] !== y ? (n = () => {
                null != h ? h.onOpenChange(!h.isOpen) : (0, o3.b)(y)
            }, i[3] = h, i[4] = y, i[5] = n) : n = i[5];
            let T = n;
            return (0, nE.a)("togglePinnedSummary", T), i[6] !== u || i[7] !== b || i[8] !== h || i[9] !== l || i[10] !== x || i[11] !== _ || i[12] !== S || i[13] !== w || i[14] !== j.displayMode || i[15] !== p || i[16] !== y || i[17] !== I || i[18] !== m || i[19] !== v || i[20] !== T ? (s = (0, a.jsx)(f.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                order: 250,
                children: "overlay" === j.displayMode ? (0, a.jsx)(o1.a, {
                    isOpen: S,
                    shouldPreventAutoFocus: h?.shouldPreventAutoFocus,
                    onOpenChange: e => {
                        null != h ? h.onOpenChange(e) : y.set(o2.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                            ...t,
                            isPopoverOpen: e
                        })
                    },
                    trigger: (0, a.jsx)(o0.a.HeaderButton, {
                        analytics: {
                            scope: y
                        },
                        label: x.formatMessage({
                            id: "chatgptConversations.summaryPanel.toggle",
                            defaultMessage: "Toggle summary",
                            description: "Button label for toggling the ChatGPT summary panel"
                        }),
                        pressed: S,
                        shortcut: I
                    }),
                    children: null != p ? (0, a.jsx)(aN.a, {
                        value: b,
                        children: (0, a.jsx)(o0.a.PopoverContent, {
                            analytics: {
                                scope: y,
                                layout: w ? "dynamic-isle" : "summary"
                            },
                            children: (0, a.jsx)(o5, {
                                conversationId: l,
                                composerActions: u,
                                readData: p,
                                isUnifiedDynamicIsleEnabled: w,
                                showSources: v,
                                shouldBlockExternalEgress: m
                            }, l)
                        })
                    }) : null
                }) : (0, a.jsx)(o0.a.HeaderButton, {
                    analytics: {
                        scope: y
                    },
                    label: x.formatMessage({
                        id: "chatgptConversations.summaryPanel.togglePinned",
                        defaultMessage: "Toggle pinned summary",
                        description: "Button label for toggling whether the ChatGPT summary panel reserves layout space"
                    }),
                    pressed: _,
                    shortcut: I,
                    onClick: T
                })
            }), i[6] = u, i[7] = b, i[8] = h, i[9] = l, i[10] = x, i[11] = _, i[12] = S, i[13] = w, i[14] = j.displayMode, i[15] = p, i[16] = y, i[17] = I, i[18] = m, i[19] = v, i[20] = T, i[21] = s) : s = i[21], s
        }
        var o8 = n("JjRy"),
            o9 = n.n(o8),
            ie = n("G4E3"),
            it = n("KaH3"),
            ia = n("Yz3b"),
            ir = n("ghNX"),
            is = n("KvVi"),
            io = n("m250"),
            ii = n("Ng4B"),
            il = n("bTKb"),
            ic = n("dGDB"),
            id = n("lIsV");

        function iu(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        var ih = n("J8FU"),
            ip = n("Aluh"),
            im = n("mG6J");

        function ig(e) {
            let t, n, s = (0, r.c)(14),
                {
                    conversationId: l,
                    shouldBlockExternalEgress: c,
                    widgets: d
                } = e,
                u = (0, o.z)(ip.b);
            if (c) return null;
            if (s[0] !== u || s[1] !== l || s[2] !== d) {
                let e, n, r;
                s[4] !== u || s[5] !== l ? (e = e => u.has((0, su.e)(l, e.messageId)), s[4] = u, s[5] = l, s[6] = e) : e = s[6];
                let o = d.filter(e),
                    c = `chatgpt:${l}`;
                s[7] !== c ? (n = (0, i.Ve)(c), s[7] = c, s[8] = n) : n = s[8];
                let h = n;
                s[9] !== h || s[10] !== l ? (r = e => (0, a.jsx)(im.b, {
                    conversationId: h,
                    chatGptConversationId: l,
                    hostId: "local",
                    item: e
                }, e.messageId), s[9] = h, s[10] = l, s[11] = r) : r = s[11], t = o.map(r), s[0] = u, s[1] = l, s[2] = d, s[3] = t
            } else t = s[3];
            return s[12] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), s[12] = t, s[13] = n) : n = s[13], n
        }
        var iv = n("JVSG"),
            iy = {
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
            ib = n("ebpE");

        function ix() {
            let e, t, n, s, i, l, d, h, g, f, v, y, b, w, C, _ = (0, r.c)(40),
                j = (0, u._)(),
                S = (0, c.useContext)(R.a);
            _[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, _[0] = e) : e = _[0];
            let I = (0, o.x)(m.a, e),
                E = (0, o.z)(x.a),
                P = (0, u.bb)() ?? 0,
                {
                    conversationId: A
                } = (0, u.cb)(),
                {
                    search: M,
                    state: k
                } = (0, u.Y)(),
                N = (0, o.x)(e6.a, A ?? null),
                O = (0, o.x)(null == A || e8.e, N ?? A ?? ""),
                B = k?.archivedConversationPreview === !0;
            _[1] !== M ? (t = (0, eT.i)(M), _[1] = M, _[2] = t) : t = _[2];
            let F = t;
            _[3] !== B || _[4] !== F || _[5] !== A ? (n = null == A || (0, tD.e)(A) || F || B ? null : A, _[3] = B, _[4] = F, _[5] = A, _[6] = n) : n = _[6];
            let {
                data: z
            } = (0, o.x)(tc.chatGptConversationQueryById$, n);
            if (null == A) {
                let e;
                return _[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(u.l, {
                    to: "/",
                    replace: !0
                }), _[7] = e) : e = _[7], e
            }
            _[8] !== N || _[9] !== A ? (s = N ?? (0, tD.d)(A), _[8] = N, _[9] = A, _[10] = s) : s = _[10];
            let G = s,
                L = I.isCapable && !E && !O && null != z;
            _[11] !== j ? (i = e => (j((0, eT.c)(e)), !0), _[11] = j, _[12] = i) : i = _[12];
            let D = i;
            _[13] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(p.a, {}), d = (0, a.jsx)(T.a.Surface, {}), _[13] = l, _[14] = d) : (l = _[13], d = _[14]), _[15] !== B ? (h = null, _[15] = B, _[16] = h) : h = _[16], _[17] !== G || _[18] !== B || _[19] !== F ? (g = F || B ? null : (0, a.jsx)(ta.a, {
                conversationId: G
            }), _[17] = G, _[18] = B, _[19] = F, _[20] = g) : g = _[20];
            let H = S ?? (L ? D : null),
                W = `${G}:${F}`;
            _[21] === Symbol.for("react.memo_cache_sentinel") ? (f = void 0, _[21] = f) : f = _[21], _[22] !== G || _[23] !== B || _[24] !== F || _[25] !== W || _[26] !== P ? (v = (0, a.jsx)(iw, {
                conversationId: G,
                viewActivation: P,
                isArchivedPreview: B,
                isReadOnlyPreview: !1,
                banner: f,
                isTemporaryChat: F,
                sharedConversationId: null
            }, W), _[22] = G, _[23] = B, _[24] = F, _[25] = W, _[26] = P, _[27] = v) : v = _[27], _[28] !== v || _[29] !== H ? (y = (0, a.jsx)(R.a, {
                value: H,
                children: v
            }), _[28] = v, _[29] = H, _[30] = y) : y = _[30], _[31] !== y || _[32] !== h || _[33] !== g ? (b = (0, a.jsxs)(a.Fragment, {
                children: [l, d, h, g, y]
            }), _[31] = y, _[32] = h, _[33] = g, _[34] = b) : b = _[34];
            let q = b;
            return _[35] !== q ? (w = q, _[35] = q, _[36] = w) : w = _[36], _[37] !== G || _[38] !== w ? (C = (0, a.jsx)(tw.a, {
                conversationId: G,
                children: w
            }), _[37] = G, _[38] = w, _[39] = C) : C = _[39], C
        }

        function iw(e) {
            let t, n, p, m, T, R, Q, $, Y, J, ee, et, ea, er, es, eo, ei, el, ec, ta, th, tp, tm, tg, tf, ty, tb, tw, tC, tS, tI, tT, tA, tM, tH, tU, tK, tV, tQ, tY, tX, tJ, tZ, t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, ne, nt, nn, na, nr, ns, no, ni, nl, nc, nd, nu, nh, np, nm, ng, nf, nv, ny, nb, nw, nC, nj, nI, nT, nE, nP, nA, nM, nk, nR, nN, nO, nB, nF, nz, nG, nL, nD = (0, r.c)(709),
                {
                    conversationId: nH,
                    viewActivation: nW,
                    isArchivedPreview: nq,
                    isInlinePreview: nU,
                    hideModelPicker: nK,
                    showFilePicker: nV,
                    disableAutoFocus: nQ,
                    hideInitialUserMessage: n$,
                    transcriptPresentation: nY,
                    scrollOrigin: nX,
                    isReadOnlyPreview: nJ,
                    onSubmitAccepted: nZ,
                    isTemporaryChat: n1,
                    sharedConversationId: n4,
                    sharedPostContinuation: n5,
                    requiredSystemHints: n6,
                    routePattern: n7,
                    composerLeadingContent: n8,
                    headerLeadingContent: n9,
                    banner: at,
                    onRetryMissingConversation: an,
                    sharedProjectConversation: as,
                    workspace: ao
                } = e,
                ai = void 0 === nW ? 0 : nW,
                ac = void 0 !== nq && nq,
                ad = void 0 !== nU && nU,
                au = void 0 === nV || nV,
                ah = (0, o.y)(q.a),
                ag = (0, c.useContext)(v.a),
                av = (0, o.x)(a$.f, ag),
                ax = (0, o.z)(null != av && x.a);
            nD[0] !== ag || nD[1] !== nH ? (t = {
                auth: ag,
                conversationId: nH
            }, nD[0] = ag, nD[1] = nH, nD[2] = t) : t = nD[2];
            let aw = (0, o.x)(null != ag && !ag.isLoading && null === ag.authMethod && a$.h, t),
                aC = null != n4 || null != av,
                a_ = null != n4 || null != av && !(void 0 !== n5 && n5 && ax),
                aj = null != ao;
            nD[3] !== nH || nD[4] !== ad || nD[5] !== a_ || nD[6] !== n1 || nD[7] !== n4 || nD[8] !== aj ? (n = {
                conversationId: nH,
                isInlinePreview: ad,
                isWorkspace: aj,
                isSharedConversation: a_,
                isTemporaryChat: n1,
                sharedConversationId: n4
            }, nD[3] = nH, nD[4] = ad, nD[5] = a_, nD[6] = n1, nD[7] = n4, nD[8] = aj, nD[9] = n) : n = nD[9];
            let aS = function(e) {
                    let t, n, a, s, i, l, d, h, p, m = (0, r.c)(41),
                        {
                            conversationId: g,
                            isInlinePreview: f,
                            isWorkspace: v,
                            isSharedConversation: y,
                            isTemporaryChat: b,
                            sharedConversationId: x
                        } = e,
                        w = (0, o.y)(q.a),
                        {
                            conversationId: C
                        } = (0, u.cb)();
                    m[0] !== g || m[1] !== f || m[2] !== v || m[3] !== C || m[4] !== w ? (t = () => (0, tD.e)(f || v || null == w.get(eI.j, g) ? g : C ?? ""), m[0] = g, m[1] = f, m[2] = v, m[3] = C, m[4] = w, m[5] = t) : t = m[5];
                    let [_, j] = (0, c.useState)(t);
                    m[6] !== _ || m[7] !== g || m[8] !== w ? (n = () => _ && !w.get(s4.b, g) ? g : null, m[6] = _, m[7] = g, m[8] = w, m[9] = n) : n = m[9];
                    let [S] = (0, c.useState)(n), I = (0, o.x)(eI.j, g), T = (0, o.x)(eI.M, g), E = (0, o.x)(eI.C, g), P = (0, o.x)(tc.chatGptConversationQueryById$, y || b && null != T ? null : I);
                    (0, o.x)(y ? null : s3.a, I);
                    let A = (0, o.x)(tc.n, x),
                        M = (0, c.useRef)(null),
                        k = A.isSuccess && null != A.data ? x : null;
                    m[10] !== w ? (a = e => {
                        (0, eJ.a)(w, s2.i, {
                            actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                            action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                            contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                            availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                            shareId: e
                        })
                    }, m[10] = w, m[11] = a) : a = m[11];
                    let R = (0, c.useEffectEvent)(a);
                    m[12] !== k || m[13] !== R ? (s = () => {
                        null != k && M.current !== k && (M.current = k, R(k))
                    }, m[12] = k, m[13] = R, m[14] = s) : s = m[14], m[15] !== k ? (i = [k], m[15] = k, m[16] = i) : i = m[16], (0, c.useEffect)(s, i);
                    let N = null != T,
                        O = y ? A : P;
                    _ && null != O.data && j(!1);
                    let B = _ && N && null == O.data,
                        F = O.isLoading && !N,
                        z = O.isError && !B;
                    m[17] !== O.error || m[18] !== f ? (l = f || (0, ew.d)(O.error) || !(O.error instanceof ew.FetchError && [401, 403, 404].includes(O.error.status)), m[17] = O.error, m[18] = f, m[19] = l) : l = m[19];
                    let L = l;
                    m[20] !== O.error || m[21] !== g || m[22] !== z || m[23] !== f || m[24] !== w || m[25] !== x ? (d = () => {
                        z && !f && G.a.loadFailed(w, g, x, O.error)
                    }, h = [O.error, g, z, f, w, x], m[20] = O.error, m[21] = g, m[22] = z, m[23] = f, m[24] = w, m[25] = x, m[26] = d, m[27] = h) : (d = m[26], h = m[27]), (0, c.useEffect)(d, h);
                    let D = P.data?.sectioned_conversation != null,
                        H = O.isLoading || z;
                    return m[28] !== O || m[29] !== L || m[30] !== B || m[31] !== z || m[32] !== N || m[33] !== S || m[34] !== F || m[35] !== I || m[36] !== H || m[37] !== D || m[38] !== E || m[39] !== T ? (p = {
                        activeConversationQuery: O,
                        canRetryConversationLoad: L,
                        canUseLiveThread: B,
                        hasConversationLoadError: z,
                        hasHistorySections: D,
                        hasThreadSnapshot: N,
                        initialResponsePlacementKey: S,
                        isConversationLoading: F,
                        isConversationLoadUnresolved: H,
                        serverConversationId: I,
                        threadMapping: T,
                        threadCurrentNode: E
                    }, m[28] = O, m[29] = L, m[30] = B, m[31] = z, m[32] = N, m[33] = S, m[34] = F, m[35] = I, m[36] = H, m[37] = D, m[38] = E, m[39] = T, m[40] = p) : p = m[40], p
                }(n),
                {
                    activeConversationQuery: aI,
                    canRetryConversationLoad: aT,
                    canUseLiveThread: aE,
                    hasConversationLoadError: aP,
                    hasHistorySections: aA,
                    hasThreadSnapshot: aM,
                    isConversationLoading: ak,
                    isConversationLoadUnresolved: aR,
                    serverConversationId: aN,
                    threadMapping: aO,
                    threadCurrentNode: aB
                } = aS;
            nD[10] !== nH || nD[11] !== ac || nD[12] !== ad || nD[13] !== a_ || nD[14] !== ah ? (p = () => {
                if (!a_ && !ac && !ad) return function(e, t) {
                    let n = e.get(e6.a, t) ?? t,
                        a = e.get(e1.b, t),
                        r = e.get(tt, n),
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
                        i = e.get(eD.i),
                        c = o.observedTurn,
                        d = null;

                    function u(t) {
                        for (let n of t.toReversed())
                            if (!o.initialCreationMessageIds.has(n.messageId) && (0, eY.openSpacePageSidePanelTab)(e, n.pageId, {
                                    title: n.title,
                                    openSource: "turn_auto_open"
                                }).opened) {
                                o.openedCreatedPage = !0;
                                break
                            }
                    }
                    let h = e.watch(n => {
                        let {
                            get: a
                        } = n, r = a(eI.$, t), s = a(eD.i), h = a(eI.bb, t);
                        if ((0, eI.Ab)(r)) {
                            c = !1;
                            let e = a(e1.b, t),
                                n = a(eI.cb, t),
                                r = !o.observedTurn || o.attemptId !== e;
                            if (o.attemptId = e, r) {
                                let e = d;
                                d = null, e?.abort(), o.observedTurn = !0, o.activeRequestId = n, o.dismissed = h, o.openedCreatedPage = !1
                            } else o.activeRequestId = n ?? o.activeRequestId, o.dismissed = o.dismissed || h || i && !s;
                            i = s;
                            let l = !h && !o.dismissed && !s && !o.openedCreatedPage && !a(q.j) && !a(eI.D, t) && !a(e8.e, t),
                                p = [];
                            if ((r || l) && (p = a(eI.Q, t) ?? []), r) {
                                o.initialCreationMessageIds = new Set(p.map(e => e.messageId));
                                return
                            }
                            l && u(p);
                            return
                        }
                        if (!o.observedTurn) return;
                        let p = a(eI.w, t);
                        if ("idle" !== r || h || null != p && "completed" !== p.result || null != e.get(eI.D, t) || e.get(q.j) || e.get(e8.e, t)) {
                            o.observedTurn = !1;
                            return
                        }
                        if (c) {
                            if (o.dismissed || s || o.openedCreatedPage || a(e1.b, t) !== o.attemptId) {
                                o.observedTurn = !1;
                                return
                            }
                            if (p?.result !== "completed") return;
                            u(a(eI.Q, t) ?? []), o.observedTurn = !o.openedCreatedPage;
                            return
                        }
                        if (o.observedTurn = !1, p?.result !== "completed" || p.requestId !== o.activeRequestId) return;
                        let m = e.get(eI.M, t);
                        if (null == m) return;
                        let g = (0, l.b)({
                                mapping: m,
                                current_node: e.get(eI.C, t)
                            }),
                            f = g.findLast(te.b);
                        if (f?.status !== "finished_successfully") return;
                        let v = [...(0, e7.e)(g).outputs, ...g.flatMap(e => (0, e7.c)(e).map(e => e.file))],
                            y = e.get(e3.a, t)?.at(-1);
                        if (y?.turn.status !== "complete") return;
                        let b = [...(0, eW.b)(g), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, eH.a)(e, b, !o.dismissed) || !o.dismissed && !o.openedCreatedPage && (0, eX.a)(e, b)) && !o.dismissed && !s && !o.openedCreatedPage) {
                            for (let t of (0, e$.c)((0, l.e)(f)).toReversed())
                                if ((0, eY.openSpacePageSidePanelTab)(e, t.id, {
                                        openSource: "turn_auto_open",
                                        blockId: t.blockId
                                    }).opened) return;
                            if ((0, e9.canOpenChatGptFilePreview)({
                                    browserPreview: !0
                                })) {
                                for (let n of y.turn.items)
                                    if ("assistant-message" === n.type && n.completed)
                                        for (let [a, r] of n.contentReferences.entries()) {
                                            let s = (0, e4.a)(r),
                                                o = null == s ? null : (0, eq.a)(s),
                                                i = v.find(e => null != e.fileId && e.fileId === (r.file_id ?? r.id) || null != e.libraryFileId && e.libraryFileId === r.library_file_id);
                                            if ("file" !== r.type || !(0, eG.a)(r) || null == s || null == o || !(0, eq.f)(o) || null == i && null == (0, e5.b)(r.sandbox_path) && !(0, e5.b)(r.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > eV.a) continue;
                                            let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                c = (0, e2.b)(r, {
                                                    fileName: s,
                                                    messageId: l
                                                });
                                            if (null == c) continue;
                                            if (e.get(eh.f)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let u = e.get(eI.j, t) ?? t,
                                                h = `${l??"message"}:${String(a)}:${s}`,
                                                p = `chatgpt-file:${u}:${h}`,
                                                m = {
                                                    turnId: y.id,
                                                    inputMessageId: g.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: l ?? null
                                                },
                                                f = new AbortController,
                                                b = (0, e9.openChatGptFile)(e, {
                                                    conversationId: u,
                                                    fileName: s,
                                                    gizmoId: e.get(eI.S, t),
                                                    sharedConversationId: e.get(eI.Z, t),
                                                    target: c,
                                                    tabKey: h,
                                                    browserPreview: !0,
                                                    isAccessBlocked: e => e.get(e8.e, t),
                                                    downloadFallback: !1,
                                                    openSource: "auto_open",
                                                    originatingTurn: m,
                                                    signal: f.signal,
                                                    onOpened: () => {
                                                        let t = e.get(eL.l.activeTab$);
                                                        f.signal.aborted || t?.tabId !== p || t.tabType.kind !== eU.a || ((0, eJ.a)(e, ez.CodexFileOpened, {
                                                            threadId: u,
                                                            turnId: m.turnId,
                                                            inputMessageId: m.inputMessageId ?? void 0,
                                                            messageId: m.messageId ?? void 0,
                                                            fileExtension: (0, eK.c)(s) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, eJ.a)(e, ez.CodexWorkspaceFilePreviewAttempted, (0, eQ.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: m,
                                                            path: s,
                                                            threadId: u,
                                                            windowType: "browser"
                                                        })), (0, eZ.b)(e, p, "auto_open"))
                                                    },
                                                    onClose: () => f.abort()
                                                });
                                            d = f;
                                            let x = e.watch(e => {
                                                let {
                                                    get: n
                                                } = e;
                                                (n(eD.i) && n(eL.l.activeTab$)?.tabId !== p || n(e8.e, t)) && f.abort()
                                            });
                                            b.catch(e => {
                                                f.signal.aborted || e0.a.debug("Automatic ChatGPT artifact preview could not open", {
                                                    safe: {},
                                                    sensitive: {
                                                        error: e
                                                    }
                                                })
                                            }).finally(() => {
                                                x(), d === f && (d = null)
                                            });
                                            return
                                        }
                            }
                        }
                    });
                    return () => {
                        h(), d?.abort(), null != o.attemptId && e.set(tt, n, {
                            ...o,
                            attemptId: o.attemptId
                        })
                    }
                }(ah, nH)
            }, m = [nH, ac, ad, a_, ah], nD[10] = nH, nD[11] = ac, nD[12] = ad, nD[13] = a_, nD[14] = ah, nD[15] = p, nD[16] = m) : (p = nD[15], m = nD[16]), (0, c.useEffect)(p, m);
            let aF = (0, o.x)(tk.a, nH),
                az = a_ ? null : aF;
            nD[17] !== nH || nD[18] !== n4 || nD[19] !== av ? (T = {
                conversationId: nH,
                sharedConversationId: n4,
                sharedPost: av
            }, nD[17] = nH, nD[18] = n4, nD[19] = av, nD[20] = T) : T = nD[20];
            let {
                composerConversationId: aG,
                handleSharedConversationSubmitAccepted: aL
            } = function(e) {
                let t, n, a, s = (0, r.c)(12),
                    {
                        conversationId: i,
                        sharedConversationId: l,
                        sharedPost: d
                    } = e,
                    h = (0, o.y)(q.a),
                    p = (0, u._)();
                s[0] !== l ? (t = () => null == l ? null : (0, tD.b)(), s[0] = l, s[1] = t) : t = s[1];
                let [m] = (0, c.useState)(t);
                s[2] !== i || s[3] !== p || s[4] !== h || s[5] !== m || s[6] !== l || s[7] !== d ? (n = () => {
                    let e;
                    if (null != d) {
                        if (!(0, tD.e)(i) || null == (e = (0, a$.a)(h, d, i))) return
                    } else {
                        let t = h.query.getData(tc.n, l);
                        if (null == t || null == l || null == m) return;
                        e = m, (0, eI.nb)(h, {
                            conversation: t,
                            conversationId: e,
                            sharedConversationId: l
                        })
                    }
                    h.get(x.a) ? h.set(oT.a, e) : p((0, eT.c)(e))
                }, s[2] = i, s[3] = p, s[4] = h, s[5] = m, s[6] = l, s[7] = d, s[8] = n) : n = s[8];
                let g = (0, ej.a)(n),
                    f = m ?? i;
                return s[9] !== g || s[10] !== f ? (a = {
                    composerConversationId: f,
                    handleSharedConversationSubmitAccepted: g
                }, s[9] = g, s[10] = f, s[11] = a) : a = s[11], a
            }(T);
            nD[21] !== aG ? (R = (0, U.o)({
                routeKind: "chatgpt-thread",
                conversationId: aG
            }), nD[21] = aG, nD[22] = R) : R = nD[22];
            let aD = null != (0, o.x)(N.c, R);
            nD[23] !== aG || nD[24] !== n6 || nD[25] !== ah ? (Q = () => {
                if (null != n6 && 0 !== n6.length) return (0, t$.b)(ah, aG, n6)
            }, $ = [aG, n6, ah], nD[23] = aG, nD[24] = n6, nD[25] = ah, nD[26] = Q, nD[27] = $) : (Q = nD[26], $ = nD[27]), (0, c.useEffect)(Q, $);
            let aH = (0, c.useRef)(null),
                [aW, aq] = (0, c.useState)(null),
                aU = (0, c.useRef)(null);
            nD[28] === Symbol.for("react.memo_cache_sentinel") ? (Y = () => {
                let e = new AbortController;
                return aU.current = e, () => e.abort()
            }, nD[28] = Y) : Y = nD[28], nD[29] !== ai ? (J = [ai], nD[29] = ai, nD[30] = J) : J = nD[30], (0, c.useLayoutEffect)(Y, J);
            let aK = (0, d.a)();
            nD[31] !== ah ? (ee = e => {
                (0, tn.c)(ah, e)
            }, nD[31] = ah, nD[32] = ee) : ee = nD[32];
            let aV = (0, c.useEffectEvent)(ee);
            nD[33] !== aN || nD[34] !== aV ? (et = () => () => {
                null != aN && aV(aN)
            }, nD[33] = aN, nD[34] = aV, nD[35] = et) : et = nD[35], nD[36] !== aN ? (ea = [aN], nD[36] = aN, nD[37] = ea) : ea = nD[37], (0, c.useEffect)(et, ea);
            let aQ = (0, o.x)(oE.b, nH),
                aY = (0, o.x)(!aw && e8.e, nH),
                aX = (0, o.x)(eI.y, nH),
                aJ = (0, o.x)(eI.S, nH),
                aZ = (0, o.x)(eI.D, nH),
                a0 = (0, o.x)(eI.N, nH),
                a1 = (0, o.x)(eI.$, nH),
                a2 = (0, o.x)(eI.W, nH),
                a3 = (0, o.x)(eI.Y, nH),
                a4 = (0, o.x)(ap, nH);
            nD[38] !== aK || nD[39] !== a4 ? (er = a4 ?? aK.formatMessage(X.a.newChat), nD[38] = aK, nD[39] = a4, nD[40] = er) : er = nD[40];
            let a5 = er,
                a6 = (0, o.x)(eI.E, nH),
                a7 = (0, o.x)(eI.db, nH),
                a8 = (0, o.x)(eI.eb, nH),
                a9 = (0, o.x)(ts.q, nH),
                re = (0, o.x)(ts.p, nH),
                rt = (0, o.x)(ts.n, nH),
                rn = (0, o.x)(ts.r, nH),
                ra = (0, o.x)(ts.o, nH),
                rr = (0, o.x)(ts.j, nH),
                rs = (0, o.x)(eI.bb, nH),
                ro = (0, o.x)(ts.A, nH);
            nD[41] !== a1 ? (es = (0, eI.Ab)(a1), nD[41] = a1, nD[42] = es) : es = nD[42];
            let ri = es,
                rl = (0, o.x)(tN, nH),
                rc = (0, o.z)(b.u),
                rd = (0, o.z)(b.m),
                ru = (0, o.z)(b.b),
                rh = (0, o.z)(b.n);
            nD[43] === Symbol.for("react.memo_cache_sentinel") ? (eo = (0, S.a)(), nD[43] = eo) : eo = nD[43];
            let rp = (0, eu.f)(eo);
            nD[44] === Symbol.for("react.memo_cache_sentinel") ? (ei = (0, O.b)(), nD[44] = ei) : ei = nD[44];
            let rm = (0, eu.f)(ei),
                rg = (0, o.z)(ot.f);
            nD[45] !== aW || nD[46] !== aG || nD[47] !== aR || nD[48] !== a_ || nD[49] !== n1 || nD[50] !== ah ? (el = (e, t, n, a) => {
                !(e || ah.get(W.a)) && ((0, ts.b)(ah, aG, t, void 0, n, a), aW?.focus(), a_ || aR || (0, tl.f)(ah, aG, {
                    isTemporaryChat: n1
                }))
            }, nD[45] = aW, nD[46] = aG, nD[47] = aR, nD[48] = a_, nD[49] = n1, nD[50] = ah, nD[51] = el) : el = nD[51];
            let rf = el;
            nD[52] !== nH || nD[53] !== av ? (ta = null == (ec = null == av ? null : (0, oy.a)(av, nH)) ? void 0 : (0, ab.a)(ec), nD[52] = nH, nD[53] = av, nD[54] = ec, nD[55] = ta) : (ec = nD[54], ta = nD[55]);
            let rv = ta,
                ry = ec ?? aI.data,
                rb = a6 ? a7 : ry?.title,
                rx = (0, o.z)(y.h),
                rw = (0, o.z)(y.g),
                rC = "chatgpt-thread" === ah.value.routeKind && ah.value.workSideChat?.conversationId === nH,
                r_ = ry?.conversation_origin ?? aX ?? (null != ao || rC ? "tpp" : null),
                rj = "tpp" === r_,
                rS = rj && "denied" === rc.status && "go-plan" === rc.reason,
                rI = (0, o.z)(ep.e),
                rT = (0, u.Y)(),
                rE = rT.state;
            (0, o.z)(V.b);
            let rP = (0, o.x)(eh.d, "3901104270") && rE?.openGoalPlan === !0,
                rA = (0, ev.a)(),
                rM = "tpp" === r_ || "flora" === r_,
                rk = (0, eu.f)("2871250183"),
                rR = (0, o.z)(!!rM && b.v),
                rN = void 0 !== nJ && nJ || rR,
                rO = null == rI || rI.isFullWidth ? void 0 : rI.width ?? 420,
                rB = !0 === (0, o.z)(rM ? null : e_.d),
                rF = (0, o.z)(rM ? H.b : H.a),
                rz = !rM && rF,
                rG = !rm || rh && !rM,
                rL = !a_ && rh && !rM,
                rD = rL && rd,
                rH = a_ && ry?.is_read_only === !0 || as?.is_read_only === !0;
            nD[56] !== nH || nD[57] !== a_ || nD[58] !== ah ? (th = () => null, nD[56] = nH, nD[57] = a_, nD[58] = ah, nD[59] = th) : th = nD[59];
            let [rW] = (0, c.useState)(th), rq = ry?.gizmo_id ?? aJ ?? rW?.gizmoId ?? null;
            nD[60] !== rq || nD[61] !== a_ ? (tp = a_ || null == rq || (0, tG.a)(rq) ? null : rq, nD[60] = rq, nD[61] = a_, nD[62] = tp) : tp = nD[62];
            let rU = tp,
                rK = (0, o.x)(ti, aG);
            nD[63] !== ry || nD[64] !== nH || nD[65] !== a5 || nD[66] !== rT.pathname || nD[67] !== n4 || nD[68] !== av ? (tm = (0, tv.d)({
                conversation: ry,
                conversationId: nH,
                conversationTitle: a5,
                pathname: rT.pathname,
                sharedConversationId: n4,
                sharedPost: av
            }), nD[63] = ry, nD[64] = nH, nD[65] = a5, nD[66] = rT.pathname, nD[67] = n4, nD[68] = av, nD[69] = tm) : tm = nD[69];
            let rV = tm,
                rQ = null;
            a_ || (rQ = null != ry ? (0, Z.A)(ry) : (0, tG.a)(aJ) ? aJ : rW?.projectId ?? null);
            let r$ = (0, o.x)(eA.c, a_ ? null : nH),
                rY = a_ || rM || null != rQ || r$ || null == rK ? rU : rK.id;
            nD[70] !== aG || nD[71] !== rY || nD[72] !== rT.pathname ? (tg = {
                gizmoId: rY,
                conversationId: aG,
                visitKey: rT.pathname
            }, nD[70] = aG, nD[71] = rY, nD[72] = rT.pathname, nD[73] = tg) : tg = nD[73];
            let rX = (0, o.x)(s1.d, tg),
                {
                    data: rJ
                } = (0, s.a)({
                    enabled: null != rQ,
                    queryFn: () => {
                        if (null == rQ) throw Error("Expected a ChatGPT project id");
                        return (0, j.c)(rQ)
                    },
                    queryKey: (0, Z.D)(rQ ?? ""),
                    staleTime: ef.b.ONE_MINUTE
                }),
                rZ = null != rQ && (rJ?.gizmo.share_recipient !== "private" || (rJ?.gizmo.sharing?.subjects?.length ?? 0) > 0);
            nD[74] !== ry?.context_scopes || nD[75] !== rJ?.gizmo.gizmo_snorlax_type ? (tf = ry?.context_scopes?.includes("HEALTH") === !0 || rJ?.gizmo.gizmo_snorlax_type === "potion", nD[74] = ry?.context_scopes, nD[75] = rJ?.gizmo.gizmo_snorlax_type, nD[76] = tf) : tf = nD[76];
            let r0 = tf,
                r1 = (0, s6.a)(ry?.context_scopes, {
                    projectType: rJ?.gizmo.gizmo_snorlax_type,
                    projectId: rQ,
                    lockedProjectId: rg?.projectId
                }),
                r2 = aY || rZ || r0 || r1;
            nD[77] !== rJ?.gizmo.display.name || nD[78] !== rJ?.gizmo.display.name.trim ? (ty = rJ?.gizmo.display.name.trim() || null, nD[77] = rJ?.gizmo.display.name, nD[78] = rJ?.gizmo.display.name.trim, nD[79] = ty) : ty = nD[79];
            let r3 = ty,
                r4 = rJ?.gizmo.display.theme,
                r6 = rJ?.gizmo.display.emoji;
            nD[80] !== rJ ? (tb = "shared" === (0, tL.b)(rJ) ? (0, a.jsx)(E.b, {
                icon: {
                    assets: {
                        16: iy,
                        20: ib.a
                    }
                }
            }) : void 0, nD[80] = rJ, nD[81] = tb) : tb = nD[81], nD[82] !== r4 || nD[83] !== r6 || nD[84] !== tb ? (tw = (0, a.jsx)(D.a, {
                className: "icon-leading",
                size: "leading",
                color: r4,
                icon: r6,
                sharedIcon: tb
            }), nD[82] = r4, nD[83] = r6, nD[84] = tb, nD[85] = tw) : tw = nD[85];
            let r7 = tw,
                r8 = (0, o.x)(eI.i, nH),
                r9 = r8?.metadata ?? ry?.context_truncation_continuation,
                se = a_ || n1 || null != as || null == rx || ry?.owner?.user_id == null || null == rQ || ry.owner.user_id === (rw ? rx.split("__")[0] : rx) ? null : (0, aa.d)(rQ, ry.conversation_id, ry.owner.user_id),
                st = !a_ && !ac && !rN,
                sn = (0, o.x)(st ? oo.c : null, nH),
                sa = sn?.isReviewing === !0,
                sr = null == sn ? aO : sn.conversation.mapping,
                ss = null == sn ? aB : sn.conversation.current_node,
                so = null == aO ? ry : null,
                si = sr ?? so?.mapping,
                sl = (0, eu.i)();
            nD[86] !== si || nD[87] !== sl ? (tC = function(e, t) {
                if (null != e && Object.values(e).some(e => e?.message != null && (0, s5.b)(e.message))) return () => (0, eu.d)(t, "2347981323").get("enabled", !1)
            }(si, sl), nD[86] = si, nD[87] = sl, nD[88] = tC) : tC = nD[88];
            let sc = tC,
                sd = (0, o.z)(null != sc ? ex.h : void 0),
                su = (0, o.x)(null != sc && !a_ && !ac && !sa && ey.a, nH),
                sh = (0, o.z)(su ? eb.a : void 0);
            nD[89] === Symbol.for("react.memo_cache_sentinel") ? (tS = (0, td.a)(), nD[89] = tS) : tS = nD[89];
            let sp = tS;
            nD[90] === Symbol.for("react.memo_cache_sentinel") ? (tI = new WeakMap, nD[90] = tI) : tI = nD[90];
            let sm = tI;
            nD[91] !== rF || nD[92] !== rz || nD[93] !== r9 || nD[94] !== r_ || nD[95] !== ss || nD[96] !== sr || nD[97] !== rk || nD[98] !== sc || nD[99] !== so || nD[100] !== ac || nD[101] !== a_ || nD[102] !== ri || nD[103] !== rM || nD[104] !== a0 || nD[105] !== rt || nD[106] !== ra || nD[107] !== re || nD[108] !== a9 || nD[109] !== rn || nD[110] !== sa || nD[111] !== ah.get || nD[112] !== sn?.isEntering || nD[113] !== aQ || nD[114] !== a1 || nD[115] !== sh || nD[116] !== sd ? (tT = () => sp({
                conversation: so,
                contextContinuation: r9,
                clinicalSearchEnabled: rz,
                clinicalCitationsEnabled: rF,
                enableCloudBrowserActivity: rk,
                conversationOrigin: r_,
                enableVoiceImageLoadingFix: sc,
                voiceImageSessionId: sd,
                voiceImageGenerationSpawnIds: sh,
                enableImageGenerationLoadingState: !a_ && !ac && !sa && "error" !== a1,
                getRenderTelemetry: e => (0, ih.c)(ah.get, e),
                isWorkConversation: rM,
                isStreaming: !a_ && !ac && !sa && ri,
                mode: "conversation",
                mcpResponseCache: sm,
                moderationDisclaimersByMessageId: a0,
                streamingOrders: aQ,
                pendingSubmission: null == a9 || a_ || sa || sn?.isEntering ? null : {
                    attachments: rt,
                    commentAttachments: ra,
                    prompt: a9,
                    ...re,
                    selectedTextAttachments: rn
                },
                threadCurrentNode: ss,
                threadMapping: sr
            }), nD[91] = rF, nD[92] = rz, nD[93] = r9, nD[94] = r_, nD[95] = ss, nD[96] = sr, nD[97] = rk, nD[98] = sc, nD[99] = so, nD[100] = ac, nD[101] = a_, nD[102] = ri, nD[103] = rM, nD[104] = a0, nD[105] = rt, nD[106] = ra, nD[107] = re, nD[108] = a9, nD[109] = rn, nD[110] = sa, nD[111] = ah.get, nD[112] = sn?.isEntering, nD[113] = aQ, nD[114] = a1, nD[115] = sh, nD[116] = sd, nD[117] = tT) : tT = nD[117], sn?.isEntering, nD[118] !== tT ? (tA = tT(), nD[118] = tT, nD[119] = tA) : tA = nD[119];
            let sg = tA,
                {
                    isConversationEmpty: sf,
                    renderedConversation: sv,
                    renderedTurns: sy,
                    showPendingLoadingMessage: sb
                } = sg;
            nD[120] !== ad || nD[121] !== rM || nD[122] !== sv || nD[123] !== ah ? (tM = () => {
                if (!ad && rM) return ah.set(iv.b, sv), () => {
                    ah.get(iv.b) === sv && ah.set(iv.b, null)
                }
            }, tH = [ad, rM, sv, ah], nD[120] = ad, nD[121] = rM, nD[122] = sv, nD[123] = ah, nD[124] = tM, nD[125] = tH) : (tM = nD[124], tH = nD[125]), (0, c.useEffect)(tM, tH);
            let sx = (0, o.x)(eM.g, nH),
                sw = sb && null == sx,
                sC = !rM && !a_ && !ad && !ac,
                s_ = null == ao && !rz && !ad && !a_ && (rj || sC) && !ac,
                sj = rj && null == a8,
                sS = aZ ?? ro;
            nD[126] !== nH || nD[127] !== a_ || nD[128] !== aN ? (tU = a_ ? null : aN ?? ((0, tD.e)(nH) ? null : nH), nD[126] = nH, nD[127] = a_, nD[128] = aN, nD[129] = tU) : tU = nD[129];
            let sI = tU,
                sT = null == r_ && null == ry ? null : rM,
                sE = rS ? null : sI;
            nD[130] !== n1 || nD[131] !== sT || nD[132] !== n7 || nD[133] !== sE || nD[134] !== ai ? (tK = {
                sourceConversationId: sE,
                routePattern: n7,
                isTemporaryChat: n1,
                knownWorkConversation: sT,
                viewActivation: ai,
                activationController: aU
            }, nD[130] = n1, nD[131] = sT, nD[132] = n7, nD[133] = sE, nD[134] = ai, nD[135] = tK) : tK = nD[135];
            let {
                branchingMessageId: sP,
                handleBranch: sA
            } = function(e) {
                let t, n, a = (0, r.c)(14),
                    {
                        sourceConversationId: s,
                        routePattern: i,
                        isTemporaryChat: l,
                        knownWorkConversation: h,
                        viewActivation: p,
                        activationController: m
                    } = e,
                    g = (0, o.y)(q.a),
                    f = (0, d.a)(),
                    v = (0, u._)(),
                    [y, b] = (0, c.useState)(null),
                    x = y?.activation === p ? y.messageId : null;
                a[0] !== m || a[1] !== x || a[2] !== f || a[3] !== l || a[4] !== h || a[5] !== v || a[6] !== i || a[7] !== g || a[8] !== s || a[9] !== p ? (t = (e, t) => {
                    let n = void 0 !== t && t;
                    if (null == s || null != x) return;
                    let a = m.current?.signal;
                    null == a || a.aborted || (b({
                        messageId: e,
                        activation: p
                    }), (0, eI.h)(g, {
                        conversationId: s,
                        messageId: e,
                        inWorkMode: n
                    }).then(e => {
                        let {
                            clientThreadId: t
                        } = e;
                        a.aborted || (n && (0, eE.a)(g, "opened"), v(null == i ? (0, eT.c)(t, {
                            isTemporaryChat: l
                        }) : (0, u.C)(i, {
                            conversationId: t
                        })))
                    }).catch(() => {
                        a.aborted || (n && (0, eE.a)(g, "failed"), b(null), g.get(en.f).danger(f.formatMessage({
                            id: "chatgptConversations.branchFailed",
                            defaultMessage: "Failed to create chat",
                            description: "Error shown when ChatGPT cannot continue a conversation in a new chat"
                        }), {
                            errorAnalytics: {
                                toastId: "branch_conversation_failed",
                                operation: "branch_conversation",
                                errorCategory: "conversation",
                                conversationId: s ?? void 0,
                                retryable: !0,
                                userFacingError: {
                                    surface: (0, eS.b)(h),
                                    errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                                }
                            }
                        }))
                    }))
                }, a[0] = m, a[1] = x, a[2] = f, a[3] = l, a[4] = h, a[5] = v, a[6] = i, a[7] = g, a[8] = s, a[9] = p, a[10] = t) : t = a[10];
                let w = (0, ej.a)(t);
                return a[11] !== x || a[12] !== w ? (n = {
                    branchingMessageId: x,
                    handleBranch: w
                }, a[11] = x, a[12] = w, a[13] = n) : n = a[13], n
            }(tK);
            nD[136] !== aG || nD[137] !== nH || nD[138] !== rB || nD[139] !== n1 || nD[140] !== rS || nD[141] !== sT || nD[142] !== an || nD[143] !== aN ? (tV = {
                conversationId: nH,
                composerConversationId: aG,
                serverConversationId: aN,
                isTemporaryChat: n1,
                knownWorkConversation: sT,
                isPolicyBlocking: rB,
                isWorkPlanDenied: rS,
                onRetryMissingConversation: an
            }, nD[136] = aG, nD[137] = nH, nD[138] = rB, nD[139] = n1, nD[140] = rS, nD[141] = sT, nD[142] = an, nD[143] = aN, nD[144] = tV) : tV = nD[144];
            let {
                handleEditUserMessage: sM,
                handleRegenerateResponse: sk
            } = function(e) {
                let t, n, a, s = (0, r.c)(24),
                    {
                        conversationId: i,
                        composerConversationId: c,
                        serverConversationId: h,
                        isTemporaryChat: p,
                        knownWorkConversation: m,
                        isPolicyBlocking: g,
                        isWorkPlanDenied: f,
                        onRetryMissingConversation: v
                    } = e,
                    y = !0 === m,
                    b = (0, o.y)(q.a),
                    x = (0, d.a)(),
                    w = (0, u._)();
                s[0] !== i || s[1] !== x || s[2] !== g || s[3] !== p || s[4] !== m || s[5] !== b || s[6] !== h ? (t = async (e, t, n, a) => {
                    if (!g) try {
                        await async function(e, t) {
                            let {
                                conversationId: n,
                                isTemporaryChat: a = !1,
                                messageId: r,
                                prompt: s,
                                renderFormat: o,
                                inlineSystemHints: i
                            } = t;
                            if (e.get(ts.j, n)) throw new tP.a("edit_message_busy", "The chat is busy.");
                            let l = e.get(eI.y, n);
                            if ("tpp" === l) throw new tP.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                            if (!e.get(tN, n)) throw new tP.a("edit_message_busy", "The chat is busy.");
                            let c = e.get(tE.b, {
                                conversationId: n,
                                messageId: r
                            });
                            if (null == c) throw new tP.a("edit_message_target_unavailable", "The user message could not be edited.");
                            let {
                                selectedModel: d
                            } = c, u = s.trim(), h = (0, tE.c)(c.message, e.get, i), p = (0, tR.c)({
                                message: c.message,
                                prompt: u,
                                renderFormat: o,
                                systemHints: h,
                                inlineSystemHints: i
                            }), m = (0, tj.f)(p.message.metadata), g = p.message.content, f = "multimodal_text" === g.content_type && g.parts.some(e => "string" != typeof e);
                            if (0 === u.length && 0 === m.length && !f) throw new tP.a("edit_message_empty", "The edited message cannot be empty.");
                            if (e.get(eh.d, "3574573347")) {
                                let t = e.get(tE.a, n);
                                t?.messageId === r && t.prompt === s && t_()((0, tE.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(tE.a, n, {
                                    messageId: r,
                                    prompt: s,
                                    isTemporaryChat: a,
                                    inlineSystemHints: i
                                }), (0, tl.f)(e, n, {
                                    isTemporaryChat: a
                                }))
                            }
                            let v = tO(e.get, n),
                                y = v.request.current,
                                b = () => tO(e.get, n).request.current === y && t_()(e.get(tE.b, {
                                    conversationId: n,
                                    messageId: r
                                }), c) && !(0, eI.Ab)(e.get(eI.$, n));
                            e.set(ts.j, n, !0);
                            try {
                                if ("flora" !== l && null != y && null == e.get(v.session$) && null == e.get(tk.a, n) && (await y.stop(), await y.closed), !b()) throw new tP.a("edit_message_target_unavailable", "The edited message or active response changed.");
                                await (0, tR.submitChatGPTCompletion)(e, {
                                    isSubmissionCurrent: b,
                                    isRequestCurrent: () => e.get(eI.C, n) === p.message.id,
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
                                e.set(ts.j, n, !1)
                            }
                        }(b, {
                            conversationId: i,
                            isTemporaryChat: p,
                            messageId: e,
                            prompt: t,
                            inlineSystemHints: a,
                            renderFormat: n
                        })
                    } catch (t) {
                        let e = (0, eS.c)(t);
                        throw b.get(en.f).danger(x.formatMessage({
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
                                conversationId: h ?? void 0,
                                userFacingError: {
                                    ...e,
                                    surface: (0, eS.b)(m),
                                    errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                                }
                            }
                        }), t
                    }
                }, s[0] = i, s[1] = x, s[2] = g, s[3] = p, s[4] = m, s[5] = b, s[6] = h, s[7] = t) : t = s[7];
                let C = (0, ej.a)(t);
                s[8] !== c || s[9] !== i || s[10] !== x || s[11] !== g || s[12] !== p || s[13] !== y || s[14] !== f || s[15] !== m || s[16] !== w || s[17] !== v || s[18] !== b || s[19] !== h ? (n = async (e, t) => {
                    if (!g && !f) try {
                        let n = b.get(r5.e, i);
                        if (n?.startsNewWorkConversation || null == b.get(eI.j, i) || (0, sZ.j)(b.get(eI.U, i)?.metadata?.errorCode)) {
                            if (n?.message.id !== e) return;
                            let a = (0, l.e)(n.prompt),
                                r = (0, sK.i)(n.prompt.metadata, a, (0, tj.e)(n.prompt.metadata), (0, sU.w)(a)),
                                s = (0, sV.a)(n.prompt, a, r),
                                o = b.get(ts.t, c),
                                d = "markdown" === s.renderFormat ? s.message : a,
                                u = o.length > 0 ? o : d,
                                h = o.length > 0 ? void 0 : s.renderFormat ?? "plain";
                            if (null != v) return void await v(u, h);
                            if (null == b.get(eI.j, i) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                                let e = u;
                                if (null != h) {
                                    let t = (0, sJ.e)(u, {
                                        defaultTextKind: "plain" === h ? "literal" : "prompt",
                                        enableRichText: !0,
                                        enableFileMentions: !0
                                    });
                                    e = t.getPersistedText(), t.destroy()
                                }
                                let t = `chatgpt:${i}`;
                                (0, s$.E)(t, (t, n) => n ? t : e) || (0, ts.X)(b, i, e), (0, s$.e)(t);
                                return
                            }
                            if (n.startsNewWorkConversation) {
                                let e = "user" === n.prompt.author.role ? (0, l.i)((0, l.s)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                    t = null != e && e.length <= 1e3 ? e : (0, sU.w)(a);
                                (0, sY.m)(b, "work"), await w("/", {
                                    state: {
                                        focusComposerNonce: Date.now(),
                                        prefillPrompt: o.length > 0 ? o : t,
                                        prefillPromptFormat: o.length > 0 ? void 0 : "plain",
                                        prefillPromptOnlyIfEmpty: !0
                                    }
                                });
                                return
                            }
                            if (y && !p && (0, sQ.fb)(b, (0, sX.b)({
                                    entrypoint: "home"
                                }))) return void await w("/");
                            let m = (0, l.l)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                            !0 !== n.forceUseSearch || m.includes("search") || m.push("search");
                            let g = (0, s0.g)(b, m);
                            (0, ts.Y)(b, g, t.model);
                            let f = b.get(eI.S, i);
                            (0, sY.m)(b, y ? "work" : "chat"), await w({
                                pathname: "/",
                                search: (0, eT.e)("", p)
                            }, {
                                state: {
                                    initialChatGptConversationId: g,
                                    project: null,
                                    chatGptProjectId: (0, tG.a)(f) ? f : null,
                                    chatGptCustomGptId: (0, tG.a)(f) ? null : f,
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: u,
                                    prefillPromptFormat: h,
                                    prefillPromptOnlyIfEmpty: y
                                }
                            });
                            return
                        }
                        await (0, r5.h)(b, {
                            conversationId: i,
                            isTemporaryChat: p,
                            messageId: e,
                            retry: y && "error_retry" === t.source && null == t.model.thinkingEffort ? {
                                ...t,
                                model: b.get(ts.u, i)
                            } : t
                        })
                    } catch {
                        b.get(en.f).danger(x.formatMessage({
                            id: "chatgptConversations.regenerate.failed",
                            defaultMessage: "Failed to regenerate response",
                            description: "Error toast shown when generating another version of a ChatGPT response fails"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.regenerate.failed",
                                operation: "regenerate_response",
                                errorCategory: "conversation",
                                conversationId: h ?? void 0,
                                userFacingError: {
                                    surface: (0, eS.b)(m),
                                    errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                                }
                            }
                        })
                    }
                }, s[8] = c, s[9] = i, s[10] = x, s[11] = g, s[12] = p, s[13] = y, s[14] = f, s[15] = m, s[16] = w, s[17] = v, s[18] = b, s[19] = h, s[20] = n) : n = s[20];
                let _ = (0, ej.a)(n);
                return s[21] !== C || s[22] !== _ ? (a = {
                    handleEditUserMessage: C,
                    handleRegenerateResponse: _
                }, s[21] = C, s[22] = _, s[23] = a) : a = s[23], a
            }(tV), sR = null != ry || null != rW;
            nD[145] !== nH || nD[146] !== a5 || nD[147] !== n1 || nD[148] !== rQ || nD[149] !== aN || nD[150] !== sR || nD[151] !== ai ? (tQ = {
                conversationId: nH,
                serverConversationId: aN,
                conversationTitle: a5,
                projectId: rQ,
                hasConversationDetails: sR,
                isTemporaryChat: n1,
                viewActivation: ai,
                activationController: aU
            }, nD[145] = nH, nD[146] = a5, nD[147] = n1, nD[148] = rQ, nD[149] = aN, nD[150] = sR, nD[151] = ai, nD[152] = tQ) : tQ = nD[152];
            let sN = function(e) {
                    let t, n, a = (0, r.c)(18),
                        {
                            conversationId: s,
                            serverConversationId: i,
                            conversationTitle: l,
                            projectId: h,
                            hasConversationDetails: p,
                            isTemporaryChat: m,
                            viewActivation: g,
                            activationController: f
                        } = e,
                        v = (0, o.y)(q.a),
                        y = (0, d.a)(),
                        x = (0, u._)(),
                        w = (0, eO.c)(),
                        C = (0, o.z)(b.t),
                        _ = (0, o.z)(b.r),
                        [j, S] = (0, c.useState)(null),
                        I = j === g;
                    a[0] !== f || a[1] !== s || a[2] !== l || a[3] !== p || a[4] !== y || a[5] !== I || a[6] !== m || a[7] !== x || a[8] !== w || a[9] !== h || a[10] !== v || a[11] !== i || a[12] !== g ? (t = () => {
                        if (I || null == i) return;
                        let e = v.get(b.t);
                        if (!e && !v.get(b.r) || !e && !p) return;
                        let t = f.current?.signal;
                        null == t || t.aborted || (S(g), (e ? (0, eB.f)(v, {
                            chatGptThreadId: s,
                            conversationTitle: l
                        }).then(e => {
                            if (null == e) return null;
                            let n = (0, eR.a)(v, e);
                            if ("created" === e.status) return null == n || t.aborted || v.get(en.f).danger(n.message, {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.handleHandoff"
                                }
                            }), e.conversationId;
                            throw (0, eR.a)(v, e)
                        }) : (0, ek.a)({
                            scope: v,
                            projectId: h ?? void 0,
                            prompt: `Continuing from ${(0,eN.f)({conversationId:i,title:l?.trim()||"ChatGPT thread"})}`
                        }).then(eF)).then(n => {
                            if (!t.aborted) {
                                if (null != n) return void(e ? w(n) : x((0, eT.c)(n, {
                                    isTemporaryChat: m
                                })));
                                throw Error("Unable to create a Work conversation")
                            }
                        }).catch(() => {
                            t.aborted || (S(null), v.get(en.f).danger(y.formatMessage({
                                id: "chatgptConversations.handoffFailed",
                                defaultMessage: "Failed to create chat",
                                description: "Error shown when ChatGPT cannot hand off a conversation to a task"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgptConversations.handoffFailed"
                                }
                            }))
                        }))
                    }, a[0] = f, a[1] = s, a[2] = l, a[3] = p, a[4] = y, a[5] = I, a[6] = m, a[7] = x, a[8] = w, a[9] = h, a[10] = v, a[11] = i, a[12] = g, a[13] = t) : t = a[13];
                    let T = t,
                        E = null != i && (C || p && _);
                    return a[14] !== T || a[15] !== I || a[16] !== E ? (n = {
                        isHandoffPending: I,
                        handleHandoff: T,
                        canHandoff: E
                    }, a[14] = T, a[15] = I, a[16] = E, a[17] = n) : n = a[17], n
                }(tQ),
                {
                    isHandoffPending: sO,
                    handleHandoff: sB
                } = sN,
                sF = !aY && sN.canHandoff;
            nD[153] !== ao ? (tY = ao?.mcpAppContext == null ? null : {
                hostId: K.a,
                server: "codex_apps",
                connectorId: ao.mcpAppContext.id
            }, nD[153] = ao, nD[154] = tY) : tY = nD[154];
            let sz = (0, o.x)(z.b, tY),
                sG = ao?.fullscreenContent != null ? "content" : "workspace",
                sL = (0, C.a)(ad ? "embedded" : sG),
                sD = !sz && (aE || !aI.isError) && !ac && !rN && (null == av || ag?.authMethod === "chatgpt" || ax) && (!a_ || null != ry),
                sW = ru || rN || rH || rD || rS,
                sq = sW || sa || sn?.needsEntry === !0;
            nD[155] !== sW || nD[156] !== aK || nD[157] !== sa || nD[158] !== sn?.needsEntry ? (sa ? tX = aK.formatMessage(oo.d.readOnlyPlaceholder) : !sW && sn?.needsEntry && (tX = !1), nD[155] = sW, nD[156] = aK, nD[157] = sa, nD[158] = sn?.needsEntry, nD[159] = tX) : tX = nD[159];
            let s7 = sD && !sW && !a_ && !aR && !rB && !ri && !rr && !rs && !rX,
                on = !sD || a_ || sq || aR ? null : aW,
                oa = !rz && !ad && !a_;
            nD[160] !== rr || nD[161] !== rt || nD[162] !== a9 ? (tJ = rr ? {
                hasPrompt: null != a9,
                attachments: rt
            } : null, nD[160] = rr, nD[161] = rt, nD[162] = a9, nD[163] = tJ) : tJ = nD[163];
            let or = null == rI ? null : rO ?? "fullscreen";
            nD[164] !== nH || nD[165] !== aS || nD[166] !== sC || nD[167] !== s_ || nD[168] !== ri || nD[169] !== rP || nD[170] !== sg || nD[171] !== aY || nD[172] !== on || nD[173] !== oa || nD[174] !== tJ || nD[175] !== or || nD[176] !== ai ? (tZ = {
                conversationId: nH,
                viewActivation: ai,
                history: aS,
                renderState: sg,
                isChatSummaryEnabled: sC,
                isThreadSummaryPanelAvailable: s_,
                includeGoals: oa,
                openGoalPlan: rP,
                isTurnActive: ri,
                pendingSubmission: tJ,
                shouldBlockExternalEgress: aY,
                composerActions: on,
                otherPanelWidth: or
            }, nD[164] = nH, nD[165] = aS, nD[166] = sC, nD[167] = s_, nD[168] = ri, nD[169] = rP, nD[170] = sg, nD[171] = aY, nD[172] = on, nD[173] = oa, nD[174] = tJ, nD[175] = or, nD[176] = ai, nD[177] = tZ) : tZ = nD[177];
            let ol = function(e) {
                let t, n, s, i, d, u, h, p, m = (0, r.c)(39),
                    {
                        conversationId: g,
                        viewActivation: f,
                        history: v,
                        renderState: y,
                        isChatSummaryEnabled: b,
                        isThreadSummaryPanelAvailable: x,
                        includeGoals: w,
                        openGoalPlan: C,
                        isTurnActive: _,
                        pendingSubmission: j,
                        shouldBlockExternalEgress: S,
                        composerActions: I,
                        otherPanelWidth: T
                    } = e,
                    E = (0, o.z)(oQ.pagesEnabled$),
                    {
                        renderedConversation: P,
                        renderedTurns: A
                    } = y,
                    M = (0, o.x)(w ? oY.a : null, g),
                    k = (M?.length ?? 0) > 0,
                    R = (0, o.x)(b ? e1.b : null, g),
                    N = JSON.stringify([g, f]),
                    [O, B] = (0, c.useState)(null),
                    F = function(e, t) {
                        let {
                            conversation: n,
                            completionAttemptId: a,
                            allowAutoOpen: r = !0,
                            suppressAutoOpen: s = !1,
                            isTurnActive: o,
                            isPendingUserTurn: i,
                            hasGoal: c = !1,
                            visitKey: d
                        } = t;
                        if (e?.visitKey === d && e.conversation === n && e.completionAttemptId === a && e.allowAutoOpen === r && e.suppressAutoOpen === s && e.isTurnActive === o && e.isPendingUserTurn === i && e.hasGoal === c) return e;
                        let u = null == n ? [] : (0, l.b)(n, oX.l),
                            h = null == e || e.visitKey !== d,
                            p = u.find(oX.l)?.id ?? (h || i ? null : e.userMessageId),
                            m = i ? null : u.findLast(oJ)?.id ?? null,
                            g = !h && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != p && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== p),
                            f = new Set(h ? [] : e.observedSummaryRequestIds),
                            v = !h && !g && e.hasConsumedSummaryRequest,
                            y = !v && !h && null != e.conversation && (o || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != m && !f.has(m);
                        if (null != n && (h || null == e.conversation || !o))
                            for (let e of Object.values(n.mapping)) e?.message?.id != null && oJ(e.message) && f.add(e.message.id);
                        else null != m && f.add(m);
                        return {
                            visitKey: d,
                            conversation: n,
                            completionAttemptId: a,
                            allowAutoOpen: r,
                            suppressAutoOpen: s,
                            isTurnActive: o,
                            isPendingUserTurn: i,
                            hasGoal: c,
                            observedSummaryRequestIds: f,
                            userMessageId: p,
                            hasConsumedSummaryRequest: v || null != m,
                            isOpen: s ? !h && e.suppressAutoOpen && e.isOpen : r && (c && (h || !e.hasGoal) || y) || !h && (!g || c) && (!e.hasGoal || c) && e.isOpen,
                            shouldPreventAutoFocus: h || g || c && !e.hasGoal || y && !e.isOpen || e.shouldPreventAutoFocus
                        }
                    }(O, {
                        completionAttemptId: R,
                        allowAutoOpen: !(0, oV.a)("(width < 768px)"),
                        suppressAutoOpen: C,
                        conversation: b && (v.canUseLiveThread || !v.isConversationLoadUnresolved) ? P : null,
                        isTurnActive: _,
                        hasGoal: k,
                        isPendingUserTurn: j?.hasPrompt === !0 && !_,
                        visitKey: N
                    });
                F !== O && B(F);
                let z = x && P?.mapping === v.threadMapping && P?.current_node === v.threadCurrentNode,
                    G = (0, o.x)(z ? eI.q : null, g),
                    L = P?.mapping,
                    D = P?.current_node;
                m[0] !== L || m[1] !== D ? (t = oK()(() => {
                    let e = null == L ? [] : (0, l.a)({
                        mapping: L,
                        current_node: D
                    });
                    return {
                        messages: e,
                        resources: (0, e7.e)(e)
                    }
                }), m[0] = L, m[1] = D, m[2] = t) : t = m[2];
                let H = t;
                m[3] !== b || m[4] !== x || m[5] !== _ || m[6] !== E || m[7] !== j || m[8] !== H || m[9] !== A || m[10] !== G ? (n = x ? oK()(() => (function(e) {
                    var t;
                    let n, a, {
                            automationReferences: r,
                            includePages: s = !1,
                            includeSources: o = !0,
                            messages: i,
                            pendingAttachments: c = [],
                            resources: d = (0, e7.e)(i),
                            turns: u,
                            isTurnActive: h = u.at(-1)?.turn.status === "in_progress"
                        } = e,
                        p = [...d.inputs],
                        m = o ? (0, ii.a)(i, u) : [],
                        g = new Map,
                        f = new Map,
                        v = (t = i, -1 !== (n = o9()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, id.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                        y = [],
                        b = new Map(i.map(e => [(0, l.g)(e), e])),
                        x = o9()(i, e => "user" === e.author.role),
                        w = [];
                    for (let e of c) p.some(t => t.fileId === e.id || null != e.libraryFileId && t.libraryFileId === e.libraryFileId) || p.push({
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
                        of u) {
                        if (o && "complete" === t.status)
                            for (let n of t.messageIds) {
                                let t = b.get(n);
                                t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, io.j)(t.metadata) && y.push({
                                    messageId: n,
                                    turnId: e,
                                    deletedMemoryCitationUuids: (0, io.c)(t.metadata)
                                })
                            }
                        for (let n of iu(t.items)) {
                            if (s && "mcp-tool-call" === n.type) {
                                let e = (0, ir.b)(n);
                                if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                    let t = (0, ie.d)(e.url);
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
                                for (let e of (0, e$.c)(n.content)) f.has(e.id) || f.set(e.id, {
                                    key: `page:${e.id}`,
                                    kind: "page",
                                    pageId: e.id,
                                    title: null
                                });
                            if ("todo-list" === n.type) {
                                w = n.plan.map((t, n) => ({
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
                    let C = (0, it.b)(u.flatMap(e => {
                        let {
                            turn: t
                        } = e;
                        return iu(t.items).filter(e => "mcp-tool-call" === e.type)
                    })).at(-1);
                    return a = null == C ? [...d.outputs, ...f.values(), ...g.values()] : [{
                        ...C,
                        key: `site:${C.projectId}`,
                        kind: "site"
                    }, ...d.outputs.filter(e => null == C.archivePath || ! function(e, t) {
                        if (null != e.sandboxPath) return e.sandboxPath === t;
                        let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                        return null != n && e.name.toLowerCase() === n
                    }(e, C.archivePath)), ...f.values(), ...g.values()], {
                        automationIds: (0, is.b)(i, r ?? void 0),
                        browserScreenshots: (0, il.d)(i),
                        inputs: p,
                        sourceTurns: y,
                        outputs: a,
                        progressSteps: w,
                        isPlanSummaryUpdating: h && i.slice(x + 1).some(e => "assistant" === e.author.role && is.a.test(e.recipient ?? "") || "tool" === e.author.role && is.a.test(e.author.name ?? "")),
                        planSummaryRefreshKey: `${u.at(-1)?.id??""}:${h}`,
                        sources: o ? [...Array.from(new Map(i.filter(e => "user" === e.author.role).flatMap(e => (0, ia.a)((0, l.e)(e))).map(e => [e.projectId, e])).values(), e => ({
                            kind: "site",
                            key: `site:${e.projectId}`,
                            projectId: e.projectId,
                            label: e.title
                        })), ...m.filter(e => "memory" === e.kind), ...new Map(u.flatMap(e => {
                            let {
                                turn: t
                            } = e;
                            return (t.skillSources ?? []).map(e => [e.key, e])
                        })).values(), ...d.pluginSources, ...m.filter(e => "web" === e.kind && "apps" === e.category), ...m.filter(e => "file-source" === e.kind), ...m.filter(e => "web" === e.kind && "apps" !== e.category)] : [],
                        subagents: (0, ic.a)(i, {
                            isTurnLive: u.at(-1)?.turn.status === "in_progress"
                        })?.subagents ?? []
                    }
                })({
                    automationReferences: G,
                    includePages: E,
                    includeSources: !b,
                    isTurnActive: _ || null != j,
                    ...H(),
                    pendingAttachments: j?.attachments,
                    turns: A
                })) : null, s = b ? n?.() : null, m[3] = b, m[4] = x, m[5] = _, m[6] = E, m[7] = j, m[8] = H, m[9] = A, m[10] = G, m[11] = n, m[12] = s) : (n = m[11], s = m[12]);
                let W = s,
                    q = k || null != W && (W.outputs.length > 0 || W.progressSteps.length > 0 || W.automationIds.length > 0 || W.subagents.length > 0 || !S && W.browserScreenshots.length > 0),
                    U = x && (!b || q),
                    K = U && null == T,
                    V = JSON.stringify([N, null != T]),
                    Q = b ? F.isOpen : void 0,
                    $ = U && "fullscreen" !== T,
                    Y = "number" == typeof T ? T : void 0;
                m[13] !== V || m[14] !== Q || m[15] !== $ || m[16] !== Y ? (i = {
                    contentShiftResetKey: V,
                    controlledIsOpen: Q,
                    isEnabled: $,
                    floatingPanelWidth: Y
                }, m[13] = V, m[14] = Q, m[15] = $, m[16] = Y, m[17] = i) : i = m[17];
                let X = (0, o$.a)(i),
                    J = !b || F.isOpen ? n : null,
                    Z = v.serverConversationId ?? g,
                    ee = !b;
                m[18] !== I || m[19] !== S || m[20] !== Z || m[21] !== ee ? (d = {
                    composerActions: I,
                    conversationId: Z,
                    showSources: ee,
                    shouldBlockExternalEgress: S
                }, m[18] = I, m[19] = S, m[20] = Z, m[21] = ee, m[22] = d) : d = m[22];
                let et = d,
                    en = null == T ? X.contentShift : void 0;
                return m[23] !== F || m[24] !== b || m[25] !== et || m[26] !== B || m[27] !== K || m[28] !== J ? (u = K ? (0, a.jsx)(o7, {
                    ...et,
                    controlledState: b ? {
                        isOpen: F.isOpen,
                        shouldPreventAutoFocus: F.shouldPreventAutoFocus,
                        onOpenChange: e => {
                            B({
                                ...F,
                                isOpen: e,
                                shouldPreventAutoFocus: !e && F.shouldPreventAutoFocus
                            })
                        }
                    } : void 0,
                    readData: J
                }) : null, m[23] = F, m[24] = b, m[25] = et, m[26] = B, m[27] = K, m[28] = J, m[29] = u) : u = m[29], m[30] !== et || m[31] !== K || m[32] !== X || m[33] !== J ? (h = K && null != J ? (0, a.jsx)(o6, {
                    ...et,
                    readData: J,
                    display: X
                }) : null, m[30] = et, m[31] = K, m[32] = X, m[33] = J, m[34] = h) : h = m[34], m[35] !== en || m[36] !== u || m[37] !== h ? (p = {
                    contentShift: en,
                    headerAction: u,
                    panel: h
                }, m[35] = en, m[36] = u, m[37] = h, m[38] = p) : p = m[38], p
            }(tZ);
            if (nD[178] !== rX || nD[179] !== sP || nD[180] !== rF || nD[181] !== rz || nD[182] !== ry?.current_node || nD[183] !== nH || nD[184] !== rU || nD[185] !== rk || nD[186] !== sS || nD[187] !== sA || nD[188] !== sM || nD[189] !== sk || nD[190] !== n$ || nD[191] !== ac || nD[192] !== sq || nD[193] !== aR || nD[194] !== r2 || nD[195] !== rN || nD[196] !== a_ || nD[197] !== rr || nD[198] !== n1 || nD[199] !== rj || nD[200] !== ri || nD[201] !== rM || nD[202] !== rD || nD[203] !== rS || nD[204] !== az || nD[205] !== rt || nD[206] !== sI || nD[207] !== sv || nD[208] !== sy || nD[209] !== sa || nD[210] !== a2 || nD[211] !== ah.get || nD[212] !== a3 || nD[213] !== ec?.current_node || nD[214] !== as || nD[215] !== sD || nD[216] !== sw || nD[217] !== aQ || nD[218] !== rl) {
                let e;
                nD[220] !== rF || nD[221] !== rz || nD[222] !== rk || nD[223] !== rM || nD[224] !== az || nD[225] !== sv || nD[226] !== sy || nD[227] !== sa || nD[228] !== ah.get || nD[229] !== aQ ? (e = sa || null == az || null == sv ? sy : (0, to.a)({
                    ...sv,
                    current_node: az.promptMessageId
                }, {
                    clinicalSearchEnabled: rz,
                    clinicalCitationsEnabled: rF,
                    enableCloudBrowserActivity: rk,
                    streamingOrders: aQ,
                    isWorkConversation: rM,
                    getRenderTelemetry: e => (0, ih.c)(ah.get, e)
                }), nD[220] = rF, nD[221] = rz, nD[222] = rk, nD[223] = rM, nD[224] = az, nD[225] = sv, nD[226] = sy, nD[227] = sa, nD[228] = ah.get, nD[229] = aQ, nD[230] = e) : e = nD[230];
                let t = (0, td.c)({
                    paragen: az,
                    hideInitialUserMessage: n$,
                    browserConversationId: void 0,
                    conversationId: nH,
                    enableCloudBrowserActivity: rk,
                    errorMessage: sS,
                    branchingMessageId: sP,
                    isReadOnly: ac || rN || a_ || null != as,
                    isTemporaryChat: n1,
                    isWorkConversation: rj,
                    onRegenerateResponse: rX || a_ || null != as || ac || rN || rD || rS || ri || rr ? void 0 : sk,
                    onEditUserMessage: rX || null == sI || rj || ac || rN || rD || !rl || rr ? void 0 : sM,
                    onFork: null == sI || n1 || rD || rS || ac || rN ? void 0 : sA,
                    pendingSubmissionAttachments: rt,
                    shareEnabled: null == rU && !n1 && !a_ && !ac && !rN && !r2,
                    readAloudEnabled: !a_ && !rN,
                    feedbackEnabled: !a_ && !rN && null == as,
                    renderedTurns: e,
                    safetyReview: a2,
                    sharedConversationLastMessageId: ec?.current_node ?? a3 ?? (a_ ? ry?.current_node : null),
                    showPendingLoadingMessage: sw,
                    showRequestUserInputStatus: sD && !sq && !aR
                });
                t0 = sa ? (0, oo.a)(t) : t, nD[178] = rX, nD[179] = sP, nD[180] = rF, nD[181] = rz, nD[182] = ry?.current_node, nD[183] = nH, nD[184] = rU, nD[185] = rk, nD[186] = sS, nD[187] = sA, nD[188] = sM, nD[189] = sk, nD[190] = n$, nD[191] = ac, nD[192] = sq, nD[193] = aR, nD[194] = r2, nD[195] = rN, nD[196] = a_, nD[197] = rr, nD[198] = n1, nD[199] = rj, nD[200] = ri, nD[201] = rM, nD[202] = rD, nD[203] = rS, nD[204] = az, nD[205] = rt, nD[206] = sI, nD[207] = sv, nD[208] = sy, nD[209] = sa, nD[210] = a2, nD[211] = ah.get, nD[212] = a3, nD[213] = ec?.current_node, nD[214] = as, nD[215] = sD, nD[216] = sw, nD[217] = aQ, nD[218] = rl, nD[219] = t0
            } else t0 = nD[219];
            let oc = t0,
                od = !aD && !ad && !a_ && !sz && !sL.isHidden && rI?.isFullWidth !== !0;
            nD[231] !== nH || nD[232] !== rU ? (t1 = null == rU ? null : (0, a.jsx)(tz.ChatGptGizmoHeader, {
                conversationId: nH,
                gizmoId: rU
            }), nD[231] = nH, nD[232] = rU, nD[233] = t1) : t1 = nD[233];
            let ou = t1;
            nD[234] !== ac || nD[235] !== a_ || nD[236] !== rj ? (t2 = !rj || a_ || ac ? null : (0, a.jsx)(M.a, {
                hostId: K.a
            }), nD[234] = ac, nD[235] = a_, nD[236] = rj, nD[237] = t2) : t2 = nD[237];
            let oh = t2,
                om = !a_ && null == as && !ac && !n1 && !aY,
                og = (0, o.x)(!!om && s9.c, nH);
            nD[238] !== nH || nD[239] !== og ? (t3 = og ? (0, a.jsx)(s8, {
                conversationId: nH
            }) : null, nD[238] = nH, nD[239] = og, nD[240] = t3) : t3 = nD[240];
            let ov = t3;
            nD[241] !== s7 || nD[242] !== nH || nD[243] !== rB || nD[244] !== sn ? (t4 = null != sn ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: rB,
                children: (0, a.jsx)(ay, {
                    conversationId: nH,
                    placement: "progress",
                    canStartSection: s7
                })
            }) : null, nD[241] = s7, nD[242] = nH, nD[243] = rB, nD[244] = sn, nD[245] = t4) : t4 = nD[245];
            let ox = t4;
            nD[246] !== nH || nD[247] !== aA ? (t5 = {
                conversationId: nH,
                hasHistorySections: aA
            }, nD[246] = nH, nD[247] = aA, nD[248] = t5) : t5 = nD[248];
            let ow = (0, o.x)(!!(st && (0, P.a)({
                    browser: !0
                })) && oi.h, t5),
                oC = null != sn;
            nD[249] !== og || nD[250] !== ow || nD[251] !== oC ? (t6 = function(e) {
                let {
                    hasCourseShortcut: t,
                    hasSectionNavigation: n,
                    hideBrowserTitle: a
                } = e;
                return (0, P.a)({
                    browser: !0
                }) ? !a && !t && !n : !n || !t && am
            }({
                hasCourseShortcut: og,
                hasSectionNavigation: oC,
                hideBrowserTitle: ow
            }), nD[249] = og, nD[250] = ow, nD[251] = oC, nD[252] = t6) : t6 = nD[252];
            let o_ = (0, o.z)(t6),
                oj = !r$ && !ac && !rN,
                oS = !n1 && !a_ && null != aN,
                oP = !o_ && oS,
                oA = oj && (o_ || oP) && null != a4;
            nD[253] !== n1 ? (t7 = !n1 && (0, P.a)({
                browser: !0
            }), nD[253] = n1, nD[254] = t7) : t7 = nD[254];
            let oM = t7,
                ok = (0, o.x)(!!oA && !oS && !a_ && !rM && !!sD && !sq && e8.d, nH),
                oR = oA && (oS || oM || ok);
            nD[255] !== n9 || nD[256] !== rM || nD[257] !== r3 ? (t8 = (0, P.a)({
                browser: !0
            }) && !rM && null != r3 && null == n9, nD[255] = n9, nD[256] = rM, nD[257] = r3, nD[258] = t8) : t8 = nD[258];
            let oN = t8;
            nD[259] !== oR || nD[260] !== oN || nD[261] !== r7 || nD[262] !== rQ || nD[263] !== r3 ? (t9 = oR && null != rQ && !oN ? {
                icon: r7,
                name: r3
            } : void 0, nD[259] = oR, nD[260] = oN, nD[261] = r7, nD[262] = rQ, nD[263] = r3, nD[264] = t9) : t9 = nD[264];
            let oO = t9;
            nD[265] !== oR || nD[266] !== a4 || nD[267] !== oO ? (ne = (0, a.jsx)(al, {
                hasTitleMenu: oR,
                project: oO,
                title: a4
            }), nD[265] = oR, nD[266] = a4, nD[267] = oO, nD[268] = ne) : ne = nD[268];
            let oB = ne;
            nD[269] !== nH || nD[270] !== oB || nD[271] !== r$ || nD[272] !== ow ? (nt = r$ ? (0, a.jsx)(eP.BusinessAgentConversationHeader, {
                conversationId: nH,
                fallback: null
            }) : ow ? null : (0, a.jsx)(a.Fragment, {
                children: oB
            }), nD[269] = nH, nD[270] = oB, nD[271] = r$, nD[272] = ow, nD[273] = nt) : nt = nD[273];
            let oz = nt,
                oG = sj && !a_ && !ac,
                oL = r$ ? null : ou;
            nD[274] !== oN || nD[275] !== r7 || nD[276] !== rQ || nD[277] !== r3 || nD[278] !== oO ? (nn = null != rQ && null == oO ? (0, a.jsx)(ar, {
                projectId: rQ,
                name: r3,
                icon: r7,
                linkToProject: oN
            }) : null, nD[274] = oN, nD[275] = r7, nD[276] = rQ, nD[277] = r3, nD[278] = oO, nD[279] = nn) : nn = nD[279], nD[280] !== n9 || nD[281] !== oL || nD[282] !== nn ? (na = (0, a.jsxs)(a.Fragment, {
                children: [n9, oL, nn]
            }), nD[280] = n9, nD[281] = oL, nD[282] = nn, nD[283] = na) : na = nD[283], nD[284] !== oz || nD[285] !== n1 || nD[286] !== oh || nD[287] !== oG || nD[288] !== na ? (nr = (0, a.jsx)(n3.a, {
                isTemporaryChat: n1,
                isCloudTask: oG,
                leading: na,
                start: oz,
                startActions: oh
            }), nD[284] = oz, nD[285] = n1, nD[286] = oh, nD[287] = oG, nD[288] = na, nD[289] = nr) : nr = nD[289];
            let oD = nr;
            nD[290] !== oD || nD[291] !== ov || nD[292] !== ox ? (ns = null != ov || null != ox ? (0, a.jsx)(ae, {
                header: oD,
                courseShortcut: ov,
                progress: ox
            }) : null, nD[290] = oD, nD[291] = ov, nD[292] = ox, nD[293] = ns) : ns = nD[293];
            let oH = ns;
            if (nD[294] !== aI || nD[295] !== ag?.authMethod || nD[296] !== rX || nD[297] !== at || nD[298] !== rG || nD[299] !== sF || nD[300] !== s7 || nD[301] !== aE || nD[302] !== aG || nD[303] !== rY || nD[304] !== n8 || nD[305] !== ry || nD[306] !== oD || nD[307] !== nH || nD[308] !== r_ || nD[309] !== a5 || nD[310] !== nQ || nD[311] !== sS || nD[312] !== rI?.isFullWidth || nD[313] !== rO || nD[314] !== rq || nD[315] !== rf || nD[316] !== sB || nD[317] !== aL || nD[318] !== r$ || nD[319] !== aP || nD[320] !== oS || nD[321] !== aC || nD[322] !== aM || nD[323] !== oR || nD[324] !== o_ || nD[325] !== oz || nD[326] !== nK || nD[327] !== aS || nD[328] !== ok || nD[329] !== oM || nD[330] !== ac || nD[331] !== sq || nD[332] !== sf || nD[333] !== aR || nD[334] !== ak || nD[335] !== aD || nD[336] !== sO || nD[337] !== r0 || nD[338] !== ad || nD[339] !== r1 || nD[340] !== rp || nD[341] !== rB || nD[342] !== rN || nD[343] !== rA || !1 !== nD[344] || nD[345] !== a_ || nD[346] !== rH || nD[347] !== rs || nD[348] !== rr || nD[349] !== n1 || nD[350] !== rj || nD[351] !== ri || nD[352] !== rM || nD[353] !== rL || nD[354] !== rd || nD[355] !== rD || nD[356] !== rS || nD[357] !== rC || nD[358] !== a4 || nD[359] !== oH || nD[360] !== rT.pathname || nD[361] !== rg || nD[362] !== rE?.sidebarAutomationId || nD[363] !== nZ || nD[364] !== rP || nD[365] !== rJ || nD[366] !== r7 || nD[367] !== rQ || nD[368] !== r3 || nD[369] !== tX || nD[370] !== rV || nD[371] !== sg || nD[372] !== sv || nD[373] !== sy || nD[374] !== n6 || nD[375] !== sa || nD[376] !== sL || nD[377] !== rb || nD[378] !== ah || nD[379] !== nX || nD[380] !== sn || nD[381] !== ox || nD[382] !== aN || nD[383] !== n4 || nD[384] !== av || nD[385] !== rv || nD[386] !== as || nD[387] !== se || nD[388] !== aY || nD[389] !== om || nD[390] !== sD || nD[391] !== au || nD[392] !== oj || nD[393] !== sw || nD[394] !== ol || nD[395] !== aB || nD[396] !== oP || nD[397] !== od || nD[398] !== nY || nD[399] !== oc || nD[400] !== ao) {
                nR = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, n, r, s, o, d, h, p, m, v, y = sy.flatMap(iI).flatMap(iS),
                        b = y.flatMap(ij);
                    if (!a_ && (aI.error instanceof ew.FetchError && 423 === aI.error.status || r1 && null == rg)) {
                        let e;
                        nD[426] !== aI || nD[427] !== nH || nD[428] !== ah ? (e = (0, a.jsx)(oe.a, {
                            onUnlocked: () => {
                                (0, ot.g)(ah.get(ot.f)?.projectId, [nH]), aI.refetch()
                            }
                        }), nD[426] = aI, nD[427] = nH, nD[428] = ah, nD[429] = e) : e = nD[429], nR = e;
                        break e
                    }
                    if (null != se) {
                        let e;
                        nD[430] !== se ? (e = (0, a.jsx)(u.l, {
                            replace: !0,
                            to: se
                        }), nD[430] = se, nD[431] = e) : e = nD[431], nR = e;
                        break e
                    }
                    nl = os,
                    nD[432] !== ry || nD[433] !== aM || nD[434] !== ac || nD[435] !== ak || nD[436] !== ad || nD[437] !== rN || nD[438] !== a_ || nD[439] !== rM ? (nw = rM || a_ || ad || rN || ac || ak || null == ry && !aM ? null : (0, a.jsx)(w.a, {}), nD[432] = ry, nD[433] = aM, nD[434] = ac, nD[435] = ak, nD[436] = ad, nD[437] = rN, nD[438] = a_, nD[439] = rM, nD[440] = nw) : nw = nD[440],
                    nD[441] !== aI || nD[442] !== ry || nD[443] !== aP || nD[444] !== aM || nD[445] !== ak || nD[446] !== ad ? (nC = !1, nD[441] = aI, nD[442] = ry, nD[443] = aP, nD[444] = aM, nD[445] = ak, nD[446] = ad, nD[447] = nC) : nC = nD[447],
                    nD[448] !== aI || nD[449] !== ry || nD[450] !== nH || nD[451] !== aP || nD[452] !== aM || nD[453] !== sf || nD[454] !== ak || !1 !== nD[455] || nD[456] !== sy.length ? (nj = null, nD[448] = aI, nD[449] = ry, nD[450] = nH, nD[451] = aP, nD[452] = aM, nD[453] = sf, nD[454] = ak, nD[455] = !1, nD[456] = sy.length, nD[457] = nj) : nj = nD[457],
                    nI = !a_ && !rN && (0, O.c)() ? (0, a.jsx)(B.c, {
                        callIds: b,
                        hostId: K.a,
                        conversationId: (0, i.Ve)(`chatgpt:${nH}`)
                    }) : null,
                    nD[458] !== a5 || nD[459] !== ad || nD[460] !== av || nD[461] !== ao?.documentTitle ? (nT = ad ? null : (0, a.jsx)(A.a, {
                        title: null == av ? ao?.documentTitle ?? a5 : null
                    }), nD[458] = a5, nD[459] = ad, nD[460] = av, nD[461] = ao?.documentTitle, nD[462] = nT) : nT = nD[462],
                    nD[463] !== nH || nD[464] !== ad || nD[465] !== rB || nD[466] !== a_ || nD[467] !== n1 || nD[468] !== rM || nD[469] !== oc ? (nE = ad || rM ? null : (0, a.jsx)(tq.a, {
                        conversationId: nH,
                        canCopy: !rB,
                        paragenEnabled: !a_,
                        turns: oc,
                        loadHistory: !n1 && !a_
                    }), nD[463] = nH, nD[464] = ad, nD[465] = rB, nD[466] = a_, nD[467] = n1, nD[468] = rM, nD[469] = oc, nD[470] = nE) : nE = nD[470];
                    let x = null != ry || aM;nD[471] !== aP || nD[472] !== rM || nD[473] !== x ? (nP = (0, a.jsx)(eC.a, {
                        isWorkConversation: rM,
                        hasConversationContent: x,
                        hasLoadError: aP
                    }), nD[471] = aP, nD[472] = rM, nD[473] = x, nD[474] = nP) : nP = nD[474],
                    nD[475] !== ry || nD[476] !== nH || nD[477] !== aP || nD[478] !== aM || nD[479] !== ak || nD[480] !== ad || nD[481] !== rT.pathname || nD[482] !== ah || nD[483] !== n4 ? (nA = ad || ak || aP || null == ry && !aM ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(of, {
                            sharedConversationId: n4
                        }), (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(L.a, {
                                onCommit: () => G.a.contentCommitted(ah, nH, n4, rT.pathname),
                                onPaint: () => G.a.contentVisible(ah, nH, n4)
                            }, n4 ?? nH)
                        })]
                    }), nD[475] = ry, nD[476] = nH, nD[477] = aP, nD[478] = aM, nD[479] = ak, nD[480] = ad, nD[481] = rT.pathname, nD[482] = ah, nD[483] = n4, nD[484] = nA) : nA = nD[484],
                    nD[485] !== ag?.authMethod || nD[486] !== sF || nD[487] !== rY || nD[488] !== ry || nD[489] !== oD || nD[490] !== nH || nD[491] !== r_ || nD[492] !== a5 || nD[493] !== rq || nD[494] !== sB || nD[495] !== r$ || nD[496] !== oS || nD[497] !== oR || nD[498] !== o_ || nD[499] !== oz || nD[500] !== ok || nD[501] !== oM || nD[502] !== ac || nD[503] !== sO || nD[504] !== r0 || nD[505] !== ad || nD[506] !== r1 || nD[507] !== a_ || nD[508] !== n1 || nD[509] !== ri || nD[510] !== rM || nD[511] !== a4 || nD[512] !== oH || nD[513] !== rE?.sidebarAutomationId || nD[514] !== rP || nD[515] !== r7 || nD[516] !== rQ || nD[517] !== r3 || nD[518] !== rV || nD[519] !== sv || nD[520] !== sy.length || nD[521] !== ah || nD[522] !== aN || nD[523] !== as || nD[524] !== aY || nD[525] !== om || nD[526] !== oj || nD[527] !== ol.headerAction || nD[528] !== aB || nD[529] !== oP || nD[530] !== ao ? (nM = ad || null != ao ? null : (0, a.jsxs)(n_.a, {
                        chatIcon: null == rQ ? void 0 : r7,
                        header: null != oH ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(a.Fragment, {
                                children: oH
                            }), null]
                        }) : oD,
                        title: a4,
                        fullScreenTitle: o_ || r$ ? oz : null,
                        isArchivedPreview: ac,
                        children: [null, ag?.authMethod === "chatgpt" ? (0, a.jsx)(k.u, {
                            productExperience: rM ? "work" : "chat"
                        }) : null, a_ ? (0, a.jsx)(ob.a, {
                            children: null == rV ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(oI, {
                                    data: rV
                                })
                            })
                        }) : null, om ? (0, a.jsx)(nS, {
                            conversationId: nH,
                            scheduledAutomationId: rP ? rE?.sidebarAutomationId : void 0
                        }, nH) : null, ol.headerAction, n1 && !a_ && !ac && null == rq && null == rY && null == rQ && !r0 && null != sv && (0, l.a)(sv).some(i_) ? (0, a.jsx)(f.a.HeaderAction, {
                            actionId: "chatgpt-conversation-save",
                            align: "end",
                            order: 100,
                            children: (0, a.jsx)(oF, {
                                conversationId: nH
                            })
                        }) : null, oj ? (0, a.jsx)(n3.b, {
                            titleAtEnd: oP,
                            hasTitleMenu: oR,
                            menu: oS ? (0, a.jsx)(n0, {
                                showMenu: oR,
                                conversationId: nH,
                                title: a5,
                                isHandoffPending: sO,
                                isArchived: ry?.is_archived === !0,
                                isChatConversation: null != ry && !rM,
                                onHandoff: sF ? sB : void 0,
                                onOpenMessage: async e => {
                                    aU.current?.signal.aborted === !1 && ah.get(g.b)?.pathname === ah.value.pathname && await aH.current?.scrollToMessage(e)
                                },
                                projectId: rQ,
                                projectName: r3,
                                serverConversationId: aN,
                                conversationOrigin: r_
                            }) : oR && (0, a.jsx)(n2, {
                                title: a5,
                                includePlugins: oM,
                                lockdownConversationId: ok ? nH : null
                            }),
                            children: n1 || a_ || r1 ? null : (0, a.jsx)(tx, {
                                conversationId: nH,
                                projectId: rQ,
                                sharedProjectConversation: as,
                                isReady: (null != aN || null != as) && sy.length > 0 && (aB ?? ry?.current_node) != null,
                                isRestricted: aY || r0,
                                isStreaming: ri
                            })
                        }) : null]
                    }), nD[485] = ag?.authMethod, nD[486] = sF, nD[487] = rY, nD[488] = ry, nD[489] = oD, nD[490] = nH, nD[491] = r_, nD[492] = a5, nD[493] = rq, nD[494] = sB, nD[495] = r$, nD[496] = oS, nD[497] = oR, nD[498] = o_, nD[499] = oz, nD[500] = ok, nD[501] = oM, nD[502] = ac, nD[503] = sO, nD[504] = r0, nD[505] = ad, nD[506] = r1, nD[507] = a_, nD[508] = n1, nD[509] = ri, nD[510] = rM, nD[511] = a4, nD[512] = oH, nD[513] = rE?.sidebarAutomationId, nD[514] = rP, nD[515] = r7, nD[516] = rQ, nD[517] = r3, nD[518] = rV, nD[519] = sv, nD[520] = sy.length, nD[521] = ah, nD[522] = aN, nD[523] = as, nD[524] = aY, nD[525] = om, nD[526] = oj, nD[527] = ol.headerAction, nD[528] = aB, nD[529] = oP, nD[530] = ao, nD[531] = nM) : nM = nD[531],
                    nk = null,
                    ni = tF.a,
                    nm = aG,
                    ng = r_,
                    nf = !au || !sD || sL.isHidden || sq || rX || rB || aR || ac || rN || rH || rD || rS || rs || rr,
                    nv = n1,
                    ny = rQ,
                    nb = null != rY,
                    no = em.c,
                    nc = rO,
                    nD[532] !== ad || nD[533] !== rA || nD[534] !== rM || nD[535] !== ox || nD[536] !== ao ? (nd = ad || null != ao ? ox : rA && (0, eg.a)() && !rM && (0, a.jsx)("div", {
                        className: "h-px",
                        "aria-hidden": !0
                    }), nD[532] = ad, nD[533] = rA, nD[534] = rM, nD[535] = ox, nD[536] = ao, nD[537] = nd) : nd = nD[537],
                    nu = at;
                    let C = null == sn ? "flex h-full min-h-0 flex-col" : "h-full",
                        _ = rb ?? a5,
                        j = aY || rG,
                        S = rI?.isFullWidth === !0;nD[538] !== s7 || nD[539] !== sn ? (e = null == sn ? null : {
                        index: sn.selectedIndex,
                        canStart: s7
                    }, nD[538] = s7, nD[539] = sn, nD[540] = e) : e = nD[540];
                    let T = !rM,
                        E = !rC,
                        P = !sa && ri;nD[541] !== ry?.is_archived || nD[542] !== nH || nD[543] !== ac || nD[544] !== ad || nD[545] !== a_ || nD[546] !== n1 || nD[547] !== ri || nD[548] !== rM ? (t = ad || !rM || a_ || ac || ry?.is_archived === !0 || n1 ? null : (0, a.jsx)(c.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(af, {
                            conversationId: nH,
                            isTurnActive: ri
                        })
                    }), nD[541] = ry?.is_archived, nD[542] = nH, nD[543] = ac, nD[544] = ad, nD[545] = a_, nD[546] = n1, nD[547] = ri, nD[548] = rM, nD[549] = t) : t = nD[549],
                    nD[550] !== nH || nD[551] !== ac || nD[552] !== aN ? (n = ac ? (0, a.jsx)(ed, {
                        conversationId: aN ?? nH,
                        kind: "chatgpt"
                    }, aN ?? nH) : void 0, nD[550] = nH, nD[551] = ac, nD[552] = aN, nD[553] = n) : n = nD[553],
                    nD[554] !== rX || nD[555] !== sF || nD[556] !== sB || nD[557] !== aP || nD[558] !== ak || nD[559] !== sO || nD[560] !== n1 || nD[561] !== rL || nD[562] !== rd || nD[563] !== sy.length ? (r = ak || aP || !(sy.length > 0) || rX || !rL || n1 ? null : (0, a.jsx)(tW, {
                        canConvert: sF,
                        isChatInstantAvailable: !rd,
                        isConverting: sO,
                        onConvert: sB
                    }), nD[554] = rX, nD[555] = sF, nD[556] = sB, nD[557] = aP, nD[558] = ak, nD[559] = sO, nD[560] = n1, nD[561] = rL, nD[562] = rd, nD[563] = sy.length, nD[564] = r) : r = nD[564],
                    nD[565] !== nH || nD[566] !== sS || nD[567] !== sq || nD[568] !== aR || nD[569] !== rj || nD[570] !== sy.length || nD[571] !== sa || nD[572] !== sD || nD[573] !== sw ? (s = 0 === sy.length ? (0, a.jsx)(tu.a, {
                        conversationId: nH,
                        errorMessage: sa ? null : sS,
                        isWorkConversation: rj,
                        showPendingLoadingMessage: !sa && sw,
                        showRequestUserInputStatus: sD && !sq && !aR
                    }) : null, nD[565] = nH, nD[566] = sS, nD[567] = sq, nD[568] = aR, nD[569] = rj, nD[570] = sy.length, nD[571] = sa, nD[572] = sD, nD[573] = sw, nD[574] = s) : s = nD[574],
                    nD[575] !== rX || nD[576] !== nH || nD[577] !== n1 || nD[578] !== sy.length || nD[579] !== rv || nD[580] !== sD ? (o = sD && !rX ? (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(I.BrowserComposerDisclaimer, {
                            supportsMessageDisclosures: !0,
                            conversationId: nH,
                            hasUserMessage: sy.length > 0,
                            isTemporaryChat: n1,
                            regulatedConnectorKindOverride: rv
                        })
                    }) : void 0, nD[575] = rX, nD[576] = nH, nD[577] = n1, nD[578] = sy.length, nD[579] = rv, nD[580] = sD, nD[581] = o) : o = nD[581],
                    nD[582] !== nH || nD[583] !== rf || nD[584] !== sq || nD[585] !== r0 || nD[586] !== rN || nD[587] !== rJ || nD[588] !== rQ || nD[589] !== sD ? (d = sD && !sq ? (0, a.jsx)(op, {
                        conversationId: nH,
                        moreDetailsEnabled: !r0 && (null == rQ || null != rJ),
                        onAddSelectedText: rf.bind(null, rN)
                    }) : null, nD[582] = nH, nD[583] = rf, nD[584] = sq, nD[585] = r0, nD[586] = rN, nD[587] = rJ, nD[588] = rQ, nD[589] = sD, nD[590] = d) : d = nD[590],
                    nD[591] !== rX || nD[592] !== aE || nD[593] !== aG || nD[594] !== nQ || nD[595] !== rI?.isFullWidth || nD[596] !== rq || nD[597] !== aL || nD[598] !== aC || nD[599] !== nK || nD[600] !== sq || nD[601] !== aR || nD[602] !== ad || nD[603] !== rB || nD[604] !== a_ || nD[605] !== n1 || nD[606] !== rj || nD[607] !== rM || nD[608] !== nZ || nD[609] !== tX || nD[610] !== n6 || nD[611] !== sL || nD[612] !== au || nD[613] !== od || nD[614] !== ao ? (h = e => (0, a.jsx)(nx, {
                        conversationId: aG,
                        composerRef: aq,
                        requiredSystemHints: n6,
                        workspace: ao,
                        isInlinePreview: ad,
                        hideModelPicker: nK,
                        showFilePicker: au,
                        disableAutoFocus: nQ,
                        disabled: sq,
                        readOnlyPlaceholder: tX,
                        awaitingGptContinuation: rX,
                        routePresentation: sL,
                        trackReadState: od,
                        trackShownImpressions: !rB && rI?.isFullWidth !== !0,
                        isSharedConversation: a_,
                        isSubmitDisabled: aR,
                        retainLiveModelPicker: aE && !ad && !a_ && !rM && null == rq,
                        showConversationFollowups: !aC && !n1 && !rj && "floating" !== sL.placement,
                        isTemporaryChat: n1,
                        isWorkConversation: rj,
                        placement: e,
                        onSubmitAccepted: e => {
                            nZ?.(e), a_ && aL()
                        }
                    }), nD[591] = rX, nD[592] = aE, nD[593] = aG, nD[594] = nQ, nD[595] = rI?.isFullWidth, nD[596] = rq, nD[597] = aL, nD[598] = aC, nD[599] = nK, nD[600] = sq, nD[601] = aR, nD[602] = ad, nD[603] = rB, nD[604] = a_, nD[605] = n1, nD[606] = rj, nD[607] = rM, nD[608] = nZ, nD[609] = tX, nD[610] = n6, nD[611] = sL, nD[612] = au, nD[613] = od, nD[614] = ao, nD[615] = h) : h = nD[615],
                    nD[616] !== aG || nD[617] !== rY || nD[618] !== n8 || nD[619] !== nH || nD[620] !== aC || nD[621] !== aS || nD[622] !== sq || nD[623] !== aD || nD[624] !== ad || nD[625] !== a_ || nD[626] !== n1 || nD[627] !== rj || nD[628] !== sg || nD[629] !== sL || nD[630] !== nX || nD[631] !== n4 || nD[632] !== sD || nD[633] !== ol.contentShift || nD[634] !== S || nD[635] !== e || nD[636] !== T || nD[637] !== E || nD[638] !== P || nD[639] !== t || nD[640] !== n || nD[641] !== r || nD[642] !== s || nD[643] !== o || nD[644] !== d || nD[645] !== h || nD[646] !== _ || nD[647] !== j || nD[648] !== od || nD[649] !== nY || nD[650] !== oc || nD[651] !== ao ? (p = (0, a.jsx)(sH, {
                        ref: aH,
                        printTitle: _,
                        trackReadState: od,
                        workspace: ao,
                        shouldBlockMcpApps: j,
                        isCoveredByFloatingPanel: S,
                        isFormOnly: aD,
                        isInlinePreview: ad,
                        transcriptPresentation: nY,
                        scrollOrigin: nX,
                        contentX: ol.contentShift,
                        conversationId: nH,
                        composerConversationId: aG,
                        section: e,
                        composerLeadingContent: n8,
                        isChatConversation: T,
                        customGptId: rY,
                        history: aS,
                        entries: oc,
                        renderState: sg,
                        isComposerDisabled: sq,
                        hasSharedHistory: aC,
                        showEmptyState: E,
                        isSharedConversation: a_,
                        isTemporaryChat: n1,
                        isTurnActive: P,
                        isWorkConversation: rj,
                        onboardingPrelude: t,
                        sharedConversationId: n4,
                        showComposer: sD,
                        archivedPreviewFooter: n,
                        routeComposerPresentation: sL,
                        aboveComposerContent: r,
                        emptyThreadStatus: s,
                        disclaimer: o,
                        selectedTextActions: d,
                        renderComposer: h
                    }), nD[616] = aG, nD[617] = rY, nD[618] = n8, nD[619] = nH, nD[620] = aC, nD[621] = aS, nD[622] = sq, nD[623] = aD, nD[624] = ad, nD[625] = a_, nD[626] = n1, nD[627] = rj, nD[628] = sg, nD[629] = sL, nD[630] = nX, nD[631] = n4, nD[632] = sD, nD[633] = ol.contentShift, nD[634] = S, nD[635] = e, nD[636] = T, nD[637] = E, nD[638] = P, nD[639] = t, nD[640] = n, nD[641] = r, nD[642] = s, nD[643] = o, nD[644] = d, nD[645] = h, nD[646] = _, nD[647] = j, nD[648] = od, nD[649] = nY, nD[650] = oc, nD[651] = ao, nD[652] = p) : p = nD[652],
                    nD[653] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, a.jsx)(tB.a, {}), nD[653] = m) : m = nD[653],
                    nD[654] !== ad ? (v = null, nD[654] = ad, nD[655] = v) : v = nD[655],
                    nD[656] !== rB || nD[657] !== ol.panel || nD[658] !== p || nD[659] !== v || nD[660] !== C ? (nh = (0, a.jsxs)("div", {
                        className: C,
                        inert: rB,
                        children: [p, ol.panel, m, v]
                    }), nD[656] = rB, nD[657] = ol.panel, nD[658] = p, nD[659] = v, nD[660] = C, nD[661] = nh) : nh = nD[661],
                    np = !rN && (0, O.c)() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(ig, {
                            conversationId: nH,
                            shouldBlockExternalEgress: aY || rG,
                            widgets: y.filter(iC)
                        }), a_ ? null : (0, a.jsx)(F.a, {
                            blockedWidgetSource: rp ? void 0 : "descriptor",
                            transcriptMcpAppIds: (0, ip.c)(nH, y, rp),
                            shouldBlockExternalEgress: aY || rG
                        })]
                    }) : null
                }
                nD[294] = aI, nD[295] = ag?.authMethod, nD[296] = rX, nD[297] = at, nD[298] = rG, nD[299] = sF, nD[300] = s7, nD[301] = aE, nD[302] = aG, nD[303] = rY, nD[304] = n8, nD[305] = ry, nD[306] = oD, nD[307] = nH, nD[308] = r_, nD[309] = a5, nD[310] = nQ, nD[311] = sS, nD[312] = rI?.isFullWidth, nD[313] = rO, nD[314] = rq, nD[315] = rf, nD[316] = sB, nD[317] = aL, nD[318] = r$, nD[319] = aP, nD[320] = oS, nD[321] = aC, nD[322] = aM, nD[323] = oR, nD[324] = o_, nD[325] = oz, nD[326] = nK, nD[327] = aS, nD[328] = ok, nD[329] = oM, nD[330] = ac, nD[331] = sq, nD[332] = sf, nD[333] = aR, nD[334] = ak, nD[335] = aD, nD[336] = sO, nD[337] = r0, nD[338] = ad, nD[339] = r1, nD[340] = rp, nD[341] = rB, nD[342] = rN, nD[343] = rA, nD[344] = !1, nD[345] = a_, nD[346] = rH, nD[347] = rs, nD[348] = rr, nD[349] = n1, nD[350] = rj, nD[351] = ri, nD[352] = rM, nD[353] = rL, nD[354] = rd, nD[355] = rD, nD[356] = rS, nD[357] = rC, nD[358] = a4, nD[359] = oH, nD[360] = rT.pathname, nD[361] = rg, nD[362] = rE?.sidebarAutomationId, nD[363] = nZ, nD[364] = rP, nD[365] = rJ, nD[366] = r7, nD[367] = rQ, nD[368] = r3, nD[369] = tX, nD[370] = rV, nD[371] = sg, nD[372] = sv, nD[373] = sy, nD[374] = n6, nD[375] = sa, nD[376] = sL, nD[377] = rb, nD[378] = ah, nD[379] = nX, nD[380] = sn, nD[381] = ox, nD[382] = aN, nD[383] = n4, nD[384] = av, nD[385] = rv, nD[386] = as, nD[387] = se, nD[388] = aY, nD[389] = om, nD[390] = sD, nD[391] = au, nD[392] = oj, nD[393] = sw, nD[394] = ol, nD[395] = aB, nD[396] = oP, nD[397] = od, nD[398] = nY, nD[399] = oc, nD[400] = ao, nD[401] = no, nD[402] = ni, nD[403] = nl, nD[404] = nc, nD[405] = nd, nD[406] = nu, nD[407] = nh, nD[408] = np, nD[409] = nm, nD[410] = ng, nD[411] = nf, nD[412] = nv, nD[413] = ny, nD[414] = nb, nD[415] = nw, nD[416] = nC, nD[417] = nj, nD[418] = nI, nD[419] = nT, nD[420] = nE, nD[421] = nP, nD[422] = nA, nD[423] = nM, nD[424] = nk, nD[425] = nR
            } else no = nD[401], ni = nD[402], nl = nD[403], nc = nD[404], nd = nD[405], nu = nD[406], nh = nD[407], np = nD[408], nm = nD[409], ng = nD[410], nf = nD[411], nv = nD[412], ny = nD[413], nb = nD[414], nw = nD[415], nC = nD[416], nj = nD[417], nI = nD[418], nT = nD[419], nE = nD[420], nP = nD[421], nA = nD[422], nM = nD[423], nk = nD[424], nR = nD[425];
            if (nR !== Symbol.for("react.early_return_sentinel")) return nR;
            nD[662] !== no || nD[663] !== nc || nD[664] !== nd || nD[665] !== nu || nD[666] !== nh || nD[667] !== np ? (nN = (0, a.jsxs)(no, {
                floatingPanelWidth: nc,
                header: nd,
                banner: nu,
                children: [nh, np]
            }), nD[662] = no, nD[663] = nc, nD[664] = nd, nD[665] = nu, nD[666] = nh, nD[667] = np, nD[668] = nN) : nN = nD[668], nD[669] !== ni || nD[670] !== nm || nD[671] !== ng || nD[672] !== nf || nD[673] !== nv || nD[674] !== ny || nD[675] !== nb || nD[676] !== nN ? (nO = (0, a.jsx)(ni, {
                conversationId: nm,
                conversationOrigin: ng,
                disabled: nf,
                isTemporaryChat: nv,
                projectId: ny,
                requiresGizmoId: nb,
                children: nN
            }), nD[669] = ni, nD[670] = nm, nD[671] = ng, nD[672] = nf, nD[673] = nv, nD[674] = ny, nD[675] = nb, nD[676] = nN, nD[677] = nO) : nO = nD[677], nD[678] !== nl || nD[679] !== nw || nD[680] !== nC || nD[681] !== nj || nD[682] !== nI || nD[683] !== nT || nD[684] !== nE || nD[685] !== nP || nD[686] !== nA || nD[687] !== nM || nD[688] !== nk || nD[689] !== nO ? (nB = (0, a.jsxs)(nl, {
                children: [nw, nC, nj, nI, nT, nE, nP, nA, nM, nk, nO]
            }), nD[678] = nl, nD[679] = nw, nD[680] = nC, nD[681] = nj, nD[682] = nI, nD[683] = nT, nD[684] = nE, nD[685] = nP, nD[686] = nA, nD[687] = nM, nD[688] = nk, nD[689] = nO, nD[690] = nB) : nB = nD[690];
            let oW = nB,
                oq = !ad && !rj,
                oU = a_ || !aI.isFetchedAfterMount || aI.isFetching || aE ? null : aI.error,
                oZ = aP ? aI.error : null,
                o0 = !rM && !ak;
            return nD[691] !== aW || nD[692] !== aG || nD[693] !== n4 ? (nF = {
                conversationId: aG,
                composer: aW,
                sharedConversationId: n4
            }, nD[691] = aW, nD[692] = aG, nD[693] = n4, nD[694] = nF) : nF = nD[694], nD[695] !== oW || nD[696] !== nF ? (nz = (0, a.jsx)(tr.a, {
                value: nF,
                children: oW
            }), nD[695] = oW, nD[696] = nF, nD[697] = nz) : nz = nD[697], nD[698] !== o0 || nD[699] !== nz ? (nG = (0, a.jsx)(h.a, {
                enabled: o0,
                children: nz
            }), nD[698] = o0, nD[699] = nz, nD[700] = nG) : nG = nD[700], nD[701] !== aT || nD[702] !== sT || nD[703] !== aN || nD[704] !== oU || nD[705] !== oZ || nD[706] !== nG || nD[707] !== oq ? (nL = (0, a.jsx)(_.a, {
                showChatFallback: oq,
                conversationId: aN,
                error: oU,
                loadError: oZ,
                canRetry: aT,
                isWorkConversation: sT,
                children: nG
            }), nD[701] = aT, nD[702] = sT, nD[703] = aN, nD[704] = oU, nD[705] = oZ, nD[706] = nG, nD[707] = oq, nD[708] = nL) : nL = nD[708], nL
        }

        function iC(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function i_(e) {
            return "user" === e.author.role
        }

        function ij(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function iS(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function iI(e) {
            let {
                turn: t
            } = e;
            return t.items
        }
    }),
    Ppno: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("BolX"),
            o = n("zd8w"),
            i = n("hZax"),
            l = n("Ho4C"),
            c = n("KFm7"),
            d = n("lsfk"),
            u = n("SBcL"),
            h = n("bIvi");

        function p(e, t) {
            let n = e.querySelector(`[data-turn-key="${CSS.escape(t)}"]`);
            return n?.querySelector("[data-user-message-bubble]") ?? n
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, g, f, v, y, b, x, w, C, _, j, S, I, T, E, P, A = (0, r.c)(68),
                    {
                        initialPlacementKey: M,
                        isActiveVoiceConversation: k,
                        isLoadingHistory: R,
                        latestUserTurnKey: N,
                        conversationId: O,
                        onResponseSpacerStateChange: B,
                        preserveResponseViewport: F
                    } = e,
                    z = void 0 !== k && k,
                    G = void 0 !== R && R,
                    L = (0, i.i)();
                A[0] !== z || A[1] !== L ? (t = z && (0, i.d)(L, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), A[0] = z, A[1] = L, A[2] = t) : t = A[2];
                let D = t,
                    H = (0, o.useRef)(N),
                    W = (0, s.x)(null == O ? 0 : u.b, O ?? ""),
                    q = (0, o.useRef)(W),
                    U = (0, o.useRef)(G),
                    K = (0, o.useRef)(null),
                    V = (0, o.useRef)(null),
                    Q = (0, d.b)();
                A[3] !== Q ? (n = () => new c.a(Q), A[3] = Q, A[4] = n) : n = A[4];
                let [$] = (0, o.useState)(n), {
                    clear: Y,
                    consumeGrowth: X,
                    getHeightPx: J,
                    ensureScrollRoomForAnchor: Z,
                    place: ee,
                    prepareThreadEndContent: et
                } = $, {
                    addScrollListener: en,
                    getScrollElement: ea,
                    responseSpacerController: er
                } = Q;
                A[5] !== ea || A[6] !== ee || A[7] !== F ? (m = e => {
                    F?.(e => {
                        let t = ea();
                        null != t && ee(p(t, e) ?? void 0)
                    }) || ee(e)
                }, A[5] = ea, A[6] = ee, A[7] = F, A[8] = m) : m = A[8];
                let es = (0, h.a)(m);
                A[9] !== Y || A[10] !== Q ? (g = () => {
                    Y(), Q.scrollToBottom()
                }, A[9] = Y, A[10] = Q, A[11] = g) : g = A[11];
                let eo = (0, h.a)(g);
                A[12] !== eo || A[13] !== W ? (f = () => {
                    q.current !== W && (q.current = W, eo())
                }, v = [W, eo], A[12] = eo, A[13] = W, A[14] = f, A[15] = v) : (f = A[14], v = A[15]), (0, o.useLayoutEffect)(f, v), A[16] !== X || A[17] !== J || A[18] !== et || A[19] !== $.height || A[20] !== $.holdViewport || A[21] !== er || A[22] !== eo ? (y = () => er.register({
                    consumeGrowth: X,
                    getHeightPx: J,
                    holdViewport: $.holdViewport,
                    prepareThreadEndContent: et,
                    scrollToBottom: eo
                }, $.height).dispose, A[16] = X, A[17] = J, A[18] = et, A[19] = $.height, A[20] = $.holdViewport, A[21] = er, A[22] = eo, A[23] = y) : y = A[23], A[24] !== X || A[25] !== J || A[26] !== et || A[27] !== $ || A[28] !== er || A[29] !== eo ? (b = [X, J, et, $, er, eo], A[24] = X, A[25] = J, A[26] = et, A[27] = $, A[28] = er, A[29] = eo, A[30] = b) : b = A[30], (0, o.useInsertionEffect)(y, b), A[31] === Symbol.for("react.memo_cache_sentinel") ? (x = (e, t) => {
                    K.current = {
                        turnKey: e,
                        element: t
                    }, V.current?.(e, t)
                }, A[31] = x) : x = A[31];
                let ei = (0, h.a)(x);
                A[32] === Symbol.for("react.memo_cache_sentinel") ? (w = e => {
                    V.current = e;
                    let t = K.current;
                    return null != t && e(t.turnKey, t.element), () => {
                        V.current = null
                    }
                }, A[32] = w) : w = A[32];
                let el = (0, h.a)(w);
                A[33] !== ea || A[34] !== N || A[35] !== ee || A[36] !== D ? (C = () => {
                    let e = ea();
                    if (null != e && 0 !== e.clientHeight)
                        if (D && null != N) {
                            let t = p(e, N);
                            if (null == t) return;
                            ee(t)
                        } else ee()
                }, A[33] = ea, A[34] = N, A[35] = ee, A[36] = D, A[37] = C) : C = A[37];
                let ec = (0, o.useEffectEvent)(C);
                return A[38] !== Y || A[39] !== X || A[40] !== Z || A[41] !== J || A[42] !== B || A[43] !== ei || A[44] !== es || A[45] !== D ? (_ = () => (B({
                    voiceAutoScrollEnabled: D,
                    clear: Y,
                    consumeGrowth: X,
                    getHeightPx: J,
                    ensureScrollRoomForAnchor: Z,
                    onTurnLayoutReady: ei,
                    place: es
                }), () => {
                    B(null)
                }), j = [Y, X, J, Z, B, ei, es, D], A[38] = Y, A[39] = X, A[40] = Z, A[41] = J, A[42] = B, A[43] = ei, A[44] = es, A[45] = D, A[46] = _, A[47] = j) : (_ = A[46], j = A[47]), (0, o.useLayoutEffect)(_, j), A[48] !== ea || A[49] !== G || A[50] !== N || A[51] !== es || A[52] !== $ || A[53] !== el || A[54] !== D ? (S = () => {
                    let e = H.current,
                        t = U.current;
                    if (H.current = N, U.current = G, D && !G && !t && null != N && N !== e) {
                        var n, a, r, s, o;
                        let e, t, i, l, c;
                        return n = N, a = ea, r = es, s = el, o = $.getPendingPlacementSignal(), t = null, i = null, l = !1, c = () => {
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
                }, I = [ea, G, N, es, el, $, D], A[48] = ea, A[49] = G, A[50] = N, A[51] = es, A[52] = $, A[53] = el, A[54] = D, A[55] = S, A[56] = I) : (S = A[55], I = A[56]), (0, o.useLayoutEffect)(S, I), A[57] !== en || A[58] !== M || A[59] !== ec || A[60] !== $ ? (T = () => {
                    if (null == M) return;
                    let e = $.getPendingPlacementSignal();
                    return en(() => {
                        e.aborted || ec()
                    })
                }, A[57] = en, A[58] = M, A[59] = ec, A[60] = $, A[61] = T) : T = A[61], A[62] !== en || A[63] !== M || A[64] !== $ ? (E = [en, M, $], A[62] = en, A[63] = M, A[64] = $, A[65] = E) : E = A[65], (0, o.useLayoutEffect)(T, E), A[66] !== $ ? (P = (0, a.jsx)(l.a, {
                    controller: $
                }), A[66] = $, A[67] = P) : P = A[67], P
            }
        })
    }),
    TRQ3: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("BolX"),
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
            return null != a ? a : n(p.E, e) || n(l.j, e) || null != n(l.z, e) ? void 0 : null
        });
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, f, v, y, b, x = (0, r.c)(36),
                    {
                        children: w,
                        conversationId: C,
                        routePattern: _,
                        homePath: j
                    } = e,
                    S = void 0 === j ? "/" : j,
                    I = (0, s.y)(i.a),
                    {
                        hash: T,
                        key: E,
                        pathname: P,
                        search: A,
                        state: M
                    } = (0, o.Y)(),
                    {
                        conversationId: k,
                        gizmoId: R
                    } = (0, o.cb)(),
                    N = (0, s.x)(g, C),
                    O = (0, s.x)(p.E, C),
                    B = (0, s.x)(p.S, C),
                    F = O ? B : R;
                x[0] !== F ? (t = null != F && (0, u.a)(F) ? F : null, x[0] = F, x[1] = t) : t = x[1], x[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                    enabled: !1
                }, x[2] = n) : n = x[2];
                let {
                    data: z
                } = (0, s.x)(d.b, t, n);
                x[3] !== F ? (l = null == F || (0, u.a)(F) ? null : F, x[3] = F, x[4] = l) : l = x[4], x[5] === Symbol.for("react.memo_cache_sentinel") ? (f = {
                    enabled: !1
                }, x[5] = f) : f = x[5];
                let {
                    data: G
                } = (0, s.x)(c.b, l, f);
                if (null === N || (0, m.i)(A) && null != N && !O) {
                    let e;
                    return x[6] !== S || x[7] !== A ? (e = (0, a.jsx)(o.l, {
                        replace: !0,
                        to: {
                            pathname: S,
                            search: A
                        }
                    }), x[6] = S, x[7] = A, x[8] = e) : e = x[8], e
                }
                x[9] !== C || x[10] !== G || x[11] !== F || x[12] !== z || x[13] !== N || x[14] !== _ ? (v = null != _ ? (0, o.C)(_, {
                    conversationId: N ?? C
                }) : (0, m.c)(N ?? C, {
                    gizmoId: z?.gizmo.short_url ?? G?.gizmo.short_url ?? F
                }), x[9] = C, x[10] = G, x[11] = F, x[12] = z, x[13] = N, x[14] = _, x[15] = v) : v = x[15];
                let L = v;
                if (x[16] !== C || x[17] !== L || x[18] !== k || x[19] !== T || x[20] !== E || x[21] !== P || x[22] !== N || x[23] !== I || x[24] !== A || x[25] !== M) {
                    let e = new URLSearchParams(A),
                        t = null != N && e.has("mfr"),
                        n = I.get(p.y, C),
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
                    if (null != k && (0, h.e)(k) && null != N) {
                        let e;
                        x[31] !== r ? (e = {
                            ...r,
                            fromChatGptFirstSend: !0
                        }, x[31] = r, x[32] = e) : e = x[32], r = e
                    }
                    y = P !== L || t ? (0, a.jsx)(o.l, {
                        replace: !0,
                        state: "tpp" === n || "flora" === n ? {
                            ...r,
                            workTurnVisit: (0, m.f)(I, E, M?.workTurnVisit)
                        } : r,
                        to: {
                            hash: t ? "" : T,
                            pathname: L,
                            search: t ? e.toString() : A
                        }
                    }) : null, x[16] = C, x[17] = L, x[18] = k, x[19] = T, x[20] = E, x[21] = P, x[22] = N, x[23] = I, x[24] = A, x[25] = M, x[26] = y
                } else y = x[26];
                return x[33] !== w || x[34] !== y ? (b = (0, a.jsxs)(a.Fragment, {
                    children: [y, w]
                }), x[33] = w, x[34] = y, x[35] = b) : b = x[35], b
            }
        })
    }),
    xtkq: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("BolX"),
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
                    m = (0, s.z)(c.e),
                    g = (0, o.useContext)(i.a);
                return h[0] !== p ? (e = () => (p.set(c.f, !0), () => {
                    p.set(c.f, !1), (0, c.a)(p)
                }), t = [p], h[0] = p, h[1] = e, h[2] = t) : (e = h[1], t = h[2]), (0, o.useLayoutEffect)(e, t), h[3] !== g || h[4] !== m ? (n = null == m ? null : (0, a.jsx)(a.Fragment, {
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
            s = n("mBJV"),
            o = n("BolX"),
            i = n("zd8w"),
            l = n("Wf1j"),
            c = n("oyxz"),
            d = n("jqIZ"),
            u = n("Cslg"),
            h = n("kphc"),
            p = n("Sm6l"),
            m = n("bqtn"),
            g = n("Ot7V"),
            f = n("bf6R"),
            v = n("Bbed"),
            y = n("X6Vn"),
            b = n("SGsN"),
            x = n("ANuo"),
            w = n("yGJW"),
            C = n("gBBC"),
            _ = n("OWtl"),
            j = n("hZax"),
            S = n("JYRT"),
            I = n("wwvo"),
            T = n("wrCb"),
            E = n("H7Nt"),
            P = n("vzxm"),
            A = n("jAnS"),
            M = n("wzUW"),
            k = n("Q9Us"),
            R = n("fwYa"),
            N = n("qfGT");
        let O = (0, v.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function B(e) {
            let t, n, v, B, F, z, G, L, D, H, W, q, U, K, V, Q, $, Y, X, J, Z = (0, r.c)(56),
                {
                    gizmo: ee
                } = e,
                et = (0, o.y)(_.a),
                en = (0, l.a)(),
                {
                    search: ea
                } = (0, d.Y)(),
                er = (0, d._)(),
                [es, eo] = (0, i.useState)(!1),
                ei = (0, j.f)("2160578039"),
                el = (0, o.x)(S.a, "2513446768"),
                ec = ei && "gpt" === ee.gizmo.gizmo_type && null != ee.gizmo.migrated_plugin_id;
            Z[0] !== el ? (t = el?.get("disable_gpt_updates", !1), Z[0] = el, Z[1] = t) : t = Z[1];
            let ed = t,
                eu = ee.gizmo.current_user_permission?.can_write && !ec && !ed,
                {
                    data: eh
                } = (0, o.z)(I.c);
            Z[2] !== ee.gizmo.id || Z[3] !== eh ? (n = eh?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === ee.gizmo.id
            }), Z[2] = ee.gizmo.id, Z[3] = eh, Z[4] = n) : n = Z[4];
            let ep = n;
            Z[5] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, T.a)("/gpts/editor"), Z[5] = v) : v = Z[5];
            let em = `${v}/${encodeURIComponent(ee.gizmo.id)}`;
            Z[6] !== ee.gizmo.id || Z[7] !== ee.gizmo.short_url ? (B = ee.gizmo.short_url?.trim() || ee.gizmo.id, Z[6] = ee.gizmo.id, Z[7] = ee.gizmo.short_url, Z[8] = B) : B = Z[8], Z[9] !== B ? (F = (0, P.c)(B), Z[9] = B, Z[10] = F) : F = Z[10], Z[11] !== ea ? (z = (0, A.e)("", (0, A.i)(ea)), Z[11] = ea, Z[12] = z) : z = Z[12];
            let eg = `${F}${z}`;
            Z[13] !== en ? (G = en.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions",
                description: "Accessible label for the compact overflow menu containing actions for the current custom GPT in Codex Desktop"
            }), Z[13] = en, Z[14] = G) : G = Z[14];
            let ef = G;
            Z[15] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, a.jsx)(x.a, {
                className: "icon-sm"
            }), Z[15] = L) : L = Z[15], Z[16] !== ef ? (D = (0, a.jsx)(p.a, {
                "aria-label": ef,
                color: "ghost",
                size: "icon",
                children: L
            }), Z[16] = ef, Z[17] = D) : D = Z[17], Z[18] !== ee.gizmo.gizmo_type || Z[19] !== ee.gizmo.id || Z[20] !== er || Z[21] !== eg || Z[22] !== et ? (H = "gpt" === ee.gizmo.gizmo_type ? (0, a.jsxs)(m.c.Item, {
                href: eg,
                onClick: e => {
                    e.defaultPrevented || ((0, w.a)(et, s.rc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: ee.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), eo(!1), (0, C.c)(et, null), (0, h.m)(et, "chat"), er(eg, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(m.c.ItemIcon, {
                    children: (0, a.jsx)(f.Oh, {})
                }), (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat",
                    description: "Short GPT actions menu label that opens a new conversation with the same custom GPT, rather than switching to general ChatGPT"
                })]
            }) : null, Z[18] = ee.gizmo.gizmo_type, Z[19] = ee.gizmo.id, Z[20] = er, Z[21] = eg, Z[22] = et, Z[23] = H) : H = Z[23], Z[24] !== ee || Z[25] !== et ? (W = () => (0, y.f)(et, O, {
                accountId: et.get(u.f),
                resource: ee
            }), Z[24] = ee, Z[25] = et, Z[26] = W) : W = Z[26], Z[27] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, a.jsx)(m.c.ItemIcon, {
                children: (0, a.jsx)(f.he, {})
            }), U = (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About",
                description: "GPT menu action that opens its details over the current conversation or landing page"
            }), Z[27] = q, Z[28] = U) : (q = Z[27], U = Z[28]), Z[29] !== W ? (K = (0, a.jsxs)(m.c.Item, {
                onSelect: W,
                children: [q, U]
            }), Z[29] = W, Z[30] = K) : K = Z[30];
            let ev = ep ? N.a : R.a;
            return Z[31] !== ee || Z[32] !== en || Z[33] !== ep || Z[34] !== et ? (V = () => {
                (0, I.e)(et, ee, !ep).catch(() => {
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
            }, Z[31] = ee, Z[32] = en, Z[33] = ep, Z[34] = et, Z[35] = V) : V = Z[35], Z[36] !== ep ? (Q = ep ? (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT",
                description: "Compact overflow-menu action that removes the current custom GPT from the user's pinned sidebar items in Codex Desktop"
            }) : (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT",
                description: "Compact overflow-menu action that adds the current custom GPT to the user's pinned sidebar items in Codex Desktop"
            }), Z[36] = ep, Z[37] = Q) : Q = Z[37], Z[38] !== ev || Z[39] !== V || Z[40] !== Q ? ($ = (0, a.jsx)(m.c.Item, {
                leftIconAsset: ev,
                onSelect: V,
                children: Q
            }), Z[38] = ev, Z[39] = V, Z[40] = Q, Z[41] = $) : $ = Z[41], Z[42] !== eu || Z[43] !== em || Z[44] !== ee.gizmo.current_user_permission?.can_view_config ? (Y = eu || ee.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(m.c.Item, {
                href: em,
                leftIconAsset: eu ? k.a : M.a,
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
            }) : null, Z[42] = eu, Z[43] = em, Z[44] = ee.gizmo.current_user_permission?.can_view_config, Z[45] = Y) : Y = Z[45], Z[46] !== ee ? (X = (0, a.jsx)(E.a, {
                resource: ee
            }), Z[46] = ee, Z[47] = X) : X = Z[47], Z[48] !== es || Z[49] !== H || Z[50] !== K || Z[51] !== $ || Z[52] !== Y || Z[53] !== X || Z[54] !== D ? (J = (0, a.jsxs)(m.a, {
                align: "start",
                contentWidth: "menu",
                open: es,
                onOpenChange: eo,
                triggerButton: D,
                children: [H, K, $, Y, X]
            }), Z[48] = es, Z[49] = H, Z[50] = K, Z[51] = $, Z[52] = Y, Z[53] = X, Z[54] = D, Z[55] = J) : J = Z[55], J
        }
        n.d(t, {}, {
            ChatGptGizmoHeader: function(e) {
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
                } = (0, o.x)(I.b, t);
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
        })
    }),
    JlMc: (function(e, t, n) {
        var a = n("QosV"),
            r = n("BolX"),
            s = n("zd8w"),
            o = n("RU3e"),
            i = n("OWtl");
        n("lBzi"), n("XtQP");
        var l = n("dQRk"),
            c = n("UWHW");
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, u, h = (0, a.c)(10),
                    {
                        conversationId: p,
                        isTranscriptVisible: m
                    } = e,
                    g = void 0 === m || m,
                    f = (0, r.y)(i.a),
                    v = (0, s.useId)();
                return h[0] !== p || h[1] !== v || h[2] !== f ? (t = () => (f.set(c.b, e => new Map(e).set(v, p)), f.get(c.a)?.dismissCurrent(), () => {
                    f.set(c.b, e => {
                        let t = new Map(e);
                        return t.delete(v), t
                    })
                }), n = [p, v, f], h[0] = p, h[1] = v, h[2] = f, h[3] = t, h[4] = n) : (t = h[3], n = h[4]), (0, s.useEffect)(t, n), h[5] !== p || h[6] !== g || h[7] !== f ? (d = () => {
                    if (!g) return;
                    let e = f.watch(e => {
                            let {
                                get: t
                            } = e
                        }),
                        t = f.watch(e => {
                            let {
                                get: t
                            } = e, n = !0 === t(o.b);
                            (0, l.bc)(f, p, n)
                        });
                    return () => {
                        e(), t(), (0, l.bc)(f, p, !1)
                    }
                }, u = [p, g, f], h[5] = p, h[6] = g, h[7] = f, h[8] = d, h[9] = u) : (d = h[8], u = h[9]), (0, s.useEffect)(d, u), null
            }
        })
    }),
    fr5e: (function(e, t, n) {
        n.d(t, {
            a: () => B
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iRMi"),
            o = n("D99L"),
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
            b = n("lBzi"),
            x = n("Ga6O"),
            w = n("dQRk"),
            C = n("jfiJ"),
            _ = n("FGJH"),
            j = n("Vcrm"),
            S = n("OCK3"),
            I = n("dhxJ"),
            T = n("lsky"),
            E = n("rKAs"),
            P = n("ASxG"),
            A = n("rn0J"),
            M = n("XpUB"),
            k = n("G6mJ"),
            R = n("VB5Q"),
            N = n("VTN2");
        let O = P.record(P.string(), P.union([P.string(), P.literal(!0)]));

        function B(e) {
            let t, n, P, B, z, G, L = (0, r.c)(28),
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
                $ = void 0 === q ? "conversation" : q,
                Y = void 0 !== U && U,
                X = void 0 === K || K,
                J = void 0 === V || V,
                Z = void 0 === Q ? "fallback" : Q,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            L[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), L[0] = t) : t = L[0], L[1] !== J || L[2] !== D || L[3] !== X || L[4] !== W || L[5] !== Y || L[6] !== $ ? (n = [D, X, J, W, $, Y], L[1] = J, L[2] = D, L[3] = X, L[4] = W, L[5] = Y, L[6] = $, L[7] = n) : n = L[7], (0, c.useEffect)(t, n), L[8] !== J || L[9] !== D || L[10] !== Y || L[11] !== $ || L[12] !== ee || L[13] !== H ? (P = () => {
                let e = ee.get(w.j, D),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(w.y, D);
                if (!J || "tpp" === n || "flora" === n) return null;
                let a = ee.get(w.M, D),
                    r = Y && "conversation" === $ ? ee.get(j.a, D)?.promptMessageId : void 0,
                    s = function(e) {
                        for (let {
                                turn: t
                            }
                            of e.toReversed())
                            for (let e of t.items.toReversed()) {
                                if ("assistant-message" !== e.type) continue;
                                let t = null,
                                    n = 0;
                                if ((0, T.h)((0, M.a)(e.content, E.b), a => {
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
                        threadCurrentNode: r ?? ee.get(w.C, D),
                        conversationOrigin: n,
                        isStreaming: (0, w.Ab)(ee.get(w.$, D)),
                        mode: $,
                        moderationDisclaimersByMessageId: ee.get(w.N, D),
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
                    i = (0, I.a)(a?.[s.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(S.b, o) ?? i?.[String(s.codeBlockIndex)]?.content ?? s.content
                }
            }, L[8] = J, L[9] = D, L[10] = Y, L[11] = $, L[12] = ee, L[13] = H, L[14] = P) : P = L[14];
            let en = (0, y.a)(P);
            L[15] !== ee ? (B = (e, t) => {
                let n = e => {
                    (0, g.a)(ee, o.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: s.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
                    })
                };
                return (0, v.c)(e, void 0, () => {
                    "string" == typeof e ? n(e) : e.then(n, F)
                }).then(e => {
                    e && !t?.aborted && ee.get(m.f).success((0, a.jsx)(d.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard",
                        description: "Success toast after the user copies the last assistant code block using the keyboard shortcut or command menu in Chat mode"
                    }))
                })
            }, L[15] = ee, L[16] = B) : B = L[16];
            let ea = B;
            return L[17] !== D || L[18] !== en || L[19] !== W || L[20] !== Y || L[21] !== $ || L[22] !== ee || L[23] !== ea ? (z = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!W || ee.get(w.B, D) || null == t || ee.get(_.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let r = ee.get(u.a),
                    s = ee.get(w.C, D),
                    o = ee.get(h.e).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(w.C, D) !== s || Y && "conversation" === $ && t(j.a, D)?.promptMessageId !== n || t(h.e).copyLastCodeBlock !== o) && a.abort()
                    });
                ea((async () => {
                    await (0, C.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, L[17] = D, L[18] = en, L[19] = W, L[20] = Y, L[21] = $, L[22] = ee, L[23] = ea, L[24] = z) : z = L[24], L[25] !== X || L[26] !== Z ? (G = {
                enabled: X,
                priority: Z
            }, L[25] = X, L[26] = Z, L[27] = G) : G = L[27], (0, p.a)("copyLastCodeBlock", z, G), null
        }

        function F() {}
    }),
    LEgg: (function(e, t, n) {
        n.d(t, {
            a: () => C
        });
        var a = n("ABep"),
            r = n("QosV");
        n("slpy");
        var s = n("BolX"),
            o = n("Wf1j"),
            i = n("OpyH"),
            l = n("TdH6"),
            c = n("QcW8");
        n("ZU27"), n("TpEm");
        var d = n("gbrq"),
            u = n("fBor"),
            h = n("ipGa"),
            p = n("hV9T"),
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
                    if (null != r) return (0, f.a)(a, (0, p.Ve)(`chatgpt:${r}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, m.useLayoutEffect)(e, t), null
        }
        n("n5iL"), n("q3HK"), n("bf6R");
        var b = n("rBfn"),
            x = n("enMl"),
            w = n("PCEr");

        function C(e) {
            let t, n, s, o, l, c, d = (0, r.c)(17),
                {
                    chatIcon: p,
                    header: m,
                    title: g,
                    fullScreenTitle: f,
                    isArchivedPreview: v,
                    children: y
                } = e;
            return d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(i.a.MainContentLayout, {
                layout: (0, h.a)() ? "default" : "thread-edge-scroll"
            }), d[0] = t) : t = d[0], d[1] !== v ? (n = v ? null : (0, a.jsx)(u.SitePreviewBridge, {}), d[1] = v, d[2] = n) : n = d[2], d[3] !== m ? (s = (0, a.jsx)(i.a.Header, {
                desktopPlacement: "titlebar",
                divider: !1,
                children: m
            }), d[3] = m, d[4] = s) : s = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(i.a.RightPanelOutlet, {
                children: (0, a.jsx)(i.a.RightPanelTabs, {})
            }), d[5] = o) : o = d[5], d[6] !== p || d[7] !== f || d[8] !== m || d[9] !== v || d[10] !== g ? (l = v ? null : (0, a.jsx)(_, {
                chatIcon: p,
                fullScreenTitle: f,
                mainToolbar: m,
                title: g
            }), d[6] = p, d[7] = f, d[8] = m, d[9] = v, d[10] = g, d[11] = l) : l = d[11], d[12] !== y || d[13] !== n || d[14] !== s || d[15] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, s, y, o, l]
            }), d[12] = y, d[13] = n, d[14] = s, d[15] = l, d[16] = c) : c = d[16], c
        }

        function _(e) {
            let t, n, i, u, p, m, f, v = (0, r.c)(16),
                {
                    chatIcon: C,
                    mainToolbar: _,
                    title: j,
                    fullScreenTitle: S
                } = e,
                I = (0, s.y)(g.a);
            return (0, o.a)(), (0, s.z)(d.i), (0, s.z)(c.s), v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(y, {}), v[0] = t, v[1] = n) : (t = v[0], n = v[1]), v[2] !== C || v[3] !== j ? (i = (0, a.jsx)(x.a, {
                title: j,
                icon: C
            }), v[2] = C, v[3] = j, v[4] = i) : i = v[4], v[5] !== S ? (u = (0, a.jsx)("div", {
                className: "max-w-80 min-w-0 truncate empty:hidden focus-within:overflow-visible",
                children: S
            }), v[5] = S, v[6] = u) : u = v[6], v[7] !== _ || v[8] !== u ? (p = (0, a.jsx)(w.a, {
                mainToolbar: _,
                fullScreenChatMenu: u
            }), v[7] = _, v[8] = u, v[9] = p) : p = v[9], v[10] !== I.value.routeKind ? (m = "other" === I.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(b.b, {
                showLauncherButton: !1
            }), v[10] = I.value.routeKind, v[11] = m) : m = v[11], v[12] !== i || v[13] !== p || v[14] !== m ? (f = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i, p, m, null, null]
            }), v[12] = i, v[13] = p, v[14] = m, v[15] = f) : f = v[15], f
        }
    }),
    dLcZ: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV");
        n("slpy"), n("zd8w");
        var s = n("OpyH");
        n("Sm6l"), n("HOLv");
        var o = n("NVRI"),
            i = n("MMlk"),
            l = n("Xoyl");
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, l, c, d, u, h, p, m = (0, r.c)(18);
                m[0] !== e ? ({
                    isTemporaryChat: c,
                    isCloudTask: t,
                    leading: n,
                    startActions: l,
                    ...s
                } = e, m[0] = e, m[1] = t, m[2] = n, m[3] = s, m[4] = l, m[5] = c) : (t = m[1], n = m[2], s = m[3], l = m[4], c = m[5]);
                let g = void 0 !== c && c;
                return m[6] !== n || null !== m[7] ? (d = (0, a.jsxs)(a.Fragment, {
                    children: [n, null]
                }), m[6] = n, m[7] = null, m[8] = d) : d = m[8], m[9] !== g ? (u = g ? (0, a.jsx)(i.b, {
                    isIndicator: !0,
                    isTemporaryChat: !0
                }) : null, m[9] = g, m[10] = u) : u = m[10], m[11] !== l || m[12] !== u ? (h = (0, a.jsxs)(a.Fragment, {
                    children: [l, u]
                }), m[11] = l, m[12] = u, m[13] = h) : h = m[13], m[14] !== s || m[15] !== d || m[16] !== h ? (p = (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(o.a, {
                        ...s,
                        inset: "tab-strip-flush-start",
                        leading: d,
                        startActions: h
                    })
                }), m[14] = s, m[15] = d, m[16] = h, m[17] = p) : p = m[17], p
            },
            b: function(e) {
                let t, n, o, i = (0, r.c)(13),
                    {
                        children: c,
                        menu: d,
                        hasTitleMenu: u,
                        titleAtEnd: h
                    } = e,
                    p = void 0 !== h && h,
                    m = !u && d;
                return i[0] !== u || i[1] !== d || i[2] !== p ? (t = u && !p ? (0, a.jsx)(s.a.HeaderAction, {
                    actionId: "chatgpt-conversation-title-menu",
                    align: "start",
                    slotPosition: "threadTitle",
                    children: d
                }) : null, i[0] = u, i[1] = d, i[2] = p, i[3] = t) : t = i[3], i[4] !== c || i[5] !== u || i[6] !== d || i[7] !== p ? (n = null != c || p ? (0, a.jsx)(s.a.HeaderAction, {
                    actionId: "chatgpt-conversation-actions",
                    allowShrink: p,
                    align: "end",
                    order: 100,
                    children: (0, a.jsxs)("div", {
                        className: "flex min-w-0 items-center gap-toolbar-action",
                        children: [p ? (0, a.jsx)("div", {
                            className: "max-w-16 min-w-0 @xl/main-titlebar:max-w-24 @3xl/main-titlebar:max-w-48 @5xl/main-titlebar:max-w-80",
                            children: u ? d : (0, a.jsx)(l.a, {})
                        }) : null, c]
                    })
                }) : null, i[4] = c, i[5] = u, i[6] = d, i[7] = p, i[8] = n) : n = i[8], i[9] !== m || i[10] !== t || i[11] !== n ? (o = (0, a.jsxs)(a.Fragment, {
                    children: [m, t, n]
                }), i[9] = m, i[10] = t, i[11] = n, i[12] = o) : o = i[12], o
            }
        })
    }),
    Xoyl: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV");
        n.d(t, {}, {
            a: function() {
                let e, t = (0, r.c)(1);
                return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("span", {
                    "aria-busy": "true",
                    className: "flex h-token-button-composer max-w-full items-center px-button-toolbar-inline",
                    children: (0, a.jsx)("span", {
                        "aria-hidden": "true",
                        className: "h-4 w-32 max-w-full rounded bg-text/10"
                    })
                }), t[0] = e) : e = t[0], e
            }
        })
    }),
    WVag: (function(e, t, n) {
        var a = n("LwKP"),
            r = n("BolX"),
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
                } = t, a = n(l.M, e);
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
        var a = n("BolX"),
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
                let a = n(l.M, e),
                    s = n(l.C, e);
                return null == a || null == s ? null : (0, r.b)({
                    mapping: a,
                    current_node: s
                }).findLast(e => "assistant" === e.author.role && !(0, r.n)(e) && "" !== (0, r.e)(e).trim())
            }),
            d = (0, a.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (null == e || n(i.d, "2163293173") && !n(l.J, e)) return null;
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
            s = n("BolX"),
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
            o = n("BolX"),
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
                    gizmoId: s
                } = e,
                i = (0, o.x)(d.d, "2160578039");
            return n[0] !== i || n[1] !== s ? (t = i ? (0, a.jsx)(p, {
                gizmoId: s
            }, s) : null, n[0] = i, n[1] = s, n[2] = t) : t = n[2], t
        }

        function g(e) {
            let t, n, s = (0, r.c)(10),
                {
                    gizmoId: l
                } = e,
                d = (0, o.y)(c.a),
                p = (0, i.Y)(),
                m = (0, i._)(),
                {
                    data: g
                } = (0, o.x)(h.f, l);
            s[0] !== l || s[1] !== p.pathname ? (t = {
                gizmoId: l,
                visitKey: p.pathname
            }, s[0] = l, s[1] = p.pathname, s[2] = t) : t = s[2];
            let f = (0, o.x)(h.c, t);
            return s[3] !== f || s[4] !== l || s[5] !== p.pathname || s[6] !== m || s[7] !== g || s[8] !== d ? (n = f && g?.gizmo.migrated_plugin_id ? (0, a.jsx)(u.a, {
                gptName: g.gizmo.display.name,
                accessState: "error",
                onUsePlugin: () => void m("/plugins"),
                onKeepUsingGpt: () => (0, h.a)(d, {
                    gizmoId: l,
                    visitKey: p.pathname
                })
            }) : null, s[3] = f, s[4] = l, s[5] = p.pathname, s[6] = m, s[7] = g, s[8] = d, s[9] = n) : n = s[9], n
        }
        n.d(t, {}, {
            GptPluginMigrationBanner: m,
            GptPluginMigrationHomeBanner: function(e) {
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
        })
    }),
    tV8b: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Wf1j"),
            o = n("oyxz"),
            i = n("MM0V"),
            l = n("Sm6l"),
            c = n("HOLv"),
            d = n("hZax"),
            u = n("slBk"),
            h = n("CS9C");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, m, g, f, v, y, b, x = (0, r.c)(34),
                    {
                        gptName: w,
                        accessState: C,
                        onUsePlugin: _,
                        onKeepUsingGpt: j,
                        onRetry: S
                    } = e,
                    I = (0, s.a)(),
                    T = (0, d.e)("2513446768");
                x[0] !== T || x[1] !== I ? (t = I.formatDate((0, u.a)(T.get("retirement_date", "")), {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }), x[0] = T, x[1] = I, x[2] = t) : t = x[2];
                let E = t;
                if ("error" === C && null != S) {
                    let e;
                    x[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceRetry",
                        defaultMessage: "Try again",
                        description: "Retry checking access to the migrated plugin"
                    }), x[3] = e) : e = x[3], n = e
                } else if ("admin" === C) {
                    let e;
                    x[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.viewPlugin",
                        defaultMessage: "View Plugin",
                        description: "Button that opens a migrated plugin in workspace admin settings for an administrator who cannot open its ordinary plugin details; does not start a chat"
                    }), x[4] = e) : e = x[4], n = e
                } else if ("allowed" === C || "pending" === C) {
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
                if ("error" === C && null == S) {
                    let e;
                    x[7] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessUnconfirmed",
                        defaultMessage: "We couldn’t check your access to the plugin. You can keep using this GPT until {deadline}.",
                        description: "Fallback when the migration banner cannot load. Access is unknown; the user can explore plugins or continue using the GPT.",
                        values: {
                            deadline: E
                        }
                    }), x[7] = E, x[8] = e) : e = x[8], p = e
                } else if ("error" === C) {
                    let e;
                    x[9] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessError",
                        defaultMessage: "We couldn’t check your access to the plugin. Try again, or keep using this GPT until {deadline}.",
                        description: "Migrated GPT notice after a failed plugin-access check; deadline is the localized retirement date",
                        values: {
                            deadline: E
                        }
                    }), x[9] = E, x[10] = e) : e = x[10], p = e
                } else if ("denied" === C) {
                    let e;
                    x[11] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessDenied",
                        defaultMessage: "This plugin isn’t available to you. You can keep using this GPT until {deadline}.",
                        description: "Migrated GPT notice when the destination plugin is inaccessible; deadline is the localized retirement date",
                        values: {
                            deadline: E
                        }
                    }), x[11] = E, x[12] = e) : e = x[12], p = e
                } else if (w.trim()) {
                    let e;
                    x[13] !== E || x[14] !== w ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceNamedBody",
                        defaultMessage: "{gptName} is now available as a plugin. You can keep using this GPT until {deadline}.",
                        description: "Explains the migrated GPT choice before the composer. gptName is the GPT display name and deadline is a localized month and day.",
                        values: {
                            gptName: w,
                            deadline: E
                        }
                    }), x[13] = E, x[14] = w, x[15] = e) : e = x[15], p = e
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
                }), x[18] = m) : m = x[18], x[19] !== w ? (g = w.trim() ? (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceNamedTitle",
                    defaultMessage: "{gptName} is now a plugin",
                    description: "Title of the migrated GPT chat choice shown before the composer. gptName is the user-provided GPT name.",
                    values: {
                        gptName: w
                    }
                }) : (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceTitle",
                    defaultMessage: "This GPT is now a plugin",
                    description: "Title of the migrated GPT chat choice when the GPT has no display name."
                }), x[19] = w, x[20] = g) : g = x[20];
                let P = "pending" === C,
                    A = "error" === C && null != S ? S : _;
                return x[21] !== n || x[22] !== P || x[23] !== A ? (f = (0, a.jsx)(l.a, {
                    color: "primary",
                    loading: P,
                    size: "dialog",
                    type: "button",
                    onClick: A,
                    children: n
                }), x[21] = n, x[22] = P, x[23] = A, x[24] = f) : f = x[24], x[25] !== j ? (v = null == j ? null : (0, a.jsx)(l.a, {
                    color: "outline",
                    size: "dialog",
                    type: "button",
                    onClick: j,
                    children: (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceKeepUsing",
                        defaultMessage: "Keep using GPT",
                        description: "Reveals the existing GPT chat composer for this visit only, keeping its draft. The choice is shown again when the GPT is reopened."
                    })
                }), x[25] = j, x[26] = v) : v = x[26], x[27] !== f || x[28] !== v ? (y = (0, a.jsxs)("div", {
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
            r = n("BolX"),
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
                } = t, a = u.safeParse(n(l.i, e)?.view);
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
            }),
            g = (0, r.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                return !!n(p, e)?.title
            });
        n.d(t, {}, {
            a: m,
            b: p,
            c: g
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
                } = e, a = n(o.w, t);
                return {
                    pending: (0, o.Ab)(n(o.$, t)),
                    completed: null == a || "completed" === a.result,
                    completionId: n(r.d, "2163293173") ? JSON.stringify([t, a?.requestId, n(o.C, t)]) : void 0,
                    unread: n(o.J, t)
                }
            },
            preview: (e, t) => {
                let {
                    get: n
                } = e, a = n(o.M, t);
                return null == a ? null : (0, i.a)({
                    mapping: a,
                    current_node: n(o.C, t)
                })?.text ?? null
            },
            title: (e, t) => {
                let {
                    get: n
                } = e;
                return n(o.db, t) || null
            },
            dismiss: (e, t) => {
                (0, o.Wb)(e, t, !1), (0, s.b)(e, t).catch(() => {})
            }
        });
        n.d(t, {}, {
            a: l
        })
    }),
    M3Kf: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("BolX"),
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
                    w = (0, s.y)(c.a),
                    C = (0, s.z)(l.b),
                    _ = (0, s.x)(h.j, x),
                    j = (0, s.x)(m.c, _ ?? x),
                    S = (0, u.b)(),
                    I = (0, o.useRef)(null);
                b[0] !== w || b[1] !== _ ? (t = () => {
                    null != _ && (0, p.b)(w, _, i.flushSync)
                }, b[0] = w, b[1] = _, b[2] = t) : t = b[2];
                let T = t;
                b[3] !== x || b[4] !== T || b[5] !== w || b[6] !== _ ? (n = () => {
                    let e = w.get(m.c, _ ?? x);
                    w.get(l.b) || e?.hasError || T()
                }, b[3] = x, b[4] = T, b[5] = w, b[6] = _, b[7] = n) : n = b[7];
                let E = (0, o.useEffectEvent)(n);
                b[8] !== S || b[9] !== C || b[10] !== E ? (f = () => {
                    if (C) return;
                    let e = I.current,
                        t = S.getScrollElement();
                    if (null == e || null == t) return;
                    let n = new IntersectionObserver(e => {
                        e.some(g) && E()
                    }, {
                        root: t,
                        rootMargin: "80px 0px 0px 0px"
                    });
                    return n.observe(e), () => n.disconnect()
                }, b[8] = S, b[9] = C, b[10] = E, b[11] = f) : f = b[11];
                let P = j?.cursor,
                    A = j?.hasError;
                if (b[12] !== S || b[13] !== C || b[14] !== _ || b[15] !== P || b[16] !== A ? (v = [S, C, _, P, A], b[12] = S, b[13] = C, b[14] = _, b[15] = P, b[16] = A, b[17] = v) : v = b[17], (0, o.useEffect)(f, v), null == j || j.complete || null == j.cursor) return null;
                let M = j.hasError ? T : null;
                return b[18] !== M ? (y = (0, a.jsx)(d.a, {
                    ref: I,
                    onRetry: M
                }), b[18] = M, b[19] = y) : y = b[19], y
            }
        })
    }),
    lUUH: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("BolX"),
            o = n("oyxz"),
            i = n("Qgfj"),
            l = n("jqIZ"),
            c = n("bqtn"),
            d = n("bf6R"),
            u = n("SGsN"),
            h = n("svjy"),
            p = n("nlNF"),
            m = n("crAQ"),
            g = n("FR8U"),
            f = n("OWtl"),
            v = n("OtLV"),
            y = n("w7E5"),
            b = n("wVX4"),
            x = n("c5lN"),
            w = n("QmkR"),
            C = n("xEXG"),
            _ = n("KMqT"),
            j = n("J6LI"),
            S = n("FgUr"),
            I = n("WLgA");
        let T = (0, s.u)(f.a, 0);

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
                onCreateProjectDialogCloseAutoFocus: C
            } = e, {
                isWorkConversation: E,
                sourceMemoryBlocked: A
            } = (0, j.c)(n, r), M = A ? v.a.projectOnlyMoveUnavailable : void 0, {
                data: k,
                isPending: R,
                isError: N
            } = s, {
                data: O,
                isPending: B,
                isError: F
            } = o, z = (0, S.a)(O, k, r?.gizmo.id), G = "allowed" === c, L = e => {
                let a = t.get(T) + 1,
                    r = t.get(p.e);
                t.set(T, a), (0, w.S)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(n => {
                    n && t.get(T) === a && t.get(p.e) === r && f((0, I.c)(e.gizmo.id))
                }).catch(() => {
                    t.get(u.f).danger(t.get(h.a).formatMessage(P.moveFailed), {
                        errorAnalytics: {
                            toastId: "move_conversation_to_snorlax_error"
                        }
                    })
                })
            }, D = [];
            for (let e of (G && (D.push({
                    id: "new-chatgpt-project",
                    icon: d.Ag,
                    message: P.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        t.set(T, e => e + 1), (0, x.a)(t, L, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: E,
                            onCloseAutoFocus: C
                        })
                    }
                }), z.length > 0 && D.push({
                    id: "new-project-separator",
                    type: "separator"
                })), z)) {
                let {
                    targetMemoryBlocked: t
                } = (0, j.c)(n, void 0, e), r = t ? (0, _.a)((0, b.c)(e)) : void 0;
                D.push({
                    id: `move-to-project:${e.gizmo.id}`,
                    icon: (0, a.jsx)(g.a, {
                        className: "icon-xs",
                        size: 16,
                        color: e.gizmo.display.theme,
                        fallbackIcon: (0, a.jsx)(d.vd, {}),
                        icon: e.gizmo.display.emoji
                    }),
                    nativeIcon: (0, m.b)(e.gizmo.display.emoji),
                    message: P.projectName,
                    messageValues: {
                        projectName: e.gizmo.display.name
                    },
                    enabled: null == r,
                    tooltipMessage: r,
                    onSelect: () => L(e)
                })
            }
            return l && (N || F) ? D.push({
                id: "retry-project-destinations",
                message: P.destinationsFailed,
                closeOnSelect: !1,
                onSelect: () => {
                    Promise.all([t.query.invalidate(y.a), t.query.invalidate(w.m)])
                }
            }) : l && (R || B) ? D.push({
                id: "loading-project-destinations",
                message: P.loading,
                tooltipMessage: P.reopen,
                enabled: !1
            }) : N || F || R || B || 0 !== z.length || G || D.push({
                id: "no-project-destinations",
                message: P.noDestinations,
                enabled: !1
            }), [...i && D.length > 0 ? [{
                id: "move-to-project",
                icon: d.yd,
                message: P.moveToProject,
                enabled: !A,
                tooltipMessage: M,
                submenu: D
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                icon: d.Dd,
                message: P.removeFromProject,
                enabled: !A,
                tooltipMessage: M,
                onSelect: () => {
                    t.set(T, e => e + 1), (0, w.S)({
                        scope: t,
                        conversationId: n.id,
                        projectId: null
                    }).catch(() => {
                        t.get(u.f).danger(t.get(h.a).formatMessage(P.removeFailed), {
                            errorAnalytics: {
                                toastId: "move_conversation_to_snorlax_error"
                            }
                        })
                    })
                }
            }]]
        }
        let P = (0, i.f)({
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
                    x = (0, s.z)(w.m),
                    _ = (0, C.b)();
                if (i[0] !== d || i[1] !== v || i[2] !== u || i[3] !== x || i[4] !== h || i[5] !== _ || i[6] !== b || i[7] !== g || i[8] !== m) {
                    let e = E({
                            scope: g,
                            conversation: d,
                            project: h,
                            projectListQuery: b,
                            pinnedProjectsQuery: x,
                            showMoveToProject: m,
                            projectCrudStatus: _,
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
                    t = e.map(n), i[0] = d, i[1] = v, i[2] = u, i[3] = x, i[4] = h, i[5] = _, i[6] = b, i[7] = g, i[8] = m, i[9] = t
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
            s = n("OWtl"),
            o = n("dQRk"),
            i = n("b6fw");
        let l = (0, a.d)(s.a, (e, t) => {
            let {
                get: n
            } = t, a = n(i.i, e);
            if (null == a) return null;
            let r = n(o.M, e);
            return null == r ? null : c({
                ...a,
                conversation: {
                    mapping: r,
                    current_node: n(o.C, e),
                    conversation_origin: n(o.y, e),
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
            s = n("BolX"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("OpyH"),
            c = n("EOo5"),
            d = n("Sm6l"),
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
            s = n("BolX"),
            o = n("OpyH"),
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
                f = (0, s.z)(l.m);
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
            o = n("BolX"),
            i = n("hV9T"),
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
                    conversationId: w,
                    draftKey: C,
                    initialPrompt: _,
                    initialPromptKind: j
                } = t, S = void 0 === C ? w : C, I = (0, o.y)(u.a);
                b[2] !== w || b[3] !== S || b[4] !== _ || b[5] !== j || b[6] !== I ? (n = () => s()(() => {
                    let e = null == w ? null : I.get(g.y, w),
                        t = (0, d.e)(_ ?? (null == S ? "" : I.get(p.t, S)), {
                            addInitialContentToHistory: null == _ && null != S,
                            defaultTextKind: j ?? (null == _ && null != S || (0, c.b)(_ ?? "").length > 0 ? "prompt" : "plain"),
                            enableFileMentions: !0,
                            enableRichText: !0,
                            enableSkillMentions: !1,
                            enableSlashCommands: {
                                triggers: ["/"]
                            },
                            plainTextMode: (0, h.b)(I.get, i.wf.composerPlainTextMode),
                            suggestionOptions: {
                                enableInlineSystemHints: "tpp" !== e && "flora" !== e,
                                variant: "tpp" !== e && "flora" !== e ? "chatgpt" : void 0
                            }
                        });
                    return null == _ && null != w && "string" == typeof S && null != (0, m.k)(I, S) && "tpp" !== e && "flora" !== e && (0, p.S)(I, w, t.getChatGptPrompt().systemHints), t
                }), b[2] = w, b[3] = S, b[4] = _, b[5] = j, b[6] = I, b[7] = n) : n = b[7];
                let [T] = (0, l.useState)(n);
                b[8] !== T || b[9] !== x ? (r = x ?? T(), b[8] = T, b[9] = x, b[10] = r) : r = b[10];
                let E = r,
                    P = (0, l.useRef)(null);
                b[11] !== E || b[12] !== S || b[13] !== I ? (f = () => {
                    if (null == S) return;
                    let e = I.get(p.t, S);
                    return null != P.current && P.current !== e && E.restoreDraft(e), () => {
                        P.current = I.get(p.t, S)
                    }
                }, v = [E, S, I], b[11] = E, b[12] = S, b[13] = I, b[14] = f, b[15] = v) : (f = b[14], v = b[15]), (0, l.useLayoutEffect)(f, v), b[16] !== E || b[17] !== x ? (y = () => {
                    null != x || E.view.isDestroyed || E.destroy()
                }, b[16] = E, b[17] = x, b[18] = y) : y = b[18];
                let A = y;
                return (0, d.f)(A, E), E
            }
        })
    }),
    Yrvy: (function(e, t, n) {
        var a = n("QosV"),
            r = n("xSOA"),
            s = n("BolX"),
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
    JjB1: (function(e, t, n) {
        var a = n("on57");
        let r = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif',
            s = (0, a.b)("text-default min-h-0 w-full p-0 leading-normal !font-sans", "[&_.ProseMirror]:w-full", "[&_.ProseMirror]:!text-default", "[&_.ProseMirror]:!font-sans", "[&_.ProseMirror]:px-0", "[&_.ProseMirror]:py-0", "[&_.ProseMirror]:!leading-6", "[&_.ProseMirror_p]:!font-sans", "[&_.ProseMirror_p]:!leading-6", "[&_.ProseMirror_p_*]:!font-sans", "[&_.ProseMirror_span]:!font-sans", "!min-h-0 text-base", "[&_.ProseMirror]:min-h-6");
        n.d(t, {}, {
            a: "absolute inset-x-0 bottom-0 flex h-12 items-center ps-2 pe-3 origin-bottom-left transition-[opacity,transform] duration-basic ease-out motion-reduce:transition-none",
            b: s,
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
            s = n("on57"),
            o = n("JjB1");

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
                b = "default" === y && "bg-surface-elevated-secondary shadow-md",
                x = void 0 !== c && c ? "transition-none" : "transition-[height,width,opacity]";
            return v[7] !== n || v[8] !== b || v[9] !== x ? (u = (0, s.b)("surface-AyYLmv", "pointer-events-auto isolate rounded-[22px] ease-enter-snappy motion-reduce:transition-none", b, x, n), v[7] = n, v[8] = b, v[9] = x, v[10] = u) : u = v[10], v[11] !== l ? (h = {
                ...o.d,
                ...l
            }, v[11] = l, v[12] = h) : h = v[12], v[13] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, s.b)("content-Sj8_aX", "overflow-hidden rounded-[inherit] bg-inherit"), v[13] = p) : p = v[13], v[14] !== t ? (m = (0, a.jsx)("div", {
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
            s = n("zd8w"),
            o = n("oyxz"),
            i = n("YwjY"),
            l = n("Sm6l"),
            c = n("UIU6"),
            d = n("Bbed"),
            u = n("RNul"),
            h = n("hV9T"),
            p = n("T1PX");

        function m(e) {
            let t, n, o, i, l, c, d = (0, r.c)(13),
                {
                    children: u,
                    source: m
                } = e,
                g = (0, s.useRef)(null),
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
                                s = e.offsetHeight / a.height,
                                o = (m.left - a.left) * r,
                                i = (m.top - a.top) * s,
                                l = (a.right - m.right) * r,
                                c = (a.bottom - m.bottom) * s;
                            e.style.setProperty("--entry-inset", `${i}px ${l}px ${c}px ${o}px`), e.style.setProperty("--entry-transform", `translate(${o}px, ${i}px) scale(${m.width/a.width}, ${m.height/a.height})`), e.dataset.phase = "source", n = t.requestAnimationFrame(() => {
                                e.dataset.phase = "open"
                            })
                        })
                    });
                return a.observe(e), () => {
                    a.disconnect(), t.cancelAnimationFrame(n), delete e.dataset.phase, e.style.removeProperty("--entry-inset"), e.style.removeProperty("--entry-transform")
                }
            }, n = [f, m], d[0] = f, d[1] = m, d[2] = t, d[3] = n) : (t = d[2], n = d[3]), (0, s.useLayoutEffect)(t, n);
            let v = f ? "entry-yS3y1e" : void 0;
            return d[4] === Symbol.for("react.memo_cache_sentinel") ? (o = {
                position: "relative",
                maxWidth: "100%",
                width: h.T
            }, d[4] = o) : o = d[4], d[5] !== f ? (i = f ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "surface-Iou1vs pointer-events-none absolute inset-0 rounded-[22px] bg-surface-elevated-secondary shadow-md outline-1 outline-border"
            }) : null, d[5] = f, d[6] = i) : i = d[6], d[7] !== u ? (l = (0, a.jsx)("div", {
                className: "content-ARLCcU",
                children: u
            }), d[7] = u, d[8] = l) : l = d[8], d[9] !== v || d[10] !== i || d[11] !== l ? (c = (0, a.jsxs)("div", {
                ref: g,
                "data-selection-annotation-entry": "",
                className: v,
                style: o,
                children: [i, l]
            }), d[9] = v, d[10] = i, d[11] = l, d[12] = c) : c = d[12], c
        }
        let g = (0, d.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(775172), n.e(633848), n.e(146143), n.e(761937)]).then(n.bind(n, "FQ1K"))).SelectedTextAnnotationEditor, {
            suspendToParent: !0,
            errorFallback: e => (0, a.jsx)(v, {
                failed: !0,
                onClose: e.onCancel
            })
        });

        function f(e) {
            let t, n, o, i, l, d, u, h, p = (0, r.c)(18);
            p[0] !== e ? ({
                entryRect: t,
                ...n
            } = e, p[0] = e, p[1] = t, p[2] = n) : (t = p[1], n = p[2]), p[3] !== n.onCancel ? (o = (0, a.jsx)(v, {
                failed: !0,
                onClose: n.onCancel
            }), p[3] = n.onCancel, p[4] = o) : o = p[4], p[5] !== n.onCancel ? (i = (0, a.jsx)(v, {
                onClose: n.onCancel
            }), p[5] = n.onCancel, p[6] = i) : i = p[6], p[7] !== n ? (l = (0, a.jsx)(g, {
                ...n
            }), p[7] = n, p[8] = l) : l = p[8], p[9] !== i || p[10] !== l ? (d = (0, a.jsx)(s.Suspense, {
                fallback: i,
                children: l
            }), p[9] = i, p[10] = l, p[11] = d) : d = p[11], p[12] !== o || p[13] !== d ? (u = (0, a.jsx)(c.a, {
                name: "ResponseTextAnnotationEditor",
                fallback: o,
                children: d
            }), p[12] = o, p[13] = d, p[14] = u) : u = p[14];
            let f = u;
            return p[15] !== f || p[16] !== t ? (h = null == t ? f : (0, a.jsx)(m, {
                source: t,
                children: f
            }), p[15] = f, p[16] = t, p[17] = h) : h = p[17], h
        }

        function v(e) {
            let t, n, s, c, d = (0, r.c)(9),
                {
                    failed: h,
                    onClose: p
                } = e,
                m = void 0 !== h && h,
                g = m ? "alert" : "status";
            return d[0] !== m ? (t = m ? (0, a.jsx)(o.a, {
                id: "responseTextAnnotationMarkers.editor.loadError",
                defaultMessage: "Couldn't load the editor. Reload to try again",
                description: "Error inside the response annotation editor when its code fails to download after retrying. Reloading the app allows another attempt."
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(u.a, {}), (0, a.jsx)(o.a, {
                    id: "responseTextAnnotationMarkers.editor.loading",
                    defaultMessage: "Loading editor…",
                    description: "Loading status inside the editor for a comment on selected response text"
                })]
            }), d[0] = m, d[1] = t) : t = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(o.a, {
                id: "responseTextAnnotationMarkers.editor.close",
                defaultMessage: "Close",
                description: "Button that dismisses a loading or unavailable response annotation editor while preserving the annotation"
            }), d[2] = n) : n = d[2], d[3] !== p ? (s = (0, a.jsx)(l.a, {
                color: "secondary",
                onClick: p,
                children: n
            }), d[3] = p, d[4] = s) : s = d[4], d[5] !== g || d[6] !== t || d[7] !== s ? (c = (0, a.jsxs)(i.a, {
                className: "flex flex-col items-center justify-center gap-3 p-4 text-center text-sm text-secondary select-none",
                role: g,
                children: [t, s]
            }), d[5] = g, d[6] = t, d[7] = s, d[8] = c) : c = d[8], c
        }
        f.prefetch = () => g.prefetch()
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
            s = n("BolX"),
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
                [w] = (0, o.useState)(p);
            return f[0] !== b || f[1] !== w || f[2] !== x || f[3] !== v ? (t = () => {
                if (i.a?.windowTitle == null) return;
                let e = {
                    owner: w,
                    title: null == v ? void 0 : b ?? null
                };
                x.set(u, t => t.some(e => e.owner === w) ? t.map(t => t.owner === w ? e : t) : [...t, e]), g(x)
            }, n = [x, w, v, b], f[0] = b, f[1] = w, f[2] = x, f[3] = v, f[4] = t, f[5] = n) : (t = f[4], n = f[5]), (0, o.useEffect)(t, n), f[6] !== w || f[7] !== x ? (a = () => () => {
                i.a?.windowTitle != null && (x.set(u, e => e.filter(e => e.owner !== w)), g(x))
            }, c = [x, w], f[6] = w, f[7] = x, f[8] = a, f[9] = c) : (a = f[8], c = f[9]), (0, o.useEffect)(a, c), f[10] !== v ? (d = () => {
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
            let t = e.get(u).findLast(e => void 0 !== e.title);
            i.a.windowTitle?.setTitle(t?.title ?? null)
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
    nUGc: (function(e, t, n) {
        let a = (0, n("zd8w").createContext)(null);
        n.d(t, {}, {
            a: a
        })
    }),
    FW69: (function(e, t, n) {
        var a = n("xprp");
        n.d(t, {
            a: () => a.a
        })
    }),
    w5yV: (function(e, t, n) {
        var a = n("FW69"),
            r = n("ajVv");
        let s = new Set(["auto", "clip", "hidden", "overlay", "scroll"]);

        function o(e) {
            let {
                range: t,
                element: n,
                target: a,
                bottomBoundaryTop: r
            } = e, s = c(n, r);
            if (null == s) return null;
            let o = function(e, t, n, a) {
                let r = Array.from(e.getClientRects()),
                    s = t.getBoundingClientRect(),
                    o = d(r, a);
                if (null != o && (r.length > 1 || null != u(o, s))) return o;
                let i = e.getBoundingClientRect(),
                    l = u(i, a);
                return null != l && null != u(l, s) ? l : r.some(e => e.width > 0 && e.height > 0) || i.width > 0 && i.height > 0 ? null : d(Array.from(t.getClientRects()), a) ?? u(s, a) ?? d(Array.from(n.getClientRects()), a) ?? u(n.getBoundingClientRect(), a)
            }(t, n, a, s);
            return null == o ? null : {
                rect: o,
                bounds: s
            }
        }

        function i(e, t, n) {
            let a = l(e),
                r = a?.closest(n);
            if (a instanceof HTMLElement && r instanceof HTMLElement) return {
                element: a,
                target: r
            };
            if (!(e instanceof Element)) return null;
            for (let a of [e.childNodes[t], e.childNodes[t - 1]]) {
                let e = l(a),
                    t = e?.closest(n);
                if (e instanceof HTMLElement && t instanceof HTMLElement) return {
                    element: e,
                    target: t
                }
            }
            return null
        }

        function l(e) {
            return e instanceof Element ? e : e?.parentElement ?? null
        }

        function c(e, t) {
            let n = {
                    bottom: null == t ? window.innerHeight : Math.min(window.innerHeight, t),
                    left: 0,
                    right: window.innerWidth,
                    top: 0
                },
                a = e;
            for (; null != a && a !== document.body && a !== document.documentElement;) {
                let e = window.getComputedStyle(a),
                    t = (e.overflowX || e.overflow).split(/\s+/).some(e => s.has(e)),
                    r = (e.overflowY || e.overflow).split(/\s+/).some(e => s.has(e));
                if (t || r) {
                    let e = a.getBoundingClientRect();
                    if ((n = {
                            bottom: r ? Math.min(n.bottom, e.bottom) : n.bottom,
                            left: t ? Math.max(n.left, e.left) : n.left,
                            right: t ? Math.min(n.right, e.right) : n.right,
                            top: r ? Math.max(n.top, e.top) : n.top
                        }).right <= n.left || n.bottom <= n.top) return null
                }
                a = a.parentElement
            }
            return n.bottom <= n.top ? null : n
        }

        function d(e, t) {
            for (let n of e) {
                let e = u(n, t);
                if (null != e) return e
            }
            return null
        }

        function u(e, t) {
            let n = Math.max(e.left, t.left),
                a = Math.max(e.top, t.top),
                r = Math.min(e.right, t.right),
                s = Math.min(e.bottom, t.bottom);
            return n >= r || a >= s ? null : new DOMRect(n, a, r - n, s - a)
        }
        n.d(t, {}, {
            a: c,
            b: o,
            c: function(e) {
                let {
                    bottomBoundarySelector: t,
                    portalTarget: n,
                    targetContainer: s,
                    targetSelector: c,
                    windowZoom: d
                } = e, u = window.getSelection();
                if (null == u || 0 === u.rangeCount || u.isCollapsed) return null;
                let h = function(e, t, n) {
                    var a, r;
                    let s, o, l = i(e.anchorNode, e.anchorOffset, n),
                        c = i(e.focusNode, e.focusOffset, n);
                    if (null != l && null != c && l.target !== c.target) return null;
                    let d = l ?? c;
                    return null == d || null != d.element.closest('[contenteditable="true"]') ? null : {
                        ...d,
                        range: (a = t, r = d.target, (s = document.createRange()).selectNodeContents(r), o = a.cloneRange(), (!r.contains(o.startContainer) || 0 > o.compareBoundaryPoints(Range.START_TO_START, s)) && o.setStart(s.startContainer, s.startOffset), (!r.contains(o.endContainer) || o.compareBoundaryPoints(Range.END_TO_END, s) > 0) && o.setEnd(s.endContainer, s.endOffset), o)
                    }
                }(u, u.getRangeAt(0), c);
                if (null == h || null != s && !s.contains(h.target)) return null;
                let p = (0, a.a)(h.range)?.trim() ?? h.range.toString().trim();
                if (0 === p.length) return null;
                let m = null == t ? null : s?.querySelector(t),
                    g = m instanceof HTMLElement ? m.getBoundingClientRect().top : void 0,
                    f = o({
                        ...h,
                        bottomBoundaryTop: g
                    });
                if (null == f) return null;
                let {
                    rect: v
                } = f, y = n?.contains(h.target) === !0 ? n : void 0, b = y?.getBoundingClientRect(), x = null == b ? {
                    left: 0,
                    right: window.innerWidth
                } : {
                    left: -b.left / d,
                    right: (window.innerWidth - b.left) / d
                }, w = null == b ? v : new DOMRect((v.left - b.left) / d, (v.top - b.top) / d, v.width / d, v.height / d), C = l(h.range.startContainer) ?? h.element;
                return {
                    direction: "rtl" === window.getComputedStyle(C).direction ? "rtl" : "ltr",
                    portalTarget: y,
                    rect: w,
                    selectionRange: h.range.cloneRange(),
                    selectedText: p,
                    target: h.target,
                    targetId: h.target.getAttribute(r.a),
                    viewportHorizontalBounds: x
                }
            },
            d: function(e, t) {
                return null != e && null != t && e.direction === t.direction && e.portalTarget === t.portalTarget && e.selectedText === t.selectedText && e.selectionRange.startContainer === t.selectionRange.startContainer && e.selectionRange.startOffset === t.selectionRange.startOffset && e.selectionRange.endContainer === t.selectionRange.endContainer && e.selectionRange.endOffset === t.selectionRange.endOffset && e.target === t.target && e.targetId === t.targetId && e.viewportHorizontalBounds.left === t.viewportHorizontalBounds.left && e.viewportHorizontalBounds.right === t.viewportHorizontalBounds.right && e.rect.left === t.rect.left && e.rect.top === t.rect.top && e.rect.width === t.rect.width && e.rect.height === t.rect.height
            }
        })
    }),
    NqfB: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("on57"),
            o = n("zd8w"),
            i = n("wD9O"),
            l = n("i7gm"),
            c = n("bIvi"),
            d = n("w5yV"),
            u = n("ajVv");

        function h(e) {
            return null != e
        }

        function p(e) {
            return e.current
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, g, f, v, y, b, x, w = (0, r.c)(40),
                    {
                        align: C,
                        bottomBoundarySelector: _,
                        children: j,
                        className: S,
                        onOpen: I,
                        portalTargetSelector: T,
                        targetContainer: E,
                        targetContainerRefs: P,
                        targetSelector: A
                    } = e,
                    M = void 0 === A ? u.b : A,
                    k = (0, i.c)(),
                    R = (0, o.useRef)(null),
                    N = (0, o.useRef)(!1),
                    O = (0, o.useRef)(null),
                    B = (0, o.useRef)(null),
                    [F, z] = (0, o.useState)(null);
                w[0] !== I ? (t = e => {
                    I?.(e)
                }, w[0] = I, w[1] = t) : t = w[1];
                let G = (0, o.useEffectEvent)(t);
                w[2] !== F || w[3] !== k ? (n = () => {
                    let e = O.current?.getBoundingClientRect();
                    if (null == F || null == e) return;
                    let t = F.portalTarget?.getBoundingClientRect(),
                        n = null == t ? 1 : k;
                    return {
                        point: {
                            x: e.left + e.width / 2,
                            y: e.bottom
                        },
                        width: e.width,
                        selectionRect: {
                            x: F.rect.left * n + (t?.left ?? 0),
                            y: F.rect.top * n + (t?.top ?? 0),
                            width: F.rect.width * n,
                            height: F.rect.height * n
                        },
                        windowZoom: k
                    }
                }, w[2] = F, w[3] = k, w[4] = n) : n = w[4];
                let L = (0, c.a)(n);
                if (w[5] !== _ || w[6] !== G || w[7] !== T || w[8] !== E || w[9] !== P || w[10] !== M || w[11] !== k ? (m = () => {
                        let e = null,
                            t = () => {
                                null != R.current && (window.cancelAnimationFrame(R.current), R.current = null)
                            },
                            n = () => {
                                t();
                                let e = window.getSelection();
                                null == B.current && (null == e || 0 === e.rangeCount || e.isCollapsed) || (R.current = window.requestAnimationFrame(() => {
                                    R.current = null;
                                    let e = null != E || null == P ? [E] : P.map(p).filter(h),
                                        t = null;
                                    for (let n of e)
                                        if (null != (t = (0, d.c)({
                                                bottomBoundarySelector: _,
                                                portalTarget: null == T ? void 0 : n?.querySelector(T) ?? void 0,
                                                targetContainer: n,
                                                targetSelector: M,
                                                windowZoom: k
                                            }))) break;
                                    (0, d.d)(B.current, t) || (null == B.current && null != t && G(t), B.current = t, z(t))
                                }))
                            },
                            a = () => {
                                let e = window.getSelection();
                                N.current || null == e || 0 === e.rangeCount || e.isCollapsed || n()
                            },
                            r = t => {
                                let r = window.getSelection(),
                                    s = B.current?.portalTarget;
                                if (!N.current && null != r && 0 !== r.rangeCount && !r.isCollapsed) {
                                    if (null != s && s.contains(r.getRangeAt(0).commonAncestorContainer)) {
                                        let n = t.target;
                                        if (!(n instanceof Node && s.contains(n))) return void(null != e && window.clearTimeout(e), e = window.setTimeout(() => {
                                            e = null, a()
                                        }, 100));
                                        if (!r.getRangeAt(0).intersectsNode(n)) return
                                    }
                                    n()
                                }
                            },
                            s = e => {
                                let n = e.target;
                                n instanceof Node && O.current?.contains(n) || (N.current = !0, t(), B.current = null, z(null))
                            },
                            o = () => {
                                N.current = !1, n()
                            },
                            i = () => {
                                if (N.current) {
                                    t(), B.current = null, z(null);
                                    return
                                }
                                n()
                            };
                        return n(), document.addEventListener("selectionchange", i), window.addEventListener("dblclick", n), window.addEventListener("keyup", n), window.addEventListener("pointerdown", s), window.addEventListener("pointerup", o), window.addEventListener("pointercancel", o), window.addEventListener("resize", a), window.addEventListener("scroll", r, !0), () => {
                            null != e && window.clearTimeout(e), t(), document.removeEventListener("selectionchange", i), window.removeEventListener("dblclick", n), window.removeEventListener("keyup", n), window.removeEventListener("pointerdown", s), window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o), window.removeEventListener("resize", a), window.removeEventListener("scroll", r, !0)
                        }
                    }, w[5] = _, w[6] = G, w[7] = T, w[8] = E, w[9] = P, w[10] = M, w[11] = k, w[12] = m) : m = w[12], w[13] !== _ || w[14] !== T || w[15] !== E || w[16] !== P || w[17] !== M || w[18] !== k ? (g = [_, T, E, P, M, k], w[13] = _, w[14] = T, w[15] = E, w[16] = P, w[17] = M, w[18] = k, w[19] = g) : g = w[19], (0, o.useEffect)(m, g), null == F) return null;
                let D = .5;
                "start" === (void 0 === C ? "center" : C) && (D = +("rtl" === F.direction));
                let H = F.rect.left + F.rect.width * D,
                    W = F.viewportHorizontalBounds.left + 8 - H,
                    q = F.viewportHorizontalBounds.right - 8 - H,
                    U = F.portalTarget ?? document.body,
                    K = null == F.portalTarget ? "fixed z-50" : "absolute z-[1]";
                w[20] !== S || w[21] !== K ? (f = (0, s.b)("pointer-events-none w-max", K, S), w[20] = S, w[21] = K, w[22] = f) : f = w[22];
                let V = F.viewportHorizontalBounds.right - F.viewportHorizontalBounds.left - 16,
                    Q = F.rect.top - 8,
                    $ = `translateX(clamp(${W}px, ${-100*D}%, calc(${q}px - 100%))) translateY(-100%)`;
                return w[23] !== H || w[24] !== V || w[25] !== Q || w[26] !== $ ? (v = {
                    left: H,
                    maxWidth: V,
                    top: Q,
                    transform: $
                }, w[23] = H, w[24] = V, w[25] = Q, w[26] = $, w[27] = v) : v = w[27], w[28] !== j || w[29] !== L || w[30] !== F || w[31] !== k ? (y = null == F.portalTarget && 1 !== k ? (0, a.jsx)("div", {
                    style: {
                        zoom: k
                    },
                    children: j(F, L)
                }) : j(F, L), w[28] = j, w[29] = L, w[30] = F, w[31] = k, w[32] = y) : y = w[32], w[33] !== v || w[34] !== y || w[35] !== f ? (b = (0, a.jsx)("div", {
                    ref: O,
                    className: f,
                    style: v,
                    children: y
                }), w[33] = v, w[34] = y, w[35] = f, w[36] = b) : b = w[36], w[37] !== b || w[38] !== U ? (x = (0, a.jsx)(l.a, {
                    container: U,
                    children: b
                }), w[37] = b, w[38] = U, w[39] = x) : x = w[39], x
            }
        })
    }),
    JEFL: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("zd8w"),
            o = n("Wf1j"),
            i = n("oyxz"),
            l = n("iqo5"),
            c = n("Sm6l"),
            d = n("jqmc"),
            u = n("UxN3"),
            h = n("O3CG"),
            p = n("mN6P"),
            m = n("zD54");
        n.d(t, {}, {
            a: function(e) {
                let t, n, g, f, v, y, b = (0, r.c)(56),
                    {
                        conversationTerminology: x,
                        onAddSelectedText: w,
                        onStartFileAnnotation: C,
                        onDismissFileAnnotation: _,
                        onCommentSelectedText: j,
                        onEditModeChange: S,
                        onEditSelectedText: I,
                        onMoreDetails: T,
                        onOpenSideChat: E,
                        resume: P,
                        selectedText: A
                    } = e,
                    M = void 0 === x ? "task" : x,
                    k = (0, o.a)(),
                    [R, N] = (0, s.useState)(P?.mode === "edit" ? P.instruction : ""),
                    [O, B] = (0, s.useState)(P?.mode ?? "actions"),
                    [F, z] = (0, s.useState)(null);
                if (null != F) {
                    let e, t, n;
                    return b[0] !== _ ? (e = () => _?.(!1), t = () => _?.(!0), b[0] = _, b[1] = e, b[2] = t) : (e = b[1], t = b[2]), b[3] !== F.rect || b[4] !== F.submit || b[5] !== e || b[6] !== t ? (n = (0, a.jsx)(l.a, {
                        entryRect: F.rect,
                        onCancel: e,
                        onEscape: t,
                        onSubmit: F.submit
                    }), b[3] = F.rect, b[4] = F.submit, b[5] = e, b[6] = t, b[7] = n) : n = b[7], n
                }
                if ("pending" === O) return null;
                if ("edit" === O && null != I) {
                    let e, t, n, r, s, o, i, l, d, p;
                    return b[8] !== S ? (e = e => {
                        e.stopPropagation(), "Escape" === e.key && (e.preventDefault(), S?.(!1), B("actions-focused"))
                    }, b[8] = S, b[9] = e) : e = b[9], b[10] !== R || b[11] !== S || b[12] !== I ? (t = e => {
                        e.preventDefault(), 0 !== R.trim().length && (B("pending"), I(R).then(e => {
                            "retry" === e && (S?.(!1), B("actions-focused"))
                        }))
                    }, b[10] = R, b[11] = S, b[12] = I, b[13] = t) : t = b[13], b[14] !== k ? (n = k.formatMessage({
                        id: "selectedTextOverlay.editInput",
                        defaultMessage: "Edit instruction",
                        description: "Accessible label for an instruction that edits selected text"
                    }), b[14] = k, b[15] = n) : n = b[15], b[16] !== k ? (r = k.formatMessage({
                        id: "selectedTextOverlay.editPlaceholder",
                        defaultMessage: "Describe the edit…",
                        description: "Placeholder for an instruction that edits selected text"
                    }), b[16] = k, b[17] = r) : r = b[17], b[18] === Symbol.for("react.memo_cache_sentinel") ? (s = e => {
                        N(e.target.value)
                    }, b[18] = s) : s = b[18], b[19] !== R || b[20] !== n || b[21] !== r ? (o = (0, a.jsx)("input", {
                        "aria-label": n,
                        autoComplete: "off",
                        autoFocus: !0,
                        className: "min-w-0 flex-1 bg-transparent text-sm text-default outline-none placeholder:text-codex-description",
                        placeholder: r,
                        required: !0,
                        value: R,
                        onChange: s
                    }), b[19] = R, b[20] = n, b[21] = r, b[22] = o) : o = b[22], b[23] !== k ? (i = k.formatMessage({
                        id: "selectedTextOverlay.editSubmit",
                        defaultMessage: "Submit edit instruction",
                        description: "Accessible label for submitting an instruction to edit selected text"
                    }), b[23] = k, b[24] = i) : i = b[24], b[25] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(u.a, {
                        "aria-hidden": !0,
                        asset16: m.a,
                        legacyIcon: h.a,
                        legacyClassName: "icon-2xs"
                    }), b[25] = l) : l = b[25], b[26] !== i ? (d = (0, a.jsx)(c.a, {
                        "aria-label": i,
                        color: "primary",
                        size: "composerSm",
                        type: "submit",
                        uniform: !0,
                        children: l
                    }), b[26] = i, b[27] = d) : d = b[27], b[28] !== d || b[29] !== e || b[30] !== t || b[31] !== o ? (p = (0, a.jsxs)("form", {
                        className: "pointer-events-auto flex w-[27rem] max-w-full items-center gap-1.5 rounded-full border border-default bg-surface p-1 ps-3.5 font-sans shadow-lg",
                        onKeyDown: e,
                        onSubmit: t,
                        children: [o, d]
                    }), b[28] = d, b[29] = e, b[30] = t, b[31] = o, b[32] = p) : p = b[32], p
                }
                return b[33] !== M || b[34] !== w || b[35] !== C || b[36] !== A ? (t = null != w || null != C ? (0, a.jsx)(d.b, {
                    onClick: e => {
                        null != C ? z({
                            rect: (e.currentTarget.parentElement ?? e.currentTarget).getBoundingClientRect(),
                            submit: C()
                        }) : (window.getSelection()?.removeAllRanges(), w?.(A))
                    },
                    children: "chat" === M ? (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.addToChat",
                        defaultMessage: "Ask ChatGPT",
                        description: "Button label for adding currently selected text from an overlay anchored to that selection to a ChatGPT chat"
                    }) : (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.addToCodex",
                        defaultMessage: "Add to chat",
                        description: "Button label for adding currently selected text from an overlay anchored to that selection to the chat"
                    })
                }) : null, b[33] = M, b[34] = w, b[35] = C, b[36] = A, b[37] = t) : t = b[37], b[38] !== T || b[39] !== A ? (n = null != T ? (0, a.jsx)(d.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), T(A)
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.moreDetails",
                        defaultMessage: "More details",
                        description: "Button label for asking for more details about the currently selected text"
                    })
                }) : null, b[38] = T, b[39] = A, b[40] = n) : n = b[40], b[41] !== E || b[42] !== A ? (g = null != E ? (0, a.jsx)(d.b, {
                    onClick: e => {
                        window.getSelection()?.removeAllRanges(), E(A, (0, p.b)(e))
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.askInSideChat",
                        defaultMessage: "Ask in side chat",
                        description: "Button label for asking about currently selected text in a side chat"
                    })
                }) : null, b[41] = E, b[42] = A, b[43] = g) : g = b[43], b[44] !== j ? (f = null != j ? (0, a.jsx)(d.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), j()
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.comment",
                        defaultMessage: "Comment",
                        description: "Button label for commenting on the currently selected text"
                    })
                }) : null, b[44] = j, b[45] = f) : f = b[45], b[46] !== O || b[47] !== S || b[48] !== I ? (v = null != I ? (0, a.jsx)(d.b, {
                    autoFocus: "actions-focused" === O,
                    onClick: () => {
                        S?.(!0), B("edit")
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.edit",
                        defaultMessage: "Edit",
                        description: "Button label for editing currently selected text with a model"
                    })
                }) : null, b[46] = O, b[47] = S, b[48] = I, b[49] = v) : v = b[49], b[50] !== t || b[51] !== n || b[52] !== g || b[53] !== f || b[54] !== v ? (y = (0, a.jsxs)(d.a, {
                    children: [t, n, g, f, v]
                }), b[50] = t, b[51] = n, b[52] = g, b[53] = f, b[54] = v, b[55] = y) : y = b[55], y
            }
        })
    })
};