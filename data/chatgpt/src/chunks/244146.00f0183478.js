export const __rspack_esm_ids = [244146];
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
            S = n("udGC"),
            j = n("aTcy"),
            I = n("JNtf"),
            T = n("mUDD"),
            E = n("Ot7V"),
            P = n("SGsN"),
            A = n("DAA7"),
            M = n("yGJW"),
            k = n("GDNt");

        function R(e) {
            let t, n, l, c, d, u, p, v, y, k, R, B, F, z, G, L, D, H, W, q, K, U, V = (0, r.c)(70),
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
                (0, M.a)(Z, g.rd, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: Q.account.account_user_role ?? void 0,
                    hasPaidSubscription: ei
                })
            }, V[5] = Q.account.account_user_role, V[6] = l, V[7] = ei, V[8] = Z, V[9] = c) : c = V[9];
            let ed = c;
            V[10] !== X ? (d = () => {
                X(), (0, E.f)({
                    href: new URL("/codex/cloud", j.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, V[10] = X, V[11] = d) : d = V[11];
            let eu = d;
            V[12] !== Q.account.subscription_seat_pools_enabled || V[13] !== $ || V[14] !== eu || V[15] !== el || V[16] !== et || V[17] !== ee || V[18] !== es || V[19] !== ed || V[20] !== X || V[21] !== J || V[22] !== en || V[23] !== Z || V[24] !== Y ? (u = async () => {
                if ("requesting" !== en) {
                    if (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), es && !el) {
                        let e = new URL("/admin/members", j.h);
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
                            (0, S.e)(Z), await (0, x.g)("accounts-check"), await Promise.all([Z.query.invalidate(w.b, $), Z.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), er.current && X()
                        } else {
                            if ((0, b.b)(Z, $), await _.Request.safePost("/accounts/{account_id}/invites/request", {
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
            }, V[33] = eh, V[34] = k) : k = V[34], V[35] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, a.jsx)(I.d, {
                className: "heading-lg font-semibold",
                children: ep
            }), V[35] = R) : R = V[35], V[36] !== em ? (B = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [R, (0, a.jsx)(I.c, {
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
            }), V[60] = B, V[61] = H, V[62] = W, V[63] = q) : q = V[63], V[64] !== q || V[65] !== k ? (K = (0, a.jsx)(T.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: k,
                children: q
            }), V[64] = q, V[65] = k, V[66] = K) : K = V[66], V[67] !== K || V[68] !== y ? (U = (0, a.jsx)(I.a, {
                open: !0,
                size: "wide",
                variant: "chatgpt",
                onOpenChange: y,
                children: K
            }), V[67] = K, V[68] = y, V[69] = U) : U = V[69], U
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
            S = n("Bbed"),
            j = n("T1PX");
        let I = (0, S.a)(async () => {
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
                s = (0, j.a)();
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
            let t, n, s, o, i, l, c, d, u, m, g, w, C, _, S, j, I, E = (0, r.c)(29),
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
            }, E[6] = R, E[7] = o) : o = E[7], E[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(T, {}), E[8] = i) : i = E[8], E[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(v.d, {
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
                children: [l, (0, a.jsx)(v.c, {
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
            }), E[18] = _) : _ = E[18], E[19] !== C ? (S = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [w, C, _]
                })]
            }), E[19] = C, E[20] = S) : S = E[20], E[21] !== S || E[22] !== o ? (j = (0, a.jsx)(y.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: o,
                children: S
            }), E[21] = S, E[22] = o, E[23] = j) : j = E[23], E[24] !== O || E[25] !== j || E[26] !== n || E[27] !== s ? (I = (0, a.jsx)(v.a, {
                open: O,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: s,
                children: j
            }), E[24] = O, E[25] = j, E[26] = n, E[27] = s, E[28] = I) : I = E[28], I
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
    KvJW: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("BolX"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("WQca"),
            c = n("IxgT"),
            d = n("yGJW"),
            u = n("OWtl"),
            h = n("eShZ"),
            p = n("ZhoB");
        let m = new WeakSet;

        function g(e) {
            let t, n, a = (0, r.c)(5),
                {
                    error: s,
                    onShown: i
                } = e,
                l = (0, o.useEffectEvent)(i);
            return a[0] !== s || a[1] !== l ? (t = () => {
                if (null != s) {
                    if ((0, h.d)(s)) {
                        if (m.has(s)) return;
                        m.add(s)
                    }
                    l()
                }
            }, a[0] = s, a[1] = l, a[2] = t) : t = a[2], a[3] !== s ? (n = [s], a[3] = s, a[4] = n) : n = a[4], (0, o.useEffect)(t, n), null
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, m, f, v, y, b, x = (0, r.c)(24),
                    {
                        conversationId: w,
                        error: C,
                        loadError: _,
                        canRetry: S,
                        isWorkConversation: j,
                        showChatFallback: I,
                        children: T
                    } = e,
                    E = (0, s.y)(u.a),
                    P = (0, s.z)(void 0 !== I && I && !1 === j ? c.b : null);
                if (null != P) return P;
                x[0] !== w || x[1] !== j || x[2] !== E ? (t = (e, t) => {
                    (0, p.e)(E.get(d.c).logProductEvent, {
                        conversationId: w,
                        error: e,
                        isWorkConversation: j,
                        canRetry: t
                    })
                }, x[0] = w, x[1] = j, x[2] = E, x[3] = t) : t = x[3];
                let A = t;
                x[4] !== S || x[5] !== _ || x[6] !== A ? (n = () => A(_, S), x[4] = S, x[5] = _, x[6] = A, x[7] = n) : n = x[7], x[8] !== _ || x[9] !== n ? (o = (0, a.jsx)(g, {
                    error: _,
                    onShown: n
                }), x[8] = _, x[9] = n, x[10] = o) : o = x[10], x[11] !== T || x[12] !== o ? (m = (0, a.jsxs)(a.Fragment, {
                    children: [o, T]
                }), x[11] = T, x[12] = o, x[13] = m) : m = x[13];
                let M = m;
                return x[14] !== C ? (f = C instanceof h.FetchError && !(0, h.d)(C) && (403 === C.status || 404 === C.status), x[14] = C, x[15] = f) : f = x[15], x[16] !== C || x[17] !== A ? (v = () => A(C, !1), x[16] = C, x[17] = A, x[18] = v) : v = x[18], x[19] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, a.jsx)(i.a, {
                    id: "chatgptConversations.conversationInaccessible",
                    defaultMessage: "You don’t have access to this conversation. Make sure you’re logged in to the right account, or ask the conversation owner to send you a share link.",
                    description: "Info toast shown when a user opens a ChatGPT conversation that does not exist or that they cannot access. The user is returned to Home and can switch accounts or ask the owner for a share link."
                }), x[19] = y) : y = x[19], x[20] !== M || x[21] !== f || x[22] !== v ? (b = (0, a.jsxs)(a.Fragment, {
                    children: [null, (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(l.a, {
                            isUnavailable: f,
                            homePath: "/",
                            onUnavailable: v,
                            message: y,
                            children: M
                        })
                    })]
                }), x[20] = M, x[21] = f, x[22] = v, x[23] = b) : b = x[23], b
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
                let s = b(e, t);
                if (null == s || !(0, u.b)(s, e.get(a.h), e.get(a.g), e.get(v.g, s.conversation_id))) {
                    if (null != n) throw Error("Chat is unavailable for renaming.");
                    return
                }
                let o = e.get(p.E, t) ? e.get(p.db, t) : s.title,
                    l = (0, m.a)(s.context_scopes) ? s.gizmo_id : void 0,
                    c = t => (0, v.R)({
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
    kGGU: (function(e, t, n) {
        n.d(t, {
            a: () => ie,
            ChatGptConversationPage: () => o9
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("FS1B"),
            o = n("T0Rc"),
            i = n("on57"),
            l = n("IPUh"),
            c = n("HVBu"),
            d = n.n(c),
            u = n("BolX"),
            h = n("DNHP"),
            p = n("AuIy"),
            m = n("iqEK"),
            g = n("NRIv"),
            f = n("zd8w"),
            v = n("v7qY"),
            y = n("Wf1j"),
            b = n("oyxz"),
            x = n("jqIZ"),
            w = n("bn59"),
            C = n("OY84"),
            _ = n("Yxds"),
            S = n("StMt"),
            j = n("E8Sp"),
            I = n("z0li"),
            T = n("OpyH"),
            E = n("ZU27"),
            P = n("Pyg2"),
            A = n("ZIh4"),
            M = n("O0M0"),
            k = n("Cslg"),
            R = n("OFP1"),
            N = n("ItIk"),
            O = (n("AZW7"), n("jov5")),
            B = n("dQRk"),
            F = n("tSEg"),
            z = n("Ro2M"),
            G = n("bN4H"),
            L = n("TS05");

        function D(e) {
            let t, n, s, o, i = (0, r.c)(12),
                {
                    conversationId: l,
                    entries: c,
                    turnListApi: d
                } = e,
                {
                    key: h,
                    search: p,
                    state: m
                } = (0, x.Y)();
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "automations.cloud.scheduled-tasks"
            }, i[0] = t) : t = i[0];
            let {
                isCapable: g
            } = (0, u.x)(S.a, t);
            if (i[1] !== g || i[2] !== m?.sidebarArea || i[3] !== p) {
                let e = new URLSearchParams(p);
                n = e.get("automationId"), s = m?.sidebarArea === "scheduled" || !g || !n || "finalAgentTurnStart" !== e.get("messageId"), i[1] = g, i[2] = m?.sidebarArea, i[3] = p, i[4] = n, i[5] = s
            } else n = i[4], s = i[5];
            return s ? null : (i[6] !== n || i[7] !== l || i[8] !== c || i[9] !== h || i[10] !== d ? (o = (0, a.jsx)(H, {
                automationId: n,
                conversationId: l,
                entries: c,
                turnListApi: d
            }, h), i[6] = n, i[7] = l, i[8] = c, i[9] = h, i[10] = d, i[11] = o) : o = i[11], o)
        }

        function H(e) {
            let t, n, a, s, o = (0, r.c)(25),
                {
                    automationId: i,
                    conversationId: l,
                    entries: c,
                    turnListApi: d
                } = e,
                h = (0, u.y)(F.a),
                p = (0, x.Y)(),
                m = (0, u.z)(k.f),
                g = (0, u.x)(B.j, l),
                {
                    data: v
                } = (0, u.x)(z.e, i),
                y = (0, u.z)(O.a),
                b = (0, f.useRef)(null),
                w = (0, f.useRef)(null);
            o[0] !== c ? (t = c.findLast(K), o[0] = c, o[1] = t) : t = o[1];
            let C = t;
            o[2] !== m || o[3] !== i || o[4] !== y || o[5] !== C || o[6] !== v || o[7] !== p || o[8] !== h || o[9] !== d ? (n = () => {
                null == v || null == m || (y || b.current === m || (b.current = m, (0, G.openAutomationSidePanelTab)({
                    scope: h,
                    automationId: i,
                    title: v.automation.title
                })), null != d && null != C && w.current !== m && (w.current = m, d.scrollToKey(C.turnKey, W, {
                    align: "top"
                }).then(() => {
                    h.set(L.a, {
                        locationKey: p.key,
                        accountId: m
                    }, !0)
                })))
            }, o[2] = m, o[3] = i, o[4] = y, o[5] = C, o[6] = v, o[7] = p, o[8] = h, o[9] = d, o[10] = n) : n = o[10];
            let _ = (0, f.useEffectEvent)(n);
            o[11] !== m || o[12] !== l || o[13] !== v?.automation.conversation_id || o[14] !== _ || o[15] !== g ? (a = () => {
                null != m && v?.automation.conversation_id === (g ?? l) && _()
            }, o[11] = m, o[12] = l, o[13] = v?.automation.conversation_id, o[14] = _, o[15] = g, o[16] = a) : a = o[16];
            let S = C?.turnKey,
                j = v?.automation.conversation_id;
            return o[17] !== m || o[18] !== y || o[19] !== l || o[20] !== g || o[21] !== S || o[22] !== j || o[23] !== d ? (s = [m, l, S, j, g, y, d], o[17] = m, o[18] = y, o[19] = l, o[20] = g, o[21] = S, o[22] = j, o[23] = d, o[24] = s) : s = o[24], (0, f.useEffect)(a, s), null
        }

        function W(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: q
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function q(e) {
            return e instanceof HTMLElement && e.getClientRects().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }

        function K(e) {
            let {
                turn: t
            } = e;
            return t.items.some(U)
        }

        function U(e) {
            return "user-message" !== e.type
        }
        var V = n("uxPT"),
            Q = n("nKJ6"),
            $ = n("GMTh"),
            Y = n("zpMv"),
            X = n("PFzG"),
            J = n("KvJW"),
            Z = n("TDcV"),
            ee = n("Xvoy"),
            et = n("SGsN"),
            en = n("WAdu"),
            ea = n("OWtl"),
            er = n("hZax"),
            es = n("VnEZ");
        let eo = {
            $type: "protobuf_analytics_events.v1.ChatgptConversationPrintLifecycle"
        };
        var ei = n("jDEJ"),
            el = n("yGJW");
        let ec = (0, u.u)(ea.a, null);

        function ed(e, t) {
            if (!e.get(el.c).isChatgptBrowserReplacement || t.repeat || ((0, ei.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(ec)) return;
            let n = eh("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(ec, n), ep(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function eu(e, t, n, a) {
            let r = e.get(ec);
            if (!e.get(el.c).isChatgptBrowserReplacement || null == r) return a();
            let s = n => {
                ep(e, r, n, t)
            };
            s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(ec)?.id !== r.id || e.get(ec)?.printing || e.set(ec, null), a
            }
        }

        function eh(e) {
            let t = performance.now();
            return {
                id: crypto.randomUUID(),
                entryPoint: e,
                startedAt: t,
                printing: !1
            }
        }

        function ep(e, t, n, a) {
            (0, el.a)(e, eo, {
                attemptId: t.id,
                stage: n,
                entryPoint: t.entryPoint,
                elapsedMs: Math.max(0, performance.now() - t.startedAt),
                preparation: a
            })
        }
        var em = n("CpsU"),
            eg = n.n(em),
            ef = n("rKAs"),
            ev = n("SqqO"),
            ey = n("zHp1"),
            eb = n("rvFo"),
            ex = n("taWv");

        function ew() {
            return Object.fromEntries(Array.from(document.images).flatMap(e => {
                if (!e.complete || 0 === e.naturalWidth) return [];
                let t = e.currentSrc || e.src;
                return [e.getAttribute("src"), e.src, t].flatMap(e => e ? [
                    [e, t]
                ] : [])
            }))
        }
        var eC = n("rxj0"),
            e_ = n("gsAl"),
            eS = n("AO3k"),
            ej = n("aS84"),
            eI = n("Qtjq"),
            eT = "printDocument-v_w5Ax";
        let eE = "https://chatgpt.com/download/?utm_source=chatgpt_web&utm_medium=print&utm_campaign=app_install";

        function eP(e) {
            let t, n, s, o, l, c, d, u, h, p, m, g, f = (0, r.c)(22),
                {
                    children: v,
                    title: x
                } = e,
                w = (0, y.a)(),
                {
                    getExperiment: C
                } = (0, er.j)();
            if (!C("448755449").get("enabled", !1)) {
                let e, t;
                return f[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.b)(eT, "hidden w-full space-y-1.5 bg-surface text-default print:block"), f[0] = e) : e = f[0], f[1] !== v ? (t = (0, a.jsx)("div", {
                    className: e,
                    "data-conversation-print": "",
                    "data-theme": "light",
                    children: v
                }), f[1] = v, f[2] = t) : t = f[2], t
            }
            return f[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.b)(eT, "formattedPrintDocument-tP74Wl", "group/conversation-print hidden w-full bg-surface text-default print:block"), f[3] = t) : t = f[3], f[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(ej.a, {
                className: "h-6 w-auto shrink-0"
            }), f[4] = n) : n = f[4], f[5] !== x ? (s = (0, a.jsxs)("header", {
                className: "mb-6 flex items-center justify-between gap-6",
                children: [n, (0, a.jsx)("p", {
                    className: "min-w-0 text-end text-sm wrap-anywhere text-secondary",
                    children: x
                })]
            }), f[5] = x, f[6] = s) : s = f[6], f[7] !== v ? (o = (0, a.jsx)("div", {
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
                children: (0, a.jsx)(b.a, {
                    id: "chatgpt.print.downloadApp.title",
                    defaultMessage: "Take your curiosity further",
                    description: "Headline in the footer of a printed or PDF-saved ChatGPT conversation, inviting the reader to download the mobile app. Keep it short and encouraging."
                })
            }), f[11] = d) : d = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsxs)("div", {
                className: "min-w-0 flex-1 text-sm",
                children: [d, (0, a.jsx)("p", {
                    className: "mt-1 text-secondary",
                    children: (0, a.jsx)(b.a, {
                        id: "chatgpt.print.downloadApp.description",
                        defaultMessage: "Scan to get the ChatGPT app",
                        description: "Instruction beside the QR code in the footer of a printed or PDF-saved conversation. Scanning the code opens the ChatGPT app download page. Keep it short."
                    })
                })]
            }), f[12] = u) : u = f[12], f[13] !== w ? (h = w.formatMessage({
                id: "chatgpt.print.downloadApp.qrCode",
                defaultMessage: "Download the ChatGPT app",
                description: "Accessible label for a QR code and link in a printed or PDF-saved conversation. The code and link open the ChatGPT app download page."
            }), f[13] = w, f[14] = h) : h = f[14], f[15] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(b.a, {
                id: "chatgpt.print.downloadApp.fallback",
                defaultMessage: "Get the app",
                description: "Link to the ChatGPT app download page when its QR code cannot be generated in a printed conversation"
            }), f[15] = p) : p = f[15], f[16] !== h ? (m = (0, a.jsxs)("footer", {
                className: l,
                children: [c, u, (0, a.jsx)("a", {
                    className: "shrink-0",
                    href: `${eE}&utm_content=pdf_link`,
                    children: (0, a.jsx)(eS.a, {
                        value: `${eE}&utm_content=qr`,
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

        function eA(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var eM = n("zn0A"),
            ek = n("OOaz"),
            eR = n("jfiJ"),
            eN = n("FGJH"),
            eO = n("nmN6");
        let eB = new WeakMap;

        function eF(e) {
            let t, n, s = (0, r.c)(6),
                o = (0, u.z)(Z.a);
            return s[0] !== o || s[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([o, e.entries[0]?.conversationId]), s[0] = o, s[1] = e.entries[0]?.conversationId, s[2] = t) : t = s[2], s[3] !== e || s[4] !== t ? (n = (0, a.jsx)(ez, {
                ...e
            }, t), s[3] = e, s[4] = t, s[5] = n) : n = s[5], n
        }

        function ez(e) {
            let t, n, s, o, i, l, c = (0, r.c)(16),
                d = (0, u.y)(F.a),
                h = (0, u.z)(ee.a),
                [p, m] = (0, f.useState)(!1),
                g = (0, f.useRef)(null);
            c[0] !== d ? (t = (e, t) => {
                if (ed(d, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void g.current?.onKeyDown(e, t);
                let n = eB.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, v.flushSync)(() => m(!0));
                let a = n ?? g.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => eB.get(e)).finally(() => {
                    t.aborted || m(!1)
                })
            }, c[0] = d, c[1] = t) : t = c[1];
            let y = (0, f.useEffectEvent)(t);
            c[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                (0, v.flushSync)(() => m(!0)), g.current?.onBeforePrint()
            }, c[2] = n) : n = c[2];
            let b = (0, f.useEffectEvent)(n);
            c[3] !== d ? (s = () => {
                d.set(eM.a, null), m(!1)
            }, c[3] = d, c[4] = s) : s = c[4];
            let x = (0, f.useEffectEvent)(s);
            return c[5] !== x || c[6] !== b || c[7] !== y || c[8] !== d ? (o = () => {
                let e, t, n = new AbortController,
                    a = (e = () => {
                        if (!d.get(el.c).isChatgptBrowserReplacement) return;
                        let e = d.get(ec);
                        if (e?.printing) return;
                        let t = {
                            ...e ?? eh("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_UNOBSERVED"),
                            printing: !0
                        };
                        d.set(ec, t), ep(d, t, "CHATGPT_CONVERSATION_PRINT_STAGE_BEFORE_PRINT")
                    }, t = () => {
                        let e = d.get(ec);
                        d.get(el.c).isChatgptBrowserReplacement && e?.printing && (ep(d, e, "CHATGPT_CONVERSATION_PRINT_STAGE_AFTER_PRINT"), d.set(ec, null))
                    }, window.addEventListener("beforeprint", e, !0), window.addEventListener("afterprint", t), () => {
                        window.removeEventListener("beforeprint", e, !0), window.removeEventListener("afterprint", t), d.set(ec, null)
                    }),
                    r = e => y(e, n.signal);
                return window.addEventListener("keydown", r, !0), window.addEventListener("beforeprint", b, !0), window.addEventListener("afterprint", x), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), window.removeEventListener("beforeprint", b, !0), window.removeEventListener("afterprint", x), d.set(eM.a, null), a()
                }
            }, c[5] = x, c[6] = b, c[7] = y, c[8] = d, c[9] = o) : o = c[9], c[10] !== d ? (i = [d], c[10] = d, c[11] = i) : i = c[11], (0, f.useEffect)(o, i), c[12] !== h || c[13] !== e || c[14] !== p ? (l = p || h ? (0, a.jsx)(eG, {
                ...e,
                ref: g,
                printing: h
            }) : null, c[12] = h, c[13] = e, c[14] = p, c[15] = l) : l = c[15], l
        }

        function eG(e) {
            let t, n, s, i, l = (0, r.c)(19),
                {
                    entries: c,
                    title: d,
                    TurnRowComponent: h,
                    printing: p,
                    ref: m
                } = e,
                g = (0, u.y)(F.a),
                y = (0, f.useContext)(M.a),
                x = (0, f.useContext)(en.a),
                {
                    getExperiment: w
                } = (0, er.j)(),
                C = w("448755449", {
                    disableExposureLog: !0
                }).get("enabled", !1);
            l[0] !== c[0]?.conversationId ? (t = c[0]?.conversationId ?? (0, ek.d)(""), l[0] = c[0]?.conversationId, l[1] = t) : t = l[1], l[2] !== y || l[3] !== t ? (n = {
                auth: y,
                conversationId: t
            }, l[2] = y, l[3] = t, l[4] = n) : n = l[4];
            let _ = (0, u.x)(null != c[0] && e_.h, n),
                S = (0, u.x)(null == c[0] ? null : eC.d, c[0]?.conversationId ?? "") ?? !0,
                j = (0, f.useRef)(null),
                I = function(e, t, n) {
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
                                userResolver: (0, ex.c)(void 0, void 0, void 0, e.get(B.S, n.conversationId) ?? void 0),
                                scopedResolver: (0, ex.c)(a ?? void 0)
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
                            void 0 === t.generatedResolver && (t.generatedResolver = e.get(ex.a, n.conversationId));
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
                                        for (let a of (0, ef.u)(t, e)) {
                                            if (r && (0, ev.d)(a.src)) continue;
                                            let e = a.searchResult?.isProxied && (a.previewSrc === a.searchResult.contentSrc || a.previewSrc === a.searchResult.originalSrc) ? a.src : a.previewSrc;
                                            o.push({
                                                conversationId: n.conversationId,
                                                src: a.src,
                                                previewSrc: null != e && r && (0, ev.d)(e) ? a.src : e
                                            })
                                        }
                            }
                            if (null == s) continue;
                            i.push(...l.contentReferences.flatMap((e, t) => (0, ef.u)(e, t).map(e => {
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
                        return null != t && (0, ey.h)(t) ? [{
                            src: t,
                            resolver: n
                        }] : []
                    });
                    return {
                        queryKey: ["chatgpt-print-assets", e.get(Z.a), t[0]?.conversationId, a, r, o, c.map(e => {
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
                        staleTime: eb.b.FIVE_MINUTES,
                        refetchOnWindowFocus: !1,
                        retry: !1,
                        queryFn: t => {
                            let {
                                client: a,
                                signal: i,
                                queryKey: l
                            } = t;
                            return eu(e, "CHATGPT_CONVERSATION_PRINT_PREPARATION_IMAGES", i, async () => {
                                let t = {
                                    ...a.getQueryData(l)?.imageSources
                                };
                                for (let e of eg()(c, 6)) i.throwIfAborted(), await Promise.all(e.map(async e => {
                                    let {
                                        src: n,
                                        resolver: r
                                    } = e, s = await (0, ey.a)(a, n, r);
                                    if (i.throwIfAborted(), null != s) {
                                        let e = new Image;
                                        e.referrerPolicy = "no-referrer", e.src = s, await e.decode(), t[n] = s
                                    }
                                }));
                                let d = new Map,
                                    u = o.flatMap(t => {
                                        let n = d.get(t.conversationId);
                                        return (null == n && (n = r || !e.get(e_.h, {
                                            auth: s,
                                            conversationId: t.conversationId
                                        }) && e.get(eC.d, t.conversationId), d.set(t.conversationId, n)), n && (0, ev.d)(t.src)) ? [] : [{
                                            ...t,
                                            previewSrc: n && null != t.previewSrc && (0, ev.d)(t.previewSrc) ? t.src : t.previewSrc
                                        }]
                                    }),
                                    h = n ? t : await async function(e, t, n) {
                                        if (0 === e.length) return t;
                                        let a = ew(),
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
                }(g, c, p, C, "restricted" === x || !_ && S, y),
                {
                    data: T,
                    isSuccess: E,
                    isError: P,
                    refetch: A
                } = (0, o.a)(I);
            return l[5] !== I || l[6] !== T || l[7] !== C || l[8] !== E || l[9] !== A || l[10] !== g ? (s = () => ({
                onKeyDown(e, t) {
                    if (!e.defaultPrevented && (!E || !T.complete) && (e.preventDefault(), !e.repeat && j.current !== t)) return j.current = t, A({
                        cancelRefetch: !1
                    }).then(() => {
                        t.aborted || window.print()
                    }).finally(() => {
                        j.current === t && (j.current = null)
                    })
                },
                onBeforePrint() {
                    if (C) {
                        let e = g.queryClient.getQueryData(I.queryKey),
                            t = {
                                ...ew(),
                                ...e?.imageSources
                            };
                        (0, v.flushSync)(() => g.set(eM.a, t))
                    }
                }
            }), l[5] = I, l[6] = T, l[7] = C, l[8] = E, l[9] = A, l[10] = g, l[11] = s) : s = l[11], (0, f.useImperativeHandle)(m, s), l[12] !== h || l[13] !== c || l[14] !== P || l[15] !== E || l[16] !== p || l[17] !== d ? (i = p ? (0, v.createPortal)((0, a.jsx)(eP, {
                title: d,
                children: (0, a.jsx)(es.a, {
                    value: null,
                    children: (0, a.jsx)(eO.a, {
                        value: null,
                        children: E ? c.map(e => {
                            var t;
                            return (0, a.jsx)(h, {
                                entry: {
                                    ...e,
                                    timestampSeparatorAtMs: null,
                                    turn: {
                                        ...t = e.turn,
                                        suppressTurnActions: !0,
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? eA(e) : {
                                            ...e,
                                            items: e.items.map(eA),
                                            activeReasoning: null == e.activeReasoning ? void 0 : eA(e.activeReasoning)
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
                            children: P ? (0, a.jsx)(b.a, {
                                id: "chatgpt.printAssets.error",
                                defaultMessage: "Some images could not be loaded. Close print and try again.",
                                description: "Printed instead of a partial conversation when its images failed to load"
                            }) : (0, a.jsx)(b.a, {
                                id: "chatgpt.printAssets.loading",
                                defaultMessage: "Images are still loading. Close print and try again.",
                                description: "Printed instead of an incomplete conversation when its images are still loading"
                            })
                        })
                    })
                })
            }), document.body) : null, l[12] = h, l[13] = c, l[14] = P, l[15] = E, l[16] = p, l[17] = d, l[18] = i) : i = l[18], i
        }

        function eL(e) {
            let t, n, a, s, i, l, c = (0, r.c)(22),
                {
                    conversationId: d
                } = e,
                h = (0, u.y)(ea.a),
                p = (0, y.a)(),
                m = (0, f.useRef)(null),
                g = (0, u.z)(Z.a),
                v = (0, u.x)(B.j, d),
                b = (0, u.z)(eN.b);
            c[0] !== g || c[1] !== v ? (t = ["chatgpt-print-history", g, v], c[0] = g, c[1] = v, c[2] = t) : t = c[2], c[3] !== h || c[4] !== v ? (n = e => {
                let {
                    signal: t
                } = e;
                return eu(h, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != v && await (0, eR.a)(h, v, t), !0))
            }, c[3] = h, c[4] = v, c[5] = n) : n = c[5], c[6] !== t || c[7] !== n ? (a = {
                queryKey: t,
                enabled: !1,
                staleTime: 0,
                retry: !1,
                refetchOnWindowFocus: !1,
                queryFn: n
            }, c[6] = t, c[7] = n, c[8] = a) : a = c[8];
            let {
                refetch: x
            } = (0, o.a)(a);
            c[9] !== g || c[10] !== d || c[11] !== p || c[12] !== b || c[13] !== x || c[14] !== h || c[15] !== v ? (s = (e, t) => {
                if (ed(h, e), e.defaultPrevented || null == v || 0 === b || h.get(eN.c, v)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (m.current?.signal === t) return void eB.set(e, m.current.preparation);
                let n = x({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && h.get(Z.a) === g) {
                        if (e.isError) return void h.get(et.f).danger(p.formatMessage({
                            id: "chatgpt.printHistory.error",
                            defaultMessage: "Couldn't load the full conversation to print",
                            description: "Error toast after printing a conversation fails because its older messages could not be loaded; the user can retry printing"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgpt.printHistory.error"
                            }
                        });
                        await Promise.all(h.queryClient.getQueryCache().findAll({
                            queryKey: ["chatgpt-print-assets", g, d],
                            predicate: eW
                        }).map(eD)), t.aborted || h.get(Z.a) !== g || window.print()
                    }
                }).finally(() => {
                    m.current?.signal === t && (m.current = null)
                });
                m.current = {
                    signal: t,
                    preparation: n
                }, eB.set(e, n)
            }, c[9] = g, c[10] = d, c[11] = p, c[12] = b, c[13] = x, c[14] = h, c[15] = v, c[16] = s) : s = c[16];
            let w = (0, f.useEffectEvent)(s);
            return c[17] !== w ? (i = () => {
                let e = new AbortController,
                    t = t => w(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, c[17] = w, c[18] = i) : i = c[18], c[19] !== g || c[20] !== v ? (l = [g, v], c[19] = g, c[20] = v, c[21] = l) : l = c[21], (0, f.useEffect)(i, l), null
        }

        function eD(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(eH)
        }

        function eH() {}

        function eW(e) {
            return e.getObserversCount() > 0
        }
        var eq = n("DrWu"),
            eK = n("x4uR"),
            eU = n("hx97");

        function eV(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var eQ = n("MrzV"),
            e$ = n("Sm6l"),
            eY = n("gbRX");

        function eX(e) {
            let t, n, s = (0, r.c)(4),
                {
                    isFetching: o,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, u.z)(!i && eY.a) || o;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(b.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again",
                description: "Retry loading a ChatGPT conversation after its history could not be loaded"
            }), s[0] = t) : t = s[0], s[1] !== l || s[2] !== c ? (n = (0, a.jsx)(e$.a, {
                color: "ghost",
                disabled: c,
                onClick: l,
                children: t
            }), s[1] = l, s[2] = c, s[3] = n) : n = s[3], n
        }

        function eJ(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(b.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation",
                description: "Error state when a ChatGPT conversation fetch fails"
            }), o[0] = t) : t = o[0], o[1] !== i || o[2] !== l || o[3] !== c ? (n = null != c ? (0, a.jsx)(eX, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, o[1] = i, o[2] = l, o[3] = c, o[4] = n) : n = o[4], o[5] !== n ? (s = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), o[5] = n, o[6] = s) : s = o[6], s
        }
        var eZ = n("FfNP"),
            e0 = n("Bbed"),
            e1 = n("WVag");
        let e2 = (0, e0.a)(eZ.loadEpicChartIndicator);

        function e3(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, u.x)(e1.a, s),
                [i, l] = (0, f.useState)(!1);
            return i || null == o || l(!0), n[0] !== s || n[1] !== i ? (t = i ? (0, a.jsx)(e2, {
                conversationId: s
            }) : null, n[0] = s, n[1] = i, n[2] = t) : t = n[2], t
        }
        var e4 = n("YTsa"),
            e5 = n("AoaR"),
            e6 = n("Ow2S"),
            e7 = n("fDfx"),
            e8 = n("u4MG"),
            e9 = n("Xslx"),
            te = n("EEop"),
            tt = n("bxvp"),
            tn = n("VBQS"),
            ta = n("hsIu");
        let tr = (0, u.d)(ea.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(tt.c) || null == n(k.f) || null == n(k.k)) return null;
            let {
                data: a,
                isError: r
            } = n(ta.b);
            if (r || a?.project_id !== e) return null;
            let {
                data: s,
                isError: o
            } = n(te.l, (0, tn.a)());
            return o ? null : (0, tn.b)(s)
        });
        var ts = n("DWXw"),
            to = n("FmJi"),
            ti = n("TSib"),
            tl = n("sIex"),
            tc = n("jEN2"),
            td = n("kphc"),
            tu = n("YWcr"),
            th = n("RGWz"),
            tp = n("QxH2"),
            tm = n("mwa5"),
            tg = n("UuVq"),
            tf = n("TwSq"),
            tv = n("l0fK"),
            ty = n("hkBU"),
            tb = n("UxN3"),
            tx = n("XcNx"),
            tw = n("GKsW"),
            tC = n("yWTM"),
            t_ = n("Z2JT"),
            tS = n("SkIz"),
            tj = n("hsSf"),
            tI = n("ibLK"),
            tT = n("T1PX"),
            tE = n("Fjd0"),
            tP = n("VPBa"),
            tA = n("PWXi"),
            tM = n("zOE4"),
            tk = n("Xc94"),
            tR = n("Sgih"),
            tN = n("HwRo"),
            tO = n("qwxA"),
            tB = n("gOnr"),
            tF = n("KXCj"),
            tz = n("e1xH"),
            tG = n("pAFY");
        n("kErH");
        var tL = n("dJBt"),
            tD = n("FR8U"),
            tH = n("xqnZ"),
            tW = n("UMxD"),
            tq = n("guID"),
            tK = n("JhDO"),
            tU = n("Mbqw"),
            tV = n("kl6F"),
            tQ = n("kfGJ"),
            t$ = n("khOd"),
            tY = n("RZBv"),
            tX = n("yzQ9"),
            tJ = n("OMIV"),
            tZ = n("JCJj"),
            t0 = n("KkZX"),
            t1 = n("uYx2"),
            t2 = n("Gjet"),
            t3 = n("SBcL"),
            t4 = n("BdYu"),
            t5 = n("Nyub"),
            t6 = n("jZDY"),
            t7 = n("HgLj"),
            t8 = n("Bc5r"),
            t9 = n("bIvi"),
            ne = n("Elta"),
            nt = n("eW0T"),
            nn = n("hOYb"),
            na = n("eShZ"),
            nr = n("qqut"),
            ns = n("CsbC"),
            no = n("tCyZ"),
            ni = n("S0ko"),
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
            nw = n("pqpL"),
            nC = n("uqg3"),
            n_ = n("XcRr"),
            nS = n("dk3M"),
            nj = n("WFY2"),
            nI = n("vldH"),
            nT = n("ISgP"),
            nE = n("t2JB"),
            nP = n("DIH2"),
            nA = n("aFoA"),
            nM = n("H8lk"),
            nk = n("f2PP"),
            nR = n("S95W");
        let nN = (0, u.v)(ea.a, e => null);
        var nO = n("DM5G"),
            nB = n("gJe8"),
            nF = n("d2rV"),
            nz = n("n6zj"),
            nG = n("aLqR"),
            nL = n("VlIB"),
            nD = n("ASxG"),
            nH = n("wD9O"),
            nW = n("lsfk"),
            nq = n("IObw"),
            nK = n("BOYb"),
            nU = n("kQNh"),
            nV = n.n(nU),
            nQ = n("NkEl"),
            n$ = n("FW69"),
            nY = "highlight-x7OnzP",
            nX = "safari-wcvuzB",
            nJ = "block-t7sxyD";
        let nZ = "chatgpt-search-result",
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
                c.setStart(i.node, r - i.start), c.setEnd(l.node, o - l.start), n2(c) && ((0, n$.a)(c) ?? c.toString()).trim() === t && (yield c)
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
            let t, n, a, s, o, i, l, c, d, h, p, m, g = (0, r.c)(50),
                {
                    conversationId: v,
                    entries: y,
                    isConversationFetching: b,
                    turnListApi: w
                } = e,
                C = (0, u.y)(ea.a),
                _ = (0, u.x)(B.s, v),
                S = (0, nW.b)(),
                j = (0, nH.c)();
            g[0] !== S || g[1] !== j ? (t = e => {
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
                            left: (0, nH.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                        h = (0, nH.b)(o.height, n),
                        p = (0, nH.b)(o.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, S, j)
            }, g[0] = S, g[1] = j, g[2] = t) : t = g[2];
            let I = (0, f.useEffectEvent)(t),
                T = (0, x.Y)(),
                E = (0, x._)(),
                P = new URLSearchParams(T.search),
                A = P.get("messageId") ?? P.get("message"),
                M = n3.safeParse(T.state).data?.chatGptSearchNavigation,
                k = A ?? M?.messageId,
                R = P.get("selectedTextQuery") ?? "",
                N = (0, u.x)(B.M, v),
                O = !R || null != k && null != N && (N[k]?.message != null || Object.values(N).some(e => e.message?.id === k)),
                F = R || P.get("historySearchQuery") || "",
                z = JSON.stringify([v, null != A ? T.key : M?.key ?? T.key, k]);
            g[3] !== z ? (n = {
                key: z,
                handled: !1,
                positioned: !1
            }, g[3] = z, g[4] = n) : n = g[4];
            let G = (0, f.useRef)(n),
                L = (0, f.useEffectEvent)(e => {
                    G.current.positioned = !0;
                    let t = F.trim().length > 0 ? function(e, t, n) {
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
                            x = new MutationObserver(C);

                        function w() {
                            for (let t of (g = !0, x.disconnect(), clearTimeout(r), null != s && cancelAnimationFrame(s), null != a && CSS.highlights.get(nZ) === a && CSS.highlights.delete(nZ), e.classList.remove(nY, nX), b)) t.classList.remove(nY, nJ)
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
                                        s = void 0, _()
                                    })
                                });
                                return
                            }
                            let S = [];
                            if (null != c) {
                                let t = e.querySelector('[data-markdown-text-style="assistant-message"]') ?? e,
                                    n = 0;
                                for (let e of n1(t, c))
                                    if (!(n++ < l)) {
                                        S.push(e);
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), n2(a) && S.push(a)
                                    }
                            }
                            let j = h.flatMap(e => {
                                let {
                                    element: t,
                                    target: n
                                } = e, a = t.getBoundingClientRect(), r = S.some(e => t.contains(e.startContainer));
                                return "terms" === i && a.width > 0 && a.height > 0 && ("block" === n.highlight || "auto" === n.highlight && !r) ? [t] : []
                            });
                            if (0 === S.length && 0 === j.length) {
                                if (d < 800) return void C();
                                j.push(e)
                            }
                            let I = 0,
                                T = 0;
                            for (let e of [...S, ...j]) {
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
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...S), CSS.highlights.set(nZ, a)) : S.length > 0 && j.push(e), e.classList.add(nY), (0, nK.e)() && e.classList.add(nX), j)) t.classList.add(nY, nJ), b.add(t);
                            r = setTimeout(w, 3600)
                        }
                        return x.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), _(), w
                    }(e, F, I, R ? "phrase" : "terms", Number(P.get("selectedTextOccurrence"))) : void 0;
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
            g[5] !== v || g[6] !== b || g[7] !== k || g[8] !== z || g[9] !== C || g[10] !== O ? (a = () => {
                if (G.current.key !== z && (G.current = {
                        key: z,
                        handled: !1,
                        positioned: !1
                    }), null != k && !b && O) return C.watch(e => {
                    !G.current.handled && (0, B.Pb)(e, v, k) && (G.current.handled = !0)
                })
            }, s = [v, b, k, z, C, O], g[5] = v, g[6] = b, g[7] = k, g[8] = z, g[9] = C, g[10] = O, g[11] = a, g[12] = s) : (a = g[11], s = g[12]), (0, f.useLayoutEffect)(a, s), g[13] !== y || g[14] !== k ? (o = null == k ? void 0 : y.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(k)
            }), g[13] = y, g[14] = k, g[15] = o) : o = g[15];
            let D = o;
            g[16] !== T || g[17] !== E || g[18] !== A || g[19] !== M ? (i = () => {
                null == A && null != M && E(T, {
                    replace: !0,
                    preventScrollReset: !0,
                    state: {
                        ...T.state,
                        chatGptSearchNavigation: void 0
                    }
                })
            }, g[16] = T, g[17] = E, g[18] = A, g[19] = M, g[20] = i) : i = g[20];
            let H = (0, f.useEffectEvent)(i);
            if (g[21] !== H || g[22] !== _ || g[23] !== b || g[24] !== D ? (l = () => {
                    !G.current.positioned || null != D || b || _ || H()
                }, g[21] = H, g[22] = _, g[23] = b, g[24] = D, g[25] = l) : l = g[25], g[26] !== _ || g[27] !== b || g[28] !== D ? (c = [_, b, D], g[26] = _, g[27] = b, g[28] = D, g[29] = c) : c = g[29], (0, f.useLayoutEffect)(l, c), g[30] !== k || g[31] !== D?.id || g[32] !== D?.turn || g[33] !== D?.turn.items || g[34] !== D?.turn.items.findIndex || g[35] !== D?.turnKey) {
                let e = D?.turn.items.findIndex(e => "messageId" in e && e.messageId === k || "assistant-message" === e.type && null != k && e.sourceMessageIds?.includes(k)) ?? -1,
                    t = D?.turn.items[e],
                    n = D?.id;
                h = D?.turnKey, d = null == t || null == n ? void 0 : (0, nq.b)(t, e, n), g[30] = k, g[31] = D?.id, g[32] = D?.turn, g[33] = D?.turn.items, g[34] = D?.turn.items.findIndex, g[35] = D?.turnKey, g[36] = d, g[37] = h
            } else d = g[36], h = g[37];
            let W = d;
            return g[38] !== L || g[39] !== k || g[40] !== h || g[41] !== w || g[42] !== W ? (p = () => {
                let e;
                if (null == h || null == w) return;
                let t = new AbortController,
                    n = null;
                return w.scrollToKey(h, e => n = (null == k ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(k)}"]`)) ?? (null == W ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(W)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = L(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, g[38] = L, g[39] = k, g[40] = h, g[41] = w, g[42] = W, g[43] = p) : p = g[43], g[44] !== k || g[45] !== z || g[46] !== h || g[47] !== w || g[48] !== W ? (m = [z, k, h, w, W], g[44] = k, g[45] = z, g[46] = h, g[47] = w, g[48] = W, g[49] = m) : m = g[49], (0, f.useLayoutEffect)(p, m), null
        }
        var n5 = n("iGzJ");
        let n6 = (0, u.v)(ea.a, e => null);
        var n7 = n("sfmI"),
            n8 = n("SZi8"),
            n9 = n("lBzi"),
            ae = n("Ga6O"),
            at = n("ESlL"),
            an = n("vknh"),
            aa = n("Ppno"),
            ar = n("lA5q"),
            as = n("wDWo"),
            ao = n("IgxH"),
            ai = n("iaTG"),
            al = n("c3f5"),
            ac = n("XpUB"),
            ad = n("xAIC"),
            au = n("slpy"),
            ah = n("bf6R"),
            ap = n("O666"),
            am = n("OtLV"),
            ag = n("tNq4"),
            af = n("Skaw"),
            av = n("PYCG");

        function ay(e) {
            let t, n, s, o, i, l, c, d, h, p, m, g = (0, r.c)(50),
                {
                    conversationId: f,
                    projectId: v,
                    sharedProjectConversation: x,
                    isReady: w,
                    isRestricted: C,
                    isStreaming: _
                } = e,
                S = void 0 === v ? null : v,
                j = (0, u.y)(ea.a),
                I = (0, y.a)(),
                T = (0, u.z)(k.e),
                E = (0, u.z)(null == S ? null : af.a),
                P = (0, u.x)(B.j, f),
                {
                    data: A
                } = (0, u.x)(n9.chatGptConversationQueryById$, null == S ? null : P),
                M = (0, u.x)(nA.a, null == S ? null : P),
                R = (0, u.x)(B.B, M);
            g[0] !== M || g[1] !== A || g[2] !== R || g[3] !== S || g[4] !== P ? (t = null == A && null != M && null != P ? {
                id: P,
                gizmo_id: S,
                is_temporary_chat: R
            } : void 0, g[0] = M, g[1] = A, g[2] = R, g[3] = S, g[4] = P, g[5] = t) : t = g[5];
            let N = t,
                {
                    data: O
                } = (0, u.x)(eK.b, S),
                F = null == S ? null : (0, af.b)(E ?? null, x ?? A ?? N, O),
                z = (0, u.x)(ag.b, f);
            g[6] !== I ? (n = I.formatMessage(am.a.headerShare), g[6] = I, g[7] = n) : n = g[7];
            let G = n,
                L = (0, u.x)(null == x ? ag.a : null, f),
                D = null != x || null != L,
                H = null;
            if (C || F?.type === "unavailable") {
                let e;
                g[8] !== I ? (e = I.formatMessage(am.a.shareDisabledRestricted), g[8] = I, g[9] = e) : e = g[9], H = e
            } else if (_ && !D) {
                let e;
                g[10] !== I ? (e = I.formatMessage(am.a.shareDisabledStreaming), g[10] = I, g[11] = e) : e = g[11], H = e
            } else if (!w || !D) {
                let e;
                g[12] !== I ? (e = I.formatMessage(am.a.shareDisabledNotReady), g[12] = I, g[13] = e) : e = g[13], H = e
            }
            let W = null != H || z;
            g[14] !== W ? (s = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: W
            }, g[14] = W, g[15] = s) : s = g[15];
            let q = (0, u.x)(ap.b, s),
                K = "loaded" === T.status && "personal" === T.structure && (null == F || "snapshot" === F.type),
                U = null != H || z;
            g[16] !== U ? (o = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: U
            }, g[16] = U, g[17] = o) : o = g[17];
            let V = (0, u.x)(K ? ap.b : null, o);
            g[18] !== f || g[19] !== N || g[20] !== S || g[21] !== j || g[22] !== x ? (i = () => {
                let e = null == x ? j.get(ag.c, f) : {
                    serverConversationId: x.conversation_id,
                    title: x.title,
                    currentNodeId: x.current_node ?? void 0
                };
                null != e && (0, av.shareChatGptProjectConversation)(j, e.serverConversationId, e.title ?? "", S, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", x ?? N)
            }, g[18] = f, g[19] = N, g[20] = S, g[21] = j, g[22] = x, g[23] = i) : i = g[23];
            let Q = i,
                $ = G;
            if ("loaded" === T.status && (null == F || "snapshot" === F.type)) {
                let e;
                g[24] !== T.structure || g[25] !== I ? (e = I.formatMessage("workspace" === T.structure ? am.a.shareWorkspaceTooltip : am.a.sharePublicTooltip), g[24] = T.structure, g[25] = I, g[26] = e) : e = g[26], $ = e
            }
            let Y = null == H && !z && !0 === V,
                X = H ?? $,
                J = null != H || z;
            return g[27] !== z || g[28] !== q ? (l = !z && (q ? (0, a.jsx)(ah.M, {}) : (0, a.jsx)(ah.L, {})), g[27] = z, g[28] = q, g[29] = l) : l = g[29], g[30] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)("span", {
                className: "max-sm:hidden",
                children: (0, a.jsx)(b.a, {
                    ...am.a.headerShare
                })
            }), g[30] = c) : c = g[30], g[31] !== Q || g[32] !== z || g[33] !== G || g[34] !== J || g[35] !== l ? (d = (0, a.jsxs)(e$.a, {
                "aria-label": G,
                color: "ghostActive",
                disabled: J,
                loading: z,
                className: "browser:[&_[data-loading-indicator]>svg]:size-6",
                radius: "large",
                size: "toolbar",
                onClick: Q,
                children: [l, c]
            }), g[31] = Q, g[32] = z, g[33] = G, g[34] = J, g[35] = l, g[36] = d) : d = g[36], g[37] !== X || g[38] !== d || g[39] !== Y ? (h = (0, a.jsx)(au.a, {
                disabled: Y,
                content: X,
                children: d
            }), g[37] = X, g[38] = d, g[39] = Y, g[40] = h) : h = g[40], g[41] !== f || g[42] !== z || g[43] !== S || g[44] !== H || g[45] !== x ? (p = !1, g[41] = f, g[42] = z, g[43] = S, g[44] = H, g[45] = x, g[46] = p) : p = g[46], g[47] !== h || g[48] !== p ? (m = (0, a.jsxs)(a.Fragment, {
                children: [h, p]
            }), g[47] = h, g[48] = p, g[49] = m) : m = g[49], m
        }(0, e0.a)(async () => () => null);
        var ab = n("B0Wx"),
            ax = n("if6d"),
            aw = n("Sd8U");
        let aC = (0, u.t)("ChatGptTranscriptScope", {
            parent: aw.a,
            key: e => e.presentation
        });
        var a_ = n("r2mP"),
            aS = n("ag0v"),
            aj = n("v5tk"),
            aI = n("ZhoB"),
            aT = n("RADZ"),
            aE = n("rZzh"),
            aP = n("hZRx");

        function aA(e) {
            let t, n, s, o, i, l, c, d, h, p, m = (0, r.c)(57),
                {
                    entry: g,
                    renderMcpApps: f,
                    trackShownImpressions: v
                } = e,
                y = void 0 === f || f,
                x = void 0 === v || v,
                w = (0, u.y)(ea.a);
            m[0] !== g.conversationId ? (t = (0, tV.o)({
                routeKind: "chatgpt-thread",
                conversationId: g.conversationId
            }), m[0] = g.conversationId, m[1] = t) : t = m[1];
            let C = (0, u.x)(x ? tR.c : null, t),
                _ = x && null == C,
                S = (0, u.x)(g.isMostRecentTurn ? aE.e : null, g.conversationId);
            m[2] !== g.timestampSeparatorAtMs ? (n = null == g.timestampSeparatorAtMs ? null : (0, a.jsx)(a_.b, {
                sentAtMs: g.timestampSeparatorAtMs
            }), m[2] = g.timestampSeparatorAtMs, m[3] = n) : n = m[3];
            let j = null != g.paragen;
            m[4] !== g.branchingMessageId || m[5] !== g.browserConversationId || m[6] !== g.conversationId || m[7] !== g.dilEditDisclosure || m[8] !== g.enableCloudBrowserActivity || m[9] !== g.feedbackEnabled || m[10] !== g.hasLaterSitesPreview || m[11] !== g.id || m[12] !== g.isMostRecentTurn || m[13] !== g.isReadOnly || m[14] !== g.isTemporaryChat || m[15] !== g.isWorkConversation || m[16] !== g.onEditUserMessage || m[17] !== g.onFork || m[18] !== g.onRegenerateResponse || m[19] !== g.pendingSubmissionAttachments || m[20] !== g.readAloudEnabled || m[21] !== g.referenceImageSuggestionActionInput || m[22] !== g.safetyReview || m[23] !== g.shareEnabled || m[24] !== g.turn || m[25] !== y || m[26] !== _ || m[27] !== j ? (s = (0, a.jsx)(aj.a, {
                dilEditDisclosure: g.dilEditDisclosure,
                browserConversationId: g.browserConversationId,
                conversationId: g.conversationId,
                enableCloudBrowserActivity: g.enableCloudBrowserActivity,
                branchingMessageId: g.branchingMessageId,
                hasLaterSitesPreview: g.hasLaterSitesPreview,
                hostId: tQ.a,
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
                trackShownImpressions: _,
                turn: g.turn,
                turnId: g.id
            }), m[4] = g.branchingMessageId, m[5] = g.browserConversationId, m[6] = g.conversationId, m[7] = g.dilEditDisclosure, m[8] = g.enableCloudBrowserActivity, m[9] = g.feedbackEnabled, m[10] = g.hasLaterSitesPreview, m[11] = g.id, m[12] = g.isMostRecentTurn, m[13] = g.isReadOnly, m[14] = g.isTemporaryChat, m[15] = g.isWorkConversation, m[16] = g.onEditUserMessage, m[17] = g.onFork, m[18] = g.onRegenerateResponse, m[19] = g.pendingSubmissionAttachments, m[20] = g.readAloudEnabled, m[21] = g.referenceImageSuggestionActionInput, m[22] = g.safetyReview, m[23] = g.shareEnabled, m[24] = g.turn, m[25] = y, m[26] = _, m[27] = j, m[28] = s) : s = m[28], m[29] !== g.conversationId || m[30] !== g.isTemporaryChat || m[31] !== g.isWorkConversation || m[32] !== g.paragen || m[33] !== y || m[34] !== _ ? (o = null == g.paragen ? null : (0, a.jsx)(aT.a, {
                renderMcpApps: y,
                comparison: g.paragen,
                conversationId: g.conversationId,
                hostId: tQ.a,
                isTemporaryChat: g.isTemporaryChat,
                isWorkConversation: g.isWorkConversation,
                trackTaskViews: _
            }, g.paragen.promptMessageId), m[29] = g.conversationId, m[30] = g.isTemporaryChat, m[31] = g.isWorkConversation, m[32] = g.paragen, m[33] = y, m[34] = _, m[35] = o) : o = m[35], m[36] !== g.showSharedConversationPrivateDisclaimer ? (i = g.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(tb.a, {
                    className: "shrink-0",
                    legacyIcon: aS.a,
                    asset16: aP.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(b.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you",
                    description: "Privacy disclaimer shown between the original shared ChatGPT conversation and the reader's new private messages after they continue the shared conversation in Codex Desktop"
                })]
            }) : null, m[36] = g.showSharedConversationPrivateDisclaimer, m[37] = i) : i = m[37], m[38] !== g || m[39] !== S || m[40] !== w || m[41] !== _ ? (l = g.isMostRecentTurn ? (0, a.jsx)(at.a, {
                conversationId: g.conversationId,
                errorMessage: g.errorMessage,
                isWorkConversation: g.isWorkConversation,
                onRetry: null == g.onRegenerateResponse || null == S ? void 0 : async e => {
                    let t = w.get(aE.e, g.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = w.get(B.U, g.conversationId)?.metadata?.errorCode;
                    (0, aI.d)(w.get(el.c).logProductEvent, {
                        conversationId: w.get(B.j, g.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await g.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, aE.f)(t.message, w.get(e6.u, g.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                showPendingLoadingMessage: g.showPendingLoadingMessage,
                showRequestUserInputStatus: g.showRequestUserInputStatus,
                trackShownImpressions: _,
                useDefaultModel: S?.useDefaultModel,
                isRetryDisabled: S?.isRetryDisabled
            }) : null, m[38] = g, m[39] = S, m[40] = w, m[41] = _, m[42] = l) : l = m[42], m[43] !== s || m[44] !== o || m[45] !== i || m[46] !== l ? (c = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [s, o, i, l]
            }), m[43] = s, m[44] = o, m[45] = i, m[46] = l, m[47] = c) : c = m[47], m[48] !== g.id || m[49] !== c || m[50] !== n ? (d = (0, a.jsxs)("div", {
                "data-content-search-turn-key": g.id,
                children: [n, c]
            }), m[48] = g.id, m[49] = c, m[50] = n, m[51] = d) : d = m[51];
            let I = d;
            return m[52] !== g.dilVisualSlotId ? (h = null != g.dilVisualSlotId && (0, a.jsx)("div", {
                "data-dil-anchor-spacer": "",
                "aria-hidden": "true"
            }), m[52] = g.dilVisualSlotId, m[53] = h) : h = m[53], m[54] !== I || m[55] !== h ? (p = (0, a.jsxs)(a.Fragment, {
                children: [h, I]
            }), m[54] = I, m[55] = h, m[56] = p) : p = m[56], p
        }

        function aM(e) {
            let t, n, s, o = (0, r.c)(6);
            o[0] !== e ? ({
                renderMcpApps: n,
                ...t
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]);
            let i = void 0 === n || n,
                l = (0, u.y)(aC),
                c = i && l.value.rendersWidgets;
            return o[3] !== t || o[4] !== c ? (s = (0, a.jsx)(aA, {
                ...t,
                renderMcpApps: c
            }), o[3] = t, o[4] = c, o[5] = s) : s = o[5], s
        }

        function ak(e) {
            let t, n, s, o, i, l, c, d = (0, r.c)(17),
                {
                    entries: h,
                    historyLoader: p,
                    isVisible: m,
                    rendersWidgets: g,
                    onVisibilityChange: v
                } = e;
            d[0] !== m || d[1] !== v ? (t = () => (v(m), () => v(!1)), n = [m, v], d[0] = m, d[1] = v, d[2] = t, d[3] = n) : (t = d[2], n = d[3]), (0, f.useLayoutEffect)(t, n), d[4] !== g ? (s = {
                presentation: "floating",
                rendersWidgets: g
            }, d[4] = g, d[5] = s) : s = d[5];
            let y = m ? p : null;
            return d[6] !== h ? (o = (0, a.jsx)(ax.a, {
                entries: h,
                preserveMeasuredTurnViewport: !0,
                RowComponent: aR
            }), d[6] = h, d[7] = o) : o = d[7], d[8] !== y || d[9] !== o ? (i = (0, a.jsx)(es.a, {
                value: null,
                children: (0, a.jsxs)(eO.a, {
                    value: null,
                    children: [y, o]
                })
            }), d[8] = y, d[9] = o, d[10] = i) : i = d[10], d[11] !== m || d[12] !== i ? (l = (0, a.jsx)(t2.a, {
                active: m,
                presentation: "panel",
                children: i
            }), d[11] = m, d[12] = i, d[13] = l) : l = d[13], d[14] !== s || d[15] !== l ? (c = (0, a.jsx)(u.b, {
                scope: aC,
                value: s,
                children: l
            }), d[14] = s, d[15] = l, d[16] = c) : c = d[16], c
        }

        function aR(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(aM, {
                entry: {
                    ...s,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    readAloudEnabled: !1
                },
                trackShownImpressions: !1
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var aN = n("TRQ3"),
            aO = n("SZCv"),
            aB = n.n(aO),
            aF = n("qZWE"),
            az = n("PC5z"),
            aG = n("lZ4W"),
            aL = n("ihvi"),
            aD = n("nMdB");
        let aH = "[data-d-component]:not([data-d-text-flow])";
        class aW extends f.Component {
            static contextType = nH.a;
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
                let r = a.querySelector(aH) ?? a,
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
                e.body.isConnected || (e.body = e.element.querySelector(aH) ?? e.element);
                let n = () => (0, nH.b)(e.body.getBoundingClientRect().top - e.top, this.context),
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
                    this.held && a > 0 && this.props.ensureScrollRoomForAnchor?.(a), t.holdViewport(), t.compensateScrollToDistanceFromBottomPx(Math.max(0, (0, t1.b)(e.scrollElement) - a)), this.stopLayoutCorrection?.(), this.stopLayoutCorrection = (0, aD.a)(e.body, this.context)
                }
            }
            render() {
                return this.shouldAnimateFold() ? this.presented.children : this.props.children
            }
        }
        var aq = n("aRto"),
            aK = n("WWSI"),
            aU = n("U3Gy"),
            aV = n("mKTJ");
        let aQ = (0, u.c)(tV.a, e => {
                let {
                    get: t
                } = e;
                return t(aF.l)
            }, {
                isEqual: aB()
            }),
            a$ = (0, u.c)(tV.a, e => {
                let {
                    get: t
                } = e;
                return t(az.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function aY(e) {
            let t, n, s, o, i, l, c, d = (0, r.c)(39),
                {
                    conversationId: h,
                    entries: p,
                    viewportRef: m,
                    isTurnActive: g,
                    onApiChange: v,
                    onVisibleContentReady: y,
                    responseSpacerState: b
                } = e,
                {
                    sharedConversationId: w
                } = (0, x.cb)(),
                C = (0, u.z)(null != w && "u" > typeof Element && "function" != typeof Element.prototype.moveBefore ? aQ : null),
                _ = (0, u.z)(a$),
                S = (0, nW.b)(),
                [j, I] = (0, f.useState)(aZ);
            d[0] !== m ? (t = (e, t) => {
                m.current?.releaseForHistoryToggle(), I(n => {
                    let a = new Map(n);
                    return a.get(e) === t ? a.delete(e) : a.set(e, t), a
                })
            }, d[0] = m, d[1] = t) : t = d[1];
            let T = function(e, t, n) {
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
                }(p, j, (0, t9.a)(t)),
                E = p.findLastIndex(aJ),
                P = p[E]?.dilVisualSlotId,
                A = (0, tT.a)(null != P),
                M = p[E]?.turn.items[0];
            d[2] !== p || d[3] !== b?.voiceAutoScrollEnabled || d[4] !== P ? (n = null != P || b?.voiceAutoScrollEnabled ? p.findLastIndex(a0) : -1, d[2] = p, d[3] = b?.voiceAutoScrollEnabled, d[4] = P, d[5] = n) : n = d[5];
            let k = n,
                R = p[k],
                N = E > k;
            d[6] !== p ? (s = e => {
                let t = p.find(t => t.turn.items.some(t => "chatgpt-writing-block-patch" === t.type && t.messageId === e.messageId)),
                    n = t?.turnKey ?? p.find(t => {
                        let {
                            id: n
                        } = t;
                        return n === e.turnId
                    })?.turnKey;
                return null == n ? [] : [n]
            }, d[6] = p, d[7] = s) : s = d[7];
            let O = _.flatMap(s),
                B = (0, f.useContext)(aq.a),
                F = p.at(-1),
                z = g || F?.turn.status === "in_progress";
            if (B?.aboveComposer != null && null != F && O.push(F.turnKey), null != w && C?.size)
                for (let e of p) e.turn.items.flatMap(aX).some(e => "chatgpt-hosted-widget" === e.type && (0, aV.h)(e) && C.has((0, aV.e)(w, e.messageId))) && O.push(e.turnKey);
            let G = null == P ? void 0 : T.find(e => e.dilEditDisclosure?.slotId === P);
            G && O.push(G.turnKey, p[E].turnKey);
            let L = N ? G : void 0;
            b?.voiceAutoScrollEnabled && null != R && O.push(R.turnKey);
            let D = (0, u.x)(aL.b, h),
                H = null == D ? void 0 : p.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes(D)
                }),
                W = null == H ? void 0 : (0, aL.a)(H.turn.items);
            (0, u.x)(aG.a, null == W ? null : {
                conversationId: h,
                userMessageId: W,
                steeredPromptId: H === F ? D : void 0
            }) && null != H && O.push(H.turnKey);
            let q = (0, u.x)(aU.b, h),
                K = R?.turnKey,
                U = M?.type === "assistant-message" ? M.messageId : void 0,
                V = b?.ensureScrollRoomForAnchor,
                Q = F?.hasStreamingFinalText === !0,
                $ = F?.streamingDilFinalId,
                Y = ax.a,
                X = (0, aK.a)(T, q, h),
                J = b?.getHeightPx,
                Z = L?.turnKey,
                ee = L?.dilEditDisclosure?.count,
                et = L?.turnKey ?? (null != P || b?.voiceAutoScrollEnabled ? R?.turnKey : void 0);
            return d[8] !== b || d[9] !== m ? (o = (e, t) => {
                b?.onTurnLayoutReady(e, t), m.current?.restoreAfterMeasurement()
            }, d[8] = b, d[9] = m, d[10] = o) : o = d[10], d[11] !== b ? (i = e => {
                let {
                    heightDeltaPx: t
                } = e;
                b?.consumeGrowth(t ?? 0)
            }, d[11] = b, d[12] = i) : i = d[12], d[13] !== Y || d[14] !== v || d[15] !== y || d[16] !== O || d[17] !== X || d[18] !== J || d[19] !== Z || d[20] !== ee || d[21] !== et || d[22] !== o || d[23] !== i ? (l = (0, a.jsx)(Y, {
                entries: X,
                getBottomScrollPaddingPx: J,
                synchronousMeasurementTurnKey: Z,
                latestTurnSynchronousMeasurementKey: ee,
                layoutReadyTurnKey: et,
                onTurnLayoutReady: o,
                onLatestTurnHeightChange: i,
                onApiChange: v,
                onVisibleContentReady: y,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: O,
                RowComponent: aM
            }), d[13] = Y, d[14] = v, d[15] = y, d[16] = O, d[17] = X, d[18] = J, d[19] = Z, d[20] = ee, d[21] = et, d[22] = o, d[23] = i, d[24] = l) : l = d[24], d[25] !== aW || d[26] !== N || d[27] !== A || d[28] !== z || d[29] !== S || d[30] !== l || d[31] !== K || d[32] !== U || d[33] !== V || d[34] !== Q || d[35] !== $ || d[36] !== m || d[37] !== P ? (c = (0, a.jsx)(aW, {
                ref: m,
                exchangeKey: K,
                visualId: P,
                visualOwnerId: U,
                active: N,
                ensureScrollRoomForAnchor: V,
                hasStreamingFinalText: Q,
                streamingDilFinalId: $,
                replyPending: z,
                reducedMotion: A,
                scrollController: S,
                children: l
            }), d[25] = aW, d[26] = N, d[27] = A, d[28] = z, d[29] = S, d[30] = l, d[31] = K, d[32] = U, d[33] = V, d[34] = Q, d[35] = $, d[36] = m, d[37] = P, d[38] = c) : c = d[38], c
        }

        function aX(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function aJ(e) {
            return null != e.dilVisualSlotId
        }

        function aZ() {
            return new Map
        }

        function a0(e) {
            return e.turn.items.some(e => "user-message" === e.type)
        }
        var a1 = n("XAP6"),
            a2 = n("bzoy"),
            a3 = n("LYS1"),
            a4 = n("aZoZ"),
            a5 = n("Gv8v"),
            a6 = n("EGpF"),
            a7 = n("mTPq"),
            a8 = n("Vcrm"),
            a9 = n("QBVt");
        let re = (0, u.d)(ea.a, (e, t) => {
            let {
                get: n
            } = t, a = n(B.$, e);
            if (!(0, B.Ab)(a)) return !0;
            let r = n(B.M, e),
                s = n(B.C, e);
            if (null == r || null == s) return !1;
            let o = r[s]?.message;
            if (null == o || a3.a.has(o.author.role)) return !1;
            let i = n(B.y, e),
                l = (0, a7.c)({
                    mapping: r,
                    current_node: s
                }, n(B.R, e)),
                c = n(B.cb, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(B.j, e) && !(0, a2.e)(n(B.p, e)) && null != c && !n(a1.e).has(c) && null != rt(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function rt(e, t) {
            let n = e(a6.a, t),
                a = e(B.j, t);
            return null == n.request.current && null != a ? e(a6.a, a) : n
        }
        var rn = n("xtkq"),
            ra = n("PG5R"),
            rr = n("zrki"),
            rs = n("iLYI"),
            ro = n("Ipgw"),
            ri = n("wVX4");

        function rl(e) {
            let t, n, s, o, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, u.y)(ea.a),
                d = (0, y.a)(),
                h = (0, t6.a)(),
                p = (0, u.x)(B.$, l),
                m = (0, u.x)(B.cb, l),
                g = (0, u.x)(B.w, l),
                b = (0, u.x)(B.bb, l),
                x = (0, f.useRef)(null),
                w = (0, f.useRef)(null);
            i[0] !== g || i[1] !== l || i[2] !== d || i[3] !== m || i[4] !== c || i[5] !== p || i[6] !== b ? (t = () => {
                let e = x.current;
                if (null == e) return;
                let t = w.current;
                if ((0, B.Ab)(p)) {
                    e.textContent = "", w.current = {
                        conversationId: l,
                        requestId: m ?? ("active-async-turn" === p || "active-tpp-turn" === p ? g?.requestId : null) ?? (t?.conversationId === l ? t.requestId : null)
                    };
                    return
                }
                b || (w.current = null, t?.conversationId === l && "idle" === p && g?.result === "completed" && g.requestId === t.requestId && null == c.get(B.D, l) && (e.textContent = d.formatMessage({
                    id: "chatgptConversations.responseComplete",
                    defaultMessage: "Response complete",
                    description: "Polite screen-reader announcement after the ChatGPT response the user was waiting for finishes successfully"
                })))
            }, i[0] = g, i[1] = l, i[2] = d, i[3] = m, i[4] = c, i[5] = p, i[6] = b, i[7] = t) : t = i[7];
            let C = (0, f.useEffectEvent)(t);
            return (i[8] !== C ? (n = () => {
                C()
            }, i[8] = C, i[9] = n) : n = i[9], i[10] !== g || i[11] !== l || i[12] !== h || i[13] !== m || i[14] !== p || i[15] !== b ? (s = [l, p, m, g, b, h], i[10] = g, i[11] = l, i[12] = h, i[13] = m, i[14] = p, i[15] = b, i[16] = s) : s = i[16], (0, f.useEffect)(n, s), h) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, v.createPortal)((0, a.jsx)("span", {
                ref: x,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = o) : o = i[17], o) : null
        }
        var rc = n("n5iL"),
            rd = n("EFj1"),
            ru = n("iS3k"),
            rh = n("pDUk"),
            rp = n("GaCK"),
            rm = n("Dofq");
        let rg = (0, e0.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(284470), n.e(954111)]).then(n.bind(n, "YhBP"))).ChatGptThreadSummaryPanelBody, {
            fallback: (0, a.jsx)(ru.a.Content, {
                children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-0.5 px-5",
                    children: (0, a.jsx)("span", {
                        className: "select-none",
                        role: "status",
                        children: (0, a.jsx)(b.a, {
                            id: "chatgptConversations.summaryPanel.loading",
                            defaultMessage: "Loading summary…",
                            description: "Status shown in the Work task summary panel while its interface downloads"
                        })
                    })
                })
            }),
            errorFallback: (0, a.jsx)(ru.a.Content, {
                children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-0.5 px-5",
                    children: (0, a.jsx)("span", {
                        className: "select-none",
                        role: "status",
                        children: (0, a.jsx)(b.a, {
                            id: "chatgptConversations.summaryPanel.loadError",
                            defaultMessage: "Summary could not load. Reload the app to try again",
                            description: "Recovery instructions in the Work task summary panel after its interface fails to download; closing the panel does not retry"
                        })
                    })
                })
            })
        });

        function rf(e) {
            let t, n, s, o = (0, r.c)(6);
            o[0] !== e ? ({
                readData: n,
                ...t
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]);
            let i = (0, ru.b)(),
                [l, c] = (0, f.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), o[3] !== l || o[4] !== t ? (s = null == l ? null : (0, a.jsx)(rg, {
                ...t,
                data: l.data
            }), o[3] = l, o[4] = t, o[5] = s) : s = o[5], s
        }

        function rv(e) {
            let t, n, s, o = (0, r.c)(15),
                {
                    conversationId: i,
                    composerActions: l,
                    readData: c,
                    display: d,
                    shouldBlockExternalEgress: h,
                    showSources: p
                } = e,
                m = void 0 === p || p,
                g = (0, u.y)(F.a),
                f = (0, er.h)("2903661647"),
                v = f ? "dynamic-isle" : "summary";
            return o[0] !== g || o[1] !== v ? (t = {
                scope: g,
                layout: v
            }, o[0] = g, o[1] = v, o[2] = t) : t = o[2], o[3] !== l || o[4] !== i || o[5] !== f || o[6] !== c || o[7] !== h || o[8] !== m ? (n = (0, a.jsx)(rf, {
                conversationId: i,
                composerActions: l,
                readData: c,
                isUnifiedDynamicIsleEnabled: f,
                showSources: m,
                shouldBlockExternalEgress: h
            }, i), o[3] = l, o[4] = i, o[5] = f, o[6] = c, o[7] = h, o[8] = m, o[9] = n) : n = o[9], o[10] !== d.shouldHideInlineImmediately || o[11] !== d.shouldShow || o[12] !== t || o[13] !== n ? (s = (0, a.jsx)(ru.a.Root, {
                analytics: t,
                shouldHideInlineImmediately: d.shouldHideInlineImmediately,
                shouldShow: d.shouldShow,
                children: n
            }), o[10] = d.shouldHideInlineImmediately, o[11] = d.shouldShow, o[12] = t, o[13] = n, o[14] = s) : s = o[14], s
        }

        function ry(e) {
            let t, n, s, o = (0, r.c)(22),
                {
                    conversationId: i,
                    composerActions: l,
                    controlledState: c,
                    readData: d,
                    shouldBlockExternalEgress: h,
                    showSources: p
                } = e,
                m = void 0 === p || p,
                g = (0, u.y)(F.a),
                v = (0, f.useContext)(es.a),
                b = (0, y.a)(),
                x = (0, er.h)("2903661647"),
                w = (0, u.z)(null == c ? np.N : null);
            o[0] !== c?.isOpen || o[1] !== w ? (t = c?.isOpen ?? (0, np.z)(w, !0), o[0] = c?.isOpen, o[1] = w, o[2] = t) : t = o[2];
            let C = t,
                _ = (0, u.z)(rp.b),
                S = c?.isOpen ?? _.isPopoverOpen,
                j = (0, u.x)(rc.f, "togglePinnedSummary");
            (0, t4.b)(g), o[3] !== c || o[4] !== g ? (n = () => {
                null != c ? c.onOpenChange(!c.isOpen) : (0, rm.b)(g)
            }, o[3] = c, o[4] = g, o[5] = n) : n = o[5];
            let I = n;
            return (0, rd.a)("togglePinnedSummary", I), o[6] !== l || o[7] !== v || o[8] !== c || o[9] !== i || o[10] !== b || o[11] !== C || o[12] !== S || o[13] !== x || o[14] !== _.displayMode || o[15] !== d || o[16] !== g || o[17] !== j || o[18] !== h || o[19] !== m || o[20] !== I ? (s = (0, a.jsx)(T.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                order: 250,
                children: "overlay" === _.displayMode ? (0, a.jsx)(rh.a, {
                    isOpen: S,
                    shouldPreventAutoFocus: c?.shouldPreventAutoFocus,
                    onOpenChange: e => {
                        null != c ? c.onOpenChange(e) : g.set(rp.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                            ...t,
                            isPopoverOpen: e
                        })
                    },
                    trigger: (0, a.jsx)(ru.a.HeaderButton, {
                        analytics: {
                            scope: g
                        },
                        label: b.formatMessage({
                            id: "chatgptConversations.summaryPanel.toggle",
                            defaultMessage: "Toggle summary",
                            description: "Button label for toggling the ChatGPT summary panel"
                        }),
                        pressed: S,
                        shortcut: j
                    }),
                    children: null != d ? (0, a.jsx)(es.a, {
                        value: v,
                        children: (0, a.jsx)(ru.a.PopoverContent, {
                            analytics: {
                                scope: g,
                                layout: x ? "dynamic-isle" : "summary"
                            },
                            children: (0, a.jsx)(rf, {
                                conversationId: i,
                                composerActions: l,
                                readData: d,
                                isUnifiedDynamicIsleEnabled: x,
                                showSources: m,
                                shouldBlockExternalEgress: h
                            }, i)
                        })
                    }) : null
                }) : (0, a.jsx)(ru.a.HeaderButton, {
                    analytics: {
                        scope: g
                    },
                    label: b.formatMessage({
                        id: "chatgptConversations.summaryPanel.togglePinned",
                        defaultMessage: "Toggle pinned summary",
                        description: "Button label for toggling whether the ChatGPT summary panel reserves layout space"
                    }),
                    pressed: C,
                    shortcut: j,
                    onClick: I
                })
            }), o[6] = l, o[7] = v, o[8] = c, o[9] = i, o[10] = b, o[11] = C, o[12] = S, o[13] = x, o[14] = _.displayMode, o[15] = d, o[16] = g, o[17] = j, o[18] = h, o[19] = m, o[20] = I, o[21] = s) : s = o[21], s
        }
        var rb = n("JjRy"),
            rx = n.n(rb),
            rw = n("G4E3"),
            rC = n("KaH3"),
            r_ = n("Yz3b"),
            rS = n("ghNX"),
            rj = n("KvVi"),
            rI = n("m250"),
            rT = n("Ng4B"),
            rE = n("bTKb"),
            rP = n("dGDB"),
            rA = n("lIsV");

        function rM(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        var rk = n("JlMc"),
            rR = n("TUMj"),
            rN = n("f6KK"),
            rO = n("JPXZ"),
            rB = n("zWHk");

        function rF(e) {
            let t, n, a, s, o, i, l, c = (0, r.c)(34),
                {
                    composerController: d,
                    enabled: u
                } = e,
                h = (0, x.Y)(),
                p = (0, x._)();
            if (c[0] !== h.search) {
                let e = new URLSearchParams(h.search);
                t = e.get("prompt"), n = e.get("promptSource"), c[0] = h.search, c[1] = t, c[2] = n
            } else t = c[1], n = c[2];
            let m = n,
                g = h.key,
                v = (0, f.useRef)(null);
            c[3] !== h.hash || c[4] !== h.pathname || c[5] !== h.search || c[6] !== h.state || c[7] !== g || c[8] !== p ? (a = e => {
                let t = new URLSearchParams(h.search);
                t.delete("prompt"), t.delete("promptSource"), p({
                    pathname: h.pathname,
                    search: t.toString(),
                    hash: h.hash
                }, {
                    replace: !0,
                    state: {
                        ...h.state,
                        consumedUrlPromptKey: g,
                        ...e && "widget" === t.get("site_edit_source") ? {
                            siteEditSource: "widget"
                        } : void 0
                    }
                })
            }, c[3] = h.hash, c[4] = h.pathname, c[5] = h.search, c[6] = h.state, c[7] = g, c[8] = p, c[9] = a) : a = c[9];
            let y = (0, f.useEffectEvent)(a);
            return c[10] !== y || c[11] !== d || c[12] !== u || c[13] !== g || c[14] !== t ? (s = () => {
                if (!u && t && v.current !== g) return (0, rB.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(g) && y(!1)
                })
            }, c[10] = y, c[11] = d, c[12] = u, c[13] = g, c[14] = t, c[15] = s) : s = c[15], c[16] !== d || c[17] !== u || c[18] !== g || c[19] !== t ? (o = [d, u, g, t], c[16] = d, c[17] = u, c[18] = g, c[19] = t, c[20] = o) : o = c[20], (0, f.useLayoutEffect)(s, o), c[21] !== y || c[22] !== d || c[23] !== u || c[24] !== g || c[25] !== t || c[26] !== m ? (i = () => {
                if (!u || !t || v.current === g) return;
                v.current = g;
                let e = d.consumeLocationPromptPrefill(g);
                if (y(e), !e) return;
                let {
                    view: n
                } = d, a = t.replace(/\r\n/g, "\n"), r = "codex-app" === m ? (0, rO.f)({
                    schema: n.state.schema,
                    text: a,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, rO.e)({
                    schema: n.state.schema,
                    text: a
                }), s = n.state.tr.replaceWith(0, n.state.doc.content.size, r.content);
                s.setSelection(rN.h.atEnd(s.doc)), n.dispatch(s)
            }, c[21] = y, c[22] = d, c[23] = u, c[24] = g, c[25] = t, c[26] = m, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== g || c[31] !== t || c[32] !== m ? (l = [d, u, g, t, m], c[28] = d, c[29] = u, c[30] = g, c[31] = t, c[32] = m, c[33] = l) : l = c[33], (0, f.useLayoutEffect)(i, l), null
        }
        var rz = n("MM0V");

        function rG(e) {
            let t, n, s, o, i, l = (0, r.c)(11),
                {
                    canConvert: c,
                    isChatInstantAvailable: d,
                    isConverting: u,
                    onConvert: h
                } = e;
            l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(b.a, {
                id: "chatgptConversations.workOnlyConversion.title",
                defaultMessage: "Continue in Work",
                description: "Banner title shown in a disabled historical Chat conversation for a Work-only member in Codex Desktop"
            }), l[0] = t) : t = l[0], l[1] !== d ? (n = d ? (0, a.jsx)(b.a, {
                id: "chatgptConversations.workOnlyConversion.instantDescription",
                defaultMessage: "Move this chat to Work to use agentic tools and take on more complex tasks. You can still use chat instant for quick questions",
                description: "Banner description shown for a Chat Instant conversation when a Work-only member can continue using Chat Instant in Codex Desktop"
            }) : (0, a.jsx)(b.a, {
                id: "chatgptConversations.workOnlyConversion.description",
                defaultMessage: "Move this chat to Work to use agentic tools and take on more complex tasks",
                description: "Banner description shown when a Work-only member cannot continue a historical Chat conversation in Codex Desktop"
            }), l[1] = d, l[2] = n) : n = l[2];
            let p = !c;
            return l[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(b.a, {
                id: "chatgptConversations.workOnlyConversion.action",
                defaultMessage: "Convert to Work",
                description: "Button that converts a disabled historical Chat conversation to Work in Codex Desktop"
            }), l[3] = s) : s = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (o = (0, a.jsx)(e$.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: s
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = o) : o = l[7], l[8] !== n || l[9] !== o ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(rz.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: o
                })
            }), l[8] = n, l[9] = o, l[10] = i) : i = l[10], i
        }
        var rL = n("pgeU");
        let rD = (0, e0.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function rH(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, u.y)(ea.a),
                c = (0, u.x)(rL.a, i);
            return o[0] !== i || o[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(rL.a, i);
                        null != e && (0, rL.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], o[0] = i, o[1] = l, o[2] = t, o[3] = n) : (t = o[2], n = o[3]), (0, f.useEffect)(t, n), o[4] !== i || o[5] !== c ? (s = null == c ? null : (0, a.jsx)(rD, {
                conversationId: i,
                effect: c
            }, c.id), o[4] = i, o[5] = c, o[6] = s) : s = o[6], s
        }
        var rW = n("fr5e"),
            rq = n("V8xe"),
            rK = n("LEgg");
        let rU = (0, e0.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function rV(e) {
            let t, n, s = (0, r.c)(6),
                {
                    conversationId: o,
                    scheduledAutomationId: i
                } = e,
                l = (0, er.h)("3901104270");
            return s[0] !== o || s[1] !== l || s[2] !== i ? (t = l && null != i ? (0, a.jsx)(rU, {
                conversationId: o,
                automationId: i
            }) : null, s[0] = o, s[1] = l, s[2] = i, s[3] = t) : t = s[3], s[4] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), s[4] = t, s[5] = n) : n = s[5], n
        }
        var rQ = n("Bs4i"),
            r$ = n("Qgfj"),
            rY = n("rmk3"),
            rX = n("f38C"),
            rJ = n("MRlq"),
            rZ = n("sqqv"),
            r0 = n("fQbA"),
            r1 = n("dDDU"),
            r2 = n("soaw"),
            r3 = n("ZrYB"),
            r4 = n("X6Vn"),
            r5 = n("Kwur"),
            r6 = n("eKlv"),
            r7 = n("MYlA"),
            r8 = n("JCtZ"),
            r9 = n("g2p6"),
            se = n("oaTv"),
            st = n("PME0"),
            sn = n("lgcP"),
            sa = n("AcSY"),
            sr = n("w7E5"),
            ss = n("QmkR"),
            so = n("xEXG"),
            si = n("J6LI"),
            sl = n("lUUH"),
            sc = n("ftAl");

        function sd(e) {
            let t, n, s, o = (0, r.c)(17),
                {
                    children: i,
                    conversationId: l,
                    getBaseItems: c,
                    menuTriggerRef: d,
                    navigate: h,
                    onBeforeOpen: p,
                    renderDropdown: m
                } = e,
                g = (0, u.y)(ea.a),
                {
                    data: f
                } = (0, sa.i)(),
                v = (0, so.b)();
            return o[0] !== f || o[1] !== l || o[2] !== c || o[3] !== d || o[4] !== h || o[5] !== v || o[6] !== g ? (t = () => {
                let e = g.get(sc.a, l, {
                        enabled: !1
                    }),
                    t = (0, e8.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : g.query.getData(eK.b, t);
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
                    } = e, c = (0, e8.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(sr.a), u = t.get(ss.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, m = a?.conversation_origin === "tpp" || a?.conversation_origin === "flora", g = "allowed" === o || m && h?.pages.some(e => null != e.cursor) === !0, f = t.get(ss.h, n);
                    return null == s || null == a || t.get(ss.g, n) || (0, si.c)(a, r).sourceUnavailable || null == (0, si.b)(t, a, f, !1) || null != c && null == r || null == h || 0 === p && !g ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: sm.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, sl.b)({
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
                    conversationId: l,
                    conversation: e,
                    project: n,
                    account: f,
                    projectCrudStatus: v,
                    navigate: h,
                    onCreateProjectDialogCloseAutoFocus: e => {
                        e.preventDefault(), d.current?.focus({
                            preventScroll: !0
                        })
                    }
                }))
            }, o[0] = f, o[1] = l, o[2] = c, o[3] = d, o[4] = h, o[5] = v, o[6] = g, o[7] = t) : t = o[7], o[8] !== l || o[9] !== p || o[10] !== g ? (n = async () => {
                await Promise.all([(async () => {
                    let e = g.get(n9.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await g.query.getOrFetch(n9.chatGptConversationQueryById$, l).catch(sp), null == g.query.getData(n9.chatGptConversationQueryById$, l) && await g.query.getOrFetch(ss.j, [l]).catch(sh)
                })(), p?.()]);
                let e = g.get(sc.a, l, {
                    enabled: !1
                });
                (0, e8.a)(e?.gizmo_id) && e?.gizmo_id != null && await g.query.getOrFetch(eK.b, e.gizmo_id).catch(su)
            }, o[8] = l, o[9] = p, o[10] = g, o[11] = n) : n = o[11], o[12] !== i || o[13] !== m || o[14] !== t || o[15] !== n ? (s = (0, a.jsx)(rY.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                renderItem: r0.b,
                renderDropdown: m,
                trigger: "click",
                children: i
            }), o[12] = i, o[13] = m, o[14] = t, o[15] = n, o[16] = s) : s = o[16], s
        }

        function su() {}

        function sh() {}

        function sp() {}
        let sm = (0, r$.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}",
                description: "Name of a ChatGPT project offered as a destination for moving a conversation or Work task"
            }
        });

        function sg(e) {
            let t, s, o, i, l, c, d, h, p, m, g, v, b, w, C, _, I, T, E = (0, r.c)(72),
                {
                    isTitleMenu: P,
                    triggerButton: A,
                    renderDropdown: M,
                    conversationOrigin: R,
                    conversationId: N,
                    title: O,
                    isHandoffPending: B,
                    isArchived: z,
                    isChatConversation: G,
                    onHandoff: L,
                    onOpenMessage: D,
                    projectId: H,
                    projectName: W,
                    serverConversationId: q
                } = e,
                K = void 0 !== P && P,
                U = (0, u.y)(F.a),
                V = (0, u.y)(ea.a),
                Q = (0, r2.a)(),
                $ = (0, er.k)();
            E[0] !== $ ? (t = $.checkGate("224248639"), E[0] = $, E[1] = t) : t = E[1];
            let Y = t;
            E[2] !== $ ? (s = $.getLayer("3017902351").get("web_file_library_enabled", !1), E[2] = $, E[3] = s) : s = E[3];
            let X = s,
                J = Y || X;
            E[4] !== J ? (o = {
                enabled: J
            }, E[4] = J, E[5] = o) : o = E[5];
            let {
                data: Z
            } = (0, u.z)(r9.p, o), ee = J && Z?.fileLibraryEnabledForRegistrationCountry !== !1, en = (0, y.a)(), es = (0, x._)(), [eo, ei] = (0, f.useState)(null), el = (0, f.useRef)(null), ec = (0, f.useRef)(null);
            E[6] === Symbol.for("react.memo_cache_sentinel") ? (i = [], E[6] = i) : i = E[6];
            let ed = (0, f.useRef)(i);
            E[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                name: "chatgpt"
            }, E[7] = l) : l = E[7];
            let {
                isCapable: eu
            } = (0, u.x)(S.a, l), eh = (0, u.x)(ss.g, q);
            E[8] === Symbol.for("react.memo_cache_sentinel") ? (c = () => ei("shortcut"), E[8] = c) : c = E[8];
            let ep = G && !eh;
            E[9] !== U || E[10] !== q ? (d = () => (0, n7.a)(U.query.getData(n9.chatGptConversationQueryById$, q), U.get(k.h), U.get(k.g)), E[9] = U, E[10] = q, E[11] = d) : d = E[11], E[12] !== ep || E[13] !== d ? (h = {
                enabled: ep,
                isActive: d
            }, E[12] = ep, E[13] = d, E[14] = h) : h = E[14], (0, rd.a)("deleteChat", c, h), E[15] !== V || E[16] !== eh || E[17] !== es || E[18] !== U || E[19] !== q ? (p = e => {
                !eh && (0, n7.a)(U.query.getData(n9.chatGptConversationQueryById$, q), U.get(k.h), U.get(k.g)) && (ei(null), (0, sn.a)(V, q, e), es("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, E[15] = V, E[16] = eh, E[17] = es, E[18] = U, E[19] = q, E[20] = p) : p = E[20];
            let em = p;
            E[21] !== en ? (m = en.formatMessage(sb.chatActions), E[21] = en, E[22] = m) : m = E[22];
            let eg = m;
            E[23] !== U || E[24] !== q ? (g = async () => {
                let e = [];
                ed.current = e, e.push(...await async function(e, t) {
                    let a = await r5.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        }
                    }).catch(() => null);
                    return a?.can_share && 0 !== a.av_sessions.length ? [{
                        id: "share-live-session",
                        icon: ah.cj,
                        message: (0, r$.e)({
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
                                (0, r4.f)(e, r, {
                                    conversationId: t,
                                    sessions: a.av_sessions
                                })
                            })
                        }
                    }] : []
                }(U, q))
            }, E[23] = U, E[24] = q, E[25] = g) : g = E[25];
            let ef = g;
            E[26] !== N || E[27] !== R || E[28] !== ee || E[29] !== en || E[30] !== eh || E[31] !== z || E[32] !== B || E[33] !== Q || E[34] !== K || E[35] !== es || E[36] !== L || E[37] !== D || E[38] !== H || E[39] !== W || E[40] !== U || E[41] !== q || E[42] !== $ || E[43] !== O ? (v = e => {
                let t = U.get(k.f),
                    a = U.get(k.k),
                    r = U.query.getData(n9.chatGptConversationQueryById$, q),
                    s = U.get(k.h),
                    o = U.get(k.g),
                    i = (0, n7.a)(r, s, o),
                    l = (0, r6.b)(U, q),
                    c = !eh && (0, n7.a)(l, s, o),
                    d = U.get(j.b).pathname,
                    u = () => Q() && d === U.get(j.b).pathname && t === U.get(k.f) && a === U.get(k.k),
                    h = (0, se.a)(U, N, R, () => (0, st.a)(es)),
                    p = [];
                return $.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && p.push({
                    id: "chatgpt-audio-summary",
                    message: (0, r$.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary",
                        description: "Opens the dialog for generating and listening to an audio summary of the current chat"
                    }),
                    icon: ah.sg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
                        })().then(e => {
                            u() && e(U, q)
                        }).catch(() => {
                            u() && (el.current?.focus({
                                preventScroll: !0
                            }), U.get(et.f).danger(en.formatMessage({
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
                }), ee && p.unshift({
                    id: "chatgpt-conversation-files",
                    message: (0, r$.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat",
                        description: "Opens the side panel listing files referenced in the active saved ChatGPT conversation, even when the list is empty"
                    }),
                    icon: ah.sb,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(368308).then(n.bind(n, "LFUX"))).openConversationFiles
                        })().then(e => {
                            u() && e(U, {
                                conversationId: N,
                                serverConversationId: q,
                                onOpenMessage: D
                            })
                        }).catch(() => {
                            u() && U.get(et.f).danger(en.formatMessage({
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
                }), p.push(...(0, r1.a)(U)), (0, r8.a)(U, {
                    organizationItems: (0, r0.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: ed.current,
                    viewItems: p,
                    feedbackItems: [],
                    preferenceItems: null == h ? [] : [h],
                    surface: "header",
                    isTitleMenu: K,
                    conversationId: q,
                    stateConversationId: N,
                    conversationOrigin: R,
                    title: O,
                    isHandoffPending: B,
                    canHandoff: null != L,
                    onHandoff: L,
                    projectId: H,
                    projectName: W,
                    onRename: (0, n7.b)(r, s, o, eh) ? () => void(0, r6.renameActiveChatGptConversation)(U, N) : void 0,
                    isPinned: U.get(ss.h, q) ?? l?.is_starred === !0,
                    onTogglePin: c ? () => {
                        let e = (0, r6.b)(U, q);
                        !(null == e || U.get(ss.g, q)) && (0, n7.a)(e, U.get(k.h), U.get(k.g)) && (0, ss.V)({
                            scope: U,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(sf)
                    } : void 0,
                    onArchive: !i || eh || z ? void 0 : () => (0, r3.a)(U, q),
                    onUnarchive: i && !eh && z ? () => {
                        (0, ss.W)({
                            scope: U,
                            conversationId: q
                        }).then(() => {
                            U.get(et.f).success(en.formatMessage(rJ.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            U.get(et.f).danger(en.formatMessage(am.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !i || eh ? void 0 : () => ei("menu")
                })
            }, E[26] = N, E[27] = R, E[28] = ee, E[29] = en, E[30] = eh, E[31] = z, E[32] = B, E[33] = Q, E[34] = K, E[35] = es, E[36] = L, E[37] = D, E[38] = H, E[39] = W, E[40] = U, E[41] = q, E[42] = $, E[43] = O, E[44] = v) : v = E[44];
            let ev = v;
            if (null != A) {
                let e;
                E[45] !== A ? (e = (0, a.jsx)(rQ.b, {
                    ref: el,
                    children: A
                }), E[45] = A, E[46] = e) : e = E[46], b = e
            } else if (K) {
                let e;
                E[47] !== O ? (e = (0, a.jsx)(rZ.a, {
                    ref: el,
                    title: O
                }), E[47] = O, E[48] = e) : e = E[48], b = e
            } else {
                let e;
                E[49] !== eg ? (e = (0, a.jsx)(rX.a, {
                    ref: el,
                    className: "no-drag",
                    label: eg,
                    size: "toolbar"
                }), E[49] = eg, E[50] = e) : e = E[50], b = e
            }
            E[51] !== ev || E[52] !== b || E[53] !== es || E[54] !== eu || E[55] !== ef || E[56] !== M || E[57] !== q ? (w = eu ? (0, a.jsx)(sd, {
                conversationId: q,
                getBaseItems: ev,
                menuTriggerRef: el,
                navigate: es,
                onBeforeOpen: ef,
                renderDropdown: M,
                children: b
            }) : (0, a.jsx)(rY.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => ev(),
                onBeforeOpen: ef,
                renderItem: r0.b,
                renderDropdown: M,
                trigger: "click",
                children: b
            }), E[51] = ev, E[52] = b, E[53] = es, E[54] = eu, E[55] = ef, E[56] = M, E[57] = q, E[58] = w) : w = E[58];
            let ey = "shortcut" === eo,
                eb = null != eo;
            return E[59] !== eo ? (C = () => {
                ec.current = "menu" === eo ? el.current : null, ei(null)
            }, E[59] = eo, E[60] = C) : C = E[60], E[61] === Symbol.for("react.memo_cache_sentinel") ? (_ = e => {
                let t = ec.current;
                if (ec.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, E[61] = _) : _ = E[61], E[62] !== em || E[63] !== eh || E[64] !== ey || E[65] !== eb || E[66] !== C || E[67] !== O ? (I = (0, a.jsx)(r7.a, {
                allowArtifactDeletion: !0,
                autoFocusConfirm: ey,
                open: eb,
                onOpenChange: C,
                onCloseAutoFocus: _,
                isDeleting: eh,
                onConfirm: em,
                title: O
            }), E[62] = em, E[63] = eh, E[64] = ey, E[65] = eb, E[66] = C, E[67] = O, E[68] = I) : I = E[68], E[69] !== w || E[70] !== I ? (T = (0, a.jsxs)(a.Fragment, {
                children: [w, I]
            }), E[69] = w, E[70] = I, E[71] = T) : T = E[71], T
        }

        function sf() {}

        function sv() {
            let e, t, n = (0, r.c)(4),
                s = (0, y.a)();
            n[0] !== s ? (e = s.formatMessage(sb.more), n[0] = s, n[1] = e) : e = n[1];
            let o = e;
            return n[2] !== o ? (t = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rY.a, {
                    preserveBrowserContextMenu: !0,
                    getItems: sy,
                    renderItem: r0.b,
                    trigger: "click",
                    children: (0, a.jsx)(rX.a, {
                        className: "no-drag",
                        label: o,
                        size: "toolbar"
                    })
                })
            }), n[2] = o, n[3] = t) : t = n[3], t
        }

        function sy() {
            return (0, r0.a)([])
        }
        let sb = (0, r$.f)({
            chatActions: {
                id: "chatgpt.conversation.header.control.actions.label",
                defaultMessage: "Chat actions",
                description: "Accessible name for the icon-only menu of actions for the current chat in the conversation header. Keep this action label concise."
            },
            more: {
                id: "chatgpt.conversation.header.control.more.label",
                defaultMessage: "More",
                description: "Accessible label for the icon-only overflow control in the active ChatGPT conversation header. It opens additional actions for the current chat. Sibling header controls include Share. Keep this single word concise and do not add punctuation. No placeholders."
            }
        });
        var sx = n("dLcZ"),
            sw = n("W5pg"),
            sC = n("I7bK"),
            s_ = n("QcW8"),
            sS = n("yC2B");

        function sj(e) {
            let t, n, s, o, c, d, h, p, m, g = (0, r.c)(30),
                {
                    header: f,
                    courseShortcut: v,
                    progress: b
                } = e,
                {
                    titleBarLeftInset: x,
                    rightPanelAnimatedWidth: w,
                    isContentFullWidth: C
                } = (0, sC.g)(),
                _ = (0, u.z)(s_.ab),
                S = (0, u.z)(s_.cb),
                j = (0, y.a)();
            g[0] !== j.locale ? (t = (0, sS.a)(j.locale), g[0] = j.locale, g[1] = t) : t = g[1];
            let I = t,
                E = _?.mode === "split" && "left" === S != ("rtl" === I);
            g[2] !== E || g[3] !== C ? (n = e => E && !C ? e : 0, g[2] = E, g[3] = C, g[4] = n) : n = g[4];
            let P = (0, sw.a)(w, n);
            g[5] !== P || g[6] !== x ? (s = [x, P], g[5] = P, g[6] = x, g[7] = s) : s = g[7];
            let A = (0, sw.a)(s, sI);
            g[8] !== A || g[9] !== P ? (o = {
                "--learning-header-left-inset": A,
                insetInlineStart: P
            }, g[8] = A, g[9] = P, g[10] = o) : o = g[10];
            let M = o,
                k = null;
            g[11] !== v ? (c = null == v ? null : (0, a.jsx)("div", {
                className: "flex min-w-0 flex-1",
                children: v
            }), g[11] = v, g[12] = c) : c = g[12], g[13] !== k || g[14] !== c ? (d = (0, a.jsxs)("div", {
                className: "flex w-full min-w-0 items-center gap-toolbar-action",
                children: [k, c]
            }), g[13] = k, g[14] = c, g[15] = d) : d = g[15];
            let R = d;
            if (null == b) return R;
            if (_?.isVisible && "full" === _.mode) {
                let e, t, n;
                return g[16] !== v ? (e = null == v ? null : (0, a.jsx)("div", {
                    className: "flex min-w-0 flex-1",
                    children: v
                }), g[16] = v, g[17] = e) : e = g[17], g[18] !== b ? (t = (0, a.jsx)("div", {
                    className: "min-w-0 flex-1",
                    children: b
                }), g[18] = b, g[19] = t) : t = g[19], g[20] !== t || g[21] !== e ? (n = (0, a.jsx)(T.a.HeaderAction, {
                    actionId: "sectioned-conversation-navigation",
                    align: "center",
                    children: (0, a.jsxs)("div", {
                        className: "flex min-w-0 items-center gap-toolbar-action",
                        children: [e, t]
                    })
                }), g[20] = t, g[21] = e, g[22] = n) : n = g[22], n
            }
            return g[23] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, i.b)("relative flex max-w-[min(var(--learning-progress-max-width),max(0px,calc(100cqw-2*(var(--app-shell-header-end-actions-width)+var(--spacing)*3))))] min-w-0 items-center", "[--learning-progress-max-width:var(--thread-content-max-width)]", "@max-thread-expanded/home-mode-toggle:[--learning-progress-max-width:var(--thread-content-compact-max-width,var(--thread-content-max-width))]"), g[23] = h) : h = g[23], g[24] !== R ? (p = (0, a.jsx)("div", {
                className: "absolute inset-y-0 end-full me-toolbar-action flex w-[max(0px,calc((100cqw-100%)/2-var(--spacing-toolbar-action)-var(--spacing)*2-var(--learning-header-left-inset)))] min-w-0 items-center overflow-hidden",
                "data-app-shell-header-obstacle": !0,
                children: R
            }), g[24] = R, g[25] = p) : p = g[25], g[26] !== b || g[27] !== M || g[28] !== p ? (m = (0, a.jsx)(T.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                children: (0, a.jsxs)(l.a.div, {
                    className: h,
                    style: M,
                    children: [p, b]
                })
            }), g[26] = b, g[27] = M, g[28] = p, g[29] = m) : m = g[29], m
        }

        function sI(e) {
            let [t, n] = e;
            return `${Math.max(0,t-n)}px`
        }
        var sT = n("NVRI"),
            sE = n("WLgA");

        function sP(e) {
            let t, n, s = (0, r.c)(9),
                {
                    icon: o,
                    name: i,
                    projectId: l,
                    linkToProject: c
                } = e;
            s[0] !== o || s[1] !== c || s[2] !== i || s[3] !== l ? (t = c && null != i ? (0, a.jsx)(e$.b, {
                "aria-label": i,
                color: "ghostActive",
                size: "toolbar",
                to: (0, sE.c)(l),
                uniform: !0,
                children: o
            }) : null, s[0] = o, s[1] = c, s[2] = i, s[3] = l, s[4] = t) : t = s[4];
            let d = t,
                u = d ?? o,
                h = null != d;
            return s[5] !== i || s[6] !== u || s[7] !== h ? (n = (0, a.jsx)(sT.b, {
                project: {
                    icon: u,
                    iconInteractive: h,
                    name: i
                }
            }), s[5] = i, s[6] = u, s[7] = h, s[8] = n) : n = s[8], n
        }
        var sA = n("ftSl"),
            sM = n("u9Jt");

        function sk(e) {
            let t, n, s = (0, r.c)(12),
                {
                    conversationId: o,
                    canRename: i,
                    hasTitleMenu: l,
                    project: c,
                    title: d,
                    titleValue: h
                } = e,
                p = (0, u.y)(F.a),
                m = (0, y.a)();
            if (l) {
                let e;
                return s[0] !== c || s[1] !== d ? (e = (0, a.jsx)(sM.a, {
                    triggerButton: (0, a.jsx)(rZ.a, {
                        project: c,
                        title: d
                    })
                }), s[0] = c, s[1] = d, s[2] = e) : e = s[2], e
            }
            return s[3] !== i || s[4] !== o || s[5] !== m || s[6] !== p ? (t = i ? async e => {
                try {
                    await (0, r6.renameActiveChatGptConversation)(p, o, e)
                } catch (e) {
                    throw p.get(et.f).danger(m.formatMessage({
                        id: "chatgptConversations.header.renameFailed",
                        defaultMessage: "Couldn't rename this chat. Try again.",
                        description: "Error shown when saving an edited chat title fails"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.header.renameFailed"
                        }
                    }), e
                }
            }: void 0, s[3] = i, s[4] = o, s[5] = m, s[6] = p, s[7] = t) : t = s[7], s[8] !== t || s[9] !== d || s[10] !== h ? (n = (0, a.jsx)(sA.a, {
                className: "max-w-full",
                variant: "flush-start",
                title: d,
                titleValue: h,
                onRename: t
            }), s[8] = t, s[9] = d, s[10] = h, s[11] = n) : n = s[11], n
        }
        let sR = (0, u.c)(F.a, e => {
            let {
                get: t
            } = e, n = t(s_.ab);
            return !(n?.isVisible && "full" === n.mode)
        });
        var sN = n("X0li");
        let sO = (0, e0.a)(sN.d),
            sB = (0, e0.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            sF = (0, e0.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var sz = n("lX86"),
            sG = n("gCr7");
        n("i1of");
        var sL = n("a4V1"),
            sD = n("alJ6"),
            sH = n("u9iS"),
            sW = n("KidQ");
        let sq = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function sK(e) {
            let t, n, s, o, i, l = (0, r.c)(15),
                {
                    children: c,
                    draftKey: d,
                    enableInlineSystemHints: h
                } = e,
                p = (0, u.y)(ea.a),
                m = (0, f.useContext)(tl.a),
                g = h ? "chatgpt" : void 0;
            return l[0] !== h || l[1] !== g ? (t = {
                enableInlineSystemHints: h,
                variant: g
            }, l[0] = h, l[1] = g, l[2] = t) : t = l[2], l[3] !== d || l[4] !== p ? (n = () => ({
                defaultText: p.get(e6.t, d),
                defaultTextKind: "prompt"
            }), l[3] = d, l[4] = p, l[5] = n) : n = l[5], l[6] !== m ? (s = () => {
                let e = m?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == m ? null : {
                    element: e,
                    locationKey: m.locationKey
                }
            }, l[6] = m, l[7] = s) : s = l[7], l[8] !== c ? (o = e => null == e ? null : c(e), l[8] = c, l[9] = o) : o = l[9], l[10] !== t || l[11] !== n || l[12] !== s || l[13] !== o ? (i = (0, a.jsx)(sW.a, {
                controllerOptions: sq,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: s,
                children: o
            }), l[10] = t, l[11] = n, l[12] = s, l[13] = o, l[14] = i) : i = l[14], i
        }
        var sU = n("ygKd"),
            sV = n("KSir"),
            sQ = n("fNPc"),
            s$ = n("vVgo");
        let sY = (0, e0.a)(async () => (await n.e(777791).then(n.bind(n, "DGJb"))).CourseHeaderShortcut);

        function sX(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, er.h)("4035922817");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(sY, {
                    conversationId: s
                })
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        var sJ = n("T33u"),
            sZ = n("QPeR"),
            s0 = n("MgyE"),
            s1 = n("gyrn"),
            s2 = n("wnpN"),
            s3 = n("rcFj"),
            s4 = n("M3Kf");

        function s5(e) {
            let t, n, s, i, l, c, d = (0, r.c)(21),
                {
                    conversationId: h
                } = e,
                p = (0, u.y)(ea.a),
                m = (0, u.x)(B.j, h),
                g = (0, u.z)(eN.b),
                {
                    search: f
                } = (0, x.Y)();
            if (d[0] !== f) {
                let e = new URLSearchParams(f);
                t = e.get("messageId") ?? e.get("message"), n = e.has("selectedTextQuery"), d[0] = f, d[1] = t, d[2] = n
            } else t = d[1], n = d[2];
            let v = n;
            d[3] !== v || d[4] !== t || d[5] !== m ? (s = ["chatgpt-message-target", m, t, v], d[3] = v, d[4] = t, d[5] = m, d[6] = s) : s = d[6];
            let y = null != m && null != t && g > 0,
                w = v ? 0 : 1 / 0;
            d[7] !== h || d[8] !== v || d[9] !== t || d[10] !== p || d[11] !== m ? (i = async e => {
                let {
                    signal: n
                } = e;
                if (null != m) {
                    if (null != t && v) {
                        let e = p.get(B.M, h),
                            n = e?.[t] ?? (null == e ? void 0 : Object.values(e).find(e => e.message?.id === t));
                        if (n?.message != null) return !0
                    }
                    await (0, eR.a)(p, m, n)
                }
                return !0
            }, d[7] = h, d[8] = v, d[9] = t, d[10] = p, d[11] = m, d[12] = i) : i = d[12], d[13] !== s || d[14] !== y || d[15] !== w || d[16] !== i ? (l = {
                queryKey: s,
                enabled: y,
                staleTime: w,
                retry: !1,
                queryFn: i
            }, d[13] = s, d[14] = y, d[15] = w, d[16] = i, d[17] = l) : l = d[17];
            let {
                isError: C,
                refetch: _
            } = (0, o.a)(l);
            return d[18] !== C || d[19] !== _ ? (c = C ? (0, a.jsx)(e$.a, {
                color: "secondary",
                onClick: () => void _(),
                children: (0, a.jsx)(b.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message",
                    description: "Button to retry loading the full conversation for a link to an older message"
                })
            }) : null, d[18] = C, d[19] = _, d[20] = c) : c = d[20], c
        }
        var s6 = n("ckwE");

        function s7(e) {
            let t, n = (0, r.c)(3),
                {
                    children: s
                } = e,
                [o] = (0, f.useState)(s8);
            return n[0] !== o || n[1] !== s ? (t = (0, a.jsx)(eO.a, {
                value: o,
                children: s
            }), n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }

        function s8() {
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

        function s9(e) {
            let t, n = (0, r.c)(2),
                {
                    children: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(s6.a, {
                children: (0, a.jsx)(s7, {
                    children: s
                })
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var oe = n("TmaW"),
            ot = n("MDmT"),
            on = n("b6fw"),
            oa = n("K45w"),
            or = n("jCHb"),
            os = n("V8uZ");

        function oo(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var oi = n("NqfB"),
            ol = n("JEFL"),
            oc = n("moBM");
        let od = '[data-markdown-text-style="assistant-message"]',
            ou = (0, u.d)(ea.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(B.M, n)?.[a]?.message ?? null
            });

        function oh(e) {
            let t, n, s = (0, r.c)(5),
                o = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return s[0] !== e ? (t = t => (0, a.jsx)(op, {
                ...e,
                selection: t
            }), s[0] = e, s[1] = t) : t = s[1], s[2] !== o || s[3] !== t ? (n = (0, a.jsx)(oi.a, {
                align: "start",
                targetSelector: o,
                children: t
            }), s[2] = o, s[3] = t, s[4] = n) : n = s[4], n
        }

        function op(e) {
            let t, s, o, i, l, c, d, h = (0, r.c)(30),
                {
                    conversationId: p,
                    moreDetailsEnabled: m,
                    onAddSelectedText: g,
                    selection: f
                } = e,
                v = (0, u.y)(F.a),
                b = (0, y.a)(),
                x = (0, er.h)("4290238484"),
                w = (0, er.h)("473637331"),
                C = (0, u.z)(oc.a),
                _ = (0, u.x)(B.y, p);
            h[0] !== _ || h[1] !== C || h[2] !== v ? (t = C && "tpp" === _ && "chatgpt-thread" === v.value.routeKind && null == v.value.workSideChat && !0, h[0] = _, h[1] = C, h[2] = v, h[3] = t) : t = h[3];
            let S = t;
            h[4] !== p || h[5] !== f.selectionRange ? (s = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, s = a?.closest(od);
                if (n.collapsed || null == s || !s.isConnected || s !== r?.closest(od)) return null;
                let o = s.parentElement,
                    i = o?.getAttribute("data-chatgpt-selection-message-id");
                return !i || o?.getAttribute("data-chatgpt-selection-conversation-id") !== t || [...s.querySelectorAll('[data-writing-block-variant], [data-conversation-component="learning"], [contenteditable="true"], [data-markdown-copy="exclude"]')].some(e => n.intersectsNode(e)) ? null : {
                    markdownElement: s,
                    messageId: i
                }
            }({
                conversationId: p,
                range: f.selectionRange
            }), h[4] = p, h[5] = f.selectionRange, h[6] = s) : s = h[6];
            let j = s,
                I = j?.messageId ?? null;
            h[7] !== p || h[8] !== I ? (o = {
                conversationId: p,
                messageId: I
            }, h[7] = p, h[8] = I, h[9] = o) : o = h[9];
            let T = (0, u.x)(ou, o),
                E = (0, u.x)(B.j, p),
                P = x && m && null != E && null != j && T?.author.role === "assistant";
            return h[10] !== S || h[11] !== v ? (i = S ? e => {
                n.e(971224).then(n.bind(n, "f8of")).then(t => {
                    let {
                        createAndOpenWorkSideChat: n
                    } = t;
                    return n(v, {
                        target: "right",
                        selectedText: e
                    })
                })
            } : void 0, h[10] = S, h[11] = v, h[12] = i) : i = h[12], h[13] !== P || h[14] !== w || h[15] !== g || h[16] !== f.selectionRange || h[17] !== j ? (l = !P || w ? e => {
                g(e, j?.messageId, null == j ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of n1(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(j.markdownElement, f.selectionRange, e))
            } : void 0, h[13] = P, h[14] = w, h[15] = g, h[16] = f.selectionRange, h[17] = j, h[18] = l) : l = h[18], h[19] !== P || h[20] !== p || h[21] !== b || h[22] !== v || h[23] !== j ? (c = P ? e => {
                Promise.all([n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(882456), n.e(145049), n.e(744644), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(509282), n.e(523433), n.e(37774), n.e(282285)]).then(n.bind(n, "zRlR")).then(t => {
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
                        shouldBlockExternalEgress: v.get(eC.d, p),
                        sourceConversationId: p
                    })
                })
            } : void 0, h[19] = P, h[20] = p, h[21] = b, h[22] = v, h[23] = j, h[24] = c) : c = h[24], h[25] !== f.selectedText || h[26] !== i || h[27] !== l || h[28] !== c ? (d = (0, a.jsx)(ol.a, {
                conversationTerminology: "chat",
                selectedText: f.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), h[25] = f.selectedText, h[26] = i, h[27] = l, h[28] = c, h[29] = d) : d = h[29], d
        }
        var om = n("Fjze");

        function og(e) {
            let t, n, a, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = e,
                i = (0, u.y)(ea.a),
                l = null != o;
            s[0] !== i || s[1] !== o ? (t = () => {
                null != o && (r5.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: o
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(of), (0, el.a)(i, om.a, {
                    sharedConversationId: o
                }))
            }, s[0] = i, s[1] = o, s[2] = t) : t = s[2];
            let c = (0, f.useEffectEvent)(t);
            return s[3] !== c ? (n = () => {
                c()
            }, s[3] = c, s[4] = n) : n = s[4], s[5] !== l ? (a = [l], s[5] = l, s[6] = a) : a = s[6], (0, f.useEffect)(n, a), null
        }

        function of() {}
        var ov = n("GigQ"),
            oy = n("JKdL"),
            ob = n("d107"),
            ox = n("HOLv"),
            ow = n("FGv0"),
            oC = n("r9i9"),
            o_ = n("tdfh"),
            oS = n("SEBt"),
            oj = n("uQqo"),
            oI = n("yi1v"),
            oT = n("hMfc");

        function oE(e) {
            let t, s, o, i, l, c = (0, r.c)(12),
                {
                    data: d
                } = e,
                h = (0, u.y)(ea.a),
                p = (0, y.a)();
            c[0] !== p ? (t = p.formatMessage(am.a.headerShare), c[0] = p, c[1] = t) : t = c[1];
            let m = t,
                [g, v] = (0, f.useState)(!1);
            return c[2] !== d || c[3] !== g || c[4] !== h ? (s = () => {
                g || (v(!0), (async function(e, t) {
                    let a = t.sharedPost,
                        [r, ...s] = a?.attachments[0]?.kind === "media_generation" ? (0, oj.a)(a, (0, oj.b)(a)) : [],
                        o = crypto.randomUUID();
                    (0, oS.b)(e, {
                        attachmentType: t.attachmentType,
                        contentType: t.contentType,
                        shareId: t.shareId,
                        shareSessionId: o
                    });
                    let i = t.dialogProps.receiverShareLink;
                    if ((0, oI.a)() && null != i && ("conversation" === i.contentType || "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE" === t.attachmentType)) {
                        if ("unsupported" !== await (0, oI.b)(e, {
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
                        if ("conversation" === i.contentType) return void(0, r4.f)(e, o_.a, {
                            ...t.dialogProps,
                            shareSessionId: o
                        })
                    }
                    if (i?.contentType === "conversation") {
                        let a = (0, oS.a)(e, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                shareId: t.shareId,
                                shareSessionId: o,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                                usedExistingLink: !0,
                                omitSheetType: !0
                            }),
                            r = await (0, ow.a)(Promise.resolve(i.shareLinkUrl));
                        if (a({
                                result: r ? "link-copied" : "copy-failed",
                                shareId: t.shareId
                            }), r) {
                            let {
                                showConversationShareCopiedToast: t
                            } = await n.e(555532).then(n.bind(n, "euaP"));
                            t(e, null, !0 === i.isWorkspaceOnly)
                        } else(0, r4.f)(e, o_.a, {
                            ...t.dialogProps,
                            previewTurns: (0, oC.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId, 1 / 0),
                            recoveryShareLink: i,
                            shareSessionId: o
                        });
                        return
                    }(0, r4.f)(e, o_.a, {
                        ...t.dialogProps,
                        image: r?.src == null ? void 0 : {
                            alt: t.dialogProps.title ?? "",
                            item: r,
                            previewSrc: r.src,
                            additionalPublishedPreviewUrls: s.flatMap(e => null == e.src ? [] : [e.src])
                        },
                        previewTurns: null != r ? void 0 : (0, oC.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId, 1 / 0),
                        privacyNotices: (0, oC.k)({
                            conversation: t.conversation,
                            projectId: null
                        }),
                        shareSessionId: o
                    })
                })(h, d).finally(() => v(!1)))
            }, c[2] = d, c[3] = g, c[4] = h, c[5] = s) : s = c[5], c[6] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(ox.a, {
                asset: oT.a
            }), i = (0, a.jsx)(b.a, {
                ...am.a.headerShare
            }), c[6] = o, c[7] = i) : (o = c[6], i = c[7]), c[8] !== g || c[9] !== m || c[10] !== s ? (l = (0, a.jsxs)(e$.a, {
                "aria-label": m,
                color: "ghostActive",
                loading: g,
                size: "toolbar",
                onClick: s,
                children: [o, i]
            }), c[8] = g, c[9] = m, c[10] = s, c[11] = l) : l = c[11], l
        }
        var oP = n("JUxu");
        let oA = (0, f.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function oM(e) {
            let t, n, s, o, i = (0, r.c)(11),
                {
                    sharedConversationId: l
                } = e,
                c = (0, u.y)(ea.a),
                d = (0, u.x)(e_.f, (0, f.useContext)(M.a));
            if (null != d) {
                let e, t;
                return i[0] !== d ? (e = (0, e_.b)(d), i[0] = d, i[1] = e) : e = i[1], i[2] !== e ? (t = (0, a.jsx)(oP.a, {
                    imageOnly: e
                }), i[2] = e, i[3] = t) : t = i[3], t
            }
            return i[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("div", {
                className: "text-secondary",
                children: (0, a.jsx)(b.a, {
                    id: "chatgptConversations.sharedConversation.copyDisclaimer",
                    defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory.",
                    description: "Informational notice above a shared ChatGPT chat explaining that the copy will not be added to the viewer's memory"
                })
            }), i[4] = t) : t = i[4], i[5] !== c || i[6] !== l ? (n = e => {
                if (null == l) return;
                let t = e.currentTarget;
                (0, r4.f)(c, oA, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, oS.c)(c, l)
            }, i[5] = c, i[6] = l, i[7] = n) : n = i[7], i[8] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(b.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation",
                description: "Button above a shared ChatGPT conversation in Codex Desktop that opens ChatGPT's report modal for reporting another person's shared conversation"
            }), i[8] = s) : s = i[8], i[9] !== n ? (o = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(e$.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: s
                })]
            }), i[9] = n, i[10] = o) : o = i[10], o
        }
        var ok = n("zbjM"),
            oR = n("MVHH"),
            oN = n("xSOA"),
            oO = n("rhKI"),
            oB = n("PP3M"),
            oF = n("jAnS"),
            oz = n("CFOe"),
            oG = n("JNtf"),
            oL = n("mUDD");

        function oD(e) {
            let t, n, s, o, i, l, c, d, u, h, p, m, g, f = (0, r.c)(31),
                {
                    canSave: v,
                    isPending: y,
                    onCancel: x,
                    onClose: w,
                    onSave: C
                } = e;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(b.a, {
                id: "chatgptConversations.temporaryChat.save.close",
                defaultMessage: "Close",
                description: "Accessible label for the close button in the temporary chat save confirmation dialog."
            }), f[0] = t) : t = f[0], f[1] !== y || f[2] !== w ? (n = e => {
                e || y || w()
            }, f[1] = y, f[2] = w, f[3] = n) : n = f[3];
            let _ = !y;
            f[4] !== v || f[5] !== C ? (s = e => {
                e.preventDefault(), v && C()
            }, f[4] = v, f[5] = C, f[6] = s) : s = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(oG.d, {
                children: (0, a.jsx)(b.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?",
                    description: "Title of the confirmation dialog for converting a temporary ChatGPT conversation into a regular saved chat."
                })
            }), f[7] = o) : o = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(oL.e, {
                children: (0, a.jsx)(oL.d, {
                    className: "select-none",
                    title: o,
                    subtitle: (0, a.jsx)(oG.c, {
                        children: (0, a.jsx)(b.a, {
                            id: "chatgptConversations.temporaryChat.save.description.regularChatSettings",
                            defaultMessage: "This chat will now be included in your history. It will follow your memory and model training settings used for regular chats.",
                            description: "Body of the confirmation dialog shown when a user saves a temporary ChatGPT conversation. Explains before they confirm that the chat will appear in history and follow the memory and model training settings already configured for regular chats."
                        })
                    })
                })
            }), f[8] = i) : i = f[8], f[9] !== x || f[10] !== w ? (l = () => {
                x?.(), w()
            }, f[9] = x, f[10] = w, f[11] = l) : l = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(b.a, {
                id: "chatgptConversations.temporaryChat.save.cancel",
                defaultMessage: "Cancel",
                description: "Secondary button that closes the save confirmation dialog and leaves the ChatGPT conversation temporary."
            }), f[12] = c) : c = f[12], f[13] !== y || f[14] !== l ? (d = (0, a.jsx)(e$.a, {
                color: "secondary",
                disabled: y,
                onClick: l,
                children: c
            }), f[13] = y, f[14] = l, f[15] = d) : d = f[15];
            let S = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(b.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save",
                description: "Primary button that saves a temporary ChatGPT conversation to regular chat history."
            }), f[16] = u) : u = f[16], f[17] !== y || f[18] !== S ? (h = (0, a.jsx)(e$.a, {
                color: "primary",
                disabled: S,
                loading: y,
                type: "submit",
                children: u
            }), f[17] = y, f[18] = S, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(oL.e, {
                children: (0, a.jsxs)(oL.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== s ? (m = (0, a.jsxs)(oL.b, {
                as: "form",
                onSubmit: s,
                children: [i, p]
            }), f[23] = p, f[24] = s, f[25] = m) : m = f[25], f[26] !== y || f[27] !== m || f[28] !== n || f[29] !== _ ? (g = (0, a.jsx)(oG.a, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: _,
                size: "narrow",
                children: m
            }), f[26] = y, f[27] = m, f[28] = n, f[29] = _, f[30] = g) : g = f[30], g
        }

        function oH(e) {
            (0, n9.e)(e).catch(() => {
                nj.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function oW(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(oq, {
                        conversationId: s
                    })
                })]
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function oq(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return (0, u.z)(oB.e) ? (n[0] !== s ? (t = (0, a.jsx)(oK, {
                conversationId: s
            }), n[0] = s, n[1] = t) : t = n[1], t) : null
        }

        function oK(e) {
            let t, n, s, o, i, l, c, d, h, p, m, g, v, w = (0, r.c)(49),
                {
                    conversationId: C
                } = e,
                _ = (0, u.y)(ea.a),
                S = (0, y.a)(),
                j = (0, x._)(),
                [I, T] = (0, f.useState)(!1),
                [E, P] = (0, f.useState)(!1),
                [A, M] = (0, f.useState)(!1),
                [k, R] = (0, f.useState)(!1),
                N = (0, f.useRef)(!1),
                O = (0, u.z)(r9.p).data,
                F = (0, u.x)(B.j, C),
                z = (0, u.x)(B.X, C),
                G = (0, u.x)(B.I, C),
                L = (0, u.x)(e6.j, C);
            w[0] !== C || w[1] !== _ ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (_.get(B.I, C) || _.get(e6.j, C) || t !== _.get(B.j, C) || n !== _.get(B.X, C)) throw Error("Cannot save an unavailable temporary chat message");
                    return r5.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: oY
                    }).then(o$)
                },
                retry: oQ
            }, w[0] = C, w[1] = _, w[2] = t) : t = w[2];
            let {
                mutateAsync: D,
                isPending: H
            } = (0, oN.a)(t), W = null != F && null != z && !G && !L && !H && !E;
            w[3] !== S ? (n = S.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat",
                description: "Tooltip and accessible label for the bookmark button in a temporary ChatGPT conversation. Opens a confirmation dialog to save it to regular history."
            }), w[3] = S, w[4] = n) : n = w[4];
            let q = n;
            w[5] !== O?.eligibleAnnouncements ? (s = O?.eligibleAnnouncements?.includes(r9.h), w[5] = O?.eligibleAnnouncements, w[6] = s) : s = w[6];
            let K = !0 === s,
                U = !k && (A || K && W);
            w[7] !== C || w[8] !== A || w[9] !== _ || w[10] !== U ? (o = () => {
                if (!U || A || N.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || N.current || (N.current = !0, (0, el.a)(_, oR.Ab, {
                        personalizationMode: (0, oO.a)((0, oB.k)(_, C))
                    }), M(!0), oH(_))
                }), () => {
                    e = !0
                }
            }, i = [C, A, _, U], w[7] = C, w[8] = A, w[9] = _, w[10] = U, w[11] = o, w[12] = i) : (o = w[11], i = w[12]), (0, f.useEffect)(o, i), w[13] !== _ ? (l = () => {
                R(!0), N.current || (N.current = !0, oH(_))
            }, w[13] = _, w[14] = l) : l = w[14];
            let V = l;
            w[15] !== W || w[16] !== C || w[17] !== S || w[18] !== j || w[19] !== D || w[20] !== _ || w[21] !== z || w[22] !== F ? (c = async function() {
                let e;
                if (!W || null == F || null == z) return;
                let t = (0, oO.a)((0, oB.k)(_, C));
                (0, el.a)(_, oR.Bb, {
                    personalizationMode: t
                });
                try {
                    e = (await D({
                        sourceConversationId: F,
                        selectedLeafId: z
                    })).conversation_id
                } catch (e) {
                    (0, el.a)(_, oR.Cb, {
                        personalizationMode: t,
                        failureCategory: (0, oO.b)(e)
                    }), _.get(et.f).danger(S.formatMessage({
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
                P(!0), T(!1), (0, ss.H)(_), (0, ss.K)(_, F, "remove"), (0, ss.K)(_, e, "refresh"), j((0, oF.c)(e), {
                    replace: !0
                }), _.get(et.f).success(S.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history.",
                    description: "Success toast confirming that a formerly temporary ChatGPT conversation is now saved in regular history."
                })), r5.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: z
                    }
                }).then(oV).then(t => {
                    (0, B.ac)({
                        scope: _,
                        conversationId: e,
                        title: t
                    }), _.query.setData(n9.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, ss.H)(_), (0, ss.K)(_, e, "refresh")
                }).catch(oU)
            }, w[15] = W, w[16] = C, w[17] = S, w[18] = j, w[19] = D, w[20] = _, w[21] = z, w[22] = F, w[23] = c) : c = w[23];
            let Q = c,
                $ = !W;
            w[24] !== C || w[25] !== _ || w[26] !== U ? (d = () => {
                (0, el.a)(_, oR.Eb, {
                    personalizationMode: (0, oO.a)((0, oB.k)(_, C)),
                    coachMarkVisible: U
                }), T(!0)
            }, w[24] = C, w[25] = _, w[26] = U, w[27] = d) : d = w[27], w[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(tb.b, {
                icon: {
                    16: ah.qb,
                    20: ah.rb
                }
            }), w[28] = h) : h = w[28], w[29] !== q || w[30] !== $ || w[31] !== d ? (p = (0, a.jsx)(e$.a, {
                "aria-label": q,
                color: "toolbar",
                disabled: $,
                size: "toolbar",
                uniform: !0,
                onClick: d,
                children: h
            }), w[29] = q, w[30] = $, w[31] = d, w[32] = p) : p = w[32];
            let Y = p;
            return w[33] !== V || w[34] !== S || w[35] !== q || w[36] !== Y || w[37] !== U ? (m = U ? (0, a.jsx)(oz.a, {
                align: "end",
                description: (0, a.jsx)(b.a, {
                    id: "chatgptConversations.temporaryChat.save.coachmark.description",
                    defaultMessage: "Want to keep this chat? You can now save it to your history.",
                    description: "Body of a one-time onboarding coachmark anchored to the Save chat button after a user creates an eligible temporary chat."
                }),
                dismissLabel: S.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.coachmark.dismiss",
                    defaultMessage: "Close tooltip",
                    description: "Accessible label for dismissing the temporary chat save coachmark."
                }),
                onDismiss: V,
                open: !0,
                side: "bottom",
                sideOffset: 10,
                title: (0, a.jsx)(b.a, {
                    id: "chatgptConversations.temporaryChat.save.button",
                    defaultMessage: "Save chat",
                    description: "Title of a one-time onboarding coachmark anchored to the Save chat button in a temporary ChatGPT conversation."
                }),
                tooltipClassName: "w-60",
                children: Y
            }) : (0, a.jsx)(au.a, {
                content: q,
                children: Y
            }), w[33] = V, w[34] = S, w[35] = q, w[36] = Y, w[37] = U, w[38] = m) : m = w[38], w[39] !== W || w[40] !== C || w[41] !== Q || w[42] !== I || w[43] !== H || w[44] !== _ ? (g = I ? (0, a.jsx)(oD, {
                canSave: W,
                isPending: H,
                onCancel: () => {
                    (0, el.a)(_, oR.zb, {
                        personalizationMode: (0, oO.a)((0, oB.k)(_, C))
                    })
                },
                onClose: () => T(!1),
                onSave: () => void Q()
            }) : null, w[39] = W, w[40] = C, w[41] = Q, w[42] = I, w[43] = H, w[44] = _, w[45] = g) : g = w[45], w[46] !== m || w[47] !== g ? (v = (0, a.jsxs)(a.Fragment, {
                children: [m, g]
            }), w[46] = m, w[47] = g, w[48] = v) : v = w[48], v
        }

        function oU() {}

        function oV(e) {
            return nD.object({
                title: nD.string()
            }).parse(e).title
        }

        function oQ(e, t) {
            return e < 1 && t instanceof na.FetchError && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function o$(e) {
            return nD.object({
                conversation_id: nD.string().min(1)
            }).parse(e)
        }

        function oY(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var oX = n("AORd"),
            oJ = n("J8FU"),
            oZ = n("vpdG"),
            o0 = n("cP1f");

        function o1(e) {
            let {
                turn: t
            } = e;
            return t.items.some(o2)
        }

        function o2(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }
        var o3 = n("Aluh"),
            o4 = n("mG6J");

        function o5(e) {
            let t, n, s = (0, r.c)(14),
                {
                    conversationId: o,
                    shouldBlockExternalEgress: i,
                    widgets: l
                } = e,
                c = (0, u.z)(o3.b);
            if (i) return null;
            if (s[0] !== c || s[1] !== o || s[2] !== l) {
                let e, n, r;
                s[4] !== c || s[5] !== o ? (e = e => c.has((0, aV.e)(o, e.messageId)), s[4] = c, s[5] = o, s[6] = e) : e = s[6];
                let i = l.filter(e),
                    d = `chatgpt:${o}`;
                s[7] !== d ? (n = (0, h.Se)(d), s[7] = d, s[8] = n) : n = s[8];
                let u = n;
                s[9] !== u || s[10] !== o ? (r = e => (0, a.jsx)(o4.b, {
                    conversationId: u,
                    chatGptConversationId: o,
                    hostId: "local",
                    item: e
                }, e.messageId), s[9] = u, s[10] = o, s[11] = r) : r = s[11], t = i.map(r), s[0] = c, s[1] = o, s[2] = l, s[3] = t
            } else t = s[3];
            return s[12] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), s[12] = t, s[13] = n) : n = s[13], n
        }
        var o6 = n("JVSG"),
            o7 = {
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
            o8 = n("ebpE");

        function o9() {
            let e, t, n, s, o, i, l, c, d, h, p, m, g, v, y, b = (0, r.c)(40),
                w = (0, x._)(),
                _ = (0, f.useContext)(tk.a);
            b[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, b[0] = e) : e = b[0];
            let j = (0, u.x)(S.a, e),
                I = (0, u.z)(N.a),
                T = (0, x.bb)() ?? 0,
                {
                    conversationId: E
                } = (0, x.cb)(),
                {
                    search: P,
                    state: A
                } = (0, x.Y)(),
                M = (0, u.x)(nA.a, E ?? null),
                k = (0, u.x)(null == E || eC.d, M ?? E ?? ""),
                R = A?.archivedConversationPreview === !0;
            b[1] !== P ? (t = (0, oF.i)(P), b[1] = P, b[2] = t) : t = b[2];
            let O = t;
            b[3] !== R || b[4] !== O || b[5] !== E ? (n = null == E || (0, ek.e)(E) || O || R ? null : E, b[3] = R, b[4] = O, b[5] = E, b[6] = n) : n = b[6];
            let {
                data: B
            } = (0, u.x)(n9.chatGptConversationQueryById$, n);
            if (null == E) {
                let e;
                return b[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(x.l, {
                    to: "/",
                    replace: !0
                }), b[7] = e) : e = b[7], e
            }
            b[8] !== M || b[9] !== E ? (s = M ?? (0, ek.d)(E), b[8] = M, b[9] = E, b[10] = s) : s = b[10];
            let F = s,
                z = j.isCapable && !I && !k && null != B;
            b[11] !== w ? (o = e => (w((0, oF.c)(e)), !0), b[11] = w, b[12] = o) : o = b[12];
            let G = o;
            b[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(C.a, {}), l = (0, a.jsx)(tm.a.Surface, {}), b[13] = i, b[14] = l) : (i = b[13], l = b[14]), b[15] !== R ? (c = null, b[15] = R, b[16] = c) : c = b[16], b[17] !== F || b[18] !== R || b[19] !== O ? (d = O || R ? null : (0, a.jsx)(nG.a, {
                conversationId: F
            }), b[17] = F, b[18] = R, b[19] = O, b[20] = d) : d = b[20];
            let L = _ ?? (z ? G : null),
                D = `${F}:${O}`;
            b[21] === Symbol.for("react.memo_cache_sentinel") ? (h = void 0, b[21] = h) : h = b[21], b[22] !== F || b[23] !== R || b[24] !== O || b[25] !== D || b[26] !== T ? (p = (0, a.jsx)(ie, {
                conversationId: F,
                viewActivation: T,
                isArchivedPreview: R,
                isReadOnlyPreview: !1,
                banner: h,
                isTemporaryChat: O,
                sharedConversationId: null
            }, D), b[22] = F, b[23] = R, b[24] = O, b[25] = D, b[26] = T, b[27] = p) : p = b[27], b[28] !== p || b[29] !== L ? (m = (0, a.jsx)(tk.a, {
                value: L,
                children: p
            }), b[28] = p, b[29] = L, b[30] = m) : m = b[30], b[31] !== m || b[32] !== c || b[33] !== d ? (g = (0, a.jsxs)(a.Fragment, {
                children: [i, l, c, d, m]
            }), b[31] = m, b[32] = c, b[33] = d, b[34] = g) : g = b[34];
            let H = g;
            return b[35] !== H ? (v = H, b[35] = H, b[36] = v) : v = b[36], b[37] !== F || b[38] !== v ? (y = (0, a.jsx)(aN.a, {
                conversationId: F,
                children: v
            }), b[37] = F, b[38] = v, b[39] = y) : y = b[39], y
        }

        function ie(e) {
            let t, n, i, l, c, v, b, C, S, P, A, O, z, G, L, D, H, W, q, K, U, Q, Z, ee, en, ea, es, eo, ei, ec, ed, eu, eh, ep, em, eg, ef, ev, ey, ex, ew, eS, ej, eI, eT, eE, eP, eA, eM, eR, eN, eO, eB, eF, ez, eG, eL, eD, eH, eW, e$, eY, eX, eJ, eZ, e0, e1, e2, e3, e5, e7, te, tt, tn, ta, tr, ts, to, tl, th, tp, tm, tg, tf, tv, ty, t_, tT, tE, tP, tA, tM, tk, tq, tU, tX, t1, t2, t3, t7, nB, nz, nG, nD = (0, r.c)(765),
                {
                    conversationId: nH,
                    viewActivation: nW,
                    isArchivedPreview: nq,
                    isInlinePreview: nK,
                    hideModelPicker: nU,
                    showFilePicker: nV,
                    disableAutoFocus: nQ,
                    hideInitialUserMessage: n$,
                    transcriptPresentation: nY,
                    scrollOrigin: nX,
                    isReadOnlyPreview: nJ,
                    onSubmitAccepted: nZ,
                    isTemporaryChat: n0,
                    sharedConversationId: n1,
                    sharedPostContinuation: n2,
                    requiredSystemHints: n3,
                    routePattern: n4,
                    composerLeadingContent: at,
                    headerLeadingContent: aa,
                    banner: ar,
                    onRetryMissingConversation: as,
                    sharedProjectConversation: ao,
                    workspace: ai
                } = e,
                al = void 0 === nW ? 0 : nW,
                ac = void 0 !== nq && nq,
                ad = void 0 !== nK && nK,
                au = void 0 === nV || nV,
                ah = (0, u.y)(F.a),
                ap = (0, f.useContext)(M.a),
                am = (0, u.x)(e_.f, ap),
                af = (0, u.z)(null != am && N.a);
            nD[0] !== ap || nD[1] !== nH ? (t = {
                auth: ap,
                conversationId: nH
            }, nD[0] = ap, nD[1] = nH, nD[2] = t) : t = nD[2];
            let av = (0, u.x)(null != ap && !ap.isLoading && null === ap.authMethod && e_.h, t),
                {
                    conversationId: ax
                } = (0, x.cb)();
            nD[3] !== nH || nD[4] !== ad || nD[5] !== ax || nD[6] !== ah || nD[7] !== ai ? (n = () => (0, ek.e)(ad || null != ai || null == ah.get(B.j, nH) ? nH : ax ?? ""), nD[3] = nH, nD[4] = ad, nD[5] = ax, nD[6] = ah, nD[7] = ai, nD[8] = n) : n = nD[8];
            let [aw, aC] = (0, f.useState)(n);
            nD[9] !== aw || nD[10] !== nH || nD[11] !== ah ? (i = () => aw && !ah.get(sG.b, nH) ? nH : null, nD[9] = aw, nD[10] = nH, nD[11] = ah, nD[12] = i) : i = nD[12];
            let [a_] = (0, f.useState)(i), aS = null != n1 || null != am && !(void 0 !== n2 && n2 && af);
            nD[13] !== nH || nD[14] !== ac || nD[15] !== ad || nD[16] !== aS || nD[17] !== ah ? (l = () => {
                if (!aS && !ac && !ad) return function(e, t) {
                    let n = e.get(nA.a, t) ?? t,
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
                            if (!o.initialCreationMessageIds.has(n.messageId) && (0, nC.openSpacePageSidePanelTab)(e, n.pageId, {
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
                        } = n, r = a(B.$, t), s = a(np.i), u = a(B.bb, t);
                        if ((0, B.Ab)(r)) {
                            l = !1;
                            let e = a(X.b, t),
                                n = a(B.cb, t),
                                r = !o.observedTurn || o.attemptId !== e;
                            if (o.attemptId = e, r) {
                                let e = c;
                                c = null, e?.abort(), o.observedTurn = !0, o.activeRequestId = n, o.dismissed = u, o.openedCreatedPage = !1
                            } else o.activeRequestId = n ?? o.activeRequestId, o.dismissed = o.dismissed || u || i && !s;
                            i = s;
                            let h = !u && !o.dismissed && !s && !o.openedCreatedPage && !a(F.j) && !a(B.D, t) && !a(eC.d, t),
                                p = [];
                            if ((r || h) && (p = a(B.Q, t) ?? []), r) {
                                o.initialCreationMessageIds = new Set(p.map(e => e.messageId));
                                return
                            }
                            h && d(p);
                            return
                        }
                        if (!o.observedTurn) return;
                        let h = a(B.w, t);
                        if ("idle" !== r || u || null != h && "completed" !== h.result || null != e.get(B.D, t) || e.get(F.j) || e.get(eC.d, t)) {
                            o.observedTurn = !1;
                            return
                        }
                        if (l) {
                            if (o.dismissed || s || o.openedCreatedPage || a(X.b, t) !== o.attemptId) {
                                o.observedTurn = !1;
                                return
                            }
                            if (h?.result !== "completed") return;
                            d(a(B.Q, t) ?? []), o.observedTurn = !o.openedCreatedPage;
                            return
                        }
                        if (o.observedTurn = !1, h?.result !== "completed" || h.requestId !== o.activeRequestId) return;
                        let m = e.get(B.M, t);
                        if (null == m) return;
                        let g = (0, p.b)({
                                mapping: m,
                                current_node: e.get(B.C, t)
                            }),
                            f = g.findLast(nR.b);
                        if (f?.status !== "finished_successfully") return;
                        let v = [...(0, nM.e)(g).outputs, ...g.flatMap(e => (0, nM.c)(e).map(e => e.file))],
                            y = e.get(nT.a, t)?.at(-1);
                        if (y?.turn.status !== "complete") return;
                        let b = [...(0, ng.b)(g), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, nm.a)(e, b, !o.dismissed) || !o.dismissed && !o.openedCreatedPage && (0, n_.a)(e, b)) && !o.dismissed && !s && !o.openedCreatedPage) {
                            for (let t of (0, nw.c)((0, p.e)(f)).toReversed())
                                if ((0, nC.openSpacePageSidePanelTab)(e, t.id, {
                                        openSource: "turn_auto_open",
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
                                            if ("file" !== r.type || !(0, nh.a)(r) || null == s || null == o || !(0, nf.f)(o) || null == i && null == (0, nP.b)(r.sandbox_path) && !(0, nP.b)(r.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > nb.a) continue;
                                            let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                d = (0, nI.b)(r, {
                                                    fileName: s,
                                                    messageId: l
                                                });
                                            if (null == d) continue;
                                            if (e.get(tJ.f)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let u = e.get(B.j, t) ?? t,
                                                h = `${l??"message"}:${String(a)}:${s}`,
                                                p = `chatgpt-file:${u}:${h}`,
                                                m = {
                                                    turnId: y.id,
                                                    inputMessageId: g.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: l ?? null
                                                },
                                                f = new AbortController,
                                                b = (0, nk.openChatGptFile)(e, {
                                                    conversationId: u,
                                                    fileName: s,
                                                    gizmoId: e.get(B.S, t),
                                                    sharedConversationId: e.get(B.Z, t),
                                                    target: d,
                                                    tabKey: h,
                                                    browserPreview: !0,
                                                    isAccessBlocked: e => e.get(eC.d, t),
                                                    downloadFallback: !1,
                                                    openSource: "auto_open",
                                                    originatingTurn: m,
                                                    signal: f.signal,
                                                    onOpened: () => {
                                                        let t = e.get(E.l.activeTab$);
                                                        f.signal.aborted || t?.tabId !== p || t.tabType.kind !== nv.a || ((0, el.a)(e, nu.CodexFileOpened, {
                                                            threadId: u,
                                                            turnId: m.turnId,
                                                            inputMessageId: m.inputMessageId ?? void 0,
                                                            messageId: m.messageId ?? void 0,
                                                            fileExtension: (0, ny.c)(s) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, el.a)(e, nu.CodexWorkspaceFilePreviewAttempted, (0, nx.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: m,
                                                            path: s,
                                                            threadId: u,
                                                            windowType: "browser"
                                                        })), (0, nS.b)(e, p, "auto_open"))
                                                    },
                                                    onClose: () => f.abort()
                                                });
                                            c = f;
                                            let x = e.watch(e => {
                                                let {
                                                    get: n
                                                } = e;
                                                (n(np.i) && n(E.l.activeTab$)?.tabId !== p || n(eC.d, t)) && f.abort()
                                            });
                                            b.catch(e => {
                                                f.signal.aborted || nj.a.debug("Automatic ChatGPT artifact preview could not open", {
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
                }(ah, nH)
            }, c = [nH, ac, ad, aS, ah], nD[13] = nH, nD[14] = ac, nD[15] = ad, nD[16] = aS, nD[17] = ah, nD[18] = l, nD[19] = c) : (l = nD[18], c = nD[19]), (0, f.useEffect)(l, c);
            let aj = (0, u.x)(a8.a, nH),
                aT = aS ? null : aj;
            nD[20] !== n1 ? (v = () => null == n1 ? null : (0, ek.b)(), nD[20] = n1, nD[21] = v) : v = nD[21];
            let [aP] = (0, f.useState)(v), aA = aP ?? nH;
            nD[22] !== aA ? (b = (0, tV.o)({
                routeKind: "chatgpt-thread",
                conversationId: aA
            }), nD[22] = aA, nD[23] = b) : b = nD[23];
            let aM = null != (0, u.x)(tR.c, b);
            nD[24] !== aA || nD[25] !== n3 || nD[26] !== ah ? (C = () => {
                if (null != n3 && 0 !== n3.length) return (0, e9.b)(ah, aA, n3)
            }, S = [aA, n3, ah], nD[24] = aA, nD[25] = n3, nD[26] = ah, nD[27] = C, nD[28] = S) : (C = nD[27], S = nD[28]), (0, f.useEffect)(C, S);
            let ak = (0, f.useRef)(null),
                [aR, aN] = (0, f.useState)(null),
                [aO, aF] = (0, f.useState)(null),
                [az, aG] = (0, f.useState)(null),
                aL = aO?.activation === al ? aO.messageId : null,
                aD = az === al,
                aH = (0, f.useRef)(null);
            nD[29] === Symbol.for("react.memo_cache_sentinel") ? (P = () => {
                let e = new AbortController;
                return aH.current = e, () => e.abort()
            }, nD[29] = P) : P = nD[29], nD[30] !== al ? (A = [al], nD[30] = al, nD[31] = A) : A = nD[31], (0, f.useLayoutEffect)(P, A);
            let aW = (0, y.a)(),
                aq = (0, x._)(),
                aK = (0, t8.c)(),
                aU = (0, u.x)(B.j, nH);
            nD[32] !== ah ? (O = e => {
                (0, nO.c)(ah, e)
            }, nD[32] = ah, nD[33] = O) : O = nD[33];
            let aV = (0, f.useEffectEvent)(O);
            nD[34] !== aU || nD[35] !== aV ? (z = () => () => {
                null != aU && aV(aU)
            }, nD[34] = aU, nD[35] = aV, nD[36] = z) : z = nD[36], nD[37] !== aU ? (G = [aU], nD[37] = aU, nD[38] = G) : G = nD[38], (0, f.useEffect)(z, G);
            let aQ = (0, u.x)(ok.b, nH),
                a$ = (0, u.x)(B.M, nH),
                aY = (0, u.x)(n9.chatGptConversationQueryById$, aS || n0 && null != a$ ? null : aU);
            (0, u.x)(aS ? null : an.a, aU);
            let aX = (0, u.x)(!av && eC.d, nH),
                aJ = aU ?? nH,
                aZ = (0, u.x)(B.C, nH),
                a0 = (0, u.x)(B.y, nH),
                a1 = (0, u.x)(B.S, nH),
                a2 = (0, u.x)(B.D, nH),
                a3 = (0, u.x)(B.N, nH),
                a6 = (0, u.x)(B.$, nH),
                a7 = (0, u.x)(B.W, nH),
                ro = (0, u.x)(B.Y, nH),
                rl = (0, u.x)(ab.a, nH),
                rc = (0, u.x)(B.E, nH),
                rd = (0, u.x)(B.db, nH),
                ru = (0, u.x)(B.eb, nH),
                rh = (0, u.x)(n9.n, n1),
                rp = (0, f.useRef)(null),
                rm = rh.isSuccess && null != rh.data ? n1 : null;
            nD[39] !== ah ? (L = e => {
                (0, el.a)(ah, s.h, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, nD[39] = ah, nD[40] = L) : L = nD[40];
            let rg = (0, f.useEffectEvent)(L);
            nD[41] !== rm || nD[42] !== rg ? (D = () => {
                null != rm && rp.current !== rm && (rp.current = rm, rg(rm))
            }, nD[41] = rm, nD[42] = rg, nD[43] = D) : D = nD[43], nD[44] !== rm ? (H = [rm], nD[44] = rm, nD[45] = H) : H = nD[45], (0, f.useEffect)(D, H);
            let rf = (0, u.x)(e6.q, nH),
                rb = (0, u.x)(e6.p, nH),
                rk = (0, u.x)(e6.n, nH),
                rR = (0, u.x)(e6.r, nH),
                rN = (0, u.x)(e6.o, nH),
                rO = (0, u.x)(e6.j, nH),
                rB = (0, u.x)(B.bb, nH),
                rF = (0, u.x)(e6.A, nH);
            nD[46] !== a6 ? (W = (0, B.Ab)(a6), nD[46] = a6, nD[47] = W) : W = nD[47];
            let rz = W,
                rL = (0, u.x)(re, nH),
                rD = (0, u.z)(R.u),
                rH = (0, u.z)(R.r),
                rq = (0, u.z)(R.t),
                rU = (0, u.z)(R.m),
                rQ = (0, u.z)(R.b),
                r$ = (0, u.z)(R.n),
                rY = (0, u.z)(tz.pagesEnabled$);
            nD[48] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, e4.a)(), nD[48] = q) : q = nD[48];
            let rX = (0, er.h)(q);
            nD[49] === Symbol.for("react.memo_cache_sentinel") ? (K = (0, tN.b)(), nD[49] = K) : K = nD[49];
            let rJ = (0, er.h)(K),
                rZ = null != a$,
                r0 = (0, u.z)(s1.f),
                r1 = aS ? rh : aY;
            aw && null != r1.data && aC(!1);
            let r2 = aw && rZ && null == r1.data,
                r3 = r1.isLoading || !r2 && r1.isError;
            nD[50] !== aR || nD[51] !== aA || nD[52] !== r3 || nD[53] !== aS || nD[54] !== n0 || nD[55] !== ah ? (U = (e, t, n, a) => {
                !(e || ah.get(tK.a)) && ((0, e6.b)(ah, aA, t, void 0, n, a), aR?.focus(), aS || r3 || (0, n8.f)(ah, aA, {
                    isTemporaryChat: n0
                }))
            }, nD[50] = aR, nD[51] = aA, nD[52] = r3, nD[53] = aS, nD[54] = n0, nD[55] = ah, nD[56] = U) : U = nD[56];
            let r4 = U;
            nD[57] !== nH || nD[58] !== am ? (Z = null == (Q = null == am ? null : (0, ov.a)(am, nH)) ? void 0 : (0, sz.a)(Q), nD[57] = nH, nD[58] = am, nD[59] = Q, nD[60] = Z) : (Q = nD[59], Z = nD[60]);
            let r5 = Z,
                r6 = Q ?? r1.data,
                r7 = rc ? rd : r6?.title,
                r8 = (0, u.z)(k.h),
                r9 = (0, u.z)(k.g),
                se = "chatgpt-thread" === ah.value.routeKind && ah.value.workSideChat?.conversationId === nH,
                st = r6?.conversation_origin ?? a0 ?? (null != ai || se ? "tpp" : null),
                sn = "tpp" === st,
                sa = sn && "denied" === rD.status && "go-plan" === rD.reason,
                sr = (0, u.z)(tZ.e),
                so = (0, x.Y)(),
                si = so.state;
            (0, u.z)(t$.b);
            let sl = (0, u.x)(tJ.d, "3901104270") && si?.openGoalPlan === !0,
                sc = (0, t6.a)(),
                sd = "tpp" === st || "flora" === st,
                su = (0, er.h)("2871250183"),
                sh = (0, u.z)(!!sd && R.v),
                sp = void 0 !== nJ && nJ || sh,
                sm = null == sr || sr.isFullWidth ? void 0 : sr.width ?? 420,
                sf = !0 === (0, u.z)(sd ? null : ns.d),
                sy = (0, u.z)(sd ? tW.b : tW.a),
                sb = !sd && sy,
                sw = !rJ || r$ && !sd,
                sC = !aS && r$ && !sd,
                s_ = sC && rU,
                sS = aS && r6?.is_read_only === !0 || ao?.is_read_only === !0;
            nD[61] !== nH || nD[62] !== aS || nD[63] !== ah ? (ee = () => null, nD[61] = nH, nD[62] = aS, nD[63] = ah, nD[64] = ee) : ee = nD[64];
            let [sI] = (0, f.useState)(ee), sT = r6?.gizmo_id ?? a1 ?? sI?.gizmoId ?? null;
            nD[65] !== sT || nD[66] !== aS ? (en = aS || null == sT || (0, e8.a)(sT) ? null : sT, nD[65] = sT, nD[66] = aS, nD[67] = en) : en = nD[67];
            let sA = en,
                sM = (0, u.x)(n6, aA);
            nD[68] !== r6 || nD[69] !== nH || nD[70] !== rl || nD[71] !== so.pathname || nD[72] !== n1 || nD[73] !== am ? (ea = (0, ag.d)({
                conversation: r6,
                conversationId: nH,
                conversationTitle: rl,
                pathname: so.pathname,
                sharedConversationId: n1,
                sharedPost: am
            }), nD[68] = r6, nD[69] = nH, nD[70] = rl, nD[71] = so.pathname, nD[72] = n1, nD[73] = am, nD[74] = ea) : ea = nD[74];
            let sN = ea,
                sL = !rq && null == r6 && null == sI,
                sW = null != aU && !aX && !sL && (rq || rH),
                sq = null;
            aS || (sq = null != r6 ? (0, ss.B)(r6) : (0, e8.a)(a1) ? a1 : sI?.projectId ?? null);
            let sK = (0, u.x)(nl.c, aS ? null : nH),
                sU = aS || sd || null != sq || sK || null == sM ? sA : sM.id;
            nD[75] !== aA || nD[76] !== sU || nD[77] !== so.pathname ? (es = {
                gizmoId: sU,
                conversationId: aA,
                visitKey: so.pathname
            }, nD[75] = aA, nD[76] = sU, nD[77] = so.pathname, nD[78] = es) : es = nD[78];
            let sV = (0, u.x)(sH.d, es),
                {
                    data: sY
                } = (0, o.a)({
                    enabled: null != sq,
                    queryFn: () => {
                        if (null == sq) throw Error("Expected a ChatGPT project id");
                        return (0, eK.c)(sq)
                    },
                    queryKey: (0, ss.E)(sq ?? ""),
                    staleTime: eb.b.ONE_MINUTE
                }),
                sZ = null != sq && (sY?.gizmo.share_recipient !== "private" || (sY?.gizmo.sharing?.subjects?.length ?? 0) > 0);
            nD[79] !== r6?.context_scopes || nD[80] !== sY?.gizmo.gizmo_snorlax_type ? (eo = r6?.context_scopes?.includes("HEALTH") === !0 || sY?.gizmo.gizmo_snorlax_type === "potion", nD[79] = r6?.context_scopes, nD[80] = sY?.gizmo.gizmo_snorlax_type, nD[81] = eo) : eo = nD[81];
            let s2 = eo,
                s3 = (0, s$.a)(r6?.context_scopes, {
                    projectType: sY?.gizmo.gizmo_snorlax_type,
                    projectId: sq,
                    lockedProjectId: r0?.projectId
                }),
                s4 = aX || sZ || s2 || s3;
            nD[82] !== sY?.gizmo.display.name || nD[83] !== sY?.gizmo.display.name.trim ? (ei = sY?.gizmo.display.name.trim() || null, nD[82] = sY?.gizmo.display.name, nD[83] = sY?.gizmo.display.name.trim, nD[84] = ei) : ei = nD[84];
            let s5 = ei,
                s6 = sY?.gizmo.display.theme,
                s7 = sY?.gizmo.display.emoji;
            nD[85] !== sY ? (ec = "shared" === (0, ri.b)(sY) ? (0, a.jsx)(tb.b, {
                icon: {
                    assets: {
                        16: o7,
                        20: o8.a
                    }
                }
            }) : void 0, nD[85] = sY, nD[86] = ec) : ec = nD[86], nD[87] !== s6 || nD[88] !== s7 || nD[89] !== ec ? (ed = (0, a.jsx)(tD.a, {
                className: "icon-leading",
                size: "leading",
                color: s6,
                icon: s7,
                sharedIcon: ec
            }), nD[87] = s6, nD[88] = s7, nD[89] = ec, nD[90] = ed) : ed = nD[90];
            let s8 = ed,
                oe = (0, u.x)(B.i, nH),
                oa = oe?.metadata ?? r6?.context_truncation_continuation,
                or = aS || n0 || null != ao || null == r8 || r6?.owner?.user_id == null || null == sq || r6.owner.user_id === (r9 ? r8.split("__")[0] : r8) ? null : (0, sE.d)(sq, r6.conversation_id, r6.owner.user_id),
                os = !aS && !ac && !sp,
                oo = (0, u.x)(os ? ot.c : null, nH),
                oi = oo?.isReviewing === !0,
                ol = null == oo ? a$ : oo.conversation.mapping,
                oc = null == oo ? aZ : oo.conversation.current_node,
                od = null == a$ ? r6 : null,
                ou = ol ?? od?.mapping,
                oh = (0, er.k)();
            nD[91] !== ou || nD[92] !== oh ? (eu = function(e, t) {
                if (null != e && Object.values(e).some(e => e?.message != null && (0, sQ.b)(e.message))) return () => (0, er.f)(t, "2347981323").get("enabled", !1)
            }(ou, oh), nD[91] = ou, nD[92] = oh, nD[93] = eu) : eu = nD[93];
            let op = eu,
                om = (0, u.z)(null != op ? nn.h : void 0),
                of = (0, u.x)(null != op && !aS && !ac && !oi && ne.a, nH),
                ox = (0, u.z)(of ? nt.a : void 0);
            nD[94] === Symbol.for("react.memo_cache_sentinel") ? (eh = (0, ae.a)(), nD[94] = eh) : eh = nD[94];
            let ow = eh;
            nD[95] === Symbol.for("react.memo_cache_sentinel") ? (ep = new WeakMap, nD[95] = ep) : ep = nD[95];
            let oC = ep;
            nD[96] !== sy || nD[97] !== sb || nD[98] !== oa || nD[99] !== st || nD[100] !== oc || nD[101] !== ol || nD[102] !== su || nD[103] !== op || nD[104] !== od || nD[105] !== ac || nD[106] !== aS || nD[107] !== rz || nD[108] !== sd || nD[109] !== a3 || nD[110] !== rk || nD[111] !== rN || nD[112] !== rb || nD[113] !== rf || nD[114] !== rR || nD[115] !== oi || nD[116] !== ah.get || nD[117] !== oo?.isEntering || nD[118] !== aQ || nD[119] !== a6 || nD[120] !== ox || nD[121] !== om ? (em = () => ow({
                conversation: od,
                contextContinuation: oa,
                clinicalSearchEnabled: sb,
                clinicalCitationsEnabled: sy,
                enableCloudBrowserActivity: su,
                conversationOrigin: st,
                enableVoiceImageLoadingFix: op,
                voiceImageSessionId: om,
                voiceImageGenerationSpawnIds: ox,
                enableImageGenerationLoadingState: !aS && !ac && !oi && "error" !== a6,
                getRenderTelemetry: e => (0, oJ.c)(ah.get, e),
                isWorkConversation: sd,
                isStreaming: !aS && !ac && !oi && rz,
                mode: "conversation",
                mcpResponseCache: oC,
                moderationDisclaimersByMessageId: a3,
                streamingOrders: aQ,
                pendingSubmission: null == rf || aS || oi || oo?.isEntering ? null : {
                    attachments: rk,
                    commentAttachments: rN,
                    prompt: rf,
                    ...rb,
                    selectedTextAttachments: rR
                },
                threadCurrentNode: oc,
                threadMapping: ol
            }), nD[96] = sy, nD[97] = sb, nD[98] = oa, nD[99] = st, nD[100] = oc, nD[101] = ol, nD[102] = su, nD[103] = op, nD[104] = od, nD[105] = ac, nD[106] = aS, nD[107] = rz, nD[108] = sd, nD[109] = a3, nD[110] = rk, nD[111] = rN, nD[112] = rb, nD[113] = rf, nD[114] = rR, nD[115] = oi, nD[116] = ah.get, nD[117] = oo?.isEntering, nD[118] = aQ, nD[119] = a6, nD[120] = ox, nD[121] = om, nD[122] = em) : em = nD[122], oo?.isEntering, nD[123] !== em ? (eg = em(), nD[123] = em, nD[124] = eg) : eg = nD[124];
            let {
                isConversationEmpty: o_,
                renderedConversation: oS,
                renderedTurns: oj,
                showPendingLoadingMessage: oI
            } = eg;
            nD[125] !== ad || nD[126] !== sd || nD[127] !== oS || nD[128] !== ah ? (ef = () => {
                if (!ad && sd) return ah.set(o6.b, oS), () => {
                    ah.get(o6.b) === oS && ah.set(o6.b, null)
                }
            }, ev = [ad, sd, oS, ah], nD[125] = ad, nD[126] = sd, nD[127] = oS, nD[128] = ah, nD[129] = ef, nD[130] = ev) : (ef = nD[129], ev = nD[130]), (0, f.useEffect)(ef, ev);
            let oT = (0, u.x)(nc.g, nH),
                oP = oI && null == oT,
                oA = !sd && !aS && !ad && !ac,
                oM = (0, u.x)(sb || ad || aS ? null : Y.a, nH),
                oR = (oM?.length ?? 0) > 0,
                oN = (0, u.x)(oA ? X.b : null, nH),
                oO = JSON.stringify([nH, al]),
                [oB, oz] = (0, f.useState)(null),
                oG = function(e, t) {
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
                    let d = null == n ? [] : (0, p.b)(n, eU.l),
                        u = null == e || e.visitKey !== c,
                        h = d.find(eU.l)?.id ?? (u || i ? null : e.userMessageId),
                        m = i ? null : d.findLast(eV)?.id ?? null,
                        g = !u && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != h && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== h),
                        f = new Set(u ? [] : e.observedSummaryRequestIds),
                        v = !u && !g && e.hasConsumedSummaryRequest,
                        y = !v && !u && null != e.conversation && (o || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != m && !f.has(m);
                    if (null != n && (u || null == e.conversation || !o))
                        for (let e of Object.values(n.mapping)) e?.message?.id != null && eV(e.message) && f.add(e.message.id);
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
                        isOpen: s ? !u && e.suppressAutoOpen && e.isOpen : r && (l && (u || !e.hasGoal) || y) || !u && (!g || l) && (!e.hasGoal || l) && e.isOpen,
                        shouldPreventAutoFocus: u || g || l && !e.hasGoal || y && !e.isOpen || e.shouldPreventAutoFocus
                    }
                }(oB, {
                    completionAttemptId: oN,
                    allowAutoOpen: !(0, tI.a)("(width < 768px)"),
                    suppressAutoOpen: sl,
                    conversation: oA && (r2 || !r3) ? oS : null,
                    isTurnActive: rz,
                    hasGoal: oR,
                    isPendingUserTurn: rO && null != rf && !rz,
                    visitKey: oO
                });
            oG !== oB && oz(oG);
            let oL = null == ai && !sb && !ad && !aS && (sn || oA) && !ac,
                oD = oL && oS?.mapping === a$ && oS?.current_node === aZ,
                oH = (0, u.x)(oD ? B.q : null, nH),
                oq = oS?.mapping,
                oK = oS?.current_node;
            nD[131] !== oq || nD[132] !== oK ? (ey = d()(() => {
                let e = null == oq ? [] : (0, p.a)({
                    mapping: oq,
                    current_node: oK
                });
                return {
                    messages: e,
                    resources: (0, nM.e)(e)
                }
            }), nD[131] = oq, nD[132] = oK, nD[133] = ey) : ey = nD[133];
            let oU = ey;
            nD[134] !== oA || nD[135] !== rO || nD[136] !== oL || nD[137] !== rz || nD[138] !== rY || nD[139] !== rk || nD[140] !== oU || nD[141] !== oj || nD[142] !== oH ? (ex = oL ? d()(() => (function(e) {
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
                    m = o ? (0, rT.a)(i, d) : [],
                    g = new Map,
                    f = new Map,
                    v = (t = i, -1 !== (n = rx()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, rA.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    y = [],
                    b = new Map(i.map(e => [(0, p.g)(e), e])),
                    x = rx()(i, e => "user" === e.author.role),
                    w = [];
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
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, rI.j)(t.metadata) && y.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, rI.c)(t.metadata)
                            })
                        }
                    for (let n of rM(t.items)) {
                        if (s && "mcp-tool-call" === n.type) {
                            let e = (0, rS.b)(n);
                            if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                let t = (0, rw.d)(e.url);
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
                            for (let e of (0, nw.c)(n.content)) f.has(e.id) || f.set(e.id, {
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
                let C = (0, rC.b)(d.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return rM(t.items).filter(e => "mcp-tool-call" === e.type)
                })).at(-1);
                return a = null == C ? [...c.outputs, ...f.values(), ...g.values()] : [{
                    ...C,
                    key: `site:${C.projectId}`,
                    kind: "site"
                }, ...c.outputs.filter(e => null == C.archivePath || ! function(e, t) {
                    if (null != e.sandboxPath) return e.sandboxPath === t;
                    let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != n && e.name.toLowerCase() === n
                }(e, C.archivePath)), ...f.values(), ...g.values()], {
                    automationIds: (0, rj.b)(i, r ?? void 0),
                    browserScreenshots: (0, rE.d)(i),
                    inputs: h,
                    sourceTurns: y,
                    outputs: a,
                    progressSteps: w,
                    isPlanSummaryUpdating: u && i.slice(x + 1).some(e => "assistant" === e.author.role && rj.a.test(e.recipient ?? "") || "tool" === e.author.role && rj.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${d.at(-1)?.id??""}:${u}`,
                    sources: o ? [...Array.from(new Map(i.filter(e => "user" === e.author.role).flatMap(e => (0, r_.a)((0, p.e)(e))).map(e => [e.projectId, e])).values(), e => ({
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
                    subagents: (0, rP.a)(i, {
                        isTurnLive: d.at(-1)?.turn.status === "in_progress"
                    })?.subagents ?? []
                }
            })({
                automationReferences: oH,
                includePages: rY,
                includeSources: !oA,
                isTurnActive: rz || rO,
                ...oU(),
                pendingAttachments: rO ? rk : [],
                turns: oj
            })) : null, ew = oA ? ex?.() : null, nD[134] = oA, nD[135] = rO, nD[136] = oL, nD[137] = rz, nD[138] = rY, nD[139] = rk, nD[140] = oU, nD[141] = oj, nD[142] = oH, nD[143] = ex, nD[144] = ew) : (ex = nD[143], ew = nD[144]);
            let oV = ew,
                oQ = oR || null != oV && (oV.outputs.length > 0 || oV.progressSteps.length > 0 || oV.automationIds.length > 0 || oV.subagents.length > 0 || !aX && oV.browserScreenshots.length > 0),
                o$ = oL && (!oA || oQ),
                oY = o$ && null == sr,
                oX = JSON.stringify([oO, null != sr]),
                oZ = oA ? oG.isOpen : void 0,
                o0 = o$ && !sr?.isFullWidth;
            nD[145] !== sm || nD[146] !== oX || nD[147] !== oZ || nD[148] !== o0 ? (eS = {
                contentShiftResetKey: oX,
                controlledIsOpen: oZ,
                isEnabled: o0,
                floatingPanelWidth: sm
            }, nD[145] = sm, nD[146] = oX, nD[147] = oZ, nD[148] = o0, nD[149] = eS) : eS = nD[149];
            let o1 = (0, t4.a)(eS),
                o2 = aU ?? nH,
                o4 = sn && null == ru,
                o9 = a2 ?? rF,
                ie = r1.isLoading && !rZ,
                ic = r1.isError && !r2;
            nD[150] !== r1.error || nD[151] !== ad ? (ej = ad || (0, na.d)(r1.error) || !(r1.error instanceof na.FetchError && [401, 403, 404].includes(r1.error.status)), nD[150] = r1.error, nD[151] = ad, nD[152] = ej) : ej = nD[152];
            let id = ej;
            nD[153] !== r1.error || nD[154] !== nH || nD[155] !== ic || nD[156] !== ad || nD[157] !== ah || nD[158] !== n1 ? (eI = () => {
                ic && !ad && tG.a.loadFailed(ah, nH, n1, r1.error)
            }, eT = [r1.error, nH, ic, ad, ah, n1], nD[153] = r1.error, nD[154] = nH, nD[155] = ic, nD[156] = ad, nD[157] = ah, nD[158] = n1, nD[159] = eI, nD[160] = eT) : (eI = nD[159], eT = nD[160]), (0, f.useEffect)(eI, eT), nD[161] !== nH || nD[162] !== aS || nD[163] !== aU ? (eE = null, aS || (eE = aU ?? ((0, ek.e)(nH) ? null : nH)), nD[161] = nH, nD[162] = aS, nD[163] = aU, nD[164] = eE) : eE = nD[164], nD[165] !== aL || nD[166] !== r6 || nD[167] !== st || nD[168] !== aW || nD[169] !== n0 || nD[170] !== sd || nD[171] !== sa || nD[172] !== aq || nD[173] !== eE || nD[174] !== n4 || nD[175] !== ah || nD[176] !== al ? (eP = (e, t) => {
                let n = void 0 !== t && t;
                if (null == eE || null != aL || sa) return;
                let a = aH.current?.signal;
                null == a || a.aborted || (aF({
                    messageId: e,
                    activation: al
                }), (0, B.h)(ah, {
                    conversationId: eE,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, no.a)(ah, "opened"), aq(null == n4 ? (0, oF.c)(t, {
                        isTemporaryChat: n0
                    }) : (0, x.C)(n4, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, no.a)(ah, "failed"), aF(null), ah.get(et.f).danger(aW.formatMessage({
                        id: "chatgptConversations.branchFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot continue a conversation in a new chat"
                    }), {
                        errorAnalytics: {
                            toastId: "branch_conversation_failed",
                            operation: "branch_conversation",
                            errorCategory: "conversation",
                            conversationId: eE ?? void 0,
                            retryable: !0,
                            userFacingError: {
                                surface: (0, aI.b)(null == st && null == r6 ? null : sd),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, nD[165] = aL, nD[166] = r6, nD[167] = st, nD[168] = aW, nD[169] = n0, nD[170] = sd, nD[171] = sa, nD[172] = aq, nD[173] = eE, nD[174] = n4, nD[175] = ah, nD[176] = al, nD[177] = eP) : eP = nD[177];
            let iu = (0, t9.a)(eP);
            nD[178] !== r6 || nD[179] !== nH || nD[180] !== st || nD[181] !== aW || nD[182] !== sf || nD[183] !== n0 || nD[184] !== sd || nD[185] !== ah || nD[186] !== aU ? (eA = async (e, t, n, a) => {
                if (!sf) try {
                    await async function(e, t) {
                        let {
                            conversationId: n,
                            isTemporaryChat: a = !1,
                            messageId: r,
                            prompt: s,
                            renderFormat: o,
                            inlineSystemHints: i
                        } = t;
                        if (e.get(e6.j, n)) throw new a5.a("edit_message_busy", "The chat is busy.");
                        let l = e.get(B.y, n);
                        if ("tpp" === l) throw new a5.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                        if (!e.get(re, n)) throw new a5.a("edit_message_busy", "The chat is busy.");
                        let c = e.get(a4.b, {
                            conversationId: n,
                            messageId: r
                        });
                        if (null == c) throw new a5.a("edit_message_target_unavailable", "The user message could not be edited.");
                        let {
                            selectedModel: d
                        } = c, u = s.trim(), h = (0, a4.c)(c.message, e.get, i), p = (0, a9.c)({
                            message: c.message,
                            prompt: u,
                            renderFormat: o,
                            systemHints: h,
                            inlineSystemHints: i
                        }), g = (0, m.f)(p.message.metadata), f = p.message.content, v = "multimodal_text" === f.content_type && f.parts.some(e => "string" != typeof e);
                        if (0 === u.length && 0 === g.length && !v) throw new a5.a("edit_message_empty", "The edited message cannot be empty.");
                        if (e.get(tJ.d, "3574573347")) {
                            let t = e.get(a4.a, n);
                            t?.messageId === r && t.prompt === s && aB()((0, a4.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(a4.a, n, {
                                messageId: r,
                                prompt: s,
                                isTemporaryChat: a,
                                inlineSystemHints: i
                            }), (0, n8.f)(e, n, {
                                isTemporaryChat: a
                            }))
                        }
                        let y = rt(e.get, n),
                            b = y.request.current,
                            x = () => rt(e.get, n).request.current === b && aB()(e.get(a4.b, {
                                conversationId: n,
                                messageId: r
                            }), c) && !(0, B.Ab)(e.get(B.$, n));
                        e.set(e6.j, n, !0);
                        try {
                            if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(a8.a, n) && (await b.stop(), await b.closed), !x()) throw new a5.a("edit_message_target_unavailable", "The edited message or active response changed.");
                            await (0, a9.submitChatGPTCompletion)(e, {
                                isSubmissionCurrent: x,
                                isRequestCurrent: () => e.get(B.C, n) === p.message.id,
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
                            e.set(e6.j, n, !1)
                        }
                    }(ah, {
                        conversationId: nH,
                        isTemporaryChat: n0,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, aI.c)(t);
                    throw ah.get(et.f).danger(aW.formatMessage({
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
                            conversationId: aU ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, aI.b)(null == st && null == r6 ? null : sd),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, nD[178] = r6, nD[179] = nH, nD[180] = st, nD[181] = aW, nD[182] = sf, nD[183] = n0, nD[184] = sd, nD[185] = ah, nD[186] = aU, nD[187] = eA) : eA = nD[187];
            let ih = (0, t9.a)(eA);
            nD[188] !== aA || nD[189] !== r6 || nD[190] !== nH || nD[191] !== st || nD[192] !== aW || nD[193] !== sf || nD[194] !== n0 || nD[195] !== sd || nD[196] !== sa || nD[197] !== aq || nD[198] !== as || nD[199] !== ah || nD[200] !== aU ? (eM = async (e, t) => {
                if (!sf && !sa) try {
                    let n = ah.get(aE.e, nH);
                    if (n?.startsNewWorkConversation || null == ah.get(B.j, nH) || (0, nd.j)(ah.get(B.U, nH)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, p.e)(n.prompt),
                            r = (0, eq.i)(n.prompt.metadata, a, (0, m.e)(n.prompt.metadata), (0, g.w)(a)),
                            s = (0, eQ.a)(n.prompt, a, r),
                            o = ah.get(e6.t, aA),
                            i = "markdown" === s.renderFormat ? s.message : a,
                            l = o.length > 0 ? o : i,
                            c = o.length > 0 ? void 0 : s.renderFormat ?? "plain";
                        if (null != as) return void await as(l, c);
                        if (null == ah.get(B.j, nH) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, tH.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${nH}`;
                            (0, tc.E)(t, (t, n) => n ? t : e) || (0, e6.W)(ah, nH, e), (0, tc.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, p.i)((0, p.r)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, g.w)(a);
                            (0, td.m)(ah, "work"), await aq("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: o.length > 0 ? o : t,
                                    prefillPromptFormat: o.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (sd && !n0 && (0, ti.fb)(ah, (0, tC.b)({
                                entrypoint: "home"
                            }))) return void await aq("/");
                        let d = (0, p.k)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, rs.g)(ah, d);
                        (0, e6.X)(ah, u, t.model);
                        let h = ah.get(B.S, nH);
                        (0, td.m)(ah, sd ? "work" : "chat"), await aq({
                            pathname: "/",
                            search: (0, oF.e)("", n0)
                        }, {
                            state: {
                                initialChatGptConversationId: u,
                                project: null,
                                chatGptProjectId: (0, e8.a)(h) ? h : null,
                                chatGptCustomGptId: (0, e8.a)(h) ? null : h,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: sd
                            }
                        });
                        return
                    }
                    await (0, aE.h)(ah, {
                        conversationId: nH,
                        isTemporaryChat: n0,
                        messageId: e,
                        retry: sd && "error_retry" === t.source && null == t.model.thinkingEffort ? {
                            ...t,
                            model: ah.get(e6.u, nH)
                        } : t
                    })
                } catch {
                    ah.get(et.f).danger(aW.formatMessage({
                        id: "chatgptConversations.regenerate.failed",
                        defaultMessage: "Failed to regenerate response",
                        description: "Error toast shown when generating another version of a ChatGPT response fails"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.regenerate.failed",
                            operation: "regenerate_response",
                            errorCategory: "conversation",
                            conversationId: aU ?? void 0,
                            userFacingError: {
                                surface: (0, aI.b)(null == st && null == r6 ? null : sd),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, nD[188] = aA, nD[189] = r6, nD[190] = nH, nD[191] = st, nD[192] = aW, nD[193] = sf, nD[194] = n0, nD[195] = sd, nD[196] = sa, nD[197] = aq, nD[198] = as, nD[199] = ah, nD[200] = aU, nD[201] = eM) : eM = nD[201];
            let ip = (0, t9.a)(eM);
            nD[202] !== r6 || nD[203] !== nH || nD[204] !== rl || nD[205] !== aW || nD[206] !== aD || nD[207] !== n0 || nD[208] !== aq || nD[209] !== aK || nD[210] !== sq || nD[211] !== ah || nD[212] !== aU || nD[213] !== sI || nD[214] !== al ? (eR = () => {
                if (aD || null == aU) return;
                let e = ah.get(R.t);
                if (!e && !ah.get(R.r) || !e && null == r6 && null == sI) return;
                let t = aH.current?.signal;
                null == t || t.aborted || (aG(al), (e ? (0, nF.f)(ah, {
                    chatGptThreadId: nH,
                    conversationTitle: rl
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, I.a)(ah, e);
                    if ("created" === e.status) return null == n || t.aborted || ah.get(et.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, I.a)(ah, e)
                }) : (0, _.a)({
                    scope: ah,
                    projectId: sq ?? void 0,
                    prompt: `Continuing from ${(0,tu.f)({conversationId:aU,title:rl?.trim()||"ChatGPT thread"})}`
                }).then(ii)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? aK(n) : aq((0, oF.c)(n, {
                            isTemporaryChat: n0
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (aG(null), ah.get(et.f).danger(aW.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot hand off a conversation to a task"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, nD[202] = r6, nD[203] = nH, nD[204] = rl, nD[205] = aW, nD[206] = aD, nD[207] = n0, nD[208] = aq, nD[209] = aK, nD[210] = sq, nD[211] = ah, nD[212] = aU, nD[213] = sI, nD[214] = al, nD[215] = eR) : eR = nD[215];
            let im = eR;
            nD[216] !== nH || nD[217] !== aq || nD[218] !== ah || nD[219] !== aP || nD[220] !== n1 || nD[221] !== am ? (eN = () => {
                if (null != am) {
                    if ((0, ek.e)(nH)) {
                        let e = (0, e_.a)(ah, am, nH);
                        null != e && (ah.get(N.a) ? ah.set(ob.a, e) : aq((0, oF.c)(e)))
                    }
                    return
                }
                let e = ah.query.getData(n9.n, n1);
                null != e && null != n1 && null != aP && ((0, B.nb)(ah, {
                    conversation: e,
                    conversationId: aP,
                    sharedConversationId: n1
                }), ah.get(N.a) ? ah.set(ob.a, aP) : aq((0, oF.c)(aP)))
            }, nD[216] = nH, nD[217] = aq, nD[218] = ah, nD[219] = aP, nD[220] = n1, nD[221] = am, nD[222] = eN) : eN = nD[222];
            let ig = (0, t9.a)(eN);
            nD[223] !== ai ? (eO = ai?.mcpAppContext == null ? null : {
                hostId: tQ.a,
                server: "codex_apps",
                connectorId: ai.mcpAppContext.id
            }, nD[223] = ai, nD[224] = eO) : eO = nD[224];
            let iv = (0, u.x)(tF.b, eO),
                iy = ai?.fullscreenContent != null ? "content" : "workspace",
                ib = (0, $.a)(ad ? "embedded" : iy),
                ix = !iv && (r2 || !r1.isError) && !ac && !sp && (null == am || ap?.authMethod === "chatgpt" || af) && (!aS || null != r6),
                iw = rQ || sp || sS || s_ || sa,
                iC = iw || oi || oo?.needsEntry === !0;
            if (oi) {
                let e;
                nD[225] !== aW ? (e = aW.formatMessage(ot.d.readOnlyPlaceholder), nD[225] = aW, nD[226] = e) : e = nD[226], eB = e
            } else !iw && oo?.needsEntry && (eB = !1);
            let i_ = ix && !iw && !aS && !r3 && !sf && !rz && !rO && !rB && !sV,
                iS = !ix || aS || iC || r3 ? null : aR;
            if (nD[227] !== sV || nD[228] !== aL || nD[229] !== sy || nD[230] !== sb || nD[231] !== r6?.current_node || nD[232] !== nH || nD[233] !== sA || nD[234] !== su || nD[235] !== o9 || nD[236] !== iu || nD[237] !== ih || nD[238] !== ip || nD[239] !== n$ || nD[240] !== ac || nD[241] !== iC || nD[242] !== r3 || nD[243] !== s4 || nD[244] !== sp || nD[245] !== aS || nD[246] !== rO || nD[247] !== n0 || nD[248] !== sn || nD[249] !== rz || nD[250] !== sd || nD[251] !== s_ || nD[252] !== sa || nD[253] !== aT || nD[254] !== rk || nD[255] !== eE || nD[256] !== oS || nD[257] !== oj || nD[258] !== oi || nD[259] !== a7 || nD[260] !== ah.get || nD[261] !== ro || nD[262] !== Q?.current_node || nD[263] !== ao || nD[264] !== ix || nD[265] !== oP || nD[266] !== aQ || nD[267] !== rL) {
                let e;
                nD[269] !== sy || nD[270] !== sb || nD[271] !== su || nD[272] !== sd || nD[273] !== aT || nD[274] !== oS || nD[275] !== oj || nD[276] !== oi || nD[277] !== ah.get || nD[278] !== aQ ? (e = oi || null == aT || null == oS ? oj : (0, n5.a)({
                    ...oS,
                    current_node: aT.promptMessageId
                }, {
                    clinicalSearchEnabled: sb,
                    clinicalCitationsEnabled: sy,
                    enableCloudBrowserActivity: su,
                    streamingOrders: aQ,
                    isWorkConversation: sd,
                    getRenderTelemetry: e => (0, oJ.c)(ah.get, e)
                }), nD[269] = sy, nD[270] = sb, nD[271] = su, nD[272] = sd, nD[273] = aT, nD[274] = oS, nD[275] = oj, nD[276] = oi, nD[277] = ah.get, nD[278] = aQ, nD[279] = e) : e = nD[279];
                let t = (0, ae.c)({
                    paragen: aT,
                    hideInitialUserMessage: n$,
                    browserConversationId: void 0,
                    conversationId: nH,
                    enableCloudBrowserActivity: su,
                    errorMessage: o9,
                    branchingMessageId: aL,
                    isReadOnly: ac || sp || aS || null != ao,
                    isTemporaryChat: n0,
                    isWorkConversation: sn,
                    onRegenerateResponse: sV || aS || null != ao || ac || sp || s_ || sa || rz || rO ? void 0 : ip,
                    onEditUserMessage: sV || null == eE || sn || ac || sp || s_ || !rL || rO ? void 0 : ih,
                    onFork: null == eE || n0 || s_ || sa || ac || sp ? void 0 : iu,
                    pendingSubmissionAttachments: rk,
                    shareEnabled: null == sA && !n0 && !aS && !ac && !sp && !s4,
                    readAloudEnabled: !aS && !sp,
                    feedbackEnabled: !aS && !sp && null == ao,
                    renderedTurns: e,
                    safetyReview: a7,
                    sharedConversationLastMessageId: Q?.current_node ?? ro ?? (aS ? r6?.current_node : null),
                    showPendingLoadingMessage: oP,
                    showRequestUserInputStatus: ix && !iC && !r3
                });
                eF = oi ? (0, ot.a)(t) : t, nD[227] = sV, nD[228] = aL, nD[229] = sy, nD[230] = sb, nD[231] = r6?.current_node, nD[232] = nH, nD[233] = sA, nD[234] = su, nD[235] = o9, nD[236] = iu, nD[237] = ih, nD[238] = ip, nD[239] = n$, nD[240] = ac, nD[241] = iC, nD[242] = r3, nD[243] = s4, nD[244] = sp, nD[245] = aS, nD[246] = rO, nD[247] = n0, nD[248] = sn, nD[249] = rz, nD[250] = sd, nD[251] = s_, nD[252] = sa, nD[253] = aT, nD[254] = rk, nD[255] = eE, nD[256] = oS, nD[257] = oj, nD[258] = oi, nD[259] = a7, nD[260] = ah.get, nD[261] = ro, nD[262] = Q?.current_node, nD[263] = ao, nD[264] = ix, nD[265] = oP, nD[266] = aQ, nD[267] = rL, nD[268] = eF
            } else eF = nD[268];
            let ij = eF;
            nD[280] !== aW ? (ez = aW.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation",
                description: "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop"
            }), nD[280] = aW, nD[281] = ez) : ez = nD[281];
            let iI = ez,
                iT = (0, u.x)(ss.g, aU ?? nH);
            nD[282] !== r8 || nD[283] !== r6 || nD[284] !== iT || nD[285] !== ac || nD[286] !== r9 || nD[287] !== sp || nD[288] !== aS || nD[289] !== sS || nD[290] !== n0 || nD[291] !== aU ? (eG = null != aU && !aS && !sS && !ac && !sp && !n0 && (0, n7.b)(r6, r8, r9, iT), nD[282] = r8, nD[283] = r6, nD[284] = iT, nD[285] = ac, nD[286] = r9, nD[287] = sp, nD[288] = aS, nD[289] = sS, nD[290] = n0, nD[291] = aU, nD[292] = eG) : eG = nD[292];
            let iE = eG;
            nD[293] !== nH || nD[294] !== sA ? (eL = null == sA ? null : (0, a.jsx)(rr.ChatGptGizmoHeader, {
                conversationId: nH,
                gizmoId: sA
            }), nD[293] = nH, nD[294] = sA, nD[295] = eL) : eL = nD[295];
            let iP = eL;
            nD[296] !== ac || nD[297] !== aS || nD[298] !== sn ? (eD = !sn || aS || ac ? null : (0, a.jsx)(tS.a, {
                hostId: tQ.a
            }), nD[296] = ac, nD[297] = aS, nD[298] = sn, nD[299] = eD) : eD = nD[299];
            let iA = eD,
                iM = !aS && null == ao && !ac && !n0 && !aX,
                ik = (0, u.x)(!!iM && sJ.c, nH);
            nD[300] !== nH || nD[301] !== ik ? (eH = ik ? (0, a.jsx)(sX, {
                conversationId: nH
            }) : null, nD[300] = nH, nD[301] = ik, nD[302] = eH) : eH = nD[302];
            let iR = eH;
            nD[303] !== i_ || nD[304] !== nH || nD[305] !== sf || nD[306] !== oo ? (eW = null != oo ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: sf,
                children: (0, a.jsx)(sF, {
                    conversationId: nH,
                    placement: "progress",
                    canStartSection: i_
                })
            }) : null, nD[303] = i_, nD[304] = nH, nD[305] = sf, nD[306] = oo, nD[307] = eW) : eW = nD[307];
            let iN = eW,
                iO = !r2 && !(n0 && null != a$) && (null == r6 || r1.isFetching && null == r6.title),
                iB = aY.data?.sectioned_conversation != null;
            nD[308] !== nH || nD[309] !== iB ? (e$ = {
                conversationId: nH,
                hasHistorySections: iB
            }, nD[308] = nH, nD[309] = iB, nD[310] = e$) : e$ = nD[310];
            let iF = (0, u.x)(!!(os && (0, tx.a)({
                    browser: !0
                })) && on.h, e$),
                iz = iO || iF,
                iG = null != oo;
            nD[311] !== ik || nD[312] !== iz || nD[313] !== iG ? (eY = function(e) {
                let {
                    hasCourseShortcut: t,
                    hasSectionNavigation: n,
                    hideBrowserTitle: a
                } = e;
                return (0, tx.a)({
                    browser: !0
                }) ? !a && !t && !n : !n || !t && sR
            }({
                hasCourseShortcut: ik,
                hasSectionNavigation: iG,
                hideBrowserTitle: iz
            }), nD[311] = ik, nD[312] = iz, nD[313] = iG, nD[314] = eY) : eY = nD[314];
            let iL = (0, u.z)(eY),
                iD = !sK && !n0 && !ac && !sp;
            nD[315] !== rl || nD[316] !== iL || nD[317] !== aS || nD[318] !== sS || nD[319] !== aU || nD[320] !== iD ? (eX = iD && iL && !aS && !sS && null != aU && !!rl.trim(), nD[315] = rl, nD[316] = iL, nD[317] = aS, nD[318] = sS, nD[319] = aU, nD[320] = iD, nD[321] = eX) : eX = nD[321];
            let iH = eX;
            nD[322] !== aa || nD[323] !== sd || nD[324] !== s5 ? (eJ = (0, tx.a)({
                browser: !0
            }) && !sd && null != s5 && null == aa, nD[322] = aa, nD[323] = sd, nD[324] = s5, nD[325] = eJ) : eJ = nD[325];
            let iW = eJ;
            nD[326] !== iH || nD[327] !== iW || nD[328] !== s8 || nD[329] !== sq || nD[330] !== s5 ? (eZ = iH && null != sq && !iW ? {
                icon: s8,
                name: s5
            } : void 0, nD[326] = iH, nD[327] = iW, nD[328] = s8, nD[329] = sq, nD[330] = s5, nD[331] = eZ) : eZ = nD[331];
            let iq = eZ,
                iK = rc || null != r6 ? r7 ?? "" : null;
            nD[332] !== iE || nD[333] !== nH || nD[334] !== rl || nD[335] !== iH || nD[336] !== iK || nD[337] !== iq ? (e0 = (0, a.jsx)(sk, {
                conversationId: nH,
                canRename: iE,
                hasTitleMenu: iH,
                project: iq,
                title: rl,
                titleValue: iK
            }), nD[332] = iE, nD[333] = nH, nD[334] = rl, nD[335] = iH, nD[336] = iK, nD[337] = iq, nD[338] = e0) : e0 = nD[338];
            let iU = e0,
                iV = o4 && !aS && !ac,
                iQ = sK ? null : iP;
            nD[339] !== iW || nD[340] !== s8 || nD[341] !== sq || nD[342] !== s5 || nD[343] !== iq ? (e1 = null != sq && null == iq ? (0, a.jsx)(sP, {
                projectId: sq,
                name: s5,
                icon: s8,
                linkToProject: iW
            }) : null, nD[339] = iW, nD[340] = s8, nD[341] = sq, nD[342] = s5, nD[343] = iq, nD[344] = e1) : e1 = nD[344], nD[345] !== aa || nD[346] !== iQ || nD[347] !== e1 ? (e2 = (0, a.jsxs)(a.Fragment, {
                children: [aa, iQ, e1]
            }), nD[345] = aa, nD[346] = iQ, nD[347] = e1, nD[348] = e2) : e2 = nD[348], nD[349] !== nH || nD[350] !== iU || nD[351] !== sK || nD[352] !== iz ? (e3 = sK ? (0, a.jsx)(ni.BusinessAgentConversationHeader, {
                conversationId: nH,
                fallback: null
            }) : iz ? null : (0, a.jsx)(a.Fragment, {
                children: iU
            }), nD[349] = nH, nD[350] = iU, nD[351] = sK, nD[352] = iz, nD[353] = e3) : e3 = nD[353], nD[354] !== n0 || nD[355] !== iA || nD[356] !== iV || nD[357] !== e2 || nD[358] !== e3 ? (e5 = (0, a.jsx)(sx.a, {
                isTemporaryChat: n0,
                isCloudTask: iV,
                leading: e2,
                start: e3,
                startActions: iA
            }), nD[354] = n0, nD[355] = iA, nD[356] = iV, nD[357] = e2, nD[358] = e3, nD[359] = e5) : e5 = nD[359];
            let i$ = e5;
            nD[360] !== i$ || nD[361] !== iR || nD[362] !== iN ? (e7 = null != iR || null != iN ? (0, a.jsx)(sj, {
                header: i$,
                courseShortcut: iR,
                progress: iN
            }) : null, nD[360] = i$, nD[361] = iR, nD[362] = iN, nD[363] = e7) : e7 = nD[363];
            let iY = e7;
            if (nD[364] !== r1 || nD[365] !== ap?.authMethod || nD[366] !== sV || nD[367] !== ar || nD[368] !== sw || nD[369] !== sW || nD[370] !== id || nD[371] !== i_ || nD[372] !== aA || nD[373] !== sU || nD[374] !== at || nD[375] !== r6 || nD[376] !== i$ || nD[377] !== nH || nD[378] !== iI || nD[379] !== st || nD[380] !== rl || nD[381] !== oG || nD[382] !== nQ || nD[383] !== o9 || nD[384] !== sr || nD[385] !== sm || nD[386] !== ex || nD[387] !== sT || nD[388] !== r4 || nD[389] !== im || nD[390] !== ig || nD[391] !== ic || nD[392] !== rZ || nD[393] !== iH || nD[394] !== nU || nD[395] !== a_ || nD[396] !== ac || nD[397] !== oA || nD[398] !== iC || nD[399] !== o_ || nD[400] !== r3 || nD[401] !== ie || nD[402] !== aM || nD[403] !== aD || nD[404] !== s2 || nD[405] !== ad || nD[406] !== s3 || nD[407] !== iv || nD[408] !== rX || nD[409] !== sf || nD[410] !== sp || nD[411] !== sc || !1 !== nD[412] || nD[413] !== aS || nD[414] !== sS || nD[415] !== rB || nD[416] !== rO || nD[417] !== n0 || nD[418] !== sn || nD[419] !== rz || nD[420] !== sd || nD[421] !== sC || nD[422] !== rU || nD[423] !== s_ || nD[424] !== sa || nD[425] !== se || nD[426] !== iY || nD[427] !== so.pathname || nD[428] !== r0 || nD[429] !== si?.sidebarAutomationId || nD[430] !== nZ || nD[431] !== sl || nD[432] !== sY || nD[433] !== s8 || nD[434] !== sq || nD[435] !== s5 || nD[436] !== eB || nD[437] !== sN || nD[438] !== oS || nD[439] !== oj || nD[440] !== n3 || nD[441] !== oi || nD[442] !== ib || nD[443] !== r7 || nD[444] !== ah || nD[445] !== nX || nD[446] !== aJ || nD[447] !== oo || nD[448] !== iN || nD[449] !== aU || nD[450] !== oz || nD[451] !== n1 || nD[452] !== am || nD[453] !== r5 || nD[454] !== ao || nD[455] !== or || nD[456] !== aX || nD[457] !== iM || nD[458] !== oY || nD[459] !== ix || nD[460] !== au || nD[461] !== iD || nD[462] !== oP || nD[463] !== iS || nD[464] !== o2 || nD[465] !== o1 || nD[466] !== aZ || nD[467] !== nY || nD[468] !== ij || nD[469] !== ai) {
                th = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, n, r, s, o, i, l, c, d, u, m, g, v = oj.flatMap(io).flatMap(is),
                        y = v.flatMap(ir);
                    if (!aS && (r1.error instanceof na.FetchError && 423 === r1.error.status || s3 && null == r0)) {
                        let e;
                        nD[495] !== r1 || nD[496] !== nH || nD[497] !== ah ? (e = (0, a.jsx)(s0.a, {
                            onUnlocked: () => {
                                (0, s1.g)(ah.get(s1.f)?.projectId, [nH]), r1.refetch()
                            }
                        }), nD[495] = r1, nD[496] = nH, nD[497] = ah, nD[498] = e) : e = nD[498], th = e;
                        break e
                    }
                    if (null != or) {
                        let e;
                        nD[499] !== or ? (e = (0, a.jsx)(x.l, {
                            replace: !0,
                            to: or
                        }), nD[499] = or, nD[500] = e) : e = nD[500], th = e;
                        break e
                    }
                    tn = s9,
                    nD[501] !== r6 || nD[502] !== rZ || nD[503] !== ac || nD[504] !== ie || nD[505] !== ad || nD[506] !== sp || nD[507] !== aS || nD[508] !== sd ? (tM = sd || aS || ad || sp || ac || ie || null == r6 && !rZ ? null : (0, a.jsx)(V.a, {}), nD[501] = r6, nD[502] = rZ, nD[503] = ac, nD[504] = ie, nD[505] = ad, nD[506] = sp, nD[507] = aS, nD[508] = sd, nD[509] = tM) : tM = nD[509],
                    nD[510] !== r1.fetchStatus || nD[511] !== r6 || nD[512] !== ic || nD[513] !== rZ || nD[514] !== ie || nD[515] !== ad ? (tk = !1, nD[510] = r1.fetchStatus, nD[511] = r6, nD[512] = ic, nD[513] = rZ, nD[514] = ie, nD[515] = ad, nD[516] = tk) : tk = nD[516],
                    nD[517] !== r1.data || nD[518] !== r1.fetchStatus || nD[519] !== r6 || nD[520] !== nH || nD[521] !== ic || nD[522] !== rZ || nD[523] !== o_ || nD[524] !== ie || !1 !== nD[525] || nD[526] !== oj.length ? (tq = null, nD[517] = r1.data, nD[518] = r1.fetchStatus, nD[519] = r6, nD[520] = nH, nD[521] = ic, nD[522] = rZ, nD[523] = o_, nD[524] = ie, nD[525] = !1, nD[526] = oj.length, nD[527] = tq) : tq = nD[527],
                    tU = !aS && !sp && (0, tN.c)() ? (0, a.jsx)(tO.c, {
                        callIds: y,
                        hostId: tQ.a,
                        conversationId: (0, h.Se)(`chatgpt:${nH}`)
                    }) : null,
                    nD[528] !== rl || nD[529] !== ad || nD[530] !== am || nD[531] !== ai?.documentTitle ? (tX = ad ? null : (0, a.jsx)(tw.a, {
                        title: null == am ? ai?.documentTitle ?? rl : null
                    }), nD[528] = rl, nD[529] = ad, nD[530] = am, nD[531] = ai?.documentTitle, nD[532] = tX) : tX = nD[532],
                    nD[533] !== nH || nD[534] !== ad || nD[535] !== sf || nD[536] !== aS || nD[537] !== n0 || nD[538] !== sd || nD[539] !== ij ? (ta = ad || sd ? null : (0, a.jsx)(rW.a, {
                        conversationId: nH,
                        canCopy: !sf,
                        paragenEnabled: !aS,
                        turns: ij,
                        loadHistory: !n0 && !aS
                    }), nD[533] = nH, nD[534] = ad, nD[535] = sf, nD[536] = aS, nD[537] = n0, nD[538] = sd, nD[539] = ij, nD[540] = ta) : ta = nD[540];
                    let b = null != r6 || rZ;nD[541] !== ic || nD[542] !== sd || nD[543] !== b ? (tr = (0, a.jsx)(nr.a, {
                        isWorkConversation: sd,
                        hasConversationContent: b,
                        hasLoadError: ic
                    }), nD[541] = ic, nD[542] = sd, nD[543] = b, nD[544] = tr) : tr = nD[544],
                    nD[545] !== r6 || nD[546] !== nH || nD[547] !== ic || nD[548] !== rZ || nD[549] !== ie || nD[550] !== ad || nD[551] !== so.pathname || nD[552] !== ah || nD[553] !== n1 ? (ts = ad || ie || ic || null == r6 && !rZ ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(og, {
                            sharedConversationId: n1
                        }), (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(tL.a, {
                                onCommit: () => tG.a.contentCommitted(ah, nH, n1, so.pathname),
                                onPaint: () => tG.a.contentVisible(ah, nH, n1)
                            }, n1 ?? nH)
                        })]
                    }), nD[545] = r6, nD[546] = nH, nD[547] = ic, nD[548] = rZ, nD[549] = ie, nD[550] = ad, nD[551] = so.pathname, nD[552] = ah, nD[553] = n1, nD[554] = ts) : ts = nD[554],
                    nD[555] !== ap?.authMethod || nD[556] !== sW || nD[557] !== sU || nD[558] !== r6 || nD[559] !== i$ || nD[560] !== nH || nD[561] !== st || nD[562] !== rl || nD[563] !== oG || nD[564] !== ex || nD[565] !== sT || nD[566] !== im || nD[567] !== iH || nD[568] !== ac || nD[569] !== oA || nD[570] !== aD || nD[571] !== s2 || nD[572] !== ad || nD[573] !== s3 || nD[574] !== aS || nD[575] !== n0 || nD[576] !== rz || nD[577] !== sd || nD[578] !== iY || nD[579] !== si?.sidebarAutomationId || nD[580] !== sl || nD[581] !== s8 || nD[582] !== sq || nD[583] !== s5 || nD[584] !== sN || nD[585] !== oS || nD[586] !== oj.length || nD[587] !== ah || nD[588] !== aU || nD[589] !== oz || nD[590] !== ao || nD[591] !== aX || nD[592] !== iM || nD[593] !== oY || nD[594] !== iD || nD[595] !== iS || nD[596] !== o2 || nD[597] !== aZ || nD[598] !== ai ? (to = ad || null != ai ? null : (0, a.jsxs)(rK.a, {
                        chatIcon: null == sq ? void 0 : s8,
                        header: null != iY ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(a.Fragment, {
                                children: iY
                            }), null]
                        }) : i$,
                        title: rl,
                        isArchivedPreview: ac,
                        children: [null, ap?.authMethod === "chatgpt" ? (0, a.jsx)(tj.u, {
                            productExperience: sd ? "work" : "chat"
                        }) : null, aS ? (0, a.jsx)(oy.a, {
                            children: null == sN ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(oE, {
                                    data: sN
                                })
                            })
                        }) : null, iM ? (0, a.jsx)(rV, {
                            conversationId: nH,
                            scheduledAutomationId: sl ? si?.sidebarAutomationId : void 0
                        }, nH) : null, oY ? (0, a.jsx)(ry, {
                            composerActions: iS,
                            conversationId: o2,
                            controlledState: oA ? {
                                isOpen: oG.isOpen,
                                shouldPreventAutoFocus: oG.shouldPreventAutoFocus,
                                onOpenChange: e => {
                                    oz({
                                        ...oG,
                                        isOpen: e,
                                        shouldPreventAutoFocus: !e && oG.shouldPreventAutoFocus
                                    })
                                }
                            } : void 0,
                            readData: !oA || oG.isOpen ? ex : null,
                            showSources: !oA,
                            shouldBlockExternalEgress: aX
                        }) : null, n0 && !aS && !ac && null == sT && null == sU && null == sq && !s2 && null != oS && (0, p.a)(oS).some(ia) ? (0, a.jsx)(T.a.HeaderAction, {
                            actionId: "chatgpt-conversation-save",
                            align: "end",
                            order: 100,
                            children: (0, a.jsx)(oW, {
                                conversationId: nH
                            })
                        }) : null, iD ? (0, a.jsx)(sx.b, {
                            hasTitleMenu: iH,
                            menu: aS || null == aU ? (0, a.jsx)(sv, {}) : (0, a.jsx)(sg, {
                                isTitleMenu: iH,
                                conversationId: nH,
                                title: rl,
                                isHandoffPending: aD,
                                isArchived: r6?.is_archived === !0,
                                isChatConversation: null != r6 && !sd,
                                onHandoff: sW ? im : void 0,
                                onOpenMessage: async e => {
                                    aH.current?.signal.aborted === !1 && ah.get(j.b)?.pathname === ah.value.pathname && await ak.current?.scrollToMessage(e)
                                },
                                projectId: sq,
                                projectName: s5,
                                serverConversationId: aU,
                                conversationOrigin: st
                            }),
                            children: aS || s3 ? null : (0, a.jsx)(ay, {
                                conversationId: nH,
                                projectId: sq,
                                sharedProjectConversation: ao,
                                isReady: (null != aU || null != ao) && oj.length > 0 && (aZ ?? r6?.current_node) != null,
                                isRestricted: aX || s2,
                                isStreaming: rz
                            })
                        }) : null]
                    }), nD[555] = ap?.authMethod, nD[556] = sW, nD[557] = sU, nD[558] = r6, nD[559] = i$, nD[560] = nH, nD[561] = st, nD[562] = rl, nD[563] = oG, nD[564] = ex, nD[565] = sT, nD[566] = im, nD[567] = iH, nD[568] = ac, nD[569] = oA, nD[570] = aD, nD[571] = s2, nD[572] = ad, nD[573] = s3, nD[574] = aS, nD[575] = n0, nD[576] = rz, nD[577] = sd, nD[578] = iY, nD[579] = si?.sidebarAutomationId, nD[580] = sl, nD[581] = s8, nD[582] = sq, nD[583] = s5, nD[584] = sN, nD[585] = oS, nD[586] = oj.length, nD[587] = ah, nD[588] = aU, nD[589] = oz, nD[590] = ao, nD[591] = aX, nD[592] = iM, nD[593] = oY, nD[594] = iD, nD[595] = iS, nD[596] = o2, nD[597] = aZ, nD[598] = ai, nD[599] = to) : to = nD[599],
                    tl = null,
                    tt = ra.a,
                    ty = aA,
                    t_ = st,
                    tT = !au || !ix || ib.isHidden || iC || sV || sf || r3 || ac || sp || sS || s_ || sa || rB || rO,
                    tE = n0,
                    tP = sq,
                    tA = null != sU,
                    te = t0.c,
                    tp = sm,
                    nD[600] !== ad || nD[601] !== sc || nD[602] !== sd || nD[603] !== iN || nD[604] !== ai ? (tm = ad || null != ai ? iN : sc && (0, t5.a)() && !sd && (0, a.jsx)("div", {
                        className: "h-px",
                        "aria-hidden": !0
                    }), nD[600] = ad, nD[601] = sc, nD[602] = sd, nD[603] = iN, nD[604] = ai, nD[605] = tm) : tm = nD[605],
                    tg = ar;
                    let w = null == oo ? "flex h-full min-h-0 flex-col" : "h-full",
                        C = r7 ?? rl,
                        _ = !sf,
                        S = !aM && !ad && !aS && !iv && !ib.isHidden,
                        I = aX || sw,
                        E = sr?.isFullWidth === !0,
                        P = null == sr ? o1.contentShift : void 0,
                        A = oo?.selectedIndex;nD[606] !== i_ || nD[607] !== nH || nD[608] !== oo ? (e = null != oo ? (0, a.jsx)(sF, {
                        conversationId: nH,
                        placement: "composer",
                        canStartSection: i_
                    }) : void 0, nD[606] = i_, nD[607] = nH, nD[608] = oo, nD[609] = e) : e = nD[609],
                    nD[610] !== nH || nD[611] !== oo ? (t = null != oo ? (0, a.jsx)(sB, {
                        conversationId: nH
                    }) : void 0, nD[610] = nH, nD[611] = oo, nD[612] = t) : t = nD[612];
                    let M = !sd,
                        k = oi ? null : o9;nD[613] !== r1 || nD[614] !== id ? (n = id ? () => {
                        r1.refetch({
                            cancelRefetch: !1
                        })
                    } : void 0, nD[613] = r1, nD[614] = id, nD[615] = n) : n = nD[615];
                    let R = oj.length > 0,
                        N = eB,
                        O = !s2 && (null == sq || null != sY),
                        B = null == oo && !se,
                        F = r1.isFetching,
                        z = !oi && rz;nD[616] !== r6?.is_archived || nD[617] !== nH || nD[618] !== ac || nD[619] !== ad || nD[620] !== aS || nD[621] !== n0 || nD[622] !== rz || nD[623] !== sd ? (r = ad || !sd || aS || ac || r6?.is_archived === !0 || n0 ? null : (0, a.jsx)(f.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(sO, {
                            conversationId: nH,
                            isTurnActive: rz
                        })
                    }), nD[616] = r6?.is_archived, nD[617] = nH, nD[618] = ac, nD[619] = ad, nD[620] = aS, nD[621] = n0, nD[622] = rz, nD[623] = sd, nD[624] = r) : r = nD[624],
                    nD[625] !== nH || nD[626] !== ac || nD[627] !== aU ? (s = ac ? (0, a.jsx)(tY.a, {
                        conversationId: aU ?? nH,
                        kind: "chatgpt"
                    }, aU ?? nH) : void 0, nD[625] = nH, nD[626] = ac, nD[627] = aU, nD[628] = s) : s = nD[628];
                    let G = !oi && oP;nD[629] !== sU ? (o = null != sU ? (0, a.jsx)(sD.GptPluginMigrationBanner, {
                        gizmoId: sU
                    }) : null, nD[629] = sU, nD[630] = o) : o = nD[630],
                    nD[631] !== sW || nD[632] !== im || nD[633] !== aD || nD[634] !== n0 || nD[635] !== sC || nD[636] !== rU ? (i = sC && !n0 ? (0, a.jsx)(rG, {
                        canConvert: sW,
                        isChatInstantAvailable: !rU,
                        isConverting: aD,
                        onConvert: im
                    }) : null, nD[631] = sW, nD[632] = im, nD[633] = aD, nD[634] = n0, nD[635] = sC, nD[636] = rU, nD[637] = i) : i = nD[637],
                    nD[638] !== r4 || nD[639] !== sp ? (l = r4.bind(null, sp), nD[638] = r4, nD[639] = sp, nD[640] = l) : l = nD[640],
                    nD[641] !== ig || nD[642] !== aS || nD[643] !== nZ ? (c = e => {
                        nZ?.(e), aS && ig()
                    }, nD[641] = ig, nD[642] = aS, nD[643] = nZ, nD[644] = c) : c = nD[644],
                    nD[645] !== r1.isFetching || nD[646] !== sV || nD[647] !== aA || nD[648] !== sU || nD[649] !== at || nD[650] !== nH || nD[651] !== iI || nD[652] !== nQ || nD[653] !== ic || nD[654] !== nU || nD[655] !== a_ || nD[656] !== iC || nD[657] !== o_ || nD[658] !== r3 || nD[659] !== ie || nD[660] !== aM || nD[661] !== ad || nD[662] !== aS || nD[663] !== n0 || nD[664] !== sn || nD[665] !== eB || nD[666] !== n3 || nD[667] !== nX || nD[668] !== aJ || nD[669] !== n1 || nD[670] !== r5 || nD[671] !== ix || nD[672] !== au || nD[673] !== C || nD[674] !== _ || nD[675] !== S || nD[676] !== I || nD[677] !== E || nD[678] !== P || nD[679] !== A || nD[680] !== e || nD[681] !== t || nD[682] !== M || nD[683] !== k || nD[684] !== n || nD[685] !== R || nD[686] !== O || nD[687] !== B || nD[688] !== z || nD[689] !== r || nD[690] !== s || nD[691] !== G || nD[692] !== o || nD[693] !== i || nD[694] !== l || nD[695] !== c || nD[696] !== nY || nD[697] !== ij || nD[698] !== ai ? (d = (0, a.jsx)(il, {
                        ref: ak,
                        printTitle: C,
                        trackShownImpressions: _,
                        trackReadState: S,
                        workspace: ai,
                        shouldBlockMcpApps: I,
                        isCoveredByFloatingPanel: E,
                        isFormOnly: aM,
                        isInlinePreview: ad,
                        hideModelPicker: nU,
                        showFilePicker: au,
                        disableAutoFocus: nQ,
                        transcriptPresentation: nY,
                        scrollOrigin: nX,
                        composerRef: aN,
                        contentX: P,
                        conversationId: nH,
                        composerConversationId: aA,
                        sectionIndex: A,
                        composerLeadingContent: at,
                        aboveComposerContent: e,
                        historyLoadingContent: t,
                        requiredSystemHints: n3,
                        isChatConversation: M,
                        customGptId: sU,
                        conversationLoadingLabel: iI,
                        entries: ij,
                        errorMessage: k,
                        hasLoadError: ic,
                        onRetryLoad: n,
                        hasRenderableTurns: R,
                        isComposerDisabled: iC,
                        readOnlyPlaceholder: N,
                        moreDetailsEnabled: O,
                        isConversationEmpty: o_,
                        showEmptyState: B,
                        isConversationFetching: F,
                        isConversationLoading: ie,
                        isSharedConversation: aS,
                        isSubmitDisabled: r3,
                        isTemporaryChat: n0,
                        isTurnActive: z,
                        isWorkConversation: sn,
                        onboardingPrelude: r,
                        scrollStateConversationId: aJ,
                        initialResponsePlacementKey: a_,
                        sharedConversationId: n1,
                        sharedPostRegulatedConnectorKind: r5,
                        showComposer: ix,
                        archivedPreviewFooter: s,
                        showPendingLoadingMessage: G,
                        gptPluginMigrationBanner: o,
                        awaitingGptContinuation: sV,
                        workOnlyConversionBanner: i,
                        onAddSelectedText: l,
                        onSubmitAccepted: c
                    }), nD[645] = r1.isFetching, nD[646] = sV, nD[647] = aA, nD[648] = sU, nD[649] = at, nD[650] = nH, nD[651] = iI, nD[652] = nQ, nD[653] = ic, nD[654] = nU, nD[655] = a_, nD[656] = iC, nD[657] = o_, nD[658] = r3, nD[659] = ie, nD[660] = aM, nD[661] = ad, nD[662] = aS, nD[663] = n0, nD[664] = sn, nD[665] = eB, nD[666] = n3, nD[667] = nX, nD[668] = aJ, nD[669] = n1, nD[670] = r5, nD[671] = ix, nD[672] = au, nD[673] = C, nD[674] = _, nD[675] = S, nD[676] = I, nD[677] = E, nD[678] = P, nD[679] = A, nD[680] = e, nD[681] = t, nD[682] = M, nD[683] = k, nD[684] = n, nD[685] = R, nD[686] = O, nD[687] = B, nD[688] = z, nD[689] = r, nD[690] = s, nD[691] = G, nD[692] = o, nD[693] = i, nD[694] = l, nD[695] = c, nD[696] = nY, nD[697] = ij, nD[698] = ai, nD[699] = d) : d = nD[699],
                    nD[700] !== oG || nD[701] !== ex || nD[702] !== oA || nD[703] !== aX || nD[704] !== oY || nD[705] !== iS || nD[706] !== o2 || nD[707] !== o1 ? (u = oY && null != ex && (!oA || oG.isOpen) ? (0, a.jsx)(rv, {
                        composerActions: iS,
                        conversationId: o2,
                        readData: ex,
                        showSources: !oA,
                        display: o1,
                        shouldBlockExternalEgress: aX
                    }) : null, nD[700] = oG, nD[701] = ex, nD[702] = oA, nD[703] = aX, nD[704] = oY, nD[705] = iS, nD[706] = o2, nD[707] = o1, nD[708] = u) : u = nD[708],
                    nD[709] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, a.jsx)(rn.a, {}), nD[709] = m) : m = nD[709],
                    nD[710] !== ad ? (g = null, nD[710] = ad, nD[711] = g) : g = nD[711],
                    nD[712] !== sf || nD[713] !== w || nD[714] !== d || nD[715] !== u || nD[716] !== g ? (tf = (0, a.jsxs)("div", {
                        className: w,
                        inert: sf,
                        children: [d, u, m, g]
                    }), nD[712] = sf, nD[713] = w, nD[714] = d, nD[715] = u, nD[716] = g, nD[717] = tf) : tf = nD[717],
                    tv = !sp && (0, tN.c)() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(o5, {
                            conversationId: nH,
                            shouldBlockExternalEgress: aX || sw,
                            widgets: v.filter(it)
                        }), aS ? null : (0, a.jsx)(tB.a, {
                            blockedWidgetSource: rX ? void 0 : "descriptor",
                            transcriptMcpAppIds: (0, o3.c)(nH, v, rX),
                            shouldBlockExternalEgress: aX || sw
                        })]
                    }) : null
                }
                nD[364] = r1, nD[365] = ap?.authMethod, nD[366] = sV, nD[367] = ar, nD[368] = sw, nD[369] = sW, nD[370] = id, nD[371] = i_, nD[372] = aA, nD[373] = sU, nD[374] = at, nD[375] = r6, nD[376] = i$, nD[377] = nH, nD[378] = iI, nD[379] = st, nD[380] = rl, nD[381] = oG, nD[382] = nQ, nD[383] = o9, nD[384] = sr, nD[385] = sm, nD[386] = ex, nD[387] = sT, nD[388] = r4, nD[389] = im, nD[390] = ig, nD[391] = ic, nD[392] = rZ, nD[393] = iH, nD[394] = nU, nD[395] = a_, nD[396] = ac, nD[397] = oA, nD[398] = iC, nD[399] = o_, nD[400] = r3, nD[401] = ie, nD[402] = aM, nD[403] = aD, nD[404] = s2, nD[405] = ad, nD[406] = s3, nD[407] = iv, nD[408] = rX, nD[409] = sf, nD[410] = sp, nD[411] = sc, nD[412] = !1, nD[413] = aS, nD[414] = sS, nD[415] = rB, nD[416] = rO, nD[417] = n0, nD[418] = sn, nD[419] = rz, nD[420] = sd, nD[421] = sC, nD[422] = rU, nD[423] = s_, nD[424] = sa, nD[425] = se, nD[426] = iY, nD[427] = so.pathname, nD[428] = r0, nD[429] = si?.sidebarAutomationId, nD[430] = nZ, nD[431] = sl, nD[432] = sY, nD[433] = s8, nD[434] = sq, nD[435] = s5, nD[436] = eB, nD[437] = sN, nD[438] = oS, nD[439] = oj, nD[440] = n3, nD[441] = oi, nD[442] = ib, nD[443] = r7, nD[444] = ah, nD[445] = nX, nD[446] = aJ, nD[447] = oo, nD[448] = iN, nD[449] = aU, nD[450] = oz, nD[451] = n1, nD[452] = am, nD[453] = r5, nD[454] = ao, nD[455] = or, nD[456] = aX, nD[457] = iM, nD[458] = oY, nD[459] = ix, nD[460] = au, nD[461] = iD, nD[462] = oP, nD[463] = iS, nD[464] = o2, nD[465] = o1, nD[466] = aZ, nD[467] = nY, nD[468] = ij, nD[469] = ai, nD[470] = te, nD[471] = tt, nD[472] = tn, nD[473] = ta, nD[474] = tr, nD[475] = ts, nD[476] = to, nD[477] = tl, nD[478] = th, nD[479] = tp, nD[480] = tm, nD[481] = tg, nD[482] = tf, nD[483] = tv, nD[484] = ty, nD[485] = t_, nD[486] = tT, nD[487] = tE, nD[488] = tP, nD[489] = tA, nD[490] = tM, nD[491] = tk, nD[492] = tq, nD[493] = tU, nD[494] = tX
            } else te = nD[470], tt = nD[471], tn = nD[472], ta = nD[473], tr = nD[474], ts = nD[475], to = nD[476], tl = nD[477], th = nD[478], tp = nD[479], tm = nD[480], tg = nD[481], tf = nD[482], tv = nD[483], ty = nD[484], t_ = nD[485], tT = nD[486], tE = nD[487], tP = nD[488], tA = nD[489], tM = nD[490], tk = nD[491], tq = nD[492], tU = nD[493], tX = nD[494];
            if (th !== Symbol.for("react.early_return_sentinel")) return th;
            nD[718] !== te || nD[719] !== tp || nD[720] !== tm || nD[721] !== tg || nD[722] !== tf || nD[723] !== tv ? (t1 = (0, a.jsxs)(te, {
                floatingPanelWidth: tp,
                header: tm,
                banner: tg,
                children: [tf, tv]
            }), nD[718] = te, nD[719] = tp, nD[720] = tm, nD[721] = tg, nD[722] = tf, nD[723] = tv, nD[724] = t1) : t1 = nD[724], nD[725] !== tt || nD[726] !== t1 || nD[727] !== ty || nD[728] !== t_ || nD[729] !== tT || nD[730] !== tE || nD[731] !== tP || nD[732] !== tA ? (t2 = (0, a.jsx)(tt, {
                conversationId: ty,
                conversationOrigin: t_,
                disabled: tT,
                isTemporaryChat: tE,
                projectId: tP,
                requiresGizmoId: tA,
                children: t1
            }), nD[725] = tt, nD[726] = t1, nD[727] = ty, nD[728] = t_, nD[729] = tT, nD[730] = tE, nD[731] = tP, nD[732] = tA, nD[733] = t2) : t2 = nD[733], nD[734] !== tn || nD[735] !== ta || nD[736] !== tr || nD[737] !== ts || nD[738] !== to || nD[739] !== tl || nD[740] !== t2 || nD[741] !== tM || nD[742] !== tk || nD[743] !== tq || nD[744] !== tU || nD[745] !== tX ? (t3 = (0, a.jsxs)(tn, {
                children: [tM, tk, tq, tU, tX, ta, tr, ts, to, tl, t2]
            }), nD[734] = tn, nD[735] = ta, nD[736] = tr, nD[737] = ts, nD[738] = to, nD[739] = tl, nD[740] = t2, nD[741] = tM, nD[742] = tk, nD[743] = tq, nD[744] = tU, nD[745] = tX, nD[746] = t3) : t3 = nD[746];
            let iX = t3,
                iJ = !ad && !sn,
                iZ = aS || !r1.isFetchedAfterMount || r1.isFetching || r2 ? null : r1.error,
                i0 = ic ? r1.error : null,
                i1 = null == st && null == r6 ? null : sd,
                i2 = !sd && !ie;
            return nD[747] !== aR || nD[748] !== aA || nD[749] !== n1 ? (t7 = {
                conversationId: aA,
                composer: aR,
                sharedConversationId: n1
            }, nD[747] = aR, nD[748] = aA, nD[749] = n1, nD[750] = t7) : t7 = nD[750], nD[751] !== iX || nD[752] !== t7 ? (nB = (0, a.jsx)(nL.a, {
                value: t7,
                children: iX
            }), nD[751] = iX, nD[752] = t7, nD[753] = nB) : nB = nD[753], nD[754] !== i2 || nD[755] !== nB ? (nz = (0, a.jsx)(w.a, {
                enabled: i2,
                children: nB
            }), nD[754] = i2, nD[755] = nB, nD[756] = nz) : nz = nD[756], nD[757] !== id || nD[758] !== aU || nD[759] !== iJ || nD[760] !== iZ || nD[761] !== i0 || nD[762] !== i1 || nD[763] !== nz ? (nG = (0, a.jsx)(J.a, {
                showChatFallback: iJ,
                conversationId: aU,
                error: iZ,
                loadError: i0,
                canRetry: id,
                isWorkConversation: i1,
                children: nz
            }), nD[757] = id, nD[758] = aU, nD[759] = iJ, nD[760] = iZ, nD[761] = i0, nD[762] = i1, nD[763] = nz, nD[764] = nG) : nG = nD[764], nG
        }

        function it(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function ia(e) {
            return "user" === e.author.role
        }

        function ir(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function is(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function io(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function ii(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }

        function il(e) {
            let t, n, s, o, c, d, h, p, m, g, y, x, w, C, _, S, j, I, T, E, P, A, k, R, N, O, z, G, L, H = (0, r.c)(228),
                {
                    ref: W,
                    printTitle: q,
                    trackReadState: K,
                    trackShownImpressions: U,
                    composerRef: V,
                    workspace: Q,
                    shouldBlockMcpApps: Y,
                    contentX: X,
                    conversationId: J,
                    sectionIndex: Z,
                    composerConversationId: ee,
                    composerLeadingContent: et,
                    aboveComposerContent: en,
                    historyLoadingContent: ea,
                    requiredSystemHints: er,
                    isCoveredByFloatingPanel: es,
                    isFormOnly: eo,
                    isInlinePreview: ei,
                    hideModelPicker: el,
                    showFilePicker: ec,
                    disableAutoFocus: ed,
                    transcriptPresentation: eu,
                    scrollOrigin: eh,
                    isChatConversation: ep,
                    customGptId: em,
                    conversationLoadingLabel: eg,
                    entries: ev,
                    errorMessage: ey,
                    hasLoadError: eb,
                    onRetryLoad: ex,
                    hasRenderableTurns: ew,
                    isComposerDisabled: eC,
                    readOnlyPlaceholder: eS,
                    moreDetailsEnabled: ej,
                    isConversationEmpty: eI,
                    showEmptyState: eT,
                    isConversationFetching: eE,
                    isConversationLoading: eP,
                    isSharedConversation: eA,
                    isSubmitDisabled: eM,
                    isTemporaryChat: ek,
                    isTurnActive: eO,
                    isWorkConversation: eB,
                    onboardingPrelude: ez,
                    scrollStateConversationId: eG,
                    initialResponsePlacementKey: eD,
                    sharedConversationId: eH,
                    sharedPostRegulatedConnectorKind: eW,
                    showComposer: eq,
                    archivedPreviewFooter: eK,
                    showPendingLoadingMessage: eU,
                    gptPluginMigrationBanner: eV,
                    awaitingGptContinuation: eQ,
                    workOnlyConversionBanner: e$,
                    onAddSelectedText: eY,
                    onSubmitAccepted: eX
                } = e,
                eZ = void 0 === eT || eT,
                e0 = (0, u.y)(F.a),
                e1 = (0, u.z)(null),
                e2 = (0, u.x)(e_.f, (0, f.useContext)(M.a)),
                e4 = (0, u.z)(tK.a),
                e5 = (0, u.x)(ne.a, J),
                e6 = Q?.fullscreenContent != null ? "content" : "workspace",
                e7 = (0, $.a)(ei ? "embedded" : e6),
                e8 = (0, u.z)(sZ.a),
                e9 = eq && e8?.source.turnContext.conversationId !== ee,
                te = "floating" === e7.placement,
                [tt, tn] = (0, f.useState)(!1),
                ta = Q?.fullscreenContent != null || te && tt && !e7.isHidden && !eo ? "floating" : "main",
                tr = (0, u.z)(sU.h),
                to = ep && null == eH && null == e2 && null == eK,
                ti = !eP && !eO && !eb && eI && !ew,
                tl = (0, u.x)(B.i, J),
                tc = eZ && to && ti && null == tl && !e5 && !te,
                td = null == em ? "centered-home" : "home",
                tu = eZ && !e5 && (!to || !eI),
                tm = (0, f.useRef)(null),
                tb = (0, f.useRef)(null),
                [tx, tw] = (0, f.useState)(null),
                [tC, t_] = (0, f.useState)(!1),
                tS = ((L = (0, r.c)(7))[0] !== tx || L[1] !== ev ? (O = () => ({
                    async scrollToMessage(e) {
                        let t = ev.find(t => {
                            let {
                                turn: n
                            } = t;
                            return n.messageIds.includes(e)
                        });
                        null != t && null != tx && await tx.scrollToKey(t.turnKey, void 0, {
                            align: "top"
                        })
                    }
                }), z = [ev, tx], L[0] = tx, L[1] = ev, L[2] = O, L[3] = z) : (O = L[2], z = L[3]), (0, f.useImperativeHandle)(W, O, z), L[4] !== tx?.scrollToKey || L[5] !== ev ? (G = e => {
                    let t = ev.findLast(o1);
                    return (0, o0.a)(tx?.scrollToKey, t?.turnKey, e)
                }, L[4] = tx?.scrollToKey, L[5] = ev, L[6] = G) : G = L[6], G);
            H[0] !== ev ? (t = () => ev, H[0] = ev, H[1] = t) : t = H[1];
            let tj = (0, t9.a)(t),
                [tI, tE] = (0, f.useState)(null);
            H[2] !== ei || H[3] !== e0 || H[4] !== eG ? (n = () => ei ? 0 : e0.get(t3.a, eG), H[2] = ei, H[3] = e0, H[4] = eG, H[5] = n) : n = H[5];
            let [tP, tA] = (0, f.useState)(n);
            H[6] !== ei || H[7] !== tI || H[8] !== e0 || H[9] !== eG ? (s = e => {
                ei || e0.set(t3.a, eG, (0, t1.a)(e, tI?.getHeightPx() ?? 0))
            }, H[6] = ei, H[7] = tI, H[8] = e0, H[9] = eG, H[10] = s) : s = H[10];
            let tk = (0, t9.a)(s);
            H[11] !== ev || H[12] !== tx ? (o = (e, t) => (0, tp.c)(tx, ev.find(t => {
                let {
                    id: n
                } = t;
                return n === e
            })?.turnKey, t), H[11] = ev, H[12] = tx, H[13] = o) : o = H[13];
            let tR = (0, t9.a)(o);
            H[14] !== J || H[15] !== ev || H[16] !== tx ? (c = async e => {
                let t = ev.find(t => {
                    let {
                        turn: n
                    } = t;
                    return n.messageIds.includes(e)
                });
                null != t && null != tx && await tx.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${J}-${e}`)}"]`), {
                    align: "center"
                })
            }, H[14] = J, H[15] = ev, H[16] = tx, H[17] = c) : c = H[17];
            let tN = (0, t9.a)(c);
            H[18] === Symbol.for("react.memo_cache_sentinel") ? (d = e => (0, tp.a)(tb.current, e), H[18] = d) : d = H[18];
            let tO = (0, t9.a)(d),
                tB = `chatgpt:${J}`;
            if (H[19] !== J || H[20] !== tj || H[21] !== tO || H[22] !== ek || H[23] !== e0 || H[24] !== tR || H[25] !== eH || H[26] !== e2 || H[27] !== tB) {
                let e;
                H[29] !== J || H[30] !== ek || H[31] !== e0 || H[32] !== eH || H[33] !== e2 ? (e = async e => {
                    let t = e0.get(B.j, J);
                    !ek && null == eH && null == e2 && null != t && e0.get(eN.b) > 0 && await (0, eR.a)(e0, t, e)
                }, H[29] = J, H[30] = ek, H[31] = e0, H[32] = eH, H[33] = e2, H[34] = e) : e = H[34], h = function(e) {
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
                                            unitId: (0, nq.a)("user", t),
                                            text: n
                                        }]
                                    }
                                    if ("assistant-message" === e.type) {
                                        let n = (0, ac.a)(e.content, ef.b),
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
                                                            if (e.name === ef.a) {
                                                                let n = (0, ad.a)(e.attributes),
                                                                    a = (0, ad.b)(e.attributes),
                                                                    r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, ef.l)(e) === a);
                                                                if (null == r) return "";
                                                                let s = (0, ef.i)(r);
                                                                return "hidden" === s || "block" === s ? "" : (0, ef.j)(r) ?? ""
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
                    getTurns: tj,
                    routeContextId: tB,
                    scrollAdapter: {
                        scrollToTurn: tR,
                        getTurnContainer: tO
                    },
                    ensureHistory: e
                }), H[19] = J, H[20] = tj, H[21] = tO, H[22] = ek, H[23] = e0, H[24] = tR, H[25] = eH, H[26] = e2, H[27] = tB, H[28] = h
            } else h = H[28];
            let tF = h;
            H[35] !== tF.contextId ? (p = {
                containerRef: tb,
                contextId: tF.contextId
            }, H[35] = tF.contextId, H[36] = p) : p = H[36], (0, tv.a)(p);
            let tz = e9 && null == eK,
                tG = e4 && tz && !te,
                tL = (0, tT.a)();
            H[37] !== J || H[38] !== ew || H[39] !== es || H[40] !== Z || H[41] !== tL ? (m = {
                conversationId: J,
                sectionIndex: Z,
                hasRenderableTurns: ew,
                isCoveredByFloatingPanel: es,
                shouldReduceMotion: tL,
                containerRef: tb
            }, H[37] = J, H[38] = ew, H[39] = es, H[40] = Z, H[41] = tL, H[42] = m) : m = H[42];
            let tD = function(e) {
                    let t, n, a, s = (0, r.c)(12),
                        {
                            conversationId: o,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, oa.a)(0);
                    s[0] !== o || s[1] !== i ? (t = {
                        conversationId: o,
                        sectionIndex: i
                    }, s[0] = o, s[1] = i, s[2] = t) : t = s[2];
                    let p = (0, f.useRef)(t);
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
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(oo) && 0 !== n.clientWidth && (s.disconnect(), h.set(a * n.clientWidth), e = (0, or.a)(h, 0, {
                                    duration: .3,
                                    ease: os.d
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
                    }, a = [o, i, l, d, c, h, u], s[3] = u, s[4] = o, s[5] = l, s[6] = c, s[7] = i, s[8] = h, s[9] = d, s[10] = n, s[11] = a) : (n = s[10], a = s[11]), (0, f.useLayoutEffect)(n, a), h
                }(m),
                tH = tz && te,
                [tW, tV] = (0, f.useState)(null),
                [tQ, t$] = (0, f.useState)(null),
                [tY, tJ] = (0, f.useState)(null),
                tZ = eA && tz && !eC && !te && !e4,
                [t4, t5] = (0, f.useState)(null);
            H[43] !== eQ || H[44] !== J || H[45] !== ew || H[46] !== ek || H[47] !== eW || H[48] !== eq ? (g = eq && !eQ ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(ts.BrowserComposerDisclaimer, {
                    supportsMessageDisclosures: !0,
                    conversationId: J,
                    hasUserMessage: ew,
                    isTemporaryChat: ek,
                    regulatedConnectorKindOverride: eW
                })
            }) : void 0, H[43] = eQ, H[44] = J, H[45] = ew, H[46] = ek, H[47] = eW, H[48] = eq, H[49] = g) : g = H[49];
            let t6 = g;
            H[50] !== J || H[51] !== ey || H[52] !== ew || H[53] !== eC || H[54] !== eM || H[55] !== eB || H[56] !== eq || H[57] !== eU ? (y = ew ? null : (0, a.jsx)(at.a, {
                conversationId: J,
                errorMessage: ey,
                isWorkConversation: eB,
                showPendingLoadingMessage: eU,
                showRequestUserInputStatus: eq && !eC && !eM
            }), H[50] = J, H[51] = ey, H[52] = ew, H[53] = eC, H[54] = eM, H[55] = eB, H[56] = eq, H[57] = eU, H[58] = y) : y = H[58];
            let t7 = y;
            H[59] !== J || H[60] !== eB || H[61] !== eH || H[62] !== e2 ? (x = eB && null == eH && null == e2 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(e3, {
                    conversationId: J
                }, J)
            }) : null, H[59] = J, H[60] = eB, H[61] = eH, H[62] = e2, H[63] = x) : x = H[63];
            let t8 = x;
            H[64] !== eK || H[65] !== t8 ? (w = null != eK ? (0, a.jsxs)(a.Fragment, {
                children: [t8, eK]
            }) : null, H[64] = eK, H[65] = t8, H[66] = w) : w = H[66];
            let nt = w;
            H[67] !== en || H[68] !== nt || H[69] !== eQ || H[70] !== ee || H[71] !== et || H[72] !== V || H[73] !== J || H[74] !== ed || H[75] !== t6 || H[76] !== t7 || H[77] !== ev || H[78] !== t8 || H[79] !== tW || H[80] !== eV || H[81] !== eb || H[82] !== ew || H[83] !== el || H[84] !== e4 || H[85] !== eC || H[86] !== eP || H[87] !== es || H[88] !== eo || H[89] !== te || H[90] !== tr || H[91] !== ei || H[92] !== eA || H[93] !== eM || H[94] !== ek || H[95] !== eB || H[96] !== eX || H[97] !== eS || H[98] !== tZ || H[99] !== er || H[100] !== tI || H[101] !== tS || H[102] !== e7.isHidden || H[103] !== eH || H[104] !== e2 || H[105] !== e9 || H[106] !== ec || H[107] !== tH || H[108] !== tG || H[109] !== K || H[110] !== U || H[111] !== ta || H[112] !== e$ || H[113] !== Q ? (C = nt ?? (e9 ? (0, a.jsxs)(rR.a.Provider, {
                value: ev.at(-1) ?? null,
                children: [eo || te ? null : (0, a.jsx)(ty.a, {
                    onNavigate: tS
                }, J), te ? null : et, (0, a.jsx)(iu, {
                    requiredSystemHints: er,
                    composerRef: V,
                    workspace: Q,
                    isInlinePreview: ei,
                    hideModelPicker: el,
                    showFilePicker: ec,
                    disableAutoFocus: ed,
                    conversationId: ee,
                    isImageEditComposer: tr,
                    disabled: eC,
                    readOnlyPlaceholder: eS,
                    awaitingGptContinuation: eQ,
                    headerContent: t8,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tZ ? (0, a.jsx)("div", {
                            ref: tJ,
                            className: "empty:hidden"
                        }) : null, en, !eP && !eb && ew && !eQ && e$, e4 ? null : eV, tH && t7]
                    }),
                    isFullscreenComposer: te,
                    isHidden: e7.isHidden,
                    trackReadState: K && !es,
                    trackShownImpressions: U && !es,
                    isSharedConversation: eA,
                    isSubmitDisabled: eM,
                    followupPortalTarget: tW,
                    takeoverDisclaimerRef: t5,
                    showConversationFollowups: null == eH && null == e2 && !ek && !eB && !te,
                    isTemporaryChat: ek,
                    isWorkConversation: eB,
                    responseSpacerState: tI,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(ak, {
                            entries: ev,
                            historyLoader: ek || null != eH || null != e2 ? null : (0, a.jsx)(s4.a, {
                                conversationId: J
                            }),
                            isVisible: t,
                            rendersWidgets: "floating" === ta,
                            onVisibilityChange: tn
                        }, J)
                    },
                    showVoiceStage: !tG,
                    voiceDisclaimer: e4 && !tG ? t6 : void 0,
                    onSubmitAccepted: e => {
                        tA(0), eX?.(e)
                    }
                }, `${ee}:${tr?"image-edit":"chat"}`)]
            }) : t8), H[67] = en, H[68] = nt, H[69] = eQ, H[70] = ee, H[71] = et, H[72] = V, H[73] = J, H[74] = ed, H[75] = t6, H[76] = t7, H[77] = ev, H[78] = t8, H[79] = tW, H[80] = eV, H[81] = eb, H[82] = ew, H[83] = el, H[84] = e4, H[85] = eC, H[86] = eP, H[87] = es, H[88] = eo, H[89] = te, H[90] = tr, H[91] = ei, H[92] = eA, H[93] = eM, H[94] = ek, H[95] = eB, H[96] = eX, H[97] = eS, H[98] = tZ, H[99] = er, H[100] = tI, H[101] = tS, H[102] = e7.isHidden, H[103] = eH, H[104] = e2, H[105] = e9, H[106] = ec, H[107] = tH, H[108] = tG, H[109] = K, H[110] = U, H[111] = ta, H[112] = e$, H[113] = Q, H[114] = C) : C = H[114];
            let nn = C;
            H[115] !== J || H[116] !== es || H[117] !== ei || H[118] !== e1 || H[119] !== eH || H[120] !== e2 ? (_ = void 0, H[115] = J, H[116] = es, H[117] = ei, H[118] = e1, H[119] = eH, H[120] = e2, H[121] = _) : _ = H[121];
            let na = _,
                nr = es || void 0;
            H[122] === Symbol.for("react.memo_cache_sentinel") ? (S = null, H[122] = S) : S = H[122], H[123] !== J || H[124] !== es || H[125] !== te || H[126] !== K ? (j = !K || te || es ? null : (0, a.jsx)(rk.a, {
                conversationId: J
            }), H[123] = J, H[124] = es, H[125] = te, H[126] = K, H[127] = j) : j = H[127], H[128] !== eK || H[129] !== J || H[130] !== ei || H[131] !== eH || H[132] !== e2 ? (I = ei || null != eH || null != e2 || null != eK ? null : (0, a.jsx)(rl, {
                conversationId: J
            }, J), H[128] = eK, H[129] = J, H[130] = ei, H[131] = eH, H[132] = e2, H[133] = I) : I = H[133], H[134] !== J || H[135] !== eP || H[136] !== ek || H[137] !== eH || H[138] !== e2 ? (T = eP || ek || null != eH || null != e2 ? null : (0, a.jsx)(s5, {
                conversationId: J
            }), H[134] = J, H[135] = eP, H[136] = ek, H[137] = eH, H[138] = e2, H[139] = T) : T = H[139], H[140] !== J || H[141] !== ev || H[142] !== tC || H[143] !== eE || H[144] !== eP || H[145] !== ei || H[146] !== tS || H[147] !== eH || H[148] !== e2 || H[149] !== tx ? (E = ei || eP || null != eH || null != e2 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(D, {
                    conversationId: J,
                    entries: ev,
                    turnListApi: tx
                }), (0, a.jsx)(tX.a, {
                    ready: !eE && tC && null != tx && ev.length > 0,
                    onNavigate: tS
                })]
            }), H[140] = J, H[141] = ev, H[142] = tC, H[143] = eE, H[144] = eP, H[145] = ei, H[146] = tS, H[147] = eH, H[148] = e2, H[149] = tx, H[150] = E) : E = H[150], H[151] !== eK || H[152] !== tc || H[153] !== ee || H[154] !== X || H[155] !== tl || H[156] !== J || H[157] !== eg || H[158] !== tF || H[159] !== t6 || H[160] !== t7 || H[161] !== ev || H[162] !== nn || H[163] !== tk || H[164] !== eb || H[165] !== ew || H[166] !== ea || H[167] !== td || H[168] !== eD || H[169] !== tP || H[170] !== e4 || H[171] !== e5 || H[172] !== eC || H[173] !== eE || H[174] !== eP || H[175] !== es || H[176] !== eo || H[177] !== te || H[178] !== ei || H[179] !== eA || H[180] !== ek || H[181] !== eO || H[182] !== eB || H[183] !== ej || H[184] !== na || H[185] !== eY || H[186] !== ex || H[187] !== ez || H[188] !== q || H[189] !== tY || H[190] !== tQ || H[191] !== tZ || H[192] !== tI || H[193] !== e7.isChatPaneHidden || H[194] !== e0 || H[195] !== eh || H[196] !== tN || H[197] !== tD || H[198] !== eH || H[199] !== e2 || H[200] !== Y || H[201] !== tL || H[202] !== eq || H[203] !== e9 || H[204] !== tu || H[205] !== tz || H[206] !== tH || H[207] !== tG || H[208] !== t4 || H[209] !== eu || H[210] !== tx || H[211] !== Q ? (P = Q?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!Y && Q.fullscreenContent, nn]
            }) : (0, a.jsxs)(t2.a, {
                viewportOverlay: eo || ei || eB || null != eH || null != e2 || null != eK || es || te ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(rH, {
                        conversationId: J
                    }, J)
                }),
                hideTranscript: eo,
                active: !eP && (!ew || null != tx),
                presentation: eu ?? (ei ? "compact" : "default"),
                contentX: X,
                composerFade: !1,
                supportsComposerExpansion: tz && !te && null == Q,
                footerPlacement: tc ? td : "bottom",
                initialOffset: tP,
                scrollOrigin: eh,
                onScroll: tk,
                scrollToBottomButton: !e9 || te || tG ? void 0 : {
                    isWorking: eO
                },
                threadEndContent: e4 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tV,
                        className: t0.a
                    }), null == t4 ? t6 : (0, v.createPortal)(t6, t4)]
                }),
                footerLeadingContent: tG ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: t0.a,
                            children: (0, a.jsx)(tq.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: t6
                    })]
                }) : na,
                footer: nn,
                children: [ei || eP || null != eH ? null : (0, a.jsx)(n4, {
                    conversationId: J,
                    entries: ev,
                    isConversationFetching: eE,
                    turnListApi: tx
                }), (0, a.jsxs)(l.a.div, {
                    ref: tb,
                    style: {
                        x: tD
                    },
                    "data-chatgpt-conversation-selection-target": J,
                    className: (0, i.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", ei && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, tf.K)(e0, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, tf.K)(e0, "conversation")
                    },
                    children: [(0, a.jsxs)(f.Suspense, {
                        fallback: (0, a.jsx)(tM.LoadingPage, {
                            debugName: "ChatGptConversationPage",
                            fillParent: !0
                        }),
                        children: [ei || eP ? null : (0, a.jsx)(tg.a, {
                            conversationSource: tF
                        }), es || e7.isChatPaneHidden || ek || null != eH || null != e2 ? null : ea ?? (0, a.jsx)(s4.a, {
                            conversationId: J
                        }), (0, a.jsx)(oX.b, {
                            conversationId: J
                        }), (null != eH || null != e2) && ew ? (0, a.jsx)(oM, {
                            sharedConversationId: eH
                        }) : null, null == ez ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: t0.a,
                                children: ez
                            })
                        }), null == tl || eP ? null : (0, a.jsx)(nB.a, {
                            conversationId: J,
                            branchSource: {
                                conversationId: tl.metadata.source_conversation_id,
                                title: tl.metadata.source_conversation_title,
                                gizmoId: tl.metadata.source_conversation_gizmo_id,
                                ownerId: tl.metadata.source_conversation_owner_id
                            }
                        }), eb ? (0, a.jsx)(eJ, {
                            isFetching: eE,
                            isSharedConversation: eA,
                            onRetry: ex
                        }) : eP ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": eg,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(tM.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : ew ? (0, a.jsxs)(sV.a, {
                            value: tN,
                            children: [ei || es ? null : (0, a.jsxs)(a.Fragment, {
                                children: [ek || null != eH || null != e2 ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(eL, {
                                        conversationId: J
                                    })
                                }), (0, a.jsx)(eF, {
                                    entries: ev,
                                    title: q,
                                    TurnRowComponent: aM
                                })]
                            }), (0, a.jsx)(oe.a, {
                                enabled: tZ,
                                aboveComposer: tY,
                                belowMessage: tQ,
                                children: (0, a.jsx)(aY, {
                                    viewportRef: tm,
                                    isTurnActive: eO,
                                    conversationId: J,
                                    entries: ev,
                                    onApiChange: tw,
                                    onVisibleContentReady: () => t_(!0),
                                    responseSpacerState: tI
                                })
                            }), tZ ? (0, a.jsx)("div", {
                                ref: t$,
                                className: "empty:hidden"
                            }) : null]
                        }) : tu && null == tl && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            children: (0, a.jsx)(b.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation",
                                description: "Empty state when a ChatGPT conversation has no user or assistant text messages"
                            })
                        }), !tH && t7, (0, a.jsx)(ro.a, {
                            conversationId: ee,
                            isWorkConversation: eB
                        }), eq && !eC ? (0, a.jsx)(oh, {
                            conversationId: J,
                            moreDetailsEnabled: ej,
                            onAddSelectedText: eY
                        }) : null]
                    }), ei ? null : (0, a.jsx)(aa.a, {
                        preserveResponseViewport: e => tm.current?.holdForResponse(e) ?? !1,
                        initialPlacementKey: eD,
                        isActiveVoiceConversation: e4 && e5,
                        isLoadingHistory: eP,
                        latestUserTurnKey: ev.findLast(ic)?.turnKey,
                        onResponseSpacerStateChange: tE
                    }), tG ? (0, a.jsx)(l.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tL ? tU.c : tU.b
                    }) : null]
                })]
            }), H[151] = eK, H[152] = tc, H[153] = ee, H[154] = X, H[155] = tl, H[156] = J, H[157] = eg, H[158] = tF, H[159] = t6, H[160] = t7, H[161] = ev, H[162] = nn, H[163] = tk, H[164] = eb, H[165] = ew, H[166] = ea, H[167] = td, H[168] = eD, H[169] = tP, H[170] = e4, H[171] = e5, H[172] = eC, H[173] = eE, H[174] = eP, H[175] = es, H[176] = eo, H[177] = te, H[178] = ei, H[179] = eA, H[180] = ek, H[181] = eO, H[182] = eB, H[183] = ej, H[184] = na, H[185] = eY, H[186] = ex, H[187] = ez, H[188] = q, H[189] = tY, H[190] = tQ, H[191] = tZ, H[192] = tI, H[193] = e7.isChatPaneHidden, H[194] = e0, H[195] = eh, H[196] = tN, H[197] = tD, H[198] = eH, H[199] = e2, H[200] = Y, H[201] = tL, H[202] = eq, H[203] = e9, H[204] = tu, H[205] = tz, H[206] = tH, H[207] = tG, H[208] = t4, H[209] = eu, H[210] = tx, H[211] = Q, H[212] = P) : P = H[212], H[213] !== es || H[214] !== nr || H[215] !== j || H[216] !== I || H[217] !== T || H[218] !== E || H[219] !== P ? (A = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": nr,
                inert: es,
                children: [S, j, I, T, E, P]
            }), H[213] = es, H[214] = nr, H[215] = j, H[216] = I, H[217] = T, H[218] = E, H[219] = P, H[220] = A) : A = H[220];
            let ns = A,
                no = "main" === ta;
            return H[221] !== no ? (k = {
                presentation: "main",
                rendersWidgets: no
            }, H[221] = no, H[222] = k) : k = H[222], H[223] !== ns ? (R = (0, a.jsx)(th.a, {
                children: ns
            }), H[223] = ns, H[224] = R) : R = H[224], H[225] !== k || H[226] !== R ? (N = (0, a.jsx)(u.b, {
                scope: aC,
                value: k,
                children: R
            }), H[225] = k, H[226] = R, H[227] = N) : N = H[227], N
        }

        function ic(e) {
            let {
                turn: t
            } = e;
            return t.items.some(id)
        }

        function id(e) {
            return "user-message" === e.type
        }

        function iu(e) {
            let t, n, s, o = (0, r.c)(11),
                i = (0, f.useContext)(tl.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return o[0] !== e ? (t = (0, a.jsx)(ih, {
                    ...e
                }), o[0] = e, o[1] = t) : t = o[1], t
            }
            o[2] !== e.conversationId || o[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, o[2] = e.conversationId, o[3] = e.isImageEditComposer, o[4] = t) : t = o[4];
            let l = !e.isWorkConversation;
            return o[5] !== e ? (n = t => (0, a.jsx)(ih, {
                ...e,
                initialController: t
            }), o[5] = e, o[6] = n) : n = o[6], o[7] !== t || o[8] !== l || o[9] !== n ? (s = (0, a.jsx)(sK, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), o[7] = t, o[8] = l, o[9] = n, o[10] = s) : s = o[10], s
        }

        function ih(e) {
            let t, n, s, o, i, l, c, d, h, p, m, g, v, b, w, C, _, S, j, I = (0, r.c)(84),
                {
                    composerRef: T,
                    initialController: M,
                    ...k
                } = e,
                R = (0, u.y)(F.a),
                N = (0, u.x)(A.d, k.isTemporaryChat),
                {
                    conversationId: O,
                    isFullscreenComposer: z
                } = k,
                G = (0, y.a)(),
                {
                    state: L
                } = (0, x.Y)(),
                D = (0, u.x)(n6, O),
                H = (0, u.x)(B.S, O),
                W = !(!k.disabled && !k.isSharedConversation && !k.isWorkConversation && !k.isTemporaryChat && !k.isImageEditComposer && (0, e8.a)(H)) ? null : H,
                q = (0, u.x)(null == k.requiredSystemHints ? tr : null, W);
            I[0] !== q || I[1] !== k.requiredSystemHints ? (t = k.requiredSystemHints ?? (null == q ? void 0 : [q]), I[0] = q, I[1] = k.requiredSystemHints, I[2] = t) : t = I[2];
            let K = t;
            I[3] !== q || I[4] !== O || I[5] !== R ? (n = () => {
                if (null != q) {
                    let e, t;
                    return e = (0, e9.b)(R, O, [q]), t = (0, e7.h)(R, {
                        draftKey: O,
                        isTemporaryChat: !1
                    }), () => {
                        if (e(), R.get(e9.a, O).includes(q)) return;
                        let n = R.get(e6.w, O).filter(e => e !== q && e !== `plugin:${e5.d}`);
                        (0, e6.V)(R, O, n, t)
                    }
                }
            }, s = [R, O, q], I[3] = q, I[4] = O, I[5] = R, I[6] = n, I[7] = s) : (n = I[6], s = I[7]), (0, f.useEffect)(n, s);
            let U = (0, u.x)(nl.c, O);
            I[8] !== U || I[9] !== k.isSharedConversation || I[10] !== k.isWorkConversation || I[11] !== H ? (o = !k.isSharedConversation && !k.isWorkConversation && !(0, e8.a)(H) && !U, I[8] = U, I[9] = k.isSharedConversation, I[10] = k.isWorkConversation, I[11] = H, I[12] = o) : o = I[12];
            let V = o,
                $ = V && !k.disabled && !k.isSubmitDisabled && !k.isImageEditComposer,
                Y = V ? D : void 0;
            I[13] !== O || I[14] !== k.isImageEditComposer ? (i = k.isImageEditComposer ? {
                conversationId: O,
                surface: "image-edit"
            } : O, I[13] = O, I[14] = k.isImageEditComposer, I[15] = i) : i = I[15];
            let X = i;
            I[16] !== O || I[17] !== X || I[18] !== M ? (l = {
                composerController: M,
                conversationId: O,
                draftKey: X
            }, I[16] = O, I[17] = X, I[18] = M, I[19] = l) : l = I[19];
            let J = (0, oZ.a)(l),
                Z = (0, s3.a)(J, O, !k.isInlinePreview && !k.disabled, k.workspace && "tpp", Y?.id ?? H),
                ee = (0, f.useContext)(tl.a),
                et = (0, f.useRef)(!1);
            I[20] !== X || I[21] !== ee || I[22] !== M || I[23] !== k.isTemporaryChat || I[24] !== R ? (c = e => {
                null == e || null == M || et.current || (et.current = !0, (0, e6.W)(R, X, M.getPersistedText(), {
                    isTemporaryChat: k.isTemporaryChat
                }), ee?.onAdopt())
            }, I[20] = X, I[21] = ee, I[22] = M, I[23] = k.isTemporaryChat, I[24] = R, I[25] = c) : c = I[25];
            let en = (0, t9.a)(c);
            I[26] !== en || I[27] !== T ? (d = (0, t7.a)(T, en), I[26] = en, I[27] = T, I[28] = d) : d = I[28];
            let ea = d,
                er = (0, f.useContext)(rR.a),
                es = (0, u.w)(sL.a, O),
                eo = (0, u.x)(B.db, O),
                ei = (0, u.x)(B.$, O),
                el = (0, u.x)(e6.j, O);
            I[29] !== ei ? (h = (0, B.Ab)(ei), I[29] = ei, I[30] = h) : h = I[30];
            let ec = h,
                ed = (0, u.z)(E.l.activeTab$);
            if (I[31] !== ed || I[32] !== z || I[33] !== ec || I[34] !== er) {
                let e = er?.turn.items.flatMap(iv);
                p = z && ed?.tabType.kind === tP.a && "generatedImages" in ed.props && null != ed.props.generatedImages && !ec && null != er && "in_progress" !== er.turn.status && !er.turn.hasPendingAssistantReply && !er.showPendingLoadingMessage && !e?.some(ig) && (null != er.errorMessage || e?.some(im)) ? er.turn.messageIds.at(-1) ?? er.turnKey : null, I[31] = ed, I[32] = z, I[33] = ec, I[34] = er, I[35] = p
            } else p = I[35];
            let eu = p,
                eh = (0, f.useRef)(null);
            I[36] !== eu || I[37] !== R ? (m = () => {
                null != eu && eu !== eh.current && (eh.current = eu, R.set(t_.a, "expanded"))
            }, g = [eu, R], I[36] = eu, I[37] = R, I[38] = m, I[39] = g) : (m = I[38], g = I[39]), (0, f.useEffect)(m, g);
            let ep = (0, u.w)(s2.a, z ? O : null);
            I[40] !== q || I[41] !== W || I[42] !== J || I[43] !== O || I[44] !== $ || I[45] !== X || I[46] !== Z || I[47] !== G || I[48] !== z || I[49] !== ea || I[50] !== N || I[51] !== k || I[52] !== K || I[53] !== R || I[54] !== Y || I[55] !== L?.libraryFileCreation || I[56] !== H ? (v = e => (0, a.jsxs)(tE.a, {
                children: [z && k.trackReadState && !e?.isHidden ? (0, a.jsx)(rk.a, {
                    conversationId: O,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, k.aboveComposerContent, (0, a.jsx)(to.a, {
                    children: (0, a.jsx)(nz.a, {
                        ref: ea,
                        trackShownImpressions: k.trackShownImpressions && !k.isHidden && !e?.isHidden && !e?.isMinimized,
                        headerContent: k.headerContent,
                        legacyImageSuggestionsEnabled: !k.disabled && !k.isSharedConversation && !k.isImageEditComposer,
                        allowBackgroundSubmit: k.isInlinePreview,
                        ...Z,
                        disableAutoFocus: k.disableAutoFocus,
                        conversationOrigin: null == k.workspace ? void 0 : "tpp",
                        mcpAppContext: k.workspace?.mcpAppContext,
                        onServerThreadIdChange: k.workspace?.onServerThreadIdChange,
                        followupPortalTarget: k.followupPortalTarget,
                        takeoverDisclaimerRef: k.takeoverDisclaimerRef,
                        showConversationFollowups: k.showConversationFollowups,
                        autoPrepare: !k.isSubmitDisabled && !k.isSharedConversation,
                        browserConversationId: (0, Q.getThreadBrowserConversationId)(R) ?? O,
                        composerController: J,
                        conversationId: O,
                        requiredSystemHints: K,
                        hideSystemHints: null != k.requiredSystemHints,
                        getSubmissionGuard: null != q ? () => () => R.get(B.S, O) === H && R.get(tr, W) === q : void 0,
                        draftKey: X,
                        onPromptChange: N,
                        selectedCustomGpt: Y,
                        targetGizmoId: Y?.id,
                        onCustomGptChange: $ ? e => {
                            R.set(n6, O, e)
                        } : void 0,
                        onCustomAgentSelected: $ ? () => {
                            R.set(n6, O, null)
                        } : void 0,
                        disableDraftPrepare: k.isSubmitDisabled || k.isSharedConversation,
                        disableSubmit: k.disabled || k.isSubmitDisabled,
                        voiceInputDisabled: k.disabled,
                        aboveComposerHeaderContent: k.voiceDisclaimer,
                        getExtraDeveloperInstructions: !k.isInlinePreview && L?.libraryFileCreation && !k.isTemporaryChat ? ip : void 0,
                        isTemporaryChat: k.isTemporaryChat,
                        placeholder: k.disabled && !1 !== k.readOnlyPlaceholder ? k.readOnlyPlaceholder ?? G.formatMessage(rq.a.readOnlyConversationPlaceholder) : void 0,
                        readOnly: k.disabled,
                        hideModelPicker: k.hideModelPicker,
                        modelPickerPending: k.isSubmitDisabled,
                        showFilePicker: k.showFilePicker && !k.disabled && !k.isSubmitDisabled,
                        showPendingFilePicker: k.showFilePicker && !k.disabled && k.isSubmitDisabled,
                        showVoiceStage: k.showVoiceStage,
                        onSubmitAccepted: t => {
                            e?.onSubmitStart(), k.responseSpacerState?.place(), k.onSubmitAccepted?.(t)
                        },
                        onSubmitError: k.responseSpacerState?.clear
                    })
                })]
            }), I[40] = q, I[41] = W, I[42] = J, I[43] = O, I[44] = $, I[45] = X, I[46] = Z, I[47] = G, I[48] = z, I[49] = ea, I[50] = N, I[51] = k, I[52] = K, I[53] = R, I[54] = Y, I[55] = L?.libraryFileCreation, I[56] = H, I[57] = v) : v = I[57];
            let em = v;
            I[58] !== R ? (b = () => {
                (0, tf.K)(R, "conversation")
            }, w = () => {
                (0, tf.K)(R, "conversation")
            }, I[58] = R, I[59] = b, I[60] = w) : (b = I[59], w = I[60]);
            let eg = !k.isInlinePreview && !k.disabled && !k.isSubmitDisabled;
            I[61] !== J || I[62] !== eg ? (C = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rF, {
                    composerController: J,
                    enabled: eg
                })
            }), I[61] = J, I[62] = eg, I[63] = C) : C = I[63];
            let ef = z ? "floating" : "pane",
                ev = k.disabled || k.awaitingGptContinuation,
                ey = null == er && !ec,
                eb = !k.isInlinePreview && null == k.workspace,
                ex = el || ec ? "loading" : "idle";
            return I[64] !== ex ? (_ = {
                type: ex,
                unread: !1
            }, I[64] = ex, I[65] = _) : _ = I[65], I[66] !== ep || I[67] !== k.isHidden || I[68] !== k.renderTranscript || I[69] !== em || I[70] !== es || I[71] !== ef || I[72] !== ev || I[73] !== ey || I[74] !== eb || I[75] !== _ || I[76] !== eo ? (S = (0, a.jsx)(P.a, {
                notifications: ep,
                isHidden: k.isHidden,
                placement: ef,
                responsePreview: es,
                forceExpanded: ev,
                composerOnly: ey,
                title: eo,
                showConversationTitleMenu: eb,
                statusState: _,
                renderTranscript: k.renderTranscript,
                children: em
            }), I[66] = ep, I[67] = k.isHidden, I[68] = k.renderTranscript, I[69] = em, I[70] = es, I[71] = ef, I[72] = ev, I[73] = ey, I[74] = eb, I[75] = _, I[76] = eo, I[77] = S) : S = I[77], I[78] !== O || I[79] !== b || I[80] !== w || I[81] !== C || I[82] !== S ? (j = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": O,
                onMouseDownCapture: b,
                onFocusCapture: w,
                children: [C, S]
            }), I[78] = O, I[79] = b, I[80] = w, I[81] = C, I[82] = S, I[83] = j) : j = I[83], j
        }
        async function ip() {
            return [tA.a]
        }

        function im(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function ig(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function iv(e) {
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

        function u(e, t) {
            let n = e.querySelector(`[data-turn-key="${CSS.escape(t)}"]`);
            return n?.querySelector("[data-user-message-bubble]") ?? n
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, p, m, g, f, v, y, b, x, w, C, _, S, j, I = (0, r.c)(64),
                    {
                        initialPlacementKey: T,
                        isActiveVoiceConversation: E,
                        isLoadingHistory: P,
                        latestUserTurnKey: A,
                        onResponseSpacerStateChange: M,
                        preserveResponseViewport: k
                    } = e,
                    R = void 0 !== E && E,
                    N = void 0 !== P && P,
                    O = (0, o.k)();
                I[0] !== R || I[1] !== O ? (t = R && (0, o.f)(O, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), I[0] = R, I[1] = O, I[2] = t) : t = I[2];
                let B = t,
                    F = (0, s.useRef)(A),
                    z = (0, s.useRef)(N),
                    G = (0, s.useRef)(null),
                    L = (0, s.useRef)(null),
                    D = (0, c.b)();
                I[3] !== D ? (n = () => new l.a(D), I[3] = D, I[4] = n) : n = I[4];
                let [H] = (0, s.useState)(n), {
                    clear: W,
                    consumeGrowth: q,
                    getHeightPx: K,
                    ensureScrollRoomForAnchor: U,
                    place: V,
                    prepareThreadEndContent: Q
                } = H, {
                    addScrollListener: $,
                    getScrollElement: Y,
                    responseSpacerController: X
                } = D;
                I[5] !== Y || I[6] !== V || I[7] !== k ? (h = e => {
                    k?.(e => {
                        let t = Y();
                        null != t && V(u(t, e) ?? void 0)
                    }) || V(e)
                }, I[5] = Y, I[6] = V, I[7] = k, I[8] = h) : h = I[8];
                let J = (0, d.a)(h);
                I[9] !== W || I[10] !== D ? (p = () => {
                    W(), D.scrollToBottom()
                }, I[9] = W, I[10] = D, I[11] = p) : p = I[11];
                let Z = (0, d.a)(p);
                I[12] !== q || I[13] !== K || I[14] !== Q || I[15] !== H.height || I[16] !== H.holdViewport || I[17] !== X || I[18] !== Z ? (m = () => X.register({
                    consumeGrowth: q,
                    getHeightPx: K,
                    holdViewport: H.holdViewport,
                    prepareThreadEndContent: Q,
                    scrollToBottom: Z
                }, H.height).dispose, I[12] = q, I[13] = K, I[14] = Q, I[15] = H.height, I[16] = H.holdViewport, I[17] = X, I[18] = Z, I[19] = m) : m = I[19], I[20] !== q || I[21] !== K || I[22] !== Q || I[23] !== H || I[24] !== X || I[25] !== Z ? (g = [q, K, Q, H, X, Z], I[20] = q, I[21] = K, I[22] = Q, I[23] = H, I[24] = X, I[25] = Z, I[26] = g) : g = I[26], (0, s.useInsertionEffect)(m, g), I[27] === Symbol.for("react.memo_cache_sentinel") ? (f = (e, t) => {
                    G.current = {
                        turnKey: e,
                        element: t
                    }, L.current?.(e, t)
                }, I[27] = f) : f = I[27];
                let ee = (0, d.a)(f);
                I[28] === Symbol.for("react.memo_cache_sentinel") ? (v = e => {
                    L.current = e;
                    let t = G.current;
                    return null != t && e(t.turnKey, t.element), () => {
                        L.current = null
                    }
                }, I[28] = v) : v = I[28];
                let et = (0, d.a)(v);
                I[29] !== Y || I[30] !== A || I[31] !== V || I[32] !== B ? (y = () => {
                    let e = Y();
                    if (null != e && 0 !== e.clientHeight)
                        if (B && null != A) {
                            let t = u(e, A);
                            if (null == t) return;
                            V(t)
                        } else V()
                }, I[29] = Y, I[30] = A, I[31] = V, I[32] = B, I[33] = y) : y = I[33];
                let en = (0, s.useEffectEvent)(y);
                return I[34] !== W || I[35] !== q || I[36] !== U || I[37] !== K || I[38] !== M || I[39] !== ee || I[40] !== J || I[41] !== B ? (b = () => (M({
                    voiceAutoScrollEnabled: B,
                    clear: W,
                    consumeGrowth: q,
                    getHeightPx: K,
                    ensureScrollRoomForAnchor: U,
                    onTurnLayoutReady: ee,
                    place: J
                }), () => {
                    M(null)
                }), x = [W, q, K, U, M, ee, J, B], I[34] = W, I[35] = q, I[36] = U, I[37] = K, I[38] = M, I[39] = ee, I[40] = J, I[41] = B, I[42] = b, I[43] = x) : (b = I[42], x = I[43]), (0, s.useLayoutEffect)(b, x), I[44] !== Y || I[45] !== N || I[46] !== A || I[47] !== J || I[48] !== H || I[49] !== et || I[50] !== B ? (w = () => {
                    let e = F.current,
                        t = z.current;
                    if (F.current = A, z.current = N, B && !N && !t && null != A && A !== e) {
                        var n, a, r, s, o;
                        let e, t, i, l, c;
                        return n = A, a = Y, r = J, s = et, o = H.getPendingPlacementSignal(), t = null, i = null, l = !1, c = () => {
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
                }, C = [Y, N, A, J, et, H, B], I[44] = Y, I[45] = N, I[46] = A, I[47] = J, I[48] = H, I[49] = et, I[50] = B, I[51] = w, I[52] = C) : (w = I[51], C = I[52]), (0, s.useLayoutEffect)(w, C), I[53] !== $ || I[54] !== T || I[55] !== en || I[56] !== H ? (_ = () => {
                    if (null == T) return;
                    let e = H.getPendingPlacementSignal();
                    return $(() => {
                        e.aborted || en()
                    })
                }, I[53] = $, I[54] = T, I[55] = en, I[56] = H, I[57] = _) : _ = I[57], I[58] !== $ || I[59] !== T || I[60] !== H ? (S = [$, T, H], I[58] = $, I[59] = T, I[60] = H, I[61] = S) : S = I[61], (0, s.useLayoutEffect)(_, S), I[62] !== H ? (j = (0, a.jsx)(i.a, {
                    controller: H
                }), I[62] = H, I[63] = j) : j = I[63], j
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
                        homePath: S
                    } = e,
                    j = void 0 === S ? "/" : S,
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
                    return x[6] !== j || x[7] !== A ? (e = (0, a.jsx)(o.l, {
                        replace: !0,
                        to: {
                            pathname: j,
                            search: A
                        }
                    }), x[6] = j, x[7] = A, x[8] = e) : e = x[8], e
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
            S = n("hZax"),
            j = n("JYRT"),
            I = n("wwvo"),
            T = n("wrCb"),
            E = n("H7Nt"),
            P = n("vzxm"),
            A = n("jAnS"),
            M = n("wzUW"),
            k = n("Q9Us"),
            R = n("fwYa"),
            N = n("qfGT");
        let O = (0, v.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(284470), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function B(e) {
            let t, n, v, B, F, z, G, L, D, H, W, q, K, U, V, Q, $, Y, X, J, Z = (0, r.c)(56),
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
                ei = (0, S.h)("2160578039"),
                el = (0, o.x)(j.a, "2513446768"),
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
                    e.defaultPrevented || ((0, w.a)(et, s.oc, {
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
            }), K = (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About",
                description: "GPT menu action that opens its details over the current conversation or landing page"
            }), Z[27] = q, Z[28] = K) : (q = Z[27], K = Z[28]), Z[29] !== W ? (U = (0, a.jsxs)(m.c.Item, {
                onSelect: W,
                children: [q, K]
            }), Z[29] = W, Z[30] = U) : U = Z[30];
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
            }), Z[46] = ee, Z[47] = X) : X = Z[47], Z[48] !== es || Z[49] !== H || Z[50] !== U || Z[51] !== $ || Z[52] !== Y || Z[53] !== X || Z[54] !== D ? (J = (0, a.jsxs)(m.a, {
                align: "start",
                contentWidth: "menu",
                open: es,
                onOpenChange: eo,
                triggerButton: D,
                children: [H, U, $, Y, X]
            }), Z[48] = es, Z[49] = H, Z[50] = U, Z[51] = $, Z[52] = Y, Z[53] = X, Z[54] = D, Z[55] = J) : J = Z[55], J
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
            i = n("AcSY"),
            l = n("OWtl"),
            c = n("RFDv"),
            d = n("r6TF"),
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
                    w = (0, s.useId)(),
                    {
                        mutate: C
                    } = (0, i.l)();
                return f[0] !== v || f[1] !== w || f[2] !== x ? (t = () => (x.set(p.b, e => new Map(e).set(w, v)), x.get(p.a)?.dismissCurrent(), () => {
                    x.set(p.b, e => {
                        let t = new Map(e);
                        return t.delete(w), t
                    })
                }), n = [v, w, x], f[0] = v, f[1] = w, f[2] = x, f[3] = t, f[4] = n) : (t = f[3], n = f[4]), (0, s.useEffect)(t, n), f[5] !== v || f[6] !== b || f[7] !== C || f[8] !== x ? (m = () => {
                    if (!b) return;
                    let e = x.watch(e => {
                            let {
                                get: t
                            } = e
                        }),
                        t = x.watch(e => {
                            let {
                                get: t
                            } = e, n = !0 === t(o.b);
                            if ((0, h.bc)(x, v, n), !n) return;
                            let a = t(h.j, v);
                            if (null == a || !0 !== t(d.r, a)) return;
                            let r = (0, u.b)(a);
                            (0, c.j)(x, r, x.get(d.z, r)), C(a)
                        });
                    return () => {
                        e(), t(), (0, h.bc)(x, v, !1)
                    }
                }, g = [v, b, C, x], f[5] = v, f[6] = b, f[7] = C, f[8] = x, f[9] = m, f[10] = g) : (m = f[9], g = f[10]), (0, s.useEffect)(m, g), null
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
            S = n("Vcrm"),
            j = n("OCK3"),
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
                    paragenEnabled: K,
                    enabled: U,
                    canCopy: V,
                    priority: Q
                } = e,
                $ = void 0 === q ? "conversation" : q,
                Y = void 0 !== K && K,
                X = void 0 === U || U,
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
                    r = Y && "conversation" === $ ? ee.get(S.a, D)?.promptMessageId : void 0,
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
                    content: ee.get(j.b, o) ?? i?.[String(s.codeBlockIndex)]?.content ?? s.content
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
                        (t(u.a) !== r || t(w.C, D) !== s || Y && "conversation" === $ && t(S.a, D)?.promptMessageId !== n || t(h.e).copyLastCodeBlock !== o) && a.abort()
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
            p = n("DNHP"),
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
                    if (null != r) return (0, f.a)(a, (0, p.Se)(`chatgpt:${r}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, m.useLayoutEffect)(e, t), null
        }
        n("n5iL"), n("q3HK"), n("bf6R");
        var b = n("rBfn"),
            x = n("enMl"),
            w = n("PCEr");

        function C(e) {
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
            }), d[0] = t) : t = d[0], d[1] !== f ? (n = f ? null : (0, a.jsx)(u.SitePreviewBridge, {}), d[1] = f, d[2] = n) : n = d[2], d[3] !== m ? (s = (0, a.jsx)(i.a.Header, {
                desktopPlacement: "titlebar",
                divider: !1,
                children: m
            }), d[3] = m, d[4] = s) : s = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(i.a.RightPanelOutlet, {
                children: (0, a.jsx)(i.a.RightPanelTabs, {})
            }), d[5] = o) : o = d[5], d[6] !== p || d[7] !== m || d[8] !== f || d[9] !== g ? (l = f ? null : (0, a.jsx)(_, {
                chatIcon: p,
                mainToolbar: m,
                title: g
            }), d[6] = p, d[7] = m, d[8] = f, d[9] = g, d[10] = l) : l = d[10], d[11] !== v || d[12] !== n || d[13] !== s || d[14] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, s, v, o, l]
            }), d[11] = v, d[12] = n, d[13] = s, d[14] = l, d[15] = c) : c = d[15], c
        }

        function _(e) {
            let t, n, i, u, p, m, f = (0, r.c)(13),
                {
                    chatIcon: v,
                    mainToolbar: C,
                    title: _
                } = e,
                S = (0, s.y)(g.a);
            return (0, o.a)(), (0, s.z)(d.i), (0, s.z)(c.s), f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(y, {}), f[0] = t, f[1] = n) : (t = f[0], n = f[1]), f[2] !== v || f[3] !== _ ? (i = (0, a.jsx)(x.a, {
                title: _,
                icon: v
            }), f[2] = v, f[3] = _, f[4] = i) : i = f[4], f[5] !== C ? (u = (0, a.jsx)(w.a, {
                mainToolbar: C
            }), f[5] = C, f[6] = u) : u = f[6], f[7] !== S.value.routeKind ? (p = "other" === S.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(b.b, {
                showLauncherButton: !1
            }), f[7] = S.value.routeKind, f[8] = p) : p = f[8], f[9] !== i || f[10] !== u || f[11] !== p ? (m = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i, u, p, null, null]
            }), f[9] = i, f[10] = u, f[11] = p, f[12] = m) : m = f[12], m
        }
    }),
    dLcZ: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV");
        n("slpy"), n("zd8w");
        var s = n("OpyH");
        n("Sm6l"), n("HOLv");
        var o = n("NVRI"),
            i = n("MMlk");

        function l(e) {
            let {
                actionId: t,
                order: n,
                content: r
            } = e;
            return null == r ? null : (0, a.jsx)(s.a.HeaderAction, {
                actionId: t,
                align: "end",
                order: n,
                children: (0, a.jsx)("div", {
                    className: "flex items-center gap-toolbar-action",
                    children: r
                })
            }, t)
        }
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
                let t, n, o, i, c, d = (0, r.c)(13),
                    {
                        children: u,
                        menu: h,
                        hasTitleMenu: p
                    } = e,
                    m = void 0 !== p && p;
                d[0] !== m || d[1] !== h ? (t = m ? (0, a.jsx)(s.a.HeaderAction, {
                    actionId: "chatgpt-conversation-title-menu",
                    align: "start",
                    slotPosition: "threadTitle",
                    children: h
                }) : null, d[0] = m, d[1] = h, d[2] = t) : t = d[2], d[3] !== u ? (n = {
                    actionId: "chatgpt-conversation-actions",
                    order: 100,
                    content: u
                }, d[3] = u, d[4] = n) : n = d[4];
                let g = m ? null : h;
                return d[5] !== g ? (o = {
                    actionId: "chatgpt-conversation-overflow",
                    order: 0,
                    content: g
                }, d[5] = g, d[6] = o) : o = d[6], d[7] !== n || d[8] !== o ? (i = [n, o].map(l), d[7] = n, d[8] = o, d[9] = i) : i = d[9], d[10] !== t || d[11] !== i ? (c = (0, a.jsxs)(a.Fragment, {
                    children: [t, i]
                }), d[10] = t, d[11] = i, d[12] = c) : c = d[12], c
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
                }).findLast(e => "assistant" === e.author.role && !(0, r.m)(e) && "" !== (0, r.e)(e).trim())
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
                        onKeepUsingGpt: S,
                        onRetry: j
                    } = e,
                    I = (0, s.a)(),
                    T = (0, d.g)("2513446768");
                x[0] !== T || x[1] !== I ? (t = I.formatDate((0, u.a)(T.get("retirement_date", "")), {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }), x[0] = T, x[1] = I, x[2] = t) : t = x[2];
                let E = t;
                if ("error" === C && null != j) {
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
                if ("error" === C && null == j) {
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
                    A = "error" === C && null != j ? j : _;
                return x[21] !== n || x[22] !== P || x[23] !== A ? (f = (0, a.jsx)(l.a, {
                    color: "primary",
                    loading: P,
                    size: "dialog",
                    type: "button",
                    onClick: A,
                    children: n
                }), x[21] = n, x[22] = P, x[23] = A, x[24] = f) : f = x[24], x[25] !== S ? (v = null == S ? null : (0, a.jsx)(l.a, {
                    color: "outline",
                    size: "dialog",
                    type: "button",
                    onClick: S,
                    children: (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceKeepUsing",
                        defaultMessage: "Keep using GPT",
                        description: "Reveals the existing GPT chat composer for this visit only, keeping its draft. The choice is shown again when the GPT is reopened."
                    })
                }), x[25] = S, x[26] = v) : v = x[26], x[27] !== f || x[28] !== v ? (y = (0, a.jsxs)("div", {
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
                    S = (0, s.x)(m.c, _ ?? x),
                    j = (0, u.b)(),
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
                b[8] !== j || b[9] !== C || b[10] !== E ? (f = () => {
                    if (C) return;
                    let e = I.current,
                        t = j.getScrollElement();
                    if (null == e || null == t) return;
                    let n = new IntersectionObserver(e => {
                        e.some(g) && E()
                    }, {
                        root: t,
                        rootMargin: "80px 0px 0px 0px"
                    });
                    return n.observe(e), () => n.disconnect()
                }, b[8] = j, b[9] = C, b[10] = E, b[11] = f) : f = b[11];
                let P = S?.cursor,
                    A = S?.hasError;
                if (b[12] !== j || b[13] !== C || b[14] !== _ || b[15] !== P || b[16] !== A ? (v = [j, C, _, P, A], b[12] = j, b[13] = C, b[14] = _, b[15] = P, b[16] = A, b[17] = v) : v = b[17], (0, o.useEffect)(f, v), null == S || S.complete || null == S.cursor) return null;
                let M = S.hasError ? T : null;
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
            S = n("J6LI"),
            j = n("FgUr"),
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
            } = (0, S.c)(n, r), M = A ? v.a.projectOnlyMoveUnavailable : void 0, {
                data: k,
                isPending: R,
                isError: N
            } = s, {
                data: O,
                isPending: B,
                isError: F
            } = o, z = (0, j.a)(O, k, r?.gizmo.id), G = "allowed" === c, L = e => {
                let a = t.get(T) + 1,
                    r = t.get(p.e);
                t.set(T, a), (0, w.T)({
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
                } = (0, S.c)(n, void 0, e), r = t ? (0, _.a)((0, b.c)(e)) : void 0;
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
                    t.set(T, e => e + 1), (0, w.T)({
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
            i = n("DNHP"),
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
                    initialPromptKind: S
                } = t, j = void 0 === C ? w : C, I = (0, o.y)(u.a);
                b[2] !== w || b[3] !== j || b[4] !== _ || b[5] !== S || b[6] !== I ? (n = () => s()(() => {
                    let e = null == w ? null : I.get(g.y, w),
                        t = (0, d.e)(_ ?? (null == j ? "" : I.get(p.t, j)), {
                            addInitialContentToHistory: null == _ && null != j,
                            defaultTextKind: S ?? (null == _ && null != j || (0, c.b)(_ ?? "").length > 0 ? "prompt" : "plain"),
                            enableFileMentions: !0,
                            enableRichText: !0,
                            enableSkillMentions: !1,
                            enableSlashCommands: {
                                triggers: ["/"]
                            },
                            plainTextMode: (0, h.b)(I.get, i.tf.composerPlainTextMode),
                            suggestionOptions: {
                                enableInlineSystemHints: "tpp" !== e && "flora" !== e,
                                variant: "tpp" !== e && "flora" !== e ? "chatgpt" : void 0
                            }
                        });
                    return null == _ && null != w && "string" == typeof j && null != (0, m.j)(I, j) && "tpp" !== e && "flora" !== e && (0, p.R)(I, w, t.getChatGptPrompt().systemHints), t
                }), b[2] = w, b[3] = j, b[4] = _, b[5] = S, b[6] = I, b[7] = n) : n = b[7];
                let [T] = (0, l.useState)(n);
                b[8] !== T || b[9] !== x ? (r = x ?? T(), b[8] = T, b[9] = x, b[10] = r) : r = b[10];
                let E = r,
                    P = (0, l.useRef)(null);
                b[11] !== E || b[12] !== j || b[13] !== I ? (f = () => {
                    if (null == j) return;
                    let e = I.get(p.t, j);
                    return null != P.current && P.current !== e && E.restoreDraft(e), () => {
                        P.current = I.get(p.t, j)
                    }
                }, v = [E, j, I], b[11] = E, b[12] = j, b[13] = I, b[14] = f, b[15] = v) : (f = b[14], v = b[15]), (0, l.useLayoutEffect)(f, v), b[16] !== E || b[17] !== x ? (y = () => {
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
            h = n("DNHP"),
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
                width: h.S
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
        let g = (0, d.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(284470), n.e(570398), n.e(633848), n.e(158758), n.e(568810)]).then(n.bind(n, "FQ1K"))).SelectedTextAnnotationEditor, {
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
    WQca: (function(e, t, n) {
        var a = n("QosV"),
            r = n("BolX"),
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
                if (i.appServices?.windowTitle == null) return;
                let e = {
                    owner: w,
                    title: null == v ? void 0 : b ?? null
                };
                x.set(u, t => t.some(e => e.owner === w) ? t.map(t => t.owner === w ? e : t) : [...t, e]), g(x)
            }, n = [x, w, v, b], f[0] = b, f[1] = w, f[2] = x, f[3] = v, f[4] = t, f[5] = n) : (t = f[4], n = f[5]), (0, o.useEffect)(t, n), f[6] !== w || f[7] !== x ? (a = () => () => {
                i.appServices?.windowTitle != null && (x.set(u, e => e.filter(e => e.owner !== w)), g(x))
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
                        children: S,
                        className: j,
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
                    K = F.portalTarget ?? document.body,
                    U = null == F.portalTarget ? "fixed z-50" : "absolute z-[1]";
                w[20] !== j || w[21] !== U ? (f = (0, s.b)("pointer-events-none w-max", U, j), w[20] = j, w[21] = U, w[22] = f) : f = w[22];
                let V = F.viewportHorizontalBounds.right - F.viewportHorizontalBounds.left - 16,
                    Q = F.rect.top - 8,
                    $ = `translateX(clamp(${W}px, ${-100*D}%, calc(${q}px - 100%))) translateY(-100%)`;
                return w[23] !== H || w[24] !== V || w[25] !== Q || w[26] !== $ ? (v = {
                    left: H,
                    maxWidth: V,
                    top: Q,
                    transform: $
                }, w[23] = H, w[24] = V, w[25] = Q, w[26] = $, w[27] = v) : v = w[27], w[28] !== S || w[29] !== L || w[30] !== F || w[31] !== k ? (y = null == F.portalTarget && 1 !== k ? (0, a.jsx)("div", {
                    style: {
                        zoom: k
                    },
                    children: S(F, L)
                }) : S(F, L), w[28] = S, w[29] = L, w[30] = F, w[31] = k, w[32] = y) : y = w[32], w[33] !== v || w[34] !== y || w[35] !== f ? (b = (0, a.jsx)("div", {
                    ref: O,
                    className: f,
                    style: v,
                    children: y
                }), w[33] = v, w[34] = y, w[35] = f, w[36] = b) : b = w[36], w[37] !== b || w[38] !== K ? (x = (0, a.jsx)(l.a, {
                    container: K,
                    children: b
                }), w[37] = b, w[38] = K, w[39] = x) : x = w[39], x
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
                        onCommentSelectedText: S,
                        onEditModeChange: j,
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
                    return b[8] !== j ? (e = e => {
                        e.stopPropagation(), "Escape" === e.key && (e.preventDefault(), j?.(!1), B("actions-focused"))
                    }, b[8] = j, b[9] = e) : e = b[9], b[10] !== R || b[11] !== j || b[12] !== I ? (t = e => {
                        e.preventDefault(), 0 !== R.trim().length && (B("pending"), I(R).then(e => {
                            "retry" === e && (j?.(!1), B("actions-focused"))
                        }))
                    }, b[10] = R, b[11] = j, b[12] = I, b[13] = t) : t = b[13], b[14] !== k ? (n = k.formatMessage({
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
                }) : null, b[41] = E, b[42] = A, b[43] = g) : g = b[43], b[44] !== S ? (f = null != S ? (0, a.jsx)(d.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), S()
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.comment",
                        defaultMessage: "Comment",
                        description: "Button label for commenting on the currently selected text"
                    })
                }) : null, b[44] = S, b[45] = f) : f = b[45], b[46] !== O || b[47] !== j || b[48] !== I ? (v = null != I ? (0, a.jsx)(d.b, {
                    autoFocus: "actions-focused" === O,
                    onClick: () => {
                        j?.(!0), B("edit")
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.edit",
                        defaultMessage: "Edit",
                        description: "Button label for editing currently selected text with a model"
                    })
                }) : null, b[46] = O, b[47] = j, b[48] = I, b[49] = v) : v = b[49], b[50] !== t || b[51] !== n || b[52] !== g || b[53] !== f || b[54] !== v ? (y = (0, a.jsxs)(d.a, {
                    children: [t, n, g, f, v]
                }), b[50] = t, b[51] = n, b[52] = g, b[53] = f, b[54] = v, b[55] = y) : y = b[55], y
            }
        })
    }),
    RZBv: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("xSOA"),
            o = n("BolX"),
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
            w = n("OWtl"),
            C = n("MRlq"),
            _ = n("HFSu"),
            S = n("vNLk"),
            j = n("PCxL"),
            I = n("aZgH"),
            T = n("CzoK");
        n.d(t, {}, {
            a: function(e) {
                let t, n, E, P, A, M, k, R, N, O, B, F, z, G, L = (0, r.c)(59),
                    {
                        conversationId: D,
                        kind: H
                    } = e,
                    W = (0, o.y)(w.a),
                    q = (0, l.a)(),
                    K = (0, d.Y)(),
                    U = (0, d._)(),
                    V = (0, o.z)(j.h),
                    Q = (0, o.z)(u.h),
                    $ = (0, o.z)(u.g);
                L[0] !== Q || L[1] !== D || L[2] !== $ || L[3] !== H || L[4] !== V ? (t = "chatgpt" === H && V?.kind === "chatgpt" && V.conversation.id === D && (0, m.a)(V.conversation, Q, $) ? V.conversation : null, L[0] = Q, L[1] = D, L[2] = $, L[3] = H, L[4] = V, L[5] = t) : t = L[5];
                let Y = t,
                    [X, J] = (0, i.useState)(!1),
                    {
                        mutate: Z,
                        isPending: ee
                    } = (0, f.a)(D);
                L[6] !== K.hash || L[7] !== K.pathname || L[8] !== K.search || L[9] !== U || L[10] !== W ? (n = () => {
                    (0, j.e)(W), U({
                        pathname: K.pathname,
                        search: K.search,
                        hash: K.hash
                    }, {
                        replace: !0,
                        state: null
                    })
                }, L[6] = K.hash, L[7] = K.pathname, L[8] = K.search, L[9] = U, L[10] = W, L[11] = n) : n = L[11];
                let et = n,
                    en = (0, o.z)(j.g);
                L[12] !== D || L[13] !== en ? (E = en?.find(e => (0, I.a)(e.task) === `hosted:${D}`), L[12] = D, L[13] = en, L[14] = E) : E = L[14];
                let ea = E;
                L[15] !== D || L[16] !== W ? (P = () => {
                    let e = W.get(j.h);
                    return null != e && (0, I.a)(e) === `hosted:${D}` ? (0, j.d)(W, e) : void 0
                }, L[15] = D, L[16] = W, L[17] = P) : P = L[17], L[18] !== D || L[19] !== H || L[20] !== W ? (A = async () => {
                    if ("cloud" === H) {
                        await _.CodexRequest.safePost("/wham/tasks/{task_id}/recover", {
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
                }, L[18] = D, L[19] = H, L[20] = W, L[21] = A) : A = L[21], L[22] !== D || L[23] !== et || L[24] !== H || L[25] !== W ? (M = (e, t, n) => {
                    n?.("restored");
                    let r = W.get(y.f).info((0, a.jsx)(c.a, {
                        ...C.a.unarchiveSuccessPlain
                    }), {
                        leading: (0, a.jsx)(v.a, {
                            "aria-hidden": !1,
                            asset: T.a
                        }),
                        primaryAction: {
                            label: (0, a.jsx)(c.a, {
                                ...C.a.viewNow
                            }),
                            onClick: () => {
                                r.close(), et()
                            }
                        },
                        id: `unarchive-thread-${H}:${D}`
                    })
                }, L[22] = D, L[23] = et, L[24] = H, L[25] = W, L[26] = M) : M = L[26], L[27] !== q || L[28] !== W ? (k = (e, t, n) => {
                    n?.(null), W.get(y.f).danger(q.formatMessage(C.a.unarchiveError), {
                        errorAnalytics: {
                            toastId: "previewFooter.onError.unarchiveError"
                        }
                    })
                }, L[27] = q, L[28] = W, L[29] = k) : k = L[29], L[30] !== P || L[31] !== A || L[32] !== M || L[33] !== k ? (R = {
                    onMutate: P,
                    mutationFn: A,
                    onSuccess: M,
                    onError: k
                }, L[30] = P, L[31] = A, L[32] = M, L[33] = k, L[34] = R) : R = L[34];
                let {
                    mutate: er,
                    isPending: es,
                    isSuccess: eo
                } = (0, s.a)(R);
                L[35] !== Z || L[36] !== U || L[37] !== W ? (N = e => {
                    let t = W.get(j.c),
                        n = W.get(b.c),
                        a = W.get(u.f);
                    Z(e, {
                        onSuccess: () => {
                            if (J(!1), t !== W.get(j.c) || n !== W.get(b.c) || a !== W.get(u.f)) return;
                            W.set(j.h, null);
                            let e = t?.pathname === j.a ? t : null;
                            U(e ?? "/", {
                                replace: !0,
                                state: e?.state ?? null
                            })
                        }
                    })
                }, L[35] = Z, L[36] = U, L[37] = W, L[38] = N) : N = L[38];
                let ei = N;
                L[39] !== Y ? (O = null == Y ? void 0 : () => J(!0), L[39] = Y, L[40] = O) : O = L[40];
                let el = eo || ea?.status === "restored",
                    ec = es || ea?.status === "restoring";
                return L[41] !== er ? (B = () => er(), L[41] = er, L[42] = B) : B = L[42], L[43] !== et || L[44] !== ee || L[45] !== O || L[46] !== el || L[47] !== ec || L[48] !== B ? (F = (0, a.jsx)(S.a, {
                    deleting: ee,
                    onDelete: O,
                    restored: el,
                    restoring: ec,
                    onUnarchive: B,
                    onDone: et
                }), L[43] = et, L[44] = ee, L[45] = O, L[46] = el, L[47] = ec, L[48] = B, L[49] = F) : F = L[49], L[50] !== Y || L[51] !== ei || L[52] !== q || L[53] !== X || L[54] !== ee ? (z = null != Y && (0, a.jsx)(h.a, {
                    allowArtifactDeletion: !0,
                    title: Y.title?.trim() || q.formatMessage(p.a.newChat),
                    open: X,
                    isDeleting: ee,
                    onOpenChange: J,
                    onConfirm: ei
                }), L[50] = Y, L[51] = ei, L[52] = q, L[53] = X, L[54] = ee, L[55] = z) : z = L[55], L[56] !== F || L[57] !== z ? (G = (0, a.jsxs)(a.Fragment, {
                    children: [F, z]
                }), L[56] = F, L[57] = z, L[58] = G) : G = L[58], G
            }
        })
    })
};