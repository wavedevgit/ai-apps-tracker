export const __rspack_esm_ids = [477331];
export const __webpack_modules__ = {
    UNoV: (function(e, t) {
        t.a = {
            Title: "Title-FbVjGN",
            title: "Title-FbVjGN",
            Progress: "Progress-dSoGxD",
            progress: "Progress-dSoGxD"
        }
    }),
    bn59: (function(e, t, n) {
        n.d(t, {
            a: () => B,
            ChatSeatAccessScreen: () => G
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
            w = n("twmu"),
            C = n("EOo5"),
            S = n("Kwur"),
            _ = n("udGC"),
            I = n("aTcy"),
            j = n("JNtf"),
            T = n("mUDD"),
            P = n("Ot7V"),
            E = n("SGsN"),
            A = n("DAA7"),
            M = n("yGJW"),
            R = n("GDNt");

        function k(e) {
            let t, n, l, c, d, u, p, v, y, R, k, F, G, z, B, L, D, H, W, q, K, U, V = (0, r.c)(70),
                {
                    account: Q,
                    accountId: $,
                    userId: Y,
                    onClose: J,
                    onSwitchToWork: Z
                } = e,
                X = (0, s.y)(g.a),
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
                J(), (0, P.f)({
                    href: new URL("/codex/cloud", I.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, V[10] = J, V[11] = d) : d = V[11];
            let eu = d;
            V[12] !== Q.account.subscription_seat_pools_enabled || V[13] !== $ || V[14] !== eu || V[15] !== el || V[16] !== et || V[17] !== ee || V[18] !== es || V[19] !== ed || V[20] !== J || V[21] !== Z || V[22] !== en || V[23] !== X || V[24] !== Y ? (u = async () => {
                if ("requesting" !== en) {
                    if (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), es && !el) {
                        let e = new URL("/admin/members", I.h);
                        e.searchParams.set("account_id", $), et && e.searchParams.set("search", et);
                        let t = e.toString(),
                            n = (0, A.c)(X, t, $),
                            a = null == n ? null : await n;
                        J(), (0, P.f)({
                            href: a ?? t,
                            initiator: "open_in_browser_bridge",
                            openTarget: null == a ? void 0 : "external-browser"
                        });
                        return
                    }
                    ea("requesting");
                    try {
                        if (el) {
                            if (Q.account.subscription_seat_pools_enabled ? await S.Request.safePost("/accounts/{account_id}/users/{user_id}/seat/update", {
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
                                }) : await S.Request.safePatch("/accounts/{account_id}/users/{user_id}", {
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
                            (0, _.e)(X), await (0, x.g)("accounts-check"), await Promise.all([X.query.invalidate(w.b, $), X.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), er.current && J()
                        } else {
                            if ((0, b.c)(X, $), await S.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: $
                                        }
                                    }
                                }), !er.current) return;
                            Z ? (J(), Z()) : eu(), X.get(E.f).success(ee.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted"
                            }))
                        }
                    } catch (e) {
                        er.current && ea(O(e) ?? "error")
                    }
                }
            }, V[12] = Q.account.subscription_seat_pools_enabled, V[13] = $, V[14] = eu, V[15] = el, V[16] = et, V[17] = ee, V[18] = es, V[19] = ed, V[20] = J, V[21] = Z, V[22] = en, V[23] = X, V[24] = Y, V[25] = u) : u = V[25];
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
            }, V[33] = eh, V[34] = R) : R = V[34], V[35] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, a.jsx)(j.e, {
                className: "heading-lg font-semibold",
                children: ep
            }), V[35] = k) : k = V[35], V[36] !== eg ? (F = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [k, (0, a.jsx)(j.d, {
                    className: "text-lg leading-6 text-secondary",
                    children: eg
                })]
            }), V[36] = eg, V[37] = F) : F = V[37];
            let em = "requesting" === en,
                ef = "requesting" === en;
            return V[38] !== ec ? (G = ec ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.updateSeatButton",
                defaultMessage: "Update seat"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access"
            }), V[38] = ec, V[39] = G) : G = V[39], V[40] !== em || V[41] !== ef || V[42] !== G ? (z = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: em,
                disabled: ef,
                children: G
            }), V[40] = em, V[41] = ef, V[42] = G, V[43] = z) : z = V[43], V[44] !== eu || V[45] !== ed || V[46] !== J || V[47] !== Z ? (B = () => {
                Z ? (J(), Z()) : (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), eu())
            }, V[44] = eu, V[45] = ed, V[46] = J, V[47] = Z, V[48] = B) : B = V[48], V[49] !== Z ? (L = Z ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex"
            }), V[49] = Z, V[50] = L) : L = V[50], V[51] !== B || V[52] !== L ? (D = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: B,
                children: L
            }), V[51] = B, V[52] = L, V[53] = D) : D = V[53], V[54] !== z || V[55] !== D ? (H = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [z, D]
            }), V[54] = z, V[55] = D, V[56] = H) : H = V[56], V[57] !== ee || V[58] !== en ? (W = null != en && "requesting" !== en ? (0, a.jsx)("p", {
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
            }) : null, V[57] = ee, V[58] = en, V[59] = W) : W = V[59], V[60] !== F || V[61] !== H || V[62] !== W ? (q = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-8 p-10 text-center",
                children: [F, H, W]
            }), V[60] = F, V[61] = H, V[62] = W, V[63] = q) : q = V[63], V[64] !== q || V[65] !== R ? (K = (0, a.jsx)(T.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: R,
                children: q
            }), V[64] = q, V[65] = R, V[66] = K) : K = V[66], V[67] !== K || V[68] !== y ? (U = (0, a.jsx)(j.a, {
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
        var F = n("pBDs");

        function G(e) {
            let t, n, o = (0, r.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, s.y)(g.a),
                p = (0, s.z)(F.a),
                m = (0, s.z)(d.v),
                f = (0, l.$)();
            if ("restricted" !== p.status) return null;
            let v = `${p.accountId}:${p.userId}`;
            return o[0] !== f || o[1] !== c || o[2] !== h || o[3] !== m.status ? (t = "allowed" === m.status ? c ?? (() => {
                (0, u.m)(h, "work"), f("/")
            }) : void 0, o[0] = f, o[1] = c, o[2] = h, o[3] = m.status, o[4] = t) : t = o[4], o[5] !== i || o[6] !== v || o[7] !== t ? (n = (0, a.jsx)(z, {
                modeToggle: i,
                onSwitchToWork: t
            }, v), o[5] = i, o[6] = v, o[7] = t, o[8] = n) : n = o[8], n
        }

        function z(e) {
            let t, n, l, c, d, u = (0, r.c)(13),
                {
                    modeToggle: g,
                    onSwitchToWork: m
                } = e,
                f = (0, s.z)(F.a),
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
            s = n("Q840"),
            o = n("mYNH"),
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
    vefx: (function(e, t, n) {
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
            w = n("Sm6l"),
            C = n("JNtf"),
            S = n("mUDD"),
            _ = n("ZtSy"),
            I = n("HOLv"),
            j = n("mEbU"),
            T = n("RU3e"),
            P = n("UIU6"),
            E = n("Bbed"),
            A = n("T1PX");
        let M = (0, E.a)(async () => {
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
                return (0, a.jsx)(N, {})
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
            errorFallback: (0, a.jsx)(N, {})
        });

        function R(e) {
            let t, n = (0, r.c)(2),
                s = (0, A.a)();
            return n[0] !== s ? (t = (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden",
                children: s ? (0, a.jsx)(N, {}) : (0, a.jsx)(k, {})
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function k(e) {
            let t, n, o, i = (0, r.c)(7),
                l = (0, v.useRef)(null),
                c = (0, j.a)(l),
                d = (0, s.z)(T.b),
                [u, h] = (0, v.useState)(!1);
            if (u) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(N, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(N, {}), i[1] = t) : t = i[1], i[2] !== c || i[3] !== d ? (n = c && !0 === d ? (0, a.jsx)(M, {
                onError: () => h(!0)
            }) : null, i[2] = c, i[3] = d, i[4] = n) : n = i[4], i[5] !== n ? (o = (0, a.jsx)(P.a, {
                name: "BusinessAgentDisclosureHero",
                fallback: t,
                children: (0, a.jsx)("div", {
                    ref: l,
                    className: "absolute inset-0",
                    children: n
                })
            }), i[5] = n, i[6] = o) : o = i[6], o
        }

        function N(e) {
            let t, n = (0, r.c)(1);
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("img", {
                className: "absolute inset-0 size-full object-cover",
                alt: "",
                draggable: !1,
                referrerPolicy: "no-referrer",
                src: "https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-static-ade5a622504d70d9.png"
            }), n[0] = t) : t = n[0], t
        }
        var O = {
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
            F = {
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

        function G(e) {
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

        function z(e) {
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
                        children: c.map(e => (0, a.jsx)(w.a, {
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

        function B(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g, m, f, b, x, j, T = (0, r.c)(29),
                {
                    context: P,
                    onPresented: E,
                    onContinue: A,
                    onDismiss: M
                } = e,
                [k, N] = (0, v.useState)(!0 === P.showDisclosureModal);
            T[0] !== P.privacyPolicyUrl ? (t = function(e) {
                if (null == e) return null;
                try {
                    let t = new URL(e);
                    return ("https:" === t.protocol || "http:" === t.protocol) && t.hostname ? t.href : null
                } catch {
                    return null
                }
            }(P.privacyPolicyUrl), T[0] = P.privacyPolicyUrl, T[1] = t) : t = T[1];
            let G = t;
            return T[2] !== M ? (n = e => {
                N(e), e || M?.()
            }, T[2] = M, T[3] = n) : n = T[3], T[4] !== E ? (s = {
                "data-theme": "light",
                onOpenAutoFocus: E
            }, T[4] = E, T[5] = s) : s = T[5], T[6] !== A ? (o = e => {
                e.preventDefault(), N(!1), A?.()
            }, T[6] = A, T[7] = o) : o = T[7], T[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(R, {}), T[8] = i) : i = T[8], T[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(C.e, {
                className: "heading-lg text-center leading-7 font-semibold",
                children: (0, a.jsx)(y.a, {
                    id: "chatgptConversations.businessAgent.disclosureTitle",
                    defaultMessage: "About chatting with businesses"
                })
            }), T[9] = l) : l = T[9], T[10] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(I.a, {
                className: "shrink-0",
                asset: O
            }), T[10] = c) : c = T[10], T[11] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(y.a, {
                    id: "chatgptConversations.businessAgent.disclosureQuestionsTitle",
                    defaultMessage: "Ask questions and compare options"
                })
            }), T[11] = d) : d = T[11], T[12] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsxs)("div", {
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
            }), T[12] = u) : u = T[12], T[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(I.a, {
                className: "shrink-0",
                asset: F
            }), T[13] = h) : h = T[13], T[14] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(y.a, {
                    id: "chatgptConversations.businessAgent.disclosureUsageTrendsTitle",
                    defaultMessage: "Your chats remain private"
                })
            }), T[14] = p) : p = T[14], T[15] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [l, (0, a.jsx)(C.d, {
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
            }), T[15] = g) : g = T[15], T[16] !== G ? (m = null == G ? null : (0, a.jsx)(_.a, {
                href: G,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(y.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy"
                })
            }), T[16] = G, T[17] = m) : m = T[17], T[18] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, a.jsx)("div", {
                className: "flex justify-center",
                children: (0, a.jsx)(w.a, {
                    color: "primary",
                    size: "dialogAction",
                    type: "submit",
                    children: (0, a.jsx)(y.a, {
                        id: "chatgptConversations.businessAgent.disclosureStartChat",
                        defaultMessage: "Start chatting"
                    })
                })
            }), T[18] = f) : f = T[18], T[19] !== m ? (b = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [g, m, f]
                })]
            }), T[19] = m, T[20] = b) : b = T[20], T[21] !== b || T[22] !== o ? (x = (0, a.jsx)(S.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: o,
                children: b
            }), T[21] = b, T[22] = o, T[23] = x) : x = T[23], T[24] !== k || T[25] !== x || T[26] !== n || T[27] !== s ? (j = (0, a.jsx)(C.a, {
                open: k,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: s,
                children: x
            }), T[24] = k, T[25] = x, T[26] = n, T[27] = s, T[28] = j) : j = T[28], j
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
            if (null == a || s?.destination?.kind !== "agent" || "string" != typeof s.shareSessionId || "string" != typeof c || 0 === c.length || (0, d.d)(n, c) !== (0, d.d)(n, e) || !n(D.b) && !1 !== s.showInfoPanel && n(D.a) !== s.shareSessionId || !n(m.b) || n(o.f) !== s.accountId || n(o.k) !== s.userId) return null;
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
            o[0] !== c ? (t = (0, a.jsx)(G, {
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
            return null == v ? p : (i[7] !== p || i[8] !== g || i[9] !== v ? (t = "ready" !== v.status || v.context.showConversationStarters ? (0, a.jsx)(z, {
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
            } : l, i[0] = p, i[1] = l, i[2] = h, i[3] = t) : t = i[3], i[4] !== p || i[5] !== d || i[6] !== u ? (n = p ? () => (0, g.a)(u, d) : void 0, i[4] = p, i[5] = d, i[6] = u, i[7] = n) : n = i[7], i[8] !== t || i[9] !== n ? (o = (0, a.jsx)(B, {
                context: t,
                onPresented: n
            }), i[8] = t, i[9] = n, i[10] = o) : o = i[10], o) : null
        }
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
            u = n("zzDS");
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, p, g, m, f = (0, r.c)(16),
                    {
                        children: v,
                        opensDialog: y,
                        shareSessionId: b
                    } = e,
                    x = (0, s.y)(c.a),
                    w = (0, i.a)(),
                    C = (0, s.z)(d.c),
                    S = (0, s.z)(null == y ? d.b : null),
                    _ = (0, o.useRef)(null);
                f[0] !== C || f[1] !== x || f[2] !== b ? (t = () => {
                    if (C !== b) return;
                    let e = requestAnimationFrame(() => {
                        let e = _.current;
                        e?.getClientRects().length && null == e.closest('[inert], [aria-hidden="true"]') && x.get(d.c) === b && (e.focus({
                            preventScroll: !0
                        }), e.ownerDocument.activeElement === e && x.set(d.c, null))
                    });
                    return () => cancelAnimationFrame(e)
                }, n = [C, x, b], f[0] = C, f[1] = x, f[2] = b, f[3] = t, f[4] = n) : (t = f[3], n = f[4]), (0, o.useEffect)(t, n);
                let I = y ?? S ? "dialog" : void 0;
                return f[5] !== w ? (h = w.formatMessage({
                    id: "businessProfiles.shareReceiver.viewBusinessInfo",
                    defaultMessage: "View business information"
                }), f[5] = w, f[6] = h) : h = f[6], f[7] !== x || f[8] !== b ? (p = () => (0, d.g)(x, b), f[7] = x, f[8] = b, f[9] = p) : p = f[9], f[10] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsx)(l.a, {
                    asset: u.a,
                    className: "size-4 shrink-0 text-secondary"
                }), f[10] = g) : g = f[10], f[11] !== v || f[12] !== I || f[13] !== h || f[14] !== p ? (m = (0, a.jsxs)("button", {
                    ref: _,
                    "aria-haspopup": I,
                    "aria-label": h,
                    className: "hover:bg-surface-hover inline-flex min-h-11 max-w-full min-w-0 items-center gap-1.5 rounded-lg px-1 text-start focus-visible:outline-2 focus-visible:-outline-offset-2",
                    onClick: p,
                    type: "button",
                    children: [v, g]
                }), f[11] = v, f[12] = I, f[13] = h, f[14] = p, f[15] = m) : m = f[15], m
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
            w = n("yGJW"),
            C = n("OWtl"),
            S = n("tSEg"),
            _ = n("OMIV"),
            I = n("dk3M"),
            j = n("WFY2"),
            T = n("PFzG"),
            P = n("vldH"),
            E = n("ISgP"),
            A = n("t2JB"),
            M = n("DIH2"),
            R = n("aFoA"),
            k = n("H8lk"),
            N = n("dQRk"),
            O = n("rxj0"),
            F = n("f2PP"),
            G = n("S95W");
        let z = (0, r.u)(C.a, !0),
            B = (0, r.v)(C.a, e => null);
        n.d(t, {}, {
            a: z,
            b: function(e, t) {
                let n = e.get(R.a, t) ?? t,
                    r = e.get(T.b, t),
                    C = e.get(B, n),
                    L = null;
                null != r && C?.attemptId === r && (L = C);
                let D = {
                        attemptId: r,
                        observedTurn: L?.observedTurn ?? !1,
                        activeRequestId: L?.activeRequestId ?? null,
                        dismissed: L?.dismissed ?? !1,
                        initialCreationMessageIds: L?.initialCreationMessageIds ?? new Set,
                        openedCreatedPage: L?.openedCreatedPage ?? !1
                    },
                    H = e.get(l.h),
                    W = D.observedTurn,
                    q = null;

                function K(t) {
                    for (let n of t.toReversed())
                        if (!D.initialCreationMessageIds.has(n.messageId) && (0, y.openSpacePageSidePanelTab)(e, n.pageId, {
                                title: n.title,
                                openSource: "turn_auto_open"
                            }).opened) {
                            D.openedCreatedPage = !0;
                            break
                        }
                }
                let U = e.watch(e => {
                        let {
                            get: n
                        } = e;
                        if (n(S.j) || null != n(N._, t)) return;
                        let a = n(N.R, t);
                        if (!a?.length) return;
                        let r = n(f.e),
                            s = n(N.j, t),
                            o = n(N.y, t);
                        if (null != r && null != s && (null == o || "tpp" === o))
                            for (let e of a)(0, x.h)(r, e.pageId, s, o ?? null, "created")
                    }),
                    V = e.watch(n => {
                        let {
                            get: r
                        } = n, f = r(N.ab, t), x = r(l.h), C = r(N.cb, t);
                        if ((0, N.Bb)(f)) {
                            W = !1;
                            let e = r(T.b, t),
                                n = r(N.db, t),
                                a = !D.observedTurn || D.attemptId !== e;
                            if (D.attemptId = e, a) {
                                let e = q;
                                q = null, e?.abort(), D.observedTurn = !0, D.activeRequestId = n, D.dismissed = C, D.openedCreatedPage = !1
                            } else D.activeRequestId = n ?? D.activeRequestId, D.dismissed = D.dismissed || C || H && !x;
                            H = x;
                            let s = !C && !D.dismissed && !x && !D.openedCreatedPage && !r(S.j) && !r(N.D, t) && !r(O.e, t),
                                o = [];
                            if ((a || s) && (o = r(N.R, t) ?? []), a) {
                                D.initialCreationMessageIds = new Set(o.map(e => e.messageId));
                                return
                            }
                            s && K(o);
                            return
                        }
                        if (!D.observedTurn) return;
                        let R = r(N.w, t);
                        if ("idle" !== f || C || null != R && "completed" !== R.result || null != e.get(N.D, t) || e.get(S.j) || e.get(O.e, t)) {
                            D.observedTurn = !1;
                            return
                        }
                        if (W) {
                            if (D.dismissed || x || D.openedCreatedPage || r(T.b, t) !== D.attemptId) {
                                D.observedTurn = !1;
                                return
                            }
                            if (R?.result !== "completed") return;
                            K(r(N.R, t) ?? []), D.observedTurn = !D.openedCreatedPage;
                            return
                        }
                        if (D.observedTurn = !1, R?.result !== "completed" || R.requestId !== D.activeRequestId) return;
                        let B = e.get(N.N, t);
                        if (null == B) return;
                        let L = (0, s.b)({
                                mapping: B,
                                current_node: e.get(N.C, t)
                            }),
                            U = L.findLast(G.b);
                        if (U?.status !== "finished_successfully") return;
                        let V = [...(0, k.e)(L).outputs, ...L.flatMap(e => (0, k.c)(e).map(e => e.file))],
                            Q = e.get(E.b, t)?.at(-1);
                        if (Q?.turn.status !== "complete") return;
                        let $ = [...(0, d.b)(L), ...Q.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, c.a)(e, $, !D.dismissed) || !D.dismissed && !D.openedCreatedPage && (0, b.a)(e, $)) && !D.dismissed && !x && !D.openedCreatedPage) {
                            for (let t of (0, v.c)((0, s.e)(U)).toReversed())
                                if ((0, y.openSpacePageSidePanelTab)(e, t.id, {
                                        openSource: "turn_auto_open",
                                        blockId: t.blockId
                                    }).opened) return;
                            if (r(z) && (0, F.canOpenChatGptFilePreview)({
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
                                                y = (0, P.b)(s, {
                                                    fileName: c,
                                                    messageId: v
                                                });
                                            if (null == y) continue;
                                            if (e.get(_.g)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let b = e.get(N.j, t) ?? t,
                                                x = `${v??"message"}:${String(r)}:${c}`,
                                                C = `chatgpt-file:${b}:${x}`,
                                                S = {
                                                    turnId: Q.id,
                                                    inputMessageId: L.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: v ?? null
                                                },
                                                T = new AbortController,
                                                E = (0, F.openChatGptFile)(e, {
                                                    conversationId: b,
                                                    fileName: c,
                                                    gizmoId: e.get(N.T, t),
                                                    sharedConversationId: e.get(N._, t),
                                                    target: y,
                                                    tabKey: x,
                                                    browserPreview: !0,
                                                    isAccessBlocked: e => e.get(O.e, t),
                                                    downloadFallback: !1,
                                                    openSource: "auto_open",
                                                    originatingTurn: S,
                                                    signal: T.signal,
                                                    onOpened: () => {
                                                        let t = e.get(i.l.activeTab$);
                                                        T.signal.aborted || t?.tabId !== C || t.tabType.kind !== h.a || ((0, w.a)(e, a.CodexFileOpened, {
                                                            threadId: b,
                                                            turnId: S.turnId,
                                                            inputMessageId: S.inputMessageId ?? void 0,
                                                            messageId: S.messageId ?? void 0,
                                                            fileExtension: (0, p.c)(c) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, w.a)(e, a.CodexWorkspaceFilePreviewAttempted, (0, m.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: S,
                                                            path: c,
                                                            threadId: b,
                                                            windowType: "browser"
                                                        })), (0, I.b)(e, C, "auto_open"))
                                                    },
                                                    onClose: () => T.abort()
                                                });
                                            q = T;
                                            let R = e.watch(e => {
                                                let {
                                                    get: n
                                                } = e;
                                                (n(l.h) && n(i.l.activeTab$)?.tabId !== C || n(O.e, t)) && T.abort()
                                            });
                                            E.catch(e => {
                                                T.signal.aborted || j.a.debug("Automatic ChatGPT artifact preview could not open", {
                                                    safe: {},
                                                    sensitive: {
                                                        error: e
                                                    }
                                                })
                                            }).finally(() => {
                                                R(), q === T && (q = null)
                                            });
                                            return
                                        }
                            }
                        }
                    });
                return () => {
                    U(), V(), q?.abort(), null != D.attemptId && e.set(B, n, {
                        ...D,
                        attemptId: D.attemptId
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
                    conversationId: w,
                    error: C,
                    loadError: S,
                    canRetry: _,
                    isWorkConversation: I,
                    showChatFallback: j,
                    onInlineLoadError: T,
                    children: P
                } = e,
                E = (0, s.y)(u.a),
                A = (0, s.z)(void 0 !== j && j && !1 === I ? p.b : null);
            if (null != A) return A;
            x[0] !== w || x[1] !== I || x[2] !== E ? (t = (e, t) => {
                (0, f.e)(E.get(g.c).logProductEvent, {
                    conversationId: w,
                    error: e,
                    isWorkConversation: I,
                    canRetry: t
                })
            }, x[0] = w, x[1] = I, x[2] = E, x[3] = t) : t = x[3];
            let M = t;
            x[4] !== _ || x[5] !== S || x[6] !== M ? (n = () => M(S, _), x[4] = _, x[5] = S, x[6] = M, x[7] = n) : n = x[7], x[8] !== S || x[9] !== T || x[10] !== n ? (o = (0, a.jsx)(b, {
                error: S,
                onInlineLoadError: T,
                onShown: n
            }), x[8] = S, x[9] = T, x[10] = n, x[11] = o) : o = x[11], x[12] !== P || x[13] !== o ? (l = (0, a.jsxs)(a.Fragment, {
                children: [o, P]
            }), x[12] = P, x[13] = o, x[14] = l) : l = x[14];
            let R = l;
            return x[15] !== C ? (c = C instanceof m.FetchError && !(0, m.e)(C) && (403 === C.status || 404 === C.status), x[15] = C, x[16] = c) : c = x[16], x[17] !== C || x[18] !== M ? (d = () => M(C, !1), x[17] = C, x[18] = M, x[19] = d) : d = x[19], x[20] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
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
    wW22: (function(e, t, n) {
        n.d(t, {
            a: () => is,
            ChatGptConversationPage: () => ir
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
            w = n("StMt"),
            C = n("E8Sp"),
            S = n("z0li"),
            _ = n("SaNw"),
            I = n("O0M0"),
            j = n("Cslg"),
            T = n("OFP1"),
            P = n("ItIk"),
            E = (n("AZW7"), n("uxPT")),
            A = n("GMTh"),
            M = n("zpMv"),
            R = n("PFzG"),
            k = n("YiPf"),
            N = n("DrWu"),
            O = n("x4uR"),
            F = n("hx97");

        function G(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var z = n("MrzV"),
            B = n("YTsa"),
            L = n("TSib"),
            D = n("jEN2"),
            H = n("kphc"),
            W = n("YWcr"),
            q = n("mwa5"),
            K = n("UxN3"),
            U = n("SGsN"),
            V = n("XcNx"),
            Q = n("GKsW"),
            $ = n("yWTM"),
            Y = n("SkIz"),
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
            ew = n("OtLV"),
            eC = n("sfmI"),
            eS = n("QmkR"),
            e_ = n("Yrvy"),
            eI = n("HOLv"),
            ej = n("nlNF"),
            eT = n("OWtl"),
            eP = n("MRlq"),
            eE = n("vNLk"),
            eA = n("PCxL"),
            eM = n("aZgH"),
            eR = n("CiSx");

        function ek(e) {
            let t, n, s, o, i, l, c, u, h, p, g, y, b, x, w = (0, r.c)(56),
                {
                    conversationId: C,
                    kind: S
                } = e,
                _ = (0, d.y)(eT.a),
                I = (0, f.a)(),
                T = (0, v.Y)(),
                P = (0, v.$)(),
                E = (0, d.z)(eA.l),
                A = (0, d.z)(j.h),
                M = (0, d.z)(j.g);
            w[0] !== A || w[1] !== C || w[2] !== M || w[3] !== S || w[4] !== E ? (t = "chatgpt" === S && E?.kind === "chatgpt" && E.conversation.id === C && (0, eC.a)(E.conversation, A, M) ? E.conversation : null, w[0] = A, w[1] = C, w[2] = M, w[3] = S, w[4] = E, w[5] = t) : t = w[5];
            let R = t,
                [k, N] = (0, m.useState)(!1),
                {
                    mutate: O,
                    isPending: F
                } = (0, e_.a)(C);
            w[6] !== T.hash || w[7] !== T.pathname || w[8] !== T.search || w[9] !== P || w[10] !== _ ? (n = () => {
                (0, eA.e)(_), P({
                    pathname: T.pathname,
                    search: T.search,
                    hash: T.hash
                }, {
                    replace: !0,
                    state: null
                })
            }, w[6] = T.hash, w[7] = T.pathname, w[8] = T.search, w[9] = P, w[10] = _, w[11] = n) : n = w[11];
            let G = n,
                z = (0, d.z)(eA.k);
            w[12] !== C || w[13] !== z ? (s = z?.find(e => (0, eM.b)(e.task) === `hosted:${C}`), w[12] = C, w[13] = z, w[14] = s) : s = w[14];
            let B = s;
            w[15] !== C || w[16] !== _ ? (o = () => {
                let e = _.get(eA.l);
                return null != e && (0, eM.b)(e) === `hosted:${C}` ? (0, eA.d)(_, e) : void 0
            }, i = async () => {
                await (0, eS.W)({
                    scope: _,
                    conversationId: C
                })
            }, w[15] = C, w[16] = _, w[17] = o, w[18] = i) : (o = w[17], i = w[18]), w[19] !== C || w[20] !== G || w[21] !== S || w[22] !== _ ? (l = (e, t, n) => {
                n?.("restored");
                let r = _.get(U.f).info((0, a.jsx)(eb.a, {
                    ...eP.a.unarchiveSuccessPlain
                }), {
                    leading: (0, a.jsx)(eI.a, {
                        "aria-hidden": !1,
                        asset: eR.a
                    }),
                    primaryAction: {
                        label: (0, a.jsx)(eb.a, {
                            ...eP.a.viewNow
                        }),
                        onClick: () => {
                            r.close(), G()
                        }
                    },
                    id: `unarchive-thread-${S}:${C}`
                })
            }, w[19] = C, w[20] = G, w[21] = S, w[22] = _, w[23] = l) : l = w[23], w[24] !== I || w[25] !== _ ? (c = (e, t, n) => {
                n?.(null), _.get(U.f).danger(I.formatMessage(eP.a.unarchiveError), {
                    errorAnalytics: {
                        toastId: "previewFooter.onError.unarchiveError"
                    }
                })
            }, w[24] = I, w[25] = _, w[26] = c) : c = w[26], w[27] !== o || w[28] !== i || w[29] !== l || w[30] !== c ? (u = {
                onMutate: o,
                mutationFn: i,
                onSuccess: l,
                onError: c
            }, w[27] = o, w[28] = i, w[29] = l, w[30] = c, w[31] = u) : u = w[31];
            let {
                mutate: L,
                isPending: D,
                isSuccess: H
            } = (0, ey.a)(u);
            w[32] !== O || w[33] !== P || w[34] !== _ ? (h = e => {
                let t = _.get(eA.c),
                    n = _.get(ej.c),
                    a = _.get(j.f);
                O(e, {
                    onSuccess: () => {
                        if (N(!1), t !== _.get(eA.c) || n !== _.get(ej.c) || a !== _.get(j.f)) return;
                        _.set(eA.l, null);
                        let e = t?.pathname === eA.a ? t : null;
                        P(e ?? "/", {
                            replace: !0,
                            state: e?.state ?? null
                        })
                    }
                })
            }, w[32] = O, w[33] = P, w[34] = _, w[35] = h) : h = w[35];
            let W = h;
            w[36] !== R ? (p = null == R ? void 0 : () => N(!0), w[36] = R, w[37] = p) : p = w[37];
            let q = H || B?.status === "restored",
                K = D || B?.status === "restoring";
            return w[38] !== L ? (g = () => L(), w[38] = L, w[39] = g) : g = w[39], w[40] !== G || w[41] !== F || w[42] !== p || w[43] !== q || w[44] !== K || w[45] !== g ? (y = (0, a.jsx)(eE.a, {
                deleting: F,
                onDelete: p,
                restored: q,
                restoring: K,
                onUnarchive: g,
                onDone: G
            }), w[40] = G, w[41] = F, w[42] = p, w[43] = q, w[44] = K, w[45] = g, w[46] = y) : y = w[46], w[47] !== R || w[48] !== W || w[49] !== I || w[50] !== k || w[51] !== F ? (b = null != R && (0, a.jsx)(ex.a, {
                allowArtifactDeletion: !0,
                title: R.title?.trim() || I.formatMessage(ew.a.newChat),
                open: k,
                isDeleting: F,
                onOpenChange: N,
                onConfirm: W
            }), w[47] = R, w[48] = W, w[49] = I, w[50] = k, w[51] = F, w[52] = b) : b = w[52], w[53] !== y || w[54] !== b ? (x = (0, a.jsxs)(a.Fragment, {
                children: [y, b]
            }), w[53] = y, w[54] = b, w[55] = x) : x = w[55], x
        }
        var eN = n("hZax"),
            eO = n("OMIV"),
            eF = n("JCJj"),
            eG = n("KkZX"),
            ez = n("BdYu"),
            eB = n("Nyub"),
            eL = n("rvFo"),
            eD = n("jZDY"),
            eH = n("Bc5r"),
            eW = n("bIvi"),
            eq = n("Elta"),
            eK = n("eW0T"),
            eU = n("hOYb"),
            eV = n("eShZ"),
            eQ = n("qqut"),
            e$ = n("CsbC"),
            eY = n("tCyZ"),
            eJ = n("vefx"),
            eZ = n("GgLN"),
            eX = n("KdfG"),
            e0 = n("AOHi"),
            e1 = n("sbTf"),
            e2 = n("BJ43"),
            e3 = n("d2rV"),
            e4 = n("aLqR"),
            e5 = n("VlIB"),
            e6 = n("Ow2S"),
            e7 = n("G6Ip");
        let e8 = (0, d.v)(eT.a, e => null);
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
                    isReady: w,
                    isRestricted: C,
                    isStreaming: S
                } = e,
                _ = void 0 === b ? null : b,
                I = (0, d.y)(eT.a),
                T = (0, f.a)(),
                P = (0, d.z)(j.e),
                E = (0, d.z)(null == _ ? null : tg.a),
                A = (0, d.x)(tp.j, y),
                {
                    data: M
                } = (0, d.x)(tn.chatGptConversationQueryById$, null == _ ? null : A),
                R = (0, d.x)(th.a, null == _ ? null : A),
                k = (0, d.x)(tp.B, R);
            v[0] !== R || v[1] !== M || v[2] !== k || v[3] !== _ || v[4] !== A ? (t = null == M && null != R && null != A ? {
                id: A,
                gizmo_id: _,
                is_temporary_chat: k
            } : void 0, v[0] = R, v[1] = M, v[2] = k, v[3] = _, v[4] = A, v[5] = t) : t = v[5];
            let N = t,
                {
                    data: F
                } = (0, d.x)(O.b, _),
                G = null == _ ? null : (0, tg.b)(E ?? null, x ?? M ?? N, F),
                z = (0, d.x)(tu.b, y);
            v[6] !== T ? (n = T.formatMessage(ew.a.headerShare), v[6] = T, v[7] = n) : n = v[7];
            let B = n,
                L = (0, d.x)(null == x ? tu.a : null, y),
                D = null != x || null != L,
                H = null;
            if (C || G?.type === "unavailable") {
                let e;
                v[8] !== T ? (e = T.formatMessage(ew.a.shareDisabledRestricted), v[8] = T, v[9] = e) : e = v[9], H = e
            } else if (S && !D) {
                let e;
                v[10] !== T ? (e = T.formatMessage(ew.a.shareDisabledStreaming), v[10] = T, v[11] = e) : e = v[11], H = e
            } else if (!w || !D) {
                let e;
                v[12] !== T ? (e = T.formatMessage(ew.a.shareDisabledNotReady), v[12] = T, v[13] = e) : e = v[13], H = e
            }
            let W = null != H || z;
            v[14] !== W ? (s = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: W
            }, v[14] = W, v[15] = s) : s = v[15];
            let q = (0, d.x)(td.b, s),
                K = "loaded" === P.status && "personal" === P.structure && (null == G || "snapshot" === G.type),
                U = null != H || z;
            v[16] !== U ? (o = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: U
            }, v[16] = U, v[17] = o) : o = v[17];
            let V = (0, d.x)(K ? td.b : null, o),
                Q = !(0, to.d)() && !(0, to.b)(),
                $ = null != H || z;
            v[18] !== $ ? (i = {
                layer: "2296435893",
                parameter: "show_share_text",
                disableExposureLog: $
            }, v[18] = $, v[19] = i) : i = v[19];
            let Y = (0, d.x)(Q ? td.b : null, i);
            v[20] !== y || v[21] !== N || v[22] !== _ || v[23] !== I || v[24] !== x ? (l = () => {
                let e = null == x ? I.get(tu.c, y) : {
                    serverConversationId: x.conversation_id,
                    title: x.title,
                    currentNodeId: x.current_node ?? void 0
                };
                null != e && (0, tm.shareChatGptProjectConversation)(I, e.serverConversationId, e.title ?? "", _, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", x ?? N)
            }, v[20] = y, v[21] = N, v[22] = _, v[23] = I, v[24] = x, v[25] = l) : l = v[25];
            let J = l,
                Z = B;
            if (!V && "loaded" === P.status && (null == G || "snapshot" === G.type)) {
                let e;
                v[26] !== P.structure || v[27] !== T ? (e = T.formatMessage("workspace" === P.structure ? ew.a.shareWorkspaceTooltip : ew.a.sharePublicTooltip), v[26] = P.structure, v[27] = T, v[28] = e) : e = v[28], Z = e
            }
            let X = H ?? Z,
                ee = null != H || void 0,
                et = !Y,
                en = null == H ? J : void 0;
            return v[29] !== z || v[30] !== q ? (c = !z && (q ? (0, a.jsx)(tl.M, {}) : (0, a.jsx)(tl.L, {})), v[29] = z, v[30] = q, v[31] = c) : c = v[31], v[32] !== Y ? (u = Y && (0, a.jsx)("span", {
                className: "max-sm:hidden @max-2xl/main-titlebar:hidden",
                children: (0, a.jsx)(eb.a, {
                    ...ew.a.headerShare
                })
            }), v[32] = Y, v[33] = u) : u = v[33], v[34] !== z || v[35] !== B || v[36] !== ee || v[37] !== et || v[38] !== en || v[39] !== c || v[40] !== u ? (h = (0, a.jsxs)(ti.a, {
                "aria-disabled": ee,
                "aria-label": B,
                color: "ghostActive",
                loading: z,
                className: "browser:[&_[data-loading-indicator]>svg]:size-6",
                radius: "large",
                size: "toolbar",
                uniform: et,
                onClick: en,
                children: [c, u]
            }), v[34] = z, v[35] = B, v[36] = ee, v[37] = et, v[38] = en, v[39] = c, v[40] = u, v[41] = h) : h = v[41], v[42] !== X || v[43] !== h ? (p = (0, a.jsx)(ts.a, {
                content: X,
                children: h
            }), v[42] = X, v[43] = h, v[44] = p) : p = v[44], v[45] !== y || v[46] !== z || v[47] !== _ || v[48] !== H || v[49] !== x ? (g = !1, v[45] = y, v[46] = z, v[47] = _, v[48] = H, v[49] = x, v[50] = g) : g = v[50], v[51] !== p || v[52] !== g ? (m = (0, a.jsxs)(a.Fragment, {
                children: [p, g]
            }), v[51] = p, v[52] = g, v[53] = m) : m = v[53], m
        }(0, tc.a)(async () => () => null);
        var tv = n("TRQ3"),
            ty = n("SZCv"),
            tb = n.n(ty),
            tx = n("XAP6"),
            tw = n("bzoy"),
            tC = n("LYS1"),
            tS = n("aZoZ"),
            t_ = n("Gv8v"),
            tI = n("EGpF"),
            tj = n("mTPq"),
            tT = n("Vcrm"),
            tP = n("DF0c");
        let tE = (0, d.d)(eT.a, (e, t) => {
            let {
                get: n
            } = t, a = n(tp.ab, e);
            if (!(0, tp.Bb)(a)) return !0;
            let r = n(tp.N, e),
                s = n(tp.C, e);
            if (null == r || null == s) return !1;
            let o = r[s]?.message;
            if (null == o || tC.a.has(o.author.role)) return !1;
            let i = n(tp.y, e),
                l = (0, tj.c)({
                    mapping: r,
                    current_node: s
                }, n(tp.S, e)),
                c = n(tp.db, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(tp.j, e) && !(0, tw.e)(n(tp.p, e)) && null != c && !n(tx.e).has(c) && null != tA(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function tA(e, t) {
            let n = e(tI.a, t),
                a = e(tp.j, t);
            return null == n.request.current && null != a ? e(tI.a, a) : n
        }
        var tM = n("xtkq"),
            tR = n("ZhoB"),
            tk = n("PG5R"),
            tN = n("zrki"),
            tO = n("iLYI"),
            tF = n("u4MG"),
            tG = n("wVX4"),
            tz = n("OOaz"),
            tB = n("H8lk"),
            tL = n("gbrq"),
            tD = n("n5iL"),
            tH = n("EFj1"),
            tW = n("iS3k"),
            tq = n("pDUk"),
            tK = n("GaCK"),
            tU = n("Dofq"),
            tV = n("VnEZ"),
            tQ = n("b7aP");

        function t$(e) {
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

        function tY(e) {
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
            p[6] !== t?.isOpen || p[7] !== s ? (i = t?.isOpen === !1 ? null : (0, a.jsx)(t$, {
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
                p = (0, d.z)(null == l ? tL.N : null);
            o[0] !== l?.isOpen || o[1] !== p ? (t = l?.isOpen ?? (0, tL.z)(p, !0), o[0] = l?.isOpen, o[1] = p, o[2] = t) : t = o[2];
            let g = t,
                v = (0, d.z)(tK.b),
                y = l?.isOpen ?? v.isPopoverOpen,
                b = (0, d.x)(tD.f, "togglePinnedSummary");
            (0, ez.b)(c), o[3] !== l || o[4] !== c ? (n = () => {
                null != l ? l.onOpenChange(!l.isOpen) : (0, tU.b)(c)
            }, o[3] = l, o[4] = c, o[5] = n) : n = o[5];
            let x = n;
            return (0, tH.a)("togglePinnedSummary", x), o[6] !== i || o[7] !== u || o[8] !== l || o[9] !== h || o[10] !== g || o[11] !== y || o[12] !== v.displayMode || o[13] !== c || o[14] !== b || o[15] !== x ? (s = (0, a.jsx)(_.a.HeaderAction, {
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
                l = (0, eN.f)("3901104270");
            return s[0] !== o || s[1] !== l || s[2] !== i ? (t = l && null != i ? (0, a.jsx)(t5, {
                conversationId: o,
                automationId: i
            }) : null, s[0] = o, s[1] = l, s[2] = i, s[3] = t) : t = s[3], s[4] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), s[4] = t, s[5] = n) : n = s[5], n
        }
        var t7 = n("Bs4i"),
            t8 = n("Qgfj"),
            t9 = n("rmk3"),
            ne = n("sqqv"),
            nt = n("fQbA"),
            nn = n("dDDU"),
            na = n("soaw"),
            nr = n("ZrYB"),
            ns = n("X6Vn"),
            no = n("Kwur"),
            ni = n("eKlv"),
            nl = n("NApj"),
            nc = n("g2p6"),
            nd = n("oaTv"),
            nu = n("PME0"),
            nh = n("lgcP"),
            np = n("reLr"),
            ng = n("b6fw"),
            nm = n("Yjxz"),
            nf = n("svjy");

        function nv(e, t) {
            if (!(0, eO.b)(e, "2274846837") || (0, tz.e)(t)) return null;
            let n = e.get(np.b),
                a = e.get(ng.h, t);
            return null != n && null != a && (0, nm.a)(a.view.definition.type) ? {
                identity: n,
                state: a
            } : null
        }
        var ny = n("AcSY"),
            nb = n("w7E5"),
            nx = n("xEXG"),
            nw = n("J6LI"),
            nC = n("lUUH"),
            nS = n("ftAl");

        function n_(e) {
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
                m = (0, d.y)(eT.a),
                {
                    data: f
                } = (0, ny.f)(),
                v = (0, nx.b)();
            return o[0] !== f || o[1] !== l || o[2] !== c || o[3] !== u || o[4] !== h || o[5] !== v || o[6] !== m ? (t = () => {
                let e = m.get(nS.a, l, {
                        enabled: !1
                    }),
                    t = (0, tF.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : m.query.getData(O.b, t);
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
                    } = e, c = (0, tF.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(nb.a), u = t.get(eS.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, g = a?.conversation_origin === "tpp" || a?.conversation_origin === "flora", m = "allowed" === o || g && h?.pages.some(e => null != e.cursor) === !0, f = t.get(eS.h, n);
                    return null == s || null == a || t.get(eS.g, n) || (0, nw.c)(a, r).sourceUnavailable || null == (0, nw.b)(t, a, f, !1) || null != c && null == r || null == h || 0 === p && !m ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: nP.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, nC.b)({
                        scope: t,
                        conversation: a,
                        project: r,
                        showDestinationFetchState: !1,
                        showMoveToProject: null == c || p > 1 || m,
                        projectCrudStatus: o,
                        surface: "title-menu",
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
                    null == e.data && e.isFetching && await m.query.getOrFetch(tn.chatGptConversationQueryById$, l).catch(nT), null == m.query.getData(tn.chatGptConversationQueryById$, l) && await m.query.getOrFetch(eS.j, [l]).catch(nj)
                })(), p?.()]);
                let e = m.get(nS.a, l, {
                    enabled: !1
                });
                (0, tF.a)(e?.gizmo_id) && e?.gizmo_id != null && await m.query.getOrFetch(O.b, e.gizmo_id).catch(nI)
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

        function nI() {}

        function nj() {}

        function nT() {}
        let nP = (0, t8.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}"
            }
        });

        function nE(e) {
            let t, s, o, i, l, c, u, h, p, g, y, b, x, S, _, I, T, P = (0, r.c)(68),
                {
                    onTitleClick: E,
                    showMenu: A,
                    triggerButton: M,
                    renderDropdown: R,
                    conversationOrigin: k,
                    conversationId: N,
                    title: O,
                    isHandoffPending: F,
                    isArchived: G,
                    isChatConversation: z,
                    onHandoff: B,
                    onOpenMessage: L,
                    projectId: D,
                    projectName: H,
                    serverConversationId: W
                } = e,
                q = (0, d.y)(eg.a),
                V = (0, d.y)(eT.a),
                Q = (0, na.a)(),
                $ = (0, eN.i)();
            P[0] !== $ ? (t = $.checkGate("224248639"), P[0] = $, P[1] = t) : t = P[1];
            let Y = t;
            P[2] !== $ ? (s = $.getLayer("3017902351").get("web_file_library_enabled", !1), P[2] = $, P[3] = s) : s = P[3];
            let J = s,
                Z = Y || J;
            P[4] !== Z ? (o = {
                enabled: Z
            }, P[4] = Z, P[5] = o) : o = P[5];
            let {
                data: X
            } = (0, d.z)(nc.p, o), ee = Z && X?.fileLibraryEnabledForRegistrationCountry !== !1, et = (0, f.a)(), en = (0, v.$)(), [ea, er] = (0, m.useState)(null), es = (0, m.useRef)(null), eo = (0, m.useRef)(null);
            P[6] === Symbol.for("react.memo_cache_sentinel") ? (i = [], P[6] = i) : i = P[6];
            let ei = (0, m.useRef)(i);
            P[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                name: "chatgpt"
            }, P[7] = l) : l = P[7];
            let {
                isCapable: el
            } = (0, d.x)(w.a, l), ec = (0, d.x)(eS.g, W);
            P[8] === Symbol.for("react.memo_cache_sentinel") ? (c = () => er("shortcut"), P[8] = c) : c = P[8];
            let ed = z && !ec;
            P[9] !== q || P[10] !== W ? (u = () => (0, eC.a)(q.query.getData(tn.chatGptConversationQueryById$, W), q.get(j.h), q.get(j.g)), P[9] = q, P[10] = W, P[11] = u) : u = P[11], P[12] !== ed || P[13] !== u ? (h = {
                enabled: ed,
                isActive: u
            }, P[12] = ed, P[13] = u, P[14] = h) : h = P[14], (0, tH.a)("deleteChat", c, h), P[15] !== V || P[16] !== ec || P[17] !== en || P[18] !== q || P[19] !== W ? (p = e => {
                !ec && (0, eC.a)(q.query.getData(tn.chatGptConversationQueryById$, W), q.get(j.h), q.get(j.g)) && (er(null), (0, nh.a)(V, W, e), en("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, P[15] = V, P[16] = ec, P[17] = en, P[18] = q, P[19] = W, P[20] = p) : p = P[20];
            let eu = p;
            P[21] !== q || P[22] !== W ? (g = async () => {
                let e = [];
                ei.current = e, e.push(...await async function(e, t) {
                    let a = await no.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        }
                    }).catch(() => null);
                    return a?.can_share && 0 !== a.av_sessions.length ? [{
                        id: "share-live-session",
                        icon: tl.jj,
                        message: (0, t8.e)({
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
            }, P[21] = q, P[22] = W, P[23] = g) : g = P[23];
            let eh = g;
            P[24] !== N || P[25] !== k || P[26] !== ee || P[27] !== et || P[28] !== ec || P[29] !== G || P[30] !== F || P[31] !== Q || P[32] !== en || P[33] !== B || P[34] !== L || P[35] !== D || P[36] !== H || P[37] !== q || P[38] !== W || P[39] !== $ || P[40] !== O ? (y = e => {
                let t = q.get(j.f),
                    r = q.get(j.k),
                    s = q.query.getData(tn.chatGptConversationQueryById$, W),
                    o = q.get(j.h),
                    i = q.get(j.g),
                    l = (0, eC.a)(s, o, i),
                    c = (0, ni.b)(q, W),
                    d = !ec && (0, eC.a)(c, o, i),
                    u = q.get(C.b).pathname,
                    h = () => Q() && u === q.get(C.b).pathname && t === q.get(j.f) && r === q.get(j.k),
                    p = (0, nd.a)(q, N, k, () => (0, nu.a)(en)),
                    g = [];
                $.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && g.push({
                    id: "chatgpt-audio-summary",
                    message: (0, t8.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary"
                    }),
                    icon: (0, a.jsx)(K.b, {
                        icon: {
                            16: tl.yg,
                            20: tl.zg
                        }
                    }),
                    nativeIcon: tl.yg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
                        })().then(e => {
                            h() && e(q, W)
                        }).catch(() => {
                            h() && (es.current?.focus({
                                preventScroll: !0
                            }), q.get(U.f).danger(et.formatMessage({
                                id: "chatgpt.audioSummary.openError",
                                defaultMessage: "Couldn’t open audio summary"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgpt.audioSummary.openError"
                                }
                            }))
                        })
                    }
                }), ee && g.unshift({
                    id: "chatgpt-conversation-files",
                    message: (0, t8.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat"
                    }),
                    icon: (0, a.jsx)(K.b, {
                        icon: {
                            16: tl.rb,
                            20: tl.sb
                        }
                    }),
                    nativeIcon: tl.rb,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(368308).then(n.bind(n, "LFUX"))).openConversationFiles
                        })().then(e => {
                            h() && e(q, {
                                conversationId: N,
                                serverConversationId: W,
                                onOpenMessage: L
                            })
                        }).catch(() => {
                            h() && q.get(U.f).danger(et.formatMessage({
                                id: "chatgptConversations.files.loadPanelError",
                                defaultMessage: "Couldn’t open files in chat"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgptConversations.files.loadPanelError"
                                }
                            })
                        })
                    }
                });
                let m = [];
                {
                    let e = null == nv(q, W) ? null : {
                        id: "language-learning-feedback",
                        icon: tl.wd,
                        message: (0, t8.e)({
                            id: "restricted.languageLearningFeedback.action",
                            defaultMessage: "Language learning feedback"
                        }),
                        selectAfterClose: !0,
                        onSelect: () => {
                            let e = nv(q, W);
                            if (null == e || !h()) return;
                            let {
                                identity: t,
                                state: a
                            } = e, r = a.view.definition.sections.find(e => e.id === a.selectedSectionId), s = q.get(tp.C, W), o = q.get(tp.N, W), i = {
                                identity: t,
                                conversationId: W,
                                context: JSON.stringify({
                                    report_opened_at_utc: new Date().toISOString(),
                                    conversation_id: W,
                                    section_id: a.selectedSectionId,
                                    section_start_message_id: r?.start_message_id,
                                    target_section_id: a.entry?.sectionId,
                                    current_node_id: s,
                                    current_node_id_scope: "conversation_tail"
                                }, null, 2),
                                conversationJson: null == o ? null : JSON.stringify({
                                    conversation_id: W,
                                    current_node: s,
                                    mapping: o,
                                    sectioned_conversation: a.view
                                })
                            };
                            n.e(764441).then(n.bind(n, "OLZ4")).then(e => {
                                let {
                                    LanguageLearningFeedbackDialog: n
                                } = e, a = q.get(np.b);
                                h() && (0, eO.b)(q, "2274846837") && a?.accountId === t.accountId && a.userId === t.userId && (0, ns.f)(q, n, {
                                    report: i
                                })
                            }).catch(() => {
                                h() && q.get(U.f).danger(q.get(nf.a).formatMessage({
                                    id: "restricted.languageLearningFeedback.openError",
                                    defaultMessage: "Couldn't open feedback. Please try again"
                                }), {
                                    errorAnalytics: {
                                        toastId: "language_learning_feedback_open_error"
                                    }
                                })
                            })
                        }
                    };
                    null != e && m.push(e)
                }
                return g.push(...(0, nn.a)(q)), (0, nl.a)(q, {
                    organizationItems: (0, nt.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: ei.current,
                    viewItems: g,
                    feedbackItems: m,
                    preferenceItems: null == p ? [] : [p],
                    surface: "header",
                    isTitleMenu: !0,
                    conversationId: W,
                    stateConversationId: N,
                    conversationOrigin: k,
                    title: O,
                    isHandoffPending: F,
                    canHandoff: null != B,
                    onHandoff: B,
                    projectId: D,
                    projectName: H,
                    onRename: (0, eC.b)(s, o, i, ec) ? () => void(0, ni.renameActiveChatGptConversation)(q, N) : void 0,
                    isPinned: q.get(eS.h, W) ?? c?.is_starred === !0,
                    onTogglePin: d ? () => {
                        let e = (0, ni.b)(q, W);
                        !(null == e || q.get(eS.g, W)) && (0, eC.a)(e, q.get(j.h), q.get(j.g)) && (0, eS.V)({
                            scope: q,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(nA)
                    } : void 0,
                    onArchive: !l || ec || G ? void 0 : () => (0, nr.a)(q, W),
                    onUnarchive: l && !ec && G ? () => {
                        (0, eS.W)({
                            scope: q,
                            conversationId: W
                        }).then(() => {
                            q.get(U.f).success(et.formatMessage(eP.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            q.get(U.f).danger(et.formatMessage(ew.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !l || ec ? void 0 : () => er("menu")
                })
            }, P[24] = N, P[25] = k, P[26] = ee, P[27] = et, P[28] = ec, P[29] = G, P[30] = F, P[31] = Q, P[32] = en, P[33] = B, P[34] = L, P[35] = D, P[36] = H, P[37] = q, P[38] = W, P[39] = $, P[40] = O, P[41] = y) : y = P[41];
            let ep = y;
            P[42] !== E || P[43] !== O || P[44] !== M ? (b = null == M ? (0, a.jsx)(ne.a, {
                ref: es,
                onActivate: E,
                title: O
            }) : (0, a.jsx)(t7.b, {
                ref: es,
                children: M
            }), P[42] = E, P[43] = O, P[44] = M, P[45] = b) : b = P[45];
            let em = b;
            P[46] !== ep || P[47] !== em || P[48] !== en || P[49] !== el || P[50] !== eh || P[51] !== R || P[52] !== W || P[53] !== A ? (x = A && (el ? (0, a.jsx)(n_, {
                conversationId: W,
                getBaseItems: ep,
                menuTriggerRef: es,
                navigate: en,
                onBeforeOpen: eh,
                renderDropdown: R,
                children: em
            }) : (0, a.jsx)(t9.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => ep(),
                onBeforeOpen: eh,
                renderItem: nt.b,
                renderDropdown: R,
                trigger: "click",
                children: em
            })), P[46] = ep, P[47] = em, P[48] = en, P[49] = el, P[50] = eh, P[51] = R, P[52] = W, P[53] = A, P[54] = x) : x = P[54];
            let ef = "shortcut" === ea,
                ev = null != ea;
            return P[55] !== ea ? (S = () => {
                eo.current = "menu" === ea ? es.current : null, er(null)
            }, P[55] = ea, P[56] = S) : S = P[56], P[57] === Symbol.for("react.memo_cache_sentinel") ? (_ = e => {
                let t = eo.current;
                if (eo.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, P[57] = _) : _ = P[57], P[58] !== eu || P[59] !== ec || P[60] !== ef || P[61] !== ev || P[62] !== S || P[63] !== O ? (I = (0, a.jsx)(ex.a, {
                allowArtifactDeletion: !0,
                autoFocusConfirm: ef,
                open: ev,
                onOpenChange: S,
                onCloseAutoFocus: _,
                isDeleting: ec,
                onConfirm: eu,
                title: O
            }), P[58] = eu, P[59] = ec, P[60] = ef, P[61] = ev, P[62] = S, P[63] = O, P[64] = I) : I = P[64], P[65] !== x || P[66] !== I ? (T = (0, a.jsxs)(a.Fragment, {
                children: [x, I]
            }), P[65] = x, P[66] = I, P[67] = T) : T = P[67], T
        }

        function nA() {}

        function nM(e) {
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
        var nR = n("dLcZ"),
            nk = n("UNoV");

        function nN(e) {
            let t, n = (0, r.c)(2),
                {
                    children: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(_.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                children: (0, a.jsx)("div", {
                    className: nk.a.Progress,
                    children: s
                })
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var nO = n("NVRI"),
            nF = n("WLgA");

        function nG(e) {
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
                to: (0, nF.c)(l),
                uniform: !0,
                children: o
            }) : null, s[0] = o, s[1] = c, s[2] = i, s[3] = l, s[4] = t) : t = s[4];
            let d = t,
                u = d ?? o,
                h = null != d;
            return s[5] !== i || s[6] !== u || s[7] !== h ? (n = (0, a.jsx)(nO.b, {
                project: {
                    icon: u,
                    iconInteractive: h,
                    name: i
                }
            }), s[5] = i, s[6] = u, s[7] = h, s[8] = n) : n = s[8], n
        }
        var nz = n("ftSl"),
            nB = n("u9Jt"),
            nL = n("Xoyl");

        function nD(e) {
            let t, n = (0, r.c)(7),
                {
                    hasTitleMenu: s,
                    onClick: o,
                    project: i,
                    title: l
                } = e;
            if (null == l) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(nL.a, {}), n[0] = e) : e = n[0], e
            }
            if (s) {
                let e;
                return n[1] !== o || n[2] !== i || n[3] !== l ? (e = (0, a.jsx)(nB.a, {
                    triggerButton: (0, a.jsx)(ne.a, {
                        onActivate: o,
                        project: i,
                        title: l
                    })
                }), n[1] = o, n[2] = i, n[3] = l, n[4] = e) : e = n[4], e
            }
            return n[5] !== l ? (t = (0, a.jsx)(nz.a, {
                className: "max-w-full",
                variant: "flush-start",
                title: l
            }), n[5] = l, n[6] = t) : t = n[6], t
        }
        var nH = n("MJRC"),
            nW = n("X0li");
        let nq = (0, tc.a)(nW.d),
            nK = (0, tc.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            nU = (0, tc.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var nV = n("lX86"),
            nQ = n("sQ4r"),
            n$ = n("on57"),
            nY = n("IPUh"),
            nJ = n("v7qY"),
            nZ = n("wD9O"),
            nX = n("jov5"),
            n0 = n("Ro2M"),
            n1 = n("bN4H"),
            n2 = n("TS05");

        function n3(e) {
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
            } = (0, d.x)(w.a, t);
            if (i[1] !== m || i[2] !== g?.sidebarArea || i[3] !== p) {
                let e = new URLSearchParams(p);
                n = e.get("automationId"), s = g?.sidebarArea === "scheduled" || !m || !n || "finalAgentTurnStart" !== e.get("messageId"), i[1] = m, i[2] = g?.sidebarArea, i[3] = p, i[4] = n, i[5] = s
            } else n = i[4], s = i[5];
            return s ? null : (i[6] !== n || i[7] !== l || i[8] !== c || i[9] !== h || i[10] !== u ? (o = (0, a.jsx)(n4, {
                automationId: n,
                conversationId: l,
                entries: c,
                turnListApi: u
            }, h), i[6] = n, i[7] = l, i[8] = c, i[9] = h, i[10] = u, i[11] = o) : o = i[11], o)
        }

        function n4(e) {
            let t, n, a, s, o = (0, r.c)(25),
                {
                    automationId: i,
                    conversationId: l,
                    entries: c,
                    turnListApi: u
                } = e,
                h = (0, d.y)(eg.a),
                p = (0, v.Y)(),
                g = (0, d.z)(j.f),
                f = (0, d.x)(tp.j, l),
                {
                    data: y
                } = (0, d.x)(n0.e, i),
                b = (0, d.z)(nX.a),
                x = (0, m.useRef)(null),
                w = (0, m.useRef)(null);
            o[0] !== c ? (t = c.findLast(n7), o[0] = c, o[1] = t) : t = o[1];
            let C = t;
            o[2] !== g || o[3] !== i || o[4] !== b || o[5] !== C || o[6] !== y || o[7] !== p || o[8] !== h || o[9] !== u ? (n = () => {
                null == y || null == g || (b || x.current === g || (x.current = g, (0, n1.openAutomationSidePanelTab)({
                    scope: h,
                    automationId: i,
                    title: y.automation.title
                })), null != u && null != C && w.current !== g && (w.current = g, u.scrollToKey(C.turnKey, n5, {
                    align: "top"
                }).then(() => {
                    h.set(n2.a, {
                        locationKey: p.key,
                        accountId: g
                    }, !0)
                })))
            }, o[2] = g, o[3] = i, o[4] = b, o[5] = C, o[6] = y, o[7] = p, o[8] = h, o[9] = u, o[10] = n) : n = o[10];
            let S = (0, m.useEffectEvent)(n);
            o[11] !== g || o[12] !== l || o[13] !== y?.automation.conversation_id || o[14] !== S || o[15] !== f ? (a = () => {
                null != g && y?.automation.conversation_id === (f ?? l) && S()
            }, o[11] = g, o[12] = l, o[13] = y?.automation.conversation_id, o[14] = S, o[15] = f, o[16] = a) : a = o[16];
            let _ = C?.turnKey,
                I = y?.automation.conversation_id;
            return o[17] !== g || o[18] !== b || o[19] !== l || o[20] !== f || o[21] !== _ || o[22] !== I || o[23] !== u ? (s = [g, l, _, I, f, b, u], o[17] = g, o[18] = b, o[19] = l, o[20] = f, o[21] = _, o[22] = I, o[23] = u, o[24] = s) : s = o[24], (0, m.useEffect)(a, s), null
        }

        function n5(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: n6
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function n6(e) {
            return e instanceof HTMLElement && e.getClientRects().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }

        function n7(e) {
            let {
                turn: t
            } = e;
            return t.items.some(n8)
        }

        function n8(e) {
            return "user-message" !== e.type
        }
        var n9 = n("TDcV"),
            ae = n("Xvoy"),
            at = n("WAdu");
        let an = {
            $type: "protobuf_analytics_events.v1.ChatgptConversationPrintLifecycle"
        };
        var aa = n("jDEJ");
        let ar = (0, d.u)(eT.a, null);

        function as(e, t) {
            if (!e.get(ec.c).isChatgptBrowserReplacement || t.repeat || ((0, aa.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(ar)) return;
            let n = ai("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(ar, n), al(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function ao(e, t, n, a) {
            let r = e.get(ar);
            if (!e.get(ec.c).isChatgptBrowserReplacement || null == r) return a();
            let s = n => {
                al(e, r, n, t)
            };
            s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(ar)?.id !== r.id || e.get(ar)?.printing || e.set(ar, null), a
            }
        }

        function ai(e) {
            let t = performance.now();
            return {
                id: crypto.randomUUID(),
                entryPoint: e,
                startedAt: t,
                printing: !1
            }
        }

        function al(e, t, n, a) {
            (0, ec.a)(e, an, {
                attemptId: t.id,
                stage: n,
                entryPoint: t.entryPoint,
                elapsedMs: Math.max(0, performance.now() - t.startedAt),
                preparation: a
            })
        }
        var ac = n("CpsU"),
            ad = n.n(ac),
            au = n("rKAs"),
            ah = n("SqqO"),
            ap = n("zHp1"),
            ag = n("taWv");

        function am() {
            return Object.fromEntries(Array.from(document.images).flatMap(e => {
                if (!e.complete || 0 === e.naturalWidth) return [];
                let t = e.currentSrc || e.src;
                return [e.getAttribute("src"), e.src, t].flatMap(e => e ? [
                    [e, t]
                ] : [])
            }))
        }
        var af = n("j0nn"),
            av = n("AO3k"),
            ay = n("dPHp"),
            ab = n("X8kv"),
            ax = n("zn0A"),
            aw = "printDocument-v_w5Ax";
        let aC = "https://chatgpt.com/download/?utm_source=chatgpt_web&utm_medium=print&utm_campaign=app_install";

        function aS(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g, m, v = (0, r.c)(24),
                {
                    children: y,
                    title: b
                } = e,
                x = (0, f.a)(),
                {
                    getExperiment: w
                } = (0, eN.h)(),
                C = w("448755449").get("enabled", !1);
            v[0] !== y ? (t = (0, a.jsx)(ax.a, {
                value: !0,
                children: y
            }), v[0] = y, v[1] = t) : t = v[1];
            let S = t;
            if (!C) {
                let e, t;
                return v[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n$.b)(aw, "hidden w-full space-y-1.5 bg-surface text-default print:block"), v[2] = e) : e = v[2], v[3] !== S ? (t = (0, a.jsx)("div", {
                    className: e,
                    "data-conversation-print": "",
                    "data-theme": "light",
                    children: S
                }), v[3] = S, v[4] = t) : t = v[4], t
            }
            return v[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, n$.b)(aw, "formattedPrintDocument-tP74Wl", "group/conversation-print hidden w-full bg-surface text-default print:block"), v[5] = n) : n = v[5], v[6] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(ay.a, {
                className: "h-6 w-auto shrink-0"
            }), v[6] = s) : s = v[6], v[7] !== b ? (o = (0, a.jsxs)("header", {
                className: "mb-6 flex items-center justify-between gap-6",
                children: [s, (0, a.jsx)("p", {
                    className: "min-w-0 text-end text-sm wrap-anywhere text-secondary",
                    children: b
                })]
            }), v[7] = b, v[8] = o) : o = v[8], v[9] !== S ? (i = (0, a.jsx)("div", {
                className: "transcript-XHYu34",
                children: S
            }), v[9] = S, v[10] = i) : i = v[10], v[11] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n$.b)("footer-QEzLbn", "flex items-center gap-3 rounded-2xl border border-default bg-surface-secondary p-2 text-default"), v[11] = l) : l = v[11], v[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)("div", {
                className: "flex size-10 shrink-0 items-center justify-center rounded-xl border border-default bg-surface",
                children: (0, a.jsx)(ab.a, {
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
                    href: `${aC}&utm_content=pdf_link`,
                    children: (0, a.jsx)(av.a, {
                        value: `${aC}&utm_content=qr`,
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

        function a_(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var aI = n("jfiJ"),
            aj = n("FGJH"),
            aT = n("nmN6");
        let aP = new WeakMap;

        function aE(e) {
            let t, n, s = (0, r.c)(6),
                o = (0, d.z)(n9.a);
            return s[0] !== o || s[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([o, e.entries[0]?.conversationId]), s[0] = o, s[1] = e.entries[0]?.conversationId, s[2] = t) : t = s[2], s[3] !== e || s[4] !== t ? (n = (0, a.jsx)(aA, {
                ...e
            }, t), s[3] = e, s[4] = t, s[5] = n) : n = s[5], n
        }

        function aA(e) {
            let t, n, s, o, i, l, c = (0, r.c)(16),
                u = (0, d.y)(eg.a),
                h = (0, d.z)(ae.a),
                [p, g] = (0, m.useState)(!1),
                f = (0, m.useRef)(null);
            c[0] !== u ? (t = (e, t) => {
                if (as(u, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void f.current?.onKeyDown(e, t);
                let n = aP.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, nJ.flushSync)(() => g(!0));
                let a = n ?? f.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => aP.get(e)).finally(() => {
                    t.aborted || g(!1)
                })
            }, c[0] = u, c[1] = t) : t = c[1];
            let v = (0, m.useEffectEvent)(t);
            c[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                (0, nJ.flushSync)(() => g(!0)), f.current?.onBeforePrint()
            }, c[2] = n) : n = c[2];
            let y = (0, m.useEffectEvent)(n);
            c[3] !== u ? (s = () => {
                u.set(ax.b, null), g(!1)
            }, c[3] = u, c[4] = s) : s = c[4];
            let b = (0, m.useEffectEvent)(s);
            return c[5] !== b || c[6] !== y || c[7] !== v || c[8] !== u ? (o = () => {
                let e, t, n = new AbortController,
                    a = (e = () => {
                        if (!u.get(ec.c).isChatgptBrowserReplacement) return;
                        let e = u.get(ar);
                        if (e?.printing) return;
                        let t = {
                            ...e ?? ai("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_UNOBSERVED"),
                            printing: !0
                        };
                        u.set(ar, t), al(u, t, "CHATGPT_CONVERSATION_PRINT_STAGE_BEFORE_PRINT")
                    }, t = () => {
                        let e = u.get(ar);
                        u.get(ec.c).isChatgptBrowserReplacement && e?.printing && (al(u, e, "CHATGPT_CONVERSATION_PRINT_STAGE_AFTER_PRINT"), u.set(ar, null))
                    }, window.addEventListener("beforeprint", e, !0), window.addEventListener("afterprint", t), () => {
                        window.removeEventListener("beforeprint", e, !0), window.removeEventListener("afterprint", t), u.set(ar, null)
                    }),
                    r = e => v(e, n.signal);
                return window.addEventListener("keydown", r, !0), window.addEventListener("beforeprint", y, !0), window.addEventListener("afterprint", b), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), window.removeEventListener("beforeprint", y, !0), window.removeEventListener("afterprint", b), u.set(ax.b, null), a()
                }
            }, c[5] = b, c[6] = y, c[7] = v, c[8] = u, c[9] = o) : o = c[9], c[10] !== u ? (i = [u], c[10] = u, c[11] = i) : i = c[11], (0, m.useEffect)(o, i), c[12] !== h || c[13] !== e || c[14] !== p ? (l = p || h ? (0, a.jsx)(aM, {
                ...e,
                ref: f,
                printing: h
            }) : null, c[12] = h, c[13] = e, c[14] = p, c[15] = l) : l = c[15], l
        }

        function aM(e) {
            let t, n, s, o, l = (0, r.c)(19),
                {
                    entries: c,
                    title: u,
                    TurnRowComponent: h,
                    printing: p,
                    ref: g
                } = e,
                f = (0, d.y)(eg.a),
                v = (0, m.useContext)(I.a),
                y = (0, m.useContext)(at.a),
                {
                    getExperiment: b
                } = (0, eN.h)(),
                x = b("448755449", {
                    disableExposureLog: !0
                }).get("enabled", !1);
            l[0] !== c[0]?.conversationId ? (t = c[0]?.conversationId ?? (0, tz.d)(""), l[0] = c[0]?.conversationId, l[1] = t) : t = l[1], l[2] !== v || l[3] !== t ? (n = {
                auth: v,
                conversationId: t
            }, l[2] = v, l[3] = t, l[4] = n) : n = l[4];
            let w = (0, d.x)(null != c[0] && af.h, n),
                C = (0, d.x)(null == c[0] ? null : t3.e, c[0]?.conversationId ?? "") ?? !0,
                S = (0, m.useRef)(null),
                _ = function(e, t, n) {
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
                                userResolver: (0, ag.c)(void 0, void 0, void 0, e.get(tp.T, n.conversationId) ?? void 0),
                                scopedResolver: (0, ag.c)(a ?? void 0)
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
                            void 0 === t.generatedResolver && (t.generatedResolver = e.get(ag.a, n.conversationId));
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
                                        for (let a of (0, au.u)(t, e)) {
                                            if (r && (0, ah.d)(a.src)) continue;
                                            let e = a.searchResult?.isProxied && (a.previewSrc === a.searchResult.contentSrc || a.previewSrc === a.searchResult.originalSrc) ? a.src : a.previewSrc;
                                            o.push({
                                                conversationId: n.conversationId,
                                                src: a.src,
                                                previewSrc: null != e && r && (0, ah.d)(e) ? a.src : e
                                            })
                                        }
                            }
                            if (null == s) continue;
                            i.push(...l.contentReferences.flatMap((e, t) => (0, au.u)(e, t).map(e => {
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
                        return null != t && (0, ap.h)(t) ? [{
                            src: t,
                            resolver: n
                        }] : []
                    });
                    return {
                        queryKey: ["chatgpt-print-assets", e.get(n9.a), t[0]?.conversationId, a, r, o, c.map(e => {
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
                            return ao(e, "CHATGPT_CONVERSATION_PRINT_PREPARATION_IMAGES", i, async () => {
                                let t = {
                                    ...a.getQueryData(l)?.imageSources
                                };
                                for (let e of ad()(c, 6)) i.throwIfAborted(), await Promise.all(e.map(async e => {
                                    let {
                                        src: n,
                                        resolver: r
                                    } = e, s = await (0, ap.a)(a, n, r);
                                    if (i.throwIfAborted(), null != s) {
                                        let e = new Image;
                                        e.referrerPolicy = "no-referrer", e.src = s, await e.decode(), t[n] = s
                                    }
                                }));
                                let d = new Map,
                                    u = o.flatMap(t => {
                                        let n = d.get(t.conversationId);
                                        return (null == n && (n = r || !e.get(af.h, {
                                            auth: s,
                                            conversationId: t.conversationId
                                        }) && e.get(t3.e, t.conversationId), d.set(t.conversationId, n)), n && (0, ah.d)(t.src)) ? [] : [{
                                            ...t,
                                            previewSrc: n && null != t.previewSrc && (0, ah.d)(t.previewSrc) ? t.src : t.previewSrc
                                        }]
                                    }),
                                    h = n ? t : await async function(e, t, n) {
                                        if (0 === e.length) return t;
                                        let a = am(),
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
                }(f, c, p, x, "restricted" === y || !w && C, v),
                {
                    data: j,
                    isSuccess: T,
                    isError: P,
                    refetch: E
                } = (0, i.a)(_);
            return l[5] !== _ || l[6] !== j || l[7] !== x || l[8] !== T || l[9] !== E || l[10] !== f ? (s = () => ({
                onKeyDown(e, t) {
                    if (!e.defaultPrevented && (!T || !j.complete) && (e.preventDefault(), !e.repeat && S.current !== t)) return S.current = t, E({
                        cancelRefetch: !1
                    }).then(() => {
                        t.aborted || window.print()
                    }).finally(() => {
                        S.current === t && (S.current = null)
                    })
                },
                onBeforePrint() {
                    if (x) {
                        let e = f.queryClient.getQueryData(_.queryKey),
                            t = {
                                ...am(),
                                ...e?.imageSources
                            };
                        (0, nJ.flushSync)(() => f.set(ax.b, t))
                    }
                }
            }), l[5] = _, l[6] = j, l[7] = x, l[8] = T, l[9] = E, l[10] = f, l[11] = s) : s = l[11], (0, m.useImperativeHandle)(g, s), l[12] !== h || l[13] !== c || l[14] !== P || l[15] !== T || l[16] !== p || l[17] !== u ? (o = p ? (0, nJ.createPortal)((0, a.jsx)(aS, {
                title: u,
                children: (0, a.jsx)(tV.a, {
                    value: null,
                    children: (0, a.jsx)(aT.a, {
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
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? a_(e) : {
                                            ...e,
                                            items: e.items.map(a_),
                                            activeReasoning: null == e.activeReasoning ? void 0 : a_(e.activeReasoning)
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
            }), document.body) : null, l[12] = h, l[13] = c, l[14] = P, l[15] = T, l[16] = p, l[17] = u, l[18] = o) : o = l[18], o
        }

        function aR(e) {
            let t, n, a, s, o, l, c = (0, r.c)(22),
                {
                    conversationId: u
                } = e,
                h = (0, d.y)(eT.a),
                p = (0, f.a)(),
                g = (0, m.useRef)(null),
                v = (0, d.z)(n9.a),
                y = (0, d.x)(tp.j, u),
                b = (0, d.z)(aj.b);
            c[0] !== v || c[1] !== y ? (t = ["chatgpt-print-history", v, y], c[0] = v, c[1] = y, c[2] = t) : t = c[2], c[3] !== h || c[4] !== y ? (n = e => {
                let {
                    signal: t
                } = e;
                return ao(h, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != y && await (0, aI.a)(h, y, t), !0))
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
                if (as(h, e), e.defaultPrevented || null == y || 0 === b || h.get(aj.c, y)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (g.current?.signal === t) return void aP.set(e, g.current.preparation);
                let n = x({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && h.get(n9.a) === v) {
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
                            predicate: aO
                        }).map(ak)), t.aborted || h.get(n9.a) !== v || window.print()
                    }
                }).finally(() => {
                    g.current?.signal === t && (g.current = null)
                });
                g.current = {
                    signal: t,
                    preparation: n
                }, aP.set(e, n)
            }, c[9] = v, c[10] = u, c[11] = p, c[12] = b, c[13] = x, c[14] = h, c[15] = y, c[16] = s) : s = c[16];
            let w = (0, m.useEffectEvent)(s);
            return c[17] !== w ? (o = () => {
                let e = new AbortController,
                    t = t => w(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, c[17] = w, c[18] = o) : o = c[18], c[19] !== v || c[20] !== y ? (l = [v, y], c[19] = v, c[20] = y, c[21] = l) : l = c[21], (0, m.useEffect)(o, l), null
        }

        function ak(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(aN)
        }

        function aN() {}

        function aO(e) {
            return e.getObserversCount() > 0
        }
        var aF = n("gbRX");

        function aG(e) {
            let t, n, s = (0, r.c)(4),
                {
                    isFetching: o,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, d.z)(!i && aF.a) || o;
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

        function az(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation"
            }), o[0] = t) : t = o[0], o[1] !== i || o[2] !== l || o[3] !== c ? (n = null != c ? (0, a.jsx)(aG, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, o[1] = i, o[2] = l, o[3] = c, o[4] = n) : n = o[4], o[5] !== n ? (s = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), o[5] = n, o[6] = s) : s = o[6], s
        }
        var aB = n("FfNP"),
            aL = n("WVag");
        let aD = (0, tc.a)(aB.loadEpicChartIndicator);

        function aH(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, d.x)(aL.a, s),
                [i, l] = (0, m.useState)(!1);
            return i || null == o || l(!0), n[0] !== s || n[1] !== i ? (t = i ? (0, a.jsx)(aD, {
                conversationId: s
            }) : null, n[0] = s, n[1] = i, n[2] = t) : t = n[2], t
        }
        var aW = n("DWXw"),
            aq = n("RGWz"),
            aK = n("QxH2"),
            aU = n("UuVq"),
            aV = n("TwSq"),
            aQ = n("l0fK"),
            a$ = n("bjAA"),
            aY = n("hkBU"),
            aJ = n("RzIS"),
            aZ = n("T1PX"),
            aX = n("guID"),
            a0 = n("Mbqw"),
            a1 = n("yzQ9"),
            a2 = n("Gjet"),
            a3 = n("gJe8"),
            a4 = n("ASxG"),
            a5 = n("lsfk"),
            a6 = n("IObw"),
            a7 = n("kQNh"),
            a8 = n.n(a7),
            a9 = n("NkEl"),
            re = n("FW69"),
            rt = "highlight-x7OnzP",
            rn = "safari-wcvuzB",
            ra = "block-t7sxyD";
        let rr = "chatgpt-search-result",
            rs = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* ro(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(rs) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let s = RegExp(t.split(/\n+/u).map(a8()).join("\\n*"), "g");
            for (let n = s.exec(r); null != n && n.index < r.length; n = s.exec(r)) {
                let r = n.index;
                s.lastIndex = r + 1;
                let o = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < o);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, o - l.start), ri(c) && ((0, re.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function ri(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let rl = a4.object({
            chatGptSearchNavigation: a4.object({
                key: a4.string(),
                messageId: a4.string()
            })
        });

        function rc(e) {
            let t, n, a, s, o, i, l, c, u, h, p, g, f = (0, r.c)(50),
                {
                    conversationId: y,
                    entries: b,
                    isConversationFetching: x,
                    turnListApi: w
                } = e,
                C = (0, d.y)(eT.a),
                S = (0, d.x)(tp.s, y),
                _ = (0, a5.b)(),
                I = (0, nZ.c)();
            f[0] !== _ || f[1] !== I ? (t = e => {
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
                            left: (0, nZ.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                        h = (0, nZ.b)(o.height, n),
                        p = (0, nZ.b)(o.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, _, I)
            }, f[0] = _, f[1] = I, f[2] = t) : t = f[2];
            let j = (0, m.useEffectEvent)(t),
                T = (0, v.Y)(),
                P = (0, v.$)(),
                E = new URLSearchParams(T.search),
                A = E.get("messageId") ?? E.get("message"),
                M = rl.safeParse(T.state).data?.chatGptSearchNavigation,
                R = A ?? M?.messageId,
                k = E.get("selectedTextQuery") ?? "",
                N = (0, d.x)(tp.N, y),
                O = !k || null != R && null != N && (N[R]?.message != null || Object.values(N).some(e => e.message?.id === R)),
                F = k || E.get("historySearchQuery") || "",
                G = JSON.stringify([y, null != A ? T.key : M?.key ?? T.key, R]);
            f[3] !== G ? (n = {
                key: G,
                handled: !1,
                positioned: !1
            }, f[3] = G, f[4] = n) : n = f[4];
            let z = (0, m.useRef)(n),
                B = (0, m.useEffectEvent)(e => {
                    z.current.positioned = !0;
                    let t = F.trim().length > 0 ? function(e, t, n) {
                        let a, r, s, o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            p = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === p.length) return () => {};
                        let g = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(a8()).join("|") : a8()(c), null == c ? "giu" : "gu"),
                            m = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(C);

                        function w() {
                            for (let t of (m = !0, x.disconnect(), clearTimeout(r), null != s && cancelAnimationFrame(s), null != a && CSS.highlights.get(rr) === a && CSS.highlights.delete(rr), e.classList.remove(rt, rn), b)) t.classList.remove(rt, ra)
                        }

                        function C() {
                            m || null != r || null != s || (r = setTimeout(() => {
                                r = void 0, s = requestAnimationFrame(() => {
                                    s = void 0, S()
                                })
                            }, 50))
                        }

                        function S() {
                            let t;
                            if (m || !e.isConnected || null != s) return;
                            let d = performance.now() - f;
                            if (d < 4e3 && null != e.querySelector("[data-search-result-pending]")) return void C();
                            let u = (0, a9.a)(e);
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
                                        s = void 0, S()
                                    })
                                });
                                return
                            }
                            let _ = [];
                            if (null != c) {
                                let t = e.querySelector('[data-markdown-text-style="assistant-message"]') ?? e,
                                    n = 0;
                                for (let e of ro(t, c))
                                    if (!(n++ < l)) {
                                        _.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(rs) != null || u.some(t => {
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), ri(a) && _.push(a)
                                    }
                            }
                            let I = h.flatMap(e => {
                                let {
                                    element: t,
                                    target: n
                                } = e;
                                if ("terms" !== i || "text" === n.highlight || "auto" === n.highlight && _.some(e => t.contains(e.startContainer))) return [];
                                let a = t.getBoundingClientRect();
                                return a.width > 0 && a.height > 0 ? [t] : []
                            });
                            if (0 === _.length && 0 === I.length) {
                                if (d < 800) return void C();
                                I.push(e)
                            }
                            let j = 0,
                                T = 0;
                            for (let e of [..._, ...I]) {
                                let n = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect(),
                                    a = n?.top ?? 0,
                                    r = n?.left ?? 0;
                                (null == t || 0 > (a - j || r - T)) && (t = e, j = a, T = r)
                            }
                            t = t ?? e, v && n?.(t);
                            let P = t instanceof Range ? t.getClientRects()[0] : t.getBoundingClientRect(),
                                E = [P?.top, P?.left, P?.width, P?.height, e.scrollHeight].join(":");
                            if (d < 4e3 && E !== o) {
                                o = E, C();
                                return
                            }
                            if (!v) {
                                v = !0, o = void 0, n?.(t), C();
                                return
                            }
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(..._), CSS.highlights.set(rr, a)) : _.length > 0 && I.push(e), e.classList.add(rt), (0, to.e)() && e.classList.add(rn), I)) t.classList.add(rt, ra), b.add(t);
                            r = setTimeout(w, 3600)
                        }
                        return x.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), S(), w
                    }(e, F, j, k ? "phrase" : "terms", Number(E.get("selectedTextOccurrence"))) : void 0;
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
            f[5] !== y || f[6] !== x || f[7] !== R || f[8] !== G || f[9] !== C || f[10] !== O ? (a = () => {
                if (z.current.key !== G && (z.current = {
                        key: G,
                        handled: !1,
                        positioned: !1
                    }), null != R && !x && O) return C.watch(e => {
                    !z.current.handled && (0, tp.Qb)(e, y, R) && (z.current.handled = !0)
                })
            }, s = [y, x, R, G, C, O], f[5] = y, f[6] = x, f[7] = R, f[8] = G, f[9] = C, f[10] = O, f[11] = a, f[12] = s) : (a = f[11], s = f[12]), (0, m.useLayoutEffect)(a, s), f[13] !== b || f[14] !== R ? (o = null == R ? void 0 : b.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(R)
            }), f[13] = b, f[14] = R, f[15] = o) : o = f[15];
            let L = o;
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
            let D = (0, m.useEffectEvent)(i);
            if (f[21] !== D || f[22] !== S || f[23] !== x || f[24] !== L ? (l = () => {
                    !z.current.positioned || null != L || x || S || D()
                }, f[21] = D, f[22] = S, f[23] = x, f[24] = L, f[25] = l) : l = f[25], f[26] !== S || f[27] !== x || f[28] !== L ? (c = [S, x, L], f[26] = S, f[27] = x, f[28] = L, f[29] = c) : c = f[29], (0, m.useLayoutEffect)(l, c), f[30] !== R || f[31] !== L?.id || f[32] !== L?.turn || f[33] !== L?.turn.items || f[34] !== L?.turn.items.findIndex || f[35] !== L?.turnKey) {
                let e = L?.turn.items.findIndex(e => "messageId" in e && e.messageId === R || "assistant-message" === e.type && null != R && e.sourceMessageIds?.includes(R)) ?? -1,
                    t = L?.turn.items[e],
                    n = L?.id;
                h = L?.turnKey, u = null == t || null == n ? void 0 : (0, a6.b)(t, e, n), f[30] = R, f[31] = L?.id, f[32] = L?.turn, f[33] = L?.turn.items, f[34] = L?.turn.items.findIndex, f[35] = L?.turnKey, f[36] = u, f[37] = h
            } else u = f[36], h = f[37];
            let H = u;
            return f[38] !== B || f[39] !== R || f[40] !== h || f[41] !== w || f[42] !== H ? (p = () => {
                let e;
                if (null == h || null == w) return;
                let t = new AbortController,
                    n = null;
                return w.scrollToKey(h, e => n = (null == R ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(R)}"]`)) ?? (null == H ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(H)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = B(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, f[38] = B, f[39] = R, f[40] = h, f[41] = w, f[42] = H, f[43] = p) : p = f[43], f[44] !== R || f[45] !== G || f[46] !== h || f[47] !== w || f[48] !== H ? (g = [G, R, h, w, H], f[44] = R, f[45] = G, f[46] = h, f[47] = w, f[48] = H, f[49] = g) : g = f[49], (0, m.useLayoutEffect)(p, g), null
        }
        var rd = n("ESlL"),
            ru = n("Ppno"),
            rh = n("lA5q"),
            rp = n("wDWo"),
            rg = n("IgxH"),
            rm = n("iaTG"),
            rf = n("c3f5"),
            rv = n("XpUB"),
            ry = n("xAIC"),
            rb = n("RKko"),
            rx = n("S1aY"),
            rw = n("Sd8U"),
            rC = n("XsXa");
        let rS = (0, d.t)("ChatGptTranscriptScope", {
                parent: rw.a,
                key: e => e.presentation
            }),
            r_ = (0, d.j)(rS, e => (0, rC.a)());
        var rI = n("nMiI"),
            rj = n("jmBh"),
            rT = n("FGGA"),
            rP = n("Ymkf"),
            rE = n("RADZ"),
            rA = n("rZzh"),
            rM = n("adck");

        function rR(e) {
            let t, n, s, o, i, l, c, u, h, p, g = (0, r.c)(64),
                {
                    activityDisclosures: m,
                    entry: f,
                    renderMcpApps: v,
                    threadTranscript: y,
                    trackShownImpressions: b
                } = e,
                x = void 0 === v || v,
                w = void 0 === b || b,
                C = (0, d.y)(eT.a),
                S = (0, rj.a)(void 0 !== y && y);
            g[0] !== f.conversationId ? (t = (0, em.o)({
                routeKind: "chatgpt-thread",
                conversationId: f.conversationId
            }), g[0] = f.conversationId, g[1] = t) : t = g[1];
            let _ = (0, d.x)(w ? ee.c : null, t),
                I = w && null == _,
                j = (0, d.x)(f.isMostRecentTurn ? rA.e : null, f.conversationId);
            g[2] !== f.timestampSeparatorAtMs ? (n = null == f.timestampSeparatorAtMs ? null : (0, a.jsx)(rI.b, {
                sentAtMs: f.timestampSeparatorAtMs
            }), g[2] = f.timestampSeparatorAtMs, g[3] = n) : n = g[3];
            let T = f.isReadOnly ? void 0 : f.turnKey,
                P = null != f.paragen;
            g[4] !== m || g[5] !== S || g[6] !== f.branchingMessageId || g[7] !== f.browserConversationId || g[8] !== f.conversationId || g[9] !== f.dilEditDisclosure || g[10] !== f.enableCloudBrowserActivity || g[11] !== f.errorMessage || g[12] !== f.feedbackEnabled || g[13] !== f.hasLaterSitesPreview || g[14] !== f.id || g[15] !== f.isMostRecentTurn || g[16] !== f.isReadOnly || g[17] !== f.isTemporaryChat || g[18] !== f.isWorkConversation || g[19] !== f.onEditUserMessage || g[20] !== f.onFork || g[21] !== f.onRegenerateResponse || g[22] !== f.pendingSubmissionAttachments || g[23] !== f.readAloudEnabled || g[24] !== f.referenceImageSuggestionActionInput || g[25] !== f.safetyReview || g[26] !== f.shareEnabled || g[27] !== f.showPendingLoadingMessage || g[28] !== f.showRequestUserInputStatus || g[29] !== f.turn || g[30] !== x || g[31] !== I || g[32] !== T || g[33] !== P ? (s = (0, a.jsx)(rP.a, {
                activityDisclosureTurnKey: T,
                activityDisclosures: m,
                dilEditDisclosure: f.dilEditDisclosure,
                browserConversationId: f.browserConversationId,
                conversationId: f.conversationId,
                enableCloudBrowserActivity: f.enableCloudBrowserActivity,
                branchingMessageId: f.branchingMessageId,
                hasLaterSitesPreview: f.hasLaterSitesPreview,
                hostId: ef.a,
                isMostRecentTurn: f.isMostRecentTurn,
                threadTranscript: S,
                pendingLoading: f.showPendingLoadingMessage,
                allowAwaitingResponse: f.showRequestUserInputStatus,
                responseError: f.errorMessage,
                isReadOnly: f.isReadOnly,
                isTemporaryChat: f.isTemporaryChat,
                isParagen: P,
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
                trackShownImpressions: I,
                turn: f.turn,
                turnId: f.id
            }), g[4] = m, g[5] = S, g[6] = f.branchingMessageId, g[7] = f.browserConversationId, g[8] = f.conversationId, g[9] = f.dilEditDisclosure, g[10] = f.enableCloudBrowserActivity, g[11] = f.errorMessage, g[12] = f.feedbackEnabled, g[13] = f.hasLaterSitesPreview, g[14] = f.id, g[15] = f.isMostRecentTurn, g[16] = f.isReadOnly, g[17] = f.isTemporaryChat, g[18] = f.isWorkConversation, g[19] = f.onEditUserMessage, g[20] = f.onFork, g[21] = f.onRegenerateResponse, g[22] = f.pendingSubmissionAttachments, g[23] = f.readAloudEnabled, g[24] = f.referenceImageSuggestionActionInput, g[25] = f.safetyReview, g[26] = f.shareEnabled, g[27] = f.showPendingLoadingMessage, g[28] = f.showRequestUserInputStatus, g[29] = f.turn, g[30] = x, g[31] = I, g[32] = T, g[33] = P, g[34] = s) : s = g[34], g[35] !== f.conversationId || g[36] !== f.isTemporaryChat || g[37] !== f.isWorkConversation || g[38] !== f.paragen || g[39] !== x || g[40] !== I ? (o = null == f.paragen ? null : (0, a.jsx)(rE.a, {
                renderMcpApps: x,
                comparison: f.paragen,
                conversationId: f.conversationId,
                hostId: ef.a,
                isTemporaryChat: f.isTemporaryChat,
                isWorkConversation: f.isWorkConversation,
                trackTaskViews: I
            }, f.paragen.promptMessageId), g[35] = f.conversationId, g[36] = f.isTemporaryChat, g[37] = f.isWorkConversation, g[38] = f.paragen, g[39] = x, g[40] = I, g[41] = o) : o = g[41], g[42] !== f.showSharedConversationPrivateDisclaimer ? (i = f.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(K.a, {
                    className: "shrink-0",
                    legacyIcon: rT.a,
                    asset16: rM.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(eb.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you"
                })]
            }) : null, g[42] = f.showSharedConversationPrivateDisclaimer, g[43] = i) : i = g[43], g[44] !== S || g[45] !== f || g[46] !== j || g[47] !== C || g[48] !== I ? (l = f.isMostRecentTurn ? (0, a.jsx)(rd.a, {
                conversationId: f.conversationId,
                errorMessage: f.errorMessage,
                isWorkConversation: f.isWorkConversation,
                onRetry: null == f.onRegenerateResponse || null == j ? void 0 : async e => {
                    let t = C.get(rA.e, f.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = C.get(tp.V, f.conversationId)?.metadata?.errorCode;
                    (0, tR.d)(C.get(ec.c).logProductEvent, {
                        conversationId: C.get(tp.j, f.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await f.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, rA.f)(t.message, C.get(e6.v, f.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                renderResponseStarting: !S,
                showPendingLoadingMessage: f.showPendingLoadingMessage,
                showRequestUserInputStatus: f.showRequestUserInputStatus,
                trackShownImpressions: I,
                useDefaultModel: j?.useDefaultModel,
                isRetryDisabled: j?.isRetryDisabled
            }) : null, g[44] = S, g[45] = f, g[46] = j, g[47] = C, g[48] = I, g[49] = l) : l = g[49], g[50] !== i || g[51] !== l || g[52] !== s || g[53] !== o ? (c = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [s, o, i, l]
            }), g[50] = i, g[51] = l, g[52] = s, g[53] = o, g[54] = c) : c = g[54], g[55] !== f.id || g[56] !== c || g[57] !== n ? (u = (0, a.jsxs)("div", {
                "data-content-search-turn-key": f.id,
                children: [n, c]
            }), g[55] = f.id, g[56] = c, g[57] = n, g[58] = u) : u = g[58];
            let E = u;
            return g[59] !== f.dilVisualSlotId ? (h = null != f.dilVisualSlotId && (0, a.jsx)("div", {
                "data-dil-anchor-spacer": "",
                "aria-hidden": "true"
            }), g[59] = f.dilVisualSlotId, g[60] = h) : h = g[60], g[61] !== E || g[62] !== h ? (p = (0, a.jsxs)(a.Fragment, {
                children: [h, E]
            }), g[61] = E, g[62] = h, g[63] = p) : p = g[63], p
        }

        function rk(e) {
            let t, n, s, o, i = (0, r.c)(11);
            i[0] !== e ? ({
                renderMcpApps: n,
                ...t
            } = e, i[0] = e, i[1] = t, i[2] = n) : (t = i[1], n = i[2]);
            let l = void 0 === n || n,
                c = (0, d.y)(rS),
                u = "main" === c.value.presentation;
            i[3] !== t || i[4] !== c ? (s = c.value.preserveActivityDisclosures && !t.entry.isReadOnly ? c.get(r_, null) : void 0, i[3] = t, i[4] = c, i[5] = s) : s = i[5];
            let h = l && c.value.rendersWidgets;
            return i[6] !== t || i[7] !== u || i[8] !== s || i[9] !== h ? (o = (0, a.jsx)(rR, {
                ...t,
                threadTranscript: u,
                activityDisclosures: s,
                renderMcpApps: h
            }), i[6] = t, i[7] = u, i[8] = s, i[9] = h, i[10] = o) : o = i[10], o
        }

        function rN(e) {
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
            return u[6] !== h ? (o = (0, a.jsx)(rx.a, {
                mode: "virtualized",
                rows: h,
                ...rb.g,
                preserveMeasuredTurnViewport: !0,
                renderRow: rO
            }), u[6] = h, u[7] = o) : o = u[7], u[8] !== y || u[9] !== o ? (i = (0, a.jsx)(tV.a, {
                value: null,
                children: (0, a.jsxs)(aT.a, {
                    value: null,
                    children: [y, o]
                })
            }), u[8] = y, u[9] = o, u[10] = i) : i = u[10], u[11] !== g || u[12] !== i ? (l = (0, a.jsx)(a2.a, {
                active: g,
                presentation: "panel",
                children: i
            }), u[11] = g, u[12] = i, u[13] = l) : l = u[13], u[14] !== s || u[15] !== l ? (c = (0, a.jsx)(d.b, {
                scope: rS,
                value: s,
                children: l
            }), u[14] = s, u[15] = l, u[16] = c) : c = u[16], c
        }

        function rO(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(rk, {
                entry: {
                    ...s,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    readAloudEnabled: !1
                },
                trackShownImpressions: !1
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var rF = n("qZWE"),
            rG = n("IBS2"),
            rz = n("V8uZ"),
            rB = n("PC5z"),
            rL = n("lZ4W"),
            rD = n("ihvi"),
            rH = n("l8ju"),
            rW = n("jCHb"),
            rq = n("nMdB"),
            rK = n("KFm7"),
            rU = n("uYx2"),
            rV = "pending-fxATqK";
        let rQ = "[data-d-component]:not([data-d-text-flow])";
        class r$ extends m.Component {
            static contextType = nZ.a;
            held = null;
            presented = this.props;
            userMotion;
            revealMotion;
            revealed = !1;
            manuallyScrolled = !1;
            resumePlacement;
            stopLayoutCorrection;
            pendingVisual;
            textObserver;
            unsubscribe;
            clearPendingPulse() {
                this.pendingVisual?.classList.remove(rV), this.pendingVisual = void 0
            }
            releaseHold = () => {
                this.clearPendingPulse(), this.revealMotion?.stop(), this.revealMotion = void 0, this.held = null, this.textObserver?.disconnect(), this.textObserver = void 0, this.userMotion?.cancel(), this.userMotion = void 0, this.resumePlacement = void 0, this.stopLayoutCorrection?.(), this.stopLayoutCorrection = void 0
            };
            componentDidMount() {
                this.unsubscribe = this.props.scrollController.addUserScrollListener(() => {
                    this.manuallyScrolled = !0;
                    let e = null != this.userMotion;
                    this.releaseHold(), e && (this.presented = this.props, this.forceUpdate())
                })
            }
            componentWillUnmount() {
                this.releaseHold(), this.unsubscribe?.()
            }
            holdForResponse = e => (this.manuallyScrolled = !1, !this.held && this.props.active && (this.held = this.capture()), !!this.held && (this.resumePlacement = e, this.props.scrollController.holdViewport(), !0));
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
                let r = a.querySelector(rQ) ?? a,
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
                if (this.props.active || !this.props.replyPending || this.revealed) return;
                let t = this.requestingBubble(e);
                if (!t) return;
                let n = t.getBoundingClientRect();
                if (0 === n.height) return;
                this.revealed = !0;
                let a = e.scrollElement.getBoundingClientRect(),
                    r = a.bottom - (0, rK.c)(e.scrollElement) * this.context,
                    s = Math.min(n.bottom - r, n.top - a.top);
                if (s < 1) return;
                let o = e.top - s;
                if (this.props.reducedMotion) {
                    e.top = o, this.restore(e);
                    return
                }
                this.stopLayoutCorrection?.(), this.stopLayoutCorrection = void 0, this.revealMotion = (0, rW.a)(e.top, o, {
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
                return e.active && e.exchangeKey !== this.props.exchangeKey && (this.manuallyScrolled = !1, this.revealed = !1, this.stopLayoutCorrection?.(), this.userMotion?.cancel(), this.held = this.held ?? this.capture(), this.held || (this.resumePlacement = void 0)), this.held
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
                if ((e.streamingDilFinalId !== this.props.streamingDilFinalId || e.exchangeKey !== this.props.exchangeKey) && (this.textObserver?.disconnect(), this.textObserver = void 0), "function" == typeof n ? null != this.props.exchangeKey && n(this.props.exchangeKey) : (this.restore(n), n && this.revealRequest(n)), !this.pendingVisual && !this.manuallyScrolled && !this.props.active && this.props.replyPending && !this.props.hasStreamingFinalText && (!0 === this.props.patchIntent || void 0 === this.props.patchIntent && this.held)) {
                    let e = this.held?.element ?? this.capture()?.element;
                    e && (this.pendingVisual = e, e.classList.add(rV))
                }
                if (this.props.active || this.observeStreamingDilText(), this.props.active && e.visualOwnerId !== this.props.visualOwnerId && (this.revealMotion?.stop(), this.revealMotion = void 0, this.resumePlacement = void 0), this.held && this.shouldAnimateFold()) {
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
                e.body.isConnected || (e.body = e.element.querySelector(rQ) ?? e.element);
                let a = () => (0, nZ.b)(e.body.getBoundingClientRect().top - e.top, this.context),
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
                    this.held && r > 0 && this.props.ensureScrollRoomForAnchor?.(r), n.holdViewport(), n.compensateScrollToDistanceFromBottomPx(Math.max(0, (0, rU.b)(e.scrollElement) - r)), t && (this.stopLayoutCorrection?.(), this.stopLayoutCorrection = (0, rq.a)(e.body, this.context))
                }
            }
            render() {
                return this.shouldAnimateFold() ? this.presented.children : this.props.children
            }
        }
        var rY = n("aRto"),
            rJ = n("WWSI"),
            rZ = n("U3Gy"),
            rX = n("mKTJ");
        let r0 = (0, d.c)(em.a, e => {
                let {
                    get: t
                } = e;
                return t(rF.m)
            }, {
                isEqual: tb()
            }),
            r1 = (0, d.c)(em.a, e => {
                let {
                    get: t
                } = e;
                return t(rB.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function r2(e) {
            let t, n, s, o, i, l, c, u, h, p, g, f, y, b = (0, r.c)(52),
                {
                    conversationId: x,
                    entries: w,
                    viewportRef: C,
                    isTurnActive: S,
                    isInlinePreview: _,
                    readingPosition: I,
                    onVisibleContentReady: j,
                    responseSpacerState: T
                } = e,
                P = (0, d.z)(I.restoreState$),
                {
                    sharedConversationId: E
                } = (0, v.db)(),
                A = (0, d.z)(null != E && "u" > typeof Element && "function" != typeof Element.prototype.moveBefore ? r0 : null),
                M = (0, d.z)(r1),
                R = (0, a5.b)(),
                k = (0, m.useContext)(rG.a);
            b[0] !== k || b[1] !== _ || b[2] !== I || b[3] !== R ? (t = () => {
                if (null != k && !_) return k(() => I.captureBeforeHide(R))
            }, n = [k, _, I, R], b[0] = k, b[1] = _, b[2] = I, b[3] = R, b[4] = t, b[5] = n) : (t = b[4], n = b[5]), (0, m.useLayoutEffect)(t, n), b[6] !== I || b[7] !== R ? (s = () => I.restoreReadingPosition(R), b[6] = I, b[7] = R, b[8] = s) : s = b[8];
            let N = (0, eW.a)(s),
                O = w.findLastIndex(r7),
                F = w[O]?.dilVisualSlotId,
                G = (0, aZ.a)(null != F),
                [z, B] = (0, m.useState)(r6);
            b[9] === Symbol.for("react.memo_cache_sentinel") ? (o = new Map, b[9] = o) : o = b[9];
            let L = (0, m.useRef)(o);
            b[10] === Symbol.for("react.memo_cache_sentinel") ? (i = () => {
                let e = L.current;
                return () => e.forEach(r5)
            }, l = [], b[10] = i, b[11] = l) : (i = b[10], l = b[11]), (0, m.useEffect)(i, l), b[12] !== G || b[13] !== C || b[14] !== z ? (c = (e, t) => {
                C.current?.releaseForHistoryToggle();
                let n = z.get(e),
                    a = n?.count !== t || "closing" === n.phase,
                    r = L.current;
                window.clearTimeout(r.get(e)), r.delete(e);
                let s = n => B(a => {
                    let r = new Map(a);
                    return null != n ? r.set(e, {
                        count: t,
                        phase: n
                    }) : r.delete(e), r
                });
                G ? s(a ? "open" : null) : (s(a ? "opening" : "closing"), r.set(e, window.setTimeout(() => {
                    r.delete(e), s(a ? "open" : null)
                }, 150)))
            }, b[12] = G, b[13] = C, b[14] = z, b[15] = c) : c = b[15];
            let D = function(e, t, n) {
                    if (!e.some(e => null != e.dilEditRequests)) return e;
                    let a = new Set;
                    return e.flatMap(e => {
                        let r, s = e.dilEditRequests;
                        if (!s || e.dilVisualSlotId) return [e];
                        let o = !1,
                            i = e.turn.items.flatMap(e => {
                                if ("user-message" !== e.type || !e.messageId) return [e];
                                let i = s.get(e.messageId);
                                if (!i) return [e];
                                let l = t.get(i.slotId),
                                    c = l?.count === i.editCount ? l.phase : void 0;
                                if (e.messageId === i.originalRequestId) a.add(i.slotId), r = {
                                    slotId: i.slotId,
                                    requestId: e.messageId,
                                    count: i.editCount,
                                    expanded: null != c && "closing" !== c,
                                    onToggle: () => n(i.slotId, i.editCount)
                                };
                                else if (null == c && a.has(i.slotId)) return o = !0, [];
                                return null != c ? (o = !0, [{
                                    ...e,
                                    dilEditPhase: c,
                                    dilEditPreview: i.preview
                                }]) : [e]
                            });
                        return o ? i.length ? [{
                            ...e,
                            turn: {
                                ...e.turn,
                                items: i
                            },
                            dilEditDisclosure: r
                        }] : [] : [r ? {
                            ...e,
                            dilEditDisclosure: r
                        } : e]
                    })
                }(w, z, (0, eW.a)(c)),
                H = w[O]?.turn.items[0],
                W = w.findLastIndex(r8),
                q = w[W],
                K = (0, d.x)(rH.a, x),
                U = q?.turn.items.find(r4),
                V = O > W;
            b[16] !== w ? (u = e => {
                let t = w.find(t => t.turn.items.some(t => "chatgpt-writing-block-patch" === t.type && t.messageId === e.messageId)),
                    n = t?.turnKey ?? w.find(t => {
                        let {
                            id: n
                        } = t;
                        return n === e.turnId
                    })?.turnKey;
                return null == n ? [] : [n]
            }, b[16] = w, b[17] = u) : u = b[17];
            let Q = M.flatMap(u),
                $ = (0, m.useContext)(rY.a),
                Y = w.at(-1),
                J = S || Y?.turn.status === "in_progress";
            if ($?.aboveComposer != null && null != Y && Q.push(Y.turnKey), null != E && A?.size)
                for (let e of w) e.turn.items.flatMap(r3).some(e => "chatgpt-hosted-widget" === e.type && (0, rX.h)(e) && A.has((0, rX.e)(E, e.messageId))) && Q.push(e.turnKey);
            let Z = null == F ? void 0 : D.find(e => e.dilEditDisclosure?.slotId === F);
            Z && Q.push(Z.turnKey, w[O].turnKey);
            let X = V ? Z : void 0;
            null != q && (T?.voiceAutoScrollEnabled || !V && J) && Q.push(q.turnKey);
            let ee = (0, d.x)(rD.b, x),
                et = null == ee ? void 0 : w.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes(ee)
                }),
                en = null == et ? void 0 : (0, rD.a)(et.turn.items);
            (0, d.x)(rL.a, null == en ? null : {
                conversationId: x,
                userMessageId: en,
                steeredPromptId: et === Y ? ee : void 0
            }) && null != et && Q.push(et.turnKey);
            let ea = (0, d.x)(rZ.b, x);
            b[18] === Symbol.for("react.memo_cache_sentinel") ? (h = (e, t, n) => "adjacent-user-prompts" === (0, ta.d)(n[t - 1], e) ? {
                ...e,
                gapBeforePx: 4
            } : e, b[18] = h) : h = b[18];
            let er = (0, rJ.a)(D, ea, x).map(h);
            null != K && U?.messageId;
            let es = q?.turnKey,
                eo = H?.type === "assistant-message" ? H.messageId : void 0,
                ei, el = T?.ensureScrollRoomForAnchor,
                ec = Y?.hasStreamingFinalText === !0,
                ed = Y?.streamingDilFinalId,
                eu = T?.getHeightPx,
                eh = X?.turnKey,
                ep = X?.dilEditDisclosure?.count,
                eg = X?.turnKey ?? q?.turnKey;
            b[19] !== T || b[20] !== C ? (p = (e, t) => {
                T?.onTurnLayoutReady(e, t), C.current?.restoreAfterMeasurement()
            }, b[19] = T, b[20] = C, b[21] = p) : p = b[21], b[22] !== T ? (g = e => {
                let {
                    heightDeltaPx: t
                } = e;
                T?.consumeGrowth(t ?? 0)
            }, b[22] = T, b[23] = g) : g = b[23];
            let em = null == k || _ ? void 0 : I.onRestoreStateChange;
            return b[24] !== P || b[25] !== j || b[26] !== I.onApiChange || b[27] !== N || b[28] !== Q || b[29] !== eu || b[30] !== eh || b[31] !== ep || b[32] !== eg || b[33] !== p || b[34] !== g || b[35] !== em || b[36] !== er ? (f = (0, a.jsx)(rx.a, {
                mode: "virtualized",
                rows: er,
                ...rb.g,
                getBottomScrollPaddingPx: eu,
                synchronousMeasurementTurnKey: eh,
                latestTurnSynchronousMeasurementKey: ep,
                layoutReadyTurnKey: eg,
                onTurnLayoutReady: p,
                onLatestTurnHeightChange: g,
                initialRestoreState: P,
                onRestoreStateChange: em,
                onApiChange: I.onApiChange,
                restoreScrollDistanceFromBottomPx: N,
                onVisibleContentReady: j,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: Q,
                renderRow: rk
            }), b[24] = P, b[25] = j, b[26] = I.onApiChange, b[27] = N, b[28] = Q, b[29] = eu, b[30] = eh, b[31] = ep, b[32] = eg, b[33] = p, b[34] = g, b[35] = em, b[36] = er, b[37] = f) : f = b[37], b[38] !== V || b[39] !== G || b[40] !== J || b[41] !== R || b[42] !== es || b[43] !== eo || b[44] !== ei || b[45] !== el || b[46] !== ec || b[47] !== ed || b[48] !== f || b[49] !== C || b[50] !== F ? (y = (0, a.jsx)(r$, {
                ref: C,
                exchangeKey: es,
                visualId: F,
                visualOwnerId: eo,
                patchIntent: ei,
                active: V,
                ensureScrollRoomForAnchor: el,
                hasStreamingFinalText: ec,
                streamingDilFinalId: ed,
                replyPending: J,
                reducedMotion: G,
                scrollController: R,
                children: f
            }), b[38] = V, b[39] = G, b[40] = J, b[41] = R, b[42] = es, b[43] = eo, b[44] = ei, b[45] = el, b[46] = ec, b[47] = ed, b[48] = f, b[49] = C, b[50] = F, b[51] = y) : y = b[51], y
        }

        function r3(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function r4(e) {
            return "user-message" === e.type
        }

        function r5(e) {
            return window.clearTimeout(e)
        }

        function r6() {
            return new Map
        }

        function r7(e) {
            return null != e.dilVisualSlotId
        }

        function r8(e) {
            return e.turn.items.some(e => "user-message" === e.type)
        }
        var r9 = n("Ipgw"),
            se = n("SBcL");

        function st(e) {
            let t, n, s, o, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, d.y)(eT.a),
                u = (0, f.a)(),
                h = (0, eD.a)(),
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
            let w = (0, m.useEffectEvent)(t);
            return (i[8] !== w ? (n = () => {
                w()
            }, i[8] = w, i[9] = n) : n = i[9], i[10] !== v || i[11] !== l || i[12] !== h || i[13] !== g || i[14] !== p || i[15] !== y ? (s = [l, p, g, v, y, h], i[10] = v, i[11] = l, i[12] = h, i[13] = g, i[14] = p, i[15] = y, i[16] = s) : s = i[16], (0, m.useEffect)(n, s), h) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, nJ.createPortal)((0, a.jsx)("span", {
                ref: b,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = o) : o = i[17], o) : null
        }
        var sn = n("XtQP"),
            sa = n("JlMc"),
            sr = n("TUMj"),
            ss = n("pgeU");
        let so = (0, tc.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function si(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, d.y)(eT.a),
                c = (0, d.x)(ss.a, i);
            return o[0] !== i || o[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(ss.a, i);
                        null != e && (0, ss.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], o[0] = i, o[1] = l, o[2] = t, o[3] = n) : (t = o[2], n = o[3]), (0, m.useEffect)(t, n), o[4] !== i || o[5] !== c ? (s = null == c ? null : (0, a.jsx)(so, {
                conversationId: i,
                effect: c
            }, c.id), o[4] = i, o[5] = c, o[6] = s) : s = o[6], s
        }
        var sl = n("ZU27"),
            sc = n("Pyg2"),
            sd = n("ZIh4"),
            su = n("nKJ6"),
            sh = n("AoaR"),
            sp = n("fDfx"),
            sg = n("Xslx"),
            sm = n("EEop"),
            sf = n("bxvp"),
            sv = n("VBQS"),
            sy = n("hsIu");
        let sb = (0, d.d)(eT.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(sf.c) || null == n(j.f) || null == n(j.k)) return null;
            let {
                data: a,
                isError: r
            } = n(sy.b);
            if (r || a?.project_id !== e) return null;
            let {
                data: s,
                isError: o
            } = n(sm.l, (0, sv.a)());
            return o ? null : (0, sv.b)(s)
        });
        var sx = n("FmJi"),
            sw = n("sIex"),
            sC = n("Z2JT"),
            sS = n("Fjd0"),
            s_ = n("VPBa"),
            sI = n("PWXi"),
            sj = n("HgLj"),
            sT = n("ssKV"),
            sP = n("f6KK"),
            sE = n("JPXZ"),
            sA = n("zWHk");

        function sM(e) {
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
                if (!u && t && y.current !== f) return (0, sA.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(f) && b(!1)
                })
            }, c[10] = b, c[11] = d, c[12] = u, c[13] = f, c[14] = t, c[15] = s) : s = c[15], c[16] !== d || c[17] !== u || c[18] !== f || c[19] !== t ? (o = [d, u, f, t], c[16] = d, c[17] = u, c[18] = f, c[19] = t, c[20] = o) : o = c[20], (0, m.useLayoutEffect)(s, o), c[21] !== b || c[22] !== d || c[23] !== u || c[24] !== f || c[25] !== t || c[26] !== g ? (i = () => {
                if (!u || !t || y.current === f) return;
                y.current = f;
                let e = d.consumeLocationPromptPrefill(f);
                if (b(e), !e) return;
                let {
                    view: n
                } = d, a = t.replace(/\r\n/g, "\n"), r = "codex-app" === g ? (0, sE.f)({
                    schema: n.state.schema,
                    text: a,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, sE.e)({
                    schema: n.state.schema,
                    text: a
                }), s = n.state.tr.replaceWith(0, n.state.doc.content.size, r.content);
                s.setSelection(sP.h.atEnd(s.doc)), n.dispatch(s)
            }, c[21] = b, c[22] = d, c[23] = u, c[24] = f, c[25] = t, c[26] = g, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== f || c[31] !== t || c[32] !== g ? (l = [d, u, f, t, g], c[28] = d, c[29] = u, c[30] = f, c[31] = t, c[32] = g, c[33] = l) : l = c[33], (0, m.useLayoutEffect)(i, l), null
        }
        var sR = n("a4V1"),
            sk = n("KidQ");
        let sN = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function sO(e) {
            let t, n, s, o, i, l = (0, r.c)(15),
                {
                    children: c,
                    draftKey: u,
                    enableInlineSystemHints: h
                } = e,
                p = (0, d.y)(eT.a),
                g = (0, m.useContext)(sw.a),
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
            }, l[6] = g, l[7] = s) : s = l[7], l[8] !== c ? (o = e => null == e ? null : c(e), l[8] = c, l[9] = o) : o = l[9], l[10] !== t || l[11] !== n || l[12] !== s || l[13] !== o ? (i = (0, a.jsx)(sk.a, {
                controllerOptions: sN,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: s,
                children: o
            }), l[10] = t, l[11] = n, l[12] = s, l[13] = o, l[14] = i) : i = l[14], i
        }
        var sF = n("wnpN"),
            sG = n("xhk1"),
            sz = n("vpdG"),
            sB = n("V8xe");

        function sL(e) {
            let t, n, s, o = (0, r.c)(11),
                i = (0, m.useContext)(sw.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return o[0] !== e ? (t = (0, a.jsx)(sD, {
                    ...e
                }), o[0] = e, o[1] = t) : t = o[1], t
            }
            o[2] !== e.conversationId || o[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, o[2] = e.conversationId, o[3] = e.isImageEditComposer, o[4] = t) : t = o[4];
            let l = !e.isWorkConversation;
            return o[5] !== e ? (n = t => (0, a.jsx)(sD, {
                ...e,
                initialController: t
            }), o[5] = e, o[6] = n) : n = o[6], o[7] !== t || o[8] !== l || o[9] !== n ? (s = (0, a.jsx)(sO, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), o[7] = t, o[8] = l, o[9] = n, o[10] = s) : s = o[10], s
        }

        function sD(e) {
            let t, n, s, o, i, l, c, u, h, p, g, y, b, x, w, C, S, _, I, j = (0, r.c)(85),
                {
                    composerRef: T,
                    initialController: P,
                    ...E
                } = e,
                A = (0, d.y)(eg.a),
                M = (0, m.useContext)(a5.a),
                R = (0, d.x)(sd.d, E.isTemporaryChat),
                {
                    conversationId: k,
                    isFullscreenComposer: N
                } = E,
                O = (0, f.a)(),
                {
                    state: F
                } = (0, v.Y)(),
                G = (0, d.x)(e8, k),
                z = (0, d.x)(tp.T, k),
                B = !(!E.disabled && !E.isSharedConversation && !E.isWorkConversation && !E.isTemporaryChat && !E.isImageEditComposer && (0, tF.a)(z)) ? null : z,
                L = (0, d.x)(null == E.requiredSystemHints ? sb : null, B);
            j[0] !== L || j[1] !== E.requiredSystemHints ? (t = E.requiredSystemHints ?? (null == L ? void 0 : [L]), j[0] = L, j[1] = E.requiredSystemHints, j[2] = t) : t = j[2];
            let D = t;
            j[3] !== L || j[4] !== k || j[5] !== A ? (n = () => {
                if (null != L) {
                    let e, t;
                    return e = (0, sg.b)(A, k, [L]), t = (0, sp.i)(A, {
                        draftKey: k,
                        isTemporaryChat: !1
                    }), () => {
                        if (e(), A.get(sg.a, k).includes(L)) return;
                        let n = A.get(e6.x, k).filter(e => e !== L && e !== `plugin:${sh.d}`);
                        (0, e6.Z)(A, k, n, t)
                    }
                }
            }, s = [A, k, L], j[3] = L, j[4] = k, j[5] = A, j[6] = n, j[7] = s) : (n = j[6], s = j[7]), (0, m.useEffect)(n, s);
            let H = (0, d.x)(eZ.c, k);
            j[8] !== H || j[9] !== E.isSharedConversation || j[10] !== E.isWorkConversation || j[11] !== z ? (o = !E.isSharedConversation && !E.isWorkConversation && !(0, tF.a)(z) && !H, j[8] = H, j[9] = E.isSharedConversation, j[10] = E.isWorkConversation, j[11] = z, j[12] = o) : o = j[12];
            let W = o,
                q = W && !E.disabled && !E.isSubmitDisabled && !E.isImageEditComposer,
                K = W ? G : void 0;
            j[13] !== k || j[14] !== E.isImageEditComposer ? (i = E.isImageEditComposer ? {
                conversationId: k,
                surface: "image-edit"
            } : k, j[13] = k, j[14] = E.isImageEditComposer, j[15] = i) : i = j[15];
            let U = i;
            j[16] !== k || j[17] !== U || j[18] !== P ? (l = {
                composerController: P,
                conversationId: k,
                draftKey: U
            }, j[16] = k, j[17] = U, j[18] = P, j[19] = l) : l = j[19];
            let V = (0, sz.a)(l),
                Q = (0, sG.a)(V, k, !E.isInlinePreview && !E.disabled, E.workspace && "tpp", K?.id ?? z),
                $ = (0, m.useContext)(sw.a),
                Y = (0, m.useRef)(!1);
            j[20] !== U || j[21] !== $ || j[22] !== P || j[23] !== E.isTemporaryChat || j[24] !== A ? (c = e => {
                null == e || null == P || Y.current || (Y.current = !0, (0, e6._)(A, U, P.getPersistedText(), {
                    isTemporaryChat: E.isTemporaryChat
                }), $?.onAdopt())
            }, j[20] = U, j[21] = $, j[22] = P, j[23] = E.isTemporaryChat, j[24] = A, j[25] = c) : c = j[25];
            let J = (0, eW.a)(c);
            j[26] !== J || j[27] !== T ? (u = (0, sj.a)(T, J), j[26] = J, j[27] = T, j[28] = u) : u = j[28];
            let Z = u,
                X = (0, m.useContext)(sr.a),
                ee = (0, d.w)(sR.b, k),
                et = (0, d.x)(tp.eb, k),
                en = (0, d.x)(tp.ab, k),
                ea = (0, d.x)(e6.j, k);
            j[29] !== en ? (h = (0, tp.Bb)(en), j[29] = en, j[30] = h) : h = j[30];
            let er = h,
                es = (0, d.z)(sl.l.activeTab$);
            if (j[31] !== es || j[32] !== N || j[33] !== er || j[34] !== X) {
                let e = X?.turn.items.flatMap(sK);
                p = N && es?.tabType.kind === s_.a && "generatedImages" in es.props && null != es.props.generatedImages && !er && null != X && "in_progress" !== X.turn.status && !X.showPendingLoadingMessage && !e?.some(sq) && (null != X.errorMessage || e?.some(sW)) ? X.turn.messageIds.at(-1) ?? X.turnKey : null, j[31] = es, j[32] = N, j[33] = er, j[34] = X, j[35] = p
            } else p = j[35];
            let eo = p,
                ei = (0, m.useRef)(null);
            j[36] !== eo || j[37] !== A ? (g = () => {
                null != eo && eo !== ei.current && (ei.current = eo, A.set(sC.a, "expanded"))
            }, y = [eo, A], j[36] = eo, j[37] = A, j[38] = g, j[39] = y) : (g = j[38], y = j[39]), (0, m.useEffect)(g, y);
            let el = (0, d.w)(sF.a, N ? k : null);
            j[40] !== L || j[41] !== B || j[42] !== V || j[43] !== k || j[44] !== q || j[45] !== U || j[46] !== O || j[47] !== N || j[48] !== Z || j[49] !== Q || j[50] !== R || j[51] !== E || j[52] !== D || j[53] !== A || j[54] !== M || j[55] !== K || j[56] !== F?.libraryFileCreation || j[57] !== z ? (b = e => (0, a.jsxs)(sS.a, {
                children: [N && E.trackReadState && !e?.isHidden ? (0, a.jsx)(sa.a, {
                    conversationId: k,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, E.aboveComposerContent, (0, a.jsx)(sx.a, {
                    children: (0, a.jsx)(sT.a, {
                        ref: Z,
                        trackShownImpressions: E.trackShownImpressions && !E.isHidden && !e?.isHidden && !e?.isMinimized,
                        headerContent: E.headerContent,
                        legacyImageSuggestionsEnabled: !E.disabled && !E.isSharedConversation && !E.isImageEditComposer,
                        allowBackgroundSubmit: E.isInlinePreview,
                        ...Q,
                        disableAutoFocus: E.disableAutoFocus,
                        conversationOrigin: null == E.workspace ? void 0 : "tpp",
                        mcpAppContext: E.workspace?.mcpAppContext,
                        onServerThreadIdChange: E.workspace?.onServerThreadIdChange,
                        followupPortalTarget: E.followupPortalTarget,
                        takeoverDisclaimerRef: E.takeoverDisclaimerRef,
                        showConversationFollowups: E.showConversationFollowups,
                        autoPrepare: !E.isSubmitDisabled && !E.isSharedConversation,
                        browserConversationId: (0, su.getThreadBrowserConversationId)(A) ?? k,
                        composerController: V,
                        conversationId: k,
                        requiredSystemHints: D,
                        hideSystemHints: null != E.requiredSystemHints,
                        getSubmissionGuard: null != L ? () => () => A.get(tp.T, k) === z && A.get(sb, B) === L : void 0,
                        draftKey: U,
                        onPromptChange: R,
                        selectedCustomGpt: K,
                        targetGizmoId: K?.id,
                        onCustomGptChange: q ? e => {
                            A.set(e8, k, e)
                        } : void 0,
                        onCustomAgentSelected: q ? () => {
                            A.set(e8, k, null)
                        } : void 0,
                        disableDraftPrepare: E.isSubmitDisabled || E.isSharedConversation,
                        disableSubmit: E.disabled || E.isSubmitDisabled,
                        voiceInputDisabled: E.disabled,
                        aboveComposerHeaderContent: E.voiceDisclaimer,
                        getExtraDeveloperInstructions: !E.isInlinePreview && F?.libraryFileCreation && !E.isTemporaryChat ? sH : void 0,
                        isTemporaryChat: E.isTemporaryChat,
                        placeholder: E.disabled && !1 !== E.readOnlyPlaceholder ? E.readOnlyPlaceholder ?? O.formatMessage(sB.a.readOnlyConversationPlaceholder) : void 0,
                        readOnly: E.disabled,
                        hideModelPicker: E.hideModelPicker,
                        ...(0, e6.M)(E),
                        showVoiceStage: E.showVoiceStage,
                        onSubmitAccepted: (t, n) => {
                            e?.onSubmitStart(), (!(!E.isWorkConversation && n?.isSteer === !0) || M?.shouldFollowContentGrowth()) && E.responseSpacerState?.place(), E.onSubmitAccepted?.(t)
                        },
                        onSubmitError: E.responseSpacerState?.clear
                    })
                })]
            }), j[40] = L, j[41] = B, j[42] = V, j[43] = k, j[44] = q, j[45] = U, j[46] = O, j[47] = N, j[48] = Z, j[49] = Q, j[50] = R, j[51] = E, j[52] = D, j[53] = A, j[54] = M, j[55] = K, j[56] = F?.libraryFileCreation, j[57] = z, j[58] = b) : b = j[58];
            let ec = b;
            j[59] !== A ? (x = () => {
                (0, aV.K)(A, "conversation")
            }, w = () => {
                (0, aV.K)(A, "conversation")
            }, j[59] = A, j[60] = x, j[61] = w) : (x = j[60], w = j[61]);
            let ed = !E.isInlinePreview && !E.disabled && !E.isSubmitDisabled;
            j[62] !== V || j[63] !== ed ? (C = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(sM, {
                    composerController: V,
                    enabled: ed
                })
            }), j[62] = V, j[63] = ed, j[64] = C) : C = j[64];
            let eu = N ? "floating" : "pane",
                eh = E.disabled || E.awaitingGptContinuation,
                ep = null == X && !er,
                em = !E.isInlinePreview && null == E.workspace,
                ef = ea || er ? "loading" : "idle";
            return j[65] !== ef ? (S = {
                type: ef,
                unread: !1
            }, j[65] = ef, j[66] = S) : S = j[66], j[67] !== el || j[68] !== E.isHidden || j[69] !== E.renderTranscript || j[70] !== ec || j[71] !== ee || j[72] !== eu || j[73] !== eh || j[74] !== ep || j[75] !== em || j[76] !== S || j[77] !== et ? (_ = (0, a.jsx)(sc.a, {
                notifications: el,
                isHidden: E.isHidden,
                placement: eu,
                responsePreview: ee,
                forceExpanded: eh,
                composerOnly: ep,
                title: et,
                showConversationTitleMenu: em,
                statusState: S,
                renderTranscript: E.renderTranscript,
                children: ec
            }), j[67] = el, j[68] = E.isHidden, j[69] = E.renderTranscript, j[70] = ec, j[71] = ee, j[72] = eu, j[73] = eh, j[74] = ep, j[75] = em, j[76] = S, j[77] = et, j[78] = _) : _ = j[78], j[79] !== k || j[80] !== x || j[81] !== w || j[82] !== C || j[83] !== _ ? (I = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": k,
                onMouseDownCapture: x,
                onFocusCapture: w,
                children: [C, _]
            }), j[79] = k, j[80] = x, j[81] = w, j[82] = C, j[83] = _, j[84] = I) : I = j[84], I
        }

        function sH() {
            return [sI.a]
        }

        function sW(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function sq(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function sK(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var sU = n("ygKd"),
            sV = n("KSir"),
            sQ = n("QPeR"),
            s$ = n("M3Kf");

        function sY(e) {
            let t, n, s, o, l, c, u = (0, r.c)(21),
                {
                    conversationId: h
                } = e,
                p = (0, d.y)(eT.a),
                g = (0, d.x)(tp.j, h),
                m = (0, d.z)(aj.b),
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
                    await (0, aI.a)(p, g, n)
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
                isError: w,
                refetch: C
            } = (0, i.a)(l);
            return u[18] !== w || u[19] !== C ? (c = w ? (0, a.jsx)(ti.a, {
                color: "secondary",
                onClick: () => void C(),
                children: (0, a.jsx)(eb.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message"
                })
            }) : null, u[18] = w, u[19] = C, u[20] = c) : c = u[20], c
        }
        var sJ = n("TmaW"),
            sZ = n("K45w");

        function sX(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var s0 = n("NqfB"),
            s1 = n("JEFL"),
            s2 = n("moBM");
        let s3 = '[data-markdown-text-style="assistant-message"]',
            s4 = (0, d.d)(eT.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(tp.N, n)?.[a]?.message ?? null
            });

        function s5(e) {
            let t, n, s = (0, r.c)(5),
                o = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return s[0] !== e ? (t = t => (0, a.jsx)(s6, {
                ...e,
                selection: t
            }), s[0] = e, s[1] = t) : t = s[1], s[2] !== o || s[3] !== t ? (n = (0, a.jsx)(s0.a, {
                align: "start",
                targetSelector: o,
                children: t
            }), s[2] = o, s[3] = t, s[4] = n) : n = s[4], n
        }

        function s6(e) {
            let t, s, o, i, l, c, u, h = (0, r.c)(30),
                {
                    conversationId: p,
                    moreDetailsEnabled: g,
                    onAddSelectedText: m,
                    selection: v
                } = e,
                y = (0, d.y)(eg.a),
                b = (0, f.a)(),
                x = (0, eN.f)("4290238484"),
                w = (0, eN.f)("473637331"),
                C = (0, d.z)(s2.b),
                S = (0, d.x)(tp.y, p);
            h[0] !== S || h[1] !== C || h[2] !== y ? (t = C && "tpp" === S && "chatgpt-thread" === y.value.routeKind && null == y.value.workSideChat && !0, h[0] = S, h[1] = C, h[2] = y, h[3] = t) : t = h[3];
            let _ = t;
            h[4] !== p || h[5] !== v.selectionRange ? (s = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, s = a?.closest(s3);
                if (n.collapsed || null == s || !s.isConnected || s !== r?.closest(s3)) return null;
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
            let I = s,
                j = I?.messageId ?? null;
            h[7] !== p || h[8] !== j ? (o = {
                conversationId: p,
                messageId: j
            }, h[7] = p, h[8] = j, h[9] = o) : o = h[9];
            let T = (0, d.x)(s4, o),
                P = (0, d.x)(tp.j, p),
                E = x && g && null != P && null != I && T?.author.role === "assistant";
            return h[10] !== _ || h[11] !== y ? (i = _ ? e => {
                n.e(971224).then(n.bind(n, "f8of")).then(t => {
                    let {
                        createAndOpenWorkSideChat: n
                    } = t;
                    return n(y, {
                        target: "right",
                        selectedText: e
                    })
                })
            } : void 0, h[10] = _, h[11] = y, h[12] = i) : i = h[12], h[13] !== E || h[14] !== w || h[15] !== m || h[16] !== v.selectionRange || h[17] !== I ? (l = !E || w ? e => {
                m(e, I?.messageId, null == I ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of ro(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(I.markdownElement, v.selectionRange, e))
            } : void 0, h[13] = E, h[14] = w, h[15] = m, h[16] = v.selectionRange, h[17] = I, h[18] = l) : l = h[18], h[19] !== E || h[20] !== p || h[21] !== b || h[22] !== y || h[23] !== I ? (c = E ? e => {
                Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(882456), n.e(736970), n.e(81461), n.e(259288), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(16212), n.e(46150), n.e(722053), n.e(995430), n.e(871704)]).then(n.bind(n, "tZxZ")).then(t => {
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
                            defaultMessage: "More details"
                        }),
                        shouldBlockExternalEgress: y.get(t3.e, p),
                        sourceConversationId: p
                    })
                })
            } : void 0, h[19] = E, h[20] = p, h[21] = b, h[22] = y, h[23] = I, h[24] = c) : c = h[24], h[25] !== v.selectedText || h[26] !== i || h[27] !== l || h[28] !== c ? (u = (0, a.jsx)(s1.a, {
                conversationTerminology: "chat",
                selectedText: v.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), h[25] = v.selectedText, h[26] = i, h[27] = l, h[28] = c, h[29] = u) : u = h[29], u
        }
        var s7 = n("SEBt"),
            s8 = n("JUxu");
        let s9 = (0, m.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function oe(e) {
            let t, n, s, o, i = (0, r.c)(11),
                {
                    sharedConversationId: l
                } = e,
                c = (0, d.y)(eT.a),
                u = (0, d.x)(af.f, (0, m.useContext)(I.a));
            if (null != u) {
                let e, t;
                return i[0] !== u ? (e = (0, af.b)(u), i[0] = u, i[1] = e) : e = i[1], i[2] !== e ? (t = (0, a.jsx)(s8.a, {
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
                (0, ns.f)(c, s9, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, s7.d)(c, l)
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
        var ot = n("AORd"),
            on = n("cP1f");

        function oa(e) {
            let {
                turn: t
            } = e;
            return t.items.some(or)
        }

        function or(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function os(e) {
            let t, n, o, i, l, c, u, h, p, g, f, v, y, b, x, w, C, S, _, j, T, P, E, M, R, k, N, O, F, G, z, B, L, D, H, W = (0, r.c)(238),
                {
                    ref: q,
                    printTitle: K,
                    trackReadState: U,
                    trackShownImpressions: V,
                    composerRef: Q,
                    workspace: $,
                    shouldBlockMcpApps: Y,
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
                    hasLoadError: ew,
                    onRetryLoad: eC,
                    hasRenderableTurns: eS,
                    isComposerDisabled: e_,
                    readOnlyPlaceholder: eI,
                    moreDetailsEnabled: ej,
                    isConversationEmpty: eP,
                    showEmptyState: eE,
                    isConversationFetching: eA,
                    isConversationLoading: eM,
                    isSharedConversation: eR,
                    isSubmitDisabled: ek,
                    retainLiveModelPicker: eN,
                    isTemporaryChat: eO,
                    isTurnActive: eF,
                    isWorkConversation: ez,
                    onboardingPrelude: eB,
                    scrollStateConversationId: eL,
                    initialResponsePlacementKey: eD,
                    sharedConversationId: eH,
                    sharedPostRegulatedConnectorKind: eK,
                    showComposer: eU,
                    archivedPreviewFooter: eV,
                    showPendingLoadingMessage: eQ,
                    gptPluginMigrationBanner: e$,
                    awaitingGptContinuation: eY,
                    workOnlyConversionBanner: eJ,
                    onAddSelectedText: eZ,
                    onSubmitAccepted: eX
                } = e,
                e0 = void 0 === eE || eE,
                e1 = (0, d.y)(eT.a),
                e2 = (0, d.y)(eg.a),
                e3 = (0, d.z)(null),
                e4 = (0, d.x)(af.f, (0, m.useContext)(I.a)),
                e5 = (0, d.z)(ep.a),
                e6 = (0, d.x)(eq.a, Z),
                e7 = $?.fullscreenContent != null ? "content" : "workspace",
                e8 = (0, A.a)(ei ? "embedded" : e7),
                te = (0, d.z)(sQ.a),
                tt = eU && te?.source.turnContext.conversationId !== ee,
                tn = "floating" === e8.placement,
                [ta, tr] = (0, m.useState)(!1),
                ts = ta && !e8.isHidden && !eo,
                to = $?.fullscreenContent != null || tn && ts ? "floating" : "main",
                ti = (0, d.z)(sU.h),
                tl = em && null == eH && null == e4 && null == eV,
                tc = V && !es,
                td = !eM && !eF && !ew && eP && !eS,
                tu = !ei && "chatgpt-thread" === e2.value.routeKind && e2.value.workSideChat?.conversationId !== Z,
                th = (0, d.x)(tp.i, Z),
                tg = e0 && tl && td && null == th && !e6 && !tn,
                tm = null == ef ? "centered-home" : "home",
                tf = e0 && !e6 && (!tl || !eP),
                tv = (0, m.useRef)(null),
                ty = (0, m.useRef)(null),
                [tb, tx] = (0, m.useState)(null),
                tw = (0, nZ.c)(),
                tC = ei ? null : eL;
            W[0] !== tC || W[1] !== tb || W[2] !== tw ? (t = () => ({
                conversationKey: tC,
                responseSpacer: tb,
                windowZoom: tw
            }), W[0] = tC, W[1] = tb, W[2] = tw, W[3] = t) : t = W[3];
            let tS = (0, eW.a)(t);
            W[4] !== e1 || W[5] !== tC || W[6] !== tS ? (n = () => (function(e, t, n) {
                let a = (0, d.u)(eT.a, null == t ? 0 : e.get(se.a, t)),
                    r = (0, d.u)(eT.a, () => null),
                    s = (0, d.u)(eT.a, () => null),
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
                        null != a && e.set(se.a, a, (0, rU.a)(t, r?.getHeightPx() ?? 0))
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
                            if ((0, nZ.b)(c.height, e) <= Math.max(0, -o.offset)) return;
                            d = s.scrollTop + (0, nZ.b)(c.top - s.getBoundingClientRect().top, e) - o.offset
                        }
                        let u = s.scrollHeight - s.clientHeight;
                        d <= u && ((null == o || null != c || e.get(r)?.getEntryGeometry(o.key) == null) && l(), t.compensateScrollToDistanceFromBottomPx(u - Math.max(0, d)))
                    },
                    captureBeforeHide: function(e) {
                        let t = e.getScrollElement();
                        return null != t && t.clientHeight > 0 && (o = i ?? (e.shouldFollowContentGrowth() && 1 >= (0, rU.b)(t) ? "bottom" : function(e, t) {
                            let n = e.scrollTop,
                                a = e.getBoundingClientRect();
                            for (let r of e.querySelectorAll("[data-turn-key]")) {
                                let e = r.getBoundingClientRect(),
                                    s = r.dataset.turnKey;
                                if (null != s && e.height > 0 && e.bottom > a.top && e.top < a.bottom) return {
                                    top: n,
                                    turn: {
                                        key: s,
                                        offset: (0, nZ.b)(e.top - a.top, t)
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
            })(e1, tC, tS), W[4] = e1, W[5] = tC, W[6] = tS, W[7] = n) : n = W[7];
            let [t_] = (0, m.useState)(n), tI = (0, d.z)(t_.api$), tj = (0, d.z)(t_.restoreState$), tT = (0, d.z)(t_.initialOffset$), {
                cancelPendingRestore: tP
            } = t_, tE = null == tj ? eD : null, [tA, tM] = (0, m.useState)(!1);
            W[8] !== ey ? (o = () => ey, W[8] = ey, W[9] = o) : o = W[9];
            let tR = (0, eW.a)(o),
                {
                    revealLatestResponse: tk,
                    scrollToSearchTurn: tN,
                    scrollToDelayedImageCard: tO
                } = ((B = (0, r.c)(18))[0] !== tI || B[1] !== ey ? (k = () => ({
                    async scrollToMessage(e) {
                        let t = ey.find(t => {
                            let {
                                turn: n
                            } = t;
                            return n.messageIds.includes(e)
                        });
                        null != t && null != tI && await tI.scrollToKey(t.turnKey, void 0, {
                            align: "top"
                        })
                    }
                }), N = [ey, tI], B[0] = tI, B[1] = ey, B[2] = k, B[3] = N) : (k = B[2], N = B[3]), (0, m.useImperativeHandle)(q, k, N), B[4] !== tI || B[5] !== ey ? (O = (e, t) => (0, aK.c)(tI, ey.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                })?.turnKey, t), B[4] = tI, B[5] = ey, B[6] = O) : O = B[6], L = (0, eW.a)(O), B[7] !== tI || B[8] !== Z || B[9] !== ey ? (F = async e => {
                    let t = ey.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != tI && await tI.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${Z}-${e}`)}"]`), {
                        align: "center"
                    })
                }, B[7] = tI, B[8] = Z, B[9] = ey, B[10] = F) : F = B[10], D = (0, eW.a)(F), B[11] !== tI?.scrollToKey || B[12] !== ey ? (G = function(e) {
                    let t = ey.findLast(oa);
                    return (0, on.a)(tI?.scrollToKey, t?.turnKey, e)
                }, B[11] = tI?.scrollToKey, B[12] = ey, B[13] = G) : G = B[13], H = G, B[14] !== H || B[15] !== D || B[16] !== L ? (z = {
                    revealLatestResponse: H,
                    scrollToSearchTurn: L,
                    scrollToDelayedImageCard: D
                }, B[14] = H, B[15] = D, B[16] = L, B[17] = z) : z = B[17], z);
            W[10] === Symbol.for("react.memo_cache_sentinel") ? (i = e => (0, aK.a)(ty.current, e), W[10] = i) : i = W[10];
            let tF = (0, eW.a)(i),
                tG = `chatgpt:${Z}`;
            if (W[11] !== tP || W[12] !== Z || W[13] !== tR || W[14] !== tF || W[15] !== eO || W[16] !== e2 || W[17] !== tN || W[18] !== eH || W[19] !== e4 || W[20] !== tG) {
                let e;
                W[22] !== Z || W[23] !== eO || W[24] !== e2 || W[25] !== eH || W[26] !== e4 ? (e = async e => {
                    let t = e2.get(tp.j, Z);
                    !eO && null == eH && null == e4 && null != t && e2.get(aj.b) > 0 && await (0, aI.a)(e2, t, e)
                }, W[22] = Z, W[23] = eO, W[24] = e2, W[25] = eH, W[26] = e4, W[27] = e) : e = W[27], l = function(e) {
                    let {
                        getTurns: t,
                        routeContextId: n,
                        scrollAdapter: a,
                        ensureHistory: r
                    } = e, s = (0, rm.a)({
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
                                            unitId: (0, a6.a)("user", t),
                                            text: n
                                        }]
                                    }
                                    if ("assistant-message" === e.type) {
                                        let n = (0, rv.a)(e.content, au.b),
                                            a = [],
                                            r = "";
                                        for (; e.content.includes(r);) r += "";
                                        let s = (0, rg.a)(function e(t, n, a, r) {
                                                let s = "",
                                                    o = 0;
                                                for (let i of t) {
                                                    let t = n.indexOf(i.raw, o); - 1 !== t && (s += n.slice(o, t), s += function(t, n, a) {
                                                        var r, s;
                                                        if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                        if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                            if (e.name === au.a) {
                                                                let n = (0, ry.a)(e.attributes),
                                                                    a = (0, ry.b)(e.attributes),
                                                                    r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, au.l)(e) === a);
                                                                if (null == r) return "";
                                                                let s = (0, au.i)(r);
                                                                return "hidden" === s || "block" === s ? "" : (0, au.j)(r) ?? ""
                                                            }
                                                            return e.name === rp.a ? (0, rf.a)(e.attributes, "label") ?? "" : e.name === rp.b || e.name === rp.c ? "" : e.name === rh.a ? e.text ?? "" : null
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
                                            unitId: (0, a6.a)("assistant", t),
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
                    routeContextId: tG,
                    scrollAdapter: {
                        scrollToTurn: tN,
                        getTurnContainer: tF,
                        onNavigate: tP
                    },
                    ensureHistory: e
                }), W[11] = tP, W[12] = Z, W[13] = tR, W[14] = tF, W[15] = eO, W[16] = e2, W[17] = tN, W[18] = eH, W[19] = e4, W[20] = tG, W[21] = l
            } else l = W[21];
            let tz = l;
            W[28] !== tz.contextId ? (c = {
                containerRef: ty,
                contextId: tz.contextId
            }, W[28] = tz.contextId, W[29] = c) : c = W[29], (0, aQ.a)(c);
            let tB = tt && null == eV,
                tL = e5 && tB && !tn,
                tD = (0, aZ.a)();
            W[30] !== Z || W[31] !== eS || W[32] !== es || W[33] !== X || W[34] !== tD ? (u = {
                conversationId: Z,
                sectionIndex: X,
                hasRenderableTurns: eS,
                isCoveredByFloatingPanel: es,
                shouldReduceMotion: tD,
                containerRef: ty
            }, W[30] = Z, W[31] = eS, W[32] = es, W[33] = X, W[34] = tD, W[35] = u) : u = W[35];
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
                        h = (0, sZ.a)(0);
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
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(sX) && 0 !== n.clientWidth && (s.disconnect(), h.set(a * n.clientWidth), e = (0, rW.a)(h, 0, {
                                    duration: .3,
                                    ease: rz.d
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
                tW = tB && tn,
                [tq, tK] = (0, m.useState)(null),
                [tU, tV] = (0, m.useState)(null),
                [tQ, t$] = (0, m.useState)(null),
                tY = eR && tB && !e_ && !tn && !e5,
                [tJ, tZ] = (0, m.useState)(null);
            W[36] !== eY || W[37] !== Z || W[38] !== eS || W[39] !== eO || W[40] !== eK || W[41] !== eU ? (h = eU && !eY ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(aW.BrowserComposerDisclaimer, {
                    supportsMessageDisclosures: !0,
                    conversationId: Z,
                    hasUserMessage: eS,
                    isTemporaryChat: eO,
                    regulatedConnectorKindOverride: eK
                })
            }) : void 0, W[36] = eY, W[37] = Z, W[38] = eS, W[39] = eO, W[40] = eK, W[41] = eU, W[42] = h) : h = W[42];
            let tX = h;
            W[43] !== Z || W[44] !== ex || W[45] !== eS || W[46] !== e_ || W[47] !== ek || W[48] !== ez || W[49] !== eU || W[50] !== eQ ? (p = eS ? null : (0, a.jsx)(rd.a, {
                conversationId: Z,
                errorMessage: ex,
                isWorkConversation: ez,
                showPendingLoadingMessage: eQ,
                showRequestUserInputStatus: eU && !e_ && !ek
            }), W[43] = Z, W[44] = ex, W[45] = eS, W[46] = e_, W[47] = ek, W[48] = ez, W[49] = eU, W[50] = eQ, W[51] = p) : p = W[51];
            let t0 = p;
            W[52] !== Z || W[53] !== ez || W[54] !== eH || W[55] !== e4 ? (g = ez && null == eH && null == e4 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(aH, {
                    conversationId: Z
                }, Z)
            }) : null, W[52] = Z, W[53] = ez, W[54] = eH, W[55] = e4, W[56] = g) : g = W[56];
            let t1 = g;
            W[57] !== eV || W[58] !== t1 ? (f = null != eV ? (0, a.jsxs)(a.Fragment, {
                children: [t1, eV]
            }) : null, W[57] = eV, W[58] = t1, W[59] = f) : f = W[59];
            let t2 = f;
            W[60] !== en || W[61] !== t2 || W[62] !== eY || W[63] !== ee || W[64] !== et || W[65] !== Q || W[66] !== Z || W[67] !== ed || W[68] !== tX || W[69] !== t0 || W[70] !== ey || W[71] !== t1 || W[72] !== tq || W[73] !== e$ || W[74] !== ew || W[75] !== eS || W[76] !== el || W[77] !== e5 || W[78] !== e_ || W[79] !== eM || W[80] !== es || W[81] !== eo || W[82] !== tn || W[83] !== ti || W[84] !== ei || W[85] !== eR || W[86] !== ek || W[87] !== eO || W[88] !== ez || W[89] !== tc || W[90] !== eX || W[91] !== eI || W[92] !== t_ || W[93] !== tY || W[94] !== er || W[95] !== tb || W[96] !== eN || W[97] !== tk || W[98] !== e8.isHidden || W[99] !== eH || W[100] !== e4 || W[101] !== tt || W[102] !== ec || W[103] !== tW || W[104] !== tL || W[105] !== U || W[106] !== to || W[107] !== eJ || W[108] !== $ ? (v = t2 ?? (tt ? (0, a.jsxs)(sr.a.Provider, {
                value: ey.at(-1) ?? null,
                children: [eo || tn ? null : (0, a.jsx)(aY.a, {
                    onNavigate: tk
                }, Z), tn ? null : et, (0, a.jsx)(sL, {
                    requiredSystemHints: er,
                    composerRef: Q,
                    workspace: $,
                    isInlinePreview: ei,
                    hideModelPicker: el,
                    showFilePicker: ec,
                    disableAutoFocus: ed,
                    conversationId: ee,
                    isImageEditComposer: ti,
                    disabled: e_,
                    readOnlyPlaceholder: eI,
                    awaitingGptContinuation: eY,
                    headerContent: t1,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tY ? (0, a.jsx)("div", {
                            ref: t$,
                            className: "empty:hidden"
                        }) : null, en, !eM && !ew && eS && !eY && eJ, e5 ? null : e$, tW && t0]
                    }),
                    isFullscreenComposer: tn,
                    isHidden: e8.isHidden,
                    trackReadState: U && !es,
                    trackShownImpressions: tc,
                    isSharedConversation: eR,
                    isSubmitDisabled: ek,
                    retainLiveModelPicker: eN && !ti,
                    followupPortalTarget: tq,
                    takeoverDisclaimerRef: tZ,
                    showConversationFollowups: null == eH && null == e4 && !eO && !ez && !tn,
                    isTemporaryChat: eO,
                    isWorkConversation: ez,
                    responseSpacerState: tb,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(rN, {
                            entries: ey,
                            historyLoader: eO || null != eH || null != e4 ? null : (0, a.jsx)(s$.a, {
                                conversationId: Z
                            }),
                            isVisible: t,
                            rendersWidgets: "floating" === to,
                            onVisibilityChange: tr
                        }, Z)
                    },
                    showVoiceStage: !tL,
                    voiceDisclaimer: e5 && !tL ? tX : void 0,
                    onSubmitAccepted: e => {
                        t_.acceptSubmit(), eX?.(e)
                    }
                }, `${ee}:${ti?"image-edit":"chat"}`)]
            }) : t1), W[60] = en, W[61] = t2, W[62] = eY, W[63] = ee, W[64] = et, W[65] = Q, W[66] = Z, W[67] = ed, W[68] = tX, W[69] = t0, W[70] = ey, W[71] = t1, W[72] = tq, W[73] = e$, W[74] = ew, W[75] = eS, W[76] = el, W[77] = e5, W[78] = e_, W[79] = eM, W[80] = es, W[81] = eo, W[82] = tn, W[83] = ti, W[84] = ei, W[85] = eR, W[86] = ek, W[87] = eO, W[88] = ez, W[89] = tc, W[90] = eX, W[91] = eI, W[92] = t_, W[93] = tY, W[94] = er, W[95] = tb, W[96] = eN, W[97] = tk, W[98] = e8.isHidden, W[99] = eH, W[100] = e4, W[101] = tt, W[102] = ec, W[103] = tW, W[104] = tL, W[105] = U, W[106] = to, W[107] = eJ, W[108] = $, W[109] = v) : v = W[109];
            let t3 = v;
            W[110] !== Z || W[111] !== es || W[112] !== ei || W[113] !== e3 || W[114] !== eH || W[115] !== e4 ? (y = void 0, W[110] = Z, W[111] = es, W[112] = ei, W[113] = e3, W[114] = eH, W[115] = e4, W[116] = y) : y = W[116];
            let t4 = y;
            W[117] !== e1 || W[118] !== Z || W[119] !== U ? (b = e => {
                U && null != e1.get(a$.b, Z) && e1.get(tp.L, Z) && (0, aJ.a)(e1, e) && (0, sn.b)(e1, Z).catch(ol)
            }, W[117] = e1, W[118] = Z, W[119] = U, W[120] = b) : b = W[120];
            let t5 = b,
                t6 = es || void 0;
            W[121] === Symbol.for("react.memo_cache_sentinel") ? (x = null, W[121] = x) : x = W[121], W[122] !== Z || W[123] !== es || W[124] !== tn || W[125] !== U ? (w = !U || tn || es ? null : (0, a.jsx)(sa.a, {
                conversationId: Z
            }), W[122] = Z, W[123] = es, W[124] = tn, W[125] = U, W[126] = w) : w = W[126], W[127] !== eV || W[128] !== Z || W[129] !== ei || W[130] !== eH || W[131] !== e4 ? (C = ei || null != eH || null != e4 || null != eV ? null : (0, a.jsx)(st, {
                conversationId: Z
            }, Z), W[127] = eV, W[128] = Z, W[129] = ei, W[130] = eH, W[131] = e4, W[132] = C) : C = W[132], W[133] !== Z || W[134] !== eM || W[135] !== ei || W[136] !== eO || W[137] !== eH || W[138] !== e4 ? (S = ei || eM || eO || null != eH || null != e4 ? null : (0, a.jsx)(sY, {
                conversationId: Z
            }), W[133] = Z, W[134] = eM, W[135] = ei, W[136] = eO, W[137] = eH, W[138] = e4, W[139] = S) : S = W[139], W[140] !== Z || W[141] !== ey || W[142] !== tA || W[143] !== eA || W[144] !== eM || W[145] !== ei || W[146] !== tk || W[147] !== eH || W[148] !== e4 || W[149] !== tI ? (_ = ei || eM || null != eH || null != e4 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(n3, {
                    conversationId: Z,
                    entries: ey,
                    turnListApi: tI
                }), (0, a.jsx)(a1.a, {
                    ready: !eA && tA && null != tI && ey.length > 0,
                    onNavigate: tk
                })]
            }), W[140] = Z, W[141] = ey, W[142] = tA, W[143] = eA, W[144] = eM, W[145] = ei, W[146] = tk, W[147] = eH, W[148] = e4, W[149] = tI, W[150] = _) : _ = W[150], W[151] !== eV || W[152] !== tP || W[153] !== tg || W[154] !== ee || W[155] !== J || W[156] !== th || W[157] !== Z || W[158] !== ev || W[159] !== tz || W[160] !== tX || W[161] !== t0 || W[162] !== ey || W[163] !== t3 || W[164] !== ew || W[165] !== eS || W[166] !== ea || W[167] !== tm || W[168] !== tT || W[169] !== tE || W[170] !== e5 || W[171] !== e6 || W[172] !== e_ || W[173] !== eA || W[174] !== eM || W[175] !== es || W[176] !== eo || W[177] !== tn || W[178] !== ei || W[179] !== td || W[180] !== tu || W[181] !== eR || W[182] !== eO || W[183] !== eF || W[184] !== ez || W[185] !== ej || W[186] !== t4 || W[187] !== tc || W[188] !== eZ || W[189] !== eC || W[190] !== eB || W[191] !== em || W[192] !== K || W[193] !== t_ || W[194] !== tQ || W[195] !== tU || W[196] !== tY || W[197] !== tb || W[198] !== e8.isChatPaneHidden || W[199] !== e2 || W[200] !== eh || W[201] !== tO || W[202] !== tH || W[203] !== eH || W[204] !== e4 || W[205] !== Y || W[206] !== tD || W[207] !== eU || W[208] !== tt || W[209] !== tf || W[210] !== tB || W[211] !== tW || W[212] !== tL || W[213] !== tJ || W[214] !== eu || W[215] !== tI || W[216] !== $ ? (j = $?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!Y && $.fullscreenContent, t3]
            }) : (0, a.jsxs)(a2.a, {
                scrollAttributionKey: tc ? ey.at(-1)?.turnKey : void 0,
                viewportOverlay: eo || ei || ez || null != eH || null != e4 || null != eV || es || tn ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(si, {
                        conversationId: Z
                    }, Z)
                }),
                hideTranscript: eo,
                active: !eM && (!eS || null != tI),
                presentation: eu ?? (ei ? "compact" : "default"),
                contentX: J,
                preserveReadingPassage: !ez && !ei,
                supportsComposerExpansion: tB && !tn && null == $,
                footerPlacement: tg ? tm : "bottom",
                followContentGrowth: !em,
                initialOffset: tT,
                preserveViewportOnContentGrowth: em,
                scrollOrigin: eh,
                onScroll: t_.onScroll,
                onUserScrollIntent: tP,
                scrollToBottomButton: !tt || tn || tL ? void 0 : {
                    isWorking: eF
                },
                threadEndContent: e5 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tK,
                        className: eG.a
                    }), null == tJ ? tX : (0, nJ.createPortal)(tX, tJ)]
                }),
                footerLeadingContent: tL ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: eG.a,
                            children: (0, a.jsx)(aX.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: tX
                    })]
                }) : t4,
                footer: t3,
                children: [ei || eM || null != eH ? null : (0, a.jsx)(rc, {
                    conversationId: Z,
                    entries: ey,
                    isConversationFetching: eA,
                    turnListApi: tI
                }), (0, a.jsxs)(nY.a.div, {
                    ref: ty,
                    style: {
                        x: tH
                    },
                    "data-chatgpt-conversation-selection-target": Z,
                    "data-rail-chat-transcript": tu || void 0,
                    className: (0, n$.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", ei && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, aV.K)(e2, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, aV.K)(e2, "conversation")
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
                        children: [ei || eM ? null : (0, a.jsx)(aU.a, {
                            conversationSource: tz
                        }), es || e8.isChatPaneHidden || eO || null != eH || null != e4 ? null : ea ?? (0, a.jsx)(s$.a, {
                            conversationId: Z
                        }), (0, a.jsx)(ot.b, {
                            conversationId: Z
                        }), (null != eH || null != e4) && eS ? (0, a.jsx)(oe, {
                            sharedConversationId: eH
                        }) : null, null == eB ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: eG.a,
                                children: eB
                            })
                        }), null == th || eM ? null : (0, a.jsx)(a3.a, {
                            conversationId: Z,
                            branchSource: {
                                conversationId: th.metadata.source_conversation_id,
                                title: th.metadata.source_conversation_title,
                                gizmoId: th.metadata.source_conversation_gizmo_id,
                                ownerId: th.metadata.source_conversation_owner_id
                            }
                        }), ew ? (0, a.jsx)(az, {
                            isFetching: eA,
                            isSharedConversation: eR,
                            onRetry: eC
                        }) : eM ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": ev,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(e9.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : eS ? (0, a.jsxs)(sV.a, {
                            value: tO,
                            children: [ei || es ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eO || null != eH || null != e4 ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(aR, {
                                        conversationId: Z
                                    })
                                }), (0, a.jsx)(aE, {
                                    entries: ey,
                                    title: K,
                                    TurnRowComponent: rk
                                })]
                            }), (0, a.jsx)(sJ.a, {
                                enabled: tY,
                                aboveComposer: tQ,
                                belowMessage: tU,
                                children: (0, a.jsx)(r2, {
                                    viewportRef: tv,
                                    isTurnActive: eF,
                                    conversationId: Z,
                                    entries: ey,
                                    readingPosition: t_,
                                    isInlinePreview: ei,
                                    onVisibleContentReady: () => tM(!0),
                                    responseSpacerState: tb
                                })
                            }), tY ? (0, a.jsx)("div", {
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
                        }), !tW && t0, (0, a.jsx)(r9.a, {
                            conversationId: ee,
                            isWorkConversation: ez
                        }), eU && !e_ ? (0, a.jsx)(s5, {
                            conversationId: Z,
                            moreDetailsEnabled: ej,
                            onAddSelectedText: eZ
                        }) : null]
                    }), ei ? null : (0, a.jsx)(ru.a, {
                        preserveResponseViewport: e => tv.current?.holdForResponse(e) ?? !1,
                        conversationId: Z,
                        initialPlacementKey: tE,
                        isActiveVoiceConversation: e5 && e6,
                        isLoadingHistory: eM,
                        latestUserTurnKey: ey.findLast(oo)?.turnKey,
                        onResponseSpacerStateChange: tx
                    }), tL ? (0, a.jsx)(nY.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tD ? a0.c : a0.b
                    }) : null]
                })]
            }), W[151] = eV, W[152] = tP, W[153] = tg, W[154] = ee, W[155] = J, W[156] = th, W[157] = Z, W[158] = ev, W[159] = tz, W[160] = tX, W[161] = t0, W[162] = ey, W[163] = t3, W[164] = ew, W[165] = eS, W[166] = ea, W[167] = tm, W[168] = tT, W[169] = tE, W[170] = e5, W[171] = e6, W[172] = e_, W[173] = eA, W[174] = eM, W[175] = es, W[176] = eo, W[177] = tn, W[178] = ei, W[179] = td, W[180] = tu, W[181] = eR, W[182] = eO, W[183] = eF, W[184] = ez, W[185] = ej, W[186] = t4, W[187] = tc, W[188] = eZ, W[189] = eC, W[190] = eB, W[191] = em, W[192] = K, W[193] = t_, W[194] = tQ, W[195] = tU, W[196] = tY, W[197] = tb, W[198] = e8.isChatPaneHidden, W[199] = e2, W[200] = eh, W[201] = tO, W[202] = tH, W[203] = eH, W[204] = e4, W[205] = Y, W[206] = tD, W[207] = eU, W[208] = tt, W[209] = tf, W[210] = tB, W[211] = tW, W[212] = tL, W[213] = tJ, W[214] = eu, W[215] = tI, W[216] = $, W[217] = j) : j = W[217], W[218] !== es || W[219] !== t5 || W[220] !== t6 || W[221] !== w || W[222] !== C || W[223] !== S || W[224] !== _ || W[225] !== j ? (T = (0, a.jsxs)("div", {
                onKeyDownCapture: t5,
                onPointerDownCapture: t5,
                onWheelCapture: t5,
                className: "contents",
                "aria-hidden": t6,
                inert: es,
                children: [x, w, C, S, _, j]
            }), W[218] = es, W[219] = t5, W[220] = t6, W[221] = w, W[222] = C, W[223] = S, W[224] = _, W[225] = j, W[226] = T) : T = W[226];
            let t7 = T,
                t8 = !ei,
                t9 = "main" === to;
            W[227] !== t8 || W[228] !== t9 ? (P = {
                presentation: "main",
                preserveActivityDisclosures: t8,
                rendersWidgets: t9
            }, W[227] = t8, W[228] = t9, W[229] = P) : P = W[229];
            let ne = !ts && (eo || es || e8.isChatPaneHidden || $?.fullscreenContent != null);
            return W[230] !== ne ? (E = (0, a.jsx)(s.b, {
                name: "conversation hidden",
                active: ne
            }), W[230] = ne, W[231] = E) : E = W[231], W[232] !== t7 ? (M = (0, a.jsx)(aq.a, {
                children: t7
            }), W[232] = t7, W[233] = M) : M = W[233], W[234] !== P || W[235] !== E || W[236] !== M ? (R = (0, a.jsxs)(d.b, {
                scope: rS,
                value: P,
                children: [E, M]
            }), W[234] = P, W[235] = E, W[236] = M, W[237] = R) : R = W[237], R
        }

        function oo(e) {
            let {
                turn: t
            } = e;
            return t.items.some(oi)
        }

        function oi(e) {
            return "user-message" === e.type
        }

        function ol() {}
        var oc = n("gCr7");
        n("i1of");
        var od = n("alJ6"),
            ou = n("u9iS"),
            oh = n("fNPc"),
            op = n("vVgo"),
            og = n("T33u"),
            om = n("EpL9");

        function of(e) {
            let {
                conversationId: t,
                courseId: n
            } = e;
            return `chatgpt-learning-course:${JSON.stringify([t,n])}`
        }
        let ov = (0, d.d)(eg.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(tL.h) && n(tL.i) && n(sl.l.activeTab$)?.tabId === of(e)
            }),
            oy = (0, tc.a)(async () => {
                let {
                    CoursePanelTab: e
                } = await Promise.all([n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(882456), n.e(736970), n.e(81461), n.e(259288), n.e(593724), n.e(818353), n.e(758379), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(46150), n.e(780567), n.e(902029)]).then(n.bind(n, "lbEC"));
                return e
            }, {
                propagateLoadError: !0
            }),
            ob = (0, om.k)("chatgpt-learning-course", oy, {
                dropDestinations: ["right"],
                isAvailable: (e, t) => "chatgpt-thread" === e.value.routeKind && (null == t || e.value.conversationId === t.conversationId),
                paneWidth: () => ({
                    defaultWidth: 480,
                    storageKey: "app-shell:learning-course-width"
                }),
                showInNewTabLauncher: !1,
                open: ox
            });

        function ox(e, t) {
            let {
                conversationId: n,
                courseId: r
            } = t, {
                preserveFocus: s = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = e.get(j.f), i = e.get(j.j), l = () => "chatgpt-thread" === e.value.routeKind && e.value.conversationId === n && e.get(ej.c)?.pathname === e.value.pathname && e.get(j.f) === o && e.get(j.j) === i;
            if (!l() || "" === r) return;
            let c = of({
                conversationId: n,
                courseId: r
            });
            e.get(ov, {
                conversationId: n,
                courseId: r
            }) ? sl.l.closeTab(e, c) : (0, sl.h)(e, ob, {
                target: "right",
                revealAndFocus: !0,
                preserveFocus: s,
                shouldOpen: l,
                id: c,
                icon: (0, a.jsx)(tl.nb, {}),
                title: e.get(nf.a).formatMessage({
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
        var ow = n("MgyE"),
            oC = n("gyrn"),
            oS = n("ckwE"),
            o_ = n("kHi2");

        function oI(e) {
            let t, n = (0, r.c)(3),
                {
                    children: s
                } = e,
                [o] = (0, m.useState)(oj);
            return n[0] !== o || n[1] !== s ? (t = (0, a.jsx)(aT.a, {
                value: o,
                children: s
            }), n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }

        function oj() {
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

        function oT(e) {
            let t, n, s, o = (0, r.c)(8),
                {
                    children: i,
                    courseChatId: l
                } = e,
                c = (0, d.y)(eg.a);
            o[0] !== l || o[1] !== c ? (t = "chatgpt-thread" === c.value.routeKind && c.value.conversationId === l ? c.get(o_.b) : void 0, o[0] = l, o[1] = c, o[2] = t) : t = o[2];
            let u = t;
            return o[3] !== i ? (n = (0, a.jsx)(oI, {
                children: i
            }), o[3] = i, o[4] = n) : n = o[4], o[5] !== u || o[6] !== n ? (s = (0, a.jsx)(oS.a, {
                binding: u,
                children: n
            }), o[5] = u, o[6] = n, o[7] = s) : s = o[7], s
        }
        var oP = n("MDmT"),
            oE = n("Fjze");

        function oA(e) {
            let t, n, a, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = e,
                i = (0, d.y)(eT.a),
                l = null != o;
            s[0] !== i || s[1] !== o ? (t = () => {
                null != o && (no.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: o
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(oM), (0, ec.a)(i, oE.a, {
                    sharedConversationId: o
                }))
            }, s[0] = i, s[1] = o, s[2] = t) : t = s[2];
            let c = (0, m.useEffectEvent)(t);
            return s[3] !== c ? (n = () => {
                c()
            }, s[3] = c, s[4] = n) : n = s[4], s[5] !== l ? (a = [l], s[5] = l, s[6] = a) : a = s[6], (0, m.useEffect)(n, a), null
        }

        function oM() {}
        var oR = n("GigQ"),
            ok = n("JKdL"),
            oN = n("d107"),
            oO = n("FGv0"),
            oF = n("r9i9"),
            oG = n("tdfh"),
            oz = n("uQqo"),
            oB = n("yi1v"),
            oL = n("Mr9N");

        function oD(e) {
            let t, s, o, i, l, c = (0, r.c)(16),
                {
                    data: u
                } = e,
                h = (0, d.y)(eT.a),
                p = (0, f.a)();
            c[0] !== p ? (t = p.formatMessage(ew.a.headerShare), c[0] = p, c[1] = t) : t = c[1];
            let g = t,
                [v, y] = (0, m.useState)(!1);
            return c[2] !== u || c[3] !== v || c[4] !== h ? (s = () => {
                v || (y(!0), (async function(e, t) {
                    let a = t.sharedPost,
                        [r] = a?.attachments[0]?.kind === "media_generation" ? (0, oz.a)(a, (0, oz.b)(a)) : [],
                        s = () => (0, oF.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId, 1 / 0, void 0, (0, nQ.b)(e.get, t.dialogProps.serverConversationId)),
                        o = crypto.randomUUID();
                    (0, s7.c)(e, {
                        attachmentType: t.attachmentType,
                        contentType: t.contentType,
                        shareId: t.shareId,
                        shareSessionId: o
                    });
                    let i = t.dialogProps.receiverShareLink;
                    if ((0, oB.a)() && null != i && ("conversation" === i.contentType || "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE" === t.attachmentType)) {
                        if ("unsupported" !== await (0, oB.b)(e, {
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
                        if ("conversation" === i.contentType) return void(0, ns.f)(e, oG.a, {
                            ...t.dialogProps,
                            shareSessionId: o
                        })
                    }
                    if (i?.contentType === "conversation") {
                        let a = (0, s7.b)(e, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                shareId: t.shareId,
                                shareSessionId: o,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                                usedExistingLink: !0,
                                omitSheetType: !0
                            }),
                            r = await (0, oO.a)(Promise.resolve(i.shareLinkUrl));
                        if (a({
                                result: r ? "link-copied" : "copy-failed",
                                shareId: t.shareId
                            }), r) {
                            let {
                                showConversationShareCopiedToast: t
                            } = await n.e(555532).then(n.bind(n, "euaP"));
                            t(e, null, !0 === i.isWorkspaceOnly)
                        } else(0, ns.f)(e, oG.a, {
                            ...t.dialogProps,
                            previewTurns: s(),
                            recoveryShareLink: i,
                            shareSessionId: o
                        });
                        return
                    }(0, ns.f)(e, oG.a, {
                        ...t.dialogProps,
                        image: r?.src == null ? void 0 : {
                            alt: t.dialogProps.title ?? "",
                            item: r,
                            previewSrc: r.src
                        },
                        previewTurns: null != r ? void 0 : s(),
                        privacyNotices: (0, oF.k)({
                            conversation: t.conversation,
                            projectId: null
                        }),
                        shareSessionId: o
                    })
                })(h, u).finally(() => y(!1)))
            }, c[2] = u, c[3] = v, c[4] = h, c[5] = s) : s = c[5], c[6] !== v ? (o = v ? null : (0, a.jsx)(eI.a, {
                asset: oL.a
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
        var oH = n("MVHH"),
            oW = n("rhKI"),
            oq = n("PP3M"),
            oK = n("jAnS"),
            oU = n("CFOe"),
            oV = n("WFY2"),
            oQ = n("JNtf"),
            o$ = n("mUDD");

        function oY(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g, m, f = (0, r.c)(31),
                {
                    canSave: v,
                    isPending: y,
                    onCancel: b,
                    onClose: x,
                    onSave: w
                } = e;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.temporaryChat.save.close",
                defaultMessage: "Close"
            }), f[0] = t) : t = f[0], f[1] !== y || f[2] !== x ? (n = e => {
                e || y || x()
            }, f[1] = y, f[2] = x, f[3] = n) : n = f[3];
            let C = !y;
            f[4] !== v || f[5] !== w ? (s = e => {
                e.preventDefault(), v && w()
            }, f[4] = v, f[5] = w, f[6] = s) : s = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(oQ.e, {
                children: (0, a.jsx)(eb.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?"
                })
            }), f[7] = o) : o = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(o$.e, {
                children: (0, a.jsx)(o$.d, {
                    className: "select-none",
                    title: o,
                    subtitle: (0, a.jsx)(oQ.d, {
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
            let S = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save"
            }), f[16] = u) : u = f[16], f[17] !== y || f[18] !== S ? (h = (0, a.jsx)(ti.a, {
                color: "primary",
                disabled: S,
                loading: y,
                type: "submit",
                children: u
            }), f[17] = y, f[18] = S, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(o$.e, {
                children: (0, a.jsxs)(o$.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== s ? (g = (0, a.jsxs)(o$.b, {
                as: "form",
                onSubmit: s,
                children: [i, p]
            }), f[23] = p, f[24] = s, f[25] = g) : g = f[25], f[26] !== y || f[27] !== g || f[28] !== n || f[29] !== C ? (m = (0, a.jsx)(oQ.a, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: C,
                size: "narrow",
                children: g
            }), f[26] = y, f[27] = g, f[28] = n, f[29] = C, f[30] = m) : m = f[30], m
        }

        function oJ(e) {
            (0, tn.e)(e).catch(() => {
                oV.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function oZ(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(oX, {
                        conversationId: s
                    })
                })]
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function oX(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return (0, d.z)(oq.e) ? (n[0] !== s ? (t = (0, a.jsx)(o0, {
                conversationId: s
            }), n[0] = s, n[1] = t) : t = n[1], t) : null
        }

        function o0(e) {
            let t, n, s, o, i, l, c, u, h, p, g, y, b, x = (0, r.c)(49),
                {
                    conversationId: w
                } = e,
                C = (0, d.y)(eT.a),
                S = (0, f.a)(),
                _ = (0, v.$)(),
                [I, j] = (0, m.useState)(!1),
                [T, P] = (0, m.useState)(!1),
                [E, A] = (0, m.useState)(!1),
                [M, R] = (0, m.useState)(!1),
                k = (0, m.useRef)(!1),
                N = (0, d.z)(nc.p).data,
                O = (0, d.x)(tp.j, w),
                F = (0, d.x)(tp.Y, w),
                G = (0, d.x)(tp.J, w),
                z = (0, d.x)(e6.j, w);
            x[0] !== w || x[1] !== C ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (C.get(tp.J, w) || C.get(e6.j, w) || t !== C.get(tp.j, w) || n !== C.get(tp.Y, w)) throw Error("Cannot save an unavailable temporary chat message");
                    return no.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: o5
                    }).then(o4)
                },
                retry: o3
            }, x[0] = w, x[1] = C, x[2] = t) : t = x[2];
            let {
                mutateAsync: B,
                isPending: L
            } = (0, ey.a)(t), D = null != O && null != F && !G && !z && !L && !T;
            x[3] !== S ? (n = S.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat"
            }), x[3] = S, x[4] = n) : n = x[4];
            let H = n;
            x[5] !== N?.eligibleAnnouncements ? (s = N?.eligibleAnnouncements?.includes(nc.h), x[5] = N?.eligibleAnnouncements, x[6] = s) : s = x[6];
            let W = !0 === s,
                q = !M && (E || W && D);
            x[7] !== w || x[8] !== E || x[9] !== C || x[10] !== q ? (o = () => {
                if (!q || E || k.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || k.current || (k.current = !0, (0, ec.a)(C, oH.Bb, {
                        personalizationMode: (0, oW.a)((0, oq.k)(C, w))
                    }), A(!0), oJ(C))
                }), () => {
                    e = !0
                }
            }, i = [w, E, C, q], x[7] = w, x[8] = E, x[9] = C, x[10] = q, x[11] = o, x[12] = i) : (o = x[11], i = x[12]), (0, m.useEffect)(o, i), x[13] !== C ? (l = () => {
                R(!0), k.current || (k.current = !0, oJ(C))
            }, x[13] = C, x[14] = l) : l = x[14];
            let V = l;
            x[15] !== D || x[16] !== w || x[17] !== S || x[18] !== _ || x[19] !== B || x[20] !== C || x[21] !== F || x[22] !== O ? (c = async function() {
                let e;
                if (!D || null == O || null == F) return;
                let t = (0, oW.a)((0, oq.k)(C, w));
                (0, ec.a)(C, oH.Cb, {
                    personalizationMode: t
                });
                try {
                    e = (await B({
                        sourceConversationId: O,
                        selectedLeafId: F
                    })).conversation_id
                } catch (e) {
                    (0, ec.a)(C, oH.Db, {
                        personalizationMode: t,
                        failureCategory: (0, oW.b)(e)
                    }), C.get(U.f).danger(S.formatMessage({
                        id: "chatgptConversations.temporaryChat.save.error",
                        defaultMessage: "Couldn't save this chat. Please try again."
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.temporaryChat.save.error"
                        }
                    });
                    return
                }
                P(!0), j(!1), (0, eS.H)(C), (0, eS.K)(C, O, "remove"), (0, eS.K)(C, e, "refresh"), _((0, oK.c)(e), {
                    replace: !0
                }), C.get(U.f).success(S.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history."
                })), no.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: F
                    }
                }).then(o2).then(t => {
                    (0, tp.bc)({
                        scope: C,
                        conversationId: e,
                        title: t
                    }), C.query.setData(tn.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, eS.H)(C), (0, eS.K)(C, e, "refresh")
                }).catch(o1)
            }, x[15] = D, x[16] = w, x[17] = S, x[18] = _, x[19] = B, x[20] = C, x[21] = F, x[22] = O, x[23] = c) : c = x[23];
            let Q = c,
                $ = !D;
            x[24] !== w || x[25] !== C || x[26] !== q ? (u = () => {
                (0, ec.a)(C, oH.Fb, {
                    personalizationMode: (0, oW.a)((0, oq.k)(C, w)),
                    coachMarkVisible: q
                }), j(!0)
            }, x[24] = w, x[25] = C, x[26] = q, x[27] = u) : u = x[27], x[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(K.b, {
                icon: {
                    16: tl.pb,
                    20: tl.qb
                }
            }), x[28] = h) : h = x[28], x[29] !== H || x[30] !== $ || x[31] !== u ? (p = (0, a.jsx)(ti.a, {
                "aria-label": H,
                color: "toolbar",
                disabled: $,
                size: "toolbar",
                uniform: !0,
                onClick: u,
                children: h
            }), x[29] = H, x[30] = $, x[31] = u, x[32] = p) : p = x[32];
            let Y = p;
            return x[33] !== V || x[34] !== S || x[35] !== H || x[36] !== Y || x[37] !== q ? (g = q ? (0, a.jsx)(oU.a, {
                align: "end",
                description: (0, a.jsx)(eb.a, {
                    id: "chatgptConversations.temporaryChat.save.coachmark.description",
                    defaultMessage: "Want to keep this chat? You can now save it to your history."
                }),
                dismissLabel: S.formatMessage({
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
            }) : (0, a.jsx)(ts.a, {
                content: H,
                children: Y
            }), x[33] = V, x[34] = S, x[35] = H, x[36] = Y, x[37] = q, x[38] = g) : g = x[38], x[39] !== D || x[40] !== w || x[41] !== Q || x[42] !== I || x[43] !== L || x[44] !== C ? (y = I ? (0, a.jsx)(oY, {
                canSave: D,
                isPending: L,
                onCancel: () => {
                    (0, ec.a)(C, oH.Ab, {
                        personalizationMode: (0, oW.a)((0, oq.k)(C, w))
                    })
                },
                onClose: () => j(!1),
                onSave: () => void Q()
            }) : null, x[39] = D, x[40] = w, x[41] = Q, x[42] = I, x[43] = L, x[44] = C, x[45] = y) : y = x[45], x[46] !== g || x[47] !== y ? (b = (0, a.jsxs)(a.Fragment, {
                children: [g, y]
            }), x[46] = g, x[47] = y, x[48] = b) : b = x[48], b
        }

        function o1() {}

        function o2(e) {
            return a4.object({
                title: a4.string()
            }).parse(e).title
        }

        function o3(e, t) {
            return e < 1 && t instanceof eV.FetchError && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function o4(e) {
            return a4.object({
                conversation_id: a4.string().min(1)
            }).parse(e)
        }

        function o5(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var o6 = n("J8FU"),
            o7 = n("Aluh"),
            o8 = n("mG6J");

        function o9(e) {
            let t, n, s = (0, r.c)(14),
                {
                    conversationId: o,
                    shouldBlockExternalEgress: i,
                    widgets: l
                } = e,
                c = (0, d.z)(o7.b);
            if (i) return null;
            if (s[0] !== c || s[1] !== o || s[2] !== l) {
                let e, n, r;
                s[4] !== c || s[5] !== o ? (e = e => c.has((0, rX.e)(o, e.messageId)), s[4] = c, s[5] = o, s[6] = e) : e = s[6];
                let i = l.filter(e),
                    d = `chatgpt:${o}`;
                s[7] !== d ? (n = (0, u.Se)(d), s[7] = d, s[8] = n) : n = s[8];
                let h = n;
                s[9] !== h || s[10] !== o ? (r = e => (0, a.jsx)(o8.b, {
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
        var ie = n("JVSG"),
            it = {
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
            ia = n("YRWn");

        function ir() {
            let e, t, n, s, o, i, l, c, u, h, p, g, f, y, x, C, S = (0, r.c)(46),
                _ = (0, v.$)(),
                I = (0, m.useContext)(X.a);
            S[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, S[0] = e) : e = S[0];
            let j = (0, d.x)(w.a, e),
                T = (0, d.z)(P.a),
                E = (0, v.cb)() ?? 0,
                {
                    conversationId: A
                } = (0, v.db)(),
                {
                    search: M,
                    state: R
                } = (0, v.Y)(),
                k = (0, d.x)(th.a, A ?? null),
                N = (0, d.x)(null == A || t3.e, k ?? A ?? ""),
                O = R?.archivedConversationPreview === !0;
            S[1] !== M ? (t = (0, oK.i)(M), S[1] = M, S[2] = t) : t = S[2];
            let F = t;
            S[3] !== O || S[4] !== F || S[5] !== A ? (n = null == A || (0, tz.e)(A) || F || O ? null : A, S[3] = O, S[4] = F, S[5] = A, S[6] = n) : n = S[6];
            let {
                data: G
            } = (0, d.x)(tn.chatGptConversationQueryById$, n);
            if (null == A) {
                let e;
                return S[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(v.l, {
                    to: "/",
                    replace: !0
                }), S[7] = e) : e = S[7], e
            }
            S[8] !== k || S[9] !== A ? (s = k ?? (0, tz.d)(A), S[8] = k, S[9] = A, S[10] = s) : s = S[10];
            let z = s,
                B = j.isCapable && !T && !N && null != G;
            S[11] !== _ ? (o = e => (_((0, oK.c)(e)), !0), S[11] = _, S[12] = o) : o = S[12];
            let L = o;
            S[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(b.a, {}), l = (0, a.jsx)(q.a.Surface, {}), S[13] = i, S[14] = l) : (i = S[13], l = S[14]), S[15] !== O ? (c = null, S[15] = O, S[16] = c) : c = S[16], S[17] !== z || S[18] !== O || S[19] !== F ? (u = F || O ? null : (0, a.jsx)(e4.a, {
                conversationId: z
            }), S[17] = z, S[18] = O, S[19] = F, S[20] = u) : u = S[20];
            let D = I ?? (B ? L : null),
                H = `${z}:${F}`;
            S[21] === Symbol.for("react.memo_cache_sentinel") ? (h = void 0, S[21] = h) : h = S[21], S[22] !== z || S[23] !== O || S[24] !== F || S[25] !== H || S[26] !== E ? (p = (0, a.jsx)(is, {
                conversationId: z,
                viewActivation: E,
                isArchivedPreview: O,
                isReadOnlyPreview: !1,
                banner: h,
                isTemporaryChat: F,
                sharedConversationId: null
            }, H), S[22] = z, S[23] = O, S[24] = F, S[25] = H, S[26] = E, S[27] = p) : p = S[27], S[28] !== p || S[29] !== D ? (g = (0, a.jsx)(X.a, {
                value: D,
                children: p
            }), S[28] = p, S[29] = D, S[30] = g) : g = S[30], S[31] !== g || S[32] !== c || S[33] !== u ? (f = (0, a.jsxs)(a.Fragment, {
                children: [i, l, c, u, g]
            }), S[31] = g, S[32] = c, S[33] = u, S[34] = f) : f = S[34];
            let W = f;
            S[35] !== W || S[36] !== z || S[37] !== O || S[38] !== F ? (y = F || O ? W : (0, a.jsx)(te, {
                conversationId: z,
                children: W
            }), S[35] = W, S[36] = z, S[37] = O, S[38] = F, S[39] = y) : y = S[39];
            let K = y;
            return S[40] !== W || S[41] !== K ? (x = K, S[40] = W, S[41] = K, S[42] = x) : x = S[42], S[43] !== z || S[44] !== x ? (C = (0, a.jsx)(tv.a, {
                conversationId: z,
                children: x
            }), S[43] = z, S[44] = x, S[45] = C) : C = S[45], C
        }

        function is(e) {
            let t, n, l, b, w, q, X, ey, eb, ex, eC, e_, eI, ej, eT, eP, eE, eA, eM, eR, e4, e9, te, ts, to, ti, tl, tc, td, th, tg, tm, tv, ty, tx, tw, tC, tI, tj, tL, tD, tH, tW, tq, tK, tU, tV, tQ, t$, tJ, tX, t5, t7, t8, t9, ne, nt, nn, na, nr, ns, no, ni, nl, nc, nd, nu, nh, np, ng, nm, nf, nv, ny, nb, nx, nw, nC, nS, n_, nI, nj, nT, nP, nA, nk, nO, nz, nB, nL, nW, n$, nY, nJ, nZ, nX, n0, n1, n2, n3, n4, n5, n6, n7, n8, n9 = (0, r.c)(607),
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
                    isReadOnlyPreview: au,
                    onSubmitAccepted: ah,
                    isTemporaryChat: ap,
                    sharedConversationId: ag,
                    sharedPostContinuation: am,
                    requiredSystemHints: av,
                    routePattern: ay,
                    composerLeadingContent: ab,
                    headerLeadingContent: ax,
                    hideHeaderTitle: aw,
                    banner: aC,
                    onRetryMissingConversation: aS,
                    sharedProjectConversation: a_,
                    workspace: aI
                } = e,
                aj = void 0 === at ? 0 : at,
                aT = void 0 !== an && an,
                aP = void 0 !== ar && ar,
                aE = void 0 === ao || ao,
                aA = void 0 !== aw && aw,
                aM = (0, d.y)(eg.a),
                aR = (0, m.useContext)(I.a),
                ak = (0, d.x)(af.f, aR),
                aN = (0, d.z)(null != ak && P.a);
            n9[0] !== aR || n9[1] !== ae ? (t = {
                auth: aR,
                conversationId: ae
            }, n9[0] = aR, n9[1] = ae, n9[2] = t) : t = n9[2];
            let aO = (0, d.x)(null != aR && !aR.isLoading && null === aR.authMethod && af.h, t),
                {
                    conversationId: aF
                } = (0, v.db)();
            n9[3] !== ae || n9[4] !== aP || n9[5] !== aF || n9[6] !== aM || n9[7] !== aI ? (n = () => (0, tz.e)(aP || null != aI || null == aM.get(tp.j, ae) ? ae : aF ?? ""), n9[3] = ae, n9[4] = aP, n9[5] = aF, n9[6] = aM, n9[7] = aI, n9[8] = n) : n = n9[8];
            let [aG, az] = (0, m.useState)(n);
            n9[9] !== aG || n9[10] !== ae || n9[11] !== aM ? (l = () => aG && !aM.get(oc.b, ae) ? ae : null, n9[9] = aG, n9[10] = ae, n9[11] = aM, n9[12] = l) : l = n9[12];
            let [aB] = (0, m.useState)(l), aL = null != ag || null != ak && !(void 0 !== am && am && aN);
            n9[13] !== ae || n9[14] !== aT || n9[15] !== aP || n9[16] !== aL || n9[17] !== aM ? (b = () => {
                if (!aL && !aT && !aP) return (0, e1.b)(aM, ae)
            }, w = [ae, aT, aP, aL, aM], n9[13] = ae, n9[14] = aT, n9[15] = aP, n9[16] = aL, n9[17] = aM, n9[18] = b, n9[19] = w) : (b = n9[18], w = n9[19]), (0, m.useEffect)(b, w);
            let aD = (0, d.x)(tT.a, ae),
                aH = aL ? null : aD;
            n9[20] !== ag ? (q = () => null == ag ? null : (0, tz.b)(), n9[20] = ag, n9[21] = q) : q = n9[21];
            let [aW] = (0, m.useState)(q), aq = aW ?? ae;
            n9[22] !== aq ? (X = (0, em.o)({
                routeKind: "chatgpt-thread",
                conversationId: aq
            }), n9[22] = aq, n9[23] = X) : X = n9[23];
            let aK = null != (0, d.x)(ee.c, X);
            n9[24] !== aq || n9[25] !== av || n9[26] !== aM ? (ey = () => {
                if (null != av && 0 !== av.length) return (0, sg.b)(aM, aq, av)
            }, eb = [aq, av, aM], n9[24] = aq, n9[25] = av, n9[26] = aM, n9[27] = ey, n9[28] = eb) : (ey = n9[27], eb = n9[28]), (0, m.useEffect)(ey, eb);
            let aU = (0, m.useRef)(null),
                [aV, aQ] = (0, m.useState)(null),
                [a$, aY] = (0, m.useState)(null);
            n9[29] === Symbol.for("react.memo_cache_sentinel") ? (ex = () => () => aY(null), n9[29] = ex) : ex = n9[29], n9[30] !== aj ? (eC = [aj], n9[30] = aj, n9[31] = eC) : eC = n9[31], (0, m.useLayoutEffect)(ex, eC);
            let [aJ, aZ] = (0, m.useState)(null), aX = a$?.activation === aj ? a$.messageId : null, a0 = aJ === aj, a1 = (0, m.useRef)(null);
            n9[32] === Symbol.for("react.memo_cache_sentinel") ? (e_ = () => {
                let e = new AbortController;
                return a1.current = e, () => e.abort()
            }, n9[32] = e_) : e_ = n9[32], n9[33] !== aj ? (eI = [aj], n9[33] = aj, n9[34] = eI) : eI = n9[34], (0, m.useLayoutEffect)(e_, eI);
            let a2 = (0, f.a)(),
                a3 = (0, v.$)(),
                a4 = (0, eH.d)(),
                a5 = (0, d.x)(tp.j, ae);
            n9[35] !== aM ? (ej = e => {
                (0, e2.c)(aM, e)
            }, n9[35] = aM, n9[36] = ej) : ej = n9[36];
            let a6 = (0, m.useEffectEvent)(ej);
            n9[37] !== a5 || n9[38] !== a6 ? (eT = () => () => {
                null != a5 && a6(a5)
            }, n9[37] = a5, n9[38] = a6, n9[39] = eT) : eT = n9[39], n9[40] !== a5 ? (eP = [a5], n9[40] = a5, n9[41] = eP) : eP = n9[41], (0, m.useEffect)(eT, eP);
            let a7 = (0, d.x)(nQ.a, ae),
                a8 = (0, d.x)(tp.N, ae),
                a9 = (0, d.x)(tn.chatGptConversationQueryById$, aL || ap && null != a8 ? null : a5);
            (0, d.x)(aL ? null : tr.a, a5);
            let re = (0, d.x)(!aO && t3.e, ae),
                rt = a5 ?? ae,
                rn = (0, d.x)(tp.C, ae),
                ra = (0, d.x)(tp.y, ae),
                rr = (0, d.x)(tp.T, ae),
                rs = (0, d.x)(tp.D, ae),
                ro = (0, d.x)(tp.O, ae),
                ri = (0, d.x)(tp.ab, ae),
                rl = (0, d.x)(tp.X, ae),
                rc = (0, d.x)(tp.Z, ae),
                rd = (0, d.x)(nH.a, ae);
            n9[42] !== a2 || n9[43] !== rd ? (eE = rd ?? a2.formatMessage(ew.a.newChat), n9[42] = a2, n9[43] = rd, n9[44] = eE) : eE = n9[44];
            let ru = eE,
                rh = (0, d.x)(tp.E, ae),
                rp = (0, d.x)(tp.eb, ae),
                rg = (0, d.x)(tp.fb, ae),
                rm = (0, d.x)(tn.n, ag),
                rf = (0, m.useRef)(null),
                rv = rm.isSuccess && null != rm.data ? ag : null;
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
                rw = (0, d.x)(e6.n, ae),
                rC = (0, d.x)(e6.r, ae),
                rS = (0, d.x)(e6.o, ae),
                r_ = (0, d.x)(e6.j, ae),
                rI = (0, d.x)(tp.cb, ae),
                rj = (0, d.x)(e6.B, ae);
            n9[52] !== ri ? (e4 = (0, tp.Bb)(ri), n9[52] = ri, n9[53] = e4) : e4 = n9[53];
            let rT = e4,
                rP = (0, d.x)(tE, ae),
                rE = (0, d.z)(T.v),
                rM = (0, d.z)(T.s),
                rR = (0, d.z)(T.u),
                rk = (0, d.z)(T.n),
                rN = (0, d.z)(T.b),
                rO = (0, d.z)(T.o),
                rF = (0, d.z)(es.pagesEnabled$);
            n9[54] === Symbol.for("react.memo_cache_sentinel") ? (e9 = (0, B.a)(), n9[54] = e9) : e9 = n9[54];
            let rG = (0, eN.f)(e9);
            n9[55] === Symbol.for("react.memo_cache_sentinel") ? (te = (0, et.b)(), n9[55] = te) : te = n9[55];
            let rz = (0, eN.f)(te),
                rB = null != a8,
                rL = (0, d.z)(oC.f),
                rD = aL ? rm : a9;
            aG && null != rD.data && az(!1);
            let rH = aG && rB && null == rD.data,
                rW = rD.isLoading || !rH && rD.isError;
            n9[56] !== aV || n9[57] !== aq || n9[58] !== rW || n9[59] !== aL || n9[60] !== ap || n9[61] !== aM ? (ts = (e, t, n, a) => {
                !(e || aM.get(ep.a)) && ((0, e6.b)(aM, aq, t, void 0, n, a), aV?.focus(), aL || rW || (0, tt.f)(aM, aq, {
                    isTemporaryChat: ap
                }))
            }, n9[56] = aV, n9[57] = aq, n9[58] = rW, n9[59] = aL, n9[60] = ap, n9[61] = aM, n9[62] = ts) : ts = n9[62];
            let rq = ts;
            n9[63] !== ae || n9[64] !== ak ? (ti = null == (to = null == ak ? null : (0, oR.a)(ak, ae)) ? void 0 : (0, nV.a)(to), n9[63] = ae, n9[64] = ak, n9[65] = to, n9[66] = ti) : (to = n9[65], ti = n9[66]);
            let rK = ti,
                rU = to ?? rD.data,
                rV = rh ? rp : rU?.title,
                rQ = (0, d.z)(j.h),
                r$ = (0, d.z)(j.g),
                rY = "chatgpt-thread" === aM.value.routeKind && aM.value.workSideChat?.conversationId === ae,
                rJ = rU?.conversation_origin ?? ra ?? (null != aI || rY ? "tpp" : null),
                rZ = "tpp" === rJ,
                rX = rZ && "denied" === rE.status && "go-plan" === rE.reason,
                r0 = (0, d.z)(eF.e),
                r1 = (0, v.Y)(),
                r2 = r1.state;
            (0, d.z)(ev.b);
            let r3 = (0, d.x)(eO.e, "3901104270") && r2?.openGoalPlan === !0,
                r4 = (0, eD.a)();
            n9[67] !== rJ ? (tl = (0, F.q)(rJ), n9[67] = rJ, n9[68] = tl) : tl = n9[68];
            let r5 = tl,
                r6 = (0, d.z)(t1.b),
                r7 = (0, d.z)(!!r5 && T.w),
                r8 = void 0 !== au && au || r7,
                r9 = null == r0 || r0.isFullWidth ? void 0 : r0.width ?? 420,
                se = !0 === (0, d.z)(r5 ? null : e$.d),
                st = (0, d.z)(r5 ? eh.b : eh.a),
                sn = !r5 && st,
                sa = !rz || rO && !r5,
                sr = !aL && rO && !r5,
                ss = sr && rk,
                so = aL && rU?.is_read_only === !0 || a_?.is_read_only === !0;
            n9[69] !== ae || n9[70] !== aL || n9[71] !== aM ? (tc = () => null, n9[69] = ae, n9[70] = aL, n9[71] = aM, n9[72] = tc) : tc = n9[72];
            let [si] = (0, m.useState)(tc), sl = rU?.gizmo_id ?? rr ?? si?.gizmoId ?? null;
            n9[73] !== sl || n9[74] !== aL ? (td = aL || null == sl || (0, tF.a)(sl) ? null : sl, n9[73] = sl, n9[74] = aL, n9[75] = td) : td = n9[75];
            let sc = td,
                sd = (0, d.x)(e8, aq);
            n9[76] !== rU || n9[77] !== ae || n9[78] !== ru || n9[79] !== r1.pathname || n9[80] !== ag || n9[81] !== ak ? (th = (0, tu.d)({
                conversation: rU,
                conversationId: ae,
                conversationTitle: ru,
                pathname: r1.pathname,
                sharedConversationId: ag,
                sharedPost: ak
            }), n9[76] = rU, n9[77] = ae, n9[78] = ru, n9[79] = r1.pathname, n9[80] = ag, n9[81] = ak, n9[82] = th) : th = n9[82];
            let su = th,
                sh = !rR && null == rU && null == si,
                sp = null != a5 && !re && !sh && (rR || rM),
                sm = null;
            aL || (sm = null != rU ? (0, eS.B)(rU) : (0, tF.a)(rr) ? rr : si?.projectId ?? null);
            let sf = (0, d.x)(eZ.c, aL ? null : ae),
                sv = aL || r5 || null != sm || sf || null == sd ? sc : sd.id;
            n9[83] !== aq || n9[84] !== sv || n9[85] !== r1.pathname ? (tg = {
                gizmoId: sv,
                conversationId: aq,
                visitKey: r1.pathname
            }, n9[83] = aq, n9[84] = sv, n9[85] = r1.pathname, n9[86] = tg) : tg = n9[86];
            let sy = (0, d.x)(ou.d, tg),
                {
                    data: sb
                } = (0, i.a)({
                    enabled: null != sm,
                    queryFn: () => {
                        if (null == sm) throw Error("Expected a ChatGPT project id");
                        return (0, O.c)(sm)
                    },
                    queryKey: (0, eS.E)(sm ?? ""),
                    staleTime: eL.b.ONE_MINUTE
                }),
                sx = null != sm && (sb?.gizmo.share_recipient !== "private" || (sb?.gizmo.sharing?.subjects?.length ?? 0) > 0);
            n9[87] !== rU?.context_scopes || n9[88] !== sb?.gizmo.gizmo_snorlax_type ? (tm = rU?.context_scopes?.includes("HEALTH") === !0 || sb?.gizmo.gizmo_snorlax_type === "potion", n9[87] = rU?.context_scopes, n9[88] = sb?.gizmo.gizmo_snorlax_type, n9[89] = tm) : tm = n9[89];
            let sw = tm,
                sC = (0, op.a)(rU?.context_scopes, {
                    projectType: sb?.gizmo.gizmo_snorlax_type,
                    projectId: sm,
                    lockedProjectId: rL?.projectId
                }),
                sS = re || sx || sw || sC;
            n9[90] !== sb?.gizmo.display.name || n9[91] !== sb?.gizmo.display.name.trim ? (tv = sb?.gizmo.display.name.trim() || null, n9[90] = sb?.gizmo.display.name, n9[91] = sb?.gizmo.display.name.trim, n9[92] = tv) : tv = n9[92];
            let s_ = tv,
                sI = sb?.gizmo.display.theme,
                sj = sb?.gizmo.display.emoji;
            n9[93] !== sb ? (ty = "shared" === (0, tG.b)(sb) ? (0, a.jsx)(K.b, {
                icon: {
                    assets: {
                        16: it,
                        20: ia.a
                    }
                }
            }) : void 0, n9[93] = sb, n9[94] = ty) : ty = n9[94], n9[95] !== sI || n9[96] !== sj || n9[97] !== ty ? (tx = (0, a.jsx)(ed.a, {
                className: "icon-leading",
                size: "leading",
                color: sI,
                icon: sj,
                sharedIcon: ty
            }), n9[95] = sI, n9[96] = sj, n9[97] = ty, n9[98] = tx) : tx = n9[98];
            let sT = tx,
                sP = (0, d.x)(tp.i, ae),
                sE = sP?.metadata ?? rU?.context_truncation_continuation,
                sA = aL || ap || null != a_ || null == rQ || rU?.owner?.user_id == null || null == sm || rU.owner.user_id === (r$ ? rQ.split("__")[0] : rQ) ? null : (0, nF.d)(sm, rU.conversation_id, rU.owner.user_id),
                sM = !aL && !aT && !r8,
                sR = (0, d.x)(sM ? oP.c : null, ae),
                sk = sR?.isReviewing === !0,
                sN = null == sR ? a8 : sR.conversation.mapping,
                sO = null == sR ? rn : sR.conversation.current_node,
                sF = null == a8 ? rU : null,
                sG = sN ?? sF?.mapping,
                sz = (0, eN.i)();
            n9[99] !== sG || n9[100] !== sz ? (tw = function(e, t) {
                if (null != e && Object.values(e).some(e => e?.message != null && (0, oh.b)(e.message))) return () => (0, eN.d)(t, "2347981323").get("enabled", !1)
            }(sG, sz), n9[99] = sG, n9[100] = sz, n9[101] = tw) : tw = n9[101];
            let sB = tw,
                sL = (0, d.z)(null != sB ? eU.h : void 0),
                sD = (0, d.x)(null != sB && !aL && !aT && !sk && eq.a, ae),
                sH = (0, d.z)(sD ? eK.a : void 0);
            n9[102] === Symbol.for("react.memo_cache_sentinel") ? (tC = (0, ta.a)(), n9[102] = tC) : tC = n9[102];
            let sW = tC;
            n9[103] === Symbol.for("react.memo_cache_sentinel") ? (tI = new WeakMap, n9[103] = tI) : tI = n9[103];
            let sq = tI;
            n9[104] !== st || n9[105] !== sn || n9[106] !== sE || n9[107] !== rJ || n9[108] !== sO || n9[109] !== sN || n9[110] !== r6 || n9[111] !== sB || n9[112] !== sF || n9[113] !== aT || n9[114] !== aL || n9[115] !== rT || n9[116] !== r5 || n9[117] !== ro || n9[118] !== rw || n9[119] !== rS || n9[120] !== rx || n9[121] !== rb || n9[122] !== rC || n9[123] !== sk || n9[124] !== aM.get || n9[125] !== sR?.isEntering || n9[126] !== a7 || n9[127] !== ri || n9[128] !== sH || n9[129] !== sL ? (tj = () => sW({
                conversation: sF,
                contextContinuation: sE,
                clinicalSearchEnabled: sn,
                clinicalCitationsEnabled: st,
                enableCloudBrowserActivity: r6,
                conversationOrigin: rJ,
                enableVoiceImageLoadingFix: sB,
                voiceImageSessionId: sL,
                voiceImageGenerationSpawnIds: sH,
                enableImageGenerationLoadingState: !aL && !aT && !sk && "error" !== ri,
                getRenderTelemetry: e => (0, o6.c)(aM.get, e),
                isWorkConversation: r5,
                isStreaming: !aL && !aT && !sk && rT,
                mode: "conversation",
                mcpResponseCache: sq,
                moderationDisclaimersByMessageId: ro,
                ...a7,
                pendingSubmission: null == rb || aL || sk || sR?.isEntering ? null : {
                    attachments: rw,
                    commentAttachments: rS,
                    prompt: rb,
                    ...rx,
                    selectedTextAttachments: rC
                },
                threadCurrentNode: sO,
                threadMapping: sN
            }), n9[104] = st, n9[105] = sn, n9[106] = sE, n9[107] = rJ, n9[108] = sO, n9[109] = sN, n9[110] = r6, n9[111] = sB, n9[112] = sF, n9[113] = aT, n9[114] = aL, n9[115] = rT, n9[116] = r5, n9[117] = ro, n9[118] = rw, n9[119] = rS, n9[120] = rx, n9[121] = rb, n9[122] = rC, n9[123] = sk, n9[124] = aM.get, n9[125] = sR?.isEntering, n9[126] = a7, n9[127] = ri, n9[128] = sH, n9[129] = sL, n9[130] = tj) : tj = n9[130], sR?.isEntering, n9[131] !== tj ? (tL = tj(), n9[131] = tj, n9[132] = tL) : tL = n9[132];
            let {
                isConversationEmpty: sK,
                renderedConversation: sU,
                renderedTurns: sV,
                showPendingLoadingMessage: sQ
            } = tL;
            n9[133] !== aP || n9[134] !== r5 || n9[135] !== sU || n9[136] !== aM ? (tD = () => {
                if (!aP && r5) return aM.set(ie.b, sU), () => {
                    aM.get(ie.b) === sU && aM.set(ie.b, null)
                }
            }, tH = [aP, r5, sU, aM], n9[133] = aP, n9[134] = r5, n9[135] = sU, n9[136] = aM, n9[137] = tD, n9[138] = tH) : (tD = n9[137], tH = n9[138]), (0, m.useEffect)(tD, tH);
            let s$ = (0, d.x)(eX.g, ae),
                sY = sQ && null == s$,
                sJ = !r5 && !aL && !aP && !aT,
                sZ = (0, d.x)(sn || aP || aL ? null : M.a, ae),
                sX = (sZ?.length ?? 0) > 0,
                s0 = (0, d.x)(sJ ? R.b : null, ae),
                s1 = JSON.stringify([ae, aj]),
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
                    let d = null == n ? [] : (0, h.b)(n, F.o),
                        u = null == e || e.visitKey !== c,
                        p = d.find(F.o)?.id ?? (u || i ? null : e.userMessageId),
                        g = i ? null : d.findLast(G)?.id ?? null,
                        m = !u && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != p && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== p),
                        f = new Set(u ? [] : e.observedSummaryRequestIds),
                        v = !u && !m && e.hasConsumedSummaryRequest,
                        y = !v && !u && null != e.conversation && (o || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != g && !f.has(g);
                    if (null != n && (u || null == e.conversation || !o))
                        for (let e of Object.values(n.mapping)) e?.message?.id != null && G(e.message) && f.add(e.message.id);
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
                    isTurnActive: rT,
                    hasGoal: sX,
                    isPendingUserTurn: r_ && null != rb && !rT,
                    visitKey: s1
                });
            s4 !== s2 && s3(s4);
            let s5 = null == aI && !sn && !aP && !aL && (rZ || sJ) && !aT,
                s6 = s5 && sU?.mapping === a8 && sU?.current_node === rn,
                s7 = (0, d.x)(s6 ? tp.q : null, ae),
                s8 = sU?.mapping,
                s9 = sU?.current_node;
            n9[139] !== s8 || n9[140] !== s9 ? (tW = c()(() => {
                let e = null == s8 ? [] : (0, h.a)({
                    mapping: s8,
                    current_node: s9
                });
                return {
                    messages: e,
                    resources: (0, tB.e)(e)
                }
            }), n9[139] = s8, n9[140] = s9, n9[141] = tW) : tW = n9[141];
            let oe = tW;
            n9[142] !== sJ || !1 !== n9[143] || n9[144] !== r_ || n9[145] !== s5 || n9[146] !== rT || n9[147] !== r5 || n9[148] !== rF || n9[149] !== rw || n9[150] !== oe || n9[151] !== sV || n9[152] !== s7 ? (tq = s5 ? c()(() => (0, tZ.a)({
                automationReferences: s7,
                includePages: rF,
                includeSources: r5 || !1,
                isTurnActive: rT || r_,
                ...oe(),
                pendingAttachments: r_ ? rw : [],
                turns: sV
            })) : null, tK = sJ ? tq?.() : null, n9[142] = sJ, n9[143] = !1, n9[144] = r_, n9[145] = s5, n9[146] = rT, n9[147] = r5, n9[148] = rF, n9[149] = rw, n9[150] = oe, n9[151] = sV, n9[152] = s7, n9[153] = tq, n9[154] = tK) : (tq = n9[153], tK = n9[154]);
            let ot = tK,
                on = sX || null != ot && (ot.outputs.length > 0 || ot.progressSteps.length > 0 || ot.automationIds.length > 0 || ot.subagents.length > 0 || !re && ot.browserScreenshots.length > 0),
                oa = s5 && (!sJ || on),
                or = oa && null == r0,
                oo = JSON.stringify([s1, null != r0]),
                oi = sJ ? s4.isOpen : void 0,
                ol = oa && !r0?.isFullWidth;
            n9[155] !== r9 || n9[156] !== oo || n9[157] !== oi || n9[158] !== ol ? (tU = {
                contentShiftResetKey: oo,
                controlledIsOpen: oi,
                isEnabled: ol,
                floatingPanelWidth: r9
            }, n9[155] = r9, n9[156] = oo, n9[157] = oi, n9[158] = ol, n9[159] = tU) : tU = n9[159];
            let om = (0, ez.a)(tU),
                of = a5 ?? ae,
                ov = rZ && null == rg,
                oy = rs ?? rj,
                ob = rD.isLoading && !rB,
                oS = !ob && (null != rU || rB),
                o_ = oS && (rH || !rW),
                oI = rD.isError && !rH;
            n9[160] !== rD.error || n9[161] !== aP ? (tV = aP || (0, eV.e)(rD.error) || !(rD.error instanceof eV.FetchError && [401, 403, 404].includes(rD.error.status)), n9[160] = rD.error, n9[161] = aP, n9[162] = tV) : tV = n9[162];
            let oj = tV;
            n9[163] !== ae || n9[164] !== aL || n9[165] !== a5 ? (tQ = null, aL || (tQ = a5 ?? ((0, tz.e)(ae) ? null : ae)), n9[163] = ae, n9[164] = aL, n9[165] = a5, n9[166] = tQ) : tQ = n9[166], n9[167] !== aX || n9[168] !== rU || n9[169] !== rJ || n9[170] !== a2 || n9[171] !== ap || n9[172] !== r5 || n9[173] !== rX || n9[174] !== a3 || n9[175] !== tQ || n9[176] !== ay || n9[177] !== aM || n9[178] !== aj ? (t$ = (e, t) => {
                let n = void 0 !== t && t;
                if (null == tQ || null != aX || rX) return;
                let a = a1.current?.signal;
                null == a || a.aborted || (aY({
                    messageId: e,
                    activation: aj
                }), (0, tp.h)(aM, {
                    conversationId: tQ,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, eY.a)(aM, "opened"), a3(null == ay ? (0, oK.c)(t, {
                        isTemporaryChat: ap
                    }) : (0, v.C)(ay, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, eY.a)(aM, "failed"), aY(null), aM.get(U.f).danger(a2.formatMessage({
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
            }, n9[167] = aX, n9[168] = rU, n9[169] = rJ, n9[170] = a2, n9[171] = ap, n9[172] = r5, n9[173] = rX, n9[174] = a3, n9[175] = tQ, n9[176] = ay, n9[177] = aM, n9[178] = aj, n9[179] = t$) : t$ = n9[179];
            let oE = (0, eW.a)(t$);
            n9[180] !== rU || n9[181] !== ae || n9[182] !== rJ || n9[183] !== a2 || n9[184] !== se || n9[185] !== ap || n9[186] !== r5 || n9[187] !== aM || n9[188] !== a5 ? (tJ = async (e, t, n, a) => {
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
                        if (e.get(e6.j, n)) throw new t_.a("edit_message_busy", "The chat is busy.");
                        let l = e.get(tp.y, n);
                        if ("tpp" === l) throw new t_.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                        if (!e.get(tE, n)) throw new t_.a("edit_message_busy", "The chat is busy.");
                        let c = e.get(tS.b, {
                            conversationId: n,
                            messageId: r
                        });
                        if (null == c) throw new t_.a("edit_message_target_unavailable", "The user message could not be edited.");
                        let {
                            selectedModel: d
                        } = c, u = s.trim(), h = (0, tS.c)(c.message, e.get, i), g = (0, tP.c)({
                            message: c.message,
                            prompt: u,
                            renderFormat: o,
                            systemHints: h,
                            inlineSystemHints: i
                        }), m = (0, p.f)(g.message.metadata), f = g.message.content, v = "multimodal_text" === f.content_type && f.parts.some(e => "string" != typeof e);
                        if (0 === u.length && 0 === m.length && !v) throw new t_.a("edit_message_empty", "The edited message cannot be empty.");
                        if (e.get(eO.e, "3574573347")) {
                            let t = e.get(tS.a, n);
                            t?.messageId === r && t.prompt === s && tb()((0, tS.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(tS.a, n, {
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
                            x = () => tA(e.get, n).request.current === b && tb()(e.get(tS.b, {
                                conversationId: n,
                                messageId: r
                            }), c) && !(0, tp.Bb)(e.get(tp.ab, n));
                        e.set(e6.j, n, !0);
                        try {
                            if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(tT.a, n) && (await b.stop(), await b.closed), !x()) throw new t_.a("edit_message_target_unavailable", "The edited message or active response changed.");
                            await (0, tP.submitChatGPTCompletion)(e, {
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
                        isTemporaryChat: ap,
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
            }, n9[180] = rU, n9[181] = ae, n9[182] = rJ, n9[183] = a2, n9[184] = se, n9[185] = ap, n9[186] = r5, n9[187] = aM, n9[188] = a5, n9[189] = tJ) : tJ = n9[189];
            let oM = (0, eW.a)(tJ);
            n9[190] !== aq || n9[191] !== rU || n9[192] !== ae || n9[193] !== rJ || n9[194] !== a2 || n9[195] !== se || n9[196] !== ap || n9[197] !== r5 || n9[198] !== rX || n9[199] !== a3 || n9[200] !== aS || n9[201] !== aM || n9[202] !== a5 ? (tX = async (e, t) => {
                if (!se && !rX) try {
                    let n = aM.get(rA.e, ae);
                    if (n?.startsNewWorkConversation || null == aM.get(tp.j, ae) || (0, e0.j)(aM.get(tp.V, ae)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, h.e)(n.prompt),
                            r = (0, N.i)(n.prompt.metadata, a, (0, p.e)(n.prompt.metadata), (0, g.x)(a)),
                            s = (0, z.a)(n.prompt, a, r),
                            o = aM.get(e6.u, aq),
                            i = null != s.renderFormat ? s.message : a,
                            l = o.length > 0 ? o : i,
                            c = o.length > 0 ? void 0 : s.renderFormat ?? "plain";
                        if (null != aS) return void await aS(l, c);
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
                            (0, D.E)(t, (t, n) => n ? t : e) || (0, e6._)(aM, ae, e), (0, D.e)(t);
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
                        if (r5 && !ap && (0, L.cb)(aM, (0, $.b)({
                                entrypoint: "home"
                            }))) return void await a3("/");
                        let d = (0, h.l)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, tO.g)(aM, d);
                        (0, e6.$)(aM, u, t.model);
                        let m = aM.get(tp.T, ae);
                        (0, H.n)(aM, r5 ? "work" : "chat"), await a3({
                            pathname: "/",
                            search: (0, oK.e)("", ap)
                        }, {
                            state: {
                                initialChatGptConversationId: u,
                                project: null,
                                chatGptProjectId: (0, tF.a)(m) ? m : null,
                                chatGptCustomGptId: (0, tF.a)(m) ? null : m,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: r5
                            }
                        });
                        return
                    }
                    await (0, rA.h)(aM, {
                        conversationId: ae,
                        isTemporaryChat: ap,
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
            }, n9[190] = aq, n9[191] = rU, n9[192] = ae, n9[193] = rJ, n9[194] = a2, n9[195] = se, n9[196] = ap, n9[197] = r5, n9[198] = rX, n9[199] = a3, n9[200] = aS, n9[201] = aM, n9[202] = a5, n9[203] = tX) : tX = n9[203];
            let oO = (0, eW.a)(tX);
            n9[204] !== rU || n9[205] !== ae || n9[206] !== ru || n9[207] !== a2 || n9[208] !== a0 || n9[209] !== ap || n9[210] !== a3 || n9[211] !== a4 || n9[212] !== sm || n9[213] !== aM || n9[214] !== a5 || n9[215] !== si || n9[216] !== aj ? (t5 = () => {
                if (a0 || null == a5) return;
                let e = aM.get(T.u);
                if (!e && !aM.get(T.s) || !e && null == rU && null == si) return;
                let t = a1.current?.signal;
                null == t || t.aborted || (aZ(aj), (e ? (0, e3.f)(aM, {
                    chatGptThreadId: ae,
                    conversationTitle: ru
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, S.a)(aM, e);
                    if ("created" === e.status) return null == n || t.aborted || aM.get(U.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, S.a)(aM, e)
                }) : (0, x.a)({
                    scope: aM,
                    projectId: sm ?? void 0,
                    prompt: `Continuing from ${(0,W.f)({conversationId:a5,title:ru?.trim()||"ChatGPT thread"})}`
                }).then(iu)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? a4(n) : a3((0, oK.c)(n, {
                            isTemporaryChat: ap
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
            }, n9[204] = rU, n9[205] = ae, n9[206] = ru, n9[207] = a2, n9[208] = a0, n9[209] = ap, n9[210] = a3, n9[211] = a4, n9[212] = sm, n9[213] = aM, n9[214] = a5, n9[215] = si, n9[216] = aj, n9[217] = t5) : t5 = n9[217];
            let oF = t5;
            n9[218] !== ae || n9[219] !== a3 || n9[220] !== aM || n9[221] !== aW || n9[222] !== ag || n9[223] !== ak ? (t7 = () => {
                if (null != ak) {
                    if ((0, tz.e)(ae)) {
                        let e = (0, af.a)(aM, ak, ae);
                        null != e && (aM.get(P.a) ? aM.set(oN.a, e) : a3((0, oK.c)(e)))
                    }
                    return
                }
                let e = aM.query.getData(tn.n, ag);
                null != e && null != ag && null != aW && ((0, tp.ob)(aM, {
                    conversation: e,
                    conversationId: aW,
                    sharedConversationId: ag
                }), aM.get(P.a) ? aM.set(oN.a, aW) : a3((0, oK.c)(aW)))
            }, n9[218] = ae, n9[219] = a3, n9[220] = aM, n9[221] = aW, n9[222] = ag, n9[223] = ak, n9[224] = t7) : t7 = n9[224];
            let oG = (0, eW.a)(t7);
            n9[225] !== aI ? (t8 = aI?.mcpAppContext == null ? null : {
                hostId: ef.a,
                server: "codex_apps",
                connectorId: aI.mcpAppContext.id
            }, n9[225] = aI, n9[226] = t8) : t8 = n9[226];
            let oz = (0, d.x)(er.b, t8),
                oB = aI?.fullscreenContent != null ? "content" : "workspace",
                oL = (0, A.a)(aP ? "embedded" : oB),
                oH = !oz && (rH || !rD.isError) && !aT && !r8 && (null == ak || aR?.authMethod === "chatgpt" || aN) && (!aL || null != rU),
                oW = rN || r8 || so || ss || rX,
                oq = oW || sk || sR?.needsEntry === !0;
            if (sk) {
                let e;
                n9[227] !== a2 ? (e = a2.formatMessage(oP.d.readOnlyPlaceholder), n9[227] = a2, n9[228] = e) : e = n9[228], t9 = e
            } else !oW && sR?.needsEntry && (t9 = !1);
            let oU = oH && !oW && !aL && !rW && !se && !rT && !r_ && !rI && !sy,
                oV = !oH || aL || oq || rW ? null : aV;
            if (n9[229] !== sy || n9[230] !== aX || n9[231] !== st || n9[232] !== sn || n9[233] !== rU?.current_node || n9[234] !== ae || n9[235] !== sc || n9[236] !== r6 || n9[237] !== oy || n9[238] !== oE || n9[239] !== oM || n9[240] !== oO || n9[241] !== al || n9[242] !== aT || n9[243] !== oq || n9[244] !== rW || n9[245] !== sS || n9[246] !== r8 || n9[247] !== aL || n9[248] !== r_ || n9[249] !== ap || n9[250] !== rZ || n9[251] !== rT || n9[252] !== r5 || n9[253] !== ss || n9[254] !== rX || n9[255] !== aH || n9[256] !== rw || n9[257] !== tQ || n9[258] !== sU || n9[259] !== sV || n9[260] !== sk || n9[261] !== rl || n9[262] !== aM.get || n9[263] !== rc || n9[264] !== to?.current_node || n9[265] !== a_ || n9[266] !== oH || n9[267] !== sY || n9[268] !== a7 || n9[269] !== rP) {
                let e;
                n9[271] !== st || n9[272] !== sn || n9[273] !== r6 || n9[274] !== r5 || n9[275] !== aH || n9[276] !== sU || n9[277] !== sV || n9[278] !== sk || n9[279] !== aM.get || n9[280] !== a7 ? (e = sk || null == aH || null == sU ? sV : (0, e7.a)({
                    ...sU,
                    current_node: aH.promptMessageId
                }, {
                    clinicalSearchEnabled: sn,
                    clinicalCitationsEnabled: st,
                    enableCloudBrowserActivity: r6,
                    ...a7,
                    isWorkConversation: r5,
                    getRenderTelemetry: e => (0, o6.c)(aM.get, e)
                }), n9[271] = st, n9[272] = sn, n9[273] = r6, n9[274] = r5, n9[275] = aH, n9[276] = sU, n9[277] = sV, n9[278] = sk, n9[279] = aM.get, n9[280] = a7, n9[281] = e) : e = n9[281];
                let t = (0, ta.c)({
                    paragen: aH,
                    hideInitialUserMessage: al,
                    browserConversationId: void 0,
                    conversationId: ae,
                    enableCloudBrowserActivity: r6,
                    errorMessage: oy,
                    branchingMessageId: aX,
                    isReadOnly: aT || r8 || aL || null != a_,
                    isTemporaryChat: ap,
                    isWorkConversation: rZ,
                    onRegenerateResponse: sy || aL || null != a_ || aT || r8 || ss || rX || rT || r_ ? void 0 : oO,
                    onEditUserMessage: sy || null == tQ || rZ || aT || r8 || ss || !rP || r_ ? void 0 : oM,
                    onFork: null == tQ || ap || ss || rX || aT || r8 ? void 0 : oE,
                    pendingSubmissionAttachments: rw,
                    shareEnabled: null == sc && !ap && !aL && !aT && !r8 && !sS,
                    readAloudEnabled: !aL && !r8,
                    feedbackEnabled: !aL && !r8 && null == a_,
                    renderedTurns: e,
                    safetyReview: rl,
                    sharedConversationLastMessageId: to?.current_node ?? rc ?? (aL ? rU?.current_node : null),
                    showPendingLoadingMessage: sY,
                    showRequestUserInputStatus: oH && !oq && !rW
                });
                ne = sk ? (0, oP.a)(t) : t, n9[229] = sy, n9[230] = aX, n9[231] = st, n9[232] = sn, n9[233] = rU?.current_node, n9[234] = ae, n9[235] = sc, n9[236] = r6, n9[237] = oy, n9[238] = oE, n9[239] = oM, n9[240] = oO, n9[241] = al, n9[242] = aT, n9[243] = oq, n9[244] = rW, n9[245] = sS, n9[246] = r8, n9[247] = aL, n9[248] = r_, n9[249] = ap, n9[250] = rZ, n9[251] = rT, n9[252] = r5, n9[253] = ss, n9[254] = rX, n9[255] = aH, n9[256] = rw, n9[257] = tQ, n9[258] = sU, n9[259] = sV, n9[260] = sk, n9[261] = rl, n9[262] = aM.get, n9[263] = rc, n9[264] = to?.current_node, n9[265] = a_, n9[266] = oH, n9[267] = sY, n9[268] = a7, n9[269] = rP, n9[270] = ne
            } else ne = n9[270];
            let oQ = ne;
            n9[282] !== a2 ? (nt = a2.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation"
            }), n9[282] = a2, n9[283] = nt) : nt = n9[283];
            let o$ = nt;
            n9[284] !== ae || n9[285] !== sc ? (nn = null == sc ? null : (0, a.jsx)(tN.ChatGptGizmoHeader, {
                conversationId: ae,
                gizmoId: sc
            }), n9[284] = ae, n9[285] = sc, n9[286] = nn) : nn = n9[286];
            let oY = nn;
            n9[287] !== aT || n9[288] !== aL || n9[289] !== rZ ? (na = !rZ || aL || aT ? null : (0, a.jsx)(Y.a, {
                hostId: ef.a
            }), n9[287] = aT, n9[288] = aL, n9[289] = rZ, n9[290] = na) : na = n9[290];
            let oJ = na,
                oX = !aL && null == a_ && !aT && !ap && !re,
                o0 = (0, d.x)(!oX || aP || r8 ? null : og.a, ae);
            n9[291] !== ae || n9[292] !== aM || n9[293] !== oX ? (nr = oX ? () => {
                let e = aM.get(og.b, ae);
                e?.title && ox(aM, {
                    conversationId: ae,
                    courseId: e.course_id
                }, {
                    preserveFocus: !0
                })
            } : void 0, n9[291] = ae, n9[292] = aM, n9[293] = oX, n9[294] = nr) : nr = n9[294];
            let o1 = nr;
            n9[295] !== oU || n9[296] !== ae || n9[297] !== se || n9[298] !== sR ? (ns = null != sR ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: se,
                children: (0, a.jsx)(nU, {
                    conversationId: ae,
                    placement: "progress",
                    canStartSection: oU
                })
            }) : null, n9[295] = oU, n9[296] = ae, n9[297] = se, n9[298] = sR, n9[299] = ns) : ns = n9[299];
            let o2 = ns,
                o3 = !sf && !aT && !r8,
                o4 = !ap && !aL && null != a5,
                o5 = !aA && o3 && null != rd;
            n9[300] !== ap ? (no = !ap && (0, V.a)({
                browser: !0
            }), n9[300] = ap, n9[301] = no) : no = n9[301];
            let o8 = no,
                ir = (0, d.x)(!!o5 && !o4 && !aL && !r5 && !!oH && !oq && t3.d, ae),
                is = o5 && (o4 || o8 || ir);
            n9[302] !== ax || n9[303] !== r5 || n9[304] !== s_ ? (ni = (0, V.a)({
                browser: !0
            }) && !r5 && null != s_ && null == ax, n9[302] = ax, n9[303] = r5, n9[304] = s_, n9[305] = ni) : ni = n9[305];
            let ih = ni;
            n9[306] !== is || n9[307] !== ih || n9[308] !== sT || n9[309] !== sm || n9[310] !== s_ ? (nl = is && null != sm && !ih ? {
                icon: sT,
                name: s_
            } : void 0, n9[306] = is, n9[307] = ih, n9[308] = sT, n9[309] = sm, n9[310] = s_, n9[311] = nl) : nl = n9[311];
            let ip = nl;
            n9[312] !== ae || n9[313] !== sf || n9[314] !== is || n9[315] !== rd || n9[316] !== o1 || n9[317] !== ip ? (nc = sf ? (0, a.jsx)(eJ.BusinessAgentConversationHeader, {
                conversationId: ae,
                fallback: null
            }) : (0, a.jsx)(nD, {
                onClick: o1,
                hasTitleMenu: is,
                project: ip,
                title: rd
            }), n9[312] = ae, n9[313] = sf, n9[314] = is, n9[315] = rd, n9[316] = o1, n9[317] = ip, n9[318] = nc) : nc = n9[318];
            let ig = nc,
                im = null != sR,
                iv = sf ? null : oY;
            n9[319] !== ih || n9[320] !== sT || n9[321] !== sm || n9[322] !== s_ || n9[323] !== ip ? (nd = null != sm && null == ip ? (0, a.jsx)(nG, {
                projectId: sm,
                name: s_,
                icon: sT,
                linkToProject: ih
            }) : null, n9[319] = ih, n9[320] = sT, n9[321] = sm, n9[322] = s_, n9[323] = ip, n9[324] = nd) : nd = n9[324], n9[325] !== aT || n9[326] !== ov || n9[327] !== aL ? (nu = !ov || aL || aT ? null : (0, a.jsx)(nR.c, {}), n9[325] = aT, n9[326] = ov, n9[327] = aL, n9[328] = nu) : nu = n9[328], n9[329] !== ax || n9[330] !== iv || n9[331] !== nd || n9[332] !== nu ? (nh = (0, a.jsxs)(a.Fragment, {
                children: [ax, iv, nd, nu]
            }), n9[329] = ax, n9[330] = iv, n9[331] = nd, n9[332] = nu, n9[333] = nh) : nh = n9[333];
            let iy = sf || !aA ? ig : null;
            n9[334] !== ap || n9[335] !== oJ || n9[336] !== im || n9[337] !== nh || n9[338] !== iy ? (np = (0, a.jsx)(nR.a, {
                hasSectionProgress: im,
                isTemporaryChat: ap,
                leading: nh,
                start: iy,
                startActions: oJ
            }), n9[334] = ap, n9[335] = oJ, n9[336] = im, n9[337] = nh, n9[338] = iy, n9[339] = np) : np = n9[339];
            let ib = np,
                ix = sV.flatMap(id).flatMap(ic),
                iw = ix.flatMap(il);
            if (!aL && (rD.error instanceof eV.FetchError && 423 === rD.error.status || sC && null == rL)) {
                let e;
                return n9[340] !== rD || n9[341] !== ae || n9[342] !== aM ? (e = (0, a.jsx)(ow.a, {
                    onUnlocked: () => {
                        (0, oC.g)(aM.get(oC.f)?.projectId, [ae]), rD.refetch()
                    }
                }), n9[340] = rD, n9[341] = ae, n9[342] = aM, n9[343] = e) : e = n9[343], e
            }
            if (null != sA) {
                let e;
                return n9[344] !== sA ? (e = (0, a.jsx)(v.l, {
                    replace: !0,
                    to: sA
                }), n9[344] = sA, n9[345] = e) : e = n9[345], e
            }
            let iC = e => o3 && o4 ? (0, a.jsx)(nE, {
                onTitleClick: o1,
                showMenu: is || null != e,
                triggerButton: e,
                conversationId: ae,
                title: ru,
                isHandoffPending: a0,
                isArchived: rU?.is_archived === !0,
                isChatConversation: null != rU && !r5,
                onHandoff: sp ? oF : void 0,
                onOpenMessage: async e => {
                    a1.current?.signal.aborted === !1 && aM.get(C.b)?.pathname === aM.value.pathname && await aU.current?.scrollToMessage(e)
                },
                projectId: sm,
                projectName: s_,
                serverConversationId: a5,
                conversationOrigin: rJ
            }) : null;
            n9[346] !== rU?.current_node || n9[347] !== ae || n9[348] !== sw || n9[349] !== sC || n9[350] !== aL || n9[351] !== ap || n9[352] !== rT || n9[353] !== sm || n9[354] !== sV.length || n9[355] !== a5 || n9[356] !== a_ || n9[357] !== re || n9[358] !== o3 || n9[359] !== rn ? (ng = !o3 || ap || aL || sC ? null : (0, a.jsx)(tf, {
                conversationId: ae,
                projectId: sm,
                sharedProjectConversation: a_,
                isReady: (null != a5 || null != a_) && sV.length > 0 && (rn ?? rU?.current_node) != null,
                isRestricted: re || sw,
                isStreaming: rT
            }), n9[346] = rU?.current_node, n9[347] = ae, n9[348] = sw, n9[349] = sC, n9[350] = aL, n9[351] = ap, n9[352] = rT, n9[353] = sm, n9[354] = sV.length, n9[355] = a5, n9[356] = a_, n9[357] = re, n9[358] = o3, n9[359] = rn, n9[360] = ng) : ng = n9[360];
            let iS = ng,
                i_ = null != o0 ? ae : null;
            n9[361] !== rU || n9[362] !== rB || n9[363] !== aT || n9[364] !== ob || n9[365] !== aP || n9[366] !== r8 || n9[367] !== aL || n9[368] !== r5 ? (nm = r5 || aL || aP || r8 || aT || ob || null == rU && !rB ? null : (0, a.jsx)(E.a, {}), n9[361] = rU, n9[362] = rB, n9[363] = aT, n9[364] = ob, n9[365] = aP, n9[366] = r8, n9[367] = aL, n9[368] = r5, n9[369] = nm) : nm = n9[369], n9[370] !== rD.fetchStatus || n9[371] !== oI || n9[372] !== aP || n9[373] !== o_ ? (nf = !1, n9[370] = rD.fetchStatus, n9[371] = oI, n9[372] = aP, n9[373] = o_, n9[374] = nf) : nf = n9[374], n9[375] !== rD.data || n9[376] !== rD.fetchStatus || n9[377] !== rU || n9[378] !== ae || n9[379] !== oI || n9[380] !== rB || n9[381] !== sK || n9[382] !== ob || !1 !== n9[383] || n9[384] !== sV.length ? (nv = null, n9[375] = rD.data, n9[376] = rD.fetchStatus, n9[377] = rU, n9[378] = ae, n9[379] = oI, n9[380] = rB, n9[381] = sK, n9[382] = ob, n9[383] = !1, n9[384] = sV.length, n9[385] = nv) : nv = n9[385];
            let iI = !aL && !r8 && (0, et.c)() ? (0, a.jsx)(en.c, {
                callIds: iw,
                hostId: ef.a,
                conversationId: (0, u.Se)(`chatgpt:${ae}`)
            }) : null;
            n9[386] !== ru || n9[387] !== aP || n9[388] !== ak || n9[389] !== aI?.documentTitle ? (ny = aP ? null : (0, a.jsx)(Q.a, {
                title: null == ak ? aI?.documentTitle ?? ru : null
            }), n9[386] = ru, n9[387] = aP, n9[388] = ak, n9[389] = aI?.documentTitle, n9[390] = ny) : ny = n9[390], n9[391] !== ae || n9[392] !== aP || n9[393] !== se || n9[394] !== aL || n9[395] !== ap || n9[396] !== r5 || n9[397] !== oQ ? (nb = aP || r5 ? null : (0, a.jsx)(t2.a, {
                conversationId: ae,
                canCopy: !se,
                paragenEnabled: !aL,
                turns: oQ,
                loadHistory: !ap && !aL
            }), n9[391] = ae, n9[392] = aP, n9[393] = se, n9[394] = aL, n9[395] = ap, n9[396] = r5, n9[397] = oQ, n9[398] = nb) : nb = n9[398];
            let ij = null != rU || rB;
            n9[399] !== oI || n9[400] !== r5 || n9[401] !== ij ? (nx = (0, a.jsx)(eQ.a, {
                isWorkConversation: r5,
                hasConversationContent: ij,
                hasLoadError: oI
            }), n9[399] = oI, n9[400] = r5, n9[401] = ij, n9[402] = nx) : nx = n9[402], n9[403] !== ae || n9[404] !== oI || n9[405] !== oS || n9[406] !== aP || n9[407] !== r1.pathname || n9[408] !== aM || n9[409] !== ag ? (nw = aP || !oS || oI ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(oA, {
                    sharedConversationId: ag
                }), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(el.a, {
                        onCommit: () => eo.b.contentCommitted(aM, ae, ag, r1.pathname),
                        onPaint: () => eo.b.pagePainted(aM, ae, ag)
                    }, ag ?? ae)
                })]
            }), n9[403] = ae, n9[404] = oI, n9[405] = oS, n9[406] = aP, n9[407] = r1.pathname, n9[408] = aM, n9[409] = ag, n9[410] = nw) : nw = n9[410];
            let iT = aP || null != aI ? null : (0, a.jsxs)(t4.a, {
                    chatIcon: null == sm ? void 0 : sT,
                    header: ib,
                    title: rd,
                    fullScreenTitle: ig,
                    isArchivedPreview: aT,
                    children: [null == o2 ? null : (0, a.jsx)(nN, {
                        children: o2
                    }), aR?.authMethod === "chatgpt" ? (0, a.jsx)(J.v, {
                        productExperience: r5 ? "work" : "chat"
                    }) : null, aL ? (0, a.jsx)(ok.a, {
                        children: null == su ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(oD, {
                                data: su
                            })
                        })
                    }) : null, oX ? (0, a.jsx)(t6, {
                        conversationId: ae,
                        scheduledAutomationId: r3 ? r2?.sidebarAutomationId : void 0
                    }, ae) : null, ap && !aL && !aT && null == sl && null == sv && null == sm && !sw && null != sU && (0, h.a)(sU).some(ii) ? (0, a.jsx)(_.a.HeaderAction, {
                        actionId: "chatgpt-conversation-save",
                        align: "end",
                        order: 100,
                        children: (0, a.jsx)(oZ, {
                            conversationId: ae
                        })
                    }) : null, o3 && (0, a.jsx)(nR.b, {
                        hasTitleMenu: is,
                        menu: !aA && (iC() ?? (is && (0, a.jsx)(nM, {
                            title: ru,
                            includePlugins: o8,
                            lockdownConversationId: ir ? ae : null
                        }))),
                        children: iS
                    })]
                }),
                iP = tk.a,
                iE = !aE || !oH || oL.isHidden || oq || sy || se || rW || aT || r8 || so || ss || rX || rI || r_,
                iA = sm,
                iM = null != sv,
                iR = eG.c;
            n9[411] !== aP || n9[412] !== r4 || n9[413] !== r5 || n9[414] !== o2 || n9[415] !== aI ? (nC = aP || null != aI ? o2 : r4 && (0, eB.a)() && !r5 && (0, a.jsx)("div", {
                className: "h-px",
                "aria-hidden": !0
            }), n9[411] = aP, n9[412] = r4, n9[413] = r5, n9[414] = o2, n9[415] = aI, n9[416] = nC) : nC = n9[416];
            let ik = null == sR ? "flex h-full min-h-0 flex-col" : "h-full",
                iN = rV ?? ru,
                iO = !se,
                iF = !aK && !aP && !aL && !oz && !oL.isHidden,
                iG = re || sa,
                iz = r0?.isFullWidth === !0,
                iB = null == r0 ? om.contentShift : void 0,
                iL = sR?.selectedIndex;
            n9[417] !== oU || n9[418] !== ae || n9[419] !== sR ? (nS = null != sR ? (0, a.jsx)(nU, {
                conversationId: ae,
                placement: "composer",
                canStartSection: oU
            }) : void 0, n9[417] = oU, n9[418] = ae, n9[419] = sR, n9[420] = nS) : nS = n9[420], n9[421] !== ae || n9[422] !== sR ? (n_ = null != sR ? (0, a.jsx)(nK, {
                conversationId: ae
            }) : void 0, n9[421] = ae, n9[422] = sR, n9[423] = n_) : n_ = n9[423];
            let iD = !r5,
                iH = sk ? null : oy;
            n9[424] !== rD || n9[425] !== oj ? (nI = oj ? () => {
                rD.refetch({
                    cancelRefetch: !1
                })
            } : void 0, n9[424] = rD, n9[425] = oj, n9[426] = nI) : nI = n9[426];
            let iW = sV.length > 0,
                iq = t9,
                iK = !sw && (null == sm || null != sb),
                iU = null == sR && !rY,
                iV = rD.isFetching,
                iQ = rH && !aP && !aL && !r5 && null == sl,
                i$ = !sk && rT;
            n9[427] !== rU?.is_archived || n9[428] !== ae || n9[429] !== aT || n9[430] !== aP || n9[431] !== aL || n9[432] !== ap || n9[433] !== rT || n9[434] !== r5 ? (nj = aP || !r5 || aL || aT || rU?.is_archived === !0 || ap ? null : (0, a.jsx)(m.Suspense, {
                fallback: null,
                children: (0, a.jsx)(nq, {
                    conversationId: ae,
                    isTurnActive: rT
                })
            }), n9[427] = rU?.is_archived, n9[428] = ae, n9[429] = aT, n9[430] = aP, n9[431] = aL, n9[432] = ap, n9[433] = rT, n9[434] = r5, n9[435] = nj) : nj = n9[435], n9[436] !== ae || n9[437] !== aT || n9[438] !== a5 ? (nT = aT ? (0, a.jsx)(ek, {
                conversationId: a5 ?? ae,
                kind: "chatgpt"
            }, a5 ?? ae) : void 0, n9[436] = ae, n9[437] = aT, n9[438] = a5, n9[439] = nT) : nT = n9[439];
            let iY = !sk && sY;
            n9[440] !== sv ? (nP = null != sv ? (0, a.jsx)(od.GptPluginMigrationBanner, {
                gizmoId: sv
            }) : null, n9[440] = sv, n9[441] = nP) : nP = n9[441], n9[442] !== sp || n9[443] !== oF || n9[444] !== a0 || n9[445] !== ap || n9[446] !== sr || n9[447] !== rk ? (nA = sr && !ap ? (0, a.jsx)(t0, {
                canConvert: sp,
                isChatInstantAvailable: !rk,
                isConverting: a0,
                onConvert: oF
            }) : null, n9[442] = sp, n9[443] = oF, n9[444] = a0, n9[445] = ap, n9[446] = sr, n9[447] = rk, n9[448] = nA) : nA = n9[448], n9[449] !== rq || n9[450] !== r8 ? (nk = rq.bind(null, r8), n9[449] = rq, n9[450] = r8, n9[451] = nk) : nk = n9[451], n9[452] !== oG || n9[453] !== aL || n9[454] !== ah ? (nO = e => {
                ah?.(e), aL && oG()
            }, n9[452] = oG, n9[453] = aL, n9[454] = ah, n9[455] = nO) : nO = n9[455], n9[456] !== rD.isFetching || n9[457] !== sy || n9[458] !== aq || n9[459] !== sv || n9[460] !== ab || n9[461] !== ae || n9[462] !== o$ || n9[463] !== aU || n9[464] !== ai || n9[465] !== oI || n9[466] !== as || n9[467] !== aB || n9[468] !== oq || n9[469] !== sK || n9[470] !== rW || n9[471] !== ob || n9[472] !== aK || n9[473] !== aP || n9[474] !== aL || n9[475] !== ap || n9[476] !== rZ || n9[477] !== t9 || n9[478] !== av || n9[479] !== ad || n9[480] !== rt || n9[481] !== ag || n9[482] !== rK || n9[483] !== oH || n9[484] !== aE || n9[485] !== iO || n9[486] !== iF || n9[487] !== iG || n9[488] !== iz || n9[489] !== iB || n9[490] !== iL || n9[491] !== nS || n9[492] !== n_ || n9[493] !== iD || n9[494] !== iH || n9[495] !== nI || n9[496] !== iW || n9[497] !== iK || n9[498] !== iU || n9[499] !== iQ || n9[500] !== i$ || n9[501] !== nj || n9[502] !== nT || n9[503] !== iY || n9[504] !== nP || n9[505] !== nA || n9[506] !== nk || n9[507] !== nO || n9[508] !== iN || n9[509] !== ac || n9[510] !== oQ || n9[511] !== aI ? (nz = (0, a.jsx)(os, {
                ref: aU,
                printTitle: iN,
                trackShownImpressions: iO,
                trackReadState: iF,
                workspace: aI,
                shouldBlockMcpApps: iG,
                isCoveredByFloatingPanel: iz,
                isFormOnly: aK,
                isInlinePreview: aP,
                hideModelPicker: as,
                showFilePicker: aE,
                disableAutoFocus: ai,
                transcriptPresentation: ac,
                scrollOrigin: ad,
                composerRef: aQ,
                contentX: iB,
                conversationId: ae,
                composerConversationId: aq,
                sectionIndex: iL,
                composerLeadingContent: ab,
                aboveComposerContent: nS,
                historyLoadingContent: n_,
                requiredSystemHints: av,
                isChatConversation: iD,
                customGptId: sv,
                conversationLoadingLabel: o$,
                entries: oQ,
                errorMessage: iH,
                hasLoadError: oI,
                onRetryLoad: nI,
                hasRenderableTurns: iW,
                isComposerDisabled: oq,
                readOnlyPlaceholder: iq,
                moreDetailsEnabled: iK,
                isConversationEmpty: sK,
                showEmptyState: iU,
                isConversationFetching: iV,
                isConversationLoading: ob,
                isSharedConversation: aL,
                isSubmitDisabled: rW,
                retainLiveModelPicker: iQ,
                isTemporaryChat: ap,
                isTurnActive: i$,
                isWorkConversation: rZ,
                onboardingPrelude: nj,
                scrollStateConversationId: rt,
                initialResponsePlacementKey: aB,
                sharedConversationId: ag,
                sharedPostRegulatedConnectorKind: rK,
                showComposer: oH,
                archivedPreviewFooter: nT,
                showPendingLoadingMessage: iY,
                gptPluginMigrationBanner: nP,
                awaitingGptContinuation: sy,
                workOnlyConversionBanner: nA,
                onAddSelectedText: nk,
                onSubmitAccepted: nO
            }), n9[456] = rD.isFetching, n9[457] = sy, n9[458] = aq, n9[459] = sv, n9[460] = ab, n9[461] = ae, n9[462] = o$, n9[463] = aU, n9[464] = ai, n9[465] = oI, n9[466] = as, n9[467] = aB, n9[468] = oq, n9[469] = sK, n9[470] = rW, n9[471] = ob, n9[472] = aK, n9[473] = aP, n9[474] = aL, n9[475] = ap, n9[476] = rZ, n9[477] = t9, n9[478] = av, n9[479] = ad, n9[480] = rt, n9[481] = ag, n9[482] = rK, n9[483] = oH, n9[484] = aE, n9[485] = iO, n9[486] = iF, n9[487] = iG, n9[488] = iz, n9[489] = iB, n9[490] = iL, n9[491] = nS, n9[492] = n_, n9[493] = iD, n9[494] = iH, n9[495] = nI, n9[496] = iW, n9[497] = iK, n9[498] = iU, n9[499] = iQ, n9[500] = i$, n9[501] = nj, n9[502] = nT, n9[503] = iY, n9[504] = nP, n9[505] = nA, n9[506] = nk, n9[507] = nO, n9[508] = iN, n9[509] = ac, n9[510] = oQ, n9[511] = aI, n9[512] = nz) : nz = n9[512], n9[513] !== s4 || n9[514] !== tq || n9[515] !== sJ || n9[516] !== s3 || n9[517] !== re || n9[518] !== or || n9[519] !== oV || n9[520] !== of || n9[521] !== om ? (nB = or && null != tq ? (0, a.jsx)(tY, {
                composerActions: oV,
                conversationId: of,
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
                display: om,
                shouldBlockExternalEgress: re
            }) : null, n9[513] = s4, n9[514] = tq, n9[515] = sJ, n9[516] = s3, n9[517] = re, n9[518] = or, n9[519] = oV, n9[520] = of, n9[521] = om, n9[522] = nB) : nB = n9[522], n9[523] === Symbol.for("react.memo_cache_sentinel") ? (nL = (0, a.jsx)(tM.a, {}), n9[523] = nL) : nL = n9[523], n9[524] !== aP ? (nW = null, n9[524] = aP, n9[525] = nW) : nW = n9[525], n9[526] !== se || n9[527] !== nz || n9[528] !== nB || n9[529] !== nW || n9[530] !== ik ? (n$ = (0, a.jsxs)("div", {
                className: ik,
                inert: se,
                children: [nz, nB, nL, nW]
            }), n9[526] = se, n9[527] = nz, n9[528] = nB, n9[529] = nW, n9[530] = ik, n9[531] = n$) : n$ = n9[531];
            let iJ = !r8 && (0, et.c)() ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(o9, {
                    conversationId: ae,
                    shouldBlockExternalEgress: re || sa,
                    widgets: ix.filter(io)
                }), aL ? null : (0, a.jsx)(ea.a, {
                    blockedWidgetSource: rG ? void 0 : "descriptor",
                    transcriptMcpAppIds: (0, o7.c)(ae, ix, rG),
                    shouldBlockExternalEgress: re || sa
                })]
            }) : null;
            n9[532] !== iR || n9[533] !== aC || n9[534] !== r9 || n9[535] !== n$ || n9[536] !== iJ || n9[537] !== nC ? (nY = (0, a.jsxs)(iR, {
                floatingPanelWidth: r9,
                header: nC,
                banner: aC,
                children: [n$, iJ]
            }), n9[532] = iR, n9[533] = aC, n9[534] = r9, n9[535] = n$, n9[536] = iJ, n9[537] = nC, n9[538] = nY) : nY = n9[538], n9[539] !== iP || n9[540] !== aq || n9[541] !== rJ || n9[542] !== ap || n9[543] !== sm || n9[544] !== nY || n9[545] !== iE || n9[546] !== iM ? (nJ = (0, a.jsx)(iP, {
                conversationId: aq,
                conversationOrigin: rJ,
                disabled: iE,
                isTemporaryChat: ap,
                projectId: iA,
                requiresGizmoId: iM,
                children: nY
            }), n9[539] = iP, n9[540] = aq, n9[541] = rJ, n9[542] = ap, n9[543] = sm, n9[544] = nY, n9[545] = iE, n9[546] = iM, n9[547] = nJ) : nJ = n9[547], n9[548] !== oT || n9[549] !== nJ || n9[550] !== i_ || n9[551] !== nm || n9[552] !== nf || n9[553] !== nv || n9[554] !== iI || n9[555] !== ny || n9[556] !== nb || n9[557] !== nx || n9[558] !== nw || n9[559] !== iT ? (nZ = (0, a.jsxs)(oT, {
                courseChatId: i_,
                children: [nm, nf, nv, iI, ny, nb, nx, nw, iT, null, nJ]
            }), n9[548] = oT, n9[549] = nJ, n9[550] = i_, n9[551] = nm, n9[552] = nf, n9[553] = nv, n9[554] = iI, n9[555] = ny, n9[556] = nb, n9[557] = nx, n9[558] = nw, n9[559] = iT, n9[560] = nZ) : nZ = n9[560];
            let iZ = nZ,
                iX = !aP && !rZ,
                i0 = aL || !rD.isFetchedAfterMount || rD.isFetching || rH ? null : rD.error;
            n9[561] !== ae || n9[562] !== aP || n9[563] !== aM || n9[564] !== ag ? (nX = e => {
                aP || eo.b.loadFailed(aM, ae, ag, e)
            }, n9[561] = ae, n9[562] = aP, n9[563] = aM, n9[564] = ag, n9[565] = nX) : nX = n9[565];
            let i1 = oI ? rD.error : null,
                i2 = null == rJ && null == rU ? null : r5,
                i3 = !r5 && !ob;
            n9[566] !== aV || n9[567] !== aq || n9[568] !== ag ? (n0 = {
                conversationId: aq,
                composer: aV,
                sharedConversationId: ag
            }, n9[566] = aV, n9[567] = aq, n9[568] = ag, n9[569] = n0) : n0 = n9[569], n9[570] !== ae || n9[571] !== aP || n9[572] !== a5 || n9[573] !== ag ? (n1 = aP ? null : (0, eo.a)(a5 ?? ae, ag), n9[570] = ae, n9[571] = aP, n9[572] = a5, n9[573] = ag, n9[574] = n1) : n1 = n9[574];
            let i4 = !o_;
            return n9[575] !== i4 ? (n2 = (0, a.jsx)(s.b, {
                name: "conversation data",
                active: i4
            }), n9[575] = i4, n9[576] = n2) : n2 = n9[576], n9[577] !== se ? (n3 = (0, a.jsx)(s.b, {
                name: "workspace policy",
                active: se
            }), n9[577] = se, n9[578] = n3) : n3 = n9[578], n9[579] !== aa || n9[580] !== iZ || n9[581] !== ae || n9[582] !== iS || !1 !== n9[583] || n9[584] !== r5 || n9[585] !== iC ? (n4 = aa ? (0, a.jsx)(aa, {
                buttons: iS,
                conversationId: ae,
                isWorkConversation: r5 || !1,
                renderMenu: iC,
                children: iZ
            }) : iZ, n9[579] = aa, n9[580] = iZ, n9[581] = ae, n9[582] = iS, n9[583] = !1, n9[584] = r5, n9[585] = iC, n9[586] = n4) : n4 = n9[586], n9[587] !== n1 || n9[588] !== n2 || n9[589] !== n3 || n9[590] !== n4 ? (n5 = (0, a.jsxs)(ei.h, {
                destinationKey: n1,
                children: [n2, n3, n4]
            }), n9[587] = n1, n9[588] = n2, n9[589] = n3, n9[590] = n4, n9[591] = n5) : n5 = n9[591], n9[592] !== n0 || n9[593] !== n5 ? (n6 = (0, a.jsx)(e5.a, {
                value: n0,
                children: n5
            }), n9[592] = n0, n9[593] = n5, n9[594] = n6) : n6 = n9[594], n9[595] !== i3 || n9[596] !== n6 ? (n7 = (0, a.jsx)(y.a, {
                enabled: i3,
                children: n6
            }), n9[595] = i3, n9[596] = n6, n9[597] = n7) : n7 = n9[597], n9[598] !== oj || n9[599] !== a5 || n9[600] !== iX || n9[601] !== i0 || n9[602] !== nX || n9[603] !== i1 || n9[604] !== i2 || n9[605] !== n7 ? (n8 = (0, a.jsx)(k.a, {
                showChatFallback: iX,
                conversationId: a5,
                error: i0,
                onInlineLoadError: nX,
                loadError: i1,
                canRetry: oj,
                isWorkConversation: i2,
                children: n7
            }), n9[598] = oj, n9[599] = a5, n9[600] = iX, n9[601] = i0, n9[602] = nX, n9[603] = i1, n9[604] = i2, n9[605] = n7, n9[606] = n8) : n8 = n9[606], n8
        }

        function io(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function ii(e) {
            return "user" === e.author.role
        }

        function il(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function ic(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function id(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function iu(e) {
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
                let t, n, g, m, f, v, y, b, x, w, C, S, _, I, j, T, P, E, A = (0, r.c)(73),
                    {
                        initialPlacementKey: M,
                        isActiveVoiceConversation: R,
                        isLoadingHistory: k,
                        latestUserTurnKey: N,
                        conversationId: O,
                        onResponseSpacerStateChange: F,
                        preserveResponseViewport: G
                    } = e,
                    z = void 0 !== R && R,
                    B = void 0 !== k && k,
                    L = (0, i.i)();
                A[0] !== z || A[1] !== L ? (t = z && (0, i.d)(L, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), A[0] = z, A[1] = L, A[2] = t) : t = A[2];
                let D = t,
                    H = (0, o.useRef)(N),
                    W = (0, s.x)(null == O ? 0 : u.b, O ?? ""),
                    q = (0, o.useRef)(W),
                    K = (0, o.useRef)(B),
                    U = (0, o.useRef)(null),
                    V = (0, o.useRef)(null),
                    Q = (0, o.useRef)(null),
                    $ = (0, d.b)();
                A[3] !== $ ? (n = () => new c.a($), A[3] = $, A[4] = n) : n = A[4];
                let [Y] = (0, o.useState)(n), {
                    clear: J,
                    consumeGrowth: Z,
                    getHeightPx: X,
                    ensureScrollRoomForAnchor: ee,
                    place: et,
                    prepareThreadEndContent: en
                } = Y, {
                    addScrollListener: ea,
                    getScrollElement: er,
                    responseSpacerController: es
                } = $;
                A[5] !== er || A[6] !== N || A[7] !== et || A[8] !== G || A[9] !== Y || A[10] !== $ || A[11] !== D ? (g = e => {
                    if (!G?.(e => {
                            let t = er();
                            null != t && et(p(t, e) ?? void 0)
                        })) {
                        if (null == e && null != N && !D) {
                            $.holdViewport(), U.current = {
                                previousKey: N,
                                signal: Y.getPendingPlacementSignal()
                            };
                            return
                        }
                        et(e)
                    }
                }, A[5] = er, A[6] = N, A[7] = et, A[8] = G, A[9] = Y, A[10] = $, A[11] = D, A[12] = g) : g = A[12];
                let eo = (0, h.a)(g);
                A[13] !== J || A[14] !== $ ? (m = e => {
                    J(), $.scrollToBottom(e)
                }, A[13] = J, A[14] = $, A[15] = m) : m = A[15];
                let ei = (0, h.a)(m);
                A[16] !== ei || A[17] !== W ? (f = () => {
                    q.current !== W && (q.current = W, ei())
                }, v = [W, ei], A[16] = ei, A[17] = W, A[18] = f, A[19] = v) : (f = A[18], v = A[19]), (0, o.useLayoutEffect)(f, v), A[20] !== Z || A[21] !== X || A[22] !== en || A[23] !== Y.height || A[24] !== Y.holdViewport || A[25] !== es || A[26] !== ei ? (y = () => es.register({
                    consumeGrowth: Z,
                    getHeightPx: X,
                    holdViewport: Y.holdViewport,
                    prepareThreadEndContent: en,
                    scrollToBottom: ei
                }, Y.height).dispose, A[20] = Z, A[21] = X, A[22] = en, A[23] = Y.height, A[24] = Y.holdViewport, A[25] = es, A[26] = ei, A[27] = y) : y = A[27], A[28] !== Z || A[29] !== X || A[30] !== en || A[31] !== Y || A[32] !== es || A[33] !== ei ? (b = [Z, X, en, Y, es, ei], A[28] = Z, A[29] = X, A[30] = en, A[31] = Y, A[32] = es, A[33] = ei, A[34] = b) : b = A[34], (0, o.useInsertionEffect)(y, b), A[35] !== Y ? (x = (e, t) => {
                    let n = U.current;
                    null != n && n.previousKey !== e && (U.current = null, n.signal.aborted || Y.revealSubmittedTurn(t)), V.current = {
                        turnKey: e,
                        element: t
                    }, Q.current?.(e, t)
                }, A[35] = Y, A[36] = x) : x = A[36];
                let el = (0, h.a)(x);
                A[37] === Symbol.for("react.memo_cache_sentinel") ? (w = e => {
                    Q.current = e;
                    let t = V.current;
                    return null != t && e(t.turnKey, t.element), () => {
                        Q.current = null
                    }
                }, A[37] = w) : w = A[37];
                let ec = (0, h.a)(w);
                A[38] !== er || A[39] !== N || A[40] !== et || A[41] !== D ? (C = () => {
                    let e = er();
                    if (null != e && 0 !== e.clientHeight)
                        if (D && null != N) {
                            let t = p(e, N);
                            if (null == t) return;
                            et(t)
                        } else et()
                }, A[38] = er, A[39] = N, A[40] = et, A[41] = D, A[42] = C) : C = A[42];
                let ed = (0, o.useEffectEvent)(C);
                return A[43] !== J || A[44] !== Z || A[45] !== ee || A[46] !== X || A[47] !== F || A[48] !== el || A[49] !== eo || A[50] !== D ? (S = () => (F({
                    voiceAutoScrollEnabled: D,
                    clear: J,
                    consumeGrowth: Z,
                    getHeightPx: X,
                    ensureScrollRoomForAnchor: ee,
                    onTurnLayoutReady: el,
                    place: eo
                }), () => {
                    F(null)
                }), _ = [J, Z, X, ee, F, el, eo, D], A[43] = J, A[44] = Z, A[45] = ee, A[46] = X, A[47] = F, A[48] = el, A[49] = eo, A[50] = D, A[51] = S, A[52] = _) : (S = A[51], _ = A[52]), (0, o.useLayoutEffect)(S, _), A[53] !== er || A[54] !== B || A[55] !== N || A[56] !== eo || A[57] !== Y || A[58] !== ec || A[59] !== D ? (I = () => {
                    let e = H.current,
                        t = K.current;
                    if (H.current = N, K.current = B, D && !B && !t && null != N && N !== e) {
                        var n, a, r, s, o;
                        let e, t, i, l, c;
                        return n = N, a = er, r = eo, s = ec, o = Y.getPendingPlacementSignal(), t = null, i = null, l = !1, c = () => {
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
                }, j = [er, B, N, eo, ec, Y, D], A[53] = er, A[54] = B, A[55] = N, A[56] = eo, A[57] = Y, A[58] = ec, A[59] = D, A[60] = I, A[61] = j) : (I = A[60], j = A[61]), (0, o.useLayoutEffect)(I, j), A[62] !== ea || A[63] !== M || A[64] !== ed || A[65] !== Y ? (T = () => {
                    if (null == M) return;
                    let e = Y.getPendingPlacementSignal();
                    return ea(() => {
                        e.aborted || ed()
                    })
                }, A[62] = ea, A[63] = M, A[64] = ed, A[65] = Y, A[66] = T) : T = A[66], A[67] !== ea || A[68] !== M || A[69] !== Y ? (P = [ea, M, Y], A[67] = ea, A[68] = M, A[69] = Y, A[70] = P) : P = A[70], (0, o.useLayoutEffect)(T, P), A[71] !== Y ? (E = (0, a.jsx)(l.a, {
                    controller: Y
                }), A[71] = Y, A[72] = E) : E = A[72], E
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
                        children: w,
                        conversationId: C,
                        routePattern: S,
                        homePath: _
                    } = e,
                    I = void 0 === _ ? "/" : _,
                    j = (0, s.y)(l.a),
                    {
                        hash: T,
                        key: P,
                        mask: E,
                        pathname: A,
                        search: M,
                        state: R
                    } = (0, i.Y)(),
                    {
                        conversationId: k,
                        gizmoId: N
                    } = (0, i.db)(),
                    O = (0, s.x)(f, C),
                    F = (0, s.x)(g.E, C),
                    G = (0, s.x)(g.T, C),
                    z = F ? G : N;
                x[0] !== z ? (t = null != z && (0, h.a)(z) ? z : null, x[0] = z, x[1] = t) : t = x[1], x[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                    enabled: !1
                }, x[2] = n) : n = x[2];
                let {
                    data: B
                } = (0, s.x)(u.b, t, n);
                x[3] !== z ? (o = null == z || (0, h.a)(z) ? null : z, x[3] = z, x[4] = o) : o = x[4], x[5] === Symbol.for("react.memo_cache_sentinel") ? (c = {
                    enabled: !1
                }, x[5] = c) : c = x[5];
                let {
                    data: L
                } = (0, s.x)(d.b, o, c);
                if (null === O || (0, m.i)(M) && null != O && !F) {
                    let e;
                    return x[6] !== I || x[7] !== M ? (e = (0, a.jsx)(i.l, {
                        replace: !0,
                        to: {
                            pathname: I,
                            search: M
                        }
                    }), x[6] = I, x[7] = M, x[8] = e) : e = x[8], e
                }
                if (x[9] !== C || x[10] !== k || x[11] !== L || x[12] !== z || x[13] !== T || x[14] !== P || x[15] !== E || x[16] !== A || x[17] !== B || x[18] !== O || x[19] !== S || x[20] !== j || x[21] !== M || x[22] !== R) {
                    let e = null != S ? (0, i.C)(S, {
                            conversationId: O ?? C
                        }) : (0, m.c)(O ?? C, {
                            gizmoId: B?.gizmo.short_url ?? L?.gizmo.short_url ?? z
                        }),
                        t = new URLSearchParams(M),
                        n = null != O && t.has("mfr"),
                        r = j.get(g.y, C),
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
                    if (null != k && (0, p.e)(k) && null != O) {
                        let e;
                        x[28] !== s ? (e = {
                            ...s,
                            fromChatGptFirstSend: !0
                        }, x[28] = s, x[29] = e) : e = x[29], s = e
                    }
                    if (y = null, A !== e || n) {
                        let o, l = (0, i.y)({
                            hash: n ? "" : T,
                            pathname: e,
                            search: n ? t.toString() : M
                        });
                        if ("tpp" === r || "flora" === r) {
                            let e, t, n = s,
                                a = R?.workTurnVisit;
                            x[30] !== P || x[31] !== j || x[32] !== a ? (e = (0, m.f)(j, P, a), x[30] = P, x[31] = j, x[32] = a, x[33] = e) : e = x[33], x[34] !== s || x[35] !== e ? (t = {
                                ...n,
                                workTurnVisit: e
                            }, x[34] = s, x[35] = e, x[36] = t) : t = x[36], s = t
                        }
                        let c = R?.businessProfileShareConversation;
                        if (null != c && (c.conversationId === C || c.conversationId === k)) {
                            let e, t, n = O ?? C;
                            x[37] !== c || x[38] !== n ? (e = {
                                ...c,
                                conversationId: n
                            }, x[37] = c, x[38] = n, x[39] = e) : e = x[39], x[40] !== s || x[41] !== e ? (t = {
                                ...s,
                                businessProfileShareConversation: e
                            }, x[40] = s, x[41] = e, x[42] = t) : t = x[42], s = t
                        }
                        x[43] !== P || x[44] !== E || x[45] !== s || x[46] !== O || x[47] !== c || x[48] !== l ? (o = E && null != c && (c.intent?.destination?.kind !== "agent" || null == O) ? (0, a.jsx)(v, {
                            to: l,
                            mask: E,
                            sourceKey: P,
                            state: s
                        }) : (0, a.jsx)(i.l, {
                            replace: !0,
                            state: s,
                            to: l
                        }), x[43] = P, x[44] = E, x[45] = s, x[46] = O, x[47] = c, x[48] = l, x[49] = o) : o = x[49], y = o
                    }
                    x[9] = C, x[10] = k, x[11] = L, x[12] = z, x[13] = T, x[14] = P, x[15] = E, x[16] = A, x[17] = B, x[18] = O, x[19] = S, x[20] = j, x[21] = M, x[22] = R, x[23] = y
                } else y = x[23];
                return x[50] !== w || x[51] !== y ? (b = (0, a.jsxs)(a.Fragment, {
                    children: [y, w]
                }), x[50] = w, x[51] = y, x[52] = b) : b = x[52], b
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
            w = n("yGJW"),
            C = n("gBBC"),
            S = n("OWtl"),
            _ = n("hZax"),
            I = n("JYRT"),
            j = n("wwvo"),
            T = n("wrCb"),
            P = n("H7Nt"),
            E = n("vzxm"),
            A = n("jAnS"),
            M = n("oTAb"),
            R = n("YO3u"),
            k = n("z7pB"),
            N = n("I5s4");
        let O = (0, v.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function F(e) {
            let t, n, v, F, G, z, B, L, D, H, W, q, K, U, V, Q, $, Y, J, Z, X = (0, r.c)(56),
                {
                    gizmo: ee
                } = e,
                et = (0, o.y)(S.a),
                en = (0, l.a)(),
                {
                    search: ea
                } = (0, d.Y)(),
                er = (0, d.$)(),
                [es, eo] = (0, i.useState)(!1),
                ei = (0, _.f)("2160578039"),
                el = (0, o.x)(I.a, "2513446768"),
                ec = ei && "gpt" === ee.gizmo.gizmo_type && null != ee.gizmo.migrated_plugin_id;
            X[0] !== el ? (t = el?.get("disable_gpt_updates", !1), X[0] = el, X[1] = t) : t = X[1];
            let ed = t,
                eu = ee.gizmo.current_user_permission?.can_write && !ec && !ed,
                {
                    data: eh
                } = (0, o.z)(j.c);
            X[2] !== ee.gizmo.id || X[3] !== eh ? (n = eh?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === ee.gizmo.id
            }), X[2] = ee.gizmo.id, X[3] = eh, X[4] = n) : n = X[4];
            let ep = n;
            X[5] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, T.a)("/gpts/editor"), X[5] = v) : v = X[5];
            let eg = `${v}/${encodeURIComponent(ee.gizmo.id)}`;
            X[6] !== ee.gizmo.id || X[7] !== ee.gizmo.short_url ? (F = ee.gizmo.short_url?.trim() || ee.gizmo.id, X[6] = ee.gizmo.id, X[7] = ee.gizmo.short_url, X[8] = F) : F = X[8], X[9] !== F ? (G = (0, E.c)(F), X[9] = F, X[10] = G) : G = X[10], X[11] !== ea ? (z = (0, A.e)("", (0, A.i)(ea)), X[11] = ea, X[12] = z) : z = X[12];
            let em = `${G}${z}`;
            X[13] !== en ? (B = en.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions"
            }), X[13] = en, X[14] = B) : B = X[14];
            let ef = B;
            X[15] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, a.jsx)(x.a, {
                className: "icon-sm"
            }), X[15] = L) : L = X[15], X[16] !== ef ? (D = (0, a.jsx)(p.a, {
                "aria-label": ef,
                color: "ghost",
                size: "icon",
                children: L
            }), X[16] = ef, X[17] = D) : D = X[17], X[18] !== ee.gizmo.gizmo_type || X[19] !== ee.gizmo.id || X[20] !== er || X[21] !== em || X[22] !== et ? (H = "gpt" === ee.gizmo.gizmo_type ? (0, a.jsxs)(g.c.Item, {
                href: em,
                onClick: e => {
                    e.defaultPrevented || ((0, w.a)(et, s.uc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: ee.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), eo(!1), (0, C.d)(et, null), (0, h.n)(et, "chat"), er(em, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(g.c.ItemIcon, {
                    children: (0, a.jsx)(f.Vh, {})
                }), (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat"
                })]
            }) : null, X[18] = ee.gizmo.gizmo_type, X[19] = ee.gizmo.id, X[20] = er, X[21] = em, X[22] = et, X[23] = H) : H = X[23], X[24] !== ee || X[25] !== et ? (W = () => (0, y.f)(et, O, {
                accountId: et.get(u.f),
                resource: ee
            }), X[24] = ee, X[25] = et, X[26] = W) : W = X[26], X[27] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, a.jsx)(g.c.ItemIcon, {
                children: (0, a.jsx)(f.me, {})
            }), K = (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About"
            }), X[27] = q, X[28] = K) : (q = X[27], K = X[28]), X[29] !== W ? (U = (0, a.jsxs)(g.c.Item, {
                onSelect: W,
                children: [q, K]
            }), X[29] = W, X[30] = U) : U = X[30];
            let ev = ep ? N.a : k.a;
            return X[31] !== ee || X[32] !== en || X[33] !== ep || X[34] !== et ? (V = () => {
                (0, j.f)(et, ee, !ep).catch(() => {
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
            }), X[36] = ep, X[37] = Q) : Q = X[37], X[38] !== ev || X[39] !== V || X[40] !== Q ? ($ = (0, a.jsx)(g.c.Item, {
                leftIconAsset: ev,
                onSelect: V,
                children: Q
            }), X[38] = ev, X[39] = V, X[40] = Q, X[41] = $) : $ = X[41], X[42] !== eu || X[43] !== eg || X[44] !== ee.gizmo.current_user_permission?.can_view_config ? (Y = eu || ee.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(g.c.Item, {
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
            }) : null, X[42] = eu, X[43] = eg, X[44] = ee.gizmo.current_user_permission?.can_view_config, X[45] = Y) : Y = X[45], X[46] !== ee ? (J = (0, a.jsx)(P.a, {
                resource: ee
            }), X[46] = ee, X[47] = J) : J = X[47], X[48] !== es || X[49] !== H || X[50] !== U || X[51] !== $ || X[52] !== Y || X[53] !== J || X[54] !== D ? (Z = (0, a.jsxs)(g.a, {
                align: "start",
                contentWidth: "menu",
                open: es,
                onOpenChange: eo,
                triggerButton: D,
                children: [H, U, $, Y, J]
            }), X[48] = es, X[49] = H, X[50] = U, X[51] = $, X[52] = Y, X[53] = J, X[54] = D, X[55] = Z) : Z = X[55], Z
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
                } = (0, o.x)(j.b, t);
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
                        includeSources: w,
                        messages: C,
                        pendingAttachments: S = [],
                        resources: _ = (0, p.e)(C),
                        turns: I,
                        isTurnActive: j = I.at(-1)?.turn.status === "in_progress"
                    } = e,
                    T = [..._.inputs],
                    P = w ? (0, g.a)(C, I) : [],
                    E = new Map,
                    A = new Map,
                    M = (t = C, -1 !== (n = r()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, v.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    R = [],
                    k = new Map(C.map(e => [(0, s.g)(e), e])),
                    N = r()(C, e => "user" === e.author.role),
                    O = [];
                for (let e of S) T.some(t => t.fileId === e.id || null != e.libraryFileId && t.libraryFileId === e.libraryFileId) || T.push({
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
                    of I) {
                    if (w && "complete" === t.status)
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
                let F = (0, i.b)(I.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return y(t.items).filter(e => "mcp-tool-call" === e.type)
                })).at(-1);
                return a = null == F ? [..._.outputs, ...A.values(), ...E.values()] : [{
                    ...F,
                    key: `site:${F.projectId}`,
                    kind: "site"
                }, ..._.outputs.filter(e => null == F.archivePath || ! function(e, t) {
                    if (null != e.sandboxPath) return e.sandboxPath === t;
                    let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != n && e.name.toLowerCase() === n
                }(e, F.archivePath)), ...A.values(), ...E.values()], {
                    automationIds: (0, u.b)(C, b ?? void 0),
                    browserScreenshots: (0, m.d)(C),
                    inputs: T,
                    sourceTurns: R,
                    outputs: a,
                    progressSteps: O,
                    isPlanSummaryUpdating: j && C.slice(N + 1).some(e => "assistant" === e.author.role && u.a.test(e.recipient ?? "") || "tool" === e.author.role && u.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${I.at(-1)?.id??""}:${j}`,
                    showSources: w,
                    sources: w ? [...Array.from(new Map(C.filter(e => "user" === e.author.role).flatMap(e => (0, l.a)((0, s.e)(e))).map(e => [e.projectId, e])).values(), e => ({
                        kind: "site",
                        key: `site:${e.projectId}`,
                        projectId: e.projectId,
                        label: e.title
                    })), ...P.filter(e => "memory" === e.kind), ...new Map(I.flatMap(e => {
                        let {
                            turn: t
                        } = e;
                        return (t.skillSources ?? []).map(e => [e.key, e])
                    })).values(), ..._.pluginSources, ...P.filter(e => "web" === e.kind && "apps" === e.category), ...P.filter(e => "file-source" === e.kind), ...P.filter(e => "web" === e.kind && "apps" !== e.category)] : [],
                    subagents: (0, f.a)(C)?.subagents ?? []
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
            a: () => F
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
            w = n("dQRk"),
            C = n("jfiJ"),
            S = n("FGJH"),
            _ = n("Vcrm"),
            I = n("OCK3"),
            j = n("dhxJ"),
            T = n("lsky"),
            P = n("rKAs"),
            E = n("ASxG"),
            A = n("rn0J"),
            M = n("XpUB"),
            R = n("G6mJ"),
            k = n("VB5Q"),
            N = n("VTN2");
        let O = E.record(E.string(), E.union([E.string(), E.literal(!0)]));

        function F(e) {
            let t, n, E, F, z, B, L = (0, r.c)(28),
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
                J = void 0 === U || U,
                Z = void 0 === V || V,
                X = void 0 === Q ? "fallback" : Q,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            L[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), L[0] = t) : t = L[0], L[1] !== Z || L[2] !== D || L[3] !== J || L[4] !== W || L[5] !== Y || L[6] !== $ ? (n = [D, J, Z, W, $, Y], L[1] = Z, L[2] = D, L[3] = J, L[4] = W, L[5] = Y, L[6] = $, L[7] = n) : n = L[7], (0, c.useEffect)(t, n), L[8] !== Z || L[9] !== D || L[10] !== Y || L[11] !== $ || L[12] !== ee || L[13] !== H ? (E = () => {
                let e = ee.get(w.j, D),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(w.y, D);
                if (!Z || "tpp" === n || "flora" === n) return null;
                let a = ee.get(w.N, D),
                    r = Y && "conversation" === $ ? ee.get(_.a, D)?.promptMessageId : void 0,
                    s = function(e) {
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
                                                s = N.d.safeParse(r?.reference);
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
                        threadCurrentNode: r ?? ee.get(w.C, D),
                        conversationOrigin: n,
                        isStreaming: (0, w.Bb)(ee.get(w.ab, D)),
                        mode: $,
                        moderationDisclaimersByMessageId: ee.get(w.O, D),
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
                    content: ee.get(I.b, o) ?? i?.[String(s.codeBlockIndex)]?.content ?? s.content
                }
            }, L[8] = Z, L[9] = D, L[10] = Y, L[11] = $, L[12] = ee, L[13] = H, L[14] = E) : E = L[14];
            let en = (0, y.a)(E);
            L[15] !== ee ? (F = (e, t) => {
                let n = e => {
                    (0, m.a)(ee, o.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: s.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
                    })
                };
                return (0, v.c)(e, void 0, () => {
                    "string" == typeof e ? n(e) : e.then(n, G)
                }).then(e => {
                    e && !t?.aborted && ee.get(g.f).success((0, a.jsx)(d.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard"
                    }))
                })
            }, L[15] = ee, L[16] = F) : F = L[16];
            let ea = F;
            return L[17] !== D || L[18] !== en || L[19] !== W || L[20] !== Y || L[21] !== $ || L[22] !== ee || L[23] !== ea ? (z = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!W || ee.get(w.B, D) || null == t || ee.get(S.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let r = ee.get(u.a),
                    s = ee.get(w.C, D),
                    o = ee.get(h.e).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(w.C, D) !== s || Y && "conversation" === $ && t(_.a, D)?.promptMessageId !== n || t(h.e).copyLastCodeBlock !== o) && a.abort()
                    });
                ea((async () => {
                    await (0, C.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, L[17] = D, L[18] = en, L[19] = W, L[20] = Y, L[21] = $, L[22] = ee, L[23] = ea, L[24] = z) : z = L[24], L[25] !== J || L[26] !== X ? (B = {
                enabled: J,
                priority: X
            }, L[25] = J, L[26] = X, L[27] = B) : B = L[27], (0, p.a)("copyLastCodeBlock", z, B), null
        }

        function G() {}
    }),
    LEgg: (function(e, t, n) {
        n.d(t, {
            a: () => C
        });
        var a = n("ABep"),
            r = n("QosV");
        n("slpy");
        var s = n("Q840"),
            o = n("Wf1j"),
            i = n("SaNw"),
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
        var b = n("wtnY"),
            x = n("enMl");
        n("Gt1K");
        var w = n("PCEr");

        function C(e) {
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
            }), d[5] = o) : o = d[5], d[6] !== p || d[7] !== f || d[8] !== g || d[9] !== v || d[10] !== m ? (l = v ? null : (0, a.jsx)(S, {
                chatIcon: p,
                fullScreenTitle: f,
                mainToolbar: g,
                title: m
            }), d[6] = p, d[7] = f, d[8] = g, d[9] = v, d[10] = m, d[11] = l) : l = d[11], d[12] !== y || d[13] !== n || d[14] !== s || d[15] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, s, y, o, l]
            }), d[12] = y, d[13] = n, d[14] = s, d[15] = l, d[16] = c) : c = d[16], c
        }

        function S(e) {
            let t, n, i, u, p, g, f, v = (0, r.c)(16),
                {
                    chatIcon: C,
                    mainToolbar: S,
                    title: _,
                    fullScreenTitle: I
                } = e,
                j = (0, s.y)(m.a);
            return (0, o.a)(), (0, s.z)(d.h), (0, s.z)(c.q), v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(y, {}), v[0] = t, v[1] = n) : (t = v[0], n = v[1]), v[2] !== C || v[3] !== _ ? (i = (0, a.jsx)(x.a, {
                title: _,
                icon: C
            }), v[2] = C, v[3] = _, v[4] = i) : i = v[4], v[5] !== I ? (u = (0, a.jsx)("div", {
                className: "max-w-80 min-w-0 truncate empty:hidden focus-within:overflow-visible",
                children: I
            }), v[5] = I, v[6] = u) : u = v[6], v[7] !== S || v[8] !== u ? (p = (0, a.jsx)(w.a, {
                mainToolbar: S,
                fullScreenChatMenu: u
            }), v[7] = S, v[8] = u, v[9] = p) : p = v[9], v[10] !== j.value.routeKind ? (g = "other" === j.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(b.b, {
                showLauncherButton: !1
            }), v[10] = j.value.routeKind, v[11] = g) : g = v[11], v[12] !== i || v[13] !== p || v[14] !== g ? (f = (0, a.jsxs)(a.Fragment, {
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
            c = n("SaNw"),
            d = n("Sm6l"),
            u = n("HOLv"),
            h = n("NVRI"),
            p = n("MMlk"),
            g = n("UNoV"),
            m = n("RGiF");
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
            h = n("LBM8");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, g, m, f, v, y, b, x = (0, r.c)(34),
                    {
                        gptName: w,
                        accessState: C,
                        onUsePlugin: S,
                        onKeepUsingGpt: _,
                        onRetry: I
                    } = e,
                    j = (0, s.a)(),
                    T = (0, d.e)("2513446768");
                x[0] !== T || x[1] !== j ? (t = j.formatDate((0, u.a)(T.get("retirement_date", "")), {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }), x[0] = T, x[1] = j, x[2] = t) : t = x[2];
                let P = t;
                if ("error" === C && null != I) {
                    let e;
                    x[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceRetry",
                        defaultMessage: "Try again"
                    }), x[3] = e) : e = x[3], n = e
                } else if ("admin" === C) {
                    let e;
                    x[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.viewPlugin",
                        defaultMessage: "View Plugin"
                    }), x[4] = e) : e = x[4], n = e
                } else if ("allowed" === C || "pending" === C) {
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
                if ("error" === C && null == I) {
                    let e;
                    x[7] !== P ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessUnconfirmed",
                        defaultMessage: "We couldn’t check your access to the plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: P
                        }
                    }), x[7] = P, x[8] = e) : e = x[8], p = e
                } else if ("error" === C) {
                    let e;
                    x[9] !== P ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessError",
                        defaultMessage: "We couldn’t check your access to the plugin. Try again, or keep using this GPT until {deadline}.",
                        values: {
                            deadline: P
                        }
                    }), x[9] = P, x[10] = e) : e = x[10], p = e
                } else if ("denied" === C) {
                    let e;
                    x[11] !== P ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessDenied",
                        defaultMessage: "This plugin isn’t available to you. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: P
                        }
                    }), x[11] = P, x[12] = e) : e = x[12], p = e
                } else if (w.trim()) {
                    let e;
                    x[13] !== P || x[14] !== w ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceNamedBody",
                        defaultMessage: "{gptName} is now available as a plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            gptName: w,
                            deadline: P
                        }
                    }), x[13] = P, x[14] = w, x[15] = e) : e = x[15], p = e
                } else {
                    let e;
                    x[16] !== P ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceBody",
                        defaultMessage: "This GPT is now available as a plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: P
                        }
                    }), x[16] = P, x[17] = e) : e = x[17], p = e
                }
                x[18] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsx)(c.a, {
                    asset: h.a,
                    className: "text-secondary"
                }), x[18] = g) : g = x[18], x[19] !== w ? (m = w.trim() ? (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceNamedTitle",
                    defaultMessage: "{gptName} is now a plugin",
                    values: {
                        gptName: w
                    }
                }) : (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceTitle",
                    defaultMessage: "This GPT is now a plugin"
                }), x[19] = w, x[20] = m) : m = x[20];
                let E = "pending" === C,
                    A = "error" === C && null != I ? I : S;
                return x[21] !== n || x[22] !== E || x[23] !== A ? (f = (0, a.jsx)(l.a, {
                    color: "primary",
                    loading: E,
                    size: "dialog",
                    type: "button",
                    onClick: A,
                    children: n
                }), x[21] = n, x[22] = E, x[23] = A, x[24] = f) : f = x[24], x[25] !== _ ? (v = null == _ ? null : (0, a.jsx)(l.a, {
                    color: "outline",
                    size: "dialog",
                    type: "button",
                    onClick: _,
                    children: (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceKeepUsing",
                        defaultMessage: "Keep using GPT"
                    })
                }), x[25] = _, x[26] = v) : v = x[26], x[27] !== f || x[28] !== v ? (y = (0, a.jsxs)("div", {
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
                let t, n, y, b, x, w = (0, r.c)(22),
                    {
                        conversationId: C
                    } = e,
                    S = (0, s.y)(d.a),
                    _ = (0, s.z)(c.b),
                    I = (0, s.x)(g.j, C),
                    j = (0, s.x)(f.c, I ?? C),
                    T = (0, h.b)(),
                    P = (0, l.c)(),
                    E = (0, o.useRef)(null);
                w[0] !== T || w[1] !== S || w[2] !== I || w[3] !== P ? (t = () => {
                    null != I && (0, m.b)(S, I, e => {
                        var t;
                        let n, a, r, s = T.getScrollElement(),
                            o = s && (n = (t = s).getBoundingClientRect(), a = e => {
                                let t = e.getBoundingClientRect();
                                return t.height > 0 && t.bottom > n.top && t.top < n.bottom
                            }, (r = t.querySelector("[data-thread-reading-passage]")) && a(r) ? r : Array.from(t.querySelectorAll("[data-content-search-unit-key], [data-user-message-bubble]")).find(a)),
                            c = o?.getBoundingClientRect().top;
                        if ((0, i.flushSync)(e), s && o && null != c && s.contains(o)) {
                            let e = (0, l.b)(o.getBoundingClientRect().top - c, P);
                            0 !== e && T.compensateScrollToDistanceFromBottomPx((0, p.b)(s) - e)
                        }
                    })
                }, w[0] = T, w[1] = S, w[2] = I, w[3] = P, w[4] = t) : t = w[4];
                let A = t;
                w[5] !== C || w[6] !== A || w[7] !== S || w[8] !== I ? (n = () => {
                    let e = S.get(f.c, I ?? C);
                    S.get(c.b) || e?.hasError || A()
                }, w[5] = C, w[6] = A, w[7] = S, w[8] = I, w[9] = n) : n = w[9];
                let M = (0, o.useEffectEvent)(n);
                w[10] !== T || w[11] !== _ || w[12] !== M ? (y = () => {
                    if (_) return;
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
                }, w[10] = T, w[11] = _, w[12] = M, w[13] = y) : y = w[13];
                let R = j?.cursor,
                    k = j?.hasError;
                if (w[14] !== T || w[15] !== _ || w[16] !== I || w[17] !== R || w[18] !== k ? (b = [T, _, I, R, k], w[14] = T, w[15] = _, w[16] = I, w[17] = R, w[18] = k, w[19] = b) : b = w[19], (0, o.useEffect)(y, b), null == j || j.complete || null == j.cursor) return null;
                let N = j.hasError ? A : null;
                return w[20] !== N ? (x = (0, a.jsx)(u.a, {
                    ref: E,
                    onRetry: N
                }), w[20] = N, w[21] = x) : x = w[21], x
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
            u = n("UxN3"),
            h = n("SGsN"),
            p = n("svjy"),
            g = n("nlNF"),
            m = n("crAQ"),
            f = n("FR8U"),
            v = n("OWtl"),
            y = n("OtLV"),
            b = n("w7E5"),
            x = n("wVX4"),
            w = n("c5lN"),
            C = n("QmkR"),
            S = n("xEXG"),
            _ = n("KMqT"),
            I = n("J6LI"),
            j = n("FgUr"),
            T = n("WLgA");
        let P = (0, s.u)(v.a, 0);

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
                surface: v,
                navigate: S,
                onCreateProjectDialogCloseAutoFocus: E
            } = e, M = "title-menu" === v, R = (e, t) => M ? {
                icon: (0, a.jsx)(u.b, {
                    icon: {
                        16: e,
                        20: t
                    }
                }),
                nativeIcon: e
            } : {
                icon: e
            }, {
                isWorkConversation: k,
                sourceMemoryBlocked: N
            } = (0, I.c)(n, r), O = N ? y.a.projectOnlyMoveUnavailable : void 0, {
                data: F,
                isPending: G,
                isError: z
            } = s, {
                data: B,
                isPending: L,
                isError: D
            } = o, H = (0, j.a)(B, F, r?.gizmo.id), W = "allowed" === c, q = e => {
                let a = t.get(P) + 1,
                    r = t.get(g.e);
                t.set(P, a), (0, C.T)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(n => {
                    n && t.get(P) === a && t.get(g.e) === r && S((0, T.c)(e.gizmo.id))
                }).catch(() => {
                    t.get(h.f).danger(t.get(p.a).formatMessage(A.moveFailed), {
                        errorAnalytics: {
                            toastId: "move_conversation_to_snorlax_error"
                        }
                    })
                })
            }, K = [];
            for (let e of (W && (K.push({
                    id: "new-chatgpt-project",
                    ...R(d.Hg, d.Ig),
                    message: A.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        t.set(P, e => e + 1), (0, w.a)(t, q, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: k,
                            onCloseAutoFocus: E
                        })
                    }
                }), H.length > 0 && K.push({
                    id: "new-project-separator",
                    type: "separator"
                })), H)) {
                let {
                    targetMemoryBlocked: t
                } = (0, I.c)(n, void 0, e), r = t ? (0, _.a)((0, x.c)(e)) : void 0;
                K.push({
                    id: `move-to-project:${e.gizmo.id}`,
                    icon: (0, a.jsx)(f.a, {
                        className: M ? void 0 : "icon-xs",
                        size: M ? "leading" : 16,
                        color: e.gizmo.display.theme,
                        fallbackIcon: M ? (0, a.jsx)(u.b, {
                            icon: {
                                16: d.Ad,
                                20: d.Bd
                            }
                        }) : (0, a.jsx)(d.Ad, {}),
                        icon: e.gizmo.display.emoji
                    }),
                    nativeIcon: (0, m.b)(e.gizmo.display.emoji),
                    message: A.projectName,
                    messageValues: {
                        projectName: e.gizmo.display.name
                    },
                    enabled: null == r,
                    tooltipMessage: r,
                    onSelect: () => q(e)
                })
            }
            return l && (z || D) ? K.push({
                id: "retry-project-destinations",
                message: A.destinationsFailed,
                closeOnSelect: !1,
                onSelect: () => {
                    Promise.all([t.query.invalidate(b.a), t.query.invalidate(C.m)])
                }
            }) : l && (G || L) ? K.push({
                id: "loading-project-destinations",
                message: A.loading,
                tooltipMessage: A.reopen,
                enabled: !1
            }) : z || D || G || L || 0 !== H.length || W || K.push({
                id: "no-project-destinations",
                message: A.noDestinations,
                enabled: !1
            }), [...i && K.length > 0 ? [{
                id: "move-to-project",
                ...R(d.Dd, d.Ed),
                message: A.moveToProject,
                enabled: !N,
                tooltipMessage: O,
                submenu: K
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                ...R(d.Id, d.Jd),
                message: A.removeFromProject,
                enabled: !N,
                tooltipMessage: O,
                onSelect: () => {
                    t.set(P, e => e + 1), (0, C.T)({
                        scope: t,
                        conversationId: n.id,
                        projectId: null
                    }).catch(() => {
                        t.get(h.f).danger(t.get(p.a).formatMessage(A.removeFailed), {
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
                    m = (0, s.y)(v.a),
                    f = (0, l.$)(),
                    y = (0, s.z)(b.a),
                    x = (0, s.z)(C.m),
                    w = (0, S.b)();
                if (i[0] !== d || i[1] !== f || i[2] !== u || i[3] !== x || i[4] !== h || i[5] !== w || i[6] !== y || i[7] !== m || i[8] !== g) {
                    let e = E({
                            scope: m,
                            conversation: d,
                            project: h,
                            projectListQuery: y,
                            pinnedProjectsQuery: x,
                            showMoveToProject: g,
                            projectCrudStatus: w,
                            surface: "project-menu",
                            navigate: f,
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
                    t = e.map(n), i[0] = d, i[1] = f, i[2] = u, i[3] = x, i[4] = h, i[5] = w, i[6] = y, i[7] = m, i[8] = g, i[9] = t
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
    Yjxz: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e) {
                return "language-learning" === e || "language-diagnostic" === e
            },
            b: function(e) {
                let {
                    mapping: t,
                    currentNodeId: n,
                    sourceMessageId: a
                } = e;
                if (null == t || null == a) return !1;
                let r = new Set,
                    s = n;
                for (; null != s && !r.has(s);) {
                    r.add(s);
                    let e = t[s];
                    if (e?.message == null) break;
                    let n = e.message;
                    if (s === a) return "assistant" === n.author.role;
                    if ("tool" !== n.author.role || "dil.state" !== n.author.name || n.metadata?.is_visually_hidden_from_conversation !== !0) break;
                    s = e.parent
                }
                return !1
            }
        })
    }),
    JUxu: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("SaNw"),
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
            o = n("SaNw"),
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
        let l = (0, o.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(362890)]).then(n.bind(n, "hhV7"))).ChatGptThreadSummaryPanelBody, {
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
    GKsW: (function(e, t, n) {
        var a = n("SRbQ"),
            r = n("ABep"),
            s = n("QosV"),
            o = n("Q840"),
            i = n("zd8w"),
            l = n("GaA7"),
            c = n("OWtl"),
            d = n("tSEg"),
            u = n("n5oN");
        let h = (0, o.u)(c.a, () => []);

        function p(e) {
            let t, n, a, r, d, u, p = (0, s.c)(13),
                {
                    title: v,
                    nativeTitle: y
                } = e,
                b = void 0 === y ? v : y,
                x = (0, o.y)(c.a),
                [w] = (0, i.useState)(g);
            return p[0] !== b || p[1] !== w || p[2] !== x || p[3] !== v ? (t = () => {
                if (l.a?.windowTitle == null) return;
                let e = {
                    owner: w,
                    title: null == v ? void 0 : b ?? null
                };
                x.set(h, t => t.some(e => e.owner === w) ? t.map(t => t.owner === w ? e : t) : [...t, e]), f(x)
            }, n = [x, w, v, b], p[0] = b, p[1] = w, p[2] = x, p[3] = v, p[4] = t, p[5] = n) : (t = p[4], n = p[5]), (0, i.useEffect)(t, n), p[6] !== w || p[7] !== x ? (a = () => () => {
                l.a?.windowTitle != null && (x.set(h, e => e.filter(e => e.owner !== w)), f(x))
            }, r = [x, w], p[6] = w, p[7] = x, p[8] = a, p[9] = r) : (a = p[8], r = p[9]), (0, i.useEffect)(a, r), p[10] !== v ? (d = () => {
                if (null == v) return;
                let e = document.title;
                m(v);
                let t = document.title;
                return () => {
                    document.title === t && m(e)
                }
            }, u = [v], p[10] = v, p[11] = d, p[12] = u) : (d = p[11], u = p[12]), (0, i.useEffect)(d, u), null
        }

        function g() {
            return Symbol()
        }

        function m(e) {
            let t = document.head.querySelector("title")?.firstChild;
            t instanceof Text && null == t.nextSibling ? t.data = e : document.title = e
        }

        function f(e) {
            let t = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                let n = e.get(h).findLast(e => void 0 !== e.title);
                (0, a.a)(t, l.a.windowTitle?.setTitle(n?.title ?? null), !1)
            } catch (e) {
                t.error = e, t.hasError = !0
            } finally {
                (0, a.e)(t)
            }
        }
        n.d(t, {}, {
            a: p,
            b: function(e) {
                let t, n = (0, s.c)(2),
                    {
                        title: a
                    } = e,
                    i = (0, o.y)(d.a),
                    l = (0, o.x)(u.a, `${i.value.pathname}${i.value.search??""}`),
                    c = a ?? l;
                return n[0] !== c ? (t = (0, r.jsx)(p, {
                    title: c
                }), n[0] = c, n[1] = t) : t = n[1], t
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
                let t, n, m, f, v, y, b, x, w, C = (0, r.c)(40),
                    {
                        align: S,
                        bottomBoundarySelector: _,
                        children: I,
                        className: j,
                        onOpen: T,
                        portalTargetSelector: P,
                        targetContainer: E,
                        targetContainerRefs: A,
                        targetSelector: M
                    } = e,
                    R = void 0 === M ? h.b : M,
                    k = (0, i.c)(),
                    N = (0, o.useRef)(null),
                    O = (0, o.useRef)(!1),
                    F = (0, o.useRef)(null),
                    G = (0, o.useRef)(null),
                    [z, B] = (0, o.useState)(null);
                C[0] !== T ? (t = e => {
                    T?.(e)
                }, C[0] = T, C[1] = t) : t = C[1];
                let L = (0, o.useEffectEvent)(t);
                C[2] !== z || C[3] !== k ? (n = () => {
                    let e = F.current?.getBoundingClientRect();
                    if (null == z || null == e) return;
                    let t = z.portalTarget?.getBoundingClientRect(),
                        n = null == t ? 1 : k;
                    return {
                        point: {
                            x: e.left + e.width / 2,
                            y: e.bottom
                        },
                        width: e.width,
                        selectionRect: {
                            x: z.rect.left * n + (t?.left ?? 0),
                            y: z.rect.top * n + (t?.top ?? 0),
                            width: z.rect.width * n,
                            height: z.rect.height * n
                        },
                        windowZoom: k
                    }
                }, C[2] = z, C[3] = k, C[4] = n) : n = C[4];
                let D = (0, d.a)(n);
                if (C[5] !== _ || C[6] !== L || C[7] !== P || C[8] !== E || C[9] !== A || C[10] !== R || C[11] !== k ? (m = () => {
                        let e = null,
                            t = () => {
                                null != N.current && (window.cancelAnimationFrame(N.current), N.current = null)
                            },
                            n = () => {
                                t();
                                let e = window.getSelection();
                                null == G.current && (null == e || 0 === e.rangeCount || e.isCollapsed) || (N.current = window.requestAnimationFrame(() => {
                                    N.current = null;
                                    let e = null != E || null == A ? [E] : A.map(g).filter(p),
                                        t = null;
                                    for (let n of e)
                                        if (null != (t = (0, u.c)({
                                                bottomBoundarySelector: _,
                                                portalTarget: null == P ? void 0 : n?.querySelector(P) ?? void 0,
                                                targetContainer: n,
                                                targetSelector: R,
                                                windowZoom: k
                                            }))) break;
                                    (0, u.d)(G.current, t) || (null == G.current && null != t && L(t), G.current = t, B(t))
                                }))
                            },
                            a = () => {
                                let e = window.getSelection();
                                O.current || null == e || 0 === e.rangeCount || e.isCollapsed || n()
                            },
                            r = t => {
                                let r = window.getSelection(),
                                    s = G.current?.portalTarget;
                                if (!O.current && null != r && 0 !== r.rangeCount && !r.isCollapsed) {
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
                                n instanceof Node && F.current?.contains(n) || (O.current = !0, t(), G.current = null, B(null))
                            },
                            o = () => {
                                O.current = !1, n()
                            },
                            i = () => {
                                if (O.current) {
                                    t(), G.current = null, B(null);
                                    return
                                }
                                n()
                            };
                        return n(), document.addEventListener("selectionchange", i), window.addEventListener("dblclick", n), window.addEventListener("keyup", n), window.addEventListener("pointerdown", s), window.addEventListener("pointerup", o), window.addEventListener("pointercancel", o), window.addEventListener("resize", a), window.addEventListener("scroll", r, !0), () => {
                            null != e && window.clearTimeout(e), t(), document.removeEventListener("selectionchange", i), window.removeEventListener("dblclick", n), window.removeEventListener("keyup", n), window.removeEventListener("pointerdown", s), window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o), window.removeEventListener("resize", a), window.removeEventListener("scroll", r, !0)
                        }
                    }, C[5] = _, C[6] = L, C[7] = P, C[8] = E, C[9] = A, C[10] = R, C[11] = k, C[12] = m) : m = C[12], C[13] !== _ || C[14] !== P || C[15] !== E || C[16] !== A || C[17] !== R || C[18] !== k ? (f = [_, P, E, A, R, k], C[13] = _, C[14] = P, C[15] = E, C[16] = A, C[17] = R, C[18] = k, C[19] = f) : f = C[19], (0, o.useEffect)(m, f), null == z) return null;
                let H = .5;
                "start" === (void 0 === S ? "center" : S) && (H = +("rtl" === z.direction));
                let W = z.rect.left + z.rect.width * H,
                    q = z.viewportHorizontalBounds.left + 8 - W,
                    K = z.viewportHorizontalBounds.right - 8 - W,
                    U = z.portalTarget ?? document.body,
                    V = null == z.portalTarget ? "fixed z-50" : "absolute z-[1]";
                C[20] !== j || C[21] !== V ? (v = (0, s.b)("pointer-events-none w-max", V, j), C[20] = j, C[21] = V, C[22] = v) : v = C[22];
                let Q = z.viewportHorizontalBounds.right - z.viewportHorizontalBounds.left - 16,
                    $ = z.rect.top - 8,
                    Y = `translateX(clamp(${q}px, ${-100*H}%, calc(${K}px - 100%))) translateY(-100%)`;
                return C[23] !== W || C[24] !== Q || C[25] !== $ || C[26] !== Y ? (y = {
                    left: W,
                    maxWidth: Q,
                    top: $,
                    transform: Y
                }, C[23] = W, C[24] = Q, C[25] = $, C[26] = Y, C[27] = y) : y = C[27], C[28] !== I || C[29] !== D || C[30] !== z || C[31] !== k ? (b = null == z.portalTarget && 1 !== k ? (0, a.jsx)("div", {
                    style: {
                        zoom: k
                    },
                    children: I(z, D)
                }) : I(z, D), C[28] = I, C[29] = D, C[30] = z, C[31] = k, C[32] = b) : b = C[32], C[33] !== y || C[34] !== b || C[35] !== v ? (x = (0, a.jsx)("div", {
                    ref: F,
                    className: v,
                    style: y,
                    children: b
                }), C[33] = y, C[34] = b, C[35] = v, C[36] = x) : x = C[36], C[37] !== x || C[38] !== U ? (w = (0, a.jsx)(l.a, {
                    container: U,
                    children: x
                }), C[37] = x, C[38] = U, C[39] = w) : w = C[39], w
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
            g = n("elIT");
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, f, v, y, b = (0, r.c)(56),
                    {
                        conversationTerminology: x,
                        onAddSelectedText: w,
                        onStartFileAnnotation: C,
                        onDismissFileAnnotation: S,
                        onCommentSelectedText: _,
                        onEditModeChange: I,
                        onEditSelectedText: j,
                        onMoreDetails: T,
                        onOpenSideChat: P,
                        resume: E,
                        selectedText: A
                    } = e,
                    M = void 0 === x ? "task" : x,
                    R = (0, o.a)(),
                    [k, N] = (0, s.useState)(E?.mode === "edit" ? E.instruction : ""),
                    [O, F] = (0, s.useState)(E?.mode ?? "actions"),
                    [G, z] = (0, s.useState)(null);
                if (null != G) {
                    let e, t, n;
                    return b[0] !== S ? (e = () => S?.(!1), t = () => S?.(!0), b[0] = S, b[1] = e, b[2] = t) : (e = b[1], t = b[2]), b[3] !== G.rect || b[4] !== G.submit || b[5] !== e || b[6] !== t ? (n = (0, a.jsx)(l.a, {
                        entryRect: G.rect,
                        onCancel: e,
                        onEscape: t,
                        onSubmit: G.submit
                    }), b[3] = G.rect, b[4] = G.submit, b[5] = e, b[6] = t, b[7] = n) : n = b[7], n
                }
                if ("pending" === O) return null;
                if ("edit" === O && null != j) {
                    let e, t, n, r, s, o, i, l, d, p;
                    return b[8] !== I ? (e = e => {
                        e.stopPropagation(), "Escape" === e.key && (e.preventDefault(), I?.(!1), F("actions-focused"))
                    }, b[8] = I, b[9] = e) : e = b[9], b[10] !== k || b[11] !== I || b[12] !== j ? (t = e => {
                        e.preventDefault(), 0 !== k.trim().length && (F("pending"), j(k).then(e => {
                            "retry" === e && (I?.(!1), F("actions-focused"))
                        }))
                    }, b[10] = k, b[11] = I, b[12] = j, b[13] = t) : t = b[13], b[14] !== R ? (n = R.formatMessage({
                        id: "selectedTextOverlay.editInput",
                        defaultMessage: "Edit instruction"
                    }), b[14] = R, b[15] = n) : n = b[15], b[16] !== R ? (r = R.formatMessage({
                        id: "selectedTextOverlay.editPlaceholder",
                        defaultMessage: "Describe the edit…"
                    }), b[16] = R, b[17] = r) : r = b[17], b[18] === Symbol.for("react.memo_cache_sentinel") ? (s = e => {
                        N(e.target.value)
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
                return b[33] !== M || b[34] !== w || b[35] !== C || b[36] !== A ? (t = null != w || null != C ? (0, a.jsx)(d.b, {
                    onClick: e => {
                        null != C ? z({
                            rect: (e.currentTarget.parentElement ?? e.currentTarget).getBoundingClientRect(),
                            submit: C()
                        }) : (window.getSelection()?.removeAllRanges(), w?.(A))
                    },
                    children: "chat" === M ? (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.addToChat",
                        defaultMessage: "Ask ChatGPT"
                    }) : (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.addToCodex",
                        defaultMessage: "Add to chat"
                    })
                }) : null, b[33] = M, b[34] = w, b[35] = C, b[36] = A, b[37] = t) : t = b[37], b[38] !== T || b[39] !== A ? (n = null != T ? (0, a.jsx)(d.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), T(A)
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.moreDetails",
                        defaultMessage: "More details"
                    })
                }) : null, b[38] = T, b[39] = A, b[40] = n) : n = b[40], b[41] !== P || b[42] !== A ? (m = null != P ? (0, a.jsx)(d.b, {
                    onClick: e => {
                        window.getSelection()?.removeAllRanges(), P(A, (0, p.b)(e))
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.askInSideChat",
                        defaultMessage: "Ask in side chat"
                    })
                }) : null, b[41] = P, b[42] = A, b[43] = m) : m = b[43], b[44] !== _ ? (f = null != _ ? (0, a.jsx)(d.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), _()
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.comment",
                        defaultMessage: "Comment"
                    })
                }) : null, b[44] = _, b[45] = f) : f = b[45], b[46] !== O || b[47] !== I || b[48] !== j ? (v = null != j ? (0, a.jsx)(d.b, {
                    autoFocus: "actions-focused" === O,
                    onClick: () => {
                        I?.(!0), F("edit")
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.edit",
                        defaultMessage: "Edit"
                    })
                }) : null, b[46] = O, b[47] = I, b[48] = j, b[49] = v) : v = b[49], b[50] !== t || b[51] !== n || b[52] !== m || b[53] !== f || b[54] !== v ? (y = (0, a.jsxs)(d.a, {
                    children: [t, n, m, f, v]
                }), b[50] = t, b[51] = n, b[52] = m, b[53] = f, b[54] = v, b[55] = y) : y = b[55], y
            }
        })
    }),
    RGiF: (function(e, t) {
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
    })
};