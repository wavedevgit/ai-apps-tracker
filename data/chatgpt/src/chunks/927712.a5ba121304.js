export const __rspack_esm_ids = [927712];
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
            a: () => B,
            ChatSeatAccessScreen: () => G
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
            m = n("DVOM"),
            p = n("OWtl"),
            g = n("mBJV"),
            f = n("Wf1j"),
            v = n("ASxG"),
            y = n("fDv2"),
            b = n("rLEB"),
            x = n("Ietk"),
            C = n("twmu"),
            w = n("EOo5"),
            _ = n("Kwur"),
            j = n("udGC"),
            I = n("aTcy"),
            S = n("JNtf"),
            T = n("mUDD"),
            P = n("Ot7V"),
            A = n("SGsN"),
            E = n("DAA7"),
            k = n("yGJW"),
            M = n("GDNt");

        function R(e) {
            let t, n, l, c, d, u, m, v, y, M, R, z, G, F, B, L, D, W, H, q, U, K, V = (0, r.c)(70),
                {
                    account: Q,
                    accountId: Y,
                    userId: $,
                    onClose: X,
                    onSwitchToWork: J
                } = e,
                Z = (0, s.y)(p.a),
                ee = (0, f.a)(),
                {
                    email: et
                } = (0, w.a)(),
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
                (0, k.a)(Z, g.rd, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: Q.account.account_user_role ?? void 0,
                    hasPaidSubscription: ei
                })
            }, V[5] = Q.account.account_user_role, V[6] = l, V[7] = ei, V[8] = Z, V[9] = c) : c = V[9];
            let ed = c;
            V[10] !== X ? (d = () => {
                X(), (0, P.f)({
                    href: new URL("/codex/cloud", I.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, V[10] = X, V[11] = d) : d = V[11];
            let eu = d;
            V[12] !== Q.account.subscription_seat_pools_enabled || V[13] !== Y || V[14] !== eu || V[15] !== el || V[16] !== et || V[17] !== ee || V[18] !== es || V[19] !== ed || V[20] !== X || V[21] !== J || V[22] !== en || V[23] !== Z || V[24] !== $ ? (u = async () => {
                if ("requesting" !== en) {
                    if (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), es && !el) {
                        let e = new URL("/admin/members", I.h);
                        e.searchParams.set("account_id", Y), et && e.searchParams.set("search", et);
                        let t = e.toString(),
                            n = (0, E.c)(Z, t, Y),
                            a = null == n ? null : await n;
                        X(), (0, P.f)({
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
                                    isExpectedError: N
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
                            (0, j.e)(Z), await (0, x.g)("accounts-check"), await Promise.all([Z.query.invalidate(C.b, Y), Z.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), er.current && X()
                        } else {
                            if ((0, b.b)(Z, Y), await _.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: Y
                                        }
                                    }
                                }), !er.current) return;
                            J ? (X(), J()) : eu(), Z.get(A.f).success(ee.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted",
                                description: "Success toast shown after requesting ChatGPT access from the modal"
                            }))
                        }
                    } catch (e) {
                        er.current && ea(O(e) ?? "error")
                    }
                }
            }, V[12] = Q.account.subscription_seat_pools_enabled, V[13] = Y, V[14] = eu, V[15] = el, V[16] = et, V[17] = ee, V[18] = es, V[19] = ed, V[20] = X, V[21] = J, V[22] = en, V[23] = Z, V[24] = $, V[25] = u) : u = V[25];
            let eh = u;
            V[26] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.title",
                defaultMessage: "You don’t have access to Chat on this plan",
                description: "Title of the seat access explanation on the Chat surface. Chat is a product name."
            }), V[26] = m) : m = V[26];
            let em = m;
            V[27] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.message",
                defaultMessage: "You are assigned Work access only. Reach out to your admin to request access to ChatGPT.",
                description: "Explanation for workspace members who need admin approval for ChatGPT access"
            }), V[27] = v) : v = V[27];
            let ep = v;
            if (ec) {
                let e;
                V[28] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.ownerMessage",
                    defaultMessage: "Your current seat is Work-only. Update your seat type in Workspace settings to start using ChatGPT.",
                    description: "Explanation for workspace owners and paid admins who can update their seat to get ChatGPT access"
                }), V[28] = e) : e = V[28], ep = e
            } else if (eo) {
                let e;
                V[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.adminMessage",
                    defaultMessage: "You are assigned Work access only. Ask your workspace owner to buy ChatGPT seats, then update your seat type in Workspace settings.",
                    description: "Explanation for unpaid workspace admins who need an owner to buy ChatGPT seats"
                }), V[29] = e) : e = V[29], ep = e
            }
            V[30] !== ed || V[31] !== X ? (y = e => {
                e || (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED"), X())
            }, V[30] = ed, V[31] = X, V[32] = y) : y = V[32], V[33] !== eh ? (M = e => {
                e.preventDefault(), eh()
            }, V[33] = eh, V[34] = M) : M = V[34], V[35] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, a.jsx)(S.d, {
                className: "heading-lg font-semibold",
                children: em
            }), V[35] = R) : R = V[35], V[36] !== ep ? (z = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [R, (0, a.jsx)(S.c, {
                    className: "text-lg leading-6 text-secondary",
                    children: ep
                })]
            }), V[36] = ep, V[37] = z) : z = V[37];
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
            }), V[40] = eg, V[41] = ef, V[42] = G, V[43] = F) : F = V[43], V[44] !== eu || V[45] !== ed || V[46] !== X || V[47] !== J ? (B = () => {
                J ? (X(), J()) : (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), eu())
            }, V[44] = eu, V[45] = ed, V[46] = X, V[47] = J, V[48] = B) : B = V[48], V[49] !== J ? (L = J ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work",
                description: "Switches from the Chat access explanation to the available Work surface"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex",
                description: "Returns to Codex from the Chat access explanation"
            }), V[49] = J, V[50] = L) : L = V[50], V[51] !== B || V[52] !== L ? (D = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: B,
                children: L
            }), V[51] = B, V[52] = L, V[53] = D) : D = V[53], V[54] !== F || V[55] !== D ? (W = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [F, D]
            }), V[54] = F, V[55] = D, V[56] = W) : W = V[56], V[57] !== ee || V[58] !== en ? (H = null != en && "requesting" !== en ? (0, a.jsx)("p", {
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
            }) : null, V[57] = ee, V[58] = en, V[59] = H) : H = V[59], V[60] !== z || V[61] !== W || V[62] !== H ? (q = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-8 p-10 text-center",
                children: [z, W, H]
            }), V[60] = z, V[61] = W, V[62] = H, V[63] = q) : q = V[63], V[64] !== q || V[65] !== M ? (U = (0, a.jsx)(T.b, {
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

        function N(e) {
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
        var z = n("pBDs");

        function G(e) {
            let t, n, o = (0, r.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, s.y)(p.a),
                m = (0, s.z)(z.a),
                g = (0, s.z)(d.u),
                f = (0, l._)();
            if ("restricted" !== m.status) return null;
            let v = `${m.accountId}:${m.userId}`;
            return o[0] !== f || o[1] !== c || o[2] !== h || o[3] !== g.status ? (t = "allowed" === g.status ? c ?? (() => {
                (0, u.l)(h, "work"), f("/")
            }) : void 0, o[0] = f, o[1] = c, o[2] = h, o[3] = g.status, o[4] = t) : t = o[4], o[5] !== i || o[6] !== v || o[7] !== t ? (n = (0, a.jsx)(F, {
                modeToggle: i,
                onSwitchToWork: t
            }, v), o[5] = i, o[6] = v, o[7] = t, o[8] = n) : n = o[8], n
        }

        function F(e) {
            let t, n, l, c, d, u = (0, r.c)(13),
                {
                    modeToggle: p,
                    onSwitchToWork: g
                } = e,
                f = (0, s.z)(z.a),
                [v, y] = (0, o.useState)(!1);
            return "restricted" !== f.status ? null : (u[0] !== p ? (t = null == p ? null : (0, a.jsx)(m.c, {
                children: p
            }), u[0] = p, u[1] = t) : t = u[1], u[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)("h1", {
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
                    m = void 0 === c ? "floating" : c,
                    p = (0, s.y)(i.a),
                    g = (0, s.z)("home" === p.value.routeKind && l.a),
                    f = g ? "floating" : m,
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
                        name: m,
                        ready: p,
                        failed: g
                    } = e,
                    f = void 0 !== g && g,
                    v = (0, s.useRef)(!1),
                    y = (0, s.useRef)(null);
                h[0] !== m ? (t = () => ({
                    name: m,
                    key: crypto.randomUUID(),
                    startedAtMs: performance.timeOrigin + performance.now()
                }), h[0] = m, h[1] = t) : t = h[1];
                let [b] = (0, s.useState)(t);
                return h[2] !== b ? (n = () => (v.current = !0, y.current = y.current ?? o.a.start(b.name, {}, b), y.current.mark("route_entered"), () => {
                    v.current = !1, queueMicrotask(() => {
                        v.current || y.current?.abort("navigation_away")
                    })
                }), l = [b], h[2] = b, h[3] = n, h[4] = l) : (n = h[3], l = h[4]), (0, s.useEffect)(n, l), h[5] !== f || h[6] !== p ? (c = () => {
                    !p && f && y.current?.fail("load_failed")
                }, d = [p, f], h[5] = f, h[6] = p, h[7] = c, h[8] = d) : (c = h[7], d = h[8]), (0, s.useEffect)(c, d), h[9] !== p ? (u = p ? (0, a.jsx)(i.a, {
                    requireVisibleAtPaint: !0,
                    onPaint: () => {
                        y.current?.mark("content_visible"), y.current?.end()
                    }
                }) : null, h[9] = p, h[10] = u) : u = h[10], u
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
            let d = n(s.s, r.conversationId),
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
            m = (0, s.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(h, e), r = n(c.p, e), s = r?.filter(e => "list" !== e.source && a.some(t => t.automationId === e.automationId)), o = s?.at(-1)?.messageId;
                if (null == o) return null;
                let i = new Set(s?.filter(e => e.messageId === o).map(e => e.automationId));
                return 1 === i.size ? a.find(e => i.has(e.automationId)) ?? null : null
            }, {
                isEqual: r()
            });
        n.d(t, {}, {
            a: h,
            b: u,
            c: m,
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
            BusinessAgentHomeHero: () => B
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
            h = n("on57"),
            m = n("zd8w"),
            p = n("oyxz"),
            g = n("L6H2"),
            f = n("zKCW"),
            v = n("Sm6l"),
            y = n("JNtf"),
            b = n("mUDD"),
            x = n("ZtSy"),
            C = n("HOLv"),
            w = n("mEbU"),
            _ = n("RU3e"),
            j = n("UIU6"),
            I = n("Bbed"),
            S = n("T1PX");
        let T = (0, I.a)(async () => {
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
                return (0, a.jsx)(E, {})
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
                } = t, [r, s] = (0, m.useState)(!1), [o] = (0, m.useState)(() => {
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
            errorFallback: (0, a.jsx)(E, {})
        });

        function P(e) {
            let t, n = (0, r.c)(2),
                s = (0, S.a)();
            return n[0] !== s ? (t = (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden",
                children: s ? (0, a.jsx)(E, {}) : (0, a.jsx)(A, {})
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function A(e) {
            let t, n, o, i = (0, r.c)(7),
                l = (0, m.useRef)(null),
                c = (0, w.a)(l),
                d = (0, s.z)(_.b),
                [u, h] = (0, m.useState)(!1);
            if (u) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(E, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(E, {}), i[1] = t) : t = i[1], i[2] !== c || i[3] !== d ? (n = c && !0 === d ? (0, a.jsx)(T, {
                onError: () => h(!0)
            }) : null, i[2] = c, i[3] = d, i[4] = n) : n = i[4], i[5] !== n ? (o = (0, a.jsx)(j.a, {
                name: "BusinessAgentDisclosureHero",
                fallback: t,
                children: (0, a.jsx)("div", {
                    ref: l,
                    className: "absolute inset-0",
                    children: n
                })
            }), i[5] = n, i[6] = o) : o = i[6], o
        }

        function E(e) {
            let t, n = (0, r.c)(1);
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("img", {
                className: "absolute inset-0 size-full object-cover",
                alt: "",
                draggable: !1,
                referrerPolicy: "no-referrer",
                src: "https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-static-ade5a622504d70d9.png"
            }), n[0] = t) : t = n[0], t
        }
        var k = {
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

        function R(e) {
            let t, n, s, o, i, l, c, d = (0, r.c)(17),
                {
                    compact: u,
                    state: m
                } = e,
                f = void 0 !== u && u,
                v = "ready" === m.status ? m.context : m,
                y = f && "max-w-[60%] shrink-0";
            d[0] !== y ? (t = (0, h.b)("flex min-w-0 items-center gap-2 select-none", y), d[0] = y, d[1] = t) : t = d[1];
            let b = f ? "shrink-0 max-sm:hidden" : "contents",
                x = v.businessName ?? null,
                C = v.logoUrl ?? null;
            return d[2] !== x || d[3] !== C ? (n = (0, a.jsx)(g.a, {
                alt: "",
                name: x,
                size: "md",
                src: C
            }), d[2] = x, d[3] = C, d[4] = n) : n = d[4], d[5] !== b || d[6] !== n ? (s = (0, a.jsx)("div", {
                className: b,
                children: n
            }), d[5] = b, d[6] = n, d[7] = s) : s = d[7], d[8] !== v.businessName ? (o = (0, a.jsx)("span", {
                className: "truncate text-sm font-semibold",
                children: (0, a.jsx)(z, {
                    businessName: v.businessName
                })
            }), d[8] = v.businessName, d[9] = o) : o = d[9], d[10] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)("span", {
                className: "truncate text-xs font-normal text-secondary",
                children: (0, a.jsx)(p.a, {
                    id: "chatgpt.ads.business_agent.thread_header.subtitle",
                    defaultMessage: "Business chat",
                    description: "Short subtitle beneath the business name in the header of a Business Agent conversation. It tells an end user that the custom GPT chat represents a business. Keep this compact enough to fit on one line; there are no placeholders or formatting."
                })
            }), d[10] = i) : i = d[10], d[11] !== o ? (l = (0, a.jsxs)("div", {
                className: "flex min-w-0 flex-col text-start",
                children: [o, i]
            }), d[11] = o, d[12] = l) : l = d[12], d[13] !== l || d[14] !== t || d[15] !== s ? (c = (0, a.jsxs)("div", {
                className: t,
                children: [s, l]
            }), d[13] = l, d[14] = t, d[15] = s, d[16] = c) : c = d[16], c
        }

        function N(e) {
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
                n[7] !== d || n[8] !== u ? (e = (0, a.jsx)(g.a, {
                    alt: "",
                    name: d,
                    size: "lg",
                    src: u
                }), n[7] = d, n[8] = u, n[9] = e) : e = n[9], n[10] !== i.businessName ? (r = (0, a.jsx)("h1", {
                    className: "heading-xl font-normal text-default select-none",
                    children: (0, a.jsx)(z, {
                        businessName: i.businessName
                    })
                }), n[10] = i.businessName, n[11] = r) : r = n[11], n[12] !== s.status ? (l = "ready" !== s.status ? (0, a.jsx)(f.a, {
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
                        children: c.map(e => (0, a.jsx)(v.a, {
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

        function O(e) {
            let t, n, s, o, i, l, c, d, u, h, g, f, w, _, j, I, S, T = (0, r.c)(29),
                {
                    context: A,
                    onPresented: E,
                    onContinue: R,
                    onDismiss: N
                } = e,
                [O, z] = (0, m.useState)(!0 === A.showDisclosureModal);
            T[0] !== A.privacyPolicyUrl ? (t = function(e) {
                if (null == e) return null;
                try {
                    let t = new URL(e);
                    return ("https:" === t.protocol || "http:" === t.protocol) && t.hostname ? t.href : null
                } catch {
                    return null
                }
            }(A.privacyPolicyUrl), T[0] = A.privacyPolicyUrl, T[1] = t) : t = T[1];
            let G = t;
            return T[2] !== N ? (n = e => {
                z(e), e || N?.()
            }, T[2] = N, T[3] = n) : n = T[3], T[4] !== E ? (s = {
                "data-theme": "light",
                onOpenAutoFocus: E
            }, T[4] = E, T[5] = s) : s = T[5], T[6] !== R ? (o = e => {
                e.preventDefault(), z(!1), R?.()
            }, T[6] = R, T[7] = o) : o = T[7], T[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(P, {}), T[8] = i) : i = T[8], T[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(y.d, {
                className: "heading-lg text-center leading-7 font-semibold",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.disclosureTitle",
                    defaultMessage: "About chatting with businesses",
                    description: "Title of the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It introduces what business AI chats offer and how chat privacy works. Keep it neutral and concise; there are no placeholders."
                })
            }), T[9] = l) : l = T[9], T[10] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(C.a, {
                className: "shrink-0",
                asset: k
            }), T[10] = c) : c = T[10], T[11] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.disclosureQuestionsTitle",
                    defaultMessage: "Ask questions and compare options",
                    description: "Short heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It explains that they can ask about the business and compare options before deciding. Keep the tone informative; there are no placeholders."
                })
            }), T[11] = d) : d = T[11], T[12] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsxs)("div", {
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
            }), T[12] = u) : u = T[12], T[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(C.a, {
                className: "shrink-0",
                asset: M
            }), T[13] = h) : h = T[13], T[14] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.disclosureUsageTrendsTitle",
                    defaultMessage: "Your chats remain private",
                    description: "Short privacy heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. Reassure the person that their conversations with business AI agents remain private from the businesses. There are no placeholders."
                })
            }), T[14] = g) : g = T[14], T[15] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [l, (0, a.jsx)(y.c, {
                    asChild: !0,
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [u, (0, a.jsxs)("div", {
                            className: "flex items-start gap-3",
                            children: [h, (0, a.jsxs)("div", {
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
            }), T[15] = f) : f = T[15], T[16] !== G ? (w = null == G ? null : (0, a.jsx)(x.a, {
                href: G,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy",
                    description: "Link to the business-provided privacy policy in the introductory Business Agent dialog. Opens separately without accepting or dismissing the dialog. Keep the label short."
                })
            }), T[16] = G, T[17] = w) : w = T[17], T[18] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, a.jsx)("div", {
                className: "flex justify-center",
                children: (0, a.jsx)(v.a, {
                    color: "primary",
                    size: "dialogAction",
                    type: "submit",
                    children: (0, a.jsx)(p.a, {
                        id: "chatgptConversations.businessAgent.disclosureStartChat",
                        defaultMessage: "Start chatting",
                        description: "Short button label in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. Dismisses the information dialog so they can start chatting. It does not send a message or change a privacy setting; there are no placeholders."
                    })
                })
            }), T[18] = _) : _ = T[18], T[19] !== w ? (j = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [f, w, _]
                })]
            }), T[19] = w, T[20] = j) : j = T[20], T[21] !== j || T[22] !== o ? (I = (0, a.jsx)(b.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: o,
                children: j
            }), T[21] = j, T[22] = o, T[23] = I) : I = T[23], T[24] !== O || T[25] !== I || T[26] !== n || T[27] !== s ? (S = (0, a.jsx)(y.a, {
                open: O,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: s,
                children: I
            }), T[24] = O, T[25] = I, T[26] = n, T[27] = s, T[28] = S) : S = T[28], S
        }

        function z(e) {
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
        var G = n("zHQF");

        function F(e) {
            let t, n = (0, r.c)(4),
                {
                    compact: o,
                    conversationId: i,
                    fallback: l
                } = e,
                d = (0, s.x)(c.t, i);
            return n[0] !== o || n[1] !== l || n[2] !== d ? (t = null == d ? l : (0, a.jsx)(R, {
                compact: o,
                state: d
            }), n[0] = o, n[1] = l, n[2] = d, n[3] = t) : t = n[3], t
        }

        function B(e) {
            let t, n, d, h = (0, r.c)(18),
                {
                    conversationId: m,
                    fallback: p,
                    onStarterPromptSelect: g
                } = e,
                f = (0, s.y)(i.a),
                v = (0, s.x)(c.t, m),
                y = (0, s.z)(v?.status === "failed" ? o.c : null),
                b = y?.state?.businessProfileChat;
            if (v?.status === "failed" && b && y?.state?.initialChatGptConversationId === m && y.state.initialChatGptBusinessAgentGizmoId === b.gizmoId && (0, l.e)(m)) {
                let e;
                if (v.accountId !== b.accountId || null != v.userId && v.userId !== b.userId) {
                    let e;
                    return h[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(G.b, {}), h[0] = e) : e = h[0], e
                }
                return h[1] !== m || h[2] !== b || h[3] !== f || h[4] !== v.businessName || h[5] !== v.logoUrl ? (e = (0, a.jsx)(G.a, {
                    retry: () => void(0, u.a)(f, m, b, {
                        businessName: v.businessName,
                        logoUrl: v.logoUrl
                    })
                }), h[1] = m, h[2] = b, h[3] = f, h[4] = v.businessName, h[5] = v.logoUrl, h[6] = e) : e = h[6], e
            }
            return null == v ? p : (h[7] !== p || h[8] !== g || h[9] !== v ? (t = "ready" !== v.status || v.context.showConversationStarters ? (0, a.jsx)(N, {
                state: v,
                onStarterPromptSelect: g
            }) : p, h[7] = p, h[8] = g, h[9] = v, h[10] = t) : t = h[10], h[11] !== m || h[12] !== v.context || h[13] !== v.status ? (n = "ready" === v.status ? (0, a.jsx)(L, {
                context: v.context,
                conversationId: m
            }, v.context.interactionId) : null, h[11] = m, h[12] = v.context, h[13] = v.status, h[14] = n) : n = h[14], h[15] !== t || h[16] !== n ? (d = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), h[15] = t, h[16] = n, h[17] = d) : d = h[17], d)
        }

        function L(e) {
            let t, n, o, l = (0, r.c)(11),
                {
                    context: c,
                    conversationId: u
                } = e,
                h = (0, s.y)(i.a),
                m = (0, s.z)(d.b),
                p = m?.conversationId === u && m.ready;
            return p || !0 === c.showDisclosureModal ? (l[0] !== p || l[1] !== c || l[2] !== m ? (t = p ? {
                ...c,
                showDisclosureModal: !m.presented
            } : c, l[0] = p, l[1] = c, l[2] = m, l[3] = t) : t = l[3], l[4] !== p || l[5] !== u || l[6] !== h ? (n = p ? () => (0, d.a)(h, u) : void 0, l[4] = p, l[5] = u, l[6] = h, l[7] = n) : n = l[7], l[8] !== t || l[9] !== n ? (o = (0, a.jsx)(O, {
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
            m = n("ZhoB");
        let p = new WeakSet;

        function g(e) {
            let t, n, a = (0, r.c)(5),
                {
                    error: s,
                    onShown: i
                } = e,
                l = (0, o.useEffectEvent)(i);
            return a[0] !== s || a[1] !== l ? (t = () => {
                if (null != s) {
                    if ((0, h.e)(s)) {
                        if (p.has(s)) return;
                        p.add(s)
                    }
                    l()
                }
            }, a[0] = s, a[1] = l, a[2] = t) : t = a[2], a[3] !== s ? (n = [s], a[3] = s, a[4] = n) : n = a[4], (0, o.useEffect)(t, n), null
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, p, f, v, y, b, x = (0, r.c)(24),
                    {
                        conversationId: C,
                        error: w,
                        loadError: _,
                        canRetry: j,
                        isWorkConversation: I,
                        showChatFallback: S,
                        children: T
                    } = e,
                    P = (0, s.y)(u.a),
                    A = (0, s.z)(void 0 !== S && S && !1 === I ? c.b : null);
                if (null != A) return A;
                x[0] !== C || x[1] !== I || x[2] !== P ? (t = (e, t) => {
                    (0, m.e)(P.get(d.c).logProductEvent, {
                        conversationId: C,
                        error: e,
                        isWorkConversation: I,
                        canRetry: t
                    })
                }, x[0] = C, x[1] = I, x[2] = P, x[3] = t) : t = x[3];
                let E = t;
                x[4] !== j || x[5] !== _ || x[6] !== E ? (n = () => E(_, j), x[4] = j, x[5] = _, x[6] = E, x[7] = n) : n = x[7], x[8] !== _ || x[9] !== n ? (o = (0, a.jsx)(g, {
                    error: _,
                    onShown: n
                }), x[8] = _, x[9] = n, x[10] = o) : o = x[10], x[11] !== T || x[12] !== o ? (p = (0, a.jsxs)(a.Fragment, {
                    children: [o, T]
                }), x[11] = T, x[12] = o, x[13] = p) : p = x[13];
                let k = p;
                return x[14] !== w ? (f = w instanceof h.a && !(0, h.e)(w) && (403 === w.status || 404 === w.status), x[14] = w, x[15] = f) : f = x[15], x[16] !== w || x[17] !== E ? (v = () => E(w, !1), x[16] = w, x[17] = E, x[18] = v) : v = x[18], x[19] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, a.jsx)(i.a, {
                    id: "chatgptConversations.conversationInaccessible",
                    defaultMessage: "You don’t have access to this conversation. Make sure you’re logged in to the right account, or ask the conversation owner to send you a share link.",
                    description: "Info toast shown when a user opens a ChatGPT conversation that does not exist or that they cannot access. The user is returned to Home and can switch accounts or ask the owner for a share link."
                }), x[19] = y) : y = x[19], x[20] !== k || x[21] !== f || x[22] !== v ? (b = (0, a.jsxs)(a.Fragment, {
                    children: [null, (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(l.a, {
                            isUnavailable: f,
                            homePath: "/",
                            onUnavailable: v,
                            message: y,
                            children: k
                        })
                    })]
                }), x[20] = k, x[21] = f, x[22] = v, x[23] = b) : b = x[23], b
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
            m = n("dQRk"),
            p = n("vVgo"),
            g = n("gyrn"),
            f = n("LOqV"),
            v = n("QmkR");

        function y(e, t) {
            let n = e.query.getData(h.chatGptConversationQueryById$, t) ?? (0, f.g)(e.queryClient, t);
            if (null != n) return n;
            let a = e.get(m.k).find(n => e.get(m.j, n) === t);
            if (!(null == a || e.get(m.A, a))) return {
                id: t,
                conversation_origin: e.get(m.x, a),
                gizmo_id: e.get(m.R, a),
                is_starred: !1,
                title: e.get(m.cb, a)
            }
        }

        function b(e, t) {
            let n = e.get(m.j, t);
            return null == n ? null : e.query.snapshot(h.chatGptConversationQueryById$, n).getData() ?? null
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n = b(e, t);
                null != n && (0, l.a)(e, n.conversation_id)
            },
            b: y,
            c: function(e, t) {
                let n = e.get(m.j, t);
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
                let o = e.get(m.D, t) ? e.get(m.cb, t) : s.title,
                    l = (0, p.a)(s.context_scopes) ? s.gizmo_id : void 0,
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
                let t, n, m, p, g, f, v, y = (0, a.c)(16),
                    {
                        conversationId: b
                    } = e,
                    x = (0, r.y)(c.a),
                    C = (0, s.a)();
                return y[0] !== b || y[1] !== C || y[2] !== x ? (t = () => {
                    (0, h.c)(x, b).catch(() => {
                        x.get(i.f).danger(C.formatMessage(u.a.markUnreadError), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.sidebar.markUnreadError"
                            }
                        })
                    })
                }, y[0] = b, y[1] = C, y[2] = x, y[3] = t) : t = y[3], (0, o.a)("markThreadUnread", t), y[4] !== b || y[5] !== x ? (n = () => void(0, d.renameActiveChatGptConversation)(x, b), m = [b, x], y[4] = b, y[5] = x, y[6] = n, y[7] = m) : (n = y[6], m = y[7]), (0, l.d)("rename-thread", n, m), y[8] !== b || y[9] !== x ? (p = () => (0, d.c)(x, b), g = [b, x], y[8] = b, y[9] = x, y[10] = p, y[11] = g) : (p = y[10], g = y[11]), (0, l.d)("toggle-thread-pin", p, g), y[12] !== b || y[13] !== x ? (f = () => (0, d.a)(x, b), v = [b, x], y[12] = b, y[13] = x, y[14] = f, y[15] = v) : (f = y[14], v = y[15]), (0, l.d)("archive-thread", f, v), null
            }
        })
    }),
    O3ow: (function(e, t, n) {
        n.d(t, {
            a: () => o6,
            ChatGptConversationPage: () => o5
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
            m = n("BolX"),
            p = n("d0tz"),
            g = n("AuIy"),
            f = n("iqEK"),
            v = n("NRIv"),
            y = n("zd8w"),
            b = n("v7qY"),
            x = n("Wf1j"),
            C = n("oyxz"),
            w = n("jqIZ"),
            _ = n("bn59"),
            j = n("OY84"),
            I = n("Yxds"),
            S = n("StMt"),
            T = n("E8Sp"),
            P = n("z0li"),
            A = n("QcFS"),
            E = n("ZU27"),
            k = n("Pyg2"),
            M = n("ZIh4"),
            R = n("O0M0"),
            N = n("Cslg"),
            O = n("OFP1"),
            z = n("ItIk"),
            G = (n("AZW7"), n("jov5")),
            F = n("dQRk"),
            B = n("tSEg"),
            L = n("Ro2M"),
            D = n("bN4H"),
            W = n("TS05");

        function H(e) {
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
                } = (0, w.Y)();
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "automations.cloud.scheduled-tasks"
            }, i[0] = t) : t = i[0];
            let {
                isCapable: g
            } = (0, m.x)(S.a, t);
            if (i[1] !== g || i[2] !== p?.sidebarArea || i[3] !== h) {
                let e = new URLSearchParams(h);
                n = e.get("automationId"), s = p?.sidebarArea === "scheduled" || !g || !n || "finalAgentTurnStart" !== e.get("messageId"), i[1] = g, i[2] = p?.sidebarArea, i[3] = h, i[4] = n, i[5] = s
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
                u = (0, m.y)(B.a),
                h = (0, w.Y)(),
                p = (0, m.z)(N.f),
                g = (0, m.x)(F.j, l),
                {
                    data: f
                } = (0, m.x)(L.e, i),
                v = (0, m.z)(G.a),
                b = (0, y.useRef)(null),
                x = (0, y.useRef)(null);
            o[0] !== c ? (t = c.findLast(V), o[0] = c, o[1] = t) : t = o[1];
            let C = t;
            o[2] !== p || o[3] !== i || o[4] !== v || o[5] !== C || o[6] !== f || o[7] !== h || o[8] !== u || o[9] !== d ? (n = () => {
                null == f || null == p || (v || b.current === p || (b.current = p, (0, D.openAutomationSidePanelTab)({
                    scope: u,
                    automationId: i,
                    title: f.automation.title
                })), null != d && null != C && x.current !== p && (x.current = p, d.scrollToKey(C.turnKey, U, {
                    align: "top"
                }).then(() => {
                    u.set(W.a, {
                        locationKey: h.key,
                        accountId: p
                    }, !0)
                })))
            }, o[2] = p, o[3] = i, o[4] = v, o[5] = C, o[6] = f, o[7] = h, o[8] = u, o[9] = d, o[10] = n) : n = o[10];
            let _ = (0, y.useEffectEvent)(n);
            o[11] !== p || o[12] !== l || o[13] !== f?.automation.conversation_id || o[14] !== _ || o[15] !== g ? (a = () => {
                null != p && f?.automation.conversation_id === (g ?? l) && _()
            }, o[11] = p, o[12] = l, o[13] = f?.automation.conversation_id, o[14] = _, o[15] = g, o[16] = a) : a = o[16];
            let j = C?.turnKey,
                I = f?.automation.conversation_id;
            return o[17] !== p || o[18] !== v || o[19] !== l || o[20] !== g || o[21] !== j || o[22] !== I || o[23] !== d ? (s = [p, l, j, I, g, v, d], o[17] = p, o[18] = v, o[19] = l, o[20] = g, o[21] = j, o[22] = I, o[23] = d, o[24] = s) : s = o[24], (0, y.useEffect)(a, s), null
        }

        function U(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: K
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function K(e) {
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
        var Y = n("uxPT"),
            $ = n("nKJ6"),
            X = n("GMTh"),
            J = n("zpMv"),
            Z = n("PFzG"),
            ee = n("KvJW"),
            et = n("TDcV"),
            en = n("Xvoy"),
            ea = n("SGsN"),
            er = n("WAdu"),
            es = n("OWtl"),
            eo = n("hZax"),
            ei = n("VnEZ");
        let el = {
            $type: "protobuf_analytics_events.v1.ChatgptConversationPrintLifecycle"
        };
        var ec = n("jDEJ"),
            ed = n("yGJW");
        let eu = (0, m.u)(es.a, null);

        function eh(e, t) {
            if (!e.get(ed.c).isChatgptBrowserReplacement || t.repeat || ((0, ec.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(eu)) return;
            let n = ep("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(eu, n), eg(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function em(e, t, n, a) {
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

        function ep(e) {
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
            eb = n("SqqO"),
            ex = n("zHp1"),
            eC = n("rvFo"),
            ew = n("taWv");

        function e_() {
            return Object.fromEntries(Array.from(document.images).flatMap(e => {
                if (!e.complete || 0 === e.naturalWidth) return [];
                let t = e.currentSrc || e.src;
                return [e.getAttribute("src"), e.src, t].flatMap(e => e ? [
                    [e, t]
                ] : [])
            }))
        }
        var ej = n("rxj0"),
            eI = n("gsAl"),
            eS = n("AO3k"),
            eT = n("aS84"),
            eP = n("Qtjq"),
            eA = "printDocument-v_w5Ax";
        let eE = "https://chatgpt.com/download/?utm_source=chatgpt_web&utm_medium=print&utm_campaign=app_install";

        function ek(e) {
            let t, n, s, o, l, c, d, u, h, m, p, g, f = (0, r.c)(22),
                {
                    children: v,
                    title: y
                } = e,
                b = (0, x.a)(),
                {
                    getExperiment: w
                } = (0, eo.j)();
            if (!w("448755449").get("enabled", !1)) {
                let e, t;
                return f[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.b)(eA, "hidden w-full space-y-1.5 bg-surface text-default print:block"), f[0] = e) : e = f[0], f[1] !== v ? (t = (0, a.jsx)("div", {
                    className: e,
                    "data-conversation-print": "",
                    "data-theme": "light",
                    children: v
                }), f[1] = v, f[2] = t) : t = f[2], t
            }
            return f[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.b)(eA, "formattedPrintDocument-tP74Wl", "group/conversation-print hidden w-full bg-surface text-default print:block"), f[3] = t) : t = f[3], f[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(eT.a, {
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
            }), f[12] = u) : u = f[12], f[13] !== b ? (h = b.formatMessage({
                id: "chatgpt.print.downloadApp.qrCode",
                defaultMessage: "Download the ChatGPT app",
                description: "Accessible label for a QR code and link in a printed or PDF-saved conversation. The code and link open the ChatGPT app download page."
            }), f[13] = b, f[14] = h) : h = f[14], f[15] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, a.jsx)(C.a, {
                id: "chatgpt.print.downloadApp.fallback",
                defaultMessage: "Get the app",
                description: "Link to the ChatGPT app download page when its QR code cannot be generated in a printed conversation"
            }), f[15] = m) : m = f[15], f[16] !== h ? (p = (0, a.jsxs)("footer", {
                className: l,
                children: [c, u, (0, a.jsx)("a", {
                    className: "shrink-0",
                    href: `${eE}&utm_content=pdf_link`,
                    children: (0, a.jsx)(eS.a, {
                        value: `${eE}&utm_content=qr`,
                        size: "inline",
                        ariaLabel: h,
                        fallback: m
                    })
                })]
            }), f[16] = h, f[17] = p) : p = f[17], f[18] !== p || f[19] !== s || f[20] !== o ? (g = (0, a.jsxs)("div", {
                className: t,
                "data-conversation-print": "",
                "data-print-formatting": "",
                "data-theme": "light",
                children: [s, o, p]
            }), f[18] = p, f[19] = s, f[20] = o, f[21] = g) : g = f[21], g
        }

        function eM(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var eR = n("zn0A"),
            eN = n("OOaz"),
            eO = n("jfiJ"),
            ez = n("FGJH"),
            eG = n("nmN6");
        let eF = new WeakMap;

        function eB(e) {
            let t, n, s = (0, r.c)(6),
                o = (0, m.z)(et.a);
            return s[0] !== o || s[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([o, e.entries[0]?.conversationId]), s[0] = o, s[1] = e.entries[0]?.conversationId, s[2] = t) : t = s[2], s[3] !== e || s[4] !== t ? (n = (0, a.jsx)(eL, {
                ...e
            }, t), s[3] = e, s[4] = t, s[5] = n) : n = s[5], n
        }

        function eL(e) {
            let t, n, s, o, i, l, c = (0, r.c)(16),
                d = (0, m.y)(B.a),
                u = (0, m.z)(en.a),
                [h, p] = (0, y.useState)(!1),
                g = (0, y.useRef)(null);
            c[0] !== d ? (t = (e, t) => {
                if (eh(d, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void g.current?.onKeyDown(e, t);
                let n = eF.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, b.flushSync)(() => p(!0));
                let a = n ?? g.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => eF.get(e)).finally(() => {
                    t.aborted || p(!1)
                })
            }, c[0] = d, c[1] = t) : t = c[1];
            let f = (0, y.useEffectEvent)(t);
            c[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                (0, b.flushSync)(() => p(!0)), g.current?.onBeforePrint()
            }, c[2] = n) : n = c[2];
            let v = (0, y.useEffectEvent)(n);
            c[3] !== d ? (s = () => {
                d.set(eR.a, null), p(!1)
            }, c[3] = d, c[4] = s) : s = c[4];
            let x = (0, y.useEffectEvent)(s);
            return c[5] !== x || c[6] !== v || c[7] !== f || c[8] !== d ? (o = () => {
                let e, t, n = new AbortController,
                    a = (e = () => {
                        if (!d.get(ed.c).isChatgptBrowserReplacement) return;
                        let e = d.get(eu);
                        if (e?.printing) return;
                        let t = {
                            ...e ?? ep("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_UNOBSERVED"),
                            printing: !0
                        };
                        d.set(eu, t), eg(d, t, "CHATGPT_CONVERSATION_PRINT_STAGE_BEFORE_PRINT")
                    }, t = () => {
                        let e = d.get(eu);
                        d.get(ed.c).isChatgptBrowserReplacement && e?.printing && (eg(d, e, "CHATGPT_CONVERSATION_PRINT_STAGE_AFTER_PRINT"), d.set(eu, null))
                    }, window.addEventListener("beforeprint", e, !0), window.addEventListener("afterprint", t), () => {
                        window.removeEventListener("beforeprint", e, !0), window.removeEventListener("afterprint", t), d.set(eu, null)
                    }),
                    r = e => f(e, n.signal);
                return window.addEventListener("keydown", r, !0), window.addEventListener("beforeprint", v, !0), window.addEventListener("afterprint", x), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), window.removeEventListener("beforeprint", v, !0), window.removeEventListener("afterprint", x), d.set(eR.a, null), a()
                }
            }, c[5] = x, c[6] = v, c[7] = f, c[8] = d, c[9] = o) : o = c[9], c[10] !== d ? (i = [d], c[10] = d, c[11] = i) : i = c[11], (0, y.useEffect)(o, i), c[12] !== u || c[13] !== e || c[14] !== h ? (l = h || u ? (0, a.jsx)(eD, {
                ...e,
                ref: g,
                printing: u
            }) : null, c[12] = u, c[13] = e, c[14] = h, c[15] = l) : l = c[15], l
        }

        function eD(e) {
            let t, n, s, i, l = (0, r.c)(19),
                {
                    entries: c,
                    title: d,
                    TurnRowComponent: u,
                    printing: h,
                    ref: p
                } = e,
                g = (0, m.y)(B.a),
                f = (0, y.useContext)(R.a),
                v = (0, y.useContext)(er.a),
                {
                    getExperiment: x
                } = (0, eo.j)(),
                w = x("448755449", {
                    disableExposureLog: !0
                }).get("enabled", !1);
            l[0] !== c[0]?.conversationId ? (t = c[0]?.conversationId ?? (0, eN.d)(""), l[0] = c[0]?.conversationId, l[1] = t) : t = l[1], l[2] !== f || l[3] !== t ? (n = {
                auth: f,
                conversationId: t
            }, l[2] = f, l[3] = t, l[4] = n) : n = l[4];
            let _ = (0, m.x)(null != c[0] && eI.h, n),
                j = (0, m.x)(null == c[0] ? null : ej.d, c[0]?.conversationId ?? "") ?? !0,
                I = (0, y.useRef)(null),
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
                            let a = e.get(F.j, n.conversationId);
                            t = {
                                serverId: a,
                                userResolver: (0, ew.c)(void 0, void 0, void 0, e.get(F.R, n.conversationId) ?? void 0),
                                scopedResolver: (0, ew.c)(a ?? void 0)
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
                            void 0 === t.generatedResolver && (t.generatedResolver = e.get(ew.a, n.conversationId));
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
                                        for (let a of (0, ey.u)(t, e)) {
                                            if (r && (0, eb.d)(a.src)) continue;
                                            let e = a.searchResult?.isProxied && (a.previewSrc === a.searchResult.contentSrc || a.previewSrc === a.searchResult.originalSrc) ? a.src : a.previewSrc;
                                            o.push({
                                                conversationId: n.conversationId,
                                                src: a.src,
                                                previewSrc: null != e && r && (0, eb.d)(e) ? a.src : e
                                            })
                                        }
                            }
                            if (null == s) continue;
                            i.push(...l.contentReferences.flatMap((e, t) => (0, ey.u)(e, t).map(e => {
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
                        return null != t && (0, ex.h)(t) ? [{
                            src: t,
                            resolver: n
                        }] : []
                    });
                    return {
                        queryKey: ["chatgpt-print-assets", e.get(et.a), t[0]?.conversationId, a, r, o, c.map(e => {
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
                        staleTime: eC.b.FIVE_MINUTES,
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
                                for (let e of ev()(c, 6)) i.throwIfAborted(), await Promise.all(e.map(async e => {
                                    let {
                                        src: n,
                                        resolver: r
                                    } = e, s = await (0, ex.a)(a, n, r);
                                    if (i.throwIfAborted(), null != s) {
                                        let e = new Image;
                                        e.referrerPolicy = "no-referrer", e.src = s, await e.decode(), t[n] = s
                                    }
                                }));
                                let d = new Map,
                                    u = o.flatMap(t => {
                                        let n = d.get(t.conversationId);
                                        return (null == n && (n = r || !e.get(eI.h, {
                                            auth: s,
                                            conversationId: t.conversationId
                                        }) && e.get(ej.d, t.conversationId), d.set(t.conversationId, n)), n && (0, eb.d)(t.src)) ? [] : [{
                                            ...t,
                                            previewSrc: n && null != t.previewSrc && (0, eb.d)(t.previewSrc) ? t.src : t.previewSrc
                                        }]
                                    }),
                                    h = n ? t : await async function(e, t, n) {
                                        if (0 === e.length) return t;
                                        let a = e_(),
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
                }(g, c, h, w, "restricted" === v || !_ && j, f),
                {
                    data: T,
                    isSuccess: P,
                    isError: A,
                    refetch: E
                } = (0, o.a)(S);
            return l[5] !== S || l[6] !== T || l[7] !== w || l[8] !== P || l[9] !== E || l[10] !== g ? (s = () => ({
                onKeyDown(e, t) {
                    if (!e.defaultPrevented && (!P || !T.complete) && (e.preventDefault(), !e.repeat && I.current !== t)) return I.current = t, E({
                        cancelRefetch: !1
                    }).then(() => {
                        t.aborted || window.print()
                    }).finally(() => {
                        I.current === t && (I.current = null)
                    })
                },
                onBeforePrint() {
                    if (w) {
                        let e = g.queryClient.getQueryData(S.queryKey),
                            t = {
                                ...e_(),
                                ...e?.imageSources
                            };
                        (0, b.flushSync)(() => g.set(eR.a, t))
                    }
                }
            }), l[5] = S, l[6] = T, l[7] = w, l[8] = P, l[9] = E, l[10] = g, l[11] = s) : s = l[11], (0, y.useImperativeHandle)(p, s), l[12] !== u || l[13] !== c || l[14] !== A || l[15] !== P || l[16] !== h || l[17] !== d ? (i = h ? (0, b.createPortal)((0, a.jsx)(ek, {
                title: d,
                children: (0, a.jsx)(ei.a, {
                    value: null,
                    children: (0, a.jsx)(eG.a, {
                        value: null,
                        children: P ? c.map(e => {
                            var t;
                            return (0, a.jsx)(u, {
                                entry: {
                                    ...e,
                                    timestampSeparatorAtMs: null,
                                    turn: {
                                        ...t = e.turn,
                                        suppressTurnActions: !0,
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? eM(e) : {
                                            ...e,
                                            items: e.items.map(eM),
                                            activeReasoning: null == e.activeReasoning ? void 0 : eM(e.activeReasoning)
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
                            children: A ? (0, a.jsx)(C.a, {
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
            }), document.body) : null, l[12] = u, l[13] = c, l[14] = A, l[15] = P, l[16] = h, l[17] = d, l[18] = i) : i = l[18], i
        }

        function eW(e) {
            let t, n, a, s, i, l, c = (0, r.c)(22),
                {
                    conversationId: d
                } = e,
                u = (0, m.y)(es.a),
                h = (0, x.a)(),
                p = (0, y.useRef)(null),
                g = (0, m.z)(et.a),
                f = (0, m.x)(F.j, d),
                v = (0, m.z)(ez.b);
            c[0] !== g || c[1] !== f ? (t = ["chatgpt-print-history", g, f], c[0] = g, c[1] = f, c[2] = t) : t = c[2], c[3] !== u || c[4] !== f ? (n = e => {
                let {
                    signal: t
                } = e;
                return em(u, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != f && await (0, eO.a)(u, f, t), !0))
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
            } = (0, o.a)(a);
            c[9] !== g || c[10] !== d || c[11] !== h || c[12] !== v || c[13] !== b || c[14] !== u || c[15] !== f ? (s = (e, t) => {
                if (eh(u, e), e.defaultPrevented || null == f || 0 === v || u.get(ez.c, f)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (p.current?.signal === t) return void eF.set(e, p.current.preparation);
                let n = b({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && u.get(et.a) === g) {
                        if (e.isError) return void u.get(ea.f).danger(h.formatMessage({
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
                            predicate: eU
                        }).map(eH)), t.aborted || u.get(et.a) !== g || window.print()
                    }
                }).finally(() => {
                    p.current?.signal === t && (p.current = null)
                });
                p.current = {
                    signal: t,
                    preparation: n
                }, eF.set(e, n)
            }, c[9] = g, c[10] = d, c[11] = h, c[12] = v, c[13] = b, c[14] = u, c[15] = f, c[16] = s) : s = c[16];
            let C = (0, y.useEffectEvent)(s);
            return c[17] !== C ? (i = () => {
                let e = new AbortController,
                    t = t => C(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, c[17] = C, c[18] = i) : i = c[18], c[19] !== g || c[20] !== f ? (l = [g, f], c[19] = g, c[20] = f, c[21] = l) : l = c[21], (0, y.useEffect)(i, l), null
        }

        function eH(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(eq)
        }

        function eq() {}

        function eU(e) {
            return e.getObserversCount() > 0
        }
        var eK = n("DrWu"),
            eV = n("x4uR"),
            eQ = n("hx97");

        function eY(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var e$ = n("MrzV"),
            eX = n("Sm6l"),
            eJ = n("gbRX");

        function eZ(e) {
            let t, n, s = (0, r.c)(4),
                {
                    isFetching: o,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, m.z)(!i && eJ.a) || o;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(C.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again",
                description: "Retry loading a ChatGPT conversation after its history could not be loaded"
            }), s[0] = t) : t = s[0], s[1] !== l || s[2] !== c ? (n = (0, a.jsx)(eX.a, {
                color: "ghost",
                disabled: c,
                onClick: l,
                children: t
            }), s[1] = l, s[2] = c, s[3] = n) : n = s[3], n
        }

        function e0(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(C.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation",
                description: "Error state when a ChatGPT conversation fetch fails"
            }), o[0] = t) : t = o[0], o[1] !== i || o[2] !== l || o[3] !== c ? (n = null != c ? (0, a.jsx)(eZ, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, o[1] = i, o[2] = l, o[3] = c, o[4] = n) : n = o[4], o[5] !== n ? (s = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), o[5] = n, o[6] = s) : s = o[6], s
        }
        var e1 = n("FfNP"),
            e2 = n("Bbed"),
            e3 = n("WVag");
        let e4 = (0, e2.a)(e1.loadEpicChartIndicator);

        function e5(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, m.x)(e3.a, s),
                [i, l] = (0, y.useState)(!1);
            return i || null == o || l(!0), n[0] !== s || n[1] !== i ? (t = i ? (0, a.jsx)(e4, {
                conversationId: s
            }) : null, n[0] = s, n[1] = i, n[2] = t) : t = n[2], t
        }
        var e6 = n("YTsa"),
            e7 = n("AoaR"),
            e8 = n("Ow2S"),
            e9 = n("fDfx"),
            te = n("u4MG"),
            tt = n("Xslx"),
            tn = n("EEop"),
            ta = n("bxvp"),
            tr = n("VBQS"),
            ts = n("hsIu");
        let to = (0, m.d)(es.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(ta.c) || null == n(N.f) || null == n(N.k)) return null;
            let {
                data: a,
                isError: r
            } = n(ts.b);
            if (r || a?.project_id !== e) return null;
            let {
                data: s,
                isError: o
            } = n(tn.l, (0, tr.a)());
            return o ? null : (0, tr.b)(s)
        });
        var ti = n("DWXw"),
            tl = n("FmJi"),
            tc = n("TSib"),
            td = n("sIex"),
            tu = n("jEN2"),
            th = n("kphc"),
            tm = n("YWcr"),
            tp = n("RGWz"),
            tg = n("QxH2"),
            tf = n("mwa5"),
            tv = n("UuVq"),
            ty = n("TwSq"),
            tb = n("l0fK"),
            tx = n("hkBU"),
            tC = n("cP1f"),
            tw = n("UxN3"),
            t_ = n("XcNx"),
            tj = n("GKsW"),
            tI = n("yWTM"),
            tS = n("Z2JT"),
            tT = n("SkIz"),
            tP = n("hsSf"),
            tA = n("ibLK"),
            tE = n("T1PX"),
            tk = n("Fjd0"),
            tM = n("VPBa"),
            tR = n("PWXi"),
            tN = n("zOE4"),
            tO = n("Xc94"),
            tz = n("Sgih"),
            tG = n("HwRo"),
            tF = n("qwxA"),
            tB = n("gOnr"),
            tL = n("KXCj"),
            tD = n("e1xH"),
            tW = n("pAFY");
        n("kErH");
        var tH = n("dJBt"),
            tq = n("FR8U"),
            tU = n("xqnZ"),
            tK = n("UMxD"),
            tV = n("VV6Z"),
            tQ = n("JhDO"),
            tY = n("Mbqw"),
            t$ = n("kl6F"),
            tX = n("kfGJ"),
            tJ = n("khOd"),
            tZ = n("RZBv"),
            t0 = n("yzQ9"),
            t1 = n("OMIV"),
            t2 = n("JCJj"),
            t3 = n("KkZX"),
            t4 = n("uYx2"),
            t5 = n("Gjet"),
            t6 = n("SBcL"),
            t7 = n("BdYu"),
            t8 = n("Nyub"),
            t9 = n("jZDY"),
            ne = n("HgLj"),
            nt = n("Bc5r"),
            nn = n("bIvi"),
            na = n("Elta"),
            nr = n("eW0T"),
            ns = n("hOYb"),
            no = n("eShZ"),
            ni = n("qqut"),
            nl = n("CsbC"),
            nc = n("tCyZ"),
            nd = n("S0ko"),
            nu = n("GgLN"),
            nh = n("KdfG"),
            nm = n("AOHi"),
            np = n("iRMi"),
            ng = n("U2UX"),
            nf = n("gbrq"),
            nv = n("K33Q"),
            ny = n("mv4d"),
            nb = n("w7Qu"),
            nx = n("dt5v"),
            nC = n("bWX0"),
            nw = n("smHt"),
            n_ = n("aoTb"),
            nj = n("pqpL"),
            nI = n("uqg3"),
            nS = n("XcRr"),
            nT = n("dk3M"),
            nP = n("WFY2"),
            nA = n("vldH"),
            nE = n("ISgP"),
            nk = n("t2JB"),
            nM = n("DIH2"),
            nR = n("aFoA"),
            nN = n("H8lk"),
            nO = n("f2PP"),
            nz = n("S95W");
        let nG = (0, m.v)(es.a, e => null);
        var nF = n("DM5G"),
            nB = n("gJe8"),
            nL = n("d2rV"),
            nD = n("n6zj"),
            nW = n("aLqR"),
            nH = n("VlIB"),
            nq = n("ASxG"),
            nU = n("wD9O"),
            nK = n("lsfk"),
            nV = n("IObw"),
            nQ = n("BOYb"),
            nY = n("kQNh"),
            n$ = n.n(nY),
            nX = n("NkEl"),
            nJ = n("FW69"),
            nZ = "highlight-x7OnzP",
            n0 = "safari-wcvuzB",
            n1 = "block-t7sxyD";
        let n2 = "chatgpt-search-result",
            n3 = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* n4(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(n3) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let s = RegExp(t.split(/\n+/u).map(n$()).join("\\n*"), "g");
            for (let n = s.exec(r); null != n && n.index < r.length; n = s.exec(r)) {
                let r = n.index;
                s.lastIndex = r + 1;
                let o = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < o);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, o - l.start), n5(c) && ((0, nJ.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function n5(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let n6 = nq.object({
            chatGptSearchNavigation: nq.object({
                key: nq.string(),
                messageId: nq.string()
            })
        });

        function n7(e) {
            let t, n, a, s, o, i, l, c, d, u, h, p, g = (0, r.c)(50),
                {
                    conversationId: f,
                    entries: v,
                    isConversationFetching: b,
                    turnListApi: x
                } = e,
                C = (0, m.y)(es.a),
                _ = (0, m.x)(F.r, f),
                j = (0, nK.b)(),
                I = (0, nU.c)();
            g[0] !== j || g[1] !== I ? (t = e => {
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
                            left: (0, nU.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                        h = (0, nU.b)(o.height, n),
                        m = (0, nU.b)(o.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - m, "instant", "user")
                }(e, j, I)
            }, g[0] = j, g[1] = I, g[2] = t) : t = g[2];
            let S = (0, y.useEffectEvent)(t),
                T = (0, w.Y)(),
                P = (0, w._)(),
                A = new URLSearchParams(T.search),
                E = A.get("messageId") ?? A.get("message"),
                k = n6.safeParse(T.state).data?.chatGptSearchNavigation,
                M = E ?? k?.messageId,
                R = A.get("selectedTextQuery") ?? "",
                N = (0, m.x)(F.L, f),
                O = !R || null != M && null != N && (N[M]?.message != null || Object.values(N).some(e => e.message?.id === M)),
                z = R || A.get("historySearchQuery") || "",
                G = JSON.stringify([f, null != E ? T.key : k?.key ?? T.key, M]);
            g[3] !== G ? (n = {
                key: G,
                handled: !1,
                positioned: !1
            }, g[3] = G, g[4] = n) : n = g[4];
            let B = (0, y.useRef)(n),
                L = (0, y.useEffectEvent)(e => {
                    B.current.positioned = !0;
                    let t = z.trim().length > 0 ? function(e, t, n) {
                        let a, r, s, o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            m = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === m.length) return () => {};
                        let p = new RegExp(null == c ? m.toSorted((e, t) => t.length - e.length).map(n$()).join("|") : n$()(c), null == c ? "giu" : "gu"),
                            g = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(w);

                        function C() {
                            for (let t of (g = !0, x.disconnect(), clearTimeout(r), null != s && cancelAnimationFrame(s), null != a && CSS.highlights.get(n2) === a && CSS.highlights.delete(n2), e.classList.remove(nZ, n0), b)) t.classList.remove(nZ, n1)
                        }

                        function w() {
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
                            if (d < 4e3 && null != e.querySelector("[data-search-result-pending]")) return void w();
                            let u = (0, nX.a)(e);
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
                                    return null != (n.text ?? t.textContent ?? "").normalize("NFC").match(p)
                                }),
                                m = !1;
                            for (let {
                                    element: e,
                                    target: t
                                }
                                of u) null != t.reveal && !y.has(e) && h.some(t => e.contains(t.element)) && (y.add(e), t.reveal(), m = !0);
                            if (m) {
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
                                for (let e of n4(t, c))
                                    if (!(n++ < l)) {
                                        j.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(n3) != null || u.some(t => {
                                        let {
                                            element: n,
                                            target: a
                                        } = t;
                                        return "block" === a.highlight && n.contains(e)
                                    }) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                                });
                                for (let n = t.nextNode(); null != n; n = t.nextNode())
                                    for (let t of (n.textContent ?? "").matchAll(p)) {
                                        let a = e.ownerDocument.createRange();
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), n5(a) && j.push(a)
                                    }
                            }
                            let I = h.flatMap(e => {
                                let {
                                    element: t,
                                    target: n
                                } = e, a = t.getBoundingClientRect(), r = j.some(e => t.contains(e.startContainer));
                                return "terms" === i && a.width > 0 && a.height > 0 && ("block" === n.highlight || "auto" === n.highlight && !r) ? [t] : []
                            });
                            if (0 === j.length && 0 === I.length) {
                                if (d < 800) return void w();
                                I.push(e)
                            }
                            let S = 0,
                                T = 0;
                            for (let e of [...j, ...I]) {
                                let n = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect(),
                                    a = n?.top ?? 0,
                                    r = n?.left ?? 0;
                                (null == t || 0 > (a - S || r - T)) && (t = e, S = a, T = r)
                            }
                            t = t ?? e, v && n?.(t);
                            let P = t instanceof Range ? t.getClientRects()[0] : t.getBoundingClientRect(),
                                A = [P?.top, P?.left, P?.width, P?.height, e.scrollHeight].join(":");
                            if (d < 4e3 && A !== o) {
                                o = A, w();
                                return
                            }
                            if (!v) {
                                v = !0, o = void 0, n?.(t), w();
                                return
                            }
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...j), CSS.highlights.set(n2, a)) : j.length > 0 && I.push(e), e.classList.add(nZ), (0, nQ.e)() && e.classList.add(n0), I)) t.classList.add(nZ, n1), b.add(t);
                            r = setTimeout(C, 3600)
                        }
                        return x.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), _(), C
                    }(e, z, S, R ? "phrase" : "terms", Number(A.get("selectedTextOccurrence"))) : void 0;
                    return null != E && (A.delete("messageId"), A.delete("message"), A.delete("historySearchQuery"), A.delete("selectedTextQuery"), A.delete("selectedTextOccurrence"), P({
                        pathname: T.pathname,
                        search: A.toString(),
                        hash: T.hash
                    }, {
                        replace: !0,
                        preventScrollReset: !0,
                        state: {
                            ...T.state,
                            chatGptSearchNavigation: {
                                key: T.key,
                                messageId: E
                            }
                        }
                    })), t
                });
            g[5] !== f || g[6] !== b || g[7] !== M || g[8] !== G || g[9] !== C || g[10] !== O ? (a = () => {
                if (B.current.key !== G && (B.current = {
                        key: G,
                        handled: !1,
                        positioned: !1
                    }), null != M && !b && O) return C.watch(e => {
                    !B.current.handled && (0, F.Ob)(e, f, M) && (B.current.handled = !0)
                })
            }, s = [f, b, M, G, C, O], g[5] = f, g[6] = b, g[7] = M, g[8] = G, g[9] = C, g[10] = O, g[11] = a, g[12] = s) : (a = g[11], s = g[12]), (0, y.useLayoutEffect)(a, s), g[13] !== v || g[14] !== M ? (o = null == M ? void 0 : v.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(M)
            }), g[13] = v, g[14] = M, g[15] = o) : o = g[15];
            let D = o;
            g[16] !== T || g[17] !== P || g[18] !== E || g[19] !== k ? (i = () => {
                null == E && null != k && P(T, {
                    replace: !0,
                    preventScrollReset: !0,
                    state: {
                        ...T.state,
                        chatGptSearchNavigation: void 0
                    }
                })
            }, g[16] = T, g[17] = P, g[18] = E, g[19] = k, g[20] = i) : i = g[20];
            let W = (0, y.useEffectEvent)(i);
            if (g[21] !== W || g[22] !== _ || g[23] !== b || g[24] !== D ? (l = () => {
                    !B.current.positioned || null != D || b || _ || W()
                }, g[21] = W, g[22] = _, g[23] = b, g[24] = D, g[25] = l) : l = g[25], g[26] !== _ || g[27] !== b || g[28] !== D ? (c = [_, b, D], g[26] = _, g[27] = b, g[28] = D, g[29] = c) : c = g[29], (0, y.useLayoutEffect)(l, c), g[30] !== M || g[31] !== D?.id || g[32] !== D?.turn || g[33] !== D?.turn.items || g[34] !== D?.turn.items.findIndex || g[35] !== D?.turnKey) {
                let e = D?.turn.items.findIndex(e => "messageId" in e && e.messageId === M || "assistant-message" === e.type && null != M && e.sourceMessageIds?.includes(M)) ?? -1,
                    t = D?.turn.items[e],
                    n = D?.id;
                u = D?.turnKey, d = null == t || null == n ? void 0 : (0, nV.b)(t, e, n), g[30] = M, g[31] = D?.id, g[32] = D?.turn, g[33] = D?.turn.items, g[34] = D?.turn.items.findIndex, g[35] = D?.turnKey, g[36] = d, g[37] = u
            } else d = g[36], u = g[37];
            let H = d;
            return g[38] !== L || g[39] !== M || g[40] !== u || g[41] !== x || g[42] !== H ? (h = () => {
                let e;
                if (null == u || null == x) return;
                let t = new AbortController,
                    n = null;
                return x.scrollToKey(u, e => n = (null == M ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(M)}"]`)) ?? (null == H ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(H)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = L(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, g[38] = L, g[39] = M, g[40] = u, g[41] = x, g[42] = H, g[43] = h) : h = g[43], g[44] !== M || g[45] !== G || g[46] !== u || g[47] !== x || g[48] !== H ? (p = [G, M, u, x, H], g[44] = M, g[45] = G, g[46] = u, g[47] = x, g[48] = H, g[49] = p) : p = g[49], (0, y.useLayoutEffect)(h, p), null
        }
        var n8 = n("wXxE");
        let n9 = (0, m.v)(es.a, e => null);
        var ae = n("sfmI"),
            at = n("SZi8"),
            an = n("lBzi"),
            aa = n("Ga6O"),
            ar = n("ESlL"),
            as = n("vknh"),
            ao = n("Ppno"),
            ai = n("lA5q"),
            al = n("wDWo"),
            ac = n("IgxH"),
            ad = n("iaTG"),
            au = n("c3f5"),
            ah = n("XpUB"),
            am = n("xAIC"),
            ap = n("slpy"),
            ag = n("bf6R"),
            af = n("O666"),
            av = n("OtLV"),
            ay = n("tNq4"),
            ab = n("Skaw"),
            ax = n("PYCG");

        function aC(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g = (0, r.c)(50),
                {
                    conversationId: f,
                    projectId: v,
                    sharedProjectConversation: y,
                    isReady: b,
                    isRestricted: w,
                    isStreaming: _
                } = e,
                j = void 0 === v ? null : v,
                I = (0, m.y)(es.a),
                S = (0, x.a)(),
                T = (0, m.z)(N.e),
                P = (0, m.z)(null == j ? null : ab.a),
                A = (0, m.x)(F.j, f),
                {
                    data: E
                } = (0, m.x)(an.chatGptConversationQueryById$, null == j ? null : A),
                k = (0, m.x)(nR.a, null == j ? null : A),
                M = (0, m.x)(F.A, k);
            g[0] !== k || g[1] !== E || g[2] !== M || g[3] !== j || g[4] !== A ? (t = null == E && null != k && null != A ? {
                id: A,
                gizmo_id: j,
                is_temporary_chat: M
            } : void 0, g[0] = k, g[1] = E, g[2] = M, g[3] = j, g[4] = A, g[5] = t) : t = g[5];
            let R = t,
                {
                    data: O
                } = (0, m.x)(eV.b, j),
                z = null == j ? null : (0, ab.b)(P ?? null, y ?? E ?? R, O),
                G = (0, m.x)(ay.b, f);
            g[6] !== S ? (n = S.formatMessage(av.a.headerShare), g[6] = S, g[7] = n) : n = g[7];
            let B = n,
                L = (0, m.x)(null == y ? ay.a : null, f),
                D = null != y || null != L,
                W = null;
            if (w || z?.type === "unavailable") {
                let e;
                g[8] !== S ? (e = S.formatMessage(av.a.shareDisabledRestricted), g[8] = S, g[9] = e) : e = g[9], W = e
            } else if (_ && !D) {
                let e;
                g[10] !== S ? (e = S.formatMessage(av.a.shareDisabledStreaming), g[10] = S, g[11] = e) : e = g[11], W = e
            } else if (!b || !D) {
                let e;
                g[12] !== S ? (e = S.formatMessage(av.a.shareDisabledNotReady), g[12] = S, g[13] = e) : e = g[13], W = e
            }
            let H = null != W || G;
            g[14] !== H ? (s = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: H
            }, g[14] = H, g[15] = s) : s = g[15];
            let q = (0, m.x)(af.b, s),
                U = "loaded" === T.status && "personal" === T.structure && (null == z || "snapshot" === z.type),
                K = null != W || G;
            g[16] !== K ? (o = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: K
            }, g[16] = K, g[17] = o) : o = g[17];
            let V = (0, m.x)(U ? af.b : null, o);
            g[18] !== f || g[19] !== R || g[20] !== j || g[21] !== I || g[22] !== y ? (i = () => {
                let e = null == y ? I.get(ay.c, f) : {
                    serverConversationId: y.conversation_id,
                    title: y.title,
                    currentNodeId: y.current_node ?? void 0
                };
                null != e && (0, ax.shareChatGptProjectConversation)(I, e.serverConversationId, e.title ?? "", j, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", y ?? R)
            }, g[18] = f, g[19] = R, g[20] = j, g[21] = I, g[22] = y, g[23] = i) : i = g[23];
            let Q = i,
                Y = B;
            if ("loaded" === T.status && (null == z || "snapshot" === z.type)) {
                let e;
                g[24] !== T.structure || g[25] !== S ? (e = S.formatMessage("workspace" === T.structure ? av.a.shareWorkspaceTooltip : av.a.sharePublicTooltip), g[24] = T.structure, g[25] = S, g[26] = e) : e = g[26], Y = e
            }
            let $ = null == W && !G && !0 === V,
                X = W ?? Y,
                J = null != W || G;
            return g[27] !== G || g[28] !== q ? (l = !G && (q ? (0, a.jsx)(ag.M, {}) : (0, a.jsx)(ag.L, {})), g[27] = G, g[28] = q, g[29] = l) : l = g[29], g[30] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)("span", {
                className: "max-sm:hidden",
                children: (0, a.jsx)(C.a, {
                    ...av.a.headerShare
                })
            }), g[30] = c) : c = g[30], g[31] !== Q || g[32] !== G || g[33] !== B || g[34] !== J || g[35] !== l ? (d = (0, a.jsxs)(eX.a, {
                "aria-label": B,
                color: "ghostActive",
                disabled: J,
                loading: G,
                radius: "large",
                size: "toolbar",
                onClick: Q,
                children: [l, c]
            }), g[31] = Q, g[32] = G, g[33] = B, g[34] = J, g[35] = l, g[36] = d) : d = g[36], g[37] !== X || g[38] !== d || g[39] !== $ ? (u = (0, a.jsx)(ap.a, {
                disabled: $,
                content: X,
                children: d
            }), g[37] = X, g[38] = d, g[39] = $, g[40] = u) : u = g[40], g[41] !== f || g[42] !== G || g[43] !== j || g[44] !== W || g[45] !== y ? (h = !1, g[41] = f, g[42] = G, g[43] = j, g[44] = W, g[45] = y, g[46] = h) : h = g[46], g[47] !== u || g[48] !== h ? (p = (0, a.jsxs)(a.Fragment, {
                children: [u, h]
            }), g[47] = u, g[48] = h, g[49] = p) : p = g[49], p
        }(0, e2.a)(async () => () => null);
        var aw = n("B0Wx"),
            a_ = n("if6d"),
            aj = n("Sd8U");
        let aI = (0, m.t)("ChatGptTranscriptScope", {
            parent: aj.a,
            key: e => e.presentation
        });
        var aS = n("r2mP"),
            aT = n("ag0v"),
            aP = n("c7Gp"),
            aA = n("ZhoB"),
            aE = n("RADZ"),
            ak = n("rZzh"),
            aM = n("hZRx");

        function aR(e) {
            let t, n, s, o, i, l, c, d, u = (0, r.c)(51),
                {
                    entry: h,
                    renderMcpApps: p,
                    trackShownImpressions: g
                } = e,
                f = void 0 === p || p,
                v = void 0 === g || g,
                y = (0, m.y)(es.a);
            u[0] !== h.conversationId ? (t = (0, t$.o)({
                routeKind: "chatgpt-thread",
                conversationId: h.conversationId
            }), u[0] = h.conversationId, u[1] = t) : t = u[1];
            let b = (0, m.x)(v ? tz.c : null, t),
                x = v && null == b,
                w = (0, m.x)(h.isMostRecentTurn ? ak.d : null, h.conversationId);
            u[2] !== h.timestampSeparatorAtMs ? (n = null == h.timestampSeparatorAtMs ? null : (0, a.jsx)(aS.b, {
                sentAtMs: h.timestampSeparatorAtMs
            }), u[2] = h.timestampSeparatorAtMs, u[3] = n) : n = u[3];
            let _ = null != h.paragen;
            return u[4] !== h.branchingMessageId || u[5] !== h.browserConversationId || u[6] !== h.conversationId || u[7] !== h.enableCloudBrowserActivity || u[8] !== h.feedbackEnabled || u[9] !== h.hasLaterSitesPreview || u[10] !== h.id || u[11] !== h.isMostRecentTurn || u[12] !== h.isReadOnly || u[13] !== h.isTemporaryChat || u[14] !== h.isWorkConversation || u[15] !== h.onEditUserMessage || u[16] !== h.onFork || u[17] !== h.onRegenerateResponse || u[18] !== h.pendingSubmissionAttachments || u[19] !== h.readAloudEnabled || u[20] !== h.referenceImageSuggestionActionInput || u[21] !== h.safetyReview || u[22] !== h.shareEnabled || u[23] !== h.turn || u[24] !== f || u[25] !== x || u[26] !== _ ? (s = (0, a.jsx)(aP.a, {
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
                trackShownImpressions: x,
                turn: h.turn,
                turnId: h.id
            }), u[4] = h.branchingMessageId, u[5] = h.browserConversationId, u[6] = h.conversationId, u[7] = h.enableCloudBrowserActivity, u[8] = h.feedbackEnabled, u[9] = h.hasLaterSitesPreview, u[10] = h.id, u[11] = h.isMostRecentTurn, u[12] = h.isReadOnly, u[13] = h.isTemporaryChat, u[14] = h.isWorkConversation, u[15] = h.onEditUserMessage, u[16] = h.onFork, u[17] = h.onRegenerateResponse, u[18] = h.pendingSubmissionAttachments, u[19] = h.readAloudEnabled, u[20] = h.referenceImageSuggestionActionInput, u[21] = h.safetyReview, u[22] = h.shareEnabled, u[23] = h.turn, u[24] = f, u[25] = x, u[26] = _, u[27] = s) : s = u[27], u[28] !== h.conversationId || u[29] !== h.isTemporaryChat || u[30] !== h.isWorkConversation || u[31] !== h.paragen || u[32] !== f || u[33] !== x ? (o = null == h.paragen ? null : (0, a.jsx)(aE.a, {
                renderMcpApps: f,
                comparison: h.paragen,
                conversationId: h.conversationId,
                hostId: tX.a,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                trackTaskViews: x
            }, h.paragen.promptMessageId), u[28] = h.conversationId, u[29] = h.isTemporaryChat, u[30] = h.isWorkConversation, u[31] = h.paragen, u[32] = f, u[33] = x, u[34] = o) : o = u[34], u[35] !== h.showSharedConversationPrivateDisclaimer ? (i = h.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(tw.a, {
                    className: "shrink-0",
                    legacyIcon: aT.a,
                    asset16: aM.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(C.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you",
                    description: "Privacy disclaimer shown between the original shared ChatGPT conversation and the reader's new private messages after they continue the shared conversation in Codex Desktop"
                })]
            }) : null, u[35] = h.showSharedConversationPrivateDisclaimer, u[36] = i) : i = u[36], u[37] !== h || u[38] !== w || u[39] !== y || u[40] !== x ? (l = h.isMostRecentTurn ? (0, a.jsx)(ar.a, {
                conversationId: h.conversationId,
                errorMessage: h.errorMessage,
                isWorkConversation: h.isWorkConversation,
                onRetry: null == h.onRegenerateResponse || null == w ? void 0 : async e => {
                    let t = y.get(ak.d, h.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = y.get(F.T, h.conversationId)?.metadata?.errorCode;
                    (0, aA.d)(y.get(ed.c).logProductEvent, {
                        conversationId: y.get(F.j, h.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await h.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, ak.e)(t.message, y.get(e8.t, h.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                showPendingLoadingMessage: h.showPendingLoadingMessage,
                showRequestUserInputStatus: h.showRequestUserInputStatus,
                trackShownImpressions: x,
                useDefaultModel: w?.useDefaultModel,
                isRetryDisabled: w?.isRetryDisabled
            }) : null, u[37] = h, u[38] = w, u[39] = y, u[40] = x, u[41] = l) : l = u[41], u[42] !== s || u[43] !== o || u[44] !== i || u[45] !== l ? (c = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [s, o, i, l]
            }), u[42] = s, u[43] = o, u[44] = i, u[45] = l, u[46] = c) : c = u[46], u[47] !== h.id || u[48] !== c || u[49] !== n ? (d = (0, a.jsxs)("div", {
                "data-content-search-turn-key": h.id,
                children: [n, c]
            }), u[47] = h.id, u[48] = c, u[49] = n, u[50] = d) : d = u[50], d
        }

        function aN(e) {
            let t, n, s, o = (0, r.c)(6);
            o[0] !== e ? ({
                renderMcpApps: n,
                ...t
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]);
            let i = void 0 === n || n,
                l = (0, m.y)(aI),
                c = i && l.value.rendersWidgets;
            return o[3] !== t || o[4] !== c ? (s = (0, a.jsx)(aR, {
                ...t,
                renderMcpApps: c
            }), o[3] = t, o[4] = c, o[5] = s) : s = o[5], s
        }

        function aO(e) {
            let t, n, s, o, i, l, c, d = (0, r.c)(17),
                {
                    entries: u,
                    historyLoader: h,
                    isVisible: p,
                    rendersWidgets: g,
                    onVisibilityChange: f
                } = e;
            d[0] !== p || d[1] !== f ? (t = () => (f(p), () => f(!1)), n = [p, f], d[0] = p, d[1] = f, d[2] = t, d[3] = n) : (t = d[2], n = d[3]), (0, y.useLayoutEffect)(t, n), d[4] !== g ? (s = {
                presentation: "floating",
                rendersWidgets: g
            }, d[4] = g, d[5] = s) : s = d[5];
            let v = p ? h : null;
            return d[6] !== u ? (o = (0, a.jsx)(a_.a, {
                entries: u,
                preserveMeasuredTurnViewport: !0,
                RowComponent: az
            }), d[6] = u, d[7] = o) : o = d[7], d[8] !== v || d[9] !== o ? (i = (0, a.jsx)(ei.a, {
                value: null,
                children: (0, a.jsxs)(eG.a, {
                    value: null,
                    children: [v, o]
                })
            }), d[8] = v, d[9] = o, d[10] = i) : i = d[10], d[11] !== p || d[12] !== i ? (l = (0, a.jsx)(t5.a, {
                active: p,
                presentation: "panel",
                children: i
            }), d[11] = p, d[12] = i, d[13] = l) : l = d[13], d[14] !== s || d[15] !== l ? (c = (0, a.jsx)(m.b, {
                scope: aI,
                value: s,
                children: l
            }), d[14] = s, d[15] = l, d[16] = c) : c = d[16], c
        }

        function az(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(aN, {
                entry: {
                    ...s,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    readAloudEnabled: !1
                },
                trackShownImpressions: !1
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var aG = n("TRQ3"),
            aF = n("SZCv"),
            aB = n.n(aF),
            aL = n("qZWE"),
            aD = n("PC5z"),
            aW = n("lZ4W"),
            aH = n("ihvi"),
            aq = n("aRto"),
            aU = n("WWSI"),
            aK = n("U3Gy"),
            aV = n("mKTJ");
        let aQ = (0, m.c)(t$.a, e => {
                let {
                    get: t
                } = e;
                return t(aL.l)
            }, {
                isEqual: aB()
            }),
            aY = (0, m.c)(t$.a, e => {
                let {
                    get: t
                } = e;
                return t(aD.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function a$(e) {
            let t, n, s, o, i = (0, r.c)(17),
                {
                    conversationId: l,
                    entries: c,
                    onApiChange: d,
                    onVisibleContentReady: u,
                    responseSpacerState: h
                } = e,
                {
                    sharedConversationId: p
                } = (0, w.cb)(),
                g = (0, m.z)(null != p && "u" > typeof Element && "function" != typeof Element.prototype.moveBefore ? aQ : null),
                f = (0, m.z)(aY);
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
                b = (0, y.useContext)(aq.a),
                x = c.at(-1);
            if (b?.aboveComposer != null && null != x && v.push(x.turnKey), null != p && g?.size)
                for (let e of c) e.turn.items.flatMap(aZ).some(e => "chatgpt-hosted-widget" === e.type && (0, aV.h)(e) && g.has((0, aV.e)(p, e.messageId))) && v.push(e.turnKey);
            let C = c.findLast(aX);
            h?.voiceAutoScrollEnabled && null != C && v.push(C.turnKey);
            let _ = (0, m.x)(aH.b, l),
                j = null == _ ? void 0 : c.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes(_)
                }),
                I = null == j ? void 0 : (0, aH.a)(j.turn.items);
            (0, m.x)(aW.a, null == I ? null : {
                conversationId: l,
                userMessageId: I,
                steeredPromptId: j === x ? _ : void 0
            }) && null != j && v.push(j.turnKey);
            let S = (0, m.x)(aK.b, l);
            i[2] !== l || i[3] !== c || i[4] !== S ? (n = (0, aU.a)(c, S, l), i[2] = l, i[3] = c, i[4] = S, i[5] = n) : n = i[5];
            let T = h?.getHeightPx,
                P = h?.voiceAutoScrollEnabled ? C?.turnKey : void 0,
                A = h?.onTurnLayoutReady;
            return i[6] !== h ? (s = e => {
                let {
                    heightDeltaPx: t
                } = e;
                h?.consumeGrowth(t ?? 0)
            }, i[6] = h, i[7] = s) : s = i[7], i[8] !== d || i[9] !== u || i[10] !== v || i[11] !== n || i[12] !== T || i[13] !== P || i[14] !== A || i[15] !== s ? (o = (0, a.jsx)(a_.a, {
                entries: n,
                getBottomScrollPaddingPx: T,
                layoutReadyTurnKey: P,
                onTurnLayoutReady: A,
                onLatestTurnHeightChange: s,
                onApiChange: d,
                onVisibleContentReady: u,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: v,
                RowComponent: aN
            }), i[8] = d, i[9] = u, i[10] = v, i[11] = n, i[12] = T, i[13] = P, i[14] = A, i[15] = s, i[16] = o) : o = i[16], o
        }

        function aX(e) {
            let {
                turn: t
            } = e;
            return t.items.some(aJ)
        }

        function aJ(e) {
            return "user-message" === e.type
        }

        function aZ(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var a0 = n("XAP6"),
            a1 = n("bzoy"),
            a2 = n("LYS1"),
            a3 = n("aZoZ"),
            a4 = n("Gv8v"),
            a5 = n("EGpF"),
            a6 = n("mTPq"),
            a7 = n("Vcrm"),
            a8 = n("QBVt");
        let a9 = (0, m.d)(es.a, (e, t) => {
            let {
                get: n
            } = t, a = n(F._, e);
            if (!(0, F.zb)(a)) return !0;
            let r = n(F.L, e),
                s = n(F.B, e);
            if (null == r || null == s) return !1;
            let o = r[s]?.message;
            if (null == o || a2.a.has(o.author.role)) return !1;
            let i = n(F.x, e),
                l = (0, a6.c)({
                    mapping: r,
                    current_node: s
                }, n(F.Q, e)),
                c = n(F.bb, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(F.j, e) && !(0, a1.e)(n(F.o, e)) && null != c && !n(a0.e).has(c) && null != re(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function re(e, t) {
            let n = e(a5.a, t),
                a = e(F.j, t);
            return null == n.request.current && null != a ? e(a5.a, a) : n
        }
        var rt = n("xtkq"),
            rn = n("PG5R"),
            ra = n("zrki"),
            rr = n("iLYI"),
            rs = n("Ipgw"),
            ro = n("wVX4");

        function ri(e) {
            let t, n, s, o, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, m.y)(es.a),
                d = (0, x.a)(),
                u = (0, t9.a)(),
                h = (0, m.x)(F._, l),
                p = (0, m.x)(F.bb, l),
                g = (0, m.x)(F.v, l),
                f = (0, m.x)(F.ab, l),
                v = (0, y.useRef)(null),
                C = (0, y.useRef)(null);
            i[0] !== g || i[1] !== l || i[2] !== d || i[3] !== p || i[4] !== c || i[5] !== h || i[6] !== f ? (t = () => {
                let e = v.current;
                if (null == e) return;
                let t = C.current;
                if ((0, F.zb)(h)) {
                    e.textContent = "", C.current = {
                        conversationId: l,
                        requestId: p ?? ("active-async-turn" === h || "active-tpp-turn" === h ? g?.requestId : null) ?? (t?.conversationId === l ? t.requestId : null)
                    };
                    return
                }
                f || (C.current = null, t?.conversationId === l && "idle" === h && g?.result === "completed" && g.requestId === t.requestId && null == c.get(F.C, l) && (e.textContent = d.formatMessage({
                    id: "chatgptConversations.responseComplete",
                    defaultMessage: "Response complete",
                    description: "Polite screen-reader announcement after the ChatGPT response the user was waiting for finishes successfully"
                })))
            }, i[0] = g, i[1] = l, i[2] = d, i[3] = p, i[4] = c, i[5] = h, i[6] = f, i[7] = t) : t = i[7];
            let w = (0, y.useEffectEvent)(t);
            return (i[8] !== w ? (n = () => {
                w()
            }, i[8] = w, i[9] = n) : n = i[9], i[10] !== g || i[11] !== l || i[12] !== u || i[13] !== p || i[14] !== h || i[15] !== f ? (s = [l, h, p, g, f, u], i[10] = g, i[11] = l, i[12] = u, i[13] = p, i[14] = h, i[15] = f, i[16] = s) : s = i[16], (0, y.useEffect)(n, s), u) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, b.createPortal)((0, a.jsx)("span", {
                ref: v,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = o) : o = i[17], o) : null
        }
        var rl = n("n5iL"),
            rc = n("EFj1"),
            rd = n("iS3k"),
            ru = n("pDUk"),
            rh = n("GaCK"),
            rm = n("Dofq");
        let rp = (0, e2.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(284470), n.e(954111)]).then(n.bind(n, "YhBP"))).ChatGptThreadSummaryPanelBody, {
            fallback: (0, a.jsx)(rd.a.Content, {
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
            errorFallback: (0, a.jsx)(rd.a.Content, {
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

        function rg(e) {
            let t, n, s, o = (0, r.c)(6);
            o[0] !== e ? ({
                readData: n,
                ...t
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]);
            let i = (0, rd.b)(),
                [l, c] = (0, y.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), o[3] !== l || o[4] !== t ? (s = null == l ? null : (0, a.jsx)(rp, {
                ...t,
                data: l.data
            }), o[3] = l, o[4] = t, o[5] = s) : s = o[5], s
        }

        function rf(e) {
            let t, n, s, o = (0, r.c)(15),
                {
                    conversationId: i,
                    composerActions: l,
                    readData: c,
                    display: d,
                    shouldBlockExternalEgress: u,
                    showSources: h
                } = e,
                p = void 0 === h || h,
                g = (0, m.y)(B.a),
                f = (0, eo.h)("2903661647"),
                v = f ? "dynamic-isle" : "summary";
            return o[0] !== g || o[1] !== v ? (t = {
                scope: g,
                layout: v
            }, o[0] = g, o[1] = v, o[2] = t) : t = o[2], o[3] !== l || o[4] !== i || o[5] !== f || o[6] !== c || o[7] !== u || o[8] !== p ? (n = (0, a.jsx)(rg, {
                conversationId: i,
                composerActions: l,
                readData: c,
                isUnifiedDynamicIsleEnabled: f,
                showSources: p,
                shouldBlockExternalEgress: u
            }, i), o[3] = l, o[4] = i, o[5] = f, o[6] = c, o[7] = u, o[8] = p, o[9] = n) : n = o[9], o[10] !== d.shouldHideInlineImmediately || o[11] !== d.shouldShow || o[12] !== t || o[13] !== n ? (s = (0, a.jsx)(rd.a.Root, {
                analytics: t,
                shouldHideInlineImmediately: d.shouldHideInlineImmediately,
                shouldShow: d.shouldShow,
                children: n
            }), o[10] = d.shouldHideInlineImmediately, o[11] = d.shouldShow, o[12] = t, o[13] = n, o[14] = s) : s = o[14], s
        }

        function rv(e) {
            let t, n, s, o = (0, r.c)(22),
                {
                    conversationId: i,
                    composerActions: l,
                    controlledState: c,
                    readData: d,
                    shouldBlockExternalEgress: u,
                    showSources: h
                } = e,
                p = void 0 === h || h,
                g = (0, m.y)(B.a),
                f = (0, y.useContext)(ei.a),
                v = (0, x.a)(),
                b = (0, eo.h)("2903661647"),
                C = (0, m.z)(null == c ? nf.N : null);
            o[0] !== c?.isOpen || o[1] !== C ? (t = c?.isOpen ?? (0, nf.z)(C, !0), o[0] = c?.isOpen, o[1] = C, o[2] = t) : t = o[2];
            let w = t,
                _ = (0, m.z)(rh.b),
                j = c?.isOpen ?? _.isPopoverOpen,
                I = (0, m.x)(rl.f, "togglePinnedSummary");
            (0, t7.b)(g), o[3] !== c || o[4] !== g ? (n = () => {
                null != c ? c.onOpenChange(!c.isOpen) : (0, rm.b)(g)
            }, o[3] = c, o[4] = g, o[5] = n) : n = o[5];
            let S = n;
            return (0, rc.a)("togglePinnedSummary", S), o[6] !== l || o[7] !== f || o[8] !== c || o[9] !== i || o[10] !== v || o[11] !== w || o[12] !== j || o[13] !== b || o[14] !== _.displayMode || o[15] !== d || o[16] !== g || o[17] !== I || o[18] !== u || o[19] !== p || o[20] !== S ? (s = (0, a.jsx)(A.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                order: 250,
                children: "overlay" === _.displayMode ? (0, a.jsx)(ru.a, {
                    isOpen: j,
                    shouldPreventAutoFocus: c?.shouldPreventAutoFocus,
                    onOpenChange: e => {
                        null != c ? c.onOpenChange(e) : g.set(rh.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                            ...t,
                            isPopoverOpen: e
                        })
                    },
                    trigger: (0, a.jsx)(rd.a.HeaderButton, {
                        analytics: {
                            scope: g
                        },
                        label: v.formatMessage({
                            id: "chatgptConversations.summaryPanel.toggle",
                            defaultMessage: "Toggle summary",
                            description: "Button label for toggling the ChatGPT summary panel"
                        }),
                        pressed: j,
                        shortcut: I
                    }),
                    children: null != d ? (0, a.jsx)(ei.a, {
                        value: f,
                        children: (0, a.jsx)(rd.a.PopoverContent, {
                            analytics: {
                                scope: g,
                                layout: b ? "dynamic-isle" : "summary"
                            },
                            children: (0, a.jsx)(rg, {
                                conversationId: i,
                                composerActions: l,
                                readData: d,
                                isUnifiedDynamicIsleEnabled: b,
                                showSources: p,
                                shouldBlockExternalEgress: u
                            }, i)
                        })
                    }) : null
                }) : (0, a.jsx)(rd.a.HeaderButton, {
                    analytics: {
                        scope: g
                    },
                    label: v.formatMessage({
                        id: "chatgptConversations.summaryPanel.togglePinned",
                        defaultMessage: "Toggle pinned summary",
                        description: "Button label for toggling whether the ChatGPT summary panel reserves layout space"
                    }),
                    pressed: w,
                    shortcut: I,
                    onClick: S
                })
            }), o[6] = l, o[7] = f, o[8] = c, o[9] = i, o[10] = v, o[11] = w, o[12] = j, o[13] = b, o[14] = _.displayMode, o[15] = d, o[16] = g, o[17] = I, o[18] = u, o[19] = p, o[20] = S, o[21] = s) : s = o[21], s
        }
        var ry = n("JjRy"),
            rb = n.n(ry),
            rx = n("G4E3"),
            rC = n("KaH3"),
            rw = n("Yz3b"),
            r_ = n("ghNX"),
            rj = n("KvVi"),
            rI = n("m250"),
            rS = n("Ng4B"),
            rT = n("bTKb"),
            rP = n("dGDB"),
            rA = n("lIsV");

        function rE(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        var rk = n("JlMc"),
            rM = n("TUMj"),
            rR = n("f6KK"),
            rN = n("JPXZ"),
            rO = n("zWHk");

        function rz(e) {
            let t, n, a, s, o, i, l, c = (0, r.c)(34),
                {
                    composerController: d,
                    enabled: u
                } = e,
                h = (0, w.Y)(),
                m = (0, w._)();
            if (c[0] !== h.search) {
                let e = new URLSearchParams(h.search);
                t = e.get("prompt"), n = e.get("promptSource"), c[0] = h.search, c[1] = t, c[2] = n
            } else t = c[1], n = c[2];
            let p = n,
                g = h.key,
                f = (0, y.useRef)(null);
            c[3] !== h.hash || c[4] !== h.pathname || c[5] !== h.search || c[6] !== h.state || c[7] !== g || c[8] !== m ? (a = e => {
                let t = new URLSearchParams(h.search);
                t.delete("prompt"), t.delete("promptSource"), m({
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
            }, c[3] = h.hash, c[4] = h.pathname, c[5] = h.search, c[6] = h.state, c[7] = g, c[8] = m, c[9] = a) : a = c[9];
            let v = (0, y.useEffectEvent)(a);
            return c[10] !== v || c[11] !== d || c[12] !== u || c[13] !== g || c[14] !== t ? (s = () => {
                if (!u && t && f.current !== g) return (0, rO.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(g) && v(!1)
                })
            }, c[10] = v, c[11] = d, c[12] = u, c[13] = g, c[14] = t, c[15] = s) : s = c[15], c[16] !== d || c[17] !== u || c[18] !== g || c[19] !== t ? (o = [d, u, g, t], c[16] = d, c[17] = u, c[18] = g, c[19] = t, c[20] = o) : o = c[20], (0, y.useLayoutEffect)(s, o), c[21] !== v || c[22] !== d || c[23] !== u || c[24] !== g || c[25] !== t || c[26] !== p ? (i = () => {
                if (!u || !t || f.current === g) return;
                f.current = g;
                let e = d.consumeLocationPromptPrefill(g);
                if (v(e), !e) return;
                let {
                    view: n
                } = d, a = t.replace(/\r\n/g, "\n"), r = "codex-app" === p ? (0, rN.f)({
                    schema: n.state.schema,
                    text: a,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, rN.e)({
                    schema: n.state.schema,
                    text: a
                }), s = n.state.tr.replaceWith(0, n.state.doc.content.size, r.content);
                s.setSelection(rR.h.atEnd(s.doc)), n.dispatch(s)
            }, c[21] = v, c[22] = d, c[23] = u, c[24] = g, c[25] = t, c[26] = p, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== g || c[31] !== t || c[32] !== p ? (l = [d, u, g, t, p], c[28] = d, c[29] = u, c[30] = g, c[31] = t, c[32] = p, c[33] = l) : l = c[33], (0, y.useLayoutEffect)(i, l), null
        }
        var rG = n("zKCW");

        function rF(e) {
            let t, n, s, o, i, l = (0, r.c)(11),
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
            let m = !c;
            return l[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(C.a, {
                id: "chatgptConversations.workOnlyConversion.action",
                defaultMessage: "Convert to Work",
                description: "Button that converts a disabled historical Chat conversation to Work in Codex Desktop"
            }), l[3] = s) : s = l[3], l[4] !== u || l[5] !== h || l[6] !== m ? (o = (0, a.jsx)(eX.a, {
                color: "primary",
                disabled: m,
                loading: u,
                onClick: h,
                children: s
            }), l[4] = u, l[5] = h, l[6] = m, l[7] = o) : o = l[7], l[8] !== n || l[9] !== o ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(rG.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: o
                })
            }), l[8] = n, l[9] = o, l[10] = i) : i = l[10], i
        }
        var rB = n("pgeU");
        let rL = (0, e2.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function rD(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, m.y)(es.a),
                c = (0, m.x)(rB.a, i);
            return o[0] !== i || o[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(rB.a, i);
                        null != e && (0, rB.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], o[0] = i, o[1] = l, o[2] = t, o[3] = n) : (t = o[2], n = o[3]), (0, y.useEffect)(t, n), o[4] !== i || o[5] !== c ? (s = null == c ? null : (0, a.jsx)(rL, {
                conversationId: i,
                effect: c
            }, c.id), o[4] = i, o[5] = c, o[6] = s) : s = o[6], s
        }
        var rW = n("fr5e"),
            rH = n("V8xe"),
            rq = n("LEgg");
        let rU = (0, e2.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function rK(e) {
            let t, n, s = (0, r.c)(6),
                {
                    conversationId: o,
                    scheduledAutomationId: i
                } = e,
                l = (0, eo.h)("3901104270");
            return s[0] !== o || s[1] !== l || s[2] !== i ? (t = l && null != i ? (0, a.jsx)(rU, {
                conversationId: o,
                automationId: i
            }) : null, s[0] = o, s[1] = l, s[2] = i, s[3] = t) : t = s[3], s[4] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), s[4] = t, s[5] = n) : n = s[5], n
        }
        var rV = n("Bs4i"),
            rQ = n("Qgfj"),
            rY = n("rmk3"),
            r$ = n("f38C"),
            rX = n("MRlq"),
            rJ = n("sqqv"),
            rZ = n("fQbA"),
            r0 = n("dDDU"),
            r1 = n("soaw"),
            r2 = n("ZrYB"),
            r3 = n("X6Vn"),
            r4 = n("Kwur"),
            r5 = n("eKlv"),
            r6 = n("MYlA"),
            r7 = n("JCtZ"),
            r8 = n("g2p6"),
            r9 = n("oaTv"),
            se = n("PME0"),
            st = n("lgcP"),
            sn = n("AcSY"),
            sa = n("w7E5"),
            sr = n("QmkR"),
            ss = n("xEXG"),
            so = n("J6LI"),
            si = n("lUUH"),
            sl = n("ftAl");

        function sc(e) {
            let t, n, s, o = (0, r.c)(17),
                {
                    children: i,
                    conversationId: l,
                    getBaseItems: c,
                    menuTriggerRef: d,
                    navigate: u,
                    onBeforeOpen: h,
                    renderDropdown: p
                } = e,
                g = (0, m.y)(es.a),
                {
                    data: f
                } = (0, sn.i)(),
                v = (0, ss.b)();
            return o[0] !== f || o[1] !== l || o[2] !== c || o[3] !== d || o[4] !== u || o[5] !== v || o[6] !== g ? (t = () => {
                let e = g.get(sl.a, l, {
                        enabled: !1
                    }),
                    t = (0, te.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : g.query.getData(eV.b, t);
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
                    } = e, c = (0, te.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(sa.a), u = t.get(sr.m), {
                        data: h
                    } = d, m = h?.pages.flatMap(e => e.items).length ?? 0, p = (a?.conversation_origin === "tpp" || a?.conversation_origin === "flora") && ("allowed" === o || h?.pages.some(e => null != e.cursor) === !0), g = t.get(sr.h, n);
                    return null == s || null == a || t.get(sr.g, n) || (0, so.c)(a, r).sourceUnavailable || null == (0, so.b)(t, a, g, !1) || null != c && null == r || null == h || 0 === m && !p ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: sm.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, si.b)({
                        scope: t,
                        conversation: a,
                        project: r,
                        showDestinationFetchState: !1,
                        showMoveToProject: null == c || m > 1 || p,
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
                    let e = g.get(an.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await g.query.getOrFetch(an.chatGptConversationQueryById$, l).catch(sh), null == g.query.getData(an.chatGptConversationQueryById$, l) && await g.query.getOrFetch(sr.j, [l]).catch(su)
                })(), h?.()]);
                let e = g.get(sl.a, l, {
                    enabled: !1
                });
                (0, te.a)(e?.gizmo_id) && e?.gizmo_id != null && await g.query.getOrFetch(eV.b, e.gizmo_id).catch(sd)
            }, o[8] = l, o[9] = h, o[10] = g, o[11] = n) : n = o[11], o[12] !== i || o[13] !== p || o[14] !== t || o[15] !== n ? (s = (0, a.jsx)(rY.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                renderItem: rZ.b,
                renderDropdown: p,
                trigger: "click",
                children: i
            }), o[12] = i, o[13] = p, o[14] = t, o[15] = n, o[16] = s) : s = o[16], s
        }

        function sd() {}

        function su() {}

        function sh() {}
        let sm = (0, rQ.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}",
                description: "Name of a ChatGPT project offered as a destination for moving a conversation or Work task"
            }
        });

        function sp(e) {
            let t, s, o, i, l, c, d, u, h, p, g, f, v, b, C, _, j, I, P = (0, r.c)(72),
                {
                    isTitleMenu: A,
                    triggerButton: E,
                    renderDropdown: k,
                    conversationOrigin: M,
                    conversationId: R,
                    title: O,
                    isHandoffPending: z,
                    isArchived: G,
                    isChatConversation: F,
                    onHandoff: L,
                    onOpenMessage: D,
                    projectId: W,
                    projectName: H,
                    serverConversationId: q
                } = e,
                U = void 0 !== A && A,
                K = (0, m.y)(B.a),
                V = (0, m.y)(es.a),
                Q = (0, r1.a)(),
                Y = (0, eo.k)();
            P[0] !== Y ? (t = Y.checkGate("224248639"), P[0] = Y, P[1] = t) : t = P[1];
            let $ = t;
            P[2] !== Y ? (s = Y.getLayer("3017902351").get("web_file_library_enabled", !1), P[2] = Y, P[3] = s) : s = P[3];
            let X = s,
                J = $ || X;
            P[4] !== J ? (o = {
                enabled: J
            }, P[4] = J, P[5] = o) : o = P[5];
            let {
                data: Z
            } = (0, m.z)(r8.p, o), ee = J && Z?.fileLibraryEnabledForRegistrationCountry !== !1, et = (0, x.a)(), en = (0, w._)(), [er, ei] = (0, y.useState)(null), el = (0, y.useRef)(null), ec = (0, y.useRef)(null);
            P[6] === Symbol.for("react.memo_cache_sentinel") ? (i = [], P[6] = i) : i = P[6];
            let ed = (0, y.useRef)(i);
            P[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                name: "chatgpt"
            }, P[7] = l) : l = P[7];
            let {
                isCapable: eu
            } = (0, m.x)(S.a, l), eh = (0, m.x)(sr.g, q);
            P[8] === Symbol.for("react.memo_cache_sentinel") ? (c = () => ei("shortcut"), P[8] = c) : c = P[8];
            let em = F && !eh;
            P[9] !== K || P[10] !== q ? (d = () => (0, ae.a)(K.query.getData(an.chatGptConversationQueryById$, q), K.get(N.h), K.get(N.g)), P[9] = K, P[10] = q, P[11] = d) : d = P[11], P[12] !== em || P[13] !== d ? (u = {
                enabled: em,
                isActive: d
            }, P[12] = em, P[13] = d, P[14] = u) : u = P[14], (0, rc.a)("deleteChat", c, u), P[15] !== V || P[16] !== eh || P[17] !== en || P[18] !== K || P[19] !== q ? (h = e => {
                !eh && (0, ae.a)(K.query.getData(an.chatGptConversationQueryById$, q), K.get(N.h), K.get(N.g)) && (ei(null), (0, st.a)(V, q, e), en("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, P[15] = V, P[16] = eh, P[17] = en, P[18] = K, P[19] = q, P[20] = h) : h = P[20];
            let ep = h;
            P[21] !== et ? (p = et.formatMessage(sy.chatActions), P[21] = et, P[22] = p) : p = P[22];
            let eg = p;
            P[23] !== K || P[24] !== q ? (g = async () => {
                let e = [];
                ed.current = e, e.push(...await async function(e, t) {
                    let a = await r4.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        }
                    }).catch(() => null);
                    return a?.can_share && 0 !== a.av_sessions.length ? [{
                        id: "share-live-session",
                        icon: ag.cj,
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
                                (0, r3.f)(e, r, {
                                    conversationId: t,
                                    sessions: a.av_sessions
                                })
                            })
                        }
                    }] : []
                }(K, q))
            }, P[23] = K, P[24] = q, P[25] = g) : g = P[25];
            let ef = g;
            P[26] !== R || P[27] !== M || P[28] !== ee || P[29] !== et || P[30] !== eh || P[31] !== G || P[32] !== z || P[33] !== Q || P[34] !== U || P[35] !== en || P[36] !== L || P[37] !== D || P[38] !== W || P[39] !== H || P[40] !== K || P[41] !== q || P[42] !== Y || P[43] !== O ? (f = e => {
                let t = K.get(N.f),
                    a = K.get(N.k),
                    r = K.query.getData(an.chatGptConversationQueryById$, q),
                    s = K.get(N.h),
                    o = K.get(N.g),
                    i = (0, ae.a)(r, s, o),
                    l = (0, r5.b)(K, q),
                    c = !eh && (0, ae.a)(l, s, o),
                    d = K.get(T.b).pathname,
                    u = () => Q() && d === K.get(T.b).pathname && t === K.get(N.f) && a === K.get(N.k),
                    h = (0, r9.a)(K, R, M, () => (0, se.a)(en)),
                    m = [];
                return Y.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && m.push({
                    id: "chatgpt-audio-summary",
                    message: (0, rQ.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary",
                        description: "Opens the dialog for generating and listening to an audio summary of the current chat"
                    }),
                    icon: ag.sg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
                        })().then(e => {
                            u() && e(K, q)
                        }).catch(() => {
                            u() && (el.current?.focus({
                                preventScroll: !0
                            }), K.get(ea.f).danger(et.formatMessage({
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
                }), ee && m.unshift({
                    id: "chatgpt-conversation-files",
                    message: (0, rQ.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat",
                        description: "Opens the side panel listing files referenced in the active saved ChatGPT conversation, even when the list is empty"
                    }),
                    icon: ag.sb,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(963775).then(n.bind(n, "fUWe"))).openConversationFiles
                        })().then(e => {
                            u() && e(K, {
                                conversationId: R,
                                serverConversationId: q,
                                onOpenMessage: D
                            })
                        }).catch(() => {
                            u() && K.get(ea.f).danger(et.formatMessage({
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
                }), m.push(...(0, r0.a)(K)), (0, r7.a)(K, {
                    organizationItems: (0, rZ.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: ed.current,
                    viewItems: m,
                    feedbackItems: [],
                    preferenceItems: null == h ? [] : [h],
                    surface: "header",
                    isTitleMenu: U,
                    conversationId: q,
                    stateConversationId: R,
                    conversationOrigin: M,
                    title: O,
                    isHandoffPending: z,
                    canHandoff: null != L,
                    onHandoff: L,
                    projectId: W,
                    projectName: H,
                    onRename: (0, ae.b)(r, s, o, eh) ? () => void(0, r5.renameActiveChatGptConversation)(K, R) : void 0,
                    isPinned: K.get(sr.h, q) ?? l?.is_starred === !0,
                    onTogglePin: c ? () => {
                        let e = (0, r5.b)(K, q);
                        !(null == e || K.get(sr.g, q)) && (0, ae.a)(e, K.get(N.h), K.get(N.g)) && (0, sr.V)({
                            scope: K,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(sg)
                    } : void 0,
                    onArchive: !i || eh || G ? void 0 : () => (0, r2.a)(K, q),
                    onUnarchive: i && !eh && G ? () => {
                        (0, sr.W)({
                            scope: K,
                            conversationId: q
                        }).then(() => {
                            K.get(ea.f).success(et.formatMessage(rX.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            K.get(ea.f).danger(et.formatMessage(av.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !i || eh ? void 0 : () => ei("menu")
                })
            }, P[26] = R, P[27] = M, P[28] = ee, P[29] = et, P[30] = eh, P[31] = G, P[32] = z, P[33] = Q, P[34] = U, P[35] = en, P[36] = L, P[37] = D, P[38] = W, P[39] = H, P[40] = K, P[41] = q, P[42] = Y, P[43] = O, P[44] = f) : f = P[44];
            let ev = f;
            if (null != E) {
                let e;
                P[45] !== E ? (e = (0, a.jsx)(rV.b, {
                    ref: el,
                    children: E
                }), P[45] = E, P[46] = e) : e = P[46], v = e
            } else if (U) {
                let e;
                P[47] !== O ? (e = (0, a.jsx)(rJ.a, {
                    ref: el,
                    title: O
                }), P[47] = O, P[48] = e) : e = P[48], v = e
            } else {
                let e;
                P[49] !== eg ? (e = (0, a.jsx)(r$.a, {
                    ref: el,
                    className: "no-drag",
                    label: eg,
                    size: "toolbar"
                }), P[49] = eg, P[50] = e) : e = P[50], v = e
            }
            P[51] !== ev || P[52] !== v || P[53] !== en || P[54] !== eu || P[55] !== ef || P[56] !== k || P[57] !== q ? (b = eu ? (0, a.jsx)(sc, {
                conversationId: q,
                getBaseItems: ev,
                menuTriggerRef: el,
                navigate: en,
                onBeforeOpen: ef,
                renderDropdown: k,
                children: v
            }) : (0, a.jsx)(rY.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => ev(),
                onBeforeOpen: ef,
                renderItem: rZ.b,
                renderDropdown: k,
                trigger: "click",
                children: v
            }), P[51] = ev, P[52] = v, P[53] = en, P[54] = eu, P[55] = ef, P[56] = k, P[57] = q, P[58] = b) : b = P[58];
            let ey = "shortcut" === er,
                eb = null != er;
            return P[59] !== er ? (C = () => {
                ec.current = "menu" === er ? el.current : null, ei(null)
            }, P[59] = er, P[60] = C) : C = P[60], P[61] === Symbol.for("react.memo_cache_sentinel") ? (_ = e => {
                let t = ec.current;
                if (ec.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, P[61] = _) : _ = P[61], P[62] !== ep || P[63] !== eh || P[64] !== ey || P[65] !== eb || P[66] !== C || P[67] !== O ? (j = (0, a.jsx)(r6.a, {
                allowArtifactDeletion: !0,
                autoFocusConfirm: ey,
                open: eb,
                onOpenChange: C,
                onCloseAutoFocus: _,
                isDeleting: eh,
                onConfirm: ep,
                title: O
            }), P[62] = ep, P[63] = eh, P[64] = ey, P[65] = eb, P[66] = C, P[67] = O, P[68] = j) : j = P[68], P[69] !== b || P[70] !== j ? (I = (0, a.jsxs)(a.Fragment, {
                children: [b, j]
            }), P[69] = b, P[70] = j, P[71] = I) : I = P[71], I
        }

        function sg() {}

        function sf() {
            let e, t, n = (0, r.c)(4),
                s = (0, x.a)();
            n[0] !== s ? (e = s.formatMessage(sy.more), n[0] = s, n[1] = e) : e = n[1];
            let o = e;
            return n[2] !== o ? (t = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rY.a, {
                    preserveBrowserContextMenu: !0,
                    getItems: sv,
                    renderItem: rZ.b,
                    trigger: "click",
                    children: (0, a.jsx)(r$.a, {
                        className: "no-drag",
                        label: o,
                        size: "toolbar"
                    })
                })
            }), n[2] = o, n[3] = t) : t = n[3], t
        }

        function sv() {
            return (0, rZ.a)([])
        }
        let sy = (0, rQ.f)({
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
        var sb = n("dLcZ"),
            sx = n("W5pg"),
            sC = n("I7bK"),
            sw = n("QcW8"),
            s_ = n("yC2B");

        function sj(e) {
            let t, n, s, o, c, d, u, h, p, g = (0, r.c)(30),
                {
                    header: f,
                    courseShortcut: v,
                    progress: y
                } = e,
                {
                    titleBarLeftInset: b,
                    rightPanelAnimatedWidth: C,
                    isContentFullWidth: w
                } = (0, sC.g)(),
                _ = (0, m.z)(sw.ab),
                j = (0, m.z)(sw.cb),
                I = (0, x.a)();
            g[0] !== I.locale ? (t = (0, s_.a)(I.locale), g[0] = I.locale, g[1] = t) : t = g[1];
            let S = t,
                T = _?.mode === "split" && "left" === j != ("rtl" === S);
            g[2] !== T || g[3] !== w ? (n = e => T && !w ? e : 0, g[2] = T, g[3] = w, g[4] = n) : n = g[4];
            let P = (0, sx.a)(C, n);
            g[5] !== P || g[6] !== b ? (s = [b, P], g[5] = P, g[6] = b, g[7] = s) : s = g[7];
            let E = (0, sx.a)(s, sI);
            g[8] !== E || g[9] !== P ? (o = {
                "--learning-header-left-inset": E,
                insetInlineStart: P
            }, g[8] = E, g[9] = P, g[10] = o) : o = g[10];
            let k = o,
                M = null;
            g[11] !== v ? (c = null == v ? null : (0, a.jsx)("div", {
                className: "flex min-w-0 flex-1",
                children: v
            }), g[11] = v, g[12] = c) : c = g[12], g[13] !== M || g[14] !== c ? (d = (0, a.jsxs)("div", {
                className: "flex w-full min-w-0 items-center gap-toolbar-action",
                children: [M, c]
            }), g[13] = M, g[14] = c, g[15] = d) : d = g[15];
            let R = d;
            if (null == y) return R;
            if (_?.isVisible && "full" === _.mode) {
                let e, t, n;
                return g[16] !== v ? (e = null == v ? null : (0, a.jsx)("div", {
                    className: "flex min-w-0 flex-1",
                    children: v
                }), g[16] = v, g[17] = e) : e = g[17], g[18] !== y ? (t = (0, a.jsx)("div", {
                    className: "min-w-0 flex-1",
                    children: y
                }), g[18] = y, g[19] = t) : t = g[19], g[20] !== t || g[21] !== e ? (n = (0, a.jsx)(A.a.HeaderAction, {
                    actionId: "sectioned-conversation-navigation",
                    align: "center",
                    children: (0, a.jsxs)("div", {
                        className: "flex min-w-0 items-center gap-toolbar-action",
                        children: [e, t]
                    })
                }), g[20] = t, g[21] = e, g[22] = n) : n = g[22], n
            }
            return g[23] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, i.b)("relative flex max-w-[min(var(--learning-progress-max-width),max(0px,calc(100cqw-2*(var(--app-shell-header-end-actions-width)+var(--spacing)*3))))] min-w-0 items-center", "[--learning-progress-max-width:var(--thread-content-max-width)]", "@max-thread-expanded/home-mode-toggle:[--learning-progress-max-width:var(--thread-content-compact-max-width,var(--thread-content-max-width))]"), g[23] = u) : u = g[23], g[24] !== R ? (h = (0, a.jsx)("div", {
                className: "absolute inset-y-0 end-full me-toolbar-action flex w-[max(0px,calc((100cqw-100%)/2-var(--spacing-toolbar-action)-var(--spacing)*2-var(--learning-header-left-inset)))] min-w-0 items-center overflow-hidden",
                "data-app-shell-header-obstacle": !0,
                children: R
            }), g[24] = R, g[25] = h) : h = g[25], g[26] !== y || g[27] !== k || g[28] !== h ? (p = (0, a.jsx)(A.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                children: (0, a.jsxs)(l.a.div, {
                    className: u,
                    style: k,
                    children: [h, y]
                })
            }), g[26] = y, g[27] = k, g[28] = h, g[29] = p) : p = g[29], p
        }

        function sI(e) {
            let [t, n] = e;
            return `${Math.max(0,t-n)}px`
        }
        var sS = n("NVRI"),
            sT = n("WLgA");

        function sP(e) {
            let t, n, s = (0, r.c)(9),
                {
                    icon: o,
                    name: i,
                    projectId: l,
                    linkToProject: c
                } = e;
            s[0] !== o || s[1] !== c || s[2] !== i || s[3] !== l ? (t = c && null != i ? (0, a.jsx)(eX.b, {
                "aria-label": i,
                color: "ghostActive",
                size: "toolbar",
                to: (0, sT.c)(l),
                uniform: !0,
                children: o
            }) : null, s[0] = o, s[1] = c, s[2] = i, s[3] = l, s[4] = t) : t = s[4];
            let d = t,
                u = d ?? o,
                h = null != d;
            return s[5] !== i || s[6] !== u || s[7] !== h ? (n = (0, a.jsx)(sS.b, {
                project: {
                    icon: u,
                    iconInteractive: h,
                    name: i
                }
            }), s[5] = i, s[6] = u, s[7] = h, s[8] = n) : n = s[8], n
        }
        var sA = n("ftSl"),
            sE = n("u9Jt");

        function sk(e) {
            let t, n, s = (0, r.c)(18),
                {
                    conversationId: o,
                    canRename: i,
                    hasTitleMenu: l,
                    project: c,
                    title: d,
                    titleValue: u
                } = e,
                h = (0, m.y)(B.a),
                p = (0, x.a)();
            if (l) {
                let e, t, n;
                return s[0] !== p || s[1] !== c ? (e = c?.name == null ? void 0 : p.formatMessage({
                    id: "localConversation.header.project",
                    defaultMessage: "Project: {projectName}",
                    description: "Accessible label for the project icon in a thread header"
                }, {
                    projectName: c.name
                }), s[0] = p, s[1] = c, s[2] = e) : e = s[2], s[3] !== c ? (t = null == c ? null : (0, a.jsx)(ap.a, {
                    content: c.name,
                    children: (0, a.jsx)("span", {
                        children: c.icon
                    })
                }), s[3] = c, s[4] = t) : t = s[4], s[5] !== e || s[6] !== t || s[7] !== d ? (n = (0, a.jsx)(sE.a, {
                    triggerButton: (0, a.jsx)(rJ.a, {
                        "aria-description": e,
                        title: d,
                        icon: t
                    })
                }), s[5] = e, s[6] = t, s[7] = d, s[8] = n) : n = s[8], n
            }
            return s[9] !== i || s[10] !== o || s[11] !== p || s[12] !== h ? (t = i ? async e => {
                try {
                    await (0, r5.renameActiveChatGptConversation)(h, o, e)
                } catch (e) {
                    throw h.get(ea.f).danger(p.formatMessage({
                        id: "chatgptConversations.header.renameFailed",
                        defaultMessage: "Couldn't rename this chat. Try again.",
                        description: "Error shown when saving an edited chat title fails"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.header.renameFailed"
                        }
                    }), e
                }
            }: void 0, s[9] = i, s[10] = o, s[11] = p, s[12] = h, s[13] = t) : t = s[13], s[14] !== t || s[15] !== d || s[16] !== u ? (n = (0, a.jsx)(sA.a, {
                className: "max-w-full",
                variant: "flush-start",
                title: d,
                titleValue: u,
                onRename: t
            }), s[14] = t, s[15] = d, s[16] = u, s[17] = n) : n = s[17], n
        }
        let sM = (0, m.c)(B.a, e => {
            let {
                get: t
            } = e, n = t(sw.ab);
            return !(n?.isVisible && "full" === n.mode)
        });
        var sR = n("X0li");
        let sN = (0, e2.a)(sR.d),
            sO = (0, e2.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            sz = (0, e2.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var sG = n("lX86"),
            sF = n("gCr7");
        n("i1of");
        var sB = n("a4V1"),
            sL = n("alJ6"),
            sD = n("u9iS"),
            sW = n("KidQ");
        let sH = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function sq(e) {
            let t, n, s, o, i, l = (0, r.c)(15),
                {
                    children: c,
                    draftKey: d,
                    enableInlineSystemHints: u
                } = e,
                h = (0, m.y)(es.a),
                p = (0, y.useContext)(td.a),
                g = u ? "chatgpt" : void 0;
            return l[0] !== u || l[1] !== g ? (t = {
                enableInlineSystemHints: u,
                variant: g
            }, l[0] = u, l[1] = g, l[2] = t) : t = l[2], l[3] !== d || l[4] !== h ? (n = () => ({
                defaultText: h.get(e8.s, d),
                defaultTextKind: "prompt"
            }), l[3] = d, l[4] = h, l[5] = n) : n = l[5], l[6] !== p ? (s = () => {
                let e = p?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == p ? null : {
                    element: e,
                    locationKey: p.locationKey
                }
            }, l[6] = p, l[7] = s) : s = l[7], l[8] !== c ? (o = e => null == e ? null : c(e), l[8] = c, l[9] = o) : o = l[9], l[10] !== t || l[11] !== n || l[12] !== s || l[13] !== o ? (i = (0, a.jsx)(sW.a, {
                controllerOptions: sH,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: s,
                children: o
            }), l[10] = t, l[11] = n, l[12] = s, l[13] = o, l[14] = i) : i = l[14], i
        }
        var sU = n("ygKd"),
            sK = n("KSir"),
            sV = n("fNPc"),
            sQ = n("vVgo");
        let sY = (0, e2.a)(async () => (await n.e(777791).then(n.bind(n, "DGJb"))).CourseHeaderShortcut);

        function s$(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, eo.h)("4035922817");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(sY, {
                    conversationId: s
                })
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        var sX = n("T33u"),
            sJ = n("QPeR"),
            sZ = n("MgyE"),
            s0 = n("gyrn"),
            s1 = n("wnpN"),
            s2 = n("rcFj"),
            s3 = n("M3Kf");

        function s4(e) {
            let t, n, s, i, l, c, d = (0, r.c)(21),
                {
                    conversationId: u
                } = e,
                h = (0, m.y)(es.a),
                p = (0, m.x)(F.j, u),
                g = (0, m.z)(ez.b),
                {
                    search: f
                } = (0, w.Y)();
            if (d[0] !== f) {
                let e = new URLSearchParams(f);
                t = e.get("messageId") ?? e.get("message"), n = e.has("selectedTextQuery"), d[0] = f, d[1] = t, d[2] = n
            } else t = d[1], n = d[2];
            let v = n;
            d[3] !== v || d[4] !== t || d[5] !== p ? (s = ["chatgpt-message-target", p, t, v], d[3] = v, d[4] = t, d[5] = p, d[6] = s) : s = d[6];
            let y = null != p && null != t && g > 0,
                b = v ? 0 : 1 / 0;
            d[7] !== u || d[8] !== v || d[9] !== t || d[10] !== h || d[11] !== p ? (i = async e => {
                let {
                    signal: n
                } = e;
                if (null != p) {
                    if (null != t && v) {
                        let e = h.get(F.L, u),
                            n = e?.[t] ?? (null == e ? void 0 : Object.values(e).find(e => e.message?.id === t));
                        if (n?.message != null) return !0
                    }
                    await (0, eO.a)(h, p, n)
                }
                return !0
            }, d[7] = u, d[8] = v, d[9] = t, d[10] = h, d[11] = p, d[12] = i) : i = d[12], d[13] !== s || d[14] !== y || d[15] !== b || d[16] !== i ? (l = {
                queryKey: s,
                enabled: y,
                staleTime: b,
                retry: !1,
                queryFn: i
            }, d[13] = s, d[14] = y, d[15] = b, d[16] = i, d[17] = l) : l = d[17];
            let {
                isError: x,
                refetch: _
            } = (0, o.a)(l);
            return d[18] !== x || d[19] !== _ ? (c = x ? (0, a.jsx)(eX.a, {
                color: "secondary",
                onClick: () => void _(),
                children: (0, a.jsx)(C.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message",
                    description: "Button to retry loading the full conversation for a link to an older message"
                })
            }) : null, d[18] = x, d[19] = _, d[20] = c) : c = d[20], c
        }
        var s5 = n("ckwE");

        function s6(e) {
            let t, n = (0, r.c)(3),
                {
                    children: s
                } = e,
                [o] = (0, y.useState)(s7);
            return n[0] !== o || n[1] !== s ? (t = (0, a.jsx)(eG.a, {
                value: o,
                children: s
            }), n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }

        function s7() {
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

        function s8(e) {
            let t, n = (0, r.c)(2),
                {
                    children: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(s5.a, {
                children: (0, a.jsx)(s6, {
                    children: s
                })
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var s9 = n("TmaW"),
            oe = n("MDmT"),
            ot = n("b6fw"),
            on = n("K45w"),
            oa = n("jCHb"),
            or = n("V8uZ");

        function os(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var oo = n("NqfB"),
            oi = n("JEFL"),
            ol = n("moBM");
        let oc = '[data-markdown-text-style="assistant-message"]',
            od = (0, m.d)(es.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(F.L, n)?.[a]?.message ?? null
            });

        function ou(e) {
            let t, n, s = (0, r.c)(5),
                o = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return s[0] !== e ? (t = t => (0, a.jsx)(oh, {
                ...e,
                selection: t
            }), s[0] = e, s[1] = t) : t = s[1], s[2] !== o || s[3] !== t ? (n = (0, a.jsx)(oo.a, {
                align: "start",
                targetSelector: o,
                children: t
            }), s[2] = o, s[3] = t, s[4] = n) : n = s[4], n
        }

        function oh(e) {
            let t, s, o, i, l, c, d, u = (0, r.c)(30),
                {
                    conversationId: h,
                    moreDetailsEnabled: p,
                    onAddSelectedText: g,
                    selection: f
                } = e,
                v = (0, m.y)(B.a),
                y = (0, x.a)(),
                b = (0, eo.h)("4290238484"),
                C = (0, eo.h)("473637331"),
                w = (0, m.z)(ol.a),
                _ = (0, m.x)(F.x, h);
            u[0] !== _ || u[1] !== w || u[2] !== v ? (t = w && "tpp" === _ && "chatgpt-thread" === v.value.routeKind && null == v.value.workSideChat && !0, u[0] = _, u[1] = w, u[2] = v, u[3] = t) : t = u[3];
            let j = t;
            u[4] !== h || u[5] !== f.selectionRange ? (s = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, s = a?.closest(oc);
                if (n.collapsed || null == s || !s.isConnected || s !== r?.closest(oc)) return null;
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
            let I = s,
                S = I?.messageId ?? null;
            u[7] !== h || u[8] !== S ? (o = {
                conversationId: h,
                messageId: S
            }, u[7] = h, u[8] = S, u[9] = o) : o = u[9];
            let T = (0, m.x)(od, o),
                P = (0, m.x)(F.j, h),
                A = b && p && null != P && null != I && T?.author.role === "assistant";
            return u[10] !== j || u[11] !== v ? (i = j ? e => {
                n.e(971224).then(n.bind(n, "f8of")).then(t => {
                    let {
                        createAndOpenWorkSideChat: n
                    } = t;
                    return n(v, {
                        target: "right",
                        selectedText: e
                    })
                })
            } : void 0, u[10] = j, u[11] = v, u[12] = i) : i = u[12], u[13] !== A || u[14] !== C || u[15] !== g || u[16] !== f.selectionRange || u[17] !== I ? (l = !A || C ? e => {
                g(e, I?.messageId, null == I ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of n4(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(I.markdownElement, f.selectionRange, e))
            } : void 0, u[13] = A, u[14] = C, u[15] = g, u[16] = f.selectionRange, u[17] = I, u[18] = l) : l = u[18], u[19] !== A || u[20] !== h || u[21] !== y || u[22] !== v || u[23] !== I ? (c = A ? e => {
                Promise.all([n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(882456), n.e(145049), n.e(580441), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(509282), n.e(523433), n.e(284782), n.e(282285)]).then(n.bind(n, "zRlR")).then(t => {
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
                        messageId: I.messageId,
                        query: y.formatMessage({
                            id: "chatgpt.selection.moreDetailsTitle",
                            defaultMessage: "More details",
                            description: "Title of the side panel explaining selected text from an assistant response"
                        }),
                        shouldBlockExternalEgress: v.get(ej.d, h),
                        sourceConversationId: h
                    })
                })
            } : void 0, u[19] = A, u[20] = h, u[21] = y, u[22] = v, u[23] = I, u[24] = c) : c = u[24], u[25] !== f.selectedText || u[26] !== i || u[27] !== l || u[28] !== c ? (d = (0, a.jsx)(oi.a, {
                conversationTerminology: "chat",
                selectedText: f.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), u[25] = f.selectedText, u[26] = i, u[27] = l, u[28] = c, u[29] = d) : d = u[29], d
        }
        var om = n("Fjze");

        function op(e) {
            let t, n, a, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = e,
                i = (0, m.y)(es.a),
                l = null != o;
            s[0] !== i || s[1] !== o ? (t = () => {
                null != o && (r4.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: o
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(og), (0, ed.a)(i, om.a, {
                    sharedConversationId: o
                }))
            }, s[0] = i, s[1] = o, s[2] = t) : t = s[2];
            let c = (0, y.useEffectEvent)(t);
            return s[3] !== c ? (n = () => {
                c()
            }, s[3] = c, s[4] = n) : n = s[4], s[5] !== l ? (a = [l], s[5] = l, s[6] = a) : a = s[6], (0, y.useEffect)(n, a), null
        }

        function og() {}
        var of = n("GigQ"), ov = n("JKdL"), oy = n("d107"), ob = n("HOLv"), ox = n("FGv0"), oC = n("r9i9"), ow = n("tdfh"), o_ = n("SEBt"), oj = n("uQqo"), oI = n("yi1v"), oS = n("hMfc");

        function oT(e) {
            let t, s, o, i, l, c = (0, r.c)(12),
                {
                    data: d
                } = e,
                u = (0, m.y)(es.a),
                h = (0, x.a)();
            c[0] !== h ? (t = h.formatMessage(av.a.headerShare), c[0] = h, c[1] = t) : t = c[1];
            let p = t,
                [g, f] = (0, y.useState)(!1);
            return c[2] !== d || c[3] !== g || c[4] !== u ? (s = () => {
                g || (f(!0), (async function(e, t) {
                    let a = t.sharedPost,
                        [r, ...s] = a?.attachments[0]?.kind === "media_generation" ? (0, oj.a)(a, (0, oj.b)(a)) : [],
                        o = crypto.randomUUID();
                    (0, o_.b)(e, {
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
                        if ("conversation" === i.contentType) return void(0, r3.f)(e, ow.a, {
                            ...t.dialogProps,
                            shareSessionId: o
                        })
                    }
                    if (i?.contentType === "conversation") {
                        let a = (0, o_.a)(e, {
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
                        } else(0, r3.f)(e, ow.a, {
                            ...t.dialogProps,
                            previewTurns: (0, oC.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId, 1 / 0),
                            recoveryShareLink: i,
                            shareSessionId: o
                        });
                        return
                    }(0, r3.f)(e, ow.a, {
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
                })(u, d).finally(() => f(!1)))
            }, c[2] = d, c[3] = g, c[4] = u, c[5] = s) : s = c[5], c[6] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(ob.a, {
                asset: oS.a
            }), i = (0, a.jsx)(C.a, {
                ...av.a.headerShare
            }), c[6] = o, c[7] = i) : (o = c[6], i = c[7]), c[8] !== g || c[9] !== p || c[10] !== s ? (l = (0, a.jsxs)(eX.a, {
                "aria-label": p,
                color: "ghostActive",
                loading: g,
                size: "toolbar",
                onClick: s,
                children: [o, i]
            }), c[8] = g, c[9] = p, c[10] = s, c[11] = l) : l = c[11], l
        }
        var oP = n("JUxu");
        let oA = (0, y.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function oE(e) {
            let t, n, s, o, i = (0, r.c)(11),
                {
                    sharedConversationId: l
                } = e,
                c = (0, m.y)(es.a),
                d = (0, m.x)(eI.f, (0, y.useContext)(R.a));
            if (null != d) {
                let e, t;
                return i[0] !== d ? (e = (0, eI.b)(d), i[0] = d, i[1] = e) : e = i[1], i[2] !== e ? (t = (0, a.jsx)(oP.a, {
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
                (0, r3.f)(c, oA, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, o_.c)(c, l)
            }, i[5] = c, i[6] = l, i[7] = n) : n = i[7], i[8] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(C.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation",
                description: "Button above a shared ChatGPT conversation in Codex Desktop that opens ChatGPT's report modal for reporting another person's shared conversation"
            }), i[8] = s) : s = i[8], i[9] !== n ? (o = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(eX.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: s
                })]
            }), i[9] = n, i[10] = o) : o = i[10], o
        }
        var ok = n("zbjM"),
            oM = n("MVHH"),
            oR = n("xSOA"),
            oN = n("rhKI"),
            oO = n("PP3M"),
            oz = n("jAnS"),
            oG = n("CFOe"),
            oF = n("JNtf"),
            oB = n("mUDD");

        function oL(e) {
            let t, n, s, o, i, l, c, d, u, h, m, p, g, f = (0, r.c)(31),
                {
                    canSave: v,
                    isPending: y,
                    onCancel: b,
                    onClose: x,
                    onSave: w
                } = e;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(C.a, {
                id: "chatgptConversations.temporaryChat.save.close",
                defaultMessage: "Close",
                description: "Accessible label for the close button in the temporary chat save confirmation dialog."
            }), f[0] = t) : t = f[0], f[1] !== y || f[2] !== x ? (n = e => {
                e || y || x()
            }, f[1] = y, f[2] = x, f[3] = n) : n = f[3];
            let _ = !y;
            f[4] !== v || f[5] !== w ? (s = e => {
                e.preventDefault(), v && w()
            }, f[4] = v, f[5] = w, f[6] = s) : s = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(oF.d, {
                children: (0, a.jsx)(C.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?",
                    description: "Title of the confirmation dialog for converting a temporary ChatGPT conversation into a regular saved chat."
                })
            }), f[7] = o) : o = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(oB.e, {
                children: (0, a.jsx)(oB.d, {
                    className: "select-none",
                    title: o,
                    subtitle: (0, a.jsx)(oF.c, {
                        children: (0, a.jsx)(C.a, {
                            id: "chatgptConversations.temporaryChat.save.description.regularChatSettings",
                            defaultMessage: "This chat will now be included in your history. It will follow your memory and model training settings used for regular chats.",
                            description: "Body of the confirmation dialog shown when a user saves a temporary ChatGPT conversation. Explains before they confirm that the chat will appear in history and follow the memory and model training settings already configured for regular chats."
                        })
                    })
                })
            }), f[8] = i) : i = f[8], f[9] !== b || f[10] !== x ? (l = () => {
                b?.(), x()
            }, f[9] = b, f[10] = x, f[11] = l) : l = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(C.a, {
                id: "chatgptConversations.temporaryChat.save.cancel",
                defaultMessage: "Cancel",
                description: "Secondary button that closes the save confirmation dialog and leaves the ChatGPT conversation temporary."
            }), f[12] = c) : c = f[12], f[13] !== y || f[14] !== l ? (d = (0, a.jsx)(eX.a, {
                color: "secondary",
                disabled: y,
                onClick: l,
                children: c
            }), f[13] = y, f[14] = l, f[15] = d) : d = f[15];
            let j = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(C.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save",
                description: "Primary button that saves a temporary ChatGPT conversation to regular chat history."
            }), f[16] = u) : u = f[16], f[17] !== y || f[18] !== j ? (h = (0, a.jsx)(eX.a, {
                color: "primary",
                disabled: j,
                loading: y,
                type: "submit",
                children: u
            }), f[17] = y, f[18] = j, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (m = (0, a.jsx)(oB.e, {
                children: (0, a.jsxs)(oB.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = m) : m = f[22], f[23] !== m || f[24] !== s ? (p = (0, a.jsxs)(oB.b, {
                as: "form",
                onSubmit: s,
                children: [i, m]
            }), f[23] = m, f[24] = s, f[25] = p) : p = f[25], f[26] !== y || f[27] !== p || f[28] !== n || f[29] !== _ ? (g = (0, a.jsx)(oF.a, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: _,
                size: "narrow",
                children: p
            }), f[26] = y, f[27] = p, f[28] = n, f[29] = _, f[30] = g) : g = f[30], g
        }

        function oD(e) {
            (0, an.e)(e).catch(() => {
                nP.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function oW(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(oH, {
                        conversationId: s
                    })
                })]
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function oH(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return (0, m.z)(oO.e) ? (n[0] !== s ? (t = (0, a.jsx)(oq, {
                conversationId: s
            }), n[0] = s, n[1] = t) : t = n[1], t) : null
        }

        function oq(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g, f, v = (0, r.c)(49),
                {
                    conversationId: b
                } = e,
                _ = (0, m.y)(es.a),
                j = (0, x.a)(),
                I = (0, w._)(),
                [S, T] = (0, y.useState)(!1),
                [P, A] = (0, y.useState)(!1),
                [E, k] = (0, y.useState)(!1),
                [M, R] = (0, y.useState)(!1),
                N = (0, y.useRef)(!1),
                O = (0, m.z)(r8.p).data,
                z = (0, m.x)(F.j, b),
                G = (0, m.x)(F.W, b),
                B = (0, m.x)(F.H, b),
                L = (0, m.x)(e8.i, b);
            v[0] !== b || v[1] !== _ ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (_.get(F.H, b) || _.get(e8.i, b) || t !== _.get(F.j, b) || n !== _.get(F.W, b)) throw Error("Cannot save an unavailable temporary chat message");
                    return r4.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: oY
                    }).then(oQ)
                },
                retry: oV
            }, v[0] = b, v[1] = _, v[2] = t) : t = v[2];
            let {
                mutateAsync: D,
                isPending: W
            } = (0, oR.a)(t), H = null != z && null != G && !B && !L && !W && !P;
            v[3] !== j ? (n = j.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat",
                description: "Tooltip and accessible label for the bookmark button in a temporary ChatGPT conversation. Opens a confirmation dialog to save it to regular history."
            }), v[3] = j, v[4] = n) : n = v[4];
            let q = n;
            v[5] !== O?.eligibleAnnouncements ? (s = O?.eligibleAnnouncements?.includes(r8.h), v[5] = O?.eligibleAnnouncements, v[6] = s) : s = v[6];
            let U = !0 === s,
                K = !M && (E || U && H);
            v[7] !== b || v[8] !== E || v[9] !== _ || v[10] !== K ? (o = () => {
                if (!K || E || N.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || N.current || (N.current = !0, (0, ed.a)(_, oM.Ab, {
                        personalizationMode: (0, oN.a)((0, oO.k)(_, b))
                    }), k(!0), oD(_))
                }), () => {
                    e = !0
                }
            }, i = [b, E, _, K], v[7] = b, v[8] = E, v[9] = _, v[10] = K, v[11] = o, v[12] = i) : (o = v[11], i = v[12]), (0, y.useEffect)(o, i), v[13] !== _ ? (l = () => {
                R(!0), N.current || (N.current = !0, oD(_))
            }, v[13] = _, v[14] = l) : l = v[14];
            let V = l;
            v[15] !== H || v[16] !== b || v[17] !== j || v[18] !== I || v[19] !== D || v[20] !== _ || v[21] !== G || v[22] !== z ? (c = async function() {
                let e;
                if (!H || null == z || null == G) return;
                let t = (0, oN.a)((0, oO.k)(_, b));
                (0, ed.a)(_, oM.Bb, {
                    personalizationMode: t
                });
                try {
                    e = (await D({
                        sourceConversationId: z,
                        selectedLeafId: G
                    })).conversation_id
                } catch (e) {
                    (0, ed.a)(_, oM.Cb, {
                        personalizationMode: t,
                        failureCategory: (0, oN.b)(e)
                    }), _.get(ea.f).danger(j.formatMessage({
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
                A(!0), T(!1), (0, sr.H)(_), (0, sr.K)(_, z, "remove"), (0, sr.K)(_, e, "refresh"), I((0, oz.c)(e), {
                    replace: !0
                }), _.get(ea.f).success(j.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history.",
                    description: "Success toast confirming that a formerly temporary ChatGPT conversation is now saved in regular history."
                })), r4.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: G
                    }
                }).then(oK).then(t => {
                    (0, F.$b)({
                        scope: _,
                        conversationId: e,
                        title: t
                    }), _.query.setData(an.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, sr.H)(_), (0, sr.K)(_, e, "refresh")
                }).catch(oU)
            }, v[15] = H, v[16] = b, v[17] = j, v[18] = I, v[19] = D, v[20] = _, v[21] = G, v[22] = z, v[23] = c) : c = v[23];
            let Q = c,
                Y = !H;
            v[24] !== b || v[25] !== _ || v[26] !== K ? (d = () => {
                (0, ed.a)(_, oM.Eb, {
                    personalizationMode: (0, oN.a)((0, oO.k)(_, b)),
                    coachMarkVisible: K
                }), T(!0)
            }, v[24] = b, v[25] = _, v[26] = K, v[27] = d) : d = v[27], v[28] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(tw.b, {
                icon: {
                    16: ag.qb,
                    20: ag.rb
                }
            }), v[28] = u) : u = v[28], v[29] !== q || v[30] !== Y || v[31] !== d ? (h = (0, a.jsx)(eX.a, {
                "aria-label": q,
                color: "toolbar",
                disabled: Y,
                size: "toolbar",
                uniform: !0,
                onClick: d,
                children: u
            }), v[29] = q, v[30] = Y, v[31] = d, v[32] = h) : h = v[32];
            let $ = h;
            return v[33] !== V || v[34] !== j || v[35] !== q || v[36] !== $ || v[37] !== K ? (p = K ? (0, a.jsx)(oG.a, {
                align: "end",
                description: (0, a.jsx)(C.a, {
                    id: "chatgptConversations.temporaryChat.save.coachmark.description",
                    defaultMessage: "Want to keep this chat? You can now save it to your history.",
                    description: "Body of a one-time onboarding coachmark anchored to the Save chat button after a user creates an eligible temporary chat."
                }),
                dismissLabel: j.formatMessage({
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
            }), v[33] = V, v[34] = j, v[35] = q, v[36] = $, v[37] = K, v[38] = p) : p = v[38], v[39] !== H || v[40] !== b || v[41] !== Q || v[42] !== S || v[43] !== W || v[44] !== _ ? (g = S ? (0, a.jsx)(oL, {
                canSave: H,
                isPending: W,
                onCancel: () => {
                    (0, ed.a)(_, oM.zb, {
                        personalizationMode: (0, oN.a)((0, oO.k)(_, b))
                    })
                },
                onClose: () => T(!1),
                onSave: () => void Q()
            }) : null, v[39] = H, v[40] = b, v[41] = Q, v[42] = S, v[43] = W, v[44] = _, v[45] = g) : g = v[45], v[46] !== p || v[47] !== g ? (f = (0, a.jsxs)(a.Fragment, {
                children: [p, g]
            }), v[46] = p, v[47] = g, v[48] = f) : f = v[48], f
        }

        function oU() {}

        function oK(e) {
            return nq.object({
                title: nq.string()
            }).parse(e).title
        }

        function oV(e, t) {
            return e < 1 && t instanceof no.a && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function oQ(e) {
            return nq.object({
                conversation_id: nq.string().min(1)
            }).parse(e)
        }

        function oY(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var o$ = n("AORd"),
            oX = n("J8FU"),
            oJ = n("vpdG"),
            oZ = n("Aluh"),
            o0 = n("mG6J");

        function o1(e) {
            let t, n, s = (0, r.c)(14),
                {
                    conversationId: o,
                    shouldBlockExternalEgress: i,
                    widgets: l
                } = e,
                c = (0, m.z)(oZ.b);
            if (i) return null;
            if (s[0] !== c || s[1] !== o || s[2] !== l) {
                let e, n, r;
                s[4] !== c || s[5] !== o ? (e = e => c.has((0, aV.e)(o, e.messageId)), s[4] = c, s[5] = o, s[6] = e) : e = s[6];
                let i = l.filter(e),
                    d = `chatgpt:${o}`;
                s[7] !== d ? (n = (0, p.Qe)(d), s[7] = d, s[8] = n) : n = s[8];
                let u = n;
                s[9] !== u || s[10] !== o ? (r = e => (0, a.jsx)(o0.b, {
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
        var o2 = n("JVSG"),
            o3 = {
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
            o4 = n("ebpE");

        function o5() {
            let e, t, n, s, o, i, l, c, d, u, h, p, g, f, v, b = (0, r.c)(40),
                x = (0, w._)(),
                C = (0, y.useContext)(tO.a);
            b[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, b[0] = e) : e = b[0];
            let _ = (0, m.x)(S.a, e),
                I = (0, m.z)(z.a),
                T = (0, w.bb)() ?? 0,
                {
                    conversationId: P
                } = (0, w.cb)(),
                {
                    search: A,
                    state: E
                } = (0, w.Y)(),
                k = (0, m.x)(nR.a, P ?? null),
                M = (0, m.x)(null == P || ej.d, k ?? P ?? ""),
                R = E?.archivedConversationPreview === !0;
            b[1] !== A ? (t = (0, oz.i)(A), b[1] = A, b[2] = t) : t = b[2];
            let N = t;
            b[3] !== R || b[4] !== N || b[5] !== P ? (n = null == P || (0, eN.e)(P) || N || R ? null : P, b[3] = R, b[4] = N, b[5] = P, b[6] = n) : n = b[6];
            let {
                data: O
            } = (0, m.x)(an.chatGptConversationQueryById$, n);
            if (null == P) {
                let e;
                return b[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(w.l, {
                    to: "/",
                    replace: !0
                }), b[7] = e) : e = b[7], e
            }
            b[8] !== k || b[9] !== P ? (s = k ?? (0, eN.d)(P), b[8] = k, b[9] = P, b[10] = s) : s = b[10];
            let G = s,
                F = _.isCapable && !I && !M && null != O;
            b[11] !== x ? (o = e => (x((0, oz.c)(e)), !0), b[11] = x, b[12] = o) : o = b[12];
            let B = o;
            b[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(j.a, {}), l = (0, a.jsx)(tf.a.Surface, {}), b[13] = i, b[14] = l) : (i = b[13], l = b[14]), b[15] !== R ? (c = null, b[15] = R, b[16] = c) : c = b[16], b[17] !== G || b[18] !== R || b[19] !== N ? (d = N || R ? null : (0, a.jsx)(nW.a, {
                conversationId: G
            }), b[17] = G, b[18] = R, b[19] = N, b[20] = d) : d = b[20];
            let L = C ?? (F ? B : null),
                D = `${G}:${N}`;
            b[21] === Symbol.for("react.memo_cache_sentinel") ? (u = void 0, b[21] = u) : u = b[21], b[22] !== G || b[23] !== R || b[24] !== N || b[25] !== D || b[26] !== T ? (h = (0, a.jsx)(o6, {
                conversationId: G,
                viewActivation: T,
                isArchivedPreview: R,
                isReadOnlyPreview: !1,
                banner: u,
                isTemporaryChat: N,
                sharedConversationId: null
            }, D), b[22] = G, b[23] = R, b[24] = N, b[25] = D, b[26] = T, b[27] = h) : h = b[27], b[28] !== h || b[29] !== L ? (p = (0, a.jsx)(tO.a, {
                value: L,
                children: h
            }), b[28] = h, b[29] = L, b[30] = p) : p = b[30], b[31] !== p || b[32] !== c || b[33] !== d ? (g = (0, a.jsxs)(a.Fragment, {
                children: [i, l, c, d, p]
            }), b[31] = p, b[32] = c, b[33] = d, b[34] = g) : g = b[34];
            let W = g;
            return b[35] !== W ? (f = W, b[35] = W, b[36] = f) : f = b[36], b[37] !== G || b[38] !== f ? (v = (0, a.jsx)(aG.a, {
                conversationId: G,
                children: f
            }), b[37] = G, b[38] = f, b[39] = v) : v = b[39], v
        }

        function o6(e) {
            let t, n, i, l, c, d, u, b, C, j, S, k, M, G, L, D, W, H, q, U, K, V, Q, $, et, en, er, es, ei, el, ec, eu, eh, em, ep, eg, ef, ev, ey, eb, ex, ew, e_, eS, eT, eP, eA, eE, ek, eM, eR, eO, ez, eG, eF, eB, eL, eD, eW, eH, eq, eU, eX, eJ, eZ, e0, e1, e2, e3, e4, e5, e7, e9, tn, ta, tr, ts, to, ti, tl, td, tp, tg, tf, tv, ty, tb, tx, tC, tS, tE, tk, tM, tR, tN, tO, tV, tY, t0, t4, t5, t6, ne, nB, nD = (0, r.c)(767),
                {
                    conversationId: nW,
                    viewActivation: nq,
                    isArchivedPreview: nU,
                    isInlinePreview: nK,
                    hideModelPicker: nV,
                    showFilePicker: nQ,
                    disableAutoFocus: nY,
                    hideInitialUserMessage: n$,
                    transcriptPresentation: nX,
                    scrollOrigin: nJ,
                    isReadOnlyPreview: nZ,
                    onSubmitAccepted: n0,
                    isTemporaryChat: n1,
                    sharedConversationId: n2,
                    sharedPostContinuation: n3,
                    requiredSystemHints: n4,
                    routePattern: n5,
                    composerLeadingContent: n6,
                    headerLeadingContent: n7,
                    banner: ar,
                    onRetryMissingConversation: ao,
                    sharedProjectConversation: ai,
                    workspace: al
                } = e,
                ac = void 0 === nq ? 0 : nq,
                ad = void 0 !== nU && nU,
                au = void 0 !== nK && nK,
                ah = void 0 === nQ || nQ,
                am = (0, m.y)(B.a),
                ap = (0, y.useContext)(R.a),
                ag = (0, m.x)(eI.f, ap),
                af = (0, m.z)(null != ag && z.a);
            nD[0] !== ap || nD[1] !== nW ? (t = {
                auth: ap,
                conversationId: nW
            }, nD[0] = ap, nD[1] = nW, nD[2] = t) : t = nD[2];
            let av = (0, m.x)(null != ap && !ap.isLoading && null === ap.authMethod && eI.h, t),
                {
                    conversationId: ab
                } = (0, w.cb)();
            nD[3] !== nW || nD[4] !== au || nD[5] !== ab || nD[6] !== am || nD[7] !== al ? (n = () => (0, eN.e)(au || null != al || null == am.get(F.j, nW) ? nW : ab ?? ""), nD[3] = nW, nD[4] = au, nD[5] = ab, nD[6] = am, nD[7] = al, nD[8] = n) : n = nD[8];
            let [ax, a_] = (0, y.useState)(n);
            nD[9] !== ax || nD[10] !== nW || nD[11] !== am ? (i = () => ax && !am.get(sF.b, nW) ? nW : null, nD[9] = ax, nD[10] = nW, nD[11] = am, nD[12] = i) : i = nD[12];
            let [aj] = (0, y.useState)(i), aI = null != n2 || null != ag && !(void 0 !== n3 && n3 && af);
            nD[13] !== nW || nD[14] !== ad || nD[15] !== au || nD[16] !== aI || nD[17] !== am ? (l = () => {
                if (!aI && !ad && !au) return function(e, t) {
                    let n = e.get(nR.a, t) ?? t,
                        a = e.get(Z.b, t),
                        r = e.get(nG, n),
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
                        i = e.get(nf.i),
                        l = o.observedTurn,
                        c = null;

                    function d(t) {
                        for (let n of t.toReversed())
                            if (!o.initialCreationMessageIds.has(n.messageId) && (0, nI.openSpacePageSidePanelTab)(e, n.pageId, {
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
                        } = n, r = a(F._, t), s = a(nf.i), u = a(F.ab, t);
                        if ((0, F.zb)(r)) {
                            l = !1;
                            let e = a(Z.b, t),
                                n = a(F.bb, t),
                                r = !o.observedTurn || o.attemptId !== e;
                            if (o.attemptId = e, r) {
                                let e = c;
                                c = null, e?.abort(), o.observedTurn = !0, o.activeRequestId = n, o.dismissed = u, o.openedCreatedPage = !1
                            } else o.activeRequestId = n ?? o.activeRequestId, o.dismissed = o.dismissed || u || i && !s;
                            i = s;
                            let h = !u && !o.dismissed && !s && !o.openedCreatedPage && !a(B.j) && !a(F.C, t) && !a(ej.d, t),
                                m = [];
                            if ((r || h) && (m = a(F.P, t) ?? []), r) {
                                o.initialCreationMessageIds = new Set(m.map(e => e.messageId));
                                return
                            }
                            h && d(m);
                            return
                        }
                        if (!o.observedTurn) return;
                        let h = a(F.v, t);
                        if ("idle" !== r || u || null != h && "completed" !== h.result || null != e.get(F.C, t) || e.get(B.j) || e.get(ej.d, t)) {
                            o.observedTurn = !1;
                            return
                        }
                        if (l) {
                            if (o.dismissed || s || o.openedCreatedPage || a(Z.b, t) !== o.attemptId) {
                                o.observedTurn = !1;
                                return
                            }
                            if (h?.result !== "completed") return;
                            d(a(F.P, t) ?? []), o.observedTurn = !o.openedCreatedPage;
                            return
                        }
                        if (o.observedTurn = !1, h?.result !== "completed" || h.requestId !== o.activeRequestId) return;
                        let m = e.get(F.L, t);
                        if (null == m) return;
                        let p = (0, g.b)({
                                mapping: m,
                                current_node: e.get(F.B, t)
                            }),
                            f = p.findLast(nz.b);
                        if (f?.status !== "finished_successfully") return;
                        let v = [...(0, nN.e)(p).outputs, ...p.flatMap(e => (0, nN.c)(e).map(e => e.file))],
                            y = e.get(nE.a, t)?.at(-1);
                        if (y?.turn.status !== "complete") return;
                        let b = [...(0, ny.b)(p), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, nv.a)(e, b, !o.dismissed) || !o.dismissed && !o.openedCreatedPage && (0, nS.a)(e, b)) && !o.dismissed && !s && !o.openedCreatedPage) {
                            for (let t of (0, nj.c)((0, g.e)(f)).toReversed())
                                if ((0, nI.openSpacePageSidePanelTab)(e, t.id, {
                                        openSource: "turn_auto_open",
                                        blockId: t.blockId
                                    }).opened) return;
                            if ((0, nO.canOpenChatGptFilePreview)({
                                    browserPreview: !0
                                })) {
                                for (let n of y.turn.items)
                                    if ("assistant-message" === n.type && n.completed)
                                        for (let [a, r] of n.contentReferences.entries()) {
                                            let s = (0, nk.a)(r),
                                                o = null == s ? null : (0, nb.a)(s),
                                                i = v.find(e => null != e.fileId && e.fileId === (r.file_id ?? r.id) || null != e.libraryFileId && e.libraryFileId === r.library_file_id);
                                            if ("file" !== r.type || !(0, ng.a)(r) || null == s || null == o || !(0, nb.f)(o) || null == i && null == (0, nM.b)(r.sandbox_path) && !(0, nM.b)(r.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > nw.a) continue;
                                            let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                d = (0, nA.b)(r, {
                                                    fileName: s,
                                                    messageId: l
                                                });
                                            if (null == d) continue;
                                            if (e.get(t1.f)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let u = e.get(F.j, t) ?? t,
                                                h = `${l??"message"}:${String(a)}:${s}`,
                                                m = `chatgpt-file:${u}:${h}`,
                                                g = {
                                                    turnId: y.id,
                                                    inputMessageId: p.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: l ?? null
                                                },
                                                f = new AbortController,
                                                b = (0, nO.openChatGptFile)(e, {
                                                    conversationId: u,
                                                    fileName: s,
                                                    gizmoId: e.get(F.R, t),
                                                    sharedConversationId: e.get(F.Y, t),
                                                    target: d,
                                                    tabKey: h,
                                                    browserPreview: !0,
                                                    isAccessBlocked: e => e.get(ej.d, t),
                                                    downloadFallback: !1,
                                                    openSource: "auto_open",
                                                    originatingTurn: g,
                                                    signal: f.signal,
                                                    onOpened: () => {
                                                        let t = e.get(E.l.activeTab$);
                                                        f.signal.aborted || t?.tabId !== m || t.tabType.kind !== nx.a || ((0, ed.a)(e, np.CodexFileOpened, {
                                                            threadId: u,
                                                            turnId: g.turnId,
                                                            inputMessageId: g.inputMessageId ?? void 0,
                                                            messageId: g.messageId ?? void 0,
                                                            fileExtension: (0, nC.c)(s) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, ed.a)(e, np.CodexWorkspaceFilePreviewAttempted, (0, n_.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: g,
                                                            path: s,
                                                            threadId: u,
                                                            windowType: "browser"
                                                        })), (0, nT.b)(e, m, "auto_open"))
                                                    },
                                                    onClose: () => f.abort()
                                                });
                                            c = f;
                                            let x = e.watch(e => {
                                                let {
                                                    get: n
                                                } = e;
                                                (n(nf.i) && n(E.l.activeTab$)?.tabId !== m || n(ej.d, t)) && f.abort()
                                            });
                                            b.catch(e => {
                                                f.signal.aborted || nP.a.debug("Automatic ChatGPT artifact preview could not open", {
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
                        u(), c?.abort(), null != o.attemptId && e.set(nG, n, {
                            ...o,
                            attemptId: o.attemptId
                        })
                    }
                }(am, nW)
            }, c = [nW, ad, au, aI, am], nD[13] = nW, nD[14] = ad, nD[15] = au, nD[16] = aI, nD[17] = am, nD[18] = l, nD[19] = c) : (l = nD[18], c = nD[19]), (0, y.useEffect)(l, c);
            let aS = (0, m.x)(a7.a, nW),
                aT = aI ? null : aS;
            nD[20] !== n2 ? (d = () => null == n2 ? null : (0, eN.b)(), nD[20] = n2, nD[21] = d) : d = nD[21];
            let [aP] = (0, y.useState)(d), aE = aP ?? nW;
            nD[22] !== aE ? (u = (0, t$.o)({
                routeKind: "chatgpt-thread",
                conversationId: aE
            }), nD[22] = aE, nD[23] = u) : u = nD[23];
            let aM = null != (0, m.x)(tz.c, u);
            nD[24] !== aE || nD[25] !== n4 || nD[26] !== am ? (b = () => {
                if (null != n4 && 0 !== n4.length) return (0, tt.b)(am, aE, n4)
            }, C = [aE, n4, am], nD[24] = aE, nD[25] = n4, nD[26] = am, nD[27] = b, nD[28] = C) : (b = nD[27], C = nD[28]), (0, y.useEffect)(b, C);
            let aR = (0, y.useRef)(null),
                [aN, aO] = (0, y.useState)(null),
                [az, aG] = (0, y.useState)(null),
                [aF, aL] = (0, y.useState)(null),
                aD = az?.activation === ac ? az.messageId : null,
                aW = aF === ac,
                aH = (0, y.useRef)(null);
            nD[29] === Symbol.for("react.memo_cache_sentinel") ? (j = () => {
                let e = new AbortController;
                return aH.current = e, () => e.abort()
            }, nD[29] = j) : j = nD[29], nD[30] !== ac ? (S = [ac], nD[30] = ac, nD[31] = S) : S = nD[31], (0, y.useLayoutEffect)(j, S);
            let aq = (0, x.a)(),
                aU = (0, w._)(),
                aK = (0, nt.c)(),
                aV = (0, m.x)(F.j, nW);
            nD[32] !== am ? (k = e => {
                (0, nF.c)(am, e)
            }, nD[32] = am, nD[33] = k) : k = nD[33];
            let aQ = (0, y.useEffectEvent)(k);
            nD[34] !== aV || nD[35] !== aQ ? (M = () => () => {
                null != aV && aQ(aV)
            }, nD[34] = aV, nD[35] = aQ, nD[36] = M) : M = nD[36], nD[37] !== aV ? (G = [aV], nD[37] = aV, nD[38] = G) : G = nD[38], (0, y.useEffect)(M, G);
            let aY = (0, m.x)(ok.b, nW),
                a$ = (0, m.x)(F.L, nW),
                aX = (0, m.x)(an.chatGptConversationQueryById$, aI || n1 && null != a$ ? null : aV);
            (0, m.x)(aI ? null : as.a, aV);
            let aJ = (0, m.x)(!av && ej.d, nW),
                aZ = aV ?? nW,
                a0 = (0, m.x)(F.B, nW),
                a1 = (0, m.x)(F.x, nW),
                a2 = (0, m.x)(F.R, nW),
                a5 = (0, m.x)(F.C, nW),
                a6 = (0, m.x)(F.M, nW),
                rs = (0, m.x)(F._, nW),
                ri = (0, m.x)(F.V, nW),
                rl = (0, m.x)(F.X, nW),
                rc = (0, m.x)(aw.a, nW),
                rd = (0, m.x)(F.D, nW),
                ru = (0, m.x)(F.cb, nW),
                rh = (0, m.x)(F.db, nW),
                rm = (0, m.x)(an.n, n2),
                rp = (0, y.useRef)(null),
                rg = rm.isSuccess && null != rm.data ? n2 : null;
            nD[39] !== am ? (L = e => {
                (0, ed.a)(am, s.h, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, nD[39] = am, nD[40] = L) : L = nD[40];
            let ry = (0, y.useEffectEvent)(L);
            nD[41] !== rg || nD[42] !== ry ? (D = () => {
                null != rg && rp.current !== rg && (rp.current = rg, ry(rg))
            }, nD[41] = rg, nD[42] = ry, nD[43] = D) : D = nD[43], nD[44] !== rg ? (W = [rg], nD[44] = rg, nD[45] = W) : W = nD[45], (0, y.useEffect)(D, W);
            let rk = (0, m.x)(e8.p, nW),
                rM = (0, m.x)(e8.o, nW),
                rR = (0, m.x)(e8.m, nW),
                rN = (0, m.x)(e8.q, nW),
                rO = (0, m.x)(e8.n, nW),
                rz = (0, m.x)(e8.i, nW),
                rG = (0, m.x)(F.ab, nW),
                rB = (0, m.x)(e8.z, nW);
            nD[46] !== rs ? (H = (0, F.zb)(rs), nD[46] = rs, nD[47] = H) : H = nD[47];
            let rL = H,
                rD = (0, m.x)(a9, nW),
                rH = (0, m.z)(O.u),
                rU = (0, m.z)(O.r),
                rV = (0, m.z)(O.t),
                rQ = (0, m.z)(O.m),
                rY = (0, m.z)(O.b),
                r$ = (0, m.z)(O.n),
                rX = (0, m.z)(tD.pagesEnabled$);
            nD[48] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, e6.a)(), nD[48] = q) : q = nD[48];
            let rJ = (0, eo.h)(q);
            nD[49] === Symbol.for("react.memo_cache_sentinel") ? (U = (0, tG.b)(), nD[49] = U) : U = nD[49];
            let rZ = (0, eo.h)(U),
                r0 = null != a$,
                r1 = (0, m.z)(s0.f),
                r2 = aI ? rm : aX;
            ax && null != r2.data && a_(!1);
            let r3 = ax && r0 && null == r2.data,
                r4 = r2.isLoading || !r3 && r2.isError;
            nD[50] !== aN || nD[51] !== aE || nD[52] !== r4 || nD[53] !== aI || nD[54] !== n1 || nD[55] !== am ? (K = (e, t, n, a) => {
                !(e || am.get(tQ.a)) && ((0, e8.b)(am, aE, t, void 0, n, a), aN?.focus(), aI || r4 || (0, at.f)(am, aE, {
                    isTemporaryChat: n1
                }))
            }, nD[50] = aN, nD[51] = aE, nD[52] = r4, nD[53] = aI, nD[54] = n1, nD[55] = am, nD[56] = K) : K = nD[56];
            let r5 = K;
            nD[57] !== nW || nD[58] !== ag ? (Q = null == (V = null == ag ? null : (0, of.a)(ag, nW)) ? void 0 : (0, sG.a)(V), nD[57] = nW, nD[58] = ag, nD[59] = V, nD[60] = Q) : (V = nD[59], Q = nD[60]);
            let r6 = Q,
                r7 = V ?? r2.data,
                r8 = rd ? ru : r7?.title,
                r9 = (0, m.z)(N.h),
                se = (0, m.z)(N.g),
                st = "chatgpt-thread" === am.value.routeKind && am.value.workSideChat?.conversationId === nW,
                sn = r7?.conversation_origin ?? a1 ?? (null != al || st ? "tpp" : null),
                sa = "tpp" === sn,
                ss = sa && "denied" === rH.status && "go-plan" === rH.reason,
                so = (0, m.z)(t2.e),
                si = (0, w.Y)(),
                sl = si.state;
            (0, m.z)(tJ.b);
            let sc = (0, m.x)(t1.d, "3901104270") && sl?.openGoalPlan === !0,
                sd = (0, t9.a)(),
                su = "tpp" === sn || "flora" === sn,
                sh = (0, eo.h)("2871250183"),
                sm = (0, m.z)(!!su && O.v),
                sg = void 0 !== nZ && nZ || sm,
                sv = null == so || so.isFullWidth ? void 0 : so.width ?? 420,
                sy = !0 === (0, m.z)(su ? null : nl.d),
                sx = (0, m.z)(su ? tK.b : tK.a),
                sC = !su && sx,
                sw = !rZ || r$ && !su,
                s_ = !aI && r$ && !su,
                sI = s_ && rQ,
                sS = aI && r7?.is_read_only === !0 || ai?.is_read_only === !0;
            nD[61] !== nW || nD[62] !== aI || nD[63] !== am ? ($ = () => null, nD[61] = nW, nD[62] = aI, nD[63] = am, nD[64] = $) : $ = nD[64];
            let [sA] = (0, y.useState)($), sE = r7?.gizmo_id ?? a2 ?? sA?.gizmoId ?? null;
            nD[65] !== sE || nD[66] !== aI ? (et = aI || null == sE || (0, te.a)(sE) ? null : sE, nD[65] = sE, nD[66] = aI, nD[67] = et) : et = nD[67];
            let sR = et,
                sB = (0, m.x)(n9, aE);
            nD[68] !== r7 || nD[69] !== nW || nD[70] !== rc || nD[71] !== si.pathname || nD[72] !== n2 || nD[73] !== ag ? (en = (0, ay.d)({
                conversation: r7,
                conversationId: nW,
                conversationTitle: rc,
                pathname: si.pathname,
                sharedConversationId: n2,
                sharedPost: ag
            }), nD[68] = r7, nD[69] = nW, nD[70] = rc, nD[71] = si.pathname, nD[72] = n2, nD[73] = ag, nD[74] = en) : en = nD[74];
            let sW = en,
                sH = !rV && null == r7 && null == sA,
                sq = null != aV && !aJ && !sH && (rV || rU),
                sU = null;
            aI || (sU = null != r7 ? (0, sr.B)(r7) : (0, te.a)(a2) ? a2 : sA?.projectId ?? null);
            let sK = (0, m.x)(nu.c, aI ? null : nW),
                sY = aI || su || null != sU || sK || null == sB ? sR : sB.id;
            nD[75] !== aE || nD[76] !== sY || nD[77] !== si.pathname ? (er = {
                gizmoId: sY,
                conversationId: aE,
                visitKey: si.pathname
            }, nD[75] = aE, nD[76] = sY, nD[77] = si.pathname, nD[78] = er) : er = nD[78];
            let sJ = (0, m.x)(sD.d, er),
                {
                    data: s1
                } = (0, o.a)({
                    enabled: null != sU,
                    queryFn: () => {
                        if (null == sU) throw Error("Expected a ChatGPT project id");
                        return (0, eV.c)(sU)
                    },
                    queryKey: (0, sr.E)(sU ?? ""),
                    staleTime: eC.b.ONE_MINUTE
                }),
                s2 = null != sU && (s1?.gizmo.share_recipient !== "private" || (s1?.gizmo.sharing?.subjects?.length ?? 0) > 0);
            nD[79] !== r7?.context_scopes || nD[80] !== s1?.gizmo.gizmo_snorlax_type ? (es = r7?.context_scopes?.includes("HEALTH") === !0 || s1?.gizmo.gizmo_snorlax_type === "potion", nD[79] = r7?.context_scopes, nD[80] = s1?.gizmo.gizmo_snorlax_type, nD[81] = es) : es = nD[81];
            let s3 = es,
                s4 = (0, sQ.a)(r7?.context_scopes, {
                    projectType: s1?.gizmo.gizmo_snorlax_type,
                    projectId: sU,
                    lockedProjectId: r1?.projectId
                }),
                s5 = aJ || s2 || s3 || s4;
            nD[82] !== s1?.gizmo.display.name || nD[83] !== s1?.gizmo.display.name.trim ? (ei = s1?.gizmo.display.name.trim() || null, nD[82] = s1?.gizmo.display.name, nD[83] = s1?.gizmo.display.name.trim, nD[84] = ei) : ei = nD[84];
            let s6 = ei,
                s7 = s1?.gizmo.display.theme,
                s9 = s1?.gizmo.display.emoji;
            nD[85] !== s1 ? (el = "shared" === (0, ro.b)(s1) ? (0, a.jsx)(tw.b, {
                icon: {
                    assets: {
                        16: o3,
                        20: o4.a
                    }
                }
            }) : void 0, nD[85] = s1, nD[86] = el) : el = nD[86], nD[87] !== s7 || nD[88] !== s9 || nD[89] !== el ? (ec = (0, a.jsx)(tq.a, {
                className: "icon-leading",
                size: "leading",
                color: s7,
                icon: s9,
                sharedIcon: el
            }), nD[87] = s7, nD[88] = s9, nD[89] = el, nD[90] = ec) : ec = nD[90];
            let on = ec,
                oa = (0, m.x)(F.i, nW),
                or = oa?.metadata ?? r7?.context_truncation_continuation,
                os = aI || n1 || null != ai || null == r9 || r7?.owner?.user_id == null || null == sU || r7.owner.user_id === (se ? r9.split("__")[0] : r9) ? null : (0, sT.d)(sU, r7.conversation_id, r7.owner.user_id),
                oo = !aI && !ad && !sg,
                oi = (0, m.x)(oo ? oe.c : null, nW),
                ol = oi?.isReviewing === !0,
                oc = null == oi ? a$ : oi.conversation.mapping,
                od = null == oi ? a0 : oi.conversation.current_node,
                ou = null == a$ ? r7 : null,
                oh = oc ?? ou?.mapping,
                om = (0, eo.k)();
            nD[91] !== oh || nD[92] !== om ? (eu = function(e, t) {
                if (null != e && Object.values(e).some(e => e?.message != null && (0, sV.b)(e.message))) return () => (0, eo.f)(t, "2347981323").get("enabled", !1)
            }(oh, om), nD[91] = oh, nD[92] = om, nD[93] = eu) : eu = nD[93];
            let og = eu,
                ob = (0, m.z)(null != og ? ns.h : void 0),
                ox = (0, m.x)(null != og && !aI && !ad && !ol && na.a, nW),
                oC = (0, m.z)(ox ? nr.a : void 0);
            nD[94] === Symbol.for("react.memo_cache_sentinel") ? (eh = (0, aa.a)(), nD[94] = eh) : eh = nD[94];
            let ow = eh;
            nD[95] === Symbol.for("react.memo_cache_sentinel") ? (em = new WeakMap, nD[95] = em) : em = nD[95];
            let o_ = em;
            nD[96] !== sx || nD[97] !== sC || nD[98] !== or || nD[99] !== sn || nD[100] !== od || nD[101] !== oc || nD[102] !== sh || nD[103] !== og || nD[104] !== ou || nD[105] !== ad || nD[106] !== aI || nD[107] !== rL || nD[108] !== su || nD[109] !== a6 || nD[110] !== rR || nD[111] !== rO || nD[112] !== rM || nD[113] !== rk || nD[114] !== rN || nD[115] !== ol || nD[116] !== am.get || nD[117] !== oi?.isEntering || nD[118] !== aY || nD[119] !== rs || nD[120] !== oC || nD[121] !== ob ? (ep = () => ow({
                conversation: ou,
                contextContinuation: or,
                clinicalSearchEnabled: sC,
                clinicalCitationsEnabled: sx,
                enableCloudBrowserActivity: sh,
                conversationOrigin: sn,
                enableVoiceImageLoadingFix: og,
                voiceImageSessionId: ob,
                voiceImageGenerationSpawnIds: oC,
                enableImageGenerationLoadingState: !aI && !ad && !ol && "error" !== rs,
                getRenderTelemetry: e => (0, oX.c)(am.get, e),
                isWorkConversation: su,
                isStreaming: !aI && !ad && !ol && rL,
                mode: "conversation",
                mcpResponseCache: o_,
                moderationDisclaimersByMessageId: a6,
                streamingOrders: aY,
                pendingSubmission: null == rk || aI || ol || oi?.isEntering ? null : {
                    attachments: rR,
                    commentAttachments: rO,
                    prompt: rk,
                    ...rM,
                    selectedTextAttachments: rN
                },
                threadCurrentNode: od,
                threadMapping: oc
            }), nD[96] = sx, nD[97] = sC, nD[98] = or, nD[99] = sn, nD[100] = od, nD[101] = oc, nD[102] = sh, nD[103] = og, nD[104] = ou, nD[105] = ad, nD[106] = aI, nD[107] = rL, nD[108] = su, nD[109] = a6, nD[110] = rR, nD[111] = rO, nD[112] = rM, nD[113] = rk, nD[114] = rN, nD[115] = ol, nD[116] = am.get, nD[117] = oi?.isEntering, nD[118] = aY, nD[119] = rs, nD[120] = oC, nD[121] = ob, nD[122] = ep) : ep = nD[122], oi?.isEntering, nD[123] !== ep ? (eg = ep(), nD[123] = ep, nD[124] = eg) : eg = nD[124];
            let {
                isConversationEmpty: oj,
                renderedConversation: oI,
                renderedTurns: oS,
                showPendingLoadingMessage: oP
            } = eg;
            nD[125] !== au || nD[126] !== su || nD[127] !== oI || nD[128] !== am ? (ef = () => {
                if (!au && su) return am.set(o2.b, oI), () => {
                    am.get(o2.b) === oI && am.set(o2.b, null)
                }
            }, ev = [au, su, oI, am], nD[125] = au, nD[126] = su, nD[127] = oI, nD[128] = am, nD[129] = ef, nD[130] = ev) : (ef = nD[129], ev = nD[130]), (0, y.useEffect)(ef, ev);
            let oA = (0, m.x)(nh.g, nW),
                oE = oP && null == oA,
                oM = !su && !aI && !au && !ad,
                oR = (0, m.x)(sC || au || aI ? null : J.a, nW),
                oN = (oR?.length ?? 0) > 0,
                oO = (0, m.x)(oM ? Z.b : null, nW),
                oG = JSON.stringify([nW, ac]),
                [oF, oB] = (0, y.useState)(null),
                oL = function(e, t) {
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
                    let d = null == n ? [] : (0, g.b)(n, eQ.k),
                        u = null == e || e.visitKey !== c,
                        h = d.find(eQ.k)?.id ?? (u || i ? null : e.userMessageId),
                        m = i ? null : d.findLast(eY)?.id ?? null,
                        p = !u && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != h && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== h),
                        f = new Set(u ? [] : e.observedSummaryRequestIds),
                        v = !u && !p && e.hasConsumedSummaryRequest,
                        y = !v && !u && null != e.conversation && (o || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != m && !f.has(m);
                    if (null != n && (u || null == e.conversation || !o))
                        for (let e of Object.values(n.mapping)) e?.message?.id != null && eY(e.message) && f.add(e.message.id);
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
                        isOpen: s ? !u && e.suppressAutoOpen && e.isOpen : r && (l && (u || !e.hasGoal) || y) || !u && (!p || l) && (!e.hasGoal || l) && e.isOpen,
                        shouldPreventAutoFocus: u || p || l && !e.hasGoal || y && !e.isOpen || e.shouldPreventAutoFocus
                    }
                }(oF, {
                    completionAttemptId: oO,
                    allowAutoOpen: !(0, tA.a)("(width < 768px)"),
                    suppressAutoOpen: sc,
                    conversation: oM && (r3 || !r4) ? oI : null,
                    isTurnActive: rL,
                    hasGoal: oN,
                    isPendingUserTurn: rz && null != rk && !rL,
                    visitKey: oG
                });
            oL !== oF && oB(oL);
            let oD = null == al && !sC && !au && !aI && (sa || oM) && !ad,
                oH = oD && oI?.mapping === a$ && oI?.current_node === a0,
                oq = (0, m.x)(oH ? F.p : null, nW),
                oU = oI?.mapping,
                oK = oI?.current_node;
            nD[131] !== oU || nD[132] !== oK ? (ey = h()(() => {
                let e = null == oU ? [] : (0, g.a)({
                    mapping: oU,
                    current_node: oK
                });
                return {
                    messages: e,
                    resources: (0, nN.e)(e)
                }
            }), nD[131] = oU, nD[132] = oK, nD[133] = ey) : ey = nD[133];
            let oV = ey;
            nD[134] !== oM || nD[135] !== rz || nD[136] !== oD || nD[137] !== rL || nD[138] !== rX || nD[139] !== rR || nD[140] !== oV || nD[141] !== oS || nD[142] !== oq ? (eb = oD ? h()(() => (function(e) {
                var t;
                let n, a, {
                        automationReferences: r,
                        includePages: s = !1,
                        includeSources: o = !0,
                        messages: i,
                        pendingAttachments: l = [],
                        resources: c = (0, nN.e)(i),
                        turns: d,
                        isTurnActive: u = d.at(-1)?.turn.status === "in_progress"
                    } = e,
                    h = [...c.inputs],
                    m = o ? (0, rS.a)(i, d) : [],
                    p = new Map,
                    f = new Map,
                    v = (t = i, -1 !== (n = rb()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, rA.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    y = [],
                    b = new Map(i.map(e => [(0, g.g)(e), e])),
                    x = rb()(i, e => "user" === e.author.role),
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
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, rI.j)(t.metadata) && y.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, rI.c)(t.metadata)
                            })
                        }
                    for (let n of rE(t.items)) {
                        if (s && "mcp-tool-call" === n.type) {
                            let e = (0, r_.b)(n);
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
                        if (s && "assistant-message" === n.type && n.completed)
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
                            p.set(e, {
                                image: n,
                                key: e,
                                kind: "generated-image"
                            })
                        }
                    }
                }
                let w = (0, rC.b)(d.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return rE(t.items).filter(e => "mcp-tool-call" === e.type)
                })).at(-1);
                return a = null == w ? [...c.outputs, ...f.values(), ...p.values()] : [{
                    ...w,
                    key: `site:${w.projectId}`,
                    kind: "site"
                }, ...c.outputs.filter(e => null == w.archivePath || ! function(e, t) {
                    if (null != e.sandboxPath) return e.sandboxPath === t;
                    let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != n && e.name.toLowerCase() === n
                }(e, w.archivePath)), ...f.values(), ...p.values()], {
                    automationIds: (0, rj.b)(i, r ?? void 0),
                    browserScreenshots: (0, rT.d)(i),
                    inputs: h,
                    sourceTurns: y,
                    outputs: a,
                    progressSteps: C,
                    isPlanSummaryUpdating: u && i.slice(x + 1).some(e => "assistant" === e.author.role && rj.a.test(e.recipient ?? "") || "tool" === e.author.role && rj.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${d.at(-1)?.id??""}:${u}`,
                    sources: o ? [...Array.from(new Map(i.filter(e => "user" === e.author.role).flatMap(e => (0, rw.a)((0, g.e)(e))).map(e => [e.projectId, e])).values(), e => ({
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
                automationReferences: oq,
                includePages: rX,
                includeSources: !oM,
                isTurnActive: rL || rz,
                ...oV(),
                pendingAttachments: rz ? rR : [],
                turns: oS
            })) : null, ex = oM ? eb?.() : null, nD[134] = oM, nD[135] = rz, nD[136] = oD, nD[137] = rL, nD[138] = rX, nD[139] = rR, nD[140] = oV, nD[141] = oS, nD[142] = oq, nD[143] = eb, nD[144] = ex) : (eb = nD[143], ex = nD[144]);
            let oQ = ex,
                oY = oN || null != oQ && (oQ.outputs.length > 0 || oQ.progressSteps.length > 0 || oQ.automationIds.length > 0 || oQ.subagents.length > 0 || !aJ && oQ.browserScreenshots.length > 0),
                o$ = oD && (!oM || oY),
                oJ = o$ && null == so,
                o0 = JSON.stringify([oG, null != so]),
                o5 = oM ? oL.isOpen : void 0,
                o6 = o$ && !so?.isFullWidth;
            nD[145] !== sv || nD[146] !== o0 || nD[147] !== o5 || nD[148] !== o6 ? (ew = {
                contentShiftResetKey: o0,
                controlledIsOpen: o5,
                isEnabled: o6,
                floatingPanelWidth: sv
            }, nD[145] = sv, nD[146] = o0, nD[147] = o5, nD[148] = o6, nD[149] = ew) : ew = nD[149];
            let is = (0, t7.a)(ew),
                io = aV ?? nW,
                ii = sa && null == rh,
                il = a5 ?? rB,
                ic = r2.isLoading && !r0,
                id = r2.isError && !r3;
            nD[150] !== r2.error || nD[151] !== au ? (e_ = au || (0, no.e)(r2.error) || !(r2.error instanceof no.a && [401, 403, 404].includes(r2.error.status)), nD[150] = r2.error, nD[151] = au, nD[152] = e_) : e_ = nD[152];
            let iu = e_;
            nD[153] !== r2.error || nD[154] !== nW || nD[155] !== id || nD[156] !== au || nD[157] !== am || nD[158] !== n2 ? (eS = () => {
                id && !au && tW.a.loadFailed(am, nW, n2, r2.error)
            }, eT = [r2.error, nW, id, au, am, n2], nD[153] = r2.error, nD[154] = nW, nD[155] = id, nD[156] = au, nD[157] = am, nD[158] = n2, nD[159] = eS, nD[160] = eT) : (eS = nD[159], eT = nD[160]), (0, y.useEffect)(eS, eT), nD[161] !== nW || nD[162] !== aI || nD[163] !== aV ? (eP = null, aI || (eP = aV ?? ((0, eN.e)(nW) ? null : nW)), nD[161] = nW, nD[162] = aI, nD[163] = aV, nD[164] = eP) : eP = nD[164], nD[165] !== aD || nD[166] !== r7 || nD[167] !== sn || nD[168] !== aq || nD[169] !== n1 || nD[170] !== su || nD[171] !== ss || nD[172] !== aU || nD[173] !== eP || nD[174] !== n5 || nD[175] !== am || nD[176] !== ac ? (eA = (e, t) => {
                let n = void 0 !== t && t;
                if (null == eP || null != aD || ss) return;
                let a = aH.current?.signal;
                null == a || a.aborted || (aG({
                    messageId: e,
                    activation: ac
                }), (0, F.h)(am, {
                    conversationId: eP,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, nc.a)(am, "opened"), aU(null == n5 ? (0, oz.c)(t, {
                        isTemporaryChat: n1
                    }) : (0, w.C)(n5, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, nc.a)(am, "failed"), aG(null), am.get(ea.f).danger(aq.formatMessage({
                        id: "chatgptConversations.branchFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot continue a conversation in a new chat"
                    }), {
                        errorAnalytics: {
                            toastId: "branch_conversation_failed",
                            operation: "branch_conversation",
                            errorCategory: "conversation",
                            conversationId: eP ?? void 0,
                            retryable: !0,
                            userFacingError: {
                                surface: (0, aA.b)(null == sn && null == r7 ? null : su),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, nD[165] = aD, nD[166] = r7, nD[167] = sn, nD[168] = aq, nD[169] = n1, nD[170] = su, nD[171] = ss, nD[172] = aU, nD[173] = eP, nD[174] = n5, nD[175] = am, nD[176] = ac, nD[177] = eA) : eA = nD[177];
            let ih = (0, nn.a)(eA);
            nD[178] !== r7 || nD[179] !== nW || nD[180] !== sn || nD[181] !== aq || nD[182] !== sy || nD[183] !== n1 || nD[184] !== su || nD[185] !== am || nD[186] !== aV ? (eE = async (e, t, n, a) => {
                if (!sy) try {
                    await async function(e, t) {
                        let {
                            conversationId: n,
                            isTemporaryChat: a = !1,
                            messageId: r,
                            prompt: s,
                            renderFormat: o,
                            inlineSystemHints: i
                        } = t;
                        if (e.get(e8.i, n)) throw new a4.a("edit_message_busy", "The chat is busy.");
                        let l = e.get(F.x, n);
                        if ("tpp" === l) throw new a4.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                        if (!e.get(a9, n)) throw new a4.a("edit_message_busy", "The chat is busy.");
                        let c = e.get(a3.b, {
                            conversationId: n,
                            messageId: r
                        });
                        if (null == c) throw new a4.a("edit_message_target_unavailable", "The user message could not be edited.");
                        let {
                            selectedModel: d
                        } = c, u = s.trim(), h = (0, a3.c)(c.message, e.get, i), m = (0, a8.c)({
                            message: c.message,
                            prompt: u,
                            renderFormat: o,
                            systemHints: h,
                            inlineSystemHints: i
                        }), p = (0, f.f)(m.message.metadata), g = m.message.content, v = "multimodal_text" === g.content_type && g.parts.some(e => "string" != typeof e);
                        if (0 === u.length && 0 === p.length && !v) throw new a4.a("edit_message_empty", "The edited message cannot be empty.");
                        if (e.get(t1.d, "3574573347")) {
                            let t = e.get(a3.a, n);
                            t?.messageId === r && t.prompt === s && aB()((0, a3.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(a3.a, n, {
                                messageId: r,
                                prompt: s,
                                isTemporaryChat: a,
                                inlineSystemHints: i
                            }), (0, at.f)(e, n, {
                                isTemporaryChat: a
                            }))
                        }
                        let y = re(e.get, n),
                            b = y.request.current,
                            x = () => re(e.get, n).request.current === b && aB()(e.get(a3.b, {
                                conversationId: n,
                                messageId: r
                            }), c) && !(0, F.zb)(e.get(F._, n));
                        e.set(e8.i, n, !0);
                        try {
                            if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(a7.a, n) && (await b.stop(), await b.closed), !x()) throw new a4.a("edit_message_target_unavailable", "The edited message or active response changed.");
                            await (0, a8.submitChatGPTCompletion)(e, {
                                isSubmissionCurrent: x,
                                isRequestCurrent: () => e.get(F.B, n) === m.message.id,
                                attachments: p,
                                conversationId: n,
                                isTemporaryChat: a,
                                model: d.slug,
                                parentMessageId: c.parentMessageId,
                                prompt: u,
                                systemHints: h,
                                thinkingEffort: d.thinkingEffort,
                                userCompletionMessages: m
                            })
                        } finally {
                            e.set(e8.i, n, !1)
                        }
                    }(am, {
                        conversationId: nW,
                        isTemporaryChat: n1,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, aA.c)(t);
                    throw am.get(ea.f).danger(aq.formatMessage({
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
                            conversationId: aV ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, aA.b)(null == sn && null == r7 ? null : su),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, nD[178] = r7, nD[179] = nW, nD[180] = sn, nD[181] = aq, nD[182] = sy, nD[183] = n1, nD[184] = su, nD[185] = am, nD[186] = aV, nD[187] = eE) : eE = nD[187];
            let im = (0, nn.a)(eE);
            nD[188] !== aE || nD[189] !== r7 || nD[190] !== nW || nD[191] !== sn || nD[192] !== aq || nD[193] !== sy || nD[194] !== n1 || nD[195] !== su || nD[196] !== ss || nD[197] !== aU || nD[198] !== ao || nD[199] !== am || nD[200] !== aV ? (ek = async (e, t) => {
                if (!sy && !ss) try {
                    let n = am.get(ak.d, nW);
                    if (n?.startsNewWorkConversation || null == am.get(F.j, nW) || (0, nm.j)(am.get(F.T, nW)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, g.e)(n.prompt),
                            r = (0, eK.i)(n.prompt.metadata, a, (0, f.e)(n.prompt.metadata), (0, v.w)(a)),
                            s = (0, e$.a)(n.prompt, a, r),
                            o = am.get(e8.s, aE),
                            i = "markdown" === s.renderFormat ? s.message : a,
                            l = o.length > 0 ? o : i,
                            c = o.length > 0 ? void 0 : s.renderFormat ?? "plain";
                        if (null != ao) return void await ao(l, c);
                        if (null == am.get(F.j, nW) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, tU.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${nW}`;
                            (0, tu.E)(t, (t, n) => n ? t : e) || (0, e8.V)(am, nW, e), (0, tu.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, g.i)((0, g.r)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, v.w)(a);
                            (0, th.m)(am, "work"), await aU("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: o.length > 0 ? o : t,
                                    prefillPromptFormat: o.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (su && !n1 && (0, tc.fb)(am, (0, tI.b)({
                                entrypoint: "home"
                            }))) return void await aU("/");
                        let d = (0, g.k)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, rr.g)(am, d);
                        (0, e8.W)(am, u, t.model);
                        let h = am.get(F.R, nW);
                        (0, th.m)(am, su ? "work" : "chat"), await aU({
                            pathname: "/",
                            search: (0, oz.e)("", n1)
                        }, {
                            state: {
                                initialChatGptConversationId: u,
                                project: null,
                                chatGptProjectId: (0, te.a)(h) ? h : null,
                                chatGptCustomGptId: (0, te.a)(h) ? null : h,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: su
                            }
                        });
                        return
                    }
                    await (0, ak.g)(am, {
                        conversationId: nW,
                        isTemporaryChat: n1,
                        messageId: e,
                        retry: su && "error_retry" === t.source && null == t.model.thinkingEffort ? {
                            ...t,
                            model: am.get(e8.t, nW)
                        } : t
                    })
                } catch {
                    am.get(ea.f).danger(aq.formatMessage({
                        id: "chatgptConversations.regenerate.failed",
                        defaultMessage: "Failed to regenerate response",
                        description: "Error toast shown when generating another version of a ChatGPT response fails"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.regenerate.failed",
                            operation: "regenerate_response",
                            errorCategory: "conversation",
                            conversationId: aV ?? void 0,
                            userFacingError: {
                                surface: (0, aA.b)(null == sn && null == r7 ? null : su),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, nD[188] = aE, nD[189] = r7, nD[190] = nW, nD[191] = sn, nD[192] = aq, nD[193] = sy, nD[194] = n1, nD[195] = su, nD[196] = ss, nD[197] = aU, nD[198] = ao, nD[199] = am, nD[200] = aV, nD[201] = ek) : ek = nD[201];
            let ip = (0, nn.a)(ek);
            nD[202] !== r7 || nD[203] !== nW || nD[204] !== rc || nD[205] !== aq || nD[206] !== aW || nD[207] !== n1 || nD[208] !== aU || nD[209] !== aK || nD[210] !== sU || nD[211] !== am || nD[212] !== aV || nD[213] !== sA || nD[214] !== ac ? (eM = () => {
                if (aW || null == aV) return;
                let e = am.get(O.t);
                if (!e && !am.get(O.r) || !e && null == r7 && null == sA) return;
                let t = aH.current?.signal;
                null == t || t.aborted || (aL(ac), (e ? (0, nL.f)(am, {
                    chatGptThreadId: nW,
                    conversationTitle: rc
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, P.a)(am, e);
                    if ("created" === e.status) return null == n || t.aborted || am.get(ea.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, P.a)(am, e)
                }) : (0, I.a)({
                    scope: am,
                    projectId: sU ?? void 0,
                    prompt: `Continuing from ${(0,tm.f)({conversationId:aV,title:rc?.trim()||"ChatGPT thread"})}`
                }).then(ia)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? aK(n) : aU((0, oz.c)(n, {
                            isTemporaryChat: n1
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (aL(null), am.get(ea.f).danger(aq.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot hand off a conversation to a task"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, nD[202] = r7, nD[203] = nW, nD[204] = rc, nD[205] = aq, nD[206] = aW, nD[207] = n1, nD[208] = aU, nD[209] = aK, nD[210] = sU, nD[211] = am, nD[212] = aV, nD[213] = sA, nD[214] = ac, nD[215] = eM) : eM = nD[215];
            let ig = eM;
            nD[216] !== nW || nD[217] !== aU || nD[218] !== am || nD[219] !== aP || nD[220] !== n2 || nD[221] !== ag ? (eR = () => {
                if (null != ag) {
                    if ((0, eN.e)(nW)) {
                        let e = (0, eI.a)(am, ag, nW);
                        null != e && (am.get(z.a) ? am.set(oy.a, e) : aU((0, oz.c)(e)))
                    }
                    return
                }
                let e = am.query.getData(an.n, n2);
                null != e && null != n2 && null != aP && ((0, F.mb)(am, {
                    conversation: e,
                    conversationId: aP,
                    sharedConversationId: n2
                }), am.get(z.a) ? am.set(oy.a, aP) : aU((0, oz.c)(aP)))
            }, nD[216] = nW, nD[217] = aU, nD[218] = am, nD[219] = aP, nD[220] = n2, nD[221] = ag, nD[222] = eR) : eR = nD[222];
            let iv = (0, nn.a)(eR);
            nD[223] !== al ? (eO = al?.mcpAppContext == null ? null : {
                hostId: tX.a,
                server: "codex_apps",
                connectorId: al.mcpAppContext.id
            }, nD[223] = al, nD[224] = eO) : eO = nD[224];
            let iy = (0, m.x)(tL.b, eO),
                ib = al?.fullscreenContent != null ? "content" : "workspace",
                ix = (0, X.a)(au ? "embedded" : ib),
                iC = !iy && (r3 || !r2.isError) && !ad && !sg && (null == ag || ap?.authMethod === "chatgpt" || af) && (!aI || null != r7),
                iw = rY || sg || sS || sI || ss,
                i_ = iw || ol || oi?.needsEntry === !0;
            if (ol) {
                let e;
                nD[225] !== aq ? (e = aq.formatMessage(oe.d.readOnlyPlaceholder), nD[225] = aq, nD[226] = e) : e = nD[226], ez = e
            } else !iw && oi?.needsEntry && (ez = !1);
            let ij = iC && !iw && !aI && !r4 && !sy && !rL && !rz && !rG && !sJ,
                iI = !iC || aI || i_ || r4 ? null : aN;
            if (nD[227] !== sJ || nD[228] !== aD || nD[229] !== sx || nD[230] !== sC || nD[231] !== r7?.current_node || nD[232] !== nW || nD[233] !== sR || nD[234] !== sh || nD[235] !== il || nD[236] !== ih || nD[237] !== im || nD[238] !== ip || nD[239] !== n$ || nD[240] !== ad || nD[241] !== i_ || nD[242] !== r4 || nD[243] !== s5 || nD[244] !== sg || nD[245] !== aI || nD[246] !== rz || nD[247] !== n1 || nD[248] !== sa || nD[249] !== rL || nD[250] !== su || nD[251] !== sI || nD[252] !== ss || nD[253] !== aT || nD[254] !== rR || nD[255] !== eP || nD[256] !== oI || nD[257] !== oS || nD[258] !== ol || nD[259] !== ri || nD[260] !== am.get || nD[261] !== rl || nD[262] !== V?.current_node || nD[263] !== ai || nD[264] !== iC || nD[265] !== oE || nD[266] !== aY || nD[267] !== rD) {
                let e;
                nD[269] !== sx || nD[270] !== sC || nD[271] !== sh || nD[272] !== su || nD[273] !== aT || nD[274] !== oI || nD[275] !== oS || nD[276] !== ol || nD[277] !== am.get || nD[278] !== aY ? (e = ol || null == aT || null == oI ? oS : (0, n8.a)({
                    ...oI,
                    current_node: aT.promptMessageId
                }, {
                    clinicalSearchEnabled: sC,
                    clinicalCitationsEnabled: sx,
                    enableCloudBrowserActivity: sh,
                    streamingOrders: aY,
                    isWorkConversation: su,
                    getRenderTelemetry: e => (0, oX.c)(am.get, e)
                }), nD[269] = sx, nD[270] = sC, nD[271] = sh, nD[272] = su, nD[273] = aT, nD[274] = oI, nD[275] = oS, nD[276] = ol, nD[277] = am.get, nD[278] = aY, nD[279] = e) : e = nD[279];
                let t = (0, aa.c)({
                    paragen: aT,
                    hideInitialUserMessage: n$,
                    browserConversationId: void 0,
                    conversationId: nW,
                    enableCloudBrowserActivity: sh,
                    errorMessage: il,
                    branchingMessageId: aD,
                    isReadOnly: ad || sg || aI || null != ai,
                    isTemporaryChat: n1,
                    isWorkConversation: sa,
                    onRegenerateResponse: sJ || aI || null != ai || ad || sg || sI || ss || rL || rz ? void 0 : ip,
                    onEditUserMessage: sJ || null == eP || sa || ad || sg || sI || !rD || rz ? void 0 : im,
                    onFork: null == eP || n1 || sI || ss || ad || sg ? void 0 : ih,
                    pendingSubmissionAttachments: rR,
                    shareEnabled: null == sR && !n1 && !aI && !ad && !sg && !s5,
                    readAloudEnabled: !aI && !sg,
                    feedbackEnabled: !aI && !sg && null == ai,
                    renderedTurns: e,
                    safetyReview: ri,
                    sharedConversationLastMessageId: V?.current_node ?? rl ?? (aI ? r7?.current_node : null),
                    showPendingLoadingMessage: oE,
                    showRequestUserInputStatus: iC && !i_ && !r4
                });
                eG = ol ? (0, oe.a)(t) : t, nD[227] = sJ, nD[228] = aD, nD[229] = sx, nD[230] = sC, nD[231] = r7?.current_node, nD[232] = nW, nD[233] = sR, nD[234] = sh, nD[235] = il, nD[236] = ih, nD[237] = im, nD[238] = ip, nD[239] = n$, nD[240] = ad, nD[241] = i_, nD[242] = r4, nD[243] = s5, nD[244] = sg, nD[245] = aI, nD[246] = rz, nD[247] = n1, nD[248] = sa, nD[249] = rL, nD[250] = su, nD[251] = sI, nD[252] = ss, nD[253] = aT, nD[254] = rR, nD[255] = eP, nD[256] = oI, nD[257] = oS, nD[258] = ol, nD[259] = ri, nD[260] = am.get, nD[261] = rl, nD[262] = V?.current_node, nD[263] = ai, nD[264] = iC, nD[265] = oE, nD[266] = aY, nD[267] = rD, nD[268] = eG
            } else eG = nD[268];
            let iS = eG;
            nD[280] !== aq ? (eF = aq.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation",
                description: "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop"
            }), nD[280] = aq, nD[281] = eF) : eF = nD[281];
            let iT = eF,
                iP = (0, m.x)(sr.g, aV ?? nW);
            nD[282] !== r9 || nD[283] !== r7 || nD[284] !== iP || nD[285] !== ad || nD[286] !== se || nD[287] !== sg || nD[288] !== aI || nD[289] !== sS || nD[290] !== n1 || nD[291] !== aV ? (eB = null != aV && !aI && !sS && !ad && !sg && !n1 && (0, ae.b)(r7, r9, se, iP), nD[282] = r9, nD[283] = r7, nD[284] = iP, nD[285] = ad, nD[286] = se, nD[287] = sg, nD[288] = aI, nD[289] = sS, nD[290] = n1, nD[291] = aV, nD[292] = eB) : eB = nD[292];
            let iA = eB;
            nD[293] !== nW || nD[294] !== sR ? (eL = null == sR ? null : (0, a.jsx)(ra.ChatGptGizmoHeader, {
                conversationId: nW,
                gizmoId: sR
            }), nD[293] = nW, nD[294] = sR, nD[295] = eL) : eL = nD[295];
            let iE = eL;
            nD[296] !== ad || nD[297] !== aI || nD[298] !== sa ? (eD = !sa || aI || ad ? null : (0, a.jsx)(tT.a, {
                hostId: tX.a
            }), nD[296] = ad, nD[297] = aI, nD[298] = sa, nD[299] = eD) : eD = nD[299];
            let ik = eD,
                iM = !aI && null == ai && !ad && !n1 && !aJ,
                iR = (0, m.x)(!!iM && sX.c, nW);
            nD[300] !== nW || nD[301] !== iR ? (eW = iR ? (0, a.jsx)(s$, {
                conversationId: nW
            }) : null, nD[300] = nW, nD[301] = iR, nD[302] = eW) : eW = nD[302];
            let iN = eW;
            nD[303] !== ij || nD[304] !== nW || nD[305] !== sy || nD[306] !== oi ? (eH = null != oi ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: sy,
                children: (0, a.jsx)(sz, {
                    conversationId: nW,
                    placement: "progress",
                    canStartSection: ij
                })
            }) : null, nD[303] = ij, nD[304] = nW, nD[305] = sy, nD[306] = oi, nD[307] = eH) : eH = nD[307];
            let iO = eH,
                iz = !r3 && !(n1 && null != a$) && (null == r7 || r2.isFetching && null == r7.title),
                iG = aX.data?.sectioned_conversation != null;
            nD[308] !== nW || nD[309] !== iG ? (eq = {
                conversationId: nW,
                hasHistorySections: iG
            }, nD[308] = nW, nD[309] = iG, nD[310] = eq) : eq = nD[310];
            let iF = (0, m.x)(!!(oo && (0, t_.a)({
                    browser: !0
                })) && ot.h, eq),
                iB = iz || iF,
                iL = null != oi;
            nD[311] !== iR || nD[312] !== iB || nD[313] !== iL ? (eU = function(e) {
                let {
                    hasCourseShortcut: t,
                    hasSectionNavigation: n,
                    hideBrowserTitle: a
                } = e;
                return (0, t_.a)({
                    browser: !0
                }) ? !a && !t && !n : !n || !t && sM
            }({
                hasCourseShortcut: iR,
                hasSectionNavigation: iL,
                hideBrowserTitle: iB
            }), nD[311] = iR, nD[312] = iB, nD[313] = iL, nD[314] = eU) : eU = nD[314];
            let iD = (0, m.z)(eU),
                iW = !n1 && !ad && !sg;
            nD[315] !== rc || nD[316] !== iD || nD[317] !== aI || nD[318] !== sS || nD[319] !== aV || nD[320] !== iW ? (eX = iW && iD && !aI && !sS && null != aV && !!rc.trim(), nD[315] = rc, nD[316] = iD, nD[317] = aI, nD[318] = sS, nD[319] = aV, nD[320] = iW, nD[321] = eX) : eX = nD[321];
            let iH = eX;
            nD[322] !== n7 || nD[323] !== su || nD[324] !== s6 ? (eJ = (0, t_.a)({
                browser: !0
            }) && !su && null != s6 && null == n7, nD[322] = n7, nD[323] = su, nD[324] = s6, nD[325] = eJ) : eJ = nD[325];
            let iq = eJ;
            nD[326] !== iH || nD[327] !== iq || nD[328] !== on || nD[329] !== sU || nD[330] !== s6 ? (eZ = iH && null != sU && !iq ? {
                icon: on,
                name: s6
            } : void 0, nD[326] = iH, nD[327] = iq, nD[328] = on, nD[329] = sU, nD[330] = s6, nD[331] = eZ) : eZ = nD[331];
            let iU = eZ,
                iK = rd || null != r7 ? r8 ?? "" : null;
            nD[332] !== iA || nD[333] !== nW || nD[334] !== rc || nD[335] !== iH || nD[336] !== iK || nD[337] !== iU ? (e0 = (0, a.jsx)(sk, {
                conversationId: nW,
                canRename: iA,
                hasTitleMenu: iH,
                project: iU,
                title: rc,
                titleValue: iK
            }), nD[332] = iA, nD[333] = nW, nD[334] = rc, nD[335] = iH, nD[336] = iK, nD[337] = iU, nD[338] = e0) : e0 = nD[338];
            let iV = e0,
                iQ = ii && !aI && !ad;
            nD[339] !== nW || nD[340] !== iE || nD[341] !== aI ? (e1 = aI ? null : (0, a.jsx)(nd.BusinessAgentConversationHeader, {
                compact: !0,
                conversationId: nW,
                fallback: iE
            }), nD[339] = nW, nD[340] = iE, nD[341] = aI, nD[342] = e1) : e1 = nD[342], nD[343] !== iq || nD[344] !== on || nD[345] !== sU || nD[346] !== s6 || nD[347] !== iU ? (e2 = null != sU && null == iU ? (0, a.jsx)(sP, {
                projectId: sU,
                name: s6,
                icon: on,
                linkToProject: iq
            }) : null, nD[343] = iq, nD[344] = on, nD[345] = sU, nD[346] = s6, nD[347] = iU, nD[348] = e2) : e2 = nD[348], nD[349] !== n7 || nD[350] !== e1 || nD[351] !== e2 ? (e3 = (0, a.jsxs)(a.Fragment, {
                children: [n7, e1, e2]
            }), nD[349] = n7, nD[350] = e1, nD[351] = e2, nD[352] = e3) : e3 = nD[352], nD[353] !== iV || nD[354] !== iB ? (e4 = iB ? null : (0, a.jsx)(a.Fragment, {
                children: iV
            }), nD[353] = iV, nD[354] = iB, nD[355] = e4) : e4 = nD[355], nD[356] !== n1 || nD[357] !== ik || nD[358] !== iQ || nD[359] !== e3 || nD[360] !== e4 ? (e5 = (0, a.jsx)(sb.a, {
                isTemporaryChat: n1,
                isCloudTask: iQ,
                leading: e3,
                start: e4,
                startActions: ik
            }), nD[356] = n1, nD[357] = ik, nD[358] = iQ, nD[359] = e3, nD[360] = e4, nD[361] = e5) : e5 = nD[361];
            let iY = e5;
            nD[362] !== iY || nD[363] !== iN || nD[364] !== iO ? (e7 = null != iN || null != iO ? (0, a.jsx)(sj, {
                header: iY,
                courseShortcut: iN,
                progress: iO
            }) : null, nD[362] = iY, nD[363] = iN, nD[364] = iO, nD[365] = e7) : e7 = nD[365];
            let i$ = e7;
            if (nD[366] !== r2 || nD[367] !== ap?.authMethod || nD[368] !== sJ || nD[369] !== ar || nD[370] !== sw || nD[371] !== sq || nD[372] !== iu || nD[373] !== ij || nD[374] !== aE || nD[375] !== sY || nD[376] !== n6 || nD[377] !== r7 || nD[378] !== iY || nD[379] !== nW || nD[380] !== iT || nD[381] !== sn || nD[382] !== rc || nD[383] !== oL || nD[384] !== nY || nD[385] !== il || nD[386] !== so || nD[387] !== sv || nD[388] !== eb || nD[389] !== sE || nD[390] !== r5 || nD[391] !== ig || nD[392] !== iv || nD[393] !== id || nD[394] !== r0 || nD[395] !== iH || nD[396] !== nV || nD[397] !== aj || nD[398] !== ad || nD[399] !== oM || nD[400] !== i_ || nD[401] !== oj || nD[402] !== r4 || nD[403] !== ic || nD[404] !== aM || nD[405] !== aW || nD[406] !== s3 || nD[407] !== au || nD[408] !== s4 || nD[409] !== iy || nD[410] !== rJ || nD[411] !== sy || nD[412] !== sg || nD[413] !== sd || !1 !== nD[414] || nD[415] !== aI || nD[416] !== sS || nD[417] !== rG || nD[418] !== rz || nD[419] !== n1 || nD[420] !== sa || nD[421] !== rL || nD[422] !== su || nD[423] !== s_ || nD[424] !== rQ || nD[425] !== sI || nD[426] !== ss || nD[427] !== st || nD[428] !== i$ || nD[429] !== si.pathname || nD[430] !== r1 || nD[431] !== sl?.sidebarAutomationId || nD[432] !== n0 || nD[433] !== sc || nD[434] !== s1 || nD[435] !== on || nD[436] !== sU || nD[437] !== s6 || nD[438] !== ez || nD[439] !== sW || nD[440] !== oI || nD[441] !== oS || nD[442] !== n4 || nD[443] !== ol || nD[444] !== ix || nD[445] !== r8 || nD[446] !== am || nD[447] !== nJ || nD[448] !== aZ || nD[449] !== oi || nD[450] !== iO || nD[451] !== aV || nD[452] !== oB || nD[453] !== n2 || nD[454] !== ag || nD[455] !== r6 || nD[456] !== ai || nD[457] !== os || nD[458] !== aJ || nD[459] !== iM || nD[460] !== oJ || nD[461] !== iC || nD[462] !== ah || nD[463] !== iW || nD[464] !== oE || nD[465] !== iI || nD[466] !== io || nD[467] !== is || nD[468] !== a0 || nD[469] !== nX || nD[470] !== iS || nD[471] !== al) {
                td = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, n, r, s, o, i, l, c, d, u, h, m, f = oS.flatMap(it).flatMap(ie),
                        v = f.flatMap(o9);
                    if (!aI && (r2.error instanceof no.a && 423 === r2.error.status || s4 && null == r1)) {
                        let e;
                        nD[497] !== r2 || nD[498] !== nW || nD[499] !== am ? (e = (0, a.jsx)(sZ.a, {
                            onUnlocked: () => {
                                (0, s0.g)(am.get(s0.f)?.projectId, [nW]), r2.refetch()
                            }
                        }), nD[497] = r2, nD[498] = nW, nD[499] = am, nD[500] = e) : e = nD[500], td = e;
                        break e
                    }
                    if (null != os) {
                        let e;
                        nD[501] !== os ? (e = (0, a.jsx)(w.l, {
                            replace: !0,
                            to: os
                        }), nD[501] = os, nD[502] = e) : e = nD[502], td = e;
                        break e
                    }
                    ta = s8,
                    nD[503] !== r7 || nD[504] !== r0 || nD[505] !== ad || nD[506] !== ic || nD[507] !== au || nD[508] !== sg || nD[509] !== aI || nD[510] !== su ? (tM = su || aI || au || sg || ad || ic || null == r7 && !r0 ? null : (0, a.jsx)(Y.a, {}), nD[503] = r7, nD[504] = r0, nD[505] = ad, nD[506] = ic, nD[507] = au, nD[508] = sg, nD[509] = aI, nD[510] = su, nD[511] = tM) : tM = nD[511],
                    nD[512] !== r2.fetchStatus || nD[513] !== r7 || nD[514] !== id || nD[515] !== r0 || nD[516] !== ic || nD[517] !== au ? (tR = !1, nD[512] = r2.fetchStatus, nD[513] = r7, nD[514] = id, nD[515] = r0, nD[516] = ic, nD[517] = au, nD[518] = tR) : tR = nD[518],
                    nD[519] !== r2.data || nD[520] !== r2.fetchStatus || nD[521] !== r7 || nD[522] !== nW || nD[523] !== id || nD[524] !== r0 || nD[525] !== oj || nD[526] !== ic || !1 !== nD[527] || nD[528] !== oS.length ? (tN = null, nD[519] = r2.data, nD[520] = r2.fetchStatus, nD[521] = r7, nD[522] = nW, nD[523] = id, nD[524] = r0, nD[525] = oj, nD[526] = ic, nD[527] = !1, nD[528] = oS.length, nD[529] = tN) : tN = nD[529],
                    tO = !aI && !sg && (0, tG.c)() ? (0, a.jsx)(tF.c, {
                        callIds: v,
                        hostId: tX.a,
                        conversationId: (0, p.Qe)(`chatgpt:${nW}`)
                    }) : null,
                    nD[530] !== rc || nD[531] !== au || nD[532] !== ag || nD[533] !== al?.documentTitle ? (tV = au ? null : (0, a.jsx)(tj.a, {
                        title: null == ag ? al?.documentTitle ?? rc : null
                    }), nD[530] = rc, nD[531] = au, nD[532] = ag, nD[533] = al?.documentTitle, nD[534] = tV) : tV = nD[534],
                    nD[535] !== nW || nD[536] !== au || nD[537] !== sy || nD[538] !== aI || nD[539] !== n1 || nD[540] !== su || nD[541] !== iS ? (tr = au || su ? null : (0, a.jsx)(rW.a, {
                        conversationId: nW,
                        canCopy: !sy,
                        paragenEnabled: !aI,
                        turns: iS,
                        loadHistory: !n1 && !aI
                    }), nD[535] = nW, nD[536] = au, nD[537] = sy, nD[538] = aI, nD[539] = n1, nD[540] = su, nD[541] = iS, nD[542] = tr) : tr = nD[542];
                    let b = null != r7 || r0;nD[543] !== id || nD[544] !== su || nD[545] !== b ? (ts = (0, a.jsx)(ni.a, {
                        isWorkConversation: su,
                        hasConversationContent: b,
                        hasLoadError: id
                    }), nD[543] = id, nD[544] = su, nD[545] = b, nD[546] = ts) : ts = nD[546],
                    nD[547] !== r7 || nD[548] !== nW || nD[549] !== id || nD[550] !== r0 || nD[551] !== ic || nD[552] !== au || nD[553] !== si.pathname || nD[554] !== am || nD[555] !== n2 ? (to = au || ic || id || null == r7 && !r0 ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(op, {
                            sharedConversationId: n2
                        }), (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(tH.a, {
                                onCommit: () => tW.a.contentCommitted(am, nW, n2, si.pathname),
                                onPaint: () => tW.a.contentVisible(am, nW, n2)
                            }, n2 ?? nW)
                        })]
                    }), nD[547] = r7, nD[548] = nW, nD[549] = id, nD[550] = r0, nD[551] = ic, nD[552] = au, nD[553] = si.pathname, nD[554] = am, nD[555] = n2, nD[556] = to) : to = nD[556],
                    nD[557] !== ap?.authMethod || nD[558] !== sq || nD[559] !== sY || nD[560] !== r7 || nD[561] !== iY || nD[562] !== nW || nD[563] !== sn || nD[564] !== rc || nD[565] !== oL || nD[566] !== eb || nD[567] !== sE || nD[568] !== ig || nD[569] !== iH || nD[570] !== ad || nD[571] !== oM || nD[572] !== aW || nD[573] !== s3 || nD[574] !== au || nD[575] !== s4 || nD[576] !== aI || nD[577] !== n1 || nD[578] !== rL || nD[579] !== su || nD[580] !== i$ || nD[581] !== sl?.sidebarAutomationId || nD[582] !== sc || nD[583] !== on || nD[584] !== sU || nD[585] !== s6 || nD[586] !== sW || nD[587] !== oI || nD[588] !== oS.length || nD[589] !== am || nD[590] !== aV || nD[591] !== oB || nD[592] !== ai || nD[593] !== aJ || nD[594] !== iM || nD[595] !== oJ || nD[596] !== iW || nD[597] !== iI || nD[598] !== io || nD[599] !== a0 || nD[600] !== al ? (ti = au || null != al ? null : (0, a.jsxs)(rq.a, {
                        chatIcon: null == sU ? void 0 : on,
                        header: null != i$ ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(a.Fragment, {
                                children: i$
                            }), null]
                        }) : iY,
                        title: rc,
                        isArchivedPreview: ad,
                        children: [null, ap?.authMethod === "chatgpt" ? (0, a.jsx)(tP.t, {
                            productExperience: su ? "work" : "chat"
                        }) : null, aI ? (0, a.jsx)(ov.a, {
                            children: null == sW ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(oT, {
                                    data: sW
                                })
                            })
                        }) : null, iM ? (0, a.jsx)(rK, {
                            conversationId: nW,
                            scheduledAutomationId: sc ? sl?.sidebarAutomationId : void 0
                        }, nW) : null, oJ ? (0, a.jsx)(rv, {
                            composerActions: iI,
                            conversationId: io,
                            controlledState: oM ? {
                                isOpen: oL.isOpen,
                                shouldPreventAutoFocus: oL.shouldPreventAutoFocus,
                                onOpenChange: e => {
                                    oB({
                                        ...oL,
                                        isOpen: e,
                                        shouldPreventAutoFocus: !e && oL.shouldPreventAutoFocus
                                    })
                                }
                            } : void 0,
                            readData: !oM || oL.isOpen ? eb : null,
                            showSources: !oM,
                            shouldBlockExternalEgress: aJ
                        }) : null, n1 && !aI && !ad && null == sE && null == sY && null == sU && !s3 && null != oI && (0, g.a)(oI).some(o8) ? (0, a.jsx)(A.a.HeaderAction, {
                            actionId: "chatgpt-conversation-save",
                            align: "end",
                            order: 100,
                            children: (0, a.jsx)(oW, {
                                conversationId: nW
                            })
                        }) : null, iW ? (0, a.jsx)(sb.b, {
                            hasTitleMenu: iH,
                            menu: aI || null == aV ? (0, a.jsx)(sf, {}) : (0, a.jsx)(sp, {
                                isTitleMenu: iH,
                                conversationId: nW,
                                title: rc,
                                isHandoffPending: aW,
                                isArchived: r7?.is_archived === !0,
                                isChatConversation: null != r7 && !su,
                                onHandoff: sq ? ig : void 0,
                                onOpenMessage: async e => {
                                    aH.current?.signal.aborted === !1 && am.get(T.b)?.pathname === am.value.pathname && await aR.current?.scrollToMessage(e)
                                },
                                projectId: sU,
                                projectName: s6,
                                serverConversationId: aV,
                                conversationOrigin: sn
                            }),
                            children: aI || s4 ? null : (0, a.jsx)(aC, {
                                conversationId: nW,
                                projectId: sU,
                                sharedProjectConversation: ai,
                                isReady: (null != aV || null != ai) && oS.length > 0 && (a0 ?? r7?.current_node) != null,
                                isRestricted: aJ || s3,
                                isStreaming: rL
                            })
                        }) : null]
                    }), nD[557] = ap?.authMethod, nD[558] = sq, nD[559] = sY, nD[560] = r7, nD[561] = iY, nD[562] = nW, nD[563] = sn, nD[564] = rc, nD[565] = oL, nD[566] = eb, nD[567] = sE, nD[568] = ig, nD[569] = iH, nD[570] = ad, nD[571] = oM, nD[572] = aW, nD[573] = s3, nD[574] = au, nD[575] = s4, nD[576] = aI, nD[577] = n1, nD[578] = rL, nD[579] = su, nD[580] = i$, nD[581] = sl?.sidebarAutomationId, nD[582] = sc, nD[583] = on, nD[584] = sU, nD[585] = s6, nD[586] = sW, nD[587] = oI, nD[588] = oS.length, nD[589] = am, nD[590] = aV, nD[591] = oB, nD[592] = ai, nD[593] = aJ, nD[594] = iM, nD[595] = oJ, nD[596] = iW, nD[597] = iI, nD[598] = io, nD[599] = a0, nD[600] = al, nD[601] = ti) : ti = nD[601],
                    tl = null,
                    tn = rn.a,
                    tb = aE,
                    tx = sn,
                    tC = !ah || !iC || ix.isHidden || i_ || sJ || sy || r4 || ad || sg || sS || sI || ss || rG || rz,
                    tS = n1,
                    tE = sU,
                    tk = null != sY,
                    e9 = t3.c,
                    tp = sv,
                    nD[602] !== au || nD[603] !== sd || nD[604] !== su || nD[605] !== iO || nD[606] !== al ? (tg = au || null != al ? iO : sd && (0, t8.a)() && !su && (0, a.jsx)("div", {
                        className: "h-px",
                        "aria-hidden": !0
                    }), nD[602] = au, nD[603] = sd, nD[604] = su, nD[605] = iO, nD[606] = al, nD[607] = tg) : tg = nD[607],
                    tf = ar;
                    let x = null == oi ? "flex h-full min-h-0 flex-col" : "h-full",
                        C = r8 ?? rc,
                        _ = !sy,
                        j = !aM && !au && !aI && !iy && !ix.isHidden,
                        I = aJ || sw,
                        S = so?.isFullWidth === !0,
                        P = null == so ? is.contentShift : void 0,
                        E = oi?.selectedIndex;nD[608] !== ij || nD[609] !== nW || nD[610] !== oi ? (e = null != oi ? (0, a.jsx)(sz, {
                        conversationId: nW,
                        placement: "composer",
                        canStartSection: ij
                    }) : void 0, nD[608] = ij, nD[609] = nW, nD[610] = oi, nD[611] = e) : e = nD[611],
                    nD[612] !== nW || nD[613] !== oi ? (t = null != oi ? (0, a.jsx)(sO, {
                        conversationId: nW
                    }) : void 0, nD[612] = nW, nD[613] = oi, nD[614] = t) : t = nD[614];
                    let k = !su,
                        M = ol ? null : il;nD[615] !== r2 || nD[616] !== iu ? (n = iu ? () => {
                        r2.refetch({
                            cancelRefetch: !1
                        })
                    } : void 0, nD[615] = r2, nD[616] = iu, nD[617] = n) : n = nD[617];
                    let R = oS.length > 0,
                        N = ez,
                        O = !s3 && (null == sU || null != s1),
                        z = null == oi && !st,
                        G = r2.isFetching,
                        F = !ol && rL;nD[618] !== r7?.is_archived || nD[619] !== nW || nD[620] !== ad || nD[621] !== au || nD[622] !== aI || nD[623] !== n1 || nD[624] !== rL || nD[625] !== su ? (r = au || !su || aI || ad || r7?.is_archived === !0 || n1 ? null : (0, a.jsx)(y.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(sN, {
                            conversationId: nW,
                            isTurnActive: rL
                        })
                    }), nD[618] = r7?.is_archived, nD[619] = nW, nD[620] = ad, nD[621] = au, nD[622] = aI, nD[623] = n1, nD[624] = rL, nD[625] = su, nD[626] = r) : r = nD[626],
                    nD[627] !== nW || nD[628] !== ad || nD[629] !== aV ? (s = ad ? (0, a.jsx)(tZ.a, {
                        conversationId: aV ?? nW,
                        kind: "chatgpt"
                    }, aV ?? nW) : void 0, nD[627] = nW, nD[628] = ad, nD[629] = aV, nD[630] = s) : s = nD[630];
                    let B = !ol && oE;nD[631] !== sY ? (o = null != sY ? (0, a.jsx)(sL.GptPluginMigrationBanner, {
                        gizmoId: sY
                    }) : null, nD[631] = sY, nD[632] = o) : o = nD[632],
                    nD[633] !== sq || nD[634] !== ig || nD[635] !== aW || nD[636] !== n1 || nD[637] !== s_ || nD[638] !== rQ ? (i = s_ && !n1 ? (0, a.jsx)(rF, {
                        canConvert: sq,
                        isChatInstantAvailable: !rQ,
                        isConverting: aW,
                        onConvert: ig
                    }) : null, nD[633] = sq, nD[634] = ig, nD[635] = aW, nD[636] = n1, nD[637] = s_, nD[638] = rQ, nD[639] = i) : i = nD[639],
                    nD[640] !== r5 || nD[641] !== sg ? (l = r5.bind(null, sg), nD[640] = r5, nD[641] = sg, nD[642] = l) : l = nD[642],
                    nD[643] !== iv || nD[644] !== aI || nD[645] !== n0 ? (c = e => {
                        n0?.(e), aI && iv()
                    }, nD[643] = iv, nD[644] = aI, nD[645] = n0, nD[646] = c) : c = nD[646],
                    nD[647] !== r2.isFetching || nD[648] !== sJ || nD[649] !== aE || nD[650] !== sY || nD[651] !== n6 || nD[652] !== nW || nD[653] !== iT || nD[654] !== nY || nD[655] !== id || nD[656] !== nV || nD[657] !== aj || nD[658] !== i_ || nD[659] !== oj || nD[660] !== r4 || nD[661] !== ic || nD[662] !== aM || nD[663] !== au || nD[664] !== aI || nD[665] !== n1 || nD[666] !== sa || nD[667] !== ez || nD[668] !== n4 || nD[669] !== nJ || nD[670] !== aZ || nD[671] !== n2 || nD[672] !== r6 || nD[673] !== iC || nD[674] !== ah || nD[675] !== C || nD[676] !== _ || nD[677] !== j || nD[678] !== I || nD[679] !== S || nD[680] !== P || nD[681] !== E || nD[682] !== e || nD[683] !== t || nD[684] !== k || nD[685] !== M || nD[686] !== n || nD[687] !== R || nD[688] !== O || nD[689] !== z || nD[690] !== F || nD[691] !== r || nD[692] !== s || nD[693] !== B || nD[694] !== o || nD[695] !== i || nD[696] !== l || nD[697] !== c || nD[698] !== nX || nD[699] !== iS || nD[700] !== al ? (d = (0, a.jsx)(ir, {
                        ref: aR,
                        printTitle: C,
                        trackShownImpressions: _,
                        trackReadState: j,
                        workspace: al,
                        shouldBlockMcpApps: I,
                        isCoveredByFloatingPanel: S,
                        isFormOnly: aM,
                        isInlinePreview: au,
                        hideModelPicker: nV,
                        showFilePicker: ah,
                        disableAutoFocus: nY,
                        transcriptPresentation: nX,
                        scrollOrigin: nJ,
                        composerRef: aO,
                        contentX: P,
                        conversationId: nW,
                        composerConversationId: aE,
                        sectionIndex: E,
                        composerLeadingContent: n6,
                        aboveComposerContent: e,
                        historyLoadingContent: t,
                        requiredSystemHints: n4,
                        isChatConversation: k,
                        customGptId: sY,
                        conversationLoadingLabel: iT,
                        entries: iS,
                        errorMessage: M,
                        hasLoadError: id,
                        onRetryLoad: n,
                        hasRenderableTurns: R,
                        isComposerDisabled: i_,
                        readOnlyPlaceholder: N,
                        moreDetailsEnabled: O,
                        isConversationEmpty: oj,
                        showEmptyState: z,
                        isConversationFetching: G,
                        isConversationLoading: ic,
                        isSharedConversation: aI,
                        isSubmitDisabled: r4,
                        isTemporaryChat: n1,
                        isTurnActive: F,
                        isWorkConversation: sa,
                        onboardingPrelude: r,
                        scrollStateConversationId: aZ,
                        initialResponsePlacementKey: aj,
                        sharedConversationId: n2,
                        sharedPostRegulatedConnectorKind: r6,
                        showComposer: iC,
                        archivedPreviewFooter: s,
                        showPendingLoadingMessage: B,
                        gptPluginMigrationBanner: o,
                        awaitingGptContinuation: sJ,
                        workOnlyConversionBanner: i,
                        onAddSelectedText: l,
                        onSubmitAccepted: c
                    }), nD[647] = r2.isFetching, nD[648] = sJ, nD[649] = aE, nD[650] = sY, nD[651] = n6, nD[652] = nW, nD[653] = iT, nD[654] = nY, nD[655] = id, nD[656] = nV, nD[657] = aj, nD[658] = i_, nD[659] = oj, nD[660] = r4, nD[661] = ic, nD[662] = aM, nD[663] = au, nD[664] = aI, nD[665] = n1, nD[666] = sa, nD[667] = ez, nD[668] = n4, nD[669] = nJ, nD[670] = aZ, nD[671] = n2, nD[672] = r6, nD[673] = iC, nD[674] = ah, nD[675] = C, nD[676] = _, nD[677] = j, nD[678] = I, nD[679] = S, nD[680] = P, nD[681] = E, nD[682] = e, nD[683] = t, nD[684] = k, nD[685] = M, nD[686] = n, nD[687] = R, nD[688] = O, nD[689] = z, nD[690] = F, nD[691] = r, nD[692] = s, nD[693] = B, nD[694] = o, nD[695] = i, nD[696] = l, nD[697] = c, nD[698] = nX, nD[699] = iS, nD[700] = al, nD[701] = d) : d = nD[701],
                    nD[702] !== oL || nD[703] !== eb || nD[704] !== oM || nD[705] !== aJ || nD[706] !== oJ || nD[707] !== iI || nD[708] !== io || nD[709] !== is ? (u = oJ && null != eb && (!oM || oL.isOpen) ? (0, a.jsx)(rf, {
                        composerActions: iI,
                        conversationId: io,
                        readData: eb,
                        showSources: !oM,
                        display: is,
                        shouldBlockExternalEgress: aJ
                    }) : null, nD[702] = oL, nD[703] = eb, nD[704] = oM, nD[705] = aJ, nD[706] = oJ, nD[707] = iI, nD[708] = io, nD[709] = is, nD[710] = u) : u = nD[710],
                    nD[711] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(rt.a, {}), nD[711] = h) : h = nD[711],
                    nD[712] !== au ? (m = null, nD[712] = au, nD[713] = m) : m = nD[713],
                    nD[714] !== sy || nD[715] !== x || nD[716] !== d || nD[717] !== u || nD[718] !== m ? (tv = (0, a.jsxs)("div", {
                        className: x,
                        inert: sy,
                        children: [d, u, h, m]
                    }), nD[714] = sy, nD[715] = x, nD[716] = d, nD[717] = u, nD[718] = m, nD[719] = tv) : tv = nD[719],
                    ty = !sg && (0, tG.c)() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(o1, {
                            conversationId: nW,
                            shouldBlockExternalEgress: aJ || sw,
                            widgets: f.filter(o7)
                        }), aI ? null : (0, a.jsx)(tB.a, {
                            blockedWidgetSource: rJ ? void 0 : "descriptor",
                            transcriptMcpAppIds: (0, oZ.c)(nW, f, rJ),
                            shouldBlockExternalEgress: aJ || sw
                        })]
                    }) : null
                }
                nD[366] = r2, nD[367] = ap?.authMethod, nD[368] = sJ, nD[369] = ar, nD[370] = sw, nD[371] = sq, nD[372] = iu, nD[373] = ij, nD[374] = aE, nD[375] = sY, nD[376] = n6, nD[377] = r7, nD[378] = iY, nD[379] = nW, nD[380] = iT, nD[381] = sn, nD[382] = rc, nD[383] = oL, nD[384] = nY, nD[385] = il, nD[386] = so, nD[387] = sv, nD[388] = eb, nD[389] = sE, nD[390] = r5, nD[391] = ig, nD[392] = iv, nD[393] = id, nD[394] = r0, nD[395] = iH, nD[396] = nV, nD[397] = aj, nD[398] = ad, nD[399] = oM, nD[400] = i_, nD[401] = oj, nD[402] = r4, nD[403] = ic, nD[404] = aM, nD[405] = aW, nD[406] = s3, nD[407] = au, nD[408] = s4, nD[409] = iy, nD[410] = rJ, nD[411] = sy, nD[412] = sg, nD[413] = sd, nD[414] = !1, nD[415] = aI, nD[416] = sS, nD[417] = rG, nD[418] = rz, nD[419] = n1, nD[420] = sa, nD[421] = rL, nD[422] = su, nD[423] = s_, nD[424] = rQ, nD[425] = sI, nD[426] = ss, nD[427] = st, nD[428] = i$, nD[429] = si.pathname, nD[430] = r1, nD[431] = sl?.sidebarAutomationId, nD[432] = n0, nD[433] = sc, nD[434] = s1, nD[435] = on, nD[436] = sU, nD[437] = s6, nD[438] = ez, nD[439] = sW, nD[440] = oI, nD[441] = oS, nD[442] = n4, nD[443] = ol, nD[444] = ix, nD[445] = r8, nD[446] = am, nD[447] = nJ, nD[448] = aZ, nD[449] = oi, nD[450] = iO, nD[451] = aV, nD[452] = oB, nD[453] = n2, nD[454] = ag, nD[455] = r6, nD[456] = ai, nD[457] = os, nD[458] = aJ, nD[459] = iM, nD[460] = oJ, nD[461] = iC, nD[462] = ah, nD[463] = iW, nD[464] = oE, nD[465] = iI, nD[466] = io, nD[467] = is, nD[468] = a0, nD[469] = nX, nD[470] = iS, nD[471] = al, nD[472] = e9, nD[473] = tn, nD[474] = ta, nD[475] = tr, nD[476] = ts, nD[477] = to, nD[478] = ti, nD[479] = tl, nD[480] = td, nD[481] = tp, nD[482] = tg, nD[483] = tf, nD[484] = tv, nD[485] = ty, nD[486] = tb, nD[487] = tx, nD[488] = tC, nD[489] = tS, nD[490] = tE, nD[491] = tk, nD[492] = tM, nD[493] = tR, nD[494] = tN, nD[495] = tO, nD[496] = tV
            } else e9 = nD[472], tn = nD[473], ta = nD[474], tr = nD[475], ts = nD[476], to = nD[477], ti = nD[478], tl = nD[479], td = nD[480], tp = nD[481], tg = nD[482], tf = nD[483], tv = nD[484], ty = nD[485], tb = nD[486], tx = nD[487], tC = nD[488], tS = nD[489], tE = nD[490], tk = nD[491], tM = nD[492], tR = nD[493], tN = nD[494], tO = nD[495], tV = nD[496];
            if (td !== Symbol.for("react.early_return_sentinel")) return td;
            nD[720] !== e9 || nD[721] !== tp || nD[722] !== tg || nD[723] !== tf || nD[724] !== tv || nD[725] !== ty ? (tY = (0, a.jsxs)(e9, {
                floatingPanelWidth: tp,
                header: tg,
                banner: tf,
                children: [tv, ty]
            }), nD[720] = e9, nD[721] = tp, nD[722] = tg, nD[723] = tf, nD[724] = tv, nD[725] = ty, nD[726] = tY) : tY = nD[726], nD[727] !== tn || nD[728] !== tY || nD[729] !== tb || nD[730] !== tx || nD[731] !== tC || nD[732] !== tS || nD[733] !== tE || nD[734] !== tk ? (t0 = (0, a.jsx)(tn, {
                conversationId: tb,
                conversationOrigin: tx,
                disabled: tC,
                isTemporaryChat: tS,
                projectId: tE,
                requiresGizmoId: tk,
                children: tY
            }), nD[727] = tn, nD[728] = tY, nD[729] = tb, nD[730] = tx, nD[731] = tC, nD[732] = tS, nD[733] = tE, nD[734] = tk, nD[735] = t0) : t0 = nD[735], nD[736] !== ta || nD[737] !== tr || nD[738] !== ts || nD[739] !== to || nD[740] !== ti || nD[741] !== tl || nD[742] !== t0 || nD[743] !== tM || nD[744] !== tR || nD[745] !== tN || nD[746] !== tO || nD[747] !== tV ? (t4 = (0, a.jsxs)(ta, {
                children: [tM, tR, tN, tO, tV, tr, ts, to, ti, tl, t0]
            }), nD[736] = ta, nD[737] = tr, nD[738] = ts, nD[739] = to, nD[740] = ti, nD[741] = tl, nD[742] = t0, nD[743] = tM, nD[744] = tR, nD[745] = tN, nD[746] = tO, nD[747] = tV, nD[748] = t4) : t4 = nD[748];
            let iX = t4,
                iJ = !au && !sa,
                iZ = aI || !r2.isFetchedAfterMount || r2.isFetching || r3 ? null : r2.error,
                i0 = id ? r2.error : null,
                i1 = null == sn && null == r7 ? null : su,
                i2 = !su && !ic;
            return nD[749] !== aN || nD[750] !== aE || nD[751] !== n2 ? (t5 = {
                conversationId: aE,
                composer: aN,
                sharedConversationId: n2
            }, nD[749] = aN, nD[750] = aE, nD[751] = n2, nD[752] = t5) : t5 = nD[752], nD[753] !== iX || nD[754] !== t5 ? (t6 = (0, a.jsx)(nH.a, {
                value: t5,
                children: iX
            }), nD[753] = iX, nD[754] = t5, nD[755] = t6) : t6 = nD[755], nD[756] !== i2 || nD[757] !== t6 ? (ne = (0, a.jsx)(_.a, {
                enabled: i2,
                children: t6
            }), nD[756] = i2, nD[757] = t6, nD[758] = ne) : ne = nD[758], nD[759] !== iu || nD[760] !== aV || nD[761] !== iJ || nD[762] !== iZ || nD[763] !== i0 || nD[764] !== i1 || nD[765] !== ne ? (nB = (0, a.jsx)(ee.a, {
                showChatFallback: iJ,
                conversationId: aV,
                error: iZ,
                loadError: i0,
                canRetry: iu,
                isWorkConversation: i1,
                children: ne
            }), nD[759] = iu, nD[760] = aV, nD[761] = iJ, nD[762] = iZ, nD[763] = i0, nD[764] = i1, nD[765] = ne, nD[766] = nB) : nB = nD[766], nB
        }

        function o7(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function o8(e) {
            return "user" === e.author.role
        }

        function o9(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function ie(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function it(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function ia(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }

        function ir(e) {
            let t, n, s, o, c, u, h, p, g, f, v, x, w, _, j, I, S, T, P, A, E, k, M, N, O, z, G, L, D = (0, r.c)(235),
                {
                    ref: W,
                    printTitle: q,
                    trackReadState: U,
                    trackShownImpressions: K,
                    composerRef: V,
                    workspace: Q,
                    shouldBlockMcpApps: Y,
                    contentX: $,
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
                    isChatConversation: em,
                    customGptId: ep,
                    conversationLoadingLabel: eg,
                    entries: ef,
                    errorMessage: ev,
                    hasLoadError: eb,
                    onRetryLoad: ex,
                    hasRenderableTurns: eC,
                    isComposerDisabled: ew,
                    readOnlyPlaceholder: e_,
                    moreDetailsEnabled: ej,
                    isConversationEmpty: eS,
                    showEmptyState: eT,
                    isConversationFetching: eP,
                    isConversationLoading: eA,
                    isSharedConversation: eE,
                    isSubmitDisabled: ek,
                    isTemporaryChat: eM,
                    isTurnActive: eR,
                    isWorkConversation: eN,
                    onboardingPrelude: eG,
                    scrollStateConversationId: eF,
                    initialResponsePlacementKey: eL,
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
                eJ = void 0 === eT || eT,
                eZ = (0, m.y)(B.a),
                e1 = (0, m.z)(null),
                e2 = (0, m.x)(eI.f, (0, y.useContext)(R.a)),
                e3 = (0, m.z)(tQ.a),
                e4 = (0, m.x)(na.a, J),
                e6 = Q?.fullscreenContent != null ? "content" : "workspace",
                e7 = (0, X.a)(ei ? "embedded" : e6),
                e8 = (0, m.z)(sJ.a),
                e9 = eq && e8?.source.turnContext.conversationId !== ee,
                te = "floating" === e7.placement,
                [tt, tn] = (0, y.useState)(!1),
                ta = Q?.fullscreenContent != null || te && tt && !e7.isHidden && !eo ? "floating" : "main",
                tr = (0, m.z)(sU.h),
                ts = em && null == eD && null == e2 && null == eU,
                to = !eA && !eR && !eb && eS && !eC,
                tl = (0, m.x)(F.i, J),
                tc = eJ && ts && to && null == tl && !e4 && !te,
                td = null == ep ? "centered-home" : "home",
                tu = eJ && !e4 && (!ts || !eS),
                th = (0, y.useRef)(null),
                [tm, tf] = (0, y.useState)(null),
                [tw, t_] = (0, y.useState)(!1);
            D[0] !== ef || D[1] !== tm ? (t = () => ({
                async scrollToMessage(e) {
                    let t = ef.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != tm && await tm.scrollToKey(t.turnKey, void 0, {
                        align: "top"
                    })
                }
            }), n = [ef, tm], D[0] = ef, D[1] = tm, D[2] = t, D[3] = n) : (t = D[2], n = D[3]), (0, y.useImperativeHandle)(W, t, n), D[4] !== ef ? (s = () => ef, D[4] = ef, D[5] = s) : s = D[5];
            let tj = (0, nn.a)(s);
            D[6] !== ef || D[7] !== tm?.scrollToKey ? (o = e => {
                let t = d()(ef, ii);
                return (0, tC.a)(tm?.scrollToKey, t?.turnKey, e)
            }, D[6] = ef, D[7] = tm?.scrollToKey, D[8] = o) : o = D[8];
            let tI = o,
                [tS, tT] = (0, y.useState)(null);
            D[9] !== ei || D[10] !== eZ || D[11] !== eF ? (c = () => ei ? 0 : eZ.get(t6.a, eF), D[9] = ei, D[10] = eZ, D[11] = eF, D[12] = c) : c = D[12];
            let [tP, tA] = (0, y.useState)(c);
            D[13] !== ei || D[14] !== tS || D[15] !== eZ || D[16] !== eF ? (u = e => {
                ei || eZ.set(t6.a, eF, (0, t4.a)(e, tS?.getHeightPx() ?? 0))
            }, D[13] = ei, D[14] = tS, D[15] = eZ, D[16] = eF, D[17] = u) : u = D[17];
            let tk = (0, nn.a)(u);
            D[18] !== ef || D[19] !== tm ? (h = (e, t) => (0, tg.c)(tm, ef.find(t => {
                let {
                    id: n
                } = t;
                return n === e
            })?.turnKey, t), D[18] = ef, D[19] = tm, D[20] = h) : h = D[20];
            let tM = (0, nn.a)(h);
            D[21] !== J || D[22] !== ef || D[23] !== tm ? (p = async e => {
                let t = ef.find(t => {
                    let {
                        turn: n
                    } = t;
                    return n.messageIds.includes(e)
                });
                null != t && null != tm && await tm.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${J}-${e}`)}"]`), {
                    align: "center"
                })
            }, D[21] = J, D[22] = ef, D[23] = tm, D[24] = p) : p = D[24];
            let tR = (0, nn.a)(p);
            D[25] === Symbol.for("react.memo_cache_sentinel") ? (g = e => (0, tg.a)(th.current, e), D[25] = g) : g = D[25];
            let tO = (0, nn.a)(g),
                tz = `chatgpt:${J}`;
            if (D[26] !== J || D[27] !== tj || D[28] !== tO || D[29] !== eM || D[30] !== eZ || D[31] !== tM || D[32] !== eD || D[33] !== e2 || D[34] !== tz) {
                let e;
                D[36] !== J || D[37] !== eM || D[38] !== eZ || D[39] !== eD || D[40] !== e2 ? (e = async e => {
                    let t = eZ.get(F.j, J);
                    !eM && null == eD && null == e2 && null != t && eZ.get(ez.b) > 0 && await (0, eO.a)(eZ, t, e)
                }, D[36] = J, D[37] = eM, D[38] = eZ, D[39] = eD, D[40] = e2, D[41] = e) : e = D[41], f = function(e) {
                    let {
                        getTurns: t,
                        routeContextId: n,
                        scrollAdapter: a,
                        ensureHistory: r
                    } = e, s = (0, ad.a)({
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
                                            unitId: (0, nV.a)("user", t),
                                            text: n
                                        }]
                                    }
                                    if ("assistant-message" === e.type) {
                                        let n = (0, ah.a)(e.content, ey.b),
                                            a = [],
                                            r = "";
                                        for (; e.content.includes(r);) r += "";
                                        let s = (0, ac.a)(function e(t, n, a, r) {
                                                let s = "",
                                                    o = 0;
                                                for (let i of t) {
                                                    let t = n.indexOf(i.raw, o); - 1 !== t && (s += n.slice(o, t), s += function(t, n, a) {
                                                        var r, s;
                                                        if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                        if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                            if (e.name === ey.a) {
                                                                let n = (0, am.a)(e.attributes),
                                                                    a = (0, am.b)(e.attributes),
                                                                    r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, ey.l)(e) === a);
                                                                if (null == r) return "";
                                                                let s = (0, ey.i)(r);
                                                                return "hidden" === s || "block" === s ? "" : (0, ey.j)(r) ?? ""
                                                            }
                                                            return e.name === al.a ? (0, au.a)(e.attributes, "label") ?? "" : e.name === al.b || e.name === al.c ? "" : e.name === ai.a ? e.text ?? "" : null
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
                                            unitId: (0, nV.a)("assistant", t),
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
                    routeContextId: tz,
                    scrollAdapter: {
                        scrollToTurn: tM,
                        getTurnContainer: tO
                    },
                    ensureHistory: e
                }), D[26] = J, D[27] = tj, D[28] = tO, D[29] = eM, D[30] = eZ, D[31] = tM, D[32] = eD, D[33] = e2, D[34] = tz, D[35] = f
            } else f = D[35];
            let tG = f;
            D[42] !== tG.contextId ? (v = {
                containerRef: th,
                contextId: tG.contextId
            }, D[42] = tG.contextId, D[43] = v) : v = D[43], (0, tb.a)(v);
            let tF = e9 && null == eU,
                tB = e3 && tF && !te,
                tL = (0, tE.a)();
            D[44] !== J || D[45] !== eC || D[46] !== es || D[47] !== Z || D[48] !== tL ? (x = {
                conversationId: J,
                sectionIndex: Z,
                hasRenderableTurns: eC,
                isCoveredByFloatingPanel: es,
                shouldReduceMotion: tL,
                containerRef: th
            }, D[44] = J, D[45] = eC, D[46] = es, D[47] = Z, D[48] = tL, D[49] = x) : x = D[49];
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
                        h = (0, on.a)(0);
                    s[0] !== o || s[1] !== i ? (t = {
                        conversationId: o,
                        sectionIndex: i
                    }, s[0] = o, s[1] = i, s[2] = t) : t = s[2];
                    let m = (0, y.useRef)(t);
                    return s[3] !== u || s[4] !== o || s[5] !== l || s[6] !== c || s[7] !== i || s[8] !== h || s[9] !== d ? (n = () => {
                        let e;
                        if (!l) return;
                        let t = m.current;
                        m.current = {
                            conversationId: o,
                            sectionIndex: i
                        };
                        let n = u.current;
                        if (null == n || d || c || t.conversationId !== o || null == t.sectionIndex || null == i || t.sectionIndex === i) return;
                        let a = Math.sign(i - t.sectionIndex),
                            r = () => {
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(os) && 0 !== n.clientWidth && (s.disconnect(), h.set(a * n.clientWidth), e = (0, oa.a)(h, 0, {
                                    duration: .3,
                                    ease: or.d
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
                    }, a = [o, i, l, d, c, h, u], s[3] = u, s[4] = o, s[5] = l, s[6] = c, s[7] = i, s[8] = h, s[9] = d, s[10] = n, s[11] = a) : (n = s[10], a = s[11]), (0, y.useLayoutEffect)(n, a), h
                }(x),
                tW = tF && te,
                [tH, tq] = (0, y.useState)(null),
                [tU, tK] = (0, y.useState)(null),
                [t$, tX] = (0, y.useState)(null),
                tJ = eE && tF && !ew && !te && !e3,
                [tZ, t1] = (0, y.useState)(null);
            D[50] !== eQ || D[51] !== J || D[52] !== eC || D[53] !== eM || D[54] !== eH || D[55] !== eq ? (w = eq && !eQ ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(ti.BrowserComposerDisclaimer, {
                    supportsMessageDisclosures: !0,
                    conversationId: J,
                    hasUserMessage: eC,
                    isTemporaryChat: eM,
                    regulatedConnectorKindOverride: eH
                })
            }) : void 0, D[50] = eQ, D[51] = J, D[52] = eC, D[53] = eM, D[54] = eH, D[55] = eq, D[56] = w) : w = D[56];
            let t2 = w;
            D[57] !== J || D[58] !== ev || D[59] !== eC || D[60] !== ew || D[61] !== ek || D[62] !== eN || D[63] !== eq || D[64] !== eK ? (_ = eC ? null : (0, a.jsx)(ar.a, {
                conversationId: J,
                errorMessage: ev,
                isWorkConversation: eN,
                showPendingLoadingMessage: eK,
                showRequestUserInputStatus: eq && !ew && !ek
            }), D[57] = J, D[58] = ev, D[59] = eC, D[60] = ew, D[61] = ek, D[62] = eN, D[63] = eq, D[64] = eK, D[65] = _) : _ = D[65];
            let t7 = _;
            D[66] !== J || D[67] !== eN || D[68] !== eD || D[69] !== e2 ? (j = eN && null == eD && null == e2 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(e5, {
                    conversationId: J
                }, J)
            }) : null, D[66] = J, D[67] = eN, D[68] = eD, D[69] = e2, D[70] = j) : j = D[70];
            let t8 = j;
            D[71] !== eU || D[72] !== t8 ? (I = null != eU ? (0, a.jsxs)(a.Fragment, {
                children: [t8, eU]
            }) : null, D[71] = eU, D[72] = t8, D[73] = I) : I = D[73];
            let t9 = I;
            D[74] !== en || D[75] !== t9 || D[76] !== eQ || D[77] !== ee || D[78] !== et || D[79] !== V || D[80] !== J || D[81] !== ed || D[82] !== t2 || D[83] !== t7 || D[84] !== ef || D[85] !== t8 || D[86] !== tH || D[87] !== eV || D[88] !== eb || D[89] !== eC || D[90] !== el || D[91] !== e3 || D[92] !== ew || D[93] !== eA || D[94] !== es || D[95] !== eo || D[96] !== te || D[97] !== tr || D[98] !== ei || D[99] !== eE || D[100] !== ek || D[101] !== eM || D[102] !== eN || D[103] !== eX || D[104] !== e_ || D[105] !== tJ || D[106] !== er || D[107] !== tS || D[108] !== tI || D[109] !== e7.isHidden || D[110] !== eD || D[111] !== e2 || D[112] !== e9 || D[113] !== ec || D[114] !== tW || D[115] !== tB || D[116] !== U || D[117] !== K || D[118] !== ta || D[119] !== eY || D[120] !== Q ? (S = t9 ?? (e9 ? (0, a.jsxs)(rM.a.Provider, {
                value: ef.at(-1) ?? null,
                children: [eo || te ? null : (0, a.jsx)(tx.a, {
                    onNavigate: tI
                }, J), te ? null : et, (0, a.jsx)(ic, {
                    requiredSystemHints: er,
                    composerRef: V,
                    workspace: Q,
                    isInlinePreview: ei,
                    hideModelPicker: el,
                    showFilePicker: ec,
                    disableAutoFocus: ed,
                    conversationId: ee,
                    isImageEditComposer: tr,
                    disabled: ew,
                    readOnlyPlaceholder: e_,
                    awaitingGptContinuation: eQ,
                    headerContent: t8,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tJ ? (0, a.jsx)("div", {
                            ref: tX,
                            className: "empty:hidden"
                        }) : null, en, !eA && !eb && eC && !eQ && eY, e3 ? null : eV, tW && t7]
                    }),
                    isFullscreenComposer: te,
                    isHidden: e7.isHidden,
                    trackReadState: U && !es,
                    trackShownImpressions: K && !es,
                    isSharedConversation: eE,
                    isSubmitDisabled: ek,
                    followupPortalTarget: tH,
                    takeoverDisclaimerRef: t1,
                    showConversationFollowups: null == eD && null == e2 && !eM && !eN && !te,
                    isTemporaryChat: eM,
                    isWorkConversation: eN,
                    responseSpacerState: tS,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(aO, {
                            entries: ef,
                            historyLoader: eM || null != eD || null != e2 ? null : (0, a.jsx)(s3.a, {
                                conversationId: J
                            }),
                            isVisible: t,
                            rendersWidgets: "floating" === ta,
                            onVisibilityChange: tn
                        }, J)
                    },
                    showVoiceStage: !tB,
                    voiceDisclaimer: e3 && !tB ? t2 : void 0,
                    onSubmitAccepted: e => {
                        tA(0), eX?.(e)
                    }
                }, `${ee}:${tr?"image-edit":"chat"}`)]
            }) : t8), D[74] = en, D[75] = t9, D[76] = eQ, D[77] = ee, D[78] = et, D[79] = V, D[80] = J, D[81] = ed, D[82] = t2, D[83] = t7, D[84] = ef, D[85] = t8, D[86] = tH, D[87] = eV, D[88] = eb, D[89] = eC, D[90] = el, D[91] = e3, D[92] = ew, D[93] = eA, D[94] = es, D[95] = eo, D[96] = te, D[97] = tr, D[98] = ei, D[99] = eE, D[100] = ek, D[101] = eM, D[102] = eN, D[103] = eX, D[104] = e_, D[105] = tJ, D[106] = er, D[107] = tS, D[108] = tI, D[109] = e7.isHidden, D[110] = eD, D[111] = e2, D[112] = e9, D[113] = ec, D[114] = tW, D[115] = tB, D[116] = U, D[117] = K, D[118] = ta, D[119] = eY, D[120] = Q, D[121] = S) : S = D[121];
            let ne = S;
            D[122] !== J || D[123] !== es || D[124] !== ei || D[125] !== e1 || D[126] !== eD || D[127] !== e2 ? (T = void 0, D[122] = J, D[123] = es, D[124] = ei, D[125] = e1, D[126] = eD, D[127] = e2, D[128] = T) : T = D[128];
            let nt = T,
                nr = es || void 0;
            D[129] === Symbol.for("react.memo_cache_sentinel") ? (P = null, D[129] = P) : P = D[129], D[130] !== J || D[131] !== es || D[132] !== te || D[133] !== U ? (A = !U || te || es ? null : (0, a.jsx)(rk.a, {
                conversationId: J
            }), D[130] = J, D[131] = es, D[132] = te, D[133] = U, D[134] = A) : A = D[134], D[135] !== eU || D[136] !== J || D[137] !== ei || D[138] !== eD || D[139] !== e2 ? (E = ei || null != eD || null != e2 || null != eU ? null : (0, a.jsx)(ri, {
                conversationId: J
            }, J), D[135] = eU, D[136] = J, D[137] = ei, D[138] = eD, D[139] = e2, D[140] = E) : E = D[140], D[141] !== J || D[142] !== eA || D[143] !== eM || D[144] !== eD || D[145] !== e2 ? (k = eA || eM || null != eD || null != e2 ? null : (0, a.jsx)(s4, {
                conversationId: J
            }), D[141] = J, D[142] = eA, D[143] = eM, D[144] = eD, D[145] = e2, D[146] = k) : k = D[146], D[147] !== J || D[148] !== ef || D[149] !== tw || D[150] !== eP || D[151] !== eA || D[152] !== ei || D[153] !== tI || D[154] !== eD || D[155] !== e2 || D[156] !== tm ? (M = ei || eA || null != eD || null != e2 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(H, {
                    conversationId: J,
                    entries: ef,
                    turnListApi: tm
                }), (0, a.jsx)(t0.a, {
                    ready: !eP && tw && null != tm && ef.length > 0,
                    onNavigate: tI
                })]
            }), D[147] = J, D[148] = ef, D[149] = tw, D[150] = eP, D[151] = eA, D[152] = ei, D[153] = tI, D[154] = eD, D[155] = e2, D[156] = tm, D[157] = M) : M = D[157], D[158] !== eU || D[159] !== tc || D[160] !== ee || D[161] !== $ || D[162] !== tl || D[163] !== J || D[164] !== eg || D[165] !== tG || D[166] !== t2 || D[167] !== t7 || D[168] !== ef || D[169] !== ne || D[170] !== tk || D[171] !== eb || D[172] !== eC || D[173] !== ea || D[174] !== td || D[175] !== eL || D[176] !== tP || D[177] !== e3 || D[178] !== e4 || D[179] !== ew || D[180] !== eP || D[181] !== eA || D[182] !== es || D[183] !== eo || D[184] !== te || D[185] !== ei || D[186] !== eE || D[187] !== eM || D[188] !== eR || D[189] !== eN || D[190] !== ej || D[191] !== nt || D[192] !== e$ || D[193] !== ex || D[194] !== eG || D[195] !== q || D[196] !== t$ || D[197] !== tU || D[198] !== tJ || D[199] !== tS || D[200] !== e7.isChatPaneHidden || D[201] !== eZ || D[202] !== eh || D[203] !== tR || D[204] !== tD || D[205] !== eD || D[206] !== e2 || D[207] !== Y || D[208] !== tL || D[209] !== eq || D[210] !== e9 || D[211] !== tu || D[212] !== tF || D[213] !== tW || D[214] !== tB || D[215] !== tZ || D[216] !== eu || D[217] !== tm || D[218] !== Q ? (N = Q?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!Y && Q.fullscreenContent, ne]
            }) : (0, a.jsxs)(t5.a, {
                viewportOverlay: eo || ei || eN || null != eD || null != e2 || null != eU || es || te ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(rD, {
                        conversationId: J
                    }, J)
                }),
                hideTranscript: eo,
                active: !eA && (!eC || null != tm),
                presentation: eu ?? (ei ? "compact" : "default"),
                contentX: $,
                composerFade: !1,
                supportsComposerExpansion: tF && !te && null == Q,
                footerPlacement: tc ? td : "bottom",
                initialOffset: tP,
                scrollOrigin: eh,
                onScroll: tk,
                scrollToBottomButton: !e9 || te || tB ? void 0 : {
                    isWorking: eR
                },
                threadEndContent: e3 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tq,
                        className: t3.a
                    }), null == tZ ? t2 : (0, b.createPortal)(t2, tZ)]
                }),
                footerLeadingContent: tB ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: t3.a,
                            children: (0, a.jsx)(tV.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: t2
                    })]
                }) : nt,
                footer: ne,
                children: [ei || eA || null != eD ? null : (0, a.jsx)(n7, {
                    conversationId: J,
                    entries: ef,
                    isConversationFetching: eP,
                    turnListApi: tm
                }), (0, a.jsxs)(l.a.div, {
                    ref: th,
                    style: {
                        x: tD
                    },
                    "data-chatgpt-conversation-selection-target": J,
                    className: (0, i.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", ei && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, ty.K)(eZ, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, ty.K)(eZ, "conversation")
                    },
                    children: [(0, a.jsxs)(y.Suspense, {
                        fallback: (0, a.jsx)(tN.LoadingPage, {
                            debugName: "ChatGptConversationPage",
                            fillParent: !0
                        }),
                        children: [ei || eA ? null : (0, a.jsx)(tv.a, {
                            conversationSource: tG
                        }), es || e7.isChatPaneHidden || eM || null != eD || null != e2 ? null : ea ?? (0, a.jsx)(s3.a, {
                            conversationId: J
                        }), (0, a.jsx)(o$.b, {
                            conversationId: J
                        }), (null != eD || null != e2) && eC ? (0, a.jsx)(oE, {
                            sharedConversationId: eD
                        }) : null, null == eG ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: t3.a,
                                children: eG
                            })
                        }), null == tl || eA ? null : (0, a.jsx)(nB.a, {
                            conversationId: J,
                            branchSource: {
                                conversationId: tl.metadata.source_conversation_id,
                                title: tl.metadata.source_conversation_title,
                                gizmoId: tl.metadata.source_conversation_gizmo_id,
                                ownerId: tl.metadata.source_conversation_owner_id
                            }
                        }), eb ? (0, a.jsx)(e0, {
                            isFetching: eP,
                            isSharedConversation: eE,
                            onRetry: ex
                        }) : eA ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": eg,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(tN.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : eC ? (0, a.jsxs)(sK.a, {
                            value: tR,
                            children: [ei || es ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eM || null != eD || null != e2 ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(eW, {
                                        conversationId: J
                                    })
                                }), (0, a.jsx)(eB, {
                                    entries: ef,
                                    title: q,
                                    TurnRowComponent: aN
                                })]
                            }), (0, a.jsx)(s9.a, {
                                enabled: tJ,
                                aboveComposer: t$,
                                belowMessage: tU,
                                children: (0, a.jsx)(a$, {
                                    conversationId: J,
                                    entries: ef,
                                    onApiChange: tf,
                                    onVisibleContentReady: () => t_(!0),
                                    responseSpacerState: tS
                                })
                            }), tJ ? (0, a.jsx)("div", {
                                ref: tK,
                                className: "empty:hidden"
                            }) : null]
                        }) : tu && null == tl && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            children: (0, a.jsx)(C.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation",
                                description: "Empty state when a ChatGPT conversation has no user or assistant text messages"
                            })
                        }), !tW && t7, (0, a.jsx)(rs.a, {
                            conversationId: ee,
                            isWorkConversation: eN
                        }), eq && !ew ? (0, a.jsx)(ou, {
                            conversationId: J,
                            moreDetailsEnabled: ej,
                            onAddSelectedText: e$
                        }) : null]
                    }), ei ? null : (0, a.jsx)(ao.a, {
                        initialPlacementKey: eL,
                        isActiveVoiceConversation: e3 && e4,
                        isLoadingHistory: eA,
                        latestUserTurnKey: ef.findLast(is)?.turnKey,
                        onResponseSpacerStateChange: tT
                    }), tB ? (0, a.jsx)(l.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tL ? tY.c : tY.b
                    }) : null]
                })]
            }), D[158] = eU, D[159] = tc, D[160] = ee, D[161] = $, D[162] = tl, D[163] = J, D[164] = eg, D[165] = tG, D[166] = t2, D[167] = t7, D[168] = ef, D[169] = ne, D[170] = tk, D[171] = eb, D[172] = eC, D[173] = ea, D[174] = td, D[175] = eL, D[176] = tP, D[177] = e3, D[178] = e4, D[179] = ew, D[180] = eP, D[181] = eA, D[182] = es, D[183] = eo, D[184] = te, D[185] = ei, D[186] = eE, D[187] = eM, D[188] = eR, D[189] = eN, D[190] = ej, D[191] = nt, D[192] = e$, D[193] = ex, D[194] = eG, D[195] = q, D[196] = t$, D[197] = tU, D[198] = tJ, D[199] = tS, D[200] = e7.isChatPaneHidden, D[201] = eZ, D[202] = eh, D[203] = tR, D[204] = tD, D[205] = eD, D[206] = e2, D[207] = Y, D[208] = tL, D[209] = eq, D[210] = e9, D[211] = tu, D[212] = tF, D[213] = tW, D[214] = tB, D[215] = tZ, D[216] = eu, D[217] = tm, D[218] = Q, D[219] = N) : N = D[219], D[220] !== es || D[221] !== nr || D[222] !== A || D[223] !== E || D[224] !== k || D[225] !== M || D[226] !== N ? (O = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": nr,
                inert: es,
                children: [P, A, E, k, M, N]
            }), D[220] = es, D[221] = nr, D[222] = A, D[223] = E, D[224] = k, D[225] = M, D[226] = N, D[227] = O) : O = D[227];
            let ns = O,
                no = "main" === ta;
            return D[228] !== no ? (z = {
                presentation: "main",
                rendersWidgets: no
            }, D[228] = no, D[229] = z) : z = D[229], D[230] !== ns ? (G = (0, a.jsx)(tp.a, {
                children: ns
            }), D[230] = ns, D[231] = G) : G = D[231], D[232] !== z || D[233] !== G ? (L = (0, a.jsx)(m.b, {
                scope: aI,
                value: z,
                children: G
            }), D[232] = z, D[233] = G, D[234] = L) : L = D[234], L
        }

        function is(e) {
            let {
                turn: t
            } = e;
            return t.items.some(io)
        }

        function io(e) {
            return "user-message" === e.type
        }

        function ii(e) {
            let {
                turn: t
            } = e;
            return t.items.some(il)
        }

        function il(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function ic(e) {
            let t, n, s, o = (0, r.c)(11),
                i = (0, y.useContext)(td.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return o[0] !== e ? (t = (0, a.jsx)(id, {
                    ...e
                }), o[0] = e, o[1] = t) : t = o[1], t
            }
            o[2] !== e.conversationId || o[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, o[2] = e.conversationId, o[3] = e.isImageEditComposer, o[4] = t) : t = o[4];
            let l = !e.isWorkConversation;
            return o[5] !== e ? (n = t => (0, a.jsx)(id, {
                ...e,
                initialController: t
            }), o[5] = e, o[6] = n) : n = o[6], o[7] !== t || o[8] !== l || o[9] !== n ? (s = (0, a.jsx)(sq, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), o[7] = t, o[8] = l, o[9] = n, o[10] = s) : s = o[10], s
        }

        function id(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g, f, v, b, C, _, j, I, S = (0, r.c)(83),
                {
                    composerRef: T,
                    initialController: P,
                    ...A
                } = e,
                R = (0, m.y)(B.a),
                N = (0, m.x)(M.d, A.isTemporaryChat),
                {
                    conversationId: O,
                    isFullscreenComposer: z
                } = A,
                G = (0, x.a)(),
                {
                    state: L
                } = (0, w.Y)(),
                D = (0, m.x)(n9, O),
                W = (0, m.x)(F.R, O),
                H = !(!A.disabled && !A.isSharedConversation && !A.isWorkConversation && !A.isTemporaryChat && !A.isImageEditComposer && (0, te.a)(W)) ? null : W,
                q = (0, m.x)(null == A.requiredSystemHints ? to : null, H);
            S[0] !== q || S[1] !== A.requiredSystemHints ? (t = A.requiredSystemHints ?? (null == q ? void 0 : [q]), S[0] = q, S[1] = A.requiredSystemHints, S[2] = t) : t = S[2];
            let U = t;
            S[3] !== q || S[4] !== O || S[5] !== R ? (n = () => {
                if (null != q) {
                    let e, t;
                    return e = (0, tt.b)(R, O, [q]), t = (0, e9.h)(R, {
                        draftKey: O,
                        isTemporaryChat: !1
                    }), () => {
                        if (e(), R.get(tt.a, O).includes(q)) return;
                        let n = R.get(e8.v, O).filter(e => e !== q && e !== `plugin:${e7.d}`);
                        (0, e8.U)(R, O, n, t)
                    }
                }
            }, s = [R, O, q], S[3] = q, S[4] = O, S[5] = R, S[6] = n, S[7] = s) : (n = S[6], s = S[7]), (0, y.useEffect)(n, s);
            let K = (0, m.x)(nu.c, O);
            S[8] !== K || S[9] !== A.isSharedConversation || S[10] !== A.isWorkConversation || S[11] !== W ? (o = !A.isSharedConversation && !A.isWorkConversation && !(0, te.a)(W) && !K, S[8] = K, S[9] = A.isSharedConversation, S[10] = A.isWorkConversation, S[11] = W, S[12] = o) : o = S[12];
            let V = o,
                Q = V && !A.disabled && !A.isSubmitDisabled && !A.isImageEditComposer,
                Y = V ? D : void 0;
            S[13] !== O || S[14] !== A.isImageEditComposer ? (i = A.isImageEditComposer ? {
                conversationId: O,
                surface: "image-edit"
            } : O, S[13] = O, S[14] = A.isImageEditComposer, S[15] = i) : i = S[15];
            let X = i;
            S[16] !== O || S[17] !== X || S[18] !== P ? (l = {
                composerController: P,
                conversationId: O,
                draftKey: X
            }, S[16] = O, S[17] = X, S[18] = P, S[19] = l) : l = S[19];
            let J = (0, oJ.a)(l),
                Z = (0, s2.a)(J, O, !A.isInlinePreview && !A.disabled, A.workspace && "tpp"),
                ee = (0, y.useContext)(td.a),
                et = (0, y.useRef)(!1);
            S[20] !== X || S[21] !== ee || S[22] !== P || S[23] !== A.isTemporaryChat || S[24] !== R ? (c = e => {
                null == e || null == P || et.current || (et.current = !0, (0, e8.V)(R, X, P.getPersistedText(), {
                    isTemporaryChat: A.isTemporaryChat
                }), ee?.onAdopt())
            }, S[20] = X, S[21] = ee, S[22] = P, S[23] = A.isTemporaryChat, S[24] = R, S[25] = c) : c = S[25];
            let en = (0, nn.a)(c);
            S[26] !== en || S[27] !== T ? (d = (0, ne.a)(T, en), S[26] = en, S[27] = T, S[28] = d) : d = S[28];
            let ea = d,
                er = (0, y.useContext)(rM.a),
                es = (0, m.w)(sB.a, O),
                eo = (0, m.x)(F.cb, O),
                ei = (0, m.x)(F._, O),
                el = (0, m.x)(e8.i, O);
            S[29] !== ei ? (u = (0, F.zb)(ei), S[29] = ei, S[30] = u) : u = S[30];
            let ec = u,
                ed = (0, m.z)(E.l.activeTab$);
            if (S[31] !== ed || S[32] !== z || S[33] !== ec || S[34] !== er) {
                let e = er?.turn.items.flatMap(ip);
                h = z && ed?.tabType.kind === tM.a && "generatedImages" in ed.props && null != ed.props.generatedImages && !ec && null != er && "in_progress" !== er.turn.status && !er.turn.hasPendingAssistantReply && !er.showPendingLoadingMessage && !e?.some(im) && (null != er.errorMessage || e?.some(ih)) ? er.turn.messageIds.at(-1) ?? er.turnKey : null, S[31] = ed, S[32] = z, S[33] = ec, S[34] = er, S[35] = h
            } else h = S[35];
            let eu = h,
                eh = (0, y.useRef)(null);
            S[36] !== eu || S[37] !== R ? (p = () => {
                null != eu && eu !== eh.current && (eh.current = eu, R.set(tS.a, "expanded"))
            }, g = [eu, R], S[36] = eu, S[37] = R, S[38] = p, S[39] = g) : (p = S[38], g = S[39]), (0, y.useEffect)(p, g);
            let em = (0, m.w)(s1.a, z ? O : null);
            S[40] !== q || S[41] !== H || S[42] !== J || S[43] !== O || S[44] !== Q || S[45] !== X || S[46] !== Z || S[47] !== G || S[48] !== z || S[49] !== ea || S[50] !== N || S[51] !== A || S[52] !== U || S[53] !== R || S[54] !== Y || S[55] !== L?.libraryFileCreation || S[56] !== W ? (f = e => (0, a.jsxs)(tk.a, {
                children: [z && A.trackReadState && !e?.isHidden ? (0, a.jsx)(rk.a, {
                    conversationId: O,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, A.aboveComposerContent, (0, a.jsx)(tl.a, {
                    children: (0, a.jsx)(nD.a, {
                        ref: ea,
                        trackShownImpressions: A.trackShownImpressions && !A.isHidden && !e?.isHidden && !e?.isMinimized,
                        headerContent: A.headerContent,
                        imageSuggestionsEnabled: !A.disabled && !A.isSharedConversation && !A.isImageEditComposer,
                        allowBackgroundSubmit: A.isInlinePreview,
                        ...Z,
                        disableAutoFocus: A.disableAutoFocus,
                        conversationOrigin: null == A.workspace ? void 0 : "tpp",
                        mcpAppContext: A.workspace?.mcpAppContext,
                        onServerThreadIdChange: A.workspace?.onServerThreadIdChange,
                        followupPortalTarget: A.followupPortalTarget,
                        takeoverDisclaimerRef: A.takeoverDisclaimerRef,
                        showConversationFollowups: A.showConversationFollowups,
                        autoPrepare: !A.isSubmitDisabled && !A.isSharedConversation,
                        browserConversationId: (0, $.getThreadBrowserConversationId)(R) ?? O,
                        composerController: J,
                        conversationId: O,
                        requiredSystemHints: U,
                        hideSystemHints: null != A.requiredSystemHints,
                        getSubmissionGuard: null != q ? () => () => R.get(F.R, O) === W && R.get(to, H) === q : void 0,
                        draftKey: X,
                        onPromptChange: N,
                        selectedCustomGpt: Y,
                        targetGizmoId: Y?.id,
                        onCustomGptChange: Q ? e => {
                            R.set(n9, O, e)
                        } : void 0,
                        onCustomAgentSelected: Q ? () => {
                            R.set(n9, O, null)
                        } : void 0,
                        disableDraftPrepare: A.isSubmitDisabled || A.isSharedConversation,
                        disableSubmit: A.disabled || A.isSubmitDisabled,
                        voiceInputDisabled: A.disabled,
                        aboveComposerHeaderContent: A.voiceDisclaimer,
                        getExtraDeveloperInstructions: !A.isInlinePreview && L?.libraryFileCreation && !A.isTemporaryChat ? iu : void 0,
                        isTemporaryChat: A.isTemporaryChat,
                        placeholder: A.disabled && !1 !== A.readOnlyPlaceholder ? A.readOnlyPlaceholder ?? G.formatMessage(rH.a.readOnlyConversationPlaceholder) : void 0,
                        readOnly: A.disabled,
                        hideModelPicker: A.hideModelPicker,
                        modelPickerPending: A.isSubmitDisabled,
                        showFilePicker: A.showFilePicker && !A.disabled && !A.isSubmitDisabled,
                        showPendingFilePicker: A.showFilePicker && !A.disabled && A.isSubmitDisabled,
                        showVoiceStage: A.showVoiceStage,
                        onSubmitAccepted: t => {
                            e?.onSubmitStart(), A.responseSpacerState?.place(), A.onSubmitAccepted?.(t)
                        },
                        onSubmitError: A.responseSpacerState?.clear
                    })
                })]
            }), S[40] = q, S[41] = H, S[42] = J, S[43] = O, S[44] = Q, S[45] = X, S[46] = Z, S[47] = G, S[48] = z, S[49] = ea, S[50] = N, S[51] = A, S[52] = U, S[53] = R, S[54] = Y, S[55] = L?.libraryFileCreation, S[56] = W, S[57] = f) : f = S[57];
            let ep = f;
            S[58] !== R ? (v = () => {
                (0, ty.K)(R, "conversation")
            }, b = () => {
                (0, ty.K)(R, "conversation")
            }, S[58] = R, S[59] = v, S[60] = b) : (v = S[59], b = S[60]);
            let eg = !A.isInlinePreview && !A.disabled && !A.isSubmitDisabled;
            S[61] !== J || S[62] !== eg ? (C = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rz, {
                    composerController: J,
                    enabled: eg
                })
            }), S[61] = J, S[62] = eg, S[63] = C) : C = S[63];
            let ef = z ? "floating" : "pane",
                ev = A.disabled || A.awaitingGptContinuation,
                ey = null == er && !ec,
                eb = el || ec ? "loading" : "idle";
            return S[64] !== eb ? (_ = {
                type: eb,
                unread: !1
            }, S[64] = eb, S[65] = _) : _ = S[65], S[66] !== em || S[67] !== A.isHidden || S[68] !== A.renderTranscript || S[69] !== ep || S[70] !== es || S[71] !== ef || S[72] !== ev || S[73] !== ey || S[74] !== _ || S[75] !== eo ? (j = (0, a.jsx)(k.a, {
                notifications: em,
                isHidden: A.isHidden,
                placement: ef,
                responsePreview: es,
                forceExpanded: ev,
                composerOnly: ey,
                title: eo,
                statusState: _,
                renderTranscript: A.renderTranscript,
                children: ep
            }), S[66] = em, S[67] = A.isHidden, S[68] = A.renderTranscript, S[69] = ep, S[70] = es, S[71] = ef, S[72] = ev, S[73] = ey, S[74] = _, S[75] = eo, S[76] = j) : j = S[76], S[77] !== O || S[78] !== v || S[79] !== b || S[80] !== C || S[81] !== j ? (I = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": O,
                onMouseDownCapture: v,
                onFocusCapture: b,
                children: [C, j]
            }), S[77] = O, S[78] = v, S[79] = b, S[80] = C, S[81] = j, S[82] = I) : I = S[82], I
        }
        async function iu() {
            return [tR.a]
        }

        function ih(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function im(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function ip(e) {
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
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, h, m, p, g, f, v, y, b, x, C, w, _, j = (0, r.c)(59),
                    {
                        initialPlacementKey: I,
                        isActiveVoiceConversation: S,
                        isLoadingHistory: T,
                        latestUserTurnKey: P,
                        onResponseSpacerStateChange: A
                    } = e,
                    E = void 0 !== S && S,
                    k = void 0 !== T && T,
                    M = (0, o.k)();
                j[0] !== E || j[1] !== M ? (t = E && (0, o.f)(M, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), j[0] = E, j[1] = M, j[2] = t) : t = j[2];
                let R = t,
                    N = (0, s.useRef)(P),
                    O = (0, s.useRef)(k),
                    z = (0, s.useRef)(null),
                    G = (0, s.useRef)(null),
                    F = (0, c.b)();
                j[3] !== F ? (n = () => new l.a(F), j[3] = F, j[4] = n) : n = j[4];
                let [B] = (0, s.useState)(n), {
                    clear: L,
                    consumeGrowth: D,
                    getHeightPx: W,
                    place: H,
                    prepareThreadEndContent: q
                } = B, {
                    addScrollListener: U,
                    getScrollElement: K,
                    responseSpacerController: V
                } = F;
                j[5] !== L || j[6] !== F ? (u = () => {
                    L(), F.scrollToBottom()
                }, j[5] = L, j[6] = F, j[7] = u) : u = j[7];
                let Q = (0, d.a)(u);
                j[8] !== D || j[9] !== W || j[10] !== q || j[11] !== B.height || j[12] !== B.holdViewport || j[13] !== V || j[14] !== Q ? (h = () => V.register({
                    consumeGrowth: D,
                    getHeightPx: W,
                    holdViewport: B.holdViewport,
                    prepareThreadEndContent: q,
                    scrollToBottom: Q
                }, B.height).dispose, j[8] = D, j[9] = W, j[10] = q, j[11] = B.height, j[12] = B.holdViewport, j[13] = V, j[14] = Q, j[15] = h) : h = j[15], j[16] !== D || j[17] !== W || j[18] !== q || j[19] !== B || j[20] !== V || j[21] !== Q ? (m = [D, W, q, B, V, Q], j[16] = D, j[17] = W, j[18] = q, j[19] = B, j[20] = V, j[21] = Q, j[22] = m) : m = j[22], (0, s.useInsertionEffect)(h, m), j[23] === Symbol.for("react.memo_cache_sentinel") ? (p = (e, t) => {
                    z.current = {
                        turnKey: e,
                        element: t
                    }, G.current?.(e, t)
                }, j[23] = p) : p = j[23];
                let Y = (0, d.a)(p);
                j[24] === Symbol.for("react.memo_cache_sentinel") ? (g = e => {
                    G.current = e;
                    let t = z.current;
                    return null != t && e(t.turnKey, t.element), () => {
                        G.current = null
                    }
                }, j[24] = g) : g = j[24];
                let $ = (0, d.a)(g);
                j[25] !== K || j[26] !== P || j[27] !== H || j[28] !== R ? (f = () => {
                    let e = K();
                    if (null != e && 0 !== e.clientHeight)
                        if (R && null != P) {
                            var t, n;
                            let a, r = (t = e, n = P, a = t.querySelector(`[data-turn-key="${CSS.escape(n)}"]`), a?.querySelector("[data-user-message-bubble]") ?? a);
                            if (null == r) return;
                            H(r)
                        } else H()
                }, j[25] = K, j[26] = P, j[27] = H, j[28] = R, j[29] = f) : f = j[29];
                let X = (0, s.useEffectEvent)(f);
                return j[30] !== L || j[31] !== D || j[32] !== W || j[33] !== A || j[34] !== Y || j[35] !== H || j[36] !== R ? (v = () => (A({
                    voiceAutoScrollEnabled: R,
                    clear: L,
                    consumeGrowth: D,
                    getHeightPx: W,
                    onTurnLayoutReady: Y,
                    place: H
                }), () => {
                    A(null)
                }), y = [L, D, W, A, Y, H, R], j[30] = L, j[31] = D, j[32] = W, j[33] = A, j[34] = Y, j[35] = H, j[36] = R, j[37] = v, j[38] = y) : (v = j[37], y = j[38]), (0, s.useLayoutEffect)(v, y), j[39] !== K || j[40] !== k || j[41] !== P || j[42] !== H || j[43] !== B || j[44] !== $ || j[45] !== R ? (b = () => {
                    let e = N.current,
                        t = O.current;
                    if (N.current = P, O.current = k, R && !k && !t && null != P && P !== e) {
                        var n, a, r, s, o;
                        let e, t, i, l, c;
                        return n = P, a = K, r = H, s = $, o = B.getPendingPlacementSignal(), t = null, i = null, l = !1, c = () => {
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
                }, x = [K, k, P, H, $, B, R], j[39] = K, j[40] = k, j[41] = P, j[42] = H, j[43] = B, j[44] = $, j[45] = R, j[46] = b, j[47] = x) : (b = j[46], x = j[47]), (0, s.useLayoutEffect)(b, x), j[48] !== U || j[49] !== I || j[50] !== X || j[51] !== B ? (C = () => {
                    if (null == I) return;
                    let e = B.getPendingPlacementSignal();
                    return U(() => {
                        e.aborted || X()
                    })
                }, j[48] = U, j[49] = I, j[50] = X, j[51] = B, j[52] = C) : C = j[52], j[53] !== U || j[54] !== I || j[55] !== B ? (w = [U, I, B], j[53] = U, j[54] = I, j[55] = B, j[56] = w) : w = j[56], (0, s.useLayoutEffect)(C, w), j[57] !== B ? (_ = (0, a.jsx)(i.a, {
                    controller: B
                }), j[57] = B, j[58] = _) : _ = j[58], _
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
            m = n("dQRk"),
            p = n("jAnS");
        let g = (0, s.d)(i.a, (e, t) => {
            let {
                get: n
            } = t, a = n(m.j, e);
            return null != a ? a : n(m.D, e) || n(l.i, e) || null != n(l.y, e) ? void 0 : null
        });
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, f, v, y, b, x = (0, r.c)(36),
                    {
                        children: C,
                        conversationId: w,
                        routePattern: _,
                        homePath: j
                    } = e,
                    I = void 0 === j ? "/" : j,
                    S = (0, s.y)(i.a),
                    {
                        hash: T,
                        key: P,
                        pathname: A,
                        search: E,
                        state: k
                    } = (0, o.Y)(),
                    {
                        conversationId: M,
                        gizmoId: R
                    } = (0, o.cb)(),
                    N = (0, s.x)(g, w),
                    O = (0, s.x)(m.D, w),
                    z = (0, s.x)(m.R, w),
                    G = O ? z : R;
                x[0] !== G ? (t = null != G && (0, u.a)(G) ? G : null, x[0] = G, x[1] = t) : t = x[1], x[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                    enabled: !1
                }, x[2] = n) : n = x[2];
                let {
                    data: F
                } = (0, s.x)(d.b, t, n);
                x[3] !== G ? (l = null == G || (0, u.a)(G) ? null : G, x[3] = G, x[4] = l) : l = x[4], x[5] === Symbol.for("react.memo_cache_sentinel") ? (f = {
                    enabled: !1
                }, x[5] = f) : f = x[5];
                let {
                    data: B
                } = (0, s.x)(c.b, l, f);
                if (null === N || (0, p.i)(E) && null != N && !O) {
                    let e;
                    return x[6] !== I || x[7] !== E ? (e = (0, a.jsx)(o.l, {
                        replace: !0,
                        to: {
                            pathname: I,
                            search: E
                        }
                    }), x[6] = I, x[7] = E, x[8] = e) : e = x[8], e
                }
                x[9] !== w || x[10] !== B || x[11] !== G || x[12] !== F || x[13] !== N || x[14] !== _ ? (v = null != _ ? (0, o.C)(_, {
                    conversationId: N ?? w
                }) : (0, p.c)(N ?? w, {
                    gizmoId: F?.gizmo.short_url ?? B?.gizmo.short_url ?? G
                }), x[9] = w, x[10] = B, x[11] = G, x[12] = F, x[13] = N, x[14] = _, x[15] = v) : v = x[15];
                let L = v;
                if (x[16] !== w || x[17] !== L || x[18] !== M || x[19] !== T || x[20] !== P || x[21] !== A || x[22] !== N || x[23] !== S || x[24] !== E || x[25] !== k) {
                    let e = new URLSearchParams(E),
                        t = null != N && e.has("mfr"),
                        n = S.get(m.x, w),
                        r = k;
                    if (t) {
                        let t, n;
                        if (e.delete("mfr"), x[27] !== k ? (t = k ?? {}, x[27] = k, x[28] = t) : t = x[28], x[29] !== t) {
                            let {
                                modelFirstLanding: e,
                                modelFirstFallback: a,
                                ...r
                            } = t;
                            n = r, x[29] = t, x[30] = n
                        } else n = x[30];
                        r = n
                    }
                    if (null != M && (0, h.e)(M) && null != N) {
                        let e;
                        x[31] !== r ? (e = {
                            ...r,
                            fromChatGptFirstSend: !0
                        }, x[31] = r, x[32] = e) : e = x[32], r = e
                    }
                    y = A !== L || t ? (0, a.jsx)(o.l, {
                        replace: !0,
                        state: "tpp" === n || "flora" === n ? {
                            ...r,
                            workTurnVisit: (0, p.f)(S, P, k?.workTurnVisit)
                        } : r,
                        to: {
                            hash: t ? "" : T,
                            pathname: L,
                            search: t ? e.toString() : E
                        }
                    }) : null, x[16] = w, x[17] = L, x[18] = M, x[19] = T, x[20] = P, x[21] = A, x[22] = N, x[23] = S, x[24] = E, x[25] = k, x[26] = y
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
                    m = (0, s.y)(l.a),
                    p = (0, s.z)(c.e),
                    g = (0, o.useContext)(i.a);
                return h[0] !== m ? (e = () => (m.set(c.f, !0), () => {
                    m.set(c.f, !1), (0, c.a)(m)
                }), t = [m], h[0] = m, h[1] = e, h[2] = t) : (e = h[1], t = h[2]), (0, o.useLayoutEffect)(e, t), h[3] !== g || h[4] !== p ? (n = null == p ? null : (0, a.jsx)(a.Fragment, {
                    children: [...(0, c.b)(p), p.overlay].filter(u).map(e => (0, a.jsx)(d.a.Root, {
                        animateOnMount: e.animateOnMount ?? !0,
                        fillHeight: !0,
                        fullWidth: e.isFullWidth,
                        fullWidthTransition: e.fullWidthTransition,
                        isPIPObstacle: !1,
                        portalContainer: g,
                        reserveToolbarSpace: e.reserveToolbarSpace ?? !0,
                        shouldHideInlineImmediately: e !== p && e !== p.overlay,
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
                }), h[3] = g, h[4] = p, h[5] = n) : n = h[5], n
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
            m = n("Sm6l"),
            p = n("bqtn"),
            g = n("Ot7V"),
            f = n("bf6R"),
            v = n("Bbed"),
            y = n("X6Vn"),
            b = n("SGsN"),
            x = n("ANuo"),
            C = n("yGJW"),
            w = n("gBBC"),
            _ = n("OWtl"),
            j = n("hZax"),
            I = n("JYRT"),
            S = n("wwvo"),
            T = n("wrCb"),
            P = n("H7Nt"),
            A = n("vzxm"),
            E = n("jAnS"),
            k = n("wzUW"),
            M = n("Q9Us"),
            R = n("fwYa"),
            N = n("qfGT");
        let O = (0, v.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(284470), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function z(e) {
            let t, n, v, z, G, F, B, L, D, W, H, q, U, K, V, Q, Y, $, X, J, Z = (0, r.c)(56),
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
                ei = (0, j.h)("2160578039"),
                el = (0, o.x)(I.a, "2513446768"),
                ec = ei && "gpt" === ee.gizmo.gizmo_type && null != ee.gizmo.migrated_plugin_id;
            Z[0] !== el ? (t = el?.get("disable_gpt_updates", !1), Z[0] = el, Z[1] = t) : t = Z[1];
            let ed = t,
                eu = ee.gizmo.current_user_permission?.can_write && !ec && !ed,
                {
                    data: eh
                } = (0, o.z)(S.c);
            Z[2] !== ee.gizmo.id || Z[3] !== eh ? (n = eh?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === ee.gizmo.id
            }), Z[2] = ee.gizmo.id, Z[3] = eh, Z[4] = n) : n = Z[4];
            let em = n;
            Z[5] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, T.a)("/gpts/editor"), Z[5] = v) : v = Z[5];
            let ep = `${v}/${encodeURIComponent(ee.gizmo.id)}`;
            Z[6] !== ee.gizmo.id || Z[7] !== ee.gizmo.short_url ? (z = ee.gizmo.short_url?.trim() || ee.gizmo.id, Z[6] = ee.gizmo.id, Z[7] = ee.gizmo.short_url, Z[8] = z) : z = Z[8], Z[9] !== z ? (G = (0, A.c)(z), Z[9] = z, Z[10] = G) : G = Z[10], Z[11] !== ea ? (F = (0, E.e)("", (0, E.i)(ea)), Z[11] = ea, Z[12] = F) : F = Z[12];
            let eg = `${G}${F}`;
            Z[13] !== en ? (B = en.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions",
                description: "Accessible label for the compact overflow menu containing actions for the current custom GPT in Codex Desktop"
            }), Z[13] = en, Z[14] = B) : B = Z[14];
            let ef = B;
            Z[15] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, a.jsx)(x.a, {
                className: "icon-sm"
            }), Z[15] = L) : L = Z[15], Z[16] !== ef ? (D = (0, a.jsx)(m.a, {
                "aria-label": ef,
                color: "ghost",
                size: "icon",
                children: L
            }), Z[16] = ef, Z[17] = D) : D = Z[17], Z[18] !== ee.gizmo.gizmo_type || Z[19] !== ee.gizmo.id || Z[20] !== er || Z[21] !== eg || Z[22] !== et ? (W = "gpt" === ee.gizmo.gizmo_type ? (0, a.jsxs)(p.c.Item, {
                href: eg,
                onClick: e => {
                    e.defaultPrevented || ((0, C.a)(et, s.oc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: ee.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), eo(!1), (0, w.c)(et, null), (0, h.m)(et, "chat"), er(eg, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(p.c.ItemIcon, {
                    children: (0, a.jsx)(f.Oh, {})
                }), (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat",
                    description: "Short GPT actions menu label that opens a new conversation with the same custom GPT, rather than switching to general ChatGPT"
                })]
            }) : null, Z[18] = ee.gizmo.gizmo_type, Z[19] = ee.gizmo.id, Z[20] = er, Z[21] = eg, Z[22] = et, Z[23] = W) : W = Z[23], Z[24] !== ee || Z[25] !== et ? (H = () => (0, y.f)(et, O, {
                accountId: et.get(u.f),
                resource: ee
            }), Z[24] = ee, Z[25] = et, Z[26] = H) : H = Z[26], Z[27] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, a.jsx)(p.c.ItemIcon, {
                children: (0, a.jsx)(f.je, {})
            }), U = (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About",
                description: "GPT menu action that opens its details over the current conversation or landing page"
            }), Z[27] = q, Z[28] = U) : (q = Z[27], U = Z[28]), Z[29] !== H ? (K = (0, a.jsxs)(p.c.Item, {
                onSelect: H,
                children: [q, U]
            }), Z[29] = H, Z[30] = K) : K = Z[30];
            let ev = em ? N.a : R.a;
            return Z[31] !== ee || Z[32] !== en || Z[33] !== em || Z[34] !== et ? (V = () => {
                (0, S.e)(et, ee, !em).catch(() => {
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
            }, Z[31] = ee, Z[32] = en, Z[33] = em, Z[34] = et, Z[35] = V) : V = Z[35], Z[36] !== em ? (Q = em ? (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT",
                description: "Compact overflow-menu action that removes the current custom GPT from the user's pinned sidebar items in Codex Desktop"
            }) : (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT",
                description: "Compact overflow-menu action that adds the current custom GPT to the user's pinned sidebar items in Codex Desktop"
            }), Z[36] = em, Z[37] = Q) : Q = Z[37], Z[38] !== ev || Z[39] !== V || Z[40] !== Q ? (Y = (0, a.jsx)(p.c.Item, {
                leftIconAsset: ev,
                onSelect: V,
                children: Q
            }), Z[38] = ev, Z[39] = V, Z[40] = Q, Z[41] = Y) : Y = Z[41], Z[42] !== eu || Z[43] !== ep || Z[44] !== ee.gizmo.current_user_permission?.can_view_config ? ($ = eu || ee.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(p.c.Item, {
                href: ep,
                leftIconAsset: eu ? M.a : k.a,
                onClick: e => {
                    (0, g.e)({
                        event: e,
                        href: ep,
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
            }) : null, Z[42] = eu, Z[43] = ep, Z[44] = ee.gizmo.current_user_permission?.can_view_config, Z[45] = $) : $ = Z[45], Z[46] !== ee ? (X = (0, a.jsx)(P.a, {
                resource: ee
            }), Z[46] = ee, Z[47] = X) : X = Z[47], Z[48] !== es || Z[49] !== W || Z[50] !== K || Z[51] !== Y || Z[52] !== $ || Z[53] !== X || Z[54] !== D ? (J = (0, a.jsxs)(p.a, {
                align: "start",
                contentWidth: "menu",
                open: es,
                onOpenChange: eo,
                triggerButton: D,
                children: [W, K, Y, $, X]
            }), Z[48] = es, Z[49] = W, Z[50] = K, Z[51] = Y, Z[52] = $, Z[53] = X, Z[54] = D, Z[55] = J) : J = Z[55], J
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
                } = (0, o.x)(S.b, t);
                if (null == h) return null;
                c[3] !== h.gizmo.display.name ? (n = h.gizmo.display.name.trim(), c[3] = h.gizmo.display.name, c[4] = n) : n = c[4];
                let m = n;
                return c[5] !== m ? (s = m ? (0, a.jsx)("span", {
                    className: "truncate",
                    children: m
                }) : null, c[5] = m, c[6] = s) : s = c[6], c[7] !== h ? (i = (0, a.jsx)(z, {
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
            m = n("UWHW");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, g, f = (0, a.c)(11),
                    {
                        conversationId: v,
                        isTranscriptVisible: y
                    } = e,
                    b = void 0 === y || y,
                    x = (0, r.y)(l.a),
                    C = (0, s.useId)(),
                    {
                        mutate: w
                    } = (0, i.l)();
                return f[0] !== v || f[1] !== C || f[2] !== x ? (t = () => (x.set(m.b, e => new Map(e).set(C, v)), x.get(m.a)?.dismissCurrent(), () => {
                    x.set(m.b, e => {
                        let t = new Map(e);
                        return t.delete(C), t
                    })
                }), n = [v, C, x], f[0] = v, f[1] = C, f[2] = x, f[3] = t, f[4] = n) : (t = f[3], n = f[4]), (0, s.useEffect)(t, n), f[5] !== v || f[6] !== b || f[7] !== w || f[8] !== x ? (p = () => {
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
                            if ((0, h.ac)(x, v, n), !n) return;
                            let a = t(h.j, v);
                            if (null == a || !0 !== t(d.r, a)) return;
                            let r = (0, u.b)(a);
                            (0, c.j)(x, r, x.get(d.z, r)), w(a)
                        });
                    return () => {
                        e(), t(), (0, h.ac)(x, v, !1)
                    }
                }, g = [v, b, w, x], f[5] = v, f[6] = b, f[7] = w, f[8] = x, f[9] = p, f[10] = g) : (p = f[9], g = f[10]), (0, s.useEffect)(p, g), null
            }
        })
    }),
    fr5e: (function(e, t, n) {
        n.d(t, {
            a: () => z
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
            m = n("EFj1"),
            p = n("SGsN"),
            g = n("yGJW"),
            f = n("OWtl"),
            v = n("aepO"),
            y = n("bIvi"),
            b = n("lBzi"),
            x = n("Ga6O"),
            C = n("dQRk"),
            w = n("jfiJ"),
            _ = n("FGJH"),
            j = n("Vcrm"),
            I = n("OCK3"),
            S = n("dhxJ"),
            T = n("lsky"),
            P = n("rKAs"),
            A = n("ASxG"),
            E = n("rn0J"),
            k = n("XpUB"),
            M = n("G6mJ"),
            R = n("VB5Q"),
            N = n("VTN2");
        let O = A.record(A.string(), A.union([A.string(), A.literal(!0)]));

        function z(e) {
            let t, n, A, z, F, B, L = (0, r.c)(28),
                {
                    conversationId: D,
                    turns: W,
                    loadHistory: H,
                    renderMode: q,
                    paragenEnabled: U,
                    enabled: K,
                    canCopy: V,
                    priority: Q
                } = e,
                Y = void 0 === q ? "conversation" : q,
                $ = void 0 !== U && U,
                X = void 0 === K || K,
                J = void 0 === V || V,
                Z = void 0 === Q ? "fallback" : Q,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            L[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), L[0] = t) : t = L[0], L[1] !== J || L[2] !== D || L[3] !== X || L[4] !== H || L[5] !== $ || L[6] !== Y ? (n = [D, X, J, H, Y, $], L[1] = J, L[2] = D, L[3] = X, L[4] = H, L[5] = $, L[6] = Y, L[7] = n) : n = L[7], (0, c.useEffect)(t, n), L[8] !== J || L[9] !== D || L[10] !== $ || L[11] !== Y || L[12] !== ee || L[13] !== W ? (A = () => {
                let e = ee.get(C.j, D),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(C.x, D);
                if (!J || "tpp" === n || "flora" === n) return null;
                let a = ee.get(C.L, D),
                    r = $ && "conversation" === Y ? ee.get(j.a, D)?.promptMessageId : void 0,
                    s = function(e) {
                        for (let {
                                turn: t
                            }
                            of e.toReversed())
                            for (let e of t.items.toReversed()) {
                                if ("assistant-message" !== e.type) continue;
                                let t = null,
                                    n = 0;
                                if ((0, T.h)((0, k.a)(e.content, P.b), a => {
                                        if ("codexDirective" === a.type && a.name === P.a) {
                                            let n = O.safeParse(a.attributes);
                                            if (!n.success) return;
                                            let r = (0, M.a)(n.data, e.contentReferences),
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
                                        "code" !== a.type || (null == ("indented" === a.codeBlockStyle ? null : a.raw.split("\n").reduce(E.a, null)) && (t = {
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
                        threadCurrentNode: r ?? ee.get(C.B, D),
                        conversationOrigin: n,
                        isStreaming: (0, C.zb)(ee.get(C._, D)),
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
                    i = (0, S.a)(a?.[s.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(I.b, o) ?? i?.[String(s.codeBlockIndex)]?.content ?? s.content
                }
            }, L[8] = J, L[9] = D, L[10] = $, L[11] = Y, L[12] = ee, L[13] = W, L[14] = A) : A = L[14];
            let en = (0, y.a)(A);
            L[15] !== ee ? (z = (e, t) => {
                let n = e => {
                    (0, g.a)(ee, o.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: s.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
                    })
                };
                return (0, v.b)(e, void 0, () => {
                    "string" == typeof e ? n(e) : e.then(n, G)
                }).then(e => {
                    e && !t?.aborted && ee.get(p.f).success((0, a.jsx)(d.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard",
                        description: "Success toast after the user copies the last assistant code block using the keyboard shortcut or command menu in Chat mode"
                    }))
                })
            }, L[15] = ee, L[16] = z) : z = L[16];
            let ea = z;
            return L[17] !== D || L[18] !== en || L[19] !== H || L[20] !== $ || L[21] !== Y || L[22] !== ee || L[23] !== ea ? (F = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!H || ee.get(C.A, D) || null == t || ee.get(_.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let r = ee.get(u.a),
                    s = ee.get(C.B, D),
                    o = ee.get(h.e).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(C.B, D) !== s || $ && "conversation" === Y && t(j.a, D)?.promptMessageId !== n || t(h.e).copyLastCodeBlock !== o) && a.abort()
                    });
                ea((async () => {
                    await (0, w.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, L[17] = D, L[18] = en, L[19] = H, L[20] = $, L[21] = Y, L[22] = ee, L[23] = ea, L[24] = F) : F = L[24], L[25] !== X || L[26] !== Z ? (B = {
                enabled: X,
                priority: Z
            }, L[25] = X, L[26] = Z, L[27] = B) : B = L[27], (0, m.a)("copyLastCodeBlock", F, B), null
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
        var s = n("BolX"),
            o = n("Wf1j"),
            i = n("QcFS"),
            l = n("TdH6"),
            c = n("QcW8");
        n("ZU27"), n("TpEm");
        var d = n("gbrq"),
            u = n("fBor"),
            h = n("ipGa"),
            m = n("d0tz"),
            p = n("zd8w"),
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
                    if (null != r) return (0, f.a)(a, (0, m.Qe)(`chatgpt:${r}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, p.useLayoutEffect)(e, t), null
        }
        n("n5iL"), n("q3HK"), n("bf6R");
        var b = n("rBfn"),
            x = n("enMl"),
            C = n("PCEr");

        function w(e) {
            let t, n, s, o, l, c, d = (0, r.c)(16),
                {
                    chatIcon: m,
                    header: p,
                    title: g,
                    isArchivedPreview: f,
                    children: v
                } = e;
            return d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(i.a.MainContentLayout, {
                layout: (0, h.a)() ? "default" : "thread-edge-scroll"
            }), d[0] = t) : t = d[0], d[1] !== f ? (n = f ? null : (0, a.jsx)(u.SitePreviewBridge, {}), d[1] = f, d[2] = n) : n = d[2], d[3] !== p ? (s = (0, a.jsx)(i.a.Header, {
                desktopPlacement: "titlebar",
                divider: !1,
                children: p
            }), d[3] = p, d[4] = s) : s = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(i.a.RightPanelOutlet, {
                children: (0, a.jsx)(i.a.RightPanelTabs, {})
            }), d[5] = o) : o = d[5], d[6] !== m || d[7] !== p || d[8] !== f || d[9] !== g ? (l = f ? null : (0, a.jsx)(_, {
                chatIcon: m,
                mainToolbar: p,
                title: g
            }), d[6] = m, d[7] = p, d[8] = f, d[9] = g, d[10] = l) : l = d[10], d[11] !== v || d[12] !== n || d[13] !== s || d[14] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, s, v, o, l]
            }), d[11] = v, d[12] = n, d[13] = s, d[14] = l, d[15] = c) : c = d[15], c
        }

        function _(e) {
            let t, n, i, u, m, p, f = (0, r.c)(13),
                {
                    chatIcon: v,
                    mainToolbar: w,
                    title: _
                } = e,
                j = (0, s.y)(g.a);
            return (0, o.a)(), (0, s.z)(d.i), (0, s.z)(c.s), f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(y, {}), f[0] = t, f[1] = n) : (t = f[0], n = f[1]), f[2] !== v || f[3] !== _ ? (i = (0, a.jsx)(x.a, {
                title: _,
                icon: v
            }), f[2] = v, f[3] = _, f[4] = i) : i = f[4], f[5] !== w ? (u = (0, a.jsx)(C.a, {
                mainToolbar: w
            }), f[5] = w, f[6] = u) : u = f[6], f[7] !== j.value.routeKind ? (m = "other" === j.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(b.b, {
                showLauncherButton: !1
            }), f[7] = j.value.routeKind, f[8] = m) : m = f[8], f[9] !== i || f[10] !== u || f[11] !== m ? (p = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i, u, m, null, null]
            }), f[9] = i, f[10] = u, f[11] = m, f[12] = p) : p = f[12], p
        }
    }),
    dLcZ: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV");
        n("slpy"), n("zd8w");
        var s = n("QcFS");
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
                let t, n, s, l, c, d, u, h, m, p = (0, r.c)(18);
                p[0] !== e ? ({
                    isTemporaryChat: c,
                    isCloudTask: t,
                    leading: n,
                    startActions: l,
                    ...s
                } = e, p[0] = e, p[1] = t, p[2] = n, p[3] = s, p[4] = l, p[5] = c) : (t = p[1], n = p[2], s = p[3], l = p[4], c = p[5]);
                let g = void 0 !== c && c;
                return p[6] !== n || null !== p[7] ? (d = (0, a.jsxs)(a.Fragment, {
                    children: [n, null]
                }), p[6] = n, p[7] = null, p[8] = d) : d = p[8], p[9] !== g ? (u = g ? (0, a.jsx)(i.b, {
                    isIndicator: !0,
                    isTemporaryChat: !0
                }) : null, p[9] = g, p[10] = u) : u = p[10], p[11] !== l || p[12] !== u ? (h = (0, a.jsxs)(a.Fragment, {
                    children: [l, u]
                }), p[11] = l, p[12] = u, p[13] = h) : h = p[13], p[14] !== s || p[15] !== d || p[16] !== h ? (m = (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(o.a, {
                        ...s,
                        inset: "tab-strip-flush-start",
                        leading: d,
                        startActions: h
                    })
                }), p[14] = s, p[15] = d, p[16] = h, p[17] = m) : m = p[17], m
            },
            b: function(e) {
                let t, n, o, i, c, d = (0, r.c)(13),
                    {
                        children: u,
                        menu: h,
                        hasTitleMenu: m
                    } = e,
                    p = void 0 !== m && m;
                d[0] !== p || d[1] !== h ? (t = p ? (0, a.jsx)(s.a.HeaderAction, {
                    actionId: "chatgpt-conversation-title-menu",
                    align: "start",
                    slotPosition: "threadTitle",
                    children: h
                }) : null, d[0] = p, d[1] = h, d[2] = t) : t = d[2], d[3] !== u ? (n = {
                    actionId: "chatgpt-conversation-actions",
                    order: 100,
                    content: u
                }, d[3] = u, d[4] = n) : n = d[4];
                let g = p ? null : h;
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
                let a = n(l.L, e),
                    s = n(l.B, e);
                return null == a || null == s ? null : (0, r.b)({
                    mapping: a,
                    current_node: s
                }).findLast(e => "assistant" === e.author.role && !(0, r.m)(e) && "" !== (0, r.e)(e).trim())
            }),
            d = (0, a.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (null == e || n(i.d, "2163293173") && !n(l.I, e)) return null;
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
        let m = (0, d.a)(async () => (await n.e(306529).then(n.bind(n, "GkN4"))).GptReportDialog);
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, p, g = (0, r.c)(9),
                    {
                        resource: f,
                        onSelect: v
                    } = e,
                    y = (0, s.y)(h.a),
                    b = (0, s.z)(i.f);
                return null == b || f.gizmo.tags?.includes("first_party") || "marketplace" !== f.gizmo.share_recipient && "link" !== f.gizmo.share_recipient ? null : (g[0] !== b || g[1] !== v || g[2] !== f || g[3] !== y ? (t = () => {
                    v?.(), (0, u.f)(y, m, {
                        accountId: b,
                        resource: f
                    })
                }, g[0] = b, g[1] = v, g[2] = f, g[3] = y, g[4] = t) : t = g[4], g[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(l.c.ItemIcon, {
                    children: (0, a.jsx)(c.td, {})
                }), d = (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.report.action",
                    defaultMessage: "Report GPT",
                    description: "Menu action to report a publicly shared third-party GPT"
                }), g[5] = n, g[6] = d) : (n = g[5], d = g[6]), g[7] !== t ? (p = (0, a.jsxs)(l.c.Item, {
                    onSelect: t,
                    children: [n, d]
                }), g[7] = t, g[8] = p) : p = g[8], p)
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
        let m = (0, l.a)(async () => (await n.e(901042).then(n.bind(n, "ut8h"))).GptPluginMigrationBannerContent, {
            errorFallback: e => (0, a.jsx)(g, {
                ...e
            })
        });

        function p(e) {
            let t, n = (0, r.c)(3),
                {
                    gizmoId: s
                } = e,
                i = (0, o.x)(d.d, "2160578039");
            return n[0] !== i || n[1] !== s ? (t = i ? (0, a.jsx)(m, {
                gizmoId: s
            }, s) : null, n[0] = i, n[1] = s, n[2] = t) : t = n[2], t
        }

        function g(e) {
            let t, n, s = (0, r.c)(10),
                {
                    gizmoId: l
                } = e,
                d = (0, o.y)(c.a),
                m = (0, i.Y)(),
                p = (0, i._)(),
                {
                    data: g
                } = (0, o.x)(h.f, l);
            s[0] !== l || s[1] !== m.pathname ? (t = {
                gizmoId: l,
                visitKey: m.pathname
            }, s[0] = l, s[1] = m.pathname, s[2] = t) : t = s[2];
            let f = (0, o.x)(h.c, t);
            return s[3] !== f || s[4] !== l || s[5] !== m.pathname || s[6] !== p || s[7] !== g || s[8] !== d ? (n = f && g?.gizmo.migrated_plugin_id ? (0, a.jsx)(u.a, {
                gptName: g.gizmo.display.name,
                accessState: "error",
                onUsePlugin: () => void p("/plugins"),
                onKeepUsingGpt: () => (0, h.a)(d, {
                    gizmoId: l,
                    visitKey: m.pathname
                })
            }) : null, s[3] = f, s[4] = l, s[5] = m.pathname, s[6] = p, s[7] = g, s[8] = d, s[9] = n) : n = s[9], n
        }
        n.d(t, {}, {
            GptPluginMigrationBanner: p,
            GptPluginMigrationHomeBanner: function(e) {
                let t, n, o, i = (0, r.c)(7),
                    {
                        entryPoint: l,
                        gizmoId: c
                    } = e,
                    d = "codex" === l && "electron:mx-[var(--home-composer-inline-inset)]";
                return i[0] !== d ? (t = (0, s.b)("empty:hidden", d), i[0] = d, i[1] = t) : t = i[1], i[2] !== c ? (n = (0, a.jsx)(p, {
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
            i = n("zKCW"),
            l = n("Sm6l"),
            c = n("HOLv"),
            d = n("hZax"),
            u = n("slBk"),
            h = n("CS9C");
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, p, g, f, v, y, b, x = (0, r.c)(34),
                    {
                        gptName: C,
                        accessState: w,
                        onUsePlugin: _,
                        onKeepUsingGpt: j,
                        onRetry: I
                    } = e,
                    S = (0, s.a)(),
                    T = (0, d.g)("2513446768");
                x[0] !== T || x[1] !== S ? (t = S.formatDate((0, u.a)(T.get("retirement_date", "")), {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }), x[0] = T, x[1] = S, x[2] = t) : t = x[2];
                let P = t;
                if ("error" === w && null != I) {
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
                if ("error" === w && null == I) {
                    let e;
                    x[7] !== P ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessUnconfirmed",
                        defaultMessage: "We couldn’t check your access to the plugin. You can keep using this GPT until {deadline}.",
                        description: "Fallback when the migration banner cannot load. Access is unknown; the user can explore plugins or continue using the GPT.",
                        values: {
                            deadline: P
                        }
                    }), x[7] = P, x[8] = e) : e = x[8], m = e
                } else if ("error" === w) {
                    let e;
                    x[9] !== P ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessError",
                        defaultMessage: "We couldn’t check your access to the plugin. Try again, or keep using this GPT until {deadline}.",
                        description: "Migrated GPT notice after a failed plugin-access check; deadline is the localized retirement date",
                        values: {
                            deadline: P
                        }
                    }), x[9] = P, x[10] = e) : e = x[10], m = e
                } else if ("denied" === w) {
                    let e;
                    x[11] !== P ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessDenied",
                        defaultMessage: "This plugin isn’t available to you. You can keep using this GPT until {deadline}.",
                        description: "Migrated GPT notice when the destination plugin is inaccessible; deadline is the localized retirement date",
                        values: {
                            deadline: P
                        }
                    }), x[11] = P, x[12] = e) : e = x[12], m = e
                } else if (C.trim()) {
                    let e;
                    x[13] !== P || x[14] !== C ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceNamedBody",
                        defaultMessage: "{gptName} is now available as a plugin. You can keep using this GPT until {deadline}.",
                        description: "Explains the migrated GPT choice before the composer. gptName is the GPT display name and deadline is a localized month and day.",
                        values: {
                            gptName: C,
                            deadline: P
                        }
                    }), x[13] = P, x[14] = C, x[15] = e) : e = x[15], m = e
                } else {
                    let e;
                    x[16] !== P ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceBody",
                        defaultMessage: "This GPT is now available as a plugin. You can keep using this GPT until {deadline}.",
                        description: "Explains the migrated GPT choice when the GPT has no display name; deadline is a localized month and day.",
                        values: {
                            deadline: P
                        }
                    }), x[16] = P, x[17] = e) : e = x[17], m = e
                }
                x[18] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(c.a, {
                    asset: h.a,
                    className: "text-secondary"
                }), x[18] = p) : p = x[18], x[19] !== C ? (g = C.trim() ? (0, a.jsx)(o.a, {
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
                let A = "pending" === w,
                    E = "error" === w && null != I ? I : _;
                return x[21] !== n || x[22] !== A || x[23] !== E ? (f = (0, a.jsx)(l.a, {
                    color: "primary",
                    loading: A,
                    size: "dialog",
                    type: "button",
                    onClick: E,
                    children: n
                }), x[21] = n, x[22] = A, x[23] = E, x[24] = f) : f = x[24], x[25] !== j ? (v = null == j ? null : (0, a.jsx)(l.a, {
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
                }), x[27] = f, x[28] = v, x[29] = y) : y = x[29], x[30] !== m || x[31] !== g || x[32] !== y ? (b = (0, a.jsx)("div", {
                    className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                    children: (0, a.jsx)(i.a, {
                        variant: "announcement",
                        icon: p,
                        stackOnNarrow: !0,
                        wrapCtas: !0,
                        title: g,
                        content: m,
                        customCtas: y
                    })
                }), x[30] = m, x[31] = g, x[32] = y, x[33] = b) : b = x[33], b
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
            m = (0, r.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(i.d, "4035922817") ? n(h, e) : null
            }),
            p = (0, r.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(m, e)?.course_id ?? null
            }),
            g = (0, r.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                return !!n(m, e)?.title
            });
        n.d(t, {}, {
            a: p,
            b: m,
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
                } = e, a = n(o.v, t);
                return {
                    pending: (0, o.zb)(n(o._, t)),
                    completed: null == a || "completed" === a.result,
                    completionId: n(r.d, "2163293173") ? JSON.stringify([t, a?.requestId, n(o.B, t)]) : void 0,
                    unread: n(o.I, t)
                }
            },
            preview: (e, t) => {
                let {
                    get: n
                } = e, a = n(o.L, t);
                return null == a ? null : (0, i.a)({
                    mapping: a,
                    current_node: n(o.B, t)
                })?.text ?? null
            },
            title: (e, t) => {
                let {
                    get: n
                } = e;
                return n(o.cb, t) || null
            },
            dismiss: (e, t) => {
                (0, o.Vb)(e, t, !1), (0, s.b)(e, t).catch(() => {})
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
            m = n("jfiJ"),
            p = n("FGJH");

        function g(e) {
            return e.isIntersecting
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, f, v, y, b = (0, r.c)(20),
                    {
                        conversationId: x
                    } = e,
                    C = (0, s.y)(c.a),
                    w = (0, s.z)(l.b),
                    _ = (0, s.x)(h.j, x),
                    j = (0, s.x)(p.c, _ ?? x),
                    I = (0, u.b)(),
                    S = (0, o.useRef)(null);
                b[0] !== C || b[1] !== _ ? (t = () => {
                    null != _ && (0, m.b)(C, _, i.flushSync)
                }, b[0] = C, b[1] = _, b[2] = t) : t = b[2];
                let T = t;
                b[3] !== x || b[4] !== T || b[5] !== C || b[6] !== _ ? (n = () => {
                    let e = C.get(p.c, _ ?? x);
                    C.get(l.b) || e?.hasError || T()
                }, b[3] = x, b[4] = T, b[5] = C, b[6] = _, b[7] = n) : n = b[7];
                let P = (0, o.useEffectEvent)(n);
                b[8] !== I || b[9] !== w || b[10] !== P ? (f = () => {
                    if (w) return;
                    let e = S.current,
                        t = I.getScrollElement();
                    if (null == e || null == t) return;
                    let n = new IntersectionObserver(e => {
                        e.some(g) && P()
                    }, {
                        root: t,
                        rootMargin: "80px 0px 0px 0px"
                    });
                    return n.observe(e), () => n.disconnect()
                }, b[8] = I, b[9] = w, b[10] = P, b[11] = f) : f = b[11];
                let A = j?.cursor,
                    E = j?.hasError;
                if (b[12] !== I || b[13] !== w || b[14] !== _ || b[15] !== A || b[16] !== E ? (v = [I, w, _, A, E], b[12] = I, b[13] = w, b[14] = _, b[15] = A, b[16] = E, b[17] = v) : v = b[17], (0, o.useEffect)(f, v), null == j || j.complete || null == j.cursor) return null;
                let k = j.hasError ? T : null;
                return b[18] !== k ? (y = (0, a.jsx)(d.a, {
                    ref: S,
                    onRetry: k
                }), b[18] = k, b[19] = y) : y = b[19], y
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
            m = n("nlNF"),
            p = n("crAQ"),
            g = n("FR8U"),
            f = n("OWtl"),
            v = n("OtLV"),
            y = n("w7E5"),
            b = n("wVX4"),
            x = n("c5lN"),
            C = n("QmkR"),
            w = n("xEXG"),
            _ = n("KMqT"),
            j = n("J6LI"),
            I = n("FgUr"),
            S = n("WLgA");
        let T = (0, s.u)(f.a, 0);

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
                onCreateProjectDialogCloseAutoFocus: w
            } = e, {
                isWorkConversation: P,
                sourceMemoryBlocked: E
            } = (0, j.c)(n, r), k = E ? v.a.projectOnlyMoveUnavailable : void 0, {
                data: M,
                isPending: R,
                isError: N
            } = s, {
                data: O,
                isPending: z,
                isError: G
            } = o, F = (0, I.a)(O, M, r?.gizmo.id), B = "allowed" === c, L = e => {
                let a = t.get(T) + 1,
                    r = t.get(m.e);
                t.set(T, a), (0, C.T)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(n => {
                    n && t.get(T) === a && t.get(m.e) === r && f((0, S.c)(e.gizmo.id))
                }).catch(() => {
                    t.get(u.f).danger(t.get(h.a).formatMessage(A.moveFailed), {
                        errorAnalytics: {
                            toastId: "move_conversation_to_snorlax_error"
                        }
                    })
                })
            }, D = [];
            for (let e of (B && (D.push({
                    id: "new-chatgpt-project",
                    icon: d.Ag,
                    message: A.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        t.set(T, e => e + 1), (0, x.a)(t, L, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: P,
                            onCloseAutoFocus: w
                        })
                    }
                }), F.length > 0 && D.push({
                    id: "new-project-separator",
                    type: "separator"
                })), F)) {
                let {
                    targetMemoryBlocked: t
                } = (0, j.c)(n, void 0, e), r = t ? (0, _.a)((0, b.c)(e)) : void 0;
                D.push({
                    id: `move-to-project:${e.gizmo.id}`,
                    icon: (0, a.jsx)(g.a, {
                        className: "icon-xs",
                        size: 16,
                        color: e.gizmo.display.theme,
                        fallbackIcon: (0, a.jsx)(d.xd, {}),
                        icon: e.gizmo.display.emoji
                    }),
                    nativeIcon: (0, p.b)(e.gizmo.display.emoji),
                    message: A.projectName,
                    messageValues: {
                        projectName: e.gizmo.display.name
                    },
                    enabled: null == r,
                    tooltipMessage: r,
                    onSelect: () => L(e)
                })
            }
            return l && (N || G) ? D.push({
                id: "retry-project-destinations",
                message: A.destinationsFailed,
                closeOnSelect: !1,
                onSelect: () => {
                    Promise.all([t.query.invalidate(y.a), t.query.invalidate(C.m)])
                }
            }) : l && (R || z) ? D.push({
                id: "loading-project-destinations",
                message: A.loading,
                tooltipMessage: A.reopen,
                enabled: !1
            }) : N || G || R || z || 0 !== F.length || B || D.push({
                id: "no-project-destinations",
                message: A.noDestinations,
                enabled: !1
            }), [...i && D.length > 0 ? [{
                id: "move-to-project",
                icon: d.xd,
                message: A.moveToProject,
                enabled: !E,
                tooltipMessage: k,
                submenu: D
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                icon: d.Fd,
                message: A.removeFromProject,
                enabled: !E,
                tooltipMessage: k,
                onSelect: () => {
                    t.set(T, e => e + 1), (0, C.T)({
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
        n.d(t, {}, {
            a: function(e) {
                let t, n, i = (0, r.c)(12),
                    {
                        conversation: d,
                        onCreateProjectDialogCloseAutoFocus: u,
                        project: h,
                        showMoveToProject: m
                    } = e,
                    p = void 0 === m || m,
                    g = (0, s.y)(f.a),
                    v = (0, l._)(),
                    b = (0, s.z)(y.a),
                    x = (0, s.z)(C.m),
                    _ = (0, w.b)();
                if (i[0] !== d || i[1] !== v || i[2] !== u || i[3] !== x || i[4] !== h || i[5] !== _ || i[6] !== b || i[7] !== g || i[8] !== p) {
                    let e = P({
                            scope: g,
                            conversation: d,
                            project: h,
                            projectListQuery: b,
                            pinnedProjectsQuery: x,
                            showMoveToProject: p,
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
                    t = e.map(n), i[0] = d, i[1] = v, i[2] = u, i[3] = x, i[4] = h, i[5] = _, i[6] = b, i[7] = g, i[8] = p, i[9] = t
                } else t = i[9];
                return i[10] !== t ? (n = (0, a.jsx)(a.Fragment, {
                    children: t
                }), i[10] = t, i[11] = n) : n = i[11], n
            },
            b: P
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
            let r = n(o.L, e);
            return null == r ? null : c({
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
                m = e => {
                    if (null == e) return;
                    let t = [e.start_message_id, ...r[e.id] ?? []].flatMap(e => {
                        let t = null == e ? void 0 : h.get(e);
                        return null == t ? [] : [t]
                    });
                    return 0 === t.length ? void 0 : Math.min(...t)
                },
                p = o[i + 1],
                g = m(l),
                f = m(p),
                v = l?.start_message_id != null && null == g || p?.start_message_id != null && null == f,
                y = s?.status === "sending" && (s.sectionId === l?.id || s.sectionId === p?.id),
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
            l = n("QcFS"),
            c = n("EOo5"),
            d = n("Sm6l"),
            u = n("X6Vn"),
            h = n("OWtl"),
            m = n("gsAl");
        let p = (0, o.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function g(e) {
            let t, n, o, l = (0, r.c)(9),
                {
                    imageOnly: u
                } = e,
                p = (0, s.y)(h.a),
                g = (0, s.x)(m.f, (0, c.a)());
            return null == g ? null : (l[0] !== u || l[1] !== p || l[2] !== g.id ? (t = () => f(p, g.id, u), l[0] = u, l[1] = p, l[2] = g.id, l[3] = t) : t = l[3], l[4] !== u ? (n = u ? (0, a.jsx)(i.a, {
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
            (0, u.f)(e, p, {
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
            o = n("QcFS"),
            i = n("Cslg"),
            l = n("OFP1"),
            c = n("EOo5"),
            d = n("MMlk");

        function u(e) {
            let t, n, u, h = (0, r.c)(9),
                {
                    children: m
                } = e,
                p = (0, c.a)(),
                g = (0, s.z)(i.l),
                f = (0, s.z)(l.m);
            h[0] !== p.authMethod || h[1] !== g.status || h[2] !== f ? (t = function(e) {
                let {
                    authMethod: t,
                    chatGptAccessStatus: n,
                    isWorkOnlyChatDisabled: a
                } = e;
                return "chatgpt" === t && "allowed" === n && !a
            }({
                authMethod: p.authMethod,
                chatGptAccessStatus: g.status,
                isWorkOnlyChatDisabled: f
            }), h[0] = p.authMethod, h[1] = g.status, h[2] = f, h[3] = t) : t = h[3];
            let v = t;
            return v || null != m ? (h[4] !== v ? (n = v ? (0, a.jsx)(d.a, {}) : null, h[4] = v, h[5] = n) : n = h[5], h[6] !== m || h[7] !== n ? (u = (0, a.jsx)(o.a.HeaderAction, {
                actionId: "chatgpt-shared-post-actions",
                align: "end",
                allowsThreadContentOverlap: !0,
                order: 100,
                children: (0, a.jsxs)("div", {
                    className: "flex items-center gap-2 browser:rounded-lg browser:bg-surface",
                    children: [m, n]
                })
            }), h[6] = m, h[7] = n, h[8] = u) : u = h[8], u) : null
        }
    }),
    vpdG: (function(e, t, n) {
        var a = n("QosV"),
            r = n("HVBu"),
            s = n.n(r),
            o = n("BolX"),
            i = n("d0tz"),
            l = n("zd8w"),
            c = n("Gdjn"),
            d = n("xqnZ"),
            u = n("OWtl"),
            h = n("ADAj"),
            m = n("Ow2S"),
            p = n("fDfx"),
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
                    initialPromptKind: j
                } = t, I = void 0 === w ? C : w, S = (0, o.y)(u.a);
                b[2] !== C || b[3] !== I || b[4] !== _ || b[5] !== j || b[6] !== S ? (n = () => s()(() => {
                    let e = null == C ? null : S.get(g.x, C),
                        t = (0, d.e)(_ ?? (null == I ? "" : S.get(m.s, I)), {
                            addInitialContentToHistory: null == _ && null != I,
                            defaultTextKind: j ?? (null == _ && null != I || (0, c.b)(_ ?? "").length > 0 ? "prompt" : "plain"),
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
                    return null == _ && null != C && "string" == typeof I && null != (0, p.j)(S, I) && "tpp" !== e && "flora" !== e && (0, m.Q)(S, C, t.getChatGptPrompt().systemHints), t
                }), b[2] = C, b[3] = I, b[4] = _, b[5] = j, b[6] = S, b[7] = n) : n = b[7];
                let [T] = (0, l.useState)(n);
                b[8] !== T || b[9] !== x ? (r = x ?? T(), b[8] = T, b[9] = x, b[10] = r) : r = b[10];
                let P = r,
                    A = (0, l.useRef)(null);
                b[11] !== P || b[12] !== I || b[13] !== S ? (f = () => {
                    if (null == I) return;
                    let e = S.get(m.s, I);
                    return null != A.current && A.current !== e && P.restoreDraft(e), () => {
                        A.current = S.get(m.s, I)
                    }
                }, v = [P, I, S], b[11] = P, b[12] = I, b[13] = S, b[14] = f, b[15] = v) : (f = b[14], v = b[15]), (0, l.useLayoutEffect)(f, v), b[16] !== P || b[17] !== x ? (y = () => {
                    null != x || P.view.isDestroyed || P.destroy()
                }, b[16] = P, b[17] = x, b[18] = y) : y = b[18];
                let E = y;
                return (0, d.f)(E, P), P
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
                let t, n, u, h, m = (0, a.c)(12),
                    p = (0, s.y)(l.a),
                    g = (0, o.a)();
                return m[0] !== e || m[1] !== p ? (t = t => (0, d.u)({
                    scope: p,
                    conversationId: e,
                    deleteArtifacts: t
                }), m[0] = e, m[1] = p, m[2] = t) : t = m[2], m[3] !== p ? (n = () => p.queryClient.invalidateQueries({
                    queryKey: [d.a]
                }), m[3] = p, m[4] = n) : n = m[4], m[5] !== g || m[6] !== p ? (u = () => {
                    p.get(i.f).danger(g.formatMessage(c.a.deleteError), {
                        errorAnalytics: {
                            toastId: "archived_conversations_modal_delete_failed"
                        }
                    })
                }, m[5] = g, m[6] = p, m[7] = u) : u = m[7], m[8] !== t || m[9] !== n || m[10] !== u ? (h = {
                    mutationFn: t,
                    onSuccess: n,
                    onError: u
                }, m[8] = t, m[9] = n, m[10] = u, m[11] = h) : h = m[11], (0, r.a)(h)
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
            let t, n, i, l, c, d, u, h, m, p, g, f, v = (0, r.c)(24);
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
            }, v[11] = l, v[12] = h) : h = v[12], v[13] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, s.b)("content-Sj8_aX", "overflow-hidden rounded-[inherit] bg-inherit"), v[13] = m) : m = v[13], v[14] !== t ? (p = (0, a.jsx)("div", {
                className: m,
                children: t
            }), v[14] = t, v[15] = p) : p = v[15], v[16] !== y ? (g = "default" === y ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-multiply outline-1 outline-border"
            }) : null, v[16] = y, v[17] = g) : g = v[17], v[18] !== i || v[19] !== u || v[20] !== h || v[21] !== p || v[22] !== g ? (f = (0, a.jsxs)("div", {
                ...i,
                className: u,
                style: h,
                children: [p, g]
            }), v[18] = i, v[19] = u, v[20] = h, v[21] = p, v[22] = g, v[23] = f) : f = v[23], f
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
            h = n("d0tz"),
            m = n("T1PX");

        function p(e) {
            let t, n, o, i, l, c, d = (0, r.c)(13),
                {
                    children: u,
                    source: p
                } = e,
                g = (0, s.useRef)(null),
                f = !(0, m.a)() && p.width > 0 && p.height > 0;
            d[0] !== f || d[1] !== p ? (t = () => {
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
                                o = (p.left - a.left) * r,
                                i = (p.top - a.top) * s,
                                l = (a.right - p.right) * r,
                                c = (a.bottom - p.bottom) * s;
                            e.style.setProperty("--entry-inset", `${i}px ${l}px ${c}px ${o}px`), e.style.setProperty("--entry-transform", `translate(${o}px, ${i}px) scale(${p.width/a.width}, ${p.height/a.height})`), e.dataset.phase = "source", n = t.requestAnimationFrame(() => {
                                e.dataset.phase = "open"
                            })
                        })
                    });
                return a.observe(e), () => {
                    a.disconnect(), t.cancelAnimationFrame(n), delete e.dataset.phase, e.style.removeProperty("--entry-inset"), e.style.removeProperty("--entry-transform")
                }
            }, n = [f, p], d[0] = f, d[1] = p, d[2] = t, d[3] = n) : (t = d[2], n = d[3]), (0, s.useLayoutEffect)(t, n);
            let v = f ? "entry-yS3y1e" : void 0;
            return d[4] === Symbol.for("react.memo_cache_sentinel") ? (o = {
                position: "relative",
                maxWidth: "100%",
                width: h.R
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
        let g = (0, d.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(284470), n.e(339467), n.e(55068), n.e(633848), n.e(779104)]).then(n.bind(n, "FQ1K"))).SelectedTextAnnotationEditor, {
            suspendToParent: !0,
            errorFallback: e => (0, a.jsx)(v, {
                failed: !0,
                onClose: e.onCancel
            })
        });

        function f(e) {
            let t, n, o, i, l, d, u, h, m = (0, r.c)(18);
            m[0] !== e ? ({
                entryRect: t,
                ...n
            } = e, m[0] = e, m[1] = t, m[2] = n) : (t = m[1], n = m[2]), m[3] !== n.onCancel ? (o = (0, a.jsx)(v, {
                failed: !0,
                onClose: n.onCancel
            }), m[3] = n.onCancel, m[4] = o) : o = m[4], m[5] !== n.onCancel ? (i = (0, a.jsx)(v, {
                onClose: n.onCancel
            }), m[5] = n.onCancel, m[6] = i) : i = m[6], m[7] !== n ? (l = (0, a.jsx)(g, {
                ...n
            }), m[7] = n, m[8] = l) : l = m[8], m[9] !== i || m[10] !== l ? (d = (0, a.jsx)(s.Suspense, {
                fallback: i,
                children: l
            }), m[9] = i, m[10] = l, m[11] = d) : d = m[11], m[12] !== o || m[13] !== d ? (u = (0, a.jsx)(c.a, {
                name: "ResponseTextAnnotationEditor",
                fallback: o,
                children: d
            }), m[12] = o, m[13] = d, m[14] = u) : u = m[14];
            let f = u;
            return m[15] !== f || m[16] !== t ? (h = null == t ? f : (0, a.jsx)(p, {
                source: t,
                children: f
            }), m[15] = f, m[16] = t, m[17] = h) : h = m[17], h
        }

        function v(e) {
            let t, n, s, c, d = (0, r.c)(9),
                {
                    failed: h,
                    onClose: m
                } = e,
                p = void 0 !== h && h,
                g = p ? "alert" : "status";
            return d[0] !== p ? (t = p ? (0, a.jsx)(o.a, {
                id: "responseTextAnnotationMarkers.editor.loadError",
                defaultMessage: "Couldn't load the editor. Reload to try again",
                description: "Error inside the response annotation editor when its code fails to download after retrying. Reloading the app allows another attempt."
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(u.a, {}), (0, a.jsx)(o.a, {
                    id: "responseTextAnnotationMarkers.editor.loading",
                    defaultMessage: "Loading editor…",
                    description: "Loading status inside the editor for a comment on selected response text"
                })]
            }), d[0] = p, d[1] = t) : t = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(o.a, {
                id: "responseTextAnnotationMarkers.editor.close",
                defaultMessage: "Close",
                description: "Button that dismisses a loading or unavailable response annotation editor while preserving the annotation"
            }), d[2] = n) : n = d[2], d[3] !== m ? (s = (0, a.jsx)(l.a, {
                color: "secondary",
                onClick: m,
                children: n
            }), d[3] = m, d[4] = s) : s = d[4], d[5] !== g || d[6] !== t || d[7] !== s ? (c = (0, a.jsxs)(i.a, {
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
                        homePath: m,
                        onUnavailable: p,
                        children: g
                    } = e,
                    f = (0, r.y)(l.a),
                    v = (0, o._)(),
                    y = (0, s.useRef)(!1);
                d[0] !== m || d[1] !== h || d[2] !== v || d[3] !== p || d[4] !== f ? (t = () => {
                    p?.(), f.get(i.f).info(h, {
                        id: "conversation-inaccessible",
                        duration: 5
                    }), v(m, {
                        replace: !0
                    })
                }, d[0] = m, d[1] = h, d[2] = v, d[3] = p, d[4] = f, d[5] = t) : t = d[5];
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
                [C] = (0, o.useState)(m);
            return f[0] !== b || f[1] !== C || f[2] !== x || f[3] !== v ? (t = () => {
                if (i.appServices?.windowTitle == null) return;
                let e = {
                    owner: C,
                    title: null == v ? void 0 : b ?? null
                };
                x.set(u, t => t.some(e => e.owner === C) ? t.map(t => t.owner === C ? e : t) : [...t, e]), g(x)
            }, n = [x, C, v, b], f[0] = b, f[1] = C, f[2] = x, f[3] = v, f[4] = t, f[5] = n) : (t = f[4], n = f[5]), (0, o.useEffect)(t, n), f[6] !== C || f[7] !== x ? (a = () => () => {
                i.appServices?.windowTitle != null && (x.set(u, e => e.filter(e => e.owner !== C)), g(x))
            }, c = [x, C], f[6] = C, f[7] = x, f[8] = a, f[9] = c) : (a = f[8], c = f[9]), (0, o.useEffect)(a, c), f[10] !== v ? (d = () => {
                if (null == v) return;
                let e = document.title;
                p(v);
                let t = document.title;
                return () => {
                    document.title === t && p(e)
                }
            }, h = [v], f[10] = v, f[11] = d, f[12] = h) : (d = f[11], h = f[12]), (0, o.useEffect)(d, h), null
        }

        function m() {
            return Symbol()
        }

        function p(e) {
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
            m = n("OtLV"),
            p = n("sfmI"),
            g = n("QmkR"),
            f = n("Yrvy"),
            v = n("HOLv"),
            y = n("SGsN"),
            b = n("nlNF"),
            x = n("iGet"),
            C = n("OWtl"),
            w = n("MRlq"),
            _ = n("HFSu"),
            j = n("vNLk"),
            I = n("PCxL"),
            S = n("aZgH"),
            T = n("CzoK");
        n.d(t, {}, {
            a: function(e) {
                let t, n, P, A, E, k, M, R, N, O, z, G, F, B, L = (0, r.c)(59),
                    {
                        conversationId: D,
                        kind: W
                    } = e,
                    H = (0, o.y)(C.a),
                    q = (0, l.a)(),
                    U = (0, d.Y)(),
                    K = (0, d._)(),
                    V = (0, o.z)(I.h),
                    Q = (0, o.z)(u.h),
                    Y = (0, o.z)(u.g);
                L[0] !== Q || L[1] !== D || L[2] !== Y || L[3] !== W || L[4] !== V ? (t = "chatgpt" === W && V?.kind === "chatgpt" && V.conversation.id === D && (0, p.a)(V.conversation, Q, Y) ? V.conversation : null, L[0] = Q, L[1] = D, L[2] = Y, L[3] = W, L[4] = V, L[5] = t) : t = L[5];
                let $ = t,
                    [X, J] = (0, i.useState)(!1),
                    {
                        mutate: Z,
                        isPending: ee
                    } = (0, f.a)(D);
                L[6] !== U.hash || L[7] !== U.pathname || L[8] !== U.search || L[9] !== K || L[10] !== H ? (n = () => {
                    (0, I.e)(H), K({
                        pathname: U.pathname,
                        search: U.search,
                        hash: U.hash
                    }, {
                        replace: !0,
                        state: null
                    })
                }, L[6] = U.hash, L[7] = U.pathname, L[8] = U.search, L[9] = K, L[10] = H, L[11] = n) : n = L[11];
                let et = n,
                    en = (0, o.z)(I.g);
                L[12] !== D || L[13] !== en ? (P = en?.find(e => (0, S.a)(e.task) === `hosted:${D}`), L[12] = D, L[13] = en, L[14] = P) : P = L[14];
                let ea = P;
                L[15] !== D || L[16] !== H ? (A = () => {
                    let e = H.get(I.h);
                    return null != e && (0, S.a)(e) === `hosted:${D}` ? (0, I.d)(H, e) : void 0
                }, L[15] = D, L[16] = H, L[17] = A) : A = L[17], L[18] !== D || L[19] !== W || L[20] !== H ? (E = async () => {
                    if ("cloud" === W) {
                        await _.CodexRequest.safePost("/wham/tasks/{task_id}/recover", {
                            parameters: {
                                path: {
                                    task_id: D
                                }
                            }
                        }), (0, x.c)(H, D, !1);
                        return
                    }
                    await (0, g.W)({
                        scope: H,
                        conversationId: D
                    })
                }, L[18] = D, L[19] = W, L[20] = H, L[21] = E) : E = L[21], L[22] !== D || L[23] !== et || L[24] !== W || L[25] !== H ? (k = (e, t, n) => {
                    n?.("restored");
                    let r = H.get(y.f).info((0, a.jsx)(c.a, {
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
                        id: `unarchive-thread-${W}:${D}`
                    })
                }, L[22] = D, L[23] = et, L[24] = W, L[25] = H, L[26] = k) : k = L[26], L[27] !== q || L[28] !== H ? (M = (e, t, n) => {
                    n?.(null), H.get(y.f).danger(q.formatMessage(w.a.unarchiveError), {
                        errorAnalytics: {
                            toastId: "previewFooter.onError.unarchiveError"
                        }
                    })
                }, L[27] = q, L[28] = H, L[29] = M) : M = L[29], L[30] !== A || L[31] !== E || L[32] !== k || L[33] !== M ? (R = {
                    onMutate: A,
                    mutationFn: E,
                    onSuccess: k,
                    onError: M
                }, L[30] = A, L[31] = E, L[32] = k, L[33] = M, L[34] = R) : R = L[34];
                let {
                    mutate: er,
                    isPending: es,
                    isSuccess: eo
                } = (0, s.a)(R);
                L[35] !== Z || L[36] !== K || L[37] !== H ? (N = e => {
                    let t = H.get(I.c),
                        n = H.get(b.c),
                        a = H.get(u.f);
                    Z(e, {
                        onSuccess: () => {
                            if (J(!1), t !== H.get(I.c) || n !== H.get(b.c) || a !== H.get(u.f)) return;
                            H.set(I.h, null);
                            let e = t?.pathname === I.a ? t : null;
                            K(e ?? "/", {
                                replace: !0,
                                state: e?.state ?? null
                            })
                        }
                    })
                }, L[35] = Z, L[36] = K, L[37] = H, L[38] = N) : N = L[38];
                let ei = N;
                L[39] !== $ ? (O = null == $ ? void 0 : () => J(!0), L[39] = $, L[40] = O) : O = L[40];
                let el = eo || ea?.status === "restored",
                    ec = es || ea?.status === "restoring";
                return L[41] !== er ? (z = () => er(), L[41] = er, L[42] = z) : z = L[42], L[43] !== et || L[44] !== ee || L[45] !== O || L[46] !== el || L[47] !== ec || L[48] !== z ? (G = (0, a.jsx)(j.a, {
                    deleting: ee,
                    onDelete: O,
                    restored: el,
                    restoring: ec,
                    onUnarchive: z,
                    onDone: et
                }), L[43] = et, L[44] = ee, L[45] = O, L[46] = el, L[47] = ec, L[48] = z, L[49] = G) : G = L[49], L[50] !== $ || L[51] !== ei || L[52] !== q || L[53] !== X || L[54] !== ee ? (F = null != $ && (0, a.jsx)(h.a, {
                    allowArtifactDeletion: !0,
                    title: $.title?.trim() || q.formatMessage(m.a.newChat),
                    open: X,
                    isDeleting: ee,
                    onOpenChange: J,
                    onConfirm: ei
                }), L[50] = $, L[51] = ei, L[52] = q, L[53] = X, L[54] = ee, L[55] = F) : F = L[55], L[56] !== G || L[57] !== F ? (B = (0, a.jsxs)(a.Fragment, {
                    children: [G, F]
                }), L[56] = G, L[57] = F, L[58] = B) : B = L[58], B
            }
        })
    })
};