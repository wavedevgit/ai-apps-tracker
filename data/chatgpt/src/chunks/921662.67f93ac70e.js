export const __rspack_esm_ids = [921662];
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
            a: () => L,
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
            j = n("aTcy"),
            I = n("JNtf"),
            T = n("mUDD"),
            P = n("Ot7V"),
            E = n("SGsN"),
            A = n("DAA7"),
            M = n("yGJW"),
            R = n("GDNt");

        function k(e) {
            let t, n, l, c, d, u, p, v, y, R, k, B, F, G, L, z, D, H, q, W, K, U, V = (0, r.c)(70),
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
                (0, M.a)(Z, g.yd, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: Q.account.account_user_role ?? void 0,
                    hasPaidSubscription: ei
                })
            }, V[5] = Q.account.account_user_role, V[6] = l, V[7] = ei, V[8] = Z, V[9] = c) : c = V[9];
            let ed = c;
            V[10] !== X ? (d = () => {
                X(), (0, P.f)({
                    href: new URL("/codex/cloud", j.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, V[10] = X, V[11] = d) : d = V[11];
            let eu = d;
            V[12] !== Q.account.subscription_seat_pools_enabled || V[13] !== $ || V[14] !== eu || V[15] !== el || V[16] !== et || V[17] !== ee || V[18] !== eo || V[19] !== ed || V[20] !== X || V[21] !== J || V[22] !== en || V[23] !== Z || V[24] !== Y ? (u = async () => {
                if ("requesting" !== en) {
                    if (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), eo && !el) {
                        let e = new URL("/admin/members", j.h);
                        e.searchParams.set("account_id", $), et && e.searchParams.set("search", et);
                        let t = e.toString(),
                            n = (0, A.c)(Z, t, $),
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
                            J ? (X(), J()) : eu(), Z.get(E.f).success(ee.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted"
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
                defaultMessage: "You don’t have access to Chat on this plan"
            }), V[26] = p) : p = V[26];
            let ep = p;
            V[27] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.message",
                defaultMessage: "You are assigned Work access only. Reach out to your admin to request access to ChatGPT."
            }), V[27] = v) : v = V[27];
            let em = v;
            if (ec) {
                let e;
                V[28] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.ownerMessage",
                    defaultMessage: "Your current seat is Work-only. Update your seat type in Workspace settings to start using ChatGPT."
                }), V[28] = e) : e = V[28], em = e
            } else if (es) {
                let e;
                V[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.adminMessage",
                    defaultMessage: "You are assigned Work access only. Ask your workspace owner to buy ChatGPT seats, then update your seat type in Workspace settings."
                }), V[29] = e) : e = V[29], em = e
            }
            V[30] !== ed || V[31] !== X ? (y = e => {
                e || (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED"), X())
            }, V[30] = ed, V[31] = X, V[32] = y) : y = V[32], V[33] !== eh ? (R = e => {
                e.preventDefault(), eh()
            }, V[33] = eh, V[34] = R) : R = V[34], V[35] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, a.jsx)(I.e, {
                className: "heading-lg font-semibold",
                children: ep
            }), V[35] = k) : k = V[35], V[36] !== em ? (B = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [k, (0, a.jsx)(I.d, {
                    className: "text-lg leading-6 text-secondary",
                    children: em
                })]
            }), V[36] = em, V[37] = B) : B = V[37];
            let eg = "requesting" === en,
                ef = "requesting" === en;
            return V[38] !== ec ? (F = ec ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.updateSeatButton",
                defaultMessage: "Update seat"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access"
            }), V[38] = ec, V[39] = F) : F = V[39], V[40] !== eg || V[41] !== ef || V[42] !== F ? (G = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: eg,
                disabled: ef,
                children: F
            }), V[40] = eg, V[41] = ef, V[42] = F, V[43] = G) : G = V[43], V[44] !== eu || V[45] !== ed || V[46] !== X || V[47] !== J ? (L = () => {
                J ? (X(), J()) : (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), eu())
            }, V[44] = eu, V[45] = ed, V[46] = X, V[47] = J, V[48] = L) : L = V[48], V[49] !== J ? (z = J ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex"
            }), V[49] = J, V[50] = z) : z = V[50], V[51] !== L || V[52] !== z ? (D = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: L,
                children: z
            }), V[51] = L, V[52] = z, V[53] = D) : D = V[53], V[54] !== G || V[55] !== D ? (H = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [G, D]
            }), V[54] = G, V[55] = D, V[56] = H) : H = V[56], V[57] !== ee || V[58] !== en ? (q = null != en && "requesting" !== en ? (0, a.jsx)("p", {
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
            }) : null, V[57] = ee, V[58] = en, V[59] = q) : q = V[59], V[60] !== B || V[61] !== H || V[62] !== q ? (W = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-8 p-10 text-center",
                children: [B, H, q]
            }), V[60] = B, V[61] = H, V[62] = q, V[63] = W) : W = V[63], V[64] !== W || V[65] !== R ? (K = (0, a.jsx)(T.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: R,
                children: W
            }), V[64] = W, V[65] = R, V[66] = K) : K = V[66], V[67] !== K || V[68] !== y ? (U = (0, a.jsx)(I.a, {
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

        function F(e) {
            let t, n, s = (0, r.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, o.y)(m.a),
                p = (0, o.z)(B.a),
                g = (0, o.z)(d.v),
                f = (0, l._)();
            if ("restricted" !== p.status) return null;
            let v = `${p.accountId}:${p.userId}`;
            return s[0] !== f || s[1] !== c || s[2] !== h || s[3] !== g.status ? (t = "allowed" === g.status ? c ?? (() => {
                (0, u.m)(h, "work"), f("/")
            }) : void 0, s[0] = f, s[1] = c, s[2] = h, s[3] = g.status, s[4] = t) : t = s[4], s[5] !== i || s[6] !== v || s[7] !== t ? (n = (0, a.jsx)(G, {
                modeToggle: i,
                onSwitchToWork: t
            }, v), s[5] = i, s[6] = v, s[7] = t, s[8] = n) : n = s[8], n
        }

        function G(e) {
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
                    defaultMessage: "You don’t have access to Chat on this plan"
                })
            }), u[2] = n) : n = u[2], u[3] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)("main", {
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

        function L(e) {
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
                if (!n(l.e, "3901104270")) return [];
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
    zJsu: (function(e, t, n) {
        n.d(t, {
            BusinessAgentConversationHeader: () => F,
            BusinessAgentHomeHero: () => G
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
            j = n("T1PX");
        let I = (0, S.a)(async () => {
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
                return (0, a.jsx)(E, {})
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
            errorFallback: (0, a.jsx)(E, {})
        });

        function T(e) {
            let t, n = (0, r.c)(2),
                o = (0, j.a)();
            return n[0] !== o ? (t = (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden",
                children: o ? (0, a.jsx)(E, {}) : (0, a.jsx)(P, {})
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function P(e) {
            let t, n, s, i = (0, r.c)(7),
                l = (0, h.useRef)(null),
                c = (0, C.a)(l),
                d = (0, o.z)(w.b),
                [u, p] = (0, h.useState)(!1);
            if (u) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(E, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(E, {}), i[1] = t) : t = i[1], i[2] !== c || i[3] !== d ? (n = c && !0 === d ? (0, a.jsx)(I, {
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

        function R(e) {
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
                    defaultMessage: "Business chat"
                })
            }), l[5] = o) : o = l[5], l[6] !== n ? (s = (0, a.jsxs)("div", {
                className: "flex min-w-0 flex-col text-start",
                children: [n, o]
            }), l[6] = n, l[7] = s) : s = l[7], l[8] !== t || l[9] !== s ? (i = (0, a.jsxs)("div", {
                className: "flex min-w-0 items-center gap-2 select-none",
                children: [t, s]
            }), l[8] = t, l[9] = s, l[10] = i) : i = l[10], i
        }

        function k(e) {
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
                        defaultMessage: "This Business Agent is unavailable. Please return to the ad and try again"
                    }) : (0, a.jsx)(p.a, {
                        id: "chatgptConversations.businessAgent.loading",
                        defaultMessage: "Opening Business Agent…"
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
            let t, n, o, s, i, l, c, d, u, m, g, C, w, _, S, j, I, P = (0, r.c)(29),
                {
                    context: E,
                    onPresented: R,
                    onContinue: k,
                    onDismiss: N
                } = e,
                [O, B] = (0, h.useState)(!0 === E.showDisclosureModal);
            P[0] !== E.privacyPolicyUrl ? (t = function(e) {
                if (null == e) return null;
                try {
                    let t = new URL(e);
                    return ("https:" === t.protocol || "http:" === t.protocol) && t.hostname ? t.href : null
                } catch {
                    return null
                }
            }(E.privacyPolicyUrl), P[0] = E.privacyPolicyUrl, P[1] = t) : t = P[1];
            let F = t;
            return P[2] !== N ? (n = e => {
                B(e), e || N?.()
            }, P[2] = N, P[3] = n) : n = P[3], P[4] !== R ? (o = {
                "data-theme": "light",
                onOpenAutoFocus: R
            }, P[4] = R, P[5] = o) : o = P[5], P[6] !== k ? (s = e => {
                e.preventDefault(), B(!1), k?.()
            }, P[6] = k, P[7] = s) : s = P[7], P[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(T, {}), P[8] = i) : i = P[8], P[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(v.e, {
                className: "heading-lg text-center leading-7 font-semibold",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.disclosureTitle",
                    defaultMessage: "About chatting with businesses"
                })
            }), P[9] = l) : l = P[9], P[10] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(x.a, {
                className: "shrink-0",
                asset: A
            }), P[10] = c) : c = P[10], P[11] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.disclosureQuestionsTitle",
                    defaultMessage: "Ask questions and compare options"
                })
            }), P[11] = d) : d = P[11], P[12] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [c, (0, a.jsxs)("div", {
                    className: "flex min-w-0 flex-col gap-0.5",
                    children: [d, (0, a.jsx)("p", {
                        className: "text-base leading-snug tracking-tight text-secondary",
                        children: (0, a.jsx)(p.a, {
                            id: "chatgptConversations.businessAgent.disclosureQuestionsBody",
                            defaultMessage: "Learn what the business offers and ask detailed follow-ups as you decide."
                        })
                    })]
                })]
            }), P[12] = u) : u = P[12], P[13] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, a.jsx)(x.a, {
                className: "shrink-0",
                asset: M
            }), P[13] = m) : m = P[13], P[14] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.disclosureUsageTrendsTitle",
                    defaultMessage: "Your chats remain private"
                })
            }), P[14] = g) : g = P[14], P[15] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, a.jsxs)("div", {
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
                                        defaultMessage: "Businesses can’t see your chats or your personal info — just overall usage trends to help improve their AI agent."
                                    })
                                })]
                            })]
                        })]
                    })
                })]
            }), P[15] = C) : C = P[15], P[16] !== F ? (w = null == F ? null : (0, a.jsx)(b.a, {
                href: F,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy"
                })
            }), P[16] = F, P[17] = w) : w = P[17], P[18] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, a.jsx)("div", {
                className: "flex justify-center",
                children: (0, a.jsx)(f.a, {
                    color: "primary",
                    size: "dialogAction",
                    type: "submit",
                    children: (0, a.jsx)(p.a, {
                        id: "chatgptConversations.businessAgent.disclosureStartChat",
                        defaultMessage: "Start chatting"
                    })
                })
            }), P[18] = _) : _ = P[18], P[19] !== w ? (S = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [C, w, _]
                })]
            }), P[19] = w, P[20] = S) : S = P[20], P[21] !== S || P[22] !== s ? (j = (0, a.jsx)(y.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: s,
                children: S
            }), P[21] = S, P[22] = s, P[23] = j) : j = P[23], P[24] !== O || P[25] !== j || P[26] !== n || P[27] !== o ? (I = (0, a.jsx)(v.a, {
                open: O,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: o,
                children: j
            }), P[24] = O, P[25] = j, P[26] = n, P[27] = o, P[28] = I) : I = P[28], I
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
                defaultMessage: "Business Agent"
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
            return n[0] !== i || n[1] !== l ? (t = null == l ? i : (0, a.jsx)(R, {
                state: l
            }), n[0] = i, n[1] = l, n[2] = t) : t = n[2], t
        }

        function G(e) {
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
            return null == v ? m : (h[7] !== m || h[8] !== g || h[9] !== v ? (t = "ready" !== v.status || v.context.showConversationStarters ? (0, a.jsx)(k, {
                state: v,
                onStarterPromptSelect: g
            }) : m, h[7] = m, h[8] = g, h[9] = v, h[10] = t) : t = h[10], h[11] !== p || h[12] !== v.context || h[13] !== v.status ? (n = "ready" === v.status ? (0, a.jsx)(L, {
                context: v.context,
                conversationId: p
            }, v.context.interactionId) : null, h[11] = p, h[12] = v.context, h[13] = v.status, h[14] = n) : n = h[14], h[15] !== t || h[16] !== n ? (d = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), h[15] = t, h[16] = n, h[17] = d) : d = h[17], d)
        }

        function L(e) {
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
            a: () => y
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("zd8w"),
            i = n("oyxz"),
            l = n("jqIZ"),
            c = n("SGsN"),
            d = n("esXD"),
            u = n("OWtl");

        function h(e) {
            let t, n, a, i = (0, r.c)(11),
                {
                    isUnavailable: h,
                    message: p,
                    homePath: m,
                    onUnavailable: g,
                    children: f
                } = e,
                v = (0, o.y)(u.a),
                y = (0, l._)(),
                b = (0, s.useRef)(!1);
            i[0] !== m || i[1] !== p || i[2] !== y || i[3] !== g || i[4] !== v ? (t = () => {
                g?.(), v.get(c.f).info(p, {
                    id: "conversation-inaccessible",
                    duration: 5
                }), (0, d.d)("conversation_unavailable", () => y(m, {
                    replace: !0
                }))
            }, i[0] = m, i[1] = p, i[2] = y, i[3] = g, i[4] = v, i[5] = t) : t = i[5];
            let x = (0, s.useEffectEvent)(t);
            return i[6] !== h || i[7] !== x ? (n = () => {
                h && !b.current && (b.current = !0, x())
            }, i[6] = h, i[7] = x, i[8] = n) : n = i[8], i[9] !== h ? (a = [h], i[9] = h, i[10] = a) : a = i[10], (0, s.useEffect)(n, a), h ? null : f
        }
        var p = n("IxgT"),
            m = n("yGJW"),
            g = n("eShZ"),
            f = n("ZhoB");
        let v = new WeakSet;

        function y(e) {
            let t, n, s, l, c, d, v, y, x = (0, r.c)(25),
                {
                    conversationId: C,
                    error: w,
                    loadError: _,
                    canRetry: S,
                    isWorkConversation: j,
                    showChatFallback: I,
                    onInlineLoadError: T,
                    children: P
                } = e,
                E = (0, o.y)(u.a),
                A = (0, o.z)(void 0 !== I && I && !1 === j ? p.b : null);
            if (null != A) return A;
            x[0] !== C || x[1] !== j || x[2] !== E ? (t = (e, t) => {
                (0, f.e)(E.get(m.c).logProductEvent, {
                    conversationId: C,
                    error: e,
                    isWorkConversation: j,
                    canRetry: t
                })
            }, x[0] = C, x[1] = j, x[2] = E, x[3] = t) : t = x[3];
            let M = t;
            x[4] !== S || x[5] !== _ || x[6] !== M ? (n = () => M(_, S), x[4] = S, x[5] = _, x[6] = M, x[7] = n) : n = x[7], x[8] !== _ || x[9] !== T || x[10] !== n ? (s = (0, a.jsx)(b, {
                error: _,
                onInlineLoadError: T,
                onShown: n
            }), x[8] = _, x[9] = T, x[10] = n, x[11] = s) : s = x[11], x[12] !== P || x[13] !== s ? (l = (0, a.jsxs)(a.Fragment, {
                children: [s, P]
            }), x[12] = P, x[13] = s, x[14] = l) : l = x[14];
            let R = l;
            return x[15] !== w ? (c = w instanceof g.FetchError && !(0, g.e)(w) && (403 === w.status || 404 === w.status), x[15] = w, x[16] = c) : c = x[16], x[17] !== w || x[18] !== M ? (d = () => M(w, !1), x[17] = w, x[18] = M, x[19] = d) : d = x[19], x[20] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
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
            let t, n, a, o = (0, r.c)(8),
                {
                    error: i,
                    onShown: l,
                    onInlineLoadError: c
                } = e,
                d = (0, s.useEffectEvent)(l);
            o[0] !== c ? (t = e => c?.(e), o[0] = c, o[1] = t) : t = o[1];
            let u = (0, s.useEffectEvent)(t);
            return o[2] !== i || o[3] !== d || o[4] !== u ? (n = () => {
                if (null != i) {
                    if (u(i), (0, g.e)(i)) {
                        if (v.has(i)) return;
                        v.add(i)
                    }
                    d()
                }
            }, o[2] = i, o[3] = d, o[4] = u, o[5] = n) : n = o[5], o[6] !== i ? (a = [i], o[6] = i, o[7] = a) : a = o[7], (0, s.useEffect)(n, a), null
        }
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
                }, y[0] = b, y[1] = C, y[2] = x, y[3] = t) : t = y[3], (0, s.a)("markThreadUnread", t), y[4] !== b || y[5] !== x ? (n = () => void(0, d.renameActiveChatGptConversation)(x, b), p = [b, x], y[4] = b, y[5] = x, y[6] = n, y[7] = p) : (n = y[6], p = y[7]), (0, l.d)("rename-thread", n, p), y[8] !== b || y[9] !== x ? (m = () => (0, d.d)(x, b), g = [b, x], y[8] = b, y[9] = x, y[10] = m, y[11] = g) : (m = y[10], g = y[11]), (0, l.d)("toggle-thread-pin", m, g), y[12] !== b || y[13] !== x ? (f = () => (0, d.a)(x, b), v = [b, x], y[12] = b, y[13] = x, y[14] = f, y[15] = v) : (f = y[14], v = y[15]), (0, l.d)("archive-thread", f, v), null
            }
        })
    }),
    qeMp: (function(e, t, n) {
        n.d(t, {
            a: () => ig,
            ChatGptConversationPage: () => im
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("v8gE"),
            s = n("FS1B"),
            i = n("T0Rc"),
            l = n("HVBu"),
            c = n.n(l),
            d = n("BolX"),
            u = n("I07G"),
            h = n("AuIy"),
            p = n("iqEK"),
            m = n("NRIv"),
            g = n("zd8w"),
            f = n("Wf1j"),
            v = n("jqIZ"),
            y = n("bn59"),
            b = n("OY84"),
            x = n("Yxds"),
            C = n("StMt"),
            w = n("E8Sp"),
            _ = n("z0li"),
            S = n("LIH9"),
            j = n("O0M0"),
            I = n("Cslg"),
            T = n("OFP1"),
            P = n("ItIk"),
            E = (n("AZW7"), n("uxPT")),
            A = n("GMTh"),
            M = n("zpMv"),
            R = n("PFzG"),
            k = n("YiPf"),
            N = n("DrWu"),
            O = n("x4uR"),
            B = n("hx97");

        function F(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var G = n("MrzV"),
            L = n("YTsa"),
            z = n("TSib"),
            D = n("jEN2"),
            H = n("kphc"),
            q = n("YWcr"),
            W = n("mwa5"),
            K = n("UxN3"),
            U = n("SGsN"),
            V = n("XcNx"),
            Q = n("GKsW"),
            $ = n("yWTM"),
            Y = n("SkIz"),
            X = n("hsSf"),
            J = n("ibLK"),
            Z = n("Xc94"),
            ee = n("Sgih"),
            et = n("HwRo"),
            en = n("qwxA"),
            ea = n("gOnr"),
            er = n("KXCj"),
            eo = n("e1xH"),
            es = n("Dl20"),
            ei = n("kErH"),
            el = n("dJBt"),
            ec = n("yGJW"),
            ed = n("FR8U"),
            eu = n("xqnZ"),
            eh = n("UMxD"),
            ep = n("JhDO"),
            em = n("tSEg"),
            eg = n("kl6F"),
            ef = n("kfGJ"),
            ev = n("khOd"),
            ey = n("xSOA"),
            eb = n("oyxz"),
            ex = n("MYlA"),
            eC = n("OtLV"),
            ew = n("sfmI"),
            e_ = n("QmkR"),
            eS = n("Yrvy"),
            ej = n("HOLv"),
            eI = n("nlNF"),
            eT = n("OWtl"),
            eP = n("MRlq"),
            eE = n("vNLk"),
            eA = n("PCxL"),
            eM = n("aZgH"),
            eR = n("gBPo");

        function ek(e) {
            let t, n, o, s, i, l, c, u, h, p, m, y, b, x, C = (0, r.c)(56),
                {
                    conversationId: w,
                    kind: _
                } = e,
                S = (0, d.y)(eT.a),
                j = (0, f.a)(),
                T = (0, v.Y)(),
                P = (0, v._)(),
                E = (0, d.z)(eA.l),
                A = (0, d.z)(I.h),
                M = (0, d.z)(I.g);
            C[0] !== A || C[1] !== w || C[2] !== M || C[3] !== _ || C[4] !== E ? (t = "chatgpt" === _ && E?.kind === "chatgpt" && E.conversation.id === w && (0, ew.a)(E.conversation, A, M) ? E.conversation : null, C[0] = A, C[1] = w, C[2] = M, C[3] = _, C[4] = E, C[5] = t) : t = C[5];
            let R = t,
                [k, N] = (0, g.useState)(!1),
                {
                    mutate: O,
                    isPending: B
                } = (0, eS.a)(w);
            C[6] !== T.hash || C[7] !== T.pathname || C[8] !== T.search || C[9] !== P || C[10] !== S ? (n = () => {
                (0, eA.e)(S), P({
                    pathname: T.pathname,
                    search: T.search,
                    hash: T.hash
                }, {
                    replace: !0,
                    state: null
                })
            }, C[6] = T.hash, C[7] = T.pathname, C[8] = T.search, C[9] = P, C[10] = S, C[11] = n) : n = C[11];
            let F = n,
                G = (0, d.z)(eA.k);
            C[12] !== w || C[13] !== G ? (o = G?.find(e => (0, eM.b)(e.task) === `hosted:${w}`), C[12] = w, C[13] = G, C[14] = o) : o = C[14];
            let L = o;
            C[15] !== w || C[16] !== S ? (s = () => {
                let e = S.get(eA.l);
                return null != e && (0, eM.b)(e) === `hosted:${w}` ? (0, eA.d)(S, e) : void 0
            }, i = async () => {
                await (0, e_.V)({
                    scope: S,
                    conversationId: w
                })
            }, C[15] = w, C[16] = S, C[17] = s, C[18] = i) : (s = C[17], i = C[18]), C[19] !== w || C[20] !== F || C[21] !== _ || C[22] !== S ? (l = (e, t, n) => {
                n?.("restored");
                let r = S.get(U.f).info((0, a.jsx)(eb.a, {
                    ...eP.a.unarchiveSuccessPlain
                }), {
                    leading: (0, a.jsx)(ej.a, {
                        "aria-hidden": !1,
                        asset: eR.a
                    }),
                    primaryAction: {
                        label: (0, a.jsx)(eb.a, {
                            ...eP.a.viewNow
                        }),
                        onClick: () => {
                            r.close(), F()
                        }
                    },
                    id: `unarchive-thread-${_}:${w}`
                })
            }, C[19] = w, C[20] = F, C[21] = _, C[22] = S, C[23] = l) : l = C[23], C[24] !== j || C[25] !== S ? (c = (e, t, n) => {
                n?.(null), S.get(U.f).danger(j.formatMessage(eP.a.unarchiveError), {
                    errorAnalytics: {
                        toastId: "previewFooter.onError.unarchiveError"
                    }
                })
            }, C[24] = j, C[25] = S, C[26] = c) : c = C[26], C[27] !== s || C[28] !== i || C[29] !== l || C[30] !== c ? (u = {
                onMutate: s,
                mutationFn: i,
                onSuccess: l,
                onError: c
            }, C[27] = s, C[28] = i, C[29] = l, C[30] = c, C[31] = u) : u = C[31];
            let {
                mutate: z,
                isPending: D,
                isSuccess: H
            } = (0, ey.a)(u);
            C[32] !== O || C[33] !== P || C[34] !== S ? (h = e => {
                let t = S.get(eA.c),
                    n = S.get(eI.c),
                    a = S.get(I.f);
                O(e, {
                    onSuccess: () => {
                        if (N(!1), t !== S.get(eA.c) || n !== S.get(eI.c) || a !== S.get(I.f)) return;
                        S.set(eA.l, null);
                        let e = t?.pathname === eA.a ? t : null;
                        P(e ?? "/", {
                            replace: !0,
                            state: e?.state ?? null
                        })
                    }
                })
            }, C[32] = O, C[33] = P, C[34] = S, C[35] = h) : h = C[35];
            let q = h;
            C[36] !== R ? (p = null == R ? void 0 : () => N(!0), C[36] = R, C[37] = p) : p = C[37];
            let W = H || L?.status === "restored",
                K = D || L?.status === "restoring";
            return C[38] !== z ? (m = () => z(), C[38] = z, C[39] = m) : m = C[39], C[40] !== F || C[41] !== B || C[42] !== p || C[43] !== W || C[44] !== K || C[45] !== m ? (y = (0, a.jsx)(eE.a, {
                deleting: B,
                onDelete: p,
                restored: W,
                restoring: K,
                onUnarchive: m,
                onDone: F
            }), C[40] = F, C[41] = B, C[42] = p, C[43] = W, C[44] = K, C[45] = m, C[46] = y) : y = C[46], C[47] !== R || C[48] !== q || C[49] !== j || C[50] !== k || C[51] !== B ? (b = null != R && (0, a.jsx)(ex.a, {
                allowArtifactDeletion: !0,
                title: R.title?.trim() || j.formatMessage(eC.a.newChat),
                open: k,
                isDeleting: B,
                onOpenChange: N,
                onConfirm: q
            }), C[47] = R, C[48] = q, C[49] = j, C[50] = k, C[51] = B, C[52] = b) : b = C[52], C[53] !== y || C[54] !== b ? (x = (0, a.jsxs)(a.Fragment, {
                children: [y, b]
            }), C[53] = y, C[54] = b, C[55] = x) : x = C[55], x
        }
        var eN = n("hZax"),
            eO = n("OMIV"),
            eB = n("JCJj"),
            eF = n("KkZX"),
            eG = n("BdYu"),
            eL = n("Nyub"),
            ez = n("rvFo"),
            eD = n("jZDY"),
            eH = n("Bc5r"),
            eq = n("bIvi"),
            eW = n("Elta"),
            eK = n("eW0T"),
            eU = n("hOYb"),
            eV = n("eShZ"),
            eQ = n("qqut"),
            e$ = n("CsbC"),
            eY = n("tCyZ"),
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
            to = n("XcRr"),
            ts = n("YF6h"),
            ti = n("dk3M"),
            tl = n("WFY2"),
            tc = n("vldH"),
            td = n("ISgP"),
            tu = n("t2JB"),
            th = n("DIH2"),
            tp = n("aFoA"),
            tm = n("H8lk"),
            tg = n("dQRk"),
            tf = n("rxj0"),
            tv = n("f2PP"),
            ty = n("S95W");
        let tb = (0, d.v)(eT.a, e => null);
        var tx = n("BJ43"),
            tC = n("d2rV"),
            tw = n("aLqR"),
            t_ = n("VlIB"),
            tS = n("Ow2S"),
            tj = n("G6Ip");
        let tI = (0, d.v)(eT.a, e => null);
        var tT = n("zOE4");

        function tP(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: o,
                    children: s
                } = e;
            if ("loading" === (0, d.x)(tS.t, o)) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(tT.LoadingPage, {
                    debugName: "ChatGptConversationPicker",
                    fillParent: !0
                }), n[0] = e) : e = n[0], e
            }
            return n[1] !== s ? (t = (0, a.jsx)(a.Fragment, {
                children: s
            }), n[1] = s, n[2] = t) : t = n[2], t
        }
        var tE = n("SZi8"),
            tA = n("lBzi"),
            tM = n("Ga6O"),
            tR = n("vknh"),
            tk = n("slpy"),
            tN = n("BOYb"),
            tO = n("Sm6l"),
            tB = n("bf6R"),
            tF = n("Bbed"),
            tG = n("O666"),
            tL = n("tNq4"),
            tz = n("Skaw"),
            tD = n("PYCG");

        function tH(e) {
            let t, n, o, s, i, l, c, u, h, p, m, g, v = (0, r.c)(54),
                {
                    conversationId: y,
                    projectId: b,
                    sharedProjectConversation: x,
                    isReady: C,
                    isRestricted: w,
                    isStreaming: _
                } = e,
                S = void 0 === b ? null : b,
                j = (0, d.y)(eT.a),
                T = (0, f.a)(),
                P = (0, d.z)(I.e),
                E = (0, d.z)(null == S ? null : tz.a),
                A = (0, d.x)(tg.j, y),
                {
                    data: M
                } = (0, d.x)(tA.chatGptConversationQueryById$, null == S ? null : A),
                R = (0, d.x)(tp.a, null == S ? null : A),
                k = (0, d.x)(tg.B, R);
            v[0] !== R || v[1] !== M || v[2] !== k || v[3] !== S || v[4] !== A ? (t = null == M && null != R && null != A ? {
                id: A,
                gizmo_id: S,
                is_temporary_chat: k
            } : void 0, v[0] = R, v[1] = M, v[2] = k, v[3] = S, v[4] = A, v[5] = t) : t = v[5];
            let N = t,
                {
                    data: B
                } = (0, d.x)(O.b, S),
                F = null == S ? null : (0, tz.b)(E ?? null, x ?? M ?? N, B),
                G = (0, d.x)(tL.b, y);
            v[6] !== T ? (n = T.formatMessage(eC.a.headerShare), v[6] = T, v[7] = n) : n = v[7];
            let L = n,
                z = (0, d.x)(null == x ? tL.a : null, y),
                D = null != x || null != z,
                H = null;
            if (w || F?.type === "unavailable") {
                let e;
                v[8] !== T ? (e = T.formatMessage(eC.a.shareDisabledRestricted), v[8] = T, v[9] = e) : e = v[9], H = e
            } else if (_ && !D) {
                let e;
                v[10] !== T ? (e = T.formatMessage(eC.a.shareDisabledStreaming), v[10] = T, v[11] = e) : e = v[11], H = e
            } else if (!C || !D) {
                let e;
                v[12] !== T ? (e = T.formatMessage(eC.a.shareDisabledNotReady), v[12] = T, v[13] = e) : e = v[13], H = e
            }
            let q = null != H || G;
            v[14] !== q ? (o = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: q
            }, v[14] = q, v[15] = o) : o = v[15];
            let W = (0, d.x)(tG.b, o),
                K = "loaded" === P.status && "personal" === P.structure && (null == F || "snapshot" === F.type),
                U = null != H || G;
            v[16] !== U ? (s = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: U
            }, v[16] = U, v[17] = s) : s = v[17];
            let V = (0, d.x)(K ? tG.b : null, s),
                Q = !(0, tN.d)() && !(0, tN.b)(),
                $ = null != H || G;
            v[18] !== $ ? (i = {
                layer: "2296435893",
                parameter: "show_share_text",
                disableExposureLog: $
            }, v[18] = $, v[19] = i) : i = v[19];
            let Y = (0, d.x)(Q ? tG.b : null, i);
            v[20] !== y || v[21] !== N || v[22] !== S || v[23] !== j || v[24] !== x ? (l = () => {
                let e = null == x ? j.get(tL.c, y) : {
                    serverConversationId: x.conversation_id,
                    title: x.title,
                    currentNodeId: x.current_node ?? void 0
                };
                null != e && (0, tD.shareChatGptProjectConversation)(j, e.serverConversationId, e.title ?? "", S, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", x ?? N)
            }, v[20] = y, v[21] = N, v[22] = S, v[23] = j, v[24] = x, v[25] = l) : l = v[25];
            let X = l,
                J = L;
            if (!V && "loaded" === P.status && (null == F || "snapshot" === F.type)) {
                let e;
                v[26] !== P.structure || v[27] !== T ? (e = T.formatMessage("workspace" === P.structure ? eC.a.shareWorkspaceTooltip : eC.a.sharePublicTooltip), v[26] = P.structure, v[27] = T, v[28] = e) : e = v[28], J = e
            }
            let Z = H ?? J,
                ee = null != H || void 0,
                et = !Y,
                en = null == H ? X : void 0;
            return v[29] !== G || v[30] !== W ? (c = !G && (W ? (0, a.jsx)(tB.M, {}) : (0, a.jsx)(tB.L, {})), v[29] = G, v[30] = W, v[31] = c) : c = v[31], v[32] !== Y ? (u = Y && (0, a.jsx)("span", {
                className: "max-sm:hidden @max-2xl/main-titlebar:hidden",
                children: (0, a.jsx)(eb.a, {
                    ...eC.a.headerShare
                })
            }), v[32] = Y, v[33] = u) : u = v[33], v[34] !== G || v[35] !== L || v[36] !== ee || v[37] !== et || v[38] !== en || v[39] !== c || v[40] !== u ? (h = (0, a.jsxs)(tO.a, {
                "aria-disabled": ee,
                "aria-label": L,
                color: "ghostActive",
                loading: G,
                className: "browser:[&_[data-loading-indicator]>svg]:size-6",
                radius: "large",
                size: "toolbar",
                uniform: et,
                onClick: en,
                children: [c, u]
            }), v[34] = G, v[35] = L, v[36] = ee, v[37] = et, v[38] = en, v[39] = c, v[40] = u, v[41] = h) : h = v[41], v[42] !== Z || v[43] !== h ? (p = (0, a.jsx)(tk.a, {
                content: Z,
                children: h
            }), v[42] = Z, v[43] = h, v[44] = p) : p = v[44], v[45] !== y || v[46] !== G || v[47] !== S || v[48] !== H || v[49] !== x ? (m = !1, v[45] = y, v[46] = G, v[47] = S, v[48] = H, v[49] = x, v[50] = m) : m = v[50], v[51] !== p || v[52] !== m ? (g = (0, a.jsxs)(a.Fragment, {
                children: [p, m]
            }), v[51] = p, v[52] = m, v[53] = g) : g = v[53], g
        }(0, tF.a)(async () => () => null);
        var tq = n("TRQ3"),
            tW = n("SZCv"),
            tK = n.n(tW),
            tU = n("XAP6"),
            tV = n("bzoy"),
            tQ = n("LYS1"),
            t$ = n("aZoZ"),
            tY = n("Gv8v"),
            tX = n("EGpF"),
            tJ = n("mTPq"),
            tZ = n("Vcrm"),
            t0 = n("DF0c");
        let t1 = (0, d.d)(eT.a, (e, t) => {
            let {
                get: n
            } = t, a = n(tg.ab, e);
            if (!(0, tg.Bb)(a)) return !0;
            let r = n(tg.N, e),
                o = n(tg.C, e);
            if (null == r || null == o) return !1;
            let s = r[o]?.message;
            if (null == s || tQ.a.has(s.author.role)) return !1;
            let i = n(tg.y, e),
                l = (0, tJ.c)({
                    mapping: r,
                    current_node: o
                }, n(tg.S, e)),
                c = n(tg.db, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(tg.j, e) && !(0, tV.e)(n(tg.p, e)) && null != c && !n(tU.e).has(c) && null != t2(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function t2(e, t) {
            let n = e(tX.a, t),
                a = e(tg.j, t);
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
            no = n("GaCK"),
            ns = n("Dofq"),
            ni = n("VnEZ"),
            nl = n("b7aP");

        function nc(e) {
            let t, n, o, s = (0, r.c)(6);
            s[0] !== e ? ({
                readData: n,
                ...t
            } = e, s[0] = e, s[1] = t, s[2] = n) : (t = s[1], n = s[2]);
            let i = (0, na.b)(),
                [l, c] = (0, g.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), s[3] !== l || s[4] !== t ? (o = null == l ? null : (0, a.jsx)(nl.a, {
                ...t,
                data: l.data
            }), s[3] = l, s[4] = t, s[5] = o) : o = s[5], o
        }

        function nd(e) {
            let t, n, o, s, i, l, c, u, h, p = (0, r.c)(22);
            p[0] !== e ? ({
                controlledState: t,
                display: n,
                ...o
            } = e, p[0] = e, p[1] = t, p[2] = n, p[3] = o) : (t = p[1], n = p[2], o = p[3]);
            let m = (0, d.y)(em.a);
            p[4] !== m ? (s = {
                scope: m,
                layout: "summary"
            }, p[4] = m, p[5] = s) : s = p[5];
            let g = s;
            p[6] !== t?.isOpen || p[7] !== o ? (i = t?.isOpen === !1 ? null : (0, a.jsx)(nc, {
                ...o
            }, o.conversationId), p[6] = t?.isOpen, p[7] = o, p[8] = i) : i = p[8];
            let f = i;
            return p[9] !== g || p[10] !== f ? (l = f && (0, a.jsx)(na.a.PopoverContent, {
                analytics: g,
                children: f
            }), p[9] = g, p[10] = f, p[11] = l) : l = p[11], p[12] !== t || p[13] !== l ? (c = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(nu, {
                    controlledState: t,
                    children: l
                })
            }), p[12] = t, p[13] = l, p[14] = c) : c = p[14], p[15] !== g || p[16] !== f || p[17] !== n ? (u = f && (0, a.jsx)(na.a.Root, {
                analytics: g,
                shouldHideInlineImmediately: n.shouldHideInlineImmediately,
                shouldShow: n.shouldShow,
                children: f
            }), p[15] = g, p[16] = f, p[17] = n, p[18] = u) : u = p[18], p[19] !== c || p[20] !== u ? (h = (0, a.jsxs)(a.Fragment, {
                children: [c, u]
            }), p[19] = c, p[20] = u, p[21] = h) : h = p[21], h
        }

        function nu(e) {
            let t, n, o, s = (0, r.c)(17),
                {
                    children: i,
                    controlledState: l
                } = e,
                c = (0, d.y)(em.a),
                u = (0, g.useContext)(ni.a),
                h = (0, f.a)(),
                p = (0, d.z)(null == l ? e4.M : null);
            s[0] !== l?.isOpen || s[1] !== p ? (t = l?.isOpen ?? (0, e4.y)(p, !0), s[0] = l?.isOpen, s[1] = p, s[2] = t) : t = s[2];
            let m = t,
                v = (0, d.z)(no.b),
                y = l?.isOpen ?? v.isPopoverOpen,
                b = (0, d.x)(nt.f, "togglePinnedSummary");
            (0, eG.b)(c), s[3] !== l || s[4] !== c ? (n = () => {
                null != l ? l.onOpenChange(!l.isOpen) : (0, ns.b)(c)
            }, s[3] = l, s[4] = c, s[5] = n) : n = s[5];
            let x = n;
            return (0, nn.a)("togglePinnedSummary", x), s[6] !== i || s[7] !== u || s[8] !== l || s[9] !== h || s[10] !== m || s[11] !== y || s[12] !== v.displayMode || s[13] !== c || s[14] !== b || s[15] !== x ? (o = (0, a.jsx)(S.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                order: 250,
                unifiedSlotPosition: "threadSummary",
                children: "overlay" === v.displayMode ? (0, a.jsx)(nr.a, {
                    isOpen: y,
                    shouldPreventAutoFocus: l?.shouldPreventAutoFocus,
                    onOpenChange: e => {
                        null != l ? l.onOpenChange(e) : c.set(no.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
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
                    pressed: m,
                    shortcut: b,
                    onClick: x
                })
            }), s[6] = i, s[7] = u, s[8] = l, s[9] = h, s[10] = m, s[11] = y, s[12] = v.displayMode, s[13] = c, s[14] = b, s[15] = x, s[16] = o) : o = s[16], o
        }
        var nh = n("pV06"),
            np = n("MM0V");

        function nm(e) {
            let t, n, o, s, i, l = (0, r.c)(11),
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
            return l[3] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.workOnlyConversion.action",
                defaultMessage: "Convert to Work"
            }), l[3] = o) : o = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (s = (0, a.jsx)(tO.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: o
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = s) : s = l[7], l[8] !== n || l[9] !== s ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(np.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: s
                })
            }), l[8] = n, l[9] = s, l[10] = i) : i = l[10], i
        }
        var ng = n("oGhM"),
            nf = n("fr5e"),
            nv = n("LEgg");
        let ny = (0, tF.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function nb(e) {
            let t, n, o = (0, r.c)(6),
                {
                    conversationId: s,
                    scheduledAutomationId: i
                } = e,
                l = (0, eN.f)("3901104270");
            return o[0] !== s || o[1] !== l || o[2] !== i ? (t = l && null != i ? (0, a.jsx)(ny, {
                conversationId: s,
                automationId: i
            }) : null, o[0] = s, o[1] = l, o[2] = i, o[3] = t) : t = o[3], o[4] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), o[4] = t, o[5] = n) : n = o[5], n
        }
        var nx = n("Bs4i"),
            nC = n("Qgfj"),
            nw = n("rmk3"),
            n_ = n("sqqv"),
            nS = n("fQbA"),
            nj = n("dDDU"),
            nI = n("soaw"),
            nT = n("ZrYB"),
            nP = n("X6Vn"),
            nE = n("Kwur"),
            nA = n("eKlv"),
            nM = n("JCtZ"),
            nR = n("g2p6"),
            nk = n("oaTv"),
            nN = n("PME0"),
            nO = n("lgcP"),
            nB = n("AcSY"),
            nF = n("w7E5"),
            nG = n("xEXG"),
            nL = n("J6LI"),
            nz = n("lUUH"),
            nD = n("ftAl");

        function nH(e) {
            let t, n, o, s = (0, r.c)(17),
                {
                    children: i,
                    conversationId: l,
                    getBaseItems: c,
                    menuTriggerRef: u,
                    navigate: h,
                    onBeforeOpen: p,
                    renderDropdown: m
                } = e,
                g = (0, d.y)(eT.a),
                {
                    data: f
                } = (0, nB.f)(),
                v = (0, nG.b)();
            return s[0] !== f || s[1] !== l || s[2] !== c || s[3] !== u || s[4] !== h || s[5] !== v || s[6] !== g ? (t = () => {
                let e = g.get(nD.a, l, {
                        enabled: !1
                    }),
                    t = (0, t8.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : g.query.getData(O.b, t);
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
                    } = e, c = (0, t8.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(nF.a), u = t.get(e_.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, m = a?.conversation_origin === "tpp" || a?.conversation_origin === "flora", g = "allowed" === s || m && h?.pages.some(e => null != e.cursor) === !0, f = t.get(e_.h, n);
                    return null == o || null == a || t.get(e_.g, n) || (0, nL.c)(a, r).sourceUnavailable || null == (0, nL.b)(t, a, f, !1) || null != c && null == r || null == h || 0 === p && !g ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: nU.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, nz.b)({
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
            }, s[0] = f, s[1] = l, s[2] = c, s[3] = u, s[4] = h, s[5] = v, s[6] = g, s[7] = t) : t = s[7], s[8] !== l || s[9] !== p || s[10] !== g ? (n = async () => {
                await Promise.all([(async () => {
                    let e = g.get(tA.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await g.query.getOrFetch(tA.chatGptConversationQueryById$, l).catch(nK), null == g.query.getData(tA.chatGptConversationQueryById$, l) && await g.query.getOrFetch(e_.j, [l]).catch(nW)
                })(), p?.()]);
                let e = g.get(nD.a, l, {
                    enabled: !1
                });
                (0, t8.a)(e?.gizmo_id) && e?.gizmo_id != null && await g.query.getOrFetch(O.b, e.gizmo_id).catch(nq)
            }, s[8] = l, s[9] = p, s[10] = g, s[11] = n) : n = s[11], s[12] !== i || s[13] !== m || s[14] !== t || s[15] !== n ? (o = (0, a.jsx)(nw.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                renderItem: nS.b,
                renderDropdown: m,
                trigger: "click",
                children: i
            }), s[12] = i, s[13] = m, s[14] = t, s[15] = n, s[16] = o) : o = s[16], o
        }

        function nq() {}

        function nW() {}

        function nK() {}
        let nU = (0, nC.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}"
            }
        });

        function nV(e) {
            let t, o, s, i, l, c, u, h, p, m, y, b, x, _, S, j, T, P = (0, r.c)(68),
                {
                    onTitleClick: E,
                    showMenu: A,
                    triggerButton: M,
                    renderDropdown: R,
                    conversationOrigin: k,
                    conversationId: N,
                    title: O,
                    isHandoffPending: B,
                    isArchived: F,
                    isChatConversation: G,
                    onHandoff: L,
                    onOpenMessage: z,
                    projectId: D,
                    projectName: H,
                    serverConversationId: q
                } = e,
                W = (0, d.y)(em.a),
                K = (0, d.y)(eT.a),
                V = (0, nI.a)(),
                Q = (0, eN.i)();
            P[0] !== Q ? (t = Q.checkGate("224248639"), P[0] = Q, P[1] = t) : t = P[1];
            let $ = t;
            P[2] !== Q ? (o = Q.getLayer("3017902351").get("web_file_library_enabled", !1), P[2] = Q, P[3] = o) : o = P[3];
            let Y = o,
                X = $ || Y;
            P[4] !== X ? (s = {
                enabled: X
            }, P[4] = X, P[5] = s) : s = P[5];
            let {
                data: J
            } = (0, d.z)(nR.p, s), Z = X && J?.fileLibraryEnabledForRegistrationCountry !== !1, ee = (0, f.a)(), et = (0, v._)(), [en, ea] = (0, g.useState)(null), er = (0, g.useRef)(null), eo = (0, g.useRef)(null);
            P[6] === Symbol.for("react.memo_cache_sentinel") ? (i = [], P[6] = i) : i = P[6];
            let es = (0, g.useRef)(i);
            P[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                name: "chatgpt"
            }, P[7] = l) : l = P[7];
            let {
                isCapable: ei
            } = (0, d.x)(C.a, l), el = (0, d.x)(e_.g, q);
            P[8] === Symbol.for("react.memo_cache_sentinel") ? (c = () => ea("shortcut"), P[8] = c) : c = P[8];
            let ec = G && !el;
            P[9] !== W || P[10] !== q ? (u = () => (0, ew.a)(W.query.getData(tA.chatGptConversationQueryById$, q), W.get(I.h), W.get(I.g)), P[9] = W, P[10] = q, P[11] = u) : u = P[11], P[12] !== ec || P[13] !== u ? (h = {
                enabled: ec,
                isActive: u
            }, P[12] = ec, P[13] = u, P[14] = h) : h = P[14], (0, nn.a)("deleteChat", c, h), P[15] !== K || P[16] !== el || P[17] !== et || P[18] !== W || P[19] !== q ? (p = e => {
                !el && (0, ew.a)(W.query.getData(tA.chatGptConversationQueryById$, q), W.get(I.h), W.get(I.g)) && (ea(null), (0, nO.a)(K, q, e), et("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, P[15] = K, P[16] = el, P[17] = et, P[18] = W, P[19] = q, P[20] = p) : p = P[20];
            let ed = p;
            P[21] !== W || P[22] !== q ? (m = async () => {
                let e = [];
                es.current = e, e.push(...await async function(e, t) {
                    let a = await nE.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
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
                                (0, nP.f)(e, r, {
                                    conversationId: t,
                                    sessions: a.av_sessions
                                })
                            })
                        }
                    }] : []
                }(W, q))
            }, P[21] = W, P[22] = q, P[23] = m) : m = P[23];
            let eu = m;
            P[24] !== N || P[25] !== k || P[26] !== Z || P[27] !== ee || P[28] !== el || P[29] !== F || P[30] !== B || P[31] !== V || P[32] !== et || P[33] !== L || P[34] !== z || P[35] !== D || P[36] !== H || P[37] !== W || P[38] !== q || P[39] !== Q || P[40] !== O ? (y = e => {
                let t = W.get(I.f),
                    a = W.get(I.k),
                    r = W.query.getData(tA.chatGptConversationQueryById$, q),
                    o = W.get(I.h),
                    s = W.get(I.g),
                    i = (0, ew.a)(r, o, s),
                    l = (0, nA.b)(W, q),
                    c = !el && (0, ew.a)(l, o, s),
                    d = W.get(w.b).pathname,
                    u = () => V() && d === W.get(w.b).pathname && t === W.get(I.f) && a === W.get(I.k),
                    h = (0, nk.a)(W, N, k, () => (0, nN.a)(et)),
                    p = [];
                return Q.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && p.push({
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
                            u() && e(W, q)
                        }).catch(() => {
                            u() && (er.current?.focus({
                                preventScroll: !0
                            }), W.get(U.f).danger(ee.formatMessage({
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
                            u() && e(W, {
                                conversationId: N,
                                serverConversationId: q,
                                onOpenMessage: z
                            })
                        }).catch(() => {
                            u() && W.get(U.f).danger(ee.formatMessage({
                                id: "chatgptConversations.files.loadPanelError",
                                defaultMessage: "Couldn’t open files in chat"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgptConversations.files.loadPanelError"
                                }
                            })
                        })
                    }
                }), p.push(...(0, nj.a)(W)), (0, nM.a)(W, {
                    organizationItems: (0, nS.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: es.current,
                    viewItems: p,
                    feedbackItems: [],
                    preferenceItems: null == h ? [] : [h],
                    surface: "header",
                    isTitleMenu: !0,
                    conversationId: q,
                    stateConversationId: N,
                    conversationOrigin: k,
                    title: O,
                    isHandoffPending: B,
                    canHandoff: null != L,
                    onHandoff: L,
                    projectId: D,
                    projectName: H,
                    onRename: (0, ew.b)(r, o, s, el) ? () => void(0, nA.renameActiveChatGptConversation)(W, N) : void 0,
                    isPinned: W.get(e_.h, q) ?? l?.is_starred === !0,
                    onTogglePin: c ? () => {
                        let e = (0, nA.b)(W, q);
                        !(null == e || W.get(e_.g, q)) && (0, ew.a)(e, W.get(I.h), W.get(I.g)) && (0, e_.U)({
                            scope: W,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(nQ)
                    } : void 0,
                    onArchive: !i || el || F ? void 0 : () => (0, nT.a)(W, q),
                    onUnarchive: i && !el && F ? () => {
                        (0, e_.V)({
                            scope: W,
                            conversationId: q
                        }).then(() => {
                            W.get(U.f).success(ee.formatMessage(eP.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            W.get(U.f).danger(ee.formatMessage(eC.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !i || el ? void 0 : () => ea("menu")
                })
            }, P[24] = N, P[25] = k, P[26] = Z, P[27] = ee, P[28] = el, P[29] = F, P[30] = B, P[31] = V, P[32] = et, P[33] = L, P[34] = z, P[35] = D, P[36] = H, P[37] = W, P[38] = q, P[39] = Q, P[40] = O, P[41] = y) : y = P[41];
            let eh = y;
            P[42] !== E || P[43] !== O || P[44] !== M ? (b = null == M ? (0, a.jsx)(n_.a, {
                ref: er,
                onActivate: E,
                title: O
            }) : (0, a.jsx)(nx.b, {
                ref: er,
                children: M
            }), P[42] = E, P[43] = O, P[44] = M, P[45] = b) : b = P[45];
            let ep = b;
            P[46] !== eh || P[47] !== ep || P[48] !== et || P[49] !== ei || P[50] !== eu || P[51] !== R || P[52] !== q || P[53] !== A ? (x = A && (ei ? (0, a.jsx)(nH, {
                conversationId: q,
                getBaseItems: eh,
                menuTriggerRef: er,
                navigate: et,
                onBeforeOpen: eu,
                renderDropdown: R,
                children: ep
            }) : (0, a.jsx)(nw.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => eh(),
                onBeforeOpen: eu,
                renderItem: nS.b,
                renderDropdown: R,
                trigger: "click",
                children: ep
            })), P[46] = eh, P[47] = ep, P[48] = et, P[49] = ei, P[50] = eu, P[51] = R, P[52] = q, P[53] = A, P[54] = x) : x = P[54];
            let eg = "shortcut" === en,
                ef = null != en;
            return P[55] !== en ? (_ = () => {
                eo.current = "menu" === en ? er.current : null, ea(null)
            }, P[55] = en, P[56] = _) : _ = P[56], P[57] === Symbol.for("react.memo_cache_sentinel") ? (S = e => {
                let t = eo.current;
                if (eo.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, P[57] = S) : S = P[57], P[58] !== ed || P[59] !== el || P[60] !== eg || P[61] !== ef || P[62] !== _ || P[63] !== O ? (j = (0, a.jsx)(ex.a, {
                allowArtifactDeletion: !0,
                autoFocusConfirm: eg,
                open: ef,
                onOpenChange: _,
                onCloseAutoFocus: S,
                isDeleting: el,
                onConfirm: ed,
                title: O
            }), P[58] = ed, P[59] = el, P[60] = eg, P[61] = ef, P[62] = _, P[63] = O, P[64] = j) : j = P[64], P[65] !== x || P[66] !== j ? (T = (0, a.jsxs)(a.Fragment, {
                children: [x, j]
            }), P[65] = x, P[66] = j, P[67] = T) : T = P[67], T
        }

        function nQ() {}

        function n$(e) {
            let t, n, o, s = (0, r.c)(12),
                {
                    title: i,
                    includePlugins: l,
                    lockdownConversationId: c,
                    triggerButton: u,
                    renderDropdown: h
                } = e,
                p = (0, d.y)(em.a),
                m = (0, v._)();
            return s[0] !== l || s[1] !== c || s[2] !== m || s[3] !== p ? (t = () => {
                let e = null == c ? null : (0, nk.a)(p, c, null, () => (0, nN.a)(m)),
                    t = null == e ? [] : [e];
                return l ? (0, nS.a)(t) : t
            }, s[0] = l, s[1] = c, s[2] = m, s[3] = p, s[4] = t) : t = s[4], s[5] !== i || s[6] !== u ? (n = u ?? (0, a.jsx)(n_.a, {
                title: i
            }), s[5] = i, s[6] = u, s[7] = n) : n = s[7], s[8] !== h || s[9] !== t || s[10] !== n ? (o = (0, a.jsx)(nw.a, {
                preserveBrowserContextMenu: !0,
                getItems: t,
                renderItem: nS.b,
                renderDropdown: h,
                trigger: "click",
                children: n
            }), s[8] = h, s[9] = t, s[10] = n, s[11] = o) : o = s[11], o
        }
        var nY = n("dLcZ"),
            nX = n("UNoV");

        function nJ(e) {
            let t, n = (0, r.c)(2),
                {
                    children: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsx)(S.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                children: (0, a.jsx)("div", {
                    className: nX.a.Progress,
                    children: o
                })
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var nZ = n("NVRI"),
            n0 = n("WLgA");

        function n1(e) {
            let t, n, o = (0, r.c)(9),
                {
                    icon: s,
                    name: i,
                    projectId: l,
                    linkToProject: c
                } = e;
            o[0] !== s || o[1] !== c || o[2] !== i || o[3] !== l ? (t = c && null != i ? (0, a.jsx)(tO.b, {
                "aria-label": i,
                color: "ghostActive",
                size: "toolbar",
                to: (0, n0.c)(l),
                uniform: !0,
                children: s
            }) : null, o[0] = s, o[1] = c, o[2] = i, o[3] = l, o[4] = t) : t = o[4];
            let d = t,
                u = d ?? s,
                h = null != d;
            return o[5] !== i || o[6] !== u || o[7] !== h ? (n = (0, a.jsx)(nZ.b, {
                project: {
                    icon: u,
                    iconInteractive: h,
                    name: i
                }
            }), o[5] = i, o[6] = u, o[7] = h, o[8] = n) : n = o[8], n
        }
        var n2 = n("ftSl"),
            n3 = n("u9Jt"),
            n4 = n("Xoyl");

        function n5(e) {
            let t, n = (0, r.c)(7),
                {
                    hasTitleMenu: o,
                    onClick: s,
                    project: i,
                    title: l
                } = e;
            if (null == l) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(n4.a, {}), n[0] = e) : e = n[0], e
            }
            if (o) {
                let e;
                return n[1] !== s || n[2] !== i || n[3] !== l ? (e = (0, a.jsx)(n3.a, {
                    triggerButton: (0, a.jsx)(n_.a, {
                        onActivate: s,
                        project: i,
                        title: l
                    })
                }), n[1] = s, n[2] = i, n[3] = l, n[4] = e) : e = n[4], e
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
        let ae = (0, d.d)(eT.a, (e, t) => {
            let {
                get: n
            } = t, a = n(n9.b, e);
            if (null != a) return a;
            let r = n(tg.j, e);
            if (null == r) return null;
            let o = n(e_.j, [r], {
                    enabled: !1
                }).data?.[0],
                s = (0, n8.a)(o?.title, o?.mapping);
            if (null != s) return s;
            let i = n(n7.a),
                l = null == i ? null : n(n6.e, {
                    hostId: i,
                    threadId: r
                });
            return l?.sourceKind === "chatgpt" ? (0, n8.c)(l.displayTitle) : null
        });
        var at = n("X0li");
        let an = (0, tF.a)(at.d),
            aa = (0, tF.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            ar = (0, tF.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var ao = n("lX86"),
            as = n("sQ4r"),
            ai = n("on57"),
            al = n("IPUh"),
            ac = n("v7qY"),
            ad = n("wD9O"),
            au = n("jov5"),
            ah = n("Ro2M"),
            ap = n("bN4H"),
            am = n("TS05");

        function ag(e) {
            let t, n, o, s, i = (0, r.c)(12),
                {
                    conversationId: l,
                    entries: c,
                    turnListApi: u
                } = e,
                {
                    key: h,
                    search: p,
                    state: m
                } = (0, v.Y)();
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "automations.cloud.scheduled-tasks"
            }, i[0] = t) : t = i[0];
            let {
                isCapable: g
            } = (0, d.x)(C.a, t);
            if (i[1] !== g || i[2] !== m?.sidebarArea || i[3] !== p) {
                let e = new URLSearchParams(p);
                n = e.get("automationId"), o = m?.sidebarArea === "scheduled" || !g || !n || "finalAgentTurnStart" !== e.get("messageId"), i[1] = g, i[2] = m?.sidebarArea, i[3] = p, i[4] = n, i[5] = o
            } else n = i[4], o = i[5];
            return o ? null : (i[6] !== n || i[7] !== l || i[8] !== c || i[9] !== h || i[10] !== u ? (s = (0, a.jsx)(af, {
                automationId: n,
                conversationId: l,
                entries: c,
                turnListApi: u
            }, h), i[6] = n, i[7] = l, i[8] = c, i[9] = h, i[10] = u, i[11] = s) : s = i[11], s)
        }

        function af(e) {
            let t, n, a, o, s = (0, r.c)(25),
                {
                    automationId: i,
                    conversationId: l,
                    entries: c,
                    turnListApi: u
                } = e,
                h = (0, d.y)(em.a),
                p = (0, v.Y)(),
                m = (0, d.z)(I.f),
                f = (0, d.x)(tg.j, l),
                {
                    data: y
                } = (0, d.x)(ah.e, i),
                b = (0, d.z)(au.a),
                x = (0, g.useRef)(null),
                C = (0, g.useRef)(null);
            s[0] !== c ? (t = c.findLast(ab), s[0] = c, s[1] = t) : t = s[1];
            let w = t;
            s[2] !== m || s[3] !== i || s[4] !== b || s[5] !== w || s[6] !== y || s[7] !== p || s[8] !== h || s[9] !== u ? (n = () => {
                null == y || null == m || (b || x.current === m || (x.current = m, (0, ap.openAutomationSidePanelTab)({
                    scope: h,
                    automationId: i,
                    title: y.automation.title
                })), null != u && null != w && C.current !== m && (C.current = m, u.scrollToKey(w.turnKey, av, {
                    align: "top"
                }).then(() => {
                    h.set(am.a, {
                        locationKey: p.key,
                        accountId: m
                    }, !0)
                })))
            }, s[2] = m, s[3] = i, s[4] = b, s[5] = w, s[6] = y, s[7] = p, s[8] = h, s[9] = u, s[10] = n) : n = s[10];
            let _ = (0, g.useEffectEvent)(n);
            s[11] !== m || s[12] !== l || s[13] !== y?.automation.conversation_id || s[14] !== _ || s[15] !== f ? (a = () => {
                null != m && y?.automation.conversation_id === (f ?? l) && _()
            }, s[11] = m, s[12] = l, s[13] = y?.automation.conversation_id, s[14] = _, s[15] = f, s[16] = a) : a = s[16];
            let S = w?.turnKey,
                j = y?.automation.conversation_id;
            return s[17] !== m || s[18] !== b || s[19] !== l || s[20] !== f || s[21] !== S || s[22] !== j || s[23] !== u ? (o = [m, l, S, j, f, b, u], s[17] = m, s[18] = b, s[19] = l, s[20] = f, s[21] = S, s[22] = j, s[23] = u, s[24] = o) : o = s[24], (0, g.useEffect)(a, o), null
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
            aw = n("Xvoy"),
            a_ = n("WAdu");
        let aS = {
            $type: "protobuf_analytics_events.v1.ChatgptConversationPrintLifecycle"
        };
        var aj = n("jDEJ");
        let aI = (0, d.u)(eT.a, null);

        function aT(e, t) {
            if (!e.get(ec.c).isChatgptBrowserReplacement || t.repeat || ((0, aj.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(aI)) return;
            let n = aE("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(aI, n), aA(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function aP(e, t, n, a) {
            let r = e.get(aI);
            if (!e.get(ec.c).isChatgptBrowserReplacement || null == r) return a();
            let o = n => {
                aA(e, r, n, t)
            };
            o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(aI)?.id !== r.id || e.get(aI)?.printing || e.set(aI, null), a
            }
        }

        function aE(e) {
            let t = performance.now();
            return {
                id: crypto.randomUUID(),
                entryPoint: e,
                startedAt: t,
                printing: !1
            }
        }

        function aA(e, t, n, a) {
            (0, ec.a)(e, aS, {
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
            aN = n("SqqO"),
            aO = n("zHp1"),
            aB = n("taWv");

        function aF() {
            return Object.fromEntries(Array.from(document.images).flatMap(e => {
                if (!e.complete || 0 === e.naturalWidth) return [];
                let t = e.currentSrc || e.src;
                return [e.getAttribute("src"), e.src, t].flatMap(e => e ? [
                    [e, t]
                ] : [])
            }))
        }
        var aG = n("j0nn"),
            aL = n("AO3k"),
            az = n("dPHp"),
            aD = n("X8kv"),
            aH = "printDocument-v_w5Ax";
        let aq = "https://chatgpt.com/download/?utm_source=chatgpt_web&utm_medium=print&utm_campaign=app_install";

        function aW(e) {
            let t, n, o, s, i, l, c, d, u, h, p, m, g = (0, r.c)(22),
                {
                    children: v,
                    title: y
                } = e,
                b = (0, f.a)(),
                {
                    getExperiment: x
                } = (0, eN.h)();
            if (!x("448755449").get("enabled", !1)) {
                let e, t;
                return g[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, ai.b)(aH, "hidden w-full space-y-1.5 bg-surface text-default print:block"), g[0] = e) : e = g[0], g[1] !== v ? (t = (0, a.jsx)("div", {
                    className: e,
                    "data-conversation-print": "",
                    "data-theme": "light",
                    children: v
                }), g[1] = v, g[2] = t) : t = g[2], t
            }
            return g[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, ai.b)(aH, "formattedPrintDocument-tP74Wl", "group/conversation-print hidden w-full bg-surface text-default print:block"), g[3] = t) : t = g[3], g[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(az.a, {
                className: "h-6 w-auto shrink-0"
            }), g[4] = n) : n = g[4], g[5] !== y ? (o = (0, a.jsxs)("header", {
                className: "mb-6 flex items-center justify-between gap-6",
                children: [n, (0, a.jsx)("p", {
                    className: "min-w-0 text-end text-sm wrap-anywhere text-secondary",
                    children: y
                })]
            }), g[5] = y, g[6] = o) : o = g[6], g[7] !== v ? (s = (0, a.jsx)("div", {
                className: "transcript-XHYu34",
                children: v
            }), g[7] = v, g[8] = s) : s = g[8], g[9] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, ai.b)("footer-QEzLbn", "flex items-center gap-3 rounded-2xl border border-default bg-surface-secondary p-2 text-default"), g[9] = i) : i = g[9], g[10] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)("div", {
                className: "flex size-10 shrink-0 items-center justify-center rounded-xl border border-default bg-surface",
                children: (0, a.jsx)(aD.a, {
                    className: "size-7",
                    "aria-hidden": "true"
                })
            }), g[10] = l) : l = g[10], g[11] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)("p", {
                className: "font-semibold",
                children: (0, a.jsx)(eb.a, {
                    id: "chatgpt.print.downloadApp.title",
                    defaultMessage: "Take your curiosity further"
                })
            }), g[11] = c) : c = g[11], g[12] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsxs)("div", {
                className: "min-w-0 flex-1 text-sm",
                children: [c, (0, a.jsx)("p", {
                    className: "mt-1 text-secondary",
                    children: (0, a.jsx)(eb.a, {
                        id: "chatgpt.print.downloadApp.description",
                        defaultMessage: "Scan to get the ChatGPT app"
                    })
                })]
            }), g[12] = d) : d = g[12], g[13] !== b ? (u = b.formatMessage({
                id: "chatgpt.print.downloadApp.qrCode",
                defaultMessage: "Download the ChatGPT app"
            }), g[13] = b, g[14] = u) : u = g[14], g[15] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(eb.a, {
                id: "chatgpt.print.downloadApp.fallback",
                defaultMessage: "Get the app"
            }), g[15] = h) : h = g[15], g[16] !== u ? (p = (0, a.jsxs)("footer", {
                className: i,
                children: [l, d, (0, a.jsx)("a", {
                    className: "shrink-0",
                    href: `${aq}&utm_content=pdf_link`,
                    children: (0, a.jsx)(aL.a, {
                        value: `${aq}&utm_content=qr`,
                        size: "inline",
                        ariaLabel: u,
                        fallback: h
                    })
                })]
            }), g[16] = u, g[17] = p) : p = g[17], g[18] !== p || g[19] !== o || g[20] !== s ? (m = (0, a.jsxs)("div", {
                className: t,
                "data-conversation-print": "",
                "data-print-formatting": "",
                "data-theme": "light",
                children: [o, s, p]
            }), g[18] = p, g[19] = o, g[20] = s, g[21] = m) : m = g[21], m
        }

        function aK(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var aU = n("zn0A"),
            aV = n("jfiJ"),
            aQ = n("FGJH"),
            a$ = n("nmN6");
        let aY = new WeakMap;

        function aX(e) {
            let t, n, o = (0, r.c)(6),
                s = (0, d.z)(aC.a);
            return o[0] !== s || o[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([s, e.entries[0]?.conversationId]), o[0] = s, o[1] = e.entries[0]?.conversationId, o[2] = t) : t = o[2], o[3] !== e || o[4] !== t ? (n = (0, a.jsx)(aJ, {
                ...e
            }, t), o[3] = e, o[4] = t, o[5] = n) : n = o[5], n
        }

        function aJ(e) {
            let t, n, o, s, i, l, c = (0, r.c)(16),
                u = (0, d.y)(em.a),
                h = (0, d.z)(aw.a),
                [p, m] = (0, g.useState)(!1),
                f = (0, g.useRef)(null);
            c[0] !== u ? (t = (e, t) => {
                if (aT(u, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void f.current?.onKeyDown(e, t);
                let n = aY.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, ac.flushSync)(() => m(!0));
                let a = n ?? f.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => aY.get(e)).finally(() => {
                    t.aborted || m(!1)
                })
            }, c[0] = u, c[1] = t) : t = c[1];
            let v = (0, g.useEffectEvent)(t);
            c[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                (0, ac.flushSync)(() => m(!0)), f.current?.onBeforePrint()
            }, c[2] = n) : n = c[2];
            let y = (0, g.useEffectEvent)(n);
            c[3] !== u ? (o = () => {
                u.set(aU.a, null), m(!1)
            }, c[3] = u, c[4] = o) : o = c[4];
            let b = (0, g.useEffectEvent)(o);
            return c[5] !== b || c[6] !== y || c[7] !== v || c[8] !== u ? (s = () => {
                let e, t, n = new AbortController,
                    a = (e = () => {
                        if (!u.get(ec.c).isChatgptBrowserReplacement) return;
                        let e = u.get(aI);
                        if (e?.printing) return;
                        let t = {
                            ...e ?? aE("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_UNOBSERVED"),
                            printing: !0
                        };
                        u.set(aI, t), aA(u, t, "CHATGPT_CONVERSATION_PRINT_STAGE_BEFORE_PRINT")
                    }, t = () => {
                        let e = u.get(aI);
                        u.get(ec.c).isChatgptBrowserReplacement && e?.printing && (aA(u, e, "CHATGPT_CONVERSATION_PRINT_STAGE_AFTER_PRINT"), u.set(aI, null))
                    }, window.addEventListener("beforeprint", e, !0), window.addEventListener("afterprint", t), () => {
                        window.removeEventListener("beforeprint", e, !0), window.removeEventListener("afterprint", t), u.set(aI, null)
                    }),
                    r = e => v(e, n.signal);
                return window.addEventListener("keydown", r, !0), window.addEventListener("beforeprint", y, !0), window.addEventListener("afterprint", b), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), window.removeEventListener("beforeprint", y, !0), window.removeEventListener("afterprint", b), u.set(aU.a, null), a()
                }
            }, c[5] = b, c[6] = y, c[7] = v, c[8] = u, c[9] = s) : s = c[9], c[10] !== u ? (i = [u], c[10] = u, c[11] = i) : i = c[11], (0, g.useEffect)(s, i), c[12] !== h || c[13] !== e || c[14] !== p ? (l = p || h ? (0, a.jsx)(aZ, {
                ...e,
                ref: f,
                printing: h
            }) : null, c[12] = h, c[13] = e, c[14] = p, c[15] = l) : l = c[15], l
        }

        function aZ(e) {
            let t, n, o, s, l = (0, r.c)(19),
                {
                    entries: c,
                    title: u,
                    TurnRowComponent: h,
                    printing: p,
                    ref: m
                } = e,
                f = (0, d.y)(em.a),
                v = (0, g.useContext)(j.a),
                y = (0, g.useContext)(a_.a),
                {
                    getExperiment: b
                } = (0, eN.h)(),
                x = b("448755449", {
                    disableExposureLog: !0
                }).get("enabled", !1);
            l[0] !== c[0]?.conversationId ? (t = c[0]?.conversationId ?? (0, ne.d)(""), l[0] = c[0]?.conversationId, l[1] = t) : t = l[1], l[2] !== v || l[3] !== t ? (n = {
                auth: v,
                conversationId: t
            }, l[2] = v, l[3] = t, l[4] = n) : n = l[4];
            let C = (0, d.x)(null != c[0] && aG.h, n),
                w = (0, d.x)(null == c[0] ? null : tf.e, c[0]?.conversationId ?? "") ?? !0,
                _ = (0, g.useRef)(null),
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
                            let a = e.get(tg.j, n.conversationId);
                            t = {
                                serverId: a,
                                userResolver: (0, aB.c)(void 0, void 0, void 0, e.get(tg.T, n.conversationId) ?? void 0),
                                scopedResolver: (0, aB.c)(a ?? void 0)
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
                            void 0 === t.generatedResolver && (t.generatedResolver = e.get(aB.a, n.conversationId));
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
                                        for (let a of (0, ak.u)(t, e)) {
                                            if (r && (0, aN.d)(a.src)) continue;
                                            let e = a.searchResult?.isProxied && (a.previewSrc === a.searchResult.contentSrc || a.previewSrc === a.searchResult.originalSrc) ? a.src : a.previewSrc;
                                            s.push({
                                                conversationId: n.conversationId,
                                                src: a.src,
                                                previewSrc: null != e && r && (0, aN.d)(e) ? a.src : e
                                            })
                                        }
                            }
                            if (null == o) continue;
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
                        return null != t && (0, aO.h)(t) ? [{
                            src: t,
                            resolver: n
                        }] : []
                    });
                    return {
                        queryKey: ["chatgpt-print-assets", e.get(aC.a), t[0]?.conversationId, a, r, s, c.map(e => {
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
                        staleTime: ez.b.FIVE_MINUTES,
                        refetchOnWindowFocus: !1,
                        retry: !1,
                        queryFn: t => {
                            let {
                                client: a,
                                signal: i,
                                queryKey: l
                            } = t;
                            return aP(e, "CHATGPT_CONVERSATION_PRINT_PREPARATION_IMAGES", i, async () => {
                                let t = {
                                    ...a.getQueryData(l)?.imageSources
                                };
                                for (let e of aR()(c, 6)) i.throwIfAborted(), await Promise.all(e.map(async e => {
                                    let {
                                        src: n,
                                        resolver: r
                                    } = e, o = await (0, aO.a)(a, n, r);
                                    if (i.throwIfAborted(), null != o) {
                                        let e = new Image;
                                        e.referrerPolicy = "no-referrer", e.src = o, await e.decode(), t[n] = o
                                    }
                                }));
                                let d = new Map,
                                    u = s.flatMap(t => {
                                        let n = d.get(t.conversationId);
                                        return (null == n && (n = r || !e.get(aG.h, {
                                            auth: o,
                                            conversationId: t.conversationId
                                        }) && e.get(tf.e, t.conversationId), d.set(t.conversationId, n)), n && (0, aN.d)(t.src)) ? [] : [{
                                            ...t,
                                            previewSrc: n && null != t.previewSrc && (0, aN.d)(t.previewSrc) ? t.src : t.previewSrc
                                        }]
                                    }),
                                    h = n ? t : await async function(e, t, n) {
                                        if (0 === e.length) return t;
                                        let a = aF(),
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
                }(f, c, p, x, "restricted" === y || !C && w, v),
                {
                    data: I,
                    isSuccess: T,
                    isError: P,
                    refetch: E
                } = (0, i.a)(S);
            return l[5] !== S || l[6] !== I || l[7] !== x || l[8] !== T || l[9] !== E || l[10] !== f ? (o = () => ({
                onKeyDown(e, t) {
                    if (!e.defaultPrevented && (!T || !I.complete) && (e.preventDefault(), !e.repeat && _.current !== t)) return _.current = t, E({
                        cancelRefetch: !1
                    }).then(() => {
                        t.aborted || window.print()
                    }).finally(() => {
                        _.current === t && (_.current = null)
                    })
                },
                onBeforePrint() {
                    if (x) {
                        let e = f.queryClient.getQueryData(S.queryKey),
                            t = {
                                ...aF(),
                                ...e?.imageSources
                            };
                        (0, ac.flushSync)(() => f.set(aU.a, t))
                    }
                }
            }), l[5] = S, l[6] = I, l[7] = x, l[8] = T, l[9] = E, l[10] = f, l[11] = o) : o = l[11], (0, g.useImperativeHandle)(m, o), l[12] !== h || l[13] !== c || l[14] !== P || l[15] !== T || l[16] !== p || l[17] !== u ? (s = p ? (0, ac.createPortal)((0, a.jsx)(aW, {
                title: u,
                children: (0, a.jsx)(ni.a, {
                    value: null,
                    children: (0, a.jsx)(a$.a, {
                        value: null,
                        children: T ? c.map(e => {
                            var t;
                            return (0, a.jsx)(h, {
                                entry: {
                                    ...e,
                                    timestampSeparatorAtMs: null,
                                    turn: {
                                        ...t = e.turn,
                                        suppressTurnActions: !0,
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? aK(e) : {
                                            ...e,
                                            items: e.items.map(aK),
                                            activeReasoning: null == e.activeReasoning ? void 0 : aK(e.activeReasoning)
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
                            children: P ? (0, a.jsx)(eb.a, {
                                id: "chatgpt.printAssets.error",
                                defaultMessage: "Some images could not be loaded. Close print and try again."
                            }) : (0, a.jsx)(eb.a, {
                                id: "chatgpt.printAssets.loading",
                                defaultMessage: "Images are still loading. Close print and try again."
                            })
                        })
                    })
                })
            }), document.body) : null, l[12] = h, l[13] = c, l[14] = P, l[15] = T, l[16] = p, l[17] = u, l[18] = s) : s = l[18], s
        }

        function a0(e) {
            let t, n, a, o, s, l, c = (0, r.c)(22),
                {
                    conversationId: u
                } = e,
                h = (0, d.y)(eT.a),
                p = (0, f.a)(),
                m = (0, g.useRef)(null),
                v = (0, d.z)(aC.a),
                y = (0, d.x)(tg.j, u),
                b = (0, d.z)(aQ.b);
            c[0] !== v || c[1] !== y ? (t = ["chatgpt-print-history", v, y], c[0] = v, c[1] = y, c[2] = t) : t = c[2], c[3] !== h || c[4] !== y ? (n = e => {
                let {
                    signal: t
                } = e;
                return aP(h, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != y && await (0, aV.a)(h, y, t), !0))
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
            c[9] !== v || c[10] !== u || c[11] !== p || c[12] !== b || c[13] !== x || c[14] !== h || c[15] !== y ? (o = (e, t) => {
                if (aT(h, e), e.defaultPrevented || null == y || 0 === b || h.get(aQ.c, y)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (m.current?.signal === t) return void aY.set(e, m.current.preparation);
                let n = x({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && h.get(aC.a) === v) {
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
                            predicate: a3
                        }).map(a1)), t.aborted || h.get(aC.a) !== v || window.print()
                    }
                }).finally(() => {
                    m.current?.signal === t && (m.current = null)
                });
                m.current = {
                    signal: t,
                    preparation: n
                }, aY.set(e, n)
            }, c[9] = v, c[10] = u, c[11] = p, c[12] = b, c[13] = x, c[14] = h, c[15] = y, c[16] = o) : o = c[16];
            let C = (0, g.useEffectEvent)(o);
            return c[17] !== C ? (s = () => {
                let e = new AbortController,
                    t = t => C(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, c[17] = C, c[18] = s) : s = c[18], c[19] !== v || c[20] !== y ? (l = [v, y], c[19] = v, c[20] = y, c[21] = l) : l = c[21], (0, g.useEffect)(s, l), null
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
            let t, n, o = (0, r.c)(4),
                {
                    isFetching: s,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, d.z)(!i && a4.a) || s;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again"
            }), o[0] = t) : t = o[0], o[1] !== l || o[2] !== c ? (n = (0, a.jsx)(tO.a, {
                color: "ghost",
                disabled: c,
                onClick: l,
                children: t
            }), o[1] = l, o[2] = c, o[3] = n) : n = o[3], n
        }

        function a6(e) {
            let t, n, o, s = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation"
            }), s[0] = t) : t = s[0], s[1] !== i || s[2] !== l || s[3] !== c ? (n = null != c ? (0, a.jsx)(a5, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, s[1] = i, s[2] = l, s[3] = c, s[4] = n) : n = s[4], s[5] !== n ? (o = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), s[5] = n, s[6] = o) : o = s[6], o
        }
        var a7 = n("FfNP"),
            a8 = n("WVag");
        let a9 = (0, tF.a)(a7.loadEpicChartIndicator);

        function re(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: o
                } = e,
                s = (0, d.x)(a8.a, o),
                [i, l] = (0, g.useState)(!1);
            return i || null == s || l(!0), n[0] !== o || n[1] !== i ? (t = i ? (0, a.jsx)(a9, {
                conversationId: o
            }) : null, n[0] = o, n[1] = i, n[2] = t) : t = n[2], t
        }
        var rt = n("DWXw"),
            rn = n("RGWz"),
            ra = n("QxH2"),
            rr = n("UuVq"),
            ro = n("TwSq"),
            rs = n("l0fK"),
            ri = n("hkBU"),
            rl = n("T1PX"),
            rc = n("guID"),
            rd = n("Mbqw"),
            ru = n("yzQ9"),
            rh = n("Gjet"),
            rp = n("gJe8"),
            rm = n("ASxG"),
            rg = n("lsfk"),
            rf = n("IObw"),
            rv = n("kQNh"),
            ry = n.n(rv),
            rb = n("NkEl"),
            rx = n("FW69"),
            rC = "highlight-x7OnzP",
            rw = "safari-wcvuzB",
            r_ = "block-t7sxyD";
        let rS = "chatgpt-search-result",
            rj = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* rI(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(rj) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let o = RegExp(t.split(/\n+/u).map(ry()).join("\\n*"), "g");
            for (let n = o.exec(r); null != n && n.index < r.length; n = o.exec(r)) {
                let r = n.index;
                o.lastIndex = r + 1;
                let s = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < s);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, s - l.start), rT(c) && ((0, rx.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function rT(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let rP = rm.object({
            chatGptSearchNavigation: rm.object({
                key: rm.string(),
                messageId: rm.string()
            })
        });

        function rE(e) {
            let t, n, a, o, s, i, l, c, u, h, p, m, f = (0, r.c)(50),
                {
                    conversationId: y,
                    entries: b,
                    isConversationFetching: x,
                    turnListApi: C
                } = e,
                w = (0, d.y)(eT.a),
                _ = (0, d.x)(tg.s, y),
                S = (0, rg.b)(),
                j = (0, ad.c)();
            f[0] !== S || f[1] !== j ? (t = e => {
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
                            left: (0, ad.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                        h = (0, ad.b)(s.height, n),
                        p = (0, ad.b)(s.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, S, j)
            }, f[0] = S, f[1] = j, f[2] = t) : t = f[2];
            let I = (0, g.useEffectEvent)(t),
                T = (0, v.Y)(),
                P = (0, v._)(),
                E = new URLSearchParams(T.search),
                A = E.get("messageId") ?? E.get("message"),
                M = rP.safeParse(T.state).data?.chatGptSearchNavigation,
                R = A ?? M?.messageId,
                k = E.get("selectedTextQuery") ?? "",
                N = (0, d.x)(tg.N, y),
                O = !k || null != R && null != N && (N[R]?.message != null || Object.values(N).some(e => e.message?.id === R)),
                B = k || E.get("historySearchQuery") || "",
                F = JSON.stringify([y, null != A ? T.key : M?.key ?? T.key, R]);
            f[3] !== F ? (n = {
                key: F,
                handled: !1,
                positioned: !1
            }, f[3] = F, f[4] = n) : n = f[4];
            let G = (0, g.useRef)(n),
                L = (0, g.useEffectEvent)(e => {
                    G.current.positioned = !0;
                    let t = B.trim().length > 0 ? function(e, t, n) {
                        let a, r, o, s, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            p = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === p.length) return () => {};
                        let m = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(ry()).join("|") : ry()(c), null == c ? "giu" : "gu"),
                            g = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(w);

                        function C() {
                            for (let t of (g = !0, x.disconnect(), clearTimeout(r), null != o && cancelAnimationFrame(o), null != a && CSS.highlights.get(rS) === a && CSS.highlights.delete(rS), e.classList.remove(rC, rw), b)) t.classList.remove(rC, r_)
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
                                for (let e of rI(t, c))
                                    if (!(n++ < l)) {
                                        S.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(rj) != null || u.some(t => {
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), rT(a) && S.push(a)
                                    }
                            }
                            let j = h.flatMap(e => {
                                let {
                                    element: t,
                                    target: n
                                } = e;
                                if ("terms" !== i || "text" === n.highlight || "auto" === n.highlight && S.some(e => t.contains(e.startContainer))) return [];
                                let a = t.getBoundingClientRect();
                                return a.width > 0 && a.height > 0 ? [t] : []
                            });
                            if (0 === S.length && 0 === j.length) {
                                if (d < 800) return void w();
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
                            let P = t instanceof Range ? t.getClientRects()[0] : t.getBoundingClientRect(),
                                E = [P?.top, P?.left, P?.width, P?.height, e.scrollHeight].join(":");
                            if (d < 4e3 && E !== s) {
                                s = E, w();
                                return
                            }
                            if (!v) {
                                v = !0, s = void 0, n?.(t), w();
                                return
                            }
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...S), CSS.highlights.set(rS, a)) : S.length > 0 && j.push(e), e.classList.add(rC), (0, tN.e)() && e.classList.add(rw), j)) t.classList.add(rC, r_), b.add(t);
                            r = setTimeout(C, 3600)
                        }
                        return x.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), _(), C
                    }(e, B, I, k ? "phrase" : "terms", Number(E.get("selectedTextOccurrence"))) : void 0;
                    return null != A && (E.delete("messageId"), E.delete("message"), E.delete("historySearchQuery"), E.delete("selectedTextQuery"), E.delete("selectedTextOccurrence"), P({
                        pathname: T.pathname,
                        search: E.toString(),
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
            f[5] !== y || f[6] !== x || f[7] !== R || f[8] !== F || f[9] !== w || f[10] !== O ? (a = () => {
                if (G.current.key !== F && (G.current = {
                        key: F,
                        handled: !1,
                        positioned: !1
                    }), null != R && !x && O) return w.watch(e => {
                    !G.current.handled && (0, tg.Qb)(e, y, R) && (G.current.handled = !0)
                })
            }, o = [y, x, R, F, w, O], f[5] = y, f[6] = x, f[7] = R, f[8] = F, f[9] = w, f[10] = O, f[11] = a, f[12] = o) : (a = f[11], o = f[12]), (0, g.useLayoutEffect)(a, o), f[13] !== b || f[14] !== R ? (s = null == R ? void 0 : b.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(R)
            }), f[13] = b, f[14] = R, f[15] = s) : s = f[15];
            let z = s;
            f[16] !== T || f[17] !== P || f[18] !== A || f[19] !== M ? (i = () => {
                null == A && null != M && P(T, {
                    replace: !0,
                    preventScrollReset: !0,
                    state: {
                        ...T.state,
                        chatGptSearchNavigation: void 0
                    }
                })
            }, f[16] = T, f[17] = P, f[18] = A, f[19] = M, f[20] = i) : i = f[20];
            let D = (0, g.useEffectEvent)(i);
            if (f[21] !== D || f[22] !== _ || f[23] !== x || f[24] !== z ? (l = () => {
                    !G.current.positioned || null != z || x || _ || D()
                }, f[21] = D, f[22] = _, f[23] = x, f[24] = z, f[25] = l) : l = f[25], f[26] !== _ || f[27] !== x || f[28] !== z ? (c = [_, x, z], f[26] = _, f[27] = x, f[28] = z, f[29] = c) : c = f[29], (0, g.useLayoutEffect)(l, c), f[30] !== R || f[31] !== z?.id || f[32] !== z?.turn || f[33] !== z?.turn.items || f[34] !== z?.turn.items.findIndex || f[35] !== z?.turnKey) {
                let e = z?.turn.items.findIndex(e => "messageId" in e && e.messageId === R || "assistant-message" === e.type && null != R && e.sourceMessageIds?.includes(R)) ?? -1,
                    t = z?.turn.items[e],
                    n = z?.id;
                h = z?.turnKey, u = null == t || null == n ? void 0 : (0, rf.b)(t, e, n), f[30] = R, f[31] = z?.id, f[32] = z?.turn, f[33] = z?.turn.items, f[34] = z?.turn.items.findIndex, f[35] = z?.turnKey, f[36] = u, f[37] = h
            } else u = f[36], h = f[37];
            let H = u;
            return f[38] !== L || f[39] !== R || f[40] !== h || f[41] !== C || f[42] !== H ? (p = () => {
                let e;
                if (null == h || null == C) return;
                let t = new AbortController,
                    n = null;
                return C.scrollToKey(h, e => n = (null == R ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(R)}"]`)) ?? (null == H ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(H)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = L(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, f[38] = L, f[39] = R, f[40] = h, f[41] = C, f[42] = H, f[43] = p) : p = f[43], f[44] !== R || f[45] !== F || f[46] !== h || f[47] !== C || f[48] !== H ? (m = [F, R, h, C, H], f[44] = R, f[45] = F, f[46] = h, f[47] = C, f[48] = H, f[49] = m) : m = f[49], (0, g.useLayoutEffect)(p, m), null
        }
        var rA = n("ESlL"),
            rM = n("Ppno"),
            rR = n("lA5q"),
            rk = n("wDWo"),
            rN = n("IgxH"),
            rO = n("iaTG"),
            rB = n("c3f5"),
            rF = n("XpUB"),
            rG = n("xAIC"),
            rL = n("if6d"),
            rz = n("Sd8U");
        let rD = (0, d.t)("ChatGptTranscriptScope", {
            parent: rz.a,
            key: e => e.presentation
        });
        var rH = n("r2mP"),
            rq = n("FGGA"),
            rW = n("piw0"),
            rK = n("RADZ"),
            rU = n("rZzh"),
            rV = n("k4pC");

        function rQ(e) {
            let t, n, o, s, i, l, c, u, h, p, m = (0, r.c)(57),
                {
                    entry: g,
                    renderMcpApps: f,
                    trackShownImpressions: v
                } = e,
                y = void 0 === f || f,
                b = void 0 === v || v,
                x = (0, d.y)(eT.a);
            m[0] !== g.conversationId ? (t = (0, eg.o)({
                routeKind: "chatgpt-thread",
                conversationId: g.conversationId
            }), m[0] = g.conversationId, m[1] = t) : t = m[1];
            let C = (0, d.x)(b ? ee.c : null, t),
                w = b && null == C,
                _ = (0, d.x)(g.isMostRecentTurn ? rU.e : null, g.conversationId);
            m[2] !== g.timestampSeparatorAtMs ? (n = null == g.timestampSeparatorAtMs ? null : (0, a.jsx)(rH.b, {
                sentAtMs: g.timestampSeparatorAtMs
            }), m[2] = g.timestampSeparatorAtMs, m[3] = n) : n = m[3];
            let S = null != g.paragen;
            m[4] !== g.branchingMessageId || m[5] !== g.browserConversationId || m[6] !== g.conversationId || m[7] !== g.dilEditDisclosure || m[8] !== g.enableCloudBrowserActivity || m[9] !== g.feedbackEnabled || m[10] !== g.hasLaterSitesPreview || m[11] !== g.id || m[12] !== g.isMostRecentTurn || m[13] !== g.isReadOnly || m[14] !== g.isTemporaryChat || m[15] !== g.isWorkConversation || m[16] !== g.onEditUserMessage || m[17] !== g.onFork || m[18] !== g.onRegenerateResponse || m[19] !== g.pendingSubmissionAttachments || m[20] !== g.readAloudEnabled || m[21] !== g.referenceImageSuggestionActionInput || m[22] !== g.safetyReview || m[23] !== g.shareEnabled || m[24] !== g.turn || m[25] !== y || m[26] !== w || m[27] !== S ? (o = (0, a.jsx)(rW.a, {
                dilEditDisclosure: g.dilEditDisclosure,
                browserConversationId: g.browserConversationId,
                conversationId: g.conversationId,
                enableCloudBrowserActivity: g.enableCloudBrowserActivity,
                branchingMessageId: g.branchingMessageId,
                hasLaterSitesPreview: g.hasLaterSitesPreview,
                hostId: ef.a,
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
            }), m[4] = g.branchingMessageId, m[5] = g.browserConversationId, m[6] = g.conversationId, m[7] = g.dilEditDisclosure, m[8] = g.enableCloudBrowserActivity, m[9] = g.feedbackEnabled, m[10] = g.hasLaterSitesPreview, m[11] = g.id, m[12] = g.isMostRecentTurn, m[13] = g.isReadOnly, m[14] = g.isTemporaryChat, m[15] = g.isWorkConversation, m[16] = g.onEditUserMessage, m[17] = g.onFork, m[18] = g.onRegenerateResponse, m[19] = g.pendingSubmissionAttachments, m[20] = g.readAloudEnabled, m[21] = g.referenceImageSuggestionActionInput, m[22] = g.safetyReview, m[23] = g.shareEnabled, m[24] = g.turn, m[25] = y, m[26] = w, m[27] = S, m[28] = o) : o = m[28], m[29] !== g.conversationId || m[30] !== g.isTemporaryChat || m[31] !== g.isWorkConversation || m[32] !== g.paragen || m[33] !== y || m[34] !== w ? (s = null == g.paragen ? null : (0, a.jsx)(rK.a, {
                renderMcpApps: y,
                comparison: g.paragen,
                conversationId: g.conversationId,
                hostId: ef.a,
                isTemporaryChat: g.isTemporaryChat,
                isWorkConversation: g.isWorkConversation,
                trackTaskViews: w
            }, g.paragen.promptMessageId), m[29] = g.conversationId, m[30] = g.isTemporaryChat, m[31] = g.isWorkConversation, m[32] = g.paragen, m[33] = y, m[34] = w, m[35] = s) : s = m[35], m[36] !== g.showSharedConversationPrivateDisclaimer ? (i = g.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(K.a, {
                    className: "shrink-0",
                    legacyIcon: rq.a,
                    asset16: rV.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(eb.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you"
                })]
            }) : null, m[36] = g.showSharedConversationPrivateDisclaimer, m[37] = i) : i = m[37], m[38] !== g || m[39] !== _ || m[40] !== x || m[41] !== w ? (l = g.isMostRecentTurn ? (0, a.jsx)(rA.a, {
                conversationId: g.conversationId,
                errorMessage: g.errorMessage,
                isWorkConversation: g.isWorkConversation,
                onRetry: null == g.onRegenerateResponse || null == _ ? void 0 : async e => {
                    let t = x.get(rU.e, g.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = x.get(tg.V, g.conversationId)?.metadata?.errorCode;
                    (0, t4.d)(x.get(ec.c).logProductEvent, {
                        conversationId: x.get(tg.j, g.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await g.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, rU.f)(t.message, x.get(tS.v, g.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                showPendingLoadingMessage: g.showPendingLoadingMessage,
                showRequestUserInputStatus: g.showRequestUserInputStatus,
                trackShownImpressions: w,
                useDefaultModel: _?.useDefaultModel,
                isRetryDisabled: _?.isRetryDisabled
            }) : null, m[38] = g, m[39] = _, m[40] = x, m[41] = w, m[42] = l) : l = m[42], m[43] !== o || m[44] !== s || m[45] !== i || m[46] !== l ? (c = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [o, s, i, l]
            }), m[43] = o, m[44] = s, m[45] = i, m[46] = l, m[47] = c) : c = m[47], m[48] !== g.id || m[49] !== c || m[50] !== n ? (u = (0, a.jsxs)("div", {
                "data-content-search-turn-key": g.id,
                children: [n, c]
            }), m[48] = g.id, m[49] = c, m[50] = n, m[51] = u) : u = m[51];
            let j = u;
            return m[52] !== g.dilVisualSlotId ? (h = null != g.dilVisualSlotId && (0, a.jsx)("div", {
                "data-dil-anchor-spacer": "",
                "aria-hidden": "true"
            }), m[52] = g.dilVisualSlotId, m[53] = h) : h = m[53], m[54] !== j || m[55] !== h ? (p = (0, a.jsxs)(a.Fragment, {
                children: [h, j]
            }), m[54] = j, m[55] = h, m[56] = p) : p = m[56], p
        }

        function r$(e) {
            let t, n, o, s = (0, r.c)(6);
            s[0] !== e ? ({
                renderMcpApps: n,
                ...t
            } = e, s[0] = e, s[1] = t, s[2] = n) : (t = s[1], n = s[2]);
            let i = void 0 === n || n,
                l = (0, d.y)(rD),
                c = i && l.value.rendersWidgets;
            return s[3] !== t || s[4] !== c ? (o = (0, a.jsx)(rQ, {
                ...t,
                renderMcpApps: c
            }), s[3] = t, s[4] = c, s[5] = o) : o = s[5], o
        }

        function rY(e) {
            let t, n, o, s, i, l, c, u = (0, r.c)(17),
                {
                    entries: h,
                    historyLoader: p,
                    isVisible: m,
                    rendersWidgets: f,
                    onVisibilityChange: v
                } = e;
            u[0] !== m || u[1] !== v ? (t = () => (v(m), () => v(!1)), n = [m, v], u[0] = m, u[1] = v, u[2] = t, u[3] = n) : (t = u[2], n = u[3]), (0, g.useLayoutEffect)(t, n), u[4] !== f ? (o = {
                presentation: "floating",
                rendersWidgets: f
            }, u[4] = f, u[5] = o) : o = u[5];
            let y = m ? p : null;
            return u[6] !== h ? (s = (0, a.jsx)(rL.b, {
                entries: h,
                preserveMeasuredTurnViewport: !0,
                RowComponent: rX
            }), u[6] = h, u[7] = s) : s = u[7], u[8] !== y || u[9] !== s ? (i = (0, a.jsx)(ni.a, {
                value: null,
                children: (0, a.jsxs)(a$.a, {
                    value: null,
                    children: [y, s]
                })
            }), u[8] = y, u[9] = s, u[10] = i) : i = u[10], u[11] !== m || u[12] !== i ? (l = (0, a.jsx)(rh.a, {
                active: m,
                presentation: "panel",
                children: i
            }), u[11] = m, u[12] = i, u[13] = l) : l = u[13], u[14] !== o || u[15] !== l ? (c = (0, a.jsx)(d.b, {
                scope: rD,
                value: o,
                children: l
            }), u[14] = o, u[15] = l, u[16] = c) : c = u[16], c
        }

        function rX(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsx)(r$, {
                entry: {
                    ...o,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    readAloudEnabled: !1
                },
                trackShownImpressions: !1
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var rJ = n("qZWE"),
            rZ = n("IBS2"),
            r0 = n("PC5z"),
            r1 = n("lZ4W"),
            r2 = n("ihvi"),
            r3 = n("jCHb"),
            r4 = n("nMdB"),
            r5 = n("KFm7"),
            r6 = n("uYx2"),
            r7 = "pending-fxATqK";
        let r8 = "[data-d-component]:not([data-d-text-flow])";
        class r9 extends g.Component {
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
                this.pendingVisual?.classList.remove(r7), this.pendingVisual = void 0
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
                let r = a.querySelector(r8) ?? a,
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
            revealRequest(e) {
                if (this.revealed || this.props.active || !this.props.replyPending) return;
                this.pendingVisual || (this.pendingVisual = e.element, this.pendingVisual.classList.add(r7));
                let t = this.requestingBubble(e);
                if (!t) return;
                let n = t.getBoundingClientRect();
                if (0 === n.height) return;
                this.revealed = !0;
                let a = e.scrollElement.getBoundingClientRect(),
                    r = a.bottom - (0, r5.b)(e.scrollElement) * this.context,
                    o = Math.min(n.bottom - r, n.top - a.top);
                if (o < 1) return;
                let s = e.top - o;
                if (this.props.reducedMotion) {
                    e.top = s, this.restore(e);
                    return
                }
                this.stopLayoutCorrection?.(), this.stopLayoutCorrection = void 0, this.revealMotion = (0, r3.a)(e.top, s, {
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
                e.body.isConnected || (e.body = e.element.querySelector(r8) ?? e.element);
                let a = () => (0, ad.b)(e.body.getBoundingClientRect().top - e.top, this.context),
                    r = a();
                if (!(1 > Math.abs(r))) {
                    if (this.held) {
                        let t = e.element.closest("[data-turn-key]")?.querySelector("[data-dil-anchor-spacer]");
                        if (t) {
                            let n = parseFloat(t.style.height) || 0,
                                o = n + Math.max(0, -r - e.scrollElement.scrollTop) - Math.min(n, Math.max(0, r));
                            o !== n && (t.style.height = `${o}px`, r = a())
                        }
                    }
                    this.held && r > 0 && this.props.ensureScrollRoomForAnchor?.(r), n.holdViewport(), n.compensateScrollToDistanceFromBottomPx(Math.max(0, (0, r6.b)(e.scrollElement) - r)), t && (this.stopLayoutCorrection?.(), this.stopLayoutCorrection = (0, r4.a)(e.body, this.context))
                }
            }
            render() {
                return this.shouldAnimateFold() ? this.presented.children : this.props.children
            }
        }
        var oe = n("aRto"),
            ot = n("WWSI"),
            on = n("U3Gy"),
            oa = n("mKTJ");
        let or = (0, d.c)(eg.a, e => {
                let {
                    get: t
                } = e;
                return t(rJ.m)
            }, {
                isEqual: tK()
            }),
            oo = (0, d.c)(eg.a, e => {
                let {
                    get: t
                } = e;
                return t(r0.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function os(e) {
            let t, n, o, s, i, l, c, u, h, p, m, f = (0, r.c)(50),
                {
                    conversationId: y,
                    entries: b,
                    viewportRef: x,
                    isTurnActive: C,
                    isInlinePreview: w,
                    readingPosition: _,
                    onVisibleContentReady: S,
                    responseSpacerState: j
                } = e,
                I = (0, d.z)(_.restoreState$),
                {
                    sharedConversationId: T
                } = (0, v.cb)(),
                P = (0, d.z)(null != T && "u" > typeof Element && "function" != typeof Element.prototype.moveBefore ? or : null),
                E = (0, d.z)(oo),
                A = (0, rg.b)(),
                M = (0, g.useContext)(rZ.a);
            f[0] !== M || f[1] !== w || f[2] !== _ || f[3] !== A ? (t = () => {
                if (null != M && !w) return M(() => _.captureBeforeHide(A))
            }, n = [M, w, _, A], f[0] = M, f[1] = w, f[2] = _, f[3] = A, f[4] = t, f[5] = n) : (t = f[4], n = f[5]), (0, g.useLayoutEffect)(t, n), f[6] !== _ || f[7] !== A ? (o = () => _.restoreReadingPosition(A), f[6] = _, f[7] = A, f[8] = o) : o = f[8];
            let R = (0, eq.a)(o),
                [k, N] = (0, g.useState)(oc);
            f[9] !== x ? (s = (e, t) => {
                x.current?.releaseForHistoryToggle(), N(n => {
                    let a = new Map(n);
                    return a.get(e) === t ? a.delete(e) : a.set(e, t), a
                })
            }, f[9] = x, f[10] = s) : s = f[10];
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
                }(b, k, (0, eq.a)(s)),
                B = b.findLastIndex(ol),
                F = b[B]?.dilVisualSlotId,
                G = (0, rl.a)(null != F),
                L = b[B]?.turn.items[0];
            f[11] !== b || f[12] !== j?.voiceAutoScrollEnabled || f[13] !== F ? (i = null != F || j?.voiceAutoScrollEnabled ? b.findLastIndex(od) : -1, f[11] = b, f[12] = j?.voiceAutoScrollEnabled, f[13] = F, f[14] = i) : i = f[14];
            let z = i,
                D = b[z],
                H = B > z;
            f[15] !== b ? (l = e => {
                let t = b.find(t => t.turn.items.some(t => "chatgpt-writing-block-patch" === t.type && t.messageId === e.messageId)),
                    n = t?.turnKey ?? b.find(t => {
                        let {
                            id: n
                        } = t;
                        return n === e.turnId
                    })?.turnKey;
                return null == n ? [] : [n]
            }, f[15] = b, f[16] = l) : l = f[16];
            let q = E.flatMap(l),
                W = (0, g.useContext)(oe.a),
                K = b.at(-1),
                U = C || K?.turn.status === "in_progress";
            if (W?.aboveComposer != null && null != K && q.push(K.turnKey), null != T && P?.size)
                for (let e of b) e.turn.items.flatMap(oi).some(e => "chatgpt-hosted-widget" === e.type && (0, oa.h)(e) && P.has((0, oa.e)(T, e.messageId))) && q.push(e.turnKey);
            let V = null == F ? void 0 : O.find(e => e.dilEditDisclosure?.slotId === F);
            V && q.push(V.turnKey, b[B].turnKey);
            let Q = H ? V : void 0;
            null != D && (j?.voiceAutoScrollEnabled || null != F && !H && U) && q.push(D.turnKey);
            let $ = (0, d.x)(r2.b, y),
                Y = null == $ ? void 0 : b.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes($)
                }),
                X = null == Y ? void 0 : (0, r2.a)(Y.turn.items);
            (0, d.x)(r1.a, null == X ? null : {
                conversationId: y,
                userMessageId: X,
                steeredPromptId: Y === K ? $ : void 0
            }) && null != Y && q.push(Y.turnKey);
            let J = (0, d.x)(on.b, y);
            f[17] === Symbol.for("react.memo_cache_sentinel") ? (c = (e, t, n) => "adjacent-user-prompts" === (0, tM.d)(n[t - 1], e) ? {
                ...e,
                gapBeforePx: 4
            } : e, f[17] = c) : c = f[17];
            let Z = (0, ot.a)(O, J, y).map(c),
                ee = D?.turnKey,
                et = L?.type === "assistant-message" ? L.messageId : void 0,
                en = j?.ensureScrollRoomForAnchor,
                ea = K?.hasStreamingFinalText === !0,
                er = K?.streamingDilFinalId,
                eo = j?.getHeightPx,
                es = Q?.turnKey,
                ei = Q?.dilEditDisclosure?.count,
                el = Q?.turnKey ?? (null != F || j?.voiceAutoScrollEnabled ? D?.turnKey : void 0);
            f[18] !== j || f[19] !== x ? (u = (e, t) => {
                j?.onTurnLayoutReady(e, t), x.current?.restoreAfterMeasurement()
            }, f[18] = j, f[19] = x, f[20] = u) : u = f[20], f[21] !== j ? (h = e => {
                let {
                    heightDeltaPx: t
                } = e;
                j?.consumeGrowth(t ?? 0)
            }, f[21] = j, f[22] = h) : h = f[22];
            let ec = null == M || w ? void 0 : _.onRestoreStateChange;
            return f[23] !== I || f[24] !== S || f[25] !== _.onApiChange || f[26] !== R || f[27] !== q || f[28] !== eo || f[29] !== es || f[30] !== ei || f[31] !== el || f[32] !== u || f[33] !== h || f[34] !== ec || f[35] !== Z ? (p = (0, a.jsx)(rL.b, {
                entries: Z,
                getBottomScrollPaddingPx: eo,
                synchronousMeasurementTurnKey: es,
                latestTurnSynchronousMeasurementKey: ei,
                layoutReadyTurnKey: el,
                onTurnLayoutReady: u,
                onLatestTurnHeightChange: h,
                initialRestoreState: I,
                onRestoreStateChange: ec,
                onApiChange: _.onApiChange,
                restoreScrollDistanceFromBottomPx: R,
                onVisibleContentReady: S,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: q,
                RowComponent: r$
            }), f[23] = I, f[24] = S, f[25] = _.onApiChange, f[26] = R, f[27] = q, f[28] = eo, f[29] = es, f[30] = ei, f[31] = el, f[32] = u, f[33] = h, f[34] = ec, f[35] = Z, f[36] = p) : p = f[36], f[37] !== H || f[38] !== G || f[39] !== U || f[40] !== A || f[41] !== et || f[42] !== en || f[43] !== ea || f[44] !== er || f[45] !== p || f[46] !== ee || f[47] !== x || f[48] !== F ? (m = (0, a.jsx)(r9, {
                ref: x,
                exchangeKey: ee,
                visualId: F,
                visualOwnerId: et,
                active: H,
                ensureScrollRoomForAnchor: en,
                hasStreamingFinalText: ea,
                streamingDilFinalId: er,
                replyPending: U,
                reducedMotion: G,
                scrollController: A,
                children: p
            }), f[37] = H, f[38] = G, f[39] = U, f[40] = A, f[41] = et, f[42] = en, f[43] = ea, f[44] = er, f[45] = p, f[46] = ee, f[47] = x, f[48] = F, f[49] = m) : m = f[49], m
        }

        function oi(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function ol(e) {
            return null != e.dilVisualSlotId
        }

        function oc() {
            return new Map
        }

        function od(e) {
            return e.turn.items.some(e => "user-message" === e.type)
        }
        var ou = n("Ipgw"),
            oh = n("SBcL");

        function op(e) {
            let t, n, o, s, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, d.y)(eT.a),
                u = (0, f.a)(),
                h = (0, eD.a)(),
                p = (0, d.x)(tg.ab, l),
                m = (0, d.x)(tg.db, l),
                v = (0, d.x)(tg.w, l),
                y = (0, d.x)(tg.cb, l),
                b = (0, g.useRef)(null),
                x = (0, g.useRef)(null);
            i[0] !== v || i[1] !== l || i[2] !== u || i[3] !== m || i[4] !== c || i[5] !== p || i[6] !== y ? (t = () => {
                let e = b.current;
                if (null == e) return;
                let t = x.current;
                if ((0, tg.Bb)(p)) {
                    e.textContent = "", x.current = {
                        conversationId: l,
                        requestId: m ?? ("active-async-turn" === p || "active-tpp-turn" === p ? v?.requestId : null) ?? (t?.conversationId === l ? t.requestId : null)
                    };
                    return
                }
                y || (x.current = null, t?.conversationId === l && "idle" === p && v?.result === "completed" && v.requestId === t.requestId && null == c.get(tg.D, l) && (e.textContent = u.formatMessage({
                    id: "chatgptConversations.responseComplete",
                    defaultMessage: "Response complete"
                })))
            }, i[0] = v, i[1] = l, i[2] = u, i[3] = m, i[4] = c, i[5] = p, i[6] = y, i[7] = t) : t = i[7];
            let C = (0, g.useEffectEvent)(t);
            return (i[8] !== C ? (n = () => {
                C()
            }, i[8] = C, i[9] = n) : n = i[9], i[10] !== v || i[11] !== l || i[12] !== h || i[13] !== m || i[14] !== p || i[15] !== y ? (o = [l, p, m, v, y, h], i[10] = v, i[11] = l, i[12] = h, i[13] = m, i[14] = p, i[15] = y, i[16] = o) : o = i[16], (0, g.useEffect)(n, o), h) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, ac.createPortal)((0, a.jsx)("span", {
                ref: b,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = s) : s = i[17], s) : null
        }
        var om = n("JlMc"),
            og = n("TUMj"),
            of = n("pgeU");
        let ov = (0, tF.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function oy(e) {
            let t, n, o, s = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, d.y)(eT.a),
                c = (0, d.x)(of.a, i);
            return s[0] !== i || s[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(of.a, i);
                        null != e && (0, of.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], s[0] = i, s[1] = l, s[2] = t, s[3] = n) : (t = s[2], n = s[3]), (0, g.useEffect)(t, n), s[4] !== i || s[5] !== c ? (o = null == c ? null : (0, a.jsx)(ov, {
                conversationId: i,
                effect: c
            }, c.id), s[4] = i, s[5] = c, s[6] = o) : o = s[6], o
        }
        var ob = n("Pyg2"),
            ox = n("ZIh4"),
            oC = n("nKJ6"),
            ow = n("AoaR"),
            o_ = n("fDfx"),
            oS = n("Xslx"),
            oj = n("EEop"),
            oI = n("bxvp"),
            oT = n("VBQS"),
            oP = n("hsIu");
        let oE = (0, d.d)(eT.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(oI.c) || null == n(I.f) || null == n(I.k)) return null;
            let {
                data: a,
                isError: r
            } = n(oP.b);
            if (r || a?.project_id !== e) return null;
            let {
                data: o,
                isError: s
            } = n(oj.l, (0, oT.a)());
            return s ? null : (0, oT.b)(o)
        });
        var oA = n("FmJi"),
            oM = n("sIex"),
            oR = n("Z2JT"),
            ok = n("Fjd0"),
            oN = n("VPBa"),
            oO = n("PWXi"),
            oB = n("HgLj"),
            oF = n("hNLE"),
            oG = n("f6KK"),
            oL = n("JPXZ"),
            oz = n("zWHk");

        function oD(e) {
            let t, n, a, o, s, i, l, c = (0, r.c)(34),
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
            let m = n,
                f = h.key,
                y = (0, g.useRef)(null);
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
            let b = (0, g.useEffectEvent)(a);
            return c[10] !== b || c[11] !== d || c[12] !== u || c[13] !== f || c[14] !== t ? (o = () => {
                if (!u && t && y.current !== f) return (0, oz.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(f) && b(!1)
                })
            }, c[10] = b, c[11] = d, c[12] = u, c[13] = f, c[14] = t, c[15] = o) : o = c[15], c[16] !== d || c[17] !== u || c[18] !== f || c[19] !== t ? (s = [d, u, f, t], c[16] = d, c[17] = u, c[18] = f, c[19] = t, c[20] = s) : s = c[20], (0, g.useLayoutEffect)(o, s), c[21] !== b || c[22] !== d || c[23] !== u || c[24] !== f || c[25] !== t || c[26] !== m ? (i = () => {
                if (!u || !t || y.current === f) return;
                y.current = f;
                let e = d.consumeLocationPromptPrefill(f);
                if (b(e), !e) return;
                let {
                    view: n
                } = d, a = t.replace(/\r\n/g, "\n"), r = "codex-app" === m ? (0, oL.f)({
                    schema: n.state.schema,
                    text: a,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, oL.e)({
                    schema: n.state.schema,
                    text: a
                }), o = n.state.tr.replaceWith(0, n.state.doc.content.size, r.content);
                o.setSelection(oG.h.atEnd(o.doc)), n.dispatch(o)
            }, c[21] = b, c[22] = d, c[23] = u, c[24] = f, c[25] = t, c[26] = m, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== f || c[31] !== t || c[32] !== m ? (l = [d, u, f, t, m], c[28] = d, c[29] = u, c[30] = f, c[31] = t, c[32] = m, c[33] = l) : l = c[33], (0, g.useLayoutEffect)(i, l), null
        }
        var oH = n("a4V1"),
            oq = n("KidQ");
        let oW = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function oK(e) {
            let t, n, o, s, i, l = (0, r.c)(15),
                {
                    children: c,
                    draftKey: u,
                    enableInlineSystemHints: h
                } = e,
                p = (0, d.y)(eT.a),
                m = (0, g.useContext)(oM.a),
                f = h ? "chatgpt" : void 0;
            return l[0] !== h || l[1] !== f ? (t = {
                enableInlineSystemHints: h,
                variant: f
            }, l[0] = h, l[1] = f, l[2] = t) : t = l[2], l[3] !== u || l[4] !== p ? (n = () => ({
                defaultText: p.get(tS.u, u),
                defaultTextKind: "prompt"
            }), l[3] = u, l[4] = p, l[5] = n) : n = l[5], l[6] !== m ? (o = () => {
                let e = m?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == m ? null : {
                    element: e,
                    locationKey: m.locationKey
                }
            }, l[6] = m, l[7] = o) : o = l[7], l[8] !== c ? (s = e => null == e ? null : c(e), l[8] = c, l[9] = s) : s = l[9], l[10] !== t || l[11] !== n || l[12] !== o || l[13] !== s ? (i = (0, a.jsx)(oq.a, {
                controllerOptions: oW,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: o,
                children: s
            }), l[10] = t, l[11] = n, l[12] = o, l[13] = s, l[14] = i) : i = l[14], i
        }
        var oU = n("wnpN"),
            oV = n("rcFj"),
            oQ = n("vpdG"),
            o$ = n("V8xe");

        function oY(e) {
            let t, n, o, s = (0, r.c)(11),
                i = (0, g.useContext)(oM.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return s[0] !== e ? (t = (0, a.jsx)(oX, {
                    ...e
                }), s[0] = e, s[1] = t) : t = s[1], t
            }
            s[2] !== e.conversationId || s[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, s[2] = e.conversationId, s[3] = e.isImageEditComposer, s[4] = t) : t = s[4];
            let l = !e.isWorkConversation;
            return s[5] !== e ? (n = t => (0, a.jsx)(oX, {
                ...e,
                initialController: t
            }), s[5] = e, s[6] = n) : n = s[6], s[7] !== t || s[8] !== l || s[9] !== n ? (o = (0, a.jsx)(oK, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), s[7] = t, s[8] = l, s[9] = n, s[10] = o) : o = s[10], o
        }

        function oX(e) {
            let t, n, o, s, i, l, c, u, h, p, m, y, b, x, C, w, _, S, j, I = (0, r.c)(84),
                {
                    composerRef: T,
                    initialController: P,
                    ...E
                } = e,
                A = (0, d.y)(em.a),
                M = (0, d.x)(ox.d, E.isTemporaryChat),
                {
                    conversationId: R,
                    isFullscreenComposer: k
                } = E,
                N = (0, f.a)(),
                {
                    state: O
                } = (0, v.Y)(),
                B = (0, d.x)(tI, R),
                F = (0, d.x)(tg.T, R),
                G = !(!E.disabled && !E.isSharedConversation && !E.isWorkConversation && !E.isTemporaryChat && !E.isImageEditComposer && (0, t8.a)(F)) ? null : F,
                L = (0, d.x)(null == E.requiredSystemHints ? oE : null, G);
            I[0] !== L || I[1] !== E.requiredSystemHints ? (t = E.requiredSystemHints ?? (null == L ? void 0 : [L]), I[0] = L, I[1] = E.requiredSystemHints, I[2] = t) : t = I[2];
            let z = t;
            I[3] !== L || I[4] !== R || I[5] !== A ? (n = () => {
                if (null != L) {
                    let e, t;
                    return e = (0, oS.b)(A, R, [L]), t = (0, o_.i)(A, {
                        draftKey: R,
                        isTemporaryChat: !1
                    }), () => {
                        if (e(), A.get(oS.a, R).includes(L)) return;
                        let n = A.get(tS.x, R).filter(e => e !== L && e !== `plugin:${ow.d}`);
                        (0, tS.X)(A, R, n, t)
                    }
                }
            }, o = [A, R, L], I[3] = L, I[4] = R, I[5] = A, I[6] = n, I[7] = o) : (n = I[6], o = I[7]), (0, g.useEffect)(n, o);
            let D = (0, d.x)(eJ.c, R);
            I[8] !== D || I[9] !== E.isSharedConversation || I[10] !== E.isWorkConversation || I[11] !== F ? (s = !E.isSharedConversation && !E.isWorkConversation && !(0, t8.a)(F) && !D, I[8] = D, I[9] = E.isSharedConversation, I[10] = E.isWorkConversation, I[11] = F, I[12] = s) : s = I[12];
            let H = s,
                q = H && !E.disabled && !E.isSubmitDisabled && !E.isImageEditComposer,
                W = H ? B : void 0;
            I[13] !== R || I[14] !== E.isImageEditComposer ? (i = E.isImageEditComposer ? {
                conversationId: R,
                surface: "image-edit"
            } : R, I[13] = R, I[14] = E.isImageEditComposer, I[15] = i) : i = I[15];
            let K = i;
            I[16] !== R || I[17] !== K || I[18] !== P ? (l = {
                composerController: P,
                conversationId: R,
                draftKey: K
            }, I[16] = R, I[17] = K, I[18] = P, I[19] = l) : l = I[19];
            let U = (0, oQ.a)(l),
                V = (0, oV.a)(U, R, !E.isInlinePreview && !E.disabled, E.workspace && "tpp", W?.id ?? F),
                Q = (0, g.useContext)(oM.a),
                $ = (0, g.useRef)(!1);
            I[20] !== K || I[21] !== Q || I[22] !== P || I[23] !== E.isTemporaryChat || I[24] !== A ? (c = e => {
                null == e || null == P || $.current || ($.current = !0, (0, tS.Y)(A, K, P.getPersistedText(), {
                    isTemporaryChat: E.isTemporaryChat
                }), Q?.onAdopt())
            }, I[20] = K, I[21] = Q, I[22] = P, I[23] = E.isTemporaryChat, I[24] = A, I[25] = c) : c = I[25];
            let Y = (0, eq.a)(c);
            I[26] !== Y || I[27] !== T ? (u = (0, oB.a)(T, Y), I[26] = Y, I[27] = T, I[28] = u) : u = I[28];
            let X = u,
                J = (0, g.useContext)(og.a),
                Z = (0, d.w)(oH.b, R),
                ee = (0, d.x)(tg.eb, R),
                et = (0, d.x)(tg.ab, R),
                en = (0, d.x)(tS.j, R);
            I[29] !== et ? (h = (0, tg.Bb)(et), I[29] = et, I[30] = h) : h = I[30];
            let ea = h,
                er = (0, d.z)(e3.l.activeTab$);
            if (I[31] !== er || I[32] !== k || I[33] !== ea || I[34] !== J) {
                let e = J?.turn.items.flatMap(o1);
                p = k && er?.tabType.kind === oN.a && "generatedImages" in er.props && null != er.props.generatedImages && !ea && null != J && "in_progress" !== J.turn.status && !J.turn.hasPendingAssistantReply && !J.showPendingLoadingMessage && !e?.some(o0) && (null != J.errorMessage || e?.some(oZ)) ? J.turn.messageIds.at(-1) ?? J.turnKey : null, I[31] = er, I[32] = k, I[33] = ea, I[34] = J, I[35] = p
            } else p = I[35];
            let eo = p,
                es = (0, g.useRef)(null);
            I[36] !== eo || I[37] !== A ? (m = () => {
                null != eo && eo !== es.current && (es.current = eo, A.set(oR.a, "expanded"))
            }, y = [eo, A], I[36] = eo, I[37] = A, I[38] = m, I[39] = y) : (m = I[38], y = I[39]), (0, g.useEffect)(m, y);
            let ei = (0, d.w)(oU.a, k ? R : null);
            I[40] !== L || I[41] !== G || I[42] !== U || I[43] !== R || I[44] !== q || I[45] !== K || I[46] !== V || I[47] !== N || I[48] !== k || I[49] !== X || I[50] !== M || I[51] !== E || I[52] !== z || I[53] !== A || I[54] !== W || I[55] !== O?.libraryFileCreation || I[56] !== F ? (b = e => (0, a.jsxs)(ok.a, {
                children: [k && E.trackReadState && !e?.isHidden ? (0, a.jsx)(om.a, {
                    conversationId: R,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, E.aboveComposerContent, (0, a.jsx)(oA.a, {
                    children: (0, a.jsx)(oF.a, {
                        ref: X,
                        trackShownImpressions: E.trackShownImpressions && !E.isHidden && !e?.isHidden && !e?.isMinimized,
                        headerContent: E.headerContent,
                        legacyImageSuggestionsEnabled: !E.disabled && !E.isSharedConversation && !E.isImageEditComposer,
                        allowBackgroundSubmit: E.isInlinePreview,
                        ...V,
                        disableAutoFocus: E.disableAutoFocus,
                        conversationOrigin: null == E.workspace ? void 0 : "tpp",
                        mcpAppContext: E.workspace?.mcpAppContext,
                        onServerThreadIdChange: E.workspace?.onServerThreadIdChange,
                        followupPortalTarget: E.followupPortalTarget,
                        takeoverDisclaimerRef: E.takeoverDisclaimerRef,
                        showConversationFollowups: E.showConversationFollowups,
                        autoPrepare: !E.isSubmitDisabled && !E.isSharedConversation,
                        browserConversationId: (0, oC.getThreadBrowserConversationId)(A) ?? R,
                        composerController: U,
                        conversationId: R,
                        requiredSystemHints: z,
                        hideSystemHints: null != E.requiredSystemHints,
                        getSubmissionGuard: null != L ? () => () => A.get(tg.T, R) === F && A.get(oE, G) === L : void 0,
                        draftKey: K,
                        onPromptChange: M,
                        selectedCustomGpt: W,
                        targetGizmoId: W?.id,
                        onCustomGptChange: q ? e => {
                            A.set(tI, R, e)
                        } : void 0,
                        onCustomAgentSelected: q ? () => {
                            A.set(tI, R, null)
                        } : void 0,
                        disableDraftPrepare: E.isSubmitDisabled || E.isSharedConversation,
                        disableSubmit: E.disabled || E.isSubmitDisabled,
                        voiceInputDisabled: E.disabled,
                        aboveComposerHeaderContent: E.voiceDisclaimer,
                        getExtraDeveloperInstructions: !E.isInlinePreview && O?.libraryFileCreation && !E.isTemporaryChat ? oJ : void 0,
                        isTemporaryChat: E.isTemporaryChat,
                        placeholder: E.disabled && !1 !== E.readOnlyPlaceholder ? E.readOnlyPlaceholder ?? N.formatMessage(o$.a.readOnlyConversationPlaceholder) : void 0,
                        readOnly: E.disabled,
                        hideModelPicker: E.hideModelPicker,
                        ...(0, tS.L)(E),
                        showVoiceStage: E.showVoiceStage,
                        onSubmitAccepted: t => {
                            e?.onSubmitStart(), E.responseSpacerState?.place(), E.onSubmitAccepted?.(t)
                        },
                        onSubmitError: E.responseSpacerState?.clear
                    })
                })]
            }), I[40] = L, I[41] = G, I[42] = U, I[43] = R, I[44] = q, I[45] = K, I[46] = V, I[47] = N, I[48] = k, I[49] = X, I[50] = M, I[51] = E, I[52] = z, I[53] = A, I[54] = W, I[55] = O?.libraryFileCreation, I[56] = F, I[57] = b) : b = I[57];
            let el = b;
            I[58] !== A ? (x = () => {
                (0, ro.K)(A, "conversation")
            }, C = () => {
                (0, ro.K)(A, "conversation")
            }, I[58] = A, I[59] = x, I[60] = C) : (x = I[59], C = I[60]);
            let ec = !E.isInlinePreview && !E.disabled && !E.isSubmitDisabled;
            I[61] !== U || I[62] !== ec ? (w = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(oD, {
                    composerController: U,
                    enabled: ec
                })
            }), I[61] = U, I[62] = ec, I[63] = w) : w = I[63];
            let ed = k ? "floating" : "pane",
                eu = E.disabled || E.awaitingGptContinuation,
                eh = null == J && !ea,
                ep = !E.isInlinePreview && null == E.workspace,
                eg = en || ea ? "loading" : "idle";
            return I[64] !== eg ? (_ = {
                type: eg,
                unread: !1
            }, I[64] = eg, I[65] = _) : _ = I[65], I[66] !== ei || I[67] !== E.isHidden || I[68] !== E.renderTranscript || I[69] !== el || I[70] !== Z || I[71] !== ed || I[72] !== eu || I[73] !== eh || I[74] !== ep || I[75] !== _ || I[76] !== ee ? (S = (0, a.jsx)(ob.a, {
                notifications: ei,
                isHidden: E.isHidden,
                placement: ed,
                responsePreview: Z,
                forceExpanded: eu,
                composerOnly: eh,
                title: ee,
                showConversationTitleMenu: ep,
                statusState: _,
                renderTranscript: E.renderTranscript,
                children: el
            }), I[66] = ei, I[67] = E.isHidden, I[68] = E.renderTranscript, I[69] = el, I[70] = Z, I[71] = ed, I[72] = eu, I[73] = eh, I[74] = ep, I[75] = _, I[76] = ee, I[77] = S) : S = I[77], I[78] !== R || I[79] !== x || I[80] !== C || I[81] !== w || I[82] !== S ? (j = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": R,
                onMouseDownCapture: x,
                onFocusCapture: C,
                children: [w, S]
            }), I[78] = R, I[79] = x, I[80] = C, I[81] = w, I[82] = S, I[83] = j) : j = I[83], j
        }

        function oJ() {
            return [oO.a]
        }

        function oZ(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function o0(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function o1(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var o2 = n("ygKd"),
            o3 = n("KSir"),
            o4 = n("QPeR"),
            o5 = n("M3Kf");

        function o6(e) {
            let t, n, o, s, l, c, u = (0, r.c)(21),
                {
                    conversationId: h
                } = e,
                p = (0, d.y)(eT.a),
                m = (0, d.x)(tg.j, h),
                g = (0, d.z)(aQ.b),
                {
                    search: f
                } = (0, v.Y)();
            if (u[0] !== f) {
                let e = new URLSearchParams(f);
                t = e.get("messageId") ?? e.get("message"), n = e.has("selectedTextQuery"), u[0] = f, u[1] = t, u[2] = n
            } else t = u[1], n = u[2];
            let y = n;
            u[3] !== y || u[4] !== t || u[5] !== m ? (o = ["chatgpt-message-target", m, t, y], u[3] = y, u[4] = t, u[5] = m, u[6] = o) : o = u[6];
            let b = null != m && null != t && g > 0,
                x = y ? 0 : 1 / 0;
            u[7] !== h || u[8] !== y || u[9] !== t || u[10] !== p || u[11] !== m ? (s = async e => {
                let {
                    signal: n
                } = e;
                if (null != m) {
                    if (null != t && y) {
                        let e = p.get(tg.N, h),
                            n = e?.[t] ?? (null == e ? void 0 : Object.values(e).find(e => e.message?.id === t));
                        if (n?.message != null) return !0
                    }
                    await (0, aV.a)(p, m, n)
                }
                return !0
            }, u[7] = h, u[8] = y, u[9] = t, u[10] = p, u[11] = m, u[12] = s) : s = u[12], u[13] !== o || u[14] !== b || u[15] !== x || u[16] !== s ? (l = {
                queryKey: o,
                enabled: b,
                staleTime: x,
                retry: !1,
                queryFn: s
            }, u[13] = o, u[14] = b, u[15] = x, u[16] = s, u[17] = l) : l = u[17];
            let {
                isError: C,
                refetch: w
            } = (0, i.a)(l);
            return u[18] !== C || u[19] !== w ? (c = C ? (0, a.jsx)(tO.a, {
                color: "secondary",
                onClick: () => void w(),
                children: (0, a.jsx)(eb.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message"
                })
            }) : null, u[18] = C, u[19] = w, u[20] = c) : c = u[20], c
        }
        var o7 = n("TmaW"),
            o8 = n("K45w"),
            o9 = n("V8uZ");

        function se(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var st = n("NqfB"),
            sn = n("JEFL"),
            sa = n("moBM");
        let sr = '[data-markdown-text-style="assistant-message"]',
            so = (0, d.d)(eT.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(tg.N, n)?.[a]?.message ?? null
            });

        function ss(e) {
            let t, n, o = (0, r.c)(5),
                s = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return o[0] !== e ? (t = t => (0, a.jsx)(si, {
                ...e,
                selection: t
            }), o[0] = e, o[1] = t) : t = o[1], o[2] !== s || o[3] !== t ? (n = (0, a.jsx)(st.a, {
                align: "start",
                targetSelector: s,
                children: t
            }), o[2] = s, o[3] = t, o[4] = n) : n = o[4], n
        }

        function si(e) {
            let t, o, s, i, l, c, u, h = (0, r.c)(30),
                {
                    conversationId: p,
                    moreDetailsEnabled: m,
                    onAddSelectedText: g,
                    selection: v
                } = e,
                y = (0, d.y)(em.a),
                b = (0, f.a)(),
                x = (0, eN.f)("4290238484"),
                C = (0, eN.f)("473637331"),
                w = (0, d.z)(sa.b),
                _ = (0, d.x)(tg.y, p);
            h[0] !== _ || h[1] !== w || h[2] !== y ? (t = w && "tpp" === _ && "chatgpt-thread" === y.value.routeKind && null == y.value.workSideChat && !0, h[0] = _, h[1] = w, h[2] = y, h[3] = t) : t = h[3];
            let S = t;
            h[4] !== p || h[5] !== v.selectionRange ? (o = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, o = a?.closest(sr);
                if (n.collapsed || null == o || !o.isConnected || o !== r?.closest(sr)) return null;
                let s = o.parentElement,
                    i = s?.getAttribute("data-chatgpt-selection-message-id");
                return !i || s?.getAttribute("data-chatgpt-selection-conversation-id") !== t || [...o.querySelectorAll('[data-writing-block-variant], [data-conversation-component="learning"], [contenteditable="true"], [data-markdown-copy="exclude"]')].some(e => n.intersectsNode(e)) ? null : {
                    markdownElement: o,
                    messageId: i
                }
            }({
                conversationId: p,
                range: v.selectionRange
            }), h[4] = p, h[5] = v.selectionRange, h[6] = o) : o = h[6];
            let j = o,
                I = j?.messageId ?? null;
            h[7] !== p || h[8] !== I ? (s = {
                conversationId: p,
                messageId: I
            }, h[7] = p, h[8] = I, h[9] = s) : s = h[9];
            let T = (0, d.x)(so, s),
                P = (0, d.x)(tg.j, p),
                E = x && m && null != P && null != j && T?.author.role === "assistant";
            return h[10] !== S || h[11] !== y ? (i = S ? e => {
                n.e(748843).then(n.bind(n, "f8of")).then(t => {
                    let {
                        createAndOpenWorkSideChat: n
                    } = t;
                    return n(y, {
                        target: "right",
                        selectedText: e
                    })
                })
            } : void 0, h[10] = S, h[11] = y, h[12] = i) : i = h[12], h[13] !== E || h[14] !== C || h[15] !== g || h[16] !== v.selectionRange || h[17] !== j ? (l = !E || C ? e => {
                g(e, j?.messageId, null == j ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of rI(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(j.markdownElement, v.selectionRange, e))
            } : void 0, h[13] = E, h[14] = C, h[15] = g, h[16] = v.selectionRange, h[17] = j, h[18] = l) : l = h[18], h[19] !== E || h[20] !== p || h[21] !== b || h[22] !== y || h[23] !== j ? (c = E ? e => {
                Promise.all([n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(882456), n.e(813117), n.e(259288), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(46150), n.e(523433), n.e(957690), n.e(291380)]).then(n.bind(n, "zRlR")).then(t => {
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
                        messageId: j.messageId,
                        query: b.formatMessage({
                            id: "chatgpt.selection.moreDetailsTitle",
                            defaultMessage: "More details"
                        }),
                        shouldBlockExternalEgress: y.get(tf.e, p),
                        sourceConversationId: p
                    })
                })
            } : void 0, h[19] = E, h[20] = p, h[21] = b, h[22] = y, h[23] = j, h[24] = c) : c = h[24], h[25] !== v.selectedText || h[26] !== i || h[27] !== l || h[28] !== c ? (u = (0, a.jsx)(sn.a, {
                conversationTerminology: "chat",
                selectedText: v.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), h[25] = v.selectedText, h[26] = i, h[27] = l, h[28] = c, h[29] = u) : u = h[29], u
        }
        var sl = n("SEBt"),
            sc = n("JUxu");
        let sd = (0, g.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function su(e) {
            let t, n, o, s, i = (0, r.c)(11),
                {
                    sharedConversationId: l
                } = e,
                c = (0, d.y)(eT.a),
                u = (0, d.x)(aG.f, (0, g.useContext)(j.a));
            if (null != u) {
                let e, t;
                return i[0] !== u ? (e = (0, aG.b)(u), i[0] = u, i[1] = e) : e = i[1], i[2] !== e ? (t = (0, a.jsx)(sc.a, {
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
                (0, nP.f)(c, sd, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, sl.d)(c, l)
            }, i[5] = c, i[6] = l, i[7] = n) : n = i[7], i[8] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation"
            }), i[8] = o) : o = i[8], i[9] !== n ? (s = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(tO.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: o
                })]
            }), i[9] = n, i[10] = s) : s = i[10], s
        }
        var sh = n("AORd"),
            sp = n("cP1f");

        function sm(e) {
            let {
                turn: t
            } = e;
            return t.items.some(sg)
        }

        function sg(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function sf(e) {
            let t, n, s, i, l, c, u, h, p, m, f, v, y, b, x, C, w, _, S, I, T, P, E, M, R, k, N, O, B, F, G, L, z, D, H = (0, r.c)(231),
                {
                    ref: q,
                    printTitle: W,
                    trackReadState: K,
                    trackShownImpressions: U,
                    composerRef: V,
                    workspace: Q,
                    shouldBlockMcpApps: $,
                    contentX: Y,
                    conversationId: X,
                    sectionIndex: J,
                    composerConversationId: Z,
                    composerLeadingContent: ee,
                    aboveComposerContent: et,
                    historyLoadingContent: en,
                    requiredSystemHints: ea,
                    isCoveredByFloatingPanel: er,
                    isFormOnly: eo,
                    isInlinePreview: es,
                    hideModelPicker: ei,
                    showFilePicker: el,
                    disableAutoFocus: ec,
                    transcriptPresentation: ed,
                    scrollOrigin: eu,
                    isChatConversation: eh,
                    customGptId: eg,
                    conversationLoadingLabel: ef,
                    entries: ev,
                    errorMessage: ey,
                    hasLoadError: ex,
                    onRetryLoad: eC,
                    hasRenderableTurns: ew,
                    isComposerDisabled: e_,
                    readOnlyPlaceholder: eS,
                    moreDetailsEnabled: ej,
                    isConversationEmpty: eI,
                    showEmptyState: eP,
                    isConversationFetching: eE,
                    isConversationLoading: eA,
                    isSharedConversation: eM,
                    isSubmitDisabled: eR,
                    retainLiveModelPicker: ek,
                    isTemporaryChat: eN,
                    isTurnActive: eO,
                    isWorkConversation: eB,
                    onboardingPrelude: eG,
                    scrollStateConversationId: eL,
                    initialResponsePlacementKey: ez,
                    sharedConversationId: eD,
                    sharedPostRegulatedConnectorKind: eH,
                    showComposer: eK,
                    archivedPreviewFooter: eU,
                    showPendingLoadingMessage: eV,
                    gptPluginMigrationBanner: eQ,
                    awaitingGptContinuation: e$,
                    workOnlyConversionBanner: eY,
                    onAddSelectedText: eX,
                    onSubmitAccepted: eJ
                } = e,
                eZ = void 0 === eP || eP,
                e0 = (0, d.y)(eT.a),
                e1 = (0, d.y)(em.a),
                e2 = (0, d.z)(null),
                e3 = (0, d.x)(aG.f, (0, g.useContext)(j.a)),
                e4 = (0, d.z)(ep.a),
                e5 = (0, d.x)(eW.a, X),
                e6 = Q?.fullscreenContent != null ? "content" : "workspace",
                e7 = (0, A.a)(es ? "embedded" : e6),
                e8 = (0, d.z)(o4.a),
                e9 = eK && e8?.source.turnContext.conversationId !== Z,
                te = "floating" === e7.placement,
                [tt, tn] = (0, g.useState)(!1),
                ta = tt && !e7.isHidden && !eo,
                tr = Q?.fullscreenContent != null || te && ta ? "floating" : "main",
                to = (0, d.z)(o2.h),
                ts = eh && null == eD && null == e3 && null == eU,
                ti = U && !er,
                tl = !eA && !eO && !ex && eI && !ew,
                tc = !es && "chatgpt-thread" === e1.value.routeKind && e1.value.workSideChat?.conversationId !== X,
                td = (0, d.x)(tg.i, X),
                tu = eZ && ts && tl && null == td && !e5 && !te,
                th = null == eg ? "centered-home" : "home",
                tp = eZ && !e5 && (!ts || !eI),
                tm = (0, g.useRef)(null),
                tf = (0, g.useRef)(null),
                [tv, ty] = (0, g.useState)(null),
                tb = (0, ad.c)(),
                tx = es ? null : eL;
            H[0] !== tx || H[1] !== tv || H[2] !== tb ? (t = () => ({
                conversationKey: tx,
                responseSpacer: tv,
                windowZoom: tb
            }), H[0] = tx, H[1] = tv, H[2] = tb, H[3] = t) : t = H[3];
            let tC = (0, eq.a)(t);
            H[4] !== e0 || H[5] !== tx || H[6] !== tC ? (n = () => (function(e, t, n) {
                let a = (0, d.u)(eT.a, null == t ? 0 : e.get(oh.a, t)),
                    r = (0, d.u)(eT.a, () => null),
                    o = (0, d.u)(eT.a, () => null),
                    s = null,
                    i = null;

                function l(e) {
                    null != i && (null == e || e()) && (i = null)
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
                        null != a && e.set(oh.a, a, (0, r6.a)(t, r?.getHeightPx() ?? 0))
                    },
                    cancelPendingRestore: l,
                    acceptSubmit() {
                        l(), e.set(a, 0)
                    },
                    onApiChange: t => e.set(r, t),
                    restoreReadingPosition: function(t) {
                        let a = i;
                        if (null == a) return;
                        let o = t.getScrollElement();
                        if (null == o || 0 === o.clientHeight) return;
                        if ("bottom" === a) {
                            l(), t.scrollToDistanceFromBottomPx(0, "instant");
                            return
                        }
                        t.shouldFollowContentGrowth() && t.holdViewport();
                        let s = a.turn,
                            c = null == s ? null : o.querySelector(`[data-turn-key="${CSS.escape(s.key)}"]`)?.getBoundingClientRect(),
                            d = a.top;
                        if (null != s && null != c) {
                            let {
                                windowZoom: e
                            } = n();
                            if ((0, ad.b)(c.height, e) <= Math.max(0, -s.offset)) return;
                            d = o.scrollTop + (0, ad.b)(c.top - o.getBoundingClientRect().top, e) - s.offset
                        }
                        let u = o.scrollHeight - o.clientHeight;
                        d <= u && ((null == s || null != c || e.get(r)?.getEntryGeometry(s.key) == null) && l(), t.compensateScrollToDistanceFromBottomPx(u - Math.max(0, d)))
                    },
                    captureBeforeHide: function(e) {
                        let t = e.getScrollElement();
                        return null != t && t.clientHeight > 0 && (s = i ?? (e.shouldFollowContentGrowth() && 1 >= (0, r6.b)(t) ? "bottom" : function(e, t) {
                            let n = e.scrollTop,
                                a = e.getBoundingClientRect();
                            for (let r of e.querySelectorAll("[data-turn-key]")) {
                                let e = r.getBoundingClientRect(),
                                    o = r.dataset.turnKey;
                                if (null != o && e.height > 0 && e.bottom > a.top && e.top < a.bottom) return {
                                    top: n,
                                    turn: {
                                        key: o,
                                        offset: (0, ad.b)(e.top - a.top, t)
                                    }
                                }
                            }
                            return {
                                top: n
                            }
                        }(t, n().windowZoom))), () => {
                            s = null
                        }
                    },
                    onRestoreStateChange: function(t) {
                        null != s && null != t && (i = s, e.set(o, t))
                    }
                }
            })(e0, tx, tC), H[4] = e0, H[5] = tx, H[6] = tC, H[7] = n) : n = H[7];
            let [tw] = (0, g.useState)(n), t_ = (0, d.z)(tw.api$), tS = (0, d.z)(tw.restoreState$), tj = (0, d.z)(tw.initialOffset$), {
                cancelPendingRestore: tI
            } = tw, tP = null == tS ? ez : null, [tE, tA] = (0, g.useState)(!1);
            H[8] !== ev ? (s = () => ev, H[8] = ev, H[9] = s) : s = H[9];
            let tM = (0, eq.a)(s),
                {
                    revealLatestResponse: tR,
                    scrollToSearchTurn: tk,
                    scrollToDelayedImageCard: tN
                } = ((G = (0, r.c)(18))[0] !== t_ || G[1] !== ev ? (R = () => ({
                    async scrollToMessage(e) {
                        let t = ev.find(t => {
                            let {
                                turn: n
                            } = t;
                            return n.messageIds.includes(e)
                        });
                        null != t && null != t_ && await t_.scrollToKey(t.turnKey, void 0, {
                            align: "top"
                        })
                    }
                }), k = [ev, t_], G[0] = t_, G[1] = ev, G[2] = R, G[3] = k) : (R = G[2], k = G[3]), (0, g.useImperativeHandle)(q, R, k), G[4] !== t_ || G[5] !== ev ? (N = (e, t) => (0, ra.c)(t_, ev.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                })?.turnKey, t), G[4] = t_, G[5] = ev, G[6] = N) : N = G[6], L = (0, eq.a)(N), G[7] !== t_ || G[8] !== X || G[9] !== ev ? (O = async e => {
                    let t = ev.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != t_ && await t_.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${X}-${e}`)}"]`), {
                        align: "center"
                    })
                }, G[7] = t_, G[8] = X, G[9] = ev, G[10] = O) : O = G[10], z = (0, eq.a)(O), G[11] !== t_?.scrollToKey || G[12] !== ev ? (B = function(e) {
                    let t = ev.findLast(sm);
                    return (0, sp.a)(t_?.scrollToKey, t?.turnKey, e)
                }, G[11] = t_?.scrollToKey, G[12] = ev, G[13] = B) : B = G[13], D = B, G[14] !== D || G[15] !== z || G[16] !== L ? (F = {
                    revealLatestResponse: D,
                    scrollToSearchTurn: L,
                    scrollToDelayedImageCard: z
                }, G[14] = D, G[15] = z, G[16] = L, G[17] = F) : F = G[17], F);
            H[10] === Symbol.for("react.memo_cache_sentinel") ? (i = e => (0, ra.a)(tf.current, e), H[10] = i) : i = H[10];
            let tO = (0, eq.a)(i),
                tB = `chatgpt:${X}`;
            if (H[11] !== tI || H[12] !== X || H[13] !== tM || H[14] !== tO || H[15] !== eN || H[16] !== e1 || H[17] !== tk || H[18] !== eD || H[19] !== e3 || H[20] !== tB) {
                let e;
                H[22] !== X || H[23] !== eN || H[24] !== e1 || H[25] !== eD || H[26] !== e3 ? (e = async e => {
                    let t = e1.get(tg.j, X);
                    !eN && null == eD && null == e3 && null != t && e1.get(aQ.b) > 0 && await (0, aV.a)(e1, t, e)
                }, H[22] = X, H[23] = eN, H[24] = e1, H[25] = eD, H[26] = e3, H[27] = e) : e = H[27], l = function(e) {
                    let {
                        getTurns: t,
                        routeContextId: n,
                        scrollAdapter: a,
                        ensureHistory: r
                    } = e, o = (0, rO.a)({
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
                                        let n = (0, rF.a)(e.content, ak.b),
                                            a = [],
                                            r = "";
                                        for (; e.content.includes(r);) r += "";
                                        let o = (0, rN.a)(function e(t, n, a, r) {
                                                let o = "",
                                                    s = 0;
                                                for (let i of t) {
                                                    let t = n.indexOf(i.raw, s); - 1 !== t && (o += n.slice(s, t), o += function(t, n, a) {
                                                        var r, o;
                                                        if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                        if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                            if (e.name === ak.a) {
                                                                let n = (0, rG.a)(e.attributes),
                                                                    a = (0, rG.b)(e.attributes),
                                                                    r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, ak.l)(e) === a);
                                                                if (null == r) return "";
                                                                let o = (0, ak.i)(r);
                                                                return "hidden" === o || "block" === o ? "" : (0, ak.j)(r) ?? ""
                                                            }
                                                            return e.name === rk.a ? (0, rB.a)(e.attributes, "label") ?? "" : e.name === rk.b || e.name === rk.c ? "" : e.name === rR.a ? e.text ?? "" : null
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
                                            unitId: (0, rf.a)("assistant", t),
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
                    getTurns: tM,
                    routeContextId: tB,
                    scrollAdapter: {
                        scrollToTurn: tk,
                        getTurnContainer: tO,
                        onNavigate: tI
                    },
                    ensureHistory: e
                }), H[11] = tI, H[12] = X, H[13] = tM, H[14] = tO, H[15] = eN, H[16] = e1, H[17] = tk, H[18] = eD, H[19] = e3, H[20] = tB, H[21] = l
            } else l = H[21];
            let tF = l;
            H[28] !== tF.contextId ? (c = {
                containerRef: tf,
                contextId: tF.contextId
            }, H[28] = tF.contextId, H[29] = c) : c = H[29], (0, rs.a)(c);
            let tG = e9 && null == eU,
                tL = e4 && tG && !te,
                tz = (0, rl.a)();
            H[30] !== X || H[31] !== ew || H[32] !== er || H[33] !== J || H[34] !== tz ? (u = {
                conversationId: X,
                sectionIndex: J,
                hasRenderableTurns: ew,
                isCoveredByFloatingPanel: er,
                shouldReduceMotion: tz,
                containerRef: tf
            }, H[30] = X, H[31] = ew, H[32] = er, H[33] = J, H[34] = tz, H[35] = u) : u = H[35];
            let tD = function(e) {
                    let t, n, a, o = (0, r.c)(12),
                        {
                            conversationId: s,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, o8.a)(0);
                    o[0] !== s || o[1] !== i ? (t = {
                        conversationId: s,
                        sectionIndex: i
                    }, o[0] = s, o[1] = i, o[2] = t) : t = o[2];
                    let p = (0, g.useRef)(t);
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
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(se) && 0 !== n.clientWidth && (o.disconnect(), h.set(a * n.clientWidth), e = (0, r3.a)(h, 0, {
                                    duration: .3,
                                    ease: o9.d
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
                    }, a = [s, i, l, d, c, h, u], o[3] = u, o[4] = s, o[5] = l, o[6] = c, o[7] = i, o[8] = h, o[9] = d, o[10] = n, o[11] = a) : (n = o[10], a = o[11]), (0, g.useLayoutEffect)(n, a), h
                }(u),
                tH = tG && te,
                [tq, tW] = (0, g.useState)(null),
                [tK, tU] = (0, g.useState)(null),
                [tV, tQ] = (0, g.useState)(null),
                t$ = eM && tG && !e_ && !te && !e4,
                [tY, tX] = (0, g.useState)(null);
            H[36] !== e$ || H[37] !== X || H[38] !== ew || H[39] !== eN || H[40] !== eH || H[41] !== eK ? (h = eK && !e$ ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rt.BrowserComposerDisclaimer, {
                    supportsMessageDisclosures: !0,
                    conversationId: X,
                    hasUserMessage: ew,
                    isTemporaryChat: eN,
                    regulatedConnectorKindOverride: eH
                })
            }) : void 0, H[36] = e$, H[37] = X, H[38] = ew, H[39] = eN, H[40] = eH, H[41] = eK, H[42] = h) : h = H[42];
            let tJ = h;
            H[43] !== X || H[44] !== ey || H[45] !== ew || H[46] !== e_ || H[47] !== eR || H[48] !== eB || H[49] !== eK || H[50] !== eV ? (p = ew ? null : (0, a.jsx)(rA.a, {
                conversationId: X,
                errorMessage: ey,
                isWorkConversation: eB,
                showPendingLoadingMessage: eV,
                showRequestUserInputStatus: eK && !e_ && !eR
            }), H[43] = X, H[44] = ey, H[45] = ew, H[46] = e_, H[47] = eR, H[48] = eB, H[49] = eK, H[50] = eV, H[51] = p) : p = H[51];
            let tZ = p;
            H[52] !== X || H[53] !== eB || H[54] !== eD || H[55] !== e3 ? (m = eB && null == eD && null == e3 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(re, {
                    conversationId: X
                }, X)
            }) : null, H[52] = X, H[53] = eB, H[54] = eD, H[55] = e3, H[56] = m) : m = H[56];
            let t0 = m;
            H[57] !== eU || H[58] !== t0 ? (f = null != eU ? (0, a.jsxs)(a.Fragment, {
                children: [t0, eU]
            }) : null, H[57] = eU, H[58] = t0, H[59] = f) : f = H[59];
            let t1 = f;
            H[60] !== et || H[61] !== t1 || H[62] !== e$ || H[63] !== Z || H[64] !== ee || H[65] !== V || H[66] !== X || H[67] !== ec || H[68] !== tJ || H[69] !== tZ || H[70] !== ev || H[71] !== t0 || H[72] !== tq || H[73] !== eQ || H[74] !== ex || H[75] !== ew || H[76] !== ei || H[77] !== e4 || H[78] !== e_ || H[79] !== eA || H[80] !== er || H[81] !== eo || H[82] !== te || H[83] !== to || H[84] !== es || H[85] !== eM || H[86] !== eR || H[87] !== eN || H[88] !== eB || H[89] !== ti || H[90] !== eJ || H[91] !== eS || H[92] !== tw || H[93] !== t$ || H[94] !== ea || H[95] !== tv || H[96] !== ek || H[97] !== tR || H[98] !== e7.isHidden || H[99] !== eD || H[100] !== e3 || H[101] !== e9 || H[102] !== el || H[103] !== tH || H[104] !== tL || H[105] !== K || H[106] !== tr || H[107] !== eY || H[108] !== Q ? (v = t1 ?? (e9 ? (0, a.jsxs)(og.a.Provider, {
                value: ev.at(-1) ?? null,
                children: [eo || te ? null : (0, a.jsx)(ri.a, {
                    onNavigate: tR
                }, X), te ? null : ee, (0, a.jsx)(oY, {
                    requiredSystemHints: ea,
                    composerRef: V,
                    workspace: Q,
                    isInlinePreview: es,
                    hideModelPicker: ei,
                    showFilePicker: el,
                    disableAutoFocus: ec,
                    conversationId: Z,
                    isImageEditComposer: to,
                    disabled: e_,
                    readOnlyPlaceholder: eS,
                    awaitingGptContinuation: e$,
                    headerContent: t0,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [t$ ? (0, a.jsx)("div", {
                            ref: tQ,
                            className: "empty:hidden"
                        }) : null, et, !eA && !ex && ew && !e$ && eY, e4 ? null : eQ, tH && tZ]
                    }),
                    isFullscreenComposer: te,
                    isHidden: e7.isHidden,
                    trackReadState: K && !er,
                    trackShownImpressions: ti,
                    isSharedConversation: eM,
                    isSubmitDisabled: eR,
                    retainLiveModelPicker: ek && !to,
                    followupPortalTarget: tq,
                    takeoverDisclaimerRef: tX,
                    showConversationFollowups: null == eD && null == e3 && !eN && !eB && !te,
                    isTemporaryChat: eN,
                    isWorkConversation: eB,
                    responseSpacerState: tv,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(rY, {
                            entries: ev,
                            historyLoader: eN || null != eD || null != e3 ? null : (0, a.jsx)(o5.a, {
                                conversationId: X
                            }),
                            isVisible: t,
                            rendersWidgets: "floating" === tr,
                            onVisibilityChange: tn
                        }, X)
                    },
                    showVoiceStage: !tL,
                    voiceDisclaimer: e4 && !tL ? tJ : void 0,
                    onSubmitAccepted: e => {
                        tw.acceptSubmit(), eJ?.(e)
                    }
                }, `${Z}:${to?"image-edit":"chat"}`)]
            }) : t0), H[60] = et, H[61] = t1, H[62] = e$, H[63] = Z, H[64] = ee, H[65] = V, H[66] = X, H[67] = ec, H[68] = tJ, H[69] = tZ, H[70] = ev, H[71] = t0, H[72] = tq, H[73] = eQ, H[74] = ex, H[75] = ew, H[76] = ei, H[77] = e4, H[78] = e_, H[79] = eA, H[80] = er, H[81] = eo, H[82] = te, H[83] = to, H[84] = es, H[85] = eM, H[86] = eR, H[87] = eN, H[88] = eB, H[89] = ti, H[90] = eJ, H[91] = eS, H[92] = tw, H[93] = t$, H[94] = ea, H[95] = tv, H[96] = ek, H[97] = tR, H[98] = e7.isHidden, H[99] = eD, H[100] = e3, H[101] = e9, H[102] = el, H[103] = tH, H[104] = tL, H[105] = K, H[106] = tr, H[107] = eY, H[108] = Q, H[109] = v) : v = H[109];
            let t2 = v;
            H[110] !== X || H[111] !== er || H[112] !== es || H[113] !== e2 || H[114] !== eD || H[115] !== e3 ? (y = void 0, H[110] = X, H[111] = er, H[112] = es, H[113] = e2, H[114] = eD, H[115] = e3, H[116] = y) : y = H[116];
            let t3 = y,
                t4 = er || void 0;
            H[117] === Symbol.for("react.memo_cache_sentinel") ? (b = null, H[117] = b) : b = H[117], H[118] !== X || H[119] !== er || H[120] !== te || H[121] !== K ? (x = !K || te || er ? null : (0, a.jsx)(om.a, {
                conversationId: X
            }), H[118] = X, H[119] = er, H[120] = te, H[121] = K, H[122] = x) : x = H[122], H[123] !== eU || H[124] !== X || H[125] !== es || H[126] !== eD || H[127] !== e3 ? (C = es || null != eD || null != e3 || null != eU ? null : (0, a.jsx)(op, {
                conversationId: X
            }, X), H[123] = eU, H[124] = X, H[125] = es, H[126] = eD, H[127] = e3, H[128] = C) : C = H[128], H[129] !== X || H[130] !== eA || H[131] !== es || H[132] !== eN || H[133] !== eD || H[134] !== e3 ? (w = es || eA || eN || null != eD || null != e3 ? null : (0, a.jsx)(o6, {
                conversationId: X
            }), H[129] = X, H[130] = eA, H[131] = es, H[132] = eN, H[133] = eD, H[134] = e3, H[135] = w) : w = H[135], H[136] !== X || H[137] !== ev || H[138] !== tE || H[139] !== eE || H[140] !== eA || H[141] !== es || H[142] !== tR || H[143] !== eD || H[144] !== e3 || H[145] !== t_ ? (_ = es || eA || null != eD || null != e3 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(ag, {
                    conversationId: X,
                    entries: ev,
                    turnListApi: t_
                }), (0, a.jsx)(ru.a, {
                    ready: !eE && tE && null != t_ && ev.length > 0,
                    onNavigate: tR
                })]
            }), H[136] = X, H[137] = ev, H[138] = tE, H[139] = eE, H[140] = eA, H[141] = es, H[142] = tR, H[143] = eD, H[144] = e3, H[145] = t_, H[146] = _) : _ = H[146], H[147] !== eU || H[148] !== tI || H[149] !== tu || H[150] !== Z || H[151] !== Y || H[152] !== td || H[153] !== X || H[154] !== ef || H[155] !== tF || H[156] !== tJ || H[157] !== tZ || H[158] !== ev || H[159] !== t2 || H[160] !== ex || H[161] !== ew || H[162] !== en || H[163] !== th || H[164] !== tj || H[165] !== tP || H[166] !== e4 || H[167] !== e5 || H[168] !== e_ || H[169] !== eE || H[170] !== eA || H[171] !== er || H[172] !== eo || H[173] !== te || H[174] !== es || H[175] !== tl || H[176] !== tc || H[177] !== eM || H[178] !== eN || H[179] !== eO || H[180] !== eB || H[181] !== ej || H[182] !== t3 || H[183] !== ti || H[184] !== eX || H[185] !== eC || H[186] !== eG || H[187] !== W || H[188] !== tw || H[189] !== tV || H[190] !== tK || H[191] !== t$ || H[192] !== tv || H[193] !== e7.isChatPaneHidden || H[194] !== e1 || H[195] !== eu || H[196] !== tN || H[197] !== tD || H[198] !== eD || H[199] !== e3 || H[200] !== $ || H[201] !== tz || H[202] !== eK || H[203] !== e9 || H[204] !== tp || H[205] !== tG || H[206] !== tH || H[207] !== tL || H[208] !== tY || H[209] !== ed || H[210] !== t_ || H[211] !== Q ? (S = Q?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!$ && Q.fullscreenContent, t2]
            }) : (0, a.jsxs)(rh.a, {
                scrollAttributionKey: ti ? ev.at(-1)?.turnKey : void 0,
                viewportOverlay: eo || es || eB || null != eD || null != e3 || null != eU || er || te ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(oy, {
                        conversationId: X
                    }, X)
                }),
                hideTranscript: eo,
                active: !eA && (!ew || null != t_),
                presentation: ed ?? (es ? "compact" : "default"),
                contentX: Y,
                supportsComposerExpansion: tG && !te && null == Q,
                footerPlacement: tu ? th : "bottom",
                initialOffset: tj,
                scrollOrigin: eu,
                onScroll: tw.onScroll,
                onUserScrollIntent: tI,
                scrollToBottomButton: !e9 || te || tL ? void 0 : {
                    isWorking: eO
                },
                threadEndContent: e4 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tW,
                        className: eF.a
                    }), null == tY ? tJ : (0, ac.createPortal)(tJ, tY)]
                }),
                footerLeadingContent: tL ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: eF.a,
                            children: (0, a.jsx)(rc.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: tJ
                    })]
                }) : t3,
                footer: t2,
                children: [es || eA || null != eD ? null : (0, a.jsx)(rE, {
                    conversationId: X,
                    entries: ev,
                    isConversationFetching: eE,
                    turnListApi: t_
                }), (0, a.jsxs)(al.a.div, {
                    ref: tf,
                    style: {
                        x: tD
                    },
                    "data-chatgpt-conversation-selection-target": X,
                    "data-rail-chat-transcript": tc || void 0,
                    className: (0, ai.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", es && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, ro.K)(e1, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, ro.K)(e1, "conversation")
                    },
                    children: [(0, a.jsxs)(g.Suspense, {
                        fallback: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(o.b, {
                                name: "conversation content"
                            }), (0, a.jsx)(tT.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })]
                        }),
                        children: [es || eA ? null : (0, a.jsx)(rr.a, {
                            conversationSource: tF
                        }), er || e7.isChatPaneHidden || eN || null != eD || null != e3 ? null : en ?? (0, a.jsx)(o5.a, {
                            conversationId: X
                        }), (0, a.jsx)(sh.b, {
                            conversationId: X
                        }), (null != eD || null != e3) && ew ? (0, a.jsx)(su, {
                            sharedConversationId: eD
                        }) : null, null == eG ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: eF.a,
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
                            isFetching: eE,
                            isSharedConversation: eM,
                            onRetry: eC
                        }) : eA ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": ef,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(tT.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : ew ? (0, a.jsxs)(o3.a, {
                            value: tN,
                            children: [es || er ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eN || null != eD || null != e3 ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(a0, {
                                        conversationId: X
                                    })
                                }), (0, a.jsx)(aX, {
                                    entries: ev,
                                    title: W,
                                    TurnRowComponent: r$
                                })]
                            }), (0, a.jsx)(o7.a, {
                                enabled: t$,
                                aboveComposer: tV,
                                belowMessage: tK,
                                children: (0, a.jsx)(os, {
                                    viewportRef: tm,
                                    isTurnActive: eO,
                                    conversationId: X,
                                    entries: ev,
                                    readingPosition: tw,
                                    isInlinePreview: es,
                                    onVisibleContentReady: () => tA(!0),
                                    responseSpacerState: tv
                                })
                            }), t$ ? (0, a.jsx)("div", {
                                ref: tU,
                                className: "empty:hidden"
                            }) : null]
                        }) : tp && null == td && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            "data-rail-chat-empty": tc && tl || void 0,
                            children: (0, a.jsx)(eb.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation"
                            })
                        }), !tH && tZ, (0, a.jsx)(ou.a, {
                            conversationId: Z,
                            isWorkConversation: eB
                        }), eK && !e_ ? (0, a.jsx)(ss, {
                            conversationId: X,
                            moreDetailsEnabled: ej,
                            onAddSelectedText: eX
                        }) : null]
                    }), es ? null : (0, a.jsx)(rM.a, {
                        preserveResponseViewport: e => tm.current?.holdForResponse(e) ?? !1,
                        conversationId: X,
                        initialPlacementKey: tP,
                        isActiveVoiceConversation: e4 && e5,
                        isLoadingHistory: eA,
                        latestUserTurnKey: ev.findLast(sv)?.turnKey,
                        onResponseSpacerStateChange: ty
                    }), tL ? (0, a.jsx)(al.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tz ? rd.c : rd.b
                    }) : null]
                })]
            }), H[147] = eU, H[148] = tI, H[149] = tu, H[150] = Z, H[151] = Y, H[152] = td, H[153] = X, H[154] = ef, H[155] = tF, H[156] = tJ, H[157] = tZ, H[158] = ev, H[159] = t2, H[160] = ex, H[161] = ew, H[162] = en, H[163] = th, H[164] = tj, H[165] = tP, H[166] = e4, H[167] = e5, H[168] = e_, H[169] = eE, H[170] = eA, H[171] = er, H[172] = eo, H[173] = te, H[174] = es, H[175] = tl, H[176] = tc, H[177] = eM, H[178] = eN, H[179] = eO, H[180] = eB, H[181] = ej, H[182] = t3, H[183] = ti, H[184] = eX, H[185] = eC, H[186] = eG, H[187] = W, H[188] = tw, H[189] = tV, H[190] = tK, H[191] = t$, H[192] = tv, H[193] = e7.isChatPaneHidden, H[194] = e1, H[195] = eu, H[196] = tN, H[197] = tD, H[198] = eD, H[199] = e3, H[200] = $, H[201] = tz, H[202] = eK, H[203] = e9, H[204] = tp, H[205] = tG, H[206] = tH, H[207] = tL, H[208] = tY, H[209] = ed, H[210] = t_, H[211] = Q, H[212] = S) : S = H[212], H[213] !== er || H[214] !== t4 || H[215] !== x || H[216] !== C || H[217] !== w || H[218] !== _ || H[219] !== S ? (I = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": t4,
                inert: er,
                children: [b, x, C, w, _, S]
            }), H[213] = er, H[214] = t4, H[215] = x, H[216] = C, H[217] = w, H[218] = _, H[219] = S, H[220] = I) : I = H[220];
            let t5 = I,
                t6 = "main" === tr;
            H[221] !== t6 ? (T = {
                presentation: "main",
                rendersWidgets: t6
            }, H[221] = t6, H[222] = T) : T = H[222];
            let t7 = !ta && (eo || er || e7.isChatPaneHidden || Q?.fullscreenContent != null);
            return H[223] !== t7 ? (P = (0, a.jsx)(o.b, {
                name: "conversation hidden",
                active: t7
            }), H[223] = t7, H[224] = P) : P = H[224], H[225] !== t5 ? (E = (0, a.jsx)(rn.a, {
                children: t5
            }), H[225] = t5, H[226] = E) : E = H[226], H[227] !== T || H[228] !== P || H[229] !== E ? (M = (0, a.jsxs)(d.b, {
                scope: rD,
                value: T,
                children: [P, E]
            }), H[227] = T, H[228] = P, H[229] = E, H[230] = M) : M = H[230], M
        }

        function sv(e) {
            let {
                turn: t
            } = e;
            return t.items.some(sy)
        }

        function sy(e) {
            return "user-message" === e.type
        }
        var sb = n("gCr7");
        n("i1of");
        var sx = n("alJ6"),
            sC = n("u9iS"),
            sw = n("fNPc"),
            s_ = n("vVgo"),
            sS = n("T33u"),
            sj = n("EpL9"),
            sI = n("svjy");

        function sT(e) {
            let {
                conversationId: t,
                courseId: n
            } = e;
            return `chatgpt-learning-course:${JSON.stringify([t,n])}`
        }
        let sP = (0, d.d)(em.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(e4.h) && n(e4.i) && n(e3.l.activeTab$)?.tabId === sT(e)
            }),
            sE = (0, tF.a)(async () => {
                let {
                    CoursePanelTab: e
                } = await Promise.all([n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(882456), n.e(813117), n.e(259288), n.e(818353), n.e(758379), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(46150), n.e(993444)]).then(n.bind(n, "lbEC"));
                return e
            }, {
                propagateLoadError: !0
            }),
            sA = (0, sj.k)("chatgpt-learning-course", sE, {
                dropDestinations: ["right"],
                isAvailable: (e, t) => "chatgpt-thread" === e.value.routeKind && (null == t || e.value.conversationId === t.conversationId),
                paneWidth: () => ({
                    defaultWidth: 480,
                    storageKey: "app-shell:learning-course-width"
                }),
                showInNewTabLauncher: !1,
                open: sM
            });

        function sM(e, t) {
            let {
                conversationId: n,
                courseId: r
            } = t, {
                preserveFocus: o = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = e.get(I.f), i = e.get(I.j), l = () => "chatgpt-thread" === e.value.routeKind && e.value.conversationId === n && e.get(eI.c)?.pathname === e.value.pathname && e.get(I.f) === s && e.get(I.j) === i;
            if (!l() || "" === r) return;
            let c = sT({
                conversationId: n,
                courseId: r
            });
            e.get(sP, {
                conversationId: n,
                courseId: r
            }) ? e3.l.closeTab(e, c) : (0, e3.h)(e, sA, {
                target: "right",
                revealAndFocus: !0,
                preserveFocus: o,
                shouldOpen: l,
                id: c,
                icon: (0, a.jsx)(tB.ob, {}),
                title: e.get(sI.a).formatMessage({
                    id: "chatgptConversations.coursePanel.title",
                    defaultMessage: "Lesson plan"
                }),
                props: {
                    conversationId: n,
                    courseId: r,
                    accountId: s,
                    userId: i
                }
            })
        }
        var sR = n("MgyE"),
            sk = n("gyrn"),
            sN = n("ckwE"),
            sO = n("kHi2");

        function sB(e) {
            let t, n = (0, r.c)(3),
                {
                    children: o
                } = e,
                [s] = (0, g.useState)(sF);
            return n[0] !== s || n[1] !== o ? (t = (0, a.jsx)(a$.a, {
                value: s,
                children: o
            }), n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }

        function sF() {
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

        function sG(e) {
            let t, n, o, s = (0, r.c)(8),
                {
                    children: i,
                    courseChatId: l
                } = e,
                c = (0, d.y)(em.a);
            s[0] !== l || s[1] !== c ? (t = "chatgpt-thread" === c.value.routeKind && c.value.conversationId === l ? c.get(sO.b) : void 0, s[0] = l, s[1] = c, s[2] = t) : t = s[2];
            let u = t;
            return s[3] !== i ? (n = (0, a.jsx)(sB, {
                children: i
            }), s[3] = i, s[4] = n) : n = s[4], s[5] !== u || s[6] !== n ? (o = (0, a.jsx)(sN.a, {
                binding: u,
                children: n
            }), s[5] = u, s[6] = n, s[7] = o) : o = s[7], o
        }
        var sL = n("MDmT"),
            sz = n("Fjze");

        function sD(e) {
            let t, n, a, o = (0, r.c)(7),
                {
                    sharedConversationId: s
                } = e,
                i = (0, d.y)(eT.a),
                l = null != s;
            o[0] !== i || o[1] !== s ? (t = () => {
                null != s && (nE.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: s
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(sH), (0, ec.a)(i, sz.a, {
                    sharedConversationId: s
                }))
            }, o[0] = i, o[1] = s, o[2] = t) : t = o[2];
            let c = (0, g.useEffectEvent)(t);
            return o[3] !== c ? (n = () => {
                c()
            }, o[3] = c, o[4] = n) : n = o[4], o[5] !== l ? (a = [l], o[5] = l, o[6] = a) : a = o[6], (0, g.useEffect)(n, a), null
        }

        function sH() {}
        var sq = n("GigQ"),
            sW = n("JKdL"),
            sK = n("d107"),
            sU = n("FGv0"),
            sV = n("r9i9"),
            sQ = n("tdfh"),
            s$ = n("uQqo"),
            sY = n("yi1v"),
            sX = n("niKP");

        function sJ(e) {
            let t, o, s, i, l, c = (0, r.c)(16),
                {
                    data: u
                } = e,
                h = (0, d.y)(eT.a),
                p = (0, f.a)();
            c[0] !== p ? (t = p.formatMessage(eC.a.headerShare), c[0] = p, c[1] = t) : t = c[1];
            let m = t,
                [v, y] = (0, g.useState)(!1);
            return c[2] !== u || c[3] !== v || c[4] !== h ? (o = () => {
                v || (y(!0), (async function(e, t) {
                    let a = t.sharedPost,
                        [r, ...o] = a?.attachments[0]?.kind === "media_generation" ? (0, s$.a)(a, (0, s$.b)(a)) : [],
                        s = () => (0, sV.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId, 1 / 0, void 0, (0, as.b)(e.get, t.dialogProps.serverConversationId)),
                        i = crypto.randomUUID();
                    (0, sl.c)(e, {
                        attachmentType: t.attachmentType,
                        contentType: t.contentType,
                        shareId: t.shareId,
                        shareSessionId: i
                    });
                    let l = t.dialogProps.receiverShareLink;
                    if ((0, sY.a)() && null != l && ("conversation" === l.contentType || "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE" === t.attachmentType)) {
                        if ("unsupported" !== await (0, sY.b)(e, {
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
                        if ("conversation" === l.contentType) return void(0, nP.f)(e, sQ.a, {
                            ...t.dialogProps,
                            shareSessionId: i
                        })
                    }
                    if (l?.contentType === "conversation") {
                        let a = (0, sl.b)(e, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                shareId: t.shareId,
                                shareSessionId: i,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                                usedExistingLink: !0,
                                omitSheetType: !0
                            }),
                            r = await (0, sU.a)(Promise.resolve(l.shareLinkUrl));
                        if (a({
                                result: r ? "link-copied" : "copy-failed",
                                shareId: t.shareId
                            }), r) {
                            let {
                                showConversationShareCopiedToast: t
                            } = await n.e(555532).then(n.bind(n, "euaP"));
                            t(e, null, !0 === l.isWorkspaceOnly)
                        } else(0, nP.f)(e, sQ.a, {
                            ...t.dialogProps,
                            previewTurns: s(),
                            recoveryShareLink: l,
                            shareSessionId: i
                        });
                        return
                    }(0, nP.f)(e, sQ.a, {
                        ...t.dialogProps,
                        image: r?.src == null ? void 0 : {
                            alt: t.dialogProps.title ?? "",
                            item: r,
                            previewSrc: r.src,
                            additionalPublishedPreviewUrls: o.flatMap(e => null == e.src ? [] : [e.src])
                        },
                        previewTurns: null != r ? void 0 : s(),
                        privacyNotices: (0, sV.k)({
                            conversation: t.conversation,
                            projectId: null
                        }),
                        shareSessionId: i
                    })
                })(h, u).finally(() => y(!1)))
            }, c[2] = u, c[3] = v, c[4] = h, c[5] = o) : o = c[5], c[6] !== v ? (s = v ? null : (0, a.jsx)(ej.a, {
                asset: sX.a
            }), c[6] = v, c[7] = s) : s = c[7], c[8] !== v || c[9] !== m || c[10] !== o || c[11] !== s ? (i = (0, a.jsx)(tO.a, {
                "aria-label": m,
                color: "ghostActive",
                loading: v,
                size: "toolbar",
                uniform: !0,
                onClick: o,
                children: s
            }), c[8] = v, c[9] = m, c[10] = o, c[11] = s, c[12] = i) : i = c[12], c[13] !== m || c[14] !== i ? (l = (0, a.jsx)(tk.a, {
                content: m,
                children: i
            }), c[13] = m, c[14] = i, c[15] = l) : l = c[15], l
        }
        var sZ = n("MVHH"),
            s0 = n("rhKI"),
            s1 = n("PP3M"),
            s2 = n("jAnS"),
            s3 = n("CFOe"),
            s4 = n("JNtf"),
            s5 = n("mUDD");

        function s6(e) {
            let t, n, o, s, i, l, c, d, u, h, p, m, g, f = (0, r.c)(31),
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
            let w = !y;
            f[4] !== v || f[5] !== C ? (o = e => {
                e.preventDefault(), v && C()
            }, f[4] = v, f[5] = C, f[6] = o) : o = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(s4.e, {
                children: (0, a.jsx)(eb.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?"
                })
            }), f[7] = s) : s = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(s5.e, {
                children: (0, a.jsx)(s5.d, {
                    className: "select-none",
                    title: s,
                    subtitle: (0, a.jsx)(s4.d, {
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
            }), f[12] = c) : c = f[12], f[13] !== y || f[14] !== l ? (d = (0, a.jsx)(tO.a, {
                color: "secondary",
                disabled: y,
                onClick: l,
                children: c
            }), f[13] = y, f[14] = l, f[15] = d) : d = f[15];
            let _ = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save"
            }), f[16] = u) : u = f[16], f[17] !== y || f[18] !== _ ? (h = (0, a.jsx)(tO.a, {
                color: "primary",
                disabled: _,
                loading: y,
                type: "submit",
                children: u
            }), f[17] = y, f[18] = _, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(s5.e, {
                children: (0, a.jsxs)(s5.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== o ? (m = (0, a.jsxs)(s5.b, {
                as: "form",
                onSubmit: o,
                children: [i, p]
            }), f[23] = p, f[24] = o, f[25] = m) : m = f[25], f[26] !== y || f[27] !== m || f[28] !== n || f[29] !== w ? (g = (0, a.jsx)(s4.a, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: w,
                size: "narrow",
                children: m
            }), f[26] = y, f[27] = m, f[28] = n, f[29] = w, f[30] = g) : g = f[30], g
        }

        function s7(e) {
            (0, tA.e)(e).catch(() => {
                tl.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function s8(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(s9, {
                        conversationId: o
                    })
                })]
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function s9(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: o
                } = e;
            return (0, d.z)(s1.e) ? (n[0] !== o ? (t = (0, a.jsx)(ie, {
                conversationId: o
            }), n[0] = o, n[1] = t) : t = n[1], t) : null
        }

        function ie(e) {
            let t, n, o, s, i, l, c, u, h, p, m, y, b, x = (0, r.c)(49),
                {
                    conversationId: C
                } = e,
                w = (0, d.y)(eT.a),
                _ = (0, f.a)(),
                S = (0, v._)(),
                [j, I] = (0, g.useState)(!1),
                [T, P] = (0, g.useState)(!1),
                [E, A] = (0, g.useState)(!1),
                [M, R] = (0, g.useState)(!1),
                k = (0, g.useRef)(!1),
                N = (0, d.z)(nR.p).data,
                O = (0, d.x)(tg.j, C),
                B = (0, d.x)(tg.Y, C),
                F = (0, d.x)(tg.J, C),
                G = (0, d.x)(tS.j, C);
            x[0] !== C || x[1] !== w ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (w.get(tg.J, C) || w.get(tS.j, C) || t !== w.get(tg.j, C) || n !== w.get(tg.Y, C)) throw Error("Cannot save an unavailable temporary chat message");
                    return nE.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: is
                    }).then(io)
                },
                retry: ir
            }, x[0] = C, x[1] = w, x[2] = t) : t = x[2];
            let {
                mutateAsync: L,
                isPending: z
            } = (0, ey.a)(t), D = null != O && null != B && !F && !G && !z && !T;
            x[3] !== _ ? (n = _.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat"
            }), x[3] = _, x[4] = n) : n = x[4];
            let H = n;
            x[5] !== N?.eligibleAnnouncements ? (o = N?.eligibleAnnouncements?.includes(nR.h), x[5] = N?.eligibleAnnouncements, x[6] = o) : o = x[6];
            let q = !0 === o,
                W = !M && (E || q && D);
            x[7] !== C || x[8] !== E || x[9] !== w || x[10] !== W ? (s = () => {
                if (!W || E || k.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || k.current || (k.current = !0, (0, ec.a)(w, sZ.Bb, {
                        personalizationMode: (0, s0.a)((0, s1.k)(w, C))
                    }), A(!0), s7(w))
                }), () => {
                    e = !0
                }
            }, i = [C, E, w, W], x[7] = C, x[8] = E, x[9] = w, x[10] = W, x[11] = s, x[12] = i) : (s = x[11], i = x[12]), (0, g.useEffect)(s, i), x[13] !== w ? (l = () => {
                R(!0), k.current || (k.current = !0, s7(w))
            }, x[13] = w, x[14] = l) : l = x[14];
            let V = l;
            x[15] !== D || x[16] !== C || x[17] !== _ || x[18] !== S || x[19] !== L || x[20] !== w || x[21] !== B || x[22] !== O ? (c = async function() {
                let e;
                if (!D || null == O || null == B) return;
                let t = (0, s0.a)((0, s1.k)(w, C));
                (0, ec.a)(w, sZ.Cb, {
                    personalizationMode: t
                });
                try {
                    e = (await L({
                        sourceConversationId: O,
                        selectedLeafId: B
                    })).conversation_id
                } catch (e) {
                    (0, ec.a)(w, sZ.Db, {
                        personalizationMode: t,
                        failureCategory: (0, s0.b)(e)
                    }), w.get(U.f).danger(_.formatMessage({
                        id: "chatgptConversations.temporaryChat.save.error",
                        defaultMessage: "Couldn't save this chat. Please try again."
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.temporaryChat.save.error"
                        }
                    });
                    return
                }
                P(!0), I(!1), (0, e_.G)(w), (0, e_.J)(w, O, "remove"), (0, e_.J)(w, e, "refresh"), S((0, s2.c)(e), {
                    replace: !0
                }), w.get(U.f).success(_.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history."
                })), nE.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: B
                    }
                }).then(ia).then(t => {
                    (0, tg.bc)({
                        scope: w,
                        conversationId: e,
                        title: t
                    }), w.query.setData(tA.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, e_.G)(w), (0, e_.J)(w, e, "refresh")
                }).catch(it)
            }, x[15] = D, x[16] = C, x[17] = _, x[18] = S, x[19] = L, x[20] = w, x[21] = B, x[22] = O, x[23] = c) : c = x[23];
            let Q = c,
                $ = !D;
            x[24] !== C || x[25] !== w || x[26] !== W ? (u = () => {
                (0, ec.a)(w, sZ.Fb, {
                    personalizationMode: (0, s0.a)((0, s1.k)(w, C)),
                    coachMarkVisible: W
                }), I(!0)
            }, x[24] = C, x[25] = w, x[26] = W, x[27] = u) : u = x[27], x[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(K.b, {
                icon: {
                    16: tB.qb,
                    20: tB.rb
                }
            }), x[28] = h) : h = x[28], x[29] !== H || x[30] !== $ || x[31] !== u ? (p = (0, a.jsx)(tO.a, {
                "aria-label": H,
                color: "toolbar",
                disabled: $,
                size: "toolbar",
                uniform: !0,
                onClick: u,
                children: h
            }), x[29] = H, x[30] = $, x[31] = u, x[32] = p) : p = x[32];
            let Y = p;
            return x[33] !== V || x[34] !== _ || x[35] !== H || x[36] !== Y || x[37] !== W ? (m = W ? (0, a.jsx)(s3.a, {
                align: "end",
                description: (0, a.jsx)(eb.a, {
                    id: "chatgptConversations.temporaryChat.save.coachmark.description",
                    defaultMessage: "Want to keep this chat? You can now save it to your history."
                }),
                dismissLabel: _.formatMessage({
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
                children: Y
            }) : (0, a.jsx)(tk.a, {
                content: H,
                children: Y
            }), x[33] = V, x[34] = _, x[35] = H, x[36] = Y, x[37] = W, x[38] = m) : m = x[38], x[39] !== D || x[40] !== C || x[41] !== Q || x[42] !== j || x[43] !== z || x[44] !== w ? (y = j ? (0, a.jsx)(s6, {
                canSave: D,
                isPending: z,
                onCancel: () => {
                    (0, ec.a)(w, sZ.Ab, {
                        personalizationMode: (0, s0.a)((0, s1.k)(w, C))
                    })
                },
                onClose: () => I(!1),
                onSave: () => void Q()
            }) : null, x[39] = D, x[40] = C, x[41] = Q, x[42] = j, x[43] = z, x[44] = w, x[45] = y) : y = x[45], x[46] !== m || x[47] !== y ? (b = (0, a.jsxs)(a.Fragment, {
                children: [m, y]
            }), x[46] = m, x[47] = y, x[48] = b) : b = x[48], b
        }

        function it() {}

        function ia(e) {
            return rm.object({
                title: rm.string()
            }).parse(e).title
        }

        function ir(e, t) {
            return e < 1 && t instanceof eV.FetchError && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function io(e) {
            return rm.object({
                conversation_id: rm.string().min(1)
            }).parse(e)
        }

        function is(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var ii = n("J8FU"),
            il = n("Aluh"),
            ic = n("mG6J");

        function id(e) {
            let t, n, o = (0, r.c)(14),
                {
                    conversationId: s,
                    shouldBlockExternalEgress: i,
                    widgets: l
                } = e,
                c = (0, d.z)(il.b);
            if (i) return null;
            if (o[0] !== c || o[1] !== s || o[2] !== l) {
                let e, n, r;
                o[4] !== c || o[5] !== s ? (e = e => c.has((0, oa.e)(s, e.messageId)), o[4] = c, o[5] = s, o[6] = e) : e = o[6];
                let i = l.filter(e),
                    d = `chatgpt:${s}`;
                o[7] !== d ? (n = (0, u.Ue)(d), o[7] = d, o[8] = n) : n = o[8];
                let h = n;
                o[9] !== h || o[10] !== s ? (r = e => (0, a.jsx)(ic.b, {
                    conversationId: h,
                    chatGptConversationId: s,
                    hostId: "local",
                    item: e
                }, e.messageId), o[9] = h, o[10] = s, o[11] = r) : r = o[11], t = i.map(r), o[0] = c, o[1] = s, o[2] = l, o[3] = t
            } else t = o[3];
            return o[12] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), o[12] = t, o[13] = n) : n = o[13], n
        }
        var iu = n("JVSG"),
            ih = {
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
            ip = n("RgRP");

        function im() {
            let e, t, n, o, s, i, l, c, u, h, p, m, f, y, x, w, _ = (0, r.c)(46),
                S = (0, v._)(),
                j = (0, g.useContext)(Z.a);
            _[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, _[0] = e) : e = _[0];
            let I = (0, d.x)(C.a, e),
                T = (0, d.z)(P.a),
                E = (0, v.bb)() ?? 0,
                {
                    conversationId: A
                } = (0, v.cb)(),
                {
                    search: M,
                    state: R
                } = (0, v.Y)(),
                k = (0, d.x)(tp.a, A ?? null),
                N = (0, d.x)(null == A || tf.e, k ?? A ?? ""),
                O = R?.archivedConversationPreview === !0;
            _[1] !== M ? (t = (0, s2.i)(M), _[1] = M, _[2] = t) : t = _[2];
            let B = t;
            _[3] !== O || _[4] !== B || _[5] !== A ? (n = null == A || (0, ne.e)(A) || B || O ? null : A, _[3] = O, _[4] = B, _[5] = A, _[6] = n) : n = _[6];
            let {
                data: F
            } = (0, d.x)(tA.chatGptConversationQueryById$, n);
            if (null == A) {
                let e;
                return _[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(v.l, {
                    to: "/",
                    replace: !0
                }), _[7] = e) : e = _[7], e
            }
            _[8] !== k || _[9] !== A ? (o = k ?? (0, ne.d)(A), _[8] = k, _[9] = A, _[10] = o) : o = _[10];
            let G = o,
                L = I.isCapable && !T && !N && null != F;
            _[11] !== S ? (s = e => (S((0, s2.c)(e)), !0), _[11] = S, _[12] = s) : s = _[12];
            let z = s;
            _[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(b.a, {}), l = (0, a.jsx)(W.a.Surface, {}), _[13] = i, _[14] = l) : (i = _[13], l = _[14]), _[15] !== O ? (c = null, _[15] = O, _[16] = c) : c = _[16], _[17] !== G || _[18] !== O || _[19] !== B ? (u = B || O ? null : (0, a.jsx)(tw.a, {
                conversationId: G
            }), _[17] = G, _[18] = O, _[19] = B, _[20] = u) : u = _[20];
            let D = j ?? (L ? z : null),
                H = `${G}:${B}`;
            _[21] === Symbol.for("react.memo_cache_sentinel") ? (h = void 0, _[21] = h) : h = _[21], _[22] !== G || _[23] !== O || _[24] !== B || _[25] !== H || _[26] !== E ? (p = (0, a.jsx)(ig, {
                conversationId: G,
                viewActivation: E,
                isArchivedPreview: O,
                isReadOnlyPreview: !1,
                banner: h,
                isTemporaryChat: B,
                sharedConversationId: null
            }, H), _[22] = G, _[23] = O, _[24] = B, _[25] = H, _[26] = E, _[27] = p) : p = _[27], _[28] !== p || _[29] !== D ? (m = (0, a.jsx)(Z.a, {
                value: D,
                children: p
            }), _[28] = p, _[29] = D, _[30] = m) : m = _[30], _[31] !== m || _[32] !== c || _[33] !== u ? (f = (0, a.jsxs)(a.Fragment, {
                children: [i, l, c, u, m]
            }), _[31] = m, _[32] = c, _[33] = u, _[34] = f) : f = _[34];
            let q = f;
            _[35] !== q || _[36] !== G || _[37] !== O || _[38] !== B ? (y = B || O ? q : (0, a.jsx)(tP, {
                conversationId: G,
                children: q
            }), _[35] = q, _[36] = G, _[37] = O, _[38] = B, _[39] = y) : y = _[39];
            let K = y;
            return _[40] !== q || _[41] !== K ? (x = K, _[40] = q, _[41] = K, _[42] = x) : x = _[42], _[43] !== G || _[44] !== x ? (w = (0, a.jsx)(tq.a, {
                conversationId: G,
                children: x
            }), _[43] = G, _[44] = x, _[45] = w) : w = _[45], w
        }

        function ig(e) {
            let t, n, l, b, C, W, Z, ey, eb, ex, ew, eS, ej, eI, eT, eP, eE, eA, eM, eR, tw, tT, tP, tk, tN, tO, tB, tF, tG, tz, tD, tq, tW, tU, tV, tQ, tX, tJ, nt, nn, na, nr, no, ns, ni, nl, nc, nu, np, ny, nx, nC, nw, n_, nS, nj, nI, nT, nP, nE, nA, nM, nR, nk, nN, nO, nB, nF, nG, nL, nz, nD, nH, nq, nW, nK, nU, nQ, nX, nZ, n2, n3, n4, n6, n7, n8, n9, at, ai, al, ac, ad, au, ah, ap, am, ag, af, av, ay, ab, ax, aC, aw, a_ = (0, r.c)(603),
                {
                    conversationId: aS,
                    viewActivation: aj,
                    isArchivedPreview: aI,
                    inlinePreviewLayout: aT,
                    isInlinePreview: aP,
                    hideModelPicker: aE,
                    showFilePicker: aA,
                    disableAutoFocus: aM,
                    hideInitialUserMessage: aR,
                    transcriptPresentation: ak,
                    scrollOrigin: aN,
                    isReadOnlyPreview: aO,
                    onSubmitAccepted: aB,
                    isTemporaryChat: aF,
                    sharedConversationId: aL,
                    sharedPostContinuation: az,
                    requiredSystemHints: aD,
                    routePattern: aH,
                    composerLeadingContent: aq,
                    headerLeadingContent: aW,
                    banner: aK,
                    onRetryMissingConversation: aU,
                    sharedProjectConversation: aV,
                    workspace: aQ
                } = e,
                a$ = void 0 === aj ? 0 : aj,
                aY = void 0 !== aI && aI,
                aX = void 0 !== aP && aP,
                aJ = void 0 === aA || aA,
                aZ = (0, d.y)(em.a),
                a0 = (0, g.useContext)(j.a),
                a1 = (0, d.x)(aG.f, a0),
                a2 = (0, d.z)(null != a1 && P.a);
            a_[0] !== a0 || a_[1] !== aS ? (t = {
                auth: a0,
                conversationId: aS
            }, a_[0] = a0, a_[1] = aS, a_[2] = t) : t = a_[2];
            let a3 = (0, d.x)(null != a0 && !a0.isLoading && null === a0.authMethod && aG.h, t),
                {
                    conversationId: a4
                } = (0, v.cb)();
            a_[3] !== aS || a_[4] !== aX || a_[5] !== a4 || a_[6] !== aZ || a_[7] !== aQ ? (n = () => (0, ne.e)(aX || null != aQ || null == aZ.get(tg.j, aS) ? aS : a4 ?? ""), a_[3] = aS, a_[4] = aX, a_[5] = a4, a_[6] = aZ, a_[7] = aQ, a_[8] = n) : n = a_[8];
            let [a5, a6] = (0, g.useState)(n);
            a_[9] !== a5 || a_[10] !== aS || a_[11] !== aZ ? (l = () => a5 && !aZ.get(sb.b, aS) ? aS : null, a_[9] = a5, a_[10] = aS, a_[11] = aZ, a_[12] = l) : l = a_[12];
            let [a7] = (0, g.useState)(l), a8 = null != aL || null != a1 && !(void 0 !== az && az && a2);
            a_[13] !== aS || a_[14] !== aY || a_[15] !== aX || a_[16] !== a8 || a_[17] !== aZ ? (b = () => {
                if (!a8 && !aY && !aX) return function(e, t) {
                    let n = e.get(tp.a, t) ?? t,
                        a = e.get(R.b, t),
                        r = e.get(tb, n),
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
                        i = e.get(e4.h),
                        l = s.observedTurn,
                        c = null;

                    function d(t) {
                        for (let n of t.toReversed())
                            if (!s.initialCreationMessageIds.has(n.messageId) && (0, tr.openSpacePageSidePanelTab)(e, n.pageId, {
                                    title: n.title,
                                    openSource: "turn_auto_open"
                                }).opened) {
                                s.openedCreatedPage = !0;
                                break
                            }
                    }
                    let u = e.watch(e => {
                            let {
                                get: n
                            } = e;
                            if (n(em.j) || null != n(tg._, t)) return;
                            let a = n(tg.R, t);
                            if (!a?.length) return;
                            let r = n(tn.e),
                                o = n(tg.j, t),
                                s = n(tg.y, t);
                            if (null != r && null != o && (null == s || "tpp" === s))
                                for (let e of a)(0, ts.g)(r, e.pageId, o, s ?? null, "created")
                        }),
                        p = e.watch(n => {
                            let {
                                get: a
                            } = n, r = a(tg.ab, t), o = a(e4.h), u = a(tg.cb, t);
                            if ((0, tg.Bb)(r)) {
                                l = !1;
                                let e = a(R.b, t),
                                    n = a(tg.db, t),
                                    r = !s.observedTurn || s.attemptId !== e;
                                if (s.attemptId = e, r) {
                                    let e = c;
                                    c = null, e?.abort(), s.observedTurn = !0, s.activeRequestId = n, s.dismissed = u, s.openedCreatedPage = !1
                                } else s.activeRequestId = n ?? s.activeRequestId, s.dismissed = s.dismissed || u || i && !o;
                                i = o;
                                let h = !u && !s.dismissed && !o && !s.openedCreatedPage && !a(em.j) && !a(tg.D, t) && !a(tf.e, t),
                                    p = [];
                                if ((r || h) && (p = a(tg.R, t) ?? []), r) {
                                    s.initialCreationMessageIds = new Set(p.map(e => e.messageId));
                                    return
                                }
                                h && d(p);
                                return
                            }
                            if (!s.observedTurn) return;
                            let p = a(tg.w, t);
                            if ("idle" !== r || u || null != p && "completed" !== p.result || null != e.get(tg.D, t) || e.get(em.j) || e.get(tf.e, t)) {
                                s.observedTurn = !1;
                                return
                            }
                            if (l) {
                                if (s.dismissed || o || s.openedCreatedPage || a(R.b, t) !== s.attemptId) {
                                    s.observedTurn = !1;
                                    return
                                }
                                if (p?.result !== "completed") return;
                                d(a(tg.R, t) ?? []), s.observedTurn = !s.openedCreatedPage;
                                return
                            }
                            if (s.observedTurn = !1, p?.result !== "completed" || p.requestId !== s.activeRequestId) return;
                            let m = e.get(tg.N, t);
                            if (null == m) return;
                            let g = (0, h.b)({
                                    mapping: m,
                                    current_node: e.get(tg.C, t)
                                }),
                                f = g.findLast(ty.b);
                            if (f?.status !== "finished_successfully") return;
                            let v = [...(0, tm.e)(g).outputs, ...g.flatMap(e => (0, tm.c)(e).map(e => e.file))],
                                y = e.get(td.a, t)?.at(-1);
                            if (y?.turn.status !== "complete") return;
                            let b = [...(0, e6.b)(g), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                            if (!((0, e5.a)(e, b, !s.dismissed) || !s.dismissed && !s.openedCreatedPage && (0, to.a)(e, b)) && !s.dismissed && !o && !s.openedCreatedPage) {
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
                                                let o = (0, tu.a)(r),
                                                    s = null == o ? null : (0, e7.a)(o),
                                                    i = v.find(e => null != e.fileId && e.fileId === (r.file_id ?? r.id) || null != e.libraryFileId && e.libraryFileId === r.library_file_id);
                                                if ("file" !== r.type || !(0, e2.a)(r) || null == o || null == s || !(0, e7.f)(s) || null == i && null == (0, th.b)(r.sandbox_path) && !(0, th.b)(r.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > te.a) continue;
                                                let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                    d = (0, tc.b)(r, {
                                                        fileName: o,
                                                        messageId: l
                                                    });
                                                if (null == d) continue;
                                                if (e.get(eO.g)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                                let u = e.get(tg.j, t) ?? t,
                                                    h = `${l??"message"}:${String(a)}:${o}`,
                                                    p = `chatgpt-file:${u}:${h}`,
                                                    m = {
                                                        turnId: y.id,
                                                        inputMessageId: g.find(e => "user" === e.author.role)?.id ?? null,
                                                        messageId: l ?? null
                                                    },
                                                    f = new AbortController,
                                                    b = (0, tv.openChatGptFile)(e, {
                                                        conversationId: u,
                                                        fileName: o,
                                                        gizmoId: e.get(tg.T, t),
                                                        sharedConversationId: e.get(tg._, t),
                                                        target: d,
                                                        tabKey: h,
                                                        browserPreview: !0,
                                                        isAccessBlocked: e => e.get(tf.e, t),
                                                        downloadFallback: !1,
                                                        openSource: "auto_open",
                                                        originatingTurn: m,
                                                        signal: f.signal,
                                                        onOpened: () => {
                                                            let t = e.get(e3.l.activeTab$);
                                                            f.signal.aborted || t?.tabId !== p || t.tabType.kind !== e8.a || ((0, ec.a)(e, e1.CodexFileOpened, {
                                                                threadId: u,
                                                                turnId: m.turnId,
                                                                inputMessageId: m.inputMessageId ?? void 0,
                                                                messageId: m.messageId ?? void 0,
                                                                fileExtension: (0, e9.c)(o) ?? void 0,
                                                                openSource: "auto_open",
                                                                openDestination: "codex_preview"
                                                            }), (0, ec.a)(e, e1.CodexWorkspaceFilePreviewAttempted, (0, tt.a)({
                                                                modifiedClick: !1,
                                                                openedSidePanelTarget: "artifact",
                                                                openSource: "auto_open",
                                                                originatingTurn: m,
                                                                path: o,
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
                        u(), p(), c?.abort(), null != s.attemptId && e.set(tb, n, {
                            ...s,
                            attemptId: s.attemptId
                        })
                    }
                }(aZ, aS)
            }, C = [aS, aY, aX, a8, aZ], a_[13] = aS, a_[14] = aY, a_[15] = aX, a_[16] = a8, a_[17] = aZ, a_[18] = b, a_[19] = C) : (b = a_[18], C = a_[19]), (0, g.useEffect)(b, C);
            let a9 = (0, d.x)(tZ.a, aS),
                re = a8 ? null : a9;
            a_[20] !== aL ? (W = () => null == aL ? null : (0, ne.b)(), a_[20] = aL, a_[21] = W) : W = a_[21];
            let [rt] = (0, g.useState)(W), rn = rt ?? aS;
            a_[22] !== rn ? (Z = (0, eg.o)({
                routeKind: "chatgpt-thread",
                conversationId: rn
            }), a_[22] = rn, a_[23] = Z) : Z = a_[23];
            let ra = null != (0, d.x)(ee.c, Z);
            a_[24] !== rn || a_[25] !== aD || a_[26] !== aZ ? (ey = () => {
                if (null != aD && 0 !== aD.length) return (0, oS.b)(aZ, rn, aD)
            }, eb = [rn, aD, aZ], a_[24] = rn, a_[25] = aD, a_[26] = aZ, a_[27] = ey, a_[28] = eb) : (ey = a_[27], eb = a_[28]), (0, g.useEffect)(ey, eb);
            let rr = (0, g.useRef)(null),
                [ro, rs] = (0, g.useState)(null),
                [ri, rl] = (0, g.useState)(null);
            a_[29] === Symbol.for("react.memo_cache_sentinel") ? (ex = () => () => rl(null), a_[29] = ex) : ex = a_[29], a_[30] !== a$ ? (ew = [a$], a_[30] = a$, a_[31] = ew) : ew = a_[31], (0, g.useLayoutEffect)(ex, ew);
            let [rc, rd] = (0, g.useState)(null), ru = ri?.activation === a$ ? ri.messageId : null, rh = rc === a$, rp = (0, g.useRef)(null);
            a_[32] === Symbol.for("react.memo_cache_sentinel") ? (eS = () => {
                let e = new AbortController;
                return rp.current = e, () => e.abort()
            }, a_[32] = eS) : eS = a_[32], a_[33] !== a$ ? (ej = [a$], a_[33] = a$, a_[34] = ej) : ej = a_[34], (0, g.useLayoutEffect)(eS, ej);
            let rm = (0, f.a)(),
                rg = (0, v._)(),
                rf = (0, eH.d)(),
                rv = (0, d.x)(tg.j, aS);
            a_[35] !== aZ ? (eI = e => {
                (0, tx.c)(aZ, e)
            }, a_[35] = aZ, a_[36] = eI) : eI = a_[36];
            let ry = (0, g.useEffectEvent)(eI);
            a_[37] !== rv || a_[38] !== ry ? (eT = () => () => {
                null != rv && ry(rv)
            }, a_[37] = rv, a_[38] = ry, a_[39] = eT) : eT = a_[39], a_[40] !== rv ? (eP = [rv], a_[40] = rv, a_[41] = eP) : eP = a_[41], (0, g.useEffect)(eT, eP);
            let rb = (0, d.x)(as.a, aS),
                rx = (0, d.x)(tg.N, aS),
                rC = (0, d.x)(tA.chatGptConversationQueryById$, a8 || aF && null != rx ? null : rv);
            (0, d.x)(a8 ? null : tR.a, rv);
            let rw = (0, d.x)(!a3 && tf.e, aS),
                r_ = rv ?? aS,
                rS = (0, d.x)(tg.C, aS),
                rj = (0, d.x)(tg.y, aS),
                rI = (0, d.x)(tg.T, aS),
                rT = (0, d.x)(tg.D, aS),
                rP = (0, d.x)(tg.O, aS),
                rE = (0, d.x)(tg.ab, aS),
                rA = (0, d.x)(tg.X, aS),
                rM = (0, d.x)(tg.Z, aS),
                rR = (0, d.x)(ae, aS);
            a_[42] !== rm || a_[43] !== rR ? (eE = rR ?? rm.formatMessage(eC.a.newChat), a_[42] = rm, a_[43] = rR, a_[44] = eE) : eE = a_[44];
            let rk = eE,
                rN = (0, d.x)(tg.E, aS),
                rO = (0, d.x)(tg.eb, aS),
                rB = (0, d.x)(tg.fb, aS),
                rF = (0, d.x)(tA.n, aL),
                rG = (0, g.useRef)(null),
                rL = rF.isSuccess && null != rF.data ? aL : null;
            a_[45] !== aZ ? (eA = e => {
                (0, ec.a)(aZ, s.i, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, a_[45] = aZ, a_[46] = eA) : eA = a_[46];
            let rz = (0, g.useEffectEvent)(eA);
            a_[47] !== rL || a_[48] !== rz ? (eM = () => {
                null != rL && rG.current !== rL && (rG.current = rL, rz(rL))
            }, a_[47] = rL, a_[48] = rz, a_[49] = eM) : eM = a_[49], a_[50] !== rL ? (eR = [rL], a_[50] = rL, a_[51] = eR) : eR = a_[51], (0, g.useEffect)(eM, eR);
            let rD = (0, d.x)(tS.q, aS),
                rH = (0, d.x)(tS.p, aS),
                rq = (0, d.x)(tS.n, aS),
                rW = (0, d.x)(tS.r, aS),
                rK = (0, d.x)(tS.o, aS),
                rV = (0, d.x)(tS.j, aS),
                rQ = (0, d.x)(tg.cb, aS),
                r$ = (0, d.x)(tS.B, aS);
            a_[52] !== rE ? (tw = (0, tg.Bb)(rE), a_[52] = rE, a_[53] = tw) : tw = a_[53];
            let rY = tw,
                rX = (0, d.x)(t1, aS),
                rJ = (0, d.z)(T.v),
                rZ = (0, d.z)(T.s),
                r0 = (0, d.z)(T.u),
                r1 = (0, d.z)(T.n),
                r2 = (0, d.z)(T.b),
                r3 = (0, d.z)(T.o),
                r4 = (0, d.z)(eo.pagesEnabled$);
            a_[54] === Symbol.for("react.memo_cache_sentinel") ? (tT = (0, L.a)(), a_[54] = tT) : tT = a_[54];
            let r5 = (0, eN.f)(tT);
            a_[55] === Symbol.for("react.memo_cache_sentinel") ? (tP = (0, et.b)(), a_[55] = tP) : tP = a_[55];
            let r6 = (0, eN.f)(tP),
                r7 = null != rx,
                r8 = (0, d.z)(sk.f),
                r9 = a8 ? rF : rC;
            a5 && null != r9.data && a6(!1);
            let oe = a5 && r7 && null == r9.data,
                ot = r9.isLoading || !oe && r9.isError;
            a_[56] !== ro || a_[57] !== rn || a_[58] !== ot || a_[59] !== a8 || a_[60] !== aF || a_[61] !== aZ ? (tk = (e, t, n, a) => {
                !(e || aZ.get(ep.a)) && ((0, tS.b)(aZ, rn, t, void 0, n, a), ro?.focus(), a8 || ot || (0, tE.f)(aZ, rn, {
                    isTemporaryChat: aF
                }))
            }, a_[56] = ro, a_[57] = rn, a_[58] = ot, a_[59] = a8, a_[60] = aF, a_[61] = aZ, a_[62] = tk) : tk = a_[62];
            let on = tk;
            a_[63] !== aS || a_[64] !== a1 ? (tO = null == (tN = null == a1 ? null : (0, sq.a)(a1, aS)) ? void 0 : (0, ao.a)(tN), a_[63] = aS, a_[64] = a1, a_[65] = tN, a_[66] = tO) : (tN = a_[65], tO = a_[66]);
            let oa = tO,
                or = tN ?? r9.data,
                oo = rN ? rO : or?.title,
                os = (0, d.z)(I.h),
                oi = (0, d.z)(I.g),
                ol = "chatgpt-thread" === aZ.value.routeKind && aZ.value.workSideChat?.conversationId === aS,
                oc = or?.conversation_origin ?? rj ?? (null != aQ || ol ? "tpp" : null),
                od = "tpp" === oc,
                ou = od && "denied" === rJ.status && "go-plan" === rJ.reason,
                oh = (0, d.z)(eB.e),
                op = (0, v.Y)(),
                om = op.state;
            (0, d.z)(ev.b);
            let og = (0, d.x)(eO.e, "3901104270") && om?.openGoalPlan === !0,
                of = (0, eD.a)();
            a_[67] !== oc ? (tB = (0, B.p)(oc), a_[67] = oc, a_[68] = tB) : tB = a_[68];
            let ov = tB,
                oy = (0, d.z)(ng.b),
                ob = (0, d.z)(!!ov && T.w),
                ox = void 0 !== aO && aO || ob,
                oC = null == oh || oh.isFullWidth ? void 0 : oh.width ?? 420,
                ow = !0 === (0, d.z)(ov ? null : e$.d),
                o_ = (0, d.z)(ov ? eh.b : eh.a),
                oj = !ov && o_,
                oI = !r6 || r3 && !ov,
                oT = !a8 && r3 && !ov,
                oP = oT && r1,
                oE = a8 && or?.is_read_only === !0 || aV?.is_read_only === !0;
            a_[69] !== aS || a_[70] !== a8 || a_[71] !== aZ ? (tF = () => null, a_[69] = aS, a_[70] = a8, a_[71] = aZ, a_[72] = tF) : tF = a_[72];
            let [oA] = (0, g.useState)(tF), oM = or?.gizmo_id ?? rI ?? oA?.gizmoId ?? null;
            a_[73] !== oM || a_[74] !== a8 ? (tG = a8 || null == oM || (0, t8.a)(oM) ? null : oM, a_[73] = oM, a_[74] = a8, a_[75] = tG) : tG = a_[75];
            let oR = tG,
                ok = (0, d.x)(tI, rn);
            a_[76] !== or || a_[77] !== aS || a_[78] !== rk || a_[79] !== op.pathname || a_[80] !== aL || a_[81] !== a1 ? (tz = (0, tL.d)({
                conversation: or,
                conversationId: aS,
                conversationTitle: rk,
                pathname: op.pathname,
                sharedConversationId: aL,
                sharedPost: a1
            }), a_[76] = or, a_[77] = aS, a_[78] = rk, a_[79] = op.pathname, a_[80] = aL, a_[81] = a1, a_[82] = tz) : tz = a_[82];
            let oN = tz,
                oO = !r0 && null == or && null == oA,
                oB = null != rv && !rw && !oO && (r0 || rZ),
                oF = null;
            a8 || (oF = null != or ? (0, e_.A)(or) : (0, t8.a)(rI) ? rI : oA?.projectId ?? null);
            let oG = (0, d.x)(eJ.c, a8 ? null : aS),
                oL = a8 || ov || null != oF || oG || null == ok ? oR : ok.id;
            a_[83] !== rn || a_[84] !== oL || a_[85] !== op.pathname ? (tD = {
                gizmoId: oL,
                conversationId: rn,
                visitKey: op.pathname
            }, a_[83] = rn, a_[84] = oL, a_[85] = op.pathname, a_[86] = tD) : tD = a_[86];
            let oz = (0, d.x)(sC.d, tD),
                {
                    data: oD
                } = (0, i.a)({
                    enabled: null != oF,
                    queryFn: () => {
                        if (null == oF) throw Error("Expected a ChatGPT project id");
                        return (0, O.c)(oF)
                    },
                    queryKey: (0, e_.D)(oF ?? ""),
                    staleTime: ez.b.ONE_MINUTE
                }),
                oH = null != oF && (oD?.gizmo.share_recipient !== "private" || (oD?.gizmo.sharing?.subjects?.length ?? 0) > 0);
            a_[87] !== or?.context_scopes || a_[88] !== oD?.gizmo.gizmo_snorlax_type ? (tq = or?.context_scopes?.includes("HEALTH") === !0 || oD?.gizmo.gizmo_snorlax_type === "potion", a_[87] = or?.context_scopes, a_[88] = oD?.gizmo.gizmo_snorlax_type, a_[89] = tq) : tq = a_[89];
            let oq = tq,
                oW = (0, s_.a)(or?.context_scopes, {
                    projectType: oD?.gizmo.gizmo_snorlax_type,
                    projectId: oF,
                    lockedProjectId: r8?.projectId
                }),
                oK = rw || oH || oq || oW;
            a_[90] !== oD?.gizmo.display.name || a_[91] !== oD?.gizmo.display.name.trim ? (tW = oD?.gizmo.display.name.trim() || null, a_[90] = oD?.gizmo.display.name, a_[91] = oD?.gizmo.display.name.trim, a_[92] = tW) : tW = a_[92];
            let oU = tW,
                oV = oD?.gizmo.display.theme,
                oQ = oD?.gizmo.display.emoji;
            a_[93] !== oD ? (tU = "shared" === (0, t9.b)(oD) ? (0, a.jsx)(K.b, {
                icon: {
                    assets: {
                        16: ih,
                        20: ip.a
                    }
                }
            }) : void 0, a_[93] = oD, a_[94] = tU) : tU = a_[94], a_[95] !== oV || a_[96] !== oQ || a_[97] !== tU ? (tV = (0, a.jsx)(ed.a, {
                className: "icon-leading",
                size: "leading",
                color: oV,
                icon: oQ,
                sharedIcon: tU
            }), a_[95] = oV, a_[96] = oQ, a_[97] = tU, a_[98] = tV) : tV = a_[98];
            let o$ = tV,
                oY = (0, d.x)(tg.i, aS),
                oX = oY?.metadata ?? or?.context_truncation_continuation,
                oJ = a8 || aF || null != aV || null == os || or?.owner?.user_id == null || null == oF || or.owner.user_id === (oi ? os.split("__")[0] : os) ? null : (0, n0.d)(oF, or.conversation_id, or.owner.user_id),
                oZ = !a8 && !aY && !ox,
                o0 = (0, d.x)(oZ ? sL.c : null, aS),
                o1 = o0?.isReviewing === !0,
                o2 = null == o0 ? rx : o0.conversation.mapping,
                o3 = null == o0 ? rS : o0.conversation.current_node,
                o4 = null == rx ? or : null,
                o5 = o2 ?? o4?.mapping,
                o6 = (0, eN.i)();
            a_[99] !== o5 || a_[100] !== o6 ? (tQ = function(e, t) {
                if (null != e && Object.values(e).some(e => e?.message != null && (0, sw.b)(e.message))) return () => (0, eN.d)(t, "2347981323").get("enabled", !1)
            }(o5, o6), a_[99] = o5, a_[100] = o6, a_[101] = tQ) : tQ = a_[101];
            let o7 = tQ,
                o8 = (0, d.z)(null != o7 ? eU.h : void 0),
                o9 = (0, d.x)(null != o7 && !a8 && !aY && !o1 && eW.a, aS),
                se = (0, d.z)(o9 ? eK.a : void 0);
            a_[102] === Symbol.for("react.memo_cache_sentinel") ? (tX = (0, tM.a)(), a_[102] = tX) : tX = a_[102];
            let st = tX;
            a_[103] === Symbol.for("react.memo_cache_sentinel") ? (tJ = new WeakMap, a_[103] = tJ) : tJ = a_[103];
            let sn = tJ;
            a_[104] !== o_ || a_[105] !== oj || a_[106] !== oX || a_[107] !== oc || a_[108] !== o3 || a_[109] !== o2 || a_[110] !== oy || a_[111] !== o7 || a_[112] !== o4 || a_[113] !== aY || a_[114] !== a8 || a_[115] !== rY || a_[116] !== ov || a_[117] !== rP || a_[118] !== rq || a_[119] !== rK || a_[120] !== rH || a_[121] !== rD || a_[122] !== rW || a_[123] !== o1 || a_[124] !== aZ.get || a_[125] !== o0?.isEntering || a_[126] !== rb || a_[127] !== rE || a_[128] !== se || a_[129] !== o8 ? (nt = () => st({
                conversation: o4,
                contextContinuation: oX,
                clinicalSearchEnabled: oj,
                clinicalCitationsEnabled: o_,
                enableCloudBrowserActivity: oy,
                conversationOrigin: oc,
                enableVoiceImageLoadingFix: o7,
                voiceImageSessionId: o8,
                voiceImageGenerationSpawnIds: se,
                enableImageGenerationLoadingState: !a8 && !aY && !o1 && "error" !== rE,
                getRenderTelemetry: e => (0, ii.c)(aZ.get, e),
                isWorkConversation: ov,
                isStreaming: !a8 && !aY && !o1 && rY,
                mode: "conversation",
                mcpResponseCache: sn,
                moderationDisclaimersByMessageId: rP,
                ...rb,
                pendingSubmission: null == rD || a8 || o1 || o0?.isEntering ? null : {
                    attachments: rq,
                    commentAttachments: rK,
                    prompt: rD,
                    ...rH,
                    selectedTextAttachments: rW
                },
                threadCurrentNode: o3,
                threadMapping: o2
            }), a_[104] = o_, a_[105] = oj, a_[106] = oX, a_[107] = oc, a_[108] = o3, a_[109] = o2, a_[110] = oy, a_[111] = o7, a_[112] = o4, a_[113] = aY, a_[114] = a8, a_[115] = rY, a_[116] = ov, a_[117] = rP, a_[118] = rq, a_[119] = rK, a_[120] = rH, a_[121] = rD, a_[122] = rW, a_[123] = o1, a_[124] = aZ.get, a_[125] = o0?.isEntering, a_[126] = rb, a_[127] = rE, a_[128] = se, a_[129] = o8, a_[130] = nt) : nt = a_[130], o0?.isEntering, a_[131] !== nt ? (nn = nt(), a_[131] = nt, a_[132] = nn) : nn = a_[132];
            let {
                isConversationEmpty: sa,
                renderedConversation: sr,
                renderedTurns: so,
                showPendingLoadingMessage: ss
            } = nn;
            a_[133] !== aX || a_[134] !== ov || a_[135] !== sr || a_[136] !== aZ ? (na = () => {
                if (!aX && ov) return aZ.set(iu.b, sr), () => {
                    aZ.get(iu.b) === sr && aZ.set(iu.b, null)
                }
            }, nr = [aX, ov, sr, aZ], a_[133] = aX, a_[134] = ov, a_[135] = sr, a_[136] = aZ, a_[137] = na, a_[138] = nr) : (na = a_[137], nr = a_[138]), (0, g.useEffect)(na, nr);
            let si = (0, d.x)(eZ.g, aS),
                sl = ss && null == si,
                sc = !ov && !a8 && !aX && !aY,
                sd = (0, d.x)(oj || aX || a8 ? null : M.a, aS),
                su = (sd?.length ?? 0) > 0,
                sh = (0, d.x)(sc ? R.b : null, aS),
                sp = JSON.stringify([aS, a$]),
                [sm, sg] = (0, g.useState)(null),
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
                    let d = null == n ? [] : (0, h.b)(n, B.n),
                        u = null == e || e.visitKey !== c,
                        p = d.find(B.n)?.id ?? (u || i ? null : e.userMessageId),
                        m = i ? null : d.findLast(F)?.id ?? null,
                        g = !u && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != p && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== p),
                        f = new Set(u ? [] : e.observedSummaryRequestIds),
                        v = !u && !g && e.hasConsumedSummaryRequest,
                        y = !v && !u && null != e.conversation && (s || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != m && !f.has(m);
                    if (null != n && (u || null == e.conversation || !s))
                        for (let e of Object.values(n.mapping)) e?.message?.id != null && F(e.message) && f.add(e.message.id);
                    else null != m && f.add(m);
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
                        userMessageId: p,
                        hasConsumedSummaryRequest: v || null != m,
                        isOpen: o ? !u && e.suppressAutoOpen && e.isOpen : r && (l && (u || !e.hasGoal) || y) || !u && (!g || l) && (!e.hasGoal || l) && e.isOpen,
                        shouldPreventAutoFocus: u || g || l && !e.hasGoal || y && !e.isOpen || e.shouldPreventAutoFocus
                    }
                }(sm, {
                    completionAttemptId: sh,
                    allowAutoOpen: !(0, J.a)("(width < 768px)"),
                    suppressAutoOpen: og,
                    conversation: sc && (oe || !ot) ? sr : null,
                    isTurnActive: rY,
                    hasGoal: su,
                    isPendingUserTurn: rV && null != rD && !rY,
                    visitKey: sp
                });
            sv !== sm && sg(sv);
            let sy = null == aQ && !oj && !aX && !a8 && (od || sc) && !aY,
                sj = sy && sr?.mapping === rx && sr?.current_node === rS,
                sI = (0, d.x)(sj ? tg.q : null, aS),
                sT = sr?.mapping,
                sP = sr?.current_node;
            a_[139] !== sT || a_[140] !== sP ? (no = c()(() => {
                let e = null == sT ? [] : (0, h.a)({
                    mapping: sT,
                    current_node: sP
                });
                return {
                    messages: e,
                    resources: (0, tm.e)(e)
                }
            }), a_[139] = sT, a_[140] = sP, a_[141] = no) : no = a_[141];
            let sE = no;
            a_[142] !== sc || !1 !== a_[143] || a_[144] !== rV || a_[145] !== sy || a_[146] !== rY || a_[147] !== ov || a_[148] !== r4 || a_[149] !== rq || a_[150] !== sE || a_[151] !== so || a_[152] !== sI ? (ns = sy ? c()(() => (0, nh.a)({
                automationReferences: sI,
                includePages: r4,
                includeSources: ov || !1,
                isTurnActive: rY || rV,
                ...sE(),
                pendingAttachments: rV ? rq : [],
                turns: so
            })) : null, ni = sc ? ns?.() : null, a_[142] = sc, a_[143] = !1, a_[144] = rV, a_[145] = sy, a_[146] = rY, a_[147] = ov, a_[148] = r4, a_[149] = rq, a_[150] = sE, a_[151] = so, a_[152] = sI, a_[153] = ns, a_[154] = ni) : (ns = a_[153], ni = a_[154]);
            let sA = ni,
                sN = su || null != sA && (sA.outputs.length > 0 || sA.progressSteps.length > 0 || sA.automationIds.length > 0 || sA.subagents.length > 0 || !rw && sA.browserScreenshots.length > 0),
                sO = sy && (!sc || sN),
                sB = sO && null == oh,
                sF = JSON.stringify([sp, null != oh]),
                sz = sc ? sv.isOpen : void 0,
                sH = sO && !oh?.isFullWidth;
            a_[155] !== oC || a_[156] !== sF || a_[157] !== sz || a_[158] !== sH ? (nl = {
                contentShiftResetKey: sF,
                controlledIsOpen: sz,
                isEnabled: sH,
                floatingPanelWidth: oC
            }, a_[155] = oC, a_[156] = sF, a_[157] = sz, a_[158] = sH, a_[159] = nl) : nl = a_[159];
            let sU = (0, eG.a)(nl),
                sV = rv ?? aS,
                sQ = od && null == rB,
                s$ = rT ?? r$,
                sY = r9.isLoading && !r7,
                sX = !sY && (null != or || r7),
                sZ = sX && (oe || !ot),
                s0 = r9.isError && !oe;
            a_[160] !== r9.error || a_[161] !== aX ? (nc = aX || (0, eV.e)(r9.error) || !(r9.error instanceof eV.FetchError && [401, 403, 404].includes(r9.error.status)), a_[160] = r9.error, a_[161] = aX, a_[162] = nc) : nc = a_[162];
            let s1 = nc;
            a_[163] !== aS || a_[164] !== a8 || a_[165] !== rv ? (nu = null, a8 || (nu = rv ?? ((0, ne.e)(aS) ? null : aS)), a_[163] = aS, a_[164] = a8, a_[165] = rv, a_[166] = nu) : nu = a_[166], a_[167] !== ru || a_[168] !== or || a_[169] !== oc || a_[170] !== rm || a_[171] !== aF || a_[172] !== ov || a_[173] !== ou || a_[174] !== rg || a_[175] !== nu || a_[176] !== aH || a_[177] !== aZ || a_[178] !== a$ ? (np = (e, t) => {
                let n = void 0 !== t && t;
                if (null == nu || null != ru || ou) return;
                let a = rp.current?.signal;
                null == a || a.aborted || (rl({
                    messageId: e,
                    activation: a$
                }), (0, tg.h)(aZ, {
                    conversationId: nu,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, eY.a)(aZ, "opened"), rg(null == aH ? (0, s2.c)(t, {
                        isTemporaryChat: aF
                    }) : (0, v.C)(aH, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, eY.a)(aZ, "failed"), rl(null), aZ.get(U.f).danger(rm.formatMessage({
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
                                surface: (0, t4.b)(null == oc && null == or ? null : ov),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, a_[167] = ru, a_[168] = or, a_[169] = oc, a_[170] = rm, a_[171] = aF, a_[172] = ov, a_[173] = ou, a_[174] = rg, a_[175] = nu, a_[176] = aH, a_[177] = aZ, a_[178] = a$, a_[179] = np) : np = a_[179];
            let s3 = (0, eq.a)(np);
            a_[180] !== or || a_[181] !== aS || a_[182] !== oc || a_[183] !== rm || a_[184] !== ow || a_[185] !== aF || a_[186] !== ov || a_[187] !== aZ || a_[188] !== rv ? (ny = async (e, t, n, a) => {
                if (!ow) try {
                    await async function(e, t) {
                        let {
                            conversationId: n,
                            isTemporaryChat: a = !1,
                            messageId: r,
                            prompt: o,
                            renderFormat: s,
                            inlineSystemHints: i
                        } = t;
                        if (e.get(tS.j, n)) throw new tY.a("edit_message_busy", "The chat is busy.");
                        let l = e.get(tg.y, n);
                        if ("tpp" === l) throw new tY.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                        if (!e.get(t1, n)) throw new tY.a("edit_message_busy", "The chat is busy.");
                        let c = e.get(t$.b, {
                            conversationId: n,
                            messageId: r
                        });
                        if (null == c) throw new tY.a("edit_message_target_unavailable", "The user message could not be edited.");
                        let {
                            selectedModel: d
                        } = c, u = o.trim(), h = (0, t$.c)(c.message, e.get, i), m = (0, t0.c)({
                            message: c.message,
                            prompt: u,
                            renderFormat: s,
                            systemHints: h,
                            inlineSystemHints: i
                        }), g = (0, p.f)(m.message.metadata), f = m.message.content, v = "multimodal_text" === f.content_type && f.parts.some(e => "string" != typeof e);
                        if (0 === u.length && 0 === g.length && !v) throw new tY.a("edit_message_empty", "The edited message cannot be empty.");
                        if (e.get(eO.e, "3574573347")) {
                            let t = e.get(t$.a, n);
                            t?.messageId === r && t.prompt === o && tK()((0, t$.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(t$.a, n, {
                                messageId: r,
                                prompt: o,
                                isTemporaryChat: a,
                                inlineSystemHints: i
                            }), (0, tE.f)(e, n, {
                                isTemporaryChat: a
                            }))
                        }
                        let y = t2(e.get, n),
                            b = y.request.current,
                            x = () => t2(e.get, n).request.current === b && tK()(e.get(t$.b, {
                                conversationId: n,
                                messageId: r
                            }), c) && !(0, tg.Bb)(e.get(tg.ab, n));
                        e.set(tS.j, n, !0);
                        try {
                            if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(tZ.a, n) && (await b.stop(), await b.closed), !x()) throw new tY.a("edit_message_target_unavailable", "The edited message or active response changed.");
                            await (0, t0.submitChatGPTCompletion)(e, {
                                isSubmissionCurrent: x,
                                isRequestCurrent: () => e.get(tg.C, n) === m.message.id,
                                attachments: g,
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
                            e.set(tS.j, n, !1)
                        }
                    }(aZ, {
                        conversationId: aS,
                        isTemporaryChat: aF,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, t4.c)(t);
                    throw aZ.get(U.f).danger(rm.formatMessage({
                        id: "chatgptConversations.editMessageFailed",
                        defaultMessage: "Failed to edit message"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.editMessageFailed",
                            operation: "edit_message",
                            apiErrorCode: e.errorCode,
                            retryable: !0,
                            errorCategory: "conversation",
                            conversationId: rv ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, t4.b)(null == oc && null == or ? null : ov),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, a_[180] = or, a_[181] = aS, a_[182] = oc, a_[183] = rm, a_[184] = ow, a_[185] = aF, a_[186] = ov, a_[187] = aZ, a_[188] = rv, a_[189] = ny) : ny = a_[189];
            let s4 = (0, eq.a)(ny);
            a_[190] !== rn || a_[191] !== or || a_[192] !== aS || a_[193] !== oc || a_[194] !== rm || a_[195] !== ow || a_[196] !== aF || a_[197] !== ov || a_[198] !== ou || a_[199] !== rg || a_[200] !== aU || a_[201] !== aZ || a_[202] !== rv ? (nx = async (e, t) => {
                if (!ow && !ou) try {
                    let n = aZ.get(rU.e, aS);
                    if (n?.startsNewWorkConversation || null == aZ.get(tg.j, aS) || (0, e0.j)(aZ.get(tg.V, aS)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, h.e)(n.prompt),
                            r = (0, N.i)(n.prompt.metadata, a, (0, p.e)(n.prompt.metadata), (0, m.x)(a)),
                            o = (0, G.a)(n.prompt, a, r),
                            s = aZ.get(tS.u, rn),
                            i = null != o.renderFormat ? o.message : a,
                            l = s.length > 0 ? s : i,
                            c = s.length > 0 ? void 0 : o.renderFormat ?? "plain";
                        if (null != aU) return void await aU(l, c);
                        if (null == aZ.get(tg.j, aS) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, eu.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${aS}`;
                            (0, D.E)(t, (t, n) => n ? t : e) || (0, tS.Y)(aZ, aS, e), (0, D.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, h.i)((0, h.s)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, m.x)(a);
                            (0, H.n)(aZ, "work"), await rg("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: s.length > 0 ? s : t,
                                    prefillPromptFormat: s.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (ov && !aF && (0, z.cb)(aZ, (0, $.b)({
                                entrypoint: "home"
                            }))) return void await rg("/");
                        let d = (0, h.l)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, t7.g)(aZ, d);
                        (0, tS.Z)(aZ, u, t.model);
                        let g = aZ.get(tg.T, aS);
                        (0, H.n)(aZ, ov ? "work" : "chat"), await rg({
                            pathname: "/",
                            search: (0, s2.e)("", aF)
                        }, {
                            state: {
                                initialChatGptConversationId: u,
                                project: null,
                                chatGptProjectId: (0, t8.a)(g) ? g : null,
                                chatGptCustomGptId: (0, t8.a)(g) ? null : g,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: ov
                            }
                        });
                        return
                    }
                    await (0, rU.h)(aZ, {
                        conversationId: aS,
                        isTemporaryChat: aF,
                        messageId: e,
                        retry: ov && "error_retry" === t.source && null == t.model.thinkingEffort ? {
                            ...t,
                            model: aZ.get(tS.v, aS)
                        } : t
                    })
                } catch {
                    aZ.get(U.f).danger(rm.formatMessage({
                        id: "chatgptConversations.regenerate.failed",
                        defaultMessage: "Failed to regenerate response"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.regenerate.failed",
                            operation: "regenerate_response",
                            errorCategory: "conversation",
                            conversationId: rv ?? void 0,
                            userFacingError: {
                                surface: (0, t4.b)(null == oc && null == or ? null : ov),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, a_[190] = rn, a_[191] = or, a_[192] = aS, a_[193] = oc, a_[194] = rm, a_[195] = ow, a_[196] = aF, a_[197] = ov, a_[198] = ou, a_[199] = rg, a_[200] = aU, a_[201] = aZ, a_[202] = rv, a_[203] = nx) : nx = a_[203];
            let s5 = (0, eq.a)(nx);
            a_[204] !== or || a_[205] !== aS || a_[206] !== rk || a_[207] !== rm || a_[208] !== rh || a_[209] !== aF || a_[210] !== rg || a_[211] !== rf || a_[212] !== oF || a_[213] !== aZ || a_[214] !== rv || a_[215] !== oA || a_[216] !== a$ ? (nC = () => {
                if (rh || null == rv) return;
                let e = aZ.get(T.u);
                if (!e && !aZ.get(T.s) || !e && null == or && null == oA) return;
                let t = rp.current?.signal;
                null == t || t.aborted || (rd(a$), (e ? (0, tC.f)(aZ, {
                    chatGptThreadId: aS,
                    conversationTitle: rk
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, _.a)(aZ, e);
                    if ("created" === e.status) return null == n || t.aborted || aZ.get(U.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, _.a)(aZ, e)
                }) : (0, x.a)({
                    scope: aZ,
                    projectId: oF ?? void 0,
                    prompt: `Continuing from ${(0,q.f)({conversationId:rv,title:rk?.trim()||"ChatGPT thread"})}`
                }).then(iw)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? rf(n) : rg((0, s2.c)(n, {
                            isTemporaryChat: aF
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (rd(null), aZ.get(U.f).danger(rm.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, a_[204] = or, a_[205] = aS, a_[206] = rk, a_[207] = rm, a_[208] = rh, a_[209] = aF, a_[210] = rg, a_[211] = rf, a_[212] = oF, a_[213] = aZ, a_[214] = rv, a_[215] = oA, a_[216] = a$, a_[217] = nC) : nC = a_[217];
            let s6 = nC;
            a_[218] !== aS || a_[219] !== rg || a_[220] !== aZ || a_[221] !== rt || a_[222] !== aL || a_[223] !== a1 ? (nw = () => {
                if (null != a1) {
                    if ((0, ne.e)(aS)) {
                        let e = (0, aG.a)(aZ, a1, aS);
                        null != e && (aZ.get(P.a) ? aZ.set(sK.a, e) : rg((0, s2.c)(e)))
                    }
                    return
                }
                let e = aZ.query.getData(tA.n, aL);
                null != e && null != aL && null != rt && ((0, tg.ob)(aZ, {
                    conversation: e,
                    conversationId: rt,
                    sharedConversationId: aL
                }), aZ.get(P.a) ? aZ.set(sK.a, rt) : rg((0, s2.c)(rt)))
            }, a_[218] = aS, a_[219] = rg, a_[220] = aZ, a_[221] = rt, a_[222] = aL, a_[223] = a1, a_[224] = nw) : nw = a_[224];
            let s7 = (0, eq.a)(nw);
            a_[225] !== aQ ? (n_ = aQ?.mcpAppContext == null ? null : {
                hostId: ef.a,
                server: "codex_apps",
                connectorId: aQ.mcpAppContext.id
            }, a_[225] = aQ, a_[226] = n_) : n_ = a_[226];
            let s9 = (0, d.x)(er.b, n_),
                ie = aQ?.fullscreenContent != null ? "content" : "workspace",
                it = (0, A.a)(aX ? "embedded" : ie),
                ia = !s9 && (oe || !r9.isError) && !aY && !ox && (null == a1 || a0?.authMethod === "chatgpt" || a2) && (!a8 || null != or),
                ir = r2 || ox || oE || oP || ou,
                io = ir || o1 || o0?.needsEntry === !0;
            if (o1) {
                let e;
                a_[227] !== rm ? (e = rm.formatMessage(sL.d.readOnlyPlaceholder), a_[227] = rm, a_[228] = e) : e = a_[228], nS = e
            } else !ir && o0?.needsEntry && (nS = !1);
            let is = ia && !ir && !a8 && !ot && !ow && !rY && !rV && !rQ && !oz,
                ic = !ia || a8 || io || ot ? null : ro;
            if (a_[229] !== oz || a_[230] !== ru || a_[231] !== o_ || a_[232] !== oj || a_[233] !== or?.current_node || a_[234] !== aS || a_[235] !== oR || a_[236] !== oy || a_[237] !== s$ || a_[238] !== s3 || a_[239] !== s4 || a_[240] !== s5 || a_[241] !== aR || a_[242] !== aY || a_[243] !== io || a_[244] !== ot || a_[245] !== oK || a_[246] !== ox || a_[247] !== a8 || a_[248] !== rV || a_[249] !== aF || a_[250] !== od || a_[251] !== rY || a_[252] !== ov || a_[253] !== oP || a_[254] !== ou || a_[255] !== re || a_[256] !== rq || a_[257] !== nu || a_[258] !== sr || a_[259] !== so || a_[260] !== o1 || a_[261] !== rA || a_[262] !== aZ.get || a_[263] !== rM || a_[264] !== tN?.current_node || a_[265] !== aV || a_[266] !== ia || a_[267] !== sl || a_[268] !== rb || a_[269] !== rX) {
                let e;
                a_[271] !== o_ || a_[272] !== oj || a_[273] !== oy || a_[274] !== ov || a_[275] !== re || a_[276] !== sr || a_[277] !== so || a_[278] !== o1 || a_[279] !== aZ.get || a_[280] !== rb ? (e = o1 || null == re || null == sr ? so : (0, tj.a)({
                    ...sr,
                    current_node: re.promptMessageId
                }, {
                    clinicalSearchEnabled: oj,
                    clinicalCitationsEnabled: o_,
                    enableCloudBrowserActivity: oy,
                    ...rb,
                    isWorkConversation: ov,
                    getRenderTelemetry: e => (0, ii.c)(aZ.get, e)
                }), a_[271] = o_, a_[272] = oj, a_[273] = oy, a_[274] = ov, a_[275] = re, a_[276] = sr, a_[277] = so, a_[278] = o1, a_[279] = aZ.get, a_[280] = rb, a_[281] = e) : e = a_[281];
                let t = (0, tM.c)({
                    paragen: re,
                    hideInitialUserMessage: aR,
                    browserConversationId: void 0,
                    conversationId: aS,
                    enableCloudBrowserActivity: oy,
                    errorMessage: s$,
                    branchingMessageId: ru,
                    isReadOnly: aY || ox || a8 || null != aV,
                    isTemporaryChat: aF,
                    isWorkConversation: od,
                    onRegenerateResponse: oz || a8 || null != aV || aY || ox || oP || ou || rY || rV ? void 0 : s5,
                    onEditUserMessage: oz || null == nu || od || aY || ox || oP || !rX || rV ? void 0 : s4,
                    onFork: null == nu || aF || oP || ou || aY || ox ? void 0 : s3,
                    pendingSubmissionAttachments: rq,
                    shareEnabled: null == oR && !aF && !a8 && !aY && !ox && !oK,
                    readAloudEnabled: !a8 && !ox,
                    feedbackEnabled: !a8 && !ox && null == aV,
                    renderedTurns: e,
                    safetyReview: rA,
                    sharedConversationLastMessageId: tN?.current_node ?? rM ?? (a8 ? or?.current_node : null),
                    showPendingLoadingMessage: sl,
                    showRequestUserInputStatus: ia && !io && !ot
                });
                nj = o1 ? (0, sL.a)(t) : t, a_[229] = oz, a_[230] = ru, a_[231] = o_, a_[232] = oj, a_[233] = or?.current_node, a_[234] = aS, a_[235] = oR, a_[236] = oy, a_[237] = s$, a_[238] = s3, a_[239] = s4, a_[240] = s5, a_[241] = aR, a_[242] = aY, a_[243] = io, a_[244] = ot, a_[245] = oK, a_[246] = ox, a_[247] = a8, a_[248] = rV, a_[249] = aF, a_[250] = od, a_[251] = rY, a_[252] = ov, a_[253] = oP, a_[254] = ou, a_[255] = re, a_[256] = rq, a_[257] = nu, a_[258] = sr, a_[259] = so, a_[260] = o1, a_[261] = rA, a_[262] = aZ.get, a_[263] = rM, a_[264] = tN?.current_node, a_[265] = aV, a_[266] = ia, a_[267] = sl, a_[268] = rb, a_[269] = rX, a_[270] = nj
            } else nj = a_[270];
            let im = nj;
            a_[282] !== rm ? (nI = rm.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation"
            }), a_[282] = rm, a_[283] = nI) : nI = a_[283];
            let ig = nI;
            a_[284] !== aS || a_[285] !== oR ? (nT = null == oR ? null : (0, a.jsx)(t6.ChatGptGizmoHeader, {
                conversationId: aS,
                gizmoId: oR
            }), a_[284] = aS, a_[285] = oR, a_[286] = nT) : nT = a_[286];
            let i_ = nT;
            a_[287] !== aY || a_[288] !== a8 || a_[289] !== od ? (nP = !od || a8 || aY ? null : (0, a.jsx)(Y.a, {
                hostId: ef.a
            }), a_[287] = aY, a_[288] = a8, a_[289] = od, a_[290] = nP) : nP = a_[290];
            let iS = nP,
                ij = !a8 && null == aV && !aY && !aF && !rw,
                iI = (0, d.x)(!ij || aX || ox ? null : sS.a, aS);
            a_[291] !== aS || a_[292] !== aZ || a_[293] !== ij ? (nE = ij ? () => {
                let e = aZ.get(sS.b, aS);
                e?.title && sM(aZ, {
                    conversationId: aS,
                    courseId: e.course_id
                }, {
                    preserveFocus: !0
                })
            } : void 0, a_[291] = aS, a_[292] = aZ, a_[293] = ij, a_[294] = nE) : nE = a_[294];
            let iT = nE;
            a_[295] !== is || a_[296] !== aS || a_[297] !== ow || a_[298] !== o0 ? (nA = null != o0 ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: ow,
                children: (0, a.jsx)(ar, {
                    conversationId: aS,
                    placement: "progress",
                    canStartSection: is
                })
            }) : null, a_[295] = is, a_[296] = aS, a_[297] = ow, a_[298] = o0, a_[299] = nA) : nA = a_[299];
            let iP = nA,
                iE = !oG && !aY && !ox,
                iA = !aF && !a8 && null != rv,
                iM = iE && null != rR;
            a_[300] !== aF ? (nM = !aF && (0, V.a)({
                browser: !0
            }), a_[300] = aF, a_[301] = nM) : nM = a_[301];
            let iR = nM,
                ik = (0, d.x)(!!iM && !iA && !a8 && !ov && !!ia && !io && tf.d, aS),
                iN = iM && (iA || iR || ik);
            a_[302] !== aW || a_[303] !== ov || a_[304] !== oU ? (nR = (0, V.a)({
                browser: !0
            }) && !ov && null != oU && null == aW, a_[302] = aW, a_[303] = ov, a_[304] = oU, a_[305] = nR) : nR = a_[305];
            let iO = nR;
            a_[306] !== iN || a_[307] !== iO || a_[308] !== o$ || a_[309] !== oF || a_[310] !== oU ? (nk = iN && null != oF && !iO ? {
                icon: o$,
                name: oU
            } : void 0, a_[306] = iN, a_[307] = iO, a_[308] = o$, a_[309] = oF, a_[310] = oU, a_[311] = nk) : nk = a_[311];
            let iB = nk;
            a_[312] !== aS || a_[313] !== oG || a_[314] !== iN || a_[315] !== rR || a_[316] !== iT || a_[317] !== iB ? (nN = oG ? (0, a.jsx)(eX.BusinessAgentConversationHeader, {
                conversationId: aS,
                fallback: null
            }) : (0, a.jsx)(n5, {
                onClick: iT,
                hasTitleMenu: iN,
                project: iB,
                title: rR
            }), a_[312] = aS, a_[313] = oG, a_[314] = iN, a_[315] = rR, a_[316] = iT, a_[317] = iB, a_[318] = nN) : nN = a_[318];
            let iF = nN,
                iG = null != o0,
                iL = sQ && !a8 && !aY,
                iz = oG ? null : i_;
            a_[319] !== iO || a_[320] !== o$ || a_[321] !== oF || a_[322] !== oU || a_[323] !== iB ? (nO = null != oF && null == iB ? (0, a.jsx)(n1, {
                projectId: oF,
                name: oU,
                icon: o$,
                linkToProject: iO
            }) : null, a_[319] = iO, a_[320] = o$, a_[321] = oF, a_[322] = oU, a_[323] = iB, a_[324] = nO) : nO = a_[324], a_[325] !== aW || a_[326] !== iz || a_[327] !== nO ? (nB = (0, a.jsxs)(a.Fragment, {
                children: [aW, iz, nO]
            }), a_[325] = aW, a_[326] = iz, a_[327] = nO, a_[328] = nB) : nB = a_[328], a_[329] !== iF || a_[330] !== aF || a_[331] !== iS || a_[332] !== iG || a_[333] !== iL || a_[334] !== nB ? (nF = (0, a.jsx)(nY.a, {
                hasSectionProgress: iG,
                isTemporaryChat: aF,
                isCloudTask: iL,
                leading: nB,
                start: iF,
                startActions: iS
            }), a_[329] = iF, a_[330] = aF, a_[331] = iS, a_[332] = iG, a_[333] = iL, a_[334] = nB, a_[335] = nF) : nF = a_[335];
            let iD = nF,
                iH = so.flatMap(iC).flatMap(ix),
                iq = iH.flatMap(ib);
            if (!a8 && (r9.error instanceof eV.FetchError && 423 === r9.error.status || oW && null == r8)) {
                let e;
                return a_[336] !== r9 || a_[337] !== aS || a_[338] !== aZ ? (e = (0, a.jsx)(sR.a, {
                    onUnlocked: () => {
                        (0, sk.g)(aZ.get(sk.f)?.projectId, [aS]), r9.refetch()
                    }
                }), a_[336] = r9, a_[337] = aS, a_[338] = aZ, a_[339] = e) : e = a_[339], e
            }
            if (null != oJ) {
                let e;
                return a_[340] !== oJ ? (e = (0, a.jsx)(v.l, {
                    replace: !0,
                    to: oJ
                }), a_[340] = oJ, a_[341] = e) : e = a_[341], e
            }
            let iW = e => iE && iA ? (0, a.jsx)(nV, {
                onTitleClick: iT,
                showMenu: iN || null != e,
                triggerButton: e,
                conversationId: aS,
                title: rk,
                isHandoffPending: rh,
                isArchived: or?.is_archived === !0,
                isChatConversation: null != or && !ov,
                onHandoff: oB ? s6 : void 0,
                onOpenMessage: async e => {
                    rp.current?.signal.aborted === !1 && aZ.get(w.b)?.pathname === aZ.value.pathname && await rr.current?.scrollToMessage(e)
                },
                projectId: oF,
                projectName: oU,
                serverConversationId: rv,
                conversationOrigin: oc
            }) : null;
            a_[342] !== or?.current_node || a_[343] !== aS || a_[344] !== oq || a_[345] !== oW || a_[346] !== a8 || a_[347] !== aF || a_[348] !== rY || a_[349] !== oF || a_[350] !== so.length || a_[351] !== rv || a_[352] !== aV || a_[353] !== rw || a_[354] !== iE || a_[355] !== rS ? (nG = !iE || aF || a8 || oW ? null : (0, a.jsx)(tH, {
                conversationId: aS,
                projectId: oF,
                sharedProjectConversation: aV,
                isReady: (null != rv || null != aV) && so.length > 0 && (rS ?? or?.current_node) != null,
                isRestricted: rw || oq,
                isStreaming: rY
            }), a_[342] = or?.current_node, a_[343] = aS, a_[344] = oq, a_[345] = oW, a_[346] = a8, a_[347] = aF, a_[348] = rY, a_[349] = oF, a_[350] = so.length, a_[351] = rv, a_[352] = aV, a_[353] = rw, a_[354] = iE, a_[355] = rS, a_[356] = nG) : nG = a_[356];
            let iK = nG,
                iU = null != iI ? aS : null;
            a_[357] !== or || a_[358] !== r7 || a_[359] !== aY || a_[360] !== sY || a_[361] !== aX || a_[362] !== ox || a_[363] !== a8 || a_[364] !== ov ? (nL = ov || a8 || aX || ox || aY || sY || null == or && !r7 ? null : (0, a.jsx)(E.a, {}), a_[357] = or, a_[358] = r7, a_[359] = aY, a_[360] = sY, a_[361] = aX, a_[362] = ox, a_[363] = a8, a_[364] = ov, a_[365] = nL) : nL = a_[365], a_[366] !== r9.fetchStatus || a_[367] !== s0 || a_[368] !== aX || a_[369] !== sZ ? (nz = !1, a_[366] = r9.fetchStatus, a_[367] = s0, a_[368] = aX, a_[369] = sZ, a_[370] = nz) : nz = a_[370], a_[371] !== r9.data || a_[372] !== r9.fetchStatus || a_[373] !== or || a_[374] !== aS || a_[375] !== s0 || a_[376] !== r7 || a_[377] !== sa || a_[378] !== sY || !1 !== a_[379] || a_[380] !== so.length ? (nD = null, a_[371] = r9.data, a_[372] = r9.fetchStatus, a_[373] = or, a_[374] = aS, a_[375] = s0, a_[376] = r7, a_[377] = sa, a_[378] = sY, a_[379] = !1, a_[380] = so.length, a_[381] = nD) : nD = a_[381];
            let iV = !a8 && !ox && (0, et.c)() ? (0, a.jsx)(en.c, {
                callIds: iq,
                hostId: ef.a,
                conversationId: (0, u.Ue)(`chatgpt:${aS}`)
            }) : null;
            a_[382] !== rk || a_[383] !== aX || a_[384] !== a1 || a_[385] !== aQ?.documentTitle ? (nH = aX ? null : (0, a.jsx)(Q.a, {
                title: null == a1 ? aQ?.documentTitle ?? rk : null
            }), a_[382] = rk, a_[383] = aX, a_[384] = a1, a_[385] = aQ?.documentTitle, a_[386] = nH) : nH = a_[386], a_[387] !== aS || a_[388] !== aX || a_[389] !== ow || a_[390] !== a8 || a_[391] !== aF || a_[392] !== ov || a_[393] !== im ? (nq = aX || ov ? null : (0, a.jsx)(nf.a, {
                conversationId: aS,
                canCopy: !ow,
                paragenEnabled: !a8,
                turns: im,
                loadHistory: !aF && !a8
            }), a_[387] = aS, a_[388] = aX, a_[389] = ow, a_[390] = a8, a_[391] = aF, a_[392] = ov, a_[393] = im, a_[394] = nq) : nq = a_[394];
            let iQ = null != or || r7;
            a_[395] !== s0 || a_[396] !== ov || a_[397] !== iQ ? (nW = (0, a.jsx)(eQ.a, {
                isWorkConversation: ov,
                hasConversationContent: iQ,
                hasLoadError: s0
            }), a_[395] = s0, a_[396] = ov, a_[397] = iQ, a_[398] = nW) : nW = a_[398], a_[399] !== aS || a_[400] !== s0 || a_[401] !== sX || a_[402] !== aX || a_[403] !== op.pathname || a_[404] !== aZ || a_[405] !== aL ? (nK = aX || !sX || s0 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(sD, {
                    sharedConversationId: aL
                }), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(el.a, {
                        onCommit: () => es.b.contentCommitted(aZ, aS, aL, op.pathname),
                        onPaint: () => es.b.pagePainted(aZ, aS, aL)
                    }, aL ?? aS)
                })]
            }), a_[399] = aS, a_[400] = s0, a_[401] = sX, a_[402] = aX, a_[403] = op.pathname, a_[404] = aZ, a_[405] = aL, a_[406] = nK) : nK = a_[406];
            let i$ = aX || null != aQ ? null : (0, a.jsxs)(nv.a, {
                    chatIcon: null == oF ? void 0 : o$,
                    header: iD,
                    title: rR,
                    fullScreenTitle: iF,
                    isArchivedPreview: aY,
                    children: [null == iP ? null : (0, a.jsx)(nJ, {
                        children: iP
                    }), a0?.authMethod === "chatgpt" ? (0, a.jsx)(X.v, {
                        productExperience: ov ? "work" : "chat"
                    }) : null, a8 ? (0, a.jsx)(sW.a, {
                        children: null == oN ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(sJ, {
                                data: oN
                            })
                        })
                    }) : null, ij ? (0, a.jsx)(nb, {
                        conversationId: aS,
                        scheduledAutomationId: og ? om?.sidebarAutomationId : void 0
                    }, aS) : null, aF && !a8 && !aY && null == oM && null == oL && null == oF && !oq && null != sr && (0, h.a)(sr).some(iy) ? (0, a.jsx)(S.a.HeaderAction, {
                        actionId: "chatgpt-conversation-save",
                        align: "end",
                        order: 100,
                        children: (0, a.jsx)(s8, {
                            conversationId: aS
                        })
                    }) : null, iE && (0, a.jsx)(nY.b, {
                        hasTitleMenu: iN,
                        menu: iW() ?? (iN && (0, a.jsx)(n$, {
                            title: rk,
                            includePlugins: iR,
                            lockdownConversationId: ik ? aS : null
                        })),
                        children: iK
                    })]
                }),
                iY = t5.a,
                iX = !aJ || !ia || it.isHidden || io || oz || ow || ot || aY || ox || oE || oP || ou || rQ || rV,
                iJ = oF,
                iZ = null != oL,
                i0 = eF.c;
            a_[407] !== aX || a_[408] !== of || a_[409] !== ov || a_[410] !== iP || a_[411] !== aQ ? (nU = aX || null != aQ ? iP : of && (0, eL.a)() && !ov && (0, a.jsx)("div", {
                className: "h-px",
                "aria-hidden": !0
            }), a_[407] = aX, a_[408] = of, a_[409] = ov, a_[410] = iP, a_[411] = aQ, a_[412] = nU) : nU = a_[412];
            let i1 = null == o0 ? "flex h-full min-h-0 flex-col" : "h-full",
                i2 = oo ?? rk,
                i3 = !ow,
                i4 = !ra && !aX && !a8 && !s9 && !it.isHidden,
                i5 = rw || oI,
                i6 = oh?.isFullWidth === !0,
                i7 = null == oh ? sU.contentShift : void 0,
                i8 = o0?.selectedIndex;
            a_[413] !== is || a_[414] !== aS || a_[415] !== o0 ? (nQ = null != o0 ? (0, a.jsx)(ar, {
                conversationId: aS,
                placement: "composer",
                canStartSection: is
            }) : void 0, a_[413] = is, a_[414] = aS, a_[415] = o0, a_[416] = nQ) : nQ = a_[416], a_[417] !== aS || a_[418] !== o0 ? (nX = null != o0 ? (0, a.jsx)(aa, {
                conversationId: aS
            }) : void 0, a_[417] = aS, a_[418] = o0, a_[419] = nX) : nX = a_[419];
            let i9 = !ov,
                le = o1 ? null : s$;
            a_[420] !== r9 || a_[421] !== s1 ? (nZ = s1 ? () => {
                r9.refetch({
                    cancelRefetch: !1
                })
            } : void 0, a_[420] = r9, a_[421] = s1, a_[422] = nZ) : nZ = a_[422];
            let lt = so.length > 0,
                ln = nS,
                la = !oq && (null == oF || null != oD),
                lr = null == o0 && !ol,
                lo = r9.isFetching,
                ls = oe && !aX && !a8 && !ov && null == oM,
                li = !o1 && rY;
            a_[423] !== or?.is_archived || a_[424] !== aS || a_[425] !== aY || a_[426] !== aX || a_[427] !== a8 || a_[428] !== aF || a_[429] !== rY || a_[430] !== ov ? (n2 = aX || !ov || a8 || aY || or?.is_archived === !0 || aF ? null : (0, a.jsx)(g.Suspense, {
                fallback: null,
                children: (0, a.jsx)(an, {
                    conversationId: aS,
                    isTurnActive: rY
                })
            }), a_[423] = or?.is_archived, a_[424] = aS, a_[425] = aY, a_[426] = aX, a_[427] = a8, a_[428] = aF, a_[429] = rY, a_[430] = ov, a_[431] = n2) : n2 = a_[431], a_[432] !== aS || a_[433] !== aY || a_[434] !== rv ? (n3 = aY ? (0, a.jsx)(ek, {
                conversationId: rv ?? aS,
                kind: "chatgpt"
            }, rv ?? aS) : void 0, a_[432] = aS, a_[433] = aY, a_[434] = rv, a_[435] = n3) : n3 = a_[435];
            let ll = !o1 && sl;
            a_[436] !== oL ? (n4 = null != oL ? (0, a.jsx)(sx.GptPluginMigrationBanner, {
                gizmoId: oL
            }) : null, a_[436] = oL, a_[437] = n4) : n4 = a_[437], a_[438] !== oB || a_[439] !== s6 || a_[440] !== rh || a_[441] !== aF || a_[442] !== oT || a_[443] !== r1 ? (n6 = oT && !aF ? (0, a.jsx)(nm, {
                canConvert: oB,
                isChatInstantAvailable: !r1,
                isConverting: rh,
                onConvert: s6
            }) : null, a_[438] = oB, a_[439] = s6, a_[440] = rh, a_[441] = aF, a_[442] = oT, a_[443] = r1, a_[444] = n6) : n6 = a_[444], a_[445] !== on || a_[446] !== ox ? (n7 = on.bind(null, ox), a_[445] = on, a_[446] = ox, a_[447] = n7) : n7 = a_[447], a_[448] !== s7 || a_[449] !== a8 || a_[450] !== aB ? (n8 = e => {
                aB?.(e), a8 && s7()
            }, a_[448] = s7, a_[449] = a8, a_[450] = aB, a_[451] = n8) : n8 = a_[451], a_[452] !== r9.isFetching || a_[453] !== oz || a_[454] !== rn || a_[455] !== oL || a_[456] !== aq || a_[457] !== aS || a_[458] !== ig || a_[459] !== rr || a_[460] !== aM || a_[461] !== s0 || a_[462] !== aE || a_[463] !== a7 || a_[464] !== io || a_[465] !== sa || a_[466] !== ot || a_[467] !== sY || a_[468] !== ra || a_[469] !== aX || a_[470] !== a8 || a_[471] !== aF || a_[472] !== od || a_[473] !== nS || a_[474] !== aD || a_[475] !== aN || a_[476] !== r_ || a_[477] !== aL || a_[478] !== oa || a_[479] !== ia || a_[480] !== aJ || a_[481] !== i5 || a_[482] !== i6 || a_[483] !== i7 || a_[484] !== i8 || a_[485] !== nQ || a_[486] !== nX || a_[487] !== i9 || a_[488] !== le || a_[489] !== nZ || a_[490] !== lt || a_[491] !== la || a_[492] !== lr || a_[493] !== ls || a_[494] !== li || a_[495] !== n2 || a_[496] !== n3 || a_[497] !== ll || a_[498] !== n4 || a_[499] !== n6 || a_[500] !== n7 || a_[501] !== n8 || a_[502] !== i2 || a_[503] !== i3 || a_[504] !== i4 || a_[505] !== ak || a_[506] !== im || a_[507] !== aQ ? (n9 = (0, a.jsx)(sf, {
                ref: rr,
                printTitle: i2,
                trackShownImpressions: i3,
                trackReadState: i4,
                workspace: aQ,
                shouldBlockMcpApps: i5,
                isCoveredByFloatingPanel: i6,
                isFormOnly: ra,
                isInlinePreview: aX,
                hideModelPicker: aE,
                showFilePicker: aJ,
                disableAutoFocus: aM,
                transcriptPresentation: ak,
                scrollOrigin: aN,
                composerRef: rs,
                contentX: i7,
                conversationId: aS,
                composerConversationId: rn,
                sectionIndex: i8,
                composerLeadingContent: aq,
                aboveComposerContent: nQ,
                historyLoadingContent: nX,
                requiredSystemHints: aD,
                isChatConversation: i9,
                customGptId: oL,
                conversationLoadingLabel: ig,
                entries: im,
                errorMessage: le,
                hasLoadError: s0,
                onRetryLoad: nZ,
                hasRenderableTurns: lt,
                isComposerDisabled: io,
                readOnlyPlaceholder: ln,
                moreDetailsEnabled: la,
                isConversationEmpty: sa,
                showEmptyState: lr,
                isConversationFetching: lo,
                isConversationLoading: sY,
                isSharedConversation: a8,
                isSubmitDisabled: ot,
                retainLiveModelPicker: ls,
                isTemporaryChat: aF,
                isTurnActive: li,
                isWorkConversation: od,
                onboardingPrelude: n2,
                scrollStateConversationId: r_,
                initialResponsePlacementKey: a7,
                sharedConversationId: aL,
                sharedPostRegulatedConnectorKind: oa,
                showComposer: ia,
                archivedPreviewFooter: n3,
                showPendingLoadingMessage: ll,
                gptPluginMigrationBanner: n4,
                awaitingGptContinuation: oz,
                workOnlyConversionBanner: n6,
                onAddSelectedText: n7,
                onSubmitAccepted: n8
            }), a_[452] = r9.isFetching, a_[453] = oz, a_[454] = rn, a_[455] = oL, a_[456] = aq, a_[457] = aS, a_[458] = ig, a_[459] = rr, a_[460] = aM, a_[461] = s0, a_[462] = aE, a_[463] = a7, a_[464] = io, a_[465] = sa, a_[466] = ot, a_[467] = sY, a_[468] = ra, a_[469] = aX, a_[470] = a8, a_[471] = aF, a_[472] = od, a_[473] = nS, a_[474] = aD, a_[475] = aN, a_[476] = r_, a_[477] = aL, a_[478] = oa, a_[479] = ia, a_[480] = aJ, a_[481] = i5, a_[482] = i6, a_[483] = i7, a_[484] = i8, a_[485] = nQ, a_[486] = nX, a_[487] = i9, a_[488] = le, a_[489] = nZ, a_[490] = lt, a_[491] = la, a_[492] = lr, a_[493] = ls, a_[494] = li, a_[495] = n2, a_[496] = n3, a_[497] = ll, a_[498] = n4, a_[499] = n6, a_[500] = n7, a_[501] = n8, a_[502] = i2, a_[503] = i3, a_[504] = i4, a_[505] = ak, a_[506] = im, a_[507] = aQ, a_[508] = n9) : n9 = a_[508], a_[509] !== sv || a_[510] !== ns || a_[511] !== sc || a_[512] !== sg || a_[513] !== rw || a_[514] !== sB || a_[515] !== ic || a_[516] !== sV || a_[517] !== sU ? (at = sB && null != ns ? (0, a.jsx)(nd, {
                composerActions: ic,
                conversationId: sV,
                controlledState: sc ? {
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
                readData: ns,
                display: sU,
                shouldBlockExternalEgress: rw
            }) : null, a_[509] = sv, a_[510] = ns, a_[511] = sc, a_[512] = sg, a_[513] = rw, a_[514] = sB, a_[515] = ic, a_[516] = sV, a_[517] = sU, a_[518] = at) : at = a_[518], a_[519] === Symbol.for("react.memo_cache_sentinel") ? (ai = (0, a.jsx)(t3.a, {}), a_[519] = ai) : ai = a_[519], a_[520] !== aX ? (al = null, a_[520] = aX, a_[521] = al) : al = a_[521], a_[522] !== ow || a_[523] !== n9 || a_[524] !== at || a_[525] !== al || a_[526] !== i1 ? (ac = (0, a.jsxs)("div", {
                className: i1,
                inert: ow,
                children: [n9, at, ai, al]
            }), a_[522] = ow, a_[523] = n9, a_[524] = at, a_[525] = al, a_[526] = i1, a_[527] = ac) : ac = a_[527];
            let lc = !ox && (0, et.c)() ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(id, {
                    conversationId: aS,
                    shouldBlockExternalEgress: rw || oI,
                    widgets: iH.filter(iv)
                }), a8 ? null : (0, a.jsx)(ea.a, {
                    blockedWidgetSource: r5 ? void 0 : "descriptor",
                    transcriptMcpAppIds: (0, il.c)(aS, iH, r5),
                    shouldBlockExternalEgress: rw || oI
                })]
            }) : null;
            a_[528] !== i0 || a_[529] !== aK || a_[530] !== oC || a_[531] !== ac || a_[532] !== lc || a_[533] !== nU ? (ad = (0, a.jsxs)(i0, {
                floatingPanelWidth: oC,
                header: nU,
                banner: aK,
                children: [ac, lc]
            }), a_[528] = i0, a_[529] = aK, a_[530] = oC, a_[531] = ac, a_[532] = lc, a_[533] = nU, a_[534] = ad) : ad = a_[534], a_[535] !== iY || a_[536] !== rn || a_[537] !== oc || a_[538] !== aF || a_[539] !== oF || a_[540] !== ad || a_[541] !== iX || a_[542] !== iZ ? (au = (0, a.jsx)(iY, {
                conversationId: rn,
                conversationOrigin: oc,
                disabled: iX,
                isTemporaryChat: aF,
                projectId: iJ,
                requiresGizmoId: iZ,
                children: ad
            }), a_[535] = iY, a_[536] = rn, a_[537] = oc, a_[538] = aF, a_[539] = oF, a_[540] = ad, a_[541] = iX, a_[542] = iZ, a_[543] = au) : au = a_[543], a_[544] !== sG || a_[545] !== au || a_[546] !== iU || a_[547] !== nL || a_[548] !== nz || a_[549] !== nD || a_[550] !== iV || a_[551] !== nH || a_[552] !== nq || a_[553] !== nW || a_[554] !== nK || a_[555] !== i$ ? (ah = (0, a.jsxs)(sG, {
                courseChatId: iU,
                children: [nL, nz, nD, iV, nH, nq, nW, nK, i$, null, au]
            }), a_[544] = sG, a_[545] = au, a_[546] = iU, a_[547] = nL, a_[548] = nz, a_[549] = nD, a_[550] = iV, a_[551] = nH, a_[552] = nq, a_[553] = nW, a_[554] = nK, a_[555] = i$, a_[556] = ah) : ah = a_[556];
            let ld = ah,
                lu = !aX && !od,
                lh = a8 || !r9.isFetchedAfterMount || r9.isFetching || oe ? null : r9.error;
            a_[557] !== aS || a_[558] !== aX || a_[559] !== aZ || a_[560] !== aL ? (ap = e => {
                aX || es.b.loadFailed(aZ, aS, aL, e)
            }, a_[557] = aS, a_[558] = aX, a_[559] = aZ, a_[560] = aL, a_[561] = ap) : ap = a_[561];
            let lp = s0 ? r9.error : null,
                lm = null == oc && null == or ? null : ov,
                lg = !ov && !sY;
            a_[562] !== ro || a_[563] !== rn || a_[564] !== aL ? (am = {
                conversationId: rn,
                composer: ro,
                sharedConversationId: aL
            }, a_[562] = ro, a_[563] = rn, a_[564] = aL, a_[565] = am) : am = a_[565], a_[566] !== aS || a_[567] !== aX || a_[568] !== rv || a_[569] !== aL ? (ag = aX ? null : (0, es.a)(rv ?? aS, aL), a_[566] = aS, a_[567] = aX, a_[568] = rv, a_[569] = aL, a_[570] = ag) : ag = a_[570];
            let lf = !sZ;
            return a_[571] !== lf ? (af = (0, a.jsx)(o.b, {
                name: "conversation data",
                active: lf
            }), a_[571] = lf, a_[572] = af) : af = a_[572], a_[573] !== ow ? (av = (0, a.jsx)(o.b, {
                name: "workspace policy",
                active: ow
            }), a_[573] = ow, a_[574] = av) : av = a_[574], a_[575] !== aT || a_[576] !== ld || a_[577] !== aS || a_[578] !== iK || !1 !== a_[579] || a_[580] !== ov || a_[581] !== iW ? (ay = aT ? (0, a.jsx)(aT, {
                buttons: iK,
                conversationId: aS,
                isWorkConversation: ov || !1,
                renderMenu: iW,
                children: ld
            }) : ld, a_[575] = aT, a_[576] = ld, a_[577] = aS, a_[578] = iK, a_[579] = !1, a_[580] = ov, a_[581] = iW, a_[582] = ay) : ay = a_[582], a_[583] !== ag || a_[584] !== af || a_[585] !== av || a_[586] !== ay ? (ab = (0, a.jsxs)(ei.g, {
                destinationKey: ag,
                children: [af, av, ay]
            }), a_[583] = ag, a_[584] = af, a_[585] = av, a_[586] = ay, a_[587] = ab) : ab = a_[587], a_[588] !== am || a_[589] !== ab ? (ax = (0, a.jsx)(t_.a, {
                value: am,
                children: ab
            }), a_[588] = am, a_[589] = ab, a_[590] = ax) : ax = a_[590], a_[591] !== lg || a_[592] !== ax ? (aC = (0, a.jsx)(y.a, {
                enabled: lg,
                children: ax
            }), a_[591] = lg, a_[592] = ax, a_[593] = aC) : aC = a_[593], a_[594] !== s1 || a_[595] !== rv || a_[596] !== lu || a_[597] !== lh || a_[598] !== ap || a_[599] !== lp || a_[600] !== lm || a_[601] !== aC ? (aw = (0, a.jsx)(k.a, {
                showChatFallback: lu,
                conversationId: rv,
                error: lh,
                onInlineLoadError: ap,
                loadError: lp,
                canRetry: s1,
                isWorkConversation: lm,
                children: aC
            }), a_[594] = s1, a_[595] = rv, a_[596] = lu, a_[597] = lh, a_[598] = ap, a_[599] = lp, a_[600] = lm, a_[601] = aC, a_[602] = aw) : aw = a_[602], aw
        }

        function iv(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function iy(e) {
            return "user" === e.author.role
        }

        function ib(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function ix(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function iC(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function iw(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
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
                let t, n, m, g, f, v, y, b, x, C, w, _, S, j, I, T, P, E, A = (0, r.c)(68),
                    {
                        initialPlacementKey: M,
                        isActiveVoiceConversation: R,
                        isLoadingHistory: k,
                        latestUserTurnKey: N,
                        conversationId: O,
                        onResponseSpacerStateChange: B,
                        preserveResponseViewport: F
                    } = e,
                    G = void 0 !== R && R,
                    L = void 0 !== k && k,
                    z = (0, i.i)();
                A[0] !== G || A[1] !== z ? (t = G && (0, i.d)(z, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), A[0] = G, A[1] = z, A[2] = t) : t = A[2];
                let D = t,
                    H = (0, s.useRef)(N),
                    q = (0, o.x)(null == O ? 0 : u.b, O ?? ""),
                    W = (0, s.useRef)(q),
                    K = (0, s.useRef)(L),
                    U = (0, s.useRef)(null),
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
                A[9] !== Y || A[10] !== Q ? (g = e => {
                    Y(), Q.scrollToBottom(e)
                }, A[9] = Y, A[10] = Q, A[11] = g) : g = A[11];
                let es = (0, h.a)(g);
                A[12] !== es || A[13] !== q ? (f = () => {
                    W.current !== q && (W.current = q, es())
                }, v = [q, es], A[12] = es, A[13] = q, A[14] = f, A[15] = v) : (f = A[14], v = A[15]), (0, s.useLayoutEffect)(f, v), A[16] !== X || A[17] !== J || A[18] !== et || A[19] !== $.height || A[20] !== $.holdViewport || A[21] !== er || A[22] !== es ? (y = () => er.register({
                    consumeGrowth: X,
                    getHeightPx: J,
                    holdViewport: $.holdViewport,
                    prepareThreadEndContent: et,
                    scrollToBottom: es
                }, $.height).dispose, A[16] = X, A[17] = J, A[18] = et, A[19] = $.height, A[20] = $.holdViewport, A[21] = er, A[22] = es, A[23] = y) : y = A[23], A[24] !== X || A[25] !== J || A[26] !== et || A[27] !== $ || A[28] !== er || A[29] !== es ? (b = [X, J, et, $, er, es], A[24] = X, A[25] = J, A[26] = et, A[27] = $, A[28] = er, A[29] = es, A[30] = b) : b = A[30], (0, s.useInsertionEffect)(y, b), A[31] === Symbol.for("react.memo_cache_sentinel") ? (x = (e, t) => {
                    U.current = {
                        turnKey: e,
                        element: t
                    }, V.current?.(e, t)
                }, A[31] = x) : x = A[31];
                let ei = (0, h.a)(x);
                A[32] === Symbol.for("react.memo_cache_sentinel") ? (C = e => {
                    V.current = e;
                    let t = U.current;
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
                }), S = [Y, X, J, Z, B, ei, eo, D], A[38] = Y, A[39] = X, A[40] = Z, A[41] = J, A[42] = B, A[43] = ei, A[44] = eo, A[45] = D, A[46] = _, A[47] = S) : (_ = A[46], S = A[47]), (0, s.useLayoutEffect)(_, S), A[48] !== ea || A[49] !== L || A[50] !== N || A[51] !== eo || A[52] !== $ || A[53] !== el || A[54] !== D ? (j = () => {
                    let e = H.current,
                        t = K.current;
                    if (H.current = N, K.current = L, D && !L && !t && null != N && N !== e) {
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
                }, I = [ea, L, N, eo, el, $, D], A[48] = ea, A[49] = L, A[50] = N, A[51] = eo, A[52] = $, A[53] = el, A[54] = D, A[55] = j, A[56] = I) : (j = A[55], I = A[56]), (0, s.useLayoutEffect)(j, I), A[57] !== en || A[58] !== M || A[59] !== ec || A[60] !== $ ? (T = () => {
                    if (null == M) return;
                    let e = $.getPendingPlacementSignal();
                    return en(() => {
                        e.aborted || ec()
                    })
                }, A[57] = en, A[58] = M, A[59] = ec, A[60] = $, A[61] = T) : T = A[61], A[62] !== en || A[63] !== M || A[64] !== $ ? (P = [en, M, $], A[62] = en, A[63] = M, A[64] = $, A[65] = P) : P = A[65], (0, s.useLayoutEffect)(T, P), A[66] !== $ ? (E = (0, a.jsx)(l.a, {
                    controller: $
                }), A[66] = $, A[67] = E) : E = A[67], E
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
            return null != a ? a : n(p.E, e) || n(l.j, e) || null != n(l.A, e) ? void 0 : null
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
                    j = void 0 === S ? "/" : S,
                    I = (0, o.y)(i.a),
                    {
                        hash: T,
                        key: P,
                        pathname: E,
                        search: A,
                        state: M
                    } = (0, s.Y)(),
                    {
                        conversationId: R,
                        gizmoId: k
                    } = (0, s.cb)(),
                    N = (0, o.x)(g, w),
                    O = (0, o.x)(p.E, w),
                    B = (0, o.x)(p.T, w),
                    F = O ? B : k;
                x[0] !== F ? (t = null != F && (0, u.a)(F) ? F : null, x[0] = F, x[1] = t) : t = x[1], x[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                    enabled: !1
                }, x[2] = n) : n = x[2];
                let {
                    data: G
                } = (0, o.x)(d.b, t, n);
                x[3] !== F ? (l = null == F || (0, u.a)(F) ? null : F, x[3] = F, x[4] = l) : l = x[4], x[5] === Symbol.for("react.memo_cache_sentinel") ? (f = {
                    enabled: !1
                }, x[5] = f) : f = x[5];
                let {
                    data: L
                } = (0, o.x)(c.b, l, f);
                if (null === N || (0, m.i)(A) && null != N && !O) {
                    let e;
                    return x[6] !== j || x[7] !== A ? (e = (0, a.jsx)(s.l, {
                        replace: !0,
                        to: {
                            pathname: j,
                            search: A
                        }
                    }), x[6] = j, x[7] = A, x[8] = e) : e = x[8], e
                }
                x[9] !== w || x[10] !== L || x[11] !== F || x[12] !== G || x[13] !== N || x[14] !== _ ? (v = null != _ ? (0, s.C)(_, {
                    conversationId: N ?? w
                }) : (0, m.c)(N ?? w, {
                    gizmoId: G?.gizmo.short_url ?? L?.gizmo.short_url ?? F
                }), x[9] = w, x[10] = L, x[11] = F, x[12] = G, x[13] = N, x[14] = _, x[15] = v) : v = x[15];
                let z = v;
                if (x[16] !== w || x[17] !== z || x[18] !== R || x[19] !== T || x[20] !== P || x[21] !== E || x[22] !== N || x[23] !== I || x[24] !== A || x[25] !== M) {
                    let e = new URLSearchParams(A),
                        t = null != N && e.has("mfr"),
                        n = I.get(p.y, w),
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
                    if (null != R && (0, h.e)(R) && null != N) {
                        let e;
                        x[31] !== r ? (e = {
                            ...r,
                            fromChatGptFirstSend: !0
                        }, x[31] = r, x[32] = e) : e = x[32], r = e
                    }
                    y = E !== z || t ? (0, a.jsx)(s.l, {
                        replace: !0,
                        state: "tpp" === n || "flora" === n ? {
                            ...r,
                            workTurnVisit: (0, m.f)(I, P, M?.workTurnVisit)
                        } : r,
                        to: {
                            hash: t ? "" : T,
                            pathname: z,
                            search: t ? e.toString() : A
                        }
                    }) : null, x[16] = w, x[17] = z, x[18] = R, x[19] = T, x[20] = P, x[21] = E, x[22] = N, x[23] = I, x[24] = A, x[25] = M, x[26] = y
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
            x = n("e2yd"),
            C = n("yGJW"),
            w = n("gBBC"),
            _ = n("OWtl"),
            S = n("hZax"),
            j = n("JYRT"),
            I = n("wwvo"),
            T = n("wrCb"),
            P = n("H7Nt"),
            E = n("vzxm"),
            A = n("jAnS"),
            M = n("yKKN"),
            R = n("hnvR"),
            k = n("r2Hc"),
            N = n("n3cq");
        let O = (0, v.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function B(e) {
            let t, n, v, B, F, G, L, z, D, H, q, W, K, U, V, Q, $, Y, X, J, Z = (0, r.c)(56),
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
                el = (0, s.x)(j.a, "2513446768"),
                ec = ei && "gpt" === ee.gizmo.gizmo_type && null != ee.gizmo.migrated_plugin_id;
            Z[0] !== el ? (t = el?.get("disable_gpt_updates", !1), Z[0] = el, Z[1] = t) : t = Z[1];
            let ed = t,
                eu = ee.gizmo.current_user_permission?.can_write && !ec && !ed,
                {
                    data: eh
                } = (0, s.z)(I.c);
            Z[2] !== ee.gizmo.id || Z[3] !== eh ? (n = eh?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === ee.gizmo.id
            }), Z[2] = ee.gizmo.id, Z[3] = eh, Z[4] = n) : n = Z[4];
            let ep = n;
            Z[5] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, T.a)("/gpts/editor"), Z[5] = v) : v = Z[5];
            let em = `${v}/${encodeURIComponent(ee.gizmo.id)}`;
            Z[6] !== ee.gizmo.id || Z[7] !== ee.gizmo.short_url ? (B = ee.gizmo.short_url?.trim() || ee.gizmo.id, Z[6] = ee.gizmo.id, Z[7] = ee.gizmo.short_url, Z[8] = B) : B = Z[8], Z[9] !== B ? (F = (0, E.c)(B), Z[9] = B, Z[10] = F) : F = Z[10], Z[11] !== ea ? (G = (0, A.e)("", (0, A.i)(ea)), Z[11] = ea, Z[12] = G) : G = Z[12];
            let eg = `${F}${G}`;
            Z[13] !== en ? (L = en.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions"
            }), Z[13] = en, Z[14] = L) : L = Z[14];
            let ef = L;
            Z[15] === Symbol.for("react.memo_cache_sentinel") ? (z = (0, a.jsx)(x.a, {
                className: "icon-sm"
            }), Z[15] = z) : z = Z[15], Z[16] !== ef ? (D = (0, a.jsx)(p.a, {
                "aria-label": ef,
                color: "ghost",
                size: "icon",
                children: z
            }), Z[16] = ef, Z[17] = D) : D = Z[17], Z[18] !== ee.gizmo.gizmo_type || Z[19] !== ee.gizmo.id || Z[20] !== er || Z[21] !== eg || Z[22] !== et ? (H = "gpt" === ee.gizmo.gizmo_type ? (0, a.jsxs)(m.c.Item, {
                href: eg,
                onClick: e => {
                    e.defaultPrevented || ((0, C.a)(et, o.uc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: ee.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), es(!1), (0, w.c)(et, null), (0, h.n)(et, "chat"), er(eg, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(m.c.ItemIcon, {
                    children: (0, a.jsx)(f.Sh, {})
                }), (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat"
                })]
            }) : null, Z[18] = ee.gizmo.gizmo_type, Z[19] = ee.gizmo.id, Z[20] = er, Z[21] = eg, Z[22] = et, Z[23] = H) : H = Z[23], Z[24] !== ee || Z[25] !== et ? (q = () => (0, y.f)(et, O, {
                accountId: et.get(u.f),
                resource: ee
            }), Z[24] = ee, Z[25] = et, Z[26] = q) : q = Z[26], Z[27] === Symbol.for("react.memo_cache_sentinel") ? (W = (0, a.jsx)(m.c.ItemIcon, {
                children: (0, a.jsx)(f.le, {})
            }), K = (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About"
            }), Z[27] = W, Z[28] = K) : (W = Z[27], K = Z[28]), Z[29] !== q ? (U = (0, a.jsxs)(m.c.Item, {
                onSelect: q,
                children: [W, K]
            }), Z[29] = q, Z[30] = U) : U = Z[30];
            let ev = ep ? N.a : k.a;
            return Z[31] !== ee || Z[32] !== en || Z[33] !== ep || Z[34] !== et ? (V = () => {
                (0, I.e)(et, ee, !ep).catch(() => {
                    et.get(b.f).danger(en.formatMessage({
                        id: "chatgptConversations.customGpt.pinFailed",
                        defaultMessage: "Couldn't update pinned GPT"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.customGpt.pinFailed"
                        }
                    })
                })
            }, Z[31] = ee, Z[32] = en, Z[33] = ep, Z[34] = et, Z[35] = V) : V = Z[35], Z[36] !== ep ? (Q = ep ? (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT"
            }) : (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT"
            }), Z[36] = ep, Z[37] = Q) : Q = Z[37], Z[38] !== ev || Z[39] !== V || Z[40] !== Q ? ($ = (0, a.jsx)(m.c.Item, {
                leftIconAsset: ev,
                onSelect: V,
                children: Q
            }), Z[38] = ev, Z[39] = V, Z[40] = Q, Z[41] = $) : $ = Z[41], Z[42] !== eu || Z[43] !== em || Z[44] !== ee.gizmo.current_user_permission?.can_view_config ? (Y = eu || ee.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(m.c.Item, {
                href: em,
                leftIconAsset: eu ? R.a : M.a,
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
                    defaultMessage: "Edit GPT"
                }) : (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.view",
                    defaultMessage: "View"
                })
            }) : null, Z[42] = eu, Z[43] = em, Z[44] = ee.gizmo.current_user_permission?.can_view_config, Z[45] = Y) : Y = Z[45], Z[46] !== ee ? (X = (0, a.jsx)(P.a, {
                resource: ee
            }), Z[46] = ee, Z[47] = X) : X = Z[47], Z[48] !== eo || Z[49] !== H || Z[50] !== U || Z[51] !== $ || Z[52] !== Y || Z[53] !== X || Z[54] !== D ? (J = (0, a.jsxs)(m.a, {
                align: "start",
                contentWidth: "menu",
                open: eo,
                onOpenChange: es,
                triggerButton: D,
                children: [H, U, $, Y, X]
            }), Z[48] = eo, Z[49] = H, Z[50] = U, Z[51] = $, Z[52] = Y, Z[53] = X, Z[54] = D, Z[55] = J) : J = Z[55], J
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
                } = (0, s.x)(I.b, t);
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
    pV06: (function(e, t, n) {
        var a = n("JjRy"),
            r = n.n(a),
            o = n("AuIy"),
            s = n("G4E3"),
            i = n("KaH3"),
            l = n("Yz3b"),
            c = n("pqpL"),
            d = n("ghNX"),
            u = n("KvVi"),
            h = n("m250"),
            p = n("H8lk"),
            m = n("Ng4B"),
            g = n("bTKb"),
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
                        messages: w,
                        pendingAttachments: _ = [],
                        resources: S = (0, p.e)(w),
                        turns: j,
                        isTurnActive: I = j.at(-1)?.turn.status === "in_progress"
                    } = e,
                    T = [...S.inputs],
                    P = C ? (0, m.a)(w, j) : [],
                    E = new Map,
                    A = new Map,
                    M = (t = w, -1 !== (n = r()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, v.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    R = [],
                    k = new Map(w.map(e => [(0, o.g)(e), e])),
                    N = r()(w, e => "user" === e.author.role),
                    O = [];
                for (let e of _) T.some(t => t.fileId === e.id || null != e.libraryFileId && t.libraryFileId === e.libraryFileId) || T.push({
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
                    of j) {
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
                                let t = (0, s.d)(e.url);
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
                            O = n.plan.map((t, n) => ({
                                key: `progress:${e}:${String(n)}`,
                                label: t.step,
                                status: M ? "completed" : t.status
                            }));
                            continue
                        }
                        if ("generated-image" === n.type && "completed" === n.status && null != n.src) {
                            let e = `image:${n.id}`;
                            E.set(e, {
                                image: n,
                                key: e,
                                kind: "generated-image"
                            })
                        }
                    }
                }
                let B = (0, i.b)(j.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return y(t.items).filter(e => "mcp-tool-call" === e.type)
                })).at(-1);
                return a = null == B ? [...S.outputs, ...A.values(), ...E.values()] : [{
                    ...B,
                    key: `site:${B.projectId}`,
                    kind: "site"
                }, ...S.outputs.filter(e => null == B.archivePath || ! function(e, t) {
                    if (null != e.sandboxPath) return e.sandboxPath === t;
                    let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != n && e.name.toLowerCase() === n
                }(e, B.archivePath)), ...A.values(), ...E.values()], {
                    automationIds: (0, u.b)(w, b ?? void 0),
                    browserScreenshots: (0, g.d)(w),
                    inputs: T,
                    sourceTurns: R,
                    outputs: a,
                    progressSteps: O,
                    isPlanSummaryUpdating: I && w.slice(N + 1).some(e => "assistant" === e.author.role && u.a.test(e.recipient ?? "") || "tool" === e.author.role && u.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${j.at(-1)?.id??""}:${I}`,
                    showSources: C,
                    sources: C ? [...Array.from(new Map(w.filter(e => "user" === e.author.role).flatMap(e => (0, l.a)((0, o.e)(e))).map(e => [e.projectId, e])).values(), e => ({
                        kind: "site",
                        key: `site:${e.projectId}`,
                        projectId: e.projectId,
                        label: e.title
                    })), ...P.filter(e => "memory" === e.kind), ...new Map(j.flatMap(e => {
                        let {
                            turn: t
                        } = e;
                        return (t.skillSources ?? []).map(e => [e.key, e])
                    })).values(), ...S.pluginSources, ...P.filter(e => "web" === e.kind && "apps" === e.category), ...P.filter(e => "file-source" === e.kind), ...P.filter(e => "web" === e.kind && "apps" !== e.category)] : [],
                    subagents: (0, f.a)(w)?.subagents ?? []
                }
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
            j = n("OCK3"),
            I = n("dhxJ"),
            T = n("lsky"),
            P = n("rKAs"),
            E = n("ASxG"),
            A = n("rn0J"),
            M = n("XpUB"),
            R = n("G6mJ"),
            k = n("VB5Q"),
            N = n("VTN2");
        let O = E.record(E.string(), E.union([E.string(), E.literal(!0)]));

        function B(e) {
            let t, n, E, B, G, L, z = (0, r.c)(28),
                {
                    conversationId: D,
                    turns: H,
                    loadHistory: q,
                    renderMode: W,
                    paragenEnabled: K,
                    enabled: U,
                    canCopy: V,
                    priority: Q
                } = e,
                $ = void 0 === W ? "conversation" : W,
                Y = void 0 !== K && K,
                X = void 0 === U || U,
                J = void 0 === V || V,
                Z = void 0 === Q ? "fallback" : Q,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            z[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), z[0] = t) : t = z[0], z[1] !== J || z[2] !== D || z[3] !== X || z[4] !== q || z[5] !== Y || z[6] !== $ ? (n = [D, X, J, q, $, Y], z[1] = J, z[2] = D, z[3] = X, z[4] = q, z[5] = Y, z[6] = $, z[7] = n) : n = z[7], (0, c.useEffect)(t, n), z[8] !== J || z[9] !== D || z[10] !== Y || z[11] !== $ || z[12] !== ee || z[13] !== H ? (E = () => {
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
                                if ((0, T.h)((0, M.a)(e.content, P.b), a => {
                                        if ("codexDirective" === a.type && a.name === P.a) {
                                            let n = O.safeParse(a.attributes);
                                            if (!n.success) return;
                                            let r = (0, R.a)(n.data, e.contentReferences),
                                                o = N.d.safeParse(r?.reference);
                                            if (null == r || !o.success || (null == n.data.is_streaming ? !e.completed && (e.contentReferenceMessageStatuses?.[r.index] ?? "in_progress") === "in_progress" : "true" === n.data.is_streaming)) return;
                                            let s = e.contentReferenceMessageIds?.[r.index];
                                            t = {
                                                content: (0, k.a)(o.data.data),
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
                    i = (0, I.a)(a?.[o.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(j.b, s) ?? i?.[String(o.codeBlockIndex)]?.content ?? o.content
                }
            }, z[8] = J, z[9] = D, z[10] = Y, z[11] = $, z[12] = ee, z[13] = H, z[14] = E) : E = z[14];
            let en = (0, y.a)(E);
            z[15] !== ee ? (B = (e, t) => {
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
                        defaultMessage: "Copied code block to clipboard"
                    }))
                })
            }, z[15] = ee, z[16] = B) : B = z[16];
            let ea = B;
            return z[17] !== D || z[18] !== en || z[19] !== q || z[20] !== Y || z[21] !== $ || z[22] !== ee || z[23] !== ea ? (G = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!q || ee.get(C.B, D) || null == t || ee.get(_.c, t)?.complete !== !1) return;
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
            }, z[17] = D, z[18] = en, z[19] = q, z[20] = Y, z[21] = $, z[22] = ee, z[23] = ea, z[24] = G) : G = z[24], z[25] !== X || z[26] !== Z ? (L = {
                enabled: X,
                priority: Z
            }, z[25] = X, z[26] = Z, z[27] = L) : L = z[27], (0, p.a)("copyLastCodeBlock", G, L), null
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
            i = n("LIH9"),
            l = n("TdH6"),
            c = n("QcW8");
        n("ZU27"), n("TpEm");
        var d = n("gbrq"),
            u = n("B1XR"),
            h = n("ipGa"),
            p = n("I07G"),
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
                    if (null != r) return (0, f.a)(a, (0, p.Ue)(`chatgpt:${r}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, m.useLayoutEffect)(e, t), null
        }
        n("n5iL"), n("bf6R");
        var b = n("F0l0"),
            x = n("enMl");
        n("efE7");
        var C = n("PCEr");

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
                    fullScreenTitle: j
                } = e,
                I = (0, o.y)(g.a);
            return (0, s.a)(), (0, o.z)(d.h), (0, o.z)(c.t), v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(y, {}), v[0] = t, v[1] = n) : (t = v[0], n = v[1]), v[2] !== w || v[3] !== S ? (i = (0, a.jsx)(x.a, {
                title: S,
                icon: w
            }), v[2] = w, v[3] = S, v[4] = i) : i = v[4], v[5] !== j ? (u = (0, a.jsx)("div", {
                className: "max-w-80 min-w-0 truncate empty:hidden focus-within:overflow-visible",
                children: j
            }), v[5] = j, v[6] = u) : u = v[6], v[7] !== _ || v[8] !== u ? (p = (0, a.jsx)(C.a, {
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
        var o = n("LIH9");
        n("Sm6l"), n("HOLv");
        var s = n("NVRI"),
            i = n("MMlk"),
            l = n("UNoV");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, c, d, u, h, p, m, g, f = (0, r.c)(20);
                f[0] !== e ? ({
                    hasSectionProgress: d,
                    isTemporaryChat: u,
                    isCloudTask: t,
                    leading: n,
                    startActions: c,
                    ...o
                } = e, f[0] = e, f[1] = t, f[2] = n, f[3] = o, f[4] = c, f[5] = d, f[6] = u) : (t = f[1], n = f[2], o = f[3], c = f[4], d = f[5], u = f[6]);
                let v = void 0 !== u && u,
                    y = void 0 !== d && d ? l.a.Title : void 0;
                return f[7] !== n || null !== f[8] ? (h = (0, a.jsxs)(a.Fragment, {
                    children: [n, null]
                }), f[7] = n, f[8] = null, f[9] = h) : h = f[9], f[10] !== v ? (p = v ? (0, a.jsx)(i.b, {
                    isIndicator: !0,
                    isTemporaryChat: !0
                }) : null, f[10] = v, f[11] = p) : p = f[11], f[12] !== c || f[13] !== p ? (m = (0, a.jsxs)(a.Fragment, {
                    children: [c, p]
                }), f[12] = c, f[13] = p, f[14] = m) : m = f[14], f[15] !== o || f[16] !== y || f[17] !== h || f[18] !== m ? (g = (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(s.a, {
                        ...o,
                        className: y,
                        inset: "tab-strip-flush-start",
                        leading: h,
                        startActions: m
                    })
                }), f[15] = o, f[16] = y, f[17] = h, f[18] = m, f[19] = g) : g = f[19], g
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
            r = n("OWtl"),
            o = n("OMIV"),
            s = n("dQRk"),
            i = n("ZniH");
        let l = (0, a.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(s.N, e), r = n(s.C, e);
                return null == a || null == r ? null : (0, i.a)({
                    mapping: a,
                    current_node: r
                }, n(s.O, e))?.text ?? null
            }),
            c = (0, a.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t;
                return null == e || n(o.e, "2163293173") && !n(s.K, e) ? null : n(l, e) || null
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
                    children: (0, a.jsx)(c.xd, {})
                }), d = (0, a.jsx)(s.a, {
                    id: "chatgptConversations.gpts.report.action",
                    defaultMessage: "Report GPT"
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
                i = (0, s.x)(d.e, "2160578039");
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
            h = n("QVPe");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, m, g, f, v, y, b, x = (0, r.c)(34),
                    {
                        gptName: C,
                        accessState: w,
                        onUsePlugin: _,
                        onKeepUsingGpt: S,
                        onRetry: j
                    } = e,
                    I = (0, o.a)(),
                    T = (0, d.e)("2513446768");
                x[0] !== T || x[1] !== I ? (t = I.formatDate((0, u.a)(T.get("retirement_date", "")), {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }), x[0] = T, x[1] = I, x[2] = t) : t = x[2];
                let P = t;
                if ("error" === w && null != j) {
                    let e;
                    x[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceRetry",
                        defaultMessage: "Try again"
                    }), x[3] = e) : e = x[3], n = e
                } else if ("admin" === w) {
                    let e;
                    x[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.viewPlugin",
                        defaultMessage: "View Plugin"
                    }), x[4] = e) : e = x[4], n = e
                } else if ("allowed" === w || "pending" === w) {
                    let e;
                    x[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceUsePlugin",
                        defaultMessage: "Use plugin"
                    }), x[5] = e) : e = x[5], n = e
                } else {
                    let e;
                    x[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceExplorePlugins",
                        defaultMessage: "Explore plugins"
                    }), x[6] = e) : e = x[6], n = e
                }
                if ("error" === w && null == j) {
                    let e;
                    x[7] !== P ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessUnconfirmed",
                        defaultMessage: "We couldn’t check your access to the plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: P
                        }
                    }), x[7] = P, x[8] = e) : e = x[8], p = e
                } else if ("error" === w) {
                    let e;
                    x[9] !== P ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessError",
                        defaultMessage: "We couldn’t check your access to the plugin. Try again, or keep using this GPT until {deadline}.",
                        values: {
                            deadline: P
                        }
                    }), x[9] = P, x[10] = e) : e = x[10], p = e
                } else if ("denied" === w) {
                    let e;
                    x[11] !== P ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessDenied",
                        defaultMessage: "This plugin isn’t available to you. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: P
                        }
                    }), x[11] = P, x[12] = e) : e = x[12], p = e
                } else if (C.trim()) {
                    let e;
                    x[13] !== P || x[14] !== C ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceNamedBody",
                        defaultMessage: "{gptName} is now available as a plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            gptName: C,
                            deadline: P
                        }
                    }), x[13] = P, x[14] = C, x[15] = e) : e = x[15], p = e
                } else {
                    let e;
                    x[16] !== P ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceBody",
                        defaultMessage: "This GPT is now available as a plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: P
                        }
                    }), x[16] = P, x[17] = e) : e = x[17], p = e
                }
                x[18] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, a.jsx)(c.a, {
                    asset: h.a,
                    className: "text-secondary"
                }), x[18] = m) : m = x[18], x[19] !== C ? (g = C.trim() ? (0, a.jsx)(s.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceNamedTitle",
                    defaultMessage: "{gptName} is now a plugin",
                    values: {
                        gptName: C
                    }
                }) : (0, a.jsx)(s.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceTitle",
                    defaultMessage: "This GPT is now a plugin"
                }), x[19] = C, x[20] = g) : g = x[20];
                let E = "pending" === w,
                    A = "error" === w && null != j ? j : _;
                return x[21] !== n || x[22] !== E || x[23] !== A ? (f = (0, a.jsx)(l.a, {
                    color: "primary",
                    loading: E,
                    size: "dialog",
                    type: "button",
                    onClick: A,
                    children: n
                }), x[21] = n, x[22] = E, x[23] = A, x[24] = f) : f = x[24], x[25] !== S ? (v = null == S ? null : (0, a.jsx)(l.a, {
                    color: "outline",
                    size: "dialog",
                    type: "button",
                    onClick: S,
                    children: (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceKeepUsing",
                        defaultMessage: "Keep using GPT"
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
                return n(l.e, "4035922817") ? n(p, e) : null
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
            i = n("a4V1");
        let l = (0, a.a)({
            conversationIds: (e, t) => [t],
            status: (e, t) => {
                let {
                    get: n
                } = e, a = n(s.w, t);
                return {
                    pending: (0, s.Bb)(n(s.ab, t)),
                    completed: null == a || "completed" === a.result,
                    completionId: n(r.e, "2163293173") ? JSON.stringify([t, a?.requestId, n(s.C, t)]) : void 0,
                    unread: n(s.K, t)
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
            l = n("wD9O"),
            c = n("hEYZ"),
            d = n("OWtl"),
            u = n("nMdB"),
            h = n("yLzP"),
            p = n("lsfk"),
            m = n("dQRk"),
            g = n("jfiJ"),
            f = n("FGJH");

        function v(e) {
            return e.isIntersecting
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, y, b, x, C = (0, r.c)(22),
                    {
                        conversationId: w
                    } = e,
                    _ = (0, o.y)(d.a),
                    S = (0, o.z)(c.b),
                    j = (0, o.x)(m.j, w),
                    I = (0, o.x)(f.c, j ?? w),
                    T = (0, p.b)(),
                    P = (0, l.c)(),
                    E = (0, s.useRef)(null);
                C[0] !== T || C[1] !== _ || C[2] !== j || C[3] !== P ? (t = () => {
                    null != j && (0, g.b)(_, j, e => {
                        let t = T.getScrollElement(),
                            n = t?.querySelector("[data-thread-reading-passage]") ?? t?.querySelector("[data-user-message-bubble]");
                        null != n && (0, u.a)(n, P), (0, i.flushSync)(e)
                    })
                }, C[0] = T, C[1] = _, C[2] = j, C[3] = P, C[4] = t) : t = C[4];
                let A = t;
                C[5] !== w || C[6] !== A || C[7] !== _ || C[8] !== j ? (n = () => {
                    let e = _.get(f.c, j ?? w);
                    _.get(c.b) || e?.hasError || A()
                }, C[5] = w, C[6] = A, C[7] = _, C[8] = j, C[9] = n) : n = C[9];
                let M = (0, s.useEffectEvent)(n);
                C[10] !== T || C[11] !== S || C[12] !== M ? (y = () => {
                    if (S) return;
                    let e = E.current,
                        t = T.getScrollElement();
                    if (null == e || null == t) return;
                    let n = new IntersectionObserver(e => {
                        e.some(v) && M()
                    }, {
                        root: t,
                        rootMargin: "80px 0px 0px 0px"
                    });
                    return n.observe(e), () => n.disconnect()
                }, C[10] = T, C[11] = S, C[12] = M, C[13] = y) : y = C[13];
                let R = I?.cursor,
                    k = I?.hasError;
                if (C[14] !== T || C[15] !== S || C[16] !== j || C[17] !== R || C[18] !== k ? (b = [T, S, j, R, k], C[14] = T, C[15] = S, C[16] = j, C[17] = R, C[18] = k, C[19] = b) : b = C[19], (0, s.useEffect)(y, b), null == I || I.complete || null == I.cursor) return null;
                let N = I.hasError ? A : null;
                return C[20] !== N ? (x = (0, a.jsx)(h.a, {
                    ref: E,
                    onRetry: N
                }), C[20] = N, C[21] = x) : x = C[21], x
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
            j = n("FgUr"),
            I = n("WLgA");
        let T = (0, o.u)(f.a, 0);

        function P(e) {
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
                isWorkConversation: P,
                sourceMemoryBlocked: A
            } = (0, S.c)(n, r), M = A ? v.a.projectOnlyMoveUnavailable : void 0, {
                data: R,
                isPending: k,
                isError: N
            } = o, {
                data: O,
                isPending: B,
                isError: F
            } = s, G = (0, j.a)(O, R, r?.gizmo.id), L = "allowed" === c, z = e => {
                let a = t.get(T) + 1,
                    r = t.get(p.e);
                t.set(T, a), (0, C.S)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(n => {
                    n && t.get(T) === a && t.get(p.e) === r && f((0, I.c)(e.gizmo.id))
                }).catch(() => {
                    t.get(u.f).danger(t.get(h.a).formatMessage(E.moveFailed), {
                        errorAnalytics: {
                            toastId: "move_conversation_to_snorlax_error"
                        }
                    })
                })
            }, D = [];
            for (let e of (L && (D.push({
                    id: "new-chatgpt-project",
                    icon: d.Eg,
                    message: E.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        t.set(T, e => e + 1), (0, x.a)(t, z, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: P,
                            onCloseAutoFocus: w
                        })
                    }
                }), G.length > 0 && D.push({
                    id: "new-project-separator",
                    type: "separator"
                })), G)) {
                let {
                    targetMemoryBlocked: t
                } = (0, S.c)(n, void 0, e), r = t ? (0, _.a)((0, b.c)(e)) : void 0;
                D.push({
                    id: `move-to-project:${e.gizmo.id}`,
                    icon: (0, a.jsx)(g.a, {
                        className: "icon-xs",
                        size: 16,
                        color: e.gizmo.display.theme,
                        fallbackIcon: (0, a.jsx)(d.Bd, {}),
                        icon: e.gizmo.display.emoji
                    }),
                    nativeIcon: (0, m.b)(e.gizmo.display.emoji),
                    message: E.projectName,
                    messageValues: {
                        projectName: e.gizmo.display.name
                    },
                    enabled: null == r,
                    tooltipMessage: r,
                    onSelect: () => z(e)
                })
            }
            return l && (N || F) ? D.push({
                id: "retry-project-destinations",
                message: E.destinationsFailed,
                closeOnSelect: !1,
                onSelect: () => {
                    Promise.all([t.query.invalidate(y.a), t.query.invalidate(C.m)])
                }
            }) : l && (k || B) ? D.push({
                id: "loading-project-destinations",
                message: E.loading,
                tooltipMessage: E.reopen,
                enabled: !1
            }) : N || F || k || B || 0 !== G.length || L || D.push({
                id: "no-project-destinations",
                message: E.noDestinations,
                enabled: !1
            }), [...i && D.length > 0 ? [{
                id: "move-to-project",
                icon: d.Ed,
                message: E.moveToProject,
                enabled: !A,
                tooltipMessage: M,
                submenu: D
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                icon: d.Id,
                message: E.removeFromProject,
                enabled: !A,
                tooltipMessage: M,
                onSelect: () => {
                    t.set(T, e => e + 1), (0, C.S)({
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
                    m = void 0 === p || p,
                    g = (0, o.y)(f.a),
                    v = (0, l._)(),
                    b = (0, o.z)(y.a),
                    x = (0, o.z)(C.m),
                    _ = (0, w.b)();
                if (i[0] !== d || i[1] !== v || i[2] !== u || i[3] !== x || i[4] !== h || i[5] !== _ || i[6] !== b || i[7] !== g || i[8] !== m) {
                    let e = P({
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
            b: P
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
            o = n("BolX"),
            s = n("zd8w"),
            i = n("oyxz"),
            l = n("LIH9"),
            c = n("EOo5"),
            d = n("Sm6l"),
            u = n("X6Vn"),
            h = n("OWtl"),
            p = n("j0nn");
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
                defaultMessage: "Report image"
            }) : (0, a.jsx)(i.a, {
                id: "chatgptConversations.sharedPost.reportButton",
                defaultMessage: "Report conversation"
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
                        imageOnly: o
                    } = e,
                    s = void 0 !== o && o;
                return n[0] !== s ? (t = (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                    children: [(0, a.jsx)("div", {
                        className: "text-secondary",
                        children: s ? (0, a.jsx)(i.a, {
                            id: "chatgptConversations.sharedPost.webImage.disclaimer",
                            defaultMessage: "This is a shared image."
                        }) : (0, a.jsx)(i.a, {
                            id: "chatgptConversations.sharedConversation.copyDisclaimer",
                            defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory."
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
            s = n("LIH9"),
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
                f = (0, o.z)(l.n);
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
    b7aP: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("oyxz"),
            s = n("Bbed"),
            i = n("iS3k");
        let l = (0, s.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(602271)]).then(n.bind(n, "Vkkr"))).ChatGptThreadSummaryPanelBody, {
            errorFallback: (0, a.jsx)("span", {
                className: "px-5 select-none",
                role: "status",
                children: (0, a.jsx)(o.a, {
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
            o = n.n(r),
            s = n("BolX"),
            i = n("I07G"),
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
                } = t, j = void 0 === w ? C : w, I = (0, s.y)(u.a);
                b[2] !== C || b[3] !== j || b[4] !== _ || b[5] !== S || b[6] !== I ? (n = () => o()(() => {
                    let e = null == C ? null : I.get(g.y, C),
                        t = (0, d.e)(_ ?? (null == j ? "" : I.get(p.u, j)), {
                            addInitialContentToHistory: null == _ && null != j,
                            defaultTextKind: S ?? (null == _ && null != j || (0, c.b)(_ ?? "").length > 0 ? "prompt" : "plain"),
                            enableFileMentions: !0,
                            enableRichText: !0,
                            enableSkillMentions: !1,
                            enableSlashCommands: {
                                triggers: ["/"]
                            },
                            plainTextMode: (0, h.b)(I.get, i.vf.composerPlainTextMode),
                            suggestionOptions: {
                                enableInlineSystemHints: "tpp" !== e && "flora" !== e,
                                variant: "tpp" !== e && "flora" !== e ? "chatgpt" : void 0
                            }
                        });
                    return null == _ && null != C && "string" == typeof j && null != (0, m.k)(I, j) && "tpp" !== e && "flora" !== e && (0, p.T)(I, C, t.getChatGptPrompt().systemHints), t
                }), b[2] = C, b[3] = j, b[4] = _, b[5] = S, b[6] = I, b[7] = n) : n = b[7];
                let [T] = (0, l.useState)(n);
                b[8] !== T || b[9] !== x ? (r = x ?? T(), b[8] = T, b[9] = x, b[10] = r) : r = b[10];
                let P = r,
                    E = (0, l.useRef)(null);
                b[11] !== P || b[12] !== j || b[13] !== I ? (f = () => {
                    if (null == j) return;
                    let e = I.get(p.u, j);
                    return null != E.current && E.current !== e && P.restoreDraft(e), () => {
                        E.current = I.get(p.u, j)
                    }
                }, v = [P, j, I], b[11] = P, b[12] = j, b[13] = I, b[14] = f, b[15] = v) : (f = b[14], v = b[15]), (0, l.useLayoutEffect)(f, v), b[16] !== P || b[17] !== x ? (y = () => {
                    null != x || P.view.isDestroyed || P.destroy()
                }, b[16] = P, b[17] = x, b[18] = y) : y = b[18];
                let A = y;
                return (0, d.f)(A, P), P
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
            o = (0, a.b)("text-default min-h-0 w-full p-0 leading-normal !font-sans", "[&_.ProseMirror]:w-full", "[&_.ProseMirror]:!text-default", "[&_.ProseMirror]:!font-sans", "[&_.ProseMirror]:px-0", "[&_.ProseMirror]:py-0", "[&_.ProseMirror]:!leading-[var(--annotation-comment-line-height,calc(var(--spacing)*6))]", "[&_.ProseMirror_p]:!font-sans", "[&_.ProseMirror_p]:!leading-[var(--annotation-comment-line-height,calc(var(--spacing)*6))]", "[&_.ProseMirror_p_*]:!font-sans", "[&_.ProseMirror_span]:!font-sans", "!min-h-0 text-base", "[&_.ProseMirror]:min-h-[var(--annotation-comment-min-height,calc(var(--spacing)*6))]!");
        n.d(t, {}, {
            a: "absolute inset-x-0 bottom-0 flex h-12 items-center ps-2 pe-3 origin-bottom-left transition-[opacity,transform] duration-basic ease-out motion-reduce:transition-none",
            b: o,
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
            o = n("on57"),
            s = n("JjB1");

        function i(e) {
            let t, n, i, l, c, d, u, h, p, m, g, f, v, y, b = (0, r.c)(30);
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
                w = void 0 !== h && h,
                _ = "default" === x && "bg-surface-elevated-secondary shadow-md",
                S = C && !w && "in-data-[comment-layout=floating]:shadow-none!",
                j = C && "default" === x && "in-data-[comment-layout=floating]:border in-data-[comment-layout=floating]:bg-surface-elevated!",
                I = C && "default" === x && (w ? "in-data-[comment-layout=floating]:border-strong in-data-[comment-layout=floating]:rounded-xl! in-data-[comment-layout=floating]:shadow-[0_2px_10px_rgb(0_0_0/5%)]!" : "in-data-[comment-layout=floating]:border-border"),
                T = void 0 !== c && c ? "transition-none" : "transition-[height,width,opacity]";
            return b[9] !== n || b[10] !== _ || b[11] !== S || b[12] !== j || b[13] !== I || b[14] !== T ? (p = (0, o.b)("surface-AyYLmv", "pointer-events-auto isolate rounded-[22px] ease-enter-snappy motion-reduce:transition-none", _, S, j, I, T, n), b[9] = n, b[10] = _, b[11] = S, b[12] = j, b[13] = I, b[14] = T, b[15] = p) : p = b[15], b[16] !== l ? (m = {
                ...s.d,
                ...l
            }, b[16] = l, b[17] = m) : m = b[17], b[18] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, o.b)("content-Sj8_aX", "overflow-hidden rounded-[inherit] bg-inherit"), b[18] = g) : g = b[18], b[19] !== t ? (f = (0, a.jsx)("div", {
                className: g,
                children: t
            }), b[19] = t, b[20] = f) : f = b[20], b[21] !== C || b[22] !== x ? (v = "default" === x ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: (0, o.b)("pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-multiply outline-1 outline-border", C && "in-data-[comment-layout=floating]:hidden")
            }) : null, b[21] = C, b[22] = x, b[23] = v) : v = b[23], b[24] !== i || b[25] !== p || b[26] !== m || b[27] !== f || b[28] !== v ? (y = (0, a.jsxs)("div", {
                ...i,
                className: p,
                style: m,
                children: [f, v]
            }), b[24] = i, b[25] = p, b[26] = m, b[27] = f, b[28] = v, b[29] = y) : y = b[29], y
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
            h = n("I07G"),
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
                width: h.U
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
        let g = (0, d.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(789716), n.e(633848), n.e(326035), n.e(583368)]).then(n.bind(n, "FQ1K"))).SelectedTextAnnotationEditor, {
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
                defaultMessage: "Couldn't load the editor. Reload to try again"
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(u.a, {}), (0, a.jsx)(s.a, {
                    id: "responseTextAnnotationMarkers.editor.loading",
                    defaultMessage: "Loading editor…"
                })]
            }), d[0] = m, d[1] = t) : t = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(s.a, {
                id: "responseTextAnnotationMarkers.editor.close",
                defaultMessage: "Close"
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
                        className: j,
                        onOpen: I,
                        portalTargetSelector: T,
                        targetContainer: P,
                        targetContainerRefs: E,
                        targetSelector: A
                    } = e,
                    M = void 0 === A ? u.b : A,
                    R = (0, i.c)(),
                    k = (0, s.useRef)(null),
                    N = (0, s.useRef)(!1),
                    O = (0, s.useRef)(null),
                    B = (0, s.useRef)(null),
                    [F, G] = (0, s.useState)(null);
                C[0] !== I ? (t = e => {
                    I?.(e)
                }, C[0] = I, C[1] = t) : t = C[1];
                let L = (0, s.useEffectEvent)(t);
                C[2] !== F || C[3] !== R ? (n = () => {
                    let e = O.current?.getBoundingClientRect();
                    if (null == F || null == e) return;
                    let t = F.portalTarget?.getBoundingClientRect(),
                        n = null == t ? 1 : R;
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
                        windowZoom: R
                    }
                }, C[2] = F, C[3] = R, C[4] = n) : n = C[4];
                let z = (0, c.a)(n);
                if (C[5] !== _ || C[6] !== L || C[7] !== T || C[8] !== P || C[9] !== E || C[10] !== M || C[11] !== R ? (m = () => {
                        let e = null,
                            t = () => {
                                null != k.current && (window.cancelAnimationFrame(k.current), k.current = null)
                            },
                            n = () => {
                                t();
                                let e = window.getSelection();
                                null == B.current && (null == e || 0 === e.rangeCount || e.isCollapsed) || (k.current = window.requestAnimationFrame(() => {
                                    k.current = null;
                                    let e = null != P || null == E ? [P] : E.map(p).filter(h),
                                        t = null;
                                    for (let n of e)
                                        if (null != (t = (0, d.c)({
                                                bottomBoundarySelector: _,
                                                portalTarget: null == T ? void 0 : n?.querySelector(T) ?? void 0,
                                                targetContainer: n,
                                                targetSelector: M,
                                                windowZoom: R
                                            }))) break;
                                    (0, d.d)(B.current, t) || (null == B.current && null != t && L(t), B.current = t, G(t))
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
                                n instanceof Node && O.current?.contains(n) || (N.current = !0, t(), B.current = null, G(null))
                            },
                            s = () => {
                                N.current = !1, n()
                            },
                            i = () => {
                                if (N.current) {
                                    t(), B.current = null, G(null);
                                    return
                                }
                                n()
                            };
                        return n(), document.addEventListener("selectionchange", i), window.addEventListener("dblclick", n), window.addEventListener("keyup", n), window.addEventListener("pointerdown", o), window.addEventListener("pointerup", s), window.addEventListener("pointercancel", s), window.addEventListener("resize", a), window.addEventListener("scroll", r, !0), () => {
                            null != e && window.clearTimeout(e), t(), document.removeEventListener("selectionchange", i), window.removeEventListener("dblclick", n), window.removeEventListener("keyup", n), window.removeEventListener("pointerdown", o), window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s), window.removeEventListener("resize", a), window.removeEventListener("scroll", r, !0)
                        }
                    }, C[5] = _, C[6] = L, C[7] = T, C[8] = P, C[9] = E, C[10] = M, C[11] = R, C[12] = m) : m = C[12], C[13] !== _ || C[14] !== T || C[15] !== P || C[16] !== E || C[17] !== M || C[18] !== R ? (g = [_, T, P, E, M, R], C[13] = _, C[14] = T, C[15] = P, C[16] = E, C[17] = M, C[18] = R, C[19] = g) : g = C[19], (0, s.useEffect)(m, g), null == F) return null;
                let D = .5;
                "start" === (void 0 === w ? "center" : w) && (D = +("rtl" === F.direction));
                let H = F.rect.left + F.rect.width * D,
                    q = F.viewportHorizontalBounds.left + 8 - H,
                    W = F.viewportHorizontalBounds.right - 8 - H,
                    K = F.portalTarget ?? document.body,
                    U = null == F.portalTarget ? "fixed z-50" : "absolute z-[1]";
                C[20] !== j || C[21] !== U ? (f = (0, o.b)("pointer-events-none w-max", U, j), C[20] = j, C[21] = U, C[22] = f) : f = C[22];
                let V = F.viewportHorizontalBounds.right - F.viewportHorizontalBounds.left - 16,
                    Q = F.rect.top - 8,
                    $ = `translateX(clamp(${q}px, ${-100*D}%, calc(${W}px - 100%))) translateY(-100%)`;
                return C[23] !== H || C[24] !== V || C[25] !== Q || C[26] !== $ ? (v = {
                    left: H,
                    maxWidth: V,
                    top: Q,
                    transform: $
                }, C[23] = H, C[24] = V, C[25] = Q, C[26] = $, C[27] = v) : v = C[27], C[28] !== S || C[29] !== z || C[30] !== F || C[31] !== R ? (y = null == F.portalTarget && 1 !== R ? (0, a.jsx)("div", {
                    style: {
                        zoom: R
                    },
                    children: S(F, z)
                }) : S(F, z), C[28] = S, C[29] = z, C[30] = F, C[31] = R, C[32] = y) : y = C[32], C[33] !== v || C[34] !== y || C[35] !== f ? (b = (0, a.jsx)("div", {
                    ref: O,
                    className: f,
                    style: v,
                    children: y
                }), C[33] = v, C[34] = y, C[35] = f, C[36] = b) : b = C[36], C[37] !== b || C[38] !== K ? (x = (0, a.jsx)(l.a, {
                    container: K,
                    children: b
                }), C[37] = b, C[38] = K, C[39] = x) : x = C[39], x
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
            h = n("jb3G"),
            p = n("mN6P"),
            m = n("QhgR");
        n.d(t, {}, {
            a: function(e) {
                let t, n, g, f, v, y, b = (0, r.c)(56),
                    {
                        conversationTerminology: x,
                        onAddSelectedText: C,
                        onStartFileAnnotation: w,
                        onDismissFileAnnotation: _,
                        onCommentSelectedText: S,
                        onEditModeChange: j,
                        onEditSelectedText: I,
                        onMoreDetails: T,
                        onOpenSideChat: P,
                        resume: E,
                        selectedText: A
                    } = e,
                    M = void 0 === x ? "task" : x,
                    R = (0, s.a)(),
                    [k, N] = (0, o.useState)(E?.mode === "edit" ? E.instruction : ""),
                    [O, B] = (0, o.useState)(E?.mode ?? "actions"),
                    [F, G] = (0, o.useState)(null);
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
                    let e, t, n, r, o, s, i, l, d, p;
                    return b[8] !== j ? (e = e => {
                        e.stopPropagation(), "Escape" === e.key && (e.preventDefault(), j?.(!1), B("actions-focused"))
                    }, b[8] = j, b[9] = e) : e = b[9], b[10] !== k || b[11] !== j || b[12] !== I ? (t = e => {
                        e.preventDefault(), 0 !== k.trim().length && (B("pending"), I(k).then(e => {
                            "retry" === e && (j?.(!1), B("actions-focused"))
                        }))
                    }, b[10] = k, b[11] = j, b[12] = I, b[13] = t) : t = b[13], b[14] !== R ? (n = R.formatMessage({
                        id: "selectedTextOverlay.editInput",
                        defaultMessage: "Edit instruction"
                    }), b[14] = R, b[15] = n) : n = b[15], b[16] !== R ? (r = R.formatMessage({
                        id: "selectedTextOverlay.editPlaceholder",
                        defaultMessage: "Describe the edit…"
                    }), b[16] = R, b[17] = r) : r = b[17], b[18] === Symbol.for("react.memo_cache_sentinel") ? (o = e => {
                        N(e.target.value)
                    }, b[18] = o) : o = b[18], b[19] !== k || b[20] !== n || b[21] !== r ? (s = (0, a.jsx)("input", {
                        "aria-label": n,
                        autoComplete: "off",
                        autoFocus: !0,
                        className: "min-w-0 flex-1 bg-transparent text-sm text-default outline-none placeholder:text-codex-description",
                        placeholder: r,
                        required: !0,
                        value: k,
                        onChange: o
                    }), b[19] = k, b[20] = n, b[21] = r, b[22] = s) : s = b[22], b[23] !== R ? (i = R.formatMessage({
                        id: "selectedTextOverlay.editSubmit",
                        defaultMessage: "Submit edit instruction"
                    }), b[23] = R, b[24] = i) : i = b[24], b[25] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(u.a, {
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
                        null != w ? G({
                            rect: (e.currentTarget.parentElement ?? e.currentTarget).getBoundingClientRect(),
                            submit: w()
                        }) : (window.getSelection()?.removeAllRanges(), C?.(A))
                    },
                    children: "chat" === M ? (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.addToChat",
                        defaultMessage: "Ask ChatGPT"
                    }) : (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.addToCodex",
                        defaultMessage: "Add to chat"
                    })
                }) : null, b[33] = M, b[34] = C, b[35] = w, b[36] = A, b[37] = t) : t = b[37], b[38] !== T || b[39] !== A ? (n = null != T ? (0, a.jsx)(d.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), T(A)
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.moreDetails",
                        defaultMessage: "More details"
                    })
                }) : null, b[38] = T, b[39] = A, b[40] = n) : n = b[40], b[41] !== P || b[42] !== A ? (g = null != P ? (0, a.jsx)(d.b, {
                    onClick: e => {
                        window.getSelection()?.removeAllRanges(), P(A, (0, p.b)(e))
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.askInSideChat",
                        defaultMessage: "Ask in side chat"
                    })
                }) : null, b[41] = P, b[42] = A, b[43] = g) : g = b[43], b[44] !== S ? (f = null != S ? (0, a.jsx)(d.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), S()
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.comment",
                        defaultMessage: "Comment"
                    })
                }) : null, b[44] = S, b[45] = f) : f = b[45], b[46] !== O || b[47] !== j || b[48] !== I ? (v = null != I ? (0, a.jsx)(d.b, {
                    autoFocus: "actions-focused" === O,
                    onClick: () => {
                        j?.(!0), B("edit")
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.edit",
                        defaultMessage: "Edit"
                    })
                }) : null, b[46] = O, b[47] = j, b[48] = I, b[49] = v) : v = b[49], b[50] !== t || b[51] !== n || b[52] !== g || b[53] !== f || b[54] !== v ? (y = (0, a.jsxs)(d.a, {
                    children: [t, n, g, f, v]
                }), b[50] = t, b[51] = n, b[52] = g, b[53] = f, b[54] = v, b[55] = y) : y = b[55], y
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
        let o = () => new r;
        n.d(t, {}, {
            a: function() {
                return (0, a.a)(o)
            }
        })
    })
};