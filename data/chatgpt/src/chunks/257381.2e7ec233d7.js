export const __rspack_esm_ids = [257381];
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
            s = n("Q840"),
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
            let t, n, l, c, d, u, p, v, y, R, k, B, z, G, F, D, L, H, W, q, K, U, V = (0, r.c)(70),
                {
                    account: Q,
                    accountId: Y,
                    userId: $,
                    onClose: J,
                    onSwitchToWork: Z
                } = e,
                X = (0, s.y)(g.a),
                ee = (0, f.a)(),
                {
                    email: et
                } = (0, _.a)(),
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
            V[2] !== el || V[3] !== es ? (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE", el ? l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY" : es && (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE"), V[2] = el, V[3] = es, V[4] = l) : l = V[4], V[5] !== Q.account.account_user_role || V[6] !== l || V[7] !== ei || V[8] !== X ? (c = (e, t) => {
                (0, M.a)(X, m.yd, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: Q.account.account_user_role ?? void 0,
                    hasPaidSubscription: ei
                })
            }, V[5] = Q.account.account_user_role, V[6] = l, V[7] = ei, V[8] = X, V[9] = c) : c = V[9];
            let ed = c;
            V[10] !== J ? (d = () => {
                J(), (0, E.f)({
                    href: new URL("/codex/cloud", S.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, V[10] = J, V[11] = d) : d = V[11];
            let eu = d;
            V[12] !== Q.account.subscription_seat_pools_enabled || V[13] !== Y || V[14] !== eu || V[15] !== el || V[16] !== et || V[17] !== ee || V[18] !== es || V[19] !== ed || V[20] !== J || V[21] !== Z || V[22] !== en || V[23] !== X || V[24] !== $ ? (u = async () => {
                if ("requesting" !== en) {
                    if (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), es && !el) {
                        let e = new URL("/admin/members", S.h);
                        e.searchParams.set("account_id", Y), et && e.searchParams.set("search", et);
                        let t = e.toString(),
                            n = (0, A.c)(X, t, Y),
                            a = null == n ? null : await n;
                        J(), (0, E.f)({
                            href: a ?? t,
                            initiator: "open_in_browser_bridge",
                            openTarget: null == a ? void 0 : "external-browser"
                        });
                        return
                    }
                    ea("requesting");
                    try {
                        if (el) {
                            if (Q.account.subscription_seat_pools_enabled ? await w.Request.safePost("/accounts/{account_id}/users/{user_id}/seat/update", {
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
                                }) : await w.Request.safePatch("/accounts/{account_id}/users/{user_id}", {
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
                            (0, I.e)(X), await (0, x.g)("accounts-check"), await Promise.all([X.query.invalidate(C.b, Y), X.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), er.current && J()
                        } else {
                            if ((0, b.c)(X, Y), await w.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: Y
                                        }
                                    }
                                }), !er.current) return;
                            Z ? (J(), Z()) : eu(), X.get(P.f).success(ee.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted"
                            }))
                        }
                    } catch (e) {
                        er.current && ea(N(e) ?? "error")
                    }
                }
            }, V[12] = Q.account.subscription_seat_pools_enabled, V[13] = Y, V[14] = eu, V[15] = el, V[16] = et, V[17] = ee, V[18] = es, V[19] = ed, V[20] = J, V[21] = Z, V[22] = en, V[23] = X, V[24] = $, V[25] = u) : u = V[25];
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
            V[30] !== ed || V[31] !== J ? (y = e => {
                e || (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED"), J())
            }, V[30] = ed, V[31] = J, V[32] = y) : y = V[32], V[33] !== eh ? (R = e => {
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
            }), V[40] = em, V[41] = ef, V[42] = z, V[43] = G) : G = V[43], V[44] !== eu || V[45] !== ed || V[46] !== J || V[47] !== Z ? (F = () => {
                Z ? (J(), Z()) : (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), eu())
            }, V[44] = eu, V[45] = ed, V[46] = J, V[47] = Z, V[48] = F) : F = V[48], V[49] !== Z ? (D = Z ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex"
            }), V[49] = Z, V[50] = D) : D = V[50], V[51] !== F || V[52] !== D ? (L = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: F,
                children: D
            }), V[51] = F, V[52] = D, V[53] = L) : L = V[53], V[54] !== G || V[55] !== L ? (H = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [G, L]
            }), V[54] = G, V[55] = L, V[56] = H) : H = V[56], V[57] !== ee || V[58] !== en ? (W = null != en && "requesting" !== en ? (0, a.jsx)("p", {
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
            }), V[60] = B, V[61] = H, V[62] = W, V[63] = q) : q = V[63], V[64] !== q || V[65] !== R ? (K = (0, a.jsx)(j.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: R,
                children: q
            }), V[64] = q, V[65] = R, V[66] = K) : K = V[66], V[67] !== K || V[68] !== y ? (U = (0, a.jsx)(T.a, {
                open: !0,
                size: "wide",
                variant: "chatgpt",
                onOpenChange: y,
                children: K
            }), V[67] = K, V[68] = y, V[69] = U) : U = V[69], U
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
                f = (0, l.$)();
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
            s = n("Q840"),
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
        var a = n("Q840"),
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
            s = n("Q840"),
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
            BusinessAgentConversationHeader: () => K,
            BusinessAgentHomeHero: () => U
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
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
                children: (0, a.jsx)(D, {
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
                    children: (0, a.jsx)(D, {
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

        function D(e) {
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
        var L = n("KWLf"),
            H = n("Z98x"),
            W = n("zHQF");
        let q = (0, s.d)(c.a, (e, t) => {
            let {
                get: n
            } = t, a = n(l.c), r = a?.state?.businessProfileShareConversation, s = r?.intent ?? a?.state?.businessProfileShare, c = r?.conversationId ?? a?.state?.initialChatGptConversationId;
            if (null == a || s?.destination?.kind !== "agent" || "string" != typeof s.shareSessionId || "string" != typeof c || 0 === c.length || (0, d.d)(n, c) !== (0, d.d)(n, e) || !n(L.b) && !1 !== s.showInfoPanel && n(L.a) !== s.shareSessionId || !n(m.b) || n(o.f) !== s.accountId || n(o.k) !== s.userId) return null;
            if (null != r) {
                if ((0, p.j)(a.pathname)?.params.conversationId !== r.conversationId) return null
            } else if ("/" !== a.pathname && !(0, i.a)(a, n(l.d))) return null;
            let u = n(h.u, e);
            if (null == u || u.accountId !== s.accountId || null != u.userId && u.userId !== s.userId) return null;
            let g = s.destination;
            return ("ready" === u.status ? u.context.gizmoId === g.gizmoId && u.context.businessAgentId === g.businessAgentId : u.gizmoId === g.gizmoId) ? s.shareSessionId : null
        });

        function K(e) {
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

        function U(e) {
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
        var a = n("Q840"),
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
        var a = n("Q840"),
            r = n("nlNF"),
            s = n("OWtl"),
            o = n("wVL6");
        let i = (0, a.u)(s.a, null),
            l = (0, a.u)(s.a, null),
            c = (0, a.u)(s.a, null),
            d = "(max-width: 767px)";

        function u() {
            if ("u" < typeof window) return !1;
            let e = (0, o.a)();
            return "android_web" === e || "android_app" === e || "ios_web" === e || "ios_app" === e || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
        }
        let h = (0, a.h)(s.a, () => null, e => {
            let {
                set: t
            } = e;
            if (u()) return void t(!0);
            let n = "u" > typeof window ? window.matchMedia?.(d) : null;
            if (null == n) return void t(!1);
            let a = () => t(n.matches);
            return (a(), "function" == typeof n.addEventListener) ? (n.addEventListener("change", a), () => n.removeEventListener("change", a)) : (n.addListener(a), () => n.removeListener(a))
        });
        n.d(t, {}, {
            a: l,
            b: h,
            c: c,
            d: i,
            e: function(e, t) {
                let n = e.get(i);
                n?.shareSessionId === t && n.open && e.set(i, {
                    ...n,
                    open: !1
                })
            },
            f: function() {
                return u() || "u" > typeof window && window.matchMedia?.(d).matches === !0
            },
            g: function(e, t) {
                let n = e.get(r.c);
                null != n && (e.set(c, null), e.set(i, {
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
            s = n("Q840"),
            o = n("zd8w"),
            i = n("Wf1j"),
            l = n("HOLv"),
            c = n("OWtl"),
            d = n("KWLf"),
            u = n("YTUz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, p, g, m, f = (0, r.c)(16),
                    {
                        children: v,
                        opensDialog: y,
                        shareSessionId: b
                    } = e,
                    x = (0, s.y)(c.a),
                    C = (0, i.a)(),
                    _ = (0, s.z)(d.c),
                    w = (0, s.z)(null == y ? d.b : null),
                    I = (0, o.useRef)(null);
                f[0] !== _ || f[1] !== x || f[2] !== b ? (t = () => {
                    if (_ !== b) return;
                    let e = requestAnimationFrame(() => {
                        let e = I.current;
                        e?.getClientRects().length && null == e.closest('[inert], [aria-hidden="true"]') && x.get(d.c) === b && (e.focus({
                            preventScroll: !0
                        }), e.ownerDocument.activeElement === e && x.set(d.c, null))
                    });
                    return () => cancelAnimationFrame(e)
                }, n = [_, x, b], f[0] = _, f[1] = x, f[2] = b, f[3] = t, f[4] = n) : (t = f[3], n = f[4]), (0, o.useEffect)(t, n);
                let S = y ?? w ? "dialog" : void 0;
                return f[5] !== C ? (h = C.formatMessage({
                    id: "businessProfiles.shareReceiver.viewBusinessInfo",
                    defaultMessage: "View business information"
                }), f[5] = C, f[6] = h) : h = f[6], f[7] !== x || f[8] !== b ? (p = () => (0, d.g)(x, b), f[7] = x, f[8] = b, f[9] = p) : p = f[9], f[10] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsx)(l.a, {
                    asset: u.a,
                    className: "size-4 shrink-0 text-secondary"
                }), f[10] = g) : g = f[10], f[11] !== v || f[12] !== S || f[13] !== h || f[14] !== p ? (m = (0, a.jsxs)("button", {
                    ref: I,
                    "aria-haspopup": S,
                    "aria-label": h,
                    className: "hover:bg-surface-hover inline-flex min-h-11 max-w-full min-w-0 items-center gap-1.5 rounded-lg px-1 text-start focus-visible:outline-2 focus-visible:-outline-offset-2",
                    onClick: p,
                    type: "button",
                    children: [v, g]
                }), f[11] = v, f[12] = S, f[13] = h, f[14] = p, f[15] = m) : m = f[15], m
            }
        })
    }),
    sbTf: (function(e, t, n) {
        var a = n("iRMi"),
            r = n("Q840"),
            s = n("AuIy"),
            o = n("U2UX"),
            i = n("ZU27"),
            l = n("gbrq"),
            c = n("K33Q"),
            d = n("mv4d"),
            u = n("w7Qu"),
            h = n("dt5v"),
            p = n("bWX0"),
            g = n("smHt"),
            m = n("aoTb"),
            f = n("NRR1"),
            v = n("pqpL"),
            y = n("uqg3"),
            b = n("XcRr"),
            x = n("YF6h"),
            C = n("yGJW"),
            _ = n("OWtl"),
            w = n("tSEg"),
            I = n("OMIV"),
            S = n("dk3M"),
            T = n("WFY2"),
            j = n("PFzG"),
            E = n("vldH"),
            P = n("ISgP"),
            A = n("t2JB"),
            M = n("DIH2"),
            R = n("aFoA"),
            k = n("H8lk"),
            O = n("dQRk"),
            N = n("rxj0"),
            B = n("f2PP"),
            z = n("S95W");
        let G = (0, r.u)(_.a, !0),
            F = (0, r.v)(_.a, e => null);
        n.d(t, {}, {
            a: G,
            b: function(e, t) {
                let n = e.get(R.a, t) ?? t,
                    r = e.get(j.b, t),
                    _ = e.get(F, n),
                    D = null;
                null != r && _?.attemptId === r && (D = _);
                let L = {
                        attemptId: r,
                        observedTurn: D?.observedTurn ?? !1,
                        activeRequestId: D?.activeRequestId ?? null,
                        dismissed: D?.dismissed ?? !1,
                        initialCreationMessageIds: D?.initialCreationMessageIds ?? new Set,
                        openedCreatedPage: D?.openedCreatedPage ?? !1
                    },
                    H = e.get(l.h),
                    W = L.observedTurn,
                    q = null;

                function K(t) {
                    for (let n of t.toReversed())
                        if (!L.initialCreationMessageIds.has(n.messageId) && (0, y.openSpacePageSidePanelTab)(e, n.pageId, {
                                title: n.title,
                                openSource: "turn_auto_open"
                            }).opened) {
                            L.openedCreatedPage = !0;
                            break
                        }
                }
                let U = e.watch(e => {
                        let {
                            get: n
                        } = e;
                        if (n(w.j) || null != n(O._, t)) return;
                        let a = n(O.R, t);
                        if (!a?.length) return;
                        let r = n(f.e),
                            s = n(O.j, t),
                            o = n(O.y, t);
                        if (null != r && null != s && (null == o || "tpp" === o))
                            for (let e of a)(0, x.h)(r, e.pageId, s, o ?? null, "created")
                    }),
                    V = e.watch(n => {
                        let {
                            get: r
                        } = n, f = r(O.ab, t), x = r(l.h), _ = r(O.cb, t);
                        if ((0, O.Bb)(f)) {
                            W = !1;
                            let e = r(j.b, t),
                                n = r(O.db, t),
                                a = !L.observedTurn || L.attemptId !== e;
                            if (L.attemptId = e, a) {
                                let e = q;
                                q = null, e?.abort(), L.observedTurn = !0, L.activeRequestId = n, L.dismissed = _, L.openedCreatedPage = !1
                            } else L.activeRequestId = n ?? L.activeRequestId, L.dismissed = L.dismissed || _ || H && !x;
                            H = x;
                            let s = !_ && !L.dismissed && !x && !L.openedCreatedPage && !r(w.j) && !r(O.D, t) && !r(N.e, t),
                                o = [];
                            if ((a || s) && (o = r(O.R, t) ?? []), a) {
                                L.initialCreationMessageIds = new Set(o.map(e => e.messageId));
                                return
                            }
                            s && K(o);
                            return
                        }
                        if (!L.observedTurn) return;
                        let R = r(O.w, t);
                        if ("idle" !== f || _ || null != R && "completed" !== R.result || null != e.get(O.D, t) || e.get(w.j) || e.get(N.e, t)) {
                            L.observedTurn = !1;
                            return
                        }
                        if (W) {
                            if (L.dismissed || x || L.openedCreatedPage || r(j.b, t) !== L.attemptId) {
                                L.observedTurn = !1;
                                return
                            }
                            if (R?.result !== "completed") return;
                            K(r(O.R, t) ?? []), L.observedTurn = !L.openedCreatedPage;
                            return
                        }
                        if (L.observedTurn = !1, R?.result !== "completed" || R.requestId !== L.activeRequestId) return;
                        let F = e.get(O.N, t);
                        if (null == F) return;
                        let D = (0, s.b)({
                                mapping: F,
                                current_node: e.get(O.C, t)
                            }),
                            U = D.findLast(z.b);
                        if (U?.status !== "finished_successfully") return;
                        let V = [...(0, k.e)(D).outputs, ...D.flatMap(e => (0, k.c)(e).map(e => e.file))],
                            Q = e.get(P.b, t)?.at(-1);
                        if (Q?.turn.status !== "complete") return;
                        let Y = [...(0, d.b)(D), ...Q.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, c.a)(e, Y, !L.dismissed) || !L.dismissed && !L.openedCreatedPage && (0, b.a)(e, Y)) && !L.dismissed && !x && !L.openedCreatedPage) {
                            for (let t of (0, v.c)((0, s.e)(U)).toReversed())
                                if ((0, y.openSpacePageSidePanelTab)(e, t.id, {
                                        openSource: "turn_auto_open",
                                        blockId: t.blockId
                                    }).opened) return;
                            if (r(G) && (0, B.canOpenChatGptFilePreview)({
                                    browserPreview: !0
                                })) {
                                for (let n of Q.turn.items)
                                    if ("assistant-message" === n.type && n.completed)
                                        for (let [r, s] of n.contentReferences.entries()) {
                                            let c = (0, A.a)(s),
                                                d = null == c ? null : (0, u.a)(c),
                                                f = V.find(e => null != e.fileId && e.fileId === (s.file_id ?? s.id) || null != e.libraryFileId && e.libraryFileId === s.library_file_id);
                                            if ("file" !== s.type || !(0, o.a)(s) || null == c || null == d || !(0, u.f)(d) || null == f && null == (0, M.b)(s.sandbox_path) && !(0, M.b)(s.matched_text)?.includes("sandbox:") || f?.sizeBytes != null && f.sizeBytes > g.a) continue;
                                            let v = n.contentReferenceMessageIds?.[r] ?? n.messageId,
                                                y = (0, E.b)(s, {
                                                    fileName: c,
                                                    messageId: v
                                                });
                                            if (null == y) continue;
                                            if (e.get(I.g)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let b = e.get(O.j, t) ?? t,
                                                x = `${v??"message"}:${String(r)}:${c}`,
                                                _ = `chatgpt-file:${b}:${x}`,
                                                w = {
                                                    turnId: Q.id,
                                                    inputMessageId: D.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: v ?? null
                                                },
                                                j = new AbortController,
                                                P = (0, B.openChatGptFile)(e, {
                                                    conversationId: b,
                                                    fileName: c,
                                                    gizmoId: e.get(O.T, t),
                                                    sharedConversationId: e.get(O._, t),
                                                    target: y,
                                                    tabKey: x,
                                                    browserPreview: !0,
                                                    isAccessBlocked: e => e.get(N.e, t),
                                                    downloadFallback: !1,
                                                    openSource: "auto_open",
                                                    originatingTurn: w,
                                                    signal: j.signal,
                                                    onOpened: () => {
                                                        let t = e.get(i.l.activeTab$);
                                                        j.signal.aborted || t?.tabId !== _ || t.tabType.kind !== h.a || ((0, C.a)(e, a.CodexFileOpened, {
                                                            threadId: b,
                                                            turnId: w.turnId,
                                                            inputMessageId: w.inputMessageId ?? void 0,
                                                            messageId: w.messageId ?? void 0,
                                                            fileExtension: (0, p.c)(c) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, C.a)(e, a.CodexWorkspaceFilePreviewAttempted, (0, m.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: w,
                                                            path: c,
                                                            threadId: b,
                                                            windowType: "browser"
                                                        })), (0, S.b)(e, _, "auto_open"))
                                                    },
                                                    onClose: () => j.abort()
                                                });
                                            q = j;
                                            let R = e.watch(e => {
                                                let {
                                                    get: n
                                                } = e;
                                                (n(l.h) && n(i.l.activeTab$)?.tabId !== _ || n(N.e, t)) && j.abort()
                                            });
                                            P.catch(e => {
                                                j.signal.aborted || T.a.debug("Automatic ChatGPT artifact preview could not open", {
                                                    safe: {},
                                                    sensitive: {
                                                        error: e
                                                    }
                                                })
                                            }).finally(() => {
                                                R(), q === j && (q = null)
                                            });
                                            return
                                        }
                            }
                        }
                    });
                return () => {
                    U(), V(), q?.abort(), null != L.attemptId && e.set(F, n, {
                        ...L,
                        attemptId: L.attemptId
                    })
                }
            }
        })
    }),
    YiPf: (function(e, t, n) {
        n.d(t, {
            a: () => y
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
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
                y = (0, l.$)(),
                b = (0, o.useRef)(!1);
            i[0] !== g || i[1] !== p || i[2] !== y || i[3] !== m || i[4] !== v ? (t = () => {
                m?.(), v.get(c.f).info(p, {
                    id: "conversation-inaccessible",
                    duration: 5
                }), (0, d.g)("conversation_unavailable", () => y(g, {
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
            r = n("Q840"),
            s = n("bjAA"),
            o = n("TL6G"),
            i = n("OWtl"),
            l = n("eKlv"),
            c = n("XtQP");
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, u, h, p, g, m = (0, a.c)(15),
                    {
                        conversationId: f
                    } = e,
                    v = (0, r.y)(i.a);
                return m[0] !== f || m[1] !== v ? (t = () => {
                    (0, c.c)(v, f).catch(() => (0, s.c)(v))
                }, m[0] = f, m[1] = v, m[2] = t) : t = m[2], (0, s.d)(f, t), m[3] !== f || m[4] !== v ? (n = () => void(0, l.renameActiveChatGptConversation)(v, f), d = [f, v], m[3] = f, m[4] = v, m[5] = n, m[6] = d) : (n = m[5], d = m[6]), (0, o.d)("rename-thread", n, d), m[7] !== f || m[8] !== v ? (u = () => (0, l.d)(v, f), h = [f, v], m[7] = f, m[8] = v, m[9] = u, m[10] = h) : (u = m[9], h = m[10]), (0, o.d)("toggle-thread-pin", u, h), m[11] !== f || m[12] !== v ? (p = () => (0, l.a)(v, f), g = [f, v], m[11] = f, m[12] = v, m[13] = p, m[14] = g) : (p = m[13], g = m[14]), (0, o.d)("archive-thread", p, g), null
            }
        })
    }),
    lnPj: (function(e, t, n) {
        n.d(t, {
            a: () => o7,
            ChatGptConversationPage: () => o8
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("v8gE"),
            o = n("FS1B"),
            i = n("T0Rc"),
            l = n("HVBu"),
            c = n.n(l),
            d = n("Q840"),
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
            I = n("sSJB"),
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
            D = n("TSib"),
            L = n("jEN2"),
            H = n("kphc"),
            W = n("YWcr"),
            q = n("mwa5"),
            K = n("UxN3"),
            U = n("SGsN"),
            V = n("XcNx"),
            Q = n("GKsW"),
            Y = n("yWTM"),
            $ = n("SkIz"),
            J = n("hsSf"),
            Z = n("ibLK"),
            X = n("Xc94"),
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
                E = (0, v.$)(),
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
                let r = I.get(U.f).info((0, a.jsx)(eb.a, {
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
                n?.(null), I.get(U.f).danger(S.formatMessage(eE.a.unarchiveError), {
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
                mutate: D,
                isPending: L,
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
                K = L || F?.status === "restoring";
            return C[38] !== D ? (g = () => D(), C[38] = D, C[39] = g) : g = C[39], C[40] !== z || C[41] !== B || C[42] !== p || C[43] !== q || C[44] !== K || C[45] !== g ? (y = (0, a.jsx)(eP.a, {
                deleting: B,
                onDelete: p,
                restored: q,
                restoring: K,
                onUnarchive: g,
                onDone: z
            }), C[40] = z, C[41] = B, C[42] = p, C[43] = q, C[44] = K, C[45] = g, C[46] = y) : y = C[46], C[47] !== R || C[48] !== W || C[49] !== S || C[50] !== k || C[51] !== B ? (b = null != R && (0, a.jsx)(ex.a, {
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
            eD = n("rvFo"),
            eL = n("jZDY"),
            eH = n("Bc5r"),
            eW = n("bIvi"),
            eq = n("Elta"),
            eK = n("eW0T"),
            eU = n("hOYb"),
            eV = n("eShZ"),
            eQ = n("qqut"),
            eY = n("CsbC"),
            e$ = n("tCyZ"),
            eJ = n("zJsu"),
            eZ = n("GgLN"),
            eX = n("KdfG"),
            e0 = n("AOHi"),
            e1 = n("sbTf"),
            e2 = n("BJ43"),
            e3 = n("d2rV"),
            e4 = n("aLqR"),
            e5 = n("VlIB"),
            e6 = n("Ow2S"),
            e8 = n("G6Ip");
        let e7 = (0, d.v)(ej.a, e => null);
        var e9 = n("zOE4");

        function te(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s,
                    children: o
                } = e;
            if ("loading" === (0, d.x)(e6.t, s)) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(e9.LoadingPage, {
                    debugName: "ChatGptConversationPicker",
                    fillParent: !0
                }), n[0] = e) : e = n[0], e
            }
            return n[1] !== o ? (t = (0, a.jsx)(a.Fragment, {
                children: o
            }), n[1] = o, n[2] = t) : t = n[2], t
        }
        var tt = n("SZi8"),
            tn = n("lBzi"),
            ta = n("Ga6O"),
            tr = n("PTAr"),
            ts = n("slpy"),
            to = n("BOYb"),
            ti = n("Sm6l"),
            tl = n("bf6R"),
            tc = n("Bbed"),
            td = n("O666"),
            tu = n("tNq4"),
            th = n("aFoA"),
            tp = n("dQRk"),
            tg = n("Skaw"),
            tm = n("PYCG");

        function tf(e) {
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
                P = (0, d.z)(null == I ? null : tg.a),
                A = (0, d.x)(tp.j, y),
                {
                    data: M
                } = (0, d.x)(tn.chatGptConversationQueryById$, null == I ? null : A),
                R = (0, d.x)(th.a, null == I ? null : A),
                k = (0, d.x)(tp.B, R);
            v[0] !== R || v[1] !== M || v[2] !== k || v[3] !== I || v[4] !== A ? (t = null == M && null != R && null != A ? {
                id: A,
                gizmo_id: I,
                is_temporary_chat: k
            } : void 0, v[0] = R, v[1] = M, v[2] = k, v[3] = I, v[4] = A, v[5] = t) : t = v[5];
            let O = t,
                {
                    data: B
                } = (0, d.x)(N.b, I),
                z = null == I ? null : (0, tg.b)(P ?? null, x ?? M ?? O, B),
                G = (0, d.x)(tu.b, y);
            v[6] !== j ? (n = j.formatMessage(eC.a.headerShare), v[6] = j, v[7] = n) : n = v[7];
            let F = n,
                D = (0, d.x)(null == x ? tu.a : null, y),
                L = null != x || null != D,
                H = null;
            if (_ || z?.type === "unavailable") {
                let e;
                v[8] !== j ? (e = j.formatMessage(eC.a.shareDisabledRestricted), v[8] = j, v[9] = e) : e = v[9], H = e
            } else if (w && !L) {
                let e;
                v[10] !== j ? (e = j.formatMessage(eC.a.shareDisabledStreaming), v[10] = j, v[11] = e) : e = v[11], H = e
            } else if (!C || !L) {
                let e;
                v[12] !== j ? (e = j.formatMessage(eC.a.shareDisabledNotReady), v[12] = j, v[13] = e) : e = v[13], H = e
            }
            let W = null != H || G;
            v[14] !== W ? (s = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: W
            }, v[14] = W, v[15] = s) : s = v[15];
            let q = (0, d.x)(td.b, s),
                K = "loaded" === E.status && "personal" === E.structure && (null == z || "snapshot" === z.type),
                U = null != H || G;
            v[16] !== U ? (o = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: U
            }, v[16] = U, v[17] = o) : o = v[17];
            let V = (0, d.x)(K ? td.b : null, o),
                Q = !(0, to.d)() && !(0, to.b)(),
                Y = null != H || G;
            v[18] !== Y ? (i = {
                layer: "2296435893",
                parameter: "show_share_text",
                disableExposureLog: Y
            }, v[18] = Y, v[19] = i) : i = v[19];
            let $ = (0, d.x)(Q ? td.b : null, i);
            v[20] !== y || v[21] !== O || v[22] !== I || v[23] !== S || v[24] !== x ? (l = () => {
                let e = null == x ? S.get(tu.c, y) : {
                    serverConversationId: x.conversation_id,
                    title: x.title,
                    currentNodeId: x.current_node ?? void 0
                };
                null != e && (0, tm.shareChatGptProjectConversation)(S, e.serverConversationId, e.title ?? "", I, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", x ?? O)
            }, v[20] = y, v[21] = O, v[22] = I, v[23] = S, v[24] = x, v[25] = l) : l = v[25];
            let J = l,
                Z = F;
            if (!V && "loaded" === E.status && (null == z || "snapshot" === z.type)) {
                let e;
                v[26] !== E.structure || v[27] !== j ? (e = j.formatMessage("workspace" === E.structure ? eC.a.shareWorkspaceTooltip : eC.a.sharePublicTooltip), v[26] = E.structure, v[27] = j, v[28] = e) : e = v[28], Z = e
            }
            let X = H ?? Z,
                ee = null != H || void 0,
                et = !$,
                en = null == H ? J : void 0;
            return v[29] !== G || v[30] !== q ? (c = !G && (q ? (0, a.jsx)(tl.M, {}) : (0, a.jsx)(tl.L, {})), v[29] = G, v[30] = q, v[31] = c) : c = v[31], v[32] !== $ ? (u = $ && (0, a.jsx)("span", {
                className: "max-sm:hidden @max-2xl/main-titlebar:hidden",
                children: (0, a.jsx)(eb.a, {
                    ...eC.a.headerShare
                })
            }), v[32] = $, v[33] = u) : u = v[33], v[34] !== G || v[35] !== F || v[36] !== ee || v[37] !== et || v[38] !== en || v[39] !== c || v[40] !== u ? (h = (0, a.jsxs)(ti.a, {
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
            }), v[34] = G, v[35] = F, v[36] = ee, v[37] = et, v[38] = en, v[39] = c, v[40] = u, v[41] = h) : h = v[41], v[42] !== X || v[43] !== h ? (p = (0, a.jsx)(ts.a, {
                content: X,
                children: h
            }), v[42] = X, v[43] = h, v[44] = p) : p = v[44], v[45] !== y || v[46] !== G || v[47] !== I || v[48] !== H || v[49] !== x ? (g = !1, v[45] = y, v[46] = G, v[47] = I, v[48] = H, v[49] = x, v[50] = g) : g = v[50], v[51] !== p || v[52] !== g ? (m = (0, a.jsxs)(a.Fragment, {
                children: [p, g]
            }), v[51] = p, v[52] = g, v[53] = m) : m = v[53], m
        }(0, tc.a)(async () => () => null);
        var tv = n("TRQ3"),
            ty = n("SZCv"),
            tb = n.n(ty),
            tx = n("XAP6"),
            tC = n("bzoy"),
            t_ = n("LYS1"),
            tw = n("aZoZ"),
            tI = n("Gv8v"),
            tS = n("EGpF"),
            tT = n("mTPq"),
            tj = n("Vcrm"),
            tE = n("DF0c");
        let tP = (0, d.d)(ej.a, (e, t) => {
            let {
                get: n
            } = t, a = n(tp.ab, e);
            if (!(0, tp.Bb)(a)) return !0;
            let r = n(tp.N, e),
                s = n(tp.C, e);
            if (null == r || null == s) return !1;
            let o = r[s]?.message;
            if (null == o || t_.a.has(o.author.role)) return !1;
            let i = n(tp.y, e),
                l = (0, tT.c)({
                    mapping: r,
                    current_node: s
                }, n(tp.S, e)),
                c = n(tp.db, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(tp.j, e) && !(0, tC.e)(n(tp.p, e)) && null != c && !n(tx.e).has(c) && null != tA(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function tA(e, t) {
            let n = e(tS.a, t),
                a = e(tp.j, t);
            return null == n.request.current && null != a ? e(tS.a, a) : n
        }
        var tM = n("xtkq"),
            tR = n("ZhoB"),
            tk = n("PG5R"),
            tO = n("zrki"),
            tN = n("iLYI"),
            tB = n("u4MG"),
            tz = n("wVX4"),
            tG = n("OOaz"),
            tF = n("H8lk"),
            tD = n("gbrq"),
            tL = n("n5iL"),
            tH = n("EFj1"),
            tW = n("iS3k"),
            tq = n("pDUk"),
            tK = n("GaCK"),
            tU = n("Dofq"),
            tV = n("VnEZ"),
            tQ = n("b7aP");

        function tY(e) {
            let t, n, s, o = (0, r.c)(6);
            o[0] !== e ? ({
                readData: n,
                ...t
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]);
            let i = (0, tW.b)(),
                [l, c] = (0, m.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), o[3] !== l || o[4] !== t ? (s = null == l ? null : (0, a.jsx)(tQ.a, {
                ...t,
                data: l.data
            }), o[3] = l, o[4] = t, o[5] = s) : s = o[5], s
        }

        function t$(e) {
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
            p[6] !== t?.isOpen || p[7] !== s ? (i = t?.isOpen === !1 ? null : (0, a.jsx)(tY, {
                ...s
            }, s.conversationId), p[6] = t?.isOpen, p[7] = s, p[8] = i) : i = p[8];
            let f = i;
            return p[9] !== m || p[10] !== f ? (l = f && (0, a.jsx)(tW.a.PopoverContent, {
                analytics: m,
                children: f
            }), p[9] = m, p[10] = f, p[11] = l) : l = p[11], p[12] !== t || p[13] !== l ? (c = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(tJ, {
                    controlledState: t,
                    children: l
                })
            }), p[12] = t, p[13] = l, p[14] = c) : c = p[14], p[15] !== m || p[16] !== f || p[17] !== n ? (u = f && (0, a.jsx)(tW.a.Root, {
                analytics: m,
                shouldHideInlineImmediately: n.shouldHideInlineImmediately,
                shouldShow: n.shouldShow,
                children: f
            }), p[15] = m, p[16] = f, p[17] = n, p[18] = u) : u = p[18], p[19] !== c || p[20] !== u ? (h = (0, a.jsxs)(a.Fragment, {
                children: [c, u]
            }), p[19] = c, p[20] = u, p[21] = h) : h = p[21], h
        }

        function tJ(e) {
            let t, n, s, o = (0, r.c)(17),
                {
                    children: i,
                    controlledState: l
                } = e,
                c = (0, d.y)(eg.a),
                u = (0, m.useContext)(tV.a),
                h = (0, f.a)(),
                p = (0, d.z)(null == l ? tD.N : null);
            o[0] !== l?.isOpen || o[1] !== p ? (t = l?.isOpen ?? (0, tD.z)(p, !0), o[0] = l?.isOpen, o[1] = p, o[2] = t) : t = o[2];
            let g = t,
                v = (0, d.z)(tK.b),
                y = l?.isOpen ?? v.isPopoverOpen,
                b = (0, d.x)(tL.f, "togglePinnedSummary");
            (0, eG.b)(c), o[3] !== l || o[4] !== c ? (n = () => {
                null != l ? l.onOpenChange(!l.isOpen) : (0, tU.b)(c)
            }, o[3] = l, o[4] = c, o[5] = n) : n = o[5];
            let x = n;
            return (0, tH.a)("togglePinnedSummary", x), o[6] !== i || o[7] !== u || o[8] !== l || o[9] !== h || o[10] !== g || o[11] !== y || o[12] !== v.displayMode || o[13] !== c || o[14] !== b || o[15] !== x ? (s = (0, a.jsx)(I.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                order: 250,
                unifiedSlotPosition: "threadSummary",
                children: "overlay" === v.displayMode ? (0, a.jsx)(tq.a, {
                    isOpen: y,
                    shouldPreventAutoFocus: l?.shouldPreventAutoFocus,
                    onOpenChange: e => {
                        null != l ? l.onOpenChange(e) : c.set(tK.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                            ...t,
                            isPopoverOpen: e
                        })
                    },
                    trigger: (0, a.jsx)(tW.a.HeaderButton, {
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
                    children: (0, a.jsx)(tV.a, {
                        value: u,
                        children: i
                    })
                }) : (0, a.jsx)(tW.a.HeaderButton, {
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
        var tZ = n("pV06"),
            tX = n("MM0V");

        function t0(e) {
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
            }), l[3] = s) : s = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (o = (0, a.jsx)(ti.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: s
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = o) : o = l[7], l[8] !== n || l[9] !== o ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(tX.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: o
                })
            }), l[8] = n, l[9] = o, l[10] = i) : i = l[10], i
        }
        var t1 = n("oGhM"),
            t2 = n("fr5e"),
            t3 = n("rxj0"),
            t4 = n("LEgg");
        let t5 = (0, tc.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function t6(e) {
            let t, n, s = (0, r.c)(6),
                {
                    conversationId: o,
                    scheduledAutomationId: i
                } = e,
                l = (0, eO.f)("3901104270");
            return s[0] !== o || s[1] !== l || s[2] !== i ? (t = l && null != i ? (0, a.jsx)(t5, {
                conversationId: o,
                automationId: i
            }) : null, s[0] = o, s[1] = l, s[2] = i, s[3] = t) : t = s[3], s[4] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), s[4] = t, s[5] = n) : n = s[5], n
        }
        var t8 = n("Bs4i"),
            t7 = n("Qgfj"),
            t9 = n("rmk3"),
            ne = n("sqqv"),
            nt = n("fQbA"),
            nn = n("dDDU"),
            na = n("soaw"),
            nr = n("ZrYB"),
            ns = n("X6Vn"),
            no = n("Kwur"),
            ni = n("eKlv"),
            nl = n("JCtZ"),
            nc = n("g2p6"),
            nd = n("oaTv"),
            nu = n("PME0"),
            nh = n("lgcP"),
            np = n("AcSY"),
            ng = n("w7E5"),
            nm = n("xEXG"),
            nf = n("J6LI"),
            nv = n("lUUH"),
            ny = n("ftAl");

        function nb(e) {
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
                } = (0, np.f)(),
                v = (0, nm.b)();
            return o[0] !== f || o[1] !== l || o[2] !== c || o[3] !== u || o[4] !== h || o[5] !== v || o[6] !== m ? (t = () => {
                let e = m.get(ny.a, l, {
                        enabled: !1
                    }),
                    t = (0, tB.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
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
                    } = e, c = (0, tB.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(ng.a), u = t.get(ew.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, g = a?.conversation_origin === "tpp" || a?.conversation_origin === "flora", m = "allowed" === o || g && h?.pages.some(e => null != e.cursor) === !0, f = t.get(ew.h, n);
                    return null == s || null == a || t.get(ew.g, n) || (0, nf.c)(a, r).sourceUnavailable || null == (0, nf.b)(t, a, f, !1) || null != c && null == r || null == h || 0 === p && !m ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: nw.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, nv.b)({
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
                    let e = m.get(tn.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await m.query.getOrFetch(tn.chatGptConversationQueryById$, l).catch(n_), null == m.query.getData(tn.chatGptConversationQueryById$, l) && await m.query.getOrFetch(ew.j, [l]).catch(nC)
                })(), p?.()]);
                let e = m.get(ny.a, l, {
                    enabled: !1
                });
                (0, tB.a)(e?.gizmo_id) && e?.gizmo_id != null && await m.query.getOrFetch(N.b, e.gizmo_id).catch(nx)
            }, o[8] = l, o[9] = p, o[10] = m, o[11] = n) : n = o[11], o[12] !== i || o[13] !== g || o[14] !== t || o[15] !== n ? (s = (0, a.jsx)(t9.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                renderItem: nt.b,
                renderDropdown: g,
                trigger: "click",
                children: i
            }), o[12] = i, o[13] = g, o[14] = t, o[15] = n, o[16] = s) : s = o[16], s
        }

        function nx() {}

        function nC() {}

        function n_() {}
        let nw = (0, t7.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}"
            }
        });

        function nI(e) {
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
                    onOpenMessage: D,
                    projectId: L,
                    projectName: H,
                    serverConversationId: W
                } = e,
                q = (0, d.y)(eg.a),
                K = (0, d.y)(ej.a),
                V = (0, na.a)(),
                Q = (0, eO.i)();
            E[0] !== Q ? (t = Q.checkGate("224248639"), E[0] = Q, E[1] = t) : t = E[1];
            let Y = t;
            E[2] !== Q ? (s = Q.getLayer("3017902351").get("web_file_library_enabled", !1), E[2] = Q, E[3] = s) : s = E[3];
            let $ = s,
                J = Y || $;
            E[4] !== J ? (o = {
                enabled: J
            }, E[4] = J, E[5] = o) : o = E[5];
            let {
                data: Z
            } = (0, d.z)(nc.p, o), X = J && Z?.fileLibraryEnabledForRegistrationCountry !== !1, ee = (0, f.a)(), et = (0, v.$)(), [en, ea] = (0, m.useState)(null), er = (0, m.useRef)(null), es = (0, m.useRef)(null);
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
            E[9] !== q || E[10] !== W ? (u = () => (0, e_.a)(q.query.getData(tn.chatGptConversationQueryById$, W), q.get(T.h), q.get(T.g)), E[9] = q, E[10] = W, E[11] = u) : u = E[11], E[12] !== ec || E[13] !== u ? (h = {
                enabled: ec,
                isActive: u
            }, E[12] = ec, E[13] = u, E[14] = h) : h = E[14], (0, tH.a)("deleteChat", c, h), E[15] !== K || E[16] !== el || E[17] !== et || E[18] !== q || E[19] !== W ? (p = e => {
                !el && (0, e_.a)(q.query.getData(tn.chatGptConversationQueryById$, W), q.get(T.h), q.get(T.g)) && (ea(null), (0, nh.a)(K, W, e), et("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, E[15] = K, E[16] = el, E[17] = et, E[18] = q, E[19] = W, E[20] = p) : p = E[20];
            let ed = p;
            E[21] !== q || E[22] !== W ? (g = async () => {
                let e = [];
                eo.current = e, e.push(...await async function(e, t) {
                    let a = await no.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        }
                    }).catch(() => null);
                    return a?.can_share && 0 !== a.av_sessions.length ? [{
                        id: "share-live-session",
                        icon: tl.gj,
                        message: (0, t7.e)({
                            id: "chatgptConversations.liveSessionSharing.action",
                            defaultMessage: "Share Live session"
                        }),
                        selectAfterClose: !0,
                        onSelect: () => {
                            n.e(571376).then(n.bind(n, "ATrx")).then(n => {
                                let {
                                    BidiSessionSharingDialog: r
                                } = n;
                                (0, ns.f)(e, r, {
                                    conversationId: t,
                                    sessions: a.av_sessions
                                })
                            })
                        }
                    }] : []
                }(q, W))
            }, E[21] = q, E[22] = W, E[23] = g) : g = E[23];
            let eu = g;
            E[24] !== O || E[25] !== k || E[26] !== X || E[27] !== ee || E[28] !== el || E[29] !== z || E[30] !== B || E[31] !== V || E[32] !== et || E[33] !== F || E[34] !== D || E[35] !== L || E[36] !== H || E[37] !== q || E[38] !== W || E[39] !== Q || E[40] !== N ? (y = e => {
                let t = q.get(T.f),
                    a = q.get(T.k),
                    r = q.query.getData(tn.chatGptConversationQueryById$, W),
                    s = q.get(T.h),
                    o = q.get(T.g),
                    i = (0, e_.a)(r, s, o),
                    l = (0, ni.b)(q, W),
                    c = !el && (0, e_.a)(l, s, o),
                    d = q.get(_.b).pathname,
                    u = () => V() && d === q.get(_.b).pathname && t === q.get(T.f) && a === q.get(T.k),
                    h = (0, nd.a)(q, O, k, () => (0, nu.a)(et)),
                    p = [];
                return Q.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && p.push({
                    id: "chatgpt-audio-summary",
                    message: (0, t7.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary"
                    }),
                    icon: tl.wg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
                        })().then(e => {
                            u() && e(q, W)
                        }).catch(() => {
                            u() && (er.current?.focus({
                                preventScroll: !0
                            }), q.get(U.f).danger(ee.formatMessage({
                                id: "chatgpt.audioSummary.openError",
                                defaultMessage: "Couldn’t open audio summary"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgpt.audioSummary.openError"
                                }
                            }))
                        })
                    }
                }), X && p.unshift({
                    id: "chatgpt-conversation-files",
                    message: (0, t7.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat"
                    }),
                    icon: tl.rb,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(368308).then(n.bind(n, "LFUX"))).openConversationFiles
                        })().then(e => {
                            u() && e(q, {
                                conversationId: O,
                                serverConversationId: W,
                                onOpenMessage: D
                            })
                        }).catch(() => {
                            u() && q.get(U.f).danger(ee.formatMessage({
                                id: "chatgptConversations.files.loadPanelError",
                                defaultMessage: "Couldn’t open files in chat"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgptConversations.files.loadPanelError"
                                }
                            })
                        })
                    }
                }), p.push(...(0, nn.a)(q)), (0, nl.a)(q, {
                    organizationItems: (0, nt.a)([]),
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
                    projectId: L,
                    projectName: H,
                    onRename: (0, e_.b)(r, s, o, el) ? () => void(0, ni.renameActiveChatGptConversation)(q, O) : void 0,
                    isPinned: q.get(ew.h, W) ?? l?.is_starred === !0,
                    onTogglePin: c ? () => {
                        let e = (0, ni.b)(q, W);
                        !(null == e || q.get(ew.g, W)) && (0, e_.a)(e, q.get(T.h), q.get(T.g)) && (0, ew.V)({
                            scope: q,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(nS)
                    } : void 0,
                    onArchive: !i || el || z ? void 0 : () => (0, nr.a)(q, W),
                    onUnarchive: i && !el && z ? () => {
                        (0, ew.W)({
                            scope: q,
                            conversationId: W
                        }).then(() => {
                            q.get(U.f).success(ee.formatMessage(eE.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            q.get(U.f).danger(ee.formatMessage(eC.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !i || el ? void 0 : () => ea("menu")
                })
            }, E[24] = O, E[25] = k, E[26] = X, E[27] = ee, E[28] = el, E[29] = z, E[30] = B, E[31] = V, E[32] = et, E[33] = F, E[34] = D, E[35] = L, E[36] = H, E[37] = q, E[38] = W, E[39] = Q, E[40] = N, E[41] = y) : y = E[41];
            let eh = y;
            E[42] !== P || E[43] !== N || E[44] !== M ? (b = null == M ? (0, a.jsx)(ne.a, {
                ref: er,
                onActivate: P,
                title: N
            }) : (0, a.jsx)(t8.b, {
                ref: er,
                children: M
            }), E[42] = P, E[43] = N, E[44] = M, E[45] = b) : b = E[45];
            let ep = b;
            E[46] !== eh || E[47] !== ep || E[48] !== et || E[49] !== ei || E[50] !== eu || E[51] !== R || E[52] !== W || E[53] !== A ? (x = A && (ei ? (0, a.jsx)(nb, {
                conversationId: W,
                getBaseItems: eh,
                menuTriggerRef: er,
                navigate: et,
                onBeforeOpen: eu,
                renderDropdown: R,
                children: ep
            }) : (0, a.jsx)(t9.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => eh(),
                onBeforeOpen: eu,
                renderItem: nt.b,
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

        function nS() {}

        function nT(e) {
            let t, n, s, o = (0, r.c)(12),
                {
                    title: i,
                    includePlugins: l,
                    lockdownConversationId: c,
                    triggerButton: u,
                    renderDropdown: h
                } = e,
                p = (0, d.y)(eg.a),
                g = (0, v.$)();
            return o[0] !== l || o[1] !== c || o[2] !== g || o[3] !== p ? (t = () => {
                let e = null == c ? null : (0, nd.a)(p, c, null, () => (0, nu.a)(g)),
                    t = null == e ? [] : [e];
                return l ? (0, nt.a)(t) : t
            }, o[0] = l, o[1] = c, o[2] = g, o[3] = p, o[4] = t) : t = o[4], o[5] !== i || o[6] !== u ? (n = u ?? (0, a.jsx)(ne.a, {
                title: i
            }), o[5] = i, o[6] = u, o[7] = n) : n = o[7], o[8] !== h || o[9] !== t || o[10] !== n ? (s = (0, a.jsx)(t9.a, {
                preserveBrowserContextMenu: !0,
                getItems: t,
                renderItem: nt.b,
                renderDropdown: h,
                trigger: "click",
                children: n
            }), o[8] = h, o[9] = t, o[10] = n, o[11] = s) : s = o[11], s
        }
        var nj = n("dLcZ"),
            nE = n("UNoV");

        function nP(e) {
            let t, n = (0, r.c)(2),
                {
                    children: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(I.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                children: (0, a.jsx)("div", {
                    className: nE.a.Progress,
                    children: s
                })
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var nA = n("NVRI"),
            nM = n("WLgA");

        function nR(e) {
            let t, n, s = (0, r.c)(9),
                {
                    icon: o,
                    name: i,
                    projectId: l,
                    linkToProject: c
                } = e;
            s[0] !== o || s[1] !== c || s[2] !== i || s[3] !== l ? (t = c && null != i ? (0, a.jsx)(ti.b, {
                "aria-label": i,
                color: "ghostActive",
                size: "toolbar",
                to: (0, nM.c)(l),
                uniform: !0,
                children: o
            }) : null, s[0] = o, s[1] = c, s[2] = i, s[3] = l, s[4] = t) : t = s[4];
            let d = t,
                u = d ?? o,
                h = null != d;
            return s[5] !== i || s[6] !== u || s[7] !== h ? (n = (0, a.jsx)(nA.b, {
                project: {
                    icon: u,
                    iconInteractive: h,
                    name: i
                }
            }), s[5] = i, s[6] = u, s[7] = h, s[8] = n) : n = s[8], n
        }
        var nk = n("ftSl"),
            nO = n("u9Jt"),
            nN = n("Xoyl");

        function nB(e) {
            let t, n = (0, r.c)(7),
                {
                    hasTitleMenu: s,
                    onClick: o,
                    project: i,
                    title: l
                } = e;
            if (null == l) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(nN.a, {}), n[0] = e) : e = n[0], e
            }
            if (s) {
                let e;
                return n[1] !== o || n[2] !== i || n[3] !== l ? (e = (0, a.jsx)(nO.a, {
                    triggerButton: (0, a.jsx)(ne.a, {
                        onActivate: o,
                        project: i,
                        title: l
                    })
                }), n[1] = o, n[2] = i, n[3] = l, n[4] = e) : e = n[4], e
            }
            return n[5] !== l ? (t = (0, a.jsx)(nk.a, {
                className: "max-w-full",
                variant: "flush-start",
                title: l
            }), n[5] = l, n[6] = t) : t = n[6], t
        }
        var nz = n("MJRC"),
            nG = n("X0li");
        let nF = (0, tc.a)(nG.d),
            nD = (0, tc.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            nL = (0, tc.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var nH = n("lX86"),
            nW = n("sQ4r"),
            nq = n("on57"),
            nK = n("IPUh"),
            nU = n("v7qY"),
            nV = n("wD9O"),
            nQ = n("jov5"),
            nY = n("Ro2M"),
            n$ = n("bN4H"),
            nJ = n("TS05");

        function nZ(e) {
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
            return s ? null : (i[6] !== n || i[7] !== l || i[8] !== c || i[9] !== h || i[10] !== u ? (o = (0, a.jsx)(nX, {
                automationId: n,
                conversationId: l,
                entries: c,
                turnListApi: u
            }, h), i[6] = n, i[7] = l, i[8] = c, i[9] = h, i[10] = u, i[11] = o) : o = i[11], o)
        }

        function nX(e) {
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
                f = (0, d.x)(tp.j, l),
                {
                    data: y
                } = (0, d.x)(nY.e, i),
                b = (0, d.z)(nQ.a),
                x = (0, m.useRef)(null),
                C = (0, m.useRef)(null);
            o[0] !== c ? (t = c.findLast(n2), o[0] = c, o[1] = t) : t = o[1];
            let _ = t;
            o[2] !== g || o[3] !== i || o[4] !== b || o[5] !== _ || o[6] !== y || o[7] !== p || o[8] !== h || o[9] !== u ? (n = () => {
                null == y || null == g || (b || x.current === g || (x.current = g, (0, n$.openAutomationSidePanelTab)({
                    scope: h,
                    automationId: i,
                    title: y.automation.title
                })), null != u && null != _ && C.current !== g && (C.current = g, u.scrollToKey(_.turnKey, n0, {
                    align: "top"
                }).then(() => {
                    h.set(nJ.a, {
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

        function n0(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: n1
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function n1(e) {
            return e instanceof HTMLElement && e.getClientRects().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }

        function n2(e) {
            let {
                turn: t
            } = e;
            return t.items.some(n3)
        }

        function n3(e) {
            return "user-message" !== e.type
        }
        var n4 = n("TDcV"),
            n5 = n("Xvoy"),
            n6 = n("WAdu");
        let n8 = {
            $type: "protobuf_analytics_events.v1.ChatgptConversationPrintLifecycle"
        };
        var n7 = n("jDEJ");
        let n9 = (0, d.u)(ej.a, null);

        function ae(e, t) {
            if (!e.get(ec.c).isChatgptBrowserReplacement || t.repeat || ((0, n7.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(n9)) return;
            let n = an("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(n9, n), aa(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function at(e, t, n, a) {
            let r = e.get(n9);
            if (!e.get(ec.c).isChatgptBrowserReplacement || null == r) return a();
            let s = n => {
                aa(e, r, n, t)
            };
            s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(n9)?.id !== r.id || e.get(n9)?.printing || e.set(n9, null), a
            }
        }

        function an(e) {
            let t = performance.now();
            return {
                id: crypto.randomUUID(),
                entryPoint: e,
                startedAt: t,
                printing: !1
            }
        }

        function aa(e, t, n, a) {
            (0, ec.a)(e, n8, {
                attemptId: t.id,
                stage: n,
                entryPoint: t.entryPoint,
                elapsedMs: Math.max(0, performance.now() - t.startedAt),
                preparation: a
            })
        }
        var ar = n("CpsU"),
            as = n.n(ar),
            ao = n("rKAs"),
            ai = n("SqqO"),
            al = n("zHp1"),
            ac = n("taWv");

        function ad() {
            return Object.fromEntries(Array.from(document.images).flatMap(e => {
                if (!e.complete || 0 === e.naturalWidth) return [];
                let t = e.currentSrc || e.src;
                return [e.getAttribute("src"), e.src, t].flatMap(e => e ? [
                    [e, t]
                ] : [])
            }))
        }
        var au = n("j0nn"),
            ah = n("AO3k"),
            ap = n("dPHp"),
            ag = n("X8kv"),
            am = n("zn0A"),
            af = "printDocument-v_w5Ax";
        let av = "https://chatgpt.com/download/?utm_source=chatgpt_web&utm_medium=print&utm_campaign=app_install";

        function ay(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g, m, v = (0, r.c)(24),
                {
                    children: y,
                    title: b
                } = e,
                x = (0, f.a)(),
                {
                    getExperiment: C
                } = (0, eO.h)(),
                _ = C("448755449").get("enabled", !1);
            v[0] !== y ? (t = (0, a.jsx)(am.a, {
                value: !0,
                children: y
            }), v[0] = y, v[1] = t) : t = v[1];
            let w = t;
            if (!_) {
                let e, t;
                return v[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, nq.b)(af, "hidden w-full space-y-1.5 bg-surface text-default print:block"), v[2] = e) : e = v[2], v[3] !== w ? (t = (0, a.jsx)("div", {
                    className: e,
                    "data-conversation-print": "",
                    "data-theme": "light",
                    children: w
                }), v[3] = w, v[4] = t) : t = v[4], t
            }
            return v[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, nq.b)(af, "formattedPrintDocument-tP74Wl", "group/conversation-print hidden w-full bg-surface text-default print:block"), v[5] = n) : n = v[5], v[6] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(ap.a, {
                className: "h-6 w-auto shrink-0"
            }), v[6] = s) : s = v[6], v[7] !== b ? (o = (0, a.jsxs)("header", {
                className: "mb-6 flex items-center justify-between gap-6",
                children: [s, (0, a.jsx)("p", {
                    className: "min-w-0 text-end text-sm wrap-anywhere text-secondary",
                    children: b
                })]
            }), v[7] = b, v[8] = o) : o = v[8], v[9] !== w ? (i = (0, a.jsx)("div", {
                className: "transcript-XHYu34",
                children: w
            }), v[9] = w, v[10] = i) : i = v[10], v[11] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, nq.b)("footer-QEzLbn", "flex items-center gap-3 rounded-2xl border border-default bg-surface-secondary p-2 text-default"), v[11] = l) : l = v[11], v[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)("div", {
                className: "flex size-10 shrink-0 items-center justify-center rounded-xl border border-default bg-surface",
                children: (0, a.jsx)(ag.a, {
                    className: "size-7",
                    "aria-hidden": "true"
                })
            }), v[12] = c) : c = v[12], v[13] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsx)("p", {
                className: "font-semibold",
                children: (0, a.jsx)(eb.a, {
                    id: "chatgpt.print.downloadApp.title",
                    defaultMessage: "Take your curiosity further"
                })
            }), v[13] = d) : d = v[13], v[14] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsxs)("div", {
                className: "min-w-0 flex-1 text-sm",
                children: [d, (0, a.jsx)("p", {
                    className: "mt-1 text-secondary",
                    children: (0, a.jsx)(eb.a, {
                        id: "chatgpt.print.downloadApp.description",
                        defaultMessage: "Scan to get the ChatGPT app"
                    })
                })]
            }), v[14] = u) : u = v[14], v[15] !== x ? (h = x.formatMessage({
                id: "chatgpt.print.downloadApp.qrCode",
                defaultMessage: "Download the ChatGPT app"
            }), v[15] = x, v[16] = h) : h = v[16], v[17] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(eb.a, {
                id: "chatgpt.print.downloadApp.fallback",
                defaultMessage: "Get the app"
            }), v[17] = p) : p = v[17], v[18] !== h ? (g = (0, a.jsxs)("footer", {
                className: l,
                children: [c, u, (0, a.jsx)("a", {
                    className: "shrink-0",
                    href: `${av}&utm_content=pdf_link`,
                    children: (0, a.jsx)(ah.a, {
                        value: `${av}&utm_content=qr`,
                        size: "inline",
                        ariaLabel: h,
                        fallback: p
                    })
                })]
            }), v[18] = h, v[19] = g) : g = v[19], v[20] !== g || v[21] !== o || v[22] !== i ? (m = (0, a.jsxs)("div", {
                className: n,
                "data-conversation-print": "",
                "data-print-formatting": "",
                "data-theme": "light",
                children: [o, i, g]
            }), v[20] = g, v[21] = o, v[22] = i, v[23] = m) : m = v[23], m
        }

        function ab(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var ax = n("jfiJ"),
            aC = n("FGJH"),
            a_ = n("nmN6");
        let aw = new WeakMap;

        function aI(e) {
            let t, n, s = (0, r.c)(6),
                o = (0, d.z)(n4.a);
            return s[0] !== o || s[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([o, e.entries[0]?.conversationId]), s[0] = o, s[1] = e.entries[0]?.conversationId, s[2] = t) : t = s[2], s[3] !== e || s[4] !== t ? (n = (0, a.jsx)(aS, {
                ...e
            }, t), s[3] = e, s[4] = t, s[5] = n) : n = s[5], n
        }

        function aS(e) {
            let t, n, s, o, i, l, c = (0, r.c)(16),
                u = (0, d.y)(eg.a),
                h = (0, d.z)(n5.a),
                [p, g] = (0, m.useState)(!1),
                f = (0, m.useRef)(null);
            c[0] !== u ? (t = (e, t) => {
                if (ae(u, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void f.current?.onKeyDown(e, t);
                let n = aw.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, nU.flushSync)(() => g(!0));
                let a = n ?? f.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => aw.get(e)).finally(() => {
                    t.aborted || g(!1)
                })
            }, c[0] = u, c[1] = t) : t = c[1];
            let v = (0, m.useEffectEvent)(t);
            c[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                (0, nU.flushSync)(() => g(!0)), f.current?.onBeforePrint()
            }, c[2] = n) : n = c[2];
            let y = (0, m.useEffectEvent)(n);
            c[3] !== u ? (s = () => {
                u.set(am.b, null), g(!1)
            }, c[3] = u, c[4] = s) : s = c[4];
            let b = (0, m.useEffectEvent)(s);
            return c[5] !== b || c[6] !== y || c[7] !== v || c[8] !== u ? (o = () => {
                let e, t, n = new AbortController,
                    a = (e = () => {
                        if (!u.get(ec.c).isChatgptBrowserReplacement) return;
                        let e = u.get(n9);
                        if (e?.printing) return;
                        let t = {
                            ...e ?? an("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_UNOBSERVED"),
                            printing: !0
                        };
                        u.set(n9, t), aa(u, t, "CHATGPT_CONVERSATION_PRINT_STAGE_BEFORE_PRINT")
                    }, t = () => {
                        let e = u.get(n9);
                        u.get(ec.c).isChatgptBrowserReplacement && e?.printing && (aa(u, e, "CHATGPT_CONVERSATION_PRINT_STAGE_AFTER_PRINT"), u.set(n9, null))
                    }, window.addEventListener("beforeprint", e, !0), window.addEventListener("afterprint", t), () => {
                        window.removeEventListener("beforeprint", e, !0), window.removeEventListener("afterprint", t), u.set(n9, null)
                    }),
                    r = e => v(e, n.signal);
                return window.addEventListener("keydown", r, !0), window.addEventListener("beforeprint", y, !0), window.addEventListener("afterprint", b), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), window.removeEventListener("beforeprint", y, !0), window.removeEventListener("afterprint", b), u.set(am.b, null), a()
                }
            }, c[5] = b, c[6] = y, c[7] = v, c[8] = u, c[9] = o) : o = c[9], c[10] !== u ? (i = [u], c[10] = u, c[11] = i) : i = c[11], (0, m.useEffect)(o, i), c[12] !== h || c[13] !== e || c[14] !== p ? (l = p || h ? (0, a.jsx)(aT, {
                ...e,
                ref: f,
                printing: h
            }) : null, c[12] = h, c[13] = e, c[14] = p, c[15] = l) : l = c[15], l
        }

        function aT(e) {
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
                y = (0, m.useContext)(n6.a),
                {
                    getExperiment: b
                } = (0, eO.h)(),
                x = b("448755449", {
                    disableExposureLog: !0
                }).get("enabled", !1);
            l[0] !== c[0]?.conversationId ? (t = c[0]?.conversationId ?? (0, tG.d)(""), l[0] = c[0]?.conversationId, l[1] = t) : t = l[1], l[2] !== v || l[3] !== t ? (n = {
                auth: v,
                conversationId: t
            }, l[2] = v, l[3] = t, l[4] = n) : n = l[4];
            let C = (0, d.x)(null != c[0] && au.h, n),
                _ = (0, d.x)(null == c[0] ? null : t3.e, c[0]?.conversationId ?? "") ?? !0,
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
                            let a = e.get(tp.j, n.conversationId);
                            t = {
                                serverId: a,
                                userResolver: (0, ac.c)(void 0, void 0, void 0, e.get(tp.T, n.conversationId) ?? void 0),
                                scopedResolver: (0, ac.c)(a ?? void 0)
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
                            void 0 === t.generatedResolver && (t.generatedResolver = e.get(ac.a, n.conversationId));
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
                                        for (let a of (0, ao.u)(t, e)) {
                                            if (r && (0, ai.d)(a.src)) continue;
                                            let e = a.searchResult?.isProxied && (a.previewSrc === a.searchResult.contentSrc || a.previewSrc === a.searchResult.originalSrc) ? a.src : a.previewSrc;
                                            o.push({
                                                conversationId: n.conversationId,
                                                src: a.src,
                                                previewSrc: null != e && r && (0, ai.d)(e) ? a.src : e
                                            })
                                        }
                            }
                            if (null == s) continue;
                            i.push(...l.contentReferences.flatMap((e, t) => (0, ao.u)(e, t).map(e => {
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
                        return null != t && (0, al.h)(t) ? [{
                            src: t,
                            resolver: n
                        }] : []
                    });
                    return {
                        queryKey: ["chatgpt-print-assets", e.get(n4.a), t[0]?.conversationId, a, r, o, c.map(e => {
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
                        staleTime: eD.b.FIVE_MINUTES,
                        refetchOnWindowFocus: !1,
                        retry: !1,
                        queryFn: t => {
                            let {
                                client: a,
                                signal: i,
                                queryKey: l
                            } = t;
                            return at(e, "CHATGPT_CONVERSATION_PRINT_PREPARATION_IMAGES", i, async () => {
                                let t = {
                                    ...a.getQueryData(l)?.imageSources
                                };
                                for (let e of as()(c, 6)) i.throwIfAborted(), await Promise.all(e.map(async e => {
                                    let {
                                        src: n,
                                        resolver: r
                                    } = e, s = await (0, al.a)(a, n, r);
                                    if (i.throwIfAborted(), null != s) {
                                        let e = new Image;
                                        e.referrerPolicy = "no-referrer", e.src = s, await e.decode(), t[n] = s
                                    }
                                }));
                                let d = new Map,
                                    u = o.flatMap(t => {
                                        let n = d.get(t.conversationId);
                                        return (null == n && (n = r || !e.get(au.h, {
                                            auth: s,
                                            conversationId: t.conversationId
                                        }) && e.get(t3.e, t.conversationId), d.set(t.conversationId, n)), n && (0, ai.d)(t.src)) ? [] : [{
                                            ...t,
                                            previewSrc: n && null != t.previewSrc && (0, ai.d)(t.previewSrc) ? t.src : t.previewSrc
                                        }]
                                    }),
                                    h = n ? t : await async function(e, t, n) {
                                        if (0 === e.length) return t;
                                        let a = ad(),
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
                                ...ad(),
                                ...e?.imageSources
                            };
                        (0, nU.flushSync)(() => f.set(am.b, t))
                    }
                }
            }), l[5] = I, l[6] = T, l[7] = x, l[8] = j, l[9] = P, l[10] = f, l[11] = s) : s = l[11], (0, m.useImperativeHandle)(g, s), l[12] !== h || l[13] !== c || l[14] !== E || l[15] !== j || l[16] !== p || l[17] !== u ? (o = p ? (0, nU.createPortal)((0, a.jsx)(ay, {
                title: u,
                children: (0, a.jsx)(tV.a, {
                    value: null,
                    children: (0, a.jsx)(a_.a, {
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
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? ab(e) : {
                                            ...e,
                                            items: e.items.map(ab),
                                            activeReasoning: null == e.activeReasoning ? void 0 : ab(e.activeReasoning)
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

        function aj(e) {
            let t, n, a, s, o, l, c = (0, r.c)(22),
                {
                    conversationId: u
                } = e,
                h = (0, d.y)(ej.a),
                p = (0, f.a)(),
                g = (0, m.useRef)(null),
                v = (0, d.z)(n4.a),
                y = (0, d.x)(tp.j, u),
                b = (0, d.z)(aC.b);
            c[0] !== v || c[1] !== y ? (t = ["chatgpt-print-history", v, y], c[0] = v, c[1] = y, c[2] = t) : t = c[2], c[3] !== h || c[4] !== y ? (n = e => {
                let {
                    signal: t
                } = e;
                return at(h, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != y && await (0, ax.a)(h, y, t), !0))
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
                if (ae(h, e), e.defaultPrevented || null == y || 0 === b || h.get(aC.c, y)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (g.current?.signal === t) return void aw.set(e, g.current.preparation);
                let n = x({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && h.get(n4.a) === v) {
                        if (e.isError) return void h.get(U.f).danger(p.formatMessage({
                            id: "chatgpt.printHistory.error",
                            defaultMessage: "Couldn't load the full conversation to print"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgpt.printHistory.error"
                            }
                        });
                        await Promise.all(h.queryClient.getQueryCache().findAll({
                            queryKey: ["chatgpt-print-assets", v, u],
                            predicate: aA
                        }).map(aE)), t.aborted || h.get(n4.a) !== v || window.print()
                    }
                }).finally(() => {
                    g.current?.signal === t && (g.current = null)
                });
                g.current = {
                    signal: t,
                    preparation: n
                }, aw.set(e, n)
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

        function aE(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(aP)
        }

        function aP() {}

        function aA(e) {
            return e.getObserversCount() > 0
        }
        var aM = n("gbRX");

        function aR(e) {
            let t, n, s = (0, r.c)(4),
                {
                    isFetching: o,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, d.z)(!i && aM.a) || o;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again"
            }), s[0] = t) : t = s[0], s[1] !== l || s[2] !== c ? (n = (0, a.jsx)(ti.a, {
                color: "ghost",
                disabled: c,
                onClick: l,
                children: t
            }), s[1] = l, s[2] = c, s[3] = n) : n = s[3], n
        }

        function ak(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation"
            }), o[0] = t) : t = o[0], o[1] !== i || o[2] !== l || o[3] !== c ? (n = null != c ? (0, a.jsx)(aR, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, o[1] = i, o[2] = l, o[3] = c, o[4] = n) : n = o[4], o[5] !== n ? (s = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), o[5] = n, o[6] = s) : s = o[6], s
        }
        var aO = n("FfNP"),
            aN = n("WVag");
        let aB = (0, tc.a)(aO.loadEpicChartIndicator);

        function az(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, d.x)(aN.a, s),
                [i, l] = (0, m.useState)(!1);
            return i || null == o || l(!0), n[0] !== s || n[1] !== i ? (t = i ? (0, a.jsx)(aB, {
                conversationId: s
            }) : null, n[0] = s, n[1] = i, n[2] = t) : t = n[2], t
        }
        var aG = n("DWXw"),
            aF = n("RGWz"),
            aD = n("QxH2"),
            aL = n("UuVq"),
            aH = n("TwSq"),
            aW = n("l0fK"),
            aq = n("bjAA"),
            aK = n("hkBU"),
            aU = n("RzIS"),
            aV = n("T1PX"),
            aQ = n("guID"),
            aY = n("Mbqw"),
            a$ = n("yzQ9"),
            aJ = n("Gjet"),
            aZ = n("gJe8"),
            aX = n("ASxG"),
            a0 = n("lsfk"),
            a1 = n("IObw"),
            a2 = n("kQNh"),
            a3 = n.n(a2),
            a4 = n("NkEl"),
            a5 = n("FW69"),
            a6 = "highlight-x7OnzP",
            a8 = "safari-wcvuzB",
            a7 = "block-t7sxyD";
        let a9 = "chatgpt-search-result",
            re = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* rt(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(re) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let s = RegExp(t.split(/\n+/u).map(a3()).join("\\n*"), "g");
            for (let n = s.exec(r); null != n && n.index < r.length; n = s.exec(r)) {
                let r = n.index;
                s.lastIndex = r + 1;
                let o = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < o);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, o - l.start), rn(c) && ((0, a5.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function rn(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let ra = aX.object({
            chatGptSearchNavigation: aX.object({
                key: aX.string(),
                messageId: aX.string()
            })
        });

        function rr(e) {
            let t, n, a, s, o, i, l, c, u, h, p, g, f = (0, r.c)(50),
                {
                    conversationId: y,
                    entries: b,
                    isConversationFetching: x,
                    turnListApi: C
                } = e,
                _ = (0, d.y)(ej.a),
                w = (0, d.x)(tp.s, y),
                I = (0, a0.b)(),
                S = (0, nV.c)();
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
                            left: (0, nV.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                        h = (0, nV.b)(o.height, n),
                        p = (0, nV.b)(o.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, I, S)
            }, f[0] = I, f[1] = S, f[2] = t) : t = f[2];
            let T = (0, m.useEffectEvent)(t),
                j = (0, v.Y)(),
                E = (0, v.$)(),
                P = new URLSearchParams(j.search),
                A = P.get("messageId") ?? P.get("message"),
                M = ra.safeParse(j.state).data?.chatGptSearchNavigation,
                R = A ?? M?.messageId,
                k = P.get("selectedTextQuery") ?? "",
                O = (0, d.x)(tp.N, y),
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
                        let g = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(a3()).join("|") : a3()(c), null == c ? "giu" : "gu"),
                            m = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(_);

                        function C() {
                            for (let t of (m = !0, x.disconnect(), clearTimeout(r), null != s && cancelAnimationFrame(s), null != a && CSS.highlights.get(a9) === a && CSS.highlights.delete(a9), e.classList.remove(a6, a8), b)) t.classList.remove(a6, a7)
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
                            let u = (0, a4.a)(e);
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
                                for (let e of rt(t, c))
                                    if (!(n++ < l)) {
                                        I.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(re) != null || u.some(t => {
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), rn(a) && I.push(a)
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
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...I), CSS.highlights.set(a9, a)) : I.length > 0 && S.push(e), e.classList.add(a6), (0, to.e)() && e.classList.add(a8), S)) t.classList.add(a6, a7), b.add(t);
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
                    !G.current.handled && (0, tp.Qb)(e, y, R) && (G.current.handled = !0)
                })
            }, s = [y, x, R, z, _, N], f[5] = y, f[6] = x, f[7] = R, f[8] = z, f[9] = _, f[10] = N, f[11] = a, f[12] = s) : (a = f[11], s = f[12]), (0, m.useLayoutEffect)(a, s), f[13] !== b || f[14] !== R ? (o = null == R ? void 0 : b.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(R)
            }), f[13] = b, f[14] = R, f[15] = o) : o = f[15];
            let D = o;
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
            let L = (0, m.useEffectEvent)(i);
            if (f[21] !== L || f[22] !== w || f[23] !== x || f[24] !== D ? (l = () => {
                    !G.current.positioned || null != D || x || w || L()
                }, f[21] = L, f[22] = w, f[23] = x, f[24] = D, f[25] = l) : l = f[25], f[26] !== w || f[27] !== x || f[28] !== D ? (c = [w, x, D], f[26] = w, f[27] = x, f[28] = D, f[29] = c) : c = f[29], (0, m.useLayoutEffect)(l, c), f[30] !== R || f[31] !== D?.id || f[32] !== D?.turn || f[33] !== D?.turn.items || f[34] !== D?.turn.items.findIndex || f[35] !== D?.turnKey) {
                let e = D?.turn.items.findIndex(e => "messageId" in e && e.messageId === R || "assistant-message" === e.type && null != R && e.sourceMessageIds?.includes(R)) ?? -1,
                    t = D?.turn.items[e],
                    n = D?.id;
                h = D?.turnKey, u = null == t || null == n ? void 0 : (0, a1.b)(t, e, n), f[30] = R, f[31] = D?.id, f[32] = D?.turn, f[33] = D?.turn.items, f[34] = D?.turn.items.findIndex, f[35] = D?.turnKey, f[36] = u, f[37] = h
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
        var rs = n("ESlL"),
            ro = n("Ppno"),
            ri = n("lA5q"),
            rl = n("wDWo"),
            rc = n("IgxH"),
            rd = n("iaTG"),
            ru = n("c3f5"),
            rh = n("XpUB"),
            rp = n("xAIC"),
            rg = n("fNSv"),
            rm = n("Sd8U"),
            rf = n("XsXa");
        let rv = (0, d.t)("ChatGptTranscriptScope", {
                parent: rm.a,
                key: e => e.presentation
            }),
            ry = (0, d.j)(rv, e => (0, rf.a)());
        var rb = n("r2mP"),
            rx = n("jmBh"),
            rC = n("FGGA"),
            r_ = n("KHD0"),
            rw = n("RADZ"),
            rI = n("rZzh"),
            rS = n("k4pC");

        function rT(e) {
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
                w = (0, rx.a)(void 0 !== y && y);
            g[0] !== f.conversationId ? (t = (0, em.o)({
                routeKind: "chatgpt-thread",
                conversationId: f.conversationId
            }), g[0] = f.conversationId, g[1] = t) : t = g[1];
            let I = (0, d.x)(C ? ee.c : null, t),
                S = C && null == I,
                T = (0, d.x)(f.isMostRecentTurn ? rI.e : null, f.conversationId);
            g[2] !== f.timestampSeparatorAtMs ? (n = null == f.timestampSeparatorAtMs ? null : (0, a.jsx)(rb.b, {
                sentAtMs: f.timestampSeparatorAtMs
            }), g[2] = f.timestampSeparatorAtMs, g[3] = n) : n = g[3];
            let j = f.isReadOnly ? void 0 : f.turnKey,
                E = null != f.paragen;
            g[4] !== m || g[5] !== w || g[6] !== f.branchingMessageId || g[7] !== f.browserConversationId || g[8] !== f.conversationId || g[9] !== f.dilEditDisclosure || g[10] !== f.enableCloudBrowserActivity || g[11] !== f.errorMessage || g[12] !== f.feedbackEnabled || g[13] !== f.hasLaterSitesPreview || g[14] !== f.id || g[15] !== f.isMostRecentTurn || g[16] !== f.isReadOnly || g[17] !== f.isTemporaryChat || g[18] !== f.isWorkConversation || g[19] !== f.onEditUserMessage || g[20] !== f.onFork || g[21] !== f.onRegenerateResponse || g[22] !== f.pendingSubmissionAttachments || g[23] !== f.readAloudEnabled || g[24] !== f.referenceImageSuggestionActionInput || g[25] !== f.safetyReview || g[26] !== f.shareEnabled || g[27] !== f.showPendingLoadingMessage || g[28] !== f.showRequestUserInputStatus || g[29] !== f.turn || g[30] !== x || g[31] !== S || g[32] !== j || g[33] !== E ? (s = (0, a.jsx)(r_.a, {
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
            }), g[4] = m, g[5] = w, g[6] = f.branchingMessageId, g[7] = f.browserConversationId, g[8] = f.conversationId, g[9] = f.dilEditDisclosure, g[10] = f.enableCloudBrowserActivity, g[11] = f.errorMessage, g[12] = f.feedbackEnabled, g[13] = f.hasLaterSitesPreview, g[14] = f.id, g[15] = f.isMostRecentTurn, g[16] = f.isReadOnly, g[17] = f.isTemporaryChat, g[18] = f.isWorkConversation, g[19] = f.onEditUserMessage, g[20] = f.onFork, g[21] = f.onRegenerateResponse, g[22] = f.pendingSubmissionAttachments, g[23] = f.readAloudEnabled, g[24] = f.referenceImageSuggestionActionInput, g[25] = f.safetyReview, g[26] = f.shareEnabled, g[27] = f.showPendingLoadingMessage, g[28] = f.showRequestUserInputStatus, g[29] = f.turn, g[30] = x, g[31] = S, g[32] = j, g[33] = E, g[34] = s) : s = g[34], g[35] !== f.conversationId || g[36] !== f.isTemporaryChat || g[37] !== f.isWorkConversation || g[38] !== f.paragen || g[39] !== x || g[40] !== S ? (o = null == f.paragen ? null : (0, a.jsx)(rw.a, {
                renderMcpApps: x,
                comparison: f.paragen,
                conversationId: f.conversationId,
                hostId: ef.a,
                isTemporaryChat: f.isTemporaryChat,
                isWorkConversation: f.isWorkConversation,
                trackTaskViews: S
            }, f.paragen.promptMessageId), g[35] = f.conversationId, g[36] = f.isTemporaryChat, g[37] = f.isWorkConversation, g[38] = f.paragen, g[39] = x, g[40] = S, g[41] = o) : o = g[41], g[42] !== f.showSharedConversationPrivateDisclaimer ? (i = f.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(K.a, {
                    className: "shrink-0",
                    legacyIcon: rC.a,
                    asset16: rS.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(eb.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you"
                })]
            }) : null, g[42] = f.showSharedConversationPrivateDisclaimer, g[43] = i) : i = g[43], g[44] !== w || g[45] !== f || g[46] !== T || g[47] !== _ || g[48] !== S ? (l = f.isMostRecentTurn ? (0, a.jsx)(rs.a, {
                conversationId: f.conversationId,
                errorMessage: f.errorMessage,
                isWorkConversation: f.isWorkConversation,
                onRetry: null == f.onRegenerateResponse || null == T ? void 0 : async e => {
                    let t = _.get(rI.e, f.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = _.get(tp.V, f.conversationId)?.metadata?.errorCode;
                    (0, tR.d)(_.get(ec.c).logProductEvent, {
                        conversationId: _.get(tp.j, f.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await f.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, rI.f)(t.message, _.get(e6.v, f.conversationId)),
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

        function rj(e) {
            let t, n, s, o, i = (0, r.c)(11);
            i[0] !== e ? ({
                renderMcpApps: n,
                ...t
            } = e, i[0] = e, i[1] = t, i[2] = n) : (t = i[1], n = i[2]);
            let l = void 0 === n || n,
                c = (0, d.y)(rv),
                u = "main" === c.value.presentation;
            i[3] !== t || i[4] !== c ? (s = c.value.preserveActivityDisclosures && !t.entry.isReadOnly ? c.get(ry, null) : void 0, i[3] = t, i[4] = c, i[5] = s) : s = i[5];
            let h = l && c.value.rendersWidgets;
            return i[6] !== t || i[7] !== u || i[8] !== s || i[9] !== h ? (o = (0, a.jsx)(rT, {
                ...t,
                threadTranscript: u,
                activityDisclosures: s,
                renderMcpApps: h
            }), i[6] = t, i[7] = u, i[8] = s, i[9] = h, i[10] = o) : o = i[10], o
        }

        function rE(e) {
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
            return u[6] !== h ? (o = (0, a.jsx)(rg.b, {
                entries: h,
                preserveMeasuredTurnViewport: !0,
                RowComponent: rP
            }), u[6] = h, u[7] = o) : o = u[7], u[8] !== y || u[9] !== o ? (i = (0, a.jsx)(tV.a, {
                value: null,
                children: (0, a.jsxs)(a_.a, {
                    value: null,
                    children: [y, o]
                })
            }), u[8] = y, u[9] = o, u[10] = i) : i = u[10], u[11] !== g || u[12] !== i ? (l = (0, a.jsx)(aJ.a, {
                active: g,
                presentation: "panel",
                children: i
            }), u[11] = g, u[12] = i, u[13] = l) : l = u[13], u[14] !== s || u[15] !== l ? (c = (0, a.jsx)(d.b, {
                scope: rv,
                value: s,
                children: l
            }), u[14] = s, u[15] = l, u[16] = c) : c = u[16], c
        }

        function rP(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(rj, {
                entry: {
                    ...s,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    readAloudEnabled: !1
                },
                trackShownImpressions: !1
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var rA = n("RKko"),
            rM = n("qZWE"),
            rR = n("IBS2"),
            rk = n("t9ay"),
            rO = n("PC5z"),
            rN = n("lZ4W"),
            rB = n("ihvi"),
            rz = n("jCHb"),
            rG = n("nMdB"),
            rF = n("KFm7"),
            rD = n("uYx2"),
            rL = "pending-fxATqK";
        let rH = "[data-d-component]:not([data-d-text-flow])";
        class rW extends m.Component {
            static contextType = nV.a;
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
                this.pendingVisual?.classList.remove(rL), this.pendingVisual = void 0
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
                let r = a.querySelector(rH) ?? a,
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
                this.pendingVisual || (this.pendingVisual = e.element, this.pendingVisual.classList.add(rL));
                let t = this.requestingBubble(e);
                if (!t) return;
                let n = t.getBoundingClientRect();
                if (0 === n.height) return;
                this.revealed = !0;
                let a = e.scrollElement.getBoundingClientRect(),
                    r = a.bottom - (0, rF.c)(e.scrollElement) * this.context,
                    s = Math.min(n.bottom - r, n.top - a.top);
                if (s < 1) return;
                let o = e.top - s;
                if (this.props.reducedMotion) {
                    e.top = o, this.restore(e);
                    return
                }
                this.stopLayoutCorrection?.(), this.stopLayoutCorrection = void 0, this.revealMotion = (0, rz.a)(e.top, o, {
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
                e.body.isConnected || (e.body = e.element.querySelector(rH) ?? e.element);
                let a = () => (0, nV.b)(e.body.getBoundingClientRect().top - e.top, this.context),
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
                    this.held && r > 0 && this.props.ensureScrollRoomForAnchor?.(r), n.holdViewport(), n.compensateScrollToDistanceFromBottomPx(Math.max(0, (0, rD.b)(e.scrollElement) - r)), t && (this.stopLayoutCorrection?.(), this.stopLayoutCorrection = (0, rG.a)(e.body, this.context))
                }
            }
            render() {
                return this.shouldAnimateFold() ? this.presented.children : this.props.children
            }
        }
        var rq = n("aRto"),
            rK = n("WWSI"),
            rU = n("U3Gy"),
            rV = n("mKTJ");
        let rQ = (0, d.c)(em.a, e => {
                let {
                    get: t
                } = e;
                return t(rM.m)
            }, {
                isEqual: tb()
            }),
            rY = (0, d.c)(em.a, e => {
                let {
                    get: t
                } = e;
                return t(rO.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function r$(e) {
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
                } = (0, v.db)(),
                j = (0, d.z)(null != T && "u" > typeof Element && "function" != typeof Element.prototype.moveBefore ? rQ : null),
                E = (0, d.z)(rY),
                P = (0, a0.b)(),
                A = (0, m.useContext)(rR.a);
            g[0] !== A || g[1] !== C || g[2] !== _ || g[3] !== P ? (t = () => {
                if (null != A && !C) return A(() => _.captureBeforeHide(P))
            }, n = [A, C, _, P], g[0] = A, g[1] = C, g[2] = _, g[3] = P, g[4] = t, g[5] = n) : (t = g[4], n = g[5]), (0, m.useLayoutEffect)(t, n), g[6] !== _ || g[7] !== P ? (s = () => _.restoreReadingPosition(P), g[6] = _, g[7] = P, g[8] = s) : s = g[8];
            let M = (0, eW.a)(s),
                [R, k] = (0, m.useState)(rX);
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
                N = y.findLastIndex(rZ),
                B = y[N]?.dilVisualSlotId,
                z = (0, aV.a)(null != B),
                G = y[N]?.turn.items[0],
                F = y.findLastIndex(r0),
                D = y[F],
                L = N > F;
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
                W = (0, m.useContext)(rq.a),
                q = y.at(-1),
                K = x || q?.turn.status === "in_progress";
            if (W?.aboveComposer != null && null != q && H.push(q.turnKey), null != T && j?.size)
                for (let e of y) e.turn.items.flatMap(rJ).some(e => "chatgpt-hosted-widget" === e.type && (0, rV.h)(e) && j.has((0, rV.e)(T, e.messageId))) && H.push(e.turnKey);
            let U = null == B ? void 0 : O.find(e => e.dilEditDisclosure?.slotId === B);
            U && H.push(U.turnKey, y[N].turnKey);
            let V = L ? U : void 0;
            null != D && (I?.voiceAutoScrollEnabled || !L && K) && H.push(D.turnKey);
            let Q = (0, d.x)(rB.b, f),
                Y = null == Q ? void 0 : y.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes(Q)
                }),
                $ = null == Y ? void 0 : (0, rB.a)(Y.turn.items);
            (0, d.x)(rN.a, null == $ ? null : {
                conversationId: f,
                userMessageId: $,
                steeredPromptId: Y === q ? Q : void 0
            }) && null != Y && H.push(Y.turnKey);
            let J = (0, d.x)(rU.b, f);
            g[13] === Symbol.for("react.memo_cache_sentinel") ? (l = (e, t, n) => "adjacent-user-prompts" === (0, ta.d)(n[t - 1], e) ? {
                ...e,
                gapBeforePx: 4
            } : e, g[13] = l) : l = g[13];
            let Z = (0, rK.a)(O, J, f).map(l),
                X = D?.turnKey,
                ee = G?.type === "assistant-message" ? G.messageId : void 0,
                et = I?.ensureScrollRoomForAnchor,
                en = q?.hasStreamingFinalText === !0,
                ea = q?.streamingDilFinalId,
                er = I?.getHeightPx,
                es = V?.turnKey,
                eo = V?.dilEditDisclosure?.count,
                ei = V?.turnKey ?? D?.turnKey;
            g[14] !== I || g[15] !== b ? (c = (e, t) => {
                I?.onTurnLayoutReady(e, t), b.current?.restoreAfterMeasurement()
            }, g[14] = I, g[15] = b, g[16] = c) : c = g[16], g[17] !== I ? (u = e => {
                let {
                    heightDeltaPx: t
                } = e;
                I?.consumeGrowth(t ?? 0)
            }, g[17] = I, g[18] = u) : u = g[18];
            let el = null == A || C ? void 0 : _.onRestoreStateChange;
            return g[19] !== S || g[20] !== w || g[21] !== _.onApiChange || g[22] !== M || g[23] !== H || g[24] !== er || g[25] !== es || g[26] !== eo || g[27] !== ei || g[28] !== c || g[29] !== u || g[30] !== el || g[31] !== Z ? (h = (0, a.jsx)(rk.a, {
                mode: "virtualized",
                rows: Z,
                ...rA.g,
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
                renderRow: rj
            }), g[19] = S, g[20] = w, g[21] = _.onApiChange, g[22] = M, g[23] = H, g[24] = er, g[25] = es, g[26] = eo, g[27] = ei, g[28] = c, g[29] = u, g[30] = el, g[31] = Z, g[32] = h) : h = g[32], g[33] !== L || g[34] !== z || g[35] !== K || g[36] !== P || g[37] !== et || g[38] !== en || g[39] !== ea || g[40] !== h || g[41] !== X || g[42] !== ee || g[43] !== b || g[44] !== B ? (p = (0, a.jsx)(rW, {
                ref: b,
                exchangeKey: X,
                visualId: B,
                visualOwnerId: ee,
                active: L,
                ensureScrollRoomForAnchor: et,
                hasStreamingFinalText: en,
                streamingDilFinalId: ea,
                replyPending: K,
                reducedMotion: z,
                scrollController: P,
                children: h
            }), g[33] = L, g[34] = z, g[35] = K, g[36] = P, g[37] = et, g[38] = en, g[39] = ea, g[40] = h, g[41] = X, g[42] = ee, g[43] = b, g[44] = B, g[45] = p) : p = g[45], p
        }

        function rJ(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function rZ(e) {
            return null != e.dilVisualSlotId
        }

        function rX() {
            return new Map
        }

        function r0(e) {
            return e.turn.items.some(e => "user-message" === e.type)
        }
        var r1 = n("Ipgw"),
            r2 = n("SBcL");

        function r3(e) {
            let t, n, s, o, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, d.y)(ej.a),
                u = (0, f.a)(),
                h = (0, eL.a)(),
                p = (0, d.x)(tp.ab, l),
                g = (0, d.x)(tp.db, l),
                v = (0, d.x)(tp.w, l),
                y = (0, d.x)(tp.cb, l),
                b = (0, m.useRef)(null),
                x = (0, m.useRef)(null);
            i[0] !== v || i[1] !== l || i[2] !== u || i[3] !== g || i[4] !== c || i[5] !== p || i[6] !== y ? (t = () => {
                let e = b.current;
                if (null == e) return;
                let t = x.current;
                if ((0, tp.Bb)(p)) {
                    e.textContent = "", x.current = {
                        conversationId: l,
                        requestId: g ?? ("active-async-turn" === p || "active-tpp-turn" === p ? v?.requestId : null) ?? (t?.conversationId === l ? t.requestId : null)
                    };
                    return
                }
                y || (x.current = null, t?.conversationId === l && "idle" === p && v?.result === "completed" && v.requestId === t.requestId && null == c.get(tp.D, l) && (e.textContent = u.formatMessage({
                    id: "chatgptConversations.responseComplete",
                    defaultMessage: "Response complete"
                })))
            }, i[0] = v, i[1] = l, i[2] = u, i[3] = g, i[4] = c, i[5] = p, i[6] = y, i[7] = t) : t = i[7];
            let C = (0, m.useEffectEvent)(t);
            return (i[8] !== C ? (n = () => {
                C()
            }, i[8] = C, i[9] = n) : n = i[9], i[10] !== v || i[11] !== l || i[12] !== h || i[13] !== g || i[14] !== p || i[15] !== y ? (s = [l, p, g, v, y, h], i[10] = v, i[11] = l, i[12] = h, i[13] = g, i[14] = p, i[15] = y, i[16] = s) : s = i[16], (0, m.useEffect)(n, s), h) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, nU.createPortal)((0, a.jsx)("span", {
                ref: b,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = o) : o = i[17], o) : null
        }
        var r4 = n("XtQP"),
            r5 = n("JlMc"),
            r6 = n("TUMj"),
            r8 = n("pgeU");
        let r7 = (0, tc.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function r9(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, d.y)(ej.a),
                c = (0, d.x)(r8.a, i);
            return o[0] !== i || o[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(r8.a, i);
                        null != e && (0, r8.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], o[0] = i, o[1] = l, o[2] = t, o[3] = n) : (t = o[2], n = o[3]), (0, m.useEffect)(t, n), o[4] !== i || o[5] !== c ? (s = null == c ? null : (0, a.jsx)(r7, {
                conversationId: i,
                effect: c
            }, c.id), o[4] = i, o[5] = c, o[6] = s) : s = o[6], s
        }
        var se = n("ZU27"),
            st = n("Pyg2"),
            sn = n("ZIh4"),
            sa = n("nKJ6"),
            sr = n("AoaR"),
            ss = n("fDfx"),
            so = n("Xslx"),
            si = n("EEop"),
            sl = n("bxvp"),
            sc = n("VBQS"),
            sd = n("hsIu");
        let su = (0, d.d)(ej.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(sl.c) || null == n(T.f) || null == n(T.k)) return null;
            let {
                data: a,
                isError: r
            } = n(sd.b);
            if (r || a?.project_id !== e) return null;
            let {
                data: s,
                isError: o
            } = n(si.l, (0, sc.a)());
            return o ? null : (0, sc.b)(s)
        });
        var sh = n("FmJi"),
            sp = n("sIex"),
            sg = n("Z2JT"),
            sm = n("Fjd0"),
            sf = n("VPBa"),
            sv = n("PWXi"),
            sy = n("HgLj"),
            sb = n("hNLE"),
            sx = n("f6KK"),
            sC = n("JPXZ"),
            s_ = n("zWHk");

        function sw(e) {
            let t, n, a, s, o, i, l, c = (0, r.c)(34),
                {
                    composerController: d,
                    enabled: u
                } = e,
                h = (0, v.Y)(),
                p = (0, v.$)();
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
                if (!u && t && y.current !== f) return (0, s_.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(f) && b(!1)
                })
            }, c[10] = b, c[11] = d, c[12] = u, c[13] = f, c[14] = t, c[15] = s) : s = c[15], c[16] !== d || c[17] !== u || c[18] !== f || c[19] !== t ? (o = [d, u, f, t], c[16] = d, c[17] = u, c[18] = f, c[19] = t, c[20] = o) : o = c[20], (0, m.useLayoutEffect)(s, o), c[21] !== b || c[22] !== d || c[23] !== u || c[24] !== f || c[25] !== t || c[26] !== g ? (i = () => {
                if (!u || !t || y.current === f) return;
                y.current = f;
                let e = d.consumeLocationPromptPrefill(f);
                if (b(e), !e) return;
                let {
                    view: n
                } = d, a = t.replace(/\r\n/g, "\n"), r = "codex-app" === g ? (0, sC.f)({
                    schema: n.state.schema,
                    text: a,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, sC.e)({
                    schema: n.state.schema,
                    text: a
                }), s = n.state.tr.replaceWith(0, n.state.doc.content.size, r.content);
                s.setSelection(sx.h.atEnd(s.doc)), n.dispatch(s)
            }, c[21] = b, c[22] = d, c[23] = u, c[24] = f, c[25] = t, c[26] = g, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== f || c[31] !== t || c[32] !== g ? (l = [d, u, f, t, g], c[28] = d, c[29] = u, c[30] = f, c[31] = t, c[32] = g, c[33] = l) : l = c[33], (0, m.useLayoutEffect)(i, l), null
        }
        var sI = n("a4V1"),
            sS = n("KidQ");
        let sT = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function sj(e) {
            let t, n, s, o, i, l = (0, r.c)(15),
                {
                    children: c,
                    draftKey: u,
                    enableInlineSystemHints: h
                } = e,
                p = (0, d.y)(ej.a),
                g = (0, m.useContext)(sp.a),
                f = h ? "chatgpt" : void 0;
            return l[0] !== h || l[1] !== f ? (t = {
                enableInlineSystemHints: h,
                variant: f
            }, l[0] = h, l[1] = f, l[2] = t) : t = l[2], l[3] !== u || l[4] !== p ? (n = () => ({
                defaultText: p.get(e6.u, u),
                defaultTextKind: "prompt"
            }), l[3] = u, l[4] = p, l[5] = n) : n = l[5], l[6] !== g ? (s = () => {
                let e = g?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == g ? null : {
                    element: e,
                    locationKey: g.locationKey
                }
            }, l[6] = g, l[7] = s) : s = l[7], l[8] !== c ? (o = e => null == e ? null : c(e), l[8] = c, l[9] = o) : o = l[9], l[10] !== t || l[11] !== n || l[12] !== s || l[13] !== o ? (i = (0, a.jsx)(sS.a, {
                controllerOptions: sT,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: s,
                children: o
            }), l[10] = t, l[11] = n, l[12] = s, l[13] = o, l[14] = i) : i = l[14], i
        }
        var sE = n("wnpN"),
            sP = n("xhk1"),
            sA = n("vpdG"),
            sM = n("V8xe");

        function sR(e) {
            let t, n, s, o = (0, r.c)(11),
                i = (0, m.useContext)(sp.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return o[0] !== e ? (t = (0, a.jsx)(sk, {
                    ...e
                }), o[0] = e, o[1] = t) : t = o[1], t
            }
            o[2] !== e.conversationId || o[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, o[2] = e.conversationId, o[3] = e.isImageEditComposer, o[4] = t) : t = o[4];
            let l = !e.isWorkConversation;
            return o[5] !== e ? (n = t => (0, a.jsx)(sk, {
                ...e,
                initialController: t
            }), o[5] = e, o[6] = n) : n = o[6], o[7] !== t || o[8] !== l || o[9] !== n ? (s = (0, a.jsx)(sj, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), o[7] = t, o[8] = l, o[9] = n, o[10] = s) : s = o[10], s
        }

        function sk(e) {
            let t, n, s, o, i, l, c, u, h, p, g, y, b, x, C, _, w, I, S, T = (0, r.c)(85),
                {
                    composerRef: j,
                    initialController: E,
                    ...P
                } = e,
                A = (0, d.y)(eg.a),
                M = (0, m.useContext)(a0.a),
                R = (0, d.x)(sn.d, P.isTemporaryChat),
                {
                    conversationId: k,
                    isFullscreenComposer: O
                } = P,
                N = (0, f.a)(),
                {
                    state: B
                } = (0, v.Y)(),
                z = (0, d.x)(e7, k),
                G = (0, d.x)(tp.T, k),
                F = !(!P.disabled && !P.isSharedConversation && !P.isWorkConversation && !P.isTemporaryChat && !P.isImageEditComposer && (0, tB.a)(G)) ? null : G,
                D = (0, d.x)(null == P.requiredSystemHints ? su : null, F);
            T[0] !== D || T[1] !== P.requiredSystemHints ? (t = P.requiredSystemHints ?? (null == D ? void 0 : [D]), T[0] = D, T[1] = P.requiredSystemHints, T[2] = t) : t = T[2];
            let L = t;
            T[3] !== D || T[4] !== k || T[5] !== A ? (n = () => {
                if (null != D) {
                    let e, t;
                    return e = (0, so.b)(A, k, [D]), t = (0, ss.i)(A, {
                        draftKey: k,
                        isTemporaryChat: !1
                    }), () => {
                        if (e(), A.get(so.a, k).includes(D)) return;
                        let n = A.get(e6.x, k).filter(e => e !== D && e !== `plugin:${sr.d}`);
                        (0, e6.Z)(A, k, n, t)
                    }
                }
            }, s = [A, k, D], T[3] = D, T[4] = k, T[5] = A, T[6] = n, T[7] = s) : (n = T[6], s = T[7]), (0, m.useEffect)(n, s);
            let H = (0, d.x)(eZ.c, k);
            T[8] !== H || T[9] !== P.isSharedConversation || T[10] !== P.isWorkConversation || T[11] !== G ? (o = !P.isSharedConversation && !P.isWorkConversation && !(0, tB.a)(G) && !H, T[8] = H, T[9] = P.isSharedConversation, T[10] = P.isWorkConversation, T[11] = G, T[12] = o) : o = T[12];
            let W = o,
                q = W && !P.disabled && !P.isSubmitDisabled && !P.isImageEditComposer,
                K = W ? z : void 0;
            T[13] !== k || T[14] !== P.isImageEditComposer ? (i = P.isImageEditComposer ? {
                conversationId: k,
                surface: "image-edit"
            } : k, T[13] = k, T[14] = P.isImageEditComposer, T[15] = i) : i = T[15];
            let U = i;
            T[16] !== k || T[17] !== U || T[18] !== E ? (l = {
                composerController: E,
                conversationId: k,
                draftKey: U
            }, T[16] = k, T[17] = U, T[18] = E, T[19] = l) : l = T[19];
            let V = (0, sA.a)(l),
                Q = (0, sP.a)(V, k, !P.isInlinePreview && !P.disabled, P.workspace && "tpp", K?.id ?? G),
                Y = (0, m.useContext)(sp.a),
                $ = (0, m.useRef)(!1);
            T[20] !== U || T[21] !== Y || T[22] !== E || T[23] !== P.isTemporaryChat || T[24] !== A ? (c = e => {
                null == e || null == E || $.current || ($.current = !0, (0, e6._)(A, U, E.getPersistedText(), {
                    isTemporaryChat: P.isTemporaryChat
                }), Y?.onAdopt())
            }, T[20] = U, T[21] = Y, T[22] = E, T[23] = P.isTemporaryChat, T[24] = A, T[25] = c) : c = T[25];
            let J = (0, eW.a)(c);
            T[26] !== J || T[27] !== j ? (u = (0, sy.a)(j, J), T[26] = J, T[27] = j, T[28] = u) : u = T[28];
            let Z = u,
                X = (0, m.useContext)(r6.a),
                ee = (0, d.w)(sI.b, k),
                et = (0, d.x)(tp.eb, k),
                en = (0, d.x)(tp.ab, k),
                ea = (0, d.x)(e6.j, k);
            T[29] !== en ? (h = (0, tp.Bb)(en), T[29] = en, T[30] = h) : h = T[30];
            let er = h,
                es = (0, d.z)(se.l.activeTab$);
            if (T[31] !== es || T[32] !== O || T[33] !== er || T[34] !== X) {
                let e = X?.turn.items.flatMap(sz);
                p = O && es?.tabType.kind === sf.a && "generatedImages" in es.props && null != es.props.generatedImages && !er && null != X && "in_progress" !== X.turn.status && !X.turn.hasPendingAssistantReply && !X.showPendingLoadingMessage && !e?.some(sB) && (null != X.errorMessage || e?.some(sN)) ? X.turn.messageIds.at(-1) ?? X.turnKey : null, T[31] = es, T[32] = O, T[33] = er, T[34] = X, T[35] = p
            } else p = T[35];
            let eo = p,
                ei = (0, m.useRef)(null);
            T[36] !== eo || T[37] !== A ? (g = () => {
                null != eo && eo !== ei.current && (ei.current = eo, A.set(sg.a, "expanded"))
            }, y = [eo, A], T[36] = eo, T[37] = A, T[38] = g, T[39] = y) : (g = T[38], y = T[39]), (0, m.useEffect)(g, y);
            let el = (0, d.w)(sE.a, O ? k : null);
            T[40] !== D || T[41] !== F || T[42] !== V || T[43] !== k || T[44] !== q || T[45] !== U || T[46] !== N || T[47] !== O || T[48] !== Z || T[49] !== Q || T[50] !== R || T[51] !== P || T[52] !== L || T[53] !== A || T[54] !== M || T[55] !== K || T[56] !== B?.libraryFileCreation || T[57] !== G ? (b = e => (0, a.jsxs)(sm.a, {
                children: [O && P.trackReadState && !e?.isHidden ? (0, a.jsx)(r5.a, {
                    conversationId: k,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, P.aboveComposerContent, (0, a.jsx)(sh.a, {
                    children: (0, a.jsx)(sb.a, {
                        ref: Z,
                        trackShownImpressions: P.trackShownImpressions && !P.isHidden && !e?.isHidden && !e?.isMinimized,
                        headerContent: P.headerContent,
                        legacyImageSuggestionsEnabled: !P.disabled && !P.isSharedConversation && !P.isImageEditComposer,
                        allowBackgroundSubmit: P.isInlinePreview,
                        ...Q,
                        disableAutoFocus: P.disableAutoFocus,
                        conversationOrigin: null == P.workspace ? void 0 : "tpp",
                        mcpAppContext: P.workspace?.mcpAppContext,
                        onServerThreadIdChange: P.workspace?.onServerThreadIdChange,
                        followupPortalTarget: P.followupPortalTarget,
                        takeoverDisclaimerRef: P.takeoverDisclaimerRef,
                        showConversationFollowups: P.showConversationFollowups,
                        autoPrepare: !P.isSubmitDisabled && !P.isSharedConversation,
                        browserConversationId: (0, sa.getThreadBrowserConversationId)(A) ?? k,
                        composerController: V,
                        conversationId: k,
                        requiredSystemHints: L,
                        hideSystemHints: null != P.requiredSystemHints,
                        getSubmissionGuard: null != D ? () => () => A.get(tp.T, k) === G && A.get(su, F) === D : void 0,
                        draftKey: U,
                        onPromptChange: R,
                        selectedCustomGpt: K,
                        targetGizmoId: K?.id,
                        onCustomGptChange: q ? e => {
                            A.set(e7, k, e)
                        } : void 0,
                        onCustomAgentSelected: q ? () => {
                            A.set(e7, k, null)
                        } : void 0,
                        disableDraftPrepare: P.isSubmitDisabled || P.isSharedConversation,
                        disableSubmit: P.disabled || P.isSubmitDisabled,
                        voiceInputDisabled: P.disabled,
                        aboveComposerHeaderContent: P.voiceDisclaimer,
                        getExtraDeveloperInstructions: !P.isInlinePreview && B?.libraryFileCreation && !P.isTemporaryChat ? sO : void 0,
                        isTemporaryChat: P.isTemporaryChat,
                        placeholder: P.disabled && !1 !== P.readOnlyPlaceholder ? P.readOnlyPlaceholder ?? N.formatMessage(sM.a.readOnlyConversationPlaceholder) : void 0,
                        readOnly: P.disabled,
                        hideModelPicker: P.hideModelPicker,
                        ...(0, e6.M)(P),
                        showVoiceStage: P.showVoiceStage,
                        onSubmitAccepted: (t, n) => {
                            e?.onSubmitStart(), (!(!P.isWorkConversation && n?.isSteer === !0) || M?.shouldFollowContentGrowth()) && P.responseSpacerState?.place(), P.onSubmitAccepted?.(t)
                        },
                        onSubmitError: P.responseSpacerState?.clear
                    })
                })]
            }), T[40] = D, T[41] = F, T[42] = V, T[43] = k, T[44] = q, T[45] = U, T[46] = N, T[47] = O, T[48] = Z, T[49] = Q, T[50] = R, T[51] = P, T[52] = L, T[53] = A, T[54] = M, T[55] = K, T[56] = B?.libraryFileCreation, T[57] = G, T[58] = b) : b = T[58];
            let ec = b;
            T[59] !== A ? (x = () => {
                (0, aH.K)(A, "conversation")
            }, C = () => {
                (0, aH.K)(A, "conversation")
            }, T[59] = A, T[60] = x, T[61] = C) : (x = T[60], C = T[61]);
            let ed = !P.isInlinePreview && !P.disabled && !P.isSubmitDisabled;
            T[62] !== V || T[63] !== ed ? (_ = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(sw, {
                    composerController: V,
                    enabled: ed
                })
            }), T[62] = V, T[63] = ed, T[64] = _) : _ = T[64];
            let eu = O ? "floating" : "pane",
                eh = P.disabled || P.awaitingGptContinuation,
                ep = null == X && !er,
                em = !P.isInlinePreview && null == P.workspace,
                ef = ea || er ? "loading" : "idle";
            return T[65] !== ef ? (w = {
                type: ef,
                unread: !1
            }, T[65] = ef, T[66] = w) : w = T[66], T[67] !== el || T[68] !== P.isHidden || T[69] !== P.renderTranscript || T[70] !== ec || T[71] !== ee || T[72] !== eu || T[73] !== eh || T[74] !== ep || T[75] !== em || T[76] !== w || T[77] !== et ? (I = (0, a.jsx)(st.a, {
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

        function sO() {
            return [sv.a]
        }

        function sN(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function sB(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function sz(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var sG = n("ygKd"),
            sF = n("KSir"),
            sD = n("QPeR"),
            sL = n("M3Kf");

        function sH(e) {
            let t, n, s, o, l, c, u = (0, r.c)(21),
                {
                    conversationId: h
                } = e,
                p = (0, d.y)(ej.a),
                g = (0, d.x)(tp.j, h),
                m = (0, d.z)(aC.b),
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
                        let e = p.get(tp.N, h),
                            n = e?.[t] ?? (null == e ? void 0 : Object.values(e).find(e => e.message?.id === t));
                        if (n?.message != null) return !0
                    }
                    await (0, ax.a)(p, g, n)
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
            return u[18] !== C || u[19] !== _ ? (c = C ? (0, a.jsx)(ti.a, {
                color: "secondary",
                onClick: () => void _(),
                children: (0, a.jsx)(eb.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message"
                })
            }) : null, u[18] = C, u[19] = _, u[20] = c) : c = u[20], c
        }
        var sW = n("TmaW"),
            sq = n("K45w"),
            sK = n("V8uZ");

        function sU(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var sV = n("NqfB"),
            sQ = n("JEFL"),
            sY = n("moBM");
        let s$ = '[data-markdown-text-style="assistant-message"]',
            sJ = (0, d.d)(ej.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(tp.N, n)?.[a]?.message ?? null
            });

        function sZ(e) {
            let t, n, s = (0, r.c)(5),
                o = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return s[0] !== e ? (t = t => (0, a.jsx)(sX, {
                ...e,
                selection: t
            }), s[0] = e, s[1] = t) : t = s[1], s[2] !== o || s[3] !== t ? (n = (0, a.jsx)(sV.a, {
                align: "start",
                targetSelector: o,
                children: t
            }), s[2] = o, s[3] = t, s[4] = n) : n = s[4], n
        }

        function sX(e) {
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
                _ = (0, d.z)(sY.b),
                w = (0, d.x)(tp.y, p);
            h[0] !== w || h[1] !== _ || h[2] !== y ? (t = _ && "tpp" === w && "chatgpt-thread" === y.value.routeKind && null == y.value.workSideChat && !0, h[0] = w, h[1] = _, h[2] = y, h[3] = t) : t = h[3];
            let I = t;
            h[4] !== p || h[5] !== v.selectionRange ? (s = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, s = a?.closest(s$);
                if (n.collapsed || null == s || !s.isConnected || s !== r?.closest(s$)) return null;
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
            let j = (0, d.x)(sJ, o),
                E = (0, d.x)(tp.j, p),
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
                    for (let r of rt(e, n.trim())) {
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
                        shouldBlockExternalEgress: y.get(t3.e, p),
                        sourceConversationId: p
                    })
                })
            } : void 0, h[19] = P, h[20] = p, h[21] = b, h[22] = y, h[23] = S, h[24] = c) : c = h[24], h[25] !== v.selectedText || h[26] !== i || h[27] !== l || h[28] !== c ? (u = (0, a.jsx)(sQ.a, {
                conversationTerminology: "chat",
                selectedText: v.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), h[25] = v.selectedText, h[26] = i, h[27] = l, h[28] = c, h[29] = u) : u = h[29], u
        }
        var s0 = n("SEBt"),
            s1 = n("JUxu");
        let s2 = (0, m.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function s3(e) {
            let t, n, s, o, i = (0, r.c)(11),
                {
                    sharedConversationId: l
                } = e,
                c = (0, d.y)(ej.a),
                u = (0, d.x)(au.f, (0, m.useContext)(S.a));
            if (null != u) {
                let e, t;
                return i[0] !== u ? (e = (0, au.b)(u), i[0] = u, i[1] = e) : e = i[1], i[2] !== e ? (t = (0, a.jsx)(s1.a, {
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
                (0, ns.f)(c, s2, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, s0.d)(c, l)
            }, i[5] = c, i[6] = l, i[7] = n) : n = i[7], i[8] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation"
            }), i[8] = s) : s = i[8], i[9] !== n ? (o = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(ti.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: s
                })]
            }), i[9] = n, i[10] = o) : o = i[10], o
        }
        var s4 = n("AORd"),
            s5 = n("cP1f");

        function s6(e) {
            let {
                turn: t
            } = e;
            return t.items.some(s8)
        }

        function s8(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function s7(e) {
            let t, n, o, i, l, c, u, h, p, g, f, v, y, b, x, C, _, w, I, T, j, E, P, M, R, k, O, N, B, z, G, F, D, L, H, W = (0, r.c)(238),
                {
                    ref: q,
                    printTitle: K,
                    trackReadState: U,
                    trackShownImpressions: V,
                    composerRef: Q,
                    workspace: Y,
                    shouldBlockMcpApps: $,
                    contentX: J,
                    conversationId: Z,
                    sectionIndex: X,
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
                    customGptId: ef,
                    conversationLoadingLabel: ev,
                    entries: ey,
                    errorMessage: ex,
                    hasLoadError: eC,
                    onRetryLoad: e_,
                    hasRenderableTurns: ew,
                    isComposerDisabled: eI,
                    readOnlyPlaceholder: eS,
                    moreDetailsEnabled: eT,
                    isConversationEmpty: eE,
                    showEmptyState: eP,
                    isConversationFetching: eA,
                    isConversationLoading: eM,
                    isSharedConversation: eR,
                    isSubmitDisabled: ek,
                    retainLiveModelPicker: eO,
                    isTemporaryChat: eN,
                    isTurnActive: eB,
                    isWorkConversation: eG,
                    onboardingPrelude: eF,
                    scrollStateConversationId: eD,
                    initialResponsePlacementKey: eL,
                    sharedConversationId: eH,
                    sharedPostRegulatedConnectorKind: eK,
                    showComposer: eU,
                    archivedPreviewFooter: eV,
                    showPendingLoadingMessage: eQ,
                    gptPluginMigrationBanner: eY,
                    awaitingGptContinuation: e$,
                    workOnlyConversionBanner: eJ,
                    onAddSelectedText: eZ,
                    onSubmitAccepted: eX
                } = e,
                e0 = void 0 === eP || eP,
                e1 = (0, d.y)(ej.a),
                e2 = (0, d.y)(eg.a),
                e3 = (0, d.z)(null),
                e4 = (0, d.x)(au.f, (0, m.useContext)(S.a)),
                e5 = (0, d.z)(ep.a),
                e6 = (0, d.x)(eq.a, Z),
                e8 = Y?.fullscreenContent != null ? "content" : "workspace",
                e7 = (0, A.a)(ei ? "embedded" : e8),
                te = (0, d.z)(sD.a),
                tt = eU && te?.source.turnContext.conversationId !== ee,
                tn = "floating" === e7.placement,
                [ta, tr] = (0, m.useState)(!1),
                ts = ta && !e7.isHidden && !eo,
                to = Y?.fullscreenContent != null || tn && ts ? "floating" : "main",
                ti = (0, d.z)(sG.h),
                tl = em && null == eH && null == e4 && null == eV,
                tc = V && !es,
                td = !eM && !eB && !eC && eE && !ew,
                tu = !ei && "chatgpt-thread" === e2.value.routeKind && e2.value.workSideChat?.conversationId !== Z,
                th = (0, d.x)(tp.i, Z),
                tg = e0 && tl && td && null == th && !e6 && !tn,
                tm = null == ef ? "centered-home" : "home",
                tf = e0 && !e6 && (!tl || !eE),
                tv = (0, m.useRef)(null),
                ty = (0, m.useRef)(null),
                [tb, tx] = (0, m.useState)(null),
                tC = (0, nV.c)(),
                t_ = ei ? null : eD;
            W[0] !== t_ || W[1] !== tb || W[2] !== tC ? (t = () => ({
                conversationKey: t_,
                responseSpacer: tb,
                windowZoom: tC
            }), W[0] = t_, W[1] = tb, W[2] = tC, W[3] = t) : t = W[3];
            let tw = (0, eW.a)(t);
            W[4] !== e1 || W[5] !== t_ || W[6] !== tw ? (n = () => (function(e, t, n) {
                let a = (0, d.u)(ej.a, null == t ? 0 : e.get(r2.a, t)),
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
                        null != a && e.set(r2.a, a, (0, rD.a)(t, r?.getHeightPx() ?? 0))
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
                            if ((0, nV.b)(c.height, e) <= Math.max(0, -o.offset)) return;
                            d = s.scrollTop + (0, nV.b)(c.top - s.getBoundingClientRect().top, e) - o.offset
                        }
                        let u = s.scrollHeight - s.clientHeight;
                        d <= u && ((null == o || null != c || e.get(r)?.getEntryGeometry(o.key) == null) && l(), t.compensateScrollToDistanceFromBottomPx(u - Math.max(0, d)))
                    },
                    captureBeforeHide: function(e) {
                        let t = e.getScrollElement();
                        return null != t && t.clientHeight > 0 && (o = i ?? (e.shouldFollowContentGrowth() && 1 >= (0, rD.b)(t) ? "bottom" : function(e, t) {
                            let n = e.scrollTop,
                                a = e.getBoundingClientRect();
                            for (let r of e.querySelectorAll("[data-turn-key]")) {
                                let e = r.getBoundingClientRect(),
                                    s = r.dataset.turnKey;
                                if (null != s && e.height > 0 && e.bottom > a.top && e.top < a.bottom) return {
                                    top: n,
                                    turn: {
                                        key: s,
                                        offset: (0, nV.b)(e.top - a.top, t)
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
            })(e1, t_, tw), W[4] = e1, W[5] = t_, W[6] = tw, W[7] = n) : n = W[7];
            let [tI] = (0, m.useState)(n), tS = (0, d.z)(tI.api$), tT = (0, d.z)(tI.restoreState$), tj = (0, d.z)(tI.initialOffset$), {
                cancelPendingRestore: tE
            } = tI, tP = null == tT ? eL : null, [tA, tM] = (0, m.useState)(!1);
            W[8] !== ey ? (o = () => ey, W[8] = ey, W[9] = o) : o = W[9];
            let tR = (0, eW.a)(o),
                {
                    revealLatestResponse: tk,
                    scrollToSearchTurn: tO,
                    scrollToDelayedImageCard: tN
                } = ((F = (0, r.c)(18))[0] !== tS || F[1] !== ey ? (k = () => ({
                    async scrollToMessage(e) {
                        let t = ey.find(t => {
                            let {
                                turn: n
                            } = t;
                            return n.messageIds.includes(e)
                        });
                        null != t && null != tS && await tS.scrollToKey(t.turnKey, void 0, {
                            align: "top"
                        })
                    }
                }), O = [ey, tS], F[0] = tS, F[1] = ey, F[2] = k, F[3] = O) : (k = F[2], O = F[3]), (0, m.useImperativeHandle)(q, k, O), F[4] !== tS || F[5] !== ey ? (N = (e, t) => (0, aD.c)(tS, ey.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                })?.turnKey, t), F[4] = tS, F[5] = ey, F[6] = N) : N = F[6], D = (0, eW.a)(N), F[7] !== tS || F[8] !== Z || F[9] !== ey ? (B = async e => {
                    let t = ey.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != tS && await tS.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${Z}-${e}`)}"]`), {
                        align: "center"
                    })
                }, F[7] = tS, F[8] = Z, F[9] = ey, F[10] = B) : B = F[10], L = (0, eW.a)(B), F[11] !== tS?.scrollToKey || F[12] !== ey ? (z = function(e) {
                    let t = ey.findLast(s6);
                    return (0, s5.a)(tS?.scrollToKey, t?.turnKey, e)
                }, F[11] = tS?.scrollToKey, F[12] = ey, F[13] = z) : z = F[13], H = z, F[14] !== H || F[15] !== L || F[16] !== D ? (G = {
                    revealLatestResponse: H,
                    scrollToSearchTurn: D,
                    scrollToDelayedImageCard: L
                }, F[14] = H, F[15] = L, F[16] = D, F[17] = G) : G = F[17], G);
            W[10] === Symbol.for("react.memo_cache_sentinel") ? (i = e => (0, aD.a)(ty.current, e), W[10] = i) : i = W[10];
            let tB = (0, eW.a)(i),
                tz = `chatgpt:${Z}`;
            if (W[11] !== tE || W[12] !== Z || W[13] !== tR || W[14] !== tB || W[15] !== eN || W[16] !== e2 || W[17] !== tO || W[18] !== eH || W[19] !== e4 || W[20] !== tz) {
                let e;
                W[22] !== Z || W[23] !== eN || W[24] !== e2 || W[25] !== eH || W[26] !== e4 ? (e = async e => {
                    let t = e2.get(tp.j, Z);
                    !eN && null == eH && null == e4 && null != t && e2.get(aC.b) > 0 && await (0, ax.a)(e2, t, e)
                }, W[22] = Z, W[23] = eN, W[24] = e2, W[25] = eH, W[26] = e4, W[27] = e) : e = W[27], l = function(e) {
                    let {
                        getTurns: t,
                        routeContextId: n,
                        scrollAdapter: a,
                        ensureHistory: r
                    } = e, s = (0, rd.a)({
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
                                            unitId: (0, a1.a)("user", t),
                                            text: n
                                        }]
                                    }
                                    if ("assistant-message" === e.type) {
                                        let n = (0, rh.a)(e.content, ao.b),
                                            a = [],
                                            r = "";
                                        for (; e.content.includes(r);) r += "";
                                        let s = (0, rc.a)(function e(t, n, a, r) {
                                                let s = "",
                                                    o = 0;
                                                for (let i of t) {
                                                    let t = n.indexOf(i.raw, o); - 1 !== t && (s += n.slice(o, t), s += function(t, n, a) {
                                                        var r, s;
                                                        if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                        if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                            if (e.name === ao.a) {
                                                                let n = (0, rp.a)(e.attributes),
                                                                    a = (0, rp.b)(e.attributes),
                                                                    r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, ao.l)(e) === a);
                                                                if (null == r) return "";
                                                                let s = (0, ao.i)(r);
                                                                return "hidden" === s || "block" === s ? "" : (0, ao.j)(r) ?? ""
                                                            }
                                                            return e.name === rl.a ? (0, ru.a)(e.attributes, "label") ?? "" : e.name === rl.b || e.name === rl.c ? "" : e.name === ri.a ? e.text ?? "" : null
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
                                            unitId: (0, a1.a)("assistant", t),
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
                    getTurns: tR,
                    routeContextId: tz,
                    scrollAdapter: {
                        scrollToTurn: tO,
                        getTurnContainer: tB,
                        onNavigate: tE
                    },
                    ensureHistory: e
                }), W[11] = tE, W[12] = Z, W[13] = tR, W[14] = tB, W[15] = eN, W[16] = e2, W[17] = tO, W[18] = eH, W[19] = e4, W[20] = tz, W[21] = l
            } else l = W[21];
            let tG = l;
            W[28] !== tG.contextId ? (c = {
                containerRef: ty,
                contextId: tG.contextId
            }, W[28] = tG.contextId, W[29] = c) : c = W[29], (0, aW.a)(c);
            let tF = tt && null == eV,
                tD = e5 && tF && !tn,
                tL = (0, aV.a)();
            W[30] !== Z || W[31] !== ew || W[32] !== es || W[33] !== X || W[34] !== tL ? (u = {
                conversationId: Z,
                sectionIndex: X,
                hasRenderableTurns: ew,
                isCoveredByFloatingPanel: es,
                shouldReduceMotion: tL,
                containerRef: ty
            }, W[30] = Z, W[31] = ew, W[32] = es, W[33] = X, W[34] = tL, W[35] = u) : u = W[35];
            let tH = function(e) {
                    let t, n, a, s = (0, r.c)(12),
                        {
                            conversationId: o,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, sq.a)(0);
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
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(sU) && 0 !== n.clientWidth && (s.disconnect(), h.set(a * n.clientWidth), e = (0, rz.a)(h, 0, {
                                    duration: .3,
                                    ease: sK.d
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
                tW = tF && tn,
                [tq, tK] = (0, m.useState)(null),
                [tU, tV] = (0, m.useState)(null),
                [tQ, tY] = (0, m.useState)(null),
                t$ = eR && tF && !eI && !tn && !e5,
                [tJ, tZ] = (0, m.useState)(null);
            W[36] !== e$ || W[37] !== Z || W[38] !== ew || W[39] !== eN || W[40] !== eK || W[41] !== eU ? (h = eU && !e$ ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(aG.BrowserComposerDisclaimer, {
                    supportsMessageDisclosures: !0,
                    conversationId: Z,
                    hasUserMessage: ew,
                    isTemporaryChat: eN,
                    regulatedConnectorKindOverride: eK
                })
            }) : void 0, W[36] = e$, W[37] = Z, W[38] = ew, W[39] = eN, W[40] = eK, W[41] = eU, W[42] = h) : h = W[42];
            let tX = h;
            W[43] !== Z || W[44] !== ex || W[45] !== ew || W[46] !== eI || W[47] !== ek || W[48] !== eG || W[49] !== eU || W[50] !== eQ ? (p = ew ? null : (0, a.jsx)(rs.a, {
                conversationId: Z,
                errorMessage: ex,
                isWorkConversation: eG,
                showPendingLoadingMessage: eQ,
                showRequestUserInputStatus: eU && !eI && !ek
            }), W[43] = Z, W[44] = ex, W[45] = ew, W[46] = eI, W[47] = ek, W[48] = eG, W[49] = eU, W[50] = eQ, W[51] = p) : p = W[51];
            let t0 = p;
            W[52] !== Z || W[53] !== eG || W[54] !== eH || W[55] !== e4 ? (g = eG && null == eH && null == e4 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(az, {
                    conversationId: Z
                }, Z)
            }) : null, W[52] = Z, W[53] = eG, W[54] = eH, W[55] = e4, W[56] = g) : g = W[56];
            let t1 = g;
            W[57] !== eV || W[58] !== t1 ? (f = null != eV ? (0, a.jsxs)(a.Fragment, {
                children: [t1, eV]
            }) : null, W[57] = eV, W[58] = t1, W[59] = f) : f = W[59];
            let t2 = f;
            W[60] !== en || W[61] !== t2 || W[62] !== e$ || W[63] !== ee || W[64] !== et || W[65] !== Q || W[66] !== Z || W[67] !== ed || W[68] !== tX || W[69] !== t0 || W[70] !== ey || W[71] !== t1 || W[72] !== tq || W[73] !== eY || W[74] !== eC || W[75] !== ew || W[76] !== el || W[77] !== e5 || W[78] !== eI || W[79] !== eM || W[80] !== es || W[81] !== eo || W[82] !== tn || W[83] !== ti || W[84] !== ei || W[85] !== eR || W[86] !== ek || W[87] !== eN || W[88] !== eG || W[89] !== tc || W[90] !== eX || W[91] !== eS || W[92] !== tI || W[93] !== t$ || W[94] !== er || W[95] !== tb || W[96] !== eO || W[97] !== tk || W[98] !== e7.isHidden || W[99] !== eH || W[100] !== e4 || W[101] !== tt || W[102] !== ec || W[103] !== tW || W[104] !== tD || W[105] !== U || W[106] !== to || W[107] !== eJ || W[108] !== Y ? (v = t2 ?? (tt ? (0, a.jsxs)(r6.a.Provider, {
                value: ey.at(-1) ?? null,
                children: [eo || tn ? null : (0, a.jsx)(aK.a, {
                    onNavigate: tk
                }, Z), tn ? null : et, (0, a.jsx)(sR, {
                    requiredSystemHints: er,
                    composerRef: Q,
                    workspace: Y,
                    isInlinePreview: ei,
                    hideModelPicker: el,
                    showFilePicker: ec,
                    disableAutoFocus: ed,
                    conversationId: ee,
                    isImageEditComposer: ti,
                    disabled: eI,
                    readOnlyPlaceholder: eS,
                    awaitingGptContinuation: e$,
                    headerContent: t1,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [t$ ? (0, a.jsx)("div", {
                            ref: tY,
                            className: "empty:hidden"
                        }) : null, en, !eM && !eC && ew && !e$ && eJ, e5 ? null : eY, tW && t0]
                    }),
                    isFullscreenComposer: tn,
                    isHidden: e7.isHidden,
                    trackReadState: U && !es,
                    trackShownImpressions: tc,
                    isSharedConversation: eR,
                    isSubmitDisabled: ek,
                    retainLiveModelPicker: eO && !ti,
                    followupPortalTarget: tq,
                    takeoverDisclaimerRef: tZ,
                    showConversationFollowups: null == eH && null == e4 && !eN && !eG && !tn,
                    isTemporaryChat: eN,
                    isWorkConversation: eG,
                    responseSpacerState: tb,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(rE, {
                            entries: ey,
                            historyLoader: eN || null != eH || null != e4 ? null : (0, a.jsx)(sL.a, {
                                conversationId: Z
                            }),
                            isVisible: t,
                            rendersWidgets: "floating" === to,
                            onVisibilityChange: tr
                        }, Z)
                    },
                    showVoiceStage: !tD,
                    voiceDisclaimer: e5 && !tD ? tX : void 0,
                    onSubmitAccepted: e => {
                        tI.acceptSubmit(), eX?.(e)
                    }
                }, `${ee}:${ti?"image-edit":"chat"}`)]
            }) : t1), W[60] = en, W[61] = t2, W[62] = e$, W[63] = ee, W[64] = et, W[65] = Q, W[66] = Z, W[67] = ed, W[68] = tX, W[69] = t0, W[70] = ey, W[71] = t1, W[72] = tq, W[73] = eY, W[74] = eC, W[75] = ew, W[76] = el, W[77] = e5, W[78] = eI, W[79] = eM, W[80] = es, W[81] = eo, W[82] = tn, W[83] = ti, W[84] = ei, W[85] = eR, W[86] = ek, W[87] = eN, W[88] = eG, W[89] = tc, W[90] = eX, W[91] = eS, W[92] = tI, W[93] = t$, W[94] = er, W[95] = tb, W[96] = eO, W[97] = tk, W[98] = e7.isHidden, W[99] = eH, W[100] = e4, W[101] = tt, W[102] = ec, W[103] = tW, W[104] = tD, W[105] = U, W[106] = to, W[107] = eJ, W[108] = Y, W[109] = v) : v = W[109];
            let t3 = v;
            W[110] !== Z || W[111] !== es || W[112] !== ei || W[113] !== e3 || W[114] !== eH || W[115] !== e4 ? (y = void 0, W[110] = Z, W[111] = es, W[112] = ei, W[113] = e3, W[114] = eH, W[115] = e4, W[116] = y) : y = W[116];
            let t4 = y;
            W[117] !== e1 || W[118] !== Z || W[119] !== U ? (b = e => {
                U && null != e1.get(aq.b, Z) && e1.get(tp.L, Z) && (0, aU.a)(e1, e) && (0, r4.b)(e1, Z).catch(ot)
            }, W[117] = e1, W[118] = Z, W[119] = U, W[120] = b) : b = W[120];
            let t5 = b,
                t6 = es || void 0;
            W[121] === Symbol.for("react.memo_cache_sentinel") ? (x = null, W[121] = x) : x = W[121], W[122] !== Z || W[123] !== es || W[124] !== tn || W[125] !== U ? (C = !U || tn || es ? null : (0, a.jsx)(r5.a, {
                conversationId: Z
            }), W[122] = Z, W[123] = es, W[124] = tn, W[125] = U, W[126] = C) : C = W[126], W[127] !== eV || W[128] !== Z || W[129] !== ei || W[130] !== eH || W[131] !== e4 ? (_ = ei || null != eH || null != e4 || null != eV ? null : (0, a.jsx)(r3, {
                conversationId: Z
            }, Z), W[127] = eV, W[128] = Z, W[129] = ei, W[130] = eH, W[131] = e4, W[132] = _) : _ = W[132], W[133] !== Z || W[134] !== eM || W[135] !== ei || W[136] !== eN || W[137] !== eH || W[138] !== e4 ? (w = ei || eM || eN || null != eH || null != e4 ? null : (0, a.jsx)(sH, {
                conversationId: Z
            }), W[133] = Z, W[134] = eM, W[135] = ei, W[136] = eN, W[137] = eH, W[138] = e4, W[139] = w) : w = W[139], W[140] !== Z || W[141] !== ey || W[142] !== tA || W[143] !== eA || W[144] !== eM || W[145] !== ei || W[146] !== tk || W[147] !== eH || W[148] !== e4 || W[149] !== tS ? (I = ei || eM || null != eH || null != e4 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(nZ, {
                    conversationId: Z,
                    entries: ey,
                    turnListApi: tS
                }), (0, a.jsx)(a$.a, {
                    ready: !eA && tA && null != tS && ey.length > 0,
                    onNavigate: tk
                })]
            }), W[140] = Z, W[141] = ey, W[142] = tA, W[143] = eA, W[144] = eM, W[145] = ei, W[146] = tk, W[147] = eH, W[148] = e4, W[149] = tS, W[150] = I) : I = W[150], W[151] !== eV || W[152] !== tE || W[153] !== tg || W[154] !== ee || W[155] !== J || W[156] !== th || W[157] !== Z || W[158] !== ev || W[159] !== tG || W[160] !== tX || W[161] !== t0 || W[162] !== ey || W[163] !== t3 || W[164] !== eC || W[165] !== ew || W[166] !== ea || W[167] !== tm || W[168] !== tj || W[169] !== tP || W[170] !== e5 || W[171] !== e6 || W[172] !== eI || W[173] !== eA || W[174] !== eM || W[175] !== es || W[176] !== eo || W[177] !== tn || W[178] !== ei || W[179] !== td || W[180] !== tu || W[181] !== eR || W[182] !== eN || W[183] !== eB || W[184] !== eG || W[185] !== eT || W[186] !== t4 || W[187] !== tc || W[188] !== eZ || W[189] !== e_ || W[190] !== eF || W[191] !== em || W[192] !== K || W[193] !== tI || W[194] !== tQ || W[195] !== tU || W[196] !== t$ || W[197] !== tb || W[198] !== e7.isChatPaneHidden || W[199] !== e2 || W[200] !== eh || W[201] !== tN || W[202] !== tH || W[203] !== eH || W[204] !== e4 || W[205] !== $ || W[206] !== tL || W[207] !== eU || W[208] !== tt || W[209] !== tf || W[210] !== tF || W[211] !== tW || W[212] !== tD || W[213] !== tJ || W[214] !== eu || W[215] !== tS || W[216] !== Y ? (T = Y?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!$ && Y.fullscreenContent, t3]
            }) : (0, a.jsxs)(aJ.a, {
                scrollAttributionKey: tc ? ey.at(-1)?.turnKey : void 0,
                viewportOverlay: eo || ei || eG || null != eH || null != e4 || null != eV || es || tn ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(r9, {
                        conversationId: Z
                    }, Z)
                }),
                hideTranscript: eo,
                active: !eM && (!ew || null != tS),
                presentation: eu ?? (ei ? "compact" : "default"),
                contentX: J,
                preserveReadingPassage: !eG && !ei,
                supportsComposerExpansion: tF && !tn && null == Y,
                footerPlacement: tg ? tm : "bottom",
                followContentGrowth: !em,
                initialOffset: tj,
                preserveViewportOnContentGrowth: em,
                scrollOrigin: eh,
                onScroll: tI.onScroll,
                onUserScrollIntent: tE,
                scrollToBottomButton: !tt || tn || tD ? void 0 : {
                    isWorking: eB
                },
                threadEndContent: e5 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tK,
                        className: ez.a
                    }), null == tJ ? tX : (0, nU.createPortal)(tX, tJ)]
                }),
                footerLeadingContent: tD ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: ez.a,
                            children: (0, a.jsx)(aQ.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: tX
                    })]
                }) : t4,
                footer: t3,
                children: [ei || eM || null != eH ? null : (0, a.jsx)(rr, {
                    conversationId: Z,
                    entries: ey,
                    isConversationFetching: eA,
                    turnListApi: tS
                }), (0, a.jsxs)(nK.a.div, {
                    ref: ty,
                    style: {
                        x: tH
                    },
                    "data-chatgpt-conversation-selection-target": Z,
                    "data-rail-chat-transcript": tu || void 0,
                    className: (0, nq.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", ei && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, aH.K)(e2, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, aH.K)(e2, "conversation")
                    },
                    children: [(0, a.jsxs)(m.Suspense, {
                        fallback: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(s.b, {
                                name: "conversation content"
                            }), (0, a.jsx)(e9.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })]
                        }),
                        children: [ei || eM ? null : (0, a.jsx)(aL.a, {
                            conversationSource: tG
                        }), es || e7.isChatPaneHidden || eN || null != eH || null != e4 ? null : ea ?? (0, a.jsx)(sL.a, {
                            conversationId: Z
                        }), (0, a.jsx)(s4.b, {
                            conversationId: Z
                        }), (null != eH || null != e4) && ew ? (0, a.jsx)(s3, {
                            sharedConversationId: eH
                        }) : null, null == eF ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: ez.a,
                                children: eF
                            })
                        }), null == th || eM ? null : (0, a.jsx)(aZ.a, {
                            conversationId: Z,
                            branchSource: {
                                conversationId: th.metadata.source_conversation_id,
                                title: th.metadata.source_conversation_title,
                                gizmoId: th.metadata.source_conversation_gizmo_id,
                                ownerId: th.metadata.source_conversation_owner_id
                            }
                        }), eC ? (0, a.jsx)(ak, {
                            isFetching: eA,
                            isSharedConversation: eR,
                            onRetry: e_
                        }) : eM ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": ev,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(e9.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : ew ? (0, a.jsxs)(sF.a, {
                            value: tN,
                            children: [ei || es ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eN || null != eH || null != e4 ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(aj, {
                                        conversationId: Z
                                    })
                                }), (0, a.jsx)(aI, {
                                    entries: ey,
                                    title: K,
                                    TurnRowComponent: rj
                                })]
                            }), (0, a.jsx)(sW.a, {
                                enabled: t$,
                                aboveComposer: tQ,
                                belowMessage: tU,
                                children: (0, a.jsx)(r$, {
                                    viewportRef: tv,
                                    isTurnActive: eB,
                                    conversationId: Z,
                                    entries: ey,
                                    readingPosition: tI,
                                    isInlinePreview: ei,
                                    onVisibleContentReady: () => tM(!0),
                                    responseSpacerState: tb
                                })
                            }), t$ ? (0, a.jsx)("div", {
                                ref: tV,
                                className: "empty:hidden"
                            }) : null]
                        }) : tf && null == th && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            "data-rail-chat-empty": tu && td || void 0,
                            children: (0, a.jsx)(eb.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation"
                            })
                        }), !tW && t0, (0, a.jsx)(r1.a, {
                            conversationId: ee,
                            isWorkConversation: eG
                        }), eU && !eI ? (0, a.jsx)(sZ, {
                            conversationId: Z,
                            moreDetailsEnabled: eT,
                            onAddSelectedText: eZ
                        }) : null]
                    }), ei ? null : (0, a.jsx)(ro.a, {
                        preserveResponseViewport: e => tv.current?.holdForResponse(e) ?? !1,
                        conversationId: Z,
                        initialPlacementKey: tP,
                        isActiveVoiceConversation: e5 && e6,
                        isLoadingHistory: eM,
                        latestUserTurnKey: ey.findLast(s9)?.turnKey,
                        onResponseSpacerStateChange: tx
                    }), tD ? (0, a.jsx)(nK.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tL ? aY.c : aY.b
                    }) : null]
                })]
            }), W[151] = eV, W[152] = tE, W[153] = tg, W[154] = ee, W[155] = J, W[156] = th, W[157] = Z, W[158] = ev, W[159] = tG, W[160] = tX, W[161] = t0, W[162] = ey, W[163] = t3, W[164] = eC, W[165] = ew, W[166] = ea, W[167] = tm, W[168] = tj, W[169] = tP, W[170] = e5, W[171] = e6, W[172] = eI, W[173] = eA, W[174] = eM, W[175] = es, W[176] = eo, W[177] = tn, W[178] = ei, W[179] = td, W[180] = tu, W[181] = eR, W[182] = eN, W[183] = eB, W[184] = eG, W[185] = eT, W[186] = t4, W[187] = tc, W[188] = eZ, W[189] = e_, W[190] = eF, W[191] = em, W[192] = K, W[193] = tI, W[194] = tQ, W[195] = tU, W[196] = t$, W[197] = tb, W[198] = e7.isChatPaneHidden, W[199] = e2, W[200] = eh, W[201] = tN, W[202] = tH, W[203] = eH, W[204] = e4, W[205] = $, W[206] = tL, W[207] = eU, W[208] = tt, W[209] = tf, W[210] = tF, W[211] = tW, W[212] = tD, W[213] = tJ, W[214] = eu, W[215] = tS, W[216] = Y, W[217] = T) : T = W[217], W[218] !== es || W[219] !== t5 || W[220] !== t6 || W[221] !== C || W[222] !== _ || W[223] !== w || W[224] !== I || W[225] !== T ? (j = (0, a.jsxs)("div", {
                onKeyDownCapture: t5,
                onPointerDownCapture: t5,
                onWheelCapture: t5,
                className: "contents",
                "aria-hidden": t6,
                inert: es,
                children: [x, C, _, w, I, T]
            }), W[218] = es, W[219] = t5, W[220] = t6, W[221] = C, W[222] = _, W[223] = w, W[224] = I, W[225] = T, W[226] = j) : j = W[226];
            let t8 = j,
                t7 = !ei,
                t9 = "main" === to;
            W[227] !== t7 || W[228] !== t9 ? (E = {
                presentation: "main",
                preserveActivityDisclosures: t7,
                rendersWidgets: t9
            }, W[227] = t7, W[228] = t9, W[229] = E) : E = W[229];
            let ne = !ts && (eo || es || e7.isChatPaneHidden || Y?.fullscreenContent != null);
            return W[230] !== ne ? (P = (0, a.jsx)(s.b, {
                name: "conversation hidden",
                active: ne
            }), W[230] = ne, W[231] = P) : P = W[231], W[232] !== t8 ? (M = (0, a.jsx)(aF.a, {
                children: t8
            }), W[232] = t8, W[233] = M) : M = W[233], W[234] !== E || W[235] !== P || W[236] !== M ? (R = (0, a.jsxs)(d.b, {
                scope: rv,
                value: E,
                children: [P, M]
            }), W[234] = E, W[235] = P, W[236] = M, W[237] = R) : R = W[237], R
        }

        function s9(e) {
            let {
                turn: t
            } = e;
            return t.items.some(oe)
        }

        function oe(e) {
            return "user-message" === e.type
        }

        function ot() {}
        var on = n("gCr7");
        n("i1of");
        var oa = n("alJ6"),
            or = n("u9iS"),
            os = n("fNPc"),
            oo = n("vVgo"),
            oi = n("T33u"),
            ol = n("EpL9"),
            oc = n("svjy");

        function od(e) {
            let {
                conversationId: t,
                courseId: n
            } = e;
            return `chatgpt-learning-course:${JSON.stringify([t,n])}`
        }
        let ou = (0, d.d)(eg.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(tD.h) && n(tD.i) && n(se.l.activeTab$)?.tabId === od(e)
            }),
            oh = (0, tc.a)(async () => {
                let {
                    CoursePanelTab: e
                } = await Promise.all([n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(882456), n.e(736970), n.e(81461), n.e(259288), n.e(818353), n.e(758379), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(46150), n.e(780567), n.e(581855)]).then(n.bind(n, "lbEC"));
                return e
            }, {
                propagateLoadError: !0
            }),
            op = (0, ol.k)("chatgpt-learning-course", oh, {
                dropDestinations: ["right"],
                isAvailable: (e, t) => "chatgpt-thread" === e.value.routeKind && (null == t || e.value.conversationId === t.conversationId),
                paneWidth: () => ({
                    defaultWidth: 480,
                    storageKey: "app-shell:learning-course-width"
                }),
                showInNewTabLauncher: !1,
                open: og
            });

        function og(e, t) {
            let {
                conversationId: n,
                courseId: r
            } = t, {
                preserveFocus: s = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = e.get(T.f), i = e.get(T.j), l = () => "chatgpt-thread" === e.value.routeKind && e.value.conversationId === n && e.get(eT.c)?.pathname === e.value.pathname && e.get(T.f) === o && e.get(T.j) === i;
            if (!l() || "" === r) return;
            let c = od({
                conversationId: n,
                courseId: r
            });
            e.get(ou, {
                conversationId: n,
                courseId: r
            }) ? se.l.closeTab(e, c) : (0, se.h)(e, op, {
                target: "right",
                revealAndFocus: !0,
                preserveFocus: s,
                shouldOpen: l,
                id: c,
                icon: (0, a.jsx)(tl.nb, {}),
                title: e.get(oc.a).formatMessage({
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
        var om = n("MgyE"),
            of = n("gyrn"),
            ov = n("ckwE"),
            oy = n("kHi2");

        function ob(e) {
            let t, n = (0, r.c)(3),
                {
                    children: s
                } = e,
                [o] = (0, m.useState)(ox);
            return n[0] !== o || n[1] !== s ? (t = (0, a.jsx)(a_.a, {
                value: o,
                children: s
            }), n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }

        function ox() {
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

        function oC(e) {
            let t, n, s, o = (0, r.c)(8),
                {
                    children: i,
                    courseChatId: l
                } = e,
                c = (0, d.y)(eg.a);
            o[0] !== l || o[1] !== c ? (t = "chatgpt-thread" === c.value.routeKind && c.value.conversationId === l ? c.get(oy.b) : void 0, o[0] = l, o[1] = c, o[2] = t) : t = o[2];
            let u = t;
            return o[3] !== i ? (n = (0, a.jsx)(ob, {
                children: i
            }), o[3] = i, o[4] = n) : n = o[4], o[5] !== u || o[6] !== n ? (s = (0, a.jsx)(ov.a, {
                binding: u,
                children: n
            }), o[5] = u, o[6] = n, o[7] = s) : s = o[7], s
        }
        var o_ = n("MDmT"),
            ow = n("Fjze");

        function oI(e) {
            let t, n, a, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = e,
                i = (0, d.y)(ej.a),
                l = null != o;
            s[0] !== i || s[1] !== o ? (t = () => {
                null != o && (no.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: o
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(oS), (0, ec.a)(i, ow.a, {
                    sharedConversationId: o
                }))
            }, s[0] = i, s[1] = o, s[2] = t) : t = s[2];
            let c = (0, m.useEffectEvent)(t);
            return s[3] !== c ? (n = () => {
                c()
            }, s[3] = c, s[4] = n) : n = s[4], s[5] !== l ? (a = [l], s[5] = l, s[6] = a) : a = s[6], (0, m.useEffect)(n, a), null
        }

        function oS() {}
        var oT = n("GigQ"),
            oj = n("JKdL"),
            oE = n("d107"),
            oP = n("FGv0"),
            oA = n("r9i9"),
            oM = n("tdfh"),
            oR = n("uQqo"),
            ok = n("yi1v"),
            oO = n("niKP");

        function oN(e) {
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
                        [r, ...s] = a?.attachments[0]?.kind === "media_generation" ? (0, oR.a)(a, (0, oR.b)(a)) : [],
                        o = () => (0, oA.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId, 1 / 0, void 0, (0, nW.b)(e.get, t.dialogProps.serverConversationId)),
                        i = crypto.randomUUID();
                    (0, s0.c)(e, {
                        attachmentType: t.attachmentType,
                        contentType: t.contentType,
                        shareId: t.shareId,
                        shareSessionId: i
                    });
                    let l = t.dialogProps.receiverShareLink;
                    if ((0, ok.a)() && null != l && ("conversation" === l.contentType || "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE" === t.attachmentType)) {
                        if ("unsupported" !== await (0, ok.b)(e, {
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
                        if ("conversation" === l.contentType) return void(0, ns.f)(e, oM.a, {
                            ...t.dialogProps,
                            shareSessionId: i
                        })
                    }
                    if (l?.contentType === "conversation") {
                        let a = (0, s0.b)(e, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                shareId: t.shareId,
                                shareSessionId: i,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                                usedExistingLink: !0,
                                omitSheetType: !0
                            }),
                            r = await (0, oP.a)(Promise.resolve(l.shareLinkUrl));
                        if (a({
                                result: r ? "link-copied" : "copy-failed",
                                shareId: t.shareId
                            }), r) {
                            let {
                                showConversationShareCopiedToast: t
                            } = await n.e(555532).then(n.bind(n, "euaP"));
                            t(e, null, !0 === l.isWorkspaceOnly)
                        } else(0, ns.f)(e, oM.a, {
                            ...t.dialogProps,
                            previewTurns: o(),
                            recoveryShareLink: l,
                            shareSessionId: i
                        });
                        return
                    }(0, ns.f)(e, oM.a, {
                        ...t.dialogProps,
                        image: r?.src == null ? void 0 : {
                            alt: t.dialogProps.title ?? "",
                            item: r,
                            previewSrc: r.src,
                            additionalPublishedPreviewUrls: s.flatMap(e => null == e.src ? [] : [e.src])
                        },
                        previewTurns: null != r ? void 0 : o(),
                        privacyNotices: (0, oA.k)({
                            conversation: t.conversation,
                            projectId: null
                        }),
                        shareSessionId: i
                    })
                })(h, u).finally(() => y(!1)))
            }, c[2] = u, c[3] = v, c[4] = h, c[5] = s) : s = c[5], c[6] !== v ? (o = v ? null : (0, a.jsx)(eS.a, {
                asset: oO.a
            }), c[6] = v, c[7] = o) : o = c[7], c[8] !== v || c[9] !== g || c[10] !== s || c[11] !== o ? (i = (0, a.jsx)(ti.a, {
                "aria-label": g,
                color: "ghostActive",
                loading: v,
                size: "toolbar",
                uniform: !0,
                onClick: s,
                children: o
            }), c[8] = v, c[9] = g, c[10] = s, c[11] = o, c[12] = i) : i = c[12], c[13] !== g || c[14] !== i ? (l = (0, a.jsx)(ts.a, {
                content: g,
                children: i
            }), c[13] = g, c[14] = i, c[15] = l) : l = c[15], l
        }
        var oB = n("MVHH"),
            oz = n("rhKI"),
            oG = n("PP3M"),
            oF = n("jAnS"),
            oD = n("CFOe"),
            oL = n("WFY2"),
            oH = n("JNtf"),
            oW = n("mUDD");

        function oq(e) {
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
            }, f[4] = v, f[5] = C, f[6] = s) : s = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(oH.e, {
                children: (0, a.jsx)(eb.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?"
                })
            }), f[7] = o) : o = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(oW.e, {
                children: (0, a.jsx)(oW.d, {
                    className: "select-none",
                    title: o,
                    subtitle: (0, a.jsx)(oH.d, {
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
            }), f[12] = c) : c = f[12], f[13] !== y || f[14] !== l ? (d = (0, a.jsx)(ti.a, {
                color: "secondary",
                disabled: y,
                onClick: l,
                children: c
            }), f[13] = y, f[14] = l, f[15] = d) : d = f[15];
            let w = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save"
            }), f[16] = u) : u = f[16], f[17] !== y || f[18] !== w ? (h = (0, a.jsx)(ti.a, {
                color: "primary",
                disabled: w,
                loading: y,
                type: "submit",
                children: u
            }), f[17] = y, f[18] = w, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(oW.e, {
                children: (0, a.jsxs)(oW.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== s ? (g = (0, a.jsxs)(oW.b, {
                as: "form",
                onSubmit: s,
                children: [i, p]
            }), f[23] = p, f[24] = s, f[25] = g) : g = f[25], f[26] !== y || f[27] !== g || f[28] !== n || f[29] !== _ ? (m = (0, a.jsx)(oH.a, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: _,
                size: "narrow",
                children: g
            }), f[26] = y, f[27] = g, f[28] = n, f[29] = _, f[30] = m) : m = f[30], m
        }

        function oK(e) {
            (0, tn.e)(e).catch(() => {
                oL.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function oU(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(oV, {
                        conversationId: s
                    })
                })]
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function oV(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return (0, d.z)(oG.e) ? (n[0] !== s ? (t = (0, a.jsx)(oQ, {
                conversationId: s
            }), n[0] = s, n[1] = t) : t = n[1], t) : null
        }

        function oQ(e) {
            let t, n, s, o, i, l, c, u, h, p, g, y, b, x = (0, r.c)(49),
                {
                    conversationId: C
                } = e,
                _ = (0, d.y)(ej.a),
                w = (0, f.a)(),
                I = (0, v.$)(),
                [S, T] = (0, m.useState)(!1),
                [j, E] = (0, m.useState)(!1),
                [P, A] = (0, m.useState)(!1),
                [M, R] = (0, m.useState)(!1),
                k = (0, m.useRef)(!1),
                O = (0, d.z)(nc.p).data,
                N = (0, d.x)(tp.j, C),
                B = (0, d.x)(tp.Y, C),
                z = (0, d.x)(tp.J, C),
                G = (0, d.x)(e6.j, C);
            x[0] !== C || x[1] !== _ ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (_.get(tp.J, C) || _.get(e6.j, C) || t !== _.get(tp.j, C) || n !== _.get(tp.Y, C)) throw Error("Cannot save an unavailable temporary chat message");
                    return no.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: oX
                    }).then(oZ)
                },
                retry: oJ
            }, x[0] = C, x[1] = _, x[2] = t) : t = x[2];
            let {
                mutateAsync: F,
                isPending: D
            } = (0, ey.a)(t), L = null != N && null != B && !z && !G && !D && !j;
            x[3] !== w ? (n = w.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat"
            }), x[3] = w, x[4] = n) : n = x[4];
            let H = n;
            x[5] !== O?.eligibleAnnouncements ? (s = O?.eligibleAnnouncements?.includes(nc.h), x[5] = O?.eligibleAnnouncements, x[6] = s) : s = x[6];
            let W = !0 === s,
                q = !M && (P || W && L);
            x[7] !== C || x[8] !== P || x[9] !== _ || x[10] !== q ? (o = () => {
                if (!q || P || k.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || k.current || (k.current = !0, (0, ec.a)(_, oB.Bb, {
                        personalizationMode: (0, oz.a)((0, oG.k)(_, C))
                    }), A(!0), oK(_))
                }), () => {
                    e = !0
                }
            }, i = [C, P, _, q], x[7] = C, x[8] = P, x[9] = _, x[10] = q, x[11] = o, x[12] = i) : (o = x[11], i = x[12]), (0, m.useEffect)(o, i), x[13] !== _ ? (l = () => {
                R(!0), k.current || (k.current = !0, oK(_))
            }, x[13] = _, x[14] = l) : l = x[14];
            let V = l;
            x[15] !== L || x[16] !== C || x[17] !== w || x[18] !== I || x[19] !== F || x[20] !== _ || x[21] !== B || x[22] !== N ? (c = async function() {
                let e;
                if (!L || null == N || null == B) return;
                let t = (0, oz.a)((0, oG.k)(_, C));
                (0, ec.a)(_, oB.Cb, {
                    personalizationMode: t
                });
                try {
                    e = (await F({
                        sourceConversationId: N,
                        selectedLeafId: B
                    })).conversation_id
                } catch (e) {
                    (0, ec.a)(_, oB.Db, {
                        personalizationMode: t,
                        failureCategory: (0, oz.b)(e)
                    }), _.get(U.f).danger(w.formatMessage({
                        id: "chatgptConversations.temporaryChat.save.error",
                        defaultMessage: "Couldn't save this chat. Please try again."
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.temporaryChat.save.error"
                        }
                    });
                    return
                }
                E(!0), T(!1), (0, ew.H)(_), (0, ew.K)(_, N, "remove"), (0, ew.K)(_, e, "refresh"), I((0, oF.c)(e), {
                    replace: !0
                }), _.get(U.f).success(w.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history."
                })), no.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: B
                    }
                }).then(o$).then(t => {
                    (0, tp.bc)({
                        scope: _,
                        conversationId: e,
                        title: t
                    }), _.query.setData(tn.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, ew.H)(_), (0, ew.K)(_, e, "refresh")
                }).catch(oY)
            }, x[15] = L, x[16] = C, x[17] = w, x[18] = I, x[19] = F, x[20] = _, x[21] = B, x[22] = N, x[23] = c) : c = x[23];
            let Q = c,
                Y = !L;
            x[24] !== C || x[25] !== _ || x[26] !== q ? (u = () => {
                (0, ec.a)(_, oB.Fb, {
                    personalizationMode: (0, oz.a)((0, oG.k)(_, C)),
                    coachMarkVisible: q
                }), T(!0)
            }, x[24] = C, x[25] = _, x[26] = q, x[27] = u) : u = x[27], x[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(K.b, {
                icon: {
                    16: tl.pb,
                    20: tl.qb
                }
            }), x[28] = h) : h = x[28], x[29] !== H || x[30] !== Y || x[31] !== u ? (p = (0, a.jsx)(ti.a, {
                "aria-label": H,
                color: "toolbar",
                disabled: Y,
                size: "toolbar",
                uniform: !0,
                onClick: u,
                children: h
            }), x[29] = H, x[30] = Y, x[31] = u, x[32] = p) : p = x[32];
            let $ = p;
            return x[33] !== V || x[34] !== w || x[35] !== H || x[36] !== $ || x[37] !== q ? (g = q ? (0, a.jsx)(oD.a, {
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
            }) : (0, a.jsx)(ts.a, {
                content: H,
                children: $
            }), x[33] = V, x[34] = w, x[35] = H, x[36] = $, x[37] = q, x[38] = g) : g = x[38], x[39] !== L || x[40] !== C || x[41] !== Q || x[42] !== S || x[43] !== D || x[44] !== _ ? (y = S ? (0, a.jsx)(oq, {
                canSave: L,
                isPending: D,
                onCancel: () => {
                    (0, ec.a)(_, oB.Ab, {
                        personalizationMode: (0, oz.a)((0, oG.k)(_, C))
                    })
                },
                onClose: () => T(!1),
                onSave: () => void Q()
            }) : null, x[39] = L, x[40] = C, x[41] = Q, x[42] = S, x[43] = D, x[44] = _, x[45] = y) : y = x[45], x[46] !== g || x[47] !== y ? (b = (0, a.jsxs)(a.Fragment, {
                children: [g, y]
            }), x[46] = g, x[47] = y, x[48] = b) : b = x[48], b
        }

        function oY() {}

        function o$(e) {
            return aX.object({
                title: aX.string()
            }).parse(e).title
        }

        function oJ(e, t) {
            return e < 1 && t instanceof eV.FetchError && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function oZ(e) {
            return aX.object({
                conversation_id: aX.string().min(1)
            }).parse(e)
        }

        function oX(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var o0 = n("J8FU"),
            o1 = n("Aluh"),
            o2 = n("mG6J");

        function o3(e) {
            let t, n, s = (0, r.c)(14),
                {
                    conversationId: o,
                    shouldBlockExternalEgress: i,
                    widgets: l
                } = e,
                c = (0, d.z)(o1.b);
            if (i) return null;
            if (s[0] !== c || s[1] !== o || s[2] !== l) {
                let e, n, r;
                s[4] !== c || s[5] !== o ? (e = e => c.has((0, rV.e)(o, e.messageId)), s[4] = c, s[5] = o, s[6] = e) : e = s[6];
                let i = l.filter(e),
                    d = `chatgpt:${o}`;
                s[7] !== d ? (n = (0, u.Se)(d), s[7] = d, s[8] = n) : n = s[8];
                let h = n;
                s[9] !== h || s[10] !== o ? (r = e => (0, a.jsx)(o2.b, {
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
        var o4 = n("JVSG"),
            o5 = {
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
            o6 = n("RgRP");

        function o8() {
            let e, t, n, s, o, i, l, c, u, h, p, g, f, y, x, _, w = (0, r.c)(46),
                I = (0, v.$)(),
                S = (0, m.useContext)(X.a);
            w[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, w[0] = e) : e = w[0];
            let T = (0, d.x)(C.a, e),
                j = (0, d.z)(E.a),
                P = (0, v.cb)() ?? 0,
                {
                    conversationId: A
                } = (0, v.db)(),
                {
                    search: M,
                    state: R
                } = (0, v.Y)(),
                k = (0, d.x)(th.a, A ?? null),
                O = (0, d.x)(null == A || t3.e, k ?? A ?? ""),
                N = R?.archivedConversationPreview === !0;
            w[1] !== M ? (t = (0, oF.i)(M), w[1] = M, w[2] = t) : t = w[2];
            let B = t;
            w[3] !== N || w[4] !== B || w[5] !== A ? (n = null == A || (0, tG.e)(A) || B || N ? null : A, w[3] = N, w[4] = B, w[5] = A, w[6] = n) : n = w[6];
            let {
                data: z
            } = (0, d.x)(tn.chatGptConversationQueryById$, n);
            if (null == A) {
                let e;
                return w[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(v.l, {
                    to: "/",
                    replace: !0
                }), w[7] = e) : e = w[7], e
            }
            w[8] !== k || w[9] !== A ? (s = k ?? (0, tG.d)(A), w[8] = k, w[9] = A, w[10] = s) : s = w[10];
            let G = s,
                F = T.isCapable && !j && !O && null != z;
            w[11] !== I ? (o = e => (I((0, oF.c)(e)), !0), w[11] = I, w[12] = o) : o = w[12];
            let D = o;
            w[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(b.a, {}), l = (0, a.jsx)(q.a.Surface, {}), w[13] = i, w[14] = l) : (i = w[13], l = w[14]), w[15] !== N ? (c = null, w[15] = N, w[16] = c) : c = w[16], w[17] !== G || w[18] !== N || w[19] !== B ? (u = B || N ? null : (0, a.jsx)(e4.a, {
                conversationId: G
            }), w[17] = G, w[18] = N, w[19] = B, w[20] = u) : u = w[20];
            let L = S ?? (F ? D : null),
                H = `${G}:${B}`;
            w[21] === Symbol.for("react.memo_cache_sentinel") ? (h = void 0, w[21] = h) : h = w[21], w[22] !== G || w[23] !== N || w[24] !== B || w[25] !== H || w[26] !== P ? (p = (0, a.jsx)(o7, {
                conversationId: G,
                viewActivation: P,
                isArchivedPreview: N,
                isReadOnlyPreview: !1,
                banner: h,
                isTemporaryChat: B,
                sharedConversationId: null
            }, H), w[22] = G, w[23] = N, w[24] = B, w[25] = H, w[26] = P, w[27] = p) : p = w[27], w[28] !== p || w[29] !== L ? (g = (0, a.jsx)(X.a, {
                value: L,
                children: p
            }), w[28] = p, w[29] = L, w[30] = g) : g = w[30], w[31] !== g || w[32] !== c || w[33] !== u ? (f = (0, a.jsxs)(a.Fragment, {
                children: [i, l, c, u, g]
            }), w[31] = g, w[32] = c, w[33] = u, w[34] = f) : f = w[34];
            let W = f;
            w[35] !== W || w[36] !== G || w[37] !== N || w[38] !== B ? (y = B || N ? W : (0, a.jsx)(te, {
                conversationId: G,
                children: W
            }), w[35] = W, w[36] = G, w[37] = N, w[38] = B, w[39] = y) : y = w[39];
            let K = y;
            return w[40] !== W || w[41] !== K ? (x = K, w[40] = W, w[41] = K, w[42] = x) : x = w[42], w[43] !== G || w[44] !== x ? (_ = (0, a.jsx)(tv.a, {
                conversationId: G,
                children: x
            }), w[43] = G, w[44] = x, w[45] = _) : _ = w[45], _
        }

        function o7(e) {
            let t, n, l, b, C, q, X, ey, eb, ex, e_, eI, eS, eT, ej, eE, eP, eA, eM, eR, e4, e9, te, ts, to, ti, tl, tc, td, th, tg, tm, tv, ty, tx, tC, t_, tS, tT, tD, tL, tH, tW, tq, tK, tU, tV, tQ, tY, tJ, tX, t5, t8, t7, t9, ne, nt, nn, na, nr, ns, no, ni, nl, nc, nd, nu, nh, np, ng, nm, nf, nv, ny, nb, nx, nC, n_, nw, nS, nE, nA, nk, nO, nN, nG, nq, nK, nU, nV, nQ, nY, n$, nJ, nZ, nX, n0, n1, n2, n3, n4, n5, n6, n8, n7, n9 = (0, r.c)(607),
                {
                    conversationId: ae,
                    viewActivation: at,
                    isArchivedPreview: an,
                    inlinePreviewLayout: aa,
                    isInlinePreview: ar,
                    hideModelPicker: as,
                    showFilePicker: ao,
                    disableAutoFocus: ai,
                    hideInitialUserMessage: al,
                    transcriptPresentation: ac,
                    scrollOrigin: ad,
                    isReadOnlyPreview: ah,
                    onSubmitAccepted: ap,
                    isTemporaryChat: ag,
                    sharedConversationId: am,
                    sharedPostContinuation: af,
                    requiredSystemHints: av,
                    routePattern: ay,
                    composerLeadingContent: ab,
                    headerLeadingContent: ax,
                    hideHeaderTitle: aC,
                    banner: a_,
                    onRetryMissingConversation: aw,
                    sharedProjectConversation: aI,
                    workspace: aS
                } = e,
                aT = void 0 === at ? 0 : at,
                aj = void 0 !== an && an,
                aE = void 0 !== ar && ar,
                aP = void 0 === ao || ao,
                aA = void 0 !== aC && aC,
                aM = (0, d.y)(eg.a),
                aR = (0, m.useContext)(S.a),
                ak = (0, d.x)(au.f, aR),
                aO = (0, d.z)(null != ak && E.a);
            n9[0] !== aR || n9[1] !== ae ? (t = {
                auth: aR,
                conversationId: ae
            }, n9[0] = aR, n9[1] = ae, n9[2] = t) : t = n9[2];
            let aN = (0, d.x)(null != aR && !aR.isLoading && null === aR.authMethod && au.h, t),
                {
                    conversationId: aB
                } = (0, v.db)();
            n9[3] !== ae || n9[4] !== aE || n9[5] !== aB || n9[6] !== aM || n9[7] !== aS ? (n = () => (0, tG.e)(aE || null != aS || null == aM.get(tp.j, ae) ? ae : aB ?? ""), n9[3] = ae, n9[4] = aE, n9[5] = aB, n9[6] = aM, n9[7] = aS, n9[8] = n) : n = n9[8];
            let [az, aG] = (0, m.useState)(n);
            n9[9] !== az || n9[10] !== ae || n9[11] !== aM ? (l = () => az && !aM.get(on.b, ae) ? ae : null, n9[9] = az, n9[10] = ae, n9[11] = aM, n9[12] = l) : l = n9[12];
            let [aF] = (0, m.useState)(l), aD = null != am || null != ak && !(void 0 !== af && af && aO);
            n9[13] !== ae || n9[14] !== aj || n9[15] !== aE || n9[16] !== aD || n9[17] !== aM ? (b = () => {
                if (!aD && !aj && !aE) return (0, e1.b)(aM, ae)
            }, C = [ae, aj, aE, aD, aM], n9[13] = ae, n9[14] = aj, n9[15] = aE, n9[16] = aD, n9[17] = aM, n9[18] = b, n9[19] = C) : (b = n9[18], C = n9[19]), (0, m.useEffect)(b, C);
            let aL = (0, d.x)(tj.a, ae),
                aH = aD ? null : aL;
            n9[20] !== am ? (q = () => null == am ? null : (0, tG.b)(), n9[20] = am, n9[21] = q) : q = n9[21];
            let [aW] = (0, m.useState)(q), aq = aW ?? ae;
            n9[22] !== aq ? (X = (0, em.o)({
                routeKind: "chatgpt-thread",
                conversationId: aq
            }), n9[22] = aq, n9[23] = X) : X = n9[23];
            let aK = null != (0, d.x)(ee.c, X);
            n9[24] !== aq || n9[25] !== av || n9[26] !== aM ? (ey = () => {
                if (null != av && 0 !== av.length) return (0, so.b)(aM, aq, av)
            }, eb = [aq, av, aM], n9[24] = aq, n9[25] = av, n9[26] = aM, n9[27] = ey, n9[28] = eb) : (ey = n9[27], eb = n9[28]), (0, m.useEffect)(ey, eb);
            let aU = (0, m.useRef)(null),
                [aV, aQ] = (0, m.useState)(null),
                [aY, a$] = (0, m.useState)(null);
            n9[29] === Symbol.for("react.memo_cache_sentinel") ? (ex = () => () => a$(null), n9[29] = ex) : ex = n9[29], n9[30] !== aT ? (e_ = [aT], n9[30] = aT, n9[31] = e_) : e_ = n9[31], (0, m.useLayoutEffect)(ex, e_);
            let [aJ, aZ] = (0, m.useState)(null), aX = aY?.activation === aT ? aY.messageId : null, a0 = aJ === aT, a1 = (0, m.useRef)(null);
            n9[32] === Symbol.for("react.memo_cache_sentinel") ? (eI = () => {
                let e = new AbortController;
                return a1.current = e, () => e.abort()
            }, n9[32] = eI) : eI = n9[32], n9[33] !== aT ? (eS = [aT], n9[33] = aT, n9[34] = eS) : eS = n9[34], (0, m.useLayoutEffect)(eI, eS);
            let a2 = (0, f.a)(),
                a3 = (0, v.$)(),
                a4 = (0, eH.d)(),
                a5 = (0, d.x)(tp.j, ae);
            n9[35] !== aM ? (eT = e => {
                (0, e2.c)(aM, e)
            }, n9[35] = aM, n9[36] = eT) : eT = n9[36];
            let a6 = (0, m.useEffectEvent)(eT);
            n9[37] !== a5 || n9[38] !== a6 ? (ej = () => () => {
                null != a5 && a6(a5)
            }, n9[37] = a5, n9[38] = a6, n9[39] = ej) : ej = n9[39], n9[40] !== a5 ? (eE = [a5], n9[40] = a5, n9[41] = eE) : eE = n9[41], (0, m.useEffect)(ej, eE);
            let a8 = (0, d.x)(nW.a, ae),
                a7 = (0, d.x)(tp.N, ae),
                a9 = (0, d.x)(tn.chatGptConversationQueryById$, aD || ag && null != a7 ? null : a5);
            (0, d.x)(aD ? null : tr.a, a5);
            let re = (0, d.x)(!aN && t3.e, ae),
                rt = a5 ?? ae,
                rn = (0, d.x)(tp.C, ae),
                ra = (0, d.x)(tp.y, ae),
                rr = (0, d.x)(tp.T, ae),
                rs = (0, d.x)(tp.D, ae),
                ro = (0, d.x)(tp.O, ae),
                ri = (0, d.x)(tp.ab, ae),
                rl = (0, d.x)(tp.X, ae),
                rc = (0, d.x)(tp.Z, ae),
                rd = (0, d.x)(nz.a, ae);
            n9[42] !== a2 || n9[43] !== rd ? (eP = rd ?? a2.formatMessage(eC.a.newChat), n9[42] = a2, n9[43] = rd, n9[44] = eP) : eP = n9[44];
            let ru = eP,
                rh = (0, d.x)(tp.E, ae),
                rp = (0, d.x)(tp.eb, ae),
                rg = (0, d.x)(tp.fb, ae),
                rm = (0, d.x)(tn.n, am),
                rf = (0, m.useRef)(null),
                rv = rm.isSuccess && null != rm.data ? am : null;
            n9[45] !== aM ? (eA = e => {
                (0, ec.a)(aM, o.i, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, n9[45] = aM, n9[46] = eA) : eA = n9[46];
            let ry = (0, m.useEffectEvent)(eA);
            n9[47] !== rv || n9[48] !== ry ? (eM = () => {
                null != rv && rf.current !== rv && (rf.current = rv, ry(rv))
            }, n9[47] = rv, n9[48] = ry, n9[49] = eM) : eM = n9[49], n9[50] !== rv ? (eR = [rv], n9[50] = rv, n9[51] = eR) : eR = n9[51], (0, m.useEffect)(eM, eR);
            let rb = (0, d.x)(e6.q, ae),
                rx = (0, d.x)(e6.p, ae),
                rC = (0, d.x)(e6.n, ae),
                r_ = (0, d.x)(e6.r, ae),
                rw = (0, d.x)(e6.o, ae),
                rS = (0, d.x)(e6.j, ae),
                rT = (0, d.x)(tp.cb, ae),
                rj = (0, d.x)(e6.B, ae);
            n9[52] !== ri ? (e4 = (0, tp.Bb)(ri), n9[52] = ri, n9[53] = e4) : e4 = n9[53];
            let rE = e4,
                rP = (0, d.x)(tP, ae),
                rA = (0, d.z)(j.v),
                rM = (0, d.z)(j.s),
                rR = (0, d.z)(j.u),
                rk = (0, d.z)(j.n),
                rO = (0, d.z)(j.b),
                rN = (0, d.z)(j.o),
                rB = (0, d.z)(es.pagesEnabled$);
            n9[54] === Symbol.for("react.memo_cache_sentinel") ? (e9 = (0, F.a)(), n9[54] = e9) : e9 = n9[54];
            let rz = (0, eO.f)(e9);
            n9[55] === Symbol.for("react.memo_cache_sentinel") ? (te = (0, et.b)(), n9[55] = te) : te = n9[55];
            let rG = (0, eO.f)(te),
                rF = null != a7,
                rD = (0, d.z)(of.f),
                rL = aD ? rm : a9;
            az && null != rL.data && aG(!1);
            let rH = az && rF && null == rL.data,
                rW = rL.isLoading || !rH && rL.isError;
            n9[56] !== aV || n9[57] !== aq || n9[58] !== rW || n9[59] !== aD || n9[60] !== ag || n9[61] !== aM ? (ts = (e, t, n, a) => {
                !(e || aM.get(ep.a)) && ((0, e6.b)(aM, aq, t, void 0, n, a), aV?.focus(), aD || rW || (0, tt.f)(aM, aq, {
                    isTemporaryChat: ag
                }))
            }, n9[56] = aV, n9[57] = aq, n9[58] = rW, n9[59] = aD, n9[60] = ag, n9[61] = aM, n9[62] = ts) : ts = n9[62];
            let rq = ts;
            n9[63] !== ae || n9[64] !== ak ? (ti = null == (to = null == ak ? null : (0, oT.a)(ak, ae)) ? void 0 : (0, nH.a)(to), n9[63] = ae, n9[64] = ak, n9[65] = to, n9[66] = ti) : (to = n9[65], ti = n9[66]);
            let rK = ti,
                rU = to ?? rL.data,
                rV = rh ? rp : rU?.title,
                rQ = (0, d.z)(T.h),
                rY = (0, d.z)(T.g),
                r$ = "chatgpt-thread" === aM.value.routeKind && aM.value.workSideChat?.conversationId === ae,
                rJ = rU?.conversation_origin ?? ra ?? (null != aS || r$ ? "tpp" : null),
                rZ = "tpp" === rJ,
                rX = rZ && "denied" === rA.status && "go-plan" === rA.reason,
                r0 = (0, d.z)(eB.e),
                r1 = (0, v.Y)(),
                r2 = r1.state;
            (0, d.z)(ev.b);
            let r3 = (0, d.x)(eN.e, "3901104270") && r2?.openGoalPlan === !0,
                r4 = (0, eL.a)();
            n9[67] !== rJ ? (tl = (0, B.q)(rJ), n9[67] = rJ, n9[68] = tl) : tl = n9[68];
            let r5 = tl,
                r6 = (0, d.z)(t1.b),
                r8 = (0, d.z)(!!r5 && j.w),
                r7 = void 0 !== ah && ah || r8,
                r9 = null == r0 || r0.isFullWidth ? void 0 : r0.width ?? 420,
                se = !0 === (0, d.z)(r5 ? null : eY.d),
                st = (0, d.z)(r5 ? eh.b : eh.a),
                sn = !r5 && st,
                sa = !rG || rN && !r5,
                sr = !aD && rN && !r5,
                ss = sr && rk,
                si = aD && rU?.is_read_only === !0 || aI?.is_read_only === !0;
            n9[69] !== ae || n9[70] !== aD || n9[71] !== aM ? (tc = () => null, n9[69] = ae, n9[70] = aD, n9[71] = aM, n9[72] = tc) : tc = n9[72];
            let [sl] = (0, m.useState)(tc), sc = rU?.gizmo_id ?? rr ?? sl?.gizmoId ?? null;
            n9[73] !== sc || n9[74] !== aD ? (td = aD || null == sc || (0, tB.a)(sc) ? null : sc, n9[73] = sc, n9[74] = aD, n9[75] = td) : td = n9[75];
            let sd = td,
                su = (0, d.x)(e7, aq);
            n9[76] !== rU || n9[77] !== ae || n9[78] !== ru || n9[79] !== r1.pathname || n9[80] !== am || n9[81] !== ak ? (th = (0, tu.d)({
                conversation: rU,
                conversationId: ae,
                conversationTitle: ru,
                pathname: r1.pathname,
                sharedConversationId: am,
                sharedPost: ak
            }), n9[76] = rU, n9[77] = ae, n9[78] = ru, n9[79] = r1.pathname, n9[80] = am, n9[81] = ak, n9[82] = th) : th = n9[82];
            let sh = th,
                sp = !rR && null == rU && null == sl,
                sg = null != a5 && !re && !sp && (rR || rM),
                sm = null;
            aD || (sm = null != rU ? (0, ew.B)(rU) : (0, tB.a)(rr) ? rr : sl?.projectId ?? null);
            let sf = (0, d.x)(eZ.c, aD ? null : ae),
                sv = aD || r5 || null != sm || sf || null == su ? sd : su.id;
            n9[83] !== aq || n9[84] !== sv || n9[85] !== r1.pathname ? (tg = {
                gizmoId: sv,
                conversationId: aq,
                visitKey: r1.pathname
            }, n9[83] = aq, n9[84] = sv, n9[85] = r1.pathname, n9[86] = tg) : tg = n9[86];
            let sy = (0, d.x)(or.d, tg),
                {
                    data: sb
                } = (0, i.a)({
                    enabled: null != sm,
                    queryFn: () => {
                        if (null == sm) throw Error("Expected a ChatGPT project id");
                        return (0, N.c)(sm)
                    },
                    queryKey: (0, ew.E)(sm ?? ""),
                    staleTime: eD.b.ONE_MINUTE
                }),
                sx = null != sm && (sb?.gizmo.share_recipient !== "private" || (sb?.gizmo.sharing?.subjects?.length ?? 0) > 0);
            n9[87] !== rU?.context_scopes || n9[88] !== sb?.gizmo.gizmo_snorlax_type ? (tm = rU?.context_scopes?.includes("HEALTH") === !0 || sb?.gizmo.gizmo_snorlax_type === "potion", n9[87] = rU?.context_scopes, n9[88] = sb?.gizmo.gizmo_snorlax_type, n9[89] = tm) : tm = n9[89];
            let sC = tm,
                s_ = (0, oo.a)(rU?.context_scopes, {
                    projectType: sb?.gizmo.gizmo_snorlax_type,
                    projectId: sm,
                    lockedProjectId: rD?.projectId
                }),
                sw = re || sx || sC || s_;
            n9[90] !== sb?.gizmo.display.name || n9[91] !== sb?.gizmo.display.name.trim ? (tv = sb?.gizmo.display.name.trim() || null, n9[90] = sb?.gizmo.display.name, n9[91] = sb?.gizmo.display.name.trim, n9[92] = tv) : tv = n9[92];
            let sI = tv,
                sS = sb?.gizmo.display.theme,
                sT = sb?.gizmo.display.emoji;
            n9[93] !== sb ? (ty = "shared" === (0, tz.b)(sb) ? (0, a.jsx)(K.b, {
                icon: {
                    assets: {
                        16: o5,
                        20: o6.a
                    }
                }
            }) : void 0, n9[93] = sb, n9[94] = ty) : ty = n9[94], n9[95] !== sS || n9[96] !== sT || n9[97] !== ty ? (tx = (0, a.jsx)(ed.a, {
                className: "icon-leading",
                size: "leading",
                color: sS,
                icon: sT,
                sharedIcon: ty
            }), n9[95] = sS, n9[96] = sT, n9[97] = ty, n9[98] = tx) : tx = n9[98];
            let sj = tx,
                sE = (0, d.x)(tp.i, ae),
                sP = sE?.metadata ?? rU?.context_truncation_continuation,
                sA = aD || ag || null != aI || null == rQ || rU?.owner?.user_id == null || null == sm || rU.owner.user_id === (rY ? rQ.split("__")[0] : rQ) ? null : (0, nM.d)(sm, rU.conversation_id, rU.owner.user_id),
                sM = !aD && !aj && !r7,
                sR = (0, d.x)(sM ? o_.c : null, ae),
                sk = sR?.isReviewing === !0,
                sO = null == sR ? a7 : sR.conversation.mapping,
                sN = null == sR ? rn : sR.conversation.current_node,
                sB = null == a7 ? rU : null,
                sz = sO ?? sB?.mapping,
                sG = (0, eO.i)();
            n9[99] !== sz || n9[100] !== sG ? (tC = function(e, t) {
                if (null != e && Object.values(e).some(e => e?.message != null && (0, os.b)(e.message))) return () => (0, eO.d)(t, "2347981323").get("enabled", !1)
            }(sz, sG), n9[99] = sz, n9[100] = sG, n9[101] = tC) : tC = n9[101];
            let sF = tC,
                sD = (0, d.z)(null != sF ? eU.h : void 0),
                sL = (0, d.x)(null != sF && !aD && !aj && !sk && eq.a, ae),
                sH = (0, d.z)(sL ? eK.a : void 0);
            n9[102] === Symbol.for("react.memo_cache_sentinel") ? (t_ = (0, ta.a)(), n9[102] = t_) : t_ = n9[102];
            let sW = t_;
            n9[103] === Symbol.for("react.memo_cache_sentinel") ? (tS = new WeakMap, n9[103] = tS) : tS = n9[103];
            let sq = tS;
            n9[104] !== st || n9[105] !== sn || n9[106] !== sP || n9[107] !== rJ || n9[108] !== sN || n9[109] !== sO || n9[110] !== r6 || n9[111] !== sF || n9[112] !== sB || n9[113] !== aj || n9[114] !== aD || n9[115] !== rE || n9[116] !== r5 || n9[117] !== ro || n9[118] !== rC || n9[119] !== rw || n9[120] !== rx || n9[121] !== rb || n9[122] !== r_ || n9[123] !== sk || n9[124] !== aM.get || n9[125] !== sR?.isEntering || n9[126] !== a8 || n9[127] !== ri || n9[128] !== sH || n9[129] !== sD ? (tT = () => sW({
                conversation: sB,
                contextContinuation: sP,
                clinicalSearchEnabled: sn,
                clinicalCitationsEnabled: st,
                enableCloudBrowserActivity: r6,
                conversationOrigin: rJ,
                enableVoiceImageLoadingFix: sF,
                voiceImageSessionId: sD,
                voiceImageGenerationSpawnIds: sH,
                enableImageGenerationLoadingState: !aD && !aj && !sk && "error" !== ri,
                getRenderTelemetry: e => (0, o0.c)(aM.get, e),
                isWorkConversation: r5,
                isStreaming: !aD && !aj && !sk && rE,
                mode: "conversation",
                mcpResponseCache: sq,
                moderationDisclaimersByMessageId: ro,
                ...a8,
                pendingSubmission: null == rb || aD || sk || sR?.isEntering ? null : {
                    attachments: rC,
                    commentAttachments: rw,
                    prompt: rb,
                    ...rx,
                    selectedTextAttachments: r_
                },
                threadCurrentNode: sN,
                threadMapping: sO
            }), n9[104] = st, n9[105] = sn, n9[106] = sP, n9[107] = rJ, n9[108] = sN, n9[109] = sO, n9[110] = r6, n9[111] = sF, n9[112] = sB, n9[113] = aj, n9[114] = aD, n9[115] = rE, n9[116] = r5, n9[117] = ro, n9[118] = rC, n9[119] = rw, n9[120] = rx, n9[121] = rb, n9[122] = r_, n9[123] = sk, n9[124] = aM.get, n9[125] = sR?.isEntering, n9[126] = a8, n9[127] = ri, n9[128] = sH, n9[129] = sD, n9[130] = tT) : tT = n9[130], sR?.isEntering, n9[131] !== tT ? (tD = tT(), n9[131] = tT, n9[132] = tD) : tD = n9[132];
            let {
                isConversationEmpty: sK,
                renderedConversation: sU,
                renderedTurns: sV,
                showPendingLoadingMessage: sQ
            } = tD;
            n9[133] !== aE || n9[134] !== r5 || n9[135] !== sU || n9[136] !== aM ? (tL = () => {
                if (!aE && r5) return aM.set(o4.b, sU), () => {
                    aM.get(o4.b) === sU && aM.set(o4.b, null)
                }
            }, tH = [aE, r5, sU, aM], n9[133] = aE, n9[134] = r5, n9[135] = sU, n9[136] = aM, n9[137] = tL, n9[138] = tH) : (tL = n9[137], tH = n9[138]), (0, m.useEffect)(tL, tH);
            let sY = (0, d.x)(eX.g, ae),
                s$ = sQ && null == sY,
                sJ = !r5 && !aD && !aE && !aj,
                sZ = (0, d.x)(sn || aE || aD ? null : M.a, ae),
                sX = (sZ?.length ?? 0) > 0,
                s0 = (0, d.x)(sJ ? R.b : null, ae),
                s1 = JSON.stringify([ae, aT]),
                [s2, s3] = (0, m.useState)(null),
                s4 = function(e, t) {
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
                    let d = null == n ? [] : (0, h.b)(n, B.o),
                        u = null == e || e.visitKey !== c,
                        p = d.find(B.o)?.id ?? (u || i ? null : e.userMessageId),
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
                }(s2, {
                    completionAttemptId: s0,
                    allowAutoOpen: !(0, Z.a)("(width < 768px)"),
                    suppressAutoOpen: r3,
                    conversation: sJ && (rH || !rW) ? sU : null,
                    isTurnActive: rE,
                    hasGoal: sX,
                    isPendingUserTurn: rS && null != rb && !rE,
                    visitKey: s1
                });
            s4 !== s2 && s3(s4);
            let s5 = null == aS && !sn && !aE && !aD && (rZ || sJ) && !aj,
                s6 = s5 && sU?.mapping === a7 && sU?.current_node === rn,
                s8 = (0, d.x)(s6 ? tp.q : null, ae),
                s9 = sU?.mapping,
                oe = sU?.current_node;
            n9[139] !== s9 || n9[140] !== oe ? (tW = c()(() => {
                let e = null == s9 ? [] : (0, h.a)({
                    mapping: s9,
                    current_node: oe
                });
                return {
                    messages: e,
                    resources: (0, tF.e)(e)
                }
            }), n9[139] = s9, n9[140] = oe, n9[141] = tW) : tW = n9[141];
            let ot = tW;
            n9[142] !== sJ || !1 !== n9[143] || n9[144] !== rS || n9[145] !== s5 || n9[146] !== rE || n9[147] !== r5 || n9[148] !== rB || n9[149] !== rC || n9[150] !== ot || n9[151] !== sV || n9[152] !== s8 ? (tq = s5 ? c()(() => (0, tZ.a)({
                automationReferences: s8,
                includePages: rB,
                includeSources: r5 || !1,
                isTurnActive: rE || rS,
                ...ot(),
                pendingAttachments: rS ? rC : [],
                turns: sV
            })) : null, tK = sJ ? tq?.() : null, n9[142] = sJ, n9[143] = !1, n9[144] = rS, n9[145] = s5, n9[146] = rE, n9[147] = r5, n9[148] = rB, n9[149] = rC, n9[150] = ot, n9[151] = sV, n9[152] = s8, n9[153] = tq, n9[154] = tK) : (tq = n9[153], tK = n9[154]);
            let ol = tK,
                oc = sX || null != ol && (ol.outputs.length > 0 || ol.progressSteps.length > 0 || ol.automationIds.length > 0 || ol.subagents.length > 0 || !re && ol.browserScreenshots.length > 0),
                od = s5 && (!sJ || oc),
                ou = od && null == r0,
                oh = JSON.stringify([s1, null != r0]),
                op = sJ ? s4.isOpen : void 0,
                ov = od && !r0?.isFullWidth;
            n9[155] !== r9 || n9[156] !== oh || n9[157] !== op || n9[158] !== ov ? (tU = {
                contentShiftResetKey: oh,
                controlledIsOpen: op,
                isEnabled: ov,
                floatingPanelWidth: r9
            }, n9[155] = r9, n9[156] = oh, n9[157] = op, n9[158] = ov, n9[159] = tU) : tU = n9[159];
            let oy = (0, eG.a)(tU),
                ob = a5 ?? ae,
                ox = rZ && null == rg,
                ow = rs ?? rj,
                oS = rL.isLoading && !rF,
                oP = !oS && (null != rU || rF),
                oA = oP && (rH || !rW),
                oM = rL.isError && !rH;
            n9[160] !== rL.error || n9[161] !== aE ? (tV = aE || (0, eV.e)(rL.error) || !(rL.error instanceof eV.FetchError && [401, 403, 404].includes(rL.error.status)), n9[160] = rL.error, n9[161] = aE, n9[162] = tV) : tV = n9[162];
            let oR = tV;
            n9[163] !== ae || n9[164] !== aD || n9[165] !== a5 ? (tQ = null, aD || (tQ = a5 ?? ((0, tG.e)(ae) ? null : ae)), n9[163] = ae, n9[164] = aD, n9[165] = a5, n9[166] = tQ) : tQ = n9[166], n9[167] !== aX || n9[168] !== rU || n9[169] !== rJ || n9[170] !== a2 || n9[171] !== ag || n9[172] !== r5 || n9[173] !== rX || n9[174] !== a3 || n9[175] !== tQ || n9[176] !== ay || n9[177] !== aM || n9[178] !== aT ? (tY = (e, t) => {
                let n = void 0 !== t && t;
                if (null == tQ || null != aX || rX) return;
                let a = a1.current?.signal;
                null == a || a.aborted || (a$({
                    messageId: e,
                    activation: aT
                }), (0, tp.h)(aM, {
                    conversationId: tQ,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, e$.a)(aM, "opened"), a3(null == ay ? (0, oF.c)(t, {
                        isTemporaryChat: ag
                    }) : (0, v.C)(ay, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, e$.a)(aM, "failed"), a$(null), aM.get(U.f).danger(a2.formatMessage({
                        id: "chatgptConversations.branchFailed",
                        defaultMessage: "Failed to create chat"
                    }), {
                        errorAnalytics: {
                            toastId: "branch_conversation_failed",
                            operation: "branch_conversation",
                            errorCategory: "conversation",
                            conversationId: tQ ?? void 0,
                            retryable: !0,
                            userFacingError: {
                                surface: (0, tR.b)(null == rJ && null == rU ? null : r5),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, n9[167] = aX, n9[168] = rU, n9[169] = rJ, n9[170] = a2, n9[171] = ag, n9[172] = r5, n9[173] = rX, n9[174] = a3, n9[175] = tQ, n9[176] = ay, n9[177] = aM, n9[178] = aT, n9[179] = tY) : tY = n9[179];
            let ok = (0, eW.a)(tY);
            n9[180] !== rU || n9[181] !== ae || n9[182] !== rJ || n9[183] !== a2 || n9[184] !== se || n9[185] !== ag || n9[186] !== r5 || n9[187] !== aM || n9[188] !== a5 ? (tJ = async (e, t, n, a) => {
                if (!se) try {
                    await async function(e, t) {
                        let {
                            conversationId: n,
                            isTemporaryChat: a = !1,
                            messageId: r,
                            prompt: s,
                            renderFormat: o,
                            inlineSystemHints: i
                        } = t;
                        if (e.get(e6.j, n)) throw new tI.a("edit_message_busy", "The chat is busy.");
                        let l = e.get(tp.y, n);
                        if ("tpp" === l) throw new tI.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                        if (!e.get(tP, n)) throw new tI.a("edit_message_busy", "The chat is busy.");
                        let c = e.get(tw.b, {
                            conversationId: n,
                            messageId: r
                        });
                        if (null == c) throw new tI.a("edit_message_target_unavailable", "The user message could not be edited.");
                        let {
                            selectedModel: d
                        } = c, u = s.trim(), h = (0, tw.c)(c.message, e.get, i), g = (0, tE.c)({
                            message: c.message,
                            prompt: u,
                            renderFormat: o,
                            systemHints: h,
                            inlineSystemHints: i
                        }), m = (0, p.f)(g.message.metadata), f = g.message.content, v = "multimodal_text" === f.content_type && f.parts.some(e => "string" != typeof e);
                        if (0 === u.length && 0 === m.length && !v) throw new tI.a("edit_message_empty", "The edited message cannot be empty.");
                        if (e.get(eN.e, "3574573347")) {
                            let t = e.get(tw.a, n);
                            t?.messageId === r && t.prompt === s && tb()((0, tw.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(tw.a, n, {
                                messageId: r,
                                prompt: s,
                                isTemporaryChat: a,
                                inlineSystemHints: i
                            }), (0, tt.f)(e, n, {
                                isTemporaryChat: a
                            }))
                        }
                        let y = tA(e.get, n),
                            b = y.request.current,
                            x = () => tA(e.get, n).request.current === b && tb()(e.get(tw.b, {
                                conversationId: n,
                                messageId: r
                            }), c) && !(0, tp.Bb)(e.get(tp.ab, n));
                        e.set(e6.j, n, !0);
                        try {
                            if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(tj.a, n) && (await b.stop(), await b.closed), !x()) throw new tI.a("edit_message_target_unavailable", "The edited message or active response changed.");
                            await (0, tE.submitChatGPTCompletion)(e, {
                                isSubmissionCurrent: x,
                                isRequestCurrent: () => e.get(tp.C, n) === g.message.id,
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
                            e.set(e6.j, n, !1)
                        }
                    }(aM, {
                        conversationId: ae,
                        isTemporaryChat: ag,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, tR.c)(t);
                    throw aM.get(U.f).danger(a2.formatMessage({
                        id: "chatgptConversations.editMessageFailed",
                        defaultMessage: "Failed to edit message"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.editMessageFailed",
                            operation: "edit_message",
                            apiErrorCode: e.errorCode,
                            retryable: !0,
                            errorCategory: "conversation",
                            conversationId: a5 ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, tR.b)(null == rJ && null == rU ? null : r5),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, n9[180] = rU, n9[181] = ae, n9[182] = rJ, n9[183] = a2, n9[184] = se, n9[185] = ag, n9[186] = r5, n9[187] = aM, n9[188] = a5, n9[189] = tJ) : tJ = n9[189];
            let oO = (0, eW.a)(tJ);
            n9[190] !== aq || n9[191] !== rU || n9[192] !== ae || n9[193] !== rJ || n9[194] !== a2 || n9[195] !== se || n9[196] !== ag || n9[197] !== r5 || n9[198] !== rX || n9[199] !== a3 || n9[200] !== aw || n9[201] !== aM || n9[202] !== a5 ? (tX = async (e, t) => {
                if (!se && !rX) try {
                    let n = aM.get(rI.e, ae);
                    if (n?.startsNewWorkConversation || null == aM.get(tp.j, ae) || (0, e0.j)(aM.get(tp.V, ae)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, h.e)(n.prompt),
                            r = (0, O.i)(n.prompt.metadata, a, (0, p.e)(n.prompt.metadata), (0, g.x)(a)),
                            s = (0, G.a)(n.prompt, a, r),
                            o = aM.get(e6.u, aq),
                            i = null != s.renderFormat ? s.message : a,
                            l = o.length > 0 ? o : i,
                            c = o.length > 0 ? void 0 : s.renderFormat ?? "plain";
                        if (null != aw) return void await aw(l, c);
                        if (null == aM.get(tp.j, ae) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, eu.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${ae}`;
                            (0, L.E)(t, (t, n) => n ? t : e) || (0, e6._)(aM, ae, e), (0, L.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, h.i)((0, h.s)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, g.x)(a);
                            (0, H.n)(aM, "work"), await a3("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: o.length > 0 ? o : t,
                                    prefillPromptFormat: o.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (r5 && !ag && (0, D.cb)(aM, (0, Y.b)({
                                entrypoint: "home"
                            }))) return void await a3("/");
                        let d = (0, h.l)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, tN.g)(aM, d);
                        (0, e6.$)(aM, u, t.model);
                        let m = aM.get(tp.T, ae);
                        (0, H.n)(aM, r5 ? "work" : "chat"), await a3({
                            pathname: "/",
                            search: (0, oF.e)("", ag)
                        }, {
                            state: {
                                initialChatGptConversationId: u,
                                project: null,
                                chatGptProjectId: (0, tB.a)(m) ? m : null,
                                chatGptCustomGptId: (0, tB.a)(m) ? null : m,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: r5
                            }
                        });
                        return
                    }
                    await (0, rI.h)(aM, {
                        conversationId: ae,
                        isTemporaryChat: ag,
                        messageId: e,
                        retry: r5 && "error_retry" === t.source && null == t.model.thinkingEffort ? {
                            ...t,
                            model: aM.get(e6.v, ae)
                        } : t
                    })
                } catch {
                    aM.get(U.f).danger(a2.formatMessage({
                        id: "chatgptConversations.regenerate.failed",
                        defaultMessage: "Failed to regenerate response"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.regenerate.failed",
                            operation: "regenerate_response",
                            errorCategory: "conversation",
                            conversationId: a5 ?? void 0,
                            userFacingError: {
                                surface: (0, tR.b)(null == rJ && null == rU ? null : r5),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, n9[190] = aq, n9[191] = rU, n9[192] = ae, n9[193] = rJ, n9[194] = a2, n9[195] = se, n9[196] = ag, n9[197] = r5, n9[198] = rX, n9[199] = a3, n9[200] = aw, n9[201] = aM, n9[202] = a5, n9[203] = tX) : tX = n9[203];
            let oB = (0, eW.a)(tX);
            n9[204] !== rU || n9[205] !== ae || n9[206] !== ru || n9[207] !== a2 || n9[208] !== a0 || n9[209] !== ag || n9[210] !== a3 || n9[211] !== a4 || n9[212] !== sm || n9[213] !== aM || n9[214] !== a5 || n9[215] !== sl || n9[216] !== aT ? (t5 = () => {
                if (a0 || null == a5) return;
                let e = aM.get(j.u);
                if (!e && !aM.get(j.s) || !e && null == rU && null == sl) return;
                let t = a1.current?.signal;
                null == t || t.aborted || (aZ(aT), (e ? (0, e3.f)(aM, {
                    chatGptThreadId: ae,
                    conversationTitle: ru
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, w.a)(aM, e);
                    if ("created" === e.status) return null == n || t.aborted || aM.get(U.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, w.a)(aM, e)
                }) : (0, x.a)({
                    scope: aM,
                    projectId: sm ?? void 0,
                    prompt: `Continuing from ${(0,W.f)({conversationId:a5,title:ru?.trim()||"ChatGPT thread"})}`
                }).then(is)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? a4(n) : a3((0, oF.c)(n, {
                            isTemporaryChat: ag
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (aZ(null), aM.get(U.f).danger(a2.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, n9[204] = rU, n9[205] = ae, n9[206] = ru, n9[207] = a2, n9[208] = a0, n9[209] = ag, n9[210] = a3, n9[211] = a4, n9[212] = sm, n9[213] = aM, n9[214] = a5, n9[215] = sl, n9[216] = aT, n9[217] = t5) : t5 = n9[217];
            let oz = t5;
            n9[218] !== ae || n9[219] !== a3 || n9[220] !== aM || n9[221] !== aW || n9[222] !== am || n9[223] !== ak ? (t8 = () => {
                if (null != ak) {
                    if ((0, tG.e)(ae)) {
                        let e = (0, au.a)(aM, ak, ae);
                        null != e && (aM.get(E.a) ? aM.set(oE.a, e) : a3((0, oF.c)(e)))
                    }
                    return
                }
                let e = aM.query.getData(tn.n, am);
                null != e && null != am && null != aW && ((0, tp.ob)(aM, {
                    conversation: e,
                    conversationId: aW,
                    sharedConversationId: am
                }), aM.get(E.a) ? aM.set(oE.a, aW) : a3((0, oF.c)(aW)))
            }, n9[218] = ae, n9[219] = a3, n9[220] = aM, n9[221] = aW, n9[222] = am, n9[223] = ak, n9[224] = t8) : t8 = n9[224];
            let oG = (0, eW.a)(t8);
            n9[225] !== aS ? (t7 = aS?.mcpAppContext == null ? null : {
                hostId: ef.a,
                server: "codex_apps",
                connectorId: aS.mcpAppContext.id
            }, n9[225] = aS, n9[226] = t7) : t7 = n9[226];
            let oD = (0, d.x)(er.b, t7),
                oL = aS?.fullscreenContent != null ? "content" : "workspace",
                oH = (0, A.a)(aE ? "embedded" : oL),
                oW = !oD && (rH || !rL.isError) && !aj && !r7 && (null == ak || aR?.authMethod === "chatgpt" || aO) && (!aD || null != rU),
                oq = rO || r7 || si || ss || rX,
                oK = oq || sk || sR?.needsEntry === !0;
            if (sk) {
                let e;
                n9[227] !== a2 ? (e = a2.formatMessage(o_.d.readOnlyPlaceholder), n9[227] = a2, n9[228] = e) : e = n9[228], t9 = e
            } else !oq && sR?.needsEntry && (t9 = !1);
            let oV = oW && !oq && !aD && !rW && !se && !rE && !rS && !rT && !sy,
                oQ = !oW || aD || oK || rW ? null : aV;
            if (n9[229] !== sy || n9[230] !== aX || n9[231] !== st || n9[232] !== sn || n9[233] !== rU?.current_node || n9[234] !== ae || n9[235] !== sd || n9[236] !== r6 || n9[237] !== ow || n9[238] !== ok || n9[239] !== oO || n9[240] !== oB || n9[241] !== al || n9[242] !== aj || n9[243] !== oK || n9[244] !== rW || n9[245] !== sw || n9[246] !== r7 || n9[247] !== aD || n9[248] !== rS || n9[249] !== ag || n9[250] !== rZ || n9[251] !== rE || n9[252] !== r5 || n9[253] !== ss || n9[254] !== rX || n9[255] !== aH || n9[256] !== rC || n9[257] !== tQ || n9[258] !== sU || n9[259] !== sV || n9[260] !== sk || n9[261] !== rl || n9[262] !== aM.get || n9[263] !== rc || n9[264] !== to?.current_node || n9[265] !== aI || n9[266] !== oW || n9[267] !== s$ || n9[268] !== a8 || n9[269] !== rP) {
                let e;
                n9[271] !== st || n9[272] !== sn || n9[273] !== r6 || n9[274] !== r5 || n9[275] !== aH || n9[276] !== sU || n9[277] !== sV || n9[278] !== sk || n9[279] !== aM.get || n9[280] !== a8 ? (e = sk || null == aH || null == sU ? sV : (0, e8.a)({
                    ...sU,
                    current_node: aH.promptMessageId
                }, {
                    clinicalSearchEnabled: sn,
                    clinicalCitationsEnabled: st,
                    enableCloudBrowserActivity: r6,
                    ...a8,
                    isWorkConversation: r5,
                    getRenderTelemetry: e => (0, o0.c)(aM.get, e)
                }), n9[271] = st, n9[272] = sn, n9[273] = r6, n9[274] = r5, n9[275] = aH, n9[276] = sU, n9[277] = sV, n9[278] = sk, n9[279] = aM.get, n9[280] = a8, n9[281] = e) : e = n9[281];
                let t = (0, ta.c)({
                    paragen: aH,
                    hideInitialUserMessage: al,
                    browserConversationId: void 0,
                    conversationId: ae,
                    enableCloudBrowserActivity: r6,
                    errorMessage: ow,
                    branchingMessageId: aX,
                    isReadOnly: aj || r7 || aD || null != aI,
                    isTemporaryChat: ag,
                    isWorkConversation: rZ,
                    onRegenerateResponse: sy || aD || null != aI || aj || r7 || ss || rX || rE || rS ? void 0 : oB,
                    onEditUserMessage: sy || null == tQ || rZ || aj || r7 || ss || !rP || rS ? void 0 : oO,
                    onFork: null == tQ || ag || ss || rX || aj || r7 ? void 0 : ok,
                    pendingSubmissionAttachments: rC,
                    shareEnabled: null == sd && !ag && !aD && !aj && !r7 && !sw,
                    readAloudEnabled: !aD && !r7,
                    feedbackEnabled: !aD && !r7 && null == aI,
                    renderedTurns: e,
                    safetyReview: rl,
                    sharedConversationLastMessageId: to?.current_node ?? rc ?? (aD ? rU?.current_node : null),
                    showPendingLoadingMessage: s$,
                    showRequestUserInputStatus: oW && !oK && !rW
                });
                ne = sk ? (0, o_.a)(t) : t, n9[229] = sy, n9[230] = aX, n9[231] = st, n9[232] = sn, n9[233] = rU?.current_node, n9[234] = ae, n9[235] = sd, n9[236] = r6, n9[237] = ow, n9[238] = ok, n9[239] = oO, n9[240] = oB, n9[241] = al, n9[242] = aj, n9[243] = oK, n9[244] = rW, n9[245] = sw, n9[246] = r7, n9[247] = aD, n9[248] = rS, n9[249] = ag, n9[250] = rZ, n9[251] = rE, n9[252] = r5, n9[253] = ss, n9[254] = rX, n9[255] = aH, n9[256] = rC, n9[257] = tQ, n9[258] = sU, n9[259] = sV, n9[260] = sk, n9[261] = rl, n9[262] = aM.get, n9[263] = rc, n9[264] = to?.current_node, n9[265] = aI, n9[266] = oW, n9[267] = s$, n9[268] = a8, n9[269] = rP, n9[270] = ne
            } else ne = n9[270];
            let oY = ne;
            n9[282] !== a2 ? (nt = a2.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation"
            }), n9[282] = a2, n9[283] = nt) : nt = n9[283];
            let o$ = nt;
            n9[284] !== ae || n9[285] !== sd ? (nn = null == sd ? null : (0, a.jsx)(tO.ChatGptGizmoHeader, {
                conversationId: ae,
                gizmoId: sd
            }), n9[284] = ae, n9[285] = sd, n9[286] = nn) : nn = n9[286];
            let oJ = nn;
            n9[287] !== aj || n9[288] !== aD || n9[289] !== rZ ? (na = !rZ || aD || aj ? null : (0, a.jsx)($.a, {
                hostId: ef.a
            }), n9[287] = aj, n9[288] = aD, n9[289] = rZ, n9[290] = na) : na = n9[290];
            let oZ = na,
                oX = !aD && null == aI && !aj && !ag && !re,
                o2 = (0, d.x)(!oX || aE || r7 ? null : oi.a, ae);
            n9[291] !== ae || n9[292] !== aM || n9[293] !== oX ? (nr = oX ? () => {
                let e = aM.get(oi.b, ae);
                e?.title && og(aM, {
                    conversationId: ae,
                    courseId: e.course_id
                }, {
                    preserveFocus: !0
                })
            } : void 0, n9[291] = ae, n9[292] = aM, n9[293] = oX, n9[294] = nr) : nr = n9[294];
            let o8 = nr;
            n9[295] !== oV || n9[296] !== ae || n9[297] !== se || n9[298] !== sR ? (ns = null != sR ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: se,
                children: (0, a.jsx)(nL, {
                    conversationId: ae,
                    placement: "progress",
                    canStartSection: oV
                })
            }) : null, n9[295] = oV, n9[296] = ae, n9[297] = se, n9[298] = sR, n9[299] = ns) : ns = n9[299];
            let o7 = ns,
                io = !sf && !aj && !r7,
                ii = !ag && !aD && null != a5,
                il = !aA && io && null != rd;
            n9[300] !== ag ? (no = !ag && (0, V.a)({
                browser: !0
            }), n9[300] = ag, n9[301] = no) : no = n9[301];
            let ic = no,
                id = (0, d.x)(!!il && !ii && !aD && !r5 && !!oW && !oK && t3.d, ae),
                iu = il && (ii || ic || id);
            n9[302] !== ax || n9[303] !== r5 || n9[304] !== sI ? (ni = (0, V.a)({
                browser: !0
            }) && !r5 && null != sI && null == ax, n9[302] = ax, n9[303] = r5, n9[304] = sI, n9[305] = ni) : ni = n9[305];
            let ih = ni;
            n9[306] !== iu || n9[307] !== ih || n9[308] !== sj || n9[309] !== sm || n9[310] !== sI ? (nl = iu && null != sm && !ih ? {
                icon: sj,
                name: sI
            } : void 0, n9[306] = iu, n9[307] = ih, n9[308] = sj, n9[309] = sm, n9[310] = sI, n9[311] = nl) : nl = n9[311];
            let ip = nl;
            n9[312] !== ae || n9[313] !== sf || n9[314] !== iu || n9[315] !== rd || n9[316] !== o8 || n9[317] !== ip ? (nc = sf ? (0, a.jsx)(eJ.BusinessAgentConversationHeader, {
                conversationId: ae,
                fallback: null
            }) : (0, a.jsx)(nB, {
                onClick: o8,
                hasTitleMenu: iu,
                project: ip,
                title: rd
            }), n9[312] = ae, n9[313] = sf, n9[314] = iu, n9[315] = rd, n9[316] = o8, n9[317] = ip, n9[318] = nc) : nc = n9[318];
            let ig = nc,
                im = null != sR,
                iv = sf ? null : oJ;
            n9[319] !== ih || n9[320] !== sj || n9[321] !== sm || n9[322] !== sI || n9[323] !== ip ? (nd = null != sm && null == ip ? (0, a.jsx)(nR, {
                projectId: sm,
                name: sI,
                icon: sj,
                linkToProject: ih
            }) : null, n9[319] = ih, n9[320] = sj, n9[321] = sm, n9[322] = sI, n9[323] = ip, n9[324] = nd) : nd = n9[324], n9[325] !== aj || n9[326] !== ox || n9[327] !== aD ? (nu = !ox || aD || aj ? null : (0, a.jsx)(nj.c, {}), n9[325] = aj, n9[326] = ox, n9[327] = aD, n9[328] = nu) : nu = n9[328], n9[329] !== ax || n9[330] !== iv || n9[331] !== nd || n9[332] !== nu ? (nh = (0, a.jsxs)(a.Fragment, {
                children: [ax, iv, nd, nu]
            }), n9[329] = ax, n9[330] = iv, n9[331] = nd, n9[332] = nu, n9[333] = nh) : nh = n9[333];
            let iy = sf || !aA ? ig : null;
            n9[334] !== ag || n9[335] !== oZ || n9[336] !== im || n9[337] !== nh || n9[338] !== iy ? (np = (0, a.jsx)(nj.a, {
                hasSectionProgress: im,
                isTemporaryChat: ag,
                leading: nh,
                start: iy,
                startActions: oZ
            }), n9[334] = ag, n9[335] = oZ, n9[336] = im, n9[337] = nh, n9[338] = iy, n9[339] = np) : np = n9[339];
            let ib = np,
                ix = sV.flatMap(ir).flatMap(ia),
                iC = ix.flatMap(it);
            if (!aD && (rL.error instanceof eV.FetchError && 423 === rL.error.status || s_ && null == rD)) {
                let e;
                return n9[340] !== rL || n9[341] !== ae || n9[342] !== aM ? (e = (0, a.jsx)(om.a, {
                    onUnlocked: () => {
                        (0, of.g)(aM.get(of.f)?.projectId, [ae]), rL.refetch()
                    }
                }), n9[340] = rL, n9[341] = ae, n9[342] = aM, n9[343] = e) : e = n9[343], e
            }
            if (null != sA) {
                let e;
                return n9[344] !== sA ? (e = (0, a.jsx)(v.l, {
                    replace: !0,
                    to: sA
                }), n9[344] = sA, n9[345] = e) : e = n9[345], e
            }
            let i_ = e => io && ii ? (0, a.jsx)(nI, {
                onTitleClick: o8,
                showMenu: iu || null != e,
                triggerButton: e,
                conversationId: ae,
                title: ru,
                isHandoffPending: a0,
                isArchived: rU?.is_archived === !0,
                isChatConversation: null != rU && !r5,
                onHandoff: sg ? oz : void 0,
                onOpenMessage: async e => {
                    a1.current?.signal.aborted === !1 && aM.get(_.b)?.pathname === aM.value.pathname && await aU.current?.scrollToMessage(e)
                },
                projectId: sm,
                projectName: sI,
                serverConversationId: a5,
                conversationOrigin: rJ
            }) : null;
            n9[346] !== rU?.current_node || n9[347] !== ae || n9[348] !== sC || n9[349] !== s_ || n9[350] !== aD || n9[351] !== ag || n9[352] !== rE || n9[353] !== sm || n9[354] !== sV.length || n9[355] !== a5 || n9[356] !== aI || n9[357] !== re || n9[358] !== io || n9[359] !== rn ? (ng = !io || ag || aD || s_ ? null : (0, a.jsx)(tf, {
                conversationId: ae,
                projectId: sm,
                sharedProjectConversation: aI,
                isReady: (null != a5 || null != aI) && sV.length > 0 && (rn ?? rU?.current_node) != null,
                isRestricted: re || sC,
                isStreaming: rE
            }), n9[346] = rU?.current_node, n9[347] = ae, n9[348] = sC, n9[349] = s_, n9[350] = aD, n9[351] = ag, n9[352] = rE, n9[353] = sm, n9[354] = sV.length, n9[355] = a5, n9[356] = aI, n9[357] = re, n9[358] = io, n9[359] = rn, n9[360] = ng) : ng = n9[360];
            let iw = ng,
                iI = null != o2 ? ae : null;
            n9[361] !== rU || n9[362] !== rF || n9[363] !== aj || n9[364] !== oS || n9[365] !== aE || n9[366] !== r7 || n9[367] !== aD || n9[368] !== r5 ? (nm = r5 || aD || aE || r7 || aj || oS || null == rU && !rF ? null : (0, a.jsx)(P.a, {}), n9[361] = rU, n9[362] = rF, n9[363] = aj, n9[364] = oS, n9[365] = aE, n9[366] = r7, n9[367] = aD, n9[368] = r5, n9[369] = nm) : nm = n9[369], n9[370] !== rL.fetchStatus || n9[371] !== oM || n9[372] !== aE || n9[373] !== oA ? (nf = !1, n9[370] = rL.fetchStatus, n9[371] = oM, n9[372] = aE, n9[373] = oA, n9[374] = nf) : nf = n9[374], n9[375] !== rL.data || n9[376] !== rL.fetchStatus || n9[377] !== rU || n9[378] !== ae || n9[379] !== oM || n9[380] !== rF || n9[381] !== sK || n9[382] !== oS || !1 !== n9[383] || n9[384] !== sV.length ? (nv = null, n9[375] = rL.data, n9[376] = rL.fetchStatus, n9[377] = rU, n9[378] = ae, n9[379] = oM, n9[380] = rF, n9[381] = sK, n9[382] = oS, n9[383] = !1, n9[384] = sV.length, n9[385] = nv) : nv = n9[385];
            let iS = !aD && !r7 && (0, et.c)() ? (0, a.jsx)(en.c, {
                callIds: iC,
                hostId: ef.a,
                conversationId: (0, u.Se)(`chatgpt:${ae}`)
            }) : null;
            n9[386] !== ru || n9[387] !== aE || n9[388] !== ak || n9[389] !== aS?.documentTitle ? (ny = aE ? null : (0, a.jsx)(Q.a, {
                title: null == ak ? aS?.documentTitle ?? ru : null
            }), n9[386] = ru, n9[387] = aE, n9[388] = ak, n9[389] = aS?.documentTitle, n9[390] = ny) : ny = n9[390], n9[391] !== ae || n9[392] !== aE || n9[393] !== se || n9[394] !== aD || n9[395] !== ag || n9[396] !== r5 || n9[397] !== oY ? (nb = aE || r5 ? null : (0, a.jsx)(t2.a, {
                conversationId: ae,
                canCopy: !se,
                paragenEnabled: !aD,
                turns: oY,
                loadHistory: !ag && !aD
            }), n9[391] = ae, n9[392] = aE, n9[393] = se, n9[394] = aD, n9[395] = ag, n9[396] = r5, n9[397] = oY, n9[398] = nb) : nb = n9[398];
            let iT = null != rU || rF;
            n9[399] !== oM || n9[400] !== r5 || n9[401] !== iT ? (nx = (0, a.jsx)(eQ.a, {
                isWorkConversation: r5,
                hasConversationContent: iT,
                hasLoadError: oM
            }), n9[399] = oM, n9[400] = r5, n9[401] = iT, n9[402] = nx) : nx = n9[402], n9[403] !== ae || n9[404] !== oM || n9[405] !== oP || n9[406] !== aE || n9[407] !== r1.pathname || n9[408] !== aM || n9[409] !== am ? (nC = aE || !oP || oM ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(oI, {
                    sharedConversationId: am
                }), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(el.a, {
                        onCommit: () => eo.b.contentCommitted(aM, ae, am, r1.pathname),
                        onPaint: () => eo.b.pagePainted(aM, ae, am)
                    }, am ?? ae)
                })]
            }), n9[403] = ae, n9[404] = oM, n9[405] = oP, n9[406] = aE, n9[407] = r1.pathname, n9[408] = aM, n9[409] = am, n9[410] = nC) : nC = n9[410];
            let ij = aE || null != aS ? null : (0, a.jsxs)(t4.a, {
                    chatIcon: null == sm ? void 0 : sj,
                    header: ib,
                    title: rd,
                    fullScreenTitle: ig,
                    isArchivedPreview: aj,
                    children: [null == o7 ? null : (0, a.jsx)(nP, {
                        children: o7
                    }), aR?.authMethod === "chatgpt" ? (0, a.jsx)(J.v, {
                        productExperience: r5 ? "work" : "chat"
                    }) : null, aD ? (0, a.jsx)(oj.a, {
                        children: null == sh ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(oN, {
                                data: sh
                            })
                        })
                    }) : null, oX ? (0, a.jsx)(t6, {
                        conversationId: ae,
                        scheduledAutomationId: r3 ? r2?.sidebarAutomationId : void 0
                    }, ae) : null, ag && !aD && !aj && null == sc && null == sv && null == sm && !sC && null != sU && (0, h.a)(sU).some(ie) ? (0, a.jsx)(I.a.HeaderAction, {
                        actionId: "chatgpt-conversation-save",
                        align: "end",
                        order: 100,
                        children: (0, a.jsx)(oU, {
                            conversationId: ae
                        })
                    }) : null, io && (0, a.jsx)(nj.b, {
                        hasTitleMenu: iu,
                        menu: !aA && (i_() ?? (iu && (0, a.jsx)(nT, {
                            title: ru,
                            includePlugins: ic,
                            lockdownConversationId: id ? ae : null
                        }))),
                        children: iw
                    })]
                }),
                iE = tk.a,
                iP = !aP || !oW || oH.isHidden || oK || sy || se || rW || aj || r7 || si || ss || rX || rT || rS,
                iA = sm,
                iM = null != sv,
                iR = ez.c;
            n9[411] !== aE || n9[412] !== r4 || n9[413] !== r5 || n9[414] !== o7 || n9[415] !== aS ? (n_ = aE || null != aS ? o7 : r4 && (0, eF.a)() && !r5 && (0, a.jsx)("div", {
                className: "h-px",
                "aria-hidden": !0
            }), n9[411] = aE, n9[412] = r4, n9[413] = r5, n9[414] = o7, n9[415] = aS, n9[416] = n_) : n_ = n9[416];
            let ik = null == sR ? "flex h-full min-h-0 flex-col" : "h-full",
                iO = rV ?? ru,
                iN = !se,
                iB = !aK && !aE && !aD && !oD && !oH.isHidden,
                iz = re || sa,
                iG = r0?.isFullWidth === !0,
                iF = null == r0 ? oy.contentShift : void 0,
                iD = sR?.selectedIndex;
            n9[417] !== oV || n9[418] !== ae || n9[419] !== sR ? (nw = null != sR ? (0, a.jsx)(nL, {
                conversationId: ae,
                placement: "composer",
                canStartSection: oV
            }) : void 0, n9[417] = oV, n9[418] = ae, n9[419] = sR, n9[420] = nw) : nw = n9[420], n9[421] !== ae || n9[422] !== sR ? (nS = null != sR ? (0, a.jsx)(nD, {
                conversationId: ae
            }) : void 0, n9[421] = ae, n9[422] = sR, n9[423] = nS) : nS = n9[423];
            let iL = !r5,
                iH = sk ? null : ow;
            n9[424] !== rL || n9[425] !== oR ? (nE = oR ? () => {
                rL.refetch({
                    cancelRefetch: !1
                })
            } : void 0, n9[424] = rL, n9[425] = oR, n9[426] = nE) : nE = n9[426];
            let iW = sV.length > 0,
                iq = t9,
                iK = !sC && (null == sm || null != sb),
                iU = null == sR && !r$,
                iV = rL.isFetching,
                iQ = rH && !aE && !aD && !r5 && null == sc,
                iY = !sk && rE;
            n9[427] !== rU?.is_archived || n9[428] !== ae || n9[429] !== aj || n9[430] !== aE || n9[431] !== aD || n9[432] !== ag || n9[433] !== rE || n9[434] !== r5 ? (nA = aE || !r5 || aD || aj || rU?.is_archived === !0 || ag ? null : (0, a.jsx)(m.Suspense, {
                fallback: null,
                children: (0, a.jsx)(nF, {
                    conversationId: ae,
                    isTurnActive: rE
                })
            }), n9[427] = rU?.is_archived, n9[428] = ae, n9[429] = aj, n9[430] = aE, n9[431] = aD, n9[432] = ag, n9[433] = rE, n9[434] = r5, n9[435] = nA) : nA = n9[435], n9[436] !== ae || n9[437] !== aj || n9[438] !== a5 ? (nk = aj ? (0, a.jsx)(ek, {
                conversationId: a5 ?? ae,
                kind: "chatgpt"
            }, a5 ?? ae) : void 0, n9[436] = ae, n9[437] = aj, n9[438] = a5, n9[439] = nk) : nk = n9[439];
            let i$ = !sk && s$;
            n9[440] !== sv ? (nO = null != sv ? (0, a.jsx)(oa.GptPluginMigrationBanner, {
                gizmoId: sv
            }) : null, n9[440] = sv, n9[441] = nO) : nO = n9[441], n9[442] !== sg || n9[443] !== oz || n9[444] !== a0 || n9[445] !== ag || n9[446] !== sr || n9[447] !== rk ? (nN = sr && !ag ? (0, a.jsx)(t0, {
                canConvert: sg,
                isChatInstantAvailable: !rk,
                isConverting: a0,
                onConvert: oz
            }) : null, n9[442] = sg, n9[443] = oz, n9[444] = a0, n9[445] = ag, n9[446] = sr, n9[447] = rk, n9[448] = nN) : nN = n9[448], n9[449] !== rq || n9[450] !== r7 ? (nG = rq.bind(null, r7), n9[449] = rq, n9[450] = r7, n9[451] = nG) : nG = n9[451], n9[452] !== oG || n9[453] !== aD || n9[454] !== ap ? (nq = e => {
                ap?.(e), aD && oG()
            }, n9[452] = oG, n9[453] = aD, n9[454] = ap, n9[455] = nq) : nq = n9[455], n9[456] !== rL.isFetching || n9[457] !== sy || n9[458] !== aq || n9[459] !== sv || n9[460] !== ab || n9[461] !== ae || n9[462] !== o$ || n9[463] !== aU || n9[464] !== ai || n9[465] !== oM || n9[466] !== as || n9[467] !== aF || n9[468] !== oK || n9[469] !== sK || n9[470] !== rW || n9[471] !== oS || n9[472] !== aK || n9[473] !== aE || n9[474] !== aD || n9[475] !== ag || n9[476] !== rZ || n9[477] !== t9 || n9[478] !== av || n9[479] !== ad || n9[480] !== rt || n9[481] !== am || n9[482] !== rK || n9[483] !== oW || n9[484] !== aP || n9[485] !== iN || n9[486] !== iB || n9[487] !== iz || n9[488] !== iG || n9[489] !== iF || n9[490] !== iD || n9[491] !== nw || n9[492] !== nS || n9[493] !== iL || n9[494] !== iH || n9[495] !== nE || n9[496] !== iW || n9[497] !== iK || n9[498] !== iU || n9[499] !== iQ || n9[500] !== iY || n9[501] !== nA || n9[502] !== nk || n9[503] !== i$ || n9[504] !== nO || n9[505] !== nN || n9[506] !== nG || n9[507] !== nq || n9[508] !== iO || n9[509] !== ac || n9[510] !== oY || n9[511] !== aS ? (nK = (0, a.jsx)(s7, {
                ref: aU,
                printTitle: iO,
                trackShownImpressions: iN,
                trackReadState: iB,
                workspace: aS,
                shouldBlockMcpApps: iz,
                isCoveredByFloatingPanel: iG,
                isFormOnly: aK,
                isInlinePreview: aE,
                hideModelPicker: as,
                showFilePicker: aP,
                disableAutoFocus: ai,
                transcriptPresentation: ac,
                scrollOrigin: ad,
                composerRef: aQ,
                contentX: iF,
                conversationId: ae,
                composerConversationId: aq,
                sectionIndex: iD,
                composerLeadingContent: ab,
                aboveComposerContent: nw,
                historyLoadingContent: nS,
                requiredSystemHints: av,
                isChatConversation: iL,
                customGptId: sv,
                conversationLoadingLabel: o$,
                entries: oY,
                errorMessage: iH,
                hasLoadError: oM,
                onRetryLoad: nE,
                hasRenderableTurns: iW,
                isComposerDisabled: oK,
                readOnlyPlaceholder: iq,
                moreDetailsEnabled: iK,
                isConversationEmpty: sK,
                showEmptyState: iU,
                isConversationFetching: iV,
                isConversationLoading: oS,
                isSharedConversation: aD,
                isSubmitDisabled: rW,
                retainLiveModelPicker: iQ,
                isTemporaryChat: ag,
                isTurnActive: iY,
                isWorkConversation: rZ,
                onboardingPrelude: nA,
                scrollStateConversationId: rt,
                initialResponsePlacementKey: aF,
                sharedConversationId: am,
                sharedPostRegulatedConnectorKind: rK,
                showComposer: oW,
                archivedPreviewFooter: nk,
                showPendingLoadingMessage: i$,
                gptPluginMigrationBanner: nO,
                awaitingGptContinuation: sy,
                workOnlyConversionBanner: nN,
                onAddSelectedText: nG,
                onSubmitAccepted: nq
            }), n9[456] = rL.isFetching, n9[457] = sy, n9[458] = aq, n9[459] = sv, n9[460] = ab, n9[461] = ae, n9[462] = o$, n9[463] = aU, n9[464] = ai, n9[465] = oM, n9[466] = as, n9[467] = aF, n9[468] = oK, n9[469] = sK, n9[470] = rW, n9[471] = oS, n9[472] = aK, n9[473] = aE, n9[474] = aD, n9[475] = ag, n9[476] = rZ, n9[477] = t9, n9[478] = av, n9[479] = ad, n9[480] = rt, n9[481] = am, n9[482] = rK, n9[483] = oW, n9[484] = aP, n9[485] = iN, n9[486] = iB, n9[487] = iz, n9[488] = iG, n9[489] = iF, n9[490] = iD, n9[491] = nw, n9[492] = nS, n9[493] = iL, n9[494] = iH, n9[495] = nE, n9[496] = iW, n9[497] = iK, n9[498] = iU, n9[499] = iQ, n9[500] = iY, n9[501] = nA, n9[502] = nk, n9[503] = i$, n9[504] = nO, n9[505] = nN, n9[506] = nG, n9[507] = nq, n9[508] = iO, n9[509] = ac, n9[510] = oY, n9[511] = aS, n9[512] = nK) : nK = n9[512], n9[513] !== s4 || n9[514] !== tq || n9[515] !== sJ || n9[516] !== s3 || n9[517] !== re || n9[518] !== ou || n9[519] !== oQ || n9[520] !== ob || n9[521] !== oy ? (nU = ou && null != tq ? (0, a.jsx)(t$, {
                composerActions: oQ,
                conversationId: ob,
                controlledState: sJ ? {
                    isOpen: s4.isOpen,
                    shouldPreventAutoFocus: s4.shouldPreventAutoFocus,
                    onOpenChange: e => {
                        s3({
                            ...s4,
                            isOpen: e,
                            shouldPreventAutoFocus: !e && s4.shouldPreventAutoFocus
                        })
                    }
                } : void 0,
                readData: tq,
                display: oy,
                shouldBlockExternalEgress: re
            }) : null, n9[513] = s4, n9[514] = tq, n9[515] = sJ, n9[516] = s3, n9[517] = re, n9[518] = ou, n9[519] = oQ, n9[520] = ob, n9[521] = oy, n9[522] = nU) : nU = n9[522], n9[523] === Symbol.for("react.memo_cache_sentinel") ? (nV = (0, a.jsx)(tM.a, {}), n9[523] = nV) : nV = n9[523], n9[524] !== aE ? (nQ = null, n9[524] = aE, n9[525] = nQ) : nQ = n9[525], n9[526] !== se || n9[527] !== nK || n9[528] !== nU || n9[529] !== nQ || n9[530] !== ik ? (nY = (0, a.jsxs)("div", {
                className: ik,
                inert: se,
                children: [nK, nU, nV, nQ]
            }), n9[526] = se, n9[527] = nK, n9[528] = nU, n9[529] = nQ, n9[530] = ik, n9[531] = nY) : nY = n9[531];
            let iJ = !r7 && (0, et.c)() ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(o3, {
                    conversationId: ae,
                    shouldBlockExternalEgress: re || sa,
                    widgets: ix.filter(o9)
                }), aD ? null : (0, a.jsx)(ea.a, {
                    blockedWidgetSource: rz ? void 0 : "descriptor",
                    transcriptMcpAppIds: (0, o1.c)(ae, ix, rz),
                    shouldBlockExternalEgress: re || sa
                })]
            }) : null;
            n9[532] !== iR || n9[533] !== a_ || n9[534] !== r9 || n9[535] !== nY || n9[536] !== iJ || n9[537] !== n_ ? (n$ = (0, a.jsxs)(iR, {
                floatingPanelWidth: r9,
                header: n_,
                banner: a_,
                children: [nY, iJ]
            }), n9[532] = iR, n9[533] = a_, n9[534] = r9, n9[535] = nY, n9[536] = iJ, n9[537] = n_, n9[538] = n$) : n$ = n9[538], n9[539] !== iE || n9[540] !== aq || n9[541] !== rJ || n9[542] !== ag || n9[543] !== sm || n9[544] !== n$ || n9[545] !== iP || n9[546] !== iM ? (nJ = (0, a.jsx)(iE, {
                conversationId: aq,
                conversationOrigin: rJ,
                disabled: iP,
                isTemporaryChat: ag,
                projectId: iA,
                requiresGizmoId: iM,
                children: n$
            }), n9[539] = iE, n9[540] = aq, n9[541] = rJ, n9[542] = ag, n9[543] = sm, n9[544] = n$, n9[545] = iP, n9[546] = iM, n9[547] = nJ) : nJ = n9[547], n9[548] !== oC || n9[549] !== nJ || n9[550] !== iI || n9[551] !== nm || n9[552] !== nf || n9[553] !== nv || n9[554] !== iS || n9[555] !== ny || n9[556] !== nb || n9[557] !== nx || n9[558] !== nC || n9[559] !== ij ? (nZ = (0, a.jsxs)(oC, {
                courseChatId: iI,
                children: [nm, nf, nv, iS, ny, nb, nx, nC, ij, null, nJ]
            }), n9[548] = oC, n9[549] = nJ, n9[550] = iI, n9[551] = nm, n9[552] = nf, n9[553] = nv, n9[554] = iS, n9[555] = ny, n9[556] = nb, n9[557] = nx, n9[558] = nC, n9[559] = ij, n9[560] = nZ) : nZ = n9[560];
            let iZ = nZ,
                iX = !aE && !rZ,
                i0 = aD || !rL.isFetchedAfterMount || rL.isFetching || rH ? null : rL.error;
            n9[561] !== ae || n9[562] !== aE || n9[563] !== aM || n9[564] !== am ? (nX = e => {
                aE || eo.b.loadFailed(aM, ae, am, e)
            }, n9[561] = ae, n9[562] = aE, n9[563] = aM, n9[564] = am, n9[565] = nX) : nX = n9[565];
            let i1 = oM ? rL.error : null,
                i2 = null == rJ && null == rU ? null : r5,
                i3 = !r5 && !oS;
            n9[566] !== aV || n9[567] !== aq || n9[568] !== am ? (n0 = {
                conversationId: aq,
                composer: aV,
                sharedConversationId: am
            }, n9[566] = aV, n9[567] = aq, n9[568] = am, n9[569] = n0) : n0 = n9[569], n9[570] !== ae || n9[571] !== aE || n9[572] !== a5 || n9[573] !== am ? (n1 = aE ? null : (0, eo.a)(a5 ?? ae, am), n9[570] = ae, n9[571] = aE, n9[572] = a5, n9[573] = am, n9[574] = n1) : n1 = n9[574];
            let i4 = !oA;
            return n9[575] !== i4 ? (n2 = (0, a.jsx)(s.b, {
                name: "conversation data",
                active: i4
            }), n9[575] = i4, n9[576] = n2) : n2 = n9[576], n9[577] !== se ? (n3 = (0, a.jsx)(s.b, {
                name: "workspace policy",
                active: se
            }), n9[577] = se, n9[578] = n3) : n3 = n9[578], n9[579] !== aa || n9[580] !== iZ || n9[581] !== ae || n9[582] !== iw || !1 !== n9[583] || n9[584] !== r5 || n9[585] !== i_ ? (n4 = aa ? (0, a.jsx)(aa, {
                buttons: iw,
                conversationId: ae,
                isWorkConversation: r5 || !1,
                renderMenu: i_,
                children: iZ
            }) : iZ, n9[579] = aa, n9[580] = iZ, n9[581] = ae, n9[582] = iw, n9[583] = !1, n9[584] = r5, n9[585] = i_, n9[586] = n4) : n4 = n9[586], n9[587] !== n1 || n9[588] !== n2 || n9[589] !== n3 || n9[590] !== n4 ? (n5 = (0, a.jsxs)(ei.h, {
                destinationKey: n1,
                children: [n2, n3, n4]
            }), n9[587] = n1, n9[588] = n2, n9[589] = n3, n9[590] = n4, n9[591] = n5) : n5 = n9[591], n9[592] !== n0 || n9[593] !== n5 ? (n6 = (0, a.jsx)(e5.a, {
                value: n0,
                children: n5
            }), n9[592] = n0, n9[593] = n5, n9[594] = n6) : n6 = n9[594], n9[595] !== i3 || n9[596] !== n6 ? (n8 = (0, a.jsx)(y.a, {
                enabled: i3,
                children: n6
            }), n9[595] = i3, n9[596] = n6, n9[597] = n8) : n8 = n9[597], n9[598] !== oR || n9[599] !== a5 || n9[600] !== iX || n9[601] !== i0 || n9[602] !== nX || n9[603] !== i1 || n9[604] !== i2 || n9[605] !== n8 ? (n7 = (0, a.jsx)(k.a, {
                showChatFallback: iX,
                conversationId: a5,
                error: i0,
                onInlineLoadError: nX,
                loadError: i1,
                canRetry: oR,
                isWorkConversation: i2,
                children: n8
            }), n9[598] = oR, n9[599] = a5, n9[600] = iX, n9[601] = i0, n9[602] = nX, n9[603] = i1, n9[604] = i2, n9[605] = n8, n9[606] = n7) : n7 = n9[606], n7
        }

        function o9(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function ie(e) {
            return "user" === e.author.role
        }

        function it(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function ia(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function ir(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function is(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }
    }),
    Ppno: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
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
                    D = (0, i.i)();
                A[0] !== G || A[1] !== D ? (t = G && (0, i.d)(D, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), A[0] = G, A[1] = D, A[2] = t) : t = A[2];
                let L = t,
                    H = (0, o.useRef)(O),
                    W = (0, s.x)(null == N ? 0 : u.b, N ?? ""),
                    q = (0, o.useRef)(W),
                    K = (0, o.useRef)(F),
                    U = (0, o.useRef)(null),
                    V = (0, o.useRef)(null),
                    Q = (0, o.useRef)(null),
                    Y = (0, d.b)();
                A[3] !== Y ? (n = () => new c.a(Y), A[3] = Y, A[4] = n) : n = A[4];
                let [$] = (0, o.useState)(n), {
                    clear: J,
                    consumeGrowth: Z,
                    getHeightPx: X,
                    ensureScrollRoomForAnchor: ee,
                    place: et,
                    prepareThreadEndContent: en
                } = $, {
                    addScrollListener: ea,
                    getScrollElement: er,
                    responseSpacerController: es
                } = Y;
                A[5] !== er || A[6] !== O || A[7] !== et || A[8] !== z || A[9] !== $ || A[10] !== Y || A[11] !== L ? (g = e => {
                    if (!z?.(e => {
                            let t = er();
                            null != t && et(p(t, e) ?? void 0)
                        })) {
                        if (null == e && null != O && !L) {
                            Y.holdViewport(), U.current = {
                                previousKey: O,
                                signal: $.getPendingPlacementSignal()
                            };
                            return
                        }
                        et(e)
                    }
                }, A[5] = er, A[6] = O, A[7] = et, A[8] = z, A[9] = $, A[10] = Y, A[11] = L, A[12] = g) : g = A[12];
                let eo = (0, h.a)(g);
                A[13] !== J || A[14] !== Y ? (m = e => {
                    J(), Y.scrollToBottom(e)
                }, A[13] = J, A[14] = Y, A[15] = m) : m = A[15];
                let ei = (0, h.a)(m);
                A[16] !== ei || A[17] !== W ? (f = () => {
                    q.current !== W && (q.current = W, ei())
                }, v = [W, ei], A[16] = ei, A[17] = W, A[18] = f, A[19] = v) : (f = A[18], v = A[19]), (0, o.useLayoutEffect)(f, v), A[20] !== Z || A[21] !== X || A[22] !== en || A[23] !== $.height || A[24] !== $.holdViewport || A[25] !== es || A[26] !== ei ? (y = () => es.register({
                    consumeGrowth: Z,
                    getHeightPx: X,
                    holdViewport: $.holdViewport,
                    prepareThreadEndContent: en,
                    scrollToBottom: ei
                }, $.height).dispose, A[20] = Z, A[21] = X, A[22] = en, A[23] = $.height, A[24] = $.holdViewport, A[25] = es, A[26] = ei, A[27] = y) : y = A[27], A[28] !== Z || A[29] !== X || A[30] !== en || A[31] !== $ || A[32] !== es || A[33] !== ei ? (b = [Z, X, en, $, es, ei], A[28] = Z, A[29] = X, A[30] = en, A[31] = $, A[32] = es, A[33] = ei, A[34] = b) : b = A[34], (0, o.useInsertionEffect)(y, b), A[35] !== $ ? (x = (e, t) => {
                    let n = U.current;
                    null != n && n.previousKey !== e && (U.current = null, n.signal.aborted || $.revealSubmittedTurn(t)), V.current = {
                        turnKey: e,
                        element: t
                    }, Q.current?.(e, t)
                }, A[35] = $, A[36] = x) : x = A[36];
                let el = (0, h.a)(x);
                A[37] === Symbol.for("react.memo_cache_sentinel") ? (C = e => {
                    Q.current = e;
                    let t = V.current;
                    return null != t && e(t.turnKey, t.element), () => {
                        Q.current = null
                    }
                }, A[37] = C) : C = A[37];
                let ec = (0, h.a)(C);
                A[38] !== er || A[39] !== O || A[40] !== et || A[41] !== L ? (_ = () => {
                    let e = er();
                    if (null != e && 0 !== e.clientHeight)
                        if (L && null != O) {
                            let t = p(e, O);
                            if (null == t) return;
                            et(t)
                        } else et()
                }, A[38] = er, A[39] = O, A[40] = et, A[41] = L, A[42] = _) : _ = A[42];
                let ed = (0, o.useEffectEvent)(_);
                return A[43] !== J || A[44] !== Z || A[45] !== ee || A[46] !== X || A[47] !== B || A[48] !== el || A[49] !== eo || A[50] !== L ? (w = () => (B({
                    voiceAutoScrollEnabled: L,
                    clear: J,
                    consumeGrowth: Z,
                    getHeightPx: X,
                    ensureScrollRoomForAnchor: ee,
                    onTurnLayoutReady: el,
                    place: eo
                }), () => {
                    B(null)
                }), I = [J, Z, X, ee, B, el, eo, L], A[43] = J, A[44] = Z, A[45] = ee, A[46] = X, A[47] = B, A[48] = el, A[49] = eo, A[50] = L, A[51] = w, A[52] = I) : (w = A[51], I = A[52]), (0, o.useLayoutEffect)(w, I), A[53] !== er || A[54] !== F || A[55] !== O || A[56] !== eo || A[57] !== $ || A[58] !== ec || A[59] !== L ? (S = () => {
                    let e = H.current,
                        t = K.current;
                    if (H.current = O, K.current = F, L && !F && !t && null != O && O !== e) {
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
                }, T = [er, F, O, eo, ec, $, L], A[53] = er, A[54] = F, A[55] = O, A[56] = eo, A[57] = $, A[58] = ec, A[59] = L, A[60] = S, A[61] = T) : (S = A[60], T = A[61]), (0, o.useLayoutEffect)(S, T), A[62] !== ea || A[63] !== M || A[64] !== ed || A[65] !== $ ? (j = () => {
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
            s = n("Q840"),
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
                    } = (0, i.db)(),
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
                    data: D
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
                if (x[9] !== _ || x[10] !== k || x[11] !== D || x[12] !== G || x[13] !== j || x[14] !== E || x[15] !== P || x[16] !== A || x[17] !== F || x[18] !== N || x[19] !== w || x[20] !== T || x[21] !== M || x[22] !== R) {
                    let e = null != w ? (0, i.C)(w, {
                            conversationId: N ?? _
                        }) : (0, m.c)(N ?? _, {
                            gizmoId: F?.gizmo.short_url ?? D?.gizmo.short_url ?? G
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
                    x[9] = _, x[10] = k, x[11] = D, x[12] = G, x[13] = j, x[14] = E, x[15] = P, x[16] = A, x[17] = F, x[18] = N, x[19] = w, x[20] = T, x[21] = M, x[22] = R, x[23] = y
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
            s = n("Q840"),
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
            o = n("Q840"),
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
        let N = (0, v.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function B(e) {
            let t, n, v, B, z, G, F, D, L, H, W, q, K, U, V, Q, Y, $, J, Z, X = (0, r.c)(56),
                {
                    gizmo: ee
                } = e,
                et = (0, o.y)(w.a),
                en = (0, l.a)(),
                {
                    search: ea
                } = (0, d.Y)(),
                er = (0, d.$)(),
                [es, eo] = (0, i.useState)(!1),
                ei = (0, I.f)("2160578039"),
                el = (0, o.x)(S.a, "2513446768"),
                ec = ei && "gpt" === ee.gizmo.gizmo_type && null != ee.gizmo.migrated_plugin_id;
            X[0] !== el ? (t = el?.get("disable_gpt_updates", !1), X[0] = el, X[1] = t) : t = X[1];
            let ed = t,
                eu = ee.gizmo.current_user_permission?.can_write && !ec && !ed,
                {
                    data: eh
                } = (0, o.z)(T.c);
            X[2] !== ee.gizmo.id || X[3] !== eh ? (n = eh?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === ee.gizmo.id
            }), X[2] = ee.gizmo.id, X[3] = eh, X[4] = n) : n = X[4];
            let ep = n;
            X[5] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, j.a)("/gpts/editor"), X[5] = v) : v = X[5];
            let eg = `${v}/${encodeURIComponent(ee.gizmo.id)}`;
            X[6] !== ee.gizmo.id || X[7] !== ee.gizmo.short_url ? (B = ee.gizmo.short_url?.trim() || ee.gizmo.id, X[6] = ee.gizmo.id, X[7] = ee.gizmo.short_url, X[8] = B) : B = X[8], X[9] !== B ? (z = (0, P.c)(B), X[9] = B, X[10] = z) : z = X[10], X[11] !== ea ? (G = (0, A.e)("", (0, A.i)(ea)), X[11] = ea, X[12] = G) : G = X[12];
            let em = `${z}${G}`;
            X[13] !== en ? (F = en.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions"
            }), X[13] = en, X[14] = F) : F = X[14];
            let ef = F;
            X[15] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, a.jsx)(x.a, {
                className: "icon-sm"
            }), X[15] = D) : D = X[15], X[16] !== ef ? (L = (0, a.jsx)(p.a, {
                "aria-label": ef,
                color: "ghost",
                size: "icon",
                children: D
            }), X[16] = ef, X[17] = L) : L = X[17], X[18] !== ee.gizmo.gizmo_type || X[19] !== ee.gizmo.id || X[20] !== er || X[21] !== em || X[22] !== et ? (H = "gpt" === ee.gizmo.gizmo_type ? (0, a.jsxs)(g.c.Item, {
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
            }) : null, X[18] = ee.gizmo.gizmo_type, X[19] = ee.gizmo.id, X[20] = er, X[21] = em, X[22] = et, X[23] = H) : H = X[23], X[24] !== ee || X[25] !== et ? (W = () => (0, y.f)(et, N, {
                accountId: et.get(u.f),
                resource: ee
            }), X[24] = ee, X[25] = et, X[26] = W) : W = X[26], X[27] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, a.jsx)(g.c.ItemIcon, {
                children: (0, a.jsx)(f.ke, {})
            }), K = (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About"
            }), X[27] = q, X[28] = K) : (q = X[27], K = X[28]), X[29] !== W ? (U = (0, a.jsxs)(g.c.Item, {
                onSelect: W,
                children: [q, K]
            }), X[29] = W, X[30] = U) : U = X[30];
            let ev = ep ? O.a : k.a;
            return X[31] !== ee || X[32] !== en || X[33] !== ep || X[34] !== et ? (V = () => {
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
            }, X[31] = ee, X[32] = en, X[33] = ep, X[34] = et, X[35] = V) : V = X[35], X[36] !== ep ? (Q = ep ? (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT"
            }) : (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT"
            }), X[36] = ep, X[37] = Q) : Q = X[37], X[38] !== ev || X[39] !== V || X[40] !== Q ? (Y = (0, a.jsx)(g.c.Item, {
                leftIconAsset: ev,
                onSelect: V,
                children: Q
            }), X[38] = ev, X[39] = V, X[40] = Q, X[41] = Y) : Y = X[41], X[42] !== eu || X[43] !== eg || X[44] !== ee.gizmo.current_user_permission?.can_view_config ? ($ = eu || ee.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(g.c.Item, {
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
            }) : null, X[42] = eu, X[43] = eg, X[44] = ee.gizmo.current_user_permission?.can_view_config, X[45] = $) : $ = X[45], X[46] !== ee ? (J = (0, a.jsx)(E.a, {
                resource: ee
            }), X[46] = ee, X[47] = J) : J = X[47], X[48] !== es || X[49] !== H || X[50] !== U || X[51] !== Y || X[52] !== $ || X[53] !== J || X[54] !== L ? (Z = (0, a.jsxs)(g.a, {
                align: "start",
                contentWidth: "menu",
                open: es,
                onOpenChange: eo,
                triggerButton: L,
                children: [H, U, Y, $, J]
            }), X[48] = es, X[49] = H, X[50] = U, X[51] = Y, X[52] = $, X[53] = J, X[54] = L, X[55] = Z) : Z = X[55], Z
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
            r = n("Q840"),
            s = n("zd8w"),
            o = n("RU3e");
        n("bjAA");
        var i = n("OWtl");
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
                        } = e, n = !0 === t(o.b);
                        (0, l.cc)(f, p, n)
                    });
                    return () => {
                        e(), (0, l.cc)(f, p, !1)
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
            l = n("Q840"),
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
            let t, n, P, B, G, F, D = (0, r.c)(28),
                {
                    conversationId: L,
                    turns: H,
                    loadHistory: W,
                    renderMode: q,
                    paragenEnabled: K,
                    enabled: U,
                    canCopy: V,
                    priority: Q
                } = e,
                Y = void 0 === q ? "conversation" : q,
                $ = void 0 !== K && K,
                J = void 0 === U || U,
                Z = void 0 === V || V,
                X = void 0 === Q ? "fallback" : Q,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            D[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), D[0] = t) : t = D[0], D[1] !== Z || D[2] !== L || D[3] !== J || D[4] !== W || D[5] !== $ || D[6] !== Y ? (n = [L, J, Z, W, Y, $], D[1] = Z, D[2] = L, D[3] = J, D[4] = W, D[5] = $, D[6] = Y, D[7] = n) : n = D[7], (0, c.useEffect)(t, n), D[8] !== Z || D[9] !== L || D[10] !== $ || D[11] !== Y || D[12] !== ee || D[13] !== H ? (P = () => {
                let e = ee.get(C.j, L),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(C.y, L);
                if (!Z || "tpp" === n || "flora" === n) return null;
                let a = ee.get(C.N, L),
                    r = $ && "conversation" === Y ? ee.get(I.a, L)?.promptMessageId : void 0,
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
                        threadCurrentNode: r ?? ee.get(C.C, L),
                        conversationOrigin: n,
                        isStreaming: (0, C.Bb)(ee.get(C.ab, L)),
                        mode: Y,
                        moderationDisclaimersByMessageId: ee.get(C.O, L),
                        pendingSubmission: null
                    }).renderedTurns);
                if (s?.messageId == null) return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: s?.content
                };
                let o = {
                        conversationId: L,
                        messageId: s.messageId,
                        codeBlockIndex: s.codeBlockIndex
                    },
                    i = (0, T.a)(a?.[s.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(S.b, o) ?? i?.[String(s.codeBlockIndex)]?.content ?? s.content
                }
            }, D[8] = Z, D[9] = L, D[10] = $, D[11] = Y, D[12] = ee, D[13] = H, D[14] = P) : P = D[14];
            let en = (0, y.a)(P);
            D[15] !== ee ? (B = (e, t) => {
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
            }, D[15] = ee, D[16] = B) : B = D[16];
            let ea = B;
            return D[17] !== L || D[18] !== en || D[19] !== W || D[20] !== $ || D[21] !== Y || D[22] !== ee || D[23] !== ea ? (G = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!W || ee.get(C.B, L) || null == t || ee.get(w.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let r = ee.get(u.a),
                    s = ee.get(C.C, L),
                    o = ee.get(h.e).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(C.C, L) !== s || $ && "conversation" === Y && t(I.a, L)?.promptMessageId !== n || t(h.e).copyLastCodeBlock !== o) && a.abort()
                    });
                ea((async () => {
                    await (0, _.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, D[17] = L, D[18] = en, D[19] = W, D[20] = $, D[21] = Y, D[22] = ee, D[23] = ea, D[24] = G) : G = D[24], D[25] !== J || D[26] !== X ? (F = {
                enabled: J,
                priority: X
            }, D[25] = J, D[26] = X, D[27] = F) : F = D[27], (0, p.a)("copyLastCodeBlock", G, F), null
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
        var s = n("Q840"),
            o = n("Wf1j"),
            i = n("sSJB"),
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
            return (0, o.a)(), (0, s.z)(d.h), (0, s.z)(c.s), v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(y, {}), v[0] = t, v[1] = n) : (t = v[0], n = v[1]), v[2] !== _ || v[3] !== I ? (i = (0, a.jsx)(x.a, {
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
            r = n("QosV"),
            s = n("slpy"),
            o = n("zd8w"),
            i = n("Wf1j"),
            l = n("oyxz"),
            c = n("sSJB"),
            d = n("Sm6l"),
            u = n("HOLv"),
            h = n("NVRI"),
            p = n("MMlk"),
            g = n("UNoV"),
            m = n("k4NF");
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, o, i, l, c, d = (0, r.c)(14);
                d[0] !== e ? ({
                    hasSectionProgress: s,
                    isTemporaryChat: o,
                    startActions: n,
                    ...t
                } = e, d[0] = e, d[1] = t, d[2] = n, d[3] = s, d[4] = o) : (t = d[1], n = d[2], s = d[3], o = d[4]);
                let u = void 0 !== o && o,
                    m = void 0 !== s && s ? g.a.Title : void 0;
                return d[5] !== u ? (i = u ? (0, a.jsx)(p.b, {
                    isIndicator: !0,
                    isTemporaryChat: !0
                }) : null, d[5] = u, d[6] = i) : i = d[6], d[7] !== n || d[8] !== i ? (l = (0, a.jsxs)(a.Fragment, {
                    children: [n, i]
                }), d[7] = n, d[8] = i, d[9] = l) : l = d[9], d[10] !== t || d[11] !== m || d[12] !== l ? (c = (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(h.a, {
                        ...t,
                        className: m,
                        inset: "tab-strip-flush-start",
                        startActions: l
                    })
                }), d[10] = t, d[11] = m, d[12] = l, d[13] = c) : c = d[13], c
            },
            b: function(e) {
                let t, n, s, o = (0, r.c)(9),
                    {
                        children: i,
                        menu: l,
                        hasTitleMenu: d
                    } = e,
                    u = !d && l;
                return o[0] !== d || o[1] !== l ? (t = d ? (0, a.jsx)(c.a.HeaderAction, {
                    actionId: "chatgpt-conversation-title-menu",
                    align: "start",
                    slotPosition: "threadTitle",
                    children: l
                }) : null, o[0] = d, o[1] = l, o[2] = t) : t = o[2], o[3] !== i ? (n = null == i ? null : (0, a.jsx)(c.a.HeaderAction, {
                    actionId: "chatgpt-conversation-actions",
                    align: "end",
                    order: 100,
                    children: (0, a.jsx)("div", {
                        className: "flex min-w-0 items-center gap-toolbar-action",
                        children: i
                    })
                }), o[3] = i, o[4] = n) : n = o[4], o[5] !== u || o[6] !== t || o[7] !== n ? (s = (0, a.jsxs)(a.Fragment, {
                    children: [u, t, n]
                }), o[5] = u, o[6] = t, o[7] = n, o[8] = s) : s = o[8], s
            },
            c: function() {
                let e, t, n, c, h, p, g = (0, r.c)(10),
                    f = (0, i.a)(),
                    [v, y] = (0, o.useState)(!1);
                return g[0] === Symbol.for("react.memo_cache_sentinel") ? (e = e => {
                    e.preventDefault(), y(!0)
                }, g[0] = e) : e = g[0], g[1] !== f ? (t = f.formatMessage({
                    id: "chatgptConversations.header.cloudFileAccess",
                    defaultMessage: "No local file access"
                }), g[1] = f, g[2] = t) : t = g[2], g[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(u.a, {
                    asset: m.a
                }), g[3] = n) : n = g[3], g[4] !== t ? (c = (0, a.jsx)(s.a.Trigger, {
                    onClick: e,
                    children: (0, a.jsx)(d.a, {
                        "aria-label": t,
                        color: "ghostActive",
                        size: "toolbar",
                        uniform: !0,
                        children: n
                    })
                }), g[4] = t, g[5] = c) : c = g[5], g[6] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(s.a.Content, {
                    align: "start",
                    side: "bottom",
                    sideOffset: 12,
                    children: (0, a.jsx)(l.a, {
                        id: "chatgptConversations.header.cloudTaskTooltip",
                        defaultMessage: "The chat was started elsewhere. ChatGPT can't access files unless you attach them."
                    })
                }), g[6] = h) : h = g[6], g[7] !== v || g[8] !== c ? (p = (0, a.jsxs)(s.a.Root, {
                    open: v,
                    onOpenChange: y,
                    children: [c, h]
                }), g[7] = v, g[8] = c, g[9] = p) : p = g[9], p
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
            r = n("Q840"),
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
        var a = n("Q840"),
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
            s = n("Q840"),
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
                    children: (0, a.jsx)(c.wd, {})
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
            o = n("Q840"),
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
                g = (0, i.$)(),
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
        var a = n("Q840"),
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
            s = n("Q840"),
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
            s = n("Q840"),
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
            s = n("Q840"),
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
            } = o, G = (0, S.a)(N, R, r?.gizmo.id), F = "allowed" === c, D = e => {
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
            }, L = [];
            for (let e of (F && (L.push({
                    id: "new-chatgpt-project",
                    icon: d.Eg,
                    message: P.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        t.set(j, e => e + 1), (0, x.a)(t, D, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: E,
                            onCloseAutoFocus: _
                        })
                    }
                }), G.length > 0 && L.push({
                    id: "new-project-separator",
                    type: "separator"
                })), G)) {
                let {
                    targetMemoryBlocked: t
                } = (0, I.c)(n, void 0, e), r = t ? (0, w.a)((0, b.c)(e)) : void 0;
                L.push({
                    id: `move-to-project:${e.gizmo.id}`,
                    icon: (0, a.jsx)(m.a, {
                        className: "icon-xs",
                        size: 16,
                        color: e.gizmo.display.theme,
                        fallbackIcon: (0, a.jsx)(d.Ad, {}),
                        icon: e.gizmo.display.emoji
                    }),
                    nativeIcon: (0, g.b)(e.gizmo.display.emoji),
                    message: P.projectName,
                    messageValues: {
                        projectName: e.gizmo.display.name
                    },
                    enabled: null == r,
                    tooltipMessage: r,
                    onSelect: () => D(e)
                })
            }
            return l && (O || z) ? L.push({
                id: "retry-project-destinations",
                message: P.destinationsFailed,
                closeOnSelect: !1,
                onSelect: () => {
                    Promise.all([t.query.invalidate(y.a), t.query.invalidate(C.m)])
                }
            }) : l && (k || B) ? L.push({
                id: "loading-project-destinations",
                message: P.loading,
                tooltipMessage: P.reopen,
                enabled: !1
            }) : O || z || k || B || 0 !== G.length || F || L.push({
                id: "no-project-destinations",
                message: P.noDestinations,
                enabled: !1
            }), [...i && L.length > 0 ? [{
                id: "move-to-project",
                icon: d.Dd,
                message: P.moveToProject,
                enabled: !A,
                tooltipMessage: M,
                submenu: L
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                icon: d.Hd,
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
                    v = (0, l.$)(),
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
        var a = n("Q840"),
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
            s = n("Q840"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("sSJB"),
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
            s = n("Q840"),
            o = n("sSJB"),
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
        let l = (0, o.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(602271)]).then(n.bind(n, "Vkkr"))).ChatGptThreadSummaryPanelBody, {
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
            o = n("Q840"),
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
            s = n("Q840"),
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
        let m = (0, d.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(789716), n.e(531161), n.e(326035), n.e(897667)]).then(n.bind(n, "FQ1K"))).SelectedTextAnnotationEditor, {
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
            s = n("Q840"),
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
                let D = (0, o.useEffectEvent)(t);
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
                let L = (0, d.a)(n);
                if (_[5] !== I || _[6] !== D || _[7] !== E || _[8] !== P || _[9] !== A || _[10] !== R || _[11] !== k ? (m = () => {
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
                                    (0, u.d)(z.current, t) || (null == z.current && null != t && D(t), z.current = t, F(t))
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
                    }, _[5] = I, _[6] = D, _[7] = E, _[8] = P, _[9] = A, _[10] = R, _[11] = k, _[12] = m) : m = _[12], _[13] !== I || _[14] !== E || _[15] !== P || _[16] !== A || _[17] !== R || _[18] !== k ? (f = [I, E, P, A, R, k], _[13] = I, _[14] = E, _[15] = P, _[16] = A, _[17] = R, _[18] = k, _[19] = f) : f = _[19], (0, o.useEffect)(m, f), null == G) return null;
                let H = .5;
                "start" === (void 0 === w ? "center" : w) && (H = +("rtl" === G.direction));
                let W = G.rect.left + G.rect.width * H,
                    q = G.viewportHorizontalBounds.left + 8 - W,
                    K = G.viewportHorizontalBounds.right - 8 - W,
                    U = G.portalTarget ?? document.body,
                    V = null == G.portalTarget ? "fixed z-50" : "absolute z-[1]";
                _[20] !== T || _[21] !== V ? (v = (0, s.b)("pointer-events-none w-max", V, T), _[20] = T, _[21] = V, _[22] = v) : v = _[22];
                let Q = G.viewportHorizontalBounds.right - G.viewportHorizontalBounds.left - 16,
                    Y = G.rect.top - 8,
                    $ = `translateX(clamp(${q}px, ${-100*H}%, calc(${K}px - 100%))) translateY(-100%)`;
                return _[23] !== W || _[24] !== Q || _[25] !== Y || _[26] !== $ ? (y = {
                    left: W,
                    maxWidth: Q,
                    top: Y,
                    transform: $
                }, _[23] = W, _[24] = Q, _[25] = Y, _[26] = $, _[27] = y) : y = _[27], _[28] !== S || _[29] !== L || _[30] !== G || _[31] !== k ? (b = null == G.portalTarget && 1 !== k ? (0, a.jsx)("div", {
                    style: {
                        zoom: k
                    },
                    children: S(G, L)
                }) : S(G, L), _[28] = S, _[29] = L, _[30] = G, _[31] = k, _[32] = b) : b = _[32], _[33] !== y || _[34] !== b || _[35] !== v ? (x = (0, a.jsx)("div", {
                    ref: B,
                    className: v,
                    style: y,
                    children: b
                }), _[33] = y, _[34] = b, _[35] = v, _[36] = x) : x = _[36], _[37] !== x || _[38] !== U ? (C = (0, a.jsx)(l.a, {
                    container: U,
                    children: x
                }), _[37] = x, _[38] = U, _[39] = C) : C = _[39], C
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
    k4NF: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "laptop-slash-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-laptop-slash-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .098999,
                    y: 244e-6,
                    overflows: !1
                },
                composite: {
                    x: .098999,
                    y: 244e-6,
                    overflows: !1
                }
            }
        }
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