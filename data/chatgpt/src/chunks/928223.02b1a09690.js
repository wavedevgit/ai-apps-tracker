export const __rspack_esm_ids = [928223];
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
            o = n("BolX"),
            s = n("zd8w"),
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
            C = n("twmu"),
            w = n("EOo5"),
            _ = n("Kwur"),
            S = n("udGC"),
            I = n("aTcy"),
            j = n("JNtf"),
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
                Z = (0, o.y)(m.a),
                ee = (0, f.a)(),
                {
                    email: et
                } = (0, w.a)(),
                [en, ea] = (0, s.useState)(),
                er = (0, s.useRef)(!0);
            V[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => (er.current = !0, () => {
                er.current = !1
            }), n = [], V[0] = t, V[1] = n) : (t = V[0], n = V[1]), (0, s.useEffect)(t, n);
            let eo = "account-owner" === Q.account.account_user_role,
                es = "account-admin" === Q.account.account_user_role,
                ei = !0 === Q.entitlement.has_active_subscription,
                el = (eo || es) && ei,
                ec = eo || el;
            V[2] !== el || V[3] !== eo ? (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE", el ? l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY" : eo && (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE"), V[2] = el, V[3] = eo, V[4] = l) : l = V[4], V[5] !== Q.account.account_user_role || V[6] !== l || V[7] !== ei || V[8] !== Z ? (c = (e, t) => {
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
                    href: new URL("/codex/cloud", I.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, V[10] = X, V[11] = d) : d = V[11];
            let eu = d;
            V[12] !== Q.account.subscription_seat_pools_enabled || V[13] !== $ || V[14] !== eu || V[15] !== el || V[16] !== et || V[17] !== ee || V[18] !== eo || V[19] !== ed || V[20] !== X || V[21] !== J || V[22] !== en || V[23] !== Z || V[24] !== Y ? (u = async () => {
                if ("requesting" !== en) {
                    if (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), eo && !el) {
                        let e = new URL("/admin/members", I.h);
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
                            (0, S.e)(Z), await (0, x.g)("accounts-check"), await Promise.all([Z.query.invalidate(C.b, $), Z.queryClient.invalidateQueries({
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
            }, V[12] = Q.account.subscription_seat_pools_enabled, V[13] = $, V[14] = eu, V[15] = el, V[16] = et, V[17] = ee, V[18] = eo, V[19] = ed, V[20] = X, V[21] = J, V[22] = en, V[23] = Z, V[24] = Y, V[25] = u) : u = V[25];
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
            } else if (es) {
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
            }, V[33] = eh, V[34] = k) : k = V[34], V[35] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, a.jsx)(j.e, {
                className: "heading-lg font-semibold",
                children: ep
            }), V[35] = R) : R = V[35], V[36] !== em ? (B = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [R, (0, a.jsx)(j.d, {
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
            }), V[64] = q, V[65] = k, V[66] = U) : U = V[66], V[67] !== U || V[68] !== y ? (K = (0, a.jsx)(j.a, {
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
            let t, n, s = (0, r.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, o.y)(m.a),
                p = (0, o.z)(B.a),
                g = (0, o.z)(d.u),
                f = (0, l._)();
            if ("restricted" !== p.status) return null;
            let v = `${p.accountId}:${p.userId}`;
            return s[0] !== f || s[1] !== c || s[2] !== h || s[3] !== g.status ? (t = "allowed" === g.status ? c ?? (() => {
                (0, u.l)(h, "work"), f("/")
            }) : void 0, s[0] = f, s[1] = c, s[2] = h, s[3] = g.status, s[4] = t) : t = s[4], s[5] !== i || s[6] !== v || s[7] !== t ? (n = (0, a.jsx)(z, {
                modeToggle: i,
                onSwitchToWork: t
            }, v), s[5] = i, s[6] = v, s[7] = t, s[8] = n) : n = s[8], n
        }

        function z(e) {
            let t, n, l, c, d, u = (0, r.c)(13),
                {
                    modeToggle: m,
                    onSwitchToWork: g
                } = e,
                f = (0, o.z)(B.a),
                [v, y] = (0, s.useState)(!1);
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
            let t, n, s = (0, r.c)(4),
                {
                    children: i,
                    enabled: l
                } = e;
            s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "chatgpt.seat-access"
            }, s[0] = t) : t = s[0];
            let d = (0, o.x)(c.a, t);
            return l ? d.isLoading ? null : (s[1] !== d.isCapable || s[2] !== i ? (n = d.isCapable ? (0, a.jsx)(F, {}) : i, s[1] = d.isCapable, s[2] = i, s[3] = n) : n = s[3], n) : i
        }
    }),
    Pyg2: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("rjva"),
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
                    m = (0, o.y)(i.a),
                    g = (0, o.z)("home" === m.value.routeKind && l.a),
                    f = g ? "floating" : p,
                    v = !g && t.reserveContent,
                    y = !!g || t.showHeader;
                return u[4] !== h || u[5] !== t || u[6] !== f || u[7] !== v || u[8] !== y ? (d = (0, a.jsx)(s.a, {
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
            o = n("zd8w"),
            s = n("kjQz"),
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
                    v = (0, o.useRef)(!1),
                    y = (0, o.useRef)(null);
                h[0] !== p ? (t = () => ({
                    name: p,
                    key: crypto.randomUUID(),
                    startedAtMs: performance.timeOrigin + performance.now()
                }), h[0] = p, h[1] = t) : t = h[1];
                let [b] = (0, o.useState)(t);
                return h[2] !== b ? (n = () => (v.current = !0, y.current = y.current ?? s.a.start(b.name, {}, b), y.current.mark("route_entered"), () => {
                    v.current = !1, queueMicrotask(() => {
                        v.current || y.current?.abort("navigation_away")
                    })
                }), l = [b], h[2] = b, h[3] = n, h[4] = l) : (n = h[3], l = h[4]), (0, o.useEffect)(n, l), h[5] !== f || h[6] !== m ? (c = () => {
                    !m && f && y.current?.fail("load_failed")
                }, d = [m, f], h[5] = f, h[6] = m, h[7] = c, h[8] = d) : (c = h[7], d = h[8]), (0, o.useEffect)(c, d), h[9] !== m ? (u = m ? (0, a.jsx)(i.a, {
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
            o = n("dQRk"),
            s = n("PsNT"),
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
            if (l?.response.visibility.status !== "allowed" || !(0, s.b)(l.response.content) || !c(l.response.content)) return !1;
            let d = n(o.t, r.conversationId),
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
            o = n("BolX"),
            s = n("Ro2M"),
            i = n("OWtl"),
            l = n("OMIV"),
            c = n("dQRk"),
            d = n("QkVh");
        let u = (0, o.d)(i.a, (e, t) => {
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
                return 0 === r.length ? [] : (n(s.h, n(s.b)), r.flatMap(e => {
                    let {
                        automationId: t,
                        messageId: a
                    } = e, r = n(s.e, t).data?.automation;
                    if (null == r) return [];
                    let o = /^file-inline-(libfile[_-][^~]+)(?:~.*)?$/.exec(r.plan_file_id ?? "")?.[1];
                    return null == o ? [] : [{
                        automationId: t,
                        messageId: a,
                        libraryFileId: o,
                        query: n(d.a, o)
                    }]
                }))
            }, {
                isEqual: r()
            }),
            h = (0, o.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = new Map;
                for (let {
                        automationId: t,
                        messageId: r,
                        libraryFileId: o,
                        query: s
                    }
                    of n(u, e)) {
                    if (a.has(o)) continue;
                    let e = s.data;
                    e?.mime_type === "text/markdown" && "owned" === e.access_kind && a.set(o, {
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
            p = (0, o.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(h, e), r = n(c.q, e), o = r?.filter(e => "list" !== e.source && a.some(t => t.automationId === e.automationId)), s = o?.at(-1)?.messageId;
                if (null == s) return null;
                let i = new Set(o?.filter(e => e.messageId === s).map(e => e.automationId));
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
            o = n("zd8w"),
            s = n("VnEZ");
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, r.c)(3),
                    {
                        children: i,
                        binding: l
                    } = e,
                    [c] = (0, o.useState)(s.b),
                    d = l ?? c;
                return n[0] !== i || n[1] !== d ? (t = (0, a.jsx)(s.a, {
                    value: d,
                    children: i
                }), n[0] = i, n[1] = d, n[2] = t) : t = n[2], t
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
            o = n("BolX"),
            s = n("nlNF"),
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
            C = n("mEbU"),
            w = n("RU3e"),
            _ = n("UIU6"),
            S = n("Bbed"),
            I = n("T1PX");
        let j = (0, S.a)(async () => {
            let [{
                SvgLottie: e
            }, {
                strFromU8: t,
                unzipSync: r
            }, {
                z: o
            }, s] = await Promise.all([Promise.all([n.e(747352), n.e(766175)]).then(n.bind(n, "lARO")), Promise.resolve().then(n.bind(n, "yCWm")), Promise.all([n.e(190782), n.e(58670)]).then(n.bind(n, "PkUi")), fetch("https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-animation-1754caf3cef014e7.lottie", {
                credentials: "omit",
                referrerPolicy: "no-referrer",
                redirect: "error",
                signal: AbortSignal.timeout(5e3)
            }).then(e => e.ok ? e.arrayBuffer() : null).catch(() => null)]);
            if (null == s) return function(e) {
                return (0, a.jsx)(P, {})
            };
            let i = "animations/sponsored-agents.json",
                l = r(new Uint8Array(s), {
                    filter: e => {
                        let {
                            name: t
                        } = e;
                        return t === i
                    }
                })[i];
            if (null == l) throw Error("Business Agent disclosure animation is missing");
            let c = o.looseObject({
                layers: o.array(o.looseObject({
                    nm: o.string().optional(),
                    refId: o.string().optional(),
                    masksProperties: o.array(o.looseObject({
                        nm: o.string().optional()
                    })).optional()
                }))
            }).parse(JSON.parse(t(l)));
            return function(t) {
                let {
                    onError: n
                } = t, [r, o] = (0, h.useState)(!1), [s] = (0, h.useState)(() => {
                    let e = structuredClone(c);
                    for (let t of e.layers) "🖼️ Image (replace img. layer)" === t.nm && "art_0" === t.refId && (t.masksProperties = t.masksProperties?.filter(e => "Sheet top corners" !== e.nm));
                    return e
                });
                return (0, a.jsx)("div", {
                    className: r ? "size-full" : "invisible size-full",
                    children: (0, a.jsx)(e, {
                        className: "size-full",
                        animationData: s,
                        autoplay: !0,
                        loop: !0,
                        onDataFailed: n,
                        onDOMLoaded: () => o(!0)
                    })
                })
            }
        }, {
            errorFallback: (0, a.jsx)(P, {})
        });

        function T(e) {
            let t, n = (0, r.c)(2),
                o = (0, I.a)();
            return n[0] !== o ? (t = (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden",
                children: o ? (0, a.jsx)(P, {}) : (0, a.jsx)(E, {})
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function E(e) {
            let t, n, s, i = (0, r.c)(7),
                l = (0, h.useRef)(null),
                c = (0, C.a)(l),
                d = (0, o.z)(w.b),
                [u, p] = (0, h.useState)(!1);
            if (u) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(P, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(P, {}), i[1] = t) : t = i[1], i[2] !== c || i[3] !== d ? (n = c && !0 === d ? (0, a.jsx)(j, {
                onError: () => p(!0)
            }) : null, i[2] = c, i[3] = d, i[4] = n) : n = i[4], i[5] !== n ? (s = (0, a.jsx)(_.a, {
                name: "BusinessAgentDisclosureHero",
                fallback: t,
                children: (0, a.jsx)("div", {
                    ref: l,
                    className: "absolute inset-0",
                    children: n
                })
            }), i[5] = n, i[6] = s) : s = i[6], s
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
            let t, n, o, s, i, l = (0, r.c)(11),
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
            }), l[3] = d.businessName, l[4] = n) : n = l[4], l[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)("span", {
                className: "truncate text-xs font-normal text-secondary",
                children: (0, a.jsx)(p.a, {
                    id: "chatgpt.ads.business_agent.thread_header.subtitle",
                    defaultMessage: "Business chat",
                    description: "Short subtitle beneath the business name in the header of a Business Agent conversation. It tells an end user that the custom GPT chat represents a business. Keep this compact enough to fit on one line; there are no placeholders or formatting."
                })
            }), l[5] = o) : o = l[5], l[6] !== n ? (s = (0, a.jsxs)("div", {
                className: "flex min-w-0 flex-col text-start",
                children: [n, o]
            }), l[6] = n, l[7] = s) : s = l[7], l[8] !== t || l[9] !== s ? (i = (0, a.jsxs)("div", {
                className: "flex min-w-0 items-center gap-2 select-none",
                children: [t, s]
            }), l[8] = t, l[9] = s, l[10] = i) : i = l[10], i
        }

        function R(e) {
            let t, n = (0, r.c)(14),
                {
                    state: o,
                    onStarterPromptSelect: s
                } = e,
                i = "ready" === o.status ? o.context : o;
            if (n[0] !== i.businessName || n[1] !== i.logoUrl || n[2] !== i.showConversationStarters || n[3] !== s || n[4] !== o.context || n[5] !== o.status) {
                let e, r, l, c = "ready" === o.status && i.showConversationStarters ? o.context.conversationStarters?.slice(0, 4) : void 0,
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
                }), n[10] = i.businessName, n[11] = r) : r = n[11], n[12] !== o.status ? (l = "ready" !== o.status ? (0, a.jsx)(g.a, {
                    ariaLive: "polite",
                    role: "failed" === o.status ? "alert" : "status",
                    type: "failed" === o.status ? "error" : "normal",
                    content: "failed" === o.status ? (0, a.jsx)(p.a, {
                        id: "chatgptConversations.businessAgent.unavailable",
                        defaultMessage: "This Business Agent is unavailable. Please return to the ad and try again",
                        description: "Error on a Business Agent chat destination when creating its interaction fails; sending is unavailable and the user can retry from the original ad"
                    }) : (0, a.jsx)(p.a, {
                        id: "chatgptConversations.businessAgent.loading",
                        defaultMessage: "Opening Business Agent…",
                        description: "Loading status on a Business Agent chat destination while its interaction is being created"
                    })
                }) : null, n[12] = o.status, n[13] = l) : l = n[13], t = (0, a.jsxs)("div", {
                    className: "mx-auto flex w-[min(100%,var(--thread-content-max-width))] min-w-0 flex-col items-center gap-3 px-panel text-center",
                    children: [e, r, l, null != c && (c.length > 1 || 1 === c.length && "ready" === o.status && !0 === o.context.disablePrefill) ? (0, a.jsx)("div", {
                        className: "mt-3 flex flex-wrap justify-center gap-2 select-none",
                        children: c.map(e => (0, a.jsx)(f.a, {
                            color: "secondary",
                            size: "medium",
                            disabled: null == s,
                            onClick: () => s?.(e),
                            children: e
                        }, e))
                    }) : null]
                }), n[0] = i.businessName, n[1] = i.logoUrl, n[2] = i.showConversationStarters, n[3] = s, n[4] = o.context, n[5] = o.status, n[6] = t
            } else t = n[6];
            return t
        }

        function N(e) {
            let t, n, o, s, i, l, c, d, u, m, g, C, w, _, S, I, j, E = (0, r.c)(29),
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
            }, E[2] = N, E[3] = n) : n = E[3], E[4] !== k ? (o = {
                "data-theme": "light",
                onOpenAutoFocus: k
            }, E[4] = k, E[5] = o) : o = E[5], E[6] !== R ? (s = e => {
                e.preventDefault(), B(!1), R?.()
            }, E[6] = R, E[7] = s) : s = E[7], E[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(T, {}), E[8] = i) : i = E[8], E[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(v.e, {
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
            }), E[14] = g) : g = E[14], E[15] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, a.jsxs)("div", {
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
            }), E[15] = C) : C = E[15], E[16] !== F ? (w = null == F ? null : (0, a.jsx)(b.a, {
                href: F,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy",
                    description: "Link to the business-provided privacy policy in the introductory Business Agent dialog. Opens separately without accepting or dismissing the dialog. Keep the label short."
                })
            }), E[16] = F, E[17] = w) : w = E[17], E[18] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, a.jsx)("div", {
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
            }), E[18] = _) : _ = E[18], E[19] !== w ? (S = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [C, w, _]
                })]
            }), E[19] = w, E[20] = S) : S = E[20], E[21] !== S || E[22] !== s ? (I = (0, a.jsx)(y.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: s,
                children: S
            }), E[21] = S, E[22] = s, E[23] = I) : I = E[23], E[24] !== O || E[25] !== I || E[26] !== n || E[27] !== o ? (j = (0, a.jsx)(v.a, {
                open: O,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: o,
                children: I
            }), E[24] = O, E[25] = I, E[26] = n, E[27] = o, E[28] = j) : j = E[28], j
        }

        function O(e) {
            let t, n = (0, r.c)(2),
                {
                    businessName: o
                } = e;
            return n[0] !== o ? (t = o?.trim() ? (0, a.jsx)(a.Fragment, {
                children: o
            }) : (0, a.jsx)(p.a, {
                id: "chatgpt.ads.business_agent.disclosure.fallback_name",
                defaultMessage: "Business Agent",
                description: "Fallback heading in the compact data-sharing disclosure shown at the top of every organic or sponsored Business Agent conversation. Use a short neutral title that fits on one line. This appears when the business has not supplied a display name."
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var B = n("zHQF");

        function F(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s,
                    fallback: i
                } = e,
                l = (0, o.x)(c.u, s);
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
                f = (0, o.y)(i.a),
                v = (0, o.x)(c.u, p),
                y = (0, o.z)(v?.status === "failed" ? s.c : null),
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
            let t, n, s, l = (0, r.c)(11),
                {
                    context: c,
                    conversationId: u
                } = e,
                h = (0, o.y)(i.a),
                p = (0, o.z)(d.b),
                m = p?.conversationId === u && p.ready;
            return m || !0 === c.showDisclosureModal ? (l[0] !== m || l[1] !== c || l[2] !== p ? (t = m ? {
                ...c,
                showDisclosureModal: !p.presented
            } : c, l[0] = m, l[1] = c, l[2] = p, l[3] = t) : t = l[3], l[4] !== m || l[5] !== u || l[6] !== h ? (n = m ? () => (0, d.a)(h, u) : void 0, l[4] = m, l[5] = u, l[6] = h, l[7] = n) : n = l[7], l[8] !== t || l[9] !== n ? (s = (0, a.jsx)(N, {
                context: t,
                onPresented: n
            }), l[8] = t, l[9] = n, l[10] = s) : s = l[10], s) : null
        }
    }),
    YiPf: (function(e, t, n) {
        n.d(t, {
            a: () => v
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("zd8w"),
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
                f = (0, o.y)(d.a),
                v = (0, l._)(),
                y = (0, s.useRef)(!1);
            i[0] !== p || i[1] !== h || i[2] !== v || i[3] !== m || i[4] !== f ? (t = () => {
                m?.(), f.get(c.f).info(h, {
                    id: "conversation-inaccessible",
                    duration: 5
                }), v(p, {
                    replace: !0
                })
            }, i[0] = p, i[1] = h, i[2] = v, i[3] = m, i[4] = f, i[5] = t) : t = i[5];
            let b = (0, s.useEffectEvent)(t);
            return i[6] !== u || i[7] !== b ? (n = () => {
                u && !y.current && (y.current = !0, b())
            }, i[6] = u, i[7] = b, i[8] = n) : n = i[8], i[9] !== u ? (a = [u], i[9] = u, i[10] = a) : a = i[10], (0, s.useEffect)(n, a), u ? null : g
        }
        var h = n("IxgT"),
            p = n("yGJW"),
            m = n("eShZ"),
            g = n("ZhoB");
        let f = new WeakSet;

        function v(e) {
            let t, n, s, l, c, f, v, b, x = (0, r.c)(24),
                {
                    conversationId: C,
                    error: w,
                    loadError: _,
                    canRetry: S,
                    isWorkConversation: I,
                    showChatFallback: j,
                    children: T
                } = e,
                E = (0, o.y)(d.a),
                P = (0, o.z)(void 0 !== j && j && !1 === I ? h.b : null);
            if (null != P) return P;
            x[0] !== C || x[1] !== I || x[2] !== E ? (t = (e, t) => {
                (0, g.e)(E.get(p.c).logProductEvent, {
                    conversationId: C,
                    error: e,
                    isWorkConversation: I,
                    canRetry: t
                })
            }, x[0] = C, x[1] = I, x[2] = E, x[3] = t) : t = x[3];
            let A = t;
            x[4] !== S || x[5] !== _ || x[6] !== A ? (n = () => A(_, S), x[4] = S, x[5] = _, x[6] = A, x[7] = n) : n = x[7], x[8] !== _ || x[9] !== n ? (s = (0, a.jsx)(y, {
                error: _,
                onShown: n
            }), x[8] = _, x[9] = n, x[10] = s) : s = x[10], x[11] !== T || x[12] !== s ? (l = (0, a.jsxs)(a.Fragment, {
                children: [s, T]
            }), x[11] = T, x[12] = s, x[13] = l) : l = x[13];
            let M = l;
            return x[14] !== w ? (c = w instanceof m.FetchError && !(0, m.e)(w) && (403 === w.status || 404 === w.status), x[14] = w, x[15] = c) : c = x[15], x[16] !== w || x[17] !== A ? (f = () => A(w, !1), x[16] = w, x[17] = A, x[18] = f) : f = x[18], x[19] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
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
                    error: o,
                    onShown: i
                } = e,
                l = (0, s.useEffectEvent)(i);
            return a[0] !== o || a[1] !== l ? (t = () => {
                if (null != o) {
                    if ((0, m.e)(o)) {
                        if (f.has(o)) return;
                        f.add(o)
                    }
                    l()
                }
            }, a[0] = o, a[1] = l, a[2] = t) : t = a[2], a[3] !== o ? (n = [o], a[3] = o, a[4] = n) : n = a[4], (0, s.useEffect)(t, n), null
        }
    }),
    eKlv: (function(e, t, n) {
        var a = n("Cslg"),
            r = n("X6Vn"),
            o = n("SGsN"),
            s = n("svjy"),
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
                gizmo_id: e.get(p.T, a),
                is_starred: !1,
                title: e.get(p.eb, a)
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
                    e.get(o.f).danger(n || e.get(s.a).formatMessage(d.a.pinError), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.activeChat.pinError"
                        }
                    })
                })
            },
            renameActiveChatGptConversation: function(e, t, n) {
                let o = b(e, t);
                if (null == o || !(0, u.b)(o, e.get(a.h), e.get(a.g), e.get(v.g, o.conversation_id))) {
                    if (null != n) throw Error("Chat is unavailable for renaming.");
                    return
                }
                let s = e.get(p.E, t) ? e.get(p.eb, t) : o.title,
                    l = (0, m.a)(o.context_scopes) ? o.gizmo_id : void 0,
                    c = t => (0, v.Q)({
                        scope: e,
                        conversationId: o.conversation_id,
                        previousTitle: s,
                        title: t
                    });
                if (null != n) {
                    if (null != l && e.get(g.f)?.projectId !== l) throw Error("Chat is locked.");
                    return c(n)
                }(0, r.f)(e, i.SidebarRenameDialog, {
                    initialValue: s ?? "",
                    draftKey: o.conversation_id,
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
            o = n("Wf1j"),
            s = n("EFj1"),
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
                    C = (0, o.a)();
                return y[0] !== b || y[1] !== C || y[2] !== x ? (t = () => {
                    (0, h.c)(x, b).catch(() => {
                        x.get(i.f).danger(C.formatMessage(u.a.markUnreadError), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.sidebar.markUnreadError"
                            }
                        })
                    })
                }, y[0] = b, y[1] = C, y[2] = x, y[3] = t) : t = y[3], (0, s.a)("markThreadUnread", t), y[4] !== b || y[5] !== x ? (n = () => void(0, d.renameActiveChatGptConversation)(x, b), p = [b, x], y[4] = b, y[5] = x, y[6] = n, y[7] = p) : (n = y[6], p = y[7]), (0, l.d)("rename-thread", n, p), y[8] !== b || y[9] !== x ? (m = () => (0, d.c)(x, b), g = [b, x], y[8] = b, y[9] = x, y[10] = m, y[11] = g) : (m = y[10], g = y[11]), (0, l.d)("toggle-thread-pin", m, g), y[12] !== b || y[13] !== x ? (f = () => (0, d.a)(x, b), v = [b, x], y[12] = b, y[13] = x, y[14] = f, y[15] = v) : (f = y[14], v = y[15]), (0, l.d)("archive-thread", f, v), null
            }
        })
    }),
    WhFf: (function(e, t, n) {
        n.d(t, {
            a: () => iw,
            ChatGptConversationPage: () => iC
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("T0Rc"),
            s = n("BolX"),
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
            C = (n("AZW7"), n("uxPT")),
            w = n("GMTh"),
            _ = n("YiPf"),
            S = n("x4uR"),
            I = n("YTsa"),
            j = n("DWXw"),
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
            G = n("Dl20");
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
            eo = n("MRlq"),
            es = n("vNLk"),
            ei = n("PCxL"),
            el = n("aZgH"),
            ec = n("CzoK");

        function ed(e) {
            let t, n, o, i, l, h, p, m, g, f, v, b, x, C, w = (0, r.c)(56),
                {
                    conversationId: _,
                    kind: S
                } = e,
                I = (0, s.y)(er.a),
                j = (0, d.a)(),
                T = (0, u.Y)(),
                E = (0, u._)(),
                P = (0, s.z)(ei.h),
                A = (0, s.z)(y.h),
                M = (0, s.z)(y.g);
            w[0] !== A || w[1] !== _ || w[2] !== M || w[3] !== S || w[4] !== P ? (t = "chatgpt" === S && P?.kind === "chatgpt" && P.conversation.id === _ && (0, J.a)(P.conversation, A, M) ? P.conversation : null, w[0] = A, w[1] = _, w[2] = M, w[3] = S, w[4] = P, w[5] = t) : t = w[5];
            let k = t,
                [R, N] = (0, c.useState)(!1),
                {
                    mutate: O,
                    isPending: B
                } = (0, ee.a)(_);
            w[6] !== T.hash || w[7] !== T.pathname || w[8] !== T.search || w[9] !== E || w[10] !== I ? (n = () => {
                (0, ei.e)(I), E({
                    pathname: T.pathname,
                    search: T.search,
                    hash: T.hash
                }, {
                    replace: !0,
                    state: null
                })
            }, w[6] = T.hash, w[7] = T.pathname, w[8] = T.search, w[9] = E, w[10] = I, w[11] = n) : n = w[11];
            let F = n,
                z = (0, s.z)(ei.g);
            w[12] !== _ || w[13] !== z ? (o = z?.find(e => (0, el.a)(e.task) === `hosted:${_}`), w[12] = _, w[13] = z, w[14] = o) : o = w[14];
            let G = o;
            w[15] !== _ || w[16] !== I ? (i = () => {
                let e = I.get(ei.h);
                return null != e && (0, el.a)(e) === `hosted:${_}` ? (0, ei.d)(I, e) : void 0
            }, l = async () => {
                await (0, Z.V)({
                    scope: I,
                    conversationId: _
                })
            }, w[15] = _, w[16] = I, w[17] = i, w[18] = l) : (i = w[17], l = w[18]), w[19] !== _ || w[20] !== F || w[21] !== S || w[22] !== I ? (h = (e, t, n) => {
                n?.("restored");
                let r = I.get(en.f).info((0, a.jsx)($.a, {
                    ...eo.a.unarchiveSuccessPlain
                }), {
                    leading: (0, a.jsx)(et.a, {
                        "aria-hidden": !1,
                        asset: ec.a
                    }),
                    primaryAction: {
                        label: (0, a.jsx)($.a, {
                            ...eo.a.viewNow
                        }),
                        onClick: () => {
                            r.close(), F()
                        }
                    },
                    id: `unarchive-thread-${S}:${_}`
                })
            }, w[19] = _, w[20] = F, w[21] = S, w[22] = I, w[23] = h) : h = w[23], w[24] !== j || w[25] !== I ? (p = (e, t, n) => {
                n?.(null), I.get(en.f).danger(j.formatMessage(eo.a.unarchiveError), {
                    errorAnalytics: {
                        toastId: "previewFooter.onError.unarchiveError"
                    }
                })
            }, w[24] = j, w[25] = I, w[26] = p) : p = w[26], w[27] !== i || w[28] !== l || w[29] !== h || w[30] !== p ? (m = {
                onMutate: i,
                mutationFn: l,
                onSuccess: h,
                onError: p
            }, w[27] = i, w[28] = l, w[29] = h, w[30] = p, w[31] = m) : m = w[31];
            let {
                mutate: L,
                isPending: D,
                isSuccess: H
            } = (0, Q.a)(m);
            w[32] !== O || w[33] !== E || w[34] !== I ? (g = e => {
                let t = I.get(ei.c),
                    n = I.get(ea.c),
                    a = I.get(y.f);
                O(e, {
                    onSuccess: () => {
                        if (N(!1), t !== I.get(ei.c) || n !== I.get(ea.c) || a !== I.get(y.f)) return;
                        I.set(ei.h, null);
                        let e = t?.pathname === ei.a ? t : null;
                        E(e ?? "/", {
                            replace: !0,
                            state: e?.state ?? null
                        })
                    }
                })
            }, w[32] = O, w[33] = E, w[34] = I, w[35] = g) : g = w[35];
            let W = g;
            w[36] !== k ? (f = null == k ? void 0 : () => N(!0), w[36] = k, w[37] = f) : f = w[37];
            let q = H || G?.status === "restored",
                U = D || G?.status === "restoring";
            return w[38] !== L ? (v = () => L(), w[38] = L, w[39] = v) : v = w[39], w[40] !== F || w[41] !== B || w[42] !== f || w[43] !== q || w[44] !== U || w[45] !== v ? (b = (0, a.jsx)(es.a, {
                deleting: B,
                onDelete: f,
                restored: q,
                restoring: U,
                onUnarchive: v,
                onDone: F
            }), w[40] = F, w[41] = B, w[42] = f, w[43] = q, w[44] = U, w[45] = v, w[46] = b) : b = w[46], w[47] !== k || w[48] !== W || w[49] !== j || w[50] !== R || w[51] !== B ? (x = null != k && (0, a.jsx)(Y.a, {
                allowArtifactDeletion: !0,
                title: k.title?.trim() || j.formatMessage(X.a.newChat),
                open: R,
                isDeleting: B,
                onOpenChange: N,
                onConfirm: W
            }), w[47] = k, w[48] = W, w[49] = j, w[50] = R, w[51] = B, w[52] = x) : x = w[52], w[53] !== b || w[54] !== x ? (C = (0, a.jsxs)(a.Fragment, {
                children: [b, x]
            }), w[53] = b, w[54] = x, w[55] = C) : C = w[55], C
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
            eC = n("eShZ"),
            ew = n("qqut"),
            e_ = n("CsbC"),
            eS = n("bIvi"),
            eI = n("ZhoB"),
            ej = n("dQRk"),
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
        let tt = (0, s.v)(er.a, e => null);
        var tn = n("BJ43"),
            ta = n("aLqR"),
            tr = n("VlIB"),
            to = n("Ow2S"),
            ts = n("mpie");
        let ti = (0, s.v)(er.a, e => null);
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
            let t, n, o, i, l, c, u, h, p, m, g = (0, r.c)(48),
                {
                    conversationId: f,
                    projectId: v,
                    sharedProjectConversation: b,
                    isReady: x,
                    isRestricted: C,
                    isStreaming: w
                } = e,
                _ = void 0 === v ? null : v,
                I = (0, s.y)(er.a),
                j = (0, d.a)(),
                T = (0, s.z)(y.e),
                E = (0, s.z)(null == _ ? null : ty.a),
                P = (0, s.x)(ej.j, f),
                {
                    data: A
                } = (0, s.x)(tc.chatGptConversationQueryById$, null == _ ? null : P),
                M = (0, s.x)(e6.a, null == _ ? null : P),
                k = (0, s.x)(ej.B, M);
            g[0] !== M || g[1] !== A || g[2] !== k || g[3] !== _ || g[4] !== P ? (t = null == A && null != M && null != P ? {
                id: P,
                gizmo_id: _,
                is_temporary_chat: k
            } : void 0, g[0] = M, g[1] = A, g[2] = k, g[3] = _, g[4] = P, g[5] = t) : t = g[5];
            let R = t,
                {
                    data: N
                } = (0, s.x)(S.b, _),
                O = null == _ ? null : (0, ty.b)(E ?? null, b ?? A ?? R, N),
                B = (0, s.x)(tv.b, f);
            g[6] !== j ? (n = j.formatMessage(X.a.headerShare), g[6] = j, g[7] = n) : n = g[7];
            let F = n,
                z = (0, s.x)(null == b ? tv.a : null, f),
                G = null != b || null != z,
                L = null;
            if (C || O?.type === "unavailable") {
                let e;
                g[8] !== j ? (e = j.formatMessage(X.a.shareDisabledRestricted), g[8] = j, g[9] = e) : e = g[9], L = e
            } else if (w && !G) {
                let e;
                g[10] !== j ? (e = j.formatMessage(X.a.shareDisabledStreaming), g[10] = j, g[11] = e) : e = g[11], L = e
            } else if (!x || !G) {
                let e;
                g[12] !== j ? (e = j.formatMessage(X.a.shareDisabledNotReady), g[12] = j, g[13] = e) : e = g[13], L = e
            }
            let D = null != L || B;
            g[14] !== D ? (o = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: D
            }, g[14] = D, g[15] = o) : o = g[15];
            let H = (0, s.x)(tf.b, o),
                W = "loaded" === T.status && "personal" === T.structure && (null == O || "snapshot" === O.type),
                q = null != L || B;
            g[16] !== q ? (i = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: q
            }, g[16] = q, g[17] = i) : i = g[17];
            let U = (0, s.x)(W ? tf.b : null, i);
            g[18] !== f || g[19] !== R || g[20] !== _ || g[21] !== I || g[22] !== b ? (l = () => {
                let e = null == b ? I.get(tv.c, f) : {
                    serverConversationId: b.conversation_id,
                    title: b.title,
                    currentNodeId: b.current_node ?? void 0
                };
                null != e && (0, tb.shareChatGptProjectConversation)(I, e.serverConversationId, e.title ?? "", _, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", b ?? R)
            }, g[18] = f, g[19] = R, g[20] = _, g[21] = I, g[22] = b, g[23] = l) : l = g[23];
            let K = l,
                V = F;
            if (!U && "loaded" === T.status && (null == O || "snapshot" === O.type)) {
                let e;
                g[24] !== T.structure || g[25] !== j ? (e = j.formatMessage("workspace" === T.structure ? X.a.shareWorkspaceTooltip : X.a.sharePublicTooltip), g[24] = T.structure, g[25] = j, g[26] = e) : e = g[26], V = e
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
        var tC = n("TRQ3"),
            tw = n("SZCv"),
            t_ = n.n(tw),
            tS = n("iqEK"),
            tI = n("XAP6"),
            tj = n("bzoy"),
            tT = n("LYS1"),
            tE = n("aZoZ"),
            tP = n("Gv8v"),
            tA = n("EGpF"),
            tM = n("mTPq"),
            tk = n("Vcrm"),
            tR = n("DF0c");
        let tN = (0, s.d)(er.a, (e, t) => {
            let {
                get: n
            } = t, a = n(ej.ab, e);
            if (!(0, ej.Bb)(a)) return !0;
            let r = n(ej.N, e),
                o = n(ej.C, e);
            if (null == r || null == o) return !1;
            let s = r[o]?.message;
            if (null == s || tT.a.has(s.author.role)) return !1;
            let i = n(ej.y, e),
                l = (0, tM.c)({
                    mapping: r,
                    current_node: o
                }, n(ej.S, e)),
                c = n(ej.db, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(ej.j, e) && !(0, tj.e)(n(ej.p, e)) && null != c && !n(tI.e).has(c) && null != tO(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function tO(e, t) {
            let n = e(tA.a, t),
                a = e(ej.j, t);
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
            let t, n, o, s, i, l = (0, r.c)(11),
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
            return l[3] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)($.a, {
                id: "chatgptConversations.workOnlyConversion.action",
                defaultMessage: "Convert to Work",
                description: "Button that converts a disabled historical Chat conversation to Work in Codex Desktop"
            }), l[3] = o) : o = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (s = (0, a.jsx)(tp.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: o
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = s) : s = l[7], l[8] !== n || l[9] !== s ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(tH.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: s
                })
            }), l[8] = n, l[9] = s, l[10] = i) : i = l[10], i
        }
        var tq = n("oGhM"),
            tU = n("fr5e"),
            tK = n("ZIh4"),
            tV = n("nKJ6"),
            tQ = n("AoaR"),
            t$ = n("fDfx"),
            tY = n("Xslx"),
            tX = n("EEop"),
            tJ = n("bxvp"),
            tZ = n("VBQS"),
            t0 = n("hsIu");
        let t1 = (0, s.d)(er.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(tJ.c) || null == n(y.f) || null == n(y.k)) return null;
            let {
                data: a,
                isError: r
            } = n(t0.b);
            if (r || a?.project_id !== e) return null;
            let {
                data: o,
                isError: s
            } = n(tX.l, (0, tZ.a)());
            return s ? null : (0, tZ.b)(o)
        });
        var t2 = n("FmJi"),
            t3 = n("sIex"),
            t4 = n("TwSq"),
            t5 = n("Fjd0"),
            t6 = n("PWXi"),
            t7 = n("HgLj"),
            t8 = n("n6zj"),
            t9 = n("JlMc"),
            ne = n("f6KK"),
            nt = n("JPXZ"),
            nn = n("zWHk");

        function na(e) {
            let t, n, a, o, s, i, l, d = (0, r.c)(34),
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
            return d[10] !== b || d[11] !== h || d[12] !== p || d[13] !== v || d[14] !== t ? (o = () => {
                if (!p && t && y.current !== v) return (0, nn.b)(h.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && h.consumeLocationPromptPrefill(v) && b(!1)
                })
            }, d[10] = b, d[11] = h, d[12] = p, d[13] = v, d[14] = t, d[15] = o) : o = d[15], d[16] !== h || d[17] !== p || d[18] !== v || d[19] !== t ? (s = [h, p, v, t], d[16] = h, d[17] = p, d[18] = v, d[19] = t, d[20] = s) : s = d[20], (0, c.useLayoutEffect)(o, s), d[21] !== b || d[22] !== h || d[23] !== p || d[24] !== v || d[25] !== t || d[26] !== f ? (i = () => {
                if (!p || !t || y.current === v) return;
                y.current = v;
                let e = h.consumeLocationPromptPrefill(v);
                if (b(e), !e) return;
                let {
                    view: n
                } = h, a = t.replace(/\r\n/g, "\n"), r = "codex-app" === f ? (0, nt.f)({
                    schema: n.state.schema,
                    text: a,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, nt.e)({
                    schema: n.state.schema,
                    text: a
                }), o = n.state.tr.replaceWith(0, n.state.doc.content.size, r.content);
                o.setSelection(ne.h.atEnd(o.doc)), n.dispatch(o)
            }, d[21] = b, d[22] = h, d[23] = p, d[24] = v, d[25] = t, d[26] = f, d[27] = i) : i = d[27], d[28] !== h || d[29] !== p || d[30] !== v || d[31] !== t || d[32] !== f ? (l = [h, p, v, t, f], d[28] = h, d[29] = p, d[30] = v, d[31] = t, d[32] = f, d[33] = l) : l = d[33], (0, c.useLayoutEffect)(i, l), null
        }
        var nr = n("KidQ");
        let no = {
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
            let t, n, o, i, l, d = (0, r.c)(15),
                {
                    children: u,
                    draftKey: h,
                    enableInlineSystemHints: p
                } = e,
                m = (0, s.y)(er.a),
                g = (0, c.useContext)(t3.a),
                f = p ? "chatgpt" : void 0;
            return d[0] !== p || d[1] !== f ? (t = {
                enableInlineSystemHints: p,
                variant: f
            }, d[0] = p, d[1] = f, d[2] = t) : t = d[2], d[3] !== h || d[4] !== m ? (n = () => ({
                defaultText: m.get(to.t, h),
                defaultTextKind: "prompt"
            }), d[3] = h, d[4] = m, d[5] = n) : n = d[5], d[6] !== g ? (o = () => {
                let e = g?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == g ? null : {
                    element: e,
                    locationKey: g.locationKey
                }
            }, d[6] = g, d[7] = o) : o = d[7], d[8] !== u ? (i = e => null == e ? null : u(e), d[8] = u, d[9] = i) : i = d[9], d[10] !== t || d[11] !== n || d[12] !== o || d[13] !== i ? (l = (0, a.jsx)(nr.a, {
                controllerOptions: no,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: o,
                children: i
            }), d[10] = t, d[11] = n, d[12] = o, d[13] = i, d[14] = l) : l = d[14], l
        }
        var ni = n("ygKd"),
            nl = n("rcFj"),
            nc = n("vpdG"),
            nd = n("Pyg2"),
            nu = n("Z2JT"),
            nh = n("VPBa"),
            np = n("TUMj"),
            nm = n("a4V1"),
            ng = n("wnpN");

        function nf(e) {
            let t, n, o, i, l, d, u, h, p, m = (0, r.c)(25);
            m[0] !== e ? ({
                conversationId: t,
                isFullscreenComposer: n,
                ...o
            } = e, m[0] = e, m[1] = t, m[2] = n, m[3] = o) : (t = m[1], n = m[2], o = m[3]);
            let g = (0, s.y)(q.a),
                f = (0, c.useContext)(np.a),
                v = (0, s.w)(nm.a, t),
                y = (0, s.x)(ej.eb, t),
                b = (0, s.x)(ej.ab, t),
                x = (0, s.x)(to.j, t);
            m[4] !== b ? (i = (0, ej.Bb)(b), m[4] = b, m[5] = i) : i = m[5];
            let C = i,
                w = (0, s.z)(eL.l.activeTab$);
            if (m[6] !== w || m[7] !== n || m[8] !== C || m[9] !== f) {
                let e = f?.turn.items.flatMap(nb);
                l = n && w?.tabType.kind === nh.a && "generatedImages" in w.props && null != w.props.generatedImages && !C && null != f && "in_progress" !== f.turn.status && !f.turn.hasPendingAssistantReply && !f.showPendingLoadingMessage && !e?.some(ny) && (null != f.errorMessage || e?.some(nv)) ? f.turn.messageIds.at(-1) ?? f.turnKey : null, m[6] = w, m[7] = n, m[8] = C, m[9] = f, m[10] = l
            } else l = m[10];
            let _ = l,
                S = (0, c.useRef)(null);
            m[11] !== _ || m[12] !== g ? (d = () => {
                null != _ && _ !== S.current && (S.current = _, g.set(nu.a, "expanded"))
            }, u = [_, g], m[11] = _, m[12] = g, m[13] = d, m[14] = u) : (d = m[13], u = m[14]), (0, c.useEffect)(d, u);
            let I = (0, s.w)(ng.a, n ? t : null),
                j = n ? "floating" : "pane",
                T = null == f && !C,
                E = x || C ? "loading" : "idle";
            return m[15] !== E ? (h = {
                type: E,
                unread: !1
            }, m[15] = E, m[16] = h) : h = m[16], m[17] !== I || m[18] !== o || m[19] !== v || m[20] !== j || m[21] !== T || m[22] !== h || m[23] !== y ? (p = (0, a.jsx)(nd.a, {
                ...o,
                notifications: I,
                placement: j,
                responsePreview: v,
                composerOnly: T,
                title: y,
                statusState: h
            }), m[17] = I, m[18] = o, m[19] = v, m[20] = j, m[21] = T, m[22] = h, m[23] = y, m[24] = p) : p = m[24], p
        }

        function nv(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function ny(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function nb(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var nx = n("V8xe");

        function nC(e) {
            let t, n, o, i = (0, r.c)(14),
                l = (0, c.useContext)(t3.a),
                d = (0, s.z)(ni.h),
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
            return i[9] !== u || i[10] !== h || i[11] !== n || i[12] !== p ? (o = (0, a.jsx)(ns, {
                draftKey: n,
                enableInlineSystemHints: p,
                children: h
            }, u), i[9] = u, i[10] = h, i[11] = n, i[12] = p, i[13] = o) : o = i[13], o
        }

        function nw(e) {
            let t, n, o, i, l, h, p, m, g, f, v, y, b, x, C = (0, r.c)(69),
                {
                    composerRef: w,
                    initialController: _,
                    placement: S,
                    ...I
                } = e,
                j = (0, s.y)(q.a),
                T = (0, s.x)(tK.d, I.isTemporaryChat),
                {
                    conversationId: E,
                    routePresentation: P
                } = I,
                A = "floating" === P.placement,
                M = (0, d.a)(),
                {
                    state: k
                } = (0, u.Y)(),
                R = (0, s.x)(ti, E),
                N = (0, s.x)(ej.T, E),
                O = !(!I.disabled && !I.isSharedConversation && !I.isWorkConversation && !I.isTemporaryChat && !I.isImageEditComposer && (0, tG.a)(N)) ? null : N,
                B = (0, s.x)(null == I.requiredSystemHints ? t1 : null, O);
            C[0] !== B || C[1] !== I.requiredSystemHints ? (t = I.requiredSystemHints ?? (null == B ? void 0 : [B]), C[0] = B, C[1] = I.requiredSystemHints, C[2] = t) : t = C[2];
            let F = t;
            C[3] !== B || C[4] !== E || C[5] !== j ? (n = () => {
                if (null != B) {
                    let e, t;
                    return e = (0, tY.b)(j, E, [B]), t = (0, t$.i)(j, {
                        draftKey: E,
                        isTemporaryChat: !1
                    }), () => {
                        if (e(), j.get(tY.a, E).includes(B)) return;
                        let n = j.get(to.w, E).filter(e => e !== B && e !== `plugin:${tQ.d}`);
                        (0, to.W)(j, E, n, t)
                    }
                }
            }, o = [j, E, B], C[3] = B, C[4] = E, C[5] = j, C[6] = n, C[7] = o) : (n = C[6], o = C[7]), (0, c.useEffect)(n, o);
            let z = (0, s.x)(eA.c, E);
            C[8] !== z || C[9] !== I.isSharedConversation || C[10] !== I.isWorkConversation || C[11] !== N ? (i = !I.isSharedConversation && !I.isWorkConversation && !(0, tG.a)(N) && !z, C[8] = z, C[9] = I.isSharedConversation, C[10] = I.isWorkConversation, C[11] = N, C[12] = i) : i = C[12];
            let G = i,
                L = G && !I.disabled && !I.isSubmitDisabled && !I.isImageEditComposer,
                D = G ? R : void 0;
            C[13] !== E || C[14] !== I.isImageEditComposer ? (l = I.isImageEditComposer ? {
                conversationId: E,
                surface: "image-edit"
            } : E, C[13] = E, C[14] = I.isImageEditComposer, C[15] = l) : l = C[15];
            let H = l;
            C[16] !== E || C[17] !== H || C[18] !== _ ? (h = {
                composerController: _,
                conversationId: E,
                draftKey: H
            }, C[16] = E, C[17] = H, C[18] = _, C[19] = h) : h = C[19];
            let W = (0, nc.a)(h),
                U = (0, nl.a)(W, E, !I.isInlinePreview && !I.disabled, I.workspace && "tpp", D?.id ?? N),
                K = (0, c.useContext)(t3.a),
                V = (0, c.useRef)(!1);
            C[20] !== H || C[21] !== K || C[22] !== _ || C[23] !== I.isTemporaryChat || C[24] !== j ? (p = e => {
                null == e || null == _ || V.current || (V.current = !0, (0, to.X)(j, H, _.getPersistedText(), {
                    isTemporaryChat: I.isTemporaryChat
                }), K?.onAdopt())
            }, C[20] = H, C[21] = K, C[22] = _, C[23] = I.isTemporaryChat, C[24] = j, C[25] = p) : p = C[25];
            let Q = (0, eS.a)(p);
            C[26] !== Q || C[27] !== w ? (m = (0, t7.a)(w, Q), C[26] = Q, C[27] = w, C[28] = m) : m = C[28];
            let $ = m;
            C[29] !== B || C[30] !== O || C[31] !== W || C[32] !== E || C[33] !== L || C[34] !== H || C[35] !== U || C[36] !== M || C[37] !== A || C[38] !== $ || C[39] !== T || C[40] !== S || C[41] !== I || C[42] !== F || C[43] !== P.isHidden || C[44] !== j || C[45] !== D || C[46] !== k?.libraryFileCreation || C[47] !== N ? (g = e => (0, a.jsxs)(t5.a, {
                children: [A && I.trackReadState && !e?.isHidden ? (0, a.jsx)(t9.a, {
                    conversationId: E,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, S.aboveComposerContent, (0, a.jsx)(t2.a, {
                    children: (0, a.jsx)(t8.a, {
                        ref: $,
                        trackShownImpressions: I.trackShownImpressions && !P.isHidden && !e?.isHidden && !e?.isMinimized,
                        headerContent: S.headerContent,
                        legacyImageSuggestionsEnabled: !I.disabled && !I.isSharedConversation && !I.isImageEditComposer,
                        allowBackgroundSubmit: I.isInlinePreview,
                        ...U,
                        disableAutoFocus: I.disableAutoFocus,
                        conversationOrigin: null == I.workspace ? void 0 : "tpp",
                        mcpAppContext: I.workspace?.mcpAppContext,
                        onServerThreadIdChange: I.workspace?.onServerThreadIdChange,
                        followupPortalTarget: S.followupPortalTarget,
                        takeoverDisclaimerRef: S.takeoverDisclaimerRef,
                        showConversationFollowups: I.showConversationFollowups,
                        autoPrepare: !I.isSubmitDisabled && !I.isSharedConversation,
                        browserConversationId: (0, tV.getThreadBrowserConversationId)(j) ?? E,
                        composerController: W,
                        conversationId: E,
                        requiredSystemHints: F,
                        hideSystemHints: null != I.requiredSystemHints,
                        getSubmissionGuard: null != B ? () => () => j.get(ej.T, E) === N && j.get(t1, O) === B : void 0,
                        draftKey: H,
                        onPromptChange: T,
                        selectedCustomGpt: D,
                        targetGizmoId: D?.id,
                        onCustomGptChange: L ? e => {
                            j.set(ti, E, e)
                        } : void 0,
                        onCustomAgentSelected: L ? () => {
                            j.set(ti, E, null)
                        } : void 0,
                        disableDraftPrepare: I.isSubmitDisabled || I.isSharedConversation,
                        disableSubmit: I.disabled || I.isSubmitDisabled,
                        voiceInputDisabled: I.disabled,
                        aboveComposerHeaderContent: S.voiceDisclaimer,
                        getExtraDeveloperInstructions: !I.isInlinePreview && k?.libraryFileCreation && !I.isTemporaryChat ? n_ : void 0,
                        isTemporaryChat: I.isTemporaryChat,
                        placeholder: I.disabled && !1 !== I.readOnlyPlaceholder ? I.readOnlyPlaceholder ?? M.formatMessage(nx.a.readOnlyConversationPlaceholder) : void 0,
                        readOnly: I.disabled,
                        hideModelPicker: I.hideModelPicker,
                        ...(0, to.K)(I),
                        showVoiceStage: S.showVoiceStage,
                        onSubmitAccepted: t => {
                            e?.onSubmitStart(), S.onSubmit(), I.onSubmitAccepted?.(t)
                        },
                        onSubmitError: S.onSubmitError
                    })
                })]
            }), C[29] = B, C[30] = O, C[31] = W, C[32] = E, C[33] = L, C[34] = H, C[35] = U, C[36] = M, C[37] = A, C[38] = $, C[39] = T, C[40] = S, C[41] = I, C[42] = F, C[43] = P.isHidden, C[44] = j, C[45] = D, C[46] = k?.libraryFileCreation, C[47] = N, C[48] = g) : g = C[48];
            let Y = g;
            C[49] !== j ? (f = () => {
                (0, t4.K)(j, "conversation")
            }, v = () => {
                (0, t4.K)(j, "conversation")
            }, C[49] = j, C[50] = f, C[51] = v) : (f = C[50], v = C[51]);
            let X = !I.isInlinePreview && !I.disabled && !I.isSubmitDisabled;
            C[52] !== W || C[53] !== X ? (y = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(na, {
                    composerController: W,
                    enabled: X
                })
            }), C[52] = W, C[53] = X, C[54] = y) : y = C[54];
            let J = I.disabled || I.awaitingGptContinuation,
                Z = !I.isInlinePreview && null == I.workspace;
            return C[55] !== E || C[56] !== A || C[57] !== S.renderTranscript || C[58] !== Y || C[59] !== P.isHidden || C[60] !== J || C[61] !== Z ? (b = (0, a.jsx)(nf, {
                conversationId: E,
                isFullscreenComposer: A,
                isHidden: P.isHidden,
                forceExpanded: J,
                showConversationTitleMenu: Z,
                renderTranscript: S.renderTranscript,
                children: Y
            }), C[55] = E, C[56] = A, C[57] = S.renderTranscript, C[58] = Y, C[59] = P.isHidden, C[60] = J, C[61] = Z, C[62] = b) : b = C[62], C[63] !== E || C[64] !== f || C[65] !== v || C[66] !== y || C[67] !== b ? (x = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": E,
                onMouseDownCapture: f,
                onFocusCapture: v,
                children: [y, b]
            }), C[63] = E, C[64] = f, C[65] = v, C[66] = y, C[67] = b, C[68] = x) : x = C[68], x
        }

        function n_() {
            return [t6.a]
        }
        var nS = n("LEgg");
        let nI = (0, tg.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function nj(e) {
            let t, n, o = (0, r.c)(6),
                {
                    conversationId: s,
                    scheduledAutomationId: i
                } = e,
                l = (0, eu.f)("3901104270");
            return o[0] !== s || o[1] !== l || o[2] !== i ? (t = l && null != i ? (0, a.jsx)(nI, {
                conversationId: s,
                automationId: i
            }) : null, o[0] = s, o[1] = l, o[2] = i, o[3] = t) : t = o[3], o[4] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), o[4] = t, o[5] = n) : n = o[5], n
        }
        var nT = n("Bs4i"),
            nE = n("Qgfj"),
            nP = n("EFj1"),
            nA = n("rmk3"),
            nM = n("sqqv"),
            nk = n("fQbA"),
            nR = n("dDDU"),
            nN = n("soaw"),
            nO = n("ZrYB"),
            nB = n("X6Vn"),
            nF = n("Kwur"),
            nz = n("eKlv"),
            nG = n("JCtZ"),
            nL = n("g2p6"),
            nD = n("oaTv"),
            nH = n("PME0"),
            nW = n("lgcP"),
            nq = n("AcSY"),
            nU = n("w7E5"),
            nK = n("xEXG"),
            nV = n("J6LI"),
            nQ = n("lUUH"),
            n$ = n("ftAl");

        function nY(e) {
            let t, n, o, i = (0, r.c)(17),
                {
                    children: l,
                    conversationId: c,
                    getBaseItems: d,
                    menuTriggerRef: u,
                    navigate: h,
                    onBeforeOpen: p,
                    renderDropdown: m
                } = e,
                g = (0, s.y)(er.a),
                {
                    data: f
                } = (0, nq.e)(),
                v = (0, nK.b)();
            return i[0] !== f || i[1] !== c || i[2] !== d || i[3] !== u || i[4] !== h || i[5] !== v || i[6] !== g ? (t = () => {
                let e = g.get(n$.a, c, {
                        enabled: !1
                    }),
                    t = (0, tG.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : g.query.getData(S.b, t);
                return d(function(e) {
                    let {
                        scope: t,
                        conversationId: n,
                        conversation: a,
                        project: r,
                        account: o,
                        projectCrudStatus: s,
                        navigate: i,
                        onCreateProjectDialogCloseAutoFocus: l
                    } = e, c = (0, tG.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(nU.a), u = t.get(Z.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, m = a?.conversation_origin === "tpp" || a?.conversation_origin === "flora", g = "allowed" === s || m && h?.pages.some(e => null != e.cursor) === !0, f = t.get(Z.h, n);
                    return null == o || null == a || t.get(Z.g, n) || (0, nV.c)(a, r).sourceUnavailable || null == (0, nV.b)(t, a, f, !1) || null != c && null == r || null == h || 0 === p && !g ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: n0.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, nQ.b)({
                        scope: t,
                        conversation: a,
                        project: r,
                        showDestinationFetchState: !1,
                        showMoveToProject: null == c || p > 1 || g,
                        projectCrudStatus: s,
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
                    null == e.data && e.isFetching && await g.query.getOrFetch(tc.chatGptConversationQueryById$, c).catch(nZ), null == g.query.getData(tc.chatGptConversationQueryById$, c) && await g.query.getOrFetch(Z.j, [c]).catch(nJ)
                })(), p?.()]);
                let e = g.get(n$.a, c, {
                    enabled: !1
                });
                (0, tG.a)(e?.gizmo_id) && e?.gizmo_id != null && await g.query.getOrFetch(S.b, e.gizmo_id).catch(nX)
            }, i[8] = c, i[9] = p, i[10] = g, i[11] = n) : n = i[11], i[12] !== l || i[13] !== m || i[14] !== t || i[15] !== n ? (o = (0, a.jsx)(nA.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                renderItem: nk.b,
                renderDropdown: m,
                trigger: "click",
                children: l
            }), i[12] = l, i[13] = m, i[14] = t, i[15] = n, i[16] = o) : o = i[16], o
        }

        function nX() {}

        function nJ() {}

        function nZ() {}
        let n0 = (0, nE.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}",
                description: "Name of a ChatGPT project offered as a destination for moving a conversation or Work task"
            }
        });

        function n1(e) {
            let t, o, i, l, h, p, f, v, b, x, C, w, _, S, I, j, T, E = (0, r.c)(68),
                {
                    onTitleClick: P,
                    showMenu: A,
                    triggerButton: M,
                    renderDropdown: k,
                    conversationOrigin: R,
                    conversationId: N,
                    title: O,
                    isHandoffPending: B,
                    isArchived: F,
                    isChatConversation: z,
                    onHandoff: G,
                    onOpenMessage: L,
                    projectId: D,
                    projectName: H,
                    serverConversationId: W
                } = e,
                U = (0, s.y)(q.a),
                K = (0, s.y)(er.a),
                V = (0, nN.a)(),
                Q = (0, eu.i)();
            E[0] !== Q ? (t = Q.checkGate("224248639"), E[0] = Q, E[1] = t) : t = E[1];
            let $ = t;
            E[2] !== Q ? (o = Q.getLayer("3017902351").get("web_file_library_enabled", !1), E[2] = Q, E[3] = o) : o = E[3];
            let ee = o,
                et = $ || ee;
            E[4] !== et ? (i = {
                enabled: et
            }, E[4] = et, E[5] = i) : i = E[5];
            let {
                data: ea
            } = (0, s.z)(nL.p, i), es = et && ea?.fileLibraryEnabledForRegistrationCountry !== !1, ei = (0, d.a)(), el = (0, u._)(), [ec, ed] = (0, c.useState)(null), eh = (0, c.useRef)(null), ep = (0, c.useRef)(null);
            E[6] === Symbol.for("react.memo_cache_sentinel") ? (l = [], E[6] = l) : l = E[6];
            let em = (0, c.useRef)(l);
            E[7] === Symbol.for("react.memo_cache_sentinel") ? (h = {
                name: "chatgpt"
            }, E[7] = h) : h = E[7];
            let {
                isCapable: eg
            } = (0, s.x)(m.a, h), ef = (0, s.x)(Z.g, W);
            E[8] === Symbol.for("react.memo_cache_sentinel") ? (p = () => ed("shortcut"), E[8] = p) : p = E[8];
            let ev = z && !ef;
            E[9] !== U || E[10] !== W ? (f = () => (0, J.a)(U.query.getData(tc.chatGptConversationQueryById$, W), U.get(y.h), U.get(y.g)), E[9] = U, E[10] = W, E[11] = f) : f = E[11], E[12] !== ev || E[13] !== f ? (v = {
                enabled: ev,
                isActive: f
            }, E[12] = ev, E[13] = f, E[14] = v) : v = E[14], (0, nP.a)("deleteChat", p, v), E[15] !== K || E[16] !== ef || E[17] !== el || E[18] !== U || E[19] !== W ? (b = e => {
                !ef && (0, J.a)(U.query.getData(tc.chatGptConversationQueryById$, W), U.get(y.h), U.get(y.g)) && (ed(null), (0, nW.a)(K, W, e), el("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, E[15] = K, E[16] = ef, E[17] = el, E[18] = U, E[19] = W, E[20] = b) : b = E[20];
            let ey = b;
            E[21] !== U || E[22] !== W ? (x = async () => {
                let e = [];
                em.current = e, e.push(...await async function(e, t) {
                    let a = await nF.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        }
                    }).catch(() => null);
                    return a?.can_share && 0 !== a.av_sessions.length ? [{
                        id: "share-live-session",
                        icon: tm.ej,
                        message: (0, nE.e)({
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
                                (0, nB.f)(e, r, {
                                    conversationId: t,
                                    sessions: a.av_sessions
                                })
                            })
                        }
                    }] : []
                }(U, W))
            }, E[21] = U, E[22] = W, E[23] = x) : x = E[23];
            let eb = x;
            E[24] !== N || E[25] !== R || E[26] !== es || E[27] !== ei || E[28] !== ef || E[29] !== F || E[30] !== B || E[31] !== V || E[32] !== el || E[33] !== G || E[34] !== L || E[35] !== D || E[36] !== H || E[37] !== U || E[38] !== W || E[39] !== Q || E[40] !== O ? (C = e => {
                let t = U.get(y.f),
                    a = U.get(y.k),
                    r = U.query.getData(tc.chatGptConversationQueryById$, W),
                    o = U.get(y.h),
                    s = U.get(y.g),
                    i = (0, J.a)(r, o, s),
                    l = (0, nz.b)(U, W),
                    c = !ef && (0, J.a)(l, o, s),
                    d = U.get(g.b).pathname,
                    u = () => V() && d === U.get(g.b).pathname && t === U.get(y.f) && a === U.get(y.k),
                    h = (0, nD.a)(U, N, R, () => (0, nH.a)(el)),
                    p = [];
                return Q.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && p.push({
                    id: "chatgpt-audio-summary",
                    message: (0, nE.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary",
                        description: "Opens the dialog for generating and listening to an audio summary of the current chat"
                    }),
                    icon: tm.ug,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
                        })().then(e => {
                            u() && e(U, W)
                        }).catch(() => {
                            u() && (eh.current?.focus({
                                preventScroll: !0
                            }), U.get(en.f).danger(ei.formatMessage({
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
                }), es && p.unshift({
                    id: "chatgpt-conversation-files",
                    message: (0, nE.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat",
                        description: "Opens the side panel listing files referenced in the active saved ChatGPT conversation, even when the list is empty"
                    }),
                    icon: tm.sb,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(368308).then(n.bind(n, "LFUX"))).openConversationFiles
                        })().then(e => {
                            u() && e(U, {
                                conversationId: N,
                                serverConversationId: W,
                                onOpenMessage: L
                            })
                        }).catch(() => {
                            u() && U.get(en.f).danger(ei.formatMessage({
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
                }), p.push(...(0, nR.a)(U)), (0, nG.a)(U, {
                    organizationItems: (0, nk.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: em.current,
                    viewItems: p,
                    feedbackItems: [],
                    preferenceItems: null == h ? [] : [h],
                    surface: "header",
                    isTitleMenu: !0,
                    conversationId: W,
                    stateConversationId: N,
                    conversationOrigin: R,
                    title: O,
                    isHandoffPending: B,
                    canHandoff: null != G,
                    onHandoff: G,
                    projectId: D,
                    projectName: H,
                    onRename: (0, J.b)(r, o, s, ef) ? () => void(0, nz.renameActiveChatGptConversation)(U, N) : void 0,
                    isPinned: U.get(Z.h, W) ?? l?.is_starred === !0,
                    onTogglePin: c ? () => {
                        let e = (0, nz.b)(U, W);
                        !(null == e || U.get(Z.g, W)) && (0, J.a)(e, U.get(y.h), U.get(y.g)) && (0, Z.U)({
                            scope: U,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(n2)
                    } : void 0,
                    onArchive: !i || ef || F ? void 0 : () => (0, nO.a)(U, W),
                    onUnarchive: i && !ef && F ? () => {
                        (0, Z.V)({
                            scope: U,
                            conversationId: W
                        }).then(() => {
                            U.get(en.f).success(ei.formatMessage(eo.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            U.get(en.f).danger(ei.formatMessage(X.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !i || ef ? void 0 : () => ed("menu")
                })
            }, E[24] = N, E[25] = R, E[26] = es, E[27] = ei, E[28] = ef, E[29] = F, E[30] = B, E[31] = V, E[32] = el, E[33] = G, E[34] = L, E[35] = D, E[36] = H, E[37] = U, E[38] = W, E[39] = Q, E[40] = O, E[41] = C) : C = E[41];
            let ex = C;
            E[42] !== P || E[43] !== O || E[44] !== M ? (w = null == M ? (0, a.jsx)(nM.a, {
                ref: eh,
                onActivate: P,
                title: O
            }) : (0, a.jsx)(nT.b, {
                ref: eh,
                children: M
            }), E[42] = P, E[43] = O, E[44] = M, E[45] = w) : w = E[45];
            let eC = w;
            E[46] !== ex || E[47] !== eC || E[48] !== el || E[49] !== eg || E[50] !== eb || E[51] !== k || E[52] !== W || E[53] !== A ? (_ = A && (eg ? (0, a.jsx)(nY, {
                conversationId: W,
                getBaseItems: ex,
                menuTriggerRef: eh,
                navigate: el,
                onBeforeOpen: eb,
                renderDropdown: k,
                children: eC
            }) : (0, a.jsx)(nA.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => ex(),
                onBeforeOpen: eb,
                renderItem: nk.b,
                renderDropdown: k,
                trigger: "click",
                children: eC
            })), E[46] = ex, E[47] = eC, E[48] = el, E[49] = eg, E[50] = eb, E[51] = k, E[52] = W, E[53] = A, E[54] = _) : _ = E[54];
            let ew = "shortcut" === ec,
                e_ = null != ec;
            return E[55] !== ec ? (S = () => {
                ep.current = "menu" === ec ? eh.current : null, ed(null)
            }, E[55] = ec, E[56] = S) : S = E[56], E[57] === Symbol.for("react.memo_cache_sentinel") ? (I = e => {
                let t = ep.current;
                if (ep.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, E[57] = I) : I = E[57], E[58] !== ey || E[59] !== ef || E[60] !== ew || E[61] !== e_ || E[62] !== S || E[63] !== O ? (j = (0, a.jsx)(Y.a, {
                allowArtifactDeletion: !0,
                autoFocusConfirm: ew,
                open: e_,
                onOpenChange: S,
                onCloseAutoFocus: I,
                isDeleting: ef,
                onConfirm: ey,
                title: O
            }), E[58] = ey, E[59] = ef, E[60] = ew, E[61] = e_, E[62] = S, E[63] = O, E[64] = j) : j = E[64], E[65] !== _ || E[66] !== j ? (T = (0, a.jsxs)(a.Fragment, {
                children: [_, j]
            }), E[65] = _, E[66] = j, E[67] = T) : T = E[67], T
        }

        function n2() {}

        function n3(e) {
            let t, n, o, i = (0, r.c)(12),
                {
                    title: l,
                    includePlugins: c,
                    lockdownConversationId: d,
                    triggerButton: h,
                    renderDropdown: p
                } = e,
                m = (0, s.y)(q.a),
                g = (0, u._)();
            return i[0] !== c || i[1] !== d || i[2] !== g || i[3] !== m ? (t = () => {
                let e = null == d ? null : (0, nD.a)(m, d, null, () => (0, nH.a)(g)),
                    t = null == e ? [] : [e];
                return c ? (0, nk.a)(t) : t
            }, i[0] = c, i[1] = d, i[2] = g, i[3] = m, i[4] = t) : t = i[4], i[5] !== l || i[6] !== h ? (n = h ?? (0, a.jsx)(nM.a, {
                title: l
            }), i[5] = l, i[6] = h, i[7] = n) : n = i[7], i[8] !== p || i[9] !== t || i[10] !== n ? (o = (0, a.jsx)(nA.a, {
                preserveBrowserContextMenu: !0,
                getItems: t,
                renderItem: nk.b,
                renderDropdown: p,
                trigger: "click",
                children: n
            }), i[8] = p, i[9] = t, i[10] = n, i[11] = o) : o = i[11], o
        }
        var n4 = n("dLcZ");

        function n5(e) {
            let t, n = (0, r.c)(2),
                {
                    progress: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsx)(f.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "end",
                allowShrink: !0,
                order: 0,
                children: (0, a.jsx)("div", {
                    className: "max-w-[min(50cqw,var(--thread-content-max-width))] min-w-0",
                    children: o
                })
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var n6 = n("NVRI"),
            n7 = n("WLgA");

        function n8(e) {
            let t, n, o = (0, r.c)(9),
                {
                    icon: s,
                    name: i,
                    projectId: l,
                    linkToProject: c
                } = e;
            o[0] !== s || o[1] !== c || o[2] !== i || o[3] !== l ? (t = c && null != i ? (0, a.jsx)(tp.b, {
                "aria-label": i,
                color: "ghostActive",
                size: "toolbar",
                to: (0, n7.c)(l),
                uniform: !0,
                children: s
            }) : null, o[0] = s, o[1] = c, o[2] = i, o[3] = l, o[4] = t) : t = o[4];
            let d = t,
                u = d ?? s,
                h = null != d;
            return o[5] !== i || o[6] !== u || o[7] !== h ? (n = (0, a.jsx)(n6.b, {
                project: {
                    icon: u,
                    iconInteractive: h,
                    name: i
                }
            }), o[5] = i, o[6] = u, o[7] = h, o[8] = n) : n = o[8], n
        }
        var n9 = n("ftSl"),
            ae = n("u9Jt"),
            at = n("Xoyl");

        function an(e) {
            let t, n = (0, r.c)(7),
                {
                    hasTitleMenu: o,
                    onClick: s,
                    project: i,
                    title: l
                } = e;
            if (null == l) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(at.a, {}), n[0] = e) : e = n[0], e
            }
            if (o) {
                let e;
                return n[1] !== s || n[2] !== i || n[3] !== l ? (e = (0, a.jsx)(ae.a, {
                    triggerButton: (0, a.jsx)(nM.a, {
                        onActivate: s,
                        project: i,
                        title: l
                    })
                }), n[1] = s, n[2] = i, n[3] = l, n[4] = e) : e = n[4], e
            }
            return n[5] !== l ? (t = (0, a.jsx)(n9.a, {
                className: "max-w-full",
                variant: "flush-start",
                title: l
            }), n[5] = l, n[6] = t) : t = n[6], t
        }
        var aa = n("B5Qz"),
            ar = n("E7pP"),
            ao = n("oU3c"),
            as = n("B0Wx");
        let ai = (0, s.d)(er.a, (e, t) => {
            let {
                get: n
            } = t, a = n(as.b, e);
            if (null != a) return a;
            let r = n(ej.j, e);
            if (null == r) return null;
            let o = n(Z.j, [r], {
                    enabled: !1
                }).data?.[0],
                s = (0, ao.a)(o?.title, o?.mapping);
            if (null != s) return s;
            let i = n(ar.a),
                l = null == i ? null : n(aa.e, {
                    hostId: i,
                    threadId: r
                });
            return l?.sourceKind === "chatgpt" ? (0, ao.c)(l.displayTitle) : null
        });
        var al = n("X0li");
        let ac = (0, tg.a)(al.d),
            ad = (0, tg.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            au = (0, tg.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var ah = n("lX86"),
            ap = n("sQ4r"),
            am = n("on57"),
            ag = n("IPUh"),
            af = n("v7qY"),
            av = n("wD9O"),
            ay = n("jov5"),
            ab = n("Ro2M"),
            ax = n("bN4H"),
            aC = n("TS05");

        function aw(e) {
            let t, n, o, i, l = (0, r.c)(12),
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
            } = (0, s.x)(m.a, t);
            if (l[1] !== v || l[2] !== f?.sidebarArea || l[3] !== g) {
                let e = new URLSearchParams(g);
                n = e.get("automationId"), o = f?.sidebarArea === "scheduled" || !v || !n || "finalAgentTurnStart" !== e.get("messageId"), l[1] = v, l[2] = f?.sidebarArea, l[3] = g, l[4] = n, l[5] = o
            } else n = l[4], o = l[5];
            return o ? null : (l[6] !== n || l[7] !== c || l[8] !== d || l[9] !== p || l[10] !== h ? (i = (0, a.jsx)(a_, {
                automationId: n,
                conversationId: c,
                entries: d,
                turnListApi: h
            }, p), l[6] = n, l[7] = c, l[8] = d, l[9] = p, l[10] = h, l[11] = i) : i = l[11], i)
        }

        function a_(e) {
            let t, n, a, o, i = (0, r.c)(25),
                {
                    automationId: l,
                    conversationId: d,
                    entries: h,
                    turnListApi: p
                } = e,
                m = (0, s.y)(q.a),
                g = (0, u.Y)(),
                f = (0, s.z)(y.f),
                v = (0, s.x)(ej.j, d),
                {
                    data: b
                } = (0, s.x)(ab.e, l),
                x = (0, s.z)(ay.a),
                C = (0, c.useRef)(null),
                w = (0, c.useRef)(null);
            i[0] !== h ? (t = h.findLast(aj), i[0] = h, i[1] = t) : t = i[1];
            let _ = t;
            i[2] !== f || i[3] !== l || i[4] !== x || i[5] !== _ || i[6] !== b || i[7] !== g || i[8] !== m || i[9] !== p ? (n = () => {
                null == b || null == f || (x || C.current === f || (C.current = f, (0, ax.openAutomationSidePanelTab)({
                    scope: m,
                    automationId: l,
                    title: b.automation.title
                })), null != p && null != _ && w.current !== f && (w.current = f, p.scrollToKey(_.turnKey, aS, {
                    align: "top"
                }).then(() => {
                    m.set(aC.a, {
                        locationKey: g.key,
                        accountId: f
                    }, !0)
                })))
            }, i[2] = f, i[3] = l, i[4] = x, i[5] = _, i[6] = b, i[7] = g, i[8] = m, i[9] = p, i[10] = n) : n = i[10];
            let S = (0, c.useEffectEvent)(n);
            i[11] !== f || i[12] !== d || i[13] !== b?.automation.conversation_id || i[14] !== S || i[15] !== v ? (a = () => {
                null != f && b?.automation.conversation_id === (v ?? d) && S()
            }, i[11] = f, i[12] = d, i[13] = b?.automation.conversation_id, i[14] = S, i[15] = v, i[16] = a) : a = i[16];
            let I = _?.turnKey,
                j = b?.automation.conversation_id;
            return i[17] !== f || i[18] !== x || i[19] !== d || i[20] !== v || i[21] !== I || i[22] !== j || i[23] !== p ? (o = [f, d, I, j, v, x, p], i[17] = f, i[18] = x, i[19] = d, i[20] = v, i[21] = I, i[22] = j, i[23] = p, i[24] = o) : o = i[24], (0, c.useEffect)(a, o), null
        }

        function aS(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: aI
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function aI(e) {
            return e instanceof HTMLElement && e.getClientRects().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }

        function aj(e) {
            let {
                turn: t
            } = e;
            return t.items.some(aT)
        }

        function aT(e) {
            return "user-message" !== e.type
        }
        var aE = n("TDcV"),
            aP = n("Xvoy"),
            aA = n("WAdu"),
            aM = n("VnEZ");
        let ak = {
            $type: "protobuf_analytics_events.v1.ChatgptConversationPrintLifecycle"
        };
        var aR = n("jDEJ");
        let aN = (0, s.u)(er.a, null);

        function aO(e, t) {
            if (!e.get(eJ.c).isChatgptBrowserReplacement || t.repeat || ((0, aR.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(aN)) return;
            let n = aF("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(aN, n), az(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function aB(e, t, n, a) {
            let r = e.get(aN);
            if (!e.get(eJ.c).isChatgptBrowserReplacement || null == r) return a();
            let o = n => {
                az(e, r, n, t)
            };
            o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(aN)?.id !== r.id || e.get(aN)?.printing || e.set(aN, null), a
            }
        }

        function aF(e) {
            let t = performance.now();
            return {
                id: crypto.randomUUID(),
                entryPoint: e,
                startedAt: t,
                printing: !1
            }
        }

        function az(e, t, n, a) {
            (0, eJ.a)(e, ak, {
                attemptId: t.id,
                stage: n,
                entryPoint: t.entryPoint,
                elapsedMs: Math.max(0, performance.now() - t.startedAt),
                preparation: a
            })
        }
        var aG = n("CpsU"),
            aL = n.n(aG),
            aD = n("rKAs"),
            aH = n("SqqO"),
            aW = n("zHp1"),
            aq = n("taWv");

        function aU() {
            return Object.fromEntries(Array.from(document.images).flatMap(e => {
                if (!e.complete || 0 === e.naturalWidth) return [];
                let t = e.currentSrc || e.src;
                return [e.getAttribute("src"), e.src, t].flatMap(e => e ? [
                    [e, t]
                ] : [])
            }))
        }
        var aK = n("gsAl"),
            aV = n("AO3k"),
            aQ = n("aS84"),
            a$ = n("Qtjq"),
            aY = "printDocument-v_w5Ax";
        let aX = "https://chatgpt.com/download/?utm_source=chatgpt_web&utm_medium=print&utm_campaign=app_install";

        function aJ(e) {
            let t, n, o, s, i, l, c, u, h, p, m, g, f = (0, r.c)(22),
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
                return f[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, am.b)(aY, "hidden w-full space-y-1.5 bg-surface text-default print:block"), f[0] = e) : e = f[0], f[1] !== v ? (t = (0, a.jsx)("div", {
                    className: e,
                    "data-conversation-print": "",
                    "data-theme": "light",
                    children: v
                }), f[1] = v, f[2] = t) : t = f[2], t
            }
            return f[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, am.b)(aY, "formattedPrintDocument-tP74Wl", "group/conversation-print hidden w-full bg-surface text-default print:block"), f[3] = t) : t = f[3], f[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(aQ.a, {
                className: "h-6 w-auto shrink-0"
            }), f[4] = n) : n = f[4], f[5] !== y ? (o = (0, a.jsxs)("header", {
                className: "mb-6 flex items-center justify-between gap-6",
                children: [n, (0, a.jsx)("p", {
                    className: "min-w-0 text-end text-sm wrap-anywhere text-secondary",
                    children: y
                })]
            }), f[5] = y, f[6] = o) : o = f[6], f[7] !== v ? (s = (0, a.jsx)("div", {
                className: "transcript-XHYu34",
                children: v
            }), f[7] = v, f[8] = s) : s = f[8], f[9] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, am.b)("footer-QEzLbn", "flex items-center gap-3 rounded-2xl border border-default bg-surface-secondary p-2 text-default"), f[9] = i) : i = f[9], f[10] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)("div", {
                className: "flex size-10 shrink-0 items-center justify-center rounded-xl border border-default bg-surface",
                children: (0, a.jsx)(a$.a, {
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
                    href: `${aX}&utm_content=pdf_link`,
                    children: (0, a.jsx)(aV.a, {
                        value: `${aX}&utm_content=qr`,
                        size: "inline",
                        ariaLabel: h,
                        fallback: p
                    })
                })]
            }), f[16] = h, f[17] = m) : m = f[17], f[18] !== m || f[19] !== o || f[20] !== s ? (g = (0, a.jsxs)("div", {
                className: t,
                "data-conversation-print": "",
                "data-print-formatting": "",
                "data-theme": "light",
                children: [o, s, m]
            }), f[18] = m, f[19] = o, f[20] = s, f[21] = g) : g = f[21], g
        }

        function aZ(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var a0 = n("zn0A"),
            a1 = n("jfiJ"),
            a2 = n("FGJH"),
            a3 = n("nmN6");
        let a4 = new WeakMap;

        function a5(e) {
            let t, n, o = (0, r.c)(6),
                i = (0, s.z)(aE.a);
            return o[0] !== i || o[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([i, e.entries[0]?.conversationId]), o[0] = i, o[1] = e.entries[0]?.conversationId, o[2] = t) : t = o[2], o[3] !== e || o[4] !== t ? (n = (0, a.jsx)(a6, {
                ...e
            }, t), o[3] = e, o[4] = t, o[5] = n) : n = o[5], n
        }

        function a6(e) {
            let t, n, o, i, l, d, u = (0, r.c)(16),
                h = (0, s.y)(q.a),
                p = (0, s.z)(aP.a),
                [m, g] = (0, c.useState)(!1),
                f = (0, c.useRef)(null);
            u[0] !== h ? (t = (e, t) => {
                if (aO(h, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void f.current?.onKeyDown(e, t);
                let n = a4.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, af.flushSync)(() => g(!0));
                let a = n ?? f.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => a4.get(e)).finally(() => {
                    t.aborted || g(!1)
                })
            }, u[0] = h, u[1] = t) : t = u[1];
            let v = (0, c.useEffectEvent)(t);
            u[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                (0, af.flushSync)(() => g(!0)), f.current?.onBeforePrint()
            }, u[2] = n) : n = u[2];
            let y = (0, c.useEffectEvent)(n);
            u[3] !== h ? (o = () => {
                h.set(a0.a, null), g(!1)
            }, u[3] = h, u[4] = o) : o = u[4];
            let b = (0, c.useEffectEvent)(o);
            return u[5] !== b || u[6] !== y || u[7] !== v || u[8] !== h ? (i = () => {
                let e, t, n = new AbortController,
                    a = (e = () => {
                        if (!h.get(eJ.c).isChatgptBrowserReplacement) return;
                        let e = h.get(aN);
                        if (e?.printing) return;
                        let t = {
                            ...e ?? aF("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_UNOBSERVED"),
                            printing: !0
                        };
                        h.set(aN, t), az(h, t, "CHATGPT_CONVERSATION_PRINT_STAGE_BEFORE_PRINT")
                    }, t = () => {
                        let e = h.get(aN);
                        h.get(eJ.c).isChatgptBrowserReplacement && e?.printing && (az(h, e, "CHATGPT_CONVERSATION_PRINT_STAGE_AFTER_PRINT"), h.set(aN, null))
                    }, window.addEventListener("beforeprint", e, !0), window.addEventListener("afterprint", t), () => {
                        window.removeEventListener("beforeprint", e, !0), window.removeEventListener("afterprint", t), h.set(aN, null)
                    }),
                    r = e => v(e, n.signal);
                return window.addEventListener("keydown", r, !0), window.addEventListener("beforeprint", y, !0), window.addEventListener("afterprint", b), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), window.removeEventListener("beforeprint", y, !0), window.removeEventListener("afterprint", b), h.set(a0.a, null), a()
                }
            }, u[5] = b, u[6] = y, u[7] = v, u[8] = h, u[9] = i) : i = u[9], u[10] !== h ? (l = [h], u[10] = h, u[11] = l) : l = u[11], (0, c.useEffect)(i, l), u[12] !== p || u[13] !== e || u[14] !== m ? (d = m || p ? (0, a.jsx)(a7, {
                ...e,
                ref: f,
                printing: p
            }) : null, u[12] = p, u[13] = e, u[14] = m, u[15] = d) : d = u[15], d
        }

        function a7(e) {
            let t, n, i, l, d = (0, r.c)(19),
                {
                    entries: u,
                    title: h,
                    TurnRowComponent: p,
                    printing: m,
                    ref: g
                } = e,
                f = (0, s.y)(q.a),
                y = (0, c.useContext)(v.a),
                b = (0, c.useContext)(aA.a),
                {
                    getExperiment: x
                } = (0, eu.h)(),
                C = x("448755449", {
                    disableExposureLog: !0
                }).get("enabled", !1);
            d[0] !== u[0]?.conversationId ? (t = u[0]?.conversationId ?? (0, tD.d)(""), d[0] = u[0]?.conversationId, d[1] = t) : t = d[1], d[2] !== y || d[3] !== t ? (n = {
                auth: y,
                conversationId: t
            }, d[2] = y, d[3] = t, d[4] = n) : n = d[4];
            let w = (0, s.x)(null != u[0] && aK.h, n),
                _ = (0, s.x)(null == u[0] ? null : e8.e, u[0]?.conversationId ?? "") ?? !0,
                S = (0, c.useRef)(null),
                I = function(e, t, n) {
                    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                        o = arguments.length > 5 ? arguments[5] : void 0,
                        s = [],
                        i = [],
                        l = new Map;
                    for (let n of t) {
                        let t = l.get(n.conversationId);
                        if (null == t) {
                            let a = e.get(ej.j, n.conversationId);
                            t = {
                                serverId: a,
                                userResolver: (0, aq.c)(void 0, void 0, void 0, e.get(ej.T, n.conversationId) ?? void 0),
                                scopedResolver: (0, aq.c)(a ?? void 0)
                            }, l.set(n.conversationId, t)
                        }
                        let {
                            serverId: o,
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
                            void 0 === t.generatedResolver && (t.generatedResolver = e.get(aq.a, n.conversationId));
                            let a = t.generatedResolver;
                            null != a && i.push({
                                src: l.src,
                                resolver: a
                            })
                        } else if ("chatgpt-python-execution" === l.type && null != o) i.push(...l.images.map(e => {
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
                                        for (let a of (0, aD.u)(t, e)) {
                                            if (r && (0, aH.d)(a.src)) continue;
                                            let e = a.searchResult?.isProxied && (a.previewSrc === a.searchResult.contentSrc || a.previewSrc === a.searchResult.originalSrc) ? a.src : a.previewSrc;
                                            s.push({
                                                conversationId: n.conversationId,
                                                src: a.src,
                                                previewSrc: null != e && r && (0, aH.d)(e) ? a.src : e
                                            })
                                        }
                            }
                            if (null == o) continue;
                            i.push(...l.contentReferences.flatMap((e, t) => (0, aD.u)(e, t).map(e => {
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
                        return null != t && (0, aW.h)(t) ? [{
                            src: t,
                            resolver: n
                        }] : []
                    });
                    return {
                        queryKey: ["chatgpt-print-assets", e.get(aE.a), t[0]?.conversationId, a, r, s, c.map(e => {
                            let {
                                src: t,
                                resolver: n
                            } = e;
                            return [t, ...n.cacheKey, n.validationSessionId]
                        })],
                        initialData: 0 === c.length ? {
                            imageSources: {},
                            complete: 0 === s.length
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
                            return aB(e, "CHATGPT_CONVERSATION_PRINT_PREPARATION_IMAGES", i, async () => {
                                let t = {
                                    ...a.getQueryData(l)?.imageSources
                                };
                                for (let e of aL()(c, 6)) i.throwIfAborted(), await Promise.all(e.map(async e => {
                                    let {
                                        src: n,
                                        resolver: r
                                    } = e, o = await (0, aW.a)(a, n, r);
                                    if (i.throwIfAborted(), null != o) {
                                        let e = new Image;
                                        e.referrerPolicy = "no-referrer", e.src = o, await e.decode(), t[n] = o
                                    }
                                }));
                                let d = new Map,
                                    u = s.flatMap(t => {
                                        let n = d.get(t.conversationId);
                                        return (null == n && (n = r || !e.get(aK.h, {
                                            auth: o,
                                            conversationId: t.conversationId
                                        }) && e.get(e8.e, t.conversationId), d.set(t.conversationId, n)), n && (0, aH.d)(t.src)) ? [] : [{
                                            ...t,
                                            previewSrc: n && null != t.previewSrc && (0, aH.d)(t.previewSrc) ? t.src : t.previewSrc
                                        }]
                                    }),
                                    h = n ? t : await async function(e, t, n) {
                                        if (0 === e.length) return t;
                                        let a = aU(),
                                            r = {
                                                ...t
                                            },
                                            o = [];
                                        for (let n of e) {
                                            let e = t[n.src] ?? a[n.src] ?? (null == n.previewSrc ? void 0 : t[n.previewSrc] ?? a[n.previewSrc]);
                                            null != e ? r[n.src] = e : o.push(n)
                                        }
                                        if (0 === o.length || n.aborted) return r;
                                        let s = new AbortController,
                                            i = () => s.abort();
                                        n.addEventListener("abort", i, {
                                            once: !0
                                        });
                                        let l = setTimeout(i, 1e3),
                                            c = 0;
                                        try {
                                            await Promise.all(Array.from({
                                                length: Math.min(4, o.length)
                                            }, async () => {
                                                for (; !s.signal.aborted;) {
                                                    let e = o[c++];
                                                    if (null == e) return;
                                                    let t = e.previewSrc ?? e.src;
                                                    if (!/^(https?:|data:image\/|blob:)/i.test(t)) continue;
                                                    let n = await
                                                    function(e, t) {
                                                        return new Promise(n => {
                                                            let a = new Image,
                                                                r = e => {
                                                                    t.removeEventListener("abort", o), n(e)
                                                                },
                                                                o = () => {
                                                                    a.removeAttribute("src"), r(null)
                                                                };
                                                            t.aborted ? n(null) : (t.addEventListener("abort", o, {
                                                                once: !0
                                                            }), a.referrerPolicy = "no-referrer", a.src = e, a.decode().then(() => r(e), () => r(null)))
                                                        })
                                                    }(t, s.signal);
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
                }(f, u, m, C, "restricted" === b || !w && _, y),
                {
                    data: j,
                    isSuccess: T,
                    isError: E,
                    refetch: P
                } = (0, o.a)(I);
            return d[5] !== I || d[6] !== j || d[7] !== C || d[8] !== T || d[9] !== P || d[10] !== f ? (i = () => ({
                onKeyDown(e, t) {
                    if (!e.defaultPrevented && (!T || !j.complete) && (e.preventDefault(), !e.repeat && S.current !== t)) return S.current = t, P({
                        cancelRefetch: !1
                    }).then(() => {
                        t.aborted || window.print()
                    }).finally(() => {
                        S.current === t && (S.current = null)
                    })
                },
                onBeforePrint() {
                    if (C) {
                        let e = f.queryClient.getQueryData(I.queryKey),
                            t = {
                                ...aU(),
                                ...e?.imageSources
                            };
                        (0, af.flushSync)(() => f.set(a0.a, t))
                    }
                }
            }), d[5] = I, d[6] = j, d[7] = C, d[8] = T, d[9] = P, d[10] = f, d[11] = i) : i = d[11], (0, c.useImperativeHandle)(g, i), d[12] !== p || d[13] !== u || d[14] !== E || d[15] !== T || d[16] !== m || d[17] !== h ? (l = m ? (0, af.createPortal)((0, a.jsx)(aJ, {
                title: h,
                children: (0, a.jsx)(aM.a, {
                    value: null,
                    children: (0, a.jsx)(a3.a, {
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
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? aZ(e) : {
                                            ...e,
                                            items: e.items.map(aZ),
                                            activeReasoning: null == e.activeReasoning ? void 0 : aZ(e.activeReasoning)
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

        function a8(e) {
            let t, n, a, i, l, u, h = (0, r.c)(22),
                {
                    conversationId: p
                } = e,
                m = (0, s.y)(er.a),
                g = (0, d.a)(),
                f = (0, c.useRef)(null),
                v = (0, s.z)(aE.a),
                y = (0, s.x)(ej.j, p),
                b = (0, s.z)(a2.b);
            h[0] !== v || h[1] !== y ? (t = ["chatgpt-print-history", v, y], h[0] = v, h[1] = y, h[2] = t) : t = h[2], h[3] !== m || h[4] !== y ? (n = e => {
                let {
                    signal: t
                } = e;
                return aB(m, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != y && await (0, a1.a)(m, y, t), !0))
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
            } = (0, o.a)(a);
            h[9] !== v || h[10] !== p || h[11] !== g || h[12] !== b || h[13] !== x || h[14] !== m || h[15] !== y ? (i = (e, t) => {
                if (aO(m, e), e.defaultPrevented || null == y || 0 === b || m.get(a2.c, y)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (f.current?.signal === t) return void a4.set(e, f.current.preparation);
                let n = x({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && m.get(aE.a) === v) {
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
                            predicate: rt
                        }).map(a9)), t.aborted || m.get(aE.a) !== v || window.print()
                    }
                }).finally(() => {
                    f.current?.signal === t && (f.current = null)
                });
                f.current = {
                    signal: t,
                    preparation: n
                }, a4.set(e, n)
            }, h[9] = v, h[10] = p, h[11] = g, h[12] = b, h[13] = x, h[14] = m, h[15] = y, h[16] = i) : i = h[16];
            let C = (0, c.useEffectEvent)(i);
            return h[17] !== C ? (l = () => {
                let e = new AbortController,
                    t = t => C(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, h[17] = C, h[18] = l) : l = h[18], h[19] !== v || h[20] !== y ? (u = [v, y], h[19] = v, h[20] = y, h[21] = u) : u = h[21], (0, c.useEffect)(l, u), null
        }

        function a9(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(re)
        }

        function re() {}

        function rt(e) {
            return e.getObserversCount() > 0
        }
        var rn = n("gbRX");

        function ra(e) {
            let t, n, o = (0, r.c)(4),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e,
                d = (0, s.z)(!l && rn.a) || i;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)($.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again",
                description: "Retry loading a ChatGPT conversation after its history could not be loaded"
            }), o[0] = t) : t = o[0], o[1] !== c || o[2] !== d ? (n = (0, a.jsx)(tp.a, {
                color: "ghost",
                disabled: d,
                onClick: c,
                children: t
            }), o[1] = c, o[2] = d, o[3] = n) : n = o[3], n
        }

        function rr(e) {
            let t, n, o, s = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)($.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation",
                description: "Error state when a ChatGPT conversation fetch fails"
            }), s[0] = t) : t = s[0], s[1] !== i || s[2] !== l || s[3] !== c ? (n = null != c ? (0, a.jsx)(ra, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, s[1] = i, s[2] = l, s[3] = c, s[4] = n) : n = s[4], s[5] !== n ? (o = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), s[5] = n, s[6] = o) : o = s[6], o
        }
        var ro = n("FfNP"),
            rs = n("WVag");
        let ri = (0, tg.a)(ro.loadEpicChartIndicator);

        function rl(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: o
                } = e,
                i = (0, s.x)(rs.a, o),
                [l, d] = (0, c.useState)(!1);
            return l || null == i || d(!0), n[0] !== o || n[1] !== l ? (t = l ? (0, a.jsx)(ri, {
                conversationId: o
            }) : null, n[0] = o, n[1] = l, n[2] = t) : t = n[2], t
        }
        var rc = n("RGWz"),
            rd = n("QxH2"),
            ru = n("UuVq"),
            rh = n("l0fK"),
            rp = n("hkBU"),
            rm = n("T1PX"),
            rg = n("zOE4"),
            rf = n("guID"),
            rv = n("Mbqw"),
            ry = n("yzQ9"),
            rb = n("Gjet"),
            rx = n("gJe8"),
            rC = n("ASxG"),
            rw = n("lsfk"),
            r_ = n("IObw"),
            rS = n("BOYb"),
            rI = n("kQNh"),
            rj = n.n(rI),
            rT = n("NkEl"),
            rE = n("FW69"),
            rP = "highlight-x7OnzP",
            rA = "safari-wcvuzB",
            rM = "block-t7sxyD";
        let rk = "chatgpt-search-result",
            rR = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* rN(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(rR) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let o = RegExp(t.split(/\n+/u).map(rj()).join("\\n*"), "g");
            for (let n = o.exec(r); null != n && n.index < r.length; n = o.exec(r)) {
                let r = n.index;
                o.lastIndex = r + 1;
                let s = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < s);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, s - l.start), rO(c) && ((0, rE.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function rO(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let rB = rC.object({
            chatGptSearchNavigation: rC.object({
                key: rC.string(),
                messageId: rC.string()
            })
        });

        function rF(e) {
            let t, n, a, o, i, l, d, h, p, m, g, f, v = (0, r.c)(50),
                {
                    conversationId: y,
                    entries: b,
                    isConversationFetching: x,
                    turnListApi: C
                } = e,
                w = (0, s.y)(er.a),
                _ = (0, s.x)(ej.s, y),
                S = (0, rw.b)(),
                I = (0, av.c)();
            v[0] !== S || v[1] !== I ? (t = e => {
                ! function(e, t, n) {
                    let a = t.getScrollElement();
                    if (null == a) return;
                    let r = e instanceof Range ? e.startContainer : e,
                        o = r instanceof HTMLElement ? r : r.parentElement;
                    for (let t = e instanceof Range ? o : o?.parentElement; null != t && t !== a; t = t.parentElement) {
                        if (t.scrollWidth <= t.clientWidth || !/^(auto|scroll)$/.test(getComputedStyle(t).overflowX)) continue;
                        let a = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect();
                        if (null == a) continue;
                        let r = t.getBoundingClientRect();
                        (a.left < r.left || a.right > r.right) && t.scrollBy({
                            left: (0, av.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
                            behavior: "instant"
                        })
                    }
                    let s = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect();
                    if (null == s) return;
                    let i = a.getBoundingClientRect(),
                        l = getComputedStyle(a),
                        c = Number.parseFloat(l.scrollPaddingTop) || 0,
                        d = Number.parseFloat(l.scrollPaddingBottom) || 0,
                        u = a.clientHeight - c - d,
                        h = (0, av.b)(s.height, n),
                        p = (0, av.b)(s.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, S, I)
            }, v[0] = S, v[1] = I, v[2] = t) : t = v[2];
            let j = (0, c.useEffectEvent)(t),
                T = (0, u.Y)(),
                E = (0, u._)(),
                P = new URLSearchParams(T.search),
                A = P.get("messageId") ?? P.get("message"),
                M = rB.safeParse(T.state).data?.chatGptSearchNavigation,
                k = A ?? M?.messageId,
                R = P.get("selectedTextQuery") ?? "",
                N = (0, s.x)(ej.N, y),
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
                        let a, r, o, s, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            p = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === p.length) return () => {};
                        let m = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(rj()).join("|") : rj()(c), null == c ? "giu" : "gu"),
                            g = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(w);

                        function C() {
                            for (let t of (g = !0, x.disconnect(), clearTimeout(r), null != o && cancelAnimationFrame(o), null != a && CSS.highlights.get(rk) === a && CSS.highlights.delete(rk), e.classList.remove(rP, rA), b)) t.classList.remove(rP, rM)
                        }

                        function w() {
                            g || null != r || null != o || (r = setTimeout(() => {
                                r = void 0, o = requestAnimationFrame(() => {
                                    o = void 0, _()
                                })
                            }, 50))
                        }

                        function _() {
                            let t;
                            if (g || !e.isConnected || null != o) return;
                            let d = performance.now() - f;
                            if (d < 4e3 && null != e.querySelector("[data-search-result-pending]")) return void w();
                            let u = (0, rT.a)(e);
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
                                o = requestAnimationFrame(() => {
                                    o = requestAnimationFrame(() => {
                                        o = void 0, _()
                                    })
                                });
                                return
                            }
                            let S = [];
                            if (null != c) {
                                let t = e.querySelector('[data-markdown-text-style="assistant-message"]') ?? e,
                                    n = 0;
                                for (let e of rN(t, c))
                                    if (!(n++ < l)) {
                                        S.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(rR) != null || u.some(t => {
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), rO(a) && S.push(a)
                                    }
                            }
                            let I = h.flatMap(e => {
                                let {
                                    element: t,
                                    target: n
                                } = e, a = t.getBoundingClientRect(), r = S.some(e => t.contains(e.startContainer));
                                return "terms" === i && a.width > 0 && a.height > 0 && ("block" === n.highlight || "auto" === n.highlight && !r) ? [t] : []
                            });
                            if (0 === S.length && 0 === I.length) {
                                if (d < 800) return void w();
                                I.push(e)
                            }
                            let j = 0,
                                T = 0;
                            for (let e of [...S, ...I]) {
                                let n = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect(),
                                    a = n?.top ?? 0,
                                    r = n?.left ?? 0;
                                (null == t || 0 > (a - j || r - T)) && (t = e, j = a, T = r)
                            }
                            t = t ?? e, v && n?.(t);
                            let E = t instanceof Range ? t.getClientRects()[0] : t.getBoundingClientRect(),
                                P = [E?.top, E?.left, E?.width, E?.height, e.scrollHeight].join(":");
                            if (d < 4e3 && P !== s) {
                                s = P, w();
                                return
                            }
                            if (!v) {
                                v = !0, s = void 0, n?.(t), w();
                                return
                            }
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...S), CSS.highlights.set(rk, a)) : S.length > 0 && I.push(e), e.classList.add(rP), (0, rS.e)() && e.classList.add(rA), I)) t.classList.add(rP, rM), b.add(t);
                            r = setTimeout(C, 3600)
                        }
                        return x.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), _(), C
                    }(e, B, j, R ? "phrase" : "terms", Number(P.get("selectedTextOccurrence"))) : void 0;
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
            v[5] !== y || v[6] !== x || v[7] !== k || v[8] !== F || v[9] !== w || v[10] !== O ? (a = () => {
                if (z.current.key !== F && (z.current = {
                        key: F,
                        handled: !1,
                        positioned: !1
                    }), null != k && !x && O) return w.watch(e => {
                    !z.current.handled && (0, ej.Qb)(e, y, k) && (z.current.handled = !0)
                })
            }, o = [y, x, k, F, w, O], v[5] = y, v[6] = x, v[7] = k, v[8] = F, v[9] = w, v[10] = O, v[11] = a, v[12] = o) : (a = v[11], o = v[12]), (0, c.useLayoutEffect)(a, o), v[13] !== b || v[14] !== k ? (i = null == k ? void 0 : b.find(e => {
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
                m = L?.turnKey, p = null == t || null == n ? void 0 : (0, r_.b)(t, e, n), v[30] = k, v[31] = L?.id, v[32] = L?.turn, v[33] = L?.turn.items, v[34] = L?.turn.items.findIndex, v[35] = L?.turnKey, v[36] = p, v[37] = m
            } else p = v[36], m = v[37];
            let H = p;
            return v[38] !== G || v[39] !== k || v[40] !== m || v[41] !== C || v[42] !== H ? (g = () => {
                let e;
                if (null == m || null == C) return;
                let t = new AbortController,
                    n = null;
                return C.scrollToKey(m, e => n = (null == k ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(k)}"]`)) ?? (null == H ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(H)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = G(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, v[38] = G, v[39] = k, v[40] = m, v[41] = C, v[42] = H, v[43] = g) : g = v[43], v[44] !== k || v[45] !== F || v[46] !== m || v[47] !== C || v[48] !== H ? (f = [F, k, m, C, H], v[44] = k, v[45] = F, v[46] = m, v[47] = C, v[48] = H, v[49] = f) : f = v[49], (0, c.useLayoutEffect)(g, f), null
        }
        var rz = n("Ppno"),
            rG = n("lA5q"),
            rL = n("wDWo"),
            rD = n("IgxH"),
            rH = n("iaTG"),
            rW = n("c3f5"),
            rq = n("XpUB"),
            rU = n("xAIC"),
            rK = n("u0tN"),
            rV = n("Sd8U");
        let rQ = (0, s.t)("ChatGptTranscriptScope", {
            parent: rV.a,
            key: e => e.presentation
        });
        var r$ = n("r2mP"),
            rY = n("ag0v"),
            rX = n("HE5u"),
            rJ = n("RADZ"),
            rZ = n("rZzh"),
            r0 = n("hZRx");

        function r1(e) {
            let t, n, o, i, l, c, d, u, h, p, m = (0, r.c)(57),
                {
                    entry: g,
                    renderMcpApps: f,
                    trackShownImpressions: v
                } = e,
                y = void 0 === f || f,
                b = void 0 === v || v,
                x = (0, s.y)(er.a);
            m[0] !== g.conversationId ? (t = (0, U.o)({
                routeKind: "chatgpt-thread",
                conversationId: g.conversationId
            }), m[0] = g.conversationId, m[1] = t) : t = m[1];
            let C = (0, s.x)(b ? N.c : null, t),
                w = b && null == C,
                _ = (0, s.x)(g.isMostRecentTurn ? rZ.e : null, g.conversationId);
            m[2] !== g.timestampSeparatorAtMs ? (n = null == g.timestampSeparatorAtMs ? null : (0, a.jsx)(r$.b, {
                sentAtMs: g.timestampSeparatorAtMs
            }), m[2] = g.timestampSeparatorAtMs, m[3] = n) : n = m[3];
            let S = null != g.paragen;
            m[4] !== g.branchingMessageId || m[5] !== g.browserConversationId || m[6] !== g.conversationId || m[7] !== g.dilEditDisclosure || m[8] !== g.enableCloudBrowserActivity || m[9] !== g.feedbackEnabled || m[10] !== g.hasLaterSitesPreview || m[11] !== g.id || m[12] !== g.isMostRecentTurn || m[13] !== g.isReadOnly || m[14] !== g.isTemporaryChat || m[15] !== g.isWorkConversation || m[16] !== g.onEditUserMessage || m[17] !== g.onFork || m[18] !== g.onRegenerateResponse || m[19] !== g.pendingSubmissionAttachments || m[20] !== g.readAloudEnabled || m[21] !== g.referenceImageSuggestionActionInput || m[22] !== g.safetyReview || m[23] !== g.shareEnabled || m[24] !== g.turn || m[25] !== y || m[26] !== w || m[27] !== S ? (o = (0, a.jsx)(rX.a, {
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
                isParagen: S,
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
                trackShownImpressions: w,
                turn: g.turn,
                turnId: g.id
            }), m[4] = g.branchingMessageId, m[5] = g.browserConversationId, m[6] = g.conversationId, m[7] = g.dilEditDisclosure, m[8] = g.enableCloudBrowserActivity, m[9] = g.feedbackEnabled, m[10] = g.hasLaterSitesPreview, m[11] = g.id, m[12] = g.isMostRecentTurn, m[13] = g.isReadOnly, m[14] = g.isTemporaryChat, m[15] = g.isWorkConversation, m[16] = g.onEditUserMessage, m[17] = g.onFork, m[18] = g.onRegenerateResponse, m[19] = g.pendingSubmissionAttachments, m[20] = g.readAloudEnabled, m[21] = g.referenceImageSuggestionActionInput, m[22] = g.safetyReview, m[23] = g.shareEnabled, m[24] = g.turn, m[25] = y, m[26] = w, m[27] = S, m[28] = o) : o = m[28], m[29] !== g.conversationId || m[30] !== g.isTemporaryChat || m[31] !== g.isWorkConversation || m[32] !== g.paragen || m[33] !== y || m[34] !== w ? (i = null == g.paragen ? null : (0, a.jsx)(rJ.a, {
                renderMcpApps: y,
                comparison: g.paragen,
                conversationId: g.conversationId,
                hostId: K.a,
                isTemporaryChat: g.isTemporaryChat,
                isWorkConversation: g.isWorkConversation,
                trackTaskViews: w
            }, g.paragen.promptMessageId), m[29] = g.conversationId, m[30] = g.isTemporaryChat, m[31] = g.isWorkConversation, m[32] = g.paragen, m[33] = y, m[34] = w, m[35] = i) : i = m[35], m[36] !== g.showSharedConversationPrivateDisclaimer ? (l = g.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(E.a, {
                    className: "shrink-0",
                    legacyIcon: rY.a,
                    asset16: r0.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)($.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you",
                    description: "Privacy disclaimer shown between the original shared ChatGPT conversation and the reader's new private messages after they continue the shared conversation in Codex Desktop"
                })]
            }) : null, m[36] = g.showSharedConversationPrivateDisclaimer, m[37] = l) : l = m[37], m[38] !== g || m[39] !== _ || m[40] !== x || m[41] !== w ? (c = g.isMostRecentTurn ? (0, a.jsx)(tu.a, {
                conversationId: g.conversationId,
                errorMessage: g.errorMessage,
                isWorkConversation: g.isWorkConversation,
                onRetry: null == g.onRegenerateResponse || null == _ ? void 0 : async e => {
                    let t = x.get(rZ.e, g.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = x.get(ej.V, g.conversationId)?.metadata?.errorCode;
                    (0, eI.d)(x.get(eJ.c).logProductEvent, {
                        conversationId: x.get(ej.j, g.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await g.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, rZ.f)(t.message, x.get(to.u, g.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                showPendingLoadingMessage: g.showPendingLoadingMessage,
                showRequestUserInputStatus: g.showRequestUserInputStatus,
                trackShownImpressions: w,
                useDefaultModel: _?.useDefaultModel,
                isRetryDisabled: _?.isRetryDisabled
            }) : null, m[38] = g, m[39] = _, m[40] = x, m[41] = w, m[42] = c) : c = m[42], m[43] !== o || m[44] !== i || m[45] !== l || m[46] !== c ? (d = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [o, i, l, c]
            }), m[43] = o, m[44] = i, m[45] = l, m[46] = c, m[47] = d) : d = m[47], m[48] !== g.id || m[49] !== d || m[50] !== n ? (u = (0, a.jsxs)("div", {
                "data-content-search-turn-key": g.id,
                children: [n, d]
            }), m[48] = g.id, m[49] = d, m[50] = n, m[51] = u) : u = m[51];
            let I = u;
            return m[52] !== g.dilVisualSlotId ? (h = null != g.dilVisualSlotId && (0, a.jsx)("div", {
                "data-dil-anchor-spacer": "",
                "aria-hidden": "true"
            }), m[52] = g.dilVisualSlotId, m[53] = h) : h = m[53], m[54] !== I || m[55] !== h ? (p = (0, a.jsxs)(a.Fragment, {
                children: [h, I]
            }), m[54] = I, m[55] = h, m[56] = p) : p = m[56], p
        }

        function r2(e) {
            let t, n, o, i = (0, r.c)(6);
            i[0] !== e ? ({
                renderMcpApps: n,
                ...t
            } = e, i[0] = e, i[1] = t, i[2] = n) : (t = i[1], n = i[2]);
            let l = void 0 === n || n,
                c = (0, s.y)(rQ),
                d = l && c.value.rendersWidgets;
            return i[3] !== t || i[4] !== d ? (o = (0, a.jsx)(r1, {
                ...t,
                renderMcpApps: d
            }), i[3] = t, i[4] = d, i[5] = o) : o = i[5], o
        }

        function r3(e) {
            let t, n, o, i, l, d, u, h = (0, r.c)(17),
                {
                    entries: p,
                    historyLoader: m,
                    isVisible: g,
                    rendersWidgets: f,
                    onVisibilityChange: v
                } = e;
            h[0] !== g || h[1] !== v ? (t = () => (v(g), () => v(!1)), n = [g, v], h[0] = g, h[1] = v, h[2] = t, h[3] = n) : (t = h[2], n = h[3]), (0, c.useLayoutEffect)(t, n), h[4] !== f ? (o = {
                presentation: "floating",
                rendersWidgets: f
            }, h[4] = f, h[5] = o) : o = h[5];
            let y = g ? m : null;
            return h[6] !== p ? (i = (0, a.jsx)(rK.a, {
                entries: p,
                preserveMeasuredTurnViewport: !0,
                RowComponent: r4
            }), h[6] = p, h[7] = i) : i = h[7], h[8] !== y || h[9] !== i ? (l = (0, a.jsx)(aM.a, {
                value: null,
                children: (0, a.jsxs)(a3.a, {
                    value: null,
                    children: [y, i]
                })
            }), h[8] = y, h[9] = i, h[10] = l) : l = h[10], h[11] !== g || h[12] !== l ? (d = (0, a.jsx)(rb.a, {
                active: g,
                presentation: "panel",
                children: l
            }), h[11] = g, h[12] = l, h[13] = d) : d = h[13], h[14] !== o || h[15] !== d ? (u = (0, a.jsx)(s.b, {
                scope: rQ,
                value: o,
                children: d
            }), h[14] = o, h[15] = d, h[16] = u) : u = h[16], u
        }

        function r4(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsx)(r2, {
                entry: {
                    ...o,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    readAloudEnabled: !1
                },
                trackShownImpressions: !1
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var r5 = n("qZWE"),
            r6 = n("IBS2"),
            r7 = n("PC5z"),
            r8 = n("lZ4W"),
            r9 = n("ihvi"),
            oe = n("nMdB"),
            ot = n("uYx2");
        let on = "[data-d-component]:not([data-d-text-flow])";
        class oa extends c.Component {
            static contextType = av.a;
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
                let r = a.querySelector(on) ?? a,
                    o = r.getBoundingClientRect(),
                    s = n.getBoundingClientRect();
                return o.bottom <= s.top || o.top >= s.bottom ? null : {
                    top: o.top,
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
                    o = () => {
                        let e = a.querySelector(r);
                        if (e?.dataset.dComponent !== "text" || !e.textContent?.trim() || !e.getClientRects().length) return;
                        let n = this.resumePlacement;
                        this.releaseHold(), n?.(t)
                    };
                this.textObserver = new MutationObserver(o), this.textObserver.observe(a, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                }), o()
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
                e.body.isConnected || (e.body = e.element.querySelector(on) ?? e.element);
                let n = () => (0, av.b)(e.body.getBoundingClientRect().top - e.top, this.context),
                    a = n();
                if (!(1 > Math.abs(a))) {
                    if (this.held) {
                        let t = e.element.closest("[data-turn-key]")?.querySelector("[data-dil-anchor-spacer]");
                        if (t) {
                            let r = parseFloat(t.style.height) || 0,
                                o = r + Math.max(0, -a - e.scrollElement.scrollTop) - Math.min(r, Math.max(0, a));
                            o !== r && (t.style.height = `${o}px`, a = n())
                        }
                    }
                    this.held && a > 0 && this.props.ensureScrollRoomForAnchor?.(a), t.holdViewport(), t.compensateScrollToDistanceFromBottomPx(Math.max(0, (0, ot.b)(e.scrollElement) - a)), this.stopLayoutCorrection?.(), this.stopLayoutCorrection = (0, oe.a)(e.body, this.context)
                }
            }
            render() {
                return this.shouldAnimateFold() ? this.presented.children : this.props.children
            }
        }
        var or = n("aRto"),
            oo = n("WWSI"),
            os = n("U3Gy"),
            oi = n("mKTJ");
        let ol = (0, s.c)(U.a, e => {
                let {
                    get: t
                } = e;
                return t(r5.l)
            }, {
                isEqual: t_()
            }),
            oc = (0, s.c)(U.a, e => {
                let {
                    get: t
                } = e;
                return t(r7.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function od(e) {
            let t, n, o, i, l, d, h, p, m, g, f, v = (0, r.c)(50),
                {
                    conversationId: y,
                    entries: b,
                    viewportRef: x,
                    isTurnActive: C,
                    isInlinePreview: w,
                    readingPosition: _,
                    onVisibleContentReady: S,
                    responseSpacerState: I
                } = e,
                j = (0, s.z)(_.restoreState$),
                {
                    sharedConversationId: T
                } = (0, u.cb)(),
                E = (0, s.z)(null != T && "u" > typeof Element && "function" != typeof Element.prototype.moveBefore ? ol : null),
                P = (0, s.z)(oc),
                A = (0, rw.b)(),
                M = (0, c.useContext)(r6.a);
            v[0] !== M || v[1] !== w || v[2] !== _ || v[3] !== A ? (t = () => {
                if (null != M && !w) return M(() => _.captureBeforeHide(A))
            }, n = [M, w, _, A], v[0] = M, v[1] = w, v[2] = _, v[3] = A, v[4] = t, v[5] = n) : (t = v[4], n = v[5]), (0, c.useLayoutEffect)(t, n), v[6] !== _ || v[7] !== A ? (o = () => _.restoreReadingPosition(A), v[6] = _, v[7] = A, v[8] = o) : o = v[8];
            let k = (0, eS.a)(o),
                [R, N] = (0, c.useState)(op);
            v[9] !== x ? (i = (e, t) => {
                x.current?.releaseForHistoryToggle(), N(n => {
                    let a = new Map(n);
                    return a.get(e) === t ? a.delete(e) : a.set(e, t), a
                })
            }, v[9] = x, v[10] = i) : i = v[10];
            let O = function(e, t, n) {
                    if (!e.some(e => null != e.dilEditRequests)) return e;
                    let a = new Set;
                    return e.flatMap(e => {
                        let r, o = e.dilEditRequests;
                        if (!o || e.dilVisualSlotId) return [e];
                        let s = e.turn.items.filter(e => {
                            if ("user-message" !== e.type || !e.messageId) return !0;
                            let s = o.get(e.messageId);
                            if (!s) return !0;
                            let i = t.get(s.slotId) === s.editCount;
                            return e.messageId !== s.originalRequestId ? i || !a.has(s.slotId) : (a.add(s.slotId), r = {
                                slotId: s.slotId,
                                requestId: e.messageId,
                                count: s.editCount,
                                expanded: i,
                                onToggle: () => n(s.slotId, s.editCount)
                            }, !0)
                        });
                        return s.length === e.turn.items.length ? [r ? {
                            ...e,
                            dilEditDisclosure: r
                        } : e] : s.length ? [{
                            ...e,
                            turn: {
                                ...e.turn,
                                items: s
                            },
                            dilEditDisclosure: r
                        }] : []
                    })
                }(b, R, (0, eS.a)(i)),
                B = b.findLastIndex(oh),
                F = b[B]?.dilVisualSlotId,
                z = (0, rm.a)(null != F),
                G = b[B]?.turn.items[0];
            v[11] !== b || v[12] !== I?.voiceAutoScrollEnabled || v[13] !== F ? (l = null != F || I?.voiceAutoScrollEnabled ? b.findLastIndex(om) : -1, v[11] = b, v[12] = I?.voiceAutoScrollEnabled, v[13] = F, v[14] = l) : l = v[14];
            let L = l,
                D = b[L],
                H = B > L;
            v[15] !== b ? (d = e => {
                let t = b.find(t => t.turn.items.some(t => "chatgpt-writing-block-patch" === t.type && t.messageId === e.messageId)),
                    n = t?.turnKey ?? b.find(t => {
                        let {
                            id: n
                        } = t;
                        return n === e.turnId
                    })?.turnKey;
                return null == n ? [] : [n]
            }, v[15] = b, v[16] = d) : d = v[16];
            let W = P.flatMap(d),
                q = (0, c.useContext)(or.a),
                U = b.at(-1),
                K = C || U?.turn.status === "in_progress";
            if (q?.aboveComposer != null && null != U && W.push(U.turnKey), null != T && E?.size)
                for (let e of b) e.turn.items.flatMap(ou).some(e => "chatgpt-hosted-widget" === e.type && (0, oi.h)(e) && E.has((0, oi.e)(T, e.messageId))) && W.push(e.turnKey);
            let V = null == F ? void 0 : O.find(e => e.dilEditDisclosure?.slotId === F);
            V && W.push(V.turnKey, b[B].turnKey);
            let Q = H ? V : void 0;
            I?.voiceAutoScrollEnabled && null != D && W.push(D.turnKey);
            let $ = (0, s.x)(r9.b, y),
                Y = null == $ ? void 0 : b.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes($)
                }),
                X = null == Y ? void 0 : (0, r9.a)(Y.turn.items);
            (0, s.x)(r8.a, null == X ? null : {
                conversationId: y,
                userMessageId: X,
                steeredPromptId: Y === U ? $ : void 0
            }) && null != Y && W.push(Y.turnKey);
            let J = (0, s.x)(os.b, y);
            v[17] === Symbol.for("react.memo_cache_sentinel") ? (h = (e, t, n) => "adjacent-user-prompts" === (0, td.d)(n[t - 1], e) ? {
                ...e,
                gapBeforePx: 4
            } : e, v[17] = h) : h = v[17];
            let Z = (0, oo.a)(O, J, y).map(h),
                ee = D?.turnKey,
                et = G?.type === "assistant-message" ? G.messageId : void 0,
                en = I?.ensureScrollRoomForAnchor,
                ea = U?.hasStreamingFinalText === !0,
                er = U?.streamingDilFinalId,
                eo = I?.getHeightPx,
                es = Q?.turnKey,
                ei = Q?.dilEditDisclosure?.count,
                el = Q?.turnKey ?? (null != F || I?.voiceAutoScrollEnabled ? D?.turnKey : void 0);
            v[18] !== I || v[19] !== x ? (p = (e, t) => {
                I?.onTurnLayoutReady(e, t), x.current?.restoreAfterMeasurement()
            }, v[18] = I, v[19] = x, v[20] = p) : p = v[20], v[21] !== I ? (m = e => {
                let {
                    heightDeltaPx: t
                } = e;
                I?.consumeGrowth(t ?? 0)
            }, v[21] = I, v[22] = m) : m = v[22];
            let ec = null == M || w ? void 0 : _.onRestoreStateChange;
            return v[23] !== j || v[24] !== S || v[25] !== _.onApiChange || v[26] !== k || v[27] !== W || v[28] !== eo || v[29] !== es || v[30] !== ei || v[31] !== el || v[32] !== p || v[33] !== m || v[34] !== ec || v[35] !== Z ? (g = (0, a.jsx)(rK.a, {
                entries: Z,
                getBottomScrollPaddingPx: eo,
                synchronousMeasurementTurnKey: es,
                latestTurnSynchronousMeasurementKey: ei,
                layoutReadyTurnKey: el,
                onTurnLayoutReady: p,
                onLatestTurnHeightChange: m,
                initialRestoreState: j,
                onRestoreStateChange: ec,
                onApiChange: _.onApiChange,
                restoreScrollDistanceFromBottomPx: k,
                onVisibleContentReady: S,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: W,
                RowComponent: r2
            }), v[23] = j, v[24] = S, v[25] = _.onApiChange, v[26] = k, v[27] = W, v[28] = eo, v[29] = es, v[30] = ei, v[31] = el, v[32] = p, v[33] = m, v[34] = ec, v[35] = Z, v[36] = g) : g = v[36], v[37] !== H || v[38] !== z || v[39] !== K || v[40] !== A || v[41] !== et || v[42] !== en || v[43] !== ea || v[44] !== er || v[45] !== g || v[46] !== ee || v[47] !== x || v[48] !== F ? (f = (0, a.jsx)(oa, {
                ref: x,
                exchangeKey: ee,
                visualId: F,
                visualOwnerId: et,
                active: H,
                ensureScrollRoomForAnchor: en,
                hasStreamingFinalText: ea,
                streamingDilFinalId: er,
                replyPending: K,
                reducedMotion: z,
                scrollController: A,
                children: g
            }), v[37] = H, v[38] = z, v[39] = K, v[40] = A, v[41] = et, v[42] = en, v[43] = ea, v[44] = er, v[45] = g, v[46] = ee, v[47] = x, v[48] = F, v[49] = f) : f = v[49], f
        }

        function ou(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function oh(e) {
            return null != e.dilVisualSlotId
        }

        function op() {
            return new Map
        }

        function om(e) {
            return e.turn.items.some(e => "user-message" === e.type)
        }
        var og = n("Ipgw"),
            of = n("SBcL");

        function ov(e) {
            let t, n, o, i, l = (0, r.c)(18),
                {
                    conversationId: u
                } = e,
                h = (0, s.y)(er.a),
                p = (0, d.a)(),
                m = (0, ev.a)(),
                g = (0, s.x)(ej.ab, u),
                f = (0, s.x)(ej.db, u),
                v = (0, s.x)(ej.w, u),
                y = (0, s.x)(ej.cb, u),
                b = (0, c.useRef)(null),
                x = (0, c.useRef)(null);
            l[0] !== v || l[1] !== u || l[2] !== p || l[3] !== f || l[4] !== h || l[5] !== g || l[6] !== y ? (t = () => {
                let e = b.current;
                if (null == e) return;
                let t = x.current;
                if ((0, ej.Bb)(g)) {
                    e.textContent = "", x.current = {
                        conversationId: u,
                        requestId: f ?? ("active-async-turn" === g || "active-tpp-turn" === g ? v?.requestId : null) ?? (t?.conversationId === u ? t.requestId : null)
                    };
                    return
                }
                y || (x.current = null, t?.conversationId === u && "idle" === g && v?.result === "completed" && v.requestId === t.requestId && null == h.get(ej.D, u) && (e.textContent = p.formatMessage({
                    id: "chatgptConversations.responseComplete",
                    defaultMessage: "Response complete",
                    description: "Polite screen-reader announcement after the ChatGPT response the user was waiting for finishes successfully"
                })))
            }, l[0] = v, l[1] = u, l[2] = p, l[3] = f, l[4] = h, l[5] = g, l[6] = y, l[7] = t) : t = l[7];
            let C = (0, c.useEffectEvent)(t);
            return (l[8] !== C ? (n = () => {
                C()
            }, l[8] = C, l[9] = n) : n = l[9], l[10] !== v || l[11] !== u || l[12] !== m || l[13] !== f || l[14] !== g || l[15] !== y ? (o = [u, g, f, v, y, m], l[10] = v, l[11] = u, l[12] = m, l[13] = f, l[14] = g, l[15] = y, l[16] = o) : o = l[16], (0, c.useEffect)(n, o), m) ? (l[17] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, af.createPortal)((0, a.jsx)("span", {
                ref: b,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), l[17] = i) : i = l[17], i) : null
        }
        var oy = n("pgeU");
        let ob = (0, tg.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function ox(e) {
            let t, n, o, i = (0, r.c)(7),
                {
                    conversationId: l
                } = e,
                d = (0, s.y)(er.a),
                u = (0, s.x)(oy.a, l);
            return i[0] !== l || i[1] !== d ? (t = () => {
                let e = () => {
                        let e = d.get(oy.a, l);
                        null != e && (0, oy.b)(d, l, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [l, d], i[0] = l, i[1] = d, i[2] = t, i[3] = n) : (t = i[2], n = i[3]), (0, c.useEffect)(t, n), i[4] !== l || i[5] !== u ? (o = null == u ? null : (0, a.jsx)(ob, {
                conversationId: l,
                effect: u
            }, u.id), i[4] = l, i[5] = u, i[6] = o) : o = i[6], o
        }
        var oC = n("alJ6"),
            ow = n("KSir"),
            o_ = n("QPeR"),
            oS = n("M3Kf");

        function oI(e) {
            let t, n, i, l, c, d, h = (0, r.c)(21),
                {
                    conversationId: p
                } = e,
                m = (0, s.y)(er.a),
                g = (0, s.x)(ej.j, p),
                f = (0, s.z)(a2.b),
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
                        let e = m.get(ej.N, p),
                            n = e?.[t] ?? (null == e ? void 0 : Object.values(e).find(e => e.message?.id === t));
                        if (n?.message != null) return !0
                    }
                    await (0, a1.a)(m, g, n)
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
                isError: C,
                refetch: w
            } = (0, o.a)(c);
            return h[18] !== C || h[19] !== w ? (d = C ? (0, a.jsx)(tp.a, {
                color: "secondary",
                onClick: () => void w(),
                children: (0, a.jsx)($.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message",
                    description: "Button to retry loading the full conversation for a link to an older message"
                })
            }) : null, h[18] = C, h[19] = w, h[20] = d) : d = h[20], d
        }
        var oj = n("TmaW"),
            oT = n("K45w"),
            oE = n("jCHb"),
            oP = n("V8uZ");

        function oA(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        var oM = n("SEBt"),
            ok = n("JUxu");
        let oR = (0, c.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function oN(e) {
            let t, n, o, i, l = (0, r.c)(11),
                {
                    sharedConversationId: d
                } = e,
                u = (0, s.y)(er.a),
                h = (0, s.x)(aK.f, (0, c.useContext)(v.a));
            if (null != h) {
                let e, t;
                return l[0] !== h ? (e = (0, aK.b)(h), l[0] = h, l[1] = e) : e = l[1], l[2] !== e ? (t = (0, a.jsx)(ok.a, {
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
                (0, nB.f)(u, oR, {
                    reportEntityType: "share_link",
                    threadId: d,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, oM.d)(u, d)
            }, l[5] = u, l[6] = d, l[7] = n) : n = l[7], l[8] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)($.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation",
                description: "Button above a shared ChatGPT conversation in Codex Desktop that opens ChatGPT's report modal for reporting another person's shared conversation"
            }), l[8] = o) : o = l[8], l[9] !== n ? (i = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(tp.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: o
                })]
            }), l[9] = n, l[10] = i) : i = l[10], i
        }
        var oO = n("AORd"),
            oB = n("cP1f");

        function oF(e) {
            let {
                turn: t
            } = e;
            return t.items.some(oz)
        }

        function oz(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function oG(e) {
            let t, n, o, i, l, u, h, p, m, g, f, v, y, b, x, C, w, _, S, I, j, T, E, P, A, M, k, R, N, O, B, F, z = (0, r.c)(176),
                {
                    ref: G,
                    printTitle: L,
                    trackReadState: D,
                    workspace: H,
                    shouldBlockMcpApps: U,
                    contentX: K,
                    conversationId: V,
                    section: Q,
                    history: Y,
                    composerConversationId: X,
                    composerLeadingContent: J,
                    aboveComposerContent: Z,
                    isCoveredByFloatingPanel: ee,
                    isFormOnly: et,
                    isInlinePreview: en,
                    transcriptPresentation: ea,
                    scrollOrigin: eo,
                    isChatConversation: es,
                    customGptId: ei,
                    entries: el,
                    renderState: ec,
                    isComposerDisabled: ed,
                    hasSharedHistory: eu,
                    showEmptyState: eh,
                    isSharedConversation: ep,
                    isTemporaryChat: eg,
                    isTurnActive: ef,
                    isWorkConversation: ev,
                    onboardingPrelude: eb,
                    sharedConversationId: ex,
                    showComposer: eC,
                    archivedPreviewFooter: ew,
                    routeComposerPresentation: e_,
                    emptyThreadStatus: eI,
                    disclaimer: eT,
                    renderComposer: eE,
                    selectedTextActions: eP
                } = e,
                eA = (0, s.y)(er.a),
                eM = (0, s.y)(q.a),
                {
                    activeConversationQuery: ek,
                    hasConversationLoadError: eR,
                    isConversationLoading: eN,
                    initialResponsePlacementKey: eO
                } = Y,
                {
                    isConversationEmpty: eB
                } = ec,
                eF = ec.renderedTurns.length > 0,
                ez = ek.isFetching,
                eG = Y.serverConversationId ?? V,
                eL = (0, d.a)();
            z[0] !== eL ? (t = eL.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation",
                description: "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop"
            }), z[0] = eL, z[1] = t) : t = z[1];
            let eD = t,
                eH = (0, s.z)(null),
                eW = (0, s.z)(W.a),
                eq = (0, s.x)(ey.a, V),
                eU = (0, s.z)(o_.a),
                eK = eC && eU?.source.turnContext.conversationId !== X,
                eV = "floating" === e_.placement,
                [eQ, e$] = (0, c.useState)(!1),
                eY = H?.fullscreenContent != null || eV && eQ && !e_.isHidden && !et ? "floating" : "main",
                eX = es && !eu && null == ew,
                eJ = !eN && !ef && !eR && eB && !eF,
                eZ = (0, s.x)(ej.i, V),
                e0 = null == Q && eh && eX && eJ && null == eZ && !eq && !eV,
                e1 = null == ei ? "centered-home" : "home",
                e2 = null == Q && eh && !eq && (!eX || !eB),
                e3 = (0, c.useRef)(null),
                e4 = (0, c.useRef)(null),
                [e5, e6] = (0, c.useState)(null),
                e7 = (0, av.c)(),
                e8 = en ? null : eG;
            z[2] !== e8 || z[3] !== e5 || z[4] !== e7 ? (n = () => ({
                conversationKey: e8,
                responseSpacer: e5,
                windowZoom: e7
            }), z[2] = e8, z[3] = e5, z[4] = e7, z[5] = n) : n = z[5];
            let e9 = (0, eS.a)(n);
            z[6] !== eA || z[7] !== e8 || z[8] !== e9 ? (o = () => (function(e, t, n) {
                let a = (0, s.u)(er.a, null == t ? 0 : e.get(of.a, t)),
                    r = (0, s.u)(er.a, () => null),
                    o = (0, s.u)(er.a, () => null),
                    i = null,
                    l = null;

                function c(e) {
                    null != l && (null == e || e()) && (l = null)
                }
                return {
                    initialOffset$: a,
                    api$: r,
                    restoreState$: o,
                    onScroll: function(t) {
                        let {
                            conversationKey: a,
                            responseSpacer: r
                        } = n();
                        null != a && e.set(of.a, a, (0, ot.a)(t, r?.getHeightPx() ?? 0))
                    },
                    cancelPendingRestore: c,
                    acceptSubmit() {
                        c(), e.set(a, 0)
                    },
                    onApiChange: t => e.set(r, t),
                    restoreReadingPosition: function(t) {
                        let a = l;
                        if (null == a) return;
                        let o = t.getScrollElement();
                        if (null == o || 0 === o.clientHeight) return;
                        if ("bottom" === a) {
                            c(), t.scrollToDistanceFromBottomPx(0, "instant");
                            return
                        }
                        t.shouldFollowContentGrowth() && t.holdViewport();
                        let s = a.turn,
                            i = null == s ? null : o.querySelector(`[data-turn-key="${CSS.escape(s.key)}"]`)?.getBoundingClientRect(),
                            d = a.top;
                        if (null != s && null != i) {
                            let {
                                windowZoom: e
                            } = n();
                            if ((0, av.b)(i.height, e) <= Math.max(0, -s.offset)) return;
                            d = o.scrollTop + (0, av.b)(i.top - o.getBoundingClientRect().top, e) - s.offset
                        }
                        let u = o.scrollHeight - o.clientHeight;
                        d <= u && ((null == s || null != i || e.get(r)?.getEntryGeometry(s.key) == null) && c(), t.compensateScrollToDistanceFromBottomPx(u - Math.max(0, d)))
                    },
                    captureBeforeHide: function(e) {
                        let t = e.getScrollElement();
                        return null != t && t.clientHeight > 0 && (i = l ?? (e.shouldFollowContentGrowth() && 1 >= (0, ot.b)(t) ? "bottom" : function(e, t) {
                            let n = e.scrollTop,
                                a = e.getBoundingClientRect();
                            for (let r of e.querySelectorAll("[data-turn-key]")) {
                                let e = r.getBoundingClientRect(),
                                    o = r.dataset.turnKey;
                                if (null != o && e.height > 0 && e.bottom > a.top && e.top < a.bottom) return {
                                    top: n,
                                    turn: {
                                        key: o,
                                        offset: (0, av.b)(e.top - a.top, t)
                                    }
                                }
                            }
                            return {
                                top: n
                            }
                        }(t, n().windowZoom))), () => {
                            i = null
                        }
                    },
                    onRestoreStateChange: function(t) {
                        null != i && null != t && (l = i, e.set(o, t))
                    }
                }
            })(eA, e8, e9), z[6] = eA, z[7] = e8, z[8] = e9, z[9] = o) : o = z[9];
            let [te] = (0, c.useState)(o), tt = (0, s.z)(te.api$), tn = (0, s.z)(te.restoreState$), ta = (0, s.z)(te.initialOffset$), {
                cancelPendingRestore: tr
            } = te, to = null == tn ? eO : null, [ts, ti] = (0, c.useState)(!1);
            z[10] !== el ? (i = () => el, z[10] = el, z[11] = i) : i = z[11];
            let tl = (0, eS.a)(i),
                {
                    revealLatestResponse: tc,
                    scrollToSearchTurn: td,
                    scrollToDelayedImageCard: tu
                } = ((N = (0, r.c)(18))[0] !== tt || N[1] !== el ? (E = () => ({
                    async scrollToMessage(e) {
                        let t = el.find(t => {
                            let {
                                turn: n
                            } = t;
                            return n.messageIds.includes(e)
                        });
                        null != t && null != tt && await tt.scrollToKey(t.turnKey, void 0, {
                            align: "top"
                        })
                    }
                }), P = [el, tt], N[0] = tt, N[1] = el, N[2] = E, N[3] = P) : (E = N[2], P = N[3]), (0, c.useImperativeHandle)(G, E, P), N[4] !== tt || N[5] !== el ? (A = (e, t) => (0, rd.c)(tt, el.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                })?.turnKey, t), N[4] = tt, N[5] = el, N[6] = A) : A = N[6], O = (0, eS.a)(A), N[7] !== tt || N[8] !== V || N[9] !== el ? (M = async e => {
                    let t = el.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != tt && await tt.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${V}-${e}`)}"]`), {
                        align: "center"
                    })
                }, N[7] = tt, N[8] = V, N[9] = el, N[10] = M) : M = N[10], B = (0, eS.a)(M), N[11] !== tt?.scrollToKey || N[12] !== el ? (k = function(e) {
                    let t = el.findLast(oF);
                    return (0, oB.a)(tt?.scrollToKey, t?.turnKey, e)
                }, N[11] = tt?.scrollToKey, N[12] = el, N[13] = k) : k = N[13], F = k, N[14] !== F || N[15] !== B || N[16] !== O ? (R = {
                    revealLatestResponse: F,
                    scrollToSearchTurn: O,
                    scrollToDelayedImageCard: B
                }, N[14] = F, N[15] = B, N[16] = O, N[17] = R) : R = N[17], R);
            z[12] === Symbol.for("react.memo_cache_sentinel") ? (l = e => (0, rd.a)(e4.current, e), z[12] = l) : l = z[12];
            let th = (0, eS.a)(l),
                tp = `chatgpt:${V}`;
            if (z[13] !== tr || z[14] !== V || z[15] !== tl || z[16] !== th || z[17] !== eu || z[18] !== eg || z[19] !== eM || z[20] !== td || z[21] !== tp) {
                let e;
                z[23] !== V || z[24] !== eu || z[25] !== eg || z[26] !== eM ? (e = async e => {
                    let t = eM.get(ej.j, V);
                    !eg && !eu && null != t && eM.get(a2.b) > 0 && await (0, a1.a)(eM, t, e)
                }, z[23] = V, z[24] = eu, z[25] = eg, z[26] = eM, z[27] = e) : e = z[27], u = function(e) {
                    let {
                        getTurns: t,
                        routeContextId: n,
                        scrollAdapter: a,
                        ensureHistory: r
                    } = e, o = (0, rH.a)({
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
                                            unitId: (0, r_.a)("user", t),
                                            text: n
                                        }]
                                    }
                                    if ("assistant-message" === e.type) {
                                        let n = (0, rq.a)(e.content, aD.b),
                                            a = [],
                                            r = "";
                                        for (; e.content.includes(r);) r += "";
                                        let o = (0, rD.a)(function e(t, n, a, r) {
                                                let o = "",
                                                    s = 0;
                                                for (let i of t) {
                                                    let t = n.indexOf(i.raw, s); - 1 !== t && (o += n.slice(s, t), o += function(t, n, a) {
                                                        var r, o;
                                                        if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                        if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                            if (e.name === aD.a) {
                                                                let n = (0, rU.a)(e.attributes),
                                                                    a = (0, rU.b)(e.attributes),
                                                                    r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, aD.l)(e) === a);
                                                                if (null == r) return "";
                                                                let o = (0, aD.i)(r);
                                                                return "hidden" === o || "block" === o ? "" : (0, aD.j)(r) ?? ""
                                                            }
                                                            return e.name === rL.a ? (0, rW.a)(e.attributes, "label") ?? "" : e.name === rL.b || e.name === rL.c ? "" : e.name === rG.a ? e.text ?? "" : null
                                                        }(t, n) ?? t.raw;
                                                        if ("tokens" in t && Array.isArray(t.tokens)) return e(t.tokens, t.raw, n, a);
                                                        if ("table" === t.type) return e([...t.header, ...t.rows.flat()].flatMap(e => e.tokens), t.raw, n, a);
                                                        if (!("list" === (o = t).type && "items" in o && Array.isArray(o.items))) return t.raw;
                                                        let s = "",
                                                            i = 0;
                                                        for (let r of t.items) {
                                                            let o = t.raw.indexOf(r.raw, i); - 1 !== o && (s += t.raw.slice(i, o), s += e(r.tokens, r.raw, n, a), i = o + r.raw.length)
                                                        }
                                                        return s + t.raw.slice(i)
                                                    }(i, a, r), s = t + i.raw.length)
                                                }
                                                return o + n.slice(s)
                                            }(n, e.content, e.contentReferences, e => (a.push(e), r))),
                                            s = 0 === a.length ? void 0 : o.split(r);
                                        return 0 === o.length && 0 === a.length ? [] : [{
                                            unitId: (0, r_.a)("assistant", t),
                                            text: s?.join(" ") ?? o,
                                            textChunks: s,
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
                        ...o,
                        search: async (e, t) => (await r?.(t?.signal), t?.signal?.throwIfAborted(), o.search(e, t))
                    }
                }({
                    getTurns: tl,
                    routeContextId: tp,
                    scrollAdapter: {
                        scrollToTurn: td,
                        getTurnContainer: th,
                        onNavigate: tr
                    },
                    ensureHistory: e
                }), z[13] = tr, z[14] = V, z[15] = tl, z[16] = th, z[17] = eu, z[18] = eg, z[19] = eM, z[20] = td, z[21] = tp, z[22] = u
            } else u = z[22];
            let tm = u;
            z[28] !== tm.contextId ? (h = {
                containerRef: e4,
                contextId: tm.contextId
            }, z[28] = tm.contextId, z[29] = h) : h = z[29], (0, rh.a)(h);
            let tg = eK && null == ew,
                tf = eW && tg && !eV,
                tv = (0, rm.a)(),
                ty = Q?.index;
            z[30] !== V || z[31] !== eF || z[32] !== ee || z[33] !== tv || z[34] !== ty ? (p = {
                conversationId: V,
                sectionIndex: ty,
                hasRenderableTurns: eF,
                isCoveredByFloatingPanel: ee,
                shouldReduceMotion: tv,
                containerRef: e4
            }, z[30] = V, z[31] = eF, z[32] = ee, z[33] = tv, z[34] = ty, z[35] = p) : p = z[35];
            let tb = function(e) {
                    let t, n, a, o = (0, r.c)(12),
                        {
                            conversationId: s,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: d,
                            shouldReduceMotion: u,
                            containerRef: h
                        } = e,
                        p = (0, oT.a)(0);
                    o[0] !== s || o[1] !== i ? (t = {
                        conversationId: s,
                        sectionIndex: i
                    }, o[0] = s, o[1] = i, o[2] = t) : t = o[2];
                    let m = (0, c.useRef)(t);
                    return o[3] !== h || o[4] !== s || o[5] !== l || o[6] !== d || o[7] !== i || o[8] !== p || o[9] !== u ? (n = () => {
                        let e;
                        if (!l) return;
                        let t = m.current;
                        m.current = {
                            conversationId: s,
                            sectionIndex: i
                        };
                        let n = h.current;
                        if (null == n || u || d || t.conversationId !== s || null == t.sectionIndex || null == i || t.sectionIndex === i) return;
                        let a = Math.sign(i - t.sectionIndex),
                            r = () => {
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(oA) && 0 !== n.clientWidth && (o.disconnect(), p.set(a * n.clientWidth), e = (0, oE.a)(p, 0, {
                                    duration: .3,
                                    ease: oP.d
                                }))
                            },
                            o = new MutationObserver(r);
                        return o.observe(n, {
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }), r(), () => {
                            o.disconnect(), e?.stop(), p.set(0)
                        }
                    }, a = [s, i, l, u, d, p, h], o[3] = h, o[4] = s, o[5] = l, o[6] = d, o[7] = i, o[8] = p, o[9] = u, o[10] = n, o[11] = a) : (n = o[10], a = o[11]), (0, c.useLayoutEffect)(n, a), p
                }(p),
                tx = tg && eV,
                [tC, tw] = (0, c.useState)(null),
                [t_, tS] = (0, c.useState)(null),
                [tI, tj] = (0, c.useState)(null),
                tT = ep && tg && !ed && !eV && !eW,
                [tE, tP] = (0, c.useState)(null);
            z[36] !== V || z[37] !== eu || z[38] !== ev ? (m = ev && !eu ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rl, {
                    conversationId: V
                }, V)
            }) : null, z[36] = V, z[37] = eu, z[38] = ev, z[39] = m) : m = z[39];
            let tA = m;
            z[40] !== ew || z[41] !== tA ? (g = null != ew ? (0, a.jsxs)(a.Fragment, {
                children: [tA, ew]
            }) : null, z[40] = ew, z[41] = tA, z[42] = g) : g = z[42];
            let tM = g;
            z[43] !== Z || z[44] !== tM || z[45] !== J || z[46] !== V || z[47] !== ei || z[48] !== eT || z[49] !== eI || z[50] !== el || z[51] !== tA || z[52] !== tC || z[53] !== eu || z[54] !== eW || z[55] !== et || z[56] !== eV || z[57] !== eg || z[58] !== te || z[59] !== tT || z[60] !== eE || z[61] !== e5 || z[62] !== tc || z[63] !== Q || z[64] !== eK || z[65] !== tx || z[66] !== tf || z[67] !== eY ? (f = tM ?? (eK ? (0, a.jsxs)(np.a.Provider, {
                value: el.at(-1) ?? null,
                children: [et || eV ? null : (0, a.jsx)(rp.a, {
                    onNavigate: tc
                }, V), eV ? null : J, eE({
                    headerContent: tA,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tT ? (0, a.jsx)("div", {
                            ref: tj,
                            className: "empty:hidden"
                        }) : null, null != Q ? (0, a.jsx)(au, {
                            conversationId: V,
                            placement: "composer",
                            canStartSection: Q.canStart
                        }) : null, Z, eW || null == ei ? null : (0, a.jsx)(oC.GptPluginMigrationBanner, {
                            gizmoId: ei
                        }), tx && eI]
                    }),
                    followupPortalTarget: tC,
                    takeoverDisclaimerRef: tP,
                    showVoiceStage: !tf,
                    voiceDisclaimer: eW && !tf ? eT : void 0,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(r3, {
                            entries: el,
                            historyLoader: eg || eu ? null : (0, a.jsx)(oS.a, {
                                conversationId: V
                            }),
                            isVisible: t,
                            rendersWidgets: "floating" === eY,
                            onVisibilityChange: e$
                        }, V)
                    },
                    onSubmit: () => {
                        e5?.place(), te.acceptSubmit()
                    },
                    onSubmitError: e5?.clear
                })]
            }) : tA), z[43] = Z, z[44] = tM, z[45] = J, z[46] = V, z[47] = ei, z[48] = eT, z[49] = eI, z[50] = el, z[51] = tA, z[52] = tC, z[53] = eu, z[54] = eW, z[55] = et, z[56] = eV, z[57] = eg, z[58] = te, z[59] = tT, z[60] = eE, z[61] = e5, z[62] = tc, z[63] = Q, z[64] = eK, z[65] = tx, z[66] = tf, z[67] = eY, z[68] = f) : f = z[68];
            let tk = f;
            z[69] !== V || z[70] !== eu || z[71] !== ee || z[72] !== en || z[73] !== eH ? (v = void 0, z[69] = V, z[70] = eu, z[71] = ee, z[72] = en, z[73] = eH, z[74] = v) : v = z[74];
            let tR = v,
                tN = null == Q ? oS.a : ad,
                tO = ee || void 0;
            z[75] === Symbol.for("react.memo_cache_sentinel") ? (y = null, z[75] = y) : y = z[75], z[76] !== V || z[77] !== eV || z[78] !== D ? (b = D && !eV ? (0, a.jsx)(t9.a, {
                conversationId: V
            }) : null, z[76] = V, z[77] = eV, z[78] = D, z[79] = b) : b = z[79], z[80] !== ew || z[81] !== V || z[82] !== eu || z[83] !== en ? (x = en || eu || null != ew ? null : (0, a.jsx)(ov, {
                conversationId: V
            }, V), z[80] = ew, z[81] = V, z[82] = eu, z[83] = en, z[84] = x) : x = z[84], z[85] !== V || z[86] !== eu || z[87] !== eN || z[88] !== eg ? (C = eN || eg || eu ? null : (0, a.jsx)(oI, {
                conversationId: V
            }), z[85] = V, z[86] = eu, z[87] = eN, z[88] = eg, z[89] = C) : C = z[89], z[90] !== V || z[91] !== el || z[92] !== eu || z[93] !== ts || z[94] !== ez || z[95] !== eN || z[96] !== en || z[97] !== tc || z[98] !== tt ? (w = en || eN || eu ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(aw, {
                    conversationId: V,
                    entries: el,
                    turnListApi: tt
                }), (0, a.jsx)(ry.a, {
                    ready: !ez && ts && null != tt && el.length > 0,
                    onNavigate: tc
                })]
            }), z[90] = V, z[91] = el, z[92] = eu, z[93] = ts, z[94] = ez, z[95] = eN, z[96] = en, z[97] = tc, z[98] = tt, z[99] = w) : w = z[99], z[100] !== tN || z[101] !== ek || z[102] !== ew || z[103] !== tr || z[104] !== e0 || z[105] !== X || z[106] !== K || z[107] !== eZ || z[108] !== V || z[109] !== eD || z[110] !== tm || z[111] !== eT || z[112] !== eI || z[113] !== el || z[114] !== tk || z[115] !== eR || z[116] !== eF || z[117] !== eu || z[118] !== Y.canRetryConversationLoad || z[119] !== e1 || z[120] !== ta || z[121] !== to || z[122] !== eW || z[123] !== eq || z[124] !== ez || z[125] !== eN || z[126] !== ee || z[127] !== et || z[128] !== eV || z[129] !== en || z[130] !== ep || z[131] !== eg || z[132] !== ef || z[133] !== ev || z[134] !== tR || z[135] !== eb || z[136] !== L || z[137] !== te || z[138] !== tI || z[139] !== t_ || z[140] !== tT || z[141] !== e5 || z[142] !== e_.isChatPaneHidden || z[143] !== eM || z[144] !== eo || z[145] !== tu || z[146] !== tb || z[147] !== eP || z[148] !== ex || z[149] !== U || z[150] !== tv || z[151] !== eK || z[152] !== e2 || z[153] !== tg || z[154] !== tx || z[155] !== tf || z[156] !== tE || z[157] !== ea || z[158] !== tt || z[159] !== H ? (_ = H?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!U && H.fullscreenContent, tk]
            }) : (0, a.jsxs)(rb.a, {
                viewportOverlay: et || en || ev || eu || null != ew || ee || eV ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(ox, {
                        conversationId: V
                    }, V)
                }),
                hideTranscript: et,
                active: !eN && (!eF || null != tt),
                presentation: ea ?? (en ? "compact" : "default"),
                contentX: K,
                composerFade: !1,
                supportsComposerExpansion: tg && !eV && null == H,
                footerPlacement: e0 ? e1 : "bottom",
                initialOffset: ta,
                scrollOrigin: eo,
                onScroll: te.onScroll,
                onUserScrollIntent: tr,
                scrollToBottomButton: !eK || eV || tf ? void 0 : {
                    isWorking: ef
                },
                threadEndContent: eW ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tw,
                        className: em.a
                    }), null == tE ? eT : (0, af.createPortal)(eT, tE)]
                }),
                footerLeadingContent: tf ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: em.a,
                            children: (0, a.jsx)(rf.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: eT
                    })]
                }) : tR,
                footer: tk,
                children: [en || eN || null != ex ? null : (0, a.jsx)(rF, {
                    conversationId: V,
                    entries: el,
                    isConversationFetching: ez,
                    turnListApi: tt
                }), (0, a.jsxs)(ag.a.div, {
                    ref: e4,
                    style: {
                        x: tb
                    },
                    "data-chatgpt-conversation-selection-target": V,
                    className: (0, am.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", en && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, t4.K)(eM, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, t4.K)(eM, "conversation")
                    },
                    children: [(0, a.jsxs)(c.Suspense, {
                        fallback: (0, a.jsx)(rg.LoadingPage, {
                            debugName: "ChatGptConversationPage",
                            fillParent: !0
                        }),
                        children: [en || eN ? null : (0, a.jsx)(ru.a, {
                            conversationSource: tm
                        }), ee || e_.isChatPaneHidden || eg || eu ? null : (0, a.jsx)(tN, {
                            conversationId: V
                        }), (0, a.jsx)(oO.b, {
                            conversationId: V
                        }), eu && eF ? (0, a.jsx)(oN, {
                            sharedConversationId: ex
                        }) : null, null == eb ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: em.a,
                                children: eb
                            })
                        }), null == eZ || eN ? null : (0, a.jsx)(rx.a, {
                            conversationId: V,
                            branchSource: {
                                conversationId: eZ.metadata.source_conversation_id,
                                title: eZ.metadata.source_conversation_title,
                                gizmoId: eZ.metadata.source_conversation_gizmo_id,
                                ownerId: eZ.metadata.source_conversation_owner_id
                            }
                        }), eR ? (0, a.jsx)(rr, {
                            isFetching: ez,
                            isSharedConversation: ep,
                            onRetry: Y.canRetryConversationLoad ? () => {
                                ek.refetch({
                                    cancelRefetch: !1
                                })
                            } : void 0
                        }) : eN ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": eD,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(rg.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : eF ? (0, a.jsxs)(ow.a, {
                            value: tu,
                            children: [en || ee ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eg || eu ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(a8, {
                                        conversationId: V
                                    })
                                }), (0, a.jsx)(a5, {
                                    entries: el,
                                    title: L,
                                    TurnRowComponent: r2
                                })]
                            }), (0, a.jsx)(oj.a, {
                                enabled: tT,
                                aboveComposer: tI,
                                belowMessage: t_,
                                children: (0, a.jsx)(od, {
                                    viewportRef: e3,
                                    isTurnActive: ef,
                                    conversationId: V,
                                    entries: el,
                                    readingPosition: te,
                                    isInlinePreview: en,
                                    onVisibleContentReady: () => ti(!0),
                                    responseSpacerState: e5
                                })
                            }), tT ? (0, a.jsx)("div", {
                                ref: tS,
                                className: "empty:hidden"
                            }) : null]
                        }) : e2 && null == eZ && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            children: (0, a.jsx)($.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation",
                                description: "Empty state when a ChatGPT conversation has no user or assistant text messages"
                            })
                        }), !tx && eI, (0, a.jsx)(og.a, {
                            conversationId: X,
                            isWorkConversation: ev
                        }), eP]
                    }), en ? null : (0, a.jsx)(rz.a, {
                        preserveResponseViewport: e => e3.current?.holdForResponse(e) ?? !1,
                        conversationId: V,
                        initialPlacementKey: to,
                        isActiveVoiceConversation: eW && eq,
                        isLoadingHistory: eN,
                        latestUserTurnKey: el.findLast(oL)?.turnKey,
                        onResponseSpacerStateChange: e6
                    }), tf ? (0, a.jsx)(ag.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tv ? rv.c : rv.b
                    }) : null]
                })]
            }), z[100] = tN, z[101] = ek, z[102] = ew, z[103] = tr, z[104] = e0, z[105] = X, z[106] = K, z[107] = eZ, z[108] = V, z[109] = eD, z[110] = tm, z[111] = eT, z[112] = eI, z[113] = el, z[114] = tk, z[115] = eR, z[116] = eF, z[117] = eu, z[118] = Y.canRetryConversationLoad, z[119] = e1, z[120] = ta, z[121] = to, z[122] = eW, z[123] = eq, z[124] = ez, z[125] = eN, z[126] = ee, z[127] = et, z[128] = eV, z[129] = en, z[130] = ep, z[131] = eg, z[132] = ef, z[133] = ev, z[134] = tR, z[135] = eb, z[136] = L, z[137] = te, z[138] = tI, z[139] = t_, z[140] = tT, z[141] = e5, z[142] = e_.isChatPaneHidden, z[143] = eM, z[144] = eo, z[145] = tu, z[146] = tb, z[147] = eP, z[148] = ex, z[149] = U, z[150] = tv, z[151] = eK, z[152] = e2, z[153] = tg, z[154] = tx, z[155] = tf, z[156] = tE, z[157] = ea, z[158] = tt, z[159] = H, z[160] = _) : _ = z[160], z[161] !== ee || z[162] !== tO || z[163] !== b || z[164] !== x || z[165] !== C || z[166] !== w || z[167] !== _ ? (S = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": tO,
                inert: ee,
                children: [y, b, x, C, w, _]
            }), z[161] = ee, z[162] = tO, z[163] = b, z[164] = x, z[165] = C, z[166] = w, z[167] = _, z[168] = S) : S = z[168];
            let tB = S,
                tF = "main" === eY;
            return z[169] !== tF ? (I = {
                presentation: "main",
                rendersWidgets: tF
            }, z[169] = tF, z[170] = I) : I = z[170], z[171] !== tB ? (j = (0, a.jsx)(rc.a, {
                children: tB
            }), z[171] = tB, z[172] = j) : j = z[172], z[173] !== I || z[174] !== j ? (T = (0, a.jsx)(s.b, {
                scope: rQ,
                value: I,
                children: j
            }), z[173] = I, z[174] = j, z[175] = T) : T = z[175], T
        }

        function oL(e) {
            let {
                turn: t
            } = e;
            return t.items.some(oD)
        }

        function oD(e) {
            return "user-message" === e.type
        }
        var oH = n("NRIv"),
            oW = n("DrWu"),
            oq = n("MrzV"),
            oU = n("TSib"),
            oK = n("jEN2"),
            oV = n("kphc"),
            oQ = n("yWTM"),
            o$ = n("xqnZ"),
            oY = n("AOHi"),
            oX = n("iLYI");
        n("i1of");
        var oJ = n("u9iS"),
            oZ = n("FS1B"),
            o0 = n("vknh"),
            o1 = n("gCr7"),
            o2 = n("fNPc"),
            o3 = n("vVgo"),
            o4 = n("T33u"),
            o5 = n("EpL9"),
            o6 = n("svjy");

        function o7(e) {
            let {
                conversationId: t,
                courseId: n
            } = e;
            return `chatgpt-learning-course:${JSON.stringify([t,n])}`
        }
        let o8 = (0, s.d)(q.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(eD.i) && n(eD.j) && n(eL.l.activeTab$)?.tabId === o7(e)
            }),
            o9 = (0, tg.a)(async () => {
                let {
                    CoursePanelTab: e
                } = await Promise.all([n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(882456), n.e(145049), n.e(744644), n.e(148673), n.e(91753), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(509282), n.e(802614)]).then(n.bind(n, "lbEC"));
                return e
            }, {
                propagateLoadError: !0
            }),
            se = (0, o5.j)("chatgpt-learning-course", o9, {
                dropDestinations: ["right"],
                isAvailable: (e, t) => "chatgpt-thread" === e.value.routeKind && (null == t || e.value.conversationId === t.conversationId),
                paneWidth: () => ({
                    defaultWidth: 480,
                    storageKey: "app-shell:learning-course-width"
                }),
                showInNewTabLauncher: !1,
                open: st
            });

        function st(e, t) {
            let {
                conversationId: n,
                courseId: r
            } = t, {
                preserveFocus: o = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = e.get(y.f), i = e.get(y.j), l = () => "chatgpt-thread" === e.value.routeKind && e.value.conversationId === n && e.get(ea.c)?.pathname === e.value.pathname && e.get(y.f) === s && e.get(y.j) === i;
            if (!l() || "" === r) return;
            let c = o7({
                conversationId: n,
                courseId: r
            });
            e.get(o8, {
                conversationId: n,
                courseId: r
            }) ? eL.l.closeTab(e, c) : (0, eL.h)(e, se, {
                target: "right",
                revealAndFocus: !0,
                preserveFocus: o,
                shouldOpen: l,
                id: c,
                icon: (0, a.jsx)(tm.ob, {}),
                title: e.get(o6.a).formatMessage({
                    id: "chatgptConversations.coursePanel.title",
                    defaultMessage: "Lesson plan",
                    description: "Title of the learning course side panel"
                }),
                props: {
                    conversationId: n,
                    courseId: r,
                    accountId: s,
                    userId: i
                }
            })
        }
        var sn = n("MgyE"),
            sa = n("gyrn"),
            sr = n("ckwE"),
            so = n("kHi2");

        function ss(e) {
            let t, n = (0, r.c)(3),
                {
                    children: o
                } = e,
                [s] = (0, c.useState)(si);
            return n[0] !== s || n[1] !== o ? (t = (0, a.jsx)(a3.a, {
                value: s,
                children: o
            }), n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
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
            let t, n, o, i = (0, r.c)(8),
                {
                    children: l,
                    courseChatId: c
                } = e,
                d = (0, s.y)(q.a);
            i[0] !== c || i[1] !== d ? (t = "chatgpt-thread" === d.value.routeKind && d.value.conversationId === c ? d.get(so.b) : void 0, i[0] = c, i[1] = d, i[2] = t) : t = i[2];
            let u = t;
            return i[3] !== l ? (n = (0, a.jsx)(ss, {
                children: l
            }), i[3] = l, i[4] = n) : n = i[4], i[5] !== u || i[6] !== n ? (o = (0, a.jsx)(sr.a, {
                binding: u,
                children: n
            }), i[5] = u, i[6] = n, i[7] = o) : o = i[7], o
        }
        var sc = n("MDmT");
        n("CSxw");
        var sd = n("NqfB"),
            su = n("JEFL"),
            sh = n("moBM");
        let sp = '[data-markdown-text-style="assistant-message"]',
            sm = (0, s.d)(er.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(ej.N, n)?.[a]?.message ?? null
            });

        function sg(e) {
            let t, n, o = (0, r.c)(5),
                s = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return o[0] !== e ? (t = t => (0, a.jsx)(sf, {
                ...e,
                selection: t
            }), o[0] = e, o[1] = t) : t = o[1], o[2] !== s || o[3] !== t ? (n = (0, a.jsx)(sd.a, {
                align: "start",
                targetSelector: s,
                children: t
            }), o[2] = s, o[3] = t, o[4] = n) : n = o[4], n
        }

        function sf(e) {
            let t, o, i, l, c, u, h, p = (0, r.c)(30),
                {
                    conversationId: m,
                    moreDetailsEnabled: g,
                    onAddSelectedText: f,
                    selection: v
                } = e,
                y = (0, s.y)(q.a),
                b = (0, d.a)(),
                x = (0, eu.f)("4290238484"),
                C = (0, eu.f)("473637331"),
                w = (0, s.z)(sh.b),
                _ = (0, s.x)(ej.y, m);
            p[0] !== _ || p[1] !== w || p[2] !== y ? (t = w && "tpp" === _ && "chatgpt-thread" === y.value.routeKind && null == y.value.workSideChat && !0, p[0] = _, p[1] = w, p[2] = y, p[3] = t) : t = p[3];
            let S = t;
            p[4] !== m || p[5] !== v.selectionRange ? (o = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, o = a?.closest(sp);
                if (n.collapsed || null == o || !o.isConnected || o !== r?.closest(sp)) return null;
                let s = o.parentElement,
                    i = s?.getAttribute("data-chatgpt-selection-message-id");
                return !i || s?.getAttribute("data-chatgpt-selection-conversation-id") !== t || [...o.querySelectorAll('[data-writing-block-variant], [data-conversation-component="learning"], [contenteditable="true"], [data-markdown-copy="exclude"]')].some(e => n.intersectsNode(e)) ? null : {
                    markdownElement: o,
                    messageId: i
                }
            }({
                conversationId: m,
                range: v.selectionRange
            }), p[4] = m, p[5] = v.selectionRange, p[6] = o) : o = p[6];
            let I = o,
                j = I?.messageId ?? null;
            p[7] !== m || p[8] !== j ? (i = {
                conversationId: m,
                messageId: j
            }, p[7] = m, p[8] = j, p[9] = i) : i = p[9];
            let T = (0, s.x)(sm, i),
                E = (0, s.x)(ej.j, m),
                P = x && g && null != E && null != I && T?.author.role === "assistant";
            return p[10] !== S || p[11] !== y ? (l = S ? e => {
                n.e(971224).then(n.bind(n, "f8of")).then(t => {
                    let {
                        createAndOpenWorkSideChat: n
                    } = t;
                    return n(y, {
                        target: "right",
                        selectedText: e
                    })
                })
            } : void 0, p[10] = S, p[11] = y, p[12] = l) : l = p[12], p[13] !== P || p[14] !== C || p[15] !== f || p[16] !== v.selectionRange || p[17] !== I ? (c = !P || C ? e => {
                f(e, I?.messageId, null == I ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of rN(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(I.markdownElement, v.selectionRange, e))
            } : void 0, p[13] = P, p[14] = C, p[15] = f, p[16] = v.selectionRange, p[17] = I, p[18] = c) : c = p[18], p[19] !== P || p[20] !== m || p[21] !== b || p[22] !== y || p[23] !== I ? (u = P ? e => {
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
                        messageId: I.messageId,
                        query: b.formatMessage({
                            id: "chatgpt.selection.moreDetailsTitle",
                            defaultMessage: "More details",
                            description: "Title of the side panel explaining selected text from an assistant response"
                        }),
                        shouldBlockExternalEgress: y.get(e8.e, m),
                        sourceConversationId: m
                    })
                })
            } : void 0, p[19] = P, p[20] = m, p[21] = b, p[22] = y, p[23] = I, p[24] = u) : u = p[24], p[25] !== v.selectedText || p[26] !== l || p[27] !== c || p[28] !== u ? (h = (0, a.jsx)(su.a, {
                conversationTerminology: "chat",
                selectedText: v.selectedText,
                onOpenSideChat: l,
                onAddSelectedText: c,
                onMoreDetails: u
            }), p[25] = v.selectedText, p[26] = l, p[27] = c, p[28] = u, p[29] = h) : h = p[29], h
        }
        var sv = n("Fjze");

        function sy(e) {
            let t, n, a, o = (0, r.c)(7),
                {
                    sharedConversationId: i
                } = e,
                l = (0, s.y)(er.a),
                d = null != i;
            o[0] !== l || o[1] !== i ? (t = () => {
                null != i && (nF.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: i
                    }
                }).then(() => l.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(sb), (0, eJ.a)(l, sv.a, {
                    sharedConversationId: i
                }))
            }, o[0] = l, o[1] = i, o[2] = t) : t = o[2];
            let u = (0, c.useEffectEvent)(t);
            return o[3] !== u ? (n = () => {
                u()
            }, o[3] = u, o[4] = n) : n = o[4], o[5] !== d ? (a = [d], o[5] = d, o[6] = a) : a = o[6], (0, c.useEffect)(n, a), null
        }

        function sb() {}
        var sx = n("GigQ"),
            sC = n("JKdL"),
            sw = n("FGv0"),
            s_ = n("r9i9"),
            sS = n("tdfh"),
            sI = n("uQqo"),
            sj = n("yi1v"),
            sT = n("hMfc");

        function sE(e) {
            let t, o, i, l, u, h = (0, r.c)(16),
                {
                    data: p
                } = e,
                m = (0, s.y)(er.a),
                g = (0, d.a)();
            h[0] !== g ? (t = g.formatMessage(X.a.headerShare), h[0] = g, h[1] = t) : t = h[1];
            let f = t,
                [v, y] = (0, c.useState)(!1);
            return h[2] !== p || h[3] !== v || h[4] !== m ? (o = () => {
                v || (y(!0), (async function(e, t) {
                    let a = t.sharedPost,
                        [r, ...o] = a?.attachments[0]?.kind === "media_generation" ? (0, sI.a)(a, (0, sI.b)(a)) : [],
                        s = () => (0, s_.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId, 1 / 0, void 0, (0, ap.b)(e.get, t.dialogProps.serverConversationId)),
                        i = crypto.randomUUID();
                    (0, oM.c)(e, {
                        attachmentType: t.attachmentType,
                        contentType: t.contentType,
                        shareId: t.shareId,
                        shareSessionId: i
                    });
                    let l = t.dialogProps.receiverShareLink;
                    if ((0, sj.a)() && null != l && ("conversation" === l.contentType || "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE" === t.attachmentType)) {
                        if ("unsupported" !== await (0, sj.b)(e, {
                                url: l.shareLinkUrl,
                                title: t.dialogProps.title ?? void 0
                            }, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                attachmentType: t.attachmentType,
                                contentType: t.contentType,
                                shareId: t.shareId,
                                shareSessionId: i,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER"
                            })) return;
                        if ("conversation" === l.contentType) return void(0, nB.f)(e, sS.a, {
                            ...t.dialogProps,
                            shareSessionId: i
                        })
                    }
                    if (l?.contentType === "conversation") {
                        let a = (0, oM.b)(e, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                shareId: t.shareId,
                                shareSessionId: i,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                                usedExistingLink: !0,
                                omitSheetType: !0
                            }),
                            r = await (0, sw.a)(Promise.resolve(l.shareLinkUrl));
                        if (a({
                                result: r ? "link-copied" : "copy-failed",
                                shareId: t.shareId
                            }), r) {
                            let {
                                showConversationShareCopiedToast: t
                            } = await n.e(555532).then(n.bind(n, "euaP"));
                            t(e, null, !0 === l.isWorkspaceOnly)
                        } else(0, nB.f)(e, sS.a, {
                            ...t.dialogProps,
                            previewTurns: s(),
                            recoveryShareLink: l,
                            shareSessionId: i
                        });
                        return
                    }(0, nB.f)(e, sS.a, {
                        ...t.dialogProps,
                        image: r?.src == null ? void 0 : {
                            alt: t.dialogProps.title ?? "",
                            item: r,
                            previewSrc: r.src,
                            additionalPublishedPreviewUrls: o.flatMap(e => null == e.src ? [] : [e.src])
                        },
                        previewTurns: null != r ? void 0 : s(),
                        privacyNotices: (0, s_.k)({
                            conversation: t.conversation,
                            projectId: null
                        }),
                        shareSessionId: i
                    })
                })(m, p).finally(() => y(!1)))
            }, h[2] = p, h[3] = v, h[4] = m, h[5] = o) : o = h[5], h[6] !== v ? (i = v ? null : (0, a.jsx)(et.a, {
                asset: sT.a
            }), h[6] = v, h[7] = i) : i = h[7], h[8] !== v || h[9] !== f || h[10] !== o || h[11] !== i ? (l = (0, a.jsx)(tp.a, {
                "aria-label": f,
                color: "ghostActive",
                loading: v,
                size: "toolbar",
                uniform: !0,
                onClick: o,
                children: i
            }), h[8] = v, h[9] = f, h[10] = o, h[11] = i, h[12] = l) : l = h[12], h[13] !== f || h[14] !== l ? (u = (0, a.jsx)(th.a, {
                content: f,
                children: l
            }), h[13] = f, h[14] = l, h[15] = u) : u = h[15], u
        }
        var sP = n("d107"),
            sA = n("MVHH"),
            sM = n("rhKI"),
            sk = n("PP3M"),
            sR = n("CFOe"),
            sN = n("JNtf"),
            sO = n("mUDD");

        function sB(e) {
            let t, n, o, s, i, l, c, d, u, h, p, m, g, f = (0, r.c)(31),
                {
                    canSave: v,
                    isPending: y,
                    onCancel: b,
                    onClose: x,
                    onSave: C
                } = e;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)($.a, {
                id: "chatgptConversations.temporaryChat.save.close",
                defaultMessage: "Close",
                description: "Accessible label for the close button in the temporary chat save confirmation dialog."
            }), f[0] = t) : t = f[0], f[1] !== y || f[2] !== x ? (n = e => {
                e || y || x()
            }, f[1] = y, f[2] = x, f[3] = n) : n = f[3];
            let w = !y;
            f[4] !== v || f[5] !== C ? (o = e => {
                e.preventDefault(), v && C()
            }, f[4] = v, f[5] = C, f[6] = o) : o = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(sN.e, {
                children: (0, a.jsx)($.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?",
                    description: "Title of the confirmation dialog for converting a temporary ChatGPT conversation into a regular saved chat."
                })
            }), f[7] = s) : s = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(sO.e, {
                children: (0, a.jsx)(sO.d, {
                    className: "select-none",
                    title: s,
                    subtitle: (0, a.jsx)(sN.d, {
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
            }), f[17] = y, f[18] = _, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(sO.e, {
                children: (0, a.jsxs)(sO.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== o ? (m = (0, a.jsxs)(sO.b, {
                as: "form",
                onSubmit: o,
                children: [i, p]
            }), f[23] = p, f[24] = o, f[25] = m) : m = f[25], f[26] !== y || f[27] !== m || f[28] !== n || f[29] !== w ? (g = (0, a.jsx)(sN.a, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: w,
                size: "narrow",
                children: m
            }), f[26] = y, f[27] = m, f[28] = n, f[29] = w, f[30] = g) : g = f[30], g
        }

        function sF(e) {
            (0, tc.e)(e).catch(() => {
                e0.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function sz(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(sG, {
                        conversationId: o
                    })
                })]
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function sG(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: o
                } = e;
            return (0, s.z)(sk.e) ? (n[0] !== o ? (t = (0, a.jsx)(sL, {
                conversationId: o
            }), n[0] = o, n[1] = t) : t = n[1], t) : null
        }

        function sL(e) {
            let t, n, o, i, l, h, p, m, g, f, v, y, b, x = (0, r.c)(49),
                {
                    conversationId: C
                } = e,
                w = (0, s.y)(er.a),
                _ = (0, d.a)(),
                S = (0, u._)(),
                [I, j] = (0, c.useState)(!1),
                [T, P] = (0, c.useState)(!1),
                [A, M] = (0, c.useState)(!1),
                [k, R] = (0, c.useState)(!1),
                N = (0, c.useRef)(!1),
                O = (0, s.z)(nL.p).data,
                B = (0, s.x)(ej.j, C),
                F = (0, s.x)(ej.Y, C),
                z = (0, s.x)(ej.J, C),
                G = (0, s.x)(to.j, C);
            x[0] !== C || x[1] !== w ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (w.get(ej.J, C) || w.get(to.j, C) || t !== w.get(ej.j, C) || n !== w.get(ej.Y, C)) throw Error("Cannot save an unavailable temporary chat message");
                    return nF.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: sU
                    }).then(sq)
                },
                retry: sW
            }, x[0] = C, x[1] = w, x[2] = t) : t = x[2];
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
            x[5] !== O?.eligibleAnnouncements ? (o = O?.eligibleAnnouncements?.includes(nL.h), x[5] = O?.eligibleAnnouncements, x[6] = o) : o = x[6];
            let q = !0 === o,
                U = !k && (A || q && H);
            x[7] !== C || x[8] !== A || x[9] !== w || x[10] !== U ? (i = () => {
                if (!U || A || N.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || N.current || (N.current = !0, (0, eJ.a)(w, sA.Bb, {
                        personalizationMode: (0, sM.a)((0, sk.k)(w, C))
                    }), M(!0), sF(w))
                }), () => {
                    e = !0
                }
            }, l = [C, A, w, U], x[7] = C, x[8] = A, x[9] = w, x[10] = U, x[11] = i, x[12] = l) : (i = x[11], l = x[12]), (0, c.useEffect)(i, l), x[13] !== w ? (h = () => {
                R(!0), N.current || (N.current = !0, sF(w))
            }, x[13] = w, x[14] = h) : h = x[14];
            let K = h;
            x[15] !== H || x[16] !== C || x[17] !== _ || x[18] !== S || x[19] !== L || x[20] !== w || x[21] !== F || x[22] !== B ? (p = async function() {
                let e;
                if (!H || null == B || null == F) return;
                let t = (0, sM.a)((0, sk.k)(w, C));
                (0, eJ.a)(w, sA.Cb, {
                    personalizationMode: t
                });
                try {
                    e = (await L({
                        sourceConversationId: B,
                        selectedLeafId: F
                    })).conversation_id
                } catch (e) {
                    (0, eJ.a)(w, sA.Db, {
                        personalizationMode: t,
                        failureCategory: (0, sM.b)(e)
                    }), w.get(en.f).danger(_.formatMessage({
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
                P(!0), j(!1), (0, Z.G)(w), (0, Z.J)(w, B, "remove"), (0, Z.J)(w, e, "refresh"), S((0, eT.c)(e), {
                    replace: !0
                }), w.get(en.f).success(_.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history.",
                    description: "Success toast confirming that a formerly temporary ChatGPT conversation is now saved in regular history."
                })), nF.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: F
                    }
                }).then(sH).then(t => {
                    (0, ej.bc)({
                        scope: w,
                        conversationId: e,
                        title: t
                    }), w.query.setData(tc.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, Z.G)(w), (0, Z.J)(w, e, "refresh")
                }).catch(sD)
            }, x[15] = H, x[16] = C, x[17] = _, x[18] = S, x[19] = L, x[20] = w, x[21] = F, x[22] = B, x[23] = p) : p = x[23];
            let V = p,
                Y = !H;
            x[24] !== C || x[25] !== w || x[26] !== U ? (m = () => {
                (0, eJ.a)(w, sA.Fb, {
                    personalizationMode: (0, sM.a)((0, sk.k)(w, C)),
                    coachMarkVisible: U
                }), j(!0)
            }, x[24] = C, x[25] = w, x[26] = U, x[27] = m) : m = x[27], x[28] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsx)(E.b, {
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
            return x[33] !== K || x[34] !== _ || x[35] !== W || x[36] !== X || x[37] !== U ? (v = U ? (0, a.jsx)(sR.a, {
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
            }), x[33] = K, x[34] = _, x[35] = W, x[36] = X, x[37] = U, x[38] = v) : v = x[38], x[39] !== H || x[40] !== C || x[41] !== V || x[42] !== I || x[43] !== D || x[44] !== w ? (y = I ? (0, a.jsx)(sB, {
                canSave: H,
                isPending: D,
                onCancel: () => {
                    (0, eJ.a)(w, sA.Ab, {
                        personalizationMode: (0, sM.a)((0, sk.k)(w, C))
                    })
                },
                onClose: () => j(!1),
                onSave: () => void V()
            }) : null, x[39] = H, x[40] = C, x[41] = V, x[42] = I, x[43] = D, x[44] = w, x[45] = y) : y = x[45], x[46] !== v || x[47] !== y ? (b = (0, a.jsxs)(a.Fragment, {
                children: [v, y]
            }), x[46] = v, x[47] = y, x[48] = b) : b = x[48], b
        }

        function sD() {}

        function sH(e) {
            return rC.object({
                title: rC.string()
            }).parse(e).title
        }

        function sW(e, t) {
            return e < 1 && t instanceof eC.FetchError && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function sq(e) {
            return rC.object({
                conversation_id: rC.string().min(1)
            }).parse(e)
        }

        function sU(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var sK = n("HVBu"),
            sV = n.n(sK),
            sQ = n("ibLK"),
            s$ = n("e1xH"),
            sY = n("BdYu"),
            sX = n("zpMv"),
            sJ = n("hx97");

        function sZ(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var s0 = n("n5iL"),
            s1 = n("iS3k"),
            s2 = n("pDUk"),
            s3 = n("GaCK"),
            s4 = n("Dofq");
        let s5 = (0, tg.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(186197)]).then(n.bind(n, "BhAA"))).ChatGptThreadSummaryPanelBody, {
            fallback: (0, a.jsx)(s1.a.Content, {
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
            errorFallback: (0, a.jsx)(s1.a.Content, {
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

        function s6(e) {
            let t, n, o, s = (0, r.c)(6);
            s[0] !== e ? ({
                readData: n,
                ...t
            } = e, s[0] = e, s[1] = t, s[2] = n) : (t = s[1], n = s[2]);
            let i = (0, s1.b)(),
                [l, d] = (0, c.useState)(null);
            return i && l?.readData !== n && d({
                readData: n,
                data: n()
            }), s[3] !== l || s[4] !== t ? (o = null == l ? null : (0, a.jsx)(s5, {
                ...t,
                data: l.data
            }), s[3] = l, s[4] = t, s[5] = o) : o = s[5], o
        }

        function s7(e) {
            let t, n, o, i = (0, r.c)(15),
                {
                    conversationId: l,
                    composerActions: c,
                    readData: d,
                    display: u,
                    shouldBlockExternalEgress: h,
                    showSources: p
                } = e,
                m = void 0 === p || p,
                g = (0, s.y)(q.a),
                f = (0, eu.f)("2903661647"),
                v = f ? "dynamic-isle" : "summary";
            return i[0] !== g || i[1] !== v ? (t = {
                scope: g,
                layout: v
            }, i[0] = g, i[1] = v, i[2] = t) : t = i[2], i[3] !== c || i[4] !== l || i[5] !== f || i[6] !== d || i[7] !== h || i[8] !== m ? (n = (0, a.jsx)(s6, {
                conversationId: l,
                composerActions: c,
                readData: d,
                isUnifiedDynamicIsleEnabled: f,
                showSources: m,
                shouldBlockExternalEgress: h
            }, l), i[3] = c, i[4] = l, i[5] = f, i[6] = d, i[7] = h, i[8] = m, i[9] = n) : n = i[9], i[10] !== u.shouldHideInlineImmediately || i[11] !== u.shouldShow || i[12] !== t || i[13] !== n ? (o = (0, a.jsx)(s1.a.Root, {
                analytics: t,
                shouldHideInlineImmediately: u.shouldHideInlineImmediately,
                shouldShow: u.shouldShow,
                children: n
            }), i[10] = u.shouldHideInlineImmediately, i[11] = u.shouldShow, i[12] = t, i[13] = n, i[14] = o) : o = i[14], o
        }

        function s8(e) {
            let t, n, o, i = (0, r.c)(22),
                {
                    conversationId: l,
                    composerActions: u,
                    controlledState: h,
                    readData: p,
                    shouldBlockExternalEgress: m,
                    showSources: g
                } = e,
                v = void 0 === g || g,
                y = (0, s.y)(q.a),
                b = (0, c.useContext)(aM.a),
                x = (0, d.a)(),
                C = (0, eu.f)("2903661647"),
                w = (0, s.z)(null == h ? eD.N : null);
            i[0] !== h?.isOpen || i[1] !== w ? (t = h?.isOpen ?? (0, eD.z)(w, !0), i[0] = h?.isOpen, i[1] = w, i[2] = t) : t = i[2];
            let _ = t,
                S = (0, s.z)(s3.b),
                I = h?.isOpen ?? S.isPopoverOpen,
                j = (0, s.x)(s0.f, "togglePinnedSummary");
            (0, sY.b)(y), i[3] !== h || i[4] !== y ? (n = () => {
                null != h ? h.onOpenChange(!h.isOpen) : (0, s4.b)(y)
            }, i[3] = h, i[4] = y, i[5] = n) : n = i[5];
            let T = n;
            return (0, nP.a)("togglePinnedSummary", T), i[6] !== u || i[7] !== b || i[8] !== h || i[9] !== l || i[10] !== x || i[11] !== _ || i[12] !== I || i[13] !== C || i[14] !== S.displayMode || i[15] !== p || i[16] !== y || i[17] !== j || i[18] !== m || i[19] !== v || i[20] !== T ? (o = (0, a.jsx)(f.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                order: 250,
                children: "overlay" === S.displayMode ? (0, a.jsx)(s2.a, {
                    isOpen: I,
                    shouldPreventAutoFocus: h?.shouldPreventAutoFocus,
                    onOpenChange: e => {
                        null != h ? h.onOpenChange(e) : y.set(s3.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                            ...t,
                            isPopoverOpen: e
                        })
                    },
                    trigger: (0, a.jsx)(s1.a.HeaderButton, {
                        analytics: {
                            scope: y
                        },
                        label: x.formatMessage({
                            id: "chatgptConversations.summaryPanel.toggle",
                            defaultMessage: "Toggle summary",
                            description: "Button label for toggling the ChatGPT summary panel"
                        }),
                        pressed: I,
                        shortcut: j
                    }),
                    children: null != p ? (0, a.jsx)(aM.a, {
                        value: b,
                        children: (0, a.jsx)(s1.a.PopoverContent, {
                            analytics: {
                                scope: y,
                                layout: C ? "dynamic-isle" : "summary"
                            },
                            children: (0, a.jsx)(s6, {
                                conversationId: l,
                                composerActions: u,
                                readData: p,
                                isUnifiedDynamicIsleEnabled: C,
                                showSources: v,
                                shouldBlockExternalEgress: m
                            }, l)
                        })
                    }) : null
                }) : (0, a.jsx)(s1.a.HeaderButton, {
                    analytics: {
                        scope: y
                    },
                    label: x.formatMessage({
                        id: "chatgptConversations.summaryPanel.togglePinned",
                        defaultMessage: "Toggle pinned summary",
                        description: "Button label for toggling whether the ChatGPT summary panel reserves layout space"
                    }),
                    pressed: _,
                    shortcut: j,
                    onClick: T
                })
            }), i[6] = u, i[7] = b, i[8] = h, i[9] = l, i[10] = x, i[11] = _, i[12] = I, i[13] = C, i[14] = S.displayMode, i[15] = p, i[16] = y, i[17] = j, i[18] = m, i[19] = v, i[20] = T, i[21] = o) : o = i[21], o
        }
        var s9 = n("JjRy"),
            ie = n.n(s9),
            it = n("G4E3"),
            ia = n("KaH3"),
            ir = n("Yz3b"),
            io = n("ghNX"),
            is = n("KvVi"),
            ii = n("m250"),
            il = n("Ng4B"),
            ic = n("bTKb"),
            id = n("dGDB"),
            iu = n("lIsV");

        function ih(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        var ip = n("J8FU"),
            im = n("Aluh"),
            ig = n("mG6J");

        function iv(e) {
            let t, n, o = (0, r.c)(14),
                {
                    conversationId: l,
                    shouldBlockExternalEgress: c,
                    widgets: d
                } = e,
                u = (0, s.z)(im.b);
            if (c) return null;
            if (o[0] !== u || o[1] !== l || o[2] !== d) {
                let e, n, r;
                o[4] !== u || o[5] !== l ? (e = e => u.has((0, oi.e)(l, e.messageId)), o[4] = u, o[5] = l, o[6] = e) : e = o[6];
                let s = d.filter(e),
                    c = `chatgpt:${l}`;
                o[7] !== c ? (n = (0, i.Ve)(c), o[7] = c, o[8] = n) : n = o[8];
                let h = n;
                o[9] !== h || o[10] !== l ? (r = e => (0, a.jsx)(ig.b, {
                    conversationId: h,
                    chatGptConversationId: l,
                    hostId: "local",
                    item: e
                }, e.messageId), o[9] = h, o[10] = l, o[11] = r) : r = o[11], t = s.map(r), o[0] = u, o[1] = l, o[2] = d, o[3] = t
            } else t = o[3];
            return o[12] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), o[12] = t, o[13] = n) : n = o[13], n
        }
        var iy = n("JVSG"),
            ib = {
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
            ix = n("ebpE");

        function iC() {
            let e, t, n, o, i, l, d, h, g, f, v, y, b, C, w, _ = (0, r.c)(40),
                S = (0, u._)(),
                I = (0, c.useContext)(R.a);
            _[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, _[0] = e) : e = _[0];
            let j = (0, s.x)(m.a, e),
                E = (0, s.z)(x.a),
                P = (0, u.bb)() ?? 0,
                {
                    conversationId: A
                } = (0, u.cb)(),
                {
                    search: M,
                    state: k
                } = (0, u.Y)(),
                N = (0, s.x)(e6.a, A ?? null),
                O = (0, s.x)(null == A || e8.e, N ?? A ?? ""),
                B = k?.archivedConversationPreview === !0;
            _[1] !== M ? (t = (0, eT.i)(M), _[1] = M, _[2] = t) : t = _[2];
            let F = t;
            _[3] !== B || _[4] !== F || _[5] !== A ? (n = null == A || (0, tD.e)(A) || F || B ? null : A, _[3] = B, _[4] = F, _[5] = A, _[6] = n) : n = _[6];
            let {
                data: z
            } = (0, s.x)(tc.chatGptConversationQueryById$, n);
            if (null == A) {
                let e;
                return _[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(u.l, {
                    to: "/",
                    replace: !0
                }), _[7] = e) : e = _[7], e
            }
            _[8] !== N || _[9] !== A ? (o = N ?? (0, tD.d)(A), _[8] = N, _[9] = A, _[10] = o) : o = _[10];
            let G = o,
                L = j.isCapable && !E && !O && null != z;
            _[11] !== S ? (i = e => (S((0, eT.c)(e)), !0), _[11] = S, _[12] = i) : i = _[12];
            let D = i;
            _[13] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(p.a, {}), d = (0, a.jsx)(T.a.Surface, {}), _[13] = l, _[14] = d) : (l = _[13], d = _[14]), _[15] !== B ? (h = null, _[15] = B, _[16] = h) : h = _[16], _[17] !== G || _[18] !== B || _[19] !== F ? (g = F || B ? null : (0, a.jsx)(ta.a, {
                conversationId: G
            }), _[17] = G, _[18] = B, _[19] = F, _[20] = g) : g = _[20];
            let H = I ?? (L ? D : null),
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
            return _[35] !== q ? (C = q, _[35] = q, _[36] = C) : C = _[36], _[37] !== G || _[38] !== C ? (w = (0, a.jsx)(tC.a, {
                conversationId: G,
                children: C
            }), _[37] = G, _[38] = C, _[39] = w) : w = _[39], w
        }

        function iw(e) {
            let t, n, p, m, T, R, Q, $, Y, J, ee, et, ea, er, eo, es, ei, el, ec, ta, th, tp, tm, tg, tf, ty, tb, tC, tw, tI, tj, tT, tA, tM, tH, tK, tV, tQ, t$, tX, tJ, tZ, t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, ne, nt, nn, na, nr, no, ns, ni, nl, nc, nd, nu, nh, np, nm, ng, nf, nv, ny, nb, nx, nw, n_, nI, nT, nE, nP, nA, nM, nk, nR, nN, nO, nB, nF, nz, nG = (0, r.c)(695),
                {
                    conversationId: nL,
                    viewActivation: nD,
                    isArchivedPreview: nH,
                    isInlinePreview: nW,
                    hideModelPicker: nq,
                    showFilePicker: nU,
                    disableAutoFocus: nK,
                    hideInitialUserMessage: nV,
                    transcriptPresentation: nQ,
                    scrollOrigin: n$,
                    isReadOnlyPreview: nY,
                    onSubmitAccepted: nX,
                    isTemporaryChat: nJ,
                    sharedConversationId: nZ,
                    sharedPostContinuation: n0,
                    requiredSystemHints: n2,
                    routePattern: n6,
                    composerLeadingContent: n9,
                    headerLeadingContent: ae,
                    banner: at,
                    onRetryMissingConversation: aa,
                    sharedProjectConversation: ar,
                    workspace: ao
                } = e,
                as = void 0 === nD ? 0 : nD,
                al = void 0 !== nH && nH,
                ad = void 0 !== nW && nW,
                am = void 0 === nU || nU,
                ag = (0, s.y)(q.a),
                af = (0, c.useContext)(v.a),
                av = (0, s.x)(aK.f, af),
                ay = (0, s.z)(null != av && x.a);
            nG[0] !== af || nG[1] !== nL ? (t = {
                auth: af,
                conversationId: nL
            }, nG[0] = af, nG[1] = nL, nG[2] = t) : t = nG[2];
            let ab = (0, s.x)(null != af && !af.isLoading && null === af.authMethod && aK.h, t),
                ax = null != nZ || null != av,
                aC = null != nZ || null != av && !(void 0 !== n0 && n0 && ay),
                aw = null != ao;
            nG[3] !== nL || nG[4] !== ad || nG[5] !== aC || nG[6] !== nJ || nG[7] !== nZ || nG[8] !== aw ? (n = {
                conversationId: nL,
                isInlinePreview: ad,
                isWorkspace: aw,
                isSharedConversation: aC,
                isTemporaryChat: nJ,
                sharedConversationId: nZ
            }, nG[3] = nL, nG[4] = ad, nG[5] = aC, nG[6] = nJ, nG[7] = nZ, nG[8] = aw, nG[9] = n) : n = nG[9];
            let a_ = function(e) {
                    let t, n, a, o, i, l, d, h, p, m = (0, r.c)(41),
                        {
                            conversationId: g,
                            isInlinePreview: f,
                            isWorkspace: v,
                            isSharedConversation: y,
                            isTemporaryChat: b,
                            sharedConversationId: x
                        } = e,
                        C = (0, s.y)(q.a),
                        {
                            conversationId: w
                        } = (0, u.cb)();
                    m[0] !== g || m[1] !== f || m[2] !== v || m[3] !== w || m[4] !== C ? (t = () => (0, tD.e)(f || v || null == C.get(ej.j, g) ? g : w ?? ""), m[0] = g, m[1] = f, m[2] = v, m[3] = w, m[4] = C, m[5] = t) : t = m[5];
                    let [_, S] = (0, c.useState)(t);
                    m[6] !== _ || m[7] !== g || m[8] !== C ? (n = () => _ && !C.get(o1.b, g) ? g : null, m[6] = _, m[7] = g, m[8] = C, m[9] = n) : n = m[9];
                    let [I] = (0, c.useState)(n), j = (0, s.x)(ej.j, g), T = (0, s.x)(ej.N, g), E = (0, s.x)(ej.C, g), P = (0, s.x)(tc.chatGptConversationQueryById$, y || b && null != T ? null : j);
                    (0, s.x)(y ? null : o0.a, j);
                    let A = (0, s.x)(tc.n, x),
                        M = (0, c.useRef)(null),
                        k = A.isSuccess && null != A.data ? x : null;
                    m[10] !== C ? (a = e => {
                        (0, eJ.a)(C, oZ.i, {
                            actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                            action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                            contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                            availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                            shareId: e
                        })
                    }, m[10] = C, m[11] = a) : a = m[11];
                    let R = (0, c.useEffectEvent)(a);
                    m[12] !== k || m[13] !== R ? (o = () => {
                        null != k && M.current !== k && (M.current = k, R(k))
                    }, m[12] = k, m[13] = R, m[14] = o) : o = m[14], m[15] !== k ? (i = [k], m[15] = k, m[16] = i) : i = m[16], (0, c.useEffect)(o, i);
                    let N = null != T,
                        O = y ? A : P;
                    _ && null != O.data && S(!1);
                    let B = _ && N && null == O.data,
                        F = O.isLoading && !N,
                        z = O.isError && !B;
                    m[17] !== O.error || m[18] !== f ? (l = f || (0, eC.e)(O.error) || !(O.error instanceof eC.FetchError && [401, 403, 404].includes(O.error.status)), m[17] = O.error, m[18] = f, m[19] = l) : l = m[19];
                    let L = l;
                    m[20] !== O.error || m[21] !== g || m[22] !== z || m[23] !== f || m[24] !== C || m[25] !== x ? (d = () => {
                        z && !f && G.a.loadFailed(C, g, x, O.error)
                    }, h = [O.error, g, z, f, C, x], m[20] = O.error, m[21] = g, m[22] = z, m[23] = f, m[24] = C, m[25] = x, m[26] = d, m[27] = h) : (d = m[26], h = m[27]), (0, c.useEffect)(d, h);
                    let D = P.data?.sectioned_conversation != null,
                        H = O.isLoading || z;
                    return m[28] !== O || m[29] !== L || m[30] !== B || m[31] !== z || m[32] !== N || m[33] !== I || m[34] !== F || m[35] !== j || m[36] !== H || m[37] !== D || m[38] !== E || m[39] !== T ? (p = {
                        activeConversationQuery: O,
                        canRetryConversationLoad: L,
                        canUseLiveThread: B,
                        hasConversationLoadError: z,
                        hasHistorySections: D,
                        hasThreadSnapshot: N,
                        initialResponsePlacementKey: I,
                        isConversationLoading: F,
                        isConversationLoadUnresolved: H,
                        serverConversationId: j,
                        threadMapping: T,
                        threadCurrentNode: E
                    }, m[28] = O, m[29] = L, m[30] = B, m[31] = z, m[32] = N, m[33] = I, m[34] = F, m[35] = j, m[36] = H, m[37] = D, m[38] = E, m[39] = T, m[40] = p) : p = m[40], p
                }(n),
                {
                    activeConversationQuery: aS,
                    canRetryConversationLoad: aI,
                    canUseLiveThread: aj,
                    hasConversationLoadError: aT,
                    hasThreadSnapshot: aE,
                    isConversationLoading: aP,
                    isConversationLoadUnresolved: aA,
                    serverConversationId: aM,
                    threadMapping: ak,
                    threadCurrentNode: aR
                } = a_;
            nG[10] !== nL || nG[11] !== al || nG[12] !== ad || nG[13] !== aC || nG[14] !== ag ? (p = () => {
                if (!aC && !al && !ad) return function(e, t) {
                    let n = e.get(e6.a, t) ?? t,
                        a = e.get(e1.b, t),
                        r = e.get(tt, n),
                        o = null;
                    null != a && r?.attemptId === a && (o = r);
                    let s = {
                            attemptId: a,
                            observedTurn: o?.observedTurn ?? !1,
                            activeRequestId: o?.activeRequestId ?? null,
                            dismissed: o?.dismissed ?? !1,
                            initialCreationMessageIds: o?.initialCreationMessageIds ?? new Set,
                            openedCreatedPage: o?.openedCreatedPage ?? !1
                        },
                        i = e.get(eD.i),
                        c = s.observedTurn,
                        d = null;

                    function u(t) {
                        for (let n of t.toReversed())
                            if (!s.initialCreationMessageIds.has(n.messageId) && (0, eY.openSpacePageSidePanelTab)(e, n.pageId, {
                                    title: n.title,
                                    openSource: "turn_auto_open"
                                }).opened) {
                                s.openedCreatedPage = !0;
                                break
                            }
                    }
                    let h = e.watch(n => {
                        let {
                            get: a
                        } = n, r = a(ej.ab, t), o = a(eD.i), h = a(ej.cb, t);
                        if ((0, ej.Bb)(r)) {
                            c = !1;
                            let e = a(e1.b, t),
                                n = a(ej.db, t),
                                r = !s.observedTurn || s.attemptId !== e;
                            if (s.attemptId = e, r) {
                                let e = d;
                                d = null, e?.abort(), s.observedTurn = !0, s.activeRequestId = n, s.dismissed = h, s.openedCreatedPage = !1
                            } else s.activeRequestId = n ?? s.activeRequestId, s.dismissed = s.dismissed || h || i && !o;
                            i = o;
                            let l = !h && !s.dismissed && !o && !s.openedCreatedPage && !a(q.j) && !a(ej.D, t) && !a(e8.e, t),
                                p = [];
                            if ((r || l) && (p = a(ej.R, t) ?? []), r) {
                                s.initialCreationMessageIds = new Set(p.map(e => e.messageId));
                                return
                            }
                            l && u(p);
                            return
                        }
                        if (!s.observedTurn) return;
                        let p = a(ej.w, t);
                        if ("idle" !== r || h || null != p && "completed" !== p.result || null != e.get(ej.D, t) || e.get(q.j) || e.get(e8.e, t)) {
                            s.observedTurn = !1;
                            return
                        }
                        if (c) {
                            if (s.dismissed || o || s.openedCreatedPage || a(e1.b, t) !== s.attemptId) {
                                s.observedTurn = !1;
                                return
                            }
                            if (p?.result !== "completed") return;
                            u(a(ej.R, t) ?? []), s.observedTurn = !s.openedCreatedPage;
                            return
                        }
                        if (s.observedTurn = !1, p?.result !== "completed" || p.requestId !== s.activeRequestId) return;
                        let m = e.get(ej.N, t);
                        if (null == m) return;
                        let g = (0, l.b)({
                                mapping: m,
                                current_node: e.get(ej.C, t)
                            }),
                            f = g.findLast(te.b);
                        if (f?.status !== "finished_successfully") return;
                        let v = [...(0, e7.e)(g).outputs, ...g.flatMap(e => (0, e7.c)(e).map(e => e.file))],
                            y = e.get(e3.a, t)?.at(-1);
                        if (y?.turn.status !== "complete") return;
                        let b = [...(0, eW.b)(g), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, eH.a)(e, b, !s.dismissed) || !s.dismissed && !s.openedCreatedPage && (0, eX.a)(e, b)) && !s.dismissed && !o && !s.openedCreatedPage) {
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
                                            let o = (0, e4.a)(r),
                                                s = null == o ? null : (0, eq.a)(o),
                                                i = v.find(e => null != e.fileId && e.fileId === (r.file_id ?? r.id) || null != e.libraryFileId && e.libraryFileId === r.library_file_id);
                                            if ("file" !== r.type || !(0, eG.a)(r) || null == o || null == s || !(0, eq.f)(s) || null == i && null == (0, e5.b)(r.sandbox_path) && !(0, e5.b)(r.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > eV.a) continue;
                                            let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                c = (0, e2.b)(r, {
                                                    fileName: o,
                                                    messageId: l
                                                });
                                            if (null == c) continue;
                                            if (e.get(eh.f)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let u = e.get(ej.j, t) ?? t,
                                                h = `${l??"message"}:${String(a)}:${o}`,
                                                p = `chatgpt-file:${u}:${h}`,
                                                m = {
                                                    turnId: y.id,
                                                    inputMessageId: g.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: l ?? null
                                                },
                                                f = new AbortController,
                                                b = (0, e9.openChatGptFile)(e, {
                                                    conversationId: u,
                                                    fileName: o,
                                                    gizmoId: e.get(ej.T, t),
                                                    sharedConversationId: e.get(ej._, t),
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
                                                            fileExtension: (0, eK.c)(o) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, eJ.a)(e, ez.CodexWorkspaceFilePreviewAttempted, (0, eQ.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: m,
                                                            path: o,
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
                        h(), d?.abort(), null != s.attemptId && e.set(tt, n, {
                            ...s,
                            attemptId: s.attemptId
                        })
                    }
                }(ag, nL)
            }, m = [nL, al, ad, aC, ag], nG[10] = nL, nG[11] = al, nG[12] = ad, nG[13] = aC, nG[14] = ag, nG[15] = p, nG[16] = m) : (p = nG[15], m = nG[16]), (0, c.useEffect)(p, m);
            let aN = (0, s.x)(tk.a, nL),
                aO = aC ? null : aN;
            nG[17] !== nL || nG[18] !== nZ || nG[19] !== av ? (T = {
                conversationId: nL,
                sharedConversationId: nZ,
                sharedPost: av
            }, nG[17] = nL, nG[18] = nZ, nG[19] = av, nG[20] = T) : T = nG[20];
            let {
                composerConversationId: aB,
                handleSharedConversationSubmitAccepted: aF
            } = function(e) {
                let t, n, a, o = (0, r.c)(12),
                    {
                        conversationId: i,
                        sharedConversationId: l,
                        sharedPost: d
                    } = e,
                    h = (0, s.y)(q.a),
                    p = (0, u._)();
                o[0] !== l ? (t = () => null == l ? null : (0, tD.b)(), o[0] = l, o[1] = t) : t = o[1];
                let [m] = (0, c.useState)(t);
                o[2] !== i || o[3] !== p || o[4] !== h || o[5] !== m || o[6] !== l || o[7] !== d ? (n = () => {
                    let e;
                    if (null != d) {
                        if (!(0, tD.e)(i) || null == (e = (0, aK.a)(h, d, i))) return
                    } else {
                        let t = h.query.getData(tc.n, l);
                        if (null == t || null == l || null == m) return;
                        e = m, (0, ej.ob)(h, {
                            conversation: t,
                            conversationId: e,
                            sharedConversationId: l
                        })
                    }
                    h.get(x.a) ? h.set(sP.a, e) : p((0, eT.c)(e))
                }, o[2] = i, o[3] = p, o[4] = h, o[5] = m, o[6] = l, o[7] = d, o[8] = n) : n = o[8];
                let g = (0, eS.a)(n),
                    f = m ?? i;
                return o[9] !== g || o[10] !== f ? (a = {
                    composerConversationId: f,
                    handleSharedConversationSubmitAccepted: g
                }, o[9] = g, o[10] = f, o[11] = a) : a = o[11], a
            }(T);
            nG[21] !== aB ? (R = (0, U.o)({
                routeKind: "chatgpt-thread",
                conversationId: aB
            }), nG[21] = aB, nG[22] = R) : R = nG[22];
            let az = null != (0, s.x)(N.c, R);
            nG[23] !== aB || nG[24] !== n2 || nG[25] !== ag ? (Q = () => {
                if (null != n2 && 0 !== n2.length) return (0, tY.b)(ag, aB, n2)
            }, $ = [aB, n2, ag], nG[23] = aB, nG[24] = n2, nG[25] = ag, nG[26] = Q, nG[27] = $) : (Q = nG[26], $ = nG[27]), (0, c.useEffect)(Q, $);
            let aG = (0, c.useRef)(null),
                [aL, aD] = (0, c.useState)(null),
                aH = (0, c.useRef)(null);
            nG[28] === Symbol.for("react.memo_cache_sentinel") ? (Y = () => {
                let e = new AbortController;
                return aH.current = e, () => e.abort()
            }, nG[28] = Y) : Y = nG[28], nG[29] !== as ? (J = [as], nG[29] = as, nG[30] = J) : J = nG[30], (0, c.useLayoutEffect)(Y, J);
            let aW = (0, d.a)();
            nG[31] !== ag ? (ee = e => {
                (0, tn.c)(ag, e)
            }, nG[31] = ag, nG[32] = ee) : ee = nG[32];
            let aq = (0, c.useEffectEvent)(ee);
            nG[33] !== aM || nG[34] !== aq ? (et = () => () => {
                null != aM && aq(aM)
            }, nG[33] = aM, nG[34] = aq, nG[35] = et) : et = nG[35], nG[36] !== aM ? (ea = [aM], nG[36] = aM, nG[37] = ea) : ea = nG[37], (0, c.useEffect)(et, ea);
            let aU = (0, s.x)(ap.a, nL),
                aV = (0, s.x)(!ab && e8.e, nL),
                aQ = (0, s.x)(ej.y, nL),
                a$ = (0, s.x)(ej.T, nL),
                aY = (0, s.x)(ej.D, nL),
                aX = (0, s.x)(ej.O, nL),
                aJ = (0, s.x)(ej.ab, nL),
                aZ = (0, s.x)(ej.X, nL),
                a0 = (0, s.x)(ej.Z, nL),
                a1 = (0, s.x)(ai, nL);
            nG[38] !== aW || nG[39] !== a1 ? (er = a1 ?? aW.formatMessage(X.a.newChat), nG[38] = aW, nG[39] = a1, nG[40] = er) : er = nG[40];
            let a2 = er,
                a3 = (0, s.x)(ej.E, nL),
                a4 = (0, s.x)(ej.eb, nL),
                a5 = (0, s.x)(ej.fb, nL),
                a6 = (0, s.x)(to.q, nL),
                a7 = (0, s.x)(to.p, nL),
                a8 = (0, s.x)(to.n, nL),
                a9 = (0, s.x)(to.r, nL),
                re = (0, s.x)(to.o, nL),
                rt = (0, s.x)(to.j, nL),
                rn = (0, s.x)(ej.cb, nL),
                ra = (0, s.x)(to.A, nL);
            nG[41] !== aJ ? (eo = (0, ej.Bb)(aJ), nG[41] = aJ, nG[42] = eo) : eo = nG[42];
            let rr = eo,
                ro = (0, s.x)(tN, nL),
                rs = (0, s.z)(b.u),
                ri = (0, s.z)(b.m),
                rl = (0, s.z)(b.b),
                rc = (0, s.z)(b.n);
            nG[43] === Symbol.for("react.memo_cache_sentinel") ? (es = (0, I.a)(), nG[43] = es) : es = nG[43];
            let rd = (0, eu.f)(es);
            nG[44] === Symbol.for("react.memo_cache_sentinel") ? (ei = (0, O.b)(), nG[44] = ei) : ei = nG[44];
            let ru = (0, eu.f)(ei),
                rh = (0, s.z)(sa.f);
            nG[45] !== aL || nG[46] !== aB || nG[47] !== aA || nG[48] !== aC || nG[49] !== nJ || nG[50] !== ag ? (el = (e, t, n, a) => {
                !(e || ag.get(W.a)) && ((0, to.b)(ag, aB, t, void 0, n, a), aL?.focus(), aC || aA || (0, tl.f)(ag, aB, {
                    isTemporaryChat: nJ
                }))
            }, nG[45] = aL, nG[46] = aB, nG[47] = aA, nG[48] = aC, nG[49] = nJ, nG[50] = ag, nG[51] = el) : el = nG[51];
            let rp = el;
            nG[52] !== nL || nG[53] !== av ? (ta = null == (ec = null == av ? null : (0, sx.a)(av, nL)) ? void 0 : (0, ah.a)(ec), nG[52] = nL, nG[53] = av, nG[54] = ec, nG[55] = ta) : (ec = nG[54], ta = nG[55]);
            let rm = ta,
                rg = ec ?? aS.data,
                rf = a3 ? a4 : rg?.title,
                rv = (0, s.z)(y.h),
                ry = (0, s.z)(y.g),
                rb = "chatgpt-thread" === ag.value.routeKind && ag.value.workSideChat?.conversationId === nL,
                rx = rg?.conversation_origin ?? aQ ?? (null != ao || rb ? "tpp" : null),
                rC = "tpp" === rx,
                rw = rC && "denied" === rs.status && "go-plan" === rs.reason,
                r_ = (0, s.z)(ep.e),
                rS = (0, u.Y)(),
                rI = rS.state;
            (0, s.z)(V.b);
            let rj = (0, s.x)(eh.d, "3901104270") && rI?.openGoalPlan === !0,
                rT = (0, ev.a)(),
                rE = "tpp" === rx || "flora" === rx,
                rP = (0, s.z)(tq.b),
                rA = (0, s.z)(!!rE && b.v),
                rM = void 0 !== nY && nY || rA,
                rk = null == r_ || r_.isFullWidth ? void 0 : r_.width ?? 420,
                rR = !0 === (0, s.z)(rE ? null : e_.d),
                rN = (0, s.z)(rE ? H.b : H.a),
                rO = !rE && rN,
                rB = !ru || rc && !rE,
                rF = !aC && rc && !rE,
                rz = rF && ri,
                rG = aC && rg?.is_read_only === !0 || ar?.is_read_only === !0;
            nG[56] !== nL || nG[57] !== aC || nG[58] !== ag ? (th = () => null, nG[56] = nL, nG[57] = aC, nG[58] = ag, nG[59] = th) : th = nG[59];
            let [rL] = (0, c.useState)(th), rD = rg?.gizmo_id ?? a$ ?? rL?.gizmoId ?? null;
            nG[60] !== rD || nG[61] !== aC ? (tp = aC || null == rD || (0, tG.a)(rD) ? null : rD, nG[60] = rD, nG[61] = aC, nG[62] = tp) : tp = nG[62];
            let rH = tp,
                rW = (0, s.x)(ti, aB);
            nG[63] !== rg || nG[64] !== nL || nG[65] !== a2 || nG[66] !== rS.pathname || nG[67] !== nZ || nG[68] !== av ? (tm = (0, tv.d)({
                conversation: rg,
                conversationId: nL,
                conversationTitle: a2,
                pathname: rS.pathname,
                sharedConversationId: nZ,
                sharedPost: av
            }), nG[63] = rg, nG[64] = nL, nG[65] = a2, nG[66] = rS.pathname, nG[67] = nZ, nG[68] = av, nG[69] = tm) : tm = nG[69];
            let rq = tm,
                rU = null;
            aC || (rU = null != rg ? (0, Z.A)(rg) : (0, tG.a)(a$) ? a$ : rL?.projectId ?? null);
            let rK = (0, s.x)(eA.c, aC ? null : nL),
                rV = aC || rE || null != rU || rK || null == rW ? rH : rW.id;
            nG[70] !== aB || nG[71] !== rV || nG[72] !== rS.pathname ? (tg = {
                gizmoId: rV,
                conversationId: aB,
                visitKey: rS.pathname
            }, nG[70] = aB, nG[71] = rV, nG[72] = rS.pathname, nG[73] = tg) : tg = nG[73];
            let rQ = (0, s.x)(oJ.d, tg),
                {
                    data: r$
                } = (0, o.a)({
                    enabled: null != rU,
                    queryFn: () => {
                        if (null == rU) throw Error("Expected a ChatGPT project id");
                        return (0, S.c)(rU)
                    },
                    queryKey: (0, Z.D)(rU ?? ""),
                    staleTime: ef.b.ONE_MINUTE
                }),
                rY = null != rU && (r$?.gizmo.share_recipient !== "private" || (r$?.gizmo.sharing?.subjects?.length ?? 0) > 0);
            nG[74] !== rg?.context_scopes || nG[75] !== r$?.gizmo.gizmo_snorlax_type ? (tf = rg?.context_scopes?.includes("HEALTH") === !0 || r$?.gizmo.gizmo_snorlax_type === "potion", nG[74] = rg?.context_scopes, nG[75] = r$?.gizmo.gizmo_snorlax_type, nG[76] = tf) : tf = nG[76];
            let rX = tf,
                rJ = (0, o3.a)(rg?.context_scopes, {
                    projectType: r$?.gizmo.gizmo_snorlax_type,
                    projectId: rU,
                    lockedProjectId: rh?.projectId
                }),
                r0 = aV || rY || rX || rJ;
            nG[77] !== r$?.gizmo.display.name || nG[78] !== r$?.gizmo.display.name.trim ? (ty = r$?.gizmo.display.name.trim() || null, nG[77] = r$?.gizmo.display.name, nG[78] = r$?.gizmo.display.name.trim, nG[79] = ty) : ty = nG[79];
            let r1 = ty,
                r2 = r$?.gizmo.display.theme,
                r3 = r$?.gizmo.display.emoji;
            nG[80] !== r$ ? (tb = "shared" === (0, tL.b)(r$) ? (0, a.jsx)(E.b, {
                icon: {
                    assets: {
                        16: ib,
                        20: ix.a
                    }
                }
            }) : void 0, nG[80] = r$, nG[81] = tb) : tb = nG[81], nG[82] !== r2 || nG[83] !== r3 || nG[84] !== tb ? (tC = (0, a.jsx)(D.a, {
                className: "icon-leading",
                size: "leading",
                color: r2,
                icon: r3,
                sharedIcon: tb
            }), nG[82] = r2, nG[83] = r3, nG[84] = tb, nG[85] = tC) : tC = nG[85];
            let r4 = tC,
                r5 = (0, s.x)(ej.i, nL),
                r6 = r5?.metadata ?? rg?.context_truncation_continuation,
                r7 = aC || nJ || null != ar || null == rv || rg?.owner?.user_id == null || null == rU || rg.owner.user_id === (ry ? rv.split("__")[0] : rv) ? null : (0, n7.d)(rU, rg.conversation_id, rg.owner.user_id),
                r8 = !aC && !al && !rM,
                r9 = (0, s.x)(r8 ? sc.c : null, nL),
                oe = r9?.isReviewing === !0,
                ot = null == r9 ? ak : r9.conversation.mapping,
                on = null == r9 ? aR : r9.conversation.current_node,
                oa = null == ak ? rg : null,
                or = ot ?? oa?.mapping,
                oo = (0, eu.i)();
            nG[86] !== or || nG[87] !== oo ? (tw = function(e, t) {
                if (null != e && Object.values(e).some(e => e?.message != null && (0, o2.b)(e.message))) return () => (0, eu.d)(t, "2347981323").get("enabled", !1)
            }(or, oo), nG[86] = or, nG[87] = oo, nG[88] = tw) : tw = nG[88];
            let os = tw,
                oi = (0, s.z)(null != os ? ex.h : void 0),
                ol = (0, s.x)(null != os && !aC && !al && !oe && ey.a, nL),
                oc = (0, s.z)(ol ? eb.a : void 0);
            nG[89] === Symbol.for("react.memo_cache_sentinel") ? (tI = (0, td.a)(), nG[89] = tI) : tI = nG[89];
            let od = tI;
            nG[90] === Symbol.for("react.memo_cache_sentinel") ? (tj = new WeakMap, nG[90] = tj) : tj = nG[90];
            let ou = tj;
            nG[91] !== rN || nG[92] !== rO || nG[93] !== r6 || nG[94] !== rx || nG[95] !== on || nG[96] !== ot || nG[97] !== rP || nG[98] !== os || nG[99] !== oa || nG[100] !== al || nG[101] !== aC || nG[102] !== rr || nG[103] !== rE || nG[104] !== aX || nG[105] !== a8 || nG[106] !== re || nG[107] !== a7 || nG[108] !== a6 || nG[109] !== a9 || nG[110] !== oe || nG[111] !== ag.get || nG[112] !== r9?.isEntering || nG[113] !== aU || nG[114] !== aJ || nG[115] !== oc || nG[116] !== oi ? (tT = () => od({
                conversation: oa,
                contextContinuation: r6,
                clinicalSearchEnabled: rO,
                clinicalCitationsEnabled: rN,
                enableCloudBrowserActivity: rP,
                conversationOrigin: rx,
                enableVoiceImageLoadingFix: os,
                voiceImageSessionId: oi,
                voiceImageGenerationSpawnIds: oc,
                enableImageGenerationLoadingState: !aC && !al && !oe && "error" !== aJ,
                getRenderTelemetry: e => (0, ip.c)(ag.get, e),
                isWorkConversation: rE,
                isStreaming: !aC && !al && !oe && rr,
                mode: "conversation",
                mcpResponseCache: ou,
                moderationDisclaimersByMessageId: aX,
                ...aU,
                pendingSubmission: null == a6 || aC || oe || r9?.isEntering ? null : {
                    attachments: a8,
                    commentAttachments: re,
                    prompt: a6,
                    ...a7,
                    selectedTextAttachments: a9
                },
                threadCurrentNode: on,
                threadMapping: ot
            }), nG[91] = rN, nG[92] = rO, nG[93] = r6, nG[94] = rx, nG[95] = on, nG[96] = ot, nG[97] = rP, nG[98] = os, nG[99] = oa, nG[100] = al, nG[101] = aC, nG[102] = rr, nG[103] = rE, nG[104] = aX, nG[105] = a8, nG[106] = re, nG[107] = a7, nG[108] = a6, nG[109] = a9, nG[110] = oe, nG[111] = ag.get, nG[112] = r9?.isEntering, nG[113] = aU, nG[114] = aJ, nG[115] = oc, nG[116] = oi, nG[117] = tT) : tT = nG[117], r9?.isEntering, nG[118] !== tT ? (tA = tT(), nG[118] = tT, nG[119] = tA) : tA = nG[119];
            let oh = tA,
                {
                    isConversationEmpty: op,
                    renderedConversation: om,
                    renderedTurns: og,
                    showPendingLoadingMessage: of
                } = oh;
            nG[120] !== ad || nG[121] !== rE || nG[122] !== om || nG[123] !== ag ? (tM = () => {
                if (!ad && rE) return ag.set(iy.b, om), () => {
                    ag.get(iy.b) === om && ag.set(iy.b, null)
                }
            }, tH = [ad, rE, om, ag], nG[120] = ad, nG[121] = rE, nG[122] = om, nG[123] = ag, nG[124] = tM, nG[125] = tH) : (tM = nG[124], tH = nG[125]), (0, c.useEffect)(tM, tH);
            let ov = (0, s.x)(eM.g, nL),
                oy = of && null == ov,
                ob = !rE && !aC && !ad && !al,
                ox = null == ao && !rO && !ad && !aC && (rC || ob) && !al,
                oC = rC && null == a5,
                ow = aY ?? ra;
            nG[126] !== nL || nG[127] !== aC || nG[128] !== aM ? (tK = aC ? null : aM ?? ((0, tD.e)(nL) ? null : nL), nG[126] = nL, nG[127] = aC, nG[128] = aM, nG[129] = tK) : tK = nG[129];
            let o_ = tK,
                oS = null == rx && null == rg ? null : rE,
                oI = rw ? null : o_;
            nG[130] !== nJ || nG[131] !== oS || nG[132] !== n6 || nG[133] !== oI || nG[134] !== as ? (tV = {
                sourceConversationId: oI,
                routePattern: n6,
                isTemporaryChat: nJ,
                knownWorkConversation: oS,
                viewActivation: as,
                activationController: aH
            }, nG[130] = nJ, nG[131] = oS, nG[132] = n6, nG[133] = oI, nG[134] = as, nG[135] = tV) : tV = nG[135];
            let {
                branchingMessageId: oj,
                handleBranch: oT
            } = function(e) {
                let t, n, a, o, i = (0, r.c)(17),
                    {
                        sourceConversationId: l,
                        routePattern: h,
                        isTemporaryChat: p,
                        knownWorkConversation: m,
                        viewActivation: g,
                        activationController: f
                    } = e,
                    v = (0, s.y)(q.a),
                    y = (0, d.a)(),
                    b = (0, u._)(),
                    [x, C] = (0, c.useState)(null);
                i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => C(null), i[0] = t) : t = i[0], i[1] !== g ? (n = [g], i[1] = g, i[2] = n) : n = i[2], (0, c.useLayoutEffect)(t, n);
                let w = x?.activation === g ? x.messageId : null;
                i[3] !== f || i[4] !== w || i[5] !== y || i[6] !== p || i[7] !== m || i[8] !== b || i[9] !== h || i[10] !== v || i[11] !== l || i[12] !== g ? (a = (e, t) => {
                    let n = void 0 !== t && t;
                    if (null == l || null != w) return;
                    let a = f.current?.signal;
                    null == a || a.aborted || (C({
                        messageId: e,
                        activation: g
                    }), (0, ej.h)(v, {
                        conversationId: l,
                        messageId: e,
                        inWorkMode: n
                    }).then(e => {
                        let {
                            clientThreadId: t
                        } = e;
                        a.aborted || (n && (0, eE.a)(v, "opened"), b(null == h ? (0, eT.c)(t, {
                            isTemporaryChat: p
                        }) : (0, u.C)(h, {
                            conversationId: t
                        })))
                    }).catch(() => {
                        a.aborted || (n && (0, eE.a)(v, "failed"), C(null), v.get(en.f).danger(y.formatMessage({
                            id: "chatgptConversations.branchFailed",
                            defaultMessage: "Failed to create chat",
                            description: "Error shown when ChatGPT cannot continue a conversation in a new chat"
                        }), {
                            errorAnalytics: {
                                toastId: "branch_conversation_failed",
                                operation: "branch_conversation",
                                errorCategory: "conversation",
                                conversationId: l ?? void 0,
                                retryable: !0,
                                userFacingError: {
                                    surface: (0, eI.b)(m),
                                    errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                                }
                            }
                        }))
                    }))
                }, i[3] = f, i[4] = w, i[5] = y, i[6] = p, i[7] = m, i[8] = b, i[9] = h, i[10] = v, i[11] = l, i[12] = g, i[13] = a) : a = i[13];
                let _ = (0, eS.a)(a);
                return i[14] !== w || i[15] !== _ ? (o = {
                    branchingMessageId: w,
                    handleBranch: _
                }, i[14] = w, i[15] = _, i[16] = o) : o = i[16], o
            }(tV);
            nG[136] !== aB || nG[137] !== nL || nG[138] !== rR || nG[139] !== nJ || nG[140] !== rw || nG[141] !== oS || nG[142] !== aa || nG[143] !== aM ? (tQ = {
                conversationId: nL,
                composerConversationId: aB,
                serverConversationId: aM,
                isTemporaryChat: nJ,
                knownWorkConversation: oS,
                isPolicyBlocking: rR,
                isWorkPlanDenied: rw,
                onRetryMissingConversation: aa
            }, nG[136] = aB, nG[137] = nL, nG[138] = rR, nG[139] = nJ, nG[140] = rw, nG[141] = oS, nG[142] = aa, nG[143] = aM, nG[144] = tQ) : tQ = nG[144];
            let {
                handleEditUserMessage: oE,
                handleRegenerateResponse: oP
            } = function(e) {
                let t, n, a, o = (0, r.c)(24),
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
                    b = (0, s.y)(q.a),
                    x = (0, d.a)(),
                    C = (0, u._)();
                o[0] !== i || o[1] !== x || o[2] !== g || o[3] !== p || o[4] !== m || o[5] !== b || o[6] !== h ? (t = async (e, t, n, a) => {
                    if (!g) try {
                        await async function(e, t) {
                            let {
                                conversationId: n,
                                isTemporaryChat: a = !1,
                                messageId: r,
                                prompt: o,
                                renderFormat: s,
                                inlineSystemHints: i
                            } = t;
                            if (e.get(to.j, n)) throw new tP.a("edit_message_busy", "The chat is busy.");
                            let l = e.get(ej.y, n);
                            if ("tpp" === l) throw new tP.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                            if (!e.get(tN, n)) throw new tP.a("edit_message_busy", "The chat is busy.");
                            let c = e.get(tE.b, {
                                conversationId: n,
                                messageId: r
                            });
                            if (null == c) throw new tP.a("edit_message_target_unavailable", "The user message could not be edited.");
                            let {
                                selectedModel: d
                            } = c, u = o.trim(), h = (0, tE.c)(c.message, e.get, i), p = (0, tR.c)({
                                message: c.message,
                                prompt: u,
                                renderFormat: s,
                                systemHints: h,
                                inlineSystemHints: i
                            }), m = (0, tS.f)(p.message.metadata), g = p.message.content, f = "multimodal_text" === g.content_type && g.parts.some(e => "string" != typeof e);
                            if (0 === u.length && 0 === m.length && !f) throw new tP.a("edit_message_empty", "The edited message cannot be empty.");
                            if (e.get(eh.d, "3574573347")) {
                                let t = e.get(tE.a, n);
                                t?.messageId === r && t.prompt === o && t_()((0, tE.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(tE.a, n, {
                                    messageId: r,
                                    prompt: o,
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
                                }), c) && !(0, ej.Bb)(e.get(ej.ab, n));
                            e.set(to.j, n, !0);
                            try {
                                if ("flora" !== l && null != y && null == e.get(v.session$) && null == e.get(tk.a, n) && (await y.stop(), await y.closed), !b()) throw new tP.a("edit_message_target_unavailable", "The edited message or active response changed.");
                                await (0, tR.submitChatGPTCompletion)(e, {
                                    isSubmissionCurrent: b,
                                    isRequestCurrent: () => e.get(ej.C, n) === p.message.id,
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
                                e.set(to.j, n, !1)
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
                        let e = (0, eI.c)(t);
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
                                    surface: (0, eI.b)(m),
                                    errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                                }
                            }
                        }), t
                    }
                }, o[0] = i, o[1] = x, o[2] = g, o[3] = p, o[4] = m, o[5] = b, o[6] = h, o[7] = t) : t = o[7];
                let w = (0, eS.a)(t);
                o[8] !== c || o[9] !== i || o[10] !== x || o[11] !== g || o[12] !== p || o[13] !== y || o[14] !== f || o[15] !== m || o[16] !== C || o[17] !== v || o[18] !== b || o[19] !== h ? (n = async (e, t) => {
                    if (!g && !f) try {
                        let n = b.get(rZ.e, i);
                        if (n?.startsNewWorkConversation || null == b.get(ej.j, i) || (0, oY.j)(b.get(ej.V, i)?.metadata?.errorCode)) {
                            if (n?.message.id !== e) return;
                            let a = (0, l.e)(n.prompt),
                                r = (0, oW.i)(n.prompt.metadata, a, (0, tS.e)(n.prompt.metadata), (0, oH.w)(a)),
                                o = (0, oq.a)(n.prompt, a, r),
                                s = b.get(to.t, c),
                                d = "markdown" === o.renderFormat ? o.message : a,
                                u = s.length > 0 ? s : d,
                                h = s.length > 0 ? void 0 : o.renderFormat ?? "plain";
                            if (null != v) return void await v(u, h);
                            if (null == b.get(ej.j, i) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                                let e = u;
                                if (null != h) {
                                    let t = (0, o$.e)(u, {
                                        defaultTextKind: "plain" === h ? "literal" : "prompt",
                                        enableRichText: !0,
                                        enableFileMentions: !0
                                    });
                                    e = t.getPersistedText(), t.destroy()
                                }
                                let t = `chatgpt:${i}`;
                                (0, oK.E)(t, (t, n) => n ? t : e) || (0, to.X)(b, i, e), (0, oK.e)(t);
                                return
                            }
                            if (n.startsNewWorkConversation) {
                                let e = "user" === n.prompt.author.role ? (0, l.i)((0, l.s)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                    t = null != e && e.length <= 1e3 ? e : (0, oH.w)(a);
                                (0, oV.m)(b, "work"), await C("/", {
                                    state: {
                                        focusComposerNonce: Date.now(),
                                        prefillPrompt: s.length > 0 ? s : t,
                                        prefillPromptFormat: s.length > 0 ? void 0 : "plain",
                                        prefillPromptOnlyIfEmpty: !0
                                    }
                                });
                                return
                            }
                            if (y && !p && (0, oU.fb)(b, (0, oQ.b)({
                                    entrypoint: "home"
                                }))) return void await C("/");
                            let m = (0, l.l)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                            !0 !== n.forceUseSearch || m.includes("search") || m.push("search");
                            let g = (0, oX.g)(b, m);
                            (0, to.Y)(b, g, t.model);
                            let f = b.get(ej.T, i);
                            (0, oV.m)(b, y ? "work" : "chat"), await C({
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
                        await (0, rZ.h)(b, {
                            conversationId: i,
                            isTemporaryChat: p,
                            messageId: e,
                            retry: y && "error_retry" === t.source && null == t.model.thinkingEffort ? {
                                ...t,
                                model: b.get(to.u, i)
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
                                    surface: (0, eI.b)(m),
                                    errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                                }
                            }
                        })
                    }
                }, o[8] = c, o[9] = i, o[10] = x, o[11] = g, o[12] = p, o[13] = y, o[14] = f, o[15] = m, o[16] = C, o[17] = v, o[18] = b, o[19] = h, o[20] = n) : n = o[20];
                let _ = (0, eS.a)(n);
                return o[21] !== w || o[22] !== _ ? (a = {
                    handleEditUserMessage: w,
                    handleRegenerateResponse: _
                }, o[21] = w, o[22] = _, o[23] = a) : a = o[23], a
            }(tQ), oA = null != rg || null != rL;
            nG[145] !== nL || nG[146] !== a2 || nG[147] !== nJ || nG[148] !== rU || nG[149] !== aM || nG[150] !== oA || nG[151] !== as ? (t$ = {
                conversationId: nL,
                serverConversationId: aM,
                conversationTitle: a2,
                projectId: rU,
                hasConversationDetails: oA,
                isTemporaryChat: nJ,
                viewActivation: as,
                activationController: aH
            }, nG[145] = nL, nG[146] = a2, nG[147] = nJ, nG[148] = rU, nG[149] = aM, nG[150] = oA, nG[151] = as, nG[152] = t$) : t$ = nG[152];
            let oM = function(e) {
                    let t, n, a = (0, r.c)(18),
                        {
                            conversationId: o,
                            serverConversationId: i,
                            conversationTitle: l,
                            projectId: h,
                            hasConversationDetails: p,
                            isTemporaryChat: m,
                            viewActivation: g,
                            activationController: f
                        } = e,
                        v = (0, s.y)(q.a),
                        y = (0, d.a)(),
                        x = (0, u._)(),
                        C = (0, eO.c)(),
                        w = (0, s.z)(b.t),
                        _ = (0, s.z)(b.r),
                        [S, I] = (0, c.useState)(null),
                        j = S === g;
                    a[0] !== f || a[1] !== o || a[2] !== l || a[3] !== p || a[4] !== y || a[5] !== j || a[6] !== m || a[7] !== x || a[8] !== C || a[9] !== h || a[10] !== v || a[11] !== i || a[12] !== g ? (t = () => {
                        if (j || null == i) return;
                        let e = v.get(b.t);
                        if (!e && !v.get(b.r) || !e && !p) return;
                        let t = f.current?.signal;
                        null == t || t.aborted || (I(g), (e ? (0, eB.f)(v, {
                            chatGptThreadId: o,
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
                                if (null != n) return void(e ? C(n) : x((0, eT.c)(n, {
                                    isTemporaryChat: m
                                })));
                                throw Error("Unable to create a Work conversation")
                            }
                        }).catch(() => {
                            t.aborted || (I(null), v.get(en.f).danger(y.formatMessage({
                                id: "chatgptConversations.handoffFailed",
                                defaultMessage: "Failed to create chat",
                                description: "Error shown when ChatGPT cannot hand off a conversation to a task"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgptConversations.handoffFailed"
                                }
                            }))
                        }))
                    }, a[0] = f, a[1] = o, a[2] = l, a[3] = p, a[4] = y, a[5] = j, a[6] = m, a[7] = x, a[8] = C, a[9] = h, a[10] = v, a[11] = i, a[12] = g, a[13] = t) : t = a[13];
                    let T = t,
                        E = null != i && (w || p && _);
                    return a[14] !== T || a[15] !== j || a[16] !== E ? (n = {
                        isHandoffPending: j,
                        handleHandoff: T,
                        canHandoff: E
                    }, a[14] = T, a[15] = j, a[16] = E, a[17] = n) : n = a[17], n
                }(t$),
                {
                    isHandoffPending: ok,
                    handleHandoff: oR
                } = oM,
                oN = !aV && oM.canHandoff;
            nG[153] !== ao ? (tX = ao?.mcpAppContext == null ? null : {
                hostId: K.a,
                server: "codex_apps",
                connectorId: ao.mcpAppContext.id
            }, nG[153] = ao, nG[154] = tX) : tX = nG[154];
            let oO = (0, s.x)(z.b, tX),
                oB = ao?.fullscreenContent != null ? "content" : "workspace",
                oF = (0, w.a)(ad ? "embedded" : oB),
                oz = !oO && (aj || !aS.isError) && !al && !rM && (null == av || af?.authMethod === "chatgpt" || ay) && (!aC || null != rg),
                oL = rl || rM || rG || rz || rw,
                oD = oL || oe || r9?.needsEntry === !0;
            nG[155] !== oL || nG[156] !== aW || nG[157] !== oe || nG[158] !== r9?.needsEntry ? (oe ? tJ = aW.formatMessage(sc.d.readOnlyPlaceholder) : !oL && r9?.needsEntry && (tJ = !1), nG[155] = oL, nG[156] = aW, nG[157] = oe, nG[158] = r9?.needsEntry, nG[159] = tJ) : tJ = nG[159];
            let o5 = oz && !oL && !aC && !aA && !rR && !rr && !rt && !rn && !rQ,
                o6 = !oz || aC || oD || aA ? null : aL,
                o7 = !rO && !ad && !aC;
            nG[160] !== rt || nG[161] !== a8 || nG[162] !== a6 ? (tZ = rt ? {
                hasPrompt: null != a6,
                attachments: a8
            } : null, nG[160] = rt, nG[161] = a8, nG[162] = a6, nG[163] = tZ) : tZ = nG[163];
            let o8 = null == r_ ? null : rk ?? "fullscreen";
            nG[164] !== nL || nG[165] !== a_ || nG[166] !== ob || nG[167] !== ox || nG[168] !== rr || nG[169] !== rj || nG[170] !== oh || nG[171] !== aV || nG[172] !== o6 || nG[173] !== o7 || nG[174] !== tZ || nG[175] !== o8 || nG[176] !== as ? (t0 = {
                conversationId: nL,
                viewActivation: as,
                history: a_,
                renderState: oh,
                isChatSummaryEnabled: ob,
                isThreadSummaryPanelAvailable: ox,
                includeGoals: o7,
                openGoalPlan: rj,
                isTurnActive: rr,
                pendingSubmission: tZ,
                shouldBlockExternalEgress: aV,
                composerActions: o6,
                otherPanelWidth: o8
            }, nG[164] = nL, nG[165] = a_, nG[166] = ob, nG[167] = ox, nG[168] = rr, nG[169] = rj, nG[170] = oh, nG[171] = aV, nG[172] = o6, nG[173] = o7, nG[174] = tZ, nG[175] = o8, nG[176] = as, nG[177] = t0) : t0 = nG[177];
            let o9 = function(e) {
                let t, n, o, i, d, u, h, p, m = (0, r.c)(39),
                    {
                        conversationId: g,
                        viewActivation: f,
                        history: v,
                        renderState: y,
                        isChatSummaryEnabled: b,
                        isThreadSummaryPanelAvailable: x,
                        includeGoals: C,
                        openGoalPlan: w,
                        isTurnActive: _,
                        pendingSubmission: S,
                        shouldBlockExternalEgress: I,
                        composerActions: j,
                        otherPanelWidth: T
                    } = e,
                    E = (0, s.z)(s$.pagesEnabled$),
                    {
                        renderedConversation: P,
                        renderedTurns: A
                    } = y,
                    M = (0, s.x)(C ? sX.a : null, g),
                    k = (M?.length ?? 0) > 0,
                    R = (0, s.x)(b ? e1.b : null, g),
                    N = JSON.stringify([g, f]),
                    [O, B] = (0, c.useState)(null),
                    F = function(e, t) {
                        let {
                            conversation: n,
                            completionAttemptId: a,
                            allowAutoOpen: r = !0,
                            suppressAutoOpen: o = !1,
                            isTurnActive: s,
                            isPendingUserTurn: i,
                            hasGoal: c = !1,
                            visitKey: d
                        } = t;
                        if (e?.visitKey === d && e.conversation === n && e.completionAttemptId === a && e.allowAutoOpen === r && e.suppressAutoOpen === o && e.isTurnActive === s && e.isPendingUserTurn === i && e.hasGoal === c) return e;
                        let u = null == n ? [] : (0, l.b)(n, sJ.m),
                            h = null == e || e.visitKey !== d,
                            p = u.find(sJ.m)?.id ?? (h || i ? null : e.userMessageId),
                            m = i ? null : u.findLast(sZ)?.id ?? null,
                            g = !h && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != p && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== p),
                            f = new Set(h ? [] : e.observedSummaryRequestIds),
                            v = !h && !g && e.hasConsumedSummaryRequest,
                            y = !v && !h && null != e.conversation && (s || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != m && !f.has(m);
                        if (null != n && (h || null == e.conversation || !s))
                            for (let e of Object.values(n.mapping)) e?.message?.id != null && sZ(e.message) && f.add(e.message.id);
                        else null != m && f.add(m);
                        return {
                            visitKey: d,
                            conversation: n,
                            completionAttemptId: a,
                            allowAutoOpen: r,
                            suppressAutoOpen: o,
                            isTurnActive: s,
                            isPendingUserTurn: i,
                            hasGoal: c,
                            observedSummaryRequestIds: f,
                            userMessageId: p,
                            hasConsumedSummaryRequest: v || null != m,
                            isOpen: o ? !h && e.suppressAutoOpen && e.isOpen : r && (c && (h || !e.hasGoal) || y) || !h && (!g || c) && (!e.hasGoal || c) && e.isOpen,
                            shouldPreventAutoFocus: h || g || c && !e.hasGoal || y && !e.isOpen || e.shouldPreventAutoFocus
                        }
                    }(O, {
                        completionAttemptId: R,
                        allowAutoOpen: !(0, sQ.a)("(width < 768px)"),
                        suppressAutoOpen: w,
                        conversation: b && (v.canUseLiveThread || !v.isConversationLoadUnresolved) ? P : null,
                        isTurnActive: _,
                        hasGoal: k,
                        isPendingUserTurn: S?.hasPrompt === !0 && !_,
                        visitKey: N
                    });
                F !== O && B(F);
                let z = x && P?.mapping === v.threadMapping && P?.current_node === v.threadCurrentNode,
                    G = (0, s.x)(z ? ej.q : null, g),
                    L = P?.mapping,
                    D = P?.current_node;
                m[0] !== L || m[1] !== D ? (t = sV()(() => {
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
                m[3] !== b || m[4] !== x || m[5] !== _ || m[6] !== E || m[7] !== S || m[8] !== H || m[9] !== A || m[10] !== G ? (n = x ? sV()(() => (function(e) {
                    var t;
                    let n, a, {
                            automationReferences: r,
                            includePages: o = !1,
                            includeSources: s = !0,
                            messages: i,
                            pendingAttachments: c = [],
                            resources: d = (0, e7.e)(i),
                            turns: u,
                            isTurnActive: h = u.at(-1)?.turn.status === "in_progress"
                        } = e,
                        p = [...d.inputs],
                        m = s ? (0, il.a)(i, u) : [],
                        g = new Map,
                        f = new Map,
                        v = (t = i, -1 !== (n = ie()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, iu.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                        y = [],
                        b = new Map(i.map(e => [(0, l.g)(e), e])),
                        x = ie()(i, e => "user" === e.author.role),
                        C = [];
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
                        if (s && "complete" === t.status)
                            for (let n of t.messageIds) {
                                let t = b.get(n);
                                t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, ii.j)(t.metadata) && y.push({
                                    messageId: n,
                                    turnId: e,
                                    deletedMemoryCitationUuids: (0, ii.c)(t.metadata)
                                })
                            }
                        for (let n of ih(t.items)) {
                            if (o && "mcp-tool-call" === n.type) {
                                let e = (0, io.b)(n);
                                if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                    let t = (0, it.d)(e.url);
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
                            if (o && "assistant-message" === n.type && n.completed)
                                for (let e of (0, e$.c)(n.content)) f.has(e.id) || f.set(e.id, {
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
                    let w = (0, ia.b)(u.flatMap(e => {
                        let {
                            turn: t
                        } = e;
                        return ih(t.items).filter(e => "mcp-tool-call" === e.type)
                    })).at(-1);
                    return a = null == w ? [...d.outputs, ...f.values(), ...g.values()] : [{
                        ...w,
                        key: `site:${w.projectId}`,
                        kind: "site"
                    }, ...d.outputs.filter(e => null == w.archivePath || ! function(e, t) {
                        if (null != e.sandboxPath) return e.sandboxPath === t;
                        let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                        return null != n && e.name.toLowerCase() === n
                    }(e, w.archivePath)), ...f.values(), ...g.values()], {
                        automationIds: (0, is.b)(i, r ?? void 0),
                        browserScreenshots: (0, ic.d)(i),
                        inputs: p,
                        sourceTurns: y,
                        outputs: a,
                        progressSteps: C,
                        isPlanSummaryUpdating: h && i.slice(x + 1).some(e => "assistant" === e.author.role && is.a.test(e.recipient ?? "") || "tool" === e.author.role && is.a.test(e.author.name ?? "")),
                        planSummaryRefreshKey: `${u.at(-1)?.id??""}:${h}`,
                        sources: s ? [...Array.from(new Map(i.filter(e => "user" === e.author.role).flatMap(e => (0, ir.a)((0, l.e)(e))).map(e => [e.projectId, e])).values(), e => ({
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
                        subagents: (0, id.a)(i, {
                            isTurnLive: u.at(-1)?.turn.status === "in_progress"
                        })?.subagents ?? []
                    }
                })({
                    automationReferences: G,
                    includePages: E,
                    includeSources: !b,
                    isTurnActive: _ || null != S,
                    ...H(),
                    pendingAttachments: S?.attachments,
                    turns: A
                })) : null, o = b ? n?.() : null, m[3] = b, m[4] = x, m[5] = _, m[6] = E, m[7] = S, m[8] = H, m[9] = A, m[10] = G, m[11] = n, m[12] = o) : (n = m[11], o = m[12]);
                let W = o,
                    q = k || null != W && (W.outputs.length > 0 || W.progressSteps.length > 0 || W.automationIds.length > 0 || W.subagents.length > 0 || !I && W.browserScreenshots.length > 0),
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
                let X = (0, sY.a)(i),
                    J = !b || F.isOpen ? n : null,
                    Z = v.serverConversationId ?? g,
                    ee = !b;
                m[18] !== j || m[19] !== I || m[20] !== Z || m[21] !== ee ? (d = {
                    composerActions: j,
                    conversationId: Z,
                    showSources: ee,
                    shouldBlockExternalEgress: I
                }, m[18] = j, m[19] = I, m[20] = Z, m[21] = ee, m[22] = d) : d = m[22];
                let et = d,
                    en = null == T ? X.contentShift : void 0;
                return m[23] !== F || m[24] !== b || m[25] !== et || m[26] !== B || m[27] !== K || m[28] !== J ? (u = K ? (0, a.jsx)(s8, {
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
                }) : null, m[23] = F, m[24] = b, m[25] = et, m[26] = B, m[27] = K, m[28] = J, m[29] = u) : u = m[29], m[30] !== et || m[31] !== K || m[32] !== X || m[33] !== J ? (h = K && null != J ? (0, a.jsx)(s7, {
                    ...et,
                    readData: J,
                    display: X
                }) : null, m[30] = et, m[31] = K, m[32] = X, m[33] = J, m[34] = h) : h = m[34], m[35] !== en || m[36] !== u || m[37] !== h ? (p = {
                    contentShift: en,
                    headerAction: u,
                    panel: h
                }, m[35] = en, m[36] = u, m[37] = h, m[38] = p) : p = m[38], p
            }(t0);
            if (nG[178] !== rQ || nG[179] !== oj || nG[180] !== rN || nG[181] !== rO || nG[182] !== rg?.current_node || nG[183] !== nL || nG[184] !== rH || nG[185] !== rP || nG[186] !== ow || nG[187] !== oT || nG[188] !== oE || nG[189] !== oP || nG[190] !== nV || nG[191] !== al || nG[192] !== oD || nG[193] !== aA || nG[194] !== r0 || nG[195] !== rM || nG[196] !== aC || nG[197] !== rt || nG[198] !== nJ || nG[199] !== rC || nG[200] !== rr || nG[201] !== rE || nG[202] !== rz || nG[203] !== rw || nG[204] !== aO || nG[205] !== a8 || nG[206] !== o_ || nG[207] !== om || nG[208] !== og || nG[209] !== oe || nG[210] !== aZ || nG[211] !== ag.get || nG[212] !== a0 || nG[213] !== ec?.current_node || nG[214] !== ar || nG[215] !== oz || nG[216] !== oy || nG[217] !== aU || nG[218] !== ro) {
                let e;
                nG[220] !== rN || nG[221] !== rO || nG[222] !== rP || nG[223] !== rE || nG[224] !== aO || nG[225] !== om || nG[226] !== og || nG[227] !== oe || nG[228] !== ag.get || nG[229] !== aU ? (e = oe || null == aO || null == om ? og : (0, ts.a)({
                    ...om,
                    current_node: aO.promptMessageId
                }, {
                    clinicalSearchEnabled: rO,
                    clinicalCitationsEnabled: rN,
                    enableCloudBrowserActivity: rP,
                    ...aU,
                    isWorkConversation: rE,
                    getRenderTelemetry: e => (0, ip.c)(ag.get, e)
                }), nG[220] = rN, nG[221] = rO, nG[222] = rP, nG[223] = rE, nG[224] = aO, nG[225] = om, nG[226] = og, nG[227] = oe, nG[228] = ag.get, nG[229] = aU, nG[230] = e) : e = nG[230];
                let t = (0, td.c)({
                    paragen: aO,
                    hideInitialUserMessage: nV,
                    browserConversationId: void 0,
                    conversationId: nL,
                    enableCloudBrowserActivity: rP,
                    errorMessage: ow,
                    branchingMessageId: oj,
                    isReadOnly: al || rM || aC || null != ar,
                    isTemporaryChat: nJ,
                    isWorkConversation: rC,
                    onRegenerateResponse: rQ || aC || null != ar || al || rM || rz || rw || rr || rt ? void 0 : oP,
                    onEditUserMessage: rQ || null == o_ || rC || al || rM || rz || !ro || rt ? void 0 : oE,
                    onFork: null == o_ || nJ || rz || rw || al || rM ? void 0 : oT,
                    pendingSubmissionAttachments: a8,
                    shareEnabled: null == rH && !nJ && !aC && !al && !rM && !r0,
                    readAloudEnabled: !aC && !rM,
                    feedbackEnabled: !aC && !rM && null == ar,
                    renderedTurns: e,
                    safetyReview: aZ,
                    sharedConversationLastMessageId: ec?.current_node ?? a0 ?? (aC ? rg?.current_node : null),
                    showPendingLoadingMessage: oy,
                    showRequestUserInputStatus: oz && !oD && !aA
                });
                t1 = oe ? (0, sc.a)(t) : t, nG[178] = rQ, nG[179] = oj, nG[180] = rN, nG[181] = rO, nG[182] = rg?.current_node, nG[183] = nL, nG[184] = rH, nG[185] = rP, nG[186] = ow, nG[187] = oT, nG[188] = oE, nG[189] = oP, nG[190] = nV, nG[191] = al, nG[192] = oD, nG[193] = aA, nG[194] = r0, nG[195] = rM, nG[196] = aC, nG[197] = rt, nG[198] = nJ, nG[199] = rC, nG[200] = rr, nG[201] = rE, nG[202] = rz, nG[203] = rw, nG[204] = aO, nG[205] = a8, nG[206] = o_, nG[207] = om, nG[208] = og, nG[209] = oe, nG[210] = aZ, nG[211] = ag.get, nG[212] = a0, nG[213] = ec?.current_node, nG[214] = ar, nG[215] = oz, nG[216] = oy, nG[217] = aU, nG[218] = ro, nG[219] = t1
            } else t1 = nG[219];
            let se = t1,
                sr = !az && !ad && !aC && !oO && !oF.isHidden && r_?.isFullWidth !== !0;
            nG[231] !== nL || nG[232] !== rH ? (t2 = null == rH ? null : (0, a.jsx)(tz.ChatGptGizmoHeader, {
                conversationId: nL,
                gizmoId: rH
            }), nG[231] = nL, nG[232] = rH, nG[233] = t2) : t2 = nG[233];
            let so = t2;
            nG[234] !== al || nG[235] !== aC || nG[236] !== rC ? (t3 = !rC || aC || al ? null : (0, a.jsx)(M.a, {
                hostId: K.a
            }), nG[234] = al, nG[235] = aC, nG[236] = rC, nG[237] = t3) : t3 = nG[237];
            let ss = t3,
                si = !aC && null == ar && !al && !nJ && !aV,
                sd = (0, s.x)(!si || ad || rM ? null : o4.a, nL);
            nG[238] !== nL || nG[239] !== ag || nG[240] !== si ? (t4 = si ? () => {
                let e = ag.get(o4.b, nL);
                e?.title && st(ag, {
                    conversationId: nL,
                    courseId: e.course_id
                }, {
                    preserveFocus: !0
                })
            } : void 0, nG[238] = nL, nG[239] = ag, nG[240] = si, nG[241] = t4) : t4 = nG[241];
            let su = t4;
            nG[242] !== o5 || nG[243] !== nL || nG[244] !== rR || nG[245] !== r9 ? (t5 = null != r9 ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: rR,
                children: (0, a.jsx)(au, {
                    conversationId: nL,
                    placement: "progress",
                    canStartSection: o5
                })
            }) : null, nG[242] = o5, nG[243] = nL, nG[244] = rR, nG[245] = r9, nG[246] = t5) : t5 = nG[246];
            let sh = t5,
                sp = !rK && !al && !rM,
                sm = !nJ && !aC && null != aM,
                sf = sp && null != a1;
            nG[247] !== nJ ? (t6 = !nJ && (0, P.a)({
                browser: !0
            }), nG[247] = nJ, nG[248] = t6) : t6 = nG[248];
            let sv = t6,
                sb = (0, s.x)(!!sf && !sm && !aC && !rE && !!oz && !oD && e8.d, nL),
                sw = sf && (sm || sv || sb);
            nG[249] !== ae || nG[250] !== rE || nG[251] !== r1 ? (t7 = (0, P.a)({
                browser: !0
            }) && !rE && null != r1 && null == ae, nG[249] = ae, nG[250] = rE, nG[251] = r1, nG[252] = t7) : t7 = nG[252];
            let s_ = t7;
            nG[253] !== sw || nG[254] !== s_ || nG[255] !== r4 || nG[256] !== rU || nG[257] !== r1 ? (t8 = sw && null != rU && !s_ ? {
                icon: r4,
                name: r1
            } : void 0, nG[253] = sw, nG[254] = s_, nG[255] = r4, nG[256] = rU, nG[257] = r1, nG[258] = t8) : t8 = nG[258];
            let sS = t8;
            nG[259] !== nL || nG[260] !== rK || nG[261] !== sw || nG[262] !== a1 || nG[263] !== su || nG[264] !== sS ? (t9 = rK ? (0, a.jsx)(eP.BusinessAgentConversationHeader, {
                conversationId: nL,
                fallback: null
            }) : (0, a.jsx)(an, {
                onClick: su,
                hasTitleMenu: sw,
                project: sS,
                title: a1
            }), nG[259] = nL, nG[260] = rK, nG[261] = sw, nG[262] = a1, nG[263] = su, nG[264] = sS, nG[265] = t9) : t9 = nG[265];
            let sI = t9,
                sj = oC && !aC && !al,
                sT = rK ? null : so;
            nG[266] !== s_ || nG[267] !== r4 || nG[268] !== rU || nG[269] !== r1 || nG[270] !== sS ? (ne = null != rU && null == sS ? (0, a.jsx)(n8, {
                projectId: rU,
                name: r1,
                icon: r4,
                linkToProject: s_
            }) : null, nG[266] = s_, nG[267] = r4, nG[268] = rU, nG[269] = r1, nG[270] = sS, nG[271] = ne) : ne = nG[271], nG[272] !== ae || nG[273] !== sT || nG[274] !== ne ? (nt = (0, a.jsxs)(a.Fragment, {
                children: [ae, sT, ne]
            }), nG[272] = ae, nG[273] = sT, nG[274] = ne, nG[275] = nt) : nt = nG[275], nG[276] !== sI || nG[277] !== nJ || nG[278] !== ss || nG[279] !== sj || nG[280] !== nt ? (nn = (0, a.jsx)(n4.a, {
                isTemporaryChat: nJ,
                isCloudTask: sj,
                leading: nt,
                start: sI,
                startActions: ss
            }), nG[276] = sI, nG[277] = nJ, nG[278] = ss, nG[279] = sj, nG[280] = nt, nG[281] = nn) : nn = nG[281];
            let sA = nn;
            if (nG[282] !== aS || nG[283] !== af?.authMethod || nG[284] !== rQ || nG[285] !== at || nG[286] !== rB || nG[287] !== oN || nG[288] !== o5 || nG[289] !== aj || nG[290] !== aB || nG[291] !== rV || nG[292] !== n9 || nG[293] !== rg || nG[294] !== sA || nG[295] !== nL || nG[296] !== rx || nG[297] !== a2 || nG[298] !== sd || nG[299] !== nK || nG[300] !== ow || nG[301] !== r_?.isFullWidth || nG[302] !== rk || nG[303] !== rD || nG[304] !== rp || nG[305] !== oR || nG[306] !== aF || nG[307] !== aT || nG[308] !== sm || nG[309] !== ax || nG[310] !== aE || nG[311] !== sw || nG[312] !== sI || nG[313] !== nq || nG[314] !== a_ || nG[315] !== sb || nG[316] !== sv || nG[317] !== al || nG[318] !== oD || nG[319] !== op || nG[320] !== aA || nG[321] !== aP || nG[322] !== az || nG[323] !== ok || nG[324] !== rX || nG[325] !== ad || nG[326] !== rJ || nG[327] !== rd || nG[328] !== rR || nG[329] !== rM || nG[330] !== rT || !1 !== nG[331] || nG[332] !== aC || nG[333] !== rG || nG[334] !== rn || nG[335] !== rt || nG[336] !== nJ || nG[337] !== rC || nG[338] !== rr || nG[339] !== rE || nG[340] !== rF || nG[341] !== ri || nG[342] !== rz || nG[343] !== rw || nG[344] !== rb || nG[345] !== a1 || nG[346] !== rS.pathname || nG[347] !== rh || nG[348] !== rI?.sidebarAutomationId || nG[349] !== nX || nG[350] !== su || nG[351] !== rj || nG[352] !== r$ || nG[353] !== r4 || nG[354] !== rU || nG[355] !== r1 || nG[356] !== tJ || nG[357] !== rq || nG[358] !== oh || nG[359] !== om || nG[360] !== og || nG[361] !== n2 || nG[362] !== oe || nG[363] !== oF || nG[364] !== rf || nG[365] !== ag || nG[366] !== n$ || nG[367] !== r9 || nG[368] !== sh || nG[369] !== aM || nG[370] !== nZ || nG[371] !== av || nG[372] !== rm || nG[373] !== ar || nG[374] !== r7 || nG[375] !== aV || nG[376] !== si || nG[377] !== oz || nG[378] !== am || nG[379] !== sp || nG[380] !== oy || nG[381] !== o9 || nG[382] !== aR || nG[383] !== sr || nG[384] !== nQ || nG[385] !== se || nG[386] !== ao) {
                nM = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, n, r, o, s, d, h, p, m, v, y = og.flatMap(iT).flatMap(ij),
                        b = y.flatMap(iI);
                    if (!aC && (aS.error instanceof eC.FetchError && 423 === aS.error.status || rJ && null == rh)) {
                        let e;
                        nG[413] !== aS || nG[414] !== nL || nG[415] !== ag ? (e = (0, a.jsx)(sn.a, {
                            onUnlocked: () => {
                                (0, sa.g)(ag.get(sa.f)?.projectId, [nL]), aS.refetch()
                            }
                        }), nG[413] = aS, nG[414] = nL, nG[415] = ag, nG[416] = e) : e = nG[416], nM = e;
                        break e
                    }
                    if (null != r7) {
                        let e;
                        nG[417] !== r7 ? (e = (0, a.jsx)(u.l, {
                            replace: !0,
                            to: r7
                        }), nG[417] = r7, nG[418] = e) : e = nG[418], nM = e;
                        break e
                    }
                    no = sl,
                    nv = null != sd ? nL : null,
                    nG[419] !== rg || nG[420] !== aE || nG[421] !== al || nG[422] !== aP || nG[423] !== ad || nG[424] !== rM || nG[425] !== aC || nG[426] !== rE ? (ny = rE || aC || ad || rM || al || aP || null == rg && !aE ? null : (0, a.jsx)(C.a, {}), nG[419] = rg, nG[420] = aE, nG[421] = al, nG[422] = aP, nG[423] = ad, nG[424] = rM, nG[425] = aC, nG[426] = rE, nG[427] = ny) : ny = nG[427],
                    nG[428] !== aS || nG[429] !== rg || nG[430] !== aT || nG[431] !== aE || nG[432] !== aP || nG[433] !== ad ? (nb = !1, nG[428] = aS, nG[429] = rg, nG[430] = aT, nG[431] = aE, nG[432] = aP, nG[433] = ad, nG[434] = nb) : nb = nG[434],
                    nG[435] !== aS || nG[436] !== rg || nG[437] !== nL || nG[438] !== aT || nG[439] !== aE || nG[440] !== op || nG[441] !== aP || !1 !== nG[442] || nG[443] !== og.length ? (nx = null, nG[435] = aS, nG[436] = rg, nG[437] = nL, nG[438] = aT, nG[439] = aE, nG[440] = op, nG[441] = aP, nG[442] = !1, nG[443] = og.length, nG[444] = nx) : nx = nG[444],
                    nw = !aC && !rM && (0, O.c)() ? (0, a.jsx)(B.c, {
                        callIds: b,
                        hostId: K.a,
                        conversationId: (0, i.Ve)(`chatgpt:${nL}`)
                    }) : null,
                    nG[445] !== a2 || nG[446] !== ad || nG[447] !== av || nG[448] !== ao?.documentTitle ? (n_ = ad ? null : (0, a.jsx)(A.a, {
                        title: null == av ? ao?.documentTitle ?? a2 : null
                    }), nG[445] = a2, nG[446] = ad, nG[447] = av, nG[448] = ao?.documentTitle, nG[449] = n_) : n_ = nG[449],
                    nG[450] !== nL || nG[451] !== ad || nG[452] !== rR || nG[453] !== aC || nG[454] !== nJ || nG[455] !== rE || nG[456] !== se ? (nI = ad || rE ? null : (0, a.jsx)(tU.a, {
                        conversationId: nL,
                        canCopy: !rR,
                        paragenEnabled: !aC,
                        turns: se,
                        loadHistory: !nJ && !aC
                    }), nG[450] = nL, nG[451] = ad, nG[452] = rR, nG[453] = aC, nG[454] = nJ, nG[455] = rE, nG[456] = se, nG[457] = nI) : nI = nG[457];
                    let x = null != rg || aE;nG[458] !== aT || nG[459] !== rE || nG[460] !== x ? (nT = (0, a.jsx)(ew.a, {
                        isWorkConversation: rE,
                        hasConversationContent: x,
                        hasLoadError: aT
                    }), nG[458] = aT, nG[459] = rE, nG[460] = x, nG[461] = nT) : nT = nG[461],
                    nG[462] !== rg || nG[463] !== nL || nG[464] !== aT || nG[465] !== aE || nG[466] !== aP || nG[467] !== ad || nG[468] !== rS.pathname || nG[469] !== ag || nG[470] !== nZ ? (nE = ad || aP || aT || null == rg && !aE ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(sy, {
                            sharedConversationId: nZ
                        }), (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(L.a, {
                                onCommit: () => G.a.contentCommitted(ag, nL, nZ, rS.pathname),
                                onPaint: () => G.a.pagePainted(ag, nL, nZ)
                            }, nZ ?? nL)
                        })]
                    }), nG[462] = rg, nG[463] = nL, nG[464] = aT, nG[465] = aE, nG[466] = aP, nG[467] = ad, nG[468] = rS.pathname, nG[469] = ag, nG[470] = nZ, nG[471] = nE) : nE = nG[471],
                    nG[472] !== af?.authMethod || nG[473] !== oN || nG[474] !== rV || nG[475] !== rg || nG[476] !== sA || nG[477] !== nL || nG[478] !== rx || nG[479] !== a2 || nG[480] !== rD || nG[481] !== oR || nG[482] !== sm || nG[483] !== sw || nG[484] !== sI || nG[485] !== sb || nG[486] !== sv || nG[487] !== al || nG[488] !== ok || nG[489] !== rX || nG[490] !== ad || nG[491] !== rJ || nG[492] !== aC || nG[493] !== nJ || nG[494] !== rr || nG[495] !== rE || nG[496] !== a1 || nG[497] !== rI?.sidebarAutomationId || nG[498] !== su || nG[499] !== rj || nG[500] !== r4 || nG[501] !== rU || nG[502] !== r1 || nG[503] !== rq || nG[504] !== om || nG[505] !== og.length || nG[506] !== ag || nG[507] !== sh || nG[508] !== aM || nG[509] !== ar || nG[510] !== aV || nG[511] !== si || nG[512] !== sp || nG[513] !== o9.headerAction || nG[514] !== aR || nG[515] !== ao ? (nP = ad || null != ao ? null : (0, a.jsxs)(nS.a, {
                        chatIcon: null == rU ? void 0 : r4,
                        header: sA,
                        title: a1,
                        fullScreenTitle: sI,
                        isArchivedPreview: al,
                        children: [null == sh ? null : (0, a.jsx)(n5, {
                            progress: sh
                        }), af?.authMethod === "chatgpt" ? (0, a.jsx)(k.v, {
                            productExperience: rE ? "work" : "chat"
                        }) : null, aC ? (0, a.jsx)(sC.a, {
                            children: null == rq ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(sE, {
                                    data: rq
                                })
                            })
                        }) : null, si ? (0, a.jsx)(nj, {
                            conversationId: nL,
                            scheduledAutomationId: rj ? rI?.sidebarAutomationId : void 0
                        }, nL) : null, o9.headerAction, nJ && !aC && !al && null == rD && null == rV && null == rU && !rX && null != om && (0, l.a)(om).some(iS) ? (0, a.jsx)(f.a.HeaderAction, {
                            actionId: "chatgpt-conversation-save",
                            align: "end",
                            order: 100,
                            children: (0, a.jsx)(sz, {
                                conversationId: nL
                            })
                        }) : null, sp ? (0, a.jsx)(n4.b, {
                            hasTitleMenu: sw,
                            menu: sm ? (0, a.jsx)(n1, {
                                onTitleClick: su,
                                showMenu: sw,
                                conversationId: nL,
                                title: a2,
                                isHandoffPending: ok,
                                isArchived: rg?.is_archived === !0,
                                isChatConversation: null != rg && !rE,
                                onHandoff: oN ? oR : void 0,
                                onOpenMessage: async e => {
                                    aH.current?.signal.aborted === !1 && ag.get(g.b)?.pathname === ag.value.pathname && await aG.current?.scrollToMessage(e)
                                },
                                projectId: rU,
                                projectName: r1,
                                serverConversationId: aM,
                                conversationOrigin: rx
                            }) : sw && (0, a.jsx)(n3, {
                                title: a2,
                                includePlugins: sv,
                                lockdownConversationId: sb ? nL : null
                            }),
                            children: nJ || aC || rJ ? null : (0, a.jsx)(tx, {
                                conversationId: nL,
                                projectId: rU,
                                sharedProjectConversation: ar,
                                isReady: (null != aM || null != ar) && og.length > 0 && (aR ?? rg?.current_node) != null,
                                isRestricted: aV || rX,
                                isStreaming: rr
                            })
                        }) : null]
                    }), nG[472] = af?.authMethod, nG[473] = oN, nG[474] = rV, nG[475] = rg, nG[476] = sA, nG[477] = nL, nG[478] = rx, nG[479] = a2, nG[480] = rD, nG[481] = oR, nG[482] = sm, nG[483] = sw, nG[484] = sI, nG[485] = sb, nG[486] = sv, nG[487] = al, nG[488] = ok, nG[489] = rX, nG[490] = ad, nG[491] = rJ, nG[492] = aC, nG[493] = nJ, nG[494] = rr, nG[495] = rE, nG[496] = a1, nG[497] = rI?.sidebarAutomationId, nG[498] = su, nG[499] = rj, nG[500] = r4, nG[501] = rU, nG[502] = r1, nG[503] = rq, nG[504] = om, nG[505] = og.length, nG[506] = ag, nG[507] = sh, nG[508] = aM, nG[509] = ar, nG[510] = aV, nG[511] = si, nG[512] = sp, nG[513] = o9.headerAction, nG[514] = aR, nG[515] = ao, nG[516] = nP) : nP = nG[516],
                    nA = null,
                    nr = tF.a,
                    nu = aB,
                    nh = rx,
                    np = !am || !oz || oF.isHidden || oD || rQ || rR || aA || al || rM || rG || rz || rw || rn || rt,
                    nm = nJ,
                    ng = rU,
                    nf = null != rV,
                    na = em.c,
                    ns = rk,
                    nG[517] !== ad || nG[518] !== rT || nG[519] !== rE || nG[520] !== sh || nG[521] !== ao ? (ni = ad || null != ao ? sh : rT && (0, eg.a)() && !rE && (0, a.jsx)("div", {
                        className: "h-px",
                        "aria-hidden": !0
                    }), nG[517] = ad, nG[518] = rT, nG[519] = rE, nG[520] = sh, nG[521] = ao, nG[522] = ni) : ni = nG[522],
                    nl = at;
                    let w = null == r9 ? "flex h-full min-h-0 flex-col" : "h-full",
                        _ = rf ?? a2,
                        S = aV || rB,
                        I = r_?.isFullWidth === !0;nG[523] !== o5 || nG[524] !== r9 ? (e = null == r9 ? null : {
                        index: r9.selectedIndex,
                        canStart: o5
                    }, nG[523] = o5, nG[524] = r9, nG[525] = e) : e = nG[525];
                    let T = !rE,
                        E = !rb,
                        P = !oe && rr;nG[526] !== rg?.is_archived || nG[527] !== nL || nG[528] !== al || nG[529] !== ad || nG[530] !== aC || nG[531] !== nJ || nG[532] !== rr || nG[533] !== rE ? (t = ad || !rE || aC || al || rg?.is_archived === !0 || nJ ? null : (0, a.jsx)(c.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(ac, {
                            conversationId: nL,
                            isTurnActive: rr
                        })
                    }), nG[526] = rg?.is_archived, nG[527] = nL, nG[528] = al, nG[529] = ad, nG[530] = aC, nG[531] = nJ, nG[532] = rr, nG[533] = rE, nG[534] = t) : t = nG[534],
                    nG[535] !== nL || nG[536] !== al || nG[537] !== aM ? (n = al ? (0, a.jsx)(ed, {
                        conversationId: aM ?? nL,
                        kind: "chatgpt"
                    }, aM ?? nL) : void 0, nG[535] = nL, nG[536] = al, nG[537] = aM, nG[538] = n) : n = nG[538],
                    nG[539] !== rQ || nG[540] !== oN || nG[541] !== oR || nG[542] !== aT || nG[543] !== aP || nG[544] !== ok || nG[545] !== nJ || nG[546] !== rF || nG[547] !== ri || nG[548] !== og.length ? (r = aP || aT || !(og.length > 0) || rQ || !rF || nJ ? null : (0, a.jsx)(tW, {
                        canConvert: oN,
                        isChatInstantAvailable: !ri,
                        isConverting: ok,
                        onConvert: oR
                    }), nG[539] = rQ, nG[540] = oN, nG[541] = oR, nG[542] = aT, nG[543] = aP, nG[544] = ok, nG[545] = nJ, nG[546] = rF, nG[547] = ri, nG[548] = og.length, nG[549] = r) : r = nG[549],
                    nG[550] !== nL || nG[551] !== ow || nG[552] !== oD || nG[553] !== aA || nG[554] !== rC || nG[555] !== og.length || nG[556] !== oe || nG[557] !== oz || nG[558] !== oy ? (o = 0 === og.length ? (0, a.jsx)(tu.a, {
                        conversationId: nL,
                        errorMessage: oe ? null : ow,
                        isWorkConversation: rC,
                        showPendingLoadingMessage: !oe && oy,
                        showRequestUserInputStatus: oz && !oD && !aA
                    }) : null, nG[550] = nL, nG[551] = ow, nG[552] = oD, nG[553] = aA, nG[554] = rC, nG[555] = og.length, nG[556] = oe, nG[557] = oz, nG[558] = oy, nG[559] = o) : o = nG[559],
                    nG[560] !== rQ || nG[561] !== nL || nG[562] !== nJ || nG[563] !== og.length || nG[564] !== rm || nG[565] !== oz ? (s = oz && !rQ ? (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(j.BrowserComposerDisclaimer, {
                            supportsMessageDisclosures: !0,
                            conversationId: nL,
                            hasUserMessage: og.length > 0,
                            isTemporaryChat: nJ,
                            regulatedConnectorKindOverride: rm
                        })
                    }) : void 0, nG[560] = rQ, nG[561] = nL, nG[562] = nJ, nG[563] = og.length, nG[564] = rm, nG[565] = oz, nG[566] = s) : s = nG[566],
                    nG[567] !== nL || nG[568] !== rp || nG[569] !== oD || nG[570] !== rX || nG[571] !== rM || nG[572] !== r$ || nG[573] !== rU || nG[574] !== oz ? (d = oz && !oD ? (0, a.jsx)(sg, {
                        conversationId: nL,
                        moreDetailsEnabled: !rX && (null == rU || null != r$),
                        onAddSelectedText: rp.bind(null, rM)
                    }) : null, nG[567] = nL, nG[568] = rp, nG[569] = oD, nG[570] = rX, nG[571] = rM, nG[572] = r$, nG[573] = rU, nG[574] = oz, nG[575] = d) : d = nG[575],
                    nG[576] !== rQ || nG[577] !== aj || nG[578] !== aB || nG[579] !== nK || nG[580] !== r_?.isFullWidth || nG[581] !== rD || nG[582] !== aF || nG[583] !== ax || nG[584] !== nq || nG[585] !== oD || nG[586] !== aA || nG[587] !== ad || nG[588] !== rR || nG[589] !== aC || nG[590] !== nJ || nG[591] !== rC || nG[592] !== rE || nG[593] !== nX || nG[594] !== tJ || nG[595] !== n2 || nG[596] !== oF || nG[597] !== am || nG[598] !== sr || nG[599] !== ao ? (h = e => (0, a.jsx)(nC, {
                        conversationId: aB,
                        composerRef: aD,
                        requiredSystemHints: n2,
                        workspace: ao,
                        isInlinePreview: ad,
                        hideModelPicker: nq,
                        showFilePicker: am,
                        disableAutoFocus: nK,
                        disabled: oD,
                        readOnlyPlaceholder: tJ,
                        awaitingGptContinuation: rQ,
                        routePresentation: oF,
                        trackReadState: sr,
                        trackShownImpressions: !rR && r_?.isFullWidth !== !0,
                        isSharedConversation: aC,
                        isSubmitDisabled: aA,
                        retainLiveModelPicker: aj && !ad && !aC && !rE && null == rD,
                        showConversationFollowups: !ax && !nJ && !rC && "floating" !== oF.placement,
                        isTemporaryChat: nJ,
                        isWorkConversation: rC,
                        placement: e,
                        onSubmitAccepted: e => {
                            nX?.(e), aC && aF()
                        }
                    }), nG[576] = rQ, nG[577] = aj, nG[578] = aB, nG[579] = nK, nG[580] = r_?.isFullWidth, nG[581] = rD, nG[582] = aF, nG[583] = ax, nG[584] = nq, nG[585] = oD, nG[586] = aA, nG[587] = ad, nG[588] = rR, nG[589] = aC, nG[590] = nJ, nG[591] = rC, nG[592] = rE, nG[593] = nX, nG[594] = tJ, nG[595] = n2, nG[596] = oF, nG[597] = am, nG[598] = sr, nG[599] = ao, nG[600] = h) : h = nG[600],
                    nG[601] !== aB || nG[602] !== rV || nG[603] !== n9 || nG[604] !== nL || nG[605] !== ax || nG[606] !== a_ || nG[607] !== oD || nG[608] !== az || nG[609] !== ad || nG[610] !== aC || nG[611] !== nJ || nG[612] !== rC || nG[613] !== oh || nG[614] !== oF || nG[615] !== n$ || nG[616] !== nZ || nG[617] !== oz || nG[618] !== o9.contentShift || nG[619] !== P || nG[620] !== t || nG[621] !== n || nG[622] !== r || nG[623] !== o || nG[624] !== s || nG[625] !== d || nG[626] !== h || nG[627] !== _ || nG[628] !== S || nG[629] !== I || nG[630] !== e || nG[631] !== T || nG[632] !== E || nG[633] !== sr || nG[634] !== nQ || nG[635] !== se || nG[636] !== ao ? (p = (0, a.jsx)(oG, {
                        ref: aG,
                        printTitle: _,
                        trackReadState: sr,
                        workspace: ao,
                        shouldBlockMcpApps: S,
                        isCoveredByFloatingPanel: I,
                        isFormOnly: az,
                        isInlinePreview: ad,
                        transcriptPresentation: nQ,
                        scrollOrigin: n$,
                        contentX: o9.contentShift,
                        conversationId: nL,
                        composerConversationId: aB,
                        section: e,
                        composerLeadingContent: n9,
                        isChatConversation: T,
                        customGptId: rV,
                        history: a_,
                        entries: se,
                        renderState: oh,
                        isComposerDisabled: oD,
                        hasSharedHistory: ax,
                        showEmptyState: E,
                        isSharedConversation: aC,
                        isTemporaryChat: nJ,
                        isTurnActive: P,
                        isWorkConversation: rC,
                        onboardingPrelude: t,
                        sharedConversationId: nZ,
                        showComposer: oz,
                        archivedPreviewFooter: n,
                        routeComposerPresentation: oF,
                        aboveComposerContent: r,
                        emptyThreadStatus: o,
                        disclaimer: s,
                        selectedTextActions: d,
                        renderComposer: h
                    }), nG[601] = aB, nG[602] = rV, nG[603] = n9, nG[604] = nL, nG[605] = ax, nG[606] = a_, nG[607] = oD, nG[608] = az, nG[609] = ad, nG[610] = aC, nG[611] = nJ, nG[612] = rC, nG[613] = oh, nG[614] = oF, nG[615] = n$, nG[616] = nZ, nG[617] = oz, nG[618] = o9.contentShift, nG[619] = P, nG[620] = t, nG[621] = n, nG[622] = r, nG[623] = o, nG[624] = s, nG[625] = d, nG[626] = h, nG[627] = _, nG[628] = S, nG[629] = I, nG[630] = e, nG[631] = T, nG[632] = E, nG[633] = sr, nG[634] = nQ, nG[635] = se, nG[636] = ao, nG[637] = p) : p = nG[637],
                    nG[638] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, a.jsx)(tB.a, {}), nG[638] = m) : m = nG[638],
                    nG[639] !== ad ? (v = null, nG[639] = ad, nG[640] = v) : v = nG[640],
                    nG[641] !== rR || nG[642] !== o9.panel || nG[643] !== p || nG[644] !== v || nG[645] !== w ? (nc = (0, a.jsxs)("div", {
                        className: w,
                        inert: rR,
                        children: [p, o9.panel, m, v]
                    }), nG[641] = rR, nG[642] = o9.panel, nG[643] = p, nG[644] = v, nG[645] = w, nG[646] = nc) : nc = nG[646],
                    nd = !rM && (0, O.c)() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(iv, {
                            conversationId: nL,
                            shouldBlockExternalEgress: aV || rB,
                            widgets: y.filter(i_)
                        }), aC ? null : (0, a.jsx)(F.a, {
                            blockedWidgetSource: rd ? void 0 : "descriptor",
                            transcriptMcpAppIds: (0, im.c)(nL, y, rd),
                            shouldBlockExternalEgress: aV || rB
                        })]
                    }) : null
                }
                nG[282] = aS, nG[283] = af?.authMethod, nG[284] = rQ, nG[285] = at, nG[286] = rB, nG[287] = oN, nG[288] = o5, nG[289] = aj, nG[290] = aB, nG[291] = rV, nG[292] = n9, nG[293] = rg, nG[294] = sA, nG[295] = nL, nG[296] = rx, nG[297] = a2, nG[298] = sd, nG[299] = nK, nG[300] = ow, nG[301] = r_?.isFullWidth, nG[302] = rk, nG[303] = rD, nG[304] = rp, nG[305] = oR, nG[306] = aF, nG[307] = aT, nG[308] = sm, nG[309] = ax, nG[310] = aE, nG[311] = sw, nG[312] = sI, nG[313] = nq, nG[314] = a_, nG[315] = sb, nG[316] = sv, nG[317] = al, nG[318] = oD, nG[319] = op, nG[320] = aA, nG[321] = aP, nG[322] = az, nG[323] = ok, nG[324] = rX, nG[325] = ad, nG[326] = rJ, nG[327] = rd, nG[328] = rR, nG[329] = rM, nG[330] = rT, nG[331] = !1, nG[332] = aC, nG[333] = rG, nG[334] = rn, nG[335] = rt, nG[336] = nJ, nG[337] = rC, nG[338] = rr, nG[339] = rE, nG[340] = rF, nG[341] = ri, nG[342] = rz, nG[343] = rw, nG[344] = rb, nG[345] = a1, nG[346] = rS.pathname, nG[347] = rh, nG[348] = rI?.sidebarAutomationId, nG[349] = nX, nG[350] = su, nG[351] = rj, nG[352] = r$, nG[353] = r4, nG[354] = rU, nG[355] = r1, nG[356] = tJ, nG[357] = rq, nG[358] = oh, nG[359] = om, nG[360] = og, nG[361] = n2, nG[362] = oe, nG[363] = oF, nG[364] = rf, nG[365] = ag, nG[366] = n$, nG[367] = r9, nG[368] = sh, nG[369] = aM, nG[370] = nZ, nG[371] = av, nG[372] = rm, nG[373] = ar, nG[374] = r7, nG[375] = aV, nG[376] = si, nG[377] = oz, nG[378] = am, nG[379] = sp, nG[380] = oy, nG[381] = o9, nG[382] = aR, nG[383] = sr, nG[384] = nQ, nG[385] = se, nG[386] = ao, nG[387] = na, nG[388] = nr, nG[389] = no, nG[390] = ns, nG[391] = ni, nG[392] = nl, nG[393] = nc, nG[394] = nd, nG[395] = nu, nG[396] = nh, nG[397] = np, nG[398] = nm, nG[399] = ng, nG[400] = nf, nG[401] = nv, nG[402] = ny, nG[403] = nb, nG[404] = nx, nG[405] = nw, nG[406] = n_, nG[407] = nI, nG[408] = nT, nG[409] = nE, nG[410] = nP, nG[411] = nA, nG[412] = nM
            } else na = nG[387], nr = nG[388], no = nG[389], ns = nG[390], ni = nG[391], nl = nG[392], nc = nG[393], nd = nG[394], nu = nG[395], nh = nG[396], np = nG[397], nm = nG[398], ng = nG[399], nf = nG[400], nv = nG[401], ny = nG[402], nb = nG[403], nx = nG[404], nw = nG[405], n_ = nG[406], nI = nG[407], nT = nG[408], nE = nG[409], nP = nG[410], nA = nG[411], nM = nG[412];
            if (nM !== Symbol.for("react.early_return_sentinel")) return nM;
            nG[647] !== na || nG[648] !== ns || nG[649] !== ni || nG[650] !== nl || nG[651] !== nc || nG[652] !== nd ? (nk = (0, a.jsxs)(na, {
                floatingPanelWidth: ns,
                header: ni,
                banner: nl,
                children: [nc, nd]
            }), nG[647] = na, nG[648] = ns, nG[649] = ni, nG[650] = nl, nG[651] = nc, nG[652] = nd, nG[653] = nk) : nk = nG[653], nG[654] !== nr || nG[655] !== nu || nG[656] !== nh || nG[657] !== np || nG[658] !== nm || nG[659] !== ng || nG[660] !== nf || nG[661] !== nk ? (nR = (0, a.jsx)(nr, {
                conversationId: nu,
                conversationOrigin: nh,
                disabled: np,
                isTemporaryChat: nm,
                projectId: ng,
                requiresGizmoId: nf,
                children: nk
            }), nG[654] = nr, nG[655] = nu, nG[656] = nh, nG[657] = np, nG[658] = nm, nG[659] = ng, nG[660] = nf, nG[661] = nk, nG[662] = nR) : nR = nG[662], nG[663] !== no || nG[664] !== nv || nG[665] !== ny || nG[666] !== nb || nG[667] !== nx || nG[668] !== nw || nG[669] !== n_ || nG[670] !== nI || nG[671] !== nT || nG[672] !== nE || nG[673] !== nP || nG[674] !== nA || nG[675] !== nR ? (nN = (0, a.jsxs)(no, {
                courseChatId: nv,
                children: [ny, nb, nx, nw, n_, nI, nT, nE, nP, nA, nR]
            }), nG[663] = no, nG[664] = nv, nG[665] = ny, nG[666] = nb, nG[667] = nx, nG[668] = nw, nG[669] = n_, nG[670] = nI, nG[671] = nT, nG[672] = nE, nG[673] = nP, nG[674] = nA, nG[675] = nR, nG[676] = nN) : nN = nG[676];
            let sM = nN,
                sk = !ad && !rC,
                sR = aC || !aS.isFetchedAfterMount || aS.isFetching || aj ? null : aS.error,
                sN = aT ? aS.error : null,
                sO = !rE && !aP;
            return nG[677] !== aL || nG[678] !== aB || nG[679] !== nZ ? (nO = {
                conversationId: aB,
                composer: aL,
                sharedConversationId: nZ
            }, nG[677] = aL, nG[678] = aB, nG[679] = nZ, nG[680] = nO) : nO = nG[680], nG[681] !== sM || nG[682] !== nO ? (nB = (0, a.jsx)(tr.a, {
                value: nO,
                children: sM
            }), nG[681] = sM, nG[682] = nO, nG[683] = nB) : nB = nG[683], nG[684] !== nB || nG[685] !== sO ? (nF = (0, a.jsx)(h.a, {
                enabled: sO,
                children: nB
            }), nG[684] = nB, nG[685] = sO, nG[686] = nF) : nF = nG[686], nG[687] !== aI || nG[688] !== oS || nG[689] !== aM || nG[690] !== nF || nG[691] !== sk || nG[692] !== sR || nG[693] !== sN ? (nz = (0, a.jsx)(_.a, {
                showChatFallback: sk,
                conversationId: aM,
                error: sR,
                loadError: sN,
                canRetry: aI,
                isWorkConversation: oS,
                children: nF
            }), nG[687] = aI, nG[688] = oS, nG[689] = aM, nG[690] = nF, nG[691] = sk, nG[692] = sR, nG[693] = sN, nG[694] = nz) : nz = nG[694], nz
        }

        function i_(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function iS(e) {
            return "user" === e.author.role
        }

        function iI(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function ij(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function iT(e) {
            let {
                turn: t
            } = e;
            return t.items
        }
    }),
    Ppno: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("zd8w"),
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
                let t, n, m, g, f, v, y, b, x, C, w, _, S, I, j, T, E, P, A = (0, r.c)(68),
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
                    H = (0, s.useRef)(N),
                    W = (0, o.x)(null == O ? 0 : u.b, O ?? ""),
                    q = (0, s.useRef)(W),
                    U = (0, s.useRef)(G),
                    K = (0, s.useRef)(null),
                    V = (0, s.useRef)(null),
                    Q = (0, d.b)();
                A[3] !== Q ? (n = () => new c.a(Q), A[3] = Q, A[4] = n) : n = A[4];
                let [$] = (0, s.useState)(n), {
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
                let eo = (0, h.a)(m);
                A[9] !== Y || A[10] !== Q ? (g = () => {
                    Y(), Q.scrollToBottom()
                }, A[9] = Y, A[10] = Q, A[11] = g) : g = A[11];
                let es = (0, h.a)(g);
                A[12] !== es || A[13] !== W ? (f = () => {
                    q.current !== W && (q.current = W, es())
                }, v = [W, es], A[12] = es, A[13] = W, A[14] = f, A[15] = v) : (f = A[14], v = A[15]), (0, s.useLayoutEffect)(f, v), A[16] !== X || A[17] !== J || A[18] !== et || A[19] !== $.height || A[20] !== $.holdViewport || A[21] !== er || A[22] !== es ? (y = () => er.register({
                    consumeGrowth: X,
                    getHeightPx: J,
                    holdViewport: $.holdViewport,
                    prepareThreadEndContent: et,
                    scrollToBottom: es
                }, $.height).dispose, A[16] = X, A[17] = J, A[18] = et, A[19] = $.height, A[20] = $.holdViewport, A[21] = er, A[22] = es, A[23] = y) : y = A[23], A[24] !== X || A[25] !== J || A[26] !== et || A[27] !== $ || A[28] !== er || A[29] !== es ? (b = [X, J, et, $, er, es], A[24] = X, A[25] = J, A[26] = et, A[27] = $, A[28] = er, A[29] = es, A[30] = b) : b = A[30], (0, s.useInsertionEffect)(y, b), A[31] === Symbol.for("react.memo_cache_sentinel") ? (x = (e, t) => {
                    K.current = {
                        turnKey: e,
                        element: t
                    }, V.current?.(e, t)
                }, A[31] = x) : x = A[31];
                let ei = (0, h.a)(x);
                A[32] === Symbol.for("react.memo_cache_sentinel") ? (C = e => {
                    V.current = e;
                    let t = K.current;
                    return null != t && e(t.turnKey, t.element), () => {
                        V.current = null
                    }
                }, A[32] = C) : C = A[32];
                let el = (0, h.a)(C);
                A[33] !== ea || A[34] !== N || A[35] !== ee || A[36] !== D ? (w = () => {
                    let e = ea();
                    if (null != e && 0 !== e.clientHeight)
                        if (D && null != N) {
                            let t = p(e, N);
                            if (null == t) return;
                            ee(t)
                        } else ee()
                }, A[33] = ea, A[34] = N, A[35] = ee, A[36] = D, A[37] = w) : w = A[37];
                let ec = (0, s.useEffectEvent)(w);
                return A[38] !== Y || A[39] !== X || A[40] !== Z || A[41] !== J || A[42] !== B || A[43] !== ei || A[44] !== eo || A[45] !== D ? (_ = () => (B({
                    voiceAutoScrollEnabled: D,
                    clear: Y,
                    consumeGrowth: X,
                    getHeightPx: J,
                    ensureScrollRoomForAnchor: Z,
                    onTurnLayoutReady: ei,
                    place: eo
                }), () => {
                    B(null)
                }), S = [Y, X, J, Z, B, ei, eo, D], A[38] = Y, A[39] = X, A[40] = Z, A[41] = J, A[42] = B, A[43] = ei, A[44] = eo, A[45] = D, A[46] = _, A[47] = S) : (_ = A[46], S = A[47]), (0, s.useLayoutEffect)(_, S), A[48] !== ea || A[49] !== G || A[50] !== N || A[51] !== eo || A[52] !== $ || A[53] !== el || A[54] !== D ? (I = () => {
                    let e = H.current,
                        t = U.current;
                    if (H.current = N, U.current = G, D && !G && !t && null != N && N !== e) {
                        var n, a, r, o, s;
                        let e, t, i, l, c;
                        return n = N, a = ea, r = eo, o = el, s = $.getPendingPlacementSignal(), t = null, i = null, l = !1, c = () => {
                            l = !0, null != t && (cancelAnimationFrame(t), t = null), s.removeEventListener("abort", c), e?.()
                        }, s.addEventListener("abort", c, {
                            once: !0
                        }), e = o((e, o) => {
                            l || e !== n || (i = o, null == t && (t = requestAnimationFrame(() => {
                                t = null;
                                let e = a(),
                                    n = i?.querySelector("[data-user-message-bubble]") ?? i;
                                null != e && 0 !== e.clientHeight && null != n && e.contains(n) && !(n.getBoundingClientRect().height <= 0) && (c(), r(n))
                            })))
                        }), c
                    }
                }, j = [ea, G, N, eo, el, $, D], A[48] = ea, A[49] = G, A[50] = N, A[51] = eo, A[52] = $, A[53] = el, A[54] = D, A[55] = I, A[56] = j) : (I = A[55], j = A[56]), (0, s.useLayoutEffect)(I, j), A[57] !== en || A[58] !== M || A[59] !== ec || A[60] !== $ ? (T = () => {
                    if (null == M) return;
                    let e = $.getPendingPlacementSignal();
                    return en(() => {
                        e.aborted || ec()
                    })
                }, A[57] = en, A[58] = M, A[59] = ec, A[60] = $, A[61] = T) : T = A[61], A[62] !== en || A[63] !== M || A[64] !== $ ? (E = [en, M, $], A[62] = en, A[63] = M, A[64] = $, A[65] = E) : E = A[65], (0, s.useLayoutEffect)(T, E), A[66] !== $ ? (P = (0, a.jsx)(l.a, {
                    controller: $
                }), A[66] = $, A[67] = P) : P = A[67], P
            }
        })
    }),
    TRQ3: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("jqIZ"),
            i = n("OWtl"),
            l = n("Ow2S"),
            c = n("wwvo"),
            d = n("x4uR"),
            u = n("u4MG"),
            h = n("OOaz"),
            p = n("dQRk"),
            m = n("jAnS");
        let g = (0, o.d)(i.a, (e, t) => {
            let {
                get: n
            } = t, a = n(p.j, e);
            return null != a ? a : n(p.E, e) || n(l.j, e) || null != n(l.z, e) ? void 0 : null
        });
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, f, v, y, b, x = (0, r.c)(36),
                    {
                        children: C,
                        conversationId: w,
                        routePattern: _,
                        homePath: S
                    } = e,
                    I = void 0 === S ? "/" : S,
                    j = (0, o.y)(i.a),
                    {
                        hash: T,
                        key: E,
                        pathname: P,
                        search: A,
                        state: M
                    } = (0, s.Y)(),
                    {
                        conversationId: k,
                        gizmoId: R
                    } = (0, s.cb)(),
                    N = (0, o.x)(g, w),
                    O = (0, o.x)(p.E, w),
                    B = (0, o.x)(p.T, w),
                    F = O ? B : R;
                x[0] !== F ? (t = null != F && (0, u.a)(F) ? F : null, x[0] = F, x[1] = t) : t = x[1], x[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                    enabled: !1
                }, x[2] = n) : n = x[2];
                let {
                    data: z
                } = (0, o.x)(d.b, t, n);
                x[3] !== F ? (l = null == F || (0, u.a)(F) ? null : F, x[3] = F, x[4] = l) : l = x[4], x[5] === Symbol.for("react.memo_cache_sentinel") ? (f = {
                    enabled: !1
                }, x[5] = f) : f = x[5];
                let {
                    data: G
                } = (0, o.x)(c.b, l, f);
                if (null === N || (0, m.i)(A) && null != N && !O) {
                    let e;
                    return x[6] !== I || x[7] !== A ? (e = (0, a.jsx)(s.l, {
                        replace: !0,
                        to: {
                            pathname: I,
                            search: A
                        }
                    }), x[6] = I, x[7] = A, x[8] = e) : e = x[8], e
                }
                x[9] !== w || x[10] !== G || x[11] !== F || x[12] !== z || x[13] !== N || x[14] !== _ ? (v = null != _ ? (0, s.C)(_, {
                    conversationId: N ?? w
                }) : (0, m.c)(N ?? w, {
                    gizmoId: z?.gizmo.short_url ?? G?.gizmo.short_url ?? F
                }), x[9] = w, x[10] = G, x[11] = F, x[12] = z, x[13] = N, x[14] = _, x[15] = v) : v = x[15];
                let L = v;
                if (x[16] !== w || x[17] !== L || x[18] !== k || x[19] !== T || x[20] !== E || x[21] !== P || x[22] !== N || x[23] !== j || x[24] !== A || x[25] !== M) {
                    let e = new URLSearchParams(A),
                        t = null != N && e.has("mfr"),
                        n = j.get(p.y, w),
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
                    y = P !== L || t ? (0, a.jsx)(s.l, {
                        replace: !0,
                        state: "tpp" === n || "flora" === n ? {
                            ...r,
                            workTurnVisit: (0, m.f)(j, E, M?.workTurnVisit)
                        } : r,
                        to: {
                            hash: t ? "" : T,
                            pathname: L,
                            search: t ? e.toString() : A
                        }
                    }) : null, x[16] = w, x[17] = L, x[18] = k, x[19] = T, x[20] = E, x[21] = P, x[22] = N, x[23] = j, x[24] = A, x[25] = M, x[26] = y
                } else y = x[26];
                return x[33] !== C || x[34] !== y ? (b = (0, a.jsxs)(a.Fragment, {
                    children: [y, C]
                }), x[33] = C, x[34] = y, x[35] = b) : b = x[35], b
            }
        })
    }),
    xtkq: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("zd8w"),
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
                    p = (0, o.y)(l.a),
                    m = (0, o.z)(c.e),
                    g = (0, s.useContext)(i.a);
                return h[0] !== p ? (e = () => (p.set(c.f, !0), () => {
                    p.set(c.f, !1), (0, c.a)(p)
                }), t = [p], h[0] = p, h[1] = e, h[2] = t) : (e = h[1], t = h[2]), (0, s.useLayoutEffect)(e, t), h[3] !== g || h[4] !== m ? (n = null == m ? null : (0, a.jsx)(a.Fragment, {
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
            o = n("mBJV"),
            s = n("BolX"),
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
            C = n("yGJW"),
            w = n("gBBC"),
            _ = n("OWtl"),
            S = n("hZax"),
            I = n("JYRT"),
            j = n("wwvo"),
            T = n("wrCb"),
            E = n("H7Nt"),
            P = n("vzxm"),
            A = n("jAnS"),
            M = n("wzUW"),
            k = n("Q9Us"),
            R = n("fwYa"),
            N = n("qfGT");
        let O = (0, v.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function B(e) {
            let t, n, v, B, F, z, G, L, D, H, W, q, U, K, V, Q, $, Y, X, J, Z = (0, r.c)(56),
                {
                    gizmo: ee
                } = e,
                et = (0, s.y)(_.a),
                en = (0, l.a)(),
                {
                    search: ea
                } = (0, d.Y)(),
                er = (0, d._)(),
                [eo, es] = (0, i.useState)(!1),
                ei = (0, S.f)("2160578039"),
                el = (0, s.x)(I.a, "2513446768"),
                ec = ei && "gpt" === ee.gizmo.gizmo_type && null != ee.gizmo.migrated_plugin_id;
            Z[0] !== el ? (t = el?.get("disable_gpt_updates", !1), Z[0] = el, Z[1] = t) : t = Z[1];
            let ed = t,
                eu = ee.gizmo.current_user_permission?.can_write && !ec && !ed,
                {
                    data: eh
                } = (0, s.z)(j.c);
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
                    e.defaultPrevented || ((0, C.a)(et, o.rc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: ee.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), es(!1), (0, w.c)(et, null), (0, h.m)(et, "chat"), er(eg, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(m.c.ItemIcon, {
                    children: (0, a.jsx)(f.Qh, {})
                }), (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat",
                    description: "Short GPT actions menu label that opens a new conversation with the same custom GPT, rather than switching to general ChatGPT"
                })]
            }) : null, Z[18] = ee.gizmo.gizmo_type, Z[19] = ee.gizmo.id, Z[20] = er, Z[21] = eg, Z[22] = et, Z[23] = H) : H = Z[23], Z[24] !== ee || Z[25] !== et ? (W = () => (0, y.f)(et, O, {
                accountId: et.get(u.f),
                resource: ee
            }), Z[24] = ee, Z[25] = et, Z[26] = W) : W = Z[26], Z[27] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, a.jsx)(m.c.ItemIcon, {
                children: (0, a.jsx)(f.je, {})
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
                (0, j.e)(et, ee, !ep).catch(() => {
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
            }), Z[46] = ee, Z[47] = X) : X = Z[47], Z[48] !== eo || Z[49] !== H || Z[50] !== K || Z[51] !== $ || Z[52] !== Y || Z[53] !== X || Z[54] !== D ? (J = (0, a.jsxs)(m.a, {
                align: "start",
                contentWidth: "menu",
                open: eo,
                onOpenChange: es,
                triggerButton: D,
                children: [H, K, $, Y, X]
            }), Z[48] = eo, Z[49] = H, Z[50] = K, Z[51] = $, Z[52] = Y, Z[53] = X, Z[54] = D, Z[55] = J) : J = Z[55], J
        }
        n.d(t, {}, {
            ChatGptGizmoHeader: function(e) {
                let t, n, o, i, l, c = (0, r.c)(12),
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
                } = (0, s.x)(j.b, t);
                if (null == h) return null;
                c[3] !== h.gizmo.display.name ? (n = h.gizmo.display.name.trim(), c[3] = h.gizmo.display.name, c[4] = n) : n = c[4];
                let p = n;
                return c[5] !== p ? (o = p ? (0, a.jsx)("span", {
                    className: "truncate",
                    children: p
                }) : null, c[5] = p, c[6] = o) : o = c[6], c[7] !== h ? (i = (0, a.jsx)(B, {
                    gizmo: h
                }), c[7] = h, c[8] = i) : i = c[8], c[9] !== o || c[10] !== i ? (l = (0, a.jsxs)("div", {
                    className: "flex min-w-0 items-center gap-1 select-none",
                    children: [o, i]
                }), c[9] = o, c[10] = i, c[11] = l) : l = c[11], l
            }
        })
    }),
    JlMc: (function(e, t, n) {
        var a = n("QosV"),
            r = n("BolX"),
            o = n("zd8w"),
            s = n("RU3e"),
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
                    v = (0, o.useId)();
                return h[0] !== p || h[1] !== v || h[2] !== f ? (t = () => (f.set(c.b, e => new Map(e).set(v, p)), f.get(c.a)?.dismissCurrent(), () => {
                    f.set(c.b, e => {
                        let t = new Map(e);
                        return t.delete(v), t
                    })
                }), n = [p, v, f], h[0] = p, h[1] = v, h[2] = f, h[3] = t, h[4] = n) : (t = h[3], n = h[4]), (0, o.useEffect)(t, n), h[5] !== p || h[6] !== g || h[7] !== f ? (d = () => {
                    if (!g) return;
                    let e = f.watch(e => {
                            let {
                                get: t
                            } = e
                        }),
                        t = f.watch(e => {
                            let {
                                get: t
                            } = e, n = !0 === t(s.b);
                            (0, l.cc)(f, p, n)
                        });
                    return () => {
                        e(), t(), (0, l.cc)(f, p, !1)
                    }
                }, u = [p, g, f], h[5] = p, h[6] = g, h[7] = f, h[8] = d, h[9] = u) : (d = h[8], u = h[9]), (0, o.useEffect)(d, u), null
            }
        })
    }),
    fr5e: (function(e, t, n) {
        n.d(t, {
            a: () => B
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("iRMi"),
            s = n("D99L"),
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
            C = n("dQRk"),
            w = n("jfiJ"),
            _ = n("FGJH"),
            S = n("Vcrm"),
            I = n("OCK3"),
            j = n("dhxJ"),
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
                let e = ee.get(C.j, D),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(C.y, D);
                if (!J || "tpp" === n || "flora" === n) return null;
                let a = ee.get(C.N, D),
                    r = Y && "conversation" === $ ? ee.get(S.a, D)?.promptMessageId : void 0,
                    o = function(e) {
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
                                                o = N.d.safeParse(r?.reference);
                                            if (null == r || !o.success || (null == n.data.is_streaming ? !e.completed && (e.contentReferenceMessageStatuses?.[r.index] ?? "in_progress") === "in_progress" : "true" === n.data.is_streaming)) return;
                                            let s = e.contentReferenceMessageIds?.[r.index];
                                            t = {
                                                content: (0, R.a)(o.data.data),
                                                messageId: s ?? e.messageId,
                                                codeBlockIndex: null == s ? r.index : e.contentReferenceMessageIds?.slice(0, r.index).filter(e => e === s).length ?? 0
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
                        threadCurrentNode: r ?? ee.get(C.C, D),
                        conversationOrigin: n,
                        isStreaming: (0, C.Bb)(ee.get(C.ab, D)),
                        mode: $,
                        moderationDisclaimersByMessageId: ee.get(C.O, D),
                        pendingSubmission: null
                    }).renderedTurns);
                if (o?.messageId == null) return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: o?.content
                };
                let s = {
                        conversationId: D,
                        messageId: o.messageId,
                        codeBlockIndex: o.codeBlockIndex
                    },
                    i = (0, j.a)(a?.[o.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(I.b, s) ?? i?.[String(o.codeBlockIndex)]?.content ?? o.content
                }
            }, L[8] = J, L[9] = D, L[10] = Y, L[11] = $, L[12] = ee, L[13] = H, L[14] = P) : P = L[14];
            let en = (0, y.a)(P);
            L[15] !== ee ? (B = (e, t) => {
                let n = e => {
                    (0, g.a)(ee, s.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: o.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
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
                if (!W || ee.get(C.B, D) || null == t || ee.get(_.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let r = ee.get(u.a),
                    o = ee.get(C.C, D),
                    s = ee.get(h.e).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(C.C, D) !== o || Y && "conversation" === $ && t(S.a, D)?.promptMessageId !== n || t(h.e).copyLastCodeBlock !== s) && a.abort()
                    });
                ea((async () => {
                    await (0, w.a)(ee, t, a.signal), a.signal.throwIfAborted();
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
            a: () => w
        });
        var a = n("ABep"),
            r = n("QosV");
        n("slpy");
        var o = n("BolX"),
            s = n("Wf1j"),
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
                a = (0, o.y)(g.a);
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
            C = n("PCEr");

        function w(e) {
            let t, n, o, s, l, c, d = (0, r.c)(17),
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
            }), d[0] = t) : t = d[0], d[1] !== v ? (n = v ? null : (0, a.jsx)(u.SitePreviewBridge, {}), d[1] = v, d[2] = n) : n = d[2], d[3] !== m ? (o = (0, a.jsx)(i.a.Header, {
                desktopPlacement: "titlebar",
                divider: !1,
                children: m
            }), d[3] = m, d[4] = o) : o = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(i.a.RightPanelOutlet, {
                children: (0, a.jsx)(i.a.RightPanelTabs, {})
            }), d[5] = s) : s = d[5], d[6] !== p || d[7] !== f || d[8] !== m || d[9] !== v || d[10] !== g ? (l = v ? null : (0, a.jsx)(_, {
                chatIcon: p,
                fullScreenTitle: f,
                mainToolbar: m,
                title: g
            }), d[6] = p, d[7] = f, d[8] = m, d[9] = v, d[10] = g, d[11] = l) : l = d[11], d[12] !== y || d[13] !== n || d[14] !== o || d[15] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, o, y, s, l]
            }), d[12] = y, d[13] = n, d[14] = o, d[15] = l, d[16] = c) : c = d[16], c
        }

        function _(e) {
            let t, n, i, u, p, m, f, v = (0, r.c)(16),
                {
                    chatIcon: w,
                    mainToolbar: _,
                    title: S,
                    fullScreenTitle: I
                } = e,
                j = (0, o.y)(g.a);
            return (0, s.a)(), (0, o.z)(d.i), (0, o.z)(c.s), v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(y, {}), v[0] = t, v[1] = n) : (t = v[0], n = v[1]), v[2] !== w || v[3] !== S ? (i = (0, a.jsx)(x.a, {
                title: S,
                icon: w
            }), v[2] = w, v[3] = S, v[4] = i) : i = v[4], v[5] !== I ? (u = (0, a.jsx)("div", {
                className: "max-w-80 min-w-0 truncate empty:hidden focus-within:overflow-visible",
                children: I
            }), v[5] = I, v[6] = u) : u = v[6], v[7] !== _ || v[8] !== u ? (p = (0, a.jsx)(C.a, {
                mainToolbar: _,
                fullScreenChatMenu: u
            }), v[7] = _, v[8] = u, v[9] = p) : p = v[9], v[10] !== j.value.routeKind ? (m = "other" === j.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(b.b, {
                showLauncherButton: !1
            }), v[10] = j.value.routeKind, v[11] = m) : m = v[11], v[12] !== i || v[13] !== p || v[14] !== m ? (f = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i, p, m, null, null]
            }), v[12] = i, v[13] = p, v[14] = m, v[15] = f) : f = v[15], f
        }
    }),
    dLcZ: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV");
        n("slpy"), n("zd8w");
        var o = n("OpyH");
        n("Sm6l"), n("HOLv");
        var s = n("NVRI"),
            i = n("MMlk");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, l, c, d, u, h, p, m = (0, r.c)(18);
                m[0] !== e ? ({
                    isTemporaryChat: c,
                    isCloudTask: t,
                    leading: n,
                    startActions: l,
                    ...o
                } = e, m[0] = e, m[1] = t, m[2] = n, m[3] = o, m[4] = l, m[5] = c) : (t = m[1], n = m[2], o = m[3], l = m[4], c = m[5]);
                let g = void 0 !== c && c;
                return m[6] !== n || null !== m[7] ? (d = (0, a.jsxs)(a.Fragment, {
                    children: [n, null]
                }), m[6] = n, m[7] = null, m[8] = d) : d = m[8], m[9] !== g ? (u = g ? (0, a.jsx)(i.b, {
                    isIndicator: !0,
                    isTemporaryChat: !0
                }) : null, m[9] = g, m[10] = u) : u = m[10], m[11] !== l || m[12] !== u ? (h = (0, a.jsxs)(a.Fragment, {
                    children: [l, u]
                }), m[11] = l, m[12] = u, m[13] = h) : h = m[13], m[14] !== o || m[15] !== d || m[16] !== h ? (p = (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(s.a, {
                        ...o,
                        inset: "tab-strip-flush-start",
                        leading: d,
                        startActions: h
                    })
                }), m[14] = o, m[15] = d, m[16] = h, m[17] = p) : p = m[17], p
            },
            b: function(e) {
                let t, n, s, i = (0, r.c)(9),
                    {
                        children: l,
                        menu: c,
                        hasTitleMenu: d
                    } = e,
                    u = !d && c;
                return i[0] !== d || i[1] !== c ? (t = d ? (0, a.jsx)(o.a.HeaderAction, {
                    actionId: "chatgpt-conversation-title-menu",
                    align: "start",
                    slotPosition: "threadTitle",
                    children: c
                }) : null, i[0] = d, i[1] = c, i[2] = t) : t = i[2], i[3] !== l ? (n = null == l ? null : (0, a.jsx)(o.a.HeaderAction, {
                    actionId: "chatgpt-conversation-actions",
                    align: "end",
                    order: 100,
                    children: (0, a.jsx)("div", {
                        className: "flex min-w-0 items-center gap-toolbar-action",
                        children: l
                    })
                }), i[3] = l, i[4] = n) : n = i[4], i[5] !== u || i[6] !== t || i[7] !== n ? (s = (0, a.jsxs)(a.Fragment, {
                    children: [u, t, n]
                }), i[5] = u, i[6] = t, i[7] = n, i[8] = s) : s = i[8], s
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
            o = n("ASxG"),
            s = n("fDv2"),
            i = n("OWtl"),
            l = n("dQRk");
        let c = o.object({
                epic_patient_label: o.string(),
                epic_patient_name: o.string().nullable().optional(),
                epic_patient_birth_date: s.date().nullable().optional(),
                epic_encounter_label: o.string().nullable().optional()
            }),
            d = (0, r.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(l.N, e);
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
                let o = null,
                    s = () => {
                        r(h(e, o, null))
                    };
                window.addEventListener(a.b, s);
                let i = n.watch(t => {
                    let {
                        get: n
                    } = t;
                    o = n(d, e), s()
                });
                return () => {
                    i(), window.removeEventListener(a.b, s)
                }
            }, {
                autoDispose: !0,
                isEqual: (e, t) => e === t || null != e && null != t && e.labels?.epic_patient_label === t.labels?.epic_patient_label && e.labels?.epic_patient_name === t.labels?.epic_patient_name && e.labels?.epic_patient_birth_date === t.labels?.epic_patient_birth_date && e.labels?.epic_encounter_label === t.labels?.epic_encounter_label && e.snapshot === t.snapshot && e.destination === t.destination
            });

        function h(e, t, n) {
            let a = t?.find(e => c.safeParse(e?.metadata).success),
                r = c.safeParse(a?.metadata),
                o = "u" < typeof window ? void 0 : window.__oaiEpicNativeLaunch,
                s = (null == e ? n : null) ?? (t?.some(e => e?.id != null && o?.ownsMessage(e.id)) ? o?.get() ?? null : null);
            return r.success || null != s ? {
                labels: r.success ? r.data : null,
                snapshot: s,
                destination: null == s ? void 0 : o?.destination()
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
            o = n("IgxH"),
            s = n("OWtl"),
            i = n("OMIV"),
            l = n("dQRk");
        let c = (0, a.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (null == e) return null;
                let a = n(l.N, e),
                    o = n(l.C, e);
                return null == a || null == o ? null : (0, r.b)({
                    mapping: a,
                    current_node: o
                }).findLast(e => "assistant" === e.author.role && !(0, r.n)(e) && "" !== (0, r.e)(e).trim())
            }),
            d = (0, a.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (null == e || n(i.d, "2163293173") && !n(l.K, e)) return null;
                let a = n(c, e);
                return null == a ? null : (0, o.a)((0, r.e)(a)).trim()
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
            o = n("BolX"),
            s = n("oyxz"),
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
                    y = (0, o.y)(h.a),
                    b = (0, o.z)(i.f);
                return null == b || f.gizmo.tags?.includes("first_party") || "marketplace" !== f.gizmo.share_recipient && "link" !== f.gizmo.share_recipient ? null : (g[0] !== b || g[1] !== v || g[2] !== f || g[3] !== y ? (t = () => {
                    v?.(), (0, u.f)(y, p, {
                        accountId: b,
                        resource: f
                    })
                }, g[0] = b, g[1] = v, g[2] = f, g[3] = y, g[4] = t) : t = g[4], g[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(l.c.ItemIcon, {
                    children: (0, a.jsx)(c.td, {})
                }), d = (0, a.jsx)(s.a, {
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
            o = n("on57"),
            s = n("BolX"),
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
                    gizmoId: o
                } = e,
                i = (0, s.x)(d.d, "2160578039");
            return n[0] !== i || n[1] !== o ? (t = i ? (0, a.jsx)(p, {
                gizmoId: o
            }, o) : null, n[0] = i, n[1] = o, n[2] = t) : t = n[2], t
        }

        function g(e) {
            let t, n, o = (0, r.c)(10),
                {
                    gizmoId: l
                } = e,
                d = (0, s.y)(c.a),
                p = (0, i.Y)(),
                m = (0, i._)(),
                {
                    data: g
                } = (0, s.x)(h.f, l);
            o[0] !== l || o[1] !== p.pathname ? (t = {
                gizmoId: l,
                visitKey: p.pathname
            }, o[0] = l, o[1] = p.pathname, o[2] = t) : t = o[2];
            let f = (0, s.x)(h.c, t);
            return o[3] !== f || o[4] !== l || o[5] !== p.pathname || o[6] !== m || o[7] !== g || o[8] !== d ? (n = f && g?.gizmo.migrated_plugin_id ? (0, a.jsx)(u.a, {
                gptName: g.gizmo.display.name,
                accessState: "error",
                onUsePlugin: () => void m("/plugins"),
                onKeepUsingGpt: () => (0, h.a)(d, {
                    gizmoId: l,
                    visitKey: p.pathname
                })
            }) : null, o[3] = f, o[4] = l, o[5] = p.pathname, o[6] = m, o[7] = g, o[8] = d, o[9] = n) : n = o[9], n
        }
        n.d(t, {}, {
            GptPluginMigrationBanner: m,
            GptPluginMigrationHomeBanner: function(e) {
                let t, n, s, i = (0, r.c)(7),
                    {
                        entryPoint: l,
                        gizmoId: c
                    } = e,
                    d = "codex" === l && "electron:mx-[var(--home-composer-inline-inset)]";
                return i[0] !== d ? (t = (0, o.b)("empty:hidden", d), i[0] = d, i[1] = t) : t = i[1], i[2] !== c ? (n = (0, a.jsx)(m, {
                    gizmoId: c
                }), i[2] = c, i[3] = n) : n = i[3], i[4] !== t || i[5] !== n ? (s = (0, a.jsx)("div", {
                    className: t,
                    children: n
                }), i[4] = t, i[5] = n, i[6] = s) : s = i[6], s
            }
        })
    }),
    tV8b: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("Wf1j"),
            s = n("oyxz"),
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
                        gptName: C,
                        accessState: w,
                        onUsePlugin: _,
                        onKeepUsingGpt: S,
                        onRetry: I
                    } = e,
                    j = (0, o.a)(),
                    T = (0, d.e)("2513446768");
                x[0] !== T || x[1] !== j ? (t = j.formatDate((0, u.a)(T.get("retirement_date", "")), {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }), x[0] = T, x[1] = j, x[2] = t) : t = x[2];
                let E = t;
                if ("error" === w && null != I) {
                    let e;
                    x[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceRetry",
                        defaultMessage: "Try again",
                        description: "Retry checking access to the migrated plugin"
                    }), x[3] = e) : e = x[3], n = e
                } else if ("admin" === w) {
                    let e;
                    x[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.viewPlugin",
                        defaultMessage: "View Plugin",
                        description: "Button that opens a migrated plugin in workspace admin settings for an administrator who cannot open its ordinary plugin details; does not start a chat"
                    }), x[4] = e) : e = x[4], n = e
                } else if ("allowed" === w || "pending" === w) {
                    let e;
                    x[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceUsePlugin",
                        defaultMessage: "Use plugin",
                        description: "Opens the migrated plugin detail page from the initial GPT chat choice."
                    }), x[5] = e) : e = x[5], n = e
                } else {
                    let e;
                    x[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceExplorePlugins",
                        defaultMessage: "Explore plugins",
                        description: "Opens the plugin directory from a migrated GPT chat banner when access to its plugin was denied or could not be verified after a failed request."
                    }), x[6] = e) : e = x[6], n = e
                }
                if ("error" === w && null == I) {
                    let e;
                    x[7] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessUnconfirmed",
                        defaultMessage: "We couldn’t check your access to the plugin. You can keep using this GPT until {deadline}.",
                        description: "Fallback when the migration banner cannot load. Access is unknown; the user can explore plugins or continue using the GPT.",
                        values: {
                            deadline: E
                        }
                    }), x[7] = E, x[8] = e) : e = x[8], p = e
                } else if ("error" === w) {
                    let e;
                    x[9] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessError",
                        defaultMessage: "We couldn’t check your access to the plugin. Try again, or keep using this GPT until {deadline}.",
                        description: "Migrated GPT notice after a failed plugin-access check; deadline is the localized retirement date",
                        values: {
                            deadline: E
                        }
                    }), x[9] = E, x[10] = e) : e = x[10], p = e
                } else if ("denied" === w) {
                    let e;
                    x[11] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessDenied",
                        defaultMessage: "This plugin isn’t available to you. You can keep using this GPT until {deadline}.",
                        description: "Migrated GPT notice when the destination plugin is inaccessible; deadline is the localized retirement date",
                        values: {
                            deadline: E
                        }
                    }), x[11] = E, x[12] = e) : e = x[12], p = e
                } else if (C.trim()) {
                    let e;
                    x[13] !== E || x[14] !== C ? (e = (0, a.jsx)(s.a, {
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
                    x[16] !== E ? (e = (0, a.jsx)(s.a, {
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
                }), x[18] = m) : m = x[18], x[19] !== C ? (g = C.trim() ? (0, a.jsx)(s.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceNamedTitle",
                    defaultMessage: "{gptName} is now a plugin",
                    description: "Title of the migrated GPT chat choice shown before the composer. gptName is the user-provided GPT name.",
                    values: {
                        gptName: C
                    }
                }) : (0, a.jsx)(s.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceTitle",
                    defaultMessage: "This GPT is now a plugin",
                    description: "Title of the migrated GPT chat choice when the GPT has no display name."
                }), x[19] = C, x[20] = g) : g = x[20];
                let P = "pending" === w,
                    A = "error" === w && null != I ? I : _;
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
                    children: (0, a.jsx)(s.a, {
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
                    o = `https://help.openai.com/${r}/articles/20001519-custom-gpt-retirement-and-migration-faq`;
                try {
                    let e = new URL(t.replaceAll("{lang}", r));
                    return "https:" === e.protocol ? e.href : o
                } catch {
                    return o
                }
            }
        })
    }),
    kHi2: (function(e, t, n) {
        var a = n("BolX"),
            r = n("tSEg"),
            o = n("VnEZ");
        let s = (0, a.c)(r.a, o.b);

        function i(e, t) {
            let n = e.get(s).getSnapshot();
            return n?.conversationId !== t || n.dilActionsPending ? void 0 : n.dil?.prefill_composer
        }
        let l = (0, a.i)(r.a, e => !1, (e, t) => {
            let {
                scope: n,
                get: a,
                set: r
            } = t, o = a(s), l = () => r(null != i(n, e));
            return l(), o.subscribe(l)
        });
        n.d(t, {}, {
            a: l,
            b: s,
            c: i
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
        var a = n("SZCv"),
            r = n.n(a),
            o = n("BolX"),
            s = n("ASxG"),
            i = n("OWtl"),
            l = n("OMIV"),
            c = n("b6fw"),
            d = n("YdNM");
        let u = s.object({
                course_id: s.string().trim().min(1),
                title: s.string().trim().nullish().catch(null),
                icon_url_or_emoji: d.a
            }),
            h = s.object({
                course_info: u.nullish()
            }),
            p = (0, o.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = h.safeParse(n(c.h, e)?.view);
                return a.success ? a.data.course_info ?? null : null
            }, {
                isEqual: r()
            }),
            m = (0, o.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(l.d, "4035922817") ? n(p, e) : null
            }),
            g = (0, o.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(m, e)?.course_id ?? null
            });
        n.d(t, {}, {
            a: g,
            b: m
        })
    }),
    wnpN: (function(e, t, n) {
        var a = n("FC5L"),
            r = n("OMIV"),
            o = n("XtQP"),
            s = n("dQRk"),
            i = n("ZniH");
        let l = (0, a.a)({
            conversationIds: (e, t) => [t],
            status: (e, t) => {
                let {
                    get: n
                } = e, a = n(s.w, t);
                return {
                    pending: (0, s.Bb)(n(s.ab, t)),
                    completed: null == a || "completed" === a.result,
                    completionId: n(r.d, "2163293173") ? JSON.stringify([t, a?.requestId, n(s.C, t)]) : void 0,
                    unread: n(s.K, t)
                }
            },
            preview: (e, t) => {
                let {
                    get: n
                } = e, a = n(s.N, t);
                return null == a ? null : (0, i.a)({
                    mapping: a,
                    current_node: n(s.C, t)
                })?.text ?? null
            },
            title: (e, t) => {
                let {
                    get: n
                } = e;
                return n(s.eb, t) || null
            },
            dismiss: (e, t) => {
                (0, s.Xb)(e, t, !1), (0, o.b)(e, t).catch(() => {})
            }
        });
        n.d(t, {}, {
            a: l
        })
    }),
    M3Kf: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("zd8w"),
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
                    C = (0, o.y)(c.a),
                    w = (0, o.z)(l.b),
                    _ = (0, o.x)(h.j, x),
                    S = (0, o.x)(m.c, _ ?? x),
                    I = (0, u.b)(),
                    j = (0, s.useRef)(null);
                b[0] !== C || b[1] !== _ ? (t = () => {
                    null != _ && (0, p.b)(C, _, i.flushSync)
                }, b[0] = C, b[1] = _, b[2] = t) : t = b[2];
                let T = t;
                b[3] !== x || b[4] !== T || b[5] !== C || b[6] !== _ ? (n = () => {
                    let e = C.get(m.c, _ ?? x);
                    C.get(l.b) || e?.hasError || T()
                }, b[3] = x, b[4] = T, b[5] = C, b[6] = _, b[7] = n) : n = b[7];
                let E = (0, s.useEffectEvent)(n);
                b[8] !== I || b[9] !== w || b[10] !== E ? (f = () => {
                    if (w) return;
                    let e = j.current,
                        t = I.getScrollElement();
                    if (null == e || null == t) return;
                    let n = new IntersectionObserver(e => {
                        e.some(g) && E()
                    }, {
                        root: t,
                        rootMargin: "80px 0px 0px 0px"
                    });
                    return n.observe(e), () => n.disconnect()
                }, b[8] = I, b[9] = w, b[10] = E, b[11] = f) : f = b[11];
                let P = S?.cursor,
                    A = S?.hasError;
                if (b[12] !== I || b[13] !== w || b[14] !== _ || b[15] !== P || b[16] !== A ? (v = [I, w, _, P, A], b[12] = I, b[13] = w, b[14] = _, b[15] = P, b[16] = A, b[17] = v) : v = b[17], (0, s.useEffect)(f, v), null == S || S.complete || null == S.cursor) return null;
                let M = S.hasError ? T : null;
                return b[18] !== M ? (y = (0, a.jsx)(d.a, {
                    ref: j,
                    onRetry: M
                }), b[18] = M, b[19] = y) : y = b[19], y
            }
        })
    }),
    lUUH: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("oyxz"),
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
            C = n("QmkR"),
            w = n("xEXG"),
            _ = n("KMqT"),
            S = n("J6LI"),
            I = n("FgUr"),
            j = n("WLgA");
        let T = (0, o.u)(f.a, 0);

        function E(e) {
            let {
                scope: t,
                conversation: n,
                project: r,
                projectListQuery: o,
                pinnedProjectsQuery: s,
                showMoveToProject: i = !0,
                showDestinationFetchState: l = !0,
                projectCrudStatus: c,
                navigate: f,
                onCreateProjectDialogCloseAutoFocus: w
            } = e, {
                isWorkConversation: E,
                sourceMemoryBlocked: A
            } = (0, S.c)(n, r), M = A ? v.a.projectOnlyMoveUnavailable : void 0, {
                data: k,
                isPending: R,
                isError: N
            } = o, {
                data: O,
                isPending: B,
                isError: F
            } = s, z = (0, I.a)(O, k, r?.gizmo.id), G = "allowed" === c, L = e => {
                let a = t.get(T) + 1,
                    r = t.get(p.e);
                t.set(T, a), (0, C.S)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(n => {
                    n && t.get(T) === a && t.get(p.e) === r && f((0, j.c)(e.gizmo.id))
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
                    icon: d.Cg,
                    message: P.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        t.set(T, e => e + 1), (0, x.a)(t, L, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: E,
                            onCloseAutoFocus: w
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
                        fallbackIcon: (0, a.jsx)(d.xd, {}),
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
                    Promise.all([t.query.invalidate(y.a), t.query.invalidate(C.m)])
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
                icon: d.Ad,
                message: P.moveToProject,
                enabled: !A,
                tooltipMessage: M,
                submenu: D
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                icon: d.Fd,
                message: P.removeFromProject,
                enabled: !A,
                tooltipMessage: M,
                onSelect: () => {
                    t.set(T, e => e + 1), (0, C.S)({
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
                    g = (0, o.y)(f.a),
                    v = (0, l._)(),
                    b = (0, o.z)(y.a),
                    x = (0, o.z)(C.m),
                    _ = (0, w.b)();
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
                            let t = e.message ? (0, a.jsx)(s.a, {
                                    ...e.message,
                                    values: e.messageValues
                                }) : e.id,
                                r = e.tooltipMessage ? (0, a.jsx)(s.a, {
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
            o = n("OWtl"),
            s = n("dQRk"),
            i = n("b6fw");
        let l = (0, a.d)(o.a, (e, t) => {
            let {
                get: n
            } = t, a = n(i.h, e);
            if (null == a) return null;
            let r = n(s.N, e);
            return null == r ? null : c({
                ...a,
                conversation: {
                    mapping: r,
                    current_node: n(s.C, e),
                    conversation_origin: n(s.y, e),
                    context_truncation_continuation: n(s.i, e)?.metadata
                }
            })
        });

        function c(e) {
            let {
                conversation: t,
                view: n,
                selectedSectionId: a,
                entryMessageIds: r,
                entry: o
            } = e, s = n.definition.sections, i = s.findIndex(e => e.id === a), l = s[i], c = [], d = new Set, u = t.current_node ?? null;
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
                m = s[i + 1],
                g = p(l),
                f = p(m),
                v = l?.start_message_id != null && null == g || m?.start_message_id != null && null == f,
                y = o?.status === "sending" && (o.sectionId === l?.id || o.sectionId === m?.id),
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
                isReviewing: a !== n.current_section_id && o?.sectionId !== a,
                needsEntry: l?.start_message_id == null,
                isEntering: o?.status === "sending"
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
            o = n("BolX"),
            s = n("zd8w"),
            i = n("oyxz"),
            l = n("OpyH"),
            c = n("EOo5"),
            d = n("Sm6l"),
            u = n("X6Vn"),
            h = n("OWtl"),
            p = n("gsAl");
        let m = (0, s.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function g(e) {
            let t, n, s, l = (0, r.c)(9),
                {
                    imageOnly: u
                } = e,
                m = (0, o.y)(h.a),
                g = (0, o.x)(p.f, (0, c.a)());
            return null == g ? null : (l[0] !== u || l[1] !== m || l[2] !== g.id ? (t = () => f(m, g.id, u), l[0] = u, l[1] = m, l[2] = g.id, l[3] = t) : t = l[3], l[4] !== u ? (n = u ? (0, a.jsx)(i.a, {
                id: "chatgptConversations.sharedPost.webImage.reportButton",
                defaultMessage: "Report image",
                description: "Button below the shared-image disclosure that opens safety reporting for the image-only Post."
            }) : (0, a.jsx)(i.a, {
                id: "chatgptConversations.sharedPost.reportButton",
                defaultMessage: "Report conversation",
                description: "Button below the shared-chat disclosure that opens safety reporting for the shared ChatGPT image post shown in the conversation."
            }), l[4] = u, l[5] = n) : n = l[5], l[6] !== t || l[7] !== n ? (s = (0, a.jsx)(d.a, {
                className: "font-semibold",
                color: "ghostActive",
                type: "button",
                onClick: t,
                children: n
            }), l[6] = t, l[7] = n, l[8] = s) : s = l[8], s)
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
                        imageOnly: o
                    } = e,
                    s = void 0 !== o && o;
                return n[0] !== s ? (t = (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                    children: [(0, a.jsx)("div", {
                        className: "text-secondary",
                        children: s ? (0, a.jsx)(i.a, {
                            id: "chatgptConversations.sharedPost.webImage.disclaimer",
                            defaultMessage: "This is a shared image.",
                            description: "Notice above an existing web image shared as an image-only Post. The sender has not shared a conversation."
                        }) : (0, a.jsx)(i.a, {
                            id: "chatgptConversations.sharedConversation.copyDisclaimer",
                            defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory.",
                            description: "Informational notice above a shared ChatGPT chat explaining that the copy will not be added to the viewer's memory"
                        })
                    }), (0, a.jsx)(g, {
                        imageOnly: s
                    })]
                }), n[0] = s, n[1] = t) : t = n[1], t
            },
            b: function(e) {
                let t, n = (0, r.c)(3),
                    {
                        postId: s
                    } = e,
                    c = (0, o.y)(h.a);
                return n[0] !== s || n[1] !== c ? (t = (0, a.jsx)(l.a.HeaderAction, {
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
                                    onClick: () => f(c, s),
                                    children: e
                                }, "report")
                            }
                        })
                    })
                }), n[0] = s, n[1] = c, n[2] = t) : t = n[2], t
            }
        })
    }),
    JKdL: (function(e, t, n) {
        n.d(t, {
            a: () => u
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("OpyH"),
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
                g = (0, o.z)(i.l),
                f = (0, o.z)(l.m);
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
            return v || null != p ? (h[4] !== v ? (n = v ? (0, a.jsx)(d.a, {}) : null, h[4] = v, h[5] = n) : n = h[5], h[6] !== p || h[7] !== n ? (u = (0, a.jsx)(s.a.HeaderAction, {
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
            o = n.n(r),
            s = n("BolX"),
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
                    conversationId: C,
                    draftKey: w,
                    initialPrompt: _,
                    initialPromptKind: S
                } = t, I = void 0 === w ? C : w, j = (0, s.y)(u.a);
                b[2] !== C || b[3] !== I || b[4] !== _ || b[5] !== S || b[6] !== j ? (n = () => o()(() => {
                    let e = null == C ? null : j.get(g.y, C),
                        t = (0, d.e)(_ ?? (null == I ? "" : j.get(p.t, I)), {
                            addInitialContentToHistory: null == _ && null != I,
                            defaultTextKind: S ?? (null == _ && null != I || (0, c.b)(_ ?? "").length > 0 ? "prompt" : "plain"),
                            enableFileMentions: !0,
                            enableRichText: !0,
                            enableSkillMentions: !1,
                            enableSlashCommands: {
                                triggers: ["/"]
                            },
                            plainTextMode: (0, h.b)(j.get, i.wf.composerPlainTextMode),
                            suggestionOptions: {
                                enableInlineSystemHints: "tpp" !== e && "flora" !== e,
                                variant: "tpp" !== e && "flora" !== e ? "chatgpt" : void 0
                            }
                        });
                    return null == _ && null != C && "string" == typeof I && null != (0, m.k)(j, I) && "tpp" !== e && "flora" !== e && (0, p.S)(j, C, t.getChatGptPrompt().systemHints), t
                }), b[2] = C, b[3] = I, b[4] = _, b[5] = S, b[6] = j, b[7] = n) : n = b[7];
                let [T] = (0, l.useState)(n);
                b[8] !== T || b[9] !== x ? (r = x ?? T(), b[8] = T, b[9] = x, b[10] = r) : r = b[10];
                let E = r,
                    P = (0, l.useRef)(null);
                b[11] !== E || b[12] !== I || b[13] !== j ? (f = () => {
                    if (null == I) return;
                    let e = j.get(p.t, I);
                    return null != P.current && P.current !== e && E.restoreDraft(e), () => {
                        P.current = j.get(p.t, I)
                    }
                }, v = [E, I, j], b[11] = E, b[12] = I, b[13] = j, b[14] = f, b[15] = v) : (f = b[14], v = b[15]), (0, l.useLayoutEffect)(f, v), b[16] !== E || b[17] !== x ? (y = () => {
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
            o = n("BolX"),
            s = n("Wf1j"),
            i = n("SGsN"),
            l = n("OWtl"),
            c = n("MRlq"),
            d = n("QmkR");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, h, p = (0, a.c)(12),
                    m = (0, o.y)(l.a),
                    g = (0, s.a)();
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
            o = (0, a.b)("text-default min-h-0 w-full p-0 leading-normal !font-sans", "[&_.ProseMirror]:w-full", "[&_.ProseMirror]:!text-default", "[&_.ProseMirror]:!font-sans", "[&_.ProseMirror]:px-0", "[&_.ProseMirror]:py-0", "[&_.ProseMirror]:!leading-6", "[&_.ProseMirror_p]:!font-sans", "[&_.ProseMirror_p]:!leading-6", "[&_.ProseMirror_p_*]:!font-sans", "[&_.ProseMirror_span]:!font-sans", "!min-h-0 text-base", "[&_.ProseMirror]:min-h-6");
        n.d(t, {}, {
            a: "absolute inset-x-0 bottom-0 flex h-12 items-center ps-2 pe-3 origin-bottom-left transition-[opacity,transform] duration-basic ease-out motion-reduce:transition-none",
            b: o,
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
            o = n("on57"),
            s = n("JjB1");

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
            return v[7] !== n || v[8] !== b || v[9] !== x ? (u = (0, o.b)("surface-AyYLmv", "pointer-events-auto isolate rounded-[22px] ease-enter-snappy motion-reduce:transition-none", b, x, n), v[7] = n, v[8] = b, v[9] = x, v[10] = u) : u = v[10], v[11] !== l ? (h = {
                ...s.d,
                ...l
            }, v[11] = l, v[12] = h) : h = v[12], v[13] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, o.b)("content-Sj8_aX", "overflow-hidden rounded-[inherit] bg-inherit"), v[13] = p) : p = v[13], v[14] !== t ? (m = (0, a.jsx)("div", {
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
            o = n("zd8w"),
            s = n("oyxz"),
            i = n("YwjY"),
            l = n("Sm6l"),
            c = n("UIU6"),
            d = n("Bbed"),
            u = n("RNul"),
            h = n("hV9T"),
            p = n("T1PX");

        function m(e) {
            let t, n, s, i, l, c, d = (0, r.c)(13),
                {
                    children: u,
                    source: m
                } = e,
                g = (0, o.useRef)(null),
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
                                o = e.offsetHeight / a.height,
                                s = (m.left - a.left) * r,
                                i = (m.top - a.top) * o,
                                l = (a.right - m.right) * r,
                                c = (a.bottom - m.bottom) * o;
                            e.style.setProperty("--entry-inset", `${i}px ${l}px ${c}px ${s}px`), e.style.setProperty("--entry-transform", `translate(${s}px, ${i}px) scale(${m.width/a.width}, ${m.height/a.height})`), e.dataset.phase = "source", n = t.requestAnimationFrame(() => {
                                e.dataset.phase = "open"
                            })
                        })
                    });
                return a.observe(e), () => {
                    a.disconnect(), t.cancelAnimationFrame(n), delete e.dataset.phase, e.style.removeProperty("--entry-inset"), e.style.removeProperty("--entry-transform")
                }
            }, n = [f, m], d[0] = f, d[1] = m, d[2] = t, d[3] = n) : (t = d[2], n = d[3]), (0, o.useLayoutEffect)(t, n);
            let v = f ? "entry-yS3y1e" : void 0;
            return d[4] === Symbol.for("react.memo_cache_sentinel") ? (s = {
                position: "relative",
                maxWidth: "100%",
                width: h.T
            }, d[4] = s) : s = d[4], d[5] !== f ? (i = f ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "surface-Iou1vs pointer-events-none absolute inset-0 rounded-[22px] bg-surface-elevated-secondary shadow-md outline-1 outline-border"
            }) : null, d[5] = f, d[6] = i) : i = d[6], d[7] !== u ? (l = (0, a.jsx)("div", {
                className: "content-ARLCcU",
                children: u
            }), d[7] = u, d[8] = l) : l = d[8], d[9] !== v || d[10] !== i || d[11] !== l ? (c = (0, a.jsxs)("div", {
                ref: g,
                "data-selection-annotation-entry": "",
                className: v,
                style: s,
                children: [i, l]
            }), d[9] = v, d[10] = i, d[11] = l, d[12] = c) : c = d[12], c
        }
        let g = (0, d.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(775172), n.e(633848), n.e(146143), n.e(20749)]).then(n.bind(n, "FQ1K"))).SelectedTextAnnotationEditor, {
            suspendToParent: !0,
            errorFallback: e => (0, a.jsx)(v, {
                failed: !0,
                onClose: e.onCancel
            })
        });

        function f(e) {
            let t, n, s, i, l, d, u, h, p = (0, r.c)(18);
            p[0] !== e ? ({
                entryRect: t,
                ...n
            } = e, p[0] = e, p[1] = t, p[2] = n) : (t = p[1], n = p[2]), p[3] !== n.onCancel ? (s = (0, a.jsx)(v, {
                failed: !0,
                onClose: n.onCancel
            }), p[3] = n.onCancel, p[4] = s) : s = p[4], p[5] !== n.onCancel ? (i = (0, a.jsx)(v, {
                onClose: n.onCancel
            }), p[5] = n.onCancel, p[6] = i) : i = p[6], p[7] !== n ? (l = (0, a.jsx)(g, {
                ...n
            }), p[7] = n, p[8] = l) : l = p[8], p[9] !== i || p[10] !== l ? (d = (0, a.jsx)(o.Suspense, {
                fallback: i,
                children: l
            }), p[9] = i, p[10] = l, p[11] = d) : d = p[11], p[12] !== s || p[13] !== d ? (u = (0, a.jsx)(c.a, {
                name: "ResponseTextAnnotationEditor",
                fallback: s,
                children: d
            }), p[12] = s, p[13] = d, p[14] = u) : u = p[14];
            let f = u;
            return p[15] !== f || p[16] !== t ? (h = null == t ? f : (0, a.jsx)(m, {
                source: t,
                children: f
            }), p[15] = f, p[16] = t, p[17] = h) : h = p[17], h
        }

        function v(e) {
            let t, n, o, c, d = (0, r.c)(9),
                {
                    failed: h,
                    onClose: p
                } = e,
                m = void 0 !== h && h,
                g = m ? "alert" : "status";
            return d[0] !== m ? (t = m ? (0, a.jsx)(s.a, {
                id: "responseTextAnnotationMarkers.editor.loadError",
                defaultMessage: "Couldn't load the editor. Reload to try again",
                description: "Error inside the response annotation editor when its code fails to download after retrying. Reloading the app allows another attempt."
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(u.a, {}), (0, a.jsx)(s.a, {
                    id: "responseTextAnnotationMarkers.editor.loading",
                    defaultMessage: "Loading editor…",
                    description: "Loading status inside the editor for a comment on selected response text"
                })]
            }), d[0] = m, d[1] = t) : t = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(s.a, {
                id: "responseTextAnnotationMarkers.editor.close",
                defaultMessage: "Close",
                description: "Button that dismisses a loading or unavailable response annotation editor while preserving the annotation"
            }), d[2] = n) : n = d[2], d[3] !== p ? (o = (0, a.jsx)(l.a, {
                color: "secondary",
                onClick: p,
                children: n
            }), d[3] = p, d[4] = o) : o = d[4], d[5] !== g || d[6] !== t || d[7] !== o ? (c = (0, a.jsxs)(i.a, {
                className: "flex flex-col items-center justify-center gap-3 p-4 text-center text-sm text-secondary select-none",
                role: g,
                children: [t, o]
            }), d[5] = g, d[6] = t, d[7] = o, d[8] = c) : c = d[8], c
        }
        f.prefetch = () => g.prefetch()
    }),
    IxWh: (function(e, t, n) {
        var a = n("Vzyk"),
            r = n.n(a);

        function o(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ltr",
                n = Math.max(0, e.scrollWidth - e.clientWidth);
            if ("rtl" === t) return {
                maximum: 0,
                minimum: -n
            };
            let a = e.firstElementChild,
                r = Math.min(n, a instanceof HTMLElement ? Math.max(0, s(e, a, t)) : 0);
            return {
                maximum: n,
                minimum: r
            }
        }

        function s(e, t, n) {
            return "rtl" === n ? t.offsetLeft - e.offsetLeft + t.offsetWidth - e.clientWidth + i(e, n) : t.offsetLeft - e.offsetLeft - i(e, n)
        }

        function i(e, t) {
            let n = Number.parseFloat("rtl" === t ? getComputedStyle(e).scrollPaddingRight : getComputedStyle(e).scrollPaddingLeft);
            return Number.isNaN(n) ? 0 : n
        }
        n.d(t, {}, {
            a: o,
            b: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr",
                    {
                        maximum: a,
                        minimum: l
                    } = o(e, n),
                    c = "rtl" === n ? -t : t,
                    d = r()(e.scrollLeft + c * (e.clientWidth - i(e, n)), l, a),
                    u = e.children;
                for (let o = 1 === t ? 0 : u.length - 1; o >= 0 && o < u.length; o += t) {
                    let t = u.item(o);
                    if (!(t instanceof HTMLElement)) continue;
                    let i = r()(s(e, t, n), l, a);
                    if (1 === c && i >= d - 1 || -1 === c && i <= d + 1) return i
                }
                return 1 === c ? a : l
            }
        })
    }),
    GKsW: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("zd8w"),
            i = n("GaA7"),
            l = n("OWtl"),
            c = n("tSEg"),
            d = n("n5oN");
        let u = (0, o.u)(l.a, () => []);

        function h(e) {
            let t, n, a, c, d, h, f = (0, r.c)(13),
                {
                    title: v,
                    nativeTitle: y
                } = e,
                b = void 0 === y ? v : y,
                x = (0, o.y)(l.a),
                [C] = (0, s.useState)(p);
            return f[0] !== b || f[1] !== C || f[2] !== x || f[3] !== v ? (t = () => {
                if (i.a?.windowTitle == null) return;
                let e = {
                    owner: C,
                    title: null == v ? void 0 : b ?? null
                };
                x.set(u, t => t.some(e => e.owner === C) ? t.map(t => t.owner === C ? e : t) : [...t, e]), g(x)
            }, n = [x, C, v, b], f[0] = b, f[1] = C, f[2] = x, f[3] = v, f[4] = t, f[5] = n) : (t = f[4], n = f[5]), (0, s.useEffect)(t, n), f[6] !== C || f[7] !== x ? (a = () => () => {
                i.a?.windowTitle != null && (x.set(u, e => e.filter(e => e.owner !== C)), g(x))
            }, c = [x, C], f[6] = C, f[7] = x, f[8] = a, f[9] = c) : (a = f[8], c = f[9]), (0, s.useEffect)(a, c), f[10] !== v ? (d = () => {
                if (null == v) return;
                let e = document.title;
                m(v);
                let t = document.title;
                return () => {
                    document.title === t && m(e)
                }
            }, h = [v], f[10] = v, f[11] = d, f[12] = h) : (d = f[11], h = f[12]), (0, s.useEffect)(d, h), null
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
                        title: s
                    } = e,
                    i = (0, o.y)(c.a),
                    l = (0, o.x)(d.a, `${i.value.pathname}${i.value.search??""}`),
                    u = s ?? l;
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
        let o = new Set(["auto", "clip", "hidden", "overlay", "scroll"]);

        function s(e) {
            let {
                range: t,
                element: n,
                target: a,
                bottomBoundaryTop: r
            } = e, o = c(n, r);
            if (null == o) return null;
            let s = function(e, t, n, a) {
                let r = Array.from(e.getClientRects()),
                    o = t.getBoundingClientRect(),
                    s = d(r, a);
                if (null != s && (r.length > 1 || null != u(s, o))) return s;
                let i = e.getBoundingClientRect(),
                    l = u(i, a);
                return null != l && null != u(l, o) ? l : r.some(e => e.width > 0 && e.height > 0) || i.width > 0 && i.height > 0 ? null : d(Array.from(t.getClientRects()), a) ?? u(o, a) ?? d(Array.from(n.getClientRects()), a) ?? u(n.getBoundingClientRect(), a)
            }(t, n, a, o);
            return null == s ? null : {
                rect: s,
                bounds: o
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
                    t = (e.overflowX || e.overflow).split(/\s+/).some(e => o.has(e)),
                    r = (e.overflowY || e.overflow).split(/\s+/).some(e => o.has(e));
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
                o = Math.min(e.bottom, t.bottom);
            return n >= r || a >= o ? null : new DOMRect(n, a, r - n, o - a)
        }
        n.d(t, {}, {
            a: c,
            b: s,
            c: function(e) {
                let {
                    bottomBoundarySelector: t,
                    portalTarget: n,
                    targetContainer: o,
                    targetSelector: c,
                    windowZoom: d
                } = e, u = window.getSelection();
                if (null == u || 0 === u.rangeCount || u.isCollapsed) return null;
                let h = function(e, t, n) {
                    var a, r;
                    let o, s, l = i(e.anchorNode, e.anchorOffset, n),
                        c = i(e.focusNode, e.focusOffset, n);
                    if (null != l && null != c && l.target !== c.target) return null;
                    let d = l ?? c;
                    return null == d || null != d.element.closest('[contenteditable="true"]') ? null : {
                        ...d,
                        range: (a = t, r = d.target, (o = document.createRange()).selectNodeContents(r), s = a.cloneRange(), (!r.contains(s.startContainer) || 0 > s.compareBoundaryPoints(Range.START_TO_START, o)) && s.setStart(o.startContainer, o.startOffset), (!r.contains(s.endContainer) || s.compareBoundaryPoints(Range.END_TO_END, o) > 0) && s.setEnd(o.endContainer, o.endOffset), s)
                    }
                }(u, u.getRangeAt(0), c);
                if (null == h || null != o && !o.contains(h.target)) return null;
                let p = (0, a.a)(h.range)?.trim() ?? h.range.toString().trim();
                if (0 === p.length) return null;
                let m = null == t ? null : o?.querySelector(t),
                    g = m instanceof HTMLElement ? m.getBoundingClientRect().top : void 0,
                    f = s({
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
                }, C = null == b ? v : new DOMRect((v.left - b.left) / d, (v.top - b.top) / d, v.width / d, v.height / d), w = l(h.range.startContainer) ?? h.element;
                return {
                    direction: "rtl" === window.getComputedStyle(w).direction ? "rtl" : "ltr",
                    portalTarget: y,
                    rect: C,
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
            o = n("on57"),
            s = n("zd8w"),
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
                let t, n, m, g, f, v, y, b, x, C = (0, r.c)(40),
                    {
                        align: w,
                        bottomBoundarySelector: _,
                        children: S,
                        className: I,
                        onOpen: j,
                        portalTargetSelector: T,
                        targetContainer: E,
                        targetContainerRefs: P,
                        targetSelector: A
                    } = e,
                    M = void 0 === A ? u.b : A,
                    k = (0, i.c)(),
                    R = (0, s.useRef)(null),
                    N = (0, s.useRef)(!1),
                    O = (0, s.useRef)(null),
                    B = (0, s.useRef)(null),
                    [F, z] = (0, s.useState)(null);
                C[0] !== j ? (t = e => {
                    j?.(e)
                }, C[0] = j, C[1] = t) : t = C[1];
                let G = (0, s.useEffectEvent)(t);
                C[2] !== F || C[3] !== k ? (n = () => {
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
                }, C[2] = F, C[3] = k, C[4] = n) : n = C[4];
                let L = (0, c.a)(n);
                if (C[5] !== _ || C[6] !== G || C[7] !== T || C[8] !== E || C[9] !== P || C[10] !== M || C[11] !== k ? (m = () => {
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
                                    o = B.current?.portalTarget;
                                if (!N.current && null != r && 0 !== r.rangeCount && !r.isCollapsed) {
                                    if (null != o && o.contains(r.getRangeAt(0).commonAncestorContainer)) {
                                        let n = t.target;
                                        if (!(n instanceof Node && o.contains(n))) return void(null != e && window.clearTimeout(e), e = window.setTimeout(() => {
                                            e = null, a()
                                        }, 100));
                                        if (!r.getRangeAt(0).intersectsNode(n)) return
                                    }
                                    n()
                                }
                            },
                            o = e => {
                                let n = e.target;
                                n instanceof Node && O.current?.contains(n) || (N.current = !0, t(), B.current = null, z(null))
                            },
                            s = () => {
                                N.current = !1, n()
                            },
                            i = () => {
                                if (N.current) {
                                    t(), B.current = null, z(null);
                                    return
                                }
                                n()
                            };
                        return n(), document.addEventListener("selectionchange", i), window.addEventListener("dblclick", n), window.addEventListener("keyup", n), window.addEventListener("pointerdown", o), window.addEventListener("pointerup", s), window.addEventListener("pointercancel", s), window.addEventListener("resize", a), window.addEventListener("scroll", r, !0), () => {
                            null != e && window.clearTimeout(e), t(), document.removeEventListener("selectionchange", i), window.removeEventListener("dblclick", n), window.removeEventListener("keyup", n), window.removeEventListener("pointerdown", o), window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s), window.removeEventListener("resize", a), window.removeEventListener("scroll", r, !0)
                        }
                    }, C[5] = _, C[6] = G, C[7] = T, C[8] = E, C[9] = P, C[10] = M, C[11] = k, C[12] = m) : m = C[12], C[13] !== _ || C[14] !== T || C[15] !== E || C[16] !== P || C[17] !== M || C[18] !== k ? (g = [_, T, E, P, M, k], C[13] = _, C[14] = T, C[15] = E, C[16] = P, C[17] = M, C[18] = k, C[19] = g) : g = C[19], (0, s.useEffect)(m, g), null == F) return null;
                let D = .5;
                "start" === (void 0 === w ? "center" : w) && (D = +("rtl" === F.direction));
                let H = F.rect.left + F.rect.width * D,
                    W = F.viewportHorizontalBounds.left + 8 - H,
                    q = F.viewportHorizontalBounds.right - 8 - H,
                    U = F.portalTarget ?? document.body,
                    K = null == F.portalTarget ? "fixed z-50" : "absolute z-[1]";
                C[20] !== I || C[21] !== K ? (f = (0, o.b)("pointer-events-none w-max", K, I), C[20] = I, C[21] = K, C[22] = f) : f = C[22];
                let V = F.viewportHorizontalBounds.right - F.viewportHorizontalBounds.left - 16,
                    Q = F.rect.top - 8,
                    $ = `translateX(clamp(${W}px, ${-100*D}%, calc(${q}px - 100%))) translateY(-100%)`;
                return C[23] !== H || C[24] !== V || C[25] !== Q || C[26] !== $ ? (v = {
                    left: H,
                    maxWidth: V,
                    top: Q,
                    transform: $
                }, C[23] = H, C[24] = V, C[25] = Q, C[26] = $, C[27] = v) : v = C[27], C[28] !== S || C[29] !== L || C[30] !== F || C[31] !== k ? (y = null == F.portalTarget && 1 !== k ? (0, a.jsx)("div", {
                    style: {
                        zoom: k
                    },
                    children: S(F, L)
                }) : S(F, L), C[28] = S, C[29] = L, C[30] = F, C[31] = k, C[32] = y) : y = C[32], C[33] !== v || C[34] !== y || C[35] !== f ? (b = (0, a.jsx)("div", {
                    ref: O,
                    className: f,
                    style: v,
                    children: y
                }), C[33] = v, C[34] = y, C[35] = f, C[36] = b) : b = C[36], C[37] !== b || C[38] !== U ? (x = (0, a.jsx)(l.a, {
                    container: U,
                    children: b
                }), C[37] = b, C[38] = U, C[39] = x) : x = C[39], x
            }
        })
    }),
    JEFL: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("zd8w"),
            s = n("Wf1j"),
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
                        onAddSelectedText: C,
                        onStartFileAnnotation: w,
                        onDismissFileAnnotation: _,
                        onCommentSelectedText: S,
                        onEditModeChange: I,
                        onEditSelectedText: j,
                        onMoreDetails: T,
                        onOpenSideChat: E,
                        resume: P,
                        selectedText: A
                    } = e,
                    M = void 0 === x ? "task" : x,
                    k = (0, s.a)(),
                    [R, N] = (0, o.useState)(P?.mode === "edit" ? P.instruction : ""),
                    [O, B] = (0, o.useState)(P?.mode ?? "actions"),
                    [F, z] = (0, o.useState)(null);
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
                if ("edit" === O && null != j) {
                    let e, t, n, r, o, s, i, l, d, p;
                    return b[8] !== I ? (e = e => {
                        e.stopPropagation(), "Escape" === e.key && (e.preventDefault(), I?.(!1), B("actions-focused"))
                    }, b[8] = I, b[9] = e) : e = b[9], b[10] !== R || b[11] !== I || b[12] !== j ? (t = e => {
                        e.preventDefault(), 0 !== R.trim().length && (B("pending"), j(R).then(e => {
                            "retry" === e && (I?.(!1), B("actions-focused"))
                        }))
                    }, b[10] = R, b[11] = I, b[12] = j, b[13] = t) : t = b[13], b[14] !== k ? (n = k.formatMessage({
                        id: "selectedTextOverlay.editInput",
                        defaultMessage: "Edit instruction",
                        description: "Accessible label for an instruction that edits selected text"
                    }), b[14] = k, b[15] = n) : n = b[15], b[16] !== k ? (r = k.formatMessage({
                        id: "selectedTextOverlay.editPlaceholder",
                        defaultMessage: "Describe the edit…",
                        description: "Placeholder for an instruction that edits selected text"
                    }), b[16] = k, b[17] = r) : r = b[17], b[18] === Symbol.for("react.memo_cache_sentinel") ? (o = e => {
                        N(e.target.value)
                    }, b[18] = o) : o = b[18], b[19] !== R || b[20] !== n || b[21] !== r ? (s = (0, a.jsx)("input", {
                        "aria-label": n,
                        autoComplete: "off",
                        autoFocus: !0,
                        className: "min-w-0 flex-1 bg-transparent text-sm text-default outline-none placeholder:text-codex-description",
                        placeholder: r,
                        required: !0,
                        value: R,
                        onChange: o
                    }), b[19] = R, b[20] = n, b[21] = r, b[22] = s) : s = b[22], b[23] !== k ? (i = k.formatMessage({
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
                    }), b[26] = i, b[27] = d) : d = b[27], b[28] !== d || b[29] !== e || b[30] !== t || b[31] !== s ? (p = (0, a.jsxs)("form", {
                        className: "pointer-events-auto flex w-[27rem] max-w-full items-center gap-1.5 rounded-full border border-default bg-surface p-1 ps-3.5 font-sans shadow-lg",
                        onKeyDown: e,
                        onSubmit: t,
                        children: [s, d]
                    }), b[28] = d, b[29] = e, b[30] = t, b[31] = s, b[32] = p) : p = b[32], p
                }
                return b[33] !== M || b[34] !== C || b[35] !== w || b[36] !== A ? (t = null != C || null != w ? (0, a.jsx)(d.b, {
                    onClick: e => {
                        null != w ? z({
                            rect: (e.currentTarget.parentElement ?? e.currentTarget).getBoundingClientRect(),
                            submit: w()
                        }) : (window.getSelection()?.removeAllRanges(), C?.(A))
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
                }) : null, b[33] = M, b[34] = C, b[35] = w, b[36] = A, b[37] = t) : t = b[37], b[38] !== T || b[39] !== A ? (n = null != T ? (0, a.jsx)(d.b, {
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
                }) : null, b[44] = S, b[45] = f) : f = b[45], b[46] !== O || b[47] !== I || b[48] !== j ? (v = null != j ? (0, a.jsx)(d.b, {
                    autoFocus: "actions-focused" === O,
                    onClick: () => {
                        I?.(!0), B("edit")
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.edit",
                        defaultMessage: "Edit",
                        description: "Button label for editing currently selected text with a model"
                    })
                }) : null, b[46] = O, b[47] = I, b[48] = j, b[49] = v) : v = b[49], b[50] !== t || b[51] !== n || b[52] !== g || b[53] !== f || b[54] !== v ? (y = (0, a.jsxs)(d.a, {
                    children: [t, n, g, f, v]
                }), b[50] = t, b[51] = n, b[52] = g, b[53] = f, b[54] = v, b[55] = y) : y = b[55], y
            }
        })
    })
};