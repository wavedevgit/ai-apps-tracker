export const __rspack_esm_ids = [443947];
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
    bn59: (function(e, t, n) {
        n.d(t, {
            a: () => z,
            ChatSeatAccessScreen: () => G
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
            h = n("ygO2"),
            p = n("DVOM"),
            m = n("OWtl"),
            g = n("mBJV"),
            f = n("Wf1j"),
            v = n("ASxG"),
            y = n("fDv2"),
            x = n("rLEB"),
            b = n("Ietk"),
            C = n("twmu"),
            w = n("EOo5"),
            _ = n("Kwur"),
            I = n("udGC"),
            j = n("aTcy"),
            S = n("JNtf"),
            T = n("mUDD"),
            E = n("Ot7V"),
            P = n("SGsN"),
            A = n("DAA7"),
            k = n("yGJW"),
            M = n("GDNt");

        function R(e) {
            let t, n, l, c, d, u, p, v, y, M, R, B, G, F, z, L, D, H, W, q, U, K, V = (0, r.c)(70),
                {
                    account: Q,
                    accountId: Y,
                    userId: $,
                    onClose: X,
                    onSwitchToWork: Z
                } = e,
                J = (0, o.y)(m.a),
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
            V[2] !== el || V[3] !== eo ? (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE", el ? l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY" : eo && (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE"), V[2] = el, V[3] = eo, V[4] = l) : l = V[4], V[5] !== Q.account.account_user_role || V[6] !== l || V[7] !== ei || V[8] !== J ? (c = (e, t) => {
                (0, k.a)(J, g.sd, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: Q.account.account_user_role ?? void 0,
                    hasPaidSubscription: ei
                })
            }, V[5] = Q.account.account_user_role, V[6] = l, V[7] = ei, V[8] = J, V[9] = c) : c = V[9];
            let ed = c;
            V[10] !== X ? (d = () => {
                X(), (0, E.f)({
                    href: new URL("/codex/cloud", j.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, V[10] = X, V[11] = d) : d = V[11];
            let eu = d;
            V[12] !== Q.account.subscription_seat_pools_enabled || V[13] !== Y || V[14] !== eu || V[15] !== el || V[16] !== et || V[17] !== ee || V[18] !== eo || V[19] !== ed || V[20] !== X || V[21] !== Z || V[22] !== en || V[23] !== J || V[24] !== $ ? (u = async () => {
                if ("requesting" !== en) {
                    if (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), eo && !el) {
                        let e = new URL("/admin/members", j.h);
                        e.searchParams.set("account_id", Y), et && e.searchParams.set("search", et);
                        let t = e.toString(),
                            n = (0, A.c)(J, t, Y),
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
                                            account_id: Y,
                                            user_id: $
                                        }
                                    },
                                    requestBody: {
                                        operation: "switch",
                                        seat_type: "default"
                                    },
                                    isExpectedError: O
                                }) : await _.Request.safePatch("/accounts/{account_id}/users/{user_id}", {
                                    parameters: {
                                        path: {
                                            account_id: Y,
                                            user_id: $
                                        }
                                    },
                                    additionalHeaders: {
                                        "X-OpenAI-Account-User-Update-Source": "web_usage_based_workspace_access_modal"
                                    },
                                    requestBody: {
                                        seat_type: "default"
                                    }
                                }), !er.current) return;
                            (0, I.e)(J), await (0, b.g)("accounts-check"), await Promise.all([J.query.invalidate(C.b, Y), J.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), er.current && X()
                        } else {
                            if ((0, x.b)(J, Y), await _.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: Y
                                        }
                                    }
                                }), !er.current) return;
                            Z ? (X(), Z()) : eu(), J.get(P.f).success(ee.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted",
                                description: "Success toast shown after requesting ChatGPT access from the modal"
                            }))
                        }
                    } catch (e) {
                        er.current && ea(N(e) ?? "error")
                    }
                }
            }, V[12] = Q.account.subscription_seat_pools_enabled, V[13] = Y, V[14] = eu, V[15] = el, V[16] = et, V[17] = ee, V[18] = eo, V[19] = ed, V[20] = X, V[21] = Z, V[22] = en, V[23] = J, V[24] = $, V[25] = u) : u = V[25];
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
            }, V[30] = ed, V[31] = X, V[32] = y) : y = V[32], V[33] !== eh ? (M = e => {
                e.preventDefault(), eh()
            }, V[33] = eh, V[34] = M) : M = V[34], V[35] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, a.jsx)(S.d, {
                className: "heading-lg font-semibold",
                children: ep
            }), V[35] = R) : R = V[35], V[36] !== em ? (B = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [R, (0, a.jsx)(S.c, {
                    className: "text-lg leading-6 text-secondary",
                    children: em
                })]
            }), V[36] = em, V[37] = B) : B = V[37];
            let eg = "requesting" === en,
                ef = "requesting" === en;
            return V[38] !== ec ? (G = ec ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.updateSeatButton",
                defaultMessage: "Update seat",
                description: "Updates the current user's seat to include ChatGPT"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access",
                description: "Requests ChatGPT access from a workspace administrator"
            }), V[38] = ec, V[39] = G) : G = V[39], V[40] !== eg || V[41] !== ef || V[42] !== G ? (F = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: eg,
                disabled: ef,
                children: G
            }), V[40] = eg, V[41] = ef, V[42] = G, V[43] = F) : F = V[43], V[44] !== eu || V[45] !== ed || V[46] !== X || V[47] !== Z ? (z = () => {
                Z ? (X(), Z()) : (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), eu())
            }, V[44] = eu, V[45] = ed, V[46] = X, V[47] = Z, V[48] = z) : z = V[48], V[49] !== Z ? (L = Z ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work",
                description: "Switches from the Chat access explanation to the available Work surface"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex",
                description: "Returns to Codex from the Chat access explanation"
            }), V[49] = Z, V[50] = L) : L = V[50], V[51] !== z || V[52] !== L ? (D = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: z,
                children: L
            }), V[51] = z, V[52] = L, V[53] = D) : D = V[53], V[54] !== F || V[55] !== D ? (H = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [F, D]
            }), V[54] = F, V[55] = D, V[56] = H) : H = V[56], V[57] !== ee || V[58] !== en ? (W = null != en && "requesting" !== en ? (0, a.jsx)("p", {
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
            }), V[60] = B, V[61] = H, V[62] = W, V[63] = q) : q = V[63], V[64] !== q || V[65] !== M ? (U = (0, a.jsx)(T.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: M,
                children: q
            }), V[64] = q, V[65] = M, V[66] = U) : U = V[66], V[67] !== U || V[68] !== y ? (K = (0, a.jsx)(S.a, {
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
        var B = n("pBDs");

        function G(e) {
            let t, n, s = (0, r.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, o.y)(m.a),
                p = (0, o.z)(B.a),
                g = (0, o.z)(d.u),
                f = (0, l.Z)();
            if ("restricted" !== p.status) return null;
            let v = `${p.accountId}:${p.userId}`;
            return s[0] !== f || s[1] !== c || s[2] !== h || s[3] !== g.status ? (t = "allowed" === g.status ? c ?? (() => {
                (0, u.l)(h, "work"), f("/")
            }) : void 0, s[0] = f, s[1] = c, s[2] = h, s[3] = g.status, s[4] = t) : t = s[4], s[5] !== i || s[6] !== v || s[7] !== t ? (n = (0, a.jsx)(F, {
                modeToggle: i,
                onSwitchToWork: t
            }, v), s[5] = i, s[6] = v, s[7] = t, s[8] = n) : n = s[8], n
        }

        function F(e) {
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

        function z(e) {
            let t, n, s = (0, r.c)(4),
                {
                    children: i,
                    enabled: l
                } = e;
            s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "chatgpt.seat-access"
            }, s[0] = t) : t = s[0];
            let d = (0, o.x)(c.a, t);
            return l ? d.isLoading ? null : (s[1] !== d.isCapable || s[2] !== i ? (n = d.isCapable ? (0, a.jsx)(G, {}) : i, s[1] = d.isCapable, s[2] = i, s[3] = n) : n = s[3], n) : i
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
                let [x] = (0, o.useState)(t);
                return h[2] !== x ? (n = () => (v.current = !0, y.current = y.current ?? s.a.start(x.name, {}, x), y.current.mark("route_entered"), () => {
                    v.current = !1, queueMicrotask(() => {
                        v.current || y.current?.abort("navigation_away")
                    })
                }), l = [x], h[2] = x, h[3] = n, h[4] = l) : (n = h[3], l = h[4]), (0, o.useEffect)(n, l), h[5] !== f || h[6] !== m ? (c = () => {
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
            let d = n(o.s, r.conversationId),
                u = d?.at(-1);
            return u === r.userMessageId || null != a && u === a && d?.includes(r.userMessageId) === !0
        });

        function c(e) {
            return e?.type === "single_advertiser_ad_unit" && "composer_pinned" === e.presentation && e.ad_cards?.length === 1 && "image_card_v2" === e.ad_cards[0].format
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
                let a = n(c.p, e),
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
                        planType: r.plan_type ?? null,
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
                        planType: r,
                        messageId: o,
                        libraryFileId: s,
                        query: i
                    }
                    of n(u, e)) {
                    if (a.has(s)) continue;
                    let e = i.data;
                    e?.mime_type === "text/markdown" && "owned" === e.access_kind && a.set(s, {
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
                        messageId: o,
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
                } = t, a = n(h, e).filter(e => "language_learning" !== e.planType), r = n(c.p, e), o = r?.filter(e => "list" !== e.source && a.some(t => t.automationId === e.automationId)), s = o?.at(-1)?.messageId;
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
    Sd4O: (function(e, t, n) {
        var a = n("BolX"),
            r = n("Ro2M"),
            o = n("OWtl"),
            s = n("OMIV"),
            i = n("dQRk");
        let l = (0, a.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(i.p, e), r = a?.at(-1)?.messageId;
                if (null == r) return null;
                let o = new Set(a?.filter(e => {
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
                return 1 === o.size ? [...o][0] ?? null : null
            }),
            c = (0, a.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (!n(s.d, "2840857813")) return null;
                let a = n(l, e);
                return null != a && n(r.e, a).data?.automation.plan_type === "language_learning" ? a : null
            }),
            d = (0, a.d)(o.a, (e, t) => {
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
            o = n("zd8w"),
            s = n("VnEZ");

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
                    [c] = (0, o.useState)(i);
                return n[0] !== c || n[1] !== l ? (t = (0, a.jsx)(s.a, {
                    value: c,
                    children: l
                }), n[0] = c, n[1] = l, n[2] = t) : t = n[2], t
            }
        })
    }),
    S0ko: (function(e, t, n) {
        n.d(t, {
            BusinessAgentConversationHeader: () => R,
            BusinessAgentHomeHero: () => O
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("OWtl"),
            i = n("dQRk"),
            l = n("nUDt"),
            c = n("zd8w"),
            d = n("oyxz"),
            u = n("L6H2"),
            h = n("zKCW"),
            p = n("ygO2"),
            m = n("JNtf"),
            g = n("mUDD"),
            f = n("ZtSy"),
            v = n("HOLv"),
            y = n("mEbU"),
            x = n("RU3e"),
            b = n("UIU6"),
            C = n("Bbed"),
            w = n("T1PX");
        let _ = (0, C.a)(async () => {
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
                return (0, a.jsx)(S, {})
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
            let d = o.looseObject({
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
                } = t, [r, o] = (0, c.useState)(!1), [s] = (0, c.useState)(() => {
                    let e = structuredClone(d);
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
            errorFallback: (0, a.jsx)(S, {})
        });

        function I(e) {
            let t, n = (0, r.c)(2),
                o = (0, w.a)();
            return n[0] !== o ? (t = (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden",
                children: o ? (0, a.jsx)(S, {}) : (0, a.jsx)(j, {})
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function j(e) {
            let t, n, s, i = (0, r.c)(7),
                l = (0, c.useRef)(null),
                d = (0, y.a)(l),
                u = (0, o.z)(x.a),
                [h, p] = (0, c.useState)(!1);
            if (h) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(S, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(S, {}), i[1] = t) : t = i[1], i[2] !== d || i[3] !== u ? (n = d && !0 === u ? (0, a.jsx)(_, {
                onError: () => p(!0)
            }) : null, i[2] = d, i[3] = u, i[4] = n) : n = i[4], i[5] !== n ? (s = (0, a.jsx)(b.a, {
                name: "BusinessAgentDisclosureHero",
                fallback: t,
                children: (0, a.jsx)("div", {
                    ref: l,
                    className: "absolute inset-0",
                    children: n
                })
            }), i[5] = n, i[6] = s) : s = i[6], s
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
        var T = {
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
            let t, n, o, s, i, l = (0, r.c)(11),
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
                children: (0, a.jsx)(M, {
                    businessName: h.businessName
                })
            }), l[3] = h.businessName, l[4] = n) : n = l[4], l[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)("span", {
                className: "truncate text-xs font-normal text-secondary",
                children: (0, a.jsx)(d.a, {
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

        function A(e) {
            let t, n = (0, r.c)(14),
                {
                    state: o,
                    onStarterPromptSelect: s
                } = e,
                i = "ready" === o.status ? o.context : o;
            if (n[0] !== i.businessName || n[1] !== i.logoUrl || n[2] !== i.showConversationStarters || n[3] !== s || n[4] !== o.context || n[5] !== o.status) {
                let e, r, l, c = "ready" === o.status && i.showConversationStarters ? o.context.conversationStarters?.slice(0, 4) : void 0,
                    m = i.businessName ?? null,
                    g = i.logoUrl ?? null;
                n[7] !== m || n[8] !== g ? (e = (0, a.jsx)(u.a, {
                    alt: "",
                    name: m,
                    size: "lg",
                    src: g
                }), n[7] = m, n[8] = g, n[9] = e) : e = n[9], n[10] !== i.businessName ? (r = (0, a.jsx)("h1", {
                    className: "heading-xl font-normal text-default select-none",
                    children: (0, a.jsx)(M, {
                        businessName: i.businessName
                    })
                }), n[10] = i.businessName, n[11] = r) : r = n[11], n[12] !== o.status ? (l = "ready" !== o.status ? (0, a.jsx)(h.a, {
                    ariaLive: "polite",
                    role: "failed" === o.status ? "alert" : "status",
                    type: "failed" === o.status ? "error" : "normal",
                    content: "failed" === o.status ? (0, a.jsx)(d.a, {
                        id: "chatgptConversations.businessAgent.unavailable",
                        defaultMessage: "This Business Agent is unavailable. Please return to the ad and try again",
                        description: "Error on a Business Agent chat destination when creating its interaction fails; sending is unavailable and the user can retry from the original ad"
                    }) : (0, a.jsx)(d.a, {
                        id: "chatgptConversations.businessAgent.loading",
                        defaultMessage: "Opening Business Agent…",
                        description: "Loading status on a Business Agent chat destination while its interaction is being created"
                    })
                }) : null, n[12] = o.status, n[13] = l) : l = n[13], t = (0, a.jsxs)("div", {
                    className: "mx-auto flex w-[min(100%,var(--thread-content-max-width))] min-w-0 flex-col items-center gap-3 px-panel text-center",
                    children: [e, r, l, null != c && (c.length > 1 || 1 === c.length && "ready" === o.status && !0 === o.context.disablePrefill) ? (0, a.jsx)("div", {
                        className: "mt-3 flex flex-wrap justify-center gap-2 select-none",
                        children: c.map(e => (0, a.jsx)(p.a, {
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

        function k(e) {
            let t, n, o, s, i, l, u, h, y, x, b, C, w, _, j, S, P, A = (0, r.c)(29),
                {
                    context: k,
                    onPresented: M,
                    onContinue: R,
                    onDismiss: O
                } = e,
                [N, B] = (0, c.useState)(!0 === k.showDisclosureModal);
            A[0] !== k.privacyPolicyUrl ? (t = function(e) {
                if (null == e) return null;
                try {
                    let t = new URL(e);
                    return ("https:" === t.protocol || "http:" === t.protocol) && t.hostname ? t.href : null
                } catch {
                    return null
                }
            }(k.privacyPolicyUrl), A[0] = k.privacyPolicyUrl, A[1] = t) : t = A[1];
            let G = t;
            return A[2] !== O ? (n = e => {
                B(e), e || O?.()
            }, A[2] = O, A[3] = n) : n = A[3], A[4] !== M ? (o = {
                "data-theme": "light",
                onOpenAutoFocus: M
            }, A[4] = M, A[5] = o) : o = A[5], A[6] !== R ? (s = e => {
                e.preventDefault(), B(!1), R?.()
            }, A[6] = R, A[7] = s) : s = A[7], A[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(I, {}), A[8] = i) : i = A[8], A[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(m.d, {
                className: "heading-lg text-center leading-7 font-semibold",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.disclosureTitle",
                    defaultMessage: "About chatting with businesses",
                    description: "Title of the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It introduces what business AI chats offer and how chat privacy works. Keep it neutral and concise; there are no placeholders."
                })
            }), A[9] = l) : l = A[9], A[10] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(v.a, {
                className: "shrink-0",
                asset: T
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
            }), A[12] = y) : y = A[12], A[13] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, a.jsx)(v.a, {
                className: "shrink-0",
                asset: E
            }), A[13] = x) : x = A[13], A[14] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.disclosureUsageTrendsTitle",
                    defaultMessage: "Your chats remain private",
                    description: "Short privacy heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. Reassure the person that their conversations with business AI agents remain private from the businesses. There are no placeholders."
                })
            }), A[14] = b) : b = A[14], A[15] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [l, (0, a.jsx)(m.c, {
                    asChild: !0,
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [y, (0, a.jsxs)("div", {
                            className: "flex items-start gap-3",
                            children: [x, (0, a.jsxs)("div", {
                                className: "flex min-w-0 flex-col gap-0.5",
                                children: [b, (0, a.jsx)("p", {
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
            }), A[15] = C) : C = A[15], A[16] !== G ? (w = null == G ? null : (0, a.jsx)(f.a, {
                href: G,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy",
                    description: "Link to the business-provided privacy policy in the introductory Business Agent dialog. Opens separately without accepting or dismissing the dialog. Keep the label short."
                })
            }), A[16] = G, A[17] = w) : w = A[17], A[18] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, a.jsx)("div", {
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
            }), A[18] = _) : _ = A[18], A[19] !== w ? (j = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [C, w, _]
                })]
            }), A[19] = w, A[20] = j) : j = A[20], A[21] !== j || A[22] !== s ? (S = (0, a.jsx)(g.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: s,
                children: j
            }), A[21] = j, A[22] = s, A[23] = S) : S = A[23], A[24] !== N || A[25] !== S || A[26] !== n || A[27] !== o ? (P = (0, a.jsx)(m.a, {
                open: N,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: o,
                children: S
            }), A[24] = N, A[25] = S, A[26] = n, A[27] = o, A[28] = P) : P = A[28], P
        }

        function M(e) {
            let t, n = (0, r.c)(2),
                {
                    businessName: o
                } = e;
            return n[0] !== o ? (t = o?.trim() ? (0, a.jsx)(a.Fragment, {
                children: o
            }) : (0, a.jsx)(d.a, {
                id: "chatgpt.ads.business_agent.disclosure.fallback_name",
                defaultMessage: "Business Agent",
                description: "Fallback heading in the compact data-sharing disclosure shown at the top of every organic or sponsored Business Agent conversation. Use a short neutral title that fits on one line. This appears when the business has not supplied a display name."
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function R(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s,
                    fallback: l
                } = e,
                c = (0, o.x)(i.t, s);
            return n[0] !== l || n[1] !== c ? (t = null == c ? l : (0, a.jsx)(P, {
                state: c
            }), n[0] = l, n[1] = c, n[2] = t) : t = n[2], t
        }

        function O(e) {
            let t, n, s, l = (0, r.c)(11),
                {
                    conversationId: c,
                    fallback: d,
                    onStarterPromptSelect: u
                } = e,
                h = (0, o.x)(i.t, c);
            return null == h ? d : (l[0] !== d || l[1] !== u || l[2] !== h ? (t = "ready" !== h.status || h.context.showConversationStarters ? (0, a.jsx)(A, {
                state: h,
                onStarterPromptSelect: u
            }) : d, l[0] = d, l[1] = u, l[2] = h, l[3] = t) : t = l[3], l[4] !== c || l[5] !== h.context || l[6] !== h.status ? (n = "ready" === h.status ? (0, a.jsx)(N, {
                context: h.context,
                conversationId: c
            }, h.context.interactionId) : null, l[4] = c, l[5] = h.context, l[6] = h.status, l[7] = n) : n = l[7], l[8] !== t || l[9] !== n ? (s = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), l[8] = t, l[9] = n, l[10] = s) : s = l[10], s)
        }

        function N(e) {
            let t, n, i, c = (0, r.c)(11),
                {
                    context: d,
                    conversationId: u
                } = e,
                h = (0, o.y)(s.a),
                p = (0, o.z)(l.b),
                m = p?.conversationId === u && p.ready;
            return m || !0 === d.showDisclosureModal ? (c[0] !== m || c[1] !== d || c[2] !== p ? (t = m ? {
                ...d,
                showDisclosureModal: !p.presented
            } : d, c[0] = m, c[1] = d, c[2] = p, c[3] = t) : t = c[3], c[4] !== m || c[5] !== u || c[6] !== h ? (n = m ? () => (0, l.a)(h, u) : void 0, c[4] = m, c[5] = u, c[6] = h, c[7] = n) : n = c[7], c[8] !== t || c[9] !== n ? (i = (0, a.jsx)(k, {
                context: t,
                onPresented: n
            }), c[8] = t, c[9] = n, c[10] = i) : i = c[10], i) : null
        }
    }),
    KvJW: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("zd8w"),
            i = n("oyxz"),
            l = n("WQca"),
            c = n("yGJW"),
            d = n("OWtl"),
            u = n("eShZ"),
            h = n("ZhoB");
        let p = new WeakSet;

        function m(e) {
            let t, n, a = (0, r.c)(5),
                {
                    error: o,
                    onShown: i
                } = e,
                l = (0, s.useEffectEvent)(i);
            return a[0] !== o || a[1] !== l ? (t = () => {
                if (null != o) {
                    if ((0, u.e)(o)) {
                        if (p.has(o)) return;
                        p.add(o)
                    }
                    l()
                }
            }, a[0] = o, a[1] = l, a[2] = t) : t = a[2], a[3] !== o ? (n = [o], a[3] = o, a[4] = n) : n = a[4], (0, s.useEffect)(t, n), null
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, p, g, f, v, y, x = (0, r.c)(24),
                    {
                        conversationId: b,
                        error: C,
                        loadError: w,
                        canRetry: _,
                        isWorkConversation: I,
                        children: j
                    } = e,
                    S = (0, o.y)(d.a);
                x[0] !== b || x[1] !== I || x[2] !== S ? (t = (e, t) => {
                    (0, h.e)(S.get(c.c).logProductEvent, {
                        conversationId: b,
                        error: e,
                        isWorkConversation: I,
                        canRetry: t
                    })
                }, x[0] = b, x[1] = I, x[2] = S, x[3] = t) : t = x[3];
                let T = t;
                x[4] !== _ || x[5] !== w || x[6] !== T ? (n = () => T(w, _), x[4] = _, x[5] = w, x[6] = T, x[7] = n) : n = x[7], x[8] !== w || x[9] !== n ? (s = (0, a.jsx)(m, {
                    error: w,
                    onShown: n
                }), x[8] = w, x[9] = n, x[10] = s) : s = x[10], x[11] !== j || x[12] !== s ? (p = (0, a.jsxs)(a.Fragment, {
                    children: [s, j]
                }), x[11] = j, x[12] = s, x[13] = p) : p = x[13];
                let E = p;
                return x[14] !== C ? (g = C instanceof u.a && !(0, u.e)(C) && (403 === C.status || 404 === C.status), x[14] = C, x[15] = g) : g = x[15], x[16] !== C || x[17] !== T ? (f = () => T(C, !1), x[16] = C, x[17] = T, x[18] = f) : f = x[18], x[19] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                    id: "chatgptConversations.conversationInaccessible",
                    defaultMessage: "You don’t have access to this conversation. Make sure you’re logged in to the right account, or ask the conversation owner to send you a share link.",
                    description: "Info toast shown when a user opens a ChatGPT conversation that does not exist or that they cannot access. The user is returned to Home and can switch accounts or ask the owner for a share link."
                }), x[19] = v) : v = x[19], x[20] !== E || x[21] !== g || x[22] !== f ? (y = (0, a.jsxs)(a.Fragment, {
                    children: [null, (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(l.a, {
                            isUnavailable: g,
                            homePath: "/",
                            onUnavailable: f,
                            message: v,
                            children: E
                        })
                    })]
                }), x[20] = E, x[21] = g, x[22] = f, x[23] = y) : y = x[23], y
            }
        })
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
            let n = e.get(p.j, t);
            return null == n ? null : e.query.snapshot(h.chatGptConversationQueryById$, n).getData() ?? null
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n = x(e, t);
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
                    e.get(o.f).danger(n || e.get(s.a).formatMessage(d.a.pinError), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.activeChat.pinError"
                        }
                    })
                })
            },
            renameActiveChatGptConversation: function(e, t, n) {
                let a = x(e, t);
                if (null == a || !(0, v.d)(e, a.conversation_id)) {
                    if (null != n) throw Error("Chat is unavailable for renaming.");
                    return
                }
                let o = e.get(p.D, t) ? e.get(p.cb, t) : a.title,
                    s = (0, m.a)(a.context_scopes) ? a.gizmo_id : void 0,
                    l = t => (0, v.R)({
                        scope: e,
                        conversationId: a.conversation_id,
                        previousTitle: o,
                        title: t
                    });
                if (null != n) {
                    if (null != s && e.get(g.f)?.projectId !== s) throw Error("Chat is locked.");
                    return l(n)
                }(0, r.f)(e, i.SidebarRenameDialog, {
                    initialValue: o ?? "",
                    draftKey: a.conversation_id,
                    protectedProjectId: s,
                    onSave: l,
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
                        conversationId: x
                    } = e,
                    b = (0, r.y)(c.a),
                    C = (0, o.a)();
                return y[0] !== x || y[1] !== C || y[2] !== b ? (t = () => {
                    (0, h.c)(b, x).catch(() => {
                        b.get(i.f).danger(C.formatMessage(u.a.markUnreadError), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.sidebar.markUnreadError"
                            }
                        })
                    })
                }, y[0] = x, y[1] = C, y[2] = b, y[3] = t) : t = y[3], (0, s.a)("markThreadUnread", t), y[4] !== x || y[5] !== b ? (n = () => void(0, d.renameActiveChatGptConversation)(b, x), p = [x, b], y[4] = x, y[5] = b, y[6] = n, y[7] = p) : (n = y[6], p = y[7]), (0, l.d)("rename-thread", n, p), y[8] !== x || y[9] !== b ? (m = () => (0, d.c)(b, x), g = [x, b], y[8] = x, y[9] = b, y[10] = m, y[11] = g) : (m = y[10], g = y[11]), (0, l.d)("toggle-thread-pin", m, g), y[12] !== x || y[13] !== b ? (f = () => (0, d.a)(b, x), v = [x, b], y[12] = x, y[13] = b, y[14] = f, y[15] = v) : (f = y[14], v = y[15]), (0, l.d)("archive-thread", f, v), null
            }
        })
    }),
    V9xx: (function(e, t, n) {
        n.d(t, {
            a: () => sJ,
            ChatGptConversationPage: () => sX,
            ChatGptSharedConversationPage: () => sZ
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("FS1B"),
            s = n("T0Rc"),
            i = n("on57"),
            l = n("IPUh"),
            c = n("xCr9"),
            d = n.n(c),
            u = n("HVBu"),
            h = n.n(u),
            p = n("BolX"),
            m = n("d0tz"),
            g = n("AuIy"),
            f = n("iqEK"),
            v = n("NRIv"),
            y = n("zd8w"),
            x = n("v7qY"),
            b = n("Wf1j"),
            C = n("oyxz"),
            w = n("jqIZ"),
            _ = n("bn59"),
            I = n("OY84"),
            j = n("Yxds"),
            S = n("StMt"),
            T = n("E8Sp"),
            E = n("z0li"),
            P = n("QcFS"),
            A = n("I7bK"),
            k = n("ZU27"),
            M = n("Pyg2"),
            R = n("ZIh4"),
            O = n("O0M0"),
            N = n("Cslg"),
            B = n("OFP1"),
            G = n("ItIk"),
            F = (n("AZW7"), n("jov5")),
            z = n("dQRk"),
            L = n("tSEg"),
            D = n("Ro2M"),
            H = n("bN4H"),
            W = n("TS05");

        function q(e) {
            let t, n, o, s, i = (0, r.c)(12),
                {
                    conversationId: l,
                    entries: c,
                    turnListApi: d
                } = e,
                {
                    key: u,
                    search: h,
                    state: m
                } = (0, w.X)();
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "automations.cloud.scheduled-tasks"
            }, i[0] = t) : t = i[0];
            let {
                isCapable: g
            } = (0, p.x)(S.a, t);
            if (i[1] !== g || i[2] !== m?.sidebarArea || i[3] !== h) {
                let e = new URLSearchParams(h);
                n = e.get("automationId"), o = m?.sidebarArea === "scheduled" || !g || !n || "finalAgentTurnStart" !== e.get("messageId"), i[1] = g, i[2] = m?.sidebarArea, i[3] = h, i[4] = n, i[5] = o
            } else n = i[4], o = i[5];
            return o ? null : (i[6] !== n || i[7] !== l || i[8] !== c || i[9] !== u || i[10] !== d ? (s = (0, a.jsx)(U, {
                automationId: n,
                conversationId: l,
                entries: c,
                turnListApi: d
            }, u), i[6] = n, i[7] = l, i[8] = c, i[9] = u, i[10] = d, i[11] = s) : s = i[11], s)
        }

        function U(e) {
            let t, n, a, o, s = (0, r.c)(25),
                {
                    automationId: i,
                    conversationId: l,
                    entries: c,
                    turnListApi: d
                } = e,
                u = (0, p.y)(L.a),
                h = (0, w.X)(),
                m = (0, p.z)(N.f),
                g = (0, p.x)(z.j, l),
                {
                    data: f
                } = (0, p.x)(D.e, i),
                v = (0, p.z)(F.a),
                x = (0, y.useRef)(null),
                b = (0, y.useRef)(null);
            s[0] !== c ? (t = c.findLast(Q), s[0] = c, s[1] = t) : t = s[1];
            let C = t;
            s[2] !== m || s[3] !== i || s[4] !== v || s[5] !== C || s[6] !== f || s[7] !== h || s[8] !== u || s[9] !== d ? (n = () => {
                null == f || null == m || (v || x.current === m || (x.current = m, (0, H.openAutomationSidePanelTab)({
                    scope: u,
                    automationId: i,
                    title: f.automation.title
                })), null != d && null != C && b.current !== m && (b.current = m, d.scrollToKey(C.turnKey, K, {
                    align: "top"
                }).then(() => {
                    u.set(W.a, {
                        locationKey: h.key,
                        accountId: m
                    }, !0)
                })))
            }, s[2] = m, s[3] = i, s[4] = v, s[5] = C, s[6] = f, s[7] = h, s[8] = u, s[9] = d, s[10] = n) : n = s[10];
            let _ = (0, y.useEffectEvent)(n);
            s[11] !== m || s[12] !== l || s[13] !== f?.automation.conversation_id || s[14] !== _ || s[15] !== g ? (a = () => {
                null != m && f?.automation.conversation_id === (g ?? l) && _()
            }, s[11] = m, s[12] = l, s[13] = f?.automation.conversation_id, s[14] = _, s[15] = g, s[16] = a) : a = s[16];
            let I = C?.turnKey,
                j = f?.automation.conversation_id;
            return s[17] !== m || s[18] !== v || s[19] !== l || s[20] !== g || s[21] !== I || s[22] !== j || s[23] !== d ? (o = [m, l, I, j, g, v, d], s[17] = m, s[18] = v, s[19] = l, s[20] = g, s[21] = I, s[22] = j, s[23] = d, s[24] = o) : o = s[24], (0, y.useEffect)(a, o), null
        }

        function K(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: V
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function V(e) {
            return e instanceof HTMLElement && e.getClientRects().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }

        function Q(e) {
            let {
                turn: t
            } = e;
            return t.items.some(Y)
        }

        function Y(e) {
            return "user-message" !== e.type
        }
        var $ = n("uxPT"),
            X = n("nKJ6"),
            Z = n("GMTh"),
            J = n("zpMv"),
            ee = n("PFzG"),
            et = n("KvJW"),
            en = n("TDcV"),
            ea = n("Xvoy"),
            er = n("SGsN"),
            eo = n("WAdu"),
            es = n("OWtl"),
            ei = n("hZax"),
            el = n("VnEZ");
        let ec = {
            $type: "protobuf_analytics_events.v1.ChatgptConversationPrintLifecycle"
        };
        var ed = n("jDEJ"),
            eu = n("yGJW");
        let eh = (0, p.u)(es.a, null);

        function ep(e, t) {
            if (!e.get(eu.c).isChatgptBrowserReplacement || t.repeat || ((0, ed.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(eh)) return;
            let n = eg("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(eh, n), ef(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function em(e, t, n, a) {
            let r = e.get(eh);
            if (!e.get(eu.c).isChatgptBrowserReplacement || null == r) return a();
            let o = n => {
                ef(e, r, n, t)
            };
            o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(eh)?.id !== r.id || e.get(eh)?.printing || e.set(eh, null), a
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
            ex = n("rKAs"),
            eb = n("SqqO"),
            eC = n("zHp1"),
            ew = n("rvFo"),
            e_ = n("taWv");

        function eI() {
            return Object.fromEntries(Array.from(document.images).flatMap(e => {
                if (!e.complete || 0 === e.naturalWidth) return [];
                let t = e.currentSrc || e.src;
                return [e.getAttribute("src"), e.src, t].flatMap(e => e ? [
                    [e, t]
                ] : [])
            }))
        }
        var ej = n("rxj0"),
            eS = n("gsAl"),
            eT = n("AO3k"),
            eE = n("aS84"),
            eP = n("Qtjq"),
            eA = "printDocument-v_w5Ax";
        let ek = "https://chatgpt.com/download/?utm_source=chatgpt_web&utm_medium=print&utm_campaign=app_install";

        function eM(e) {
            let t, n, o, s, l, c, d, u, h, p, m, g, f = (0, r.c)(22),
                {
                    children: v,
                    title: y
                } = e,
                x = (0, b.a)(),
                {
                    getExperiment: w
                } = (0, ei.j)();
            if (!w("448755449").get("enabled", !1)) {
                let e, t;
                return f[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.b)(eA, "hidden w-full space-y-1.5 bg-surface text-default print:block"), f[0] = e) : e = f[0], f[1] !== v ? (t = (0, a.jsx)("div", {
                    className: e,
                    "data-conversation-print": "",
                    "data-theme": "light",
                    children: v
                }), f[1] = v, f[2] = t) : t = f[2], t
            }
            return f[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.b)(eA, "formattedPrintDocument-tP74Wl", "group/conversation-print hidden w-full bg-surface text-default print:block"), f[3] = t) : t = f[3], f[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(eE.a, {
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
            }), f[7] = v, f[8] = s) : s = f[8], f[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, i.b)("footer-QEzLbn", "flex items-center gap-3 rounded-2xl border border-default bg-surface-secondary p-2 text-default"), f[9] = l) : l = f[9], f[10] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)("div", {
                className: "flex size-10 shrink-0 items-center justify-center rounded-xl border border-default bg-surface",
                children: (0, a.jsx)(eP.a, {
                    className: "size-7",
                    "aria-hidden": "true"
                })
            }), f[10] = c) : c = f[10], f[11] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsx)("p", {
                className: "font-semibold",
                children: (0, a.jsx)(C.a, {
                    id: "chatgpt.print.downloadApp.title",
                    defaultMessage: "Take your curiosity further",
                    description: "Headline in the footer of a printed or PDF-saved ChatGPT conversation, inviting the reader to download the mobile app. Keep it short and encouraging."
                })
            }), f[11] = d) : d = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsxs)("div", {
                className: "min-w-0 flex-1 text-sm",
                children: [d, (0, a.jsx)("p", {
                    className: "mt-1 text-secondary",
                    children: (0, a.jsx)(C.a, {
                        id: "chatgpt.print.downloadApp.description",
                        defaultMessage: "Scan to get the ChatGPT app",
                        description: "Instruction beside the QR code in the footer of a printed or PDF-saved conversation. Scanning the code opens the ChatGPT app download page. Keep it short."
                    })
                })]
            }), f[12] = u) : u = f[12], f[13] !== x ? (h = x.formatMessage({
                id: "chatgpt.print.downloadApp.qrCode",
                defaultMessage: "Download the ChatGPT app",
                description: "Accessible label for a QR code and link in a printed or PDF-saved conversation. The code and link open the ChatGPT app download page."
            }), f[13] = x, f[14] = h) : h = f[14], f[15] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(C.a, {
                id: "chatgpt.print.downloadApp.fallback",
                defaultMessage: "Get the app",
                description: "Link to the ChatGPT app download page when its QR code cannot be generated in a printed conversation"
            }), f[15] = p) : p = f[15], f[16] !== h ? (m = (0, a.jsxs)("footer", {
                className: l,
                children: [c, u, (0, a.jsx)("a", {
                    className: "shrink-0",
                    href: `${ek}&utm_content=pdf_link`,
                    children: (0, a.jsx)(eT.a, {
                        value: `${ek}&utm_content=qr`,
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

        function eR(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var eO = n("zn0A"),
            eN = n("OOaz"),
            eB = n("jfiJ"),
            eG = n("FGJH"),
            eF = n("nmN6");
        let ez = new WeakMap;

        function eL(e) {
            let t, n, o = (0, r.c)(6),
                s = (0, p.z)(en.a);
            return o[0] !== s || o[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([s, e.entries[0]?.conversationId]), o[0] = s, o[1] = e.entries[0]?.conversationId, o[2] = t) : t = o[2], o[3] !== e || o[4] !== t ? (n = (0, a.jsx)(eD, {
                ...e
            }, t), o[3] = e, o[4] = t, o[5] = n) : n = o[5], n
        }

        function eD(e) {
            let t, n, o, s, i, l, c = (0, r.c)(16),
                d = (0, p.y)(L.a),
                u = (0, p.z)(ea.a),
                [h, m] = (0, y.useState)(!1),
                g = (0, y.useRef)(null);
            c[0] !== d ? (t = (e, t) => {
                if (ep(d, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void g.current?.onKeyDown(e, t);
                let n = ez.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, x.flushSync)(() => m(!0));
                let a = n ?? g.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => ez.get(e)).finally(() => {
                    t.aborted || m(!1)
                })
            }, c[0] = d, c[1] = t) : t = c[1];
            let f = (0, y.useEffectEvent)(t);
            c[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                (0, x.flushSync)(() => m(!0)), g.current?.onBeforePrint()
            }, c[2] = n) : n = c[2];
            let v = (0, y.useEffectEvent)(n);
            c[3] !== d ? (o = () => {
                d.set(eO.a, null), m(!1)
            }, c[3] = d, c[4] = o) : o = c[4];
            let b = (0, y.useEffectEvent)(o);
            return c[5] !== b || c[6] !== v || c[7] !== f || c[8] !== d ? (s = () => {
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
                return window.addEventListener("keydown", r, !0), window.addEventListener("beforeprint", v, !0), window.addEventListener("afterprint", b), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), window.removeEventListener("beforeprint", v, !0), window.removeEventListener("afterprint", b), d.set(eO.a, null), a()
                }
            }, c[5] = b, c[6] = v, c[7] = f, c[8] = d, c[9] = s) : s = c[9], c[10] !== d ? (i = [d], c[10] = d, c[11] = i) : i = c[11], (0, y.useEffect)(s, i), c[12] !== u || c[13] !== e || c[14] !== h ? (l = h || u ? (0, a.jsx)(eH, {
                ...e,
                ref: g,
                printing: u
            }) : null, c[12] = u, c[13] = e, c[14] = h, c[15] = l) : l = c[15], l
        }

        function eH(e) {
            let t, n, o, i, l = (0, r.c)(19),
                {
                    entries: c,
                    title: d,
                    TurnRowComponent: u,
                    printing: h,
                    ref: m
                } = e,
                g = (0, p.y)(L.a),
                f = (0, y.useContext)(O.a),
                v = (0, y.useContext)(eo.a),
                {
                    getExperiment: b
                } = (0, ei.j)(),
                w = b("448755449", {
                    disableExposureLog: !0
                }).get("enabled", !1);
            l[0] !== c[0]?.conversationId ? (t = c[0]?.conversationId ?? (0, eN.d)(""), l[0] = c[0]?.conversationId, l[1] = t) : t = l[1], l[2] !== f || l[3] !== t ? (n = {
                auth: f,
                conversationId: t
            }, l[2] = f, l[3] = t, l[4] = n) : n = l[4];
            let _ = (0, p.x)(null != c[0] && eS.i, n),
                I = (0, p.x)(null == c[0] ? null : ej.d, c[0]?.conversationId ?? "") ?? !0,
                j = (0, y.useRef)(null),
                S = function(e, t, n) {
                    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                        o = arguments.length > 5 ? arguments[5] : void 0,
                        s = [],
                        i = [],
                        l = new Map;
                    for (let n of t) {
                        let t = l.get(n.conversationId);
                        if (null == t) {
                            let a = e.get(z.j, n.conversationId);
                            t = {
                                serverId: a,
                                userResolver: (0, e_.c)(void 0, void 0, void 0, e.get(z.R, n.conversationId) ?? void 0),
                                scopedResolver: (0, e_.c)(a ?? void 0)
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
                            void 0 === t.generatedResolver && (t.generatedResolver = e.get(e_.a, n.conversationId));
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
                                        for (let a of (0, ex.u)(t, e)) {
                                            if (r && (0, eb.d)(a.src)) continue;
                                            let e = a.searchResult?.isProxied && (a.previewSrc === a.searchResult.contentSrc || a.previewSrc === a.searchResult.originalSrc) ? a.src : a.previewSrc;
                                            s.push({
                                                conversationId: n.conversationId,
                                                src: a.src,
                                                previewSrc: null != e && r && (0, eb.d)(e) ? a.src : e
                                            })
                                        }
                            }
                            if (null == o) continue;
                            i.push(...l.contentReferences.flatMap((e, t) => (0, ex.u)(e, t).map(e => {
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
                        queryKey: ["chatgpt-print-assets", e.get(en.a), t[0]?.conversationId, a, r, s, c.map(e => {
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
                        staleTime: ew.b.FIVE_MINUTES,
                        refetchOnWindowFocus: !1,
                        retry: !1,
                        queryFn: t => {
                            let {
                                client: a,
                                signal: i,
                                queryKey: l
                            } = t;
                            return em(e, "CHATGPT_CONVERSATION_PRINT_PREPARATION_IMAGES", i, async () => {
                                let t = {
                                    ...a.getQueryData(l)?.imageSources
                                };
                                for (let e of ey()(c, 6)) i.throwIfAborted(), await Promise.all(e.map(async e => {
                                    let {
                                        src: n,
                                        resolver: r
                                    } = e, o = await (0, eC.a)(a, n, r);
                                    if (i.throwIfAborted(), null != o) {
                                        let e = new Image;
                                        e.referrerPolicy = "no-referrer", e.src = o, await e.decode(), t[n] = o
                                    }
                                }));
                                let d = new Map,
                                    u = s.flatMap(t => {
                                        let n = d.get(t.conversationId);
                                        return (null == n && (n = r || !e.get(eS.i, {
                                            auth: o,
                                            conversationId: t.conversationId
                                        }) && e.get(ej.d, t.conversationId), d.set(t.conversationId, n)), n && (0, eb.d)(t.src)) ? [] : [{
                                            ...t,
                                            previewSrc: n && null != t.previewSrc && (0, eb.d)(t.previewSrc) ? t.src : t.previewSrc
                                        }]
                                    }),
                                    h = n ? t : await async function(e, t, n) {
                                        if (0 === e.length) return t;
                                        let a = eI(),
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
                }(g, c, h, w, "restricted" === v || !_ && I, f),
                {
                    data: T,
                    isSuccess: E,
                    isError: P,
                    refetch: A
                } = (0, s.a)(S);
            return l[5] !== S || l[6] !== T || l[7] !== w || l[8] !== E || l[9] !== A || l[10] !== g ? (o = () => ({
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
                    if (w) {
                        let e = g.queryClient.getQueryData(S.queryKey),
                            t = {
                                ...eI(),
                                ...e?.imageSources
                            };
                        (0, x.flushSync)(() => g.set(eO.a, t))
                    }
                }
            }), l[5] = S, l[6] = T, l[7] = w, l[8] = E, l[9] = A, l[10] = g, l[11] = o) : o = l[11], (0, y.useImperativeHandle)(m, o), l[12] !== u || l[13] !== c || l[14] !== P || l[15] !== E || l[16] !== h || l[17] !== d ? (i = h ? (0, x.createPortal)((0, a.jsx)(eM, {
                title: d,
                children: (0, a.jsx)(el.a, {
                    value: null,
                    children: (0, a.jsx)(eF.a, {
                        value: null,
                        children: E ? c.map(e => {
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
                            children: P ? (0, a.jsx)(C.a, {
                                id: "chatgpt.printAssets.error",
                                defaultMessage: "Some images could not be loaded. Close print and try again.",
                                description: "Printed instead of a partial conversation when its images failed to load"
                            }) : (0, a.jsx)(C.a, {
                                id: "chatgpt.printAssets.loading",
                                defaultMessage: "Images are still loading. Close print and try again.",
                                description: "Printed instead of an incomplete conversation when its images are still loading"
                            })
                        })
                    })
                })
            }), document.body) : null, l[12] = u, l[13] = c, l[14] = P, l[15] = E, l[16] = h, l[17] = d, l[18] = i) : i = l[18], i
        }

        function eW(e) {
            let t, n, a, o, i, l, c = (0, r.c)(22),
                {
                    conversationId: d
                } = e,
                u = (0, p.y)(es.a),
                h = (0, b.a)(),
                m = (0, y.useRef)(null),
                g = (0, p.z)(en.a),
                f = (0, p.x)(z.j, d),
                v = (0, p.z)(eG.b);
            c[0] !== g || c[1] !== f ? (t = ["chatgpt-print-history", g, f], c[0] = g, c[1] = f, c[2] = t) : t = c[2], c[3] !== u || c[4] !== f ? (n = e => {
                let {
                    signal: t
                } = e;
                return em(u, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != f && await (0, eB.a)(u, f, t), !0))
            }, c[3] = u, c[4] = f, c[5] = n) : n = c[5], c[6] !== t || c[7] !== n ? (a = {
                queryKey: t,
                enabled: !1,
                staleTime: 0,
                retry: !1,
                refetchOnWindowFocus: !1,
                queryFn: n
            }, c[6] = t, c[7] = n, c[8] = a) : a = c[8];
            let {
                refetch: x
            } = (0, s.a)(a);
            c[9] !== g || c[10] !== d || c[11] !== h || c[12] !== v || c[13] !== x || c[14] !== u || c[15] !== f ? (o = (e, t) => {
                if (ep(u, e), e.defaultPrevented || null == f || 0 === v || u.get(eG.c, f)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (m.current?.signal === t) return void ez.set(e, m.current.preparation);
                let n = x({
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
                    m.current?.signal === t && (m.current = null)
                });
                m.current = {
                    signal: t,
                    preparation: n
                }, ez.set(e, n)
            }, c[9] = g, c[10] = d, c[11] = h, c[12] = v, c[13] = x, c[14] = u, c[15] = f, c[16] = o) : o = c[16];
            let C = (0, y.useEffectEvent)(o);
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

        function e$(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var eX = n("MrzV"),
            eZ = n("ygO2"),
            eJ = n("gbRX");

        function e0(e) {
            let t, n, o = (0, r.c)(4),
                {
                    isFetching: s,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, p.z)(!i && eJ.a) || s;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(C.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again",
                description: "Retry loading a ChatGPT conversation after its history could not be loaded"
            }), o[0] = t) : t = o[0], o[1] !== l || o[2] !== c ? (n = (0, a.jsx)(eZ.a, {
                color: "ghost",
                disabled: c,
                onClick: l,
                children: t
            }), o[1] = l, o[2] = c, o[3] = n) : n = o[3], n
        }

        function e1(e) {
            let t, n, o, s = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(C.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation",
                description: "Error state when a ChatGPT conversation fetch fails"
            }), s[0] = t) : t = s[0], s[1] !== i || s[2] !== l || s[3] !== c ? (n = null != c ? (0, a.jsx)(e0, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, s[1] = i, s[2] = l, s[3] = c, s[4] = n) : n = s[4], s[5] !== n ? (o = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), s[5] = n, s[6] = o) : o = s[6], o
        }
        var e2 = n("FfNP"),
            e3 = n("Bbed"),
            e4 = n("WVag");
        let e5 = (0, e3.a)(e2.loadEpicChartIndicator);

        function e6(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: o
                } = e,
                s = (0, p.x)(e4.a, o),
                [i, l] = (0, y.useState)(!1);
            return i || null == s || l(!0), n[0] !== o || n[1] !== i ? (t = i ? (0, a.jsx)(e5, {
                conversationId: o
            }) : null, n[0] = o, n[1] = i, n[2] = t) : t = n[2], t
        }
        var e8 = n("YTsa"),
            e7 = n("AoaR"),
            e9 = n("Ow2S"),
            te = n("fDfx"),
            tt = n("u4MG"),
            tn = n("Xslx"),
            ta = n("EEop"),
            tr = n("bxvp"),
            to = n("VBQS"),
            ts = n("hsIu");
        let ti = (0, p.d)(es.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(tr.c) || null == n(N.f) || null == n(N.k)) return null;
            let {
                data: a,
                isError: r
            } = n(ts.b);
            if (r || a?.project_id !== e) return null;
            let {
                data: o,
                isError: s
            } = n(ta.k, (0, to.a)());
            return s ? null : (0, to.b)(o)
        });
        var tl = n("DWXw"),
            tc = n("FmJi"),
            td = n("TSib"),
            tu = n("sIex"),
            th = n("jEN2"),
            tp = n("kphc"),
            tm = n("YWcr"),
            tg = n("RGWz"),
            tf = n("QxH2"),
            tv = n("mwa5"),
            ty = n("UuVq"),
            tx = n("TwSq"),
            tb = n("l0fK"),
            tC = n("hkBU"),
            tw = n("cP1f"),
            t_ = n("UxN3"),
            tI = n("GKsW"),
            tj = n("yWTM"),
            tS = n("Z2JT"),
            tT = n("SkIz"),
            tE = n("aNqv"),
            tP = n("ibLK"),
            tA = n("T1PX"),
            tk = n("Fjd0"),
            tM = n("VPBa"),
            tR = n("PWXi"),
            tO = n("zOE4"),
            tN = n("Xc94"),
            tB = n("Sgih"),
            tG = n("HwRo"),
            tF = n("qwxA"),
            tz = n("gOnr"),
            tL = n("KXCj"),
            tD = n("e1xH"),
            tH = n("pAFY");
        n("kErH");
        var tW = n("dJBt"),
            tq = n("FR8U"),
            tU = n("xqnZ"),
            tK = n("UMxD"),
            tV = n("VV6Z"),
            tQ = n("JhDO"),
            tY = n("Mbqw"),
            t$ = n("kl6F"),
            tX = n("kfGJ"),
            tZ = n("khOd"),
            tJ = n("RZBv"),
            t0 = n("yzQ9"),
            t1 = n("OMIV"),
            t2 = n("JCJj"),
            t3 = n("KkZX"),
            t4 = n("uYx2"),
            t5 = n("Gjet"),
            t6 = n("SBcL"),
            t8 = n("ftSl"),
            t7 = n("BdYu"),
            t9 = n("Nyub"),
            ne = n("jZDY"),
            nt = n("HgLj"),
            nn = n("Bc5r"),
            na = n("bIvi"),
            nr = n("Elta"),
            no = n("eW0T"),
            ns = n("hOYb"),
            ni = n("eShZ"),
            nl = n("qqut"),
            nc = n("CsbC"),
            nd = n("tCyZ"),
            nu = n("S0ko"),
            nh = n("GgLN"),
            np = n("KdfG"),
            nm = n("AOHi"),
            ng = n("iRMi"),
            nf = n("U2UX"),
            nv = n("gbrq"),
            ny = n("K33Q"),
            nx = n("mv4d"),
            nb = n("w7Qu"),
            nC = n("dt5v"),
            nw = n("bWX0"),
            n_ = n("smHt"),
            nI = n("aoTb"),
            nj = n("pqpL"),
            nS = n("uqg3"),
            nT = n("XcRr"),
            nE = n("dk3M"),
            nP = n("WFY2"),
            nA = n("vldH"),
            nk = n("ISgP"),
            nM = n("t2JB"),
            nR = n("DIH2"),
            nO = n("aFoA"),
            nN = n("H8lk"),
            nB = n("f2PP"),
            nG = n("S95W");
        let nF = (0, p.v)(es.a, e => null);
        var nz = n("DM5G"),
            nL = n("gJe8"),
            nD = n("d2rV"),
            nH = n("yPci"),
            nW = n("aLqR"),
            nq = n("VlIB"),
            nU = n("ASxG"),
            nK = n("wD9O"),
            nV = n("lsfk"),
            nQ = n("IObw"),
            nY = n("BOYb"),
            n$ = n("kQNh"),
            nX = n.n(n$),
            nZ = n("NkEl"),
            nJ = n("FW69"),
            n0 = "highlight-x7OnzP",
            n1 = "safari-wcvuzB",
            n2 = "block-t7sxyD";
        let n3 = "chatgpt-search-result",
            n4 = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* n5(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(n4) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let o = RegExp(t.split(/\n+/u).map(nX()).join("\\n*"), "g");
            for (let n = o.exec(r); null != n && n.index < r.length; n = o.exec(r)) {
                let r = n.index;
                o.lastIndex = r + 1;
                let s = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < s);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, s - l.start), n6(c) && ((0, nJ.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function n6(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let n8 = nU.object({
            chatGptSearchNavigation: nU.object({
                key: nU.string(),
                messageId: nU.string()
            })
        });

        function n7(e) {
            let t, n, a, o, s, i, l, c, d, u, h, m, g = (0, r.c)(48),
                {
                    conversationId: f,
                    entries: v,
                    isConversationFetching: x,
                    turnListApi: b
                } = e,
                C = (0, p.y)(es.a),
                _ = (0, p.x)(z.r, f),
                I = (0, nV.b)(),
                j = (0, nK.c)();
            g[0] !== I || g[1] !== j ? (t = e => {
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
                            left: (0, nK.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                        h = (0, nK.b)(s.height, n),
                        p = (0, nK.b)(s.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, I, j)
            }, g[0] = I, g[1] = j, g[2] = t) : t = g[2];
            let S = (0, y.useEffectEvent)(t),
                T = (0, w.X)(),
                E = (0, w.Z)(),
                P = new URLSearchParams(T.search),
                A = P.get("messageId") ?? P.get("message"),
                k = n8.safeParse(T.state).data?.chatGptSearchNavigation,
                M = A ?? k?.messageId,
                R = P.get("selectedTextQuery") ?? "",
                O = (0, p.x)(z.L, f),
                N = !R || null != M && null != O && (O[M]?.message != null || Object.values(O).some(e => e.message?.id === M)),
                B = R || P.get("historySearchQuery") || "",
                G = JSON.stringify([f, null != A ? T.key : k?.key ?? T.key, M]);
            g[3] !== G ? (n = {
                key: G,
                handled: !1,
                positioned: !1
            }, g[3] = G, g[4] = n) : n = g[4];
            let F = (0, y.useRef)(n),
                L = (0, y.useEffectEvent)(e => {
                    F.current.positioned = !0;
                    let t = B.trim().length > 0 ? function(e, t, n) {
                        let a, r, o, s, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            p = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === p.length) return () => {};
                        let m = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(nX()).join("|") : nX()(c), null == c ? "giu" : "gu"),
                            g = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            x = new Set,
                            b = new MutationObserver(w);

                        function C() {
                            for (let t of (g = !0, b.disconnect(), clearTimeout(r), null != o && cancelAnimationFrame(o), null != a && CSS.highlights.get(n3) === a && CSS.highlights.delete(n3), e.classList.remove(n0, n1), x)) t.classList.remove(n0, n2)
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
                            let u = (0, nZ.a)(e);
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
                            let I = [];
                            if (null != c) {
                                let t = e.querySelector('[data-markdown-text-style="assistant-message"]') ?? e,
                                    n = 0;
                                for (let e of n5(t, c))
                                    if (!(n++ < l)) {
                                        I.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(n4) != null || u.some(t => {
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), n6(a) && I.push(a)
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
                            for (let t of (b.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...I), CSS.highlights.set(n3, a)) : I.length > 0 && j.push(e), e.classList.add(n0), (0, nY.e)() && e.classList.add(n1), j)) t.classList.add(n0, n2), x.add(t);
                            r = setTimeout(C, 3600)
                        }
                        return b.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), _(), C
                    }(e, B, S, R ? "phrase" : "terms", Number(P.get("selectedTextOccurrence"))) : void 0;
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
            g[5] !== f || g[6] !== x || g[7] !== M || g[8] !== G || g[9] !== C || g[10] !== N ? (a = () => {
                if (F.current.key !== G && (F.current = {
                        key: G,
                        handled: !1,
                        positioned: !1
                    }), null != M && !x && N) return C.watch(e => {
                    !F.current.handled && (0, z.Ob)(e, f, M) && (F.current.handled = !0)
                })
            }, o = [f, x, M, G, C, N], g[5] = f, g[6] = x, g[7] = M, g[8] = G, g[9] = C, g[10] = N, g[11] = a, g[12] = o) : (a = g[11], o = g[12]), (0, y.useLayoutEffect)(a, o), g[13] !== v || g[14] !== M ? (s = null == M ? void 0 : v.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(M)
            }), g[13] = v, g[14] = M, g[15] = s) : s = g[15];
            let D = s;
            g[16] !== T || g[17] !== E || g[18] !== A || g[19] !== k ? (i = () => {
                null == A && null != k && E(T, {
                    replace: !0,
                    preventScrollReset: !0,
                    state: {
                        ...T.state,
                        chatGptSearchNavigation: void 0
                    }
                })
            }, g[16] = T, g[17] = E, g[18] = A, g[19] = k, g[20] = i) : i = g[20];
            let H = (0, y.useEffectEvent)(i);
            if (g[21] !== H || g[22] !== _ || g[23] !== x || g[24] !== D ? (l = () => {
                    !F.current.positioned || null != D || x || _ || H()
                }, g[21] = H, g[22] = _, g[23] = x, g[24] = D, g[25] = l) : l = g[25], g[26] !== _ || g[27] !== x || g[28] !== D ? (c = [_, x, D], g[26] = _, g[27] = x, g[28] = D, g[29] = c) : c = g[29], (0, y.useLayoutEffect)(l, c), g[30] !== M || g[31] !== D?.id || g[32] !== D?.turn.items || g[33] !== D?.turnKey) {
                let e = D?.turn.items.findIndex(e => "messageId" in e && e.messageId === M || "assistant-message" === e.type && null != M && e.sourceMessageIds?.includes(M)) ?? -1,
                    t = D?.turn.items[e],
                    n = D?.id;
                u = D?.turnKey, d = null == t || null == n ? void 0 : (0, nQ.b)(t, e, n), g[30] = M, g[31] = D?.id, g[32] = D?.turn.items, g[33] = D?.turnKey, g[34] = d, g[35] = u
            } else d = g[34], u = g[35];
            let W = d;
            return g[36] !== L || g[37] !== M || g[38] !== u || g[39] !== b || g[40] !== W ? (h = () => {
                let e;
                if (null == u || null == b) return;
                let t = new AbortController,
                    n = null;
                return b.scrollToKey(u, e => n = (null == M ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(M)}"]`)) ?? (null == W ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(W)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = L(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, g[36] = L, g[37] = M, g[38] = u, g[39] = b, g[40] = W, g[41] = h) : h = g[41], g[42] !== M || g[43] !== G || g[44] !== u || g[45] !== b || g[46] !== W ? (m = [G, M, u, b, W], g[42] = M, g[43] = G, g[44] = u, g[45] = b, g[46] = W, g[47] = m) : m = g[47], (0, y.useLayoutEffect)(h, m), null
        }
        var n9 = n("Nayr"),
            ae = n("SZi8"),
            at = n("lBzi"),
            an = n("Ga6O"),
            aa = n("ESlL"),
            ar = n("vknh"),
            ao = n("Ppno"),
            as = n("lA5q"),
            ai = n("wDWo"),
            al = n("IgxH"),
            ac = n("iaTG"),
            ad = n("c3f5"),
            au = n("XpUB"),
            ah = n("xAIC"),
            ap = n("slpy"),
            am = n("bf6R"),
            ag = n("O666"),
            af = n("OtLV"),
            av = n("tNq4"),
            ay = n("Skaw"),
            ax = n("PYCG");

        function ab(e) {
            let t, n, o, s, i, l, c, d, u, h, m, g = (0, r.c)(50),
                {
                    conversationId: f,
                    projectId: v,
                    sharedProjectConversation: y,
                    isReady: x,
                    isRestricted: w,
                    isStreaming: _
                } = e,
                I = void 0 === v ? null : v,
                j = (0, p.y)(es.a),
                S = (0, b.a)(),
                T = (0, p.z)(N.e),
                E = (0, p.z)(null == I ? null : ay.a),
                P = (0, p.x)(z.j, f),
                {
                    data: A
                } = (0, p.x)(at.chatGptConversationQueryById$, null == I ? null : P),
                k = (0, p.x)(nO.a, null == I ? null : P),
                M = (0, p.x)(z.A, k);
            g[0] !== k || g[1] !== A || g[2] !== M || g[3] !== I || g[4] !== P ? (t = null == A && null != k && null != P ? {
                id: P,
                gizmo_id: I,
                is_temporary_chat: M
            } : void 0, g[0] = k, g[1] = A, g[2] = M, g[3] = I, g[4] = P, g[5] = t) : t = g[5];
            let R = t,
                {
                    data: O
                } = (0, p.x)(eQ.b, I),
                B = null == I ? null : (0, ay.b)(E ?? null, y ?? A ?? R, O),
                G = (0, p.x)(av.b, f);
            g[6] !== S ? (n = S.formatMessage(af.a.headerShare), g[6] = S, g[7] = n) : n = g[7];
            let F = n,
                L = (0, p.x)(null == y ? av.a : null, f),
                D = null != y || null != L,
                H = null;
            if (w || B?.type === "unavailable") {
                let e;
                g[8] !== S ? (e = S.formatMessage(af.a.shareDisabledRestricted), g[8] = S, g[9] = e) : e = g[9], H = e
            } else if (_ && !D) {
                let e;
                g[10] !== S ? (e = S.formatMessage(af.a.shareDisabledStreaming), g[10] = S, g[11] = e) : e = g[11], H = e
            } else if (!x || !D) {
                let e;
                g[12] !== S ? (e = S.formatMessage(af.a.shareDisabledNotReady), g[12] = S, g[13] = e) : e = g[13], H = e
            }
            let W = null != H || G;
            g[14] !== W ? (o = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: W
            }, g[14] = W, g[15] = o) : o = g[15];
            let q = (0, p.x)(ag.b, o),
                U = "loaded" === T.status && "personal" === T.structure && (null == B || "snapshot" === B.type),
                K = null != H || G;
            g[16] !== K ? (s = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: K
            }, g[16] = K, g[17] = s) : s = g[17];
            let V = (0, p.x)(U ? ag.b : null, s);
            g[18] !== f || g[19] !== R || g[20] !== I || g[21] !== j || g[22] !== y ? (i = () => {
                let e = null == y ? j.get(av.c, f) : {
                    serverConversationId: y.conversation_id,
                    title: y.title,
                    currentNodeId: y.current_node ?? void 0
                };
                null != e && (0, ax.shareChatGptProjectConversation)(j, e.serverConversationId, e.title ?? "", I, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", y ?? R)
            }, g[18] = f, g[19] = R, g[20] = I, g[21] = j, g[22] = y, g[23] = i) : i = g[23];
            let Q = i,
                Y = F;
            if ("loaded" === T.status && (null == B || "snapshot" === B.type)) {
                let e;
                g[24] !== T.structure || g[25] !== S ? (e = S.formatMessage("workspace" === T.structure ? af.a.shareWorkspaceTooltip : af.a.sharePublicTooltip), g[24] = T.structure, g[25] = S, g[26] = e) : e = g[26], Y = e
            }
            let $ = null == H && !G && !0 === V,
                X = H ?? Y,
                Z = null != H || G;
            return g[27] !== G || g[28] !== q ? (l = !G && (q ? (0, a.jsx)(am.M, {}) : (0, a.jsx)(am.L, {})), g[27] = G, g[28] = q, g[29] = l) : l = g[29], g[30] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(C.a, {
                ...af.a.headerShare
            }), g[30] = c) : c = g[30], g[31] !== Q || g[32] !== G || g[33] !== F || g[34] !== Z || g[35] !== l ? (d = (0, a.jsxs)(eZ.a, {
                "aria-label": F,
                color: "toolbar",
                disabled: Z,
                loading: G,
                radius: "large",
                size: "toolbar",
                onClick: Q,
                children: [l, c]
            }), g[31] = Q, g[32] = G, g[33] = F, g[34] = Z, g[35] = l, g[36] = d) : d = g[36], g[37] !== X || g[38] !== d || g[39] !== $ ? (u = (0, a.jsx)(ap.a, {
                disabled: $,
                content: X,
                children: d
            }), g[37] = X, g[38] = d, g[39] = $, g[40] = u) : u = g[40], g[41] !== f || g[42] !== G || g[43] !== I || g[44] !== H || g[45] !== y ? (h = !1, g[41] = f, g[42] = G, g[43] = I, g[44] = H, g[45] = y, g[46] = h) : h = g[46], g[47] !== u || g[48] !== h ? (m = (0, a.jsxs)(a.Fragment, {
                children: [u, h]
            }), g[47] = u, g[48] = h, g[49] = m) : m = g[49], m
        }(0, e3.a)(async () => () => null);
        var aC = n("B0Wx"),
            aw = n("if6d"),
            a_ = n("Sd8U");
        let aI = (0, p.t)("ChatGptTranscriptScope", {
            parent: a_.a,
            key: e => e.presentation
        });
        var aj = n("r2mP"),
            aS = n("ag0v"),
            aT = n("CMzj"),
            aE = n("ZhoB"),
            aP = n("RADZ"),
            aA = n("rZzh"),
            ak = n("hZRx");

        function aM(e) {
            let t, n, o, s, i, l, c, d, u = (0, r.c)(51),
                {
                    entry: h,
                    renderMcpApps: m,
                    trackShownImpressions: g
                } = e,
                f = void 0 === m || m,
                v = void 0 === g || g,
                y = (0, p.y)(es.a);
            u[0] !== h.conversationId ? (t = (0, t$.o)({
                routeKind: "chatgpt-thread",
                conversationId: h.conversationId
            }), u[0] = h.conversationId, u[1] = t) : t = u[1];
            let x = (0, p.x)(v ? tB.c : null, t),
                b = v && null == x,
                w = (0, p.x)(h.isMostRecentTurn ? aA.d : null, h.conversationId);
            u[2] !== h.timestampSeparatorAtMs ? (n = null == h.timestampSeparatorAtMs ? null : (0, a.jsx)(aj.b, {
                sentAtMs: h.timestampSeparatorAtMs
            }), u[2] = h.timestampSeparatorAtMs, u[3] = n) : n = u[3];
            let _ = null != h.paragen;
            return u[4] !== h.branchingMessageId || u[5] !== h.browserConversationId || u[6] !== h.conversationId || u[7] !== h.enableCloudBrowserActivity || u[8] !== h.feedbackEnabled || u[9] !== h.hasLaterSitesPreview || u[10] !== h.id || u[11] !== h.isMostRecentTurn || u[12] !== h.isReadOnly || u[13] !== h.isTemporaryChat || u[14] !== h.isWorkConversation || u[15] !== h.onEditUserMessage || u[16] !== h.onFork || u[17] !== h.onRegenerateResponse || u[18] !== h.pendingSubmissionAttachments || u[19] !== h.readAloudEnabled || u[20] !== h.referenceImageSuggestionActionInput || u[21] !== h.safetyReview || u[22] !== h.shareEnabled || u[23] !== h.turn || u[24] !== f || u[25] !== b || u[26] !== _ ? (o = (0, a.jsx)(aT.a, {
                browserConversationId: h.browserConversationId,
                conversationId: h.conversationId,
                enableCloudBrowserActivity: h.enableCloudBrowserActivity,
                branchingMessageId: h.branchingMessageId,
                hasLaterSitesPreview: h.hasLaterSitesPreview,
                hostId: tX.a,
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
                trackShownImpressions: b,
                turn: h.turn,
                turnId: h.id
            }), u[4] = h.branchingMessageId, u[5] = h.browserConversationId, u[6] = h.conversationId, u[7] = h.enableCloudBrowserActivity, u[8] = h.feedbackEnabled, u[9] = h.hasLaterSitesPreview, u[10] = h.id, u[11] = h.isMostRecentTurn, u[12] = h.isReadOnly, u[13] = h.isTemporaryChat, u[14] = h.isWorkConversation, u[15] = h.onEditUserMessage, u[16] = h.onFork, u[17] = h.onRegenerateResponse, u[18] = h.pendingSubmissionAttachments, u[19] = h.readAloudEnabled, u[20] = h.referenceImageSuggestionActionInput, u[21] = h.safetyReview, u[22] = h.shareEnabled, u[23] = h.turn, u[24] = f, u[25] = b, u[26] = _, u[27] = o) : o = u[27], u[28] !== h.conversationId || u[29] !== h.isTemporaryChat || u[30] !== h.isWorkConversation || u[31] !== h.paragen || u[32] !== f || u[33] !== b ? (s = null == h.paragen ? null : (0, a.jsx)(aP.a, {
                renderMcpApps: f,
                comparison: h.paragen,
                conversationId: h.conversationId,
                hostId: tX.a,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                trackTaskViews: b
            }, h.paragen.promptMessageId), u[28] = h.conversationId, u[29] = h.isTemporaryChat, u[30] = h.isWorkConversation, u[31] = h.paragen, u[32] = f, u[33] = b, u[34] = s) : s = u[34], u[35] !== h.showSharedConversationPrivateDisclaimer ? (i = h.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(t_.a, {
                    className: "shrink-0",
                    legacyIcon: aS.a,
                    asset16: ak.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(C.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you",
                    description: "Privacy disclaimer shown between the original shared ChatGPT conversation and the reader's new private messages after they continue the shared conversation in Codex Desktop"
                })]
            }) : null, u[35] = h.showSharedConversationPrivateDisclaimer, u[36] = i) : i = u[36], u[37] !== h || u[38] !== w || u[39] !== y || u[40] !== b ? (l = h.isMostRecentTurn ? (0, a.jsx)(aa.a, {
                conversationId: h.conversationId,
                errorMessage: h.errorMessage,
                isWorkConversation: h.isWorkConversation,
                onRetry: null == h.onRegenerateResponse || null == w ? void 0 : async e => {
                    let t = y.get(aA.d, h.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = y.get(z.T, h.conversationId)?.metadata?.errorCode;
                    (0, aE.d)(y.get(eu.c).logProductEvent, {
                        conversationId: y.get(z.j, h.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await h.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, aA.e)(t.message, y.get(e9.t, h.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                showPendingLoadingMessage: h.showPendingLoadingMessage,
                showRequestUserInputStatus: h.showRequestUserInputStatus,
                trackShownImpressions: b,
                useDefaultModel: w?.useDefaultModel,
                isRetryDisabled: w?.isRetryDisabled
            }) : null, u[37] = h, u[38] = w, u[39] = y, u[40] = b, u[41] = l) : l = u[41], u[42] !== o || u[43] !== s || u[44] !== i || u[45] !== l ? (c = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [o, s, i, l]
            }), u[42] = o, u[43] = s, u[44] = i, u[45] = l, u[46] = c) : c = u[46], u[47] !== h.id || u[48] !== c || u[49] !== n ? (d = (0, a.jsxs)("div", {
                "data-content-search-turn-key": h.id,
                children: [n, c]
            }), u[47] = h.id, u[48] = c, u[49] = n, u[50] = d) : d = u[50], d
        }

        function aR(e) {
            let t, n, o, s = (0, r.c)(6);
            s[0] !== e ? ({
                renderMcpApps: n,
                ...t
            } = e, s[0] = e, s[1] = t, s[2] = n) : (t = s[1], n = s[2]);
            let i = void 0 === n || n,
                l = (0, p.y)(aI),
                c = i && l.value.rendersWidgets;
            return s[3] !== t || s[4] !== c ? (o = (0, a.jsx)(aM, {
                ...t,
                renderMcpApps: c
            }), s[3] = t, s[4] = c, s[5] = o) : o = s[5], o
        }

        function aO(e) {
            let t, n, o, s, i, l, c, d = (0, r.c)(17),
                {
                    entries: u,
                    historyLoader: h,
                    isVisible: m,
                    rendersWidgets: g,
                    onVisibilityChange: f
                } = e;
            d[0] !== m || d[1] !== f ? (t = () => (f(m), () => f(!1)), n = [m, f], d[0] = m, d[1] = f, d[2] = t, d[3] = n) : (t = d[2], n = d[3]), (0, y.useLayoutEffect)(t, n), d[4] !== g ? (o = {
                presentation: "floating",
                rendersWidgets: g
            }, d[4] = g, d[5] = o) : o = d[5];
            let v = m ? h : null;
            return d[6] !== u ? (s = (0, a.jsx)(aw.a, {
                entries: u,
                preserveMeasuredTurnViewport: !0,
                RowComponent: aN
            }), d[6] = u, d[7] = s) : s = d[7], d[8] !== v || d[9] !== s ? (i = (0, a.jsx)(el.a, {
                value: null,
                children: (0, a.jsxs)(eF.a, {
                    value: null,
                    children: [v, s]
                })
            }), d[8] = v, d[9] = s, d[10] = i) : i = d[10], d[11] !== m || d[12] !== i ? (l = (0, a.jsx)(t5.a, {
                active: m,
                presentation: "panel",
                children: i
            }), d[11] = m, d[12] = i, d[13] = l) : l = d[13], d[14] !== o || d[15] !== l ? (c = (0, a.jsx)(p.b, {
                scope: aI,
                value: o,
                children: l
            }), d[14] = o, d[15] = l, d[16] = c) : c = d[16], c
        }

        function aN(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsx)(aR, {
                entry: {
                    ...o,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    readAloudEnabled: !1
                },
                trackShownImpressions: !1
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var aB = n("TRQ3"),
            aG = n("SZCv"),
            aF = n.n(aG),
            az = n("qZWE"),
            aL = n("PC5z"),
            aD = n("lZ4W"),
            aH = n("ihvi"),
            aW = n("aRto"),
            aq = n("WWSI"),
            aU = n("U3Gy"),
            aK = n("mKTJ");
        let aV = (0, p.c)(t$.a, e => {
                let {
                    get: t
                } = e;
                return t(az.l)
            }, {
                isEqual: aF()
            }),
            aQ = (0, p.c)(t$.a, e => {
                let {
                    get: t
                } = e;
                return t(aL.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function aY(e) {
            let t, n, o, s, i = (0, r.c)(17),
                {
                    conversationId: l,
                    entries: c,
                    onApiChange: d,
                    onVisibleContentReady: u,
                    responseSpacerState: h
                } = e,
                {
                    sharedConversationId: m
                } = (0, w.bb)(),
                g = (0, p.z)(null != m && "u" > typeof Element && "function" != typeof Element.prototype.moveBefore ? aV : null),
                f = (0, p.z)(aQ);
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
                x = (0, y.useContext)(aW.a),
                b = c.at(-1);
            if (x?.aboveComposer != null && null != b && v.push(b.turnKey), null != m && g?.size)
                for (let e of c) e.turn.items.flatMap(aZ).some(e => "chatgpt-hosted-widget" === e.type && (0, aK.h)(e) && g.has((0, aK.e)(m, e.messageId))) && v.push(e.turnKey);
            let C = c.findLast(a$);
            h?.voiceAutoScrollEnabled && null != C && v.push(C.turnKey);
            let _ = (0, p.x)(aH.b, l),
                I = null == _ ? void 0 : c.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes(_)
                }),
                j = null == I ? void 0 : (0, aH.a)(I.turn.items);
            (0, p.x)(aD.a, null == j ? null : {
                conversationId: l,
                userMessageId: j,
                steeredPromptId: I === b ? _ : void 0
            }) && null != I && v.push(I.turnKey);
            let S = (0, p.x)(aU.b, l);
            i[2] !== l || i[3] !== c || i[4] !== S ? (n = (0, aq.a)(c, S, l), i[2] = l, i[3] = c, i[4] = S, i[5] = n) : n = i[5];
            let T = h?.getHeightPx,
                E = h?.voiceAutoScrollEnabled ? C?.turnKey : void 0,
                P = h?.onTurnLayoutReady;
            return i[6] !== h ? (o = e => {
                let {
                    heightDeltaPx: t
                } = e;
                h?.consumeGrowth(t ?? 0)
            }, i[6] = h, i[7] = o) : o = i[7], i[8] !== d || i[9] !== u || i[10] !== v || i[11] !== n || i[12] !== T || i[13] !== E || i[14] !== P || i[15] !== o ? (s = (0, a.jsx)(aw.a, {
                entries: n,
                getBottomScrollPaddingPx: T,
                layoutReadyTurnKey: E,
                onTurnLayoutReady: P,
                onLatestTurnHeightChange: o,
                onApiChange: d,
                onVisibleContentReady: u,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: v,
                RowComponent: aR
            }), i[8] = d, i[9] = u, i[10] = v, i[11] = n, i[12] = T, i[13] = E, i[14] = P, i[15] = o, i[16] = s) : s = i[16], s
        }

        function a$(e) {
            let {
                turn: t
            } = e;
            return t.items.some(aX)
        }

        function aX(e) {
            return "user-message" === e.type
        }

        function aZ(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var aJ = n("XAP6"),
            a0 = n("bzoy"),
            a1 = n("LYS1"),
            a2 = n("aZoZ"),
            a3 = n("Gv8v"),
            a4 = n("EGpF"),
            a5 = n("mTPq"),
            a6 = n("Vcrm"),
            a8 = n("t0mU");
        let a7 = (0, p.d)(es.a, (e, t) => {
            let {
                get: n
            } = t, a = n(z._, e);
            if (!(0, z.zb)(a)) return !0;
            let r = n(z.L, e),
                o = n(z.B, e);
            if (null == r || null == o) return !1;
            let s = r[o]?.message;
            if (null == s || a1.a.has(s.author.role)) return !1;
            let i = n(z.x, e),
                l = (0, a5.c)({
                    mapping: r,
                    current_node: o
                }, n(z.Q, e)),
                c = n(z.bb, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(z.j, e) && !(0, a0.e)(n(z.o, e)) && null != c && !n(aJ.e).has(c) && null != a9(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function a9(e, t) {
            let n = e(a4.a, t),
                a = e(z.j, t);
            return null == n.request.current && null != a ? e(a4.a, a) : n
        }
        var re = n("xtkq"),
            rt = n("PG5R"),
            rn = n("zrki"),
            ra = n("iLYI"),
            rr = n("Ipgw"),
            ro = n("wVX4");

        function rs(e) {
            let t, n, o, s, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, p.y)(es.a),
                d = (0, b.a)(),
                u = (0, ne.a)(),
                h = (0, p.x)(z._, l),
                m = (0, p.x)(z.bb, l),
                g = (0, p.x)(z.v, l),
                f = (0, p.x)(z.ab, l),
                v = (0, y.useRef)(null),
                C = (0, y.useRef)(null);
            i[0] !== g || i[1] !== l || i[2] !== d || i[3] !== m || i[4] !== c || i[5] !== h || i[6] !== f ? (t = () => {
                let e = v.current;
                if (null == e) return;
                let t = C.current;
                if ((0, z.zb)(h)) {
                    e.textContent = "", C.current = {
                        conversationId: l,
                        requestId: m ?? ("active-async-turn" === h || "active-tpp-turn" === h ? g?.requestId : null) ?? (t?.conversationId === l ? t.requestId : null)
                    };
                    return
                }
                f || (C.current = null, t?.conversationId === l && "idle" === h && g?.result === "completed" && g.requestId === t.requestId && null == c.get(z.C, l) && (e.textContent = d.formatMessage({
                    id: "chatgptConversations.responseComplete",
                    defaultMessage: "Response complete",
                    description: "Polite screen-reader announcement after the ChatGPT response the user was waiting for finishes successfully"
                })))
            }, i[0] = g, i[1] = l, i[2] = d, i[3] = m, i[4] = c, i[5] = h, i[6] = f, i[7] = t) : t = i[7];
            let w = (0, y.useEffectEvent)(t);
            return (i[8] !== w ? (n = () => {
                w()
            }, i[8] = w, i[9] = n) : n = i[9], i[10] !== g || i[11] !== l || i[12] !== u || i[13] !== m || i[14] !== h || i[15] !== f ? (o = [l, h, m, g, f, u], i[10] = g, i[11] = l, i[12] = u, i[13] = m, i[14] = h, i[15] = f, i[16] = o) : o = i[16], (0, y.useEffect)(n, o), u) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, x.createPortal)((0, a.jsx)("span", {
                ref: v,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = s) : s = i[17], s) : null
        }
        var ri = n("n5iL"),
            rl = n("EFj1"),
            rc = n("iS3k"),
            rd = n("pDUk"),
            ru = n("GaCK"),
            rh = n("Dofq");
        let rp = (0, e3.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(954111)]).then(n.bind(n, "YhBP"))).ChatGptThreadSummaryPanelBody, {
            fallback: (0, a.jsx)(rc.a.Content, {
                children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-0.5 px-5",
                    children: (0, a.jsx)("span", {
                        className: "select-none",
                        role: "status",
                        children: (0, a.jsx)(C.a, {
                            id: "chatgptConversations.summaryPanel.loading",
                            defaultMessage: "Loading summary…",
                            description: "Status shown in the Work task summary panel while its interface downloads"
                        })
                    })
                })
            }),
            errorFallback: (0, a.jsx)(rc.a.Content, {
                children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-0.5 px-5",
                    children: (0, a.jsx)("span", {
                        className: "select-none",
                        role: "status",
                        children: (0, a.jsx)(C.a, {
                            id: "chatgptConversations.summaryPanel.loadError",
                            defaultMessage: "Summary could not load. Reload the app to try again",
                            description: "Recovery instructions in the Work task summary panel after its interface fails to download; closing the panel does not retry"
                        })
                    })
                })
            })
        });

        function rm(e) {
            let t, n, o, s = (0, r.c)(6);
            s[0] !== e ? ({
                readData: n,
                ...t
            } = e, s[0] = e, s[1] = t, s[2] = n) : (t = s[1], n = s[2]);
            let i = (0, rc.b)(),
                [l, c] = (0, y.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), s[3] !== l || s[4] !== t ? (o = null == l ? null : (0, a.jsx)(rp, {
                ...t,
                data: l.data
            }), s[3] = l, s[4] = t, s[5] = o) : o = s[5], o
        }

        function rg(e) {
            let t, n, o, s = (0, r.c)(15),
                {
                    conversationId: i,
                    composerActions: l,
                    readData: c,
                    display: d,
                    shouldBlockExternalEgress: u,
                    showSources: h
                } = e,
                m = void 0 === h || h,
                g = (0, p.y)(L.a),
                f = (0, ei.h)("2903661647"),
                v = f ? "dynamic-isle" : "summary";
            return s[0] !== g || s[1] !== v ? (t = {
                scope: g,
                layout: v
            }, s[0] = g, s[1] = v, s[2] = t) : t = s[2], s[3] !== l || s[4] !== i || s[5] !== f || s[6] !== c || s[7] !== u || s[8] !== m ? (n = (0, a.jsx)(rm, {
                conversationId: i,
                composerActions: l,
                readData: c,
                isUnifiedDynamicIsleEnabled: f,
                showSources: m,
                shouldBlockExternalEgress: u
            }, i), s[3] = l, s[4] = i, s[5] = f, s[6] = c, s[7] = u, s[8] = m, s[9] = n) : n = s[9], s[10] !== d.shouldHideInlineImmediately || s[11] !== d.shouldShow || s[12] !== t || s[13] !== n ? (o = (0, a.jsx)(rc.a.Root, {
                analytics: t,
                shouldHideInlineImmediately: d.shouldHideInlineImmediately,
                shouldShow: d.shouldShow,
                children: n
            }), s[10] = d.shouldHideInlineImmediately, s[11] = d.shouldShow, s[12] = t, s[13] = n, s[14] = o) : o = s[14], o
        }

        function rf(e) {
            let t, n, o, s, i, l = (0, r.c)(28),
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
                x = (0, p.y)(L.a),
                C = (0, y.useContext)(el.a),
                w = (0, b.a)(),
                _ = (0, ei.h)("2903661647"),
                I = (0, p.z)(null == h ? nv.N : null);
            l[0] !== h?.isOpen || l[1] !== I ? (t = h?.isOpen ?? (0, nv.z)(I, !0), l[0] = h?.isOpen, l[1] = I, l[2] = t) : t = l[2];
            let j = t,
                S = (0, p.z)(ru.b),
                T = h?.isOpen ?? S.isPopoverOpen,
                E = (0, p.x)(ri.f, "togglePinnedSummary");
            (0, t7.b)(x), l[3] !== h || l[4] !== x ? (n = () => {
                null != h ? h.onOpenChange(!h.isOpen) : (0, rh.b)(x)
            }, l[3] = h, l[4] = x, l[5] = n) : n = l[5];
            let A = n;
            (0, rl.a)("togglePinnedSummary", A);
            let k = c ? "browser:rounded-lg browser:bg-surface" : void 0;
            return l[6] !== u || l[7] !== C || l[8] !== h || l[9] !== d || l[10] !== w || l[11] !== j || l[12] !== T || l[13] !== _ || l[14] !== S.displayMode || l[15] !== m || l[16] !== x || l[17] !== E || l[18] !== g || l[19] !== v || l[20] !== A ? (o = "overlay" === S.displayMode ? (0, a.jsx)(rd.a, {
                isOpen: T,
                shouldPreventAutoFocus: h?.shouldPreventAutoFocus,
                onOpenChange: e => {
                    null != h ? h.onOpenChange(e) : x.set(ru.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                        ...t,
                        isPopoverOpen: e
                    })
                },
                trigger: (0, a.jsx)(rc.a.HeaderButton, {
                    analytics: {
                        scope: x
                    },
                    label: w.formatMessage({
                        id: "chatgptConversations.summaryPanel.toggle",
                        defaultMessage: "Toggle summary",
                        description: "Button label for toggling the ChatGPT summary panel"
                    }),
                    pressed: T,
                    shortcut: E
                }),
                children: null != m ? (0, a.jsx)(el.a, {
                    value: C,
                    children: (0, a.jsx)(rc.a.PopoverContent, {
                        analytics: {
                            scope: x,
                            layout: _ ? "dynamic-isle" : "summary"
                        },
                        children: (0, a.jsx)(rm, {
                            conversationId: d,
                            composerActions: u,
                            readData: m,
                            isUnifiedDynamicIsleEnabled: _,
                            showSources: v,
                            shouldBlockExternalEgress: g
                        }, d)
                    })
                }) : null
            }) : (0, a.jsx)(rc.a.HeaderButton, {
                analytics: {
                    scope: x
                },
                label: w.formatMessage({
                    id: "chatgptConversations.summaryPanel.togglePinned",
                    defaultMessage: "Toggle pinned summary",
                    description: "Button label for toggling whether the ChatGPT summary panel reserves layout space"
                }),
                pressed: j,
                shortcut: E,
                onClick: A
            }), l[6] = u, l[7] = C, l[8] = h, l[9] = d, l[10] = w, l[11] = j, l[12] = T, l[13] = _, l[14] = S.displayMode, l[15] = m, l[16] = x, l[17] = E, l[18] = g, l[19] = v, l[20] = A, l[21] = o) : o = l[21], l[22] !== k || l[23] !== o ? (s = (0, a.jsx)("div", {
                className: k,
                children: o
            }), l[22] = k, l[23] = o, l[24] = s) : s = l[24], l[25] !== c || l[26] !== s ? (i = (0, a.jsx)(P.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                allowsThreadContentOverlap: c,
                order: 250,
                children: s
            }), l[25] = c, l[26] = s, l[27] = i) : i = l[27], i
        }
        var rv = n("JjRy"),
            ry = n.n(rv),
            rx = n("G4E3"),
            rb = n("KaH3"),
            rC = n("Yz3b"),
            rw = n("ghNX"),
            r_ = n("KvVi"),
            rI = n("m250"),
            rj = n("Ng4B"),
            rS = n("bTKb"),
            rT = n("dGDB"),
            rE = n("lIsV");

        function rP(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        var rA = n("JlMc"),
            rk = n("TUMj"),
            rM = n("f6KK"),
            rR = n("JPXZ"),
            rO = n("zWHk");

        function rN(e) {
            let t, n, a, o, s, i, l, c = (0, r.c)(34),
                {
                    composerController: d,
                    enabled: u
                } = e,
                h = (0, w.X)(),
                p = (0, w.Z)();
            if (c[0] !== h.search) {
                let e = new URLSearchParams(h.search);
                t = e.get("prompt"), n = e.get("promptSource"), c[0] = h.search, c[1] = t, c[2] = n
            } else t = c[1], n = c[2];
            let m = n,
                g = h.key,
                f = (0, y.useRef)(null);
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
            let v = (0, y.useEffectEvent)(a);
            return c[10] !== v || c[11] !== d || c[12] !== u || c[13] !== g || c[14] !== t ? (o = () => {
                if (!u && t && f.current !== g) return (0, rO.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(g) && v(!1)
                })
            }, c[10] = v, c[11] = d, c[12] = u, c[13] = g, c[14] = t, c[15] = o) : o = c[15], c[16] !== d || c[17] !== u || c[18] !== g || c[19] !== t ? (s = [d, u, g, t], c[16] = d, c[17] = u, c[18] = g, c[19] = t, c[20] = s) : s = c[20], (0, y.useLayoutEffect)(o, s), c[21] !== v || c[22] !== d || c[23] !== u || c[24] !== g || c[25] !== t || c[26] !== m ? (i = () => {
                if (!u || !t || f.current === g) return;
                f.current = g;
                let e = d.consumeLocationPromptPrefill(g);
                if (v(e), !e) return;
                let {
                    view: n
                } = d, a = t.replace(/\r\n/g, "\n"), r = "codex-app" === m ? (0, rR.f)({
                    schema: n.state.schema,
                    text: a,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, rR.e)({
                    schema: n.state.schema,
                    text: a
                }), o = n.state.tr.replaceWith(0, n.state.doc.content.size, r.content);
                o.setSelection(rM.h.atEnd(o.doc)), n.dispatch(o)
            }, c[21] = v, c[22] = d, c[23] = u, c[24] = g, c[25] = t, c[26] = m, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== g || c[31] !== t || c[32] !== m ? (l = [d, u, g, t, m], c[28] = d, c[29] = u, c[30] = g, c[31] = t, c[32] = m, c[33] = l) : l = c[33], (0, y.useLayoutEffect)(i, l), null
        }
        var rB = n("zKCW");

        function rG(e) {
            let t, n, o, s, i, l = (0, r.c)(11),
                {
                    canConvert: c,
                    isChatInstantAvailable: d,
                    isConverting: u,
                    onConvert: h
                } = e;
            l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(C.a, {
                id: "chatgptConversations.workOnlyConversion.title",
                defaultMessage: "Continue in Work",
                description: "Banner title shown in a disabled historical Chat conversation for a Work-only member in Codex Desktop"
            }), l[0] = t) : t = l[0], l[1] !== d ? (n = d ? (0, a.jsx)(C.a, {
                id: "chatgptConversations.workOnlyConversion.instantDescription",
                defaultMessage: "Move this chat to Work to use agentic tools and take on more complex tasks. You can still use chat instant for quick questions",
                description: "Banner description shown for a Chat Instant conversation when a Work-only member can continue using Chat Instant in Codex Desktop"
            }) : (0, a.jsx)(C.a, {
                id: "chatgptConversations.workOnlyConversion.description",
                defaultMessage: "Move this chat to Work to use agentic tools and take on more complex tasks",
                description: "Banner description shown when a Work-only member cannot continue a historical Chat conversation in Codex Desktop"
            }), l[1] = d, l[2] = n) : n = l[2];
            let p = !c;
            return l[3] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(C.a, {
                id: "chatgptConversations.workOnlyConversion.action",
                defaultMessage: "Convert to Work",
                description: "Button that converts a disabled historical Chat conversation to Work in Codex Desktop"
            }), l[3] = o) : o = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (s = (0, a.jsx)(eZ.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: o
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = s) : s = l[7], l[8] !== n || l[9] !== s ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(rB.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: s
                })
            }), l[8] = n, l[9] = s, l[10] = i) : i = l[10], i
        }
        var rF = n("pgeU");
        let rz = (0, e3.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function rL(e) {
            let t, n, o, s = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, p.y)(es.a),
                c = (0, p.x)(rF.a, i);
            return s[0] !== i || s[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(rF.a, i);
                        null != e && (0, rF.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], s[0] = i, s[1] = l, s[2] = t, s[3] = n) : (t = s[2], n = s[3]), (0, y.useEffect)(t, n), s[4] !== i || s[5] !== c ? (o = null == c ? null : (0, a.jsx)(rz, {
                conversationId: i,
                effect: c
            }, c.id), s[4] = i, s[5] = c, s[6] = o) : o = s[6], o
        }
        var rD = n("fr5e"),
            rH = n("LEgg");
        let rW = (0, e3.a)(async () => (await n.e(432800).then(n.bind(n, "T7hR"))).AutomationPlanHeaderShortcut);

        function rq(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: o
                } = e,
                s = (0, ei.h)("2840857813");
            return n[0] !== o || n[1] !== s ? (t = s ? (0, a.jsx)(rW, {
                conversationId: o
            }) : null, n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }
        var rU = n("T33u");
        let rK = (0, e3.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function rV(e) {
            let t, n, o, s = (0, r.c)(10),
                {
                    conversationId: i,
                    scheduledAutomationId: l
                } = e,
                c = (0, p.x)(rU.a, i),
                d = (0, ei.h)("3901104270");
            return s[0] !== i || s[1] !== c ? (t = null == c ? (0, a.jsx)(rq, {
                conversationId: i
            }) : null, s[0] = i, s[1] = c, s[2] = t) : t = s[2], s[3] !== i || s[4] !== d || s[5] !== l ? (n = d && null != l ? (0, a.jsx)(rK, {
                conversationId: i,
                automationId: l
            }) : null, s[3] = i, s[4] = d, s[5] = l, s[6] = n) : n = s[6], s[7] !== t || s[8] !== n ? (o = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), s[7] = t, s[8] = n, s[9] = o) : o = s[9], o
        }
        var rQ = n("Qgfj"),
            rY = n("rmk3"),
            r$ = n("f38C"),
            rX = n("MRlq"),
            rZ = n("fQbA"),
            rJ = n("dDDU"),
            r0 = n("soaw"),
            r1 = n("ZrYB"),
            r2 = n("X6Vn"),
            r3 = n("Kwur"),
            r4 = n("eKlv"),
            r5 = n("MYlA"),
            r6 = n("sfmI"),
            r8 = n("JCtZ"),
            r7 = n("g2p6"),
            r9 = n("oaTv"),
            oe = n("PME0"),
            ot = n("lgcP"),
            on = n("AcSY"),
            oa = n("w7E5"),
            or = n("QmkR"),
            oo = n("xEXG"),
            os = n("J6LI"),
            oi = n("lUUH"),
            ol = n("ftAl");

        function oc(e) {
            let t, n, o, s = (0, r.c)(17),
                {
                    children: i,
                    conversationId: l,
                    getBaseItems: c,
                    menuTriggerRef: d,
                    navigate: u,
                    onBeforeOpen: h,
                    onOpenChange: m
                } = e,
                g = (0, p.y)(es.a),
                {
                    data: f
                } = (0, on.i)(),
                v = (0, oo.b)();
            return s[0] !== f || s[1] !== l || s[2] !== c || s[3] !== d || s[4] !== u || s[5] !== v || s[6] !== g ? (t = () => {
                let e = g.get(ol.a, l, {
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
                        account: o,
                        projectCrudStatus: s,
                        navigate: i,
                        onCreateProjectDialogCloseAutoFocus: l
                    } = e, c = (0, tt.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(oa.a), u = t.get(or.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, m = (a?.conversation_origin === "tpp" || a?.conversation_origin === "flora") && ("allowed" === s || h?.pages.some(e => null != e.cursor) === !0), g = t.get(or.h, n);
                    return null == o || null == a || t.get(or.g, n) || (0, os.c)(a, r).sourceUnavailable || null == (0, os.b)(t, a, g, !1) || null != c && null == r || null == h || 0 === p && !m ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: op.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, oi.b)({
                        scope: t,
                        conversation: a,
                        project: r,
                        showDestinationFetchState: !1,
                        showMoveToProject: null == c || p > 1 || m,
                        projectCrudStatus: s,
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
            }, s[0] = f, s[1] = l, s[2] = c, s[3] = d, s[4] = u, s[5] = v, s[6] = g, s[7] = t) : t = s[7], s[8] !== l || s[9] !== h || s[10] !== g ? (n = async () => {
                await Promise.all([(async () => {
                    let e = g.get(at.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await g.query.getOrFetch(at.chatGptConversationQueryById$, l).catch(oh), null == g.query.getData(at.chatGptConversationQueryById$, l) && await g.query.getOrFetch(or.j, [l]).catch(ou)
                })(), h?.()]);
                let e = g.get(ol.a, l, {
                    enabled: !1
                });
                (0, tt.a)(e?.gizmo_id) && e?.gizmo_id != null && await g.query.getOrFetch(eQ.b, e.gizmo_id).catch(od)
            }, s[8] = l, s[9] = h, s[10] = g, s[11] = n) : n = s[11], s[12] !== i || s[13] !== m || s[14] !== t || s[15] !== n ? (o = (0, a.jsx)(rY.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                onOpenChange: m,
                renderItem: rZ.b,
                trigger: "click",
                children: i
            }), s[12] = i, s[13] = m, s[14] = t, s[15] = n, s[16] = o) : o = s[16], o
        }

        function od() {}

        function ou() {}

        function oh() {}
        let op = (0, rQ.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}",
                description: "Name of a ChatGPT project offered as a destination for moving a conversation or Work task"
            }
        });

        function om(e) {
            let t, o, s, i, l, c, d, u, h, m, g, f, v, x, C, _, I, j, E, P = (0, r.c)(70),
                {
                    conversationOrigin: A,
                    conversationId: k,
                    title: M,
                    isHandoffPending: R,
                    isArchived: O,
                    isChatConversation: B,
                    onHandoff: G,
                    onOpenMessage: F,
                    projectId: z,
                    projectName: D,
                    serverConversationId: H
                } = e,
                W = (0, p.y)(L.a),
                q = (0, p.y)(es.a),
                U = (0, r0.a)(),
                K = (0, ei.k)();
            P[0] !== K ? (t = K.checkGate("224248639"), P[0] = K, P[1] = t) : t = P[1];
            let V = t;
            P[2] !== K ? (o = K.getLayer("3017902351").get("web_file_library_enabled", !1), P[2] = K, P[3] = o) : o = P[3];
            let Q = o,
                Y = V || Q;
            P[4] !== Y ? (s = {
                enabled: Y
            }, P[4] = Y, P[5] = s) : s = P[5];
            let {
                data: $
            } = (0, p.z)(r7.p, s), X = Y && $?.fileLibraryEnabledForRegistrationCountry !== !1, Z = (0, b.a)(), J = (0, w.Z)(), [ee, et] = (0, y.useState)(null), [en, ea] = (0, y.useState)(!1), eo = (0, y.useRef)(null), el = (0, y.useRef)(null);
            P[6] === Symbol.for("react.memo_cache_sentinel") ? (i = [], P[6] = i) : i = P[6];
            let ec = (0, y.useRef)(i);
            P[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                name: "chatgpt"
            }, P[7] = l) : l = P[7];
            let {
                isCapable: ed
            } = (0, p.x)(S.a, l), eu = (0, p.x)(or.g, H);
            P[8] === Symbol.for("react.memo_cache_sentinel") ? (c = () => et("shortcut"), P[8] = c) : c = P[8];
            let eh = B && !eu;
            P[9] !== W || P[10] !== H ? (d = () => (0, r6.a)(W.query.getData(at.chatGptConversationQueryById$, H), W.get(N.h), W.get(N.g)), P[9] = W, P[10] = H, P[11] = d) : d = P[11], P[12] !== eh || P[13] !== d ? (u = {
                enabled: eh,
                isActive: d
            }, P[12] = eh, P[13] = d, P[14] = u) : u = P[14], (0, rl.a)("deleteChat", c, u), P[15] !== q || P[16] !== eu || P[17] !== J || P[18] !== W || P[19] !== H ? (h = e => {
                !eu && (0, r6.a)(W.query.getData(at.chatGptConversationQueryById$, H), W.get(N.h), W.get(N.g)) && (et(null), (0, ot.a)(q, H, e), J("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, P[15] = q, P[16] = eu, P[17] = J, P[18] = W, P[19] = H, P[20] = h) : h = P[20];
            let ep = h;
            P[21] !== Z ? (m = Z.formatMessage(oy.chatActions), P[21] = Z, P[22] = m) : m = P[22];
            let em = m;
            P[23] !== W || P[24] !== H ? (g = async () => {
                let e = [];
                ec.current = e, e.push(...await async function(e, t) {
                    let a = await r3.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        }
                    }).catch(() => null);
                    return a?.can_share && 0 !== a.av_sessions.length ? [{
                        id: "share-live-session",
                        icon: am.$i,
                        message: (0, rQ.e)({
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
                                (0, r2.f)(e, r, {
                                    conversationId: t,
                                    sessions: a.av_sessions
                                })
                            })
                        }
                    }] : []
                }(W, H))
            }, P[23] = W, P[24] = H, P[25] = g) : g = P[25];
            let eg = g;
            P[26] !== k || P[27] !== A || P[28] !== X || P[29] !== Z || P[30] !== eu || P[31] !== O || P[32] !== R || P[33] !== U || P[34] !== J || P[35] !== G || P[36] !== F || P[37] !== z || P[38] !== D || P[39] !== W || P[40] !== H || P[41] !== K || P[42] !== M ? (f = e => {
                let t = W.get(N.f),
                    a = W.get(N.k),
                    r = (0, r6.a)(W.query.getData(at.chatGptConversationQueryById$, H), W.get(N.h), W.get(N.g)),
                    o = (0, r4.b)(W, H),
                    s = !eu && (0, r6.a)(o, W.get(N.h), W.get(N.g)),
                    i = W.get(T.b).pathname,
                    l = () => U() && i === W.get(T.b).pathname && t === W.get(N.f) && a === W.get(N.k),
                    c = (0, r9.a)(W, k, A, () => (0, oe.a)(J)),
                    d = [];
                return K.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && d.push({
                    id: "chatgpt-audio-summary",
                    message: (0, rQ.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary",
                        description: "Opens the dialog for generating and listening to an audio summary of the current chat"
                    }),
                    icon: am.pg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
                        })().then(e => {
                            l() && e(W, H)
                        }).catch(() => {
                            l() && (eo.current?.focus({
                                preventScroll: !0
                            }), W.get(er.f).danger(Z.formatMessage({
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
                }), X && d.unshift({
                    id: "chatgpt-conversation-files",
                    message: (0, rQ.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat",
                        description: "Opens the side panel listing files referenced in the active saved ChatGPT conversation, even when the list is empty"
                    }),
                    icon: am.sb,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(963775).then(n.bind(n, "fUWe"))).openConversationFiles
                        })().then(e => {
                            l() && e(W, {
                                conversationId: k,
                                serverConversationId: H,
                                onOpenMessage: F
                            })
                        }).catch(() => {
                            l() && W.get(er.f).danger(Z.formatMessage({
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
                }), d.push(...(0, rJ.a)(W)), (0, r8.a)(W, {
                    organizationItems: (0, rZ.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: ec.current,
                    viewItems: d,
                    preferenceItems: null == c ? [] : [c],
                    surface: "header",
                    conversationId: H,
                    stateConversationId: k,
                    conversationOrigin: A,
                    title: M,
                    isHandoffPending: R,
                    canHandoff: null != G,
                    onHandoff: G,
                    projectId: z,
                    projectName: D,
                    onRename: !r || eu || O ? void 0 : () => void(0, r4.renameActiveChatGptConversation)(W, k),
                    isPinned: W.get(or.h, H) ?? o?.is_starred === !0,
                    onTogglePin: s ? () => {
                        let e = (0, r4.b)(W, H);
                        !(null == e || W.get(or.g, H)) && (0, r6.a)(e, W.get(N.h), W.get(N.g)) && (0, or.V)({
                            scope: W,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(og)
                    } : void 0,
                    onArchive: !r || eu || O ? void 0 : () => (0, r1.a)(W, H),
                    onUnarchive: r && !eu && O ? () => {
                        (0, or.W)({
                            scope: W,
                            conversationId: H
                        }).then(() => {
                            W.get(er.f).success(Z.formatMessage(rX.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            W.get(er.f).danger(Z.formatMessage(af.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !r || eu ? void 0 : () => et("menu")
                })
            }, P[26] = k, P[27] = A, P[28] = X, P[29] = Z, P[30] = eu, P[31] = O, P[32] = R, P[33] = U, P[34] = J, P[35] = G, P[36] = F, P[37] = z, P[38] = D, P[39] = W, P[40] = H, P[41] = K, P[42] = M, P[43] = f) : f = P[43];
            let ef = f;
            P[44] !== em ? (v = (0, a.jsx)(r$.a, {
                ref: eo,
                className: "no-drag",
                color: "primary",
                label: em,
                size: "toolbar"
            }), P[44] = em, P[45] = v) : v = P[45], P[46] !== en || P[47] !== em || P[48] !== v ? (x = (0, a.jsx)(ap.a, {
                content: em,
                disabled: en,
                children: v
            }), P[46] = en, P[47] = em, P[48] = v, P[49] = x) : x = P[49];
            let ev = x;
            P[50] !== ef || P[51] !== ev || P[52] !== J || P[53] !== ed || P[54] !== eg || P[55] !== H ? (C = ed ? (0, a.jsx)(oc, {
                conversationId: H,
                getBaseItems: ef,
                menuTriggerRef: eo,
                navigate: J,
                onBeforeOpen: eg,
                onOpenChange: ea,
                children: ev
            }) : (0, a.jsx)(rY.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => ef(),
                onBeforeOpen: eg,
                onOpenChange: ea,
                renderItem: rZ.b,
                trigger: "click",
                children: ev
            }), P[50] = ef, P[51] = ev, P[52] = J, P[53] = ed, P[54] = eg, P[55] = H, P[56] = C) : C = P[56];
            let ey = "shortcut" === ee,
                ex = null != ee;
            return P[57] !== ee ? (_ = () => {
                el.current = "menu" === ee ? eo.current : null, et(null)
            }, P[57] = ee, P[58] = _) : _ = P[58], P[59] === Symbol.for("react.memo_cache_sentinel") ? (I = e => {
                let t = el.current;
                if (el.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, P[59] = I) : I = P[59], P[60] !== ep || P[61] !== eu || P[62] !== ey || P[63] !== ex || P[64] !== _ || P[65] !== M ? (j = (0, a.jsx)(r5.a, {
                allowArtifactDeletion: !0,
                autoFocusConfirm: ey,
                open: ex,
                onOpenChange: _,
                onCloseAutoFocus: I,
                isDeleting: eu,
                onConfirm: ep,
                title: M
            }), P[60] = ep, P[61] = eu, P[62] = ey, P[63] = ex, P[64] = _, P[65] = M, P[66] = j) : j = P[66], P[67] !== C || P[68] !== j ? (E = (0, a.jsxs)(a.Fragment, {
                children: [C, j]
            }), P[67] = C, P[68] = j, P[69] = E) : E = P[69], E
        }

        function og() {}

        function of() {
            let e, t, n, o = (0, r.c)(8),
                s = (0, b.a)(),
                [i, l] = (0, y.useState)(!1);
            o[0] !== s ? (e = s.formatMessage(oy.more), o[0] = s, o[1] = e) : e = o[1];
            let c = e;
            return o[2] !== c ? (t = (0, a.jsx)(r$.a, {
                className: "no-drag",
                color: "primary",
                label: c,
                size: "toolbar"
            }), o[2] = c, o[3] = t) : t = o[3], o[4] !== i || o[5] !== c || o[6] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rY.a, {
                    preserveBrowserContextMenu: !0,
                    getItems: ov,
                    onOpenChange: l,
                    renderItem: rZ.b,
                    trigger: "click",
                    children: (0, a.jsx)(ap.a, {
                        content: c,
                        disabled: i,
                        children: t
                    })
                })
            }), o[4] = i, o[5] = c, o[6] = t, o[7] = n) : n = o[7], n
        }

        function ov() {
            return (0, rZ.a)([])
        }
        let oy = (0, rQ.f)({
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
        var ox = n("LpOp"),
            ob = n("WLgA");

        function oC(e) {
            let t, n, o, s = (0, r.c)(10),
                {
                    allowsThreadContentOverlap: l,
                    project: c
                } = e,
                d = void 0 !== l && l,
                u = (0, b.a)(),
                h = null == c ? "gap-2 ps-2" : "gap-0.5",
                p = d && "rounded-lg bg-surface";
            s[0] !== h || s[1] !== p ? (t = (0, i.b)("me-2 flex min-w-0 flex-1 items-center text-base select-none", h, p), s[0] = h, s[1] = p, s[2] = t) : t = s[2];
            let m = !!d || void 0;
            return s[3] !== u || s[4] !== c ? (n = null != c ? (0, a.jsx)("nav", {
                "aria-label": u.formatMessage({
                    id: "chatgptConversations.header.projectBreadcrumb",
                    defaultMessage: "Breadcrumb",
                    description: "Accessible label for project conversation breadcrumb navigation"
                }),
                className: "flex min-w-0 items-center gap-1 overflow-hidden whitespace-nowrap",
                children: (0, a.jsx)(w.g, {
                    className: "flex h-9 max-w-full min-w-8 shrink cursor-interaction items-center overflow-hidden rounded-lg px-2 text-start text-base text-secondary transition-colors hover:bg-surface-tertiary hover:text-default",
                    to: (0, ob.c)(c.gizmo.id),
                    children: (0, a.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-1.5",
                        children: [(0, a.jsx)(tq.a, {
                            className: "size-5",
                            color: c.gizmo.display.theme,
                            defaultColor: "secondary",
                            fallbackIcon: (0, a.jsx)(am.yd, {}),
                            icon: c.gizmo.display.emoji,
                            sharedIcon: "shared" === (0, ro.b)(c) ? (0, a.jsx)(ox.a, {}) : void 0
                        }), (0, a.jsx)("span", {
                            className: "min-w-0 truncate text-default",
                            children: c.gizmo.display.name
                        })]
                    })
                })
            }) : null, s[3] = u, s[4] = c, s[5] = n) : n = s[5], s[6] !== t || s[7] !== m || s[8] !== n ? (o = (0, a.jsx)(P.a.HeaderToolbar, {
                inset: !1,
                children: (0, a.jsx)("div", {
                    className: t,
                    "data-app-shell-thread-content-overlap": m,
                    children: n
                })
            }), s[6] = t, s[7] = m, s[8] = n, s[9] = o) : o = s[9], o
        }
        var ow = n("dLcZ"),
            o_ = n("W5pg"),
            oI = n("QcW8"),
            oj = n("yC2B");

        function oS(e) {
            let t, n, o, s, c, d, u, h, m, g, f = (0, r.c)(32),
                {
                    header: v,
                    courseShortcut: y,
                    progress: x
                } = e,
                {
                    titleBarLeftInset: C,
                    rightPanelAnimatedWidth: w,
                    isContentFullWidth: _
                } = (0, A.g)(),
                I = (0, p.z)(oI.$),
                j = (0, p.z)(oI.cb),
                S = (0, b.a)();
            f[0] !== S.locale ? (t = (0, oj.a)(S.locale), f[0] = S.locale, f[1] = t) : t = f[1];
            let T = t,
                E = I?.mode === "split" && "left" === j != ("rtl" === T);
            f[2] !== E || f[3] !== _ ? (n = e => E && !_ ? e : 0, f[2] = E, f[3] = _, f[4] = n) : n = f[4];
            let k = (0, o_.a)(w, n);
            f[5] !== k || f[6] !== C ? (o = [C, k], f[5] = k, f[6] = C, f[7] = o) : o = f[7];
            let M = (0, o_.a)(o, oT);
            f[8] !== M || f[9] !== k ? (s = {
                "--learning-header-left-inset": M,
                insetInlineStart: k
            }, f[8] = M, f[9] = k, f[10] = s) : s = f[10];
            let R = s;
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
            if (null == x) return O;
            if (I?.isVisible && "full" === I.mode) {
                let e, t, n;
                return f[18] !== y ? (e = null == y ? null : (0, a.jsx)("div", {
                    className: "flex min-w-0 flex-1",
                    children: y
                }), f[18] = y, f[19] = e) : e = f[19], f[20] !== x ? (t = (0, a.jsx)("div", {
                    className: "min-w-0 flex-1",
                    children: x
                }), f[20] = x, f[21] = t) : t = f[21], f[22] !== t || f[23] !== e ? (n = (0, a.jsx)(P.a.HeaderAction, {
                    actionId: "sectioned-conversation-navigation",
                    align: "center",
                    children: (0, a.jsxs)("div", {
                        className: "flex min-w-0 items-center gap-toolbar-action",
                        children: [e, t]
                    })
                }), f[22] = t, f[23] = e, f[24] = n) : n = f[24], n
            }
            return f[25] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, i.b)("relative flex max-w-[min(var(--learning-progress-max-width),max(0px,calc(100cqw-2*(var(--app-shell-header-end-actions-width)+var(--spacing)*3))))] min-w-0 items-center", "[--learning-progress-max-width:var(--thread-content-max-width)]", "@max-thread-expanded/home-mode-toggle:[--learning-progress-max-width:var(--thread-content-compact-max-width,var(--thread-content-max-width))]"), f[25] = h) : h = f[25], f[26] !== O ? (m = (0, a.jsx)("div", {
                className: "absolute inset-y-0 end-full me-toolbar-action flex w-[max(0px,calc((100cqw-100%)/2-var(--spacing-toolbar-action)-var(--spacing)*2-var(--learning-header-left-inset)))] min-w-0 items-center overflow-hidden",
                "data-app-shell-header-obstacle": !0,
                children: O
            }), f[26] = O, f[27] = m) : m = f[27], f[28] !== x || f[29] !== R || f[30] !== m ? (g = (0, a.jsx)(P.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                children: (0, a.jsxs)(l.a.div, {
                    className: h,
                    style: R,
                    children: [m, x]
                })
            }), f[28] = x, f[29] = R, f[30] = m, f[31] = g) : g = f[31], g
        }

        function oT(e) {
            let [t, n] = e;
            return `${Math.max(0,t-n)}px`
        }
        var oE = n("X0li");
        let oP = (0, e3.a)(oE.d),
            oA = (0, e3.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            ok = (0, e3.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var oM = n("lX86");
        n("i1of");
        var oR = n("a4V1"),
            oO = n("alJ6"),
            oN = n("u9iS"),
            oB = n("KidQ");
        let oG = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function oF(e) {
            let t, n, o, s, i, l = (0, r.c)(15),
                {
                    children: c,
                    draftKey: d,
                    enableInlineSystemHints: u
                } = e,
                h = (0, p.y)(es.a),
                m = (0, y.useContext)(tu.a),
                g = u ? "chatgpt" : void 0;
            return l[0] !== u || l[1] !== g ? (t = {
                enableInlineSystemHints: u,
                variant: g
            }, l[0] = u, l[1] = g, l[2] = t) : t = l[2], l[3] !== d || l[4] !== h ? (n = () => ({
                defaultText: h.get(e9.s, d),
                defaultTextKind: "prompt"
            }), l[3] = d, l[4] = h, l[5] = n) : n = l[5], l[6] !== m ? (o = () => {
                let e = m?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == m ? null : {
                    element: e,
                    locationKey: m.locationKey
                }
            }, l[6] = m, l[7] = o) : o = l[7], l[8] !== c ? (s = e => null == e ? null : c(e), l[8] = c, l[9] = s) : s = l[9], l[10] !== t || l[11] !== n || l[12] !== o || l[13] !== s ? (i = (0, a.jsx)(oB.a, {
                controllerOptions: oG,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: o,
                children: s
            }), l[10] = t, l[11] = n, l[12] = o, l[13] = s, l[14] = i) : i = l[14], i
        }
        var oz = n("ygKd"),
            oL = n("KSir"),
            oD = n("fNPc"),
            oH = n("vVgo");
        let oW = (0, e3.a)(async () => (await n.e(642007).then(n.bind(n, "KhUL"))).CourseHeaderShortcut);

        function oq(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: o
                } = e,
                s = (0, ei.h)("4035922817");
            return n[0] !== o || n[1] !== s ? (t = s ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(oW, {
                    conversationId: o
                })
            }) : null, n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }
        var oU = n("QPeR"),
            oK = n("MgyE"),
            oV = n("gyrn"),
            oQ = n("wnpN"),
            oY = n("rcFj"),
            o$ = n("M3Kf");

        function oX(e) {
            let t, n, o, i, l, c, d = (0, r.c)(21),
                {
                    conversationId: u
                } = e,
                h = (0, p.y)(es.a),
                m = (0, p.x)(z.j, u),
                g = (0, p.z)(eG.b),
                {
                    search: f
                } = (0, w.X)();
            if (d[0] !== f) {
                let e = new URLSearchParams(f);
                t = e.get("messageId") ?? e.get("message"), n = e.has("selectedTextQuery"), d[0] = f, d[1] = t, d[2] = n
            } else t = d[1], n = d[2];
            let v = n;
            d[3] !== v || d[4] !== t || d[5] !== m ? (o = ["chatgpt-message-target", m, t, v], d[3] = v, d[4] = t, d[5] = m, d[6] = o) : o = d[6];
            let y = null != m && null != t && g > 0,
                x = v ? 0 : 1 / 0;
            d[7] !== u || d[8] !== v || d[9] !== t || d[10] !== h || d[11] !== m ? (i = async e => {
                let {
                    signal: n
                } = e;
                if (null != m) {
                    if (null != t && v) {
                        let e = h.get(z.L, u),
                            n = e?.[t] ?? (null == e ? void 0 : Object.values(e).find(e => e.message?.id === t));
                        if (n?.message != null) return !0
                    }
                    await (0, eB.a)(h, m, n)
                }
                return !0
            }, d[7] = u, d[8] = v, d[9] = t, d[10] = h, d[11] = m, d[12] = i) : i = d[12], d[13] !== o || d[14] !== y || d[15] !== x || d[16] !== i ? (l = {
                queryKey: o,
                enabled: y,
                staleTime: x,
                retry: !1,
                queryFn: i
            }, d[13] = o, d[14] = y, d[15] = x, d[16] = i, d[17] = l) : l = d[17];
            let {
                isError: b,
                refetch: _
            } = (0, s.a)(l);
            return d[18] !== b || d[19] !== _ ? (c = b ? (0, a.jsx)(eZ.a, {
                color: "secondary",
                onClick: () => void _(),
                children: (0, a.jsx)(C.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message",
                    description: "Button to retry loading the full conversation for a link to an older message"
                })
            }) : null, d[18] = b, d[19] = _, d[20] = c) : c = d[20], c
        }
        var oZ = n("ckwE");

        function oJ(e) {
            let t, n = (0, r.c)(3),
                {
                    children: o
                } = e,
                [s] = (0, y.useState)(o0);
            return n[0] !== s || n[1] !== o ? (t = (0, a.jsx)(eF.a, {
                value: s,
                children: o
            }), n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }

        function o0() {
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

        function o1(e) {
            let t, n = (0, r.c)(2),
                {
                    children: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsx)(oZ.a, {
                children: (0, a.jsx)(oJ, {
                    children: o
                })
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var o2 = n("MDmT"),
            o3 = n("K45w"),
            o4 = n("jCHb"),
            o5 = n("V8uZ");

        function o6(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var o8 = n("NqfB"),
            o7 = n("JEFL"),
            o9 = n("moBM");
        let se = '[data-markdown-text-style="assistant-message"]',
            st = (0, p.d)(es.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(z.L, n)?.[a]?.message ?? null
            });

        function sn(e) {
            let t, n, o = (0, r.c)(5),
                s = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return o[0] !== e ? (t = t => (0, a.jsx)(sa, {
                ...e,
                selection: t
            }), o[0] = e, o[1] = t) : t = o[1], o[2] !== s || o[3] !== t ? (n = (0, a.jsx)(o8.a, {
                align: "start",
                targetSelector: s,
                children: t
            }), o[2] = s, o[3] = t, o[4] = n) : n = o[4], n
        }

        function sa(e) {
            let t, o, s, i, l, c, d, u = (0, r.c)(30),
                {
                    conversationId: h,
                    moreDetailsEnabled: m,
                    onAddSelectedText: g,
                    selection: f
                } = e,
                v = (0, p.y)(L.a),
                y = (0, b.a)(),
                x = (0, ei.h)("4290238484"),
                C = (0, ei.h)("473637331"),
                w = (0, p.z)(o9.a),
                _ = (0, p.x)(z.x, h);
            u[0] !== _ || u[1] !== w || u[2] !== v ? (t = w && "tpp" === _ && "chatgpt-thread" === v.value.routeKind && null == v.value.workSideChat && !0, u[0] = _, u[1] = w, u[2] = v, u[3] = t) : t = u[3];
            let I = t;
            u[4] !== h || u[5] !== f.selectionRange ? (o = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, o = a?.closest(se);
                if (n.collapsed || null == o || !o.isConnected || o !== r?.closest(se)) return null;
                let s = o.parentElement,
                    i = s?.getAttribute("data-chatgpt-selection-message-id");
                return !i || s?.getAttribute("data-chatgpt-selection-conversation-id") !== t || [...o.querySelectorAll('[data-writing-block-variant], [data-conversation-component="learning"], [contenteditable="true"], [data-markdown-copy="exclude"]')].some(e => n.intersectsNode(e)) ? null : {
                    markdownElement: o,
                    messageId: i
                }
            }({
                conversationId: h,
                range: f.selectionRange
            }), u[4] = h, u[5] = f.selectionRange, u[6] = o) : o = u[6];
            let j = o,
                S = j?.messageId ?? null;
            u[7] !== h || u[8] !== S ? (s = {
                conversationId: h,
                messageId: S
            }, u[7] = h, u[8] = S, u[9] = s) : s = u[9];
            let T = (0, p.x)(st, s),
                E = (0, p.x)(z.j, h),
                P = x && m && null != E && null != j && T?.author.role === "assistant";
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
            } : void 0, u[10] = I, u[11] = v, u[12] = i) : i = u[12], u[13] !== P || u[14] !== C || u[15] !== g || u[16] !== f.selectionRange || u[17] !== j ? (l = !P || C ? e => {
                g(e, j?.messageId, null == j ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of n5(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(j.markdownElement, f.selectionRange, e))
            } : void 0, u[13] = P, u[14] = C, u[15] = g, u[16] = f.selectionRange, u[17] = j, u[18] = l) : l = u[18], u[19] !== P || u[20] !== h || u[21] !== y || u[22] !== v || u[23] !== j ? (c = P ? e => {
                Promise.all([n.e(753405), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(985455), n.e(581472), n.e(62441), n.e(118186), n.e(17983), n.e(167649), n.e(509282), n.e(142274), n.e(975420), n.e(284782), n.e(530822)]).then(n.bind(n, "zRlR")).then(t => {
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
                        messageId: j.messageId,
                        query: y.formatMessage({
                            id: "chatgpt.selection.moreDetailsTitle",
                            defaultMessage: "More details",
                            description: "Title of the side panel explaining selected text from an assistant response"
                        }),
                        shouldBlockExternalEgress: v.get(ej.d, h),
                        sourceConversationId: h
                    })
                })
            } : void 0, u[19] = P, u[20] = h, u[21] = y, u[22] = v, u[23] = j, u[24] = c) : c = u[24], u[25] !== f.selectedText || u[26] !== i || u[27] !== l || u[28] !== c ? (d = (0, a.jsx)(o7.a, {
                conversationTerminology: "chat",
                selectedText: f.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), u[25] = f.selectedText, u[26] = i, u[27] = l, u[28] = c, u[29] = d) : d = u[29], d
        }
        var sr = n("Fjze");

        function so(e) {
            let t, n, a, o = (0, r.c)(7),
                {
                    sharedConversationId: s
                } = e,
                i = (0, p.y)(es.a),
                l = null != s;
            o[0] !== i || o[1] !== s ? (t = () => {
                null != s && (r3.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: s
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(ss), (0, eu.a)(i, sr.a, {
                    sharedConversationId: s
                }))
            }, o[0] = i, o[1] = s, o[2] = t) : t = o[2];
            let c = (0, y.useEffectEvent)(t);
            return o[3] !== c ? (n = () => {
                c()
            }, o[3] = c, o[4] = n) : n = o[4], o[5] !== l ? (a = [l], o[5] = l, o[6] = a) : a = o[6], (0, y.useEffect)(n, a), null
        }

        function ss() {}
        var si = n("GigQ"),
            sl = n("JKdL"),
            sc = n("HOLv"),
            sd = n("FGv0"),
            su = n("r9i9"),
            sh = n("tdfh"),
            sp = n("SEBt"),
            sm = n("uQqo"),
            sg = n("hMfc");

        function sf(e) {
            let t, o, s, i, l, c = (0, r.c)(12),
                {
                    data: d
                } = e,
                u = (0, p.y)(es.a),
                h = (0, b.a)();
            c[0] !== h ? (t = h.formatMessage(af.a.headerShare), c[0] = h, c[1] = t) : t = c[1];
            let m = t,
                [g, f] = (0, y.useState)(!1);
            return c[2] !== d || c[3] !== g || c[4] !== u ? (o = () => {
                g || (f(!0), (async function(e, t) {
                    let a = t.sharedPost,
                        r = a?.attachments[0]?.kind === "media_generation" ? (0, sm.a)(a, (0, sm.b)(a))[0] : null,
                        o = crypto.randomUUID();
                    (0, sp.b)(e, {
                        attachmentType: t.attachmentType,
                        contentType: t.contentType,
                        shareId: t.shareId,
                        shareSessionId: o
                    });
                    let s = t.dialogProps.receiverShareLink;
                    if (s?.contentType === "conversation") {
                        let a = (0, sp.a)(e, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                shareId: t.shareId,
                                shareSessionId: o,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                                usedExistingLink: !0,
                                omitSheetType: !0
                            }),
                            r = await (0, sd.a)(Promise.resolve(s.shareLinkUrl));
                        if (a({
                                result: r ? "link-copied" : "copy-failed",
                                shareId: t.shareId
                            }), r) {
                            let {
                                showConversationShareCopiedToast: t
                            } = await n.e(555532).then(n.bind(n, "euaP"));
                            t(e, null, !0 === s.isWorkspaceOnly)
                        } else(0, r2.f)(e, sh.a, {
                            ...t.dialogProps,
                            recoveryShareLink: s,
                            shareSessionId: o
                        });
                        return
                    }(0, r2.f)(e, sh.a, {
                        ...t.dialogProps,
                        image: r?.src == null ? void 0 : {
                            alt: t.dialogProps.title ?? "",
                            item: r,
                            previewSrc: r.src
                        },
                        previewTurns: null != r ? void 0 : (0, su.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId),
                        privacyNotices: (0, su.k)({
                            conversation: t.conversation,
                            projectId: null
                        }),
                        shareSessionId: o
                    })
                })(u, d).finally(() => f(!1)))
            }, c[2] = d, c[3] = g, c[4] = u, c[5] = o) : o = c[5], c[6] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(sc.a, {
                asset: sg.a
            }), i = (0, a.jsx)(C.a, {
                ...af.a.headerShare
            }), c[6] = s, c[7] = i) : (s = c[6], i = c[7]), c[8] !== g || c[9] !== m || c[10] !== o ? (l = (0, a.jsxs)(eZ.a, {
                "aria-label": m,
                color: "ghostActive",
                loading: g,
                size: "toolbar",
                onClick: o,
                children: [s, i]
            }), c[8] = g, c[9] = m, c[10] = o, c[11] = l) : l = c[11], l
        }
        var sv = n("JUxu");
        let sy = (0, y.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function sx(e) {
            let t, n, o, s, i = (0, r.c)(11),
                {
                    sharedConversationId: l
                } = e,
                c = (0, p.y)(es.a),
                d = (0, p.x)(eS.f, (0, y.useContext)(O.a));
            if (null != d) {
                let e, t;
                return i[0] !== d ? (e = (0, eS.b)(d), i[0] = d, i[1] = e) : e = i[1], i[2] !== e ? (t = (0, a.jsx)(sv.a, {
                    imageOnly: e
                }), i[2] = e, i[3] = t) : t = i[3], t
            }
            return i[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("div", {
                className: "text-secondary",
                children: (0, a.jsx)(C.a, {
                    id: "chatgptConversations.sharedConversation.copyDisclaimer",
                    defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory.",
                    description: "Informational notice above a shared ChatGPT chat explaining that the copy will not be added to the viewer's memory"
                })
            }), i[4] = t) : t = i[4], i[5] !== c || i[6] !== l ? (n = e => {
                if (null == l) return;
                let t = e.currentTarget;
                (0, r2.f)(c, sy, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, sp.c)(c, l)
            }, i[5] = c, i[6] = l, i[7] = n) : n = i[7], i[8] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(C.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation",
                description: "Button above a shared ChatGPT conversation in Codex Desktop that opens ChatGPT's report modal for reporting another person's shared conversation"
            }), i[8] = o) : o = i[8], i[9] !== n ? (s = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(eZ.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: o
                })]
            }), i[9] = n, i[10] = s) : s = i[10], s
        }
        var sb = n("zbjM"),
            sC = n("MVHH"),
            sw = n("xSOA"),
            s_ = n("rhKI"),
            sI = n("PP3M"),
            sj = n("jAnS"),
            sS = n("CFOe"),
            sT = n("JNtf"),
            sE = n("mUDD");

        function sP(e) {
            let t, n, o, s, i, l, c, d, u, h, p, m, g, f = (0, r.c)(31),
                {
                    canSave: v,
                    isPending: y,
                    onCancel: x,
                    onClose: b,
                    onSave: w
                } = e;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(C.a, {
                id: "chatgptConversations.temporaryChat.save.close",
                defaultMessage: "Close",
                description: "Accessible label for the close button in the temporary chat save confirmation dialog."
            }), f[0] = t) : t = f[0], f[1] !== y || f[2] !== b ? (n = e => {
                e || y || b()
            }, f[1] = y, f[2] = b, f[3] = n) : n = f[3];
            let _ = !y;
            f[4] !== v || f[5] !== w ? (o = e => {
                e.preventDefault(), v && w()
            }, f[4] = v, f[5] = w, f[6] = o) : o = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(sT.d, {
                children: (0, a.jsx)(C.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?",
                    description: "Title of the confirmation dialog for converting a temporary ChatGPT conversation into a regular saved chat."
                })
            }), f[7] = s) : s = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(sE.e, {
                children: (0, a.jsx)(sE.d, {
                    className: "select-none",
                    title: s,
                    subtitle: (0, a.jsx)(sT.c, {
                        children: (0, a.jsx)(C.a, {
                            id: "chatgptConversations.temporaryChat.save.description.regularChatSettings",
                            defaultMessage: "This chat will now be included in your history. It will follow your memory and model training settings used for regular chats.",
                            description: "Body of the confirmation dialog shown when a user saves a temporary ChatGPT conversation. Explains before they confirm that the chat will appear in history and follow the memory and model training settings already configured for regular chats."
                        })
                    })
                })
            }), f[8] = i) : i = f[8], f[9] !== x || f[10] !== b ? (l = () => {
                x?.(), b()
            }, f[9] = x, f[10] = b, f[11] = l) : l = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(C.a, {
                id: "chatgptConversations.temporaryChat.save.cancel",
                defaultMessage: "Cancel",
                description: "Secondary button that closes the save confirmation dialog and leaves the ChatGPT conversation temporary."
            }), f[12] = c) : c = f[12], f[13] !== y || f[14] !== l ? (d = (0, a.jsx)(eZ.a, {
                color: "secondary",
                disabled: y,
                onClick: l,
                children: c
            }), f[13] = y, f[14] = l, f[15] = d) : d = f[15];
            let I = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(C.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save",
                description: "Primary button that saves a temporary ChatGPT conversation to regular chat history."
            }), f[16] = u) : u = f[16], f[17] !== y || f[18] !== I ? (h = (0, a.jsx)(eZ.a, {
                color: "primary",
                disabled: I,
                loading: y,
                type: "submit",
                children: u
            }), f[17] = y, f[18] = I, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(sE.e, {
                children: (0, a.jsxs)(sE.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== o ? (m = (0, a.jsxs)(sE.b, {
                as: "form",
                onSubmit: o,
                children: [i, p]
            }), f[23] = p, f[24] = o, f[25] = m) : m = f[25], f[26] !== y || f[27] !== m || f[28] !== n || f[29] !== _ ? (g = (0, a.jsx)(sT.a, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: _,
                size: "narrow",
                children: m
            }), f[26] = y, f[27] = m, f[28] = n, f[29] = _, f[30] = g) : g = f[30], g
        }

        function sA(e) {
            (0, at.e)(e).catch(() => {
                nP.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function sk(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(sM, {
                        conversationId: o
                    })
                })]
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function sM(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: o
                } = e;
            return (0, p.z)(sI.e) ? (n[0] !== o ? (t = (0, a.jsx)(sR, {
                conversationId: o
            }), n[0] = o, n[1] = t) : t = n[1], t) : null
        }

        function sR(e) {
            let t, n, o, s, i, l, c, d, u, h, m, g, f, v = (0, r.c)(49),
                {
                    conversationId: x
                } = e,
                _ = (0, p.y)(es.a),
                I = (0, b.a)(),
                j = (0, w.Z)(),
                [S, T] = (0, y.useState)(!1),
                [E, P] = (0, y.useState)(!1),
                [A, k] = (0, y.useState)(!1),
                [M, R] = (0, y.useState)(!1),
                O = (0, y.useRef)(!1),
                N = (0, p.z)(r7.p).data,
                B = (0, p.x)(z.j, x),
                G = (0, p.x)(z.W, x),
                F = (0, p.x)(z.H, x),
                L = (0, p.x)(e9.i, x);
            v[0] !== x || v[1] !== _ ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (_.get(z.H, x) || _.get(e9.i, x) || t !== _.get(z.j, x) || n !== _.get(z.W, x)) throw Error("Cannot save an unavailable temporary chat message");
                    return r3.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: sF
                    }).then(sG)
                },
                retry: sB
            }, v[0] = x, v[1] = _, v[2] = t) : t = v[2];
            let {
                mutateAsync: D,
                isPending: H
            } = (0, sw.a)(t), W = null != B && null != G && !F && !L && !H && !E;
            v[3] !== I ? (n = I.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat",
                description: "Tooltip and accessible label for the bookmark button in a temporary ChatGPT conversation. Opens a confirmation dialog to save it to regular history."
            }), v[3] = I, v[4] = n) : n = v[4];
            let q = n;
            v[5] !== N?.eligibleAnnouncements ? (o = N?.eligibleAnnouncements?.includes(r7.h), v[5] = N?.eligibleAnnouncements, v[6] = o) : o = v[6];
            let U = !0 === o,
                K = !M && (A || U && W);
            v[7] !== x || v[8] !== A || v[9] !== _ || v[10] !== K ? (s = () => {
                if (!K || A || O.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || O.current || (O.current = !0, (0, eu.a)(_, sC.Ab, {
                        personalizationMode: (0, s_.a)((0, sI.k)(_, x))
                    }), k(!0), sA(_))
                }), () => {
                    e = !0
                }
            }, i = [x, A, _, K], v[7] = x, v[8] = A, v[9] = _, v[10] = K, v[11] = s, v[12] = i) : (s = v[11], i = v[12]), (0, y.useEffect)(s, i), v[13] !== _ ? (l = () => {
                R(!0), O.current || (O.current = !0, sA(_))
            }, v[13] = _, v[14] = l) : l = v[14];
            let V = l;
            v[15] !== W || v[16] !== x || v[17] !== I || v[18] !== j || v[19] !== D || v[20] !== _ || v[21] !== G || v[22] !== B ? (c = async function() {
                let e;
                if (!W || null == B || null == G) return;
                let t = (0, s_.a)((0, sI.k)(_, x));
                (0, eu.a)(_, sC.Bb, {
                    personalizationMode: t
                });
                try {
                    e = (await D({
                        sourceConversationId: B,
                        selectedLeafId: G
                    })).conversation_id
                } catch (e) {
                    (0, eu.a)(_, sC.Cb, {
                        personalizationMode: t,
                        failureCategory: (0, s_.b)(e)
                    }), _.get(er.f).danger(I.formatMessage({
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
                P(!0), T(!1), (0, or.H)(_), (0, or.K)(_, B, "remove"), (0, or.K)(_, e, "refresh"), j((0, sj.c)(e), {
                    replace: !0
                }), _.get(er.f).success(I.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history.",
                    description: "Success toast confirming that a formerly temporary ChatGPT conversation is now saved in regular history."
                })), r3.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: G
                    }
                }).then(sN).then(t => {
                    (0, z.$b)({
                        scope: _,
                        conversationId: e,
                        title: t
                    }), _.query.setData(at.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, or.H)(_), (0, or.K)(_, e, "refresh")
                }).catch(sO)
            }, v[15] = W, v[16] = x, v[17] = I, v[18] = j, v[19] = D, v[20] = _, v[21] = G, v[22] = B, v[23] = c) : c = v[23];
            let Q = c,
                Y = !W;
            v[24] !== x || v[25] !== _ || v[26] !== K ? (d = () => {
                (0, eu.a)(_, sC.Eb, {
                    personalizationMode: (0, s_.a)((0, sI.k)(_, x)),
                    coachMarkVisible: K
                }), T(!0)
            }, v[24] = x, v[25] = _, v[26] = K, v[27] = d) : d = v[27], v[28] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(t_.b, {
                icon: {
                    16: am.qb,
                    20: am.rb
                }
            }), v[28] = u) : u = v[28], v[29] !== q || v[30] !== Y || v[31] !== d ? (h = (0, a.jsx)(eZ.a, {
                "aria-label": q,
                color: "toolbar",
                disabled: Y,
                size: "toolbar",
                uniform: !0,
                onClick: d,
                children: u
            }), v[29] = q, v[30] = Y, v[31] = d, v[32] = h) : h = v[32];
            let $ = h;
            return v[33] !== V || v[34] !== I || v[35] !== q || v[36] !== $ || v[37] !== K ? (m = K ? (0, a.jsx)(sS.a, {
                align: "end",
                description: (0, a.jsx)(C.a, {
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
                title: (0, a.jsx)(C.a, {
                    id: "chatgptConversations.temporaryChat.save.button",
                    defaultMessage: "Save chat",
                    description: "Title of a one-time onboarding coachmark anchored to the Save chat button in a temporary ChatGPT conversation."
                }),
                tooltipClassName: "w-60",
                children: $
            }) : (0, a.jsx)(ap.a, {
                content: q,
                children: $
            }), v[33] = V, v[34] = I, v[35] = q, v[36] = $, v[37] = K, v[38] = m) : m = v[38], v[39] !== W || v[40] !== x || v[41] !== Q || v[42] !== S || v[43] !== H || v[44] !== _ ? (g = S ? (0, a.jsx)(sP, {
                canSave: W,
                isPending: H,
                onCancel: () => {
                    (0, eu.a)(_, sC.zb, {
                        personalizationMode: (0, s_.a)((0, sI.k)(_, x))
                    })
                },
                onClose: () => T(!1),
                onSave: () => void Q()
            }) : null, v[39] = W, v[40] = x, v[41] = Q, v[42] = S, v[43] = H, v[44] = _, v[45] = g) : g = v[45], v[46] !== m || v[47] !== g ? (f = (0, a.jsxs)(a.Fragment, {
                children: [m, g]
            }), v[46] = m, v[47] = g, v[48] = f) : f = v[48], f
        }

        function sO() {}

        function sN(e) {
            return nU.object({
                title: nU.string()
            }).parse(e).title
        }

        function sB(e, t) {
            return e < 1 && t instanceof ni.a && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function sG(e) {
            return nU.object({
                conversation_id: nU.string().min(1)
            }).parse(e)
        }

        function sF(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var sz = n("Sd4O");
        let sL = (0, p.d)(es.a, (e, t) => {
            let {
                get: n
            } = t, a = n(sz.a, e);
            return null != a && n(D.e, a).data?.automation.plan_type === "language_learning"
        });
        var sD = n("AORd"),
            sH = n("J8FU"),
            sW = n("vpdG"),
            sq = n("Aluh"),
            sU = n("mG6J");

        function sK(e) {
            let t, n, o = (0, r.c)(14),
                {
                    conversationId: s,
                    shouldBlockExternalEgress: i,
                    widgets: l
                } = e,
                c = (0, p.z)(sq.b);
            if (i) return null;
            if (o[0] !== c || o[1] !== s || o[2] !== l) {
                let e, n, r;
                o[4] !== c || o[5] !== s ? (e = e => c.has((0, aK.e)(s, e.messageId)), o[4] = c, o[5] = s, o[6] = e) : e = o[6];
                let i = l.filter(e),
                    d = `chatgpt:${s}`;
                o[7] !== d ? (n = (0, m.Qe)(d), o[7] = d, o[8] = n) : n = o[8];
                let u = n;
                o[9] !== u || o[10] !== s ? (r = e => (0, a.jsx)(sU.b, {
                    conversationId: u,
                    chatGptConversationId: s,
                    hostId: "local",
                    item: e
                }, e.messageId), o[9] = u, o[10] = s, o[11] = r) : r = o[11], t = i.map(r), o[0] = c, o[1] = s, o[2] = l, o[3] = t
            } else t = o[3];
            return o[12] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), o[12] = t, o[13] = n) : n = o[13], n
        }
        var sV = n("JVSG"),
            sQ = {
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
            sY = n("ebpE");
        let s$ = (0, p.v)(es.a, e => null);

        function sX() {
            let e, t, n, o, s, i, l, c, d, u, h, m, g, f, v, x = (0, r.c)(40),
                b = (0, w.Z)(),
                C = (0, y.useContext)(tN.a);
            x[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, x[0] = e) : e = x[0];
            let _ = (0, p.x)(S.a, e),
                j = (0, p.z)(G.a),
                T = (0, w.ab)() ?? 0,
                {
                    conversationId: E
                } = (0, w.bb)(),
                {
                    search: P,
                    state: A
                } = (0, w.X)(),
                k = (0, p.x)(nO.a, E ?? null),
                M = (0, p.x)(null == E || ej.d, k ?? E ?? ""),
                R = A?.archivedConversationPreview === !0;
            x[1] !== P ? (t = (0, sj.i)(P), x[1] = P, x[2] = t) : t = x[2];
            let O = t;
            x[3] !== R || x[4] !== O || x[5] !== E ? (n = null == E || (0, eN.e)(E) || O || R ? null : E, x[3] = R, x[4] = O, x[5] = E, x[6] = n) : n = x[6];
            let {
                data: N
            } = (0, p.x)(at.chatGptConversationQueryById$, n);
            if (null == E) {
                let e;
                return x[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(w.l, {
                    to: "/",
                    replace: !0
                }), x[7] = e) : e = x[7], e
            }
            x[8] !== k || x[9] !== E ? (o = k ?? (0, eN.d)(E), x[8] = k, x[9] = E, x[10] = o) : o = x[10];
            let B = o,
                F = _.isCapable && !j && !M && null != N;
            x[11] !== b ? (s = e => (b((0, sj.c)(e)), !0), x[11] = b, x[12] = s) : s = x[12];
            let z = s;
            x[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(I.a, {}), l = (0, a.jsx)(tv.a.Surface, {}), x[13] = i, x[14] = l) : (i = x[13], l = x[14]), x[15] !== R ? (c = null, x[15] = R, x[16] = c) : c = x[16], x[17] !== B || x[18] !== R || x[19] !== O ? (d = O || R ? null : (0, a.jsx)(nW.a, {
                conversationId: B
            }), x[17] = B, x[18] = R, x[19] = O, x[20] = d) : d = x[20];
            let L = C ?? (F ? z : null),
                D = `${B}:${O}`;
            x[21] === Symbol.for("react.memo_cache_sentinel") ? (u = void 0, x[21] = u) : u = x[21], x[22] !== B || x[23] !== R || x[24] !== O || x[25] !== D || x[26] !== T ? (h = (0, a.jsx)(sJ, {
                conversationId: B,
                viewActivation: T,
                isArchivedPreview: R,
                isReadOnlyPreview: !1,
                banner: u,
                isTemporaryChat: O,
                sharedConversationId: null
            }, D), x[22] = B, x[23] = R, x[24] = O, x[25] = D, x[26] = T, x[27] = h) : h = x[27], x[28] !== h || x[29] !== L ? (m = (0, a.jsx)(tN.a, {
                value: L,
                children: h
            }), x[28] = h, x[29] = L, x[30] = m) : m = x[30], x[31] !== m || x[32] !== c || x[33] !== d ? (g = (0, a.jsxs)(a.Fragment, {
                children: [i, l, c, d, m]
            }), x[31] = m, x[32] = c, x[33] = d, x[34] = g) : g = x[34];
            let H = g;
            return x[35] !== H ? (f = H, x[35] = H, x[36] = f) : f = x[36], x[37] !== B || x[38] !== f ? (v = (0, a.jsx)(aB.a, {
                conversationId: B,
                children: f
            }), x[37] = B, x[38] = f, x[39] = v) : v = x[39], v
        }

        function sZ() {
            let e, t, n, o = (0, r.c)(7),
                {
                    sharedConversationId: s
                } = (0, w.bb)();
            if (null == s) {
                let e;
                return o[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(w.l, {
                    to: "/",
                    replace: !0
                }), o[0] = e) : e = o[0], e
            }
            o[1] !== s ? (e = (0, eN.d)(s), o[1] = s, o[2] = e) : e = o[2];
            let i = e;
            return o[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(tv.a.Surface, {}), o[3] = t) : t = o[3], o[4] !== i || o[5] !== s ? (n = (0, a.jsxs)(a.Fragment, {
                children: [t, (0, a.jsx)(sJ, {
                    conversationId: i,
                    isTemporaryChat: !1,
                    sharedConversationId: s
                }, s)]
            }), o[4] = i, o[5] = s, o[6] = n) : n = o[6], n
        }

        function sJ(e) {
            let t, n, i, l, c, d, u, x, C, I, S, M, R, F, D, H, W, q, U, K, V, Q, Y, X, en, ea, eo, es, el, ec, ed, eh, ep, em, eg, ef, ev, ey, ex, eb, eC, e_, eI, eT, eE, eP, eA, ek, eM, eR, eO, eB, eG, eF, ez, eL, eD, eH, eW, eq, eU, eK, eZ, eJ, e0, e1, e2, e3, e4, e5, e6, e7, te, ta, tr, to, ts, ti, tl, tc, tu, tg, tf, tv, ty, tx, tb, tC, tw = (0, r.c)(687),
                {
                    conversationId: tS,
                    viewActivation: tA,
                    isArchivedPreview: tk,
                    isInlinePreview: tM,
                    hideModelPicker: tR,
                    disableAutoFocus: tO,
                    hideInitialUserMessage: tN,
                    transcriptPresentation: tV,
                    scrollOrigin: tY,
                    isReadOnlyPreview: t0,
                    onSubmitAccepted: t4,
                    isTemporaryChat: t5,
                    sharedConversationId: t6,
                    sharedPostContinuation: nt,
                    requiredSystemHints: nL,
                    routePattern: nH,
                    composerLeadingContent: nW,
                    header: nU,
                    banner: nK,
                    onRetryMissingConversation: nV,
                    sharedProjectConversation: nQ,
                    workspace: nY
                } = e,
                n$ = void 0 === tA ? 0 : tA,
                nX = void 0 !== tk && tk,
                nZ = void 0 !== tM && tM,
                nJ = (0, p.y)(L.a),
                n0 = (0, y.useContext)(O.a),
                n1 = (0, p.x)(eS.f, n0),
                n2 = (0, p.z)(!!(void 0 !== nt && nt && (0, eS.b)(n1)) && G.a);
            tw[0] !== n0 || tw[1] !== tS ? (t = {
                auth: n0,
                conversationId: tS
            }, tw[0] = n0, tw[1] = tS, tw[2] = t) : t = tw[2];
            let n3 = (0, p.x)(null != n0 && !n0.isLoading && null === n0.authMethod && eS.i, t),
                {
                    conversationId: n4
                } = (0, w.bb)();
            tw[3] !== tS || tw[4] !== nZ || tw[5] !== n4 || tw[6] !== nJ || tw[7] !== nY ? (n = () => (0, eN.e)(nZ || null != nY || null == nJ.get(z.j, tS) ? tS : n4 ?? ""), tw[3] = tS, tw[4] = nZ, tw[5] = n4, tw[6] = nJ, tw[7] = nY, tw[8] = n) : n = tw[8];
            let [n5, n6] = (0, y.useState)(n);
            tw[9] !== n5 || tw[10] !== tS ? (i = () => n5 ? tS : null, tw[9] = n5, tw[10] = tS, tw[11] = i) : i = tw[11];
            let [n8] = (0, y.useState)(i), n7 = null != t6 || null != n1 && !n2;
            tw[12] !== tS || tw[13] !== nX || tw[14] !== nZ || tw[15] !== n7 || tw[16] !== nJ ? (c = () => {
                if (!n7 && !nX && !nZ) return function(e, t) {
                    let n = e.get(nO.a, t) ?? t,
                        a = e.get(ee.b, t),
                        r = e.get(nF, n),
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
                        i = e.get(nv.i),
                        l = s.observedTurn,
                        c = null;

                    function d(t) {
                        for (let n of t.toReversed())
                            if (!s.initialCreationMessageIds.has(n.messageId) && (0, nS.openSpacePageSidePanelTab)(e, n.pageId, {
                                    title: n.title,
                                    openSource: "turn_auto_open"
                                }).opened) {
                                s.openedCreatedPage = !0;
                                break
                            }
                    }
                    let u = e.watch(n => {
                        let {
                            get: a
                        } = n, r = a(z._, t), o = a(nv.i), u = a(z.ab, t);
                        if ((0, z.zb)(r)) {
                            l = !1;
                            let e = a(ee.b, t),
                                n = a(z.bb, t),
                                r = !s.observedTurn || s.attemptId !== e;
                            if (s.attemptId = e, r) {
                                let e = c;
                                c = null, e?.abort(), s.observedTurn = !0, s.activeRequestId = n, s.dismissed = u, s.openedCreatedPage = !1
                            } else s.activeRequestId = n ?? s.activeRequestId, s.dismissed = s.dismissed || u || i && !o;
                            i = o;
                            let h = !u && !s.dismissed && !o && !s.openedCreatedPage && !a(L.j) && !a(z.C, t) && !a(ej.d, t),
                                p = [];
                            if ((r || h) && (p = a(z.P, t) ?? []), r) {
                                s.initialCreationMessageIds = new Set(p.map(e => e.messageId));
                                return
                            }
                            h && d(p);
                            return
                        }
                        if (!s.observedTurn) return;
                        let h = a(z.v, t);
                        if ("idle" !== r || u || null != h && "completed" !== h.result || null != e.get(z.C, t) || e.get(L.j) || e.get(ej.d, t)) {
                            s.observedTurn = !1;
                            return
                        }
                        if (l) {
                            if (s.dismissed || o || s.openedCreatedPage || a(ee.b, t) !== s.attemptId) {
                                s.observedTurn = !1;
                                return
                            }
                            if (h?.result !== "completed") return;
                            d(a(z.P, t) ?? []), s.observedTurn = !s.openedCreatedPage;
                            return
                        }
                        if (s.observedTurn = !1, h?.result !== "completed" || h.requestId !== s.activeRequestId) return;
                        let p = e.get(z.L, t);
                        if (null == p) return;
                        let m = (0, g.b)({
                                mapping: p,
                                current_node: e.get(z.B, t)
                            }),
                            f = m.findLast(nG.b);
                        if (f?.status !== "finished_successfully") return;
                        let v = [...(0, nN.e)(m).outputs, ...m.flatMap(e => (0, nN.c)(e).map(e => e.file))],
                            y = e.get(nk.a, t)?.at(-1);
                        if (y?.turn.status !== "complete") return;
                        let x = [...(0, nx.b)(m), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, ny.a)(e, x, !s.dismissed) || !s.dismissed && !s.openedCreatedPage && (0, nT.a)(e, x)) && !s.dismissed && !o && !s.openedCreatedPage) {
                            for (let t of (0, nj.c)((0, g.e)(f)).toReversed())
                                if ((0, nS.openSpacePageSidePanelTab)(e, t.id, {
                                        openSource: "turn_auto_open",
                                        blockId: t.blockId
                                    }).opened) return;
                            if ((0, nB.canOpenChatGptFilePreview)({
                                    browserPreview: !0
                                })) {
                                for (let n of y.turn.items)
                                    if ("assistant-message" === n.type && n.completed)
                                        for (let [a, r] of n.contentReferences.entries()) {
                                            let o = (0, nM.a)(r),
                                                s = null == o ? null : (0, nb.a)(o),
                                                i = v.find(e => null != e.fileId && e.fileId === (r.file_id ?? r.id) || null != e.libraryFileId && e.libraryFileId === r.library_file_id);
                                            if ("file" !== r.type || !(0, nf.a)(r) || null == o || null == s || !(0, nb.f)(s) || null == i && null == (0, nR.b)(r.sandbox_path) && !(0, nR.b)(r.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > n_.a) continue;
                                            let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                d = (0, nA.b)(r, {
                                                    fileName: o,
                                                    messageId: l
                                                });
                                            if (null == d) continue;
                                            if (e.get(t1.f)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let u = e.get(z.j, t) ?? t,
                                                h = `${l??"message"}:${String(a)}:${o}`,
                                                p = `chatgpt-file:${u}:${h}`,
                                                g = {
                                                    turnId: y.id,
                                                    inputMessageId: m.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: l ?? null
                                                },
                                                f = new AbortController,
                                                x = (0, nB.openChatGptFile)(e, {
                                                    conversationId: u,
                                                    fileName: o,
                                                    gizmoId: e.get(z.R, t),
                                                    sharedConversationId: e.get(z.Y, t),
                                                    target: d,
                                                    tabKey: h,
                                                    browserPreview: !0,
                                                    isAccessBlocked: e => e.get(ej.d, t),
                                                    downloadFallback: !1,
                                                    openSource: "auto_open",
                                                    originatingTurn: g,
                                                    signal: f.signal,
                                                    onOpened: () => {
                                                        let t = e.get(k.j.activeTab$);
                                                        f.signal.aborted || t?.tabId !== p || t.tabType.kind !== nC.a || ((0, eu.a)(e, ng.CodexFileOpened, {
                                                            threadId: u,
                                                            turnId: g.turnId,
                                                            inputMessageId: g.inputMessageId ?? void 0,
                                                            messageId: g.messageId ?? void 0,
                                                            fileExtension: (0, nw.c)(o) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, eu.a)(e, ng.CodexWorkspaceFilePreviewAttempted, (0, nI.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: g,
                                                            path: o,
                                                            threadId: u,
                                                            windowType: "browser"
                                                        })), (0, nE.b)(e, p, "auto_open"))
                                                    },
                                                    onClose: () => f.abort()
                                                });
                                            c = f;
                                            let b = e.watch(e => {
                                                let {
                                                    get: n
                                                } = e;
                                                (n(nv.i) && n(k.j.activeTab$)?.tabId !== p || n(ej.d, t)) && f.abort()
                                            });
                                            x.catch(e => {
                                                f.signal.aborted || nP.a.debug("Automatic ChatGPT artifact preview could not open", {
                                                    safe: {},
                                                    sensitive: {
                                                        error: e
                                                    }
                                                })
                                            }).finally(() => {
                                                b(), c === f && (c = null)
                                            });
                                            return
                                        }
                            }
                        }
                    });
                    return () => {
                        u(), c?.abort(), null != s.attemptId && e.set(nF, n, {
                            ...s,
                            attemptId: s.attemptId
                        })
                    }
                }(nJ, tS)
            }, l = [tS, nX, nZ, n7, nJ], tw[12] = tS, tw[13] = nX, tw[14] = nZ, tw[15] = n7, tw[16] = nJ, tw[17] = l, tw[18] = c) : (l = tw[17], c = tw[18]), (0, y.useEffect)(c, l);
            let aa = (0, p.x)(a6.a, tS),
                ao = n7 ? null : aa;
            tw[19] !== t6 ? (d = () => null == t6 ? null : (0, eN.b)(), tw[19] = t6, tw[20] = d) : d = tw[20];
            let [as] = (0, y.useState)(d), ai = as ?? tS;
            tw[21] !== ai ? (u = (0, t$.o)({
                routeKind: "chatgpt-thread",
                conversationId: ai
            }), tw[21] = ai, tw[22] = u) : u = tw[22];
            let al = null != (0, p.x)(tB.c, u);
            tw[23] !== ai || tw[24] !== nL || tw[25] !== nJ ? (x = () => {
                if (null != nL && 0 !== nL.length) return (0, tn.b)(nJ, ai, nL)
            }, C = [ai, nL, nJ], tw[23] = ai, tw[24] = nL, tw[25] = nJ, tw[26] = x, tw[27] = C) : (x = tw[26], C = tw[27]), (0, y.useEffect)(x, C);
            let ac = (0, y.useRef)(null),
                [ad, au] = (0, y.useState)(null),
                [ah, ap] = (0, y.useState)(null),
                [am, ag] = (0, y.useState)(null),
                af = ah?.activation === n$ ? ah.messageId : null,
                ay = am === n$,
                ax = (0, y.useRef)(null);
            tw[28] === Symbol.for("react.memo_cache_sentinel") ? (I = () => {
                let e = new AbortController;
                return ax.current = e, () => e.abort()
            }, tw[28] = I) : I = tw[28], tw[29] !== n$ ? (S = [n$], tw[29] = n$, tw[30] = S) : S = tw[30], (0, y.useLayoutEffect)(I, S);
            let aw = (0, b.a)(),
                a_ = (0, w.Z)(),
                aI = (0, nn.c)(),
                aj = (0, p.x)(z.j, tS);
            tw[31] !== nJ ? (M = e => {
                (0, nz.c)(nJ, e)
            }, tw[31] = nJ, tw[32] = M) : M = tw[32];
            let aS = (0, y.useEffectEvent)(M);
            tw[33] !== aj || tw[34] !== aS ? (R = () => () => {
                null != aj && aS(aj)
            }, tw[33] = aj, tw[34] = aS, tw[35] = R) : R = tw[35], tw[36] !== aj ? (F = [aj], tw[36] = aj, tw[37] = F) : F = tw[37], (0, y.useEffect)(R, F);
            let aT = (0, p.x)(sb.b, tS),
                aP = (0, p.x)(z.L, tS),
                ak = (0, p.x)(at.chatGptConversationQueryById$, n7 || t5 && null != aP ? null : aj);
            (0, p.x)(n7 ? null : ar.a, aj);
            let aM = (0, p.x)(!n3 && ej.d, tS),
                aR = aj ?? tS,
                aO = (0, p.x)(z.B, tS),
                aN = (0, p.x)(z.x, tS),
                aB = (0, p.x)(z.R, tS),
                aG = (0, p.x)(z.C, tS),
                az = (0, p.x)(z.M, tS),
                aL = (0, p.x)(z._, tS),
                aD = (0, p.x)(z.V, tS),
                aH = (0, p.x)(z.X, tS),
                aW = (0, p.x)(aC.a, tS),
                aq = (0, p.x)(z.D, tS),
                aU = (0, p.x)(z.cb, tS),
                aK = (0, p.x)(z.db, tS),
                aV = (0, p.x)(at.n, t6),
                aQ = (0, y.useRef)(null),
                aY = aV.isSuccess && null != aV.data ? t6 : null;
            tw[38] !== nJ ? (D = e => {
                (0, eu.a)(nJ, o.h, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, tw[38] = nJ, tw[39] = D) : D = tw[39];
            let a$ = (0, y.useEffectEvent)(D);
            tw[40] !== aY || tw[41] !== a$ ? (H = () => {
                null != aY && aQ.current !== aY && (aQ.current = aY, a$(aY))
            }, tw[40] = aY, tw[41] = a$, tw[42] = H) : H = tw[42], tw[43] !== aY ? (W = [aY], tw[43] = aY, tw[44] = W) : W = tw[44], (0, y.useEffect)(H, W);
            let aX = (0, p.x)(e9.o, tS),
                aZ = (0, p.x)(e9.p, tS),
                aJ = (0, p.x)(e9.m, tS),
                a0 = (0, p.x)(e9.q, tS),
                a1 = (0, p.x)(e9.n, tS),
                a4 = (0, p.x)(e9.i, tS),
                a5 = (0, p.x)(z.ab, tS),
                rr = (0, p.x)(e9.z, tS);
            tw[45] !== aL ? (q = (0, z.zb)(aL), tw[45] = aL, tw[46] = q) : q = tw[46];
            let rs = q,
                ri = (0, p.x)(a7, tS),
                rl = (0, p.z)(B.u),
                rc = (0, p.z)(B.r),
                rd = (0, p.z)(B.t),
                ru = (0, p.z)(B.m),
                rh = (0, p.z)(B.n),
                rp = (0, p.z)(tD.pagesEnabled$);
            tw[47] === Symbol.for("react.memo_cache_sentinel") ? (U = (0, e8.a)(), tw[47] = U) : U = tw[47];
            let rm = (0, ei.h)(U);
            tw[48] === Symbol.for("react.memo_cache_sentinel") ? (K = (0, tG.b)(), tw[48] = K) : K = tw[48];
            let rv = (0, ei.h)(K),
                rA = null != aP,
                rk = (0, p.z)(oV.f),
                rM = n7 ? aV : ak;
            n5 && null != rM.data && n6(!1);
            let rR = n5 && rA && null == rM.data,
                rO = rM.isLoading || !rR && rM.isError;
            tw[49] !== ad || tw[50] !== ai || tw[51] !== rO || tw[52] !== n7 || tw[53] !== t5 || tw[54] !== nJ ? (V = (e, t, n, a) => {
                !(e || nJ.get(tQ.a)) && ((0, e9.b)(nJ, ai, t, void 0, n, a), ad?.focus(), n7 || rO || (0, ae.f)(nJ, ai, {
                    isTemporaryChat: t5
                }))
            }, tw[49] = ad, tw[50] = ai, tw[51] = rO, tw[52] = n7, tw[53] = t5, tw[54] = nJ, tw[55] = V) : V = tw[55];
            let rN = V,
                rB = null == n1 ? null : (0, si.a)(n1, tS),
                rF = null == rB ? void 0 : (0, oM.a)(rB),
                rz = rB ?? rM.data,
                rL = aq ? aU : rz?.title,
                rW = (0, p.z)(N.h),
                rq = (0, p.z)(N.g),
                rK = "chatgpt-thread" === nJ.value.routeKind && nJ.value.workSideChat?.conversationId === tS,
                rQ = rz?.conversation_origin ?? aN ?? (null != nY || rK ? "tpp" : null),
                rY = "tpp" === rQ,
                r$ = rY && "denied" === rl.status && "go-plan" === rl.reason,
                rX = (0, p.z)(t2.e),
                rZ = (0, w.X)(),
                rJ = rZ.state;
            (0, p.z)(tZ.b);
            let r0 = (0, p.x)(t1.d, "3901104270") && rJ?.openGoalPlan === !0,
                r1 = (0, y.useContext)(A.c),
                r2 = (0, ne.a)(),
                r3 = r1?.hasPageSurface === !0,
                r4 = "tpp" === rQ || "flora" === rQ,
                r5 = (0, ei.h)("2871250183"),
                r6 = (0, p.z)(!!r4 && B.v),
                r8 = void 0 !== t0 && t0 || r6,
                r7 = null == rX || rX.isFullWidth ? void 0 : rX.width ?? 420,
                r9 = !0 === (0, p.z)(r4 ? null : nc.d),
                oe = (0, p.z)(r4 ? tK.b : tK.a),
                ot = !r4 && oe,
                on = !rv || rh && !r4,
                oa = !n7 && rh && !r4,
                oo = oa && ru,
                os = n7 && rz?.is_read_only === !0 || nQ?.is_read_only === !0;
            tw[56] !== tS || tw[57] !== n7 || tw[58] !== nJ ? (Q = () => null, tw[56] = tS, tw[57] = n7, tw[58] = nJ, tw[59] = Q) : Q = tw[59];
            let [oi] = (0, y.useState)(Q), ol = rz?.gizmo_id ?? aB ?? oi?.gizmoId ?? null, oc = n7 || null == ol || (0, tt.a)(ol) ? null : ol, od = (0, p.x)(s$, ai), ou = (0, av.d)({
                conversation: rz,
                conversationId: tS,
                conversationTitle: aW,
                pathname: rZ.pathname,
                sharedConversationId: t6,
                sharedPost: n1
            }), oh = !rd && null == rz && null == oi, op = null != aj && !aM && !oh && (rd || rc), og = null;
            n7 || (og = null != rz ? (0, or.B)(rz) : (0, tt.a)(aB) ? aB : oi?.projectId ?? null);
            let ov = (0, p.x)(nh.c, n7 ? null : tS),
                oy = n7 || r4 || null != og || ov || null == od ? oc : od.id,
                ox = (0, p.x)(oN.d, {
                    gizmoId: oy,
                    conversationId: ai,
                    visitKey: rZ.pathname
                }),
                o_ = r3 || r4 || null != og || null != oc || ov || t5,
                {
                    data: oI
                } = (0, s.a)({
                    enabled: null != og,
                    queryFn: () => {
                        if (null == og) throw Error("Expected a ChatGPT project id");
                        return (0, eQ.c)(og)
                    },
                    queryKey: (0, or.E)(og ?? ""),
                    staleTime: ew.b.ONE_MINUTE
                }),
                oj = null != og && (oI?.gizmo.share_recipient !== "private" || (oI?.gizmo.sharing?.subjects?.length ?? 0) > 0),
                oT = rz?.context_scopes?.includes("HEALTH") === !0 || oI?.gizmo.gizmo_snorlax_type === "potion",
                oE = (0, oH.a)(rz?.context_scopes, {
                    projectType: oI?.gizmo.gizmo_snorlax_type,
                    projectId: og,
                    lockedProjectId: rk?.projectId
                }),
                oR = aM || oj || oT || oE;
            tw[60] !== oI?.gizmo.display.name ? (Y = oI?.gizmo.display.name.trim() || null, tw[60] = oI?.gizmo.display.name, tw[61] = Y) : Y = tw[61];
            let oB = Y,
                oG = oI?.gizmo.display.theme,
                oF = oI?.gizmo.display.emoji;
            tw[62] !== oI ? (X = "shared" === (0, ro.b)(oI) ? (0, a.jsx)(t_.b, {
                icon: {
                    assets: {
                        16: sQ,
                        20: sY.a
                    }
                }
            }) : void 0, tw[62] = oI, tw[63] = X) : X = tw[63], tw[64] !== oG || tw[65] !== oF || tw[66] !== X ? (en = (0, a.jsx)(tq.a, {
                className: "icon-leading",
                size: "leading",
                color: oG,
                icon: oF,
                sharedIcon: X
            }), tw[64] = oG, tw[65] = oF, tw[66] = X, tw[67] = en) : en = tw[67];
            let oz = en,
                oL = (0, p.x)(z.i, tS),
                oW = oL?.metadata ?? rz?.context_truncation_continuation,
                oU = n7 || t5 || null != nQ || null == rW || rz?.owner?.user_id == null || null == og || rz.owner.user_id === (rq ? rW.split("__")[0] : rW) ? null : (0, ob.d)(og, rz.conversation_id, rz.owner.user_id),
                oQ = (0, p.x)(n7 || nX || r8 ? null : o2.c, tS),
                oY = oQ?.isReviewing === !0,
                o$ = null == oQ ? aP : oQ.conversation.mapping,
                oX = null == oQ ? aO : oQ.conversation.current_node,
                oZ = null == aP ? rz : null,
                oJ = o$ ?? oZ?.mapping,
                o0 = (0, ei.k)();
            tw[68] !== oJ || tw[69] !== o0 ? (ea = function(e, t) {
                if (null != e && Object.values(e).some(e => e?.message != null && (0, oD.b)(e.message))) return () => (0, ei.f)(t, "2347981323").get("enabled", !1)
            }(oJ, o0), tw[68] = oJ, tw[69] = o0, tw[70] = ea) : ea = tw[70];
            let o3 = ea,
                o4 = (0, p.z)(null != o3 ? ns.h : void 0),
                o5 = (0, p.x)(null != o3 && !n7 && !nX && !oY && nr.a, tS),
                o6 = (0, p.z)(o5 ? no.a : void 0);
            tw[71] === Symbol.for("react.memo_cache_sentinel") ? (eo = (0, an.a)(), tw[71] = eo) : eo = tw[71];
            let o8 = eo;
            tw[72] === Symbol.for("react.memo_cache_sentinel") ? (es = new WeakMap, tw[72] = es) : es = tw[72];
            let o7 = es;
            tw[73] !== oe || tw[74] !== ot || tw[75] !== oW || tw[76] !== rQ || tw[77] !== oX || tw[78] !== o$ || tw[79] !== r5 || tw[80] !== o3 || tw[81] !== oZ || tw[82] !== nX || tw[83] !== n7 || tw[84] !== rs || tw[85] !== r4 || tw[86] !== az || tw[87] !== aJ || tw[88] !== a1 || tw[89] !== aX || tw[90] !== aZ || tw[91] !== a0 || tw[92] !== oY || tw[93] !== nJ.get || tw[94] !== oQ?.isEntering || tw[95] !== aT || tw[96] !== aL || tw[97] !== o6 || tw[98] !== o4 ? (el = () => o8({
                conversation: oZ,
                contextContinuation: oW,
                clinicalSearchEnabled: ot,
                clinicalCitationsEnabled: oe,
                enableCloudBrowserActivity: r5,
                conversationOrigin: rQ,
                enableVoiceImageLoadingFix: o3,
                voiceImageSessionId: o4,
                voiceImageGenerationSpawnIds: o6,
                enableImageGenerationLoadingState: !n7 && !nX && !oY && "error" !== aL,
                getRenderTelemetry: e => (0, sH.c)(nJ.get, e),
                isWorkConversation: r4,
                isStreaming: !n7 && !nX && !oY && rs,
                mode: "conversation",
                mcpResponseCache: o7,
                moderationDisclaimersByMessageId: az,
                streamingOrders: aT,
                pendingSubmission: null == aX || n7 || oY || oQ?.isEntering ? null : {
                    attachments: aJ,
                    commentAttachments: a1,
                    prompt: aX,
                    renderMarkdown: aZ,
                    selectedTextAttachments: a0
                },
                threadCurrentNode: oX,
                threadMapping: o$
            }), tw[73] = oe, tw[74] = ot, tw[75] = oW, tw[76] = rQ, tw[77] = oX, tw[78] = o$, tw[79] = r5, tw[80] = o3, tw[81] = oZ, tw[82] = nX, tw[83] = n7, tw[84] = rs, tw[85] = r4, tw[86] = az, tw[87] = aJ, tw[88] = a1, tw[89] = aX, tw[90] = aZ, tw[91] = a0, tw[92] = oY, tw[93] = nJ.get, tw[94] = oQ?.isEntering, tw[95] = aT, tw[96] = aL, tw[97] = o6, tw[98] = o4, tw[99] = el) : el = tw[99], oQ?.isEntering, tw[100] !== el ? (ec = el(), tw[100] = el, tw[101] = ec) : ec = tw[101];
            let {
                isConversationEmpty: o9,
                renderedConversation: se,
                renderedTurns: st,
                showPendingLoadingMessage: sn
            } = ec;
            tw[102] !== nZ || tw[103] !== r4 || tw[104] !== se || tw[105] !== nJ ? (ed = () => {
                if (!nZ && r4) return nJ.set(sV.b, se), () => {
                    nJ.get(sV.b) === se && nJ.set(sV.b, null)
                }
            }, eh = [nZ, r4, se, nJ], tw[102] = nZ, tw[103] = r4, tw[104] = se, tw[105] = nJ, tw[106] = ed, tw[107] = eh) : (ed = tw[106], eh = tw[107]), (0, y.useEffect)(ed, eh);
            let sa = (0, p.x)(np.g, tS),
                sr = sn && null == sa,
                ss = !r4 && !n7 && !nZ && !nX,
                sc = (0, p.x)(ot || nZ || n7 ? null : J.a, tS),
                sd = (sc?.length ?? 0) > 0,
                su = (0, p.x)(ss ? ee.b : null, tS),
                sh = JSON.stringify([tS, n$]),
                sp = (0, p.x)(n7 || nZ ? null : sL, tS),
                [sm, sg] = (0, y.useState)(null),
                sv = function(e, t) {
                    let {
                        conversation: n,
                        completionAttemptId: a,
                        allowAutoOpen: r = !0,
                        suppressAutoOpen: o = !1,
                        isTurnActive: s,
                        isPendingUserTurn: i,
                        hasGoal: l = !1,
                        visitKey: c
                    } = t;
                    if (e?.visitKey === c && e.conversation === n && e.completionAttemptId === a && e.allowAutoOpen === r && e.suppressAutoOpen === o && e.isTurnActive === s && e.isPendingUserTurn === i && e.hasGoal === l) return e;
                    let d = null == n ? [] : (0, g.b)(n, eY.k),
                        u = null == e || e.visitKey !== c,
                        h = d.find(eY.k)?.id ?? (u || i ? null : e.userMessageId),
                        p = i ? null : d.findLast(e$)?.id ?? null,
                        m = !u && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != h && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== h),
                        f = new Set(u ? [] : e.observedSummaryRequestIds),
                        v = !u && !m && e.hasConsumedSummaryRequest,
                        y = !v && !u && null != e.conversation && (s || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != p && !f.has(p);
                    if (null != n && (u || null == e.conversation || !s))
                        for (let e of Object.values(n.mapping)) e?.message?.id != null && e$(e.message) && f.add(e.message.id);
                    else null != p && f.add(p);
                    return {
                        visitKey: c,
                        conversation: n,
                        completionAttemptId: a,
                        allowAutoOpen: r,
                        suppressAutoOpen: o,
                        isTurnActive: s,
                        isPendingUserTurn: i,
                        hasGoal: l,
                        observedSummaryRequestIds: f,
                        userMessageId: h,
                        hasConsumedSummaryRequest: v || null != p,
                        isOpen: o ? !u && e.suppressAutoOpen && e.isOpen : r && (l && (u || !e.hasGoal) || y) || !u && (!m || l) && (!e.hasGoal || l) && e.isOpen,
                        shouldPreventAutoFocus: u || m || l && !e.hasGoal || y && !e.isOpen || e.shouldPreventAutoFocus
                    }
                }(sm, {
                    completionAttemptId: su,
                    allowAutoOpen: !(0, tP.a)("(width < 768px)"),
                    suppressAutoOpen: (sp ?? !1) || r0,
                    conversation: ss && (rR || !rO) ? se : null,
                    isTurnActive: rs,
                    hasGoal: sd,
                    isPendingUserTurn: a4 && null != aX && !rs,
                    visitKey: sh
                });
            sv !== sm && sg(sv);
            let sy = null == nY && !sp && !ot && !nZ && !n7 && (rY || ss) && !nX,
                sx = sy && se?.mapping === aP && se?.current_node === aO,
                sC = (0, p.x)(sx ? z.p : null, tS),
                sw = se?.mapping,
                s_ = se?.current_node;
            tw[108] !== sw || tw[109] !== s_ ? (ep = h()(() => {
                let e = null == sw ? [] : (0, g.a)({
                    mapping: sw,
                    current_node: s_
                });
                return {
                    messages: e,
                    resources: (0, nN.e)(e)
                }
            }), tw[108] = sw, tw[109] = s_, tw[110] = ep) : ep = tw[110];
            let sI = ep;
            tw[111] !== ss || tw[112] !== a4 || tw[113] !== sy || tw[114] !== rs || tw[115] !== rp || tw[116] !== aJ || tw[117] !== sI || tw[118] !== st || tw[119] !== sC ? (em = sy ? h()(() => (function(e) {
                var t;
                let n, a, {
                        automationReferences: r,
                        includePages: o = !1,
                        includeSources: s = !0,
                        messages: i,
                        pendingAttachments: l = [],
                        resources: c = (0, nN.e)(i),
                        turns: d,
                        isTurnActive: u = d.at(-1)?.turn.status === "in_progress"
                    } = e,
                    h = [...c.inputs],
                    p = s ? (0, rj.a)(i, d) : [],
                    m = new Map,
                    f = new Map,
                    v = (t = i, -1 !== (n = ry()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, rE.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    y = [],
                    x = new Map(i.map(e => [(0, g.g)(e), e])),
                    b = ry()(i, e => "user" === e.author.role),
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
                    if (s && "complete" === t.status)
                        for (let n of t.messageIds) {
                            let t = x.get(n);
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, rI.j)(t.metadata) && y.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, rI.c)(t.metadata)
                            })
                        }
                    for (let n of rP(t.items)) {
                        if (o && "mcp-tool-call" === n.type) {
                            let e = (0, rw.b)(n);
                            if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                let t = (0, rx.d)(e.url);
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
                            for (let e of (0, nj.c)(n.content)) f.has(e.id) || f.set(e.id, {
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
                let w = (0, rb.b)(d.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return rP(t.items).filter(e => "mcp-tool-call" === e.type)
                })).at(-1);
                return a = null == w ? [...c.outputs, ...f.values(), ...m.values()] : [{
                    ...w,
                    key: `site:${w.projectId}`,
                    kind: "site"
                }, ...c.outputs.filter(e => null == w.archivePath || ! function(e, t) {
                    if (null != e.sandboxPath) return e.sandboxPath === t;
                    let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != n && e.name.toLowerCase() === n
                }(e, w.archivePath)), ...f.values(), ...m.values()], {
                    automationIds: (0, r_.b)(i, r ?? void 0),
                    browserScreenshots: (0, rS.d)(i),
                    inputs: h,
                    sourceTurns: y,
                    outputs: a,
                    progressSteps: C,
                    isPlanSummaryUpdating: u && i.slice(b + 1).some(e => "assistant" === e.author.role && r_.a.test(e.recipient ?? "") || "tool" === e.author.role && r_.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${d.at(-1)?.id??""}:${u}`,
                    sources: s ? [...Array.from(new Map(i.filter(e => "user" === e.author.role).flatMap(e => (0, rC.a)((0, g.e)(e))).map(e => [e.projectId, e])).values(), e => ({
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
                    subagents: (0, rT.a)(i, {
                        isTurnLive: d.at(-1)?.turn.status === "in_progress"
                    })?.subagents ?? []
                }
            })({
                automationReferences: sC,
                includePages: rp,
                includeSources: !ss,
                isTurnActive: rs || a4,
                ...sI(),
                pendingAttachments: a4 ? aJ : [],
                turns: st
            })) : null, eg = ss ? em?.() : null, tw[111] = ss, tw[112] = a4, tw[113] = sy, tw[114] = rs, tw[115] = rp, tw[116] = aJ, tw[117] = sI, tw[118] = st, tw[119] = sC, tw[120] = em, tw[121] = eg) : (em = tw[120], eg = tw[121]);
            let sS = eg,
                sT = sd || null != sS && (sS.outputs.length > 0 || sS.progressSteps.length > 0 || sS.automationIds.length > 0 || sS.subagents.length > 0 || !aM && sS.browserScreenshots.length > 0),
                sE = sy && (!ss || sT),
                sP = sE && null == rX,
                sA = JSON.stringify([sh, null != rX]),
                sM = ss ? sv.isOpen : void 0,
                sR = sE && !rX?.isFullWidth;
            tw[122] !== r7 || tw[123] !== sA || tw[124] !== sM || tw[125] !== sR ? (ef = {
                contentShiftResetKey: sA,
                controlledIsOpen: sM,
                isEnabled: sR,
                floatingPanelWidth: r7
            }, tw[122] = r7, tw[123] = sA, tw[124] = sM, tw[125] = sR, tw[126] = ef) : ef = tw[126];
            let sO = (0, t7.a)(ef),
                sN = aj ?? tS,
                sB = rY && null == aK,
                sG = aG ?? rr,
                sF = rM.isLoading && !rA,
                sz = rM.isError && !rR;
            tw[127] !== rM.error || tw[128] !== nZ ? (ev = nZ || (0, ni.e)(rM.error) || !(rM.error instanceof ni.a && [401, 403, 404].includes(rM.error.status)), tw[127] = rM.error, tw[128] = nZ, tw[129] = ev) : ev = tw[129];
            let sD = ev;
            tw[130] !== rM.error || tw[131] !== tS || tw[132] !== sz || tw[133] !== nZ || tw[134] !== nJ || tw[135] !== t6 ? (ey = () => {
                sz && !nZ && tH.a.loadFailed(nJ, tS, t6, rM.error)
            }, ex = [rM.error, tS, sz, nZ, nJ, t6], tw[130] = rM.error, tw[131] = tS, tw[132] = sz, tw[133] = nZ, tw[134] = nJ, tw[135] = t6, tw[136] = ey, tw[137] = ex) : (ey = tw[136], ex = tw[137]), (0, y.useEffect)(ey, ex), tw[138] !== tS || tw[139] !== n7 || tw[140] !== aj ? (eb = null, n7 || (eb = aj ?? ((0, eN.e)(tS) ? null : tS)), tw[138] = tS, tw[139] = n7, tw[140] = aj, tw[141] = eb) : eb = tw[141], tw[142] !== af || tw[143] !== rz || tw[144] !== rQ || tw[145] !== aw || tw[146] !== t5 || tw[147] !== r4 || tw[148] !== r$ || tw[149] !== a_ || tw[150] !== eb || tw[151] !== nH || tw[152] !== nJ || tw[153] !== n$ ? (eC = (e, t) => {
                let n = void 0 !== t && t;
                if (null == eb || null != af || r$) return;
                let a = ax.current?.signal;
                null == a || a.aborted || (ap({
                    messageId: e,
                    activation: n$
                }), (0, z.h)(nJ, {
                    conversationId: eb,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, nd.a)(nJ, "opened"), a_(null == nH ? (0, sj.c)(t, {
                        isTemporaryChat: t5
                    }) : (0, w.C)(nH, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, nd.a)(nJ, "failed"), ap(null), nJ.get(er.f).danger(aw.formatMessage({
                        id: "chatgptConversations.branchFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot continue a conversation in a new chat"
                    }), {
                        errorAnalytics: {
                            toastId: "branch_conversation_failed",
                            operation: "branch_conversation",
                            errorCategory: "conversation",
                            conversationId: eb ?? void 0,
                            retryable: !0,
                            userFacingError: {
                                surface: (0, aE.b)(null == rQ && null == rz ? null : r4),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, tw[142] = af, tw[143] = rz, tw[144] = rQ, tw[145] = aw, tw[146] = t5, tw[147] = r4, tw[148] = r$, tw[149] = a_, tw[150] = eb, tw[151] = nH, tw[152] = nJ, tw[153] = n$, tw[154] = eC) : eC = tw[154];
            let sW = (0, na.a)(eC);
            tw[155] !== rz || tw[156] !== tS || tw[157] !== rQ || tw[158] !== aw || tw[159] !== r9 || tw[160] !== t5 || tw[161] !== r4 || tw[162] !== nJ || tw[163] !== aj ? (e_ = async (e, t, n, a) => {
                if (!r9) try {
                    await async function(e, t) {
                        let {
                            conversationId: n,
                            isTemporaryChat: a = !1,
                            messageId: r,
                            prompt: o,
                            renderFormat: s,
                            inlineSystemHints: i
                        } = t;
                        if (e.get(e9.i, n)) throw new a3.a("edit_message_busy", "The chat is busy.");
                        let l = e.get(z.x, n);
                        if ("tpp" === l) throw new a3.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                        if (!e.get(a7, n)) throw new a3.a("edit_message_busy", "The chat is busy.");
                        let c = e.get(a2.b, {
                            conversationId: n,
                            messageId: r
                        });
                        if (null == c) throw new a3.a("edit_message_target_unavailable", "The user message could not be edited.");
                        let {
                            selectedModel: d
                        } = c, u = o.trim(), h = (0, a2.c)(c.message, e.get, i), p = (0, a8.c)({
                            message: c.message,
                            prompt: u,
                            renderFormat: s,
                            systemHints: h,
                            inlineSystemHints: i
                        }), m = (0, f.f)(p.message.metadata), g = p.message.content, v = "multimodal_text" === g.content_type && g.parts.some(e => "string" != typeof e);
                        if (0 === u.length && 0 === m.length && !v) throw new a3.a("edit_message_empty", "The edited message cannot be empty.");
                        if (e.get(t1.d, "3574573347")) {
                            let t = e.get(a2.a, n);
                            t?.messageId === r && t.prompt === o && aF()((0, a2.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(a2.a, n, {
                                messageId: r,
                                prompt: o,
                                isTemporaryChat: a,
                                inlineSystemHints: i
                            }), (0, ae.f)(e, n, {
                                isTemporaryChat: a
                            }))
                        }
                        let y = a9(e.get, n),
                            x = y.request.current,
                            b = () => a9(e.get, n).request.current === x && aF()(e.get(a2.b, {
                                conversationId: n,
                                messageId: r
                            }), c) && !(0, z.zb)(e.get(z._, n));
                        e.set(e9.i, n, !0);
                        try {
                            if ("flora" !== l && null != x && null == e.get(y.session$) && null == e.get(a6.a, n) && (await x.stop(), await x.closed), !b()) throw new a3.a("edit_message_target_unavailable", "The edited message or active response changed.");
                            await (0, a8.submitChatGPTCompletion)(e, {
                                isSubmissionCurrent: b,
                                isRequestCurrent: () => e.get(z.B, n) === p.message.id,
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
                            e.set(e9.i, n, !1)
                        }
                    }(nJ, {
                        conversationId: tS,
                        isTemporaryChat: t5,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, aE.c)(t);
                    throw nJ.get(er.f).danger(aw.formatMessage({
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
                                surface: (0, aE.b)(null == rQ && null == rz ? null : r4),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, tw[155] = rz, tw[156] = tS, tw[157] = rQ, tw[158] = aw, tw[159] = r9, tw[160] = t5, tw[161] = r4, tw[162] = nJ, tw[163] = aj, tw[164] = e_) : e_ = tw[164];
            let sU = (0, na.a)(e_);
            tw[165] !== ai || tw[166] !== rz || tw[167] !== tS || tw[168] !== rQ || tw[169] !== aw || tw[170] !== r9 || tw[171] !== t5 || tw[172] !== r4 || tw[173] !== r$ || tw[174] !== a_ || tw[175] !== nV || tw[176] !== nJ || tw[177] !== aj ? (eI = async (e, t) => {
                if (!r9 && !r$) try {
                    let n = nJ.get(aA.d, tS);
                    if (n?.startsNewWorkConversation || null == nJ.get(z.j, tS) || (0, nm.j)(nJ.get(z.T, tS)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, g.e)(n.prompt),
                            r = (0, eV.i)(n.prompt.metadata, a, (0, f.e)(n.prompt.metadata), (0, v.w)(a)),
                            o = (0, eX.a)(n.prompt, a, r),
                            s = nJ.get(e9.s, ai),
                            i = "markdown" === o.renderFormat ? o.message : a,
                            l = s.length > 0 ? s : i,
                            c = s.length > 0 ? void 0 : o.renderFormat ?? "plain";
                        if (null != nV) return void await nV(l, c);
                        if (null == nJ.get(z.j, tS) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, tU.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${tS}`;
                            (0, th.E)(t, (t, n) => n ? t : e) || (0, e9.U)(nJ, tS, e), (0, th.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, g.i)((0, g.r)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, v.w)(a);
                            (0, tp.m)(nJ, "work"), await a_("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: s.length > 0 ? s : t,
                                    prefillPromptFormat: s.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (r4 && !t5 && (0, td.fb)(nJ, (0, tj.b)({
                                entrypoint: "home"
                            }))) return void await a_("/");
                        let d = (0, g.k)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, ra.g)(nJ, d);
                        (0, e9.V)(nJ, u, t.model);
                        let h = nJ.get(z.R, tS);
                        (0, tp.m)(nJ, r4 ? "work" : "chat"), await a_({
                            pathname: "/",
                            search: (0, sj.e)("", t5)
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
                    await (0, aA.g)(nJ, {
                        conversationId: tS,
                        isTemporaryChat: t5,
                        messageId: e,
                        retry: r4 && "error_retry" === t.source && null == t.model.thinkingEffort ? {
                            ...t,
                            model: nJ.get(e9.t, tS)
                        } : t
                    })
                } catch {
                    nJ.get(er.f).danger(aw.formatMessage({
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
                                surface: (0, aE.b)(null == rQ && null == rz ? null : r4),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, tw[165] = ai, tw[166] = rz, tw[167] = tS, tw[168] = rQ, tw[169] = aw, tw[170] = r9, tw[171] = t5, tw[172] = r4, tw[173] = r$, tw[174] = a_, tw[175] = nV, tw[176] = nJ, tw[177] = aj, tw[178] = eI) : eI = tw[178];
            let sX = (0, na.a)(eI);
            tw[179] !== rz || tw[180] !== tS || tw[181] !== aW || tw[182] !== aw || tw[183] !== ay || tw[184] !== t5 || tw[185] !== a_ || tw[186] !== aI || tw[187] !== og || tw[188] !== nJ || tw[189] !== aj || tw[190] !== oi || tw[191] !== n$ ? (eT = () => {
                if (ay || null == aj) return;
                let e = nJ.get(B.t);
                if (!e && !nJ.get(B.r) || !e && null == rz && null == oi) return;
                let t = ax.current?.signal;
                null == t || t.aborted || (ag(n$), (e ? (0, nD.f)(nJ, {
                    chatGptThreadId: tS,
                    conversationTitle: aW
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, E.a)(nJ, e);
                    if ("created" === e.status) return null == n || t.aborted || nJ.get(er.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, E.a)(nJ, e)
                }) : (0, j.a)({
                    scope: nJ,
                    projectId: og ?? void 0,
                    prompt: `Continuing from ${(0,tm.f)({conversationId:aj,title:aW?.trim()||"ChatGPT thread"})}`
                }).then(s5)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? aI(n) : a_((0, sj.c)(n, {
                            isTemporaryChat: t5
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (ag(null), nJ.get(er.f).danger(aw.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot hand off a conversation to a task"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, tw[179] = rz, tw[180] = tS, tw[181] = aW, tw[182] = aw, tw[183] = ay, tw[184] = t5, tw[185] = a_, tw[186] = aI, tw[187] = og, tw[188] = nJ, tw[189] = aj, tw[190] = oi, tw[191] = n$, tw[192] = eT) : eT = tw[192];
            let sZ = eT;
            tw[193] !== tS || tw[194] !== a_ || tw[195] !== nJ || tw[196] !== as || tw[197] !== t6 || tw[198] !== n1 ? (eE = () => {
                if (null != n1) {
                    if ((0, eN.e)(tS)) {
                        let e = (0, eS.a)(nJ, n1, tS);
                        null != e && a_((0, sj.c)(e))
                    }
                    return
                }
                let e = nJ.query.getData(at.n, t6);
                null != e && null != t6 && null != as && ((0, z.mb)(nJ, {
                    conversation: e,
                    conversationId: as,
                    sharedConversationId: t6
                }), a_((0, sj.c)(as)))
            }, tw[193] = tS, tw[194] = a_, tw[195] = nJ, tw[196] = as, tw[197] = t6, tw[198] = n1, tw[199] = eE) : eE = tw[199];
            let sJ = (0, na.a)(eE);
            tw[200] !== nY ? (eP = nY?.mcpAppContext == null ? null : {
                hostId: tX.a,
                server: "codex_apps",
                connectorId: nY.mcpAppContext.id
            }, tw[200] = nY, tw[201] = eP) : eP = tw[201];
            let s8 = (0, p.x)(tL.b, eP),
                s7 = nY?.fullscreenContent != null ? "content" : "workspace",
                s9 = (0, Z.a)(nZ ? "embedded" : s7),
                ie = !s8 && (rR || !rM.isError) && !nX && !r8 && (null == n1 || n0?.authMethod === "chatgpt" || n2) && (!n7 || null != rz),
                it = r8 || os || oo || r$,
                ia = it || oY || oQ?.needsEntry === !0;
            if (oY) {
                let e;
                tw[202] !== aw ? (e = aw.formatMessage(o2.d.readOnlyPlaceholder), tw[202] = aw, tw[203] = e) : e = tw[203], eA = e
            } else !it && oQ?.needsEntry && (eA = !1);
            let ir = ie && !it && !n7 && !rO && !r9 && !rs && !a4 && !a5 && !ox,
                io = !ie || n7 || ia || rO ? null : ad;
            if (tw[204] !== ox || tw[205] !== af || tw[206] !== oe || tw[207] !== ot || tw[208] !== rz?.current_node || tw[209] !== tS || tw[210] !== oc || tw[211] !== r5 || tw[212] !== sG || tw[213] !== sW || tw[214] !== sU || tw[215] !== sX || tw[216] !== tN || tw[217] !== nX || tw[218] !== ia || tw[219] !== rO || tw[220] !== oR || tw[221] !== r8 || tw[222] !== n7 || tw[223] !== a4 || tw[224] !== t5 || tw[225] !== rY || tw[226] !== rs || tw[227] !== r4 || tw[228] !== oo || tw[229] !== r$ || tw[230] !== ao || tw[231] !== aJ || tw[232] !== eb || tw[233] !== se || tw[234] !== st || tw[235] !== oY || tw[236] !== aD || tw[237] !== nJ.get || tw[238] !== aH || tw[239] !== rB?.current_node || tw[240] !== nQ || tw[241] !== ie || tw[242] !== sr || tw[243] !== aT || tw[244] !== ri) {
                let e = (0, an.c)({
                    paragen: ao,
                    hideInitialUserMessage: tN,
                    browserConversationId: void 0,
                    conversationId: tS,
                    enableCloudBrowserActivity: r5,
                    errorMessage: sG,
                    branchingMessageId: af,
                    isReadOnly: nX || r8 || n7 || null != nQ,
                    isTemporaryChat: t5,
                    isWorkConversation: rY,
                    onRegenerateResponse: ox || n7 || null != nQ || nX || r8 || oo || r$ || rs || a4 ? void 0 : sX,
                    onEditUserMessage: ox || null == eb || rY || nX || r8 || oo || !ri || a4 ? void 0 : sU,
                    onFork: null == eb || t5 || oo || r$ || nX || r8 ? void 0 : sW,
                    pendingSubmissionAttachments: aJ,
                    shareEnabled: null == oc && !t5 && !n7 && !nX && !r8 && !oR,
                    readAloudEnabled: !n7 && !r8,
                    feedbackEnabled: !n7 && !r8 && null == nQ,
                    renderedTurns: oY || null == ao || null == se ? st : (0, n9.a)({
                        ...se,
                        current_node: ao.promptMessageId
                    }, {
                        clinicalSearchEnabled: ot,
                        clinicalCitationsEnabled: oe,
                        enableCloudBrowserActivity: r5,
                        streamingOrders: aT,
                        isWorkConversation: r4,
                        getRenderTelemetry: e => (0, sH.c)(nJ.get, e)
                    }),
                    safetyReview: aD,
                    sharedConversationLastMessageId: rB?.current_node ?? aH ?? (n7 ? rz?.current_node : null),
                    showPendingLoadingMessage: sr,
                    showRequestUserInputStatus: ie && !ia && !rO
                });
                ek = oY ? (0, o2.a)(e) : e, tw[204] = ox, tw[205] = af, tw[206] = oe, tw[207] = ot, tw[208] = rz?.current_node, tw[209] = tS, tw[210] = oc, tw[211] = r5, tw[212] = sG, tw[213] = sW, tw[214] = sU, tw[215] = sX, tw[216] = tN, tw[217] = nX, tw[218] = ia, tw[219] = rO, tw[220] = oR, tw[221] = r8, tw[222] = n7, tw[223] = a4, tw[224] = t5, tw[225] = rY, tw[226] = rs, tw[227] = r4, tw[228] = oo, tw[229] = r$, tw[230] = ao, tw[231] = aJ, tw[232] = eb, tw[233] = se, tw[234] = st, tw[235] = oY, tw[236] = aD, tw[237] = nJ.get, tw[238] = aH, tw[239] = rB?.current_node, tw[240] = nQ, tw[241] = ie, tw[242] = sr, tw[243] = aT, tw[244] = ri, tw[245] = ek
            } else ek = tw[245];
            let is = ek;
            tw[246] !== aw ? (eM = aw.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation",
                description: "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop"
            }), tw[246] = aw, tw[247] = eM) : eM = tw[247];
            let ii = eM;
            tw[248] !== nX || tw[249] !== n7 || tw[250] !== rL || tw[251] !== nJ || tw[252] !== aj ? (eR = n7 || nX || null == aj ? void 0 : e => {
                (0, or.R)({
                    scope: nJ,
                    conversationId: aj,
                    previousTitle: rL,
                    title: e
                })
            }, tw[248] = nX, tw[249] = n7, tw[250] = rL, tw[251] = nJ, tw[252] = aj, tw[253] = eR) : eR = tw[253];
            let il = aq || null != rz ? rL ?? "" : null;
            tw[254] !== aW || tw[255] !== eR || tw[256] !== il ? (eO = (0, a.jsx)(t8.a, {
                className: "max-w-[320px]",
                variant: "flush-start",
                onRename: eR,
                title: aW,
                titleValue: il
            }), tw[254] = aW, tw[255] = eR, tw[256] = il, tw[257] = eO) : eO = tw[257];
            let ic = eO,
                id = r4 || r3 ? ic : null;
            if (null != oc) {
                let e;
                tw[258] !== tS || tw[259] !== oc ? (e = (0, a.jsx)(rn.ChatGptGizmoHeader, {
                    conversationId: tS,
                    gizmoId: oc
                }), tw[258] = tS, tw[259] = oc, tw[260] = e) : e = tw[260], id = e
            } else null != rz || null != oi || rA || (id = null);
            tw[261] !== nX || tw[262] !== n7 || tw[263] !== rY ? (eB = !rY || n7 || nX ? null : (0, a.jsx)(tT.a, {
                hostId: tX.a
            }), tw[261] = nX, tw[262] = n7, tw[263] = rY, tw[264] = eB) : eB = tw[264];
            let iu = eB;
            tw[265] !== r4 || tw[266] !== oI || tw[267] !== og ? (eG = null == og || r4 ? null : (0, a.jsx)(oC, {
                allowsThreadContentOverlap: !0,
                project: oI
            }), tw[265] = r4, tw[266] = oI, tw[267] = og, tw[268] = eG) : eG = tw[268];
            let ih = eG;
            tw[269] !== ih || tw[270] !== id || tw[271] !== tS || tw[272] !== nU || tw[273] !== nX || tw[274] !== sB || tw[275] !== n7 || tw[276] !== t5 || tw[277] !== iu || tw[278] !== oz || tw[279] !== og || tw[280] !== oB || tw[281] !== o_ ? (eF = o_ ? (0, a.jsx)(ow.a, {
                isTemporaryChat: t5,
                isCloudTask: sB && !n7 && !nX,
                breadcrumbHeader: nU ?? ih,
                project: null == og ? void 0 : {
                    icon: oz,
                    name: oB
                },
                start: nU ?? (n7 ? id : (0, a.jsx)(nu.BusinessAgentConversationHeader, {
                    conversationId: tS,
                    fallback: id
                })),
                startActions: iu
            }) : null, tw[269] = ih, tw[270] = id, tw[271] = tS, tw[272] = nU, tw[273] = nX, tw[274] = sB, tw[275] = n7, tw[276] = t5, tw[277] = iu, tw[278] = oz, tw[279] = og, tw[280] = oB, tw[281] = o_, tw[282] = eF) : eF = tw[282];
            let ip = eF,
                im = !n7 && null == nQ && !nX && !t5 && !aM,
                ig = (0, p.x)(im ? rU.a : null, tS);
            tw[283] !== tS || tw[284] !== ig ? (ez = null != ig ? (0, a.jsx)(oq, {
                conversationId: tS
            }) : null, tw[283] = tS, tw[284] = ig, tw[285] = ez) : ez = tw[285];
            let iv = ez;
            tw[286] !== ir || tw[287] !== tS || tw[288] !== r9 || tw[289] !== oQ ? (eL = null != oQ ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: r9,
                children: (0, a.jsx)(ok, {
                    conversationId: tS,
                    placement: "progress",
                    canStartSection: ir
                })
            }) : null, tw[286] = ir, tw[287] = tS, tw[288] = r9, tw[289] = oQ, tw[290] = eL) : eL = tw[290];
            let iy = eL;
            if (tw[291] !== rM || tw[292] !== n0?.authMethod || tw[293] !== ox || tw[294] !== nK || tw[295] !== on || tw[296] !== op || tw[297] !== sD || tw[298] !== ir || tw[299] !== ai || tw[300] !== oy || tw[301] !== nW || tw[302] !== rz || tw[303] !== ip || tw[304] !== tS || tw[305] !== ii || tw[306] !== rQ || tw[307] !== aW || tw[308] !== iv || tw[309] !== sv || tw[310] !== tO || tw[311] !== sG || tw[312] !== rX || tw[313] !== r7 || tw[314] !== em || tw[315] !== ol || tw[316] !== rN || tw[317] !== sZ || tw[318] !== sJ || tw[319] !== sz || tw[320] !== rA || tw[321] !== tR || tw[322] !== n8 || tw[323] !== nX || tw[324] !== ss || tw[325] !== ia || tw[326] !== o9 || tw[327] !== rO || tw[328] !== sF || tw[329] !== al || tw[330] !== ay || tw[331] !== oT || tw[332] !== nZ || tw[333] !== oE || tw[334] !== s8 || tw[335] !== rm || tw[336] !== r9 || tw[337] !== r8 || tw[338] !== r2 || !1 !== tw[339] || tw[340] !== n7 || tw[341] !== os || tw[342] !== a5 || tw[343] !== a4 || tw[344] !== t5 || tw[345] !== rY || tw[346] !== rs || tw[347] !== r4 || tw[348] !== oa || tw[349] !== ru || tw[350] !== oo || tw[351] !== r$ || tw[352] !== rK || tw[353] !== rZ.pathname || tw[354] !== rk || tw[355] !== rJ?.sidebarAutomationId || tw[356] !== t4 || tw[357] !== r0 || tw[358] !== oI || tw[359] !== oz || tw[360] !== og || tw[361] !== oB || tw[362] !== eA || tw[363] !== ou || tw[364] !== se || tw[365] !== st || tw[366] !== nL || tw[367] !== oY || tw[368] !== s9 || tw[369] !== rL || tw[370] !== nJ || tw[371] !== tY || tw[372] !== aR || tw[373] !== oQ || tw[374] !== iy || tw[375] !== aj || tw[376] !== sg || tw[377] !== t6 || tw[378] !== n1 || tw[379] !== rF || tw[380] !== nQ || tw[381] !== oU || tw[382] !== aM || tw[383] !== im || tw[384] !== sP || tw[385] !== ie || tw[386] !== sr || tw[387] !== io || tw[388] !== sN || tw[389] !== sO || tw[390] !== aO || tw[391] !== tV || tw[392] !== is || tw[393] !== nY) {
                tu = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, n, r, o, s, i, l, c, d, u, h, p, f = st.flatMap(s4).flatMap(s3),
                        v = f.flatMap(s2);
                    if (!n7 && (rM.error instanceof ni.a && 423 === rM.error.status || oE && null == rk)) {
                        let e;
                        tw[419] !== rM || tw[420] !== tS || tw[421] !== nJ ? (e = (0, a.jsx)(oK.a, {
                            onUnlocked: () => {
                                (0, oV.g)(nJ.get(oV.f)?.projectId, [tS]), rM.refetch()
                            }
                        }), tw[419] = rM, tw[420] = tS, tw[421] = nJ, tw[422] = e) : e = tw[422], tu = e;
                        break e
                    }
                    if (null != oU) {
                        let e;
                        tw[423] !== oU ? (e = (0, a.jsx)(w.l, {
                            replace: !0,
                            to: oU
                        }), tw[423] = oU, tw[424] = e) : e = tw[424], tu = e;
                        break e
                    }
                    eW = o1,
                    tw[425] !== rz || tw[426] !== rA || tw[427] !== nX || tw[428] !== sF || tw[429] !== nZ || tw[430] !== r8 || tw[431] !== n7 || tw[432] !== r4 ? (e6 = r4 || n7 || nZ || r8 || nX || sF || null == rz && !rA ? null : (0, a.jsx)($.a, {}), tw[425] = rz, tw[426] = rA, tw[427] = nX, tw[428] = sF, tw[429] = nZ, tw[430] = r8, tw[431] = n7, tw[432] = r4, tw[433] = e6) : e6 = tw[433],
                    tw[434] !== rM.fetchStatus || tw[435] !== rz || tw[436] !== sz || tw[437] !== rA || tw[438] !== sF || tw[439] !== nZ ? (e7 = !1, tw[434] = rM.fetchStatus, tw[435] = rz, tw[436] = sz, tw[437] = rA, tw[438] = sF, tw[439] = nZ, tw[440] = e7) : e7 = tw[440],
                    tw[441] !== rM.data || tw[442] !== rM.fetchStatus || tw[443] !== rz || tw[444] !== tS || tw[445] !== sz || tw[446] !== rA || tw[447] !== o9 || tw[448] !== sF || !1 !== tw[449] || tw[450] !== st.length ? (te = null, tw[441] = rM.data, tw[442] = rM.fetchStatus, tw[443] = rz, tw[444] = tS, tw[445] = sz, tw[446] = rA, tw[447] = o9, tw[448] = sF, tw[449] = !1, tw[450] = st.length, tw[451] = te) : te = tw[451],
                    ta = !n7 && !r8 && (0, tG.c)() ? (0, a.jsx)(tF.c, {
                        callIds: v,
                        hostId: tX.a,
                        conversationId: (0, m.Qe)(`chatgpt:${tS}`)
                    }) : null,
                    tw[452] !== aW || tw[453] !== nZ || tw[454] !== n1 || tw[455] !== nY?.documentTitle ? (tr = nZ ? null : (0, a.jsx)(tI.a, {
                        title: null == n1 ? nY?.documentTitle ?? aW : null
                    }), tw[452] = aW, tw[453] = nZ, tw[454] = n1, tw[455] = nY?.documentTitle, tw[456] = tr) : tr = tw[456],
                    tw[457] !== tS || tw[458] !== nZ || tw[459] !== r9 || tw[460] !== n7 || tw[461] !== t5 || tw[462] !== r4 || tw[463] !== is ? (to = nZ || r4 ? null : (0, a.jsx)(rD.a, {
                        conversationId: tS,
                        canCopy: !r9,
                        paragenEnabled: !n7,
                        turns: is,
                        loadHistory: !t5 && !n7
                    }), tw[457] = tS, tw[458] = nZ, tw[459] = r9, tw[460] = n7, tw[461] = t5, tw[462] = r4, tw[463] = is, tw[464] = to) : to = tw[464];
                    let x = null != rz || rA;tw[465] !== sz || tw[466] !== r4 || tw[467] !== x ? (ts = (0, a.jsx)(nl.a, {
                        isWorkConversation: r4,
                        hasConversationContent: x,
                        hasLoadError: sz
                    }), tw[465] = sz, tw[466] = r4, tw[467] = x, tw[468] = ts) : ts = tw[468],
                    tw[469] !== rz || tw[470] !== tS || tw[471] !== sz || tw[472] !== rA || tw[473] !== sF || tw[474] !== nZ || tw[475] !== rZ.pathname || tw[476] !== nJ || tw[477] !== t6 ? (ti = nZ || sF || sz || null == rz && !rA ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(so, {
                            sharedConversationId: t6
                        }), (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(tW.a, {
                                onCommit: () => tH.a.contentCommitted(nJ, tS, t6, rZ.pathname),
                                onPaint: () => tH.a.contentVisible(nJ, tS, t6)
                            }, t6 ?? tS)
                        })]
                    }), tw[469] = rz, tw[470] = tS, tw[471] = sz, tw[472] = rA, tw[473] = sF, tw[474] = nZ, tw[475] = rZ.pathname, tw[476] = nJ, tw[477] = t6, tw[478] = ti) : ti = tw[478],
                    tw[479] !== n0?.authMethod || tw[480] !== op || tw[481] !== oy || tw[482] !== rz || tw[483] !== ip || tw[484] !== tS || tw[485] !== rQ || tw[486] !== aW || tw[487] !== iv || tw[488] !== sv || tw[489] !== em || tw[490] !== ol || tw[491] !== sZ || tw[492] !== nX || tw[493] !== ss || tw[494] !== ay || tw[495] !== oT || tw[496] !== nZ || tw[497] !== oE || tw[498] !== r8 || tw[499] !== n7 || tw[500] !== t5 || tw[501] !== rY || tw[502] !== rs || tw[503] !== r4 || tw[504] !== rJ?.sidebarAutomationId || tw[505] !== r0 || tw[506] !== oz || tw[507] !== og || tw[508] !== oB || tw[509] !== ou || tw[510] !== se || tw[511] !== st.length || tw[512] !== nJ || tw[513] !== iy || tw[514] !== aj || tw[515] !== sg || tw[516] !== nQ || tw[517] !== aM || tw[518] !== im || tw[519] !== sP || tw[520] !== io || tw[521] !== sN || tw[522] !== aO || tw[523] !== nY ? (tl = nZ || null != nY ? null : (0, a.jsxs)(rH.a, {
                        chatIcon: null == og ? void 0 : oz,
                        conversationId: rY && !n7 ? tS : null,
                        header: null != iv || null != iy ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(oS, {
                                    header: ip,
                                    courseShortcut: iv,
                                    progress: iy
                                })
                            }), null]
                        }) : ip,
                        title: aW,
                        isArchivedPreview: nX,
                        children: [null, null, n0?.authMethod === "chatgpt" ? (0, a.jsx)(tE.s, {
                            productExperience: r4 ? "work" : "chat"
                        }) : null, n7 ? (0, a.jsx)(sl.a, {
                            children: null == ou ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(sf, {
                                    data: ou
                                })
                            })
                        }) : null, im ? (0, a.jsx)(rV, {
                            conversationId: tS,
                            scheduledAutomationId: r0 ? rJ?.sidebarAutomationId : void 0
                        }, tS) : null, sP ? (0, a.jsx)(rf, {
                            allowsThreadContentOverlap: !r4,
                            composerActions: io,
                            conversationId: sN,
                            controlledState: ss ? {
                                isOpen: sv.isOpen,
                                shouldPreventAutoFocus: sv.shouldPreventAutoFocus,
                                onOpenChange: e => {
                                    sg({
                                        ...sv,
                                        isOpen: e,
                                        shouldPreventAutoFocus: !e && sv.shouldPreventAutoFocus
                                    })
                                }
                            } : void 0,
                            readData: !ss || sv.isOpen ? em : null,
                            showSources: !ss,
                            shouldBlockExternalEgress: aM
                        }) : null, t5 && !n7 && !nX && null == ol && null == oy && null == og && !oT && null != se && (0, g.a)(se).some(s1) ? (0, a.jsx)(P.a.HeaderAction, {
                            actionId: "chatgpt-conversation-save",
                            align: "end",
                            order: 100,
                            children: (0, a.jsx)(sk, {
                                conversationId: tS
                            })
                        }) : null, t5 || nX || r8 ? null : (0, a.jsx)(ow.b, {
                            allowsThreadContentOverlap: !r4,
                            menu: n7 || null == aj ? (0, a.jsx)(of, {}) : (0, a.jsx)(om, {
                                conversationId: tS,
                                title: aW,
                                isHandoffPending: ay,
                                isArchived: rz?.is_archived === !0,
                                isChatConversation: null != rz && !r4,
                                onHandoff: op ? sZ : void 0,
                                onOpenMessage: async e => {
                                    ax.current?.signal.aborted === !1 && nJ.get(T.b)?.pathname === nJ.value.pathname && await ac.current?.scrollToMessage(e)
                                },
                                projectId: og,
                                projectName: oB,
                                serverConversationId: aj,
                                conversationOrigin: rQ
                            }),
                            children: n7 || oE ? null : (0, a.jsx)(ab, {
                                conversationId: tS,
                                projectId: og,
                                sharedProjectConversation: nQ,
                                isReady: (null != aj || null != nQ) && st.length > 0 && (aO ?? rz?.current_node) != null,
                                isRestricted: aM || oT,
                                isStreaming: rs
                            })
                        })]
                    }), tw[479] = n0?.authMethod, tw[480] = op, tw[481] = oy, tw[482] = rz, tw[483] = ip, tw[484] = tS, tw[485] = rQ, tw[486] = aW, tw[487] = iv, tw[488] = sv, tw[489] = em, tw[490] = ol, tw[491] = sZ, tw[492] = nX, tw[493] = ss, tw[494] = ay, tw[495] = oT, tw[496] = nZ, tw[497] = oE, tw[498] = r8, tw[499] = n7, tw[500] = t5, tw[501] = rY, tw[502] = rs, tw[503] = r4, tw[504] = rJ?.sidebarAutomationId, tw[505] = r0, tw[506] = oz, tw[507] = og, tw[508] = oB, tw[509] = ou, tw[510] = se, tw[511] = st.length, tw[512] = nJ, tw[513] = iy, tw[514] = aj, tw[515] = sg, tw[516] = nQ, tw[517] = aM, tw[518] = im, tw[519] = sP, tw[520] = io, tw[521] = sN, tw[522] = aO, tw[523] = nY, tw[524] = tl) : tl = tw[524],
                    tc = null,
                    eH = rt.a,
                    e0 = ai,
                    e1 = rQ,
                    e2 = !ie || s9.isHidden || ia || ox || r9 || rO || nX || r8 || os || oo || r$ || a5 || a4,
                    e3 = t5,
                    e4 = og,
                    e5 = null != oy,
                    eD = t3.c,
                    eq = r7,
                    tw[525] !== nZ || tw[526] !== r2 || tw[527] !== r4 || tw[528] !== iy || tw[529] !== nY ? (eU = nZ || null != nY ? iy : r2 && (0, t9.a)() && !r4 && (0, a.jsx)("div", {
                        className: "h-px",
                        "aria-hidden": !0
                    }), tw[525] = nZ, tw[526] = r2, tw[527] = r4, tw[528] = iy, tw[529] = nY, tw[530] = eU) : eU = tw[530],
                    eK = nK;
                    let b = null == oQ ? "flex h-full min-h-0 flex-col" : "h-full",
                        C = rL ?? aW,
                        _ = !r9,
                        I = !al && !nZ && !n7 && !s8 && !s9.isHidden,
                        j = aM || on,
                        S = rX?.isFullWidth === !0,
                        E = null == rX ? sO.contentShift : void 0,
                        A = oQ?.selectedIndex;tw[531] !== ir || tw[532] !== tS || tw[533] !== oQ ? (e = null != oQ ? (0, a.jsx)(ok, {
                        conversationId: tS,
                        placement: "composer",
                        canStartSection: ir
                    }) : void 0, tw[531] = ir, tw[532] = tS, tw[533] = oQ, tw[534] = e) : e = tw[534],
                    tw[535] !== tS || tw[536] !== oQ ? (t = null != oQ ? (0, a.jsx)(oA, {
                        conversationId: tS
                    }) : void 0, tw[535] = tS, tw[536] = oQ, tw[537] = t) : t = tw[537];
                    let k = !r4,
                        M = oY ? null : sG;tw[538] !== rM || tw[539] !== sD ? (n = sD ? () => {
                        rM.refetch({
                            cancelRefetch: !1
                        })
                    } : void 0, tw[538] = rM, tw[539] = sD, tw[540] = n) : n = tw[540];
                    let R = st.length > 0,
                        O = eA,
                        N = !oT && (null == og || null != oI),
                        B = null == oQ && !rK,
                        G = rM.isFetching,
                        F = !oY && rs;tw[541] !== rz?.is_archived || tw[542] !== tS || tw[543] !== nX || tw[544] !== nZ || tw[545] !== n7 || tw[546] !== t5 || tw[547] !== rs || tw[548] !== r4 ? (r = nZ || !r4 || n7 || nX || rz?.is_archived === !0 || t5 ? null : (0, a.jsx)(y.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(oP, {
                            conversationId: tS,
                            isTurnActive: rs
                        })
                    }), tw[541] = rz?.is_archived, tw[542] = tS, tw[543] = nX, tw[544] = nZ, tw[545] = n7, tw[546] = t5, tw[547] = rs, tw[548] = r4, tw[549] = r) : r = tw[549],
                    tw[550] !== tS || tw[551] !== nX || tw[552] !== aj ? (o = nX ? (0, a.jsx)(tJ.a, {
                        conversationId: aj ?? tS,
                        kind: "chatgpt"
                    }, aj ?? tS) : void 0, tw[550] = tS, tw[551] = nX, tw[552] = aj, tw[553] = o) : o = tw[553];
                    let z = !oY && sr;tw[554] !== oy ? (s = null != oy ? (0, a.jsx)(oO.GptPluginMigrationBanner, {
                        gizmoId: oy
                    }) : null, tw[554] = oy, tw[555] = s) : s = tw[555],
                    tw[556] !== op || tw[557] !== sZ || tw[558] !== ay || tw[559] !== t5 || tw[560] !== oa || tw[561] !== ru ? (i = oa && !t5 ? (0, a.jsx)(rG, {
                        canConvert: op,
                        isChatInstantAvailable: !ru,
                        isConverting: ay,
                        onConvert: sZ
                    }) : null, tw[556] = op, tw[557] = sZ, tw[558] = ay, tw[559] = t5, tw[560] = oa, tw[561] = ru, tw[562] = i) : i = tw[562],
                    tw[563] !== rN || tw[564] !== r8 ? (l = rN.bind(null, r8), tw[563] = rN, tw[564] = r8, tw[565] = l) : l = tw[565],
                    tw[566] !== sJ || tw[567] !== n7 || tw[568] !== t4 ? (c = e => {
                        t4?.(e), n7 && sJ()
                    }, tw[566] = sJ, tw[567] = n7, tw[568] = t4, tw[569] = c) : c = tw[569],
                    tw[570] !== rM.isFetching || tw[571] !== ox || tw[572] !== ai || tw[573] !== nW || tw[574] !== tS || tw[575] !== ii || tw[576] !== tO || tw[577] !== sz || tw[578] !== tR || tw[579] !== n8 || tw[580] !== ia || tw[581] !== o9 || tw[582] !== rO || tw[583] !== sF || tw[584] !== al || tw[585] !== nZ || tw[586] !== n7 || tw[587] !== t5 || tw[588] !== rY || tw[589] !== eA || tw[590] !== nL || tw[591] !== tY || tw[592] !== aR || tw[593] !== t6 || tw[594] !== rF || tw[595] !== ie || tw[596] !== n || tw[597] !== R || tw[598] !== N || tw[599] !== B || tw[600] !== F || tw[601] !== r || tw[602] !== o || tw[603] !== z || tw[604] !== s || tw[605] !== i || tw[606] !== l || tw[607] !== c || tw[608] !== C || tw[609] !== _ || tw[610] !== I || tw[611] !== j || tw[612] !== S || tw[613] !== E || tw[614] !== A || tw[615] !== e || tw[616] !== t || tw[617] !== k || tw[618] !== M || tw[619] !== tV || tw[620] !== is || tw[621] !== nY ? (d = (0, a.jsx)(s6, {
                        ref: ac,
                        printTitle: C,
                        trackShownImpressions: _,
                        trackReadState: I,
                        workspace: nY,
                        shouldBlockMcpApps: j,
                        isCoveredByFloatingPanel: S,
                        isFormOnly: al,
                        isInlinePreview: nZ,
                        hideModelPicker: tR,
                        disableAutoFocus: tO,
                        transcriptPresentation: tV,
                        scrollOrigin: tY,
                        composerRef: au,
                        contentX: E,
                        conversationId: tS,
                        composerConversationId: ai,
                        sectionIndex: A,
                        composerLeadingContent: nW,
                        aboveComposerContent: e,
                        historyLoadingContent: t,
                        requiredSystemHints: nL,
                        isChatConversation: k,
                        conversationLoadingLabel: ii,
                        entries: is,
                        errorMessage: M,
                        hasLoadError: sz,
                        onRetryLoad: n,
                        hasRenderableTurns: R,
                        isComposerDisabled: ia,
                        readOnlyPlaceholder: O,
                        moreDetailsEnabled: N,
                        isConversationEmpty: o9,
                        showEmptyState: B,
                        isConversationFetching: G,
                        isConversationLoading: sF,
                        isSharedConversation: n7,
                        isSubmitDisabled: rO,
                        isTemporaryChat: t5,
                        isTurnActive: F,
                        isWorkConversation: rY,
                        onboardingPrelude: r,
                        scrollStateConversationId: aR,
                        initialResponsePlacementKey: n8,
                        sharedConversationId: t6,
                        sharedPostRegulatedConnectorKind: rF,
                        showComposer: ie,
                        archivedPreviewFooter: o,
                        showPendingLoadingMessage: z,
                        gptPluginMigrationBanner: s,
                        awaitingGptContinuation: ox,
                        workOnlyConversionBanner: i,
                        onAddSelectedText: l,
                        onSubmitAccepted: c
                    }), tw[570] = rM.isFetching, tw[571] = ox, tw[572] = ai, tw[573] = nW, tw[574] = tS, tw[575] = ii, tw[576] = tO, tw[577] = sz, tw[578] = tR, tw[579] = n8, tw[580] = ia, tw[581] = o9, tw[582] = rO, tw[583] = sF, tw[584] = al, tw[585] = nZ, tw[586] = n7, tw[587] = t5, tw[588] = rY, tw[589] = eA, tw[590] = nL, tw[591] = tY, tw[592] = aR, tw[593] = t6, tw[594] = rF, tw[595] = ie, tw[596] = n, tw[597] = R, tw[598] = N, tw[599] = B, tw[600] = F, tw[601] = r, tw[602] = o, tw[603] = z, tw[604] = s, tw[605] = i, tw[606] = l, tw[607] = c, tw[608] = C, tw[609] = _, tw[610] = I, tw[611] = j, tw[612] = S, tw[613] = E, tw[614] = A, tw[615] = e, tw[616] = t, tw[617] = k, tw[618] = M, tw[619] = tV, tw[620] = is, tw[621] = nY, tw[622] = d) : d = tw[622],
                    tw[623] !== sv || tw[624] !== em || tw[625] !== ss || tw[626] !== aM || tw[627] !== sP || tw[628] !== io || tw[629] !== sN || tw[630] !== sO ? (u = sP && null != em && (!ss || sv.isOpen) ? (0, a.jsx)(rg, {
                        composerActions: io,
                        conversationId: sN,
                        readData: em,
                        showSources: !ss,
                        display: sO,
                        shouldBlockExternalEgress: aM
                    }) : null, tw[623] = sv, tw[624] = em, tw[625] = ss, tw[626] = aM, tw[627] = sP, tw[628] = io, tw[629] = sN, tw[630] = sO, tw[631] = u) : u = tw[631],
                    tw[632] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(re.a, {}), tw[632] = h) : h = tw[632],
                    tw[633] !== nZ ? (p = null, tw[633] = nZ, tw[634] = p) : p = tw[634],
                    tw[635] !== r9 || tw[636] !== d || tw[637] !== u || tw[638] !== p || tw[639] !== b ? (eZ = (0, a.jsxs)("div", {
                        className: b,
                        inert: r9,
                        children: [d, u, h, p]
                    }), tw[635] = r9, tw[636] = d, tw[637] = u, tw[638] = p, tw[639] = b, tw[640] = eZ) : eZ = tw[640],
                    eJ = !r8 && (0, tG.c)() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(sK, {
                            conversationId: tS,
                            shouldBlockExternalEgress: aM || on,
                            widgets: f.filter(s0)
                        }), n7 ? null : (0, a.jsx)(tz.a, {
                            blockedWidgetSource: rm ? void 0 : "descriptor",
                            transcriptMcpAppIds: (0, sq.c)(tS, f, rm),
                            shouldBlockExternalEgress: aM || on
                        })]
                    }) : null
                }
                tw[291] = rM, tw[292] = n0?.authMethod, tw[293] = ox, tw[294] = nK, tw[295] = on, tw[296] = op, tw[297] = sD, tw[298] = ir, tw[299] = ai, tw[300] = oy, tw[301] = nW, tw[302] = rz, tw[303] = ip, tw[304] = tS, tw[305] = ii, tw[306] = rQ, tw[307] = aW, tw[308] = iv, tw[309] = sv, tw[310] = tO, tw[311] = sG, tw[312] = rX, tw[313] = r7, tw[314] = em, tw[315] = ol, tw[316] = rN, tw[317] = sZ, tw[318] = sJ, tw[319] = sz, tw[320] = rA, tw[321] = tR, tw[322] = n8, tw[323] = nX, tw[324] = ss, tw[325] = ia, tw[326] = o9, tw[327] = rO, tw[328] = sF, tw[329] = al, tw[330] = ay, tw[331] = oT, tw[332] = nZ, tw[333] = oE, tw[334] = s8, tw[335] = rm, tw[336] = r9, tw[337] = r8, tw[338] = r2, tw[339] = !1, tw[340] = n7, tw[341] = os, tw[342] = a5, tw[343] = a4, tw[344] = t5, tw[345] = rY, tw[346] = rs, tw[347] = r4, tw[348] = oa, tw[349] = ru, tw[350] = oo, tw[351] = r$, tw[352] = rK, tw[353] = rZ.pathname, tw[354] = rk, tw[355] = rJ?.sidebarAutomationId, tw[356] = t4, tw[357] = r0, tw[358] = oI, tw[359] = oz, tw[360] = og, tw[361] = oB, tw[362] = eA, tw[363] = ou, tw[364] = se, tw[365] = st, tw[366] = nL, tw[367] = oY, tw[368] = s9, tw[369] = rL, tw[370] = nJ, tw[371] = tY, tw[372] = aR, tw[373] = oQ, tw[374] = iy, tw[375] = aj, tw[376] = sg, tw[377] = t6, tw[378] = n1, tw[379] = rF, tw[380] = nQ, tw[381] = oU, tw[382] = aM, tw[383] = im, tw[384] = sP, tw[385] = ie, tw[386] = sr, tw[387] = io, tw[388] = sN, tw[389] = sO, tw[390] = aO, tw[391] = tV, tw[392] = is, tw[393] = nY, tw[394] = eD, tw[395] = eH, tw[396] = eW, tw[397] = eq, tw[398] = eU, tw[399] = eK, tw[400] = eZ, tw[401] = eJ, tw[402] = e0, tw[403] = e1, tw[404] = e2, tw[405] = e3, tw[406] = e4, tw[407] = e5, tw[408] = e6, tw[409] = e7, tw[410] = te, tw[411] = ta, tw[412] = tr, tw[413] = to, tw[414] = ts, tw[415] = ti, tw[416] = tl, tw[417] = tc, tw[418] = tu
            } else eD = tw[394], eH = tw[395], eW = tw[396], eq = tw[397], eU = tw[398], eK = tw[399], eZ = tw[400], eJ = tw[401], e0 = tw[402], e1 = tw[403], e2 = tw[404], e3 = tw[405], e4 = tw[406], e5 = tw[407], e6 = tw[408], e7 = tw[409], te = tw[410], ta = tw[411], tr = tw[412], to = tw[413], ts = tw[414], ti = tw[415], tl = tw[416], tc = tw[417], tu = tw[418];
            if (tu !== Symbol.for("react.early_return_sentinel")) return tu;
            tw[641] !== eD || tw[642] !== eq || tw[643] !== eU || tw[644] !== eK || tw[645] !== eZ || tw[646] !== eJ ? (tg = (0, a.jsxs)(eD, {
                floatingPanelWidth: eq,
                header: eU,
                banner: eK,
                children: [eZ, eJ]
            }), tw[641] = eD, tw[642] = eq, tw[643] = eU, tw[644] = eK, tw[645] = eZ, tw[646] = eJ, tw[647] = tg) : tg = tw[647], tw[648] !== eH || tw[649] !== e0 || tw[650] !== e1 || tw[651] !== e2 || tw[652] !== e3 || tw[653] !== e4 || tw[654] !== e5 || tw[655] !== tg ? (tf = (0, a.jsx)(eH, {
                conversationId: e0,
                conversationOrigin: e1,
                disabled: e2,
                isTemporaryChat: e3,
                projectId: e4,
                requiresGizmoId: e5,
                children: tg
            }), tw[648] = eH, tw[649] = e0, tw[650] = e1, tw[651] = e2, tw[652] = e3, tw[653] = e4, tw[654] = e5, tw[655] = tg, tw[656] = tf) : tf = tw[656], tw[657] !== eW || tw[658] !== e6 || tw[659] !== e7 || tw[660] !== te || tw[661] !== ta || tw[662] !== tr || tw[663] !== to || tw[664] !== ts || tw[665] !== ti || tw[666] !== tl || tw[667] !== tc || tw[668] !== tf ? (tv = (0, a.jsxs)(eW, {
                children: [e6, e7, te, ta, tr, to, ts, ti, tl, tc, tf]
            }), tw[657] = eW, tw[658] = e6, tw[659] = e7, tw[660] = te, tw[661] = ta, tw[662] = tr, tw[663] = to, tw[664] = ts, tw[665] = ti, tw[666] = tl, tw[667] = tc, tw[668] = tf, tw[669] = tv) : tv = tw[669];
            let ix = tv,
                ib = n7 || !rM.isFetchedAfterMount || rM.isFetching || rR ? null : rM.error,
                iC = sz ? rM.error : null,
                iw = null == rQ && null == rz ? null : r4,
                i_ = !r4 && !sF;
            return tw[670] !== ad || tw[671] !== ai || tw[672] !== t6 ? (ty = {
                conversationId: ai,
                composer: ad,
                sharedConversationId: t6
            }, tw[670] = ad, tw[671] = ai, tw[672] = t6, tw[673] = ty) : ty = tw[673], tw[674] !== ix || tw[675] !== ty ? (tx = (0, a.jsx)(nq.a, {
                value: ty,
                children: ix
            }), tw[674] = ix, tw[675] = ty, tw[676] = tx) : tx = tw[676], tw[677] !== i_ || tw[678] !== tx ? (tb = (0, a.jsx)(_.a, {
                enabled: i_,
                children: tx
            }), tw[677] = i_, tw[678] = tx, tw[679] = tb) : tb = tw[679], tw[680] !== sD || tw[681] !== aj || tw[682] !== ib || tw[683] !== iC || tw[684] !== iw || tw[685] !== tb ? (tC = (0, a.jsx)(et.a, {
                conversationId: aj,
                error: ib,
                loadError: iC,
                canRetry: sD,
                isWorkConversation: iw,
                children: tb
            }), tw[680] = sD, tw[681] = aj, tw[682] = ib, tw[683] = iC, tw[684] = iw, tw[685] = tb, tw[686] = tC) : tC = tw[686], tC
        }

        function s0(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function s1(e) {
            return "user" === e.author.role
        }

        function s2(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function s3(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function s4(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function s5(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }

        function s6(e) {
            let t, n, o, s, c, u, h, m, g, f, v, b, w, _, I, j, S, T, E, P, A, k, M, R, N, B, G, F, D, H, W = (0, r.c)(238),
                {
                    ref: U,
                    printTitle: K,
                    trackReadState: V,
                    trackShownImpressions: Q,
                    composerRef: Y,
                    workspace: $,
                    shouldBlockMcpApps: X,
                    contentX: J,
                    conversationId: ee,
                    sectionIndex: et,
                    composerConversationId: en,
                    composerLeadingContent: ea,
                    aboveComposerContent: er,
                    historyLoadingContent: eo,
                    requiredSystemHints: es,
                    isCoveredByFloatingPanel: ei,
                    isFormOnly: el,
                    isInlinePreview: ec,
                    hideModelPicker: ed,
                    disableAutoFocus: eu,
                    transcriptPresentation: eh,
                    scrollOrigin: ep,
                    isChatConversation: em,
                    conversationLoadingLabel: eg,
                    entries: ef,
                    errorMessage: ev,
                    hasLoadError: ey,
                    onRetryLoad: eb,
                    hasRenderableTurns: eC,
                    isComposerDisabled: ew,
                    readOnlyPlaceholder: e_,
                    moreDetailsEnabled: eI,
                    isConversationEmpty: ej,
                    showEmptyState: eT,
                    isConversationFetching: eE,
                    isConversationLoading: eP,
                    isSharedConversation: eA,
                    isSubmitDisabled: ek,
                    isTemporaryChat: eM,
                    isTurnActive: eR,
                    isWorkConversation: eO,
                    onboardingPrelude: eN,
                    scrollStateConversationId: eF,
                    initialResponsePlacementKey: ez,
                    sharedConversationId: eD,
                    sharedPostRegulatedConnectorKind: eH,
                    showComposer: eq,
                    archivedPreviewFooter: eU,
                    showPendingLoadingMessage: eK,
                    gptPluginMigrationBanner: eV,
                    awaitingGptContinuation: eQ,
                    workOnlyConversionBanner: eY,
                    onAddSelectedText: e$,
                    onSubmitAccepted: eX
                } = e,
                eZ = void 0 === eT || eT,
                eJ = (0, p.y)(L.a),
                e0 = (0, p.z)(null),
                e2 = (0, p.x)(eS.f, (0, y.useContext)(O.a)),
                e3 = (0, p.z)(tQ.a),
                e4 = (0, p.x)(nr.a, ee),
                e5 = $?.fullscreenContent != null ? "content" : "workspace",
                e8 = (0, Z.a)(ec ? "embedded" : e5),
                e7 = (0, p.z)(oU.a),
                e9 = eq && e7?.source.turnContext.conversationId !== en,
                te = "floating" === e8.placement,
                [tt, tn] = (0, y.useState)(!1),
                ta = $?.fullscreenContent != null || te && tt && !e8.isHidden && !el ? "floating" : "main",
                tr = (0, p.z)(oz.h),
                to = em && null == eD && null == e2 && null == eU,
                ts = !eP && !eR && !ey && ej && !eC,
                ti = (0, p.x)(z.i, ee),
                tc = eZ && to && ts && null == ti && !e4 && !te,
                td = eZ && !e4 && (!to || !ej),
                tu = (0, y.useRef)(null),
                [th, tp] = (0, y.useState)(null),
                [tm, tv] = (0, y.useState)(!1);
            W[0] !== ef || W[1] !== th ? (t = () => ({
                async scrollToMessage(e) {
                    let t = ef.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != th && await th.scrollToKey(t.turnKey, void 0, {
                        align: "top"
                    })
                }
            }), n = [ef, th], W[0] = ef, W[1] = th, W[2] = t, W[3] = n) : (t = W[2], n = W[3]), (0, y.useImperativeHandle)(U, t, n), W[4] !== ef ? (o = () => ef, W[4] = ef, W[5] = o) : o = W[5];
            let t_ = (0, na.a)(o);
            W[6] !== ef || W[7] !== th?.scrollToKey ? (s = e => {
                let t = d()(ef, s9);
                return (0, tw.a)(th?.scrollToKey, t?.turnKey, e)
            }, W[6] = ef, W[7] = th?.scrollToKey, W[8] = s) : s = W[8];
            let tI = s,
                [tj, tS] = (0, y.useState)(null);
            W[9] !== ec || W[10] !== eJ || W[11] !== eF ? (c = () => ec ? 0 : eJ.get(t6.a, eF), W[9] = ec, W[10] = eJ, W[11] = eF, W[12] = c) : c = W[12];
            let [tT, tE] = (0, y.useState)(c);
            W[13] !== ec || W[14] !== tj || W[15] !== eJ || W[16] !== eF ? (u = e => {
                ec || eJ.set(t6.a, eF, (0, t4.a)(e, tj?.getHeightPx() ?? 0))
            }, W[13] = ec, W[14] = tj, W[15] = eJ, W[16] = eF, W[17] = u) : u = W[17];
            let tP = (0, na.a)(u);
            W[18] !== ef || W[19] !== th ? (h = (e, t) => (0, tf.c)(th, ef.find(t => {
                let {
                    id: n
                } = t;
                return n === e
            })?.turnKey, t), W[18] = ef, W[19] = th, W[20] = h) : h = W[20];
            let tk = (0, na.a)(h);
            W[21] !== ee || W[22] !== ef || W[23] !== th ? (m = async e => {
                let t = ef.find(t => {
                    let {
                        turn: n
                    } = t;
                    return n.messageIds.includes(e)
                });
                null != t && null != th && await th.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${ee}-${e}`)}"]`), {
                    align: "center"
                })
            }, W[21] = ee, W[22] = ef, W[23] = th, W[24] = m) : m = W[24];
            let tM = (0, na.a)(m);
            W[25] === Symbol.for("react.memo_cache_sentinel") ? (g = e => (0, tf.a)(tu.current, e), W[25] = g) : g = W[25];
            let tR = (0, na.a)(g),
                tN = `chatgpt:${ee}`;
            if (W[26] !== ee || W[27] !== t_ || W[28] !== tR || W[29] !== eM || W[30] !== eJ || W[31] !== tk || W[32] !== eD || W[33] !== e2 || W[34] !== tN) {
                let e;
                W[36] !== ee || W[37] !== eM || W[38] !== eJ || W[39] !== eD || W[40] !== e2 ? (e = async e => {
                    let t = eJ.get(z.j, ee);
                    !eM && null == eD && null == e2 && null != t && eJ.get(eG.b) > 0 && await (0, eB.a)(eJ, t, e)
                }, W[36] = ee, W[37] = eM, W[38] = eJ, W[39] = eD, W[40] = e2, W[41] = e) : e = W[41], f = function(e) {
                    let {
                        getTurns: t,
                        routeContextId: n,
                        scrollAdapter: a,
                        ensureHistory: r
                    } = e, o = (0, ac.a)({
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
                                            unitId: (0, nQ.a)("user", t),
                                            text: n
                                        }]
                                    }
                                    if ("assistant-message" === e.type) {
                                        let n = (0, au.a)(e.content, ex.b),
                                            a = [],
                                            r = "";
                                        for (; e.content.includes(r);) r += "";
                                        let o = (0, al.a)(function e(t, n, a, r) {
                                                let o = "",
                                                    s = 0;
                                                for (let i of t) {
                                                    let t = n.indexOf(i.raw, s); - 1 !== t && (o += n.slice(s, t), o += function(t, n, a) {
                                                        var r, o;
                                                        if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                        if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                            if (e.name === ex.a) {
                                                                let n = (0, ah.a)(e.attributes),
                                                                    a = (0, ah.b)(e.attributes),
                                                                    r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, ex.l)(e) === a);
                                                                if (null == r) return "";
                                                                let o = (0, ex.i)(r);
                                                                return "hidden" === o || "block" === o ? "" : (0, ex.j)(r) ?? ""
                                                            }
                                                            return e.name === ai.a ? (0, ad.a)(e.attributes, "label") ?? "" : e.name === ai.b || e.name === ai.c ? "" : e.name === as.a ? e.text ?? "" : null
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
                                            unitId: (0, nQ.a)("assistant", t),
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
                    getTurns: t_,
                    routeContextId: tN,
                    scrollAdapter: {
                        scrollToTurn: tk,
                        getTurnContainer: tR
                    },
                    ensureHistory: e
                }), W[26] = ee, W[27] = t_, W[28] = tR, W[29] = eM, W[30] = eJ, W[31] = tk, W[32] = eD, W[33] = e2, W[34] = tN, W[35] = f
            } else f = W[35];
            let tB = f;
            W[42] !== tB.contextId ? (v = {
                containerRef: tu,
                contextId: tB.contextId
            }, W[42] = tB.contextId, W[43] = v) : v = W[43], (0, tb.a)(v);
            let tG = e9 && null == eU,
                tF = e3 && tG && !te,
                tz = (0, tA.a)();
            W[44] !== ee || W[45] !== eC || W[46] !== ei || W[47] !== et || W[48] !== tz ? (b = {
                conversationId: ee,
                sectionIndex: et,
                hasRenderableTurns: eC,
                isCoveredByFloatingPanel: ei,
                shouldReduceMotion: tz,
                containerRef: tu
            }, W[44] = ee, W[45] = eC, W[46] = ei, W[47] = et, W[48] = tz, W[49] = b) : b = W[49];
            let tL = function(e) {
                    let t, n, a, o = (0, r.c)(12),
                        {
                            conversationId: s,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, o3.a)(0);
                    o[0] !== s || o[1] !== i ? (t = {
                        conversationId: s,
                        sectionIndex: i
                    }, o[0] = s, o[1] = i, o[2] = t) : t = o[2];
                    let p = (0, y.useRef)(t);
                    return o[3] !== u || o[4] !== s || o[5] !== l || o[6] !== c || o[7] !== i || o[8] !== h || o[9] !== d ? (n = () => {
                        let e;
                        if (!l) return;
                        let t = p.current;
                        p.current = {
                            conversationId: s,
                            sectionIndex: i
                        };
                        let n = u.current;
                        if (null == n || d || c || t.conversationId !== s || null == t.sectionIndex || null == i || t.sectionIndex === i) return;
                        let a = Math.sign(i - t.sectionIndex),
                            r = () => {
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(o6) && 0 !== n.clientWidth && (o.disconnect(), h.set(a * n.clientWidth), e = (0, o4.a)(h, 0, {
                                    duration: .3,
                                    ease: o5.d
                                }))
                            },
                            o = new MutationObserver(r);
                        return o.observe(n, {
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }), r(), () => {
                            o.disconnect(), e?.stop(), h.set(0)
                        }
                    }, a = [s, i, l, d, c, h, u], o[3] = u, o[4] = s, o[5] = l, o[6] = c, o[7] = i, o[8] = h, o[9] = d, o[10] = n, o[11] = a) : (n = o[10], a = o[11]), (0, y.useLayoutEffect)(n, a), h
                }(b),
                tD = tG && te,
                [tH, tW] = (0, y.useState)(null),
                [tq, tU] = (0, y.useState)(null),
                [tK, t$] = (0, y.useState)(null),
                tX = eA && tG && !ew && !te && !e3,
                [tZ, tJ] = (0, y.useState)(null);
            W[50] !== eQ || W[51] !== ee || W[52] !== eC || W[53] !== eM || W[54] !== eH || W[55] !== eq ? (w = eq && !eQ ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(tl.BrowserComposerDisclaimer, {
                    conversationId: ee,
                    hasUserMessage: eC,
                    isTemporaryChat: eM,
                    regulatedConnectorKindOverride: eH
                })
            }) : void 0, W[50] = eQ, W[51] = ee, W[52] = eC, W[53] = eM, W[54] = eH, W[55] = eq, W[56] = w) : w = W[56];
            let t1 = w;
            W[57] !== ee || W[58] !== ev || W[59] !== eC || W[60] !== ew || W[61] !== ek || W[62] !== eO || W[63] !== eq || W[64] !== eK ? (_ = eC ? null : (0, a.jsx)(aa.a, {
                conversationId: ee,
                errorMessage: ev,
                isWorkConversation: eO,
                showPendingLoadingMessage: eK,
                showRequestUserInputStatus: eq && !ew && !ek
            }), W[57] = ee, W[58] = ev, W[59] = eC, W[60] = ew, W[61] = ek, W[62] = eO, W[63] = eq, W[64] = eK, W[65] = _) : _ = W[65];
            let t2 = _;
            W[66] !== ee || W[67] !== eO || W[68] !== eD || W[69] !== e2 ? (I = eO && null == eD && null == e2 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(e6, {
                    conversationId: ee
                }, ee)
            }) : null, W[66] = ee, W[67] = eO, W[68] = eD, W[69] = e2, W[70] = I) : I = W[70];
            let t8 = I;
            W[71] !== eU || W[72] !== t8 ? (j = null != eU ? (0, a.jsxs)(a.Fragment, {
                children: [t8, eU]
            }) : null, W[71] = eU, W[72] = t8, W[73] = j) : j = W[73];
            let t7 = j;
            W[74] !== er || W[75] !== t7 || W[76] !== eQ || W[77] !== en || W[78] !== ea || W[79] !== Y || W[80] !== ee || W[81] !== eu || W[82] !== t1 || W[83] !== t2 || W[84] !== ef || W[85] !== t8 || W[86] !== tH || W[87] !== eV || W[88] !== ey || W[89] !== eC || W[90] !== ed || W[91] !== e3 || W[92] !== ew || W[93] !== eP || W[94] !== ei || W[95] !== el || W[96] !== te || W[97] !== tr || W[98] !== ec || W[99] !== eA || W[100] !== ek || W[101] !== eM || W[102] !== eO || W[103] !== eX || W[104] !== e_ || W[105] !== tX || W[106] !== es || W[107] !== tj || W[108] !== tI || W[109] !== e8.isHidden || W[110] !== eD || W[111] !== e2 || W[112] !== e9 || W[113] !== tD || W[114] !== tF || W[115] !== V || W[116] !== Q || W[117] !== ta || W[118] !== eY || W[119] !== $ ? (S = t7 ?? (e9 ? (0, a.jsxs)(rk.a.Provider, {
                value: ef.at(-1) ?? null,
                children: [el || te ? null : (0, a.jsx)(tC.a, {
                    onNavigate: tI
                }, ee), te ? null : ea, (0, a.jsx)(it, {
                    requiredSystemHints: es,
                    composerRef: Y,
                    workspace: $,
                    isInlinePreview: ec,
                    hideModelPicker: ed,
                    disableAutoFocus: eu,
                    conversationId: en,
                    isImageEditComposer: tr,
                    disabled: ew,
                    readOnlyPlaceholder: e_,
                    awaitingGptContinuation: eQ,
                    headerContent: t8,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tX ? (0, a.jsx)("div", {
                            ref: t$,
                            className: "empty:hidden"
                        }) : null, er, !eP && !ey && eC && !eQ && eY, e3 ? null : eV, tD && t2]
                    }),
                    isFullscreenComposer: te,
                    isHidden: e8.isHidden,
                    trackReadState: V && !ei,
                    trackShownImpressions: Q && !ei,
                    isSharedConversation: eA,
                    isSubmitDisabled: ek,
                    followupPortalTarget: tH,
                    takeoverDisclaimerRef: tJ,
                    showConversationFollowups: null == eD && null == e2 && !eM && !eO && !te,
                    isTemporaryChat: eM,
                    isWorkConversation: eO,
                    responseSpacerState: tj,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(aO, {
                            entries: ef,
                            historyLoader: eM || null != eD || null != e2 ? null : (0, a.jsx)(o$.a, {
                                conversationId: ee
                            }),
                            isVisible: t,
                            rendersWidgets: "floating" === ta,
                            onVisibilityChange: tn
                        }, ee)
                    },
                    showVoiceStage: !tF,
                    voiceDisclaimer: e3 && !tF ? t1 : void 0,
                    onSubmitAccepted: e => {
                        tE(0), eX?.(e)
                    }
                }, `${en}:${tr?"image-edit":"chat"}`)]
            }) : t8), W[74] = er, W[75] = t7, W[76] = eQ, W[77] = en, W[78] = ea, W[79] = Y, W[80] = ee, W[81] = eu, W[82] = t1, W[83] = t2, W[84] = ef, W[85] = t8, W[86] = tH, W[87] = eV, W[88] = ey, W[89] = eC, W[90] = ed, W[91] = e3, W[92] = ew, W[93] = eP, W[94] = ei, W[95] = el, W[96] = te, W[97] = tr, W[98] = ec, W[99] = eA, W[100] = ek, W[101] = eM, W[102] = eO, W[103] = eX, W[104] = e_, W[105] = tX, W[106] = es, W[107] = tj, W[108] = tI, W[109] = e8.isHidden, W[110] = eD, W[111] = e2, W[112] = e9, W[113] = tD, W[114] = tF, W[115] = V, W[116] = Q, W[117] = ta, W[118] = eY, W[119] = $, W[120] = S) : S = W[120];
            let t9 = S;
            W[121] !== ee || W[122] !== ei || W[123] !== ec || W[124] !== e0 || W[125] !== eD || W[126] !== e2 ? (T = void 0, W[121] = ee, W[122] = ei, W[123] = ec, W[124] = e0, W[125] = eD, W[126] = e2, W[127] = T) : T = W[127];
            let ne = T,
                nt = ei || void 0;
            W[128] === Symbol.for("react.memo_cache_sentinel") ? (E = null, W[128] = E) : E = W[128], W[129] !== ee || W[130] !== ei || W[131] !== te || W[132] !== V ? (P = !V || te || ei ? null : (0, a.jsx)(rA.a, {
                conversationId: ee
            }), W[129] = ee, W[130] = ei, W[131] = te, W[132] = V, W[133] = P) : P = W[133], W[134] !== eU || W[135] !== ee || W[136] !== ec || W[137] !== eD || W[138] !== e2 ? (A = ec || null != eD || null != e2 || null != eU ? null : (0, a.jsx)(rs, {
                conversationId: ee
            }, ee), W[134] = eU, W[135] = ee, W[136] = ec, W[137] = eD, W[138] = e2, W[139] = A) : A = W[139], W[140] !== ee || W[141] !== eP || W[142] !== eM || W[143] !== eD || W[144] !== e2 ? (k = eP || eM || null != eD || null != e2 ? null : (0, a.jsx)(oX, {
                conversationId: ee
            }), W[140] = ee, W[141] = eP, W[142] = eM, W[143] = eD, W[144] = e2, W[145] = k) : k = W[145], W[146] !== ee || W[147] !== ef || W[148] !== tm || W[149] !== eE || W[150] !== eP || W[151] !== ec || W[152] !== tI || W[153] !== eD || W[154] !== e2 || W[155] !== th ? (M = ec || eP || null != eD || null != e2 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(q, {
                    conversationId: ee,
                    entries: ef,
                    turnListApi: th
                }), (0, a.jsx)(t0.a, {
                    ready: !eE && tm && null != th && ef.length > 0,
                    onNavigate: tI
                })]
            }), W[146] = ee, W[147] = ef, W[148] = tm, W[149] = eE, W[150] = eP, W[151] = ec, W[152] = tI, W[153] = eD, W[154] = e2, W[155] = th, W[156] = M) : M = W[156], W[157] !== eU || W[158] !== tc || W[159] !== en || W[160] !== J || W[161] !== ti || W[162] !== ee || W[163] !== eg || W[164] !== tB || W[165] !== t1 || W[166] !== t2 || W[167] !== ef || W[168] !== t9 || W[169] !== tP || W[170] !== ey || W[171] !== eC || W[172] !== eo || W[173] !== ez || W[174] !== tT || W[175] !== e3 || W[176] !== e4 || W[177] !== ew || W[178] !== eE || W[179] !== eP || W[180] !== ei || W[181] !== el || W[182] !== te || W[183] !== ec || W[184] !== eA || W[185] !== eM || W[186] !== eR || W[187] !== eO || W[188] !== eI || W[189] !== ne || W[190] !== e$ || W[191] !== eb || W[192] !== eN || W[193] !== K || W[194] !== tX || W[195] !== tj || W[196] !== e8.isChatPaneHidden || W[197] !== eJ || W[198] !== ep || W[199] !== tM || W[200] !== tL || W[201] !== eD || W[202] !== e2 || W[203] !== X || W[204] !== tz || W[205] !== eq || W[206] !== e9 || W[207] !== td || W[208] !== tG || W[209] !== tD || W[210] !== tF || W[211] !== tZ || W[212] !== eh || W[213] !== th || W[214] !== $ ? (R = $?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!X && $.fullscreenContent, t9]
            }) : (0, a.jsxs)(t5.a, {
                viewportOverlay: el || ec || eO || null != eD || null != e2 || null != eU || ei || te ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(rL, {
                        conversationId: ee
                    }, ee)
                }),
                hideTranscript: el,
                active: !eP && (!eC || null != th),
                presentation: eh ?? (ec ? "compact" : "default"),
                contentX: J,
                composerFade: !1,
                supportsComposerExpansion: tG && !te && null == $,
                footerPlacement: tc ? "home" : "bottom",
                initialOffset: tT,
                scrollOrigin: ep,
                onScroll: tP,
                scrollToBottomButton: !e9 || te || tF ? void 0 : {
                    isWorking: eR
                },
                threadEndContent: e3 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tW,
                        className: t3.a
                    }), null == tZ ? t1 : (0, x.createPortal)(t1, tZ)]
                }),
                footerLeadingContent: tF ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: t3.a,
                            children: (0, a.jsx)(tV.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: t1
                    })]
                }) : ne,
                footer: t9,
                children: [ec || eP || null != eD ? null : (0, a.jsx)(n7, {
                    conversationId: ee,
                    entries: ef,
                    isConversationFetching: eE,
                    turnListApi: th
                }), (0, a.jsxs)(l.a.div, {
                    ref: tu,
                    style: {
                        x: tL
                    },
                    "data-chatgpt-conversation-selection-target": ee,
                    className: (0, i.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", ec && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, tx.K)(eJ, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, tx.K)(eJ, "conversation")
                    },
                    children: [(0, a.jsxs)(y.Suspense, {
                        fallback: (0, a.jsx)(tO.LoadingPage, {
                            debugName: "ChatGptConversationPage",
                            fillParent: !0
                        }),
                        children: [ec || eP ? null : (0, a.jsx)(ty.a, {
                            conversationSource: tB
                        }), ei || e8.isChatPaneHidden || eM || null != eD || null != e2 ? null : eo ?? (0, a.jsx)(o$.a, {
                            conversationId: ee
                        }), (0, a.jsx)(sD.b, {
                            conversationId: ee
                        }), (null != eD || null != e2) && eC ? (0, a.jsx)(sx, {
                            sharedConversationId: eD
                        }) : null, null == eN ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: t3.a,
                                children: eN
                            })
                        }), null == ti || eP ? null : (0, a.jsx)(nL.a, {
                            conversationId: ee,
                            branchSource: {
                                conversationId: ti.metadata.source_conversation_id,
                                title: ti.metadata.source_conversation_title,
                                gizmoId: ti.metadata.source_conversation_gizmo_id,
                                ownerId: ti.metadata.source_conversation_owner_id
                            }
                        }), ey ? (0, a.jsx)(e1, {
                            isFetching: eE,
                            isSharedConversation: eA,
                            onRetry: eb
                        }) : eP ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": eg,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(tO.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : eC ? (0, a.jsxs)(oL.a, {
                            value: tM,
                            children: [ec || ei ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eM || null != eD || null != e2 ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(eW, {
                                        conversationId: ee
                                    })
                                }), (0, a.jsx)(eL, {
                                    entries: ef,
                                    title: K,
                                    TurnRowComponent: aR
                                })]
                            }), (0, a.jsx)(aY, {
                                conversationId: ee,
                                entries: ef,
                                onApiChange: tp,
                                onVisibleContentReady: () => tv(!0),
                                responseSpacerState: tj
                            }), tX ? (0, a.jsx)("div", {
                                ref: tU,
                                className: "empty:hidden"
                            }) : null]
                        }) : td && null == ti && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            children: (0, a.jsx)(C.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation",
                                description: "Empty state when a ChatGPT conversation has no user or assistant text messages"
                            })
                        }), !tD && t2, (0, a.jsx)(rr.a, {
                            conversationId: en,
                            isWorkConversation: eO
                        }), eq && !ew ? (0, a.jsx)(sn, {
                            conversationId: ee,
                            moreDetailsEnabled: eI,
                            onAddSelectedText: e$
                        }) : null]
                    }), ec ? null : (0, a.jsx)(ao.a, {
                        initialPlacementKey: ez,
                        isActiveVoiceConversation: e3 && e4,
                        isLoadingHistory: eP,
                        latestUserTurnKey: ef.findLast(s8)?.turnKey,
                        onResponseSpacerStateChange: tS
                    }), tF ? (0, a.jsx)(l.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tz ? tY.c : tY.b
                    }) : null]
                })]
            }), W[157] = eU, W[158] = tc, W[159] = en, W[160] = J, W[161] = ti, W[162] = ee, W[163] = eg, W[164] = tB, W[165] = t1, W[166] = t2, W[167] = ef, W[168] = t9, W[169] = tP, W[170] = ey, W[171] = eC, W[172] = eo, W[173] = ez, W[174] = tT, W[175] = e3, W[176] = e4, W[177] = ew, W[178] = eE, W[179] = eP, W[180] = ei, W[181] = el, W[182] = te, W[183] = ec, W[184] = eA, W[185] = eM, W[186] = eR, W[187] = eO, W[188] = eI, W[189] = ne, W[190] = e$, W[191] = eb, W[192] = eN, W[193] = K, W[194] = tX, W[195] = tj, W[196] = e8.isChatPaneHidden, W[197] = eJ, W[198] = ep, W[199] = tM, W[200] = tL, W[201] = eD, W[202] = e2, W[203] = X, W[204] = tz, W[205] = eq, W[206] = e9, W[207] = td, W[208] = tG, W[209] = tD, W[210] = tF, W[211] = tZ, W[212] = eh, W[213] = th, W[214] = $, W[215] = R) : R = W[215], W[216] !== ei || W[217] !== nt || W[218] !== P || W[219] !== A || W[220] !== k || W[221] !== M || W[222] !== R ? (N = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": nt,
                inert: ei,
                children: [E, P, A, k, M, R]
            }), W[216] = ei, W[217] = nt, W[218] = P, W[219] = A, W[220] = k, W[221] = M, W[222] = R, W[223] = N) : N = W[223];
            let nn = N;
            W[224] !== tK || W[225] !== tq || W[226] !== tX ? (B = tX ? {
                aboveComposer: tK,
                belowMessage: tq
            } : null, W[224] = tK, W[225] = tq, W[226] = tX, W[227] = B) : B = W[227];
            let no = "main" === ta;
            return W[228] !== no ? (G = {
                presentation: "main",
                rendersWidgets: no
            }, W[228] = no, W[229] = G) : G = W[229], W[230] !== nn ? (F = (0, a.jsx)(tg.a, {
                children: nn
            }), W[230] = nn, W[231] = F) : F = W[231], W[232] !== G || W[233] !== F ? (D = (0, a.jsx)(p.b, {
                scope: aI,
                value: G,
                children: F
            }), W[232] = G, W[233] = F, W[234] = D) : D = W[234], W[235] !== B || W[236] !== D ? (H = (0, a.jsx)(aW.a, {
                value: B,
                children: D
            }), W[235] = B, W[236] = D, W[237] = H) : H = W[237], H
        }

        function s8(e) {
            let {
                turn: t
            } = e;
            return t.items.some(s7)
        }

        function s7(e) {
            return "user-message" === e.type
        }

        function s9(e) {
            let {
                turn: t
            } = e;
            return t.items.some(ie)
        }

        function ie(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function it(e) {
            let t, n, o, s = (0, r.c)(11),
                i = (0, y.useContext)(tu.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return s[0] !== e ? (t = (0, a.jsx)(ia, {
                    ...e
                }), s[0] = e, s[1] = t) : t = s[1], t
            }
            s[2] !== e.conversationId || s[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, s[2] = e.conversationId, s[3] = e.isImageEditComposer, s[4] = t) : t = s[4];
            let l = !e.isWorkConversation;
            return s[5] !== e ? (n = t => (0, a.jsx)(ia, {
                ...e,
                initialController: t
            }), s[5] = e, s[6] = n) : n = s[6], s[7] !== t || s[8] !== l || s[9] !== n ? (o = (0, a.jsx)(oF, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), s[7] = t, s[8] = l, s[9] = n, s[10] = o) : o = s[10], o
        }

        function ia(e) {
            let t, n, o, s, i, l, c, d, u, h, m, g, f, v, x, C, _, I, j, S = (0, r.c)(83),
                {
                    composerRef: T,
                    initialController: E,
                    ...P
                } = e,
                A = (0, p.y)(L.a),
                O = (0, p.x)(R.d, P.isTemporaryChat),
                {
                    conversationId: N,
                    isFullscreenComposer: B
                } = P,
                G = (0, b.a)(),
                {
                    state: F
                } = (0, w.X)(),
                D = (0, p.x)(s$, N),
                H = (0, p.x)(z.R, N),
                W = !(!P.disabled && !P.isSharedConversation && !P.isWorkConversation && !P.isTemporaryChat && !P.isImageEditComposer && (0, tt.a)(H)) ? null : H,
                q = (0, p.x)(null == P.requiredSystemHints ? ti : null, W);
            S[0] !== q || S[1] !== P.requiredSystemHints ? (t = P.requiredSystemHints ?? (null == q ? void 0 : [q]), S[0] = q, S[1] = P.requiredSystemHints, S[2] = t) : t = S[2];
            let U = t;
            S[3] !== q || S[4] !== N || S[5] !== A ? (n = () => {
                if (null != q) {
                    let e, t;
                    return e = (0, tn.b)(A, N, [q]), t = (0, te.h)(A, {
                        draftKey: N,
                        isTemporaryChat: !1
                    }), () => {
                        if (e(), A.get(tn.a, N).includes(q)) return;
                        let n = A.get(e9.v, N).filter(e => e !== q && e !== `plugin:${e7.d}`);
                        (0, e9.T)(A, N, n, t)
                    }
                }
            }, o = [A, N, q], S[3] = q, S[4] = N, S[5] = A, S[6] = n, S[7] = o) : (n = S[6], o = S[7]), (0, y.useEffect)(n, o);
            let K = (0, p.x)(nh.c, N);
            S[8] !== K || S[9] !== P.isSharedConversation || S[10] !== P.isWorkConversation || S[11] !== H ? (s = !P.isSharedConversation && !P.isWorkConversation && !(0, tt.a)(H) && !K, S[8] = K, S[9] = P.isSharedConversation, S[10] = P.isWorkConversation, S[11] = H, S[12] = s) : s = S[12];
            let V = s,
                Q = V && !P.disabled && !P.isSubmitDisabled && !P.isImageEditComposer,
                Y = V ? D : void 0;
            S[13] !== N || S[14] !== P.isImageEditComposer ? (i = P.isImageEditComposer ? {
                conversationId: N,
                surface: "image-edit"
            } : N, S[13] = N, S[14] = P.isImageEditComposer, S[15] = i) : i = S[15];
            let $ = i;
            S[16] !== N || S[17] !== $ || S[18] !== E ? (l = {
                composerController: E,
                conversationId: N,
                draftKey: $
            }, S[16] = N, S[17] = $, S[18] = E, S[19] = l) : l = S[19];
            let Z = (0, sW.a)(l),
                J = (0, oY.a)(Z, N, !P.isInlinePreview && !P.disabled, P.workspace && "tpp"),
                ee = (0, y.useContext)(tu.a),
                et = (0, y.useRef)(!1);
            S[20] !== $ || S[21] !== ee || S[22] !== E || S[23] !== P.isTemporaryChat || S[24] !== A ? (c = e => {
                null == e || null == E || et.current || (et.current = !0, (0, e9.U)(A, $, E.getPersistedText(), {
                    isTemporaryChat: P.isTemporaryChat
                }), ee?.onAdopt())
            }, S[20] = $, S[21] = ee, S[22] = E, S[23] = P.isTemporaryChat, S[24] = A, S[25] = c) : c = S[25];
            let en = (0, na.a)(c);
            S[26] !== en || S[27] !== T ? (d = (0, nt.a)(T, en), S[26] = en, S[27] = T, S[28] = d) : d = S[28];
            let ea = d,
                er = (0, y.useContext)(rk.a),
                eo = (0, p.w)(oR.a, N),
                es = (0, p.x)(z.cb, N),
                ei = (0, p.x)(z._, N),
                el = (0, p.x)(e9.i, N);
            S[29] !== ei ? (u = (0, z.zb)(ei), S[29] = ei, S[30] = u) : u = S[30];
            let ec = u,
                ed = (0, p.z)(k.j.activeTab$);
            if (S[31] !== ed || S[32] !== B || S[33] !== ec || S[34] !== er) {
                let e = er?.turn.items.flatMap(ii);
                h = B && ed?.tabType.kind === tM.a && "generatedImages" in ed.props && null != ed.props.generatedImages && !ec && null != er && "in_progress" !== er.turn.status && !er.turn.hasPendingAssistantReply && !er.showPendingLoadingMessage && !e?.some(is) && (null != er.errorMessage || e?.some(io)) ? er.turn.messageIds.at(-1) ?? er.turnKey : null, S[31] = ed, S[32] = B, S[33] = ec, S[34] = er, S[35] = h
            } else h = S[35];
            let eu = h,
                eh = (0, y.useRef)(null);
            S[36] !== eu || S[37] !== A ? (m = () => {
                null != eu && eu !== eh.current && (eh.current = eu, A.set(tS.a, "expanded"))
            }, g = [eu, A], S[36] = eu, S[37] = A, S[38] = m, S[39] = g) : (m = S[38], g = S[39]), (0, y.useEffect)(m, g);
            let ep = (0, p.w)(oQ.a, B ? N : null);
            S[40] !== q || S[41] !== W || S[42] !== Z || S[43] !== N || S[44] !== Q || S[45] !== $ || S[46] !== J || S[47] !== G || S[48] !== B || S[49] !== ea || S[50] !== O || S[51] !== P || S[52] !== U || S[53] !== A || S[54] !== Y || S[55] !== F?.libraryFileCreation || S[56] !== H ? (f = e => (0, a.jsxs)(tk.a, {
                children: [B && P.trackReadState && !e?.isHidden ? (0, a.jsx)(rA.a, {
                    conversationId: N,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, P.aboveComposerContent, (0, a.jsx)(tc.a, {
                    children: (0, a.jsx)(nH.a, {
                        ref: ea,
                        trackShownImpressions: P.trackShownImpressions && !P.isHidden && !e?.isHidden && !e?.isMinimized,
                        headerContent: P.headerContent,
                        imageSuggestionsEnabled: !P.disabled && !P.isSharedConversation && !P.isImageEditComposer,
                        allowBackgroundSubmit: P.isInlinePreview,
                        ...J,
                        disableAutoFocus: P.disableAutoFocus,
                        conversationOrigin: null == P.workspace ? void 0 : "tpp",
                        mcpAppContext: P.workspace?.mcpAppContext,
                        onServerThreadIdChange: P.workspace?.onServerThreadIdChange,
                        followupPortalTarget: P.followupPortalTarget,
                        takeoverDisclaimerRef: P.takeoverDisclaimerRef,
                        showConversationFollowups: P.showConversationFollowups,
                        autoPrepare: !P.isSubmitDisabled && !P.isSharedConversation,
                        browserConversationId: (0, X.getThreadBrowserConversationId)(A) ?? N,
                        composerController: Z,
                        conversationId: N,
                        requiredSystemHints: U,
                        hideSystemHints: null != P.requiredSystemHints,
                        getSubmissionGuard: null != q ? () => () => A.get(z.R, N) === H && A.get(ti, W) === q : void 0,
                        draftKey: $,
                        onPromptChange: O,
                        selectedCustomGpt: Y,
                        targetGizmoId: Y?.id,
                        onCustomGptChange: Q ? e => {
                            A.set(s$, N, e)
                        } : void 0,
                        onCustomAgentSelected: Q ? () => {
                            A.set(s$, N, null)
                        } : void 0,
                        disableDraftPrepare: P.isSubmitDisabled || P.isSharedConversation,
                        disableSubmit: P.disabled || P.isSubmitDisabled,
                        voiceInputDisabled: P.disabled,
                        aboveComposerHeaderContent: P.voiceDisclaimer,
                        getExtraDeveloperInstructions: !P.isInlinePreview && F?.libraryFileCreation && !P.isTemporaryChat ? ir : void 0,
                        isTemporaryChat: P.isTemporaryChat,
                        placeholder: P.disabled && !1 !== P.readOnlyPlaceholder ? P.readOnlyPlaceholder ?? G.formatMessage({
                            id: "chatgptConversations.sharedConversation.readOnlyPlaceholder",
                            defaultMessage: "This conversation is read-only.",
                            description: "Placeholder inside the disabled message composer when someone views a shared ChatGPT Work conversation that cannot be continued in Codex Desktop"
                        }) : void 0,
                        readOnly: P.disabled,
                        hideModelPicker: P.hideModelPicker,
                        modelPickerPending: P.isSubmitDisabled,
                        showFilePicker: !P.disabled && !P.isSubmitDisabled,
                        showPendingFilePicker: !P.disabled && P.isSubmitDisabled,
                        showVoiceStage: P.showVoiceStage,
                        onSubmitAccepted: t => {
                            e?.onSubmitStart(), P.responseSpacerState?.place(), P.onSubmitAccepted?.(t)
                        },
                        onSubmitError: P.responseSpacerState?.clear
                    })
                })]
            }), S[40] = q, S[41] = W, S[42] = Z, S[43] = N, S[44] = Q, S[45] = $, S[46] = J, S[47] = G, S[48] = B, S[49] = ea, S[50] = O, S[51] = P, S[52] = U, S[53] = A, S[54] = Y, S[55] = F?.libraryFileCreation, S[56] = H, S[57] = f) : f = S[57];
            let em = f;
            S[58] !== A ? (v = () => {
                (0, tx.K)(A, "conversation")
            }, x = () => {
                (0, tx.K)(A, "conversation")
            }, S[58] = A, S[59] = v, S[60] = x) : (v = S[59], x = S[60]);
            let eg = !P.isInlinePreview && !P.disabled && !P.isSubmitDisabled;
            S[61] !== Z || S[62] !== eg ? (C = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rN, {
                    composerController: Z,
                    enabled: eg
                })
            }), S[61] = Z, S[62] = eg, S[63] = C) : C = S[63];
            let ef = B ? "floating" : "pane",
                ev = P.disabled || P.awaitingGptContinuation,
                ey = null == er && !ec,
                ex = el || ec ? "loading" : "idle";
            return S[64] !== ex ? (_ = {
                type: ex,
                unread: !1
            }, S[64] = ex, S[65] = _) : _ = S[65], S[66] !== ep || S[67] !== P.isHidden || S[68] !== P.renderTranscript || S[69] !== em || S[70] !== eo || S[71] !== ef || S[72] !== ev || S[73] !== ey || S[74] !== _ || S[75] !== es ? (I = (0, a.jsx)(M.a, {
                notifications: ep,
                isHidden: P.isHidden,
                placement: ef,
                responsePreview: eo,
                forceExpanded: ev,
                composerOnly: ey,
                title: es,
                statusState: _,
                renderTranscript: P.renderTranscript,
                children: em
            }), S[66] = ep, S[67] = P.isHidden, S[68] = P.renderTranscript, S[69] = em, S[70] = eo, S[71] = ef, S[72] = ev, S[73] = ey, S[74] = _, S[75] = es, S[76] = I) : I = S[76], S[77] !== N || S[78] !== v || S[79] !== x || S[80] !== C || S[81] !== I ? (j = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": N,
                onMouseDownCapture: v,
                onFocusCapture: x,
                children: [C, I]
            }), S[77] = N, S[78] = v, S[79] = x, S[80] = C, S[81] = I, S[82] = j) : j = S[82], j
        }
        async function ir() {
            return [tR.a]
        }

        function io(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function is(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function ii(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
    }),
    Ppno: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("zd8w"),
            s = n("hZax"),
            i = n("Ho4C"),
            l = n("KFm7"),
            c = n("lsfk"),
            d = n("bIvi");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, h, p, m, g, f, v, y, x, b, C, w, _, I = (0, r.c)(59),
                    {
                        initialPlacementKey: j,
                        isActiveVoiceConversation: S,
                        isLoadingHistory: T,
                        latestUserTurnKey: E,
                        onResponseSpacerStateChange: P
                    } = e,
                    A = void 0 !== S && S,
                    k = void 0 !== T && T,
                    M = (0, s.k)();
                I[0] !== A || I[1] !== M ? (t = A && (0, s.f)(M, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), I[0] = A, I[1] = M, I[2] = t) : t = I[2];
                let R = t,
                    O = (0, o.useRef)(E),
                    N = (0, o.useRef)(k),
                    B = (0, o.useRef)(null),
                    G = (0, o.useRef)(null),
                    F = (0, c.b)();
                I[3] !== F ? (n = () => new l.a(F), I[3] = F, I[4] = n) : n = I[4];
                let [z] = (0, o.useState)(n), {
                    clear: L,
                    consumeGrowth: D,
                    getHeightPx: H,
                    place: W,
                    prepareThreadEndContent: q
                } = z, {
                    addScrollListener: U,
                    getScrollElement: K,
                    responseSpacerController: V
                } = F;
                I[5] !== L || I[6] !== F ? (u = () => {
                    L(), F.scrollToBottom()
                }, I[5] = L, I[6] = F, I[7] = u) : u = I[7];
                let Q = (0, d.a)(u);
                I[8] !== D || I[9] !== H || I[10] !== q || I[11] !== z.height || I[12] !== z.holdViewport || I[13] !== V || I[14] !== Q ? (h = () => V.register({
                    consumeGrowth: D,
                    getHeightPx: H,
                    holdViewport: z.holdViewport,
                    prepareThreadEndContent: q,
                    scrollToBottom: Q
                }, z.height).dispose, I[8] = D, I[9] = H, I[10] = q, I[11] = z.height, I[12] = z.holdViewport, I[13] = V, I[14] = Q, I[15] = h) : h = I[15], I[16] !== D || I[17] !== H || I[18] !== q || I[19] !== z || I[20] !== V || I[21] !== Q ? (p = [D, H, q, z, V, Q], I[16] = D, I[17] = H, I[18] = q, I[19] = z, I[20] = V, I[21] = Q, I[22] = p) : p = I[22], (0, o.useInsertionEffect)(h, p), I[23] === Symbol.for("react.memo_cache_sentinel") ? (m = (e, t) => {
                    B.current = {
                        turnKey: e,
                        element: t
                    }, G.current?.(e, t)
                }, I[23] = m) : m = I[23];
                let Y = (0, d.a)(m);
                I[24] === Symbol.for("react.memo_cache_sentinel") ? (g = e => {
                    G.current = e;
                    let t = B.current;
                    return null != t && e(t.turnKey, t.element), () => {
                        G.current = null
                    }
                }, I[24] = g) : g = I[24];
                let $ = (0, d.a)(g);
                I[25] !== K || I[26] !== E || I[27] !== W || I[28] !== R ? (f = () => {
                    let e = K();
                    if (null != e && 0 !== e.clientHeight)
                        if (R && null != E) {
                            var t, n;
                            let a, r = (t = e, n = E, a = t.querySelector(`[data-turn-key="${CSS.escape(n)}"]`), a?.querySelector("[data-user-message-bubble]") ?? a);
                            if (null == r) return;
                            W(r)
                        } else W()
                }, I[25] = K, I[26] = E, I[27] = W, I[28] = R, I[29] = f) : f = I[29];
                let X = (0, o.useEffectEvent)(f);
                return I[30] !== L || I[31] !== D || I[32] !== H || I[33] !== P || I[34] !== Y || I[35] !== W || I[36] !== R ? (v = () => (P({
                    voiceAutoScrollEnabled: R,
                    clear: L,
                    consumeGrowth: D,
                    getHeightPx: H,
                    onTurnLayoutReady: Y,
                    place: W
                }), () => {
                    P(null)
                }), y = [L, D, H, P, Y, W, R], I[30] = L, I[31] = D, I[32] = H, I[33] = P, I[34] = Y, I[35] = W, I[36] = R, I[37] = v, I[38] = y) : (v = I[37], y = I[38]), (0, o.useLayoutEffect)(v, y), I[39] !== K || I[40] !== k || I[41] !== E || I[42] !== W || I[43] !== z || I[44] !== $ || I[45] !== R ? (x = () => {
                    let e = O.current,
                        t = N.current;
                    if (O.current = E, N.current = k, R && !k && !t && null != E && E !== e) {
                        var n, a, r, o, s;
                        let e, t, i, l, c;
                        return n = E, a = K, r = W, o = $, s = z.getPendingPlacementSignal(), t = null, i = null, l = !1, c = () => {
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
                }, b = [K, k, E, W, $, z, R], I[39] = K, I[40] = k, I[41] = E, I[42] = W, I[43] = z, I[44] = $, I[45] = R, I[46] = x, I[47] = b) : (x = I[46], b = I[47]), (0, o.useLayoutEffect)(x, b), I[48] !== U || I[49] !== j || I[50] !== X || I[51] !== z ? (C = () => {
                    if (null == j) return;
                    let e = z.getPendingPlacementSignal();
                    return U(() => {
                        e.aborted || X()
                    })
                }, I[48] = U, I[49] = j, I[50] = X, I[51] = z, I[52] = C) : C = I[52], I[53] !== U || I[54] !== j || I[55] !== z ? (w = [U, j, z], I[53] = U, I[54] = j, I[55] = z, I[56] = w) : w = I[56], (0, o.useLayoutEffect)(C, w), I[57] !== z ? (_ = (0, a.jsx)(i.a, {
                    controller: z
                }), I[57] = z, I[58] = _) : _ = I[58], _
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
            return null != a ? a : n(p.D, e) || n(l.i, e) || null != n(l.y, e) ? void 0 : null
        });
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, f, v, y, x, b = (0, r.c)(36),
                    {
                        children: C,
                        conversationId: w,
                        routePattern: _,
                        homePath: I
                    } = e,
                    j = void 0 === I ? "/" : I,
                    S = (0, o.y)(i.a),
                    {
                        hash: T,
                        key: E,
                        pathname: P,
                        search: A,
                        state: k
                    } = (0, s.X)(),
                    {
                        conversationId: M,
                        gizmoId: R
                    } = (0, s.bb)(),
                    O = (0, o.x)(g, w),
                    N = (0, o.x)(p.D, w),
                    B = (0, o.x)(p.R, w),
                    G = N ? B : R;
                b[0] !== G ? (t = null != G && (0, u.a)(G) ? G : null, b[0] = G, b[1] = t) : t = b[1], b[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                    enabled: !1
                }, b[2] = n) : n = b[2];
                let {
                    data: F
                } = (0, o.x)(d.b, t, n);
                b[3] !== G ? (l = null == G || (0, u.a)(G) ? null : G, b[3] = G, b[4] = l) : l = b[4], b[5] === Symbol.for("react.memo_cache_sentinel") ? (f = {
                    enabled: !1
                }, b[5] = f) : f = b[5];
                let {
                    data: z
                } = (0, o.x)(c.b, l, f);
                if (null === O || (0, m.i)(A) && null != O && !N) {
                    let e;
                    return b[6] !== j || b[7] !== A ? (e = (0, a.jsx)(s.l, {
                        replace: !0,
                        to: {
                            pathname: j,
                            search: A
                        }
                    }), b[6] = j, b[7] = A, b[8] = e) : e = b[8], e
                }
                b[9] !== w || b[10] !== z?.gizmo || b[11] !== G || b[12] !== F?.gizmo || b[13] !== O || b[14] !== _ ? (v = null != _ ? (0, s.C)(_, {
                    conversationId: O ?? w
                }) : (0, m.c)(O ?? w, {
                    gizmoId: F?.gizmo.short_url ?? z?.gizmo.short_url ?? G
                }), b[9] = w, b[10] = z?.gizmo, b[11] = G, b[12] = F?.gizmo, b[13] = O, b[14] = _, b[15] = v) : v = b[15];
                let L = v;
                if (b[16] !== w || b[17] !== L || b[18] !== M || b[19] !== T || b[20] !== E || b[21] !== P || b[22] !== O || b[23] !== S || b[24] !== A || b[25] !== k) {
                    let e = new URLSearchParams(A),
                        t = null != O && e.has("mfr"),
                        n = S.get(p.x, w),
                        r = k;
                    if (t) {
                        let t, n;
                        if (e.delete("mfr"), b[27] !== k ? (t = k ?? {}, b[27] = k, b[28] = t) : t = b[28], b[29] !== t) {
                            let {
                                modelFirstLanding: e,
                                modelFirstFallback: a,
                                ...r
                            } = t;
                            n = r, b[29] = t, b[30] = n
                        } else n = b[30];
                        r = n
                    }
                    if (null != M && (0, h.e)(M) && null != O) {
                        let e;
                        b[31] !== r ? (e = {
                            ...r,
                            fromChatGptFirstSend: !0
                        }, b[31] = r, b[32] = e) : e = b[32], r = e
                    }
                    y = P !== L || t ? (0, a.jsx)(s.l, {
                        replace: !0,
                        state: "tpp" === n || "flora" === n ? {
                            ...r,
                            workTurnVisit: (0, m.f)(S, E, k?.workTurnVisit)
                        } : r,
                        to: {
                            hash: t ? "" : T,
                            pathname: L,
                            search: t ? e.toString() : A
                        }
                    }) : null, b[16] = w, b[17] = L, b[18] = M, b[19] = T, b[20] = E, b[21] = P, b[22] = O, b[23] = S, b[24] = A, b[25] = k, b[26] = y
                } else y = b[26];
                return b[33] !== C || b[34] !== y ? (x = (0, a.jsxs)(a.Fragment, {
                    children: [y, C]
                }), b[33] = C, b[34] = y, b[35] = x) : x = b[35], x
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
            s = n("slpy"),
            i = n("BolX"),
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
            x = n("X6Vn"),
            b = n("SGsN"),
            C = n("ANuo"),
            w = n("yGJW"),
            _ = n("gBBC"),
            I = n("OWtl"),
            j = n("hZax"),
            S = n("JYRT"),
            T = n("wwvo"),
            E = n("wrCb"),
            P = n("H7Nt"),
            A = n("vzxm"),
            k = n("jAnS"),
            M = n("wzUW"),
            R = n("Q9Us"),
            O = n("fwYa"),
            N = n("qfGT");
        let B = (0, y.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function G(e) {
            let t, n, y, G, F, z, L, D, H, W, q, U, K, V, Q, Y, $, X, Z, J, ee, et = (0, r.c)(60),
                {
                    gizmo: en
                } = e,
                ea = (0, i.y)(I.a),
                er = (0, c.a)(),
                {
                    search: eo
                } = (0, u.X)(),
                es = (0, u.Z)(),
                [ei, el] = (0, l.useState)(!1),
                ec = (0, j.h)("2160578039"),
                ed = (0, i.x)(S.a, "2513446768"),
                eu = ec && "gpt" === en.gizmo.gizmo_type && null != en.gizmo.migrated_plugin_id;
            et[0] !== ed ? (t = ed?.get("disable_gpt_updates", !1), et[0] = ed, et[1] = t) : t = et[1];
            let eh = t,
                ep = en.gizmo.current_user_permission?.can_write && !eu && !eh,
                {
                    data: em
                } = (0, i.z)(T.c);
            et[2] !== en.gizmo.id || et[3] !== em ? (n = em?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === en.gizmo.id
            }), et[2] = en.gizmo.id, et[3] = em, et[4] = n) : n = et[4];
            let eg = n;
            et[5] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, E.a)("/gpts/editor"), et[5] = y) : y = et[5];
            let ef = `${y}/${encodeURIComponent(en.gizmo.id)}`;
            et[6] !== en.gizmo.id || et[7] !== en.gizmo.short_url ? (G = en.gizmo.short_url?.trim() || en.gizmo.id, et[6] = en.gizmo.id, et[7] = en.gizmo.short_url, et[8] = G) : G = et[8], et[9] !== G ? (F = (0, A.c)(G), et[9] = G, et[10] = F) : F = et[10], et[11] !== eo ? (z = (0, k.e)("", (0, k.i)(eo)), et[11] = eo, et[12] = z) : z = et[12];
            let ev = `${F}${z}`;
            et[13] !== er ? (L = er.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions",
                description: "Accessible label for the compact overflow menu containing actions for the current custom GPT in Codex Desktop"
            }), et[13] = er, et[14] = L) : L = et[14];
            let ey = L;
            et[15] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, a.jsx)(C.a, {
                className: "icon-sm"
            }), et[15] = D) : D = et[15], et[16] !== ey ? (H = (0, a.jsx)(m.a, {
                "aria-label": ey,
                color: "ghost",
                size: "icon",
                children: D
            }), et[16] = ey, et[17] = H) : H = et[17], et[18] !== ey || et[19] !== ei || et[20] !== H ? (W = (0, a.jsx)(s.a, {
                content: ey,
                disabled: ei,
                children: H
            }), et[18] = ey, et[19] = ei, et[20] = H, et[21] = W) : W = et[21], et[22] !== en.gizmo.gizmo_type || et[23] !== en.gizmo.id || et[24] !== es || et[25] !== ev || et[26] !== ea ? (q = "gpt" === en.gizmo.gizmo_type ? (0, a.jsxs)(g.c.Item, {
                href: ev,
                onClick: e => {
                    e.defaultPrevented || ((0, w.a)(ea, o.pc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: en.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), el(!1), (0, _.c)(ea, null), (0, p.m)(ea, "chat"), es(ev, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(g.c.ItemIcon, {
                    children: (0, a.jsx)(v.Mh, {})
                }), (0, a.jsx)(d.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat",
                    description: "Short GPT actions menu label that opens a new conversation with the same custom GPT, rather than switching to general ChatGPT"
                })]
            }) : null, et[22] = en.gizmo.gizmo_type, et[23] = en.gizmo.id, et[24] = es, et[25] = ev, et[26] = ea, et[27] = q) : q = et[27], et[28] !== en || et[29] !== ea ? (U = () => (0, x.f)(ea, B, {
                accountId: ea.get(h.f),
                resource: en
            }), et[28] = en, et[29] = ea, et[30] = U) : U = et[30], et[31] === Symbol.for("react.memo_cache_sentinel") ? (K = (0, a.jsx)(g.c.ItemIcon, {
                children: (0, a.jsx)(v.ie, {})
            }), V = (0, a.jsx)(d.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About",
                description: "GPT menu action that opens its details over the current conversation or landing page"
            }), et[31] = K, et[32] = V) : (K = et[31], V = et[32]), et[33] !== U ? (Q = (0, a.jsxs)(g.c.Item, {
                onSelect: U,
                children: [K, V]
            }), et[33] = U, et[34] = Q) : Q = et[34];
            let ex = eg ? N.a : O.a;
            return et[35] !== en || et[36] !== er || et[37] !== eg || et[38] !== ea ? (Y = () => {
                (0, T.e)(ea, en, !eg).catch(() => {
                    ea.get(b.f).danger(er.formatMessage({
                        id: "chatgptConversations.customGpt.pinFailed",
                        defaultMessage: "Couldn't update pinned GPT",
                        description: "Error toast shown when adding or removing a custom GPT from the user's pinned sidebar items fails in Codex Desktop"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.customGpt.pinFailed"
                        }
                    })
                })
            }, et[35] = en, et[36] = er, et[37] = eg, et[38] = ea, et[39] = Y) : Y = et[39], et[40] !== eg ? ($ = eg ? (0, a.jsx)(d.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT",
                description: "Compact overflow-menu action that removes the current custom GPT from the user's pinned sidebar items in Codex Desktop"
            }) : (0, a.jsx)(d.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT",
                description: "Compact overflow-menu action that adds the current custom GPT to the user's pinned sidebar items in Codex Desktop"
            }), et[40] = eg, et[41] = $) : $ = et[41], et[42] !== ex || et[43] !== Y || et[44] !== $ ? (X = (0, a.jsx)(g.c.Item, {
                leftIconAsset: ex,
                onSelect: Y,
                children: $
            }), et[42] = ex, et[43] = Y, et[44] = $, et[45] = X) : X = et[45], et[46] !== ep || et[47] !== ef || et[48] !== en.gizmo.current_user_permission?.can_view_config ? (Z = ep || en.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(g.c.Item, {
                href: ef,
                leftIconAsset: ep ? R.a : M.a,
                onClick: e => {
                    (0, f.e)({
                        event: e,
                        href: ef,
                        initiator: "open_in_browser_bridge",
                        openTarget: ep ? "external-browser" : void 0
                    })
                },
                children: ep ? (0, a.jsx)(d.a, {
                    id: "chatgptConversations.customGpt.edit",
                    defaultMessage: "Edit GPT",
                    description: "Compact overflow-menu action that opens the current custom GPT in its ChatGPT web editor from Codex Desktop"
                }) : (0, a.jsx)(d.a, {
                    id: "chatgptConversations.customGpt.view",
                    defaultMessage: "View",
                    description: "Short action in the custom GPT overflow menu for users who can view its configuration but cannot edit it, including after migration to a plugin. Opens the read-only GPT configuration page in ChatGPT."
                })
            }) : null, et[46] = ep, et[47] = ef, et[48] = en.gizmo.current_user_permission?.can_view_config, et[49] = Z) : Z = et[49], et[50] !== en ? (J = (0, a.jsx)(P.a, {
                resource: en
            }), et[50] = en, et[51] = J) : J = et[51], et[52] !== ei || et[53] !== W || et[54] !== q || et[55] !== Q || et[56] !== X || et[57] !== Z || et[58] !== J ? (ee = (0, a.jsxs)(g.a, {
                align: "start",
                contentWidth: "menu",
                open: ei,
                onOpenChange: el,
                triggerButton: W,
                children: [q, Q, X, Z, J]
            }), et[52] = ei, et[53] = W, et[54] = q, et[55] = Q, et[56] = X, et[57] = Z, et[58] = J, et[59] = ee) : ee = et[59], ee
        }
        n.d(t, {}, {
            ChatGptGizmoHeader: function(e) {
                let t, n, o, s, l, c = (0, r.c)(12),
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
                } = (0, i.x)(T.b, t);
                if (null == h) return null;
                c[3] !== h.gizmo.display.name ? (n = h.gizmo.display.name.trim(), c[3] = h.gizmo.display.name, c[4] = n) : n = c[4];
                let p = n;
                return c[5] !== p ? (o = p ? (0, a.jsx)("span", {
                    className: "truncate",
                    children: p
                }) : null, c[5] = p, c[6] = o) : o = c[6], c[7] !== h ? (s = (0, a.jsx)(G, {
                    gizmo: h
                }), c[7] = h, c[8] = s) : s = c[8], c[9] !== o || c[10] !== s ? (l = (0, a.jsxs)("div", {
                    className: "flex min-w-0 items-center gap-1 select-none",
                    children: [o, s]
                }), c[9] = o, c[10] = s, c[11] = l) : l = c[11], l
            }
        })
    }),
    C6kc: (function(e, t, n) {
        var a = n("mBJV"),
            r = n("MVHH"),
            o = n("D99L"),
            s = n("fVOX"),
            i = n("yGJW"),
            l = n("g2p6");

        function c(e, t, n) {
            "memory_footnote_shown" === t && (0, i.a)(e, o.CodexChatgptInteractionMemoryFootnoteShown, {
                memoryCitationExperiment: n
            }), e.get(s.a).count("default", t, {
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
                    experiment: o,
                    messageId: s,
                    source: l,
                    feedback: d,
                    selectedFeedback: u,
                    surface: h = "sources"
                } = t, p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_UNSPECIFIED";
                "positive" === d ? p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE" : "negative" === d ? p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE" : Object.is(d, null) && (p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_CLEARED");
                let m = null == l ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_TURN_SOURCES_BUTTON" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_SOURCES_SIDEBAR_ACTION_MENU";
                "explainer" === h && (m = "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON"), (0, i.a)(e, r.W, {
                    actionType: n,
                    conversationId: a ?? void 0,
                    messageId: s,
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
                    memoryCitationExperiment: o
                }), "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_OPENED" === n && c(e, "chatgpt_memory_citations_sidebar_open_clicked", o)
            },
            c: function(e, t) {
                "dismissed" === t && (0, i.a)(e, o.CodexChatgptInteractionMemoryIntroductionDismissed, {
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
            r = n("BolX"),
            o = n("zd8w"),
            s = n("RU3e"),
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
                    x = void 0 === y || y,
                    b = (0, r.y)(l.a),
                    C = (0, o.useId)(),
                    {
                        mutate: w
                    } = (0, i.l)();
                return f[0] !== v || f[1] !== C || f[2] !== b ? (t = () => (b.set(p.b, e => new Map(e).set(C, v)), b.get(p.a)?.dismissCurrent(), () => {
                    b.set(p.b, e => {
                        let t = new Map(e);
                        return t.delete(C), t
                    })
                }), n = [v, C, b], f[0] = v, f[1] = C, f[2] = b, f[3] = t, f[4] = n) : (t = f[3], n = f[4]), (0, o.useEffect)(t, n), f[5] !== v || f[6] !== x || f[7] !== w || f[8] !== b ? (m = () => {
                    if (!x) return;
                    let e = b.watch(e => {
                            let {
                                get: t
                            } = e
                        }),
                        t = b.watch(e => {
                            let {
                                get: t
                            } = e, n = !0 === t(s.a);
                            if ((0, h.ac)(b, v, n), !n) return;
                            let a = t(h.j, v);
                            if (null == a || !0 !== t(d.r, a)) return;
                            let r = (0, u.b)(a);
                            (0, c.j)(b, r, b.get(d.z, r)), w(a)
                        });
                    return () => {
                        e(), t(), (0, h.ac)(b, v, !1)
                    }
                }, g = [v, x, w, b], f[5] = v, f[6] = x, f[7] = w, f[8] = b, f[9] = m, f[10] = g) : (m = f[9], g = f[10]), (0, o.useEffect)(m, g), null
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
            x = n("lBzi"),
            b = n("Ga6O"),
            C = n("dQRk"),
            w = n("jfiJ"),
            _ = n("FGJH"),
            I = n("Vcrm"),
            j = n("OCK3"),
            S = n("dhxJ"),
            T = n("lsky"),
            E = n("rKAs"),
            P = n("ASxG"),
            A = n("rn0J"),
            k = n("XpUB"),
            M = n("G6mJ"),
            R = n("VB5Q"),
            O = n("VTN2");
        let N = P.record(P.string(), P.union([P.string(), P.literal(!0)]));

        function B(e) {
            let t, n, P, B, F, z, L = (0, r.c)(28),
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
                $ = void 0 !== U && U,
                X = void 0 === K || K,
                Z = void 0 === V || V,
                J = void 0 === Q ? "fallback" : Q,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            L[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), L[0] = t) : t = L[0], L[1] !== Z || L[2] !== D || L[3] !== X || L[4] !== W || L[5] !== $ || L[6] !== Y ? (n = [D, X, Z, W, Y, $], L[1] = Z, L[2] = D, L[3] = X, L[4] = W, L[5] = $, L[6] = Y, L[7] = n) : n = L[7], (0, c.useEffect)(t, n), L[8] !== Z || L[9] !== D || L[10] !== $ || L[11] !== Y || L[12] !== ee || L[13] !== H ? (P = () => {
                let e = ee.get(C.j, D),
                    t = ee.query.getData(x.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(C.x, D);
                if (!Z || "tpp" === n || "flora" === n) return null;
                let a = ee.get(C.L, D),
                    r = $ && "conversation" === Y ? ee.get(I.a, D)?.promptMessageId : void 0,
                    o = function(e) {
                        for (let {
                                turn: t
                            }
                            of e.toReversed())
                            for (let e of t.items.toReversed()) {
                                if ("assistant-message" !== e.type) continue;
                                let t = null,
                                    n = 0;
                                if ((0, T.h)((0, k.a)(e.content, E.b), a => {
                                        if ("codexDirective" === a.type && a.name === E.a) {
                                            let n = N.safeParse(a.attributes);
                                            if (!n.success) return;
                                            let r = (0, M.a)(n.data, e.contentReferences),
                                                o = O.d.safeParse(r?.reference);
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
                    }(H ?? (0, b.b)({
                        conversation: t,
                        threadMapping: a,
                        threadCurrentNode: r ?? ee.get(C.B, D),
                        conversationOrigin: n,
                        isStreaming: (0, C.zb)(ee.get(C._, D)),
                        mode: Y,
                        moderationDisclaimersByMessageId: ee.get(C.M, D),
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
                    i = (0, S.a)(a?.[o.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(j.b, s) ?? i?.[String(o.codeBlockIndex)]?.content ?? o.content
                }
            }, L[8] = Z, L[9] = D, L[10] = $, L[11] = Y, L[12] = ee, L[13] = H, L[14] = P) : P = L[14];
            let en = (0, y.a)(P);
            L[15] !== ee ? (B = (e, t) => {
                let n = e => {
                    (0, g.a)(ee, s.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: o.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
                    })
                };
                return (0, v.b)(e, void 0, () => {
                    "string" == typeof e ? n(e) : e.then(n, G)
                }).then(e => {
                    e && !t?.aborted && ee.get(m.f).success((0, a.jsx)(d.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard",
                        description: "Success toast after the user copies the last assistant code block using the keyboard shortcut or command menu in Chat mode"
                    }))
                })
            }, L[15] = ee, L[16] = B) : B = L[16];
            let ea = B;
            return L[17] !== D || L[18] !== en || L[19] !== W || L[20] !== $ || L[21] !== Y || L[22] !== ee || L[23] !== ea ? (F = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!W || ee.get(C.A, D) || null == t || ee.get(_.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let r = ee.get(u.a),
                    o = ee.get(C.B, D),
                    s = ee.get(h.e).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(C.B, D) !== o || $ && "conversation" === Y && t(I.a, D)?.promptMessageId !== n || t(h.e).copyLastCodeBlock !== s) && a.abort()
                    });
                ea((async () => {
                    await (0, w.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, L[17] = D, L[18] = en, L[19] = W, L[20] = $, L[21] = Y, L[22] = ee, L[23] = ea, L[24] = F) : F = L[24], L[25] !== X || L[26] !== J ? (z = {
                enabled: X,
                priority: J
            }, L[25] = X, L[26] = J, L[27] = z) : z = L[27], (0, p.a)("copyLastCodeBlock", F, z), null
        }

        function G() {}
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
            i = n("QcFS"),
            l = n("TdH6"),
            c = n("QcW8");
        n("ZU27"), n("TpEm");
        var d = n("gbrq"),
            u = n("fBor"),
            h = n("ipGa"),
            p = n("d0tz"),
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
                    if (null != r) return (0, f.a)(a, (0, p.Qe)(`chatgpt:${r}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, m.useLayoutEffect)(e, t), null
        }
        n("n5iL"), n("q3HK"), n("bf6R");
        var x = n("rBfn"),
            b = n("enMl"),
            C = n("PCEr");

        function w(e) {
            let t, n, o, s, l, c, d = (0, r.c)(16),
                {
                    chatIcon: p,
                    header: m,
                    title: g,
                    isArchivedPreview: f,
                    children: v
                } = e;
            return d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(i.a.MainContentLayout, {
                layout: (0, h.a)() ? "default" : "thread-edge-scroll"
            }), d[0] = t) : t = d[0], d[1] !== f ? (n = f ? null : (0, a.jsx)(u.SitePreviewBridge, {}), d[1] = f, d[2] = n) : n = d[2], d[3] !== m ? (o = null == m ? null : (0, a.jsx)(i.a.Header, {
                desktopPlacement: "titlebar",
                divider: !1,
                children: m
            }), d[3] = m, d[4] = o) : o = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(i.a.RightPanelOutlet, {
                children: (0, a.jsx)(i.a.RightPanelTabs, {})
            }), d[5] = s) : s = d[5], d[6] !== p || d[7] !== m || d[8] !== f || d[9] !== g ? (l = f ? null : (0, a.jsx)(_, {
                chatIcon: p,
                mainToolbar: m,
                title: g
            }), d[6] = p, d[7] = m, d[8] = f, d[9] = g, d[10] = l) : l = d[10], d[11] !== v || d[12] !== n || d[13] !== o || d[14] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, o, v, s, l]
            }), d[11] = v, d[12] = n, d[13] = o, d[14] = l, d[15] = c) : c = d[15], c
        }

        function _(e) {
            let t, n, i, u, p, m, f = (0, r.c)(13),
                {
                    chatIcon: v,
                    mainToolbar: w,
                    title: _
                } = e,
                I = (0, o.y)(g.a);
            (0, s.a)(), (0, o.z)(d.i), (0, o.z)(c.s), f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(y, {}), f[0] = t, f[1] = n) : (t = f[0], n = f[1]), f[2] !== v || f[3] !== _ ? (i = (0, a.jsx)(b.a, {
                title: _,
                icon: v
            }), f[2] = v, f[3] = _, f[4] = i) : i = f[4];
            let j = w ?? void 0;
            return f[5] !== j ? (u = (0, a.jsx)(C.a, {
                mainToolbar: j
            }), f[5] = j, f[6] = u) : u = f[6], f[7] !== I.value.routeKind ? (p = "other" === I.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(x.b, {
                showLauncherButton: !1
            }), f[7] = I.value.routeKind, f[8] = p) : p = f[8], f[9] !== i || f[10] !== u || f[11] !== p ? (m = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i, u, p, null, null]
            }), f[9] = i, f[10] = u, f[11] = p, f[12] = m) : m = f[12], m
        }
    }),
    dLcZ: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("on57"),
            s = n("QcFS"),
            i = n("NVRI");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, s, l, c, d, u, h = (0, r.c)(16);
                if (h[0] !== e ? ({
                        isTemporaryChat: l,
                        isCloudTask: n,
                        breadcrumbHeader: t,
                        startActions: s,
                        ...o
                    } = e, h[0] = e, h[1] = t, h[2] = n, h[3] = o, h[4] = s, h[5] = l) : (t = h[1], n = h[2], o = h[3], s = h[4], l = h[5]), void 0 !== l && l) return null;
                h[6] !== n || h[7] !== s ? (c = null != s || n ? (0, a.jsxs)(a.Fragment, {
                    children: [s, null]
                }) : null, h[6] = n, h[7] = s, h[8] = c) : c = h[8], h[9] !== o || h[10] !== c ? (d = (0, a.jsx)(i.a, {
                    ...o,
                    inset: "tab-strip-flush-start",
                    startActions: c
                }), h[9] = o, h[10] = c, h[11] = d) : d = h[11];
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
            },
            b: function(e) {
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
                        return null == r ? null : (0, a.jsx)(s.a.HeaderAction, {
                            actionId: t,
                            align: "end",
                            allowsThreadContentOverlap: p,
                            order: n,
                            children: (0, a.jsx)("div", {
                                className: (0, o.b)("flex items-center gap-toolbar-action", p && "browser:rounded-lg browser:bg-surface"),
                                children: r
                            })
                        }, t)
                    })
                }), c[7] = p, c[8] = i, c[9] = l) : l = c[9], l
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
                let a = n(l.L, e),
                    o = n(l.B, e);
                return null == a || null == o ? null : (0, r.b)({
                    mapping: a,
                    current_node: o
                }).findLast(e => "assistant" === e.author.role && !(0, r.m)(e) && "" !== (0, r.e)(e).trim())
            }),
            d = (0, a.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (null == e || n(i.d, "2163293173") && !n(l.I, e)) return null;
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
                    x = (0, o.z)(i.f);
                return null == x || f.gizmo.tags?.includes("first_party") || "marketplace" !== f.gizmo.share_recipient && "link" !== f.gizmo.share_recipient ? null : (g[0] !== x || g[1] !== v || g[2] !== f || g[3] !== y ? (t = () => {
                    v?.(), (0, u.f)(y, p, {
                        accountId: x,
                        resource: f
                    })
                }, g[0] = x, g[1] = v, g[2] = f, g[3] = y, g[4] = t) : t = g[4], g[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(l.c.ItemIcon, {
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
                p = (0, i.X)(),
                m = (0, i.Z)(),
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
            i = n("zKCW"),
            l = n("ygO2"),
            c = n("HOLv"),
            d = n("hZax"),
            u = n("slBk"),
            h = n("CS9C");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, m, g, f, v, y, x, b = (0, r.c)(34),
                    {
                        gptName: C,
                        accessState: w,
                        onUsePlugin: _,
                        onKeepUsingGpt: I,
                        onRetry: j
                    } = e,
                    S = (0, o.a)(),
                    T = (0, d.g)("2513446768");
                b[0] !== T || b[1] !== S ? (t = S.formatDate((0, u.a)(T.get("retirement_date", "")), {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }), b[0] = T, b[1] = S, b[2] = t) : t = b[2];
                let E = t;
                if ("error" === w && null != j) {
                    let e;
                    b[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceRetry",
                        defaultMessage: "Try again",
                        description: "Retry checking access to the migrated plugin"
                    }), b[3] = e) : e = b[3], n = e
                } else if ("admin" === w) {
                    let e;
                    b[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.viewPlugin",
                        defaultMessage: "View Plugin",
                        description: "Button that opens a migrated plugin in workspace admin settings for an administrator who cannot open its ordinary plugin details; does not start a chat"
                    }), b[4] = e) : e = b[4], n = e
                } else if ("allowed" === w || "pending" === w) {
                    let e;
                    b[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceUsePlugin",
                        defaultMessage: "Use plugin",
                        description: "Opens the migrated plugin detail page from the initial GPT chat choice."
                    }), b[5] = e) : e = b[5], n = e
                } else {
                    let e;
                    b[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceExplorePlugins",
                        defaultMessage: "Explore plugins",
                        description: "Opens the plugin directory from a migrated GPT chat banner when access to its plugin was denied or could not be verified after a failed request."
                    }), b[6] = e) : e = b[6], n = e
                }
                if ("error" === w && null == j) {
                    let e;
                    b[7] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessUnconfirmed",
                        defaultMessage: "We couldn’t check your access to the plugin. You can keep using this GPT until {deadline}.",
                        description: "Fallback when the migration banner cannot load. Access is unknown; the user can explore plugins or continue using the GPT.",
                        values: {
                            deadline: E
                        }
                    }), b[7] = E, b[8] = e) : e = b[8], p = e
                } else if ("error" === w) {
                    let e;
                    b[9] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessError",
                        defaultMessage: "We couldn’t check your access to the plugin. Try again, or keep using this GPT until {deadline}.",
                        description: "Migrated GPT notice after a failed plugin-access check; deadline is the localized retirement date",
                        values: {
                            deadline: E
                        }
                    }), b[9] = E, b[10] = e) : e = b[10], p = e
                } else if ("denied" === w) {
                    let e;
                    b[11] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessDenied",
                        defaultMessage: "This plugin isn’t available to you. You can keep using this GPT until {deadline}.",
                        description: "Migrated GPT notice when the destination plugin is inaccessible; deadline is the localized retirement date",
                        values: {
                            deadline: E
                        }
                    }), b[11] = E, b[12] = e) : e = b[12], p = e
                } else if (C.trim()) {
                    let e;
                    b[13] !== E || b[14] !== C ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceNamedBody",
                        defaultMessage: "{gptName} is now available as a plugin. You can keep using this GPT until {deadline}.",
                        description: "Explains the migrated GPT choice before the composer. gptName is the GPT display name and deadline is a localized month and day.",
                        values: {
                            gptName: C,
                            deadline: E
                        }
                    }), b[13] = E, b[14] = C, b[15] = e) : e = b[15], p = e
                } else {
                    let e;
                    b[16] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceBody",
                        defaultMessage: "This GPT is now available as a plugin. You can keep using this GPT until {deadline}.",
                        description: "Explains the migrated GPT choice when the GPT has no display name; deadline is a localized month and day.",
                        values: {
                            deadline: E
                        }
                    }), b[16] = E, b[17] = e) : e = b[17], p = e
                }
                b[18] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, a.jsx)(c.a, {
                    asset: h.a,
                    className: "text-secondary"
                }), b[18] = m) : m = b[18], b[19] !== C ? (g = C.trim() ? (0, a.jsx)(s.a, {
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
                }), b[19] = C, b[20] = g) : g = b[20];
                let P = "pending" === w,
                    A = "error" === w && null != j ? j : _;
                return b[21] !== n || b[22] !== P || b[23] !== A ? (f = (0, a.jsx)(l.a, {
                    color: "primary",
                    loading: P,
                    size: "dialog",
                    type: "button",
                    onClick: A,
                    children: n
                }), b[21] = n, b[22] = P, b[23] = A, b[24] = f) : f = b[24], b[25] !== I ? (v = null == I ? null : (0, a.jsx)(l.a, {
                    color: "outline",
                    size: "dialog",
                    type: "button",
                    onClick: I,
                    children: (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceKeepUsing",
                        defaultMessage: "Keep using GPT",
                        description: "Reveals the existing GPT chat composer for this visit only, keeping its draft. The choice is shown again when the GPT is reopened."
                    })
                }), b[25] = I, b[26] = v) : v = b[26], b[27] !== f || b[28] !== v ? (y = (0, a.jsxs)("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [f, v]
                }), b[27] = f, b[28] = v, b[29] = y) : y = b[29], b[30] !== p || b[31] !== g || b[32] !== y ? (x = (0, a.jsx)("div", {
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
                }), b[30] = p, b[31] = g, b[32] = y, b[33] = x) : x = b[33], x
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
            o = n("ASxG"),
            s = n("OWtl"),
            i = n("OMIV"),
            l = n("b6fw"),
            c = n("YdNM");
        let d = o.object({
                course_id: o.string().trim().min(1),
                title: o.string().trim().nullish().catch(null),
                icon_url_or_emoji: c.a
            }),
            u = o.object({
                course_info: d.nullish()
            }),
            h = (0, r.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t, a = u.safeParse(n(l.g, e)?.view);
                return a.success ? a.data.course_info ?? null : null
            }, {
                isEqual: a.isEqual
            }),
            p = (0, r.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(i.d, "4035922817") ? n(h, e) : null
            }),
            m = (0, r.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(p, e)?.course_id ?? null
            });
        n.d(t, {}, {
            a: m,
            b: p
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
                } = e, a = n(s.v, t);
                return {
                    pending: (0, s.zb)(n(s._, t)),
                    completed: null == a || "completed" === a.result,
                    completionId: n(r.d, "2163293173") ? JSON.stringify([t, a?.requestId, n(s.B, t)]) : void 0,
                    unread: n(s.I, t)
                }
            },
            preview: (e, t) => {
                let {
                    get: n
                } = e, a = n(s.L, t);
                return null == a ? null : (0, i.a)({
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
                (0, s.Vb)(e, t, !1), (0, o.b)(e, t).catch(() => {})
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
                let t, n, f, v, y, x = (0, r.c)(20),
                    {
                        conversationId: b
                    } = e,
                    C = (0, o.y)(c.a),
                    w = (0, o.z)(l.b),
                    _ = (0, o.x)(h.j, b),
                    I = (0, o.x)(m.c, _ ?? b),
                    j = (0, u.b)(),
                    S = (0, s.useRef)(null);
                x[0] !== C || x[1] !== _ ? (t = () => {
                    null != _ && (0, p.b)(C, _, i.flushSync)
                }, x[0] = C, x[1] = _, x[2] = t) : t = x[2];
                let T = t;
                x[3] !== b || x[4] !== T || x[5] !== C || x[6] !== _ ? (n = () => {
                    let e = C.get(m.c, _ ?? b);
                    C.get(l.b) || e?.hasError || T()
                }, x[3] = b, x[4] = T, x[5] = C, x[6] = _, x[7] = n) : n = x[7];
                let E = (0, s.useEffectEvent)(n);
                x[8] !== j || x[9] !== w || x[10] !== E ? (f = () => {
                    if (w) return;
                    let e = S.current,
                        t = j.getScrollElement();
                    if (null == e || null == t) return;
                    let n = new IntersectionObserver(e => {
                        e.some(g) && E()
                    }, {
                        root: t,
                        rootMargin: "80px 0px 0px 0px"
                    });
                    return n.observe(e), () => n.disconnect()
                }, x[8] = j, x[9] = w, x[10] = E, x[11] = f) : f = x[11];
                let P = I?.cursor,
                    A = I?.hasError;
                if (x[12] !== j || x[13] !== w || x[14] !== _ || x[15] !== P || x[16] !== A ? (v = [j, w, _, P, A], x[12] = j, x[13] = w, x[14] = _, x[15] = P, x[16] = A, x[17] = v) : v = x[17], (0, s.useEffect)(f, v), null == I || I.complete || null == I.cursor) return null;
                let k = I.hasError ? T : null;
                return x[18] !== k ? (y = (0, a.jsx)(d.a, {
                    ref: S,
                    onRetry: k
                }), x[18] = k, x[19] = y) : y = x[19], y
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
            m = n("OcxA"),
            g = n("FR8U"),
            f = n("OWtl"),
            v = n("OtLV"),
            y = n("w7E5"),
            x = n("wVX4"),
            b = n("c5lN"),
            C = n("QmkR"),
            w = n("xEXG"),
            _ = n("KMqT"),
            I = n("J6LI"),
            j = n("FgUr"),
            S = n("WLgA");
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
            } = (0, I.c)(n, r), k = A ? v.a.projectOnlyMoveUnavailable : void 0, {
                data: M,
                isPending: R,
                isError: O
            } = o, {
                data: N,
                isPending: B,
                isError: G
            } = s, F = (0, j.a)(N, M, r?.gizmo.id), z = "allowed" === c, L = e => {
                let a = t.get(T) + 1,
                    r = t.get(p.e);
                t.set(T, a), (0, C.T)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(n => {
                    n && t.get(T) === a && t.get(p.e) === r && f((0, S.c)(e.gizmo.id))
                }).catch(() => {
                    t.get(u.f).danger(t.get(h.a).formatMessage(P.moveFailed), {
                        errorAnalytics: {
                            toastId: "move_conversation_to_snorlax_error"
                        }
                    })
                })
            }, D = [];
            for (let e of (z && (D.push({
                    id: "new-chatgpt-project",
                    icon: d.xg,
                    message: P.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        t.set(T, e => e + 1), (0, b.a)(t, L, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: E,
                            onCloseAutoFocus: w
                        })
                    }
                }), F.length > 0 && D.push({
                    id: "new-project-separator",
                    type: "separator"
                })), F)) {
                let {
                    targetMemoryBlocked: t
                } = (0, I.c)(n, void 0, e), r = t ? (0, _.a)((0, x.c)(e)) : void 0;
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
            return l && (O || G) ? D.push({
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
            }) : O || G || R || B || 0 !== F.length || z || D.push({
                id: "no-project-destinations",
                message: P.noDestinations,
                enabled: !1
            }), [...i && D.length > 0 ? [{
                id: "move-to-project",
                icon: d.xd,
                message: P.moveToProject,
                enabled: !A,
                tooltipMessage: k,
                submenu: D
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                icon: d.Fd,
                message: P.removeFromProject,
                enabled: !A,
                tooltipMessage: k,
                onSelect: () => {
                    t.set(T, e => e + 1), (0, C.T)({
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
                    v = (0, l.Z)(),
                    x = (0, o.z)(y.a),
                    b = (0, o.z)(C.m),
                    _ = (0, w.b)();
                if (i[0] !== d || i[1] !== v || i[2] !== u || i[3] !== b || i[4] !== h || i[5] !== _ || i[6] !== x || i[7] !== g || i[8] !== m) {
                    let e = E({
                            scope: g,
                            conversation: d,
                            project: h,
                            projectListQuery: x,
                            pinnedProjectsQuery: b,
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
                    t = e.map(n), i[0] = d, i[1] = v, i[2] = u, i[3] = b, i[4] = h, i[5] = _, i[6] = x, i[7] = g, i[8] = m, i[9] = t
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
            } = t, a = n(i.g, e);
            if (null == a) return null;
            let r = n(s.L, e);
            return null == r ? null : c({
                ...a,
                conversation: {
                    mapping: r,
                    current_node: n(s.B, e),
                    conversation_origin: n(s.x, e),
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
                x = null == g || v ? [] : c.slice(g, f ?? c.length),
                b = Object.fromEntries(x.map(e => [e, t.mapping[e]]));
            return {
                selectedIndex: i,
                conversation: {
                    ...t,
                    current_node: x.at(-1) ?? null,
                    mapping: b
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
            l = n("QcFS"),
            c = n("EOo5"),
            d = n("ygO2"),
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
            s = n("QcFS"),
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
            i = n("d0tz"),
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
                let t, n, r, f, v, y, x = (0, a.c)(19);
                x[0] !== e ? (t = void 0 === e ? {} : e, x[0] = e, x[1] = t) : t = x[1];
                let {
                    composerController: b,
                    conversationId: C,
                    draftKey: w,
                    initialPrompt: _,
                    initialPromptKind: I
                } = t, j = void 0 === w ? C : w, S = (0, s.y)(u.a);
                x[2] !== C || x[3] !== j || x[4] !== _ || x[5] !== I || x[6] !== S ? (n = () => o()(() => {
                    let e = null == C ? null : S.get(g.x, C),
                        t = (0, d.e)(_ ?? (null == j ? "" : S.get(p.s, j)), {
                            addInitialContentToHistory: null == _ && null != j,
                            defaultTextKind: I ?? (null == _ && null != j || (0, c.b)(_ ?? "").length > 0 ? "prompt" : "plain"),
                            enableFileMentions: !0,
                            enableRichText: !0,
                            enableSkillMentions: !1,
                            enableSlashCommands: {
                                triggers: ["/"]
                            },
                            plainTextMode: (0, h.b)(S.get, i.rf.composerPlainTextMode),
                            suggestionOptions: {
                                enableInlineSystemHints: "tpp" !== e && "flora" !== e,
                                variant: "tpp" !== e && "flora" !== e ? "chatgpt" : void 0
                            }
                        });
                    return null == _ && null != C && "string" == typeof j && null != (0, m.j)(S, j) && "tpp" !== e && "flora" !== e && (0, p.P)(S, C, t.getChatGptPrompt().systemHints), t
                }), x[2] = C, x[3] = j, x[4] = _, x[5] = I, x[6] = S, x[7] = n) : n = x[7];
                let [T] = (0, l.useState)(n);
                x[8] !== T || x[9] !== b ? (r = b ?? T(), x[8] = T, x[9] = b, x[10] = r) : r = x[10];
                let E = r,
                    P = (0, l.useRef)(null);
                x[11] !== E || x[12] !== j || x[13] !== S ? (f = () => {
                    if (null == j) return;
                    let e = S.get(p.s, j);
                    return null != P.current && P.current !== e && E.restoreDraft(e), () => {
                        P.current = S.get(p.s, j)
                    }
                }, v = [E, j, S], x[11] = E, x[12] = j, x[13] = S, x[14] = f, x[15] = v) : (f = x[14], v = x[15]), (0, l.useLayoutEffect)(f, v), x[16] !== E || x[17] !== b ? (y = () => {
                    null != b || E.view.isDestroyed || E.destroy()
                }, x[16] = E, x[17] = b, x[18] = y) : y = x[18];
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
                x = "default" === y && "bg-surface-elevated-secondary shadow-md",
                b = void 0 !== c && c ? "transition-none" : "transition-[height,width,opacity]";
            return v[7] !== n || v[8] !== x || v[9] !== b ? (u = (0, o.b)("surface-AyYLmv", "pointer-events-auto isolate rounded-[22px] ease-enter-snappy motion-reduce:transition-none", x, b, n), v[7] = n, v[8] = x, v[9] = b, v[10] = u) : u = v[10], v[11] !== l ? (h = {
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
            l = n("ygO2"),
            c = n("UIU6"),
            d = n("Bbed"),
            u = n("RNul"),
            h = n("d0tz"),
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
                width: h.R
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
        let g = (0, d.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(339467), n.e(55068), n.e(633848), n.e(233366)]).then(n.bind(n, "FQ1K"))).SelectedTextAnnotationEditor, {
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
    WQca: (function(e, t, n) {
        var a = n("QosV"),
            r = n("BolX"),
            o = n("zd8w"),
            s = n("jqIZ"),
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
                    v = (0, s.Z)(),
                    y = (0, o.useRef)(!1);
                d[0] !== p || d[1] !== h || d[2] !== v || d[3] !== m || d[4] !== f ? (t = () => {
                    m?.(), f.get(i.f).info(h, {
                        id: "conversation-inaccessible",
                        duration: 5
                    }), v(p, {
                        replace: !0
                    })
                }, d[0] = p, d[1] = h, d[2] = v, d[3] = m, d[4] = f, d[5] = t) : t = d[5];
                let x = (0, o.useEffectEvent)(t);
                return d[6] !== u || d[7] !== x ? (n = () => {
                    u && !y.current && (y.current = !0, x())
                }, d[6] = u, d[7] = x, d[8] = n) : n = d[8], d[9] !== u ? (c = [u], d[9] = u, d[10] = c) : c = d[10], (0, o.useEffect)(n, c), u ? null : g
            }
        })
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
                x = void 0 === y ? v : y,
                b = (0, o.y)(l.a),
                [C] = (0, s.useState)(p);
            return f[0] !== x || f[1] !== C || f[2] !== b || f[3] !== v ? (t = () => {
                if (i.appServices?.windowTitle == null) return;
                let e = {
                    owner: C,
                    title: null == v ? void 0 : x ?? null
                };
                b.set(u, t => t.some(e => e.owner === C) ? t.map(t => t.owner === C ? e : t) : [...t, e]), g(b)
            }, n = [b, C, v, x], f[0] = x, f[1] = C, f[2] = b, f[3] = v, f[4] = t, f[5] = n) : (t = f[4], n = f[5]), (0, s.useEffect)(t, n), f[6] !== C || f[7] !== b ? (a = () => () => {
                i.appServices?.windowTitle != null && (b.set(u, e => e.filter(e => e.owner !== C)), g(b))
            }, c = [b, C], f[6] = C, f[7] = b, f[8] = a, f[9] = c) : (a = f[8], c = f[9]), (0, s.useEffect)(a, c), f[10] !== v ? (d = () => {
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
            i.appServices.windowTitle?.setTitle(e.get(u).findLast(e => void 0 !== e.title)?.title ?? null)
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
    RZBv: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("xSOA"),
            s = n("BolX"),
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
            x = n("nlNF"),
            b = n("iGet"),
            C = n("OWtl"),
            w = n("MRlq"),
            _ = n("HFSu"),
            I = n("vNLk"),
            j = n("PCxL"),
            S = n("aZgH"),
            T = n("CzoK");
        n.d(t, {}, {
            a: function(e) {
                let t, n, E, P, A, k, M, R, O, N, B, G, F, z, L = (0, r.c)(59),
                    {
                        conversationId: D,
                        kind: H
                    } = e,
                    W = (0, s.y)(C.a),
                    q = (0, l.a)(),
                    U = (0, d.X)(),
                    K = (0, d.Z)(),
                    V = (0, s.z)(j.h),
                    Q = (0, s.z)(u.h),
                    Y = (0, s.z)(u.g);
                L[0] !== Q || L[1] !== D || L[2] !== Y || L[3] !== H || L[4] !== V ? (t = "chatgpt" === H && V?.kind === "chatgpt" && V.conversation.id === D && (0, m.a)(V.conversation, Q, Y) ? V.conversation : null, L[0] = Q, L[1] = D, L[2] = Y, L[3] = H, L[4] = V, L[5] = t) : t = L[5];
                let $ = t,
                    [X, Z] = (0, i.useState)(!1),
                    {
                        mutate: J,
                        isPending: ee
                    } = (0, f.a)(D);
                L[6] !== U.hash || L[7] !== U.pathname || L[8] !== U.search || L[9] !== K || L[10] !== W ? (n = () => {
                    (0, j.e)(W), K({
                        pathname: U.pathname,
                        search: U.search,
                        hash: U.hash
                    }, {
                        replace: !0,
                        state: null
                    })
                }, L[6] = U.hash, L[7] = U.pathname, L[8] = U.search, L[9] = K, L[10] = W, L[11] = n) : n = L[11];
                let et = n,
                    en = (0, s.z)(j.g);
                L[12] !== D || L[13] !== en ? (E = en?.find(e => (0, S.a)(e.task) === `hosted:${D}`), L[12] = D, L[13] = en, L[14] = E) : E = L[14];
                let ea = E;
                L[15] !== D || L[16] !== W ? (P = () => {
                    let e = W.get(j.h);
                    return null != e && (0, S.a)(e) === `hosted:${D}` ? (0, j.d)(W, e) : void 0
                }, L[15] = D, L[16] = W, L[17] = P) : P = L[17], L[18] !== D || L[19] !== H || L[20] !== W ? (A = async () => {
                    if ("cloud" === H) {
                        await _.CodexRequest.safePost("/wham/tasks/{task_id}/recover", {
                            parameters: {
                                path: {
                                    task_id: D
                                }
                            }
                        }), (0, b.c)(W, D, !1);
                        return
                    }
                    await (0, g.W)({
                        scope: W,
                        conversationId: D
                    })
                }, L[18] = D, L[19] = H, L[20] = W, L[21] = A) : A = L[21], L[22] !== D || L[23] !== et || L[24] !== H || L[25] !== W ? (k = (e, t, n) => {
                    n?.("restored");
                    let r = W.get(y.f).info((0, a.jsx)(c.a, {
                        ...w.a.unarchiveSuccessPlain
                    }), {
                        leading: (0, a.jsx)(v.a, {
                            "aria-hidden": !1,
                            asset: T.a
                        }),
                        primaryAction: {
                            label: (0, a.jsx)(c.a, {
                                ...w.a.viewNow
                            }),
                            onClick: () => {
                                r.close(), et()
                            }
                        },
                        id: `unarchive-thread-${H}:${D}`
                    })
                }, L[22] = D, L[23] = et, L[24] = H, L[25] = W, L[26] = k) : k = L[26], L[27] !== q || L[28] !== W ? (M = (e, t, n) => {
                    n?.(null), W.get(y.f).danger(q.formatMessage(w.a.unarchiveError), {
                        errorAnalytics: {
                            toastId: "previewFooter.onError.unarchiveError"
                        }
                    })
                }, L[27] = q, L[28] = W, L[29] = M) : M = L[29], L[30] !== P || L[31] !== A || L[32] !== k || L[33] !== M ? (R = {
                    onMutate: P,
                    mutationFn: A,
                    onSuccess: k,
                    onError: M
                }, L[30] = P, L[31] = A, L[32] = k, L[33] = M, L[34] = R) : R = L[34];
                let {
                    mutate: er,
                    isPending: eo,
                    isSuccess: es
                } = (0, o.a)(R);
                L[35] !== J || L[36] !== K || L[37] !== W ? (O = e => {
                    let t = W.get(j.c),
                        n = W.get(x.c),
                        a = W.get(u.f);
                    J(e, {
                        onSuccess: () => {
                            if (Z(!1), t !== W.get(j.c) || n !== W.get(x.c) || a !== W.get(u.f)) return;
                            W.set(j.h, null);
                            let e = t?.pathname === j.a ? t : null;
                            K(e ?? "/", {
                                replace: !0,
                                state: e?.state ?? null
                            })
                        }
                    })
                }, L[35] = J, L[36] = K, L[37] = W, L[38] = O) : O = L[38];
                let ei = O;
                L[39] !== $ ? (N = null == $ ? void 0 : () => Z(!0), L[39] = $, L[40] = N) : N = L[40];
                let el = es || ea?.status === "restored",
                    ec = eo || ea?.status === "restoring";
                return L[41] !== er ? (B = () => er(), L[41] = er, L[42] = B) : B = L[42], L[43] !== et || L[44] !== ee || L[45] !== N || L[46] !== el || L[47] !== ec || L[48] !== B ? (G = (0, a.jsx)(I.a, {
                    deleting: ee,
                    onDelete: N,
                    restored: el,
                    restoring: ec,
                    onUnarchive: B,
                    onDone: et
                }), L[43] = et, L[44] = ee, L[45] = N, L[46] = el, L[47] = ec, L[48] = B, L[49] = G) : G = L[49], L[50] !== $ || L[51] !== ei || L[52] !== q || L[53] !== X || L[54] !== ee ? (F = null != $ && (0, a.jsx)(h.a, {
                    allowArtifactDeletion: !0,
                    title: $.title?.trim() || q.formatMessage(p.a.newChat),
                    open: X,
                    isDeleting: ee,
                    onOpenChange: Z,
                    onConfirm: ei
                }), L[50] = $, L[51] = ei, L[52] = q, L[53] = X, L[54] = ee, L[55] = F) : F = L[55], L[56] !== G || L[57] !== F ? (z = (0, a.jsxs)(a.Fragment, {
                    children: [G, F]
                }), L[56] = G, L[57] = F, L[58] = z) : z = L[58], z
            }
        })
    }),
    p7j6: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "chevron-right-md-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-chevron-right-md-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.580201,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: -.580201,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    Asyc: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "circle-grid-2x2-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-circle-grid-2x2-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 122e-6,
                    y: .00116,
                    overflows: !1
                },
                composite: {
                    x: 122e-6,
                    y: .00116,
                    overflows: !1
                }
            }
        }
    }),
    EWcN: (function(e, t) {
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
    ARKs: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "exclamation-mark-triangle-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-exclamation-mark-triangle-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 244e-6,
                    y: .081786,
                    overflows: !1
                },
                composite: {
                    x: 244e-6,
                    y: .081786,
                    overflows: !1
                }
            }
        }
    }),
    LhhT: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "list-circle-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12"
            },
            href: "#codex-icon-list-circle-light-12",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .041015,
                    y: -.003174,
                    overflows: !1
                },
                composite: {
                    x: .041015,
                    y: -.003174,
                    overflows: !1
                }
            }
        }
    }),
    WwEY: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "list-circle-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-list-circle-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .054688,
                    y: -.003906,
                    overflows: !1
                },
                composite: {
                    x: .054688,
                    y: -.003906,
                    overflows: !1
                }
            }
        }
    }),
    G6nH: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "list-circle-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-list-circle-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .068115,
                    y: -.005127,
                    overflows: !1
                },
                composite: {
                    x: .068115,
                    y: -.005127,
                    overflows: !1
                }
            }
        }
    }),
    wmA0: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "map-point-of-interest-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-map-point-of-interest-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: .027343,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: .027343,
                    overflows: !1
                }
            }
        }
    }),
    VQnT: (function(e, t, n) {
        n.d(t, {
            a: () => a
        });
        var a = {
            kind: "inline",
            preset: (0, n("iJY0").a)({
                name: "multicolor-verified-checkmark-light-20",
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
                        x: 2.236328,
                        y: 1.665039,
                        width: 15.526855,
                        height: 16.669434
                    },
                    visualBounds: {
                        x: 2.236328,
                        y: 1.665039,
                        width: 15.526855,
                        height: 16.669434
                    }
                },
                paint: {
                    kind: "multicolor",
                    layers: [{
                        role: "fixed",
                        color: "#00B1FF",
                        bounds: {
                            x: 2.236328,
                            y: 1.665039,
                            width: 15.526855,
                            height: 16.669434
                        },
                        wideGamut: "color(display-p3 0.0000 0.6941 1.0000)"
                    }, {
                        role: "fixed",
                        color: "#FFFFFF",
                        bounds: {
                            x: 6.599609,
                            y: 6.730957,
                            width: 6.698242,
                            height: 6.538574
                        }
                    }]
                },
                optical: {
                    shape: "non-circular",
                    bounds: {
                        x: 2.236328,
                        y: 1.665039,
                        width: 15.526855,
                        height: 16.669434
                    },
                    center: {
                        x: 9.999756,
                        y: 9.999756
                    },
                    insets: {
                        top: 1.665039,
                        right: 2.236817,
                        bottom: 1.665527,
                        left: 2.236328
                    },
                    anchors: {
                        frame: {
                            x: 10,
                            y: 10
                        },
                        ink: {
                            x: 9.999756,
                            y: 9.999756
                        }
                    }
                },
                capabilities: ["icon"],
                body: '<path d="M9.99996 1.66504C11.5465 1.66508 12.8908 2.52904 13.5781 3.80034C15.0232 3.75936 16.4445 4.49251 17.2181 5.83241C17.9915 7.17206 17.9155 8.76888 17.1578 9.9998C17.9155 11.2308 17.9915 12.8275 17.2181 14.1672C16.4445 15.5071 15.0232 16.2395 13.578 16.1985C12.8909 17.4702 11.5467 18.3346 9.99988 18.3347C8.45288 18.3347 7.10815 17.4704 6.42099 16.1986C4.97605 16.2394 3.55521 15.507 2.78175 14.1673C2.00838 12.8277 2.08378 11.2309 2.84132 9.99988C2.0838 8.76896 2.0084 7.17208 2.78179 5.8325C3.55527 4.49276 4.97613 3.75964 6.42107 3.80038C7.10834 2.52891 8.4533 1.66505 9.99996 1.66504Z" fill="#00B1FF"/> <path d="M11.7608 7.11839C12.007 6.72964 12.5218 6.61415 12.9107 6.86042C13.2993 7.10672 13.4148 7.62155 13.1686 8.01032L10.2308 12.6482C10.1994 12.6977 10.1472 12.782 10.0933 12.8525C10.0355 12.9279 9.91808 13.0675 9.723 13.1633C9.49192 13.2766 9.22675 13.3004 8.97917 13.23C8.76992 13.1705 8.6295 13.0539 8.55925 12.99C8.49342 12.93 8.42633 12.8565 8.38675 12.8134L6.81933 11.1101C6.50778 10.7715 6.53042 10.2441 6.86897 9.93254C7.20768 9.62095 7.73495 9.64262 8.04654 9.98137L9.172 11.2045L11.7608 7.11839Z" fill="white"/>'
            })
        }
    }),
    aImb: (function(e, t, n) {
        n.d(t, {
            a: () => a
        });
        var a = {
            kind: "inline",
            preset: (0, n("iJY0").a)({
                name: "multicolor-verified-checkmark-light-24",
                canvas: {
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    frame: {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24
                    },
                    inkBounds: {
                        x: 2.684082,
                        y: 1.998047,
                        width: 18.632324,
                        height: 20.003418
                    },
                    visualBounds: {
                        x: 2.684082,
                        y: 1.998047,
                        width: 18.632324,
                        height: 20.003418
                    }
                },
                paint: {
                    kind: "multicolor",
                    layers: [{
                        role: "fixed",
                        color: "#00B1FF",
                        bounds: {
                            x: 2.684082,
                            y: 1.998047,
                            width: 18.632324,
                            height: 20.003418
                        },
                        wideGamut: "color(display-p3 0.0000 0.6941 1.0000)"
                    }, {
                        role: "fixed",
                        color: "#FFFFFF",
                        bounds: {
                            x: 7.919434,
                            y: 8.077148,
                            width: 8.038086,
                            height: 7.84668
                        }
                    }]
                },
                optical: {
                    shape: "non-circular",
                    bounds: {
                        x: 2.684082,
                        y: 1.998047,
                        width: 18.632324,
                        height: 20.003418
                    },
                    center: {
                        x: 12.000244,
                        y: 11.999756
                    },
                    insets: {
                        top: 1.998047,
                        right: 2.683594,
                        bottom: 1.998535,
                        left: 2.684082
                    },
                    anchors: {
                        frame: {
                            x: 12,
                            y: 12
                        },
                        ink: {
                            x: 12.000244,
                            y: 11.999756
                        }
                    }
                },
                capabilities: ["icon"],
                body: '<path d="M12.0004 1.99805C13.8563 1.9981 15.4694 3.03485 16.2942 4.56041C18.0283 4.51124 19.7339 5.39101 20.6622 6.9989C21.5903 8.60648 21.499 10.5227 20.5898 11.9998C21.499 13.477 21.5902 15.3931 20.6622 17.0007C19.7339 18.6086 18.0283 19.4875 16.2941 19.4383C15.4695 20.9643 13.8565 22.0016 12.0003 22.0017C10.1439 22.0017 8.53027 20.9645 7.70568 19.4384C5.97175 19.4873 4.26674 18.6085 3.33858 17.0008C2.41054 15.3933 2.50102 13.4771 3.41007 11.9999C2.50104 10.5228 2.41057 8.6065 3.33864 6.999C4.26681 5.39132 5.97184 4.51157 7.70577 4.56046C8.53049 3.0347 10.1444 1.99806 12.0004 1.99805Z" fill="#00B1FF"/> <path d="M14.1128 8.54207C14.4083 8.07557 15.0261 7.93698 15.4927 8.2325C15.9591 8.52806 16.0977 9.14586 15.8022 9.61238L12.2768 15.1778C12.2392 15.2372 12.1765 15.3383 12.1118 15.4229C12.0425 15.5134 11.9016 15.681 11.6675 15.7959C11.3902 15.9319 11.072 15.9604 10.7749 15.876C10.5238 15.8046 10.3553 15.6646 10.271 15.5879C10.192 15.516 10.1115 15.4277 10.064 15.376L8.18309 13.3321C7.80924 12.9257 7.8364 12.2929 8.24266 11.919C8.64911 11.5451 9.28184 11.5711 9.65575 11.9776L11.0063 13.4453L14.1128 8.54207Z" fill="white"/>'
            })
        }
    }),
    Vp8q: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "package-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-package-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 488e-6,
                    y: -488e-6,
                    overflows: !1
                },
                composite: {
                    x: 488e-6,
                    y: -488e-6,
                    overflows: !1
                }
            }
        }
    }),
    PpZH: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "phone-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-phone-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 366e-6,
                    y: 488e-6,
                    overflows: !1
                },
                composite: {
                    x: 366e-6,
                    y: 488e-6,
                    overflows: !1
                }
            }
        }
    }),
    eVLy: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "star-fill-regular-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-star-fill-regular-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 61e-6,
                    y: .065124,
                    overflows: !1
                },
                composite: {
                    x: 61e-6,
                    y: .065124,
                    overflows: !1
                }
            }
        }
    }),
    Ff4E: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "truck-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-truck-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 214e-6,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 214e-6,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    iYVU: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "verified-badge-checkmark-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-verified-badge-checkmark-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 306e-6,
                    y: -.012817,
                    overflows: !1
                },
                composite: {
                    x: 306e-6,
                    y: -.012817,
                    overflows: !1
                }
            }
        }
    }),
    XxTS: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "verified-checkmark-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-verified-checkmark-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -183e-6,
                    y: -.016297,
                    overflows: !1
                },
                composite: {
                    x: -183e-6,
                    y: -.016297,
                    overflows: !1
                }
            }
        }
    }),
    hIm6: (function(e, t, n) {
        let a = (0, n("iJY0").a)({
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
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5889 10.9995C15.4857 10.9996 17.0233 12.5373 17.0234 14.4341C17.0234 15.1455 16.806 15.8058 16.4355 16.354L17.9727 17.8921C18.2322 18.1518 18.2323 18.5729 17.9727 18.8325C17.713 19.0919 17.2919 19.092 17.0322 18.8325L15.4912 17.2925C14.9465 17.6557 14.2927 17.8686 13.5889 17.8687C11.6921 17.8685 10.1544 16.3309 10.1543 14.4341C10.1544 12.5373 11.6921 10.9996 13.5889 10.9995ZM13.5889 12.3296C12.4266 12.3297 11.4845 13.2718 11.4844 14.4341C11.4845 15.5963 12.4266 16.5394 13.5889 16.5396C14.7512 16.5395 15.6942 15.5964 15.6943 14.4341C15.6942 13.2718 14.7512 12.3297 13.5889 12.3296Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8125 2.25146C12.6518 2.25146 13.4572 2.58476 14.0508 3.17822L15.9199 5.04736C16.5134 5.6409 16.8467 6.4463 16.8467 7.28564V9.08154C16.8466 9.44878 16.5489 9.74658 16.1816 9.74658C15.8144 9.74658 15.5166 9.44878 15.5166 9.08154V8.58154H13.417C12.1292 8.58154 11.085 7.53726 11.085 6.24951V3.58154H6.18164C5.1682 3.58154 4.34668 4.40306 4.34668 5.4165V14.5835C4.34686 15.5968 5.16831 16.4185 6.18164 16.4185H8.18164C8.54891 16.4185 8.84668 16.7162 8.84668 17.0835C8.8465 17.4506 8.5488 17.7485 8.18164 17.7485H6.18164C4.43377 17.7485 3.01678 16.3313 3.0166 14.5835V5.4165C3.0166 3.66852 4.43366 2.25146 6.18164 2.25146H11.8125ZM12.415 6.24951C12.415 6.80272 12.8638 7.25146 13.417 7.25146H15.5146C15.5058 6.77722 15.3155 6.32384 14.9795 5.98779L13.1104 4.11865C12.9128 3.92113 12.6741 3.77509 12.415 3.68506V6.24951Z" fill="currentColor"/>'
        });
        n.d(t, {}, {
            a: a
        })
    }),
    vq4Q: (function(e, t, n) {
        let a = (0, n("iJY0").a)({
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
            body: '<path d="M14.166 12.6682C14.5332 12.6682 14.8309 12.9661 14.8311 13.3333C14.8311 13.7005 14.5333 13.9983 14.166 13.9983H5.83301C5.46591 13.9981 5.16797 13.7004 5.16797 13.3333C5.1681 12.9662 5.46599 12.6684 5.83301 12.6682H14.166Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 6.0022C9.34724 6.00237 9.83105 6.48695 9.83105 7.08423V9.58423C9.83062 10.1811 9.34697 10.6651 8.75 10.6653H6.25C5.65302 10.6651 5.16841 10.1811 5.16797 9.58423V7.08423C5.16797 6.48694 5.65275 6.00236 6.25 6.0022H8.75ZM6.49805 9.33521H8.50098V7.33228H6.49805V9.33521Z" fill="currentColor"/> <path d="M14.166 9.33521C14.5333 9.33521 14.8311 9.63297 14.8311 10.0002C14.8309 10.3674 14.5332 10.6653 14.166 10.6653H12.083C11.716 10.6651 11.4181 10.3673 11.418 10.0002C11.418 9.6331 11.7159 9.3354 12.083 9.33521H14.166Z" fill="currentColor"/> <path d="M14.166 6.00122C14.5332 6.00122 14.8309 6.2991 14.8311 6.66626C14.8311 7.03353 14.5333 7.3313 14.166 7.3313H12.083C11.7159 7.3311 11.418 7.03341 11.418 6.66626C11.4181 6.29922 11.716 6.00142 12.083 6.00122H14.166Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.167 2.66821C16.8227 2.66839 18.1649 4.01058 18.165 5.66626V14.3333C18.165 15.9891 16.8228 17.3311 15.167 17.3313H4.83301C3.17722 17.3311 1.83496 15.9891 1.83496 14.3333V5.66626C1.83514 4.01058 3.17733 2.66839 4.83301 2.66821H15.167ZM4.83301 3.99829C3.91187 3.99847 3.16521 4.74512 3.16504 5.66626V14.3333C3.16504 15.2545 3.91176 16.001 4.83301 16.0012H15.167C16.0882 16.001 16.835 15.2545 16.835 14.3333V5.66626C16.8348 4.74512 16.0881 3.99847 15.167 3.99829H4.83301Z" fill="currentColor"/>'
        });
        n.d(t, {}, {
            a: a
        })
    })
};