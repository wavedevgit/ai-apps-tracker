export const __rspack_esm_ids = [261147];
export const __webpack_modules__ = {
    UNoV: (function(e, t) {
        t.a = {
            Title: "Title-FbVjGN",
            title: "Title-FbVjGN",
            Progress: "Progress-dSoGxD",
            progress: "Progress-dSoGxD"
        }
    }),
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
            a: () => F,
            ChatSeatAccessScreen: () => z
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("BolX"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("rEML"),
            c = n("StMt"),
            d = n("OFP1"),
            u = n("kphc"),
            h = n("Sm6l"),
            p = n("DVOM"),
            g = n("OWtl"),
            m = n("mBJV"),
            f = n("Wf1j"),
            v = n("ASxG"),
            y = n("fDv2"),
            b = n("rLEB"),
            x = n("Ietk"),
            C = n("twmu"),
            _ = n("EOo5"),
            w = n("Kwur"),
            I = n("udGC"),
            S = n("aTcy"),
            T = n("JNtf"),
            j = n("mUDD"),
            E = n("Ot7V"),
            P = n("SGsN"),
            A = n("DAA7"),
            M = n("yGJW"),
            R = n("GDNt");

        function k(e) {
            let t, n, l, c, d, u, p, v, y, R, k, B, z, G, F, L, D, H, W, q, U, K, V = (0, r.c)(70),
                {
                    account: Y,
                    accountId: Q,
                    userId: $,
                    onClose: X,
                    onSwitchToWork: J
                } = e,
                Z = (0, s.y)(g.a),
                ee = (0, f.a)(),
                {
                    email: et
                } = (0, _.a)(),
                [en, ea] = (0, o.useState)(),
                er = (0, o.useRef)(!0);
            V[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => (er.current = !0, () => {
                er.current = !1
            }), n = [], V[0] = t, V[1] = n) : (t = V[0], n = V[1]), (0, o.useEffect)(t, n);
            let es = "account-owner" === Y.account.account_user_role,
                eo = "account-admin" === Y.account.account_user_role,
                ei = !0 === Y.entitlement.has_active_subscription,
                el = (es || eo) && ei,
                ec = es || el;
            V[2] !== el || V[3] !== es ? (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE", el ? l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY" : es && (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE"), V[2] = el, V[3] = es, V[4] = l) : l = V[4], V[5] !== Y.account.account_user_role || V[6] !== l || V[7] !== ei || V[8] !== Z ? (c = (e, t) => {
                (0, M.a)(Z, m.yd, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: Y.account.account_user_role ?? void 0,
                    hasPaidSubscription: ei
                })
            }, V[5] = Y.account.account_user_role, V[6] = l, V[7] = ei, V[8] = Z, V[9] = c) : c = V[9];
            let ed = c;
            V[10] !== X ? (d = () => {
                X(), (0, E.f)({
                    href: new URL("/codex/cloud", S.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, V[10] = X, V[11] = d) : d = V[11];
            let eu = d;
            V[12] !== Y.account.subscription_seat_pools_enabled || V[13] !== Q || V[14] !== eu || V[15] !== el || V[16] !== et || V[17] !== ee || V[18] !== es || V[19] !== ed || V[20] !== X || V[21] !== J || V[22] !== en || V[23] !== Z || V[24] !== $ ? (u = async () => {
                if ("requesting" !== en) {
                    if (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), es && !el) {
                        let e = new URL("/admin/members", S.h);
                        e.searchParams.set("account_id", Q), et && e.searchParams.set("search", et);
                        let t = e.toString(),
                            n = (0, A.c)(Z, t, Q),
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
                            if (Y.account.subscription_seat_pools_enabled ? await w.Request.safePost("/accounts/{account_id}/users/{user_id}/seat/update", {
                                    parameters: {
                                        path: {
                                            account_id: Q,
                                            user_id: $
                                        }
                                    },
                                    requestBody: {
                                        operation: "switch",
                                        seat_type: "default"
                                    },
                                    isExpectedError: O
                                }) : await w.Request.safePatch("/accounts/{account_id}/users/{user_id}", {
                                    parameters: {
                                        path: {
                                            account_id: Q,
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
                            (0, I.e)(Z), await (0, x.g)("accounts-check"), await Promise.all([Z.query.invalidate(C.b, Q), Z.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), er.current && X()
                        } else {
                            if ((0, b.c)(Z, Q), await w.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: Q
                                        }
                                    }
                                }), !er.current) return;
                            J ? (X(), J()) : eu(), Z.get(P.f).success(ee.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted"
                            }))
                        }
                    } catch (e) {
                        er.current && ea(N(e) ?? "error")
                    }
                }
            }, V[12] = Y.account.subscription_seat_pools_enabled, V[13] = Q, V[14] = eu, V[15] = el, V[16] = et, V[17] = ee, V[18] = es, V[19] = ed, V[20] = X, V[21] = J, V[22] = en, V[23] = Z, V[24] = $, V[25] = u) : u = V[25];
            let eh = u;
            V[26] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.title",
                defaultMessage: "You don’t have access to Chat on this plan"
            }), V[26] = p) : p = V[26];
            let ep = p;
            V[27] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.message",
                defaultMessage: "You are assigned Work access only. Reach out to your admin to request access to ChatGPT."
            }), V[27] = v) : v = V[27];
            let eg = v;
            if (ec) {
                let e;
                V[28] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.ownerMessage",
                    defaultMessage: "Your current seat is Work-only. Update your seat type in Workspace settings to start using ChatGPT."
                }), V[28] = e) : e = V[28], eg = e
            } else if (eo) {
                let e;
                V[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.adminMessage",
                    defaultMessage: "You are assigned Work access only. Ask your workspace owner to buy ChatGPT seats, then update your seat type in Workspace settings."
                }), V[29] = e) : e = V[29], eg = e
            }
            V[30] !== ed || V[31] !== X ? (y = e => {
                e || (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED"), X())
            }, V[30] = ed, V[31] = X, V[32] = y) : y = V[32], V[33] !== eh ? (R = e => {
                e.preventDefault(), eh()
            }, V[33] = eh, V[34] = R) : R = V[34], V[35] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, a.jsx)(T.e, {
                className: "heading-lg font-semibold",
                children: ep
            }), V[35] = k) : k = V[35], V[36] !== eg ? (B = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [k, (0, a.jsx)(T.d, {
                    className: "text-lg leading-6 text-secondary",
                    children: eg
                })]
            }), V[36] = eg, V[37] = B) : B = V[37];
            let em = "requesting" === en,
                ef = "requesting" === en;
            return V[38] !== ec ? (z = ec ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.updateSeatButton",
                defaultMessage: "Update seat"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access"
            }), V[38] = ec, V[39] = z) : z = V[39], V[40] !== em || V[41] !== ef || V[42] !== z ? (G = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: em,
                disabled: ef,
                children: z
            }), V[40] = em, V[41] = ef, V[42] = z, V[43] = G) : G = V[43], V[44] !== eu || V[45] !== ed || V[46] !== X || V[47] !== J ? (F = () => {
                J ? (X(), J()) : (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), eu())
            }, V[44] = eu, V[45] = ed, V[46] = X, V[47] = J, V[48] = F) : F = V[48], V[49] !== J ? (L = J ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex"
            }), V[49] = J, V[50] = L) : L = V[50], V[51] !== F || V[52] !== L ? (D = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: F,
                children: L
            }), V[51] = F, V[52] = L, V[53] = D) : D = V[53], V[54] !== G || V[55] !== D ? (H = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [G, D]
            }), V[54] = G, V[55] = D, V[56] = H) : H = V[56], V[57] !== ee || V[58] !== en ? (W = null != en && "requesting" !== en ? (0, a.jsx)("p", {
                className: "text-sm text-secondary",
                role: "alert",
                children: "error" !== en ? (0, a.jsx)(i.a, {
                    id: "businessSeatRenewal.wait",
                    defaultMessage: "Seat changes are temporarily unavailable. Please try again after {time}.",
                    values: {
                        time: ee.formatDate(en.retry_at, {
                            dateStyle: "medium",
                            timeStyle: "short"
                        })
                    }
                }) : (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.errorMessage",
                    defaultMessage: "Could not request access. Please contact your workspace administrator to grant ChatGPT access."
                })
            }) : null, V[57] = ee, V[58] = en, V[59] = W) : W = V[59], V[60] !== B || V[61] !== H || V[62] !== W ? (q = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-8 p-10 text-center",
                children: [B, H, W]
            }), V[60] = B, V[61] = H, V[62] = W, V[63] = q) : q = V[63], V[64] !== q || V[65] !== R ? (U = (0, a.jsx)(j.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: R,
                children: q
            }), V[64] = q, V[65] = R, V[66] = U) : U = V[66], V[67] !== U || V[68] !== y ? (K = (0, a.jsx)(T.a, {
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
            if (e instanceof R.a && 409 === e.status) try {
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

        function z(e) {
            let t, n, o = (0, r.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, s.y)(g.a),
                p = (0, s.z)(B.a),
                m = (0, s.z)(d.v),
                f = (0, l._)();
            if ("restricted" !== p.status) return null;
            let v = `${p.accountId}:${p.userId}`;
            return o[0] !== f || o[1] !== c || o[2] !== h || o[3] !== m.status ? (t = "allowed" === m.status ? c ?? (() => {
                (0, u.m)(h, "work"), f("/")
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
                f = (0, s.z)(B.a),
                [v, y] = (0, o.useState)(!1);
            return "restricted" !== f.status ? null : (u[0] !== g ? (t = null == g ? null : (0, a.jsx)(p.c, {
                children: g
            }), u[0] = g, u[1] = t) : t = u[1], u[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)("h1", {
                className: "heading-xl font-normal text-default",
                children: (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.title",
                    defaultMessage: "You don’t have access to Chat on this plan"
                })
            }), u[2] = n) : n = u[2], u[3] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)("main", {
                ref: void 0,
                className: "flex h-full min-h-0 flex-1 items-center justify-center px-panel",
                children: (0, a.jsxs)("div", {
                    className: "flex w-full max-w-3xl flex-col items-center gap-8 text-center select-none",
                    children: [n, (0, a.jsx)(h.a, {
                        onClick: () => y(!1),
                        children: (0, a.jsx)(i.a, {
                            id: "chatSeatAccess.reviewAccess",
                            defaultMessage: "Review access options"
                        })
                    })]
                })
            }), u[3] = l) : l = u[3], u[4] !== v || u[5] !== m || u[6] !== f.account || u[7] !== f.accountId || u[8] !== f.userId ? (c = v ? null : (0, a.jsx)(k, {
                account: f.account,
                accountId: f.accountId,
                userId: f.userId,
                onClose: () => y(!0),
                onSwitchToWork: m
            }), u[4] = v, u[5] = m, u[6] = f.account, u[7] = f.accountId, u[8] = f.userId, u[9] = c) : c = u[9], u[10] !== t || u[11] !== c ? (d = (0, a.jsxs)(a.Fragment, {
                children: [t, l, c]
            }), u[10] = t, u[11] = c, u[12] = d) : d = u[12], d)
        }

        function F(e) {
            let t, n, o = (0, r.c)(4),
                {
                    children: i,
                    enabled: l
                } = e;
            o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "chatgpt.seat-access"
            }, o[0] = t) : t = o[0];
            let d = (0, s.x)(c.a, t);
            return l ? d.isLoading ? null : (o[1] !== d.isCapable || o[2] !== i ? (n = d.isCapable ? (0, a.jsx)(z, {}) : i, o[1] = d.isCapable, o[2] = i, o[3] = n) : n = o[3], n) : i
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
                    g = (0, s.y)(i.a),
                    m = (0, s.z)("home" === g.value.routeKind && l.a),
                    f = m ? "floating" : p,
                    v = !m && t.reserveContent,
                    y = !!m || t.showHeader;
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
                if (!n(l.e, "3901104270")) return [];
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
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, r.c)(3),
                    {
                        children: i,
                        binding: l
                    } = e,
                    [c] = (0, s.useState)(o.b),
                    d = l ?? c;
                return n[0] !== i || n[1] !== d ? (t = (0, a.jsx)(o.a, {
                    value: d,
                    children: i
                }), n[0] = i, n[1] = d, n[2] = t) : t = n[2], t
            }
        })
    }),
    zJsu: (function(e, t, n) {
        n.d(t, {
            BusinessAgentConversationHeader: () => U,
            BusinessAgentHomeHero: () => K
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("BolX"),
            o = n("Cslg"),
            i = n("dJI3"),
            l = n("nlNF"),
            c = n("OWtl"),
            d = n("aFoA"),
            u = n("OOaz"),
            h = n("dQRk"),
            p = n("jAnS"),
            g = n("nUDt"),
            m = n("lSqO"),
            f = n("grx7"),
            v = n("zd8w"),
            y = n("oyxz"),
            b = n("L6H2"),
            x = n("MM0V"),
            C = n("Sm6l"),
            _ = n("JNtf"),
            w = n("mUDD"),
            I = n("ZtSy"),
            S = n("HOLv"),
            T = n("mEbU"),
            j = n("RU3e"),
            E = n("UIU6"),
            P = n("Bbed"),
            A = n("T1PX");
        let M = (0, P.a)(async () => {
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
                return (0, a.jsx)(O, {})
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
                } = t, [r, s] = (0, v.useState)(!1), [o] = (0, v.useState)(() => {
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
            errorFallback: (0, a.jsx)(O, {})
        });

        function R(e) {
            let t, n = (0, r.c)(2),
                s = (0, A.a)();
            return n[0] !== s ? (t = (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden",
                children: s ? (0, a.jsx)(O, {}) : (0, a.jsx)(k, {})
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function k(e) {
            let t, n, o, i = (0, r.c)(7),
                l = (0, v.useRef)(null),
                c = (0, T.a)(l),
                d = (0, s.z)(j.b),
                [u, h] = (0, v.useState)(!1);
            if (u) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(O, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(O, {}), i[1] = t) : t = i[1], i[2] !== c || i[3] !== d ? (n = c && !0 === d ? (0, a.jsx)(M, {
                onError: () => h(!0)
            }) : null, i[2] = c, i[3] = d, i[4] = n) : n = i[4], i[5] !== n ? (o = (0, a.jsx)(E.a, {
                name: "BusinessAgentDisclosureHero",
                fallback: t,
                children: (0, a.jsx)("div", {
                    ref: l,
                    className: "absolute inset-0",
                    children: n
                })
            }), i[5] = n, i[6] = o) : o = i[6], o
        }

        function O(e) {
            let t, n = (0, r.c)(1);
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("img", {
                className: "absolute inset-0 size-full object-cover",
                alt: "",
                draggable: !1,
                referrerPolicy: "no-referrer",
                src: "https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-static-ade5a622504d70d9.png"
            }), n[0] = t) : t = n[0], t
        }
        var N = {
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
            B = {
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

        function z(e) {
            let t, n, s, o, i, l = (0, r.c)(11),
                {
                    state: c
                } = e,
                d = "ready" === c.status ? c.context : c,
                u = d.businessName ?? null,
                h = d.logoUrl ?? null;
            return l[0] !== u || l[1] !== h ? (t = (0, a.jsx)(b.a, {
                alt: "",
                name: u,
                size: "md",
                src: h
            }), l[0] = u, l[1] = h, l[2] = t) : t = l[2], l[3] !== d.businessName ? (n = (0, a.jsx)("span", {
                className: "truncate text-sm font-semibold",
                children: (0, a.jsx)(L, {
                    businessName: d.businessName
                })
            }), l[3] = d.businessName, l[4] = n) : n = l[4], l[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)("span", {
                className: "truncate text-xs font-normal text-secondary",
                children: (0, a.jsx)(y.a, {
                    id: "chatgpt.ads.business_agent.thread_header.subtitle",
                    defaultMessage: "Business chat"
                })
            }), l[5] = s) : s = l[5], l[6] !== n ? (o = (0, a.jsxs)("span", {
                className: "flex min-w-0 flex-col text-start",
                children: [n, s]
            }), l[6] = n, l[7] = o) : o = l[7], l[8] !== t || l[9] !== o ? (i = (0, a.jsxs)("span", {
                className: "flex min-w-0 items-center gap-2 select-none",
                children: [t, o]
            }), l[8] = t, l[9] = o, l[10] = i) : i = l[10], i
        }

        function G(e) {
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
                n[7] !== d || n[8] !== u ? (e = (0, a.jsx)(b.a, {
                    alt: "",
                    name: d,
                    size: "lg",
                    src: u
                }), n[7] = d, n[8] = u, n[9] = e) : e = n[9], n[10] !== i.businessName ? (r = (0, a.jsx)("h1", {
                    className: "heading-xl font-normal text-default select-none",
                    children: (0, a.jsx)(L, {
                        businessName: i.businessName
                    })
                }), n[10] = i.businessName, n[11] = r) : r = n[11], n[12] !== s.status ? (l = "ready" !== s.status ? (0, a.jsx)(x.a, {
                    ariaLive: "polite",
                    role: "failed" === s.status ? "alert" : "status",
                    type: "failed" === s.status ? "error" : "normal",
                    content: "failed" === s.status ? (0, a.jsx)(y.a, {
                        id: "chatgptConversations.businessAgent.unavailable",
                        defaultMessage: "This Business Agent is unavailable. Please return to the ad and try again"
                    }) : (0, a.jsx)(y.a, {
                        id: "chatgptConversations.businessAgent.loading",
                        defaultMessage: "Opening Business Agent…"
                    })
                }) : null, n[12] = s.status, n[13] = l) : l = n[13], t = (0, a.jsxs)("div", {
                    className: "mx-auto flex w-[min(100%,var(--thread-content-max-width))] min-w-0 flex-col items-center gap-3 px-panel text-center",
                    children: [e, r, l, null != c && (c.length > 1 || 1 === c.length && "ready" === s.status && !0 === s.context.disablePrefill) ? (0, a.jsx)("div", {
                        className: "mt-3 flex flex-wrap justify-center gap-2 select-none",
                        children: c.map(e => (0, a.jsx)(C.a, {
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

        function F(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g, m, f, b, x, T, j = (0, r.c)(29),
                {
                    context: E,
                    onPresented: P,
                    onContinue: A,
                    onDismiss: M
                } = e,
                [k, O] = (0, v.useState)(!0 === E.showDisclosureModal);
            j[0] !== E.privacyPolicyUrl ? (t = function(e) {
                if (null == e) return null;
                try {
                    let t = new URL(e);
                    return ("https:" === t.protocol || "http:" === t.protocol) && t.hostname ? t.href : null
                } catch {
                    return null
                }
            }(E.privacyPolicyUrl), j[0] = E.privacyPolicyUrl, j[1] = t) : t = j[1];
            let z = t;
            return j[2] !== M ? (n = e => {
                O(e), e || M?.()
            }, j[2] = M, j[3] = n) : n = j[3], j[4] !== P ? (s = {
                "data-theme": "light",
                onOpenAutoFocus: P
            }, j[4] = P, j[5] = s) : s = j[5], j[6] !== A ? (o = e => {
                e.preventDefault(), O(!1), A?.()
            }, j[6] = A, j[7] = o) : o = j[7], j[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(R, {}), j[8] = i) : i = j[8], j[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(_.e, {
                className: "heading-lg text-center leading-7 font-semibold",
                children: (0, a.jsx)(y.a, {
                    id: "chatgptConversations.businessAgent.disclosureTitle",
                    defaultMessage: "About chatting with businesses"
                })
            }), j[9] = l) : l = j[9], j[10] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(S.a, {
                className: "shrink-0",
                asset: N
            }), j[10] = c) : c = j[10], j[11] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(y.a, {
                    id: "chatgptConversations.businessAgent.disclosureQuestionsTitle",
                    defaultMessage: "Ask questions and compare options"
                })
            }), j[11] = d) : d = j[11], j[12] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [c, (0, a.jsxs)("div", {
                    className: "flex min-w-0 flex-col gap-0.5",
                    children: [d, (0, a.jsx)("p", {
                        className: "text-base leading-snug tracking-tight text-secondary",
                        children: (0, a.jsx)(y.a, {
                            id: "chatgptConversations.businessAgent.disclosureQuestionsBody",
                            defaultMessage: "Learn what the business offers and ask detailed follow-ups as you decide."
                        })
                    })]
                })]
            }), j[12] = u) : u = j[12], j[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(S.a, {
                className: "shrink-0",
                asset: B
            }), j[13] = h) : h = j[13], j[14] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(y.a, {
                    id: "chatgptConversations.businessAgent.disclosureUsageTrendsTitle",
                    defaultMessage: "Your chats remain private"
                })
            }), j[14] = p) : p = j[14], j[15] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [l, (0, a.jsx)(_.d, {
                    asChild: !0,
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [u, (0, a.jsxs)("div", {
                            className: "flex items-start gap-3",
                            children: [h, (0, a.jsxs)("div", {
                                className: "flex min-w-0 flex-col gap-0.5",
                                children: [p, (0, a.jsx)("p", {
                                    className: "text-base leading-snug tracking-tight text-secondary",
                                    children: (0, a.jsx)(y.a, {
                                        id: "chatgptConversations.businessAgent.disclosureUsageTrendsBody",
                                        defaultMessage: "Businesses can’t see your chats or your personal info — just overall usage trends to help improve their AI agent."
                                    })
                                })]
                            })]
                        })]
                    })
                })]
            }), j[15] = g) : g = j[15], j[16] !== z ? (m = null == z ? null : (0, a.jsx)(I.a, {
                href: z,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(y.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy"
                })
            }), j[16] = z, j[17] = m) : m = j[17], j[18] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, a.jsx)("div", {
                className: "flex justify-center",
                children: (0, a.jsx)(C.a, {
                    color: "primary",
                    size: "dialogAction",
                    type: "submit",
                    children: (0, a.jsx)(y.a, {
                        id: "chatgptConversations.businessAgent.disclosureStartChat",
                        defaultMessage: "Start chatting"
                    })
                })
            }), j[18] = f) : f = j[18], j[19] !== m ? (b = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [g, m, f]
                })]
            }), j[19] = m, j[20] = b) : b = j[20], j[21] !== b || j[22] !== o ? (x = (0, a.jsx)(w.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: o,
                children: b
            }), j[21] = b, j[22] = o, j[23] = x) : x = j[23], j[24] !== k || j[25] !== x || j[26] !== n || j[27] !== s ? (T = (0, a.jsx)(_.a, {
                open: k,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: s,
                children: x
            }), j[24] = k, j[25] = x, j[26] = n, j[27] = s, j[28] = T) : T = j[28], T
        }

        function L(e) {
            let t, n = (0, r.c)(2),
                {
                    businessName: s
                } = e;
            return n[0] !== s ? (t = s?.trim() ? (0, a.jsx)(a.Fragment, {
                children: s
            }) : (0, a.jsx)(y.a, {
                id: "chatgpt.ads.business_agent.disclosure.fallback_name",
                defaultMessage: "Business Agent"
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var D = n("KWLf"),
            H = n("Z98x"),
            W = n("zHQF");
        let q = (0, s.d)(c.a, (e, t) => {
            let {
                get: n
            } = t, a = n(l.c), r = a?.state?.businessProfileShareConversation, s = r?.intent ?? a?.state?.businessProfileShare, c = r?.conversationId ?? a?.state?.initialChatGptConversationId;
            if (null == a || s?.destination?.kind !== "agent" || "string" != typeof s.shareSessionId || "string" != typeof c || 0 === c.length || (0, d.c)(n, c) !== (0, d.c)(n, e) || !n(D.a) || !n(m.b) || n(o.f) !== s.accountId || n(o.k) !== s.userId) return null;
            if (null != r) {
                if ((0, p.j)(a.pathname)?.params.conversationId !== r.conversationId) return null
            } else if ("/" !== a.pathname && !(0, i.a)(a, n(l.d))) return null;
            let u = n(h.u, e);
            if (null == u || u.accountId !== s.accountId || null != u.userId && u.userId !== s.userId) return null;
            let g = s.destination;
            return ("ready" === u.status ? u.context.gizmoId === g.gizmoId && u.context.businessAgentId === g.businessAgentId : u.gizmoId === g.gizmoId) ? s.shareSessionId : null
        });

        function U(e) {
            let t, n, o = (0, r.c)(5),
                {
                    conversationId: i,
                    fallback: l
                } = e,
                c = (0, s.x)(h.u, i),
                d = (0, s.x)(null == c ? null : q, i);
            if (null == c) return l;
            o[0] !== c ? (t = (0, a.jsx)(z, {
                state: c
            }), o[0] = c, o[1] = t) : t = o[1];
            let u = t;
            return o[2] !== u || o[3] !== d ? (n = null != d ? (0, a.jsx)(H.a, {
                shareSessionId: d,
                children: u
            }) : u, o[2] = u, o[3] = d, o[4] = n) : n = o[4], n
        }

        function K(e) {
            let t, n, o, i = (0, r.c)(18),
                {
                    conversationId: d,
                    fallback: p,
                    onStarterPromptSelect: g
                } = e,
                m = (0, s.y)(c.a),
                v = (0, s.x)(h.u, d),
                y = (0, s.z)(v?.status === "failed" ? l.c : null),
                b = y?.state?.businessProfileChat;
            if (v?.status === "failed" && b && y?.state?.initialChatGptConversationId === d && y.state.initialChatGptBusinessAgentGizmoId === b.gizmoId && (0, u.e)(d)) {
                let e;
                if (v.accountId !== b.accountId || null != v.userId && v.userId !== b.userId) {
                    let e;
                    return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(W.b, {}), i[0] = e) : e = i[0], e
                }
                return i[1] !== d || i[2] !== b || i[3] !== m || i[4] !== v.businessName || i[5] !== v.logoUrl ? (e = (0, a.jsx)(W.a, {
                    retry: () => void(0, f.a)(m, d, b, {
                        businessName: v.businessName,
                        logoUrl: v.logoUrl
                    })
                }), i[1] = d, i[2] = b, i[3] = m, i[4] = v.businessName, i[5] = v.logoUrl, i[6] = e) : e = i[6], e
            }
            return null == v ? p : (i[7] !== p || i[8] !== g || i[9] !== v ? (t = "ready" !== v.status || v.context.showConversationStarters ? (0, a.jsx)(G, {
                state: v,
                onStarterPromptSelect: g
            }) : p, i[7] = p, i[8] = g, i[9] = v, i[10] = t) : t = i[10], i[11] !== d || i[12] !== v.context || i[13] !== v.status ? (n = "ready" === v.status ? (0, a.jsx)(V, {
                context: v.context,
                conversationId: d
            }, v.context.interactionId) : null, i[11] = d, i[12] = v.context, i[13] = v.status, i[14] = n) : n = i[14], i[15] !== t || i[16] !== n ? (o = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), i[15] = t, i[16] = n, i[17] = o) : o = i[17], o)
        }

        function V(e) {
            let t, n, o, i = (0, r.c)(11),
                {
                    context: l,
                    conversationId: d
                } = e,
                u = (0, s.y)(c.a),
                h = (0, s.z)(g.b),
                p = h?.conversationId === d && h.ready;
            return p || !0 === l.showDisclosureModal ? (i[0] !== p || i[1] !== l || i[2] !== h ? (t = p ? {
                ...l,
                showDisclosureModal: !h.presented
            } : l, i[0] = p, i[1] = l, i[2] = h, i[3] = t) : t = i[3], i[4] !== p || i[5] !== d || i[6] !== u ? (n = p ? () => (0, g.a)(u, d) : void 0, i[4] = p, i[5] = d, i[6] = u, i[7] = n) : n = i[7], i[8] !== t || i[9] !== n ? (o = (0, a.jsx)(F, {
                context: t,
                onPresented: n
            }), i[8] = t, i[9] = n, i[10] = o) : o = i[10], o) : null
        }
    }),
    MRPP: (function(e, t, n) {
        var a = n("Zqzr"),
            r = n("ASxG"),
            s = n("Cslg"),
            o = n("kpIY"),
            i = n("Nwp9"),
            l = n("Kwur"),
            c = n("g2p6"),
            d = n("AHqG"),
            u = n("zGlb"),
            h = n("VaAS");
        let p = "chatgpt-business-agent-drafts-v1",
            g = (0, i.b)(p, void 0),
            m = r.record(r.string(), r.unknown()),
            f = r.object({
                userId: r.string().min(1),
                accountId: r.string().min(1),
                expiresAt: r.number(),
                context: r.object({
                    businessAgentId: r.string().min(1),
                    nativeRuntimeVersion: r.literal(1).optional(),
                    gizmoId: r.string().min(1),
                    interactionId: r.uuid(),
                    businessName: r.string().optional(),
                    logoUrl: r.string().optional(),
                    notice: r.string().optional(),
                    headerColor: r.string().optional(),
                    conversationStarters: r.array(r.string()).max(4).optional(),
                    disablePrefill: r.boolean().optional(),
                    showDisclosureModal: r.boolean().optional(),
                    showConversationStarters: r.boolean()
                })
            });

        function v(e, t, n) {
            let a = JSON.stringify([n.userId, n.accountId, t]);
            try {
                return (0, o.t)(p, {
                    entries: {
                        [a]: {
                            value: f.parse({
                                ...n,
                                expiresAt: Date.now() + 864e5
                            })
                        }
                    },
                    maxEntries: 100
                }), e.set(g, (0, o.k)(p)), !0
            } catch {
                return !1
            }
        }
        n.d(t, {}, {
            a: v,
            recoverBusinessAgentDraft: async function(e, t, n) {
                await Promise.all([(0, o.B)(), e.when(e => "loading" !== e.get(s.l).status)]);
                let r = e.get(s.l),
                    i = e.get(c.n),
                    y = e.get(s.k);
                if ("allowed" !== r.status || !("accountId" in r) || null == i || r.accountId !== i || e.get(s.f) !== i || null == y) throw new DOMException("Business Agent account unavailable", "AbortError");
                let b = m.parse(e.get(g) ?? (0, o.k)(p)),
                    x = f.parse(b[JSON.stringify([y, i, t])]);
                if (x.userId !== y || x.accountId !== i || x.context.gizmoId !== n || x.expiresAt <= Date.now()) throw new DOMException("Business Agent draft unavailable", "AbortError");
                let C = e => e(s.k) === y && e(c.n) === i && e(s.f) === i,
                    _ = !1,
                    w = e.watch(e => {
                        let {
                            get: t
                        } = e;
                        _ = _ || !C(t)
                    }),
                    I = () => {
                        if (_ || !C(e.get)) throw new DOMException("Business Agent identity changed", "AbortError");
                        (0, u.c)(e)
                    };
                try {
                    null != x.context.nativeRuntimeVersion && I();
                    let r = await l.Request.safePost("/gizmos/business-agents/{business_agent_id}/interactions", {
                            requestBody: null == x.context.nativeRuntimeVersion ? void 0 : {
                                native_runtime_version: x.context.nativeRuntimeVersion,
                                include_gizmo_resource: !0
                            },
                            parameters: {
                                path: {
                                    business_agent_id: x.context.businessAgentId
                                }
                            },
                            additionalHeaders: {
                                "ChatGPT-Account-ID": i,
                                [a.ac]: i,
                                "x-openai-business-agent-interaction-id": x.context.interactionId
                            }
                        }),
                        s = h.a.parse(r);
                    if (null != x.context.nativeRuntimeVersion && s.business_agent_native_runtime_version !== x.context.nativeRuntimeVersion || _ || !C(e.get) || s.business_agent_id !== x.context.businessAgentId || s.underlying_gizmo_id !== n || s.interaction_id !== x.context.interactionId) throw new DOMException("Business Agent identity changed", "AbortError");
                    let o = s.business_agent_native_runtime_version,
                        c = {
                            ...x.context,
                            nativeRuntimeVersion: o,
                            conversationStarters: null == o ? x.context.conversationStarters : void 0,
                            privacyPolicyUrl: s.privacy_policy_url,
                            animateDisclosure: !1
                        },
                        u = {
                            accountId: i,
                            userId: y,
                            status: "ready",
                            context: c
                        };
                    if (null != o) {
                        I();
                        let n = await (0, d.a)(e, u, r.gizmo_resource);
                        if (_) throw new DOMException("Business Agent identity changed", "AbortError");
                        if (c.businessName = n.gizmo.display.name.trim() || void 0, c.logoUrl = s.favicon_url?.trim() || n.gizmo.display.profile_picture_url?.trim() || void 0, c.headerColor = s.header_color?.trim() || n.gizmo.display.theme?.trim() || void 0, c.conversationStarters = n.gizmo.display.prompt_starters?.slice(0, 4) ?? void 0, null == x.context.nativeRuntimeVersion && !v(e, t, {
                                accountId: i,
                                userId: y,
                                context: c
                            })) throw new DOMException("Business Agent draft unavailable", "AbortError")
                    }
                    return u
                } finally {
                    w()
                }
            },
            removeBusinessAgentDraftsForInteraction: function(e, t) {
                let n = m.safeParse((0, o.k)(p));
                if (!n.success) return;
                let a = {};
                for (let [r, o] of Object.entries(n.data)) {
                    let n = f.safeParse(o);
                    n.success && n.data.userId === e.get(s.k) && n.data.accountId === e.get(c.n) && n.data.context.interactionId === t && (a[r] = null)
                }
                Object.keys(a).length > 0 && ((0, o.t)(p, {
                    entries: a
                }), e.set(g, (0, o.k)(p)))
            }
        })
    }),
    AHqG: (function(e, t, n) {
        var a = n("Kwur"),
            r = n("zGlb"),
            s = n("VaAS");
        n.d(t, {}, {
            a: async function(e, t, n) {
                (0, r.c)(e);
                let o = n ?? await a.Request.safeGet("/gizmos/{gizmo_id_or_short_url}", {
                    parameters: {
                        path: {
                            gizmo_id_or_short_url: t.context.gizmoId
                        }
                    },
                    additionalHeaders: (0, s.d)(t),
                    expectedIdentity: {
                        accountId: t.accountId,
                        userId: t.userId
                    }
                });
                return (0, r.c)(e), (0, r.d)(o, t.context.gizmoId), o
            }
        })
    }),
    grx7: (function(e, t, n) {
        var a = n("kphc"),
            r = n("gBBC"),
            s = n("Ve8c"),
            o = n("dQRk"),
            i = n("lSqO"),
            l = n("GgLN");
        async function c(e, t, n, a) {
            let r, s = e.get(l.b, t);
            if (null != s && "failed" !== s.status) return;
            let o = {
                status: "pending",
                accountId: n.accountId,
                userId: n.userId,
                gizmoId: n.gizmoId,
                ...a,
                showConversationStarters: !1
            };
            if ((0, l.f)(e, t, o), e.get(l.b, t) === o) try {
                r = new i.a(e, n.businessAgentId, {
                    entry_point: "business_profile",
                    source_profile_lookup_id: n.sourceProfileLookupId
                }), await r.prepare({
                    conversationId: t,
                    gizmoId: n.gizmoId
                }), r.open()
            } catch {
                e.get(l.b, t) === o && e.set(l.b, t, {
                    ...o,
                    status: "failed"
                })
            } finally {
                r?.cancel()
            }
        }

        function d(e, t, n, o, i, l) {
            (0, r.d)(e, null), (0, a.n)(e, "chat"), t("/", {
                state: {
                    ...(0, s.c)(i, o, !0),
                    homeDraftClientThreadId: void 0,
                    initialChatGptConversationId: n,
                    initialChatGptBusinessAgentGizmoId: o.id,
                    prefillPrompt: l ?? "",
                    ...null == l ? {} : {
                        prefillPromptFormat: "plain",
                        prefillPromptOnlyIfEmpty: !0
                    }
                }
            })
        }
        n.d(t, {}, {
            a: c,
            b: function(e, t, n, a, r) {
                let s = (0, o.sb)(e),
                    i = c(e, s, n, a);
                return (0, o._b)({
                    scope: e,
                    conversationId: s,
                    projectId: n.gizmoId
                }), d(e, t, s, {
                    id: n.gizmoId,
                    name: a.businessName || n.businessAgentId,
                    iconUrl: a.logoUrl ?? null
                }, {
                    businessProfileChat: n
                }, r), i
            },
            c: function(e, t, n, a, r) {
                let {
                    conversationId: s,
                    context: o
                } = n.open();
                d(e, t, s, {
                    id: o.gizmoId,
                    name: o.businessName ?? o.businessAgentId,
                    iconUrl: o.logoUrl ?? null
                }, a, r)
            }
        })
    }),
    lSqO: (function(e, t, n) {
        var a = n("BolX"),
            r = n("Zqzr"),
            s = n("ASxG"),
            o = n("Cslg"),
            i = n("nUDt"),
            l = n("MRPP"),
            c = n("AHqG"),
            d = n("zGlb"),
            u = n("VaAS"),
            h = n("wwvo"),
            p = n("Kwur"),
            g = n("dQRk"),
            m = n("g2p6"),
            f = n("nlNF"),
            v = n("OWtl"),
            y = n("OMIV");
        let b = u.a.extend({
                requires_click_attribution_bridge: s.literal(!1).optional(),
                entry_context: s.object({
                    entry_channel: s.literal("organic"),
                    entry_point: s.enum(["debug_settings", "business_profile", "shared_link"]),
                    client_platform: s.literal("web"),
                    traffic_class: s.enum(["production", "internal_test"])
                })
            }),
            x = (0, a.c)(v.a, e => {
                let {
                    get: t
                } = e;
                return t(y.e, "699583893") && t(y.e, "199045523")
            }),
            C = (0, a.c)(v.a, e => {
                let {
                    get: t
                } = e, n = t(o.m), a = t(o.l);
                return !n.authLoading && !n.accountLoading && "chatgpt" === n.authMethod && !0 === n.hasChatGptToken && null != n.userId && n.authenticatedUserId === n.userId && "allowed" === a.status && "accountId" in a && a.accountId === n.authenticatedAccountId && t(x)
            });
        n.d(t, {}, {
            a: class {
                scope;
                entry;
                enabled$;
                controller = new AbortController;
                accountId;
                userId;
                navigationVisit;
                businessAgentId;
                unwatch;
                profileDraft;
                preparation;
                ready;
                resource;
                disclosure;
                constructor(e, t, n, a = C) {
                    this.scope = e, this.entry = n, this.enabled$ = a;
                    let r = e.get(m.n),
                        s = e.get(o.k);
                    if (this.businessAgentId = t.trim(), null == r || null == s || !this.businessAgentId) throw Error("Business Agent launch unavailable");
                    this.accountId = r, this.userId = s, this.navigationVisit = e.get(f.e)
                }
                get signal() {
                    return this.controller.signal
                }
                prepare(e) {
                    return null == this.preparation && (this.profileDraft = e, this.preparation = this.createInteraction().catch(e => {
                        throw this.stopWatching(), e
                    })), this.preparation
                }
                open() {
                    this.assertCurrent();
                    let e = this.ready;
                    if (null == e) throw Error("Business Agent launch unavailable");
                    null != e.context.nativeRuntimeVersion && (0, d.c)(this.scope);
                    let t = (0, g.sb)(this.scope, this.profileDraft?.conversationId);
                    if (!(0, l.a)(this.scope, t, {
                            accountId: this.accountId,
                            userId: this.userId,
                            context: e.context
                        })) throw Error("Business Agent draft unavailable");
                    return (0, g._b)({
                        scope: this.scope,
                        conversationId: t,
                        projectId: e.context.gizmoId
                    }), null != this.resource && this.scope.queryClient.setQueryData((0, h.d)(e, t), this.resource), (0, g.Wb)(this.scope, t, e), this.disclosure?.version === 1 && null != this.disclosure.global_impression_count && ((0, i.d)(this.scope, {
                        conversationId: t,
                        accountId: this.accountId,
                        userId: this.userId
                    }), (0, i.e)(this.scope, t, this.disclosure, this.scope.get(y.g)?.getDynamicConfig("3310023174").get("global_impression_limit", 0) ?? 0)), this.cancel(), {
                        conversationId: t,
                        context: e.context
                    }
                }
                cancel = () => {
                    this.controller.abort(), this.stopWatching()
                };
                stopWatching() {
                    this.unwatch?.(), this.unwatch = void 0, window.removeEventListener("pagehide", this.cancel)
                }
                isCurrentVisit(e) {
                    if (e(f.e) === this.navigationVisit) return !0;
                    let t = e(f.c);
                    return null != this.profileDraft && t?.pathname === "/" && t.state?.initialChatGptConversationId === this.profileDraft.conversationId && t.state.initialChatGptBusinessAgentGizmoId === this.profileDraft.gizmoId
                }
                assertCurrent = () => {
                    this.signal.throwIfAborted(), this.scope.get(this.enabled$) && this.scope.get(m.n) === this.accountId && this.scope.get(o.f) === this.accountId && this.scope.get(o.k) === this.userId && this.isCurrentVisit(this.scope.get) || (this.cancel(), this.signal.throwIfAborted())
                };
                async createInteraction() {
                    this.assertCurrent();
                    let e = "shared_link" === this.entry.entry_point ? this.entry.gizmoId : void 0;
                    null != e && (0, d.c)(this.scope), this.unwatch = this.scope.watch(e => {
                        let {
                            get: t
                        } = e;
                        t(this.enabled$) && t(m.n) === this.accountId && t(o.f) === this.accountId && t(o.k) === this.userId && this.isCurrentVisit(t) || this.cancel()
                    }), window.addEventListener("pagehide", this.cancel);
                    let t = await p.Request.safePost("/gizmos/business-agents/{business_agent_id}/interactions", {
                        parameters: {
                            path: {
                                business_agent_id: this.businessAgentId
                            }
                        },
                        additionalHeaders: {
                            "ChatGPT-Account-ID": this.accountId,
                            [r.ac]: this.accountId
                        },
                        expectedIdentity: {
                            accountId: this.accountId,
                            userId: this.userId
                        },
                        signal: this.signal,
                        assertRequestCurrent: this.assertCurrent,
                        retry: "never",
                        requestBody: {
                            ...null == e ? {} : {
                                native_runtime_version: 1
                            },
                            include_gizmo_resource: !0,
                            include_disclosure_state: (this.scope.get(y.g)?.getDynamicConfig("3310023174").get("global_impression_limit", 0) ?? 0) > 0,
                            entry_context: {
                                entry_channel: "organic",
                                entry_point: this.entry.entry_point,
                                ..."source_profile_lookup_id" in this.entry ? {
                                    source_profile_lookup_id: this.entry.source_profile_lookup_id
                                } : {},
                                ..."source_profile_share" in this.entry ? {
                                    source_profile_share: this.entry.source_profile_share
                                } : {},
                                client_platform: "web"
                            }
                        }
                    });
                    this.assertCurrent();
                    let n = b.parse(t);
                    if (n.entry_context.entry_point !== this.entry.entry_point || "debug_settings" === this.entry.entry_point && "internal_test" !== n.entry_context.traffic_class || n.business_agent_id !== this.businessAgentId || null != this.profileDraft && n.underlying_gizmo_id !== this.profileDraft.gizmoId || null != e && e !== n.underlying_gizmo_id || null != e && 1 !== n.business_agent_native_runtime_version || t.gizmo_resource?.business_agent_native_runtime_version != null && t.gizmo_resource.business_agent_native_runtime_version !== n.business_agent_native_runtime_version || null != t.gizmo_resource && t.gizmo_resource.gizmo.id !== n.underlying_gizmo_id) throw Error("Business Agent identity mismatch");
                    let a = n.business_agent_native_runtime_version;
                    "shared_link" === this.entry.entry_point && null != a && (0, d.c)(this.scope);
                    let s = {
                            businessAgentId: n.business_agent_id,
                            nativeRuntimeVersion: a,
                            gizmoId: n.underlying_gizmo_id,
                            interactionId: n.interaction_id,
                            businessName: n.business_name?.trim() || void 0,
                            logoUrl: n.favicon_url?.trim() || n.logo_url?.trim() || void 0,
                            headerColor: n.header_color?.trim() || void 0,
                            privacyPolicyUrl: n.privacy_policy_url,
                            showDisclosureModal: !1,
                            showConversationStarters: !1
                        },
                        i = {
                            accountId: this.accountId,
                            userId: this.userId,
                            status: "ready",
                            context: s
                        },
                        l = null == a ? t.gizmo_resource : await (0, c.a)(this.scope, i, t.gizmo_resource);
                    return this.assertCurrent(), s.businessName = s.businessName ?? (l?.gizmo.display.name.trim() || void 0), null != a && (s.logoUrl = s.logoUrl ?? (l?.gizmo.display.profile_picture_url?.trim() || void 0), s.headerColor = s.headerColor ?? (l?.gizmo.display.theme?.trim() || void 0)), this.resource = l, this.disclosure = n.disclosure ?? n.global_disclosure, this.ready = i, s
                }
            },
            b: C,
            c: x
        })
    }),
    KWLf: (function(e, t, n) {
        var a = n("BolX"),
            r = n("nlNF"),
            s = n("OWtl"),
            o = n("wVL6");
        let i = (0, a.u)(s.a, null),
            l = (0, a.u)(s.a, null),
            c = "(max-width: 767px)";

        function d() {
            if ("u" < typeof window) return !1;
            let e = (0, o.a)();
            return "android_web" === e || "android_app" === e || "ios_web" === e || "ios_app" === e || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
        }
        let u = (0, a.h)(s.a, !1, e => {
            let {
                set: t
            } = e;
            if (d()) return void t(!0);
            let n = "u" > typeof window ? window.matchMedia?.(c) : null;
            if (null == n) return void t(!1);
            let a = () => t(n.matches);
            return (a(), "function" == typeof n.addEventListener) ? (n.addEventListener("change", a), () => n.removeEventListener("change", a)) : (n.addListener(a), () => n.removeListener(a))
        });
        n.d(t, {}, {
            a: u,
            b: l,
            c: i,
            d: function(e, t) {
                let n = e.get(i);
                n?.shareSessionId === t && n.open && e.set(i, {
                    ...n,
                    open: !1
                })
            },
            e: function() {
                return d() || "u" > typeof window && window.matchMedia?.(c).matches === !0
            },
            f: function(e, t) {
                let n = e.get(r.c);
                null != n && (e.set(l, null), e.set(i, {
                    shareSessionId: t,
                    historyKey: n.key,
                    open: !0
                }))
            }
        })
    }),
    Z98x: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("BolX"),
            o = n("zd8w"),
            i = n("Wf1j"),
            l = n("HOLv"),
            c = n("OWtl"),
            d = n("KWLf"),
            u = n("YTUz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, p, g, m, f = (0, r.c)(15),
                    {
                        children: v,
                        shareSessionId: y
                    } = e,
                    b = (0, s.y)(c.a),
                    x = (0, i.a)(),
                    C = (0, s.z)(d.b),
                    _ = (0, o.useRef)(null);
                return f[0] !== C || f[1] !== b || f[2] !== y ? (t = () => {
                    if (C !== y) return;
                    let e = requestAnimationFrame(() => {
                        let e = _.current;
                        e?.getClientRects().length && null == e.closest('[inert], [aria-hidden="true"]') && b.get(d.b) === y && (e.focus({
                            preventScroll: !0
                        }), e.ownerDocument.activeElement === e && b.set(d.b, null))
                    });
                    return () => cancelAnimationFrame(e)
                }, n = [C, b, y], f[0] = C, f[1] = b, f[2] = y, f[3] = t, f[4] = n) : (t = f[3], n = f[4]), (0, o.useEffect)(t, n), f[5] !== x ? (h = x.formatMessage({
                    id: "businessProfiles.shareReceiver.viewBusinessInfo",
                    defaultMessage: "View business information"
                }), f[5] = x, f[6] = h) : h = f[6], f[7] !== b || f[8] !== y ? (p = () => (0, d.f)(b, y), f[7] = b, f[8] = y, f[9] = p) : p = f[9], f[10] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsx)(l.a, {
                    asset: u.a,
                    className: "size-4 shrink-0 text-secondary"
                }), f[10] = g) : g = f[10], f[11] !== v || f[12] !== h || f[13] !== p ? (m = (0, a.jsxs)("button", {
                    ref: _,
                    "aria-haspopup": "dialog",
                    "aria-label": h,
                    className: "hover:bg-surface-hover inline-flex min-h-11 max-w-full min-w-0 items-center gap-1.5 rounded-lg px-1 text-start focus-visible:outline-2 focus-visible:-outline-offset-2",
                    onClick: p,
                    type: "button",
                    children: [v, g]
                }), f[11] = v, f[12] = h, f[13] = p, f[14] = m) : m = f[14], m
            }
        })
    }),
    YiPf: (function(e, t, n) {
        n.d(t, {
            a: () => y
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("BolX"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("rEML"),
            c = n("SGsN"),
            d = n("esXD"),
            u = n("OWtl");

        function h(e) {
            let t, n, a, i = (0, r.c)(11),
                {
                    isUnavailable: h,
                    message: p,
                    homePath: g,
                    onUnavailable: m,
                    children: f
                } = e,
                v = (0, s.y)(u.a),
                y = (0, l._)(),
                b = (0, o.useRef)(!1);
            i[0] !== g || i[1] !== p || i[2] !== y || i[3] !== m || i[4] !== v ? (t = () => {
                m?.(), v.get(c.f).info(p, {
                    id: "conversation-inaccessible",
                    duration: 5
                }), (0, d.d)("conversation_unavailable", () => y(g, {
                    replace: !0
                }))
            }, i[0] = g, i[1] = p, i[2] = y, i[3] = m, i[4] = v, i[5] = t) : t = i[5];
            let x = (0, o.useEffectEvent)(t);
            return i[6] !== h || i[7] !== x ? (n = () => {
                h && !b.current && (b.current = !0, x())
            }, i[6] = h, i[7] = x, i[8] = n) : n = i[8], i[9] !== h ? (a = [h], i[9] = h, i[10] = a) : a = i[10], (0, o.useEffect)(n, a), h ? null : f
        }
        var p = n("IxgT"),
            g = n("yGJW"),
            m = n("eShZ"),
            f = n("ZhoB");
        let v = new WeakSet;

        function y(e) {
            let t, n, o, l, c, d, v, y, x = (0, r.c)(25),
                {
                    conversationId: C,
                    error: _,
                    loadError: w,
                    canRetry: I,
                    isWorkConversation: S,
                    showChatFallback: T,
                    onInlineLoadError: j,
                    children: E
                } = e,
                P = (0, s.y)(u.a),
                A = (0, s.z)(void 0 !== T && T && !1 === S ? p.b : null);
            if (null != A) return A;
            x[0] !== C || x[1] !== S || x[2] !== P ? (t = (e, t) => {
                (0, f.e)(P.get(g.c).logProductEvent, {
                    conversationId: C,
                    error: e,
                    isWorkConversation: S,
                    canRetry: t
                })
            }, x[0] = C, x[1] = S, x[2] = P, x[3] = t) : t = x[3];
            let M = t;
            x[4] !== I || x[5] !== w || x[6] !== M ? (n = () => M(w, I), x[4] = I, x[5] = w, x[6] = M, x[7] = n) : n = x[7], x[8] !== w || x[9] !== j || x[10] !== n ? (o = (0, a.jsx)(b, {
                error: w,
                onInlineLoadError: j,
                onShown: n
            }), x[8] = w, x[9] = j, x[10] = n, x[11] = o) : o = x[11], x[12] !== E || x[13] !== o ? (l = (0, a.jsxs)(a.Fragment, {
                children: [o, E]
            }), x[12] = E, x[13] = o, x[14] = l) : l = x[14];
            let R = l;
            return x[15] !== _ ? (c = _ instanceof m.FetchError && !(0, m.e)(_) && (403 === _.status || 404 === _.status), x[15] = _, x[16] = c) : c = x[16], x[17] !== _ || x[18] !== M ? (d = () => M(_, !1), x[17] = _, x[18] = M, x[19] = d) : d = x[19], x[20] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                id: "chatgptConversations.conversationInaccessible",
                defaultMessage: "You don’t have access to this conversation. Make sure you’re logged in to the right account, or ask the conversation owner to send you a share link."
            }), x[20] = v) : v = x[20], x[21] !== R || x[22] !== c || x[23] !== d ? (y = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(h, {
                        isUnavailable: c,
                        homePath: "/",
                        onUnavailable: d,
                        message: v,
                        children: R
                    })
                })]
            }), x[21] = R, x[22] = c, x[23] = d, x[24] = y) : y = x[24], y
        }

        function b(e) {
            let t, n, a, s = (0, r.c)(8),
                {
                    error: i,
                    onShown: l,
                    onInlineLoadError: c
                } = e,
                d = (0, o.useEffectEvent)(l);
            s[0] !== c ? (t = e => c?.(e), s[0] = c, s[1] = t) : t = s[1];
            let u = (0, o.useEffectEvent)(t);
            return s[2] !== i || s[3] !== d || s[4] !== u ? (n = () => {
                if (null != i) {
                    if (u(i), (0, m.e)(i)) {
                        if (v.has(i)) return;
                        v.add(i)
                    }
                    d()
                }
            }, s[2] = i, s[3] = d, s[4] = u, s[5] = n) : n = s[5], s[6] !== i ? (a = [i], s[6] = i, s[7] = a) : a = s[7], (0, o.useEffect)(n, a), null
        }
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
                let t, n, p, g, m, f, v, y = (0, a.c)(16),
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
                }, y[0] = b, y[1] = C, y[2] = x, y[3] = t) : t = y[3], (0, o.a)("markThreadUnread", t), y[4] !== b || y[5] !== x ? (n = () => void(0, d.renameActiveChatGptConversation)(x, b), p = [b, x], y[4] = b, y[5] = x, y[6] = n, y[7] = p) : (n = y[6], p = y[7]), (0, l.d)("rename-thread", n, p), y[8] !== b || y[9] !== x ? (g = () => (0, d.d)(x, b), m = [b, x], y[8] = b, y[9] = x, y[10] = g, y[11] = m) : (g = y[10], m = y[11]), (0, l.d)("toggle-thread-pin", g, m), y[12] !== b || y[13] !== x ? (f = () => (0, d.a)(x, b), v = [b, x], y[12] = b, y[13] = x, y[14] = f, y[15] = v) : (f = y[14], v = y[15]), (0, l.d)("archive-thread", f, v), null
            }
        })
    }),
    qeMp: (function(e, t, n) {
        n.d(t, {
            a: () => iC,
            ChatGptConversationPage: () => ix
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("v8gE"),
            o = n("FS1B"),
            i = n("T0Rc"),
            l = n("HVBu"),
            c = n.n(l),
            d = n("BolX"),
            u = n("Zqzr"),
            h = n("AuIy"),
            p = n("iqEK"),
            g = n("NRIv"),
            m = n("zd8w"),
            f = n("Wf1j"),
            v = n("rEML"),
            y = n("bn59"),
            b = n("OY84"),
            x = n("Yxds"),
            C = n("StMt"),
            _ = n("E8Sp"),
            w = n("z0li"),
            I = n("LIH9"),
            S = n("O0M0"),
            T = n("Cslg"),
            j = n("OFP1"),
            E = n("ItIk"),
            P = (n("AZW7"), n("uxPT")),
            A = n("GMTh"),
            M = n("zpMv"),
            R = n("PFzG"),
            k = n("YiPf"),
            O = n("DrWu"),
            N = n("x4uR"),
            B = n("hx97");

        function z(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var G = n("MrzV"),
            F = n("YTsa"),
            L = n("TSib"),
            D = n("jEN2"),
            H = n("kphc"),
            W = n("YWcr"),
            q = n("mwa5"),
            U = n("UxN3"),
            K = n("SGsN"),
            V = n("XcNx"),
            Y = n("GKsW"),
            Q = n("yWTM"),
            $ = n("SkIz"),
            X = n("hsSf"),
            J = n("ibLK"),
            Z = n("Xc94"),
            ee = n("Sgih"),
            et = n("HwRo"),
            en = n("qwxA"),
            ea = n("gOnr"),
            er = n("KXCj"),
            es = n("e1xH"),
            eo = n("Dl20"),
            ei = n("kErH"),
            el = n("dJBt"),
            ec = n("yGJW"),
            ed = n("FR8U"),
            eu = n("xqnZ"),
            eh = n("UMxD"),
            ep = n("JhDO"),
            eg = n("tSEg"),
            em = n("kl6F"),
            ef = n("kfGJ"),
            ev = n("khOd"),
            ey = n("xSOA"),
            eb = n("oyxz"),
            ex = n("MYlA"),
            eC = n("OtLV"),
            e_ = n("sfmI"),
            ew = n("QmkR"),
            eI = n("Yrvy"),
            eS = n("HOLv"),
            eT = n("nlNF"),
            ej = n("OWtl"),
            eE = n("MRlq"),
            eP = n("vNLk"),
            eA = n("PCxL"),
            eM = n("aZgH"),
            eR = n("gBPo");

        function ek(e) {
            let t, n, s, o, i, l, c, u, h, p, g, y, b, x, C = (0, r.c)(56),
                {
                    conversationId: _,
                    kind: w
                } = e,
                I = (0, d.y)(ej.a),
                S = (0, f.a)(),
                j = (0, v.Y)(),
                E = (0, v._)(),
                P = (0, d.z)(eA.l),
                A = (0, d.z)(T.h),
                M = (0, d.z)(T.g);
            C[0] !== A || C[1] !== _ || C[2] !== M || C[3] !== w || C[4] !== P ? (t = "chatgpt" === w && P?.kind === "chatgpt" && P.conversation.id === _ && (0, e_.a)(P.conversation, A, M) ? P.conversation : null, C[0] = A, C[1] = _, C[2] = M, C[3] = w, C[4] = P, C[5] = t) : t = C[5];
            let R = t,
                [k, O] = (0, m.useState)(!1),
                {
                    mutate: N,
                    isPending: B
                } = (0, eI.a)(_);
            C[6] !== j.hash || C[7] !== j.pathname || C[8] !== j.search || C[9] !== E || C[10] !== I ? (n = () => {
                (0, eA.e)(I), E({
                    pathname: j.pathname,
                    search: j.search,
                    hash: j.hash
                }, {
                    replace: !0,
                    state: null
                })
            }, C[6] = j.hash, C[7] = j.pathname, C[8] = j.search, C[9] = E, C[10] = I, C[11] = n) : n = C[11];
            let z = n,
                G = (0, d.z)(eA.k);
            C[12] !== _ || C[13] !== G ? (s = G?.find(e => (0, eM.b)(e.task) === `hosted:${_}`), C[12] = _, C[13] = G, C[14] = s) : s = C[14];
            let F = s;
            C[15] !== _ || C[16] !== I ? (o = () => {
                let e = I.get(eA.l);
                return null != e && (0, eM.b)(e) === `hosted:${_}` ? (0, eA.d)(I, e) : void 0
            }, i = async () => {
                await (0, ew.W)({
                    scope: I,
                    conversationId: _
                })
            }, C[15] = _, C[16] = I, C[17] = o, C[18] = i) : (o = C[17], i = C[18]), C[19] !== _ || C[20] !== z || C[21] !== w || C[22] !== I ? (l = (e, t, n) => {
                n?.("restored");
                let r = I.get(K.f).info((0, a.jsx)(eb.a, {
                    ...eE.a.unarchiveSuccessPlain
                }), {
                    leading: (0, a.jsx)(eS.a, {
                        "aria-hidden": !1,
                        asset: eR.a
                    }),
                    primaryAction: {
                        label: (0, a.jsx)(eb.a, {
                            ...eE.a.viewNow
                        }),
                        onClick: () => {
                            r.close(), z()
                        }
                    },
                    id: `unarchive-thread-${w}:${_}`
                })
            }, C[19] = _, C[20] = z, C[21] = w, C[22] = I, C[23] = l) : l = C[23], C[24] !== S || C[25] !== I ? (c = (e, t, n) => {
                n?.(null), I.get(K.f).danger(S.formatMessage(eE.a.unarchiveError), {
                    errorAnalytics: {
                        toastId: "previewFooter.onError.unarchiveError"
                    }
                })
            }, C[24] = S, C[25] = I, C[26] = c) : c = C[26], C[27] !== o || C[28] !== i || C[29] !== l || C[30] !== c ? (u = {
                onMutate: o,
                mutationFn: i,
                onSuccess: l,
                onError: c
            }, C[27] = o, C[28] = i, C[29] = l, C[30] = c, C[31] = u) : u = C[31];
            let {
                mutate: L,
                isPending: D,
                isSuccess: H
            } = (0, ey.a)(u);
            C[32] !== N || C[33] !== E || C[34] !== I ? (h = e => {
                let t = I.get(eA.c),
                    n = I.get(eT.c),
                    a = I.get(T.f);
                N(e, {
                    onSuccess: () => {
                        if (O(!1), t !== I.get(eA.c) || n !== I.get(eT.c) || a !== I.get(T.f)) return;
                        I.set(eA.l, null);
                        let e = t?.pathname === eA.a ? t : null;
                        E(e ?? "/", {
                            replace: !0,
                            state: e?.state ?? null
                        })
                    }
                })
            }, C[32] = N, C[33] = E, C[34] = I, C[35] = h) : h = C[35];
            let W = h;
            C[36] !== R ? (p = null == R ? void 0 : () => O(!0), C[36] = R, C[37] = p) : p = C[37];
            let q = H || F?.status === "restored",
                U = D || F?.status === "restoring";
            return C[38] !== L ? (g = () => L(), C[38] = L, C[39] = g) : g = C[39], C[40] !== z || C[41] !== B || C[42] !== p || C[43] !== q || C[44] !== U || C[45] !== g ? (y = (0, a.jsx)(eP.a, {
                deleting: B,
                onDelete: p,
                restored: q,
                restoring: U,
                onUnarchive: g,
                onDone: z
            }), C[40] = z, C[41] = B, C[42] = p, C[43] = q, C[44] = U, C[45] = g, C[46] = y) : y = C[46], C[47] !== R || C[48] !== W || C[49] !== S || C[50] !== k || C[51] !== B ? (b = null != R && (0, a.jsx)(ex.a, {
                allowArtifactDeletion: !0,
                title: R.title?.trim() || S.formatMessage(eC.a.newChat),
                open: k,
                isDeleting: B,
                onOpenChange: O,
                onConfirm: W
            }), C[47] = R, C[48] = W, C[49] = S, C[50] = k, C[51] = B, C[52] = b) : b = C[52], C[53] !== y || C[54] !== b ? (x = (0, a.jsxs)(a.Fragment, {
                children: [y, b]
            }), C[53] = y, C[54] = b, C[55] = x) : x = C[55], x
        }
        var eO = n("hZax"),
            eN = n("OMIV"),
            eB = n("JCJj"),
            ez = n("KkZX"),
            eG = n("BdYu"),
            eF = n("Nyub"),
            eL = n("rvFo"),
            eD = n("jZDY"),
            eH = n("Bc5r"),
            eW = n("bIvi"),
            eq = n("Elta"),
            eU = n("eW0T"),
            eK = n("hOYb"),
            eV = n("eShZ"),
            eY = n("qqut"),
            eQ = n("CsbC"),
            e$ = n("tCyZ"),
            eX = n("zJsu"),
            eJ = n("GgLN"),
            eZ = n("KdfG"),
            e0 = n("AOHi"),
            e1 = n("iRMi"),
            e2 = n("U2UX"),
            e3 = n("ZU27"),
            e4 = n("gbrq"),
            e5 = n("K33Q"),
            e6 = n("mv4d"),
            e7 = n("w7Qu"),
            e8 = n("dt5v"),
            e9 = n("bWX0"),
            te = n("smHt"),
            tt = n("aoTb"),
            tn = n("NRR1"),
            ta = n("pqpL"),
            tr = n("uqg3"),
            ts = n("XcRr"),
            to = n("YF6h"),
            ti = n("dk3M"),
            tl = n("WFY2"),
            tc = n("vldH"),
            td = n("ISgP"),
            tu = n("t2JB"),
            th = n("DIH2"),
            tp = n("aFoA"),
            tg = n("H8lk"),
            tm = n("dQRk"),
            tf = n("rxj0"),
            tv = n("f2PP"),
            ty = n("S95W");
        let tb = (0, d.v)(ej.a, e => null);
        var tx = n("BJ43"),
            tC = n("d2rV"),
            t_ = n("aLqR"),
            tw = n("VlIB"),
            tI = n("Ow2S"),
            tS = n("G6Ip");
        let tT = (0, d.v)(ej.a, e => null);
        var tj = n("zOE4");

        function tE(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s,
                    children: o
                } = e;
            if ("loading" === (0, d.x)(tI.t, s)) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(tj.LoadingPage, {
                    debugName: "ChatGptConversationPicker",
                    fillParent: !0
                }), n[0] = e) : e = n[0], e
            }
            return n[1] !== o ? (t = (0, a.jsx)(a.Fragment, {
                children: o
            }), n[1] = o, n[2] = t) : t = n[2], t
        }
        var tP = n("SZi8"),
            tA = n("lBzi"),
            tM = n("Ga6O"),
            tR = n("PTAr"),
            tk = n("slpy"),
            tO = n("BOYb"),
            tN = n("Sm6l"),
            tB = n("bf6R"),
            tz = n("Bbed"),
            tG = n("O666"),
            tF = n("tNq4"),
            tL = n("Skaw"),
            tD = n("PYCG");

        function tH(e) {
            let t, n, s, o, i, l, c, u, h, p, g, m, v = (0, r.c)(54),
                {
                    conversationId: y,
                    projectId: b,
                    sharedProjectConversation: x,
                    isReady: C,
                    isRestricted: _,
                    isStreaming: w
                } = e,
                I = void 0 === b ? null : b,
                S = (0, d.y)(ej.a),
                j = (0, f.a)(),
                E = (0, d.z)(T.e),
                P = (0, d.z)(null == I ? null : tL.a),
                A = (0, d.x)(tm.j, y),
                {
                    data: M
                } = (0, d.x)(tA.chatGptConversationQueryById$, null == I ? null : A),
                R = (0, d.x)(tp.a, null == I ? null : A),
                k = (0, d.x)(tm.B, R);
            v[0] !== R || v[1] !== M || v[2] !== k || v[3] !== I || v[4] !== A ? (t = null == M && null != R && null != A ? {
                id: A,
                gizmo_id: I,
                is_temporary_chat: k
            } : void 0, v[0] = R, v[1] = M, v[2] = k, v[3] = I, v[4] = A, v[5] = t) : t = v[5];
            let O = t,
                {
                    data: B
                } = (0, d.x)(N.b, I),
                z = null == I ? null : (0, tL.b)(P ?? null, x ?? M ?? O, B),
                G = (0, d.x)(tF.b, y);
            v[6] !== j ? (n = j.formatMessage(eC.a.headerShare), v[6] = j, v[7] = n) : n = v[7];
            let F = n,
                L = (0, d.x)(null == x ? tF.a : null, y),
                D = null != x || null != L,
                H = null;
            if (_ || z?.type === "unavailable") {
                let e;
                v[8] !== j ? (e = j.formatMessage(eC.a.shareDisabledRestricted), v[8] = j, v[9] = e) : e = v[9], H = e
            } else if (w && !D) {
                let e;
                v[10] !== j ? (e = j.formatMessage(eC.a.shareDisabledStreaming), v[10] = j, v[11] = e) : e = v[11], H = e
            } else if (!C || !D) {
                let e;
                v[12] !== j ? (e = j.formatMessage(eC.a.shareDisabledNotReady), v[12] = j, v[13] = e) : e = v[13], H = e
            }
            let W = null != H || G;
            v[14] !== W ? (s = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: W
            }, v[14] = W, v[15] = s) : s = v[15];
            let q = (0, d.x)(tG.b, s),
                U = "loaded" === E.status && "personal" === E.structure && (null == z || "snapshot" === z.type),
                K = null != H || G;
            v[16] !== K ? (o = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: K
            }, v[16] = K, v[17] = o) : o = v[17];
            let V = (0, d.x)(U ? tG.b : null, o),
                Y = !(0, tO.d)() && !(0, tO.b)(),
                Q = null != H || G;
            v[18] !== Q ? (i = {
                layer: "2296435893",
                parameter: "show_share_text",
                disableExposureLog: Q
            }, v[18] = Q, v[19] = i) : i = v[19];
            let $ = (0, d.x)(Y ? tG.b : null, i);
            v[20] !== y || v[21] !== O || v[22] !== I || v[23] !== S || v[24] !== x ? (l = () => {
                let e = null == x ? S.get(tF.c, y) : {
                    serverConversationId: x.conversation_id,
                    title: x.title,
                    currentNodeId: x.current_node ?? void 0
                };
                null != e && (0, tD.shareChatGptProjectConversation)(S, e.serverConversationId, e.title ?? "", I, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", x ?? O)
            }, v[20] = y, v[21] = O, v[22] = I, v[23] = S, v[24] = x, v[25] = l) : l = v[25];
            let X = l,
                J = F;
            if (!V && "loaded" === E.status && (null == z || "snapshot" === z.type)) {
                let e;
                v[26] !== E.structure || v[27] !== j ? (e = j.formatMessage("workspace" === E.structure ? eC.a.shareWorkspaceTooltip : eC.a.sharePublicTooltip), v[26] = E.structure, v[27] = j, v[28] = e) : e = v[28], J = e
            }
            let Z = H ?? J,
                ee = null != H || void 0,
                et = !$,
                en = null == H ? X : void 0;
            return v[29] !== G || v[30] !== q ? (c = !G && (q ? (0, a.jsx)(tB.M, {}) : (0, a.jsx)(tB.L, {})), v[29] = G, v[30] = q, v[31] = c) : c = v[31], v[32] !== $ ? (u = $ && (0, a.jsx)("span", {
                className: "max-sm:hidden @max-2xl/main-titlebar:hidden",
                children: (0, a.jsx)(eb.a, {
                    ...eC.a.headerShare
                })
            }), v[32] = $, v[33] = u) : u = v[33], v[34] !== G || v[35] !== F || v[36] !== ee || v[37] !== et || v[38] !== en || v[39] !== c || v[40] !== u ? (h = (0, a.jsxs)(tN.a, {
                "aria-disabled": ee,
                "aria-label": F,
                color: "ghostActive",
                loading: G,
                className: "browser:[&_[data-loading-indicator]>svg]:size-6",
                radius: "large",
                size: "toolbar",
                uniform: et,
                onClick: en,
                children: [c, u]
            }), v[34] = G, v[35] = F, v[36] = ee, v[37] = et, v[38] = en, v[39] = c, v[40] = u, v[41] = h) : h = v[41], v[42] !== Z || v[43] !== h ? (p = (0, a.jsx)(tk.a, {
                content: Z,
                children: h
            }), v[42] = Z, v[43] = h, v[44] = p) : p = v[44], v[45] !== y || v[46] !== G || v[47] !== I || v[48] !== H || v[49] !== x ? (g = !1, v[45] = y, v[46] = G, v[47] = I, v[48] = H, v[49] = x, v[50] = g) : g = v[50], v[51] !== p || v[52] !== g ? (m = (0, a.jsxs)(a.Fragment, {
                children: [p, g]
            }), v[51] = p, v[52] = g, v[53] = m) : m = v[53], m
        }(0, tz.a)(async () => () => null);
        var tW = n("TRQ3"),
            tq = n("SZCv"),
            tU = n.n(tq),
            tK = n("XAP6"),
            tV = n("bzoy"),
            tY = n("LYS1"),
            tQ = n("aZoZ"),
            t$ = n("Gv8v"),
            tX = n("EGpF"),
            tJ = n("mTPq"),
            tZ = n("Vcrm"),
            t0 = n("DF0c");
        let t1 = (0, d.d)(ej.a, (e, t) => {
            let {
                get: n
            } = t, a = n(tm.ab, e);
            if (!(0, tm.Bb)(a)) return !0;
            let r = n(tm.N, e),
                s = n(tm.C, e);
            if (null == r || null == s) return !1;
            let o = r[s]?.message;
            if (null == o || tY.a.has(o.author.role)) return !1;
            let i = n(tm.y, e),
                l = (0, tJ.c)({
                    mapping: r,
                    current_node: s
                }, n(tm.S, e)),
                c = n(tm.db, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(tm.j, e) && !(0, tV.e)(n(tm.p, e)) && null != c && !n(tK.e).has(c) && null != t2(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function t2(e, t) {
            let n = e(tX.a, t),
                a = e(tm.j, t);
            return null == n.request.current && null != a ? e(tX.a, a) : n
        }
        var t3 = n("xtkq"),
            t4 = n("ZhoB"),
            t5 = n("PG5R"),
            t6 = n("zrki"),
            t7 = n("iLYI"),
            t8 = n("u4MG"),
            t9 = n("wVX4"),
            ne = n("OOaz"),
            nt = n("n5iL"),
            nn = n("EFj1"),
            na = n("iS3k"),
            nr = n("pDUk"),
            ns = n("GaCK"),
            no = n("Dofq"),
            ni = n("VnEZ"),
            nl = n("b7aP");

        function nc(e) {
            let t, n, s, o = (0, r.c)(6);
            o[0] !== e ? ({
                readData: n,
                ...t
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]);
            let i = (0, na.b)(),
                [l, c] = (0, m.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), o[3] !== l || o[4] !== t ? (s = null == l ? null : (0, a.jsx)(nl.a, {
                ...t,
                data: l.data
            }), o[3] = l, o[4] = t, o[5] = s) : s = o[5], s
        }

        function nd(e) {
            let t, n, s, o, i, l, c, u, h, p = (0, r.c)(22);
            p[0] !== e ? ({
                controlledState: t,
                display: n,
                ...s
            } = e, p[0] = e, p[1] = t, p[2] = n, p[3] = s) : (t = p[1], n = p[2], s = p[3]);
            let g = (0, d.y)(eg.a);
            p[4] !== g ? (o = {
                scope: g,
                layout: "summary"
            }, p[4] = g, p[5] = o) : o = p[5];
            let m = o;
            p[6] !== t?.isOpen || p[7] !== s ? (i = t?.isOpen === !1 ? null : (0, a.jsx)(nc, {
                ...s
            }, s.conversationId), p[6] = t?.isOpen, p[7] = s, p[8] = i) : i = p[8];
            let f = i;
            return p[9] !== m || p[10] !== f ? (l = f && (0, a.jsx)(na.a.PopoverContent, {
                analytics: m,
                children: f
            }), p[9] = m, p[10] = f, p[11] = l) : l = p[11], p[12] !== t || p[13] !== l ? (c = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(nu, {
                    controlledState: t,
                    children: l
                })
            }), p[12] = t, p[13] = l, p[14] = c) : c = p[14], p[15] !== m || p[16] !== f || p[17] !== n ? (u = f && (0, a.jsx)(na.a.Root, {
                analytics: m,
                shouldHideInlineImmediately: n.shouldHideInlineImmediately,
                shouldShow: n.shouldShow,
                children: f
            }), p[15] = m, p[16] = f, p[17] = n, p[18] = u) : u = p[18], p[19] !== c || p[20] !== u ? (h = (0, a.jsxs)(a.Fragment, {
                children: [c, u]
            }), p[19] = c, p[20] = u, p[21] = h) : h = p[21], h
        }

        function nu(e) {
            let t, n, s, o = (0, r.c)(17),
                {
                    children: i,
                    controlledState: l
                } = e,
                c = (0, d.y)(eg.a),
                u = (0, m.useContext)(ni.a),
                h = (0, f.a)(),
                p = (0, d.z)(null == l ? e4.N : null);
            o[0] !== l?.isOpen || o[1] !== p ? (t = l?.isOpen ?? (0, e4.z)(p, !0), o[0] = l?.isOpen, o[1] = p, o[2] = t) : t = o[2];
            let g = t,
                v = (0, d.z)(ns.b),
                y = l?.isOpen ?? v.isPopoverOpen,
                b = (0, d.x)(nt.f, "togglePinnedSummary");
            (0, eG.b)(c), o[3] !== l || o[4] !== c ? (n = () => {
                null != l ? l.onOpenChange(!l.isOpen) : (0, no.b)(c)
            }, o[3] = l, o[4] = c, o[5] = n) : n = o[5];
            let x = n;
            return (0, nn.a)("togglePinnedSummary", x), o[6] !== i || o[7] !== u || o[8] !== l || o[9] !== h || o[10] !== g || o[11] !== y || o[12] !== v.displayMode || o[13] !== c || o[14] !== b || o[15] !== x ? (s = (0, a.jsx)(I.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                order: 250,
                unifiedSlotPosition: "threadSummary",
                children: "overlay" === v.displayMode ? (0, a.jsx)(nr.a, {
                    isOpen: y,
                    shouldPreventAutoFocus: l?.shouldPreventAutoFocus,
                    onOpenChange: e => {
                        null != l ? l.onOpenChange(e) : c.set(ns.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                            ...t,
                            isPopoverOpen: e
                        })
                    },
                    trigger: (0, a.jsx)(na.a.HeaderButton, {
                        analytics: {
                            scope: c
                        },
                        label: h.formatMessage({
                            id: "chatgptConversations.summaryPanel.toggle",
                            defaultMessage: "Toggle summary"
                        }),
                        pressed: y,
                        shortcut: b
                    }),
                    children: (0, a.jsx)(ni.a, {
                        value: u,
                        children: i
                    })
                }) : (0, a.jsx)(na.a.HeaderButton, {
                    analytics: {
                        scope: c
                    },
                    label: h.formatMessage({
                        id: "chatgptConversations.summaryPanel.togglePinned",
                        defaultMessage: "Toggle pinned summary"
                    }),
                    pressed: g,
                    shortcut: b,
                    onClick: x
                })
            }), o[6] = i, o[7] = u, o[8] = l, o[9] = h, o[10] = g, o[11] = y, o[12] = v.displayMode, o[13] = c, o[14] = b, o[15] = x, o[16] = s) : s = o[16], s
        }
        var nh = n("pV06"),
            np = n("MM0V");

        function ng(e) {
            let t, n, s, o, i, l = (0, r.c)(11),
                {
                    canConvert: c,
                    isChatInstantAvailable: d,
                    isConverting: u,
                    onConvert: h
                } = e;
            l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.workOnlyConversion.title",
                defaultMessage: "Continue in Work"
            }), l[0] = t) : t = l[0], l[1] !== d ? (n = d ? (0, a.jsx)(eb.a, {
                id: "chatgptConversations.workOnlyConversion.instantDescription",
                defaultMessage: "Move this chat to Work to use agentic tools and take on more complex tasks. You can still use chat instant for quick questions"
            }) : (0, a.jsx)(eb.a, {
                id: "chatgptConversations.workOnlyConversion.description",
                defaultMessage: "Move this chat to Work to use agentic tools and take on more complex tasks"
            }), l[1] = d, l[2] = n) : n = l[2];
            let p = !c;
            return l[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.workOnlyConversion.action",
                defaultMessage: "Convert to Work"
            }), l[3] = s) : s = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (o = (0, a.jsx)(tN.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: s
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = o) : o = l[7], l[8] !== n || l[9] !== o ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(np.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: o
                })
            }), l[8] = n, l[9] = o, l[10] = i) : i = l[10], i
        }
        var nm = n("oGhM"),
            nf = n("fr5e"),
            nv = n("LEgg");
        let ny = (0, tz.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function nb(e) {
            let t, n, s = (0, r.c)(6),
                {
                    conversationId: o,
                    scheduledAutomationId: i
                } = e,
                l = (0, eO.f)("3901104270");
            return s[0] !== o || s[1] !== l || s[2] !== i ? (t = l && null != i ? (0, a.jsx)(ny, {
                conversationId: o,
                automationId: i
            }) : null, s[0] = o, s[1] = l, s[2] = i, s[3] = t) : t = s[3], s[4] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), s[4] = t, s[5] = n) : n = s[5], n
        }
        var nx = n("Bs4i"),
            nC = n("Qgfj"),
            n_ = n("rmk3"),
            nw = n("sqqv"),
            nI = n("fQbA"),
            nS = n("dDDU"),
            nT = n("soaw"),
            nj = n("ZrYB"),
            nE = n("X6Vn"),
            nP = n("Kwur"),
            nA = n("eKlv"),
            nM = n("JCtZ"),
            nR = n("g2p6"),
            nk = n("oaTv"),
            nO = n("PME0"),
            nN = n("lgcP"),
            nB = n("AcSY"),
            nz = n("w7E5"),
            nG = n("xEXG"),
            nF = n("J6LI"),
            nL = n("lUUH"),
            nD = n("ftAl");

        function nH(e) {
            let t, n, s, o = (0, r.c)(17),
                {
                    children: i,
                    conversationId: l,
                    getBaseItems: c,
                    menuTriggerRef: u,
                    navigate: h,
                    onBeforeOpen: p,
                    renderDropdown: g
                } = e,
                m = (0, d.y)(ej.a),
                {
                    data: f
                } = (0, nB.f)(),
                v = (0, nG.b)();
            return o[0] !== f || o[1] !== l || o[2] !== c || o[3] !== u || o[4] !== h || o[5] !== v || o[6] !== m ? (t = () => {
                let e = m.get(nD.a, l, {
                        enabled: !1
                    }),
                    t = (0, t8.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : m.query.getData(N.b, t);
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
                    } = e, c = (0, t8.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(nz.a), u = t.get(ew.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, g = a?.conversation_origin === "tpp" || a?.conversation_origin === "flora", m = "allowed" === o || g && h?.pages.some(e => null != e.cursor) === !0, f = t.get(ew.h, n);
                    return null == s || null == a || t.get(ew.g, n) || (0, nF.c)(a, r).sourceUnavailable || null == (0, nF.b)(t, a, f, !1) || null != c && null == r || null == h || 0 === p && !m ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: nK.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, nL.b)({
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
                    scope: m,
                    conversationId: l,
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
            }, o[0] = f, o[1] = l, o[2] = c, o[3] = u, o[4] = h, o[5] = v, o[6] = m, o[7] = t) : t = o[7], o[8] !== l || o[9] !== p || o[10] !== m ? (n = async () => {
                await Promise.all([(async () => {
                    let e = m.get(tA.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await m.query.getOrFetch(tA.chatGptConversationQueryById$, l).catch(nU), null == m.query.getData(tA.chatGptConversationQueryById$, l) && await m.query.getOrFetch(ew.j, [l]).catch(nq)
                })(), p?.()]);
                let e = m.get(nD.a, l, {
                    enabled: !1
                });
                (0, t8.a)(e?.gizmo_id) && e?.gizmo_id != null && await m.query.getOrFetch(N.b, e.gizmo_id).catch(nW)
            }, o[8] = l, o[9] = p, o[10] = m, o[11] = n) : n = o[11], o[12] !== i || o[13] !== g || o[14] !== t || o[15] !== n ? (s = (0, a.jsx)(n_.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                renderItem: nI.b,
                renderDropdown: g,
                trigger: "click",
                children: i
            }), o[12] = i, o[13] = g, o[14] = t, o[15] = n, o[16] = s) : s = o[16], s
        }

        function nW() {}

        function nq() {}

        function nU() {}
        let nK = (0, nC.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}"
            }
        });

        function nV(e) {
            let t, s, o, i, l, c, u, h, p, g, y, b, x, w, I, S, j, E = (0, r.c)(68),
                {
                    onTitleClick: P,
                    showMenu: A,
                    triggerButton: M,
                    renderDropdown: R,
                    conversationOrigin: k,
                    conversationId: O,
                    title: N,
                    isHandoffPending: B,
                    isArchived: z,
                    isChatConversation: G,
                    onHandoff: F,
                    onOpenMessage: L,
                    projectId: D,
                    projectName: H,
                    serverConversationId: W
                } = e,
                q = (0, d.y)(eg.a),
                U = (0, d.y)(ej.a),
                V = (0, nT.a)(),
                Y = (0, eO.i)();
            E[0] !== Y ? (t = Y.checkGate("224248639"), E[0] = Y, E[1] = t) : t = E[1];
            let Q = t;
            E[2] !== Y ? (s = Y.getLayer("3017902351").get("web_file_library_enabled", !1), E[2] = Y, E[3] = s) : s = E[3];
            let $ = s,
                X = Q || $;
            E[4] !== X ? (o = {
                enabled: X
            }, E[4] = X, E[5] = o) : o = E[5];
            let {
                data: J
            } = (0, d.z)(nR.p, o), Z = X && J?.fileLibraryEnabledForRegistrationCountry !== !1, ee = (0, f.a)(), et = (0, v._)(), [en, ea] = (0, m.useState)(null), er = (0, m.useRef)(null), es = (0, m.useRef)(null);
            E[6] === Symbol.for("react.memo_cache_sentinel") ? (i = [], E[6] = i) : i = E[6];
            let eo = (0, m.useRef)(i);
            E[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                name: "chatgpt"
            }, E[7] = l) : l = E[7];
            let {
                isCapable: ei
            } = (0, d.x)(C.a, l), el = (0, d.x)(ew.g, W);
            E[8] === Symbol.for("react.memo_cache_sentinel") ? (c = () => ea("shortcut"), E[8] = c) : c = E[8];
            let ec = G && !el;
            E[9] !== q || E[10] !== W ? (u = () => (0, e_.a)(q.query.getData(tA.chatGptConversationQueryById$, W), q.get(T.h), q.get(T.g)), E[9] = q, E[10] = W, E[11] = u) : u = E[11], E[12] !== ec || E[13] !== u ? (h = {
                enabled: ec,
                isActive: u
            }, E[12] = ec, E[13] = u, E[14] = h) : h = E[14], (0, nn.a)("deleteChat", c, h), E[15] !== U || E[16] !== el || E[17] !== et || E[18] !== q || E[19] !== W ? (p = e => {
                !el && (0, e_.a)(q.query.getData(tA.chatGptConversationQueryById$, W), q.get(T.h), q.get(T.g)) && (ea(null), (0, nN.a)(U, W, e), et("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, E[15] = U, E[16] = el, E[17] = et, E[18] = q, E[19] = W, E[20] = p) : p = E[20];
            let ed = p;
            E[21] !== q || E[22] !== W ? (g = async () => {
                let e = [];
                eo.current = e, e.push(...await async function(e, t) {
                    let a = await nP.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        }
                    }).catch(() => null);
                    return a?.can_share && 0 !== a.av_sessions.length ? [{
                        id: "share-live-session",
                        icon: tB.gj,
                        message: (0, nC.e)({
                            id: "chatgptConversations.liveSessionSharing.action",
                            defaultMessage: "Share Live session"
                        }),
                        selectAfterClose: !0,
                        onSelect: () => {
                            n.e(571376).then(n.bind(n, "ATrx")).then(n => {
                                let {
                                    BidiSessionSharingDialog: r
                                } = n;
                                (0, nE.f)(e, r, {
                                    conversationId: t,
                                    sessions: a.av_sessions
                                })
                            })
                        }
                    }] : []
                }(q, W))
            }, E[21] = q, E[22] = W, E[23] = g) : g = E[23];
            let eu = g;
            E[24] !== O || E[25] !== k || E[26] !== Z || E[27] !== ee || E[28] !== el || E[29] !== z || E[30] !== B || E[31] !== V || E[32] !== et || E[33] !== F || E[34] !== L || E[35] !== D || E[36] !== H || E[37] !== q || E[38] !== W || E[39] !== Y || E[40] !== N ? (y = e => {
                let t = q.get(T.f),
                    a = q.get(T.k),
                    r = q.query.getData(tA.chatGptConversationQueryById$, W),
                    s = q.get(T.h),
                    o = q.get(T.g),
                    i = (0, e_.a)(r, s, o),
                    l = (0, nA.b)(q, W),
                    c = !el && (0, e_.a)(l, s, o),
                    d = q.get(_.b).pathname,
                    u = () => V() && d === q.get(_.b).pathname && t === q.get(T.f) && a === q.get(T.k),
                    h = (0, nk.a)(q, O, k, () => (0, nO.a)(et)),
                    p = [];
                return Y.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && p.push({
                    id: "chatgpt-audio-summary",
                    message: (0, nC.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary"
                    }),
                    icon: tB.wg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
                        })().then(e => {
                            u() && e(q, W)
                        }).catch(() => {
                            u() && (er.current?.focus({
                                preventScroll: !0
                            }), q.get(K.f).danger(ee.formatMessage({
                                id: "chatgpt.audioSummary.openError",
                                defaultMessage: "Couldn’t open audio summary"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgpt.audioSummary.openError"
                                }
                            }))
                        })
                    }
                }), Z && p.unshift({
                    id: "chatgpt-conversation-files",
                    message: (0, nC.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat"
                    }),
                    icon: tB.sb,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(368308).then(n.bind(n, "LFUX"))).openConversationFiles
                        })().then(e => {
                            u() && e(q, {
                                conversationId: O,
                                serverConversationId: W,
                                onOpenMessage: L
                            })
                        }).catch(() => {
                            u() && q.get(K.f).danger(ee.formatMessage({
                                id: "chatgptConversations.files.loadPanelError",
                                defaultMessage: "Couldn’t open files in chat"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgptConversations.files.loadPanelError"
                                }
                            })
                        })
                    }
                }), p.push(...(0, nS.a)(q)), (0, nM.a)(q, {
                    organizationItems: (0, nI.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: eo.current,
                    viewItems: p,
                    feedbackItems: [],
                    preferenceItems: null == h ? [] : [h],
                    surface: "header",
                    isTitleMenu: !0,
                    conversationId: W,
                    stateConversationId: O,
                    conversationOrigin: k,
                    title: N,
                    isHandoffPending: B,
                    canHandoff: null != F,
                    onHandoff: F,
                    projectId: D,
                    projectName: H,
                    onRename: (0, e_.b)(r, s, o, el) ? () => void(0, nA.renameActiveChatGptConversation)(q, O) : void 0,
                    isPinned: q.get(ew.h, W) ?? l?.is_starred === !0,
                    onTogglePin: c ? () => {
                        let e = (0, nA.b)(q, W);
                        !(null == e || q.get(ew.g, W)) && (0, e_.a)(e, q.get(T.h), q.get(T.g)) && (0, ew.V)({
                            scope: q,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(nY)
                    } : void 0,
                    onArchive: !i || el || z ? void 0 : () => (0, nj.a)(q, W),
                    onUnarchive: i && !el && z ? () => {
                        (0, ew.W)({
                            scope: q,
                            conversationId: W
                        }).then(() => {
                            q.get(K.f).success(ee.formatMessage(eE.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            q.get(K.f).danger(ee.formatMessage(eC.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !i || el ? void 0 : () => ea("menu")
                })
            }, E[24] = O, E[25] = k, E[26] = Z, E[27] = ee, E[28] = el, E[29] = z, E[30] = B, E[31] = V, E[32] = et, E[33] = F, E[34] = L, E[35] = D, E[36] = H, E[37] = q, E[38] = W, E[39] = Y, E[40] = N, E[41] = y) : y = E[41];
            let eh = y;
            E[42] !== P || E[43] !== N || E[44] !== M ? (b = null == M ? (0, a.jsx)(nw.a, {
                ref: er,
                onActivate: P,
                title: N
            }) : (0, a.jsx)(nx.b, {
                ref: er,
                children: M
            }), E[42] = P, E[43] = N, E[44] = M, E[45] = b) : b = E[45];
            let ep = b;
            E[46] !== eh || E[47] !== ep || E[48] !== et || E[49] !== ei || E[50] !== eu || E[51] !== R || E[52] !== W || E[53] !== A ? (x = A && (ei ? (0, a.jsx)(nH, {
                conversationId: W,
                getBaseItems: eh,
                menuTriggerRef: er,
                navigate: et,
                onBeforeOpen: eu,
                renderDropdown: R,
                children: ep
            }) : (0, a.jsx)(n_.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => eh(),
                onBeforeOpen: eu,
                renderItem: nI.b,
                renderDropdown: R,
                trigger: "click",
                children: ep
            })), E[46] = eh, E[47] = ep, E[48] = et, E[49] = ei, E[50] = eu, E[51] = R, E[52] = W, E[53] = A, E[54] = x) : x = E[54];
            let em = "shortcut" === en,
                ef = null != en;
            return E[55] !== en ? (w = () => {
                es.current = "menu" === en ? er.current : null, ea(null)
            }, E[55] = en, E[56] = w) : w = E[56], E[57] === Symbol.for("react.memo_cache_sentinel") ? (I = e => {
                let t = es.current;
                if (es.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, E[57] = I) : I = E[57], E[58] !== ed || E[59] !== el || E[60] !== em || E[61] !== ef || E[62] !== w || E[63] !== N ? (S = (0, a.jsx)(ex.a, {
                allowArtifactDeletion: !0,
                autoFocusConfirm: em,
                open: ef,
                onOpenChange: w,
                onCloseAutoFocus: I,
                isDeleting: el,
                onConfirm: ed,
                title: N
            }), E[58] = ed, E[59] = el, E[60] = em, E[61] = ef, E[62] = w, E[63] = N, E[64] = S) : S = E[64], E[65] !== x || E[66] !== S ? (j = (0, a.jsxs)(a.Fragment, {
                children: [x, S]
            }), E[65] = x, E[66] = S, E[67] = j) : j = E[67], j
        }

        function nY() {}

        function nQ(e) {
            let t, n, s, o = (0, r.c)(12),
                {
                    title: i,
                    includePlugins: l,
                    lockdownConversationId: c,
                    triggerButton: u,
                    renderDropdown: h
                } = e,
                p = (0, d.y)(eg.a),
                g = (0, v._)();
            return o[0] !== l || o[1] !== c || o[2] !== g || o[3] !== p ? (t = () => {
                let e = null == c ? null : (0, nk.a)(p, c, null, () => (0, nO.a)(g)),
                    t = null == e ? [] : [e];
                return l ? (0, nI.a)(t) : t
            }, o[0] = l, o[1] = c, o[2] = g, o[3] = p, o[4] = t) : t = o[4], o[5] !== i || o[6] !== u ? (n = u ?? (0, a.jsx)(nw.a, {
                title: i
            }), o[5] = i, o[6] = u, o[7] = n) : n = o[7], o[8] !== h || o[9] !== t || o[10] !== n ? (s = (0, a.jsx)(n_.a, {
                preserveBrowserContextMenu: !0,
                getItems: t,
                renderItem: nI.b,
                renderDropdown: h,
                trigger: "click",
                children: n
            }), o[8] = h, o[9] = t, o[10] = n, o[11] = s) : s = o[11], s
        }
        var n$ = n("dLcZ"),
            nX = n("UNoV");

        function nJ(e) {
            let t, n = (0, r.c)(2),
                {
                    children: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(I.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                children: (0, a.jsx)("div", {
                    className: nX.a.Progress,
                    children: s
                })
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var nZ = n("NVRI"),
            n0 = n("WLgA");

        function n1(e) {
            let t, n, s = (0, r.c)(9),
                {
                    icon: o,
                    name: i,
                    projectId: l,
                    linkToProject: c
                } = e;
            s[0] !== o || s[1] !== c || s[2] !== i || s[3] !== l ? (t = c && null != i ? (0, a.jsx)(tN.b, {
                "aria-label": i,
                color: "ghostActive",
                size: "toolbar",
                to: (0, n0.c)(l),
                uniform: !0,
                children: o
            }) : null, s[0] = o, s[1] = c, s[2] = i, s[3] = l, s[4] = t) : t = s[4];
            let d = t,
                u = d ?? o,
                h = null != d;
            return s[5] !== i || s[6] !== u || s[7] !== h ? (n = (0, a.jsx)(nZ.b, {
                project: {
                    icon: u,
                    iconInteractive: h,
                    name: i
                }
            }), s[5] = i, s[6] = u, s[7] = h, s[8] = n) : n = s[8], n
        }
        var n2 = n("ftSl"),
            n3 = n("u9Jt"),
            n4 = n("Xoyl");

        function n5(e) {
            let t, n = (0, r.c)(7),
                {
                    hasTitleMenu: s,
                    onClick: o,
                    project: i,
                    title: l
                } = e;
            if (null == l) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(n4.a, {}), n[0] = e) : e = n[0], e
            }
            if (s) {
                let e;
                return n[1] !== o || n[2] !== i || n[3] !== l ? (e = (0, a.jsx)(n3.a, {
                    triggerButton: (0, a.jsx)(nw.a, {
                        onActivate: o,
                        project: i,
                        title: l
                    })
                }), n[1] = o, n[2] = i, n[3] = l, n[4] = e) : e = n[4], e
            }
            return n[5] !== l ? (t = (0, a.jsx)(n2.a, {
                className: "max-w-full",
                variant: "flush-start",
                title: l
            }), n[5] = l, n[6] = t) : t = n[6], t
        }
        var n6 = n("B5Qz"),
            n7 = n("E7pP"),
            n8 = n("oU3c"),
            n9 = n("B0Wx");
        let ae = (0, d.d)(ej.a, (e, t) => {
            let {
                get: n
            } = t, a = n(n9.b, e);
            if (null != a) return a;
            let r = n(tm.j, e);
            if (null == r) return null;
            let s = n(ew.j, [r], {
                    enabled: !1
                }).data?.[0],
                o = (0, n8.a)(s?.title, s?.mapping);
            if (null != o) return o;
            let i = n(n7.a),
                l = null == i ? null : n(n6.e, {
                    hostId: i,
                    threadId: r
                });
            return l?.sourceKind === "chatgpt" ? (0, n8.c)(l.displayTitle) : null
        });
        var at = n("X0li");
        let an = (0, tz.a)(at.d),
            aa = (0, tz.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            ar = (0, tz.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var as = n("lX86"),
            ao = n("sQ4r"),
            ai = n("on57"),
            al = n("IPUh"),
            ac = n("v7qY"),
            ad = n("wD9O"),
            au = n("jov5"),
            ah = n("Ro2M"),
            ap = n("bN4H"),
            ag = n("TS05");

        function am(e) {
            let t, n, s, o, i = (0, r.c)(12),
                {
                    conversationId: l,
                    entries: c,
                    turnListApi: u
                } = e,
                {
                    key: h,
                    search: p,
                    state: g
                } = (0, v.Y)();
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "automations.cloud.scheduled-tasks"
            }, i[0] = t) : t = i[0];
            let {
                isCapable: m
            } = (0, d.x)(C.a, t);
            if (i[1] !== m || i[2] !== g?.sidebarArea || i[3] !== p) {
                let e = new URLSearchParams(p);
                n = e.get("automationId"), s = g?.sidebarArea === "scheduled" || !m || !n || "finalAgentTurnStart" !== e.get("messageId"), i[1] = m, i[2] = g?.sidebarArea, i[3] = p, i[4] = n, i[5] = s
            } else n = i[4], s = i[5];
            return s ? null : (i[6] !== n || i[7] !== l || i[8] !== c || i[9] !== h || i[10] !== u ? (o = (0, a.jsx)(af, {
                automationId: n,
                conversationId: l,
                entries: c,
                turnListApi: u
            }, h), i[6] = n, i[7] = l, i[8] = c, i[9] = h, i[10] = u, i[11] = o) : o = i[11], o)
        }

        function af(e) {
            let t, n, a, s, o = (0, r.c)(25),
                {
                    automationId: i,
                    conversationId: l,
                    entries: c,
                    turnListApi: u
                } = e,
                h = (0, d.y)(eg.a),
                p = (0, v.Y)(),
                g = (0, d.z)(T.f),
                f = (0, d.x)(tm.j, l),
                {
                    data: y
                } = (0, d.x)(ah.e, i),
                b = (0, d.z)(au.a),
                x = (0, m.useRef)(null),
                C = (0, m.useRef)(null);
            o[0] !== c ? (t = c.findLast(ab), o[0] = c, o[1] = t) : t = o[1];
            let _ = t;
            o[2] !== g || o[3] !== i || o[4] !== b || o[5] !== _ || o[6] !== y || o[7] !== p || o[8] !== h || o[9] !== u ? (n = () => {
                null == y || null == g || (b || x.current === g || (x.current = g, (0, ap.openAutomationSidePanelTab)({
                    scope: h,
                    automationId: i,
                    title: y.automation.title
                })), null != u && null != _ && C.current !== g && (C.current = g, u.scrollToKey(_.turnKey, av, {
                    align: "top"
                }).then(() => {
                    h.set(ag.a, {
                        locationKey: p.key,
                        accountId: g
                    }, !0)
                })))
            }, o[2] = g, o[3] = i, o[4] = b, o[5] = _, o[6] = y, o[7] = p, o[8] = h, o[9] = u, o[10] = n) : n = o[10];
            let w = (0, m.useEffectEvent)(n);
            o[11] !== g || o[12] !== l || o[13] !== y?.automation.conversation_id || o[14] !== w || o[15] !== f ? (a = () => {
                null != g && y?.automation.conversation_id === (f ?? l) && w()
            }, o[11] = g, o[12] = l, o[13] = y?.automation.conversation_id, o[14] = w, o[15] = f, o[16] = a) : a = o[16];
            let I = _?.turnKey,
                S = y?.automation.conversation_id;
            return o[17] !== g || o[18] !== b || o[19] !== l || o[20] !== f || o[21] !== I || o[22] !== S || o[23] !== u ? (s = [g, l, I, S, f, b, u], o[17] = g, o[18] = b, o[19] = l, o[20] = f, o[21] = I, o[22] = S, o[23] = u, o[24] = s) : s = o[24], (0, m.useEffect)(a, s), null
        }

        function av(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: ay
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function ay(e) {
            return e instanceof HTMLElement && e.getClientRects().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }

        function ab(e) {
            let {
                turn: t
            } = e;
            return t.items.some(ax)
        }

        function ax(e) {
            return "user-message" !== e.type
        }
        var aC = n("TDcV"),
            a_ = n("Xvoy"),
            aw = n("WAdu");
        let aI = {
            $type: "protobuf_analytics_events.v1.ChatgptConversationPrintLifecycle"
        };
        var aS = n("jDEJ");
        let aT = (0, d.u)(ej.a, null);

        function aj(e, t) {
            if (!e.get(ec.c).isChatgptBrowserReplacement || t.repeat || ((0, aS.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(aT)) return;
            let n = aP("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(aT, n), aA(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function aE(e, t, n, a) {
            let r = e.get(aT);
            if (!e.get(ec.c).isChatgptBrowserReplacement || null == r) return a();
            let s = n => {
                aA(e, r, n, t)
            };
            s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(aT)?.id !== r.id || e.get(aT)?.printing || e.set(aT, null), a
            }
        }

        function aP(e) {
            let t = performance.now();
            return {
                id: crypto.randomUUID(),
                entryPoint: e,
                startedAt: t,
                printing: !1
            }
        }

        function aA(e, t, n, a) {
            (0, ec.a)(e, aI, {
                attemptId: t.id,
                stage: n,
                entryPoint: t.entryPoint,
                elapsedMs: Math.max(0, performance.now() - t.startedAt),
                preparation: a
            })
        }
        var aM = n("CpsU"),
            aR = n.n(aM),
            ak = n("rKAs"),
            aO = n("SqqO"),
            aN = n("zHp1"),
            aB = n("taWv");

        function az() {
            return Object.fromEntries(Array.from(document.images).flatMap(e => {
                if (!e.complete || 0 === e.naturalWidth) return [];
                let t = e.currentSrc || e.src;
                return [e.getAttribute("src"), e.src, t].flatMap(e => e ? [
                    [e, t]
                ] : [])
            }))
        }
        var aG = n("j0nn"),
            aF = n("AO3k"),
            aL = n("dPHp"),
            aD = n("X8kv"),
            aH = "printDocument-v_w5Ax";
        let aW = "https://chatgpt.com/download/?utm_source=chatgpt_web&utm_medium=print&utm_campaign=app_install";

        function aq(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g, m = (0, r.c)(22),
                {
                    children: v,
                    title: y
                } = e,
                b = (0, f.a)(),
                {
                    getExperiment: x
                } = (0, eO.h)();
            if (!x("448755449").get("enabled", !1)) {
                let e, t;
                return m[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, ai.b)(aH, "hidden w-full space-y-1.5 bg-surface text-default print:block"), m[0] = e) : e = m[0], m[1] !== v ? (t = (0, a.jsx)("div", {
                    className: e,
                    "data-conversation-print": "",
                    "data-theme": "light",
                    children: v
                }), m[1] = v, m[2] = t) : t = m[2], t
            }
            return m[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, ai.b)(aH, "formattedPrintDocument-tP74Wl", "group/conversation-print hidden w-full bg-surface text-default print:block"), m[3] = t) : t = m[3], m[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(aL.a, {
                className: "h-6 w-auto shrink-0"
            }), m[4] = n) : n = m[4], m[5] !== y ? (s = (0, a.jsxs)("header", {
                className: "mb-6 flex items-center justify-between gap-6",
                children: [n, (0, a.jsx)("p", {
                    className: "min-w-0 text-end text-sm wrap-anywhere text-secondary",
                    children: y
                })]
            }), m[5] = y, m[6] = s) : s = m[6], m[7] !== v ? (o = (0, a.jsx)("div", {
                className: "transcript-XHYu34",
                children: v
            }), m[7] = v, m[8] = o) : o = m[8], m[9] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, ai.b)("footer-QEzLbn", "flex items-center gap-3 rounded-2xl border border-default bg-surface-secondary p-2 text-default"), m[9] = i) : i = m[9], m[10] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)("div", {
                className: "flex size-10 shrink-0 items-center justify-center rounded-xl border border-default bg-surface",
                children: (0, a.jsx)(aD.a, {
                    className: "size-7",
                    "aria-hidden": "true"
                })
            }), m[10] = l) : l = m[10], m[11] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)("p", {
                className: "font-semibold",
                children: (0, a.jsx)(eb.a, {
                    id: "chatgpt.print.downloadApp.title",
                    defaultMessage: "Take your curiosity further"
                })
            }), m[11] = c) : c = m[11], m[12] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsxs)("div", {
                className: "min-w-0 flex-1 text-sm",
                children: [c, (0, a.jsx)("p", {
                    className: "mt-1 text-secondary",
                    children: (0, a.jsx)(eb.a, {
                        id: "chatgpt.print.downloadApp.description",
                        defaultMessage: "Scan to get the ChatGPT app"
                    })
                })]
            }), m[12] = d) : d = m[12], m[13] !== b ? (u = b.formatMessage({
                id: "chatgpt.print.downloadApp.qrCode",
                defaultMessage: "Download the ChatGPT app"
            }), m[13] = b, m[14] = u) : u = m[14], m[15] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(eb.a, {
                id: "chatgpt.print.downloadApp.fallback",
                defaultMessage: "Get the app"
            }), m[15] = h) : h = m[15], m[16] !== u ? (p = (0, a.jsxs)("footer", {
                className: i,
                children: [l, d, (0, a.jsx)("a", {
                    className: "shrink-0",
                    href: `${aW}&utm_content=pdf_link`,
                    children: (0, a.jsx)(aF.a, {
                        value: `${aW}&utm_content=qr`,
                        size: "inline",
                        ariaLabel: u,
                        fallback: h
                    })
                })]
            }), m[16] = u, m[17] = p) : p = m[17], m[18] !== p || m[19] !== s || m[20] !== o ? (g = (0, a.jsxs)("div", {
                className: t,
                "data-conversation-print": "",
                "data-print-formatting": "",
                "data-theme": "light",
                children: [s, o, p]
            }), m[18] = p, m[19] = s, m[20] = o, m[21] = g) : g = m[21], g
        }

        function aU(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var aK = n("zn0A"),
            aV = n("jfiJ"),
            aY = n("FGJH"),
            aQ = n("nmN6");
        let a$ = new WeakMap;

        function aX(e) {
            let t, n, s = (0, r.c)(6),
                o = (0, d.z)(aC.a);
            return s[0] !== o || s[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([o, e.entries[0]?.conversationId]), s[0] = o, s[1] = e.entries[0]?.conversationId, s[2] = t) : t = s[2], s[3] !== e || s[4] !== t ? (n = (0, a.jsx)(aJ, {
                ...e
            }, t), s[3] = e, s[4] = t, s[5] = n) : n = s[5], n
        }

        function aJ(e) {
            let t, n, s, o, i, l, c = (0, r.c)(16),
                u = (0, d.y)(eg.a),
                h = (0, d.z)(a_.a),
                [p, g] = (0, m.useState)(!1),
                f = (0, m.useRef)(null);
            c[0] !== u ? (t = (e, t) => {
                if (aj(u, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void f.current?.onKeyDown(e, t);
                let n = a$.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, ac.flushSync)(() => g(!0));
                let a = n ?? f.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => a$.get(e)).finally(() => {
                    t.aborted || g(!1)
                })
            }, c[0] = u, c[1] = t) : t = c[1];
            let v = (0, m.useEffectEvent)(t);
            c[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                (0, ac.flushSync)(() => g(!0)), f.current?.onBeforePrint()
            }, c[2] = n) : n = c[2];
            let y = (0, m.useEffectEvent)(n);
            c[3] !== u ? (s = () => {
                u.set(aK.a, null), g(!1)
            }, c[3] = u, c[4] = s) : s = c[4];
            let b = (0, m.useEffectEvent)(s);
            return c[5] !== b || c[6] !== y || c[7] !== v || c[8] !== u ? (o = () => {
                let e, t, n = new AbortController,
                    a = (e = () => {
                        if (!u.get(ec.c).isChatgptBrowserReplacement) return;
                        let e = u.get(aT);
                        if (e?.printing) return;
                        let t = {
                            ...e ?? aP("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_UNOBSERVED"),
                            printing: !0
                        };
                        u.set(aT, t), aA(u, t, "CHATGPT_CONVERSATION_PRINT_STAGE_BEFORE_PRINT")
                    }, t = () => {
                        let e = u.get(aT);
                        u.get(ec.c).isChatgptBrowserReplacement && e?.printing && (aA(u, e, "CHATGPT_CONVERSATION_PRINT_STAGE_AFTER_PRINT"), u.set(aT, null))
                    }, window.addEventListener("beforeprint", e, !0), window.addEventListener("afterprint", t), () => {
                        window.removeEventListener("beforeprint", e, !0), window.removeEventListener("afterprint", t), u.set(aT, null)
                    }),
                    r = e => v(e, n.signal);
                return window.addEventListener("keydown", r, !0), window.addEventListener("beforeprint", y, !0), window.addEventListener("afterprint", b), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), window.removeEventListener("beforeprint", y, !0), window.removeEventListener("afterprint", b), u.set(aK.a, null), a()
                }
            }, c[5] = b, c[6] = y, c[7] = v, c[8] = u, c[9] = o) : o = c[9], c[10] !== u ? (i = [u], c[10] = u, c[11] = i) : i = c[11], (0, m.useEffect)(o, i), c[12] !== h || c[13] !== e || c[14] !== p ? (l = p || h ? (0, a.jsx)(aZ, {
                ...e,
                ref: f,
                printing: h
            }) : null, c[12] = h, c[13] = e, c[14] = p, c[15] = l) : l = c[15], l
        }

        function aZ(e) {
            let t, n, s, o, l = (0, r.c)(19),
                {
                    entries: c,
                    title: u,
                    TurnRowComponent: h,
                    printing: p,
                    ref: g
                } = e,
                f = (0, d.y)(eg.a),
                v = (0, m.useContext)(S.a),
                y = (0, m.useContext)(aw.a),
                {
                    getExperiment: b
                } = (0, eO.h)(),
                x = b("448755449", {
                    disableExposureLog: !0
                }).get("enabled", !1);
            l[0] !== c[0]?.conversationId ? (t = c[0]?.conversationId ?? (0, ne.d)(""), l[0] = c[0]?.conversationId, l[1] = t) : t = l[1], l[2] !== v || l[3] !== t ? (n = {
                auth: v,
                conversationId: t
            }, l[2] = v, l[3] = t, l[4] = n) : n = l[4];
            let C = (0, d.x)(null != c[0] && aG.h, n),
                _ = (0, d.x)(null == c[0] ? null : tf.e, c[0]?.conversationId ?? "") ?? !0,
                w = (0, m.useRef)(null),
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
                            let a = e.get(tm.j, n.conversationId);
                            t = {
                                serverId: a,
                                userResolver: (0, aB.c)(void 0, void 0, void 0, e.get(tm.T, n.conversationId) ?? void 0),
                                scopedResolver: (0, aB.c)(a ?? void 0)
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
                            void 0 === t.generatedResolver && (t.generatedResolver = e.get(aB.a, n.conversationId));
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
                                        for (let a of (0, ak.u)(t, e)) {
                                            if (r && (0, aO.d)(a.src)) continue;
                                            let e = a.searchResult?.isProxied && (a.previewSrc === a.searchResult.contentSrc || a.previewSrc === a.searchResult.originalSrc) ? a.src : a.previewSrc;
                                            o.push({
                                                conversationId: n.conversationId,
                                                src: a.src,
                                                previewSrc: null != e && r && (0, aO.d)(e) ? a.src : e
                                            })
                                        }
                            }
                            if (null == s) continue;
                            i.push(...l.contentReferences.flatMap((e, t) => (0, ak.u)(e, t).map(e => {
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
                        return null != t && (0, aN.h)(t) ? [{
                            src: t,
                            resolver: n
                        }] : []
                    });
                    return {
                        queryKey: ["chatgpt-print-assets", e.get(aC.a), t[0]?.conversationId, a, r, o, c.map(e => {
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
                        staleTime: eL.b.FIVE_MINUTES,
                        refetchOnWindowFocus: !1,
                        retry: !1,
                        queryFn: t => {
                            let {
                                client: a,
                                signal: i,
                                queryKey: l
                            } = t;
                            return aE(e, "CHATGPT_CONVERSATION_PRINT_PREPARATION_IMAGES", i, async () => {
                                let t = {
                                    ...a.getQueryData(l)?.imageSources
                                };
                                for (let e of aR()(c, 6)) i.throwIfAborted(), await Promise.all(e.map(async e => {
                                    let {
                                        src: n,
                                        resolver: r
                                    } = e, s = await (0, aN.a)(a, n, r);
                                    if (i.throwIfAborted(), null != s) {
                                        let e = new Image;
                                        e.referrerPolicy = "no-referrer", e.src = s, await e.decode(), t[n] = s
                                    }
                                }));
                                let d = new Map,
                                    u = o.flatMap(t => {
                                        let n = d.get(t.conversationId);
                                        return (null == n && (n = r || !e.get(aG.h, {
                                            auth: s,
                                            conversationId: t.conversationId
                                        }) && e.get(tf.e, t.conversationId), d.set(t.conversationId, n)), n && (0, aO.d)(t.src)) ? [] : [{
                                            ...t,
                                            previewSrc: n && null != t.previewSrc && (0, aO.d)(t.previewSrc) ? t.src : t.previewSrc
                                        }]
                                    }),
                                    h = n ? t : await async function(e, t, n) {
                                        if (0 === e.length) return t;
                                        let a = az(),
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
                }(f, c, p, x, "restricted" === y || !C && _, v),
                {
                    data: T,
                    isSuccess: j,
                    isError: E,
                    refetch: P
                } = (0, i.a)(I);
            return l[5] !== I || l[6] !== T || l[7] !== x || l[8] !== j || l[9] !== P || l[10] !== f ? (s = () => ({
                onKeyDown(e, t) {
                    if (!e.defaultPrevented && (!j || !T.complete) && (e.preventDefault(), !e.repeat && w.current !== t)) return w.current = t, P({
                        cancelRefetch: !1
                    }).then(() => {
                        t.aborted || window.print()
                    }).finally(() => {
                        w.current === t && (w.current = null)
                    })
                },
                onBeforePrint() {
                    if (x) {
                        let e = f.queryClient.getQueryData(I.queryKey),
                            t = {
                                ...az(),
                                ...e?.imageSources
                            };
                        (0, ac.flushSync)(() => f.set(aK.a, t))
                    }
                }
            }), l[5] = I, l[6] = T, l[7] = x, l[8] = j, l[9] = P, l[10] = f, l[11] = s) : s = l[11], (0, m.useImperativeHandle)(g, s), l[12] !== h || l[13] !== c || l[14] !== E || l[15] !== j || l[16] !== p || l[17] !== u ? (o = p ? (0, ac.createPortal)((0, a.jsx)(aq, {
                title: u,
                children: (0, a.jsx)(ni.a, {
                    value: null,
                    children: (0, a.jsx)(aQ.a, {
                        value: null,
                        children: j ? c.map(e => {
                            var t;
                            return (0, a.jsx)(h, {
                                entry: {
                                    ...e,
                                    timestampSeparatorAtMs: null,
                                    turn: {
                                        ...t = e.turn,
                                        suppressTurnActions: !0,
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? aU(e) : {
                                            ...e,
                                            items: e.items.map(aU),
                                            activeReasoning: null == e.activeReasoning ? void 0 : aU(e.activeReasoning)
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
                            children: E ? (0, a.jsx)(eb.a, {
                                id: "chatgpt.printAssets.error",
                                defaultMessage: "Some images could not be loaded. Close print and try again."
                            }) : (0, a.jsx)(eb.a, {
                                id: "chatgpt.printAssets.loading",
                                defaultMessage: "Images are still loading. Close print and try again."
                            })
                        })
                    })
                })
            }), document.body) : null, l[12] = h, l[13] = c, l[14] = E, l[15] = j, l[16] = p, l[17] = u, l[18] = o) : o = l[18], o
        }

        function a0(e) {
            let t, n, a, s, o, l, c = (0, r.c)(22),
                {
                    conversationId: u
                } = e,
                h = (0, d.y)(ej.a),
                p = (0, f.a)(),
                g = (0, m.useRef)(null),
                v = (0, d.z)(aC.a),
                y = (0, d.x)(tm.j, u),
                b = (0, d.z)(aY.b);
            c[0] !== v || c[1] !== y ? (t = ["chatgpt-print-history", v, y], c[0] = v, c[1] = y, c[2] = t) : t = c[2], c[3] !== h || c[4] !== y ? (n = e => {
                let {
                    signal: t
                } = e;
                return aE(h, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != y && await (0, aV.a)(h, y, t), !0))
            }, c[3] = h, c[4] = y, c[5] = n) : n = c[5], c[6] !== t || c[7] !== n ? (a = {
                queryKey: t,
                enabled: !1,
                staleTime: 0,
                retry: !1,
                refetchOnWindowFocus: !1,
                queryFn: n
            }, c[6] = t, c[7] = n, c[8] = a) : a = c[8];
            let {
                refetch: x
            } = (0, i.a)(a);
            c[9] !== v || c[10] !== u || c[11] !== p || c[12] !== b || c[13] !== x || c[14] !== h || c[15] !== y ? (s = (e, t) => {
                if (aj(h, e), e.defaultPrevented || null == y || 0 === b || h.get(aY.c, y)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (g.current?.signal === t) return void a$.set(e, g.current.preparation);
                let n = x({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && h.get(aC.a) === v) {
                        if (e.isError) return void h.get(K.f).danger(p.formatMessage({
                            id: "chatgpt.printHistory.error",
                            defaultMessage: "Couldn't load the full conversation to print"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgpt.printHistory.error"
                            }
                        });
                        await Promise.all(h.queryClient.getQueryCache().findAll({
                            queryKey: ["chatgpt-print-assets", v, u],
                            predicate: a3
                        }).map(a1)), t.aborted || h.get(aC.a) !== v || window.print()
                    }
                }).finally(() => {
                    g.current?.signal === t && (g.current = null)
                });
                g.current = {
                    signal: t,
                    preparation: n
                }, a$.set(e, n)
            }, c[9] = v, c[10] = u, c[11] = p, c[12] = b, c[13] = x, c[14] = h, c[15] = y, c[16] = s) : s = c[16];
            let C = (0, m.useEffectEvent)(s);
            return c[17] !== C ? (o = () => {
                let e = new AbortController,
                    t = t => C(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, c[17] = C, c[18] = o) : o = c[18], c[19] !== v || c[20] !== y ? (l = [v, y], c[19] = v, c[20] = y, c[21] = l) : l = c[21], (0, m.useEffect)(o, l), null
        }

        function a1(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(a2)
        }

        function a2() {}

        function a3(e) {
            return e.getObserversCount() > 0
        }
        var a4 = n("gbRX");

        function a5(e) {
            let t, n, s = (0, r.c)(4),
                {
                    isFetching: o,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, d.z)(!i && a4.a) || o;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again"
            }), s[0] = t) : t = s[0], s[1] !== l || s[2] !== c ? (n = (0, a.jsx)(tN.a, {
                color: "ghost",
                disabled: c,
                onClick: l,
                children: t
            }), s[1] = l, s[2] = c, s[3] = n) : n = s[3], n
        }

        function a6(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation"
            }), o[0] = t) : t = o[0], o[1] !== i || o[2] !== l || o[3] !== c ? (n = null != c ? (0, a.jsx)(a5, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, o[1] = i, o[2] = l, o[3] = c, o[4] = n) : n = o[4], o[5] !== n ? (s = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), o[5] = n, o[6] = s) : s = o[6], s
        }
        var a7 = n("FfNP"),
            a8 = n("WVag");
        let a9 = (0, tz.a)(a7.loadEpicChartIndicator);

        function re(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, d.x)(a8.a, s),
                [i, l] = (0, m.useState)(!1);
            return i || null == o || l(!0), n[0] !== s || n[1] !== i ? (t = i ? (0, a.jsx)(a9, {
                conversationId: s
            }) : null, n[0] = s, n[1] = i, n[2] = t) : t = n[2], t
        }
        var rt = n("DWXw"),
            rn = n("RGWz"),
            ra = n("QxH2"),
            rr = n("UuVq"),
            rs = n("TwSq"),
            ro = n("l0fK"),
            ri = n("hkBU"),
            rl = n("T1PX"),
            rc = n("guID"),
            rd = n("Mbqw"),
            ru = n("yzQ9"),
            rh = n("Gjet"),
            rp = n("gJe8"),
            rg = n("ASxG"),
            rm = n("lsfk"),
            rf = n("IObw"),
            rv = n("kQNh"),
            ry = n.n(rv),
            rb = n("NkEl"),
            rx = n("FW69"),
            rC = "highlight-x7OnzP",
            r_ = "safari-wcvuzB",
            rw = "block-t7sxyD";
        let rI = "chatgpt-search-result",
            rS = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* rT(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(rS) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let s = RegExp(t.split(/\n+/u).map(ry()).join("\\n*"), "g");
            for (let n = s.exec(r); null != n && n.index < r.length; n = s.exec(r)) {
                let r = n.index;
                s.lastIndex = r + 1;
                let o = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < o);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, o - l.start), rj(c) && ((0, rx.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function rj(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let rE = rg.object({
            chatGptSearchNavigation: rg.object({
                key: rg.string(),
                messageId: rg.string()
            })
        });

        function rP(e) {
            let t, n, a, s, o, i, l, c, u, h, p, g, f = (0, r.c)(50),
                {
                    conversationId: y,
                    entries: b,
                    isConversationFetching: x,
                    turnListApi: C
                } = e,
                _ = (0, d.y)(ej.a),
                w = (0, d.x)(tm.s, y),
                I = (0, rm.b)(),
                S = (0, ad.c)();
            f[0] !== I || f[1] !== S ? (t = e => {
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
                            left: (0, ad.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                        h = (0, ad.b)(o.height, n),
                        p = (0, ad.b)(o.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, I, S)
            }, f[0] = I, f[1] = S, f[2] = t) : t = f[2];
            let T = (0, m.useEffectEvent)(t),
                j = (0, v.Y)(),
                E = (0, v._)(),
                P = new URLSearchParams(j.search),
                A = P.get("messageId") ?? P.get("message"),
                M = rE.safeParse(j.state).data?.chatGptSearchNavigation,
                R = A ?? M?.messageId,
                k = P.get("selectedTextQuery") ?? "",
                O = (0, d.x)(tm.N, y),
                N = !k || null != R && null != O && (O[R]?.message != null || Object.values(O).some(e => e.message?.id === R)),
                B = k || P.get("historySearchQuery") || "",
                z = JSON.stringify([y, null != A ? j.key : M?.key ?? j.key, R]);
            f[3] !== z ? (n = {
                key: z,
                handled: !1,
                positioned: !1
            }, f[3] = z, f[4] = n) : n = f[4];
            let G = (0, m.useRef)(n),
                F = (0, m.useEffectEvent)(e => {
                    G.current.positioned = !0;
                    let t = B.trim().length > 0 ? function(e, t, n) {
                        let a, r, s, o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            p = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === p.length) return () => {};
                        let g = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(ry()).join("|") : ry()(c), null == c ? "giu" : "gu"),
                            m = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(_);

                        function C() {
                            for (let t of (m = !0, x.disconnect(), clearTimeout(r), null != s && cancelAnimationFrame(s), null != a && CSS.highlights.get(rI) === a && CSS.highlights.delete(rI), e.classList.remove(rC, r_), b)) t.classList.remove(rC, rw)
                        }

                        function _() {
                            m || null != r || null != s || (r = setTimeout(() => {
                                r = void 0, s = requestAnimationFrame(() => {
                                    s = void 0, w()
                                })
                            }, 50))
                        }

                        function w() {
                            let t;
                            if (m || !e.isConnected || null != s) return;
                            let d = performance.now() - f;
                            if (d < 4e3 && null != e.querySelector("[data-search-result-pending]")) return void _();
                            let u = (0, rb.a)(e);
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
                                        s = void 0, w()
                                    })
                                });
                                return
                            }
                            let I = [];
                            if (null != c) {
                                let t = e.querySelector('[data-markdown-text-style="assistant-message"]') ?? e,
                                    n = 0;
                                for (let e of rT(t, c))
                                    if (!(n++ < l)) {
                                        I.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(rS) != null || u.some(t => {
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), rj(a) && I.push(a)
                                    }
                            }
                            let S = h.flatMap(e => {
                                let {
                                    element: t,
                                    target: n
                                } = e;
                                if ("terms" !== i || "text" === n.highlight || "auto" === n.highlight && I.some(e => t.contains(e.startContainer))) return [];
                                let a = t.getBoundingClientRect();
                                return a.width > 0 && a.height > 0 ? [t] : []
                            });
                            if (0 === I.length && 0 === S.length) {
                                if (d < 800) return void _();
                                S.push(e)
                            }
                            let T = 0,
                                j = 0;
                            for (let e of [...I, ...S]) {
                                let n = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect(),
                                    a = n?.top ?? 0,
                                    r = n?.left ?? 0;
                                (null == t || 0 > (a - T || r - j)) && (t = e, T = a, j = r)
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
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...I), CSS.highlights.set(rI, a)) : I.length > 0 && S.push(e), e.classList.add(rC), (0, tO.e)() && e.classList.add(r_), S)) t.classList.add(rC, rw), b.add(t);
                            r = setTimeout(C, 3600)
                        }
                        return x.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), w(), C
                    }(e, B, T, k ? "phrase" : "terms", Number(P.get("selectedTextOccurrence"))) : void 0;
                    return null != A && (P.delete("messageId"), P.delete("message"), P.delete("historySearchQuery"), P.delete("selectedTextQuery"), P.delete("selectedTextOccurrence"), E({
                        pathname: j.pathname,
                        search: P.toString(),
                        hash: j.hash
                    }, {
                        replace: !0,
                        preventScrollReset: !0,
                        state: {
                            ...j.state,
                            chatGptSearchNavigation: {
                                key: j.key,
                                messageId: A
                            }
                        }
                    })), t
                });
            f[5] !== y || f[6] !== x || f[7] !== R || f[8] !== z || f[9] !== _ || f[10] !== N ? (a = () => {
                if (G.current.key !== z && (G.current = {
                        key: z,
                        handled: !1,
                        positioned: !1
                    }), null != R && !x && N) return _.watch(e => {
                    !G.current.handled && (0, tm.Qb)(e, y, R) && (G.current.handled = !0)
                })
            }, s = [y, x, R, z, _, N], f[5] = y, f[6] = x, f[7] = R, f[8] = z, f[9] = _, f[10] = N, f[11] = a, f[12] = s) : (a = f[11], s = f[12]), (0, m.useLayoutEffect)(a, s), f[13] !== b || f[14] !== R ? (o = null == R ? void 0 : b.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(R)
            }), f[13] = b, f[14] = R, f[15] = o) : o = f[15];
            let L = o;
            f[16] !== j || f[17] !== E || f[18] !== A || f[19] !== M ? (i = () => {
                null == A && null != M && E(j, {
                    replace: !0,
                    preventScrollReset: !0,
                    state: {
                        ...j.state,
                        chatGptSearchNavigation: void 0
                    }
                })
            }, f[16] = j, f[17] = E, f[18] = A, f[19] = M, f[20] = i) : i = f[20];
            let D = (0, m.useEffectEvent)(i);
            if (f[21] !== D || f[22] !== w || f[23] !== x || f[24] !== L ? (l = () => {
                    !G.current.positioned || null != L || x || w || D()
                }, f[21] = D, f[22] = w, f[23] = x, f[24] = L, f[25] = l) : l = f[25], f[26] !== w || f[27] !== x || f[28] !== L ? (c = [w, x, L], f[26] = w, f[27] = x, f[28] = L, f[29] = c) : c = f[29], (0, m.useLayoutEffect)(l, c), f[30] !== R || f[31] !== L?.id || f[32] !== L?.turn || f[33] !== L?.turn.items || f[34] !== L?.turn.items.findIndex || f[35] !== L?.turnKey) {
                let e = L?.turn.items.findIndex(e => "messageId" in e && e.messageId === R || "assistant-message" === e.type && null != R && e.sourceMessageIds?.includes(R)) ?? -1,
                    t = L?.turn.items[e],
                    n = L?.id;
                h = L?.turnKey, u = null == t || null == n ? void 0 : (0, rf.b)(t, e, n), f[30] = R, f[31] = L?.id, f[32] = L?.turn, f[33] = L?.turn.items, f[34] = L?.turn.items.findIndex, f[35] = L?.turnKey, f[36] = u, f[37] = h
            } else u = f[36], h = f[37];
            let H = u;
            return f[38] !== F || f[39] !== R || f[40] !== h || f[41] !== C || f[42] !== H ? (p = () => {
                let e;
                if (null == h || null == C) return;
                let t = new AbortController,
                    n = null;
                return C.scrollToKey(h, e => n = (null == R ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(R)}"]`)) ?? (null == H ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(H)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = F(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, f[38] = F, f[39] = R, f[40] = h, f[41] = C, f[42] = H, f[43] = p) : p = f[43], f[44] !== R || f[45] !== z || f[46] !== h || f[47] !== C || f[48] !== H ? (g = [z, R, h, C, H], f[44] = R, f[45] = z, f[46] = h, f[47] = C, f[48] = H, f[49] = g) : g = f[49], (0, m.useLayoutEffect)(p, g), null
        }
        var rA = n("ESlL"),
            rM = n("Ppno"),
            rR = n("lA5q"),
            rk = n("wDWo"),
            rO = n("IgxH"),
            rN = n("iaTG"),
            rB = n("c3f5"),
            rz = n("XpUB"),
            rG = n("xAIC"),
            rF = n("fNSv"),
            rL = n("Sd8U"),
            rD = n("XsXa");
        let rH = (0, d.t)("ChatGptTranscriptScope", {
                parent: rL.a,
                key: e => e.presentation
            }),
            rW = (0, d.j)(rH, e => (0, rD.a)());
        var rq = n("r2mP"),
            rU = n("jmBh"),
            rK = n("FGGA"),
            rV = n("puao"),
            rY = n("RADZ"),
            rQ = n("rZzh"),
            r$ = n("k4pC");

        function rX(e) {
            let t, n, s, o, i, l, c, u, h, p, g = (0, r.c)(64),
                {
                    activityDisclosures: m,
                    entry: f,
                    renderMcpApps: v,
                    threadTranscript: y,
                    trackShownImpressions: b
                } = e,
                x = void 0 === v || v,
                C = void 0 === b || b,
                _ = (0, d.y)(ej.a),
                w = (0, rU.a)(void 0 !== y && y);
            g[0] !== f.conversationId ? (t = (0, em.o)({
                routeKind: "chatgpt-thread",
                conversationId: f.conversationId
            }), g[0] = f.conversationId, g[1] = t) : t = g[1];
            let I = (0, d.x)(C ? ee.c : null, t),
                S = C && null == I,
                T = (0, d.x)(f.isMostRecentTurn ? rQ.e : null, f.conversationId);
            g[2] !== f.timestampSeparatorAtMs ? (n = null == f.timestampSeparatorAtMs ? null : (0, a.jsx)(rq.b, {
                sentAtMs: f.timestampSeparatorAtMs
            }), g[2] = f.timestampSeparatorAtMs, g[3] = n) : n = g[3];
            let j = f.isReadOnly ? void 0 : f.turnKey,
                E = null != f.paragen;
            g[4] !== m || g[5] !== w || g[6] !== f.branchingMessageId || g[7] !== f.browserConversationId || g[8] !== f.conversationId || g[9] !== f.dilEditDisclosure || g[10] !== f.enableCloudBrowserActivity || g[11] !== f.errorMessage || g[12] !== f.feedbackEnabled || g[13] !== f.hasLaterSitesPreview || g[14] !== f.id || g[15] !== f.isMostRecentTurn || g[16] !== f.isReadOnly || g[17] !== f.isTemporaryChat || g[18] !== f.isWorkConversation || g[19] !== f.onEditUserMessage || g[20] !== f.onFork || g[21] !== f.onRegenerateResponse || g[22] !== f.pendingSubmissionAttachments || g[23] !== f.readAloudEnabled || g[24] !== f.referenceImageSuggestionActionInput || g[25] !== f.safetyReview || g[26] !== f.shareEnabled || g[27] !== f.showPendingLoadingMessage || g[28] !== f.showRequestUserInputStatus || g[29] !== f.turn || g[30] !== x || g[31] !== S || g[32] !== j || g[33] !== E ? (s = (0, a.jsx)(rV.a, {
                activityDisclosureTurnKey: j,
                activityDisclosures: m,
                dilEditDisclosure: f.dilEditDisclosure,
                browserConversationId: f.browserConversationId,
                conversationId: f.conversationId,
                enableCloudBrowserActivity: f.enableCloudBrowserActivity,
                branchingMessageId: f.branchingMessageId,
                hasLaterSitesPreview: f.hasLaterSitesPreview,
                hostId: ef.a,
                isMostRecentTurn: f.isMostRecentTurn,
                threadTranscript: w,
                pendingLoading: f.showPendingLoadingMessage,
                allowAwaitingResponse: f.showRequestUserInputStatus,
                responseError: f.errorMessage,
                isReadOnly: f.isReadOnly,
                isTemporaryChat: f.isTemporaryChat,
                isParagen: E,
                isWorkConversation: f.isWorkConversation,
                readAloudEnabled: f.readAloudEnabled,
                renderMcpApps: x,
                feedbackEnabled: f.feedbackEnabled,
                onEditUserMessage: f.onEditUserMessage,
                onFork: f.onFork,
                onRegenerateResponse: f.onRegenerateResponse,
                pendingSubmissionAttachments: f.pendingSubmissionAttachments,
                referenceImageSuggestionActionInput: f.referenceImageSuggestionActionInput,
                shareEnabled: f.shareEnabled,
                safetyReview: f.safetyReview,
                trackShownImpressions: S,
                turn: f.turn,
                turnId: f.id
            }), g[4] = m, g[5] = w, g[6] = f.branchingMessageId, g[7] = f.browserConversationId, g[8] = f.conversationId, g[9] = f.dilEditDisclosure, g[10] = f.enableCloudBrowserActivity, g[11] = f.errorMessage, g[12] = f.feedbackEnabled, g[13] = f.hasLaterSitesPreview, g[14] = f.id, g[15] = f.isMostRecentTurn, g[16] = f.isReadOnly, g[17] = f.isTemporaryChat, g[18] = f.isWorkConversation, g[19] = f.onEditUserMessage, g[20] = f.onFork, g[21] = f.onRegenerateResponse, g[22] = f.pendingSubmissionAttachments, g[23] = f.readAloudEnabled, g[24] = f.referenceImageSuggestionActionInput, g[25] = f.safetyReview, g[26] = f.shareEnabled, g[27] = f.showPendingLoadingMessage, g[28] = f.showRequestUserInputStatus, g[29] = f.turn, g[30] = x, g[31] = S, g[32] = j, g[33] = E, g[34] = s) : s = g[34], g[35] !== f.conversationId || g[36] !== f.isTemporaryChat || g[37] !== f.isWorkConversation || g[38] !== f.paragen || g[39] !== x || g[40] !== S ? (o = null == f.paragen ? null : (0, a.jsx)(rY.a, {
                renderMcpApps: x,
                comparison: f.paragen,
                conversationId: f.conversationId,
                hostId: ef.a,
                isTemporaryChat: f.isTemporaryChat,
                isWorkConversation: f.isWorkConversation,
                trackTaskViews: S
            }, f.paragen.promptMessageId), g[35] = f.conversationId, g[36] = f.isTemporaryChat, g[37] = f.isWorkConversation, g[38] = f.paragen, g[39] = x, g[40] = S, g[41] = o) : o = g[41], g[42] !== f.showSharedConversationPrivateDisclaimer ? (i = f.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(U.a, {
                    className: "shrink-0",
                    legacyIcon: rK.a,
                    asset16: r$.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(eb.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you"
                })]
            }) : null, g[42] = f.showSharedConversationPrivateDisclaimer, g[43] = i) : i = g[43], g[44] !== w || g[45] !== f || g[46] !== T || g[47] !== _ || g[48] !== S ? (l = f.isMostRecentTurn ? (0, a.jsx)(rA.a, {
                conversationId: f.conversationId,
                errorMessage: f.errorMessage,
                isWorkConversation: f.isWorkConversation,
                onRetry: null == f.onRegenerateResponse || null == T ? void 0 : async e => {
                    let t = _.get(rQ.e, f.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = _.get(tm.V, f.conversationId)?.metadata?.errorCode;
                    (0, t4.d)(_.get(ec.c).logProductEvent, {
                        conversationId: _.get(tm.j, f.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await f.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, rQ.f)(t.message, _.get(tI.v, f.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                renderResponseStarting: !w,
                showPendingLoadingMessage: f.showPendingLoadingMessage,
                showRequestUserInputStatus: f.showRequestUserInputStatus,
                trackShownImpressions: S,
                useDefaultModel: T?.useDefaultModel,
                isRetryDisabled: T?.isRetryDisabled
            }) : null, g[44] = w, g[45] = f, g[46] = T, g[47] = _, g[48] = S, g[49] = l) : l = g[49], g[50] !== i || g[51] !== l || g[52] !== s || g[53] !== o ? (c = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [s, o, i, l]
            }), g[50] = i, g[51] = l, g[52] = s, g[53] = o, g[54] = c) : c = g[54], g[55] !== f.id || g[56] !== c || g[57] !== n ? (u = (0, a.jsxs)("div", {
                "data-content-search-turn-key": f.id,
                children: [n, c]
            }), g[55] = f.id, g[56] = c, g[57] = n, g[58] = u) : u = g[58];
            let P = u;
            return g[59] !== f.dilVisualSlotId ? (h = null != f.dilVisualSlotId && (0, a.jsx)("div", {
                "data-dil-anchor-spacer": "",
                "aria-hidden": "true"
            }), g[59] = f.dilVisualSlotId, g[60] = h) : h = g[60], g[61] !== P || g[62] !== h ? (p = (0, a.jsxs)(a.Fragment, {
                children: [h, P]
            }), g[61] = P, g[62] = h, g[63] = p) : p = g[63], p
        }

        function rJ(e) {
            let t, n, s, o, i = (0, r.c)(11);
            i[0] !== e ? ({
                renderMcpApps: n,
                ...t
            } = e, i[0] = e, i[1] = t, i[2] = n) : (t = i[1], n = i[2]);
            let l = void 0 === n || n,
                c = (0, d.y)(rH),
                u = "main" === c.value.presentation;
            i[3] !== t || i[4] !== c ? (s = c.value.preserveActivityDisclosures && !t.entry.isReadOnly ? c.get(rW, null) : void 0, i[3] = t, i[4] = c, i[5] = s) : s = i[5];
            let h = l && c.value.rendersWidgets;
            return i[6] !== t || i[7] !== u || i[8] !== s || i[9] !== h ? (o = (0, a.jsx)(rX, {
                ...t,
                threadTranscript: u,
                activityDisclosures: s,
                renderMcpApps: h
            }), i[6] = t, i[7] = u, i[8] = s, i[9] = h, i[10] = o) : o = i[10], o
        }

        function rZ(e) {
            let t, n, s, o, i, l, c, u = (0, r.c)(17),
                {
                    entries: h,
                    historyLoader: p,
                    isVisible: g,
                    rendersWidgets: f,
                    onVisibilityChange: v
                } = e;
            u[0] !== g || u[1] !== v ? (t = () => (v(g), () => v(!1)), n = [g, v], u[0] = g, u[1] = v, u[2] = t, u[3] = n) : (t = u[2], n = u[3]), (0, m.useLayoutEffect)(t, n), u[4] !== f ? (s = {
                presentation: "floating",
                rendersWidgets: f
            }, u[4] = f, u[5] = s) : s = u[5];
            let y = g ? p : null;
            return u[6] !== h ? (o = (0, a.jsx)(rF.b, {
                entries: h,
                preserveMeasuredTurnViewport: !0,
                RowComponent: r0
            }), u[6] = h, u[7] = o) : o = u[7], u[8] !== y || u[9] !== o ? (i = (0, a.jsx)(ni.a, {
                value: null,
                children: (0, a.jsxs)(aQ.a, {
                    value: null,
                    children: [y, o]
                })
            }), u[8] = y, u[9] = o, u[10] = i) : i = u[10], u[11] !== g || u[12] !== i ? (l = (0, a.jsx)(rh.a, {
                active: g,
                presentation: "panel",
                children: i
            }), u[11] = g, u[12] = i, u[13] = l) : l = u[13], u[14] !== s || u[15] !== l ? (c = (0, a.jsx)(d.b, {
                scope: rH,
                value: s,
                children: l
            }), u[14] = s, u[15] = l, u[16] = c) : c = u[16], c
        }

        function r0(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(rJ, {
                entry: {
                    ...s,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    readAloudEnabled: !1
                },
                trackShownImpressions: !1
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var r1 = n("RKko"),
            r2 = n("qZWE"),
            r3 = n("IBS2"),
            r4 = n("t9ay"),
            r5 = n("PC5z"),
            r6 = n("lZ4W"),
            r7 = n("ihvi"),
            r8 = n("jCHb"),
            r9 = n("nMdB"),
            se = n("KFm7"),
            st = n("uYx2"),
            sn = "pending-fxATqK";
        let sa = "[data-d-component]:not([data-d-text-flow])";
        class sr extends m.Component {
            static contextType = ad.a;
            held = null;
            presented = this.props;
            userMotion;
            revealMotion;
            revealed = !1;
            resumePlacement;
            stopLayoutCorrection;
            pendingVisual;
            textObserver;
            unsubscribe;
            clearPendingPulse() {
                this.pendingVisual?.classList.remove(sn), this.pendingVisual = void 0
            }
            releaseHold = () => {
                this.clearPendingPulse(), this.revealMotion?.stop(), this.revealMotion = void 0, this.held = null, this.textObserver?.disconnect(), this.textObserver = void 0, this.userMotion?.cancel(), this.userMotion = void 0, this.resumePlacement = void 0, this.stopLayoutCorrection?.(), this.stopLayoutCorrection = void 0
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
                let r = a.querySelector(sa) ?? a,
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
            revealRequest(e) {
                if (this.revealed || this.props.active || !this.props.replyPending) return;
                this.pendingVisual || (this.pendingVisual = e.element, this.pendingVisual.classList.add(sn));
                let t = this.requestingBubble(e);
                if (!t) return;
                let n = t.getBoundingClientRect();
                if (0 === n.height) return;
                this.revealed = !0;
                let a = e.scrollElement.getBoundingClientRect(),
                    r = a.bottom - (0, se.c)(e.scrollElement) * this.context,
                    s = Math.min(n.bottom - r, n.top - a.top);
                if (s < 1) return;
                let o = e.top - s;
                if (this.props.reducedMotion) {
                    e.top = o, this.restore(e);
                    return
                }
                this.stopLayoutCorrection?.(), this.stopLayoutCorrection = void 0, this.revealMotion = (0, r8.a)(e.top, o, {
                    duration: .2,
                    ease: "easeOut",
                    onUpdate: t => {
                        e.top = t, this.restore(e, !1)
                    }
                })
            }
            getSnapshotBeforeUpdate(e) {
                let t = e.visualId !== this.props.visualId,
                    n = !this.props.active && (this.props.hasStreamingFinalText || e.replyPending && !this.props.replyPending);
                if (t || n) {
                    let e = this.resumePlacement;
                    return this.releaseHold(), n || this.props.active && null != this.props.visualId ? e ?? null : null
                }
                return e.active && e.exchangeKey !== this.props.exchangeKey && (this.revealed = !1, this.stopLayoutCorrection?.(), this.userMotion?.cancel(), this.held = this.held ?? this.capture(), this.held || (this.resumePlacement = void 0)), this.held
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
                if ((e.streamingDilFinalId !== this.props.streamingDilFinalId || e.exchangeKey !== this.props.exchangeKey) && (this.textObserver?.disconnect(), this.textObserver = void 0), "function" == typeof n ? null != this.props.exchangeKey && n(this.props.exchangeKey) : (this.restore(n), n && this.revealRequest(n)), this.props.active || this.observeStreamingDilText(), this.props.active && e.visualOwnerId !== this.props.visualOwnerId && (this.revealMotion?.stop(), this.revealMotion = void 0, this.resumePlacement = void 0), this.held && this.shouldAnimateFold()) {
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
                this.presented = this.props, this.props.active && this.clearPendingPulse(), this.userMotion?.cancel(), this.userMotion = void 0
            }
            shouldAnimateFold() {
                return null != this.held && !this.props.reducedMotion && this.props.active && this.presented.visualId === this.props.visualId && this.presented.exchangeKey === this.props.exchangeKey && this.presented.visualOwnerId !== this.props.visualOwnerId
            }
            showAcceptedEdit = () => {
                this.presented = this.props, this.forceUpdate()
            };
            restoreAfterMeasurement = () => {
                this.restore(this.held), this.held && this.revealRequest(this.held)
            };
            restore(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (!e?.element.isConnected) return;
                let {
                    scrollController: n
                } = this.props;
                e.body.isConnected || (e.body = e.element.querySelector(sa) ?? e.element);
                let a = () => (0, ad.b)(e.body.getBoundingClientRect().top - e.top, this.context),
                    r = a();
                if (!(1 > Math.abs(r))) {
                    if (this.held) {
                        let t = e.element.closest("[data-turn-key]")?.querySelector("[data-dil-anchor-spacer]");
                        if (t) {
                            let n = parseFloat(t.style.height) || 0,
                                s = n + Math.max(0, -r - e.scrollElement.scrollTop) - Math.min(n, Math.max(0, r));
                            s !== n && (t.style.height = `${s}px`, r = a())
                        }
                    }
                    this.held && r > 0 && this.props.ensureScrollRoomForAnchor?.(r), n.holdViewport(), n.compensateScrollToDistanceFromBottomPx(Math.max(0, (0, st.b)(e.scrollElement) - r)), t && (this.stopLayoutCorrection?.(), this.stopLayoutCorrection = (0, r9.a)(e.body, this.context))
                }
            }
            render() {
                return this.shouldAnimateFold() ? this.presented.children : this.props.children
            }
        }
        var ss = n("aRto"),
            so = n("WWSI"),
            si = n("U3Gy"),
            sl = n("mKTJ");
        let sc = (0, d.c)(em.a, e => {
                let {
                    get: t
                } = e;
                return t(r2.m)
            }, {
                isEqual: tU()
            }),
            sd = (0, d.c)(em.a, e => {
                let {
                    get: t
                } = e;
                return t(r5.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function su(e) {
            let t, n, s, o, i, l, c, u, h, p, g = (0, r.c)(46),
                {
                    conversationId: f,
                    entries: y,
                    viewportRef: b,
                    isTurnActive: x,
                    isInlinePreview: C,
                    readingPosition: _,
                    onVisibleContentReady: w,
                    responseSpacerState: I
                } = e,
                S = (0, d.z)(_.restoreState$),
                {
                    sharedConversationId: T
                } = (0, v.cb)(),
                j = (0, d.z)(null != T && "u" > typeof Element && "function" != typeof Element.prototype.moveBefore ? sc : null),
                E = (0, d.z)(sd),
                P = (0, rm.b)(),
                A = (0, m.useContext)(r3.a);
            g[0] !== A || g[1] !== C || g[2] !== _ || g[3] !== P ? (t = () => {
                if (null != A && !C) return A(() => _.captureBeforeHide(P))
            }, n = [A, C, _, P], g[0] = A, g[1] = C, g[2] = _, g[3] = P, g[4] = t, g[5] = n) : (t = g[4], n = g[5]), (0, m.useLayoutEffect)(t, n), g[6] !== _ || g[7] !== P ? (s = () => _.restoreReadingPosition(P), g[6] = _, g[7] = P, g[8] = s) : s = g[8];
            let M = (0, eW.a)(s),
                [R, k] = (0, m.useState)(sg);
            g[9] !== b ? (o = (e, t) => {
                b.current?.releaseForHistoryToggle(), k(n => {
                    let a = new Map(n);
                    return a.get(e) === t ? a.delete(e) : a.set(e, t), a
                })
            }, g[9] = b, g[10] = o) : o = g[10];
            let O = function(e, t, n) {
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
                }(y, R, (0, eW.a)(o)),
                N = y.findLastIndex(sp),
                B = y[N]?.dilVisualSlotId,
                z = (0, rl.a)(null != B),
                G = y[N]?.turn.items[0],
                F = y.findLastIndex(sm),
                L = y[F],
                D = N > F;
            g[11] !== y ? (i = e => {
                let t = y.find(t => t.turn.items.some(t => "chatgpt-writing-block-patch" === t.type && t.messageId === e.messageId)),
                    n = t?.turnKey ?? y.find(t => {
                        let {
                            id: n
                        } = t;
                        return n === e.turnId
                    })?.turnKey;
                return null == n ? [] : [n]
            }, g[11] = y, g[12] = i) : i = g[12];
            let H = E.flatMap(i),
                W = (0, m.useContext)(ss.a),
                q = y.at(-1),
                U = x || q?.turn.status === "in_progress";
            if (W?.aboveComposer != null && null != q && H.push(q.turnKey), null != T && j?.size)
                for (let e of y) e.turn.items.flatMap(sh).some(e => "chatgpt-hosted-widget" === e.type && (0, sl.h)(e) && j.has((0, sl.e)(T, e.messageId))) && H.push(e.turnKey);
            let K = null == B ? void 0 : O.find(e => e.dilEditDisclosure?.slotId === B);
            K && H.push(K.turnKey, y[N].turnKey);
            let V = D ? K : void 0;
            null != L && (I?.voiceAutoScrollEnabled || !D && U) && H.push(L.turnKey);
            let Y = (0, d.x)(r7.b, f),
                Q = null == Y ? void 0 : y.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes(Y)
                }),
                $ = null == Q ? void 0 : (0, r7.a)(Q.turn.items);
            (0, d.x)(r6.a, null == $ ? null : {
                conversationId: f,
                userMessageId: $,
                steeredPromptId: Q === q ? Y : void 0
            }) && null != Q && H.push(Q.turnKey);
            let X = (0, d.x)(si.b, f);
            g[13] === Symbol.for("react.memo_cache_sentinel") ? (l = (e, t, n) => "adjacent-user-prompts" === (0, tM.d)(n[t - 1], e) ? {
                ...e,
                gapBeforePx: 4
            } : e, g[13] = l) : l = g[13];
            let J = (0, so.a)(O, X, f).map(l),
                Z = L?.turnKey,
                ee = G?.type === "assistant-message" ? G.messageId : void 0,
                et = I?.ensureScrollRoomForAnchor,
                en = q?.hasStreamingFinalText === !0,
                ea = q?.streamingDilFinalId,
                er = I?.getHeightPx,
                es = V?.turnKey,
                eo = V?.dilEditDisclosure?.count,
                ei = V?.turnKey ?? L?.turnKey;
            g[14] !== I || g[15] !== b ? (c = (e, t) => {
                I?.onTurnLayoutReady(e, t), b.current?.restoreAfterMeasurement()
            }, g[14] = I, g[15] = b, g[16] = c) : c = g[16], g[17] !== I ? (u = e => {
                let {
                    heightDeltaPx: t
                } = e;
                I?.consumeGrowth(t ?? 0)
            }, g[17] = I, g[18] = u) : u = g[18];
            let el = null == A || C ? void 0 : _.onRestoreStateChange;
            return g[19] !== S || g[20] !== w || g[21] !== _.onApiChange || g[22] !== M || g[23] !== H || g[24] !== er || g[25] !== es || g[26] !== eo || g[27] !== ei || g[28] !== c || g[29] !== u || g[30] !== el || g[31] !== J ? (h = (0, a.jsx)(r4.a, {
                mode: "virtualized",
                rows: J,
                ...r1.g,
                getBottomScrollPaddingPx: er,
                synchronousMeasurementTurnKey: es,
                latestTurnSynchronousMeasurementKey: eo,
                layoutReadyTurnKey: ei,
                onTurnLayoutReady: c,
                onLatestTurnHeightChange: u,
                initialRestoreState: S,
                onRestoreStateChange: el,
                onApiChange: _.onApiChange,
                restoreScrollDistanceFromBottomPx: M,
                onVisibleContentReady: w,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: H,
                renderRow: rJ
            }), g[19] = S, g[20] = w, g[21] = _.onApiChange, g[22] = M, g[23] = H, g[24] = er, g[25] = es, g[26] = eo, g[27] = ei, g[28] = c, g[29] = u, g[30] = el, g[31] = J, g[32] = h) : h = g[32], g[33] !== D || g[34] !== z || g[35] !== U || g[36] !== P || g[37] !== et || g[38] !== en || g[39] !== ea || g[40] !== h || g[41] !== Z || g[42] !== ee || g[43] !== b || g[44] !== B ? (p = (0, a.jsx)(sr, {
                ref: b,
                exchangeKey: Z,
                visualId: B,
                visualOwnerId: ee,
                active: D,
                ensureScrollRoomForAnchor: et,
                hasStreamingFinalText: en,
                streamingDilFinalId: ea,
                replyPending: U,
                reducedMotion: z,
                scrollController: P,
                children: h
            }), g[33] = D, g[34] = z, g[35] = U, g[36] = P, g[37] = et, g[38] = en, g[39] = ea, g[40] = h, g[41] = Z, g[42] = ee, g[43] = b, g[44] = B, g[45] = p) : p = g[45], p
        }

        function sh(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function sp(e) {
            return null != e.dilVisualSlotId
        }

        function sg() {
            return new Map
        }

        function sm(e) {
            return e.turn.items.some(e => "user-message" === e.type)
        }
        var sf = n("Ipgw"),
            sv = n("SBcL");

        function sy(e) {
            let t, n, s, o, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, d.y)(ej.a),
                u = (0, f.a)(),
                h = (0, eD.a)(),
                p = (0, d.x)(tm.ab, l),
                g = (0, d.x)(tm.db, l),
                v = (0, d.x)(tm.w, l),
                y = (0, d.x)(tm.cb, l),
                b = (0, m.useRef)(null),
                x = (0, m.useRef)(null);
            i[0] !== v || i[1] !== l || i[2] !== u || i[3] !== g || i[4] !== c || i[5] !== p || i[6] !== y ? (t = () => {
                let e = b.current;
                if (null == e) return;
                let t = x.current;
                if ((0, tm.Bb)(p)) {
                    e.textContent = "", x.current = {
                        conversationId: l,
                        requestId: g ?? ("active-async-turn" === p || "active-tpp-turn" === p ? v?.requestId : null) ?? (t?.conversationId === l ? t.requestId : null)
                    };
                    return
                }
                y || (x.current = null, t?.conversationId === l && "idle" === p && v?.result === "completed" && v.requestId === t.requestId && null == c.get(tm.D, l) && (e.textContent = u.formatMessage({
                    id: "chatgptConversations.responseComplete",
                    defaultMessage: "Response complete"
                })))
            }, i[0] = v, i[1] = l, i[2] = u, i[3] = g, i[4] = c, i[5] = p, i[6] = y, i[7] = t) : t = i[7];
            let C = (0, m.useEffectEvent)(t);
            return (i[8] !== C ? (n = () => {
                C()
            }, i[8] = C, i[9] = n) : n = i[9], i[10] !== v || i[11] !== l || i[12] !== h || i[13] !== g || i[14] !== p || i[15] !== y ? (s = [l, p, g, v, y, h], i[10] = v, i[11] = l, i[12] = h, i[13] = g, i[14] = p, i[15] = y, i[16] = s) : s = i[16], (0, m.useEffect)(n, s), h) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, ac.createPortal)((0, a.jsx)("span", {
                ref: b,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = o) : o = i[17], o) : null
        }
        var sb = n("JlMc"),
            sx = n("TUMj"),
            sC = n("pgeU");
        let s_ = (0, tz.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function sw(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, d.y)(ej.a),
                c = (0, d.x)(sC.a, i);
            return o[0] !== i || o[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(sC.a, i);
                        null != e && (0, sC.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], o[0] = i, o[1] = l, o[2] = t, o[3] = n) : (t = o[2], n = o[3]), (0, m.useEffect)(t, n), o[4] !== i || o[5] !== c ? (s = null == c ? null : (0, a.jsx)(s_, {
                conversationId: i,
                effect: c
            }, c.id), o[4] = i, o[5] = c, o[6] = s) : s = o[6], s
        }
        var sI = n("Pyg2"),
            sS = n("ZIh4"),
            sT = n("nKJ6"),
            sj = n("AoaR"),
            sE = n("fDfx"),
            sP = n("Xslx"),
            sA = n("EEop"),
            sM = n("bxvp"),
            sR = n("VBQS"),
            sk = n("hsIu");
        let sO = (0, d.d)(ej.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(sM.c) || null == n(T.f) || null == n(T.k)) return null;
            let {
                data: a,
                isError: r
            } = n(sk.b);
            if (r || a?.project_id !== e) return null;
            let {
                data: s,
                isError: o
            } = n(sA.l, (0, sR.a)());
            return o ? null : (0, sR.b)(s)
        });
        var sN = n("FmJi"),
            sB = n("sIex"),
            sz = n("Z2JT"),
            sG = n("Fjd0"),
            sF = n("VPBa"),
            sL = n("PWXi"),
            sD = n("HgLj"),
            sH = n("hNLE"),
            sW = n("f6KK"),
            sq = n("JPXZ"),
            sU = n("zWHk");

        function sK(e) {
            let t, n, a, s, o, i, l, c = (0, r.c)(34),
                {
                    composerController: d,
                    enabled: u
                } = e,
                h = (0, v.Y)(),
                p = (0, v._)();
            if (c[0] !== h.search) {
                let e = new URLSearchParams(h.search);
                t = e.get("prompt"), n = e.get("promptSource"), c[0] = h.search, c[1] = t, c[2] = n
            } else t = c[1], n = c[2];
            let g = n,
                f = h.key,
                y = (0, m.useRef)(null);
            c[3] !== h.hash || c[4] !== h.pathname || c[5] !== h.search || c[6] !== h.state || c[7] !== f || c[8] !== p ? (a = e => {
                let t = new URLSearchParams(h.search);
                t.delete("prompt"), t.delete("promptSource"), p({
                    pathname: h.pathname,
                    search: t.toString(),
                    hash: h.hash
                }, {
                    replace: !0,
                    state: {
                        ...h.state,
                        consumedUrlPromptKey: f,
                        ...e && "widget" === t.get("site_edit_source") ? {
                            siteEditSource: "widget"
                        } : void 0
                    }
                })
            }, c[3] = h.hash, c[4] = h.pathname, c[5] = h.search, c[6] = h.state, c[7] = f, c[8] = p, c[9] = a) : a = c[9];
            let b = (0, m.useEffectEvent)(a);
            return c[10] !== b || c[11] !== d || c[12] !== u || c[13] !== f || c[14] !== t ? (s = () => {
                if (!u && t && y.current !== f) return (0, sU.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(f) && b(!1)
                })
            }, c[10] = b, c[11] = d, c[12] = u, c[13] = f, c[14] = t, c[15] = s) : s = c[15], c[16] !== d || c[17] !== u || c[18] !== f || c[19] !== t ? (o = [d, u, f, t], c[16] = d, c[17] = u, c[18] = f, c[19] = t, c[20] = o) : o = c[20], (0, m.useLayoutEffect)(s, o), c[21] !== b || c[22] !== d || c[23] !== u || c[24] !== f || c[25] !== t || c[26] !== g ? (i = () => {
                if (!u || !t || y.current === f) return;
                y.current = f;
                let e = d.consumeLocationPromptPrefill(f);
                if (b(e), !e) return;
                let {
                    view: n
                } = d, a = t.replace(/\r\n/g, "\n"), r = "codex-app" === g ? (0, sq.f)({
                    schema: n.state.schema,
                    text: a,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, sq.e)({
                    schema: n.state.schema,
                    text: a
                }), s = n.state.tr.replaceWith(0, n.state.doc.content.size, r.content);
                s.setSelection(sW.h.atEnd(s.doc)), n.dispatch(s)
            }, c[21] = b, c[22] = d, c[23] = u, c[24] = f, c[25] = t, c[26] = g, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== f || c[31] !== t || c[32] !== g ? (l = [d, u, f, t, g], c[28] = d, c[29] = u, c[30] = f, c[31] = t, c[32] = g, c[33] = l) : l = c[33], (0, m.useLayoutEffect)(i, l), null
        }
        var sV = n("a4V1"),
            sY = n("KidQ");
        let sQ = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function s$(e) {
            let t, n, s, o, i, l = (0, r.c)(15),
                {
                    children: c,
                    draftKey: u,
                    enableInlineSystemHints: h
                } = e,
                p = (0, d.y)(ej.a),
                g = (0, m.useContext)(sB.a),
                f = h ? "chatgpt" : void 0;
            return l[0] !== h || l[1] !== f ? (t = {
                enableInlineSystemHints: h,
                variant: f
            }, l[0] = h, l[1] = f, l[2] = t) : t = l[2], l[3] !== u || l[4] !== p ? (n = () => ({
                defaultText: p.get(tI.u, u),
                defaultTextKind: "prompt"
            }), l[3] = u, l[4] = p, l[5] = n) : n = l[5], l[6] !== g ? (s = () => {
                let e = g?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == g ? null : {
                    element: e,
                    locationKey: g.locationKey
                }
            }, l[6] = g, l[7] = s) : s = l[7], l[8] !== c ? (o = e => null == e ? null : c(e), l[8] = c, l[9] = o) : o = l[9], l[10] !== t || l[11] !== n || l[12] !== s || l[13] !== o ? (i = (0, a.jsx)(sY.a, {
                controllerOptions: sQ,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: s,
                children: o
            }), l[10] = t, l[11] = n, l[12] = s, l[13] = o, l[14] = i) : i = l[14], i
        }
        var sX = n("wnpN"),
            sJ = n("rcFj"),
            sZ = n("vpdG"),
            s0 = n("V8xe");

        function s1(e) {
            let t, n, s, o = (0, r.c)(11),
                i = (0, m.useContext)(sB.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return o[0] !== e ? (t = (0, a.jsx)(s2, {
                    ...e
                }), o[0] = e, o[1] = t) : t = o[1], t
            }
            o[2] !== e.conversationId || o[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, o[2] = e.conversationId, o[3] = e.isImageEditComposer, o[4] = t) : t = o[4];
            let l = !e.isWorkConversation;
            return o[5] !== e ? (n = t => (0, a.jsx)(s2, {
                ...e,
                initialController: t
            }), o[5] = e, o[6] = n) : n = o[6], o[7] !== t || o[8] !== l || o[9] !== n ? (s = (0, a.jsx)(s$, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), o[7] = t, o[8] = l, o[9] = n, o[10] = s) : s = o[10], s
        }

        function s2(e) {
            let t, n, s, o, i, l, c, u, h, p, g, y, b, x, C, _, w, I, S, T = (0, r.c)(85),
                {
                    composerRef: j,
                    initialController: E,
                    ...P
                } = e,
                A = (0, d.y)(eg.a),
                M = (0, m.useContext)(rm.a),
                R = (0, d.x)(sS.d, P.isTemporaryChat),
                {
                    conversationId: k,
                    isFullscreenComposer: O
                } = P,
                N = (0, f.a)(),
                {
                    state: B
                } = (0, v.Y)(),
                z = (0, d.x)(tT, k),
                G = (0, d.x)(tm.T, k),
                F = !(!P.disabled && !P.isSharedConversation && !P.isWorkConversation && !P.isTemporaryChat && !P.isImageEditComposer && (0, t8.a)(G)) ? null : G,
                L = (0, d.x)(null == P.requiredSystemHints ? sO : null, F);
            T[0] !== L || T[1] !== P.requiredSystemHints ? (t = P.requiredSystemHints ?? (null == L ? void 0 : [L]), T[0] = L, T[1] = P.requiredSystemHints, T[2] = t) : t = T[2];
            let D = t;
            T[3] !== L || T[4] !== k || T[5] !== A ? (n = () => {
                if (null != L) {
                    let e, t;
                    return e = (0, sP.b)(A, k, [L]), t = (0, sE.i)(A, {
                        draftKey: k,
                        isTemporaryChat: !1
                    }), () => {
                        if (e(), A.get(sP.a, k).includes(L)) return;
                        let n = A.get(tI.x, k).filter(e => e !== L && e !== `plugin:${sj.d}`);
                        (0, tI.Z)(A, k, n, t)
                    }
                }
            }, s = [A, k, L], T[3] = L, T[4] = k, T[5] = A, T[6] = n, T[7] = s) : (n = T[6], s = T[7]), (0, m.useEffect)(n, s);
            let H = (0, d.x)(eJ.c, k);
            T[8] !== H || T[9] !== P.isSharedConversation || T[10] !== P.isWorkConversation || T[11] !== G ? (o = !P.isSharedConversation && !P.isWorkConversation && !(0, t8.a)(G) && !H, T[8] = H, T[9] = P.isSharedConversation, T[10] = P.isWorkConversation, T[11] = G, T[12] = o) : o = T[12];
            let W = o,
                q = W && !P.disabled && !P.isSubmitDisabled && !P.isImageEditComposer,
                U = W ? z : void 0;
            T[13] !== k || T[14] !== P.isImageEditComposer ? (i = P.isImageEditComposer ? {
                conversationId: k,
                surface: "image-edit"
            } : k, T[13] = k, T[14] = P.isImageEditComposer, T[15] = i) : i = T[15];
            let K = i;
            T[16] !== k || T[17] !== K || T[18] !== E ? (l = {
                composerController: E,
                conversationId: k,
                draftKey: K
            }, T[16] = k, T[17] = K, T[18] = E, T[19] = l) : l = T[19];
            let V = (0, sZ.a)(l),
                Y = (0, sJ.a)(V, k, !P.isInlinePreview && !P.disabled, P.workspace && "tpp", U?.id ?? G),
                Q = (0, m.useContext)(sB.a),
                $ = (0, m.useRef)(!1);
            T[20] !== K || T[21] !== Q || T[22] !== E || T[23] !== P.isTemporaryChat || T[24] !== A ? (c = e => {
                null == e || null == E || $.current || ($.current = !0, (0, tI._)(A, K, E.getPersistedText(), {
                    isTemporaryChat: P.isTemporaryChat
                }), Q?.onAdopt())
            }, T[20] = K, T[21] = Q, T[22] = E, T[23] = P.isTemporaryChat, T[24] = A, T[25] = c) : c = T[25];
            let X = (0, eW.a)(c);
            T[26] !== X || T[27] !== j ? (u = (0, sD.a)(j, X), T[26] = X, T[27] = j, T[28] = u) : u = T[28];
            let J = u,
                Z = (0, m.useContext)(sx.a),
                ee = (0, d.w)(sV.b, k),
                et = (0, d.x)(tm.eb, k),
                en = (0, d.x)(tm.ab, k),
                ea = (0, d.x)(tI.j, k);
            T[29] !== en ? (h = (0, tm.Bb)(en), T[29] = en, T[30] = h) : h = T[30];
            let er = h,
                es = (0, d.z)(e3.l.activeTab$);
            if (T[31] !== es || T[32] !== O || T[33] !== er || T[34] !== Z) {
                let e = Z?.turn.items.flatMap(s6);
                p = O && es?.tabType.kind === sF.a && "generatedImages" in es.props && null != es.props.generatedImages && !er && null != Z && "in_progress" !== Z.turn.status && !Z.turn.hasPendingAssistantReply && !Z.showPendingLoadingMessage && !e?.some(s5) && (null != Z.errorMessage || e?.some(s4)) ? Z.turn.messageIds.at(-1) ?? Z.turnKey : null, T[31] = es, T[32] = O, T[33] = er, T[34] = Z, T[35] = p
            } else p = T[35];
            let eo = p,
                ei = (0, m.useRef)(null);
            T[36] !== eo || T[37] !== A ? (g = () => {
                null != eo && eo !== ei.current && (ei.current = eo, A.set(sz.a, "expanded"))
            }, y = [eo, A], T[36] = eo, T[37] = A, T[38] = g, T[39] = y) : (g = T[38], y = T[39]), (0, m.useEffect)(g, y);
            let el = (0, d.w)(sX.a, O ? k : null);
            T[40] !== L || T[41] !== F || T[42] !== V || T[43] !== k || T[44] !== q || T[45] !== K || T[46] !== Y || T[47] !== N || T[48] !== O || T[49] !== J || T[50] !== R || T[51] !== P || T[52] !== D || T[53] !== A || T[54] !== M || T[55] !== U || T[56] !== B?.libraryFileCreation || T[57] !== G ? (b = e => (0, a.jsxs)(sG.a, {
                children: [O && P.trackReadState && !e?.isHidden ? (0, a.jsx)(sb.a, {
                    conversationId: k,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, P.aboveComposerContent, (0, a.jsx)(sN.a, {
                    children: (0, a.jsx)(sH.a, {
                        ref: J,
                        trackShownImpressions: P.trackShownImpressions && !P.isHidden && !e?.isHidden && !e?.isMinimized,
                        headerContent: P.headerContent,
                        legacyImageSuggestionsEnabled: !P.disabled && !P.isSharedConversation && !P.isImageEditComposer,
                        allowBackgroundSubmit: P.isInlinePreview,
                        ...Y,
                        disableAutoFocus: P.disableAutoFocus,
                        conversationOrigin: null == P.workspace ? void 0 : "tpp",
                        mcpAppContext: P.workspace?.mcpAppContext,
                        onServerThreadIdChange: P.workspace?.onServerThreadIdChange,
                        followupPortalTarget: P.followupPortalTarget,
                        takeoverDisclaimerRef: P.takeoverDisclaimerRef,
                        showConversationFollowups: P.showConversationFollowups,
                        autoPrepare: !P.isSubmitDisabled && !P.isSharedConversation,
                        browserConversationId: (0, sT.getThreadBrowserConversationId)(A) ?? k,
                        composerController: V,
                        conversationId: k,
                        requiredSystemHints: D,
                        hideSystemHints: null != P.requiredSystemHints,
                        getSubmissionGuard: null != L ? () => () => A.get(tm.T, k) === G && A.get(sO, F) === L : void 0,
                        draftKey: K,
                        onPromptChange: R,
                        selectedCustomGpt: U,
                        targetGizmoId: U?.id,
                        onCustomGptChange: q ? e => {
                            A.set(tT, k, e)
                        } : void 0,
                        onCustomAgentSelected: q ? () => {
                            A.set(tT, k, null)
                        } : void 0,
                        disableDraftPrepare: P.isSubmitDisabled || P.isSharedConversation,
                        disableSubmit: P.disabled || P.isSubmitDisabled,
                        voiceInputDisabled: P.disabled,
                        aboveComposerHeaderContent: P.voiceDisclaimer,
                        getExtraDeveloperInstructions: !P.isInlinePreview && B?.libraryFileCreation && !P.isTemporaryChat ? s3 : void 0,
                        isTemporaryChat: P.isTemporaryChat,
                        placeholder: P.disabled && !1 !== P.readOnlyPlaceholder ? P.readOnlyPlaceholder ?? N.formatMessage(s0.a.readOnlyConversationPlaceholder) : void 0,
                        readOnly: P.disabled,
                        hideModelPicker: P.hideModelPicker,
                        ...(0, tI.M)(P),
                        showVoiceStage: P.showVoiceStage,
                        onSubmitAccepted: (t, n) => {
                            e?.onSubmitStart(), (!(!P.isWorkConversation && n?.isSteer === !0) || M?.shouldFollowContentGrowth()) && P.responseSpacerState?.place(), P.onSubmitAccepted?.(t)
                        },
                        onSubmitError: P.responseSpacerState?.clear
                    })
                })]
            }), T[40] = L, T[41] = F, T[42] = V, T[43] = k, T[44] = q, T[45] = K, T[46] = Y, T[47] = N, T[48] = O, T[49] = J, T[50] = R, T[51] = P, T[52] = D, T[53] = A, T[54] = M, T[55] = U, T[56] = B?.libraryFileCreation, T[57] = G, T[58] = b) : b = T[58];
            let ec = b;
            T[59] !== A ? (x = () => {
                (0, rs.K)(A, "conversation")
            }, C = () => {
                (0, rs.K)(A, "conversation")
            }, T[59] = A, T[60] = x, T[61] = C) : (x = T[60], C = T[61]);
            let ed = !P.isInlinePreview && !P.disabled && !P.isSubmitDisabled;
            T[62] !== V || T[63] !== ed ? (_ = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(sK, {
                    composerController: V,
                    enabled: ed
                })
            }), T[62] = V, T[63] = ed, T[64] = _) : _ = T[64];
            let eu = O ? "floating" : "pane",
                eh = P.disabled || P.awaitingGptContinuation,
                ep = null == Z && !er,
                em = !P.isInlinePreview && null == P.workspace,
                ef = ea || er ? "loading" : "idle";
            return T[65] !== ef ? (w = {
                type: ef,
                unread: !1
            }, T[65] = ef, T[66] = w) : w = T[66], T[67] !== el || T[68] !== P.isHidden || T[69] !== P.renderTranscript || T[70] !== ec || T[71] !== ee || T[72] !== eu || T[73] !== eh || T[74] !== ep || T[75] !== em || T[76] !== w || T[77] !== et ? (I = (0, a.jsx)(sI.a, {
                notifications: el,
                isHidden: P.isHidden,
                placement: eu,
                responsePreview: ee,
                forceExpanded: eh,
                composerOnly: ep,
                title: et,
                showConversationTitleMenu: em,
                statusState: w,
                renderTranscript: P.renderTranscript,
                children: ec
            }), T[67] = el, T[68] = P.isHidden, T[69] = P.renderTranscript, T[70] = ec, T[71] = ee, T[72] = eu, T[73] = eh, T[74] = ep, T[75] = em, T[76] = w, T[77] = et, T[78] = I) : I = T[78], T[79] !== k || T[80] !== x || T[81] !== C || T[82] !== _ || T[83] !== I ? (S = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": k,
                onMouseDownCapture: x,
                onFocusCapture: C,
                children: [_, I]
            }), T[79] = k, T[80] = x, T[81] = C, T[82] = _, T[83] = I, T[84] = S) : S = T[84], S
        }

        function s3() {
            return [sL.a]
        }

        function s4(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function s5(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function s6(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var s7 = n("ygKd"),
            s8 = n("KSir"),
            s9 = n("QPeR"),
            oe = n("M3Kf");

        function ot(e) {
            let t, n, s, o, l, c, u = (0, r.c)(21),
                {
                    conversationId: h
                } = e,
                p = (0, d.y)(ej.a),
                g = (0, d.x)(tm.j, h),
                m = (0, d.z)(aY.b),
                {
                    search: f
                } = (0, v.Y)();
            if (u[0] !== f) {
                let e = new URLSearchParams(f);
                t = e.get("messageId") ?? e.get("message"), n = e.has("selectedTextQuery"), u[0] = f, u[1] = t, u[2] = n
            } else t = u[1], n = u[2];
            let y = n;
            u[3] !== y || u[4] !== t || u[5] !== g ? (s = ["chatgpt-message-target", g, t, y], u[3] = y, u[4] = t, u[5] = g, u[6] = s) : s = u[6];
            let b = null != g && null != t && m > 0,
                x = y ? 0 : 1 / 0;
            u[7] !== h || u[8] !== y || u[9] !== t || u[10] !== p || u[11] !== g ? (o = async e => {
                let {
                    signal: n
                } = e;
                if (null != g) {
                    if (null != t && y) {
                        let e = p.get(tm.N, h),
                            n = e?.[t] ?? (null == e ? void 0 : Object.values(e).find(e => e.message?.id === t));
                        if (n?.message != null) return !0
                    }
                    await (0, aV.a)(p, g, n)
                }
                return !0
            }, u[7] = h, u[8] = y, u[9] = t, u[10] = p, u[11] = g, u[12] = o) : o = u[12], u[13] !== s || u[14] !== b || u[15] !== x || u[16] !== o ? (l = {
                queryKey: s,
                enabled: b,
                staleTime: x,
                retry: !1,
                queryFn: o
            }, u[13] = s, u[14] = b, u[15] = x, u[16] = o, u[17] = l) : l = u[17];
            let {
                isError: C,
                refetch: _
            } = (0, i.a)(l);
            return u[18] !== C || u[19] !== _ ? (c = C ? (0, a.jsx)(tN.a, {
                color: "secondary",
                onClick: () => void _(),
                children: (0, a.jsx)(eb.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message"
                })
            }) : null, u[18] = C, u[19] = _, u[20] = c) : c = u[20], c
        }
        var on = n("TmaW"),
            oa = n("K45w"),
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
            od = (0, d.d)(ej.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(tm.N, n)?.[a]?.message ?? null
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
            let t, s, o, i, l, c, u, h = (0, r.c)(30),
                {
                    conversationId: p,
                    moreDetailsEnabled: g,
                    onAddSelectedText: m,
                    selection: v
                } = e,
                y = (0, d.y)(eg.a),
                b = (0, f.a)(),
                x = (0, eO.f)("4290238484"),
                C = (0, eO.f)("473637331"),
                _ = (0, d.z)(ol.b),
                w = (0, d.x)(tm.y, p);
            h[0] !== w || h[1] !== _ || h[2] !== y ? (t = _ && "tpp" === w && "chatgpt-thread" === y.value.routeKind && null == y.value.workSideChat && !0, h[0] = w, h[1] = _, h[2] = y, h[3] = t) : t = h[3];
            let I = t;
            h[4] !== p || h[5] !== v.selectionRange ? (s = function(e) {
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
                conversationId: p,
                range: v.selectionRange
            }), h[4] = p, h[5] = v.selectionRange, h[6] = s) : s = h[6];
            let S = s,
                T = S?.messageId ?? null;
            h[7] !== p || h[8] !== T ? (o = {
                conversationId: p,
                messageId: T
            }, h[7] = p, h[8] = T, h[9] = o) : o = h[9];
            let j = (0, d.x)(od, o),
                E = (0, d.x)(tm.j, p),
                P = x && g && null != E && null != S && j?.author.role === "assistant";
            return h[10] !== I || h[11] !== y ? (i = I ? e => {
                n.e(748843).then(n.bind(n, "f8of")).then(t => {
                    let {
                        createAndOpenWorkSideChat: n
                    } = t;
                    return n(y, {
                        target: "right",
                        selectedText: e
                    })
                })
            } : void 0, h[10] = I, h[11] = y, h[12] = i) : i = h[12], h[13] !== P || h[14] !== C || h[15] !== m || h[16] !== v.selectionRange || h[17] !== S ? (l = !P || C ? e => {
                m(e, S?.messageId, null == S ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of rT(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(S.markdownElement, v.selectionRange, e))
            } : void 0, h[13] = P, h[14] = C, h[15] = m, h[16] = v.selectionRange, h[17] = S, h[18] = l) : l = h[18], h[19] !== P || h[20] !== p || h[21] !== b || h[22] !== y || h[23] !== S ? (c = P ? e => {
                Promise.all([n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(882456), n.e(736970), n.e(81461), n.e(259288), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(16212), n.e(46150), n.e(722053), n.e(995430), n.e(178552)]).then(n.bind(n, "tZxZ")).then(t => {
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
                            defaultMessage: "More details"
                        }),
                        shouldBlockExternalEgress: y.get(tf.e, p),
                        sourceConversationId: p
                    })
                })
            } : void 0, h[19] = P, h[20] = p, h[21] = b, h[22] = y, h[23] = S, h[24] = c) : c = h[24], h[25] !== v.selectedText || h[26] !== i || h[27] !== l || h[28] !== c ? (u = (0, a.jsx)(oi.a, {
                conversationTerminology: "chat",
                selectedText: v.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), h[25] = v.selectedText, h[26] = i, h[27] = l, h[28] = c, h[29] = u) : u = h[29], u
        }
        var op = n("SEBt"),
            og = n("JUxu");
        let om = (0, m.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function of(e) {
            let t, n, s, o, i = (0, r.c)(11),
                {
                    sharedConversationId: l
                } = e,
                c = (0, d.y)(ej.a),
                u = (0, d.x)(aG.f, (0, m.useContext)(S.a));
            if (null != u) {
                let e, t;
                return i[0] !== u ? (e = (0, aG.b)(u), i[0] = u, i[1] = e) : e = i[1], i[2] !== e ? (t = (0, a.jsx)(og.a, {
                    imageOnly: e
                }), i[2] = e, i[3] = t) : t = i[3], t
            }
            return i[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("div", {
                className: "text-secondary",
                children: (0, a.jsx)(eb.a, {
                    id: "chatgptConversations.sharedConversation.copyDisclaimer",
                    defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory."
                })
            }), i[4] = t) : t = i[4], i[5] !== c || i[6] !== l ? (n = e => {
                if (null == l) return;
                let t = e.currentTarget;
                (0, nE.f)(c, om, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, op.d)(c, l)
            }, i[5] = c, i[6] = l, i[7] = n) : n = i[7], i[8] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation"
            }), i[8] = s) : s = i[8], i[9] !== n ? (o = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(tN.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: s
                })]
            }), i[9] = n, i[10] = o) : o = i[10], o
        }
        var ov = n("AORd"),
            oy = n("cP1f");

        function ob(e) {
            let {
                turn: t
            } = e;
            return t.items.some(ox)
        }

        function ox(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function oC(e) {
            let t, n, o, i, l, c, u, h, p, g, f, v, y, b, x, C, _, w, I, T, j, E, P, M, R, k, O, N, B, z, G, F, L, D, H = (0, r.c)(232),
                {
                    ref: W,
                    printTitle: q,
                    trackReadState: U,
                    trackShownImpressions: K,
                    composerRef: V,
                    workspace: Y,
                    shouldBlockMcpApps: Q,
                    contentX: $,
                    conversationId: X,
                    sectionIndex: J,
                    composerConversationId: Z,
                    composerLeadingContent: ee,
                    aboveComposerContent: et,
                    historyLoadingContent: en,
                    requiredSystemHints: ea,
                    isCoveredByFloatingPanel: er,
                    isFormOnly: es,
                    isInlinePreview: eo,
                    hideModelPicker: ei,
                    showFilePicker: el,
                    disableAutoFocus: ec,
                    transcriptPresentation: ed,
                    scrollOrigin: eu,
                    isChatConversation: eh,
                    customGptId: em,
                    conversationLoadingLabel: ef,
                    entries: ev,
                    errorMessage: ey,
                    hasLoadError: ex,
                    onRetryLoad: eC,
                    hasRenderableTurns: e_,
                    isComposerDisabled: ew,
                    readOnlyPlaceholder: eI,
                    moreDetailsEnabled: eS,
                    isConversationEmpty: eT,
                    showEmptyState: eE,
                    isConversationFetching: eP,
                    isConversationLoading: eA,
                    isSharedConversation: eM,
                    isSubmitDisabled: eR,
                    retainLiveModelPicker: ek,
                    isTemporaryChat: eO,
                    isTurnActive: eN,
                    isWorkConversation: eB,
                    onboardingPrelude: eG,
                    scrollStateConversationId: eF,
                    initialResponsePlacementKey: eL,
                    sharedConversationId: eD,
                    sharedPostRegulatedConnectorKind: eH,
                    showComposer: eU,
                    archivedPreviewFooter: eK,
                    showPendingLoadingMessage: eV,
                    gptPluginMigrationBanner: eY,
                    awaitingGptContinuation: eQ,
                    workOnlyConversionBanner: e$,
                    onAddSelectedText: eX,
                    onSubmitAccepted: eJ
                } = e,
                eZ = void 0 === eE || eE,
                e0 = (0, d.y)(ej.a),
                e1 = (0, d.y)(eg.a),
                e2 = (0, d.z)(null),
                e3 = (0, d.x)(aG.f, (0, m.useContext)(S.a)),
                e4 = (0, d.z)(ep.a),
                e5 = (0, d.x)(eq.a, X),
                e6 = Y?.fullscreenContent != null ? "content" : "workspace",
                e7 = (0, A.a)(eo ? "embedded" : e6),
                e8 = (0, d.z)(s9.a),
                e9 = eU && e8?.source.turnContext.conversationId !== Z,
                te = "floating" === e7.placement,
                [tt, tn] = (0, m.useState)(!1),
                ta = tt && !e7.isHidden && !es,
                tr = Y?.fullscreenContent != null || te && ta ? "floating" : "main",
                ts = (0, d.z)(s7.h),
                to = eh && null == eD && null == e3 && null == eK,
                ti = K && !er,
                tl = !eA && !eN && !ex && eT && !e_,
                tc = !eo && "chatgpt-thread" === e1.value.routeKind && e1.value.workSideChat?.conversationId !== X,
                td = (0, d.x)(tm.i, X),
                tu = eZ && to && tl && null == td && !e5 && !te,
                th = null == em ? "centered-home" : "home",
                tp = eZ && !e5 && (!to || !eT),
                tg = (0, m.useRef)(null),
                tf = (0, m.useRef)(null),
                [tv, ty] = (0, m.useState)(null),
                tb = (0, ad.c)(),
                tx = eo ? null : eF;
            H[0] !== tx || H[1] !== tv || H[2] !== tb ? (t = () => ({
                conversationKey: tx,
                responseSpacer: tv,
                windowZoom: tb
            }), H[0] = tx, H[1] = tv, H[2] = tb, H[3] = t) : t = H[3];
            let tC = (0, eW.a)(t);
            H[4] !== e0 || H[5] !== tx || H[6] !== tC ? (n = () => (function(e, t, n) {
                let a = (0, d.u)(ej.a, null == t ? 0 : e.get(sv.a, t)),
                    r = (0, d.u)(ej.a, () => null),
                    s = (0, d.u)(ej.a, () => null),
                    o = null,
                    i = null;

                function l(e) {
                    null != i && (null == e || e()) && (i = null)
                }
                return {
                    initialOffset$: a,
                    api$: r,
                    restoreState$: s,
                    onScroll: function(t) {
                        let {
                            conversationKey: a,
                            responseSpacer: r
                        } = n();
                        null != a && e.set(sv.a, a, (0, st.a)(t, r?.getHeightPx() ?? 0))
                    },
                    cancelPendingRestore: l,
                    acceptSubmit() {
                        l(), e.set(a, 0)
                    },
                    onApiChange: t => e.set(r, t),
                    restoreReadingPosition: function(t) {
                        let a = i;
                        if (null == a) return;
                        let s = t.getScrollElement();
                        if (null == s || 0 === s.clientHeight) return;
                        if ("bottom" === a) {
                            l(), t.scrollToDistanceFromBottomPx(0, "instant");
                            return
                        }
                        t.shouldFollowContentGrowth() && t.holdViewport();
                        let o = a.turn,
                            c = null == o ? null : s.querySelector(`[data-turn-key="${CSS.escape(o.key)}"]`)?.getBoundingClientRect(),
                            d = a.top;
                        if (null != o && null != c) {
                            let {
                                windowZoom: e
                            } = n();
                            if ((0, ad.b)(c.height, e) <= Math.max(0, -o.offset)) return;
                            d = s.scrollTop + (0, ad.b)(c.top - s.getBoundingClientRect().top, e) - o.offset
                        }
                        let u = s.scrollHeight - s.clientHeight;
                        d <= u && ((null == o || null != c || e.get(r)?.getEntryGeometry(o.key) == null) && l(), t.compensateScrollToDistanceFromBottomPx(u - Math.max(0, d)))
                    },
                    captureBeforeHide: function(e) {
                        let t = e.getScrollElement();
                        return null != t && t.clientHeight > 0 && (o = i ?? (e.shouldFollowContentGrowth() && 1 >= (0, st.b)(t) ? "bottom" : function(e, t) {
                            let n = e.scrollTop,
                                a = e.getBoundingClientRect();
                            for (let r of e.querySelectorAll("[data-turn-key]")) {
                                let e = r.getBoundingClientRect(),
                                    s = r.dataset.turnKey;
                                if (null != s && e.height > 0 && e.bottom > a.top && e.top < a.bottom) return {
                                    top: n,
                                    turn: {
                                        key: s,
                                        offset: (0, ad.b)(e.top - a.top, t)
                                    }
                                }
                            }
                            return {
                                top: n
                            }
                        }(t, n().windowZoom))), () => {
                            o = null
                        }
                    },
                    onRestoreStateChange: function(t) {
                        null != o && null != t && (i = o, e.set(s, t))
                    }
                }
            })(e0, tx, tC), H[4] = e0, H[5] = tx, H[6] = tC, H[7] = n) : n = H[7];
            let [t_] = (0, m.useState)(n), tw = (0, d.z)(t_.api$), tI = (0, d.z)(t_.restoreState$), tS = (0, d.z)(t_.initialOffset$), {
                cancelPendingRestore: tT
            } = t_, tE = null == tI ? eL : null, [tP, tA] = (0, m.useState)(!1);
            H[8] !== ev ? (o = () => ev, H[8] = ev, H[9] = o) : o = H[9];
            let tM = (0, eW.a)(o),
                {
                    revealLatestResponse: tR,
                    scrollToSearchTurn: tk,
                    scrollToDelayedImageCard: tO
                } = ((G = (0, r.c)(18))[0] !== tw || G[1] !== ev ? (R = () => ({
                    async scrollToMessage(e) {
                        let t = ev.find(t => {
                            let {
                                turn: n
                            } = t;
                            return n.messageIds.includes(e)
                        });
                        null != t && null != tw && await tw.scrollToKey(t.turnKey, void 0, {
                            align: "top"
                        })
                    }
                }), k = [ev, tw], G[0] = tw, G[1] = ev, G[2] = R, G[3] = k) : (R = G[2], k = G[3]), (0, m.useImperativeHandle)(W, R, k), G[4] !== tw || G[5] !== ev ? (O = (e, t) => (0, ra.c)(tw, ev.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                })?.turnKey, t), G[4] = tw, G[5] = ev, G[6] = O) : O = G[6], F = (0, eW.a)(O), G[7] !== tw || G[8] !== X || G[9] !== ev ? (N = async e => {
                    let t = ev.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != tw && await tw.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${X}-${e}`)}"]`), {
                        align: "center"
                    })
                }, G[7] = tw, G[8] = X, G[9] = ev, G[10] = N) : N = G[10], L = (0, eW.a)(N), G[11] !== tw?.scrollToKey || G[12] !== ev ? (B = function(e) {
                    let t = ev.findLast(ob);
                    return (0, oy.a)(tw?.scrollToKey, t?.turnKey, e)
                }, G[11] = tw?.scrollToKey, G[12] = ev, G[13] = B) : B = G[13], D = B, G[14] !== D || G[15] !== L || G[16] !== F ? (z = {
                    revealLatestResponse: D,
                    scrollToSearchTurn: F,
                    scrollToDelayedImageCard: L
                }, G[14] = D, G[15] = L, G[16] = F, G[17] = z) : z = G[17], z);
            H[10] === Symbol.for("react.memo_cache_sentinel") ? (i = e => (0, ra.a)(tf.current, e), H[10] = i) : i = H[10];
            let tN = (0, eW.a)(i),
                tB = `chatgpt:${X}`;
            if (H[11] !== tT || H[12] !== X || H[13] !== tM || H[14] !== tN || H[15] !== eO || H[16] !== e1 || H[17] !== tk || H[18] !== eD || H[19] !== e3 || H[20] !== tB) {
                let e;
                H[22] !== X || H[23] !== eO || H[24] !== e1 || H[25] !== eD || H[26] !== e3 ? (e = async e => {
                    let t = e1.get(tm.j, X);
                    !eO && null == eD && null == e3 && null != t && e1.get(aY.b) > 0 && await (0, aV.a)(e1, t, e)
                }, H[22] = X, H[23] = eO, H[24] = e1, H[25] = eD, H[26] = e3, H[27] = e) : e = H[27], l = function(e) {
                    let {
                        getTurns: t,
                        routeContextId: n,
                        scrollAdapter: a,
                        ensureHistory: r
                    } = e, s = (0, rN.a)({
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
                                            unitId: (0, rf.a)("user", t),
                                            text: n
                                        }]
                                    }
                                    if ("assistant-message" === e.type) {
                                        let n = (0, rz.a)(e.content, ak.b),
                                            a = [],
                                            r = "";
                                        for (; e.content.includes(r);) r += "";
                                        let s = (0, rO.a)(function e(t, n, a, r) {
                                                let s = "",
                                                    o = 0;
                                                for (let i of t) {
                                                    let t = n.indexOf(i.raw, o); - 1 !== t && (s += n.slice(o, t), s += function(t, n, a) {
                                                        var r, s;
                                                        if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                        if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                            if (e.name === ak.a) {
                                                                let n = (0, rG.a)(e.attributes),
                                                                    a = (0, rG.b)(e.attributes),
                                                                    r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, ak.l)(e) === a);
                                                                if (null == r) return "";
                                                                let s = (0, ak.i)(r);
                                                                return "hidden" === s || "block" === s ? "" : (0, ak.j)(r) ?? ""
                                                            }
                                                            return e.name === rk.a ? (0, rB.a)(e.attributes, "label") ?? "" : e.name === rk.b || e.name === rk.c ? "" : e.name === rR.a ? e.text ?? "" : null
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
                                            unitId: (0, rf.a)("assistant", t),
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
                    getTurns: tM,
                    routeContextId: tB,
                    scrollAdapter: {
                        scrollToTurn: tk,
                        getTurnContainer: tN,
                        onNavigate: tT
                    },
                    ensureHistory: e
                }), H[11] = tT, H[12] = X, H[13] = tM, H[14] = tN, H[15] = eO, H[16] = e1, H[17] = tk, H[18] = eD, H[19] = e3, H[20] = tB, H[21] = l
            } else l = H[21];
            let tz = l;
            H[28] !== tz.contextId ? (c = {
                containerRef: tf,
                contextId: tz.contextId
            }, H[28] = tz.contextId, H[29] = c) : c = H[29], (0, ro.a)(c);
            let tG = e9 && null == eK,
                tF = e4 && tG && !te,
                tL = (0, rl.a)();
            H[30] !== X || H[31] !== e_ || H[32] !== er || H[33] !== J || H[34] !== tL ? (u = {
                conversationId: X,
                sectionIndex: J,
                hasRenderableTurns: e_,
                isCoveredByFloatingPanel: er,
                shouldReduceMotion: tL,
                containerRef: tf
            }, H[30] = X, H[31] = e_, H[32] = er, H[33] = J, H[34] = tL, H[35] = u) : u = H[35];
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
                    let p = (0, m.useRef)(t);
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
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(os) && 0 !== n.clientWidth && (s.disconnect(), h.set(a * n.clientWidth), e = (0, r8.a)(h, 0, {
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
                    }, a = [o, i, l, d, c, h, u], s[3] = u, s[4] = o, s[5] = l, s[6] = c, s[7] = i, s[8] = h, s[9] = d, s[10] = n, s[11] = a) : (n = s[10], a = s[11]), (0, m.useLayoutEffect)(n, a), h
                }(u),
                tH = tG && te,
                [tW, tq] = (0, m.useState)(null),
                [tU, tK] = (0, m.useState)(null),
                [tV, tY] = (0, m.useState)(null),
                tQ = eM && tG && !ew && !te && !e4,
                [t$, tX] = (0, m.useState)(null);
            H[36] !== eQ || H[37] !== X || H[38] !== e_ || H[39] !== eO || H[40] !== eH || H[41] !== eU ? (h = eU && !eQ ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rt.BrowserComposerDisclaimer, {
                    supportsMessageDisclosures: !0,
                    conversationId: X,
                    hasUserMessage: e_,
                    isTemporaryChat: eO,
                    regulatedConnectorKindOverride: eH
                })
            }) : void 0, H[36] = eQ, H[37] = X, H[38] = e_, H[39] = eO, H[40] = eH, H[41] = eU, H[42] = h) : h = H[42];
            let tJ = h;
            H[43] !== X || H[44] !== ey || H[45] !== e_ || H[46] !== ew || H[47] !== eR || H[48] !== eB || H[49] !== eU || H[50] !== eV ? (p = e_ ? null : (0, a.jsx)(rA.a, {
                conversationId: X,
                errorMessage: ey,
                isWorkConversation: eB,
                showPendingLoadingMessage: eV,
                showRequestUserInputStatus: eU && !ew && !eR
            }), H[43] = X, H[44] = ey, H[45] = e_, H[46] = ew, H[47] = eR, H[48] = eB, H[49] = eU, H[50] = eV, H[51] = p) : p = H[51];
            let tZ = p;
            H[52] !== X || H[53] !== eB || H[54] !== eD || H[55] !== e3 ? (g = eB && null == eD && null == e3 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(re, {
                    conversationId: X
                }, X)
            }) : null, H[52] = X, H[53] = eB, H[54] = eD, H[55] = e3, H[56] = g) : g = H[56];
            let t0 = g;
            H[57] !== eK || H[58] !== t0 ? (f = null != eK ? (0, a.jsxs)(a.Fragment, {
                children: [t0, eK]
            }) : null, H[57] = eK, H[58] = t0, H[59] = f) : f = H[59];
            let t1 = f;
            H[60] !== et || H[61] !== t1 || H[62] !== eQ || H[63] !== Z || H[64] !== ee || H[65] !== V || H[66] !== X || H[67] !== ec || H[68] !== tJ || H[69] !== tZ || H[70] !== ev || H[71] !== t0 || H[72] !== tW || H[73] !== eY || H[74] !== ex || H[75] !== e_ || H[76] !== ei || H[77] !== e4 || H[78] !== ew || H[79] !== eA || H[80] !== er || H[81] !== es || H[82] !== te || H[83] !== ts || H[84] !== eo || H[85] !== eM || H[86] !== eR || H[87] !== eO || H[88] !== eB || H[89] !== ti || H[90] !== eJ || H[91] !== eI || H[92] !== t_ || H[93] !== tQ || H[94] !== ea || H[95] !== tv || H[96] !== ek || H[97] !== tR || H[98] !== e7.isHidden || H[99] !== eD || H[100] !== e3 || H[101] !== e9 || H[102] !== el || H[103] !== tH || H[104] !== tF || H[105] !== U || H[106] !== tr || H[107] !== e$ || H[108] !== Y ? (v = t1 ?? (e9 ? (0, a.jsxs)(sx.a.Provider, {
                value: ev.at(-1) ?? null,
                children: [es || te ? null : (0, a.jsx)(ri.a, {
                    onNavigate: tR
                }, X), te ? null : ee, (0, a.jsx)(s1, {
                    requiredSystemHints: ea,
                    composerRef: V,
                    workspace: Y,
                    isInlinePreview: eo,
                    hideModelPicker: ei,
                    showFilePicker: el,
                    disableAutoFocus: ec,
                    conversationId: Z,
                    isImageEditComposer: ts,
                    disabled: ew,
                    readOnlyPlaceholder: eI,
                    awaitingGptContinuation: eQ,
                    headerContent: t0,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tQ ? (0, a.jsx)("div", {
                            ref: tY,
                            className: "empty:hidden"
                        }) : null, et, !eA && !ex && e_ && !eQ && e$, e4 ? null : eY, tH && tZ]
                    }),
                    isFullscreenComposer: te,
                    isHidden: e7.isHidden,
                    trackReadState: U && !er,
                    trackShownImpressions: ti,
                    isSharedConversation: eM,
                    isSubmitDisabled: eR,
                    retainLiveModelPicker: ek && !ts,
                    followupPortalTarget: tW,
                    takeoverDisclaimerRef: tX,
                    showConversationFollowups: null == eD && null == e3 && !eO && !eB && !te,
                    isTemporaryChat: eO,
                    isWorkConversation: eB,
                    responseSpacerState: tv,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(rZ, {
                            entries: ev,
                            historyLoader: eO || null != eD || null != e3 ? null : (0, a.jsx)(oe.a, {
                                conversationId: X
                            }),
                            isVisible: t,
                            rendersWidgets: "floating" === tr,
                            onVisibilityChange: tn
                        }, X)
                    },
                    showVoiceStage: !tF,
                    voiceDisclaimer: e4 && !tF ? tJ : void 0,
                    onSubmitAccepted: e => {
                        t_.acceptSubmit(), eJ?.(e)
                    }
                }, `${Z}:${ts?"image-edit":"chat"}`)]
            }) : t0), H[60] = et, H[61] = t1, H[62] = eQ, H[63] = Z, H[64] = ee, H[65] = V, H[66] = X, H[67] = ec, H[68] = tJ, H[69] = tZ, H[70] = ev, H[71] = t0, H[72] = tW, H[73] = eY, H[74] = ex, H[75] = e_, H[76] = ei, H[77] = e4, H[78] = ew, H[79] = eA, H[80] = er, H[81] = es, H[82] = te, H[83] = ts, H[84] = eo, H[85] = eM, H[86] = eR, H[87] = eO, H[88] = eB, H[89] = ti, H[90] = eJ, H[91] = eI, H[92] = t_, H[93] = tQ, H[94] = ea, H[95] = tv, H[96] = ek, H[97] = tR, H[98] = e7.isHidden, H[99] = eD, H[100] = e3, H[101] = e9, H[102] = el, H[103] = tH, H[104] = tF, H[105] = U, H[106] = tr, H[107] = e$, H[108] = Y, H[109] = v) : v = H[109];
            let t2 = v;
            H[110] !== X || H[111] !== er || H[112] !== eo || H[113] !== e2 || H[114] !== eD || H[115] !== e3 ? (y = void 0, H[110] = X, H[111] = er, H[112] = eo, H[113] = e2, H[114] = eD, H[115] = e3, H[116] = y) : y = H[116];
            let t3 = y,
                t4 = er || void 0;
            H[117] === Symbol.for("react.memo_cache_sentinel") ? (b = null, H[117] = b) : b = H[117], H[118] !== X || H[119] !== er || H[120] !== te || H[121] !== U ? (x = !U || te || er ? null : (0, a.jsx)(sb.a, {
                conversationId: X
            }), H[118] = X, H[119] = er, H[120] = te, H[121] = U, H[122] = x) : x = H[122], H[123] !== eK || H[124] !== X || H[125] !== eo || H[126] !== eD || H[127] !== e3 ? (C = eo || null != eD || null != e3 || null != eK ? null : (0, a.jsx)(sy, {
                conversationId: X
            }, X), H[123] = eK, H[124] = X, H[125] = eo, H[126] = eD, H[127] = e3, H[128] = C) : C = H[128], H[129] !== X || H[130] !== eA || H[131] !== eo || H[132] !== eO || H[133] !== eD || H[134] !== e3 ? (_ = eo || eA || eO || null != eD || null != e3 ? null : (0, a.jsx)(ot, {
                conversationId: X
            }), H[129] = X, H[130] = eA, H[131] = eo, H[132] = eO, H[133] = eD, H[134] = e3, H[135] = _) : _ = H[135], H[136] !== X || H[137] !== ev || H[138] !== tP || H[139] !== eP || H[140] !== eA || H[141] !== eo || H[142] !== tR || H[143] !== eD || H[144] !== e3 || H[145] !== tw ? (w = eo || eA || null != eD || null != e3 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(am, {
                    conversationId: X,
                    entries: ev,
                    turnListApi: tw
                }), (0, a.jsx)(ru.a, {
                    ready: !eP && tP && null != tw && ev.length > 0,
                    onNavigate: tR
                })]
            }), H[136] = X, H[137] = ev, H[138] = tP, H[139] = eP, H[140] = eA, H[141] = eo, H[142] = tR, H[143] = eD, H[144] = e3, H[145] = tw, H[146] = w) : w = H[146], H[147] !== eK || H[148] !== tT || H[149] !== tu || H[150] !== Z || H[151] !== $ || H[152] !== td || H[153] !== X || H[154] !== ef || H[155] !== tz || H[156] !== tJ || H[157] !== tZ || H[158] !== ev || H[159] !== t2 || H[160] !== ex || H[161] !== e_ || H[162] !== en || H[163] !== th || H[164] !== tS || H[165] !== tE || H[166] !== e4 || H[167] !== e5 || H[168] !== ew || H[169] !== eP || H[170] !== eA || H[171] !== er || H[172] !== es || H[173] !== te || H[174] !== eo || H[175] !== tl || H[176] !== tc || H[177] !== eM || H[178] !== eO || H[179] !== eN || H[180] !== eB || H[181] !== eS || H[182] !== t3 || H[183] !== ti || H[184] !== eX || H[185] !== eC || H[186] !== eG || H[187] !== q || H[188] !== t_ || H[189] !== tV || H[190] !== tU || H[191] !== tQ || H[192] !== tv || H[193] !== e7.isChatPaneHidden || H[194] !== e1 || H[195] !== eu || H[196] !== tO || H[197] !== tD || H[198] !== eD || H[199] !== e3 || H[200] !== Q || H[201] !== tL || H[202] !== eU || H[203] !== e9 || H[204] !== tp || H[205] !== tG || H[206] !== tH || H[207] !== tF || H[208] !== t$ || H[209] !== ed || H[210] !== tw || H[211] !== Y ? (I = Y?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!Q && Y.fullscreenContent, t2]
            }) : (0, a.jsxs)(rh.a, {
                scrollAttributionKey: ti ? ev.at(-1)?.turnKey : void 0,
                viewportOverlay: es || eo || eB || null != eD || null != e3 || null != eK || er || te ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(sw, {
                        conversationId: X
                    }, X)
                }),
                hideTranscript: es,
                active: !eA && (!e_ || null != tw),
                presentation: ed ?? (eo ? "compact" : "default"),
                contentX: $,
                preserveReadingPassage: !eB && !eo,
                supportsComposerExpansion: tG && !te && null == Y,
                footerPlacement: tu ? th : "bottom",
                initialOffset: tS,
                scrollOrigin: eu,
                onScroll: t_.onScroll,
                onUserScrollIntent: tT,
                scrollToBottomButton: !e9 || te || tF ? void 0 : {
                    isWorking: eN
                },
                threadEndContent: e4 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tq,
                        className: ez.a
                    }), null == t$ ? tJ : (0, ac.createPortal)(tJ, t$)]
                }),
                footerLeadingContent: tF ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: ez.a,
                            children: (0, a.jsx)(rc.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: tJ
                    })]
                }) : t3,
                footer: t2,
                children: [eo || eA || null != eD ? null : (0, a.jsx)(rP, {
                    conversationId: X,
                    entries: ev,
                    isConversationFetching: eP,
                    turnListApi: tw
                }), (0, a.jsxs)(al.a.div, {
                    ref: tf,
                    style: {
                        x: tD
                    },
                    "data-chatgpt-conversation-selection-target": X,
                    "data-rail-chat-transcript": tc || void 0,
                    className: (0, ai.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", eo && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, rs.K)(e1, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, rs.K)(e1, "conversation")
                    },
                    children: [(0, a.jsxs)(m.Suspense, {
                        fallback: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(s.b, {
                                name: "conversation content"
                            }), (0, a.jsx)(tj.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })]
                        }),
                        children: [eo || eA ? null : (0, a.jsx)(rr.a, {
                            conversationSource: tz
                        }), er || e7.isChatPaneHidden || eO || null != eD || null != e3 ? null : en ?? (0, a.jsx)(oe.a, {
                            conversationId: X
                        }), (0, a.jsx)(ov.b, {
                            conversationId: X
                        }), (null != eD || null != e3) && e_ ? (0, a.jsx)(of, {
                            sharedConversationId: eD
                        }) : null, null == eG ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: ez.a,
                                children: eG
                            })
                        }), null == td || eA ? null : (0, a.jsx)(rp.a, {
                            conversationId: X,
                            branchSource: {
                                conversationId: td.metadata.source_conversation_id,
                                title: td.metadata.source_conversation_title,
                                gizmoId: td.metadata.source_conversation_gizmo_id,
                                ownerId: td.metadata.source_conversation_owner_id
                            }
                        }), ex ? (0, a.jsx)(a6, {
                            isFetching: eP,
                            isSharedConversation: eM,
                            onRetry: eC
                        }) : eA ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": ef,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(tj.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : e_ ? (0, a.jsxs)(s8.a, {
                            value: tO,
                            children: [eo || er ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eO || null != eD || null != e3 ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(a0, {
                                        conversationId: X
                                    })
                                }), (0, a.jsx)(aX, {
                                    entries: ev,
                                    title: q,
                                    TurnRowComponent: rJ
                                })]
                            }), (0, a.jsx)(on.a, {
                                enabled: tQ,
                                aboveComposer: tV,
                                belowMessage: tU,
                                children: (0, a.jsx)(su, {
                                    viewportRef: tg,
                                    isTurnActive: eN,
                                    conversationId: X,
                                    entries: ev,
                                    readingPosition: t_,
                                    isInlinePreview: eo,
                                    onVisibleContentReady: () => tA(!0),
                                    responseSpacerState: tv
                                })
                            }), tQ ? (0, a.jsx)("div", {
                                ref: tK,
                                className: "empty:hidden"
                            }) : null]
                        }) : tp && null == td && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            "data-rail-chat-empty": tc && tl || void 0,
                            children: (0, a.jsx)(eb.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation"
                            })
                        }), !tH && tZ, (0, a.jsx)(sf.a, {
                            conversationId: Z,
                            isWorkConversation: eB
                        }), eU && !ew ? (0, a.jsx)(ou, {
                            conversationId: X,
                            moreDetailsEnabled: eS,
                            onAddSelectedText: eX
                        }) : null]
                    }), eo ? null : (0, a.jsx)(rM.a, {
                        preserveResponseViewport: e => tg.current?.holdForResponse(e) ?? !1,
                        conversationId: X,
                        initialPlacementKey: tE,
                        isActiveVoiceConversation: e4 && e5,
                        isLoadingHistory: eA,
                        latestUserTurnKey: ev.findLast(o_)?.turnKey,
                        onResponseSpacerStateChange: ty
                    }), tF ? (0, a.jsx)(al.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tL ? rd.c : rd.b
                    }) : null]
                })]
            }), H[147] = eK, H[148] = tT, H[149] = tu, H[150] = Z, H[151] = $, H[152] = td, H[153] = X, H[154] = ef, H[155] = tz, H[156] = tJ, H[157] = tZ, H[158] = ev, H[159] = t2, H[160] = ex, H[161] = e_, H[162] = en, H[163] = th, H[164] = tS, H[165] = tE, H[166] = e4, H[167] = e5, H[168] = ew, H[169] = eP, H[170] = eA, H[171] = er, H[172] = es, H[173] = te, H[174] = eo, H[175] = tl, H[176] = tc, H[177] = eM, H[178] = eO, H[179] = eN, H[180] = eB, H[181] = eS, H[182] = t3, H[183] = ti, H[184] = eX, H[185] = eC, H[186] = eG, H[187] = q, H[188] = t_, H[189] = tV, H[190] = tU, H[191] = tQ, H[192] = tv, H[193] = e7.isChatPaneHidden, H[194] = e1, H[195] = eu, H[196] = tO, H[197] = tD, H[198] = eD, H[199] = e3, H[200] = Q, H[201] = tL, H[202] = eU, H[203] = e9, H[204] = tp, H[205] = tG, H[206] = tH, H[207] = tF, H[208] = t$, H[209] = ed, H[210] = tw, H[211] = Y, H[212] = I) : I = H[212], H[213] !== er || H[214] !== t4 || H[215] !== x || H[216] !== C || H[217] !== _ || H[218] !== w || H[219] !== I ? (T = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": t4,
                inert: er,
                children: [b, x, C, _, w, I]
            }), H[213] = er, H[214] = t4, H[215] = x, H[216] = C, H[217] = _, H[218] = w, H[219] = I, H[220] = T) : T = H[220];
            let t5 = T,
                t6 = !eo,
                t7 = "main" === tr;
            H[221] !== t6 || H[222] !== t7 ? (j = {
                presentation: "main",
                preserveActivityDisclosures: t6,
                rendersWidgets: t7
            }, H[221] = t6, H[222] = t7, H[223] = j) : j = H[223];
            let t8 = !ta && (es || er || e7.isChatPaneHidden || Y?.fullscreenContent != null);
            return H[224] !== t8 ? (E = (0, a.jsx)(s.b, {
                name: "conversation hidden",
                active: t8
            }), H[224] = t8, H[225] = E) : E = H[225], H[226] !== t5 ? (P = (0, a.jsx)(rn.a, {
                children: t5
            }), H[226] = t5, H[227] = P) : P = H[227], H[228] !== j || H[229] !== E || H[230] !== P ? (M = (0, a.jsxs)(d.b, {
                scope: rH,
                value: j,
                children: [E, P]
            }), H[228] = j, H[229] = E, H[230] = P, H[231] = M) : M = H[231], M
        }

        function o_(e) {
            let {
                turn: t
            } = e;
            return t.items.some(ow)
        }

        function ow(e) {
            return "user-message" === e.type
        }
        var oI = n("gCr7");
        n("i1of");
        var oS = n("alJ6"),
            oT = n("u9iS"),
            oj = n("fNPc"),
            oE = n("vVgo"),
            oP = n("T33u"),
            oA = n("EpL9"),
            oM = n("svjy");

        function oR(e) {
            let {
                conversationId: t,
                courseId: n
            } = e;
            return `chatgpt-learning-course:${JSON.stringify([t,n])}`
        }
        let ok = (0, d.d)(eg.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(e4.h) && n(e4.i) && n(e3.l.activeTab$)?.tabId === oR(e)
            }),
            oO = (0, tz.a)(async () => {
                let {
                    CoursePanelTab: e
                } = await Promise.all([n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(882456), n.e(736970), n.e(81461), n.e(259288), n.e(818353), n.e(758379), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(46150), n.e(780567), n.e(581855)]).then(n.bind(n, "lbEC"));
                return e
            }, {
                propagateLoadError: !0
            }),
            oN = (0, oA.k)("chatgpt-learning-course", oO, {
                dropDestinations: ["right"],
                isAvailable: (e, t) => "chatgpt-thread" === e.value.routeKind && (null == t || e.value.conversationId === t.conversationId),
                paneWidth: () => ({
                    defaultWidth: 480,
                    storageKey: "app-shell:learning-course-width"
                }),
                showInNewTabLauncher: !1,
                open: oB
            });

        function oB(e, t) {
            let {
                conversationId: n,
                courseId: r
            } = t, {
                preserveFocus: s = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = e.get(T.f), i = e.get(T.j), l = () => "chatgpt-thread" === e.value.routeKind && e.value.conversationId === n && e.get(eT.c)?.pathname === e.value.pathname && e.get(T.f) === o && e.get(T.j) === i;
            if (!l() || "" === r) return;
            let c = oR({
                conversationId: n,
                courseId: r
            });
            e.get(ok, {
                conversationId: n,
                courseId: r
            }) ? e3.l.closeTab(e, c) : (0, e3.h)(e, oN, {
                target: "right",
                revealAndFocus: !0,
                preserveFocus: s,
                shouldOpen: l,
                id: c,
                icon: (0, a.jsx)(tB.ob, {}),
                title: e.get(oM.a).formatMessage({
                    id: "chatgptConversations.coursePanel.title",
                    defaultMessage: "Lesson plan"
                }),
                props: {
                    conversationId: n,
                    courseId: r,
                    accountId: o,
                    userId: i
                }
            })
        }
        var oz = n("MgyE"),
            oG = n("gyrn"),
            oF = n("ckwE"),
            oL = n("kHi2");

        function oD(e) {
            let t, n = (0, r.c)(3),
                {
                    children: s
                } = e,
                [o] = (0, m.useState)(oH);
            return n[0] !== o || n[1] !== s ? (t = (0, a.jsx)(aQ.a, {
                value: o,
                children: s
            }), n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }

        function oH() {
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

        function oW(e) {
            let t, n, s, o = (0, r.c)(8),
                {
                    children: i,
                    courseChatId: l
                } = e,
                c = (0, d.y)(eg.a);
            o[0] !== l || o[1] !== c ? (t = "chatgpt-thread" === c.value.routeKind && c.value.conversationId === l ? c.get(oL.b) : void 0, o[0] = l, o[1] = c, o[2] = t) : t = o[2];
            let u = t;
            return o[3] !== i ? (n = (0, a.jsx)(oD, {
                children: i
            }), o[3] = i, o[4] = n) : n = o[4], o[5] !== u || o[6] !== n ? (s = (0, a.jsx)(oF.a, {
                binding: u,
                children: n
            }), o[5] = u, o[6] = n, o[7] = s) : s = o[7], s
        }
        var oq = n("MDmT"),
            oU = n("Fjze");

        function oK(e) {
            let t, n, a, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = e,
                i = (0, d.y)(ej.a),
                l = null != o;
            s[0] !== i || s[1] !== o ? (t = () => {
                null != o && (nP.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: o
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(oV), (0, ec.a)(i, oU.a, {
                    sharedConversationId: o
                }))
            }, s[0] = i, s[1] = o, s[2] = t) : t = s[2];
            let c = (0, m.useEffectEvent)(t);
            return s[3] !== c ? (n = () => {
                c()
            }, s[3] = c, s[4] = n) : n = s[4], s[5] !== l ? (a = [l], s[5] = l, s[6] = a) : a = s[6], (0, m.useEffect)(n, a), null
        }

        function oV() {}
        var oY = n("GigQ"),
            oQ = n("JKdL"),
            o$ = n("d107"),
            oX = n("FGv0"),
            oJ = n("r9i9"),
            oZ = n("tdfh"),
            o0 = n("uQqo"),
            o1 = n("yi1v"),
            o2 = n("niKP");

        function o3(e) {
            let t, s, o, i, l, c = (0, r.c)(16),
                {
                    data: u
                } = e,
                h = (0, d.y)(ej.a),
                p = (0, f.a)();
            c[0] !== p ? (t = p.formatMessage(eC.a.headerShare), c[0] = p, c[1] = t) : t = c[1];
            let g = t,
                [v, y] = (0, m.useState)(!1);
            return c[2] !== u || c[3] !== v || c[4] !== h ? (s = () => {
                v || (y(!0), (async function(e, t) {
                    let a = t.sharedPost,
                        [r, ...s] = a?.attachments[0]?.kind === "media_generation" ? (0, o0.a)(a, (0, o0.b)(a)) : [],
                        o = () => (0, oJ.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId, 1 / 0, void 0, (0, ao.b)(e.get, t.dialogProps.serverConversationId)),
                        i = crypto.randomUUID();
                    (0, op.c)(e, {
                        attachmentType: t.attachmentType,
                        contentType: t.contentType,
                        shareId: t.shareId,
                        shareSessionId: i
                    });
                    let l = t.dialogProps.receiverShareLink;
                    if ((0, o1.a)() && null != l && ("conversation" === l.contentType || "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE" === t.attachmentType)) {
                        if ("unsupported" !== await (0, o1.b)(e, {
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
                        if ("conversation" === l.contentType) return void(0, nE.f)(e, oZ.a, {
                            ...t.dialogProps,
                            shareSessionId: i
                        })
                    }
                    if (l?.contentType === "conversation") {
                        let a = (0, op.b)(e, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                shareId: t.shareId,
                                shareSessionId: i,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                                usedExistingLink: !0,
                                omitSheetType: !0
                            }),
                            r = await (0, oX.a)(Promise.resolve(l.shareLinkUrl));
                        if (a({
                                result: r ? "link-copied" : "copy-failed",
                                shareId: t.shareId
                            }), r) {
                            let {
                                showConversationShareCopiedToast: t
                            } = await n.e(555532).then(n.bind(n, "euaP"));
                            t(e, null, !0 === l.isWorkspaceOnly)
                        } else(0, nE.f)(e, oZ.a, {
                            ...t.dialogProps,
                            previewTurns: o(),
                            recoveryShareLink: l,
                            shareSessionId: i
                        });
                        return
                    }(0, nE.f)(e, oZ.a, {
                        ...t.dialogProps,
                        image: r?.src == null ? void 0 : {
                            alt: t.dialogProps.title ?? "",
                            item: r,
                            previewSrc: r.src,
                            additionalPublishedPreviewUrls: s.flatMap(e => null == e.src ? [] : [e.src])
                        },
                        previewTurns: null != r ? void 0 : o(),
                        privacyNotices: (0, oJ.k)({
                            conversation: t.conversation,
                            projectId: null
                        }),
                        shareSessionId: i
                    })
                })(h, u).finally(() => y(!1)))
            }, c[2] = u, c[3] = v, c[4] = h, c[5] = s) : s = c[5], c[6] !== v ? (o = v ? null : (0, a.jsx)(eS.a, {
                asset: o2.a
            }), c[6] = v, c[7] = o) : o = c[7], c[8] !== v || c[9] !== g || c[10] !== s || c[11] !== o ? (i = (0, a.jsx)(tN.a, {
                "aria-label": g,
                color: "ghostActive",
                loading: v,
                size: "toolbar",
                uniform: !0,
                onClick: s,
                children: o
            }), c[8] = v, c[9] = g, c[10] = s, c[11] = o, c[12] = i) : i = c[12], c[13] !== g || c[14] !== i ? (l = (0, a.jsx)(tk.a, {
                content: g,
                children: i
            }), c[13] = g, c[14] = i, c[15] = l) : l = c[15], l
        }
        var o4 = n("MVHH"),
            o5 = n("rhKI"),
            o6 = n("PP3M"),
            o7 = n("jAnS"),
            o8 = n("CFOe"),
            o9 = n("JNtf"),
            ie = n("mUDD");

        function it(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g, m, f = (0, r.c)(31),
                {
                    canSave: v,
                    isPending: y,
                    onCancel: b,
                    onClose: x,
                    onSave: C
                } = e;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.temporaryChat.save.close",
                defaultMessage: "Close"
            }), f[0] = t) : t = f[0], f[1] !== y || f[2] !== x ? (n = e => {
                e || y || x()
            }, f[1] = y, f[2] = x, f[3] = n) : n = f[3];
            let _ = !y;
            f[4] !== v || f[5] !== C ? (s = e => {
                e.preventDefault(), v && C()
            }, f[4] = v, f[5] = C, f[6] = s) : s = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(o9.e, {
                children: (0, a.jsx)(eb.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?"
                })
            }), f[7] = o) : o = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(ie.e, {
                children: (0, a.jsx)(ie.d, {
                    className: "select-none",
                    title: o,
                    subtitle: (0, a.jsx)(o9.d, {
                        children: (0, a.jsx)(eb.a, {
                            id: "chatgptConversations.temporaryChat.save.description.regularChatSettings",
                            defaultMessage: "This chat will now be included in your history. It will follow your memory and model training settings used for regular chats."
                        })
                    })
                })
            }), f[8] = i) : i = f[8], f[9] !== b || f[10] !== x ? (l = () => {
                b?.(), x()
            }, f[9] = b, f[10] = x, f[11] = l) : l = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.temporaryChat.save.cancel",
                defaultMessage: "Cancel"
            }), f[12] = c) : c = f[12], f[13] !== y || f[14] !== l ? (d = (0, a.jsx)(tN.a, {
                color: "secondary",
                disabled: y,
                onClick: l,
                children: c
            }), f[13] = y, f[14] = l, f[15] = d) : d = f[15];
            let w = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save"
            }), f[16] = u) : u = f[16], f[17] !== y || f[18] !== w ? (h = (0, a.jsx)(tN.a, {
                color: "primary",
                disabled: w,
                loading: y,
                type: "submit",
                children: u
            }), f[17] = y, f[18] = w, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(ie.e, {
                children: (0, a.jsxs)(ie.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== s ? (g = (0, a.jsxs)(ie.b, {
                as: "form",
                onSubmit: s,
                children: [i, p]
            }), f[23] = p, f[24] = s, f[25] = g) : g = f[25], f[26] !== y || f[27] !== g || f[28] !== n || f[29] !== _ ? (m = (0, a.jsx)(o9.a, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: _,
                size: "narrow",
                children: g
            }), f[26] = y, f[27] = g, f[28] = n, f[29] = _, f[30] = m) : m = f[30], m
        }

        function ia(e) {
            (0, tA.e)(e).catch(() => {
                tl.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function ir(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(is, {
                        conversationId: s
                    })
                })]
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function is(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return (0, d.z)(o6.e) ? (n[0] !== s ? (t = (0, a.jsx)(io, {
                conversationId: s
            }), n[0] = s, n[1] = t) : t = n[1], t) : null
        }

        function io(e) {
            let t, n, s, o, i, l, c, u, h, p, g, y, b, x = (0, r.c)(49),
                {
                    conversationId: C
                } = e,
                _ = (0, d.y)(ej.a),
                w = (0, f.a)(),
                I = (0, v._)(),
                [S, T] = (0, m.useState)(!1),
                [j, E] = (0, m.useState)(!1),
                [P, A] = (0, m.useState)(!1),
                [M, R] = (0, m.useState)(!1),
                k = (0, m.useRef)(!1),
                O = (0, d.z)(nR.p).data,
                N = (0, d.x)(tm.j, C),
                B = (0, d.x)(tm.Y, C),
                z = (0, d.x)(tm.J, C),
                G = (0, d.x)(tI.j, C);
            x[0] !== C || x[1] !== _ ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (_.get(tm.J, C) || _.get(tI.j, C) || t !== _.get(tm.j, C) || n !== _.get(tm.Y, C)) throw Error("Cannot save an unavailable temporary chat message");
                    return nP.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: iu
                    }).then(id)
                },
                retry: ic
            }, x[0] = C, x[1] = _, x[2] = t) : t = x[2];
            let {
                mutateAsync: F,
                isPending: L
            } = (0, ey.a)(t), D = null != N && null != B && !z && !G && !L && !j;
            x[3] !== w ? (n = w.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat"
            }), x[3] = w, x[4] = n) : n = x[4];
            let H = n;
            x[5] !== O?.eligibleAnnouncements ? (s = O?.eligibleAnnouncements?.includes(nR.h), x[5] = O?.eligibleAnnouncements, x[6] = s) : s = x[6];
            let W = !0 === s,
                q = !M && (P || W && D);
            x[7] !== C || x[8] !== P || x[9] !== _ || x[10] !== q ? (o = () => {
                if (!q || P || k.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || k.current || (k.current = !0, (0, ec.a)(_, o4.Bb, {
                        personalizationMode: (0, o5.a)((0, o6.k)(_, C))
                    }), A(!0), ia(_))
                }), () => {
                    e = !0
                }
            }, i = [C, P, _, q], x[7] = C, x[8] = P, x[9] = _, x[10] = q, x[11] = o, x[12] = i) : (o = x[11], i = x[12]), (0, m.useEffect)(o, i), x[13] !== _ ? (l = () => {
                R(!0), k.current || (k.current = !0, ia(_))
            }, x[13] = _, x[14] = l) : l = x[14];
            let V = l;
            x[15] !== D || x[16] !== C || x[17] !== w || x[18] !== I || x[19] !== F || x[20] !== _ || x[21] !== B || x[22] !== N ? (c = async function() {
                let e;
                if (!D || null == N || null == B) return;
                let t = (0, o5.a)((0, o6.k)(_, C));
                (0, ec.a)(_, o4.Cb, {
                    personalizationMode: t
                });
                try {
                    e = (await F({
                        sourceConversationId: N,
                        selectedLeafId: B
                    })).conversation_id
                } catch (e) {
                    (0, ec.a)(_, o4.Db, {
                        personalizationMode: t,
                        failureCategory: (0, o5.b)(e)
                    }), _.get(K.f).danger(w.formatMessage({
                        id: "chatgptConversations.temporaryChat.save.error",
                        defaultMessage: "Couldn't save this chat. Please try again."
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.temporaryChat.save.error"
                        }
                    });
                    return
                }
                E(!0), T(!1), (0, ew.H)(_), (0, ew.K)(_, N, "remove"), (0, ew.K)(_, e, "refresh"), I((0, o7.c)(e), {
                    replace: !0
                }), _.get(K.f).success(w.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history."
                })), nP.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: B
                    }
                }).then(il).then(t => {
                    (0, tm.bc)({
                        scope: _,
                        conversationId: e,
                        title: t
                    }), _.query.setData(tA.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, ew.H)(_), (0, ew.K)(_, e, "refresh")
                }).catch(ii)
            }, x[15] = D, x[16] = C, x[17] = w, x[18] = I, x[19] = F, x[20] = _, x[21] = B, x[22] = N, x[23] = c) : c = x[23];
            let Y = c,
                Q = !D;
            x[24] !== C || x[25] !== _ || x[26] !== q ? (u = () => {
                (0, ec.a)(_, o4.Fb, {
                    personalizationMode: (0, o5.a)((0, o6.k)(_, C)),
                    coachMarkVisible: q
                }), T(!0)
            }, x[24] = C, x[25] = _, x[26] = q, x[27] = u) : u = x[27], x[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(U.b, {
                icon: {
                    16: tB.qb,
                    20: tB.rb
                }
            }), x[28] = h) : h = x[28], x[29] !== H || x[30] !== Q || x[31] !== u ? (p = (0, a.jsx)(tN.a, {
                "aria-label": H,
                color: "toolbar",
                disabled: Q,
                size: "toolbar",
                uniform: !0,
                onClick: u,
                children: h
            }), x[29] = H, x[30] = Q, x[31] = u, x[32] = p) : p = x[32];
            let $ = p;
            return x[33] !== V || x[34] !== w || x[35] !== H || x[36] !== $ || x[37] !== q ? (g = q ? (0, a.jsx)(o8.a, {
                align: "end",
                description: (0, a.jsx)(eb.a, {
                    id: "chatgptConversations.temporaryChat.save.coachmark.description",
                    defaultMessage: "Want to keep this chat? You can now save it to your history."
                }),
                dismissLabel: w.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.coachmark.dismiss",
                    defaultMessage: "Close tooltip"
                }),
                onDismiss: V,
                open: !0,
                side: "bottom",
                sideOffset: 10,
                title: (0, a.jsx)(eb.a, {
                    id: "chatgptConversations.temporaryChat.save.button",
                    defaultMessage: "Save chat"
                }),
                tooltipClassName: "w-60",
                children: $
            }) : (0, a.jsx)(tk.a, {
                content: H,
                children: $
            }), x[33] = V, x[34] = w, x[35] = H, x[36] = $, x[37] = q, x[38] = g) : g = x[38], x[39] !== D || x[40] !== C || x[41] !== Y || x[42] !== S || x[43] !== L || x[44] !== _ ? (y = S ? (0, a.jsx)(it, {
                canSave: D,
                isPending: L,
                onCancel: () => {
                    (0, ec.a)(_, o4.Ab, {
                        personalizationMode: (0, o5.a)((0, o6.k)(_, C))
                    })
                },
                onClose: () => T(!1),
                onSave: () => void Y()
            }) : null, x[39] = D, x[40] = C, x[41] = Y, x[42] = S, x[43] = L, x[44] = _, x[45] = y) : y = x[45], x[46] !== g || x[47] !== y ? (b = (0, a.jsxs)(a.Fragment, {
                children: [g, y]
            }), x[46] = g, x[47] = y, x[48] = b) : b = x[48], b
        }

        function ii() {}

        function il(e) {
            return rg.object({
                title: rg.string()
            }).parse(e).title
        }

        function ic(e, t) {
            return e < 1 && t instanceof eV.FetchError && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function id(e) {
            return rg.object({
                conversation_id: rg.string().min(1)
            }).parse(e)
        }

        function iu(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var ih = n("J8FU"),
            ip = n("Aluh"),
            ig = n("mG6J");

        function im(e) {
            let t, n, s = (0, r.c)(14),
                {
                    conversationId: o,
                    shouldBlockExternalEgress: i,
                    widgets: l
                } = e,
                c = (0, d.z)(ip.b);
            if (i) return null;
            if (s[0] !== c || s[1] !== o || s[2] !== l) {
                let e, n, r;
                s[4] !== c || s[5] !== o ? (e = e => c.has((0, sl.e)(o, e.messageId)), s[4] = c, s[5] = o, s[6] = e) : e = s[6];
                let i = l.filter(e),
                    d = `chatgpt:${o}`;
                s[7] !== d ? (n = (0, u.Se)(d), s[7] = d, s[8] = n) : n = s[8];
                let h = n;
                s[9] !== h || s[10] !== o ? (r = e => (0, a.jsx)(ig.b, {
                    conversationId: h,
                    chatGptConversationId: o,
                    hostId: "local",
                    item: e
                }, e.messageId), s[9] = h, s[10] = o, s[11] = r) : r = s[11], t = i.map(r), s[0] = c, s[1] = o, s[2] = l, s[3] = t
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
            ib = n("RgRP");

        function ix() {
            let e, t, n, s, o, i, l, c, u, h, p, g, f, y, x, _, w = (0, r.c)(46),
                I = (0, v._)(),
                S = (0, m.useContext)(Z.a);
            w[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, w[0] = e) : e = w[0];
            let T = (0, d.x)(C.a, e),
                j = (0, d.z)(E.a),
                P = (0, v.bb)() ?? 0,
                {
                    conversationId: A
                } = (0, v.cb)(),
                {
                    search: M,
                    state: R
                } = (0, v.Y)(),
                k = (0, d.x)(tp.a, A ?? null),
                O = (0, d.x)(null == A || tf.e, k ?? A ?? ""),
                N = R?.archivedConversationPreview === !0;
            w[1] !== M ? (t = (0, o7.i)(M), w[1] = M, w[2] = t) : t = w[2];
            let B = t;
            w[3] !== N || w[4] !== B || w[5] !== A ? (n = null == A || (0, ne.e)(A) || B || N ? null : A, w[3] = N, w[4] = B, w[5] = A, w[6] = n) : n = w[6];
            let {
                data: z
            } = (0, d.x)(tA.chatGptConversationQueryById$, n);
            if (null == A) {
                let e;
                return w[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(v.l, {
                    to: "/",
                    replace: !0
                }), w[7] = e) : e = w[7], e
            }
            w[8] !== k || w[9] !== A ? (s = k ?? (0, ne.d)(A), w[8] = k, w[9] = A, w[10] = s) : s = w[10];
            let G = s,
                F = T.isCapable && !j && !O && null != z;
            w[11] !== I ? (o = e => (I((0, o7.c)(e)), !0), w[11] = I, w[12] = o) : o = w[12];
            let L = o;
            w[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(b.a, {}), l = (0, a.jsx)(q.a.Surface, {}), w[13] = i, w[14] = l) : (i = w[13], l = w[14]), w[15] !== N ? (c = null, w[15] = N, w[16] = c) : c = w[16], w[17] !== G || w[18] !== N || w[19] !== B ? (u = B || N ? null : (0, a.jsx)(t_.a, {
                conversationId: G
            }), w[17] = G, w[18] = N, w[19] = B, w[20] = u) : u = w[20];
            let D = S ?? (F ? L : null),
                H = `${G}:${B}`;
            w[21] === Symbol.for("react.memo_cache_sentinel") ? (h = void 0, w[21] = h) : h = w[21], w[22] !== G || w[23] !== N || w[24] !== B || w[25] !== H || w[26] !== P ? (p = (0, a.jsx)(iC, {
                conversationId: G,
                viewActivation: P,
                isArchivedPreview: N,
                isReadOnlyPreview: !1,
                banner: h,
                isTemporaryChat: B,
                sharedConversationId: null
            }, H), w[22] = G, w[23] = N, w[24] = B, w[25] = H, w[26] = P, w[27] = p) : p = w[27], w[28] !== p || w[29] !== D ? (g = (0, a.jsx)(Z.a, {
                value: D,
                children: p
            }), w[28] = p, w[29] = D, w[30] = g) : g = w[30], w[31] !== g || w[32] !== c || w[33] !== u ? (f = (0, a.jsxs)(a.Fragment, {
                children: [i, l, c, u, g]
            }), w[31] = g, w[32] = c, w[33] = u, w[34] = f) : f = w[34];
            let W = f;
            w[35] !== W || w[36] !== G || w[37] !== N || w[38] !== B ? (y = B || N ? W : (0, a.jsx)(tE, {
                conversationId: G,
                children: W
            }), w[35] = W, w[36] = G, w[37] = N, w[38] = B, w[39] = y) : y = w[39];
            let U = y;
            return w[40] !== W || w[41] !== U ? (x = U, w[40] = W, w[41] = U, w[42] = x) : x = w[42], w[43] !== G || w[44] !== x ? (_ = (0, a.jsx)(tW.a, {
                conversationId: G,
                children: x
            }), w[43] = G, w[44] = x, w[45] = _) : _ = w[45], _
        }

        function iC(e) {
            let t, n, l, b, C, q, Z, ey, eb, ex, e_, eI, eS, eT, ej, eE, eP, eA, eM, eR, t_, tj, tE, tk, tO, tN, tB, tz, tG, tL, tD, tW, tq, tK, tV, tY, tX, tJ, nt, nn, na, nr, ns, no, ni, nl, nc, nu, np, ny, nx, nC, n_, nw, nI, nS, nT, nj, nE, nP, nA, nM, nR, nk, nO, nN, nB, nz, nG, nF, nL, nD, nH, nW, nq, nU, nK, nY, nX, nZ, n2, n3, n4, n6, n7, n8, n9, at, ai, al, ac, ad, au, ah, ap, ag, am, af, av, ay, ab, ax, aC, a_, aw = (0, r.c)(603),
                {
                    conversationId: aI,
                    viewActivation: aS,
                    isArchivedPreview: aT,
                    inlinePreviewLayout: aj,
                    isInlinePreview: aE,
                    hideModelPicker: aP,
                    showFilePicker: aA,
                    disableAutoFocus: aM,
                    hideInitialUserMessage: aR,
                    transcriptPresentation: ak,
                    scrollOrigin: aO,
                    isReadOnlyPreview: aN,
                    onSubmitAccepted: aB,
                    isTemporaryChat: az,
                    sharedConversationId: aF,
                    sharedPostContinuation: aL,
                    requiredSystemHints: aD,
                    routePattern: aH,
                    composerLeadingContent: aW,
                    headerLeadingContent: aq,
                    hideHeaderTitle: aU,
                    banner: aK,
                    onRetryMissingConversation: aV,
                    sharedProjectConversation: aY,
                    workspace: aQ
                } = e,
                a$ = void 0 === aS ? 0 : aS,
                aX = void 0 !== aT && aT,
                aJ = void 0 !== aE && aE,
                aZ = void 0 === aA || aA,
                a0 = void 0 !== aU && aU,
                a1 = (0, d.y)(eg.a),
                a2 = (0, m.useContext)(S.a),
                a3 = (0, d.x)(aG.f, a2),
                a4 = (0, d.z)(null != a3 && E.a);
            aw[0] !== a2 || aw[1] !== aI ? (t = {
                auth: a2,
                conversationId: aI
            }, aw[0] = a2, aw[1] = aI, aw[2] = t) : t = aw[2];
            let a5 = (0, d.x)(null != a2 && !a2.isLoading && null === a2.authMethod && aG.h, t),
                {
                    conversationId: a6
                } = (0, v.cb)();
            aw[3] !== aI || aw[4] !== aJ || aw[5] !== a6 || aw[6] !== a1 || aw[7] !== aQ ? (n = () => (0, ne.e)(aJ || null != aQ || null == a1.get(tm.j, aI) ? aI : a6 ?? ""), aw[3] = aI, aw[4] = aJ, aw[5] = a6, aw[6] = a1, aw[7] = aQ, aw[8] = n) : n = aw[8];
            let [a7, a8] = (0, m.useState)(n);
            aw[9] !== a7 || aw[10] !== aI || aw[11] !== a1 ? (l = () => a7 && !a1.get(oI.b, aI) ? aI : null, aw[9] = a7, aw[10] = aI, aw[11] = a1, aw[12] = l) : l = aw[12];
            let [a9] = (0, m.useState)(l), re = null != aF || null != a3 && !(void 0 !== aL && aL && a4);
            aw[13] !== aI || aw[14] !== aX || aw[15] !== aJ || aw[16] !== re || aw[17] !== a1 ? (b = () => {
                if (!re && !aX && !aJ) return function(e, t) {
                    let n = e.get(tp.a, t) ?? t,
                        a = e.get(R.b, t),
                        r = e.get(tb, n),
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
                        i = e.get(e4.h),
                        l = o.observedTurn,
                        c = null;

                    function d(t) {
                        for (let n of t.toReversed())
                            if (!o.initialCreationMessageIds.has(n.messageId) && (0, tr.openSpacePageSidePanelTab)(e, n.pageId, {
                                    title: n.title,
                                    openSource: "turn_auto_open"
                                }).opened) {
                                o.openedCreatedPage = !0;
                                break
                            }
                    }
                    let u = e.watch(e => {
                            let {
                                get: n
                            } = e;
                            if (n(eg.j) || null != n(tm._, t)) return;
                            let a = n(tm.R, t);
                            if (!a?.length) return;
                            let r = n(tn.e),
                                s = n(tm.j, t),
                                o = n(tm.y, t);
                            if (null != r && null != s && (null == o || "tpp" === o))
                                for (let e of a)(0, to.h)(r, e.pageId, s, o ?? null, "created")
                        }),
                        p = e.watch(n => {
                            let {
                                get: a
                            } = n, r = a(tm.ab, t), s = a(e4.h), u = a(tm.cb, t);
                            if ((0, tm.Bb)(r)) {
                                l = !1;
                                let e = a(R.b, t),
                                    n = a(tm.db, t),
                                    r = !o.observedTurn || o.attemptId !== e;
                                if (o.attemptId = e, r) {
                                    let e = c;
                                    c = null, e?.abort(), o.observedTurn = !0, o.activeRequestId = n, o.dismissed = u, o.openedCreatedPage = !1
                                } else o.activeRequestId = n ?? o.activeRequestId, o.dismissed = o.dismissed || u || i && !s;
                                i = s;
                                let h = !u && !o.dismissed && !s && !o.openedCreatedPage && !a(eg.j) && !a(tm.D, t) && !a(tf.e, t),
                                    p = [];
                                if ((r || h) && (p = a(tm.R, t) ?? []), r) {
                                    o.initialCreationMessageIds = new Set(p.map(e => e.messageId));
                                    return
                                }
                                h && d(p);
                                return
                            }
                            if (!o.observedTurn) return;
                            let p = a(tm.w, t);
                            if ("idle" !== r || u || null != p && "completed" !== p.result || null != e.get(tm.D, t) || e.get(eg.j) || e.get(tf.e, t)) {
                                o.observedTurn = !1;
                                return
                            }
                            if (l) {
                                if (o.dismissed || s || o.openedCreatedPage || a(R.b, t) !== o.attemptId) {
                                    o.observedTurn = !1;
                                    return
                                }
                                if (p?.result !== "completed") return;
                                d(a(tm.R, t) ?? []), o.observedTurn = !o.openedCreatedPage;
                                return
                            }
                            if (o.observedTurn = !1, p?.result !== "completed" || p.requestId !== o.activeRequestId) return;
                            let g = e.get(tm.N, t);
                            if (null == g) return;
                            let m = (0, h.b)({
                                    mapping: g,
                                    current_node: e.get(tm.C, t)
                                }),
                                f = m.findLast(ty.b);
                            if (f?.status !== "finished_successfully") return;
                            let v = [...(0, tg.e)(m).outputs, ...m.flatMap(e => (0, tg.c)(e).map(e => e.file))],
                                y = e.get(td.a, t)?.at(-1);
                            if (y?.turn.status !== "complete") return;
                            let b = [...(0, e6.b)(m), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                            if (!((0, e5.a)(e, b, !o.dismissed) || !o.dismissed && !o.openedCreatedPage && (0, ts.a)(e, b)) && !o.dismissed && !s && !o.openedCreatedPage) {
                                for (let t of (0, ta.c)((0, h.e)(f)).toReversed())
                                    if ((0, tr.openSpacePageSidePanelTab)(e, t.id, {
                                            openSource: "turn_auto_open",
                                            blockId: t.blockId
                                        }).opened) return;
                                if ((0, tv.canOpenChatGptFilePreview)({
                                        browserPreview: !0
                                    })) {
                                    for (let n of y.turn.items)
                                        if ("assistant-message" === n.type && n.completed)
                                            for (let [a, r] of n.contentReferences.entries()) {
                                                let s = (0, tu.a)(r),
                                                    o = null == s ? null : (0, e7.a)(s),
                                                    i = v.find(e => null != e.fileId && e.fileId === (r.file_id ?? r.id) || null != e.libraryFileId && e.libraryFileId === r.library_file_id);
                                                if ("file" !== r.type || !(0, e2.a)(r) || null == s || null == o || !(0, e7.f)(o) || null == i && null == (0, th.b)(r.sandbox_path) && !(0, th.b)(r.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > te.a) continue;
                                                let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                    d = (0, tc.b)(r, {
                                                        fileName: s,
                                                        messageId: l
                                                    });
                                                if (null == d) continue;
                                                if (e.get(eN.g)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                                let u = e.get(tm.j, t) ?? t,
                                                    h = `${l??"message"}:${String(a)}:${s}`,
                                                    p = `chatgpt-file:${u}:${h}`,
                                                    g = {
                                                        turnId: y.id,
                                                        inputMessageId: m.find(e => "user" === e.author.role)?.id ?? null,
                                                        messageId: l ?? null
                                                    },
                                                    f = new AbortController,
                                                    b = (0, tv.openChatGptFile)(e, {
                                                        conversationId: u,
                                                        fileName: s,
                                                        gizmoId: e.get(tm.T, t),
                                                        sharedConversationId: e.get(tm._, t),
                                                        target: d,
                                                        tabKey: h,
                                                        browserPreview: !0,
                                                        isAccessBlocked: e => e.get(tf.e, t),
                                                        downloadFallback: !1,
                                                        openSource: "auto_open",
                                                        originatingTurn: g,
                                                        signal: f.signal,
                                                        onOpened: () => {
                                                            let t = e.get(e3.l.activeTab$);
                                                            f.signal.aborted || t?.tabId !== p || t.tabType.kind !== e8.a || ((0, ec.a)(e, e1.CodexFileOpened, {
                                                                threadId: u,
                                                                turnId: g.turnId,
                                                                inputMessageId: g.inputMessageId ?? void 0,
                                                                messageId: g.messageId ?? void 0,
                                                                fileExtension: (0, e9.c)(s) ?? void 0,
                                                                openSource: "auto_open",
                                                                openDestination: "codex_preview"
                                                            }), (0, ec.a)(e, e1.CodexWorkspaceFilePreviewAttempted, (0, tt.a)({
                                                                modifiedClick: !1,
                                                                openedSidePanelTarget: "artifact",
                                                                openSource: "auto_open",
                                                                originatingTurn: g,
                                                                path: s,
                                                                threadId: u,
                                                                windowType: "browser"
                                                            })), (0, ti.b)(e, p, "auto_open"))
                                                        },
                                                        onClose: () => f.abort()
                                                    });
                                                c = f;
                                                let x = e.watch(e => {
                                                    let {
                                                        get: n
                                                    } = e;
                                                    (n(e4.h) && n(e3.l.activeTab$)?.tabId !== p || n(tf.e, t)) && f.abort()
                                                });
                                                b.catch(e => {
                                                    f.signal.aborted || tl.a.debug("Automatic ChatGPT artifact preview could not open", {
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
                        u(), p(), c?.abort(), null != o.attemptId && e.set(tb, n, {
                            ...o,
                            attemptId: o.attemptId
                        })
                    }
                }(a1, aI)
            }, C = [aI, aX, aJ, re, a1], aw[13] = aI, aw[14] = aX, aw[15] = aJ, aw[16] = re, aw[17] = a1, aw[18] = b, aw[19] = C) : (b = aw[18], C = aw[19]), (0, m.useEffect)(b, C);
            let rt = (0, d.x)(tZ.a, aI),
                rn = re ? null : rt;
            aw[20] !== aF ? (q = () => null == aF ? null : (0, ne.b)(), aw[20] = aF, aw[21] = q) : q = aw[21];
            let [ra] = (0, m.useState)(q), rr = ra ?? aI;
            aw[22] !== rr ? (Z = (0, em.o)({
                routeKind: "chatgpt-thread",
                conversationId: rr
            }), aw[22] = rr, aw[23] = Z) : Z = aw[23];
            let rs = null != (0, d.x)(ee.c, Z);
            aw[24] !== rr || aw[25] !== aD || aw[26] !== a1 ? (ey = () => {
                if (null != aD && 0 !== aD.length) return (0, sP.b)(a1, rr, aD)
            }, eb = [rr, aD, a1], aw[24] = rr, aw[25] = aD, aw[26] = a1, aw[27] = ey, aw[28] = eb) : (ey = aw[27], eb = aw[28]), (0, m.useEffect)(ey, eb);
            let ro = (0, m.useRef)(null),
                [ri, rl] = (0, m.useState)(null),
                [rc, rd] = (0, m.useState)(null);
            aw[29] === Symbol.for("react.memo_cache_sentinel") ? (ex = () => () => rd(null), aw[29] = ex) : ex = aw[29], aw[30] !== a$ ? (e_ = [a$], aw[30] = a$, aw[31] = e_) : e_ = aw[31], (0, m.useLayoutEffect)(ex, e_);
            let [ru, rh] = (0, m.useState)(null), rp = rc?.activation === a$ ? rc.messageId : null, rg = ru === a$, rm = (0, m.useRef)(null);
            aw[32] === Symbol.for("react.memo_cache_sentinel") ? (eI = () => {
                let e = new AbortController;
                return rm.current = e, () => e.abort()
            }, aw[32] = eI) : eI = aw[32], aw[33] !== a$ ? (eS = [a$], aw[33] = a$, aw[34] = eS) : eS = aw[34], (0, m.useLayoutEffect)(eI, eS);
            let rf = (0, f.a)(),
                rv = (0, v._)(),
                ry = (0, eH.d)(),
                rb = (0, d.x)(tm.j, aI);
            aw[35] !== a1 ? (eT = e => {
                (0, tx.c)(a1, e)
            }, aw[35] = a1, aw[36] = eT) : eT = aw[36];
            let rx = (0, m.useEffectEvent)(eT);
            aw[37] !== rb || aw[38] !== rx ? (ej = () => () => {
                null != rb && rx(rb)
            }, aw[37] = rb, aw[38] = rx, aw[39] = ej) : ej = aw[39], aw[40] !== rb ? (eE = [rb], aw[40] = rb, aw[41] = eE) : eE = aw[41], (0, m.useEffect)(ej, eE);
            let rC = (0, d.x)(ao.a, aI),
                r_ = (0, d.x)(tm.N, aI),
                rw = (0, d.x)(tA.chatGptConversationQueryById$, re || az && null != r_ ? null : rb);
            (0, d.x)(re ? null : tR.a, rb);
            let rI = (0, d.x)(!a5 && tf.e, aI),
                rS = rb ?? aI,
                rT = (0, d.x)(tm.C, aI),
                rj = (0, d.x)(tm.y, aI),
                rE = (0, d.x)(tm.T, aI),
                rP = (0, d.x)(tm.D, aI),
                rA = (0, d.x)(tm.O, aI),
                rM = (0, d.x)(tm.ab, aI),
                rR = (0, d.x)(tm.X, aI),
                rk = (0, d.x)(tm.Z, aI),
                rO = (0, d.x)(ae, aI);
            aw[42] !== rf || aw[43] !== rO ? (eP = rO ?? rf.formatMessage(eC.a.newChat), aw[42] = rf, aw[43] = rO, aw[44] = eP) : eP = aw[44];
            let rN = eP,
                rB = (0, d.x)(tm.E, aI),
                rz = (0, d.x)(tm.eb, aI),
                rG = (0, d.x)(tm.fb, aI),
                rF = (0, d.x)(tA.n, aF),
                rL = (0, m.useRef)(null),
                rD = rF.isSuccess && null != rF.data ? aF : null;
            aw[45] !== a1 ? (eA = e => {
                (0, ec.a)(a1, o.i, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, aw[45] = a1, aw[46] = eA) : eA = aw[46];
            let rH = (0, m.useEffectEvent)(eA);
            aw[47] !== rD || aw[48] !== rH ? (eM = () => {
                null != rD && rL.current !== rD && (rL.current = rD, rH(rD))
            }, aw[47] = rD, aw[48] = rH, aw[49] = eM) : eM = aw[49], aw[50] !== rD ? (eR = [rD], aw[50] = rD, aw[51] = eR) : eR = aw[51], (0, m.useEffect)(eM, eR);
            let rW = (0, d.x)(tI.q, aI),
                rq = (0, d.x)(tI.p, aI),
                rU = (0, d.x)(tI.n, aI),
                rK = (0, d.x)(tI.r, aI),
                rV = (0, d.x)(tI.o, aI),
                rY = (0, d.x)(tI.j, aI),
                r$ = (0, d.x)(tm.cb, aI),
                rX = (0, d.x)(tI.B, aI);
            aw[52] !== rM ? (t_ = (0, tm.Bb)(rM), aw[52] = rM, aw[53] = t_) : t_ = aw[53];
            let rJ = t_,
                rZ = (0, d.x)(t1, aI),
                r0 = (0, d.z)(j.v),
                r1 = (0, d.z)(j.s),
                r2 = (0, d.z)(j.u),
                r3 = (0, d.z)(j.n),
                r4 = (0, d.z)(j.b),
                r5 = (0, d.z)(j.o),
                r6 = (0, d.z)(es.pagesEnabled$);
            aw[54] === Symbol.for("react.memo_cache_sentinel") ? (tj = (0, F.a)(), aw[54] = tj) : tj = aw[54];
            let r7 = (0, eO.f)(tj);
            aw[55] === Symbol.for("react.memo_cache_sentinel") ? (tE = (0, et.b)(), aw[55] = tE) : tE = aw[55];
            let r8 = (0, eO.f)(tE),
                r9 = null != r_,
                se = (0, d.z)(oG.f),
                st = re ? rF : rw;
            a7 && null != st.data && a8(!1);
            let sn = a7 && r9 && null == st.data,
                sa = st.isLoading || !sn && st.isError;
            aw[56] !== ri || aw[57] !== rr || aw[58] !== sa || aw[59] !== re || aw[60] !== az || aw[61] !== a1 ? (tk = (e, t, n, a) => {
                !(e || a1.get(ep.a)) && ((0, tI.b)(a1, rr, t, void 0, n, a), ri?.focus(), re || sa || (0, tP.f)(a1, rr, {
                    isTemporaryChat: az
                }))
            }, aw[56] = ri, aw[57] = rr, aw[58] = sa, aw[59] = re, aw[60] = az, aw[61] = a1, aw[62] = tk) : tk = aw[62];
            let sr = tk;
            aw[63] !== aI || aw[64] !== a3 ? (tN = null == (tO = null == a3 ? null : (0, oY.a)(a3, aI)) ? void 0 : (0, as.a)(tO), aw[63] = aI, aw[64] = a3, aw[65] = tO, aw[66] = tN) : (tO = aw[65], tN = aw[66]);
            let ss = tN,
                so = tO ?? st.data,
                si = rB ? rz : so?.title,
                sl = (0, d.z)(T.h),
                sc = (0, d.z)(T.g),
                sd = "chatgpt-thread" === a1.value.routeKind && a1.value.workSideChat?.conversationId === aI,
                su = so?.conversation_origin ?? rj ?? (null != aQ || sd ? "tpp" : null),
                sh = "tpp" === su,
                sp = sh && "denied" === r0.status && "go-plan" === r0.reason,
                sg = (0, d.z)(eB.e),
                sm = (0, v.Y)(),
                sf = sm.state;
            (0, d.z)(ev.b);
            let sv = (0, d.x)(eN.e, "3901104270") && sf?.openGoalPlan === !0,
                sy = (0, eD.a)();
            aw[67] !== su ? (tB = (0, B.p)(su), aw[67] = su, aw[68] = tB) : tB = aw[68];
            let sb = tB,
                sx = (0, d.z)(nm.b),
                sC = (0, d.z)(!!sb && j.w),
                s_ = void 0 !== aN && aN || sC,
                sw = null == sg || sg.isFullWidth ? void 0 : sg.width ?? 420,
                sI = !0 === (0, d.z)(sb ? null : eQ.d),
                sS = (0, d.z)(sb ? eh.b : eh.a),
                sT = !sb && sS,
                sj = !r8 || r5 && !sb,
                sE = !re && r5 && !sb,
                sA = sE && r3,
                sM = re && so?.is_read_only === !0 || aY?.is_read_only === !0;
            aw[69] !== aI || aw[70] !== re || aw[71] !== a1 ? (tz = () => null, aw[69] = aI, aw[70] = re, aw[71] = a1, aw[72] = tz) : tz = aw[72];
            let [sR] = (0, m.useState)(tz), sk = so?.gizmo_id ?? rE ?? sR?.gizmoId ?? null;
            aw[73] !== sk || aw[74] !== re ? (tG = re || null == sk || (0, t8.a)(sk) ? null : sk, aw[73] = sk, aw[74] = re, aw[75] = tG) : tG = aw[75];
            let sO = tG,
                sN = (0, d.x)(tT, rr);
            aw[76] !== so || aw[77] !== aI || aw[78] !== rN || aw[79] !== sm.pathname || aw[80] !== aF || aw[81] !== a3 ? (tL = (0, tF.d)({
                conversation: so,
                conversationId: aI,
                conversationTitle: rN,
                pathname: sm.pathname,
                sharedConversationId: aF,
                sharedPost: a3
            }), aw[76] = so, aw[77] = aI, aw[78] = rN, aw[79] = sm.pathname, aw[80] = aF, aw[81] = a3, aw[82] = tL) : tL = aw[82];
            let sB = tL,
                sz = !r2 && null == so && null == sR,
                sG = null != rb && !rI && !sz && (r2 || r1),
                sF = null;
            re || (sF = null != so ? (0, ew.B)(so) : (0, t8.a)(rE) ? rE : sR?.projectId ?? null);
            let sL = (0, d.x)(eJ.c, re ? null : aI),
                sD = re || sb || null != sF || sL || null == sN ? sO : sN.id;
            aw[83] !== rr || aw[84] !== sD || aw[85] !== sm.pathname ? (tD = {
                gizmoId: sD,
                conversationId: rr,
                visitKey: sm.pathname
            }, aw[83] = rr, aw[84] = sD, aw[85] = sm.pathname, aw[86] = tD) : tD = aw[86];
            let sH = (0, d.x)(oT.d, tD),
                {
                    data: sW
                } = (0, i.a)({
                    enabled: null != sF,
                    queryFn: () => {
                        if (null == sF) throw Error("Expected a ChatGPT project id");
                        return (0, N.c)(sF)
                    },
                    queryKey: (0, ew.E)(sF ?? ""),
                    staleTime: eL.b.ONE_MINUTE
                }),
                sq = null != sF && (sW?.gizmo.share_recipient !== "private" || (sW?.gizmo.sharing?.subjects?.length ?? 0) > 0);
            aw[87] !== so?.context_scopes || aw[88] !== sW?.gizmo.gizmo_snorlax_type ? (tW = so?.context_scopes?.includes("HEALTH") === !0 || sW?.gizmo.gizmo_snorlax_type === "potion", aw[87] = so?.context_scopes, aw[88] = sW?.gizmo.gizmo_snorlax_type, aw[89] = tW) : tW = aw[89];
            let sU = tW,
                sK = (0, oE.a)(so?.context_scopes, {
                    projectType: sW?.gizmo.gizmo_snorlax_type,
                    projectId: sF,
                    lockedProjectId: se?.projectId
                }),
                sV = rI || sq || sU || sK;
            aw[90] !== sW?.gizmo.display.name || aw[91] !== sW?.gizmo.display.name.trim ? (tq = sW?.gizmo.display.name.trim() || null, aw[90] = sW?.gizmo.display.name, aw[91] = sW?.gizmo.display.name.trim, aw[92] = tq) : tq = aw[92];
            let sY = tq,
                sQ = sW?.gizmo.display.theme,
                s$ = sW?.gizmo.display.emoji;
            aw[93] !== sW ? (tK = "shared" === (0, t9.b)(sW) ? (0, a.jsx)(U.b, {
                icon: {
                    assets: {
                        16: iy,
                        20: ib.a
                    }
                }
            }) : void 0, aw[93] = sW, aw[94] = tK) : tK = aw[94], aw[95] !== sQ || aw[96] !== s$ || aw[97] !== tK ? (tV = (0, a.jsx)(ed.a, {
                className: "icon-leading",
                size: "leading",
                color: sQ,
                icon: s$,
                sharedIcon: tK
            }), aw[95] = sQ, aw[96] = s$, aw[97] = tK, aw[98] = tV) : tV = aw[98];
            let sX = tV,
                sJ = (0, d.x)(tm.i, aI),
                sZ = sJ?.metadata ?? so?.context_truncation_continuation,
                s0 = re || az || null != aY || null == sl || so?.owner?.user_id == null || null == sF || so.owner.user_id === (sc ? sl.split("__")[0] : sl) ? null : (0, n0.d)(sF, so.conversation_id, so.owner.user_id),
                s1 = !re && !aX && !s_,
                s2 = (0, d.x)(s1 ? oq.c : null, aI),
                s3 = s2?.isReviewing === !0,
                s4 = null == s2 ? r_ : s2.conversation.mapping,
                s5 = null == s2 ? rT : s2.conversation.current_node,
                s6 = null == r_ ? so : null,
                s7 = s4 ?? s6?.mapping,
                s8 = (0, eO.i)();
            aw[99] !== s7 || aw[100] !== s8 ? (tY = function(e, t) {
                if (null != e && Object.values(e).some(e => e?.message != null && (0, oj.b)(e.message))) return () => (0, eO.d)(t, "2347981323").get("enabled", !1)
            }(s7, s8), aw[99] = s7, aw[100] = s8, aw[101] = tY) : tY = aw[101];
            let s9 = tY,
                oe = (0, d.z)(null != s9 ? eK.h : void 0),
                ot = (0, d.x)(null != s9 && !re && !aX && !s3 && eq.a, aI),
                on = (0, d.z)(ot ? eU.a : void 0);
            aw[102] === Symbol.for("react.memo_cache_sentinel") ? (tX = (0, tM.a)(), aw[102] = tX) : tX = aw[102];
            let oa = tX;
            aw[103] === Symbol.for("react.memo_cache_sentinel") ? (tJ = new WeakMap, aw[103] = tJ) : tJ = aw[103];
            let or = tJ;
            aw[104] !== sS || aw[105] !== sT || aw[106] !== sZ || aw[107] !== su || aw[108] !== s5 || aw[109] !== s4 || aw[110] !== sx || aw[111] !== s9 || aw[112] !== s6 || aw[113] !== aX || aw[114] !== re || aw[115] !== rJ || aw[116] !== sb || aw[117] !== rA || aw[118] !== rU || aw[119] !== rV || aw[120] !== rq || aw[121] !== rW || aw[122] !== rK || aw[123] !== s3 || aw[124] !== a1.get || aw[125] !== s2?.isEntering || aw[126] !== rC || aw[127] !== rM || aw[128] !== on || aw[129] !== oe ? (nt = () => oa({
                conversation: s6,
                contextContinuation: sZ,
                clinicalSearchEnabled: sT,
                clinicalCitationsEnabled: sS,
                enableCloudBrowserActivity: sx,
                conversationOrigin: su,
                enableVoiceImageLoadingFix: s9,
                voiceImageSessionId: oe,
                voiceImageGenerationSpawnIds: on,
                enableImageGenerationLoadingState: !re && !aX && !s3 && "error" !== rM,
                getRenderTelemetry: e => (0, ih.c)(a1.get, e),
                isWorkConversation: sb,
                isStreaming: !re && !aX && !s3 && rJ,
                mode: "conversation",
                mcpResponseCache: or,
                moderationDisclaimersByMessageId: rA,
                ...rC,
                pendingSubmission: null == rW || re || s3 || s2?.isEntering ? null : {
                    attachments: rU,
                    commentAttachments: rV,
                    prompt: rW,
                    ...rq,
                    selectedTextAttachments: rK
                },
                threadCurrentNode: s5,
                threadMapping: s4
            }), aw[104] = sS, aw[105] = sT, aw[106] = sZ, aw[107] = su, aw[108] = s5, aw[109] = s4, aw[110] = sx, aw[111] = s9, aw[112] = s6, aw[113] = aX, aw[114] = re, aw[115] = rJ, aw[116] = sb, aw[117] = rA, aw[118] = rU, aw[119] = rV, aw[120] = rq, aw[121] = rW, aw[122] = rK, aw[123] = s3, aw[124] = a1.get, aw[125] = s2?.isEntering, aw[126] = rC, aw[127] = rM, aw[128] = on, aw[129] = oe, aw[130] = nt) : nt = aw[130], s2?.isEntering, aw[131] !== nt ? (nn = nt(), aw[131] = nt, aw[132] = nn) : nn = aw[132];
            let {
                isConversationEmpty: os,
                renderedConversation: oo,
                renderedTurns: oi,
                showPendingLoadingMessage: ol
            } = nn;
            aw[133] !== aJ || aw[134] !== sb || aw[135] !== oo || aw[136] !== a1 ? (na = () => {
                if (!aJ && sb) return a1.set(iv.b, oo), () => {
                    a1.get(iv.b) === oo && a1.set(iv.b, null)
                }
            }, nr = [aJ, sb, oo, a1], aw[133] = aJ, aw[134] = sb, aw[135] = oo, aw[136] = a1, aw[137] = na, aw[138] = nr) : (na = aw[137], nr = aw[138]), (0, m.useEffect)(na, nr);
            let oc = (0, d.x)(eZ.g, aI),
                od = ol && null == oc,
                ou = !sb && !re && !aJ && !aX,
                oh = (0, d.x)(sT || aJ || re ? null : M.a, aI),
                op = (oh?.length ?? 0) > 0,
                og = (0, d.x)(ou ? R.b : null, aI),
                om = JSON.stringify([aI, a$]),
                [of, ov] = (0, m.useState)(null),
                oy = function(e, t) {
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
                    let d = null == n ? [] : (0, h.b)(n, B.n),
                        u = null == e || e.visitKey !== c,
                        p = d.find(B.n)?.id ?? (u || i ? null : e.userMessageId),
                        g = i ? null : d.findLast(z)?.id ?? null,
                        m = !u && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != p && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== p),
                        f = new Set(u ? [] : e.observedSummaryRequestIds),
                        v = !u && !m && e.hasConsumedSummaryRequest,
                        y = !v && !u && null != e.conversation && (o || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != g && !f.has(g);
                    if (null != n && (u || null == e.conversation || !o))
                        for (let e of Object.values(n.mapping)) e?.message?.id != null && z(e.message) && f.add(e.message.id);
                    else null != g && f.add(g);
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
                        userMessageId: p,
                        hasConsumedSummaryRequest: v || null != g,
                        isOpen: s ? !u && e.suppressAutoOpen && e.isOpen : r && (l && (u || !e.hasGoal) || y) || !u && (!m || l) && (!e.hasGoal || l) && e.isOpen,
                        shouldPreventAutoFocus: u || m || l && !e.hasGoal || y && !e.isOpen || e.shouldPreventAutoFocus
                    }
                }(of, {
                    completionAttemptId: og,
                    allowAutoOpen: !(0, J.a)("(width < 768px)"),
                    suppressAutoOpen: sv,
                    conversation: ou && (sn || !sa) ? oo : null,
                    isTurnActive: rJ,
                    hasGoal: op,
                    isPendingUserTurn: rY && null != rW && !rJ,
                    visitKey: om
                });
            oy !== of && ov(oy);
            let ob = null == aQ && !sT && !aJ && !re && (sh || ou) && !aX,
                ox = ob && oo?.mapping === r_ && oo?.current_node === rT,
                o_ = (0, d.x)(ox ? tm.q : null, aI),
                ow = oo?.mapping,
                oA = oo?.current_node;
            aw[139] !== ow || aw[140] !== oA ? (ns = c()(() => {
                let e = null == ow ? [] : (0, h.a)({
                    mapping: ow,
                    current_node: oA
                });
                return {
                    messages: e,
                    resources: (0, tg.e)(e)
                }
            }), aw[139] = ow, aw[140] = oA, aw[141] = ns) : ns = aw[141];
            let oM = ns;
            aw[142] !== ou || !1 !== aw[143] || aw[144] !== rY || aw[145] !== ob || aw[146] !== rJ || aw[147] !== sb || aw[148] !== r6 || aw[149] !== rU || aw[150] !== oM || aw[151] !== oi || aw[152] !== o_ ? (no = ob ? c()(() => (0, nh.a)({
                automationReferences: o_,
                includePages: r6,
                includeSources: sb || !1,
                isTurnActive: rJ || rY,
                ...oM(),
                pendingAttachments: rY ? rU : [],
                turns: oi
            })) : null, ni = ou ? no?.() : null, aw[142] = ou, aw[143] = !1, aw[144] = rY, aw[145] = ob, aw[146] = rJ, aw[147] = sb, aw[148] = r6, aw[149] = rU, aw[150] = oM, aw[151] = oi, aw[152] = o_, aw[153] = no, aw[154] = ni) : (no = aw[153], ni = aw[154]);
            let oR = ni,
                ok = op || null != oR && (oR.outputs.length > 0 || oR.progressSteps.length > 0 || oR.automationIds.length > 0 || oR.subagents.length > 0 || !rI && oR.browserScreenshots.length > 0),
                oO = ob && (!ou || ok),
                oN = oO && null == sg,
                oF = JSON.stringify([om, null != sg]),
                oL = ou ? oy.isOpen : void 0,
                oD = oO && !sg?.isFullWidth;
            aw[155] !== sw || aw[156] !== oF || aw[157] !== oL || aw[158] !== oD ? (nl = {
                contentShiftResetKey: oF,
                controlledIsOpen: oL,
                isEnabled: oD,
                floatingPanelWidth: sw
            }, aw[155] = sw, aw[156] = oF, aw[157] = oL, aw[158] = oD, aw[159] = nl) : nl = aw[159];
            let oH = (0, eG.a)(nl),
                oU = rb ?? aI,
                oV = sh && null == rG,
                oX = rP ?? rX,
                oJ = st.isLoading && !r9,
                oZ = !oJ && (null != so || r9),
                o0 = oZ && (sn || !sa),
                o1 = st.isError && !sn;
            aw[160] !== st.error || aw[161] !== aJ ? (nc = aJ || (0, eV.e)(st.error) || !(st.error instanceof eV.FetchError && [401, 403, 404].includes(st.error.status)), aw[160] = st.error, aw[161] = aJ, aw[162] = nc) : nc = aw[162];
            let o2 = nc;
            aw[163] !== aI || aw[164] !== re || aw[165] !== rb ? (nu = null, re || (nu = rb ?? ((0, ne.e)(aI) ? null : aI)), aw[163] = aI, aw[164] = re, aw[165] = rb, aw[166] = nu) : nu = aw[166], aw[167] !== rp || aw[168] !== so || aw[169] !== su || aw[170] !== rf || aw[171] !== az || aw[172] !== sb || aw[173] !== sp || aw[174] !== rv || aw[175] !== nu || aw[176] !== aH || aw[177] !== a1 || aw[178] !== a$ ? (np = (e, t) => {
                let n = void 0 !== t && t;
                if (null == nu || null != rp || sp) return;
                let a = rm.current?.signal;
                null == a || a.aborted || (rd({
                    messageId: e,
                    activation: a$
                }), (0, tm.h)(a1, {
                    conversationId: nu,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, e$.a)(a1, "opened"), rv(null == aH ? (0, o7.c)(t, {
                        isTemporaryChat: az
                    }) : (0, v.C)(aH, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, e$.a)(a1, "failed"), rd(null), a1.get(K.f).danger(rf.formatMessage({
                        id: "chatgptConversations.branchFailed",
                        defaultMessage: "Failed to create chat"
                    }), {
                        errorAnalytics: {
                            toastId: "branch_conversation_failed",
                            operation: "branch_conversation",
                            errorCategory: "conversation",
                            conversationId: nu ?? void 0,
                            retryable: !0,
                            userFacingError: {
                                surface: (0, t4.b)(null == su && null == so ? null : sb),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, aw[167] = rp, aw[168] = so, aw[169] = su, aw[170] = rf, aw[171] = az, aw[172] = sb, aw[173] = sp, aw[174] = rv, aw[175] = nu, aw[176] = aH, aw[177] = a1, aw[178] = a$, aw[179] = np) : np = aw[179];
            let o4 = (0, eW.a)(np);
            aw[180] !== so || aw[181] !== aI || aw[182] !== su || aw[183] !== rf || aw[184] !== sI || aw[185] !== az || aw[186] !== sb || aw[187] !== a1 || aw[188] !== rb ? (ny = async (e, t, n, a) => {
                if (!sI) try {
                    await async function(e, t) {
                        let {
                            conversationId: n,
                            isTemporaryChat: a = !1,
                            messageId: r,
                            prompt: s,
                            renderFormat: o,
                            inlineSystemHints: i
                        } = t;
                        if (e.get(tI.j, n)) throw new t$.a("edit_message_busy", "The chat is busy.");
                        let l = e.get(tm.y, n);
                        if ("tpp" === l) throw new t$.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                        if (!e.get(t1, n)) throw new t$.a("edit_message_busy", "The chat is busy.");
                        let c = e.get(tQ.b, {
                            conversationId: n,
                            messageId: r
                        });
                        if (null == c) throw new t$.a("edit_message_target_unavailable", "The user message could not be edited.");
                        let {
                            selectedModel: d
                        } = c, u = s.trim(), h = (0, tQ.c)(c.message, e.get, i), g = (0, t0.c)({
                            message: c.message,
                            prompt: u,
                            renderFormat: o,
                            systemHints: h,
                            inlineSystemHints: i
                        }), m = (0, p.f)(g.message.metadata), f = g.message.content, v = "multimodal_text" === f.content_type && f.parts.some(e => "string" != typeof e);
                        if (0 === u.length && 0 === m.length && !v) throw new t$.a("edit_message_empty", "The edited message cannot be empty.");
                        if (e.get(eN.e, "3574573347")) {
                            let t = e.get(tQ.a, n);
                            t?.messageId === r && t.prompt === s && tU()((0, tQ.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(tQ.a, n, {
                                messageId: r,
                                prompt: s,
                                isTemporaryChat: a,
                                inlineSystemHints: i
                            }), (0, tP.f)(e, n, {
                                isTemporaryChat: a
                            }))
                        }
                        let y = t2(e.get, n),
                            b = y.request.current,
                            x = () => t2(e.get, n).request.current === b && tU()(e.get(tQ.b, {
                                conversationId: n,
                                messageId: r
                            }), c) && !(0, tm.Bb)(e.get(tm.ab, n));
                        e.set(tI.j, n, !0);
                        try {
                            if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(tZ.a, n) && (await b.stop(), await b.closed), !x()) throw new t$.a("edit_message_target_unavailable", "The edited message or active response changed.");
                            await (0, t0.submitChatGPTCompletion)(e, {
                                isSubmissionCurrent: x,
                                isRequestCurrent: () => e.get(tm.C, n) === g.message.id,
                                attachments: m,
                                conversationId: n,
                                isTemporaryChat: a,
                                model: d.slug,
                                parentMessageId: c.parentMessageId,
                                prompt: u,
                                systemHints: h,
                                thinkingEffort: d.thinkingEffort,
                                userCompletionMessages: g
                            })
                        } finally {
                            e.set(tI.j, n, !1)
                        }
                    }(a1, {
                        conversationId: aI,
                        isTemporaryChat: az,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, t4.c)(t);
                    throw a1.get(K.f).danger(rf.formatMessage({
                        id: "chatgptConversations.editMessageFailed",
                        defaultMessage: "Failed to edit message"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.editMessageFailed",
                            operation: "edit_message",
                            apiErrorCode: e.errorCode,
                            retryable: !0,
                            errorCategory: "conversation",
                            conversationId: rb ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, t4.b)(null == su && null == so ? null : sb),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, aw[180] = so, aw[181] = aI, aw[182] = su, aw[183] = rf, aw[184] = sI, aw[185] = az, aw[186] = sb, aw[187] = a1, aw[188] = rb, aw[189] = ny) : ny = aw[189];
            let o5 = (0, eW.a)(ny);
            aw[190] !== rr || aw[191] !== so || aw[192] !== aI || aw[193] !== su || aw[194] !== rf || aw[195] !== sI || aw[196] !== az || aw[197] !== sb || aw[198] !== sp || aw[199] !== rv || aw[200] !== aV || aw[201] !== a1 || aw[202] !== rb ? (nx = async (e, t) => {
                if (!sI && !sp) try {
                    let n = a1.get(rQ.e, aI);
                    if (n?.startsNewWorkConversation || null == a1.get(tm.j, aI) || (0, e0.j)(a1.get(tm.V, aI)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, h.e)(n.prompt),
                            r = (0, O.i)(n.prompt.metadata, a, (0, p.e)(n.prompt.metadata), (0, g.x)(a)),
                            s = (0, G.a)(n.prompt, a, r),
                            o = a1.get(tI.u, rr),
                            i = null != s.renderFormat ? s.message : a,
                            l = o.length > 0 ? o : i,
                            c = o.length > 0 ? void 0 : s.renderFormat ?? "plain";
                        if (null != aV) return void await aV(l, c);
                        if (null == a1.get(tm.j, aI) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, eu.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${aI}`;
                            (0, D.E)(t, (t, n) => n ? t : e) || (0, tI._)(a1, aI, e), (0, D.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, h.i)((0, h.s)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, g.x)(a);
                            (0, H.n)(a1, "work"), await rv("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: o.length > 0 ? o : t,
                                    prefillPromptFormat: o.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (sb && !az && (0, L.cb)(a1, (0, Q.b)({
                                entrypoint: "home"
                            }))) return void await rv("/");
                        let d = (0, h.l)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, t7.g)(a1, d);
                        (0, tI.$)(a1, u, t.model);
                        let m = a1.get(tm.T, aI);
                        (0, H.n)(a1, sb ? "work" : "chat"), await rv({
                            pathname: "/",
                            search: (0, o7.e)("", az)
                        }, {
                            state: {
                                initialChatGptConversationId: u,
                                project: null,
                                chatGptProjectId: (0, t8.a)(m) ? m : null,
                                chatGptCustomGptId: (0, t8.a)(m) ? null : m,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: sb
                            }
                        });
                        return
                    }
                    await (0, rQ.h)(a1, {
                        conversationId: aI,
                        isTemporaryChat: az,
                        messageId: e,
                        retry: sb && "error_retry" === t.source && null == t.model.thinkingEffort ? {
                            ...t,
                            model: a1.get(tI.v, aI)
                        } : t
                    })
                } catch {
                    a1.get(K.f).danger(rf.formatMessage({
                        id: "chatgptConversations.regenerate.failed",
                        defaultMessage: "Failed to regenerate response"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.regenerate.failed",
                            operation: "regenerate_response",
                            errorCategory: "conversation",
                            conversationId: rb ?? void 0,
                            userFacingError: {
                                surface: (0, t4.b)(null == su && null == so ? null : sb),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, aw[190] = rr, aw[191] = so, aw[192] = aI, aw[193] = su, aw[194] = rf, aw[195] = sI, aw[196] = az, aw[197] = sb, aw[198] = sp, aw[199] = rv, aw[200] = aV, aw[201] = a1, aw[202] = rb, aw[203] = nx) : nx = aw[203];
            let o6 = (0, eW.a)(nx);
            aw[204] !== so || aw[205] !== aI || aw[206] !== rN || aw[207] !== rf || aw[208] !== rg || aw[209] !== az || aw[210] !== rv || aw[211] !== ry || aw[212] !== sF || aw[213] !== a1 || aw[214] !== rb || aw[215] !== sR || aw[216] !== a$ ? (nC = () => {
                if (rg || null == rb) return;
                let e = a1.get(j.u);
                if (!e && !a1.get(j.s) || !e && null == so && null == sR) return;
                let t = rm.current?.signal;
                null == t || t.aborted || (rh(a$), (e ? (0, tC.f)(a1, {
                    chatGptThreadId: aI,
                    conversationTitle: rN
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, w.a)(a1, e);
                    if ("created" === e.status) return null == n || t.aborted || a1.get(K.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, w.a)(a1, e)
                }) : (0, x.a)({
                    scope: a1,
                    projectId: sF ?? void 0,
                    prompt: `Continuing from ${(0,W.f)({conversationId:rb,title:rN?.trim()||"ChatGPT thread"})}`
                }).then(ij)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? ry(n) : rv((0, o7.c)(n, {
                            isTemporaryChat: az
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (rh(null), a1.get(K.f).danger(rf.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, aw[204] = so, aw[205] = aI, aw[206] = rN, aw[207] = rf, aw[208] = rg, aw[209] = az, aw[210] = rv, aw[211] = ry, aw[212] = sF, aw[213] = a1, aw[214] = rb, aw[215] = sR, aw[216] = a$, aw[217] = nC) : nC = aw[217];
            let o8 = nC;
            aw[218] !== aI || aw[219] !== rv || aw[220] !== a1 || aw[221] !== ra || aw[222] !== aF || aw[223] !== a3 ? (n_ = () => {
                if (null != a3) {
                    if ((0, ne.e)(aI)) {
                        let e = (0, aG.a)(a1, a3, aI);
                        null != e && (a1.get(E.a) ? a1.set(o$.a, e) : rv((0, o7.c)(e)))
                    }
                    return
                }
                let e = a1.query.getData(tA.n, aF);
                null != e && null != aF && null != ra && ((0, tm.ob)(a1, {
                    conversation: e,
                    conversationId: ra,
                    sharedConversationId: aF
                }), a1.get(E.a) ? a1.set(o$.a, ra) : rv((0, o7.c)(ra)))
            }, aw[218] = aI, aw[219] = rv, aw[220] = a1, aw[221] = ra, aw[222] = aF, aw[223] = a3, aw[224] = n_) : n_ = aw[224];
            let o9 = (0, eW.a)(n_);
            aw[225] !== aQ ? (nw = aQ?.mcpAppContext == null ? null : {
                hostId: ef.a,
                server: "codex_apps",
                connectorId: aQ.mcpAppContext.id
            }, aw[225] = aQ, aw[226] = nw) : nw = aw[226];
            let ie = (0, d.x)(er.b, nw),
                it = aQ?.fullscreenContent != null ? "content" : "workspace",
                ia = (0, A.a)(aJ ? "embedded" : it),
                is = !ie && (sn || !st.isError) && !aX && !s_ && (null == a3 || a2?.authMethod === "chatgpt" || a4) && (!re || null != so),
                io = r4 || s_ || sM || sA || sp,
                ii = io || s3 || s2?.needsEntry === !0;
            if (s3) {
                let e;
                aw[227] !== rf ? (e = rf.formatMessage(oq.d.readOnlyPlaceholder), aw[227] = rf, aw[228] = e) : e = aw[228], nI = e
            } else !io && s2?.needsEntry && (nI = !1);
            let il = is && !io && !re && !sa && !sI && !rJ && !rY && !r$ && !sH,
                ic = !is || re || ii || sa ? null : ri;
            if (aw[229] !== sH || aw[230] !== rp || aw[231] !== sS || aw[232] !== sT || aw[233] !== so?.current_node || aw[234] !== aI || aw[235] !== sO || aw[236] !== sx || aw[237] !== oX || aw[238] !== o4 || aw[239] !== o5 || aw[240] !== o6 || aw[241] !== aR || aw[242] !== aX || aw[243] !== ii || aw[244] !== sa || aw[245] !== sV || aw[246] !== s_ || aw[247] !== re || aw[248] !== rY || aw[249] !== az || aw[250] !== sh || aw[251] !== rJ || aw[252] !== sb || aw[253] !== sA || aw[254] !== sp || aw[255] !== rn || aw[256] !== rU || aw[257] !== nu || aw[258] !== oo || aw[259] !== oi || aw[260] !== s3 || aw[261] !== rR || aw[262] !== a1.get || aw[263] !== rk || aw[264] !== tO?.current_node || aw[265] !== aY || aw[266] !== is || aw[267] !== od || aw[268] !== rC || aw[269] !== rZ) {
                let e;
                aw[271] !== sS || aw[272] !== sT || aw[273] !== sx || aw[274] !== sb || aw[275] !== rn || aw[276] !== oo || aw[277] !== oi || aw[278] !== s3 || aw[279] !== a1.get || aw[280] !== rC ? (e = s3 || null == rn || null == oo ? oi : (0, tS.a)({
                    ...oo,
                    current_node: rn.promptMessageId
                }, {
                    clinicalSearchEnabled: sT,
                    clinicalCitationsEnabled: sS,
                    enableCloudBrowserActivity: sx,
                    ...rC,
                    isWorkConversation: sb,
                    getRenderTelemetry: e => (0, ih.c)(a1.get, e)
                }), aw[271] = sS, aw[272] = sT, aw[273] = sx, aw[274] = sb, aw[275] = rn, aw[276] = oo, aw[277] = oi, aw[278] = s3, aw[279] = a1.get, aw[280] = rC, aw[281] = e) : e = aw[281];
                let t = (0, tM.c)({
                    paragen: rn,
                    hideInitialUserMessage: aR,
                    browserConversationId: void 0,
                    conversationId: aI,
                    enableCloudBrowserActivity: sx,
                    errorMessage: oX,
                    branchingMessageId: rp,
                    isReadOnly: aX || s_ || re || null != aY,
                    isTemporaryChat: az,
                    isWorkConversation: sh,
                    onRegenerateResponse: sH || re || null != aY || aX || s_ || sA || sp || rJ || rY ? void 0 : o6,
                    onEditUserMessage: sH || null == nu || sh || aX || s_ || sA || !rZ || rY ? void 0 : o5,
                    onFork: null == nu || az || sA || sp || aX || s_ ? void 0 : o4,
                    pendingSubmissionAttachments: rU,
                    shareEnabled: null == sO && !az && !re && !aX && !s_ && !sV,
                    readAloudEnabled: !re && !s_,
                    feedbackEnabled: !re && !s_ && null == aY,
                    renderedTurns: e,
                    safetyReview: rR,
                    sharedConversationLastMessageId: tO?.current_node ?? rk ?? (re ? so?.current_node : null),
                    showPendingLoadingMessage: od,
                    showRequestUserInputStatus: is && !ii && !sa
                });
                nS = s3 ? (0, oq.a)(t) : t, aw[229] = sH, aw[230] = rp, aw[231] = sS, aw[232] = sT, aw[233] = so?.current_node, aw[234] = aI, aw[235] = sO, aw[236] = sx, aw[237] = oX, aw[238] = o4, aw[239] = o5, aw[240] = o6, aw[241] = aR, aw[242] = aX, aw[243] = ii, aw[244] = sa, aw[245] = sV, aw[246] = s_, aw[247] = re, aw[248] = rY, aw[249] = az, aw[250] = sh, aw[251] = rJ, aw[252] = sb, aw[253] = sA, aw[254] = sp, aw[255] = rn, aw[256] = rU, aw[257] = nu, aw[258] = oo, aw[259] = oi, aw[260] = s3, aw[261] = rR, aw[262] = a1.get, aw[263] = rk, aw[264] = tO?.current_node, aw[265] = aY, aw[266] = is, aw[267] = od, aw[268] = rC, aw[269] = rZ, aw[270] = nS
            } else nS = aw[270];
            let id = nS;
            aw[282] !== rf ? (nT = rf.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation"
            }), aw[282] = rf, aw[283] = nT) : nT = aw[283];
            let iu = nT;
            aw[284] !== aI || aw[285] !== sO ? (nj = null == sO ? null : (0, a.jsx)(t6.ChatGptGizmoHeader, {
                conversationId: aI,
                gizmoId: sO
            }), aw[284] = aI, aw[285] = sO, aw[286] = nj) : nj = aw[286];
            let ig = nj;
            aw[287] !== aX || aw[288] !== re || aw[289] !== sh ? (nE = !sh || re || aX ? null : (0, a.jsx)($.a, {
                hostId: ef.a
            }), aw[287] = aX, aw[288] = re, aw[289] = sh, aw[290] = nE) : nE = aw[290];
            let ix = nE,
                iC = !re && null == aY && !aX && !az && !rI,
                iE = (0, d.x)(!iC || aJ || s_ ? null : oP.a, aI);
            aw[291] !== aI || aw[292] !== a1 || aw[293] !== iC ? (nP = iC ? () => {
                let e = a1.get(oP.b, aI);
                e?.title && oB(a1, {
                    conversationId: aI,
                    courseId: e.course_id
                }, {
                    preserveFocus: !0
                })
            } : void 0, aw[291] = aI, aw[292] = a1, aw[293] = iC, aw[294] = nP) : nP = aw[294];
            let iP = nP;
            aw[295] !== il || aw[296] !== aI || aw[297] !== sI || aw[298] !== s2 ? (nA = null != s2 ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: sI,
                children: (0, a.jsx)(ar, {
                    conversationId: aI,
                    placement: "progress",
                    canStartSection: il
                })
            }) : null, aw[295] = il, aw[296] = aI, aw[297] = sI, aw[298] = s2, aw[299] = nA) : nA = aw[299];
            let iA = nA,
                iM = !sL && !aX && !s_,
                iR = !az && !re && null != rb,
                ik = !a0 && iM && null != rO;
            aw[300] !== az ? (nM = !az && (0, V.a)({
                browser: !0
            }), aw[300] = az, aw[301] = nM) : nM = aw[301];
            let iO = nM,
                iN = (0, d.x)(!!ik && !iR && !re && !sb && !!is && !ii && tf.d, aI),
                iB = ik && (iR || iO || iN);
            aw[302] !== aq || aw[303] !== sb || aw[304] !== sY ? (nR = (0, V.a)({
                browser: !0
            }) && !sb && null != sY && null == aq, aw[302] = aq, aw[303] = sb, aw[304] = sY, aw[305] = nR) : nR = aw[305];
            let iz = nR;
            aw[306] !== iB || aw[307] !== iz || aw[308] !== sX || aw[309] !== sF || aw[310] !== sY ? (nk = iB && null != sF && !iz ? {
                icon: sX,
                name: sY
            } : void 0, aw[306] = iB, aw[307] = iz, aw[308] = sX, aw[309] = sF, aw[310] = sY, aw[311] = nk) : nk = aw[311];
            let iG = nk;
            aw[312] !== aI || aw[313] !== sL || aw[314] !== iB || aw[315] !== rO || aw[316] !== iP || aw[317] !== iG ? (nO = sL ? (0, a.jsx)(eX.BusinessAgentConversationHeader, {
                conversationId: aI,
                fallback: null
            }) : (0, a.jsx)(n5, {
                onClick: iP,
                hasTitleMenu: iB,
                project: iG,
                title: rO
            }), aw[312] = aI, aw[313] = sL, aw[314] = iB, aw[315] = rO, aw[316] = iP, aw[317] = iG, aw[318] = nO) : nO = aw[318];
            let iF = nO,
                iL = null != s2,
                iD = oV && !re && !aX,
                iH = sL ? null : ig;
            aw[319] !== iz || aw[320] !== sX || aw[321] !== sF || aw[322] !== sY || aw[323] !== iG ? (nN = null != sF && null == iG ? (0, a.jsx)(n1, {
                projectId: sF,
                name: sY,
                icon: sX,
                linkToProject: iz
            }) : null, aw[319] = iz, aw[320] = sX, aw[321] = sF, aw[322] = sY, aw[323] = iG, aw[324] = nN) : nN = aw[324], aw[325] !== aq || aw[326] !== iH || aw[327] !== nN ? (nB = (0, a.jsxs)(a.Fragment, {
                children: [aq, iH, nN]
            }), aw[325] = aq, aw[326] = iH, aw[327] = nN, aw[328] = nB) : nB = aw[328];
            let iW = sL || !a0 ? iF : null;
            aw[329] !== az || aw[330] !== ix || aw[331] !== iL || aw[332] !== iD || aw[333] !== nB || aw[334] !== iW ? (nz = (0, a.jsx)(n$.a, {
                hasSectionProgress: iL,
                isTemporaryChat: az,
                isCloudTask: iD,
                leading: nB,
                start: iW,
                startActions: ix
            }), aw[329] = az, aw[330] = ix, aw[331] = iL, aw[332] = iD, aw[333] = nB, aw[334] = iW, aw[335] = nz) : nz = aw[335];
            let iq = nz,
                iU = oi.flatMap(iT).flatMap(iS),
                iK = iU.flatMap(iI);
            if (!re && (st.error instanceof eV.FetchError && 423 === st.error.status || sK && null == se)) {
                let e;
                return aw[336] !== st || aw[337] !== aI || aw[338] !== a1 ? (e = (0, a.jsx)(oz.a, {
                    onUnlocked: () => {
                        (0, oG.g)(a1.get(oG.f)?.projectId, [aI]), st.refetch()
                    }
                }), aw[336] = st, aw[337] = aI, aw[338] = a1, aw[339] = e) : e = aw[339], e
            }
            if (null != s0) {
                let e;
                return aw[340] !== s0 ? (e = (0, a.jsx)(v.l, {
                    replace: !0,
                    to: s0
                }), aw[340] = s0, aw[341] = e) : e = aw[341], e
            }
            let iV = e => iM && iR ? (0, a.jsx)(nV, {
                onTitleClick: iP,
                showMenu: iB || null != e,
                triggerButton: e,
                conversationId: aI,
                title: rN,
                isHandoffPending: rg,
                isArchived: so?.is_archived === !0,
                isChatConversation: null != so && !sb,
                onHandoff: sG ? o8 : void 0,
                onOpenMessage: async e => {
                    rm.current?.signal.aborted === !1 && a1.get(_.b)?.pathname === a1.value.pathname && await ro.current?.scrollToMessage(e)
                },
                projectId: sF,
                projectName: sY,
                serverConversationId: rb,
                conversationOrigin: su
            }) : null;
            aw[342] !== so?.current_node || aw[343] !== aI || aw[344] !== sU || aw[345] !== sK || aw[346] !== re || aw[347] !== az || aw[348] !== rJ || aw[349] !== sF || aw[350] !== oi.length || aw[351] !== rb || aw[352] !== aY || aw[353] !== rI || aw[354] !== iM || aw[355] !== rT ? (nG = !iM || az || re || sK ? null : (0, a.jsx)(tH, {
                conversationId: aI,
                projectId: sF,
                sharedProjectConversation: aY,
                isReady: (null != rb || null != aY) && oi.length > 0 && (rT ?? so?.current_node) != null,
                isRestricted: rI || sU,
                isStreaming: rJ
            }), aw[342] = so?.current_node, aw[343] = aI, aw[344] = sU, aw[345] = sK, aw[346] = re, aw[347] = az, aw[348] = rJ, aw[349] = sF, aw[350] = oi.length, aw[351] = rb, aw[352] = aY, aw[353] = rI, aw[354] = iM, aw[355] = rT, aw[356] = nG) : nG = aw[356];
            let iY = nG,
                iQ = null != iE ? aI : null;
            aw[357] !== so || aw[358] !== r9 || aw[359] !== aX || aw[360] !== oJ || aw[361] !== aJ || aw[362] !== s_ || aw[363] !== re || aw[364] !== sb ? (nF = sb || re || aJ || s_ || aX || oJ || null == so && !r9 ? null : (0, a.jsx)(P.a, {}), aw[357] = so, aw[358] = r9, aw[359] = aX, aw[360] = oJ, aw[361] = aJ, aw[362] = s_, aw[363] = re, aw[364] = sb, aw[365] = nF) : nF = aw[365], aw[366] !== st.fetchStatus || aw[367] !== o1 || aw[368] !== aJ || aw[369] !== o0 ? (nL = !1, aw[366] = st.fetchStatus, aw[367] = o1, aw[368] = aJ, aw[369] = o0, aw[370] = nL) : nL = aw[370], aw[371] !== st.data || aw[372] !== st.fetchStatus || aw[373] !== so || aw[374] !== aI || aw[375] !== o1 || aw[376] !== r9 || aw[377] !== os || aw[378] !== oJ || !1 !== aw[379] || aw[380] !== oi.length ? (nD = null, aw[371] = st.data, aw[372] = st.fetchStatus, aw[373] = so, aw[374] = aI, aw[375] = o1, aw[376] = r9, aw[377] = os, aw[378] = oJ, aw[379] = !1, aw[380] = oi.length, aw[381] = nD) : nD = aw[381];
            let i$ = !re && !s_ && (0, et.c)() ? (0, a.jsx)(en.c, {
                callIds: iK,
                hostId: ef.a,
                conversationId: (0, u.Se)(`chatgpt:${aI}`)
            }) : null;
            aw[382] !== rN || aw[383] !== aJ || aw[384] !== a3 || aw[385] !== aQ?.documentTitle ? (nH = aJ ? null : (0, a.jsx)(Y.a, {
                title: null == a3 ? aQ?.documentTitle ?? rN : null
            }), aw[382] = rN, aw[383] = aJ, aw[384] = a3, aw[385] = aQ?.documentTitle, aw[386] = nH) : nH = aw[386], aw[387] !== aI || aw[388] !== aJ || aw[389] !== sI || aw[390] !== re || aw[391] !== az || aw[392] !== sb || aw[393] !== id ? (nW = aJ || sb ? null : (0, a.jsx)(nf.a, {
                conversationId: aI,
                canCopy: !sI,
                paragenEnabled: !re,
                turns: id,
                loadHistory: !az && !re
            }), aw[387] = aI, aw[388] = aJ, aw[389] = sI, aw[390] = re, aw[391] = az, aw[392] = sb, aw[393] = id, aw[394] = nW) : nW = aw[394];
            let iX = null != so || r9;
            aw[395] !== o1 || aw[396] !== sb || aw[397] !== iX ? (nq = (0, a.jsx)(eY.a, {
                isWorkConversation: sb,
                hasConversationContent: iX,
                hasLoadError: o1
            }), aw[395] = o1, aw[396] = sb, aw[397] = iX, aw[398] = nq) : nq = aw[398], aw[399] !== aI || aw[400] !== o1 || aw[401] !== oZ || aw[402] !== aJ || aw[403] !== sm.pathname || aw[404] !== a1 || aw[405] !== aF ? (nU = aJ || !oZ || o1 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(oK, {
                    sharedConversationId: aF
                }), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(el.a, {
                        onCommit: () => eo.b.contentCommitted(a1, aI, aF, sm.pathname),
                        onPaint: () => eo.b.pagePainted(a1, aI, aF)
                    }, aF ?? aI)
                })]
            }), aw[399] = aI, aw[400] = o1, aw[401] = oZ, aw[402] = aJ, aw[403] = sm.pathname, aw[404] = a1, aw[405] = aF, aw[406] = nU) : nU = aw[406];
            let iJ = aJ || null != aQ ? null : (0, a.jsxs)(nv.a, {
                    chatIcon: null == sF ? void 0 : sX,
                    header: iq,
                    title: rO,
                    fullScreenTitle: iF,
                    isArchivedPreview: aX,
                    children: [null == iA ? null : (0, a.jsx)(nJ, {
                        children: iA
                    }), a2?.authMethod === "chatgpt" ? (0, a.jsx)(X.v, {
                        productExperience: sb ? "work" : "chat"
                    }) : null, re ? (0, a.jsx)(oQ.a, {
                        children: null == sB ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(o3, {
                                data: sB
                            })
                        })
                    }) : null, iC ? (0, a.jsx)(nb, {
                        conversationId: aI,
                        scheduledAutomationId: sv ? sf?.sidebarAutomationId : void 0
                    }, aI) : null, az && !re && !aX && null == sk && null == sD && null == sF && !sU && null != oo && (0, h.a)(oo).some(iw) ? (0, a.jsx)(I.a.HeaderAction, {
                        actionId: "chatgpt-conversation-save",
                        align: "end",
                        order: 100,
                        children: (0, a.jsx)(ir, {
                            conversationId: aI
                        })
                    }) : null, iM && (0, a.jsx)(n$.b, {
                        hasTitleMenu: iB,
                        menu: !a0 && (iV() ?? (iB && (0, a.jsx)(nQ, {
                            title: rN,
                            includePlugins: iO,
                            lockdownConversationId: iN ? aI : null
                        }))),
                        children: iY
                    })]
                }),
                iZ = t5.a,
                i0 = !aZ || !is || ia.isHidden || ii || sH || sI || sa || aX || s_ || sM || sA || sp || r$ || rY,
                i1 = sF,
                i2 = null != sD,
                i3 = ez.c;
            aw[407] !== aJ || aw[408] !== sy || aw[409] !== sb || aw[410] !== iA || aw[411] !== aQ ? (nK = aJ || null != aQ ? iA : sy && (0, eF.a)() && !sb && (0, a.jsx)("div", {
                className: "h-px",
                "aria-hidden": !0
            }), aw[407] = aJ, aw[408] = sy, aw[409] = sb, aw[410] = iA, aw[411] = aQ, aw[412] = nK) : nK = aw[412];
            let i4 = null == s2 ? "flex h-full min-h-0 flex-col" : "h-full",
                i5 = si ?? rN,
                i6 = !sI,
                i7 = !rs && !aJ && !re && !ie && !ia.isHidden,
                i8 = rI || sj,
                i9 = sg?.isFullWidth === !0,
                le = null == sg ? oH.contentShift : void 0,
                lt = s2?.selectedIndex;
            aw[413] !== il || aw[414] !== aI || aw[415] !== s2 ? (nY = null != s2 ? (0, a.jsx)(ar, {
                conversationId: aI,
                placement: "composer",
                canStartSection: il
            }) : void 0, aw[413] = il, aw[414] = aI, aw[415] = s2, aw[416] = nY) : nY = aw[416], aw[417] !== aI || aw[418] !== s2 ? (nX = null != s2 ? (0, a.jsx)(aa, {
                conversationId: aI
            }) : void 0, aw[417] = aI, aw[418] = s2, aw[419] = nX) : nX = aw[419];
            let ln = !sb,
                la = s3 ? null : oX;
            aw[420] !== st || aw[421] !== o2 ? (nZ = o2 ? () => {
                st.refetch({
                    cancelRefetch: !1
                })
            } : void 0, aw[420] = st, aw[421] = o2, aw[422] = nZ) : nZ = aw[422];
            let lr = oi.length > 0,
                ls = nI,
                lo = !sU && (null == sF || null != sW),
                li = null == s2 && !sd,
                ll = st.isFetching,
                lc = sn && !aJ && !re && !sb && null == sk,
                ld = !s3 && rJ;
            aw[423] !== so?.is_archived || aw[424] !== aI || aw[425] !== aX || aw[426] !== aJ || aw[427] !== re || aw[428] !== az || aw[429] !== rJ || aw[430] !== sb ? (n2 = aJ || !sb || re || aX || so?.is_archived === !0 || az ? null : (0, a.jsx)(m.Suspense, {
                fallback: null,
                children: (0, a.jsx)(an, {
                    conversationId: aI,
                    isTurnActive: rJ
                })
            }), aw[423] = so?.is_archived, aw[424] = aI, aw[425] = aX, aw[426] = aJ, aw[427] = re, aw[428] = az, aw[429] = rJ, aw[430] = sb, aw[431] = n2) : n2 = aw[431], aw[432] !== aI || aw[433] !== aX || aw[434] !== rb ? (n3 = aX ? (0, a.jsx)(ek, {
                conversationId: rb ?? aI,
                kind: "chatgpt"
            }, rb ?? aI) : void 0, aw[432] = aI, aw[433] = aX, aw[434] = rb, aw[435] = n3) : n3 = aw[435];
            let lu = !s3 && od;
            aw[436] !== sD ? (n4 = null != sD ? (0, a.jsx)(oS.GptPluginMigrationBanner, {
                gizmoId: sD
            }) : null, aw[436] = sD, aw[437] = n4) : n4 = aw[437], aw[438] !== sG || aw[439] !== o8 || aw[440] !== rg || aw[441] !== az || aw[442] !== sE || aw[443] !== r3 ? (n6 = sE && !az ? (0, a.jsx)(ng, {
                canConvert: sG,
                isChatInstantAvailable: !r3,
                isConverting: rg,
                onConvert: o8
            }) : null, aw[438] = sG, aw[439] = o8, aw[440] = rg, aw[441] = az, aw[442] = sE, aw[443] = r3, aw[444] = n6) : n6 = aw[444], aw[445] !== sr || aw[446] !== s_ ? (n7 = sr.bind(null, s_), aw[445] = sr, aw[446] = s_, aw[447] = n7) : n7 = aw[447], aw[448] !== o9 || aw[449] !== re || aw[450] !== aB ? (n8 = e => {
                aB?.(e), re && o9()
            }, aw[448] = o9, aw[449] = re, aw[450] = aB, aw[451] = n8) : n8 = aw[451], aw[452] !== st.isFetching || aw[453] !== sH || aw[454] !== rr || aw[455] !== sD || aw[456] !== aW || aw[457] !== aI || aw[458] !== iu || aw[459] !== ro || aw[460] !== aM || aw[461] !== o1 || aw[462] !== aP || aw[463] !== a9 || aw[464] !== ii || aw[465] !== os || aw[466] !== sa || aw[467] !== oJ || aw[468] !== rs || aw[469] !== aJ || aw[470] !== re || aw[471] !== az || aw[472] !== sh || aw[473] !== nI || aw[474] !== aD || aw[475] !== aO || aw[476] !== rS || aw[477] !== aF || aw[478] !== ss || aw[479] !== is || aw[480] !== aZ || aw[481] !== i6 || aw[482] !== i7 || aw[483] !== i8 || aw[484] !== i9 || aw[485] !== le || aw[486] !== lt || aw[487] !== nY || aw[488] !== nX || aw[489] !== ln || aw[490] !== la || aw[491] !== nZ || aw[492] !== lr || aw[493] !== lo || aw[494] !== li || aw[495] !== lc || aw[496] !== ld || aw[497] !== n2 || aw[498] !== n3 || aw[499] !== lu || aw[500] !== n4 || aw[501] !== n6 || aw[502] !== n7 || aw[503] !== n8 || aw[504] !== i5 || aw[505] !== ak || aw[506] !== id || aw[507] !== aQ ? (n9 = (0, a.jsx)(oC, {
                ref: ro,
                printTitle: i5,
                trackShownImpressions: i6,
                trackReadState: i7,
                workspace: aQ,
                shouldBlockMcpApps: i8,
                isCoveredByFloatingPanel: i9,
                isFormOnly: rs,
                isInlinePreview: aJ,
                hideModelPicker: aP,
                showFilePicker: aZ,
                disableAutoFocus: aM,
                transcriptPresentation: ak,
                scrollOrigin: aO,
                composerRef: rl,
                contentX: le,
                conversationId: aI,
                composerConversationId: rr,
                sectionIndex: lt,
                composerLeadingContent: aW,
                aboveComposerContent: nY,
                historyLoadingContent: nX,
                requiredSystemHints: aD,
                isChatConversation: ln,
                customGptId: sD,
                conversationLoadingLabel: iu,
                entries: id,
                errorMessage: la,
                hasLoadError: o1,
                onRetryLoad: nZ,
                hasRenderableTurns: lr,
                isComposerDisabled: ii,
                readOnlyPlaceholder: ls,
                moreDetailsEnabled: lo,
                isConversationEmpty: os,
                showEmptyState: li,
                isConversationFetching: ll,
                isConversationLoading: oJ,
                isSharedConversation: re,
                isSubmitDisabled: sa,
                retainLiveModelPicker: lc,
                isTemporaryChat: az,
                isTurnActive: ld,
                isWorkConversation: sh,
                onboardingPrelude: n2,
                scrollStateConversationId: rS,
                initialResponsePlacementKey: a9,
                sharedConversationId: aF,
                sharedPostRegulatedConnectorKind: ss,
                showComposer: is,
                archivedPreviewFooter: n3,
                showPendingLoadingMessage: lu,
                gptPluginMigrationBanner: n4,
                awaitingGptContinuation: sH,
                workOnlyConversionBanner: n6,
                onAddSelectedText: n7,
                onSubmitAccepted: n8
            }), aw[452] = st.isFetching, aw[453] = sH, aw[454] = rr, aw[455] = sD, aw[456] = aW, aw[457] = aI, aw[458] = iu, aw[459] = ro, aw[460] = aM, aw[461] = o1, aw[462] = aP, aw[463] = a9, aw[464] = ii, aw[465] = os, aw[466] = sa, aw[467] = oJ, aw[468] = rs, aw[469] = aJ, aw[470] = re, aw[471] = az, aw[472] = sh, aw[473] = nI, aw[474] = aD, aw[475] = aO, aw[476] = rS, aw[477] = aF, aw[478] = ss, aw[479] = is, aw[480] = aZ, aw[481] = i6, aw[482] = i7, aw[483] = i8, aw[484] = i9, aw[485] = le, aw[486] = lt, aw[487] = nY, aw[488] = nX, aw[489] = ln, aw[490] = la, aw[491] = nZ, aw[492] = lr, aw[493] = lo, aw[494] = li, aw[495] = lc, aw[496] = ld, aw[497] = n2, aw[498] = n3, aw[499] = lu, aw[500] = n4, aw[501] = n6, aw[502] = n7, aw[503] = n8, aw[504] = i5, aw[505] = ak, aw[506] = id, aw[507] = aQ, aw[508] = n9) : n9 = aw[508], aw[509] !== oy || aw[510] !== no || aw[511] !== ou || aw[512] !== ov || aw[513] !== rI || aw[514] !== oN || aw[515] !== ic || aw[516] !== oU || aw[517] !== oH ? (at = oN && null != no ? (0, a.jsx)(nd, {
                composerActions: ic,
                conversationId: oU,
                controlledState: ou ? {
                    isOpen: oy.isOpen,
                    shouldPreventAutoFocus: oy.shouldPreventAutoFocus,
                    onOpenChange: e => {
                        ov({
                            ...oy,
                            isOpen: e,
                            shouldPreventAutoFocus: !e && oy.shouldPreventAutoFocus
                        })
                    }
                } : void 0,
                readData: no,
                display: oH,
                shouldBlockExternalEgress: rI
            }) : null, aw[509] = oy, aw[510] = no, aw[511] = ou, aw[512] = ov, aw[513] = rI, aw[514] = oN, aw[515] = ic, aw[516] = oU, aw[517] = oH, aw[518] = at) : at = aw[518], aw[519] === Symbol.for("react.memo_cache_sentinel") ? (ai = (0, a.jsx)(t3.a, {}), aw[519] = ai) : ai = aw[519], aw[520] !== aJ ? (al = null, aw[520] = aJ, aw[521] = al) : al = aw[521], aw[522] !== sI || aw[523] !== n9 || aw[524] !== at || aw[525] !== al || aw[526] !== i4 ? (ac = (0, a.jsxs)("div", {
                className: i4,
                inert: sI,
                children: [n9, at, ai, al]
            }), aw[522] = sI, aw[523] = n9, aw[524] = at, aw[525] = al, aw[526] = i4, aw[527] = ac) : ac = aw[527];
            let lh = !s_ && (0, et.c)() ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(im, {
                    conversationId: aI,
                    shouldBlockExternalEgress: rI || sj,
                    widgets: iU.filter(i_)
                }), re ? null : (0, a.jsx)(ea.a, {
                    blockedWidgetSource: r7 ? void 0 : "descriptor",
                    transcriptMcpAppIds: (0, ip.c)(aI, iU, r7),
                    shouldBlockExternalEgress: rI || sj
                })]
            }) : null;
            aw[528] !== i3 || aw[529] !== aK || aw[530] !== sw || aw[531] !== ac || aw[532] !== lh || aw[533] !== nK ? (ad = (0, a.jsxs)(i3, {
                floatingPanelWidth: sw,
                header: nK,
                banner: aK,
                children: [ac, lh]
            }), aw[528] = i3, aw[529] = aK, aw[530] = sw, aw[531] = ac, aw[532] = lh, aw[533] = nK, aw[534] = ad) : ad = aw[534], aw[535] !== iZ || aw[536] !== rr || aw[537] !== su || aw[538] !== az || aw[539] !== sF || aw[540] !== ad || aw[541] !== i0 || aw[542] !== i2 ? (au = (0, a.jsx)(iZ, {
                conversationId: rr,
                conversationOrigin: su,
                disabled: i0,
                isTemporaryChat: az,
                projectId: i1,
                requiresGizmoId: i2,
                children: ad
            }), aw[535] = iZ, aw[536] = rr, aw[537] = su, aw[538] = az, aw[539] = sF, aw[540] = ad, aw[541] = i0, aw[542] = i2, aw[543] = au) : au = aw[543], aw[544] !== oW || aw[545] !== au || aw[546] !== iQ || aw[547] !== nF || aw[548] !== nL || aw[549] !== nD || aw[550] !== i$ || aw[551] !== nH || aw[552] !== nW || aw[553] !== nq || aw[554] !== nU || aw[555] !== iJ ? (ah = (0, a.jsxs)(oW, {
                courseChatId: iQ,
                children: [nF, nL, nD, i$, nH, nW, nq, nU, iJ, null, au]
            }), aw[544] = oW, aw[545] = au, aw[546] = iQ, aw[547] = nF, aw[548] = nL, aw[549] = nD, aw[550] = i$, aw[551] = nH, aw[552] = nW, aw[553] = nq, aw[554] = nU, aw[555] = iJ, aw[556] = ah) : ah = aw[556];
            let lp = ah,
                lg = !aJ && !sh,
                lm = re || !st.isFetchedAfterMount || st.isFetching || sn ? null : st.error;
            aw[557] !== aI || aw[558] !== aJ || aw[559] !== a1 || aw[560] !== aF ? (ap = e => {
                aJ || eo.b.loadFailed(a1, aI, aF, e)
            }, aw[557] = aI, aw[558] = aJ, aw[559] = a1, aw[560] = aF, aw[561] = ap) : ap = aw[561];
            let lf = o1 ? st.error : null,
                lv = null == su && null == so ? null : sb,
                ly = !sb && !oJ;
            aw[562] !== ri || aw[563] !== rr || aw[564] !== aF ? (ag = {
                conversationId: rr,
                composer: ri,
                sharedConversationId: aF
            }, aw[562] = ri, aw[563] = rr, aw[564] = aF, aw[565] = ag) : ag = aw[565], aw[566] !== aI || aw[567] !== aJ || aw[568] !== rb || aw[569] !== aF ? (am = aJ ? null : (0, eo.a)(rb ?? aI, aF), aw[566] = aI, aw[567] = aJ, aw[568] = rb, aw[569] = aF, aw[570] = am) : am = aw[570];
            let lb = !o0;
            return aw[571] !== lb ? (af = (0, a.jsx)(s.b, {
                name: "conversation data",
                active: lb
            }), aw[571] = lb, aw[572] = af) : af = aw[572], aw[573] !== sI ? (av = (0, a.jsx)(s.b, {
                name: "workspace policy",
                active: sI
            }), aw[573] = sI, aw[574] = av) : av = aw[574], aw[575] !== aj || aw[576] !== lp || aw[577] !== aI || aw[578] !== iY || !1 !== aw[579] || aw[580] !== sb || aw[581] !== iV ? (ay = aj ? (0, a.jsx)(aj, {
                buttons: iY,
                conversationId: aI,
                isWorkConversation: sb || !1,
                renderMenu: iV,
                children: lp
            }) : lp, aw[575] = aj, aw[576] = lp, aw[577] = aI, aw[578] = iY, aw[579] = !1, aw[580] = sb, aw[581] = iV, aw[582] = ay) : ay = aw[582], aw[583] !== am || aw[584] !== af || aw[585] !== av || aw[586] !== ay ? (ab = (0, a.jsxs)(ei.g, {
                destinationKey: am,
                children: [af, av, ay]
            }), aw[583] = am, aw[584] = af, aw[585] = av, aw[586] = ay, aw[587] = ab) : ab = aw[587], aw[588] !== ag || aw[589] !== ab ? (ax = (0, a.jsx)(tw.a, {
                value: ag,
                children: ab
            }), aw[588] = ag, aw[589] = ab, aw[590] = ax) : ax = aw[590], aw[591] !== ly || aw[592] !== ax ? (aC = (0, a.jsx)(y.a, {
                enabled: ly,
                children: ax
            }), aw[591] = ly, aw[592] = ax, aw[593] = aC) : aC = aw[593], aw[594] !== o2 || aw[595] !== rb || aw[596] !== lg || aw[597] !== lm || aw[598] !== ap || aw[599] !== lf || aw[600] !== lv || aw[601] !== aC ? (a_ = (0, a.jsx)(k.a, {
                showChatFallback: lg,
                conversationId: rb,
                error: lm,
                onInlineLoadError: ap,
                loadError: lf,
                canRetry: o2,
                isWorkConversation: lv,
                children: aC
            }), aw[594] = o2, aw[595] = rb, aw[596] = lg, aw[597] = lm, aw[598] = ap, aw[599] = lf, aw[600] = lv, aw[601] = aC, aw[602] = a_) : a_ = aw[602], a_
        }

        function i_(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function iw(e) {
            return "user" === e.author.role
        }

        function iI(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function iS(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function iT(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function ij(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
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
                let t, n, g, m, f, v, y, b, x, C, _, w, I, S, T, j, E, P, A = (0, r.c)(73),
                    {
                        initialPlacementKey: M,
                        isActiveVoiceConversation: R,
                        isLoadingHistory: k,
                        latestUserTurnKey: O,
                        conversationId: N,
                        onResponseSpacerStateChange: B,
                        preserveResponseViewport: z
                    } = e,
                    G = void 0 !== R && R,
                    F = void 0 !== k && k,
                    L = (0, i.i)();
                A[0] !== G || A[1] !== L ? (t = G && (0, i.d)(L, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), A[0] = G, A[1] = L, A[2] = t) : t = A[2];
                let D = t,
                    H = (0, o.useRef)(O),
                    W = (0, s.x)(null == N ? 0 : u.b, N ?? ""),
                    q = (0, o.useRef)(W),
                    U = (0, o.useRef)(F),
                    K = (0, o.useRef)(null),
                    V = (0, o.useRef)(null),
                    Y = (0, o.useRef)(null),
                    Q = (0, d.b)();
                A[3] !== Q ? (n = () => new c.a(Q), A[3] = Q, A[4] = n) : n = A[4];
                let [$] = (0, o.useState)(n), {
                    clear: X,
                    consumeGrowth: J,
                    getHeightPx: Z,
                    ensureScrollRoomForAnchor: ee,
                    place: et,
                    prepareThreadEndContent: en
                } = $, {
                    addScrollListener: ea,
                    getScrollElement: er,
                    responseSpacerController: es
                } = Q;
                A[5] !== er || A[6] !== O || A[7] !== et || A[8] !== z || A[9] !== $ || A[10] !== Q || A[11] !== D ? (g = e => {
                    if (!z?.(e => {
                            let t = er();
                            null != t && et(p(t, e) ?? void 0)
                        })) {
                        if (null == e && null != O && !D) {
                            Q.holdViewport(), K.current = {
                                previousKey: O,
                                signal: $.getPendingPlacementSignal()
                            };
                            return
                        }
                        et(e)
                    }
                }, A[5] = er, A[6] = O, A[7] = et, A[8] = z, A[9] = $, A[10] = Q, A[11] = D, A[12] = g) : g = A[12];
                let eo = (0, h.a)(g);
                A[13] !== X || A[14] !== Q ? (m = e => {
                    X(), Q.scrollToBottom(e)
                }, A[13] = X, A[14] = Q, A[15] = m) : m = A[15];
                let ei = (0, h.a)(m);
                A[16] !== ei || A[17] !== W ? (f = () => {
                    q.current !== W && (q.current = W, ei())
                }, v = [W, ei], A[16] = ei, A[17] = W, A[18] = f, A[19] = v) : (f = A[18], v = A[19]), (0, o.useLayoutEffect)(f, v), A[20] !== J || A[21] !== Z || A[22] !== en || A[23] !== $.height || A[24] !== $.holdViewport || A[25] !== es || A[26] !== ei ? (y = () => es.register({
                    consumeGrowth: J,
                    getHeightPx: Z,
                    holdViewport: $.holdViewport,
                    prepareThreadEndContent: en,
                    scrollToBottom: ei
                }, $.height).dispose, A[20] = J, A[21] = Z, A[22] = en, A[23] = $.height, A[24] = $.holdViewport, A[25] = es, A[26] = ei, A[27] = y) : y = A[27], A[28] !== J || A[29] !== Z || A[30] !== en || A[31] !== $ || A[32] !== es || A[33] !== ei ? (b = [J, Z, en, $, es, ei], A[28] = J, A[29] = Z, A[30] = en, A[31] = $, A[32] = es, A[33] = ei, A[34] = b) : b = A[34], (0, o.useInsertionEffect)(y, b), A[35] !== $ ? (x = (e, t) => {
                    let n = K.current;
                    null != n && n.previousKey !== e && (K.current = null, n.signal.aborted || $.revealSubmittedTurn(t)), V.current = {
                        turnKey: e,
                        element: t
                    }, Y.current?.(e, t)
                }, A[35] = $, A[36] = x) : x = A[36];
                let el = (0, h.a)(x);
                A[37] === Symbol.for("react.memo_cache_sentinel") ? (C = e => {
                    Y.current = e;
                    let t = V.current;
                    return null != t && e(t.turnKey, t.element), () => {
                        Y.current = null
                    }
                }, A[37] = C) : C = A[37];
                let ec = (0, h.a)(C);
                A[38] !== er || A[39] !== O || A[40] !== et || A[41] !== D ? (_ = () => {
                    let e = er();
                    if (null != e && 0 !== e.clientHeight)
                        if (D && null != O) {
                            let t = p(e, O);
                            if (null == t) return;
                            et(t)
                        } else et()
                }, A[38] = er, A[39] = O, A[40] = et, A[41] = D, A[42] = _) : _ = A[42];
                let ed = (0, o.useEffectEvent)(_);
                return A[43] !== X || A[44] !== J || A[45] !== ee || A[46] !== Z || A[47] !== B || A[48] !== el || A[49] !== eo || A[50] !== D ? (w = () => (B({
                    voiceAutoScrollEnabled: D,
                    clear: X,
                    consumeGrowth: J,
                    getHeightPx: Z,
                    ensureScrollRoomForAnchor: ee,
                    onTurnLayoutReady: el,
                    place: eo
                }), () => {
                    B(null)
                }), I = [X, J, Z, ee, B, el, eo, D], A[43] = X, A[44] = J, A[45] = ee, A[46] = Z, A[47] = B, A[48] = el, A[49] = eo, A[50] = D, A[51] = w, A[52] = I) : (w = A[51], I = A[52]), (0, o.useLayoutEffect)(w, I), A[53] !== er || A[54] !== F || A[55] !== O || A[56] !== eo || A[57] !== $ || A[58] !== ec || A[59] !== D ? (S = () => {
                    let e = H.current,
                        t = U.current;
                    if (H.current = O, U.current = F, D && !F && !t && null != O && O !== e) {
                        var n, a, r, s, o;
                        let e, t, i, l, c;
                        return n = O, a = er, r = eo, s = ec, o = $.getPendingPlacementSignal(), t = null, i = null, l = !1, c = () => {
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
                }, T = [er, F, O, eo, ec, $, D], A[53] = er, A[54] = F, A[55] = O, A[56] = eo, A[57] = $, A[58] = ec, A[59] = D, A[60] = S, A[61] = T) : (S = A[60], T = A[61]), (0, o.useLayoutEffect)(S, T), A[62] !== ea || A[63] !== M || A[64] !== ed || A[65] !== $ ? (j = () => {
                    if (null == M) return;
                    let e = $.getPendingPlacementSignal();
                    return ea(() => {
                        e.aborted || ed()
                    })
                }, A[62] = ea, A[63] = M, A[64] = ed, A[65] = $, A[66] = j) : j = A[66], A[67] !== ea || A[68] !== M || A[69] !== $ ? (E = [ea, M, $], A[67] = ea, A[68] = M, A[69] = $, A[70] = E) : E = A[70], (0, o.useLayoutEffect)(j, E), A[71] !== $ ? (P = (0, a.jsx)(l.a, {
                    controller: $
                }), A[71] = $, A[72] = P) : P = A[72], P
            }
        })
    }),
    TRQ3: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("BolX"),
            o = n("zd8w"),
            i = n("rEML"),
            l = n("OWtl"),
            c = n("Ow2S"),
            d = n("wwvo"),
            u = n("x4uR"),
            h = n("u4MG"),
            p = n("OOaz"),
            g = n("dQRk"),
            m = n("jAnS");
        let f = (0, s.d)(l.a, (e, t) => {
            let {
                get: n
            } = t, a = n(g.j, e);
            return null != a ? a : n(g.E, e) || n(c.j, e) || null != n(c.A, e) ? void 0 : null
        });

        function v(e) {
            let t, n, a = (0, r.c)(7),
                {
                    to: s,
                    mask: l,
                    sourceKey: c,
                    state: d
                } = e,
                u = (0, o.useContext)(i.c)?.router;
            return a[0] !== l || a[1] !== u || a[2] !== c || a[3] !== d || a[4] !== s ? (t = () => {
                u?.state.location.key === c && "idle" === u.state.navigation.state && u.navigate(s, {
                    replace: !0,
                    mask: l,
                    state: d
                })
            }, n = [u, s, l, c, d], a[0] = l, a[1] = u, a[2] = c, a[3] = d, a[4] = s, a[5] = t, a[6] = n) : (t = a[5], n = a[6]), (0, o.useEffect)(t, n), null
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, c, y, b, x = (0, r.c)(53),
                    {
                        children: C,
                        conversationId: _,
                        routePattern: w,
                        homePath: I
                    } = e,
                    S = void 0 === I ? "/" : I,
                    T = (0, s.y)(l.a),
                    {
                        hash: j,
                        key: E,
                        mask: P,
                        pathname: A,
                        search: M,
                        state: R
                    } = (0, i.Y)(),
                    {
                        conversationId: k,
                        gizmoId: O
                    } = (0, i.cb)(),
                    N = (0, s.x)(f, _),
                    B = (0, s.x)(g.E, _),
                    z = (0, s.x)(g.T, _),
                    G = B ? z : O;
                x[0] !== G ? (t = null != G && (0, h.a)(G) ? G : null, x[0] = G, x[1] = t) : t = x[1], x[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                    enabled: !1
                }, x[2] = n) : n = x[2];
                let {
                    data: F
                } = (0, s.x)(u.b, t, n);
                x[3] !== G ? (o = null == G || (0, h.a)(G) ? null : G, x[3] = G, x[4] = o) : o = x[4], x[5] === Symbol.for("react.memo_cache_sentinel") ? (c = {
                    enabled: !1
                }, x[5] = c) : c = x[5];
                let {
                    data: L
                } = (0, s.x)(d.b, o, c);
                if (null === N || (0, m.i)(M) && null != N && !B) {
                    let e;
                    return x[6] !== S || x[7] !== M ? (e = (0, a.jsx)(i.l, {
                        replace: !0,
                        to: {
                            pathname: S,
                            search: M
                        }
                    }), x[6] = S, x[7] = M, x[8] = e) : e = x[8], e
                }
                if (x[9] !== _ || x[10] !== k || x[11] !== L || x[12] !== G || x[13] !== j || x[14] !== E || x[15] !== P || x[16] !== A || x[17] !== F || x[18] !== N || x[19] !== w || x[20] !== T || x[21] !== M || x[22] !== R) {
                    let e = null != w ? (0, i.C)(w, {
                            conversationId: N ?? _
                        }) : (0, m.c)(N ?? _, {
                            gizmoId: F?.gizmo.short_url ?? L?.gizmo.short_url ?? G
                        }),
                        t = new URLSearchParams(M),
                        n = null != N && t.has("mfr"),
                        r = T.get(g.y, _),
                        s = R;
                    if (n) {
                        let e, n;
                        if (t.delete("mfr"), x[24] !== R ? (e = R ?? {}, x[24] = R, x[25] = e) : e = x[25], x[26] !== e) {
                            let {
                                modelFirstLanding: t,
                                modelFirstFallback: a,
                                ...r
                            } = e;
                            n = r, x[26] = e, x[27] = n
                        } else n = x[27];
                        s = n
                    }
                    if (null != k && (0, p.e)(k) && null != N) {
                        let e;
                        x[28] !== s ? (e = {
                            ...s,
                            fromChatGptFirstSend: !0
                        }, x[28] = s, x[29] = e) : e = x[29], s = e
                    }
                    if (y = null, A !== e || n) {
                        let o, l = (0, i.y)({
                            hash: n ? "" : j,
                            pathname: e,
                            search: n ? t.toString() : M
                        });
                        if ("tpp" === r || "flora" === r) {
                            let e, t, n = s,
                                a = R?.workTurnVisit;
                            x[30] !== E || x[31] !== T || x[32] !== a ? (e = (0, m.f)(T, E, a), x[30] = E, x[31] = T, x[32] = a, x[33] = e) : e = x[33], x[34] !== s || x[35] !== e ? (t = {
                                ...n,
                                workTurnVisit: e
                            }, x[34] = s, x[35] = e, x[36] = t) : t = x[36], s = t
                        }
                        let c = R?.businessProfileShareConversation;
                        if (null != c && (c.conversationId === _ || c.conversationId === k)) {
                            let e, t, n = N ?? _;
                            x[37] !== c || x[38] !== n ? (e = {
                                ...c,
                                conversationId: n
                            }, x[37] = c, x[38] = n, x[39] = e) : e = x[39], x[40] !== s || x[41] !== e ? (t = {
                                ...s,
                                businessProfileShareConversation: e
                            }, x[40] = s, x[41] = e, x[42] = t) : t = x[42], s = t
                        }
                        x[43] !== E || x[44] !== P || x[45] !== s || x[46] !== N || x[47] !== c || x[48] !== l ? (o = P && null != c && (c.intent?.destination?.kind !== "agent" || null == N) ? (0, a.jsx)(v, {
                            to: l,
                            mask: P,
                            sourceKey: E,
                            state: s
                        }) : (0, a.jsx)(i.l, {
                            replace: !0,
                            state: s,
                            to: l
                        }), x[43] = E, x[44] = P, x[45] = s, x[46] = N, x[47] = c, x[48] = l, x[49] = o) : o = x[49], y = o
                    }
                    x[9] = _, x[10] = k, x[11] = L, x[12] = G, x[13] = j, x[14] = E, x[15] = P, x[16] = A, x[17] = F, x[18] = N, x[19] = w, x[20] = T, x[21] = M, x[22] = R, x[23] = y
                } else y = x[23];
                return x[50] !== C || x[51] !== y ? (b = (0, a.jsxs)(a.Fragment, {
                    children: [y, C]
                }), x[50] = C, x[51] = y, x[52] = b) : b = x[52], b
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
                    g = (0, s.z)(c.e),
                    m = (0, o.useContext)(i.a);
                return h[0] !== p ? (e = () => (p.set(c.f, !0), () => {
                    p.set(c.f, !1), (0, c.a)(p)
                }), t = [p], h[0] = p, h[1] = e, h[2] = t) : (e = h[1], t = h[2]), (0, o.useLayoutEffect)(e, t), h[3] !== m || h[4] !== g ? (n = null == g ? null : (0, a.jsx)(a.Fragment, {
                    children: [...(0, c.b)(g), g.overlay].filter(u).map(e => (0, a.jsx)(d.a.Root, {
                        animateOnMount: e.animateOnMount ?? !0,
                        fillHeight: !0,
                        fullWidth: e.isFullWidth,
                        fullWidthTransition: e.fullWidthTransition,
                        isPIPObstacle: !1,
                        portalContainer: m,
                        reserveToolbarSpace: e.reserveToolbarSpace ?? !0,
                        shouldHideInlineImmediately: e !== g && e !== g.overlay,
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
                }), h[3] = m, h[4] = g, h[5] = n) : n = h[5], n
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
            d = n("rEML"),
            u = n("Cslg"),
            h = n("kphc"),
            p = n("Sm6l"),
            g = n("bqtn"),
            m = n("Ot7V"),
            f = n("bf6R"),
            v = n("Bbed"),
            y = n("X6Vn"),
            b = n("SGsN"),
            x = n("e2yd"),
            C = n("yGJW"),
            _ = n("gBBC"),
            w = n("OWtl"),
            I = n("hZax"),
            S = n("JYRT"),
            T = n("wwvo"),
            j = n("wrCb"),
            E = n("H7Nt"),
            P = n("vzxm"),
            A = n("jAnS"),
            M = n("yKKN"),
            R = n("hnvR"),
            k = n("r2Hc"),
            O = n("n3cq");
        let N = (0, v.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function B(e) {
            let t, n, v, B, z, G, F, L, D, H, W, q, U, K, V, Y, Q, $, X, J, Z = (0, r.c)(56),
                {
                    gizmo: ee
                } = e,
                et = (0, o.y)(w.a),
                en = (0, l.a)(),
                {
                    search: ea
                } = (0, d.Y)(),
                er = (0, d._)(),
                [es, eo] = (0, i.useState)(!1),
                ei = (0, I.f)("2160578039"),
                el = (0, o.x)(S.a, "2513446768"),
                ec = ei && "gpt" === ee.gizmo.gizmo_type && null != ee.gizmo.migrated_plugin_id;
            Z[0] !== el ? (t = el?.get("disable_gpt_updates", !1), Z[0] = el, Z[1] = t) : t = Z[1];
            let ed = t,
                eu = ee.gizmo.current_user_permission?.can_write && !ec && !ed,
                {
                    data: eh
                } = (0, o.z)(T.c);
            Z[2] !== ee.gizmo.id || Z[3] !== eh ? (n = eh?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === ee.gizmo.id
            }), Z[2] = ee.gizmo.id, Z[3] = eh, Z[4] = n) : n = Z[4];
            let ep = n;
            Z[5] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, j.a)("/gpts/editor"), Z[5] = v) : v = Z[5];
            let eg = `${v}/${encodeURIComponent(ee.gizmo.id)}`;
            Z[6] !== ee.gizmo.id || Z[7] !== ee.gizmo.short_url ? (B = ee.gizmo.short_url?.trim() || ee.gizmo.id, Z[6] = ee.gizmo.id, Z[7] = ee.gizmo.short_url, Z[8] = B) : B = Z[8], Z[9] !== B ? (z = (0, P.c)(B), Z[9] = B, Z[10] = z) : z = Z[10], Z[11] !== ea ? (G = (0, A.e)("", (0, A.i)(ea)), Z[11] = ea, Z[12] = G) : G = Z[12];
            let em = `${z}${G}`;
            Z[13] !== en ? (F = en.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions"
            }), Z[13] = en, Z[14] = F) : F = Z[14];
            let ef = F;
            Z[15] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, a.jsx)(x.a, {
                className: "icon-sm"
            }), Z[15] = L) : L = Z[15], Z[16] !== ef ? (D = (0, a.jsx)(p.a, {
                "aria-label": ef,
                color: "ghost",
                size: "icon",
                children: L
            }), Z[16] = ef, Z[17] = D) : D = Z[17], Z[18] !== ee.gizmo.gizmo_type || Z[19] !== ee.gizmo.id || Z[20] !== er || Z[21] !== em || Z[22] !== et ? (H = "gpt" === ee.gizmo.gizmo_type ? (0, a.jsxs)(g.c.Item, {
                href: em,
                onClick: e => {
                    e.defaultPrevented || ((0, C.a)(et, s.uc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: ee.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), eo(!1), (0, _.d)(et, null), (0, h.n)(et, "chat"), er(em, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(g.c.ItemIcon, {
                    children: (0, a.jsx)(f.Sh, {})
                }), (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat"
                })]
            }) : null, Z[18] = ee.gizmo.gizmo_type, Z[19] = ee.gizmo.id, Z[20] = er, Z[21] = em, Z[22] = et, Z[23] = H) : H = Z[23], Z[24] !== ee || Z[25] !== et ? (W = () => (0, y.f)(et, N, {
                accountId: et.get(u.f),
                resource: ee
            }), Z[24] = ee, Z[25] = et, Z[26] = W) : W = Z[26], Z[27] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, a.jsx)(g.c.ItemIcon, {
                children: (0, a.jsx)(f.le, {})
            }), U = (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About"
            }), Z[27] = q, Z[28] = U) : (q = Z[27], U = Z[28]), Z[29] !== W ? (K = (0, a.jsxs)(g.c.Item, {
                onSelect: W,
                children: [q, U]
            }), Z[29] = W, Z[30] = K) : K = Z[30];
            let ev = ep ? O.a : k.a;
            return Z[31] !== ee || Z[32] !== en || Z[33] !== ep || Z[34] !== et ? (V = () => {
                (0, T.f)(et, ee, !ep).catch(() => {
                    et.get(b.f).danger(en.formatMessage({
                        id: "chatgptConversations.customGpt.pinFailed",
                        defaultMessage: "Couldn't update pinned GPT"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.customGpt.pinFailed"
                        }
                    })
                })
            }, Z[31] = ee, Z[32] = en, Z[33] = ep, Z[34] = et, Z[35] = V) : V = Z[35], Z[36] !== ep ? (Y = ep ? (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT"
            }) : (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT"
            }), Z[36] = ep, Z[37] = Y) : Y = Z[37], Z[38] !== ev || Z[39] !== V || Z[40] !== Y ? (Q = (0, a.jsx)(g.c.Item, {
                leftIconAsset: ev,
                onSelect: V,
                children: Y
            }), Z[38] = ev, Z[39] = V, Z[40] = Y, Z[41] = Q) : Q = Z[41], Z[42] !== eu || Z[43] !== eg || Z[44] !== ee.gizmo.current_user_permission?.can_view_config ? ($ = eu || ee.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(g.c.Item, {
                href: eg,
                leftIconAsset: eu ? R.a : M.a,
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
                    defaultMessage: "Edit GPT"
                }) : (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.view",
                    defaultMessage: "View"
                })
            }) : null, Z[42] = eu, Z[43] = eg, Z[44] = ee.gizmo.current_user_permission?.can_view_config, Z[45] = $) : $ = Z[45], Z[46] !== ee ? (X = (0, a.jsx)(E.a, {
                resource: ee
            }), Z[46] = ee, Z[47] = X) : X = Z[47], Z[48] !== es || Z[49] !== H || Z[50] !== K || Z[51] !== Q || Z[52] !== $ || Z[53] !== X || Z[54] !== D ? (J = (0, a.jsxs)(g.a, {
                align: "start",
                contentWidth: "menu",
                open: es,
                onOpenChange: eo,
                triggerButton: D,
                children: [H, K, Q, $, X]
            }), Z[48] = es, Z[49] = H, Z[50] = K, Z[51] = Q, Z[52] = $, Z[53] = X, Z[54] = D, Z[55] = J) : J = Z[55], J
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
                } = (0, o.x)(T.b, t);
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
    C6kc: (function(e, t, n) {
        var a = n("mBJV"),
            r = n("MVHH"),
            s = n("D99L"),
            o = n("fVOX"),
            i = n("yGJW"),
            l = n("g2p6");

        function c(e, t, n) {
            "memory_footnote_shown" === t && (0, i.a)(e, s.CodexChatgptInteractionMemoryFootnoteShown, {
                memoryCitationExperiment: n
            }), e.get(o.a).count("default", t, {
                entrypoint: "turn_sources_button",
                memory_citation_experiment: n,
                target: "search_sources_sidebar"
            })
        }
        n.d(t, {
            a: () => r.Y
        }, {
            b: function(e, t) {
                let {
                    actionType: n,
                    conversationId: a,
                    experiment: s,
                    messageId: o,
                    source: l,
                    feedback: d,
                    selectedFeedback: u,
                    surface: h = "sources"
                } = t, p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_UNSPECIFIED";
                "positive" === d ? p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE" : "negative" === d ? p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE" : Object.is(d, null) && (p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_CLEARED");
                let g = null == l ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_TURN_SOURCES_BUTTON" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_SOURCES_SIDEBAR_ACTION_MENU";
                "explainer" === h && (g = "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON"), (0, i.a)(e, r.X, {
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
                }), "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_OPENED" === n && c(e, "chatgpt_memory_citations_sidebar_open_clicked", s)
            },
            c: function(e, t) {
                "dismissed" === t && (0, i.a)(e, s.CodexChatgptInteractionMemoryIntroductionDismissed, {
                    announcementKey: l.c
                }), "shown" === t && (0, i.a)(e, a.xd, {
                    eventId: `${l.c}_tooltip_shown`,
                    type: "UPSELL_OR_MODAL_TYPE_NUX_TOOLTIP"
                })
            },
            d: c
        })
    }),
    pV06: (function(e, t, n) {
        var a = n("JjRy"),
            r = n.n(a),
            s = n("AuIy"),
            o = n("G4E3"),
            i = n("KaH3"),
            l = n("Yz3b"),
            c = n("pqpL"),
            d = n("ghNX"),
            u = n("KvVi"),
            h = n("m250"),
            p = n("H8lk"),
            g = n("Ng4B"),
            m = n("bTKb"),
            f = n("dGDB"),
            v = n("lIsV");

        function y(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        n.d(t, {}, {
            a: function(e) {
                var t;
                let n, a, {
                        automationReferences: b,
                        includePages: x = !1,
                        includeSources: C,
                        messages: _,
                        pendingAttachments: w = [],
                        resources: I = (0, p.e)(_),
                        turns: S,
                        isTurnActive: T = S.at(-1)?.turn.status === "in_progress"
                    } = e,
                    j = [...I.inputs],
                    E = C ? (0, g.a)(_, S) : [],
                    P = new Map,
                    A = new Map,
                    M = (t = _, -1 !== (n = r()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, v.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    R = [],
                    k = new Map(_.map(e => [(0, s.g)(e), e])),
                    O = r()(_, e => "user" === e.author.role),
                    N = [];
                for (let e of w) j.some(t => t.fileId === e.id || null != e.libraryFileId && t.libraryFileId === e.libraryFileId) || j.push({
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
                    of S) {
                    if (C && "complete" === t.status)
                        for (let n of t.messageIds) {
                            let t = k.get(n);
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, h.j)(t.metadata) && R.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, h.c)(t.metadata)
                            })
                        }
                    for (let n of y(t.items)) {
                        if (x && "mcp-tool-call" === n.type) {
                            let e = (0, d.b)(n);
                            if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                let t = (0, o.d)(e.url);
                                if (t?.kind === "page") {
                                    let n = A.get(t.id);
                                    A.set(t.id, {
                                        key: `page:${t.id}`,
                                        kind: "page",
                                        pageId: t.id,
                                        title: e.title ?? n?.title ?? null
                                    })
                                }
                            }
                        }
                        if (x && "assistant-message" === n.type && n.completed)
                            for (let e of (0, c.c)(n.content)) A.has(e.id) || A.set(e.id, {
                                key: `page:${e.id}`,
                                kind: "page",
                                pageId: e.id,
                                title: null
                            });
                        if ("todo-list" === n.type) {
                            N = n.plan.map((t, n) => ({
                                key: `progress:${e}:${String(n)}`,
                                label: t.step,
                                status: M ? "completed" : t.status
                            }));
                            continue
                        }
                        if ("generated-image" === n.type && "completed" === n.status && null != n.src) {
                            let e = `image:${n.id}`;
                            P.set(e, {
                                image: n,
                                key: e,
                                kind: "generated-image"
                            })
                        }
                    }
                }
                let B = (0, i.b)(S.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return y(t.items).filter(e => "mcp-tool-call" === e.type)
                })).at(-1);
                return a = null == B ? [...I.outputs, ...A.values(), ...P.values()] : [{
                    ...B,
                    key: `site:${B.projectId}`,
                    kind: "site"
                }, ...I.outputs.filter(e => null == B.archivePath || ! function(e, t) {
                    if (null != e.sandboxPath) return e.sandboxPath === t;
                    let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != n && e.name.toLowerCase() === n
                }(e, B.archivePath)), ...A.values(), ...P.values()], {
                    automationIds: (0, u.b)(_, b ?? void 0),
                    browserScreenshots: (0, m.d)(_),
                    inputs: j,
                    sourceTurns: R,
                    outputs: a,
                    progressSteps: N,
                    isPlanSummaryUpdating: T && _.slice(O + 1).some(e => "assistant" === e.author.role && u.a.test(e.recipient ?? "") || "tool" === e.author.role && u.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${S.at(-1)?.id??""}:${T}`,
                    showSources: C,
                    sources: C ? [...Array.from(new Map(_.filter(e => "user" === e.author.role).flatMap(e => (0, l.a)((0, s.e)(e))).map(e => [e.projectId, e])).values(), e => ({
                        kind: "site",
                        key: `site:${e.projectId}`,
                        projectId: e.projectId,
                        label: e.title
                    })), ...E.filter(e => "memory" === e.kind), ...new Map(S.flatMap(e => {
                        let {
                            turn: t
                        } = e;
                        return (t.skillSources ?? []).map(e => [e.key, e])
                    })).values(), ...I.pluginSources, ...E.filter(e => "web" === e.kind && "apps" === e.category), ...E.filter(e => "file-source" === e.kind), ...E.filter(e => "web" === e.kind && "apps" !== e.category)] : [],
                    subagents: (0, f.a)(_)?.subagents ?? []
                }
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
                        isTranscriptVisible: g
                    } = e,
                    m = void 0 === g || g,
                    f = (0, r.y)(i.a),
                    v = (0, s.useId)();
                return h[0] !== p || h[1] !== v || h[2] !== f ? (t = () => (f.set(c.b, e => new Map(e).set(v, p)), f.get(c.a)?.dismissCurrent(), () => {
                    f.set(c.b, e => {
                        let t = new Map(e);
                        return t.delete(v), t
                    })
                }), n = [p, v, f], h[0] = p, h[1] = v, h[2] = f, h[3] = t, h[4] = n) : (t = h[3], n = h[4]), (0, s.useEffect)(t, n), h[5] !== p || h[6] !== m || h[7] !== f ? (d = () => {
                    if (!m) return;
                    let e = f.watch(e => {
                            let {
                                get: t
                            } = e
                        }),
                        t = f.watch(e => {
                            let {
                                get: t
                            } = e, n = !0 === t(o.b);
                            (0, l.cc)(f, p, n)
                        });
                    return () => {
                        e(), t(), (0, l.cc)(f, p, !1)
                    }
                }, u = [p, m, f], h[5] = p, h[6] = m, h[7] = f, h[8] = d, h[9] = u) : (d = h[8], u = h[9]), (0, s.useEffect)(d, u), null
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
            g = n("SGsN"),
            m = n("yGJW"),
            f = n("OWtl"),
            v = n("aepO"),
            y = n("bIvi"),
            b = n("lBzi"),
            x = n("Ga6O"),
            C = n("dQRk"),
            _ = n("jfiJ"),
            w = n("FGJH"),
            I = n("Vcrm"),
            S = n("OCK3"),
            T = n("dhxJ"),
            j = n("lsky"),
            E = n("rKAs"),
            P = n("ASxG"),
            A = n("rn0J"),
            M = n("XpUB"),
            R = n("G6mJ"),
            k = n("VB5Q"),
            O = n("VTN2");
        let N = P.record(P.string(), P.union([P.string(), P.literal(!0)]));

        function B(e) {
            let t, n, P, B, G, F, L = (0, r.c)(28),
                {
                    conversationId: D,
                    turns: H,
                    loadHistory: W,
                    renderMode: q,
                    paragenEnabled: U,
                    enabled: K,
                    canCopy: V,
                    priority: Y
                } = e,
                Q = void 0 === q ? "conversation" : q,
                $ = void 0 !== U && U,
                X = void 0 === K || K,
                J = void 0 === V || V,
                Z = void 0 === Y ? "fallback" : Y,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            L[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), L[0] = t) : t = L[0], L[1] !== J || L[2] !== D || L[3] !== X || L[4] !== W || L[5] !== $ || L[6] !== Q ? (n = [D, X, J, W, Q, $], L[1] = J, L[2] = D, L[3] = X, L[4] = W, L[5] = $, L[6] = Q, L[7] = n) : n = L[7], (0, c.useEffect)(t, n), L[8] !== J || L[9] !== D || L[10] !== $ || L[11] !== Q || L[12] !== ee || L[13] !== H ? (P = () => {
                let e = ee.get(C.j, D),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(C.y, D);
                if (!J || "tpp" === n || "flora" === n) return null;
                let a = ee.get(C.N, D),
                    r = $ && "conversation" === Q ? ee.get(I.a, D)?.promptMessageId : void 0,
                    s = function(e) {
                        for (let {
                                turn: t
                            }
                            of e.toReversed())
                            for (let e of t.items.toReversed()) {
                                if ("assistant-message" !== e.type) continue;
                                let t = null,
                                    n = 0;
                                if ((0, j.h)((0, M.a)(e.content, E.b), a => {
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
                        mode: Q,
                        moderationDisclaimersByMessageId: ee.get(C.O, D),
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
                    i = (0, T.a)(a?.[s.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(S.b, o) ?? i?.[String(s.codeBlockIndex)]?.content ?? s.content
                }
            }, L[8] = J, L[9] = D, L[10] = $, L[11] = Q, L[12] = ee, L[13] = H, L[14] = P) : P = L[14];
            let en = (0, y.a)(P);
            L[15] !== ee ? (B = (e, t) => {
                let n = e => {
                    (0, m.a)(ee, o.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: s.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
                    })
                };
                return (0, v.c)(e, void 0, () => {
                    "string" == typeof e ? n(e) : e.then(n, z)
                }).then(e => {
                    e && !t?.aborted && ee.get(g.f).success((0, a.jsx)(d.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard"
                    }))
                })
            }, L[15] = ee, L[16] = B) : B = L[16];
            let ea = B;
            return L[17] !== D || L[18] !== en || L[19] !== W || L[20] !== $ || L[21] !== Q || L[22] !== ee || L[23] !== ea ? (G = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!W || ee.get(C.B, D) || null == t || ee.get(w.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let r = ee.get(u.a),
                    s = ee.get(C.C, D),
                    o = ee.get(h.e).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(C.C, D) !== s || $ && "conversation" === Q && t(I.a, D)?.promptMessageId !== n || t(h.e).copyLastCodeBlock !== o) && a.abort()
                    });
                ea((async () => {
                    await (0, _.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, L[17] = D, L[18] = en, L[19] = W, L[20] = $, L[21] = Q, L[22] = ee, L[23] = ea, L[24] = G) : G = L[24], L[25] !== X || L[26] !== Z ? (F = {
                enabled: X,
                priority: Z
            }, L[25] = X, L[26] = Z, L[27] = F) : F = L[27], (0, p.a)("copyLastCodeBlock", G, F), null
        }

        function z() {}
    }),
    LEgg: (function(e, t, n) {
        n.d(t, {
            a: () => _
        });
        var a = n("ABep"),
            r = n("QosV");
        n("slpy");
        var s = n("BolX"),
            o = n("Wf1j"),
            i = n("LIH9"),
            l = n("TdH6"),
            c = n("QcW8");
        n("ZU27"), n("TpEm");
        var d = n("gbrq"),
            u = n("B1XR"),
            h = n("ipGa"),
            p = n("Zqzr"),
            g = n("zd8w"),
            m = n("tSEg"),
            f = n("YnF4"),
            v = n("dQRk");

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
                    if (null != r) return (0, f.a)(a, (0, p.Se)(`chatgpt:${r}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, g.useLayoutEffect)(e, t), null
        }
        n("n5iL"), n("bf6R");
        var b = n("F0l0"),
            x = n("enMl");
        n("efE7");
        var C = n("PCEr");

        function _(e) {
            let t, n, s, o, l, c, d = (0, r.c)(17),
                {
                    chatIcon: p,
                    header: g,
                    title: m,
                    fullScreenTitle: f,
                    isArchivedPreview: v,
                    children: y
                } = e;
            return d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(i.a.MainContentLayout, {
                layout: (0, h.a)() ? "default" : "thread-edge-scroll"
            }), d[0] = t) : t = d[0], d[1] !== v ? (n = v ? null : (0, a.jsx)(u.SitePreviewBridge, {}), d[1] = v, d[2] = n) : n = d[2], d[3] !== g ? (s = (0, a.jsx)(i.a.Header, {
                desktopPlacement: "titlebar",
                divider: !1,
                children: g
            }), d[3] = g, d[4] = s) : s = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(i.a.RightPanelOutlet, {
                children: (0, a.jsx)(i.a.RightPanelTabs, {})
            }), d[5] = o) : o = d[5], d[6] !== p || d[7] !== f || d[8] !== g || d[9] !== v || d[10] !== m ? (l = v ? null : (0, a.jsx)(w, {
                chatIcon: p,
                fullScreenTitle: f,
                mainToolbar: g,
                title: m
            }), d[6] = p, d[7] = f, d[8] = g, d[9] = v, d[10] = m, d[11] = l) : l = d[11], d[12] !== y || d[13] !== n || d[14] !== s || d[15] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, s, y, o, l]
            }), d[12] = y, d[13] = n, d[14] = s, d[15] = l, d[16] = c) : c = d[16], c
        }

        function w(e) {
            let t, n, i, u, p, g, f, v = (0, r.c)(16),
                {
                    chatIcon: _,
                    mainToolbar: w,
                    title: I,
                    fullScreenTitle: S
                } = e,
                T = (0, s.y)(m.a);
            return (0, o.a)(), (0, s.z)(d.h), (0, s.z)(c.t), v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(y, {}), v[0] = t, v[1] = n) : (t = v[0], n = v[1]), v[2] !== _ || v[3] !== I ? (i = (0, a.jsx)(x.a, {
                title: I,
                icon: _
            }), v[2] = _, v[3] = I, v[4] = i) : i = v[4], v[5] !== S ? (u = (0, a.jsx)("div", {
                className: "max-w-80 min-w-0 truncate empty:hidden focus-within:overflow-visible",
                children: S
            }), v[5] = S, v[6] = u) : u = v[6], v[7] !== w || v[8] !== u ? (p = (0, a.jsx)(C.a, {
                mainToolbar: w,
                fullScreenChatMenu: u
            }), v[7] = w, v[8] = u, v[9] = p) : p = v[9], v[10] !== T.value.routeKind ? (g = "other" === T.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(b.b, {
                showLauncherButton: !1
            }), v[10] = T.value.routeKind, v[11] = g) : g = v[11], v[12] !== i || v[13] !== p || v[14] !== g ? (f = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i, p, g, null, null]
            }), v[12] = i, v[13] = p, v[14] = g, v[15] = f) : f = v[15], f
        }
    }),
    dLcZ: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV");
        n("slpy"), n("zd8w");
        var s = n("LIH9");
        n("Sm6l"), n("HOLv");
        var o = n("NVRI"),
            i = n("MMlk"),
            l = n("UNoV");
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, c, d, u, h, p, g, m, f = (0, r.c)(20);
                f[0] !== e ? ({
                    hasSectionProgress: d,
                    isTemporaryChat: u,
                    isCloudTask: t,
                    leading: n,
                    startActions: c,
                    ...s
                } = e, f[0] = e, f[1] = t, f[2] = n, f[3] = s, f[4] = c, f[5] = d, f[6] = u) : (t = f[1], n = f[2], s = f[3], c = f[4], d = f[5], u = f[6]);
                let v = void 0 !== u && u,
                    y = void 0 !== d && d ? l.a.Title : void 0;
                return f[7] !== n || null !== f[8] ? (h = (0, a.jsxs)(a.Fragment, {
                    children: [n, null]
                }), f[7] = n, f[8] = null, f[9] = h) : h = f[9], f[10] !== v ? (p = v ? (0, a.jsx)(i.b, {
                    isIndicator: !0,
                    isTemporaryChat: !0
                }) : null, f[10] = v, f[11] = p) : p = f[11], f[12] !== c || f[13] !== p ? (g = (0, a.jsxs)(a.Fragment, {
                    children: [c, p]
                }), f[12] = c, f[13] = p, f[14] = g) : g = f[14], f[15] !== s || f[16] !== y || f[17] !== h || f[18] !== g ? (m = (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(o.a, {
                        ...s,
                        className: y,
                        inset: "tab-strip-flush-start",
                        leading: h,
                        startActions: g
                    })
                }), f[15] = s, f[16] = y, f[17] = h, f[18] = g, f[19] = m) : m = f[19], m
            },
            b: function(e) {
                let t, n, o, i = (0, r.c)(9),
                    {
                        children: l,
                        menu: c,
                        hasTitleMenu: d
                    } = e,
                    u = !d && c;
                return i[0] !== d || i[1] !== c ? (t = d ? (0, a.jsx)(s.a.HeaderAction, {
                    actionId: "chatgpt-conversation-title-menu",
                    align: "start",
                    slotPosition: "threadTitle",
                    children: c
                }) : null, i[0] = d, i[1] = c, i[2] = t) : t = i[2], i[3] !== l ? (n = null == l ? null : (0, a.jsx)(s.a.HeaderAction, {
                    actionId: "chatgpt-conversation-actions",
                    align: "end",
                    order: 100,
                    children: (0, a.jsx)("div", {
                        className: "flex min-w-0 items-center gap-toolbar-action",
                        children: l
                    })
                }), i[3] = l, i[4] = n) : n = i[4], i[5] !== u || i[6] !== t || i[7] !== n ? (o = (0, a.jsxs)(a.Fragment, {
                    children: [u, t, n]
                }), i[5] = u, i[6] = t, i[7] = n, i[8] = o) : o = i[8], o
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
            r = n("OWtl"),
            s = n("OMIV"),
            o = n("dQRk"),
            i = n("ZniH");
        let l = (0, a.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(o.N, e), r = n(o.C, e);
                return null == a || null == r ? null : (0, i.a)({
                    mapping: a,
                    current_node: r
                }, n(o.O, e))?.text ?? null
            }),
            c = (0, a.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t;
                return null == e || n(s.e, "2163293173") && !n(o.K, e) ? null : n(l, e) || null
            });
        n.d(t, {}, {
            a: l,
            b: c
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
                let t, n, d, g, m = (0, r.c)(9),
                    {
                        resource: f,
                        onSelect: v
                    } = e,
                    y = (0, s.y)(h.a),
                    b = (0, s.z)(i.f);
                return null == b || f.gizmo.tags?.includes("first_party") || "marketplace" !== f.gizmo.share_recipient && "link" !== f.gizmo.share_recipient ? null : (m[0] !== b || m[1] !== v || m[2] !== f || m[3] !== y ? (t = () => {
                    v?.(), (0, u.f)(y, p, {
                        accountId: b,
                        resource: f
                    })
                }, m[0] = b, m[1] = v, m[2] = f, m[3] = y, m[4] = t) : t = m[4], m[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(l.c.ItemIcon, {
                    children: (0, a.jsx)(c.xd, {})
                }), d = (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.report.action",
                    defaultMessage: "Report GPT"
                }), m[5] = n, m[6] = d) : (n = m[5], d = m[6]), m[7] !== t ? (g = (0, a.jsxs)(l.c.Item, {
                    onSelect: t,
                    children: [n, d]
                }), m[7] = t, m[8] = g) : g = m[8], g)
            }
        })
    }),
    alJ6: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("on57"),
            o = n("BolX"),
            i = n("rEML"),
            l = n("Bbed"),
            c = n("OWtl"),
            d = n("OMIV"),
            u = n("tV8b"),
            h = n("u9iS");
        let p = (0, l.a)(async () => (await n.e(901042).then(n.bind(n, "ut8h"))).GptPluginMigrationBannerContent, {
            errorFallback: e => (0, a.jsx)(m, {
                ...e
            })
        });

        function g(e) {
            let t, n = (0, r.c)(3),
                {
                    gizmoId: s
                } = e,
                i = (0, o.x)(d.e, "2160578039");
            return n[0] !== i || n[1] !== s ? (t = i ? (0, a.jsx)(p, {
                gizmoId: s
            }, s) : null, n[0] = i, n[1] = s, n[2] = t) : t = n[2], t
        }

        function m(e) {
            let t, n, s = (0, r.c)(10),
                {
                    gizmoId: l
                } = e,
                d = (0, o.y)(c.a),
                p = (0, i.Y)(),
                g = (0, i._)(),
                {
                    data: m
                } = (0, o.x)(h.f, l);
            s[0] !== l || s[1] !== p.pathname ? (t = {
                gizmoId: l,
                visitKey: p.pathname
            }, s[0] = l, s[1] = p.pathname, s[2] = t) : t = s[2];
            let f = (0, o.x)(h.c, t);
            return s[3] !== f || s[4] !== l || s[5] !== p.pathname || s[6] !== g || s[7] !== m || s[8] !== d ? (n = f && m?.gizmo.migrated_plugin_id ? (0, a.jsx)(u.a, {
                gptName: m.gizmo.display.name,
                accessState: "error",
                onUsePlugin: () => void g("/plugins"),
                onKeepUsingGpt: () => (0, h.a)(d, {
                    gizmoId: l,
                    visitKey: p.pathname
                })
            }) : null, s[3] = f, s[4] = l, s[5] = p.pathname, s[6] = g, s[7] = m, s[8] = d, s[9] = n) : n = s[9], n
        }
        n.d(t, {}, {
            GptPluginMigrationBanner: g,
            GptPluginMigrationHomeBanner: function(e) {
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
            h = n("QVPe");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, g, m, f, v, y, b, x = (0, r.c)(34),
                    {
                        gptName: C,
                        accessState: _,
                        onUsePlugin: w,
                        onKeepUsingGpt: I,
                        onRetry: S
                    } = e,
                    T = (0, s.a)(),
                    j = (0, d.e)("2513446768");
                x[0] !== j || x[1] !== T ? (t = T.formatDate((0, u.a)(j.get("retirement_date", "")), {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }), x[0] = j, x[1] = T, x[2] = t) : t = x[2];
                let E = t;
                if ("error" === _ && null != S) {
                    let e;
                    x[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceRetry",
                        defaultMessage: "Try again"
                    }), x[3] = e) : e = x[3], n = e
                } else if ("admin" === _) {
                    let e;
                    x[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.viewPlugin",
                        defaultMessage: "View Plugin"
                    }), x[4] = e) : e = x[4], n = e
                } else if ("allowed" === _ || "pending" === _) {
                    let e;
                    x[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceUsePlugin",
                        defaultMessage: "Use plugin"
                    }), x[5] = e) : e = x[5], n = e
                } else {
                    let e;
                    x[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceExplorePlugins",
                        defaultMessage: "Explore plugins"
                    }), x[6] = e) : e = x[6], n = e
                }
                if ("error" === _ && null == S) {
                    let e;
                    x[7] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessUnconfirmed",
                        defaultMessage: "We couldn’t check your access to the plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[7] = E, x[8] = e) : e = x[8], p = e
                } else if ("error" === _) {
                    let e;
                    x[9] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessError",
                        defaultMessage: "We couldn’t check your access to the plugin. Try again, or keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[9] = E, x[10] = e) : e = x[10], p = e
                } else if ("denied" === _) {
                    let e;
                    x[11] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessDenied",
                        defaultMessage: "This plugin isn’t available to you. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[11] = E, x[12] = e) : e = x[12], p = e
                } else if (C.trim()) {
                    let e;
                    x[13] !== E || x[14] !== C ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceNamedBody",
                        defaultMessage: "{gptName} is now available as a plugin. You can keep using this GPT until {deadline}.",
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
                    values: {
                        gptName: C
                    }
                }) : (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceTitle",
                    defaultMessage: "This GPT is now a plugin"
                }), x[19] = C, x[20] = m) : m = x[20];
                let P = "pending" === _,
                    A = "error" === _ && null != S ? S : w;
                return x[21] !== n || x[22] !== P || x[23] !== A ? (f = (0, a.jsx)(l.a, {
                    color: "primary",
                    loading: P,
                    size: "dialog",
                    type: "button",
                    onClick: A,
                    children: n
                }), x[21] = n, x[22] = P, x[23] = A, x[24] = f) : f = x[24], x[25] !== I ? (v = null == I ? null : (0, a.jsx)(l.a, {
                    color: "outline",
                    size: "dialog",
                    type: "button",
                    onClick: I,
                    children: (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceKeepUsing",
                        defaultMessage: "Keep using GPT"
                    })
                }), x[25] = I, x[26] = v) : v = x[26], x[27] !== f || x[28] !== v ? (y = (0, a.jsxs)("div", {
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
    kHi2: (function(e, t, n) {
        var a = n("BolX"),
            r = n("tSEg"),
            s = n("VnEZ");
        let o = (0, a.c)(r.a, s.b);

        function i(e, t) {
            let n = e.get(o).getSnapshot();
            return n?.conversationId !== t || n.dilActionsPending ? void 0 : n.dil?.prefill_composer
        }
        let l = (0, a.i)(r.a, e => !1, (e, t) => {
            let {
                scope: n,
                get: a,
                set: r
            } = t, s = a(o), l = () => r(null != i(n, e));
            return l(), s.subscribe(l)
        });
        n.d(t, {}, {
            a: l,
            b: o,
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
            s = n("BolX"),
            o = n("ASxG"),
            i = n("OWtl"),
            l = n("OMIV"),
            c = n("b6fw"),
            d = n("YdNM");
        let u = o.object({
                course_id: o.string().trim().min(1),
                title: o.string().trim().nullish().catch(null),
                icon_url_or_emoji: d.a
            }),
            h = o.object({
                course_info: u.nullish()
            }),
            p = (0, s.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = h.safeParse(n(c.h, e)?.view);
                return a.success ? a.data.course_info ?? null : null
            }, {
                isEqual: r()
            }),
            g = (0, s.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(l.e, "4035922817") ? n(p, e) : null
            }),
            m = (0, s.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(g, e)?.course_id ?? null
            });
        n.d(t, {}, {
            a: m,
            b: g
        })
    }),
    wnpN: (function(e, t, n) {
        var a = n("FC5L"),
            r = n("OMIV"),
            s = n("XtQP"),
            o = n("dQRk"),
            i = n("a4V1");
        let l = (0, a.a)({
            conversationIds: (e, t) => [t],
            status: (e, t) => {
                let {
                    get: n
                } = e, a = n(o.w, t);
                return {
                    pending: (0, o.Bb)(n(o.ab, t)),
                    completed: null == a || "completed" === a.result,
                    completionId: n(r.e, "2163293173") ? JSON.stringify([t, a?.requestId, n(o.C, t)]) : void 0,
                    unread: n(o.K, t)
                }
            },
            preview: (e, t) => {
                let {
                    get: n
                } = e;
                return n(i.a, t)
            },
            title: (e, t) => {
                let {
                    get: n
                } = e;
                return n(o.eb, t) || null
            },
            dismiss: (e, t) => {
                (0, o.Xb)(e, t, !1), (0, s.b)(e, t).catch(() => {})
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
            l = n("wD9O"),
            c = n("hEYZ"),
            d = n("OWtl"),
            u = n("yLzP"),
            h = n("lsfk"),
            p = n("uYx2"),
            g = n("dQRk"),
            m = n("jfiJ"),
            f = n("FGJH");

        function v(e) {
            return e.isIntersecting
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, y, b, x, C = (0, r.c)(22),
                    {
                        conversationId: _
                    } = e,
                    w = (0, s.y)(d.a),
                    I = (0, s.z)(c.b),
                    S = (0, s.x)(g.j, _),
                    T = (0, s.x)(f.c, S ?? _),
                    j = (0, h.b)(),
                    E = (0, l.c)(),
                    P = (0, o.useRef)(null);
                C[0] !== j || C[1] !== w || C[2] !== S || C[3] !== E ? (t = () => {
                    null != S && (0, m.b)(w, S, e => {
                        var t;
                        let n, a, r, s = j.getScrollElement(),
                            o = s && (n = (t = s).getBoundingClientRect(), a = e => {
                                let t = e.getBoundingClientRect();
                                return t.height > 0 && t.bottom > n.top && t.top < n.bottom
                            }, (r = t.querySelector("[data-thread-reading-passage]")) && a(r) ? r : Array.from(t.querySelectorAll("[data-content-search-unit-key], [data-user-message-bubble]")).find(a)),
                            c = o?.getBoundingClientRect().top;
                        if ((0, i.flushSync)(e), s && o && null != c && s.contains(o)) {
                            let e = (0, l.b)(o.getBoundingClientRect().top - c, E);
                            0 !== e && j.compensateScrollToDistanceFromBottomPx((0, p.b)(s) - e)
                        }
                    })
                }, C[0] = j, C[1] = w, C[2] = S, C[3] = E, C[4] = t) : t = C[4];
                let A = t;
                C[5] !== _ || C[6] !== A || C[7] !== w || C[8] !== S ? (n = () => {
                    let e = w.get(f.c, S ?? _);
                    w.get(c.b) || e?.hasError || A()
                }, C[5] = _, C[6] = A, C[7] = w, C[8] = S, C[9] = n) : n = C[9];
                let M = (0, o.useEffectEvent)(n);
                C[10] !== j || C[11] !== I || C[12] !== M ? (y = () => {
                    if (I) return;
                    let e = P.current,
                        t = j.getScrollElement();
                    if (null == e || null == t) return;
                    let n = new IntersectionObserver(e => {
                        e.some(v) && M()
                    }, {
                        root: t,
                        rootMargin: "80px 0px 0px 0px"
                    });
                    return n.observe(e), () => n.disconnect()
                }, C[10] = j, C[11] = I, C[12] = M, C[13] = y) : y = C[13];
                let R = T?.cursor,
                    k = T?.hasError;
                if (C[14] !== j || C[15] !== I || C[16] !== S || C[17] !== R || C[18] !== k ? (b = [j, I, S, R, k], C[14] = j, C[15] = I, C[16] = S, C[17] = R, C[18] = k, C[19] = b) : b = C[19], (0, o.useEffect)(y, b), null == T || T.complete || null == T.cursor) return null;
                let O = T.hasError ? A : null;
                return C[20] !== O ? (x = (0, a.jsx)(u.a, {
                    ref: P,
                    onRetry: O
                }), C[20] = O, C[21] = x) : x = C[21], x
            }
        })
    }),
    lUUH: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("BolX"),
            o = n("oyxz"),
            i = n("Qgfj"),
            l = n("rEML"),
            c = n("bqtn"),
            d = n("bf6R"),
            u = n("SGsN"),
            h = n("svjy"),
            p = n("nlNF"),
            g = n("crAQ"),
            m = n("FR8U"),
            f = n("OWtl"),
            v = n("OtLV"),
            y = n("w7E5"),
            b = n("wVX4"),
            x = n("c5lN"),
            C = n("QmkR"),
            _ = n("xEXG"),
            w = n("KMqT"),
            I = n("J6LI"),
            S = n("FgUr"),
            T = n("WLgA");
        let j = (0, s.u)(f.a, 0);

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
                onCreateProjectDialogCloseAutoFocus: _
            } = e, {
                isWorkConversation: E,
                sourceMemoryBlocked: A
            } = (0, I.c)(n, r), M = A ? v.a.projectOnlyMoveUnavailable : void 0, {
                data: R,
                isPending: k,
                isError: O
            } = s, {
                data: N,
                isPending: B,
                isError: z
            } = o, G = (0, S.a)(N, R, r?.gizmo.id), F = "allowed" === c, L = e => {
                let a = t.get(j) + 1,
                    r = t.get(p.e);
                t.set(j, a), (0, C.T)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(n => {
                    n && t.get(j) === a && t.get(p.e) === r && f((0, T.c)(e.gizmo.id))
                }).catch(() => {
                    t.get(u.f).danger(t.get(h.a).formatMessage(P.moveFailed), {
                        errorAnalytics: {
                            toastId: "move_conversation_to_snorlax_error"
                        }
                    })
                })
            }, D = [];
            for (let e of (F && (D.push({
                    id: "new-chatgpt-project",
                    icon: d.Eg,
                    message: P.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        t.set(j, e => e + 1), (0, x.a)(t, L, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: E,
                            onCloseAutoFocus: _
                        })
                    }
                }), G.length > 0 && D.push({
                    id: "new-project-separator",
                    type: "separator"
                })), G)) {
                let {
                    targetMemoryBlocked: t
                } = (0, I.c)(n, void 0, e), r = t ? (0, w.a)((0, b.c)(e)) : void 0;
                D.push({
                    id: `move-to-project:${e.gizmo.id}`,
                    icon: (0, a.jsx)(m.a, {
                        className: "icon-xs",
                        size: 16,
                        color: e.gizmo.display.theme,
                        fallbackIcon: (0, a.jsx)(d.Bd, {}),
                        icon: e.gizmo.display.emoji
                    }),
                    nativeIcon: (0, g.b)(e.gizmo.display.emoji),
                    message: P.projectName,
                    messageValues: {
                        projectName: e.gizmo.display.name
                    },
                    enabled: null == r,
                    tooltipMessage: r,
                    onSelect: () => L(e)
                })
            }
            return l && (O || z) ? D.push({
                id: "retry-project-destinations",
                message: P.destinationsFailed,
                closeOnSelect: !1,
                onSelect: () => {
                    Promise.all([t.query.invalidate(y.a), t.query.invalidate(C.m)])
                }
            }) : l && (k || B) ? D.push({
                id: "loading-project-destinations",
                message: P.loading,
                tooltipMessage: P.reopen,
                enabled: !1
            }) : O || z || k || B || 0 !== G.length || F || D.push({
                id: "no-project-destinations",
                message: P.noDestinations,
                enabled: !1
            }), [...i && D.length > 0 ? [{
                id: "move-to-project",
                icon: d.Ed,
                message: P.moveToProject,
                enabled: !A,
                tooltipMessage: M,
                submenu: D
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                icon: d.Id,
                message: P.removeFromProject,
                enabled: !A,
                tooltipMessage: M,
                onSelect: () => {
                    t.set(j, e => e + 1), (0, C.T)({
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
                defaultMessage: "Move to project"
            },
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}"
            },
            removeFromProject: {
                id: "chatgptProjectHome.chats.projectActions.remove",
                defaultMessage: "Remove from project"
            },
            moveFailed: {
                id: "chatgptProjectHome.chats.projectActions.moveFailed",
                defaultMessage: "Failed to move the conversation to the project"
            },
            removeFailed: {
                id: "chatgptProjectHome.chats.projectActions.removeFailed",
                defaultMessage: "Failed to remove the conversation from the project"
            },
            newProject: {
                id: "chatgptProjectHome.chats.projectActions.newProject",
                defaultMessage: "New project"
            },
            destinationsFailed: {
                id: "chatgptProjectHome.chats.projectActions.destinationsFailed",
                defaultMessage: "Couldn’t load projects. Try again"
            },
            loading: {
                id: "chatgptConversations.projects.loadingMenu",
                defaultMessage: "Loading projects…"
            },
            reopen: {
                id: "chatgptConversations.projects.reopenMenu",
                defaultMessage: "Reopen this menu to refresh project destinations"
            },
            noDestinations: {
                id: "chatgptProjectHome.chats.projectActions.noDestinations",
                defaultMessage: "No other projects"
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
                    g = void 0 === p || p,
                    m = (0, s.y)(f.a),
                    v = (0, l._)(),
                    b = (0, s.z)(y.a),
                    x = (0, s.z)(C.m),
                    w = (0, _.b)();
                if (i[0] !== d || i[1] !== v || i[2] !== u || i[3] !== x || i[4] !== h || i[5] !== w || i[6] !== b || i[7] !== m || i[8] !== g) {
                    let e = E({
                            scope: m,
                            conversation: d,
                            project: h,
                            projectListQuery: b,
                            pinnedProjectsQuery: x,
                            showMoveToProject: g,
                            projectCrudStatus: w,
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
                    t = e.map(n), i[0] = d, i[1] = v, i[2] = u, i[3] = x, i[4] = h, i[5] = w, i[6] = b, i[7] = m, i[8] = g, i[9] = t
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
            } = t, a = n(i.h, e);
            if (null == a) return null;
            let r = n(o.N, e);
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
        }
        let d = (0, r.f)({
            readOnlyPlaceholder: {
                id: "sectionedConversation.readOnlyPlaceholder",
                defaultMessage: "This section is read-only"
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
            l = n("LIH9"),
            c = n("EOo5"),
            d = n("Sm6l"),
            u = n("X6Vn"),
            h = n("OWtl"),
            p = n("j0nn");
        let g = (0, o.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function m(e) {
            let t, n, o, l = (0, r.c)(9),
                {
                    imageOnly: u
                } = e,
                g = (0, s.y)(h.a),
                m = (0, s.x)(p.f, (0, c.a)());
            return null == m ? null : (l[0] !== u || l[1] !== g || l[2] !== m.id ? (t = () => f(g, m.id, u), l[0] = u, l[1] = g, l[2] = m.id, l[3] = t) : t = l[3], l[4] !== u ? (n = u ? (0, a.jsx)(i.a, {
                id: "chatgptConversations.sharedPost.webImage.reportButton",
                defaultMessage: "Report image"
            }) : (0, a.jsx)(i.a, {
                id: "chatgptConversations.sharedPost.reportButton",
                defaultMessage: "Report conversation"
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
            (0, u.f)(e, g, {
                reportEntityType: "post",
                productArea: "chatgpt_post",
                threadId: t,
                title: n ? (0, a.jsx)(i.a, {
                    id: "chatgptConversations.sharedPost.webImage.reportTitle",
                    defaultMessage: "Report an image"
                }) : (0, a.jsx)(i.a, {
                    id: "chatgptConversations.sharedPost.reportTitle",
                    defaultMessage: "Report a conversation"
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
                            defaultMessage: "This is a shared image."
                        }) : (0, a.jsx)(i.a, {
                            id: "chatgptConversations.sharedConversation.copyDisclaimer",
                            defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory."
                        })
                    }), (0, a.jsx)(m, {
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
            o = n("LIH9"),
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
                m = (0, s.z)(i.l),
                f = (0, s.z)(l.n);
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
    b7aP: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("oyxz"),
            o = n("Bbed"),
            i = n("iS3k");
        let l = (0, o.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(602271)]).then(n.bind(n, "Vkkr"))).ChatGptThreadSummaryPanelBody, {
            errorFallback: (0, a.jsx)("span", {
                className: "px-5 select-none",
                role: "status",
                children: (0, a.jsx)(s.a, {
                    id: "chatgptConversations.summaryPanel.loadError",
                    defaultMessage: "Summary could not load. Reload the app to try again"
                })
            })
        });
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, r.c)(2);
                return n[0] !== e ? (t = (0, a.jsx)(i.a.Content, {
                    children: (0, a.jsx)(l, {
                        ...e
                    })
                }), n[0] = e, n[1] = t) : t = n[1], t
            }
        })
    }),
    vpdG: (function(e, t, n) {
        var a = n("QosV"),
            r = n("HVBu"),
            s = n.n(r),
            o = n("BolX"),
            i = n("Zqzr"),
            l = n("zd8w"),
            c = n("Gdjn"),
            d = n("xqnZ"),
            u = n("OWtl"),
            h = n("ADAj"),
            p = n("Ow2S"),
            g = n("fDfx"),
            m = n("dQRk");
        n.d(t, {}, {
            a: function(e) {
                let t, n, r, f, v, y, b = (0, a.c)(19);
                b[0] !== e ? (t = void 0 === e ? {} : e, b[0] = e, b[1] = t) : t = b[1];
                let {
                    composerController: x,
                    conversationId: C,
                    draftKey: _,
                    initialPrompt: w,
                    initialPromptKind: I
                } = t, S = void 0 === _ ? C : _, T = (0, o.y)(u.a);
                b[2] !== C || b[3] !== S || b[4] !== w || b[5] !== I || b[6] !== T ? (n = () => s()(() => {
                    let e = null == C ? null : T.get(m.y, C),
                        t = (0, d.e)(w ?? (null == S ? "" : T.get(p.u, S)), {
                            addInitialContentToHistory: null == w && null != S,
                            defaultTextKind: I ?? (null == w && null != S || (0, c.b)(w ?? "").length > 0 ? "prompt" : "plain"),
                            enableFileMentions: !0,
                            enableRichText: !0,
                            enableSkillMentions: !1,
                            enableSlashCommands: {
                                triggers: ["/"]
                            },
                            plainTextMode: (0, h.b)(T.get, i.tf.composerPlainTextMode),
                            suggestionOptions: {
                                enableInlineSystemHints: "tpp" !== e && "flora" !== e,
                                variant: "tpp" !== e && "flora" !== e ? "chatgpt" : void 0
                            }
                        });
                    return null == w && null != C && "string" == typeof S && null != (0, g.k)(T, S) && "tpp" !== e && "flora" !== e && (0, p.V)(T, C, t.getChatGptPrompt().systemHints), t
                }), b[2] = C, b[3] = S, b[4] = w, b[5] = I, b[6] = T, b[7] = n) : n = b[7];
                let [j] = (0, l.useState)(n);
                b[8] !== j || b[9] !== x ? (r = x ?? j(), b[8] = j, b[9] = x, b[10] = r) : r = b[10];
                let E = r,
                    P = (0, l.useRef)(null);
                b[11] !== E || b[12] !== S || b[13] !== T ? (f = () => {
                    if (null == S) return;
                    let e = T.get(p.u, S);
                    return null != P.current && P.current !== e && E.restoreDraft(e), () => {
                        P.current = T.get(p.u, S)
                    }
                }, v = [E, S, T], b[11] = E, b[12] = S, b[13] = T, b[14] = f, b[15] = v) : (f = b[14], v = b[15]), (0, l.useLayoutEffect)(f, v), b[16] !== E || b[17] !== x ? (y = () => {
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
                    g = (0, s.y)(l.a),
                    m = (0, o.a)();
                return p[0] !== e || p[1] !== g ? (t = t => (0, d.u)({
                    scope: g,
                    conversationId: e,
                    deleteArtifacts: t
                }), p[0] = e, p[1] = g, p[2] = t) : t = p[2], p[3] !== g ? (n = () => g.queryClient.invalidateQueries({
                    queryKey: [d.a]
                }), p[3] = g, p[4] = n) : n = p[4], p[5] !== m || p[6] !== g ? (u = () => {
                    g.get(i.f).danger(m.formatMessage(c.a.deleteError), {
                        errorAnalytics: {
                            toastId: "archived_conversations_modal_delete_failed"
                        }
                    })
                }, p[5] = m, p[6] = g, p[7] = u) : u = p[7], p[8] !== t || p[9] !== n || p[10] !== u ? (h = {
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
            s = (0, a.b)("text-default min-h-0 w-full p-0 leading-normal !font-sans", "[&_.ProseMirror]:w-full", "[&_.ProseMirror]:!text-default", "[&_.ProseMirror]:!font-sans", "[&_.ProseMirror]:px-0", "[&_.ProseMirror]:py-0", "[&_.ProseMirror]:!leading-[var(--annotation-comment-line-height,calc(var(--spacing)*6))]", "[&_.ProseMirror_p]:!font-sans", "[&_.ProseMirror_p]:!leading-[var(--annotation-comment-line-height,calc(var(--spacing)*6))]", "[&_.ProseMirror_p_*]:!font-sans", "[&_.ProseMirror_span]:!font-sans", "!min-h-0 text-base", "[&_.ProseMirror]:min-h-[var(--annotation-comment-min-height,calc(var(--spacing)*6))]!");
        n.d(t, {}, {
            a: "absolute inset-x-0 bottom-0 flex h-12 items-center ps-2 pe-3 origin-bottom-left transition-[opacity,transform] duration-basic ease-out motion-reduce:transition-none",
            b: s,
            c: "absolute left-4 min-w-0 overflow-hidden transition-[left,width,top,bottom] duration-[140ms] ease-enter-snappy motion-reduce:transition-none",
            d: {
                "--codex-chat-font-size": "var(--annotation-comment-font-size, 13px)",
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
            let t, n, i, l, c, d, u, h, p, g, m, f, v, y, b = (0, r.c)(30);
            b[0] !== e ? ({
                className: n,
                children: t,
                style: l,
                isRevealingPageComment: c,
                surfaceVariant: d,
                discussion: u,
                hasRecipientControl: h,
                ...i
            } = e, b[0] = e, b[1] = t, b[2] = n, b[3] = i, b[4] = l, b[5] = c, b[6] = d, b[7] = u, b[8] = h) : (t = b[1], n = b[2], i = b[3], l = b[4], c = b[5], d = b[6], u = b[7], h = b[8]);
            let x = void 0 === d ? "default" : d,
                C = void 0 !== u && u,
                _ = void 0 !== h && h,
                w = "default" === x && "bg-surface-elevated-secondary shadow-md",
                I = C && !_ && "in-data-[comment-layout=floating]:shadow-none!",
                S = C && "default" === x && "in-data-[comment-layout=floating]:border in-data-[comment-layout=floating]:bg-surface-elevated!",
                T = C && "default" === x && (_ ? "in-data-[comment-layout=floating]:border-strong in-data-[comment-layout=floating]:rounded-xl! in-data-[comment-layout=floating]:shadow-[0_2px_10px_rgb(0_0_0/5%)]!" : "in-data-[comment-layout=floating]:border-border"),
                j = void 0 !== c && c ? "transition-none" : "transition-[height,width,opacity]";
            return b[9] !== n || b[10] !== w || b[11] !== I || b[12] !== S || b[13] !== T || b[14] !== j ? (p = (0, s.b)("surface-AyYLmv", "pointer-events-auto isolate rounded-[22px] ease-enter-snappy motion-reduce:transition-none", w, I, S, T, j, n), b[9] = n, b[10] = w, b[11] = I, b[12] = S, b[13] = T, b[14] = j, b[15] = p) : p = b[15], b[16] !== l ? (g = {
                ...o.d,
                ...l
            }, b[16] = l, b[17] = g) : g = b[17], b[18] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, s.b)("content-Sj8_aX", "overflow-hidden rounded-[inherit] bg-inherit"), b[18] = m) : m = b[18], b[19] !== t ? (f = (0, a.jsx)("div", {
                className: m,
                children: t
            }), b[19] = t, b[20] = f) : f = b[20], b[21] !== C || b[22] !== x ? (v = "default" === x ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: (0, s.b)("pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-multiply outline-1 outline-border", C && "in-data-[comment-layout=floating]:hidden")
            }) : null, b[21] = C, b[22] = x, b[23] = v) : v = b[23], b[24] !== i || b[25] !== p || b[26] !== g || b[27] !== f || b[28] !== v ? (y = (0, a.jsxs)("div", {
                ...i,
                className: p,
                style: g,
                children: [f, v]
            }), b[24] = i, b[25] = p, b[26] = g, b[27] = f, b[28] = v, b[29] = y) : y = b[29], y
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
            h = n("Zqzr"),
            p = n("T1PX");

        function g(e) {
            let t, n, o, i, l, c, d = (0, r.c)(13),
                {
                    children: u,
                    source: g
                } = e,
                m = (0, s.useRef)(null),
                f = !(0, p.a)() && g.width > 0 && g.height > 0;
            d[0] !== f || d[1] !== g ? (t = () => {
                let e = m.current,
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
                                o = (g.left - a.left) * r,
                                i = (g.top - a.top) * s,
                                l = (a.right - g.right) * r,
                                c = (a.bottom - g.bottom) * s;
                            e.style.setProperty("--entry-inset", `${i}px ${l}px ${c}px ${o}px`), e.style.setProperty("--entry-transform", `translate(${o}px, ${i}px) scale(${g.width/a.width}, ${g.height/a.height})`), e.dataset.phase = "source", n = t.requestAnimationFrame(() => {
                                e.dataset.phase = "open"
                            })
                        })
                    });
                return a.observe(e), () => {
                    a.disconnect(), t.cancelAnimationFrame(n), delete e.dataset.phase, e.style.removeProperty("--entry-inset"), e.style.removeProperty("--entry-transform")
                }
            }, n = [f, g], d[0] = f, d[1] = g, d[2] = t, d[3] = n) : (t = d[2], n = d[3]), (0, s.useLayoutEffect)(t, n);
            let v = f ? "entry-yS3y1e" : void 0;
            return d[4] === Symbol.for("react.memo_cache_sentinel") ? (o = {
                position: "relative",
                maxWidth: "100%",
                width: h.U
            }, d[4] = o) : o = d[4], d[5] !== f ? (i = f ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "surface-Iou1vs pointer-events-none absolute inset-0 rounded-[22px] bg-surface-elevated-secondary shadow-md outline-1 outline-border"
            }) : null, d[5] = f, d[6] = i) : i = d[6], d[7] !== u ? (l = (0, a.jsx)("div", {
                className: "content-ARLCcU",
                children: u
            }), d[7] = u, d[8] = l) : l = d[8], d[9] !== v || d[10] !== i || d[11] !== l ? (c = (0, a.jsxs)("div", {
                ref: m,
                "data-selection-annotation-entry": "",
                className: v,
                style: o,
                children: [i, l]
            }), d[9] = v, d[10] = i, d[11] = l, d[12] = c) : c = d[12], c
        }
        let m = (0, d.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(789716), n.e(633848), n.e(326035), n.e(399992)]).then(n.bind(n, "FQ1K"))).SelectedTextAnnotationEditor, {
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
            }), p[5] = n.onCancel, p[6] = i) : i = p[6], p[7] !== n ? (l = (0, a.jsx)(m, {
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
            return p[15] !== f || p[16] !== t ? (h = null == t ? f : (0, a.jsx)(g, {
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
                g = void 0 !== h && h,
                m = g ? "alert" : "status";
            return d[0] !== g ? (t = g ? (0, a.jsx)(o.a, {
                id: "responseTextAnnotationMarkers.editor.loadError",
                defaultMessage: "Couldn't load the editor. Reload to try again"
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(u.a, {}), (0, a.jsx)(o.a, {
                    id: "responseTextAnnotationMarkers.editor.loading",
                    defaultMessage: "Loading editor…"
                })]
            }), d[0] = g, d[1] = t) : t = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(o.a, {
                id: "responseTextAnnotationMarkers.editor.close",
                defaultMessage: "Close"
            }), d[2] = n) : n = d[2], d[3] !== p ? (s = (0, a.jsx)(l.a, {
                color: "secondary",
                onClick: p,
                children: n
            }), d[3] = p, d[4] = s) : s = d[4], d[5] !== m || d[6] !== t || d[7] !== s ? (c = (0, a.jsxs)(i.a, {
                className: "flex flex-col items-center justify-center gap-3 p-4 text-center text-sm text-secondary select-none",
                role: m,
                children: [t, s]
            }), d[5] = m, d[6] = t, d[7] = s, d[8] = c) : c = d[8], c
        }
        f.prefetch = () => m.prefetch()
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
                [C] = (0, o.useState)(p);
            return f[0] !== b || f[1] !== C || f[2] !== x || f[3] !== v ? (t = () => {
                if (i.a?.windowTitle == null) return;
                let e = {
                    owner: C,
                    title: null == v ? void 0 : b ?? null
                };
                x.set(u, t => t.some(e => e.owner === C) ? t.map(t => t.owner === C ? e : t) : [...t, e]), m(x)
            }, n = [x, C, v, b], f[0] = b, f[1] = C, f[2] = x, f[3] = v, f[4] = t, f[5] = n) : (t = f[4], n = f[5]), (0, o.useEffect)(t, n), f[6] !== C || f[7] !== x ? (a = () => () => {
                i.a?.windowTitle != null && (x.set(u, e => e.filter(e => e.owner !== C)), m(x))
            }, c = [x, C], f[6] = C, f[7] = x, f[8] = a, f[9] = c) : (a = f[8], c = f[9]), (0, o.useEffect)(a, c), f[10] !== v ? (d = () => {
                if (null == v) return;
                let e = document.title;
                g(v);
                let t = document.title;
                return () => {
                    document.title === t && g(e)
                }
            }, h = [v], f[10] = v, f[11] = d, f[12] = h) : (d = f[11], h = f[12]), (0, o.useEffect)(d, h), null
        }

        function p() {
            return Symbol()
        }

        function g(e) {
            let t = document.head.querySelector("title")?.firstChild;
            t instanceof Text && null == t.nextSibling ? t.data = e : document.title = e
        }

        function m(e) {
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
                let g = null == t ? null : s?.querySelector(t),
                    m = g instanceof HTMLElement ? g.getBoundingClientRect().top : void 0,
                    f = o({
                        ...h,
                        bottomBoundaryTop: m
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
                }, C = null == b ? v : new DOMRect((v.left - b.left) / d, (v.top - b.top) / d, v.width / d, v.height / d), _ = l(h.range.startContainer) ?? h.element;
                return {
                    direction: "rtl" === window.getComputedStyle(_).direction ? "rtl" : "ltr",
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
            s = n("on57"),
            o = n("zd8w"),
            i = n("wD9O"),
            l = n("i7gm"),
            c = n("jDEJ"),
            d = n("bIvi"),
            u = n("w5yV"),
            h = n("ajVv");

        function p(e) {
            return null != e
        }

        function g(e) {
            return e.current
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, f, v, y, b, x, C, _ = (0, r.c)(40),
                    {
                        align: w,
                        bottomBoundarySelector: I,
                        children: S,
                        className: T,
                        onOpen: j,
                        portalTargetSelector: E,
                        targetContainer: P,
                        targetContainerRefs: A,
                        targetSelector: M
                    } = e,
                    R = void 0 === M ? h.b : M,
                    k = (0, i.c)(),
                    O = (0, o.useRef)(null),
                    N = (0, o.useRef)(!1),
                    B = (0, o.useRef)(null),
                    z = (0, o.useRef)(null),
                    [G, F] = (0, o.useState)(null);
                _[0] !== j ? (t = e => {
                    j?.(e)
                }, _[0] = j, _[1] = t) : t = _[1];
                let L = (0, o.useEffectEvent)(t);
                _[2] !== G || _[3] !== k ? (n = () => {
                    let e = B.current?.getBoundingClientRect();
                    if (null == G || null == e) return;
                    let t = G.portalTarget?.getBoundingClientRect(),
                        n = null == t ? 1 : k;
                    return {
                        point: {
                            x: e.left + e.width / 2,
                            y: e.bottom
                        },
                        width: e.width,
                        selectionRect: {
                            x: G.rect.left * n + (t?.left ?? 0),
                            y: G.rect.top * n + (t?.top ?? 0),
                            width: G.rect.width * n,
                            height: G.rect.height * n
                        },
                        windowZoom: k
                    }
                }, _[2] = G, _[3] = k, _[4] = n) : n = _[4];
                let D = (0, d.a)(n);
                if (_[5] !== I || _[6] !== L || _[7] !== E || _[8] !== P || _[9] !== A || _[10] !== R || _[11] !== k ? (m = () => {
                        let e = null,
                            t = () => {
                                null != O.current && (window.cancelAnimationFrame(O.current), O.current = null)
                            },
                            n = () => {
                                t();
                                let e = window.getSelection();
                                null == z.current && (null == e || 0 === e.rangeCount || e.isCollapsed) || (O.current = window.requestAnimationFrame(() => {
                                    O.current = null;
                                    let e = null != P || null == A ? [P] : A.map(g).filter(p),
                                        t = null;
                                    for (let n of e)
                                        if (null != (t = (0, u.c)({
                                                bottomBoundarySelector: I,
                                                portalTarget: null == E ? void 0 : n?.querySelector(E) ?? void 0,
                                                targetContainer: n,
                                                targetSelector: R,
                                                windowZoom: k
                                            }))) break;
                                    (0, u.d)(z.current, t) || (null == z.current && null != t && L(t), z.current = t, F(t))
                                }))
                            },
                            a = () => {
                                let e = window.getSelection();
                                N.current || null == e || 0 === e.rangeCount || e.isCollapsed || n()
                            },
                            r = t => {
                                let r = window.getSelection(),
                                    s = z.current?.portalTarget;
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
                                if (2 === e.button || 0 === e.button && e.ctrlKey && (0, c.a)()) return;
                                let n = e.target;
                                n instanceof Node && B.current?.contains(n) || (N.current = !0, t(), z.current = null, F(null))
                            },
                            o = () => {
                                N.current = !1, n()
                            },
                            i = () => {
                                if (N.current) {
                                    t(), z.current = null, F(null);
                                    return
                                }
                                n()
                            };
                        return n(), document.addEventListener("selectionchange", i), window.addEventListener("dblclick", n), window.addEventListener("keyup", n), window.addEventListener("pointerdown", s), window.addEventListener("pointerup", o), window.addEventListener("pointercancel", o), window.addEventListener("resize", a), window.addEventListener("scroll", r, !0), () => {
                            null != e && window.clearTimeout(e), t(), document.removeEventListener("selectionchange", i), window.removeEventListener("dblclick", n), window.removeEventListener("keyup", n), window.removeEventListener("pointerdown", s), window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o), window.removeEventListener("resize", a), window.removeEventListener("scroll", r, !0)
                        }
                    }, _[5] = I, _[6] = L, _[7] = E, _[8] = P, _[9] = A, _[10] = R, _[11] = k, _[12] = m) : m = _[12], _[13] !== I || _[14] !== E || _[15] !== P || _[16] !== A || _[17] !== R || _[18] !== k ? (f = [I, E, P, A, R, k], _[13] = I, _[14] = E, _[15] = P, _[16] = A, _[17] = R, _[18] = k, _[19] = f) : f = _[19], (0, o.useEffect)(m, f), null == G) return null;
                let H = .5;
                "start" === (void 0 === w ? "center" : w) && (H = +("rtl" === G.direction));
                let W = G.rect.left + G.rect.width * H,
                    q = G.viewportHorizontalBounds.left + 8 - W,
                    U = G.viewportHorizontalBounds.right - 8 - W,
                    K = G.portalTarget ?? document.body,
                    V = null == G.portalTarget ? "fixed z-50" : "absolute z-[1]";
                _[20] !== T || _[21] !== V ? (v = (0, s.b)("pointer-events-none w-max", V, T), _[20] = T, _[21] = V, _[22] = v) : v = _[22];
                let Y = G.viewportHorizontalBounds.right - G.viewportHorizontalBounds.left - 16,
                    Q = G.rect.top - 8,
                    $ = `translateX(clamp(${q}px, ${-100*H}%, calc(${U}px - 100%))) translateY(-100%)`;
                return _[23] !== W || _[24] !== Y || _[25] !== Q || _[26] !== $ ? (y = {
                    left: W,
                    maxWidth: Y,
                    top: Q,
                    transform: $
                }, _[23] = W, _[24] = Y, _[25] = Q, _[26] = $, _[27] = y) : y = _[27], _[28] !== S || _[29] !== D || _[30] !== G || _[31] !== k ? (b = null == G.portalTarget && 1 !== k ? (0, a.jsx)("div", {
                    style: {
                        zoom: k
                    },
                    children: S(G, D)
                }) : S(G, D), _[28] = S, _[29] = D, _[30] = G, _[31] = k, _[32] = b) : b = _[32], _[33] !== y || _[34] !== b || _[35] !== v ? (x = (0, a.jsx)("div", {
                    ref: B,
                    className: v,
                    style: y,
                    children: b
                }), _[33] = y, _[34] = b, _[35] = v, _[36] = x) : x = _[36], _[37] !== x || _[38] !== K ? (C = (0, a.jsx)(l.a, {
                    container: K,
                    children: x
                }), _[37] = x, _[38] = K, _[39] = C) : C = _[39], C
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
            h = n("jb3G"),
            p = n("mN6P"),
            g = n("QhgR");
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, f, v, y, b = (0, r.c)(56),
                    {
                        conversationTerminology: x,
                        onAddSelectedText: C,
                        onStartFileAnnotation: _,
                        onDismissFileAnnotation: w,
                        onCommentSelectedText: I,
                        onEditModeChange: S,
                        onEditSelectedText: T,
                        onMoreDetails: j,
                        onOpenSideChat: E,
                        resume: P,
                        selectedText: A
                    } = e,
                    M = void 0 === x ? "task" : x,
                    R = (0, o.a)(),
                    [k, O] = (0, s.useState)(P?.mode === "edit" ? P.instruction : ""),
                    [N, B] = (0, s.useState)(P?.mode ?? "actions"),
                    [z, G] = (0, s.useState)(null);
                if (null != z) {
                    let e, t, n;
                    return b[0] !== w ? (e = () => w?.(!1), t = () => w?.(!0), b[0] = w, b[1] = e, b[2] = t) : (e = b[1], t = b[2]), b[3] !== z.rect || b[4] !== z.submit || b[5] !== e || b[6] !== t ? (n = (0, a.jsx)(l.a, {
                        entryRect: z.rect,
                        onCancel: e,
                        onEscape: t,
                        onSubmit: z.submit
                    }), b[3] = z.rect, b[4] = z.submit, b[5] = e, b[6] = t, b[7] = n) : n = b[7], n
                }
                if ("pending" === N) return null;
                if ("edit" === N && null != T) {
                    let e, t, n, r, s, o, i, l, d, p;
                    return b[8] !== S ? (e = e => {
                        e.stopPropagation(), "Escape" === e.key && (e.preventDefault(), S?.(!1), B("actions-focused"))
                    }, b[8] = S, b[9] = e) : e = b[9], b[10] !== k || b[11] !== S || b[12] !== T ? (t = e => {
                        e.preventDefault(), 0 !== k.trim().length && (B("pending"), T(k).then(e => {
                            "retry" === e && (S?.(!1), B("actions-focused"))
                        }))
                    }, b[10] = k, b[11] = S, b[12] = T, b[13] = t) : t = b[13], b[14] !== R ? (n = R.formatMessage({
                        id: "selectedTextOverlay.editInput",
                        defaultMessage: "Edit instruction"
                    }), b[14] = R, b[15] = n) : n = b[15], b[16] !== R ? (r = R.formatMessage({
                        id: "selectedTextOverlay.editPlaceholder",
                        defaultMessage: "Describe the edit…"
                    }), b[16] = R, b[17] = r) : r = b[17], b[18] === Symbol.for("react.memo_cache_sentinel") ? (s = e => {
                        O(e.target.value)
                    }, b[18] = s) : s = b[18], b[19] !== k || b[20] !== n || b[21] !== r ? (o = (0, a.jsx)("input", {
                        "aria-label": n,
                        autoComplete: "off",
                        autoFocus: !0,
                        className: "min-w-0 flex-1 bg-transparent text-sm text-default outline-none placeholder:text-codex-description",
                        placeholder: r,
                        required: !0,
                        value: k,
                        onChange: s
                    }), b[19] = k, b[20] = n, b[21] = r, b[22] = o) : o = b[22], b[23] !== R ? (i = R.formatMessage({
                        id: "selectedTextOverlay.editSubmit",
                        defaultMessage: "Submit edit instruction"
                    }), b[23] = R, b[24] = i) : i = b[24], b[25] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(u.a, {
                        "aria-hidden": !0,
                        asset16: g.a,
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
                return b[33] !== M || b[34] !== C || b[35] !== _ || b[36] !== A ? (t = null != C || null != _ ? (0, a.jsx)(d.b, {
                    onClick: e => {
                        null != _ ? G({
                            rect: (e.currentTarget.parentElement ?? e.currentTarget).getBoundingClientRect(),
                            submit: _()
                        }) : (window.getSelection()?.removeAllRanges(), C?.(A))
                    },
                    children: "chat" === M ? (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.addToChat",
                        defaultMessage: "Ask ChatGPT"
                    }) : (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.addToCodex",
                        defaultMessage: "Add to chat"
                    })
                }) : null, b[33] = M, b[34] = C, b[35] = _, b[36] = A, b[37] = t) : t = b[37], b[38] !== j || b[39] !== A ? (n = null != j ? (0, a.jsx)(d.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), j(A)
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.moreDetails",
                        defaultMessage: "More details"
                    })
                }) : null, b[38] = j, b[39] = A, b[40] = n) : n = b[40], b[41] !== E || b[42] !== A ? (m = null != E ? (0, a.jsx)(d.b, {
                    onClick: e => {
                        window.getSelection()?.removeAllRanges(), E(A, (0, p.b)(e))
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.askInSideChat",
                        defaultMessage: "Ask in side chat"
                    })
                }) : null, b[41] = E, b[42] = A, b[43] = m) : m = b[43], b[44] !== I ? (f = null != I ? (0, a.jsx)(d.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), I()
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.comment",
                        defaultMessage: "Comment"
                    })
                }) : null, b[44] = I, b[45] = f) : f = b[45], b[46] !== N || b[47] !== S || b[48] !== T ? (v = null != T ? (0, a.jsx)(d.b, {
                    autoFocus: "actions-focused" === N,
                    onClick: () => {
                        S?.(!0), B("edit")
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.edit",
                        defaultMessage: "Edit"
                    })
                }) : null, b[46] = N, b[47] = S, b[48] = T, b[49] = v) : v = b[49], b[50] !== t || b[51] !== n || b[52] !== m || b[53] !== f || b[54] !== v ? (y = (0, a.jsxs)(d.a, {
                    children: [t, n, m, f, v]
                }), b[50] = t, b[51] = n, b[52] = m, b[53] = f, b[54] = v, b[55] = y) : y = b[55], y
            }
        })
    }),
    vRRZ: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "minus-sm-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-minus-sm-light-20",
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
    h24K: (function(e, t, n) {
        var a = n("gPp5");
        class r {
            constructor() {
                this.componentControls = new Set
            }
            subscribe(e) {
                return this.componentControls.add(e), () => this.componentControls.delete(e)
            }
            start(e, t) {
                this.componentControls.forEach(n => {
                    n.start(e.nativeEvent || e, t)
                })
            }
            cancel() {
                this.componentControls.forEach(e => {
                    e.cancel()
                })
            }
            stop() {
                this.componentControls.forEach(e => {
                    e.stop()
                })
            }
        }
        let s = () => new r;
        n.d(t, {}, {
            a: function() {
                return (0, a.a)(s)
            }
        })
    })
};